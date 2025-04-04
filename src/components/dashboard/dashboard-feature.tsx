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
    "aEC2TCwBDncQczQtiUsRjTjzfwFjADekhnAdXpsX2LFHS6th3YMXzjyYZ8Tco3yASnrFFLDDhpzhc3aFgL3banv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVSQjvVc1z5uXuexGxF7rGpYPwYL9gKekxVjkbMnqUv6gP5WNBkZ1sRNJgmWPQvRUmV7RHgcDh8jXB95ypffaXn",
  "key1": "4e4e6YDsLtcRGcCDP73QAzFbrnWYHNkP6dNudK6BA4bsR8EyVVKe4mjydSamxA4ptUEm3nGYPFDEt4JZd55bSm8D",
  "key2": "hHuAoQTTAcK1QFMs9QkEYeKzrVv23uzbTMcrjTYRFpCY6q4zrLo6u2J5dhDtfEZJPxFztyqABENWfa2u7uWN6bH",
  "key3": "2T956eJ8JaMGZt5j4HUTVedxJujkaAzbjiRdhP7Uf2R5XmpuHHoYhXGftKvZNFtxivWtP5nWEuiCwB7FxmRKvKW4",
  "key4": "4BpzigEF8JdsFtvFzC8T9zE699d1cCeAghMKscxGp8k8VPJ2ftbwZRXo4zfRvGdaa8U1YjkeUQL3f3Xex5ZfsmW1",
  "key5": "3K451b1jjxi3hNUdiYm1inMPEJPVqMpRUaz41htUYexFLioZFM4TX5evMswKC4Fh5ikVCNWLCGapbWbTcShxZh6s",
  "key6": "36KCFLLZ5dHtnYM7wz8eYeXYAahmNXVseKJTFYepcK1tPeZ8aq1cCDHQhN65PwGpK92uq4Ew3s43dRx3oHGnHnj9",
  "key7": "4LrKqKTonp66eUGXRPDoTMWh7BCAXoy5whwe6xFVoaqrcfW4Q6dgRi6199mHe9xJVgqfvTAkZvTNVMcdGitYyNYd",
  "key8": "JvTysNeFzooc9miGhipyttBUyP5C39BjqRvLmdRB378BFcw2ZGMJbK6xQyXdDfR3h9wUHFQVr8f6XJqhvpsK2TT",
  "key9": "3Jnpir7RSozRNZHZPdngPfqNdvhMqY3M4bPeudihi3zMKRybKetA68S35pkeSzmSKAXV1AzrGfhVwiww1gTeAvPC",
  "key10": "71PtK4AzkYoEnu1o5xqogt2GFpMH8xcw31gedqHvz1fAqrpgcgX5z7CG8LsWASmExsNXTbvE7DhvFBxXHwtAJjZ",
  "key11": "4qdd6wMtBbjs79eLPMX9e1dsS2D6FkHSxYbpLUYVBvh4JoYSPNPAC4KNyH7Ugh4XNRdjQonMoRdYJYNrhncdHdoS",
  "key12": "3o3jFkY7TasJ6qUXWSQZgudR3uMyviVTHU24W5fWf7othpSnNs4fWvRjoekQrfCkAhJfwQbryBca636xUYgDDchp",
  "key13": "3Bx5akcLouBY5sV2zVqU8tqJHENjY8w8KWicBZxBHmFGJvnmxzd9S8A7T7t3J3rquJnByRiGK9sv3F9bttKw2ADT",
  "key14": "3KqPnVz3vUmggnWKheGmqzPzwqYzyaYJDyBNuGxx3JSfSwqi1KgWjjb4kEPZJFF2UmMcoppdf6usX72D6V7JsU2Z",
  "key15": "4oHz5dvkw4oEcaMrmP8JJyLSTUcPdNJdxyQjMLMQNDbJMmiDqdEw9K8WE3VxB8QVvmAfz2u2Mg9MwbmbC9uBwUxB",
  "key16": "3PpAkm62EMn1KSRMuzysud7bSviDBcTzyXrH1uP6kj6zXzZVmck7i3SweTRY2w8ALSuBvNACp8uChfnjQsTxbyKX",
  "key17": "kWZcH3NoTQSj7MyzKcv9FeACYgtZb36bGFkatykp2vwUmn5zmpn7hz2sDGT4NPpFHmuwMKu4waXvd9Yc1K8NrWL",
  "key18": "4rqmkSMWkd9wVXBBFnCL7X8Pqe4tMB2UgXvyKfkKswzm7h4eKNurLA2XofzGU8UfHF9g1kE8LeTqf6FFUyGQ5gR8",
  "key19": "sFhVZidxNL9B5dZ8mG8DGmrF84KgWWddCRTddDauhi2GNcygXdSxBHG9jUxZUDzBYrztgwC9y5NSUjwd1ZEKrQi",
  "key20": "3j4dagqCp7aN59n32rXDRradjdtpeGvnapaxWZwLc6ZoRdV8J9PGqZeMMCt54gARbVBT1oct5EwKeaAKQ7LmdfkW",
  "key21": "3PNC476YikXwmV871A34sRwkXHD4EjvA4AjFaLLD7JBFbfKjHx6ibAH6WgDhFAj3Wt1B55cLfzUjCn9oVpMLorTV",
  "key22": "5ByonZiix8xVgrcsrCu3GxN3ZjTiUkPnSJNg5KUgwzK5bhhEe77ySf2MVWjD13VXN4Jsc8iToydbsRFtkcanUUmp",
  "key23": "5hmawNgtv6198F2wkNzvEbeapT5PKXBjs1q5VXHhZw7oFDytC2H5LYt5GU7JewVRAQpyRSE9fwPnu6CQASHYHGQh",
  "key24": "4hRd4JzYJBVXCPir4bhbUmoyF1f68AwyZqBpCasQz1cs6mM3AsHcYLsXLmSrRKMqKXbKW9romgqw57jStvcPnsnt",
  "key25": "2YkBDoHG9Y135TAFzEVfSMQcU3r2FvSB3sWuF7kwR9dsn89cmbNpS8BKuRm5LU5TnTA8KTa5JfS89ptR1uMiGRFC",
  "key26": "2Hvi1HUmrPSdLZnfTsUtZ6UANMR6GMc7nKV2EBZsyPRTJaGiQrPvJHEXiBzmhnqBwDuQFdiCPdQpYbyuALiDpL3M",
  "key27": "5VNnTqb1z21wb735fkNNxFLzjhK22hr4K5jtYtvBskjTMWHCEc7jqFCuEJQDHhK6ABKYbaS55xPQ2tgyX6UwwwYk",
  "key28": "AsjJZeBcV24Pcstfc8u3tvc1nQ2F1HCWq5JtMP3H19WKsxNpsgWuHuq8BedyNRCSEr3RHEFK2K9WZpcghDXnHAu",
  "key29": "3SesAHgDbr336KXE3n2CtzGudS1tzqmmvjkZx2rnmsGFAgYyaN2WArV37LfmCMxJBjVcFmW7d4geakjXZdV6jvKj",
  "key30": "5gTBihT6KJ3fTax8hwiBUDvzPo8rvwFd2L2R7zkCjy2EYWtF5LZQwoiX27Qn1jQzgW1hXL6HR9219mRDkEZNQKVH",
  "key31": "3NcC6wtGv9XQA2dzFf1TBWpBJKuYFnZQs6icjxshV4p5ypfqD1EeJPcqmsDcvXtQqL1fPCJemsiqespxHtALUhmU",
  "key32": "jJK4URxGT7AP76exdJCQsy8A3PVbEHDMMPpWpdZ5cyypZ4J9Zu4jaNyYdk71AMx3cpvhKuCsFH2VPccx72m4gYg",
  "key33": "5QpF4wsqUAHsboUFxFDtoEKEVAUPeiGTH8jcozsXGr525AchjuFcQVtke7VnDgkpfarNrHRh4tb4SLfmSWThvx2J",
  "key34": "5xNpxBJZdfz8Pnnuujq2E8hvMinZcjyhLeVLazpkKF5vht2FZvFN6aMya86rMtxCCbKySMmkF77hQw5c22tLTKLX",
  "key35": "4LwXNdw2hvEuBC7XtnzF2Hk1Kajiqikxw4UXNUJiRd8vYSUA58qCQQ7ftkHNhv2vHYDxy9L8MFyQZSN9ZUtnfT7Y",
  "key36": "5MaFRUZocj6gPozzciJ5kG54TUyGi9udtTL8iZJpouWfJveL6nUU1ofwYvsbeUokp3gaCBX4edMcuo7NqLwfdiWG",
  "key37": "6bFBSUzZxAJNLtshe3kP3kYq3CK5rbx5EyKZsxvekYLMTyvb4v6jsJdyHCeUEnR8WDxMKDEVEnsQBJntq6p2qWL",
  "key38": "5HvNtLyjBK7P5cTLFsYSgyAsoHuHrtTirvFRp6DrtWhZ9MX5v4GJdScsNvzh2VtBnL5V2BVa9aPAePN55EaTHRw5",
  "key39": "5daHcwfKuS2gtLqQhyyZcwMvw8YrPDDhiufB8oSRZBwZgbBdp95V1XSGfqGtGfqodYbJckCLx6RMVJtgJdSCaaop",
  "key40": "2NXjFW9YUBczrkQMFKTxYErtA3t2Ls8Yf2qwwbKAsoZv9MVwbKpujiw5d2Ma9ZSzpV7Jjx9wnokUHnFQTPqDqyeG",
  "key41": "6TnxDXKkPTQVgCSXn41PecFykc13TjsGCKXYsJToR9DsuA3oN4vgbLEgczUDHscQys1Kya7UPeeXyQ3xfMh66Wf",
  "key42": "YYBpT25kfgV2Y3m3rNPontai3yjZ7HYVnVYFDysKFrK6yh1Ujc8Sm8vYZHZifA2RYPzCmHvMq7oAT5ZMaGEFWyL",
  "key43": "48bUtRZ8ZTFTc6dWYQCN7Sjp3f1q8DLVdBp62P12Nim3BUsB2PkhByZKuJDED8XVeEfYgNGkz2wZWNBpcMhLBaPu",
  "key44": "3caFz4YcCuPb3STJpQTj1Eb4TLt3xc3LQiBmxvYq8S753kpNdanYUjMtsCW5xVLbT3YsAdG5NebMkPhvd6E3qMjN",
  "key45": "3Vgx4K5ohQXZukGFXLMJWHoParWhRGb2MuAv5rkzCJkKsBR2EQ1N8pXM5fksQtfh2RqLtkjdPicrioTDJTtx89rz",
  "key46": "63fxzDoSF4pQ8opFqvUKW6auJwDteTjZoe7amVaCAs8AbjDG985h9WzkPuS3FF7fzjAXJc86ki5V9JxFBa1bc89j",
  "key47": "3oipwEX3hxu1ZFntXEaPdd2AhYciyFs1Q6fCvnoa7iGHzyBYnR1Tve8tG6MixxDU15VjRKWqFREJNc2nAciJKgG9"
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
