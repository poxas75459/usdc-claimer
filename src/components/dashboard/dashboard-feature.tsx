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
    "wGwmv2fPHtu7YhSwfbSDBefG32bx6ndDHTZq4XjdXJZi191wtHfnrCgWSF9usu7aD5rUTVRdz6ubfMEeVJbWg1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LWmV7SxHLnqmt2rGbGouzpu7EVG9jKnStuY3HLmFu8wSH3CUAa3JDV6UHAHF6JGH9bAKo8hqZYwtBQkxeZZ8Jb4",
  "key1": "5use5z2E2U1i2S6Kk2RPYFc8Z6cUFD3ZLx3EM6GbLDWC4Sw5xQ4Hju24YFXWZPFz6ipU7EZRQYa6aYqoMvHVQPdZ",
  "key2": "5UGbfiXygk8GMPCqZEgTJNoWD4AWgCJ4dUb5joQA4Q51dEFJ9qCnwXTg8cNfW45iSXZHS2CQXddojFsSAszb6vRA",
  "key3": "3NXhbyYPMQM1S5Ci3aC6LKiHTJKHfkJXvvaN6o8dHL12Ug6JTLzxq3eeMsNGjrqR4QaA1bhA5tU6W1rLq5pvcm25",
  "key4": "4nSiVmFESCpeZ9kQk5xEpKwG4PgocZmSYcXQodMFSwMF3ujKKmR5hmXgto4K57qvA6bEjgEEoscrHZuxGXSQrpB",
  "key5": "32Ds8JcbcTRpoRhgaX8qhEZ2t3qZfH1QD8KaUhic9Nm3GA2XgAaPFVRpsbC5JRSbLP6uHoxqQi3LD2s8zAZ9d3nx",
  "key6": "2E3zKbHLvGyaRU5xnYnxrt1NntYfHQF5n29fK3HiXdYBc6dAsy1N7cp1uknW3Ya6dwvLWfAU9FZeE1prNyt4gRwk",
  "key7": "8VC1iC8QoQeTzH8FFu8DsEHK11iarwyRyBkewgMcyArnkwHKFVb2zvAEWTdkR9QkeWSL8B6UxLWuYWm3wzfEgWH",
  "key8": "4kSLPsgWSFeXWowNmMH67uubF46Y4cGh9sLEiBuZiPu9SnawnfAeAKfZ4KqtajFBuHtYv7jxFVhh6vwxYRUbxfyv",
  "key9": "5dBbheTu44JqTiV6tXDHpqfKdXxZJp2NsxV4DaKuJTMq81i6ne6PZcFDpHUrtB6RzUm812cqmeyMGfkZnxFBdha8",
  "key10": "5pdCAyhZ9R899uCE2kgnkDdnkqfTWN2w18QoN162kW4iBJ6oFpkWFYMpzb9nG6DxitrhCkGF8AZ3aH9c86yqPjyv",
  "key11": "4ujZXfsw4gH8RfvDYgZugaivAGaMHb7o2JXYSzWAB711MWPaZd5gcsGkE7kJ9b7XRsqzobVf9RbcvcijMrWy9JZJ",
  "key12": "489FhzprJnpytPLHdJEo5Jiw5UBRxSY8FBdwNCRhqBeBZWwkQWGbtoaimSKjKDRb2wj3EFNRCkRhiFwnfAc2yg3S",
  "key13": "2h4F2gL52tMFV2KLTCLAwpJPpioiqSv8XUhqr4rvNRa9cyXtsKXnUJJSgTZdYukik9nBEXVDaxS1N6xMUvfoE5np",
  "key14": "5kANHWsbHeHQyoFhwiQ25ZHGeFBq3djt8CCEiVJ33W9XaP6wJzGxZfQjbCXKa2hCyUkpiP64xCp6gjYk7T1VnAfY",
  "key15": "5RPrCVrwSyRzZUizCA7suRc3BbjqWPkmpNUP4fZ9ZZkdpjwGgycDVVkiN7HAkJvhD3AuVgQMm8BX4rYs1mRwsiEP",
  "key16": "4J8YzDYKJTGfj3VsvZRz54K8A9NyXoEDNWmz6vZsyQji6KfwP9f5aBPigY8gZ29JpVAbovsknYFCJRz957UBnPci",
  "key17": "2W9ojjEadoqoZW8rfiATb8auchQ2ryGZwVbhE3iWdZPuzbp5WdaGDnKpYq8MJusJsmCKvQB154P1ENU93LvERynu",
  "key18": "5Dgzs3u6P2R58sxkrELQ2RbUsTzZfXgrfFCwXNAZRoN6KmS73rD3CGxB7zCnMz2AwyrxgEdAqZjLbXpG1QFCbsXA",
  "key19": "32fGcTZNvjFhBLwxG7UjZeAY81JLoSGZmVt7dAnrnWDysQnq2NzRW1pMnC3fKggEDyVU7RRMvUHM92U6SXMqJn8b",
  "key20": "2ddryk2SQH12bcv8wtiDErZGrcUUmwREyBvNef3a8DMuTdEZqT1CAJkzmgevgw5emgcFTJrApzd7zdY6zGMzxdAt",
  "key21": "2cV6xXg2oSZ2ECmqAtd748ne3yba4QrMNp8JP5H9yiEk4LH83rjMvnhBvgc7p2VTYspLhGTatEiSsLehkGvE9Gbp",
  "key22": "63jsWmeTCWp7Dpzq5xKfgmrw5S5Qhkak1d41JeMtfkrUbhtj9w8dG2W3rFdL6JmMppqeQnp3oLZftDi4mCg14MDe",
  "key23": "4iaf53N7iLFN5wgacnUn6qBhCjthW4FptrDVzW96NGfFy6TJp3o3s55tDnBMZ6EfPULum3KyoMaYkwyu4HdmTd4U",
  "key24": "3i7kLcj3XD7Ajah8fujCt3Jwu2FqjdbmyR5KQfo6NQF7SrDyaYJ8dw2Cj5Ww3or7N4Lr1M6BJLoaJDDwmp4uS3Mo",
  "key25": "4FCyZbfvSSLLfdxMefA4LhkWBC6U5sQ93RTRDGEH7PQaEJV3DqavavbEHRiAjgEiwux3neHPMugcHM9CqmuHpfUw",
  "key26": "5EKJSrpeVSecZEbZpDFGmQhD1g9utKsqx5SPcUu55X4Gset5E9zjAnhdA7uBRZ8tR6BrfobnSJZzhJhBp3JqFRnV",
  "key27": "5Zyyk1zfM6cuLrGJqVa6WYPu5ZV4umj9EhMeMobujrBabKNtAQRtLpohSdq4kR1epErp8dRMP8YQyMLsX9G3nN7i",
  "key28": "4QYcuL7VisxpjD8U25nbbfQmNZYLxD8PSTQhcmfddxhf2mYwbpcDxcaHymMrjx4d4FWo6KZSrDFrqpp2d49xWioi",
  "key29": "52Qn2t8DDDBnxJ1ZqRLJ2VG339BSeFgmi7u5QADNS21rYyQR9vdNoL8NmKPuRN769cmwNYH82wCBJjvJicRiPLPU",
  "key30": "3Tvi3zhfSvqN12RPtZVRmxGjTsXsWksD1a8S1VHWZLop7Nk3NoN1Von5FrfZuCXaNrfya8e27EVDMze8Ch38ra5U",
  "key31": "2cTZHS5n78n7Nsk1947ZJMFrZZYugxKHAR8qUtuD6uLZEjYsyYLHJ6DrPNR9m4CjHuhj5emDofQ59fYxG1G1jbcr",
  "key32": "4NugGuZkyFWG1msnPAaVnxmks3X7pVVMjUeukePHfQooTGFLixYmSPxzoNnVTcv2Vmwh2pbT895AYXwsuiSrPaCZ",
  "key33": "2qicqiieirJubhw1SYrqg44TwPJZn8moaT8KvCbMGAehi3CRNmQFacuKs8xbiaCHDkKY4S23vZKRqoNuLX3Kuy2r",
  "key34": "5zHAvPKdwaikgUsSsi9NcuZxxU4Q8hGFsGrRSUZG9XATpGYmwLj4qyteVWBsFywcPRvXL7tqAVSsbQb8RWxZGKSw",
  "key35": "5XmMz1ShCURfZiSWokJjTBBBPgv2DsmYosC9L55M9o6WaS9cY4NXfNTKWD7pCNHrZsjTXGBkGjQKrnFa6nDzcj1d",
  "key36": "5JjsvLYXu8768cMap4hnK2f42h7FTmE9XZdPA4MnooNXTuWJ3fhXneYdUTE9K2Apnfphd7TAUNA1RSxzS9ncHDfj",
  "key37": "5qEBjDSZXpn3huJd21GSCKQYn8XuXV675UotybxfLAx1FYg6B4kz9dRvwarGVrui8T8Yk9NmbjkqbvGyHfXooXfL",
  "key38": "r1GsBnJdBftyEEoBvbZ7UBCgckzxzCUyGtxUTu9H6rMDXd3gJx1pgHj6N1G2beKpAMtXNJfQ1TPixEy42nwMkU3",
  "key39": "4PVVFfUDGku56B2hL5GtmEWWNbeKmNmAQakUC498NLsPgCh3aiwNxucGd3X9RRdVNb7Qn8jnGLE3QrWwCL4eMG74",
  "key40": "3DMjJ9A3U6U7Au3gFyDRjbvRhH7Budq5EAuwnfztiVeiaYM1sFrUJronLmVyKr6Bi1kVNMDvuzxFuoYzdW2Lzy8T"
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
