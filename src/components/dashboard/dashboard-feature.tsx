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
    "5L5p1jXYvFsmPm5iYAVEerFjsvwf1bc6X2MUrxg6TFMBf9fNMnjmUWmfVSm7De92firabgubsqJXPMv7Rn8XjhBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABqsmfqBrZVTgkpM7nftUoixfeRPzZ63qrbkTJ8xwEe9pABuugPkAw7kEgZrkh55mxrUezeLfhdmn3XuoYLzeFa",
  "key1": "4kvA8vAq3ENE5CDadTydvTHAVcVXnBJTa7japqswnSxddqWkFpybCwTXMd1yXLDDdGJ7KzTviURQavns67DFKa8X",
  "key2": "2BeQbkKSA8NmkmUhXQiUemxvuXZyyT2MEMPQcTDErskD49RxWEMRqBL6KBoxr7YJVc4uS8afvt7AK1EGJP4tVbUu",
  "key3": "4zB7m2YUWcVG8Ui8xu9wjs3x4gHAmNaoYshT2X3zKTmkScGmBhpk58ewiSxDHaKQnd2ErCjALJD2gDzjWis9GJxk",
  "key4": "31GB5hJ3Rp9BBnLsmHhxyEnyFC7jFvjm6VY764RStRkpGK57iFdjRibQFUHfLk7uq91DPswF9ejWyMp8kAk82SC5",
  "key5": "4LXt69MmFdimdBojkGEgdJxugMCG99etEUwY8oChNbe7G29GDW7vJmTy6YXmxzK85H27RWaeVfkdGqweeDXkJcME",
  "key6": "3joUCpip1yYzq5tCDe8M8RR3tpAiNzrSK6gdYXzpRWMTk73opwo9FV5xpei9mQqZExMFF72sS99UCzSn6P9bBfY8",
  "key7": "3efgiFGXHFXFAXQYhHYRcJRTE5ATujM1cRzkCYMDw6viL8uus9cBGHhBm1wzKVkEpFukCZMBhJTnvbtpAKsaYHip",
  "key8": "aKLKdMVHFr9r1iFCkHDKMjKrDDxwqkhXWD4yT988naPQ2JP457gEmVQYko3Q1AuDCtAnkDztgDoWRD2w71QbCTp",
  "key9": "42N53uGXazG5KorCey6Ezk8cmTnbBhDGfMD3JRqW1sR51GpqNaLkU3w81uXkJtcsXGyL68nfFmfPoafCZF3fXsvL",
  "key10": "3UyUP4BobFj7CwcnWE3QSneN5ha8jYye5jbBZdEswRVyYTzUCXYJDFhAX4sLogDTF75M1Ak8FRxLXNxRQPR2KSch",
  "key11": "48BLfNBp1gzsiGQEEzSwstGsLMXYAHL7BqQ2CiVosCwN3sCzVPoq7t8EmGStRu9NXJ9tXUVCpqwGpYHzqevyfxrs",
  "key12": "33Jv6biFMr9zj5y3GtRQPAexrqhhoy298Vf29A4naLgjSJEwpD8FUjoMBEtfYXFu1fPxKrMbGFzGo89tSWJDSuJp",
  "key13": "51s2RnDrjz6Qy4WrZ6vQbdjjQpXN4zZFyxZ9uyCEtoPBwZdb1RSpVfLUyW8CjiyQ5MG2MFBuaqdLKu6UmE9GGcdw",
  "key14": "3LsBwyHKJ3jCHabqWLyzeMJCkrkNSaqs6GPRbBp3UTabn5KWzfqU1z3yVrCCZJ6QQ2BnMCSfT8bDA8oKaQYEsgDD",
  "key15": "49hX2bAaGYu5rQuDkhhjhXNdhTVo9YTY5uiAvmbZn6f4nrtAFBLLqmeswc9YeVMKgoxJbk84kT3jiAT6pFYFyQHe",
  "key16": "H7Kv17q6PENpELHtJ38VNhdx35oEtZ8DHwqehoA4hNFd1mPi89BQqRBRW8D4mzngyD3pnadDrR5h5V7Twg5ernb",
  "key17": "gTT8K9npxhM2Q3njvgkE7aMDehdwcgbfb6ZdPL9ekBhfcQWWoNqVPx8QZ6rcmZXDWU5ecQdvaSsCNdcBFzDyVn8",
  "key18": "5YWEweXpLhdP8EnpWRryA2PQ463PczEsuFX4iyj2uTPsvasYAqeVa3U5aQbuvHoXsLCVhfCXuedSQNy38sDKfFnF",
  "key19": "5BpjiAr7fyZszGuVYDWmkh8iE8XaThNdkQrGDvBib7J7J9NFoC7UZRTjNKh2BX7KwA86GieYzejV3yomzuZ1BmGn",
  "key20": "5c1w9pPdq4hGqE1rxceYsZg3v1GNwyXi9KUgEG1VqBVut5Xr9qLBnz8zZPq3WG2Mknk9rourrVkrMn7vJ3W6t4PR",
  "key21": "5Ch6AsJqzrUoRmDKVYGibR41XMGiWGZugcvrKvCTmyCe63FSLSLFDQA1CSWPfpv42cTevc9gTYSF1bdhqZpcS2e9",
  "key22": "3BfYHhRYqgbKGzXayJSBdvoPVKTvowkLjyejr1ojyNDAXubAB3snWsE9zZGaD2ht1kQrV6sqwdsa3iMAGPUXu2gd",
  "key23": "JRqs8XtFZ9X7pqYTxc5gnhWHU9h3z2WSGUTzPVoBwDaGEMMmWY22bads3YFUaG92PZpepYrg62B36Gr3aDYy1Ms",
  "key24": "wQB4nmJJgFg2vz3d7BatPnAXPbHM6SPmbM3rV7igw3pAefaMq8GSjnABncWWn7YKnJVPb6VTAQNnGkyweHsnK3z",
  "key25": "2wiSpKqmpoeZgKfFi1zLdyCsQt2CSMurLNvsm7BYZ9YYMayZRpQh3jBZREBymt2CiB7mvABhvwbeviyRLgAB1Yit",
  "key26": "5gr3qia9RhStYBUgy7bCSrb9ax1frsbEAh2PuThxg9LHw7M1QrZLCEbW67K6ANdzQzQwx2noaeYWx3nzAFCjk16T",
  "key27": "3YqtCGJT1Aa4hFzdHX6ANkDhoXFoQyr3fwjd1KmANXuhjWT68Bm91FEwyvrxymrPhX4gZH82NKtmrxjyeiP1ZfaF",
  "key28": "3pJRkAn4wmLxGTWaRJP9sUFkhQUcpjfgFKnhWBXDz7geUZoxd5UHqVVRwzUPyk424ccWyNwvY5Bp8mkxMQwjdETf",
  "key29": "4kXwnK2gP1KXk3hUocGF2NbHVjnBebYpJoqzjz1N8XdoT1X2oqCHvgRwtzWgRnhxfhofchj3JFNf39FzdQKrJXcj",
  "key30": "3HRpPELA7WTZz4XPfjcPpBvijmKCJTkF1zzK7F2qdFTYW6JCLGD79X44uW9NVcs48wHcaHwhrWPQFBBmrbhc6D92",
  "key31": "4xLcVHVvjWYQdgHdsf9CMpQp5DygvUgCwy56f14LkgC96zZ2m3aTCW4XcY2mG6S5rcYKRyhdqT7xVjeBikpoHFyn",
  "key32": "2zU8g7eafC3gLEjRpFdwiaJUzRwvvkyxCg4ruU1bCrka2YYJMKTjrAfpKtzuzarRqCdGWkwkJJr1mEap9MFvUJY8"
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
