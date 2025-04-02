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
    "3L6KAgtRmq64vHvDdQmr66sGpgqMhjA3srwm8PPrRyCRRQ1FA5sa7aqMWhPHuKinJE54VPkR63CV21s4Sc4TTFoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCjrkKDJ7AREcW15G7KuEZPjn3AXkVMRY2Ddrn9zmnVfTUiEqRhKnFU5pqyiU8LfkE4cuYz4kvefpjMKwPgmNHc",
  "key1": "2y9cokuFggh9wpdJcBjMVr9Wnd9H1kgukZe1SEB7PRXERnw51NoStCZhL45bFbtRbCzTv3AxMa22hVJ4P7wZSAzi",
  "key2": "kWG777aQBXfgFzAXWExyGMRaJnacVoZ3SEfvBwGVKdjc4dPPpVrkoUDc2dvHmoheCLLsjRWeiSQCjRKqJmMRhg4",
  "key3": "4WAPrwoNWgNmpTk3JDKTdTebf9Jd7qmJXoaC2duQWL8iUwtqEFi65WWMwrtS72qG3RuZAcRFGu2i3E5oEQubhcCy",
  "key4": "2DUock58E5eoUFxHMMqMoDCC53yfXCcBYcLtbdYgH2V695MtLFskdxmpsfmwtAZrXMie8BUS7t4Xy9D29jyFVQN1",
  "key5": "3Pug5Ywu9o91d17X5WemDoKvLKCTZr85sgdYL9Bgrs5kDE2AtWfFx1hMWjWtxZgDAjqZ26op2kwzkMhr92jv4chd",
  "key6": "4VmAVrb3x3pw5H1QJmQC13Ffe1JfWrtyQkoGYhYKrrKeePHPEhGtmWdknKesAJzJ9rQkeGLeeuyMjQZaX6t8fyMZ",
  "key7": "45uTnUgd3wnnAm8zNY4AaMUdFCVNbxy1g5vnSGk5tWfiJkEcqsqnN7sNUtczySo2CFVYUSbda5WvEVPScjuNF3U",
  "key8": "4ocaSDB7er6hPxtiUrd4tSbvCCtvcxfpHqGEqDj8PAzepAC27EWXu1dBXCvgf81jGcXWJmB9JJK5r2uKwpc5d2FA",
  "key9": "3iV1k1Kd7AZg8aTeoKa4unwtsYTGj1XKFzqrR2ZATHx2EePd1RMDTB3GpNfuS9dw6NauVroFEuQTkABNR84cpTnL",
  "key10": "5iHGY3S3puxVCqXittiLG1Pj7Q72U1nysmTeTZayWB5MoU1NHGLcB7gghncG4vjUrzxXWDFTyrTswghXEQVGucHv",
  "key11": "5Vo2aWtC4DikRU8cd8cyMVgQK83uN5sseVs8eUcmqkEJJYaDEt7EHMCSAfHtMeCP7cQF7ZiUa1YNFNettTyf8YZC",
  "key12": "4xQBpXVok5LeZgf4rBpVWGaMy3VktzrvYsb9p1RGF9GEL5bHss26jZiZSNijkX4EtF5ZzzCka8u4y7i81PLs7eCz",
  "key13": "Cq92jWt894aDwd77TsHR3duAh1Dp9sxifmDdYrif41WgXbfNVXrUL7AQaJ6nh6ba6XpFbe8uCFzH7qSGwWZGZhN",
  "key14": "293wg1KzoP5xE9iGFHaW44UYuFjxSqAb2157E1FkUfPKtotGkytduBG6NVUBeP3iPQ9RP8mv75dipSDSsJYseKzk",
  "key15": "3MJ5k4aGNTaYUoffdWiLGNwEbrnJCgwWMdsxuafVet7R2VNM9fHxSGiE52PFwzsYHqd7DavpebGV1bG3fXg9EAAC",
  "key16": "5KgcS5ynMwytY45m1WoTpXCMG1XNovWB69kKBhR75AY7NsMnAGXFb9K4h98wDomS3M94oKGmM5YrhvGushnA3ssF",
  "key17": "3EnmZ9Kuup3C8RNPqn984cy6KqsJtV92bbdJqYnktkmJRnVqCEPHoRY9a9QB6ofwmJZb9bauEcP4gBLyyx6D4GMb",
  "key18": "3rFaHu1nYuXodDdguBTy1z3Pe6RPA7t1wb9MQ2onzNE5VTEF6GN1uJJgCQ3JsQ9tB84TfdRbNizssQhpaMBMFG7n",
  "key19": "3W2aGxSfpkUEhJ1GBVQqexz1hhrchJVm7k1X4yXkqhFAWwBkzFEqWFs1KCXrMa67nEWV68Zypr7hZfu3aK9or6wZ",
  "key20": "3SKD3wxVwzbDFPyCKZFw1U2RAu9Z9me127Lp2SNfm6q5PsedUbqfXJczFZ7PS4178YdxXFGnVVVraRWwu1x26PBA",
  "key21": "2B2dv64Em7TRyYCZtsLuK8x1K3a4bt137t1PLA4um1wz4RR576VCE1hHPDCQwvBdP6pyshQxWH8TkmcTZ2wJjri7",
  "key22": "5d1QPnVFsPhUgeWZWQ6tmztnjH3aYYxrpVHreycXC9TBanatWcrG2gELYHUvLKBxLbAPMFDxKSFKyCpUxYmUsnMo",
  "key23": "43oVfU5kZexr4DpQjLEBRPdkf9KX5tWitTH28buCPWNZov5z1HkvpEMtm4Y9hQM23QCGgtyRysPRmVEML6ZGWH9D",
  "key24": "3SwN3mmAWcu6hG5L5332idbTvFj3aaN8LwffsXPaWs8gpuW1FXLVa4ZeKYduvsmyWHuBEaSBrNqmQawWMXrGUn1r"
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
