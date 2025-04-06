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
    "4PfL9KjveZKdjscGr2U3vAWcf58WBVCgWtqM1VaXdcebhL6tzHktZdt2pDsonArryq4XxDJLAYEFP8mc9SQRGs4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHXM1WdVsNGezy6dY8LUrNhsnHwcjc3oJSVCUXQWCMMUcQVPhJsWnFfnozGFN1qLv7h57ErijsjUkuoHmQchqVj",
  "key1": "3fFMgxmJjhXPgshx5XW7gcX6SZFeRoGuLGKUQqCeKwnKJ2JjFdxR37GTgtRuTj9P7ydME5S1zcN7ixe56xYcXrrQ",
  "key2": "2EskzZsUMRYV4ZEVgdAFb586SfhAEPcad27HL9AbrbyeJ3Rqe891DR3NT63oFNdLmByE5Q6mK8qtwpjn5ZnrcFdy",
  "key3": "38GKANdLeNf4UzSLFsdLr5SvYaKFGt4kwZYRGGMHhjhvRtwPHzMjqnkZMqC822xnFvwQKU3hyhgT5VainA7KD51s",
  "key4": "2mbTZWd9ogQVK6QANmLcoUeDrgjAxPktRBkpCJR5F3gSCuxA5U2h1DEhysmjZ9Q7EqzocNUvU635ueS83A8f3JCn",
  "key5": "3KLBq6aGqCbyS6tYuqGd7Z44VtT9MrTx3BdSXPKY38NmdCPiiyaafR56tgYigKGUp9EfUvqNzhLyyotQ1Zykfa9Z",
  "key6": "5xAmaNX8X7GCB5Q2bDiqqEyBWrYL1kn1XdYMiRmYt1euqHi4UGDAVG29DjGiz3WCqhPbHci1Fd6oRcrp3cqxMTpg",
  "key7": "5ZvG9ooh4e4XmdJXkLGQ6JzPANX6mzA2HKr2av7TZBduQgmfz67E1iogXZsAzbv2HMPdZPAdmZPtdFBQ51kTjxqN",
  "key8": "5iVo963UQtvD6JKSfF4UQ4D9XMY2Riiy6cjHW2BNHUk2GZozoSggrvrHNAcD7o2vRhuDZvJ6PjQh7fzmUfEor2vQ",
  "key9": "313BogKwSuC5G6HhQuc1NhJmFQGVp68Rt11ZEE9WHXrGhZw77ZQfmNfoH2dgRjBLRnzYz5EcTQGxbLVEWYwdXvJS",
  "key10": "2E46Rm7moEb49fu2g9JBfPDMimetqNZpXfwf4iEy5hrcFtPQb2YZvbLxygjQ51ny4xskYZtaxpxcPh9PBEoeqNRF",
  "key11": "3EHPj8PUq1bqeVfJQfQ6xBiNwdfTteWaYqUnB26bwL54kQBaqLGPgLEPMXA5WeER12E8LcGYH2tmmuMNDu7yaByh",
  "key12": "aqenjHrmDRxKYZeRu5wV7TTLzgN28maw6tuobYYyYgqVoNiWMXRHHkUDpyhNxHJncyFrUVswHTPFuhHK6Y1Zuqk",
  "key13": "fuz7uK7UqVzDkVDk3uMXAs4RGYKjZUtJbYSJfgSyL711SwnB7UkAGBgJbwviFsy7D3WXDp98BPqv7X9WbPscRDP",
  "key14": "4sEqBYs1ndAYxotCLkBrUouqNvt2pq7RBxPJvupnQZ8Vej8Zzy8Et2CbCwoSoFBQxNUQMDgyRQVoh98Axry7ABUm",
  "key15": "2svfTWGF5d7w8gpqdUjJPM29DCDkuFhFfVJ6B2UeNcNUxmMc9vPwZRFTsBX8hYfmrp1DaAmzxycphpYySpSXUevK",
  "key16": "3bDkwNYLEygVBVrw1gZV4HpvGLy55VzSjhgFeE6fyo4f3x9o2bMLmuYTCz8t2371BmJjrw4CAE43DcQQt3JpoEZi",
  "key17": "5Q3kr9uU52JY4eQ4RMnahGceiksJRMeFoLtdSkJP4E3TTvMQisfJrMnkb3bSqEHzAfJbJDzD3ntPAewKiNTDEJA3",
  "key18": "4c5fKHRC5nWPqLFCghGMuJS8yB5xZK479ZLhF8eZCdMuc3H28AoM6gJHhWDeBW3gRh64ZoXWBfjZvK7tudFER6ve",
  "key19": "343tTXHmNrFqsYwn7Znx8ZxqphY5mk2Gp6HcoLBgUSDQaSTtS2AHee1CKxDCvocGejvLgGm3AWKvD8nAERFTLpSB",
  "key20": "2nNoxvDq83VhPbJWvSEuaU76xPSbo57h52U5oyKGkj1W9FkkG94fWMRK14fcER9Rkk8LnrweUNaaCFsMV9VaoXFZ",
  "key21": "3E7yi4nSqrYj8tpb9WHLLjNcSZFYr268SEUYUYx29PyynjpJyzf92oo6M8RR5kAYx2WwvTf8LzymQTLxEx6NDftC",
  "key22": "P65qEJUxxaQrKxjTb8AjSKWYZ6Q8Yir2dijX42Y35gVhG9ypHfKAj991t6Xfp97ttCXmwqpbUqbo8vgQsPhsgSh",
  "key23": "2qbFJkWsfWCWFoxLQkncBCjKpvKBRwTEbPu4WqyJR3f97LN6Ddv3cHvWFjEsmjzXZXcm9QjE9DgDZDntLsFajiMB",
  "key24": "4xVsqeiiKDDpbB9bPySLZH1aHC97HKCKcD857ZDMgrQC7sjb3Q8EpLo3jVvGY1zoQR4isfMFYtc7qQmdx6sMkAqt",
  "key25": "5iz4g9scwQphwUt8sR7HccLACb5XCh7GxB4MqXfvRTGvAQXxEUF9ngqGcu2cQ1Y5omkfC7CgVQTvtEs4uKmRoG3A",
  "key26": "m8rCmqBHN5QuXk7XS9zAWyqa8RrwDJyRnGKGcoK6AgFmjixtyttuDMszeCbs6xtkFkTkUQXQERL39sySe3w9QdU",
  "key27": "4FhcCxVsH5TKRBrUhj6WgGhy7ivfrz9uLa8oz4C8z6Yc2cWEk5KRsmB2jMWY4ffhVmkEA7P5RkVut2cw1g5tZwFm",
  "key28": "4wHbG8R65uM8w98RFshn58STQB4xPgpJDDbLrCNXxoQqaA8h4BxH6sJwvQbBzwfD4EWbh4SavFXmzzvPhAdyFPaQ",
  "key29": "2pg1n48wurwcAekCrdVY9rv5KeRb9JyGANXjyyydr6zHFSeYqFQ5nEbKUiWB5qBCsGPVKG8bMDMC7RJ2cbsdiKD7",
  "key30": "4om2hYF3aMbt2yTYShsQaC56umXkpz1w9sxTQTPi7Y8pTYqNM7YxEmDCq1tvDtztkSuUzbBZFEpyDBNkFNR5D6Hr"
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
