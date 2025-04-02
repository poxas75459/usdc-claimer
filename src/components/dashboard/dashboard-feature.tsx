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
    "5nJXFQ18TNieMSMqoKoW8VcyZyU7FyQSF9H3srbcoo7sz67qcNmBikTxVYBATbLYZsuWEXbUZABT4dxg8SLVg3Wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YUibTDULnB7aubw1hdPSoNR7cU1pYQcjZuvT3TiuxktgHsoRGtmxwWYw9vHSdxnTMLsYLkQnW6HSEufaBuEHrzk",
  "key1": "4oLShqbwpajXV6LSKJ1ae14EEQvxoKZRPcZVKqgTSqSdxe61BRsoP1wQzGtum4YBRBUxfrDPXmQCjisQYHHGBUrQ",
  "key2": "SerE9P521dqWgYj1RvnVBf8WdCG2zRmMhtZVqLFRKo7oYEwGWaqLTH5aQSWQUDtT7ovFScXN265GNwaPfhy3Ckf",
  "key3": "3pManA5ja2EXSPNrhNWMEedyB9p7i9ec5SfFMPay29vrbWTXhS7PiAfDPfevmVcLUAUsSMBRfEjUpfpSiMDuX9gy",
  "key4": "3Qz1j9RtxyT97GthVfhXUZG1ZzWCrgoaeAKna69e5LUjVKKb2pmGJ3Dkxen2Fdwabh8r8zZhwg4MjeWSDPv6uGyc",
  "key5": "4rtJp1LV3gcVUFyEQi8ge5XRqLNyMwrbXX9tamKNYasekKt744uDkHz8ahpdnXhvZHZ2TCEbrtT6VzK6WzsbZTG1",
  "key6": "3T7o4xpLAxQhwtH58xeQKZ8WZpMcEgFReXBcs6B2tnx2FvfVhDsJyeF3aHEDjsMZ8t4thiEHNx68S9zBV277dSsQ",
  "key7": "MHVRh8GG6BB5wMovbKf9jmS1cTpe8QmNCzXwdsAj4Uy7MuNGYJWnZY5AtFL4ijP6JJSDhNSNHmUkB8Zsb3N4wbX",
  "key8": "3ZJ8J72Nx1qe4S9hMed152jgCux6NRmxii6VetG4CEP8ounAU9uHwsEyGTjnmE44QagxAidmpUN8H7JTY1KCw1Pc",
  "key9": "3Zs7aexNNEWMZTmByaypxZs9gfjXaUo4ZHcwCwgRQNx6g7eq2EgaR2SfeZJC6fcVUkKNiABTrQmNjyTuYEWELdb7",
  "key10": "237yb6qJXg3Zthv9m7o4GpFigRdhLjFah8c89hmnDg3nnsSwoKcydQuV97Ju8cVVMMbQArts1BGRvqAyXuWjpSQr",
  "key11": "c1A99te4ojqThHopwgoPyswYbTMjNeEoyQc3SzaESYXkCW7Z18kmiYBiEuVdfXPEAAAMXZwcU29uuJpMFEfWxdn",
  "key12": "5Vnt4hJTweX7nMDvYZc13x5gEj5iFVjg1s472253bkhqPKy6jPhD1dQ2yo1qggNTqdLknqLMimNqNcBM9gcLDJGG",
  "key13": "67C4pM8tHN9UBn2EeoQRxfmQ2is26J7fRmW5ekuL8jSWMrD2rwJZFvGFJsHYg8NhZ4QyKoXdGs1qyXkRMoTxznzM",
  "key14": "2WsvNhwR6LhBRCiMLhCHDKSCpy8FoRLJia4A16QupX4vvFVTDZtojEUZE6ETHjZgWbc5nh5P2i8dAx4rU3FcfVSN",
  "key15": "4qiSgi7ZafPMF1km51xzZwSzmJC7xA6wL1cLyGcm6C8WG59pUzagJ99DzNM2RZsM6NrdM3en3dnA6qkhHa3wC2tw",
  "key16": "4vS6o8sSY7zH1dtYeYrNEUAxV5CD3BjyKdGXhmPx8aFdRHRt8o8XGtvLK8KxpjtJqy48pJQ9bqC7t4ESnC1r7Aby",
  "key17": "4ywpoTNeEUjPJQ4fWN4vBCZswV1eLAtW9jdJQULmW2HJ8Wa5faH66yz4yrCs7yJZBH4cpedA6XsA9bGkPwk2unGJ",
  "key18": "29YEsSFE3LbhCxtNe8PevdsBfmU6G7ABciaeVuKyX19nAPfyh6k6wohnH4Y7araNc6CrWnNVZYfZSYtn22NMiCpC",
  "key19": "4Sr2fHg6SGbdeTdF9jLybj8AiN2WZUUfLG6kp4RNHMQZGHdf6mTAshtZVpRE7o9DP1iswz1nQzFYYdVpGUcQhkXn",
  "key20": "47pw6NwMs3ZVvJQm4s12ZQ9T7Pc8hpiGsLssNvfAMiEgCTHeZsGLC6yYzqatUPsJWG7UuRjiCvGzPpWqzg9f94ru",
  "key21": "5DK7h6ocQAubbBGtLVwJn2reHxTB4gn8jcYjHk9bYJy7GzsLcPCpLETnygBbzZYf4GD6JKgFPKcnL27ymWhM8dJ8",
  "key22": "2Q31wnHpz88uBd96oo471z7NjXXiVrvUg2SXjj59ckrhP4raLEJKHtYawowJTf6wGd2GtnGzvDuDgxcmFma1aNnL",
  "key23": "2DjGVfkF8gKJMSg3PfvEnescUUH2sCuffQ7x1Uztcyf5X7pJmnQUXD6d6CuYiV7FroGV7hhzyGp5HddnqVmuHBEq",
  "key24": "4kCpDmBWeeUVPMnuK9brsQNARGspZBU5K3uw6UTDMeDjKYZsdB43wPBvrUZ1jxFPfRqTrADkPPW1jYN6m9vPnFBf",
  "key25": "3EEeJW6BUeJYJgC7atVmxHhLFGiNgddmAi5EV5AkG78mHogbeBT4wmMr8wPCJXDhDCaiL6jH9UPBX4DdRM5LYVPJ",
  "key26": "1WW1oXLZgmMMFWJQz23tsmAHCmFfkjEZ9DvfAMLmp5ENvVebLJ8CrNrT2YVrGVNmbKMnsKbHxFyerNuxh4E4Fs3",
  "key27": "5CEQgfsrEhLxchy2sWtZXqEQHJegwr2YMSi5CtBcoja9A3fmA4QcQwqCP8Dfyb62BBErJKKtQGJcX6Ms6aUHjc1y",
  "key28": "5hbwrt69VBnL9JYaiM7bRuSSzHMD4EXnVmr9df5CsfaTEa4NSQXvJ5KKqahPYrgVAHzhTKCRMSnGVgC4a2DEcd2H",
  "key29": "5BJAwWLarGFXFGD9S1w7jz2MHrnK4rDBs761jZmvi6XXHkJKdQ1zRfCXwjqbsj99HZTr8U8cGcG4asqdCVWP7pdx",
  "key30": "4AQtnqS67ewZyDnC5zx5o6VoXjR3r98fQ28XwSyLLwxnnTB7XzPkpD1Z6XxaLyuUPBXNY2DrMdtdA84U5fhG1Gfc",
  "key31": "2bEQKnMZJReME1H6Wzkh44bcWgJjMYubYh4ACGsQofHC9jc4eLLAVxWQeebWFUQXv8fakof6dm9erRtT9spN8wss",
  "key32": "5mWhbJ2RsvQqQ96Bf7L8rmZDWfrc19woC2kpDchfaXanWcjLvYMCsaaJ1vLL2KALVf6np6L6KwQQWLhcqNDiQtV1",
  "key33": "4iYE753rtQ3rPkzXd3t5FXPzPP6zDDcQmpaxkpgPEB3GeA372Sbh6tZuD5HMD2FDgXZeT4uwr9997yFbHdftKMUG"
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
