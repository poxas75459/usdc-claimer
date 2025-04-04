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
    "2J8RYo8g74cCMwi82EFLrNVHVMfZ1v5J9bTAfEnRQd9Kjethpd2b1GKVbt1BhMBc8p4Q5PcARQT9mEBathEzX8nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DzkUZ6kci9pvULaWaSjC13cHrURUEzWLHvRR1QbDrnJNRrVXekRFuksKGtsYVBFTeV4rZqEh3t1yVih7LvuqUbJ",
  "key1": "4Pn34HGpjQ6b6BabEtoNDqr1LqVdjUSCzqWtK8XwkvTR9wn4LPiYKzwPEzztBbWX19xf58nZ79m3KakNApdV4Kpo",
  "key2": "yH79juSQuYCPd7iAz3iCDMMeME3Z5LfDms5673LLk94r4k6ZSS7HHUME7MroFZaAkC9ic446xndacKVipyGEQxi",
  "key3": "2MMFLpa1HdaziEFtXujysNnFp26fTHkT38kWVZ8BqvQyUQfyo3SpwFFChdHbyk4Tf3ERydgiJXS3E5NFEyjTqMz8",
  "key4": "tGmgUGCLsRYU8KECdj9v2T1UHKgU85DUM7VfLPsUzsNnzm6adZmjYeNjouZEqkVvjKc9wddyrH8MwnArqjCpeXg",
  "key5": "843wxBHVigdPV4UUEFKcEZh6dsPBUqWEFoZ5zcvAwrmshG9JFtGfwvNVjhzxwASpPCUDUnG9eMGYvaMya44rMAD",
  "key6": "5JjNekZQmfWu1tPR4gEfMuFyVmdHuUeCpJmXzYjxR9AftpCAptK9DqSgFJYiV9KBcDqFdYpWBAVU21LpverHLUb3",
  "key7": "25nSKJw8FjgD1bpGffDBXTNprCkz3xioBzEvAxNuMvyGpdHzguWq4fZdToKVkL1mNmWiXvvqTxLWp1EHVsxVbj3w",
  "key8": "2TETCk3ghdH4TczqcwakY6CmYZiy5P5v72h9d6hPRK2vcg4sXupQSzALaXx6hVX6pr6QzooRbFyh9w75maMNtVkM",
  "key9": "3G4UVezYoYm5FRU95Nf5Q3htGANqUvo8Vnc8tNxBH5Uyx1tjmEhS6oaVwxdKyxG4jbvn1ZtKmN5MVbGnSrYfMZvp",
  "key10": "2gYPxCS3L3A8UMsdtMUMPQfJ2Nrcy7RArnr7jJKxV7Amn9XL3zVf1gRHdxiBjvkbwS2iB8TVVFaYcM7FTFi1USzj",
  "key11": "5hf6RQmb5pdBZrhGhLdgQpgG2sYn5j7CkXFEKfMGjFPrbymnqWL4D9GGpVquFxt7rWdDsCi5yvnhRafCBv3REtNg",
  "key12": "P8Kz2iyYbw4jwrSWXrZJp2LP3kxdjmeZVr3MH6dFB7YUVPqN8a4uXj1mV3Uq3h3xKAXX3PmTh3cH8W34BjBhfbs",
  "key13": "2DM6fF9EeUy6yNqdnXpunjTQQmHkWxb7kG8vHx5B4AfzuxvQDHbEZHyCiK52SKXGEf5PPrFwhRapT1cbLkGiyEqi",
  "key14": "nd6EoJ3e1S3g2uHFfh8hBtsq2yHsT2XKffa5PtuhKFRDhzpknwioPS7di2yGwraSE1LUV8y9qbCtSNRqLRHTteE",
  "key15": "3kCMXX9S8kY745boXyowRd2TfDpSGFbuNWDaABhpUcGp63Bh4XddMeLBGRLXghfvYYRTVqp6AntezDFspKdWKT1v",
  "key16": "64iWJSyYEvYhXCSa3SoiZe7StnRToUb2bUL5rzBFDxhSGJvmkhMv77ABhK9rNU2fkd9AcRiPudA1VnLTPmti2bRr",
  "key17": "2F3RXnyFE47jtFqgBACGn54xR6iA7WqpMEkJv8GutG4m8WxUR5N9wMWYe7svzbgPavCTMkiKAnfZvM8sgRZUi254",
  "key18": "49oomcYm2wN6HZ71ZYxc7k3NEa6eQmeU9yXVGqx9HGQGVQ74q6K4fw6bxwgFk9kyg6n9nUrB8YCX4jEzoAadCrkU",
  "key19": "2w87BMtPqk4zzQi78sz9gEtdyckhrw25kn1YCjjRpouiavEqYzZYs7aWdTDHzx6bTJSuSAFE6tesUvqK7VWSvyGF",
  "key20": "4eHn5u5DCgrtAfpJM1fppAgnLDUr3nvaQ8HqdeHHwReLzhzbhoHrtiAdWFqk7EuRXKDnQPnyJhGrkiJ6sDsEmVCL",
  "key21": "44YpT1gULbT7f2zmoVSqYtxaSzuY6df6r33JhGRzfF8vKNPYEchdh8Zy25EaSVF84Sz8HE73G9YcDsKue8jNt7Kc",
  "key22": "D3e4PBMYV1U3Vfigu4vKrch4texoZiFVfjuJ79NRAoN624yRDAXZSn8aSUAbj2JVXpQPD7m6PZzCwPoYNnm2DCC",
  "key23": "2vSxDbEiuBEa3QEWnjS5A8qM7yz8XhXgXDE1pUb6QPMYbkfMeuK59VxcYAA4iuHiAbRbuSn8K6i6AMh5cTvQxkC9",
  "key24": "5TTfZcTHpSSJCzGjDH3VH3HYDs1SWjqmJJ8eDW19keWkXXeLCQSQcpzagcSndiBN8eXx7H3Xsv1VRbMLc7Dz5FTP",
  "key25": "2JcDrZGb1ym8JqpKsvrMovHMnrnU1Nu64C7jyYsJskT2fBZ5jyfoxa2oRE5xtepi6rz7fGnAejnjEe7W4bvMXUWW",
  "key26": "3gsES7qX6GBXwdqVHmLckbdahwaCsHWYP8h3iaXbhxFggQctiqcDHbc4KF9BqFp6vxQMDMFUHy1NGRZWxyonPAr1",
  "key27": "2s2oDdLKBGyNyTcAWYcXQ7B81HB9qfsnYmJEyhYGwFNhEFFmABmFwnByQG3FreDMfHKhv9jsEeJLnM6b3UMjApTY",
  "key28": "2HchLKrE3RaqjhVyzVANFamtkednjHyRae6oxrCsw85KSZPjskxKPNcSrXt6CUGgYXDHLUGn8PkS7vyRy86gAVPi",
  "key29": "2NcGVEnf3X4mU5t7tJBNXZ2Zrk7Z9fXVBHWfZdoRy7QfXSjGuzZ778NRshE49PQryvewKU2pxALvCkAzZGTybSXW",
  "key30": "5Kpfv2p4c2qj9Myqpws2oVP5BGKjo3Fhx9prdmnJSm8kRHx7YcfGKgnStGBd6jxe5YifA4SyWxU6eeJJyNMsDVq2",
  "key31": "5rRQgkz5oaHwbLr8uR8qj1MJy5XGEqNAXUdYPX8jvaFLXLUrRKDAxLWBFqgWvwR6XMZ7aKDft9dcJAJCsobnKgDm",
  "key32": "21bPBWYQEWoeGuvBuQsVnrjm889NPhDMd26DYCrMgMkRhicr22WqNmLD3WcKgB9rRfSqyiGWFs8dtg7DdteEXXnK",
  "key33": "2zG1aHDnXVr2EN6tSC97eMvvPXG7LH1BLMPdWgFtJyAfY85SebzjAMJDJhGhvqPvGVT7aAt7LnBpgfj3kJpWjdmn",
  "key34": "2vmmXzdoU3PE2cbZCk37phYz8nPM3ypYUiraH633eTSYVSbPUSPYKBdENzHj59ikLFApyM5etsrxqyyavbaBKCkS",
  "key35": "3eWLMmRv67JSSFEb9WzycAGVNqdGdT2knfQCVGzU9R1bSqWtHst9TxwfPBnMizq3D291Pje1bZWprXauzUd7JHWk",
  "key36": "4ngSLfUdhhczJVLvJEUZtFRVAc7pmMqcqiz5j8SFXf1PdF45D7HJFcr4dRAtaxaeFgz9kBgWzejFpbiKJSDgUSy4",
  "key37": "Vo4E9p5FRDh8jtPA4g96oAGVv5srdDNhABUZym7iBkeBtMhUtCSt8HVzuLB5c4VMDjDVYtNP9d6V2LdaHLXvT6a",
  "key38": "qgymYwMxDzoro9DWWYmKpysQK538UFH8dRvaHF5tVEwZnwUKyCAFtyGuXTdrBnAoGs77E9GaaQhfFHR6Wp3UUv5",
  "key39": "2wNLErqzBy22GAwv9t1pjfjpTJ58vB9shVLMZvUBNpoYWrf5QKZp3Gcr3EGrZVDV8tAGLpz7nuUFd7vKLcvuMeLU",
  "key40": "5G6iSYAezbRvnvF11EUhtkdGmeXmh1douv8aBSowtpT9Wday7KFcxK6sZG4h6P2y8c5ATN9d3NRZDJaeoPN22MtQ",
  "key41": "4XGLkdjzoNwcNcEEuoo9af6tCHy3JmS1xwp115zJiaLJWJznQHyF59YkXHDjMmdx5VgYZR7y9xz6xrpEbx6fBXN5",
  "key42": "3vFSse5qZ62qyiq52BC24bxXvKKYRNkFJmxrdEgR5g3mZi1D3mQEyMLrqufhJSm8ep2CdLf55DeDqJmXwm14M3jN",
  "key43": "5WDoeind7ZxGYy47bxEWHFKfZKgK6yCoGFXRr7mJy1FzRG9PWC42oBYzTSPXMHoG1j4kGfe71JbpuY6t1T6eB4gq",
  "key44": "3Ap9VfL1JVHUq7u4fvxApKu9oGkkCr9BuLgoB7S9uj5cbSMUjfpdQdaVFJW6n4YigdTjKc9DJukDEaV1ZRAtvzgx"
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
