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
    "EpYYMALF1DhyWUVq583rH6sq5VwsmxoQYnBpA58Cvo247zeNnrS1uR57TQg24vHHhDaBBJFRpZbDyQGRtRGQMkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpCT1iQxKfEUNhMQLpqNBLzJDkR4yks9LZEVTunnfhakjLPCqTeQWrWRfcVVVpgLzPeZLMfAHmXSo9vqkVVRDb4",
  "key1": "72bgaqufPJSxsYTaHeBtvxVvbytEPWFqXDpr4oWPp6Hjf8cVoscWCxBtVpyPjCn5V47biUB1tfrZyFkabL1BXVy",
  "key2": "5NxmWYvoLp7MYSFNpZqtXTsDkJViSMV4JDg8iSxJnFuMyXQSk6mvHUjQB2QYvpKFv1ZxRMVLLoSWWxFn7AWHPRpM",
  "key3": "48Cs7NqBrvDo8FkJxsk7XPteXG5f6cERUiTnctehVw3Pr7uPwNyitPu2KLHg85QZe3xiZxAv2k7cinnRbjgoYUvR",
  "key4": "yjoMPvRJeHKpHN3UHQyNVnACxftAhgv63SMZSfRUHPSCMFJP2K2sDE3tQPvDKu5vLC13DL6EvbzimbSofpw2orz",
  "key5": "3v4cyAnGkUyTeeTunWCuPRWmb4uA9b6NFzEH5vT6hzqqHrfcd7UyYDGvbhFzjq4yjanNHJFfS4t62sgDunJC3Ftv",
  "key6": "3RGsEjTomX5wAkVAYKuMerqgRZ5a1o4DjJLPCNT5oqhqvCQ7dXv5LP1CXh3CRR4YqNX43GafjfoBW1Ajidf8r87B",
  "key7": "3SMvUrJwAAPqN5Nqv4fUXLHxktQnrCfGVuzL6EbwN7hj1uJxFgrFAdFYbHM3uvVYGik1W8u4xT4U5nrgZVGk7XSH",
  "key8": "5oGn9uJvY8bides3VFc8kANNaMpYzprPNbWF4PFVEN47EEvus9QuutpWy8i5uTBjHw3JhF1KA48Z9eJ4VNukj9kc",
  "key9": "54PRTqJizVbN5uPrQoaQd9em7fsYyy5x2o8PNswAuSZTVkJNiQRReR97Wa6KPhZNHu5PtPfPRVoXw3jUsq6Q3PH7",
  "key10": "42gV8FsUQtbhNS3eudAvNqGswvywRhSWYv5d5hwtLihxgdonGRAJHzmCkTGTSjeCDNenYHTs6mzJJuaymPDXoMiM",
  "key11": "26qJLoKEkiqu1JrtnNxEFS5hZvo3DRFm1YY7riaiV6Vg5K1FVJn6AmPhSzXPVXrKxgjPkKPEMdsHuAkNtmXWAfJs",
  "key12": "3kNpt2wQejdUoDzKrmocqcqDrzoZTLnU3iY8cz4Y7xetVXXtypaad85m3Yh23Un2ybuL5MktZ1aJQ8HJKbGMUwMH",
  "key13": "2xhqTYpcpwg8eduuA5VPW6UJ9kspNNJi7JMdwcGQWjkUpYFPUdynGqDqtVBUrHyjuTHc8w8zaGeSgfLUtAwQG2RN",
  "key14": "5Sc6Rx9TMd3tMAeNERMp4Jd9sB7j42WpMPoQVLtD6NhyHdGxtqQJSUYK9BwPwmkDBodjg4yUUXgq1hZLUEgkpo8a",
  "key15": "3q6pXH4QdmBkz2u3eet8fBs3c7SNRYRPU9vnrQ9VQaxH1NwEnx8ayxDXdXNrHCYoMtn2QwupwXh4LVdMVp2wqyiS",
  "key16": "rXQHsSToqzFQuQ9uZPtqXdHk8si2WCSFhDRDncrs3eGvP38W2b44jEYYsT5WMkmPrp8kbTgZ182QDsM68WqTgpT",
  "key17": "2c1Rs2daGNa7BinTYjKhPw3kVCA6SGxzDmAtjRs7FSiAMRdUeJNxn2WM79gLQBzXSJd6MAtrGL4fhqW5ksyEzETE",
  "key18": "4DYr9jEwH9YYtanQ5brwbFiMqJmohbqXUp99hHzDsC7ZCJ3yXgsrrorFMoq6mzmM2uFGpMQm3Tgsib72CfJySFmr",
  "key19": "3TpkRmJzGoX1yH1TZEUvEVkVDhm85qyh9dvKjocwsxf3XiNkh3YzeqoTPA8zVTArL5Z3hJcrPzN9BxobeqAhMCSX",
  "key20": "3RbgKGrjF5zhSvtrmpaaeSA3tU8nsK49D9zkx5VcjqMa1B1BUZpDumxYTmmDkScZninGH7okd3WeoKxETGcq8SXs",
  "key21": "4g9RbCWgMWXt4vx82QDNuUQBK2qWbSo5Ct3o8A8jTNhi5UiH3GBzpw3WB6R12aLCmB4mpm9uU1VjsZt454ghUgVv",
  "key22": "5FbhincVMczXKFtdok39RXGufeduYJ9ntHvjj2NEXCmRq3GKMmDU4wmUAi7A4fHFxkJjyDFWnbkLqfXNzbB45ark",
  "key23": "3NHv1kRqJkLLZN5GwdMoBvZSJb88RboCL8B44a1LN3qpiRzoFEqD2pCPihMu2eNPbjMcDvPXYRJbK1QRFbjREt9h",
  "key24": "5dHAvxCDJBx6dkmuc6hKbLKex93bzHKKB1Hu5BYQAqNtriZsQwF4Yr6oEH14jrLa2phfd3dP4deDnHS5RYhDKmHK",
  "key25": "3HytCjkTnmRDQKLX7GcWBvrBRgJMoBnuzHQouSDfHjLWEoGt8PBEVjB8f7HkfmjnxAQoqjcLwUiDnCq4BzXC6vBv",
  "key26": "32yKPZyynuVzjhzpQYUw2eDzfx9iXrPtfE3iATjWSLgA6HQZNFBVSjr5kHYTW1wnifD62Juov531HNtVrUCMfq2P",
  "key27": "2nZZW2ipN9fBKgmr2gg647GJ9hHbZ2ngcCgojQs277Xe9XnRxAp8BNYCXaL3a2UwBDXresfNCbcdRmrz1fovPA2K",
  "key28": "2m7Ymr8JNLV3GDo7pnrMGAo4dg3UhUvi9RLnDgGikVo5aQw2kFZsThZKi42pN3yEJHowJoNr1ZwALf5PdnA1bdVz",
  "key29": "2G32rqYfSe7J19mYYW6Vg9arSrmSY1qMaGbCeb25tm5s86qSgJBrFobkoys3zcWe7fknJAF439V5QS3qS3nP32ki",
  "key30": "Lx91xoQsaRGiUJUt3NtAQozdBxwpoYk1UoUZ27oPRaysJEghyubmSKR7Bqknnor2TuWGMNMDve5KuS9FnGR9e3q",
  "key31": "GMT6rtysEguMe8swikjzxymFSAXqj7r2dmD2azJzbLMus98DcaJ6Ryrf2fUnS4nCjiXitEBhrQ8bWhuBzrDXbsm",
  "key32": "5MmC6ikqiADzgX5tzuD3xcwNuQVirWDwoFGjrRTnEp2eVdRSdK3RGoCdCemm9SQiCPJXdCCyheZVDWKvgUVCnBx3",
  "key33": "5eYsSCqPRm9Bu2TraP5fWuoQohbGiKESSTm38yTNr1eLoTex2vMZMmnofwbGNdNxEcR81eyFweJNR5p83rhDEyoT",
  "key34": "4NroeKdYfWJJmFNyUVHZU8q4ChEceQT3tGyhjXzPMogx7mgfp774pAyUjGe44xxjDwWLwQuUr7TdBRNeCLk1DKTK",
  "key35": "jwFggjjCwViz5mbJSQxAYQBafzyYhJcc86sep5woodYE6qG77w85xxVEwZ3k8yfYabU1cAQrpN81xqg2j2xaQ7k",
  "key36": "dqST9cvx3zyMXDsomPGufReP7jbU96zXagYMD7RKD7o1UEkT3p5ohCutfxYNFxwe17XCqvH3Ru9czT7wWqQFaWg",
  "key37": "aeW5rkQZjDuxaVKFsns38r2xvfVU3eXQ6rLQPVarrNacvyFA7aEKqadiCPvgz77YQpYyTVi9PxduxGaCNpFoGUJ",
  "key38": "mB9YJ6QMMhh5KjgxroaXcAhWfMyWhToM17ypWu2DErz95fWXRc5uZPXtLcZ5i6L8wnoZLoknSmBfCkEUKW1dCsY",
  "key39": "2eGg9AniKYzcn3AHSN67UnE5Y75dkwNdMA5yVrkigwCL71SdCukeR3tN37Ux6F1X3s234GN9ZCfcooJYXS5Qrez7",
  "key40": "32QcF4mvgYyafy1gcjm4jvF6ua5wUmayahTLA47HN1St8qs2GZe4f5dCbqMQASS1E8VJvxCaCE8eBYhpUuBhg1B1",
  "key41": "48NdPfZsPDwibDQm5C7aZLr88NJbj9t6ZwsoEJ25s7T55277igDbhMmhZRkixcRkgAoTs9dhiNvnr3zSEEwywPcp",
  "key42": "2pdT42d7gpNvLfqtkQhWgz8ru9rDqhnX4V6qA4BRC9Xt2zGn7EdroHFzczosDhhTK4RMLoMcarUwLAv8L5n5CFhX",
  "key43": "4CBzRBhrAQPbb57qcCthy2D3xrVZX1FGjzn5eeAnb2R5BciJiqnNNQXeNfSNqGgCeQFHiDB3hEpdutcYiU2cr5iF"
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
