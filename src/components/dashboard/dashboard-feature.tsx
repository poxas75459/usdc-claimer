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
    "37fsjrBtoxF9yx5Kg5qaJVpQsYaaYoJddQtivp4GJF1bBUEt248t5A6M6G9bp12uYv7CS6cgab4u7TYxjZmFPhL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oRxGQFDjRMBpgSS49pTLF3jAHiLHiUFx4ay5wVPb2Ba2Cn5HQmJx7ByjBnv4odzdW7QFqcckjJP73cPcMUbNtMY",
  "key1": "bWe6Uy3ANTxTconBPDmzHW6V7TMEGRahu8iBQL3gCkVUdF9GBSpdWJTXqs1Tr7ZSQsbpY8GYNW6F2Vszs1CLqob",
  "key2": "4JxRPx4KXBuFJzmQBdqSJcjKqYyJwmXhuVuAfGwuSNiPDEE9umhqpyjzAcJLvL7x18xqsS9Uti2fsdJpuvhReRb8",
  "key3": "mhQS8P376YT5mFWdA4hBJeLzVaJ1qhqftYAGzkfwubfaEUHcRSwJAatMiosMYaSTvRBgqv1kYLp9rNA9FMVZVr7",
  "key4": "8sP66u5H9tLi2C4X1Raypf1ocyA72UVoSrpm3PAQUHsNZ5A63y2YzWhhv4DdZjr6vdB2db4tLLACY4azEXDk3Wp",
  "key5": "2DGDAGvLY2mY376GsvEckjSwnmVyiHv8eDQSYWCfjGUEquPuyrhqhR5Az81BXvX9W76a34MNo1x9CdfLsekpp2NB",
  "key6": "4nQnpTAZrHK5K34Y2mu9D4XBPBxtvUh8Z4Q2ohscwmt76QKqA8BS7c5CZFCxu21gcKzHNV537MxCkcqUhG8BK3h1",
  "key7": "BF3Zcn924rB9zCjX8wzYHtarJDnhdyzrCwcemeQQGifGesi2FJyjaGeS8t4vnbPf3MxQANVLc2A3jMNgfbQdyi9",
  "key8": "2UWQTLvYuFXEYhGnbgBcTo3oBbwAufcfePS6axcD6Nf4hdFwzGJftjVqFsDhg4iMphQ1TNRbUtNuXV8NFwX8GtRY",
  "key9": "EaC3wRCGzCj58ZqTcwX8v15pjn8We4iUn6BXtoDMQ7Cg7Z6cGCzwcpVoZSChEQYbrZQdwgEpgPTUYbNhf2iC5Rz",
  "key10": "36qUe2Ux2JeDVDZQv6TJz7HL5kT5zAPURofCcZ9QtMSiwzXypAryFCdBKRb6KoCWhQdqxqYULFRfTLY8Uvf6bxdn",
  "key11": "5YV8BkXLeDQDSJkw58aTcP1YLJbZHCRsjc7ypFVhPswaNgFSMfvY9TjRwLoBf4NBNU6NZYAWinopPrwwQGHv137",
  "key12": "3gGNx694A5w9chcxxauC3euaqQWME17w8vzWyEHKgjWAchVmqSaJ3ULUYnqyzUXiKZDuxsRnNZDoj1svU6xs2fy8",
  "key13": "5jNwbiRMaUiytuc1ZGKgmbnpGkeg2ZHh8NWxvxEnpPzhBBKHwaXbC4mcNGdcijbgzmTHPcKL1DUcfvP6KyHYbiPh",
  "key14": "5BfNNPUuUYwpxpmspQAEPBwf4feEpcfJ5nEJV2WyJmrQY5Tngsajh1J2bvDDxnKqzctjCXQDqBXHacSp8gQZroYR",
  "key15": "4Z5GptdZgcPb6K3rcZ9yHG3qPo3SyW6BP3YjqEERFEUJ5KwveunRHk3wsFXCZbMViasJ3sbwB9ZuVJqJrW71VFtU",
  "key16": "2SCFF2xcK4NS6QeLpMcoNmGauKBwDBPaPcVEMkebLn7iQG4an9EtNrXnHBpjmL4tbUXVZYQZfwnQ4tqWBs8hyFHL",
  "key17": "2Bs4jSYetcBQGqzQSgBmKPEJCKXCxc5KiMcecJGNM5npDjTga44EM7j3i4GHnY82HZrxfsz1o8DSmWvH7BS79eK",
  "key18": "3MahMMjsJmPshnTiYBjL43oGnnGkHiyYy8uVadP6pBisjEySgKxxKUNmB2pUEXW7Nik7JnqPbnz3JZ2NKXAqD7ma",
  "key19": "43zqbcHUk9renKCVRNvv35XgHr7JNpugre2gCgfMfASFvsqci1h8wUicW4QyqBvcaUR1kVf69EYCpC1M7Kzs624e",
  "key20": "KYVJKBPAZzjCFR3H1QT4fN4bNTnGTKZKXt9RPznPxPfanGnCmTgtKewLTuDRs54HdNo1LAs8JMvP3G849LMGdXL",
  "key21": "44Dqo38uvcsXS8CxNThHggG86BGEP3kuosegmxSpER41EA9wZfFhjWHbsgJ9xx98VAEjjWYfpSKqF12AEbbA6qm9",
  "key22": "5mM8scopYWrZfALQnUWtiFQHGvmbCeLr6mkQ6JJzwViKttDMxXCniWF1Rzhe6nE3WgzoDzSaeHBZWbVgKKykyfVA",
  "key23": "3X42bYw8AZW2GSJVCihB1Gg8HfNiJneFXgUo1W9SfzfWHmQrDw9C7e6pcd1T9i87YSEx5yEa3USi9EzgMSdsyptw",
  "key24": "24AFSSDjsELsPM4EiZPPZ1eRi5W7uobJm13ZZJU1bt7HcHK5cLLfBjwSThhqoYkgCaLdTizwpzUKAx72tTkQ5S7t",
  "key25": "47XbQU9s6NBBcunjEd5PkPRaM1HvVQCBVJXru4x1J8XS7ddxcwreDtNWgYooXbHYDMQvCKEyXuUM5dWWnKaPMGhD",
  "key26": "rj1wN34iA1C2oq8cdMeJffT8S1izdSj3WsjKHPefGNigQDSqfT7XvWucHUxgGaqkYQXSCqJUqHttCwxutFE5W2R",
  "key27": "4GUtmVkHF1omHW2J8foj299FA9ecMZY7ovCdHuT5ietBV5PyTDL4ZYG4a3o2pn5NRVU1PN3xevznuB4oFnbRhZ7c",
  "key28": "5TkkHbqSsNHViv1d1TwtQof9Jh5uFBP141aq7HC6SDzbH9vn7pftqPvZ51FyrAkwomeioAoHtXAWThWzLsfrqxPZ",
  "key29": "2vn4U5k4x9pQhKvtpkaX1w3fhKZDUdjk9snCqXpcJHQGBgg5nKyyu7Co6PudfDX9NgMfpze9LHfKV111eF2zWZks",
  "key30": "5hgfEXBbrzgC6SN6r5gcZj4ajeNw2DKofrvGmYQHu9tkVPD1f2jZtUj5Zbk6NECrbPgmCjLxHRiHVgJPpTAZtaU8",
  "key31": "9YQGRWviubnXvAnmTCdUjzkLGLzS1kv8k2HF5UineQdvpFUzHiPXsf7dno7F8q9jEWufQXpsNxTrCFK2KemSqFn",
  "key32": "38cWMAo7qegwv41KXuAu6JPQYaGk6DoFyTfLXi9BfMf53Hrzr7QZdrU9WzmBQxoynKURHvcobM1A1U5ewCAbRqx9",
  "key33": "5dFqXo2FEpQDDMmgUGvYUDPPDPdyLtXjXADb3GLUMFMHvE2G5LAzPRAyHQtVfEB9v8n2n69gqdeZVoWR7g4uukbG",
  "key34": "49sJxmG2L5GGPnFjo4dfaxnbHqk75bHi3zpA6yG6Tizjw8MWXSJLo4Vh77q1Q2UeuCUQTV6h1ctzXnvWMgn4yfyH",
  "key35": "4pxLn1oPTKzSH7DtSA8Nx7FpeQuQfHQJkwAAGpRrD4qdhkVfYdv4WSocFoSoUqTgqdhyNCFLRechE7NeyDCVZm4N",
  "key36": "41UhcRAfrE4WLYezBkXKLkEmGp9FMFDfyrUzTj2LunB9mZ49kohjAPiy7Smacx8R6HvdhCmChCE6EVy2QsuFDg3z",
  "key37": "2Gu8MGSqk78hztJNK7WiR3p2grmFKZmEfeai9bdGGtGtZ88SrhXMH8NkJexh3pyByYBQzBfirQtr9yEb4PNaf4Re",
  "key38": "5sC4KFf8R4wykhQemSmLCoo6NxNajVftNh9X3REo8fCnmRMQd1gjRZchr5cQqKYsCCuzTuDDB61DrDJyY61bo67J",
  "key39": "4WZUDB7vCEHQs2gyVMJwg3gQfbugMqJDvL4YeXBg8pcCM4fVQCgTCcUX4RjpuJNQs88cTo1QNZFSCQCEvn3XydpQ"
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
