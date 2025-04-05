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
    "3uwsJDSo5w8J66aMfiuYTUdrybeS52xLQsWNuLuZzJqLW6Tm5p29AxBHCK8UpTxNGK6vWV6EoVqKYhzXsJw7dSS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RE8j7HBUR9oLTveiiZkfKPsaJKySuG9gg6cEHmaSQQ6VpPVAD1gfo4AU8Pb3CSL9EetyrNGyyKrbtdo3AsMV99",
  "key1": "5wERxtsaWjAoxdnUYQ1igjEWJpdx5hrkhjBUydeb9ZkRiUXJmXX2rHTa45A2XDWtZtRhKxraoUKtZG41WEZvdvG1",
  "key2": "621uXxHqdCwLtiYg3Avt38sDTvkYf3SjpGQzjRwTGWFhJKahJ7JNiocMzrH1NuZ9S9a9YTqUYzvXCW6jUg9wwjUb",
  "key3": "4k5ycBZkCoFDT2zrPBDugkcCstSBbVDizXor6aZG5DBiKZ4M9pRb8JKWreTDCu26nzS87SyUWWyZYvUguXCGNuK",
  "key4": "28NDkgKreWQJz7qoeH9t3quZ5iJKutGPnk4exiZrGNr4rQYuyBgysSsMMAevXt42rQvgCasoRhzcutSbPUt8LY6Y",
  "key5": "ZvC1dAmX1aQ9SnC5krPYGMFMKQoSa4XTU1fCHqjm6NaLgjYxhnShPd83VM1ErbFxGnH8TN9RBCbQoCLPfracC7B",
  "key6": "3wLqNEqE5LpZdEEcy3qrqb7Ca6n17srGgXF1GjAx2pbnjZiuk29ovyHk8MR3nEQmAYmRt26FPVnrzFLJ76Y9ZAmd",
  "key7": "647yCNrSG6xc3o1QLLHTd7i8XnVHXyGdb3pHqeL9kn5eVLo1MK341JLgHXunsu57SKwEJRBVWjqFgBm4DXqszJEf",
  "key8": "2mHr2bTL2d49wubLWnaonJ5HAYScQ7by3wb7L1ryJ3beHgP7kH8kPpVGo3dsvq8FGcdvCGQ9mmQ3jHNeqFSpfyFT",
  "key9": "5yQGAYgtXUsFn5fqu9Tumb3fLMrdQzjYWqjxmsdcPw6SYcH5sg9FxYKTPeq5hgGM1sczcW5p5QSGPJEoMDRcMoip",
  "key10": "c5wXS2dQpjypZdfzKK1RgQPeB1PFHiz23YEdm4umdQ8HXfRf9zC87oWG9UiBb7wgCQb9APmpThvcPG1bRC4wScT",
  "key11": "4DtX87vmNPb6jiwLDy9QLd2U7avuHJw5k2AwY4zD33vNiPRVcCCbootZg7tr5YFPdH1zfn1JyuoCuqWDpV8VHEp5",
  "key12": "3NN43nUzQdogJWDfcHP38hMVBKnULSEnXtDN9EcxeAvng5xeRK7vaHF4oGeeC4dQmJd115N6Smniz3cbVtSyN4wE",
  "key13": "4SNfv83Ppzjhd3tswhrGAd2teREFH5scriNuW4xW8AySmVQHNYNJqZ8jz2BsF1LWDALvpBpohf53szBesJTokJMr",
  "key14": "5LV4Nt2txNscWKXVpnigm5Kd1Yth5xmFAPrbuUmVx2CjTuTe4PzVBRYdmjXkQMCCmY7uiw9rL24yPWdb9kfTJ5T9",
  "key15": "5aCknZwmRgbxfbRCcSEbuwBo7u8xouRqKrRo6W967jNRiyL6UsaVW4ejZMUVvfUe5fBimrmnPzwn7m938yHTjbfR",
  "key16": "4xKj38joEX1uecAdwQGjYsk64rF9K9U9nrjRF32QGYnZAam4LQv6YYhuu4zE5q8YamPSV3GY1tDJbmPZ1xvETBYi",
  "key17": "36ec5wfgsaV6zJdpNh8z4kkRtU4nSBAFeUHb5P7RyYTK6Eskvy3HnmMwJR1JskeKRUgmu6aDUKe3WNd6K9YvZQ7J",
  "key18": "3pq8X6iwUmMyu8jQyCRFqXS5whtd2VxGfpR3C7jtH6dvenNfeGNax5DrJvQ9VDQysGeHdc6ohKs3MQCQbo56EYzm",
  "key19": "4hYtN3HKbht3sES1PKcHnzCkWJSzxHN1vSmNCPo1h7FS2qNiMANwvzFJA9fJLwk7hqQtyom7fvRV6g1izMsk3ba2",
  "key20": "3yxGKWVHTRUX2xGRfEVXHTrv4L5MZMRzJz3tLqzVUjeEAe333QLKvQvChsvqZckn5K35QizK3TgNFkBHn1rubPE4",
  "key21": "5fDj3JvdXxxmZoERwGWyVDxfuNybV5LjnmyhmpgSFi4zzSEQhvCyJHxi4ZVWCRedibRer7cKjMiZgLZ3dtAXwcVg",
  "key22": "5KzGd3ZE4N3wnc54Jqz7s9VoP9UPRcmDGJ6y2dQv4jfBcznYytKzysc56R4myAtKXjHUsdsGnBkC2y9xdj5uFUNY",
  "key23": "5dFEpoAS2ZTapyNwWv23w2r3d5mRa9KNu8yf1BNb4iWpDbnPUzEWF8ZZLVbgQnwuL4A1iZ6HMprGUAXF9r4Cs6nc",
  "key24": "494njeuqwxXeSbwv2GGqdVSZTfeXJWEsP2n2b1C9NXfLwppyzMNdqk3WL34KthtR7NzE2UqZh5o1GFvJaRDFRCWb",
  "key25": "3ZkZPD9ivGeyZrvfD5Nan7YT57LnT43aqnSgMa7qPGT1aL6eNw8yv9AsUktxzRqEyBMiWVKuqeXR4cDkqj4q1izQ",
  "key26": "4HuyCp7ZJXeKwMgwRpDYrGU4CFAuKzogb4SwnsfkMkAdnWsSdMyzM2oxWBxnRUNDGSLkkgwmPgZ51XPMFmtJs7vf",
  "key27": "58mD4aUK5kZRiWXJMZ8yo3fcqa5NPc81y8wuwyxZxE2iuXfDf3B6JhRGcRUcrd33Qe1rcvTUMs5qCkE4isJcqQi",
  "key28": "XCQKZeVSbE8Aeb7gP1AZxhoq6WmKXYFTyQYumc5FXxm5LNzWGUuW5ByWcSSxyPFUhtZ3NpHx5RNTB452kwH2pLh",
  "key29": "53dffW6mLQ3bGrVbBaBXW1FrPP61B6o9stBxJ911KvXFeKA5ztPDEbSRUDtKySY7W4nWyFpZ9DqseUW1nzbV5wCu",
  "key30": "aufVNpNNXK4qvAv6gNmjd1UeahtBKyXcmwdAoAnDJ2Uxxbh4qbYpEh1jWYAVPhWhJDEcKM2iCBX4RuttiFjcSdX",
  "key31": "4Nistf9ayAxg6Y3L7w6xWyo1bfij8HhdPjbaN7AppXJ5EoXH676oaBHRsQzRyZnoxcddX4kqYbsuXcbbknjM2hXm",
  "key32": "22MGPUzisTNR9qCztGKgyqH2otezuXoJ6KyoxS1wDQfqyttbHPcX82MPso7xV3K8LDgL9KGkYgPNFZtQUYkk5Tgo",
  "key33": "2Kjeon8Bpe2FBjp4b1JNe1vwmerqzbaXHjNY4KRMgaGgFiWGxxM3QEJ2Gnbf6uDt9HV8wFQJQLXtYd7Zpp1rB2fD",
  "key34": "w4sauQ7SzYPSDEkDeiZHt5MBHAfuMPtU2xXDQWnLq8ZqS7vq5KVfVwW71EnwRYohTJVWFNXgQe9GHqeaNTC57M9",
  "key35": "4vC39eLkc4WZsmY9YyGjoiQMGtG2TZvnRux3oE4ohbXfXNMAqTZCwjdpVAuZaukxZfkyHmrSgiqCBrNm8R5sMP1T",
  "key36": "3dv5AiutnXo168mtkxGXx4W4KZQ1wxAaXyqmdHWgbJRWCD5w7sB7mQ934Q2GiEupsMbRjqQJALA7644Y91qqXv2J",
  "key37": "AWJqWQEXtGDN91AyzAXzYabesHY9J5apXaPkLGoCQUaNfxBavBDw2QVo81LhSJg2D8dT5LLi3ToXbH4AdL1FNjg",
  "key38": "XuEVzHKbpN983ubiA42VBCdhWEXfPVRWHXct1ZAV5Nbr3sRhhWprBkRnDdJc7Jb76ZMTcaYJoMFyh4sCVcsSpat",
  "key39": "5nwzNyxCggiJUvAjE7JJRPqt8sXV9WHJG9CU9AcERXvmcvzL5udt3xtpwE4pJgeYSSM1rt5A4VoUS93dszKxgoP2",
  "key40": "2R7SPip1G5N3QWySta9tn2h1XexB5a7EgcnYbqeSBu7MR34z25D72VQYiipLRNks3YsVTnPQSsbzpvBE3et76cUL",
  "key41": "21Zs56rCRzCjqvcPpwy6NKSYpW58ktgjcatpCn7qPLYHVPoR7ivv5UjE33uJA1jGG94u8d653899boYApf7Ep3uW",
  "key42": "3SfP3ZGbFogwqzGNQsRdsyXpfhZrLKbNZsNwpTjhAUuKB4mrZ7yhkyonNj5GL6KkEAAXMF55QevGxu7nsG9vf5ej"
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
