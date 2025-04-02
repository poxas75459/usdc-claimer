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
    "2VPr6bqcX4CpJyMYdopxbQqRrctkvxC2yKvqEPJrXaTyCdsc4LhzwUh2zR39M76TAF7Q5PEbTNoZNmuQfDrkgJYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "if5KboZagGWXXJaFbfU54UxCdk4x83e9TPfLu1kE4QKSNJuQtevwxQiNvhasEsMoSbHhyHdTdKXmLiZyVdoXp21",
  "key1": "iFNvycidoCbQb7kM6vH7YTDFwKbtvWxyC6agP84FqdYf6VmDusXe6JGHHudVKu8gjf3u3yqLJyB8QsPzgAm2SqV",
  "key2": "3TqfwDQXoyGQZe4gDfwP92DuFC3t3PGziH1qgGXWZ94xoJaQx7CnxpFTqfmCQoDaht5W53haftMjJZcPrSGx9jwG",
  "key3": "3ChwTx1CA45w2ozSyn9oTSTd5eGS6oaLT6dv28T2aZHxYvadEW9uKzQHPhwuaPxdRxcYpE6H3s8TgHRvMyTkpYLb",
  "key4": "4MZwKqJJupE8Jno6KAqQ8C3YFZFgW6zN7wSM9bKcBuf72RGtiRNPGkdnmTVLQC1wbMX9UqoJyK64TGg9U6jJxS3s",
  "key5": "23nciyj4EnkiuMg3JbV8rTSLBUmiymGFk86dymtyDXmFbEVUGdPcjrKjDcz88AFMi6SifSuNpHFkpoEruTRwm6AW",
  "key6": "3hAnKRMRXNnXJBFMVsD8RGMQrNP58URFx6SoJygPF7MoAJ4fnjtRrGbmfFYnQmdQxCpNzEX5D6k8hw68ZP9iR6fj",
  "key7": "4tvTYhqWFk9rtQCF2Gx5s9Pzox6NmhjYjseYNG6roukMuz7sBQupbg9xMruwkL3dH5N4m8HD5NmWAyKFQj1ABAia",
  "key8": "2XBQjDrvKbAUyPeBNpV1GTwime92svZ3TxfEaSdDa6Gy3U3b5vrW2eF9h96TL3ZcxJdAwRRPG1eH8g96s59GqduB",
  "key9": "62p4rSw6VbXAyaCrHf1xDd2kWQPTH9UDPAtEWFSBLKjFDRGdt7UbsuRjFCzqLs1LsRsJGZF2FsjFfjLmxhZfLAvQ",
  "key10": "4VhTiar5eDFKatorfTaU6mdpstTgKV6ASCFGy5FDDpD356WMmZhXKm8TwJujx9p1kRwyby2RWiYr4oivZBHdaxa9",
  "key11": "3uyk3no2AsrfUVSLm9GYwe54MLx6y4fLfAkwJXxZsru6xL9tEV4o4uU3k1inJ7CcEdDnZ71XvxZdTRgAT18kw8k1",
  "key12": "2e7mAFoJeoPPDUftpe6asdzJz48cnHZo6sbmpjTg6o61urqmJnKPjyyCtBXggHp85ppk4x4DxsJPtos7JavMmmwH",
  "key13": "2EkPMCX6XpzXQxVkc2KNda6CCLTY4p1gmqp6YW7e478XkvmtKr847au4G22U8Hdsg12essfgGLQcEmWa9dKGbLZx",
  "key14": "Fu9JkRAh7gH4i3AB52ccXPJUTTyd6BT1X8VTKa8pt9gvqHvh5yXEpNJAPfzQcr7GtbKEfPZMQg7ZbdBwkvVocxK",
  "key15": "2ib9pq4L2Xnv2f62RupGRpytDs1KTbTu7Z1VDiiFoZUtvy4mvbr5nWoxGyqiC7uxGJbgyJWJ83rCxj2oaqmGFE3u",
  "key16": "5Ds9GbeSdwGrKzujX6vVXfz2ejMSnsu3NtmgBFrqBZ2Ju8TnkE1rsKckf2J4LYcNHpkdLZP9F7JsoYw9qBy5JiiU",
  "key17": "a9b9MQvEdHmi9xYQ8t1DtDinQhWSxdMytF45YiRMzcrutpEd9wXWSCHYC9eFxrJp2v5Au1c9uSD3mikRF7fiTiH",
  "key18": "48rNtKPz6GijLUKBWfbesELR6DT887g8qDTavNpvE7vKf9ouVgGMCZ6q3c1mBtrCrNwffRDk9aYddjJt6pk9LKoy",
  "key19": "2pvzHHe7n58LdXy5HARuhjS6tyahEx9tfYZ5xpvw34B8vGdeenUjYSULXrFPKqsyqi9g4qrtShsfKUd3NfyQaVot",
  "key20": "2ty7PawnHTyCpN1iQBucMNfuT4LgCEHbP4WVGNsjJy9YbfVqFahoA5uuS2axZHF2pNZQ89jQXoBjUeycFjqx45oS",
  "key21": "3X3SbyEccE7skBx7F1qdTSD1bvLgdFtndCC1NUbQGN3kX6cW5mPAd7V1n6gZ7Q9FYG3yqrQqk6yMbjFC9ecGdtFm",
  "key22": "64FVw2Zo74KnCRBv4srjSTdgYby4YdRZSQcogYgjq2praj4Guchc1eZjHK5sWoHEFo3RSpJ2NyTpEcDSVn4kyyjc",
  "key23": "5CoPvRD4Cv78vmzydudLeGjKvV7u67K6svSzPbm3SQsw19nGM76o5i6MUP6MeBd9oxufeTYdYkcCj5KUWKd2ivRj",
  "key24": "35BeWeQFG769uVd8upRwpAuUXmVC6ZURbkXFJYFjGgVGRg75d8cG1JqhMHC6Jjq48C1KyTPFf9Y8fexk5se9tYNW",
  "key25": "5CFray5G87sLPdBHzA8g3Y1qYNjoDjoDp3t1C74mxftURKhucM7zYYcvFFVLcEnBH8Hjn24Ht752LttFwC6XR613",
  "key26": "G9NGuBiJMCRtCRi5YMP8HrYP7WVLkaQ4VhAzV2r2VmFGc7Luo7yCoCUs8Em9fZ49n3PS8G8E19hEY1HfaPNYB3Z",
  "key27": "3DCTrqa29ELXGaoeNSJGQyPRdiKsExtyAcLTJ4VryxqwWJXXW1niSgnp2prCts3vUxfQLb7eHXHdoohKnWMnMAnk",
  "key28": "5myoearNzgULEE2GqLvHogBpgKuYp8Dke3YUuqvxnwAtT5eUs7h14dtpSu6nKUAQmeq1qvRepStzoXp2KSHUuzy8",
  "key29": "YHUP64C8KdFgW2m9tWSQYexeisiqc4jo9XJUWiz8yf7Ew8LYmCXXyNXyvCStu3UWp6oV6SCxuX1MJbEDVjveF8h",
  "key30": "4Y7PSwYKVLWDV6msV2yWRLEgDqQprtLQFkNZzbgL93n2YgdsAQ1ZxGEq7LMnuL7komhUnBxeuAKzPd4jZgSwVvVu",
  "key31": "2QtDpKZMk9hApSLsNH55PQYfgdofqP89Zemk9tMfFCdH4ngafwKG899eWsCDhGWxdjqsQdAdQLfWMVfQRfgbLkVZ",
  "key32": "2aQ12ahwnjzBE7rkXspnyuKocHnnbvY7RJc8vcpZrmNZjF4NPX439KQdgc3eastv1tzErM3jGRQB2FmoMjuoQt7h",
  "key33": "2KT2DgWnRLtF6B9GhYhUd9zb12jRQQe1faskLMtannrwjyRhw4ipjpX4rZPnYBYc8MEdMG1rybFDT1Td8uduvUgw",
  "key34": "2XFWzcmLwQCxkjKTvPYT7R65mNzoBBHyiEfB1AKVK7rMXGUMikB2vnFiF6rPrKGDP62oTyyWHpfS9e6w32EwjfUE",
  "key35": "5rvSEQHShAt9MfyAKb7dHqeVaFbua82jWYwhocPMTwhwDJdhBfqkECynpzTdvMEi1f7vVHf5PARFMYfTQNU8HbFq",
  "key36": "5LYux1T4Mi2YyTpFzUJp9ZzgRiWzhaRwVYiAFMYQ1WYEgXj8Dc32jjGbbYS7mAFwBPpj68dZGKV2eKFVvCMVMBpL",
  "key37": "4MV785Wxrtj3zKzg7Jimt4hhQoDq2nZSXyUF3JTMezVsqXoCcmPsVAupwYMuDLppujo59REBN7Vj9eAUSTedEDRS",
  "key38": "5G3VHDXnqjV9CPAQiXMWQQrrrihpu4GohrgLRHpBwF4iXp6zBwa25DJWLLE6Zn2xr9KLAa5oMebDtTff2L78GADN",
  "key39": "2JUntoEtvcGccYXbf7Do15LenAn1XZWMW29pq7Qe3tPurYqC6XMq7BHbYdX9Aevrp2AW9YWUFRcobWowQZ4TsgqZ",
  "key40": "oC9cTUbTvrk2eU62pvaK1xLubbs3SnRNgzAzFiqVTg11EGiWFN81dHw5SzgbR7pDPPYp2kRxTDymD3BgRTf8ZXR",
  "key41": "57Duduo874VNPQLyxUSCPq7whYnF2BfyKD9RVanfNWSwP11zDgCpE4rtgHykYxpCfi8SfK5LohuEpPZpBrsEU7TP",
  "key42": "5U69h9m9QNpCYdUVNd4p9vvoWqD9tRfoQDeLSRDx5aUqZY4cJg7X2XwdnQ5GK27AHJ9dy6BQAiJH6NRNwJGCc1ox",
  "key43": "5j8zKM1TFkicmZXikzKVwvaJLi8PWXHNAzfEuNZ2YQRuqiPwUcRySECTrJMfwmVwsidiTbF3inwcetdY4oxQmBHq",
  "key44": "5dY8N6R5RzufF1icsmMWnhm2s2yiPqxonbizeu7qDsJkEkfSSCVXBK9mDJ5ru739t2GACJwMZaHCnHw3YSm4J7Ng",
  "key45": "56GHQhLt2sBKvFp2yEmZRkhk8MWQZbpS8RzaPhtatDk9Ncku49WaU8gfE8JCd1dGZPxRc71JdjzjGNeTqCUi3tcZ",
  "key46": "2852kniPDDccWuXcxMeoSxcgVLiQL4Ww3yGKnSPakcujNU5H7xqiuBPaTpFzrtrqgtghZKnhe7nHz4BWdKzJKdqa",
  "key47": "xke2sMYmg5ctomSEFUTWSPZEkjH7Bb6zNr6bPrM79UC4UR9nRb3hY3YfmLBSxueHbFF8zGuwJsXHHkvUrXS7qV2",
  "key48": "3dQRkwVn7gEQwdBcZeR1KUEN3QKFWtYMgN7D9wr7cDXpC9P1hebRGRhZd1KgtiocGvwP3yJSwCo6rWfuZQmXn8US"
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
