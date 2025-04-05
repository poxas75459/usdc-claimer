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
    "NkSKBp1VpbfYLL7njiRHkyywXBm2ChJYbSTZFZmaxBEWxTsWQChVgvfhzZQhaA4RWGX6sg3BT41B7x6UdpB4m9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbQ9RKYAWYbuh5mWYRFN1k7nNZAQcHexWZFB5vjVrGSav3VNU2nwpKp7PbSWDdCpqWzqk5jQA1TPVhhrdsciskW",
  "key1": "32TdbpGUAgH29ydnEto7URd5ev4zChfFe7kaiXdq2QC8PR8qaPDhZiRYmntZnRHmJM1MtFEz5D6xfX9U88ui5yRz",
  "key2": "5tT7RE9Xfj4B4bdLziLvWQmLNAgvMbA9sb9pqjmFjqWeZ1rB75PZVoDTjNYHfbNh7iBkksSJR4igK7Brwwie8Ncg",
  "key3": "4RnNLJYer7jbuQwVwSXBYH7FuDnn33q6sDM11urMbxSbNMDXmHdDfgyozjhocGQWeud71GcddF6C8G4oPKeCGHzH",
  "key4": "2hF1uRYs3AMftzq4fSxwCRM9m6dWR8FVHYGSP1HuX4tKKRYa3Z5Hytb51763bSGCkw6Hj8GSc83KmNnCzJuSf9kY",
  "key5": "5mbuWr3kKnEJwA4zquG8ghwYaeBoBGFbDQedCTaNZQhnqaACbdgc7E3objnyhu9FnLWePuzD7uKdrvxkkJfr2Zmu",
  "key6": "3CccFVmjNVkjQoYTbsTX6ae9vvk7uuKEDr8tBPezfbUyB3ULMmrCXx41EsrL5bZBA4FV5vEcJUeiZzNTtXrSXX2",
  "key7": "2b7hKBwD7K5g8xZTTo5A36DZewy91EykAff3KnRHEUwhrZ24uhUtGPLB4KkPJYWu4KbbmSRRVa69xzpF1kHUCJJy",
  "key8": "SiAdAJJqdN22QAYLwyYB2fwE27MNa37EfEcZBTX1w4W1WkiPWrZ8mwezvbDgLjf31813WKJHpGa7cdfsDcP1GJW",
  "key9": "5SaVQa95fBxB9kjKjTcuj48bFe7DTxkjdHic8UPKVKmjf9eoGcGpDJshGX2RKZmb5rRavBMApjEvjKfWmkqKahEY",
  "key10": "NCGPSe1Xip66sTKv3WTCf8UiaXNtGantipFCzCtv4iBSgb8LrtJBxTw5uQ7ifMLGB5MJSLt1MFc7WjQcqvg6bRr",
  "key11": "4U7oR6bsDoQ7GQ2G6jVcFrqmAXEiT4c5Dwd195VY6Pr9ga6PvAAzwGMBDHunebR3PxK1qEp1S8fdP76zNzvkkUi7",
  "key12": "3HVUPheaJvfgHhQFW49bq8RMYKbomayUnbjB7dzEZXbqiFbVgrRB3Ly9NfuyWvBqnA7UsssgbfpPC8Mg3fk7EqMd",
  "key13": "5Bqqsw1tJX2wgy8WyrsyF8VHmnfAyeSTZh8R5YKJRnXWMnaiFBuWnkirCGjZFTocNUGpJv8gzEC2j4BJchrgsdRZ",
  "key14": "2esL6uBLy2EVLZkRGqWBN3nRTk1Uh5WDWyhzt79X13ahgULWF87gwAJzkXJwc2MMxrzw2y7UzxZdzqPNX5pjAfM2",
  "key15": "4kVsmiHdSdTMAv277FVQLDNguALhw4AS7rxGXogq76yZTrbmhwSkokAw9mG7aoLYM5uGBFCBU9G7tLCF74e5MCJj",
  "key16": "5Mg2wHAAfpo8d1QLVA3uEbBowXjhcVrMZ6umqG5XxhowN6fYDj6D5jHCHEmuK6qi3eRcVvbBLcwwTWpTQxn22kiF",
  "key17": "54DCRtxAV9TdBUsnNPJP1HBv5LpR7GfQ99wdxExuzFBfbmEQuLKM1JCuGWZekysbxEXpAC9Ygf5zLbEwc2v3NCxV",
  "key18": "2carL9od88gXyqYRr8nFNmgiPMHdM8H8XYU267w3epa5ndYviWhvjXtRLxWMvbVGkV5XHJEdNhfNFP6c6Jo9kPPp",
  "key19": "2jCkwwBpg9vdNwAJ6Rejxs8ukFuUrTcvi6t4Wp3CdjG1piyqffhKsG4mLoWonE2P9joHrHP7keDvC5gqvVRymKby",
  "key20": "3HRkP4BnQyhVqxZ59y8ACmtya9LXKZExf2wihUegyMH7oAUKT88Ucp2eBacbTGkNzkxxpXUKMFkJFFPKuBJoYYF",
  "key21": "2w8fXzVYCEoNTLBGaChusADjJtwUvgUY6d9HVWpG7hzb1KazREQs5NnryDrVwBP3VVSJ7G99TDsoKoY1cTMAuCTm",
  "key22": "41ApwanyArKzZj2rCLw51oV6w6E8tvQgjXwALitQMy1iFsgHDssoSGQDYyCY86WnJCdLzEwSgt9g2rskjjJX9aJo",
  "key23": "488ZJ4LY1rpw98npemaC4q1fNV4cJSqL535BLTu3yNZoqCj3FgpVQgiorLxc5njD2rsD6opEgencrsPZjGx2Tk1T",
  "key24": "5WYC8RNVFXoZwriyMRgCLqQQxaAwcVBky3pvnDERGxc9vo3Zt2F29YFw8B8VRrMeTqhoXeUi619niKaJ3wDDJShv",
  "key25": "hymHCh5u5GNDB9vj4bg8vBJ2snnedSK5Yth6MXATg4E8gui6wRoJiDiycxHdMUPHmvLGXG3AB9PhdTqbi8YCDci",
  "key26": "2nJ7tDn5WwK8UkFdDgUbAVrhBNAkjsJD3T4434Gs8kGb8F4ejmDaMPKYFuXyx7W3njEAMV6N33QxYPdV1hWdYXD1"
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
