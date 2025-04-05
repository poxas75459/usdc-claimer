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
    "CW8pTG4TsV5ChahZTkWxHdqUrbgC9cWGtiJNydWaQ1rmKyzntxse6pbbiKciDf64CAVPYyqBzCXUzi9KTARBv2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QfsyqMqM4NUUE2xpVzeydq3XeXGQbuz5Bei2TfnbGTqLv7F3QdKPzhgwhQQM5ZacjovbRX1Mh4WZaLqZFZj2Ei3",
  "key1": "3iboyPjpn9GKRMVwctPYtTMFw5YsgJeJfDWe1nXNSk7EBwStk7shqc2TFrUs2gpB4fnjSQdvxPmDcPgAiYLGgZBu",
  "key2": "4MtbdCfeSfVmfztahjnEzJTcfPr8RQGiWpgSTHSK2ysEUnV5orsTyQHr11UKVNE1asFXyVmWMCsMCvEFXmgg62LC",
  "key3": "5HFccw68SonRs4o5jTcbLVBTPFnF5HbazDZFXjDjhxPxAM6PGFermuKbDYcjfgRAXRLiVrYQqtGpYQGp8aBW59rb",
  "key4": "5mwGMCG9njxkt8XGdNATUoqcgSfsWH3dqg8a8edqWMoDxR2icR4Ejc2YBQYeGsHdz9HdNkzuWduWMNWgo2SVz2Zg",
  "key5": "3Z6HeveCbYa7eso1TTjgbXdqEyskUYvzf8pNTXvU1zk7LNSuzjaTb2JN4bv1VyYpU9bChRaE8qiMkFYMFUagTWqm",
  "key6": "5TAzQeu5J8dAiWrkLwqXUdiKidqVkXB3o3wTmWJkaDrMt1Y9BKVZU5owJkXPuWnqYGGXB2TWHL9NhHv4ie4Xg2D4",
  "key7": "28pV3RBHDq48ELQzfsZR4MbVqBf6uErP27YnVCxLQbWL7D2dquijYFdBejuiafiYV7b5eQaWtgfzZz3HNXwgm8Cd",
  "key8": "3vgwFNsNkV3de5G1Mu31aDYN5ptDcAXWnm4BYVAZWfYdpaXGgEaQ6cnozgvVsrTy3PzpYWF43g9sw9attmNUoLzF",
  "key9": "3SzU8M3U9wEu9bQLVdBQi2y8DAnfMXeWCJDAhxhvnFEYj12SBgE6fgPbW9FqDHgqsGatbruDmg4f4RyTB5qxTrwr",
  "key10": "b7aBt28jbD3Te9e8cSAG2z9c8kk6ySXvv8BhwWQcwE5D8qRsN1igJQFk2mcLMCrvaNd7GrzchShiPA2uqJxEwQu",
  "key11": "4fLV5m2aRT5p7Zy4i7CQjr49eDDVZ4Ui5AV5mDseKNtSeLSXXsxdS8WXqZhvsEBjcYDFTd8YxBGFrdjw4wHCcf9q",
  "key12": "59A8TgLW16N83VYF1X1AgpoXU3tM4i7hTooCZKEqqJNCuk1ggbiqz53eA16CRr7VwdQgzQnqtUosyx53PEXeJTb",
  "key13": "hnqwLPDxUhcmpt6KtDfiHg9igJynB5XqvsZY9C7SSWeNPzvS4u7ULsYcNDUfwXZzTH4kDtX6AyDDUM2daw4NsXG",
  "key14": "2ZeWhoK5zu8Fz2Uam56ZsU5BewCmM6KsN1t6kGvo96VRdwixwTc9cM3eJmKYyj7iLNQ2E74NtY3ZghbKet7w2qFj",
  "key15": "5sJjwMDyDh4pRQW8Wa8SojsJiwVKYG14rQxFYSgvNm75xfFtnspFMhSjMMoqcvvyWYVUvjDx1sVNCX6PcEHLsLph",
  "key16": "4XXQYNjF9FCacL6cXUdkWSmBsBBe2k7QnaJ3vyFXBtZFoTmTauZLJXEjtacpRwguWDXwQ1mp29fMrmtpBmbxDM3J",
  "key17": "2L2bkeBhp7HjMtPSRQRjmRxyjdBneAvLY5YmHttDM6RcJzgNZfBRWMXckPzg7NLaxHztnVSXuGsyMPsKFqb4Rr2C",
  "key18": "52L3KD9hh3B2WvMEfTYjbmNGUp8pvFKsE2tFVGuD3quZGLNbSoc6B4wJy68MD7yQXkmwQosxFyjpw3yG8FPbzbmt",
  "key19": "2QBiM31xF1VJHrcJsKW66pDiew9bmSLaBpkEHJgD8cZjS3UyYxMUPMZA68B9fqYy5vYLem7B198qHicVrwd7CkS6",
  "key20": "pEFdZHBdNEuBHLdN9YqNo8WTcpRMsUhZpyG4w2kSaBV1qCkuqdd1UqFihbQsyXgKFQ8jLJTAVpKZK4kxeybSeEi",
  "key21": "QdThLS68WnXVFeESbAkjUmpyFmAaAo3mzZ3YuJsF7sFPXhqcX1gcJjAVgPGRTXgjrKVJeQsX2E1EDhuBjKcSaEz",
  "key22": "3nG21qKSAGVybdr6GKGYJXA9pyVUPkivXj7eHarDmKiY6FbgZpEwLnC8wmPKm2rVmTwA7W67S8F8DEAZJYS66AEp",
  "key23": "d3CvzTbi6UVFRVWgZbnnHYBZpN8zLhZbQL1hFZqTwEpWN4TUVRPhii9E26q9DRgci9NeYN1GuW7zVx66tJvnA9H",
  "key24": "4pBpZpmdPr2XtTLDFPCs3iqt995GjZRDfPuwDpzb9nNHdyBfjsr8ACg5LLXtW6Abfqgb1Ri7mXXmbmVoDcaSsRGt",
  "key25": "2EWo3XrHV7QpKVis2Xtr7BQGhyZ6PYAYVEGcoSAJCd7piDjYRr5SdsWNcc4thuSBnYXJodR6Mt8GugDtZJZ3xxdM",
  "key26": "2LvkY9XQyDPP4pumZHXFbkPZoDgvwMb62nbv4cpxZf4mwBt3yfZwK8bNtZQnodi1Ku86vge3q3aWqWywPiGAxQLU",
  "key27": "JPSxHZXPFUVjdejsfkZQbhndVJWuvgaczFBUeT42g3SZLovMgNQvSVvpZAEPUrQCGyAKrFvCpvnnmSE1jFuvU1z",
  "key28": "3xL9RQm5UxJtJKfrvaAKB1fk1TNDUmNsxWT4W5LCKKNTcyAB2QEzskPVKeSeNVPCABAHgfsrFTtuM9wJkxhGSm6b",
  "key29": "5ttijD7nYXZv9JLY2mBKRdi1nxNsTDDE5eW6hsszmF5mDGMJkJiRNRDcyjdnRr4Sen8q6AfUKCDX8TX3AiDUfLvE",
  "key30": "dXMRGbS1FTmL1nNNgK8aRfH89FGJ3uVhyYa4g5u7ZaxbTfd5DtchK3jhqgaqhAorqphMTL5uiyiyz9JJjBWXtRL",
  "key31": "3rctXWgNkw8o28tJhZtyCRttfgUHypNjnhF3Uzs9pLdQ2i8c1neLKE3mxvhyKxo4EU6EuNHNdn7L8B36LeyrAH5q",
  "key32": "31Lev6Hw3aKfBYaMAvuf6bLb4ebvfnWNZvJ9xJwDxL3j7pgZweGUXkFx52CuoAkfHu1hhCUFR8hc8YQY1RJgbeV1",
  "key33": "wZdyBcxXB2Mvy1UYiXQKk6yB9R5nqjeRmtUDfGndf3qZrMjoPYCYhxU7WnurA7VVXuK6wUBJ3VevS1CjaFgDrxx",
  "key34": "tup4TeDCVC2sHVi1LsFhnH1yNnsGxnhirPXWh9AX7Lzv6uKfFPtCobdRREHcCBXFYe5Lbq5rM17q2QRXLwWYsED",
  "key35": "3Hgw4w8GhmfcrsJJ2PzTEFN69iqS6gB2YuYaS7RSSLMB6ZR5KXaF53vVP1zMJ6VzZVPUH6rJUyeLsFPjTsDg3F2",
  "key36": "36BM2n156ASKKZdqyeoYbYfnXdxe8Mg9ugF8PvMq2WByNDKcBAYkSHLc29wReJoFHgDJdRU5vMvogocBJqML3BLG",
  "key37": "58rFsPMpsfen8Aesez8SoDKbj7baYubBoB2QSDGESPF8cBpK1V7Y7WsG1sSxnY6qhR4SXHLcFR29uBNeGV1JA7tZ",
  "key38": "5EYD1JuDwmLBaD5PrydCwTgaKfK7x6Pwm7bUUvti2YY7gFcgDwmEJoFMxmdkpTz1GqBL1nKpNGSuEwcBjhxgraEF",
  "key39": "33nTzjqdQumCuMmV6j77v8A82nhWxTkyZddMVddop75XRBxAA6vNiFtsTHibkd5C8PXKf5jtSRJtJULgi2rtRBfU",
  "key40": "4aSv3Ad7ZC2GxF6nypTt7PkgtozdS32KQSMEAHyN51tXxsrfPMrbvSCsuCTbbJWMX4hBfNMxNv23XhAaix32JcgQ",
  "key41": "24Z5tcoTe5NG9Y4K6NdL1nikrmpb2jT6gpF3Yi1PKyZFqDUjMm9h896CQZeuq77dHXYZrE61P6guVnonNf3g2mFP",
  "key42": "4MQcwfiAdM6nzcTvmT2BxgjyMPM1mfC8cjKGqXnBqdCw1BRttnadq1SsrTcPvu4p5c88J9Tc6XYCtT1bnEgx3vRo",
  "key43": "26Hfhunqf6wYyz6QP96mEcyP2vVMbsmWvk1Jpzdhppqvykywu2MMdtGfaYfdGkDUTVpgUZCod3TebnLfWbpJfGc4",
  "key44": "5Ngx1e5TArwDa8WtKkqRDWknCwELoJ3Zzw9NChzzgHhWuRcs4VruhJyFKpeHDegGUsZntDipeeju6L3hqcmxPqgV"
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
