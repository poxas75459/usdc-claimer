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
    "4dpMU9NNh9GZsUM61n1JszamqgfWxWG1fRbq9ECjeX6ZHBHwj6LMKhCauy5tmuTkiyTvwD96znziA26qV2v69h2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kzVaoWDABVLGuYmUbFaj21bG5gLL6i4CWj9vaoreKwhXb3GRJBVa7vx69YjTeYs3XnTQ5rMzqJaouthrei28aC",
  "key1": "4dp1doMmj5c2xARmN6HcSeDHcVXACqL1kSxx8djsiosDN9gvNtdTxAJH6rLMFi4tu4a8CFZvXkVrvzhpz1Bk2F3c",
  "key2": "9thqfkoJPcLvs4uhoxZBYK7wmVXoAPqNBeZqBMvmckvhsbW8FfLJhjtMeSNbkC1d1Bx8CNziPTpsrstqDyNMyUw",
  "key3": "35pUFGvYn7oMBNJjgEvczRkHiPxYkrqfAaCxKckoqW5SBDE8qkSaR7hwKssaio2eEAXChohL8gG1y5TGuLAKTRhY",
  "key4": "2wNg1X2XqHP1KGuz1mDhLSQEVhCyUNLEUFmuhZgoneiYZYrFDp5vvAfaRViPmT6YfQfSC5YPPK5aSPt1EgjajDhL",
  "key5": "3cxHLJTqz7mZDT9pngNEQyFPKPowk5KvqAz9Madb3gRW2FbPs3JZkJoWCwVCVaUZpFWDDYnG2yHjsFmtjmMnpo7A",
  "key6": "RDe9MtaUXE9yA8MpkyjgfYpjD8w1E2RxYas2wqtbULdBNGrZGnmN1C1pcSuMMQjH7LmPXaotGUtWQAc7VZtuWsk",
  "key7": "545a3d8JafSKG9cJ3widctkLNdEqnHgfyUgLQSThKyJSRJXJs1g3CM5zqDHihS9dccBdX3PxqCRBc27v7eRwiSBk",
  "key8": "3JUarJz28HJynNCdWj7mUWzJ1wz8FMqyHLmPiJK4CvtbFmwvJCt4SqpqQZQuMCovoDz8UZyNmNncGzyFVWYjrBUL",
  "key9": "4dTJN65iKpWQZxeKfF7YXXwUKFWibgq6gXvRe3gDjMtuGBN997LDb7KVc6wVpKwWFLZSAQ1eV7UkJuyVdfcke3yg",
  "key10": "3cYA3JHGXNpCPfyKg8m39euryTcbodPqsQ2e3jUzmvtCgbn9u1B7CdbMc2VgGR4PUAorBw2218vonevhBVK98VqG",
  "key11": "4V8Mix1RokDo3xcdXDw6jHe1HCLVLFeGQ8ZBofSp6EyarZykFgqNhwoFAjP5sKpzjJgVMGzH6YTzHqFFHWxGdCNN",
  "key12": "31BHRfypKyYA8kJ8knR7B2nd1Pr7Xu1kToa7gAKspn7JNYrBNk4dYqfWqnKcfmU1SY9t1aHjHft9wfanhZ9tft8E",
  "key13": "Wus2TWN3eQdaEpKxTckj7MQYwBuhsYYrbDyYckiFBP8snvwfKZvTSKpaeTL9S4WMqJuUrwA2VrWqmSU8AMBmnzb",
  "key14": "3ixT5gn5XZ5P33szMuAwPA8kMERnfcK5FqLBSbfTsuWSWCbdWY93SHa27NwXfaW6H2Zq4E7wTg5jSpEK7BkyaAH3",
  "key15": "2kXNu37k6pzWZW2hM7DGWwXPDjDs32E8sNWEwmGz5rXMWmuL1t8eTmin4M8wog4aizN9whG3RK1qKCdhabn1ryY7",
  "key16": "4WkNGENziX7g8F92CDeBamTCtTTG52rJXj68QKFQjn34jMQLBnj9HXwJ8WNp3uTFrpeSMRBmVihAo39gM7BWAm1d",
  "key17": "4C87bx4g8t81TxSHPHmwtFQuUYyMhpBHZcKwt2BqLHxdHwNFndizdTy3R362fhWuWKYuFaHEcNrcmcyoxbn5dJHh",
  "key18": "3DVEuiS1B7A5VSiK81ZMqmx9vgqWSSPATdRAz7Krc56sxcd8wjL1WYM3AiJ3utXr8h6SAzF4p18ZzG5DVCrozQcT",
  "key19": "3w2392WgH65VtCneACkQtSBggi19F7bnK9LgHXwH54BVJPnZ9rLKSr6MPy8FeNmGKR8CmufqXaWDmMQA5n9PSgcW",
  "key20": "37wh8Zesbqcfz5Hdpmoh3eZVfPtt3M4vWqjs12rg3fHGgKWYpeKc2zZgiACzxrrNntKW2TVLEAurYUnXauwiJUvq",
  "key21": "2VYV4g1aUVrw3PdsnS5rhMbeUA3bDAJdystdJRHzxyxpcCfooiL9dNRJUKcxTPdcKx4uBHyGz87Jr2UeZPNgv8KQ",
  "key22": "3BSJ3CHtcajNxTj7pE23Ypr1P9jUs8TWpCkFDzzCGq1Yjwgjod2MgN2BUtib4e8VaBcwEVT4Fp5aubbF2LaoDBFm",
  "key23": "3E1o7CvMNf6H96dwRiWXab6braW1wVzRFv8gVYzMi7EHdhj384wQHjpFdYRZHktkJwrtfBxo94t21TGcW9RT8UGc",
  "key24": "3vsb1EpPZL631Cqce2ibzXLKocwBBTkNNL3Am7XaPrfNovTXf7H92btaKwfGYegaE2GKGnPLBVshnMAa8nKdH6gA",
  "key25": "5nHBP2FuYKYrCU3qvnsFqY7xHv1g2dQdoZETpwNWAgEGX7Nfd3osja9p3kHFm6oMQceSgLt5uxjPxnAk1uNvnvgj",
  "key26": "59CT639NukVqLikUE69J7shhTyvgzmvMcPsGDGATHErcq9q3Uw5MPyG2Gpc8EvzX2hzHZgt5rhZATB2ahSP7SwDi",
  "key27": "3Mw69YpmS6uVWJ54F1xMwFjsTzddeKbxhTapASAn4TCM7cMJge7N8XbgSoD6zpBiScWBQFLVUkQhywZeWUmHs47d",
  "key28": "4mbK9cc5Jqqxb1F4XydUx86Hd1uKTioueJvBagTGWLqybBDXB2PNHMALPHNh2Nu2TGu8AWkTS9f7U1TrT7tzj1Qs",
  "key29": "23toCFYwFSLEN3NHwnk1j4FAS5BSkBTXqjdPoFje1ZrdoXYJLj1Q6kVWoS4JAny2oTcxqAVBabVXvnHVQdnRMUbj",
  "key30": "3Fd3kQHdvmv8pZzFoofjp76bWaSYRb4Lqrrur1FFKDZqrQbvoKpksMHHzBmUYhxKLtKsuCEjTFxXo3JszcdrfsCf",
  "key31": "5xk4U3EirZjLgFKgncYB94A6icSpAmWyXLqwB5JUH2MFSiJkAtezexW8pT1P8Q63RAU1EFyNNwEKcbb5vsr8jVkv",
  "key32": "4xQmCPt7vYbod3h1XXEWPrXUb26okGjmtbBUzQjX1UjHpXmDj5phBiHy7h9MyxmHiNd6pwftHfEzLVo99gF7VXuD",
  "key33": "4vec27xuBRJAdMmAeYAFLHy36wypNiRjXzNUEetwSiwhvDhdRy8ivsDSLxDZdJRmLjzGuDgkpPpH6DG3UGgQXGNb",
  "key34": "4DxqBksFoT6cZVpSTaGzKkXo1xfV6tSC1LCNTShugQzMJV9Dmopi4G3UMW5GYZWz8o77L6gdXMbmuJ4bVSheLiwq"
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
