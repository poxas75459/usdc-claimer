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
    "5aeynpqmP3y89actE88ujMv947ZQ1zsbY8As2FT6hzmnVGfGNEWsw5f3fceHNomngnSEWAmz9P2KHc2Qkvde5e2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sW4fvPaDonUsctfPrP1n5aVG6zu49BXxnU2tfTeiHdbtygEUgKkQmHTM5q7hc1RrdnNKZNwE6cgKnQfgfcW77M5",
  "key1": "39r5qVGt5s4xYdqcgRwV8D2WKSoM8BK86WCAcMASA2bHWWZU3Nt1hC7Zh7wqMEFw2EGNLTBTSxgPF13Uo1Nke5Cd",
  "key2": "277qPp5f2gj1opP3C2MgDXc81aA9nWLoy1Dm5SiBjg46qtK3zxuhA6vwpBQEt8QF2ZwPVkFdPxhdxmTC15mqHV5T",
  "key3": "zaq5ucLZsMn91MT8HSTfgMs8RFBMSevpYNkBTtcjK2pkMNkEMPaMucgg6nRpNQ1Ec1ytLUzh9dYnnfrgMYF9XJE",
  "key4": "4eDqaJnGv8GMFsmFwoUQQcdK71HFMyT2M3Henz6k7J5ppLX2HWFUniWLGoHpkjnV5kLN8Ts5qDai2fZrdP83zuxu",
  "key5": "2dkJ86mS7MSuTx5J87K9GG7jqnFnxm5sbhDB3QaKHbVRD2wMQyAyR9ogPDTgyTrV9UiLx5kJBodGPRZq3AEQTjih",
  "key6": "2ELiYG6m7UQWTbeC4EoXhrXNirajn8BsxdJ5t3EmGdBquPc3eGqSrS2U5Vx3HYgJ4SddmjFzw79Nvr4dsk1YCFpk",
  "key7": "4Qs8tEybmj37kzGCY7QdeRYU6wPxy8Ua6TwAugZia7DScQyk1iZNSRgtjBr7q8n9v3h3HZ5gpzN7DGGVJUpzAp5f",
  "key8": "3GQDMi1E5ZQqBrjEjmiVMVZsyJTJ3VrHoHWGUwptyM2pGYcP19X2cevfkbmUSycbsrQn1sLGMUVBEzQ5LWa3SMub",
  "key9": "3mgRPENtnqwERkLjQjCxw5BH9Ws4rMUr6EyBuMacovD6QbmSXuVN7eUp51RS3DWPExfp5QkV5VREAT5MqwZL7DJi",
  "key10": "5YoMRVtoYawWsYGAG9bKmDHCwk9e3H41ZyBuZAaFpH4pR5NxqFH3CyAYbFZpWSSodwbraEp5fU1nn4pNZ4aqs8rN",
  "key11": "4PxHbKpGwkQiUAoo9P2dGcXdYdBRHLiqqBGmHGYJqWAWoNbJqREFazjvWg1uw8tnQxU9ghhK3FwfgZ9pPdKpPhrk",
  "key12": "3UGqvh2GxNJTHoRE7U2gxBYAyPncBDpZKXPBwrb3vGHAv4oHdE4svBgsLrJQrDFN4RZ5ynnQF38PifbcpBZr3DY8",
  "key13": "3uehfrghtS6Zxdwm9KpWFq5QNPLntkECpMqtyX212zG2zivohLgnYJnJRCxEyQAYbdtsXVBq9DHzKEvr813k7rBF",
  "key14": "22rQ7csah8HQNFkKDyQ3JGNcuaeBNUUKNKx4jFsbVZJHKbUtzo9Qiy6eccXq3ABbxCJGdCHDnANYpFCKcUuk3kRj",
  "key15": "3djWYWBBNHiGEgwkzahzXsSkN6snG2sStEV2Ltz9EGj2uhwNmW4PUgWRTKF5Vcb5neB45W3WVAFsntq5QRScjjkG",
  "key16": "xmeFYtVdVWTHAsaLgPZJuWJdNK1A3sAsNEP28dvf5LpQrHKZVKuwx418sJ1AUvvZvK4FQvX9YaMCEWn2EgRxMjp",
  "key17": "5VRCxBwRWfSUoMKJi8WZCK5kYddE3ikGQWMRRXA5EBJHiDFqY6YSzUh5P7yxtd8qgUf6yCuNsyPycNyNxFw9vMSE",
  "key18": "2tocb5tPYYBTwQPx9zMXCC6YyeBbuDyWeQETQFUEWcYrocLmXoTs5qy1HfU9S8be4BP1gr89KRXPSyZG9pExGmj6",
  "key19": "3JopSRGVKFNc3cAV2XT17WMxf13JEfG9ELmsCasWJdzSTcxHp95jWR5FeRrunCLmqeZZe42PcGVnjQVzAsxFaXF4",
  "key20": "4VtFXZeSsfbnbxXv1ny2qFpSSWCqDBGHckLktVvRMez6Pm5N2VJ2J34uyMm2ye8X9u6QFKzsqUEerwJ5gpbdWuX4",
  "key21": "4j5UfH8ixiEkiGnxyuZXHfGAqQ6iuLcRvZYHEPkYVbnDiUoU1BT4Z4hSyJURH3oJxaGusGyuLg3EatZ1haPxPgKu",
  "key22": "4cpaZSaW4kepfT6gZivrVNfUaZDKAHXMp9P2nedK6R28ViM7sN2g5CQquV6JaVCbW3vuii49AeHksgdfS1Eiyk5u",
  "key23": "5duA8zrv5fGoP6Zkqq3My3cCFraTP2EGqNT8wdrgrJRr5UmaXybR2zZN9bpzK1ytqczETWhrBX6Qx83UjNadmH9y",
  "key24": "5oRkG7BbkqwAnJRjHjfK2eGcxaKv9iCQspAgUN8t7XL4E5DTiBfEJTu8UZ9xWMte2BUxPoKZKLupmgTeb1maqydw",
  "key25": "4sR3wK8aYG6K4Svw5UFiYUqRVtS8mCXGa1Vxihx1Nh8CJ9i493m2dfTjp11PkuRdoP7FXHdy5SJUAn2pngU7xYcF",
  "key26": "2EcscaLJBBkqnduziMrKcRx5GosyouSzECTt5ERQbi4kB148N9JHEV5hvsi2Whjf6AGJfRG27HRTEV1j8CUzr4Ub",
  "key27": "3JfcosFD3t8wyeYx6MLcWaYYu9tviouj5VcRuJjVFuoAB5xHuny91oM3cMYv79Rf89FYfsm6xyY2dri7FY5jJNSg",
  "key28": "4zafEyXVNX4G2q2K1dD5eyG8yQyTwGXrNvsRQx4M5NDy1zUxEAcLKULKAoP4PDhWcMorJTeXqV1sfdL69ckfEdN3",
  "key29": "5Y7k4DeCWCYG3Jp1FtvumaRUTgW6NtKKbEA9uL1NpyARySn75MpTT7yDfi2nLdtoT1pLkT6FRk9YhjZSSi5nTiUi",
  "key30": "4hJnjCBcLZWzgZzBsZUUTUySgu4MpGv2TT4j8rDaiZW6g12TJNTgJrdPM5PwiVKPhUT7pYaypWjPDqooynggNPtX",
  "key31": "3ycirnyN5wM5ycxN2dHLkXNSGw9uNPRSeTienMtFe7N5ra2QcnVLDfA5Rv4nTSXaEpUZQMrfYZDLSDCxPhFAoBjG",
  "key32": "2KnPZBnwbK8YKnCSacZkgRUoFQ6R6iFUbLCffuGHvdn4UGQRBxYNwrHvxDAiKkMUmjYUWkytpUk7URv7i6CsDZfr",
  "key33": "4RieTCBBWujFAT8Gioa4NsTztVPV1RafxL34ZTerkggWYZx5NDkqj5fwNnfKWWMs11yZTs4qcdZj5juRWW9zTeff",
  "key34": "3MePTGbdbuRtpbxNEqhVK7GYNzVbkoRKWajQD5aZe4FbCee4EoXtRJKHsnThEcTYjNTfMFyvUoqmYdMrnKZrhyLA",
  "key35": "5SNLATDJpNfeTYpubVePy1fm2tJBaMw7nS1SqSVpZeiakheffKosaHnZSBSdf5YkdZgKFaYosCxmYhY3pLvFcnDB",
  "key36": "5FZTZAh6Vx3GQfjVnMBAQR2LUYwYkPQJ2DYHs73A56y1TYR9w8Ef1CJhzWiKntA6CPrPgpY9SzoRRHPtgbMh8V8E",
  "key37": "q2g3yr5NQ9TRK7w2BucZCkeVMp3VcxtM4vCP9KwMZYBNewiyoAJozxVfzxcDKM7BgCopBrjuHxbNyykusg8S9vm",
  "key38": "125FHaZHx1n74VjTLamPjiwqKDUrGhjKrAL4MMQEbZSQKtggojLXmpZgBUhyVQvM4jLj6XYsf8MGp1nFGhcvzg6R",
  "key39": "2nAJQMXt8uynhUhA34ndJxdcq1sbHqsbVxgVKSRrbw71qzRBmndhTPb3v878suG9WcKcyPEcgJZ3Rsm9du7rPFmG",
  "key40": "5GJyAzFU4d296TF5dfsau1Dy6xEeDFyWFgiHR5Kp6URw5X6wQRvAR3ffzpBMrzTgahfJ34XjfrrBUE2V56Cvryek",
  "key41": "2VKBYSu4P9ktf6ZfaAyLeuSAdJFZ5eHsrct8oU6L8gQujRbWuBT8h6h7UX5KpYdYBCR65M9vdgCGRoSVLqjM41S6",
  "key42": "4rRmW4o8MJNzktNzJkQZ54adWdMLFqPJiTtQFU3Feem9tjXnwiYk8pabZw54jBGEa8J9URb8Boz7inTZNWGkDxxw",
  "key43": "3PKiv4GA6MuY9GaNCqoQQCqT73R1zJzvCTesFxts8YuwNpZqZDnNU61Ww4cMHMTEaghdoQ6MBGKvtkyJghAQmLPN",
  "key44": "2nnv3zMqyE9t94ZXjm1e4paobp9h4Kbv4z7YU6WBz3XgeYheSTA5Zn8AZaQWx894RzKTYPThhtPDbdxmGijYfaCf",
  "key45": "2ppsr9mhKjYb1EsqD6vkNx5QHyvtBrpfZx9TEtaYfaT5RbxEjve9hwFerSGQVzxr5gJKfZyc5UZet4gGH6Km4LJR",
  "key46": "615A9dsd4LKWgicT4Zq6xvRXs2MBfX5ns8JWVVEWhRHPyVmHEYEExPSN9pCk9HNbwwFTM7AVYZiiQSvCtRFksu26",
  "key47": "3svzZgZCNGsnJn4tzZPmoNBrZ1oKbbggReNxoE7A9bj7TLQ3pPZCbXjvwjugdrY3F6soEXgVYy5S7AHEqurFtUPL"
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
