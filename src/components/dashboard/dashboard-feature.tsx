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
    "5DfZcK3XMrtvuNTf9UmS1NZPbXz4jvDnkhypH2bpqX7H8Sg1EY73F4ZsVJ8iYpnm2J8QU9jWXpXsCGhtaj6dRuUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQmybYumBQH8hhNqqKLgwSgvdQobhxZAUvpo17kHcccF7pUBTUi1MRUpwkgkiy5GRfVR3wmauabupKaRqp6aTgM",
  "key1": "3W5f61p2FwtfX2HZ6v53JrMFBqVn2AgQsLUYUJSHeiPWaJCSiCXEFtNWtciAVtMtRrNmRppnxnttCxGcN7hGvsYV",
  "key2": "2VMsPEg4ntURmdHNXKCmXBJVKLbF4pMpjtghBKnwLw6gv4fN3JawKGMcESTVBKgkqsSch4S4Y9cFa8i8RUxocxpb",
  "key3": "3FqyauRgsomg7LvWbRLMZQXmbW7KefP4boi2ccQrb8iJyyQxcBW7YMGa4wPq9pPaQr2NqHFyq1GfXG17n124PrKW",
  "key4": "21hS3WXaDZ8vbi4V4cjMUGz1cwitdDrCz771qDnmbtxSMiQoAQ9TVNs2xzY12Ycs4FUZL5SPQm6p19WBBGJzRAgR",
  "key5": "5ha793sxnoVAxd9X5qJijUJDJ3bQjUdY79hX4T6xkx2vmGduFk6SkTmRFQFcHiduHBFPmRbtedWe4gqD2RSuiVSa",
  "key6": "r42XevRK7cx8Gbn8czs3bCiijzECFJ7HQFFVVVPqmj3W7j6D5ymtWGCPupmWg9rhEEtQAC9h7HPfGj7CjvV2NVS",
  "key7": "65wHHtaHuMXnJ6pJWN4FxYxwsY4RSRtnGZn5Hj38xBA9SzKdcGVN9CKEbX5Q6JyHQTqbPwtwnQP67Nab2vcwJF7t",
  "key8": "3kftcNnwtU4X3kF7pFSoZtxhj2ST4HHsLzRx8FSGxFUzPxvSEscwE2gJT1WwErRnFdanpPtyhGLKvHXhEoq5SQiW",
  "key9": "4iGgBnURGwpCfNv7MNysnoDxs7ECSPA9r1kP9UUmQAmPuTAwQWX1ydp1DcuJe3zU1yjzNLA223sEojpv1KRnR9Rf",
  "key10": "5RtYa3zErr61mBFZZor2VfsL7t2PSNHyjVV33LH1F5jutPDEZ8mUGP4EpF6iXqbuZKHh9ox2qVnwRkuQyoQQVq1n",
  "key11": "5pzh6z56mKffK8aHRgguzzA4ztPNCYkomnrGqokytHuErDxP4KjRgeBDHVYsLswqvneMLc56MuLBNtZLR1vrPF8v",
  "key12": "57tfphCwik6rBQyHS9otJUk3zRibJZC92tAvxvqxFR4VMZit2rgdVQCFziWirL2YJ2x4kpMGVFqCtqn9QfjMwCxz",
  "key13": "AYdk2aA83Ncc2J2VZWiYmcVoVYizXSRmLbbMuPbiGs7JWH2sPBbEj91psKzBaZaAiaRESh4Czpxoa5hQdKa316p",
  "key14": "44WSFGkwxx94vqAh594y2SgtXVDwE6G2hjeBuh8zkanoxEgf2pmBkD1ojNwpLdEVN8KhWUVUm1eRQx9bouXdcJWZ",
  "key15": "3acBmtkT4ZTEGJqHVAMnsHKJNTGqsKzV7npo6eZodgB99VchS9zPQD3CamvSs1SJhoECCqpxpNSCC4nHAurMECdm",
  "key16": "4G1gCfz4gEeXKszLR9i79Uy5cR1DXZbmvcmppPeLLGZ7MAVSBfqnF6acAoV8DoRP9fQdjVzL9RGzfNepQDCVEmTR",
  "key17": "336ohGNg5d4xm32YU41UykHrmvys3KZmwHN97SjZb19nFwGFFWJSGqYoSsoN8y8jD47tL2AAFUrXaTxrZGk3Tc5N",
  "key18": "4pbKgoheDiWXWw5n6Pi6V2CfSSTKmfKD48V9WVcF45H878ECJ9sKAdz8j5Zc5npStRadikiZXhx6WCriGwn1upx7",
  "key19": "3i7YVNsi5NBEnLUCKcK53sGzK7V2BWodM56nJDGcSzH6p4KPgAPFTQXLRRgysQsfHFYjsGynFDqyweVtg8iEZV4q",
  "key20": "4bs885gwiDF13KZqQsaH8xS44WzHKGda6aQRoak1vTo9Y1oBZhersfaKGiuHySpxQHspHZngBbQfbcKSAiTg6nhQ",
  "key21": "5DR7TC9sy22VZyosF3mjZJXVmmg4iVhXUPgnJFQwwGEuAgbhAX9PYzhSpnQ7bxeEFGPPCS86B1JHdr4Fck4KwXNQ",
  "key22": "3RZbvVxKhXVvpuyLuyyo5ozKr3WtXUd2KDjUH8jocMVCqHF9BwUkp1m271s4t8sQTQB4ANKkzAhWktCjnmdpHZHV",
  "key23": "2KKWs1yUcc3JMa63y6uSZLFQyyaydtkGGcp2wmpHY7jC5ZNCqcVAe7sneSsZaxdsRgqDEP3Jce1TvWL1hqFnLGJE",
  "key24": "4SHZQYJpDFWLDDo32eqFhiNcfTdcbDWxHUAKZbSwkvpDu1JbkFWyeQ4jcfXD4AMGJbavvjJduVdExJLQJt4GbbjC",
  "key25": "5dtNDLTMwvqoewb2evPTm2t8nGaDEPjiqTjiApQCKdiDeoZRJaSq81aN6oD1CW7bEv9UYEmR2uMrq9uSqeKAQTdm",
  "key26": "5ybKmsnhUdJUTYKEMyfc3mkf8WGmcyub1DYMNtWdMQGUVSavfEHG4M5rUP4LZwnoSs6KDbKJRYygv9qeQ5iEeN9Q",
  "key27": "2BKXiWiNVatUeebHxuBvvtnv4r6v2h4sfiZPAujWTQ3PULuEaJEqV4A3CijwhZNjA5qwLTKpNgWnor8CBbtVUd3F",
  "key28": "5rWEYyUsrqRPtX3cBWT8C73UDdvqXYKAJqETfYptmvWmtsJEjuHXYoxVaNrLT2f766JScPEuN3e3YANBDo4CUmJa",
  "key29": "55HKDiTSLTUmTrsEuvkMKodMCEHvmrfdJsSGKzammHpqABTs16P9hTQ1YeJQzjABc4oire3Dnp9b8JiMxNMiwNYW",
  "key30": "4k5VL4sz5KEdeHQqbXMnnSmwEbzKnPqafC4QEFy2i2M5CQ9DqmBSqZSejNHo1bZTUM6ZM8sbt3cEmRzfJJGscmg3",
  "key31": "4TATqjCAxWhdJvLfmsVyfcAYdfeyJej47pth2FHumXC3o81oTMvpVm9HqhJfbj81UeAn9yfcNE5XvYhzJu2M4YB3",
  "key32": "bTxaJoYHSb7sTTH4vzk5s9B3am2yjdTqKNmwsLy58Rv8BKVL9sLPeeYDbH21ZSqrK7qm7th4byPr2uWtzBgzR1x",
  "key33": "5bpLvnFyx3AwzUmFqZySJNwfKoFVN1odN2HU744eXYtAzzH1b7HkxGKj64qWjvZ6ju4BWSp4u6U214k7HD8KWYaY",
  "key34": "4mKWQkP5tvntAajCMNnKNEJEKBEgqW7EAmULkXTCiApXNQUdJCicfz9TGyqtK2ydCdDYNzym1cSAEtJCpQkmbvEo",
  "key35": "3RTvdquZ8RuCkzvsi45ZKr791TynbRh5qMacsSLXggAuyB3uPaApMaMFHdWLpEk57yJn3b29frM4H9w2KWRMdssA",
  "key36": "3BA2PbH3oitPjUrjzFbzqHTbxk44WAZfjzE7ybrWJwzPCuTYx8qWLAyNEgBqhDjemNZtm9tZCQgsNpKF6uFhfC8t"
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
