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
    "4mWa6BGDSgAGFHiqdjKb8q2gL8tHCDPsJvZx4NQ85XK3Wd3X9oeZHs4HeCj2Y8GcjMGxkkbrF8wMb4LD5Gy79bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeBF54TobZz3NdQrJCLZk5Fw3799Gjb3BLRtvV1eYTk898WmzMBWvteSF4qYBj7j7emachojMtPCGDZNnHvAhHP",
  "key1": "MKrzktmxS4EpVNASSFW21jWARzFF4C5v9mFYPsLAJ3v6qpQ7BsfHNgXJrmfawfvnDB6KFA5TQX4nn3X97M2QZh4",
  "key2": "43Zz9pRLRcjMVJjJFxwJ7Xy7NabHvmgDZLVcdETAPbzVKe1wy7oJ277QCtvQ6bYF7JSC7yih8n7Za4DMzKwdxbQJ",
  "key3": "5rDpQPn6rYRMbNjvhcLzHeqYcBnnn5tijNjmyfD61dSkRWf3ZGWwivUtSps2buogfAo5cqUpPM9mwwWXzQZ7H4zw",
  "key4": "ibcYV2nUDuKTkrjiCaiPJ6PoibKw3LpXZiaXn18MequLESkef8rV4sXC1cM4r8ndo7yQPTAT52bEgCSxUQT7MUP",
  "key5": "2C5vFvK6LJSkApLZzruKAf4LiuKVLrMTGkjuHuyLTU1g62mM68794ni2ry1HtA4kvv17eNK5W5expycYTn59WV5g",
  "key6": "418iwvQv8Zmt5pznkPv4NJuFouRHgK4QdT3kTFqJUwEP4ZtB2AiJ9GCXY17BLcqZA6ooY7uRuRz5w7HCDw4gigHW",
  "key7": "5xBzCnuZjk3ZDrYy1GXSRZXoBwMwxhuxZtjJGMQhrxy5gYDJKXWy3fncMTxhqGrQPq2PMxnAGjDfX75g4PyBYyYY",
  "key8": "3HkeYhaepYJTDYKo8yWvaNxqo1DQaVWWUzJngafAKE3trKUdNTKWyGrZGp7oEaLPaDLwHCinNVR4KThtsB1Hk1eX",
  "key9": "pBnZeSHkzSWYmTAawHLJoVsDRq3fPv79Nk72kEsFzT2gK4U49kEpyZRVWKBK7eZy5UdPd16vCMih139GHjtuBA7",
  "key10": "5JoWViAjFtuNXuBJYcY6X2gWadukm9qWCe4JAygSuoecEv6dvNDYnfP9D77vzFeBq9gTwRkeTyL8mwzvqd2NfN6i",
  "key11": "5ifVWQKUNHJhht57f13atrXsXBRc49BJZ7ozD65K7Q92tTGNJVToNz2nGzo7F8cTpeYXbPeJWWNwXkyUMxppeGjG",
  "key12": "5r5ov4wvkNeaPmtGGYxD8QFhvVyvuaqAjzn3XZNV9KuyoQ3C94Rib4qCv2Q4HFFRoX2KCKkoUH6qtu8hGQga6fdz",
  "key13": "xVXbPX42fUHs8jnQD9yPALwz7NZmKNLmpHCTUpivwPekayGKyH4WHj2mQqoyzJZVGACX2gADZJKG9jXjPodVLXQ",
  "key14": "4hxvT1QsmyZeqVUGkCQsrgREMTcubL5CAzvxu4kYJFaVJtx8Bri4uNosKpii8twgttHesKVPcnK3pfYyBjg3VWf6",
  "key15": "55PZjjDeDTaWpkUzjVNQHyj1CyntXZJakiuQhjUwexYeThQhsjD3irbK446BDyPincpT5TPxXP7F5FepRqAavoTq",
  "key16": "T5yNyXe4ppAoUaSphZF3a8hD8Fe639vs2fyAzpM1Lb8fHieY3wP1CBJRKFsmrcwQg9jXHpWLQGTiA2At4ymx4fs",
  "key17": "35AMHcvcXHibNQzRcn3srkMTrZgRFnTrMEFgpsqSmVubRwm3EPDuW8iouWT9WPpWtfKf6jo3bMyfqoK8XQV1Gfz5",
  "key18": "5TeRDAJiVFSmkBrnR4HmT5QF6LY4gHaB7A53ddk6NFA9Ttgd5Hha4XyJcGje6F9UdZR1Yt21dQXykuisT8HKgwEv",
  "key19": "2An6QvwFLqwWszhmh7Mg5oNcuU7PLPYVD2TcMd2fbT5SCzfo2gPhi5YepQcmxGzsqEjziMgLwxPBxAEF3BBnNQgB",
  "key20": "1x4bCjxUpyQV2X7jSzMJTWT2ekwHDHq4iCHsTgeooapZKrGLJSdazmHzjtmbbubjTdaLCPTVPwUYz4X6P5L3Y3J",
  "key21": "R27AehYRYa5oosN5WYAjkZqHZJs2ctkF512FGuFyL4uAN9BaZCTReVWvW6LNrS8eepfYQPboMpGtx2ewN9xymww",
  "key22": "k3DYAhs7iziRmrKsqtE2sawP4FWmQb5HnBLWhydXhbeRR9xDaeSZ9Ww9YbwbVHY6hCPgETaCQBdsJcdBpYmx3w7",
  "key23": "5WKeRCF2nig7ZwYYBuRDSvPguga6wgdRCRaJKHLdbv89HPrasSqnkBcghCWS2hsuHEUL8zYhPc7DqvsQnHbnCBc8",
  "key24": "2aSbFzm6pfYkvhezzypEr1C5ZXTViyMB2dCH2SSqNjbKhq4HceUZegvvP9Bhi3SgLfdmkf1Z7U2gmBzWCJtgrNPh",
  "key25": "4esG5HnTcR5sKenb4vgEHhGjqV3fLVZBce4TTWf1wy62xjKft4aXhNHnmLUnqgioGmj2cAnrunDjazaRCm5WgDvM",
  "key26": "3M3Ef4uxREuaAVoMa6yxiMbFpye3owzpbkoxRjcBKzxog94egzkSBGZfJh1TCHFbkWGS6a2v7UukkYrM94y8VfmX",
  "key27": "5tsmp6vuJT2QohgAosbVqzBdPh4ouVzfuMKJYo9T3ECLBHG4HpbGP1mztoE1JmnkYQUccyyRcCmG7NYA39EksHHJ",
  "key28": "29Xzfd5LXnLJas7SgrUpJh3Zb9b1scbGjEe6tCGJeNMbnm6HDSpyMzkswtAqb2B5BJgmgEiakhUHM3Vh69X9pMw8",
  "key29": "56da7FmLHc15S7CZM1n5GWh1cLj9iYSNqqQaZMiVs6hXe4cRxdxVHMJ2cqb92jFnr4Vafh26Znsvyv1UhznJotEW",
  "key30": "4WbXSNv5sJ1Y5DM9qcTSp4wNyRFsAoz2Zd3zLapnpavqkREaaDobw2xRByEKDMAyMkqJNe57UByWmoXFjjHK5NPw",
  "key31": "31yaDMCoiMBqFS39QYiB8c9nJHY4inwkGBnVPL3N79e5CN23kB2q7cLvMPwJrQ12qJhSYKFGjBJ7myabGBnjS6GF"
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
