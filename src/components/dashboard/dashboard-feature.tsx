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
    "4FwSb7NyVhV24WAMyavfZLWEScgtXtRo2MyQtdPN5PahkUS3iXKKSjc88yVAEfBa75i5BqnbxYS5CURhi6uTcoSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZL1V8HQso3hgHFpQ7XCY44XSjboxEC7QUYjZKGWMLG9otfWpsuiCXJKbeifYwCwgZyd4xQpPLERrLQ8jBMJ4Sx",
  "key1": "4vMmuGhZujaKGbPAXSvxZqUDytcg8JZ5GC4pHE7m1rGLV6iH9wgpaFevhi51XgsGpPRdLwF1S13eJ8fEGaupqdtg",
  "key2": "1TJDf1bTKQXVRC53aSkzmZdsBMbb8E7eCnM7yTmzDSCFdLXDqcjV4Y1rycjknt1MV7wEDE5Bb3ZN6YZSJoB7CYA",
  "key3": "3zrxF66FD4WmqbNzm7VkXC2qqTGLeShoXggx5o4auLBtt49qpnY8MTL1h6dFqdAmQzB5BrUWJagjsqd4KJ5ScZLK",
  "key4": "22mAxMj4hzwVyH9cj9nmNzuJnQ4hANu43TPyMdCXxTRJaS7rj8ApUxeGmduL7ACUmDfjWWU58s8Y1z4qpxfeWtsz",
  "key5": "5gXRRXXwXNjiP5RN3xKUXSkcGf67LtksbGo383CBXWCUMdBWmm9uuFDkBe4ns69hQ2ndc85D54Z2Lft8GuAWMGNG",
  "key6": "3XKTWZ5Wf16Fy8bN9JChdLVGjvKMhfn4dnj3AnrpT1jZkjEA5x7yLgokvfdXxL1SfDtfne2vdsnFSzYfZbn8oavt",
  "key7": "3AQeDaXsSp2epRHA37xGwWpkzPJdo81FsL5cy6RUrY4Fj1aoJtJcjYi1ZgDZiUwL3UevBrzJ7gv9aXLEpfna2YFe",
  "key8": "3zQqQi4x7Ya5h7oq94dsRvzT6pKqLtHnCs5PL3AnAxtXbLPqtrDPtnUPnHmrJKFsGTqExr6bwr3syLt8HXC8W3XE",
  "key9": "4P6yyBb2vuZPhEHs3EkviRkGShbicFpgfVUN3JsCbDaMb9UaspN5c3RdQYZug9goSgFmBEPTGonFCJsS7MvLvANx",
  "key10": "dXRoM6NeTuACau2YsxbdYzpm1HTNd4S8zSiPnvvhKHQR5TmZMrbhBUVULbBMc4Qqi3HUG5QSPcTB4qPpHdGhqaU",
  "key11": "2aiRe5bKkaxxT5fgiFbAZkz4QZh9KiyAuh8VgX1CVLoxDVnjWi9fjbzoAX5RZY4BDDEshKtv9diAXwKVdzfRVrhD",
  "key12": "2oY8yVcd25sDNEb5aaPhz4Z7vs4qYNULAJoB6Vzaa6HgYg7HCVnVdXx33wsoAUybfxjuKaBtNUKbxrJGG15GUpjJ",
  "key13": "5ZUup6iCTJhYVfDDN7ZJtzzdizXfE6VC8mqXjjn9wUQQfaCm7vpTP8RHF77CT5FYwaM8HMJCa7SjRATnu98nbuSk",
  "key14": "4LYeo2PGB1HrfKqJqrLxUjDVcw6yRRx6cPFFYpNtPEzA1uytMLJLa7mSEigvNKvbkC8zQRAVZ6w5Jp2tFwb9gbCR",
  "key15": "3VoZxhvSoMhVtm1YR4s77yXMxYY1UzT2DSQATXVsqtgMKGUhuYhXJUHehD6rtPDbEiX5NAErZjQ5tjmprYKR4Vri",
  "key16": "4q2MLjaaFkZpZvyAtjJ2gxzrwP9MBhZTYcDA8ixSEW7eXMc6728afyoPmNi2gDbRzqr4RuCogTpDx6Ais4fQs64S",
  "key17": "4ezgnU2HtRG2xYvAM3qF66hbV1DDe4Vb1JcFpBsZHhk7uRXkTk8PLaKzrFk6Q7WhzqtA4hVUdfMHDi7qtXXXrS8P",
  "key18": "28Euzgr1ngcz4KX1aGEog6tTw3dxCaAJTEpL5vXmM7tdt2hweHoaRLphovAvaU77uESTuPoE4pHjGWoHFMax8c5Y",
  "key19": "2eF8xhAj84HiZtVmKv3E5kiiR9coeqy3p7gXtXRpKDyck8Tozs2xESXdGYGTQuUAJnuTeqHoCC3eWcbUgRWTEEtB",
  "key20": "545Pdz9roqzMVC66hQNA53syoZmTPi7N9EY8HfmeaqpcDGzBY7QmSMA6cbMjfBhFU6WVmWoXknSkzQvueMi8jeh9",
  "key21": "2V5sKonSHZH4hpJBAs5RhvZWqYfu9BuBf5tpNx311YzPDQ6jZXVrRooPrhaYuPwLz8XRJQv6NM2raor6qTtABoRd",
  "key22": "R95nU4wEUc4XeTFuvRvsoQVpQ8qPhH64X7sigZM1Be96jrkW93k7dsQK5xkxwjhg6p9wWAmSUhjYG5wsGLE6BPb",
  "key23": "5qSYAqW76sGjnnLW2iPy3fHaV6Agt8iKSNnuRoGpJ3fiXSbw6AKvnBcN2PtyMB8XW4CbPuuprvukew8TCdCTWX3D",
  "key24": "54eaa8WN8pXkFhZg3UtVgVkbCPEHCdQRSzECAkojShTtSedcQPCUswb5TtgpRGixtBLfKP2Q1HKzctHtEcbB85N7",
  "key25": "5bKtZ7bs4q63PwQgzGSK5fWnw2joB7tJX2hoHq7A16dPStD7RQgomxWoe63jNrNpkpWG2oi1PjVZnMbEHj5Tr56P",
  "key26": "5DZJ3YyDvzyiW6aKv7BWwt9e7EFVRjRq171MXMrERcsn77xb73dxFPVnL5QNmwwaQCgctZUzZNbSxxWEmeuAYpte",
  "key27": "5uec3QGUg6CY6sjVgRWNLfEPUNfh7uSx3rhHikGbP5LWP2kq7NqQmMET6rtsD8EXCVBGmnv4FaTvHRZBz3zZUC7a",
  "key28": "4LwuJNGWFTyZVjUwXuHgmbuJ3hyBkpmSbc4eAHpRtV4qPZSq1bMXZN7mEDFDEPCAyeA5by2VnW5iVxyJQVvzo4ov",
  "key29": "3F1Qd4abWycLX3XqPytGj1c93SqByxW9sof9P4NUAhTuK82nQfqL8GXCX6KHhMdyxbNYTKCaoLWn6KJEDaeLV1Q2",
  "key30": "4jKMpLyduZHsrPnDcD6SQmowmv7DJQFHAR3NNwEsRmMfpeZjiACmT2FevZG97wb11DmBLU7SwyD3fKxMY5vQiBi4",
  "key31": "MUPKbvrbW8vE2BJyBoP2qcAwQUSUiQDKiYYkz6H5WGS725YthfG7MjdHmgKXctSxetP9vFdjxKdtU2AJiQpPZyR",
  "key32": "iRAFBoWNpSC4gbf43J4mW8qRLdkCthD8cnQT4NPnxLXLAkj6L1zASQ3zU83ZxdZdrcFHXdr4F8zwuFGhrfK4ib1",
  "key33": "2N6LjX1HdUnRAceVR8HV7HP1MQ6m2FBJskyXpZYECG31CFY8x7JztLYXccoMr2EHSMqvaPeJZjBw3wCJnHpgHhcV",
  "key34": "2Jw2VbGr5gZjUpSUAs1qLx16NYSCGsGafPjZcewWR22wYyYfrVs1cmSx3U4zM4x9AJNFg8pHu7g4bvLnmvun4HM9",
  "key35": "2o5VKE5PfnC3jG58Yt6XsFzi7N12khEwuNWYnjpFf8xV1gaDi9P5zBzGaSL95F2D5hUAA9G18kFJ2YvqAH6VWwyi"
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
