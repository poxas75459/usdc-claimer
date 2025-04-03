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
    "625zrvsegc1x9GP61WkDDAmDaunVeoQymbhPzpKzwpCBbqkTBTEEj7w7xPhEHPRmmvaNYHhBPAuM88jNZDx9VpMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMNbLbr4F4Eyu8UeC9yfmq4jauV4qmF1nJpHovt6FzyaoHb5jo34m8dcsYr6KCWog9kzzHT67VrFBewh3GFozz8",
  "key1": "3xaSRmxEYqF8wKej4QWLFdW3SQbFwwYQCkk1sSkTUGn2grsNUmeHvTkN8xTuXFgMngLmPwdCfEFdvPj7vzZTeVcL",
  "key2": "5KcSV1qJGHM72CKZpxa1sDX7LKCa1aQGyGpX4ndmaKbE5HvtLMcLRUXzsqdFP8WtGM4FVRGQoKD43k4YftNMc1BA",
  "key3": "5gZvTBvBJ4HjqeAbDu9NkfHM943n3wAjVg2oq52S6sHi1Zj1EGescKJt2hTZAWsGkUVYWUc3v19SwLyvQVLgioKv",
  "key4": "3AbQoiZiapLRXKkeUxFGh4p6ZsakoVTvurYNNq3H8P3osQJarAcQHhGjovYyHEqZZegMzpCrPeivmvBqpw52Ca24",
  "key5": "2Wcpt7mzFfsqwfC1SKt3oAz6kuepZ3nwBK9Z4vyDWQ8VJzL5KgExLXvT2bH88PZAzGbMCoSeBU7q4To2gjQDqPJJ",
  "key6": "5wk8hdTmVc5Xs2wECnLeSo7FFNctzyfNXKuoETmfPqrB1sKPusJt73bCEvdNYTdQXUzw4hNsJ1pt92pvzCCvx1Fh",
  "key7": "kTcjCz9VgB56Civu2NiPGGfnmJUdviA1rfmSrriqYBubrm5Fz2pgsoxpTopChj7sePZp8ac96FBpFVELRqfHZ3r",
  "key8": "64rxjqtF9nscoGE3zhU7FPeUjCf8txaRb2iY1xR6b8iJfSa8fGqeVdtE5T88SyYXaiz9rCUhq1iGPBVb6KS1f5J5",
  "key9": "3L32JTdj2rCQMhyDfpdQof7uF4ies492CbQYobPUm1yn9ARd5iqS8963TqfcuWgbE5xSLs7CEtZk1zXNYNAFC8i1",
  "key10": "3AYLWfWjydxMW63GnLfejSpYE661ppCQi4GjogMHMKy8uUi4P5BYYQpKUP16kRAWnPisxiQdhnsrGn2fhpTyh9Sf",
  "key11": "4n6gP657PtUbRcwSamYFu2wskDNnZgMxdBNCDdkkDHijusi4H2mWn4q3FSh6CPVo27x3EMHqn1P5BkCLA4TFTeUv",
  "key12": "2XC7azsrtNR4PhNeZgQhUyWrNTGeo6nWTRuNfbvjqXFtBpkppZ8PZZXXgx7w9J4femvBgTcTJaVw8znZQMqBmcBr",
  "key13": "5o1ehPiqiv3ZokpN8yMBPGVvDXafTaYffELrJN37Mf7BZJYrNa6uu6zigL6XMz5BuFc33yFv2Apb5xLddxvyDABG",
  "key14": "3pgz3jTWyagiPuDogKzYYMPpeYcLfkvjjy1TFeTuzyC1x9Y2h46eQLDcgLRfjdeYh22mLQdNJxVZsRGiN6FwUNHT",
  "key15": "3uhQa2SmeGuXhCmSHvJVVnpdYzxGa4S3wWdq23eFijKd7rsaqMTaUiN7ER1V7KNC1qtBuAiF1inTwjsm3r2r3kT8",
  "key16": "MhoTAQ2ZnkhohEmdQZKVUSLUo1FYSKeDAEEF4PS42MyFwb1qWyhggmGXyAZh5oCDUSLxVMQyvRzy96CWNyGwzWW",
  "key17": "47yDgk8SXZ3nWYiWFsLRqU6UFtYFCqyVMG1qhfETHZdHTWoenVRkLVVJQVr9ZkPCxB1ShHrfYvR7Ci4MUR8AsmPv",
  "key18": "28biZH48Z6K3F4QtexXZv174oes8YzKE3km18N3BWPJ5d8yMeWqb8hG3Yt5sqXZP4Lbe6sjsCkNMVXzHiME5dwHr",
  "key19": "5VTwSATh6r9rqat5zJFCNiNKiSzazxB3vhKwVtt9jppVScm5Je2ogAaoNHrNpPjgkz5dCeA6q9jMhLbDDiDSgoCa",
  "key20": "5DETQTkvxai3scH5c2QwDTfMc6SURheBcRCeQjRcUZVcyjRYLe45gL44aqGXoJcun7VDrw5UnNNGXxF1PBe1v6Fk",
  "key21": "i7fyPwqb7AwpFJvjD58CGjaCnLRaJtpSAeZXE9UGSBz2Mo2ySiBY3ENimSmDjQQ7pfi6tiDsvUvj8uqSyFFd3uZ",
  "key22": "z5NGrQndF7dFvxUF1VpQH6ZrGKaPCKmR1L61Z2eDX87RqsK6jj2tdDQy8TUHgQs4qnnEYS6K6Fr1uxyS6gmZiYD",
  "key23": "57oJ5oyKwSaWJ4ZJCzwk5DCKdcVNBdm7sXexnaJL7g14nfKdGJJ86yQmrkg56AfVENRUEHaXVEv3A62eWSq1F1km",
  "key24": "4NZyBLruQGdUZzN2E9TKuAC7UcsuM5dKZGHdqLdduNLWe6ysgFiX9VGWZLniMkpBCkCvM1Wu9bk2wkjARRMVWNrx",
  "key25": "3aQoEgfRLt8RbyzpG8uyNEeYBWYxjbE22TMVo1axcCwCUVfNamzVJKUNhiRubj3Vb67mPj5Epa83ZBctLukA9BCP",
  "key26": "2sR7jdvPQizUxY6iNvq6qyoHGrSCQszGAFHzgYm4dnysdvwRjJpASck7LZjn3yVsUrduL5K8kPo4qQwngcXqwfZi",
  "key27": "56x6hoNU8H2y5DXsg7t65PrejZWrY3LaQtXHw7b4Bbz2xikuTqL4oAmD8tdGkyNux2szDvBTetXA2a4MhYcnRTHx",
  "key28": "4ibyzGJ669f6J18BNSP2XxwDW4f7C5M8MpzqLXZAvhgAWDdFfxbHVKLvuroJ6rCGMhWant2mTQmW6F4RL13djrqi",
  "key29": "3PLmCvFG7DykZwmewH9Me1TbEGoSKbUDTgc7GhMjjygfu8tNfvK1AJb5dSG5bpnoigHE5mSDNPXMygJNXAtbbKDD",
  "key30": "3ffjE6uquwZBLoesfyXdQ1AeXiG6s2hQwy1EBVnGPGzVeh9nrWbZS2u6m5PvvYjdbbBvtmNZYQgXu3tRkS4SJQxb",
  "key31": "3qG7HjJEMtoDuQ5CgNtTcR4zVmvsT8z2wJheSQ8CMNdG2tPiCZWpW8ZF2wL8aDkDVNj2tbw5mA6mfszT7vkte8BJ"
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
