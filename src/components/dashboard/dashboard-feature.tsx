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
    "35gB2DkcWBVi2QnSu9RcK4RPTfTX2wT2sdZeEEMs54uzmkLNB8yRkQpqGrBZHGdQZxg9pQHepab2PAwddqjws5ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "532oHz1Mbbr2P9rApbxWuZ1hMwkEsyXJKQo1Xub4ENp4x1C6r8dxhSKA3m1Mt2Ux4RuBjuwavaAdBCH8t8XitxTp",
  "key1": "4mZwanLvCkEHF3c27na7GUfdEDGYztLCf5rQ2RsgzVyQKcpnm7oLfbvCkTiPiqNECGsHiJMfXyPAP2Uh24x8yNHk",
  "key2": "4EaGq25gbeQXcD7Lxb2HHctVC3T8kawc5VvGs7rmJV1qwYzJjyet2xB6E1vgBFrkQ95Uef8DEbJg97DAiyejmMhG",
  "key3": "5WCbEv9TQGDFpn7dyRNpVdAMQApBLzX8oC9MsRoFenm4WqXfFu9735c88RB4ucsRrZEFJjbaUhk2NDeUrHAKdpms",
  "key4": "3BjZGerN7MwqzvbwnmT5N8sWDGNuDPEfbQY8Rha71jrJsJVzCF6q5cA4YQySdAW9brNZ6tDhJYxJwkg1CP12C7ev",
  "key5": "2fy1QA3dDLDKLtwyA46bjx4vZaKTzTtoHUsC2bUKa4BdxBsxxSQmtS7dnnYh34YAFp3PJPKBCjcRKEoWCUWMf9K4",
  "key6": "5ZPLRVzad89U1wdqwTfuj3DKtRrRtBWox4KfJmuVq14D5AjB8dKNMcZsYWH536zrYg58gnoJHqWcTXjUYWwVK1ve",
  "key7": "rnTmyzeU59uB9ThNEb81nQvoz6UyH1LcJfe5m4tRr36xKs5LRvFzEhhMXnKPyp3eV11o456U3sBrBGQmnCijfcD",
  "key8": "2gPqbcF7HjEfQWT7ofwEUA2AMasmUqc1njoyFj3iJeB21KmtqvU961FpEeAKf7LpyvZzEzhmoZgFwrFocjs1RQbt",
  "key9": "4dZa9bFmCJqpNTviqeyV5i2yE1kwHtCdrgDKwfBPsRAh21nHiQGPGHhCV6q35KhhjA1LDHHSrH4ycJWu7d4Aw2ca",
  "key10": "Au8dNyKsVbV2UwrEDU2eUtQB1cNxyg1jii51ucAJepFWqEnL42yKfU2z4wyvyn5pzvLTfeH7BzkQvzmCU5tWaU2",
  "key11": "2s2VL2nL1JYXEHBHx9RgTY34LQy4mVYv7DjLPfAkq6UeKQQrjLTiuSfUagNJoxYxPCpWAjD8DDEYiUb3KNKJYpKj",
  "key12": "3VWtsHvbNgk3wbbBsmBvg9N6B2evUF9QnBbKgtJdtGGRaKAjebUXpmSV4ecfXGAF26VG4HsvaVQbXh3DR6LEaasx",
  "key13": "2XKo7wmFqf3J63fef6kcSxg88z5YJ3YVd3M7FQ1JTTha4yDQ3r3cABdbvmGxkN9ZtpUGPRQgmrK9naRpQEQmzsXg",
  "key14": "31qMPJNZhCBmU9xQ3FqH65wPrNeSiN5JTQpsu6ktbTaCgbrdxdneaqMVaa95KrBA26vAenMm1cEMGoQLVnRebxje",
  "key15": "3Bb34HAbAqyLe4XwpFWqmkW3b9PXzPK7Ta1ztzLuRt55JMEU7c1rhkFQuVSaSHXPTcw75ng5M5XzGGNN93ryyZpM",
  "key16": "5ouXyD8gqbgcaJKroqZEYk8MBK3Vqx9BcZ2im54ZRNiPugFSr28kUREXUT3yoTmcmgLiicFFh9Qdv1xeHiVzq55J",
  "key17": "5FM4qj9PxkrQ7RjFvsaTThtu7GPLaH3XdQ3aSVM3o4MVQpxjeDbXUsX2HQXx2GZRERzyhf6SxdKzyBoL1mHQPjta",
  "key18": "3GoC7ktTBAN9g14e4QcRrzC6QYFQqiNWv2VXLFuns1mDAc9iGkj8WMnQ1P3L21JNUNuQMU2YUKAuzUrGPws33bM4",
  "key19": "585aDGxbfStD3CpDJqRsyJpQa5CmM56jsDPFM4TmLnnYvcFVdG8nsZF5k9gmqd3NwftNxhpD1cYeH7YNgLaXGdGH",
  "key20": "2XAcWwwAVE656pGegbiTzKeWPkd9nRcse4hSCTWp7YLfcaPp9DviouEnR8QSPe6tGBRU9MgF1h17LMLUhMwjSpZs",
  "key21": "EGnpZbNaQo4Dt2yZn75b68tsUrqUKFpwVqwa1JD3SsvXkZYk64SpVTvrUwL7tATeNHacGNnvdfd6DDUTMq8KKEh",
  "key22": "rfShcm9ovg1Q76btzhLKZnFE5j6MKwe6WadP5GmPstWiucQJSBFnW4fMRnjVSqW7iwV5mZfVrwjdSse7pAGsg18",
  "key23": "2X2zy24HEwuk5fNPJYRYeQZfXUTLUBynzvZF2vnWBFJXobeCejKvprgHte9k4ZZNokWjXMJTxqRUtFjWygNjEWwi",
  "key24": "5L4a5LvjQoz3xemm25aVZSPEPVZMx8NZNVsD7bB7wsiubqBnACfuA9XCfYRDpMN7or3r7z4cB9pyoZoWvjtdgdAN",
  "key25": "4SuSJ1VvbJr2DAB6VQKHcTZYyG8wPvnmt9RjZQmTZr1wqX1oEkVhHqxTNu2CdMMu5w8ETEEcQkNey3NBeAvjqCnU",
  "key26": "NKieBU5hWtjyyoYsfdGk7KNUYzQtyB5KeXW58fXdJ288coyJD17AKYXpD2GoAEGxPxk5H2ikLWpRW7RUwrPLe3D",
  "key27": "3FFVZ9UW3MnqgtMnFfopFWyLJKugwcqXamR2mH265KYB6QVQmQyByYiZjHxwNnas2AEqTZbjHUKbJbpvz8mdcbpa",
  "key28": "srMKEXmSf2BPkmKYubkPthgNFcBroSBVFnCqXbqLuusumLvgt3RnFzr6Hb8Xj8ptGtrrmiFWpDj6SvGSiEUkNk7",
  "key29": "49wr5D3UwppbxAHn5Rnb8zqxd3E7XcVqvG4RNFdMiehGaTPP248wjyeKZkhwsLbqPLk8g6u3xkneiWBY6HqqdGQv",
  "key30": "2U9p5zBYS9ZcEy88kit1jH6yR8YXBzvKD5MMdQsxBKgjo9H9qEpVtdBRHnzMEh7WEPwvnR6Qn9gT8Dz7KYHL3HWA",
  "key31": "44pKrSksEsd4tgjyeE6ZZioR2RUxEgQEboWy6B3eaDbYEFafPiFjvYiW6sN7YLbt8b6QnDeaxu44wjkduFWhjf5T",
  "key32": "Wgs97gGW9KMFRtYtt39eGPEaNTrjCQAewpiDSpYHVgxhhLN9yXQpknnVxb5smz3iXKC8wWx4iWttqfFv6iq23fR",
  "key33": "3zJkK1Y445dHT7nhQGQizevgPNQV2bfABnBjxLiTMbfiTdLppMHjLSRqsFfwwyz88kyuGRjCTncuoZXuwZBvoaS8",
  "key34": "2G1YZDbQndXhxvQxT3ySU84oTwjnyKHh4VKyGqKrQ8ypjhaTPerKUAk8NB1SYExwGgLwYBL1wiJ3Gk4DGB1bCsyX",
  "key35": "4xypWEMgejA7pkdWKNgyU2TRyNUR3UmvN26pzntB3pZwrdEU63jixeMMFSZbD2rdni5RctQMUxhnDLF9fomumisT",
  "key36": "3Yc9tWEdsGwVfygcQpx3vSzSgRLWTMY1cErRyY6ktKgMpks5cysCR9DzxrPwVLujoWGhX46qGkxaXcr3WBUgzWRR",
  "key37": "wk7DZnieWJxLLqWmNbRGEQLoSe4HZkcTaWeCjYHgpY8DzWDqMma1EzwrbtUQoDnbRJzCyeKyzHjjJHwKQo92t4H",
  "key38": "2PdtYRbacjpPJG37R1Gm4J1SbfNyVkJcNVvsoms44BmQsWT6F6kGJARwZZuX3AyV7njkqbyAiihxxRT9KKWUiQa8"
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
