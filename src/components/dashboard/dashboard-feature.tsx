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
    "3kz5z6TfmUYX8iAD6VdSqYXJyEq4qtPBJ3pZo3o4ezV2arEAhMVLfbnC3bhUw8wFMUzRRneXaC6QnsoZJMafiNx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjFRVdACT63xBAvJ1ppKCKA25bF8xoD2j4fAmrfPiotw8ayUtLPaTuQYcGbD1jqfbCfqwX1vbSff3RkhMYpCc46",
  "key1": "3NcWEJC7h9RYm1MXX9vZZXEs31Y4bnacsWjngva5oQREAJczh6U9znT5MQKPR3m3uBBXaHGkLYfQRu1xtdroy7bk",
  "key2": "cqzGaZJ3vT4rCsDH4g5ysHAj8oSkr5BWF2rQbwinV4eAqgd4e7D8KNe46DHDbSHnAkqM4b66MkZVgyzXmpQvdVt",
  "key3": "3qW3sjscqtun48zY3mVS1bdgaHBPPaw5ijb4TFQppTDtpqK7kgBTHkywbgbKNBchdHaZAsHMwcdbpxWRKaYkNnyB",
  "key4": "4rP1rFN2Ye25SzmxfP2qGbjHLLpxydxmLFXHBeLRbsoJ8aA7f8P1MxbRHws7LDgHEg2QJQcmjR6QkYoPpqxS5Wvd",
  "key5": "3qdnt338tqaxpPyfqrZkZCYVCR46fkgANkFLiQhDRx9zQBH3EULPhDCmryqiyV3GSLAB4L2j1xRFTkh6aJmbaHsZ",
  "key6": "4GFeTfa6cFjf3NVVexuWvrfE5gg9hCvmgPVh1sUvAiLRFHUabEAtzKd2u653HKeirwe9Mbh6vsfUJjoQZkhq25Bm",
  "key7": "imrEvNP8B7FxiMcA98W82B2Arx5eVmvhbxHuVc86tharW7p2mGVrUoFzFnhHAebJczPosYdUbDXzQzfobSedXSf",
  "key8": "2eQnu6SNe4NQ2tGHpRVAC5aMZnzNMAdnwveoMLTYA5jBk7jYXb8s1MakYCqJm7aof54HWg7UnTqT7ofcPV9sfvfM",
  "key9": "BvQZqaLgidQV9mczA2PPVHRWji6jepGiyn1mfVzTrM4kDcCF3zGy79HX7rZeVCWntrAs9AZjt9TiwuqPYeiPf31",
  "key10": "5rDQC9ZNFeUTNZixASv2RiWUHcFP1qAAS8t71YrZx51ZAxaNNzaMiP8iZrHgqHbXSs9wwaETpAWzh845CeaMjrtU",
  "key11": "NUbYfwdGbUKainND3AUf2zBGwzVXEiAg4rBL2KD9FEmsoShxhTgTBN45G2eSqP6e8nLs7HCirza9uQLpyC4XMfs",
  "key12": "4mqore8d7WcQaaLhJ7a7SZNgRBwwcjMkkgaENky6dMyoX9LRcanpkFmcd9yLoj7kCVWUCUMHCUU3d7oymquDAYSx",
  "key13": "4hbMyUrSn4iqz5bqBhNawsuaEpcT3m1REtQTqySsRJg83ztrNKVjj8zKGzRLLrZbj7N4LzZEj1p8JfAAZYjjY6GZ",
  "key14": "5Jo52T5Aa1TrkscYPxW4NUKeMoLBx5e3wgKLud2YG7HwgpAxyExfdYqbNLCECz6U7CXkb2qDNUhfXeHMDdFjv8zJ",
  "key15": "2KAReaLXEJ7kEkvfmGAq4bYuCgipVMMcLwLMHWHgmpjdxt7yFibHRspxoCjCnsm2w1SFZsNnvdcVuAtgjUmUpSmJ",
  "key16": "5Q1rZFg9vZBfkUANbjJmsAKJa8rhhmYgD9gZTExwRkMabwmm8crzCVYMPbsqESXcjKzUJ4TEafttEHXXhbSEvV6c",
  "key17": "3esZS4nHRxhGLt4HBatzVamPkNPCyfw8ywBcytsiCDAnztZJxUVTvJFo2CZLNrEaXDSBbvbZKCdUnmhNLbErxbn5",
  "key18": "2eJMkWkK5PzhU4GXEbrD3nvXQGh5jesPdMwfBRWzvKv5b1zfEiEU4tMeoCVRjPePayR13LLFBiStQF2baKSqq4ge",
  "key19": "3agTtXQLP1r15NAxU3ZfA8CUN12GFScwZntpRD6QpiMRgC53mPzAmKABs8cL5aALJVkkvMEeXZsGFMMFggZr2F7T",
  "key20": "2BXAMCv7rpDTAcoY3c3fL6j9VrMpoUmjHTFvn1WmWah6kXZcjBkFn5bcFFvKGJnUWqgBFaqtyuYVM7u6H2sMDVo5",
  "key21": "3zRKw9rYoahf7sa4vNKrSpehRPJMwKXvD1WRNdqKCG67HUDLRYeurSzogAWwBWoPD7LyhCJc7rLrVv77yWNPps7Y",
  "key22": "58VEdQgpC5y3DJX9nQ3hmecDf2eFaykA8veYS39u2n2Eb39wJsv2RhF7hHZB1ES2JvkyxEtCmdofqf2uNfyDGwof",
  "key23": "AUCdQPUs88ix9hX5Gu6LojbzFbYSDvNRkXKPSYa6d1HLgRrYyf7Az2hUHc5xA2jesnQruNTfWoyd7UcdyCpH5Te",
  "key24": "srqPAcpTYvppMa4MHESm8qRjNaZFzNgyUkuRPnRuoHkBkadAHoKwLPyQLnf12hccNLzWAWhCGC55YsK6j9ouVAg",
  "key25": "3SjqsQkE2nR8Zy1xsibPRQYKQ1VpTRVdXwRRTXjEW1WTQST6bkvhKDvcpcpwXmiL4BwMeCfgsHawgE3HYx32e4UN",
  "key26": "4YqXriD5cRnQtENs185UkRqznD9SpGv1VTGHK2uLLGqTRQks7ysy3JStZr6Nioh3mrvEQq8kc5WvQLf5qagySPjC",
  "key27": "gsTkBVSjQ17b4YniEwSFtvufgxHCnBYaiAQvyGqgip7Sqwck8M3H4pWPSu3GXr9CJW6MuyG4p7MZerGRiHMeCZh",
  "key28": "2cbnYobmmPhgyJeshv9nV9kAYS15vjKPFteYaQPw3ofTLe6JfCmhF5jjSemtednxJX2zz6YKrjqL1tSiA4omLKhM",
  "key29": "24cSUT5tFfX6nLvq5vGcHBWjsxSL9riXSVCjEnzdfUw5KegWT27JZ3eLPtJM3B9oE57QjLdmrSavAYtKjs7jcQEZ",
  "key30": "58288BQwx7xR4BFxhhWgJgD9JZpAx1QjjmvRRcF4ezaKraj2SiaUW3sJu6KjbcN7LC4nGiXUXC8WKfFYHpXsCN54",
  "key31": "2mirYrwZuR5B9hZsxHFSMjvbf9bg2EfYbdy2G3Ywe3JCq71rgDJdLvJbMKuhbDqSxJP85LWZon7k9nK9SvVqCHA2",
  "key32": "2BEvsoCX71nfAwNkFF91oqidgfcxjjwTcseVJoDXi7sAR6DVWFM59Lp6yVTG5fbG8CWEBPZXxqsckToHZfSyTS7K",
  "key33": "5VQoEsY1pikSWKZw6rtzDiJ3SgPDrpSuMd5A7YtMCp3R2Jj8RhXXqPoZVdzdLfELUGXxEAVUHKpQ5YBkRYtxLJqo",
  "key34": "5hsmFMrfeRLj9qTNDV5hC2Pe7pPcvJMrDcusVhJxxiQBJdNoqwMUvrfudYnDso1uZqpySBKFfbnHRH1sjE4JRpGz",
  "key35": "5wvdBS739VDUzCEhQLbgy5xfqhZQiVNFpx91W4JRoyK9xvBwCJ1kc9gWdzmHryQ7NLmgcQz7gvr32yKemukGRwE2",
  "key36": "2h113r4FxUsGqUDMzSaHEh3TxLAhpswZqKL6RbBbLdrEtz6QwBQwrWVVQd7wPFKoCdu8A6wiLYrjMBfc7fwPHJYN",
  "key37": "45cM7M1z8aMZZdGNvuXfHKAKCDMyGUuMnoMdzUnutfYd2i8pzWQP4U4irff4UWnNUWShS3oAoJuhRXDaFevLdMuU",
  "key38": "4KYtF1RU5MC24uJWQcAFwhFt5a3s6AUP7JPETBu5fmYrZvf4nC7CpHvQxLHuLKtb9LwKVWD9ynKiGSVhAVSUXYQ1",
  "key39": "5FLv2s3qSr25ZRxe761ZDz1ENi8ApFx13smsg9kcwFZ6ke2so3DPfaJrLxdYbxQmhmL6LpH3bmoTW5RgXR9sf8Hy",
  "key40": "4mmexy9gzi37EPvAxhANfMmQ9n6gpBieeX4H54FvsfckCpJGpDC5icYcFHtHYoPZ46uziRDKD1P5dFTTWJXyFRVK",
  "key41": "4q8wQAqiYbFPrHeQh9ngaKXxEB9huqPJna6u6BGzBAiYsMLJoHo1ULJnkZ6JFVHDYc4HAoJsV3JxjDT9r26WaFzT"
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
