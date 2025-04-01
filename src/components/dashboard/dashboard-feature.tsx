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
    "3T3QibCRVoad67Wu93HezyVmtoNWf2QgpEZFP3z8Higaf7c6ehb3Ep13KbQhKBvhooVe71B1uRQ5zmA6We1VAyvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMTY8yARKymkH632CmyABoJeCBUsbwLdFvBKRFuqh6Zo1CJdBqv7FqUWZbcYEvejstFkHs67nHcfW2iBQQicmfi",
  "key1": "vkwfdwScErq1S7TB7i4d1Boe7G1WvL5EKdp77ay5WFquyrNDuXVKuxvgzZhp4vHMfydUWKNrFuFsH6jArZnmZbx",
  "key2": "3YurbwGs7h1MYxv29BZdrv788CB2ihoZhHdf2UdzTykuLm6JGwF7GcLDEX489EW72iUjaSMcxvBFLAtEesBmFsVy",
  "key3": "3129SFb5oPxDeXhG7Umqu6fsRCvtzUVU4keTBa3r5iyZN7sninnPD3DuyXLYLGiUpwrx7TZU7Fym3Nmu41aV8bpH",
  "key4": "3Dr5byEzHaGN1HzGhr2skf9HdJbZX6ZwGaaFaAu3EjpGFuu5mBy2UJ3STBFRVjLD2CYQq62VR9xh1ySbDrHSFUCK",
  "key5": "4EuqL8FwtTSnm56btxzL6UrY6G3Zm7FaRekHbXsYaUH23XHay2r1picFMEN8j3gMLYSSEnqnXMfpMidLPVy8tm97",
  "key6": "4FdvFr6hVmfXm6CdAmo1hixBpDi5nUgJ1cvfgyvz8vG38eqhRyaFFPiyiRsYVM4XpHRxeA2MZXSQPMnMc3PeT8ze",
  "key7": "574ocCfZga4a1e8VDojR3XrrhoqBn497SzYJXYme3Ch8fdshMbN4bcLWskHaJ14B6eHgC7pb9tWb2GyvrvpAjV2J",
  "key8": "4gP3i5jWUzBuwpPPCLSXHvFWr14VLkyHxjwLd5bVWq5XtBrWo1ajfei7cMpJYi3axZwqdEQndr2XHTbi67jzL9Bk",
  "key9": "478iPnsMp82JmLqQpt4hQZJ38dHyymRYFT3VpsKXXDzuzZGQtaA9eK6gKYj8mAwWfYiybTtcZS4F1CXKHzbpLD3C",
  "key10": "5PUPoMYFQTN93LdmiegoefTLA2N9SsvwSicqrxLMnWofb1zdRUZfVLidwYthjDP9AyZ3bP7Cse1EHeDRqpaX9Uob",
  "key11": "5tV3jwzBUxrin4WYzFzb2aM5H8CuzPaStY4yjn8BS4WDAbHFJLxS65jkUxnGM7EHHeV6dJUwoaYsSAcRR61ybhte",
  "key12": "4EctyHaXHvMGd4VKWtU2dNmdPyACd3zvPEsMQzVYM6ZKSRdCz8NZiUZM1bp786LHoDjBb1L83rf5RK5EyjAU6ZmY",
  "key13": "2WJthBGurcJj22x45fcbafhd8CrxsmK4LM8VXwPpWrgz8vTZPSHgwkAhf6eupNxn2kPh9azgjZ8sTLzhFY7pn7jk",
  "key14": "4j8kdqX6BkoV7ApuYU38XNKr7JfUnQf5VV2Xz274EHkJQh8oYzRKgMs7ZYFmRWDHyBpEwYYVgzGmu7XuPE9VeUmt",
  "key15": "qC4zHvJ8bjLxrsTSV45XD8bTdDwn1hMfKdN64SQefqE9V8GPe3KDZTGahteRxMxjhUhb5sfinQYRTVfiPNj1iZn",
  "key16": "4oXa2YqL5gBUzCdfbZWHoiojUnNvF7S37kDj1MuQ9pXfUJVwuAYtHmDJShkLDeK9tXkPMJq9YzKFSCgz8v4yL439",
  "key17": "4VYGRDRPcDAGc8XLr6JbUMsm6zr3Cf55k3i73FxwRRcMZmT9T22qfoV2bBs921oe72GLfABC9yEFdZhg3cm8rh5z",
  "key18": "5mwFenFpqSAgsi8fa5gLMPsVcjKMfKvU1bG3UKy2Xbkf8CgMUVBd3TqCJTJAFt55KsADgeuHagE7KMZ1XvcaswW7",
  "key19": "4LBzGUYc8zH2jCsVCjnCpr1UYGyLKE9hpwvdieVAdyPFYuRG51WfGvrevoLUaWuP1NsPYrfaduj6Qx1EYteNPBfv",
  "key20": "rkqBmawawqYR1cWtW4brAN1qmyGjhwDXeTLzyA1M2HmV3WEEUCaBQGt1jQvvajQ1GXMYhiWZiaehPMjheK6f71n",
  "key21": "5GYRdgbueexmP7t36f5xvhq2HJQQWNtc58QstKxHgeKfVsRJMK5fMJFw8CNguNnxDmFG6qRi7VAVA2RA4Y6YomDj",
  "key22": "63HyBsdMA7eg1mb41js1qNJzaKTLH4HGvS8HhrJxWyQmEhfFLE4JEN4SB9hbMgEG5LB6HEodTRi5v5c8tW1UCpgT",
  "key23": "3eZQQ9U1N9u3QyZ88bk6Zeyv6LRmQFH7JRhPFwK3et8WUfgUZbWbe5epC8MYuRQdeyaZgUbx951ZRRAwJZHYjXeY",
  "key24": "v9adFBSLZenLvKhuXrmbEyrNWWYBzuPTLSJetBdwycQtsmoG4bLuogv89zL8Sq4Mssk1qiozBn5kBUBvnjxfdWq",
  "key25": "378kGCaZXvv3ZD7SoxEnV7NiQ85RmBMA4Fd6nHH46qRnTUTXo2fQTW1hRneJEx4D5Sv4Vuez4eRYw3yWU8XsZrse",
  "key26": "3WP4KfrLV8DMNziy5Y3fgFU4xU18oFtG8bkjuxtCcVj1WVGXQRfryw5ed81g41YyrjuSnmDPHDpcyiVuaQ1Kpnis",
  "key27": "3uG3GXcuqngjWDLpuFYL18RnaRhw8UeBvCBzF2JS62P7q5997eEQi18jdwNJW7NKfFaixSfswh745sYP8hMDW9sF",
  "key28": "2mTP6pGe3qXVqfRkRKYPBKoKifsSG6CLmv29VArjND1mNodbTgy5akwGRuEjfnH48eFp1KZiZADe4UZuvwiksyX4",
  "key29": "4qTPzEpTudLEw2QvPSba3qfymDundKL9UNjqGGRXJsKGXmKXjmCeej2Z8p9Rd8PL4qDqrQYWh7S33hMZbQmWBZK",
  "key30": "24Zi1QCjsmUrucaZSZxXdTPWniLHf5iCTTTyXEa6YMRLdjzbUeymsrJDSvuPi725YkCr8vzbGTkcS4xv7Ng25BEP",
  "key31": "3GgoZCkbs94HpXHjvZ8KiR4BwCuwuH8S5f3hS8VRTCzDVp2eXYrC7uRhytyByt5DN9Nfz5QsCvr364LrNApDbJDC",
  "key32": "2UUhZ9rhguekZHgApTFEkaVV8GMPZRcJcKqomgWsC8VpS9P2riAVSWFXJhU47rfFwckMcmvLLqWJKLm4WYfvqELU",
  "key33": "34yjGVKAZ5yfrN1UPvsNARGGmzPYwy5FzhgCWepehJQv2koeiF6nUcMRDxLUTZEkHdiwJjg8azkwTGTLKfSuEDcD",
  "key34": "5qtqxGMAYfqnumT4YV66dJ4Lse5LkQ1NRErojf5JLLb5ng1Y2xYSG15Ben5Goj5jbHfqQVVCKWGMcjvQ8F4xgE6a",
  "key35": "4Z9f2WqzXUnhjUwUt9JpC4YATYpKmvvRQEQHqSpxZxPkLRudxU8iWddNkpvLubr8YWnch3bjjkn5BQhmRc8P9bnv",
  "key36": "42QKEfvHBPYYTbRV4yLpKUDZSTDMa6tMXrgncK6JDqKzPAZafM6mWToZbikAJwy9eDLWVRDWWc2U2yAVeLXfRTqU"
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
