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
    "3oAGVeHvRUHFzRQkK1KEGhB6soDo6sjGNVZVXRssFtzARnNrJBzshUZKaimKbmrn1xJ4VmMk9ArBHTYjRudgkrAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwKu5dt1EuhZmvq5eqRUWCJfuCL9cHDGyzr9HLeQMzTWTtSuziRqCoSbVkKdpS8GUDX8gEicNdBREuomuLbumVP",
  "key1": "5qjy11fV7Z6bs76TaVw9Wva16LWQhaHEtKmGtTB83apzpzx59ioPNTxy6DipKozwnmhBf4H6AaWDVSfnjtB2AAWG",
  "key2": "5ds7RtNwgZsAUESBooFyVCV4StW8hf9EKyGtouBviD4JSt75CLYj9rYeN3CNgAhBDkH4M24tZLYAAM1VfKZ7PgbU",
  "key3": "4JS2FLE5gr4HCZyx2r4fUUzcfY1Z2CoU1antAWA1uJ9EeWk4TjMK7EnQFaUog7jq6TmDhbsAeG5U3bEf5ZKE1x5A",
  "key4": "5kMLiLjLxVoZzMsSvJmh1kyK67vpfuR2jzYgi9P5Y74auwmLWbW9ARhXTnTTrMnsbzmbafXSTbpEtxxbBYo3ejj8",
  "key5": "257hzpC1JSFkXuuRngRVr4QysDkESyTKuE1gvGHki7qSiQUvaYKfsw2z6g54mrno5NT8fKoj36n8j34rJmijvv5P",
  "key6": "3twYqTB3T7WkXy895KEk3SrH5WEvrsefc79AJmbHp7Q3WW4C8vBwD6F4fFD8N2qdp8kWXApXj73ZYU9htAejXvDy",
  "key7": "3EPqqThUKQSzshzeWVn37GWzXkSZrk5pX1tDa4e9KFCMuBkALyj9Y8ueKs7wk1xqtQgtjrrVAsjjErNMG6wSsV2j",
  "key8": "31tW8t3pz3skVzeRkZDTqCmxyz7uHrTV3BW6C5EavEhYxzKjdA1QmKE8ooHQHUsj8oYt3CnLMRee4PNabi6xRSEC",
  "key9": "3fK93GkGNnb2HYECrLwn5GoFXyxPj6MWa648LXMuQYz5DNMeAM2zc4jfpSCtLEpscMGmJsXAs5Wjp7ujmxgtx1n5",
  "key10": "CZXMXQMSNeLFRos5yKbHsy1mGrhwrhwtv5RNuWizBcWmgNCtjdkxZCuCzjvLCgt8yt4P1jcv491Fm7X8rAyiocA",
  "key11": "24fYnZExwyDFkqpVPT26HNPM9Abq1o39hDbhjsBAEjgjBZpGJi4rKv58JUq5kWX3CwkSMAiZk4VRek5mBAcY8BHr",
  "key12": "3g5dkiZL2BTztrjghdqdD2P1icmg6SVzcei7WuaNd2hMBD7EHt3ExPMctwHfryQxhwBnuiYUpg6DhXiqdpt767qy",
  "key13": "2YY59LexeZZK1EhxBq3xjVSAY2hkdXgVjwioBvTsDu6Ta8ZKAViieM3XZBUxvAwemHfj8tTaMNNWkgXv5Mi1oncw",
  "key14": "3mgPAwSFgyxyGQix7LcLr1mGaJN6LNCubFP7LkNUzavJDgscnDqnV2A9KSVmPH5GXCi68v5AEwszQFhr8PF4s23j",
  "key15": "2qxz1m3zCULAWCMuJ8kXWDg71ikDWrCs3ERnaG9qZbgkNUYLHDhafQiFTjHESRs1GhAE8TN79TEobSVXNcFEHjwv",
  "key16": "5dmExWFva48fzBNtPNQtLbbKsNPavdb3oi3npz532sTJ1GRWDp6qqiDaPhzK4UTJR7iWhw9t3pbQTzsgFTH9F46F",
  "key17": "3sYEeXjrfg5zJmZ1MD3iPWJ9kTK7GGp7aeiT7H6ZpA1PtdnGMf2xkXU2Z9Tgj8gnA2obM9Fzz68mRpWwsteXcxY1",
  "key18": "4hZe36Fs4pf25FQDTQHnRXfzL6EdbRyXd6WM1AbdFPVw3mDtThvRo3xQHkuoRjW4VfefhJ2tytEygi455jV6YMou",
  "key19": "5gwkJPjAx23N4D8tJECMzyq6ZA21n2NEzDRkuLmJn5zVCLeZNkoBmtdgQQPdjaotFc4GMGQrNsf7NajfJ3K3Aegi",
  "key20": "64xscPisLFD2Nw7yQDoGoe6T3atsVGj3J3ayJPxc8oFitKN1FTriKcwkWr7HrrDD2pAVuMFNbLVvudJAX6r2BNjy",
  "key21": "N996E3uzHXczwMntbvg8JUUvis23UA2WpD6hCgvtRFn1zRzJNXREb31sK3i8EPDr1S5EkrCHrhoHfUuXboGtPXj",
  "key22": "5QapkgmPLiYhmq58WP3b1DcuNaj82Ym1fNzAfuRs3dLtfux6ahw9WCTNTimEzoPuyG8uyShsjMJgRGYxbg68kPGj",
  "key23": "2TideyCmD5EyyqWTr7YDFnugqfkJsPZmNVd9USf3jUP7wHjG8Cg1iNLmM9b3zb9QgPg5tFX7RMoJJMh7wt1QMeXq",
  "key24": "2qGcyFvZ1NarzEQwoMFQ2yDZRzz9FLYdyM1yyEWwtgeCST8bszVxcMTip4FzYtX91beP5Pe71qWLejbXdHmg5D7T",
  "key25": "55necUttKKs5Q4Rg14JAY2e8Msmcanps8hrigoPFdNM8kUQd52fEfDnbkF2ZR44yBYS5qy1RkKKpHHsjarQ3xkbY",
  "key26": "1rnQMuXPbj4HTcFvUdCdJ1A9h6yCbCoGh4TbFJF8tTEGWYp31KpBPzaLoSJsQpoAHTvdp5smVDyPuwcbKgyNytN",
  "key27": "43zg1q3vPiqgWeyz3JF9yMJTMUTAQXCTLPHbQKA1St2cEABs4QujxaDz6BabvwZTt4ctECPcqs5bvDvefMrvo2CK",
  "key28": "3BsrzXy1BmEDLF8MJchG6pBVseYjBAms7wnwnvx67mGdV9FoorwFcjKeJdjYnTeRz9T2dKp186r5PWpCpqBx1FZJ",
  "key29": "5y3F7VR632cr9Raztz77svfj43VNnvLyZqA8Xt5CE1DKV7otQxMPF3qdJkPwZEYg7C7RzcF5WfAmfzLDMsyoSDHY",
  "key30": "2UcRVbVkRCf4Du4RMAutcLdTDvEoQ4nRfUPn6LYynns7uE76Gtekm1Vyi6RQPkj8UQnkvwj9e176ZeMfCaDBf34j",
  "key31": "yHy4CH19fNKzpyzLaj2WKjGzamLoSfTQeZRXnZTSJUbpBz59N46BvmTYu8AEHjK6ntFkBNAEc5FGqNEyFQ8yNbo",
  "key32": "52EynkGPzvzHvtE8N1hqkTGUpW9hatvXzcMbUrqp7SntbEyWMyP15XGKZJda6wkTdEX2tDSkseUAheFB4kwodX3d",
  "key33": "4dAVTD7B4SFJwrrKbjTW6ypPZ6XeRyCYYnvPiNME1y2DkGq8n7kqKvB2A6mPVYfMUbu6PFK5PXxCKqDytUuLxTr3",
  "key34": "53mAyLPvwpK1JF97kZHWzyWubEBetEY9rvTpHQKx1Jnx5nV2MVQ1kKKEaB6ytAdpWRu95WGzLNgTPUTd7fFmuks9",
  "key35": "uRw76MqHNTns8VQCcZAUDxVdZQGJvoDk6LAeRac8mX8DGyExW9F8NMEPkV3LYQXhAZytkmd1tkXddCQNLLCJL8p"
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
