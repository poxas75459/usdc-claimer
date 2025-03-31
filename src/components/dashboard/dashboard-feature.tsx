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
    "Md7Bjiq3AKNH5edtQYuRMazEthdy6ejsKT8dfVgpUDhGErGnvuVzbXACvopm5mWSRXPEr8aok924WpWwt3A2i9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36VbBUHbePmkGLX3AQk982zAtdKVq9gvEW4tDt99rD7J6Si5izCHaaKuFEXjp5cVkFFDxvXh7Z1335VkgMUF8dh7",
  "key1": "3snWzK6GnC6eTpGNa1VK9m3voXxAyZUgfkrwUPGjbPDJqvm5EMNDfAxJuLmZ5M3RdaN9Cnj6LJiXNqtAgP1yLYW8",
  "key2": "akdK4eGNS6vUThaParuowuCwBRSZpJmR2v866ETHScLTBpridFkBhucZLABMesXvN5UtY8ZXRBAk6jptL8hYBK8",
  "key3": "7eXsQWc2xnbXWgQqhJTftKWpKn4jQZNHRXwVfj9mwQv7ZoKJ927SWpf4h5gcNa5Ujk1uXCv8sqNjZHokx6kvVR6",
  "key4": "XkzqEGEg9it1ZaMJoszqsjCDSWmPcKFmCGPaEUaiGzVvj4ZJ5sHPHaHr8iftZeGUXhq9k96b1VsdAnK2nYzFgzK",
  "key5": "5SAUW87KgbVHE8EUgNHBYRfgrBgAGNxmccoqk5esiVu77rvMB5vrDJpKdfA4EBpsht2nYPS9m2UKbzw88iymNpzC",
  "key6": "uRrrJK7r1pBRNUgauzwKNU3KvVdu8JnY7x5SZ9Rgysn4knMnFnZQ6QTK3kjycdBEdQHUWg3haT8xn6G2zzqccyZ",
  "key7": "sxXoQ9mH8u15CRZdivQPmpXLXHZPpRNb7YSCoQzgbgRbQdVzFSuYruEqSBaPHu6218nh3UBzo4smWMFagWeewUY",
  "key8": "5QjJ3eWyvVCr8AFifmp1ydjFmLqpydsnanGmAbc1kBRFiHTsNKRJJi8d8XPWYqriF41X4NQS7n5sbUmcZ3LfThkk",
  "key9": "2oWBETHC3d5zwsdeuDjeef8UWxarg3R6W9uME3ewD82GdUPD73ov1erDLgy8bjYiXu2W5jKGbKMAyuJANfZnxB3y",
  "key10": "Aty7AKtsVak2RQrxpLwYA8xEWqmojCgVfBjDRBEW2A3wsWmUB4ZdosKFEzeCxhSwGpVQbj6yoyhuMMco5NGcC4z",
  "key11": "LFk4RNBiUaZZM5TnSAnhZnBTxVUJMd6JDmaSzwD4WM7W4hH8QPBmL4xufysiEMg2KRWr3Sn1uwsNpCViaNbj67h",
  "key12": "63HKQTf6AhuGJYbymgzC9emaTBJbgwPxK7ETGaG7f928X1tQSfjSC8evgNpRXBDtYEqFTBZgiZHX33rLPZDXcjDX",
  "key13": "4LKpc3feMa9wGSY5mj3gahwcMi28KfNsXGobzW3vATDBhfusXQoZpW8E2M2mHCHaGcRv5J6iFvkkgoY9pALUQujc",
  "key14": "5E2JZAUqpTPULNTPSbUeuPKHcKR7ePrpm16ydcgSfK9qh5b9qH95DSawX6E8weJ1o6D4KtbR9Pv627BMEDgzU82a",
  "key15": "yzfXcufaQ35fCFDfJa5xHrpfm4PMiwdFU7wgMwsBN8yec4fWgGWKeZdxLvP7Ys1MsVRo8m5C54EUvC52Yiufsbx",
  "key16": "3obG75vHxUndtinaMDppkSJN5uTxrQDVKQy4vfwyfWL6vrULEuNhvmM1Fr15RfmS182TFXExxkKGwbprorhkvtn7",
  "key17": "2x5Mi1X4ejNpME1H7rGuVwni5GuT4fYVQsnyG6eesKKGocMkzbh253eFP9S878YoDuZY9Kn3f7YviYkKKwJTvyw9",
  "key18": "5nFzZemX1CKj9abME735XX2r7AhMs5LH1re4uu7spcW5nvZckSk6UPe5U8PvoUrwX5t3s6geoFDqDoquUifZXoAr",
  "key19": "542yQU6c4NXzF8WFKajSXRj9ZzP8jkF972rEDZkDavcYzwAHN41iSf47bD84AgMMFTk9UBoo6wKUnCZSvqik7WZb",
  "key20": "2Dg8SpoGTKcDgFtVzk9QMdfzRT3QBKKyxvCCyeAUuwAxaPszJbKjWSJwrf3uPJ7N8Zb75oPVSh8Dz3x6DcEsXuLw",
  "key21": "4q2yV5gTn6qgk5DthrH7J4jRCZiYAry7MgpfqxdVUm8wyqJRKPmgJnZncaN9Qpx9vNifgRzURmkk5Y5UHCh4nm3E",
  "key22": "4GEPbE7WbaWTwWCJpxBsXg5uuk4RdwaYqD1WCAukNK4ztqjEoUW2zSVJsfTLZXYNwSzUzmg6MnhhPXTUTwMV7dA4",
  "key23": "4AJPNzaDU6PgZrdbtH3KpjHJW9XkyzdSN16dxgXojmMmZv9nZp8Weg45tuAoNq1cUvMfS7Mcbuiie67ncJrBHdyQ",
  "key24": "24DUoEpPsTCo7D77NN8oXciDFh4FExCMhqftedUp4xiMwSeKVxEqDFNyC6AZkjSU4eMWjQXsr5UPokLantMsAZGd",
  "key25": "5TYcEk7qeJHwSGDSDTPb3C56WsNVeo2DhmgMbspqZDikLXFGihMqzCNfDAgFwwXv8AUEjSRDRUMCWk5yHKjsPDzv",
  "key26": "3SVicCKmhV2V79dqrNDq8p2Ez4z8zFDmKsJrHj5TSmxRs7dKpahAoPf6ovMdhkRijMmYcTt4zHhHBvDfuCYCriXm",
  "key27": "5D6LYJLUx4s2QxQkr8LwqE3gENUoYLmY2HEYVye61wrFJU7rkn6uUqGF2qBUJb3gDKzWtkNm4bRSwtkSPiPABC9m",
  "key28": "5mBKSPn7BfyY1M91iJyPAun8FN1aADcTT5jwa6iMvuZoUgkCyYEQKg8xMw8JwznrCPLwDym7KFgqnRwioUHBN4Ur",
  "key29": "4f3GMbUXcbChcXkdPmzX16rkQYJCV7WQwwFT9feqnUXUQqZp2n8VSZ6WRBhcohbZcwBPUkgMh7xJJ1a5pH3kCE7c",
  "key30": "jCDMjU2W5nv5LaGNZrhB2Tf1FHfGiec6MzxiCRG1deyAWGC2RidfREhE4xuuHFKemxqZeAYd4aYJ4DyEPUVSPMz",
  "key31": "2XaAYsJr3sbLaMpwDwonfyVkAjmi6XDxnUt1aXdGmZYeMBoPaX2AuRT9PYULyMt49ffhtp356BD9fzfweBFHtQoC",
  "key32": "spRA23XjYjrbxU2dhH9E4GqdPUxVyKTkr2CwTKbDTB3gvZEJYcro8dULxYmB1ECKvLgWsgKh4g3r2angBJ7R5BF"
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
