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
    "3puX5timUttbnYcC3YsQqJX4nc4imdzvyLc5W5ERY3Sze4gGLmNZaeV6TdSgUNpt2Btcixbn4nvrvyU6Rdmksuiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibHEEZzsK2yue5YyE3mYAVPKWMYHsDvovuc6tyemnjULHG1sKAmcwGWztyKJUubNKUpk4MK162szf5K9s3oc4QL",
  "key1": "3bvxwfDVV3oZxtkKDs4NMiKkxRnVXxv3SD9VpHygLpGDWW2yHwkqAabx6wY2JBQ11w1q8SZed2rWq288pw2UraxE",
  "key2": "2gGjBGBDaSYHL5L3y3J37MqmizZzLphLaN8rTRWUFLXiEY8JqG6CQVa2YTodZzcXPE2eiN8HnauuJ9EzcHEwPJdo",
  "key3": "29VxJimLEcfYdD4jSniJ1EXePVerSQH6N8XCaLbtrajuCbg3JemSFrvqEFGkMyaYDZJTtFowjTz7tDe7N9PNHWwy",
  "key4": "5KfiiJZb5cyNxkNkGo4KzUYgjUPcDQzWceZcS7hFx6q7aKSi1eNvQtcTGhNsZtTW3e3T2mec8iTB3EtA6NfLURwr",
  "key5": "5fd1EaoDDnUGQWJTQ4uSSaL3AtoWNt99TAQaQhYvqpfgSgswTWPSCCfwT8MKsZm84kssXNHwXSD7UpWWPc5gBSnz",
  "key6": "SfWuQwJpmBXGWzCEF5HLpPMHfoU9YGhZy7cdsGFtajpDbgpFLq4nUZpDXMpsmKcAr9Yq9t1pZ1NbTttwLFx8gKm",
  "key7": "2G5zwFCgCox7Cp6tW8r5jCoM8u9n4ZdhBnxj7FByu2khhpSiwu99c94ASGmmkaQBau23WvCnACWca6S3N51gwLBL",
  "key8": "5bnK5LtRyC8PJsJjeJ8vSJQUg39ydxmopnVj5uRVXCY2rYySexSrZabMSrsm6BQUr4TC7iocFUJGW1h3TGNai2Yq",
  "key9": "2aZ1JEM7vC6VRKeKe4kfnwW3n1jWkK5nG7w6h5QU5oUSHaNj1g673qe2N369UMWN3AppF8Yw472cnvuZ9JYcwSom",
  "key10": "2NvqLB2Ex9PVgN4TycZoSs3n1MwejoxrES6RyvAiFCbFBMc6mX3u41n9wWm61A5ztHK1cJDRTNB9xQHRLKHC8rna",
  "key11": "3SbCB8nvSaGcZSM7KJGfYiFUp8MYHZMaZsgKiejLWsV6hjPrvFdvyawS6v7DZvuCujZYKcqrW6Ejei4FbsVjf9bu",
  "key12": "NnPqMbkP2wGvqTVVuvWPiSC1dgFuVW6anGGLg3iNCVE1pFEENKUNh34GS1nG6N8dDSPv9TNMgCi4E6VpLiQKFJB",
  "key13": "3KDif59c4Wk8Qnzm42Y7hXEsViqeFdU1LmnAuRUEMXsnLBS6KEfZdx4Cf3oA3QgyhUtZmCRpE8ccBcTcMe5Sk47w",
  "key14": "2Fzvd9RoHam7A9YY1UB4FQJ9PKXP27BV3hSqrVpK7u3J42sWNP8X5kubEkoVfNjTkQV5iTV2HJV4aZa7pWiD7e9s",
  "key15": "3jN32yhN62h2ezzZzWJnsH4e9K5mRw7DbmxkVCcTE1ReDSTLWvkiJuHFuPpyV65DnzKH5wi1XdneV8fM93YmaBy1",
  "key16": "4KaEsG5Nz7Eo9qUJ3eUBDrsKzwhiPK43KfzEkNzyBt6XYiAa62W4yKPogrk5PBJVTxTZbaga3wgZB4Le5z7FqQLx",
  "key17": "2hetJbuTQb1j4BWEdCKpBbuJsRhvN8vU5D7kany3XQoXZUwV5EBnXq9v4Qk8NL1bDfBzDgAbJAggvxZeBcFoyQdo",
  "key18": "jMfW2ZD5oKbN23dEQukBQaxykEkkzEtrhF3HmHXE9cR6uw4t3b9aE7way8yU61B1zfLSdm4QknTsjY64XkvXHmd",
  "key19": "4ivQhsf2Ny3ucmKds37Ppm4NPNxNAdvd1EKJkJs9XZg3AGKtVVcFfoaENm6tU5ykVZ6Z84F8NsoLvgDxjG7YhQcP",
  "key20": "31sVqdGYs5xm8wLHQyoTkDAMnqpWT8kmmptDvZXWMBTZVqbk9sWvw2BJGfRFDHg6wYfaaCQnhrcvAfyWB4hcBZnz",
  "key21": "249CBYyBLPDHa6SKeznKqdaJ8aAfPiEdU2vzUw3t4oqhKgqUwbD9cyBHsJPHc2tHHSJYpSBH7arM9rdGcobirUMS",
  "key22": "3DgYhRznqfmVKDuHr1UqvevtXgbbK8HpPwyvX4KW59WkyUtkoGrRcubtRbeJ7ru9QWb3vdprXmiB4XhRUyegSw7F",
  "key23": "fdUkaBABHnmPnaDiMey3fo8aJSfRqtQGTV6zTY6KfVJNg6ZGStbXZfpfBoWjQRsajeBtoWGkWSHB7cAjLMU6CK7",
  "key24": "hMNp7RsVpq9VSGFQb8pGo88uEgbF8RVvqZtyA7fq9MuZGXPSgJ3HSHbQQWfz7JBoQEBMWNQN1yJKVv4YPssHs9E",
  "key25": "2YAiDNGBb2QPoqFmLmTy3Vp3Fax9AZwL5nsWDUpU7RaiSu5BSXFHs6wq2bT1i61xsnSgNFiTuze8c9hTNCtjnCV5",
  "key26": "5vML3x4RcikenQ41feFq61z4HcJmaTSNNSv2hkFQsqt7yz3xcKsjtMEKaNdhqkHk1bxAc6W2U6iPjWqBSCGVCuMi",
  "key27": "PFbHjx6jomdTmJ1t8aiztN5SDYGthUkR9F811iAQLxDvS557BACBCV4sBXR4y8oP85mYqK6Qmu9DPE5ynhoE8V6",
  "key28": "43rvyup7ZAxUxiBEPP3tCbDGGRgNLcuXkBM7LaRRc1wBHxPQhrgZFDxGrk2x1Z2XPkeBv8FVtAYPKckMLKaM4CG",
  "key29": "fCowXFJ3478TqJM4fgvYctfBscdZXMM7d1v6JejxuoWzkFGFxiwLcqMY5ahLvL4qSGvfjiuvJngvrEHXRTWxxx7",
  "key30": "4VYufKZiQFE4k9GuQ9DaahPiMzYPq6u5chrt9vr76h6PDYXwR9owuJX3Bk1GkbAqRAbUmdv3AHpyCFzkJx8MfrGB",
  "key31": "2uZ941WaeVxVXgTVC2GqQZBYvqPQrUKA9Y3uKtyJUyeAxPEATEFbxV37HxPVkuZbkzT2TC2jB4nMVRKsBhVFwhJs",
  "key32": "MjMkdD22HJFt6qR232KWy4kYDezLaNKMHCcRgRezKQWkfHvvCPt3PvcwTAiEgu77W64j7i6pj1K74EAKP3vqPCQ",
  "key33": "3pTyLPWQTRPRAHAMTuSPtrKbyHq84FR5F2jZ8xwUQshVR6kHijtBNnvHeutSjEo45ie8oT5nyypWCgvM9p4iwxch",
  "key34": "2QroHm1CM8dbsuo9QCdaS6hQM9JAbbTKKjXLN8z6DYAPrb1vooRxc1euXzopx3fEULpvdQzEzws3k42Axz9B5A2K",
  "key35": "58cBERamHkUYwSZ4GbpxqyzvYEKUDfPH6n2eR1HcJfj6GrcUq8fdWh6iaH6PsXKUzEHPZktZ1TT3m4ZFmZnzBSoV",
  "key36": "2RzmaTWHL46Z9jmfKPf7X7bHoHFfbjpn6VYgtkUo4eojbmJbiYKx1J2PKJ1HgdsSeN7zndh9YYWpdGGtY8cZjy59",
  "key37": "2TStoTfNBVHHQHWL87A9rPFB9VFSvsE5VAqvYh8JM8YZ1LFMrGjMySuNswe7Y6koymu3yP36wq18uHcmECaBkAFb",
  "key38": "2VqicRbqm7qY2ikdbWeunq4Vy1HWCiCaU8rdSXyjMqRbS7tnnN59WZLBDmmxPqhj7qdf6AqkChhCBsq9GPxmab9D",
  "key39": "ZcJ8L2QyoFXtQAqbNCi3U76h2TUFLci5QxcQPDxM6o3desGj2YAZo4o7S6iT9jRiF4mTZMv5wcnhmgoHywb6KrD",
  "key40": "sEDLf5s34tqyoDxsVVDYc5dCpXGcyJvcMdr8WLGoGZvcK9pGNh9weGHBubprmDBV7RhbaeoipHa7V4rvhNURufg",
  "key41": "5yVghqkYvntEW5WprpwWYTgzueW6XhD32U6aF2KD6Jd6cdVzHw1GawUzvDQBCLsqsJ6oEWV8scAu85sZbirwtaXL",
  "key42": "2JvnrVoqADK7oJDA2iaM9vmYh9HYa4RqJyJNJh4jZyPG2jKs7WTmRcSjZSbXrW84Aqx4GYPHGFqNdjVNJqQATvCm"
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
