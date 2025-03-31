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
    "5q6cwfgRbdYQ5ttA411XBYw1HD9AxVzM3KM8Hxv7V7kzBM79UymM2aFriBaDydZqstsGzTQEaYSQ9kY2xAe8khJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1QRMe2unfHkQ8JJnRGLq7fJxLiX1yhdgQF4VvMmckWyopANKWUhKyXLXdFsPaKyJisAmoLLidkkscfT9NRZfVi",
  "key1": "2YJpWyr77wxYhqQ6dJYVhNgVT1Mmu2NtUzYKLq58ZDNiWadSJ6i7p7VeGtCV8nqwwTLAj4mt2psBAbFejYY314ei",
  "key2": "jd2JyoNEVg3YNXdUytEMBD6WHB8yFeTZpFqVWNGn2o9SNXv8bBnkwxFWvDPCNg2uoridQLQZmGLLmg8xLowwRzg",
  "key3": "4Nu57JSqbZgZSMCwdntNxmGMuUHJSoAz4QtzgrsFgFzufxTJUsb8W28SEu1NBhViJF7guxttpimHw8esMonhzdLf",
  "key4": "2D4oFcCUsbNM6YjmPFtFWnQaAaSf91N6zMYd2D9wnn6TXuLExYbtML54NNPBKM2opg3Tt233JgW5Yhc9NMUoJSaf",
  "key5": "56cHVeKWV5MZWxQSB1pBxNRD1U8y2UQ1QorxKL7NYAMGPvHFGp43FAyQCHULd41tY8PgXkQB8fns94RSYyWmm9PB",
  "key6": "nvjnGgDvVPdQhbWGsV6Kq5JvPjktPwszd7izU9TnSfEGxhNoZLnGwY2jun9rc5iWZoKMAeAu5NaaFshWyqvMcwP",
  "key7": "4uyR9NpRxbggdEtEYASP7NWGrfRtEqdaM3jgqRSYg9pVgVf8CrkD68MzggYxvcjDR9U3cGbDrnxtikpcBv8p7dAA",
  "key8": "5fjBootcor5jXNdegGdpMat2W1UxPs6cR3DrwyGeZzsFaiswtX8wwDsFsDpCqHDpsfwancNbGaLdVUWwnAUDfi99",
  "key9": "2NyAsac5gVdWLYFfkd5kpkTohn2t47odHJMxCdUkFjjGfyxe4HwTj5K7zbAYct8Dy4cs5gzgEPKYAKWQmAuEp8oC",
  "key10": "4wDB82irkkXvWCfxcTXdxZDu5hCLzmk8J4hxWjGFVMxyzuj5qFDwZWbHsf2VpnM4vzDyiHR4Kv8BQo3eZqv6rcJ",
  "key11": "Dbo8KMenAs3GbXpRYUkEgi1ouPzizUkwdkdQnS7D5otKuyghT3vvp4qCsydnZDsQdz2JBaBBC7NeMQUCx7oDwJT",
  "key12": "sMDGGP6w8eZ7Mg9z1KiTQmTBcts9VkfEWjhuSnphoRgfH8p9YhFdPZTuJwF3kN13LVyMo1MHdcmArcBdjywfrQh",
  "key13": "5DkUf3yL4UrDZq4tbVXnY2NfzD1eTaniJCrYDUMQuBBb6RMMBmXmELrnSyNctyBTAArTQuKstjMf3mKUZC3LTfyY",
  "key14": "3TGka1r5sqFTCtr4JcvsWjrc6jGBL2yfVREXiLFcB4RiCq64xm4HArjZM63FeE2RL8e4LtUizt8c8cf6116UHNAS",
  "key15": "2NbW1E2uV7eSmUt9ULwAfRRbWvUufr6VwwN5yBo968mXnbztpqDwY7GRAv117yBH1br7tn6Ks8vyJgM4sh3uYho4",
  "key16": "64NrKrbwvVDinXsJEGfJtziqL8x9kxNqDsm8WxUFNV1ffS5biAndVC46DyZ3ZHeCqYEBg8ASikzSYU3xaWhrAVg2",
  "key17": "5fDMLPK7QFKgTNSfPqYsZ7KucJNvANG9Ax1wZZFKsm8rW8TKwd4N7ex5ZEEKQWYN2GKQfPFGJkDgh3t5sehJzAs3",
  "key18": "3mqoWksCUtRMq3DdxGTR2QumJWySNyVLWuuaJ9fvhTTZeBaC6tivmxmybkT5GEmnywxvG1bHtfKHSHwyFLtHtzZT",
  "key19": "27BLvmHS6C8KuzcQWKdPm9NNtAEJ3WRSdzq9fwKhuacp65ZhcX76oCeVjX6eEcZZTsBzGsDa6MgyvQ5mhcgsnxrQ",
  "key20": "4Gkioc1NrYHTG1QE9UBhy2oFTDcv5wfNFoAfTFt1gMBS5HeL6XmBPUt6UMCVgJdzZ7mNpCcKwQVVk5p2muukDkqj",
  "key21": "C4Y57BnL5kJ2Mns6y3hfwPBXzpGnN9zcj1oyz9niuD1mwswnr3RYqHn6F7WMMLdKw5tgdFLrSnRkvysfzhyhiz6",
  "key22": "3R7qELCbWpcTF6Q3caEPLDFWJbcpScSLenZRPL86bHqLjH6BnZq7XjTdwsLffokuAADyhkq7BJvXT7ev5A685Wry",
  "key23": "3JaVBMk2Ukh5wZ3WdQDxi353KaBnHJqf99d1AaSAWzN1Pm4Sze9Db9ReD4tTrWA3Aan3jZNkwEAcc3v7zzsiCHpU",
  "key24": "45Ppw7Jm5RYsXewg6SmTBQTf7Jp1N2YUi6ZQuztzNHPMVc6ckH9Cc2njrRQaUBuDjyF3dG8GvbUxnGcEATyGkEV2",
  "key25": "MYwszHyN8rZ81V2dgszzbJQT3SpBfA6bRSpjnGQhBiixTeY2vDSDGdb7ccB9PKXQsWoAHJyCu8HnJDigeWHNWqL",
  "key26": "59pGRP4ujMNsCkbvqgZUBEz4XTFXeasFocpKC3oxGJKczjLdBfxZ4XwU6VFNGg1QVKokF8QUhSqDUPiCUeZPpyQB",
  "key27": "5Tn4gwDKGxcw63R7hhKqsVs5WZuz42tsc8zPYXTzdK6MJ5euvveFyuQysgp45TFTnm2z6tJ7ZWnSTui1Tzn1rT5T",
  "key28": "3WrJG4C3xarvwEbHMis783NKRteWf6jaR7XpKSoB1sop5nqDMXQfNfTCTmEhwFb43awmDdc2KFeteBApvkvfkEvc",
  "key29": "61PAhfhxg4ocAFpHRnE9bbhvAwjFdaBiYrDswYczeMBTYvaukefqSjVT6i2pcF4LH6hneHXha4U72VZ6oXkB5Fu4",
  "key30": "5dTzdgQb9r8pDpvw2f7eHX3Z1xNoThxa6fLgDHZkLgKzN4JD2WP6BtSxcbHuq3X7GhtN1x1YsPGXrNEVY94epvK1",
  "key31": "44YtjDHbp11LYtjTcqMgw5efKLoBW1UDKbfAypn1gwFaacGndQaHbRBNtWaEfvy7dE9PZqXAuv8cS3xPdQJUgxZ7",
  "key32": "4jFng7GQXNCLiXtsCwJgxhstUtuRHsLXLuC6Sc4QMrH3kNuxsNbGf7TyK1byZsTFr5KhT5FttjW8TZ3ksEDnGvbu",
  "key33": "3QDVZrs9kuNGPMeNj8gHj7rK5swQVS3bFbXUspxSFDesWZixqWqES27qR4pFtEGGZhXr1DHpgRFjYZy4brZ6bAAW",
  "key34": "Ak5cnL6Cp3QyX2SEXaYAujBRPbsQ5CawmYqKMAMUK4nQbsraNQgT49uxBfZ45sqV9wysKf76eanRvPpkzkZhkPe",
  "key35": "65goozuMEDBDXqwJGJ1ekxkhzADKJmBz1pnFmafyqqJx1K7Ja7AmbZcUbmj7Mh7REz6MLgpT9oFsn82ShkqnQhLd",
  "key36": "31XNduFCG8EPzQz6yoWFRo2ref7tDEUpBJY31QYSQ5djeKxxo81KsTWeHVvfVGbJDz15DM1qCg2yfGvTSHfvgQVh",
  "key37": "3B4RZCVaz5DykzCiufBci7Uwdkd2NvFx65cgWFef9Kde39WF4sELrg5GbyiWh1ubuEZfVEaKWnviWZKvpTQF6Fai",
  "key38": "3beQc6xxAZeyyE8J2YSdd8u617L8w3HYbWugpveLbDgvBJcEKhERfazCacRGioQETmjPaW7xFnka17tNyrLCQnQK",
  "key39": "51Fy4QYd2hkwDGbAB1kwd6aMEnojhAf3gyVgdo7DfUoG4ERWMgH2YE7rPtgF5ZQZ8iGy2QyRg8yyoeSWLRkaX277",
  "key40": "3nBSmUzHCibsM89KCSH3gYc9P5hKJfZ9vc2kRdqykEJTefec4aL5k9arD3oKsZcYdQoYWZ7erpJPsDjMw2kKJ5Eu",
  "key41": "3Rz2vT3duf3rKyf81SMrgKk9qrd6rKFhKkBot15GE8zTA58Y4Rs9Rq4akFPT81T9p7F757qfPpor97NyE2SApHVA",
  "key42": "3hpZrykLQUmV8AH7sdHvo76GfRCZ6W1rDijo2RvDZHLhX7ZUbQQbYm7poGMfvLicV5XL4kvGtYCs2qxZSEKVZLY1",
  "key43": "5RDxZWEUEJQEnD46Fax9wieE2ig5BaNmyiC3UaqxNtHZqgPPpHTU2uJ9sYU28suQDvA4ECQovF4rkUC45uBmVXwS",
  "key44": "5CdzBwDxzcb8jpu7L4WrefXiBcKGbNLYxx48yHginBbLjq6XcaB9JYW9kEuvLuuJ5SRGieCxzWzbUJa5A4zm36Sd",
  "key45": "2DKV3mRTAcZBFPxUJXth8aGhFx9qYVRpCwxmSsV6EaHy1nw5PXDHpVyhv5sR7n4Y1aS9hcmW78LUnTdinaLmvPFW",
  "key46": "4fu9Hb4vi2tP8zQq6VrFCsbvybzyVvUSw4Br2fTeV2TcRQ7JrYqGbFc3MXy1DFsieyKtWBBm5N6tXFWKLqafJjBS",
  "key47": "unKBQVRXyEz5wxGAgEdHAfjFnPP2Rj6L8v2GXfKXK6xX8kJNJvdUgxJuj318n2oUZAXDY8ncUwH8dd77DJ41xDV",
  "key48": "3ufEmsL6AJo7u1nr8bDhys2T6T9GvqEFaJ6exgJtp5hKJq2gURURuZoTxWvhak1K4EvVTT2DhaEdefZfzQYi7nQi",
  "key49": "E7Ph6qVyJdfXF7wgtk9CvUTJYwZbNhTaSj44HeKSbgPJHxBaszDnnRGb8Uur4B8xsjMQYxciyo2kERQ2bjK6FJD"
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
