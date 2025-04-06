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
    "4bnm5cqPue6Wmfeuto5xoXz4KFkq1dKpMfNYAHtvDzJ9joigvVH7ayZMWiHYpp5hsMYLmcv3Qos9UthHcrPgro2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4iceoNCaa6YN9kdcTWGrvS24JKEdxohniJmW3yZYRmwovvNdRDVQvuxyqxQGPe6bLUAJR4RxtZRdFLUzEq3B7y",
  "key1": "4L8qc69Vy7xMtPsUcg3kV2WhV6jXyHz8AraozQmjrbWQEyfFDqzCngXQK5wdDNYbWjCz7piWqYfXp1hGfHEYGoQj",
  "key2": "zUZUJwvPSp2BVssmQ3TffuVEaXvzE7xPvUWnyMnoJKK43PTqrMHqE74GRM5FBfhG4h82QSEPnuJ2XhZxaGtfApS",
  "key3": "5aR28x6osFoV8QAx7U9NPPT7W94rAdkwQ5VpcVvB2Ae5NYoLdvSYJoBb2QQJ9FHFsQFnkN78WaFyKHdzrDiRdSWT",
  "key4": "oMWp21rwoamZw25MqNxTkv6kgTvy6fNSELuwmAcSbugWqmCbcpvhxtYgk1Xy7f5SSjowwLUmjK6LYj3Bqb3vjab",
  "key5": "4NmXvBJx5ZRarRWH3HyDE3gZYPFUfKFKbRC8cRhU4Y4LAJLbpxnYgYurPoL61xXdMRc8AEt16hqA2RKgAphUhbu9",
  "key6": "61if9D9opwBeTBK1bXYQFsk1JMovbQeZTdHZAvGgReRLarGyJizYrH9rTyXfhf1ZBuePpiZ5Q17h9Lt2b99CmQvb",
  "key7": "3CpBjuYDPoaevNczzQ2krGLuTUpiebLKAmL5uxkXGTtaQwrRCkYQ78zBJLbTHybjshnWfu39Go1enM55fGPdkFTj",
  "key8": "uuFbDB1NiLyzoCofSjCvE1dDJuPwPj1GECUVPEF9J4eXnpNqShuAfFTy6NSukJhKsJXcEw5UBqzV6HYP61ENcaL",
  "key9": "Ay2B1EYZ72zku1XKknes5yR44enXN8oeeDe5pJxG6tLqn4Uaeb4uqZR3JCNnEy7TZ87uEgm3LpbmCNY7SLBDUvV",
  "key10": "64YC7YLLBiBbeJSfx1TSmUacdsJfB2Kx7isB1SEeZj7scXnc1uJGBVarN5Txujm6DGiKHBm8Z4oYv5r41r8As17D",
  "key11": "5GznGQYGzVZz7rgNYyk3dizHZ8J2UCMrUxAWRhrCqyofuXYxfy3xGsfYxDcwVXhyXCVLZfHGuYmXewX5P38waXkV",
  "key12": "4Es9TH3kdpgDPw2auTKFYcFt2xZudLFfbRAFAwDN1QgmJZRYR83bkBC5VJbcKW3TRLeg4oiDSooK5PtJkA92dKe4",
  "key13": "4crksu5XF5bBix7ZQrJQJQvmsr43sDXHhqTurKWL5NchEXgrRF92NcaNQq1bPh4fBwatbw2PrEXjdBiw9wzPrnDL",
  "key14": "4hhztTPHQf7nqHR1YKLNJbUBc215CpSVxgKvXqBeMBxNxcE8dyxWHq6Te1qjqs6sspBx3XwQ27bW77uFB1yktje5",
  "key15": "5zJbxa8oW5yJSTG5mzq63thkuyUVEdKaxPTcTJv2i2tYGXD2mQRHNb6QeQR63AFX7h4R15fuvqu7zc54iMeBwK6D",
  "key16": "2KMgxdsBm4uaQ4YpnRtz9DcrfvxeBX6Mnr4xRpUsdBHf483N67ConqjXSx9j3VyevW3m2owpAhMFwzwkkxQm9Gt4",
  "key17": "3zAcQRqNZ4Vhkbun74rMYv8XTe53zkD8b9X4gmLpLDP6kuy6RUvCjgUyqemENQxdNmA9cE9iPJh3d439bRtcd6DE",
  "key18": "8PEsiHYc3Ci5w9LhLGsenKLnpuxaf2CH2nyVqFKJymmPU1vQPs2pKcdtBdnuhgj5wTrFUffVDAJXX6v2gmxoDjH",
  "key19": "3Z9ovnRS7zEyySVkcRzaYcV9AHtpBbLVRhSXVnZ7iP6SS67rZvFpbmQBxsPPNUZcxPMU2qztwKh28EpemptCQcE9",
  "key20": "3MtYyRLjasWqPBmp6kqMuP5mbx5njx4Y6KsGHzGjriS2x8aJwDbFAnmgZkjRPpQ38YBuKpaBBurSfRCKJqPNQRWW",
  "key21": "eZEaDrKevT8HFydrSS2EaKCUiEQhasRDPyouTpZJ14rzjfCG8DyJidZMkTd1kxSMnJrHWTVjJbAezxt2uPP1vnk",
  "key22": "5CxY2XLjtQHcSa9q6aeZkEpPN95PoTecftWpFrxkG97xgUAa5BF4wV68M9a8Nj5cnjYVisNRg38wQvh3j7zspx6Y",
  "key23": "58GMDThLBTJY84u4F1Mm71ffaD5A9HUFsZMGcBZfiJ2yd4691Zb7QM1paoU7Vyhf5YDQbJXqX9M5nXZRxURzViQA",
  "key24": "52wkwjvLDU8jDrFYrJSiZnT9Vrd5gL3YtPSqgvr9foQrvroihmM6p3oZPjPLN2sx5kzmREQzB46HYoQEwzmkRknV",
  "key25": "5L64X7VyvhTpxJfP7q5kesfMA3GGPZtn54KGPcwrvgZXGCyxxxt63p7sGiMgxHkv7uasT4eX4vYq8LBnTQnBMi6r",
  "key26": "3LHkfLZVtbi33Z8XvZyXs8xh8NoFxqpNScjqYfPEEdnr22CLiWC2RWaqvKGcpnzyzS7DeLHHsVnTP39rnCChcAhG"
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
