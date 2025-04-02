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
    "2T4d5vNGnQAs13F1b22hGVL68Ym8BFTnBGD8YL18fZ99TQuRpYtcT5q4xDeLyyZTHNm9SpY5TCmyxLnvA7Pg4ymb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdAi5N7PFrkK6dUrasoYSuFtXEALpeGtfsU1jkf15McLKZm7eq8cfxLi86ovZ9YWiM4UW1XRh7BbdrwfBzSEBSv",
  "key1": "8nvR4TPoHGgvrvbckAohDeSRJLuojJxkXgKpt1L8aTfD5DZZ5Pgxtd2957hgjKd4ebviot4vnR8AYo2e5oETCPE",
  "key2": "2fNWFpPFRkUPsy99Wo58mjHTJYnSfZsRFuyzK7ZLfENKsPoPG71Am2BWCWJfT3WRCXqk4x8xqbs44Vk1Mk4jEwvC",
  "key3": "4jZauGYa9C2GZcMVhw9LFg1ZxP25kFCZBtUoXgMiZtLawUfr54VsoMMj72b2kNnpqDoHnxNx4tUsNt5F8wJXvKrz",
  "key4": "5yTaZR7ieywrcaDj3wzmps9Tkwi5yGKfaGq2FWkv4ModDS1oUzbFgDTMEzAh9MycKCPz3BxMx9ABQkJmHZLivga3",
  "key5": "56YL9x7czNVxPn33VnSjv7MTc6xYXia4oszqQPPv8kn41sJEvKkRNFuFzXb2BiKFA4WtD53dBs1VHHZ3Cu8MSf9f",
  "key6": "2dDpf39ZtvJDQTNQQv7wKfyNidskH8gQjqkEFZWYFYnpmqK1RXJV9Lk3uY9h9RG4RcctgGLqikLvSVXisrZMdiWm",
  "key7": "65osPiXA2DAWeCzJgdGowiDiqmaaAdS1NQDJQ9mYw6EDNS6FKahZksi775L4nDdzq6nCWfn12JQXcWBEYVLFX6gS",
  "key8": "3CSp6Eyxx2W2n1rcfjJoVd2JUYbEzesmC5kVq3qQLZ1oWvUmV6hnZxbEd8N53mBnH87GiFKUk8U3Byn8RnCfjxqw",
  "key9": "5ML4x2XpH2T9FKSBkYP8T4UsRqzMPbAvAjrKExyq6FgR9ru6DitB2wwMQQ5QTRqGQVopyvTDzX7ibXq81NSCtH4S",
  "key10": "5XtYo2ryBZFryAhfqyMigfUF85ZL3d13GGVnLa3n6Uzt7ouZcssYL7FdB7MRMLSkjPRdE9moXDSyR48r4ABhWWEh",
  "key11": "3Yxkq4T7ELRo7DzyabpSJNF45Lreu8GPCkByzn5oywBwep9w851PT8FZEZ3MU1TNwWDY1UXyogNocXGXeaXWCx8B",
  "key12": "5FbvE33YVirvu53ZJXXG3smBztKhgGii6MoopoiWoiUsDubs3D15nD6n6dRWvrWEhkM62Uc6FKk6yF3Vk1gueYZt",
  "key13": "3h8y4T6CuyFJfGcoZd48c17pjtt4mcZGnBctcYg9YmxiQgg69JL2t4dw4BYe1tePnkn2RoQ33hefLAe1fvzDCjnG",
  "key14": "5ECVmcUUo5sVtZ4cyfStfSBJQanW9jjyw43husBMmVjh6eFMjyGEMJXeP99VdvPsDj2HDRFcAq4WT4a59ASyw31H",
  "key15": "3rJxZaxb79zu2UYvP6kdW2DG6cztmPGQtuAQv2JFRBYVdeghHaQLPKDw9bbR1MxcQZznXbetn4nJW1KUs3tsiCJC",
  "key16": "2VDiWVhVFik11Bek5y16BVDokuTbr1m1mCGkfMSHjvvwdfgkRJyNi2GaUE5Jz89ou7gqueQ8z4BwdySP4TYyUypj",
  "key17": "55j3prJKvX5Ejd5vPGgR5t7mL5TeX5XmZKZu1xCiRyJLTbB3hJNreThThqNrxt92MdfXePy96agj1DsnNonDupvb",
  "key18": "5erhCWZLbLH3vyRJrz4mrgCLkb9Ya6s1QriQGmVN6HpDFbAsZDy7Pdk6zXNxDG99zyiorGxXXrEBQZH5gm5pYeJ9",
  "key19": "5WuRsJbeyiupLCuzoDB2sEGMQ7h2HojPSSU5PGRAXmy4CEQhpYjMw8RDGLMpAJ6b1mdTxnEWx9oBMzxT7CKJxye2",
  "key20": "5By8TYVneHv9Z2edDhjWfVhMNJuqTovVRHm2aHfnp3ti73HXzjdLNtshEyGeeeWyAaXEmuGF2TukoVCtgoxz4oSW",
  "key21": "5z5zrTjeiEtYSH9irMADzqnhnZWtfbXdzjdpesaYgs7n5atwXrzX3bKdBuJbmk9wjZNdee9onQXKCbBHZTedaGpb",
  "key22": "4jFwvW3FyApvPhPvwnRKTYzaaYE3yJnb7awLPN9JzGH77AHLAsaVUYiMmT2bNPSRH9Nv8CPdutquohsoAe39fMMF",
  "key23": "28Wwpudr1pFjDjoe3yeFRLG51k2z6sb3F1qCb8AY3d6MQE4L1fZrHdxwiA2QvRcFpZJA9yUAgC5Rkf1iCdNiTGNk",
  "key24": "pyMdccCAxtMc29havNJmWpH6ZWWHNAFP1WZtPMAqKdBYy3yZTurAt75Pyv7ExNoGyxxKQdG7W2gneNekHZSE57J",
  "key25": "5sHW45PDqq7dVkC6mF1fbFMVYDAu5Y42ZgXL6fKZN1CWtjXgsK82jxiN9tYCz8jxEcYmoVznhjXYTwAedbDpLzkK",
  "key26": "2hbYeXG6TC4K9Q2YD6oCchWSYuWpAKxKoFW3HA9jv86NRotFKa3TWgWHyXfUd7DVHrf183oN4Mjn1nmcuUY4JJed",
  "key27": "5qDynQd7bnX952ptRU8W2YDKFvS64V6GcSYTAHRH9am4T8hUAA8a55ycS1W6BoFTBKH7TRUH35Q3z4fkzvyWYH22",
  "key28": "qPuD8K6zJNEa2o9Tryppre5Wfzchqdoexzo7C5XuXzN9T5pMDDz1qUudhZYMD7pVdRdyj3VczYFgU25AepUzLiU",
  "key29": "FKvBh9UYDqAdxSjdNo5DzTnMDGgCYU4gxxM2EzL1g2SXbGkA5X6QcC3qg64VJ27KGtfyHcXxzHuxKoxyVBE3VMZ",
  "key30": "37g3rmr8TJB2T93BxfH6mnhKB7qnvF8Mr9vKPk3qR8JUjAZaAmn8jrAPFh6Pekr79Sz5bJshBqg5C5v8AiXWRzGt",
  "key31": "2jiCJw1vx3YfevGRWu3C1gGNCCU9hWCSi3TZuYTAWr3HtYyKzAjnEwpY8GUithgrNevDHuAFkBtnnKB8vmps29NP",
  "key32": "3qJYEAxX92b6b5t15WfRkMkjYggBaABctiFDrFuwHVpKNfyMHUZB8VJcx9wjPnBvQhTDyN6wfx6Pi3qz3hsuZCgf",
  "key33": "66iwwDbC7VK1LBM4eUe5jFk773r5sv1SrjCuBk1s2u1D8x4iv39BrHXXdSMrJbxjhqu7NFHggZ6q3ZW12aufJqFR",
  "key34": "5TjHnyw8YvBrEAhPFJZX5aRuAWHE6HyaQiM1uc1DiaCpiMX4jhDjxRXsiRKkf4dBzQCZ2j7KAW8yXrSSyyySvLDY",
  "key35": "2VxeQ6pfJ7pSyrF1dFJCxFtyEzNc9a9a5ZegZ2Xw6wCQaKQFtPSFMxbRi2TL5QDXxp6VfEsqBWtTkdq32KRYuJMf",
  "key36": "fjWmCFuubPUfzKk9jrS9mZvSj7nA2pcFwoQhCDgDViTA7W7wdpHw13nr4Q1jT2xoFXLadRedQemtRqP8bDjGJWH",
  "key37": "4GLR8pPr2suwN5QpkrgT2K7E4PoZB6MfrkoeJhbrRRU8qb2DcCEHQy3WFJpdbZWNJhDkUzSqyn9U55Nxo5m7Br57",
  "key38": "4i5H2ZMJ2sPtqFdqHYEiNfjxp3sxpkDBgcGPWAqAbqHAxRSqcsR2CBmJJ6kkYRCeubQxsKwo5jMw5LhFYz96ZXgE",
  "key39": "HPHrmQ7ykFdEq82Yg63UyjMcQGbvnBHRkJzoW1QkMqB6wET7UC9jy6uzSxunUBpMepJFVhDa9a4CPELetdQFJNC",
  "key40": "4izfEksUcSV2RtkaExjBmwpgPFTjEZ574JVZhZzoT4bhtc4xKUXs96PYZpwc325a1QUD3wSCrvMXKWEmrvEX6HZ",
  "key41": "4ZkvqeLwj8PBzssxhEX93XNnvVCeRegunvStBcSAugV6LxxEhJNG3HxEgdpmfMd4rmKxHhHY3mYFM2xJ8ChoiHTV",
  "key42": "3NSjomW3x21yWtVjZV3M6M3MSy77UkFPtr55QRbqPvcRCAXsXcHdfHPXCXkjDKBnb4EbE8sjawSFcjevaBtEVLqx",
  "key43": "63ARvcAXgyB8J4VLQnkpb14UMZMvHSq3SwHoVaQQhskJeHQhkTu56JcK165FiHHUodD9vZRUGnop2mX27DNYt61r",
  "key44": "5cR5nYL1uTNJhX8dCw5WC8cp9HBLi42qpZLQooqKUmR2sQN6hXnWozYAxcBmSzx4JEZfp8vM1j1DZAivbEDHWCH5",
  "key45": "cLPoTHK19rQYtrzJRZ4hPxDEV4BgqUWCNU5xCpztd1KiJcLb7VTiSahHKvWVuXMTjJeg2SctZbijVr2bVEUf816",
  "key46": "3q394o4qdubqDigCkDuQ9MAXaW7HFUPQh2oHEoDPDybdSVvFNogQ9fbveF8wbEsYM1SJqUJKT23vQDrF1bUfu4iE",
  "key47": "3HcJSnrzBDcnU6NAL3LG5uddqDrHAghBcJmuQXtz8igFs78BjgofLNzKD6Ed2mQPw2d5Apycf7pP3cZiWMk4q5X7"
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
