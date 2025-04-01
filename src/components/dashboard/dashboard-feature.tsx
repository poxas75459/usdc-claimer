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
    "5sYYAyYqsCTjLDFtwaFXLVbAKTQQvUn5gLqM33mJVSiZcifxAHow2HWHZm4qJGKBW8juTWDbZNc6enxeRfxMq4Pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJ84h3kFM5ZnmvH4dhLShS7grxiCTHJawwc8Yq9N6AAUAXxFMdN3fs8qoHHKgaFwukddnifqDdjD4ZYCDLgFgq8",
  "key1": "5tgF5NxnK94meScq2uU8oF6cPg4HiW2yfTcHRcFjvSoLDfWvasn8PkwuwUYZhzMULSV1pJgUmV2i5EdkkijsMndb",
  "key2": "5AfxQsYT4Rt5PQ1LHJChYTLVG493Eh18uNRJj1dyaGrNtLzi86ko4h8osbzfcsZk5UnfosUMxedHLC7KDUjhyfwy",
  "key3": "3UsrWaRAoDpytHH1LpFEfe7meDfB4eGcDUTA2tJbivDc5JQSQNXFhof3dpEaesLBhTN9PuP5Hf326DXAJ7HTvvjn",
  "key4": "5LqS8Vi6z8xdbzsgLjKuZFBy11TVZu97BYCTAUL8qUT59d6PCbYSFdvbvrUYifywqhiL5RQPKTfbCBBLrFPmj9Ms",
  "key5": "fzpTZAiNMoAQ88EFW5gXRD4v5ovpMGoSR2v8z6bL58Z52XJsb2EcmDDZ14aCywks72jYxB88V1QU9y6BThYvShK",
  "key6": "43eh2ijEpWByzBoZxgQ1gPA7kTa25ZFsn4VUjX4hzNCmK9YoSxSYY1kn6tPdZHzgpjiieWuMpYFjA4Shex9xkyAN",
  "key7": "4mMu5tSkYKRfFFatJ8skh8iBPTvwfCSpS2VzaZfSRykPYSexFJjtfyVy6Fh8EpkxJxNqD7FknQAsAvFoaMPeyy5W",
  "key8": "3NrMKFZXjGe4Nsmx7qeFe2251bEGpbBof8v2ojHD4o1tjgPr1J8wYFV62fmwAuUrvZza4kfxV3C3dSRTouxhdaZY",
  "key9": "3xXGTTPnW6c9exbhC5uVN7Y4muA7JcpCqiz94CDffGrKLPfBMkxsxz9gEkazYeD7huFLUfr86kX6cUBxCupZ7C7T",
  "key10": "4FuNFheL9kFEupVku78xtSrgjBN8VabBeTSvBNcH2izrSNoCjVtsCvKi8wDSmqCY5VZAvYVVxj1p1vpkLPaXYVx4",
  "key11": "APsNgA8HDkaoG2LH2sFqyugksztegudwpsF7QdMsSQdacTAsebSgUvBhzEBaHHFLAEo5Mf5BmqF6TL7sdmFU4cy",
  "key12": "4yZoa2Sv9pPyHBTj9HmZTywcL9j9V23teNJqYva1YU6GWPnypwrzohV71XjaECXZw8rLKKTtgyPUvZkhGgGTLJS3",
  "key13": "3z6LNgWykKVfaRpmZxvrvGY88gxeiLPpT51gRBpPxG7kvDhcXpH4GgoDGT7XsVULH3WWa8CmsVUR1RER1CG1rdU8",
  "key14": "4iVeB5v6eyoNEFKQsSxGjx98PqAcSpMkhKLBVv1d5mvJghVyCgfNchzfH6SMtHSrbAUmiiSU8jifUBp9rSEoAMTJ",
  "key15": "2caUzmoNmZvHqSpsWxYqb9vihhkwY4pjrvKRCmyrDPg9R5pFQyeAtGMesNscryNqreYweqEhu4vfB9WkqVxAMaFp",
  "key16": "47UzesrYxV2DDAhPYqJvqVJyCRDXBSTepPDsAh9sZti2TASKNUPdGimHWyEsYkVqtDNN2vdwEA7tkSWeNg76v2Us",
  "key17": "4W269b9GdqvX7rCuEtEWQWEDSFPRmZfteEgpNiwCeoFhV1LFLpeThyCEApujezHroTSGE91621jMrjgKVPrcLGy1",
  "key18": "62PsbFWTHqVr5HiwsW8GYKWW5jHkBpZgt2Kdi7e1kaQaqXrxD8uG7Q3hqQUCaCyLZY4TwhY2WrWRZs1ZPDqTzvYw",
  "key19": "5wRJGQcgZdeeUajZQqiWbLpbPNeuSTx4FNZRtofX5J3tdEsMQ6V5QGHNky8Wz4RX5HYx6K1EwWgn3vmgHeYdpf9E",
  "key20": "jMSVxEyZoLVDnQXqFfdvhmJGqwdfL9uQuhk5W1UzgCxTtHb2mg5G81cupyFwVprGoepLz6wLWkkfCi1VJa5dQRm",
  "key21": "29ZarBFrXpE5Fk1BBf6sB4FZUSonRdqvtqgf7LBSFE6j9Agrqc7G2BSgr56eS62gtpRCWkcDkmonrPjeXY6NnoEc",
  "key22": "5YW7crcbuzuBjLus6vzJJygpH8tYXeNxRWujFdjb8m2BissLYFv9LVkfM635XU1DETJpCP8iDKnkjESiy3qNRXUP",
  "key23": "2cTqeb1neGRM4RBQNsFnzadiLBrCZtbaf4TorErM6eUmDrXMAtsra38ezZPfYCHaNgkohzs7g8pUEc1fRmnccgQt",
  "key24": "VoMc7YfKnWxtW3xEZ7nfqhASZ9e1iXQHgzqwrTpxwB7C7uFivj8nG6sUHgcJ3wt2q2mm6jK9in8yZsNk8k2r5Wg",
  "key25": "3UrmFCDYaR5jMsuZvJH7Vs4E9X77BeVE66vwMpVbb3udMygs8u2HNcSmQ28FfH2NQupsh9scirqWYuvMN7DMMrvs",
  "key26": "D7PHho8isQaU5PxJAvsekbkJjHpFU1yWjixPKPe5cEnTUQaCYnmgiBVwMz1fR3amjNDC8qFCnE7LLV8BywwKedJ",
  "key27": "4DWkD2TnJrKmD7cj1sooYy8afC7QTSkSutMyeY3TMJhHS5aUHsHN9wxiZbrv3wxoizK3gKyFLghuTBhPf2idY5rP",
  "key28": "gejMNmKnHCvuzCs9jrVBf76XQFvpdFwdTY3GHqfCi7jPWtnvp1t6b7GDs3BidsixhMfvQaWcNe8atifJR5XAaqF",
  "key29": "tE7UQdv1TV3DcTauwWJH1y7cjFTKxTijTq8PiszGTG2Qsk9YqzR9ib91QJQVAEzt1CyKdieqC2vdgr9yzbHAwwj",
  "key30": "sTJNWVoLMLS3ioyfz5NpZpDMRtHotLpVYucUP8P7bfz9rW1WR5hYxD2iSQrf1APAtaRHztKppHRJ2dcSkgyHX1V",
  "key31": "39ncYG64mzfxq861xgnz7Xd4DfgDtMTguChjVeZ5E41FaGWr2eChecxsBt6QndhqhSJvtmrjM6QLhSqbN9DoKti5",
  "key32": "4Lmw8zxzqfVFF98JNmxzg3ULffCNbTdkCVGfWq33DEwr2PZJ1hBGpKSnWrWh8xe4PGzXBAfuXQZcpXaGxra6goF5",
  "key33": "4aGE7vYz6uGgis7arGJRMmkqhDdjHJvtZ3SdgkCAC9Ms2eHqpTni2sGeC4wXtHC9vkLpmhwxK8yzZVZ2RAFQyFvJ",
  "key34": "4N75wJxXGFP6Aus7ACXqd45rQXPqsYNqNT218hDaJTsX8uYYbR6T6xYhENzRtw9FhDab92GATxDYtWc59MTd5vjY"
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
