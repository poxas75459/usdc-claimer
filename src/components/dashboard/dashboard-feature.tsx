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
    "5hVnW2ffC4L4469JGdCZZGFdvMmjaALWzcBYuSwxMaRGAXezLz5HG7Cbs4Ay6QXvwYUyJ5DGh5GZisMXPz3sBq9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNSnhv9RW14hRDRgRBfvkitM59VRWNrNc1LPHupFkZZdwNoprrfHAyLXakSLQeHporAGpoBb6g6MaCvvjXn7yia",
  "key1": "5x3oSoUo9kBX6PNH8egSimaFKx5wPrMzbiWaV2BxrJgFhvYzhEM5HykWXWq9JoNXpgtcK7hfbtoiyLxTrsrvAKnV",
  "key2": "w3sFDqmMYPkg2aoSqsFpkvJqURHFc6j6hziq8fu9dRHq8jAnNQ8e7irZbYCdZXvqoYn14NZ9Z6PtuZBrdFMYrVR",
  "key3": "5egHZBdcrS5f8mHm4AwKBuxyNVkbZHffY7KmYGoNfnjp8rtkx7xLoGufG2kKPVMzuxuEbSNKpE6AXYpJrJm62eNc",
  "key4": "5HsWqdGrprkho2EpaseEVLXsaZGXJLLx8adoRVormQgivjs5A9EF2NPo9dtgbsuvj3b9zCcwayarb2ZRx4RGV5g1",
  "key5": "5sRR1WxWFczukcNX2hayVLVDAdRfoHBKKUrznimUAZwEiLrfi8wSPwX34D2JQnuvfe3MzWC9z5VNSkiwBobMtkW7",
  "key6": "2d7aTMommJjNvpGBJ8RTmC7Ft7sGPhHk2vF8UtnLJMzsmEPyq2KvmhGa8vZAqW5UxeTkRQZJMQbgNxsQ9PrwQFUR",
  "key7": "4XPtpv6rMFDJrfJK5Zok4Dg8QdJJUo21GsVHVWepFd8tp8DGNTknDsXhwZpEEYw37ep733gf3zpVtRnRuZ8WYmEx",
  "key8": "e71uRrRRrqsq7qBG5Dc2dFJ7FJRnR9vSH1mryoobvw3ATDc2GWZNWsEi6CFthzbTnMT1ey2fG27CgE3QccKBiqc",
  "key9": "4JkwYi8nPgw7ivS4kNtBFdoaX4LX7SfUP5p9pgcparv3TPrWdi7C1SBEFvgAz2qD3VQBptP2LLLJUCeJeSGr6CEX",
  "key10": "3pZ6tP7fgoogZ7GDPjb7HUr2N5wBgNEom4hZAywmnyXi93QtuYGBrQEMzvEwvtxZvpV6K1aGhtJPFLA1BHhzuH1K",
  "key11": "tFPXbjz2XZdBXZGtyV2GAYSJL9ihGJZdDcmoRJcXWcSaz9dzwdQfk5uDCyAXW2YqHvJNJ8xYY8VWZZDb7Dea3mk",
  "key12": "YvaR5gDnv6DoGqF5LfBzNND1VNGeBwDeYTnJFn9uvmsZwUH1H2RzmFgv4N7Nozw2mWMMbg6bSWHLRh2wnVAEhAM",
  "key13": "4KQAeZChWC98tBNipGKmpuHVHq3eGTY9xixR8NJ3ZKavMRXD7WkBLAMcikUnFY7amDK1STTespoaQkkWNVUoM4fa",
  "key14": "5iEkKLaR3dbGQ1u2jgSUWuUJsdodqfaB8VcxRADFa3r9kGmfZobQnMhRT96hLA48E6Km11ZKLmb71FfD3n1tQb4x",
  "key15": "2SSb9Qhz3LDyuJq5ZBC1oeX5KgAQm23UBRUo5Vtv6ovVpkQX2kMmTTaxXp3RCC3sH73vjadcm8KpxNeaRSpRm1Sp",
  "key16": "5GSQYAA3yT7pJjY5Qztcso2RRXB2AAQ8rGUxqkAyvbZ2nAovSSHeR6suEVCmFPa4bo3v7bQqpdaNeYNmsKCvRQ1H",
  "key17": "2gPJ4yjFQ2iY82TSt6PT9fKTPMD1nBhzUM24kb9f7ESkYgTN5XEHJVPXseucUGiPQVE4rpXQh6i9nQkLChLRMAqc",
  "key18": "4FtrW6kEJxpg7C2NTFKmkc6Gy8mzixCGMDFUzaQf5KM96DzpAZUFgAFFWJYuq75p2XgA579zi4bNFTURHoLfKkLb",
  "key19": "4tFjwvnSWha4Z5Nk81coiJf6TbcAYi4kGb7fSCwqnWXvQ5yvaMQmEhYu1Cs5E8tfcMirFaDDQEYTnwDjoYiUxm9u",
  "key20": "3BMFXX4RkCD1RWJMpTZ9of2mUZnJW5XDt5i4VHifDMTmFKWbunjL2ZhL2HSHs25bEMV45o7xrASnBUddSXb1nTjF",
  "key21": "5Rc6Gdf9TMAWQCNaHmJD7CewbrCnBViBW5WPws2bSP67d44P3CXc6aqLGGz25hduqiLuFGUWNx8RiHeoWimk55sR",
  "key22": "36WXwh2yhdXk9jxq9L7kafRy6ayBXAyiyUwyFkTv9g5HT1DiibLDE6pWFhAc7paYyG2z8pcQoNaWSYsbYzK6PJPS",
  "key23": "4qGPFdrvFeMxEHicbEgVKtSAC5Ki3pGuCacudsA3GGk74EmvgCUAHGWUfzRjB2o6ei9c4vfmaE9HycCPnmFKYwuN",
  "key24": "52EoA3QBsp44UE5JyECSCEC3E9LVn7U7pLYRgapSDwEfbJT9WC38snwy7dHJQZRNFGyjGyHSz9r4n9oVxZMFwusk",
  "key25": "3sEcYfW7UDULUMgV3trZS11715Rdenn8rJmETEhf2HhXfrZGu1fHyNaZebiuiJVTN4CY7h968ysCNyY7LnowiEZE",
  "key26": "2mUMQnbkQyoNFkAzA7qXSeA32TA4dM3RMuuto1Ype1Q7eHCVHNwzDrbNMnYYhgBmgHS7b6UJgjiwayCKzfqDv9HT",
  "key27": "49ADKEF8mYtQ3hyqTrUoazz4xyMpdCydMsJfXWp4vEnWbE6KFxkzzbREnspXeGBYguddDn8zWYCqTXBjUNb4spJT",
  "key28": "nLGLFGwoEtLDT8apoY55BqXWRb4JSoJpsiC2LzGX5WR5LYE2wcRm7Lwc32ETEvrRg5QV1PZarG3oWr8xzwd8BpM",
  "key29": "r97tbtsUS2Ag15teunaojpFuU4xz1bYiwS48nmJsELKaXE1P5fqEu3ewbRc7b2YocfYqHW4qoSQvKzuGFgRpvVZ",
  "key30": "5spLWvRqXaa3YpxHRC6QeAXZWDyK3FYvcMgRsF43t4zQ2CgYjpNWKipoHGELz1zSx8CsfCyKA8LEvi3Xa1YSi5gs",
  "key31": "5Mw66bEvpDoNWu6wwZR4fKBTb5tYb7Ci7k5ndt8TaLp6G9u7mNP8ciX8UBwMTT3qpUtAeHZKhE1FMCi7oXhGEz5a",
  "key32": "3AZoMkkpSNf4NCwuiqMFoxhjgMQkdGZroz4tAjvSMxYZGEj5v3r4kjmKkssQqyrDJhT963PkFXf3s6e21DeLwbZ9",
  "key33": "f2EXPHzcUjxLKxDoy58TW6mLBcZnwGfCCHWQae48eSYRMy7xMA65y5HJniFqDgLz9eGrJnQvghfrG51VZ52jWvj",
  "key34": "tHtePwaG49gPbsJX6kQ6YdvX2n5o466ScbHCc4JE7y2fGV2w18BNi8Veuc346wZYKjz5qaMC99iTph7vcr9gWSo",
  "key35": "3fEY2me5maazAgy42UpTk5xeDxGJfoZGwuts4hmJhqoozBMqcrcD6aTe8REx86WgrZkTgbPqPnQYfYroFPxLcxST",
  "key36": "j8yqSxNVrTWLxgHxcaptK4mruBLumNwmx4LcMmiWgnv1mqFaUBFfqoJ21ujgAfoJ3VPMDPFPbjAkRupFc4yEeXe",
  "key37": "43BC6r735mwjqAhnRJ6UhE42ZvHCjWndEAbMQK8dzCPYdtq63RZTjkA1fqTLHgTzfjRo7PiJ3pErQAnGx39ojXV6"
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
