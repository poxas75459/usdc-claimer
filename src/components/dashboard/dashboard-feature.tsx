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
    "3qi9N4MeWc4vZneCuQmsRAXimGi9kJFrALMDK6n4RXd2CBUyeLHVsNraLGJSqcU55fwjPtJJw6F1QKMqd3j8uGCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4eDNyKXB3TpVcFjXhNG61GYApE5wemq4ay4t61MZEVqsBxv3VGDxkfG91M55q2fU5ZZsB3XF5MfkqKHVmmKPMB",
  "key1": "3YMEiesaCVtZJx6fiLEc9Eg6nyF9XtHEBvLRECukxt81FnymUCxYLUWzV73oCcixKvNThA2ugDuHYb2Kz47QEeuG",
  "key2": "4o4boAKFjXxZYnK1Ej7GvWuDpKcRiP5Fv94xeaYgibtxzqGHggfbo1PYrZsvdr6vTGijmmCHeLL9cSg7hkwGgyCr",
  "key3": "4RGWXdt3un4vJJKPkAid5w3vLHs5N39eNv8uMoUUtdbcgk9yh54wHfb5zh226WWwjpMwbXWAWbvorNSWUaVbqRSe",
  "key4": "o9t2SijoFAkKLM1nQG9R33jw1r3EbPN68rpNL1ip7iM1h4i7UGzT5EQf827HiZopEau5yajA3RCdr4usWGYyh2V",
  "key5": "WMXifFcGs31UDnbwpTMph6s86h4zt1VpefKALKg4wbRBKj22QzXbmKUG1T6xBUV1FWtozh2VPBZpwXqWPrL7sd2",
  "key6": "FQ1TUgHWTh4ntCN3QdqouTp2FWqt64ENBgAaBXXLbtwwAMCQisTXGQ17s5qULB1WrgmU3AKYuXwdVrA5QD7mqg7",
  "key7": "6wsJhRBf3qPTv87bNic9s9wzFj9aHwZdpxbrABntTyJtaDPAk2UggDEpRCWTptsjE879JpotnA4hdsS8zrw1aRu",
  "key8": "3UXeBacJzx7LJvCct8cjE5e6YANhCdrnmPSutNsUBgcRZqgVfqsmYcMAekeXQNdggtBtzqntjEgtobpEPR91h2J3",
  "key9": "4GLsLdReEvdjcUnytoTyW52Y8HBcg5VTarH8nFN7WBL7mLLkCFsaBqdLfVzQU7oNxokKgQutnwpxqdGjQ9u9a4U",
  "key10": "5WVUDnpspkTZhGee9GVHUyMoE6ogzC5YcUmfc7PfNFkquNoPjK1gfxyxLWbd5RYfLnPvUFhaodQaaBzMnYBfKWj3",
  "key11": "2GCjnK53nwCfUA2pePRbcC8JeDPgtxWrv1BtLQLSfLy7r13fN5nZMSpVNrbRauLnqpWYQ8vvPjtebdN63zn9oW1v",
  "key12": "3c5A5GQyYej4gJ2crWDkx1sDWAtN9fGSgYo2xaJ8W3eamaLr1C6XK8x3uoayRCRxBhU9ntGpa5pzeUWN1tBfdfd9",
  "key13": "4B7mUMdJ8nCNZuUNCmuhK8ZBzJ8ZVDm7RC2rFCXdAZXmRAU82GCyvVMjJGuVXi6Y84rcpz5WkJ9eY1i5nBLRNefB",
  "key14": "DRC1KpDa9tp7RJa8iYL1KcrU3wQLY9iqhz3Kk5CSnfk72e4mjW8yXPhtCnbm9EzokM4TvVpdqaZQCdRpK4kFZTr",
  "key15": "uWnYubGbye5HHHBEeWhE1cd5P7b8jRSoxDmgndhjLgBiqugeEQghs3kTBjeqmySBhnduY5UpPJEskHL7Xx5KZSY",
  "key16": "2bJZzQFrKJpiBdKWvutY1RwMje4RN6CpVwB5pRg4Xw8ZJwnCAeRPpeXkQfLfpqhxXaQtXMusxMNSmdU69sYh8qE2",
  "key17": "5hh432Cj8WP1LfpFcLQA4QH7nCyG8pawMYkeZv6D6rrj56XX97FQ1dNYnCR43xgg6Jv2BzzY8kXUrkgF2XX7SLpU",
  "key18": "4J7NeeuVhke1a9e1gkwEpqzJEPXdvDTYrY4fvHvV5P4qmdDR7CsrLkj1JG22kEHpqbEuDnwuB8d4dqwPXNiZJrp6",
  "key19": "5PrVJmSD8s31BaUA21tSK44kTdDN9NyDcRdb87Guxbxnkt3zhEmkGkiMTSJ97dEr6FnHsLVYsSvWpSAfzZya7KeC",
  "key20": "2suknZEf72CffyMi6bnZ82tHScmkbc5uFKkzDc36aSTR88PduBRjGXxf8b2XidaNpWsHZorihHMnuzCi3JAhbfnC",
  "key21": "22DurX8T71bRrxumjEypZ3ZSkUHTVbfya3KweZD4kchQdZyaUN9h5Vc7JqZfrAKFjHsthfkvaNDGGnWyaDNg4cVi",
  "key22": "45tqEHfFeVa1oALvCKXRYKSAkCy2m7J7eAGbwr5K3tDUCBbV9AHkqDqW8f1R7iQgTL5ByrRmmGjmgrdmq52sXv68",
  "key23": "35nEYNbNsZ5JMvVLoAuVxwsYr3ZkurmHmjABtWKUsG9uze985ZqR6CmdNNbUUom2Zy9U5yx6J8AJyDHsqtHeY2Q4",
  "key24": "KpveNrBJvtU446KrcJygPPNmMEdAAYFw5efFnHy9RpSw2FJn4QTWXCJWj76CNk1ahir2AXm8u4dhJr6YQcndcPV",
  "key25": "3JHj8KzRqhyDNWuREMGwiMfHTxc7EPG3FPucVGocCfKDgpUp8TExuqdq67HBMEJSbsKdsQ4MGiHiPNPUQXtZERhd",
  "key26": "26Y6ERwkaFQPMGzF5KfANUcx6yQXcnDVkvRg8GeYbKG698uLRHd7cMo1V7M8VFuP2QqzpzbJ31bKzQxKKZVpk4E9",
  "key27": "8vJ3apaC15qwf6Xori67AnvBtvxj9iZcPMCy1wCMpsRNvmn6hUWJzJKpDBguMW4Es7AHFxGRHvrBwzqjqE2RrT1",
  "key28": "4LbM38ef1V83fig4dWGh2YJP8JT7KWghPbxcDf8o6xzqsCg8n8U2ejimB6ykuFrM8UczdtfzxgkYAYtogcvAYQgG",
  "key29": "3JToXxz5ydocQ4RHG9CEBvtAyVXJmqgW8hmEQjyYMRt5urRj9kDBnVcFAbDjfaY5U48w1kQApYeXKEC2XWamSfVh",
  "key30": "2syH1mJXknik5X8yArQeNAqNfQRtzxdgiaY9d4LagTP5GX3h46dDRKt2HdhvusiC2z9ayWSW5EHAr19W91neiA4H",
  "key31": "41sn8vv4CFozJhvQcwGgDThbcbc5jMCoK7sazu7nu1zF4p5cWJknCDsjDgimRMfTzwhTX8WyXu4BB9oEQxFJGT8Z",
  "key32": "4nw74fskrsBYHW6JR3ZknQeUBicVYMHLFvTQj5FDFasogXoUktg6Ntu8wYRwrBFTJRoKG7PLRqF4pXdcg21FMP7Y",
  "key33": "3Y3VTzsNxeNh1Dbw4168ANYUfZfcKEfbnmGHGHi7U8ZKXZG2QTEF5ouo7nw1nT79oRCiJtLtx2k738FXyXj4fiGg",
  "key34": "nE8czpP4KTBhnVVt3T2CPBx469BNLKjXq4WD88SJFTiyvN1BnwuzrPbXKigy65VpDvHxBfn99eCY7Zr6vnTm343",
  "key35": "5NMU9rw3ayhwWGVyZFene7tR91YtfoJjKaXrXSsUFghKCRD6ZWCzCppYPrVP9N2BV6phtn1CMj4UaQiyVRyBuPhJ",
  "key36": "2gM4PW21GmCXSxnpnQDTBYUsSWMHySbfK3Rytrn8MipWEP4n5CmhB3wzTVRr1EZj1ZPyojWGQ8soLrUjY4oEDAyz",
  "key37": "431kRXgYEfrp9oh2ja2VR5wZgBCDRPgE4nTjPTGpfNCs34Ahdx3JFN3fBfwJAyLBy2Zf73fogKJyxrXfq2sW4HBF",
  "key38": "21ogrAs4RjFF3M9UEQikv7tv7NKJc4dzssJ8h4et1kzqQX6Aq2oJGLR9eqfXVd1sUQDvUtRVDaFSyXzRMT6CK8Th",
  "key39": "46gsNJuTFaxQdbQ5m5Gy3Y9WqiDmKxWnZbBddK4fwfFJzgEV3fKZB6jZLfKTGKb4g1DdM3fxHRHdn96a72z3mj2e",
  "key40": "4W8e4aNfGCKrqTxWD3kpctUUzZVxRGqaxTn4NYZ8Msa8aWpef1ao8NyZW8pJysET4aSPrZJ5CakTum2EvAds5qpL",
  "key41": "2SDW14ixaD9A5DCN7RxR5EJouJ7MC7zHNKatGqjtmFwg2DKpZ8qkQYdGbrsfEVJ6WKU9H36pD7j1jbYFK2Efris7",
  "key42": "5PwFaD25zYmovNbaJmgXN6Bkf4TzPaku8Rtr5L4J6d9XmQNSjaERua1By4iZZJ5Va8ABySz6qz2g6Km3eUmTMGWH",
  "key43": "3hNEHBoXroc3nwzkco4haH6pdz3roR6Foha3ZAyBzMmAps8F5tnQsmbqw6dVFLJDhi4rFxJieCjy36vcftiQoQ9E",
  "key44": "3qVBD5mwKdQ8MRXWHGccWmmPARZa37YWwPQWyw1EJ9MPghDSZpQTzYcNSPs1QH2p4bu3UbeG6TDVGg3B7LH8XNW3",
  "key45": "2sAgd48oRJSTR4hkuCD52SvRdi9ZfHCuBPTF8BPi2W3RNvngRkR2X7Lg6xZfznujrcDC2ohRPmCEB2vQTviotnMg"
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
