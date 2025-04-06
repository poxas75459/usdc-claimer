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
    "3CxEUZ6vEGtx4Lwut7mciyUmGKYuLRUGLq6dz42KT3c6SDndKVNCPty7pRtGxPf6RLiLKz3ZDEsSm6sd5QF8uVXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSdjV9c5a2vHKxxvkZ3d6hXcK1cKxg8X2kNqjpzZ8LQNStHd8Le7s4vnkvrobaqZSW9NeizsmBFWTcWTRhXqrGD",
  "key1": "45S8xXDvsH98xDGRPLDgRtvbfBgUaQvYA4PuHcKgW3SeXcyZDCfRWJ2wwRC9EMuMjT3tmj8yNuKiJfqZtcJJMfa6",
  "key2": "4ZpMTMdWw87b8Di6fhnyAPLWXCaeX8odJ3y9mtQF5CzAChZ455spydu9wVGswN8JcxWy356JbvQ92VZ9CSc7ACUm",
  "key3": "36EkFQQqCz126Gch8VgtaRH6gc2XqA57mKGWapWdgkQWXgfCJ9SkFrGTGuE2duDM3wRUznvuqPSDYuwzggSnbnkM",
  "key4": "2wX4ccfAKTo1easmfZ9q82opRA8bLoEFKdtcGnVdCFYoUi11vRAYuqwZ1WCfrFuBzR3kmr9ixZaMqmJ7eWb5sGMD",
  "key5": "5zjaa5k41EcdS1zJkKZMhzWZvcJGUs4rs9meUbs63qUhwo1eTT1Y229AdFV7NzTr3Bd1bY1sRDHDxLoQnut2R5BP",
  "key6": "SWnPsAAFwyW7EBTJBzk7xiuzvbCwUZfjFvPznyjT1iEdGXsbgPdnWYMQczoCDVL3zPtfLSRNznNmrSiL1WgnsFA",
  "key7": "5tAinyv2uLZm2LYV21R2gq7FeBKTm9UJGVjx4DxABpRUi9RGFvnTe8uXUaJreLjK2pCH6HEggyyHXAhTo1axU5kH",
  "key8": "26cwJkGR9akuEVz6GTPLMgVTr35enjNR1bvPWHag1ag75PtyFw8kH6U2W7586ridh2Q9BLHrCVPS3rEiBgg1gez2",
  "key9": "48djHKbRDDWvyksTKNwj8pjqWABcFkq6Qo5jKFQ1VT1c8B2Ffc9PKU42tWFNTa4B7NhQNHhhMwkJ5k2KvoBWNTce",
  "key10": "5ajgFvrJcaC1NzkhgTezhRJUi7DQXHKu8N3y6WibPb6VstaJkRRYGBSZCy74f1gauyboneZ9VA3DrVNwfx4EddCt",
  "key11": "27QuHBq9fCUPjkPgLQ8MUhcqnoXLUdPtGcA5kHii9YvSSmnoKxrjxvtjqdnUeC2XwWoC1KLyVLwAopJZdF1JbaH7",
  "key12": "532uDZnmbnnVuaA4q88GSvzmZyue93AZPDsro6exry8bL4a2QRM1NZyDn64qUoHpArtSrjAunbEhEyyTkbKd23cw",
  "key13": "3vSQBfZc5TorQTY7EmsFuQa3rTJrBWG9FNHGBPmEK5p2v6Cir23FBvhour38oSn7YdqUVMhZWUDxj6j6uYH66ooM",
  "key14": "xiSi96yjhHCDGQgUQbcazKGYuXGBeoAkuqUou3UgrVMZMBBiJQXk7sfTriuyN2kof2csEeALy2cLsiksXFk26AU",
  "key15": "4pvAPi9p5mcjhLrgETYUwkBKw82WKdzdxoy6Zgo2QwGoe6EhdwbA3GrsB7uzXbrb8cyeCccAhbuzwyPE5u8LmGwW",
  "key16": "5AQ7migBzvd7c1qoHMg2D85TrKicDCZh7YAT2kf2ceduLDCdguqTezeZTkHYWbzytz5XiZqcDCrbHusSP6A4RHEj",
  "key17": "3tFf3NStN5H2GsZ1AcQBLK77uFtURpoVovf4GhUgZeE4u6QbNzyCLVi4ThT2wvL8eLMzQdwxQ8Y42Z67x82J1cem",
  "key18": "4Cx8tg7JaT2cufdoj7hrAUvEzjSxKri6W52x6maK2EJe3XhxKymFFZBCmk97mhnrGD7CrbqR2hVfVWgjNnU5cM1v",
  "key19": "y3wLnv8DFNt4XycGpeBZHpEdh8x5Z9ccRDaC1X1sLZncq9n3ZUhpEDZzPKqE2JeZzrbY3JvF1Qtt6pbTFyurC82",
  "key20": "4URCY92C2cN4LeqnvCumKPuz9vUdoEn9QJPgxFM1LrAZkN5gg2c4YbZTe1wy1RXsmkXmcXkCBD43QtJhxXrzY67B",
  "key21": "5acViZmdhZa8cbYFG4j6YYaDoaDHwjpgQv6FbwnzaEqYqaDTXqkudz79ruXnZ1Q3pCH9rbYx3TFpUX5cYFvxMWCo",
  "key22": "XjEqwjtMh1uWKnMsbRzz7DPvBo3WEiTbPDoEMkEqDWih7NxmBaEp9HzGEdv6V3c6PCLrYtruWUKqjMeGwz8qJ8w",
  "key23": "2qwGKT7pHrDi2a5eDszzq5Xmai6FbXzz84pshgu2c2T7gy4qdEy7QVBEGVprZJ99MgHrH7EJQJKesjJQMZUAT3wc",
  "key24": "2CgbyFwfz69RHuG9RbB3Bd9xuvcsUN9MqLoXwmJ2EMVRiWjYRQC7eDiqgpr5jgfBngVrUxwcWGACi3wN2uTfhdDF",
  "key25": "4DqiiYugz6bS2FYZC7SC9S1AsHBT9c7tYXjgguUenpDHfpBFumJdf4jEbDUURScGbr9m4VMEPC1jXvAJadV1m9CF",
  "key26": "73ySg5Z5mPwZfFq2gcxvnVmhUrkc6tqQtL4a7U8psEH6EosW6fvkNemX3rfjoHDHnicumApE7qaVch2JsATjkm2",
  "key27": "TwzPUND95KNzLHLbvvMQUkDp8Zn12Wfm96QMr6aKw61KoXqiseyJt4SXTehmD9rPFFNEiHjkVNBh7sgqbFoX6Jy",
  "key28": "5trZF61jHc29cdZh4g2pUKwYv4ZSvTXnyVCekdJiVTDzwgJZrDMYAU2ZPXx64XSarScWhJyGcdJkvbmtfNuWfaas",
  "key29": "3DnpZrUNpb8U9u3HSb8yu9hYSxhthd4nNsfFUs17tBW2ugonVyb93u8j8NZ6zhg83KsHPmCo3KnTnuTMayiydNQg",
  "key30": "5ggjk2Pzk3RQNBTnvf74aMzxn56bYHBHH5MBKnV5wQ1Z1JsqtuFca6tNibEHWWfH5ML9HaB2PevpF8L5kPDydayZ",
  "key31": "MavMb2jEdce8PaZQ4exHLaQxyBfEW7niQzTtdfEbAxD2RVAdHAVB4Jp75jvwHgP9KSKD87DU2R7VbmrcC8TJusv"
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
