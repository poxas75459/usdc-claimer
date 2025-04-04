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
    "Dr4uBr8hASg7nBUkBPNSsB6MVRAzCvvNzX8s5LMZr15rkFjjkGKoWGGbAa37UmH6YoYTjPEpPqPUXVvj8jieTsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDaY3hYsAMAgUzPTv6FqfYpnvSMpNJgLZNQTB2DZG8coTGwwU6medEDEAfYiQLeV9NuVZvypZ8ZJLH4MVojYNfS",
  "key1": "3Lvmj1xC6Z7k6qKftmZm66Q2wLtYDB3EaPNX5fSHNVNm6sgSebkVY3K8NpNKMDkPHZRp9vgDgj1hhbcQK84axN42",
  "key2": "2MZCZJXcH9ECXrMHEP1cfUxXTKjpKCa5PxkNH3uXcXVvPh8fwSaBTanRzYAo6AmqPmhxzsikdQ2eEd84JNmhTwmy",
  "key3": "LouXZjU9yTbZRPYCawGHa78w73PeCXoshxcGgov6drB7YU66KidSUwcV3New3vSu2bmJSJNWUghETZJ1Ji5ZxnX",
  "key4": "ad23PunSoFXqk2hjW4wRz1c9ZvMvrXs4h9ffC2KVeQGQwq5sUvQAerGKKz5cyoRumJcvfAF8FuhnZnn8MPa5gz8",
  "key5": "3XLJFgnitQWhWotkesY1WE5pAF2iXu1bGn1H1sx7Ldft1dsjnkyAmAhE2PiNthaKYfgVGaFX4ZxH4mh6Zb7VHSor",
  "key6": "2f3CUEJK35qVtyWic3TjTMSZjqsfQAMh2JPDJRmfxNMTL9tfxLRytpty1Jrqab5N7iypBAKkmS7Fi1zF2gPsUTuR",
  "key7": "cerSn2Uoxb1M8EJnR13457QvJnNKyHXnRDUGwdVCvaProGEZwsPKqgUqwaizgTzRc6rZsrQ7qo1oddJLiVrQNQs",
  "key8": "4qLPbhruaRF9eqhmY19dgkTLr2E6v8WQzQuyPVtEnLw4wqz5RQ25vDRmgqpa2b3irJmsKJf519yW3Sfi1UPcwzVg",
  "key9": "3XqfJ5WEunwwsAa9aZcYbAmFABifXjQBUtjGvunsBpovyPJcCej5VR7o3UZQwTgo1NSZjVCDQbq8CCgDveEsupdr",
  "key10": "2hBoooCUH7Jf2zrQmX4yqwr4nnoANrvj1K3aceTa1BU7Ax4hPMidDwdH2ZQ4fuHXZSAT48MaTpc2v4pXFrBG6DCf",
  "key11": "Bd9GdgfFir8Cajz5sMJ8Cr5CA1TZ8kTemsZnixm1oQ6QhH13ZJ6ywpRAoUH8t32Ma6jjGyTZP5He7xSpdiggmCd",
  "key12": "3rqLyFkn2UZ58yyCtLBZWgDCE5pffGvfrTzC2BADqgdQRig5sUpvXKo13Hn6CLvnaLPxweeQqRGdHVddtuUrrNS8",
  "key13": "2cWj5oVryj53kjBLkDFG3FLJE1YniMmogttDZYkiFeqP1cSrzqcWuKgCfrKsq8rEggbD8iB9eoHd2Zia3ZBR8X9n",
  "key14": "355dfBbpnauBDd47GE2rSboQjBLKzbdwdvcu871uwvaxy8RT3XfGrXEzqy64ZWYZ3kjWQq4cfh9ctVbrLwAfiuAS",
  "key15": "hemmJDVp9QKvkGxM2MURDmBFHSz8yNczeXv5tgjJ43ois8suEWnvkU28YGNzye9F2s1toa9DHUkG9BMEnhSySsq",
  "key16": "5DqgTvsJ8SBVozmNEzfE6VPkTF4j7aeK5BragJY6e6oZgCCcU4aNZHT1aRK7tJEpzfDbDo9b6HEmMHsRwZwBXtzR",
  "key17": "5Az3117mcGKVnTBdjf3rkpNi5PfGEXcsUemAbkFBHF7yDNNBiccB1tSQ2kUJZzMwMoWEPK6ByP7RVMMVx32e6HMv",
  "key18": "2Snc7ax5YvxnW6dfnYNLfMYTSFP36DjXQGeCxYJB7Z3KkBR8Zb5Hgato3t3QDfNViwbs53NhtTNSEfJz9TeakUPL",
  "key19": "5NbRtek1Z2SotLQuuyQRc7neqpUYQbF6qiHq6ey8ZY9DDg3eX5iikqR6HHNeAr6qanpSyy84ezv71zvbGNHV5GPq",
  "key20": "5izWGK9mZzssha3fxEJEhMy1sZ7yM9uFg8A8tn8XWHURf4W62LWUovynKVuxC3q2ZU5b8aPYBLPeGunMFVE97yvz",
  "key21": "5SwfbYyauHK5m9qq32og9TneowhFJMFyarPxFSqYtftwqVdeRfU88qisFRFg4dfTmBs5dzgtk6HVtsjLRYya4cF6",
  "key22": "3xhnKRNMsiUvGjXonUS7MU4RMDSZiFh5XG4mNXQsmskihpmWWmiP3cpmGs3QTn5TuFoBRGN5adGFaJf2gRK1b8vA",
  "key23": "4iUQNtSJZFxZxHSgvDdJ5eSXTwoGrm7SUonHCe1hujgguYF4XheGuiwYTtxcDW5tMcr7WrHYivrTWd354M9m1uih",
  "key24": "3vaQHoR7azB8tdHrn76Zwre3xfbmrYh7aiiD5vFTG8woGsMXmakQDd5mnGidJTKgC95tNfvpLQGxJAWGmje8RryX",
  "key25": "2FbyH9u6WNXwm7s7FhPCiww1em2vXTZESSxpAzpXGK1XM8PquY3Knj1GRiH8vK1L4Ei4iD1y2FXdffWDf6HNXtc4",
  "key26": "2MTP3ju19VUfkSm9HaZ1J2QnQwf4s2yBYPDSToP6U7qBTTN4BDLUwwp59GkPLhdH8Mw7u6VirjwkhyZ38h4zb4hH",
  "key27": "3uMP9M2uy1Ea7o2HeaEqfAYzYiHKj82ZzaUzZRoVwB3GRRUcRLim26TB9Qb3PxVsT9JTqGjcpjWxX5K5YHT1BUem",
  "key28": "4LpzoPTpS7ZKUMEa5XYWbbhyqXTf4Hwi3gxMjCJ8KTExmRXCa5n9e5pGDxXWkJYCSutoTmryVkzyDgqyDQRfyWYB",
  "key29": "3f6iNxdqBFeWVaS94R2RF4hdPd5PTutu676wBfiLgWULp2kN3VjLLYUXWTHmxFcdnqF9HzPTb2ZQ2qfhfqE4tk5y",
  "key30": "4rjdHwxpSMuKAqUuMQmh4rB1NHkPWNxTawMZ4Va1T1vjaRQiDKCdgo8vVZaeH2S3uho17wEfsqxbtJhz3WbnzfBX",
  "key31": "smKq9TPgp46n13ScnbJ8qF3Yg4RtRp9tN5CNDwhLNHyxb2AiqvFrAfjka3rxdfrhChcZ6vaiTDGaQivtx49C5s4"
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
