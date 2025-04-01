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
    "akj39xPsx3KTCJj2U1kzAE5r3rs6hLB1fUGTAVouzq31afhiCYyNCU4uxqJkdJoGKbMMgzHRK9k9GxPN4hrNGeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612AUFBoCr1FTFr6Utb4JWYqjUHWgZebRy9cTHZeN2VMinQnG6R2R8NAEYkX27GFRziCZwm7hiFrye23eq5vNXxh",
  "key1": "4tEyJCDh3xhwdQHjg4hasjkLgA1Hbg5iJCyGbahaBgnWgnpsj8wtVi8WR5kGpG9x1aLtvNPrKm8uoxM2w86gNzEQ",
  "key2": "4ST2HyYjXnExhjpTRSQFQ2haTtvGxLsHgf86XkQy42EXgPLEuaXSebTU5iyViEbhK3Z9xPssW7RY3dLPjCotg7bS",
  "key3": "i9YfGTS3AhJMmLfj2sXC6sSiyfLmEPY4KboWNxLZM16oZ5z569gbfjPxPeBceNZ7v3Z5X9RdD6r94xbMa8QucYM",
  "key4": "bJRuWeU2UXHiR1g8p6ZLW8ko4ySYmxEFz4mqyCyqtbw9oQARX6Laf6N6TX7grfAWxaPSDejgByCsGRrHG9NnCCf",
  "key5": "2N3A2MgnDEcDUcwWDf4ePqvQTefxXqXw6qNnx8vQzbRmtCAii2qKrfE2SFhWM1zjeAg3RHCJFWP1M89Yt2ZdkPKU",
  "key6": "5DPcG7ik2MVYGfhME24U4Gj4zwanbXG1N5f29aGAWkYdosEoaXP73QmiHzXm6XzXVzub883QbBHMThpewWAJHh7d",
  "key7": "P1dEGugkPFMtFCUULXZZQqcUXSyGKDF9y9A2yVthM7xQe2ooY7vuqmZuomZGsSaGNdded6KrCWk7GpQcCwWys1U",
  "key8": "aEPzjWB4BVtsF3hs9QKsRPinYjG6LnTx3Edzv6p1BipC7WqkW8Ja8Pu3fcd9Ttd4eKmWT3sqnA8EqaRyvfzhspM",
  "key9": "3ZYjk3AtKM5XUqqAnjCbBq4Stdz4Ub6rkrpt7hCpT3VCdXYZUFZbKYYxqKSeSvtaK8DoWnxniyCZiH6BZdyGRywx",
  "key10": "2pBvirPWvcXQVAgkQchjPCSxQwdxqFKvv6NEXhAjV7eb3ZLYSqq7psPewt946DahHnzgSKqbU83TSrAz723h2eyu",
  "key11": "53mEivKfjLXYA9Aj29c5WHNtgBgnesZgxX5t9Ywb911exYmFqEW4CCbLmuU7nwg8dXN8KWQ8kVxNwSLkpxhYpJ5",
  "key12": "3YvGSabnNBr2LkE9ciuNcXB9LMTiLTZAkcSP3FAep1CDpkdfv3wbyWibzSd2fyBj8v4bHMrnkEn5ypiWLja7M88H",
  "key13": "2XsMXz4zpHpeJpHCPQx5uKqcrnLP2GzzXM4VnPbeHMB9iTuZ76PpLzejKhj3Ep2sQe5z6jm8CTHrrYEgumgvueFj",
  "key14": "QRab1SV1cwPvi4oKpxQtgky9wfFoUZM54E7yyZ9z8NubMcYqRWmmhTAtPmC7buUsR5K47q7o7jUxe6LwGfrDNF1",
  "key15": "4eovV2tzzwjkzrdat1Vt3GuJ1y9diemog22jHhwZRwxc2BGwzxLNB7n5zL85J7MkWQyYRfVvRqazNyNAE8TXfTH7",
  "key16": "543ik4rUM4HjVvUpGj1BkZuMVNvhoFhH2KQuEeWnyVRNS3EW1STvRrbizpoUyU2c7RpBi8SbiWqZ5v5Av29hGZ1B",
  "key17": "4yEaWexw3HcCM2qZ2dgtKbyQNc58QYSQzFh4C8T7ihXSD3DBm1D4RjFXYq6nzCvprha1C8hquej38MHUt4qSGTQ7",
  "key18": "2KRm6b5xpFwCBPXZBDG8j2qz1GsCgT9wXgWWqtCiPUQj2YZE3ABKRUBpntqv2TqC9FGLyMxKq5Xfj38shXQn7uQM",
  "key19": "3JMgMkNNKWQhW7fQotrY1D8LK5EUh1snSvbz7H9o1qdfy8EWBFgzqb4Yh7Fs9YdNo5tqYHiLwLD5nNTVsAfck1Lk",
  "key20": "2GMrZYfcAN1rHV5gc5E5SmGLa9U5B1aE4AwY8UcMUdJaSBNq9rsJV3eby6GQYbtYwvkhrM8pS24sxHTCNEwnyhzX",
  "key21": "5zTdPKMqkah4Dtg1scWQwRa4UmT7xiV17B5bY8qafHJP21eVVdpWBXs8rcFQYxsXKv8Yeniz6wniF8rhDLH9VBMZ",
  "key22": "3bF2yvPVXNaGmxAnBFhGSCrpAfdjCm2hXScPgiL186siaLVxfJVE5ZRsP7MbGPSPkP5LjQXoTUrMsUfqnhyk5fyR",
  "key23": "2tdvJKFP8fy3RjEsajo4Uj6JDha2iXtj4kp8VPv6Byt42GhurACtadYiofsvPx9WDKjVTZTiP2RXvguLSdwusJ5a",
  "key24": "2BTrbLfwPN3ob4ikAc24RQQ8hgaxvxPnkAWcntacRqkx2muQEn82b1wMZrKWS92cJL8uPm2ERejrbySZJhnRT3Ms",
  "key25": "4jMxKjqVpz17KXL1KySkKN5K3GJH9w65XipKw6XUx6rK21c5wCmJgiYL3cXQzEPzBuVhKP3BZ2Mz7kXDv5YPCzF1"
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
