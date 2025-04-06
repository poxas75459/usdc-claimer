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
    "2ka8JFCT1Y7mryniybcwgmmUNHntpqCFyPAw1XxkY7NcR4h6DpWDbBTfibKjvKvyWzYGYp1mFNCCvRDsPfkqEnFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kbnTq7e5EnbUuW1hTCc4UHRWYMWD443xkQSBfjgimon2urvpoTZRA4Cd6jLttwpqy3Kbb8t2rYBoBbMogJV4ytk",
  "key1": "3c49FVUFX8SWUpSEB5zjwCJGQT1zb2VNMeXaAEmYwRQDJeGUwde1w7FvtfEvkCsoXDuojXmaHrrY5CdUuZ6fXofd",
  "key2": "2EPBXHSeWcXhmqJ6nDW7am9QdVaqStSrdyVUDG1nsBkueEkVzyM6yiZF4nKaME7rERmZ3oNGogwnnoVWcGSXaZTc",
  "key3": "MwH5APpwS9oYb5t6Vdi7g31qGLUA6bTior2yoLA24NV11rqsZWdFysyANzd7hbm9A73HvpfEx6a6e9TbCM6khhd",
  "key4": "3KbM5iENaLvbFVdAbdMHrk5SEiN1CYEpFkzBw78Dzv9Kf3cQawaJJFQde5nCRMrPaAahW4tiagMzKRfqasfF11cW",
  "key5": "5zJMTtG7Lq6ATr1rw1Z1ThJn4dpKZY9RPc1zBfUHXz6EYF24bAHtFWY4cR8wZeW9knvpfQM21GZNhEwFzHTdeiMh",
  "key6": "hSkWAHbgNFe9dRnTyg98o8FgkGDcbkdYMeowF7QZmeeEEVzsRmaaTJ32gSUdHXfepDyRSRn7AkUGQhxiiaTt9ze",
  "key7": "ALeC2miz4K9JeT6JiVCp1tzuao8K9uqACnWQYNdmgjjPNUGnktxuTcYoqV1vZqJeitUmLrGQc7vwDhZdbp35QqD",
  "key8": "2ppESSv8wmWec7jmrhaBEULJ1Gegwg1W5YTd7EuxAAzUkQ6zBgBS1Ga3NZk6AH2zz4B3YMgb6oUTrLi3nL4HgXMN",
  "key9": "MdmUt4x6CLFWFd5cVh5ATjQsZNDsSrDNcz9bvhTWo4PyGeD8iwQSaL4q1soEDS3YsV4cvCJ9sVK122GHa6GuvaB",
  "key10": "3V1NUNEhboVCGWtaRuKyVRicxhvR4VaDccsiPR3wRssdBa6sTSsSBkHEpdhh3XWgxiGSbDecyuA4a1TjbQz6qQo4",
  "key11": "2k6ZRjC3qnShj67tArTB3HU1h9n8BM9dfF5BbY1MpZ24G6me2emNw7HPhLgirkHYKqgki1nnYEh9sNMqCp6bc4ie",
  "key12": "4NsPPE6o9NFUiGv5WEdroFkvnKQdwLTKientbmHEiHzjJ1LqqP8TPdKycq9J4GP3ij7gbitD8rLYGpf55FYnohwo",
  "key13": "5nswkYwNfYvvYBubmHzQdZ2Dtd9BQqbw4bntGi4wDxBXywaraEUatJHq2wSvsRug4QT6yyUZUiFkshd722or597N",
  "key14": "5rKFpXs3PVdDdggBon3wuKNyVubSz6NNwXfvgksdRVJZQMVrRHQivVsbR3pTkuToy8Yxo5jRJ5e53hzVxXZxxPeh",
  "key15": "3xuFjqWXReYaTrFTYLpMFKj51XBQV61S9bHaUJbr6bQSPo2UsVZTH3L1n7eha1CMioPEXFaGZxoQrTW5dUumcyUW",
  "key16": "7czwYpED8uLtr9uC7VGYLtU8qAjvdathyZSPiyovBhEKgfRU6CZGSXTrYNWokQefUG1bqyBehUbJMup9WmmTtYx",
  "key17": "3UaaU8tu3jGbEdgEcdkpg5RCQGKYuXH7GyjGY4kLcmTrFnMtZRpsCpVHQSrLuvtdcUG16uS1GYnFTBmA9tMbz2hM",
  "key18": "5rd3J9sPhcFrHRKhJEUzDBZfJMb91jD9h2Lzgd5TusCoKRcjKxjse7C8JDRZkd5dK27FvCRTexo53D4mxpEt21AS",
  "key19": "5JarEc93UBWEakSjeZUoqSmW5wnmKiYmHHxpEAJdPLbQ5hzr5zcRLUAUmqmkWddDJkmCoWRX6bpxyFFwvAJk93bk",
  "key20": "4ApQMD3jBHpsdHq6erMivFTNRT6KdkkrfaR4ZCKLR1PWembfHsGMDF9hHbAjCtDg7b9GMPAH451NPnNDZx4oAnRA",
  "key21": "FYLpFBLjRENtAwpTNcFELf67TCwJU8AincpJm5q4ecDiNqeg9XJwdiGNEVJTRPKK7zE4MpPVwX3NqYaBdjmHxNo",
  "key22": "r6oLn9VFWmp9xh3L83vk5ybUQc8aZmGcttuK1YDCuur5mgYi9KYsSg8NHTt5Pmf7HaDjjLCjeZ88TPJUkC8BDwD",
  "key23": "63pY8zUdXtSLE1VzPNcHtroLGFMFEWvgyAcK3p3aC23aY56v1WfuodtRvS1Q7B1ST4owzRSECWknchhAvfBFBiMV",
  "key24": "3vw2LbGv5KfabWFryZRTDfj4iXRu2Vxh26npZFoJ9tCWgDdptuj7VDxrDZKdZnUHMp7wSq3YG9pkJLmDCqxVdfkz",
  "key25": "2Yj2wXSeuYBE55Ps15SnbUh1V4EZ9iezxJw49mZVqxR2TcnqFszwmXhqR8DaKLdFJamaxNftAzkjamaw4mUBteBo",
  "key26": "2EeSdNP8oMYMEK7crb4XgvS3jkFo6EUPvkFy696WWQf9NCFZDmLjBouf414Fcx12VA8m985wfE8dQAuoyNSqyuuX",
  "key27": "4Qg19JGVFwhJSmKMpNRoqCKR757s3GYkEGmXjAhhUGX1VSPA4FwJie8oYLaYuF1G7qW5PZeNPuHaFA8qt5NTTuse",
  "key28": "3jbSSRURXe7Kkz1NyZwx93CTv6HKPPRo6b7YWYHpJzX55szsbvqUfFJm9xcjYFZ6XGDvFJhfX5zWYZTCPLJiMyex",
  "key29": "vPdDK2bVqScvhjykNXRjWMkvNPfoHW8whdbH4DRuRuK4eL1JR6Ct7Hhxp5FndksVyoyxwm4LhyiKbrmVfysd9vb",
  "key30": "4HmMucLF6fQhvRtzU7Cb3tagr6VYPCEmZ8exWsc5ZxWZqHbYBB5eHmdaevbBbzdymQBvBHUzb2cieAsFsT5fCTos",
  "key31": "3ULejKrktWLmKzk2Pp9jJU2pN73FtmNSBTXJ2J35HUQJMC4knLpD1uAFVWvjHtMksZeq835bhLicVPW17MzSkF1y"
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
