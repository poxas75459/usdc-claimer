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
    "2c9cRt6VpWsq4AgBZWdaErpSuiLEptYDpSkf6h7dXZJxP3vkE1ZGLgmpDq4qvVE32Q8q8CH7RoFjzxx4Edi4fdPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBkLMecWXRihAvy2zY7C1FchadB2weRBLUgWx4TLcms6qXdiUthajTT2hiiDt93gzr45VCV9zFeZ3LdMqGTyiaK",
  "key1": "4W8qa8oWqrkQdb1tzvioJSvE86mfhhVgCspDz6MB7MxwcDhxL4GfbVDP8tKFUfKMfgFQNrhksrzdrBczMudx99Jh",
  "key2": "3gnuNdqELCYLAmwGwqEs3rxW8xySss9T9o8N7D64vXmx4xzwr6gkAGbaQU1Ecdd8HcVEqLHHqtrGiJyLiKeDWzPY",
  "key3": "5Q9LEGrVjxSheyEJ7Keccw8Kk9jXcVbZmxsbkeD1TND9DKzZa1kuQPhdLN7RX61shrzWEgoKn9WhRwxgCJQgqFSy",
  "key4": "nErferL2G6X34x8B1wc92wZCi6G2bYX8R7hhAsrbEQPB61V9ccdpVVHRMkAPMBoU6Wzr1dqjaKaewVM5ZzCRbyb",
  "key5": "4TqggAtUgxvU7N3ePpuQBe7AuFKqHSMaHeneYZBLnoL1sa6vrHn2RVeBh4p89TpBMnRq1voE9ZynTy5EPdHr5Acj",
  "key6": "5UR2FNLwNyT3KHJzgRpaaCvSqB37oj2fQ6e7ZdURNbYDgWbAXz327iWfGv5PzSouuHHx6z1vFioJV6DW4HNFgXHk",
  "key7": "4QXxFjmqyrWVksogAno6RvY1KomXYcVDhuj8UrggSfjvV453acH7hQMvHEk5U8k7ip2GxL1hHVkz19SLzEUNHHSC",
  "key8": "3D8xFjee1irFcWerqpyTRJH35YpKy9KJxovCoC1FAj5tbYGuNCnjKkeUvoygHNhEZNLPDBiqWp3RApviXZkmUTg4",
  "key9": "31NMbrBfi2L1g5iWXkZZEcLUvqRpmwybg2RdCLWpDrQnSs8BQzh8Dzr1pnCnnJ3VBVpPsisKnRnpLv6intkfip1f",
  "key10": "59NXAvyERCAMEfJtkoD85BoSHJNDro77KEB6jH7wLLGWPQJTXnjbupPoHNCtPfU5BiymagnWHBLnbEmaogTwZGGF",
  "key11": "MRkiRaqa1LRdvg5fUjZ7HTZJBw1B9hiDAvgBF2GvLHqYif9d61tvnAYLtCVbaAH2yYUH6DeMUJDNs2GBiFKL38c",
  "key12": "367HFWbgfSdUydSWvYpyFuQpAaPm5ay7zwMzCJN1eVqfkgioQCsWHmMVXnRkykXwRS9wsPhWDWgPvi9fJGEfyfVw",
  "key13": "EUZhGCkZL3XUY66reeGfuMcXeYCaE7wR7M3WmEQaxyBDJ9ZVufshBeo293GC5fyLFBxWQcMRrRv2Dt5cL6kSj1d",
  "key14": "5mGgFWnxa8jkBpQm3Ri8piefhxKp6M9xR1BeWm2jpfevHjSqNBCJzW53sKVgPnL66Nq56Z5jxLJ2KTDeyLye3ygh",
  "key15": "5mbDnwEXL5JhEhub7dqKkgscj59EQwXtZQ7M6yNZLAfVef6jb9c8TZkveJZfw8A1R1K9NbdRc3rtqBj11f382dkB",
  "key16": "EZ75jXfWmeUptb6CGgAgrjiJBCyN2LPQAYnuYNN4hM7SgPLjP2yVdPKdYukDzMEqjH2v9SscKAsuFBG7aaCRB1X",
  "key17": "GeXJf5ygneb3Wg8cc86JszDnejY41rJonothHvvFckjhXWs9VtHxcnCbJs6a3z5njgHbURkUeG7hNai86gz5gmA",
  "key18": "4J45ZJmd1V2FZV9AUtT1vMjFrpTbr4DBKogiqdmUAGSW6qQrhWyoFVwpMh6uA9jrAL3tfDYYphFPCq5xyEH5VCC2",
  "key19": "WJeNm5SVtveJYeZjrUFQTK369zjys5D9gQWR9v7Eirm5UHMwscXfyFpj5rtRzHzMg8k19p299CUGwMa9A9MByiL",
  "key20": "3DV6HC5jADfH1HSCqyNZyJrYQjtcnq5Ytxoka9uYFb3U65DT7iyqAxt8D9fWXEXj9qtmLTAJDGessN6ua7BHijDd",
  "key21": "5eQbnnTaM58aqDumEFxRMRYh1aHTMEpLsqNs9xkRRnsuWXYGh8eYV7NL4ciEJAgYQWAvR7m7FgYo8f1ZPZYVu8hq",
  "key22": "5ZZqb5DipGMXkDG83s4RFTPpkNTQgVsnXY7UVtr4PudkSgmZhTD5c6X9cCbw3pmV8W5b4R9E1H3NX1gHELL9K5hq",
  "key23": "4L7ha67YgW6G6LESYnSmAoE6vBtxzMbXRE7NQK3drbuBgXvS5r22i3VVpQsr9d6iZsraVJxu8euWVXUTUxh7VJQu",
  "key24": "3KgEndpBiaYVzK3Wiwgw43Po8tuqDbrzYx3dDQxDW4y92F66WTgCTCkFe8QWPRmcwPPMppqM7CpobpAVPb3wDQN3",
  "key25": "65TWc3w8qhCQuQgnCu5ZHgZAfDJHJQQ9SpiTgdnpQk3iw7EzW5CrL5SLUQqHfBDTX398tczE61wcHNwysLB5TJJZ"
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
