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
    "3qSruZKfMYNfo8h7AFLHUM8DWS8LC4gNWNUDCEy3mFDz5sJu555tnzDE5rZJHVEmTZ6wVEzBkfHFXsRPxRf8MecB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46TFtqFQcLBrxkHUi1UJFqrZSM2tHL6DE1nvdc23n5DiwVuR9jZaWuyemFrpfmsghnipNN8mJnU8JBYGcEsyCMv",
  "key1": "66x3QPAg8V1VDANVaThDUrWBLVf3Ra7wt87NLJbmBmKVzbFReCtD1bgX8JjoPFVk8zVCFw1ZVFC64hSbuYp8WZJ6",
  "key2": "5vTijjNWmaxXcVTn3PoPu44XjuH84W2C2xRqfHgEsPdBvTT6fWvLKUc4Xxz4nQXUdSMp6CiC9xcUC9fQsJqvWFQy",
  "key3": "ugiEssdAFqw5N6Z1mnb5GcMtjDn69JEXkUWLThLojYmFrpSCHvDMvceygtQ5mBpkVEGWRtmssNb2xfVdouzmQNJ",
  "key4": "5wTRAxg4tMe5pG6CNtTZjcj98VKRntBHuqgUXFkrZdjpF5inD723FAiSVoNqm2M8vnV4kbJy5kXJ7jgycU5r8Gfb",
  "key5": "5M9KyBmXCmfmxKAA16eTU4HnZyFPxW3KSEZENeZj7YGoTgX5hSeF9Uo5UYNQ9d4Xtf1YAiZLNUn4YkH61tokRSNe",
  "key6": "nTwwYWHBYtaXTmpzr7wQffoqFxADqZdqhmADWVYdNXFF7qRV5gVXyXVqsk7feE87mfBxPCQT8bmqUAyeCg7SBDK",
  "key7": "5w3rsDUU934XxB5GAxtp92vMqy2VvXaGqKANcuu4JE4nKzzJkponNxzBpSNZcqR6nFnTmA3iwA9prKCapCeQwohN",
  "key8": "3ieYVHjZNC7WQqPExo5wAP3zRBFV7iytk6tTPVdVfi33nQADGbNosXARE8cvCyhnn6mpGMgVyJXuLF4faadX5tgH",
  "key9": "5ksNMZC4w34XukujiFutensAFHzfMvyfxpQYjXv3uJx5e1zK1vYEXJXe5w7uaD7gwg6pAGGuERusDbjBuGvBc2ew",
  "key10": "5SGHa7u5wn3z5CEdewtyHZS1spp5YU4EiNMTBbBwcEYq57ftuM8WH8pKMj6Ls2zPj1Uu7YSYJ7k6K2a6An6JQppo",
  "key11": "2Ffu2b7dhGCiZM2aSqr8DVXWThnMEWbxfUtEm7WxnzFqJas9qVASKg3xbHYWdo5EXg1mLhE5625G38pTyzguhcCJ",
  "key12": "eZnfCxNwmEC6NaBQSrW6AQRYwTfaoPdP5eQbKpirEdbtt4Y2U64YYf9b5Y7fTttNMCDadvR9ibcyCyDjkZKWS8k",
  "key13": "yY9Eyiu636QNNLd85iL4dwaxrK5supnSv47iXjgBF6nrv18e3cfe6uPJ23LLfjDDjNVBEsoBrP83W6NCtExcPzA",
  "key14": "5nSrVRf6FK8LAujrTx3rrD6UUc6Msv8sjcAY3LXCgcpm7XUwDCLyNfwThNPuDqR9QErS5rwy8S8JPgdw5Hk3hzh1",
  "key15": "TLfhMu9o9kTm99FMTmffJqts5aQya7q8qCp9ZbNyDmNE4DcKkZURAKBr5FkWGteA8ms3QQ6FAJxKpwcRnbkKoug",
  "key16": "4uBw2WMxCgx4wfFzcwp2tWtCw2EKK8HnKKqzFDqy4j9GesdSj7rbAoSmzhSZ8ywMZRJaTqVKBcbCSfbQjhyW2zD3",
  "key17": "3txqzi4kTdL6HWEnzDrrFUmhFimKL5Kj64oRdFK4yg6hFc8UKy5jVB9sUNTLkHYyVCAsy5kqnS1Uv8dXsvarz7io",
  "key18": "2P8vd7DRnGM764ftkdeXRDNv6Dfnpax1uaGUMsyH2aLDLjoq4gXuoshB6MbCDf1TqxGVfdjWG6WsAf8ARyGWHDog",
  "key19": "z2WKiHMuKHYtXa2C8hcKMdX58y7jYrj85gNtkPTHdAbYyPjpTir8cAkngdRfvEJBUQWxQy9UXdyWqPZy5tgKWrb",
  "key20": "45dCWLxu9irVAuCsLd9xzFWN9ngXwoEXZxZsJi61FrQNgnSTCuhgW4okkLkwGPrAstkhHjBZKpWz5nbbVFE1sahj",
  "key21": "3qy3SDc7SxYbLnTuCDYQ4Tqg1ps1yPRFgj4NMTLugkZWJV7vZDnzKhR9d2XzRYJriNvazN9KqAWixshVqk2kdDM2",
  "key22": "4cY6Pt6eSEHAfZyL1FfKTC32kUiqEwZive7MoUGrsj1nrUw3fQ74vpcCU3Q1zLH8EDYtyTGQT65CHetrtQKXNxLk",
  "key23": "49mHEPgXKNDn8L5BKAFSAdSdyhodHucnwQfznQdxoQAVvPwvciMsivH8DS9gZLUqHGwpMvxqqAYMyxqbJodFdUAc",
  "key24": "4xWVURJ94bQsuKGuyPecuhNhhMK3kkajBmp3HvaX5J8hw7QpiFBCoCAVHMUVp1xLqG6RZMmX8ENeNQi7TiXYTN4p"
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
