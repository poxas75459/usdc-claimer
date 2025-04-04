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
    "3CRDEmNJsy8HQdwMmr3Yg7gZarNPBm5MzfftvMmgNDaEjF2VbrixQ2KRiXSdzr7qVmZMn6S4gFpQoonT2a3Rr8LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tACxMsFifd75YFsUjwU3zhLtRDnpX5tghRtjKDqFhiSXZuHVuRXR2aNAeqxhV4Yo8ni8BZF9nQBh5aYXwi2WRUc",
  "key1": "4rji6GuiD7umePwwUZLSTDaQZk2KNGScYmxoWyudcbherWg55UBzSc9ALStgJxFygLJccqdMCHJKva1qb3Mr9F46",
  "key2": "52wF99SWTdSmZA663uDr4Rai46QnaRacUnpWnfz3yJXwGp84zmjxJgpc5aBZBfWZhhExAcw4CFteUC6EGwnNPJXR",
  "key3": "5S1v4YwsEsXbZp55gViC4XyaY6YapPDA7c6tezjgEFvAVKqMPPMxcVCeCzZePYPAhiBccYtszJuJ4XB4MkLfCKBM",
  "key4": "5UEW5YWKwdQ8HoQwLfDArv9ncYPJ1xA3JDLxTRo7r17DzN4bzcSy1ZrdgkV2PyEushd6kSH1pSu1PbqLvLybYxU9",
  "key5": "ijQshcLMYVQfirzfnfFC6NBnyson2uidjBXfstvfJBvTpxFLjMfmkZBwBd9kkbsJZKmezUjyMXeZzPYdpLwV6xW",
  "key6": "5snHWzk1QEPvZErtdmKAAMW6hz56NMFrs2oxmiV9Z2UG2Kn56RrjGH59RUTfpxdgAsLCmjbWdY7hUQU8c3U9dZFR",
  "key7": "4T8GMZLiefD617RuaohWwnp7tu9gZ2bFkYpmr4fGXPbEzGgBR68dLiAtx1uXFFYCGVebBtDfB4dH7hHbrPJK5Av1",
  "key8": "4zkkPzZW1nJyPA9chyKyYmaCjHUBMyYW9exHi1pS54PKL2SyLccQBrTKU7c2EUNSzCDKD3BTBpi2VNtKRD5eapvj",
  "key9": "3oNohsNxnFLpfH7yNVR11DvTBkszR4AQ3VTiPWGQ8GQEuuGgbfdzhuuHsBuuPu5bqSfu1Fb3xXX94MzXLVLBQ4xT",
  "key10": "t4oUbwkFaMDvmf7cHKPCbBSMSyGMxAEQpAEyBfiA3VsyqX5khdLAnknUdEUcs6kDEiPJMdaTTTq5rrxdZ7woj9h",
  "key11": "33FvRnsV2zHbyCC9N9namTDDBkGYJbhTkPbeWHfHbkK5Dat7ZszPxSwuNa9wgK6hKvN5NMjW7CHqbWyRuQFNQbag",
  "key12": "4z37peGEZT2hAmnmV4vGmXviyTEKmtePri6vUK6Fse2upvcm6EsuPmSaki3dBLpsTwPFEfjuuidayfyc1t2Ya9hr",
  "key13": "2QyMsvzHj1GfvS9QUHACyN5GPKumrne4XJJYGLBSovD5fFmVJKByTJwjrUVBXJwStW6KNV2QgnkLYCyZj8a592dz",
  "key14": "2tqpsm3c4aah1jAmWXGydV9FQAbv1RDCnhhiEMpUbA7QpKrvfJnPveqEgFcYs1ojTNKx3EcaWTgK8dAjGTDf4d5y",
  "key15": "5FR8XEg6do3y9Ex2JxTgZ14XMMKRrFNMvYVShBtxHTE4QTQhoo2ipV887t9C13Dng5UJYsCf1r5ueq4fBST65S9R",
  "key16": "4ds929jjrGWqdfC4RejLCWFEzygMS5DR3sP4NPMEbPbYJwLgsN9KfobHU8qVCgpbzfdrYqFMPJVE9bJVExRhCqbo",
  "key17": "5iSfRg7p9n9MbUSLPVXqL6WCpgQ7aZKPWfM4X56ucHjnxaW534zFUVNs8Q7WuLMWUZXyusmBpXx6YVMdVnthdpSt",
  "key18": "HX9NjDap1eb7HmUP9QX7rmvVq68BbyVvATnM5uoGsbxeSJbC2pcGTJnDMYDW4YQog8WL6AArxFSUegsL4Y6Zi2G",
  "key19": "2pqiSX2dyF9WPsUe3qg5ngFS1K4vcBYkYxQN5iSwN6Kac8fG5vAHTihoMdY9qRhs9tCwQT5hbmCZMxpaTm29Kgdi",
  "key20": "xVSyoq73pdeNyZvn6b76bbHK9C6EH6vf1p1mcBgwWLe8MqRqRJhpgXrKyPwb2wD663FjrsahovCNdq17yRmXdvt",
  "key21": "5WM7Dgi1KHaqd4yzE7FBa3VFtGeTvEePsBUGy1Luaqzh6KFfgcyxHPHqpyBWiGr242Y3PouEfRv4pJiDfR6jBVJY",
  "key22": "51RNQvZg7aeSVALBxNFPt22FGF7eYikZyZiwRBaEFhs4exSLdiu4D7QRGRsnuhjMhvjEu9MitQ1ERs3Rq2PzKuTr",
  "key23": "2xvkzkUrUwSTje3wssf8c74RhG2LhEZ1aCe7M6NgLD7mjuroyZNCBBwoake4v9cezzuPLcL9mmFH48RwriP1u9U2",
  "key24": "4qxFHiAnsRGPY2VP2P97Cm6wwEXkozJQb1Tt4bUoHmFStwHbM9fVcuVzki4DweefN83AYTZSCn6AbP7gm88SvaZJ",
  "key25": "2ZKEuViQExUVxCwjTb9jE7g2Uq4N2ouMVYzVt8pzxxHeVeqyzzMpxTsPvB15hKf1cCk5tRATcegLgEaEXa2DErWD",
  "key26": "5RX4SduRrrskCQVcQQvrdgS9FAawtoiiQ7EMW6nfMZufekA9Y7GSN7dt7V4Q9TzRM6JGQKkbSJ6DynUBa7Rk7LxJ",
  "key27": "2nUitqjRvKLohR2fCfAXAZtdKZyC1tnRdKWtEXN3AXrhmLNxaQqeyuNGY8fWcecxtdyCz6GW9iNP5n7kL9wGyCRU",
  "key28": "43xfcDKxNj1JdJQk99164sfj75P9kXpqu4zH7Dwdxa3AYHwjFtEzTFMbU8vH59PqA9CtPjMv6gcg4iEGu3JJYavU"
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
