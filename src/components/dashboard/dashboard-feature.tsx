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
    "4GfAT2qtEknXmUSkMhrZLiJU2XxyUBAWzq9ejYPvpjeSmzUemBmUmuREN656kFANvAWHRnshrJQErzEen94SDqU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNCDEMHDfjeUDCupQTThJ8o4sEeoxQivMiwntbpczVjji8eCPJCaNB2pTT9Rp7NgssCi43D6cqetd6g19Yi4zTN",
  "key1": "5Mc3KHaqLpUBdpuH2i7UTqSLfN4cXJ5dGvE2S4xZnK2CxVac18f9Zbvif28scDD8r2Nb9mqGYRXwchvaUuzBxS5g",
  "key2": "4JwBFsvwxRpEr1trkUhvX3L4vwXP6sDniakj8d8Djot7nwDmhan1rLNqSACQb4iTwScK9kF4BD3fzUoZPHhPido2",
  "key3": "dvzbzgHE7Zrd88EDsN8xsqPPHXox2tbBM8ygzyiZmyQjCacB3LyrHW4Y9NbWteBecFV1KJBVZUfgU1LiYBZQCQp",
  "key4": "25mdXwkSBL5iPagTqnVfpyDdiVYiGdjzxzh1y4s7bYjpMLNus2mXpFUncaf16fg3tif2oKkDX7mmRdQAPF8tpdS9",
  "key5": "3KDup5Bc5JagtosAgaccuSZttd5jvTHkNvCg7L2iepCyqV1C1VtaBqZrM2jMWn4jHF7q5siGus76QkUPpnk2BJL8",
  "key6": "65FBA8YY19rjEsKY5Zes95fNYRcUevNG5vNUPrn71pE9zi2zaFwwyhAbG8zYjMy9Wq8g6KTdSZZUHUP5yQELc9ZN",
  "key7": "5vnR3GvRLcYj8o84aYFCavnbyzUEotAMJfpnLUwk9y8eTRWfzypAGcbPTxypfLVJYkqjcR3GgCsaUczzbSZYe1gE",
  "key8": "4dgN7g5zFi8fZYdUEcBsZtZjRbWZG5fw1TahiUHeJEYkVNrSCeveRop7HY1bZHY5wrViWdBNGV56gbPPTt9Sko63",
  "key9": "3ap7ugvXmgciQiLxY8EhBgMSgg1GFcw1XoQVPDaFUDsbajVpXShfWUebrFAGcwQQqB5FrHonQSdW7WMhZ3L2Mu9R",
  "key10": "2BBLkuA7ppG69tK55obPpasixC3zBUCvsvEGs9UeZ54v4WjMe33btFYPZshb2QreYmGhD6kZwEmQqAYyXhnmpeHA",
  "key11": "28pvxyTZ7QuWn6TJDT6bFzatRkdqYdbFJ2TWg9JX9UQaz14uP3SAhzjkBR1CuMuG86Wutse4F8UwHLc76MKrM7R5",
  "key12": "qHF6FZNHdSJzcbitzGJMzcnZoo87upczrgizzRPvVpYe3MGUzTbGQyNiFjL7opw6XCs8TnvP7QCLfsx68y2MPmk",
  "key13": "5ytbbxozzqz2wXQyysdnScx3XfXta4CfAvEDZkMYhRDQbENMNU9z76joLUVQR73q6qskVjF2Shyzbq5VYgcQWduk",
  "key14": "iENyN78igXahuGYHvh2fMUuPx19NAxaq9emzJczZViKAF2ADJJQhaH9wuYdTLaDAkx5ytMt3PZxid1WHL9BFhsX",
  "key15": "o9ZxSFGhgME5a7SZBb92ypekEvMmhNct1EMmbJLxShB5jkLobLxCjsiNJFr2KepuxbXgVM38QYBeCMJnHTpU54k",
  "key16": "3MK1Q3R1rW5octkj4hFrMmNX4RoMf8fNARGAVYZG6AtMK1cn77FgeAM6nuFhT7u3okq4bVnKHpkRTrwrsT5wGZQ8",
  "key17": "3jrTV45n1DLbFkZ7PsCW4g7c9R4MK86wuGFpzp9QnxZHqBcYr5gtuTLNEQDdFGCqCyymy8tvtDvDG4XigBhzShPK",
  "key18": "5JiHcGCnKxfXt7F4KHH2f7bEE2soepZk4z2NtvrgHNoyYLSdPCJSFV3B1kRSd8kLBLN82c3bY2BuWitLFGBEWkwg",
  "key19": "3QnqSJ1hJfbyYBTDxadtW3WyasMtjQ7vRtpwqSdraAKvdr6CAxNsJWsBVYNaJTWtHawxFc2WJHhgMCMqMfJmQ56v",
  "key20": "2ksPzx3dW3XaE8PCpe3NhWMv4sbadobDyZnDzp7A74cesEQfQ7pjpEZLyqyiDtpMC2PZHqo8d69f8g2vMH3saQvm",
  "key21": "43eLTmwfKmnbWVWDv6ch8P1re5AvkwMJhEiA3kXrARWNcVzAY4aRHGr3UYLyqmLBdYsWNUbjcK8JaNFY9oesomY3",
  "key22": "4bGcGEKrhesyvAmuW93Ec5bHRecQHyXMCSDraTekCwN2PX57k8ZMd5zrYx37o2yQBQRaKmnjFkW4erAfWaxFjrNi",
  "key23": "4C4SFK6GzLRnDAnczgSMQe4fAqomgQJ3LchsGRaHJ2paL1PgtVr1vy2q9Ei8C2uGGCDVukcimNnLysjmezbSiEEg",
  "key24": "EM4MGy1WsgUNiNcEA42j1HXJ7QGmpGzssbwmZQpYjvbiHXhTK8sXCux1UNjLViKq1PS745XFba5x75nQBRiaBmm",
  "key25": "28SHcr4S1bCZMR6nkhkziAmENujkK1WS5P6iHM6rXgBfJfej2a7jaj2bF6vA44zEPFq3MQErCoVEviAMHjtu9jBh",
  "key26": "5B6D41JEzs7gb4mqy7gkUqgoQUovDvGUyq6mXDARFCcwiQGFcaTW8YQT5JsAY7JhRBGdTamSkMjXcchs5z8Vmbty",
  "key27": "4uHYSSeoiHuin9FbJC7pBoQcU51wdKMCghrgiZzvjP1UzYwNbN4WYtrAFcVhfweE7WaCq89MuTFFgaLL9bh1pvCb",
  "key28": "66pa6oDAoGsUZCuehawiJbchVvMSQwkzRN2dmo8xA3uWzwzBe7GXRtTdCpMjMrZRo2LTpwKuVec4NDUtGzDKFC3i",
  "key29": "LSpvWjW26ipTZjR75XkHJx7eCs3tTgHEnUSvzzF74dC7ySZHuuw3c6d49WzNcj59tsg7scNzTp5nHWoEkezcsZz",
  "key30": "5KdaKpHS6xYC8MEcmPh9KacSipcGBBabPKogy57iGUGEdKkacYvUUvtWDyUNBGpxcpX4XmhTKss2mLfGPAQvq8w9",
  "key31": "53Uw9LMHdBCBWGZPRGTWKtNJTkBVqMVe4nHaes2P2uPb9SyREnts9Msu9jTeBrCZJoQXbsD2PBza3UHTqWS5QNP5",
  "key32": "4eMUyD9a18do2p5MirDmh6bkroJABnKioKCkSdijWaWHtuKXajaqEQd9KSDrMQymcCtN6WGTsCJTcrnSgPXKXY3a",
  "key33": "4cCT219K6QgHzdTnUk8ynkrZWVKQWHQp9dZMPrqfMnc7Zrtisqhrp7duHPDBUR6n9m3HSNBnC1hWLbgKYuMaVxij",
  "key34": "2EZHJHXvEBXx8gTPM6khv9mAwmsERSLU8roGXm1kRQxYiigggUKYnAxnrKHahCiHgPujuqfR7QJsPRhb5JJ36bco",
  "key35": "5sDsnLHfvqz5GYgyQajFkMW4BL9CgNufmKyrXLoDSEjGff2JpLbKeSRWfQZofSaZckhuzp9AAMbW1YGC3WjQdivT",
  "key36": "3HP8QW8CZp5GvDvRV7aVdqEZ5ZU1x6rD7Q96zUQrwPGfixReTfxj1RQKFepLKEBMXo4T8Ts4NT4yxJt7v1mxzm9R",
  "key37": "4cniLFyEYSK9Kmi72Feo2E9CifYVFsbgyWLvjCivgx8mwXhZmxJ9Ti1GUMqtwLTyB4HkKVwSrzAoqc5oc3jXH8sv"
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
