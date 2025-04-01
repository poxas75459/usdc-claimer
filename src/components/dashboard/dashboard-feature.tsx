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
    "55RzRcbJ8ib3SxsYV9pAfkwKqUxXDYDbtaWXFJDzCcJdaQTEezFd8kuvU8YTfruCFU24qfHat3499jpJTn2WKNXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqNDP6PxV289RFWAoeoGhVRq2okoQbS7pq3zoPzHmkoBWQBYncWNGuTK98VWXtNTGmvEJA2gm13mrxADqdN81Qc",
  "key1": "3Vt3i2S3smjQzEKiuTaHe1LfqwGX8q7hxoYmfiDonyaw2ZQosdYy7tBiMiSAj1Y5qzUBQdvehAsbKLBEfC7tFtDj",
  "key2": "5SFr4NVrqEdZHX3uKCqENxnyDAR3kfC1vawc2Vi1ABw92H9sGChYip373LmuGSzpoKcXZihNc73Hnn6ZPUzYnyr",
  "key3": "5WoyN68Rvo54s8d8qGg9hSmKBhzUXi9QYVH8DbZxVpUn3FpET4s4zw6PJHsxWvertNuR5hWHT6dPMG8vBURZWUAL",
  "key4": "5BqMqRsTDxJpzvrHWGTc6GBapbrCSiKEWQcU3ttA5ATk37M8LNyDZWA7caPKddXSgZ7iApeSPCwX4CrhReSXyfNp",
  "key5": "2gH9p9aLzGCUXqTX1pSFgDSSDhHVEMsZRvNEFbFe9xYtDYThb1rEKCu9kyfaskqUVxAHTpUyCC4eJjztsJbA7uGA",
  "key6": "5JBnyaDUV9bDDHYUbvpVsPBHnYpyfZ7A5kqZrowVakRVutHXiVJaoqLNLTiWaVmivcXZ7WtEjY6KjafLsRhm7KW5",
  "key7": "3CfZimbJiTvZHjA3kY1ik96MCqioREsHytXjxAn1aueGrJVDdr5xH9jheFDNz3WXQvfJucW52Vxu2jMcqYJN7et9",
  "key8": "4ciWtK6g6FDDc17m7bUv6qfXPQfQhfHSEVNaYCn3CYyc6d7UgzK1uUnPG7WEjsi69AWkchW6oJrXD1gW3nM363FZ",
  "key9": "3R6CgJgAi14r8BC1Dj9KiYNwdCPcqRAuhqBMM2QB52mTj4zrBEvf5ZVM8PF2Xjovi9t7QDi3K84ngnkgHrtA99Ma",
  "key10": "5FtqVyUJWfu7VuHQTY1UsWUGYCcjtfygkDiYoZs8EgzeZ93E9aP3rWPdv2xnAaKzZiZCZMeSPuuBS4YGgRtn4aMD",
  "key11": "4sEUppgbjKxvFeAPFx7sjRSNYzFgYM3c95g2AhiPGLnexg89hNDUxUrms6Nz8t6KVA4TgmhbfdKxRT5JcXSxhtAt",
  "key12": "sVrC6sqog7SoycUpmqVV83Cr6oih2gR8c9xjw7JBdhaRRFej1jYR85DGi7VooEi885RZNSTtGN8SAhJdFR4D913",
  "key13": "2Cn7TMCBkwc98cnNZmQwL1qwoasbdHMcgpP2uhbeNUGYA2DtopqykvyU9mcU2iE12qPJrzAVTy1Fpu9S7u2xaSN9",
  "key14": "2wM6kYNKL1GQUejYCCrfL7ZNwHCTA6QWSwkUswX1TwNRpWvYdqfmnSCMPnSykcofaogDUghF1Wb4RTcAXKg1Vdmq",
  "key15": "2zYK5fTxkhKnmtGmmLXPr8Y6ec8mpbdhpgxPwgZ7Tycmz3LgbaQ5bGzHiSZJ9u814xXobsW8ciNrkxqKo3kqKe1H",
  "key16": "2G4wJknvxEAVyhhEVg9bP37AU6DCe9THeEoopPgqPmr5N784C6k1HT16gFBMNtit1XzsbgXxMdaXyr4TvpM43ftG",
  "key17": "HqZv1hB34eRGJMJThy485outx15vgqBsWuUvHYr9aPdDbMzadAfShy5pQ151nnTG1aKChPRJ7E7gun2Q4MjnSki",
  "key18": "4pD1iJdxAgN3na5YJ5UpLhnqm1vNecRpBUcsRHo7qGV1mscwxzMxae68okNuPZAGB1ubNA8srupccciRnG9r53uM",
  "key19": "VSePR9SYD7H9kRefefqZjdCayJBexAyJmPLBicaReNMifYUcvbfSRoc6Vw2ZMFVc7ik2cSE3geQX7Fp7migDEWf",
  "key20": "628CkwBCmzQhU9uJfv8bDiJVSNM88CYjD8ffYhaq3bLpoUQvYf29wT37X3R96SGaLVufqvpkjntwAGLmcZopatHN",
  "key21": "4KvKMCwrrQ7g9TqUuxpxuske8V69u4vjGhExEz1oAEpCr4KrtCof1heZLbD8nKkzuSFpejy3QsEvM2sAp8CVQpfE",
  "key22": "9BkVPvYKT91hbZGPaCWkWr42DYHWiS6xUhRkgZ2wDLbP5U5cAHCWUUkWharGTidMoyP7gBZrP6a6T9nEdUuq2qk",
  "key23": "2xw7C8wEA5vtHhutkPZbQNMDi3Qw5QyZrdreTp51j6rYq2ADBiVn1mNGYzk8PpRksiKbuG2cWP3CSCZuVhCSyyFi",
  "key24": "38DU58qKF8Qa1vTh9gAncc4VeJ7qaLSjyZPL5iaWeJiwF2w9sCbAGqrVjRbARuVgc5hs4YYuvBgY3NWmQ5NDk4Mk",
  "key25": "5mEdPKaZP8X1B9uH2efhAhPoK2hLkC5n8kjWYpGrNWx2zDqVUxaSLuhGVpYyu7J4VuyhSRu79KL9GR2jUCjYZjwU",
  "key26": "4Ge95QQqH4mSQaLhsJu2KNjakijWWUP2ygnegfyXG1fgG5SYtGsS3MVT4XmLxt6mXpgA9nnYub2sDydXFKCkg7oE",
  "key27": "31FcZNP9tosPf34SRnB3WLGLw6GeWAabP9DCJziG4Bmgua87YzjNX8gugkLo3LF74v9w3GC5zJ4acgV1VheZLsyn",
  "key28": "4m26H5VaEXxkxHXvSPNHSCUk1R8a1jUyXExgsVYK95FfKcVpghgNyK9DyBfZtDic8MP8v5ARrPEfbgGTuRFk6sme",
  "key29": "2Jmge8sPQz2x932baVE7CmX7ZEHuY1gCaQYGhhp14QFHQWZtdPYRyZBoWdFAtP1FGgHFzuVaNreDK9cKaSqPXMfQ",
  "key30": "5LT6KZK5Fk5yDUq7HQ2cj3LqWo5AYDw1gRUF5eCLSveMYvcNxjabXyyMH47ETw1JtKGCsFBYwbBFxWbUsTwftUW3",
  "key31": "WipReY6GecSZ1kcxga7UPFj4VKY1bVwXCKbPe1sNo1Zkwp1mvMWzRyXwpjLx6traJVhB8JRa1uhMPUDz4NreuRi",
  "key32": "UuEFe6pxnHZP4VXhNHfwomeovGHaSbiGScEFQm6yQh1GzdUu7gCAXNL1i9Nm1kE8WdKbnxWdyHJVK8AmUnYxtUA",
  "key33": "5WrCkJ1VTN7BC1QYnPr2ygM1Y9rYZ8hyrPJKNGPEc2xUiidHsMJ9VbgfTgWVJyhci7pcH2nHfjUr3zcqybo88aza",
  "key34": "2Ep9YiPJZpFP15Zc8EcRyiRthJ7mmhHkgSMhrXAwdcpqxeyYYKQyos7mKkRdbhF3VNSwVsJ7mZHYvv8R8m4q75JT",
  "key35": "3vQkjxxcsWCn6r1xLigVApuCiqF7MqS8DTcaEBSYfiMmbQHePL4jozxAZ4vL6K8AHPPcBJB7RFXx8V1yBavpY58P",
  "key36": "3S7UXanMPMwNxDUphjKZquFMoyF2a6noJPnEgtNiKBgc6vmHC8Mv2ztqxAdhfcBZ2gzieBaXwbsmEU1oMPtXTasv",
  "key37": "5m6d7P6Ve9wyvw32kqL8xtSm7AM3WFBhuBNS9UYbzuZPPf9keCFY3ngQMQS5hQwbMbhpfmPk8b7cLDWoQXEapj5",
  "key38": "41mtQaPSSKG6uSnaJkDsEgtF8PyBMJipjx9aLuRMi4zrvwRV3qqQb6uDKEgTx3adZ7crPqMp8CfLgKscG87UNLzS",
  "key39": "3bpreaCMpesw8GsgL9DcYb3oDKjfPsXaKDWuJnn8vraDg1q2WqbbUdYnq7nHpvnbCmfXFdcCnBWyq7mD7yjjECYX",
  "key40": "23buJffdyuZVpJn5RbfPJ5TppdzV831FqpXwYw3pSJ59Ki6k1ehdjjBf173fycfvU4uBng37n4yeHgLzZY16uXCY",
  "key41": "3ocXqhjEowq1HDFxPE1NWD3KnCs9LZwy5ns7FJN5Mzgu43MBkgcyT7gYdnwK7PC6WXMa6vHG4ewubiFb8SzLVnQP"
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
