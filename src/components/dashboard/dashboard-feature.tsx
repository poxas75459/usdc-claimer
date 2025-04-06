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
    "5W1kpCdysgAbPECTRJnPYnkyYiFNBvRCqBbuwiEvDmSh3bnhasoYQgD1LhzDdbzp9gqvSYRuFiczdbUpgdjfHhCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vS4dkgCY2efbTJ6dNyEafbJFdCQoTnMUu4mJexgv4qAcEvoUH6vSZdSUmRuUY4cxWB2ioL5yJyNhpxxkCZktr6E",
  "key1": "3B8A9qALhPhboz9TKqj4wfzRG7Kk3hHPJX3yuwaBTDLxwZnnEMQfWcsxehjeorKBn5odjvBvDUVEAvqxq11Y7HEV",
  "key2": "4yJEkpJALrQ5SbwR4SsAjqwQQZd9QvoLtjWEPvE2v9NCKv8JAXMXTNRndrFKkG4XpgeWj1jeHS6ZYjSGim2siaeR",
  "key3": "5mWfZQw7YiMybvWF9TrkRyaC4Q5iqyvoJMmARAE84tRka7DCAiM188Q9RpywidKTyDhtBE28EjkcUJmFBzgto4PL",
  "key4": "2MZAdW4ZYXLNWhf9bYqreJc4u2HhnM1RiwjwmAfstA7UpF3aCGaRLyarHDqGxaHYsNx1PUFyiBWfUYt3xqtLk8yi",
  "key5": "5uTkjXaKnc5mLrGQitZsatg1zCaqfaW2sSd3xzKnX67r4JGpQSPGeL1BTz6UXdZfxGQVJeg8T2nNR3pZr8iYZETa",
  "key6": "5eAZ18NsvvKDV9eQ5cKKtueudeWeFXFKcPwpmEMVAsjxNy7CHU1vyhbJyQ9S7YkiTp3jhWU3DSHN4djkWEHdvn1c",
  "key7": "4LrKNBcx7dWYaSD1CCbgUQzR1Dt33WMg2kee3XUMgkGKRBgyfFc5oFwx7w1FprmfL9oMvLH8WCyi2a72EbzX9qGm",
  "key8": "2csw75gcYbxgRG4xRwtd9bQbSTpkoqQU7GBxSvAEtBorfNN88cRx4m8MYHn7DS6nUmKLJrH1jp76EgT6EpKrF6wo",
  "key9": "2kVnCouNoJaKHdw4avLswnhUK1MBY89FVGhCrdxt9S3FKwVd5giifG9dLt5wgLcTUjNpJLAnZQ1t4AvURJmhS57",
  "key10": "317KbjLimPn6b8JQnYjVTnuRHvLji45Ysg8eyj8Aq1mNQvregYpadogLQiG76M6ZA38inMEy5FCwKUBC2bHNjQKD",
  "key11": "28bM9NTYjkByWmQnnQj9Xr4RER8aR1TfbiFmVyANAhG6Bh2sLcjKehkV7maiacReKVjZYGWY7xrWAtgm7EipWyFT",
  "key12": "38EXgTLX4rMVdyoxPgGjNVsRfJgcP1N2if1UAriXuUVULuQkJkh8YGpcRi8GrekAULeY23LkweJQswuz7G7ejYun",
  "key13": "55x2ecRZNXgLXWfT9QW16yvQDrLbck57NqhAUXPSzBcb3WzwuE9GbmcqwkGsux1BTZ5jrXjkhFi4mEAg5eGuX3qD",
  "key14": "5hiufVNQZrtk7Zdf9MoUQdBCuDSwXfSM35LYnL84Rxju9Dp5q8bZ3w6qJvkF4fLEAUKadxRMqirw4joXu3ExCHyU",
  "key15": "tsyZYG72NpYb7f5McLkRo7QhrarxTijnRMPkNzGsartqTNbRapy7i5xcDyxwzAPkSXqv3PRVF8YpF2NDqL1hvvs",
  "key16": "25wkFvY5WTtWF9QQeDmLdnUaFWWi84nE3dThvmQYYGvdPyXuugqFnN564MXAdCbvQmbqsEBAP2yTrjpAuTmipTJr",
  "key17": "3gNTJKQN3anUPwtsmhgmrjnxxBcNJgxJc4ZEqP3ek1UX5QqpiQwMxG6SdLDgBMVRDjtrCWTkgpJUtcxBy86DNLpr",
  "key18": "2Dh53eqjPK3at65Djsb7jvMBjDUzaLdDPEVMFSikbpwAEiLhhe3nZQvLGtxWWR4N5hQXALJcdUm9emyMMsTEGLcU",
  "key19": "3Pn5oo2n5XChQSy4EeSaPbYsfDm9ChRhnmHEKGmWG4HcuWBdN1kjaGUFt7aRAUNje1tKED1zs5sK2npX8WigpBCb",
  "key20": "2tzwz65iqpudYpib9LHWUtW5c6dacLE3jrigTxgidHDHnGJ7Gz9utbooxT3LiaYAr6tWaQHAaNxqeAb3EDEiY5Z5",
  "key21": "2AksnntXdSEH8JbRSqLT11qHnJWvoBGVtYpzbKKsh8vaGy5VWq2w42mmLNJZiZpbvmQhieKxxKd9pvkywJwmZ7NE",
  "key22": "2GzHKqM5nbJhSV9tMLx2osc67QWHHUVpJGVX8x7nGpAYchgApEVLbEGAUoTSL1xSpCmkBVqtFMBYGnN78K1uwYhM",
  "key23": "5p5r5m4huKoVvxertCV1jMncquB45HDnznD8iPRRv2JPjbtZHF45zzk5v9SsfTUjMT43CczTYhPpaSSWEstLzsC4",
  "key24": "5jWAhgCEM5xiXGoxNyysWAyjAXYyNCmWWbornaXD8LXcBujYKnVW6kS45VgXT64cGz1pDsPKZvQuXxG8hEu33SKw",
  "key25": "2UazrNVLxNf32SeJNbMynR3qUGqvUBAqZ7ynMzJXx3rjqvg2qBJBxSgKdSCnB7gESo7ybc2HJ4m9K2xD5khWwe3a",
  "key26": "4pY7iEnw4ThCaS5dn49eDmEX3DwSAyCr4S1nMWZoSRmYBTKB7StEfShQHUWwkrN7Um8yeKrzfGUNqHT9av7uAjrY",
  "key27": "2JUgARrYJWwzftiUXgUbHJ7F3438XwJj1CYQLPBvEiA6BjUzJjD6J7m6AHW1VqTAKc4NTF4Mw8mCeHcub1DowaPA",
  "key28": "4UXBNEYaiXaBcUdu3VLaF1mQxYrTBgBfKBcRiimmgRH7Rgdvt551HcwEuzyt1jz6viNKQqvzM6L3Skj5XuJrDduv",
  "key29": "4x66Kgf2FAzmQpKymhNm9kdEhDNV9wg2eWsx3ZA61TvSfvXmiBz3LwWKzuM7qzf6EXpKebMESxgDN1NZtJowYnQs",
  "key30": "54uoBVs1MJgvmbNtBiroGnY3z2qwCUjEKNuqzg3ZHJZsc1FBVgG3FD7pfmjZitFyHSquuP7Uf4o6WmsvQ7PLpRV"
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
