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
    "2i4SFAyeh7JHNj1nkL5rQv8eCTKF1UTXcBWn3LxVD9qu7eYyZ5eEourBYdyyNmL6xB35cznhS1tvvmh9y4QefCBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LoR5LvtpiWKKU4CNkaLLPxkWoEGjDWmCTHjk8em7BLzR6LRRC4NtnUy2EvC93HmNWBKmxAaga2jRw9QbMqHQV7s",
  "key1": "5pS6kXH5pbwnCR1hT48DNtDTwBepgdWT8duiNkaWraQwFy1T2p2LKLtFokceAWxbSWgCqPuyixDQKvHSpSv7D5Kg",
  "key2": "42gS38F99VwsFTLGKUjPcFtPhPKVzo9c7JN8EcgTmjimCd2hCpRQjcXF8eWKjLE2LLtNsoYfq2Lp8tZX6B8rEzpm",
  "key3": "4WY7zb6aoxPj4eky9DmjQRoYiY9HfP4TAW2LS6YrmJQ4ZnaCvzvYqPRghTRLmBRFhEaBb2aFpohprkZCrzdRqjLw",
  "key4": "5A683xmMykeaRsFpCRg4WEkUMe3dzFePNCUMriTCvZwWvL4TpK5CMWv5tgyEuMRPyyCYWyBrt2FL9YLJZ5uRkHcm",
  "key5": "tC95puyqPgABRtDY4mgreG5XJCRJLUfFBwedjBNWRXZ33wWJjaGKXJfineoGtuJn6kxonVozESbzv2MR8T7pbJ6",
  "key6": "2az7HVqzufa2h9ZJ3EqsYAUDJcU8wDiBq8afb8WWDdvy1FFxTiKyyPcgdfT9WSdLGCF5N8c2UipiSU2QQj4JmfvA",
  "key7": "3TP37m2ksXnoG3VD1gApfwfev36M35Dr1H6cYc1vWCfetHYKskdTTtrqZFgp8TzG2kngeXk5TedyWpH7sdwhXQ4T",
  "key8": "qsmkyZjwF9c8UvgdpejH17oZF1mv7Auqkdhw61SNSSi8JLy3cC4en9so5DGZdxXUFTWno5PDoQzkVG5EPytaYwx",
  "key9": "5J8hUgXtVTPvQMQFUbNaYKvoFexmMyAbo1qwa2bMGaskrmiyFDWXTLZdtgan5Nhw1CeeikDzshgsYPwczFVMxdfb",
  "key10": "4bBpYXzqkFNW3HZLW29fk9Z13DrzYiZg2M93ra4VywfJg9SUJpz4Kpkd6c3QuCoNBTFWk8zku99E6gigWcwRpVy3",
  "key11": "44uW4hBC6tywuCr2YR3Wa267duk8Kh5QUTWooa9FEKi9eqrF1ZDozXtMkQosDXBWcuQFkBa4G9ELHjR121ZVn9HX",
  "key12": "4zZLUVKgPdEEwxFgD8MypNoTK7D9KFqXuyo9phTJAQsra6qwBNpwJrgQDrHsz99AsH39DWNcHwmN8DifqxiHjUAs",
  "key13": "2zDwuv9PvdZrJfF9eNBMJiiSpC5T1hLxZYfdDgrSZntn6d74MGxJ24H9gdwHC4FjSUzX9SzfPQbKYms2jyWpzVhg",
  "key14": "kPNK5sQuy6bC4PBLaEPLuG3Fo5mQGau4atXYL4fVqy5mdmRLmyemckiUQmZJNPC4mhEv1kcgVEmkDi5WcZVKYnJ",
  "key15": "3zQSHetUsEqCiso41ydW2GbQ5Xo4rjjmoqxt4H61zQGTNe4ZCFUAC2JMwTHRnNmu4mCLvytE5VzhCSMM4VYWNqJS",
  "key16": "2KSNpgfdJEirrFuKKDzYjUpLu6jx1xFCvFT14SPUxhC3G6VfwMVrywde1NtsfdXLuAU5R5ws7qZn3ijZ7uuCVPVj",
  "key17": "55M1rn7GywBF9LCJEqyPSK8XgQAtpsKxi3Q7qg2ji5ReC6bQNzwam4d3hCQqCmxZAc1MWc7virAHE5nNoaK89uhd",
  "key18": "Ns47oDn99Xn612rgcDPqr6wPwwSgnengHUP6LDURkNxnvXexRQcqjgkRFbJVrhhRZ6b4k9iG7rjh7VXoyQojrZc",
  "key19": "3pZ4FBuzTtrCyEhocRMc9983eu1eAE65KZRfkrGPuzzGj9hTsYX5JXyuBtTAwh1QQRr5VRgCFnYTxgHnkjkkgqme",
  "key20": "3EqWGa1s28thLJz7TKNEFLi8seyRc1YJXQwHR8ppLddM3q9y1Mcuy2dm1S7MmAM8iiYeBKZrxv36FZixBTgWccfB",
  "key21": "3FpxvZJrX1Dbr7BZChKnVSnxn3xo65eUsdzUCLj4WgeqDchtegXuw8cGcYwUGDFFUF1hKpFotfPFdpkaoVyS6ucP",
  "key22": "5HttG4megMAfqSjmgVa3u7tjRC131WTja8Qss3TaMR81ispMMLdVH7kL9XqZ4fJGuU8fgmuPB1Uz6fohAgSQ9B2q",
  "key23": "nvZuPT3yoYvF3xD5XJcuRrm2HzRn7xRQHiQzpZx7Wid5jSXnuH6VZqnyzvNnN43689q4xbXaxMFaK6B1vZoPXyw",
  "key24": "34WsdwuZqqsvhjWWTm9kxAx1uyKUrxUbodwFq8tubcK3xvDvGrQFbv9QGTGcS7g4PXdAUitqoG9Q3NoLNDh7PvxG",
  "key25": "4FsheEdvTg5oJcYepAveCCZFT7i5kw2JEA4WD2boTtxL2Tesy4xExRAhJJ6xiqrRLx1g1FeuZYQHZPYBP2yk9oqp",
  "key26": "2utf4GE4Fs4QFafm7YvLY5u5RQnn8BFdQAfQVcJzePQLNJ2h94ou1Hzkm2AHsdkrAu5rzqLQEPxtFhKGjtLYfUNA",
  "key27": "31vXErZW4RX6Y3826XLfLq4k4oPeBByCiDgQdUr8TKrvMAaoLLoH6f4qAqiLnE8ULBowG3976tF7tPx6DN5kp8Uo",
  "key28": "3htgspt9Cmh5ZCLEh1ycJBqsQ24xQomJt6YWRd7tFCYBRzho5Tf4mhY4TuEaX9wzNKGjXq3ANfLFsjRukHfSYvtg",
  "key29": "6YYW3Z2NwaBvKwJVCVwvrCfxihB5rT6zZ8nRB5Gsz6155c7hMrhR9csgaUeBX8mqmvSP2nW8TjJfmZnfxB6eAtb",
  "key30": "4pMxPGvqh9afpFg4WzFoGmabk8o2DhBwE73VX1LyERyDULiTHivPuJycEtNfDWg4dEjK6tuqd4arMvqgZ2sZqq2o",
  "key31": "59BmbwvsQmitFsnAYNNGyAiD9hk9R2HxeqQTaub62KdL4VgGEZM2Ku3VEypBGhGCVfusfRvFfZ4uqnvY8r86p9Pn",
  "key32": "2cLKwrAE8qgdTnHKQEWtiLmoKW2mmH6aFCHB4MqhLUCK9CETYfrGSV7QJxNZiEdQeXeC3j5d4hEnFceGWR7k53LM",
  "key33": "4ttJu7pWitTWoNzPzTGCRKUDnYS4ScJrsQP7De6kNnogqWhFbDRt1TwCDKRCxVyfjxnSe7qtFyLugrVxLTfRYBQQ",
  "key34": "3hLuNJsSBt4CFPq7JKiVk353PgwDgZYs8zr3kZo3fWrRvHgUhCQpVSjxQWPj6uvpdiCNp6gJufwMVUgEoLVtrrJh",
  "key35": "9oEhXzADnPG98f8KGP7Wfyyg7YL1xMGqmovktTpgNCUqLnx9SkunvUsGyyhGEdcR5teMRe3j7wcEPUPCatXftPN",
  "key36": "B6x9YAUjyPjyek4ohDkCa3zerAnHQtiQXwZPGrSVSiXDayxXKoiW6xRGQnSif1EyfRv7svrCAzGmpmJo3yYMm1T",
  "key37": "3x5ErqdGUm12yAPbTUHCmbJ3i442MY4JZeUSceBvwZCn8pPHHfC5zbrPS1i7ajz9TPWn94yaFf71irD6vxKrNEJD",
  "key38": "3wjWgcNJwjGcMinS6tL4cYA7p5dqpA6U9KkRYLgagYfpA3XBPkhgV9tRwxPaYVEApPsLkvbrrFSVUGe5Wg7DSBu5",
  "key39": "2o2Q2icRYw6pttDzVUouiXmiFWac63vAXkoi8wt5o5pGmSLfqC79fgvSohAbxj7ZnTLCyMoNapxSHUyd25DsFoVg",
  "key40": "qjkznS4R7N9J8JpSGsTA3xyKwDb8jxKDyrK1T7LEQuuqL7pR3SRt8TagUfiyx29ePr6S6QbfkxJUZrDBbqhcVAA",
  "key41": "3DRUSojaA6HqXQKUWu6ABMTP4gAae8yjZwNhCkFm8VcK6Bn2SUYshuG8tfyz9F76sq3cmeh59GsYrFJA94MdnHUi",
  "key42": "65SnEP54f3StKnMx67ZQ44jCcykvYGZxWFPjEnnyYpGV5KF6eZQCwiPgURfpWkCfYgNUutmFh4eAV7Ht2gAx6QFt",
  "key43": "4QsFKAvR7ycTB1NNKqHJRqi7H1w5MLEd6pxnVPGLCWfkJSgpfgBhqCBdUiJ1Kh1tHZzdsvxBuyKArSfJyYbQQXAr",
  "key44": "4kjt8YNu4EcqwL6915U66Qs7WaCxGaZNN4a1Eziq1acrNdZeHoztW3EU3CyjmuxF7i2nXA57iHN2XQae2WryHhYU"
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
