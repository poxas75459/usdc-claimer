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
    "NEmjPPbyKTaqWTVq6jgWtSJG4bSYGLpWynRdw4chb4EBg92ebeXm6H1AQX83VGwwYyAyijtWSEH5q3j9WmKu716"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1PjHYhQfABpmSCRur5A5dtR3NtwzVSFqjGhiQhoqNrPWyFawtdFfUFiUhZMSqzSQf4h5eV5bbsipCWqrzQzUDa",
  "key1": "HVwEKx7B8Rcjbok8mYAUEEDB9ncdV74KooysPEYZSncdeW4rnyDm63EPXRXaKZmsaydckj5JZz3Xcq9sXnn6iCX",
  "key2": "3sH8CV1xqfar2NGMyXGsQtAFt5FPVkEcciTr4324zHaQY2ic4vFTDx7pCDzjjzvpbmtqrrdNLCnh6yg7iYHMt6ni",
  "key3": "3aoR3bY88nN1SVnscMF1xhKmVLYxJGuHAZL6GBTU4NGJyWe9PMYgjsyVEQwWexePNZxxG1Xx71XC8BkaEWv7U6iC",
  "key4": "42ucHDVTafBYmveC8wiedNxDifpthphca4LjD2vNWXaMNMhBwoxfurHwrzFdtohkkC4dG5nStA1DDrCgtYAbQ3RC",
  "key5": "5xWXa3w9yAT8zVKCbensShtiFdx6vEwW1qE4fAivKEVCmkDwEymX71Kwra2AnKFfLeuM7mYBBquVhJfYyNKgAPuA",
  "key6": "8fwF4QUzbf2U6PTdLku6NkXjE44FkZzjxi5YZTyH113QWWJmy3BNakaJLd8GvvQgDy1E4jU2h2vsZxPzM151o2h",
  "key7": "2HyxZVh1uNZCdj8djmyb9khuxr8QHQp56qTve4MZSUyNYZGbzn1s8QZF86bANFuGCYEaJLpFtLmGZsJ3bHzjMPSo",
  "key8": "474emtgW9Neoewv3nWxGNwMaqbynRs43jkZLUpH3D2h4x8FjGyKWDwuPDFVk15V2yegp2MRrKjZhdp3FrXDMgYop",
  "key9": "2mDSKuTAcAiGcYj2NtRx3G1moA4ubR6RUicedeGLJ7D4Z7Hs3rk75AYfaCCKXFg4hZewq5YxXDo7x1Wie7KcoDrp",
  "key10": "5K68iX52CKbVrTxmRFdESiU7zNgPN9JkqHrrZpELJUv1wfscMQHgw6eLZwvDEfsC6Tg9hcyuPLtLVgXtBeM2dG6r",
  "key11": "5LapnwHivSUGTqs9DSygokBXVxw57rn61jeBRxqeQNuQ1M2wEoJVyryfC5N2PEAibwFjohayrNKvugUdUEBxbquv",
  "key12": "4oGy7CeUmkPypq2Rvdu3aGDsLbDT2uMzotWKCNn2taN5J6oiAbJ3k8tEjKSeoMRSSW9kD8bPArr2Ae2VtiyEjBjw",
  "key13": "25cax7pybSeevzhqbWVxgEVRmgNzuhZguCtLHs1QxyrvmVnydn632nEFbJKpMYqHR4tjZC8wgjqVYoUk7EsiT6cu",
  "key14": "39bXLLyGtri3JqEk8BscerqLvnuGeANURHKQEzaRmozX9DMEnDPmkJGSvmu2To4XaZP6tYyuKFGEUMRT4Eed7zxd",
  "key15": "3UaBURn6tEHgoDx5j3b8ckvopVMK2xgEyS6V1jxFa4y8rinrvHToD9UDwmDvYccaTq5bGJszNQfTPbzkgBAEW3pj",
  "key16": "5r75VGMAvk7imS8N6xBg75Zra7ro6eRqyh3E6u3eXmDfHa4fkAcpkwQxCdj7yY74CEyVVbHEhgu6JemysNTKRFCd",
  "key17": "3EvDsdv4KznmbVG7iuRbMiSk74gWSsnS5z6KVXfYHG8vSPWYCRNYRjpFuLKwih9a6ekSvjmsqhaPp6JE7oFoGCQC",
  "key18": "4wCxYh8mMoZVveUjrLCSrLigYq6fR44nqebSvhNuUv1ETnZeTpTopuJ7yezz6w8XFxQniKA4bbFWqtNYTrLDFUKJ",
  "key19": "31nHBUupYx993BTr7aHCdNiz9uy8vscygFQw2i7X9JgXYYmejMGPKajjv6uNuT3MQ7DwTqJjwXSmNBnVPABeQGub",
  "key20": "2wrjerHgeT2UvMTZLpBUpzxrGtBFzfzmk88qZ57LQGfTckB7V4biDz2QtKMaSBtZHLxm3NfCqiUZhvxQW4DPzpHK",
  "key21": "3doXZj9gmR3f7HZ5XvLdDEpttpkcRquECSApkDdkCjXvbGiWBxoJfHYXtutVSxkKAnewgGBMzj6Bc5ev6fcQk6om",
  "key22": "5CWiPtsj3RSgLa38nVeRAkjEoEgHs4bjhgtyuf4VypjzuBqX2MGF1mEm2N1XTVzM9xZcnizb8rpH4BGu2WBimwyP",
  "key23": "ZghBdu5q698ZMie9qR9jbevhygmpdwUSTWjmu5izpcKNmy8LYjUota7yodX9ntKsiWL9RtVF8TvGLFN2jej4mad",
  "key24": "2a7DBZUyKUHRewRXkcADi6Zo7aHncf1Uh31oBJkaF7tVG1T6ZfLMJZj3fSMpfedYGnYWMZmp6Pb7ZnSTWrYSzJC3",
  "key25": "2ocKoiML46SBrxvZXB1mgEiL3xS8zPjmUgpLL9wVZJsuTgjBujrgBpUeD7jNAQ9Jiukvq2xE7W8xyzf9B6rgKbGQ",
  "key26": "59FVApnbT3igdCDThSKyPR9pFSmDQGUL6VupS76rkwaDUBotpV85sinw5bWAwFu64TpYX2anXnBnVeN4UTvHHLyH",
  "key27": "4cuL4TYFDudPkibJdDnQC485jKjJa4KRi1UGrFgGhmDZruNHKUHz2GdoY6hUyUNUsshXCHobhopS9MyYbtpVR9aq",
  "key28": "wXHG9tJUzWLsuvtV8QdnkVuoZUZRA9w2ZqaVsjcSc9LWMHpxsxUk2DcUSkPYYDhWvTYgNWLdBnwQKQGMVju91Lr",
  "key29": "4K71XbTHbHATbgTrYxPqk2hWD69GPbVW9jiwxfSRPXgqaoLvG6TK57bBzGy53mWQWJJA8DaBAa8vtJ1LREeLjY4S",
  "key30": "5r3ytkFKBVCadcYFTFMSL9LMD4ij3TktWr5mVtqRn9y7Qey9DpgeEJJFX4fA7dL2TyUjEFFLS5qPCgLeXuWF3naD",
  "key31": "2o3EdR2jtFUPkGHb6WfBNtdNCkLPEKPqC7dkJDhcSkz8Pfnyg4hnGA5Qa54VGydvGntt5vZ76Z72a3uRozmhaVka",
  "key32": "3QtsZd9pwoJJxn2sx3qXbKKiUu4digy8MxmMoFahF7U8Q7DAm3bitTfRYjYyQs3ddyhSMak4eNCGTJ5GQ52Np9Yv",
  "key33": "5yPsuqFvxVR64ghFNc3T5dQ4gqt4PUfHhUa7SfGim7Atv2TfHT48XSDw6xJ4FpsNETRqGBDn1Mo7R5JXcWaPhFwZ"
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
