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
    "3cz2jDVChsvHFBSxv8uzygqaJfbQ93cM7CfGAbiQnyWi1caNx8CGAmz5sGRB7r2CheG8KmPBgVGdQ8bXJ46XuEJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJVVkBu53rapMjMNJnkbvAgkzzDWQAAjo27GDh2dM4uUR8DFQVphebNqdXWuy8SQiqJt6vTeXU1sikdB3XwoPLm",
  "key1": "3DEaF3eXDXwDsz1VdC6M8RuBYFchJw7BouiK6BLXwR5zUgDyEayEb8wLLavh5ZtQ12Sp8sGKcnffKDe7JhwDdMvp",
  "key2": "4QihdZ5CkvbBmuQUojBwbGfzr8CLeA1LHu1f74uLs8b5UmbCBJzdWB3DJBb4WGPvqNft7iR46HuAbfi357XWjEED",
  "key3": "4LRZQt24c2Q8xxuRhQKZvFbrxEDCKky28FqbUvphBFsYvNFnZCcti9n77LzgaVp52RMkLkdQnGdvQG9UqM2qQyJ3",
  "key4": "4RXeJeaAhf9F6rxGma8tL6B8FRK2J8PBAvv61WxFwv2y4BwoRhCQ9zpdQa2KxXKi6Xgos8ULG7oHK5EGEhjhzRUJ",
  "key5": "2PwGc3dfurcpZ4ZXoiSkjUDpFFVsyMdUjZhzs7jnUtnB5TozBDvtDPCrwtxozNwS2bLYRSjLWZ4Q3UDn71in3QBt",
  "key6": "5vi4NtoFAzGZUXP8Z8oZn5P9VxvwoFT2TEC7mQbLxtXVYZcsvW5DDzqsjXRPxrnaMXapCTg4FamAmhW1ABLiuu88",
  "key7": "45fRiZXhVsxTf4cdKUHsk27QRQPn1h7H9d3NXzYTk4J4VpaGSX494xob6ijKHDbwQnZkfDLC6udH1z1JsVLGqi3u",
  "key8": "5xxHfspx5oid9bsUYyMX7ZGynNr4ttxpLk3R2bL8KfzWkgKpXifaqr2z6D4Ya2XqTfCEYENcMHDuwWmxyWhjPbjg",
  "key9": "2CAomzWANv6JCMoCtRQ7XUsvqEMGfvS5es62LY925cuPRxPtmeQqAKScRMihys6SfUffsRmNriK27nKGgGmfr4Vy",
  "key10": "3mXeXc8mFB18kJWo2JJytGZUaoQ8ELYskBT9Eess9rN6LdWUZrBQX9AuNHnF5rHm4zmXFbcDkUFdsXec4nLRn1Wk",
  "key11": "3Hw2zqx9YfBUiDwtMqrez6nj5vndAnXcyNEvnueVY48R65DA78fEV8J6uPy8q4MuTLnHv2ZSmre3w2fwJyVuELAf",
  "key12": "4Z2CkjNEnehPkSxNeDD7dSbrX6QBHgV6hb9CzZPHEKyeiFvGRRAq1GRHnwLJzDRyQawvwRiMiUNHjF1bh7rdPnqd",
  "key13": "3GcPpnEHbnTc9N245cfocZkQhkNZVPRUKKtczbjFi9aJxQiN6U8thJajTmx2wgvSZao6jg2sy1dYXJuLiZPG9f9f",
  "key14": "sTEZ5YBPr5QbuDsyQRVcKM78kgp5rnL6zULayyq5VobU3n8CK9B1WWSvzVjPCo4hF8d9FXAQiY4nKUD6uo9aQ69",
  "key15": "3eidYcwnqkrTiHz35dieUxb9tAmQhTVF2V5dj2pdTqgm2Xotcc8ctLRhqB4kN7Tm8ApHHLaWfEaUp7oe7C9ERJjE",
  "key16": "23ZRpSsCFdZTJ7h3xztniGt9WEGMDdaYs22jiQjMezuvRSkk9viEnMoxYaiAtD91Cj1Vgx4grzcUYAxa2yc6cwMy",
  "key17": "4vHfN6WKFBwXmHBv2nA88pb8Pphm4dK13cGcFz9YA8Umrwy5xHzk37L417zB7oxbjMGFQBJGDg4rcNFF5V22AEFA",
  "key18": "3vmQw5KXFh45CEo7PE7AaSDfqxbS8cTo3Y59WG92971FV2chPjMWXNLcyxccmqoCZj2zmBhVzaHabEm6Mya1ibng",
  "key19": "5juvm7zDg3RPqcAMGJ3dNnYmdTBxyFav5yWMdHzK1VaFcGixyAeepv3T7dL63Jy5dW1YAR6QtYQwaASc1F19bLU7",
  "key20": "7kVRcWbSzETPBpEVgW9ecaYhDYBLwG8jLbvCRKLMYX7UwbuP41xe9kAApZwUW5WqqwuVGm1qs3hPoTrf2mUVncD",
  "key21": "5S4MXVLgzs8eahG15oxeJqvhV78EYsrUCq1NhKQiYoZyYf1WgEjeaFc4egTb2BX8ShdSB9goUzRzmMMwvfNRW1us",
  "key22": "3eY9nUW7HFNmniSrswkN4J3Gw7J3yoReyFWaE3djKHJuokVpLiD6m11MMucgKDrL2E2z3AQAXfY32N1EZmFDfETF",
  "key23": "3VQoXSYxkakc6Qot8rzw9v7jdAMPPZss6uzUbrFS7RvaHkDNXnWQrmLFMuHFCyFYdzTzLsaBsQmnRQLdEva8b613",
  "key24": "ahD5Ct8oGm99BTfbYEQYWZbAMRmnhCQVpdLbTpxqJUE43SakkKasEGpQhKhjcUeTNxumjdRN94GZnazW7WkJeaA",
  "key25": "3jB58pZk6GVaJBVJ6E9sYuMi2diqJ6j6mw29Xz8hZf5EfU4AmHXMx256V1XVZkcQtA8GpKJ8dgyAP9b512BfLyg",
  "key26": "bPoKM9Adzzzpi8seJVfhbCTZszwbVMVRQ7Yg77S9hGHvfTG9yoW1Q2Qg9SmWQJ2TbZtT7ufLaRiA131ngnXis6u",
  "key27": "5QQ7QjkQW4GZHHbVmpn4yymxoJJpcTvueSCSo7YzhewjowYqBbMzZfEPUXWqigFYsDtRkQ6V1icW2SfXTfCAZFo6",
  "key28": "gXodmkavR5b6vJmdYtASeXBeGs3ECoZXPsoNBYh5R7EHiEfdzsCKyNuipc7uesyqmjieNP33zaQ59rKY99aXXtu",
  "key29": "2ZPyHFtSaxqb4dztnEw4Dq3BKvzgitTCXwrh4sjXi42Ay6qAieN335aJWYxBVUWX4Ryep81ihGafhpvkk5whvdS6",
  "key30": "rPwgyZBtWWygB3XYzQvrXdMy9aP2WQvFDFJaYdZQt8PgX3ZDnrXGxuGnrzLcEzkDHq9VsVHc1Ld513pDxsxJWMG",
  "key31": "5ppPLkiKKpGtB5vcuCmv3QXQbAzCXvfq4SuGYpF59QVN5HJK1A4JSSKHqkdn3ectiRP3FtVfvWVUQsr4G6DsYvp2",
  "key32": "42WPnBY2eGdvmCk6urp6GnqgUUiwHUd9T8JgwEDQSnXAdzBMHu7wGsJSns4cDHpPPKMxBGr7AQ8Qvmg7d3t7h4PL",
  "key33": "5sEkKJ1tNMprXDezMk5cwEmM2q3ZQf2adqoSiGy6fvj7HVk3dxGKVAhamYQEFur3YhuCMWbqHY6Z79B293vNoZBq",
  "key34": "3Z9KQFzyPAm1P5pf3GWK1CZB2PewBDTfCwLhkNMw9Nkst6guew6MTpN7sXe5DevjWcwdRc1uGt89DXXuNw1QeV6e",
  "key35": "3zUVxnDHmtdhrUpiJbARLSVahkQEK33qAdhMdwaN3YYbtgibnEKFrGoRiQuUn72iyrm3ognegUVV8gSQiRBFan89",
  "key36": "zmck3HdtBZpemzj1ZicZ5xG9zZxS8XGDMQLxm4rYSonfCGLWGPhZdQWYcGK77fpD22p6PPdmLZBmco4s5PCHHgS",
  "key37": "2oQ6cubxgR8jU9JYJ9qisAmn6gZajKjgSM6p78bcn8GVdQUzTn4neWt78Bz39d6dnVVAuekA2bFrNTSwAqK5QS6b",
  "key38": "pSzKn562dY4ZVXxFMmKMs3wmT7omZ4RcWsSYhqwxJjuoxcwoGNY49XgpNcw5VoQeKNHq5QqDjfJ2CMhQDYqUtBv",
  "key39": "36UXx3zBkF3tahAjkJPTnWi4eT82Ky6g8U6pVmWTLSW16WPHPrZG5BBNtoxuTbzJatYZpm3kJ3R1Qm6EK4CYfyDh",
  "key40": "3VSwqYuDn8EPdvStiNiYwg9ZkWeebFS6aEJZkuJmHB4SwtCfsDX4a7nutrN6b25yWPv5juA2vo8Phm5fNjj1pPQf",
  "key41": "25wAm98arKaFYAeqeqET6aRhRyoMUV8ZNwSRteTXWh3MEZaYT8Wd7wf97BuFjDDrN5nK5BvELRzGpDUTV9xVZbjT",
  "key42": "4ES1yX8aHBfkDSoUPF2Rw8z4wsCCkd4mhwraijbJXSmymvi1g55TMP7vFqBQvxJ6mtCFEUjpmJ3GZGMTKZngbVXa",
  "key43": "63RY1wvAApL4ZrRUJNYcn3bxJWEm3amjkw3WdEF8PfdXAH74GcEBHDURFbuCK2hpVoH6Xo6kbKZTwLegX3dbc3Gi",
  "key44": "2XzRbQ2RJXcBeSdeRXsxs1ez8cacuv6mDugiSWrudXiQERdWpyQsb86JexBifsAd3iVTqHRDwuPi5vSUnvd1WxWh",
  "key45": "5tBKAiAhw4d8a4RCQGgWewb7JHh22kWEmSmxLqLRrNmrULRSqeBoMiLzAFEVTiWqGtsyKPxLFCKAapGaqpqaQgoE",
  "key46": "57PmY2gfQBGR1YAzcJD3QYM1fiqaPuqRvsrD2uNjcvWgYHzRAN1KNZ4SAifytPKSBxcCervFktTyDWMHPyBzqWtK",
  "key47": "EQwmBRK22kikiNQbuFd89Mq9AxiUot9KTAj9iWiFVHQDssGqXpZmT7VAUdQfuupuKDctLmZY9rNR5Ge3M6iY6pf"
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
