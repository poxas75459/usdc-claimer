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
    "3WBuR2CEz5FBmzEx4fsoWqTBXRC81WGLz1WQZrJiTiEgfwnt4wSbSSJqbyERNMqmufCriwa9QowRX7zZpzfhCn4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnC4SYcNNCaXvTJqD8CRMoN43pewW6A49QRdS11TFnEEK4KJKQVisg3uErQ4HEHPc2h85jRCdmxsppB6mR3PLFQ",
  "key1": "4kVUkbwHJKi6dBbc7zqwrGByW1w27TedmxY9NNCGKnXni2sT7i2c2uzDT9xXs83kgqpwiREjrzkLvXYBtdKxZT5x",
  "key2": "4jADpS7dcqFxF78bRzbfKWqUKvtXfWpF7hoUh4K7QG1cYw7qcmyUMXy2gWxF5ahJvSUHTuWKe8FcrApw57jG7Xef",
  "key3": "2oo5xQ6rjVcHeyHMzoP6mGnRDBkUGDYzMRR8avVbVqkcDjGoz6W2FPoLGKgKxCVLF3i8uumwAZYxhnedaRFPER4Z",
  "key4": "4mKRLGiC1qTV31EjFsA3UqxLX274rtCc9VLUuighuGKf2qh2PM4P12FMC5gmP5vr6LqHEVLvVLLvKVQnRBsbQ34L",
  "key5": "5XMJ6dqgZZ62dYtNwRcHW1BCyNQGNFshvkNAvxa9cRb1Su9baf2tFqcN4HrXEbVPyj3UHSWJrTTmz8WvDbKd9Ewc",
  "key6": "5XrdBndTqnRpRjeFkMZbsvgHhhaYS7Qp1ear5ChHik3bjL8Z7xxJBN97sEQD5HE6fgLDWKkXpcfKN1taYWWaR85V",
  "key7": "4hx5EErFi5mgtw1eAzPAW6kUighoCxCPCMNcxfEqrc2j3W11B36h3cC7YN78MJWSepesvpoS3dxcrJUxsoJ9mqX3",
  "key8": "vxVQ55NxaGBDyyhCdgYXajqCGTxn9GpcNvmU2Ydjm8MgneddG139qrTSDo8LnyZWvyoLVnHnw2Q4PYnU33Eta1G",
  "key9": "4zkjaCh3qTd6wWqNpAT2pvysZRm34qZHNP4KiNJuhBNQ6eAioX21stizpxas1Vm8jquHwMHegxTj7WNpQXwirGcz",
  "key10": "5uMKtAwkxqtkvWCFJUsFUmCAitsvXwmq27aqNdHLhcTnEujG6XohiSVyyJ5ufteUh8wh83dTan6Y6FaF3S2uY5NC",
  "key11": "GaFBZnNJX2N2WXXyjwR9YzeQeaCpZvUdTwKxBi4fgmghb2TDWh3fmkyseK7RUVXrHqy1HdqGwLzXTsW2f48iK4E",
  "key12": "1xueJ2aFbUVqSeP2BgJMvv1UDbMbgvKNs6f87ix2ktLehDZe1UmBQrkpSHevuarHcbkBhHCH7RwVYURYYTg8kBP",
  "key13": "3yZXTKrk4M2L7LDjQihQH2MSaWZoWcddYEqcqPJD8KMpKhX7WyqPWC9Ese32nNSd9piRAFMwpuuFwhNn5CMy4RFK",
  "key14": "2eTX6gcrRTmLrzsZGeKuSsKJ9Aoth9HshKgwLB3oeiSPmFKRoTFMFMj6peT6v2M7izhCW9H2on8TERNc7mYe18bn",
  "key15": "3vzieFipKRrR3mairPXFhd2dXj5yVWVbpY9xLdh3KQCkfzi6L5X4UzQuvnH64sCy1FhHgcwRdDYTbYiw6S4anahX",
  "key16": "2xeqCEEQQGxXGX93cmZnmPtBvtLpkBqqGMjxTKcWkgpWddFaKqKVb5ufs8EfVWoB7keo9jCV5VGR95Qd6PLYC5yp",
  "key17": "2CdNbbFjUNcSKzBi8vCEJipnk4LAT2JnejuBxXSA5uN1Gp6U7S6unpoq1nqQEET5jVJvVNzqW5kv6ZHXAbJ7rMqk",
  "key18": "2PsVf65CYXHRoUnFRLv12xZwXPNYypqjtVK4KkbU9xYeYeF9sVdaWRiACPo28ZtKAYoL9SiHwNfxHwR9VqvgdcG6",
  "key19": "5fgSCQx5djzaZ2fuScQfnimrroM3FF4CxhHdb3nRw1t8tGvWTAjcHfyBjTwcKJdo6nqaQBcHCSiYN261rxrQHeZF",
  "key20": "8ymhRg7Vo6nU21Wjrt2edVRnJfRBMujfBLraWWvkSQSZkiQurETevdT2JWwha2tXkGcTAJqVEKyTq13VrAM7beo",
  "key21": "4LqJyP1Pdq3CJ5CGphECLbTJnN1DPBqbNncQCyjNsXpA8787ivrAjNoZYsDUXNh8TJKEWzCYDn3c1TmcYvhsbWK2",
  "key22": "5jeH4FW7iDNLw7QTjZeXEfxi3LYfbNPEprQordUCRKVzojboJXD17KhFQLiicMfb8uN6h7zw88fVJuQ9Kp9o8QGZ",
  "key23": "2STNmE3nQtcepBzLBXFeUS7xpkFK3Ux7nixxMnPYoHRqDBZBoLERpwahSjbNaxcM1AD812iQgkVfHJwqH2q7DrWX",
  "key24": "ouV16SKzFL8YftD85JhrBV7S1fLvywQMLYXHBzsUC9GH8RtD4YqduN82hX2wJqmVdfccVKqHV9DtJW97v6HZbie",
  "key25": "5nvFqEXBMAH4QHD5jfjT68a8XTL22kD2rkeRq8fExCJdg8d1VU9NGp3JXieMr4tFSYQbf7Tm4bD9ikSBtTxgS4Fx",
  "key26": "3BsLjuBaBnGgiL64vo7jodH3ecFAHvcStAxtJrJ7n3gRbS8T6C22PYx1ae9ttnZco4zHf3tCWZXDf2EAste4C2Yi",
  "key27": "2bwfofYwJwXKoe7EHaKsfCYYVdptm4LGNyeWgzQhwsnHPVZCZ5woF7wG5UktW5b42Z4AnocBS4ZL3n3sifZtgUSB",
  "key28": "2djUogwu8kG8KRcw5WVQ1tH3fzrpKRuJ9PXtb4ayxo1dXc2qMBz5YmvrtQngsDwHAjiRwvnr8GPEv1v27SQjqKEG",
  "key29": "3uNBCpX4Eh28faGendLfHSbyip7eptKUsbfjqAjq9F6iYAj7cDY5utrfhQ97jAfNs1cUNz8cAT2opUX26u6FXKPy",
  "key30": "3d76i2Sf6ZDyZeePD74HWfneBwxKs8HFWpGF2PEWXZUNYFSbSocXsTeuiu4FkmWTbzLo3tnsqJYPWpfC4TaGJYDz",
  "key31": "3MssazU4Rdh6N6ZtjqNiCAiohf4xoUV2YGAzQvsiWexs6EKazBDLzkAny7eugkzVPnLeZ27DWEDv7oAXJBwnA8yw",
  "key32": "49WjC7Ez1R9J7bQ5S3gGNT8N7DAP3ceWxRgfq1X4TLNCLp6oU1asBn2ZkwxAaU7WzuUZTtYqaDZznBSuvHPimWYv",
  "key33": "3NTQswktWu3KSkek9v2p1ibE8psAvtXCJiKPH1GGT1aFQBrEGSjnrTFEAeH8CRnv1hjAuH4DsrLkQv5W8XhyBBao",
  "key34": "syM5yMBST9r7Cs5Fkj1oAeQxxyFRLhfE2p5oNnYCN6CbRcSTBwmWEBunt9L9jH98EiLCkmkebP3im1hmaR9VYRN",
  "key35": "3MeGQzBaB2NU2SZnhhyaRYMtvCjk2QkLAoYCXq7RRV5pu5qUd4UP4LLUXw2jv3uT4zrz4m6H6N2RwCxjv7j2e8im",
  "key36": "2fRZnfzn7QsxjPRXVcTLc1aeMfE1GCHKx7jCEuquxyWXCmFgLXyNdcA4VoHPjdd7P64Pu1pKxQLY9iYB7cEmS11Z",
  "key37": "5RiwGaLs3GxkCfWsXJc8eBpQZT1jxawSK9N5KHAxUy8haQC39LorpBt2v7fpcQUitNeLoJjhTTcq23abNsn7CheF",
  "key38": "42LYoJzkRzh7nzub8RdbuSnsKpB3Fj9kJAVcxCuJSoXVCmJg7YM2uHupi3vbKsS1WdHEiYzE7f7Bbw2bitRvWPPf",
  "key39": "4rjCMMXQLHKGtzB4725b2s9cL79H3o9xR2CzZV6MBaAVXEcart3ves51jGGy2SAhr2cHvKbKBVhXq3Y7c2wrgYxR",
  "key40": "jKeSSWhzrBPjUbzXUPx9buTYd9gvUTQftcso32wgGFDZMLJu8CizYeaUujHQSzweMBgcaKEHbG4sqJmEojvi2qk",
  "key41": "46sougDSmyYHEYorBnYzwHjd4oXe6RVGUQSBbkcqhRYWVAEAVN6LxVnN5tpG15dGu89dh6tAvWPETNTGWAxp1uX7",
  "key42": "BszW8YdDE7WVcLAMYz64iPba2mgUSKiZYdmbbKxCmH1LKPzn4auu2orV7RhaJ1EPFbvWABcbbZK4GcTyVvZYv2N",
  "key43": "57SP69X49LdoTi1QD8QDNZYCBhUzHUDYMGA5riNArAzm4hzN4iA1nAkLm2p5dsqmWt8hRxdpHB1JTRqtgKrdbWzB",
  "key44": "3sHtkWVJ7ptov3SoZ25bRq7tZgEb1r8rn1fLrw32czRmxySwCD19Y3sq5NqFh5o9dkthP8vbVad8xPf78jzveBta",
  "key45": "pLcqEmPXKFnSs7WD66fxCuNrY3rSGxdPrrsVfrmvoVK7KcYXSUBrxUtoTDZsFpaQWeRTPGKnxq8pUWibgBtBXNW",
  "key46": "r1hhyYQbYfN6npEAzVSN29pnBQpA2f7nGCeePpfkaXaDn8A7wo3ZZY62j71z9EKGnfbUvPsr33ghq328WPfUYwT",
  "key47": "3XhK7NKme3pwwPgLmUVUNoZu7axofRdNCvfqngwgGyrMNL2b63wz5w9SfJWtNwxaP7wSN5S1NdHVDYjBX4nCDJdP",
  "key48": "mHVerptX7hp8fsuTSjUkGWaYrPfyv2troX1qZKiiLGzo7PhkFTPcxmj7SAb7kTVb498bRhsyHGeZoYBuhx1tnbr"
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
