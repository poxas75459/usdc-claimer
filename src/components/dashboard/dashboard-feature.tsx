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
    "zv18XZbAhUnaRkZaAcaarjRy8aZUfyjFsknBukaJDwEq9QeS4E7D76eg28Zka7d5XUCuNaoKXEvvfGfxSQiEChX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29egMWX2kAyEmW4QuDNRpfZ7sV9LAj9KwH91pVfsKCyWVrBBvFK16bm7gYALm4JBB3JTWpz4L6GpwyKxGgMhv9YL",
  "key1": "4FxhHvJWxHon3aDHSun1WC7WqmQaatpKMceHFbAjZtBZ7jC2F2Jg5JVrjsiL8zYm1HMokdcYYrsLrDgtuBq9hotp",
  "key2": "376yALM7E3QUgLSbCCMSyF8VjVq2jsEGswumqdnBG4ydUZ33gujkCQ3gAieGzKURMhqstJbsTqQ3PU2C6GF8ChMv",
  "key3": "3fxvvowfD9yWBAZTjRzr585YRS6qdxfpBJG9bFq9WAqkpgJ6BByLRyc1iNNg89ixhPQcBpE1uKEHVvs6MK8L1EYt",
  "key4": "2ZRv3wopgKVjFDmrjFi6Ac1ju6ZV3yUVBcq9YnFMbbmaxdyZTfrRn5JHoJsqbHrsyxJrfqqcSVo2bhYLPU9FTVtC",
  "key5": "3Dj3u4wivBv5GVb8MyknHr3B2i9PKZewUyA2Mx4DFoT9v5SUZbC5dsvAqs58dsbkFaEDj7JpmVNJwQ3wjdLjWBeq",
  "key6": "GcZNn7bd39mtayiTVmwRUSYQbuvhXWcJ8AbhSMM1ru6qLXURzeQJhprLobSoQCK6a531c2XvsTe5LKp7eAcV8qB",
  "key7": "3rXHnBaXfvd3ARLz18AyCKmge9uSTpuT4jHjNocS9VD5dfXbaeVrkeeJBLCSmtVrXrQgr34VoqmmPoXptk8KPtfj",
  "key8": "2odsgqVoBV4kL7Tt6vcte7MZ75RVUAozRLSBsgEERywiLydSZX1wXn4Hj4DPhU7ap4dh7N1jEETHBw2nvVz7YetR",
  "key9": "5wADs5426zXhgzbEyyrzicBMJ1o7GKa92HAR38ZKBrga5XTxPfAHRsyXpwMULCrUBtfyf8oTNrb4tnGMrHcVsRfi",
  "key10": "2HFSnzmrp1LNhi6ZJEZ8t641g8Rki53iZ1eSDE3HWQ3TNbeS3TtHQCkLbRN84k3xLy7afaD9A5NjoXyMaQWwx7ax",
  "key11": "27zsxzR45LKi3Mq16jMZq8KF4ahyTF5JJg7fZajEJJqo5fQkJ7uyBT3iJXrnFoB1kWeoQhjkuBuwLpEtJ8bo5eed",
  "key12": "5jBmXzrykrnrZ1JCDJENYKH9Dge3bo4CLvFY2nrzFP7LShT3m5XhqifAxitsCKXWiRLjRQsfUmFoGH9kfZkd1eEL",
  "key13": "4bGcJF35qGpYxAff4b3G9QDH9cbxA36i8ubzoYmbvxpoYn8nt1rHaZnbN16RpM2TNWsrGnZxt9MmYMpR5WC18vVH",
  "key14": "gGBEXAbRCUuPcq8WZN8t3n1KFCaB2XeRfeKeXveDvJ2t5eLcWvocMxWnASgTp8sxvffh7bh15QZ23rePmcTeW1B",
  "key15": "4ZqT8dHDSfEJzUmPjpHzKibVx6RWbfRZa1aWiHd2BZrJjkTxQWPrheysQixK3K4PdwTZc9zLLqEkSTXaPo8zDRJb",
  "key16": "447XFFMR5fkhAkSiFEYoeqZuSNUA8jN3p6zstzGiHeCuQoQXSgx3pnbU1NYZpi5Qfqewn4pQfESnFyCRT1zcxKjy",
  "key17": "3qntM4w7zv4xi69egjavsAix62Z5Cv7xQuDky25ceRVBudR3ojGognwDi51Sxu67pMhDUMWbKx5Ur2Rsq8o3EVU",
  "key18": "2VtGwuj7HL2rkYua8Gfg1YcAjadbeYniud84qMvQcSyk6dPAaFBteSLLTunm5ZfB4ijgna7kk7r8SYYuxkUWpRuy",
  "key19": "3qiDFAtjbKdq5TUQC7hd5T7c26t5dppSTQcpdDjgUGZ6yTEr6RVg5MhcjjFdgMTDryk32pKmrB4hZsp4Ai6NXxJY",
  "key20": "3N41YhCG3gEdJDLJ3uBWBHKksjcRaDWRj5Z4MSXaXJis5HyZozpiBoV6mMRLk5xdfgQpAqp8hBnLH6wbjrHFkdTq",
  "key21": "dhA9R7qdPvcvYdXPhJcjYuVbBTSXrLPxrqr1a9HJpVfgyoAWP2Uemih1iug8LgrAQJW8XnFuZCaCym1To9a6twZ",
  "key22": "WAT5QUCijKEb5GN2z6F738ZzNqFDADuTW3JknchT2F8jttwqaN6enB8eh6dPjhfbZzrY22brJzYuhKSPbDH3mUi",
  "key23": "nD3b3pfJvExVLrFMLvHgkZpybxEm5gvfdkfPztVsRmsXZgAY4yoJGMsxnjfvdv5J2EbgeEviF2rN5vd6kgqHXn3",
  "key24": "4RkHLbcsKDAdc8zw9oLxPgYKKuRy2bhketkXJp1mSCpNW7ib8daoLJpyUNjyEMd9wQqb5Phh3dT9yGTT5CuMYgda",
  "key25": "v2cxMgXnet7Bo3hzZqJwDBPYV9LNcusfKotfjQPaRu5RVQHqC4psenY416Gvt4GZ8HQiLkpA3RffQTpb4V3XZA6",
  "key26": "3Q1T19w1o2wJzJzXNHZGKh5tmJf16mvLRXq7yt98rx3dvrExD3V9eheZYFbbTDywE3Nx3qAk9Fi2dLQMSyMZQns7"
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
