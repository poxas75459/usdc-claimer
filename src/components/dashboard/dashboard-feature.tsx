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
    "tXLCYS1g1U68jiyvox7Hia1YsF7yr5cqX2VXtRz9e2TX5gqYtYaQynXHpL3arbJ2nB39BCxfS2VKQcqrAVxb8BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rA2GNQbsZjVv6zxk4VZR1RCcPkoXWNFevh5cnqdWUddZsCmQSTiS5KJDGsynLfeTvBx4ponCTbEf5BfzNAbXsPH",
  "key1": "ZwNevYCnPYyv8xcA6hNESkxqY5HJdZjw5RnvfuWXfxJarRwCYAg1dg18qJ6DVkQpVtiVvZXBqb5AFVnhgaTNAAt",
  "key2": "4PcSfgYPK6vqZMSJzrvL2r8WG4A6kah8F4nEiYJWhbcELmCRz9VsnpFyLd3j6vgN4idfWmtDrfBM7Yc8D8XvRHpp",
  "key3": "4QEQXiDFCM9Lyjf6uExXnsDfNKS756LA73JsStiuC29c2UqPhCXA5upFfoHWBdKqKFZKJ7VQbP9kzNr4rRuD4RbV",
  "key4": "4d2QviMDrSWczkPFPTtchaA5vKtQE9mLaBE1mu4TuwRvL3SZJAiAvdJuDWLqmpo2pkUF6KbjYwdBzpMZt1c4bmqv",
  "key5": "3MiKu9voRDdu9s2x8H7FkF9vKqiYcSWt6VYtnfZQevXvPezJbZ8bFXAuCzgGag7ibS3nE1Qvt4FEcZJTrFzLFRUt",
  "key6": "61TMCLBd1oDT5nFZuZu1PSGpq9H9RzEFcQTDwNgHxELseBE3LbE8GeUvaUpL41spos6X9k1MK6xZRRHzYoJKcrL7",
  "key7": "3i41LgJD5ag3v6hUGnrt7ffbuPxqrtwDgHmWQMQT8xNj3bJNk6LASRGxLugSZz6pQFAe1XpWG31q4jLLErn6EAjJ",
  "key8": "4AP9oY4xPc6W77ccht7xpAUDNyThCgafpHHKU9kdYPkYPo8V9Svd71Mo3AuF5AAwiCtN8Jmw9LZmzrfesPUp3PAX",
  "key9": "jGbT3UKzJFthfnPHAsMae6z4yTHPAvZKTuHytXxGurfHUS2SeAnkbzR9zzYiMwuGHN69b3wjoMkHPJuiyi5TrSt",
  "key10": "31kr6fguQ6S3XyXLjxeLJT49gViWVaCdb8foXwzN8AeuYiKqhgsJYhMuQikEmNHimCpPVBVx3dujQM1T5Vey1gwG",
  "key11": "2ctwkkM8pcwtjuLJBvNw766xZyrCAYDSpFbPwoE19xfaZVup87gZHEGDRfm65vkNs2Y4BC9hxRFcRJrHs24rEFRG",
  "key12": "4uweqXo1zMHbii5b8MzD8Pffpay62VsAw6RknYVGQfRAXxLMWWKguFNMRa4AsDurxkKoWQUE1qB2GLPpMTz4QXU6",
  "key13": "3PPgZ4o1T1SnRAgbVoMBiSN6YpuJLXSH5dayPfrCGg9sN388jTTTNzXTnUnmrDUj9n5TZghWAX4sRgaLhj27BnQW",
  "key14": "4fWeH24rH54jwo4pxHpYpugZoFsS6NXXiQyyguWEdDrfYGLQC816V72hoJAEThJnY6FrCynr8kh6XejenKZzrkUn",
  "key15": "9iTej3qBBHE162cvv63VuqSoQpawEZsks73g4zxMb1ebkjVcPJddy6oTmwsH1cceDwh1TZ3b7sgaB8qrYCZW3rH",
  "key16": "F8K6Hy8fFsPpH94DdLaz2WJSizwhvMHzFzyBEm71hHnZrLtPYYcsXeTpsw4M6RV6RoZLaNQsqGpoiptj3i6FCco",
  "key17": "5d3dXfnUSS6Bmpx8TAM65xFiaiNxRHZUVoP1JbineP9evHs6KDMNPGVsNsR5gfsaquLoeFaWLFCDctuy6W68u29e",
  "key18": "3yFcfiRwj5Gx8WCHpzhZJEfa3waYjrFZ2G9qPkm5dFrBtHorRozhLGb3XXTRoYBeawo7vgcQuaqk4sZLhXtVaq1B",
  "key19": "DjC4QydYGftMSyvxPxfXV62b5KXbh2GVHsFj2z2iUxFso66bJFGxLpEddMfJEWcF5H3jsdJ8My5QsLDxRoxrfkR",
  "key20": "3wNhjF2jJiwoRfXYJ8baPFUXRTFKvf4BzTCa5Avgecbwm7MqUhtyZSga3y6WNgLiPDHH5rgFA3iP2dLRTUpm9Tj8",
  "key21": "5R66BQcZXDVstYNWXadhbUwJi3CvXEX2hpTKXjJSKx3CcJqf7Rbp17iXLdWCfX428ySKEgphrSVbLbkPPt8AzTLr",
  "key22": "4gvhyUckm6HAk67DwbvacULAso8NPG1UC4pp8SAizcEydYCBcfRKhgUu3R8QcscyKejaMVm23YNjk9EizHQ6zyHU",
  "key23": "9iqtNLLpfE4bN7mGezZaAvhSPKnSA2WdKMpX4PQBPWemC3rgYmxAWNF3PynFvfpgGqZqzRUrt57JSYPncJ6E6MY",
  "key24": "5G6h65yEzJ6dNESrmjfSL6X4jaTp2DYN4dD5wvrKBVjMUqAEmo4bFozbpNejzhfsdYC1Hzvo4g14GKQBwKVfLciQ",
  "key25": "4gFbWTxFRo1mKxxQ2wXgcc4JbjnyAN9smUbbTrPCwZE49wPkG46qaJ1PpQ1f7MHJXuWgfkmJdBgDJkNfRJ1P3PxB",
  "key26": "28L1BZPKLzarfxznaRBattgNf16de5U7HqKowfNAH2XecUBrqY9W3c4r8Rjn1vMmogMFYY9WGg55bVFM9jE5PmtG",
  "key27": "5TGg7aVZaSNstBytqo669MHG7dsCn7JYUWvasLe8L9Dy2HVTXtZj7mqdMevg95VaZu1HX1CtufijZpQ67u6HYPCQ",
  "key28": "2iDVJ5didRFG5KpeZV5jmM53NxqdEjqT1iVzqyyTidzuPon4M8EcjYZ8W8VJQd9WrEgEMnXvSJWPbXbsrvwfBGY2",
  "key29": "48CKqN4tQntfYAjeYL6Sj6Z8YBc64taK1D7wxR4E2tKp6emUX9zdxNhKic8UD1KrJB6MdScqvBYaScq9jv9wNgqQ",
  "key30": "ynmaxjnYpa3szPoGfiszoXAXYpd67fN5i3qJUENMmBephsXG8tCPuub3wL9GW28FaxRWohHV4d1NFP8jvgjC7Py",
  "key31": "wbo9nKGeyuK6jAU7VAvDN17k1XLMrnyh6wbKrTKqnzMeLyqX1JuhUFa9Dh84t3nJ7C6QHyen62yqBFAojeaivjx",
  "key32": "yeNC6sjBUihNBeEBjnMvbWvYGHpXTMgfvq8f5pdaP2jS7nR5VTbLUyHbsGmTYhkx1DpGPxv84nYHqqsPxHLX11m",
  "key33": "2gntsS2bApwCDKhXZBKE2B8NNxbGq5DcNkJTrRudNmo6fSvLve6WfkewqeZ7jFbiNWr2R23eNNDH7nRG6QPVBhrf",
  "key34": "5fhXuGUR7RAkxfCVMJ4opKrADhYYtjv8sZi4kMvZ5HTZQ9XRV9cTn2Z6zwvBTac4vSDXe8Vgx51CoD6oxT5bd7Dk",
  "key35": "4DFiSSBQjAXLZQKTqXo931kPduwoyUbg5QuuAaUCNWiXKCktAEXHj8aKDzjUo6hejDgsxF9Xfvvcsnwt1Rx4NrFz",
  "key36": "6wPBdjHTZWQtyatEbugWP8cVYD1RUM5kWTTTh27zzdLqNYr8yPUvaWEsUbkyZ51n4CUBRHGauY5HA8Qc7UNAdyr",
  "key37": "3a7WGdAbre5SfM3Z54MdRoEKPp8qfn5T5umUdxGfTBYuLimaoKyH8eZYZuL6fVBrN12LnKmXYMsk8ko9E3j2MczL",
  "key38": "5KnZK8hmck5YJ1FLSjScatCpXd9xVNxKEwsfFfWL1eEH36u4FNumgoDcgsCsKEADKsPUDKZSMZhELACWtttBKut4",
  "key39": "5BiTYRwHwHiTupP7foZgn7d225WP8PnsnpLZJxUgvDaVaAdCL63v2VitEQ5b4j3sj2Pu97kZVjwkRj65fGj8NGVr",
  "key40": "44GkW9D8WBJutHu8RDbPK74C3f5nEP74DFyopYQ2Td9wT6P8BVzzWWnzSzm4YTUdjZzRqcfCLAmjg7BJ1fSGuxBw",
  "key41": "5SQmnH5vjDYQCwhtP83DzCbmZ9EtXiELmL979nj5oswZgbgGNXLbcn9Zw6tt4NbtHMYRKDvrnQBareXDg175Uw6i"
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
