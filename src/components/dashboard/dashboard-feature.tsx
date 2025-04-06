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
    "2LWRz1WSpHuHBSX5bL8gkoem5ToGL4UhyjTPF2g1JHGXKvU87xTNgAJgX3bNz1GQyRVwUXoeTk2Kw3APLdUcN8j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vWnP8FjnSoRmti9zA5e3xCGp9iyPYK5nnYnse6EoUd4AoicpBvtAvoeXYjgHMDTPUFxNPjMzTtb3Qbcr9KRgw1f",
  "key1": "5GMyzqvhJ5gFT48tfZEzeoKFjBQSGfrnPREpvwjDqTTrhJFPzHvqB7LbDYejGtqwDtggKNy9v7u6EAB5KyguPcKy",
  "key2": "5rbWCvRf4UZfNUMX2SquqGATEbmsZ9h6r9KQnDXYsTRy81gRshydUJKhCEvaNH6XCm87jKAnkekGfSaKWZA4X39N",
  "key3": "5Z6he9Amjua2Pj6e23wmSv35geor5GXu2oKMRgKD2G8pzJdHJUi9Dp8Q427vXGDRgBTUgSTNST8SNUwUaJ6Xnz8d",
  "key4": "3v21FqyQ7nmwfyvzC3sDQEm9ugLQZcLMndSj4nr7sAhvANVQf7bUoCDvYUZFTkZpvbXdHS2U51Vaq6jH9iq71TPt",
  "key5": "siUemMdnnZAWzpbmAdkXcuuJWF3NA3PkqQ7hbFksfVRqCYduBgATCUEpfmGagpZudkU7wMhxJ4hxQpYSghM62AU",
  "key6": "3xProYL7W2PnyREbvWDXztoYYb3Qvo7xmmM6oPMNY7sQ879SoqFAxQD2nsRFrsZvs8jbaYfD92vNmwhAYbSgkwsC",
  "key7": "5d5fpD5rLadakMMVwUA4Axba7bg4okCFZhQ9EDuewxANTDTEP3JUhZMbrJbctPFpbG8B2WStmd2opMbpu15B9UHM",
  "key8": "5TFDRg8stKm15URPiMP9BneiMqqDYukWxzALM8RpqgvW7gHhiY8ruqjeAo9mVfMTDdEdnsB9ThLKPwHT7uG3jGXg",
  "key9": "4X6AkhZBc3EaDFB7vBdM6d7TuDhvcBjtWqr5c7qRJcZW4aavyGwfRDa9bNgYYvBnMk8wxH5ukohSL1Umy3T2uVbv",
  "key10": "35TkBobuyWnbdS3vP9EJPq6ipjFu8bNoKe3XMoPPQFcEGd2QxUVqL1kgEKoCGoySb4PweKD1JtPjjaYYcx1X7i55",
  "key11": "NNdTpTBEbZqhpqQ8Zx8BV7SijtEz3ANh7TivAAz5jecUjLUziNQeBobN5BvRgJM7ixJiZwrGjA9TaSYUkYpiXy1",
  "key12": "4cuesDWp2apP5qya12vgfMh4RHAMx2prbwLPcQJedfgWEjceByxVW1chGj4deJrRqnT2FqnPz2Q35ajEC2F8RVuj",
  "key13": "4F8myzPrZheNPdMguHPJ5QBkFT2596RwxbQPN94ENadGH1cZQwQFzp4n9fNbMY7D16qygKdDWpbxgfn9i389sSRH",
  "key14": "4MpzZk1Z5W7eyevuH9pS6ejJaL811kmzpuia8F4fhFHd29gKTueBozbonc67teiu4PzVyZMTDAZyxET1Mk3rvRrm",
  "key15": "4kGKxTkZ2fVDPDBEYYQz3Gi4G2TtoA5HqeQcbPBuwJusVghXKsxnx7SFv1N4fzrqvcExEiRJY2na3vDSXyHG1kyZ",
  "key16": "4nQTLDGWWWv7sHtAaCNmsuMC57X7w1J2NXKL458xorevhX1MmEAkjNQLuWp3ZcUEh9ouHjbAqHokKfw88VpiLFD7",
  "key17": "3Uex6RrJYnWUuAkKCUSA4Vy7knTxK8LNdwbZFJMiMQxaAErUXkb5BQS2GWFhzS8jBSKaKhjdhndKDvz7ZqP3zV1S",
  "key18": "44h8XwzoWy3KrufEr6Pjua1CVfFN5vLafgKYYxAsinkhA2e6Vts6BRWuRzDUW7hgmaSS1dg4sBwEm315nPxZN9JM",
  "key19": "D8FNbjPHjKdtRc3KCX5csB3v95mgvW7jR9MrCWFWE8wpeaeuJTQiBVCyV7qmrwLrCxup7LM8TRwY6rQt3mLZUWu",
  "key20": "WggvA8VFyzDqoKiahUB1oTXVwFUzAyUQX14XQkeLhz4oquJb4MBgVJGAy5TkAUPMLiSyHTgNcrHwLvtnYW2FptP",
  "key21": "4Vve84ozYnjHehMtijq4nyP759q4xTfPqyVuYpUdcqSAS1TgsiLGAEJq8wkHTQvKoo4wFW3nqPz8QA2oS8XMi18V",
  "key22": "4wG9LRQyqzLoRvS8R4QCjNA4q4Cf56toLpTWqTU6wTEP6GKYo9VDfyVZhHLPu2bgUBXxRe3G4piQe31bDqWocEhQ",
  "key23": "2ivQSCMkh2Mzo6tMFMDxiT5uixicsgDFYoJoAHhHpJYyER9cxzDj8HAAfGKUnJVPx9xyJ46XdKpW1SjxnGZH4ejF",
  "key24": "2hN2sQQLwqWFUDPB1QKG3ghboZAf5ZKJbxWhmSq7sC7wMobF91jKCkPrx3RpVmAxCAPECrE39ddsX9aLWaHwoLsm",
  "key25": "4vnXwBWZ4LwN8VQUU9pHVvXADrdemLFQMU4C8uoZhtk5ecZcRMk7Uc5U5mKQRkoobezx9w1oqEmbHHhJ8yp8JZwF"
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
