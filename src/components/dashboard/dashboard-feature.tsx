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
    "2KCcxJ873xjymRBC1Xvn42511u59jws8SjiP71iWnz3WRDu1yBVhjRfzFMYz5uJbNvTKv5aEXkoszv9oJqXE9fC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6HHjkjAMqqsh5trBA5jY76ioX4CYU4sVF6aoTCtcLUbamqkC3raNMK9Sj7gLspo1wkGAQuaEtW1832qGdnmJT1o",
  "key1": "5wm6GU7WPPR5e4Ec7RijtuD4C1mYSEpPPNpXSkhfcLU2zzA8zDWqZLRHYhXPmd4FmayRQ7rRiE3T67vbmoihJrWW",
  "key2": "2kLXM6RZPyHhP3o4Dd47J6LvPukiW3LiHFN962ar45p9Ptcuo1WmcBm74AdFmiedPyUn818MmQChJud2nLdsMf2n",
  "key3": "KxEuqQA1qdSkod8yEGvURYXux5eDq6f4oeMYAhXVh2hGPpD7GorYS6GZYA7YiD3A4oy1LFycTitMmHr69Q5RQpb",
  "key4": "4XBXTmFaMDDhTxhAToUgDdqzzNstMgDQPeFBHzTWAiHvCvaQGdzRqbZMipT4cajAN3UuVsvSdzx4JT7kwE2Tte4r",
  "key5": "2xZT8fCaKx2grb2K7CZPwdZJk2WXW7ECjY9Y6nD5iPFBPV3TsVrLA4i6HQNtHXi19ti1qYetm4NcD3qJmU3Bw2kn",
  "key6": "LwqtQUzVujWrUNEVnxRRWRn1Ft2Uem121apqhtzAcuDa8CdmtNEZT5dQWGmd8BtjFEtgQQu55fqn8H6GbKPppQo",
  "key7": "25p4zj5AdyDTiSREQBWqL38ZPT9yU6ysDdV3StMQGTTotioWC4AxhDjaAy6Uvy9EsGyoYjPyrLgY6T74PvKXQdS5",
  "key8": "4Fb1vE5a44tJTwvR8avu2Rh2qAAq4KcipMjEcqnHHzAsdhQgVkT2S4rcEhyycU9XThSEzrHn3v4NS5v99NSvBoDD",
  "key9": "3DtLPGh4vvfbQJVgADxVVqe6PVzTRiZYU4dYVkK5MZSHstQJBmpat8mZ1dYaM8wsnkkvWB2iNY252254expMPxZy",
  "key10": "4ZFHBNB2MrGPtYv8yy5uf6pZK4VDYb5mXZ9igcv56NwJQwiXNYqfsJDGeoqWTzesuULPwMQvsjREZSQ6MeqPYHPH",
  "key11": "4EbzoFCrXYYBUHhSXibGuHaT6bnnNR26uEa5o6GytTcMsaWGgt7BVytKSAeMwEQ8yCjGjpEwokz1WqbDr2nUCeSS",
  "key12": "3mEVQQPeZmbQrZa4motZnvedemP9Xtnr4DWKuvtwZCGBvixqd4HrhMT4NcTzxRsYovwDPqDNx3mQ7uyZAeCta1dL",
  "key13": "5D1DN33zr4eZdbwUXFCRe1GwGQELoEe77Lxj9TKUaz8pnaAnJaHDt3wZcCTiumRFhqVHzKVci1pmTvMDUz1SeeKL",
  "key14": "3iqBfAzC3LtQPAhh3rAbH2VZ9YKNqwrvgxSJZe8Y8EbrAxp2aeA3WFmr5rht2JCSDk15j6kRhtJYyprbHJNA3SkU",
  "key15": "324Rjc2kmfa2GDrEuHHSGgMW4jzfftWCFg9cgpN4QbUTiZ7HnFF5UjeJgUwnMFe7JeDzBrcfu5tRaGCq4FNmHcdF",
  "key16": "2BptKfk4M6svSQa9hAm2EnUhkF9cosuH8P9p3HGkAMaFpdvfTr2nyTD8yGtpvps9aSSZ8eKxd6s2jvsPWtsrymgD",
  "key17": "2WjZWrXvkkJ8KWZn5unNBvmW6KqBkWpiVXA4T3G7WzT8ZUeiw4moQadtPGWBi5XiCRouWM8s5cHS9RowG9fUpffF",
  "key18": "2J9RZD3rDVksj1vQYJyLiKZQLHqVmmc6WRERZuYiV8GsqAoxJn8zkUsrMoXJfXnCV5D4g7eNL2QdP7SeZiyBwQaX",
  "key19": "3M3mNZQe4XMHdcGuWpyNcTWyYrwg2pv7MiKevuGJ54mjJNhXeqNAgUNTPNqRBGwHY8VFEsfUiyRdppj7v7MhLmRj",
  "key20": "5S245W29TKbVEQhXBYe9hrgbj7DWAMgAF5UUwHjuJioHyw9YiLQVhqMkgZmXvhuK717ToeqUNWah54rMEwJqKtLj",
  "key21": "43S3wHerHWpFdC29fhg778YvEbzN2YhDivL1Ad9jAcQ3xtGFh3MD3Je4vWSfkFuEmkX86iJeKtnS6ixn7jQJCFQw",
  "key22": "3dHS6LeuUNeZ4h8oumnDCXSLD6qBPpwuyXpF6EVFLYqHLTgdZt6oeVFSh66CEAkhD1XeRTZ7Xgn5faJuCtMSfS9V",
  "key23": "5evfM5FvzRNo1KMrJtKsfyTEiYdv27XmXJJH2NeAgc45KBH3NyLRXgbEXSfc2fDh5mZJyDZN9G9VJWL6hwRykuLh",
  "key24": "MpQzW6YhDrrPziB2B9JUD5AnuhyJVw2qsUGC1jgEJ7JgTpTbqXgB4RU8t9JdaGxEYmDhDMBTd6dAhXX4hh4L4aE",
  "key25": "4PUZz8Aa9pXbczg2jmuJrqhrq4CLgvMcu3ytHpxoQiB5AFdhg8tGEcDKQHTjyGmxNhdNnrg2JZN9Nn7euhzFoHsm",
  "key26": "52NhE7XWFpmpf2LkXwSkAW5MJygwZpCqkCaHHhfjKFgVTsrefLZGk6E1Jz6Uu5qEMDsLTumiwdDRZCBtZvkJ99o6",
  "key27": "5i2yCa8PsusEd2MFHDa4A3R1CEWaTJhb57S3Vfuvc1bnvZNYKTKRG382Ao7E6UV2aYafWRUtwMpEvkhQ6rK8FP7Z",
  "key28": "54Dd2skSncZAHxTX2QqLBMLnFsHS7tcpTQThm66LRr9WBvHqyGCqJPExcG6nPTZTz7rvjUpPh6irFaDy2fXcrSsb",
  "key29": "jdU7oyvxCVRsNzsyXh66R5Ft7gtPGazrz7T8KgecpzQJoQwTLmhCLju6roerypqrCVWg6hv3JPbQDQRN2SAVSX6"
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
