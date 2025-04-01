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
    "5W81X5z8iks61ALyp3Ud9Hr8gfv8sSZz7Y6Y9GX45NNHVKz4iJcxWkMsaNhEM8u1y956GcUQJeNUYizbd8o3dBaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dAut29YEjiyuvCWnjwz1cP6A1spDJcKuULXfcsuqEYupsmyCUisWxBmPdAA9AkZNGuTtnSHXY3uxCc74E5xzAD",
  "key1": "4RgC7P14moLfr1hhYxEPs7yFPa7Uban2PLR985Hmrj4fgsXMyFHB3N8HgT2WGoZEQiH31AvgsTYigG3hmXjtDXVv",
  "key2": "59bMk9UL39qgEmW2n4QmP9H3inPCHiq6VDUUuwqtdr7teH5yLKBCqA5P561VJmuS84XANEt6ZqNau5kXKALukaXe",
  "key3": "2zFS2mLC5ysCTwp5HN9hCQ7YvcR2hy5pBUPWWNb8jSaursaSUFbQTbyXgRCSzLWpwLG3hcgCafE9JVB9x5G6dTCp",
  "key4": "2EU4mfHx2yKA7AuGmYYBjPYetUvEbaoYp54Gptu5R6Sxe4YmEaH5xCsLzh4HHAxAGdLydE5YAjfeo45twQXTCmUN",
  "key5": "E8bTTVq9kJP9ggNKnTqpXLs7SVKstQqB9Le71hc5rtFiw14sKN92d48Wp7P52zRDV7qKxVzfE9U5ZaLgKzKH33M",
  "key6": "4gPdudx8hKxCvg8X5gV9bHsubzY9wwEuQLoXGBt2iZiX1njcWUe8Uqz6W8RE35nTiBWPb4k6v4iDRdUmfEW2E4M8",
  "key7": "5aL8x8pEER4HvVfpj2pDJBj61ys3iSkKwCaQ3kPC81yJ8Cev7yhT2gzD9k6Gp1fwNNX4Kizs4V3T3AvaGF81oRwV",
  "key8": "5GRRMQjPQdhipmKegYasVDXBsyzTEW5QSTfHrvqsnD866x6mpubkoxivKM287X9dmn8s8mt8BS9MECYWMkQRwuB1",
  "key9": "maAV9w5SbyGUsTScH9JSQY3sMzhfZhisdGvXX5dH6PFXMqyrFWLs199ATg5Fse6QQVFRqVUcYB2R2votkQW9TPK",
  "key10": "3KbZV7E1LLKFQPpgV3xkCvn9SGN4VdR41AqVMfVCbCZEKiVgVrHJTGQv34Yra279oWzcqKqHDcR9gbiy4Mqwv8mj",
  "key11": "2hohoBMEBqVD3kGTWJq2UtukEfcPa7kdU8awttbpz2Rrjhhnto1sbHudm7uQcDRNGwDGGinFmJMpqt4JDwxKRdSA",
  "key12": "5jhpRp8hLBQ1S62M4nmPwNiiH8aFq7sxsDQXfzb62DcAnu6hWnrbAZP6nUzcvEcgF7sDLrcUAH86Y9RvyMiufD8c",
  "key13": "A5e75AUCfRK98XEqMgmnUALTG851CFaLfV4cpTzZaRH1ixt6yqGofFXzY5HmndKa4CyeqFfrAV9tHeJ9eeaDFH5",
  "key14": "5Z6ieatBAdDALTM9evHsps3zRkmpTw71526ArZeyrYo4rwk7PDy5KmxWwQPa7MinFsw1fgUD9uN5sEk16rZn3zXc",
  "key15": "2gPj9grrZs79AK25YPC2ZS6A2WPNXQZbA4JcttPUGGvts9PtLwfpkp1xnVmDrvLihHeE5HQPnfkr9H678giEnGwm",
  "key16": "4Rbug6od46dMkLjXC5QQm57V2QDnjK2zBTorwBGPW5bi61EJKC1X7qieWf5fAfeMMiCn1GyxTRs9zmcTs4S4nhnn",
  "key17": "a2Tq7snWGo6YB923y97eov14ebMnDyYZEETaHu3oSJRm39YozzFUQXbWgNj4Kd6Uw3koE3Tt1bUk4WWwTakm6v6",
  "key18": "3faXQndm8wbfErt5iX96EFVFuHXh5aUUMNkkeNWD7XwhxcPC7z9fSGi4zHwzQL8msKF4YF47YyzdoUAPqVRsFAv8",
  "key19": "2LPaZTgvtgjh3DQGScvUektfGaoqPoaZE34oiAbDarLJtB5SJ4gQG3agmvM1znZiKdyEDftfDrt1AqDMJed7zPcV",
  "key20": "3gHDPJXsxoikGf7UJpmRc3gcnDhkc6CryLDznRMqVwvmvJLAtJs65hKzXPd45sjawRRDdUsLjreQVskodENwMZLD",
  "key21": "7ruqGJLR2aB4HMEjiAgGbPZjp4zqz9BwtUr7PueRu2QB8Pp3vaj5M1hHqph4x2f37HP8vtZoXF5iiwqWpsRPPAU",
  "key22": "3HpoMxmsT1Jgm3YdnkbzpcKTz2njswpqgjCyZdu4tCbzWqaWhvnY8vpdjX9nKqBsMVW9AxPsGsQ2omN9PhKQoJmh",
  "key23": "3AwYBbKtmuvfqWrsDG4d4iwsJFnJDjfZpJYwLiUC7fkdS2M3hrXUUUpiUWENdrHJgZWwMmUQGxNpudYiaZXSviW3",
  "key24": "34psVAMyrDMyudbjibm9VzDViWDNhKTk6Xpz3MLM8HrivcPKSt2qKByzcYaB1arptbzgKHG8zAycS8tk2Dq11p6A",
  "key25": "3C9fRkr3Ned59KmSkR4XUVAyCwvGgdq2YoRttT6yqDXNdV3U8v58hpdbWSuYz6Qs3DbadiTM1FNg1YV3hUF6AZkX",
  "key26": "2sAU3qSim3UvAzrTDYc7CTU2iWEJFTkV9ouLxQDEbFsmpTZyMLiLwfaW4XSLGaf8WUGAj5iurJJpGWJPuq6aZw32",
  "key27": "54j7xKDwurrDnkGmZ7v2otvZBS8cCfgbCYXQLvJSBU3NYGeHVVtDk1uFcGt99rWcYv9TMAEa3j9MPTJX3TkzKoQC",
  "key28": "4sMVMZcEkBNmvpL6dupuj6JrRwxSR4jzMvdnjhWvfK9onpe5WeYD8HNAUVZRPYb9uAAtjFXKjh27m453MkBBv1EG"
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
