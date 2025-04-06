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
    "24sHzDkX48ATpvSKZKHv4rwYF5scxjrMyo6oQwUQnaDJ66rJv6xfD4KDPoyNNEEocr8z3RPDqGjYVSCbEEeMUCW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WuxbmCrAeMG5hxoT1wJ3ZwvsAmVppfJ5wH16StQZB5gisAzYssaiU5qvtRckqG7AcHWB5KKPjwfDWTDzX98FwEj",
  "key1": "2HAaiTrvvm8fP3GeCKA6FdcDhxVmy3hdNf7tiaesE5NCU2dLz1ZPz8jhrwfGrW26hngknhocvzhYUJ8pJYhMyMh8",
  "key2": "2P91zcYMzw6kUNzpWsBpbxvEuP74v71XJhrwTubhDFGwqoZ6FKGcXpwzf1UMgSBxoASq75xLrSNPbUnH2sJSh92g",
  "key3": "23rVoTezhPk1i5Uoy43Ew81jrDeaaahbi8hjrjYsZzdRsaCRJ27UGoUyBhXgHDk6Mci9SC7M3b3hvvc6gY5j8oxz",
  "key4": "4PRJRf1uZxXWLMUv8thqZ4XE6ogsLMxdvvgze1t4yeBAteHULo6TFWRzqUGKYxfon77MgzEJsqVCxmoqsUTVuP6D",
  "key5": "5vVLqWoYjv95JDobefEtbEqgbyEn7ACGdHroXDtxJxbjnmBpJVPiybf6NR1Fa2zVLBEiHU2ue5oefXUVwrHuqRoW",
  "key6": "3rHDoVcQqCNWhaVZZbx8T1Uxs26RZiFNP6SM5oDr2ncXFkv6cG7xgmSrYfakGHar4v2uHBsUgGbWSEyZvsHkMVyd",
  "key7": "4cQH5FdfV31Zx1AHcyRuopDVok6doGqKK77wbY2QhWBcUqwypiChpNTLMvDouSg84x2ELAost6dKTzB13oDFXSyw",
  "key8": "5VXz1L5puMFGxkAQA7rFac2pDU22Jyp1wzaNe4QvFbMwCRnPhqox1JbprNsaYUgjRkHJF2RXAc78ZcuV2ihVT3SC",
  "key9": "zAAMPTKxUsy3Lc35Wd28VmAeRZhBzWHB6QMgQ4BYmD6R9yFRfjsbW7C2JRQZynrNopvCcE5YGEgdF1MdYNefSVP",
  "key10": "2Db5EF5pzWs9JDXEmEJKCj9BvSR97oSvxHDz2E5Lsn3ib1UiBnys67vaNsNHA98PW5ixkE6JDX9bZkqa4aDCocjb",
  "key11": "24kJ8rCcGs3FFisaRj6VNNwK5hGyctMqhG26rELXe1sgmTs5UVToiZguTP8Zq1qP4jE4QjRmMPDfa7ubRbE3ypQz",
  "key12": "5GWdVLcfakzLSUfMkakC7SHPEkxiGZNBjv6Sa8s3zdcVBftYXiBE3FVFj3J1wcD76jb5C6BCxC6GdDhfJJJrTJuF",
  "key13": "5ECKq6ftp9wyJGfmo8CL7tKC2koVueWtH9PRR8vU5fBSYSwXVu95UJhuw5KdyhCN9fUscJmrQA96A7MyEPrQN3sg",
  "key14": "2tHb51qf4cmQ1m6Q85bNoAPVQJPBXfnmMDGDx4GU5rPkKzBvET1s6TpCypYASHLRDZhfFBkhCxEC7ym5JUoaLsvd",
  "key15": "38F6seLhMnmTGdN1NNUtqjs6wvxaGn2PME7Fc6uGBwMQY7q1t7DoaDawoMm3G6J1zMfpn8zhs7JZyChM2ft88stR",
  "key16": "4mePFEsUKUQE6DZ8RS2dypn4qq656ggQp7AiXh6U1FTJFcukuAjnhz3REKmBNN32n4mjpz8B5evVMhMg35B27urT",
  "key17": "4Z45curTB9ed4deNypdKrM6xVZ8L8oiY3WEqbnjbeURGviBe1SGnGfm8fx3FztMZ4BRUcdDC88M1sGiZPp2TbrT8",
  "key18": "57Zi4sA59X33uetcbybV9hTdJyNKmmuuduMi5BMY8GvipgPpVtquYEoVHJb7xsUAHU1LSXx2RbNrvDaL8K5mcZQS",
  "key19": "dQS9EKb6ein9Qtz47RCzKX8JdEUjbMu5W3Ecc91deGAaRRAsG9os9fm2f1uyoCjCvC43rcLeDT261WonuU2NssQ",
  "key20": "4EcsqbJEQwdRGfkiAWi9i58kEnhbJyJMGszubms8yw1vuKsQwabHG2SyEJJiRD5nb1WJoL1GkVcjfSvktiK3JWxQ",
  "key21": "5SfeSyxoCJVqk6QdYTYjPGBesyjrv3x39YwAJzUeWukEhZWYryuWdHw6WmsUa69SWmgNKvF3bt13X7M2XvqN1wvu",
  "key22": "5Q4zdyfW3breD4ViX8SfNxDEAQNixotY3Z533DuhcbQxXsEwbr5BGBV2vf3t1TMGnkbyiSfTrUVFC7fsczroHzz2",
  "key23": "4HmZpKDhyiYCyXfQ52m2RDGCS4yiDPJerwoTqhMq1wsSHMGQQfQHcG1aQBQTriKV8dReCC5TSY8cLE2ED2w1cDg",
  "key24": "5JvRvNCy1o2C4jYyyKLsNW6tXzDppFm8sGiJNqdJu4VzkwXbcLm5rJLGNv5knPw6P2yFjM5CSrNMUQPr2misxnwL",
  "key25": "3xJ6hGTvNWUZEV3bFEwcJKMf79fTfiosNNDfKjxUVjALn8PpuELyfaVEaD1feYZXph4uksrv9GUMSUdSM43LY6fY",
  "key26": "4x46q5TAtva44nNJ9PgSznXZ4YwVJb9iPwBUv5nhRnLfQhDjvBnawR9d2zwfTMucYZWkberYJ8VcaHJfmMUtCwvs",
  "key27": "3vQfYMfXrgnQB6jTPKYUTLKugRuZVTd3F1q16KCPzUdiG1MNarCYkUcsQ2WcXdR39FpoQAzb8T2xQcqtguAvtazF",
  "key28": "3Bf4Y92xoWdn1UbcfUk2N2qy2Jxrrqd1vDBaYtHTVR2qkjMdgSjRcbTAw2W4dQw8nfAotsz5Rc3ef4M5F1bJH1Ne",
  "key29": "61e9dakfupcfjLkuWVs2AkCQzwfZRHfgNnSNv43cAtb1NjrHvZJXCu9MPbSQqzVdsVpJJL1vDnVfoJNpyhGKAzw9"
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
