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
    "3RmnvoJvzWdwUK1xdmfhnSsJdam3ASMj1aYpBj9xJz5GCF5w6hwk3s25Fty75aqf7AZsXfPaxhKgKYH2eGyjocf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mW5dPhBAiy9U5M9Yf3amgpSJNwjrn3urjxBdZ77eeg1drBsYNwufWhf9ngJSj2Kky8vVh8V5gBKuY48bVzqdSTz",
  "key1": "3iBcmB5o8qZJHQt48qprPPokD2x25T6c9A564bnj7rde4dA2hDS5KvCReUMVnZ8mccX3Rm4ffUWH2Y9es8W85Hkc",
  "key2": "62kryy8vm8QnK9HLYqhTVvgEa7yMdV7tYjFUJxoXP4VbejLbR1UxgKY16PjiR5au5bwnv71QuFEHQu58DjUzDKfN",
  "key3": "3Zy9La9qwRXdj9xsQC1g3Dg6LdAjnQzzRbeyWffim3h8oACW5jr6MRMrbKcFChcEd7iZWwB4QKeU4QN82nUdWFx4",
  "key4": "2CXZTAyjAx5EnwzENUPZ9evu4VhkX3iAoccLbTHCoZzQHpc5k5fNoMRfQ7XCs1K2cv6AGJ23Kac7bwXcLoy26WP9",
  "key5": "2k4T2TPnow4a8kdzJFFEriZmAvbiesMMAXjjZjuMDBgZXKdZmHVuMB1Dir5yt3iPdTCfy7BUCdKZHohsgU5dGAut",
  "key6": "Cmcta6CRDLsWtey6E25gthbMLNfEjQT7STnu8NsSDTMWfhKaR2M9T3cQZ2f2D7vXXRSL2TeUktHAjEAFp5EzY9J",
  "key7": "tSdv6v3tDLHEtsKCW3ZQNpqB9TFwfYKJvJRhfpSCEs8E5RZ2wU75rXwtaGHSczekp5vDHjKZ2K6HFRiF1EFGH9T",
  "key8": "5mQ9vaXTAFRrhGFhb7XrhoEMDQfjcfPhiuzYWBnoicUH1fEkL2jcCVAB84j3S8J5PYewkyH7a34gL3CGxv8skhRe",
  "key9": "5Hgj4vU1FTeipGm5zAvUsNdXm2Bxey3HMCp7NHQ1UdKR72qrfrH1JM4CCYBviSadLz5aGZSc6z5ouxvrDkeKvW1h",
  "key10": "2GDJZxF34uBWNapK8PL2cjkGgt8MiyKPKr2G7sNhzigch68RSTgKwz575atkqKypdiwKiAZXekAEPnEdcuSSLwPf",
  "key11": "6Y8riFpB2JfUdaN11h6nFXwpyr8f1uy9Wa4anUny4uPxe2NUoDrMKP4KD52wcLQPcV1pNmAoZeiGsJeYBVvmn6g",
  "key12": "4BBgSqSknR9r5xJCTJwbbXck9xroMatQn7qRiGZxQC5rnCgKDBV1ioB9ifPh3W2WpMhW43xatptv2ACFN3ocyJU1",
  "key13": "251CSaVpUhLfRYY3qoXnWCrQp1oXFDASarh1t6h1tbY6bc85Ao5F7HiRGBpPZbo44kXYPrbdA5QkiePh4usCvxiD",
  "key14": "XzMn2n3kD5BN8XfAmobgtx9a1K8MqksdyK7DKreBW6mhHQs8eP7t4Svsaj1nKni4tHGqXMH3otUw41745VA3Lt7",
  "key15": "5uVZsH6KNTLHxvrHuqEr9CF9pW7HxAZ1gzhaMVjrRbMx5D8T3jmqNsczJuGKLsgD4tYKN7aydidySEtX8jbxUqYw",
  "key16": "4D2AKtq57mYbb4FJjNqogE8BBBNmUh4syvyi1etFG84r7edY357jSZyyh7Zvx9EMN6KiNpNtvKaikYQgUTSuF9ZT",
  "key17": "5NcNFBPurjKCnTbjBWu5TXEniDvsFS593tNkGtfV791QxqBcXpaMcZYVVA4RekRRTmYx8puKSQsRAtvHDaH5Lrno",
  "key18": "5RxooRZP8LY3vz4W4S7vuCPvoJjozq9c528WsKsCqZ4jSrW8Ah51W4kT5179YHkByQK5LtUE2eTHGDXz8XwiUfAm",
  "key19": "3mHVtv8g2uLoahRCgTEwyG6itjVga2Q5hf9e9GCDPGpL7AuWGqsT3Jcz4e71eCfur7oVuun4f8sNSsETJRpCz3bg",
  "key20": "2saXyUVDE8nqJy1UN4fr4XSfRcHn4U6UbTbg57WYsfbQobVq4hGZMiaVcmqV2JPFuEs1XyW2Cdqd7U2EpXtCLjTK",
  "key21": "4qNHCLH1qyC85xzWExaUi9LEngcYqZ9kYJQ7D2g3jgRHZ56tPiDcFExDGzVVaknAGP9ZVU4QYtAgCnJPZHigUn6x",
  "key22": "5B2K7AsRGiaTEF1BMxfwCkJAXndi4ggV2d1hFKBY7F9S9fydikQDLzrwEZqBKYmFUZ9UZfXfyi4rym6GFbEm5LcT",
  "key23": "NwkpCZSFBSAJaEUwphAHUwvqQTaQzuMxuePXhey3H5ZCnUELYok3Yidomd2u2dvjc8PZ1CLSqAaF2Wrp4P3T8VX",
  "key24": "4miwY41QPszyzwsfosho1GC8iPchr1K16mZTwTG8QUHMV9jom9RLq9oKuRN3bv9ty4wBanYb4CkwAs47sUZXV9hg",
  "key25": "2ZxqBdDqpV8orojYh8pANiveFjxpdvsspivNbbXRWYoSkC9tV4idjEgFJdHxqVAMvmyjFVHJCRFjRb7CNaQESnzY",
  "key26": "itqcnhVFrKViYMTDFnAHsQX9UD1XShNMYb6P5K8sZp5hNjQFXV8ebZCLqNGK7L3QUFDEWjy7kLYSpBBJuCEKuB2",
  "key27": "21BiNxMsJD3t2n4BktBpTfKSFE7xQNXQYNek2X83odzUefPYodDn8WXiFyHwWx4ZCTxajo67VsvHgoj1ouQL6EMP",
  "key28": "45Z9cwwKVeDAT61CDgMfpsR16RuG2QfKr7D3prcvG6GydtKmXzJ3mLiozN3F9FPpFLEUrWw1Ta7UWK4HudTpwnR3"
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
