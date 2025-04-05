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
    "4WzpBWX6i4dzKZszjXNdf4VgM9aYGpSDCyCrX9qisJEpQ9QqsNhrxU3U69LQSQdzBd1mkhBTtDKktpqhbyggaXzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CArJ4aeK8WFG3qbpEho2F9zCWdgKdCVEfaFDgSybtAzrbh6oW6gvXKqHDykSXRykSnjnB7Mu8FUqVysymPcd66B",
  "key1": "5m34taX56SGbbbbUyKhVVQPGLB3n6eUNmsfpeRNLe5dmBXr4vxHCQzKzmSgLxC1u7ThqeSgmNpfHJiCxGCBpwD52",
  "key2": "kWKGUvgsuGchSS3q6GNMqyBG9PNiasoYGELCSaM2jFVXqxcdLGc2jCGnjusxzmnkmJRsnB4GG2vZhvHkpivwsqq",
  "key3": "2iV8rkBQdcu1aLWLeAn2sok6bafGLcvJ4hUBkzyffhsT8RiSYbaWRvDLvvJBNT2HFZqovYGdpEbxiCRybudnWVTZ",
  "key4": "4skgz2XaRi5FNyHu1FsZV4gkDEc5gh9kawqVsZvK8718ZtPTtgULnF8nBWcqMpN61gQYukExZE1gMWwMspPYmptS",
  "key5": "49iNNe9TZHtxQbW4sEqnp1mFvXCFq2j7qwEgykVH9b7nBH3rmsQAWN6UT5QFY8fajS9Smtfb34Kg8nYFjkvZ33ea",
  "key6": "4F4aYmHCMf74xr2GY54Vmy3mKowN4hRqC1NvmLnzcUwJiKMqxdKE2XKTvYMzbpk7L4qeJLLRhW6VBGwMbPfGH3u4",
  "key7": "2MZz7xRVoysYmCRyo2vJ9GSNziKcDYRoZ2PLMNgNSZxWy1UFTDCpfYy6y3tiHmTLv1FkknY7Lm9QHJLrHZD9HugE",
  "key8": "5MXjDWv2Hnh23Vmk8LFo9NzXjW5rH4arZMtHydygpCnr7x52uheWmj8D1h7RBHyYN2mKtqUe92L9qYKiJwwcTpi6",
  "key9": "329YEviU9ZiCSR4Bt37mnkgmgVrrPDcQbr7ZRhFxyaakhbU2tLkSX4QhvwVin7SSvUrpTRisqmShwV7Ui16PDmzD",
  "key10": "3BZAojTthiX6U2cQdjATy8MpG9f3LCDGVquB5QtDPf32Us2LjDyNqahD2jntB366TyA43R9pXU6BYDbXJonKERu8",
  "key11": "AP9w5doF4WnvmkyKd8hg7AXsgJRSGrAJ4GNbGDDJ5MhLEjgjGvnJbcNsoiUjAxMHu3qAz86yh5hwrXBJj5B2Aq3",
  "key12": "2zDE9rGC2EXmG5mkbNKY5p5KK9kD8hZxSsPRAPr1j8aUacZvr2yseFTU4qt3hpWu2gtWcgHzkLt3FtdpLR9sfvxu",
  "key13": "wygM3YVb4tapbLfpPDGVXBPkgFixRNDKqxzzA2ks1aAeMnHp2aZjiJ8rU4KgGkuRfsS8DoYZzxcwWibwwpvjiCB",
  "key14": "5GczBpyEZoQtLef3UAiiJ7QPbkSG1ndCo9Pp2PuohE6yXKcUmoupsUD2rR92pDkUGkAiwJWHWa8ybM51uvaXJ5Xc",
  "key15": "zMUNQmFCo56KfMFL4dMVakUxC5mnhe82La6Xy426c3t97vHxZayxDxR9DTcynmV8EWRfMwFWTmWUTMEbL6D7snp",
  "key16": "5K4CysGFFhD1RjzM6znfeNraLhsL1AwbhZ4pGJBfBm5UNDtsiExtaGJDNfB17UVuB4jMkgdxtYT7jXeUTx7PQah5",
  "key17": "5njzVp4vnypPSYkvdd4jV7ZL58oRBA6orU9stVAF5VZSSJXmgEWH6D26k32bQFjYTq1RkqL9HgX51zVtR3KvV9Ki",
  "key18": "2J74WykVWPGAN7c1gcfuYUyxDpSyiTznLPeJxa9ixJBu2FqvzmnKwF3d9HF7Ji17TMTxmhbq4ZGo8ucRRqEmj9oC",
  "key19": "4tEnFRzik2m7ZL9igH63VTAxWiceph4nT4E13mZpGoeqoqg3maG97qmN9NQEWQ5a3RBf8NSqvuGSi4ETNH4abyLD",
  "key20": "3ew4Cz4v4joYJ5xNELhLcgtd9hrxKGxQUvjbe55fKfDzKvgYT5U544f1YzPLWKpRPKxadzZCMt4zkt4f7B7zSJfn",
  "key21": "56ZGbPT4TN6x48tceug6EAVHcUTakgz9jWRpej4Q4bzkpmQVHBHKG12NeuMAno1D1bTK8VBEodbV3Qa5dEkB1Mtm",
  "key22": "gzUeRkCp9tSa6KcXsB7ELMCbrdMsePJJMukfiSQmeGeSZNRSnWQaZBZzdGZGTfCZrVRNuXAd9MRsUWzzsqceRJz",
  "key23": "dwU694M3Uvr2XiFFVtaFWUz6b79RAB7mjxx7CBhxcGdu3VKFWXftDFG8eWnhfTraM2S6JzArJaqB499KDwJbrfH",
  "key24": "3kHySbKdFE3BvbeKjBitMAs4DMbCJqfCtcoYAi4A1NBpUGYp5Q5QoGG4ttFiXcSrNDLsiXt75KB73duUsYKJbXbx",
  "key25": "GJK7bPHEGUi7vq7h6XvB34CiMoEiX1Pk9k3R8nazj8ULsWy2D3bt7aPLj1L59UJW5VxqmdbqC7R1GJUvo5fgeSv",
  "key26": "5m6wgxcxZSqefDXMG7FdbJwWa8xNPyzVi18JohdpKg3172299mZJ65bxmxSapaD9LjoxEM5rjCPDBRZa5BoYYqAy",
  "key27": "5zggjBKXmu2UECi6sZ3znqwAc9HcXVpvwYDDKBaZeRb1W1iSbFCtF3Wgja2GG3PAadM8592ecyyhUKWbqNxqxubm"
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
