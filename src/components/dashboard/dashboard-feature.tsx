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
    "48N4B2tWio7CzQxronAtp6Uj9x1jXFPobzi91PQEYvvuMEw8cCLEhb4WimXNZyuFGarjtWTT5thKcXWSJPLGr8QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jte8KKEkJuj8WEFnR5KZPSvBCtvTpCeSJP8a86oHosTRWWUb1EpEfCcnrUaEoPuvvA4XYkrngR3ehmHjHMx8zme",
  "key1": "2A4926iw8tMBFLEgpde1DiQWJFVFxpmkPyNcRNs3QPM2GjFHJcRtMJMv6sTARwwUdcxsTHyMcsHF4Xm2wBmivmk1",
  "key2": "28yTAPRWzAQW5NvmSt3JKUqjcpqLKXzwQsDbtfXDcf6Xk5ws2GwNJCeDqFsDqd5XhgJtSnw6ToK4HSDhhJizeEqa",
  "key3": "2YVWrJsCGLBP1iNE1KTJpjEMRJx7q3xQZEf4qHFfW9fDxThewYfqSRGTsi4BpLnteUmmqCCuae5uZgJ3Aa6vN5vb",
  "key4": "5EYY1AZQdL2Q13CgRPPPBTYN3nGRcPf1cxkqQ4dB2apHSEXwXAqNSD6YFPmAXpzo5XLGmjJLbmvFNJtBtZEsZMp8",
  "key5": "3h57Ma7fANdgaN7ygeRc3hqZSJt3wZ3Fz8MSUCw32uC5gkAXeX3r6gdwA8a4nbooHeUhyyaVQ2YkMk95hziZm5jA",
  "key6": "2hZdKbxKQ8B7SGakN6ST6L6DRoEknu8NuFHm61w6v9HJhTLBZndx8JWnYNPRpN2gKtZ3Ho9f4MLfwmD7vpoBqyZ9",
  "key7": "31xHJ8xTyrV46Q4acDM4dobB3exoEAAmDZZCHzHpJ4jv7jmLZMYfzuxEmnxTrj2DgEYpfxZcH6FtYzsWDpKrWEfY",
  "key8": "4vnp7UhsgpdiLr5VeP4aFm5gqQJFqzComWUJ5jfsfaLLF17qSR5REcf3HDNbxngYNu1iu4hYqUc1rMyUbFXd8VVC",
  "key9": "5Qe3FR5t4bsqvZEkgVe3pFoeEbgGrfXVhVLwammZXRaMr2EnEswym9H8BBxKhUK2nzrdsPdxzqJs9hFhFfx2ztfs",
  "key10": "2tMqJepBMcfL88tFh69UpgXCbstApDzRYWPCxY4R4pzcaEgk3QVabVeH9eDWvj1YHo5Nqf3DxhvqWsvV1hFBA3ZY",
  "key11": "218Jr8G87VpHMGB4KPABjcTgw93W3uqi5qkjDvzK77JtHNUsB5fext8p25zNaWwYsyCcoQuGbdw8eeBk3UoDmdnU",
  "key12": "5VRvGWeHDMD3WhaAAPVXVGMY2mXh8XtT3o9hUJ9kS4wJpageqNWF3ymkgQZsSvw136we27jPmnp5Q5ydVFPygR4A",
  "key13": "5zWpPk2isvGwH1umbvJr6DtsEeSycmjaURE8oywgFmfMdCvZqhAjtMGdB3Yr5i3vsSqWsJjF2iAAd5UQUsZJRuVp",
  "key14": "2LjxMHQ1KJrNS6WW8yDteB79jPJ53H1XtsdWLpMkarUxS2LbM5SRRazQyuFwzAk7aZgnfJFviQSDtLBYq9gxHDmK",
  "key15": "5A6q3r6JgEDscHz9MGVJxXdhqYshbF6BBMjwc2FaWPfPrg9EFpSLb9bi5FAVgkJPBoUhMoE9Yh67hCEtzT6JRmLk",
  "key16": "8KSTeest4bKujKCPUqVGGLmH4yAacB4Qy8vs6PARz6KMhBiu2E1gZDr2N2DUSw9LhvPsamsSJqTVgwnraXyDXyZ",
  "key17": "5fjbeWj46drYrs91DeiARo2WWkS8bWbhXaofAbod3VKTbGeyGHGrKBTowHmMDJWeSonwJ2Foj2XefhMtgBXEjbSP",
  "key18": "24DRAm7mZNJ7op21FiRcxmBYUgiVd1A7C7Mhfmi6ZV5DkRqFHpmCMVUYrDCrryhkrQ2dqcopBR6tCVqsbEskS9VC",
  "key19": "3bVFKLaTbNwHgehUHG16A83b2AGM9F8G8V15VSTsesJAPRyq2PeBHWUA4MfpNfKxKKkM2JvAbUVejh5yw6sPi1yK",
  "key20": "5ms7dMoAcFYFePfquXbAvXEfQFapGCbCFmV7MLtnDd4FJ2Ke7yZkKc6EC8mcHuWw7NTriUhkf5dGswxm9bV6TzHK",
  "key21": "5PfoCFr4XfHksXzDkG5EQ4CHwH3i3UdcDMPYATcyi21NUn6g6otvGdv51RAQkn8DnkcQxDTPrAEfvSxhGB1MBS36",
  "key22": "3baxvVM8ZZfKKP41JNm5nuacTPd3joK2Nhvd5VLhbcFHNv3ioe5qJzvMiVxYLNqRTWQSmAFCrHsyjbDdr8ZcXYBi",
  "key23": "3AthQWjhtVBRvFD8tU2dD9ZtTWtEngyEMLCDFotCVyiMrpNiM9dD62hw9TbeXMrFfVmJeuQA3RwxV5rt9aWgi8kG",
  "key24": "3pQ1myqWvwk2y36P11vo7rZjeNjTd6HoyNonYVU8Pkxws8yFp21FpzcvWwpCBucuRT1yzAHpJEzrePgZVnqgnyBa",
  "key25": "2i35ZCBP89arP4DN4mvVkQhSP5Ka6xpycoLHXQk3TPQ9qJne6ujxYpjb3Z5bQt5qrCPqvGn6qRKhwpxrhCqVkFkc",
  "key26": "5LMJArbYCQoZGt476zqAc7pjshvt4ejcNcPNQFznH8XZ55RvsaY5VpKmA2jyDvwfcAnS5SgS2Evu4w7HLouHzbK7",
  "key27": "5mTqZnd1L3Fy5eweUnsUNHDCoMP5mhxDEzBAwVVAv7d7HwdY6YBGpEqg5BAPQtxbjLaGL6A9PgxeZEvBveBJhknf",
  "key28": "3eK3GpNtXLBHEuuYtJADe6PqEdi4fMb5mdFqNNEPPvi3jLiS6ii5u4D97hGYmzsHoTWgc2qdoiMHJ71wwS4xTRnR",
  "key29": "5jVXjLxkANwXzW6nAXJUhGrd9HYjuCKxXa6k2YMUeJawuGG1RpyeJGdmCevL2gabqPqibc1woSiDPqhg4QDfuM1v",
  "key30": "4V6LrLA3pXErgsHK5pvWxD4nzbknRWFp6utr8D8rvWkk75DZofSDbBKDdkMpjK2yJD6ASogzRsoNY5A8msK2XUdX"
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
