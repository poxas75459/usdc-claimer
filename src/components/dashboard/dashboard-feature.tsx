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
    "5je6rMc6CkgseL7wa7pCJZ1CoqTkHEqBz23LPfCMvJ8RrkXkXFTX37ifZ267HYKCTFXotJ8pNZZKeMhfjyXZPfhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjmL5Jr2pufUbTar5cYbyz9XCSx8e1BVi6aQ2EdL7wi1bvFSam9pyvUBMJZxeZeQgVCWckjSWB6m5p4grSKsbtx",
  "key1": "3zqVHXg2vSr5tku6Fy955k7JGUYLgZVZUT5oLvX5abNjePTH4XsFKHmBayXwfDB6sPwewLVNe8n4wsM5Jj6cjDGi",
  "key2": "4s3HpNpqLPJYzVwMZ8To1fRmTtDiHG38HaqH8esjpodCMAa81Y1FqnLhsMZqFJVvsyfEJyJGKsvGzKZivUULqCgR",
  "key3": "yHrz6VJ1Gxe79pLAFuPqKhoSLgCJHCQv33uN39mm1Ng9aQtmnjb7eXAWnh7HF43eMAtbHyy6ziDiCQfydNiHLbo",
  "key4": "2cyR29Dqc6kisWggS5YnanUkwyw3VHtsubjGtaff1C7XN2YajhJsqts6xEAi5MhLrPYfQsrn6DeoqiNsJNcHVrTn",
  "key5": "LoEb1MfvGU5UarPMqNRa3CAvWy9MtfkZZUj4rwmk7BkQKFH5WQqwzTzoKBWwF6ft92jgrvtGaxwsrhXUnPF7PHq",
  "key6": "3QMPPoMfCKqo7MRgisqhtxSqW4eTqUtEeQL6LzhtrWB45A71vzXkzaLPTo1JxGZDuskS39JDkzbRqzXShDotzoaF",
  "key7": "4PtiWiwKkUWHa8Ab2zYqhydHo83zHqcyMyFqxmmFqMaQj1wdg5GXeRuUFeYL8km1T1gtqynePcpr9p3CMWdPwN7X",
  "key8": "3T6kwFx3Qra1BZMTaikbAVrjeSQoghQQ3Wna4CczrPHEhLkRTiJBzfnA8JrmHKHGKeC5WBY4AAf6Kas9Zn8mQPyo",
  "key9": "3ndqCX1QxmSyqL8R2dhToi5DFFadFFUV3BESFa9sT1ruPDyGGU2hCSshiYpyojMNjpyYhoymQM62RTeN9NX2udii",
  "key10": "22KRnozgzFY48o99TTsgb7w81SAQzQwZweV9Zebzzua5M6LLkcoo8fF83BYgNvxurHm5XNNmcfY87tKWZvho89Ee",
  "key11": "4b3tG2jhuSvUDfedaozXXhoAj2JF9D1TVYonLrJFvzZytxvMimYjdHSPRbhFQTBrVBB5d8gBFFmoBGEQDhcgDEHy",
  "key12": "4P4ZU6m8aqAegAyhrvrtjGucPtLH1jVB8rwpW9naEhWBTqkt1nf1zsq3h94CJknmFGVnTdNmVvZmyeucBjPxe9Bt",
  "key13": "uecyJvNtBVTrfdmpsANsceadE77g1ndE3T9gJUzFPsHShiAgxipD3jp8rb1v5GJFb6hkWyE5Thz2huMY8QFZV5F",
  "key14": "2VVh9giyx4W8mv4K2zVQbpJnC6azn91aFMhnnJ1W264AefaPXmR4N4viixWF7D2GqXo3L4gVXhHdUi9smiu4Kfun",
  "key15": "4jWnt9hZc1XF5i3itYQUJe8vVMWXFVYbMWyBBuGuuy5gQnwuJhkZFwgBsfEn988yf6KfNK5LUr1EXTq1bojC1SD6",
  "key16": "5Y4322Y9gZVEfYWDdKDvLC9QFeqXiq3FNQowemXUmsehdnQgaqvCv755eNUXxgb85KMboth6d5LyEBYHPtZuMW2c",
  "key17": "3ZpqLzwHuy97DVXcXp2f5mEzACr9fBkeMGjencTwatdrNwmx5YHSv7q6JxiUxAYPWXqF5Ju1RZSMwW5M4NT1tM4t",
  "key18": "3PHMn3o6pzkTQkVbaqkTAYoNHn4wr7U1LntfCQJMwsxJydbVcTN1hjGnbVQv2qFSBc6z9SU1gpQmWHqsBoZdZHyq",
  "key19": "3tVYQyWjFiuUpt4UBRKUPzHTcNsXddqT18bUvzv3sVRko6ZZAjyLSJ8SMPbxyfre2vBhurp8ahGkGaN8WbBpi4qd",
  "key20": "34t8ZT3Tm2vFC1D3wPJbYM2tth9PuPuA1p5zy8JfiqMMTnAKyQ5L5Z4WVtxaZ47PET47k8vwL5geq5wpxh4gKD6p",
  "key21": "5v8JY1P7ej1z5ckCgw8E2ZFsTDsJa34Qr79q6fvdLtFJRCJXZD8sX5Vanno3VaPndkXPeBamLmGicUujKttmrzgR",
  "key22": "2rN5k9kwHCm14ysLdMc7cE4SbdMJsnqBkoA1hF6Jzs92ZDyE647Eb9fAbYAB7KBS1mATPKzjQAQHYzUE3UHNjM6G",
  "key23": "3CHyRCWkhPNW8VizFm8MrEK2tAB8RcJHmyxcjETbPEJVyxUKSqRWKb8yY1xEcpecvzyQY4QfjEUAKJUH3ugELhRz",
  "key24": "3nV5pXoVrZ9js8GDgukGecAHHYwQLKWmEg4Q8HrVp2rQDYkK2mgBJJgKMjCVuTuAbceUa5iGtmUGjt2buCurZJaR",
  "key25": "39eDar8FnSRF3kW1UYo4TUzJb6t5Tb3Y1qC7q1fkUUNTWCNWbDbtmeHonGGAvhWWMSyQHJXJeh37PkzDTzSYh8wU",
  "key26": "4UNYcjUoP9NRJxhcstwogg8axjkpviZ1oyK2z7UFrWn5qVnRkz66yBHRCHucCNzBq8hT8YoWW2Csb5Adm73DXRKE",
  "key27": "3ApMuxr3ob75yJWHM1tDE3KK8iuBSGvjXxrsiDhwLRbJNagWgUcoRcM2mHa9ZZPGxP91qvNuJhAjwfjxYmhKRv64"
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
