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
    "3yoVWgB2B5i7q3SSDyQHS1EiH9tXBqDgRdday88AsYX1YVgMzworxVZ3u6C7UTLkXZdwyiBsqLmYABnY1sBsm77k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46fy65745wRrWdC3KBrFB4p4BDkreZWNJtYhWbmJPbaaAAAzsGjbrHe71W46eB1kEyQuRCX8eAWbjfhfBkVDVVQE",
  "key1": "2HRRpEBWeiNeNUxHtLmHiwDVLRf9P1VHB7j4BRbEYQmibAWTLo3LXymcJ84rbpooZh4PykdLurhp5bUCd2KcBdzB",
  "key2": "2r4KDfQ4tBMQAryTAkevnAMovE78L2UjGE8Di9rxDisZZxujVoViJFfAS1dwcFXtp3BQcsSBqewZafEY2ZfXWa7u",
  "key3": "WeHQHzFLtNQVH1SvXAu3zeWKZXkYiJv5morryX1kW3yS5aCcbDhR82591JZu9cBXTnXwVtbnAi47XpUgtjggs4f",
  "key4": "5SZ4Q4UJNK2VynQFB5qKVnkBEd25xXLs2SLQVqveJSWoJHQW2Zf59qdd8DboVe7H7FfZE3pxzrYs8cVprhVyoSrY",
  "key5": "4u6GgMJ8DKS9Meb6d7U6E3m7enB8tdX4SJpfsxdEWmbwMoWQ2L8Cn3RPgMJaCyF5FxQ9giHxu1QPEnCT62i9hyR4",
  "key6": "4fJQPNGtNFkTdRDPncHRQFmpCXHAiSyAnMnUB9Z1Bh19cXtXm8xew2W83H4jk9u3BE8oQn168sCEp8CREoKBhKFb",
  "key7": "2Yz9emuUj8H9AHLjsCSQBb7Auo83xQKTXD8tmv3a5Fg9fhbZ1AFfPjRFkKsg9UbU571ozL4pVkKcWeZvTn5K9UNM",
  "key8": "2gLJGm3YRtBrVHDL9oXiPKq5JESBLUFXR7BvzHjjfBkKyNGCnUA1sdVpP9RMSCPPhPdkb3AvqEoVJTdkpHAUSC3L",
  "key9": "5YqW2keWKCe65YnBuNTQ18C1TjCkcH3mbAdZrbjDeMmT7Qe5giKMtshsroRKLx7AJWwsjmfpXwD4gsnNXtwhUaAy",
  "key10": "u9sE6YusJJ9FRsAiwFeouQPh2UsdKy54N6dHQPXp2euN5vMgrSV4Wy9TtYZe2x7vVTF6XNPzjF73gQ1Ls1BiXzL",
  "key11": "5snPbb5rPrYppcCtxqsnwJcXboBfDzAbfR3rrqDLLUfRrSvTF5MVuZVcamAysbnBBBTipBA4JZEdjNEiqu6bUGW3",
  "key12": "4w1r1ADqx9p8BbjGCNjRy3zzZKQx1u7tocS4vssx6pgPJeoArCVi1W9vSh4Gg9ozpCuMKahHophHm2Kz2VjGWkD5",
  "key13": "53CnFP9f1MzWYEi5ddh3DdFfEa2gXvdmDwY97EVMeo7CE7aiunLPGD83qjsWu5hWZwCtniHTNvZ31nvmkmQi645Q",
  "key14": "4Cr9JWweSJncC9DU8QrX712znUQTiKffiMgJFnKt8yHUWSMGcCEnDNEw7NYUJ2HktnNPzhoDbnnobsMHfCYczpQG",
  "key15": "2GhHDUwSFfkK4gyDdTXjvRX4MM3PEGGp23noAm9TFSJFCbRJFVxAnHGb4aWqam18QHGbVTFvkfkrMXpddo3BsHsA",
  "key16": "4rgjHhwhRnZbLhaPCGiGtW4dXhnt5Uw3z9cD1fqxo5LAyLpZv6dCYyJdVYP6y3CvQfuovFQwjWyCicnZK8VSZSth",
  "key17": "4p13z12hqRHsLNkbfXopR8bFG6xh8p2jQysL7sbCTkJPuZxhL6j7JUEfcrigtHLsmxJL3waZNktssBW1vSrPkBLk",
  "key18": "4rsm7xaNEiv4Nj8VuRFa9mimMzVBLEjSWbaZDYJ42r8vm7ecH9ojAZ3eYkzLpWh3hWUN6zHvnPdZExJKUdQHy4Ya",
  "key19": "n2HcZzeGkkCtgj9D18dKCsccd6Ba4aZD4wYLdK1w1YXJGbCmhbXkJV6KsjeWJddnJzfggwe4VMnzGGZR773ps6K",
  "key20": "ThCDU1E9po7B3pMnn2dZfsMeUiyMYCCzVeThMHhhFz3B8E195LAGYP879LXdC4yihXheKrgLgLfdzDL1qLr7Nct",
  "key21": "5pA1YEJ4ybUXHayRRhsUZMbfGkusVnJYRgtgKGtVz58DensXm4YHBGsx3x1xZbRZ7NYHDqckZzAkXsVDPhTwYvzR",
  "key22": "3uAVDdhov6iErPofHsQXbCDyswf2xBPx5gZngbnYS4bgFqTCou5VwGY5mYPcXtEZe41JwNdZVMvihaoLRK9BhGz6",
  "key23": "4EpqxsyePgztg6ZL3FT5dwYkyLBXssNgVKSFq4pHKTE9pjW3aoXZWWQ7pnXH6bg8WHR1nsEP73t369kTAmkNvQg7",
  "key24": "29coKtySwfpHMNi8L4vaQYBKTQFYAPP5zgR7AymkeT6mvBed8LGiLoiUqPDXVMUoaG76qhe6QVyxfQ6c8rENFQAr",
  "key25": "4HwjE3AJJU2Z5Q5iLBHRJDkK7HN1jzmiKocEpRgczKEsbK698KZfbCsWbVuZJ25BceT9B8RB4EGpYuL9xFrQ7sdi",
  "key26": "4Mm92MJ47vRtT9C97tafQHgeGrcWRgUvnhnrBXK5eF2yh7HTvAQDhF8hM15hvAefVuRj56iSjLu2EgA1Uta12H7h",
  "key27": "4WeJqnjUqWwALPRDVyPSL7i982c9JcwGMvvf5rqVMoJBozEDML4DVtxBqbscZTi21R8QwNfhm38fuZJShfMhe3jo",
  "key28": "EKqcyrWMhdacUbFHsRJoYhhgP5h8o1fxLrriZ4a45ZsaPm9A5aEwapcz75grJiPpgct6AHCiWajynHojmQgg66a"
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
