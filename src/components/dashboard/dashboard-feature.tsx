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
    "4Go4QmGt3aUZXQoViJmER3Uy2sdcKFW3L3F4dqEVTcjMiATRRKkkAZK4re2G2nvtEXVGN2RN2kThPxsPmV2JcJ56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ANoRFK2LzAw6NkTfi4ZWnPrj2RQpfpgWa9EH5pqFsFxQSdjbneQ9hXk7XKKjDAzXSNzWsPDmjgbirrJuot2jfS",
  "key1": "5ttqdf7WYXL19mwmVFKg9MA6JFqntwkg8Qq7fuPYgtQCVDcfsLJ9MbRRRTnJ8UWHaWG345L8KYBfrpvWgUaQu7jm",
  "key2": "77pkkqtUNF3vZaZTM9KVWh4vZmbhCX6uXPn2iotJFQ1pB7xs2esBupJdGDFGccbguBtSwAVNsdZtYP7SSFiU14r",
  "key3": "5wR6yFpYrXqhEL8QLCjSGUrbSeFhEcPYmbvSTcqNTCYJjjkJqRD6rdy5PCaSbcT4HNj9vWrcBqEQa4BnnTCmcs1Z",
  "key4": "3afuPtNy2vF73UjH7bVwSCjXYSGcXs9Nac65NfwNWNj4Gbn8y3R1cnBR8ZTRopYgBpZoD2VZA8oJU9pSBd2nwxis",
  "key5": "2VwhNz5DyGfHmiU7i1x7FfQ4X3hFzwWzd9P73XV3fUrKaShgPftsvafiikz4AziopwAL9uLvrWmkMXT8itAX3scU",
  "key6": "5WJYbt2d2QnXunAHMwBFjHmrfSrkZUg1PC9UDpWLHUfoXdBup5TSNAeApf5N3Vo8Ufx5ba4pZdcYV1amQ6ibwNWh",
  "key7": "4wafQKY9s7iPP6emMQW8DfAKbNrXf8CdiCoN9rM3teDu72rkfYTpdRxJhP56fjyg5LVAiTs5nyhGGe8fSrCf9XT4",
  "key8": "5hQRhuU3YXnoDwFf7JKCN7ZTDq7k5eaxoemkhVzR9SMSgyKvYFLjSEbDmiqGnQENvDYYCKdKJZGPmghUNAAf5syR",
  "key9": "4gE9m514ofkwCuEVMbbK52bTRTeXUqskpHCQn8RBVTNM2ebeWqxgkCdnk5juCU4easmXzhXa7b7CLveAEsU77kxN",
  "key10": "23rpb3L7qM9VZGT57WASEPaRecNTvYk9zAifM2saaNT5WpT7X8idHKkaoFsVWXVLmrpMFss5M1H9pFk8NYNQzEfh",
  "key11": "2F7PYindXNXunp5YGe5VQvUfy895o6SrkFvA6q4M1niAKF3RG6TunBATVwZKPtER17DfA3e74sYAQmrJzs911EGf",
  "key12": "5GSGcbfMe69WP886jXY5rEQDeQKQLTB1gwy1PoFU8mmq9ZD6WHhZ5teH1Gh3JZ1S8q9b37ZvaoJY8q7nKotGn7hT",
  "key13": "4PJ9reTjNhsVTCveC9jUJnjXPg1QR7muAyd5CoN1XCF4AxfZ1225xDS63y4jSZVeRkKWxZiWs4DQ18kRdhfWTogy",
  "key14": "Q5NiCpJmuHyfTYjatmSqk6D1QdeYSszAnHmxV8oMfmuhLK1DeATeoG3nSzmvSC8cJeVn774HJMAkwaxtpH9DRFY",
  "key15": "9HR9LnqNzW3wczGp2v89YUZJ4mGKye2TmYieiCJ3yZ5eSntrf6eU1eDsouBmuA8XVSrMTWC8gRmYyxay7oCqFfS",
  "key16": "5545fp2ZXQHWzgZNYJmjTJV7sGFS73AUevnYqHhTAL9vtmuq2mQGCS4AopKJJBmBY8F3U8uRAovbTJgCYM5d5dD3",
  "key17": "Si6FtVRUQYaGc6goxRBKDQWpj7HBUCJiB63wBQVAgPyNZBHhrLRcq23tUdF8X7s3mWRBXs5C1TPW8ptrUUCiyAt",
  "key18": "2pHeaT52bgjf7gX1JY4qLp7BGjQT9QyUQboHziqrqwGyTeYPpXAmF5x47erS2AaZDtK3BpgLis2B6mgDA56LKUCP",
  "key19": "5NuePzLa8XQSzpw39WabTQC7X6BRzWokXf78fZxtYHnusFTFnLyUYB4pvpvSr6EazNFz4SdhXzqWK3JpATrGgu3n",
  "key20": "3uwwf8xQmPobVADfhee7dyKkyPZCkuxZNB3n4fFVCHJkVB5ngTwu8NgrLRX1Hf7VbxCtjf5x6Fbxj2TU1NtWZvzv",
  "key21": "3WGDS4MnoUqhGaHWMdaZgGGA4kBY2ZQkAHJtqoX4PVD1wEKfXrn72XTfieXPpiP35anPGrRprZ9T8TCDk3nt4iLY",
  "key22": "KNr8EnY16sQozN6NjLjPwMr7J7ZnHjLDGmanogXDHnGcqFbpsgz8Mmp8MQcNFFLG94xiVHxAQX9grAarHBGw1Md",
  "key23": "4UQgWCuxJcJTYbbP8cxohGYdQaZx3wo8eVWi212dpPy2TVXzvQkPkZRqH9eHqybHLoY75PTntns2ytxELVuNwMSi",
  "key24": "4q6eXchjjyzzB8pQDgus38pmpfKNqYSCxWKD3kYMujZPDRT5vYUq5cz5A6a3Jx8kt6o2thaxGAPMDgXFbW4RUR4M",
  "key25": "4RSHMFhf6d3tGwYSg6oGaH4JPo98gPLDr5Afi4NuhMZgmUiquKqGbt7zypR4YNCvjVRE3As9ytkMEyjBFv9Lm85T",
  "key26": "4Q6QvWZB2LHrs9ouPAZXYfyCwhz7CY4XozrrorVxJcyEsMwJJdWrfep4bsFZftt5tTfvVK1BrbR9P1DL9QYBFqVe",
  "key27": "5iob4GRfhSdopehh2mmJuCBCBK69JPqzK7sLjXaKmPU5YRCJFpUr9mUMLwKiTKBxSEe1HvsauJZNUNhJJWfvU9EK",
  "key28": "3cyYgWDxY7pRMdJhhwfVxwWJ7m8sUYm3W26ySiJD7ZRDNqWGChLYFEQZTJEE9ZHJ3PZ4NysWK76gV1iXu512hrja",
  "key29": "2E9gnRnsr1wCziGm73VdzQuxqVeb2rWgFqqBXaqxydGPrc1CvbCvdUTRpqUb8zvVn91vxwZaqWmGi4WZL3a7Mk2E",
  "key30": "2sV3AGrWUHRkG4nZw4C99JvTTdq7NtNiYFicokv9ChhLE7hjMH7Rx28jfYNx4zeDAaQFsfY1t72w44kHp455ruGc",
  "key31": "GeNguQhSnsn7sKopNE4rmNuA3Ac1yBRLRtcTzQqTXMp9pQ8DUEyvojgZazYUtkfT5xnvacEFhfxTQrBsq1GrQ3j",
  "key32": "2nKrBAZtnc5S1PrdDQtPQi1Ux6SuMJm82UmRwyfLordFnF3FBb4ec2q6fpGxQi3Z2eKMcp9T25y8FKSvgcyJtvbP",
  "key33": "3PsX4ZWEk3rZAnSSoEKNczfKrMP4593cjjCFBM5TBwxNBd95r6qXBnEiHPzqQpz8hP4HMMvb7KN3pZfzK2GDr9XP",
  "key34": "3D1BZBnZVSoj3AD8YvcFygrLUAv9BoUmZDXho652Esw3LvJ5mrTiE1nS7FwSGakAh1H61Sk5pT3oQAwEb8Bzdb4V",
  "key35": "5VkADaA9GGMSaQWgQNeEdfEzKtbtSnffMfNuzF46RxeUYXYqkgDuNJRtupsgzxG3ND9k5sxQSqVnNcWBLwsN5975",
  "key36": "4RYDM2J1JYhwLrQnxbBcTG2FBkqGXBvHMtfRTG7vmr7k74kyqEQ6RKVHzYqtJnVTHSFxBNBM8dHFPui7E6fDEa2G",
  "key37": "3UUJwNv3XhXTTyn5mTtZLmX7TBgKY5GU4UWJe8ERGCNJvCV3673MHdagN91zTeMauwRkMEjspMPay9xGPEfRS2sF",
  "key38": "4PoSQv7CUowhMV7edJT1DQ9fR9ian6dps3CQruiDEDrPTwqSpdTU1TTVua457dVSb3aF7cpoYAeuzJ7tThNotQqe",
  "key39": "4hgu6Cgua91PAeUVy9ob3vQ5ffDqENwrDQ5gXfNxXvsWzDpEBNCG9iH3uipamDcKDVA3oa2ntbS8MG4pmuyzLtEd",
  "key40": "3AreExrrKgSJnRuYjj2S7Ywps3KbGq6QrEhrgAjtVxyKEZ2Pd6FoCWicqr1eWEV9NyQ3LdyJYqDR7b1fk2HeVjTp",
  "key41": "GzQtUAPJca7RBmr7ezyvf8BWAvmd9WzzXef8dknW26ij8FS9CN53h4ULjGXM1VxqwK9XXms6xrg6Y69zC9w181X",
  "key42": "67QckfigE1fgtRTNrmCacMouk49quk6Tmpyc6Y4viVzVJsKHz6NW3J2w5KH9ytqZk4NoVdLjHPMjhA3oUBEMQHzP",
  "key43": "4v3ex2ehksWaK4bVesKgryjTVL1YgyvvbGjKGSEmGtLXXN2tByW7jpTh4MtcCjLtSESWLQuwHX8evGgfbjzE2qJe",
  "key44": "KgyxQXFSN1FYwMrxkHWDn5nYUrJGeGwTydHEGHrL2yH6V9xsHNPrjoiPPkQeACc6DHuiJrmz6BkA14LDP8JpdhN"
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
