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
    "585M9m4dUPDx31b7awAweSoSExQzAjtZrpmC8gKQ1GFxvXsqggty22kR57fUxdtqDFDiqV9vtzipm9U5Axc2X3fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKes1hQrSiZisu1gvwfkkTLAQZAsswnu26LyjZF2vqtPM4dHjfezMnjx4N3yLUHLizpxoTbSoWtu628FpjwX7Q2",
  "key1": "5c85uNhSSSKMwS3v113kB3RNjfQMEdgZPbA7dbMrBHiRrcLj7U4kT2dK9w7XUdV1tq1janp5UaRuTaAiodkBn3Sb",
  "key2": "3Ppr74sun7VWMHRPMdAmohff2DEShWkGjJXK7C3BGQg5FLzd2taHGfbzWBaPGEZs2SHh9JZu2hbCwBqsBUPDMLnx",
  "key3": "2U4i3JvMnYj6U6KPoa3THh9dPgdV7uAtZLx6htzbzV9A63ysU31RMbqTh24pM3YBsfEcQdLDNRYcyrdTVzdoNqML",
  "key4": "4QcFtbsPCv8mWh4vrhN6hGBMnmsMcivJ8cxkfE88H69xTP2jJzYhbmhWgoQiM8dnryKaG6vuto7pDsd4drJFYKUx",
  "key5": "2iX5FJFhQhozZJjHeZwTmyqAitqohviXEw118SPMH27vd2KuBqvfot3mFUdgHg4WeV1Uw31CGq5TTKfFo6ZiRoNY",
  "key6": "2ou2o7ys1f3cueALyZJEBkHTgyAbmRoiGJ2GWEJCvV14735ZUPYZ4DXgxcMXXuS7UMraXq3PtVBWRFAxkRrynrEh",
  "key7": "4q8gr6CGXZyVLUBSZbXtuNyJbhLV4dp2t6FKZquh5eWCKKTaTUHj5dAGc9SVhMfT7o3yikikgPHvr3ANyHKGxhvv",
  "key8": "62n9QyzxYQf7LtrJMH3wqjQdDM7QAA81tJPUQonL52R9rPue5Tq6gg9pAw3S2LJPL5fLBqtrbpyAfV2vsnt21TSb",
  "key9": "4CefgvQGRvaXh9Mkgj4tt9EqengDDDM7Dv4njVGnZUwSNnu8i4JUvt8y1V6B1rvkxp811bJsitRaYPdV99sKHWVN",
  "key10": "3xGoLNho2rVfNEJiuSAzANdn4stSwFmCSMQAaEJzzycHQVX82FBAoAK5p2awwmjXcV5F1etu2LcHQbDDEByJJSLw",
  "key11": "54KgE9hrE4vj56qh48oy5horJrNf9z74XBv4ZJWRyzc7mz664QDEvnam36XAMdwpdbhBffP13tHba6zgv1mxTiup",
  "key12": "21cYyCxAhhwEmHdmVGEu2LvrN3Qgv5K74bEPoC1QBjtDSpk2nepuLuFrBy3xnCK6uiGtDXzAsCySbrmF28Nqk47G",
  "key13": "4pe3pynYZW1zRsmGSrcVYFQSjRUZMNWLQcpTwXkm5nK2pwyMeFtGtzvoN29xUo87RvByu3asURHPh16NUiBoA8wZ",
  "key14": "2xr6LeUKpqLTYhVA1XhgRhSBU5LUy1QfxKBnpAyfF5WHsF8567zcejVkHjv1UvT3oAkmiZzSzaJoivZVFCXnymvY",
  "key15": "416rsMvZd1fFobLGfWQFTDVEHWFP31sJMEorm99zkv9JUP6HgrbM85Skx9LUbdUB2zHGKNncNQnrmNnjTvdYhgZn",
  "key16": "588Pu7BZsMZQAS35vCUCNMKVHgERUDpb4AJ9zTi7rDfrqpPQvLeVGQcjsSjaYYhCrbXq3pLN1BkbqtQfa7aeBhpR",
  "key17": "SApJtWk1CXhgmbnnk4oTfaT5cPp5zFfLrnAz9WbacPUcuewXHxbfvENH1yiJuKwz1zX4i94k7WsDx7QwTi5sJiV",
  "key18": "2hsZ4H1boAnuVWBvWV6sFRTWtDZeHXa6hn95zu4tZjTp6YMjfGjydT4Zghf9bcWnmmDCh8PLxFHUgSHnQQQfwvz9",
  "key19": "2ovR4A5dNHEgAdEkd1q8yoMSnu3n3gd84hDKca2sZWe37jdVGQvKCGN7coqFgkQNg6GBK5c2NU7bsdigHn7Hderg",
  "key20": "2efRjSpsPnLTE9WnZ9jMTqcAjhRD5NS886FLWTmouzUo5C8cyk7DQv3K4TmB2u91D9hUADJ6oP1BUfht2MccfduM",
  "key21": "3W4MdecL2eyc3Ypy8VmWRFiVZTZGNgfRK5T4e1AhDn956mMxi51AH7tY1dS3X4kwaycNqq4YEHsYsKctD7Q9hTV8",
  "key22": "Mnk6ZxqccBWy9nFFuu1e1M4ap1Zjw7fPRqKrmyxKktLztv4BmAov6tADbNmXUW3cx9LfMPuNPRZJc7p7yfJaRhS",
  "key23": "F8C8Rx4sns1LQaR3wYGSL6KtZG4LfVKYb3p1rRTAbnK4ws4oJXvUMYDDxPezTa2zUiYyiaM4osB1d5Uw44si3AX",
  "key24": "47eviM6mcxp7mEb3ZqqNqXGDUd1MB2ARN8TByUrksnteUb3ijvaDASNVYZV65zQ5ndTD3huTRmreGeqEaxryBCYa",
  "key25": "44tTg4G3sH12fgNB7mJCoLBoLAr7BA7zTpkyjU573Nx3t8wW9AUKMR8iEGmoXXpSKESUujBRW8xznxm1Nghqzi9Q",
  "key26": "QSHuUyEagA44HFq1LtMwJAorK9MxVPhWEJPGQ5VTSUVr3A6GdufYNo58oZdn2gbKNXyxQhCHtQMtPuKp29g9Snz",
  "key27": "4j4pDpwvojWBhiEJmLVGFJH39zxyxnwXwdCXgd1bKjW2H73upe8D5ZQAAWN6RzB2NSGa23GTJF5Y3nQqotvpMKpH",
  "key28": "2swgBye3ASmnRTooGNbyTajs2bLWxGbTexmyDPSH7d2Nys48xQpq79HX5hpjeSoSGZpQ9gGysMHHLUgKWSs4UhAc",
  "key29": "5XXsGgj7Qewxet2qYwaVYKe8zvYavK5TJTKgz83t4Zt95YrXabHuYRryNVwYt4T1zjmLGaPBeGvJbVnjNawDWrZp",
  "key30": "gj3uDqbXu7VtxjRmJqJsAjUAxyCPirkKNmEzCNZFnFRBEvJJMUVEU5x3ybkQbxLAZ2tWPmZ3RzQnguAVm27Ss8X",
  "key31": "66GRvyzL1L8iicgZuUoM11sdjJicsFJP4rQgKtnFhbNLAGXbVaoKgw9f84FZU1XN4CiCviHMznLkejqsAuNBex5w",
  "key32": "3o9fxuYZbuh2WmPgPzvmQS7ihWP1X9XPK2pqE5xcbWxvpumddyuCps4wchno97s54wMwygEKTRwFzPtXvn7eaAY7",
  "key33": "4TEiY7j7fUNtSGDonZ7bJzHcSAWqovS6U3edSEDAmj8We8DUfJo14XRZQGbjaSfAqLcJSksJL8tAdQQyfggmPusK",
  "key34": "2wLV1NFWfSHebu17EHNM8szD4HZbQLHRcqFaehrspEb74hdqasVkPpcb3t8sLerGaYnzGhBSAMJggfNdJqSZcceR",
  "key35": "npdFCkLq7Nj6h9CSD45E8oJFwHmv5hZwjswLykbYH7coBJh8rrWREebqTh2Ckp2vXTh53YFrQhkCQLsG4BvT5mB"
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
