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
    "4wYV16VDuUSEZogPUswb8r5eUiKbLvkPDnzzPDioA2SoaNGCkMGdQVpTyoVHG5gKFucLBeUx7PfmPc7EqTYrf1T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgBZm48GCNCys5uCfNR3VJLouUusdHqQEqjiTiskLHkeNdkw9L2BUGtNkPBHksA3bSrnEFzHHFR8yCf9EsviVNT",
  "key1": "33RhZU6PdvVw7ftg7PetAAkr4yS2ZmbbrUwXEj8BP7FM9ewhsaDrLDpbtz9MVX3tRChRXG6eNRdYAxDRuKw8g7cs",
  "key2": "tAMNkbyBQZNUzidWwqGr98H4o2gAt9CQXFNqQ489C19f1YQgNQfPXaJAhev4iFvD6rPptoDwHNfq1ra4PCRfWYJ",
  "key3": "3nZhRvJmsgdsbrKPYa4NaGN6fdYKadcM1tjUQWGhpLb21PWBmNiMWrVf7H7Lhde851qyjcUyb47Vmm6F5jkX4Zjz",
  "key4": "2YHSJqAD9u72kgQspZxgW7x8h8eGGyPZBhDboU9SophhXpmeRLgTxpXJRKxkyJ5emXuW5WAyDEe2Zipw2qsj2rPa",
  "key5": "3EjGB5EfmXMpRoaSWt9Sia97aK6aJnxQc5uEQhaqUYEdFz5SCTGMXdVRwhKPMpZpuwuAhgRCKPzzQQyDeb31pZGS",
  "key6": "3VtBRAhRU1jy8eXqqLF7HYZcrqCeMjJUQXv2NjCcSiowK7ACXsA6MQPDVwattH36MhtZmcfdW55auxtUnQ1hBT6v",
  "key7": "TpFsD3YKpnpybxGuur4jK3rdRwd5RJadVm4irbWdyftxBPCVjfUpqQwKpxBfqaXZJUKci2SpRyMN6YfVtd1Jgt8",
  "key8": "4Pq8oi5fkPVXAsNJbKr9Jht4W2WAwYCS7pD5jDRwyJ2M8eRbfRgYebHPqBMemJBYvbEhEqoJ7FaaCQsgegwo1QfC",
  "key9": "5F7mwngfjgxpxnqzVt2CZCSYCJhMHhx56DSpHqNJCP92uKbXDrWKQymg8T3vUjD1ykRxPYv9b5xxNqofF3ba9wvM",
  "key10": "4jK5LtaipCuRNctVqvxMnZR8octvwbmsMnzmZuvnh43oY2pCVTz7JBw5SXXsoP9TK5tWnKxncbJ6P1UUyUmZw3sJ",
  "key11": "3mNPcY476hEukz9vxRt2rXVPZnew2VJxsHDLBs8oEhcMwhBBtyr5uyLYV9yEd4sdb1sJzccCueHjCCbDBnk8EejF",
  "key12": "5wxLuzWqhJeZQym7rxdfGgqPdC4weva6Qmwuwvo1wx9sf3dMKDqPB8DPsJ22ykdoJmQvTzvWxm85EqrZXVgXmgqF",
  "key13": "2QJh3VeS3r2EA6vQsj7xiP7DD7AcGoeX43JVJc5q65RUPXCFCBLtEQh887JaZxwGpkcbHYAUAJqPFa42HuW5XGDm",
  "key14": "5rjEmAnHrMNg7E58wR7ktDKfuBfDxkRFj3RqHqdowrrBBSjG5AjH5XUh2CaibBWJSKdtKPyqr4AksGdwWjecuX3j",
  "key15": "5mZvscPZkAowdYvube9T3LFBCVbSaxDb1XSaCkUC2WkvX2LWdCdKdRjhPvrtAdczxMNFgAz1mHPXqfzzLu4NMqGd",
  "key16": "47tyqVruvKvFmCwT92DZ8EkEPmARGv6EPMrtd36kW31VVZ6x3SyWL7K4yXs1NvW3jyNNP7f7Xmw6ofea58pFtuR9",
  "key17": "3cw2iS8oDr16mMuNuPDNfE8pfWn5B1vH3NqEYZpUTFXs3rwhaujuenjVzPfkUDJn2xCy7HmcKHLfnrZYFEEc9FAu",
  "key18": "hGMkLJSA62qVCaEXuobpxfMbVQyCezk3TPqWsDhugatbTCGDj74FBHvVkxa83ZArxRPq3dFM9fTNtfSHsFzBhfQ",
  "key19": "5AfAV6PwCihq8xDEiCdgEH4TJcdkfyKy1KjWzB5J5uGPCcd746MnANDZZ4ucMfNKBuJZ4GjSdeBjVBaejE2K8ENM",
  "key20": "4GyJfLCZEUg4uNJGvR159ipqQcfStTZeWWiB49PG4pTeXfmZ2cAz6N1Hy1VB9dMttFWpim3rxEzBpDeFeqn1KKdy",
  "key21": "2uPYCR2yLufCdZMvkpq3Vrs2DEf9NBGPVYcp6ufcGaKzG5PtjV8CvSEeLLEH8UqcGrhrRoBPePhqKw3bpdVEs6Wa",
  "key22": "62rioGtEoAfuC8iVwmWPakLzaRKX661At5mvDJsDHngGCF53Ramx4wSKbiTuWVoCsW66h9vttFXTdQMEkKSM1HLK",
  "key23": "EEoPfPeCFc3ssSey8RBXD2phgiJzDjRDR6tiCoG89c7jHeRPtZdZi3QbZ6rvxon9pDhLdmbP8v3uXN1MCRk9XYT",
  "key24": "4Yete41jfhirRX4xjXnbhWC5tnfcUUV9GfuEqFXrWcDTUBDfMHG8kUtQMSKrkYtMNoaLYD2tAYG1arCTu8zcX2SN",
  "key25": "2LjJGTFGxQPcQxw77XSuuR7S5M5Xb3ssdkj54ChCHLShdSNjN9wLn6TbPLmWmYGSgKnc33k2SLyfo1p1pWLc7V2m",
  "key26": "yh73J3fiLMeChsMBwdze536r22yhGrhmMfHP4etBrsQF5emVQ6S2AXg67AgSHHrqBkP6ibUNKX416nGMtzcXkeN",
  "key27": "2HxxD2gMpDLnzLKk3cEFZGB6Q5pz7Zo4i9qFovjkLACoQ7cyw4H9q8K7TfHmdtFJuNmZd7TjaUrYuWdGzTESXvhk",
  "key28": "5bPsKm5Nm9dP5oNJDZsqcTgKdFp6svy9qDARfhkgjLxDUrZ3Vwmc6Lxqo8XqDjemoVh5AUSkwCrLqUJVyUh6uWEv",
  "key29": "5uHpZiXMqh2ertBHtfVwAabkkuwZjCqY8ZJmk1MTvAQjd3gWEC7c3uLnHYn7wmJcPXyMAEhcAkB7awSUCU4oUDup",
  "key30": "3NegNkDYj6cmBNLH5wap8VQeBvxXzgcAc4EwCdhsMnBPtMkfHTj9JHzwYMgS3R7SXBZgEdfppGHWcY9Aze41KqHH",
  "key31": "2ZLgn7dcDAGJGFGPx3rjD4TWxJU4CpiGJn3rVMwy8an4BY8HPdpTb8GgNEahBnkeeSE5VHBJ8LBAEWgGpJRYb3ar",
  "key32": "3qNXpwEQv4Rik5vCKRxrRQEzELMa1qVZbqLau38rMknJajwE5YpPEdk7WyCu4Rsvvcs5pxxUxzfyu7gvos4Eiq3j",
  "key33": "JPTShLMUytDTDLUQL8Hv6Wpf9ENJZE5hMMZyrj2ThSTEbvACxAQFGZzwn6nxR3Hg6mSgEUQ5qnkVif6bRL5CtNq",
  "key34": "4jU6C5LjkENb16cFxwoVjcSSYXvGC2V4Nj3YTe3MysgxHxzHz5ovEWbkQZtc5vgCSkGKKbxrXYATo5xnobCPSpZ",
  "key35": "5EjKyhWMGLWQkKAPXFWeiu2fXFJBG6fGE9qu8Yrynee8iq9PRawcRgvVZMag2x1KNtWNgfPBXMkFQVbb2brCjADb",
  "key36": "3dUCFbtcUmqFNfBqtE7QDgpCobDBZca5WQfM7HEBg2kgMdugKAch8tdMaFZkndX88ix7MYSsY5uvsxg2qYqYXR6C",
  "key37": "479iRX3L2qB729kqGNuPV5DWTQFiFXy9MFx1bEpZpDM57DzinWkqR3Po6CEMTTdo9eeUjXL8qtNeaQWwWAMkaSUs",
  "key38": "3jzgF5VSW7p3VqPvhcRRFdS2Z5FeXL3idd2bSh4AsmPBggZvvVWXNHeV9xXSVN6TvFCQzKzxxph9ooP8dyDVJAoq",
  "key39": "5bhVgQ8fnJRAwwhKiye8cFt4wVtm1ij5WbZEBSSc1R8sLHfuJEuGU9CC9tDpkAPJQckvXFpvy4iebYQ118nVPRjy",
  "key40": "2UYP4RjD5RxFoyGszvxXwrjNdWBPdUBmHwVdXAdVUivFghkwxCcPnWgnD9TFa4Src7uSkCjxcFbBbjDEfjH7kPNV",
  "key41": "6474mAQBboGKYQNJf2mVXzguSCdVDZNuVgpjQ2f721zyrMsJjsyAPFnuwGpNTQ1kQHmaE8cqYYeadHjiofjnLnzk",
  "key42": "dDhGKDK9Y8kJfRc87V5BHURjYGTE5H7YF5SBuJCsNDAzqZXhoaYkkLLoCu4jukZa9bi2NWeBvuwJN1tPcTKL4pw",
  "key43": "2WbFReQ293qc8PDK8tEmpP3aEueT2ykmeD3rSsnbZwczRK85tRgrZow5v7cxZcMao58JDS29HjJcTFgntyZvjL53",
  "key44": "2cnKkDELGAzhvvEE3N3YBs3qLVFgXoAE8gs2pnSUH2qM9TGXdUQXqqxMeYnjLws6k4Ymi82oMumZQztoeioY6t17",
  "key45": "5WnRG8YTwqkj6NwN8XfrbTWn9eoebmtv7q9sLYErB5gQbaSnDLN58xTsDuuCkTK7q3fp9RKyNuhNatkk7YgxNXJb",
  "key46": "UvBTFWBbycxwnwhvVkqrC1S5wCkajMYT564gWfp63zhHq6csGZNNoPRS4yvL3G15DbLdkaF3Jt4rnvsbgQHy5aw",
  "key47": "5TWE4mVZWoWjSaBtdeUaJVEH9f228b7kp8ACqMcX4jQJtoEitFdeE7cMrdWZ3jCSZUW9nQJdBS5pmSWLUqUMYxoa",
  "key48": "4aoC8L4dFJEP5DGAnXge2Cp7UxPmzPBR8jGdh45nDGySb3adLnhq1LqbFWXQ2U5RhL2Vb7W7a7Bv5SqRQwnEAL4f"
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
