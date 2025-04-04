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
    "5vBqbczcoAvfa91wetHsyshLGyDdcB3QkovRUM9kTL1jyHM9MddX5REzewypv352qxAbbqvuV3E1LUf5JCEfL24a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjaXASt18PG4exshkRDLUnMAZnhGkW8FCkjBRgbtgy6fUm9T7L7rJUNJkE7nRP3WV7QTEsxPbj1VwyMYDemUu3P",
  "key1": "3NFdxqnQiJ2Xg2jJycQwMuWgkL1a3tFMAPt6ybGy1dWk19yLoB6HdVaGkhqZmovqam8M8RCrp1zS3gyp6nvwqcAP",
  "key2": "2edkx3wzRrDYu2ffrbyq3pdnYF16eqkSXtVfJ3DFkCH9ZL6AarRu7qNJWyHDDfUCUvivG2W2YNRBRNvXPh4J51zk",
  "key3": "Wyr1tRuzHSzYuyymRqMX4VJqByY1a5z9cNis6jAMYouDkq24MzmKgwSKjxXbBTNGRwqn5SLdoYxXd5m1Tr3wKch",
  "key4": "tKE5tENB83cpXktd9cxxR5sfeaEXo2eEt5yUrEpLCce5uyuhGDJPfvvP1M9GWnjDbbxwToVmwHLHzaUdGRLpKtn",
  "key5": "5xZuPLK5fvBz5kGeGyndUmmSi8ikV144TvXb3T8AKipXYHo24Xxej3KpLGmfwVuCKYxs987gMuARJVhxTF6B2ZBQ",
  "key6": "2VKnXkpubLofCTfZoVeKBgf2ynoAxwkFKhWSfvypxvxGYeKiMJiUVU6CKSSemDJgbyaHNS7XEwHRyL2hoHPG8tM2",
  "key7": "2ZhfuQ5ENkUyQt3rvHkMEwPqcXJdxuuyoaYZKNSBBp2CWgHDBBUXR4yzqPWPjEUR4oBWWw1QtkL1DTpXvjfm1Yjz",
  "key8": "4rxfjVTG1E7NaNDrSLhh4DgWNWssreF5ca7cs77ttHfy3JrBy6gUCncYw9YrDrYhX65REpmYjDnbYyDPTyTJ6L5f",
  "key9": "h2jyYYQQkunkWVCQypwsYJiNqhR4ExokrKVjCxoY587MnKHdF5MLdMbCfgWkhLSLjMfH1uqHFqJM3ELTyhhEZi7",
  "key10": "fjkTmjGyWyHuhAkbT6VjdyNwip9opeC5sBMKhzU1i7UmgD8PjSANb4g9Uz7nyTxJXAfbPL3HKq4g2xtoSSfXMdp",
  "key11": "zPQZv5DkZAdxzEqLxooG68R56Z7rPKhA6n2BiphV8bL9wXhpWuxvQMa3U9DhjjroeuXTLma74jyNW3QNqXCVJ48",
  "key12": "vr7sTBdGskeT3KJECM4MsD1oRJfsnSPgr5ALQyTr3hg8iLVBb9ftisE3Be4RgqioCw39yD8DrPpR8wEog6jTxKS",
  "key13": "LbRWHqT3RWtkXqaeutF8fAzSXrZRjhNEahhjDh4NnwZtAAe1qJDu3c4p59brKKpj5yTgAQTCdbCASqVYjSFzsHv",
  "key14": "5oKEM1kEB2dp39fkJJQzHEywRtL8Unc8bRWhDFUhJLyzBoVCRZFer7WeYuNjnrFB7RBWFwyGLCEewxCCAKL1pHaF",
  "key15": "2CtSBL97yhpzzf9GKt5P1c99yeW1EXUwx8jdHfzo5hGH67QcgCeSCuEZkSrS1TRXszLwsEP5cpfCTBHtDLk8DcYH",
  "key16": "3ioJqwTniyJPyuJJ6WeyvMiiB5pKrEKcjEV3VwWhRURnmRLQvFbwtL6dWmCgLbzcv4JzBk6YQGx12QRAbx5uyAqg",
  "key17": "5G3h67n8LoCyiHfUEZqXdHb5DhEvixhtXKjakX3EJpi13P31Uo14K56imMrboqhw6Amc2XVpmQCqPR9s1E3BdTtu",
  "key18": "2tbkH78mRsrty3GJ5cDsVqbbGQ9zyHerMPVJptKtr1qiMeC5vkGgevuMb5TBvd9cMfnmhVwpwFu4kYmYwcVGf2zU",
  "key19": "3FhBjQvtDpY8tJUrTtudXcmM1DRC6jNW9p3SraTTpi62JHgurWirSNZnB1jE6FhqAiDQ3KKyqx1LCjwtTMYGTG5M",
  "key20": "3vpv95pcDUUfgbJNsDxKnyizuKoAcDiqdiLQ5vgsDdq3RfgL5ppBNhjGE5WjD6fqT14Gcn9EKf4WHRYCujpdNfXv",
  "key21": "2gGR6hJrktuFvXLrKhmW3zz1qTLcrXrrbSzccEjfmHGR5hXbv55aKRJ5jyWgkyBSEh6BtJmsY7DG31jkWneifKtg",
  "key22": "5h319SHsuuVTNz2GQM1r79PWUc8tu4NAYzvHP6pW8TEaqLQE5riABw24c1sbuvxKNVcmtiDLUTsgYRU32ysvS4bQ",
  "key23": "iXcTy5DesADJ6bs6FBncr2gdYZNWLqcXnY8aPb58A3nM46ww974qdHaFa1vuFjUjTwCKgoifBMCReezVMPkeiWa",
  "key24": "4WzmqMecWX3B8cQMckVG1Sa4jiz3YAjCKzfknNXh4ohjkbw6hUXfVMQtGyeNfBg2vbNr4po1qXEnNFQcXFbBnRDY",
  "key25": "48vxfsGDGHJTKArJUPBnUcvgkNB1ukMk2Mkej7EKyiEcdi6v42Ga4TgoKHY3tG8F2MJhJDJw6JbeubvsnDoo8586",
  "key26": "61pn2thFKC2Dnjw43Np7Qf194JctiPp2D8CKj4qG8ScUJf7zFzFrfNS6uPZ6EMQu6GaSeEf1XRFeom6QEsJQAbCb",
  "key27": "3kEb8B8p2otvWBgmhmBm71CYNjL2FjDAZ7XcTMdE91hcLtmX7wzKFJK5UKvLXvXTqVtJu1mZBKEYnUW2YG6g47AC",
  "key28": "2mTCXsCmSr67TYeHmRyugrFfD8zDjbjGq7JX2ypQXP4p9QeTYwqQJx3sPmzCrPYvnA7QHEK632iZkHzDDAosVsX6",
  "key29": "4L9qMK9nja2vk7d8ptRKAZMBoLZxx5zK6dPgggebDgbFGverDUVXNjZ8oLjejTd4WhxkLF2cQnrLD3Ek5WQ8UbhS",
  "key30": "2dc1hu7BKHcAdbbpYgdCrZBxMp9tDEfH9MnLLHCHsiJCUNnfLFj2jvVYHQ44w1zXH7azbG12uFckDwDzTcSAYvqu",
  "key31": "5ZBuNjepdgdApewJBNE1P7htCXwP2ceYjpWQ18F7UHSR4eJvWThDPmANgzYymx6LAdGonNVswY8c1ib2yy92WDir",
  "key32": "3TqCwAX1wuV9EW5MTRCahcRE6YWQRncqM97psKCFnz9C1epTKXQ9YoMQrWVTFAGULNKfaJrqm6Nz8cCXcv4US3jQ",
  "key33": "3WVqEKvB3JQuDdyCjfJQiQaUwgYNQ1VroPPEyJhYn5EKWEDNu8pMtYCJoTX9ENA7kVrYrLzCs8p76FEPT4yvyhDr",
  "key34": "4cUdtWXAC7LMqX2SCwodL4Nfc9T1AecFUgPDHLjmJ8VtignSv8SfSbcDB7XzqrVbDvsXZdeMphCCiaCmPCHJYAGb",
  "key35": "5pfH2e6RgpxH2ZAidbJRBfSuCU4UmbizzkN8e8oKf1dxFXYcfayWpLBKgnJJyhKgarRqPoY7BRrZFQK29rFqtdxs",
  "key36": "4oFjouMhvz2TZFspC5zBi5Qf8RZFWdQEySSzJxKyXh4ChXqfixLoLwX2KxYKUkxDNF8sT6KGp7QaxzYw7HVJ3bSW",
  "key37": "4J412oWrQdt8KCaFZTQnDKwoyqGjxaBzw6w1Y66rcWYrw2ACBscRCVpuwZyw8bH3Lur7UoBGS2wSLBLJEcEXid3s",
  "key38": "5qbbEx56k6fPTpaby7hj3AMEDRsmvTycczYKBXWGWtU8BEzx52RpPnSM7WdqyUdL7eXf4ULZhf3QjAdnyA8DPYdc",
  "key39": "4wY2qoRCmttg3Ju4hqEWoJLokRxwbVwHYY63z8USKt11T3K6ZS7n22SxjCLkRhK2tEvUosG2DTUuBwBjXR2eHFyt"
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
