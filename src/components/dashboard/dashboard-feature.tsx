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
    "4rD3JFAWpgwq3BYRKhZLKmvdUGYjEg3LMLMWBDh4iHLGq9qdVEx4KCrF6rvJypENEX1MHrM84XZq7ep3pH8KyT2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sQBiXukNBQvhe4WMufHBLpwSzhUUkgquDiyqBhZH4D3nN8gerctzTAUi4j9aZnbpmZZ4uUYyaQJGY6mrgZYUtJR",
  "key1": "3XCSypKRWm8WFNM9TtgibGM8oHkXFsGjeP5EGqLtuQXqQHzFW65VpykmjssSy71yXvvhTnmsjiZeADc13MqLSydU",
  "key2": "f215odNzxBAJcGKQHo1GcQUEi9X6ZJJ6oxKHxytXZ8wt81rJ4tYyN4nKsyJoLos6eeT5JLFXeFMaPQjN1hmHc7N",
  "key3": "3uFrYogqxkAt8926r8tPw6Stbbmgz8kbVVuYsA6fiAc6ZHC6dv8HVcgrisCxZ3qDUHZJZCu1x1vhv4dovVUM9AxW",
  "key4": "3fWDmc5ADRzjFJH2u7Q4kpzuNPcKpK2c6ZivSdJbNktcf9wUofWUCiwBkaTcRpfCJSsGaweZcteW3xKFKuAMT7my",
  "key5": "3yxXSjnnFxdPVvRJ1aikFGxGv5Cm94pJ3UZczGx6WY9kCDwWMuoe7JXrhtH5FzBeb6siKTD4pHuFrTZ91pVaj1jd",
  "key6": "3sY8forb52YwimwanAmgauBKpL9rRNzAQzGY8PUmYVSEMLRWMe9wi3ptPphTnzwuEeJS9t8eVV2GxmGQ7MYEjE1c",
  "key7": "2wAJ9R3GWAFzmqsXRKjSfGPoZV7c7mRTA2qA6tBzL4tS6aXwjpkPuP9EpBQMwqLTsUKU6VcXDrXpa8PryKe9AtAR",
  "key8": "tkTEc2vCbvoxx6dJvMCv46JLsdBUDyrVrABBW4bheHaQ3v4RCMBUHxb8h9SiYw79vNXfp9MSZEgvvedaqmyiwna",
  "key9": "3RHXy4VsNNEw8mtrgKRicDw8kterAWkVJujVR1DzTHAS5gxeT2wugmRdfcHdgNDNdRfERUDuBaowvpUQuQMnZiZS",
  "key10": "3eo96d4KWkHuKVKFppi9uQeX6PChsxd2fUND64HaRHeHjGQq9vjXU93oP8RQKXRMYdNysLcJiBFqo6j4yApNyfwb",
  "key11": "2mvPLGhkcURxGd18x2jrK5A5d39RmCSu9mCPyKbqeQzBSsxu31UumCZM6bbiSxMjS71zQoYaBsdFJcT27NPzwxK2",
  "key12": "3Z97gev7VxxzdAunT5Td9mnSZT1bU7JF1zXdchmzvUbdZRp4rhnqoQ5fTJDP1rYFK1CPsrE1phbDacBg853FsBKn",
  "key13": "3r2PiW9KUZapcRxYHWrNWW7NkJuZzxejd9p4TveDjHDWT4JfQbvhZp84ou6hGXsAhMpdjNTcmpfcXquhz6HFkr5S",
  "key14": "3NwnppVk8YCBUsk8QCVF5RydhprvwydAjonFYnED6SSvhdGt4sunFZ23APAvcocRsMESENBwn7GkQcKRGZLq8DNK",
  "key15": "42W8AngsRpPe1f2ogXjesDQcEkK4qRfWs1v6EKWaHJQBLy4XJvZxMyhavPDtFhCpthPDJfffwQ9VykL4Af2XHyMV",
  "key16": "2LyQzkuBG94ykU5GipBz8jbnxVkUji4zpRgFYkNS6DtcqxM4MjpUiuRxsUx6jDb4F6z9mJQQp311MGNQg5WCma89",
  "key17": "3A7xNsXk237TzwrWnUnJKrtYaRNBsK54A8WfpaXKCknWzKEkutZtambyGTANeDGmT1iJn5Aob8xY4MGXrFAXwiHP",
  "key18": "qdq8vCxGkHK8Ku6RWprK8b3AirnjfXBCsFxgMZ9iDEqKLhWcbxXfV45GPmZ7ELW1HqYErmjd98x9mGaNbAxHU33",
  "key19": "6Lb2WauSWdKQ5marDC7DAsRzbcmndxXmpwwrdLgRyhY5AzoF9r3WsGrVSLouKKvupTPqAJ73xyAGoQk7kKcBTkA",
  "key20": "2otwnedWXp49BRNKraRXS6Fbym9CEuaj1CT36AmAXinAA1BU7prynhcPYXzFKKPw3DJzwnqKNMYtwCn2K3EtDQVN",
  "key21": "4br2RuXfMr9KE7jgwtSUT1631QmSDqpPHQSp1zfxokGTcQnA5cZXX1vGn6PHLfgtb5RhSNmKRAWYExEeffv35Pt3",
  "key22": "fqXURdTnWeHeiUs4W5Ut84t3Nt3GhAfUd7axu3LBfyXLnGjGBADDc28fBJjqB89k5PDqMFwmqxzmMWYYmDJAHti",
  "key23": "4wBPoF7NtMcJp7E5r2iMkAmTJ6MMCARWQqRJGZriMMDT4vfmeteQr4kYPTE4Ui66vYpaXhBcDFmgxz6zLRqnDnNp",
  "key24": "5W2iQj173w1p1X5QQtc3QASL74u7ZNjAnBUJa4qke38VCoeASAvm1ecT19pPssnapZTYaSabQKevBDWvht4N1LhW",
  "key25": "2etDFEFxnMUoWPgTJTR5ez6qJLf7bv4TSoXQp3z222NcVQS53yBPcQAPuLLkEJax6wJa8P47U2S995o2PHAk6K2y",
  "key26": "24FcAfMHSXCworHpWHF5mKtkVvNEisWSyRupDW5W4XVncLHAefLkWRjjCnqqNgqG2p3Qjbi3WbNuFw3hphftSc2f",
  "key27": "56dQaxxbUAcwaB9D5db6zj1PuLLCHfVHxadhD9XdeH4jmDvdaT62cMVnnaAqkKGdyUtpcUhquYaWDosbApEbR4Sx",
  "key28": "3aJfaaVxXHMEyg2mJY73JWnAQVgh9jmGmCfFQWgCnEjNCPuvYztui4t5itGrQZh2LPtE2Uf2SJPekh3hGnKA9wQh",
  "key29": "21fo6mKdNyD5cxH98xh9ddPaoqhd5gNsNxvA8LcowyMWC4nrD3EgJFjU4c9BAu4LKzsUH2nYkPdtMpZpWHZDg2Jh",
  "key30": "iydmpSgcgxrvj7VsJwQHnhcN49zdbceDAxEVMsP8WfjE2CGkhnBycWzouogzkzCjYsGxv11AU6o1DCpQoDKSsmX",
  "key31": "5U8GikeKEvZJsdMR75DhuD5oEqHBLYtFja8Bf9UJwJWjTQ43FkmSoJ7mNZVvyJYzQn2ebQRrUJUogdtZnSxUT5Eg",
  "key32": "33JLDa39tLfzcgZULmJyNcyhrUqFL8CS3KQuENkoLFkvaxugSJBjG1KQ4QHgbk3pnKfaCxZWoma6PpQzESdSqv4A",
  "key33": "26sq3vE87R5ad4VQbX4DSTXWLiyDobEmgweZUUG1ztEc3hpRavMBBjzc78Pr3hmSF8kUJyYCovWpYa9zkPWWr7wq",
  "key34": "5GgsgGR8uTvJN2w2Bf4WuB65AYH3DqtGrbv2gLXtvfsaR6ZhTpZuU4G2GGWMDtNbYSrKsvmkdQbESLkJqvLbvMVj",
  "key35": "288LQ4fvbCVaxZL4rP4KxMQ25thutJNpSwJ57vaNsKeRtKnbv2Me3Jf24AgAYbh6MiNRqGpExy5c4sKwuvC6xePi",
  "key36": "4nCGCHFHYEMyH358YYN6Qz2PSdSiKF4xD9cb2CvTAuHKXdLwuWYkntYxV3osGgTdruRgewtkpRTMTbY8UJqnZGhc",
  "key37": "JDTaHwPnKyA4qY4Ja89qsCxFub75bCuaEV9pbZHFqPW8Y4iKssMYoPWwXa34QTxf6xi6q4fXeAnVAxvnty83pK4",
  "key38": "63fEGZxQRthRmf28LSPx5Djhn7j5c1QowgSAGgD2evBL8uoSvjRvcmQMKsRiXFHJiewV2qGdAH1jyH8L5SCSKnjj",
  "key39": "2azcMa95F3iWqxp4GcFWopzKZRT53hqW6t4EWYLSqQzdg2TFJqKm2fbycg2a6BMbuQyxknoZ8YDfqmY7s8Fhnaqh",
  "key40": "Bn73JuzRkJKcjzs4RzyKmR8zLwsVxHhTsvDEorAjer4rXhrZz9shdyBYFCXESr72i7HsyRkeEL2Ft2fxQ4EvTJz",
  "key41": "4KQdNgYy75vtaGCmoTBHsteaVEbf24YXrB2SfPEmqpJFKL3zF6hugFwTfaEjJgdCF3V4JQZsQBHKe4cLzbaFd445",
  "key42": "49msxaXNncEzcXfhbs7MMow9hNUAxg6GMesCR2w2HJTuEQAHin4rPhLaptHRq4KDs2fxGmaFgQVTNknqN9jtoTu5"
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
