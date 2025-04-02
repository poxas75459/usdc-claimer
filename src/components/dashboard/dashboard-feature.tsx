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
    "2eVf4QQYptUKpJveMEPa4GtFmEa4mGWhis3Zc8d1sawanZqqyUfgbJJhUMXNzAgnJLTuVJ682YDVzWsPvLWxExR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZUYp2ByZDmemxo8W1xJgaJGtTH8htLkpo8YiehY3RKi2eDc3ykcdmEoJYHtDJ8shixMw2hYxyofpsP4dcDRvsm",
  "key1": "35CdZVMkaztGhW1rvieBCw6L7LcbcUXSqJBZahht51wC1paxN5N1c4vCWPEobKHkEy6RTN66hEj53QYaUY453Xbf",
  "key2": "4JcWiJvmAFa21BQQTrKVJmHs2u5eknGcwPWMcZHtfLVU8sfX4Ck5w43caQYHYXz574TLqsanJEqyqEHeVv2qv1Ge",
  "key3": "4wcRQefjwziQiVG59B5hLd9UVnaGUaKLctYoQXUYrCTkKuUUBbVS3vU7GffDfp2TkJfv3gDphzWHhYm416FjV8nR",
  "key4": "PxF5LBhcDJiL6yKJQH835SuGm2YmBd8y91VpX61Cw9pcgqUNhCDnFkN6cruizofqtF5mVX3xJWRGt28N2heCRV1",
  "key5": "2JAU434ACmLEAhQAAbLhXWTueF138P4RHHvF6r9G9R2mT1QKuWQpoKoDRPuK3P62GpqNAzP4EVLoUKf1ZLhmUXAt",
  "key6": "4LUrhWFtVBvSERzRgMgzffRAqsgTx4oBsZGtCznthotq8xUmvMFJ9KVwdAAYaNd9ryTdmLr2BXx3KFBpcwKVPqtJ",
  "key7": "4dTACnj38sYqTdkNks2tnCqRwCDi3AqJLJ3VWDmHDgPEsPAqCypfqDsdXDuDYUpYP6rTEQ7fvktCW7Dunzeii8gu",
  "key8": "35bjG58nivmXXBRGySaBzNGy78MrtoMKdAhrMYXqoHyKnKMFw4p1yYg9qYhCx8shXhbpWyZ5hdufXdCv9XHGXSL8",
  "key9": "4ZFjnSXBH3T3oT8FWUjJbWQKh6z9zyNd3QZeE6BmDaYKquBix1fv959LoEW3hzwNBTkYEULUs1BLcX98KgHy3skT",
  "key10": "41yvcnHXVw5PAWW8UHtM1MrY6FCFzQJTzWEuNmRwSYD4NZoaSJJozqBra3esbVnHs4ch54giqdj6ocwtRXNZT3bA",
  "key11": "5CCStTXv1DH9xnW7FWHvyhMFH1bX13nsgragpusZWb7RcdTznuYNVWFzoUd99HNmPxfqcrRNgJoeZ26abH4obinF",
  "key12": "3yrJfLjLFsD3CaFF6ooxWr4eSkcDJkEUgTfw9aYVe3QNnBySCm7ZUZkWN2bN8SEnJzqY5yA63eo251KvHSjfS2Dg",
  "key13": "5U5e9Z1NwhSBAF9q6ntb6Pj5QQ9A5USVeYFYrKa6BnJ6FmxSS5raHA8ABciQXedfrYzbeV9vt2ACg8MxUuHkWrDb",
  "key14": "4feV1YfKFuX6QcPpa52YSVHMPzhgFFBcvB8xvqctMSW3cqxDcHQpjTGy3EjFPh8r26GDJDK6Lq183AG5DzGgG1yp",
  "key15": "LrQQqaRtmTyzvcNYknXQQ3xSTT3JasKovSr6bM9VdnarMHdJwqSKPzmQ4FAVKKWDDA86qu45Mmk5pbX8y6f6gyq",
  "key16": "5QyC8mPSKwyr9njo4qpJiQx7qd3ev8AR7zhL67JEovJ9H93h7QosPvQ5E4dsxeyXPMYpEMSEy9UoBzPjHMnxsWJG",
  "key17": "37m3TmA8p4mXc6hRtrWkbfTJaca1xrSVXNcHej8pTgXy8JozmKGXo8VHcptwo34gsWxzmdAe1fFN5ACEwZoCPcyT",
  "key18": "234hko9zEExRRWoa49fGSnufUGw9KXBnopRkoe2zuXXuKx4DxYtCxwmsaYgRZG7M12LsEEW3TTTgUJ8RGPBrDZTy",
  "key19": "2gRsZSZB7eMLjVgUk8vEwPKqu8donLSrYPQt96HJkCLTrg3gsDoUooL2KQwQ3UwhpUgGJJ2JHpkeisuG8KY4Lzy",
  "key20": "4vwK7BZPMDMoocXwQ5aEK3SxBM2U1twTcLg6D9smgxDzXHAUvnQ7xDiBhN9xgoTNuC6uQjYehQGzbHxsYivN3D3P",
  "key21": "2myPRKSAWExCKjrSh1E5uXUxE3GfQKxtbsa8V6kcQP55PZH9RdXA5uo5mzq2VxDm9TjEGnAcERYsX9iMAPpB5JBd",
  "key22": "d6E2uGmJDsUUU3K8NFcq2VbJVNk6U3nMTkpmcGyKctV53Jo6DYDDAidoucxqWgdSaYk4eUNELuwFAMwkK9dbMip",
  "key23": "iWiyqHmT7bpmmTGCTVmTVUu4w5fkThsJxW7Mtu6BEeL9DUFw62zFPR2hm9yhENHeaav6uUPCFFXxJWYGfQNG85F",
  "key24": "5j7DZkSMrgDyZdEksDXWE2SqfmS5oPgdLmpTMfKbrqVcXntjooT7r2CxNt9YYX15BqtNwHsJVnh4Tv1hiUEX8LsJ",
  "key25": "5g8m6Jdh4GJFKy6J9EgD8fSUiUNFdDLSjkUYZECMjf8QiLupKrQoVvxSwA3jHPBjRfGYBR15uu4Vh7wMjCtudwqh",
  "key26": "5NMT811yG25yvx8YnbBs1KpYjSAfmRK1ft1cQxve7JYnFQkXpFrxmgt58WGjvFHqzCvqyV6Tw1rTzF21DmxZPMWu",
  "key27": "3Zk12F1jaiUshBr9YZyyPU5r5eV42CUazbA2yUNXKDTm6dBuuXpAgU5Dj598Ajngea5sMiRbyY7eoKuhMn9AqLtN",
  "key28": "2kkv36NBGhFBqycgtMXaQHNt6GqQpbMX8TmfQ3aUKkMH4yLz51jf9J7Hn4XrxN7XASKjCBrV6JeA7fwQkodWzXYx",
  "key29": "B6TTwYQ63zvmJ16VBhx41jwCHQFiRkWe1oQ28HWyJi5sVH96mt7TZVAREZG9ctmhj6NXHAFyjRuvxmK1XTvVs74",
  "key30": "4Mhxz2ZNqQrxckSxvz2pMJoakF4CPoBAr5DBuAs1K3eMhvud4agy8M14avQXif4ahc23Bh2BeebEKH8G6wBRwqXN",
  "key31": "2DEa3U6rBFfsTJ9TccrRHs413j1WwnyqS7fqJDBC7iWAQsjGvw1ZgtqYtv78DVmeuLxcsyf681iFj62DvwfAzgbN",
  "key32": "3nuqKNy5W8MmaKH3u2ZZtFDGuEYh5Tx9Hgynxi5KRWLRrVw84iUZij7eXTES1HJNGzggLu5DM6XEETSfUaBnzego",
  "key33": "kjbx9cVQda5rEPZRUku2dwK5FHmgiFMTzjjB785HnuvNzbVWBaeYMJQ5Gg7ot5vzqjdVEKsMqfCcpNibYvZkcor",
  "key34": "3L2rot52fiYxaAGhWhj8WA6zUSWHgtzZwHiQwoCNsSwbjMNkFtpAi8pgzT3K6y5iXELTKzBCgGpH1t6dRT3UUdiw",
  "key35": "5E3VJ1ytmNeAw4uHVzD51PiVPqZdeVgjALitzfiEeEZkpFn6HFGMEcoeqK6vXeegogfgNot6J67HCcq9ozAi4PCd",
  "key36": "5GabUxSpZH5HnT183rosypDiP7rRD7W6SDR8rKXAfTR4zkYMhGBC1R7f3zWxidRi9qkcTdt8m61sHuZFvMEg6dDs"
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
