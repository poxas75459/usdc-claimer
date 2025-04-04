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
    "5ZEretL6FBACaFmBLaFZkgQCN432Wti94pEG7n2NtmkPwmegxh7ZTBE5a3dSanhfKCezhDN8mS5kArdKWkgdEtKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XT7fkp2HGWESQ5bGH9kswvFQ8otanfvoBn8smTiC754oicy3pRr3HfXYohPqF2WvMLzYJNKU5eLYapttcTqTYHe",
  "key1": "29REcyYZo6aNSMRF5FqYRX1b5vG4DzuhHzPR8KYee1qGqqyhstRMd5cfd6cUthKF6uU2aCXm2dJiNdJsj5Q7vqEW",
  "key2": "3fFySLG93tuA5T7XjBKEecuRZJJ53ZbjTRDi9LFMmQeXJfMx6ZuCNa8UqyqGy886LeGfDnnSivvjij5nugyJ6GCv",
  "key3": "RySR1ZZzmxc1vhJnQ33FmifncFS3CaBhui8V6QK1d145LHZCb7vmth7NmXkoRCG6Yr2UCYEfdS97pyctVDcr3Lb",
  "key4": "2bQj2YcqktCvAXsBoPXszfL9g6Zid4tRLx15STc3gQNH4PrkzjZ7MAjBEDsdf2DR5Ka5MpQ9u9Hui6jLKhNmBL3f",
  "key5": "DY7quSskrYwgh2dpLjgei7oWyrJ5mdEU94P3B23qfQscuwXXTFupjvPfr5cvNnMGaYedokC9KyVSe7W5QtVvKeq",
  "key6": "3j5db4cu5twpsW8FiFbvRFf8MtGdfQpKiLPCgBcDspXvkHHfCKkdSKJU7jdq3FLeQcNtWd92Ds85mNYt6DrpcFjM",
  "key7": "58K536V2dYdEEXVJQoMQxu99h8NqYCFVoofj5beajYgZFwTeAkAKVm4qxJTu4WcGr3t1muXemPkggtGFNbkpaqvS",
  "key8": "5b49fE74rhN4SGo45VyZ7G1ENpV96o9XFM6XdUnRqgjAxiG5J3pdkjXiaz1KLhWN1iymCKhpHgfm6YwwxWsKUbN3",
  "key9": "6uMNxQ4kXRrUJTdx1K1XoBmFSZKw13RivDmXceegPmD9wqxv989EHS44JAUhpW6K8UE6VLhgu232gNDtvuUyep5",
  "key10": "5wXWdgqU4HpUKKyw3hyZEnZrASJoedRFNND85dECehytvmS1zsAUTsWao9ZvzeR3JXk5Vs27iki8u3kAipduEMAM",
  "key11": "35BbzBWcLfGpa1Dr2Zy1JE2r3mTufrLc6PeMyP9qQrmqtEk8Zma5GDJbqJazK6xcPYM2t6EGXAzpoYXrkUv1s3YH",
  "key12": "26dr9dqEXR5HorGxPyLwfgLFv8Nv57972LHvyqroShXJVCjEApKstefQxJNcHu5Sm9m4rXk1oapaL3jnULXQHG5E",
  "key13": "GNXZRDRmNsBKuQhFAp23wiyoQfrrtMvFAtrvhSv8GTukJhDte5z42ai7QN9W2vxg5t6zZJmMSBa4QugtXnKyixg",
  "key14": "4tSiAkseR1rjQf8PUWPuh7haRRMc7sc3xj3fh3JLQ5ka7zPKSjvpQ9da8kG51hr8zTRshbN4L3WGiHrD1EUff2ST",
  "key15": "3mNRyrPXV5kL9i7UdAaWATa2o6dB5tRtjc1VLRtfSPcMq5sFJES6qAyQywfC2cqLGjZSgy8Ly2xfkyPC9Dj6nb3q",
  "key16": "2zKRd3tU1uuaLNhDQPqNT3Chp6gGna4gWGCAA12xig8ifuyfLo33oMHYjLcvtHg13mwjTNng9xZWMVkU4nYknnfY",
  "key17": "a4EyfZaLqUPnr2zjLnKWhafpHABBQ52MvQUfbwt2YuESF6G5rFypBPRCmqjp46XuVVqaqsd9zyUHuKbb6Y5ZyaB",
  "key18": "4FWVXVCjX2JhUherZz22n2BTE2CyUmC8gaGfPD8yNJUUyzBjM26mn1qqT4HHqm89gMAs38Xvmys7PCKSck9D9qzQ",
  "key19": "543Sqf3MvBGXTebMs1yHSjZbzRpYP4FTP8QwusWpc9MuxnNdZp6FdTtmU9gKs1q4Q72DHSZzap56KNrX8gNLJC36",
  "key20": "4tarxt9RSPryA7VKzKW5ekKzRvdY9n9QmDmmhXNiBUNccoswcHUVxfvGngjG91512c9Svk424d2G4unTfPPXLRDV",
  "key21": "4uGe17L1rcByTN64B1iAS1MVVgWFyjaEEqcSJBLcNkytE5opspmoEyP5woD1hGYSBP7SCe2ZLwSMFSagmEL9WHnL",
  "key22": "FcQS7xSR5yngG8DrHZ5nukUT6RgQJPHwsgQsmxwT9Cz4qshxyMvy3gPBwFCVgxsS7a4K5wbeBJkt1Car7F61dCT",
  "key23": "63xJnMAwQPfjx9zTJsh1BM7sSeuJHC8ZFbfQVV9U6Q67hSNtJiXkaQhcq5JjKj9ad9WmnePhaXsTW9URma3fBuif",
  "key24": "4a6f975HV1vdRzHoVEhVi2ESj2UJBXsSuc1ZzSMheoQBcMnPrD5NbphYfofxLDEf5u6CYiKhGG6Hw2hobwZ79qYc",
  "key25": "5Nye3ov2pireXRFgPLnteu1TfNRfpzMsJnAmcjngKfDTzMDjoeDLKAGkp3uz9U3hfrPBHSRTzX6UsjK1H8oQjgtY",
  "key26": "5XjX6V72oW8zKQoUVmhNzwsTvsKeVLQcvnYAopLR55m163jKutdENMXwPHXXz6bcgVD3vWaxSZ7y3524ETdcAQg5",
  "key27": "5c6DpohyXXhicfhYWct3hATVe6ivmfM2mt28dH45urjTp4sHAHGMw297uCK51dyxxN1eAyqqS6kxNaWN7kCZgKPF",
  "key28": "3cqF16q2E8BKUE3Y7KgtnPUmRVkGDiJT4VGA3fwvE5igXAVhoQasb7v4Av4kcV6QmTFUQ2YTWHYu9Ptyp36HYPjk",
  "key29": "4T6e5LygR4shv3d6nTqRB4TeFmSagj3ioax23zRBnncwGwBaV5vhn1JhcodPSCxmcU7iEA2c6UNjM7kCJoPjm3Hr",
  "key30": "GNMF11gkT9TzFY3whW6ixQ8NJiK1fPq7vpBFVPRPMM29cjBGYCdfqHYhjgU85UBPchYXTGu9pLhTAubNrWQ2s4w",
  "key31": "2CqmRjpzS3Q9vB5J5uKAHgCTJCP8Lof9kVdmFtCq3VNhdUGaz3gDBrbaEe4PBEiNffFYriYBZQeE9MExSo9oMSC"
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
