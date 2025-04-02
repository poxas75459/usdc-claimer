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
    "4DbTC437z4xTBtEXz33CSAohbjrJgt5VABzRo7qpnpb39BXHKXvpsbCBg45EmR14yMMZSUjHn8rBYf7D3vNFqTRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWuBPwb6FeUUL9VaiaTFJs8RfZ4JCZR8BujUiA2pCrxCNWBEwR3AdUbYwzWpRwMctVp6FdcYueCc1n8nrsmX4fR",
  "key1": "5BHfFbDZfqHsEUiAi7M9Uu98tYwqvUWtHivrjmrejijMUCXzQVNvqJCpWGaRDwyBqTQ1ixBnxWjFrsiBvtLVqX5g",
  "key2": "3yEqhvHD92fHpUXGPxSL5miUAZAVAu3GFkmp4hiBatrFxVpAJE6ej21j6pRqFbpWqu7DTTscopjDC4evwMqAdgFj",
  "key3": "dTgyrcJmnQenVw433mMMMv6h5snrUCxGx66YJjr4sspQx4pyEpoZnR9LzAFDYFG3tKWTyr2q7Hz3rdJhZSwFYEE",
  "key4": "3VnSAs6grNuVJJGmx8NHCoEP8ri8yRd8EFf6EmaL5UkdNYes44Dr4dxwXLhBSEc4tP27h6tS5vqvDe2tSzJFX6EE",
  "key5": "5R2VctkTeNCVrnDuHwHGA8oLx5wCDdgZukCNcdD3CbjpbnEcYenTFvd6ALzHtifup2m8QyxhQFojT7rst7yRug2n",
  "key6": "4hQtyYMYRCM9yGP4buXQJSinLyyCmKycir4ESKq8yvrZU6jNgt9onqyJ8Gs6LgE2UP2AevNC68H42VGcRzQWCfK7",
  "key7": "3BHNoyPHCvoMY5FgZJgQjgPWsbfNCEDhjQqTKUK4mUy8AUsnxg7rSVvLYSmpGHgJmEZsUBexsaMAgNqyVVnvp2MA",
  "key8": "3JzGTs6GT8qe97PgUqpChvaroqUZAFBR3NXGNRZTaH3jf7HmZSzBcatzG5EoBLSnciycT7Ph4ANGhqzC8nKh6SV9",
  "key9": "65Pjj8kaXz6CaPo92Nnp7HeiNYejryk6xw6KyPUoEB6puKwVJvZDXdBRi8gnX17goCnSP46DTrxLgCWyw5pT9ozT",
  "key10": "Bb8v3DAj5T7jpuXD4wBK4Q6Degq3m6cFrNYpC8f7mNNKvPJoYcBM5P5aEcNxJkw9iFAe2ttDJoqEvWK3yHgTwQE",
  "key11": "7n2YxM8Gd8wVAgn1gsv18YfgMBHR7aAMnk4soqdoso3jR5ZZZrMyLLywVgQ71iD47x1e3pCzeCz87UmvLDyqK1N",
  "key12": "41uos5D1uYSiWavhKDF6CUa5gSuG4fnSUmY3Ae39xes4NcZ6NKcdzuuJxorif4VsqME4TbBvmumRYygXqnfTM5ax",
  "key13": "2aAjjEmUJbxrxujjoyPCDnU7QMaixRQmyJijL2A59JniyL1Fdw9aGWe2LaQfikN6jXfJiskxbbBJBDc2RrJyWX1u",
  "key14": "3y2npLQhKZMtNL4b9KRwYacoq1MF26YsH9rfe8z6RhVBdbDSS3uekJYn9AJ46SV7aJWYx4QsaTaexdbSoVCvbeSd",
  "key15": "peCyXo5TKafu3SGXGAmM5a1JDt4FA1eM97T8wu6YfFSynquoBEVigd34pht4uJ5u6emACjnaaGcW2aqmjbproE8",
  "key16": "A9Tb22nSoVMKJ7hVWiR4ESDr7Ga6YDZ7oGT28wi9enU4VZBUTZZ89BFYyCfz954keBL5eKuT61d4TYzVkB6RFAv",
  "key17": "3b7wVcSyrtx1w982FEHSgbtrSXssG71Hf8wsN4iHH2fm8gHXTjo45mzs9YkgvjTNTkAfpwwZtaYAw8g9R5pyP3d8",
  "key18": "2ZAgKesyeUagtUvwtrTTpyQtFfSzkF1eRGw75AM7FUeKyatZYroLCZNCfkWfVzAKnkRRSVL3QXSXL2ZsnenCq8xJ",
  "key19": "5dq9D1GzN5JEANNJvSKinopXo9YKt9NuEp2UvCmUuFHWtPqQYRh8FpcgK9F6tKoRXLrps5knjTYkPpbViUBKvZ1Y",
  "key20": "2DrodCAP4WMxWEA6bsBTBSEsTrvrQvE3jaSScZ7pXPu5DNYwZtRyK4nGJo7G96x7EgQa12nuCGcUN8Zz46qQ6yjg",
  "key21": "5gXrmtu5UrCeBci3gJYJhL4mY2ioGzH9MkvPdpNpKujFcJNApgLJwKNQkicGxnZ65VzGm86hB8WMDXNNwsckUNrj",
  "key22": "5DAeANB7obag2GWdeMLsTuHyBoi8Ex1TNDjvUoR7H7r29V3AwGjeuCLyjQxq1HSmAo8gRhzxBuTWc3bwWnjYzNfe",
  "key23": "Zj55fnG2B8eyokt3EKvPx18pjMqxybiC9j715DYeQyvcrmgVPXpJ1EWqUHhrdJhrqLJE5B3yEriX7EVcKMoRQiR",
  "key24": "3aVgni4Zh6g72aeAhjP22tG2YtAV9sY1WC7VgjmKKogSnH6ZhRuiQz4cNiDoGpmu29p8PgyQDGSzQNvCG18FyWLc",
  "key25": "2coWT1ehe9LNLgRtFSRsn8pq8tURwR91KEcqDDMzmJdySpjFnRShEDTPQUxiQ1WBtzBmiFoy61nzEAqC2ef3TpqW",
  "key26": "2BgczQCFPsG4xjLB2Y8EyJXu9fgARU456HWa6NaowhqRjQqTcP18c2N9zZeRe4yoRUtMAjkK838jC5LyL2Ub5kia"
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
