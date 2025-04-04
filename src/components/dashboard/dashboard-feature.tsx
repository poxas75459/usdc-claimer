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
    "TPws7EivUH2ck6u5sxuUPS8eco3xD9SKcYpmQv1uhufrMp4kEJHgPUHsTREsAWVw4uUiXD3yTSZkMcUYCmt8kj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28e1yFXBwHRFQwXhAscvjnVQpBBvyCkmi4wM2Rhw8PrnaXnn67Re8gNSHjdhXWa5NjAbAP7ZjtC6zYmVbXRDBieH",
  "key1": "3NhHX8heh7s2gWTKr4dtMerD8sYMGUukZe2nJ5v7YmmSAtXqmpw7oEr4UaSKECk2dtfa6eAXR9o9MzM1hXZpeDb",
  "key2": "Y6m47WoypdSTQxGKF77SM7FA7xkXgfJZRAT6cav54GQaQKGCZ7n9ckY2okjjk36LU21nSc5jH173n2pvomyVb84",
  "key3": "4gMaji72Zg3DG2QdnMTnbnbFfYWWfUV7i3LzBhrviDWo2njkcMLbXu7HJo8CMc1ihaZEyuC8sQA4EgvJnJBczER7",
  "key4": "5EGnJ54je1xL5zkdYdSFtLrB3boRhmbzMmQ1cENeb4fmpE5bhWttDoXXDjiR8NhuBNCUqN9ydvwSMSQ5KgLk7YTf",
  "key5": "55DAApE8Wuu6CqRnyJJbDPbAEw8Fsqf84fQHLGfbM9627oTf2RZ3r3Q3hFQWqqR9SikZifL7wBKeazsheMKZynAM",
  "key6": "h2taZJtxuJ1pVdZgxpornfVi4HjkW9vCNTuSSTb4vVvZ8ohHefuyPjprqZzjH9wVBp3LSQgirZz1DEVoVBM5u2T",
  "key7": "5HDxf9jycyJBrUGesTv3ScEq9wkve3kHXFNgv1fJEB2MpvKkDthj5XvxHrj8MEmtzT1y2oqw4xK8AnW2n5KREKYh",
  "key8": "bgLRHiNe8UpGaGTkANKzWi5Q21UTH36jWLmvhfGXzvzaiE1uHT4yzaf1jDRkfzH5S29Jj48XvLeanLgZRRAdx7V",
  "key9": "4QSpP8DKSz938MnDweHfRj11Z77uRMrnqVXK9FFp33htkSR4ahJiMfn7f2VXp8TiJvGnokQLVbbpCAQ2fiL1kZ1Q",
  "key10": "2Du4UL69z6sr9Qoja9mS1XypeGnTT92aKsMcmP1AjUAc8wvtNwiwhy8HRYvciUVcc4qPeU1mjnUpnWu5urjwipKt",
  "key11": "4odRDaizJrrnRQZyujYDiU8rcdUEEEXYmTD7T2Mcqpbbc5QYPdYKghrMp31BFNhXCJdeYEKPjb8r3m2Yp6tgB9Yh",
  "key12": "5wKHHfirCjX2V72YcR16az2LK5M9XJcNN6AKPRhAq2Qivfn1FbVFDWQ9ofuLXVgMTE2iCZz9UrvECcTFFs7ZB3y8",
  "key13": "44n8VhjPtvt25K21WZLd3XbWAXdXeQjdfeMuCRERHzmPn9Y7AmiAPXsmpdwGsLADmekyWximyGgxux6nMwfUAir1",
  "key14": "4CAuY7sCbGtaL7jrLF6GXC9df9XyZEDxXtMcEFjKQNzjPsCSCryTcbpA62wseZojVGvigz5nzkW35MHLQs2W4T5f",
  "key15": "5fJq49kT59PdEduKFUMsawqpKb23Kdvz3X1CmyzJ2VpnTt5SumchGdAzUbH1FDUXJ9em6zjwCJ9piuVSUFDraWaN",
  "key16": "bruqsoAKYymGRDKEd7aTXEexkKLKL2h8FtFCytAJJdbwd8woYSEC1iFQSuF4ni1dH14A2SyMfSxV7r6cZEY5dEE",
  "key17": "MQnxwxEUgwgausy35CqVXd2fXrPNzc66a4eRXNQEVPLH1s9XEFeVRg3sfLJeoyqLRriwyVLR25XW6gdNbLHQpnd",
  "key18": "5f9DK8nUrznhDavPtaxW9b914ZZx2XBJ5pXGZa3tFMeoFN4DhAXacbkwRpZ8APo7RszhutjXn6TvNwbNAtFLe3Ed",
  "key19": "66UHLCaoYpXBPTVczWLnY2mowjz2DCVPSDshVNRafjieggrqwstumQq1nwkAD8GpAGjAgykuG4YHuPC5Gzx7HEBE",
  "key20": "5tcmunW1XYDf79mYRXfA5Xz1cBEFMR4P5NwGNTG5XkhtWbjKZnwKTjXEMqCxcm6x7QRqgwc3jpVJVYN2R9LNSopP",
  "key21": "5rrahTEwdipcTRtS38ePqnncfcHjVBqGhbnVX4Ckbtascpwg1QcgAKA3bGoze7rEVkb9U4UeVaQvni8YmzgTjx9F",
  "key22": "2FVDrUGWEmZuN2eikS93i2dnCv8LCeethzhFxeZM2beFqr8V1k4d7daDkLcK1QUXJARfRk3StQXSyR6CL7cVDK2y",
  "key23": "4a4WojM8xL5YU5zKqwR4RcyEbTBChDbsiFmmQY8xY85yKBcMJmUHnXDGKLXEuniZLJuq1kkbRyVQTqnCkPeZHsao",
  "key24": "5EbF2NomcYkERVTdUsR1uACtwL3HZUs2dfwSRt1qeGVz9j7RDCMHayJ7bBhThjnyrpgBJeGDJY7LGNLRoqWs6XZL",
  "key25": "2CxNkjPo87fxghyuyi3iVeWWVAmRdWXjg52b5xBmPJKHxujJaEdSz1497f92jxa8QtY41Lv7A1oB9JNZU8ZBp1YU",
  "key26": "2K4UEaRQGPG6Nmw48q73haN9Hn2DRB6pVghcA2cq9T7WAnUaHHALZ7GKNUc1DRtkNvjpGngk68Phoz7sqpBbxBFa",
  "key27": "3HsVq7DoWir7JCqnuyxTkGNAKxxUE7AKEpeL6FYn8Va8SbCtR2k48a1AdUqs7SF4AFd17dLyKN52qKBUkkrcv7n7",
  "key28": "5hjangrChZF2xaSwMAAejo7E6Ra6Whoorjb9FokPanJaohgcapKqsZL2Cm7xbp7LNrNo3EEixdNoHzze8sPXnKkC",
  "key29": "28gCQhePBtXMzhngY5sNnvGhpa1cnCaJkr4MQ14jQ5wsumJtr7mU1fjx6HySdWuVNRooJ3zeWwRk9yn8BYo5MQDw",
  "key30": "5WMsUA1GLF7j5wY1wMWaE46J9zcG4nu7HUi8cMPMoWpvDCQWZAX9wjKEsGsgCrRaJ3LEQ5oiPTUAgdkjopRKpy96",
  "key31": "3gHS6dKydc3ECUBNGLnaFFWAQjWUmwkLYKYh1xotE3UJD3wKJUH9aBhfSqATqEMr65im53K5yrXzRuiH6qro36WK",
  "key32": "3HgmJ63npv493u7zEkeENV6M5v8CShQMbPt1tmaEwLZaNxffDtHMLMue1drQnFjh4LjrEYanQvbQtuwMtU6h2fiA",
  "key33": "qWAB3A8snHeMH8ceFZ2bjcZenf7a83w2ofrweR7KcTh5RtWHdUxVdteifXdQWnuz4cvC5YCu3UbVhPUKbge7F69",
  "key34": "ZtTyPQLSv3CR5JwdBPiw1aXg2A5gpmFjrxiDw8WkZvnc5raBFUMihMpdFN2NNjayRnRrT6fbf3FaBtEke4kBYcF",
  "key35": "3zE5PKTkzegSoonsApk4aWVmHvdA7FhK35YAEfx12t7JJtW5xa9c9cwkf2J6AcuQxZiuPrfzkXqf6sFDLja8J5M5",
  "key36": "2iFUFDPGTWDRGCgVXQzhvga2DF6JJN5bhJb1ws5CVU6a1AxsJ6GoY2n6dfh2WrTDYwNBJ1mcHZgB4spNFSHESGX4",
  "key37": "39gx2bK3e1ypAnLPUvjXoTjHTXLwWzdkcntu7WKQyKQTdfE1JqagZ74WCE6ZKhovJKRVKXgVgcuLuWKTdHEr6NJk",
  "key38": "V3bs5bZAqQkaoiffbkqC6qs2NAqtnzHPrHpt8YwMjbMGZ8xYpNFMJgXjaNfVYCpbmDz8bCj3J142xBAm6BQFMzZ",
  "key39": "4EkqqGY5atZuDk49SjH7StLfBcsaTA1iEZTCkVX36XDAYXEVxEEte3YJzd13TsAn3Fui8dsrCtNqz6PhoPfxomH3",
  "key40": "MRZB4o5bXhYvaUpaXys7Q6fexQFdz5iYJph1cN6kCNxTS8P19WGYBy4q8RCkigpMn18UMiRa5FGPgvNnnu9MRxt",
  "key41": "3FDUQJbXir4AuoZJxJsT7vvnDBAuW63uviZdNyacibsYCEzw6tvGvRsZo9TtfWhMj2Kys6enJaL6J9rAAWubNWwF",
  "key42": "5XyVEWtd6GznbctwBUf5b5xJg2WDQNxQQ3bhuBPi9GTe7UkCpvxr7C8JTPpaLP4Ggjw6sqJ8s2NvKTTJPcnU4R5w",
  "key43": "1rBtUJRhUnh4hCGAjLdqcf7xjgWRbHZaPHCfNbDZyCzU1RuoUkdaUNfBQWGPnWefaH9DbhotR94287RQk8jfHmQ",
  "key44": "4n9VjtKfDhM5LcXRkkjgZ9psHVHevX18CXvt633MKrTNasTjVSHh4kGQramyzVgdeszwu7mvLkpT1QG4kyMEmvXg"
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
