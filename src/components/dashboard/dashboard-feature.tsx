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
    "3jVrfteXG537Ub5GLRtM66pE3G6bvV1zaQMnJqj6uGGHwUsDeXKhzoQe1UBDnYDSPvZRnaJJTKxWbReSZFiTPBda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GRPfdEBGHUGEWCourDAo56nKbaYEBS6DSyAiQbZPKvktuTHPX9kzRMGzLFqddrziG3ft1arhb5SwfvDcs1jhfs",
  "key1": "TJwM4iFZfF8Ucw2KBBDMttWbp6xJwVGCiHdQb7jkB71kGK944vzk4o1NMsyf8bjx7Bhb1VqGJpJBdt55f3PLTtR",
  "key2": "3LjfyhuHcTDXaGnw32V8qo37fSSrvmwLAfV1oXVeMf5vEVu9CAdUVfrZNZ3wfukHWG3SPB6QXbByLcHx7bU1C3UG",
  "key3": "5Fj16a35Det3NfYRF1CFPAgMwQyyszkASV5CBUUbZpA9XuqzpxHPabFagbvFaVoGvLYazHXFP5svehpgmK6HXvSv",
  "key4": "5HnmxKMev82FrNnYXkfJYw2Tiq9NK4EQUsXHFZvmdJwLBbQMgeFiWw5iRQrnqcTTAZNrUzULjyRMTqDe6SgXSDSv",
  "key5": "5JWQRQ9VNNfARrAbkk8Bn5sJMJJs4DqseHVfJUDff9s7gRtjoL1LwuXSKzMA2So8bCTCbcwc4TtedZD7WFm43eem",
  "key6": "2Cqysn4bu2rZqNn1SLK7PX347zCDGGBzunwmo3YTY4f7dmhRzn6spe7QEdyvyVuShX5S3Hd9x2nK1VUgiFcj85oT",
  "key7": "5hPhWmnXnp4KC3Uo2ErEtX8U6fvzoRbgMRMfdMh7JCcnNK4otKNBEBUST8ma8Y5M4rfkN3KLpyiTzwzo9rEUmAAj",
  "key8": "u21tgENCSxSKubqjXpagMbRrbpKWDmq4zKEzrbENTwDN2ywYQb97ca2JCw7d7W8EXdNVjyL9WSXeP5ecaJUCAeL",
  "key9": "5rL6QghmrYXbR35Sq6m5D6ji595sKasXvrZ5ZKt1p8QmACRaiCrN8wkJ6cNagAA7BzECcmFqLpYrpFunH4j5X1ya",
  "key10": "4rWTZSHMGdtFchLpQ2N7GiqFrN5134vyJdQPeuUv2ez7hGWsyznrgdfc3K8WLzhQ4fy9JKqeRmgTSFCfpuM17hHx",
  "key11": "4Pd3LjQLEY4hYbDA49zvwV3XZUBjQG9AiW3ag2YhEpgPT3TwNFT6pcEqEisTziMSe4gjSRfKMKqhpyaT3YXC8ehX",
  "key12": "2fiakUXQXoigu8k7BKQmzDd4S8PBkb3f8wN4kwXCwihduAb41ADEqvCANtCgL5WzCTqZZBZY5ysHUWtAXdkXV61S",
  "key13": "2eEbDgrShzkrAmiCC7AsYVWy3QJPiiAPH4ViyF5QL1wAGhwzVSYpyDX3NqTWRek6W6g2AcEF6etiWoVX1CXhzxhJ",
  "key14": "5jfFsP7cCACGdaKT59obk1hPmiem6yJ6rqYircSaw2SKi2ZPY7cV4D5N9Qfc4mqm7sFzWEtaxMExk9F5ivuwzZ2D",
  "key15": "5JV9XhiA5SFrmyjAET8hj8yQGoNviBo1U1YWiH3w2mi5GrYAAaHQQhMwdSa43QqZ91BnMC6hccJYQ1MYCYXVYxEg",
  "key16": "CDpaXUVgsPHmpW9txDRexkehTfJgiryiVV6FHRPXHqtBAGp2vj4kFRL4acSpG5m8zTveK6XFwuJUHWtrpsJiQr2",
  "key17": "2mW6R5FDPQUzSse3Ksnj6z4oS36oEnQAkxNWJoGBgiyKhKMyJjYMWPMLw1FMLVzvjv9niNaKFWERNK5FAEx6wRTu",
  "key18": "5ny8HWC23AVo4GCoHtrDoLFAYJLMNUTcqBnFgKFWJu1tDo792Ap5gmyRZBndfPRchnvDxN6eV4g2d6pWVYpzF3EE",
  "key19": "4PKDcehes27WKVFA2og5hZYfiKmzcCoQyprREwHLYkU5uDHyRLsBPtUTxcim3T6hR7xMT99qrUMeX5LqasJabKJW",
  "key20": "5nzM9aBn91ktjWiwCZV7rJksr8YsQ4FqEiLLquecbFnzoN68D6SUEXsUVMWFSBT1ERszqLLio1Q682A7TQ2E5MXe",
  "key21": "4sGTdxrNH9ucKPkES9FPN1aDtN2yxkbfR1AyGEfKtHZ1Umjupjfj8taoGCuPVj52MonFPnR8z1qN2EgRNRuPbXZs",
  "key22": "3jXdAFaivXYcMqrZBQDK9EP9DEtD4xsNDdSWnHiT6co8y29ExoBzc8QxghTeZJ4ZWSRLB2bxkWEZQ7nFURhKQH2z",
  "key23": "3rhDUVSDHJTfqMMnZfVUGgM9bzE9LHPdd2kDiv4ZduNvDgEuEWHDqEuWMy4FNxdi9RjzMfy38pVcq9dKBijHroLk",
  "key24": "4mzjaQXwE5NbsDygF7Mv1uiScJyZDxE95z6KshktV7wvr5rn3axWoGh6ztsZx1Ai76V747rXTJ7ECt5Ng5DqviCv",
  "key25": "2AY7gnpB1N8g9GXo4FcGgxBrnVaYctNmQvbnuu8BxD9KCn8hFSAupnnromq65ECGXdNRq1UouLN3tojvGBn9MiP2",
  "key26": "526GK5mem3AsjGKzisbJQmAn8tsmWDjK7oQPABZHFCKHtE6GcWkN9uiHRLDNuf2YioH6HW9Z52skYCnSFn3qihJR",
  "key27": "KtixwZfKNWX1JUrSAGsgjtB5wQehrVwq67dLTWmPSCut4ZVoTgrCEJznkdfrStvoGqpoztUhairDWQzNAMfRGAG"
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
