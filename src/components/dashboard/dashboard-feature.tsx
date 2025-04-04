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
    "4UV7JgcngCCnwqUrGbQzr1KR7pXuffAgDetrdM5iiwmRG1srkEA9HATj3pYHAwahiQhLwJRfv1Y4iQX63YDqLqkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YubBy1dyM1tMjWGJManr2cBKCCBZmQuVgFXQ7DHqZTib9qoMJ9VWePUoppjD9nVubnv6z52yobYdProMpauAPa",
  "key1": "4Yd4BhDfwp6WSmem5qkHbb7MUw5qnPCB6NA2GN1fMhTC6XCTrBLoaNJSe4V5JH8mZRAHabrSxv1KYLfQvexSmMx5",
  "key2": "4ayXngxvQVdvLqG67Zx2egdy53RXHKERqfAR5HHRTFVcbqgeqQqNsWStUry71ktJHigpEgrUXebFfeAkcGQ8QphD",
  "key3": "48KVjG1F7n1CDxjSjAdz7AsSXwvWEqzXzni9JuP88RjUhQVM5UZZ2Gc1kP5D1wvaaKqUjxJkh3zRPHZjEssqrpVi",
  "key4": "2357SXAEWhnrP3CcdyhjANwcRQ3WFPvVcFDAV7oiw4hGwWXUnwRpRk2cN9gQs1nL8mdS5eM3VXtDsnCrgmjgvzP1",
  "key5": "2aGxCVTNAajprpHiuQq7xzqPaYL5cxgPDw6QV8bMyq8MftdTFcMqjBJoXWJVkteh7KfjDPtQ3Q8jU48skX3Xr2PC",
  "key6": "4WU3PzvsZD4J557AtdJN9CrzKg6VycaYvQ7KjextwvLVw1e2itzRB6uoF8sZd25FzXx8YzvevjMzU9hXNSbyUgvH",
  "key7": "3yVL9t52PTcgoQ1tngCKo6uaAFxcge1Cx2WiATwpubnjJ8VCwL842wkXjbpSy8PMD3DmscvXSQ4tnMLzt3KAegCe",
  "key8": "RqG8Usj2FsfAje3DXxA8Y9P8cajxjjSURBUkmzBMvh1B78sjkDhF7jfLBMFY6F41bw5apakzZNyc3MJGPTXDSYH",
  "key9": "377zDJTC9HB3wryNPg6rs93ccDPtiTQs9AG5g3eh3TiTVTAXpWGkaeJ4SBrA3ri5tjbB9NFbVKpNpyDYnbgN58jy",
  "key10": "3P9V9MRQPg6rYDxGuHvJhuRToDsVDmjLAtqNrT8zMUobZtJP32qcduZfVZBUsLYNnyPuM4afaeNZwWtrG6Egb37B",
  "key11": "b7c6ZdAVoDQoSwhih3yMxNkxgzYdbDcruFLoTHRE8U5UVoiT48iP48tfsj4xDW1eH3P9uoDsCH47z2Tt2vvzM5e",
  "key12": "4u1euXhKtJzso3MXGYP8XB6YQfZzHsL7krqoNYibbxX3iPaKJsLxd9YUCZjbstQqFibPvBE2M5xWAED2vCRjG3UM",
  "key13": "4HXSMzpiWgRCEJ99m6gbLtKrz8NdDSknoxaF7ppYEXWZHJWLzd6jm4nCLv8cKewyqdu6FHAkV5HnQiwCEQyhwQZF",
  "key14": "2wTioxvUGJPS3ZRH5msABCPUjh9S45NdQuPyxL14cSWDpYj5RYuCWpbGEyxeMjmYkZEtjsXujZ8XGKjzyGePn82G",
  "key15": "acEmCeBw1Rxcjzczc7voQXd2P9Ui84pRsFj4eDRvAVG5ZZxnmZx4PuBE8VEGzFL7e8pFPXZQf4UuDUvy7J1gQ73",
  "key16": "4o7SM71BU4uig1L6wt8g1FFUZ4XiHCBYG4punWVzZa4Beve6dZdR4haSiskaS8N397xoSKowJYYc6brmFPnMoWLQ",
  "key17": "XbTBrYwNymbdxSSAEDhxwpqbYM1npUj3iFqK1A78QTmLwDVCUBqCt3WcFj5PTKu6hafBugac5mN9nNHzTUXzjw6",
  "key18": "4F5J961wqQ571DWEda5r6uXba69aCkSYs2f96HmCBqibwSVpLkpaoRsRVHrVLE3Q3txydjWHHNxHfgNnEqqK49FM",
  "key19": "5iqNLTT4HktB3qGWzehbsFqMKYoCs5sS7TsaxA5bmVRsyCtJNQUPEpRfNUA4xYtWbZoD44UPnehXgozPWPC99EJ9",
  "key20": "m8emVso73zeCKMGT3jzAAoyMMtUD1Mq1UpNvvE5nCDUHYZ4xexDto5atmFrqfeU3BRzWuyQ41znRyJBGVM5rft8",
  "key21": "4yS7jEXDPErkn2gWWtY33cMB6KCqSToepJ6HE3eYSiw7FnWqoTed6zSkdgfjYGTpCmmKHsLioKmXnwx4gSGMCwPx",
  "key22": "JGXaLPDPK6dPX2cyj2czfEmBLsPkhCTtAWns1ikkG14m7vQXzhUG6cpTHiYYJ92KTC8u8GLFzoGMee628xU6fDd",
  "key23": "cUjsQGQNZkTKLAkDZmE8CaYgk4LxBLuBfb47F8PCDWv2WbVW6Z5efAbcSm6z37xzcnN6u9eHcXcR1qxEHWk7f43",
  "key24": "613DmWsaZxM323BFFjYBWFsXisGn8KYhtdLVTvTWEkTj4poPGLnjtXQbhRcWXYjDeS1APBsun25VL5PWhvMMiSpW",
  "key25": "3sBBp6oaf65L1KqMBJcSC5ZcVZze2KveoBSUcsPoe3js9wK21d1pQvtQ7X8D16oBb75KMb33Tir3bXosvL9wWEaz",
  "key26": "3ATyu512wztT9Lkf2uGJvhmWb5MMrncUx4uiZZWDBMjRxo35gF6jwASZWAsiQR5LEXcM7RUHtoUXSvP4EwmTy7fh",
  "key27": "3zmhwSSSyXTCbpmXWMbQS7H3fD8BcJtmy4MBovYJwaf2kWnkh5KpQ35biWftgtcARx3b5fiF8a8R86e5kWtBvfrw",
  "key28": "iX23h5KATqM5zkHKKfkvdbULBgNUkBa1FuT9r41Z5eK2cZ5Z3KGhQeRYNVdAXss6hxAQDAVZPDdabuK8S1w1MNC",
  "key29": "46oSo2aPvKuMbQVHeKGJYyYMqvb4VMPqi52EAAJ6shBW6G7fFbD28JBBM5dtMS7zyhpPhXwo4zWroqn9rbs48B2Z"
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
