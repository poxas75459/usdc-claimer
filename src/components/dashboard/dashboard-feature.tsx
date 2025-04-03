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
    "3ZKGX6mrQxSUYhivtjdP8Sw8r8Ug3NWcXgjQTkYHYm3No7bUSRHudw21NLym4q2LJta8rqA8JQvVPUFXSA4Fm7ZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmZvLwDC5qitUBXuDv2hN4TemudVfsKnj5JekSRe3v71eyjA1iQRxZSG2jeiHjpSW265Gwde29GCkpu5fYRJPAb",
  "key1": "3o8btpnLY3GJYkoAL1SCLLGvGBP6GbNiEoN4i2ThDrnEBU5gqtit3xgjyDUEKZ7DyTG351WanVc5uN57SsEsTVDy",
  "key2": "3sHGgRZfuewRzN7Bk8AxPyp1njWEKeraCpgCU27z8f51n9qe5dynz6K3tUauypTo2YKy8EXvLQqCXE4XMTHiTige",
  "key3": "5u6wjkmjzn7mHCd6B4FHzBM3c5VNXLZqbrDUSXaAGoZdKiuJf1yfYFTnyhJ8j7H9fX8bn4g62Z8tUN37btR7evhF",
  "key4": "juNMCTmiTg6VcZnwDWH4fy2PPUe2KT4Q1pnryMfEmYTJAe7U3LV1KYMPuX5Zo73kQ3CmDKZNutCk68p98bFnbmc",
  "key5": "5qTBjf6kmzjdFmPdTKju3soF6JX9LteYunQRBN1fAmeMLycbwnnCBMFRsQweGarZ3BM9JZ2Bbo43zRkFfasqohub",
  "key6": "5cfmELscwc3ttzWP1gHe1WTWBPts26D2m9aekJUEgggzLpCTnw5SmbfYMNVTqkk4mWYGaSRHoAqKxNUhUeifkSuZ",
  "key7": "41tZxvnh8kLJQGSB1yGANBXPZGna6DdqjQLJmanp7pq8SWo3DPmrVQpiG7h9NTQ73rNsCuyD9WN5UZoCufdxpYXH",
  "key8": "2R6VadJxsi75oxRk3t6ZrrRRDAwsWfe6F2ZhSzLpoZD3JGg2PQ3SpZzLEU7QCLohhdHcJG7paHLuy9w4TRjeNsFK",
  "key9": "5Fd4g7kMrjZ5whb8nCfH6E2yQd6TXtXzsSnfvFCkjZRxX9cxg23BDgaRbUHY4Y6gaDucxAbbd9Q8wungCWJZDF9Q",
  "key10": "3E74DnjM4zCpSj8kpNfxwj9McEeUgy5NU4vpG6sfcPigQnJKys5ZCnWdFesNHGbCSMbsSLjSgUKCmpPSTTxcLE4d",
  "key11": "S8ZyVkutTBoBrzfoW4PftiazVTNAUUycdLgZFKuHWg2rByQNP1wHnAeSiLwWMr2ZXb1in7CidqTdrwbkzoKCoq5",
  "key12": "xVuVEdfRSdCqzsQhEKE6QfkrJWgkeybDsW6yphqJsrQQ4PsfXebEKypk4vs1D5cSar3iwM9Diiuf5e1VrPrYA86",
  "key13": "5hYnZ7CMgzgw2KByMyoziLEyMXGmD7T8i6rp5cV7cCZ3gZcT2VmbTWtr6afDyCUAo9dKCiBL1gfeVkUZBng66Dzy",
  "key14": "4Q819Dox3GG4CZhnByPCjFnRviLMnFLqaKwPgYqNdgaGn7TBbLL6gtB5CQGgQmWYgr3KX2B2LHd6KMNydKK5pwbG",
  "key15": "3qW6wVNm8m81sKKpX1n7nEhTqLRry1k2QtNYFbbwemdMWyyG8aZoLSEojwpccGsUYkZYvs2hbjiqsZqny9A9EM6j",
  "key16": "24G46WsMz4atFgEMCNvcRDvEw5cYYFRR5As9qJUhpZwaiX1kMweXn6DJLTD4NVTydntx9zoa3hPTpgAYRisk4cA8",
  "key17": "5uDVYTUa3dsYJhMYAfLeazwXvAFaWkULgiremyuATPy2BL1B7wAmXfpRebuXHHREedV5bZNSrymnzd7NuQZQQQVj",
  "key18": "2rnnFfsDjenm9vMnF5M6CCJpZ1wSuMy6ziJMYbHeQdugm8YKCqwBYB8XHLr2aN9Ynb1UNXpA8EQ1BkUWPCBnVnij",
  "key19": "VbZUmXqj27UDKpuA7EceuWWQ2Uag27bQLmNU8M9Sn6gvCPY3fCgEvVgLz3FMfuo5yEMMKrrAqnTxxWeWVCnp1A3",
  "key20": "2bvRuvnc262cAtxQpw81pcMzPpAnbRe2TUcwaAsP1NzfcoYzEWTGxHux6H472VLfVszp5kLowwJR7UZTrjAhULEJ",
  "key21": "58u2jMRXkDKCJrcL8vycmffkFpqxYfctYF6jR2MzTz97g2yT8XUS4Ro79ho2wPEpL1LXkVGDCMQ1Um4SJzsHpGVC",
  "key22": "EDRSv3b66YX6LKS3rWVAPXrpbgBFaoK3aNbMhGJ16AcKe1pj5j8EPLGAFuvvpRsG9Hxnqg3CqJcRRRf87UhL3EW",
  "key23": "4xsbTrpesmv22rPoeY9hLNcRqmMFcEufkVMGkpiuHuP2851BZQfYRxJUfocCXasNQ6BjyZwHNMbsbqVGkW9gN3XV",
  "key24": "22urVpfX3eArnsR8z8vWWJJC5eqgrc8QLbUkj2N1TX9eJrQB3kqqgVjKhVWByY5QfeSEooyy8AjwhxJwH7LafQGm",
  "key25": "4PCkuRvNSkcAuxThstzxcFXzDyXNpmoyCwVPbCCDQ7PEiEPqDxqas6AQbvr9j3dUWRTTGU1hYHYGvNpNm5HYQ3jr",
  "key26": "386HXNUF4ZZVZWrvbzjTULFUH7pDzGxYoKcQudqtQwNdQmWDZVkiF355Uug8FQuUmPAwLWhetgFzk9UZcTxfstT4",
  "key27": "2LAMzyyozarFTkfh4vLPgZcLoMjfAE5Q3VNKTQdTH8gBxB1dSCtiusWrxxA8QjxkTUMory8qGqNY18ukn68yD4UH",
  "key28": "2GbsrsFRFCqHTHG5e4ftPiCJyAbYs7SZpdioN2jD9fiduVu7LaDjrimAeMeEPW7715xLASaQJXHCqYBSdA64462K",
  "key29": "26B5SR6Y4jQoBKarquZSR2dpR4B2gaftA3iJg5HuGvx9zWtwVgrtaw5StrrPk4GshL1T4S6F626qHTayaVQS7V8S"
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
