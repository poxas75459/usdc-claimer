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
    "DhQWYcPmNeMeobfwGjQKp4K96AEcZhxHnMaQ9JDnPZpSp9kpS4jtdwuxN7vdJ8qoWW4W4Fymoo38EFCTFeqeRRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2PW6uBXBGoEAacYHMYN8UtiFuLhj1oQpakxWz8eBNY5VtdomLsJXKWrsR9jdSUaTwa4cgih14PFPvWMWEKJrbh",
  "key1": "63a66FNNxMmhT3y5XUGtZsHEQtigRYgjf43vpdZXWVfJptf6QAQwevFFetURDx3C6mXZaUPG9mYfr7tmgLbWX4aT",
  "key2": "4FzK5sSJFGHQ7VuGDs8TYQBuGuqo8g75mBFVEyxdW4nb31NTbSLeaZFXJFpcDzUr4CzZpHWesnTR7ruU71jLk6Wt",
  "key3": "24V6XutZmvmiczj3p1fecKfMxRznGm3EDKqPfCjRhPVL9FJQGHHBaxhLMii9aSgd5rQtethFm77vMFZHzBynjVGA",
  "key4": "2P4EdrXQbg2wgnRsfaUw3Sn7YwqjqSTrLgK41ozbQkptiN4wDTFYGm9WKa1kBfBQY5qSARPfosgkarXcuotcEbty",
  "key5": "Uu5UF976kNLGzXAZUz7Q6btFnnFALnin4fkzYLYrjcAjyTxC8W33QjxvHdzaZzLUH3e2ZiTRXUZ6rHaFcXwKb4B",
  "key6": "5QJHcPMFDdH7Wh5oR4uWWUwCxbdq2iQYnZVszJ9d8nsy64tk5BQgsL8fcrk9tVsK4i4NgGuBFGzQgDnGqKFjcGdA",
  "key7": "3LfeJs9UnE58SMCJ8TEcJTkZxfoWytsFgdeMEP2iLqWy7589vFHbwQ5wAjqTdq3cmK3HxnE1jYGixqNC8VV8ixDf",
  "key8": "2ZBD8WN65pEq6AnFkxerMSovV1iLK8K7ph5DSmjfj5FgzcoPhdSBMhqcAHV2xCFotvNrT5iDL8uWKp1JnyjtcnBZ",
  "key9": "3HqFUU8UpDVRCwxtsD8f8c5Xjba89HkWVGQZz2TmugjErGoajRx1t3VqiYSmXtGLcbUvQ9nEPCEMYfVXLRc2eSo3",
  "key10": "eZobPUPFAxWbHt3D7j3K2ZbXWyUy5cR1XbBCYgtnWw5Dqr68f9Z5pZfZBTDfFnKgLZb7UoDPgsjZnCQeYdUAtXY",
  "key11": "3oSvzYLZgMFqSx9nnwBzKjdQr59JhtKKwNq29r8ERGq8ZmVrU98rehNmiCrRCAQ1thdceCiUtqM3pAyjw4UjWh7x",
  "key12": "VSRaHVzrxFDNCQwTdWbYURZhe5gwU4XuNeVr2QfYbhF3bPSo8abyhCMDp6FfBe2iLnQqRU8adTREDYAWvgSGTVX",
  "key13": "527i9NJ7f23Wo9dvbF5YuNE7Y5zAXzPTufeAJPHZQ3KDVXoiomekN5Pqw95tkDbH8zjR4sufWTSdmrpCuAiRQs1D",
  "key14": "3Vw3tVsQt6qLERvbmPm72hYhqL1weMGFDKSaCEbmvBhR6GyM6nsViDNJHjcJYwykJRMYBJg77zi4EmnN3j9HdmrU",
  "key15": "47dwakNJm4n8rKVi1Bhw83BgruMYZbsAGNrcktuCfP4K8o8srbxouXA6gtMA3q5e7TajiwzTUpt8RJrXhvryU1A8",
  "key16": "3tjvDX7mShweAGxKXKEXHGKfVYvcNoqvYTxTq5FduKpSkCT4vkijaBp8e5BaHkZLqDdVZwHTQqn1KCMHec1nmG48",
  "key17": "2FKkotSuNg5rkb5wM9MNKAT5uMV41xdo8FN5jaeJqMMhCPN6GD8aTDS45UU3sf6XbMr96oykenAfqmHeFSSQySCV",
  "key18": "1v5eK8FGfGEFeSN6znduaDuD8PrWkHswMpiVQ5mHHGMi8uvLWcvzP6e83QB8QBXfCShQCpoBhXGi99vM57diVZJ",
  "key19": "j4SAHRGJzjdDsRBDmLq7nUqaqAfZWrkR4PhzbV16tui1s3m5BNvtYRNM3nCx53P2f5gczV6p1MzKKyVadKMi55m",
  "key20": "3JR4DwmxJaYzqm4iTeu6zAm3byUx94UXP3cfeMaxsAjach5WGgB4soVhwCzfci5WgoWNtPXEvvWRUbbdUdiVfBsK",
  "key21": "eryJ6JMVupeJKaeKDrCGwC8zz4Sa9Pd2rc3TaURbwpvV5eL9LncsM7eQsaLUDXwU3N8vLDjjSDwjVviL565mh6b",
  "key22": "5FuL9azqrgi3J5pZrTGuiD3zpSwfqRjaRPze7DV9Puzjm4zRvaJW2GppVUV15aZ9viZeH215zGrR336vYGPo7nBo",
  "key23": "42KfaQ3ATf2X2xLdFH88u24K151tHMpCfKTerwe4mtUTXVeNcfCrDtkAZNP1uJTxHtP8JnPspuDRuGF3ZYooxvrc",
  "key24": "HPCViU9a4bczZhRUQeT6hzo8R7y8QfKTo1WcW38rfMVsskUqLhXjq512iJX2mEZiZVrELsRpdYRwAvU9mvxMLdn",
  "key25": "2VFtCKmC3HrQuXDNzEjak5UzdsXAki636c1UmzgaiszS5dos19eWAcvSqdDYScTuic8rsFg1LHmqYQDqwxcBNBgN",
  "key26": "5xwoB1zqZga4QfDZjfnD3FXwABD82997q8msTxKkomiA6vP34DFZAPPaBqq1SFnpMyyW9ojjudQ8amWWYCKU5nFq",
  "key27": "2y7cXSktLdcfsVka6W6aHqfMVmLn4BAFx6ZWgrocvAhe2PBGRKHrwezGCF7gxXzBeS1pXnBfkK2SR3G7K3SfqwwN",
  "key28": "x84iN5bpQAoH7F9KD12fjBs5stfe4JmCFNy3fJPuCrC4APt3mxzFbHBBWsxqAqzozBc7tB88otKJZFRbKTp1GkG",
  "key29": "5Zpb1FpBBJ5Tu7qPaCoCdiSWtHm8Art5dUsTNSZgAW43irmdKwPGyM4yQTuRKUVGKt4aBMR3fBcWovLbCWkCWeNK",
  "key30": "BDCLhbcQkYcAqVQCn4Qi8SFXXwBvt1aQxT2LBgTVyvHmTLBsUGbMwZ5UDJxdUvizd4ioA4amQMcrEsnbK25eMS1",
  "key31": "5N9Y6RbJKsGzCYJi7essNN88AHMevo7QUbtSE3rzcbTu6XCXCGe4k7MLY3qLjd8ehaoFfjgo37aqJWuoJi2SVkVm",
  "key32": "3aWhS8sQ92b4b9AQhm7QBoujKsYdqMsAiUT5rVFCRz3fnEUHkuUm8mrVLms3ihuVLS5CyMDbZ6bz43bhZkXRuiC4",
  "key33": "3wPjLXTxFgogM9tLgHrmDhJZE5RiC22VNWNN4qmm4h6LXhbBYcLH8UVxrxguce6ZDCwsp5mapNdxP14QS5ewPtBT",
  "key34": "5UtVBRTieZHw5yfRs6p9SCZeGtkjERo6zi9YFGKmRt8iWSSjfRfijpZBq8PQ2UEsMEieRYURcSFYty9SJaH6Q9cU",
  "key35": "2eaUFdXDkc3B3T8n8otj9kZZCB4mwNXjjj1KmDNRngnLxoLv1Uh9UoguAajqs7pKsKgRRrFpaakWoJ6tw4FYkjGL",
  "key36": "3xrQ5B1pymhU8F8ECEhSRiAAcGCFCsWN9T4pcbSJ2xvMaGgkvoDzKnoFymBTbXo4jPUYchNukAMq8SGjXV4ztVhx",
  "key37": "2RmYHEZYYY9GH8jLTFwEJauEq9MR2JdEknaTwRmewr9zR7wLp3ZqZoAY8cGL4dJ2vPpuzu7374o4u3a1un6yp3dv",
  "key38": "3NJi1UtTsSZbeLNvkeodaWNbPknGhKxPAXoNM8qQaFQGVaPe23o9R5LkL87qRpVPPoYs8XY4PHjMnHgWWfndERoD",
  "key39": "jM2KALEuuw9EFRN47BWuoUQ4F2fMQYqjubgMBpZVu8UZVThqCg7gazR4q6s9sdjJnfBALtm2v8ZzLi2XEMchrNu",
  "key40": "mfgWrr6dnD4HWqgtAgwJiP8sX3yBz2Vcb5JAra9iTJrvCXeXxpTMc5XpGAc37QfR5B2ResFnECrjf2uaA1fjz9U",
  "key41": "Lu2hio4LuRuUmbphoEhA79ewVxXGsMSu4BHhmRWBCSEk6HZa7votzGWQQg8gyZex9YaaBENZXgVZXSC3HveDTo6",
  "key42": "L3GEyiPAX4mgyR9CBoNJwzhdMPrgnSNd4X258bcdcb3mivFYkLXqh8sGY9tyP3qrwAxY6Uz7SnY7XVsEZLhnCmm",
  "key43": "4psHgWrWZyJ5M28yvrU3JDLg1vkxmhMAaYe9JkgviA3MqBinLGJd35ssSzGgE32PSLvvXc2aX4Jhf5uDxB3zxzhb",
  "key44": "3fy3mv957sh4pNJYTfzotjYNeWgXJTCPhQmbZravTvfsZddx5aHUCXuQ1wWrzTdKr4G7VS6Dvt8pjuJKEsyDu5z5",
  "key45": "3u5UghH7KEaGKRUpykrw1dCEf9SjuKufbVaMV2T7DqwcACMsKbmryJUU6UiyeCMk2r6M5xZ5R7A9gAUn9WaXKMXu",
  "key46": "4yiufsfmtD8eis7pV2UdbgdZnboHFJoXxZK4XDttesE3BhJzc2Bvni7bZKsNrg8kdM8ETgpxroXz8vqV5hXyGMcr",
  "key47": "5mjq55XuukMwtjL7uZ3M4qFVYo9hjsSTELaNeYDVMc9ea47xdQLzKAuCeuN8QVfiW6tNRqTNLtqPPEMwiouvzi71",
  "key48": "i1dZ3uBhCCt43ENXvP65YqcJDHvZd5BE7M5ABPxgC4tm6jBLiXFT5bkV4NVaNBqfL66jcLFE1SjZ2eNcEmZioQj"
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
