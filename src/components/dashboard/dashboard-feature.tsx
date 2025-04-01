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
    "34gyfTH3JWdZSo8CTcW4kF94TGsafT9KTN744HDyiW62VRei6J4BcCnutTAZBc26kuRA4P8QT6qJAou4DP3Xzfdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6ru7F72fszFsRENjD7A3X7MR9r7iWztMCkStW3Xp2oupBHid9xaSboJJE42haBWShvEZnjDgawXitwqTYjUfGy",
  "key1": "4gyGXWrZEtSjgSdri9m72cFJicMGg2c415PDhEnyhGuG6JoGeip6u7LmhrcL6rrijLZf8pKoyCqLW5zU9YoT9Nry",
  "key2": "2nqB8HUqdkqckqxwBbUcSig1RQ8s6Q8TXuaN4JNrLJzNr8EAaH4F5NkW9J6We7bJqjo6PEYbixhqoVqLSmJQP9r1",
  "key3": "8iTBaVxVNqcAXFn1zgr5iqQJB8HcTMsXHDxz5A2ELfRvm7X4fA4yTkDLNTrZvvvCwFdgFA8KUAiPHzy1daBou8G",
  "key4": "2bem9Y5zmavdi1ztTRYmHMfDEc7CGM36n7sbX1phXCStWTmPzBMUgpLavuHwC9h4Va1xBKdgLC6qdrvoJZCUeF4C",
  "key5": "vUpUGRN2xL6m6jJ4uFP8ruZCKAzBSmn6S4wqGZU3PuMMXhhD4sGsaV27XyVXgNZ9ZRroaDPQadX9M4PeFFwfp1c",
  "key6": "3QaWMRYHP1NyvNTY1ijKn3AmEANRB4G38uGZHtfKWw33vM6Z7dF3wTUVbb1S4PgcadANM2jbfvDdpPNxkrNHuqRr",
  "key7": "oyggj5MpAiVVWTkr4tN2x8zje3m4hsRq1xUtCfRkrGQ9CfVzSPjTEWoj5srUXLQbMPiApQBtduBCABF6zwmeNRg",
  "key8": "5zsJN63NKy78eTnHdm2rN2kdPkjsj3zvH1nSiYryy2pgmyUjednkeVQAWNpuKZQGDnkKKn53j3m97JSZ8uHYQnFi",
  "key9": "4WmEZb8UXqifAxr9tZjbx9rbp1ETL95SvaDXupx5cEjHhCAxNqWQQ1W4fykWaaR1uykeqyEPsu8RaRmcPPiz8ToN",
  "key10": "2UPWLzr8CbTVvu158btqZwhV1ExRbhC2Qdn4Jt6e8s8fyqhM5o5NaU1Q5RvHvVyX1jnfnwnTmREoTkoBjz9hKFT1",
  "key11": "2JYj28coa5cSZt37EUUKEjUfVKQTTHPkkgHTV75s2gYYHKFK1Cr4sGQVB5cBPZTHaUJeY5G1GvLBNjdGva8F9sTS",
  "key12": "3qjAA7sT8gk81p4AGaCcWUk8rkzWtawSiLF1ANHAicRumbbomk7zSS9Z4CznAeGYVgPuJtTq3tmrhCEEiKnuLkSU",
  "key13": "2K12PG79mQ4nmCdtsbmmXfAD4kKvxe9SinPKrNPsJb6VKChngWRtrWLeexjnnvcEkFn5N3LqgHG4A5pQinTR1m92",
  "key14": "iNfewpAdrtRRp4rtxPuu9FhYzYHFukF5XGY6iMC737dFDf8XEnbhkWaViWyRXgWPTdmAM91QFJKPrNTqmX8zkPs",
  "key15": "4KVXL8TzVVsQTWcr2Sy5gYRW5aqHhN5ciRF1ivxbFpyBK5Zhy7fhe2x9g4S1BsqPH7McX46CYLnW4TDw3pBCycr2",
  "key16": "VF6gYac4kGa5PbF5oUqqMD51eM32aaNGWVYxEBmtwruwU1pT5HoM6FSEmxvDHRLUkeQXGeep9SHXxbUnW79gYiG",
  "key17": "2C6HmhrnyYq6TftgakiaYnCqZWyiDodbLs3bi9tEtQjVviLFA5WxnQvfYWnzkVJ3UZHMSgq1pqcS65ZF8eCkc5QS",
  "key18": "8BdLgxEHro91NrbAxiCgt4KTiuG9WG4WCGSYuHCNGyyPTmiTuJ8FAurDCsDt3oNVFXhmoW48qRbTTG2Bvz92kNy",
  "key19": "B3TLqN1Lz31FQgiuDhtcSTDGPE3zGyCBZXxNccSnT48ZKtwjUNM9axXKyMk7y4WsiPStFu66EzD9f8WGyipCUAG",
  "key20": "58AUbfrmfnomTRzCWqNuGr1d1bez51uCGWgF8arGZtRoUcTfDVxqXxCXuTq1WV6e2oAoTxwBBWvZpyqutkR8cNcT",
  "key21": "3Qm24XMR9CWMm1WFo6zq59pZSJpMGbKwuk6Ci3WSqkwYrfWZBLE4JD67ZG2LDEyZ6QpEFSWEa2jWTBQ9FjmHxnYV",
  "key22": "5jMVtbGkhaNLfgdBcPJdvxJe9yvApgejHS5YpH6EdqjXY9wSvHEe5KXmbKVgFNKSq7MyzfKP74WZDtWBi2Bpecvw",
  "key23": "2xjTgY7g2UPpugN7KCvzDQTevV6bYKjV3sBd9CbLHGnEeYJjUSQxAg2Nf92yZDmA4dxSLZsgVSz83uVotrxSZ4KS",
  "key24": "s86Xy6C5iaM43hpkkE789FcBaEVxR7PAm8xrLaakksG5dGTWsQdNpzUNidda4i2CrZaMiijHwFnhhHGZhnbQEgs",
  "key25": "3JHve7K7HAALZQfQtRBmwztSVYbbegAitnL2xPqjjYD5xs4ACCdCNxtsFng8RLrHCqcEjNNpzci3fUuWFG4p9DkE",
  "key26": "29uh1mc2sPjx7Xit4vxrd3PKeaYRadaj8K8gwwzq2teeGuQHY2otMXoMYxuV5q2PXk7BCdwUyrrfZTWMepiZKXmo",
  "key27": "24t7NrzyXcQBfTQt6Mqt8ZNq3ukJi2EP2FQy5AkBt8Y9ZqEG52fBTCy1nUZ5ob5he2ctdHFqYR6EbgRkdVa53wUD",
  "key28": "2Mzg8s4g5D1QbqYyDRroJ4a9f4XXLmiwmqBLfm9y4r6pqB98zYR6kFcw87R6sqtkT3ndma3tchoJtTeJjQcqouTP",
  "key29": "CKK8ovqa6kDQf3H8yEUmqATELB6snJ5D8ijqwDyUTdoSc8TRcNgoGmq2Y7qgCdcuUSVRyve4oA55oxRcMXdNQ2s",
  "key30": "WKvySM9ukJPSWAFyCGtdEqkzSAs1ccNZ9y1hQMEJNM5rX8njuFCPSBoRzWvTVz2fzqdeopxjbXz5uDdvFz2V2KQ",
  "key31": "3Jsr9LXHNRzDwwXkDFZwdCLmJASJrftJSWw8Ak88MHPi57QVfYkcRCRRcye5xKDmvcF3uyD6i4DtLphKScWmufGL"
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
