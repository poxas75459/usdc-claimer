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
    "2j1oEqNPMnMqsjiAscyaCopheMjS5W6dQgeCjPs1rGCfkWbYcdsUp3AcFhMhLnjjmHfKc7Ac6RTQy2vmdY8f5GAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyYnZvg2kZb6v88Uw9bvmjfwe2K5h6q5v7AHUqnaMy3jiBzSYD991GVzzUx2nyYm7Sa5CnoujB6AyDo5xcg8heo",
  "key1": "2ENcx7c9tYka3Mk2XWFXr2qdsnr9t7BqM3rS58daUCGJia2FnGwK22PKwHMWg3ywKcCam4SRAQdXvewuQhm62q7F",
  "key2": "61o9H7X3JFpG7zcTqQb9zhn9cfuG4JmuJ5his9M2qG1FYaHYDknQErd1wH5nWMcrZ8kzSqgNq6oK6zLz1LY1LmaE",
  "key3": "2DVP5gW1hBcKyNDp5CJw1fo5ygUP14qnxSQctmWSSjCgm7kztQM5M5ym5tiesvjetYyCRQZrHEAr7eCLYCq6q8EN",
  "key4": "YQKFSPfXYDSntGXnBiDUbwnEXL5teCe2P5evqQChz4NyAV6RUaBPGzkNJCiYRbCFHi7m9FHkWeB6TbTht37GEZK",
  "key5": "4JfmMJ2GzbFkMNKEnM5m4QtMWq7pCXhQYaohC7zLsg3fhP3bNGvED1ZD4U3g4ckp1UnK3yo2fBshYu3tCfvbxjse",
  "key6": "2mJcBANY7VXUo3NVG6os1Hogda9nmKJweUnMSsaVwEEDrjGesuSDVRknEA3RRqPif8s6L9juh5mpJubghcy1ZfKt",
  "key7": "8bpRmGRkwhQmFRwSmewcx4dLn9DjkSd6bx9ZuWXD1ZRy6wU9BZrQxNzmLMSsQCUYjwXdvdiuXovZo9wze12UbYN",
  "key8": "5S8H6h9p3ffmWSreebewaukwZTbhtnXUka76qvH5Q5RNu932E6WFDGsShrLemfrS8pEJkhUw3Er85jaDaS7b9nhw",
  "key9": "5Jdx2sKBoT3wxYnsytHBxovnMTY4TMZNmF5vJJiqF89W8Z64f659A3KBUsrz64Y1WECxZwQ2g2af1B5LA9YbS7nq",
  "key10": "yphTeqxo7Mw5XoHy3eDeXVZ7pqcaC9yafYCniG1iBQVSjUrCo3UWQUe4RzptDCJteRYqmCdBJ8AyY7aLmgsEtzq",
  "key11": "2muBvLH2kNN3j3CYnKL376cvEetCd3Ne7sTVyYEeeAnzten7VfMRPKsJ8ijZXi54D79Au8efB1DajSMvu663hApF",
  "key12": "2xDUmXNtFw1NbLbjLmQAiSEoMj2PBdwxDKswZ1EfnvkpSgPGjvGFZZteottEoArNrZqCpUkmafKVqgDF2v7Tusr",
  "key13": "2TWKLLeJKugqb2BCVq2FJERqkmvanFKLaZqnoVtryJ94Xy8UvvMuKPCnKRhwqRnpPxo7hhHQBppp4WkysdEmYrcd",
  "key14": "3tG7EnzW7PZo6t62kL6gKfLUKG7xzvkwkGrPCeyQ1z8JJZVubk11o1TRX61p9aYtFjSSrCQ3yT5jVpLiCer2TKLv",
  "key15": "scnUBgGCaHyjsEcz7y98PaRi5qXUTqjv4mFm7hyx8zBw2mDPQ9n6VnjLEnFNBB1TfbycJTrBTvfniBUfW3ChY63",
  "key16": "5jcCZNWiXTFvPW6yftgRpUqruZcQhQXxure9vFqKrE724iEtK8mtfmooJoatN8dpanrYeYPgNSaUuhPAtADjrpk",
  "key17": "2HN3NLMsnNsfQzFvRBuuWsJ3ZPvixB2yerZQeRRvaBXQT7U7U4RVgpX6q83oDk6tLjrExTVcLtN6gUnJcAuApVL7",
  "key18": "5CEx5K2s4JTTFrmWe9VK3W69eD1kcownVtk5vXzov2TLjBKRHv84QFHqkGgAyjCi7xiRbXzHeQN4BHoKZoZiPEbg",
  "key19": "5qQ5CyhJRfsM5YiR66oLwF77sQcBYMThM4Z5SHAaMiZJqyEeRskcB6Ff1p23ghTnwBKZ3YjKDpvtwhahmVkyhUM3",
  "key20": "26Ck47Y3LKDqHXa6A8BNywoLAMdaTs8FnqiCMs95C7SKY4arnrBoUkhqXHZxJP6pKMFGo8e5cqaotTsiCBzwBJuf",
  "key21": "5R5fERuEUc71fB7h87Wda1a2hhhakQjMMt4tFrXrXxEDivbaMpSMPqUagbTZCKbCr2kzc5po3eaKgtyz82FF9RUH",
  "key22": "2vq3j53YmRQZTJKuz23qXPUfLzwpoh5CJ2RnUqCAFxgPScGrFtSQyYsNVvyXE7eHjytVuMNDtsYgivhHk8XTQgU5",
  "key23": "38KYJuFA9vQa9oN5nxYp3u4bgPZqqzT48EVSbiPushn3EBdt6p5JNX83mKL7qV9D9xjySeU8atsehQbpMPLb1RKB",
  "key24": "VYTbqvaZmZRTBHYHkiSJAK732FSWmzk6xe1Zg6tvRuG582KHAejecx74hq8HPxpAQBuRVP28HK5mmhrJTzfC9ZA",
  "key25": "2KkmbZdiR2GDJH9BuPhhCnUtsfhQJWUQtrTpJTujYyjta1Ga2chBAzPPtAKisdhuWuFL6fff995QmFeT74QpZeCC",
  "key26": "4Q8RnSn2GngtqFpzkk2VMQxWHuPjC2FpZEnQ3HtrDbmuS7L5wuTbQM39DPWwS4mmJTeQKD5rJEh75cQb1TXF87kx",
  "key27": "Tcwq8myF29oL9ruDFQni569pDSxmqxvBkMRSFJJFxMLijMiw17ARjRYGqwFxXXAysoJCvEzMRzCW6rhMcTP75Qc",
  "key28": "5ijakWfBnsJYHdUrVo9s7uJrqJGJWf1S1e8VvQ9YLksx1gocDD1UCuCyiThkpmD8PUXa26Ram13PdDULTwNUzNyE",
  "key29": "44g3zDgAmVNfaR1jbpX8V2zH445bHBvQuFUZTtAzwjCb9pcbsiMedNXB6JK82ZbkpYYXHoSTfUAMZX1LTZUS1WGF",
  "key30": "3B9Lx416kyRywakiZiZJjuFJfiCqEiF3bddZ1KojS42ixBSQTfDicWiwaqBjJAeM7QuzHGsJuQV7sNuTYnzgHLeC",
  "key31": "gLjo7LaCZqNE8qNXfWphAJ4YJBSBoN3xA5qwSgrKBfnBSymbAx3e76VRtAwEe1yU5BzfQpLzwmrvEaYwqmANEqi",
  "key32": "5VQrvCYiS2zDXgCsLxG8bmNFUgNWmQpwWXdQk1mGFoRj88JfxNEXU8RCj3qwE9tZhCW2CjMV66Q8bnUYXWVzWaJP"
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
