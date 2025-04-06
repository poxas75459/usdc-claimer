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
    "5fUP59XcwankL3p5NTwBL7fGKBo7ecjcy87BTvqQgcy3eJMmdoThWAo14v3TeQfvDdWcgW35e7w4ueL6AmRaDoC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzWAAXMbVW51jgRzkWGL7qvKVYHb9dS6XuFvTVoUpcrWy36kx8ApoLnw6Lj8EK5XY1Tx1YGtobxzzWqU6HGcqp2",
  "key1": "2kS6AS3oyo2m6Ze4G5UPyFjGKci2iockSS6hLHg6q3buaiMFuGp45iLqrRpQba6pUcUVgMuSXaVumBtgqPkTc3nG",
  "key2": "4uLWq4jmY2KEbPGPBSTYT4u2caAqrCoVXsQa7JCQrYHMGjpaxPiA4rSbmEwUTuMDFT2VCAES8GLTsCH6YkUy5AFf",
  "key3": "3wMMgyUG98fK7yTjw3Qnn5rSP4Mu6ndzitnq48oLMH38LrKzzegubfsoH5ex3mtTLd7ApkvQNPLyd1ctLVCkiS9N",
  "key4": "2zL61nKo38tiV7pCKJf9wSP9UuWE11QQg6VY5BArTUSscV5j7Cubt1AW3RiVm8tDD8Ym1ekZ6FMA5Rzn12r7SaHR",
  "key5": "5k9Gd2nTjsJghGozxLnqX4VBTXfWPKMPv51Sd8BTpTESLP47KKbygGWYy8kABTRCZgZFUiNbB9mX2hxrxnoSzEvf",
  "key6": "61gVNS6GMfGzCtqG6TxZ6KnXi5qbawVrMJdFEd5nyNuPVCeQN5nyc17VxfG16n2WbfQqY8Kn3evEckJQVvDL2S1t",
  "key7": "2y7NefqBSr42kBSjE7csStfGJuFEwE5fPsLWQH2srTTYhhmvhCuqVLadKNh75Kurqb5q3oy3BGksMM4CkivW8MVu",
  "key8": "3mQfVdAAXRxxo9E7npyxTHioiCBe5PCprutSW1UgJDWnc48m6cJLFNmyJJh6eyo4ccSLNcBmGCqTHC5qxebXFoXu",
  "key9": "2e5APtiaMyPVp6KrDnUnBwaNXYRgvxeCFV3mbDBV5DnFNUnet2gdbMYtwdnnuvSfjKzKEMa1hKaRL5DRGH9hzTrT",
  "key10": "25vijELzVB7qtTYJmLn5oKwqNiPADKidAT8fNnFoH6CR6R3TwSkc9pPcRdJZc4PBjcXb5m5LqsThPycwmaenCi9u",
  "key11": "2F2YvWZ2gauFuySVPXfunxjbEz1FiXof2x6a8cDQEtfqYiMXDNZfkMVokuzK8AAs2NgtWpg6hC9DaCU73PeAtP9e",
  "key12": "5kUxSWc6BUPJhK5VmU25PgsmYKyu1kjjFr6s2iJMSt5xeNmxEzdYrYiAQvGJmebSZUDG6MxdHTW3mnSZwVSeSyny",
  "key13": "4NUgeGuAryQNS4NhUncC5beGCAgcQtv2wskXrUKxmPpUW6CT2o7fas4SCBj9iZLQRGc6mQm494ncroAqkK5uy1sj",
  "key14": "2q9c6DJjqBtSks9JKeBXjHtMA2e1GtXos8WpPf9NQKveg3s5v3yuC3mKo7QLoPSX7B68Q6i4jt2644YUWGhS54cc",
  "key15": "g6CZeMpw3ctEmKLbBbcfpN1ZKwjJPjVqanYVHz2bqMzpdVuwqEtqrE1c165a84KfmQSzMNz45BZxV8YvgsAAP7F",
  "key16": "5PFheFyq7aDK2hrVex1pL8SgYhFDxtoGAuow24PwwBwRnMSrTaZTDQr1e4Kmfk2APtnfmoyTVi4wF9zh6x9n8ehs",
  "key17": "4DMhQiWbjVPQMhZ6oYwG35E6ozK1eLvWiMPPayhFp4n7odcVDxo2quqoN6txAKbZDEPkw7zEhEn4cjdwtmn88BD6",
  "key18": "2ota28NNGafjYn8UK9yUgjWRrcb4Sm1pMFE1RSjXJRDCzzGaGjnXYJ9S57Lv2YfAk7kvhgDLPWCjJ8dFBqsHiaWy",
  "key19": "UA3CfDhu6GNV1zjsj82L73CBuLB5pdr32HBXfoMP3tMUG5E1turRzneLJ92nNVFM1VrbWyHKjkqH2LE2FMjiYU4",
  "key20": "5R6xUfuS7oVEwkA2zEHTwmTp42CoiYqcnZasGmMQTEGfgrzZPT8fojLGFLo6v2JmQEg66YtwQg2iYGuX6mMhDHsG",
  "key21": "fjHWPH34QTKCNx8YVvG3pNtVwHyYGkkqrUCu6oHH1cyhvQFC9ENcaXmmD2FskdHLrvmM1PPMSuEm3znN9RfdH3J",
  "key22": "4t2ggEhaLHKXoq9Xc7JkdkCKH2Wqp9DAGBe463yfJLeEizGsYAk4RzxQKCNaJuuC2cHqWYKZ214DekRcYqPfeJff",
  "key23": "41CZLqGjcrHDA553yByw5sNhokQjXTQDUhZFeLjPV5RauAGzHNbSNeAJUbJmBFfiZqpFFGsc2VEfwFDGEvqvN6ge",
  "key24": "2qDjqgeDeSG11JZzK1Fm61yyhuVAaW1X3nUq8aE8dQ5g5CnBiTqH1eDiUYE3xXmf6PQh1qrCJQt5ScDbQvDjSzeh",
  "key25": "fyc7t5AVKJFHbspEp5DprMP92GLL4ZETJeBFMCnP5W3U4io4iWWpZj4Q2hZvkzrbzTMDnGkEkGfY7Bkp5RBH693",
  "key26": "2qShdAeeXgidaNQa3mckhVcniEppcVVK2stEBkisB82mgb9CrQ56g2wH4R1u4sqwkA9zgtpEuXz4PDufXJ8eQebY",
  "key27": "5gJ2VFEwd5fxNpMtvti758q6QmXpDL5Gt6C26jH4BGo5nx61F3Z9JEo24Ej63Ycbfg6rU5FzJFcRRbxap8M1W1iv",
  "key28": "vaR49EH8a5EPxxBtSbA2QxdVdjLgTFSepN6gD2Z4yAXXwtdYo82D1kW72fxPed5RwFsqsA9utdeSnJHcZSZoJDF",
  "key29": "5EEKJxxPXTakWsXiV3wVCsk18mdNp9BTDJ9ECe47f8J5xcKSszgeBfCjobGnkPhJqAQtsBBfvw6cBfeV1rRsJnFJ",
  "key30": "2RyWANhYDHVYHRnG36yDqUQt1pBdHgJgREdW958NbTogAF3N79SSetXPUpeLwG81qfUDME6zbqzm8zPye4yUDo6e",
  "key31": "5q11XUVavpP8GULL86xBWuxNgGr2rE6NjaQR99mobxGjAMBvdoW6gZUiEej2sR9VLUBupNpiUq8dfZw68UAQHMS",
  "key32": "3LrandMTHvGVVPynLmc2wQQHZM19CQtrqkeqJ6fjfKBgpMmCGSGAkZEzxwHuFyihPxbnshxSBeenVQ8WMpiLn9YD",
  "key33": "2ddUT1JQcB654aJiBq4guK5chs25kCFRmtTRgoWuKkTCN54M3abCbpuHkReUAAnLNxbwVFN9xSUWBMQcfsnekoUV",
  "key34": "3KyiuzjPF5oxCij3GM1QtEVfmXJCquzD6hNrz4X3xEn4wyJhYogTVFRdENenTyfwMERFKxoVnjNqocf3sqmnWV7M",
  "key35": "hozeqSQxNeoGgeUFXWrvuZx6rKzSPR8rp9GTRK6tKr8QYBKNSrLvcegfLGpQpMkKE7CCdZ4j7DJeBKqdE1rsJLg",
  "key36": "2Rc8DJkjAmwrKuVdSVrjdV35gSwdeSBPBnvA78KdcqdXUX2jfEqVRui2MuMkbYYenuxkcgFmjqnGwrkJdPGzxeZ9",
  "key37": "4RnH7Miq8FCsdGXitK17nSTbcJEwAzYuggpVPA14o5VjbtTTdMzriV8jtbWT2nsTrri7tb2g6M4vxesEpDY1NsqP",
  "key38": "55ExkDhvLSKo5ddNaBgbkY5wD9SHEbBcowqWgF5zTuBkpgXRB762kK6KhNoMvSEZJMrmwNePzBZYDvzMSt9D2to4",
  "key39": "PGukHQdPc42TYuD9qnKaCtdRtaQMfxdGxudpf8bY8woYGvvjEn891w7D5611LDPEARZG3LcZpsk9x1TKqEMwaF5"
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
