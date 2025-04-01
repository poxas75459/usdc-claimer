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
    "2SqwekWT8Vwiq2q9vycQgLDBQauwyJwKy6fc8w3JJvxT3BoWz6T7ZB3PtM63qWsRMotxKgBZsXjG2MDYmnoVjR7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpofJLic2ZBYaAgSSR3WR7RwrQXzLcFj6nnzikFjuiNZMtNeK2bcZTxYEwBXX5vPAqoVoeuYhQbgpE9pMK8hX5d",
  "key1": "4qbm3gaX5jSEvvPH1iur3mgq6PF7JHY2UrsRWKcCmRbE9kC6k5VE1o4yp3RRT8oUvoJitMpgvVKFANQx4SP1G855",
  "key2": "5yxSxBHBiZWHKdE9YNtjesEAEmnUgz6FSoQ9hvjMEce3HQ6oF81Ff9VBdo9PZzkPxNnWfsFS6RCVRLrfKvSPUyWS",
  "key3": "4asbeLgc5L41CAUmpYii4T2jyyFy5mLbJy9kTF7VCFvTtAAZaKYQYjRG3ngebNT9RmGLyuUD7JydNtLhh421FmCX",
  "key4": "2tTCfwVF5F6CBL9qhDDacU1Mwcevqftg2dFrrxv8gcThDwbHQ5kGeJ16i26ZvdsdbU9pb12ExRfBFoCW299Q9ZTG",
  "key5": "2XN2fywzHYFxsemks55bgwdhs21MiHFq9zas6uUoDBod5ANnKCjzmJt7rWqfacCesjmJvTZzn3Ftjf4MGfY6T5Nj",
  "key6": "b9b7d4dRVa1hqN9DccEoYU1WeikyX8fhBxagnx2HEHfNQmJY8chLMa9dC1FQnmG3yTxD8ASc62H3kAoiZcYRE38",
  "key7": "4Riy6Xt9RD3xpiCeRCNAL1ndyZMo1GfHMffsP7AMtG9TAHUbvMSHPEYBSj72A7gQvRbKRcCDR8G5M95juKhJnfbZ",
  "key8": "3oopjb47uzw9csWQvGBBBs7t32yRGxUqEKMzbL536C7oRFQkrE5NesE98Rvs3TfqUEaDo4uxQoxsiRJ5q4CDLyZh",
  "key9": "5H9Mr1jxhGJzZqXcSQuYYSPDasSbq6nwigq6pKsipYnqEP2i89FxCGstt8siyrfYzjAgmPTN2Bi23KYBZGyiKXdc",
  "key10": "5gtftNfyRAV5Lw4AUfNuFbUmYDSNoQckHTNe2tdWv8weKbDeHh4ogXNXSvtFVbrBvrZbYW8kbQXRssAJAHHUwrzs",
  "key11": "2PMQjZsB5DN2Lcu7meCYXvesf1rduXsci2EYBJNnVYvjKDj5LAYtWhXMnKq8eJQc49n2okxtW3XHPuqpC4wHf4yK",
  "key12": "4tw4kBjpDN8ae77dhc8abtB45wGhhJk7nGzviQwZVtPvz8UYoCtuhcborwJVsTEVKCSdpa5HEAbo8aJKbEr7xojM",
  "key13": "31UN14AKpyvdjYGeEoVcxQb7etUu7DtqZdNGs6XjsTqjjhfd4QD4whTMSRXa29SMY664n7Hafqey5wWudQvh1yVS",
  "key14": "9LLb1K9QQP2m7HitEaDCAcpfezSUEC3P5qq4KDff4o1JL1GjTaq3e1aKLjEem6aYuMAJbLD3k1xEM4j8M4wKm6Y",
  "key15": "3NMLELJn9QdtxJprMT6SRwZLQifTrnU6TPTCSPhHRdA4yo8T4f5W1MPxapdpDKaNpZcoGHWHrRyvLduAEhgv4Syx",
  "key16": "5wwZqgTHJNwFfihqhbyHTErmEZhLSyhEb2j9WgZtEFvUHhtsrZSJmXVWrkxVAU6UpUA8Qur6zyJPiQXVDNXVpBmR",
  "key17": "2VSqmYJ8kxAsJWEo1hFM6rN6qybUsTzvMu1CXo1tgf5p6PJ8ZxGuZ4x3Vg4MSFKdRxhrCNDN2PYntNUqzeguwVZu",
  "key18": "4x3ZVfcMh55jGJt7TyGR6sL9xPSoyahf6RLovAJXVipHsuyDJAWQutZbDdG3cG179cAQoTE9T4jiV94vDwF8uHZg",
  "key19": "4cXs6F2j248Azo4X8ukbsKR6bLMzehp5fSRNYwBqcQ13nWo8YckMP3sb4uHNSUzJC7cP1Pdo1e49fSshBMGVrGcx",
  "key20": "3KAHYCzzJfsGiq76fFLusRnHaydBdLMPcyXNQiBP7zGFtZkncW3exPoZMfzp7Hf69SBxsYcnTTADCyp9h7fJCfF1",
  "key21": "42Xpqak9eUZNDfu29Kd2wSUtgSgEEqSa4kAX5Tdckrmm43n4h5B3YCZMynH8subTCX4y5RCjX7yc6oyxqvRVwUTq",
  "key22": "4TBswi7mxTpQUMGNYErzCQhLw3jvnc9BUvKYZ55xedVi1rwphrQfY1AdEmwJDRKLskPKs5XbCMNAkwYPWtJN2JU7",
  "key23": "3AfSPpT5ygbU5tkjin2rcKYao5UKABgAQ8myDwFt4nd1UzStSJf5dfzQtsR8zas26DmF4CCf6ZscWVyZYJ3U6qfs",
  "key24": "2ZX2DFh3Fq1cqFDw86SQPdeSPqNUd4E3M9horjFAH98r8M1Fm6uiu2C7z9K9bUiykRoHUFHMawc7M4wYEjNGScHo",
  "key25": "2qXVkfhDDk3tBXAF4UthT5DHJtGoUVgSVrgNLLUDc1JVWnbHY6rwY6UGD9Sax33PgEfvZ9j28aSJpkvjz24fC8Vy",
  "key26": "f2MAwM1uaCAWRVWyWibjo8WQKjsPB31X2Cax6hQ6ih4VHJZowLjs5ckUxj6VaTcDgDiP4Wxdm3itGQBBcbBwtuT",
  "key27": "21bCafqt8m4noPRJEDi9izZUkchvjLVXtU35RRjb7XJiHosiu7AK7uqWNpa4esTbhhimogJ9yibmrzu7GqukADUs",
  "key28": "3RMoPPaKjJ8zQnhq92wV2BUZjoeccDehHCoAfL4JCs8oPFBFEeraQVpSr8dG5mguzmYKeshKgXpudsrSqGy8M2aK",
  "key29": "3B3nmVUiA9LpiGkWj3G9sYkwX1GjKuoqRr2Xt4RpyYL5g2xawhXFY54HmrbXjp95CTxTzNewBudoP3ZjBg5AU63Z",
  "key30": "otxojzpKuvCKJSBsH8TQpTjVjRpDw78yBinLNk1DCr24epoK2qZ8DLov6yWEiP21HaWCPw5ErDm2gd3H3H5szXf",
  "key31": "3dQrC8CVZENypTDb8BrvDVbLcfCq2UVTjMmtr6SV3H1mxngysGkE8hCa4fngjkWG4zGfgFcUuCwMKenqxxgMby7i",
  "key32": "5EkHpsM927vVvE2dcEvf9DkXKibSgZNPrrTMLUUVcq8u4PS7X7iGLwJuP2R7ub3hGkN3hJv7cwy4T6QLxT9bHm75",
  "key33": "2tmRsrRgh1wyDCCK12L8S2rXSk8GvDgnpNRtDhsKmufi9TqigMa1ZVnHU2Jxmcpd7LcWuZjAVqs83BVxLEst2oiJ",
  "key34": "4nQsEpGkdEiq7j7JRKABw8skk5ygmkE7VdVLJcQ4MA33RnDo7jQiVJh7aRCvCeYLzQdhoS6ofb4S2pReVKxRFMhp",
  "key35": "5C78ucSz6qjMdfBRNSWGqsFP85U4wvGKFHDsf4ECoH8dhQAEw4iDLXozBDaHcqD8E6XpFhVNszbKAnVVMds6vndW",
  "key36": "3ohMsfok3UaXE1Xq5SNgWbLNkBZJnzGEH5FcQLFFWqUM7nYAFksEwE1MLdtvmZqCGfZwuup6YBgBLin1G3swh9QT",
  "key37": "5a1etrk1Phy5xDekon3REDkh11fxnVs7oSWoDWZS986bSASe72wcCiaUmNSWmPw86AM4mk4xPx9HFtBfMG4zu8Kh",
  "key38": "tMupfccjT3S9okWH5uX5xBBVRwYvCzneWA22tFwiaqWHcAUnTA6FPdwAthZZ65DjZtKFWNz4ypQGF4FiUW8vtLu",
  "key39": "2ktWiuzEymTfkiLTxDkc3VKhvHHQXtY34UTztVQ57GJxLWH5oQK3PHgCGNTGKdPZNVKLEF7ophvQutRDaFXuRnNx",
  "key40": "4nXxMMp4jXvwnWWRhx9BhKBTukjZioMX73hh2WdwBJAHdLAA5sBrGvmQR9jAmzUZvnTfpuHnVJJcAot4vMrC8cJe"
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
