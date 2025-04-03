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
    "MGW2Q3ZqQkDwQUDQuxJnrQahuszJ3RMfd2E6NwoyCRfbAYtFtvzxLtiWJvCCpqnD5QnQYdCfTV3m2Z89tkRFj6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQ3d69xJaHWhr6xKMrXKMc1MBZYPT1AbAuurbuLmF8TsffyRvy3hqnCjmRDPiHdjDKoD8xFQYAQsbUK3chJDasp",
  "key1": "511aD9t4K8WgnBSf7LNh6eLrZsEk4VKBzGjKm9CN8FE7eheujL44hmAVumy86fgigMgtFmHwdgjuvYjVtAxEcyYj",
  "key2": "qxWmwz8PYy6xwQ2cMF7T5fb6jFqFvxj3Yp7X6KpgZiUpnsqpF545iYQFDRq9Zy8Qq1vRNr1V6CKvJEJDF4Zy4c1",
  "key3": "4X9EGnJJX5rFt4Shcn9Q33rDPQUEd4E8zjk5FjuufD4dpopHUMDQjfxhy2dhZmddq1j7ocRCrtr8DWxEuKTG7P7o",
  "key4": "5qtwm9qvCZv6NUKoMjqZs3qxsioSdqfTxUkzaXTmLDZu3JpvXipyyyGq1kknT2HAZpWTtLjRiiE5SRdmBLNKT3xd",
  "key5": "7UdD6dq7VzjHkoD3s4KnWPpPmgyqteAavbBQ7fdGhkinCSWemTBwS4Czfwo9FQmZkNDygBjJkz8Q2zfL5k6UVrC",
  "key6": "41rxArH5TdF3oAKTNpGcjjjsNXG3tWDNbDBNigYMZ6cJEzkknzY4JP2kajQZTUyqjDWSs2HpBw8fPSW8B6M2wki2",
  "key7": "5Ec1fBdWAVuurrGzbJLNbjefT5SxuccPqQXGG4L18YmurAadti1DP5CXBwMwPtbiTNWFVc3y7jpgidm4GWQTxyDU",
  "key8": "9qjZ874KLRdZhEZVaBgAjsdU9oQ7x8enDxHsr22mZE1BL81MGjg3Nbqy7VYh9XodNQBjP5WZLWDoaaM33jFJc5v",
  "key9": "5Qii5CvGs6Na674g5ikeKMVL6DfvaBhg9YdwdRZbodJLJXtTnj7GbBaEnhYdp4ttSJJdmCq9a34GcJGdpXxPmfhv",
  "key10": "6ssBeZv1MNrw2FT31fFrNqUg2mc8Ph2Urk9fY7CRakrUBKdqhiNt6sUq7mHXcmL2krDF9tkJE5om3H9u7CRe1VY",
  "key11": "5sgwJahRsrehgZbvXCextCLRoPcVzTBebakeUuVvaTgNREhLYax4X4vRVUu7t4XR71Xn11u9tww9AUVSxvwQ29rF",
  "key12": "4vpfmpCSy9qatRDcRve28kdypQqfQHzNLE7w8wroXGjMZVwfRGL9LASV3sWzcSLPZVQTHCgUVnEjYdCr4DvoEtHv",
  "key13": "51YmwP6vypBre3KJW7CE7kNGgZCFWHWD4propJ91t7n1o8Tj7iNpCnxQp3t6gJyXceFXoRvxVbcDuUwhN8saqocE",
  "key14": "LP2Eaz4GU7gbnzRt9PJpRyeNdPmYnF4hjy3zBC4gWYn9ae4x7658PLtjco2Gg7rXh1oMxz6TVwrDhdi87Xh6Wav",
  "key15": "5THg86XkodQfcPs3A5GdmgeLVBN4PLuugBY2jCGxz5Chnbd8z9QNycXBqRdirccsc4h3vunyHc5m3CUPgNmi4Uvd",
  "key16": "6sXxBSDvSrwXEAjzgrPziR9fNrKLXYdBFWmRW3rJNsmnWJCWgijycBkkSiZzZupfv1UZfyDLofEMQpHjpPXKw2W",
  "key17": "2n61SWXiB6zBGZiUTnF9sxu1BYmBomRwYNeNfYxrdVaLJByXZnab26DAq6Gf7yc1bZ4FSEZoa4SP1hvcvvYAkLCH",
  "key18": "3L7tBWEqb5ibVYi2SyniNrMrGMX8DiSkjqEYsLnd5SfCwnBy5LvNLob37wH5ALzpupyuz4KvpgqpWx9Sw7bihpo3",
  "key19": "U8tx5Xo3mBSJyioTriCnhr3QT9wjSFEPaQxEkfs2ii4rWZpWpn2P1Eex9chQJKCjYutCE8awm9ibuhNxcwKD24U",
  "key20": "5qPpV3XSQ6p1oeGUTNEmmhn3TimYeCxMBCgfPpm1kz8yFcFSNLzbUim2dzEY7rhH8EPnhkVD3Ahe4rYqBL2UHdN1",
  "key21": "3YXCxtEgP1AJFyDrbZd5JeZ5dK1ueaowsvTgMjNNDUY8Wn7SgsNYbcAz5v4jmiDrFE5kpNKjBQzQwi3wixoQMT8p",
  "key22": "2YqE1Fa35iPh4momivBSDGkjJfYqBjtZpD8LRnouNcK8HRHN7YUPgTdk5ua44xm2YT22ZLR7eHZxE68CBaFjVsn7",
  "key23": "5Axwi16eAK4B6VWP2ekVJ8iJsaBYdR4VztdqFgibCye3y63f9TdttV3ptt7Sm53vrGwJSwCFv8mwyummDG2Aw6as",
  "key24": "5Uiruq9xYj4hdeJu881SrYHK1wcoFoQnFiTfwJ7zJD3Cqm4r2RYDQjMyKbyNRpDDmY8JXBp7WphqaX1eRYjR8B6H",
  "key25": "3S33Yf6aAZ43Xfsys279v1i7WjhDeA3gjUaWsTVp1nfvByYubaR8oL91BqSCeSoe8nm8ArueMZhkRLYcKPk2UJeJ",
  "key26": "2YESopBqtHLfLCDyRuEc5b6RTSVXHjmhX1EkudhtRjv3yzgtTCaD4DqnRTnJYgc74xxE4Mc7eSBheFox9K6QDsjX",
  "key27": "J1yuozYf9LfpX5JyoCdfAh7849RrGpRGnMpJNeYQ5E4EitLFyScrZru2AuPKqaqhsQQyifVQTNjySWQH6btkdag",
  "key28": "5EpaEqwyGVoUQszDvGpRB7qE4xhZjX8EZSa4A5Q7kT5nJ2co3gZxnfWQRtTCCkkCBJnMUGd2WkW7GamabxM2azBY",
  "key29": "3VGvBqgXFBMT21hP5Les26NQVwgwc6CZ9HqRcu41ACeGJsL17fBXXxrhui7C1uLEWumaFkBr2vimHt23rsj6gzPn",
  "key30": "5JCW1MmhzKdQojraLHdYfdvGW4GoF2Qm9CVZJ7ma2tGzMM1mBZBshzF3Mjxz9ssqmPohzqFzBn5ZetqHifgtnMa3",
  "key31": "zqmwBYwrz8uL6mJFVZmygkojCyh54zFY4terK4TtbJFuAVNLiyARuL4JLWcYqBT865iJc2hArzGPWXBXc5eJ1XJ",
  "key32": "2KQZzjWgrfdJa91W9hGfaFjCWaefkoVjCGpnnCtZbRdVKziC26SkFJBaVe9wEaT9c7dw5EkyUvzYFCLhUJaNqRvN",
  "key33": "2wLjJZbAdGTpQCfmrRaZosC3ArN3nrfBwzZGdw86uadimMhwvDipG2TyB1xCTWGNU4mpcuwsHCBKEmWcT37DDvYj",
  "key34": "c7Tx1DANx9mgTZw5y9SDqAm6KmrA1gmD4thaF5GAE4qmgxFPQzQMhXtb7qoyP2DuLenuPM9WDw6i7JQ25cXFV8q",
  "key35": "3HGzkBbVo1Di5JBdzSZGKBPUsc3DpsE971FZQ3mQ8E5b9oJMSqSB21n4w4s7AX7u6gixHfpcobAu1ha9sT9qYQ1W",
  "key36": "34Mz4kWJWuJpjiegVr92h4C9ZDzzenSZijNQBheuWFHwPb5vJLjrfLbjrRrunBS2GXCWRqsH2rE5AFvRs1wK8Pa5",
  "key37": "EFmvZimQTtwycgMsdv7Ch8F1iJTZ9VuNhkbPwBDnhZkH7EYx3AWpDZyguE6sWjjgZcqcKNLWQRAx8rhJoiyTHs5",
  "key38": "KnsXmGk6FzXKA6mQKEYxzPcwoGQ4po7VvRHRk3xZHAxapNWXGRtxcHt3JiHKpwvoDX8giLWbrGi7JZ479bRe6iW",
  "key39": "2zrz1VhTMUkNq1zc46r6tFxoKWwJpDZAyRw8ERqc3rNchVxDgpb9MftpraPqFnbtp6rjSnzUR9FwknDHdwgHG1ip",
  "key40": "3BJAds1qafRbFXmyA2YyuY9xEKbSUYJqtXvtJjMZnmm13X4KqBz1jCang3g3jk65Ga9QSYh6p3P4vgCnAwK7pCK1"
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
