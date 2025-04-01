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
    "QKM3TqKggP4UpM5ZaxmsLRKs3fQ8cwcHzby1pQUPYhgzJdaatsyMLn7XQK9G7T32pzjtFC1QUPBqmFm9hrTatrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvRcGMh8wtcqc8DKPzgLwHNVQGbsaYV1K14Kh7wPuChq1fEJxogmPtaxuXWdPUFw9UQDRVGi3T1qNFdDVA1b2BJ",
  "key1": "2P4q3uPFJe1v8Xurib2XeiRVVRed5P11yBqdovEXcRqhEC6SFbBTsCb2CZZhorgikUxSeZDnNj647YdxjSUcaSQY",
  "key2": "41u2JddMKTFuomCMYZBdzwtVafEtxKbzyhzFzA9MBCXqXixFNrVbtZuZXVQkGDuUkpnMc5ziJHdymY4n1p4zFarq",
  "key3": "59nVCZAMDRd7xHzz2BTm1Bj4DzM8raK8tbuUXhAcAGYeekREZEf4aGVnSxoHbvXc3HuTE5GPBa74gi4whUFfNjfj",
  "key4": "5zUfXGvfvoiHibHEoHbzsAPUVRhKhQHFNTEYaZzkwA6oxM3ApxVLMFAWufL6ML7AZiU9cDaPbaPQv5kSZNRpwWu1",
  "key5": "54aNTnSCmoFWiLPbHMq7enWccPGsV5FPwijJJ6qoqzSnxUyab7NpfwpTh9EgAwtSZTN4A2s8avPiMjvg4vLDdzrk",
  "key6": "4urzgRnMwcMfbijVwULk9vaUwN9jLq33tBnuRsrcN7Z29bw4SpTVbJJpjFbvZNnbqJ4sv6DuXMmsc7bzSydZuTjf",
  "key7": "2PboWc2Uzyexozu5iWaFYtaEFW78hMWGDxyE2afEiq7PgNCX3XEhHaP9zUwJ5YK3A2vr6uKYzcATSyL6XgKnSkdm",
  "key8": "2i5msfxU1nJ1vEb3d5yoNHLouMS1T45sn4AM8Ht2oPLdmgGovBgaF5tSX7F4cAfrFzGE7AtmoEtsUHjV34QDhuQg",
  "key9": "41WBJ9Ywmhnyg6yyM8U2tcGEH3NnVNnekWvuGWMTKLAJ1ALqwNY6cNBQEb4KBYxnjiqLbELiALrdnyzbDxK39j1i",
  "key10": "NomsJg3Rr7fcsdJtfyTG5wGh6ifT1yexxDfa9rXgftrvaRTuEAH5S2eaQdMqU1BfEMMpQuVVYiDnDE7vZ5viYuT",
  "key11": "wtddmwDqUgnufNgdC7B3vV7eGPxjBU6vMHK8Gwq7FXdN6UAR9MY8LuBofSjWPMhn8tV5h9is9vY675exrpmcGza",
  "key12": "25Xi2qAr4f9SiEwVTzF4JX3qrLFH9zY5tGg4CHTE1gNVZ4NZCHQGZYajPbMspy28A39fREQENxwbxQEmdciPhZun",
  "key13": "25yrdCCxdxqQQxBM4nU4zNnGhkdEaT5piHmwYYKMZTxJ1hdNwDiMHaaqcUevPu5WhpdQySv5nHcyJmqgKQA5Homj",
  "key14": "61m3Zxr71bYLoB5L6xhN8myeQ3FUgo9z6uqgWXuHGbesXvTyYrkegxP3yKs436DvsrFqUa2mQyU1mQsixS8177yY",
  "key15": "3QByx9skuFDp7Lr387EJt5PAPXqFy9JmG5qGzQLbhyYwr5wpJc8FSffhESGJ8HivtMjrhgqSJt8cpUWTz8Rd9ys",
  "key16": "nK5qQVhbiFeQCUjkGecQWWhiX9TMbZTnRVh8KmjXboE27P5V7YNvgSCoTwZbbheZXcaTRCxmgD1AMfdsKSVZwEq",
  "key17": "42eugKajSZCPUUBPwX7ZEcxhXWsLooJn2k4xnUjJ58jjVWsdF5RTGNfq6vMK9DKMyzu3ccQA8HDBZTUJ62fYdvWW",
  "key18": "5u4qveDfH2kP9ipfr9JLYeceQqLdrMNreLaQSNjXvMLj83fApecP69WZk9bfdS9UFsuHJu5YYdaMGazHiAKTvbp1",
  "key19": "5ZA6AjwQpyBZ8Jzo3rYfzAPXXGQmDZxhgwXq3YTYP5UUaXZ6pV91UdPKs4aCANb2vW8B7xGs6rZxBZyn5E7g3JSS",
  "key20": "5WA5YgYmytHfUMpNGuuHV39XijPH2zYimmwG6f4QMxuqVMstt1fog39Rn59pRd7tsePcDFVwFCsYHgRrwK7imvBS",
  "key21": "5Ny3qUQCSjt4batopKUpncjmRBzdhNh8Qd9L8UeEz599d3N2APFkSb8Re1Q1NVE5FUDwr2y3c8xyMLeioiphjmh6",
  "key22": "24W7JsRwi6HcenyNFXafdJaf5aT28CATyPNLYqL6zt45p84piGvRcXd7CCQ2fQdR76DSe2qPuSheaCq4MugtMnDs",
  "key23": "3LX7LvfipvDkVUdWvrPdiwWJXwnjAVsqkvuKHZbc5BKv5shpALxEpU3suQD84AfmAGB71kzQsAeaWRFwTJ6GNMeo",
  "key24": "2dRf3RTTmEzvDC1sdYouSqVFLtqMyZmvCLbknaY62XxgtuF73RSVaHBFe7gJSifEntpdHSxxF7hLuadE9PDGVqDK",
  "key25": "3d5BgKDxP7jMQxYscjEm7uBR5sgmc98knacYFhPDq4jvrDgC6fTqZGCEQ56oSFkEk51wtzixjZZVvzDu2fkFxCwb",
  "key26": "4S89cKsgWDN8NG6BVDa4SPLQycYi9SFxpVCQAYiDNL8Sud1VEZQ42WX8YafobfpyVYUXAbRoPecfbqhDsM6FSdYY",
  "key27": "3hDQ2QDhTAzMRxiuT4ieEYovxrkBKhx4gKbpvvcPPmAwNoZWeV4Pe1a8a5XNB6VuvkNE35KPyPb1S4dLyDPcxrCc",
  "key28": "c2EL8Ai1hDg8EmEg8VNRzxvykrJG6rXLGskFy6rqvRpVH92RBSNbaLZp7BUuMLwNRn8EpFrV4HskqyrPLEK23tH",
  "key29": "3mxwsyLoKD3G79govkV9DKnaF9QKuwetESvquhYUtM19UtfxtqusH1TXTd5MKyQbmbmNeaUkN9w3WakdwNetTiw1",
  "key30": "3u3KcecAEaMqYsswptwgskTqgNrpGSda88dH9pMtqsn5KFTeTpFyjDidR85QomJsVvNNi9248B2kv9hvmR9XR1Gb",
  "key31": "3zTUgPSFGroTx26UXNtBfq2DFdN9wVwJiK8A8wrfeQMBEKJHJQrC5M8CCxMnkZwiHETd1sChL7VucCcsokwnY1Bq",
  "key32": "2SPMoBvSnHmicXNw67e5PpQrQs4UedzBuLBMoHsFVfNHBk15s6bdW25wy51tGSeVM9Fj1UHp4YDVD6bnBDyH9gwm",
  "key33": "4cPJmGzv6p9GhNRcUpK8eVpFEHyFKfQ65qqcbVcRpENRZH1v5Vaj3Q3Fr2eiRzvGqhViD8LVyzFEjicUAt4j6z2f",
  "key34": "2WBa8AvjxVbY56ANM6YhWwNPoSe4oeyb5eG9CD3fZCQ9BtndDyHBhGx9CLq67s2Ng7JEmvpAXuN8CBrhkr245hy2",
  "key35": "pJUQhyyuXryzjpnbbaPmHQRL8ofYn89b2B66skK7hrZ25cVp5Qkny36dFD579X2R6hXKadpL5yTdDNxS4inUJHH",
  "key36": "4V77XXgE5eDqiSa47G4Y3WbqaiH1qizJUWzwJLgqL76W7ARXUd8GjMtyuLL9JHX7B3PH3AKJj5AajACvRYmzgTaq",
  "key37": "26WnxQPqeWhMGU8tBaPsKux3XzGqUBTySZuAcDoXhe13AazLf7qDPdrnaahZaqEpQivGcDKeMdft15k9GZ8PM4RQ",
  "key38": "5hjHqpZBuDMP2UKoDNtfpQpzu6vuQ24qKVeUzXvjHo6VvuKX5JtmB7nV5dYytgaPfVU9DBxiqiXKhWPrQ1Map9PE",
  "key39": "qz8ayhaeViCKBRr31YnJzxfXFDQvgfPJPp9CnRsbcxyDQfzdfe5n3QNwXRcKkHFfgtKxvVnUkg7MGRf5unhHshd",
  "key40": "2wek8H2Q8EwHN5HMTJep3EZFAEDjL4bDErUDSqotTfc7NGVZiAZqXKfxW95NCvH4dEqJNbjXeFa9GMNVKCG222XN",
  "key41": "3XGdgEFCiQ2uAFnkawrjwJdAsJba2cCkWBbjZPNTJpao3pScvML36hzsUYsH61TvYuakKckgMGt2H2u9jVbgEAvd"
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
