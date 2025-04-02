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
    "5qAPgrKnMx6VwbBdEQqLkeF1eABqq8DoyuZ6FPqgAf6oKiBN6xjyRsvvdGaYdr1LtWv1KesoXdGAo4P34km64bno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjisic9YPUrnQjxsrU2vHoNpgdYM8FF1AkvSmSu4hRFcVPg18D3u69rsjER4CnSTNKywNQKkqARdEDuLBjPkiMi",
  "key1": "46jRN74cp6H5obUDnhY4gGn1J7WTogRh1Tp9ZXRrfr64K9v9Gm2tuiM8zk8japnKJ6v1t7e3LJ9r2undMoDmcKfP",
  "key2": "3UJEPuhBvKM2Ngi5umZjaMr9aE7FzhdYaotFyKyZTpeSCYo24PPhSV5Ru1rxGEwimCGhcMuqncFwH7rzXyZFJe1z",
  "key3": "2cVBxDbnDwFiDh8r8EC9LFvmExCaZ32zMFr4899aY6m4YfpBKtjZb7VqkUY8kiAp6wg7DshNAidgXWQfVCztSwJu",
  "key4": "2vWbKivYJdWbV8BqVKtPbA2huFQvrDWyQMcuSjFdGSoSCDnUcaUfvvXmihkBNfvZTv2bMzi4kUUgMm1Kon8aXkBP",
  "key5": "t3o9FQYFjVUF7Xyyitf777pELU8L3umaUTFHhY89k5Eyj21pyZwksoyxVvVjNCJfaAeju69pJYtpGnkhD2PjrHZ",
  "key6": "26A5Pi7bLXaoFN82QVnotkvMSdpWQM7ensi2Nf1QZujT2d3gVoLNZUS7YVj5wj3GcdZLQGeffsSTm8Fou48j6vm9",
  "key7": "2H4grr6beUDR7LqSd1oPGoGeQaxog8vHMDCrvMyRrxxSYwupi1NCxwQVVoH3yzdrK5uy7RWErrPKawK1x17gKnig",
  "key8": "25fxpn8AdccTguAVXQcin6RG84n9BVhVaFGH1bQTQW1w4kNYRNVamaZFcC85tHVxHstpqD3wp236CtP6Ucm7Wam1",
  "key9": "4wLciZ34jkZxzeDGjgGKNXfZWyf5M9fViSRVeef8cybeFSs2qtzWkJZ6jAJT9ofmR1z9wjc2drB8rj1rftuW8nPS",
  "key10": "2xPhW6tsYXXFSXuyDgMZeD7QJS6SGcTzYeknPynWX5vfZiwZ4uhsh5pwgdoty7hSVNM44gTzKSxUB2ejcJqujyN8",
  "key11": "4gXJjyTk8fsPh7SMvc6SsRxQ6Uw8FDrYGdkhiRcuLau7schWLAhDypcyZasjradoEjb2ta371wh1oHdYYBEEuQUq",
  "key12": "65WXGb1RePmrSU5zEBMjEZ6mkdkhyb5AZxV8ThDxDDGXjyL3gkNcg9DPYqyvrijaHziKpErbrijRBhKLfDwmSzAe",
  "key13": "VBc8keTMUzk1t6jkiruNXnnZhRcQPsfsBg6XULGVGCiQijApe1frTFfnTjexatbft42sT5JbXWhP2KC9ow14hH6",
  "key14": "5gturLm4sFjBr5YG8EsyuFcPSZrVXnrp1h4FCSdQ6XRydY7uj5ntGPtkEiow9Njaqjt4SMLrhHoiUNDxekVfKgm",
  "key15": "zXpBJgGQMaiWy9aWpAikLoqQ476qMB8ZMr4BLcqpXKDo4AFUFCiv2YZGgSwccojnQSBsz2FAi1kT2vFRMQbcA5m",
  "key16": "5XHgY7XgdLKk5XhNQYsZQg5QW6jUb6UKCg56dLrheQ4XQQVVmFY4AD5WBDjLMFgYNfXWdA2FMcLGtYeDPEUnQSWJ",
  "key17": "4oA7T7gM9jgRJy5r3fdq5uM7Sjbgz9JvN74MtonyXu7PPxUMzxqUoTZV6btb6npfBSqqewn31JSoCHBhXHHVkmC1",
  "key18": "3YLZyqHTLEGLw9xuP9YMi9jmUw1EN19FqFzz2C8W2yEHmouHN65Hw4DChavm8KNJJM34PXsXaeRPfnMpzATVV97L",
  "key19": "3k1C6mRypnizStDkyWoMXrSNafRyYaQFQgPSBemcSpA6EPVxagz12bB1LkTw36MEogujCxz1sH88cN48RGjBMjrn",
  "key20": "4xAsHkfzhBLeCVWHkUZekga4SnedKWp3vo79BCgFs5pSUCgWR2K2ZAU5cFiNTyNauPWZXrD4vMpdFsn9SH2P2NTX",
  "key21": "qcP5QcnjHnm5J9imdq3x3BY5qjnVAsUmVVy4yXYJ6XMVzPdwRqzSGyXVEpFDik3W2P44gcjeZY2CJAh2Dt6JZxf",
  "key22": "3FMb3QpzHrskmNSKeCAvYP8MMHMEk8BZtwKA2vKVv73MvrXzrMZRfjmPQfdCQaaLYCSqPpBBVnTdyxwTSty6M7gR",
  "key23": "2B8S5xoiHfph5Gdu7NtEBLkotEgDLGtPvS8LQ6DzogJLZX86pNkVDrPWoNUM6vB6F4PyEwGKyDDYkCzUPMaBFsYi",
  "key24": "3vZ29y7MDesCfCSSHkAs5s7A3FpPcvtfFWBdY8BEp8zeh4b2EMdRTpsWzRaskceWFLjBvX5EheC9wPt1YDshe6Go",
  "key25": "64ERNFaaXibWHNmHXJ8cebeHs4XfGc7zeAaeWMw9r8xM52ZUtU9j9mSsgxEnqnEpvY5bXspfjpXF4SGehqZSz52x",
  "key26": "5iRzGrhwj8mnNc3NgF99Y6cWQmM1uPP1K4jhQXB8mJeisb93dmHTyQnv3v6P7D8YDK3stHHwNsndtP55fCPG3GDc",
  "key27": "nhVPBASoDSdBrKJ44BPGDMgJPz841Q39AFqzbq5vXEYs7frPBR93NeYuD8aB7sL9igGZrNKsn9Vw8rbR37dodZ2",
  "key28": "22cnnkSCHNSmKk9GXkFwEFpBGWVhEdEWXVVuUq1PVWVppKqCsutW4u1HkonSyNiXxSzAdGCSQCVUZHCGSHotHt19",
  "key29": "5G9SjMZCcrCaF8pDW9zeYtvBJt3bEwy6ib3mrCCkFwkbHuMWiVmw8JWrfEeiobW4tsJna8CM3QdoUHWbRaNfJdAD"
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
