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
    "32HZa4GvY1j5pimXNCJpYQfNyUycAw7pF3VAHfEA15qTzK4bLYcb96LdrNEoNXaeh9hB5sE6Yy3B1jq7BMhz4jFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5mKPcbvc4d8yuGGZCjPppqVxowy7XzHKMzPY2ab77qbKywkvRZAm7K6XtYe9xDwtGSYUhHWTkv757J83j6SV16",
  "key1": "ftCm6SQomiBzzq7xj5iCZ5R1NCu9MCvPAK1pjsnPdu6quW7qQcqrjp9MLdSiL5x5st1FtXeaeXE948iC3fCKtQY",
  "key2": "3HDhdJdXExwxj28aoEtFvPz6jWJKLQXWBqFRtfvsoiqC5FmP9uXeQzQq364H7tpV3tSgntcozWk7SHXq9dHWYLS5",
  "key3": "3pAVAggE47vrSnG5LbDDcH1i6rdRR5VtvMxW4jbiZ3sHU9DPMMoUDsfsEiXnJcmge3Njd9K3p8ctCVqB9uJDX5un",
  "key4": "3briKb7X6Nstf8YA9Dktwu4ywQxGaceU7pzDZbaLsAScmaep1EveTapHZD7xrBw2k8FhSvchWyqeBqWiAyLgBH4y",
  "key5": "4T7USfbMdZwgP5rjM1U6Mh2d25shCoJbDwEjZpqf37JD1K3QqC8buod8Lvj7LRwTvQT8SJ3ieutn4DLfEm1z3Wc9",
  "key6": "5iLK1o8xvGQsBqjatLvKTFfaCiFvQW9mXkdQozNCFdqo5JByvp7XwAb6QvSnYxKwJcorEmMU6E62AHi36adi3bx2",
  "key7": "2wKvaZcrGSRk8e5jU1XVUUBYULT5fmL6rEnwMqCRKP1YVDMf976BsqZ2xBRxEkSZzxyU2uLcqLkXs31AsXNYSA5",
  "key8": "2vFvB7dwoRQCNMvhrRTpVALi9AT2J8obd3a73EhDaDP6XNr5d6oHjCPp5fhk8j6LZyHSihSoGcyEboVXn5cJq9Ju",
  "key9": "5a4X4EFFuvsFQST2i6hu4JmED7jyVtyzZRMy3hppLQB6WWYgwG7Vuq2X49EAgnhhmM8Qy5wHDSLW6eGWCkYw7AnF",
  "key10": "29mRsbEaMvMRmiKE8TASuFt6vCEjsx1cVdAnvpziKeUB7XVeeBGvK8BePbgxc2xtkzfwgRSeNRXf5PH5CwGU6Lr8",
  "key11": "ArNm1H8Dn7L2VHhLEriXhhWbcuj5A9Gevbrdq7LF6mvq2zyHMGKZoyyuuTSbJ2K3FfLKr96yKFh6oz2w5QSxYLn",
  "key12": "xtYhL7E5eqwQ88Q2XD29mBX5Q615qvWsFLMRacdAxjjvc4TZZ7LQMs7ZgWU2XYYwgGqGzi3umcEuLm1qzmrPHhN",
  "key13": "5znQpDh2GXbHB5LfpcdMvC31zoX5KiVJheySfV83PDNijH7iE4CNBJ5pLDEk6ZVhnj3eAbbMbpwv5TLeArNB7QzB",
  "key14": "47aEqVmd3XdN99RoPQynQqDysryZPfEiF5khPd7WWfUeQHXSpRh93o6aigzjUmoZZ2awJBeMEaifmnsvEVa72USk",
  "key15": "2PQTBdVgNioKiEej26ggdpTC9X4TtE7v4vXZGpDzyHa5TA7vAgaUSGecwWGoDK3Va6KgcrhMjhfrSGaPHE3VckUv",
  "key16": "26FqXiurB5snVAjsPBoV5XXKQFGcks93rX21TVhTeJed2gssnPUxeAqdDijdunwjcbq4wYmp4BFgg4zvtfixb8D6",
  "key17": "65hpKW84SMASxADXhBBnN7Huqw3cSR5mqTWcbcuaMjutdGG81HPsTwjdwGbhn1KWUQbXhaSr524v3Gn6x5ZasmbM",
  "key18": "TuEy6Y8EZT7kWiQb6RAtrHpgWQ3qgpC9ML7xvz5FKfBQW5gsaKofs7AjFySeE23Zsg1nerzTNKcFbK3aHrr4GzM",
  "key19": "5JdCvWwZkPjgZjS8d2rAZfcmXfV7zC5jBaucMxQcnwfJrRk1aRfuH5nSZK1goM9PauNMwQQiHgH9iaocv93HiXCA",
  "key20": "55xVCg6H9JsuADgsqUjLgru5KcMLCWXL2UCbWRagtpXsk6f3MazrZqDDV4nk5ew2rSMrA8djaQcWae5orBPznZyQ",
  "key21": "3Lufn1GYDfDQ3zHhMmudpCBptwT8Audhe1cmdRSEX2SpL5Prt4Ea4ZL1N25LystFuBXnZSJHegnpUTtnHcKrasCf",
  "key22": "2HSWUVAks5tct8trM6UtXsEEF8ww3WE7ftVHpiqXtynvmFKGgHKF16dujckJ1QGAjEFghYNyop4oz6hzvkH26Rb5",
  "key23": "2abaBd4dbhjWAFKkBqH2pJhri3HhCL8u3peGrsjr3kzgiBh2E4ZNEYN534bCEkrov38ouhBbQ8GrgszwmpNEytNj",
  "key24": "4qMf1q3pzJ4VBx7RuQNDGTncJBRUiuXWSNQKgdtWcaDfqnsYSsC6KF2emYNGQyV7CNSgGCYgCQqinJC2xEPer5UM",
  "key25": "hwStrYDAn9QyWBuLc2PXZYiNbHYpvrnwACtsaD8PNKAD5ErbF4x3buY3neDs13fKxQPbwBVzLKPeS2JjqD2zUKe",
  "key26": "3GZibhZMzESVyDUc9fovQC99C9swn3rUgWEPrsb78g9qvqaPn5RkosDMaqQQB8AypJuaAYQxFG4gkjEVY8yh8DZk",
  "key27": "zy5w6zW8Ln3pjPistCkPDEicz4AoRcJo9KbfgTidKBtpSEzWKJBpjty84ez2oRwKPno4ErkizXUpCJZB5t7j4hB",
  "key28": "382P3hjo5L6VtNKwwg8g4GdnYACnvgEwfAu5iU6TYCeWQPMAKUvK3d9wZY9VMDBLpK2GD8j8BMeSze7iaasjpEtA",
  "key29": "4K9gizK2fRVZ7kXkP4xpgczWb6NJDGue3s8aSTdrpY9aADZWJD7gXLGnEv1udPURdxdCdxjURmDgPmbLpkj8NPY6",
  "key30": "4XAM7TriSDE9NnrDCoEfMTqZXmYu5MqDwgdFsQNjMPM6XZxFXpRqc44x7YaEKsjLsLni45gCNrdmpCVEx2R6y56N",
  "key31": "3bfFwWcxhgVYtZ7xtncAKSo8K8xUUVnwiYzy2NZSVbShhiNFzXffrk6LgHihJnw7dGSmST66FghuFY1QMkTQ7DMg",
  "key32": "4p5byMJoaHHd2LnpChRhFo4eUnrUEUV8JAAQA4VJMfw7LRzMAZthedwN82qSSJgwae9NdrNFrmCCyfxQchiLpYSR",
  "key33": "q73bQczHWBSFiHsZ8772gYV8xUWKHXuoY2nJYCbBVUrnHSyLvDHQr71eyfRXtNikcmfApNb7sXqk51nwdUK3D6U",
  "key34": "4pqdrvCYscHfurCqa7XRS9oJ7qM3n2rPiWED4RR8YzScMS4hXeVuE346VVGjzAZ3dnyW61yBmtWEuaCCRPx9a24w",
  "key35": "4uwo8gcu9gMbTn2TzBxJy2J7KSfsr73oiWCyAGTmMr64V4iDzkTJRfGUUTYrS8zzSU7Kw9zok15rbqNVrExtfURh",
  "key36": "49cGA6xJAysWLGUQfzmP7uVAaMswAEc2xL2P4BE6L2Ccg1KEV9ZmoRY1PVazKaixmbz5TpqxfcWqWfJP315t1wDZ",
  "key37": "27SAZYNuwJs6y5CuKCbxozCAGaTeH2qXcKAF8UmGfxqShDKVjM8u6jv2QxW3DrCUjMw6bGndJXDsn6QQV7exaVCG",
  "key38": "3CGDUyDaJeiAyG6h36A1xAymqWFpBQPYRtVndPe5VZgGnHC6hSS6JFW78eVpbpmnr7BfRYfcKiiVMePttoNVcYKV"
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
