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
    "2oFkYWwLyhbBhUxfULzdirt8KpoWYfSG8fz64MzZSCPk3aDj7MYX3AhA8rnMdgx79wGMHFMytUiLwUPn6gDfsttQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmAuhRufkxSF3JSZ74fQjaebbbUCzAmZCFJ2MdX5iCk1EdEXyZc7TrUVxKpkAsBTzFBRdiu1ifD8KBZrKQaoFRU",
  "key1": "gFp3LBqCp9yQffu3ZeRyP4hxKhgPDdjCZe3LPsNebpKLFMKY2FCnXk5uCoJhfoDmy6j6MEY3fPn9aSYtVhGH2hA",
  "key2": "Xp6Ky1idK2Hwd5S9z7T5bgRLxzUobYqi38Wfbh8PWoarhSw5S2hWfntqiNmXtAGwPE3fZKifkXdoUcoYYgavxZQ",
  "key3": "4pGvRCeP7s7d3hPNtZks6SKpzsWCKQZUp2tfux4Ee4pa1FCSGnmmzXVqowLa8wicge2eVFpRJYjqSCDcQqxfEn6a",
  "key4": "4yrrWA7Xjt2WqZT8kLov8vMKwjrsa5beEKW8PsPsDknkiB28ci5oRbZhUiKVZG1GBtshV7mrSAqfSwUyCnyPEtH8",
  "key5": "5LRNBthJJqCgrWcj6piqqNzSEN866pEvwqaov5BQMMbk9pNhRFwzoHamxfCxRr2ec6Dk63PwAckak3iikTSApQCx",
  "key6": "4WmW6Ba2gMcTSYTtGFh7ttLXpiC9PU2yzMvWNDHuNS1nNkL9rvGMCNgspPFSh3G4ast5sF5MaZkRKeKPaigsZKhJ",
  "key7": "5xuoW5HV1CAKFjxYrdedL4abnFTGUjV4kMcynBNEVP58RW6CsQoDdDUxGzXFACSRQeAhdP21KJvZ9jdC88XCpwtW",
  "key8": "44SBctWRrxcfbuHNvs3CYi9NLiad1GFaYjTH8UNrCCCseWdk6xy8NARcruPhw1ioivrLNCUCALa18D8UzR6iNnsJ",
  "key9": "3TG3o4Pe6w7kpYPV17xJUHm8yJDpJsdbF2zK1D8789HfBvjTKsDjHVTmRNGbTuznTDmw4b6e2UBz2K7iphjf7BQh",
  "key10": "bomWxkj9TNoqDm3V4A9rhB4V2kHXH5HDBLGw1Y6ooBWP2exToC12sCw3iK4UmvFJMnbbBdRvYU3tbSG5tsstcDi",
  "key11": "4BekTzPXu3szc5JAiyChiJ6ZLLa97bHtEquuQ8DG21eZkTR6KnKthUQixZtbsV4nhKwg9Ha3hegfgQftbnV6gubK",
  "key12": "2yvrV8mdmvpNKtaqyLh3JuFWaCjBjEkyan1XnkZRZwGa7WUDjrMVyucvtJhMCMkH5jHrEiGTRLvt25DSfQFvJZaB",
  "key13": "3KbszPQMmj93vWoNskA2iah2ciMS6ieMGMbegEX27zW94cQyfU5dJBUuHKj14EMwzVojECkdg9kPLj2EgmXj9rg5",
  "key14": "4MSTTbtN4xbSFmpCNxr9s6Sf7xdBLLP8ytNvJqdm4gLHXuqS8qQJ5wBgdX6VDQLioy5e2qAQCNLAMJC37tUhZijL",
  "key15": "4Fnp87jyrDp8JRrTPrZynz4LrHzSLND37pJ11r1EWX6yWHhMk1zbfGWCh9WWD6ZZyhRR7LcR3J9dJyNUgpe4DaNh",
  "key16": "2sPQyZaLC3k2KN9F2BDSiLYDCiehg7PPZrgmGkWAPEdoTMa7zx1v47McFN8D399bmy5H4nxHdm4Pt5pvTWoVChoC",
  "key17": "JArLrKk61y4mK1L16K8nTEZqjR5V2HTULa7XXKdY3FLQDaUWp4CWN3PdeSbeN9tXRVyZYFWj8YEz7R9Ty9WvbQn",
  "key18": "2Yg7cKWX5w5vgXCUP2oQhSji8NbgzsFkwW3gvXpnXoZXwvC7uGEKdhvjhX11s7JjtFdSemzbg4h5nyueaugAr25n",
  "key19": "36tt44oBLkhSDwPjXhh4jgYRfCUE4QtCp1sPPc3N2LpVN6Yv7BU31ryAK6HRBR5YpzaRnciJNw9qTA5n2Vf2mTH5",
  "key20": "2RyruLRAe6g4tuZ1Yj88zjmsSoybhDunUHVpQ295CikFYV8fXeYyYuKBBs7oFqk4x638FDZ9Qs7k8aBbXRQt8GkG",
  "key21": "9Zwc21RfyCSYVdATsLCJvVcWpunGvxpnoEvSfe39NjYVUUGP9px6TpySaYsFSjEbEs7DqG4eJACip1iTed1Y3xE",
  "key22": "557ssdW345xEyBGtfR2dGVzFxjoiERFPhx7fkYyuQwNH7Rh5maMx7TBQG7K8BgbV8DoV7PDmgcbJjZUuWVJpE7Vj",
  "key23": "64JqZ2dFcAHuMs94MpkkNqo1CN9ceoFEJjCZeBgh4JCyxv3BmmUz2RLwWPB4Pptqfc8geWVc6wNSu1GeEXKyjZv3",
  "key24": "5ekvcCd2bF1msS81pNjTUhciew3edZm7BBrmiM9w4Vjy4cA99bajwDfohiGKLRb7cS5p3Z2zUGwh5UbdoQrTDo83",
  "key25": "aM7Js1QCKrNsBTqXjaXVBXNRkaUnxMMs2eZ8pkn26m91g53eCW1ABNpapB5wh94UuEsugm6QehPKywwDsz1dCCw",
  "key26": "5j5v9ecvScxJjP3m23phBNrH32VV82p5wx1471qpPSgqdZHPHUuS43X84aqbaX76YRoxXFWkR41jWAhZXnkyrQma",
  "key27": "edWLba2XiKYN2yeeBjjAkVTwG9FFQ6g3CSsLwmMNoCwtsUw8WNHce9bKaiXg12jxiQDMqk5ievbENkq7ghmSJme",
  "key28": "bFc84R3j8xm4zWdvQ35d2mPjDWZ9Lg6UieSfqNw9CXjyaTHVhviA8VxgsjXwDJ85AoJjsR1pXffJJDJPmHx6zGk",
  "key29": "3B62YQTGprK1WhiYdXZw1oDg4exRHEUBPq3SvQgd8vnECbHZHr2kECVKrZRshQfkZvJUShUQem7g7HCRCdGd4rPP",
  "key30": "5bu1KBNrRZ2jCvzVn4wQFUSbFzKEhPyjM2Xor3CiAMVYGAeVbPq3zzH7PAotcWrrYP1nfG4gnhN3MjSYVC2DJbdo",
  "key31": "2LhEzG5tZ2HnBQRm2r9xj9zjPV2XuZa75WUSDSMGoqfEapy4AQyPadaat9LJbX1DabifGgBbQ3gtrFbNwnzP8XRH",
  "key32": "5d6hDxdTnuM5V62LPTTQXe4UP76NmBZbHAzhuS4uoUK5JPWXwaoEqBY1JuHQdfWNY6Lja2mNx1hgC8eSa825wKvB",
  "key33": "29DCJMFcqoNAcVaMxmAJ8wJwbuoTgTT7scueA4ZDUrpnbLsnfTwRjXH8a5PS13PapdCaBRCTcAufd7A7eAi1Q9wF",
  "key34": "4KrArV64V8xNCVmn2hLv7SA2cK9kDw82pJtuMgUoFgAVu6pETp7WZxBoCvabpWvrXPfmPmWHA5HVEmD6KuyS5WuJ",
  "key35": "3gep1n82TPrKqivpuMtZAvrCqvDzb6KWWEtcy7jfvxQvuZqvPMQgfFGWKnycAzxr1G61yZB2F914Ve4qqq1Q6jJH"
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
