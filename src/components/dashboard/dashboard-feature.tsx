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
    "2oakpwjokgu9zoWUUTH5YzR3BnpKGTUXpraDiEJK6nwhujTvEnicPhoGhYvPDtrxtHGnutbLZcXJbiY3KoJV1GA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47zAkegASZgeUnT2Ny76ceLaiVY9etKCJJuTG7VrWELY7KNqeu9RFpyoWPNP2ZCVxQTCfPTrDA5LFAG6E3SP4Kdi",
  "key1": "3KQMNSveo4jdx74thaGzm8LK9XeYxpN7pGVpfhwvXDCYAjcTUs85k5kMaZM8WZAZpSbbNTQzpPqd2CMqQH1DBEUq",
  "key2": "57LNQhktjojWujvP6tHYSto6xmQ7rk61hyAFemCfeVkRjkhejbazDrXhzAk2J3b1isiMk92Xi3KD2LC5U17BZUmK",
  "key3": "36czpCN33NifiLDt8No7YoBakpmxVRTnFTyFEjMY1bvuAFzpCfMPirU15sZXohGCFb69zegvcVy7vgDfVXbWbhdH",
  "key4": "2CLYg6dfRXMp8Kf4YJ54hzjoKEMfu27W1acVKLudyBWxsysWb8FmhBLaJ7BFJPF4gjCE4kQkg1pr7tRzvbNQwwHJ",
  "key5": "4dMsBqmQG22DZRSjp96UQWh6nCJXAJQQpYbTKvunoTnqBfrxr3S5Mc72p3fdW3meVv8TLV7dqSbJWWz7r5uAZ7L",
  "key6": "3Jh5A7JD2EmHsfRsZiTNANoLhAgYgKDmy56ddWKmLq6haxzafQnFXoLhr2JjKjeze3gi18wWjKHApKAGHiMZwjX4",
  "key7": "n4XAMU29r5YMjh8hQKp4DhokZ5ZsxJ39wMmCk6wYGmQf2P4o6RYXoyJji7Qj3F3eZizTbLz5CrRBm43CBE9c1bX",
  "key8": "51xVAQX4Doh3iBMKsJiJL4HFeccZhAdB8JyXNiT4M2Gn75PJ7foBj7ZciUimjo6fQcQW6jJ9W6KCW8x53hgwKq65",
  "key9": "2og66h1JAYTYCUE8f76bNX7e3pYBv5qSESHnETdvRgriNRwFKHtuADFuVYshUtj7x7Bzz8ecbDgbAdpq9iG4rwXT",
  "key10": "3EvAG2C95Zki2ixovVCnXrn3PVnKAy82WDhLdmM8J6sVbc5qzjsRvxHNU969i8bokaHY7DAyBFJ4URR16mXAkVoY",
  "key11": "4dPyFhQtWg2j43KX7gqCwjhYCQKxkPRasbYYNhuSoN85b96vGivYubaWAkHnaHpsL4799FL9CrinRFiuFfAfK7x8",
  "key12": "3zZpnMwsMj7ZpE7aVfXXbSgYPUGi2Yp5ageDWB8mzxaWAoZRe9Dz22BEFbneiQ6GAe2VYxdNgFoyKupmX7NHdWCg",
  "key13": "2XzHWUa8ekpN3fZN53YLbGbTk3YdxpEcQ5mprRyPm3qFaRNzNsFyeXVQkNU2Z46F79LxtTr5VrTwiQnh3om773gk",
  "key14": "wNiWSzsUBGc3DFPKM5nquJWNGJ8NX5SFjDEmmgQpfWLQCM5RNKEhZTMpDEiZi9vq6PQFXCra4iPJnQujMLriTuK",
  "key15": "2XDMnoJDpSmT4LdV17dfm5uC8X61MLepo6aNfMapiuzFCXHLHVXzBU7yZKxeAzxkd5WtTUAzJ5ocwXC1HDUChk1T",
  "key16": "Eh3gcJE5KdihUT89S7ejSjKc9qyYtbEyGryc2mc36Hos3fn2CJtXigDipe2fzfVUnJStJMD6ZzrNcPdY5UMEcK6",
  "key17": "2Ps3YzCm7azjcUbEABd41pRf7uUUwaaUptmSYWYd3fJ5vAXwrdAZ6nBEtLRF2WUDQzid8Q1okhnHgSmovb86VXNu",
  "key18": "5vTUeJFTdDsTaztJGTxAjVEKann9Vd4Djn1BkB2b9q3YuQkvN6fnHFvJWPyeikWSVX2tetGNKS3N4i9p26cSZ1yg",
  "key19": "5UYNLjHLNGLQDypmGLYR7EWe2VVPsj1BD7UABpLfPv4SWe8zcTNVBMpnyFXRNSsGU1CEv6PifKXToA4dQnxorki8",
  "key20": "5WghavP1Uymtji1ES2KuuAJzn8mz9q7crC4jrKA9HCyheTuJ4LE6ihU7uVJ6JFDyocuLP3W4d66tz6V6srNqdSFT",
  "key21": "5PbVXvSGqWskp5k5AbTCCHZTeMZHBmveB7YKNGamJFjPJmrdgLagiPke8haPUiZU66BGDVPHN3y968qybqcEQAWt",
  "key22": "aQ6f7wc7BCXuGChjmT84k7Y1LQ5gwfb768QAGh93oFS88H85PNRQunbJFKpdzSNJcESh9euLqKMmmWfuuaCLH4U",
  "key23": "67QGdZeK6sDq1dDyAzQACDU7kVzWR4c23TqxhqzpHkrXZUXuS2DysrkYbj5GKBbUrciho14kE7BKs3ExsMFd3VvZ",
  "key24": "3MZhXX7uYukeXbKc35M91xSaNenJmT6PT4yHFBqzq1AagPz5u941RnB1cRqa9iNwzY81kuDzocdYYt8DjKeVTda8",
  "key25": "3zXDJJ9o46oGxsnHAqiYqoE9nwmYZFHMbzBwk7bF7NE2GJsG95xbcTR1a3ArTsKm1mWf7bbQD2FxMbeCMKq2HhWC",
  "key26": "h5DpHvdNo9gATVKeXpCaCp49Ap5wMrKCpZpk1Kh9i1hc15sCt1ykfvqTXqhLSdnUnTnBVfwvB91AxfzEbPiHtQL",
  "key27": "NtSnC1ToJMKzLeEtWnzuo18CymbTAXbCGPspCWNGpngGPWoQh8rweWaF6ZVFx115aLNvfMbu2HFtu2LDz6mHtQk",
  "key28": "2yUPBzYvj1BYZg2Nb5trZFh9MAyEAwoxMViaGRAAvGSGKNiVffYaZsG8ENmeS9m4DiZwBKwXnnmmm2FggyJUmqrs",
  "key29": "28tYkxhQQ7RkLT3JRtZAkCC2LxMs3kbKCDA48pQ9qqXZ69gSoimNfWMiB2oCpoTGt9yLWp7fbSTYRp5SYg6NkVfk",
  "key30": "4teE6QzjHhWfTkTGC57dBDz3jV837Zd2TWNmsRdJg2p4JG7jZvfuZbfpt9ULtvRSv3142MNzSWiyUjUEiSz24YhW",
  "key31": "31uNDxZm5h9bwoLQSV5WKLbXwwFCDV2LF4R4in8XS9EhH9fcegKBCrC3VHwZJptmwKDJDWTuoxC9qexKWzXryMFy",
  "key32": "2BgJS75s8R5uBJnBnqgE4JxHX65mBF3jWb2SQw38Ex5zZxv37x7a3ujMv3Smv9qLUrcVoNaj7XCUGkjRSbcbNgwD",
  "key33": "4CNZkYLArNo8uoKrgoEjVNCTyWZuV7brKV7KSev4mme1jjL1Dwguo5saXnk8ys8rEfgLaU3n552RoQqJC46AVJ2z",
  "key34": "4hv4CR3aVva9dEha5YPi1AoTPJmiV7FYFMyWhpYoULJbqofp2pogBZev3EqfPXmz5YCYDTSxBPoaQu7jP9wpCh5q",
  "key35": "2J5nPn5xtHTodZAAMT7CPCxcepBAcecV8NGNV1xvkDKLNEadqH2gi44NtTHkSE3AQ5EWdTdLj6bY8a15fdny7Yny",
  "key36": "5tweUjfUNFTTfehhpqSpVi3U6WqTBGYBnPzZS9HGJFFvC3cYLDV4pBAy3LXj2AuKrprq2fYeXyTcjB8ESXYo6jLg",
  "key37": "Szy8PJk2hZc357re4Cr1QcXQbNJgN2KpS85846gSVE5KcSvYbkNUCvKbQqEvEmcXrrx1xXN3YT7D5kYmWmyMSrX",
  "key38": "3rf3MstepAtTb1tnsfyj9U1cfYHyvBHdRiBDbjamPYaCNwnUf1e6VwsAgqPgEiRHGft8Jr5p3gaveZS4YwChaF7d",
  "key39": "51XS96N11jr1ZhsaaQEr5MEhG9hXE8r7td24Dp8dm7kirHoLqDysuGxPVebxZTKCfxEDT6eAVo6kY19sUcDf57b1",
  "key40": "5uhoTszF6AmnnthGYHvPK4HqEYE9c6uRHbb6RTDJtrSWCNH6L1pksFRHSoJ9nUkPLaaRXhLwuiTrNEuQSgUgea6N",
  "key41": "ZVzz1oTRJuE8giAn8mhSb7un7t8BwKCUSND2PmJ2pznugwgGJ9GHe3F1Asw66kPfos1TuD1E25keFrNytMFopUP",
  "key42": "2N6wDgTk7e6puoMBAdD8EFN2DJzeG38uDHv8TPn2QTrRJFzwNar2jzCMRgb3UHmWLZTEBusKkeZWwFkPz47fLuLu"
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
