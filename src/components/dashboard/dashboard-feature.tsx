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
    "64XW6zAoEuoCYvQ21jjU1pwDQSDoGL46rBG7ifZPzfsfeykipcVMwrt8Qtq4hXhXWjrXDkcCatehSKu8BdRTA4mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65VdmwfxDGhNGTMnspvNiReqg4JcDzF6xsbevmVUG2BdqWKgCEmqwYcmVwJjkc3WHtmL3oDiYAxhSzDkMrv92oYB",
  "key1": "LXU2sBBEMt519bKoHNP5nskpmmA96FrVdi1mfozdrYXtvNrKRvra1TBA5qR4Zow928LYpRasWyVUBkQWmvxiSLz",
  "key2": "33DJPBh1fnKvmzff4P68y6Px9mHkDM4mcQwherz7m2rH1fFZ1QLH5oFTkkk7bLEGydqPyP5Mvx2tCNDwY1n3edS1",
  "key3": "39EDhSqjUMu6YQMKwEhXZdVmdLZ2oM44QiLvhCRBuDyZSqxhqAhdRPSGrQKozYhkiAvbe32YpGqNMXdawaXqDN9g",
  "key4": "65Kk12qcNPW7peyYkQsdNpN7b3e7EyycNRZWacybSDjac2mBr1YeRfDfhCJnMHMEbzNL1NJyTCbw5oY8UvNo1UGb",
  "key5": "1VuFjv7aUp6cKdMNqWSUmhMVT1x7hoAw5xMG87TkcnxdHDjC5kRPuWkcJLnfiRNYHeaKHAJZvP4sgSLc8Pnv9dJ",
  "key6": "4qt4MYrWRN7pCAkpe6VyzLPtjTmyLZanAsSfzqh68Vtwtr9T5VmUC26XXewptUmeMNsbFybkSJTkAQfxNrkehzJb",
  "key7": "3XBrjown4WUg3buAGZtZx27zorYFUfM4zisjxLaE67zLREk6p5Dt2F4KDZQTdpC8sECVxqNqfm1fXGo5gyzD4Dri",
  "key8": "58dUFyRASHcvTHnpKYSQfxoq7nVEnL6QmCqZWWTR9x7K1MtnJQRZHFc183aHwyMD8dkFpLEXf3mFUUA6iE41wJFk",
  "key9": "3duj1hFXCzD6jQj2PpJGTexkxkX8tiAuuA5GcaWGHTcoN5N9PSJUK7EYW59p8BUFGTuNFf3gdtrKciRcm1Wi85St",
  "key10": "3C7gFYCs9AAWMGpffQ2UgaRStmRU9MBtXA5FARy6rEUA6MUvHLi7eUSrKKRUd94UyaWSPfUvbJ9bSE8oUHgepBtN",
  "key11": "5ztMn1apt7JbAvRcne4y8ME21DrWubH5UFSf8osJKbwDPmZjkxBpWvwzHuodPMjHq38dh18VawbDMADq8fknHrQ6",
  "key12": "59cNSKDHGwG5sCLpLnUDxM1hMqUdSarG1iqKW6uXWrwfWEK4KeUXopgRZm6mqAc4JrAe4KmudXUrahBtnWYj7x1z",
  "key13": "65svwGcvtEjJ642DX1ZWxbfBu6Wfiqf1A92hoogbAjR6oTNZcKufSWTGFUKCPVL1KZPhEJLLkceuXD3HyMbBbiBB",
  "key14": "GG6qGTjfsuHkruE55yLHf9suXgAoKYLSeLvDvQYVs9iLR3WRMDTAD3qcJYjA1xkywmZarvnh6GsnbAy6pjCi9Hk",
  "key15": "3QJkQaYBJG41j7CzSLkhYZLSsuHvQCK6xc1vey5fkTYzFwjD2WQ388yvzWQJeu9An5Lk5RKAYWwW1kRaH5E8SyZ",
  "key16": "66M21vAHr51VpnMxKMdqLzbYtdPzQQmZ1LCiczcppxR9cd8AJWZTy18hzp7ZLmbF9BQjVL4ahWY2HuTFw2RR1g9a",
  "key17": "WbWAYKPawwYxAp73r8gfU6zTNkDqCKyqLjT79VHmHigPt8y3rnwkTqkWsiSP7o4kHbNNgcFoMqyJzTDm6dMHRyc",
  "key18": "3Dv9Nb21UeCMYcR9HKsynyHL28gbFEdeQPbttBdpg94nwgMsQLFxhSGTYTzRae4rYZwbeD1z4UFue9kteZvftmfM",
  "key19": "2PQBz2B55oCaTGNGJRMFhYyGjUTAK8RpLEz8fa9vrnREBiPZLVL9DbnRehAw5Q53kxRhB1zLJFiey4xGK4rcP4TQ",
  "key20": "2ecN4s2DQHnLe1hWqvibV2eNTt3JyTYgtJ6JNSYnqhunznbykgXhecHgKmhpu6dExUkCngzmLRsTCXZXt8yZ4JTZ",
  "key21": "2i98R8dXbPrkcUQLXLu6Vt9jNt16BXeBAgRvWkP66Lt9vWiqy7X9uAkB1i6c2jP197BHnAWfXnyRkf7xJWQptMLk",
  "key22": "49uBLLk34pv26opWwfcnYSvjbjbmSE1drQh5ZPxVtJdKfAd5u72uDSL1mDmXY8ECDwh2CBBQRxvfShoCUpY1Az9f",
  "key23": "4eUDKstvHgd9mqfZSPCyKRbm4o1NoEF69KfiTtREgf3FhtJ4HAWSuxnrMrwHVBcy2vXcALNTWkCLvewnggisDEcV",
  "key24": "DF78C8KQpX6DiwHqzUGdqdVmjGM1HiEjHL6PBagvVKmWHiHvpApfhRGXm1rY5xY6ftK9emp457W8uvmCQrarXTX",
  "key25": "4LhAS8dKF1jZr9gyyxcJKhdsE2RhArMV96bwcuJumLCVqPrmv3kKWjZRRkGd5NKCgxjnfj6W8dsipLVJmZV7RrWF"
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
