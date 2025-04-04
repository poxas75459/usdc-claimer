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
    "4pQondCKGeHVgxMQXK7pwEzdgR4UXX5NNaWiJ4BVSHuaCJt8Cs2yGgHyYPtX1mSuUjBByj6FfyMcR6Dz4iNg9RJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34s8zxgMfv4zXCERHg67p3tYUPejQNrwyJnc1kJ98G34XeoaWsUZZ1GKNkiwcaXEFAmFZc8H9dS81UGjDD2wZDf4",
  "key1": "4aM3tMXtJp7Kdu9FGpPMoS2hw15hgWYrjLt9TUQkggxo7c8pQnh114LYTwRqzCkL2yVxBUg6FjSohsT3eddBFdUx",
  "key2": "5zGTCS6PwC24hbZK9NoZNA7qMumwVUshXERuks5p1eFNCG8o1hDMscDK9dmm6u2BqF7UjuDPyMbN6Kdgi8XPmQu2",
  "key3": "4uvEWbCAYQwJ9ADfhgtZBHpECNQrJjuDFQgiACi9JscCXPKqZPmNj92KtTm9GqR4n1HpCgSGYwa3VTXQJEtQwbDy",
  "key4": "2FV8y1P3LPUNjoHxiuEUX6A6MMogUPDz8ySKHU4eGN6bQ8rA8aUgZ3qw4yMTzjDsLxf37q9EsRai5SqGDrXhBaM8",
  "key5": "5raMm3x6DAofoYK5bws1WAs4hfABTEsZtB2sSXu825gsaHhf8FEqnN5THNvdv6exYLPuzdyaGzq954xGAnHz2hDw",
  "key6": "4ZdDVFRjdGti6N7MjuYNW3xXYQqQbCfkepf5W9tERKQYGgZrAC62neTUJ657unk89iH1qGxD2g6H1eaWL86yKSfo",
  "key7": "5SzU4Rt8awi2r8Yv4XUvXdnABMMPUeVKJpZefqkhPqfYkoTLZ8bC3ognUC2WSatLYgEigGaQibxxxck1cNE5RDEp",
  "key8": "3CCj2g6Uif7nTC6nH37MPk1yZGaDyevVMcwSoNDfsxHgY9n9YVuPZQAeeNPkC9bYk2cv5rwQkb5Cx3ew6aNSV8K6",
  "key9": "5x2aFxTbWD5Vx7hvAG2GivBqnSKZ3HcEs75vz8kiV5A1F5srcMfKsR4dUtxCzQWubNoqnQuTBJpLK5ks557k6Tjc",
  "key10": "43YHG57DKRRwwad24YNvzKgZe3g8kv7expnGVGgMUCVMsn2tZtGFQJu6B2GC1yD1HyPLWZCwyvgSA86Ay5yWjrsM",
  "key11": "EqChXnBodczfYD59G7toG33qCbbeJS2bv9Mz6wiUN6kmj3Foa5mUbdot8MTW48iRgFv92YRkGnfAMXptJxx8Xaw",
  "key12": "3ZbrzKkDcLMH6uCZW3EZzEay8tqRCng6qb5APJ9JZRXYgbMqkqrexev3dVgQQBbktwyE3ghNbuUbtnq1oWniZLA7",
  "key13": "5h2sE6LGFDSEWTUeRD557zMpZgn4YT3St9oKHPmg7QWr5A6NNnwHRkourU3sBoWmWYXdXrDGSqjPMqWqf9srg1Zq",
  "key14": "4wjcgh7ZuhnKE5zpAuGP86GHYaE1sh6G33gCxoG6CrKhvCtJDfdGYEizjKaXycLyJKgsL8rEcgEqVbvues6Rhc6q",
  "key15": "28DrTuDi9okULo1ze7pSsVosM3dGz4pxMEJu7gFbHsb887fPoBR2VoZxy24X6W2UNHmqzUGRkFHGqLJLhxSD6XeC",
  "key16": "3WkwWfwtozWMBDqXvpmrbYnJ2GASBZYc2whsVMJk1zYGahmfnHUuWB7gKitoMakpe6663R1dRKiYViLDDpckrugB",
  "key17": "2CDBBEzjf3sFyacruu7AWqvLqbKaosALbST6qVHrQdZWLWCAZZjeCfqWZGPaqLv7Lqo8A3gFv2jKBnb9V6aBQK9B",
  "key18": "4Aok9XNq6i95EENMsU6s4GoUnkjqkgQfff8GqonjKxnCb14dLrzqw7RYDy3surLNCLt5Ya7BngewPn21E3V4ACLF",
  "key19": "28P3bXKny25kHRk3btxhgejB1b4E8FcmLSAByvmD6F6N39M1iJQf6Hb1ao8nieWdR737NftHRUtMejdjbQaBK2wU",
  "key20": "4Hup9ncG5Uag2WfLVsUe7zCLxPnapCu3kgpvNmsVcuJ6FPMFhEnF2RuwSvCtagx8xrRQ9eUAmw3DuYMNGRYaLSim",
  "key21": "36B4varHMXAxq5vrfVG59C8kBn43jmNeRBpctuRsAQqqD3XcUrfKxjkX2ErNYMzyXDxfC38Dsz9dEnE1Ti7ck93V",
  "key22": "5MKoy8vvpervomtF5TRUjUBFv8BSWerqas5GYH6AQ4mD7RRYMTqbC57SRTShTKmFYdgNCkM9aUtj8cxk3ZfV51bP",
  "key23": "rbWLNFdvSzGDUZx9i8p9JuwuRominLyQGj9YxcGvub8ZTgQvqLvkicAMivNGmkFfJwDuxe3e7iZuzpevpeGRcsG",
  "key24": "65P8ay7UpHhZkfQ9RAjKA6PfKSTq7PibCG5BV9sa4P7ZNc8CRruX4fGYa9iWxh54MvdL61jTUL7nXiiyzc7CjVQL",
  "key25": "5C4SUJ23x7xsgPyrncq7F5c5yA7jzTNX49kN3WXTqPAGZvLpiehmsrY2NNBpoGFLSV2YCKPt2WbT2MDWWmdLjXJ",
  "key26": "4S16s6zyQztVAnha7pZJm6ufZexcrDQiFeXspjgtXg2sdbdSF5s9qUiLGSPMC75TGPk5V3sBD7trDuSX2htgQ8gm",
  "key27": "2S6a5TDcNfUoJax2dyigCjz8HkTEryfGu9HGsMiM93rYWETUAywdcmFWPgBk1Vbw9pQUr39dpmZuuqexatUySmKX",
  "key28": "3sG8bjgCx7sY532NsML9jWcAM97rV1YGDXYsTgBZo9hYzDwtDYXh3jJwRNxaXVuLMZHJidoPyzyfMEG5W7LKrKwU",
  "key29": "2TzMkVywRmpYHpGWzEYoYWATERhZ7CcnHLTaFQPQCCPaAxnW4VkMxcNuNwTKiwuWbiwH2j472Jq6mcH99B5J82kn",
  "key30": "3BXWPWSJd8CwxNaxLGBXDF7FvWx6st3qAVDqsBM4rZECDEHURXJxc5mkNkHFmyCjRNxCdFXCqAdXd53DzmBwUs7a",
  "key31": "2DxN77BdWASk995zmoR1JZYSwELXcwscz5Pn9CP6XoxJCTXD6AY4sjhjbxzHJ4TAYP8b5ntvgsiszVs1qdHnraSn",
  "key32": "5NQcs6wYHuhYosSK3SraMnoANEGybPNxUyvbNLjsaGUjpFYY8Q74KtyEnPdDB43fHKZ9ZG2KEn1Pohu8XnHuviGH",
  "key33": "5FqgYwm1MmiWe1EqmbePtfmVztodnGgPX8fZLF1K6kJftq6VLHwUYuGdUyRrvNaJhcrBr2Pq5SDs1aMoGoSnpodp",
  "key34": "5duPdUeLPHYTRAGrotjMKDKcfQpZns5iVer8dzjxzf85UTgwNCLLQr7WMRRPohae3p26GTqZHt6DzGVmPqEoG7QD",
  "key35": "3wS6HMaYPJA6ee68amzkEAj4sGRcRwy2rHs9LLU2cGpLtfCPzse8sxo23td8xabSC1tPYjBmAp3FjSxy4ZxNnWb",
  "key36": "RwHUZBMmr1DMSPpV3ePjgwv7QK7NjcB5r6eftLvKXYnqnraEh9CGuqnX3MqivW6F5pv4K8BRNS871v6xCG2ezkd",
  "key37": "3P4WCxbznWqd7BKdr2gCYVAYEm4AswAEKw6j754Z6YZ6ZEw9khT5MpUvHdaSC1XzrP5KKMaeu1KeaEdV1DVXJqTA",
  "key38": "2yHthp7yHq537ZPghtoUXf8MefQFGW8sJWeCVWaVoKWRPqx2Nw571qeDp7GTSy4XxGD2ucQrjH5fJA4HTwsYE24d",
  "key39": "5vWMHFRGj8WE8pNuGx1a9ATCwcZKAEEMbg15Vw7RV4QpEU2Tjwjsubvb4FVCy1kZ6nww76d9LK7qeba4ZdM6h9mt",
  "key40": "5Gfp1nfYAL2vJzScHmym1koxjhULQcpFViDe9UitKtRQN1dEyD7YRxYFPgi5khgJjV5bEuYBkCHrdaRzbPCzsLRi",
  "key41": "2uXoHjzc24dzXteerkRvcbejXRsts5s33aB92qYNEieUruPK2j1j9npqvhrPz1FT8psivJQwrr9QYjWtsk5MNU3g",
  "key42": "3Z6EQJfDS5yZknCWJ6NjBjs2DtKRDUEdTMULwBe79FVQWii7DzN2AuZpWfcmjetuev4i5tKseYsN2MWXoNKuTYDx",
  "key43": "2brLMjKKF6npVtA4ZvN4MrsVL5QP8RNdS9j5iL17kHHZYMZ6inZNZudhAxxLz93uBVGtdECcFFLpqmJ2KYesAFmU",
  "key44": "4KJ6bf76Wq2jBCTUMSwuEW3kndgAuzE7gF1t9XiKuay3GGtfMUPZU6yGycSti85SCBwwNCQswFn8dJC4xwaXQ686",
  "key45": "4uGMptm7ugCUhRsQC5xyujRTxJZ7koEzZEzQK1WncLQ4R7V4qBN3Z4VZFrs7eyWmnpKxyceNcV1etF3eWJ5PhP9w"
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
