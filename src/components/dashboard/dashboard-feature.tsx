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
    "3NVbzWKA1x85bak15wXTY8Mmw85cL16hzfBGyCa6NvR1YaXi9yEPqViQskmkELqH8ByTVi8YNQyKMGzFpR3T4Pov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3es47P82B91gtFENuSgu8LN7awhTDu28XQUh25tMquM2L5xEgJb8e2gbou8ZDQtQ2Rg5TriQ6DH2gGtqMyFY1sgW",
  "key1": "5wWRKzKAwv15jscsFxFTCbE7BsiHLxkwejsJCCjcKV2BotJ8GKrACYij3k33JRAbGKYEeS1kiXHVNmqHKmcEv8n4",
  "key2": "Lwa2LzUTrZxLsDsjzvAiucLmifCEk55fVQevASXH4YkWQ9u3gvKsrojfCJSS9aEfGZBM6A5o8Jebmk5VmnVPPuu",
  "key3": "32nLTReDrd7F9Vj2QtcECZCXeUHZym5yEzQjPWxUaSP7aMhjPktXg3tvc1cgZHPuGoWZa85DJeCfPzk5KPZ7VjMB",
  "key4": "4tK3XP1gfgTsybrUbHA2ieoF1KGAGZtQhwmRWRRij1vQJaw1Dru2hB3z4LsBS87MAsJrFDqJCmNDRzN2s5go2Gxy",
  "key5": "3ggc9FWkqsFXTLGboo3ZXN4x7QyK1zMA5XmYjjFA4kWXyiXnBhB1JhwKFc71opX9R4YRLsZGFJjDSBpZDVAp8RJG",
  "key6": "3k2G43ijC3rhXUQnX4gMGJQhAWPGzi4rJcmcw4LrCb3BhwbRh4LF5gBaDMgdqn5PcRywTHYnUbX5az1BT64rmGQe",
  "key7": "qtGNXp9631SmihG2WYhyaaAS6A9hdcVu7m2ds5CjZwM1URFkDGj8buUPDYopBsbzSVWGtMHRzuueYAyaHLMcNp3",
  "key8": "NwAiWzf31cSND4jCpJfpdyjaLHN1xDVWH8v7iab1rhfBn3zDCjyZhEzKASjDtNgHbPB4KwfFnotuEJwS6w75sCc",
  "key9": "xGiLnEJoc13XtVuweqcF5cnEK2bcDnUbEcug5vKWkqEc9mD9bPHks37pB1sVbNizc76vYQBskhov9XZqsDYd6JU",
  "key10": "MGEMP1hQSL14j2sR2Ud8Zi7TRg3a3dEusC2LEeCQ75szq8ET9exFFSZsqLxVevKyTtk4q4sRYzg6kTsDbNtsXTm",
  "key11": "3FoCyS9vqAdt6a2jazji24X9rfuZo1vQ8sAdrexsrWxMvXUx2WCh8NWeb5QRVu67M5HH4FvzugLUcs255g2vuUJj",
  "key12": "3c9Y422QCdyuBGJeFfPJgCpYK17Yt6hAtaqMeD2GLevyioZXrZc2ZJ3j2cK5teF1rKvUtXsVRSk46TJo9L3njsEk",
  "key13": "oUwoSumm3pFWXppUVo2VZs5rCMwpz1mDc5Dk6bnCVDgN9WkGyjj4YsEVNV1sUWHbg1Bnpi9aRxdXS2torVGtuuk",
  "key14": "DxDjWXmKTDRgBzyT6wFrK9cUcK5tut5JHKGgdk25mcaScbCWouhAKeD7WagTx19D8PfzEuD41VXnxB5H5wmQhFP",
  "key15": "4cbbxUoz2q3ZS3FbeYoDBrab8HkedZPD4fquzyxgzQYzYwdwNw9aCniBmjcwsJDk2hapyyJm8rpSQWzczDYG1uwd",
  "key16": "MeBb6bhFp1wXQmk7birLASNo2c9FBEozEs4asCuZxuVi3r8kHWnbR8tnJu6tCAWHGF99wt1nUgxVXpaJtbabGHE",
  "key17": "5qCrJsh6oaM4DKEZHiuNBRULdEHBG53577NjLqwi6SQzL5WDn8X9i81yxKaD26qcLvPLr96vLxceC8bdGtjWhKoH",
  "key18": "4h9x3AqGJnPanvUqasksLDhdU3mQZUCKN4cSoZth81MAzhTm12yFMRw9Shha7e9D9zpYaGrm3jUmp2HTNKF3aDc2",
  "key19": "5KmEHmMCHiE5Fs2Z8Tu5BgqgUdLa4y7Q32mCSNzpjjY6oUDyG8a5dotLycvreRrPLPPAFSX8649wJDsexggAS2Ed",
  "key20": "ZxrGnheWhAk5q6WgEDZLkKSyTu8zcNvNbrjvFKncqgqyBZC2BXPkFwswTWRhcwn9WiTPZZECJPUuYBCWmQ9779T",
  "key21": "2wrWAi5gPWiPMg2GyGfzVtNgaAAFyKQYh6bdD9x3fJwn1PdzfireKtPZJWjk9ZaAK8szRtfFtNFTx3CoJr2K4Tgw",
  "key22": "rFjhEyZK58BqQ8SDC7eV54RwUEyaMhFZnJfKJsAa8UGh1r8snqMU1R1n2eukgscYHVD5EAbsBKTyNV8phmzvSBQ",
  "key23": "31nMkiYLH8UVACZS4i78SnjecYtao5xCX9Bgun9J8yJEagnGKhiHKxXZSuCMyBK3od9Qc8s9DqRwVjXCMBDPJCjM",
  "key24": "4FNXC8xAQwJCyXM4ExALN78A8EJkuuTXL4kiHuR9NpRn94FwLmAHK7C4dvAXnUyW8s3TytKF5oEVRjuYt2zusNc9",
  "key25": "5juc7VvwHydVQmRHWBAwj6CNAjEbXVS6b4fHTDLcuZci3NDStZJDq3ri598hsoVUfS3QjJNwWfEYt6wz5jXiHUx8",
  "key26": "2ZKpYWG6bwiyLGjHaSmCa96pMRomkDwEZbNKPD9xYoZijNTHHTMLKeWwm7UhiwMBY19Vim8pVRb1sfFAvCsoeNLN",
  "key27": "4YFMywDVxLnuGKQ8bPMmLkM8DEy11wzGybwEKxiApySNBq6DYSgT5rVuLZ6ixH5Kcg2yuaMCcHJ144Rko3xaV5uD",
  "key28": "4rPsG8tSQct2N1EN1GajHzU5zuveM7nvjKsRGLWVfMi1wPnku6nhv57heppWfG6K45hgUWJ4zEn9FnNEFpHuPAT",
  "key29": "4wSNkMi3VKShxVpnLS8DP9tDNTdB3ucA8bVkvBzXNDKP296hdHXGfTSqKCwDhVR3DgFbLEwRcCFUuDvXRjoD99Hq",
  "key30": "557tSi1rdbMrBpRzX9cH8Hzih4DE3aSh4o3aJiobzV7wmQsFcfCQJVu8tzEkFJALgseFoPxPtLxnUp9SnyJnzXZX",
  "key31": "4pZu4KJxxqZD6nGhqTEBRP8ddN6U81qWcJ291LEiA66sRvod9ny4uPqePP866gP2Ct5zQWEimmY6LLGC9xW9FS3L",
  "key32": "3J8iddzaBomWSmCK8o6tMp3RRvHCjK8Hf2wsn68jAoSwtiYVFDagxjdB7N31Hv5gy28EaRN1g4m7BYWQc47trk6n",
  "key33": "3m5iVA6s6PCnHj2Bp7S7ZZZHVGGdH7vwRjvwiS6nX7ptNwvVU2JoSHdtLvrCHrRXRSUGCndJ7GW3z6Yx5RUL6VhW",
  "key34": "37APtKgaQF9phycXGNDro99dHqYkM2nULgK6yyhb5h5HjWonqEX1TSsrNVCBPgv7LdG6wEN6a9asnUfGGtuABRo7",
  "key35": "3qjHNDZGhBTQeyVjxagxo3gjzFQRJuuv2PatLKGnEmhwt67vzih9qEETiTiqszQ8zSzKu9fqeXHs8CTymCAfyeUX"
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
