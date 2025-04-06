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
    "dQsk5G63RxNvWxTzATzrKNFpGLLo8EDizR1E7BpogkqV4G5krYCQZKqiwygtmmsEPVQdr55xhp1U1kcAnDYCSS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BES1HMYeQzRiim4LwtexabCQCcWT2Fgc3Ne1QNieg46GY9DpM1JQzvuQDTvSgkL53TBazHrnQfv4ZtUMDdw5ZEm",
  "key1": "3VdnSACqGEq8TqJzDRsHYD273iQnTHFd3zjvexAUaofDyF2hXKFaVGMAXNCRqUmgvotvQBwQGxp9vh9Br5tWkhDR",
  "key2": "3ThKaRqM6sGCtd98Y431H1anUKPuyYx3YGiUB1ZCKiQ8J6HottxrJVwmGyQh49LxJL46m2U75Jp96BmyM9UW9xvG",
  "key3": "3qJUbzu3bDPFyYdFsWK68VNgnDZ7K6rFstGVcbe5mTbYaFBsTkYQK4zXaHXkN1bdusMCBnvnvedFs1yugEc7Jave",
  "key4": "62XBAcfy4pcU7CPEtz5mSayYxNYjQyyMz1PH26MEmLmMb6rzdozeHrdaoMM9kPgoiQYUQtGUjerFfa4JdX3xtEvM",
  "key5": "mcEfu7obxeRRHsM6LwvryELr8Yyd99fHdcdrQpiTyXPmPKa6iATGy3xsDiTY5SMPvrrL8F8BiCvY4TwWV5QcNPp",
  "key6": "47zV8yqdkDWDs18WUzuSZxMbkVekkmGwraRGXiGhoY2A8eGvLwtvsqab5ZraLDBHYbRLNui4yXebZ6PSPHk7ShHY",
  "key7": "3Ph3VQbyje5qtpP6qSHBvUrox2b65H3FL8E8x24etwbgvEK8deAP86Ao4tdmwxJ1rzgddNR54nNhufwKJnTgkKGX",
  "key8": "A5jpw7Epyj7Ja2fVJtNU4Nu45TocmsKETQKKXkF56JvDY8rwsvLr3XsKvEXBNvaVEVSKdfRwBKDMurAmaNVAW8P",
  "key9": "U7bUxAdNVTgBT2CTBV39JBKb2KnHV3tJ5mQyp16t8UudKUWM562H8QnpPJRbFzWAKtKjn79PH1HgCpzneujJmRy",
  "key10": "3yhecwdLhCMGUGGZVjXqmYyA9gQcE5p8JwEpYnnACUkB8WyPGKmvv6fPY3QRTQH9f1caymRjeoeyCGq5ogxF1naC",
  "key11": "2VMikEK5CQhPgUjm8NtQCtYYYwXdZ5itRKUsgJ22hWtdUCkv1kvm8vwQidtvpNMP7aGykjmQKBhUPRWrwLzqAszG",
  "key12": "3A11f1iuE2nooofRDtJ2qbxWW13R6ySLEpxwMRjmwhVbvcU2uckKWF5Loo5B53ai7cdWuBoem7JLrrxxUEu9famH",
  "key13": "hkzLX4NQjL96xCNWGNvx2yeXEGNsPPvnQ8BrcP3u4fZknKm2u2Hr1Xyf4Q9gmqRA7cnvTYtHN7iCFvbxkCwkEcZ",
  "key14": "2whXkgSAw4tQCHYBeYC3P8mJosMeft89p13PPu6M2DNnChDGDdAJrUwXpmqYZrzR22Ku5zoR5z4NHRVLsNQtq1qE",
  "key15": "3mT3PGVfgdPHUJ5SeKCRn3HBUmk5rsX8iFLRgKqnkidjVmGQHhjDLZMhhAma3kVEzMyKbStCSEmkxwuM1thHAEJ4",
  "key16": "3tiGUngmtjAH6ruxUyjTVnZWFeJmFvEF9r7eagAtgwfwJfHNK88UDjFGvYzCwYthDzbEysQ7psbirXnKXvs6atn3",
  "key17": "ZwK8HrPCXxxv4Tk24u55eeVTFTPCRPkg7YS6gaDADaWUsmRRBmJPCwcbLZbBdn9ZLRpmiiVHTZYYJcuRiv28wQS",
  "key18": "2ehNatPxgJfgFE4LgwA3g1RZUmTmc3bfTDY1FPsFs8o5gERBuztCoJ9cidyTJHo9js1auMvC1A9pbVEkKj4aciuP",
  "key19": "54hf1gd9gJ2w9HZ6sapXvsHrR6HRF6eE57GAGKeHmJYVQ9pTNHcuNeYjtrkQQYsLqxCJTcWKfa7tGhG3Fzy6SmMt",
  "key20": "3HmYAZsPqtf8iQHWSotX1MbmZ6TWYjU8GphUF2peD6BWhPvYA5eCqwY7uYUstr9Bf1KdCDefdxob5Mcagh5orgtu",
  "key21": "2mf4AtF2AD3HKPRaBdJJKRaBP6LX2ABQjh9DunXgx6opegFancsQwwtLMX33Vj3E2q7bTfnXMqwk17V4NE7dWUJp",
  "key22": "4Tc8ZtSe4vmuErr8xfjFGEkeqRLHapMSyeUJD5WJr4qf3XCK8Cd4CvRtHpJNMiL4D4REfZJpzN9eWau7JSFxnYy1",
  "key23": "51FXTTi7r8a4E7o5RrpgjVY8AxFYfPtNaU9xQ4skCbMXFBQkgJDPXPPgP7vRX2aC3Neazr1ugKzPVao6s9ddmRyZ",
  "key24": "bdXNa1wPFhazNL8aF8y8Qf8dTByWfL1n6apP3wzFsttAVvCX312bWvvwPXtobHPzmehKAeAqm8C4DfKawCgEDXQ",
  "key25": "5pLttWYqLVGtsSoS6MJu9hpe394cbuf4EiecpxVtR5SibW8c8tSuhSSVyMitiYNBHq8xtFxs7Eu83gwa9rx4ABCo",
  "key26": "5DspRm4xAFHpbii3Hre3MKiUai3K1QznN9kc4nRAZubyk7f3vBWiwhQQ95mdanVH6fAZN2P2JoqKuG1kVvYE6XBV",
  "key27": "5eJpBhz8eZXbNmYKPbNgurr2fohsnYGMzZdJUftZpBWnbTZoLdSzvtd9P2uQwTEuULCfe19hNgSnqUReL8nftKHD",
  "key28": "5uPgZoEWPS5KWZoGZhi52PdfufePi9oZTr8Ly576v7EzazbznoKnK13a515UBvVMGnxRqwT3rmBjM99bKynXaTSK",
  "key29": "2wtvUqXwz8ybNEt1r4zk4h4bJKAomXYCYFtn5acvJrCt6pd4ajFcqYJbBr64y4pSUnU7A5LYwVZNgmw3Mdw37Kq2",
  "key30": "3mCKUNXtBV8QDoMPzYfwYuNWkHF6HN7cCZ6XBKqFCNN6bkCtRVWJ3yJ8EX3EtHdxp5JvrJ9ioF2eMqAk1GQc3q46",
  "key31": "388YQjWNbpfHYwXbbMdaCEFEppSxe3jGmiBGgSpZe3kjCAAebhJT2DUKg5o52saRA7UvothpR3NDQFBDobeMXoe3",
  "key32": "4hyYnfWwcUYGwtgb85qhVo8PkEALosuRsGDmWs3HiLPZkZCQL3Gb1BXsKZpzqitH9UGapTjqBdwdiv7cqpdiccvQ",
  "key33": "2dHi6dsHATFoGHqEvoTWQc4V8aDEvxVG3aRm3MZsNKjGyJihEYoeKueXe2aSxF9thTmKUBSAwKTh1SQBr9FqzBjB",
  "key34": "5UFkijE9u4avY3aC3wUofRHAQSDUNq4kDdFgjfEaTCFGHGSsrTQihDWXsfEPDUSrtgFtbbGPjSpcqFgkTFJxsEZo",
  "key35": "36xNyCcLqsr7joMp3XvvHXog4MmEL4WZwiPtzYKf2cYK6qZk8GLv5WSBLZjoiJHtxvazWbSXiGsqBzhKdqFSUK4v",
  "key36": "5Kk8Dh7yYyXFKzANW6NVaoNerYzgTk9QJitafqwMDmrVLJ28QwhJZuj8WWHapmauq792BhppX5KQJvJKNdMQztqr",
  "key37": "3kPnJhVahEfd2kYSMLdyi58zuBJRKvuVsJCkP1mfGPwmD9yhHsQQZpnoxNpGZyw6esRXZcgwwDSpRfmNnfGnLf6n",
  "key38": "5hi6Dtb7BW5d74TF4njzrDTCGZBKpm9oqWncCYWkWCU2mLJMa92gKb1rmvdEBughUEVpGpY7APLAxZAe3R9eEPNZ",
  "key39": "4PLzAyHVWcFL6RMhTMWskBS9w8KLoaGnuDJLZvgd9kkSkosFbKKW5zRs2jLYi8Qve3mUyvBP63FkNqk7bh8nNZmD",
  "key40": "2qYHi2sjaqbiH73RnxqjHirQdrwNAFLf6XvqwJnSjrt8QVkeVjEpq484h75h4PDvMEjN17fB2ocnxU3udnEZNrnD",
  "key41": "2DpDXYsT1LQALLBva1xhdvDXqsCykqu7rWmKWs14PbEHGGiZ5myg3f8TzPtzvfSWV9ajRgnqzPumoM4Q1E3g3FUD",
  "key42": "2nfejVfUBL3DpzsMhfh7SmqgwJtU3jDzSbgzwQAgrbqs6prDrbpMuSjaE9Bty1dvku1y12Wkj7ZQ9LQnMUg5wDrW"
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
