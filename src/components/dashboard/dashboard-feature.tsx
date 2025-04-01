/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "EegCEdveqYfu9168hBtTTaVZjZU9y4qeha53mPhJjGfLhY9LteaFg9QPGLpeeSJjZrHLJ5AJPpgoT1YixVXWTZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUHJKSsrgkBayuessUARvgoYWFHmcGtmwNGc22fcAZEG1Szc8725fZoLx8gq1iJuwqNPEqZVfJs65oN58YxPkYZ",
  "key1": "3hWQJc8tTXVTZabEv1Gmg7NxfCDHxfvevAzmce69FBWyCoWFadNSZJSuHA4AD9GYz9YhdwBiqhkabkywsZEhoKwf",
  "key2": "vCfWsN9obukGmV9sKRgDAcwVFQSe1oJyY872Pex8gHnwcGWjTPvhCtEf3H8YwtYwo3BtE9F8wLxth2Rc8X8gR5D",
  "key3": "5RzG1MA85yg75huxikncmm15vG2WiTBt89vkhofQvmaeFbGZ5qnL3jZ1M6ojHFWSmuzGMzCNirLDKkZkqGmEeU2k",
  "key4": "UN41WD6EG815yrq6Y22xdUE6aAz6tUXMqYZGuqouwjjAzypX96XyXEid9Cx3geiGQ42JgpdvmZaz62DUGK3N6Du",
  "key5": "3AbMG1XQMixoG8FypuwwyKQJGm1n7vxsRbWpD9v3JtBb7JoXZCtnEMPPZEWKhpHcf5t4u2dEQh9gAtjH7wuPLn9k",
  "key6": "o7ikupvqAmbzdHs59PA7bhQWdUPodPhFpV1B7F2J27YASZbzwDJZfwpE4uWyxsVYy5Z797DbQ9bBggnBVc2Wa5C",
  "key7": "678y4SnNRm7Pexov3nquLGdU3EbCDSSZaQ1j9YXRxYBJt17FeqjFzDN2mwZV8WbPjAyCKy1pciZGGR75ZL3tmo8j",
  "key8": "2W2vQEehaKVtYACKjnp1mvWEk9xJXePKtXwS5zfJKzYtMk89Hch6jL2f8RMANsdqMv2qkuE1h7r4rYD6b2qrnsRq",
  "key9": "3nFmxUJHNXBddWATC1Y6NgUxGxDoQnhk5AXnRKjUCvEvzJjpm7UGjsWeQUQQpDh3oueEuEiKVkeJWDEHyTGTuzFJ",
  "key10": "3qByverNBPcSBJzVAVNeZ9A2aAbJVzmFxhxMS6RZGwGP1vatQiw2MagLf9v57ToZp7mjeXhRJwYWUKaezxXQTkm",
  "key11": "4rPNnzHYE2kuoyecjPkSHA9cuw5qqRNMWXTm6jwbCV85BgwYuwxbEFkCoewJKe53i7FeWvT1YannBQcPfCDU43pj",
  "key12": "AEktgJzf3wBU4P7KWrj9q7PnfYvanFpbMG7Ati7NVbqDhvmAxLWJm2ePCZ8x226YuJZbrCBHKHCAxkw4WXfLbvg",
  "key13": "5z9wgA2jVEkk5hn85R5fvuBtx2qyXVjggVnQhX7t2BY4U9E3Za9eqkt6curPVt9ijs88XQzU92s7iKEzi1A2Nn7n",
  "key14": "5M2YWx1efXTJkuT5cuD3nnhmfTmYvYQPtaqFNzsuUSK4kf8ao7TqbpttZn3dn5UMAffDvmajaHbNQH7DrFe44rcn",
  "key15": "2FVcZNXZzcJJ8Y7bxaP2fRiU7bAhebDH5CyubLAMVpfuUP7KPvnZDq79hDjDEPezLyVBX96PZmwh4a2kY2prwgr7",
  "key16": "DhcCP2WUYvhbbz57TQQrMk7qdqWo93HjrmdNF8gKZfJtsPTZGwLEGcoL45AvLufd2btyymDQWivbU2qy6ydBoGQ",
  "key17": "2TbF3gQkcQDJFUWNc3dHvdgrf7NcarCNdMdMSGr35taPTUFk5fg81CxZNFEME2Y5kKzqGxgD4P3m7X8uockjVyGN",
  "key18": "4Pps55qc5C1LD1r5yLciSbj94HPvr7V6EL7ewShL67oFZuN2ejNkUXAJB4yhJasfuaNu2LgDEQBS8269itQKaz86",
  "key19": "5ZfTEvZ4omKpvhuFSWB75LwpfBfwiYv1Rjgg2BCU4qtx77iDpMqe5SHUrQQcfP87pWBmxJT2M5ET49hTZ16h2eny",
  "key20": "tSzzAb8CVKc5zGveZucTMdbHSdQs4qjzAEZocVXHM8xBeNTh9XWtPxVUYa3ijzCikxSJ96NobRWJkArxtzjVceX",
  "key21": "56jY1AzpZwQTbe57kxn9GPNzkofS8jPWTTDCbRb68BvSMoJ5sfweSvbqpzRiYrLNrEemy1mHc4966MGMbzJuBUJ4",
  "key22": "24qWjFiiffhK366NStq5GbnsD5VuG8gq9W3jrCR5AqnqDUyex2cEdKmL1CJLTMEkFyTaNupfjWvqASGAS4aQRHk2",
  "key23": "5ag3rcHsQmGSr9iEkDMRW7QRzT7GM8H1LmECPTip1b1WtMTn4gazX1UnAZQsRrLStYEQyY7QSSxoYSMZ3FMs6ooL",
  "key24": "4j1eLSiTyC4SE4GG2aYzdZBgZ2k4y1HwqXy4SxLZzowrkSdWczpdmK7RatNQKZ9JcsGK8QmKbeiPhLjS7Svr63sL",
  "key25": "6JWsq3qcruYZZVzMJjHPwp2UkzLCGnxcxMtsmTnbGQeCWdtuMmqmA3ddtbpYcPzk16KTc8aR6M8HXZHyxj1tbn9",
  "key26": "2tzcajjt1xj63BMXetEp5w5GXzeSfndD6wJ6LzMUTaFZcn9Gi8CRAw8XoGHbgVczx4gwtvXt419So2cDW3P4f1VU",
  "key27": "39PLRhxMxve82G3BYc34hu2rKXLpY3tep5iiRS2Gm6EM5TebU1EAffQ49oEEa8yp7iGtpF6jQmgteuzreRVxqwc2",
  "key28": "4agPkFPpndf4jxZGTeYmEBDmKa7nhsjgQh52Nhnkh9fqokq1Y39oo3ymmUdJFcqxAXA9YpKD98Vmqsu2wVnqWejY",
  "key29": "QF1Y2kg8XJYuj584MaQoWtuFcCaQojuxKSYpEE9LYAvR7o9u6heJnXmZbnC9efKtt4WxLtumiKeV42pLWgXrXq7",
  "key30": "2NzrRw3TaV7r9TKooQ1Gwt2ba8LCi2B8rFyFAEK7j4zyGp2rpx8ybStFoWmQyQY9S3dvT2gFEWG1AYmnpTfSZSyW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
