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
    "4rxyL3Ny6LH9cYkWwzXDbYspBH6PvLukbqiGUmeybeZEfb39MXj41pChLTZ35htCBFn4FM1vooYPtmQJbUgK6YbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDBMmeUeVGzQ5qvaZiufYgXbM5bJLRXbH6kgBySDeVhfgwR8nGoRdyq8642GhtJN85PbAN57NU7vGstSvcGxPhi",
  "key1": "W7bcZHX6afWiu5vY6EZwdJ1JknPF4RdFoPE5C85fnAdW9pCH2XfnCDfpK5x1epM7b8uA6qzesXwAPynVRRTVZSu",
  "key2": "WGQ5p3wvNRigSTVJc3NNYDdFFrUUM6RPPVUMxio6sKykk2hwMYXWSDzEst4P67P2g2ejneQPe48XP2dfj4qkkYU",
  "key3": "25RZaMc2kLhYwCczWyYNzyaSqb275AAQPGMbQ4RjtmrC5X1tEJTNzsVe7caSX7LpWmJgZu7aexd7Ybj5PLxzZf44",
  "key4": "AC4RPemQuM7qCNywx6ZAix7yrArRA61cADMZhNGT9gghQnszpsH5tbaCPcSDjCV89AyzkgS7VfnZ1q1hLioNRjJ",
  "key5": "5PLWQsDd694iJGHfbC6ekYWfER21sVCKwjDrPHEpchJa9WKb9VkzbfgR4UibLi86u8MGuVAHWQEXfMDfdWW9BwUe",
  "key6": "4YdDkKYMxdpAg5f9FVYnWjJ7ea2tzVFjSiXVDjFYkWNuaB4xnoCYrTmGeA4prVKm4X3bWrVU1H7REsuVDKqQqpER",
  "key7": "yfE61fLj45vnTY57vqMMbs9kjBEaNwjQzkfC4sFvHjRdXgZZUeVa1tJzqhSnfYJq6jfXunwvCz7uQjV8NJyN6HB",
  "key8": "3t9kMwnr2PbTafSxBrHBcGkAT3o59oUuGS7iXK4qta7S3ASfLHzNt2mcwu78wpNoNZkYj6hN1GdSuoveGbePQW5V",
  "key9": "5XJXsAyms5B8XLqyms25Xs4X99wQkPzmkD6JpemwHiaXQhCEz1tZZ4SrExVHKNKeZbxvM3LH2c4xatFpVrC1iH3Z",
  "key10": "ctECGNYFc35xh8BqxQoCKX9arZteoTkw6kiriqNELkvJMpEjskAcf8f7XYwUiFoLgupuChcbBMg7E21why5cGZf",
  "key11": "5NfDiMrzXJtAeiNqMfzqW3MB5BswW4rox9un4rh4P2PBppN3jAoZfcwsQW9z8owEpUQbd44DWxvb8hyfFSd6JH14",
  "key12": "5Dt9eZmzEeDAnWJRwk5UzN1ENqz8WycZeETe7bkP7R75EERCeUkbryc2tU6EvVq5m1xV5p4JNsGjz6dHPkVh4GM1",
  "key13": "UAsqrRCe2hFjJmYdeQ9EnCnDfnqT6jnUvgNBDgLLqj9XLvNzh71hYZwpWquQRUJgEiXNqh23AxJoJFUp8kBYizD",
  "key14": "5s27oUrBErbD4LRSbm4GePcqtpgAZdhv6Gxmo3nxdk6mTq31bnaGQYoFJsxTBxFsasQWiiktvqwkpuv79aFYPLLc",
  "key15": "3ktXR5eLcGYhi1Lr4yiuBUj1SwbVndj24PbH9MKbdFqLGymmsibJU9RfuLSLjvh9486XRXVV9JhkLHHiEFp9mWkD",
  "key16": "4RkmM5E1nChoJofbwZ3naWLBCzQjpbLXf6h4iTW6MutGRSNUqC5B3WdjS7c7oeYunwDGeHL2MZdPMce4bt4j9ovT",
  "key17": "2VXC5dvpH15WFVK833Sa9LW7xFkbBKb2KGtTLwkbYpTJLN57j7Ebb94jMadDntDLp7t1HfdV9nkGr1hBrxNxZM3E",
  "key18": "3kTAdfP255B3BW5BkJrewB49iyEHwCXJDS4XVFcU6bdd9VxMnuiN1Nefco7WRFP1rTzspsEkq41DWPMZ5xB5co5z",
  "key19": "3x6Jt3TxH1RPKu9BgUW8xZpucjv433cw29mnXStv3nKehUv5NRY3Rw4KFB2cRqk7JNWUxr1xyMmpU7pMKv3tDRMX",
  "key20": "5rSmgLGFfAe5Dfsv4EdT3AKDA1tcejaGrg7eayB5M58zq9dKzRdVTf5UhRaazwcjCm5gHesr9yGqx6YstHz122L3",
  "key21": "4SSYEf3XaCwDtwnF2EmLasD2xEDfWxX3SL3dTXKQ15Lx3PJ4AqBGZqKtUm6oNBGYzkcxBzWsBS2emcppXwNfbb2A",
  "key22": "3QVrx6Rxdmj3gjhJd9dtePtWGVXfuaByLk184aAoZPQPZVXkudL5AWVXDjti1ifdmtb7Gr2tquKZMsFSdWt4EP9T",
  "key23": "5HTHBUfKxtDcBEu6QkEasggD4tEV47vhKe2Ai2Tc5vkQsQJuJdT1vqX9JWXrav4RXmFufqyHuNWdZt1tYvdW9iiY",
  "key24": "ZUNmZ29jyuoMQJAGcwbM6PbUKy4j8wqtVXqBSVK5jSRBEVq3EEenvCjX1xRcciyDkQ4XtkfUBdbuPBVMoY28fPH",
  "key25": "Y7hNonuFTkYwQ8ny3jTFxfRNfpFpUdo9v2jrfvZTi6o6R1FGJ5cs3a6WMx3Bzsetcjjbymc9AsQyJ56JAvaitCf",
  "key26": "9BAjWsEXzsASRjkrg3GdbX2KQWoBW1ZAT3bnrEQMhr8tf9qdwEcvZqfdx9U4UYz2DiYWgES5rYxZEXBsvYQKfxz",
  "key27": "5n6w75rwpSSVi1USLnSFTx88xkNf9fCZaffS67EBur42xeBtWnFBgDxpvBi8ectrGkcnduRmFjTVW1PvdFFPu4hK",
  "key28": "2nafFp9iMY4yUMuwrCXnC5T79H4fFjJ3B7fhfYtuY5TjPrjLNJkRXv93PwCWEtVBbscqyKxEFk7t6ziNNvBwtMnY",
  "key29": "2aokKX1krWSfysqgN5n5UW1aKhSd5nH3RrMXZxUMEVEd23DhSY5qq1gfBWoXiFFH2RWWdpGgb9kLnMtbuGFHWqcB",
  "key30": "4SrMZgAADBWDLvLdJ5oyTDw1PWBtSwVoMC61jUuWUNFdYuKgAgAuUQos8YD7Vcj2dRdPGsRXedu1ymifyz8dU4zL",
  "key31": "4gYxfmjPoYyXX1XxgqXpRdxf3FQf8twh1CFPoZKKzoaSvvPBbGjuT9SfYC8Fc9do7fBFZH8QmxK4S6eS1KGusrUg",
  "key32": "4EGBYv5p4NpnTNJo3QEZDx1rkE3Hu4cnkkqBFXrTWD4UuZKJKV6d4TQoqxU26uujfS5ecHH5wdmp38Ps3A8zkyL2"
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
