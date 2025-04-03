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
    "53ioUFkuwHP79d1bWx42RLWN2EDCUwALsvu4WTuvLQXNkoC5YtABuQVnY87btTNFN2pjhGKcGNtGZydbp99C4JYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWA7oVKQsDU6EFiodS18PDggowtftj3gePxEU7aB9PtFQoPva7iu1AWDy8uPDKsA1sjwTG7qQMeMsRgUDUNZ2yN",
  "key1": "2znzG4qduTx1A7PNnypk7ZVevnkiDwQspVwPh8W9J2Wf21kR2aPvngabgxPPaNFPyeYbsibiPAHf4fPJ5oeNvHyU",
  "key2": "53bGfN7u3cQECatkSdgPx3NyqQuUCEK2L1VbNXSrVPAHh6u2x6AMaTix8emVpD5AThrx1439pdupejPXBUw4SKCq",
  "key3": "5Radzs9ymLgro8ukaqsDkrVMtMwTGrTAkp6U6E4Hdf6n9Uu82fnD7QWczotBTKPWgfSnEnozw3va2bqDet9AADQd",
  "key4": "5iCSAen97yPytY9QAGaF1oGFjmbdthzJoAvk83dnvm1xekwKMBbCydN43Gdpptnaj9V1XsJu6z8UEdvtAvKpqmKJ",
  "key5": "4ifKynYJK5WTqrrTJDozvURtMUj2yoGbHzyBp2Lxuy9LH5WWHR15hWbUJncQbeLMKbKdshYGygXn7KFBp3qSe1KS",
  "key6": "PTaFfMSpq9ME6aqCSbgD1KFhgcAiN9RnYg32d4z9S5f18XTKLrjj1327rcFy4VMCDAfdMrpGS4ZtMbmtCJq6woZ",
  "key7": "3znXWtRxeXgU9B2fyrkQFTLU1dZEp429AFqK8yDqgURgLWnzoEyD8phCvLR8N6Fs7LSovKgfHfziteDSHycHH5PK",
  "key8": "22PfbT4kYpbq5Mvyja1N6rHxHgRtwK4KWeGrY1HHSGBmECR1sHvCsMpzzkoYaRsnmL33aQn3kngCeWnkDc9Mx9Yk",
  "key9": "4eYhHbt5HKYdVkEQTu5eWGdxvhewJs3wAfZR6N4XcjENPYxuEihRZaTcurUNfEGDxG2Tdycib8nB3fLB4uomUTn9",
  "key10": "61ThMd7ZGHD9yR8JmCcGHqi6DDjqaXSiTvYG9hxVDpe1qA1mC678DpD1JJgiRKhJNEh5oKmCjgF4gsZfANf7NoJz",
  "key11": "2HmUTsuCnYHBxNM3EcNgy2LHy5Rujj3v5vaUtHmCDsBuvrjswrz5Wwg6goTjBXnM9JB8zHkYt6Aq4hN8dJkogD6w",
  "key12": "4eig5ha3kr3osSCDnbq8Z2BEY8YmH4qZ24imayH4WAq7Ra5m8LspvwFFYZNcMuKdKMfPfqcdpFL6qCZVbJ2qCaZg",
  "key13": "2q2QrW8gDbBaP4BXWknLAoc5hxLf5FEGnjNxPhCALJfa7BycwS8pijc3TMQKGx5hXYwuhChDmkxKGqHGJBQw7YwZ",
  "key14": "xsX38PRXRrq1karBiY9huDcQiJKgTSvYHLeim3jsNiuxu13eaXedofy7EwMkAFsiu92ff5Tw5vUq4u23dNq3MsU",
  "key15": "27KQZqtHquUFhyRBo9yDve1o5qEtEpYZJiCZxm6CMBHWfKs6qBYCeyrJhKXsUEFVX57375wTzEYJbMttFFtRZHm1",
  "key16": "5UCYR9qUXVseTojZDPirTGffo4XvzzUYWZPGAZCJcm53iKPoYSSgQ7SyDDbnLRnVePhiUJhYgpTD2fNwMC2YWCab",
  "key17": "5d6Uw5oFzm4CFiyCkc4TWG6JgQXP33GY6m1wTh63DdofvQZTdAsxXYcXm5nPo5GjQ2m8dmdAZJHYnCxunEMQVg6g",
  "key18": "2s2Ac6WTgpFeZxs7qGjvBoeQKpCy5fkzSDR7U6q96oteHHEHHGb9sdziCYDTogm4rHaRZj35jP1o8Y1B8FnoRrQ8",
  "key19": "67XBuJoCxfPamMQKN9C8BKLGFf6QNuR6CNNzbqJnjTHERpSpCbXmooTrGnt65zR8Y58zeXwmrVtmGcYaihGhiN6s",
  "key20": "5DXubGrEUw47qAKBKQS8u8BY16VRCyrguFNAceUtPU5MCETjcGQNkK6J8gDzs7yyMnQgHqSHHveqaHsmupjeChuY",
  "key21": "EUhCB6WN4mL2LLMAJkJpkLRJSEbFuteWW4S6z3EuDjDFkYSEioTAe2fFLWEg3Z3BBBj18x99bS2MXsx38tT8bRL",
  "key22": "WYogUyjwtLrc4TUgkAxPEFtwQp53KZdHwvyfhsCtHW5rpmgVP3o7rRwu3k1oNTnE1C4zskZQR4Vn1NUas5bmRjr",
  "key23": "4XuuTU35jgmKzXidae2vmicqmBP6bkk4ZrGjR9YkYb4M2HSEDvro9qiTym9g5H1gRmpHvam9C2LLXLkAiR6NkCHD",
  "key24": "2i2JPHBpcmmspbHZp6rHdjwmXzTDLT4L9ZnWnFZizdhrJxmNJBXanHNKHY7op7zZoPqiE9tZbCuzGV7hcLfpNPQC",
  "key25": "65utPUWFFFMUBq4TCPYLPPb8XvMSpLiiogwY6Kywk9H6HhtvmGvQgP9ucf3ysvJAH3TwLfgzYgkCRhF2pLy4Lkji",
  "key26": "2g1DNtXqajfrjtEzpUFm556ZDwZLsUQdfvdiiYLtViUaPWqkg1ycUZRKBeRuGtpzeo7ovoFYTPUibpfFNTwjCzf7",
  "key27": "5hoaJ2cGKRXtt3PJG7K3TJ8j2e8kRUv6qAiKGti4pfSBD9ecom2UUry7jCGja9SFwXjvqANnoihByRL8YUgcHkHt",
  "key28": "3FkezrbiSrTn9SVYr2f8GS9rKB89vX1YjCsKcfNnPn5hMCAbtTP64Dmogu4Nb7mjzjBZb3M58yS5q77mCczaxyvA",
  "key29": "3C3MXvUX2KLy9BMqFHEsqB9ZRF9ohwB9fWaR9LRmmxky4iEsTPo5YWNFAAaDG7AZn38iX3UVQd2oRpHUvLePnMLF",
  "key30": "5CWjhuAcBpo5Xr2mRqw5SP6b8UbYJJYB7QxEM51sjcv9MLC8nP6vBKp2AX6Ag4RPNqubvrofySUXaTn7PgDeBpKK",
  "key31": "2NzDKeqFhYpbjyAyfFAUkepVpZpdtAER4EPZhqWbUSEyc7nkHivwYA6r2zejxmJwdFWqQ6mBt6FH3xDdiR8ymMWk",
  "key32": "5Q1cZs1QGtLg4ckX8bwJhm1ufwMr3ebxbUF52AGWRMwfmamVcjTKHP2zLmd4heDC5i5KXGZnaPTczxrr726p3i7F",
  "key33": "3vaUhfo3VT7vXkSQNgwjThkjQcfdxsUbTcvphGxF6CT1mYNgoMGGp1Jrie6BNjCrCg4xocbWzL88b9mcr4RCaHQ9",
  "key34": "21DSdEcFAuXuqUsSZfVEzV4bkdr6auWDT31uKTvqfpScQkTc9z661XxC5ACXn1aD1HL945PEqoaAkcYJvw6YW3gS",
  "key35": "59ZsvP3R38yVqFbe4C3c4Tg9VtVeF9GvcV6QMYThJBy7ky2EupWVXqvCaAqkfX2MjfX61UokbT7eNRR4L25Cf6jb",
  "key36": "5dhizQFpgGCEdyP6ktT3L4BXcZUYjzytXPS142MJbkcAREbjoLP1D26MimSQL4Eoyn9n4PQApYLNURa41Udrpbat",
  "key37": "2ipRQ6k26DDvhFizJU25Um8JFb2vn3qej3S4VS4BQ7NgQTmw8iVB3eoHd1TyzZMxYhp7GipGgfJ94n8jHVQ6YxN",
  "key38": "5mThodymNN7RcUNTeGiiwQ9D56qhXBqyxGszViyueD5nxyEdcxHbqfNoo8oghqN2Rr1Lom9S4xZde78A2RyE33fY",
  "key39": "5LqpXgUYhnvu3SvHDfTenZ77hqSCCxAs9ht3YrmaagM2Ef8m7DNJ63JfmUwdEkHFEYgsm6R6MkDAhZdU6GoinZ13",
  "key40": "d1g9F4eiVpZJr6bctHPq6bzqD3CDDjcSSFpvdN4q1SoMntvZTsZevmPLKGq3CDuJP7yJY8gdM8Ju3izQfWLybU6",
  "key41": "2SRdk4A78SbGaPvgNjWdoANcvtD7sVrCKCRR9SiFiaPvjsz6WdiCVDe4W5NqbeGNX1fESqhLr3wWtCejae8SisWt",
  "key42": "4UxSAogfWn2q44a2MaeWyjmdyZnToQvdFZTPgs48DLiPbB6PksDe3NNTHakJ4wpnhYVCJoFmDSE8gYa4fgPfZGax",
  "key43": "3v7XLDi3rxVtLtNNQ7gAot9TNMp1JW5N6aJaxWMJ9Lz3gaMyEthgARPvh7QYDLjExo24fXyv2Na2Lxu7zazFGWdo",
  "key44": "iqmeq3KMCvfVZPGojqUZT278pRmnUbTYcf2n74h7CKP3AstA1Eagjto1fyWk94zYcf6Dbqdd1yN7mgJ8JZ1xSxr",
  "key45": "3uAN548PPrdLPeLvY2nTXWYfT3ETxuYikAPsBM4H594mUrbBuLYdtrU2XiVfKtjwBufGKxHTJqfskPsz9ecsMZKN",
  "key46": "48aUdvqwdhVUvRayEQdZjAeJYxBnGSanf8B1NowGLYXv4t87yhtLduTpo9NnzHobm8CL6cUVsRvYaaAdFXq4Jt3z"
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
