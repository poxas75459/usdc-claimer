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
    "5HgAhTZBBf4mijzXzGsNkh7McFSCY3BVKsceddoS2Eb4FoJZog6E8Zmyztb1idR51Fui2vVHPcFMiswvD8B3vXVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNXkPa5SbRJRng6ntAoDjFvsEtSeWgmZcdGGZ6VUU6b8LBhPFZgDmRfJSpg9BRDz2ceotr9h6VDTQLvai5V5JLp",
  "key1": "5ovt5yQ6XTHtZho65Q5NoMZNAFeEC524Sq1Fz7vReVPy9W8mzX871XoQQ8GEshJWHyEy6xFbhBee6qUW4bKtdnuc",
  "key2": "2gazT6dD5wQidGDCx1i2GsVDvdEfoEQ7Sk7uwe94246K5ocrog3DZpyoavEzZadEhKuYu944fg4C84G5o2sX9FYd",
  "key3": "33pFD8LiQrn7iFQUrkm1gDG6ewasvhYfuksJsSWvJBQ6SvpLTB3pdCtGWthsNpASNqNYZr1SLTf9oQ4XAA6Yq7dR",
  "key4": "65KyQUadF6QGkmnannBR1juBkxxzGzJP3VZL4KCpyEKFKXPcRun2jDvEZGDrxSY1JSuGtD5FGvHRiK4rCAbD3Mjj",
  "key5": "5JbRTnHgHyitw47yNNjeXUjVCKaWFagGU1mjbJQbugnm6ckjq1PHwDBP9Bjj4ZUrZW28hPj2oyGQoGit6T4EVNGS",
  "key6": "XTSmkciqs9q97rDyM6FjKe3Mn4jV48AdVezbmdrtg1qmghj1dJs2wTbXoqYqLrq1Rqsk4r3psAmeqPHn2XyDfbB",
  "key7": "4JVcamqeAfiXKoeiwChea4hWbyTmyCTAUfK78w7Ar4UmfzVxw1ioLfw23yaK9VWLZ9TwB6h9Tjd8V29opHQGx6me",
  "key8": "5GopXuAhY8ygC1CQ9N3R7vMmwYK2pTQqSrqmdWaAyTkw2mAnJTWtkByeZsAY6J9mN93HxiGpLFK98MWCitqi4mo2",
  "key9": "3ZLDQRzGFuhM6rTe2h1Vk27wtGRuZUiCwJ6PbMAzkHa4t423Qz2e9PktSoWWEVEoa6ARimw4J6beK4eVLLxJADi5",
  "key10": "5n7jL7Q4m23eFLi3Yiu9gVCSFH42UaFQGUzgRANxH16fZmdff9aXDCBSSvoPiXubzyYkBbp86HZLmrfQZKmcJkCR",
  "key11": "4AsrUYzx6EC3QUj5iYF6EAZqk941iHhx37hByLtJLj76sDmhULVrxBdjppMYhTbRM5HLWea7AzJPHWAELTBKD7zp",
  "key12": "4i56vQQRkdy4FARALqvHxto15fAHETgMMbUrU8mSrhJMe7FbFRhGPCTAqFX7HH2ciB7kuzFwGc4mXyBAFVdFe4oo",
  "key13": "5waBXQCiEPcDjBLpm3CbQ58nraJ7YhKY16xgfVJKVEVge3UMMx93vWBwcLpFBaPYbp1dpiGpVNPvMHaNbKChafHE",
  "key14": "4WjYh2fjTWXqUYjZszQjVze6E2wtgQJfQS8t6s422j5vfFRgBU9MztMjkx8EhWHr9Vtk53zNyiHN9FrWNMtKVqUR",
  "key15": "JzGfm9rjeuieghLCBViEVM6VQSkf4Q9dAnN5r5kiWgvo5mzuK4BMctXwDUZw5zHbc5u9NU8DomdVY2ukH23Nv7D",
  "key16": "43URbsebtcxrmngzk3ztYHgbHQrG2jyR4DR7C5xiu5NVXfod4ZdKVDMumtYLecASdeoi4zeRyZMcXdGeZKzCwc4W",
  "key17": "63vqDJRraETTpyW7JnBZF3h9UFPzcBufYpbRN33EhhG2BK1S345JVyBL1yvRMdbCg3PdSbbgGRSQPAh15b75dAZD",
  "key18": "frYMCVDojPojeXsVi6XDNwgtjrcmCFmgiDu1gFUXurtAstFgZ4L2aLecbcfVijGNoYaAQz3XjdtECuXmnTXAKJh",
  "key19": "5Ukhv6nBAdDqnZLv8LcxDAMZet5JDaMwQ5zShDz9uP7VUy1mVciaYCTY7TQ4QnXconyhGjmB6iZBqy8btPiZgoWW",
  "key20": "453tWN7g9LUqsYr34xjQBVEULH7q8BhFiDRNFdDyMd5BZUktV9KUmGkmxUw4QJXfXN8oFQgnkdPcU4mdoxjxgSNf",
  "key21": "5juABtHj8ha6SNwWeKguGaFTi1ksBFfeTSp3uHxFBrcrM1UdfGwXspwbUsqjqMDpxzzHhfrW1nUCdMr4Qk8uRfb4",
  "key22": "3nPmJVd4gqpw35Reh2UGqgkDHQgtFic8P5YqhiJkT4ytiiZaDiEFqWTCR7yPxb5wkBMyeUNRE926sfWJPyWAAvkd",
  "key23": "2XFBCF8FqTiwEDeMrHkGRNAZN6AStYavHCyDUZApSkVH94oygRVkvW6qBZPH4vTFbWWRg3Etcn6rUVZfETqpWNad",
  "key24": "5zVcGJjK589sBuaFvUJsGdh2Wj6D9ovJs4UhrdZ35VnXtMBfN49D6VUPYjHBCXBi2ksCSKWFjgkeYmfWM1zpjkwY",
  "key25": "kTE7s5ZcgQZ26KKfEpjfbTJznmwuJX2kebdnjyAV1xj9Kr5T4Nx6VoyBhdbGmhaBzFj6h4eG1UWD5p1SwEtcniH",
  "key26": "55vtgrHgquYdD13idCHPzsYHSYdH5QY63F3jsJVfRqhSFNX9jX52HRvVrhAmUKaipBehhjm9gJcNPbaJA819diab",
  "key27": "4mnKudcULkH2LXe8LjbkvdWKkNtma3w65xg4LFFtrJNyA8mV26YPssBFPELnASJFiH6U2a5dME2TGQKWNmGrtDC3",
  "key28": "3jYzZojXMwG6g6Xir64MDj6APXzLQDykURsV9G1YT6cF1yzTM21WxyFay4eA6iCsC11sLmhJKqBkmncUVv4BDBzW",
  "key29": "64YfgzizUJr9HeYGMYRGBTDWuDDAiMLDByij5DCdJcba73wvYiwjNUfrVdcMhQt5Lg9kQLckuY9PsZzpYF1jaL72",
  "key30": "47k8cARTSsG2ogMLBVz38kWNRySrxWJHrbWaue5UQXJkM5LRU2xaxFKm6Pt3MmmoQJG9wzjr5kUw2SSYJtTjQaSJ",
  "key31": "4BTZJciizWsXVFkeCnnG887vvQEQxyBxjbi5mUZVhwDecZ4QeXFapGi2zFGwPbcrn97aKByTLMzei6MNfM7RJgyu",
  "key32": "5YDG81x58HGYr3eSTdaAKcP8aUT2Zvma6rFZj5MUaeeRJ6u3q8jA5bFKBaVJ7Sxe7Dw3nZ7nySRyEbt4LQGLN923",
  "key33": "3YziR26KJfkE8XpvV81nixHRuZg2Qyvs3QStdPZgsAZgwUDhAEbAYERb56gkvjERXexxPkiwbBHP9seT8EAdgzjS"
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
