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
    "2AuJNXa1jJBVT6moTqC43zmz2F3PGMMmHMSfWHQXVEV7GLP2bWhsrvrTg8tQNSvUvyccdxJ24fBQxCvUMD3RrJrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2eXSVAwNkvvQvJ5m61kPha9ssN2xVEy4USv8gMkpZjZgx1Y2GMykfHWVrWhbUS6zPMEPKzmLpMSgo9zQ5GwxJs",
  "key1": "3TYvvqX5NhCTPzMgZ5KZssvsr1fcn9p5qfQhvYakTYh3cBPx3XnSxNhYEcTzGNZF6A5nDSpRJaF8S1RjNDUnNAqT",
  "key2": "5tuxWZCAhL6BZ2KB28vnsiJRaTroQw34WA9DG11q1V3msF5WP7NeTZXKkqnLBaMRzXJXRaWqBkMNm5wQ8LSf5oQ1",
  "key3": "5cL54fNG5SQTYojzgQRqMnX1YYMHJCT6UdhJthMBKGFVHpMvGUGvLpuQQJbUjhU5zxE3gUSaC3RNtB8Wed4Nburm",
  "key4": "4XzSa23eiTsWza9C3DybWm4912SBW4biogMUrbr9AHMNrxcGt3S4YHq1Xw8dnHGLrogKqWYVrSQ4DBz9qRVsgzqD",
  "key5": "4z1fyJmmh4zCJDAXZBJLn3rRNELBiGd5akPyPq89YptM3VJffzXExi1W2UJjES2sXaApkb3UC8TH9Y4JjT19EJWm",
  "key6": "wKPkQmAHFHskRtJFAzsxVGZVBuqgd6q39imPSGBMxoebkNvA5FarcyCVmEKQFSN1sCnmCJr9QR2Rx1oZ4myLCMs",
  "key7": "gQKiofrgK6KFQdtgf8YSMTwE469zDTrxBKFBjkK9tfGwWY9qvswePp8yrm84XGJF43qKQSBBnrStsMkAWk5uKb1",
  "key8": "cJhXWWWzHZdnkta4DxDfGSQLyNzWJ5kDBj9m8aqCoVqmaFkVJUYyCCe9UkdntVW6Tf8TqvWLLacdfBnamQfoMaL",
  "key9": "5D5TZDbktQVbRLFiNjCAvMjGeAbEBbptdxDBNE6RCLunae4HvNBbDj46HAr5FyUkRRVKeZ3j62BoGg16N7WfcMMd",
  "key10": "a3ponthedFB8wSWETUCJxC91ofyqZpjEqNAGiVpridRNaueMVtMGP1Ea1KqikHLhfiPQm7TwkiVFgamkt9jshVh",
  "key11": "5CQw6i1JqA7oMDyNTWnLMPgrR6t3Uq76eA9DSuUtbcyExJQB7C6MwhJcy4iKBCCp2dgdJYND9UeDBVYinZGX3q2c",
  "key12": "4QpVZk7eDkxKArqun72WxigGBLt6r6jYtvoEeJxoDShHbYrRejc7BGCgGKy8HRjgoPWgfEx5Lif5MQEfniSbCrSq",
  "key13": "JkyGdwymDy2DJNJukmMFPPDag8rv6q1EiG5GLHTbFKfb8xzgSLxFG1zqaKN7RN4oRLc79bnuo74zsDgqijK6dFH",
  "key14": "3VD87Sf5RTrXum9tmEH3oFKMeMZxgYhSo6i1yjEjGS2GFGAEd9G5GqSuXdFe5pvC36D7ze4nBjZBgRbw5YV6GYSP",
  "key15": "4jHdyAjvqQwjLq7XsZYn1RWQ6ErKaaNhWYVL81kMJ4cDtwfWRYyi4CyvGbsxKJ3PQ9uie3Gkc7muBafztkkWMhz1",
  "key16": "bQpQZXuVXWRJdgi3euAxit1o5Zv97maBQAcRTcrdmgyv9P6SRNHKTpYaYPV1RxMAxvGZRHPBaEUasXpury8YPLr",
  "key17": "5NUH2eyAUaHeKRj9VPFLx4iDV1pqdAjSpvwLiCA5y2hK6kWowEn5FnrNXZtYiHkPFvYjJVnh6KYM85HpBEjfdoHR",
  "key18": "4oGVtRsqbEiyr7vFhsiYkCU2Mj5sjB2vr8xFLW5nxoPSqWWykLcnkFNdyV9pRUSgjxJS1LmX5A1CKVnNsgyWzUT5",
  "key19": "2UB6vQwnfpa5RcZwBcE4uN4rHeM7QQcoUxtzC26qtcn7CWqwEQSDozRwZUr5Ev3BEEcxFvJD5Qa9h3GroAdQsjhG",
  "key20": "3Mz7aWX4qQ9PW5gnChc9jYr5AZwgymKsRvZRqmN9ipUgXmtdt3S8HsBVU7anenGpJkwksE2FcjsJUPTdfieUjWzm",
  "key21": "55j7wpSaPcx7b9iUzhGHh9xThoURbkdRhhVjgeYfnpGKjFXWaFcJmYrocEsPHSf8evXFQDcRQdUWq19tJzjbfE9c",
  "key22": "3P7KsLkar3ktXzAXw8WEj7uZ2BisTfHUF8UYokhPfsZ9XKobSj4Zza4Qryn8bHmmEJEmgm3kdiy2FZ8DpFreKZke",
  "key23": "4Pq7gCZK2NJKY1yH1ae1KYJJ9EM4Eqqy3gwCi89cKFfCY8qqsBJuFLpznKsPLgRzT4yBGnk4RpFzZmG3tdPYYnqo",
  "key24": "3BBgxC6F2C7ny7PgEoc7PcrYtxiac7mf8qgDXWP2hdwhg23k5U8VZEqUmzQ18hUWEXstCHS4vJaD2bSAZt5hveEc",
  "key25": "5HB2ZEWqHZkK7M3CmJs8CW8BdKYox121p1M26pnrQC5DLaRNAK1cWtnawPjMrzTjRGZJXVMBc9Yt4gwxNATDc5eJ",
  "key26": "5u5Ab1QUUREGsyj7dkjidhXnFayq5FxNccUMD21XWGSRGptfFnypVHpauAPbjfBjwu8KnEozEi1eDKJgtiG4dhaK",
  "key27": "3Bpk1eoGs8qwG6VMLvvtGgvETAtmpTGy8qJybWyQYUk9L9HsF6TksSf1WpzCMjymYnhnFc3TZBP9MDKsBke4Mgmj",
  "key28": "9UXfpGeW6sFRg4vqH6DMfAmYhh4bZcXh9oiephT27pqN3nhGyV8vpxsyR6dnGaUWDuryUhBsVqaRXH7ApjCZ74U",
  "key29": "5JtyasNUD5ACT9M4e7Lb3Khewgs8jgfn26xwi7cxbhSL7qAQV6YJBz1uh2kfhW92SUNZo8b8ykCsn6cUTBCpSm28",
  "key30": "ybA9UVEQL9Gk3BMvrtxufqVjN1KHGCvLzeA9HHqsAV9VXRYWHqz7Cs6zcq5GCvs9WZjD95nyAefW9j1XhhBJgfr",
  "key31": "6tN6tGdE1Vhps31i2Fq5AzyFvVUxZy1oAQ9K7w5KYtM26zKj21MUJuNhWF6TUezp2cbaETPW9zh2cw6PGHq1FBz",
  "key32": "5sXSLycSXbvs4JW4U3h72RonSpNvS3YufTwJi6S8cZUEe3KuLNAmzYiVfu8RvssTZWt5GhxbLKUxjbf94f3iFuPn",
  "key33": "3mmS95Si6H9qa4Mei1tfR5X2QQgr1bcnwQvbj4uoNPWeJt5CZURyvh5WjdgnFWuf8sLi5YZkfnio36Uo7xtPk1gd",
  "key34": "5u9H7V4ZztwFQj6xEcgAy8hteh8wpdaA5WCu1rVP41UJdvmyB8aD1p8CtNmRE5LFU5GLyUmvEuBFrEN24tjQpgvc",
  "key35": "3tjTUgi9cpEriWRoZWUjchEyi8ViJW8j4Eizz8UgmqJardWrTA2WRLokETSHXSnU7cNofQUo7BLyYJak265vJw9d"
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
