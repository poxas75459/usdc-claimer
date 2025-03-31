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
    "2KpffGgr18N7AMSMF9pcynPgB9nLkMEbnT2b7au5U23NHfXWFHXQend7PKrevzNgGpnx1o9K7fLfAoFk4J3L3cmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTSz3gd1CagznKirN9CCfMwsAt3weiBx79L6bxqJsPcgvqR6FWrqMy1Ezizib3tRCb5g2YVDBaTxVhw346jRH2d",
  "key1": "4w49mkFFp1JhoEuTiqJWtzycFynucN8wxDjjq4hxca1jDLvujxyTKnGJDVkyusGA5uJpXAonYFyFFRo4FkgN8uQW",
  "key2": "2uBSv8R2mzpxCBn7tBL7S111rGfbGG6tRbvmWXUH5XKpKVxrvaL9SHc735vpRy6HqyB4bFdR9USYvZNkFt7JvZXL",
  "key3": "49dFMdjXZrmK4gJCgKoQw3J2jvvA5pHUso32eQaSzXWQKAmeEFiqsC2qzVzGZgXcAnBYzx4ipbF1jubdsaNRB8EG",
  "key4": "51WkBeUTY7TLWqtpfDiaZ7tRhdrnihYYh2Xm94J3f57BoLQcRyf4BUGM3JVuBJXFVEjtisG5BAgVUxBtdK1NnMx5",
  "key5": "4mWw5wvYuHg5SQjDMdQtRHQ26nNhm5sTdLvibHEqvwgPp3PXeU99s1GmBHBCv3Hag4J9Z45LLVqNY1azPQYBqqPr",
  "key6": "G892zWaA7h1bk2FttWrFiH2JUtotoRBeQDGArP31ZAuvQRnu3tbtAKbF8ZikT9F1jLiw9FJamAjmTAhtbJdsisx",
  "key7": "4pmaFCgbF8eQTetHSgwBAyZ1bQKnbRiYjSxdwWFrrVh72peLQPV7NAMPHyrkhcQ7T1tbUDWYbEfUeQMoxW4DUZ2W",
  "key8": "5MYFpCL8w1RGLwnVjZvqdnSytFM6ajthiZqjywPxLRSt3cWU3xLCeNHYsDbYP1LadjsCFnS7vT2YHVUTGibRpFxW",
  "key9": "4DaJG8UPsHCXxrD368SKbkohgFhkcP8fwYjxpKVXYNJGqXGF19JeDTb55GXQXTmZanyqEiNinjQ6n9avZZWuwsXr",
  "key10": "GuCS7PnjHEWmT2Ghr7TwiNcJR3grC2pmXmerPuUxLyiFBSuw34TCZqXKNNiZn9XDG98GZQMGhbfUdYTmsseh1yV",
  "key11": "54bZcWbT2fhiXKh6ufpF5WcHkb91uGRXjMoPQqy5bZoSRNxnC1KtdDWz3eN1TpB8rgvgW8nEfg4E8R6rCtdRYqWn",
  "key12": "YkAiyewXf6xpdFQ9itvnw6Pwa5vY1HmJPKsPz8zwjPZDWr98QC7En2725ZRaQCcArUQMyCiF3PGg9kXLH6aC3iQ",
  "key13": "297fZhJ8YekmTUmohrfL3bTwmBhfQBBrEAbhCEbp6QDnxRpPUfTuGhMFuZHpGkjUdfYFDiskVnwjF1HmzWU2NugL",
  "key14": "gZiyZ79AM25qgaSdDY9JtazVJNtJ8ukzMYXrkowxiERJAJcPT7nKeSTuFawrS2J8aQ5N6romm8pgy3e5uH2ScLX",
  "key15": "5Hvt1i6tStnZZYhyU3K9RefnMDH1TRQuLZAVUe7ufPKsGfcYzAQDswgvsStyBvduiG4TqK11QC22W6ywZc7A6wPG",
  "key16": "2C1umdLkUv7MrAFS3b22mgYTTBKW2vNZidR995BX6EuXkWVDLLPVpynw22dGD9MWtBau2Juu2m9Udb8LQxEo6CPX",
  "key17": "2geuj4xSdF5AngqrGpJeRKkZvYe4FbmxwfRBFBuAV2W6nRHypXMzLQ9kX1HGoTyDdZdioxbrRTNCnovpW6LDCd74",
  "key18": "5XNzgodMhSYW62FcAaoyaTn4W3gEYEUp3vJYD5hH8aCnEuFwcXmvpSd7au97KnrvzkbtRDF5zHGdCCanLqac4WLC",
  "key19": "4XnhujUcTLLrH1GcpTPhb34s7tkCXSkjLv4hj4RAfcFx6TYQezHgY7fHNBgSJaCSdZQTsXhVxMpKamposr5c52zx",
  "key20": "2gZCEuzCd1per4sptXpuS9X6CkoBQgvBgAZ6VFWvK292mRUmJyx4WYy9ibdJhXDhprJ3X7fKQczEcWR9cN35KTaG",
  "key21": "3oPv2mDnJerKnkRhGyH6WAqdzbrjKvUwJvX93sGr48aiaLuMDAW4H9wJz8t1CDwv3ETiqfGcqwFEyuJJy8iKg1tA",
  "key22": "5gyucfzH1DYe9gYqdSPCFCRHBc86YQWjH7qPcHLPHSRzaL45GaN7wn3pEAFgZ7HXBpN22P4yaD5pua1s26J5nzik",
  "key23": "3ukznQMCwSLQ8uf1qSbtsSUia5z6ZcanLU875ocgNQogmxegwicNmakLncRKD1Qbx2jmAKycxE4B3PLSmd5AxYxj",
  "key24": "4pV7wYZhqnA1HgEnttGxgW2jjnNDGP1fSj8bc7QxF87Wyi2NRxSUYJUQqGJWgquTuSU8pGM6AzN7jbEzsDpppMj5",
  "key25": "3VExehP6VF3eNPpP1tU4SZBV378t6fpJzULXei4z2hEgdxgJKjHRngQwr7UorrSx7trzDWnqPVUZyHoHyERjNKkX",
  "key26": "4jxgEtfW7CnM55o9CAZhKYYu4h33hAKYJntyN6RM1dAKMskUn4TYHQ3Cken6MoYrXzivSBHkk9GTLUdXjaTxREhs",
  "key27": "32bZJVd4CVVkiLdkeXgi1T3qu8VZ4EYaYobYxjUdNvXW4stxcJQZsBgmn3ZpUTewNK5Ty7jkkmF9rGtxfokWFDTU",
  "key28": "4F3Px1EdVCHke5iFVWyUnHAX2sDv79VHnzp84TCHg9VWt2m5g1ACEfok35qPG6x3hniQC7eHHfLRBeDaK7je8ryu",
  "key29": "4e7pCyMGJPj231zCsDSoHV3cAYrFiAqjFHqKkTzAM8cyTt5JuacdSkT9a73CrYu4Gfhgk6BMZXjqaH7XHmNsPMKD",
  "key30": "4cAGeKVjj2dbddcupxMbstxKj5kc2qb4cR2WfhkBdgCqsX8ZzAi5KDS53C3RSa3hTP9y2rwhMgrRKSZKHhMfQKP8",
  "key31": "4wSpLicJRkjv5ENqr1cBLAF1NyP7Q1zHmemUEcNh4giSHjy3tJGnj2CvyGWEas9LZe1zvVGEfdMYQXKnSrU4rQhK",
  "key32": "PZ4RQGXbhVkfK8W1byK9qb7yaJPUt4NKGKqJPsLEEucYbPd9cKJqwQN2EgQ1HF4FBpwRkoQMBiuAPuJmXjNVJzX",
  "key33": "4wLBoWGSXmoLUUvQjEJzVLE2tPDyQKK9RivAqos2YAbsFtkG4AnLGnQwxaX3Gy6EiLacQoDdFhHMpWo18cUF7Kje",
  "key34": "5Y7xUdLdpdpsqn7o22YiFEyjjbgFGYhTRKvsWxJ6hHkfRfcFgzt8i35uxH9m3uVq2diVfU74cDHAFAFjXuXBVnp4",
  "key35": "2snQkBdMXTc31DQp2znE6Kk5bdN7YmvxtVEPwWrQvdcMMBsVxWP8jyyZ7Qq7n55rLichekuhhzfDtg5been3KcGb",
  "key36": "2ncDx3G9MrkZ7v38ifmg7kDyVsmQPMtcZKknUNpfkrCHxKZV3dijzy13sbUZw5yKikTYGXxbU3qGZtZZrkcSNtV2",
  "key37": "2VzCoKVcF7vbo5FqXrHzbVyeFsEgHRhhaNSkF5cXfN2QZxXDoq7fVmTTJ1ueyzAQXGWZikRK3U7BKaNehegCMLp5",
  "key38": "3mmE7kxrnikQ2gqcmRiWY84T5zhon8mMPMPzAWdBN3pLmrbnM9eDcNkNrgUW61K691BrHz4mfrHgRtdRg5CYKb7y",
  "key39": "3Xjjc2Axr7xQAgvLattuVL4z9uhjH6BBtiQ5J24mGSzYeRbevktCEu9dBxJsca17VaSJ4BRhiwV1Jse56c1a1UhK",
  "key40": "3iJshvKb9zhiqRmx5rxoww91EnbPK3nccoctHDK35N8pTsPaozKXaKpAT1KGexiicNTB9DQkSr9BXxiHuGu8bWJU"
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
