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
    "4hwBBym1ejVfPtnMtcw6C3Qpys3HW1RaY2SbAYV4DKjcVphtYM8basFEbFjJhsZFyaUC3cVqYFzXWoENd2BWDUgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nTouxHCYHrWD2ZXBUTKKXHdQ8uanGoxQch2bH3SKfPLi1f24oE7T1kj9zaGgcF4kxrCypgVsYkYpGE5PeAqegb",
  "key1": "2iE3SHVDUBLfDHgY1VkXtBbprZ7RnWoNBrZH9nc1X722ZZKYXuideVugc9nbzRawa1BvB8yQZTZVaK7FfUCLHbU6",
  "key2": "3KaKnM4u8Mwt3gioN9TWN5iBeQdqX3XWCm52Sv53V1JTu6gCF5XMhpqumJocMMkwMWVmPCX56PiA2U4GwPc6VSUR",
  "key3": "64dK7gRAmq36xr5iQUzYSfHZzvEUr7pz34ZgLuMv5Kxv3c5ezfLU18xVGUvR3W74WEXkGgLnQJ8GrjaZxy7K99Q4",
  "key4": "2aDA669Z3V9zUZrpJxciBUbMVyggk3qGfew5a23nLvP9Y66RJJTB78nGa7F4av9Mr53PVzoFeTB1DkK2HRyy9ibW",
  "key5": "eFoRCfQoUQXAuryYHTdEERMJGfUXV2FAvHYrysWMgRm94KJ27DYsB83mgaU29bHhceA4fyFXvQgn7qRABfqo4nT",
  "key6": "2GG779hhC8fFqevHW6AWN6arwiWK94T8g5JVA8LqFcMeNC5hWHNK4Mpg6m2UduDBV2rXFyXUJTbH43ewnJaKv899",
  "key7": "226HM1mvsPXVHk8HaGfMiccLRcUsYLbjYDQqKPt5V7XAFvgPYRs13mMRtdUsxk3ogvKn1nvZD6emKP2uGvJWwR8m",
  "key8": "5McCFwwRz4cLBzBC8s661kYtVBsdwhwd9YooZXFgbCcV9kAQR538Hji9kvLesiEM7HMju4WAFBt6Z1BFTpeoLQ4W",
  "key9": "414b7N14Ys1SRCPWcyAepKWfNf6LcyBgJ9k68e2E2gRadTT8GwKbSJ1w94cu3jHp1VgBdqHvMRVD8TDmwBXJR79f",
  "key10": "2arAYNG4s1a8mMQneFUSFhP1xDEkvA57pPo1XhQ69DypP8nV3ej65eq9mwscVPrWhDFND8a4wQmmCdkGGkb688Eu",
  "key11": "4nNB4asQD8k34nrmErEYoz573RWVH5aKSqqG4CbsaKFHtZiitkmnjtJKjx1DwKgL6e7kaS6tokC6GBHcwvhH4oCV",
  "key12": "5Etyud74gdG5UJmSRiLXDT3tsdPeCeafxgW4UhfkMRUyqSvRKmqBANnT9kA8EUu4xBTcqeNksU5cvf2s3wVkEves",
  "key13": "4HxVGx7tRB8hNjn8pLH6oHAz1b8YigY8nTHA7U6KPPVVywW6vPYvCasezckgpWVWs1J1hR4Hymkk2gnwW8muDX3c",
  "key14": "2D8UypCRNf6crGrthyP67nvTJKHCQWUptSr38J8uNuu9jDYqLYAoATQEu7DZrEfdx9PwPcpVr7Ege1QEQUoBd8e8",
  "key15": "3Zk16pEBruzKZifKHwaJu8mx4gVwYEosh4XmRhCYrT15Du31vHZ2ebfvP1qNEE2tZbwLdUr1B7QF9gaGdiGpMsSr",
  "key16": "2HW8VFoanoQPGS3pM7wirLgXkN1dWNUnLBoiTwftdGpR9aoVUkNTKP1cn4VtGbwv66UmUAmN2WpBwqPeJMJ3JFAd",
  "key17": "r8SkZS79EtpaBZCn32wuyyM6RppCRXYa9pcdFwC4938MRDv5eJXs3kd4wU94TaFDAeGSkeodMgxqZm4URzxi7Ze",
  "key18": "3ktdYpifhGKZ3dY2WeXPZ8zP4pdvrA7zoq1itRGjzutfFTXceu3NdPaPo7LNo8uJhF7jw5TR3kJVZvFMBfbs1pt8",
  "key19": "2mr4vMr5LBVsEHkSJtpjW4Sf6BSDR5aZrn5CVcAmMUPk5gox9uCC8vk37BoP1HBesDFZazMZhXNzLghARC2wPxqB",
  "key20": "zAWPgvhgGYZQkznjw6UupuQHpHyNKJpjMeu3v8Jr2MfpHDjyP2ckfb3bb95aTDKFsrkKy5Ni7mChWzjK6iqrxqd",
  "key21": "253rPfba8MF48szLVXoGf24jn2byrHVawaGkTtjp1pKhk4YBQp5pjatD6r544sj2zo2gN737zZR8ungpSLufBZZ3",
  "key22": "5cMK83EiFZBQRzKCpdphKfUjtFAjZZTVMJ95nEV4rrhSYCbxvdiQux9HB2vG9GRMZuQSo9n9wzQMrH59eKDyyyEi",
  "key23": "2ZMVgo6K8tkXraHC48xbUwWtm5YdczLJpCfRFCPc4QrpJmzysC3ecSXVvwvk497QN8jkwX8cUqL1kZkWbSWygrGW",
  "key24": "4UanQMEXF7ycf2daNKJygYdwWkE7TAoH4dHw29ZbQptGpUKzLngAFGzUaXn9oHim5xyXhpjDLC8WFvxQpyJ5qCCK",
  "key25": "oTkue5ZzKueJCg6XbjkqChEFo5tkF8k4T68jErjuJHYuYNCLtYMgoMN9mRy2xi9XQgdsX5DXiScbqeTRDNp4Bqt"
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
