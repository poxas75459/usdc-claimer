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
    "2JECTPyPHg8RJZNSKLz2HQ4ijv9rViJL7YCyRNMrkWaNAsHjLfcYBwNLYc7rKsPHy4iatDoKz78SAbXcawmJTWCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByGLmS9mHo3hdjs4fwAtNiivXwemqVEipDfrMNetjPJ7tk67DMbuZYM61pvZtL8xc95z9QL5wmnJz7PTmbzZA9c",
  "key1": "4WS6U892nDRvnpUiKcnMzmiTa8xtfxsx76Q6yBDzFgaJxkpFEvSM3pbWX1Jwe55imdtZs9iNF4h5sKsS9vgZ3v9E",
  "key2": "2NzcW1nBe6AAmLquS2otA7TxEzYMryPWEZGnLmfRwk6E4zc8N8ZmweVUUN9HokG7PFWfgpRpq7Qqo5UcW1EKDqer",
  "key3": "3orZ6ABsQcgg5ghXdnVbwwV6DjdSQuFL6bCDSwGnKwUAmTBATwa9phPojZTVVBr1AXNzBSV68n9g5GSPbZKdZiMj",
  "key4": "4q7AHpLmGQbn871TEGKZCsRfwjnNxoDhkGxEqcZEP3zdA7VRL2ZbM6AQuJu3dtBCoBBgbyh3zvTD9HLSxZwkyB2E",
  "key5": "33Qv5iUmaAWgTasq1YsB3AN2JEpemQSnLH8GaZvkh4KzXEifp6MUL1qjEpDq8AdzqmWkJkawY32fMq3ddvLV6Hp7",
  "key6": "5Rm8EqyxuqC7QUzk4FD4n9FSBGvG5tXJAop8gj731E3xk9Pao4xPKX4JB6o7tBduv2kAbTS3P7dWM3gGaaUBjQ5X",
  "key7": "4ZTsTC91szeDyes1jfwYCEQKjdpxDZuuuyHPKNtnPtJAp7GuuhU777x8EeBmseEdQCobeGyYf7F53fsRTmoLTp7k",
  "key8": "3NHT4kbE2cb9awTH2PZRwY7T7aBLc8FvDePV6Z2on3RL5ZX46PFiMY9u9PeocthQfrvGQqSK36tySNMEk4cJc4Ha",
  "key9": "4sanK65dczJtVFVgR9w2457fJ6fci99g3B7Z8rR3qcvoeHy1eFdu81yTQQTkbXziY2gptqhv199YdLWmi9eGZ4R1",
  "key10": "4dY3NiHVPLiEb3jqkfTdQxBSj3nfJegqDr57okyavGkvDU7FKoA9nZ1mTSE9Xu6LSBJzmK7PXCGVmfE2ScbEA34y",
  "key11": "2qw3tvrMLFUJVA8kSQyWAKkeLwxpZqmaC49ThVA2iTA3NKfdcA4xjCzPrmHr1z4c3LWPdh9TEm4bKYx1FexUY2Pz",
  "key12": "2vHEjAmWvhhCzNcvL1DGPgDbePBLdh8zgms4QNKFzyorDCuanATAdbaFnxpr9rM1BhuHhpvLyhwN2KWLHgofQh3N",
  "key13": "3fV8wryCcwFh436dTu8AdDhvuaP1jG5EJcuTkvR2gu5TPFqauqth1RFUHiKLuypnnzwQ7KkePa937SEobeZBTgAj",
  "key14": "2HckXFgCBGGuDsgSwHQmurpTSEYuLFYbaAdG3a2qa7RX9y7qxvJ1UeAJRxFBzF2jxd7paA7xhyDbBJ3s3dENdHxU",
  "key15": "2RmA291AamfvypAZBSPUAJppkCjWuXBAK53Cb86jUD5vzuwr8vCHDWqgSQaQn85jAU59doFUzvDjPhLcueKvbxxU",
  "key16": "4dbq5jw2yjZgGrrX5WXJssWnVZR8f3Rc1d1KmNKKisPvycZdzGum7opirKSRMeqzHs4DirGJNChqW23jGTNnEyXb",
  "key17": "4QNWLRnWm48i88J93misdvu76xgiP4Xa1UptGdxEXWiNfTNU4Veyg2JQ1Noe3f5cDoga2TY1W9aPQ4trtUEaxhb8",
  "key18": "4qUJVLJdLdgtVRJt3WecqjEV5QSqqhtvqiGSqM6xmCwMsdMQ7MixJ5vD5NoLNgmomMnrbn9YiGwzbEXYShgCew9w",
  "key19": "5dcBV3eL11asxYNGcFnbT2NsCfCZmw5s4mndFgktXBejbBFz7B1bsnazFC8JXkKfQV4TgbfthsFdCVoK7ZgcL5GW",
  "key20": "5P6yrvKktiDRAjquQNgvM56Nz1eK6SraivpEwDm7sLTCNd4fHht2kQtyMqPAuhRoDqtfXJ9MAXrePHZafa6GDjVK",
  "key21": "4pC2YLtNttbh7R5VFM7Q2aaAcTmP5fum75Cz8FMZa7tL1QGUcM6PMo9EZ1kqMc7xHGTidWWK3pCn5zk4Boy1DNX1",
  "key22": "2hv5xZaR5gyPk3cGgGQLf4fXKVtNrZT3QVo4qqWdQHgVvv5B5SkgSwJS7ypDF1KiphJ78uFmGt4i1xWKJSaUV4Yf",
  "key23": "3PfqBbaAD9BNQp7zrt7VqTUnFfrjPh55pZxZFr9U7qWL8QdBUBC4kGsoitagyAVv3JcGnN8KGx6zH4jfm2nyhRrH",
  "key24": "4W4t641vWSYqMVj3QKML8hc925aozBEnfxJo3TyyYxKSi4wMz1czJSHKbPT99GqR5QBXTfpNJLoe3XDSxAHDFYvW",
  "key25": "q3fF4MGALSpmLMdroCconN18tsEb3T1UcmwxGA4wJXYusXwffCDEm9cjdXL11MhwBCHM2E81V2fSYYDNkspwpJS",
  "key26": "3Lgn7FYPiEMmvrLaKNfc1fKG9CuFKxMBDw5H8dmPgDgri3ei9YAEfGuKjPQGK4nW5q8Lbb3tnJNCPAa1Pa8QDgqM",
  "key27": "3pw5fkRC2SZZnH39Undyt5UhX7nxcP9tZEjuMQEPmRMJru2dWkonFqvFqiBtiqxAhQJHbYbNiGR3ZhocfpERSfPx",
  "key28": "49W4CCjpPv7nbGrkimCGBovzJAcFJe5nXDprkxPW2XVApuqnpfQZm6QMHExxycRBEyjWLHPq9EuCsqkPzFmJohuH"
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
