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
    "3LUGtKr8SbC25hP9hjNjLBCc8YXfB4KRpAC28X3bcbURu3o79PBDKdTtSr2fFPuQPHKXiAqvvTx4utg78vQiHect"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQ8VWRhqiRV7AkPo7r19WtAn4MAYeiq9j1TAuPr9NtXXaTqqETteziZ61vbMAHy4u8iNAoQGJqDEUspworFmFji",
  "key1": "Bti11295NQxUadM7Ysd3CtiZ2gyxrmSfzRoy7i5ikSW3wptesLiCCo9BwPS9AtLmua9KTPU9hi6EPncNeHB5Etp",
  "key2": "cknC5KZdUhWvk7adQgroFv97Cgihqy1LNjVvuEAMyUD7LbuTEAzT6LziTZqWgY6XZUtgLmpLhwFhrEGzhdwJJMJ",
  "key3": "2fT64vMYd2P684ERrMun1qzaUYaZm9mvy2uWm256XYfDpuvmF6MeTvNR2bG1uqbyurDo8hys2s7CRoZ9Dn7AkmUf",
  "key4": "2yeABCXHkFrB6weGgpUSN2bLZ7n2AePevijzbgLHT1i68rnYBCi9zgZDJAq713NMCxwNXCx4UvvhGFPd9rmqNZ55",
  "key5": "3mH71aPZdG8ovKRF3vMhYVfPkNXZJViCeeXzYL6gsE5HdQcY94oA9FSWaMCcQf7rT2kHBfvD1BTAGRcVumKi8bqC",
  "key6": "5mMU35YmkUtYAhuSdPJG4cNqx5zhaRCVjXLf7TiNeTm8hVqyJDx4z3ZfcjX1jLp9hyiEQfQuiVjAU41idJbjGB2M",
  "key7": "4Gh2qTzHbj52cB1UBqVweKWZXAdsTKgKY68PkcjtqavjyYXKZxDgPpisuWBZPDBoKaUaGRn5u5TdmUG9JnNnpC1t",
  "key8": "2pdHdsZwS4DWhZaDrHqqoSAFRbaZ3SvYCC8WJtD3QpM38tQNTRaQLX6YWaeZ2sBLGzKu4jbaT9atLSakZddCphSg",
  "key9": "33Gc73t1At4zNCFqc6mMGkQLARYpk1DwKrea4FTQUupFFN2wTbFxmDjc2MnnVw47Rjp2zU7nq4u27kHTnanGVwCD",
  "key10": "8JrbYEDe7XiAZaTf7K79tzP4CAdY7KYzkJqtYUi5beksLevZGtLTz5ifaqa2BqnrC9R1dTTM4hQnkQDTDZrxeXZ",
  "key11": "3Eb443Wgi2dzsPSZndndL5HcrPAkvGi2c8ot4nHKhoYWssCEdRa5NX54U2GjhomETU5JjmMqXdLc7ZuPr2wcVg6G",
  "key12": "3H6JACCoNEgfHRAXKgmbDoaRf2RxFQnjbJuUpCNEzgcnvbZ2eiBkkRcEa8x8tiHtwwAt7wKq8CdZJwS71xr8BMok",
  "key13": "43tq2qiES58Aoc1Wno9WTRy55qameRJ2HhHJ6Xp7AnW1K9rfSSnmxXAZPSMg1HYyR55aPdkfNv8eS9fWodkJGNSy",
  "key14": "3JfP14tL1skJF12SWpfhakQTBBzC3JRcVcCDsG2Q73XCeQzwAbudNcA6zNY224SFp97Xo8tVCvDc9RRiXd13scyL",
  "key15": "5qYgAwiP9mEvVVH36xkmDTpY75gLtrHDGtbeYsKV5cBrC2JzWwv49Z3T336NTLQLAyfctH8rJQj4vzig2CxhQoyF",
  "key16": "5no7CH2oqmdxRxVoRF5Juyn6VLD5PXp9dPyVYUuTjGMKVHtpjUoEzcLHz46V71Cm8ap91D6XUubrv45aFtWKY9eL",
  "key17": "664FBLj29SGhQfNBHwoAQFbNGZW21LcESHZYnp1KuLQmzrqXxFuMt2YGRh4b8bWUGKs9CnYnUffqEhndFXpttHyA",
  "key18": "2nqkddYqQT68LhBoqsnE34umAQnTDoQa8bckkGqMivAYXKVPLidJQW1yj5jgjj4NjqvvBxYDZas9bxvtAgWvHqpd",
  "key19": "2rC82K6a1n13nfCNvHRo92DaZYEQPtz2CbpaygXLWEeWrUeSKg6dNUA2BiNdky13NtddqvJYXczPWqS2oigXxVpV",
  "key20": "5UQ8nEDFD3a1zXNhsFJK4GDS62RkzuQzBD6fuabg8hqATUFjVvBV228WuMK73ydLnyufUYRSLdFw6t6Fj7T7Ptwm",
  "key21": "4Z67oH8E6zyhoHtpJAcWTLbFQy8U6dZvn3RvomGbRKZoJDQNsAGNUp8SBNGERaExcvzrFicZ4dHBi9pymBAUAivA",
  "key22": "3sGTqKnch4xv2c7wZkaiidWjac9K1PGyeaAdjLWmHRPGV9VfZWcbmTDJN8PVGEUXe3h7WR8K4sbRpCRFk74YKpCY",
  "key23": "pTmDCq7jwEn7FamKu8azMyWEeKoz1G43CiCr74Sd82qM1YoHX8fin7f737EZ3QgwcFEXNWKR7jVwggcLythattB",
  "key24": "3HbzSVFUce3kuJPX2Ggv1PLc8pUdBUmJTQEHZPTVnDNCm7x4cKvdKTrK83ZkXXydBvsaKYmiWss3VLwJYYqoSjJL",
  "key25": "24kUSJPh2a17uA1mmWjGkTvNv7c1mu4FaLP6mUuGZdnGdeR6Tbsk2b8xuKzqJBv6WB5RBqKM4PNVriAXB463myhN",
  "key26": "5s22tUkpQQDWULpXd1587LDdJBhP4q3tdyUX9AneTAwffHrVZEKdEYcecVRKM5k9JpH97WQVWFKWH5vv3DHgfuXC",
  "key27": "5yUvNtiaDX44LeyBr62ZFaQhZKfSNj5TCsgNDAGbkecBVUoxS9SXVHQvC7uYbsRPr6tAtK8igFdLpNUcjpNkJ3uJ",
  "key28": "3oJ6EvyCe3prN6WNUQb5UyZa4DmRKJZa1YkCdRH9TxAd4gkb9XizYXrMa3VSGkaf92SXGJEeuQMAPtBpvfExVms1",
  "key29": "5QtXVq3JBSBkXAQQGspHgYzCptAFy6DofUPVn3b3CWWGdjek9KYLhWbFvQKLWDZsAFWZMmVwGnfW5KGEe7AbSR9Y",
  "key30": "3i7mRymFU5AzR2mVNVQGRj6M8R9AjJnkBcbQt9RvWpsH5JNNPsf7fnnxN3EcqmBfarwmsJiYa4g6hKcnjCJpdjTY",
  "key31": "4DaaEAhgYFpznMFXGbzynRdPrmiugCGX3NZAtqFcXuLC5e7jTcmFqoqcew1M4VJPsJsjkyfP5nNm9bz7LmDeNRiC"
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
