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
    "4R4NZdwtCZbo1gpB2p7SWtCfQLFCrjCeQBtYPbFY6xnQkWbxX7GZZnVKe9Utpm3Z6SXFoEV33JaGzM3sva4pPNJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxFn9FMGXXJt9HThi6Gk94SNy6JsZM12vM3Yy6zrZrsDZNuSCm41GZffiMjGFZKnxaLD7sronKcqkSBumfKmRmd",
  "key1": "3zeWw24Wn6Esvf8qMQGpypfYeCx6kAY7aFVZPaWfEeFmhzixj8HBXZdSDZd1GpTmY8otHsJt6UsberT635Tpvcf6",
  "key2": "4JuecfPNsAdRKpvCepHiLZCVnwCdDJ8hATTuvxZPkZ4TaycKL8jumkVqyj4jti4trN1FRbehLKP1tUhZ1QqsCxkF",
  "key3": "4nd529VqD74H6fGnk6v99FBPe5pqawgnVyQe2C7rwqCqRF3R1eYdXaHYZ9vQGB2jgT9myxoGGDdFhYBL4rsMQobS",
  "key4": "556g48mHKETTRwTgh1kFkYJWKUcS93WFcDzA2VGHQmKESRvC8FAstBJjzM44zRErFZtgqmVSsGZxVAXbUsHJ6oGw",
  "key5": "4C2TuEpyCAtyR1VhUAyF2spRqjTg3WVwgNDhUUPGCkax1CwSaPHMiVkQJ57FDkY5RAANkEjnRC1z3Bki64Fumq19",
  "key6": "5c2eSAVAvfxcXP4kXmtNo38rT4x5LSLLC2KvA2tFw7yL2KCS3f3i4j6pGwwgrqQPTZKmjHaacWSMuvCpkkbZfnsc",
  "key7": "3Du8Ktw3kcWRoDTaoTvyfgFpZJ4zynZwa7vrJTJ7mmwn5vYR2ueTWjBF4qTkY25ZTeQJYfMpLM44dT7K6WDcR3Ln",
  "key8": "5ckKj7AiSrCQQ5YBopMHnr3Zcp1FAhV6jmQ5ofw2iJFSemvi5asqf6Pmqcm6bzpP7ZuYT7dmCZNiUP3HcnsypQwh",
  "key9": "4BeTbyTyApui7EgoVRyDqtGiryDNwA6nHvEMMahCnKq34BB8zC1D2cnMfjYJEK7MrNszJAn9yfvHMCfKFfL9NZbU",
  "key10": "3X6Q9CYjwmdkH6dN5fipBrKc2yucQRvvP1vhGwLta9wdHtpcDV3LQUr1WXKxRGRNNCya8T4KqkaC7AL38J6v4hVi",
  "key11": "3BXFqCA4Cv1vkohLVTeP7phHbSHVup3C6TZTmoZDEVJi2kFHfkuBBwqLuVaQb1q3tLkZKTYJpRKLm2ps3tGSxMDK",
  "key12": "2wfy9SgvA8n6A6jL78DG9ENcgouvSHf4ZwHwxXm2LQSPctYw8J6AEDcyTFnkbU9fKogJgxhhB6AJTicMf1RewYYp",
  "key13": "3SmwS6sHf7FihxY9qmsNJRZBx86yW6pfxqrAQkbsa7VqFGnXb3iPFTaaK3Z44hg8AcYtdmMSaj87Us3SYyhoV9t1",
  "key14": "2HWjpR5Ay4EktUysc8waGZ9mGqSu1hLkbEh2e5eY48GUcW2zcSFXde1wi3d4DxiakjhF2kQuUJRTm2wPi2yzEXXJ",
  "key15": "47d8EEUfq8rHeLEJuQqMMa2Xd3xVUEUQkaNsv7kGQdnWzwXEvpzNfR9JpR2jwqCCsLMPRWQzdwUiW2UqqfQwzAtd",
  "key16": "2FsPfrTAEm6vLVsf4nRodpbXBKXQFNpuMfEh7VWxYSfABhTSSbN4YvDUtrspb5crmEets1zqd8Mk2i7Sh9oNr8oZ",
  "key17": "3SFw74Ao8n7Jy36ge6uaBGAwW6zwXCqeqMyGq7ygz4ndbQKhqtssqrs99dWgsnWRS8J4L5fAZJ2JrYqsYkLijAWf",
  "key18": "3virFfk5uZ8C8M9a8MF3KoY8e4vsEMZGZteNoq1CBadfC5gXicAR9pZ7cDo9y8v6pJ69CDjDcT5tK6pYtSQgofHZ",
  "key19": "2VUtn7yq2Mdxr2ThQP6LRyFVQHH2AVxm3bHzdvUbWNmtXza1j4Z7qbLyFSZowAeWAfXrWKEgwHAgscFeQFDeNh8g",
  "key20": "3FD6vn5qR4B8LsKkkhqa8enGYi2cFgaf9WuXDQqXhwmAeQVefNsQsFsjngiEL5puLWqSPriZ69aqEWVgAWHoFvM4",
  "key21": "3UvqFeVyrm5ZpxsMoNbBoMPpGnzkTdKb3pHjEoaqeaj2PUAUBYioWMF1N2bEA4QDGG4ifRTc4PL5hoAuovNuHmcF",
  "key22": "241wbq3PHwnB2B9WSGPxyMrtrxhTmEwpudxnUf1QGX9w52kWhkwaEDRNxwNL3VgzvhBXmJbGnYuFSMNGm7wjWpzN",
  "key23": "4AzusUuSL4rD5EAzyFyyYttbtdPctMXw46QP11bkhCiwovtkK3mGf6DK9WuQeXaddH1DZFCEUmiYCLty8vgzyh8b",
  "key24": "39m3X1PHveXdpDqf7dgaf3jMcak4kLVmuj2619GnthBHFXBKtCDPzKcPDttJFaeF71TL8ZWTfPd3s1zCRNdWdiCx",
  "key25": "58B2SBitPuspErmhNV2ZJYAMnUidHtSYagWzYKzwDbZBhVMSd7jjPpWKUHbXtYopMHbLqCDm7qFW5bvo9BCmzMCz",
  "key26": "XvnmGvWWRygPentv1N8WcKuSUzrzpWEfu4wpicDxXmWEx2H54apGVVXKPY954zV3HKQYpBdT4RVfs2VrLEdMsYS",
  "key27": "5JcVo4WXLPspsCV19B3VZGWcaF4ABXHrWDxPPp7ETDzBZ2zXPbGaP55S8fBoM7iMvhdreRTZZ5wFReFdqRS3bTxT",
  "key28": "61NE3qbYvSEhKPx7tkRdxKjtiWMNf13PmzZW6VL3Ucojjp5xg1zZW82K64cYuAYyfKtSjoYVdgkckFsR5AaQ4E6H",
  "key29": "34SGTgNr4y5MJ7LhiJiVhbDb6GQ5UToW6ejBB6sWsDFVGyK1orxvGmnaqLmiXCWbZCefSEiF8dN1rNSrrdwEyVe9",
  "key30": "3qaz4uyU4CHpE3CstFLjhZcVMLmfHHdEHHRoddS3VYvwURGCcWXQVJ5hhDv75teQgGdMvi4sMaq4sMYqY8sGQxkg",
  "key31": "3PG6otiMcdBmxbKTVExN9iyS7bNCwb41fNN1vmHXAtg3QkjxUCiphCFjKT85ZtrcXhi3CKz7E5vZKmoeLAgpYEH7",
  "key32": "65AcEe5aQQPuLLnhCuvCLqZJRTfUSe71LV8B9FeLD7UstiT7npzPEbheipYYKZsi1XQtbp5AHcYMJQKThfbNomSo",
  "key33": "5dz8wxMxvMSHtuzT4rqjUgdRBbL9Kst65kNHsfZcjNrfBRZBLSicAeQhCjgLfwuqCHcHcpYJLH4CieqXsAJUdDSU",
  "key34": "5Wfr7yVZ7hsqh4emtmnBAz5pbiuVDXQmYTx7kzaLXZixkhtsQT5UpgUsQ1cGBLTmufz8QQiJrHPRVVBe64YDfwX7",
  "key35": "2pys5CkgP5vd9KsCfP7h1ezXwtydpqWPVcxW8EYNXmBhGNrPbRxbSeeiXYJbbSgaRZPCouCF1hcDcHzLZhmL6wnc",
  "key36": "3CrJs7UaXa647HwHUHpxZK53CnQN54eF943J93n33wDV75gmHN2JCYmfjWjFKyczH3R6jaeXfshdeRkVd94nxecP",
  "key37": "4acaZ16HBZbUhkfbX4ioziLUNLucYa6jWq4ASwjrVLHP5kVJYA8HvzDKEFUyyGAs8wZCGmSxRMHceb8nvWw9YR3",
  "key38": "41cquvkWk82d8hPJSzhZJjNqnJvaMnkQQUzoGymt9k8xxrBkdduqFmMmGTtXrt3268sKAVuB5giDNjwa4UHEbuTW",
  "key39": "4gBtC7Q1D4Lm7QiK17kesYe8TzzsnzRGV2MQ9cirHPfZJXnWPAthFgGSbJuVe2QjB6LurwqLjRFraX9kovv6A2wv",
  "key40": "2TGgqKa1RdaAFBTvvXqGt38T2ie6ogLtw4QNobvc3ThULuZPXwi4a65MGWMABFZ8gdrReSNrTVihxECNpHy7Qq6f",
  "key41": "5g89aagzbqzkNDsZMbSR8y48Gqg1RcmR6Gea6vrH6WK5sEzxjK1ArAjv9cGNmxVv8JKSkaB7gpXtV9vDKtLEieuT",
  "key42": "37Es281KvAuLAuGJzQdx7N7igBRcQcUrRDGdb9FJ5srrZ5fM38zviy2ihf1VGBwTpF8m5dXo23uwnqPSsz33cARH",
  "key43": "4zfvJTtJwfmWfUgsCs21RnKyarPR5fThrALN6hnRiucZctmFEEeYsNC7RrV6Vu6YmrQqA5F9XdGHRornLPP9g7vY",
  "key44": "5Hug4nJygWnntzouSZyX5YGCo3vYZjrX5BWBDkdfHd7wbQ6mmwEdGJUh7Xn1pS99TRbZmdiZVHdUPepUduJv7aSt"
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
