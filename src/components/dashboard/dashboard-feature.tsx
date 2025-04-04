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
    "2CEz5SenimRwpvj2VHhDs9YrnhB4pokyJAd8FGQeKa4PvDM9qrJ5QMfamdh5FY9ezNFDHBBPvqf5KyXog4FTLXHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47e43P1NApx94m3tPUG5zov3w61gpAawaiLvrW4omkjHHCm9d9Nnba4VRb6LnHob7gvYGVFZdqLzap9spJcDAFez",
  "key1": "49x9aUuNfNnf7dFPmrZXTkXpDy2WJTiaWQAYVrcXxmq1YBE3RHJ4bd9kXxxNaUhnk9Cb4n4UkMj3yERD51KCWKwc",
  "key2": "2sQYAqXELkvY6DyfLmdt21CGRAvYRR5LkJKan9rvhQ2uJMUoXcGsbZj3fLium9HC2jrGZFWv6ngan85fndKThY7N",
  "key3": "2esFhEaJBRax2z3y4G51jegev7bdDWsSjJLJPLGK2UUwGq9nfrA7NwdwEw6hUrtgKVAaCxnvko5zYT33m7PCZbKU",
  "key4": "4zKD3bZKNcuJYNpnrhhpAfKLRLgKq2sJXNg1jyphkrWT3yhBEyXko61zkDzszNSezJiy7JtApk5PwPAnVUimmjNY",
  "key5": "eF2UuHp6cx6fP8LP2nf2BwWvh3cjgyZWpSPp5SKtc3ZFG96T57Nqqa5Fp73tNbvqS14fVUghQsJZBUizCgDNZiG",
  "key6": "zqwv3aZg5AaUtVHC3TAzxB7M6nbZT6eLhnH5hi7uYCnt3sS32jiWcKXdm21wmcJKSx7pYx7uvBb8ZJDKQhiZRYN",
  "key7": "4i9ruKXynZyTivzFUgPsaCCXpPL5dp3Nva7wxf1htx3uoYvx6Ps4rBKUM6hPSSHEFA8M2AyxbPFR9PjbVMbmQaVR",
  "key8": "2oKEGRR3Fp1joxc4m6WgAxzy5fohreuXeVtsThKDBBmqgTed89n2XE8tFkLtFmz41tPaoQw1SoeAdT35yy2de2QS",
  "key9": "5mJg8xHptoW1EiiMbedsFDFEYQs6B91ZwCJKAf1R5a57KgNJRH1QMwDifY31mBSZsXyGrdmiGzCbn73XBRyD6jwQ",
  "key10": "5oD6o3JxDVKrPiFc2jdA5gY3cktg3xg4PJGihb8cWoCUDMnoALwqLP5XDmkjRVXGMLsBSz5jbj8c1KtfNDo1B89A",
  "key11": "51v7V6hjodKohTAKwN7FjB243G2bQdWGT5YEmn5Niu7kPbQvohXh6SHoiuL7chpk7jgwgvrFZaioeMaQBPT4k4vR",
  "key12": "5HwMM8RQXeqKaTvChQdZC8BDhtSg374afw4kpebCkfgRzrLSHxmiz1gpDTwkPUUrkzEdYijZtKUafGDLzYYY9Fhb",
  "key13": "zaNBuNw1y8CQ8qJBSGnBdfS1Ni7K3AHiabY9kkg3BCe4rUfZpNXTU5HxxNuoSRXdRm4r2QUbTaxYVyMTNqvuArM",
  "key14": "4EWNof6ysWHG252tjHVu2myXMYTCs4M1nzgC2uqLy5F9QLKTaaAPk4G4L5pJRAKYMmY1598E8ZoRhgzYtXNte9f8",
  "key15": "5nFVKsNQpKJFaqZaySvBCF1kdL6JwwAbaaJAAFCzibY6noMheLyR6BRzWHrfHVSvM3ufDYWU9YkM8no5TKmWQ6qX",
  "key16": "32UuqoVJSTjmeXrE8HTBoAamMib3Y5dSgp4sPTyCjYPqFJ9uPnAkbRaWi8HndW8mk2HQ3VmQVJGPefw883gLkgbJ",
  "key17": "4Bf8LsjFExsiXK8zy3L9Vm4SvtssE4YXD1AKNmMPmK6YMv9CnSjuDLetSyvqxTZGYgiD62RRMuweku6y42pbv6Gs",
  "key18": "2PNJmh5tyoDzZEN7irZ4uCeKMLijKoAzAjSjrTq3Yu3fgL7MwjT3dKZeQk72K6JLG8RVKj37gqAqS9yuVRge78o8",
  "key19": "AFPi1hhpWkPjGwAg7JJiZZTdKHHGprt5mvm5WadeHWz6uErfdojFcT2KxHNqsKdb3bG8eCFpxa4rcMjTD7mXunC",
  "key20": "5ZCxbT7eP6cdfHPnF84SFgNRBhGuuE11pWVTNkMqnXNCqkjDK4hYEMQsqUFyqDVHvSdD2dc3a4GMBigpkNmU1wJs",
  "key21": "5Umvew7q9F3TGF8aEqC9LU5UZxmut6dEuT2uer4bF8yGSbKs26T5JNvXKi9CergobByeAzwmmFZ3rogY5AhA3u68",
  "key22": "wrXEjGViscQr9ai8UmT1ri3z2r7uLCvgiUAoR6gDBN6qb4wkcD8VxCcHYhJQYEz524zouNHqLSZfDajfJJc6yyJ",
  "key23": "3B37ghskMty7hs95rVJPBo9Ah4SJFmbYFZhpx7xayKFWLDpNzQfrNBhUtrwcFXZzhCnvdH5Bq9pmW2xaoCRfozjX",
  "key24": "4RbnPcGkbevG2U3wBHpNTwiPvUtPiEJrGW8j2RigFGPu2oQ7kqDi3XdgddiLCjchEZrbFXmTYQC48gaFgRST25MT",
  "key25": "3Jr8KzPkkiz4vhfTNcE11dxJvGbm8DtXs5jwAcc9i1fKyR8oJkXSaR1RkJmdw2zVVtJi858Jroe31CCbqQHyApMa",
  "key26": "GjMDYajR53u1oDpzYyrFg4zjAhDqRUHwa6PoF2vEpsq9XfBN9YGiyo3VPxvu3urKoosEZ6ALUxmZNgwGogsBUqe",
  "key27": "3bTJBotNZhM6Jm2f2a4XJo6pPbK5PXWXUwMP7XSSKy5ekGgE3SxkUmSsafXzZqAnRNrRe1gDChDmeWnQwGDenPUS",
  "key28": "5LVz7PKX3iqi2ceKXyj9mJDFen329hjpSyGft5ho1KLiuwUnqQkzbjngjqEGQjvqUtkP762iW2YEPK8ijB2orNRW",
  "key29": "2HmPnLsnVLZHF9zXtyjnbauNcFSirUQyriMLgS1WU9e8wKHVvLqVjbzDjCHqfjgCGXBXLCUoTTspYaCSDeH7Y1ai",
  "key30": "4GsbB8iBcBamg7YuKvVy7Rni2rSGnmyLqi5VdgFGNhgUPaEJUEjoZGxauuCUrL2yoLxWJLDYoPDJwdBniFCFiVcL",
  "key31": "z1NDEXQrSJe4me4GePF2jZt1TX3W1vDqSecNbuEaM14PTS8UPz71i57jyykGJ632SmWCFfsHHaeg95Mt2mPsvrx",
  "key32": "3iQVKgT6nQMGaQ3TdrJoPYCtmZTQNiNW7mvzDThAkYXadwYiNAHv3SUebf4Ymb9XzNzk8V78nVAcuh7FsVVrRLbr",
  "key33": "MoXQtr7qceLRkf6cvWNWx8fBz4C65EKmjJ4PtrQgivXoH2ZUWLCQMmxBiWtBjZKLw8guXxLBmMdz62Xed1oyHzA",
  "key34": "4PKfBuwoumewprSWZSvZu99ACFvQoug2RMAMAKD6uKD1MqrdQtuL6TM6Y2Ho4f9sxbPgnhik93F3L8coP9nUHTNN",
  "key35": "5FxDBWKWUJm3ck5rApoiTKDMSMTGmxrMsEuRQu9HYwmceaEKUFRsBk5Frz7Rz4Q2WAghGQBgtU9KvFCPdmsgzUn2",
  "key36": "4126eu89o5ntyk8yagNuso8kGcgRDiUnTYdkjvztgVoBdqnu2Ci9ydig2wEQRFqfS6Ay325gx3bfNCa4v2jTUPng",
  "key37": "czmSFDHMKDQEyucz9Y2eLyXAPC8jKdHupPDbWAsUed8FruGzyXRAb7yDGuzooRTTfQW7rRphwp3oy4DFg8YJD3z",
  "key38": "5ia9JMpiJzx3E5KZZJ3aqs3UCRiqTg1Qim6PJn8CbqPjpvLNrWQhb3L6QC8t6G6RmN1hbRMhJ5TKj3V3XGjXk18W",
  "key39": "4D6oaBCpo4C3Vjtd6rHtHsRsfx24FR6NmCBA6zhLnNGHS7ZBJ4HaHH5ozVyi2ksVbLYSWvWPKb7624KWwoVURTLZ"
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
