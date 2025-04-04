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
    "4pm1nBNwRprEP1kCNpxnFDG9gviZrZkBdJnUCCAcKFJFUtZi7htUcEp1JQt7NXFDwKSi9WTE2eszk18hv2JZoA2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZiMN5EUZ53Z9EACeSNoc2enjZdFJUmoyGwRvhKf4rJXYQKBuJYEZasPHFTDTsha2SZ5aM5VfQpW5QvuH34MRPv",
  "key1": "4yQcX7R6bny68MnrdU8tkLx3yj1z8AKhXHvMPgMhyTvpovoSabkAymRK387SqQpH9frtCzRJTPgBRU19hSnK5Bos",
  "key2": "2ujTcXdotw5M6tgjP4yWiHrzUPi2m9VhMFQzTDNHtyhbqjxx2fXWHKRbS85ihrxqLBvgtnTZgN75ncTux1LjRpCW",
  "key3": "3ajuTaC2LUYYimyKqg5qedGnVpEzRnRBNHkexoUjgrbVfTHMKoyz8pL17URdX5axF5fqxMvBEyb4npHFCzcDFFQ1",
  "key4": "kD6d5QXBLveSspz6HjW8hK8UAkenTriUV7FEEQ29oVY7vb8LPseCVmQHc5TPxCMrA91nLAqRRh7QvmDkMg28owh",
  "key5": "4Q1KqVtNofdciqaq7TjEwUKEaPSAgc4bqwrBycmgYow5tsMbKd1Pb4E3bBdDndVTHkZa7MuoptcExkxNBBAL8D1v",
  "key6": "4psGoPMi9tZ6sap3TPWAQB2JWSRCb3yzQbQCyeoDmg9Xff8ECC1uuX187sRJqocXHGB6jVtd1mmNqxJeuhad7xu",
  "key7": "3YN6ZcfKjs7vie7zkCr8SB1kNapEgMsQSmqB9XN4GYHmwSkCDPcgvsnGLa4acwspwzyUdkjco8ZWnGd8C3RDNJ7B",
  "key8": "pLK7TpRRxeY5VAsQNPcqvhv51vNzjxJ5WPLvyWkNUGCnRhhMCLs23yVXv4awdAxeCAn9NnvwMQH3FVTaMZnvA5i",
  "key9": "4QT7Jd3tySRSFT5Tk7JV2rvwK9CtQegrXXBRtGkY5Dxhn9Jgkhu6nawrtpYXUMWtQhaNJFWhoN5xRt6DYDkridDM",
  "key10": "3NeoggEMiyBsLvSUshoteRecB3e4H35kGvS5eeyFyKyXYE923k56aXkZ3gtbPyFtBqRLP7XkGJ7WkUhWhhzh828N",
  "key11": "3Z4k8qjUYtSWdgTDmff7WA2iHizX2RxwLhfB6ZKmMgLAvhELT7ARAxWtkTQtumAVVdW1BWaLM1zHHkV3vgA2vPUH",
  "key12": "4kpiDPAZfpJZjqHKFkgQ8oRY5jnEZftqnDdWNbshMxp5agsTBeK1Qpir3AKtgakQJ8kzsgF9rE6EUJ4BUyaf2pq1",
  "key13": "34MMFxYK1g4RZJ1QExX2XrmHp5Wxb3YZBdefpVZ616r6Dp5EMeeBV96zP9TCVHZSYiNNU1ia9tvuzpngWUA1T2A7",
  "key14": "5UQyf8Na6igJmDDfT3zbmxUezHCwZ2vGBRKjMdeMSrsjfQUSuS5ahTBHuTaq3xE25fgPhHFBHKm1T6C1JnsTRndu",
  "key15": "5kspsiieVeDmcWkgmFLFEZn8nW7gPLLNUQ3cPyXSLoH6Q86PyYD1CtiMyMjWBsjUuw3oZBajaXh5XGGUZNAY7EmC",
  "key16": "4BzkvL7dTf1zzz3vYsrT2pkehHePMHQkz1MBeDgaS9Xo7zPDGh455Ed6LoWw7ngMrrRk5kNv2YmgLsQC5H65pSmj",
  "key17": "37h8u4vcRQmNohHkKvMPWXdbCoeKrsaxZBhXEqnpRn9CMH8V7zzgAZPBzVLVMnKMVrX54pFU9jTaGeBYWrntBh4q",
  "key18": "4pnkioMZMKYWcZ77mYUkPurW833RbkMdV4W8UucYxG87UQyuqndVUmXsbx2DxfRuV4ys3Gnhhz3qVvRJif9zcNRk",
  "key19": "48tTruqpeyMCdEKovXwXPyWgaAVYxafqWSkcbkjVGFZEgZZtYCQceckjsiyCAoYensMNFLErjfJPV5oBoYnb8hEd",
  "key20": "5xeHbp9N8swYBL3478fGqnXKydWxMb9f4bT6TDbyXS3iGABpVTzm5WUP3zhNxa4T2upjPxxD6oN7Pj7GCQxQjKYk",
  "key21": "2PtLw22NLaWnHLiFTeqRMfT5z6tHsf3LVhZtUVLZTo1bqtnfKyJDZwhLbjLx1msfFYoohMne9AQvnnSAJkzFkuZz",
  "key22": "4FLR5KtyQa1PtN3zY7LhRdaaiZhgQHszJL35C3c5gjY4CAkyMnHD5tEWk7vjHxLGUFg9vCYjDiyGmVarowC8Th7",
  "key23": "KqN5cqB8BqH2o4ZF4SEyPTF3snygFsXGs9MDTKEuR4NT22ZxEWYTj9FUe1exYjFDSwYcPiMS1yqtLWxEMBDoueX",
  "key24": "3GevocU3MC2pfedeAPqu4ww5CwcyMgpYkgHn4LMEuqN1SYPsY3QXTzVc6PFoKX8arQEYkDYuXQ9D4RMmzeC4Lo69",
  "key25": "UPkuwxswfqz9naGx6TPnaqjTG2teznFZmgFVCysNDJDETp5oLEdhFKrrX5nHkNKB4zNXSHgZQqnc7d6An1CcjYC",
  "key26": "2mvBB6P6w5KAdz8am7f9L6FmiKfWrGZqLJtZ5wKPKehrdEmGedj7u1JP9AZMniaawEptqKJLbxbdRehJhsuHMRL1",
  "key27": "wJ8CdiXvhpv6jESqffFyFbqrXCE4diNFBoFTX2QPgqWryPzUWvvngDGRt51vTvEp8TF8iYyWCYBHWqWuTjWgJ6o",
  "key28": "4xzbeXFeMQ9ktxr1bRGELmRmFCWTgdRpEcQAtmDcif2cPmYeizoD2jnd6owpqDkXXK7mXBftQLutgUPBWHYBrzeC",
  "key29": "3fbuQz9zfFPViR7MGxT7kp6PB5Z6WgcdMGpEe3MjBQqqcCty7WyutqcLbHh2W38ty2SsMQrSFNd8eP76YMgUL6RQ",
  "key30": "5NkxEHEksESUDjeS6Y4anH3LAHoZLqxcTCDhd3T9LtbFaQGPES8PbEP6wjW2arVsZxXhEan71s1fqth9otqmXD9q"
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
