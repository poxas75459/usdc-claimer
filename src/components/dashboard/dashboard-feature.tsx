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
    "uPbUdHYp1qYhDTRW924qku7XHvVCcZ8WDwUZ5xgGH9UdD24Nw4SEBndEKxxYADDn9rbxWbmwyBS8qdftFAN4gha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j8QiQc7UXGjU7AymMXnA9JEcE4jFEbgKo1G7gc9iBheYZQtGSxJQk6BY5VcjR4PaSurK24CCYqk3djQPxPVuV3S",
  "key1": "3mfsDwNmCuG2EwwnpcdSRZZZefEKSqu77aHkHZcmzd7ex3wyFRxArLGYZrUEF7ebpKaszhhRM97NBAxoXHh9dRmb",
  "key2": "5UkoEdJUJnjr3CLQMscCB8rvKy86rcVgaVrWgWaNYDgj98PJvr3Hi7A1uX7AmfAehLfJai8RteNHrB7XaJWt6Sbq",
  "key3": "28A5C528PeRLsnx9YGnYPmuXb9vBmyQqkgBTncZHTjnHPQ4cP7JqJqjheQC6kYyQK3kruBvXPNXvuyZ4WVrzGRLq",
  "key4": "WKu9WaHuJS7b6Yhr8YC3tbPNnR7V2eHVDPv1HmBVv2xGAXq6fF7GgbtWqSAdpspLvtVScDm8gxC4xFpzENVDsmZ",
  "key5": "51ivQHBo9h2xF1CjWmQih9AB5jD1Rw85asqQ4G6vDwvC5WjJpW6icn5nZEaNcK2hCDikTg9ab9nr5P1DdWS1m7AK",
  "key6": "3ouVGKkwwMUzjWsb9UMxHneDJrokxEu9ryySgnK4KsCVKGfYQNDCXq9Ujybzk9SvMU3WvgmZE6H5ddaxww9eyKpE",
  "key7": "2ovkzwNvGNZRKDRKyBhUDyznaDTuRSaJLAhc21bv3CFg6x5EMm2FGJRbhvcMx8Vu8x7kuE6digBY6S9yPYbKNUH4",
  "key8": "5HdSuAAvtgk3H69biUjg363kw7LxpxKEaBBSzE1SPbyQ3WNnDLYQFGcAfXDFhk6w5kvF4wapFqwiSqQmojPNiqC7",
  "key9": "25Dr9ryPYynKDzKq9KniNHNuxZzhRGCx337VmbA5HDoBv1xHF1xEPRMrBqfDXZVDKzcqpmvd7NS35aXXTgSFTqwB",
  "key10": "5aWc19wjnDQMHwQX82vNRyuh2svo5KfexZ9w1esHNqcSfaT4u9bmN2svjcvCCBPEyusuWyb4sohN6swyCCEZHPz1",
  "key11": "2CmGeF6pp6FF7Po9GQjjqHtTK82L64T9qGm82YFdZMZ6JRGytTxatrhbKY2Z1bm1vQQjVQotYLRmWBrUBbch8Pt2",
  "key12": "2o3z8LVELNbuEyaGrE7mxjDKQp14ja4ACrdvMucbEtoJw7J64ge16zboSLzwMHA4xMoCMHuFf1QZ7mA3FvjkqxP9",
  "key13": "yoGteMtzkQSM7JRABRRDDn8gZrjLmabAh5onEjTkDiPNE2aLcxq4p4oHGnKbzoXPbFYp7U99WAxaJzrQA7TPLk8",
  "key14": "5q8S33qEN47DVP2J7CTmnPWb4YHRqhFyYmkT92DYqrLDBQu1f6JGqrV2sfz2DJLWrwbLCvt3FFAdaoC6TzCtnF4R",
  "key15": "3hV88GmP8vYYYr6zYunHbN3Nu2NEvNmVQzLyzVMPqDmMMvcKd19Lp6pcGhbcey4DVb3wL2UZpFD7vipWMjhTjTGR",
  "key16": "415YHVQkwGF4zBzpyXh3hgA8hTEpmikaczbtBDUWdHESaDwiU6UR9UBTGrPhbrTXscJm1U3HEw9wPmbRjS49GH7M",
  "key17": "26X3UrHfXdiK3fjg4ZjRwQTdP6eUNM3o8HaAXGWwVJdUznY4ko1LuM1yJkH4Nen5o1uCqNHusEiaUjL5KNULZn7C",
  "key18": "5c7zah9sxRrNoQvubWfteiE58AL25PsabxbYDMPnfQ2pujHNciUDTWBMqwgCwMKT2B4Bykq9zppSKWCrti2TEGr7",
  "key19": "237TcUWhK9s7ubeHebywnXAQ4peohmDBTTvKKoSNVUcMiFTQaJ99MKkMQ1u33RXyHmH9WzerRCKg8HFm7X1khCUF",
  "key20": "5G7YjBY1jFVMfZb9yLzKvwVt3T9rrrBFDogZSzdx4K1weH4QjcbudrjAn1EAVMnQsrEJNrgZKgvDuWiNvr7cpuY2",
  "key21": "J9PFDVXwxx8XXstdKx6nburUN2mLVbyPhtHHQynnTe4QHGry5CZjcK1TXDEtbPmb3NxTdwh5zLzqYSvv7bBoHrv",
  "key22": "8At3BRMoz9jysXxNY4chTGiMwqf47QNN5NmUgcSXTNFX5HUeyBbwHhoxUPvtgWV7TfPErX3hHnbNUMMVKPCbZ4e",
  "key23": "2P1SxAvFBVrihe8f4SQm7dGXPUKvqmFxC2DF8tS32LgUXkNpL6f54ocQoNAkcUr19kcadxSGi17MZ9ooVcfUpCHZ",
  "key24": "2AH5ZCgb9zU98MUtjRS3MP7Y25djZdV1db6s4Q6HoED2vpx4MgZocJJmwsoDnkWoTXAHPCFEoqKnzKT4C5vY4y4r",
  "key25": "k8R3p7PFcKNVohHVHSpxcCTr4qn7zzLg3jdEmJ1CyKoLbVp3rMt4HiJDFAJnHEWXmkvgSUd3ufYZFe2DaeG9fVX",
  "key26": "2my69pz3zNdQMS2Qx3SN2F3t6vYWNQD4DnAyLEPo3LpE42chnmdLyox2UJcdXXa4o28GxinAJCV3FSN427mP7vnR",
  "key27": "5GrfnyBR6BsSfheJxctom5NJV79VRAVccexoJD4smD9naseiTWpBSqDhuKHE3eeZSWJoDvjCEH9rpQWvzu3gkQmm",
  "key28": "46PoxUJKU56cvvqSK7TpbSk19pyBYKANUmbd7dLrrqhahqiA8vusbvhpwJLMVs5GNN7eJ6SNr2SB9ycLe3HwWYcn",
  "key29": "62dUQ8hSgkQM49sCtpxBoRMNvLFdGDaT8XJfeTjA9oqStL9dvBSVuQzEMNrMbYPWrVqLFwqjyNeMUTVEypMQ5ria",
  "key30": "2wjPw48PBWh3kuWfVWS2Us48c221trMGBVN1gc9ftzB6xd3kZGRxh3YmxRYDkGtZ8xwn9kRxgyopSzc5dcYpdYCv",
  "key31": "2bGP3DaZtWALTTJqMrFuQr2WRKC72rfuRSPUBj8vp5SbqjLhAgabTDNiV8E29ApzsbfATwp1wg1SEii33avjVokJ",
  "key32": "2TfqrwMP6aYKv3GkLWWXBdzLoQoTE9nvhNvadCXehBeBJZRLEZa8kpwge5qdJhGb7FRfa1U2Au3v4BsJYHkiW5Pe",
  "key33": "2ePd8bWhzAKzhdCj8meZ9QwiZRYaoxWGC8uDspB4feeAGDELArhCwCqAqHr3qwnMTT63SzC1t1g2hJ7P51zosnn1",
  "key34": "2VDsfSJpSSJL926xFdG94dnFpgtyXBHmamiTgcc2WhfBW2xCDYGXHtNFRJ1XsSQ8Y2ZTN5xJHhA4gC8qXPijW7A1",
  "key35": "DxezmZrN7Ayv1LRTeWvfG4LFrmYEo4qACub9H6mx7MryEnrexKsqGkASLZciASieJk5Z1BLFYH3nnXtcxrQt4o9",
  "key36": "66LxQKvvVnu3dZem5NfrBQu24QxVRmmwXMMogtmMr5y5TgzL6Hkp5UPGJqMpiZEJWhWfDMoZ8rCpFYZrTdtTC47o",
  "key37": "H9dvqyxBwyhSrYrgLbwjhKqjuFtxak3Mj5oRLDR45j9zzU9NTvqA7eHGRWhxGninPgBte3Ars2kJHqU5VZc3Jn1",
  "key38": "53dtKP9Btj2u7jzZJ17k9xxVAX1VMuUkiYpoYA5Uq37QuzQnB9ZyKkfS6RzHyoaCPXcDnnBpyuRsPCerVYyX5w1v",
  "key39": "ANczZGniY4hrU8gFAV69WUCWkPTBy9pFwZshdcgHzrMzv9piM7TaABpqtsF7EqJPjbycYpWLuARohGu6y1J1uYY"
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
