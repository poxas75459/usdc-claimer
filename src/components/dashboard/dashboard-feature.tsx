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
    "5zg1UEGhTSwdhiKw6AfxYmKmvYsn9C8srH7PvHWLvN4B4zZ9JeW4ThFSkCJUKDWq52BxzBajqWjEkJW5oM5CbTnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JudagqzcRvdPBf8WkUEk96MSWCttCm7cm1fYU3mbWvvwqKPcqY43Qj8dVVbL9j6JkQtj47qoyF78m3pHSkWdt5G",
  "key1": "2QcMFDp976MMf6eA9QTG8vW2E9APbp1xsC4m1VqBbMr2pr5JoDutaB6naroV5T67xybXgH2Ua6AwoUz2VuLnuXsN",
  "key2": "2n4rxXm9iYDkDSQXkJLuzwME9tQpEQgWUoTqUN6osEucC9MvqtAAUjjR5NKf3EsdbahnoN424uMzFpYnyfBAP4Rx",
  "key3": "RFNGPdWdpaC72bFHPRLcMpXkrZAxYv5gFoPxF6kNdzVTDMbZ2mYiGoEnirgYWXDpTJXHueLJVezmtN8YxmyfjSe",
  "key4": "3XvkQ39RuoGe5wRkRLLwKFyQhpydrzsDH7RttKCuapSopYys515AuxTste37id1QeP4sSroPQr3bQR2qGQoRLBCh",
  "key5": "4qaSWrNbvBYH4MJrJ7mp8XvQbyoSwKHtQgdz8xGTQyjAu6ms2hz7GTRLQ68RZC4oodfCmWoecbfwMeyEkZQJyswm",
  "key6": "CcGmMwa5Lf2QAgp2ZADyTSEG3vFyV5XjcJuN7iVUVmh3RjpWNNTu8Cj9gVMaCb3FaY7HJEC557Z9jpdL2L9kLEW",
  "key7": "2P1VLfGVhDHkbqZ4QGpRb8U1Ab8esRZhhazv7pY4cVcRURcsiUZk5tNrW2hL5YxpJaVGmePaycPFkH9YrwC7Sn9N",
  "key8": "5EaWXbi1MXSckk3ydG8EttUbUVwbbbdJBTd8ur1qgfPzNXP4tNteoU7cszRE3DDWcE5kdLbc7cFEi1wJXLMAzMXZ",
  "key9": "2EteQijwpfnYLDkL6hgq6kP622jemi4ws911v5Srp3Ut8bVNqkxn9ufCpDATX3hVbR18tRVYBYzyyrMUnF9yChuF",
  "key10": "62bSyBSkfkMNUT3WhQdpC8odHkvea9oxwvgMFfWFwe7LanuQnXrLm9Q1ux6fy2smihBoYioq1HF1nxe9ggYSprcW",
  "key11": "3Fb1LYbVzddFq3424n4QSWpaQZ1vhR52mNKhaTHGKgaE2Jx8EfhnXRjdp1q9qQF8yZnNawJqknWyMMnvcDmpHknM",
  "key12": "36J7kgV5wR4kQjy2vjxgEKMmWRqHU1EGw4NgXXWp9UVaQEXGtDtT4agzKd6hvs3WXyAFqh19TVdbcz8ckggdM28y",
  "key13": "5jH4L5yGrH7TcfA7xu3nmYRFb2U8qn7HQ73uNakCj6xJXjdr7WrT2rjyS747s9QEmMy6s79oDV8Qj4wvG7R6cNaQ",
  "key14": "2XPsH83W5Bxu8fAcvVAcArdm6UusgHAFJdfChtRSk8jBXHsHHnQNsHCLpW8pBAWZYF3zuKsYMpFtw9hfwqK9qpBt",
  "key15": "4TWNmDwav2cAAjqmvhBzLTM9pfW4JjNGQdh8sYCDbHBN2moVuFtB3ceLqLv8h3gMFVwU4y6EFvsDgzf9CLeeo5dc",
  "key16": "53twMFPWSSLmc9mCFKeqzgr1ippc2xDcnLTZj5m6vWyHqXyKVeSoUzudsHpyjVmR8kJYCc5ABiDKewE7PE1WQScC",
  "key17": "xjmwwDdTw8kcgVucd4TmxFAY7adnci8srBZVayCfiQuEZs5A77zHf9XNWXLCBtnNrui9NnYV35TYuh6KTdci9By",
  "key18": "5Q6iCZ16qzqNAvxrEMe6SZxXepCPh8qBqtwPTzMSSmbCEj4u8LeR1da8zxCowedM6qofG5nyPbZ4KXY78WsCh9d3",
  "key19": "3SMvDrZocpu2PK9DaardhtW5qy9KJk5jfuaVWN744ByetBwvvevu3Wvn4nEZjYhAVs88LH4SRCdjgqMa1tsZi5Xe",
  "key20": "5h3esuUg7M4GXQG7BugorWFLjWjk6kVQ5dXtSpiYZEKD8ypEfwL2A6LXuHDjETu95Y94T19YgtwFN8H3PebtYXh5",
  "key21": "5MGuKnjXiYHZZNkADDAqAKh2JDR8gqhpJXXdWfMpnQEiwgy3mXxZRUM71bbf6Rzq2rjFqWMsxdFz8bLmJqomnNP3",
  "key22": "tCDUKbtecWdTqJb7QEWVcSg5zWvippPq5EJyEuuV1G7GCCNbPpKcWyj1BpRxoe2HYTVnfg7SJtjzFoDhmiwNQhM",
  "key23": "2c8VoAKiMTA4yAUUx6T9g19t5WBqZxz415ATbtcoweX8exCc2kzbMeMoKWiLB4hqxUmtvQrs7fcCZnn4oRp3dqdZ",
  "key24": "5cxkxTjVXHCijRRKpxnhoLkBvKS66LoNfof8YP6Mb8kpQknPJ8biuj2MeV1ugE1bYB5zntac3rctFo4HhQEijtbg",
  "key25": "293hnizrjGUVRieJusRdVn6T472gK5R26j2jx8iwWvcynGfG27QcoqdiGbeuTGTkBPhELjTmUJpnMwatCz4nCUPQ",
  "key26": "23zrBSUzNJRYGKuWxk3T8j5vDdoJiq5k28EsmZHHBQQcgwK8a7WVHioxsp2thq2VeQpwsj2os7XPmjqRPFGy35xW",
  "key27": "3hRT2cN96zgNHah6L1yMF4NwLAbgNfLnNEnfNTc4Qdi7P6XgAaFzbD46Ra38miT3j1uo6EK9dM8MZ2MS9ZYg2SYF",
  "key28": "2CEEgspaME5oJzrHZi5cMDi22Ri5rExh8od6eizrqTMvGqumQ9gUYkMyn6o24w5pWQgk2D9DtFHTwZoLm7sTGSBn",
  "key29": "4hSEVrbPXiUdkSsq9sgNkeuaCda4KyF3gCBx3TfxnkyLG1Wdf7yagfKeevQKBtr4xFH6ctzprFHrksCicMRQ5qRB"
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
