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
    "5qghw4EyncHVGUFu5EMA4E5hKFo4XDspp2LR35NA8ACyDobLxLJBThEm8yJzxLvLsyerCmk7kNJYqYTr7yD5brvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zgkv5oxEZMajRwbJnKwFTbsHYVndSk6u6iUDi2MP8ZxA3n6FJWj9Wb4AKoyG23GHsv6zntsHg9yN51audXD5v93",
  "key1": "3FNHGDNfhcRWhvzrm5JqzUbhnuJH6p3VgnUvSaDBffdZCzsKZWHJDkg9cnkPJcfL6t8qjivZ6XjNF7xFxzBTdSX5",
  "key2": "3NV7kmYiMHaGZKGcB2zZWskpr7efgTTkgfKC2RTDMiqtFRELyWhpDDZ8WL2PKwidfDSykGjeG9PJA3JY2Ef4LBB1",
  "key3": "4cCQyCuMxr6aPK7tUdd6B4dTyWbMQQLUrgCtXh1fKPca4mhQz2MXwgJVeShP9fW4YpVFMryv7Bt1iDM5TJdfHapD",
  "key4": "23bu3mRD1CEBCWCpPmGeBVY8QU8SFNi9p4QSh79jjMkWW5cFufMK4b7gbkwD42knFgj4tTKeLNDJXwgrr4iZjwMj",
  "key5": "2EEeychEJgNrTTeuSMFnCbYajsxWe7dGBK5ternJVnGT459BJ3ZjWbkK7Gh2SZWrQ5d7NrtNxz9Swiu39UkncmGU",
  "key6": "VeZCe35tu786VScSETA3c7RGBTX6PVqiaFoFBq5tAB594vxAM74EMsguNn1DaMS6mjQhAKk2mTGEAzgA9LTXE6d",
  "key7": "3HNSuGnchZXofYNczDzJSr1Cwy5gioJrJWSa3YtFqS6632wsCUoU7hHf1H4ZEQ1UFoMSBUA4qLD8TYRDKJRbdszG",
  "key8": "4pEJjeTQuf91D77tzZDYrRTfEAKPieeVpUYfhEtY5BXt45ePQi3odDJpyrHQR35gKPWZSKCM7vRnBh6eacpsHT8c",
  "key9": "48mEMcVhSDRM398VoHScWcVrKhs3rWP52ZpbNcFAAWbyDJ1zgVv4NEXrknx1wigFhiqwi9ACso1fPbQy13F4ChPn",
  "key10": "56ZVhnxSR6kKoJCKuSyJfAX8L1xzC2D19jQyBqnSyfDL22Nphg7paehe9pDXf4ftFTf1i6dDqBUbpKdVMBHxeeBw",
  "key11": "5qAmSTCZUCGUrcVRsrnum6HyppGj3uZ8VokSTqpNSh9EtPg8yBLFrUNBrAZhs6N4DCWfxuJmxiH9grzH3MhYSt5b",
  "key12": "4qSYRWr1wsJ6fcm9CzqnwfXB7R8Bj91cjrNm8EBEGc7owfs6411aZuZC9mWh7em2RtAWZoQFrFZV6mSSM5TTWbsZ",
  "key13": "b54m6yqkSZ7PHQn2sj2fN2nmnLw1hZxjYZPSunzZKdEumEeNhmbs52nCuFiwiUaFBmSpFLVqx4Uua7x5dySM9Fc",
  "key14": "3DZNqgfuioauuGoLxP3bTwYWrw56NKrEUZrWhfHHNSe4FKgnEVEXeABBMjwKq1CUnTi2y7Ne3TefNW9YnfmQQVSo",
  "key15": "3NZSawEsGW9QZZQQ2i3QTFharxVuvXVWmah8pVwis1WRaGEgdHVopgdoVvbLs6KUi1xui3Kg7JqnhtTiS9gCAZGa",
  "key16": "3JEXtZkjTrToZHonJNE6jTQvgcyCM5wYFNcgM3QNKzrSYUzywWvzxzH6G7saExf7NNze4xAXKVbXzt4TsEdVT5gG",
  "key17": "4EoYYmL14JauAt1oAid2J5wQGz28CbB3SfJe8kEdHWhar5JhJnKrnwTBe1qE6LKDDm8NbHK4FnbDyKKpm9SFc8Aw",
  "key18": "3fW7zFWYzcH8MzLYcXvoeLY9WpFToZk6xQdrAuBi6piWU6NBvZnLdNFstYnEojtNVsZm593BnfRqHQsDADuNCbPY",
  "key19": "4rMbP7nebrc6keCAjuRZnRgJizWJd8qwHVMBjpJhLRpHVkLE2uMJcWEHSm7TCkkkYrzFvoPQb4eBfXMsk71B9pqj",
  "key20": "24tNuP9WEmfRMMSkofJzxQ8PYqLHzrWCZu6DAXxZVQ2kChyHXsdJMhNKSgaBevNpnkr2esw5gsTqKQYetQPR63N2",
  "key21": "5zh9X2fjvyU4rBpTzEXK3abBKVGDWLsWDfzJX4iFBH5JM7bwsJMW6vfZ5csUekPS8FonstPjQzSEsnevcGdEftCn",
  "key22": "4PPyHjkgjSXpfZLGRLbEA6zCQhVcKuyw4psB4u8CeUVxeSDQCW3dpsNMwVZRRax27VWgQz66r6nT9We2XGoWAnc4",
  "key23": "2U4iuvHqT3AxeKjWRRcJ7AkhD3cytF9QNyBFWiiFQvf5RqVgkDDkiUq7988oZghaxJnHp63tqizpVb6PvPE8Wt53",
  "key24": "5gyy1ZfnSKSEur9vSN1mtfSsxtWwAwgUoXFUzuroURamPE6FYbuKik8x4V7NdoUxrx4C3svc4bQ88geFjJjp5M4s",
  "key25": "5EfstzDckVYMiJA1J47KkdoLp1TSm5V1zi8SGk929XrQnYfYJSrEwbMaaRrcvEVyULyB365YXq846D41UaLAt639",
  "key26": "5kVBRdewfpYwe3DchYQpUmmPLnYeW47AsY8AcLKh1vqtPFRXHYu5fBRbaNnhdTxN1Boi24L4BE3RwF6fKiNusDjS",
  "key27": "3cCMoA9TDMbe49ub1sGuNHafBkGcvnTmT9a4PVdMToyfm1bsN8MWi3kP4aPvxV8wEYXTxdzFPYG1CfVRoWiZrYp8",
  "key28": "55pP37ztrvk2EDMskU1ySW1BQXHrFzEXLrn16Es45EuUMp2fg2wWikV28rNdFc1AKwjgN1Fx2d6rqFHAANLs5Z7m",
  "key29": "4ghZu3WWeZ8Gkv9N7EGeUxbNBRuUDsRufvuFZqoFDJBg8qNnHRKzLoSL79kR2RVQsu2cDJ3CpPUXHL6ojvDN4nNF",
  "key30": "2365GUaRkxk5RDoiN21iRaWZdob6ncRatcbBBWWqGihggaJGzYGwGc1jBdcw5hBarSx5hdBZrZwJyGSPfJRVR7Vq",
  "key31": "424DcMvjDiWd6G6zfAdcLHGvqf27aEaTXPqVMhkhFZExSapkz2j7KAMgmJdeN2t8cPxvUbqdp7sntP9JCnkLk5Ne",
  "key32": "3S3cAXkAT36YBrggustn4SqBMYWqvSjwE32ZwBKztV2DkG4neuQu8nJtno7Qb2Zcbe2JMi7nQWkfjUJF4PHpJvsV",
  "key33": "UALvXiJkjpVeEQhF47EQW13R1u8xq9QPFsqT7ExvfGPqtYPxdM5RQW41PzDfLasPbw3VKTTiRSn3SJcibHxuzrD",
  "key34": "4ZNi9mYUvzywDTYTv23DxT1evtdgkDNUXQGa2pQGtDJbxHQu1pUwDsM9QqscBwM3Hiz24QCdUGZ8xCyTjU4aaXAT",
  "key35": "5XYZ2BqP8F35JzmZfwFpgWkN3SPPBaMqAbwyy56jGjTfUD7cFmMZ2hAfY9BRGPjoVkLUHQb7hVcBRfUoUAtVyC8J",
  "key36": "5Z5JpDYgUR5tX1dzx2J3gNeyMvqtZDjH3afQGpDEQWwgxGVeSAKvDRjFYE1iw9FGJbE2GeB9rjkz16MuCqtWSNkd"
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
