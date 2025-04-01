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
    "jpT4df7LATs2mrqnr2CJDmoKiSLMyiiNMrgpqUfUgWrtfqxszDmEryjghrEVDkckHe55kLLKKdpP6obLh7EbZmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUJGi2GssG3vWcoxYZbZs3Zkcgp8TZbPkDxVT2SKmdnNnqfDeixztqNQHDpRnNDKjGTR2oBpNoMQ3wAE4jMmWrY",
  "key1": "3V8QFoxPFXy5vxyAns7tKxzoovkEV6dnv9acm9KfcdTVkjb9dZvpkwUqmrCe75ZUnzSS3mZ52atNpH4pPin1u4Ut",
  "key2": "5zYGh2fjF19nruQJi3T4gpUUCJUkMCw3DboGqjpY8ZTqAs4ZwHYG3BGXMLBN8fNj7zt1j1i4nxaWovtNqikK9jXH",
  "key3": "4eVxNYZ3P8aRYMJANp6vJXA4tFAbQxZy4i6YRfuDbXWZPrJ91PTM6ZNrWDSk39NYZDACFTHEhZJvfxakSpUbiRU4",
  "key4": "3LBMTJnzTaB525SDST4E2zgs5j4cZym1qVCcgQx78siZYh6sVdRhPnCP7KMBpHu1STr9xyzABAqjjbuogd4Uni2g",
  "key5": "4NAw1qsnuFzidxK6Ua41gVhX6QD8K3CdPGJohZV14fQaf2krsf9SDNuU8yjHk1Wvcp12JbCczNHZVN5KT9omDoBR",
  "key6": "3DCJLJn99nmJ1eNRg4NJa17jowibopaybMHLcdYGSCo9TLdFc67m8y4YoGHPpzJbzt9MSRAKynFgYXeZjYBwdpSR",
  "key7": "rZNkwyuohuRTsuQCXcWZBRthsmb7wdXz8b8NSvC13tNDzZGMPioG7rPcKkSzSHACHxToGc48GwNyQgRXQBRpRW6",
  "key8": "5Vesmhxq6GAh6qWQxX2os9jJCsPXXTQ9St6VvamvQWqdB5sqES8zN5kKHLFGyCrewgNXHh6hKnJtKMD5hfm48PoP",
  "key9": "4B14B6tUwdXJJ7xWB9frWWYgyBboDXLebUNe7nHeST7upaWY9sBLd5dcw5pBJs4TK1DqrY43p7ZosXY5squQpW6h",
  "key10": "2gaaKReDNLL1T7hRPjTR4jgJTJnoLVDkEHxQ4WiU4DVK4Hq3pH3Qqwv2LaSXu5YVsGPkn5gYdJNxJLNGKn4kRtra",
  "key11": "4p56kcqwZD6wEvK3D86aKYYA84TNft6XhFaXq5rYvVU2GY74E3JZSxq2MP3F75jDV8F5qTLpyFXM5x5Y2zJfUYVx",
  "key12": "3KGaS8Jw4GiTCfK4GzNerRjj8vPFDDRbpbhgPXWWfMUP1Kg2B6TAG3kvyJAj5CPoNv8T1FUZjSNLfJGyHiL4sS97",
  "key13": "36vCwq86hJrLkTkyWW2zecf24bMiDR7a5RTfivDgA5dDHpkbwJ17xyM7Xv8QnQBoq6DGjRMPW4toSpB3tX6M9XqK",
  "key14": "35xNWSWXVze3aeNY1tuZAzseFWwDVdRw8a7594qfj5SmnNG5sn99nLPay63tkqkT9pPirPPfpjQqwgoAuhANdR3P",
  "key15": "4tRrYcj464Px9brg6LhAxLbtRCmzzhH9GoQYB8dfZQmtvkHJppgM1TgpYnQeia9XDCvFJM6zUn3ecBh8tpjmWR3K",
  "key16": "4AdLsV8AieHL8Fc64Agm8fFAL3C1aCSyPYgBXs23q5cdCcedUn4M1SkoZLARALexkEYtpCzzRGn6a4e9dtcKm9vW",
  "key17": "2i7bk5Cpxt5YUUVkmKTJCo1CRiMNiFyUUDuQ81Q2yGzMnv7yZSZv4d8oi2Y5CVKqspaCEVcbgsHu5CHZKRQwSENa",
  "key18": "3nFq7W5eebS7TtbKACZRsmE8okRaoVKq5HYEkhwTetZo5MFUxDWqvTZuePAPh4T9WkNFLkcnVv1XLUpp2iwujGad",
  "key19": "2n8qWLEy6bkBnqdLUURPFufQR5fYTAcD6w5WT3w5GS2ax8AHri52jocthcWWafVAgSFYKvF1GTH5mSWq6DS4dL8i",
  "key20": "3Kr5i6pAk717JsRnGG4q5MNGoRuM5EKrDTCxvZh3PX4ECKZLpHmXbFzbB4vdtHUcNf3TsZVL1TJZgJxAAKVNknYn",
  "key21": "4f5DsT1vkesTk9DP34z9qKM3WPeGFDhRzkhheYRjjGeNFuoKVaaPq49sLcoxDyMRocrusUKLsxgMLuCAbd1HNLUo",
  "key22": "5AqWKxSkDTHan4Z7FUioiVwTMJ4njuoHNHkTm2XzFcuJtTAMp2ZNB23TamcjFJJ23VLdnokLApBwq95GLwMhejwv",
  "key23": "37qz6BRacw3ryD2d6C1dmtaRHfkpKb1ojWdZRH3QiPtuJGRpgYcd3jrVoeLfF9dbsBcgRcTvSiHnG7T6Sp26NKvD",
  "key24": "4VXnvcapZKE8osj1pWsWWzJsKv2fHAgB9QejQ8wftAeNjUftbQGhyCwgafhNLnEnZfZPTKbKh5YMjhY2AAktLED2",
  "key25": "33qbrDsV6eeajww8QbfrDMMA42LzmCL5HqwLZiD88pFEJUd7kJjvtjf6etnyT7SiFGsU3PQ77ForUfmh8joBRhpt",
  "key26": "667FHBhjfiHvquxPHXoMv8wSDe1h1mYsQJZptjtazq97yYTJu8dowb6xjcMtECKr2tH6LSvGRj5yqT23KSuUjLWr",
  "key27": "5cmnh5Lf6ZKJAnkY2QaM44iABx1y1xnNfW917vKKNrDHWM6Fj6N9JzbmSCiFauGzPMhLt8CfBfd3JtiV4AcLejfK",
  "key28": "2JoZhnU4RTMDucKRYQWYT99yZsJ9w1Xxdbe5zqKEasDzrnaSGhwetDofXbG4TCS6M5tZ6MrphrUGXWGNCRWpDS5p",
  "key29": "xAicvKXM6QPGiU5jQvE85WkpYBemK1CXbHvLYap7DA9DQaRvysKh9VUCC1aTHbNyXWefxMdASQsJBXAPTx21PXn",
  "key30": "2vajn6HkKcE4csKXiczicjVXxEYcRsFoGHqJ8Wn74AWPYUT99BD9gXDWtUXahf2ruSovZzJvPjtEs6GSZ5VEgoRN",
  "key31": "c5esvyuc2KqTzSPr487AQSCBJUUQaHzpGDSrjEmwoRmpnggNDPNpsDHsfT2YK1yCkyU3nXiFCS3JaDwTR16J1wf",
  "key32": "4Y9zw9Zqj2qXKg9H5PabQuKbVrAaAbz4hC4cvcJeVuXxj3bAH18nm5FoQt16iJLmSsjNNmvDKG5jvRtr3YawFmZE",
  "key33": "35Vc3gJdYg2DB2NG4scV52MgKvhkKEAUQzxtGYExv8XTuHw5FiWJAVGMt8JT4mRdaAD4EK9LnAfbxeDYh8ChcyVh",
  "key34": "56pyr32JvDUU1EuAcDb5mVeoVopJqyJY76pvXFV8WYryQ2jA7kogSYzT3To18n9fAE5NxPPQqq7n8hA2kq8aSqt8",
  "key35": "4fLAg3bD6QL7L8imVraSoJxEyBSjU9FMTVhge1jirhR9SAdtZ4mvr8tXJNSxSwnQJqj7YQb7iWb5vTNodwLTbJ9c",
  "key36": "3SXgtcND5cLM3EtNn784LBkTENTSyJaZbTHzkWFCp2JqPq1CdKJFeWDwsfCr9nDoaWgyZeBHDnJtV8Yx66BddgDi",
  "key37": "4Wq4SsP4TcYbNBWcfMgSo2qRpGTe1TD8QiCt9EtKhQBrqV9jMusv7k9hLxinWXDz9twrZdJUg5rG5H6H7aqdnEvA",
  "key38": "261tryxDypJqNn3ppqsRBoNd7E2ERoYrKbBi2e5UYRchkNxf3TC2RrpY4y6yqRJqF72tqtYwfNcmhHajG23wsgXf",
  "key39": "5ezkcWKaZruWHecjqx98Q6jQKTydXRSp5Gbu9fTxke71ZJFt9fJNHuv2yPcWvnh7We9VBF3MpbV3hVjcftdYLJ5G",
  "key40": "5KEyBrShvpMhEcDdMML2pzvDDPrxCFhNE2ok4NwtPthgYuvPqqKRHVx65yW6UgBRLGgFHnh3tDQW1GbEszDCQDB8",
  "key41": "vSRHEgXykgA77TaikhWu2BQiaP3xu83dVguQN4vRxj9wrk7CbBKR4Ziungd91FTEXW2ers2uHztW2tmsscBnBxw",
  "key42": "2c9eLnxcVvNmf2MnURkaU2KEXbXnoq2xPBahDXhLyDkmXg9KdvuEenrfyTRQAWkoAK4s9bAd3n2qu2PXtZemJNDj",
  "key43": "36eS37YyiZuhtnf6TePDLif5pJxDgjTJ56HHka3MTGxWyPZakoTHmSPAnSknWgGAFUgSTe4RQLMRLoquVd4stCCH",
  "key44": "2JLMP918xHCSbc7EsHERTD9V8QhakwFuJuJMcRSC2acEvRMf5akgr1CX4x66m1k4t5GucW9GGvZXN4dnSaWhLX2c",
  "key45": "5mRkMQFjt4WzV3HHDmKVgtj7diZSrRnUMUjm3ngniuAvrK5Gsj7e48AApLsR3aEyMH9jBhG9eqHuAWhvRKNVyxu5"
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
