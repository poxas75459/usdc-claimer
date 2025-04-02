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
    "2EEW8ZB8jA9K7wP9BEjQZnseLi44RuMs7qYc39gAQtB5TbToZikUGfxkEHyHEdkURcTYJdzAvFfKBB6nQ7wu6EsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UXV6Bi2Z7oQEhncoXKL5pSSQ8Ag3wwNb8Ptv14ghW1UVDKwCesdMNxrauaLVhjCcXxv7ZJJw4gtxDqpQ3bMpMog",
  "key1": "4EtbNBScxuwppfy36w65Yrq4CLv876VMaZUYaW11SehW4BH2oS5gDhkrEtGwVbFZ2f8Lgw181o8swd2AGunxSyfS",
  "key2": "4p2NQXwVKpuBbS6kAp1eatgFCGMavsMhXxShgU7ZQRdGZRgApgjK6gccctMxwSXsihUmos6mYGjLCWLR4S3rjZTL",
  "key3": "2Sg5fyP4ASAVyStg9tFy41zAeSWQBqxJrCKbKdNbDk2Mh3xQD8XwpyNDbrrNRoLb1XV1oGD8kzjQC4CkUvuUvhYG",
  "key4": "5h9r5ZMBrpZa7fBoJ47A3jNAPLfDk533ProP2skVMePAVLxa4Cj2M6cztsrj3tfxabQ5tNitk6P233qtf2G3caR1",
  "key5": "3k2gVjKTq5CwPw95ot7x4KdgaViyyrw7zA4Wu8ecF3H2ydkAkgm6bd4BcZYGjNWBNuFU4Q6JSyR6BkJQBxEvs2Ej",
  "key6": "2LUXfxn8p3h2sS3x3AjjuKrBaWyoYhw111CvzY3mDbkR3pghe7Z42XRPqdXCzGpXCZZZHDinMgCzp9SuPyu4Ryeb",
  "key7": "5iZfPUHyDUhAZEk13VzVcxUtg3FouGNy9Zy8247ioRFb4n8BLTZQCf14SeSVkofEUdEFoGbsmdBsZi24BQ15rWEa",
  "key8": "3kW8ANeCDEqXvtZJpYg7kW7drovTF3ie5TUAi5DTG6QXv3GQ29BExCFnD3KVEjc4NfsXUyHstyCqMQvNpW26D9BA",
  "key9": "4G7AWVbEG7rvm6SHiRWwPDWziCBY3YgW5RBr7ykstcyVvE2Cp9KBdfbfkTjW55qVbthAxU5HfM4vDPqBCFkygzT7",
  "key10": "4UrtQASV7VEWtHk4bRFRDabjrBzxgW1W3vTN8BFjasxLRGmC2nUbyxe7x5bfFdoNeu4YuUDVUoWojuqeuLNK9kGV",
  "key11": "5DLT6RuvxBJ6MUXtVu8uiXN7KAeWquYgYauYJjbikbHUCVctjmxccswd2MAG5AdEBPBM5D6zEEoRFwaGGyrqEY5N",
  "key12": "5yis3nbwUys9GnDfxJjTM2jW93Rpcf6GBwXvb1E3utFrSmkPggt8LZHLCbVp5wwCL5N99nBMhfRLrxkRfrUwXG9H",
  "key13": "3y96L8qaG2Bg1CHMkvw9E6UP2SEb3nLaCAWtwHNPWiPd6dNh6xdyQ8iwhf9Z1pEc1JY3vuxMCVbTxPWDnQ5hJDHD",
  "key14": "wQ4jN876iQQcssu8LQV4cPDDTd9N5PpBnx7UDoV8wChD1h1JmwS5Mu8qywzpLNXxAJ6RHJXoU2yuhhttmVZ59JX",
  "key15": "2eyzkC4Uhrg4MPAuQVzNm5LDShBwmyyxCSfLGc65xR1ERCERpTEJNeyPqQWUmRvqs9xfVbaWGBJCjtSpRFu4VSt1",
  "key16": "3ZJ2s14qbJ7UekYdSVFyRD85Fq2s4sAaVWtFzSCBEJq7RGkuwpws2j9qZbTXG59eWZjiQ84mctfE9oTMyT2BXBmP",
  "key17": "58bFjRHxQk7RK15duJokCRQbgiZy5gDNfpcb5rccs2mCYkyNu8euBLZmkZ4cbimWUVSfqkciSZNg9HwABhDcRA8i",
  "key18": "55Z9MqMD53itJEPFRFLV7SgBwf2WR7XVijYSpxR5B2pXtLj2Y6pgTg4BHBKEKYGU4N4b683cRADV5AZdy2LZ6mUZ",
  "key19": "3y6gaZEBVxHtzx6ktoetktnC6e8Q5X29MYCi8VhAPuNLyQWD7y83dyyEfkrSSLxGGtJ7s3dbaDjFMi3cwtGr2rTg",
  "key20": "3WhQy57Nx7d7NjESnL7jKwebjC6kcjzKbLyho85xauJcUUPEQgZSm3RMEKSonnSFPYVvXV6rfvVB7sSEZXgJfYc7",
  "key21": "5AKUeeQeyfxXcRuQKeDD36hDFcETVkCENWktgppHnFB9DK3fKwu1SCMpFBmH6ey3uvRNKnJzkqiWWCUXJWtqy5EB",
  "key22": "3FmJc2TwRCPbzSaLgUG8UgNU7VUv1uURktgVFbowinzd7DPYMMyQxP44rFZdR81aHjvt5MEr9eJ574wQg61DrtcM",
  "key23": "4s62bWsWjz6x65RV2VDvE8YeJ6ZSpubMLvZi1obUnt8wzXkNFMMEspoAuNzeAcWwjAJFnn1WbqnXGQHXM5k1So8o",
  "key24": "2xRWmwUYWAoE92udzCt6jScCrooSzQk4bcGaHmLBp7a2y5erDhS3auG9ymQNkYXZeBNxF4K3tRbWbZhSQC7ZWfj6",
  "key25": "5fdCUDFjw8GhhMo9JEcwzu1Dg82rgbtDY3Grv116sS5kVkADAKtZ96zsVLhRSN5WnrKcEUQaKSNLpFEaTx9RUPqA",
  "key26": "4qdB2nisFSBmjX8Z35euSzDs9FmUhiQigtJNFRKAkJr8TwgK9WejUQvUhvvU7w6qScUTRWr8bsGctmKW1Cgae1fp",
  "key27": "2rvjRkaWsTijaQLwF7FKLa8RohvGswyY23XWE4uzX6tXWoXRNvbc6AdZSF4LUmTgkbyNpHunrHqwnyGcdey68nyH",
  "key28": "2Xbw9gyzCfMa9YTxrJ1yL3h2UyVXdJuXNAKnpYFSTACPAem9SXWF6vbcuF5NdGAcqKREVg3mZHXjtLgLkQaBgm2p",
  "key29": "4piR5UrNvyGQvLg6yQDagBSwUD3i3jf37S7u51odyPwLRepVvErmRQDhvUnB6Mb4yc45KsbDkhdrMk2MTGnKLj7A",
  "key30": "3gbpti3auboZJnh5PrfzDp7eXUyWdCLf2kjBbQ2U2Ds5SFo6srVa2NxKHdcrcTQwWACEaXb7knnwskPrTUnZocrG",
  "key31": "41CbPt4o69kAbnBjjkPUyGRx8qPgEprKxGCDBBCqBa66RBzDPhTQwifLLsgKJJXz2CZiU2Pd6cdybUkjXP8Ta9dV",
  "key32": "5Gj1gcZfhV79SkhgET4FvY79VZgDtwH4458dJRvsELsrikDgKPnBLSzbfGqQaoUAxwnvbCSDuT3TpKHv8CuQCp7K",
  "key33": "3V9u9yWVhfZS2f9R34m7rjDQnyNMASAfYxB8hXgH9JPWfCEvt9Pp7XMsabKPrYRTLCXkss4gL6fWvfqSWHjCq8Zj",
  "key34": "5xGSRvcwKDtmAserrNSvb77fxrgrgRSTb2PLohc5CXsWEbqPKkzGH9R1zuccXBukxDb4miuFNq5EZbzsFx89xNex",
  "key35": "4F5waAFVLWjYBxDhNX5C6nZa4CWx9XqawVWQ8ZXDmmMYV4gEHRxiMnXbpYn2dtuuMaSVpETaZiz7GRNCzuisBFpb",
  "key36": "5jjzEi5MNZmhUQBe4CxksGoW8haQTuoq9T3FasfoD9zgjihBhwzTtz2dDvLQJKbEBpWPaDGTkGDHR71Q7ZTLs7uC",
  "key37": "2vamcuZcv8hHa6Kb56Hnz7egYrfjVAij3o1tNQnGNh8TMEkY4cv2CpiksU33Gqc3goRyLLnLKzP9qB3G1vsUgRLR",
  "key38": "5aZT1u7YHqd3NX15dXm8BM8QYvZLeqdvotBW6pJi4q5tr3YaSXJqxp3EqqXBzvPafvUM5gynzf5jzrGNjHbGErPP",
  "key39": "21cYwuWkTPVbxiPpjgjcj7HxiviyvymHFhUfozJoWGWcMHJnX4126Tt8uijnWp3hfW71wtfXTyrH2MNYfU3Hz2Fp",
  "key40": "4WNTzsnB6UY3VnR6EtejLaR327GVNtVvSdnUh8zythQRYhXKbZLoarJSsePhuZrXLQ5nkttQK9rF4qixut3REUTt",
  "key41": "TbeiAxK3ovycNAnfkFF3L49mmotm4rxspuWeWmyWvYADXxZUDTNVh4i7HVaJn25wXNcPEh8g9SP8ut9aYdZSWNb",
  "key42": "4PHv5SSzGDzCUYaN6jWEVDf4FDSQfuJbVwG8VyUkdzvC6RGpVSBTebuyvPGnYPoqd1UfWyjcke4RtwT2z4sR4dvU",
  "key43": "5fD6V93s3ocgACDtMkncCpLyGGjh3HjavT2PjLK31urVD736nKJD5CQMtNLsLJqicDPA2Li5oeFN6euEEiiGJwYj",
  "key44": "2hc61okTY7hW6mfQsLjc2aLyajHtNLstRWo7kSXon3BinCuXGyQ2WiQUzxdLxs6Mj5a8K5sJe2Qho64kWnw6Pxzp",
  "key45": "XQ9yu8CKGGZquyhgpretGC5yWPrSB34VEPtopTney1YUrKsVWGRvAoL3EcQbosVe2iPMFFqjMxYHiWxbLUYrbEx",
  "key46": "5YPNTs2aT5uTAzmeTDvviTWNedA9XSC2JMxhwc7YXrhxWubqQayK5DKpvba2pCAvoj1Lkdw8DwqhRNdAjSuYFhYu",
  "key47": "2jBLD6VGZPihbL2LAy2sqrQTfhYiu8gzzrjwpBH8kFdZdv6WMmdh29SK33rfjmagMUp9H5SkwWBJALdSpGE39XGh",
  "key48": "34Jmrz6D1dtBQ9XgSrmSURECwgJXxVb3r5A8XwoczozWYCGCbfiwxMQnwQchMcpGWKrJLLahByEHyBneK1aiKb9o"
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
