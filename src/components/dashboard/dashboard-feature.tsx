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
    "4LCq4bJvfmzen4MiAZxGy1D4nbQtpiS8GoW5Xj3cDX8vJXSGNcKjzFmFouB8AVmeBX4fHT3f2LufFBUMrB9xyfPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTTbL8XLmeSN3q8XfRdrqMraNK113gg4EM9oYTseA84HH8uboy9BJMtL3oAAvbDQdaMf9cyDMMUcB9RrZUvkCYq",
  "key1": "3DjKWn7PYwSgnYC5A4xuhuZyTcLXyaQtjGjRWzJ34zmFjMmsxa2tDdve9hiPPzeXFTjEBEqjPxkxdy9c9XLGHEL6",
  "key2": "5K8PwkhkFnWGCTrGWXRtKP1r8NYGmjEVVPc5sYwzdShGWhPw8D5aoS63csjx4rQBsodqhCBhGX5eC1PNjMDJXkg8",
  "key3": "5dHmRwmsUMfS3CKuWvjqqxedVKSmpwieXDFFsHoqQhsRm1MYRSxEGE94CsjyCSXVA2Tf5DTVytaiaHWMrH5QehnS",
  "key4": "5mEQyh9FqgmxYhYxUPvUZpeiP7NSYQer7yP6vmhfUneDSbWiBZ9Vhxd6BhBBV1TkhkPy7jmm9ZXjyUqaMyJgdj1t",
  "key5": "DkyBYhL2Q8VWt2mHZW3cg9CWYXPc11HjYYjsQNwtNW3w7PN4k5g69bPoYRz1FbNFsHjV95t1ifNzhmU5PCAUjqp",
  "key6": "4bus4MCiivX9V9Rp3QdDBuPWGUCtZ47PmEURTJCiSky86pj5a29rDpoVatLAyqzq7moqmU8Yvck7D6Rs3Y9gJ2QX",
  "key7": "4NBvwZTDLyb5o51q88uy5rNc7gc12bhteDUPEC9c3yotadLU7mHCkQoDSRGk5j5yNTjq4RH3nywiSxrqyFs56Tha",
  "key8": "4vQ8vmvn8do2Moui5N61KZXMu36EMehWGGkgmDvUcQeXFq5AdEGJbdYrtBq7t4acACrAU2Maf84B6dCHiswC3eBp",
  "key9": "DHt2NkqEycv4G2pdzPfac4AgbuPoWusuxGJYcqcJvH29uVctTvZUp1gweRxqnVw4hneKYpssDHn5H52DZBpkNZC",
  "key10": "3iV2ngtpMFLogzPRhJ7EkZUnbBT3yF3idPP7kT49Lw1Nwmh9i3q297ha6R3c8MkKqQkrBYD6MoFVngGHtVwQdLkE",
  "key11": "5WhZ7nhEAmQVzwVbYFS553WZaazMgimwprq9jauPgCxxETq5FJcc4cb3AG429WJgDdMY3Qdw34WEnsMpKqR4m7fo",
  "key12": "5Typ9FA3TMmkFAAdC3a7TPkd5E4LcSyTk45LDdzT4V8ZVQ5y2iRmiRER7Si1Z1bLjpdb9hJR5jeQ49PnCUfzmr95",
  "key13": "2fb1Mbk6d8gnHuQXx2L76y8xsmNUkRsDJYGmLPGoZVKYXXRzsjgpUBASGHzfYx4kgL4DDXTFYJNuo6fuj6xCRXVa",
  "key14": "5inqUdwwDMkXquxs3Vj2uL2ikYs1S57Stf2pr2THp7VuyyhraouWd8DSCuyQNDMg6fDNL1jzPddHDPMn2X9PhMVH",
  "key15": "XBJZdhAZaZRFESYwPyaTfTjFf2EaDyydFYcb1jeqjBQB2J3khs3d5RYav3eKmjiUPkcQ5qYz1GSYyTEpFxMj9fD",
  "key16": "4wzPq5sHUtgLovwV6wXfdXAnFG2J8TqaVpEyKXB98MjCQgq15cCSQTGtpeNUURPEyGkn9Fa5HiW7RgVmzbCaJJYT",
  "key17": "i8pg48A1JxLA5ahhs5bBNVsMMv2CFWioLG1aPA5cQEz6ACG444GnLvV6SbaV9KcAFbk5y3LAT81Kb7gVzwP3yEE",
  "key18": "5LH5vE9xJD4QwwvHHEBNfutwMMdCw6iGM8HiB7jx8C1jjS83SxFeScoYnUKdUmhQsLQnMYqaM1bJFChwRYRnRMbw",
  "key19": "4xeqMVEuff1YZYb9PnG8yQbzaYfNjsZfDs2fKC9ZN83K36xPxMuWcAzkVVeEatXK5pwzSq4DTmjjPWMXeZFzDiPK",
  "key20": "5EhYMazzsLENvpF6qgj6zETjcr9EWiF5QHLktumPHqBfPE1FusQByTtxY6HPPZMcbb7BRZUmEW6qqutvFBgTNLAd",
  "key21": "5mZJ3NwrcPJLURXV7kPvbdfkWA6znpFes7j4AjGG43wmh5GnDzhDeV15rwmBFz7sFe9uYx4FTaNMNKNVsqcoJttx",
  "key22": "4M6WLpckYpB5MT1FLb94BSN6n1uQcwMZzfQ8yP1kqMimoZvG6SDTv3dANCKYEYyTCVQeaaD7WgtWR2BGFrpHN158",
  "key23": "2cHqcBryqxN9YG6ktBiCfXFwbnB6iS5CnJU4CJubydZRVTvYq9W5jkGmShgULN7qMfMgaAzeMmFmuXWC9eHGE332",
  "key24": "3rFWig4gBMaGmF4PGqgN2BkZ77zyV5qDySnGe9AqbSQdStd7tL4LWSCZx3mtnLHMi84tKYRdPutiu4JFjrXJk854",
  "key25": "4epggBnm4GV1U8hkN5dSTeZ3FaKUtUxSQwFiBVXvxh8QoBRC1dG23Jso6JBYRGS8sQFY386s7ub6VuMJjqokvdq1",
  "key26": "3L47LMk1a21We6M7oSwwWnE4QAt7g7qQCq6G7h2r2k8MNhH6AgPwtH9Wnzft1h1bJFZR1H1sBWocM15ShxqD9nWi",
  "key27": "55u1gNJtt8vvGrJD247yCY4UMwFak8sgiD1Y5tiMRzanMdDqJtCv7KyBZuzgdryJvFU8Xaxp2sUSMPDybD5NGFkf",
  "key28": "44Ex4XueBE2c5PFyHjiCc3mT1gTJ2ZKkmA1vCbuTiLAK5ushPKnCyeGuouyb4vYFzgHqNPQNYbRqtG4LaXmhvjvf",
  "key29": "3dSJyy5bkuCLJnXHWA3BsYkaEEeV2Vs22qazpEUKEt6mpLUdMMNNANi2ZZtGyGHh4BYPFU4LnVw6pRaqJcUL2x8U",
  "key30": "66xRrQy5dnWcHNMYqkAD2wjRfUygNQ7FZ8kSNo8PFmwepfkP13HfHf5qt582u3R2Mte2d6gibEV5aqcRdWSaCzvo",
  "key31": "4NzWfTKkSwNMGRhSZVoBuiDEML7a2YhQbYat1xM6fmVDdRrBdt132jKqX4UMBqtBSkXqdAg7kHuB8Dzuz22tHECy",
  "key32": "2pYgQybx7A5yVnyTFt6bJ9sxMoSRc7ciTYVjrWegmxJiWG2P2X4rookaqFoTfPqat18gqtc3VhZM2VrWW75gbAo",
  "key33": "4ph2835CtQFg4AAveTphw4BzdJuup1Ph6gQe6oGkxq8toxrKPmY8SUfqjLWr4wTGMfr3WJQvxv6zo6W3cm92U3dy",
  "key34": "4xuZsQnCZ9GThdAsZWTmR3dLHwy4wT8Z4N59b3awmVfPG7muZC1nTTivUEaQFzzMRQg7g8sE1Dpniyc4YHsNuMG9",
  "key35": "BVR6nmqbaj3W5B3yhvbQRrtmZf8jFBc4UiifQnqhYH4TNRYfbD38CL9JEfkL9aY7R1L7RVd9rxApKMXXowCFsJH",
  "key36": "5MwrGkuBzwNMV5cnw2LiSJ5tgzwBgk8z68npdjhh3Nk96eJ8gQzK64UhuYbCDxxWzFp1MPHGQYBhxsbNy9hV3boM",
  "key37": "qt78fqAjXs3o8crFDgPce6QrkesQbeLQ2HPEcpQx5hEef4MPfsK33DBt6cTdCGrJFJ4eyA5sMMVuHKktXsZPfSn",
  "key38": "2yzEViMYhcNG1M686bSS6NBkGenK19aMXM5TL2Ef6CUmS3Pn1MPZSRZgKADp1vTVc2QbWHDRNd2nnKjkt3nVZzWn",
  "key39": "26BAYf3uD3KfHCs8EfoPefWaYvSXuWQDWDbJ6F2vZJp7A3Z4fKFSBoGz8uJcoHhA2Nf1RjwN7mJFRbVnL6mgSvbA",
  "key40": "4TyCAzTePfnfNbkQBpa6AD9HHveyXfFdeyxZUDKcdnYqAR88nV97EopZ5hja8tJAij6rk83W2aV4V3fshGL28BGT",
  "key41": "6P7tVwdYgXwwYwFgKwnSyWcvHK3BAm5nyRoNhHyDsHHYg9KRus6wyjbzvz31z9vD1WCqAte63MaD7FvCZ3rGFuw",
  "key42": "4VKrFEXw5RdL6hoaQ4Hz9z8s3yyLt7rXs5zgFXoGcfoGFjPa4vwhyK1AE94rRCBSFuaJ5Qf95dTeUxPg5DwiMkkf",
  "key43": "3Zuw4Xs8qGB37c1CxKTLPPfiTHCSe9seWapxm6m4mMfrvq1btsHD1VujB71yerhFy4xjQwqK4xyP8LZW3MNSes4a",
  "key44": "5nYojyytYBqW5tCQ23MpC5Bxqyucx8zTeauiw7NKswSXvjX8s4P1uFkeiXdUua1x4nah2P8xJgfZ6Hst8mZKJm4",
  "key45": "2EgFPGQSi6RDnTd54aAtSaTZmuybtCctXTTCtGuNDyZHZPTM3GVqqgNDHfzRLk7ZCh4dqMNhYMff2eAWgUbFPjyD",
  "key46": "31gYDMyv95sHG6VfzvtEhmQ4cguGUXVdBR6Tzt2RTaFZf9xnjz1sBUtDW7yuYm5tL3N6nNdHLLrEQHAsG1qWF3i9",
  "key47": "5HHZfif36SYuDW2GxHsak9cRWW6hZ4vXmwvD3faNS2ZTqtbWMTm21Jwz7MraiY6RPSPGoCeZXMVXM2AUoVmAb73a"
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
