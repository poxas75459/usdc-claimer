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
    "3RNRha1mRK4WurjaEzF65naa9xQJcT8A8XCQKjUyNVA3qV7KhTdq3pK7wo6sDpwHSt5GYMcprdtZMPWyr94Vm9uN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ojWwAVpuJj5QCVg2SqEqtS2HkXkbN5bKNKBULcif1w5Udyh4mbQyxTTGb94meLgs6TrDdqCbe7HGDxXsrNGGrRt",
  "key1": "QVXsWuq9iDGduTCMbLrjhHaxLWjwSJYt2WUR2hBQsVcXf3H2YYyx9DQQxCa7TUb7yCT67KLEzTM9iCvyUsLCZsm",
  "key2": "2kdcE2eKc2Q6UNKcWcovaNJHe1eLdGtyfd2tLUPv6KTDRhRTo6Y3GrPf8177DWUEHVrLmB2tVfDmkD4ptshV9JdQ",
  "key3": "4wodrC7UaT3T4RnVeS242Ny8pEaPimQRjSJxUQ8iHKPmhJDhoa8D9iT7CJvbWs8xWP6j3PbE2kRWCAWXvwouYsbS",
  "key4": "5xjEnrGJtVd3Q9AEx1R17CXd5ZgvAZjo5cWejVcLLFeo4WTxsKit43n1QaMsrndLu92Ei9TZTndzhnuT9ferBuXJ",
  "key5": "mtEUtqzWFs3Xkg21N2HysPttJFtbELp4FA5VGXhEH6dyxW1dNin9GvnYP5KBYUKVSnzeXESY4VhmHYt8jqJdW96",
  "key6": "4mUgrBvVDmebMBAJhdgUXbRhWLfcTVgDu5T4VfXcPGiyR2YjbxXrvz28sj7qBZLhjdgFzmTYuotLNmpYxLkzWkZ6",
  "key7": "4L6YfatfvqDbPCZR7DN1epqFBBWs9tRc4xhf8icoamAmgiveHYbmfjm6xp67saxLAhn9RJcMRL8c6K2tcssCLijE",
  "key8": "ShS5YNQpYsWZRSawxFSJiTEwdgvWrFZZSpHAUNVpTFXLcnYFEkw9q1YVmngcU5PxyzoGTQHVzKr5W5KphoYqpx6",
  "key9": "4qgL4PREvYZzEqQY7ECNQJWBXhTF5vb6QEPpMAqnEwgRW6s9v6rKgwaiiaiYF5DHrhsKmYqSqNp89BxioK2jwLVS",
  "key10": "2fjneaRRqEaXtPA2MPuzjanfDBkRJ13pYbNfnNCgH19AXGopbKZn8XDTUpW27j8tKM6TcLoNcmsrGsvfkHre4Tgc",
  "key11": "4HTDLanB8pDqpEnnVa156q1G7jVbxgWP6LcUDTJ2SkF7P4Gq9KJ1Vz52s9VpNz47TFzTHcLYEwv7rYXEcpjLrJ44",
  "key12": "41sAVEizEN1NbhR55sqAM56vADt5CkcTvUapTAUsAz8zVqgRU8m8uMibuXnBXnXpDHKFBHWYcHL5qXzBKkEwrRPY",
  "key13": "3abCMV8cd2RwMLqfBwUoFD9LWTHoZQKUt6gqJf7YQAVWid237gJiiV7Kv6JPM597qUSTzNdWM4PgzC65pRp2auBy",
  "key14": "31qqnATWCMgY2tWyLkFpLhmTEjdizjZXLfL3JQadzkwAg9t7D5sGZQkRsSVmVBGzdfpkR3TFR6DUbtxvA3oM2UsP",
  "key15": "4WcZRyFXn6FsdPaihocF26spWoeXXXKE5Affh7nmrVWyUMytRAwpdVkuZFeX5zpjkKzsaa2tsrfZMrpw6vY5c5dB",
  "key16": "5KDxzUqqbUbHdZpJEnhhQoG9U2cwbnLH6chQMfueNGpWaxzq6AN73W5EU9ZKh3QQA67tDMLsu5n3KovUZ7bXRVaV",
  "key17": "52ZaLMfSNWY9g5hmSwCBSRYWMrU7poWaPysa4c6xCV9sZH212794PraUgvqymDBcwkihrEWc9dq246k6FnnhNLVo",
  "key18": "5Z3Te9hsxRYt1uUsRgyjFqb6wvDF7PgMhoWxukoYTEnhSw4fMSzaCxTjCs3Skev4Cfa7omz6JSeEBkp2HH3knyLM",
  "key19": "3CPgTt8YHwQ5YYBVEGH4uF83nVDYM72fdcUGh7YWYDEUyzY5e9pvPBx25ABNM9W4oFH97rgCu4i7WgUSPAJk8poR",
  "key20": "2awTwN2mFExT7G8o2gKiBVvLNV6GxrCWLxXg3u1R6WgnLhkEyHE6nxf8h8eZAT3JP9a3nD3JDNppVMiYpgz3wp2N",
  "key21": "26uXn4mDMDthY4jAZv1deGVbPeNuWofPkrPCurvaWgs7BCbUKv24xHqH1Czx4PEKxUMPy1etfSNWsPFAJc2rY9Tt",
  "key22": "4jF59QaNjWHkWWCQb7FGwgfkbLwAriuJbpZvTffJZJrjf1AVvuhNVG9AxvsvD9DgKsJVUWdhDTo96o6KiYbgVUXV",
  "key23": "2kRSM5qeXUGuk5pqFfLQYbuJKTBaZ4Gqsz78pGBX4X8wSAVY1gRfXHgCqW3yQmrsEjTs2AxNAyKWBKxWQW6SYpd3",
  "key24": "3wZWZfPHd2xhBK8s9Qng3TJyCau1NhT8DBLuqzzVC8skQGcKdFDuq2nMNwbEuwiLeJD4TxPUqwdxiTTJFNqEvF7U",
  "key25": "3sQjpJCy3nSnvVeMhbvkWqqdkTb5hQWMgSFF4ksAZSSnqC6Gwx1nqkGdQGqL4i7sLVYXfJbMHjfsym3K3pH5sZeg",
  "key26": "3YAyCtm2HrxjU6aA8iCeWnLp8nJ8ikDetkWCJk4qfHrL3rEu1CwGJEGVWEkhjxotuVfMm1ug7DnDqMHWFnV27DtV",
  "key27": "2anUvK66FUanPLgTYCcVBRPdJ5dUDzduGnRqCX2JAomNy2VDtfDheccHbcnfXdfzu6f3KoVWzLYTTRFKvUF4rtZd",
  "key28": "ULUCgAAqfyPaTANoAi8KextzgzGYsTkPVwdA8yUdP2t9in5rwG9mjFRZECzQBqF3fcvxKUYz5VamRnoK4oD1iLP",
  "key29": "4tWnVsRMk6D7cGsBDYGdGFwWJeDpERjG3LaCrqEHfksFhjHBcEt2LMpPme4PUx2fcUVsgJR4r2qzEWFvYf3cpHHk",
  "key30": "2QToaJLeTvWjFN4JBQaW8PLCwHUfG8jAgxPTMTXs5qeA76Va8Ga7Lb12sLM2GvZercrTtTHzwtLEqRthg2pZCNXw",
  "key31": "3bCMHnz9FzzjqrvEjTdZZbVoswu5xNcBBCrsJr9uNHt4BZJK6KgbVjBkTbbZKyoymKhuwp4zxMA1hq6bYmUaqtYw",
  "key32": "5RPAKsWGkPxSDYQkM9cYAtaHFJjqu5UVUxVBvmTt9BgevjWgkrp34EJsw9bmvBLzUDdkuFaxstdBbxTKGJrDrZRf",
  "key33": "4cQr1UKSkX7KzhpAqn7SLzQxBZkE1zYwuz9eU9oGpjFgEtXZPXZL3gwf6LKac1XATcTUS9RfXf2SbT7dRi246Wqj",
  "key34": "4R5MiQQ5cbYiXyqt7TgrJugkyqY5ugc8UufwMZpJzYN3bX7WjSsWf5GmsGTpycMqFZFxFCLxdZNGnyUzJHb7ALkj",
  "key35": "3cng7uEDS13oSYgwNpZfqP5xgBkNMaNVG4J77pYWyoq7jZ35cL8Jox3bZCFH2rmkLpwLkGzaz7ZYSWeXC9HM7gTo",
  "key36": "4BxtWmT7qR3azxUENT7fXz3KropMqnuJhbwcCBpztXnYwuEdNEga6BxFSWgS4RhtcCsHeFfnjAmajrgxfpgx1Rsg",
  "key37": "3ddGr74uamhJQZuizdHgkxbZPHjKGZUp2tojGdVV2EAG1zsnSLRWRBevo6ekHyMvtTp8HQudgy9cQsWNJt1ccJfE",
  "key38": "67aqUBUcqXYyADpyEusRK7e4Sce3DZWJqjzU96oct6uvNbNVcGzt7C2LbjHkgKL1BvVfca2SHZToqCbkMDtYGU1k",
  "key39": "xxWN6ZNZoDsqBXvgs2Y5ow5TNCZoszjG96cfuU3S7tFAMUfZrT5obNq2KpMJxJZzLuri6pNuzqhoZR7GuExW3gE",
  "key40": "CsnSub3Dwxyciz2EiAJJDmaukohAG5zpuqDnzyLLViMUS8kTnLof1HpyE3F3c1Js7nZEWh2B3BpFWuMxvU9eVgg",
  "key41": "2xquX6rT99PgHV4k1VcEhdo5CFSdYMjhzH5tBubxYSunV6QbHNDKHpWya1C9zKqon3zdmHbWJS6XVEBZf48Bb3oW",
  "key42": "46RREGXx3HRBRUuTSAaGRR6siaXobVMHJvrnGWgacFqMwfq4QugYaVC24esQy9j9KarRBokFksbCnRjLKYjP6CU8",
  "key43": "5bDVmTWvrPrgi8KYdgKikyN6MPAx2hC1BRRt3uwxwVJmgWQBqh8fJ5t2WEpM61fnaVgcWztUuAd6FP7CZDtAS2FT"
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
