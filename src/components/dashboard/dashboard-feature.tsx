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
    "2tj2MtCL9NSbdVpJPxs2oyhbvPtCrXbaomGQ4w3ZytGR4hXuZYZKK8RZhfwu1AgPcyN6enAapzGuAVfbtEUrDxLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9yZXnow7AuLxWYWqg6AWgioyz1eU3YwGPo9opGoaLHzxQRoCCCeUbhibWWJtTj3SikoHk25UJt7nFq7DH7Vhvz",
  "key1": "2UvfiCxj1mBkCa1cnYa7afVy2BZNEAB2PPXkCtdzPeFDENbQLMyzgvGbTuN5j8MH1C9Kqz94cHDkzopBqZKBUeMu",
  "key2": "3cMvsiGHQtTRHtVeniwqev6zhguqSP42gCSSiGqfrFJqBtAvt11nPMDZawwbudq8gr5KPJhSeU6dn4PEyn4jmVND",
  "key3": "32gijdG7eLAYXcLxMVC1JaP9wdTuEcxUCTzR2Gy635ydZ9vXtEMxeppJuAjZn5oPdFkkeAJoa6Gb2CJPSz6W88ye",
  "key4": "3MgsE9ot7Pgy71DFT5o88uBkrxbDJz59PXYFfhgVp4av8nd5PRHUUtzNmRUS16sEf9WfJzcHUCvyop4B4BoxsQhM",
  "key5": "2dL9MdZegAJQ2TkBBNeKtxtRBmnCZ4zaSh4TA6wVa9YFSofss1yc4svnBb6teSBgZwjgVfVAABeUKT34ArSbPaAm",
  "key6": "HotcyxAfTMR3JarUS7vNrhwrJRSFNkngDv8z4UP21Ypk8qw7f2pQHevDqVUpSC3vWkdKt2hidZfAfZxyBiy8GEe",
  "key7": "27naFn9aFESQDxjo54x9MtxfduCQdooeFNZwEMWWwX64wqQgiLvQj6QLp3acBdqSqtVaqtc2QwoQMdpvVd5w6acV",
  "key8": "4b9quooH6THRb7cmfjze2y3U3fmBa2cFxB1XvUMSQWrVJuMvDuKufKMKqFa41Q7uJeN4wpXSXeEvj5fqVh9gHXc1",
  "key9": "2wwtwyXGQHvRAor59GuUf6UW7cD8QREyapu6XTqtgxgZdw1RAkLnJ3A8CwnufD1iAV5ziZFboCjH4MkK3q9d7kfV",
  "key10": "611oSBv4z5QPVMT5ovr5dhnMngs7JywRWoTzVWJcWgEDz4bfGVPzhbv8jYkaNcpFhCwFdbyvDoPQpSmvi7FrxDtQ",
  "key11": "atU2sxPXBusA3QzAo8oAbk8rh1BLSEQ9Tw1iecobDDcDtBxLqRh527rUewmPbZjcqohCViG82pe1kRNjAKLoQo4",
  "key12": "38bqsmmB8asCqJYwrqpYbdebzX5fhRCDQAxCfJxSLCseEaLi5YXDAWWuRhYfRrBhkhWNHM8v3ozvegyB9gGrwMeS",
  "key13": "2Qd24kqw8vS4JoXkipy8jFA6fgXqgBP6rBUprZxjGdYsQjNUWwXasgAZmcTa962EmiATh6au6r4hq4fnmdfUdzH9",
  "key14": "2TCg4EVPqMbhxku7U8XnPEi3SorWSM7oMfKDeotBEyq82B55dZs4JdS4abCNCjDALuBBx7RZo5bMBHnGNhNxFJix",
  "key15": "5qLD9gDeM6jRxNDuW4J5m97J7HEFKUjtiUQ4ZbeBF9t8FZZjaRq5TLWZApsKroALFX31dKxMEAhsGz6ESoFQeCS6",
  "key16": "RPuZ7Gik46tKimhQrUTitMr3AioyqH9yfgW12xM28z6uomqmJntHoCR8q7BWdFaKxycLunarcdC6zRBMG7u8qvW",
  "key17": "241EcHygZKoR64c1fKa2JxbxWaXzsJZjnt1wejKdqZrW2WpuMBrWVwTRnVLP9ftFJuiSRixpXgp7U1P5PKo2CzFD",
  "key18": "43W5ReGzAtrddrcBGA9LH7ptMvPF8h1hfYTnJ8yL6SEimGfJ5zPfTAePhXY2kKpyhQmuJe2AHDcGTfC3XoCzv7eb",
  "key19": "5A7GTHZM9jmtGNzcZDBqv6TPpyPaGdeTAuE3DBKEUHu1LKARqj49824p7GgSGryXPbc5FzoQkJiQDnMTUMtnKeSz",
  "key20": "5FU2KiByRL3n7F74p8oeNoYaJJ9fq3QgHgBmzPWough9E6YPrfpJmtY5QBm6J8SycFN6L7qzBDZ8YYTzUhM455td",
  "key21": "2zWS9Sm6JjJLv8Zk2u4Y7MiLLot4YndVW61awPhKYhucRSrDTp9HNzUiuFcfRY1e6owWV4RdRXrDToNpkCmRxfFA",
  "key22": "2vxGfJxv8gHm3Nzf5vRD8iZcrYbfSUtXSBwfPNCdNxem6EexWT6mMk1apmbotiSoWkkDEkBwZAgPpDVJEJxGaJgd",
  "key23": "5nigc7nxMDpZ5wk9tN7udfwqzNCGQm2WPQYk7p89oZZM2BauubtTACJoe4525pYgi1MPrSQCMWUMnCtxuAjvyKgV",
  "key24": "5YQHLrZ4Kfa7khzRa8V5DA1coE2PKCgHAwLDw6ERsHo1hTfBxomtUX1zGHYdYaJzxtC5cwCWNqV6h2oNF1S8ukid",
  "key25": "3s43gHM4ZBNXpn7o4yXMKJ25ouYw18dcWUo8dvU2T86KV2DzmstkFFxavRG8TTiUhUbwMhLMSUVsHvBCbzuzQvkm"
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
