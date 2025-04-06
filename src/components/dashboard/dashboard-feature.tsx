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
    "3pEcwFdKXxAhcTjsGrQyDNmHA9wvDsMGnumg7ok1GVkrSDzd6GnR6USGzFtQAGyC4iBbRvFNJ8W7cdqsLHDYNPBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnQcRSdr5JeoytHYrFXoqbNxZ7oUT1w4SafXnZHQ5i2bm97nVwUR7PgxaiLgtac2Q8czyuyjSMoBEotTQEgjPta",
  "key1": "3H9xwujn6Hcr1HpTJYnd5CUPuaKAqy5tQV9MAkd5bk7gr5mGoZaFDNufQs5kqoC9H5o1dvxtL3aQbWDPYKX2iuPr",
  "key2": "3FkLSYJ9ZTZFYw9W2PmZeQLSKmzmJVoXSNrd4awjz86hx7LMnPdTku7zZ4b2PJBH5YQyDsk4tCMmS76zRkVZk1ea",
  "key3": "E1k7AsCGG6SYiwyhYQk6a911Ybj4f8auPehFPsJt1BbhnGNTWNj2mtEW1P7p5Z4k7KvfDk7d2P8NF4uvcYF7GUA",
  "key4": "2RMfg16ggHGzA519FJYS4rnH4UNTBJYpMzKAV4ik2r8159kJw3Mr4gnErUpYrXEkfR9ig6XoqnQ9Uea5oVDMW2Pr",
  "key5": "44PBYvQGfWARPQkAubuiJqa2h8KiAVtexeNzKfLoPLrfDwWKbMagr9p2xSm7BhzSnnz25XK3LZrZvjnBTvc38s8q",
  "key6": "2b86pgeMkTYbsSjs3FAR3btf2hAhzqBtkTUYuQnCUtrjTkMt7BTYTbGfYAyDTTfHfGQ3jWqDFkxpcHSF6zJifSQr",
  "key7": "5xzGrGrCyKxxrCt11mphhhX17xWBEjxXs9P7EmCQVZoFhVzjHqRS3muXddYx1Fuv9Ftpu2ZTw7J7tycKwT8FKNrA",
  "key8": "5qYWH1C1VJzaKsHuUfdaQfdVvVNvwcx2xgnTqhLeQLRDh6vZX6XJfchGUGo3WVuujEsi3fEm4Vi1Y9W4WieffJnF",
  "key9": "2eodw47RJn9i4HrZ7SpfX3N5ETEWh1F5muq658s3hGf4mdJcFaAQn7Wa1ZTX75Xx5783nryHnSrpn5mWrWWjQwWb",
  "key10": "3uekCrZSfz9qjVgZK7ibgLRSj7fQDiRzGeyBKSQMV9sCWoV5hWbY5nY8eJ5nzDd9KCiL5St8fzbLbmKgWT3jLryB",
  "key11": "2DApe3syNkkyabV6PBde83LazMjMhrt3AXDTiVZA96sMtNPUbcvFdcnw9zbsiJtwdVkgsCkFiQAPUej2NGbPwZFg",
  "key12": "3ZdpHY7xc9Qe3Mokc6ojyJ5z56SdGyCk9iBP2iD74h8C9j3P3FH9k9k82WWtEtTybJavZnc32nGQmMEbkHtJyDL2",
  "key13": "532ntG3GaQJEqy7bey6h1QBDapF9WDmb1CS5WdySsgTgtZCdw5iw7DZij3owwBjirqagHWtBUpm6GiGwjX7HykU5",
  "key14": "667TaZ3ACmTgnMwYvBFZANT9u49bY5hXbtHVNkq8WgjayKcgrt5nTvScAhAork5XDjQRDvmxX6n8vdjWG13yp3xk",
  "key15": "5EbhnZLq7uQ9pr1hRmzfid86sLGpMftf3R3WvZej1kkbsWCWRwKDd5ooM2BgqVei9ZxE1UgKD2ZENj7RfPToFLfm",
  "key16": "bX9rx8BbVcu14qQuEhu9iiKCKccHLx3zpbxvWT6BfphGcjsxvYtytPmrh7GuLDoFHbocCixKEsexJZB46EusUJW",
  "key17": "3sztKUpCCVtn63G4M2jDSWN4QoDWghZ1zr3fe7WhKVSW26rfhBnNV4g1UDA5HyRkTQA5JvmZJ3px2Ng4tVzWgKz3",
  "key18": "575yN1RvXxB25rSKZCVkkLtZkpnzjjmdF4ccsLmva1tfYx6TVfToiigf2f7eAwrNv3PtqXzy9HKYHfRtvw4edYRt",
  "key19": "2ivwnkmRD9Q7fcewXVZ48vu7tTo6s6UpNWtWM4aJPjmCLq7JtYU4v475z6oQDgP63XxzSjBBvRP1PqEbzASvdcFr",
  "key20": "5GEjA2vnRLHs98RkNUp8Dhf7JtEzFh6yeqz3m4RykkC7W36dZbhqmVnfcx29SQGaL4gpYM2KDhhhD1m8hLW2mj6d",
  "key21": "nH1AsRfxKvGLr9gJFbd6EkqC6fdfLtZq2NXH8RPnS5u3DQ2PX5LRHMmioJA1QencXCXDVdcNvbjpXPXXWPUBJNd",
  "key22": "5zMnrvg5UvzFtDPcK4Wf9dbFxR4ByvG1eHDHQEi5XrZv25XQV1hzcFV9APdfAErunCG9hMQ5SJDyv81oas2tVBsR",
  "key23": "5rUgbmhNxxKRXzoec6ZdxAnMaVfBg8H3YDNUWCQguYkfYW4gVRtdsxB29pJZECCDsrMqPKvUCB5XSmWkNCNmFZ8h",
  "key24": "5V99eoiTjN59TAzHryLgvTFpRQxnKms58K3it7HDReMyDeyFmjwonDpgwfsn9WRogUwcNCwL2MzvgtHXe5LaujFA",
  "key25": "jnRLMBg4frXq7SsPsEFRATGeYo3cHaaVSJ1MTDQd8t4EhasbL52sESPQ4FgXrqoBSq9ASYMT2UH5xdxPLZZfWXw",
  "key26": "4aBjPBuVdaWzVDPi6Do9Ro1j9YuXxQcFWrwzQqm7pPvhTyH1LZvstyeL4VzcCctt4DcfVDMgdoVDHSRzd4yxYrUz",
  "key27": "8Q5n5fhtrjAz91ectFKiaG3vWGXoBxBQJizXFXAFpAWxWSK3bFsGS9Yvrmi1JhJ1NckRpkB3h9yw8sNB8FGv8zK",
  "key28": "2QG6doyRJUGgXreZRvLNE5VUBWZgUC7dPwaCPDxqz7Tm1H4Esz288y53xTw7awjEQCMzqYYXS95fMfXZGZundhTx",
  "key29": "4x1WiCjCgF9DcnhmUNL71LSY8v77DqCPDXd2MEqAWh2J3BhA3qRbZEBnd1J5pHzFAkvtB8ZFwv8Qhj9b4zq6wsTK",
  "key30": "4g2sR9GEseXRnhQM2C2ttFHWZdW1QpqiK4YE3nqntaj3gZ69oKaSE4XihjEk8ZkSy9JWLPWCsKp1Sx8UgQ1z52F8",
  "key31": "AXwCqWGD5EgXhS1FjXv1msoTRT5iFoRHUwWLw39Rgc6JDnkam18D5gtJTPPFSHpC3k75G74cF9aiGEfeDK2sQw3",
  "key32": "5y2UgDeGeijsicfTz17pN23R4Jc8bCJ3hYAudUYB1qdJagAUq3QLdBA4NBdYG6JWoZTPdyyzJqeEiuE6BA9dcaNo",
  "key33": "5a18xTjCDCEjEARRQGYXekpX6zHj3UXLKMLG5JwmPcdyofNjWCxZuogWgmgimqDrqXeDxQKZNhKeTYzrf2Yn5QWM",
  "key34": "5FMjp3Sa144RDVaFz7m7T94FoLnCq9b9mYtGtv9jcN4trjWHowZf44yKEEZJihfwUgZi3MYwMquq5syZswoAVFn4",
  "key35": "5b6PAjz9Hqiy5eBfJEf3HJGxCuSKpBbixWiBw9881XsmYTNFwSWgU1qpmbwHf2yPyfgPefXUsdDgp4xFuJVXRfAG",
  "key36": "4dvLDtz9LPj9Y2KczTFxs14J2w9EeCBZgQDfcrFKqpA1UPqzdjhrfrpSkKrtCvqkdz14sNQyqtuo7h8FXi5fB1Y2",
  "key37": "4DFQa9tq2wZFEoNB97JJp1v6ErSAMA4rvB3w9bTXF4pZYj1FVa6BsEbKYsCBjtsM1MB1cEySCjVxooXpvnPvr6ZT",
  "key38": "KmokdrDubjUzbu41QaeFDJTtoWCLqH2PG1z5eHdUx8GRK4NNZU86BM8d45PnERf4TRwvDNXF8B9EvH8S9AHQ5cp",
  "key39": "XxLS4GHFZQNShgkpwjSo3trXqU8A3PLRnUJwcvnCqCGdxmt4CRoCtdkoWtmYgf3kwSBWG9M43cY5HvUbh376Ef9",
  "key40": "2odtdWJJD6dKGHL7jHnqhf44iKtRRu3WpK6RPxfuaRLcxGVhn9xL7CxuiMd8roYBe7ZB4bibed2WYcQjeD6YwSWZ",
  "key41": "2ScGb1bDz8nPRcwEkrY9ayhCTQpEaCsJP3LL8f2DW5kGoz4diq8KnSKWbungNE3qcx8AMKG4zc8KxhjUBk9Zoz5C",
  "key42": "9Z4Uprp7AKR3wLrhVU9Vhim8koArLa7vsdUzXXksjXznvaXKjPHWFKUKmSaquWKGjnjbuk7LXZfMSf167LSRoFM",
  "key43": "5hCZSWwZhUCjQK4jRKuDMVenJ9NZbcCgnj4pvCfpZQTYKYSsM6hUWcQExmYGxDdjn8co9ed6SdUZ1Bdj2DBkzu39",
  "key44": "nrvot2gW8K4YbRHRBgCGWsYBYCh7h7ZoMXdt4kFFrovmXMWW2p1euSjjVmP58AUqcS171RcyvZFpneFm5VNwcBx",
  "key45": "125S5HFRBCuPZfaybdbpgGxGHEYv3S2McsrJwLuBmPEDJjVSUEUeLanbrpr1PsfcUgbNUhjM1REMbQgs2VL8N7g3",
  "key46": "2AtH8SaqL8cManWFZ1v1pmPQPvmiYz79dKHZCRW9VsX7jUNk7rUQqrbXdeAo3LcaEsaeRwphGB5f41PdM2AMEkrC",
  "key47": "5VkDPdav16d1NMhdqWfcHdRxLAQi1dxJVDHe59NgtwYVMj33kbAjHePUzu6CA6wz7a7eiAsj7RYxWcPXF4Q7QMVi",
  "key48": "4eireRWqeRnWpE8aJJZPd3jTbT9mLzW2TWkB1XENVPMahoHN3KCiQtpoV9najqwYCfbj71miQCQEt9NQW6ADvY5p",
  "key49": "3Uu9oy1rkhDYSGZfbA6cDL2zgsrf9b7w9puAT5ueTJMSfi6dpp2JQ2deurGrTQoaQNsPnFzGDzfoq1P7hhTzwZzZ"
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
