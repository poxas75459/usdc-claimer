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
    "61K6RZcgH9wZhyAos4PEhyavDTDkwaeszZ42cGHQvPeCEYJnFQH7GpesargocGJ6FfeDkysyMg1AQ5z8QYbGSe9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mJuzr3shgdgQ4o8hTZJUsBRuCyJBTXMw3zWv1nADFVGPG6SntVxWsptWruNyyAvbm4j7aSSkRRHAWo2XP1mae9",
  "key1": "4wsnBKpC5LNy9vpSTxvk2K41U1iGY1QWAbQFoTfr7W6Wydm31ADASXdPBwQGysXFuJfP5c9bgV5KYB9jKw5sF4tN",
  "key2": "64LXQwZBJmGsbt7eU1BaspSh94Ft9Td3KEC1Gdo9MZtP2fbDHC4WC7r8uPjyUg3Nb5jWe5NKaXiVLxtc1XtN1wSC",
  "key3": "3si1KWjE2JB1HGjHGxV6rv2YEdsHBsVw7mfsecTfbvdD8Z2xGWK9iDx3hFE6jfs541TRZGwE1TsaJdtFE5gtJTuB",
  "key4": "kMwdwrRuLiifoRF4Uoh1HNnvdavfmB7hTACfa1QJ91YP8XuwDsuM8eZEiZii5MMxcTCivSmgdinuAmhgvZyu8b6",
  "key5": "57LWn17H46uG2zM3sp66iS5RKFgUGeTgfX6XiG3i2auPCEyqyLjG5Ce8QNMM9tRXN26HepLU8fTsT4gUm6dnY5Dh",
  "key6": "22L5XTPDUvqJHvTUGFdLRN8maF7i491U1rYN3DaVRpA7zuE7tLc1D9jyzmf6yCAmG4dbbVvm4vFMqNsmYvaaSwUT",
  "key7": "3ZWTt4x6AkSFQiaPvi4XpgFLTwQnhhFFkGkqoioioqYCb3fT2mCRMLr18kNkNMm21LAJqJ3JgEa7wjt2n7UDr2KC",
  "key8": "5Kf8mxCCQrHkL744MnaUoNQQjg6wM8JzFxLNWkjv28tr9qvZA9NJXZ5cNQ3u8RWErChENMwnn4KKfMfDnDkzUcUM",
  "key9": "2TJRLYn2NsW2GdMAzbH6HedEDxMLRXLPsWQf5U4Fyf8u8XotjnccmNzZ5Y3M1bjWas5MzEXFnxaMndMuG36mvS9r",
  "key10": "4CAxNLoJXAKYg64cRaVacwYBbhR5nXhsWdxuc3wdKS3YkFuaqMYd6g7foGTdfMZtsoVz14uoYRiqCiWe85v8qCAF",
  "key11": "5kRWG4B6Q32BD4Lx7wUojEP64tVK8pJ8p7PeMFkciycRi57dP8hicgNUsjrMKxwgL6t4GVDTtBzM5JEtgCJBkCRd",
  "key12": "KwMVvyEQygbYyTZ3Wf3YdShqESpBpBPaX2c89vnjnDquX2Dd6E7uzzyn1CtteZfvviF18t1RvrcNBsqsr2N33qr",
  "key13": "EG3by6Kx1fCCEr8FVVjwMxCu9sbYnzy5dGDCt8ywUXhvqQ1Fyf4Z7vBENAZ29N4KtferbgC9xJz4rLwRUpp3ZXD",
  "key14": "4MEyALaEGJbpsKfNkqCKjCX4cEsbTjNatrSEgDnuqweQoGdgtoeXnkJJbMfSeKGEcqUvYP3mMmRLNHJYhxd4kUeb",
  "key15": "2F7Z1bW79zSseQ5Faip9og7VUgmkgiyDshwP1o7JjkDshyS2r2QUKxwWyqGcmc3HWRZrdGLsVm5PFFsA4MCzUWyQ",
  "key16": "2GyD6YhAd1GEXJsktbvjp1b8PAvsU2tqev4GGvNT46W5DuYEQjAXRJfonwCRcZQqigCVwNuPppZx4ki78QJ2ghpG",
  "key17": "3UwbpHpP7ocT88vn7WF8LBbRJEZAoWa3hr9HeEdE4L4eJhbYoHsz7LBJRM6pNWRfDn33S8cESVNDh5Lmo4UeFT9D",
  "key18": "4HH3gAUAEaxj8ZrVMoe1rTWpcazpqJ28KXk1sCQnAJtyEcUSvCVRNG37D52BnC91vGbFgfjCvXUbPVJHeKz9zwWn",
  "key19": "5FVy5X4tNoeBfZrsu15ka7cYFGVYGfoYCgLkK9G2TwqC8UPbvNJxuVmDvR7jCcjPmqCr7q3GKjnG1WcRdvkGaEHD",
  "key20": "9nasDfGRiAA2m1nZ1vu5AqB1AWfqgozrZLmzVAUnqHxzwJXhLWLeXdmVpfwTtycoGhcDuokqfaai2XE65JsX8Cs",
  "key21": "5q4X1yqoV1khAidVrpABz43kSYqSP3tzdyQkAm9LVnx1Pjx61Z72t4kccM5ufLNxfqAgH5UyQDJjro7KhhXZgp37",
  "key22": "5BCLBJVAUmJkSZ3p3ZmYjKA7bRmE4W8RF6H6wyvKXFDYXEyGEM9DfmHm8hxmK9dxPeHUDsyWbME8RMkgd7GKNTa1",
  "key23": "4by7UCagu6JvyLZS2tTwnuzi9KZxnwPNEAhkbmjZjJEoCQBgxDrYbVan6jaAR7Qbh4NnKxkJz4AXD2DvajDaPpN2",
  "key24": "4HtFJdDwvD1uqg5tRQbFKT4NDS35okwBRLK42HmtZs5bB4B4mMTiRS2mRHgdKBNp9TjBfmYm64HnQEzqmh1pZ1dc",
  "key25": "26o3TYKA9jihpUoFjYMJ32CExFUjpgw2t2D6efBKdDQFm9YssoZwFDsNrSK838WdotXUku6kbA64Vy3Gc4WgXeKu"
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
