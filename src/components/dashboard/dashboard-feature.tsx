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
    "65n5oahYCiDnGDP17NmyuKDjauhEMYCz2GttZU6e2YS6iBVeXEGhvoG73oyYy2wSR3LMJjtpM4j6bfcRpwsU8psh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fA7EWj9K7EW6aRAEjLFDpQiykCLQn2rXPyP79tptsmFBZX9kgiF61n1YRrAX7C4LkbfyxCacmyaCD4YzgE6wipK",
  "key1": "5egJT9WEr1d5os8Q9EECM9yMst69sH4UcBoYQjHZBaFB5QEbZGLh5bedA8UWZC3J7quwchAPH1vtYRmj7me4JUVi",
  "key2": "wFzA7k4BKYSEUrX4QvGnNFoscSDsD4f9MXQKsaMgSSavDH4RsZZ1qRwCJBFk53w3qAhw4MwrD9tDRuaZrsDDb7j",
  "key3": "58QfZQ6kb4z7vGaKj7vGQDiWSSeENLuw4WJeViJwNrTs6dqw64SXPTiftuxZQLuwnZnfxQQNWYEtK1SLxDqh9Vve",
  "key4": "5D8u8Ut5snFfNwRGnAatXZ5ujgFMqw6BDGQX2g427M3ws4zVTMdizp2919fJZ77eL7MDukeufi7DZMDCHGh1cmHc",
  "key5": "3rQHgF2Zj3hxt7ASB1AWvvXuRWi8SLxQ3eBiqntvn8LcKfcCYhymmKfyCRyCkZM5JDPrtDdjE24binQF2DUv9AEQ",
  "key6": "5stocx5iUNQ6vhAzsRMLhugAor17Kn86uqsMB3XGte1dNpRnm2sRqNo1Ug3eGFgZi8ETQGd7cYr6KEVMYu84DifZ",
  "key7": "5XLRtg4yJhfENhGbsKmbExFDrYxYzjjSBfT48313We2DybQDKKA3Su7H8vqU76QVUaHr7XFEttFTG5VNxKvQpnJz",
  "key8": "u2tMev5eDygztJkiZpfkQjTMSQXuN6oYoJHD3sL9ty9mtfNrGCW9X8DjgDM85STCx27N87ihhN9GucjX9EHWvTJ",
  "key9": "2fJ2UXpU52BcYBK7ByKZDfdb1F35ev9nZdXHNjEB9PsZX5q6Emoc67myJ3J5M4emsqtzpxC5TY6Q65N2MvYhTGd2",
  "key10": "2vFi351Qw93u5KEvVUQ5HWRmAfCxMxdhdqWHN31DKowjbh98DFL8t4exFSXpsFoPkoavDzoX3Vo7uhfFqy8fPGVB",
  "key11": "4LvhhzADFCugevepJM1piPfAm96CxGem5FRGKfpFfWAJqBTuJJqqDqJQtHTmbwRGjLmofafgUZ45Uzd4jXg5y57u",
  "key12": "41W5G9NeeNy4ZZ6qJ2Bp38kccPaKbeh48Nsu9ifXQBkGTZwNhzT5tsNPbL6838jLGNEyoG2LEQgJT5rqge9PMsxG",
  "key13": "5QQBLTwvHPdHcA6W8PPCKcjezdxnuowPaCHqTkjPysRJip4rBnSg2rQQqjZNcbiK69jKw1FhQvSQfHfi1DmdfAST",
  "key14": "2uDHf8rgya7cZHAv1YKZwBjz7qQn1i75Tr61p9cmdBMVeoHxU22KQCoz1V2CbEjcTNegiqUetdGVYsijJQL1KNen",
  "key15": "5rYxVaXfU9a5PCiGWq4G42oWVRxBfArjQeQbivnFhNe1cmSP7BPg3KEaiMH8YGkgVBbAXNjv5bCwDjPkwe1A6GgQ",
  "key16": "ipMvU1V169VB6uKHhRhdTWkDLkdtL5piBjV52rXQNRdep4hBBWnv1anFqUicxtjm3vjS4oFZ5qbg5XA3PNtrjj1",
  "key17": "53orrYDdbzsbeJKiYnubiBe63YU4vRi6iUEmzwrfGE8vwxRZy3J4ni4tt9y2LXiagkaSZDk3D2aR3BdUwd7WF3Ax",
  "key18": "2fsZA3w9EiyxGabRw5zjZBgBRkPTYVUExcrwo6t6L7Mb1Cto1czL8T2qVWdBzPqA1jzdeMyxuazshhiRoZtCsjwS",
  "key19": "58fuCip2kufpV1t4kw25EfjJ3dptsBqsFJB12u34W3V5fnRCbH43TRJx42M9VHU4Y4JDZtsiUYSakn98355LoHhs",
  "key20": "V4nqR4CrzEr51Af2kaAbL3tnnsfAvMpY2x4gnz9KLtPCwnSBAM9hgC8tzvMQvWXnJmvsNXRdLHMciSb3iyWuyMa",
  "key21": "3zhwW5PjwqnGoKUoyqCTNx9iLZPZ7tBDFxV31dNp1PE4NCoF2Wah9K7UB2A3EUQnbGqjLoYrUS33ms4rbJMkBjS",
  "key22": "44yYUJkshkg4241FCPXHsrpwfjMTbJppwNQjTroTYmdYcyCbGAcKW5zfJE6ii7feBhkj1UxtVEZa5PZraRqfEhER",
  "key23": "28BE1hneqm2xQvrtJZL6sggtYF2WcqvNMYLJLERHeHRwaWe2ZkCGaPfBfqhGRHozzadU3V43rcRB1hPvhTwUNA1C",
  "key24": "25dRh16EofwBD8acKNMZ2H9Spjkpn1GoDwnmavNu2gyQvVtYToQCL1UHYuDpSL6ua2Hb2otp8CKEsyk125sg7w6G",
  "key25": "4DM9pwPrXxTLNxqgmT1b8iY4tLXCSkzDHY7KrDVhP8uCJkDKhd9GC7hET7fYeaMTEy6ctnELEEoe3PKY65hBh7eL",
  "key26": "3dTqq3LoFDSRmu8FTz3KCcJA42CEeP3GFhdYsNuZ52EmSkYaNwQUj1K7LjZ3Me4tka3MG334EPXJY25qAof3477P"
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
