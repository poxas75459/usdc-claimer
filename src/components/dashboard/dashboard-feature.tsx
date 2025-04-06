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
    "5QWaiha3iewGm4AQ1AW3anx4y6LjB6x1gGMjgnCsCaHT1KxZQUSVpi8EpgnCqxKuQGK2EcXuf6uX4kA4bXjrAmjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FJcQ6oMR7ciGYvxW1xfveRd6gVon1SFxwyAW7Wr25NwPu1eU6qWFotXgHooUaQdr4ueCUPs76BdpaSLvo2SfMc4",
  "key1": "3APgiykLudWepsNVCxHQ5CzptC6LeVmkR5fYx3JjPUCU7NNzzDBTbodJFa7nuUgwPg2TMSgHNKTVeqma5QBGaeCh",
  "key2": "3SXvxbUC7tPqTjC3twL3cNqeGzJWaRgdb4SgHhmUqxb1sBzFVzw519EsYtF6BvoEYXQPCLF6sghFuNEyVggkacQ9",
  "key3": "3ymestdrEyb3Uahv7qrGCgbSnEv88vyKv5y8QxawixyJZJ1yzwkAd8mCtExtvbPwZeQykFkR1Loa9xyqYboPKCqf",
  "key4": "2dwo14rmEYKupMNjbTd9VzLqNSTDutGWsaLbBeLjbn2sRhWXMMEUbUPYaWSTz998Vk6f2KS8mUAMkeKSV1kUp1zz",
  "key5": "4C8QVzrLFHZE1rbfy7FGD3q8RJ2CoGSEFNtX3A4J6NLwEdaFYXWUdaZpqMAvD6Ri44pgC8gyrKYNhJaQwd3csVZS",
  "key6": "3LtD1AfvrdeCuiYfp4rthD8bobUeiJKTwRaEPQiR8RSqCido4kWbZyLNyTxkzaDHKkQHpLGoCb3RmU7NrzSMR1Zh",
  "key7": "3seC3i1ZFFTJqu9FJEq7aayHpx9CPKXvxW4xYgi1mTkLSwezo3a6NYNhoBpWhxxUUvaSQ7iJMCoCFcB7VXGNv9R",
  "key8": "5hXV9TX4BQr3EJ6BPbMwDzWV7fUi3ub8Wkr3WqatFTLngo3HXykNWSdb8kWhGNPQUqoK1rDEGp234cckH8qJfcGc",
  "key9": "xFjsUeCgHT65HYc3gsz5x3uMtvVURFmWtZe68NUUxPMWBieXeRRgekBzpSPm3dCixfUJDM9M1tf27mrnMCVZbTE",
  "key10": "wVDwQTU6Ww4KVW6Ey3pSacDpEKhrz6R7iwBPgSMxMUauXd2ktRRtW9Ma2Jk6F1FSCF24MqEchtxNF8QhgsLmcFR",
  "key11": "5jL3GEhu8ivJ1Cn1XRLZunQyMqTofGY8eSViEAW9K4ESyCbhduppuUXbWT4qcDavfV3JrMgxdknzxqgyqX377L2b",
  "key12": "2phq9aRmZJe5uVpAPrKAZGdXAEERbYZDK8xWqHLrAkjjkDkJ9bJejo2riqHyBecN2V5MEBXSRvuXyAXYo9zGyU2o",
  "key13": "22CBgEZmT7FtdDuaFaYHRYJnG6cN5SPktCp3eVrLKPN5cM29L149fpAMz7Y88gmvsCMA5tiEguvKvdbRPwDk5Duq",
  "key14": "66bU38CfBh19u3XESdrGkHT3Hq3PLJjFLHZu5GuJoXTYtQvAozy9vdG4zR56YXuh2mHZnzT9axuHLKRYBMutHuQQ",
  "key15": "5aVsJsb4HFmEGD8WYzs6FuZLD9NYtF4syttKy9jdNrwBxpoo48fECF2Vx8aQkVt4bTPK6Krxi21zoixkcmptFmGW",
  "key16": "5ukMkUaNJMjLyi7sM4axM4R86CVFoQypCC5SZRmF7kVivAu6wYg54BbhM45baiUgM8UhyCKx7ULHFgyZxS1QKoMN",
  "key17": "58k8G1PoYk8ViKGf5GtpE7XH5L27AuUEqMWi5D3wcgJZhr5X5nep2t9DE46Kx7ph4RXPgwrsrkK1SRaeb9AZwfkq",
  "key18": "25u8wgVV2idUcy2VGc2qKxFLJuc97DTkX9b6TkqS2b2b82d5BpNKZFvSokk1jCjRAVKosTQAtwKQu5Cm4ugbf5Ux",
  "key19": "3nG5VoHrYbCxRSBnyzexqiQL5bW6KDxzii48ugEektPAdP4zCV1PGmrEGMUAJY1cHwVkztyRzaj2SL9T6jLX3Fhe",
  "key20": "22epRhkmfH97kWCLXQh5hES681P5qGds2LDSein3ZGkntBAeYTeENV8fK68HzaD4kHv3P2HPiuc22g2iBBYcoreG",
  "key21": "z15copPTSSZYGMvuYWCgJbvELJCfqVpH3fDWkvLmVNRtTv5arVnHW9c9zyJxeynyENagrhPzyuJngoBUq784Rz7",
  "key22": "4Vc5ZFYJfNDpnTTQeJVh4YtyTAScGauvK9KWaBUr9KMwFwu96kj8SRzZxkaUCFHw5eAe7EaWpUBkJkLSn2hiYtdV",
  "key23": "3ay2zPUFWK2QzfQTfFsEj79fewg5nYjUQPCrRNjmzq555rpgoVgFuqSLgyYtJiSsFJq55R6ZcRjirKZz73bzE9Cq",
  "key24": "4gLnbSZwmA8n8gwzEo65KJ8HiBSHZ4XbeLnM8GJ67y1QRBy8pCsjjwMZU45rAVMQ4ipk8xgUjwty6JKKN9roS3rc",
  "key25": "2TzE89aLbTJySTqs4qsLZrT9ifnpy2xwo9qaRKNBU9s1xVfdDyD3MwMAMuFzNPWhQTKwb5KkQpjm9MrB5MZsTjLY",
  "key26": "nRRMiG3BKRb9U3w8FzHacDmSkzzS8HHWJgGdLH6sappFpqyoiBk4NK1XBc7cLJeg36ByifQhgkRC335doQN9BSF",
  "key27": "2Bvge5UgP6E3WhDzhKoxPFd3PjueqRMNj5tTCxao7pqSUt8vovBtk5gdGgNcYngv7a9ZvimFJRP21udaiRhx22c4",
  "key28": "2ZhsxEagGU4sTL9ZXkmRqqxCt9QwMaX39kbfE1d3ejbMfnjiVQL2SHhmLpyK6qtyAaKP3f8zT4UyrMdz59Ge9GKc",
  "key29": "3mJX5feU7nbJUQBUHJB2aZQa2yVFdxA7Ke6tz2aHMxzNVR3D3B17bcRUYTp8Gff6B7T6QmgVkaMkVUP6MgnGcuD7",
  "key30": "5eATd4dKCoQ8mpy6mHTh87PeDuLoTy6qxoJrejfG7ApSbnfqv7rTxuDnsEzYwJ9u11XNfr6NudBXCtpVJeC44WHs",
  "key31": "MaHpQ2UNHtqWJ6knpSjeRvcYbcsud98sqnSiYtvik7P5q3bqZQkUAM13wRHiXZf5pXW6RZxmah5EX19LwUKkeyU"
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
