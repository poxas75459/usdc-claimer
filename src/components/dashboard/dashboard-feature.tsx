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
    "RAD4emRHJEskAGehocCsJgXSuMy9E8spHRLW8vYTjHQaTpqeGhEzCrsZ8t9pHLfPxMjRNS7d5yWJbuj7iYGRLZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bQnKaNs6ndRFkHzL3bi2XjCwa9VhFZus8j5gLrFY6ARJse3zubnZMEwQnWfpLcMrSWNDtYHDmuumZ92y752AKS",
  "key1": "TcpmCYzZxmFko9qtCb7c8QNGVEMgRaJ3foHZSAyAQq2SQEuicYRtooTmM2gMNG72mqZijAHdj723Y8iCUqGu9a5",
  "key2": "2wj3zjBgLwnMwSdYtYc8Xc8498fyiAzNM3xuuvPW7vng53tufPHqY6pXHKzpTugFdmwqGvxciM4pGTSV71ZkWkP5",
  "key3": "3JFuYHEgmotTWv58roCAXXny1JAJ3rdYdin85PfnNWLkT4DMYyCu6Q93rvuWLfv7A55ZQD9oX7caQwEFFiZCxJUV",
  "key4": "2LgKs341zyaSAcPqNsPLskQBrJtjDJaHmNQDPXcRcrhyCBDwnxKjVP6Ve759qw4bJMqqNiRkReazBmQyHFeDDhn8",
  "key5": "4nzBsb2TwGZebxUEGoh5adnNRypih51in2YLxLqTfJUhVefkPu3jgE4V34KJx7RPn4xuKrTePdMorhaNyUyTUxGe",
  "key6": "3PpXNRVrXZKzAZrvgLx2h1n9ZW6re2bYVoZqNnMgV5Z3kpBxes9axkUaDxmWXsXfk1rdLpnTBvGk12YkEjx5ETXX",
  "key7": "5KJphKMqPABAmBs5vWRfrXFLAAJpVJ7VsnsJ7ThBcpCyHcUW6tFXe5de7J8F3QmgMjfAvVRS2GDVG9ie1U1HuQMQ",
  "key8": "23dA2tzwWmE6y78TwzFx5oPmhEVHGJuKhzb2upunWzCB5vEGvuFZ7yJPuqN2oGQHrGGfRZTWrKtNZLQfgNpKQm57",
  "key9": "ZibuTagPpAJoAkaE6wqpD17NAnDBFPV5rqtyavUasnjswnhKVHrDtAKBhXhgursKRKdqbQBXsuLJWigVHjt9jyp",
  "key10": "5w9q5YjkGBMm14k1CY19Z6VbVFoT8HzRY22u4oWX8vESLYnmSj1zPGbZGAr9yxxqMMVFqF97tz3J7gHGPP9UA1ts",
  "key11": "5WoZx1nJPi1cbF98VvXp8yQaWfaPmGnMitAR6PWbfZvUigZyW18RekVT7yiqYcPm6KzzJj7GmQsj2WaQMwF9QMTX",
  "key12": "5zzzCnzFks3ajx1keLuLybw6oddEHi2jVZFUFXNxstjSduGbVo9HkSiVKxjtRLQuUTK3c6B3aPqGx8iesopXFY6L",
  "key13": "4QV3QBguhU4Bch4zsXfrETLigqwNc9ohrWXhahjADvAuDLQaRGYU4HFSsUcUxd7mix9E54Kxt92TZ7tRbtA6pVTT",
  "key14": "5NPELDFunGVwuNhzipYDwTFb5Ns5obCLdLxDXRrfr8DvjYFhGtzUjZV1W52jsDzfL8Tpu3V2tcPAhN7NVp4z5AGd",
  "key15": "3phJTh9zr6SKnJzoJoWCpEa5uexmTY3PJeJdWAFSNLgMyiYqj17dDJoZ1QvELwgvWjfeabVSx4Mw4EGHwnxQarAq",
  "key16": "4nemV2iTWZhA3ZmqTfgn8YnN4cc9HgC3fQE8mgSLoCWRiWbGXMVYUXUQGeAYJnQLcHZfMMxCHV6o5APB73tgo3gQ",
  "key17": "3ewgHSFCHg7H2JhvXnvmLvEtT8RN6GsFZeaJMjr1qyNUdQQ7ufZ6KtyQXGMGZc4qADHJBESAu1jsWxdRBsYTH7Nt",
  "key18": "5zSQTWQZwAhJgQtbCQUCXHR5kFiVKDK1axJUu9XatBgPb3uhXd2HhRwtYUf4gGbVhCbVsBnLtNNCQ26p8dMtwB4k",
  "key19": "P1Vuxc8JHTAJ3pn1h5KWraVfXtHsaJQ2YSNJmETkoHb9rw4LcR73XyZZUs241i8moPDYnq3M3XW4biwyaq82JEg",
  "key20": "dfJYxDH7A5Szi74oayvbXfazEojWaR1mVRrQa5s7L3yRgwxKpGt4Yso5StNNnikyB7k7Pcesmz2QiqaFhXDjqEi",
  "key21": "5Q13EEcTwxN6U5NCWWjYKJf9XTTC5hQn4dk6Q1ALLgXVme3msM9UXBHM7Pp2VnbRuRyvPhswizFdns477rHt2fmL",
  "key22": "4X2gdMDJtBVhgkY2atv6q6vR9qsif3exCaLXak8KpW4JLp6S1EZNJHSYp1Tzc5ZrCGWb1i2ac4RZi1jsnhRaRb8g",
  "key23": "4bYeh8GZd7rz4Tzw3DjdsBqpmc3LNgSqcAcH9BzcLzUJeR4BjpsknvqR7GjQXNmVH6qABuCi2ZcWWVTkLVfdaaLj",
  "key24": "3znte99VYWBpMvKmRYQYkzW4nPd73SKigik7yX84MtNMMA9ZwhXGZUp1yNFS26o7G1YXTdBgfWvo2PVEoqtKs8G8",
  "key25": "4kNseWBJU4CVNtR1sZXG8bpNEyTg5PDxnZy9M6tYJXPE8SUULJJp9ooeGNESdTfysqV4pQhydnWNesFQgVjjkbPK",
  "key26": "5hjFvHAMd4bD5Btes8E7gPbShXJATeENKf7sjvhFAWHigDStUe7aXFkRMBE1eZAPe15Jc81W1bXUBV3ZaoYWMiiZ",
  "key27": "5k6JFkWvY9iyUfW8vQ25sx5jMCZiHH9fYuhrTjmARoxqjfdn1AyQN7nknohfkXPso9Jxq4K2adcxob1mtdHZ1Xq7",
  "key28": "5z8FbfeyJakUPuw8Lv9PkXufBPeuToBePK4FcJb1wUB3Rz3wPeG5dGS89kjsTdHSdjys5BRN3ZfJjmMpjTSxaqT8"
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
