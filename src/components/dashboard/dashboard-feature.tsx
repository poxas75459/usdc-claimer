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
    "4yxCWetxNnMEcjS5b4N53zH7vAvGBkCexxDWgjSqjgMX3gCR7YJF9MTdjmj5hvdVffdEzYRriXJTtwjdZ6ZzEkcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iVAbxPzNbuFoESZymqJWfktiD4SdpZ5BGLQU9eJpr31ZRQ9ejAxmD5R94yKMNt4oPKGh4tuSoP45fwX8yWr3A3W",
  "key1": "2T6YMrKPRnieJBiFHFKbsQba8JMDLNsFRoD67s718tdKkM5hvdz7Xnv31fbxKz1DKsEcxb7NSDNWfEv9b4RdpR5H",
  "key2": "3EP3q3r5iuvHabiK2NuBgKS56Ctp6mHVssDtnwakQGkKtfXD9nCxRdxh32NEH2g2Nmtpnr5Qe564HeqUfmg2PX7N",
  "key3": "31mXYEDsh4uQX3o1vF6uYp4yf25fX1fYwjeQvbrbQtKJDWKz9sSbit3jfBVdqMuEALJQLmU7ZwWS9Du7V1PqVLg2",
  "key4": "4i33KqkBiFHJwqjPfU6boVNYMvzhKSsSqCFnkFaEbhMgMfSQqqGVF8zLMWDh4vAunQ73W3NWrqpcTZxvcRPbYVDA",
  "key5": "Jt53BMQwTqqiYVuGiQwQicbBdTgEqrWkfAMhDfAfAXChCErZAwwUi6KqRk4WbHLsh8bTyWLvZWP5oE8SMFmGFFu",
  "key6": "4pfpMwyCpZSp2bX61AdVN2ctaAXwRHLBs5m319uuD91FDAy1Da1RogwkrpQrxqeu4QhDvQyJ6R4PgBKTQ4cF91mB",
  "key7": "4j3v7LdiR4SJHSePEUMpZkTcVH5wfQRp7SbJk8Qd327VYL6t7PNcQpT63JubdARTbbQ8qUey1G3sP4c4VU3KzDLk",
  "key8": "4Kba7Rz7Le35T5gTErwiFDVYj5KBiNPzFQQhbRdeGDkoGNN631hjJRvnUnDcMv3Y2jZfafnBar9FH2oFCjsv9VpM",
  "key9": "4QUoYUH14RsnJKZ3GnbWxRQhCNTsRCJxsytYTWH4Rv7bEgECJmGBGCjk4uqrZciFvPT5jKNV9aRKhTyeovEYE1j1",
  "key10": "4XAvoMgm8dxbxkVrV3nVK81XVECEGEGhGf2Mo3SxgVZ5mdfET51dET5xH9sH1nsyXWzevNLWHJpdiKgDr8Xt6VZb",
  "key11": "2DoZ14J3VxgSa9EbwfDWJxaTnpHeP6ptB7thfwCnY25y8Qz3mfQ9HruFpQAc75ceN2z8upixPn4TvGvjc7CnewtR",
  "key12": "62GapvSVAsPMJeBAFQiQFftUCWFYP4C6RDoBXjSjfS4ypKEZAAEeetJMaUfqfnCcV1r38tsGub7QxJimHWa44Myg",
  "key13": "3ST2iZ2Kjr4Z3BFAwAzZe1Dk9ZkpiiqHNVwUGU1uybU6P2YUxkyipjJjwpiAALbZvHpnzn7wDSGiiU5wva1HNa8L",
  "key14": "42K7eQhgascn8QLaFazUqPkki4yognBztyZCUS9RAbMYjAyNYFq6qSFxuEa38nMu4CJkfcnK7Snd73JaBHBX9hQn",
  "key15": "3kmAMBjUV54r1d7JR6xKBz9uZi2F7C974se7yrfEr2nPzniZNopDGvDHxACVBHTFaXoi2q3sqWvuAbBhb5WsRDvd",
  "key16": "2ythzE8oxovXU8CdzK94sY6ArxYNzroZdj12qunxKUhANHWQ3nCavrdRRjWjLQXYG4weRoLBT8WyUWs4vFUVry9P",
  "key17": "2BMtw4EyTpSYkdx5X2sx84nH9N8ANNj5LqZ163GJpbUf1p5hCA9Ccz8YNBMzf82XUy5NGFcN86dipEbZ7Wm7McVj",
  "key18": "5Jorc9ddV6UsSQmy1EWmziw3P722sX5R3UqQC4BiAis6o1A2bmVbVGSy58M41MBNjAzMVk4SxfPszE3hj7EZ5Ay7",
  "key19": "33bt4pHenXJyWWcr9FFMh3CUXVwawDMdjrmvBX4SBahVj9GbFtYYwxuPTX4grbADAnshCAz5DPQqotF1Yye9MPsG",
  "key20": "43rN7tswii8nQtrJWASLiLKDU5yAsPgSCW3dnxMjCxtuZhKtQhfxyryjCpko65QYXvFNDDvPPYNYKFR6yVvRMc9h",
  "key21": "2Jtx1JNGSbkPQA2MCYgWj8ib3qdjq2kF3eNuc44KKd7dhTQgaWoL5uPgMzoAUomazY8NSvsnfiULecpvu2bZEQ6C",
  "key22": "25XDepAfR4HZufj3CW7ZDDBoWGin11EmEzC29CpCvx29MpQwZxP3PvKbPtHWDW3NvMVp7HAPFz7CzdYdhYJKsVmf",
  "key23": "4hciFshCwVXo9wzoCPYqrawFNa7betuVsqGq6W2ijeHNPgrSMsVRTLXCCFDUtMB4w7h4rT1n7P4Nfnze1464ZiEy",
  "key24": "2nrGU8HrE4igENKWQfmhkwCzv2VCpxx26fNBreDeRBqZ8o3JewuiGkYwAgbJL2i7UVPXD2chHfbZ6obZyUtitpCh",
  "key25": "5rndjQ2dDH926btsGHWmJdzkDRKw3wNhdwm121vMZ6TzrTiQZLCXy42ptR5AMYU2uQJfT4ZuWB4kNtP2uD3w2xfr",
  "key26": "Vk7UwRHoFtPyzp7At4vw9hg4v6u3BetYEuq9s9L5ExvNpW6uQpPSJYqABmiqv9LmDDN58dGJ7drVumA2bpXRGfE",
  "key27": "2XQprFmf9awsW1wzkexSuW3rUH5xqHrh3pXKUukGP8sBGuY6PMTc1VMpT9w5UdygucsEXAGYTMfTpRgX9JcRip99"
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
