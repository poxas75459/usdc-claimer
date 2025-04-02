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
    "4djhBir6oy8TUxmhzWYmfZNnQUKbu49jN3fPc3y7cWyJjsibhDyyq4Dwo6i7fwLKYj9fsGMfFiVaTX7fSwd3VKnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfqktQNL8M5oLbqDeeQrFSsXCTQrEs76rfK7tEZUDU7vVrZy9REjqHfkiffrWSoHrdTczLBrp1T241iv4w6PNYq",
  "key1": "3uvCUfgdL4cawgHVH5GqWfnsY9uswXH492cZakEdPP1nQeEQ5TqjeEv7AqZZLjZUBmDfER42MjMTdLe526ZZ3wdJ",
  "key2": "5Y3AymRh3mjwY1pdNdz8rXw5XN4LPWGgZaKGW35px2nybADLUsEBw4vvLmxyw1Cm11Nxz6hLcshhP1hkj5zPvWDY",
  "key3": "63bXi6BNnqt2B3838rLZxBpcJhX6MYuVcJTcMnVEgoSw893rT9KYDcy2K4xRZVGkHz5uUV9oWHnVRMUy3M5yqEQ6",
  "key4": "8D2MnVoSTkWvHezsxhsp8uHWi5faVn52f1cdbxL3MtihjM7DSixVsi75aFGBJtREbVsxD6ABCEDybu6VAweKkVz",
  "key5": "3f365NFsmhnD2QHpHwR5f4b3b6Z3PENdzhWiKZFKrqsbFiVA8Z631Lk63kfGoy3jLbTy2NKg9WBCDrbAKFk3qqzv",
  "key6": "2HQ6PpP2eaeUapeCGvARwDPpwx4Qz1Q5tTcnUFjSdHTEyz2R42xTUtAMauqdMhAM4veMbFikWiTPeTEqYT6dRqaQ",
  "key7": "5hCNNNZcghhcdCtBUL1wKD3q6uPsYnJReWhsStmiB4Z5pLnXK6rMoexy6Ar1Po9gbwdcYzNoo157YhUm8eAU4Dn8",
  "key8": "gAz7vpbV9Ns3SY6xwogCRjkrwGj889UFtNrqDc9Qd3FKdy4oGsfRaZxx7nTuqTaDD5h2f8ET96oAFUTytkGUxEe",
  "key9": "YA8gn1FLaaFXRKHEfELKTphVbZdvtNDwNVqskXjvFcZUoSeQz2X9Z32ptdFjSkmqf4PsfEbaT5kYcqvc5ormfDV",
  "key10": "wwYcYmA8WETV8uRVr3fwggDY6wL7ntHYzj7H6zm5qMNF5tfhsnJtAm6Ut9j1X2VLHAoGD5AFSnHD7PpXS2jNeyu",
  "key11": "33LcGXB8knwJvZ4rV71HTezj8RqUreArUkowkEv7koeTazGLV2ebgbAHkcnSv4DeEaLZegjWVcDZTNuSEsmSe6g6",
  "key12": "63T1htCp8vnCAxc3sqrmKUGDuq65TZnoNpjR9ucFkLBgqNmkKMGZErx53DjkQTToN6rCdccCWUQjWUFXdVtVMqoU",
  "key13": "3WVkP9VKThEs14c3Am9m1VEX4dgs8KHNYAu1UkGLvUNPbU5CGQK8SVFNqNn13FuodZh7kFtyU48NV6kq7cjuXSZn",
  "key14": "2gXfixbCuktziT4a9SBpqKyaSRQWSEpA4HDAJAmR2bda7wyg4WqpbwuTw3KTcxzJ2XrP4bcjsP6hemWFVcV6MGvw",
  "key15": "3niSzNaV5PWkqViW3acL58CgbDXX25sWgrms6sxr6KsVXsSSykA5NraEWm4EBmWQRtSmqyeCh82FUaqrGhsgoXHG",
  "key16": "5xvnnFJUEEupoZGVds32jTmjEgJhJKQ55qAufEf5Wbu7ZaVx6shXzkRPn6K24F1gHiCVnpoCx8ZDVoHiKZffjLf5",
  "key17": "5KGvY8hqe8QXd6DA4hyJijhcbHK4qeKoQQx8D8qQeMgVTj2E2aFgDnj11VsJFPB55kPxi4Doe3aiCss2gwKsNJb8",
  "key18": "4ANUEK68HVQ6vwqCz3tMbt5YTfAYjfbdimPD95FczUEymb3UR9BVG7MWYmuaSsc3pqhejtF1Ab81u59qkh6iyWoK",
  "key19": "2QWpQdNYbAFniNz5B8BqDNV8VnkMotKgWfgNw5QgY5LJsUJqvtvCMpJDtd2i49Ndnv3qDJGEXJVBWj9CwDf1SPjq",
  "key20": "4sPfqRcRP6NpJNNmQEUiQqjzgFHJKUBEtcbrEN7GVADErFSAZxXKZmzP3XibCnREipZXbSUmyV63UBS1ELUzf15o",
  "key21": "5q6Zobbvx4zZoGZ6vzyPhZyHoEJvTu8C3wXi1Dy73rbW6nFpxgtvPHecYHv2o5K6cAoCzBp3QQoHx6fWczydpxim",
  "key22": "3AzhKHpzaL78r9JtZByAbw41LvKWXBmugfgUvVgRj9tuKyVeZEKLh9Rh9Tk1KZknaTCNjKowHNSt8V83RkGtawYz",
  "key23": "22g8xMM6KuTevhVXNUrpHXxpMK8VBLEzieavvwqzdh9rPGwfUFbZmeDKjvwkCZytBnHJM9GsLYqtoXedXA6E91m5",
  "key24": "5vEPeSQ5gfbsyzrWcPXosWxRpTobhhh35PxtHYtw7y4V5XsQzUbPNxP9TaXbdndCqPK9hCEczPLoXe9NK3KcbnpU",
  "key25": "5tn9FFAu1joHLn12u8ZA34gvWmamtYcDQnr277b4YefBeMhxYYnUfaVD95Mw378y4K9dykqG5pYyttufJxsHrNat"
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
