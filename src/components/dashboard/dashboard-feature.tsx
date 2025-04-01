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
    "2KCrRM9MUWpYjTAWfwgCeZfgtese8M5HX56RQuCEy4zgDWiKXCR6Qca71mc9sFdNHhyQQzBh7p5Sj1us71heA3y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZcwXVyQakCCJ7KRFwGNXQvFQMunW8g1Z4J1FdLdZ8yNDppeBUsJPxrRNbNemCxLCxrdDgzpBASJiyCgmayQhF",
  "key1": "4U7hf6Edi4qFZnMqYgP6EAQNTmLU15zih51qm476cHxcrQKckTLtXnQStqJnC83yybJQ3rZFS4RUuyU6z4g8DmWu",
  "key2": "11B6yxW47epaCf4dSW2kHbPyFWy2mvjz1dckSSQ19dKJNaDh3KXGMoK8ksGHFJ93LDxFJVGngUHYn5ywdem7h9f",
  "key3": "3rYUTpxVbn76ahundyQYaAazFVV7vBQ3C29oqbvi84kYfKettdzYMZm9cD9qw23Z8vgbzfgdcTTG15vUKw7WsQJ5",
  "key4": "5EHJnzXPHcBqHNR5UGuLULuKrKu7p4so2tviqRRKeCZBRXjCDW6xNSdT5Pc1wF4rfRCC13CVxLYsUU9qggWSeNJF",
  "key5": "5xFQVFriT6v7GxfSp6d7SSZULHFHmGCk1QKbLDq9LeZZknQa4b3cmWA3dxQ2z79yDVSpGoMWuML7pYND9aAnXUFf",
  "key6": "3HCKUgoZaGYHFZfV9zhxCFuEGTxHdpbnFK58HHu9mD9Ddb2NBH7badjivdez2J6cL8FidAnmyYE9bRvBZDFykatp",
  "key7": "2AXHcG2nUf3DF8NDmSvuz5CpofBHtFH5UeE8fiRwEBhJY1wUaE4S3T2pSf1tULZGhrELebmWzFYgNE2vh2bQfb3P",
  "key8": "5an6tchYLU8QYUUBtS4dj3KhUwjAopowCkf8pTDd2KUTNyAtTJnGw7hbqWJBB7Y2i1GMBRXYxgoKvjMrRRhDRGT6",
  "key9": "4MQR6QuPuPRLvD5SsFzteoa3TYS27aQJ6NfRpRbMHH5Er7b1kMWJJnKJxW9CCbFDedWGZMQvdot4g7Qej6tqELGD",
  "key10": "4xsqqu58fivcdntNhGyAzcLWga1UXuQ2ScrcDeFXUhHBAiXuZTW3oK2aoCNNtuA9uz7kwtfPk7qW2rfjPVTnaJes",
  "key11": "ZKgmPvL5mxXtpsnwYoNbA24cPsXtkQj6ZFDntaGV4RmVM2PAE88nLYwzQfau1u8raYsoUwE52aCVQGXfD3T1aMa",
  "key12": "3K62bTpAnJ9WMW4NnXrSidse6Tq7WQJxg24U8RPijceYLxTZPWdJouiYxSNsEiViMFAx7Zxx2HXLyUYE5r9uBtUD",
  "key13": "3aYeB3qdiPvSkbYAm2ExzB8eUvUmMoUvzPXZTJwmRFnbFnHKTGukDt2SPo8Jf6vp86PtPPcxn25t9nLiShc6f83N",
  "key14": "QtvXJteMhVgzMw526HxdnTrq4aokoGUShqoBoPCb8p74Qneuv8gBB634VBCzhrLv5uhGJbQRBXoXiVQG3AaXxa6",
  "key15": "2arGv2x8HrWf33dAP36feLLqaUhN7AZbXXvUxqQG6BcrnoBdeugF1Q18eEjL2VQVYfgDxQGjXM5zHLipSk58RtR2",
  "key16": "KrMnqEFqTMCShHNL2agNSc8zyf9gtwEhYFVz8ZBC2WQc2DheEz4zCRHQytZndpPbkfQzAvyW45egpisVDJT6gQf",
  "key17": "5PArvGpLDZj4k98R3jpMXmfpYAHT9vc6jgr6gtieo7GaoCFQ3q8cLbzay3CaH1278jr7oxRJPUC4SDsnVsyaG4hX",
  "key18": "2qxGWcgntuq2y8jFxkZaYnjWLG6SyByXVX7zT4wxQ1GKo6L23rtr9vYEWLHrxfjZeMv1MJ6y8TmW31FjBFJXYtJE",
  "key19": "4GdcQdtLJ2xEkMB6keJv9ugNdHqWMxbn2fpfF95cwkeKztFYpLqbbZX5nxxwyC6qL2CHu2LuwaBTHDBm1GKEP6cZ",
  "key20": "5DwYVDHG7ea1apJY5EZC6tfvLmUTN3EdPZLgEpWkTf76LPQhDxqzWUCR1cDwKQhYFeHvvJYCdhwdKB1eqFzdGvs7",
  "key21": "dYXwYrkpbo4W25GCjh658CDVjUm15sFdkWppspeKdm3PmXrpFiEzr4FAm2Wcc2iTwPmpw8xQJVVHkqWxjawtNZm",
  "key22": "4kw5f1vsmUgFLzGc9Mxmc5aK8SVcMhoRG9k6uzHC3u6Xsmkt5sWEKRiXsDvkcJqjTYZACmNbXaMRjxVokMVk1v6N",
  "key23": "3UsSNG4zmMtwJsH41w566mt41TKKK8FakCje8Mp9Y4G55baC2setxWhWaFD7xo6voteEjiJfJrPRQmSyquTQ6r8p",
  "key24": "5JBFEJARaD7A9oAC5EBKXsVoX6AECJ2hjM8YWsYZYqTeBgvoJQuPvZFgSwG69CabLy9of5xxNGFNqjgBjMWQPH3L",
  "key25": "5XirkTPZJAKXp13rvfBvGgP1FH1x9VKgC7GrC6S4pQM2QB3Y3Tb49FgqqaeeMiJtoGWRGwh1TNuSyLzjYye49F4L",
  "key26": "ynpLsya6QGeJMhxGCPEBuHu8AxeGzKNk41L8MTAekqCueFiVtiigXGhneajGJgERt9BMhNb2uuJ45kJ78Wx6WiN",
  "key27": "2G2vcvvMmWApfRgrkaGFjeza553X5SNnhcY8EnQwvM54JH1vM8dbcSAcCDCuwSUnrEHhjhCsmGUugGKRFC1AxVpo",
  "key28": "2NoRx1CZ6N38rkvNmMgUhpW1wYEYAzmqFZDMwtq6Ds8vQX6nkkF9giXRtSak1zp4LcJTqmHiRgpcW5eyCZmJqWE5",
  "key29": "46ASSMEm2VyvdEh7FMK8fHDJ1oErLoED2hY2xDYS1dpyHPoApp9wxAgSCiRma9WbhEgwhuCbxy8xVodojKmwR2jU",
  "key30": "4Le6Nu6gxQKfJKHdZbkwKykTWZEMcED1r49EYjEy1KqvmzwwDaynFY9Fw6HS8b7HAntrFsbgvg2ovk45Ge3pJoFW",
  "key31": "4ccsBvGsdqbF26Adq1b49VdtzYeZCDn1x3uaKMCiCkj9BLPA9ugXk1974JjLYo8J6DqFHishQwrSLkRh81HKHLC1",
  "key32": "4PSgU7cFkQhUU4MJNdJLGiv3QKcC2bpQVfD7ddHkFTcqzmMrthgbPSHUkUtAhKppphEyiALQdxE6aE8dJ1L5Zyz6",
  "key33": "4Hsn5MgRPbQVgSgKZjqMtec6TST6uezrZn1U3tLrJZmJbXH72MqCQna2N4vGPpSo96W6E2nFkzQy2YyNDzDRoXJm",
  "key34": "4HVnbThQotUBqxFGYTDZFVdfzjfVec9RxSS69UwJEiHd1Kyd6FhcUXNR7AVQ78wNXXyEUio67Ujvez8sX3PBypfD",
  "key35": "Kj5NDJFZrCHebRM9yVj9EtfepBRwE8qCWUp9Y9SHsiaB2gitjSLVvanUZdWNqSe5gVdvm4jKtqWdQzqnsvJFT8G",
  "key36": "2U1LLLuKL5upyQ7ZHZTeennLYGXfdVJATh19GT5A8hVemkUA5qqk36rM8hiGyLoez6jE2YWhd6HCivWhNGcc8ckp",
  "key37": "2i8wBYvJ76GxQcBqCP5TZiSdbkZJv6EKmQCyBbnHT5XyJxhkRVWQhnb8DJGd7b2X1LWo7TtkfzNEBewBheS97mKG",
  "key38": "46v7Emk4LnX7tNKkmZiv1kyutzGGv7Bd3hFpLqxHnDmgUcesvBercdoowxJsaLeGACd1AGSkUyxMEerpN29gWFV1",
  "key39": "2cfc3cDkeaihM9tsKbbdpRJkt5r9jnSgpHRZdjygvsDeWQBTnJ9NKWabeYitTbc7ShPhdXP3Rb5LJUfVd89mHhVd",
  "key40": "5xw8X3ouBNZLsKPfDrXkiNvWuRQTSEjYQGy1J3UJeMisfSzwibBURVxCXgfx7kF4ye7JAfUUwgnRuvcs3icKc6VH",
  "key41": "Vshy5A8Tbi4KSs3iSSZpiNwsuBxKqNuStigAxAd7FSyWmxRLAyhsjwFEnpvcW1rjjDVdhUbcuKNvqhBdTHZVwo9",
  "key42": "5ViuLXpKeuH91iVTiVwhDqpgMFQjNdUq9K7BLakmpMFsVAe7TCyPkq1Q8yQVKaxePJGs5gykys1EJCe7YsFBiRby",
  "key43": "5pSwhuL3Ve9DYCipUJQFy49wUWVVEoigEo8BTR1LPJGRkgbR7ErLDUmoDa6qJGJyykgFHUfh25hPNKc2R5PTZNxJ",
  "key44": "63eCBHFh3gvzNGTrr8spDhy4jgXH2qe1kNQhVeMG6R67Sg53qR6ngouUAaqdifcRKu6SDUxuodNjMmhKi6ZkVhmT",
  "key45": "5N4UMkZMRVQPiaexkCCzEy42v25KdjKGDuGpzyurq12G9ZvSZRv3RtkB8JfAG4VWZQS8LyWzwanFVRB87JxHyEQh",
  "key46": "65AEyWyVdndbifECUvLNeLuP7RjvmnrVbeMALNUaUS1eNS1o5iAARz2Pbc3rVbi9XFiAqmsYPThsa8W8TT9kjrB"
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
