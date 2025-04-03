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
    "2U2H8AekNE94bjMkB5g131FUZJuykwSb99ffJo9NUXiqbDsikoTarsbZoUnqvd1zx67pG8RAwsDLZvPWj5uEZJBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67LF7gRhrDm2kHpoK88tM4WeTYsqJvtxuWfGn6dLSMa14euDhNCQpD4y5G2u931KE7ECY6bR9UfqBY3E5teY2Guf",
  "key1": "5QoXSXxL3wzVkyShfgY2tTsiEAwFiGhrLnfJbLn9ABYR7dFoWScrnsKhNowKzoxUtU5h5Y9oNLsFuQAGwVu2DxAR",
  "key2": "47ByG6pnw4A5rq6UuP4KoXttnKhTjAfjG1WU5WMZNcHaQFqdVgT6uHHsy95Uh4sAzjEwZ4uLo1ZdUJYtYrvQiXjJ",
  "key3": "3rJAPs1RczkaCmMnh3yH83RG1gZFYrc8wSUpi8wD2UNxb69KSpSASiDyk4vMYWPmATpsvrrs2TYnLNJdZ378HSya",
  "key4": "t9vpxe7KX3NKfG7aLFwxUabitWgPfxMp1ziLUK8RaaDm2dsgz5a42muJ19mtrMXWYzKrgz7PXisrF3NsYvT7KuQ",
  "key5": "5XxwQUKqeJXMTtiV3AHNwxE8knr2KRHDAwpVxd4Ur1gQYKD2yRdooJHNgWPAoo5CQwmSXiteA6wtDyGP3fVapofv",
  "key6": "3fJGgGHirGf4iU15cUb4RYQB6EabtYhHvne1gYBBP8y3TFLTMqakbrR3ZjRZzYbYKwJhggEXvJ5ohinnBfcxTPiZ",
  "key7": "2bgr3qYQqc1HAbaNKgr1cd6gbrCP3d1XnQMWZrHBB7RhL7xcKyia4afdwMjxz3HLi7S6koc8E3oGqSL5ZesfXsVR",
  "key8": "5FFmhzTCchhPwcBSCkk9bj2TAMxwKuAQcr1xyWSbb82PQgwNZNNB5k424YeJUukjeeW4P4jBWv58ht5aXeMzFgvZ",
  "key9": "F8wYhbDB1SLJMcEKTvar2u3TBdH27sboMmAk6gucf5w4BPqtebogH3XogTKKTWSDTtt3BjBY9NgSLrEwXr7qSoE",
  "key10": "5r2ZcoWBKnet5hZg3LyiogVek5RfKSRKHBiTT6tJe5DEG1JjJnEMvn2ecaTwqV7idkoaHAUo14bFKmdLsHMFttzF",
  "key11": "4mq6aLt2VMrUZFCM16r9ydCsB3Dya9JAnnryCGiziSXN4Z3RQZTcD3cbrdDLV1AoBeJQVbJi5Tn9aGyZsngVtjCP",
  "key12": "3NjQFeUxyQALZq7xkcKQu4bmDwmZNVE4XxqpF9X693Z11sejrJZjr2UvqfYJ2RKVCq7sm8neqK8VwPqviR4Mkve5",
  "key13": "31nye8ftEzFKYqF1R6kxNpqY5pEi7gNdxD7DbD8FNgipeoRobp7UtQMWK3YophT1uE3WXuuhZVLWij7sRUrjvvvs",
  "key14": "2Eb2WjcdAhmVLw3TVvhQ6LwsNp4GMDet9B4oNujeQocrGNfJp7saLqBKMt5pu74fpze3unrJ27hPS4cFE8wkj1gP",
  "key15": "4iCK5emNqJJqwYkzE6xNrZmtN9ZGS3p3K57yim7t5nc36t8jcrZD93ZEUeV1EdEXtDcvWqqPZgkFdUNL4UiASVLS",
  "key16": "43esAdESwccQqpM8okKT8g1QUZsQJkUwLm1Tin2WBAJ692i5qNwZQt135eRUT7AwUSoDQkzFiMcsKZs5T3bMSUdP",
  "key17": "rPA6TjS96JcsvirR37cZVA3nfJq2evupgdgQE8FB29DbaDfUpT7YDuUB3AQ9Nfo1EuWwWw8xZdSUnsp8RufzbCr",
  "key18": "4ibbGcc35aavrz62hRhr9cJfuW4bc6U2T5Ga4bD4UrJxDQiLXrqcBQgU5PZrY7oX3VE4cfroRnMPvrqJypA6EWj9",
  "key19": "3tw1bE69HsAdF3SNbJSFyxMYTvutLRiL4V5CGyf8BTe6ka86HbLDAVutDHwBWLUeSokFMokJpz3NDM3DznwNtBDY",
  "key20": "wU6XVCb6rKwBpRibBRk1RMHF7Hrr3pWwHK4FwKqH7ndQLcqFvbGxEVENu67dL1RhVp7K6Btjjs16BhcBkNbmELn",
  "key21": "54S8hE8tAELhDPxVMj3e3vRAV1VYsNk99WiiaT4xj5ffAAeWk8FXrjKRTXNN8KfJMcGY3XE7Nb4GgYkNbPon4AAz",
  "key22": "LzKWsMbKXCXKn3tddwVNXaYA3J5gfi95c1AP527QWSQ2eiYfFNaFjCdYAKTwzK5SqRVeaQw8uJQoECnzbfrgK5m",
  "key23": "45ZsZzUraZZdSzNGygCZquBNGTQLYGntcb56rLYYJ6sYiP18wPYgGnhzYhBRfvnckPuogxdV6LtMgzfNk1o29c4Z",
  "key24": "5ppda3QeHMt7h7nknP6Cixv5UTgJf1aky1MZGCjiQomRRAG5W754whaafTFdpwQgzvWputddT5Tsjuia9VRZjG5Q",
  "key25": "3XSfSPtdAApf32LoSRjTCET625s7RDctDz1bq4gtAKrabUmCSTFYq7RZC6RnqbSzqWfduWm1TzFxipZUUSfQeF5j"
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
