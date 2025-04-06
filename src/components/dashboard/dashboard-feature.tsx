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
    "3oYmLSaw1VSC9F9rkMxwj6qWMUQ7r82c8Zk3FCvfTJUzKQv2ueiCEJRYEApaFXihVQwyh1X3MVJgDuf94P86V9rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iYWATUe8hxgh5enSFb14iuJ4ZK7iZMZ71BBQf1c5BenuZpHPiiaM2NvxtjhLtKXoREFSE9C2brQSEZjYFiWuez",
  "key1": "2RND7KXAPppV4mehJURZGJrKoR4Rjqbrnz1HnBLrqTcv8KYEcrsXBW4YQ3gUF8KBheC9grCeBKqg1SRmBWJPgEpo",
  "key2": "4KA5599dyaBM28xKFE74s5v3dmhcHyCmE9gHA5dseNqtNxjCVPL8foxBHGhjW7BBYRTgDZX5jkzA2Leu4s4gEDst",
  "key3": "4iv2XopLXjLJ9q4DuJVYwFDa1vYAC9nwfX9atrUNFKmJapTof5htccJPxLm9XMmHf9a3PuwCjfoqfVrueM8jyG8r",
  "key4": "58Rb4AMGtgQvvA7DaNMbLgZF7wzTGDhC8y3YJoAdXgqeR8RvhF6NYH2QJjorkRErr8mLkDzQGAko7GJoNSuzHKJH",
  "key5": "PSedNxrqNW7JjD35Z33hThzuX1JgdD1jE1zR29GKyHys9WK9Xtu4EBUUBAen3u8BgwbtR6A3yzPQzZMfoAHYAon",
  "key6": "5BPNnGPHMEwppDeuNXxPbwsLSrsCF9KSYJGYkkRQ8F31QzknXAauLJPj63EAZbbSShxVWV9pUUsz9zYKdFF1ULpv",
  "key7": "25tfEmH3v7qkickVE77riyHic1Pta32A6CvbjZt7XJWqHoEjmzxZEZNj7p9EVDkYTnQF518hAXCNJpXrkCa76UhM",
  "key8": "31eRWn9Rt3n5NxmU5RnR6fDmbxTXz5ojyX8c7CEn8yyiZ6CorgQiLxtXtysTxk1wRjTNZafuGYLkizbNzmz9kFYJ",
  "key9": "3W2F1kXx6bdFdxDNKRMFE26ha9qz7cgN57AwgHn42G4KQxsg1bNs6jScxdE17fW5ZKDZcmUE2hFggbwxsgWFqz62",
  "key10": "4GikwMaz2m1EVfUfTMt1kfJktQ5KNFsYwvzcyxUh44FpZw9jJ1tkvt2YBZCtdF5ZkiYALHVuS4pD6RmgSLfNrju4",
  "key11": "2qN4k7ho4VaD1N44RhSznERCusehKNL1U2gXMHz93ye9TGKTbuUuEu1tZFiCNY6sbUkSv9cgb553YuEG4qaZbmUW",
  "key12": "EqffEcEC9YFzRuUsN9gRa8yf7pJtXgY47649kzhWkAXNLAxmXseGBzjUYM7X3JNwwSUkCe58DJQ4X5WEKHQBCz8",
  "key13": "3HqSgoJweVDpJXe8uPzNCxd3Qu4bCLa8y6zB95atihNBANuYDiHmfi7C7hvm4gb1W2i72thQZvXPSZuYZNUCsq2V",
  "key14": "2qbTjrfpyLzwbq2J6MXox8EhFw2EWvyk9ERigkrzvASCrXMBA8mxuWBmhnWGEuh19vdTSuH4EVmZmjJyMzcHxXK9",
  "key15": "5NBXvpFhPNCCxyznmqEAMiHyagrAUi9tYMBp8kmfzc8hush6tiQxNLF4bETwchAZxUCcMxhNwEs8eK1Wt3Z6ymc5",
  "key16": "2jq4r8X22KS4TU8jjdSrbntUVbyLaeUUBUvpegbvjEU1uiBM9MEqfVUErCzHuiEnrRuqGnvWhEBMGvx63RT6KLtX",
  "key17": "XuKWFmU5CXKZXS4rVtjH3eyZc1RAV5raE8SQS42vVB2KuP7Yu7cdNYs7itqjy1iyp4WVrg4uT8xxvAdtu9BMsNP",
  "key18": "R9zhywveTqsTssLZrtwGG9992AYg8NAaBr7JzJQJwX65AEohd3L9sarZjDoQLUcdZHx1ZjRR4pKpTKorMNUCW8r",
  "key19": "2j65xZf2Pra6Ju2fxjqtca4P4rkh5ATeKMMjBoR2zLhgd1141dEpEW6bdSYbMtgVNTCCukBiSaziHhJJCgrp4tDH",
  "key20": "3a36MHD9qWCSjMaJYjygfinUVbChadKTKotjpkQVTqxAJpdrMuNpCiVG8E31eUi33o7pebo9NKp3GFVESitUMzpk",
  "key21": "ZySLySWkwBcM3h7ALyaAviZJ8RsnKiiGKgG6RYtKaa8DaGGeWJpWB2CwsFwp8TQaWdw4FjBEdZaBhtDhmyb7ygB",
  "key22": "2HgQfRMtgTU7YTqRYD19WHVLgnTjKf7Q6LXAcRp2uTRcV16DuNeJvABkXcKhw822Tg6215nBV5cQAx9CBDg7ThZm",
  "key23": "5SxoRurXvesVdyY1CEUq4NcS9xp5w3UWYbnZfpwFXFsDCvz8XmLdi9xmw2pmVniu7cXEmJsXcJYms8LYZyuotYgB",
  "key24": "5LgXQXF6eM4pPGhu49eaxpQXmfsGsP2nbsErYa399ft7mNBpVemtbCw8V77jMrbo2h2AA1SUGpCgh2HtPn2GYxfG",
  "key25": "2AcyLYSd2gacRmxZPoxhnFyuuVrv3srvz4bGe2dkbnkqA2CrBKspRVo541PYcLfzUuWmKDp3C35dE4cb2ZrtFZWp",
  "key26": "5hRbVg438tbYveWKP6src7RCW5r5RhH3kwbDuLEbNKMfV9nHb7h4XmefnRAURLYUPrmzqaZLtJVVz16KuMSCqUk9",
  "key27": "23V5YqZdfzhgi7bwfu5GSS5wKVcYaq6U8EAi46wB9WFG7hJsDsFtHQe3TNBbYhHKFcvTYCX9fR1zS5X5spxc54rV",
  "key28": "3TSWGrx3yPgWczQ98p3nvfNZE2pjF2hQWGsE5KrrR84yN5WYue417ZLrAjJAexskwNnqhNnRUpdzmEsm6YmC3X7a",
  "key29": "4yV2jX4Yiy1AMRDRmg32WoRnxSoU9mfGkWNAd9y8jxBRNX4GyRzw3j8t88tLfXrP7mvbvMJyVzfnvxhUwJtax5f",
  "key30": "2yucQBVPzkkuPgdG3GbTsDAUJ7kKxZ8LzW5ZPL59cKrdZ3T1oBCzYNffMsXdP1RoJ3NEJq37BNKFBpyLx7z5Nua3",
  "key31": "5WAS38dM655YnR7Z3zhD1Xpi3zBstmWwAgHTSavMqrYVFW1F1pGi8pdGdxyd5HFeYGeFuPZNfpCHCUSap74JGRim",
  "key32": "4sMjoG18ZjUH6THzA3Ca7AALsHG8M7jpErrGAnvoTadMU7gN131qrQ6Fw3ZGKS12nvuCrLXxrEhgBSKAa2K9SgQd",
  "key33": "uDFgby5w5M8qSjnqKmiY3i8rVW4gtdss4vVn2KQjX1LW3KaDAc9ria2m8mS77StNjRJWjz8ynDX4ELEz6xzubBw",
  "key34": "5Di9q4FVBQWTHNR2evtVKLeajfvJ3tBK8jeZ9LGxPAaGFqbNVREC7FienGtW8rJZMVVPbbjFPSbwSTTidBNPWNRT",
  "key35": "2QjXYfppRu4gNkY4exXqaSV1WVaHwX94cp4gwJq36pEeJ2TxQDLa5uchsAKvAed8crVzHrfbYgHGqf67mBNgJwt6",
  "key36": "5yJgJw6Rvyqepip7o2DxuKVzB6gpcrAWgXL3ZefbDWmv5XUz2pJMm3wUD1X2EM71Vc5SE2kVchqo1unVZgUfJtVe",
  "key37": "3zdvNjQUv96gJZUDkSTzVPhNo56J8X4v2btGbLeMUqy4W7KbuLjHNvUqa4q1cHuiycf9yBBCv6b7HCmTa3BP2Ssh",
  "key38": "44Fr61iTFCKcSAx2aPsBom4Mmp2LkxREqvzH4nfrKGH5q6z2vYsrunCKS3ve4iG6NB2VhESpaHYhK4sqA8qr9X7q",
  "key39": "4o4fYtg4ZMWsA9J9ur8muNip4UEj7Qrpjpsppw6oB8mSZwQBW8N7S1z48qT9kdVXqdq5T7Kgn95ttccac2zthLpp"
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
