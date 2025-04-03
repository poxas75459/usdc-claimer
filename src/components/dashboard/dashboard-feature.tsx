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
    "w6DQE6HiHhD8TvdJdwnxamj3F2KkQorQyt7TraK18qGtFtPSrZ7jX5DWimg6UPTUnrxRqLStZziBmH7mRerpwh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CGnchwAWCqQiNVq6WcGVFwFDq8JfHEibxyUH9eFHrCNcXYgFKZFNRsJSZQqBDH8yBHD6UW5TCWLAKGLtF1tpAqF",
  "key1": "43axcxpqMEB3FXJ5nbayeTWcFkKwYbhcuAoawgKwpHz3QXSXRLi3afwWR3CDNZvBQmN6jtP5zQsrruaCQcoER6PN",
  "key2": "5VUgUCfGvXYq5Q1DNowLTG9UzAXpyQran8GuHwh9PQhzHiocu1F4jG3AHcomPJwBpDe93SJB5bMrCms8Yn49y697",
  "key3": "2QzDrqFex8YFVXqjQe9VXMhpxDo1AdCT5STDVaCvqVjAX15ivEWxCog7yKeXCj1M9d5Zy98R7jcdQsUgxHoHt3gn",
  "key4": "44KH7FauKpvhxjwNwKGgxrAWyvxr1tbwBdsdBnT7yiwwfzevosVFQV6F1eqTEBfPz6DCihnWzeUAZtj6qZQZiyCx",
  "key5": "4bDXXA3udxnUYk9uFDbrBFEoCwdupwKyGHtwrXYGQLEc4iMupg3B7uAjKVq5yYEUt3W7bkvmRAocszneX3oz5oe1",
  "key6": "2exAjLGbks5tw4q6mdd2WsWWdQExvZkSwvouX9iXLi5hECLcyN5VZrnEbSHW8okokthtoZUMbi8iBT2W8gFpuMU8",
  "key7": "2M7Ckjtnrt7yQNTEFw4sLKcjBEwKsjvNJs5xPVGrEk6weYbieZDDJdWKVWUYihfQ5wKJh5hmD995FBJ4zqNLnDNn",
  "key8": "3kEGWiS97duZ8kGcx3NgS2D4BiLdzdohv5zUBDg5AHa6voLtQMXj8iPpxztNpkqnHvDLUtM9eRzLjc6AHLsbzUKj",
  "key9": "nz2VpAGtSKGC546u3pvWrGcSLhJnfzvrKvtq2b172HnGw1Yde3SNZohzCVDePh5WGZ5jVh2zngvpwxS7F6CFL5i",
  "key10": "3h6YeDzkPJ6Yd2d3Cyybj8FPQZq1m4HJ12PHrRxRZGR92Tg4zyivf3ThtJGygPjXBL4yRBFpSBHJM3unJ7ZY5bbp",
  "key11": "5QBGXdKGXvHCvYDoJgTFhQMf2kFx62Rs7vhFeCxwBWjS5rGZqNVBn1fRRcBo5ZSdXMmRmtp13S2faibztY5YGieJ",
  "key12": "3a6LaNGbxHMkoznFbLQDNCyZTq28n4kNjZuEcu84DLdHgkoUZiFsDgyUUktiqdWYUAcb7WgVng9fhpEYe3Q3xX3C",
  "key13": "5nnGizUcLGek3SEtKYypRT77JqrL5NaRM14WaS1AohJfAXXWLwv6KgXgLBH8g8G73ABTuW7sLZQuHv361mF367FT",
  "key14": "3frGa5A2fD3Mp8pHpMq8Ubw5R62zJJUJysbMV1gho3yL7PbVmUDE6gA136zM1p258Q4rBbGC4dfjs67WJYEoQ3FT",
  "key15": "5Mf3Pd3TitCPVFFHmMY7d3zzWUXhfJK2UBdvY86dkYuwZNStwALrMjPyPQf2gRzoTUKNKx5USNBEBHgDYV629Yno",
  "key16": "3JczyXcdxLrzZkYSYEQYc5TvcTeU88yKWgesVtKtoK3zoUK3YGhP2YJ5saa4LrL1NumHCYoU75mFxMUb6LA2R1QP",
  "key17": "27jVo8QFzhqjpfa3YKD93kk52sVTaZdaMDZRZfbytZeCTiZNetsbD8ydsZXGqDtNnjhxFhi5A15nYJG69c5wqpbW",
  "key18": "4cqyxiEKzmGbtScHNX9Ja421VjHTVGBcXY6oRL6J5nEd3vGFpp1zV6aMg346pyTW6xWKM5tY9ZZzhL5GaJnhXXhi",
  "key19": "4dsYF7pqGLMRbEDBE1W2io64iQHKCqLXhbrUvNYxZk1EWW6SmcHxc2o3XioWKo8VadjXwiGnk6MW4PBJkMAGZ1nz",
  "key20": "3d3aw6UxKJGCwHP4sVaHEV8PTrR4uRDVkFzsQLHwnpu17j7Y9j18FvDLRWL17rzgFfmFHeAXdH5U84Bvi59AtmRV",
  "key21": "3zbmCi6vCiN2873v55Ffkw6xG4Wy3D5DwwxLCJR69E6MRVTU4eadV9HpkeLoqzFk13Y3G8P2PUtjnVHL9P7veiGZ",
  "key22": "45xZbi3ggiHSd2KA1RkXtdb47BA1yE2qPUZho5LLyoHYvPexXhfDK3PuUp3LuXiaUxZ5eEwCDmrnKDxU9NywFok6",
  "key23": "28JHF92jtcnhZN3GCFFTRRDRyhsmrfrbYPoLqQSBiqR5ga3ZPEFS1jvbKyWUpdtVNUxmoiRfdfU1MUCCWyDmVWKu",
  "key24": "4N3Jj7avuyGbMEN5VQmFkkZ5tFjw2oCwbhf2iTyJrywjArETfWR8bJat5W7mk7gakae9fSyRsrp9hpyniuoery4o",
  "key25": "2aqKxpWXTYhMCs2S6ffzyqAzEGJ1tjaD92rWYmCQj6UpfB5pMoYE7ppKyXhpDAURto1sWd9HjXqQpe47JPkY9D7c",
  "key26": "2rfZXAPe45G5HR3eXyZijAKoM6LBtDun77sjBrBimiFpKTK7uFqY5bViRpncCR7rmi1MtMmXKNk4yGkfSPYahmMm",
  "key27": "2xUsJ7kPPvPaPECjNGyXk3LzF5enMJ7RCc4CYCnL3BU6M8LH4PQUjwKE5hB64YHLpvhKmM39XYbUui7V3LgZuo1Y",
  "key28": "5g1gSwcknfPvukJnSLXLJssUbDiTMMXkqq2crrj1qhobez1wYYTzgPUHHBDdU2ihya5Z5GhkAN3XQA2fSDhhjkpz",
  "key29": "5xHtk1LxxpPvnJjACQewHLeEUea3kxrgGfnJ3mPfqJCxANnP69Hm1a8PVxiypcX4D1FNvryJiuXZ2XXhzNAGLyG5",
  "key30": "NXUujMtabryjC3twKH19HiGwKFu9RhJHEHz6hdgCfpSDZYCMdY1XDK67YHyka9CYc8ZuB5CsBWWvpAbfonGvKmR",
  "key31": "37nUJpz12egVZqMZqDFkqA82kETbPZ4ERU354KfA3pEap479BUx26QFuiNn6xoUrJiSUKKzozsjKdWL3zhAtery4",
  "key32": "xFhLVGLQdKZCpeP7RDitomC2N1ALW8LpY2Y4mfdGU8vrZiGxJLPkSWhVnf3PC1fsioFXqwTH8zmNSCgjC1sAjx9",
  "key33": "3xyFyErM1tprFC69CzgnYgCADsGVsNPmuwpgdtBiGnby9Ybh44rnt88bBg4eDYzNrpvQeHq9vAcg4Pq8RXSaEKwP",
  "key34": "3SeV7uohy6e66JcXuoVh1pSpZA1Nr6X3KrB9dzXDtbUwDmmpP182NzFpBnXa4yHaFqUd8nMNUe3ee5D53e7unj3u",
  "key35": "3zvpUMFCJ6hjDgYbx7tk2W5xT55CZr3uiYgQXwoKoKDFRDAsapo8wTmVFnEMq5GKMQTWoeXb6LUoKYm1P6St3xn9",
  "key36": "2iq7mzEEXGsUuRYBPVsxSMM6v8M9uMxFLuk7tySmNMSoZncn1mBzSYP9LfEN8AGPEUYx9Qnek8LJTgE2NfNUMCwR"
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
