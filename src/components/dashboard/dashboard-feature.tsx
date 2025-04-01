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
    "2oazXuAyERM6hgVK3Ehn7AAHMnBniPQeX5XbpXsDnTAkNs6sFjgFuFcDxru1zR2oqzsQjbWgJ8cxKVnPpGr6hRw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvxp7Hg5KqiVixnibHLBe3QxRNenSy4DnFu1aYMPPizN4PeCEpmVJXVSWNApGwRmAmWcYhWjfW3MbwheU5qLxbE",
  "key1": "5hu7trvb96FpHNkpx9VfBwogoyCtXEyibmZPXppvQLUcRDyTEWVCnpvrHvWQfgjw5VwkZVHNxW9Ke17zGSthtmTS",
  "key2": "5nndg2Be5tfHFJk5uheVg7Uei6WUi1jzLtciqfYMyt6HL9xhvi6gTyxzoh6Y8zUAKoJx7N7wmafirPqzWhCpS6mS",
  "key3": "2Vw8PCGtQArD4xgajKRjmsmqGcCYJvN99bekD86pUDTKS5NKuExzuo4kdregvGXMcj3MiXB3ywx75vXECxsV38be",
  "key4": "3T4tbetFRNuujHck2om3zSpS2S2T46onhGJecvKpJ2nEirq3jkKBvn1eXhXytvFhJTSeN1DszKEqVaJaiktSfCYg",
  "key5": "33LqMQdyNauanXvfucoFDAznZaZmsZM4av1fw6zehHcAkWKrnUEdM1L3CMGk92wHRtqNpk974hyr4XgjyXLZWp9i",
  "key6": "NM3tyM9EPcqmKPSsVx5pZuFEYHRxium4kp8NAjpLtLQiN5zMUaj3VdWP7gv1LYWPhYD4pufqefbeK3CFATd33vT",
  "key7": "5CLMXmvxPFaGAaS4YGxafLtbfXWRFSZ6VXTaBG3yQSWdXAT9q7GyYfJtotnLAwCCGrkyPoUV7BgZUwP4Jvszc8VC",
  "key8": "5DLd1Ykz9sHzAgQfNsAfUCubz9pze242LKUvGQJxX9mC9E81Kfz7SmjaighT6G9o1Gb51RPAfawY7ZgGDsyxTHtP",
  "key9": "KKiAJDAZdHFJDCmrQ2zZWP44JcwZdchk4hh7BRVy13mEimY5D1oQbxUK9sf84S7Z8xra3zxuuLWYu8WSt2VBqVG",
  "key10": "5PNu953j7jgtsg1j4vaZeSoZEy2CprZhE71VLpcQtUqQT59X81vp6EaVLNxSGsbGQQkMb1nPfAoYULiNnFXYce5y",
  "key11": "5DLsP6MVDgzM3pf21PCfffVoKny6jbfw5w8yWEbiSG96oU7Ghbt8kxBwHNpX9tm58jDKQReCUmHqXdPxh8RmBaPN",
  "key12": "3n5DN5PybCGoZKmqj9mkVcKNeeYqGrE9Z2hCV25ePo8GH43fvvnWddE54HA65BUxQVueqmo4UaVBepgFqqCWaVNH",
  "key13": "5b2J9U4DZvbMJKWjBNZYVGGx7vSscncpDviys5T85ZSAVvjFYZsxP5Jza5fhvNgyFu3QPaUyxBFLdBiFhqNxTPe6",
  "key14": "4Td2hUPxLAjprDFtaN25ksKWeroRZQ7QgDgc6kMkU4uDT7X3QoU73M5ku49aL9dUre6jeNHfKMEGQiGUSp57APoG",
  "key15": "p9UT6JfRvWTgQs1SQo3qAXnrZTZFasiSkXcJkgF5e4zfTagbCE7G7tUuk2YrdpCoMPLij28MF3eL4NycHTEJcwB",
  "key16": "5tvPNz4w1oJdprvNFX6EGeguJUXfjk4efAu5W3CWoqDpqgoYKpFEg1ZGjomXHA1hNACfc6tsRLUhmjybBKyLPu4i",
  "key17": "61m4WiEwagXqQE1E333ZbXTjNoh4qToMMi9EiWYofSinHsEjYqS23aaqmwci4eK3sEkSympuiUDBXBJo3WX4TEd4",
  "key18": "4C2sXn7RK56hMwR84BH1DeJEBjL5tD9WKqL3T9j8Ao3uXGJ3KhKU9UsYcUnkveNfAJbvNu7K9UBDbirnHyC8r2CD",
  "key19": "2bSEEezhzwUhhmeohB6mssfiQdgC3gpBK6KmaGXwf1JgHVfBrb5nMd3bjNwTc4XafR1EhY6HrGjhzN7DMaVPB6Gf",
  "key20": "4G7Mmg32PFSUjXxu3GoGFN7YC9YVn6FwMzxkoYok8SSPJ3abvkWcrGhrqrmt1EcLcmJFfRwhQiiH48EoPGAyNUz8",
  "key21": "ZHipEYGdXggC1FTJMzfpy9T891RtrSStakkzk9aykb8RwBP4rMKVX4kFAVMkgG1uvvBGga3tYxw4dPhMampfvos",
  "key22": "3AWi3qbU65RkwmriMaByiPwR8vpMi42GepMZeFYC2P6Js6b9BJxBwtew7vzL2vZrqAXBDvj1aejznv5ngQk4ZrS2",
  "key23": "gqJuwnumCy6nisJv7x8TAmvBJiUgFVtyxpzc8V36Np5kjAwWcFCDpPv4k4CR1mLdEUEHPfXTxwczSkaFPfAH7sX",
  "key24": "2MvzdyMfbhqH1qDwhx5U1rkCQyEZkgJqSfzWfqJTdJyuJ6MVY2oLSBfVPTRC5337kBWddZ3UeQYPqmqzTQYLfkzF",
  "key25": "DozwcnPmDkxktQ2FvZoTriPSw7FxjtcaWvQrDxRAP5H6TBArtSJmeyQc1tzdAe9FmFAYXMcBR48psKTA7popnWA",
  "key26": "2B73dqVnWrPCk5d4imRJr5xD6WxvAtw8jSLfoRXzUxGc7XbSYonk1Fom7A7yJAsvqocpxe2ZbwRUquJRYypACyQC",
  "key27": "2ytPx7y6P36nuGcxquwo5LYAfM99YjxjgNhk7snmtNEAh3mNmzm4ZSWGbBpJ9QUHySpEzJ1ZtxSaatLEy62vu1U3",
  "key28": "5BCz5WQKmVnvg5YfWnPAEiH44EwRxKN7iMYmhRYsVrvTK1VUmTXuqDvwkF8ahoRiMM62N3XeXy4GtQ44sRx2kHEf",
  "key29": "3oMRiKuj2CpaVwVQhpocFxfRFJfq7u17KJtgf44GAaL9tW4WS4RvqahuuaU5jDnopZ7TwWwijPatb4z742JUPr2c",
  "key30": "3LGABtBRTTuKonMQPjvSVPi9vDv84DThzrJLMTrNZaaD4cVCsWScQzPLVbNFCKykjDpPwU5via83YQ982u7Vnpf9",
  "key31": "5j17hFpzB95BwTtwrPqRP7yrAehKSW4g9H9TKHeiZS7VyFFeHkTnqsP19ddQBaBusb6c1r5594JvJ2pdowteoPbN",
  "key32": "Lkk6oQ7wS28jLrJ1JZWwbwCuhGTcP73EmSs5p8ZGN1q1ATgde7gknHP6XnYAPJMd4MT9yCg2n2kzAAvpZJtEvgb",
  "key33": "2gykPcwYzVNJ77DX9w82rBiQfEKa2KwFtJUFPdhGm3gckHaNF6s4fBwNajZufGx9EyKctrs6VwFkZZKW5gFRHs7W",
  "key34": "5DDxogKnubHhZjGtQAx1GTwUQnjuzTEJZPvoLPDmLSLTs8aSRBS7DEyDFK3byVbwc1SFrUA8b6gunSpp2i92CTMy",
  "key35": "2TbxbxfwgKZizYUrf8LyBgZijjn3Gwm4JtkUPSa3LTyP8qXNCiGD8htpGz2SnhiV2qjndQ4FfTRRzwX2nFKGWZPt",
  "key36": "2ZrE1GJgLoHyV27yy5A29SwjnLaeN8u6V4YB9xAFG2Y6zxCrL3VNKnCpvkvDMxfDLZcjbUFbi1aZnm9vrx3k1nLP",
  "key37": "5vZPLGHqyWSFssGypjmRsVdTXZnyWJpCSdDiErvxvn2P3ZDxS2npuXRyXnPxP6WrdbnRJdfGAcr9wCmueQtKrbZg",
  "key38": "HqN6FQ9vhJqQ6jvhZRdFQ99SjwvYnii2AEvzncksezbj9zStQdELCnpBMisfZEL3UfRXPPgPgervQNSG7AsQkRS",
  "key39": "3bcFuzFhqgGwhLw1VdBzSidMV4eScKPLyRGKUJM9WP2641Tx9MUR1ngdmXGwqPPmjDcdDgNwvQFGYVVVLrfh2XWp",
  "key40": "4dATXCX33TmEKP2biwhVWRNmcU5SzaHrFAgPrGJU3dhjydao2uwJcFZ4XKnW1JbQ5BSVVUQ7uqrdwuQFZTwpNewx",
  "key41": "5kwDADy8aCXcDAMX1V1owxwKDTKYB9jpEjAcdQQR55Dsf7PWvNfpLkESDZ8ULszdg3ABtfDMGj4BpZbJ9nqMEULE"
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
