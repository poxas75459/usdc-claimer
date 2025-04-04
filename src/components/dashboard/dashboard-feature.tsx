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
    "3vthQ9yg3AR3bqESwjansBxWVFKrgoJnDrUyDgXnGk3FXpu4bCCRNMNV9o7Zgz2rQnm7UrGJcmZGVK3fKdMHvy5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWywVLGzGU73hQJJzQSf62Faq1SvpCV8MDPhsafaNaSz8f89oYmAJhXuiX49jLCBMeJ7ShfNEkv6hCY5PWmCmm3",
  "key1": "5yFxu8PxWixpcxnYqgjoqbXxCnKLCoT2wwGXkfP7kmhQfnvh3qpxd8ZC71RynNtkiHhjcB6WGZg7fMnp2BctTyEw",
  "key2": "4zzCcqAQSsxGaLYCgYHWHgMmYbazHgM4RRpZDiPYWD8Y8YgBASXmhdqhXXusacZEVdhBDnxr5LsdL5VWE96XVieU",
  "key3": "4nZJQ4c2KvJNFAgorJqBGPYeZmYoQY1HyXRrSmgjU3MXkmVH84xf5Vapd78KfCR672MimazKeVhFZQMQyisPL1Vc",
  "key4": "k13k9iNmia9oEV7m5vTUQAKj8mCYN1BWZjPx4iNKrhQjsYnPtQkYVw6CeBZWjSRr8qY2B3cEuLXnv2VMPuyd3zE",
  "key5": "5hu3bantQBqYTEDBhaoyVTWKWhYDYHtWokBhoe3zaycECpLt7krmuhsbj8LHwsc2E9Xi6S4sXdiiWwwU6oQJWtKB",
  "key6": "Uz281AmepGyA2sMzGkqK5nUv53wtZeTLw6HMFz9waVNy46PeVSbPHKqPhCsER2gou7tiYHmdYqFiyCMhS3EX4NQ",
  "key7": "4vCf64Cz82eigpy7JwwBBMXNtZDvL7cTNvZnuJHD2WJBbuSF2dRhEhcSSGRwSt2Khao4KYjRx5HHD7T5q42cafxP",
  "key8": "29F5nf7vgzmQVwmNzDRoUazx7gKGo3WiFwME6mwWtQJ7a9cBM18FxEBicW867beaTsoa6ahwAnrYbPB33g2864eE",
  "key9": "4CmoXN6eFsDcXg2w8r3bfMREkddF7qm3ByP4W5zchpfnjxj2RiRJAWba3YkoxfS5qd6QPTdLpWqj3jzEBmYFSjgr",
  "key10": "pFVNzFNFUm9bzLn4Kj4z8DRWnk18913hVio7y1yRsXXu5cSbwHhnidnnBEDypK6jPXjpbMZaGAEHKqZiZmq5i74",
  "key11": "25UFeaFkzqDxhfeRvYU6Cai8z8zdH8HuzKq3ZeYpTsVs6fVJ3qLXcR4UanfawKRb8XM14WaXC4yBE1K6MdHK11wA",
  "key12": "kB59T6QimdRyZeKWeqGC9XqPLBA2VcBxYvKgxkHLJxGinmB6hLsWe1pJuAFAAbCuvN1VZgdLM6nG75yDvBSicxm",
  "key13": "4qDkTVa1pAQEQr1H8dEWwHcVD8jar5tJfYmRVRzE6rAJFDYwQUCk29kK24VfvNfAZ3DYQzHPP3r6ggLbx3obXpMY",
  "key14": "Q6f79HMa4qDCirmYpzCVsz5ZfCechGPJ6wdRq49iVodhuivCcZyF89JBfJFKVz75ez6cm24a1MzRLsK7ci1ZLg2",
  "key15": "wjZYRArxdiuhscHa4gyHZfKpDZTirFwGqbvxj6aLdLBsaBcuAB9fZjBRA34YNZr1Y8UCZtj4Nji2EixQMJTNgMq",
  "key16": "CDX699NQwmwovhZNG6gfT1BwzCojtJDn9gn5AjTmreAseX6MhE46UMrHGk3s62ZvUgyg2msSPiUL9iknPc19WNJ",
  "key17": "4uLq2KHF1Q9yBMGjPWWZEjvVJZpj2nU3mMfiGGhk2aCVarFhy4cAaxDx4EgxXCzTLewD1gxmMFDcYLSqCirHe85S",
  "key18": "5DHazxvLk5zgjmVGouU9VxosdZkGj2WhrMP2Wf9XmzbVcn77fM7FQ9m4JBakJy9i95CSwqkPdf5DQsqdokQnxfwc",
  "key19": "2QkpqfJK1M1beycMQmmqi1fzuNspzLm2au47bUnZRZWoFZHc3th2QTXW1gwkNP76pitcYhrv92qvYndKxCFmshzT",
  "key20": "3BN2aagNrxbZhrEPFVZmw6kaxVPAkHNFHDkuuEXTKobtarRCJnEK7pbQbugx1ySVW4utaqT2oKbhdeDwJfxjD9Dp",
  "key21": "3AUxcksUYM79GEunt8HaZvnYFqVsxr4GH2nMKruWJXki8C4Rbh7wWPbzgsRNnkkNMgSpkaXJZvmXA931VaYeRMVL",
  "key22": "3YQyHvDYDtkWWfmkjPMTSpWe7mFD8zAnZQjULHLxfV21wJDyJ79U4r2j2BPVrUbacxiaXLbVUt1inXu41Zz6Rt2t",
  "key23": "59HvMabVy9Tzw17byeC7JP7oKNn7Wm1aYmjhYGvp4zVYb76q6U3RgY5d7C2qNJSg4LBeYENqGBhoQzFEyWo5QWd4",
  "key24": "5LiQPmCGzgrgF4qrdVBhcwxHh2hqksX5sH4r2uZyQNdYZ1RScpiEU9Q2ed3zDP26rk5qB3howM5Dt7fRjSvj72A1"
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
