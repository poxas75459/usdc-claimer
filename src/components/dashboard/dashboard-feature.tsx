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
    "3smucqLAESQUm1WXTqZC5hK1itB79HSDP6fdatnyTWLfEGZwwdp3mxMsCkzwt6dCRoKF3H15sziDuFUXahFPqELw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36BruVgTLNFfhVg7avvLDLNDt7nUVPmZ4o6jNToMJ8Vp9Xny9QEfb15hEQ5e6pgaAbEQQ7Bw56ZRYcD8spdgBYSe",
  "key1": "ncLgLAYSHp8nzLXprnuA54YfMCGeFsN4AWTaiwfcihdCpq7ezhaacZaEjpiHX6wRBnTgE3xH8DEticukcYH44rw",
  "key2": "4UwtAysy5ciHhqp85ZAqRX3g6PuruPaYmKJdLqaX9sEMpfEkHyrkNRDYjuG6oZ9xhrF8bjvzvdoBJ3XyinnvzZsy",
  "key3": "5rr9XZKq3Cjs21jCSGiT3VaTipQXRsHF53XFDjAB3jLXjAPKP4VG2vqaxPmD13BomS8GJNkPUodtniWRpcqc88MP",
  "key4": "2nviq9B14sAEUwHj3WtaRd9RRsAkPa4YAjdJjQ4pX3ir7M8QTrUfw8SyCyrDSD1DJgTNmKNM6KPiGM8sokPyxmMK",
  "key5": "2VNkmZ9m67dJ9soK5jN38MmQvF3Et4P3TJ7iXa4b66ypqgYS8Rjus2zUvD66xU8ENPRL7oVtD7xCiwQCP2p1884M",
  "key6": "2bYXnppqCA5baAcpxXC7rsGEJDizJNdodof1gN11YWrxpmKtP8f1Kg7VdJFDwXY8jgngRLVtvBd68cqRziSCPvzy",
  "key7": "5jVWC9JybUThtphttceMz5DpFrAh2YqV4gBjRkdN6d3cY67MsHTxb9jWL8sjG1L2U561Myr5SmHWMQd9oKTNFjcz",
  "key8": "5iFsT4T4GKPjdeXtzJCqnz8aiqeHZC7Cc1tSo3yDw6RCPMo5LvBzQy18knCaaNr6HV1ht59uChDgS6MW4WWZA49G",
  "key9": "3iYP233HNanBJmb3NSFTTjyjBk7LY5FoSKHA3Wr5GmS74JE2StMQqyRSipCFnR8iu2RgZ5UK5mKrLaqNvG2bc2sC",
  "key10": "4DgoR796tDQ4qTXFn86RjvMmsjm6JX8R1xLqBAFSS5tAuRZvLyMNhm9z4MRuSnggYkMbZXuQesfc8Q3ZekJ1Zn8E",
  "key11": "3a8DiQAz628NQriqUjuBsZKsk5MCMiJXov8x8nSHqGthp22qfBqypxrUq9SEGbFopUue3bvhW7SuqhU632e6RmCj",
  "key12": "4wkk4RTX3cVXfKhtbovEeBjd4efFuBmQqmtNwir7nbAa3ZEu1ckzMZASDYYU3stUHWPwUMpnzJ3LMGd2MKBkRosy",
  "key13": "3BSqwXf7xoJUsNQGMwnpbR6MHA35jXGVZ3VPpcnsWvVzrrcvb1sLmLY59iJ2uVgsD12NVprtvjTQiVyNx967qjdc",
  "key14": "4Zd21cP1fR5JkCVV9JhxgzE9PhiUy3FN4k7UoEAnutuEAPp2e2iwgmJrqwcCeuWsoZ1TFr6d2XSuUG4t7pkhTHy3",
  "key15": "4sHSvbRJ6rPb6aWZgPfLMEcZvS58fnKhtVUZGx5wqmBgvHm4x7TKcRD3sbWqyDT1eobMwPD9kQ3yY88ULbnpawut",
  "key16": "JN5oDbHrVyVTHCLbKSg5MjbK1A488LWUaWEhLMMcbwtDLSH1qFq95wmc46dn3jVtgDbFrE76YTNiRP3aeHwXVo8",
  "key17": "3AyGXexzTQHTf4tcfHvdybM4rFyu9dp4qur6fnGWGgn2VNKQEaYVS4iuHejpAgDE1KaVrT7RJ4eCY9pE8gBEnP7",
  "key18": "bmoYTmFMJNDuH7oLgXS6euVTfin6sQ3N2m8aKMrnY4TpykeDQYyx1Mkqciz9dQruTubSrvGVwDJrfgBv6DNXLAq",
  "key19": "2YDB8p2fEfeyjkZC6Z66rjVkZhUnEHLzXbiYaws9H7ifbSFDuUMCQRHmvN8MXE9m2zTFYrnoqfLuwoCwprNNK1r6",
  "key20": "238Abpqt2bUyPXKyk6XWHXdvwMg3fJcMGqd98pjKc1HQh2JChUQMMgQp4bFoK2uW7QAMACSFLRk3xG8CXzYHc6uj",
  "key21": "55Nujt6RhJM9YjpSz4sNiju1fxUxRtPSuCwAX7eHTK7WDhTJ2BMGbDWEQMcdXpNKUPAHwkWZuGrMS7Vsd1oKvAY9",
  "key22": "376HJVEDp4CSSQKFmEiuaG4oW4NqnEqWPV4zYqN6VXfZhMbmi8Pq5JFiAXVz7rHYSiTzgrQCxhUSHbn4fFNLHc4p",
  "key23": "bdRZMvSPhvdgtYFLVpKKLua45P9A7vWTHkemL4xYEbBkJfBRQ3FPm3eqXCRo2rxxEyoArVh8nbcq7yWPmk4xsKK",
  "key24": "66wAVzrVz4mbGuJ3urxpYTUbG9UWWwuuhotkGu7t47efjSzLvbNvDN2i1ak9P4XzhRfqPbJsrNWtcK3QjNRL5Ups",
  "key25": "34fY2koVGsF9D1WRdNWRywhXrAejfyQujCa5AcV8jwy5dcqr89LkYioQiw32FEnyPoHjLBTxWiV7PyXGzwq39ptM",
  "key26": "53n7tDZth4PwAyqg7Ei94ff7NPGzTbVQci8VajYRRmpemeCxMoyuAMc6yuyEGwMArut2zg24EHqM9rzysaBrxo4c",
  "key27": "2JArgGSNQKr8HCkyb3pVvQS4h3UuGDK3VzenorFD61bNq3vGmLx4Ygpt3LHgpTWyzB7vEs9nK7guxghKdEUyqfNn",
  "key28": "47XfSMsZYUC5jLtB3M8UHqySxCDB3KpZjTV4d4TnJdnG6mSPmVYCgJukT1ovbYkf4ryyjFP8A5UfF7reZRfjGR7d",
  "key29": "5rdzce7SVw2XC56ar9zrw8x1zgnEJLubaCM62XSPt4ad6Qc81ZR7tBAnchSmmycmC44QJCU3gkDbh11nL99cwGh7",
  "key30": "2VBt3zL9LzSDHf47QMs5TiJ3AB5FUCFZWboo9HDHZVrwB3AjvDpZW4RkzEc533WKBzNDjYqEU1k4uygctQmFqcNf",
  "key31": "3q4ijLZ9ygQJRsvoY7QCfzzAYZemYJuPu6qnDGieEJ2kuxRKSK3QQmafNZKbY43Y8UCwX6GkpBTyXtumYQBtdk16",
  "key32": "3J7GkyFkaW5mxwPpYsFXcVwSTpDoEB4GY7osWyUxAa54LUTA98hs3AZ7Qpb9Fh9g28U2SPJgtk6CsfuRddKYFAnz",
  "key33": "33Bdq3GFkK6oa8vhGEXJpDkAqGzXnJRJx7ZZGw1dagDPLfgd2GpHuTDamGaZpaCPFUsSKsikvyECUjzpQU5icxwf",
  "key34": "2LnE1FWGmHHbqS98f9mL3Dq9NfWXogqgKQSPpuDE93erEVrwDjRZKPdR9GKxtKD5iKpCRpBpg8RLgPFJFZk6kSML",
  "key35": "5SLH2dKBEEhmQKpZNHcf19gqRGH2aKCCXvCcXQnmXBJNcqjpL2PMsSxJcWhjoUqowUf3upu9s4pvBS1ddJBnp6cz"
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
