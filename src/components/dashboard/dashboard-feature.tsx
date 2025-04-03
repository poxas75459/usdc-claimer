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
    "41rjuj4D2wXBoTQNXBi9hqTwvd69oun3DXspZrGfzC6xsK27jjWc1qACmn5gXteXsrtyGqmTSe7232zGJgVX5jAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeAnFsXJfJ7zZ2TiY4KpDtfB2Y8HXk54KKz2cApRtWE6arRaNYfmrgnbCgyeXri1dFVQb8y7vn8ccDBUtwh4PjS",
  "key1": "ZMKgZKNENDxC9CKznVZHekXzPD7U5pEzUBUV5LnpG13HbgQeV3Ywj58qtnD2win7sDXNu5ZKKkGxCWF1f1VjTj8",
  "key2": "wKzpoyYLkJLD873gFduNR9evvRDrZhJnd51hUCBtXCEtwziNt7eSiAhXcpncea6QiVmnMSj7YexFcmQYB1c8RKT",
  "key3": "3Zfvt3ELbZ87hLTMf5TgZfR1ApXTpzs8gut5K3qXfXiT5LuiLLhVDKJeNRTvBPUUV66V8ysmgqwv6oNrKXCLRDHN",
  "key4": "27ZkhUfAaE51fEwNf7Ybu5TQfk1jwVpZtWf3Bhge2B4EY7njRJMTXWAnhp6Ub9Vnmbas3cK9HCYxkLqU6wkqrAZQ",
  "key5": "3Mdys7gA3m7hyNMbBzphzBud4KhKo77WS7jjHzofQ5on3XArBRQdHdKvsdH4frQCCo9CfWXBY6aNEcvDBD6Ra9Yp",
  "key6": "2SRaQ7T21WtdcQBvms8wJ9gTn5MduLnmCJoBBaBDmQPC1GmvsXDtqFXVzoXkxxGZ8TVnZXZe27KjKG7fvy5c7BDS",
  "key7": "5zGCW2ErWrMkh3kqGZ97QHLGZf5D4fe4jT5fn73EDKkHr7bKb2DJSXqxjxfQNrTbDEK9wAkPJNSvRLEsb9qu7XEH",
  "key8": "3HYQdUeGkvnHWaEzW4N8TZqB1QamYgE6TRbvsjezBX91EZTF9L5K1nXo1GUwiDa9CF3XUXB3NDzA8GD9wEtqJWD5",
  "key9": "2hsA79i9bGAiQpph4oDBPoGm9MH3fn2jaF3MgdhCRyAamLgcsbTk79BDG5EHokATED7fMSSibeEdy2ttUsM7FihX",
  "key10": "3t5kJRj3EXXcdjy1nqQmE7SHDqUdGfyJU7kHaMb8NLgzoQQA1BjpSa3FGgR5kNtDDiiS7LD9VWfkjDB7dFUun4mz",
  "key11": "2j2aKyV4ha9gPsRuArmG43ixyq2a5rSrmjEtPH8aj4iQRvU673SanhnJ6RXKmzs281uFLs3Qvc3mXRJGGjhh2sLV",
  "key12": "SxTNtRikoSRFp2xppzZcg1UUuTv3c9yFyQ4Tv7QnTgVc9PHKXcj1KKTknmuFVbztVni2ccTW6ehQrF9p4UBWzVn",
  "key13": "xJmAo76KwciyFPK7Wms8qV291XagS87NazBW1V73G16gFNJcjZ4t5WJsruw3FHR8RCv1bCbhf7rzPRa7Vx78B9M",
  "key14": "2nh57hkvGjN9DG68ocwuJugTRBLHV9fSoqt4J2J4oTMHuZFb4FqGL5rmgBiT6mWmaaA5iXMmAMiFsvdMfbNYBz8i",
  "key15": "E5hfdNiuoaWYjSdcxz6H5cvafJU8L67wK9qo9XU3NbNczAWXpdKLAwDpL4SrikGdtc5jVEL5sUaVPLERP7rKXYd",
  "key16": "Sqkh1yBhnVB9sfeXtw5Bf2CUXdXe4NNBE1iuo5BQTDd8vwSRJS4MCUN9XnufKMw46Vku7nNUi7idf3CSYgyZsfb",
  "key17": "3r2YwNdnWGmyH1GfipKfb3tYK8As8nsNAhHntejvj4gYoTMj1W9hDrosZEYuquEVWjhn3nnjvUQd8NaxNSkVEoz2",
  "key18": "2dvSB4fqSEAST9bCzk2QA9PKTPt6ANgGALYaGXxXZRH15GySZZghjGDKw4eUgZmzdj1gPD7sbCBR1uEaUhdLbeJL",
  "key19": "3gYkBpgiJpkZNaxNhPpj1XeffhJkvqkLwARXSnrWJ8wuWSByGmSjhUs8rS2RdU22dJh7KckjkWGNXipdqNzNskrf",
  "key20": "5pcWkcc2MGmwmRJ5o8umW5u8XnaEaM1UjLB1w4Skp7X3kwvjZBoGa5k9kTKJQBAu7LpHiNDvbKYEWat1UkSCSro5",
  "key21": "417wdTrkhnaPdjCiX8GBVRtToa1nGcg719ipqfueVrZc7eTiHHDJNnhEB6EWRLqSGMrsFQv4pbGjb31qUF2ykWm2",
  "key22": "5EboS585CQNH2xrxNBjjhnud8XmoUt2jW5PmUYkbiSrvsy6dvwLJJH2JdeQopF1Uzg4fpKRJBoVkTJLuS4wcBjPw",
  "key23": "4NN3JKvLqo2qaAw6N9EaqDruFRUadvpHwArXANTFHgWatTPADsSn7bo7EC7jM9WjEy72D1i7711PkV1RvJq5c1k5",
  "key24": "LHB2isR9nv2MrsRC3LHc1RoqKNWrvpbz64QpHG4TjHZByL6m55xh1Psy5iywqHBwThXrEm6RqvGBhPKqCcHrp5a",
  "key25": "35gpogNQmUL6aXGjxvoE1mB6q8ZLwtjNk3D1ygUWoetgdAZrewW2gJeksSH9vSipUSVbfNNn8E5fSjrVipSejdNo",
  "key26": "28zorCR4ggsoWeysTPMrVGmuNmxk2L79XYW75CnrmiXS7rLWh4rPSxBCDS2ndpuw8QqhjUUTtp8xPnBPLpfvXt9s",
  "key27": "3LNGLfYMDd1s17FDYc659VMBrU5XAYFcPRYzwV1Zj7ivhAVynTmypjKM93pURU9Y3MsUTmoCxhTH4MCDffAkyBoS",
  "key28": "4kgD36GQftEQANhaRDfgKWNRcaDsw37Dnih2Z49wHWFUZNtwFxEPrgfEhKgQ9RPScX85EWbXFccwJXwdwm6PoFHg",
  "key29": "5ccFvTXs7K8MW8gmoHxkVEvhEwU4vmztVEv1ZQCyQKMe8J1SzjDcJ9HSVc6TU73Zjx5KVv5Q5rXR1na4Pcp664su",
  "key30": "5t1kGByQYyEodK5DBPMzNS73xZTYkr7vs8BrLuqcYP5HvYR8FGnjYFJgJMncLpnQTDXEtMFZjxYF1cvTDBtysSaJ",
  "key31": "2xC7JED7rrqnYt37abpVkoBhJBMFsrXzkH34cRJWkSe8aRFzUCBhzqxzebLy89XC5gUpnQcSe7ssMiKGyrnQkKWP",
  "key32": "2ErGkrbhqe4Ur5AyJA6kR4E9k4SBxD6JUeHpXzJZvW9DgDeLbmqeCC1y7DAbdjrY1uWnp1hXN8DoKjdMgarTMpTi",
  "key33": "2QbPc593gnkpMcED8G5ymJ9xpz5tBKgr9fDwojFadm7ZdpureVtgtCsxBfPqnFY5VWt6FGn4Dv7cTi9qb2jAg285",
  "key34": "4SjZ5kNT87XWHccHcZGvtDecD2D4eLtHyM8erFGgQNSE5ozZDozVpiuX4WhaJ8urY2PHGbXW41gMdYQatP4jFufw"
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
