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
    "3vPzbKhXF8ssmYyQvnmWSFvder6pQ7FpfH9wwzJ3PVCCXrjurESunMECwMNjojq3a8k8Mcf4Hjbqzh96DELvPiV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1eFhuzxgcHwZy3vEiQ3QhiaV5Wi7jAWhVYMDnxx91tXjEbxcTjZhYcVcqyRykVSBBSwDsh5WgAcEmxhKnW4awC",
  "key1": "2aLzZHfP4EGbHDnxs2MgtyLMFgukLuv1pjCXCFaBE28YojisjZUv8i3oDX2biGN9Mu7TLCBDZSuPJBNT3bJxYvK7",
  "key2": "5NgduogwA2xxJTQKzGoB4RGGTqcwcwwqFjUvyppKtZYmyM4PEbT3XmxzHFr3Gn7GRj7fnXpxoaoPLkyMmjb6qAMp",
  "key3": "2ANa1WDDHsgG438NntgGxYT4BjNBj9rvth3SvawgqZMimeFyn15YnknpWYpmGRDPkAd1Hx55GqWUSo5LboBB2yGd",
  "key4": "DvUqsjPxxRD7BCK6ZKP3hgRpfM5ZxH2mTzdW7b2nVuu78Z2fd5CkCvcafXWfH1tVvvCfjFRUivYKRVAv4Cx3gRW",
  "key5": "3rWRqEBESsqYJUfnWc3s3a2nrQFh8ZqsR2vAfq6vR2xKE6kNMvirng9RLJnRKqqPvHQMPDTx7SmoMoVKo3FUB6pG",
  "key6": "4dSk344JyyK9NbkPcKm55RqKMcvL2Q5HPgAgV8b4HDHRNXyaVLQfJncJrpTyQrhE4uQE4ZDJEy8gJm92ua2qiL4m",
  "key7": "hCptGxfzWjE2chCPq2SmP2EPJvGjfooFy2vURUZ54HazHY3VQT2WNWzNVLxDAuKXUjGcMC2WhbkeYKvD3EaEJv6",
  "key8": "3zWbxSTqG96g5fojEvDevnc8SnK3eMSSfKfKX5aqGvbm4Zuij1aBrA5HNSGvnYYRUnN5VgkhHK2dxSbf4rpERAz3",
  "key9": "57ZVe3y4ugdyaGzVRpqG4ihRcw9ixPUUPZit1ZU1jnVHVnUZEPSRkrFbPgzHgYVhHCw2D3BuRJoGBKWwwPh3jcFk",
  "key10": "3aXcv2yTyjjTK31MdubWWbyoW6ScGxHNeE9hvNhnWmWdQysMk2k8TNrpee2G5ofE5vR4XjwyR6ZEciwJLKCZWYgt",
  "key11": "4BqE4eeymxVqpX4feg7fQoCf2wpJEBuRNrTPDy4wrnbk6eqp57QzCDm83CuJcwihbacEMt5Y8QTaBKPybSGmpjgd",
  "key12": "4AKbD5BeE6VPSotFZrbmCbX8xMfqVqaj2NM4VWkm54XaL9RLK1gXyppLxcS38tDJFV9FPA1TGhuSi5x5A96gD4Bs",
  "key13": "5VYfbFs1mpRtbAiWfAi3HCuDC5dT72S1FR3FqwgByGRYr2FW93bJnmSC4UyspekjrGUBGhtryHnUowSPjid7YR5H",
  "key14": "2fAN7dGn4bpiPa8Y1ne9gVxjN4SJ7AaDrPgU7J23T7WBkTh2FzeF6Ap2VXrRVrdeZFM8jCj9YtXkZgQe5Dq4hYxA",
  "key15": "4E35qGL1x4JFnc9iWRzPWhqVmoKYkbsyLFnLsqi3YfAQk8uGYDt1DNwo6zzRbW8kqaVb2icum1pW2SgHT28tzwVV",
  "key16": "6LnX8D5es2GKWK8sUHHgAqUPRRhbxBPTn746wQtrMa4dEV1qy6omE7Q8c3Tvt5ykixJC7xTY2jnRwAXGEo88rdS",
  "key17": "SHyg6Pgq8eSyKeoM6JqEefVAkYNavNEmWC3xyNQEfJcWYH177p9QgiBxKAtGu8z6YezLyiYa33v188bA8QtmZxB",
  "key18": "4H9xgniR262wM9ma8uuqf4QvfsCc6HfcqKCVDqtbzuKLg48DY5D9ZKMBJSK7yK6LhLD4AdmH25LtKaYQDThohmr6",
  "key19": "2UWwbK5C7z54CUVBfVmGtTYpsoVrgvL59mqM5zKhTLQitSE18QJupJFKrJQV9AxZY5sAMpgRRYnGorQDWGioVzNJ",
  "key20": "52SaG8QZ8ZVU9whdthh1Zuv7VvahaPuYxkAonf8fVbb8qEZr3KdrV5KngRzWpvNzCQiR8dbGK4XFEXG1LhvDi2c3",
  "key21": "SB3n7NejhRdWpeeGoDb4GEfHpjq8Zs666F5FtRCmpWvPrsmck1WLqr9QRYmXVW7moUcdQi9nnUV8jzVRZn4x15m",
  "key22": "4fBucFb6m5QHufwwuxboJPZoKAyeGs5qrD2PBS5SWkek6yudcZeFXGDbungqdsdRhpuF9SeVarTHmzt2dCZ3gbB1",
  "key23": "4EKxg1iucEkqXGGeAXsLwyNDm78wAyvMv3BvLoHZJhTRBS2KXigwcXbC9msbwhC3ujJoq74Q2vftSd6c4iMvZofw",
  "key24": "WfQW4GKnrtRtaH4ikfapeGsdFvqEqWXXMmTahq9eTQg9BWTPLaiMkrZG3MypanzMaLF9A3f29d7r4YeiWVACPnr",
  "key25": "2cHzb6kwqWLtgPpPKvmkm7296MPExZWBv74QkmRTKpx78tD3mFEyu9AKxUFiVycHfdNprwFXNqbFAwQc3FBZX5zM",
  "key26": "418TQn5sBw8csHk5qMyGxC3akjky53pYF8BJBkFoM9Mtaw16Z3svFGaBaVGkBK5Kx15Zfo6sErdxS1EFcQAtEEtB",
  "key27": "2DaYdEFZRUKs7w4dHmCzLHaCBFbzGuhHrRcNDxfkHhL3CjUitLWppAgRHFmc3ES8J6TbNmtYusvbJ9eTsTLvNj4U",
  "key28": "33GEtc2t2jp2GcpM22WR1fNGZahH91UoYhDVoBFdw4p69su7VyVqDm5d3c8uWFaMEi4dXpxTGgavP8TBX66NZQZb",
  "key29": "5TnJTg2AmMqJX2WkWU8xCroTE9uFofRNnuAHxG6wAn2ieu7FAM7bRMKdasHf8SHe81KUjienvsB1wYDAb5hzystt",
  "key30": "9qF6N8i2CYDMy1L4wqHsrYnZf5pX1VQKHwsQjdXVkHDeKRaWAXsboFnGT36TKJwVHSC9roTqFyGGeL7FRLPY2Cn",
  "key31": "4zyHz7vyt5QwLuZW2sQFXMKgq88feiVsMJy12wQoadhjHRCYCKBhZW2Wa5oytZJwfopzJwFvP1RzSvSzasXBnVrs"
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
