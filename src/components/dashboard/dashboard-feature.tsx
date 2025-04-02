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
    "2NCZuqeyQtsxvUZxzpDs4z4bpw4r5R4WE5LE45QFYZVb72rCJmjxRzPbVu6TjEnBZgkTTvjSkGUbgRs138nvQ9mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZBnJc1TVQoskNM5UJqW88RNHpRgadW2x2k4aZF6zGt8pybu4HSSPFEgPJ6tKbHRPfDWDLZNLdLCTSuSWXcVGoj",
  "key1": "4D1yv73xAeCE4T5vRvMjUCYaJSqACgB4BSv45rukFv1xXgmuQ7iRFGSdT9wjsKY3Yw2b6MhzzY8biTa3LNsoKvDC",
  "key2": "2Bj3EySkoyU79FE615nLNqwqeBZrgzdStUUyVGXfQ1c9GdQAu2GPmcUEUXx5ap88AVL8gvtGm5MKeiEBjBgSnb9F",
  "key3": "3YMJ7vGytqp7W1nj1N1ph7tPek3Frxm4hyobmA28N4P1zx2budt9L7osigqU4HrZsRDXLmQYeeL4F79p5P7e97c8",
  "key4": "3sRb3d7tr9FRTruuHC57YvdvLeW39hyWLFKEXgUNZSU5imroJ2Lp6GKU8x8cC9QQNUBf5WbNQhaqPJ9j6DALU1yf",
  "key5": "4Mf1HWrgDmkyNjoAKFbGF1RC9398KP82jScyKSgVp8QF9AQFh6eYNA3CH3DDbc3mtXP7usnK2yh7o3tH5kyGMoYY",
  "key6": "4R2X7zv5z8tPgHvTrGZPYFRXwSPsKhbsSE3PWRWCzJbB7XMx3NkH3CnSUBvRnRQhe2jmcRPRTJ7wnE6ssAkDzo2c",
  "key7": "5t2EsRCwZpHfXxrqYADU8Y58wa9Y7votsUJZUzz9JeRHcCTJ2a6Lijgo3TCGFNxyZFPXPQf61q4AiCXXMyKUq4Vi",
  "key8": "3ibhoWFKL83Rd1GpgwSRwEU5vadwy5YvtXn2fb4cYZu98NwawH59C7k3DLedQWvfEkGhjBuPkDqZ1jyMo6NESynK",
  "key9": "5mEJYPxbRdzqDLo6CwGsu8Ds323CjPJBUSJ4ZVGigVSYpvsXPx276wV5meCYWKNZjULGvEMXqaweRtpKnuMBPE9h",
  "key10": "4LNU9wGZAxX3pcYox6rrWNUrjQD2TC91jmQuoUkp83RDXCT4F4Rrvx3aPk7nLGZsfbXbDSoi4cd5v8Ly9DA7v5Xc",
  "key11": "3PUDSVfVuALsARU8TJ8tfCQCgsEVP55wNanDHCb8N6tXfAbEnsAwSfpHBUhmEjdd3zJnfdoz4ps8AEirCrtxn6wh",
  "key12": "H2g24k6WU7w4HYvK4mydyQXTVuCFiyXJMvLRwF9vpVV5Lrx5JDtL6i4AHk5zBbjNpnKqfXoqsACmrgnEeRg4QDy",
  "key13": "PyuLE1yrZdBLiUQjM2c2FfacBKokJtxpS4nqaDZzJfha9ZHpZV1Jvrtpr5RujH5ZAJUbnTbV5YXDBk3s5n1YC7M",
  "key14": "Gg5QuK624cC33vTiBiG955J6prBrRy4buvd219P3fZ9wuwiYomzMw6LDCGVyMBfVXgFyWK7SmsDWqwHpr9JBB4u",
  "key15": "5opD7ipccH2dRYHha5QNbgtVHz65HVhK9YF4HbM4oEpiNevkdY5JfruUf4Ao4vAHg6nqh1y4u5tg1wYQqVE8Z597",
  "key16": "4drzxutdFtydMm1t6RFXBDJmwJA3CaiAWcLjn5QhpqAX8xgoZLRbtzzNKr27aN7zws9v28bAnpEMHYNWnXrMMiXV",
  "key17": "21wtsyjqFHHu5LXqpZ1AFVXG8SwsJbEytw3cL53wWowhprKFoAAqmrdDJu81N1WYQk4eqJQsjniETwQnt9h7JjLL",
  "key18": "65f4nKLqWNJ2k23iGWmey2hYb5cp3QT5GoWB6sr8sbEoW9rRHtwpXfSumMWDM8oF5hFeNriC58n971tEnbv8sX9h",
  "key19": "3TgsnvrSPcBVQtPb4AzL5SVxDycQhe3R7ae6h5AAc6cuqxskWxGx17kaEuxnveidze3qdbbVkH1T91LgbPaqSWF",
  "key20": "3EspSG3JpJdqDKahGmvFnpYEwKbwyo5dMWeChs25iqDt4cfWAJxaUqVpiiqXsUVH9WEjMvBFxt1n4ZmbW6fV2jfv",
  "key21": "2drq6UzdpAnAQ1YujwSvUPiW3p91oWtTg4uSc4csS7Qgsqr4xVjtK68oSHgnTFEGfdFWEvqYq3CB5UKnCjn6JvSJ",
  "key22": "uZ9wgUctQAoNzw6gpMwkzGnmsKrNGXUZs3uaSvVwzeVG9degJ8FL6NcrDf9ETT7pFMnRkJbJgVRv1XZ1Wk2bTn5",
  "key23": "2Sns7TEz3hGPUtWKC3RHi3PDWHWzMYHGcAxvh1ssp8Rxf3HujorTvXcow5YhnfFnF5PaTJ3n7HrfCm5Ur3X4qdWb",
  "key24": "49hQFZA2kWTuaAo6Xai3R7naRK3UV33QHxfeSbfshGXHKZxwNoCDiXA5zv8LXAKCg5fdYTgtjPUHSPdGZyHotRwc",
  "key25": "2LKZrkcyrAgh3XEnCLi8d3QrqMynfXCnrVfVfnUb1XZRCqcKgGL28o3NLUkxJvntQaja5qLqJDdiCiosSt9XDQT",
  "key26": "tj38qxRQioFKzakrPgvhojSxTsjRKrxh1TZYGiuYiSByemSuXwsVm9V8PELUyLmxdWRAMr8xdYYWnawUcifEPuw",
  "key27": "5RkrTLr6cjQagoJQZbG178gUPsB5G8f5ooeE7NirePiT3sqa4whGxkXyZPWPRBQq9sdUCRivEJMV2FNT7SNHyjNW",
  "key28": "ZYhtbvHR1WgQZk5fyv7qcABHcie6hJNAoagJjE14sn5n2NuF8UWJ9mBgGFjoDQN7GJbaDytRqFeQNMsLe9LGuNE",
  "key29": "2uTYmLWL3Cb5rTifZvQmdgHXsoqisqFNd5Jt5BVpQU29ywHCpW1wp9JvZ43kMvbL2ZCMfuA3nK3Rp6mjThVX5KSg",
  "key30": "5XUVHh9sYSX5xRfPNhMCAR91m7NzcmwfFjg4DUkkFXnu1XoYeh2uwB4nfLCU2Xq3RyNh1CXgPmtYoXvBRHWA5z4k",
  "key31": "4j32wS5MCk6jrgXYwEZHmLqrThuQv5rn6429AWYVGjZUfj2n187rumW7Rmj7p1L4iXSmVffM8TNqAkj26MY6x6ML",
  "key32": "ivR4uX4RE5evrNKBu7FnosdtP3oQYcp23cUyCJ6485GP2QDH3PM3NveXqGgr9xNmtwkJwphAJ8xhqPsCCKPeMfH"
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
