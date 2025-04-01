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
    "VdewR3DtwYsCuY2uVUvTZnUKWyu217wJpSNBvUpRRXAHP32te7wtWJgRQpy23xFgRPv5A9UTMQU8vJKki4xfYuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaL8SHGYhUHW2hRpaLAUeswjyRS2ndpkJmETSpKS8xk7tqujwFcx1AhLwXzZ1J8cC9VPaipXGwn5qqrCDHQZfyQ",
  "key1": "5CdxXJ3V8e9SewV1DYNySVtpjJFVdZ81bVsTTs7YyB4nksfkSav31BTExPFXeSu6yAGUZcS5SsqJ3xriLHFYjqwu",
  "key2": "HyUjardJF7aysK2wKmWRbEaiAfN4v37PCB6fG4rMQKgabDRRDBYzVz7GxJTePz4Dzg34q3T86WyYnDVWNq4F9Lo",
  "key3": "26EcXqKRrZmWwTMQH6Y1dC8sd1gYJb6oKVCYDsoHXAz8abKg3oEibNuubKS4prYjD2Cj4v6iZJ6kNQXnK5yK7wQx",
  "key4": "4UBRaRo3i7S1GBgTPNRVJwinpMbHRVxxSWjksjzAQ1KReg6NAxM1ASrjEytXe5r6vHsyvmdH6wj3S3UgnBTDCaBZ",
  "key5": "M6WvhFvBed7AqZEesWUTXVmmBR13xDZ6dqxKukhD2aDqSEibyG3afVUkioekPyrTjXE66cQw3sMLbhSQ6seL8b2",
  "key6": "Pqzr3VgpiwdKnoXCmEpbkACf6g5ATBgLsMqczC6XLhJYuCr7zAgTLyPAE8jM4DK7K7ghjzn45boYnApzwQHFoj1",
  "key7": "4tn2zcraWqXX856gCdtDq6go21z4gMRfxsVPf9cXGN3suwobXrtZXPPF6GyiK3rCrX524BwpksXgvV1Sn5UAXqRe",
  "key8": "LxqFMBZpQgDyuHxFr7Nj25YsoeW6jZ2eRe6bHKAnyu6XvR4Ku8VYebbxKRkyHebX323NBBZyjCjBnECGdV76xZp",
  "key9": "2nFwpaw6FXCxqeyZ7m6WGh3ei8bXfv7N63eC8Rk3s4ypN587sYhCN5ktNTNJocJyJx8fYHGMK1Bu7huZn342XHZK",
  "key10": "4Yp3UbDA8RnrnMavd3KXZi9Rawf6MLNDccYrthDMspVQFosv7GGh3B4xbqRYJiyjM6n6DoJjGvUx9oy846uDGrKz",
  "key11": "9hdGaStxgTWMihZqpj33rq17M6KnBUUW4cAofXJTknZ5RF5ZS9zVb4V2qynZML2VWTHMUPQdUSQeay6VUHwrFyp",
  "key12": "22uYQbkcc4rGiCChqJTpHtSQcWWTAQ3c6njA6unKheZWx7V5KoxYcBsk6KzYTiYKc4jd6iost6J4KU6v4kP8GAo7",
  "key13": "BB33uxRjWTgX5KLwQSpN3xuAjAX1bA56NtL9qQPKoNxHE5JiPuP9znDzXXZknfUELCbRp2dkuytBobLrVHx2jdj",
  "key14": "5GUufqH1pvT1fbovueMUer9xUpADDyNX4a9SwLaRRb2C76fQRkp7uuXMQwmn8PTX1vivfPSjSikGhgxywdx1gaLD",
  "key15": "gwEKeuA6AeJfRTnmUU3zCxXyWeX3ExARTEPam194fg2z9168YiwFDrqaY5RbQPET2bWm8KpdrywG4SmH8hJomtZ",
  "key16": "4jz8jTJW2C7zATZNFVtAMeWabrUk3ieRoNoK8zzY88SieYYPdxjuVKcBXJqttbKuSq1KQgesy7MUrjD4V2vq6tYi",
  "key17": "56HtgYHbjqQFcZSue1GkYHSHv4Uq4SvxSLFpSvX1yVTpA3FyBNxRgscMhWtds8heL4HjFvKeGDxGdwdGjiCDrB4k",
  "key18": "5RQkmVrU6p6RBNU4wkNYyJkz3MyigBaUkF2V2tgPu5DYgKrAwe8WzeMZ6NMMRMHDx7z8HigvmD2Bu4PkJrMDnrmR",
  "key19": "4wfdoxSit5Kn4kJtNEd8Dew7Xwzb2qpCmdTfZtq2LCD3cBvFRjnKW4AaLY9LUz3ZdZTa7An8en3EkTjm7fDWXUR3",
  "key20": "4V2Mw8MGc4iUDHqzJU3YcEaih47BFpkApai8sw9vZsLVLJ2LY7eR6PtrBJJE4uLAnsinf9HtN6xbAMchSRC16dAk",
  "key21": "5x58FcV3TSk97M9LZ2x5m2RCefXWxJ97txta52UJtAg1PYecRu5KYrtZ5JLFaY1PeBdNqsBV5qpxVAmnvRZdC3Yu",
  "key22": "5dxTwkFCr34HSW6u19SqTJcq3LJHXBCT5YRaq4TsUjyDa9xHBUWADVysgA6pfTSnTRP2WZKr7MMGMZ4ec35bPZok",
  "key23": "2QkFvYkatUezbosKXWbf2oqPN4pUgv7KWLBUoXnshbGvUDVPDScVzGWNyYbk5GW1xLejRaPeGHvvVPGcyc7JSLPE",
  "key24": "2WszV4Zr2nRABEYDputPzSCF7wtAUcxnA37M4LLnq5woQsZVczjDVUwgYvhXzT7KzEy1suH882nrxn37pcSPksye",
  "key25": "66UVe3udHGkYNsBwM6vuyYgQtz13DjsgyqsKJpUScMfAAg2JaYvVSmBegFifXPgdqh76pwDnwCYgKMAYdqGSnud2",
  "key26": "4u7dW7pSzR4Vfmjt2pkt86qKE8CuNT9WUJHW9TSDPJcE4gsc8Hh148ctmCB92mV68qHHKUJKpd9SxGW2fya1nhKf",
  "key27": "4ujujuGHyLTuoWHhNxWHVpzzGFiLAdRanRejpng8HjdW2XtSEfhB5xp2kg6HWJQFp7gNkth3GhGaNqTz7ujYRF66",
  "key28": "39q1xkYq2BBDZkedBrV8VNcVqaT2c3hXo1FrHy2zAvQQpVHSUrJ2fXzo6WSKJ4UTTY8weUigSQZE687oyef31Bg1",
  "key29": "9szpavSQRodWnQwyeqVsrR6Y2VccMsR57eXW1Twr2V8Eq1gAmWr8ASwfnQFXDLmx2YNYg5xNrZ3dwvRBR6Qbgsi",
  "key30": "2vTYp1vbtsn7h56spbBGqMxmyH3D3EdQ3LutYB9ogM52rG5uEkrLHsEmonBQNJgcbP4BQtrRgYTARgf8EKLhax2W",
  "key31": "5FrHhzgQPSE9BvaSZAtitGxtMJSAw15qwQ9nAJzoeRutCbt1qzgVtK8b2wQEb9gEYk7P2cdfgVhE8X4yvLwCD6Uc",
  "key32": "4JkM4QgDdB1uXn1AWsskkMbMyV2fLsELSigy7X7MCRkyQKbdkRA2LMo9TdQfA3wrwWdeJnojgZ1PrFewyWbMfWBV",
  "key33": "2aqvmKGGoth2RHMMvXUfKvC7VF76DCMuQqT8D6VRL9mJWnSh82VhXC5ZxaWD364qVNNysKvdxt1wBuyHNdPct1kC",
  "key34": "5xrANuyipcABkPn7Yjocdt357KCbPZhb4FyxyR7sfjjWrrMtRXCQEpfiyyGhfvmFkftXeX9T3k1b2C1yguUyYW78"
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
