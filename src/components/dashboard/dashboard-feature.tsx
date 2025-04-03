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
    "38P39RommY9xHhCCRv294Y4EGx7G5SHhy7a4JjnqyE3g7VzrqWzQWVkQtUnZgJYGDo6y7YTM4jZJgBeWmDMcSbuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFmDypCNtLYc8VGjuV2RHhSmVvmhisG36qqanWYFQvzE7ra7EvNVcLYURBf9uoW9CWdxKY2xL9NbecYvNMj5uQC",
  "key1": "PaLbGqfiwwVDiubaUnh2b7X3hN5YD3osvY4ZSLWfPEyFXN55QVSWw6yvdGPzSFwERkUZvQLFV6Uizub2PyN2iHP",
  "key2": "2NtWhZ5odqoAqGEudXoPFCP5Rmk5SuzFbidLVprqKa3rBMknZYKuNR74L15rouhyCvR34u9dry7DgEfLD76DVrpW",
  "key3": "NF7ESzp7xdhKZsMz36kFsg9pfc2nrdbevLUFwoDcsH6zwcfraBJBXMMuNLzpWJ7NgJ1UQdpxqBkAAN6jbg1YtVi",
  "key4": "mTWXzDuhQsebaFFAfbEWmtg87kA82zmXBEYTkQy6Etj8Nj4jvQGrFdhiwzDdSGA7q73WtHwp5d6SHzJx99BrpwC",
  "key5": "3rK7TvzEmL82hCqCUDudwzBELUFDqjHSwXPjMBDHyZggyfH81qKZy1jnq4d74hH7uXBz2b7bLjupgeW7x6HenVPW",
  "key6": "2xH1d9v5UvYfvQGdZL2Qe1mbt5Ftwh7PdPeUnGWPsw6MsLiYmXGYzCKCYkX8yV95bMh9kf351pfLRwqh3rrKW1sF",
  "key7": "3pv7KYR5q3XAqB3x6g9tNZkEf8av7VLuNo8HLGFxgBTLgd7S4uBDndJteUk2vM3S99Z7cPR4rEjwUGdwGPyZEvpF",
  "key8": "2r2tKt8vK296RGT8m4EtAiPcbHvAhCvEKbTAK3i2WULmURLE9uFrxx8A9gGUt5yazjFnhjM433VWscbZrFghsTEc",
  "key9": "4aQBGMFtQ9TmuARAa19MKv9kCbnUWB76PBQU88CWf1eQSf6CHj1BQbH45nChVAEjdht4rao5UiMjMd1E2QDDs1qW",
  "key10": "2fqTVJfyaEBV7JTa9WmQaTRkPBR4Hvz7eBh2yBniN9uLC3jdcXj9whCvAphcJqJJrG68cZ7GjQDoF9DYEFLHLUje",
  "key11": "66t8C8UQntHG3j8ffiZVmQvzrk5eSi5UHPkjCenGUDF5bHX3PykrJPidDg6GqULw1yLsrHvSZHaMSwk9S6iQgCw5",
  "key12": "2CrD2a1vQxxZodThEVZQPVMbbcZKaMTBBhUyydJ8d8w8KbryzJC53kqpfBbwx9t19geDXax8JmArryDAYQeRgPy4",
  "key13": "5k23j7yWNcAMgDYf83v8RsH1en88gzRAwohNbqLRt2HrtFRSTUEADP579HxE4Xk925RnSt3yfuS99xUw42VAmc1v",
  "key14": "Ef1Sf5RbUPxmxUXZ1prEZdEDa3xB8PSWvyzy9HaDp8tSBCizFdQJdGcSkpPuVddLRNzdq6EPSz88iXSbTnfRJsH",
  "key15": "5vr9nwg9TkHNuT6jWYxoGqnFDJYjQLh7XsCnwu4nDf7UzsKspWYSCM47FGBFm1NyZruicX5qhZoymrhjYt7njmoe",
  "key16": "5zANfcok7pXjApZYTork9YVMhuxa65LQmysvenLh78um5yu5FY9iUa1NR24hMrBV8gJS2spYiB4XbYDoPCMztVRe",
  "key17": "612PSYaTDV5mwHde4qFzGFW8rUyHdnzy7ZGTw5VPEMHcmvqt1hP2S9i7R2P5V1w7YDbnvT487Wksyr7bByBTB147",
  "key18": "29eNAAZjVButawRDehYy7MtwvWqARnd2GvwK6kgbtjAxXXRXENdpAm3Do1h6H4sthGTZiKrGR7Z44ueWsu3pXZE8",
  "key19": "3tKiS6ccT66gpbUwy6f83f5LFnWdhCHP2TtZ4p1PfQvAXkRcZXHK3AB3z3x8KCPFKSVXcZg7hu5tNvag2j4qu6Vp",
  "key20": "2E9j7aTA96vdeTLdjmC4d6tXWDuaiyDyTo2MmW8uGW1ufuBLvBdpeY8ci1EYUUPjkCzL4yoJYUcv1bL7QpBiMCA",
  "key21": "5GBVEQ8S8GbMXyR5hW1oRfya7YPg7oXffMWjgJNq57KKRCFruDQCCTgf6ErFyo3roaxEpxHC4fGj1rmVq5coWQe4",
  "key22": "3Jb6sTqBSg6xvAUb7VF7CFpwURUfxwq6WUJdQeEYPMru28UoNDSXbZYjvFijyhZG7nL9mKWcoyb8UQcgBs5Br53x",
  "key23": "5iVsZCqPu3TMZPpgQTsrnP4KimkL6Jny4gCbJGhSxNeD1DTUnr95iWBUyBCJDAgsdF95BNnohYNFJYfkEpsDzgEp",
  "key24": "4GQqoDq4tbUkrNaGN6nzYwwbotvg29FnXUN7kkPjccFE6Uh8cQM5Gk6NwbB2hskRyeLWY3QjefuNbwpxSBgi9mJM",
  "key25": "5s6VHYt1s5S94nV36e36uwcUQiJ7miRDEfei7Twu43NorKXRwCQFUKKGwAzTTApQrGNXZnJVDDubDkgCrcR5BrPy",
  "key26": "zkexCybRCRqLQzKd1qHsKzG4HTxEStRoyNoQuQ4r4wJKpe2km2kZYMCSBkFf5fwp6cj8vHsKQk2qMh4shJ6v2qw",
  "key27": "J1tUw8XyYKDUfBN7aSZJobLxXz8z6er8CLxeFzi31cp7SFe9iETjKiwczWbK2i4wL34F52Z7hKpULFj2VqjuKwN",
  "key28": "wxbJ57G6h9m7kavtTKBYRaWxTWcvjnXpccBRFTWhNB4tUyNMrg3uqd589SRu7dUUaTFcQKq3vV8UFPzLtN1ijaG",
  "key29": "2DuKdyUdyAjTacfVi65JEF7v2AGtgcvrqEKofqjKKbpgSSGoiafxZrtYpFfdp2mUamkAiQWnMSEjW2yHVe9kCFmx",
  "key30": "3zqSRTbM4BrZMa4oq65mTutVYovNcjZRHbzhaqrhTwFjAwZprUrRfWuhE16qBYQfk48jw6gYgYZxYTFGG1bSPpeg",
  "key31": "3i2B1CME9RWhbcyrY3mzNZpp2cNqVWQthZRh8D6nNdontUnEs9ZtwKQwSnyX7R4LtX8cRPceTKYuYuD7EUa8gT82",
  "key32": "3UCdAjQG292SVDkpWSRccsmVLULDx5wE45xdyuLbs8vYxnvVkz2YjgvTngwMHz7bBHydBxSJc1iLscEULPpA5oKh",
  "key33": "3Fksp7ahsULoavLo24JLQMHcSJnxgQT7oTEh9QPPmFXFTvxqZ8Q6EzgTHgeJaAsp9QTxDFnht5rJV2w9sThRp194",
  "key34": "3BPSiR9Ddn4Nv5agQTB2ECSfQSkJMAVh3tYVQMoWHB1JQYNqa8qMgpbdYjAVSZPTk3qN46kUAmj67xE3NzwEEzYV",
  "key35": "435GPf1X4MU3F5XToD2XgWEB8yGseqxc6NafJi8L2rcVzPgBwBAL8qGh72JHgfHVCYqjkvWHpuapyuncfJAhHEtm",
  "key36": "4WftpkpfmGVsAZwKJVH2AZwaHp4gUCRfmF3q7SKKUEbyDH36m5E1Ar9JgA1XiFg3CRRw4ig7vT3Ppc6Pnz6SSKMQ"
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
