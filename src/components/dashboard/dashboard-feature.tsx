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
    "26XbQG2m71Vi8VeH6fNZ79g6zdsS2eGJGA2tVdyaZGUjgUz1476XWLWnFpdrco7hSmsDeeTshUpB67qNoEXYyjfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YX22NVKDeFfnSFxHrMvdJDiwCW2gnFr1N34DBGn5g3NS2oGHfiiifhpoWM5cGKpvzdwQexbTof83SptwgAaU7yJ",
  "key1": "3e7SBzACpeGrMTdCMYSA1mErdQuTVTNmBi1u2gdAkpAa4voLuWcqXKREyb169LyteWH5JtX2KeXnUbftTrQ5AUaq",
  "key2": "5q1Pg21CDhcuAwDmVHaSFyJDWZGv1cRUjGiQjaJJJtqR8HS9rtkAgAEbwP87X52sQnNYH7Smreq99WWKrq5zyQe6",
  "key3": "2mtVZeDsE27MqfeAwevQPwSBpCqTgzbPNd5BYCuLanJPF97WqjGZ6V6ZosmkvikMTDxu8ZWXU42sWqqrZaMWoLrH",
  "key4": "43rx3scoHqFUACNUXUoAi7j1ir7jXojooW6Y2AHbTRVfPvx6sxzMyB8YQVbeJLBkYHyh6Rsr1LcAB9SqNCZCJ7w1",
  "key5": "3YUuEUWe2QJHeFF18iVfGngSddeqMPB6M7J3PDMrjrFWEWE6yYxPhNQVUsddYWh4iwUrWpXAiX6JZJscd2dVLuct",
  "key6": "4wcJqkPBDfx6DSur7fjZtbeS8RHN1b8fkXjyEc1jswDvuZk3Z22715to61gxVYtpaiuCZrRqRjdnrZzx7Mr6fyjD",
  "key7": "4Zqok611WoRZ3tXWVQiZGjPPJwjVXA5rE4RfiqzAhu4ctaMBoD3ixFad9udi1QRm7DqJVEFfn4QfVzzuaJuQKwMm",
  "key8": "4bnAM6QYvcsjoE67338B1bWyaqZjzk11UxL5Xv46K26MGKCQqPVkT42Bmdmbn1HTtbVyQxJNXfKX8j2R62k72evA",
  "key9": "3TecMVRoHs2MZ9muBARLNUgESArTgjMpxwH3RvpLFcU14Zaj5hMr7M7ozAk2gvcrAcLUeWtnAjgWJLjUtcCiCLg",
  "key10": "5h3krbLwv8GWeZG6hnFaq2e14zkJUBLG4D7qzMEuZySakihwmNNgzWNicRr6mdgMT38geg6VPuzvfg7HUPuEi5jc",
  "key11": "2zDc3rbn4vwy1GQs8tcWhX4aZGTcFw22dNeqA6AXLVaLNiKsnrJ7ig46zM3JEQe8FVdvEfeekqJkntJinRuiwZ91",
  "key12": "mSv6tn7BEKzmAPoaav78tyG7T69D4r5L5ZxW9uk7y1HnBRicbTTFFc1NR6JHzmrMc2rYRzaLERgSzTgfZ37jkba",
  "key13": "yqJCBa9qk3yakjEwre3CjTh88c2z5C24CDRf5KEmCYqtBDfiAtTdBkFF1mVaDCQmAunZ8oHjZZyZyiQV8Y9FNiP",
  "key14": "5QTW2BsjTAABdQ9SrcbYEdASLaiiYLWKSy1jjii1kZa6seyKmK2KAusj1msQxKJxGRdqis94zjcDEtD8Ui8QUSMH",
  "key15": "2wKkZ4abMt6jMRu5PHq4QFjJvoEfTH6PfsDuLKQdUNaBEmY6Eefk8uxHhX2CSyRwC5v7F3k2ZuoXyBwrCY3YBhQG",
  "key16": "mNd7xrXsbjPVhUE5jt9SfULRj6HS7kyq1VDBTzewZxkgycy13bqLDnUjWJQwm5b6UnFwt8GNYH6MpYMJxUxM7zu",
  "key17": "2Zw1uPi5vMFn5DNgeSEYbAwwVtsPJ8UvBfGLrGrEWGa64B94pGjToC4Q12BnmnRVZMDjv5nwopeTuXJCxBx944yY",
  "key18": "5Ya3L1bqvcSQMEo8f7444SJ4hgbkcAkD864uHYhetxdeNEugxeTqKuasqKfBqhJijgbsqm3keYdh2wXfdNuNVTPC",
  "key19": "4SgRjXtxvwQ3bCjeY9HuZWBguVwMPKxheNstcwu5eVewkmw1Hxf7iRwGXZVFcbbaLB63rzR4dj6Hmzr7pnnGNHZj",
  "key20": "5DMJ9BtPuzVekmZ6Pp4imEiEGK3XtfidNnFyHubNkHBcidtRM5EjMdRsLT4d6vNeMvVP2ZfKm6PxvQCuBVFATcUT",
  "key21": "4UK46mMCZ14eRhBoMAssehRMCswq9cBSLpJyCei2mbX2r5TdRLTqjKcHpvDWhiWDihzxcpxCnDMvsZJkKMJRrf9C",
  "key22": "5dXQreZVeQks2kPsd6Lc99D815JxL54JFcUFZcMssjTd2Hcpnr7gnTZ9pW2LHSfo67us5CJ1KoiWXgA3UuTcyF2G",
  "key23": "5grV1pSzPf6TLJG64qtWQxvN7fAQLWKLNxqNx2Bv41M6GDk6C1GhLpewZS7kdcebqHWZTGUo2pjevP3kf5oGFLan",
  "key24": "5cFBffmQ5hh4ACbVT6XMSrDvWh8rXBXZWJdb29yapmQYeaG6jtqwjx5UanQefTeQk4JZGjDW18DFBKdsa2wzCTPy",
  "key25": "5gY7VBJHdL39YtsiBELHxb6F1XEzekqtmwZnA89yEcAHySMd2pM8Szmn3QU5i1VkoS9gQBkvhCn5bJe6maCzLioX",
  "key26": "63vfoV9qm8xPssF74h98sNU1c7EzEcqXPAUyqcewfZmVwoqnGneGzy4yHiVwGF3Rqrm3SjErs38i9GWJRZpP8rND",
  "key27": "JEf2eXASqxWqkCTrFyPRkkSq5MYAYcRd3WXU1SKzUetkgJUBNjeJjt4dAZRG7EGsX1ioGcyVf4jPG8RmZJaD5Rv",
  "key28": "2Jmc4NJFY5jsKasW2QWmrfK2k1D6K4T9GvXjdm64ygME4N9FTbwQSrs9UcRqhN7RH1XssSvdbAV9ALQ2kdndr45f"
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
