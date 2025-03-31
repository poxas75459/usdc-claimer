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
    "4zRDLQo4p9gwMjgcLmb3Jh5YghwkHaVx7Tqwm5nCMaMr3a3AphBiznfAL5wXbFCPGw13mc1V3KkurP76EaXKpQRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MNCkBB7jv2bfQwPyi585HDLT2zxDXwcEhFnnBgBHnobJLTjEdDvnuoPxcqMTmN8NqqtrXKpfdtieFeQNyJivzx",
  "key1": "3CDc8kFpiPch2rUs7G3jLxw9nNteTqKGpqL5ZGJRv5atDBY8eiZT1DkgvNLBF7DYpNuTtbDPsC8ehnsAUyaDEdwF",
  "key2": "3FCWAoaEUrakUuV1irZarqL4ZbQuP2F4QKEcY61VzJFTXQuan3xLtncwqJRe8CLiQJ6Tach1TpTBMb9epUpSZjpu",
  "key3": "csQfLFNBJmvHUuBRw4Sz1DHiN9XyUGyHM7G3PYWXFpYLi3GUPHPEutmcnL8VYYtkm1sKkxcjkGLm75X8czo43Kr",
  "key4": "KMzwtGozi6Vx1tfYtTwX2AHLPNjPaa9D4mUBqazJZdXTjUCpZBwJh4eiK6VTMPxtXMNuvnoKNb9cA3DzB3aHRBH",
  "key5": "4QxyAhqJYfJKWaABtTSsmLASaJ286pai7YzTy6gshtxrUcTcwn4J87WTwVXgJfVMUY3xx86kcEDff1Pd7EgUAhFQ",
  "key6": "2rcHBTrb7Lf25y6rJfXXwxWfCg8euxrhLRKbYzTGdCazrn2g4PH3fdf6ZP4sfsRvg1h9aaAK9ZgwrKfMHawox215",
  "key7": "3G34yqr1htrwHCbMg2RPVzhBcog3sdRef45ZbXqWSj5GdxVQ66jHZTgr95qcP4LuffaLa6cR7dv4x1FUuNrfF33p",
  "key8": "GHfm4J8UDdZr6FTa4EYStdTMbw195HU7tikbABxL6R9NJWLqecZ1hh6AKnbLNZx3vFJm3T7xDgAKF8v9bPgdkRj",
  "key9": "HFMxrZMzfjccproRY5a4e7Jt6BTeQEq9zt1i5Bd67uYg5AwZo377RtRD8bs8SC1C8ZgLTZdZmesGJRkqGaMVHBr",
  "key10": "2DVixa6ii9ZR4eA9gLPkUg5L5CazNucLN7whXVG7Z8E4QY2AVUc1ZK3U4i7HVChyBnPyGUdK9BjyRcFT3iGMvGCt",
  "key11": "3xu4uvaN9fPAr8zn9xf7xAVStVTPAj82RCzaoEWaNpP5E2NopM77Kab4vjfAJ5a6ZdVU9BPum7YHYFGRm6in1ySZ",
  "key12": "41FYFryzUAkN5pCWQEiJJ2Cfu9B4sj14kJxfYRqfuiRiirSkVBkbcoY57x9KwTckm1jBZ8XnMFF75uGNB3h9D2Um",
  "key13": "3hXao1gFuWqQmWYiuEoF4uNejfuRfkaHXXPqT31D1La131Y83TvBqPRMW1rdzeQec32uYR4w9Aiew5VYj6rnWS9L",
  "key14": "3UyQPFpQKLLj3QXKMNE6Sy1By6upnJNheuQXg7Xu9CuYrSrVT2onCMsURgokcS8AaVQLgYPLgks51StovFt2tGuB",
  "key15": "3tLg5gDniYr39mj6K4nHqwqVVJ5FdipDvs3ND4e9uMTeJfyYATCLyptJcWnQsbeYFZpWSnuWusJGRUuvqJXgGxgN",
  "key16": "4vB3iJfEhX94ZwYrmP3BQuDPETg4uiq76Vc8DnYvxCgvxUx3oCd2BtipLtX3iFUEra3PzhzMxQk5tzvFwJMtvaDc",
  "key17": "k6Hje8c7q8rEhc1a1Jf44ZRG91NchNozM5JKLDTWBZvYBje6JooVBKsPA3iQYcVxuVZaCL5SXoQo12F5pBmKiTX",
  "key18": "5yx7PMe3NeYPeVgqJPRZ1tCz3r1nBdygzCtVP2d3CpYNxTme9GiFYk4nF3tk5dg6o3pxE3LzKYCuyHyt7zNfEpLg",
  "key19": "4aomRoAQG4BdE2kg2WQU8tGnFrx8jhwoi4VHZTs8Mr2Mtsdvrq3oqjKEmHg7md3VdBv5Bj7u4KbS2d4c9uU2mrh6",
  "key20": "5ezjeQWwCkfoVv4B5qKhtazeTQ2DJubh4M83cCFVWJUTXYAjzXdE9tyXzJyNLNXXedvkxSyqXbPcxuUs7z385TXw",
  "key21": "5uPXPFVqrhPzokonNFWrvhHokX6No3JZ8idvcaTcuL4Se2e9wDeiRZL1QLovAqBAyCg2xDcm2iVtAvas7agkuy3A",
  "key22": "35xDaAVnNPB7m31j4rpR3xrZJdCcGBn2P2b2UdSi88aDrWdum2WJuBirj8E7m9iCpF61MZcXKUJa67cNoaVDxr9s",
  "key23": "3i3gDRFDqZPqWrPsMrp7QK1vzAkZnJwBQVEoYETC62aLmUm3dnTcpvhvDwbQRk3jaQxWReqJsL9ZascLGQ74AfjY",
  "key24": "3MQqxqYJ6D9G12SGyU5EYR3qSixCQ5Xtj7FymKP8zJHhQ9PejZ58VvCfccKA3DZCHSg9wpYiLSwcPtWRVW2iYTyJ",
  "key25": "2hEXWyeQrhkjEvUb91mQdvihp8mYNhqnnLaHeF2dccDjqgoz7amA7zZD2zSCaCCCyQiMUB6PbWCZ8WC9yLDnP8rU",
  "key26": "25w53xLNcLYTfMPQDU6JMwUAmuHMYtVuqAQVT9Bpnj3dpVRkf56ynV8eoKAXbEr5gZyNBCniGLneE45iN6TNe8U5",
  "key27": "3WGmoPmoPmwM9WV21H318KbVZ6LrjCBNE9tUxLEgwoJkunVVk1zGWd1nTqAsUDgn37PzVr1zjfCj9f73Ren2cLp9",
  "key28": "5rDQPsG5Dg8Q9pukz1Dymn3qr9ypRcSoybaae4K2TKQcvmBUcF6jZqAfBdbEykyxDVJNFhLz7Gs9qD2cHTheodo2",
  "key29": "5uiaMhhqR17cXUenCyY4Labe1PLF8DBTbQZujDW6tE6sepq25i6YJKyVgFRUbSeuwazFhY79CNodbhmpE37THUoU",
  "key30": "4u5nZtKFW6AYmvr1aoQUaHbTVoPTEjSxYHyk6eGMeyWAvCGTx9RaJNfdg8hxYaE7w3ZdLdGbDmzHPZ7joT2b7owr",
  "key31": "2xSxxY7wN3ftMBjN9zxqxPrcDjXW2HZv8EULuXEh9MogZzcxi1XzAYokWPTXVpHa2BZD1Sx8ewWhQmqbdRvBQhBJ",
  "key32": "32ZvPKnFc4KTTNnB5mivHkPZox8sGpMK3ngCX4rGfnc7wRNe6ahCpgK5Q7zuYHr4wpdNpm3C4khqiWe5mECj45oN",
  "key33": "3AijDePmcPVyuTULpGMLhLowLkPghVcGYJpbLHqVqhhHcurCV9u1tCxuab5ELgDXD8MvdgPmMyeevb62FCBWKXme",
  "key34": "2PfMhry48Gv2iPSFsmM5Uo3Fg2191XHhvqaQtih58oN3XKAL6oBP68ntXWP9u92RWnkDzmnTCnqNGSuRTjR5PQ2e"
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
