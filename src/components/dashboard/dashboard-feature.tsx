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
    "63KDdCHmDMi23vGcpcoP9FBm2P9dQr5rY5kc54AZ5JzuT2ncNAseJpZedzg7zsMJrTvjoC1qqtw4xDhDg2ygbuiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qj4HDVDYnofBssyWDiGubEarsHJnesgYZxk9u4446P9hrqCL9rrbf6ZtxRrKA87bbocqDmRAtUijJy78DM3hz9R",
  "key1": "5LarK8iSyVNU4ymPhWyyeiH8GrhHwfKwQzsSosEVmxAAaFaf9hS2EuPG22pJS35Kui7p4vYMpmNFo6Yw1tvWYuno",
  "key2": "3BL68JUhK5TorS8ixwX732eavJxqGshnvTTjWdFu2LF6ia6foGf8YknSKe4Wum4VSRTtGNqYp6NLvfpaErnqwjsD",
  "key3": "2tsTiZcRU5s6GhX5ezKJ8a1i6e8j4xpAxQ5YWNgHfSQBYTM2oMCqQdcWNfddsXn4J7FpNbFX4ytLAQVZd3CcX5gD",
  "key4": "JKWLExde2D13CpoGBjCqVM53NGrYvfoKrpdRnfKrQxJddJskQvXoVMy8eJMB8LpHHqnZ9fgjqpBEWLAE7QTxrCV",
  "key5": "4vW8tEt9Bc2Jpsa2126AwuJwiWEJEmqFCbkgiqW5qvczu513pmjsng1t4JkHEx1CxtAKtZ4D8QBvPcEVPpL5WQSy",
  "key6": "2w1fKJp8hpsUad3sS3TuTB8eKgLhwGSEW7q5b8uwCc7qPBTiJCA3Q9xHC6W7QizMRcXMsFwNvsKMwjmocjQKseUj",
  "key7": "4sW6AMhG7XkmtTiRiLqkSFjRvUagYnTaqu7zKp5JRKdU1Cn86zHpVVxnrLurdmKFzvNNHMGPhqHnEystC9vj7XHK",
  "key8": "4ZNLDLL66ZWsmcs1DiDyfuhFc922xSy1yyXue5mX6rXpwhH3kUiT9YkazE762dpkmLQTGVAH3jEywqXX7CHDN6w1",
  "key9": "44BivDNbzk4Djs9edNNvaRNLxCQGVoJmFRzUth58FSzNpBCC27WFLgYBbcKo3Aw3xhbsYJhgCwhANygmMr96MRGX",
  "key10": "3H7dKWgARYKF7kzaEHRs6G5kcDUGVeUWbZNGwpULHcg1muXvZDPV9dVmgATE6KtYC39HEjP7S4QVcy5BKKMqJA9F",
  "key11": "436PtsjhKAnTrVPBMiCvo8ds7v12YrAgpUkBMxpC2QpGx1Y7Qq9QwhLz2RtZ8hSV4m5sW8eeJp22ig4BsNmnQzQw",
  "key12": "4kukXXBB5JN8HYhfj3JA3RQW5XSg65veekB9PijNKrqhRDJJMZgJ8SAdskP2syW48MMKFybhaDRRem3BVpu6hh95",
  "key13": "LNhSGpa9KrJwap2shpsDe7dYd9HuE7sTbQ91vEyVZeg93AU8FCYcYvJZsPUbthqDQnVHuCKqAYw3eq8uHiyus9k",
  "key14": "AfmGvdMbJHeZ4gzvQN5pWCkQyDfPq1ZVijx9FSdDSNiJPKsZbL2MCa8RWigb3sQJZ8rKWB182DhbdqLgpiA2RGQ",
  "key15": "2qCZjfEtv9jFUh3mpLKyCM3JdKxNJuHX1jUMKWzuxkAHw88Yu3ovtir3HwCgwXAPLwrwAPeGFC7uStfUYE7z6agu",
  "key16": "4ndJBm6sir4SGwz4PpHqebrhjL7Hf6NMjcGvhW2Q7t3vCaT7zm6yHE5KxG5RPrujnmDd3fhQhq3sKxAWSyYZ1VZh",
  "key17": "2JzzM91Ae8y1t49kMoQQeqKKEV6q2YYbGAQp5V5PcstJ8PukQFRUjCEv2c826ETtzv3ksQwhFQHzyyXTZRUq56HU",
  "key18": "16ZMCuWiwZKsX3WrT6eCv78RqtdHk9HWpqTjVonRZddrvH1XTeD7XDX1djbkHAomothHL8HPuxfVNSDk2iHTVf9",
  "key19": "4qT3rdjCs9mCX1oqZ6MErFsZidWHrNupvGTaSdfbJRprVkLHEFSWi4x5ho2a55XJZiJ2g4ihwkSrS9hXGzWJfxGT",
  "key20": "326ddhnMcr4RbstKQD9Po13WD3fG4fZDPj4REYQvQhiYNvB3ZMRJGMcZcrdhfJcn1Hz1CvkxVLthGeFrk1y7DJNJ",
  "key21": "4s2CJqsDeZ5ezJ8Wd6TRHq1wQe1jDW9P3Nf1RbGMRFRotJtYgZP8fpja2JWjohwZJ5WrtrGBWJE8Rfxgq8WZRnae",
  "key22": "4mtXdyBTmKa5sTEeEzxwXptDSa6v2o2bXufMD9TovWLo52w6qZkbx5D5BJHuiZbShLG5UZs7CQw9n4Anih8uVCVV",
  "key23": "4fYPUKZye7Weu1KXbBNL7Vm4DfezpnaY1y1YPyQwtJdF2piirvDxshGhrNnujajS75RoeukTip8SW76idyBgD6F4",
  "key24": "4firz92ohAwfKAkDc5gH8MRdqh7arRQ6CJPXAFFUcpyyk8Pjhc5pXy4PysNwosF4AAKHbi4mFPV3KGmULXn1FsRF",
  "key25": "2sXgA64enrVBHXM4SMtYiRRUfRPNp66DAwsFAybMgwF2sP4FBXbiusJdiDanF87Z25mV3Zc1cj1NeQKvBt6G7nuL"
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
