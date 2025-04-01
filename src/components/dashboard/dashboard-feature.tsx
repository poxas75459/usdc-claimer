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
    "5tHjkTEfA5JmW7Gh6E6yoym3dMCbJhaB8CnqwzopuJarhqCpqdGCpwRe3cTn1m42km91Yvo7S7M5p5WyinbypiGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43T1sQ5AdXK7iswxBA7hyXmwBWEEMj65ub6Y466oU9YuJyDwy1yyog7zHL56jDknmH3ADvTJUVRGkRNrEKGnGffT",
  "key1": "oFvuMwd1ksrAv74icyj2ZYQs62VSThBj1s4U8P5SDQb4ArKKximRasiVzqUDujFFfFCveVZ1XAZpAp5PWW7Z3P4",
  "key2": "5ceDZowUZ9xFWux4N1EkgMffKfvuWZPSYKcXdjegM79oEXdEAJeqGwFscaQUrHhZQb9voGcwBn2K9jLJamZ6Upor",
  "key3": "3Xi6iiKSM9HPSdYYLJGwMFBcwDKZywZvaYGWNT4FEoxYy3dBWsFBeB6GE31TF5iCYMAASG4ffZxjU6GoWHLGrg6F",
  "key4": "2Q3xE9gihp4QGKcieqocNyHM2Z9ohPJeHbCqTLw9KDw5NGFaD4gSmUJYMbHzcdyRYNtjVR3mGZmkVjsBpiuv2tDb",
  "key5": "5u1VavAmhw4t59TWicWRi3YLkRhzyhGinuxcsvF4u46qvW1GmLTHs4sbVqUtzqPQu4cpgtKcCRpQNUGFoQm54bEE",
  "key6": "EKX3krPTyFjPnHsACVC7amEw5hWFQtgANZyZfR3bSU5zEBRiiL9s9yQX3x98oEddt5LZPxJwFNvFCQjM2AkAXkc",
  "key7": "4b64EUvZneQBMYWdsq55qUqromGpriHFjgrVJEPc3kVGh7YBbY1Enhc2rHeHLmwwnqwDdUbcpHJ8Yg7qwJrtPERc",
  "key8": "MHySfyuKxmDmmwZG8PLWKUUC61g4jiuT7mxTNPMM4LQ4TtcZdf1zrqEZCYZHvJEo9gVQmmnqF3jbDtac8ei2H2A",
  "key9": "2vtoHsvaxUnPzT97VBBiqQjYGfvqp3TYaJ9mFFeRgDGbimd1HHz6jaUTMRhGYr7hgPhvWw3eJ2syEkuP6GyKhSWP",
  "key10": "3vYCEexPaYznwc7cKZAi5mwDLwxYh2S3GMY1FLnu55h1CQQBATkWdXTpBF4uc2XZUWU9DnZfQFEtngAzE8RqoLh7",
  "key11": "KRQAY16ZgxkMbkhhrBGFjXxpY8JzPYPtzGXAuTPdoRwLKuwrUdVDjDjvP4krtw18uEQSF7gQ9TYcNG81dUw61hA",
  "key12": "2e5UBrJcR3QCxB3c8kQBpCTW15RhtPuubrSkUt697n1QtBuK2drT367zqsB26FAV8evuvbpR91Pnpbrd6fGcu6W3",
  "key13": "2pVdPZoRSzZBjV4XZbgz3PdTXscBJkp3evcDmWS4q61fYuyzEVxtTrHuCUVvSLmM56wtqUWn9hAhUa1uJymkx8s3",
  "key14": "5LwK46aHFoa2A8qfh9p2n78EGiWxpivQCzyyEPp3CCPL7kykF9bh69RwJC21PBEMizEkpqn6EXzcC8Maeheygjza",
  "key15": "62jVkfqdEtiBS43TABJTT71XMpsUBxiPXphW4kJULSjAqgygxbqhhFRiyZQkQwzANNbb5uU7vmvujVLsSjkxFFhJ",
  "key16": "2A1mjF4hb8jpARXhdQ64GXGACKVp7UP8YHaU7LBJmXZiTmtNuqGF7HAtcyM2G7XoiEZ7azG1KtXEiZxbYw69ErEi",
  "key17": "2tZn75WxEpANmDMEgoAoDbUmb4SdgL1QmLLLfVLPSdYqHv3x1eYNfQ1gijB9vyMCn6GSNjQKPzCEpm7wrVot6rsJ",
  "key18": "389m2nMoBF87qG1zyg717gnB3E1Aojc1aMxVMcGo83G7HSkh8DuaeZW4yfdL5WApYxFVLFcot56qu5VMySweVK9A",
  "key19": "itFG6od8qH27RT6tX94btRk8cQJXaDK7hHQQpsYHqg5c3HXpx9Rczc4E7ucwu8WagzBrJsmNqok5gFWWhjra3C4",
  "key20": "4pWYeYdfV59iYCQxmcgkGr8zS4sf5AiC1RHSrCAohFSoNu5yC359MP9LcVSRkqUXNwJ3qrPsqvgLbvQ3GfV7hhA1",
  "key21": "u6bQnMFzENTDgpNRMVXW93sK4GgmoUBiWByPA5LHsiN7BWgtvZ1QmcQXSw7pj9wbEfv2cKtDRN3TdHT97JMh6pj",
  "key22": "4mZCzTtozwNSP5a6QxB7r96kv2sqoU3z2tExc8c59FMWrX93ngUXADmMZhR1qNHrLpZH41gANhJ99yevwF5uZSqy",
  "key23": "5aS1K3jCGH2YSTL66owmr5tKb2yvq2DHc8zce675EszRwzm8zZi9YiDZ8dEmghS6wMn6FmbcVvG3zp91Vzjds1SC",
  "key24": "5uBvDRdcqagcJFnqabp2kYSCGkK37eKTWRrjsFHchbJ4WF36dbySjpsbnco7yQXzGngDTBXbZugGWqozF6fXLa6W",
  "key25": "3oPMG5PM6McANtt6u5BiP8sRiqs3ErH9B2nhAG9av1Zvi4jXS5U6Pas2bx3iHJnaJdsNRB3aRBJ85qu3KwnSMxih",
  "key26": "3VoXffiWRuZurPhpXd3muqat31mxGBw5oTDXtFfk6VZKSdpgs6WdcCVAKvYHVmy9rrh8XMvyWsK7zNkgVJft5Y2s",
  "key27": "59sCoUqXHSEqXbZfp8Sb7aqRBZQWemGT69hmPhasHnV7mbE1SXKp1Wm98iCm4Rwz5SrqQMv4SX11mNjZj1QNzbQL",
  "key28": "2HCWuZrEyvsS5pDuevvgCv7E6udSpfZukJHNeCUMwYK5c4WRw6e3QRUrpr5xs9F4H5EQjhzdHBF8snvw7kA7PGKi",
  "key29": "4M56J3EKgstUWAc7ozAo3cjwcrwTDD2p4TXzYzJ1BbcdEKJ9QfEsEy2po6pR2DUknHwECy4T7r1fFfrPoCpwh4VZ",
  "key30": "T1jkHdNkZzGoBtBE7S8NoVWQWLJKmFhf4ThEBNZyAmrhGxaSqWsTJd3PHA7SW7ScnUmnzkkKBz2WqHrcPFKK5ZW",
  "key31": "3XMMxxAbRqcxo9cnF5iugTUwaoqTCe65TfebgnUcZroi2gLkpuiV2refVpabApmt3asf37qHFXwDTKidf4Um4Hnn",
  "key32": "3cT5cd1FgmBMELSoXZT8LrKzF6MeXoXeDwh3tVwZLhmYAPnHXiuE4PLo9G9XzvC96oMU6MRPk5abH6qGLwajqABu",
  "key33": "2VLce16JaidiA3NFvGp2Nu5iiivdV8DHhyhdsJqE3JHHpVnRaGYHoyvEoy4b7SWqrXTteyRFMuEP1uWtduuzPG8t",
  "key34": "3x7sMvvkQDxS9mSM2raFGeSdFripNikjYqG8wE4p87M9FTzPY5zsTRmuoEDQeZPgSTYgskRPusWr4TiuXm8mdphT",
  "key35": "J5KyqsXkwooYnbXCvfc5ozqoH72Ci81opaMMwxydTpsME7MBJiXpvwpPYSW5aCYKX6D18ys7xouTQfeT1vRfgqQ",
  "key36": "45Hb3fZHZDVAgWG2mL5mrKSandFh6XiTwNuSievwTFtw13VBqeHt3z8TH1bn2zsVr3VYf9s4NSwXVvBVn6ePJcDu"
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
