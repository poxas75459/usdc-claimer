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
    "3kDeQ9PvnBZDAc1LfkkrEnK4WoHPzk3xsY8Pq39nd9QLivVZUy6u3CN2pABy5Gmid2TLibCX7qky1FF6hnRnakQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497SEF9JPU58zvTusYnaqAtc3ZwyA7FjwFnMYnarW3BVZWS2WmzKed6BC3JrqrVGGsurBY3mo69EJEkmahYHzgeT",
  "key1": "5dwsmhftYdLGggPGWvkG6pmQ8hAy21sqQiJhhnkcyF9aKnabzyuP3fmH19AAmxUketf8zztMqH7Qf8HdNQKXGA6Q",
  "key2": "58LnFrBzwjve6zsyHam4bSkP1unLGxipCw2BGCs51nhBRTt2bZc7XeMSLwujrtr2o6sGodgivQJhNameZdTWnGT4",
  "key3": "65NgoUqpUPwYMLCMr5SpLoG9TBdDTrDFzneUg11TmCdsEGtcCp47h1vNKaYYHnWi8gEL9G94J3sjmRrniLwCtbfr",
  "key4": "4FDv6Jy5vpSGehTbQCbrA5UV4jgynNWJq9M1V1Xbduu1GiCdbVJvm184VTmcZYKb86YKWYndJXzyyZVTw8jdkWp3",
  "key5": "5sowHFfY5KA6oMaHURuu1BDqdzkbH2emw7PbwSJPZd2mRPtYLJmJaKyADB4j9kFkKRBNL4NMPQ3jM2v6L4C7uMM4",
  "key6": "5JTgpEuMxp1c5vtd5i51MkNjNKCu5ijtZgUVAkNh5Zgjrj3yweonzNUsBA7bADN2TVhCcgSsmPosRtr9oMDzSZ96",
  "key7": "3mcGZ2ifu7xMCW3Vo5a5tn4QMyGLDNA5fWjfvgW7fpk2RzX4U8huacXGkBv5MsHoSKSG7zguJAE9W35zfoQYsVL7",
  "key8": "44YgzYSEEreT2R5GUo9ShzMoXM5a8Jmmusv2mnZ6gZ9sheeHmozVTFEbJB92cgRbWa2kus3cTqD6e4AVWARnngK5",
  "key9": "mSJTUyH7gUFUD9VHFnkUckzvWXf2q9gwZWHCSAqgmEQcAEURhLFqenMVBbkuxsaV3DbRPfurpJSKy9EArrk2cMz",
  "key10": "59vUdCNuQp9Vjo88mC8u6pwRVQpqdDoU1jdsf7yXHJb2two3GGM3PU2AGLJR7dWNivmudAP3C2eFSjHYbC7gfNsx",
  "key11": "2wPE4ZYH4jeKWv8jm7sfjkJmm2en2tL5KSWF3Ft3XY59CcSqw8PPBtgZebXoHCfE8bg1GdR3n7JWAALKTWjheB1L",
  "key12": "5Gf6yTe1DHMK5PqpcMno5FcuXyY8PVeA4BYGCLZWDJKMyPmnNLt2W8C1MHXTbjZ7gAhUY47wkbbb98mwuvCMcARL",
  "key13": "4ZegWMiwd2qfSYugmot91aa9VsMuH1Jav3X1LAsXU7Vnkgh9rSP4Jst1XdezYsYgFk3CXUxsY1hAhMYqAGgVopKE",
  "key14": "5LSS8Bcoq1sPHLZj2afmkuP5Z1mMtpra4EARDnTS5y5WG5W31PiZvUmN2Pqc18fY5TPt2Ai4SHE9L4sXrLAXRkGR",
  "key15": "ncXmAm9j2iPX9GwZTLR91BnCB5UBbc8ZoqiBwPNxZCKkNvYtPEvUT3BfAeDNaJfPzCzW6UnWZS1zouA31jSfqwH",
  "key16": "4nDUjZfhEY9FcbX99RSuHq3eNem71kb1iYGr4bvhkHnEQGVjMfQJukxdEfbZVoB2LaHQXX7mkiskBTksb8DEDTi3",
  "key17": "2Uq9P62Z6MhsZq3ejw1HrdL4V9qyPuhNXLMLBy3pFpA4uX5Tw6yo19tLZWZbK3dPMMgMHWvxu2Tha8moWbWvA24F",
  "key18": "2VpFqy9PoDncg9Cfrb877gndbPBCARWmU7mCAv3ERzTxaNBZorLJiYqMa3rDpwj5pmtotDRgQFgWynThbFa7jz1G",
  "key19": "2afVwfhAZwcLqYmxrYX4FVkMaFu5NEK8MRURGGX6RrQk2uNzFZBPdRVoqCAhS11CQbbdbQ2bo8QXaumVBGfagpYL",
  "key20": "4qfMcLFpxRkhAGTSAzZErkyG9ABJEidFeKyppWyUpq6iP43jdpMW8zxJvcajJ3Vad8jmxX88wVFaeU8PPas4dgwB",
  "key21": "yuPMNxjiTBYes57F1rjANy2YC9Fhq6MexLipdJFXK4gNue6HRNhHdekGMa5rym2i5bW1UnVKSRhWA6eZoYCbcWL",
  "key22": "5XXdRhMZWUNY1qxGxu6JmR9i6kQRJN29SqteeZA7J3JLfT8R3eLVr4VcgfB95JjaAXjzyZNBpo7EbJhBtVxH7Xp4",
  "key23": "3ToHbfcHK7pCAyKYzznCZsQm8gttRZfoNxT7JdeEeyphGztgyY6DZFZkN1aEexyrsTLbXKG7krYd9ArLQr6EsxWQ",
  "key24": "a4SPVoEaa4wDG6PWbwK8CtJPtWCfxXrn4uhvNKS5gi4MkXHDMH29bDCtnWywotM7hkf7YJ7FURjMM9tSdAfsDAY",
  "key25": "53mpBxusm4kLTa8iFyRpVpJJEfW8BopZNR172Bckhw4tFMxSheiJL1PMfhVfMFT8YV2RPi8ZLUfHe8V3MPGBoafK",
  "key26": "PmSjvwDwYexBD6Y1FCu7cEV374D51byoeFitLRgwiq73ZT7NGTVEZUPjacWJViGbquTkCJ5KzbYFCzNcGYekJLW",
  "key27": "4TTAvC1ygFwAhbg3iKcES2jkKboPjgJZWUjconjNqw1qFMNveuHmhjQmp9dy7L8T2XvAnCwMmFLNAeTfjka2wias",
  "key28": "2iQYGSsR4WH7CcdBp4DDzTR35weJH37sNby5RZ1cFWBZLB5mfjbb1v8Q2UJsj2NijogMsFhuQEzRjENzbfcWvSGP",
  "key29": "55SUBUhBt5UpCFcnRdZtCphN1sPP2LB7FuWHLr6f2Lu8wk4tkDe3hpvLRd6Ys7fHR6Xq3BzZu9QniEFYsMf5PunQ",
  "key30": "4mEUd6Jot1u68fqTfnKdDUN1SUipkEFi6sKZTtjoR365DRGug3TdnKp31BwPkhxK3uJUDm3cpp5cDgFjxzHkTgcT",
  "key31": "3Pb2qyfzuoD4qCEuUH9oafGmccTUvL218btthteCwYiu5oVBgXnVFWBFYWgpNXjsPGLWnAm74Gu9rU98NfGRdUv7",
  "key32": "4iF3pGw3rtwHdg3WSFzMtjkRGTiSbgc1mRcdwaHpqUK8QyVS7RgCHNQgEvWJH4wbFXVq2fHoV2oz8bwmSmy73QDm",
  "key33": "4uS1pd42pi1Jw52YM4gSYMt7QZaBZsx3CLtqX92fKkQNPb4s5UxdXTwhAAUFriiehZjPK6YVyck61xTcPYH9sWbR",
  "key34": "tytxPQJGeqCEwYuWC4qbFhvgKDMHcXynC6tieWMMTZw93gSqepGPZU5mN4SreF7wG3oPDWQobKATCo9sQxpDCjy",
  "key35": "337x96ivVmmvfUbH6ZtMvSbFS2h2BeN4UnYoR9XD5CGm7Ye5spB6tyRrxGUCTAVrqo4buxJ2tyWqt5ovg4kgcv2d",
  "key36": "4gGBaj84sMu8DSosHyjhmgfAgaViKCf8BhkMGS632yc6yzZTg7JvdCVfGPgiHdMPkzpnsbt7NgLWuVejP157szFd",
  "key37": "5rqAyCk2KtzwVDPRQ3jbcCDdaUNJpCmYQ4yprLkTqXWeyRgoHnLEFvL3Aq3cSsrRQ9MmkVd1wAtHLHwax4yc5tp5",
  "key38": "5eMbfoUwux6GyKyodHgXca7sQ86BSobYGRmfU8RN4rggsimzgUVmZwY7FYGsGP68M6bhC9G1wX6y6WbHMjQiFkFG",
  "key39": "jiqzw1FAv8H6MZHdBAiAicB2zUJV4MBwBfYi5gohjgitBFHRaMSBuYbVyDNdJKqjX2v9hTXNPiMkfqANnRbmkep",
  "key40": "2QV4edbViQ35oxEP2txuZiA9UtsoDY6yMPSeMPzxwoMsfbQhbf6QiEE6cwtcjVLsVx4VqfvuwKne4fsEyQAWB8wC",
  "key41": "dddMK6EqsxPuXTU6BKw2MVkWHi9scF76D7Lw6aMNJoYHtrJfns2bzGEpzqEYNZqowGpHZ5ujsk9GbHs288nSagu",
  "key42": "3Wsk3DV7gkEp9Kezig5dhXFZxxv1yePcEzDZvhXs4VrubFEy7FNFDuyXyBKKcH8Wq2cXYR53Eq98vSu4sRdUtWfj",
  "key43": "XzA3AtrStyabHXD1LUnohaREgWoguKLpErg997ofqU6ksjwNmWZXZbTFMDJPSboXsuoR364PCRqncKj1n314n2D",
  "key44": "3Sb35Nnu8Xt3RRJwh9fHeQV4k7sQGpvAh3GRgCbnaZFvK9H9L1xb9LyYwxH96GRq31meYYsoC8FNqcVhxxVn2cgb",
  "key45": "2CJBj3SPoqok42Hysok9NrE5UeSP4xtjDd1ezViMb4rnXYqjzedxZvx1NRnWE6xGWbHhbZmXsa3FbgGHTsvGYy2X",
  "key46": "Q99vv88sH83PL9g5URtog853hda5h72iq8ZC6wwmVP48vfiHeV1af7852Q7i1VnJAtrX3cUV1smwphQgn56ajmC",
  "key47": "3GdTnTQNfzXQDhDWhVsixAgwJNzr52VkSEWUDD8rdB9nUYqfXjkbXFg23ydQWjzTg9mGig7hM9G5goAyZuCqaWvb",
  "key48": "2ksxRHiiDWkY3YB2ECeQZBywuc4rDU5DYJyVgHqGTcxFo9sK5WbrTVeJ96RtTcia6pN7XbPGaXGGKk9QAJ2QvX4j"
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
