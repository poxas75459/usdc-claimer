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
    "UsuhgcM8w8Tiy7FDxU7m1QJYyGyHcuYhNUVcS5EqVUjXvCPvvjFdjVcYXbADneJGJrK5ppNvZGrPfCQ7Z53ctQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLgwYMG6xPfzfTHpgc74gfMwiDt1R9Yk3Ebf1z8k4C49TyYQeJU8nXDVjqYe6CtDJq7i3FWi1PF35BTfzhvZR7o",
  "key1": "3YDfaTJhwc4akgg4rdQj8968kaP73Q1oaAU7jGMrtQxxw1PWiHy3yXjhezVR9ZuBWaGpnAwN58iGVMFdNyzfDnFM",
  "key2": "5XGNFM2EAPkjtSDRDthaYMGuuAgjiUvVhEqiQHzPnMQtYHZsAvLRMrX5rFkSxdrvHFirgaTeXHacTAuaax933hMK",
  "key3": "3MDNmqigQWaLxCVPExehz2VJNaoMQ8kGkfdaoq4KRebW92S52LgBpRgEAqiF54WJwg2nqkaQFjuXjtna6uPoQfbz",
  "key4": "53MAcmdPsZFbj12bjNyq7bXLgq4wJiN8NdZ7edQdebaLJEQACf77ZYjnzasAuavCnk7vrfUK5u1iiiy93nKMnHW6",
  "key5": "5ExqSSPR8yaZUtb8XRMx8FTPQtCS2DTLwXbCGKB7Ar8LkiefiJJkKzc6ntwRxsgVhVnSihK736YwSkh4UgViQtJQ",
  "key6": "oqs3wL7FMCQHDrihJgHaaGR1hMBWeRoYM37T7qGJn3m4SmhZEtuDBnpTeANf6zpn6CijWYHkvngNsPhUyyKs26K",
  "key7": "3atmCCUvMALfFqkeCPPZprRJRdgFLhd6QUPfbQreRXRmsRVmcoQNmp9M16Mc4sGUC5tkMER7Rs3FJkapiqayRGtw",
  "key8": "2YK1vaDoctfq7dytB9fVxQkKs54iHEdAm1HJ3Pr9bMh7q6vyPDPbi8XCxLN6DS3X2JuxhyqXGKKWD28zwqBqsv6H",
  "key9": "kvrKmyKPxnViAevfJz7U9n1XneDANFshmnmBc1HF3Cv4iDyjYypVp3LPu6jXvrhx34oTVrxsLwRbYMNzRff6ywz",
  "key10": "75af6W5Q6HqEW6d5UXVXPYKhZtXE7oaXLbs6okJ8dfeKQDTMudcruHkvAhwsbtcVGVwGGAnAy1cgSeEXuA7x4aZ",
  "key11": "JbPRVcrdC8LHeKt27Ycg7RJdpBBEUBAManYMD2VkVdmZdeVtvXrhQyEtfiFHzop6UFH4PzoJiWGoRvoBgMoUGh9",
  "key12": "5cPB95gd5T995MQ75bFGhM84imPhPCwQyfkbZ9sCg3yL9DAz2YSKdeufkFCEMVaJRo4jmVZLag6H7C8ynUSTKc9J",
  "key13": "2mnshPTinfg373xFFU4NtYWq2vzPsRRoasH5z4ukSZgwtt7N7ewFcjqqPTUUXaQDfBGqxEpNqfRR3erF1dVkhyQX",
  "key14": "2hzy2iWVAwL34fGRwidgLZp3arpXAhWMftNdgqLQhUCU5E95rWJgPjFbyazZDFenoB9cH3JhZ9kwfSwGxyEiyG7K",
  "key15": "2ygH7FmS4tMccmkW9V3mHH3y2xAK8JnjtupdBsLcKSprbroEcRiisH8uFhVg4FAb6huij9aJ6Y2AJ6Q4QxHV5ND1",
  "key16": "5qNRQQ4KcQhmPtFW47JuxWmGtcVJDaag8J4aEuVZ5qAbgwQeufDnUdgwkAE4WdHzoyQ7YdHei5cnpxMjfWjwPoAA",
  "key17": "41GgGn1JNRpgCHbgibpTkcSnM3Uz6uUWiA7SJTG3v77ga58jTZEGRgaHjJRDFJD4m4BMLKcd8KrVA9mmsjnUrHz1",
  "key18": "4EHUoexFWTht7evMJMToAChUJ2412QtsNjm5KLgGjYia3JvZRqmfs8PPsZJQ4Upcf1VVYyxswxsGsTVqXhQnZgv9",
  "key19": "4cEdfhWwh1VMrgEAmXYzfm5tqT1uFifURNg23NaDkphGtBmrY4rUeN7v9JXvmQaYc92EXa71MDbZLR6gX1zgpKjw",
  "key20": "cYYDERePCP6AKPG6aX62WTqfbr3oFd1P7NhWWfWkfe1oX9qi8MQy3MCg4eyyipTAK9HVb9DAutNyCShseE8faJD",
  "key21": "5andQ4CDqQ5ADTEAPA8Hm2K4y5hp4RVGF8dVnGVFYZMXj8Tt4M1TSrGnQqmejKcjSX9V3m4g7C2cb63Ri467exAi",
  "key22": "4vzZLHW3XsxWKAzEQrVXYWkoeBP2FmZqJMwr6cSqS2B4mFqFPwvYue9uY4btNKV8RfUj7RcBhy9Bn9wP9oVVNed6",
  "key23": "2EZKEanjmPwkAtPbzdPTFEPM3BvLqYdF6cgAU5DRFfYu5P2UYyTUYCf7v9WQ4ny1HgW95XmGaDCzSQwDdWHvBoaf",
  "key24": "5ZwDCjgHqadivUYxdPGP5sRNtd64rZCbHZUqXFYJLjUp51Z7NJ7ApBNAhaVgZQBSJHS5Fekzv2o9hnTaJjQhtdMo",
  "key25": "5T4PQS5vpVdpZ9DSHzgAXfY31xFL1ahy9jSZ5xt7WpakbshTLzVsnHcvbRjCXv7jEVmdmG3j2SzrDgfA8Fvnbk1s",
  "key26": "5WP41o6Zg8B7yPebsvnLicK1Mk3Hbis1BXhhgsBsx1KW7avULDGv1kkExaFkcVarD7X7SHGMBVcgXmmJQULrUXVN",
  "key27": "5xjA6w6zJPWciSDSiaBAshYnVSqLMhCooMqNcwSzBH8Gg4LJe7V7FYUY3pXUoMbA8VygvcpHYh5WwEKVXnZGaxUj",
  "key28": "4tKwkhoRrbyVYbQB794r874pQPBQhMpCLfFG1vFugihVNesQhjLyL8CDdfoJDSgMg94sf9wp5WvFrDiremQ5X4Ai",
  "key29": "3NAvzdAsbkk4gytGy9rvE97Dt7NcGqzNL9PwnDMHZHESLD7uKBxeWt8GwXRRVkpqMkii8yHaoMQ2nViuaToamHWH",
  "key30": "4zWXqixVYqmpm6qBL6HJxCAcWNJxgWwWaWHcAuVSckByLpugY8EkQot7QL2RjDjKZUxYwpyN6XvU2Yp4TuctmNmk",
  "key31": "59FGsmE9kXiJ9j2cXCBt5cLJXq3cGfFqMaHRTpnNSwRFCPT3yjW99i3BQihEkV76RbK1aUhGtpk4nACx1Uh4KA3Y",
  "key32": "2rQ1PxYbP2iyy8teYwN3A9TrvLs1Tqp18jrLrDZb5S7b9b16tJjVvTwL9n86RLs7cWj3sdDoig9U74UECmjApJVR",
  "key33": "5PV5cdAS7gB4AZgE74G7jbFjRGHSgU7rEHUdLLwsGjEiLZdjgXg7Z5Fm68bBjabdDZnqA64EKVgGBFRDTmLAKx8k",
  "key34": "4skvrA5gVReuYTPJzh5PQuXPBoMJCCP88MzSa9c1sNrxbGmqcnF8DT8g4kWCiqk81JKKbbSKKGGmodvzJgDAZJXG",
  "key35": "3Y8WTs3KuF41VYPXZv86pidgm1C5hLRjbEC5TTBsrztxkPgHrAxA9jpQCqGsD2sQ1xmcL2Ez4J3hZzhcDX5j8RgC"
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
