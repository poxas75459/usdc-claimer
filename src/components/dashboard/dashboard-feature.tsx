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
    "G6YXMFEqFq46PJL78Hpat2FZk1rCkLixDEcYADYahe5tDMLrS8sK5SczTceXFsRzYQEDz57njYQf4a7GNzbNqKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BCytNz9RkcV51Pi3ZXbztamf3cUhm98kH84LwPnSPNhEKcnR438oyUAw5XQ76s5e4GiBBoKmBbPvvJaQRGG2WnJ",
  "key1": "2UfpB6DcEN9h5w42vpoyJdowM9wYmr3FK7GERAnYnenU4At5Uf3tZ9MdCzr8wo9FPhTSH9kSKpyKaVbE8nMvs6Br",
  "key2": "554rGVB8rtcWQVmaNGrGqzKMcLftHbBJPvRYycQya9EQ1qzDBB8cLGTM1K7y23UKUmJEZHMuthvnG1LPPAE1oVHW",
  "key3": "2RuDtMQY6wyKm9wASF3VGSotne1vMVwTdnkE6yM96NFB1tR1WvaJw92UeLz5iXXw1GHvVsw9h2gS13DJ83rqgkDz",
  "key4": "27pBkD7Vow5NYfiQJi2D3hyF8tjX3RRCi7tE1fTt8hCp6vaqRxYdwon4wpRWDGoPSYDx2jsK1fVRDEHfDKgACsEF",
  "key5": "4qBRKKKE6cMfRao1fhvWBb8ag1KFFiNRVRANJg5ChNVHjXJ6hoe6wi5sitdau4Y7bwMDY488Fe19e2vBs6mmzD54",
  "key6": "4CMt67iUfPceaSY647gCfvgf8pmAKaJi8n6UV5GkybwBaSgF3B9caBTFdEXymd4jqG7RekmmQnEowZmUbAXF7n6R",
  "key7": "3AzWxWdik6HDTEFtC6xMVr3twcHn2QtVZekGFrLfCDY2VFviDuHe5sq4AW3FAGCxmSVAhUptStHzqXxLSwkvQKqH",
  "key8": "5ey4r1RhDkM4y9Ztt9fCzL2taLJGVTD1cC2KXY2DJsQaEAjFUsQmSsGW2kCGsETzKjcAthfnQSs45h215cnxsJQc",
  "key9": "5h7fBt7HT86iPx7xHWYtT1ecwHDDBt2MSkxZMH5UegzDyx5o5gDaxtAYx3vutNj3vBFVXDQ1Smc13zqMiFTCdPaN",
  "key10": "BVFXnc5JfYJNnjwkSNvTJFWkiMDUTienAE6DYVWnfNPSoWbepeQnZkaAB5q9QHFcRbvT6CNLPdtTV1FR4SFV9Qj",
  "key11": "5BbAb1Y4kggLgENZtzBJdjZQutmiPQpz3XveNUB1en3RQeyz2t1PJy1g2FLsNHfgUQdXJqh8tTVKa66PjTKE8CHY",
  "key12": "4enPiFd98imppD7LpjaiLtesZzCUntHk3gQMgGQaF3B4wnGG8TRfHEMnoMoczVQK8WWncnEEFPM7Smi73fBF8w1r",
  "key13": "3DDBDUgTcQQFccgmumPVaeX7yuj7GJ9PfRFNyViTsv6MFVfh7fQ5kcF2vqUYrgYfbht73cjohjQUUjg4UThs6wKr",
  "key14": "4t9VT2XxZJ4NsscDJ1kMCUpP8g7JE6gd6mjkPpqiKwe1oZvp8ba4u1TRZuitU4GYryiEJWWqcFAw6kPan8aX1sZ2",
  "key15": "4ABjeVRiVyWVpnCZzP7X7bKHMCgPHVt2i3FfgFUjDoVEXbigrX5CGPzXkY1DGB2NqDDf3A1A7dcq1LQjaodKQ5Sd",
  "key16": "5zX3WMtmY1sKtQxsUT7ceQQzuMLCiEsADVuzwfRktEcueXaveVNaZnG2dhQ2RcKvbxbWmonp392bQ5fGE75H8BMR",
  "key17": "4qBPxCMaZhYXMyTGtYyS1LqarjpXnLMesxLLaXtUp6yXtwHKFJoLP1UcHqzwM7XiQHydv6ZLzAHUhUgqb81Hj2CG",
  "key18": "23uuQ9bNyS5bSKU9dnjFA8bCcA9nVtX98T1R1C9FyVsgqjufeS98vkfUcEj9kyCce4AUuXAcvioFG1QeR2zCb8KX",
  "key19": "Hky4ZSTDZBz7oE4w1AHYx5rXy52zrYF5Ti4A2B6bwKKPACuCA6Ye55YinxqvxMj5jhrjdgxDnjPtym7ou2fywnf",
  "key20": "4RMcsU91tQQ44B5Vem1P9ijjAXDJ7WpkRB3bU8ERv2PGUej56i1A4WqnwaQw6FofVUfWa8XfaVMjftH38U9dPkZP",
  "key21": "5xPX3YhvAWqBHJCoCxsympXQtm5WM8CnnWLi1SqkowSMP86fLngULa7VLQPTytmMewsg5yNhvTT629ypyK5s13QC",
  "key22": "5ciSsVGpyDeMt6iB47BqmD9eESkoCxFazCCDQNF1rWSjuFzWUWZukVSSCtz3biWjwzss9GaK9J9tcZBeayhonAAT",
  "key23": "4uzZ6TpSURB2hvbhxiRqqoEhsq25wyKgybmZ17M3GZnG4wog4xsrZJKJT44thWFKt6V8HpeCkdueRC8icpMqHu1J",
  "key24": "4VcvAGnyiPazgwwGoMWZCHUP2fcVFHZ7h67kF1d3QTsBQrom3BD9N4dSjR7KHMgbK61nY2gnVRwqDcimNm4Knuje",
  "key25": "oJx5KrTNbAvZYsLEAwXnBUe1g6X1d2EJnu1fQ65UjaNvX4YAuxwYRCCDMTVWcGcw6meiRrr8S6g856D5nqY25an",
  "key26": "MWV3ecXHp1VJRHyd7E8wf3kZRy6cVobdBqD5TGidMJmkYuXKUtkdeR2zJCQ4NTeWW7GRmucoQuwzMULCpcTJzvV",
  "key27": "3XCrUB1wQgAj1BY2neaQkeSJAUch8Lm4ENiShMMNcAX4HFSAe9PtZVXv24rQ5wRQjqufwDDQbugYCf7j6dckTeFh",
  "key28": "2GJywjkkqZoA9A14q2c6J9WFmfSqGh4VTj55bRtvGLtVF623wNVNhd4vwgyfiRtcprk5DP7P5MY8BFDX13fnvH2",
  "key29": "3kXt1YdA23iC7etZ8PVEnzkLZy81hnpesov7kk6RW1TqEVyY8DSbiYPAFmqgKg947mTCQcqLhPAHPftAFt6tEpa3",
  "key30": "2cfRGeeD3mmEQepjFVJEqoGSbEAydcFocZq8Bh5fLns6LBBSknxWLDdEww9FFFgpUBzM6VtAjnGS7xSr6SJxH5Bv",
  "key31": "2G1THfDVGNsPrz5YTC41M7cFev61tG6QTpP4HhNY9teTqKAkrtuqACo3VBReak2vT9sEgYGrUy4mT7WvX2E8dTj5",
  "key32": "5r9tFyYvARjB7zHb3573peYML3EyW5Zcf2VsQBXAwQvZcj9Gt2X8hHYCkQ5rtdXxCuYJtMi95DQxVQZiENbvJbgA",
  "key33": "5fQLaRr2tVDKHd6ce8mLYxYGA3JDcXjt5UWWRiRnQ3vSfj599qNCMLJVAnx2v1CNfRhReQfGXhtYPHWmPuneLg7p",
  "key34": "3HLTmwJmf34QbDBHDEmv4eG9rhGJZVoszySphYcs2hV5jdoT2iPRQvVSoeUtvFwEndP55osZYLX4YDXGJfAtMPPa",
  "key35": "5XAxrjMkc8QzGnFpZmUQaVXUwxbKArU9ZMrfesPKSL7Pjfg5fgbtsTNmFCzEZXL3arFRPTVQ4TGRrVY6sBSFWRiw"
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
