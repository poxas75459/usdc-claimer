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
    "2fGrgjKuXFg8YasPFQh3iuumVsAobeGUo38KF7ghBnxzLP7p4jZnNH9pjuvuAuC6t9Lr9d2DMoxirnirvHejQLGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnQoHeaT6uMWG9zr6GhHfenBVv1JDmbYfRHtXUg6W84tEcpK6LLu23roJyLU24qRjmpaNpPuAG8iZf31UCrPoGk",
  "key1": "3JYJjqCbd3MKQZtBdF7kp7MDqVfpt8XvYSk5gH3L3Q8No12atjzQiGnwv7Qk1GtAFQ8LdSFFYGo3hiqPZLx3Vaud",
  "key2": "2QGGMDEaKePWDqh9fQRgoLg5r8s1bgWciVQN1hAsu5PXBSv9cAbrQwBuUcyjhhGHyYQzW6KVDL1zpuaoHYt6amBK",
  "key3": "4NrKsYf21V41ec7DVoUSx6BBfDjdsd8qdjmZnAkkwFPStTZ9sfQCB3wxV3nM3GBrcm1ZiHHUddBQE2cM1AMwVKDe",
  "key4": "2oHT8177yj2tkrbVvkDxNbFm712uhGTSu1eqRQYCegitBfYwXLzxuXU2DN54efm2ronRZPmsd6ddUEfyanMRMRnV",
  "key5": "4J8cev2t2qyiVyJPzT12ZbQhrUaE4caiVgdxy2usiRdbDD9GXuZZ3K9qiKcXJFHYACxFo1xFRHBmDZwXKcrx37sJ",
  "key6": "2iWNV92bByZt8mqrmRuk2XdWia2tsQdbWbKGsjc2Quzv34y2rtJeXNCv8LuakzqbW76mVxHxFtmgm1kn527PZCst",
  "key7": "2Yn6HY4eym2d8RWno79UkJ5VfknarpnoQcJv4to6h9jjW1WDqJnj1BYawcTCCtjwxwGWZc4G3SkFXGawfAQqUTNK",
  "key8": "2CQwDvqmrEEhvsQXjNpwxkTFoe3wpHosnsAQocqP9Jpx6ppK55p1rfHKQCSdC7JXP2qBcGG76si5KeSMZeWgjE8j",
  "key9": "61nGTGsDhrUAeFCzg88gNfGqQbbHYM4RKVWtPr2YzGxohFe6QXNuKAJ7VVaP4mtc6hE3e8cDvHB94aPDA3c99dVK",
  "key10": "x6ePJ7rqqv93AQjNADoPrNyGhpTWaSZwSp7vMCAYX23THR915DJ5WUqqWwiAyAJ23Vqn9oLbfjkeaUQZteEuhxX",
  "key11": "cm6hokTpAuL82WViLQr4ssNjKk5nr4w9Q57TjRnYNzJg1kELmY8VzTXNWN2Um2jj4FGM57XLkHjwtbm2nte9Tdu",
  "key12": "2gsvFai9fvNLntrJvQBorKxEymu1N8SnYgi39pphYyht8Pwvv6EKXhKekLRbPDH26Ha7U9cyyr89zMjBthDvhamc",
  "key13": "igTEehGCiyK3HhkSR6Gyh6UtzPwqSNKde4JbN5W9AYh1sM1eCKSwhVSPyQyKXQSKQ9J5QcVopz4Sdjer6YPk3rM",
  "key14": "3WLPgfcyqWZbChUNhZ8sjZEJqhiWrAJghXYXa1WbVoJKpBdykXrRA93bpuCDHDvfZ2sf1b9v1Sz5HUJCmR3tfFAz",
  "key15": "58LgTRDJPbUvdVFU69AwDcUijpYTv2UrDQKuwKwLV9h8emfoP4TqqCaHMTK26GasUwsDau4SnzcXHEmWaTFcMAFs",
  "key16": "3Tt3FrQ8CtSALga4RUo8Azt5Wq9gthtyXakJPabAwYfFdkmoitQct49AFFagZB3Vjjjt6c29jLHoZjqCdPyYZ2G3",
  "key17": "56y5VvHbaMPMDE6hcrNaWiATMdiZoyDmwi3eRKmsiwPssTfcuocpwmp3WtTxRzzq9dTeXaHkug2bFburg1y1cwsW",
  "key18": "3hdDuh1t9jK8btWCoccQzEMMLvLzsozX96R2cSegZUGgeBVCai3suhPS4Wd6X7uherZYLVbyMkDE3ARmR8ysX3t6",
  "key19": "4dkGuukAoifiwdkSdwfTP6XkvkLZYKSkfjfSNeGAUAmeckTHnhMqpwBB3srqpD3JB47hxqJCMdh6kK767ffBps6h",
  "key20": "5HobYVtqB7PwgGQHnDfGNpKg4NGkr1E2mu3FfspRsx62vJjQ2BCrYz4X3nhYKfBZxxcZEmSJTF255Sw2kRFuMn7x",
  "key21": "54FfpLniuqA7kLLxwqy8W6Di3Fjd7Gw31tonSVVcTqcvd5HFC1jWmUcxSLX5vXcDSrFtcDB69qFBbBhwZkQFXi4A",
  "key22": "31hTbUDUrSZgk8NjcWrPt4krJNBSHtwoffTbqWeN1msjX9eGhQAqtvJg3C4cXNnvvb7Lj3mqTNCQ9inbyqasKumN",
  "key23": "33GDEhj73fKKchHBydLhV3Er4koyi7mvzMEWEyCSvndGEg1FXefvx2myfZprhDHm9vkJWBaPht6gt5V29upeVYNg",
  "key24": "5btRF1pxGmkhDL8tEmko7zKbi7NLCjzrzyYyMTBRpgqEUQ1gN4NWV6GDdRBX2CYMkt7tN6zTreusxRZoCWBiq6wS",
  "key25": "4VjP76ccE1xCXJM9S4hWCHcizpi2v8vGUksH7UBnWr7NhNxoBGtgetAapcae4Dtkvv95FjoqttfNDJs6LFRgomb2",
  "key26": "4i3fFtVHoWD5RvM6ZRJY3Vixz5vuVkcc5ooKoi4V23iyy52f3LYWeqdXuuwNhi869aQaFd7qV3TmGAZbrc88pchh",
  "key27": "4Lxk4AFQheDwKiqiEKu8QNbTTgZuiAPKnKnbTnZrzmcQEVynfsn2UWKk1pQ2rviNEEF2AT7cKcnrbVi45ZLXH7Z1",
  "key28": "3puy369hVc1E7jsWnv23JAtAKwNkj71c1H2T4MVty1RGZq9aitJL2BDBVYJDUvbS7BVXQPy8s8dKKJDmuK6T4oUY",
  "key29": "3vozBwUgSmoi4KejXh1fbCWVfomcVq9kN4cmEeTmk4ry165v6s2ew5YJLVLEBusEv1oPc1dvFopSKpY4Kyh39rEb",
  "key30": "UTQPAz4jjefCgLVtmSuheH5qX61Mbu5HazGM5tLZzoqCQVmqpUhtAHtquwyNRXXgFv82AZYDxMNrrudUmwZsgvj",
  "key31": "2PgzKi3HBmfacmrDU5yizG9RhcfaHyRtv5KXghMxLNzZfXEYNRBdvqXpncPpmLtEnwbWNCqwYNL99s2fKf37Dfaw",
  "key32": "2XHDg5Zp812qHjdhLkaE2Kzj8xrxKgerj8PQdsqr9JLeQuQsRRCxABabR6fspu5S4MAVRDZJGwqXEHLkD39dEotH",
  "key33": "4hB4FH4yKEHEhfyjaHWCt2FRciEAPaoMUhKgDUuKGBLzFv9qqrvu1DEq4NJuQvZ9cb1mXbXWpLHscctMRRoMDDgE",
  "key34": "47oqa4jaqTxbYMmJWFaZP9MyBrQ2dcRURDXQqBknbdRTtV7tvU8DXLhambuw7YFMMH55KgVD7sQhpz8qPMLCzqp9",
  "key35": "Lz6SPDVCNRUuksh5us5Y5Re5bN7j876pdp8pdZAGDicgTcpxY6e6Qp3nfQKq88rLfMhFWPtWNkRTTgXL4R7rkvi",
  "key36": "5ZHKdRWfVMjPnyr7bAd2q7zkJVb1kBLrqUqgEuf9PMUppWX53R55isY4npqy7Nq3FfxsHwykfMTeqkH6aY5UZo7k",
  "key37": "KftBvb2hxkFvKCWx3xmC76CmHMPy7pqbYUnuuUTGpQme6135MR7d7syLotVhDoZKg3oyyHAcXJkFDE3DZY4omL6",
  "key38": "3iRMZaxHo8zmAsUzwKhTE94wuoFYdvbgMqoiwUxEq2AiXc7UdrR48CL9SbqQwaeuzEJE8WoThDvXULFtiAMaUESR",
  "key39": "3avw9BfzXu18nNNdxsg7ra8tWtc9JJJDEF3swX52d7w7RXbGxDcx9jkCqjNEeGMh8W7eLYdV4Xvr2cW2WsRfCpxn",
  "key40": "tqnZhut8mKBFDyKuefHKxQf2Me43RafiTUtTRVq8XBNa3fx3hMJoLaiwsQ7hrtahg4ui5UdCEArKt3Ef5AwB2rb",
  "key41": "5v2vVNEJFJfHPfHGSbicgQv5or9DmiJwLzVHZwCCLk4mPaFpBM1x4GaMAvkuqrJ3iYiRkwyKMH1WHTCJuPNTKaEv",
  "key42": "4vfcCnk5hac141YK1wJczuLMYS4qAe54HJ9qKoX17FpS6qfSpAQG1YoETMEWMy7cKw4c8QM1VaUyCrTWci4qAobv",
  "key43": "4e11CVJLfjj5nG2T9UjbJvhLikfPpcSaQzcTZsM6FS1swQYguAaoRjKcusrP1bU8m7caS1h9gX6xFqc96E6QWJuS",
  "key44": "4WJf13p7fxpajW47rkoYPk6GRv1nw7c4imXd4Fba5DbZKeEvZV48XnMy25gYxmnMyPuSyHiZng2fRBBHajbz2B1T",
  "key45": "3skRhvACdBVZqVrADnt12Bxebfsep9iWzqp6FJqFQEfDCsGpP5tQK7gAwbgukCC2K4dqqpgmNwRM3ajeu8jnDxuL"
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
