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
    "2xqP8pYqjBRm3YYGaMBgQkLYMYqVXNPhn6vyeYZ5t6RVfNYRRATXEcmncJ9t6EUompCyXVWTTsv5nXFcNdrREhPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjE5CQJujq7KDTRLruGtnubFr8ANtBRJPbvzxgdAHH1XuCtaKBHUUejv8gqcoTXGDebDWxj4YuEbVn7ZVhhJG1j",
  "key1": "64ZeTXeBadmRmf9p48iWXJzGrjWxTVNKki1Rr1FoR8dYvdAX7mrJiDfXVJKGnmcwbTpoLtGApnwg142Q5b6WfkrU",
  "key2": "2GKZK1LFxQBm1nebM2tpsAUDeQQA7C4vT6jWWnvTnbmy6MMpWDjqKPDXWxasQdeymteRjAZj98Zw72UrkkqdCmR3",
  "key3": "5EANm1HkgzCaDu7Z7FhYe2dsF3SfJ9RgRTx45bacbTy9B6SCbwHtio8rQ4LEFAdVQH1XDMzc9Piuahubvy4nAxzq",
  "key4": "4tiqv6Q31tWDZRnrHijzAbJWvdyLA2MgoCRAwJiGDE5yFV7gjVkd4QBqgXzwvDXQ3MFrTZksHhDVTccJeGda5uky",
  "key5": "5joP78BcXLpBuunVx7zXpG31LV2z5okjUYck5MhRQU5SnKRKArnNJKsP1PEKAdU52vhkpsvkTQNzKwb51mkFZLeF",
  "key6": "64Qm7z6qq3P9DieLfMXxX6WUiW9agVsqtNCCDt3jK2nAKVLJh35RtTH8UdmKDTc197Tj5rrximj2m663aSKZf7e8",
  "key7": "vGU3XNXnYRJaA6VaxruKVWQxC6EKuAQkTSvGee83BVG4T9HfzAvrbb43KhAhnm9kg3oJBTHkAvsxg8EsFqna4o5",
  "key8": "LURYy3CMfj6CjGhLjBF5Ua6VNnCWB3eJxqxXsjYtngwnjTJx9na2h1mFUbnqSWF3Bp8777FEF4Y27rgqvZECMDh",
  "key9": "eoEuBUcKJNgrTYxpLuUpsxJbb4CSfnbKFkHuUrzZaroScwJvrnjufSuKnqMbh1tQpNJ5SE21jgqsiAXfknUUbeY",
  "key10": "4Gv1TSktkLGGZa3mhVArCfX4YGcH1czSiCs7Es9j8RmJiGUp632Cm5wS9QNLhZ7fSt4LXyjtAF3XtzKrRAb5bxeb",
  "key11": "2PRK4jyop9LUj8B3ayDcDVU4e1hEzZWunVxj5FHv6YCUnkEXmZgoeAPxixakioB6E6JJHduufiGQ8j9krsSKur5o",
  "key12": "5R52ps37HwsYpsaVBRLeizZp6KjaJxbjMRycTMfM7UJxpvo33pMkQNAiGcRQTbFZjw8giLmu7oz1WspPTYsMnrhe",
  "key13": "4Uuqa5TevfaL7iqWqh56oUVbnkzQc6sCUi4iqiaYGSvBZJks2GidLY5PCEmVL4d39do5zgKgkL771y3LMqSJqeiW",
  "key14": "2xHnmDheNMVgychFQRSdUuZSKqUE1jzH21UgsTQ2mrCx9MxE3zccTG1jTqSaGJb585drVhn3FHJ4qDiVbgMCtM3D",
  "key15": "2KBhcgS7iZsvWUu37wmvFkAy8XqY6sy7nFPofkBbfgxyLgFjgTAKYSjX6BYucdfC2ji5W66fVYAVjWFX33MXReYE",
  "key16": "4M4zL6tgwkhhSgXZuxc5HjYppCLA3N8Vc2hnCT1z9yxiGznjbi5ftaok1eegKkoejjmPkBCySPoGNyPsfQ9LzFGm",
  "key17": "MvXEqtWLzuAvpvFYVR4HZXivsfTSVVRREH3o2fCDEKV6oTYi9fUanAteC5U3voJcRQwtHvrP6fbu3KQjAcnT7F9",
  "key18": "4LAC1kod6YJZfV19rp5BadoXirhhAL2zoKRgTsnEqTgSoMwVPCjDaupHkaRqegS6Jb15VFhUXt18cq6XeZqVLkQN",
  "key19": "2vHGsSZy9HqwXmqyb5JjYVyHbiDiHAVhPLTTWw87XPttEeQT5fiesU4jgajWBFjmNo2fuX3Zy1xC1LTp8sSExcjS",
  "key20": "38bKTwcYG1Hn83nXJDexaxjzD9ATYXjwNecN9AoT7H5S5TufHq1c78YzFw8P7mcmzsMLsVeYqTSEYWm1PS2Sj4wr",
  "key21": "8bWSuadRrN1t233K5MozPBGmPUkKFiHrEWJfHXkEex37xvBormqTZUxkUq3LoXPJWLQx7vBr5sdvmHkXywHDE4z",
  "key22": "5rQ8cdm2JJ5bKUBQHofCtRNorcU13h5ewV3A9mj35sKAQrVmSAhYvA69AwzE9xsRjdaCPZGAe7HQ8dKidzrsLNuB",
  "key23": "2ugLFUwi9nJkJe7PcgcCc8yYM4y95qeErDrRLtuHHJnJt4qypnb9uNg2kFEPUJjMvtgeNb8nfDwPbsYvZYQHLukx",
  "key24": "5r3Fdgyj6L5SHEwG6PG2ytHHsUMvNmE54698QYEwTfS6aJRTRLpGtCQcATCYpMrmbqi1nwCDFjR8cqF3yRyPzpbw",
  "key25": "MJxC5K3GARjqNoGGne8iUwerpbb22QLUxF5tMXTdYN2QbyDGtWjSBYJNTHTm83RwM66qeRKLYk9AthvDYnqsDLn",
  "key26": "CNzFtQjtjyfdAtRftjhVmv5TAjGgbXTQqZ27or56qMtiJZ62xQKcUcSL2iZhj5tT8aWECmjd5tk1zvkF7SrmzqV",
  "key27": "3W3npbpeVvq9xzdh25iW5bAPc4dmfYk5gWNbqdGU8NQDwUmJsMHGvZCjELyhjkqg43pWzNMzYKEsWVRzFKaXH8Qf",
  "key28": "3SP4VpyPavqa3iKCGWjhtKQWPeqpoB3GKDLwwqzyUzBveZYD3hcg2KeQprojUp8hsqfujCayXY6jUhxee4HBEpuR"
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
