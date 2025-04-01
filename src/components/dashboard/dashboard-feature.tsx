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
    "3k175QezuZ9L5DRobGNchWxn2BCSzrXkNckdjNdY4Ao6TH5kB1YhLuFTVU4xK5YNLAkSFowS45suggQ76wnw3vu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQTJABDz8M8a8XbA5gSdWTF4ZwUoW26SmoEaTxzVedWuECRA2s36qcgHQquookawYZ419XgNu7M97JEEJWqujcz",
  "key1": "3EaVVd9CuzEwDto7tyP9uYCa5rrxwmenbgT1P3ipwbAUY757JTrHGj5M7UJRVBC6ytLZuPfcfLTzRjCrvABAETb6",
  "key2": "4B4qqdYoe3LdpRhGLhuSMjjFCrg1Qe3VvKPxAPAjUwVVDQ9rHS6zrqDRwRNMqsgtEWkxTeqkBancqnQmJthpFLWG",
  "key3": "4S9RFLS1bK9PdftP3Q31DJkPurt1ReefZSM8vtSiGMGvBz81xGF9TNUVENvGsHqSrKBEwzkHFbNC7DhnBHPi1CNH",
  "key4": "5YPop5ckA9jTZ7n2gdoZVc22LuBR4pnJaQif6AiDezzKX9XwhJ8TJ7EQBbs2zVFjSpkJHffgM7wzs5qUW7hEocSv",
  "key5": "2uRvwQbxpJ2FyXQVFHgf8rJdiuEXMsEGuUGqUaj2nFGQMjvJMxwwXou5zLRZBRTWjviMsdgbWdbh9xNmNDud6pvX",
  "key6": "3aE82fqXKPomduVVxL8ZqFXMnFiLQided1iZPhPauSjCHWs2VT8BWHfUeJTzjc7iBxhiGrnYsJXYfyg1Sgtk6mam",
  "key7": "2aqc2xP5QFSkSaoyK3nrGGaQRXYbxBz3r8zgavWrpgLDf35513MVRf3JAWvsfnhDZzmXebsnmKKCg2qpBHfjSyQF",
  "key8": "4KvEtAUnftEepBtf3v3fA54v3WFiu35Ey8VJ23kBsU1tN2ssLvqP27xoFH9aauxHDgpGTtLC4hNXQuaY7QWWQPNs",
  "key9": "5p1vHdczMxr6U5NvYztGAx6pKJAecazGZqWFUEtHNygikJD5MCtdPaMcJCKte8DcQpowYp73mXj9tYG6jjfEDJbr",
  "key10": "3A5dowpf4AQv6s3y5v3x5NoVRiUSdHbB3ZoMaGmJVzzkkqzXMf5gVMuBchLkKQUUSEqYe8qgJHh7QPhfdmdLaXAi",
  "key11": "4mp5YZ5eBdqkSVMQTe3FjuzCLyQTjhNxjCEZH4RagF82FLfW44n5ZQ2HXwHyRNECMzn3JY9KnEgM28EqhZtSF6ME",
  "key12": "4o4vNGMYa6jsn66uc45xHFoGnjRae8ikwN3DY4xZLwyc7aVfVZXXQoZyxtAo95xj4qrWUsU8XzqzABjBgRajaVQq",
  "key13": "4FiWwXog2d7cvDpbxM3p6yezo1ULa9swJQd3cE4pNHJhqqZaF5SBceo1ikPk8JR7pwTzBq5EZbBQ4ghqdCo29LxN",
  "key14": "3hJjFjcXWShMuXAgdjvvGN3W77QkKtJqTvLo42rf9Jas3J1BZ18wpgHxhmoDzKEeeEmKHY7yey5mTh3ZMP5ALWw3",
  "key15": "4gPSNVka5fXDmDjLVAET9koEmTdQ15dSLts3Zcw8jTTdXKxsv8vJFALLhFRUQFtVtWCzG7rAZFw5Ea7XWUHrri69",
  "key16": "5i6ez6udeERhEysMQwuWFmApSxPx6MZRQ146TE3ipTxmDa5t28hEPM64qpaHrZ4KfWjhcNTB58sQJmuSrRqE6h9S",
  "key17": "3LSaxXjzj5iYnnvk7GLrnnM2xNzzySFqFFEZtLG8RrndQSStPNGxn6K4v2pMGGPvrQFnMqoYjKqGb6WemuRq2DRi",
  "key18": "5T9nnvACpfz8oCpqUG9ip2nUo9YA6WKLcivcNd4SFkk6p8Pr3AoEJvZtmEdxwrp53WV5U4Zeyi8TEDW7tovYRow",
  "key19": "53p9Sif9S8t7JyS3bAwHV1pKz5zE8oFWrhvk8rMMNhDXVTRdTiqS6VCuwETbDmNeqosP5KoSBHq8xvLGksPvspsE",
  "key20": "5hoqzTCavMdVHNjbXpLrc87FyFjpB2LvXkJAsDocBk9mtssKJAbQuBYosNztYdWjLVGbFwQzNPBd19WHNg4bsPQR",
  "key21": "3NbTeVTA5chcKFjvX6oCBUoNX9WYAzD6APPaf8uKaFBB59ujwwdweAU8aqnBUdW4HvLPJhTyevU8gT1geNpgtCW",
  "key22": "4RhU9yoXmaephdng4J8JErb27uZt5YrsydqQHub4mF4LdRonEy9fNvgaBoR1CtCjeXP61RyQaBygcJhx3Yzsc6Wx",
  "key23": "44AF8tQA3ZNxSrueufkahtuKSJ7P75kgnQNuQnX5swHXEYNwmA92cia7xfDy4fM9zbBvU1WsmAxkjc38JDa3WwqQ",
  "key24": "2e3YXK8eKdDdZvvynGaZVgd1Wr8NCcjF36WGEDLffQvKwHwAKbBs8zpAu3UC4KHbAwWon22dUCsZT7LTr8qX6nhH",
  "key25": "5MF2hdcEjEYCFxLNvsHLM93X1vDpiAwkp6DYCwKreNdktn7JgtWzP2SttbBi5SwM9zf7qjtovs8njegmWsZVEGJt",
  "key26": "5F5aASXfhEFm6WzpRd1tWSGCUxpdQ9LHwYEbNhp8CJnRf7kyEATiBemzYaHhDpMRpbcvHHg1Rok23zRkMA1duG1s",
  "key27": "3NdvfY36NqrC7q1tVvnJmYaSMAyhWb12sBKRtcYUJpteEsiNHiRzF7YzF8XudDrgkHjidgRscwN3SfGoS1WFgY8t",
  "key28": "wr3UpttUMai5wKdMfLRSMd28xSwpiGbuCpNibL7muBMq8AVb7yofRkstiMNikJPXEjXbtQE9SohFP3haK1UN4VD",
  "key29": "5B1HzsjPauFGUEgtTeD7QztJy5Q89c8UCiDK1qBa3mUzHRriawpyRHj8eEk91wSJK1xpC7tVAHSgrNn1f5ndZTrZ",
  "key30": "4YAbhEHnTqppFNwMxmA9hFDRCjCfMR9aVGJ9MQrn3jgfjpWh9dJHxuj2WU5sxa89DEEzBrHHsuawNwMsbqGvYbtt",
  "key31": "51ud72TKjYQKAdJyzeyD78uRyn7gggaLYQoBHi23jkvViWFjF9LUWeLNQwkBx9HWoGs3XiSSuWRDemwoeDEed1EZ",
  "key32": "417SJFJgBr7dGq7Rywzs28CLkhZXTcodetj12wUBqTYHtNcAk8Qcck7XwWnmUkrrFLei2VB5vkZYZMytpa6h7zX8",
  "key33": "2G7rHqpiyiM6ufopiiuWnxk6oeb52ZWG8Cna1Vsj28GkDocc8untTDEiC2vSkLjgFCLyPijtMsCRCuL4FJA7tqhB",
  "key34": "2r6EiEyXCkptkSg1rauuD5epGiBjKJfAK6kjmXaK4vQiH5kNGTKECCvDMSD4nu5tPYwPuGRJLJ2TER8fLR1Sj63a"
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
