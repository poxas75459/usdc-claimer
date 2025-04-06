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
    "64ZYx5B3cHHDqFbhjk2UVUGvsN9EGrs3MmmcTp9oSuJZPJXnpxP16AdL45AVmNF2SUKbm9uD3KHfbN6ei3Js77f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsJHtCys8udv2632aVQPUmsUJNw293WGp2fZBBfRndzpZcewiQNWv8WawumzXC43MgvZg22ZgQfSVYVrXr39kkb",
  "key1": "FSmuQqhSAy52ir2uGuBHLPGn52q2mMn4Naw2hq1481xdXbueJXZMvRHM8Es7N2GGnrsDYgyiLtazz9efPGVr19N",
  "key2": "63aEAwt2gqTuv7WueQxjWbXBxhwBDTdUY3HaYF7Us6DG8JTNwF7jbFXnYxxxjoPUpkNrGRFzNGPwTV1VMoY489nx",
  "key3": "56vv1CdKDXwQGZ7t9B3aMMJwrkKmhLWte6a8Lxr7YAugZcCJhYkutyg2VGP52CNnAxpfdZgARTHYWnLSDhxWRtLs",
  "key4": "eLT5dkKjG2WeMjPnDXnpiRwnK7T4kjv3JqWhaZqzGVGM7whSUWWRmNT5GDZc7oXEtXZuMkLDRtiRjkLy2xZVr52",
  "key5": "Mxp1aCdknzHakzHaGoK8m8ZW3AuBJT9CJHHNC5kBfnrVVbHNmXPxKfYgcxwgi4bMnRZZJUPJ8jvG4foGXXHfnq2",
  "key6": "4XVr9um3ikGo8KnxuHe1aKmAe7MjQpL7XMEQfgxk1HmveUMiF8LSP6nSzt2JkA58rQMBmQmDz4uNn6H5NbXR6JH",
  "key7": "22rRUYHxgh5VBkpMi2KkWWxaMm47uzqW1S5mcP4zD9thtEBLd867iizPVZXwAvoHRqXLkWor1VMDgJgw9GHTfchj",
  "key8": "r1j7CBamWWwwv3w85ZZkkXKPemjt44avYUqwfeQRGVBcSQBdGkMFZuPECxe4W19ecn1yqD7WUpPcVkY6fkdUAzv",
  "key9": "5PnMWGerKuAy2GZ1ZjqjQKy6tjxD4ymmc1Q9T4FLTfW5Pw4Paae2QvJe4RiUTjxsDsx3B1S2UARXXdpYA1QvuSFM",
  "key10": "5QhfEUd1ekwYFLkmhmPwunnTGjufquAp4hWwHsk6iegr1goL57EU5HXXyUDoidATskgzeRu6sXH15cgQuK7nLqTi",
  "key11": "3rAufLeVGyNKZruzZNbKs6SGQpdZb8cqVRNfjE7MufNScrq4oYmPTuGoHpVrPdiMwGXEc9mZoR7nV5nTmXsjrSSK",
  "key12": "2SRX1TKMWzMr6aPFWVXwpji6reDu3PbyAc6tU65ro8WUNQQ8fkkhrTq6V5Py16oLvsCVby5R8iqHRfVCy65QEqEi",
  "key13": "QX2G825QURC2gNLdQXytJTu4FE2Wd4scTxaZGHuuBPA9wpkMrFtDKv8bvTifEjfhvqiduyvwbHarHr1VwXvQsiN",
  "key14": "3VLBoHvyNUJQrzWUwZ2fthAY1BSoxve6vQ6De1Yxnw2Sym3CXDxuZTS1h82BFsocNyvDGYfSiHYy6xsy2NzqHTAQ",
  "key15": "2UtDy39vgxqCDou6NMDSh2iPFjjWMYpAopNHhmAdsDkmN2phhMuP3ZMpLmVST5CaKwDon6EB8d8P1E1AqskkfiZ6",
  "key16": "aXpkzooY3twr4pnvYzc3hnZmPaPJRwETBvL5s5ngKBoCECYukT3RSqgYRHkXkhoPQ4bKeXrrGpdRFDKhbDYT7Gu",
  "key17": "3rCLakLG6qzwk72i1Nu5iKxyiRCohMXy3B2oyRB5ZMTuxQAK84gjZTpNbfDNBoSxNQCFpRJSQH9CeSuLwY2AdEEu",
  "key18": "2aq4hrmgdAyqRHYQNer99cwnu6deCmPWjHB5Ad87nL549dKGo7hy1cb3bFeEqkRbZSJrhevTNCxozGUQwTad5xcv",
  "key19": "1zxiKtJoXSZ5HRybf6guvhyMsx6MHe32ZVESzr13oatGYzW8Vs8ewsquPQHuTts6hptt5qi5ZfHswSiNwPaW2da",
  "key20": "2pRzbUbuQjD3DjbroUbKdFZbRWZWtDosqBGNPp1b7BLqfof7or4w4dcuPBgtMHPhZRBdyCCc16N6vEzCVGuWu8qz",
  "key21": "4LCSxE9d5Drf1BcTC8wxoABSaXtPgwXXRMuCop2dTF9Pg9rvNXnADTSK8y988j97QhCgH8Mu78X5UGX6XrhhwsFr",
  "key22": "648gp1SbCmLNC94mEPJs4xZ5QupaTAzYMYKozoXYQvcEmGmPuCa9LYiH9vBvrV4gdSLqRKxwQ8JauFv2x76wrryQ",
  "key23": "3rCGjjUPcy1bPKHew2fPMhXc9pdkQf3B27uHftkmsVkh8L8MBRP3bvsw1YvAMGGW1J3DL8rpUF9aveMDV3hHvxTV",
  "key24": "3zJt4fqhWitMnwJkSstZwyeKJJhxqARNdoWtg4u9fMq5p4TcJo1xjxpmZhsvnyRZZp5JcpKdWSAdWvm41wVKUW5V",
  "key25": "44MGmdzqARujzW7ffmrkeEmPuQB2vuwipNGtnBnbLpjfZJmYhqN464sUUZiHBrX6AHvUpNKXSNPQzTVhVoVvjGNN",
  "key26": "5UxdnyiXV1zEQgqkkUdowPupmZsCtMCkJDj1B1h5L291wWC9cXmPMtR2dThbWviC939Z2SK1jZX2fCBBW5fLAidS",
  "key27": "3azdqrsvfu2bNfKDfSTRmo29ES5Qk1JApqoxf7Ehfx1wUC5so3a9xLzdUSvgVz4mfRKKdckxrZVoxgtsNvDvgPX6",
  "key28": "5FpF9KrwgouuhCwENRvLwPTf8wBddLRsKMmE6SVVY7QXDYKpWuE4kgpSvtDY7vvmUE8pUYLskfFHAPkMKYiJfYMR",
  "key29": "45FskV4PiBGq9Bmbz5qYKoKWgF44LjJpnTFnFwkmsHdhG3NnN82n8NJhLcVM9p2HANN9k9XviCHNfQyyN1XVoXCY",
  "key30": "565aWaiRpczPBTUdLYeX9Y52CWGSCMAb8wo1D3BKv2FUjmcSiLxRoPcjaahUWSkdfSJyZyhYTt6ftXPxPAHCqSfz",
  "key31": "5yvBx5mANX2u3BPhDaymDxCggJU2NStcei4xy7fVgM55fbm6YMJusFwKiCEkEJhJvVTNFBazKeRTFqTnV26QtPf",
  "key32": "26oFAG35RBgka2h3h1iDJvW5PsW3dep7UxS5HoeSJT7i7WNt8dRQn4yDyWuGbMqrKnM2UEztJ1xfjC81sonEuxxL",
  "key33": "56AMginqK3sgWoHEZaD69NYf8uSDQqLR4SEkwQMBkKQP8HvmyPcjtDfJj3z9ECBk7g1oJQxWCNPGeAyBgGJTCJL6",
  "key34": "37JUaNxHvxxQCYDJSviANRNu722Z1DPuaTK19jRPF3qfUjPiHat5K6YnXrQK8wVtDWqyWDP8ZkLiLFVrEZBUH4KX",
  "key35": "2g72AwaoHFL1D3QTgNq8GF8yaKHhxJtsw12ounrYdfpiJe3M3Lt1Gd9Bgvo4BF6qKFtMxuDaAe6Rs2D24rDGy9cD",
  "key36": "3dXMSCBZPMA1PgeVAed9jSexfqLLcqUSB5ybUUG345Wc6fFrkYJBKA5MwdTkiQbpQ6jjNqmbB6onxLshHzVbno7f",
  "key37": "5qFu6n7wFgNjSXJyCsiBUQqwLtAAZtyiDPyLpKvgeP9Gv3aZRYiyXR3rWfcfPaEtbpp9nnhQGp8rRVr2SySSY4XY",
  "key38": "X86KtdcEDJE3DWoNtnenK5v8GUfCEP87gktfpfbr8BSTM7PVfii3dz3Gv2pp4cedCyzcLhu6a5gPLyMwhdNjGNj",
  "key39": "5AfquwJ23K7QaGV3pf5CPQYbtejkdhWZhbQMVSyn5v3D1xM7yGjH8gKvVyttEcrqSRk3jRHZenAG8bwhM4LMvy9U",
  "key40": "5SmNPAeQbovFjnTLyUUzK168BECZyiaFTsYoVP13uthtHeySPeHDVoVbGceiqpVPtaq95fHjyuFjVwMcsxG8j1ZT",
  "key41": "az9VB3UP6At2jCV9yFCEBLVnbA8SymDgyHgeBqDQWiAEo3yWMX9JGBqNv7wEq9u3HNKUMMrUawgCeRryS4Zws8s",
  "key42": "4aU6nkxpZb49ErQdjcmMjfnDKL77QhVC3uEwTvNJ9VD4H1Yw5qdfsscKSnhCQhRvuMKPKvgftBR8pGf2aNLkoMFH"
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
