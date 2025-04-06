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
    "5mX66obo479LpMXkmYWWiDeh3rvmCDpaNfcQYSVpNYSq1uv3cd45tMLmKHSUzxgrT5o6DB8s4p7k6aAEghsUDfJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eYhH6o6drk4844gc65tn3BgdSQYEMLX6ajibneNvt2QsfbXkcaB5PSwcKDcDyYRMyrwqqQ4a2vCmGQXwu91qezn",
  "key1": "ph2BKSHbFk8Arjebh7s33aQBSn9FTZEZptSoQbBdNZQuZDMyRt8jRa2dbJhV1x5uY6kX6k4EcMwDtuyp89AAcMC",
  "key2": "2MNRBFTB6gzLX6yLqttAtrVwv8qAaKnN6uuVtQMa2jQHosGCdTts9S4vebJhRBxEBb347qiSa1pdRZv9ENU45M8c",
  "key3": "3S95KJueWJREYej2z3BwMyhvgPwhW5XcAYPGnb3DbynA2TWXHPTPBBEbETuy8VqmaJrhAMyB19QPvU95zqgDs5nh",
  "key4": "rjrUozAXZhYt5tcHr5bnn17f9Rj8NRfeC8WhUj9oYwg7p6DqrMJik4c43yNQUvG19CZu361hbp2b6taUsJ1SyQ5",
  "key5": "kfmuRSR9BYtufPJsY8zFmWu6A8cr1Meu6WWFFcKaeDB7w4QU2YrukfeqXa6784B7rfn1ARx9SqyEGz9kBRkFiKq",
  "key6": "62nRbU732nNSARGqAU7v7w6y9Vo6CDzsXxFq65TBpwnnMFJCtZ2LwMvfKLEVYdLz3WbwVWapDQewt5wfFUXz4sMr",
  "key7": "2vpMNgnhAVqn7Db76QnpXZ5pZYBujw23MUWDxHezy4YcNJQpWbD33MKmoHKqm9ogNWcMDy1wWqLHXJu1MUrGxWbR",
  "key8": "3YHni7H6cxyiu26rHQU1d5SfRD6G8iFS75gV8ywzUWjUQTx6J6d13nNWjQi4CcNV753PqHXbFDAvwBQDWh41o15f",
  "key9": "3Va9gsufqFesMsqatEMLHxA9izNGctHNrovDe29BQQtvnbBVHqXYQiBV2mSBDEtTJrGS8eV9NXpH2WV62i3JmNMg",
  "key10": "2vGzm2eMxDXZ45y1T8okXxqLbQvVKjxiF1H3UXk18MeiH1Gee6nhQiyK74E2evh36F2VWvAY2TAksjAmB5uN71zN",
  "key11": "3VAwrXNdPqt4K7FTfbsur7zPr1pezW66Vfwf4LpQvq2EYxrPDWhXpsj1DfqFzoCJ8L86C8eL28chnG1LRjBs18hk",
  "key12": "3VVc1WwRrMv29QEXjwPuPgR3CdmtFesvgdZ986G9qysrZVukLbis7mHBxM8qVueLvzPspVXQuCKes5KrfxNVmKru",
  "key13": "rG376M5e6QUhECNs5MMaHRbBA4fGuNhFayn1YUaA21WYM6WJiBXkui12Qcg2tyV8UDopqgkvLWrn2RL51KfGqGV",
  "key14": "3tfb558YBMmWKAT6oaxYWdx4YU5ggpcFoi4iKCBwu9gTFUm3GvVEQx4nCJfRiep53tMA2J1yt7SHRNYwP6W8x6TM",
  "key15": "4kcqCwM4F45WdjMee8eMjAwuWMF3rA3wkiWoeRXBxbRhHbqW1zLow2ZxCWbPuavLmH8SrXLBnwdp4pQ47rKDSAi4",
  "key16": "3HdgW38Nr2kpoqUTWwGmf7vvcECpG8VBJ5itiEkX43RkF5pEY2iFVEvkowAhnE5Munhk7NzRjcvBwZmVnGLp3Lno",
  "key17": "4TjQT96TXs84RgWZL6yCDtBohY78Ccv5e2YT7JWR8WWtgfmZLPiGtFe7BCdQj9C1CntQP95vmS8PboKYRnEp8w4C",
  "key18": "ie2V1CrnKaxtnJHQfE17CdPnNv5b5LaeE4RzEJRXpTfwqX64KYQHUK5S9iGspmNEJnQ6CXu5cGD3o7AGCXZYcRQ",
  "key19": "246dRbtCvKm72kcyyGitD5P9xvcRk4ednrVTKCfR6agpLy1yXvfmBY5CFvFpV5ieBw9dM59DHxs3XGK7epKWUqVf",
  "key20": "62TrEUHNCAeiWdsiHxEX12AFHj68fjovxZmC56H9Cq3rxQ45RivLMvSyaRNQ281kfLw6fayFeR7hhNvN2ZNe5JTi",
  "key21": "HitzmoM65wbnzV7bFxNWUJnPjBP7xnWHgNkdhkSyV71Nf5xwzE8st6TyEiz5SeU9Q5wu5EBfNinwQx7dgQ5Z1HW",
  "key22": "v2HjA7ZUoEXjXDxPko6KqF6mduenXMXrFU2qopLrTpa864WCMD3Z6PdaQ9fjuCQ5jGcNcnGxuGMGPimoC4cS6g3",
  "key23": "29wVdG8ZwtpXyU79CEMbZYe7wPNZ6SruS5YQPakxWqnFoX4cj73mueNjoBbt7pmnXW7Dmc6JroHm7FPVtx7Z4HWU",
  "key24": "33yY2hAezi5bLNs6QiuoaEb5m6PWCYN91RJ7prNWaxsRHWuVcSNQoaLZoxMtj7xFgAUYNTW6c897VM13Cuo18gno",
  "key25": "65ANPEkatkjT5NRUnsLbVEquwa8aek559XFbeFToJeBZ8uLY4tXTPs8SzxVEJzkXNmTv28UZLwEF75gYRymrnK6U",
  "key26": "3NH8oEzSHvhthdhc8BDB1hAf624Q3AmvGWKGFrw9vW9oYpn4tEMUbccRXpDt9j7KXgWo5Ky22pSeL74dQScUUJuY",
  "key27": "5iTDXbh6MJ75Rb8mfHpBgrd8VMFqV4sakTatSw3N7JpKMGWSr8gfhswVqYJUeHaQKGawmMTsuNh569npd6uWHgfV",
  "key28": "2gMFDDx9hpmwkCqBq7yaLH1gcfffhtri8WXrJMaVHBECAubgVuwtxyeD4ZUxFn2CuCmgSEidLrgRfWinkgdXPF4t",
  "key29": "2q7j4jG7QsFJV7K2vZkEGptSgkbaEWk6cwpAt4FqncemTEPPRntCW6fu3MDRsTY5MfnyVn2QJfkwxAEsvoBgyNuE",
  "key30": "4Dy3ZydqG7msbGFPwmbJDPjL9ZUGQfiTbGnUKmd9nYnS9tbbivpXaohXCwNjwvGXs7a5zViZpcjDGgHmHnhNw9j3",
  "key31": "4MaLoYWEbzZMSYufNTxK5uGiACxjTKnZ9wbkQaTLnULKjUzaLUxy4Fz5p8jPkHNLJeNW3iYPruj2rpQfATbi8o6R",
  "key32": "5eLZYwX4f8uPdenTbHhFW1iHuEQ3HNxPbE3a8DWXRsxbwLbTmoc1jcdMRUnsZi6pNCBJYxELd1W8VDZiD3yjXUsB",
  "key33": "2GTyt2fHoAtdkWFUiB9RQYiw7sApsJAWXgai6nmPKAshv8akMt1MNZCjyqLA3jwN53mwq8Q458mQYxDPYhcLEWqz",
  "key34": "5b6BJ37441uCVdqVk86p36CcaTpsxsjr4QUqGFDHcHgkXJZc488av44Ex5rWz8GxFxp27VqQgQDRfKWWJoc472cW",
  "key35": "X8McNiEwSbE9Wf6r1EcxkA4XgVxbGWfsviNqMZ89ADDA273eHBPrYUm3PRbr8P7zrD7XMqEmdukF8ZPGuiy6Kxx",
  "key36": "2fZHxALbE9QmSXNNNxGzaRhPjpL4VNZi2F9nsbn7JLBvf552ZtLoinL14XuLUDwpEKwUXChQmVtkENpqh7cmnDnu",
  "key37": "5yXQHGFWtisbvzPSNeFzTTnq18prScyqa4YrshHpX3q3YPSKZueLag6gPXPX9JpnH61FGQNMA3q3vY5RM1MyNt9G",
  "key38": "EJMSw1Y2ExSB1sBcVQ7kau52yrhpKexLQdFBPcDfyWk3LkTqfiC2x9H6CJK87rJcGJqtpaGuEcX6HLdoDg5wXsC",
  "key39": "2LvTZcjuxQfTbVZXooZ5Rv6YgvbgP9D6hyCig7RX6jUFMxRTDEjFSVxdY8dboGaP98a4P6gJ9xsAr15kkieYnhBy",
  "key40": "TH4ADwNDVxiF9YacC1DD21bwRo7bvU8mF2oDQu6hAX3vGHLRBhKqmtm2FvRPxrTiLWzUTJaH1DLkU39hgGTeoYP",
  "key41": "57jN2GKYxvWTtdyy83hMYDfp4LVWDoL1kC9ndhkN16RwiLTxHq5z8BvxWUbBpSdC1Y7rWNdRVecawPDDTeJyQAYz",
  "key42": "48WFEQgzQop5Y6ATcipuuPVLRNVuowcmYyKf6QzxYr9jWLJWX22KfVP6YotWEPPDFwAVyuEgSTdPcq7EKXGU9pH",
  "key43": "3SvmG1y7q8xBvoEF8gMJECv9DjHNEgLVhw39gJizQhjuBMsJxweweAXicWZQf6Y9GoZBLbKxZtNvGynyrvCphHPf",
  "key44": "4DwJXusa2wET9HpFpGKSnU87oHimwQKF1Ei4ztbj1rGMa3Pourz6xJfB6f5WkQeqhKvdMCFZS7YZzVymoKWiGXgL",
  "key45": "3MJ2TLGNDWXMbRDGS2d7Sy4vVyDUcBzdjxBtUGS9ujnL2cmfJMMqtAwD7cjsgozdrzfVroFaFbYc7GQrBuv9d7ie",
  "key46": "4Y9j6LHioCdZi1uMpwauXj7spPF4TYfkhdZVSvd4hRD5KJ1LnzoTdmd8LQZJotua1PxGVCevtU3fTy91GCZXbjRZ",
  "key47": "5jR8s5jRVctRxVocS5qvY7sMTb1cBKqZunYGMKp6XQ5NhWg7LuSJ38oi2s5uCRiLNTLXHEyxxyDbFtYMzcsNcdeh",
  "key48": "3UDgrCpDbZ8DTFSkTTtBksysMX65fGdXNR1roiUsHAt8vH4tavyJDp7aB1W2T7g3pyR7gwb84cSx2bjAGH5hC5cv",
  "key49": "5gAuMB76CouSBsFzY8CRTjBXqDwXDohQG1nt9zFGdvbrsswwrkA7sZQ1efzac6DLYhyLcynyHD4RQy1EFtwz6mkk"
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
