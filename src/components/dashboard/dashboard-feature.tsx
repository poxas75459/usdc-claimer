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
    "CwY5rzCPxcb69y1E8tpgCYFqaXwLHu7nyJqZSRXvjDovY3w4CgX1HKQYUMDAeb5oxDiUC94dSBk8aVMuQf2uFpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azyrT2Vtbtmc6EQeYk22CufJ6K4skmywnLhm1QLcTCApPUebArxai8FwARWybbxETUQ7gVA8EYWW44DVAFXAn2b",
  "key1": "KBXYRJReNJxbLcjHGb3YEWJeoKYn1wzW1S3BwszceVzqqigD8FDwwByBtVGmA4H5NzESmE6hkzAzUDBS9Vtx2xM",
  "key2": "XVfGnatVDkJxys5qevo3HNwo6FqETbjvcabA1fjPU7L4z5Mo59UznTTgoxUsjRkt66XTsvYp4dNFPFGtcBJYKDJ",
  "key3": "5fByZ66Z1pWDfKLPct9cXzo2QCPFne5Uf4SMyg3LfoVFpF8s34FUANSJ9FwfJWGVhnwmcdBrS2WkceitnConm2vD",
  "key4": "2d1f7zagMsFro5JHV1HBSNzHXW5i6gJ4ZAzshMEDnXBN5me3xkpwCbe8LwAkFbk22vzZTXi6uHGYyvNuQ2RQukme",
  "key5": "2BuSh3Pr8Gs5Z7ecM1T7SUza7rprVGHP9gSQWbZMFnUgqgnzEUSRbdKaNaKqxKu4TvN3DdwufjahjsNaDKgSCHT6",
  "key6": "2ngfL3akVfJGoPaHLRbDqpFkhpHCtUJokjMxTXhy2MooSJx5QKAWNTSPfxWUhTzbuqem6jfK5dKRV6RQ1sW279ZQ",
  "key7": "Vg1hAjGfWefRRSTYJkHQtZnkdv9mfRVD8WiE4FXgKSc7w4ZfnX1PAbNJ84nskrTzRns2xj2Hy8VkVPuC6AnectM",
  "key8": "2PMFz8bSbVLtvSkVvRHn6U47S4jYoo4ckmgrVfrnUbLphS7dzUYHhYE4PKypM6NjTWuZ7BkYMcz6jKd61WC4QpF8",
  "key9": "3AKSigeAQ7NJ4iqS5wzjt5hfWx6428waQHExFn5PoG6MBVkpWdVvKvDDEpfZdqxUmBwMDzcnnToRNggYNZGWwdgb",
  "key10": "36YtQVWUh8EAJskzENGFYVbnDxMBZuPpHXorgpCdym91u8eFWHuX27ti5r16im8ABVSTrxLhRFAXepapweaVvfTB",
  "key11": "zmAiiCZMjX43KD4fnXNb3WaMqux3aSmnzP78atMhZgVS31ZvRKvM53vaaqUVaCm8dKU9gvcKYhvUCBq6cZe2kdL",
  "key12": "25E1nV4kkqizFbY1o6fx6RjLtRLqwdvgL87UHnP8zud4tRjdnNw8c4BQtVcnGifLBU5iS2op61qYvLCfnFZ9eSnw",
  "key13": "wpbkN3TUAUuDoXppdzojDHRHPCDqzzzCnywNsdxWcxa9sWHmtg1pSi93Tnr55cv6AyvPXqcjsQMB8c1dxcvmWja",
  "key14": "QRu49xXMjSd5HkKQ6xQNfZPDheUD1CRQgTECpRvSzQSiRKtAgypzUK9jvykuV4rnnjEM1ievs3vHfafQrN6wTVC",
  "key15": "Ez2TTUEBvbPoFeD9ZP46htAcAEGPWdmtuJxAD9RD4XiFaSzuBwMUak4FwRho3A8XVwTKuTiU1FqgQMdebHMkHVw",
  "key16": "WBafk9yrjejt47k8K4WZffWCnycgeKqeB6vLK5ioEKrnAnGc8m5FGQtFQG7bujMAUcxWS6bywLkmWKZTRMPM2Pa",
  "key17": "2QD5PNBMbtsfW6Ws35mGrZ6QmiWHTmfh1MQEsP2FbDp73CTAz2fMVjcwea6tHBT4YgtuKg4vtUBGUgTq6zUjswt9",
  "key18": "2pRZW3xeQ8mcgJBbJhRdcweMYrYY5EQzjpTHHB9v8Mize62uYG76eaSjok49Xgj3rpR5YWGKRzrc2Jhx72EXnAhk",
  "key19": "5ggF8Qw55oLn3fhzaye8XJJ2uup3WNw4VdjBQBm57GeinJGQkhKxRZgvqDrJZJKTufMGC6senCEk14XXoVUTmv5g",
  "key20": "2wz9kh6pvuJFWmcS6Ffg7zTGprjRRjAgmiuPyHeuoZdGtzERVvovCA9CE1ETraUjS3M4bv2LoiKd7LAy4rdjstjw",
  "key21": "66D7gmfjSfgSm3maSHkHdjXSETMZmYHw8qVpK7Jv2pYV7xQeATHL7rsRf65PVHQBDWM2SauVgTXEMQ5gqUf9eUkZ",
  "key22": "3SMD5ssXgsB4uqPU4Si9byBwSXU2deXmkTZ26VNnnPGAt8EwauacyCmaJwd9WUmUV28zHsGApFqGiKL79rLa4Wft",
  "key23": "23g25FfHTgnKsQRbA7QrhVdZLwM3ZjXk2xmUnD94cxA4gbzQsHpNxizfPbmBLHY6x5kiUqcXhjbAskMVNgUBwWb2",
  "key24": "6F1bU9oDSWfM3AqpfJRy4pLMJtUyJU3jHyVgegqA8J89ACA49Lkx9cSMQYBpa4mHQv6Z65RUkHdoVMYaR9QKbPb",
  "key25": "5LuJRKhyMCoHsRCo4ETsvbeJg8XXsrcmGp7jq1xuWp2UQZcACDfkLM9mHyXSMQbMxrCPowhtN3B6hDq4BmqLxnB2",
  "key26": "cEXNx7mnYprpSFBY7rFqmCnL395w2nbf3CEwpFZp2boNKSKNKNQL1tC1k15pgL6C7RJHPzoPQRogLJVTaaBqvzN",
  "key27": "4ozEUsaZzPtXhuR9NbEju9fDrB2SRMpu5a1PnSaUxDFFFPTmXm4LcSEcfwbHejFZ49QBhmKcW5pLTFzqK31nvJwC",
  "key28": "3bRcdwtyTEqHhqz7G5wvqoA1rnduqvj3L55pQTXA2XpNf9VSxYTGTAKu8C8fpFA1FLttVvcMK6unxfebnvjJpKKe",
  "key29": "3wHQfMBXWbuRdk3vvegs7CyUdYNHbaLuM1JVhy58u1gi9vzET96u7YUpXGcJZ2vzCzb19zZspm73MCbLGVdQFbGa"
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
