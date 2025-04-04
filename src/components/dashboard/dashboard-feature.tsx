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
    "4NFdmWB5uT23Wy56qshRPCLW3H6t8ne3WNmFU3nRkntCswZQrkH6pLThiuM3uTbcM2kBaMMDthviJjbnmCq2KU6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCKQ61Cdh2MsTMJFbnqAFHiLZx7y1MkD8SmjpzqcmTvyntcSMJr1gFkdVRiRMocPgQjaRFqsckoRtL63CCJjrYD",
  "key1": "4qqBPgMdHSkq3QpMSdhfCXCrw7BYEefThQbDQTdNZLP6vyV3sC6sjBpJtVwCmwtQQD9Wyg6ZXFDTsMCWXftd4rrB",
  "key2": "4fhheFqYpVJhXoUMdqmPtg2mpvvfx8YQfSsDvAoU2n7ULUcSRE1aaAntRbECQPE5dEKQ4LKJsH9jAcoprC8oYoPK",
  "key3": "2kjBohERPnPcJp1eLckEFhVhmHRYoGizUMk35BhmnZztE5zfTVGjdYxT7ThQLBcLKmU6Ujn9Ah6H9n2PazuAsFdp",
  "key4": "5rozyF69mjWkk3wiBRee6qA862Ptu5atrySeWeJQbak9rihLKnvtb9YdhURTMgdnUwwg5mEbDrw7u8WkBLJF73FQ",
  "key5": "yJcgtd7dTKZ89NaiWiUQ84LkBeXa4Q1zgN4xz5B9Xf5KWBDnheoPQap5yxaE11SuB2S3yZNneayChXqXQdfZ25D",
  "key6": "2x2eiBo1ZA1VHYoVEPLUuqRQp7ChkX8vk5mcUtEWCZmP6w2FXi56fa3wrrhR7hDE8FRUJpujpMLhDLmdA7ncujLc",
  "key7": "5K3T1XeCFvki1Mo753HBManLsocDnkTwmJvtBJDg2bA9XFBour1kNGhbXYZ2mhPRvXRSA298xcBQaNYQirGuXcbk",
  "key8": "5j1b5mTsM2ZoWc1rPcrAL6gZfC9NDtKUeXBiNJ72THnj5dT3VC8pgXzzr6jAcY1zr98TaBhnoiUVDorp6wnMzifm",
  "key9": "2UZTQvu3EnBFnZumCP4dr458MrSzGUJCLM7CLnH7UaAeAQUxaza29hnTUL1uUG9n4dx3i6BXXA7tFUChvvWEwdnL",
  "key10": "25Rr6HHCVBXwMphDFBahkHzRy4kZygnFkPos4cSAdCQaGcCa3Joykk9DYtqoSufepGps7rxG7ViBPa1p6hEBJ5eP",
  "key11": "2wxgyeDavgdoF6otuhbj14VdxVZB2s6t5k16a6dsj2A6xY51q782Yvufes4yPPVwJVVGs9WcvQAR7mQG3hCvZHr6",
  "key12": "2cBEQ9Wt4GJG6bxpWSifc1a9xWPWhobHZmtEEHYrFV1aLzuxfZToRsJvdNGSjSRdvXDEe3s7xjcpmM5APVVMLMzb",
  "key13": "5AFsHLydMbKo5RKW86KCbh9gLG2SRAHj7AgUjKzAh2WAJZnqVkWqdKiqwvs71BfGrzoLCLkj9zBkrhgvf5chLNJG",
  "key14": "4mgUAWZGYJJwpCB5qu7abbBTCkRrEeHQZn8DP8LuxioTTi3Zm81Gcc9NADbXHDHDfgpxwkES6H7ZMpPBf6ggxVap",
  "key15": "dmN7Dad5FKkk39zcyrjJ2usmjdwLZYeZy56EjthptKvs5wEetmHQNGF3iwqoryd7Sw2CqTnwJrWq36BZAfwSg26",
  "key16": "5G53CfAZ8i3K3LZ3ynDcUn1oUZN5haZr8y3Jw7tH4QxgMT7QcTt2da1BNimLnjYPZaUtBYFHX5nsodM8NF2wv8QE",
  "key17": "3a6V4phEHExLxWCEVpGxXyPUF95RouWyDZa4pwbHPWHnpykhhN4xnf9wS5dmkfd38aaqUgPoESczAZjfDjBDQNoV",
  "key18": "2PHHcyHesgKd5m5q4np2VTn53nvFEg5tQ4prsWFuXPcd2eM2iPK1LouZUH23BegQJiGSf6Lc9ZxDvc1GX9AXkALX",
  "key19": "3z7ZBWp9ZsjreZKFRja8qz88Whu6sEVT4rKhdNkMepC2UskBj2f3C3vTuKeBUEX8ND899ZnGGHGH8XC19EssmESr",
  "key20": "5nqD8THzs2V9GgkXNxHAfnVeFSTNVwq7ARXkbTSwrwzyrezwNnxxZeSaf4j8NeohyDNJkqsuFMSDZy17VJQjdQZR",
  "key21": "65pQTvXyHBhDSvEo1F4KVm7vwTv2B2zEwYWQdtDYW8F3rpbP7G1wYdVm3cWpDnrPXnCwWyprwVnogSo7ZY2vAmYD",
  "key22": "4CWbvHHFBFxZqzoaRzwvZmFSi9TfhjzZc2LCSQWHtSge3g8yKybt9E1GuteFCGg6pbyhGTBXivCpVvT9iFv3QZWQ",
  "key23": "5f6HGVcbAvoMMumgqzM1FnrYZR8jhrm4kRCdZYbubxZzMMCL6Bu14MqtZWXMbEmy8p42TM1taxZdGTi8rfQ8rij1",
  "key24": "67ABYkB8hxs8eeohPDiaZ6ozsDNn9bgEhe5pkfFkEdM9XQEXjYnQzAcB1zGEkvqv5pJfibNVqtuGKnGe5um7V9HD",
  "key25": "63SmYvH34yyPcpHf3ifvMaRLq8JLEx9L7YGJa4PhAd5VX6wHJEZPjfmmAdL5xW3oFVmHAVP7CdapuJj1puYCxvZL",
  "key26": "5Pz1fZHBC2dvUQtabgQwgKMAQNSVjh2pVmyjrXz6FkBBmPC1FUYy2dFWwJeiYLc7ZtPByUerrsyT3GS3ezi8HHun",
  "key27": "3f7uvmRxxqUW44qdE3cYUHxUtasURbWtzHZuBtRkNG1R36BW4qPfPQ5bD7YJd6MTjb1XVaDvArFmSKaBnd6MDGho",
  "key28": "1GFJGBgYVFmhyQBCPMvvKyqC8HMaRkvtvbpfMWHC5GhobPdo6QrW8gB3BzKhWzyNa6Q3Jd8sfPAyDm6bBy7dNg",
  "key29": "59eMZtxvhufsWwZisfdKpdqmaLkbyRwX5LsjSKxGeiAZXwx8ccjN6FSiVyFtfpRGQhgmnLuuCqK949XxsSybpEgd",
  "key30": "5TnjRdKFc6izaz7FdnPmoQW6inF7Vn4FVfcks54nQX32eRKX6wJr9WTjtj4PzNPH513o1J688FkHDoy52SEYEyTd",
  "key31": "4tp1Lj2ua1rag5AoGyUkk1kAcPZHLdBJJD24DPbr2KFxvehQRsDM4r847RYnrPBLcpX3ioEWVUFw8ZYSXk1WaZts"
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
