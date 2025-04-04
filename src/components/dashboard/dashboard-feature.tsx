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
    "2tHqyRF6JbSxH9p3bfYNAcgyADwrNga9QBunjmnobiGw4CdwjvmVqdDrpP7QC9pmTKAFv4uuRq1pgM328iswQSEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fephqKi59YParm3PrZUxuH5PtZ1qXJ2ZowTdML9veD8dcHe6xpJKRoAycTNyBcQJYMiwcnMBr2xoKPaGqSJM2ga",
  "key1": "4KY5tjj7F4TxF5VA17ewo5amzQNmu5SHb18ZXC7RwxyJUzfvHow6yL4TteuAjmx4YVpyWgcsg5wg8TfJVJ1Tdvss",
  "key2": "3vkLJHoNrFF9hdZCU9cfaZieXYDPCWuhScP44JEnGggaVcy6FuGC76m31uq98PgU5KrMF7DBKGD1Qxp5bs9b3Ydy",
  "key3": "3pU5H7potC3isxFpLA5j4nBQBasv8cq9VqCYY6tcoCwkZkbUtjvBthBmggErThgPD9rLkhaAadNut37sBSr7o8YG",
  "key4": "j6W5U8vEFvM2XqSzoommFN7d2acCfAmHZeBzfqeMByyR7cpKmoaQcahaJf6EoRXhhkZ7VRCM5v97R9zEyqa1qg9",
  "key5": "4gYkREzACsB2qQ8GBXhhk1uzS4pAWE3SohS8cpQt771cx4nfwYkeHLXmvADXX64k7GYcUpq15W3s7C5S7KXfi2uC",
  "key6": "3FZ2EiLLt6gYQsskCyWPASQiSzeEXACB7GZWVNP3UTxP5wE9UA2vFA4vT5QKEmMc7T8vZqZcgEkPbPNSwZwmc7RJ",
  "key7": "4NGj1fra6gnYUJKoaJUB3TRN5g39M8zKGdNL1S2Hqu75B9qd9WUku5SJPbzmqnSacceA4mLTQc35T7zZnCwJnh9x",
  "key8": "oVdnmQBfWJVnbuQLjN9AB698DFgEwQEmCLWD3t8i66vggmcMabXTWaH4ydNZLVYwANfZGPaSsv6zQrJynJ9dpeH",
  "key9": "G9d33LC8du9CK7hsmQXAHLg19h9Usq2yQM7yCGrB4ohMkqf4HgStgsh7GNC9MVpLJ62cJAYUTpMtvzs3X9wEHez",
  "key10": "2mHtG7iN2LRZNq4g7t8uPZQAQQiR5XTfJVAmosG4v9UqPSE6GgDLQRAEMHQtrbme3YoW9NK5skrHDRXg4Juj7V4q",
  "key11": "5rtBCsDrwxxV4fZ6a138DcLYyEbNd8iQZ2wFBRhD8HwCuZxnsdcdNuwtpfBFe2EeFdMNyszygucCSVZQJ9359auM",
  "key12": "5EsWEKySGFcbWELREPyvR8G8N86tec3o2U8yTeABpEpAzaj3DqssU8B22UnXwS1hLZKu5e3AJGmzbVVcpcYg3WtC",
  "key13": "3h7z62CdFn11msQ66gexr4qR1EbzxYyYoJgM17Dovh66TkpC1C6SJyYZhFFJcFqFa7QDNsjNeRrLhD6rTuSeJCC1",
  "key14": "4UNgnwtehGjKeDJy247uW5EitBXurfskajfNLVs1yvZ7hLgmosTh3sguSYh6YE7rbnQCCmhpqbWCg6SHEMDjrsoz",
  "key15": "3My3MSzE5dYdVKK3xF2hQqPYFAij1owx1ywGpbiPRCMG8gjKQC1dqmrKKiUGbLdvDkDvJkqAvQzntXRvBNS2zhXx",
  "key16": "4PvsyGt53YqTiQ8WDN1b8r2w96hobJ2m5Yut7QELRjBXRniccAEVM9QNNkKASMfpif7AFtmqUgYxkvLKK8YeXyU6",
  "key17": "5BgRSGzAkhS6Ajoa7HhD6Tt978CzdXsh2MWDM9iQ56X5qwNCWKrumA6yc44Kq4YX2t4GvGhCGaBUgC3khLxhj85v",
  "key18": "AYcZcxdDmvRJ8qd9anKWvQDMA8rsZoZcwiaZPuFN6vBNP161qXsQAm2T3BC2rHLKZouUbiWbQehWWRpHfyWLRn8",
  "key19": "4p7rYtpQuvCqD7wsMUfQUoFZxKeYZfhrW3QANPmwzb2UY8bRd7YdTgFr8yzLzZTjFJcVo8vih2aXB5nT2myoX9qF",
  "key20": "3jvEKJHvehrAZ7whgQJtT3SofNm6fx785CkwkzadqvKJd7EwfpT7WmpFsZJRrSKZVhDapXdcj77sULZTi1DcyDhr",
  "key21": "4ZaewcKGTEcbiFGiV11buaDZoGPjDJAraTDAENfgwRwhMi31cPaAjdnuU3V1z8erEBmQf1SEQnpdAnvwtTLYFt6",
  "key22": "3nn6WEF5g8oYK1czo9j2jAwzZ7esm2a1QWYH91f7DG3KgeqmUKdSjrKDWsjnbFf2VkpDMqjQEX1dJQvowymBSChj",
  "key23": "3HcwBUKLhcLUzLg7rV2Ftytak8BeeXUnA5nyd8EtminQWgeQZEgHg5bBgZx7hKRAva5PTdWaQNXhUUxRcDxGab2o",
  "key24": "3jDNBiSuRY4BePrx83SDJ5TzUPdU2Gjv7Yb2q7ZXKgoCbG5japT7XvVCLcB2Kta2vpQUDhzTUUkrmYkpvyGhwRKB",
  "key25": "SKLuWqwXgH6S7A5j1NLDte9oz5fNgczCA2tHaZHWzyu1SZg5FLuVUYB1dBnQ7Jf4HYw6JqrVwxDspmMghdH3yMk",
  "key26": "4QvMJDddQQFcwVS2B8PsigCTk68qYk2mDSdYmDSHgKwPpRZzdCn8soouu2UFzhkKgXrDzu6jVDtN7kzRk1pu1gfb",
  "key27": "4HY7y6x2nPmKgvQ9GSE18Vb2q3pecE2PwrAqX3XPtjMppbH8LpXnCVBT8MDBKeiKDSG6DCAnh9iZGitnGfZhnbGy",
  "key28": "26ubv7GHUwxFfM8fGUReL6BVDQGtGtKjeRcezyY4PjQUSGH8wRfnAvi8yx6PxujZSQsxRoHirk3ydKBaDX5dcQcG",
  "key29": "3qQk9JHbzFQ5BaSzZc95HZ8tmVBXxbxHS7hQY6uFMSecGm8BWExdz4h3yQaUPmLdjyABKCBi9gyttE7tf3PMaLRr",
  "key30": "3YD4QZ2ZmVMGmMzu4Qm5JWP26a6zmuofWmsccBrPsxTR46cWcVSybaCMeQsBpx2jCorgbVbHEyR3d196kzPcQqrw",
  "key31": "23E1tKJ9WLtV8myQA2ZNaKoFcfoKHTmPTb8S7biJE5pbjcNgHmUTHL3E3AwFrb573uMEsdfDeiUbnMYWxUj7Lqjy",
  "key32": "3zB2SSfWCDM3EtsfQQNRfgEN5procWkLkeKYBkYomjTWPeieoZYqtJW8cGQ32NLajHQQK9Bcn7bSKDfsYTtLC6Xw"
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
