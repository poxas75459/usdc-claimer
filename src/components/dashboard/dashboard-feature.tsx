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
    "2AKEWwBV8KKHM57QYPMYNMrkpxmiPchxw5J17V83Vnmegnq2ekA4dTcafFF6SZpJUDDuzD4PSyXjAe7y642gfrRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J1pKaV5ULBufM3en3ntNMWh6uisvvTcbQ97GNBidvHz7ov836AFAbBpeHoeMKaakQccYH8kZnzLcKQ51s8n4fLn",
  "key1": "5ZxFKAZVDWkQov6s2Bmkxo2kkFbXCioYG7LzMntu72izsDfhPimHzQZ4BQ9E1BvenUHk7EtY8Lpy1Tcnn8kKzZUD",
  "key2": "3S9qUzRLCPNELMcC1sDbggYEz9U1JeyYZ6fHCJYWWQ5nrMDumd72o5qBcc4efYQthBoTKDwrpc4A23nyCekGUGb7",
  "key3": "32na9cpEvDAG8tiMoNgr8jLmTEinHRzTRofp7NNiAoDzYrgKf2ZwqhZ2PyD4hHYYmftLkDSUgNUvYYWtBJquhWU8",
  "key4": "aq8bgLioCFWqSVkiTp3b4GFsKkmQW8T9UqiJxCwFgQetoBzPq6aaa7gSQqbGUNDqvxiTLf1u4pj5Y7MtPLUxp9j",
  "key5": "3EC2otre7zbwHEwcN6XaABmijY9hSUqWvezzrYErrqTUWzgjKBajUggMnaeuzM1FQTLRVDY9NiahVzs72S86QKW4",
  "key6": "4sR3HeXC8qP2MkMMypHZfhzvqgbb6ZtSacKzwwaLBEssEte2D3u6CrtHKzn6dkC6pTfwrKd1qdLz7SX9NxxAwZRx",
  "key7": "4sdVkamFXLEpLiS5oQQvfcpTYApqCowLxE4hPgCt6CVR34tizkmJzewDcMtnRPwM6Ahyh1Xw7b6jgmQCDdxF8gqz",
  "key8": "StY6iDAvnorDWQJMktgG8GmfqtaeTzZtUp3xbJN2afsxNrR3bkFuNiDmtZp62pFMciDNfMagkHF1cix5uSh1F17",
  "key9": "66ux6HLyFWs53vFwaGqNWfjtcnR6kznEDBPgeXcVArWSvnM5jSDZKDEY5v82MM1NG7R8j7ZxFhxjjZ6KycwdLHbM",
  "key10": "sGwTpvQTmA9cuizM3m1PPcuDGsNUaCRbgidzpBhakUQuuBGHQSjCnhzHjqQ7i4BzmsRB2ejrhSWoWmNSn2DRQX2",
  "key11": "44bwGBwkrELXnxuxNQ47Tdf9vj4u9bLJjES7cS9ZJSHmwJCeHuvjPpHYmUrtammtbsvWiqAMAde6kVKpgmBX4SW7",
  "key12": "4uRhCiCdUCV6yUSr1Q9PHsLwvVqYhe64tFMMeVUSRb5KSJGP22AC2SjeJgdFwdWHBdtCbC7VaBvW3piRJ4D5VGWn",
  "key13": "2qERUpCdf5JpsiEFuBmCdrGMXuWk43XNRLR8SpZ71ixS9hsWeX4QoQtQ6A2SWvsT7cuMvcz6jUXhSZRaza9kFq16",
  "key14": "3E6HAXxCMkrVYhCG8f2dSCGihL5dKNPoG8pmarhTyKC5cAb1nj99jXCxqCzuvd2AYUyLHVDy9VyzHJM8odxL6EcW",
  "key15": "4gz4abCRwBx1HvtJDmFXp6qFuJ8wjK6dWRzTrWf6K1kByqUxs78kuU4crZ6MBaouykZxhDu4xx77MhRyLWGoiDJp",
  "key16": "DEogZ8R63fiVgDWNZYG1Q4nsP9mKiKxJXjrj1JBrtQVyvNXcLf475MTU6azPEbwH52XzH2JEUqxG92UQxKZ8q7w",
  "key17": "2FmEJLNVi3yHCzf535BhTNp5DyGvthjNX8QhTmCsgM8fhcwj9JfSWd2AYWRWzpfe6fEmTQhecyiaMooCUYLe5ZoK",
  "key18": "4KXe2EgEn1tbpmsuqp4et5VqFFDPaRykbjgRomREZLRjjSf8QCxHYyAhMpZ6xFmvLvCzBFJMt1bLdW5BAanCuxvC",
  "key19": "3g4bTW8BbZcoBPH4JYM4Xu3rUQp5SMU3T8cgBa1G39F53qA5Y7F1p49szRFvqLnYG5SznyMmG2u5x664bLnDBxBi",
  "key20": "1ZfKzb5Pvaa72AfdpJXQ6jQpb6BYYQSKGHusrPgxDgh55KNicg8sizh1YWXyjxcMWFsiWv5BSsWEU3g3dbhZTuw",
  "key21": "2FseM2wtsTWCBg6SDXQ9fMCiWo4avXTTLxp5jouue3RZTMTG67ZPTdRrwc7Fm5nQaEES4Epq8wfPV3kuapaCBUAY",
  "key22": "4ZaZkVjhUcNxyF51a7QDrGGApu5RnfipQLRz4z2PyMwxeinxvwZ4WZt5vZZzjbCgXZ2hdt3nQZpwPDF8JUmZbzUn",
  "key23": "TeabKdBMzwR5gmtHxgiPV3GzTwstoizieNw1KwRq4VZvkdcLGBq3upCWeAYrXJm25jwC3Nq9U14zgGDnUyYxpWj",
  "key24": "3hPFQGbBmn6NZznPH7CkBC9AStbpye2rL96FFaTSWxyUQYY9paB9zwZKo38w8tmG8THyLtPifcEjZKcdAU9UMoxz",
  "key25": "3bHNbHQWfetrj2q8fRKqG7n5F3ioLm4sNty2YdzBJ8iUV7FLKoQXUPebZUJRdhEg53XU6oXAUpt1Wr3mrcCwjPzc",
  "key26": "inZsiLmUubXZ1xKpnQgciuAhtZA4nFYo3hLXMSGJPcs6tKZJdum5xAauk24Xiy9VGbUxDoszBN5GFspBBYhHsh3",
  "key27": "4CLMKoYY4JPBdBNv1B57zgyTHtQ7VCaHMzioLPP71jAQ78uJn2sJc1jBcSAKGpBSGCZc8nKyntFxuX5B6is86CQQ",
  "key28": "3o2jGoJ8juBqLxgj2MnmNETcHeyZuW1XvnaitzJMRbnKGuMLmHmZowkKVuCbGi7MWLu76adiqFXKZgzmBE6rSGTy",
  "key29": "54cNVw5WGEW8mxzmUx9pHcyCEFdB9787z5vXYtzq4nwitJCGEagRSGkmU5jDc8icEux6kD2KG4LKSrSWnHQtukh6",
  "key30": "3ME1dQp5n32HLUvomEGjXf6hofC1bJe77PeaUU9nxf5GK1FR5bawxenN3bQWwFEdNkfy3WMiM45sEctxp59zAbNo",
  "key31": "2rvx8F324cqKPPetSi3XwH3xqTsqZgnNesDQHVpSeZWhLz9HVTH2CJW6jPEurgzVUxAKu6Zk2CX1MtXmuoFJNMuX",
  "key32": "4QVC2qZ2p8q9tMA7M5weJnvr7hZwguGCTEdDSF6cKE6YGUUdvfAuRn5K257TDYDqLG8zcwU8gXeK2Q9Y3k77PpwX",
  "key33": "2XAT8RMjRa4ukmX961tVgWchnCR7p9vSyHWpBtphx33MwsYzsjp3E3ZzxLi4BVo1rfbnNMZ2xdyYfVVkHYvQeJzx",
  "key34": "5wc5ShbQ6jVGavYb64aeC2Uascp3XidtYH76z8MQdasVaGxHozc2JucBjh1dGU1CqKCZ33irwG86wV8YD3pftW6t",
  "key35": "3Bhs1x9WWWch3WrrAHvr81u8zCJsFHWMLKcKn7MTY6tsvBAkB1Knhvf5AFRvFWMkF99UzDtW1HN9om4h9QkdfDgh",
  "key36": "43jc1gwd6dmXX4dR5TJo29QsUa3rBda2yRbSz5YLShKwt9T4X35PSWcn2JuTk13p4J3cYzxssP8sbpHsX846HZYE",
  "key37": "RzGB8EMhpovcWq6tpAD5exzobVzrNjB5FhKRqPiKYbRuNiBnjc1d1aNHkr9VBMxYbUnEZPhTV2rFs86rHDRfnu2",
  "key38": "3T8UajDoVgpcxuv4a3SUFJjPr937D67U9c8LL7KE8roezwgvQ6dKYwpXrPzYdLuNT1nXmPgQtZjZMCwehtTzBoQw",
  "key39": "ANtA81tWKTJZNyqy3QKPjrVMiJM4GPTd8SN8P6t32tJ2eirpnT19ZV4Mn25P2Xn2s3fgRUhCjsjN4La9rG1x2Ky",
  "key40": "4YG8XjAhRXrWZk2vxxr5MMH4QirDG6FyyupYLWxqTQJEcS9pyrM9nVMZkGf79dxhEHcYkXEVc73Y9Jpp1qkjvEuc",
  "key41": "4DWkorGAuQJnTnU5QTPYZGHuB5YsWURihJvjCkyddR4H3Wsbu5oxo41Shcir9JTVPhjf1uz1fp4V7G2NG9nuqPjk",
  "key42": "5HJDvgqokeXt3w96vFAqnhyZFMGqA6iwJ7XcKhv9CAatoX12R8WrMmzFAySp1Bf6itndxAPB1PbzpD1rU8Xp8Hbh",
  "key43": "4fnxosQUeSsovcUFGKyw698GG7G5d2y9FYCd42DiqwS4jJwkqpk57dD4e8TLxB8YhNCryREd6TULVMb8RBwfyLb9"
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
