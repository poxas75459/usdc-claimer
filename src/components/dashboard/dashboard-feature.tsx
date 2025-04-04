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
    "27GKfTqVXppH7KcRWRhcRKZQW3ZvghTBY2MivJhdBRQDMu3xFVUFMwnLUQz8RkdZYMEkKqXcfg6o8fMp7qyawafp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b711MBxrGvPS5EJ47pEhJiwzahcKvJ6Sqoey5TGJisnioyvjmemwyVw7aGtswRPde4jfE7ShQ1QehxzQhgSahfd",
  "key1": "5omw3QctoaR49EocmNTZ6mF16eBE11tfmt65B8ZLkxavvSQEgbJMfKnbU4qrYjtv4s4dqNecbVit7KSjNJSMuS4e",
  "key2": "5MkDNtiunLFB7jF61y7sCRiyZzye7j3o3bg1yLKNWY4ghQDu3RgKPXoXWgqiN8FJLmYat9hyK6V37zdFEeJCr8B",
  "key3": "3iBYS8LPzja7LUvfQDZY3M61XXvPuy9WtXvZC2aWQ9kjyKsSAZRC8KwnzEEW1CVnazVM1J3fzRPVL1BH9fd2xUM5",
  "key4": "3AhZuGdHvSt1jSX2gHsEXFEUdVafyQCHddX82k7jrEtPqKM9ZcBdi4kRniFTVGYYTHqoecQjFry8AvBnXGz2241Y",
  "key5": "43jtffkJjmrYSDWS4h3jXhBYRFVGeWT1N8oJdyHob3VWkkyTstrbJ2sBUZ4cgetw1MZ1wgNSXBWiwuu7CszrLyyw",
  "key6": "5zZuXWpZpvATd9Hjgp6BfjCcR13UV5YhCNt35rvxtibNJNnEq9uR9QxhJ6mUDCPiZQdovM2Q1ftuG9CstyyfG4Xg",
  "key7": "3zE57MEFzaSWqf6gaSa13RVAPBLmoNoZLLsowoEdR3yM9X5xNTTXcvyMZvUezEtngmAUTwbj22w7tPXKM2bHuaob",
  "key8": "5y8tGKwkhUtMtKfQSezc8kNg3UqqoRYyCHt8T8qQESxvXoP1FUpZKdNsupqadnNP5DmV14BUEGo5JN9cSRmhCd6C",
  "key9": "4Vfg7W5XyWDaRUR7rzuNV2fvfoNi2wo3eTjj2L63c8YsHrSJ6RgXWDaEukUeWesYZxg7Yu93vzc88aHmqJNDPpoF",
  "key10": "38aqBqe9oqxgWUvymrCV9Qfc3YB54DCe5m9uupgLKCHK7SLe2hnKe2dZNDFAxEbFbYw1FAPWuNw9BgvtSrwyEJ9M",
  "key11": "5DKaK2TPSH6AsDyK5e5TwyiUwe5XVSf62gGcRwB3eW1oM6UbZ39SnEfJCc4cvNVziLUP213aHsqNSWS4LVnkqL8K",
  "key12": "8LMNFNhR7qpXw9a8HqMaevtadK7xrdbDBxSGuAXKPhGgg1oz8mDGhdWBMkjTkeSgDkeegSCHg6F6LcYtsfvXv51",
  "key13": "3KarM4sX65ov4Qvk5KtQiWW6TLLBiTwoH7QsGbZYQMjCahFT8e5uDFJGziqGkkXxvpMxpPQ2KtNJyp3LczJZ8r9P",
  "key14": "4D7KCq4bzebjqFLSPpZiZNgZut9wkYkfGmcKPrmA2rYDZKATCTZsCZW9bnmGoSZveCHb7hebsMKzTWR7TBUGEpg7",
  "key15": "5VTx89cYrddgJJFJaeiCStW9bArxzb72fnBxgSDzbUwA6FMPVtjRE5Ldhcv3pxAPFqinEXS83o5ZfTy3DW9qqwkb",
  "key16": "P2BoZHJ5Kreq9HWpk3W4QQYD7HpoLCZcAxsfZs96fBmScA97EWLutHCYFREtgcpDUQGqNtzVzd4bbcx4pXZsK59",
  "key17": "4HA9XSs1X5k6ckD8Lb1uVagPfV2T9sTwAfZwyxQ3BmHKUn71FdT8g4SD92fWGBjwbMvPhZ3veRi2Dvu1G6iZxB8d",
  "key18": "31NjQ5jKafY6oURid7WMpWCLXCgH42TtLQ1fwrbanGUfta5zgF8jg8FPmjcYgRSmMWZf2FFFHqjPmcVVU8kf1hay",
  "key19": "3b6rY6ExTPCyagHhW6UUpbcZmawMTVRN4ME9zpAHyQfCPxZvVqDT7ariAofosSSnRwW9mkKsmUrhGf5xggCean7P",
  "key20": "5ycMscvyGzTGPZUfQgmNJfzF2zkXZucsycR4XJo4AGRpEuAudZhtoDr8ncYW6BJ6gviPeq1FFZaXP2b5tWjBp1Vd",
  "key21": "99s5tpsXAEkZ3Y4rzRUbNEkfoSCTQKVjv2cKBJv46VsG9nahm9BGYKGRZw8fhHD2oBTuLm2CV5pEroMQJLaAuxS",
  "key22": "3YF479hFM3ww196nn4bNpPczMhVMKKvZa39aEu1aHFggEhVcfuv3Bt5X5ZyN21Mh6cV9tHUiduP8YM9e645r3Ki7",
  "key23": "3kDm4RTqNL3sv7HaJg2ykNrAHdz7YxJvdvKDgECp88Z53c4kVg8YsEgWsHGZqXizsN5pMDfJE3Hs7sHD9xgPv6Lo",
  "key24": "5cMYNrSrUXspo2qDGy98gbaDkuvHZveHBa6XF82qpg65gwMrDkovWg9CS1MMibLczZFh5r7mVxcnpAcWfae4azRC",
  "key25": "54BHLsaPaXpK5x3kByWzkwcTr6Ymr758ossqZ6dDRmB27RhmVejX6znNCy51fwAaPR2bBdY5f1mrG4XbzEvjfPoy",
  "key26": "61pmsLVAqtBEFvVgxKwtQUvMWoBhftGMoL8SWCdeqM6zMkut8A7zpysSUj1U3ZUFyQjAPRXuUC4pQZf1bp6juk95",
  "key27": "5upmS4AAcLco7vbrYYEnhnfsCfSQTeuccPJLceeJEJaUKw9QqytDFoDA4to7fd3aVcwD7RBCcRaeVHDghvVZQQVP",
  "key28": "5GdmnLW7hWGqk6Caw8DTZWnRetDkBwLQoaCzf7bbfVLNRiVjrfcxFz57TpfNDwW4DZ1zXtNDW8SkxVEU58Jp9Hrn",
  "key29": "3ZuDAsPo9ZSdvQzGGxgEj2dgaS4M9FFsfrtzTvLTe9hipX5a2vQNVGurRrfHTG37p1EmBJzu4zswY7a6sKXMKkeL",
  "key30": "3SgU2zYB9wKfR9wv4KuALz77VrBwwMMFEExn6VMpbcxdMdUxUcakVDNaQQuWQxpz1eh8EpAW7DzMyupWkrzAyFTL",
  "key31": "28gLKA9dRzN5c9mnZSSv6yDCtB8opSdwRdiLW7N9Nc8U7q5pdikCX9CqnHQwngiXPMjy2jsb4k831KuJdMxXieCj",
  "key32": "648WJd5GBXdWaaXK2euW1n69mLn8t88kmA6Mg3d5STK2kvMszvx8dyXBLNCLLA2Yd2BfGqLd4vCsoVwTxmntNwxP",
  "key33": "z1r5hkf8vmqCKGpzcA4B47YV4dEjtR8BK59jCZfZ9FwTfQ7m4s9bMSdWDrKaBCHHHtTjNKZz2ccJRFgW3q5Xsrf",
  "key34": "2NWxbKbo6EQjrv5H95otn8qczVgtcaLzhdCZWJjzPWhkF9MWfcRWd4vBHehCEjN24K9KWdsLtmzkieZQWe6scAQv",
  "key35": "3X331CR7vqBz1yGwxxrmTXKXWsq3pa7cY1YLa2kehLKk6SbXW1h7q7D4jkCgRfvWhgVcXg5bKfCJ9nUftcEE1qGZ",
  "key36": "4L2nxi4hFrTAE5CpbmyC3S9CndgSs1TJG7gWAUeHfJE5zrwaNmk1gDqJCLJHg55Hg4EcAawUwSWFD7Pcv8qFoq4w",
  "key37": "4Ema9i19GgygjvHh4Fz2Sm3C94b3QDk3M8hwwiTXUYQa2zYuvAML5ZJpdVSW9xFg3eQs5MyN27mRjRqrfbvNur6A",
  "key38": "2f5FAhenYNTXt7w4vxgiFFZxryNUrheAYMZbQ7Rk7skPrBi7qyJxKyVkQ1rZMjjwbUXiNDtFEcC492i8iSwP68wV",
  "key39": "zE3V2JEeMQHeUJdhCb9sJShedHKK4C8LEZyFoXqUp516G3MWBKbywjzBURmGqX1LQx248goE2H5MxUV89Mqx6a3",
  "key40": "CRqesuZTJnkkd22hitsgUUmpjPKNvQww7TzgB8UfM9ZVSmWhfXPD43MCy7a1rABET5HMgKTw2x1GcYwuL1eDdNe",
  "key41": "25yeZQ3yGPYTYNZGf4Fr8C3tAedNMzZ45dimg4rBVBSuQpa71KH33HdMFKsZNWnqqSe2SES1wKD9worv11AHLgcE",
  "key42": "3gazpbXp9rKkbmm1hnKSZ9w3x2kVx8SM2eNWn7yJKDNRk9pBHzgmduyUsVGjUiEx31N8gXUQUkkG8MxAMxYFNcUd",
  "key43": "meuiKW6rM2fdoSbtrt8xgnPT65StCLQz8fzaZ1XTTgncuo7zrF3hFuShfiXmcxY4K8eGVrFqhHLzSFLmhHFihSX",
  "key44": "4xPGFfouVgXEbZo67A4qavc9Ls93eLx1rtbGH9jzwDzbAtGTFhBeBJVpZQ1fu9k2S6An3L9ib9WoREUH3cz9Antr",
  "key45": "rbvbEbSkCQpXs9y42cKTWRf5f5GKAv4DZpqvmAtbXuocTBpYuroMQYUsMgKPyWjc3Vut6ECk7SDfJp9QNPn55nY",
  "key46": "MZc9yNZGBYW5aPrqjc8kdsuSxTxv1wsNRhH8KqfibcChDDB4Eo9ruxYhwq6TwZoFPmisUM6ZpHUudPucND6p2ex",
  "key47": "57W9CgpaR48VAahcpyd8G3rnb61hF2bcoxkftVcduDnppbKoR1Mzj2zhKhP8UNSmtTc3xBYPchT1zb5rn7b6FFmb",
  "key48": "3Sdnuf27vi9ihGNkHDEmTmDz4mCA9runqU8kwJNCw71ik5y9anrkfCvHNrbbPTTsUpmFE7cyMGv2VqYhrt5p49nd",
  "key49": "5McAdt41sPw2wHv2s5rTSKLuNVYzumTxVvBM8T7vRy5ZzcZzyitDnT4tT3LEh2cnCbyfNcrQhcisMtus9bRhwAsY"
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
