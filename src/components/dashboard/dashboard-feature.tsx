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
    "vKZn4L4nrCsnUCM6brGqebDHrRUSGCxzxGStRjgdur3VbE3n54WQK3gtsNz7xsVmWECCXJwRoM1wPg6nV8PdL6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPJ8qf6bkw2kYPf6ppzLvofn9z9JR3LkrU7HwZp17A4CKw4boSzwAGVHEH6B5XLHTdgo16aKs75iPr962X2i4Pr",
  "key1": "637VawWsapyHUvUyRdCnpg2FanpZ9MZnJJdv3BSHBP8GgtrhYngiz6LYhokdpWyqaxx1HAMgbFGjqW9ovaUi7e7u",
  "key2": "3tL98qFjAbAiqBiUQnKMEYyq3SJCgXjhZHwiGNCzroKYDA2vvPM1CpkvjeZj6o8Ts5iAdnhVPscwZyTYX96h5mVg",
  "key3": "5WesNRGXv1LpjHTbkz8EmoSA9BHWw9ERS3nqCdDKr1jFhfZJQLR98NYctx9icxDrx4i3KmPAEawEJePdvKLmZ7E1",
  "key4": "ipD7QDco3sXzGtEr7QEVUVW2vTCBHruN8cHMtewbWR5VYp9duYBBtSdK9jPEheEBGZQqKEwwTkfoejEDz7gDJTW",
  "key5": "22q4xuPcY5Yw5n8NCLPUyHxixnRx5Mb5qJK38d44SUqdi2QWNj9vDi5kS69G1AFaBqjWrRHfmKKZK9beDmAb3Jct",
  "key6": "3F2ZzPTqTcNk6L24fSw6uRXYsq3B6vPVviY4vDJNgBFqv8oxfu1Rzhoztw9Brs74dCEq4EvKcDYqxoHtrwwhgaq5",
  "key7": "3RWoL8tbL2upFHa6ErhPUEKg8nHsi1EDoeEZrRJ5CE2crLgosxV958p7CK1mrzT2QGeedfXbbcyt7ijJsPbwqXPf",
  "key8": "2KcBVbvUTeWH9q23xjrLDm6gEw8b9LgLLRfKYs6ZJm8Jfy2FysueXW5A7a1QPyeRvtorVRT8oqrUajrGmKaoqT2S",
  "key9": "5GmhbmkeRNP6Q5brWdWCsrq86Q3Gwo2HochqyNoqDVrYFzj6eyivFuC3nuyVEwayzARZm2ws98NELjJ7AhrUFZwJ",
  "key10": "3T5ff8A2Garhe4uCcBB2hyGT3TYTFnGNMfMf8wzSwWZX2BCPub9YgfAh6FZWvYFfbNFQiTP67fyZfGHQaExSphjK",
  "key11": "28aMSvUvGPNQV9ae1JezRgkqtiZGyABEkjYmg7KNRV3Qo7HBTxuE3nbJf9tcCK8T5vqbD6WiSVLXc7qYhahYV2gr",
  "key12": "5BxLyfPM8aM1LMceBRw8n3xUKva9PHKVvQEBm7zRyu5jBygWJuucxy9xo22JobTnTDQ5yBZFomSn3biUQd8iefGs",
  "key13": "384WHRqx9vPkBADprMVMRp9ZyTr1KiRXvrnPb6h5GvshtU6zBg1EobBLECSy5Zk1FiCGuP89qPkHboiADimNYXvv",
  "key14": "42gWMJpqEv7nSDZpeuqP79q7HkKz17WqbLVZywFjaxzz1NPmdzHmTbb3xoC1NiA2RkGrjw4kFssoDMS1RmbU8AA4",
  "key15": "GqDu92mXfmoVZhXX44RUp8eqQB6MBAJ61Q8DagNUR3yHCgfUMdGpMxTE2iv4aqjMp6wD9GcnJtKu9NwyGs5kHRi",
  "key16": "2A3Cr1CcjxdQbdQnoXubXEb44csDuLEVHXudhLuEKLns6irYZBcc3dZ4MeYdjWgD4FBRA4MCZbLJQBnkrSptxA69",
  "key17": "4mheTZceHs1JSwtk2PuzbrEQFXDJSGAoHBrxSmGgNfwRNtzgVpKiPR8z3xD8Q8XBbPgBMFDSz9yxuYhtU6mqTSJk",
  "key18": "26uLDSiq7NyMUayH3oKGpyCS6XvpJRPdJJVr81R3sERsCtP2KG2ucsSW9xR2K5AmFicJZgn1MgRjShg7Zz2hDovv",
  "key19": "26tBpqEYXQ9fud5twQ73Rz2REit446WedAufdEarMtzr3VKhZpSeGgJ94JxNsioYsGSCPhcKvZ8tq2JxZJxnkd36",
  "key20": "5S8VX62qVXgWd5Z8QWQ4c1jBWBhdpcyeybBNPtTKTYJZRpwztjpQTCYJ7sLdyjZkLi4ocVFVkGprR2ZEST8h4CLX",
  "key21": "28XDH19rtSPWfWv2iQYQcNJdk98hJubQvY64K9g4AwnzYEbyTpKPKfPRtv2PTxEaGXw5vQLnzcVzAgb97AVpPd7b",
  "key22": "3XowKg4msPcgfwDJ8G54deGss38So1qizt1LeYoGjf7fBAxtC3WDDRB4EFLngfELq2NSUW81XgU77fb9pLVE3G1v",
  "key23": "Ka7JNqxtmRBQXTTFPUg59ntg4pY9MogJTtoPDU6yyLkXJk8Cc5cCmjtyWMoBCBGSZL97eP55homiCpdsiXGpnby",
  "key24": "62FU5pzDvCKLNCW825mNQ187zY3th5btSwKSEwdN6q2eWhnxR4iQWDLxzicPyHkDfgmfWpzwERZkF4hZspJ5EgF1",
  "key25": "3SuX1LwGWWGRT99xWm6ZJpUsohDSETbNUNDwvgSSBJDM363rYahrf6LQXUhuv5wuxcwVa1hTywjyvEgJ5ftDVn3U",
  "key26": "3AxAkhY1gy5QzeZJBaCLgDzGGBXbzp6hPnkEVyAk71PYvuz7LYLnUs3TcSE8rLHtzDbC4E7fa32NRdHRKFvJT611"
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
