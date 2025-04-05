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
    "4rfCrdxsFnKUeG5z6Le9FxqnLGckHqzSdRqKDtBZGfhjciAbwjaR2knA4dF6VqxrLZxqBCQom48icGEGpke7vxVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvw4sfoYe3TGNf2m1tUdFsGWnNfzsjJrqCwdm1EJbCvJwitv16u38ukTUDrcbPiv2KaW6rHXYvcYCRknMUmkjvC",
  "key1": "3qqTQLqdto2rJfoFiJRJXB9smTEBnvWtik1CC2W18YXgtF8QAJxqKymr71ht6KDKr2Wz2A1ESSUa91DuD8jzHGpv",
  "key2": "4jewuDzxvkNnK2E5guhy9opMqffGxpqPrhnKHdtGZmLVv9hR7J19aduBfxpZsF3k695y7YzGFKFqxhpArJjZqN1X",
  "key3": "3HpNpyCWgq3NLs9ekXVzFpGCH6BHRs2aCj9cVizbbC7E3Q3XKSu9cCrq6A6P4J9HLZYM4QYkgSoJXM1qHHr16xwB",
  "key4": "2YcRjuH1CmoCr3SgZHi9TRoiUTjnAuoDxNEeJXfZMEZjhD5NRTaxBUgc2dQ8kS3S8yjW7gCpqfe8nAvFd79tMEuB",
  "key5": "3ce3jkZ6TJL7PNUB3pfC53AuE1JcVQdYvgyJrdJkEdibwrrs4FBKymYc1bS6dmFeTgMeMYV6f7McVmu1kjxcHr8o",
  "key6": "5CYdzmzwoAycbAe78no5VZNWZruVtiBKusuzNzXb5hmREHAJh854WMbVa8tCDnhARygEzcFimQ57iRN9y8AWREde",
  "key7": "5PPhZVDE2NgPkq9htJQSvRzbmPr91tLfyqBh4d9vXr7t1uehNywzobZQ1A3BDHvptQd8cpdE2m1w1k2owWByAjtF",
  "key8": "4hXqg1ccFVUVhTStqoHC8HkDXR2z9bxsatxGBnTqeYHt1BtZzYbq6aZWNDLiiyHHTRdQ8QUzc6wPEULWcgeRajTZ",
  "key9": "4uQnP1KmVMPzDHQ1zDnvMmDxEGryLvECKkV3V3JzNew4s9Ds7Y7a88tPUGTFLLiNY7cFwaUE1RQjBFDCeTnHPbs1",
  "key10": "5okckVnzMA86QdUERTDQA3fGzfmDgyZepnY5jWhghrGutqKtvpif816nMzqLUuFVbx4en8vBiUH3iycozSad7F4i",
  "key11": "3SQZcCES6CyPsuq7jvRRvigkyhE7XdD1QEdHCYU5Rs7NibLw7RKxAA7eLYkiAxvQhgU1KXTB1RChjvJNFqsAj7Yo",
  "key12": "4HQBHNtqEdaAm3CveFtdNJc2gZCQNekCQVdPdh1f1ahjNTCcJ2kiYamMvb1GxaudNvNi5n8ihyhpm2vkLy713uru",
  "key13": "5prAYp7XTFVyCjWGqrP5yQywo1QfW9FniEHra2WHjnYmQsJnitUcXPrALbj8sHQWxGxmu9qaaTCKQHfFZgPSYuKy",
  "key14": "5EEPhCS3fF7zAKgeUNviLP3WabKvMW2ET1fwcyntkL4ppUJUy7Atj4XceER8q2nxjyGjoWikoZUDv438R6XFHhsL",
  "key15": "4T63pfjnYxGCkLkX8pCP2KBhYyhfar6ukRsGbc8AMjaydinE2GPcydrRdWRf5L27LwMxfj1eCzkXRuPYb5YtC3Qp",
  "key16": "65VzdPrgvUPvfwcFoeumW8HCZpWB5xWM2bz1awRbjHcjTs9bFRuW92kSPu3ozX5Pm56t8BdwEKpAyVbroQYhiBng",
  "key17": "2o5KT9KGkxnnFmRqDgj8WvPaRU1Jy3aY8djTmrG8KUY14RFfHBXqqym3UNoEf6Vjrzffp2rBuuBDceW911RTKpPJ",
  "key18": "4ovQFuJ9tScZVRmaxx9BDdaCX3ECSAscBKjXUHRckS2ygbNm3kPgJitPYj4SuSvD9czmkanX21eyRM9q585hBm21",
  "key19": "4ifKko5TYPmxDay7WP3trzrFQjW5ZPQrBfgdak2qVvJJUkCRtep3X4vwudE5KhyoZBFb8RnmKZSAbgDHi9XraNiw",
  "key20": "3aC78rxjeG3DU9tFP8Ri8emmqMoToyhtecwEbPDh7vs19SotmQt92LuBqfgu9SZ7GPn9h5QpTmgetXb2sQ6P2DhQ",
  "key21": "2iNro8toAmTmK9wejtwF5Vhe7QGh4odXcCoEm7rzzCTwVkW4oBJAraKSj8m7xgjrw9J7G7vWbu8kcAWxUWLSWxW3",
  "key22": "5yH79SCgAGPwb5r98nN4D6HwZ5Apeu7FUapjpJCMX7MqKD3tY11c5f94HzQaDBsRxuxF2sY7qfd3FGYu3vBXyX9A",
  "key23": "3QK8EMWKfkMJpQtcNkztP4Ds1mrSzQhN2D5McjQYZ4CK2oNF3gjw18nHmSjoRSkbdUZxmA4Z4B82azhe7ZEx1DBN",
  "key24": "5uJGCx5D68Eyu4YqdnMWsj9Xe5aF5UMZjfZTpZ74CfCq9npmT5RRqH6enMnifjdnisUh8EjyWhT4FxukgXMnwvNb",
  "key25": "4rsBeNXxmncPTLHGG1tuqsWgLszuWXPdihMp4jfHFQ1pKZWzXJ3fiLYr63rH4jF1RDfPwMLmce4i1iNzSedoKTZN",
  "key26": "62fNVV8N6pAJQeS8xzehLXmLSvyJVRoQSUW5KpuWJJmPzYufEVTRWHcQineKQNmDPH89kCmGZGwRDcoNQAiDJWH1",
  "key27": "22XGUm7j3pD7jvw7XPotRVmkDyY3uygDCbD1x9tv7PJxEXGrHasz3D6sBLcvy14rXd9FZghbX4ywsoR7Mm2UA6A5",
  "key28": "4Hr7HoNJNBccNFFWW2pmwrwtYJHDtgbZm8osnBqDkCNoURhBtoKi9LfoKkTUXXc4QNyDfbsp23fP2YiaDes2HnXX",
  "key29": "xF4RWt1zRS5KNomxP5LtgF3GSshhDHSR8wEHQa4fzJb54aeC1grYcBDMKu6obzjUaqvvKyohggv9F7mnN9bMgk7",
  "key30": "4WtnAkbTj4rYnPwA8ULjb6GrGQeDDWQYtAXSacsTwnPPCM7JBomooogajq43b94hnTJSfN7gZEiPY6vWD3uPPs5A",
  "key31": "4EWuv6URN3duZNSZzoTke6KhDrAh5S6Fg7bYKHa628t6EejPZjFgD7cGMGMw5Y8VoqVwdA2dkCZhdwweaAH9hbqF",
  "key32": "tjPYuGahzPPLMu5n5LLDyv5sYGu7cWpHSwMqBAcXFcsTV8hPMnvEAUou9E4bSv8Ys3N7DxknJkN97RzpBm6Zk3R",
  "key33": "35qJMb7BVq3u9xx8SST5TopawQW5sSX4tx4GsMgsh9PaFMScrbcMb22Rv2PrBNBedw555dnBUkHHUaGDgoa48fFH",
  "key34": "57gEFEMA8SjL2cMFfTouA88M6Fg6WmPrbvqH1PjvRA5CRe7oHtgoxgTqzfQtf6qv5KeAPygKyBGF5odD6ZeekvbY",
  "key35": "2giSseSZxxC4LdZCMEBnmRQ1s4aNBzpbGReXPMa2zV2Xr9XSfmKJi1WHTfNPNmtZBnayWRscNftUMRqk6VpQNLWi",
  "key36": "2Psfkzj6aQyAtgumh7ugxtfPaYtbQxUGgUZjwPuHEV7Gdp8XMuPTHGrDDURRhqa72qrqMGnTdsez7xQdyFAAzbRX",
  "key37": "4gfsHLzScEZT48yEFtYGks2LomVGveW6RXzVA9FZNGHzTYZ4fCTjU43TmFviaAdGawqUcKmWzgaxLyhvxfHNXxCX",
  "key38": "4UxLLNSAYvd6p1go2ctCaqKa82rnhKtGypyswP7uZQbPkTuY7GAQVCGh5emjAu3nt57kL5aXXfCQVkER51Yg2rdj",
  "key39": "GteSdk11bckG8LBARdmurBGxKsvHFSjbBXrtnV6fYfsvRvKnXeywP8F9dSKUhBjwsnDeTBcdq6zNN1wdVRJ3J7Y",
  "key40": "5u8mrXRCCzQKbkdDwFrkKdJnsYpqCmZHXrYxgGy3ATZc8cGFN7GUNhWuKdGVzF5NJmPaMoFbF2fAKKaXgdcgP9DE",
  "key41": "36qMJM78y3C5eFVV7xRFLKtoKMeo9PhCHQPDLkZmDdyNqK5dEdNmrk8c1TCVE9TxQVJnmXG3GAYjmbtFnBrfuevT",
  "key42": "5sCePyDa2tGGjntYC19xZT4yJMDSzDKtuiwqB4MfLtHWKfd9FCgNwkaVhygJgDCnVz3K4DHxX8cQLgbrqU3r6U7h",
  "key43": "2DhzPZ3ENuufrjNR1p6JgwzsWUVvYzdyqBYsgZ7EN7jW6txNXTtPeogs51WECRxCD4gxvrwyyP7at8yuaYSoXMyj",
  "key44": "5m4y6JMktfcoDYFz7Asd2VhYSHh2zaQb7gA4iLq8UVVqU6g5H2GbksfkYTmwStwGUF5Pc6oDBHfQkRZYEcpPP2sW",
  "key45": "5CQ86RrmyeSJdqhtGdQgpLZDWoMPrEQNu6kkVnd2PwzEKJFFtQWLKJgcqGKJat7ZMrMy8ayVTHLZtXFgFCbdoGSD"
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
