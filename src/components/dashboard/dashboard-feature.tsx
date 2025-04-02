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
    "9pwvRNTT3W8r8oj1Y5rvj6FX33PhgdQCVquizLcbGdeireUptHAPM9peFdpwFyiwpL3HzDb2Zc9njZGPCwG8s82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsVtazL9b6zgrsbq8D4V48h5knLp8FCeZwbdt67TX6zuQC4vjXmdvNcot2LHaVGAcRWwh72yFJXCnvNT2xQMgmT",
  "key1": "53ieox1jhnPWAdcNpBv6CVZYhmZ9SvtzX887CdJcT9fByBabU8xSymSNaFZS5zwQ4Kh7VXybcWjYNvLaEfMVMbHc",
  "key2": "3Y1tGrAaA996ZUhSX74RrdzrixpyMwnFBpJKkebCjddwAh6AmwaBLReCgWoXdXLA3X7mfcphJkJScSoiayVTQVps",
  "key3": "4baoUCQXyVUpArBkHUkVekzNhw38zTYzUXFbgDmNjU9qXdZrNpTpxfyzmE3ZyhmPxTU8w8FFDGAh9A5RiwghMEjZ",
  "key4": "4w18tGfvkj4UE8dbMpv6nwpHCZCamR8H6GdYU7ve7Khz5w52G7WZwbNM5KucRVm7ZKDeRyRB67TxARcbiHCrsy9W",
  "key5": "2yb5zakp7TtmyxTVKe5VmBM7xzvTkU8rGjXt6ek5qQDAYwoRJu328StbD4abCDV9K9Ua2WiUsSTMwXWfXN18vnCA",
  "key6": "28EWqZU5JgbUxhELFRubYfYswx7TCXEjmZevwdDBEYZKLKZXwhvXQTWe7Bc8Mj3rvXDQBh85MskC6j5PruPtCbpJ",
  "key7": "3FvwMLRi8PiSA4rhLV8FAYNpsbKzteaND5tisxokq794cEVoeLsTYJs5dKXwWTQ6rEoWGmgWUS5bF8VKs2p1bXw5",
  "key8": "4ZXh4ud8xYbmQzFC6ddYJxcBpHnYuEU1N7GcyB7Tt8vazjpvDE8FNDAufSJyuUzu5hvHnB5xX8Czv2rnuDfCiVzh",
  "key9": "2xVdvxowGJdrmR1pjHhaoZ7VEhfCF1kyEzvL4Wh1Dk8r1u7Fie2vbkKmXgpAbCsZPkMnXHcuawCUwnHnBdTtxw2i",
  "key10": "W6Mzd2RsyEfp5iYwYLYbmkx7SwUYMYGo6WypJP6jWPioyBHWHiG4BmdGmCpqjJyyAkap5A7i7FcHBRG5asAdxUy",
  "key11": "9tcrFPCsoxM5uVu5ozAR7kEdRE4MKY8RS9uLPMQySxR4QaQVtZ4yo4xwVcTsKstm4oPDwGcwPkyBZ94i8UA6pad",
  "key12": "3ggSX9GvYq45tyvhSPCnWQG2FmWNPCYDLde8eN7Hdu5oAAtxDES5T3XRpvVUmDDcCA8ZAfvWoNK5UdWSNKMrW1zx",
  "key13": "4Q85zX29f6nMBMvGsswGWwLid44qdSonFETdkP2YRS1ADsRc7sYmPucX8KRihiB5mBYXz1a94Q1mRbhkNbiSih6Y",
  "key14": "KiasZwewHNcBG49mbw1DL3rGpHAqH9JUfSGLavvRaQCKp1RuJtVqD89JZvwCJUVckzbuPEjMm8UYtNH84zBHraC",
  "key15": "2xEk3yjeJKtgF1za9cqjArY5zzxFFH66ZgGRrAgrx6RoJLeDCiV2S8G7wMka1TccQfQ9r1Lv8sRTkuxDCeqLhgHr",
  "key16": "3JGiRd89TEBxrqNsrF9LuRkk2GvSLkhTJsicNcHcc9j9t8oLJY9DAvBsww32Xsds8J737xLUR9q4VcVuxptCuwdm",
  "key17": "5ivU2XUhxRJDPTLgsd9M9xyKGo4fPto6uSwChmbMZULVYuVxcazEr6Eh5nNWF7TcatGgwzj4hvKjaoC2GvMrj9SA",
  "key18": "3CvYKa65bjFMStWQxx3UeKdvcfrFoq1SBBrwF4cGpnu4DEecMHfLMxtRrVWsBiFaaGRYEoJsMwdYXPovKHguVXPm",
  "key19": "4sfueyTPDFzi8Y5rpq2xCgmtMTApcAPw8VTHpJ4Vt7DYDagtxGh3Q65aLaqcDgck2XdfmHWGwkRBWt4aBXA3avVB",
  "key20": "3j3SB26geQEJ8fkLKK83WGDqo43EyPAp3MRMmkKETkzKQwLGo9jMS7b5QzHrYbLSnbdzvoGcN97uA3ZDfB6WGHs4",
  "key21": "4TGKHUyiz4vF1nJhDDRu2TgYMHtDtZe8jZzLZwK9xGpL61KicgG9YaBTRUMBrDhPgieAz9bPcnWYmVDNCEmL3h2o",
  "key22": "CsTaExuyEwAuYDbm8NwBXbaGYFdjWM8TypDtQ4B8hnb7moWSpvyY12qGQXtpRgBLbDCMNz2quHe7aH9tvCnRjQm",
  "key23": "4wDo2c7yiufZCu9uTA14nS8sKwQWrfTj1UxrchxWtQVmy1QKxW4hCYvJFdNsodX5ZG8KVHYD63psaibh8uUtG4Vx",
  "key24": "69nU9nTLNRceMZ4ZmT5PA2X9F1w8p2Se35QU9NH1W2imBRMdKHkF1MKSmSyWrh9V6dFHFmRicubQYGiZT9REgwH",
  "key25": "Yc6p3UE1RFthPcJUZAcEvbxjxaD1EhRaS6vgecNp5HBpRdSdRuXoe7mroLuQnXYgbaxEW1Bf9BhKaCDwg81QsjL",
  "key26": "BAVmsjBPygmb3CuQRAhXWt9S5ZEDKVQDrCgzd35HwCS7rbmwPQG7Gy6Wfy3YLBDPe86cBxA5k3KEJV3DXES5XDo",
  "key27": "5RZ4SFjjgnff9yPJnHaMqitnA6mH3CWmZv3bDqeipffWDRCSaUP5sT56Tucr6gFWF2F4yizBWdZcejDyY6uXW9cS",
  "key28": "3kWWR9RB9WcgN35a9iASfhP78E3bDGbpTSbcHP4zJw7BRzfKC6VnH29Xrs8KimwEzGU8W51GqkQLVgvFg1ML6nGU",
  "key29": "4VpSEd77iTyZS2hEc5K1CYXW37hrGntfWwtZJSUXVa36MSVxyhvw69axkEfnHJBvhQ6uP3myLwy4CUMmi6Cs5Gf9",
  "key30": "gunXtgEwi3DNkJPkJ9MXJsizV76LofXU5dpD3QM3q16JFknzLo6c1axTXdGAVnVhL7um3qtq4nAC6coQ2upqmxD",
  "key31": "4fhvh9U2pweNupo51T2TXv9UMfJ89FyUUKNEjAyq38UvHyyC9L5bjW2mi1REbP4RgnjTWZVATp8c3aZnRQUbdxcj",
  "key32": "3jR5b7an4LHz4BJ2Kufgmkcz18ivru4qLLNT48LkwnUnCmayurY4rQm5TmSFzEZCe2aTStF1V9XejzowVKjuuMzx",
  "key33": "hdgyhiK1ydcTWWEVyFvjbJg5CaNkiYV4UcUPwAR8VVrhw3A9Ayn2n75K6toSV6hULoZyeseTjjDzYDEUZ681AqZ",
  "key34": "4TJTvPFKiTeuykmhJ7o5jLZMCvb3NKd92ad9xs4gEwKNuAJigFNrSrNCEA1AYzEg6XPsxJsmzNqRnqXiy2aqvbwQ",
  "key35": "56YyTygcpDDz146ADGPYfwD1ibcXiGYK7tVGH6h1a4YcMKyACB1dJ9RP9VhDfpxwMkh1mkk6f9jLTvQQM57gH9wH",
  "key36": "3SKCo8YCm832bFrpt7usx9bCre8Qk1G33NQi3Pqqi8ZseqFupbXz8x19kiaGnfdY23Zmph68iKwBmpYwQMuQdJxC",
  "key37": "5VdZNB4mduGQoxzDF43YajT7DrT3Hw6oBCQbtEtw6wBMxjpS1UkW9MqEXhabWLtAskbHeUJ5cSSp4hcnUErvXVGC",
  "key38": "3AGHKykNMfS61kFm9ieH9j1Nq5kKLv1d2KeWgRmT892macFicMkX5fwbYWGrYgoCTSGBkLUuDAdBYuURHsr4fqz8",
  "key39": "2QXejhBtJztNhxKMa9RuHLPXwd1yXTXjuLQ8n9dFhZMthgKmKR4Lp1HTSUUyYaiP2qvutrAp6vZvWktr5GXkJmuT",
  "key40": "58AgEqeYiuTGKUvB4t8RjnCD6KKeVPuiK33K77xb3EYaEveBwDvBS3UkTcaTkfkZYuqaAmc3x6Uzeypw39sjpk1Z",
  "key41": "5nhZijPLv6n1AyrKvpWJwEx2Yo6tSfMuZhZpPaWndYqb1LxmNhXcBVuuMusD86JwXg7dzq2bmr33gER7ugiHw7N3",
  "key42": "3Ga6UrGRcUsdSLhPeYAyJdjKGPmCM9rXvBUPiEStbs85oxB6v1PL4WPpubpW75Jo4KJipidEHgqf6wWrni8XUzAW",
  "key43": "3ArnTMSWQbHrsuHRWzeCp6AHSdywMbwH2cJmwBUyA1F6Z3L6Gbh7EExTKGWfqetydAiZdpTCjs7edcsr7vGk58cj",
  "key44": "tbN64k4ztvK9eF8Dzs4tWmf19gsHfRkMW8MroJj1QhrSq6o9fXfLZejS3H7PAaG4UAUGQURuCrVoGVexfYju3JH",
  "key45": "4mY3ZrgjAUqgByFwocFaKZgupQLaSn9mX4PPrwUrCNwJnh4LzKwv7e3i13eMbFVyKperdhLAcT6roMXYB1B5513Z",
  "key46": "3ZZJBwMTooTa1vptUct8T9o2UQsLBHu22A9obzuASgnnwXG863ziaBSk1NxWoHS1spBSma7NLpsRwS43zxEb7AcG",
  "key47": "2ax4yggKGn3RSLLhcXjkoYaYj7TM8jUrVQ3AnUKP2X1wG8mz6MV5R7W37PHnB5WrVL2A5kbpJfPqKFP87mn8EhtG",
  "key48": "5LqZxbfXxuszaADSfCai23Cp79CuB5AjxLKq5XMeiqYkmbQPe39F33uSgF6fQhVGvwTTBQtP6hx8D1pYjeGKsmMx"
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
