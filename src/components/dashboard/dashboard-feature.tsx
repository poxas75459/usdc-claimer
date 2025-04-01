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
    "4D1HMD7WpQ5aFDCeJFWUAP5scTDYJB5RHwEZXWb1ShxB9F4T7169MH12NC2NDhE6bFUgJzXgtQB86eZzDyjo2HNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zP1sCHM8sxqG5VcqRyik2qdukK3iXbv1SboGrr8KXyz5x1gk3WP7BUVLUg2RdeoF3kTTGnoRTpPgLXjaKUzk9E3",
  "key1": "5ieUm9nFkv9iSoQr51me5TZZ9GXpFBcTv7JXiDHKe4RToGYrSzsHDhPBssDTiJwtu1KEP1zwJV7dqLjY7hxozVPf",
  "key2": "5vKfF8WxVWR5SbnpDw94YeLqFWvDuRDbnL4ZnYvpoGjnzCavMipBqA7886qfkeKD4oKSRa8UPtYr4ZMcWD19rtDy",
  "key3": "UgKAtu4r2RTDrbcACKzDLpoVooBJUvK6CN6NvJaZoam1P9GVQzV7MUVQ8BsyNYqLYkPBzUW5163ucY2ShcRJJpH",
  "key4": "2qUBSzuwtwA4wbzM91adib3zabmBFArXFXse5X8B12x136Rj8Q5e2aM9bmnKU4AF79vuggT3mxunS6teWtB5EmVA",
  "key5": "52zAc9zXX4CtSRjZcLhMCVxhMwBV3xZrUHJipAebvJzpGnpcKNqedY6CtFciUJsUefqB8Bp3iG1ZCSd2sUUuEazA",
  "key6": "2yxzoEg3RiGjumC9MU1Q63Qz9majpxsSQ7AED1dBeDwMMvsxTGVBXqw5JSoG72Swp8yj6GdrDdeQH2NqMtjs8vEi",
  "key7": "37jbZgMmt4RrEwbciJ94qfNke8w4vwLWECXEoBH19wSSMz4je3eCgmJB5bLMQX2QgFKCg1FE7L3YVRVw58gVKzeW",
  "key8": "5ghV5yBm1qdfi641uoYGiLoFpa8bannmtQ9Pxm982dJvMsK54BPf5TTHQoGgfW41dY1yknVMb8yDyrNb6cSYKUiS",
  "key9": "56bgGsWQr1QMWPawcG9zmycuf9gCvvkwqRbvKyk5aQJ9GcnW9RUYTeKGy9WTQpMRNeYAc3WjW9EGY9zdWiBfx3ey",
  "key10": "3oGgx27v3NBPRKxMJdYDPWVeWmPQnMqtChfME8qedYmpCgfCMjp1En9CrdyNPZTT1L5JaNiGhPKiCWLa8r9butoJ",
  "key11": "3Peq9Lx2BGCBvYz6ixhdfM1bzPa9iBw9MgZaU75q5NnTpze2oc6Zf652oqwdmekBHgcGP4AV2CJizBNdPhzRQ4nh",
  "key12": "p6xPqXbE8L5K94oTjMQK9VnqLJAsysVvCq4ZJvE58tgM67ZxYbouTHHTbcnEvmy3ZG6mcWzB9VaRzKayAuksu5E",
  "key13": "WwwLztExcYmRXMHY2iEcWoC96K214gms3GCLrGy7s1rcEtxCgZsuewLJyYUQwY1umv1Bf2i16eq1AYddwcbXnyw",
  "key14": "4soTfYDEVsZ3saKSFbtp3WEDJebKnEk1Jq59RjSvb3oQdfRnv6WqZ7Lij5cZFGF5XTpkrXYE7cyVAa2P5yttmL89",
  "key15": "3ziQ9BxA4kQ8mGgdwJyFbC7KEEd2S2AnMkTvDHU9vUdKE6SYxcvS95RzVv3Nuc9HdAy9Erz6gwkt9eUdWMBvpKFd",
  "key16": "4ny7bNwgdDmJK1VaBKPjfx8JZirpshDSZA6pQZkpR3v2YbVhHRw4Sbzjo61aXRmHg6YqcvfkSCBdCapZikhZ2kvP",
  "key17": "3foPvZMFivuz9nqcBuyfonH6uDNqByWH6MiWJeUUutbMFm1Pm4JfFSeGwnuKDqXbwonEJ9jVWCJxSMURK95dC77o",
  "key18": "5RiArfTYRvPZjnLHPBXjQx5NbiqyBdukARzPpxh32uKMSTAabGSTpmxAr4Qxr4tV4vribCoAgSXuuEpK5MKqjC7v",
  "key19": "4SvdquibCA5PzSkjPYUWmPSgu1Th6HAzNC42R755B3YsUViVcEgd7ion6PpwWpk1zdxQJ5UNMbs7iL68gPpqTgWn",
  "key20": "5aLW1qCqudARiC1rhHDUTmYgesA8fcLzGWmbvaQi93wKYzKbLJZwGVdkswTzmwwwkTbLEQy23QXvtpg3YPTHdjyF",
  "key21": "5rQ85Puh1MqvZsAM1dGyEhxjzVXJFbpZitSbfJKV3AybSNt6V9T7CgW6VMtjkcYYwaGMp3y2nGnbnjHAY8psJFZm",
  "key22": "2YewWW46yQ6SRpt2yJczFTXbBQ42TQ2rD93bmKiHLgKqMDLP82172ibpsXjcJJXYzWoNEfjgNBQeEUN6uZuuRB6j",
  "key23": "TVmAKTAiq3fAQLKRpmwEvdJM4QP2MW9v9iuoFZTuGX7NND2XSwxSrceeX6rtDjxjDPKcAM4FJAKaiQjSWBp99uP",
  "key24": "56TJo8vqJQNYYfqwn9MK9NLKV63uf1LJNJgWNwFMF6dANcqhFdccbTPDMjBHjqcv5HRSTE5FSKHMd98LZVRYSi8n",
  "key25": "3if5QRdfJ7HQ9vvwPeEZxEG4avo5vUjDFTeh3QmbDvt5fYHQ46FHaZGSv25BL2wA2N4ZAGVkzQYaJPFHpQHnU67Y",
  "key26": "5vNwaTRAh9Mj8YJxzpCFe12j6La9Pk3LtT94GGX7VRAZYggN5csKphfRAonVHFpsQAELSEN6h9bkjLCxr4MAzQ2J",
  "key27": "4LK9kT4sMZYYqgqRwHgoTnbwQEprBCWF5PjnTSV6r6puhR6nGdVwkCqGnUV75M2eZcRtRzst7ShWQRkRZ2CnNrNd",
  "key28": "4A9ff8jWo7xZYFfx63fG25ihNJqTSwDxpGLELa1JrEQvSvXHmPgVD9kqRvxGS11qkyGSk1zkS5hjoYCnW9YsgKa5",
  "key29": "63PNXKGtPMddi8PXH5W7UMrkTNVmQBi1zLwnZQHuD9XetzpaJixkfPw1wVi387DFudAuimnhfq7PxcFd4GGnJUUq",
  "key30": "2d3M9nSdGDNiEo1LdmxY8zBQse2sYng9ESD6diXaMCYmjThUEK7i13NfVcR7p4zsiGHfTuABWTYrBwJcQbtH1cee"
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
