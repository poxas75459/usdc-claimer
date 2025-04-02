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
    "443bidjQyDwKAeoaN9MSo2xmmFDaRQpBv75b64pdaQoENEHvFosxdMtZZyHunMsx45vNUKP8wEhBpDThL6Kbe9g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ZxW1r9kGPNTZvo6SKRMYuLZSBBnVp3gTvKdLsmT52B2eqeAZRpJzhXHMXNeCsPLeijhV55irKZEUXgYyV9fCyX",
  "key1": "2HW8A3mwhgzekapGwMAdLACvcAmW1MRfkiHEM3gswDEtXWjkiGTJCARWzf5ufbCWF19HUyG1jGWdi4kfUoqWvnxU",
  "key2": "B7GxnXg7eKEGrYeeQzdGUoPgm9E49fioSuYLLCRvnarQRPKtrxSiYGXWBwSH18kJHNLrjpDGFvFyrfFJ1L5MtSs",
  "key3": "5pmsaDYkGfwBzd6rYNJuJLUp4J6PmoHPK9QY3kbM4b1jTtznocYv8vnFNk19QcgV8xSwz7KejUNUuC6fvzridnAD",
  "key4": "4PA56WwPGCpKyp5upjuCbJ3EXSDpurYhrmwYD1ka8VMuTjfG4nDvDdRfe5xGvQXoN8p8ebEeSGwdtxkk3ctMc8CJ",
  "key5": "SnUAj5Lwe3dG8tqy532W5psMUFuXZbW8J9zGGdBgc2Fodw9K2MmUf7q3rBSojtBW9SgYKzHUCZgNgkYtbyRKASZ",
  "key6": "2JdDV7SpyA5o127sS3N8kMw5xdKJNE5VzZPPxNpTfbDdN7ZS6zxRDbcr8S5g7eTZt9zgbHvjfFHqDFUprDXUK7xa",
  "key7": "4RXCpeMrrBKSAGXgnHXPdsgx8CwVpsSnxqb6DQ3Y2qPPg2oVHmqcegyXTGykhxHJdCkurLysP5sUFnCN7STpDrQQ",
  "key8": "5RgZtzJc53uvMHU7Vsk6a8g4vStx1NTS1zzTbc4KeznbcWYf7NepvXEtkV1Dd4aLHEMW748QqXY4pQ65z3hJvcPt",
  "key9": "34Xcu1TVJ77gEJjGaG4m3NjhCre9hQXcDbTwaLEseNpPWiTCR5TzG4QKkgXAAs31tzQnh5b1Ne6CaVXrtcLnF2GX",
  "key10": "4PhhJvYXC8iyrESa9wSmcLRTHvoJKhPs37qdxvpURyyQCqmBBJWpxqsT8sacqhNpM62WKGvhYse3H51W8RjD9cpi",
  "key11": "5fPAkF6iEcZGC9gyZsS7S2eCuhCSeQ5PEeei57AiGiHAD7Qn5Q1Tqk4Ex7De1r3er5sMEfWi9wqBAaXYCjakSWC6",
  "key12": "5TVCSp7ipTT5f9R4yjANMGmBsjifxausvyiTbkjqHFLsUosW9d8Ksxr1Q7ddC4SUVAnURPMW6138o2UhP8Xzp1TE",
  "key13": "26yUKYc9CYYwaSdB4GJKeYRMrLFUzVyMaNMoykCxcx2eYVBUwgjrekuXfgVXEC9UFb3fJXja3PbNurKXWa4yJHAW",
  "key14": "3MRYThki9M8FyCoJuk4LLg7Uq2wkcDnNqyFGRbSADnnp8Zfk5GmHz22hHjCTYC3fZ6wMXc4HvaXR1QP8S4xuZUjZ",
  "key15": "2zAqkVSaaajyQ1uu8dVVNAfra2rkF17tP3ybBsk2H6STTfjADo5Mybi3TdtYttpi9EFEpPxjcvYkXhdZkZDo7PnS",
  "key16": "27gA1bBjezcvaqENuH3ZMksuttkVqaCJcdawvkseVeLqzDtB8i4rsTPqVtXyvsZmpoGTuvnTurq3xnGWD64GQSqe",
  "key17": "3iDchsFfTDB8FrvRwmfM7LFpKPpwcLGDoW2NE3dm32WG32PiwbWRJvGRKmj9kvhWtfTAaEcXLdWhSac13oGfUh8a",
  "key18": "vgyCGuLqZC7xzyqShz55DFjhNirHS5YXYdnWpYGovbctfmvkrnsVjs2nhbHCN87GkHVCdLgtoFMgMy7Q8CGUu39",
  "key19": "4hqNFBwoPZA3Uu7N7WQm1c1gK34oDudL3tvGzTtf83zevQi87pbnc7tzyFHWWhbzFNQyCTirdWN5zL1oy8o3veGd",
  "key20": "3KzxZN3Dg1xTBiNoy93bC5hCH7r4dmqH3A9C3nhn6fmnrnCrvYjYtDNEMFir1t5oMUi11CQfwYjcXCMGmvQbuRmj",
  "key21": "5cLH9cJqn1gabF1RGiaiRG7oigKzYnfrSYCptqjBPWUAYgRrztSYiD6WFKjoEfpvxPLEmTU6zcjHREf6GcQtVZnt",
  "key22": "32aRDk1Qsevkbom1BN9UfcSnRz18Q9sX36rL4Q1AoKp1LaFsDQs9wAKQW5YWoLTNT6AX8RyGytfexGrhYqQgcjLV",
  "key23": "VaBsjkAhVNa6Gg5JfCe3EAhBAq94h1y5kMuqHJ4AbqmAUtUcXzZtkTGsZcDgHWuKxW9W7Cqn6Kn4X7TYgpzVvtD",
  "key24": "wmGGxbXXoK8qnJMDqkea161Cny16eM3fXtHUjH2uqS4gNMUzUwy1YyNAjzBLZmmFHS2F88CaMSZMQK5C8FRKJ8u",
  "key25": "e8MqQfxfRKPFjSUNsyvdbdJKRSsUJPW95HxH6e96Ba28C2TUTiyCcn83jH8gFYKyLJ2bafRTVRZX87gtwaCF5Rx",
  "key26": "4y2u7Krhdg2v2QXHUKXwFRH4s4rePNKmH9Wd8nGS4tqHqsiyrDe8bNiMofP8MQf4a2VVaisNnetC52ScojAd9oza",
  "key27": "EqwCuKxgvnM7oWxbqjyjHRfF1C7foUBMQupPRSNZKdtJvZerDZSZr7rraaubVkt4YStHjvDcUtQGnjV2YYq1phG",
  "key28": "yXU1CyUpjYSRszmjopZAMcL9wPHGpNo9JLR8xvJrGE1DPmqnvYdsod2cZ5NPmzYmwMNqkwLhU8NJiyfNtsDxBTv",
  "key29": "4CRHAfMjiKQEXmmdWDpDVMRKu3UjMF5bD9iygbr7mDj4gZKt1UaEnjGQgHi7VXMpKcYw1Nur1N4B9zNzqiT4vJo4",
  "key30": "4h1Ln1pGtG9YtteGTU4KsZ6JUdqTx7BbR9pwVJMUpowxGRBwXMrgYZjntLL4qjEKQkxgLmuRJWwkCe4yWCAnMU4p",
  "key31": "32exLTU3jJ6KDwpDVHH7WCjTbNMmSCiR3EDtKbYoyV6krD4pCsbBCunuUtJhchy6CtcNsh6BNRT1gyfFMzK1Lbv9",
  "key32": "5X3Gj4jNNeqcYFrxYzeUQY8uMhbLh7k7ZfjWbQmb8kdw2AnR18XDBiVo9M6b3r2G2CM9L7h6G5161yPhj1rjJHxT",
  "key33": "8Tebbb3aYCnTNDJaNcpaVaJci7SAbtQgq4jm1KnCy9zk7GEaebTHCJ6aeqn7VCJDXLG3spNnBk7GBHs4UXcYcRB",
  "key34": "3kKa4WweZG3qFwQUERWcraL5G5dL2cw8H3QZCrfuwypiYrTi5KFrAm8PYAGPmo2Md3G9XWt4mkCEjskDggpsVP45",
  "key35": "2yHa3JUEZDR5STaxvgv9zEzXv92eQnjx2tX9mxHSVQ4HzBC2ySHy7QSXZ6j8Dah8BCSQPgkup9mETFz4aUQhiaw3",
  "key36": "67SS1i8ySMPYjjejux6T4BttmJpvMCae7HR3nTD2X4APYkftn5qRDtz8FkFiLSCEmZMgMnAsx1NJv4WJKhHZzhny",
  "key37": "57E5DJuS6Zrts16eUZ5GQQHvpSeJHMvGHQ5weGomLB7UrzpcHHpzi112HiUCuYhpnQLgQCY4D4B8tEby6Tpm71s4",
  "key38": "GSYppcxFSggkVoNReJxm7mXKWLF1JnjxPVjeLjya89wqWtpQEKZ9pPbKBMuDYRFgxydahR6eXJpqumuqYaVrbBH",
  "key39": "WytnxPw1Ut6C3Ramav4SHXFMiyG7RYEG3cN3rmrsdrSsy7qshRdPTKQxxjQ3cDgnuVcDzMCrFanvpdFmSrkCaP8",
  "key40": "yspqqK2Bi1v678GpivBbLxCeeifUV42W5apXBDdwSS1jcgdNsKUhqSZxPoGjrsuken2uHZGMyj19VSewKKkQFHx",
  "key41": "k7tH1LWYqze2gAGmx53Lfd1vEptvZFET8FVyR1rnvqRd6pfATkpDQAYpLEBj7dUkY2JcmdZ4Uk1NAq7EJRTiWgR",
  "key42": "2tXTByPuSL9yuhpLboSGUHBmMKRHWGPguP9kLJWS8DEG9VAbmYQfmjH4SrWjE1AYafMRgkF6d5XV9rj6xTrvoXou",
  "key43": "3ePiZyYTP63W4aYzubgeGY2eQtpBb4eKzXuwebiJrEP6bTMeVVF6jkQoyNciyAJp2zfq7Q3KjitUcT7fibKB61ck",
  "key44": "5zRTdszbkqNyP7tMmRejDpSqA1Fxb8sontJrDGCDbyG4crawHSVvDTXRtyzNBDQPoW34SVbXmvGcuhYakJDtZrCN",
  "key45": "5aoTPHxzsDS9XoMPZZJUozsqwCCKPgXmnG3SGc3bhqKSBGLG1grK2BdmWcfPzqDaACxtNCWAn6wUeWsdJoZqC8KB",
  "key46": "4H8vpKByaVFgCSKTH2k3bMoACTpbmoRBYJPmwTJdzLVtDwhNFwq78hJ2LcFM6Lyh7bns3pff3jMPoAwN18pRNxyu",
  "key47": "2y1MWCMRJRc44N6RFhzqtRpEQeejdsUGhVgK46Y7immoj1b4R4vXsj9MmEPHAPe6VpL1aPRM8pSMSGgMpjVMENAQ",
  "key48": "536qotGCjfgByNkFspweUqjr4x7r3mThhp5sJTduXfNUbxxKmamduL3ibPtK6eMmDMZGsBQbde42Ts2pevbcuoPF"
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
