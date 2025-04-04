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
    "366fcSMiPVcux1vpu94WDPtS4czepZdPcZkU6AQvar2gaJJCGpffNJb13fWGNMUwPvhehAnuUJpe7kSpk1tXw8F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N1SEfe1pXyGU61LncwPsQT8t9HgHJtk5FzVtGisdZufCUFtnSymt3KWFomv9PDP9YrjXSupNQbcnT4sR6MBDdim",
  "key1": "2Cr65Vw3yD9SC7aytERoKT4etBzeB1pVRQcXjfR9yjW8wduKCcjeKvKx5tWby1mkfTW1uvgKeezxDW472tNHXued",
  "key2": "56mkYqd1qRLXA8fUXyAmdMonyN24m3ksiWDDJmhDzLJ7AnBGGkLm4iSuhKuRmM9deWwgBCFGocFTmFqgQDXovaVH",
  "key3": "n4BNWYtmVHp2qF1Gtj7qbHa8CzyYKcEnynAC7ZQxnVwfgDnqfB66LAvCWoefijc4SSU39XnqDogVc6LE8zHPdTR",
  "key4": "2mTTXi2ya8bgH7cMRThPYYXnA8JsCoTG3upNEJyMeRjHZd6xkBVr26GTxhuQho9iKZgz6rfRNHhFz34ow6DXmmHA",
  "key5": "5joKipQL2gEFUDBk2SU3tEDBzbKqa2Jj65ASqVXzZsSPK1ZtpNDNnjVe2Rz56GkG6ZXLJHHxhJ5gNqEaUyj9yPnQ",
  "key6": "48JCZTerR2SQKxkvtTJ5Xd6cndJCrd9nEMNSRdi1nWuToodtWHMMZiAwLros1Jd8RJDrpo8XJxXcpUc178cjT5QM",
  "key7": "9mvwszY9A8wWzdrKPcaihBJxtLoNuRnj7Ym5EwW9uriT3LbWzgd3WVhuv8RV7cvkForyLx88P3W66LhdPN2bP14",
  "key8": "5hcRBBx5Tsj3b7jqiqq9oPUfaQz3qrnr3UF5RW56d4Mzr7JPmrCoPefe9BZTMASsN6n18EQqwJKuKxytMcLtYdx9",
  "key9": "VJ9FBFaPe4oCoiMSRHye5d6HJHu1qQhYXWN1ZoEadW3cVC66B2wsp4TJGrpqhkFiRgENVu5MEmjwjq5bmawh1cn",
  "key10": "2cagZppYmLKa4rdxRF5Y6dzh7zoCE8kjPKA984zdAEcuEgEijVD8AbDsqL4XbprQ2otZcCvBJdVYjzp2TYBX2QSm",
  "key11": "5qmWhTDj44HYdmKhGxfJVMJ8sCBwvrd93sfJ8i1GiyHEB4MukLGBtGsaPoiLq1kYkib7PhmCyFYQWE6TvrdEyp5a",
  "key12": "5JvTh1Zews3zR5BfdJCPhg5usxAMV1mU3VmRwTHmtf5DePzPuz5kKQyUmzXTSDAfrrZ3tVDJZMpKLPH7NqXMMsLw",
  "key13": "62eVE6TnDHraj4gLZm6pYqoUZuKXdrLjBcUKrjmjzwZGCRhg54kNyuYwj1oBBu8HBiYPc74Us4XnrQ5bkD6qSpuz",
  "key14": "BYGNSjsTD3RahrW7qNVSsStndhmP3zfHuQFiLgQRyLNMAASbvj6WeWqSLhVE3N9WnNcCmWT6m19SKQ1R9bzKW1L",
  "key15": "5BpL8nadNUykWN4sDojdS3UcKVmJ9o43EeY9x7nbUbgY8hzMRP8hibBijjuuZ9QbyXXMwSPxABdMgpTpzA2b1NKk",
  "key16": "3fNZzN6w5mYv956RfSL3e7ovkDKCErSSPGL1jgMa2NfBoNaWD1jWysHiF3uFsbQriRAknsgWCVHg9xjkbnz2ExPF",
  "key17": "xmvJcgXJUvmo2QRo8godqbK8i5BMddZYFEn2iNArM7TU9cjTcEhvvbEoWjkrV1m65m62ppMp23fYgFdesfzBUPf",
  "key18": "5DKXQChtwTNte7RWLemevuQ24hmX8YJFDDEkzLaPTr8aKCe3kx9j3Bf4bcSfGPcnMSAJPefGDYgGgcF4DLK2QUCt",
  "key19": "3mzHinybXJLwfFqSopMBLDLjBirZ6ZhzF9vyw1ZEg873SL4gYDJ4K6hkjYb1Ysciv2bKF5yH7DozejvTabjVo2dS",
  "key20": "63U3PZH9cetzp9oWpUpSmswHqnPCqMjdsmWurgv4ZTs59K4SoAzwYm8GoRmjxVEcr1JtYhv6xKLaNPUFrKgG5rgx",
  "key21": "3LGFF3LY5YnW9S6XsFDi6485onRHhhS9HABjdiTko7Xgw61kaqZmDvgKAgYAp39kdrWwpt6nwMhzKq24a9Ug3f7G",
  "key22": "g5wY4aeTH5bEUjxcCwyHLdgxe4sBHKbd8shT38YWocts4P1ma9HJ2oiHmua7hLTjiK7oAN5Uuu7JrYmXzeb1Wag",
  "key23": "hRLquZ1NUdistLEFsCZQ6HunEVLQ7Bezz2t43N7MnmWG5ZuDbPEbcVUWNcaWZNSRnrNzwHwbuMmS8MG7y6Kvzay",
  "key24": "41PyY3BfLi5fvxGEnz4S23wKe91fHGE5EagJKJ6mq9RSPb2NcCp2BRwA72Nt85R9PhzuHqLpoz46SsNJJ5GmwsM8",
  "key25": "5o97AH2vACZpx4tQsXDo1d3WEufroFDqcxRTKYbuXvpMZeAMcvHYZaD7JEBJb57SkNihgBPGdHVVTpGRH9gD7jQi",
  "key26": "4piRLtcJP3q44wnkyz9ivvsuQHZquJXUvPYNDvqgPAsMp7t6Ff6vANsLVCmsvmnzWdj1XUL3m12NdbBpoiBSEw1v"
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
