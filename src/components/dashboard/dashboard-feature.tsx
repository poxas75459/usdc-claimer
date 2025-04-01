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
    "4edwdahK3M55rgxKm3RzCCoLar9YoiMu4FENyC7J5hAtpVnPRw2xnDHAY6xnZ3tfHV4B7Q6awM8sMyiqujMhPJ1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S3CAn9wfCQvjni8NFenYRWZ4wbaP5A46juRjnK9ksUtkdF8qRy2PEGjGn93h1AAGdbC4BFwhtdK8pp1spZrbodX",
  "key1": "hBgrLL61cQUCmMFqEYH3SefGNQGNTSBHmGgVqoDtEBuKofh488bzAQndMrcH4A4zdhn1s4Fcmiu72BadwucPCov",
  "key2": "hvmtvC7K5s5U6G9E3jjSggyFEDojFUHtnEVNxVnHiTiVBbfV7jRAVkQPk4uTBwmtLCLfvfuCPTFtWXsPReAn3Ef",
  "key3": "55xKzMb6jzBJM8DVDFqN9Hf8KMk8VBxKNU3pKfcRjENfAX2Nxc6ZchD93RDTws2Hx7ciVuvWbgUNvuq6hn9r2j3m",
  "key4": "3kavzphgXQgkcyyTnheY9eV5K3qa5Xakt3XSwV9hrX6e7rGDUzEtfGh5Yaf8g5XWK7QZqioTXeA3zp2nQPEBaPBn",
  "key5": "e6uBhZoap3r77fJQpM4TU3ppEMPT5rX9U2axftnCyk1TZHRYaxa7TfGzsy5gy7QXzyR3aP5k8dDBh8wPaTbEynb",
  "key6": "4VSe7TAmpbHX1p1JwG8RgxdHZivAerxRqohGLT1pR3aQkd9ZGtVLZvtGJfP3cS8XC3CrqN5uBNXHzFDP7mAHG9SH",
  "key7": "3N9MzBZfjduSa2DE9iZJTtcXE84B1YNvp3mJ6kuV5mZNxQS2VSoYQtavdMJtoZnXzWmRZpfByBwg8bDEtFWHfjXD",
  "key8": "4hd6rEBDWWMZjERkPq7UJUsmgRKJRJuPqMj1Bf5PSNDZ2f34aLX3ZZBobfzPSXNU4iDV4XpHKktRJfZmhw7LKWCa",
  "key9": "5cFPtUN1sYvWfjNQhha6G377kqQXc7fdVhmtKj65uGv7pxxqJDdnVdqLZeqomrKUKYBErExge44MCYCt8hsTgD5Y",
  "key10": "YucqU23rt8hMck2HovXdLjxxJWcp7s8AnDv8TtuEGiTao5v9xNguy9GTnknwZuL1sTuV7ZyECrHR78XGoPrQU7Q",
  "key11": "4LjkLVSVXkfxdtrRnefRgGMA8MdJkCevS1JS6M2pVaCwBccifGC49RhefqYArtDGKjcse8oLo1q2rVfzq3g4krYi",
  "key12": "24sgbwUBGRZwYthxRqutTfuJW6hoDmwR2vhRJPTN2tZB2xZFMdVYtFikUG4CN2pdEjdLVjwLg2XgvmGj4EwUqApo",
  "key13": "5A9HTZigpLQmaAm2TVPfx1tZVYS2w8WiVt2ngwcjKrLMfn3RUaJ9NoMtHQRkStV9PRbKtfEgez1hMbu2n4517wog",
  "key14": "4ykhtjyBh4tBzseNEKpanDZswfgFdJBMJ28e7Kx8yhLBbToRAXXed3KeMW3wWgmhUVZ5MyJwXQyJTTdym4DdGzF4",
  "key15": "5ecBdahHbU59RNT3hbesyVKDRL52Chbi4Eu4WNj5hxttinqe7ZkZfavNdLPQAyq5DN4DAg1WG3dThSP2tUFdd9y4",
  "key16": "2hi11vTbK1TJtWHHBW8oSbE9SDeHeHhUsDXdHoULyMwQYzQSP7vJpYquy3sK3KtLfNsoAi4XgR9qYM1a787zK3m2",
  "key17": "65e1vRFsqAgoZ3qzAaYQ8yqSxb9sx5Z1D5Yq9hTmmsRgwsMbUKwp5ZNJ9yY5TWMVFKJXdJ6ZQnixEnSAbpDun7kV",
  "key18": "5WdMfdPNQuKStdsRCdifVsnEztxZFg2bSRtJV78G2qbAghho29Wzwzjcznkk7p8i7HSudsvUxeFjm7bWDK7MPK67",
  "key19": "35btJMhoc6GpjuYT8qdg7yomCpwg7pB7FpQzLN8cRGZK9AhepA5qqBpj87RmVtRTpghZGRxiSY2bCjAVkrqvzqSn",
  "key20": "4EnFardUuwFKe2mXJHw575LUDu74GjWmQyx8vh9owM1KFs7mqcpd1cGkZ9Pz1rFHgiieH3EsDBkcXiR5Jn7W5tFN",
  "key21": "z9XbjaAHubZzQAqSc6S6wea46dVGgS3ZNbA54sDBYgcEJ72Gd7MyNf4PTqZK1nAdqztBSX4WmArocfNiMQBnQmM",
  "key22": "4ZWRZ7mm4cAaYgcSsaNZgzp2TzqrwzdzdxHNWfK7nZsazJ4eanTp4PNSBJ6tcsb3UiZXjWhUyJWmTVxNfKGqsHXi",
  "key23": "65T11i4RMS983h9RpHa96oz44yM9zBsHGGUH5NE4BHwuVjqZzo9wLnNnGyhV3r5U4xD1xbiW9ZH5VRtNG1bnA4sa",
  "key24": "3cXZjuJhvtbTSCacVzaMAXkRiGHCtfWcT5zfprsZkSrHciGbCDhddsJdzojxa5ezWoDTyWhQNkVTsWDow9gTGh7E",
  "key25": "3YQPKpnwCbEVWgMGbBfSnp4TSaLZxohKLAGivBgapRR8fzx2kQ2KS1PM8Yt66me7FVLbxs8yc1RMFfuWVaMWJwxX",
  "key26": "57UtmKvRBkbyPrwJKijgacSqsDUQ5X7k6BCLb4Uy47su2t5u8HF725kGGprrMzhGZuEbKEAtUtJGEDthpJt4pD3s",
  "key27": "4LAgQxkSb4BVdnYgbaxo8EDtid6mvdU5E8kx8wa2n1m3E6hXxEd2EKKPQabavNmzWUToHVo7quys12U92XnK9bsn",
  "key28": "44ctWWrqqyusUXQGc95jx4iRqTtC1Qda21v4veGuqLdzLUqhhfYGszd5yWKAEnLqnyPwxDHgb4N8yX2XrTtS6JPd",
  "key29": "Ra2zoCSCQHUjXersvWAEsDKtgUXM6bLgJLLknpvrpUQMkMBHVfCgejYAd6of3cXG2S81wjwM6mZUhxPJovp8j9j",
  "key30": "Fmt1qHydiC7Ywp4bHTBDuZxhq33WULwuzZB14sQC5WexYsKrXQuqXLv2VzgNLX2cSH9aodrykXp8gJabSVNgaUt"
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
