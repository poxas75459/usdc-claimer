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
    "3865j1yYntk1ZF9rXtowQzdeb2xXDWNQYnVD18Sc3Rt6YJMoJuQpUgZvrv8dVsWeZkVRFFridFNXv7DNTsrcw2mQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxvBTovHjiZsvumMaC1otXk2cknBFfLY4cWhy3WJzJYSd3pK173eQFj3DpTqdb2HkMYD7i5PEGnW2uNRtbAPm9S",
  "key1": "4Ti1aCr2ZvsUFUcez3YPRxEAauew9e5xxaSH9e8bNHi1X4faT9Hp1fK9NkahvTnkBLwv5x7yKJ6ddbgYSb7FpMTo",
  "key2": "4aNnoBR9F6EsYsFgtiAiMoisjUzkpKUGQfE6vWzM3H5f4AqhVUXEGeCtk4s7YUqz7aSH9YYeXSZjJfWxVhEZ3CSE",
  "key3": "2t9F56d7okTkuZvPFNCb5t8ixuabx1p6kue8pji3fpNENa9dH6mZCwySmmAGqvYUg1rqujMmHjzrV3Las1PSZZRQ",
  "key4": "2bNiPJEGQd42jYn6BcJVTKLgircMNRg5Kb66vKA6XWmyiDGxYLA2Xc2u3f6kZ3SLgfTzNp6qZHHK72GNpomZb7nP",
  "key5": "5bbnFnyrdFvg4wR1j4MDzxvzrnaaLH3kyXtWL9QskicgfkJgYn8Uz6BiKmiWxbNigQb15baMwHm6zLkuvegG3dWN",
  "key6": "3HJuTQhYB34TgCh2B1vW4wwSSGXC7Vt4Ng6zJ2AcmTr3ADp5VVnSkfJhmACg7ZrWQusa6iD9MHzYvTVBEfqmTemi",
  "key7": "3BBfHwHkQbFb1WsmmBJW7r8c2QabjcNztpYXrPSehMdm4Stpwupzgu5ADmR6uYbzvHnjLD3mmEXeKCCMjrnCzaTm",
  "key8": "3spfZjrocBWEKjA2eaSHmrgCNA1kRjrsyt8HrYehQu2CaQnkCMj9dvmpoRtwzZfSqxEkj1d6jSXhYNTWdP9qwwYW",
  "key9": "GuUvvwNHcukQ4MevuaycE9fAoApY3E9r3boMfLmUchmeVZsvsCkJ35xXPU5HzvSjE8W7RACS8Ajj4LMkB1uJAY5",
  "key10": "3tVzRhNRoc8hJAir4Y9CtkTBkZyhFm1eL7Jx8HhHhvpUi36tenesnmMUbv3qVeGZtRCFCen2rdrk1z6HRSHZNxT3",
  "key11": "5jjh3nXzzDgsHSyQLRAK8U8kHVY4uFyrZNjNEWAkkVDCHSageTRoNx8hPw6HWfU84NUf99tQZmxx1KTRSZaMWR5w",
  "key12": "2DZUTXjoK8qQwcBbnZkezmr2v7q58bC7dAs9JKEkgV3B6baJsbjztHd2yenULkcnsTEBodRapjS1713fM8iMdBNh",
  "key13": "54FG9gABcX5yakKw1v7ioYpsUFbk7UBBj7SRRPipub8b3GcbmccD3GY4kw9Mv4VfhM5U6CXpAsKuyMBcTFt2wdRq",
  "key14": "2V6qNAzDe5GibUvj5LeqaPXhSbYBM1cyeoD5Wx1MGKLDKMTpsCPhJEviPhLUKAHVZTV79xsYgdk5ehEQyM63q3CQ",
  "key15": "Dh2fLzpgSkHUPdYQADrzn7ZX8G35P5xHJRwATy5rwxVnWM5jxj6u3d26KHd4NCjyzYqhVkYPHGbdRMGaAMRYGtC",
  "key16": "4D7DRcfZAakC7FUHoTmTHL12dbeXSbYwmN6c5RY4vw41Qitw6CrBy7hQkpRZdkEQGJAaNfHhGixr83hi2EPVWYV4",
  "key17": "323Qv2J9DB6KUMvgR1G8ftgZW6oZxscPY6RJL4DLPkM7PyRNoXQjPVRNLPbPXj2Tsa2uPCoGmJFS4TDa8NbCVQ38",
  "key18": "VjftvmkmorsZ5QtUd1JegrkA6KrTtB72sXq2ELNbqbdPERWNtuzSyMohxCkHsbDBavXQ7UjhXJVjoqtDcG8CnBs",
  "key19": "fbVrfQyezJsHMt84ZC74bgYxdv7qiTqDfJKPsoyXWnLT4if1356edtWMy7BG6Z1dvgmbBYcpiaw4om1sB5J8gFH",
  "key20": "3ieaVGDwA5ywc8an5Z3N5xN8xFHPkqJnBoGsjwiN5E96csmnnG1HA1gpf9MrABFuBmKgwU4jYbEfugGA4Aaof6gF",
  "key21": "o6ZgvayJg27rwFmT7NX1P9BxMPwmQP2QwCxAKo159dGNt5JjZavYsDWXxUja6XAWPWu6tHNewRi9NEUHrKWAfY4",
  "key22": "4i37wWApfGDKFLoJkjFVSPP7t6nwFEYkGrbQprdWq3o39ecwTVMf9bowLvk1jQtuVhvwCa8dzjGCHz71PZRZiNPn",
  "key23": "5T5jkRwUEq8DaaKVT4BjDPUtgCbA6hh1GK8aiZEfPkJLPJ4TEtnYxRfp5EeSFdVPpEkNccgxwfTwJNUzrvCt3fH3",
  "key24": "4kXJwi2LNfndL8Tp9sozUKd1Va7ynyCLYJUqaWYr7nvV31uKtM2aSp4GrMDBgyFTC9dxQzCRCX2xgXSgZh9SfNmG",
  "key25": "2mxkdpRBRuArMsFFSQjAYq3UmdRBiMuEhRWEZfxpX5Ax3fURx2t8XoCDRxvRF1b4wgFQNErirwAoYggrSfmmeYxq"
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
