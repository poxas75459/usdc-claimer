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
    "5JDxQxVi5Z7XR5neyzVLC3ZmZozqT1W9qcFJvTYkiLH3jwx6mAEW8UcWmEFvfEHUvrzcsEP9iHbTR78KFZCwJjnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPJXc3JCQ53VGKTTvLqAi9nWUWHiD6772UcDuBPX9yAkWmtzij7mGCjxKbMF3LGJSVWPb1B73odqbzkrKtQAAV",
  "key1": "5eFpRyeiLHoWwxFFwDM83Exo7UTARndsefdpiGgNzghYRhd9J2Hy1VCUaXCWusiXtCw1r2GVxgqsJMrAroTQcNz",
  "key2": "4f7GkjRs8frqWsvfjcLEXuTByQW6DSs1Ec5rbmEqqre1yNccubmEbomBJRi8zoDsrurWdzCj3i4xHjt1kaR19MfQ",
  "key3": "gcY6nvgWiBYNvmMZZEAQRvLwCeh4HCYxCRPdPKnbLo5fQjqo5wiEWf8G4CgbQTPrQtujcqVvr2L4PUTybRP2qW6",
  "key4": "5YFkh9aWMiVXYRzmukKbQks1MBWZWCsrjSgjEBHAcXFghBnn7KELWtGwTTWSmq3vGqCxArx585sdwrqcNcYvSecT",
  "key5": "4gd3GXerh7JTgNMd2DFoEREdKfe1amoJZaseKid4u9FZFMB2tCmVeG4ezmb3MFiCjEcnJjzjdPQbPyhMiYWcPW8f",
  "key6": "2qydvxCUgBBzBdBwSyoGdrV693qc7i6Nn3BozvCBkLqphhu1Js52AAST6LzGVpqQzGnFpyzuYbanZ5Sp8TSd6PZX",
  "key7": "aSf7bHSd5cVVAKQ7VHKC3aVTEKDXwvf5XjU2F4aBzghnsLsjyEffRjH6SAZdpwzADop13h8az3EPZbCxpGVjW4Y",
  "key8": "Mk32YiPwgxQJmwmXbfbGAQGe5V7C6Dzgo2LTufq2Hr87uvtyKQmWNUunwTpFNoCQrYYyUmpWmufBiacbKbjGfnD",
  "key9": "5JC29xY4KTnM92mb9SVBZ6u1SGavkXAFuBoA8NHhWDnkcYpW5HHvpFpgcxVtVvG3KCxochSkeQ8kfLDZEyUqAhvV",
  "key10": "2kZpydTMf7bkFpnQq9HzsX8boNwNVLVoTwnfZW14bnJSrjjqTwt2tHHBq7QwHfdkNFe4KpnNdtxkNpA5YHfKEDdx",
  "key11": "3eAkeY6cWwuLzR2QdjCBpzhVwTGWqvvCeQb98eXMbUxED29RFUfUnVqrt6zeeGKQ7LAphrqQLsTZ82syxrv4PDrd",
  "key12": "2YXzVGoRVMEfB7ejwBkv4uoEMsndAaDL7vxJ5AGKLBUMyokLe9YEJBiehtEuAynJ5dNaeNKsazooSNmBUTT8oYP5",
  "key13": "CNigoarxCmfWYZx4xEzF2d7u78ZRpf2vxZwNuBmvu2bUTqsxVDiPreGGTyDR1iYqTMN9HPz8o5yY7JXdGar66dU",
  "key14": "2cHJVW2XaeuToWSKTWxrmoGQVj7rd2rKeJp39KKhn7BNdNFyuo4RHmFpdh5aWUeT8wsF1TgieBER3qu5SyiQdvS2",
  "key15": "5rzxVqMXcUzGTxGJwZcsf1gcHGKELdi6FvC2rDZfBPYiTcLiiaFc6wBRa2xrDC7p7EZi4JkJrNy5aBJUwN3Kirmv",
  "key16": "4JsiLPyitMpbMr6Lw1MvtxtNxADPNwX4Sj6nwX3uoUgShSJ4DNZfwATr5Ryh977UYWo2x422gYBdLbMNhLHDVX32",
  "key17": "4SYhCjgaF2CzFMCttHVEBBSAXLwGuxWzofb8BHuCU8YJgBdzxQtc7Ujjmu9EjFQTEgkqjHcRhWGygS3BLo8H3E4f",
  "key18": "2HCBcSpqHhZ3Hn9MNe47eVpYRjDYUEhCiYHKdF89UhA581exNf6ryz91TgSZ2tUVY8XygoFXhCQBkJKxniHVTafB",
  "key19": "2aDXCvC1UPR6QE2uU4LKXjub5JL6kM2zZD3pc7r8G28g17xHKN3Q7enijKKmFRkVfPQAJeZkgnExGUTkgnQ6LUx4",
  "key20": "2Ew1Wiq6dRAcLUyvdKE41e9vZW8wx4cU9KpqMUvKPhpwVuCmpvdP3cf1dE6gnPLNeH3s1AMTgW339seYutt5Ha3L",
  "key21": "4eFgJsDPw1Kb6gR9r238fV4YMrNgjVYVxZ3qSSnpuHuhFwDNd74CFkGSro87YndeDYMqNx2AJKy7xUADnoJ3kWk2",
  "key22": "54ggqA7jaBASkyTGj6qMbT9UNucoFsfXanHfEeC1RXADrvMsiYWrjoztbF9QTDt5eBb9Tznbtb62fuMPQ3484nc8",
  "key23": "26S8oY5VVT4EvGdfYprDgK7CdoEG3YYZVPPYcmFs85aPDDRUuG4dTGcE2i9t9k1kTd4GUTkNGQWEFVDEVSD3FP3M",
  "key24": "2J7owJFxMmG6DssMQeN6koeR83cUYbhtPwkG6LA1SZeff8msjSUki22NEe4gi3RJHHa81jQRbos1KsgX1EwCGJxL",
  "key25": "39cegHVVepzNKCZTk4KM9vQcZ7ZNbm5ynv7b7GHhSWV2fbEwYRzeDFJboABxgFXXoQCvhWTNrG8j76eTUriRduQR",
  "key26": "3KAuexhGeJaBhQBND3ovBWQqgvWPu9mgnS4F4fhuBgB6P6B1x14JH3hRzCsUpuk8D4ryFTy5PMo6XXimQrGvJuvG",
  "key27": "2zHuEHRZ86S9aZXmCUFdKe8YXaPksyTsFvaSd4341KhshgwBWGLu6rQvhh9VdVNck7gFHMtHTp6D9WpA4KYUVHHr",
  "key28": "2h9Uw9Vm9wtisuoEAYGV85XCSFD9zBkH3RXjy6K3VY2M5o8VrzibaxcijtF1N4aQe8bXFbT4JtGki2q7nBw6D8cs",
  "key29": "4fDYPfvjBFReQG9xi4hg4WArwupokkcPvZfmp6kZ4TP8SXhXExNZ3SZecH5aT2bNj2SktRKVmoYc3zhyD5AL6sNi",
  "key30": "63dn2HHii5Gi2RBNg5nkRDyvWRkuiEDb1JJ9EJpohxbM4NgvGLNfnTVetdWmJcEAa4ygHDUk567KJqig3xKhzWxB",
  "key31": "g1hDXQjw5W7zNoj2UJxJMvThGoKSDNPUZZnTsgZ3AjiLTBLvcVyxQCYZnqYRRMriMTWKtJufxV1bkz3LYfXTGJg"
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
