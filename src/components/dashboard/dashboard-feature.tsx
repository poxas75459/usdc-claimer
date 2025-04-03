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
    "2muMTYDZ6LAvWiRoPT6Y4fqAALPkXeKb6MzDNE9pVW4vBn9bFhxwLndhChgvfsdTdU3Bry4ExNuvnsPin6yuPTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fb58PXgmmd2uxtA4NsM2wsdgDNataCC5W2CKF45v9oo6pio5UiWD12aZGDfiZdQp82RxPe7HVuDRHDHVXJKJcQU",
  "key1": "3ucviWQndMmPrUduAUGug3FXdpPwxtyUvWWPdZ2cpCwqNjRPHKexi1bQYDRhGbdmqA2qAK8Vw58q8zDt6g2ZLSd",
  "key2": "2DFw9Gdu43TS5mV8rd43HWGzkSpYhCxTL3DHGE9yAvjs4PbUgZdLayQJpZf5HoSo6TqugATvbLXx9V2ZrgM5DMH",
  "key3": "4N3fSdj8zns1Rrcth117o1xDAi75iHT8vycvBZ8fYJ1of9CDWgfyguUtuc4utVx4mxLzCXSDM8pp9ZW7eDeCduNe",
  "key4": "WEUxgN1sxUFFZgSvKmDZuYCNKaLjutSoqnnjSEHzNTbijkrpvAjyRd5vpFjPhv1YgvLSbXTjwiyiVfcvVWnYZee",
  "key5": "1TGgXTpXnwvnVuPib6Vz9Z8H79pB9pgdwUYwGMP1gy7V4XqRXaFF5M9zGtdwdFVovQomJs5wncAyHmp3HipXTwt",
  "key6": "4qy1skozHmiYPFdrfHQvgAHoF1Dd4oYVwmMTdEVMvDCszvG9173KDhuB799qwxQ8ZTxDxigeRiEbtcE9eCj7Xf5H",
  "key7": "4zjhiFUhGHkWbytEPZpCmzyotbxsfzE9982bDa5uUHtzXbL31PHDdkDL7GA52i4hkQUrWyhxASXmCLDaSrSNwK5Y",
  "key8": "2y9bFW8YBZkPfu9goQWeJ7chEDJf42ymjyyss8JUqWnmtdeJpfVk6EP7cdvHJ8uRMh8HNZcz1H2oh4rLeWEnKv2d",
  "key9": "5atY7P9zRsSfkuAjuhTXBZNijAaVDH8oZu7Da2zs54e3ULWhSxadGPrZs5Y4aw9Xb3YPtUZrUqJUqUH69e7yhSHA",
  "key10": "48Fegcd6iCh49SAAJCWh5RrVXstMZSMEictsJzJ1suRdrWDbZhoTw3ZHuAT9VzcJjf9ftrS14AedU3GW4cPwRsdw",
  "key11": "Xt1sZ4diPJ6fpLKn3gJss62CuNfZfienLsWcYoq9w2Zu1JTmsPJ36TRYnfVRmFLkqQ9ppTvRr2z7zCtDpUzcyYJ",
  "key12": "2PR35Pn6g7NTjCuJtJs3f6cbN5DmYBoBBo1BZoPbqUEEY8LspfvKvVFuRUJao5o3UDqCKbxdF1DmhT4QHE9rV1mb",
  "key13": "62RJ6h6brxrzYcKohQM9uGvStQpap6S2PtRHuskyXAF89SBBNNw5FYVzgiGw74VQWZ6RTLYWLjdJSz3hn8fhCB7B",
  "key14": "2huTbunG1D4VLup6rXCs6g8RoZ4mb7CrC6ziEm8eAvc63WUUepY1SiNnojYF21wnpMAkZLa1gSgMuzZAqaxGQrx1",
  "key15": "5NWnH5YerUgNebqAAYbD6Ti3qkqFJ3isLWouJJcLuwD81viE6KWSuJQCyQzrmUjiNBPXt5dbinEjUJUQzWq2hPo",
  "key16": "5EE866sZdWWMFjz9RUuJfK1MikGKL6iFFF745pg3gnzUCLE2RvjuSTHnVoAvcDbNVVqtd7VcGkkAWBQsBmHij9DN",
  "key17": "3BQaPfKowPLncJQbVt5eC7qbd32JJTu6Lro6fdFnCoh5bQDYgzwjpWiTt7XWdNoje9FuawLbDNtqC2LZCgZSD8n3",
  "key18": "2QvmNyHR8JeLYuBEGQdH3Ys3PyqkxHDEEfeZP94s9pYNukiakpsub5GEPozZ3zNUaLWuxEdjg7UWLF1mo15QbLTX",
  "key19": "5HP5ewtunaoSXRSVzQqFhyzdV5PkNwpYV67tZ7hvtMpj1UeB7FvqfGka8mVdYymrM7AZqVbjtukKSAT5J3A4rcVC",
  "key20": "582ahbNAMud6A43ynwWCc4L6hxSEMMbzn6quksLJN5o64A5BYZKaPawFRWJT6vf4mUyhxTPqGs2vQhmiJ4fiTTqA",
  "key21": "5JyxwaScMngEu4z71FyJLeJ5bhngo9akjgkLWCgJszkD32KzSy7LM8dnVFLTFaAzqav6Z3qPpvFyvmuSoU5KRraf",
  "key22": "3RghxG7cvw5Fq1YFTa8EY3outMVHwuPdGgoQ9AX1TXLgSgpssF3THbhENzxKvJBAD79SfkiKhX8QkLPG5vUALivS",
  "key23": "4hErQ1A1mb8L1uJskRdnmjVAv6b2sLHttK3opW7AJQ6wBLESjrJbhycXNPqYV4k1r3789od423tCNLjwA4uRjm9F",
  "key24": "7zUQ3yB72qM9fwRTuA7xJwBcWJXjgAEMqBSwBc994wu1XEEvFSfKNskzSiEfaFXJLmBPE6jxY9queeuM7NNzJKB",
  "key25": "4HfY2TxJUtfcFTWGE1eTkjZM25QZZZpTJbMVWKZFzMcApcNBRsxSLTh2otydph8DP9SDLfoGDD5JmjCkU1nVwGad",
  "key26": "5BUZABKjwZPNpeuPPZD64giCunMfZJWAE8w84RHA5mbanvwKcrPYj8y6p1USQtYevgufzMuVSUH1bkFXWNF1Ksxs",
  "key27": "4op2LARAA4YJpssGuFwu5PkLMi8ftKc1NFVxGHT4tJu1cHSK4UsKd2zdoEhYCx18ff6ncUuccwG5hniLWW1kVRrc",
  "key28": "3vVuSuva1jUh4TAxiTubUF4kY1JsNfdHmzVqrhKeueRPJDy31mWf9Pq3FQNQms1yfh8pZGnmssZr8nNvD4X3p2wN",
  "key29": "pnYjieVPZTMbhjw4WWoA7MU7bDeQcvTQSJjt1gZ6MebPci8unjC4iDsSJ7wM455Wm8rSYMiKzmTkxgunns4NhjT",
  "key30": "QDoeNUSWbNfC1vSc2aY1vNoP6pxwgnGCCC8vXSVzUF99RUE6Cn9fPFS3844VW5S5PzNrjsjn6chMhQJ7N8PPDzy",
  "key31": "5MvKxWqP5aHoqj9bGDWdE3G3KZDySqp1cT22SGRtNgZ8f6nd38T9d9ygs8GL834QbjrfLtUb7MiTNT8jRwhVoF7",
  "key32": "2RdPjdyrQRmWi8YviRqYPBBrsUb3m7swnaJMuibhgXMLnF3z5fC6CGyavQktCD74NtA2qAryWxvcUPSEvjmLuHe9",
  "key33": "4PuU4A2R1LnpjjDPeFoVETVVmmWDmw9mVUKKZ1MX6vqXc3BTxqnPwyr6Sjc2knxr5MBjmBK6BoSxTWUabw1fqwwX",
  "key34": "RG8CwbUqcrzf9kLSabXoW4sjBM7y5DfN2NEzfgAhxNT1sQmvkKVM161wUCVwxwUew5ideCpqjeS1CKLfbJxdpkg",
  "key35": "3LH6m1y6FRy4yd4UiviqgMrtVAPRabY44cgVbjjTBm1mTK2kZ8YguFMC7NJevBgBwXZXUq4dtussDsbe4dT57pnJ",
  "key36": "4XJatAjZVU7nxXzbZZN4CcX9u1DQG59QhxxfBbseFyRYJFJPNSm3ttJsaFkDgogyc3jKuxDFi4T7gZL9mGgM6i3k",
  "key37": "3WphSvDYDnvdA7c57fAB4dcE5SCEbYXQjkLPdhR7qTyLfQswCTJifaDs9vN8H8M85Y2Dc3PZzbvLNHeFcXb6n4Eq",
  "key38": "vSu1YY7xVjzKBTneCEcjdah7ZceMTrH1vcmePgcVXdqVHvyn46ms4aXrpGBAf7EwHTavGYsHGKaJtBVAcFdjaPC",
  "key39": "2g61Xt9gJZEkY8FLsCf8Cin4aeTE4vnsVqvoGuCornWwxWY5tRvdtBNXUaZGHsSzD9YRFzk7Jw6ZMteKUb5JbvrU",
  "key40": "Ny8YiE238DCy347G1BSdpjAjghJjck8tB2FfeFtvRg3RWh5gReqp6kDFqPTMZTCLN36jU61C2DvHsV47FNdSovW",
  "key41": "MjV7zyYeJ69NDedgiPBrw8UzwXCniYiyL4gTgP317cPWqWdwGnPUs5DSn2wo3WZo7DGXLocGbAkiR1wrBbBdd4z",
  "key42": "3xbL2o7dF2Qdh6kgJVoVLUvkC3rsTm2ABCEFMwS9eYwCC6pDLetufrVwboR81uf19e81wCrDxBzE5Xq9LH5atnC1",
  "key43": "4RM9MB48YCC4qoA4vndx2vRiZS68yNPEKVr9ySk3VDHeYaURksaYawdZtfPXNDBiZVNNfZbvJZFkb8igBvct14Tt",
  "key44": "4FH8KaFj2T8QYwf1U2Ndt5p3zQsrC8jp4jujRzZaNrXWKQiHStFFMmp5WcuMzEPiQUteC7zfSN4jGgwKB8b1imaR",
  "key45": "rySbERzgAqpo2Yeuo4LojaAHS5cWmncnEvJrruAcHQifiiq77XAujaMCUiERHXbZHBeEWuNLoUmphJVyBgu6nUj",
  "key46": "2PyM97mpNGz9zYP3TiDhEuTpTT9kEBDJEsY3L8gDeLaBhfioUhXr9XH5ENErckP8Ni467m5AAJMJJGns2hQCQ2Vu"
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
