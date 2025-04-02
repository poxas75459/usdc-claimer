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
    "49aNAq6c42PmdkqTcx4MsPFV3fmVza1vywwzGkTF68WZWwpj9T7mtHcca4znQEnRpF7FYyYEJQVb5rLnZeTKdY6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7JeRJffdTyX3hdqEtxQnTGjRiNGcbkAEbaRvmjvHj3vRiniRTptZbC67ZWJ253hkP6GFcikFxmFXYnEwUF4Lt",
  "key1": "4ExcmhUgtty3ygJ93vnEc4g1xhsUiEeS3vXzxEMzbKqwHigXA1j4GYgEgxxsyn16J3MuHBjE7PYVh7kHm9VzCyND",
  "key2": "5WgdqydiAAjP5c9HuehMTRn9hQqciTBNCZt8aK3snX7ubCpRhcDtRze3sQ1hSRJz24dwgkDAvuCbcNncTvJpnRyN",
  "key3": "2C8oB7yx9pLXLJkoiHw1y9dEwqWqBc6Gkz8VfXstauTNebxcjT7hcbPbaXj6WNWdoYwoe2f3ge25hZpCDb6ifojz",
  "key4": "5WHR3Tojjo3oa1advseBqkM6nHc1NpTCLpXp5rznQrVhxTXGCv2xhoZvBHLdSbVq4GaZ4cc4yfxthH1Eip9QqRiM",
  "key5": "212pPgVFP9P2yhgQsMMsyNydvDBRbPXDdMioPSxabUK3nr5VDtsxEuPkfhDB7ugicP8Xrpz2sQ99MzbYtFvUqZwJ",
  "key6": "437UZTFzEKUkdeLijCwnEjeRSfqCJshvWVc6VQRkzZkEF1zATJ1mhBhx5SvaLb8KqLqAC7sfzs3MuXzyDhnVC8AD",
  "key7": "4LFNCjttAPibgPLKVCCEnKyX6caBvt9NQH1bzWge6jwwrkSyiyepcQ2EboLEDFBiPTNrg1ZZ47txyursLFkQmsYG",
  "key8": "4ua2hwatAB3yGzXaM2yL3EL2BuoWewuQxSy8buUJFvT1zYd8Ef8Co344QRWpCt8zFw1FXKfeXowLRLYcw4GcziTD",
  "key9": "U4PDLYxx3vXKL76KywzGtmsK1Au3qLTGxsc54ZUCsb9hzyuDuJ5t77cUbtceiFt6SiCSKFpGm4fT6tpTPnnzcFH",
  "key10": "43AV7qKyd3HeQv6rY7uzgT8n4MPVb8DcSEFkwcprHBj6TVF4gdNbxJJeJ5v9GaSqBbwDmACroT1a9EZnomV7J2df",
  "key11": "66a1iduKvQ9YnuzjrMkeBo3czvqNGf1k1EvZ3Hi2hfvc8chw7mX9yfZGsMoRGxu7mdXHiHzNu9FRgy5FDfuLFoSA",
  "key12": "5XMb84J3v8ttfP2Mfwp1VkqQnAA97LG2aAip3sYLhcXFswAHMbjsQJmcvy4M5Lj2m2P7UDMjJqTnXLebUm2mDfeg",
  "key13": "3rAenjEAXPGWAjPuFf93M84hVaNSsabkrH5MGh34oS3KEyD7THA2miL4Hi9bhpg9zFLKsEo1oWVbat2xsbVHFh8K",
  "key14": "52Sdpuc2NZjmh59DWvDKUzjqYvwchnMUzWDKrGRFSimP4bFwbaEaToVpz8H6Gm7Wr41cXVxNbcj99cxq29JTagKv",
  "key15": "3A1G6rkwVXDSKkxDqgiA4UpV1pDn7uoFtgjHamKPh8LRNDkD212keZHZ8eWrQ1xFtuziRfTTJWfs3JyH4R7dVvGJ",
  "key16": "4JrPoemSMbiNdTY5HkebpGxT8TqFmoZmTySWju3cJT3m1HRcNgh3qFJg6Lm2NCb6KyyDGHyDTs2kxfaSVLFt2tM8",
  "key17": "3k6XmH1UvgV3snuJy6JfLz1r3BahY5HQT3See7Go122KQohaePvJujo1eiyaLfePYeGXhW6AapmDneAGmUTvzrXR",
  "key18": "4hTy5xKbjfN1v5EYR6db8NJmnC7Tue8ojbWdQvFkxgMfvzR6GSwVe1uFmKwZojgPHByk4GfCRKHE6UwdrVeGq6zA",
  "key19": "4nUdhAUgBDiW1DsAaYvVhNjPd6BToEDHNUMpJuk4CnBWqmoJcncCrLCrcncJEJuq7ZgLVsXpFbM8A5irpATQxAvT",
  "key20": "2m3p3Tf45yX6R6g7Nmb7c3QGhzeXUbxsrmDVknnYmMJwgGdy5Aa4ZN3mcmhsHbYWLi1AYvEGpN6nwF6XMkamXEFU",
  "key21": "5wkaMN6o1ffFd9RSSV8TP6PEDN5kkt5CT85diepQWBeYCfEQrXTkDtwxcezmWFJDtVHX9s4Ku1GBuEF57qn1Vou6",
  "key22": "3FtCVhP4D7ZdXNZ5CJLKRWebr5rHY6jehHF4SVZHSK1hV63CXE2k1t3QuQHzrKT7JbLSNCUKH2XuLYM182Kfuq2",
  "key23": "3S899gAoDW1xcsCSodj9dY4DTfirFB5hBi59WFYZhUyVRyjacht8UGV1GFZqQ7W9tQvDEVxEQ2eqMYK9WADcGd59",
  "key24": "4Jjo453Nv9gxA5XJsayFS2eXLZv2RbZmcG8nsRoyEeGFuWLSjwqRSfZrjs7mMqUjGy96LvYZPE99mghvoeu4pyFZ",
  "key25": "KxePYFf39G2KWv9CbMKsjJ9dCYhR4o5qi2z9yCXrGXKHX62ffMznywBtS7R9LtzdptMrZcYXaKP6wgGhbZa6g1T"
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
