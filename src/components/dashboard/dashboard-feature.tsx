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
    "4KjxEYPojkLGu7zPv4VZS9tB37TfKoBKZCfmZ5Govhr6SGw2Gt4FQrt16EvG88tNPBUtzWCG7wvf77Z2NUTE2cpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abLK5w52NkYQZMvZ7u4NZLwCBtAsotTv29ABHLGh8nkHZ2qSvKZbMo1ruhgyxh53v6LXyMJ865CsSw9LggXHsPU",
  "key1": "5AbRExEAtAFryvb8PLt2EfN28BCKaF2vN4o8LXPGNuXKp9SSmwYmofWsa56jueXCWYaVFjf5C1xhxacqfCmHoSBg",
  "key2": "5pCWjdrBHFr1j3cvzeeP8qA9o4qdinPq5hj28f3uvmrzrFB9E5BSSRHm8GPDNrxn5QB8Epiyy3ZWu57BiYvWseBq",
  "key3": "ipx5ju6mF1Yn55t9Y9pn3ytMQaSR2BKtmw7HmXuUVWAzZUEPqypJxpA7gFtEFpsufTRGVzDRqv8TGbWEQ2Zu7L8",
  "key4": "64P6uwXYe2JHV3SJ6PAB1n2qt4gHFLT7bYUBFTPhALtx4qeYWUkuuzmZccThqcBKn9VWbsRsArQFz4nR1MAkcZgQ",
  "key5": "zD3HQrUewUXSTM5ut8x2rRLPiLmfeuqonU1bX4eUwtbJ78u46eYbf2Yb4vvhnCZC33DogrBoxoHaMuASe6csX4p",
  "key6": "26FcxNbjo6bbSkGJ445d7QwuBwTVk6HWqU2EyRQ6GDjLp9RK6vM8XG4RMErsYZFyy8Rmo4KKcQ9o6UfM26JfCjD3",
  "key7": "3HpgRgt71hUojSU3hDNNme9GjGfWbsLtJoDZCV4Xu2dM2SEWGR2ypvsc53w5LdpJHx7ypvgcCPLbf3Kxqf3cVX8n",
  "key8": "5HEsmmevfdExTGM9NeZTMgtyZ239gPvKVEGgzS8XSeReHVE14izanDGgjUGj2UeUcZ1GXSY9kfkRb2PiF5zYdMEz",
  "key9": "5uEHMChAt4edqoB3Jge2bL7nABscyFQD22UjsQw4LtRxF6uWXUoMKB6CrUvYVgXR7kAwsnNpwhkWADnryjM2cPhJ",
  "key10": "48Kraj2jpeY6c9JTE78fhR4K4FF8GqK3mMvvCjGfb5pS6DeXVkg8gms7JFDWnvEPeH2BSRFLqMsVLRYSu6Cfj4Py",
  "key11": "iw1SbssigEGnZPaxtTkhUc1CKCA4XxSkX2Smv8LhHSHGFnFjD4vY83YgwXed5njUabANxwvjE5wWeFiuM83ivWk",
  "key12": "32kVVw5Y6DJg9Ar4k9BnZkmbmQmymWkWGa9a576XsGHL21wr7CwB58ApAh3gn4C1uSeuhhAkWHDXgFqwGDyuKWjc",
  "key13": "4n1eKressFHBM7LLeJZsocoDrx3HNtN6P3UUJ4PwKCAawBjqcXAtTm8rC7fRBaLa97Sq4L5vf5JPNBKjhn3VtSKN",
  "key14": "2HJeCuDmNYQQ1wHxTuP9SLbyVobeVqndb1SXMb2QUTEWPABdYCEV9pRYFNstU1xicwv1MT2E3mCNn8Eam28zLKfd",
  "key15": "qvwLxtso3J2qjJi3tLhMrKVtiHRTKavCBDrbwefU2xAM1mt9zU9rGtwMwCkPrw8WhCkx8QpBPiiFhhfkfpcZFh8",
  "key16": "Yf61hcxJfmKYoqUBxkKm7FvgyUKheWBVqRjTf4LNsXdLey6w1KpKxpXuMyfug8xJR9ZSoZrzf1Zp3yDDwSgXugJ",
  "key17": "4Gt4U9mWsMyVvFcJSvZ4kcVfd5zfriUvNroQ4C4y8duwVfpjooUAf4ZLPjKkbSEZWFgmQBbmTkcci9U8hsdm8xw8",
  "key18": "5PLmH9RK2rjLb8acnQC1xSahumUEycywcr2WNFZo3bv3irzfFaDkgrktoLbhEyT2BvTfqXvCW3FGqYCymaDwcNFz",
  "key19": "iLfYeknBQfQnHPEpirLSaCy9y7t5enrY1kVsck9g5MJ1fmoxQScYnFDe8MAaDt4XcCNCYPB1VrBL2PKnVTgGpT9",
  "key20": "5ek1CSU3zAsUr6LphTGd8VRmomKkdUnM13YxGQCH1vdPrs82Zx9VdHBsmTefYeNgngb1JHV5rbtR8sKaBwwWJcWc",
  "key21": "5kK1jfCHXb2W8GHgwQRBS9CV5i3T8XjuWsNERQgHiE84Fy84C6SfzqUHDJaBWzcwvMhmhiEqN7sj25APfJUQJy9c",
  "key22": "345j8vefJ5FuPardKAtPx5mP7ntqzRN3D8Sd5HiJhuHFsG6qwYXLDmk5ooMnSfr3UDkpnYQBxx9F5L6KVwDKAEmu",
  "key23": "4UJ91hv1rb6o2MFWTkTNLD1Va3j9mDg8sN9L8sfvDiUYUsFQ6b4MojwUL8aDEEqst7GkPumye93GwX8R37wAkn7r",
  "key24": "5G6Ypu6fYs5LD5oX61d9PrzkShmfAyCyn3sYKHVUqdU9NP5joGzEJFGGbojCxpbwnGZYB2dVtFUKAcQHUnkpbPQd",
  "key25": "5QDQH5WcFbGJq7WsbSgLNEWGCDHdRCeteMmeYZqb3W7BU7c5boBkXiacPJAgpqmhUMszHSn135Gk8dAEEvbayfPe",
  "key26": "NLRMcjxke6KndvBgxQcQk16xyzpX56XyA7oSKVgKFD2Uzm1iVNRENgVeYGipvrWbo44CFcorBm1rSeLuQuuc8Zi",
  "key27": "3swhrHSgDAmTsF9xwukzkqymDFpCBzNgZtMX7mDxagFu5qNmzvdJ6yqhzZTPtU2wZEtK1Db8dzxY3sm7819kajhL",
  "key28": "3YTttH32tHnbf89tnoWWwDuDE3Nw4wy7y1SkcfErVkFkyut4Hb7nSm8bwSFAJgkvRmumkv7Sig2whzwqKxi92Pn1",
  "key29": "3ks2CDGyM9cBELbDd7AFwARSTpDhggyLoM2vpzXRnxJF4E2xd9gUu9KkKyAcTRth4HeArH913LYYsRXZukoedMsP",
  "key30": "ERh5NVRQQLYkUZvkXVXDDPxPkiG8YpkDWWsqUeTjjcqkihAg36HbUcf8jSsx7JfcibeY3QEKhLkaxTSDiszMRuY",
  "key31": "2s3szr4RucEZz8Lq5QFPGV12t4qhSsuMjkgYzm1apdGzyGq9KDZNPqUCUKvfcPmWZFZPXmoEw2jYFXYioekWxN6U",
  "key32": "3pXfdcMeBERyaoVdyK8vmAN7HUPueJG35J3BXNNncnDfe3JYdjoxr3hydjo51usrZsAF7j1TFkYn1MbCsxHHHFrS",
  "key33": "jTmbBc6H6uAxbAGYGPR3c2XETsNVgBJTs6YBBXfBEXgzPMqybTTapH1kNEzky8NvQQDT7UiMUqo2SsaaN9Bpe5L",
  "key34": "2wUHVDgC88fXQ1rf7LcixhaE5PbcSsb4Tt5dZ5kHBxhRA8cZ2EGyTwhXnYqvtYkFS84iUSY7T1f1gvPHZP8278wR",
  "key35": "2GpndkvErqkn4vQwGzMEZXrfyZDgMG4d2enCqpUbCp93B9oH6D7fbXaUe8mTC85ECMAhF2gzjwibq6uhKdjg21QW",
  "key36": "2dUPZUfJjqDBqsVqa2wA1ASXUWzfNQoEJYFsJCasmnuWiDjJuFrRHZykQb1tkPxUZtB4FKbSiHvEYKfJ8Fs3oTYC",
  "key37": "3sghNQRyog3CfYcC8tCD1xQkQV9zfbctnRQuRPR3sP2d4RkZcWDKwq8Y91AHRknLLma7k2pM1RbqfsYHRpBdM8R1",
  "key38": "DZvXV2yJEkomsst1HH7PRqcoSiGBuWYC2MG59qUuSs6yK9Qt4EUN5sNAkM6nrfckEKQkpdTFtZZrDDCd33ocWg9",
  "key39": "4yRNw7vd3aBLgfTSQG5XQsM4z1H3zZxama41iSvHbyKZiAC8Bwd6Kifr1WKPMZeLaEL1nXkTjErHEGUbLkNvRhD6"
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
