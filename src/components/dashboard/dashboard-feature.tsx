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
    "4AJxtsmyJz5ACALFn7qQh5ER4eXjocW7rRjHGLyuuh854Zfrw5kAwPCLwb2vBcaAAqBCYenReQMk5pLuEjHMcPLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rzhTrobbbGU98CYUwFUF49itBC4FPKSYYy9Zde6SgUYV7TtuQ8xGmgzSznJSkuZNsecm5mJYYraZ2i9Cdkyh84B",
  "key1": "53SxKX3wm2Z76EzSkHHJ1iEnBTJmQRBZN6JiuQo19oVMrN5BvC9EuCVeH9ySvWKP3ztJfHmoeJgJRn88h6dMpTyu",
  "key2": "7rWQR397NQ935Ktu7uRkG1DCRwvXtQSb9rhnWRsiXxwEbQQfcAAFiHUQVYxvHhV9vtwV84BvuXKnZrYBEH1tJvG",
  "key3": "7Zgd1pRwRNrsxcnyzMSeDjLVfJ7vRrqcrQVdL5Npg9RxPQT1vUg2f5CR9pRaSVuahSQotVSWr2USQL7Q2GBMA5E",
  "key4": "3MCwCW8SFbXrjgzd8XnaWLhJEmMXxyhE3DL1jkV9zqHs1dFRDgrdNwy7uvH6qytNfZ3ieVijNcwbtMkxht28sUui",
  "key5": "2xZfmgaJbz5sAyWjcFzW8k7wAyZYwzHHdJQkNPG2qPr7Yyc3JpdXziD3FXdfqGRQVydeEG7EAU7PVKvHxTBhwgL8",
  "key6": "3JK5VdGjgHsGMc7nuxdB2xKaT5Y9HMMK2xBTA8ZCmtcB7LZ4VWcV13dC6kcy9XUSqweiL9V9FEPvUzwDDZczqUpC",
  "key7": "3dryqHNRqabTLkJEUscyfMbcoc7a3vevcpKgHw2A73jbQeQ86rtQ19oxCACvjcPo5RKQDduTYQQWX135PpehAf8z",
  "key8": "2SQq2SCro6D3ha3wUSFK5ozxWD1goNT1pbsxCLE7Y47e5tiJ8gu7opfDPPGWzS5nGWQvihAAbnqr8xNEXRX1hc8p",
  "key9": "ss6UBiRNFJkGewurxr2GEC7vTGXBaBvTwFddXrxK8JXX3GDrYFTheqk6sE9ZM4AcfExHzGZmiAriBnzguJHgRxq",
  "key10": "5Emt3WUA1LhHCEiMzzbCmz4FzkN1wQ5HDQHgoXQmofVRM2GHUg11KJ3jaKVGLjd11oPxiKjS5uwaFiPBLLfFzrcr",
  "key11": "5hiPo4q5rRQftfxfLrbxziSFuYqkGATfSobtS8zAct86jSA7LJmohZzLdcuXKFgwbkHFmzHBBHwfQSNuamaFJu1e",
  "key12": "2NDN9EqH7aZL2PwSxbLRCRxDuaGu6CK2Ye14jkmpxess3cUNEWfVutqoh5mhvxrQ5oS1FrGDYoWf7GydTSyeCRTA",
  "key13": "PzLAvFqSp5Ajydnepq7ncs2raBatEb6ScMGifTLG69rtkLpwyh8NwusDwfNQb3Gj5NENN6vr9CRAgPhG2x7PdMx",
  "key14": "66UoBuNZ5v3cZsfJLAij3dxbdb7R8s2ZYkcERgvYrCGCCALzpZAiWmaeAxtUW8FH1mSKthow3EHL4fAqZJaMh5Ey",
  "key15": "mX3wjSUs4GWbZh1bzWVwLJgaRaaxggh9VMbTWKhUJQYYvtFiPNQvim68N4ny8X6Cf46rMa2ZuDzdDwSRCAT7nNx",
  "key16": "46CNWY8josXwzEYMm34bP88brjkbFXq38xMKnikPqjo67AtnXdwH23LQBT59AQg7tS3A6tjYmMcjcita3tNJpu3V",
  "key17": "3892CUBdjxGzRYB7sF5eDBW1UfM84kVSvynHnBigty6YKCpADdQq88su1zEHr6A2D3t8SJQWRddsm8ykFLaSWjuE",
  "key18": "455GwDvTEnGCuiub8hNh3HZesZiv53sDxihQhhT1JGbv7Kb92wqU6XNYyktvWgQmJvTbWLZPq1NaM2JfNgsbz8Fr",
  "key19": "pme1DckjimKWdqaNZDnYCRBMSN9MSqxRbSHnAiDMuKhCyPgp4PnhHGqttnqczGTWkqa9zC5FjjwUGAdHpFY2Uyr",
  "key20": "3zJ5AS2VcwYj6u6oeEkRTnLVWq7TWF7QFyTBTu7xu1gRfSjSq9Q2X26Qf1ku4bkcoDikxEH4k86HmDWLspDsGMBX",
  "key21": "2Sc7pW3QqJXQcjyMA1z9HrGeDtqpxSAny4EaqBNkiM9VxdqxFhCj1bgR2AEu6vkEcDmkrTdwWVvKe5pRinAu9SgH",
  "key22": "iZtVZEBBM5HAn6caLXnr5SUUwHvVQ7XX8CSokAd9K5nK57FuwoWMQhL2CKqLXJN6dSA85TBnQSjSt8GLNeKRM9g",
  "key23": "3YHCwkaf522jCGinPMHbwhsZbtbh2WfN3jkDt6wsLNFrM8XGQvdc75b8Am1cSVNQ6sdaGDU5hNbzzHdY8nVkzSWR",
  "key24": "2L32LRJkMwYgz7T32bzCgeKfg9oTvKtc2ZiShZVutseXztaMeYiSmL3UkPcsTfMmUVckbqmtw8pkvzEt9FhT6VtP",
  "key25": "3eJvW4SU5yi43Cv8L7S93wMZMbh1MmA4Jtt9yPCk5R9zXRFyuasASn8wws5YgVDegk7m7U8yBDb7SgGwLn24MeqM",
  "key26": "5tTS9dJFSx64yHMMWLMWay76SHd95GY8MDGpxZa2kocDnUhZ3xVzuayifjEQxCS7ZkAyQsPTdy6aeVmbUtPa7iZr",
  "key27": "2KWdhCLRquLwVv5LqWk8nuPNahdPyxHEegCHktYY4hmBL9FkJP9t5irFZuNnyY9xP12d8SxuLb3sdtGmRm4ePq5X",
  "key28": "57NsTooPyEk72wJNZ4euDpgxtDuMX8ACX7XkP5g4jCG4SsLKPt3Qfxna7iUgWaV1Y3joyjEtx6hJdDdPYBD9p8AB",
  "key29": "5jwt6D5AdfmuEbNA4kvGJrmqydWPGHUdKkPmCL9fxEiu18MroJX6n8oNvFgJe3k1nftG3ejtucbbJFyF4hg7uNPc",
  "key30": "5P7pCrKXp7b3UqPvDYZ9xDJJUmnrEF5feUaFupdPLszgW2W2DKkvL2JT5ArgDL6S215dXnCZ5H6dBE5t976PzZrj",
  "key31": "2c94m4KCA3GtK96tcY8frCNJbBWCLkvS5NDuv3q6bocwmoqNBzRS7SuWJba2KfDryLtEXW3ah4n6MeXtxaty9e3k",
  "key32": "afNWXdJBrGkj85G1EH9ypqdyAh3CYGspLNKo1j2YRpGQaKrw5pFhH7248ruL6SowzW7QN6pksu17ANa23aK5fLM",
  "key33": "4LqBLiN34vvuNwHMJBojLox7BnT3k7FMW3Xq2rhsKERuBwKXbsPNZtxGdtP1ysW2h6YMhNGSACHD6oDU97U84EBo",
  "key34": "4LGg9xq9LtxmQzeSRLNsdp3pxeqAnRBF1LYSiircKxPznn6T2igT2ZmcVNDBexBGr3ToEbRs5B9GPCXaivjeJQsP",
  "key35": "57yczKrg9fjeYRmSvkBFKvq4XcaCo48eKjs3VLF1FqyCa7Fr9pzwKUhhJj3Gbpc48jdkPxznfkwGtM1gi2tbwKds",
  "key36": "4gqe9bHx1oWRNKoF1jNtC1LydgzMDggCsjxMATfvRsSD8xi6Vt6KZ6WqYcjSZwkzFdJ6bC7SXscZTyDFSLJji7Pc",
  "key37": "35tkEhmLKYnAtotRiTsEGeLVtvFqg8ZAadvR3d2XJTNz6Xy42iv7XPdevL7TjkvNh14dxq4jU3FjDLiwmm7mqnCs",
  "key38": "xcsiUHgS8THuKrAJQDXj5DgeCL2tWSMn4ysc4rvnXtmxexzmncgHMn9NXJW3amrvK8KZ7cR9kRz9YqZcLSaWGC6"
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
