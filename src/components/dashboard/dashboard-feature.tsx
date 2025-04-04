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
    "2GFLiP8hdtGC1uDW8Xp1XMdRVHEhbNBzzwjvmpDr1CKtxVsCeEUavYqZ82FVHxZo9za8PXAxSMkpKtD9pdUXXLdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ETRjSGjz6yjNEQKwqvF2vfhoz5DMyTxFd6M8yVhPzYsy183JhYGLTVgJMAZpETEavJnM4mLneHmtVVDPeCyGhgm",
  "key1": "4UoBJTBWK6KqQ9h8dvLLjKsXSw1Qthhs5JXnqeveegmCFReuSE4Q8N8Ym1jFwsF6pPcft72Crskw1QhbSYSwjS4w",
  "key2": "66u9wrzYBMjdtahxGpgepvsSXPm3d7ntxT4gfRPAeEC6HRpYFJyrL77X9Qfv7n5zoVGnFJQKbzutLXborJsfRnqF",
  "key3": "3XBjYdm56gwB5KifCqnq5CZS4J39NQDmxqCNiEJSLawa9My9gVtTFZFLk4XzUxA88b3Nx5s8yf8gWne3FN3wQHsE",
  "key4": "4P9BLwGksSHtGq2pMh2osckZhG75G33sPRXqUkJ72pCmbpZXMs6WHJhExgcUvmkwNGJaw73VVQZdafHyW491gFwx",
  "key5": "45nEMMrErLgpZmZGhkFP3C6GpFDQaKkLV6nzrzRYEC6uTXGrRAMqLqbc37YSRW8VfVYWyQXwYZg3GoYP7VUpGiCV",
  "key6": "4tVRrnb41doMyEzxTYqJW9GGzKXErC9sCgyxoCefiiBFxk8DkjizAon5XaNJnHXsCraY4VPaz1AuxAVDA826Jc2M",
  "key7": "3zxLMmcSCbco8GgwyCfmFEHNtG451EVczBjBMEk7W6HZsDHwhwqFqnwMwEpLRvnMT63gzWkpnqvWEdbcjG7bJckg",
  "key8": "4cRmoGWoq5yWTWaKA7vBhyYrzSpSX2YkwBRYXfH1Mh6JMU4pnbNGKx5DuZBAeosA4m5qL36p3VVdPBWZPiEKhF31",
  "key9": "3PoWB5rWjctA17FikAMHdcAFVa24XWj3VCuCmaggzopEVDJwWsyFRMJt8UPmaqfBvePn7bLWuap8aAan5bXCNCru",
  "key10": "4QqrFpQHPQL2zkvFCCKzF7eE6ywXWpYbvuMsqiCza8Z2wSANB9br4xoeebRLnjKVRew3UUVhqmSGrxPCrNUG13G6",
  "key11": "3d7Qfs2fe3Zy3L2cvpYm83U7X87cgKoatYCvSZpAtf5Nt736N2ofYqSTZM8ZHQne5SAKud2kUbHjGU7t8hXtFn3C",
  "key12": "66L8dDMWEMDGVDVKmYgjXMtM5YvTbBWwcGXtF3zEmSrWL4HAcU4wiFHJqVn3CRJ9jAEjx9QHqg3bkyuvkT8TPims",
  "key13": "55a39PrUFZ4eUHXWJ3A3nRMJZahNtsf5TafXwEwhuKJzj3VW7ShgKx577PZ7KQ8jFgNRf6RM1vJp4cxHEDB23hhS",
  "key14": "3wnmb4AxFWiWAYRprRACBjJgrHGjcvBwqYG9Y744jXxW83xTao7pY9DnACm3Z9hDZfp9NaipESdqBLrLetd3wkrr",
  "key15": "oko3FASz2Tx5Bp22JwkbhxntbNY8EjYTCjd43cjT7TeNVVfY7rJ88VwJgnyh9yN6EXioN4HBtS88bcY4sUS3Nib",
  "key16": "2J2b5bwQpwkBj1DdyVTfNkH6jXkYW2w26i6NR4jJEH72sPNbYR1kXjPzScwo8YTo5TVU8FZMgDU2yhszLUiM35JE",
  "key17": "2AByUKoG4o34UMSR6Qter8RndP61jXsv9nAwURhj6d1GWuyJAji5Ato9GDeXiqR37PMm2Q6rvFTw6rhXf1ZbqeNU",
  "key18": "mrpqqLf4PbyRyJX51gdjE2EuXU7ZjgGhLxEbetxMSht1fvP7MrME9yM7H2cDUx69iRKuTVbbcvbacnv3t57W8sN",
  "key19": "5BZ99tLadj3ucC1PxoYzjYZPp1jPWKN9Yjc1zrVfDMnDo4TkPZvZnjuHRTNsgxbHXZEsXPJGm22QATzFBJTVbZAN",
  "key20": "5di51ZxXHe7nDSM9Cvsi2jcuDj6gFbGQ54W3bHW1roQZfpjTJiJJiJRPwo6mztfVnedzJw3ZR9oukB88LVMkJNAA",
  "key21": "2PEo5FemYsBLVoAQkVFugS75ZU9jWeZsWWDvQ6bKNsB39CGnGCy1tUKR9iyvN83HjntUZvm6LTDvmXtykKTmUmmL",
  "key22": "2rWJucF6N2usLQygJ6pZ3xU1P86XEKajXs1cwLC2Ud8oZe924PrkGJEtiRbfJr5WAZDWr7Hj9E5Y1HBRWpHzZH9Y",
  "key23": "3E3ca5CSrkYaPov9V1M6NWWycFqujteKB5MxjmjB3aNAHkYgCDyWfJJVEmjPCZoG9yFWSqS5Ykge4DiNRqoLANyo",
  "key24": "4Eh36nVXLaYYPMikDXHMvrT62QvakJ4MbZ7g5Rdiw2EGmy5aDJCaKAguYrYB2vfMjs9wHNxZTGE92WbYmQAmDXrX",
  "key25": "58rgBFrhaD1SqzSSDTv4t7JgrhsqPueQyfVLAV43qKydPoxgujuAwLfm7icVgQzKbBmkgVc9qGFzPBfWEyF9uoK9",
  "key26": "zBbWYgf2KdQD2RYYbvyJwXNmEqcTvnY5K7bAzknkZWEw4VYwHKoeLwPPtmkDQuHEMyuQVoUgZoNL48vxpHg1Xxz",
  "key27": "5mYJ6Yijj9Px45hvLg4xghqmUqopEeJFeFKopykPe3R2SrYSz5yBHgJ31uCmQKRhy543W1rB2uELmLNaaUniMwmM",
  "key28": "qwGiGgGrXUDZbxGyWTBBtFN2ASfp8MvnBgmxyMKfJPLZt8wSDrWTpG7N9sutLjJtATyDpHLMXczTSUhEqEh3npd",
  "key29": "5jEBSH4jjxcys7BKSkt6Q9AsCV4mfUbZT7k5HFKYW34xY2XA3T27iiq2Xe35S3ZcqEYEoBLtumwba6Y5nNaMt73t",
  "key30": "4fNGWgpyXs7sY1oPMUit1Ndgv7TQK3SeNHegTuojabDZ3wcK3GTmtKF4yuFBjsjazvf8xnJWEJua4vqHbgRvfrCX",
  "key31": "38J1Nka4apQ6zwqNatCbecuv6mXEbGNK941efKVhoHDk9U6V9jR1enhJnjxX8kBxr5YKcccDNdKgPYF8FhubnfYr",
  "key32": "4AnokQrF7Pj8psg34C1kDMmoJPZ6RjWEzidFbpwaMzyNa25vR8sHLf8x77wU18vHQDycAMmKpMjAwXoeFmgMpQy4",
  "key33": "2JefpvDnkGwGztjBx7e5vre2VFrnoLrPEDGzAgX2Zoquupfm4M4edwZcktKWxwtFQyYtmjaHws6zD1vpMdFv3Qdh",
  "key34": "5PHECkirSByUfW8rmw3r6TWQYmVBqLdUrvXT6aapCsY89WHL6otQYXwPqGUYgYABYpFs2yCDfYN77mAnVuNEunVU",
  "key35": "62qDj5zcojFPiTz4ZBN1CSXqcJrdyDs6nXnFjU9a7utNy9kzBNveXjNq83N3oqBBxWXvSmqNszV5JBuABp6vSBvj",
  "key36": "3BWTxr7RssjZ86ST5xNfjD9U4QzYXKwJZBrMrFmSXnAStcKj3g2PuNiu7L7PNiq4hEfKPXLwzS9UR2Aj3K6qbNrT",
  "key37": "4FeMDZgEqKZXAffGcMRcN86tkiW24MRZsy4865G1N9ToGzY3zYsgw1ADhkQbstY9wNrhmrQLoMmsQDTeRy7GuFEw",
  "key38": "3aq9zx9CiQrSSbc95u82B9pKVwPNPPfrN2tNYdLZbr2KpJFXzhVzde2rYCg9ZeSrUGFrf3UGPYoqbakoE71fdNwd",
  "key39": "2US9hwoknS7wH87ifz8gFVu1Jevd6wA5NPm2vd5QH95pFDVTPcLudHc5CysmJ7RY3kCP938jGNb5eoER4APDs46G",
  "key40": "e7p2VrLCNUqeDR2wv4ekw5o2LUtoTfjeHCsaYvVwSimF4QfwXmn9vy3CrMs8dt4sawsQHFGc6gRvaasCredQx6L",
  "key41": "5nU5utupgK7kQtimQgvtEYKLpbStsW9ni6Q59rHynUERqB1DEK3xFYFguRYFuSRXCLh6XwoHmiReFmkK2nU7gwp",
  "key42": "2dbWCZon1j2ET5jmReizpxBuR6fA7VkK6KWXmmZsPn5ifhiG8ZRZ79tH115vfjYxcCBs1YV8tyjTnGMjR2ULmdGT",
  "key43": "2ftmfUphYoojwodkgJGSLaRxCmFAjMe3i8EYEgpuBVWGCCvGXUYzHLSDMkqW6XGhcMUUrM2LtLF3vpNc39QvkK28",
  "key44": "2gPJh6WfWq52QsnhFXtRfLrqtzjohiY7ntYDfdo3kVxaYepYvNLLozHtKM9rdMuhqKHwcPHwEKmEkvJ7vuYscQD5",
  "key45": "5Nzoz63NPy39qvDDHDzLd1aqC1dN9kZ87CTK3eTjX7fwpbJ8UDZc4cpDGh2i4yWaFRvUSR1kDeUzeRW2t5EnjkJK",
  "key46": "2QZDz6wYtQWEgdWMs8ciZiRyfLt3PWX5ZcrSu6V297L5SSrg1neG98QU2LC2VVQJsT5LeuMSVzyM7L8E3NKqHvKi",
  "key47": "4sbPibLSuzb79sfu9y6tMnBYkcncERTEZz2HKXqm5TpXoCWZZh79L5tbzV1fP5wkpvr3RwTJocFTrzqmDJzStdkW",
  "key48": "2YiwMqVYdYyitVdvfofohsUYYrmVK3ay3hWSKG6yM764FyLufaeRFVRhm23GurVurqfrQJDxNk4s6HJq5zjCrgYk",
  "key49": "4tkkcqShKQR9DosPSqQkbeifc18Vf8DHiCmrcy74cCgk6pBiHFm1KXTWvzmNLpszkaNpcMVPsaTEB18v7ackNpj2"
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
