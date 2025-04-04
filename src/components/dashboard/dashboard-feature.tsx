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
    "57VPS8Ws7nGJYKTjQbzRBVhaFVGfn2ELhXkTbyos6MYczbA6yaKuUrWeUVtspnQgyrEjYmjB7tNnLjt8cmWwDa8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6xMDjemjbLGMH5XaK8uKrQW4cq5RL2Bq59XurCSrFc5AYq8xgSYKykn9A8FgNgkaCGLKrSBVRKLyjFgCMuDcDQ",
  "key1": "3zVrr7mzHBYRsReFixZ6hESTbtKLYwGGgcPaPmR2v94E8MB75hjvCQN8EcCnZ11GrXTxg1qPEbTJwz3Msxkf8Nw7",
  "key2": "5Cc3cwpRz9aYnjoZjHTYDfZQ7hUzoSCEU8ZFy6ebvjJAQiPhC52XgjQ6wve7Mdbe9x2ojttgPxQdBVUxFuDTAwjP",
  "key3": "3x2EfA7fyMqKV93TNSSer4qKi5qbm5fUoKnsyKm8SJsSDTqqND1MYm3MkCYjNaJjb2kzsmrK12rXnePyz2A2KLaV",
  "key4": "3s88WxWPGG4rrMm1ciusDWeUVTiUemr9vNdooYqJ7TQE4RaYoL9nRkaU5h2NyUWFpn2YhpuxoePKzHT5p8a3DNEY",
  "key5": "5m2sq4oDhiVddQUWJbftXbxfgKcEFe4BapPXWqfrc1iaoWUEjkBPXLXWGAiiuqHjUW6bqgzcAFuwK4zPHeeFw8uq",
  "key6": "3hz25ggyERJbyZ5qweD55yUmKzZkLo1t11YjxZXJSfgZ8dZZNK1kuLD1QYKh5hHrw3ux4fVLCGy49gMXQ9wYpQe1",
  "key7": "2KnsBCK1xHMXdSgqZhYzYmg7Mg1ESm3b5kWmHcXGHKdQ8LhPcg3CJ9WNhQQZryKgVbwoM2R4dF4K5yQ3Noy5Unha",
  "key8": "2DKDB8EspHcjtZw1ParmBukFm3XyP9bPVJoFmWzHiYA26XNxLq71b9ra2BQvT8dwbRr7dP3EQTxtVKEDdELqScmQ",
  "key9": "CPGoygvbMhmcPUkGLECkYrojDUzcUamsSYgn1d6NWUP8zU4S7satMSwq8rUQ6ovCJkMMHUmEcg6tjFiBsbpQSZD",
  "key10": "iecUVwGQScoKR3sE2TATtCth2NFY9k3cgkYJ6HtXx9HNqgHj18J8h9UJu4iho5pDqUVradGoK9ZanchuUdhJibv",
  "key11": "5MMdwCnsQaegHjfq9T6vJeVXXUJjarrdoeaLJUZybrhZKGtardN88C7stYAqPzdY6U6gtncYsR1A72SvaZQUkrQz",
  "key12": "2YWTX1hqaXN13MFrb1PohQ5FQAJ8fJy8FK3yKp9awz6wDKbCQjHCHywaPKGa6ntPuzULrFhLFVppMbJqCTbSe8iD",
  "key13": "3pVGepfkF9bnE8mYPGRCYSg8LaEj1S4VR1xZNkn754F4BzQaqSqnWpgySQxYocHM2EiAogS3BS6qywM29FEdSFCr",
  "key14": "4FfndhpXnLt9N4URVUrCtDHq5NrGhgXziptAKmFvwigvFHrxQ8vzRTmwd6vGLZ1HcdLBt13yAnNzk2QWQVJNvWDh",
  "key15": "34nGTaXnh8DYgkqiSeaszAfuqGEwhk4vGAj4bqgRvksj651R8EfY8S52i7iztySBMj31GnBUrk9TLGeU8wfpBRn1",
  "key16": "4oxidZpmL4UNzcVYSZJC5D89cFdvTaxpmCTCthUR8ZcgPuJBdUeoMDoVGyru78bACVy4csPcwirJnLSdPbtWzHd2",
  "key17": "5DXt6yw8NQ9hg6gYrENRurFWbKwMhsoZ7MZ26N4KoMaM8cL1xymMY7MJv5G1vdCvyQ7oU4DLz2GNJQXW3P9kvYXL",
  "key18": "28nHAVTwfYGRLumeW8xWmLt1WkThUKaaVGMkEDydnPNZHLyNhoeNWKgDiYAtraDFuvGsLtLXTqeSHczSwGc6UUdj",
  "key19": "3GGsFnPxoGT3Jcafz51auXGq7EDRP5au8gGiR5BkoZu8Ae2jV1jQUQgZ2g9v1j3HL8B8eVa9J7Vx3BPjkQNhsyG6",
  "key20": "5Pf4JNEJLFmKNY5duFxG7iuMDfUTpBwk8yDNTnBCDPAdnTSzfdgKxDmun8Ce2DGKMAjuuMfpoA2wVCrNig5f8M9U",
  "key21": "KN4eN2vE91HnFCXiDw2DDN1hMxhdpZCwkmMCuBBrXMKTyQ2deqjshejpUwaAUbovmg5aPfPdN2HXBpHAJoGrsQC",
  "key22": "4u369brMwtTPBjrwMwBXusTBEv4VWyGMbAvCDrT1pRtHhEes7E1xdUNYwT25qpjaVQWBx4m59n4XgoUhq7gmWdF2",
  "key23": "3B7XE2UjRT4dwMgEtornhMNo9XqQSpz38Q6o8kj4JavQKnoc8dJzeR1QQb1kHpqSY61gu7zYFSmWeq8z4qovQejR",
  "key24": "3rogzao7zabjxTptd1xQrEgPuJEhZhz52RLaoLk1t8JJo3xr9Tdw5vRym91Qbg4WpN7T6JGkH9Q1PjDLdCG9XXwB",
  "key25": "bT8Z9f9nABwyo3qgdd7JcUFwxYKm8gV75xUskParFjDHkq9QEdwzyHwQSdGX7YFfjwmNZpddfZPNKHtKbVRNKkD",
  "key26": "3BCj7Aj16SUdzNy6Qnr12bZ27UiND99rCLQt6ePNmwC3ZqvPTPTK9Sijgr4wx4Dh4crsMuv8WvrbL8rfdHvDDV45",
  "key27": "127LNpXaKX2h9u8bbSyuDbqLv5EwssxAJ8M5FFQiiMJwzaajZcoNg4MnA8KgDJvn61QdS1hXbVwtnwF4hjFe1WoJ",
  "key28": "5q8uX2fQpDXMMPu3HpYbkuwx4K75qCQuaya4WCE7P82biM3WxuAr4YDUigbjEVWqHw4g72AV2o3pkFc2skXQmPSb",
  "key29": "48azrWbitNhikpnKaT5DEnoACeToj2oZrrHevU3uG1YoKSJRKBLijrB2FP4wxdQKzZsscTAZ6gMcG3t8Z5dbDQCp",
  "key30": "MxhXvfphjoSbe86gFaDLAkVZJwR7jQ76jDLvqQANJV3S6t9m9yxKhi5xrergUZGKAxSekH3hzV5NmsFfcvAVLg3",
  "key31": "5vrYrWcwGefVTyWVEPdjxqEn7n71brpSCT4Wa6wBvrPcG5xpjreYWPgawyfoHzRy4rNL2pNJaFC312TmgYLJqQX9",
  "key32": "3mtjGMfmf2Wz9dN1aWn5RAEPk4Xy6eHeYHVChqsszuqw2rJxiZTndzbnr72Pg8hzJcYYvEZ6LCyVBRUoSg9ETRUC",
  "key33": "3ihsz7UcXfwHdaMZpCfuPAzgKEtMYcLyRfECnFWoD1dKPoAZ2L9koLXfKEWM8cDh2xa2eUxmoD8FS1ow4WmxL67b",
  "key34": "29CDChqqyZu9d2bP7sqjJrTkf8RvEEMnigJuEkg1VXLaaK5aFN6VP2QzFk3ScGZMutpG2jDN9SFcAnzgPVYrUEio",
  "key35": "435F7ybaD2Snx6b7G67VXaXWtFMrwGGkDf8kEwjSok2f6vo6jdHiS6qsDqf2JLJnJbCYaxiYshiZCAh8KP3GPkKo",
  "key36": "64xgEVo4m99gXHLXhj5XeRHYrNWj1m4kbZRj5FBELrH4ry4vMqs1gTMgqATnJPdSQYsZ5W7fQKpqrRzY1DXQmfQj",
  "key37": "4hbVn7c1sVaCwRAyzLYY1rGunsE5HReXrsofJAWfPQoXdJ4HY1h4NkNJYHVf8ATLGwm3ZdZGd5hQ3cXPHp1E2MhP"
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
