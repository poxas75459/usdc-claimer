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
    "5jTL6mAoZgeZEJnnGUE6jdFBr6nrrHtiJAKhRZ7ZZ6o85dAW3i9Yzq19JUfRcJKFvYUoyCZ3cF7d7gSsHP1y2cbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xr4tU12ekVxEHsTNKEfjUcGwRnbtijh73SkkdH1iL695W6gK9jhMpKSfpwPVXB1SHQK28jWWZ2bBSF8DRorT4iS",
  "key1": "5qR2BUka2nuFTd41Sk2oS7fkfrYURfjjKDZRTKaDA71vzhv9kGo2ymYS1au27GVJGKVKVZrmYmWLyR1mWotUeACR",
  "key2": "56owqghcS1bmQVaRGPbDHhExNHtRdWEkeeLfTqa9ZdLCDzLEPsE5KZUPHL7v3GU3XNBNTW1z49iQaj8UvhUGV53j",
  "key3": "4rLtGQB3fVZzgYBFzgyUmpUJDAkUsFmhxymj3qmZddbtTXP8kqE8ytBewBshZ9UHnUQLL4GG3a5DnsotSxSLxMMa",
  "key4": "5s2SC22CcgUC5MEfRHee7NMYkJ2npoUY8RhMHby8VqtRbkTTnnumXiH1VCB7wgbS72Z7hj83ULGZtGnYTgGQL5RT",
  "key5": "3ujHFR6EDzcsZp8HH3rUTcb35qSQxKttFph4V7qGD4QRRHEZdrui56GyDvL4eLNjLorRecCYCzZ8dJv7tWva2TD6",
  "key6": "63NQ92E3fT36RbcqMkRU3snLXX6We41Z6nLpBi4bfYBKsS8e7RBuFccKWRbktVbZJ4ZUwbqy7gtVFR4v5Xdn9fZZ",
  "key7": "WHVFaGPTVSs6JEBHgStK1AaPJse41ab26Fdms8YNdqVtfpDhzzv5HTUbUif7Ejm2iRJVHmdjmbrecsdBJ2hkkN9",
  "key8": "7qfqMDr8xDX4jKWPcrEaT627TPDHMtJXinKwLwwdQCcwG1ucCvoiSevfsbTe5v5bRXYFamSgXP8TJ9z7cixzBzH",
  "key9": "5yKzLetRBn7zoZ1L5JNP5eXUjmT8h9HHAEu4Ed2i9oXiefQLQb1ncSTb4Eun6oWVf3kpZVgVM3ddG43fPJEu7qKc",
  "key10": "3GbX7TPYPfRPgHSeNV3qLb1acb5pFFyVnmzVcR91tzDUVM1eK6ZKqDaWasUTGCzdDX2PDRuEXDAKxXSXR3NZvzuX",
  "key11": "2gQFoxojUaVx4TQQDpuTqZt8JjPqdY5YucbgsCoxosFWuCmrFFAcmQxH8aCpUEgq9qBPbRdi9BHxskyEh8UJFpPn",
  "key12": "2d7Np7upEZsdyowF5uBJgibehxhyKEYpcEiaVYvYpNaHVtwYUPBTGrM6q8VoTNS7A86gDdnoMmTv7cZaYo6wNJDD",
  "key13": "33tLv7zqeHz4Ab71Y2wPwvjddnqpwap4iPduz79woPLUVDcUR78qDYwXNioA9u7zpNZZLqJn3n73axLj1GQ2Hxqe",
  "key14": "4ihwJWiVWdKPujEZmFuMEU4AzijepWvM8tQikx4eHT8mYKMEJDWJxu8s7iuNL1Uoauigr6N4wXdSHTSMhowX8YcZ",
  "key15": "Pjm1HyybdZ6syUmGRMHCjK6Wphd8jSWFoC4LdgDFrmz91igvyShdYKL2CscKN2HbkFVxMcN6mgAqjYihqMjXz9o",
  "key16": "2imV5ysmG9Ykn8TMvBtTAFmi6nwikznPF6id9JxGb1GJRedQHc4vma6C3pDaQAkyeMyYiaVPUFXjX74183soQRaV",
  "key17": "3dw8SmXFHz6h1vWkUQkE9QZNeTR21NB5Y7QcfvwZCexd4ymHpXVfhLqr8UTLX2mZCDtJskPiWg9mNoNAwp35VU4n",
  "key18": "3hy1knfTmDc1P52ob1mfHjRKJ9eLXMShRt6nUMxbt1eXPRjbMaZ1TJzpcoiNxfhKXNoqw39YKRd8H3A8yaT3JhaB",
  "key19": "41uFdcXG6RyHeqnLxEqDvJA3V2mky5h1hHKtF1uHyR8vkL1rCnjXtZFAty71ki714t2UsthkzFmU9NDwDZCwfbgd",
  "key20": "BRVGuJ5aeQb9QEjao9AuJy9YbWugtXYSSRuTzeMaGbGD7B9wypSrDVGowx2YciCZbmXYEzyzfX5ehGJWkxWqXvP",
  "key21": "3acGhqFYiX6iCfTnjpsWTz9GfFGpAx5odgDnfo4mdV146dj1Ur1YhoPDXeMTyWD4w1tqnpRgshvepQiWWx3EhHbK",
  "key22": "3AzExovoN9o2sc9hLo9roU4KrpcKQYKQMm96Wqgy6gQaV75Tspkjrtvpr6D9At3D5cqp1e5dRLceFZnuswLymPGT",
  "key23": "5zUvoCwnat4XNYvxATegexi3jaCJ6ry2UbN5GKcF3zmUtC4BeccssWJ4x1VcoNsXX7ThfRXe32DpNbKfFytKEbb2",
  "key24": "2tXqmVFtHofeTVtsVzqcXM43F9pi47pkQ1DiXDaSpiSCZYdzV8F2YSW9quLS9cHzrdgAvHKt9vcUMhMxynvNxFBY",
  "key25": "3e1Sq5eZmr1BYWT8DapiBdXF59gUQiocuwcD4WerFM1ZLqJyauHFUTPFd7KME6XRCZpHZLQdXbFXJX9ixVts4hRT",
  "key26": "Qyk7NonemrWqcV68BhNDK9C4deGJNdZM5WKn2iBLXSwWwzyyeWENgF3gzAC2Y28jALRR5msNwgvZnNsX66BUPzC",
  "key27": "4hfAWV4KuTE4LwaBgNXhTe4vwKnoKkYgy4Q3Hqhcss9kjEw2y1MxyfUZ3MZjPU2LJ1ememzWzzVaRH4pGAzM6gg7",
  "key28": "1RGgSNtFFMXZHsqJwqSDqwsxmhK9tupwAbko8BhMpo7bQai4AWDmSEKEuqQT4cXYBSgv2wXuN5u3YPuP5dRSusz",
  "key29": "2R2munreiBjJQy1CNXndSL58zogmb9XPktmxjiZQfDnh3ebwrttfcFpEzJ4do9JyS3cPD4E7NjYFuuNexvQx2Kk7",
  "key30": "5Q6p9QUmKXCqqYtbHLLKZytN1HkP6Z2eyoboBzM5xidvjpsJLrcBjjZ12nTW3rPRP68bNPnA36v3zmzwrkcKGRqb",
  "key31": "F2PEMwZummVsg4gfDNtNjRAAXdmoG2nF4FRRUY6WqEuSqgjSfHqb6BZTBWjyKXmfjaaZwAz2JBe69UuhzWmrvuz",
  "key32": "21hTWLSbsqKoFxpwSgB2Vd295SzLvGTsA5ciqCXsCdFeUyTFaKbjR8BnDjA2ZtgyuL4tN1vxwrY7zBGKeQQXwS7W",
  "key33": "4YAV4WzdpC4zaBpoLTW4cUaX1BN88zqBrCT6Huy6HLosCz7mryrpBygXQjz6NrqWorySCoCoCwQLGUTwy6paY9FX",
  "key34": "3vdfn73CBnVjR8ooCq2eX5dQaUZUT4RviNBTQYBgVtwFRk9TkLpteKcnbraDAt7z5GjDMLTgo1Xzp6J7DFjNsgVh",
  "key35": "3xVYNXEEea1mLcNUJTNvCzU1hUmHzm4813WZVWwkoG8UhuqDhGenEPKE4bxfFw9RdFkPvUahQrUVUQhdQQqhJUcv",
  "key36": "5J6zvZ8mwu8wh3WfP8Ai8WbMyavHpczxAYGAAMAyJC8BwBdb6zyyHAPjdEiRVSC3CkQKUaccxBiFvZ96cWYB3u3M",
  "key37": "BbFmP2CGsUVAkV8UkpSbnBRNPyrkfshNuSpsf1MASRp5ubhWDnps7PnLE4GCqZgGRnWBYt3DwyK6JDjk8dnKnmF",
  "key38": "4MdmeBvEtACeyqt2zrvfzeppoMv2hZdU39KQ6fYsifeRTmPWKXEhc5uN9pHYW7as4iiXJjDrba4hVgJB22HyaeCq",
  "key39": "3D9hgtMcT5v8SKc2mSXrvSKgDEEiF8ynmD7pzav6W43GGRfUQkjfMgc6WfGxoyyZbTmVMPXsdgHAHqGsYPhaKrQC",
  "key40": "XAdyFJZyiPDfUgvKboVczCniWta6Z2bRy7gACDETsD8xoMhmTEVDJoNQt8x4zusLHnXC8wKCnQJdXzowjb4euq4",
  "key41": "66kt5pyQx66PgzqkQGk7J6fxB1cPjJQa66i1356Rx4CQx3VbX9o9PA96WsDxkyiwALLKVJ6LvtzpLXTP1jf1PWve",
  "key42": "wfYuSR4zZ1mXzZSDvaQQSjNJCB6mr4KCNs7Kaic16dpUq4q72x8rxeDtiwcPBuPUYJYoLi2cHdpkRjPCJA5JPDa"
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
