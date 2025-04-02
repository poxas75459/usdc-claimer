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
    "5WQcgZiMLCCXfWPk2zMcRXstya9xHAgr9ko4EhvnhaFuhMMmYzPyYGr9CofSjipf7FVje9wjJ5VcZuKSMBBWLaWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2buKW1ZL5FRvXXsyjhTMuAH9BztCEeHqgFZ4H5bjGqw7M4nvHc1g3UN2F3tYN68figKiFVDHaDSVKrFnwdyC1EQp",
  "key1": "2Jnf7NQNv3aFkmgBj9ut2f7BYthAjCzhQcaXW4NrGfMtM1jDPybprLunLvonTiUKpAaCsCNdgKVyUDFqJottRTBd",
  "key2": "3xr6QdHcRRArzZEeb5sKyja4rU3A4T5JhYfDJXpqEwkzgZeZotNEAiDGn5a32QoT5fvi1BHvjR4aSHc9NxpfddjM",
  "key3": "2yMq9hvtWM8yT6sMy5UC24ywtzfPc9zAnJ5w4VEmrJEth82uaB53zE5JBNcCGbeYwgdDKFxVujr4MaEBqXqZXRMW",
  "key4": "4fPf8GKiHksTJ7hxBX1txZmU5MDnReXceF4gnSoP9BemLMB9m3JGX5bZwobHVjUhfyddoxd85PNEJBxqNNP3zjK6",
  "key5": "2HhWgCmKRhSw1UQdbe2vjEkmDQ29Vo7Z1ywMVGTSeva1MabZET6seHqvD3Sbf961h8vQYB6J5PRRRKKaY31ix3N4",
  "key6": "3fZtC5uCANge7sk8PSMEoA7ZzpJqKeL8HEDg9cXQ9e7jVRG1L65gmERbThMPytxTA6F7Jmzk1D2PGK5bMHXXbBCD",
  "key7": "2YJbF4DYpkERUjZYCXY5iC5DXj5iUmDrY7fnJgunDeLW4jmzKX6UKpuMB6yuT1tBqVr3kPZrbbENrJr7cxV2tS96",
  "key8": "3JFiBjPyt2szuA1RpDukeSQzAAcy4fYQEfpWzt9Z4K1Z1LuUBatnAj4vujaHGx6F8nMthjnm9SBugJo2CK6yGr5B",
  "key9": "658MeYYETaFBgJxoTrXx8cgdE9eFvWikgesCaXM9h3Eu4y5zp21s9yZiPcwUVWdfCjyGt9UGXTXzqomoSz3bavrZ",
  "key10": "65gorAYWUd6BB65fVhKttF2pJWcYeVNxrQbiiBH7R1kTxbEEpyuYTKBAtrYPZTYxitE9kQRjUD5QUEA4k2E8mKAm",
  "key11": "5prnfPRJF77PsTZGoq4F5TdqaTm4wuENs85LG9YngLvGhsoJ4dZdDNgWPmTnZdWdNcmnfttapBBjRXuK1gmrgeAg",
  "key12": "3DWNrvP6zTMi1RYH6CYjwUidVN3NRApF3rCMjD3tLxGPzmcNVrFum54LYGL1iGeYYikbYFKtd9hVK4ibZyb7oZBi",
  "key13": "DNvhdCJCuJqPGNMKT96cy9iKQpif6HZkMAKFh31jR4hkvn5fba7qKGAzZvCTzuLdVhJmRHeXEX8ev1DyK1UQvjp",
  "key14": "35cwC245nqNuUugfNhi96hUvAJBeHYQctPuNTJnvVrqw4uSypzPgXhiQEr8mH5p5peWKKPEEcMHSUAwViaHowqr2",
  "key15": "4hmGMbjWyhWbQH4NPZnKZNgGo1T7LiFqBocWS4VZWSbMxPxTyRJZYm7wp6vx6DUzTTSMzMywuzRCgjFTev9bK86j",
  "key16": "3hKAWnQpcXDRUf5S4gq6Pq5oAtyvkUTv8hTdEAZwjYvD5mXJyh6D5JYzpu1PQWbwqNvs2oGbjtXqy4E5jGNXPin",
  "key17": "fNgQWZuVodQ3BYa5md8XimH3yQTCs99tGHQkfVBYkb9GEptZgPWyX3PFgUd6wiHLp2uyshQb5yEPs41xuRi1j9D",
  "key18": "4nq9bMNk55VvtsxC8idfENVVfhxfXRtyokRtn2sdLMz8EJvazoYZhSUjaZiCnnehyqTEBLez2SLtYxjv43HqDVdw",
  "key19": "4cpwbjQUBhTUERCtbTkMSZe3ycHhTN94oRVNqZMgYYA1wb9gU7noV4jaSbcGGoRQpfozkDKekfewCRjcVRNVmbS9",
  "key20": "2Xv99FZRqtRUEZaE9xJQxWzzUuUn9jdckwKgxMwvQ3rXcYA7LEY84QoFXaXXPZb1NvxSsvrp2m7VyseB3EmGbyZK",
  "key21": "4c7jjkrEBY8F6WbKQrfeCavKRr9XuJNEhqYdP9ctXzGyYnrx5WuoZVpt6w2bK8vo2EXGzbaQtwHNsdkG9aVWTM9f",
  "key22": "5eAZwEeBL7cYdg8pfLNMZjcqAUhW28j3SdMP5a5Hsmea36v8CwQ3xVxdXh6hF2yrxiqJpZGrWm1FEcMAAHd1etfc",
  "key23": "2dw8jsmXVifUupekoZaHbKqzefLRzPt6ifRpKYW4zTkd8Z99NGY7MUb9qXdV26wXFt2DseLmHFXc3bxqfxhkw3yH",
  "key24": "4BMosac4rMXfMYouufotyDYhiKpaWFSvdwYpoKfCGwp7fKhy8ps8vocwwwjhenysbxQbgnuhMbfPsb53pDxCUwdL"
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
