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
    "3B7rvLFZtBJsCgpd1MRRcYWKU2JXFimJYYYdBV2ptnSWBp8nStBLVvCBm9LSyA5W3Tp9RVjksa3yu96JtL6SfBRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SeqgLm9RjBRmMAPaQ34St7wGvGT8yzbJTwE2LgYziFeBNv5vLeSmt1qy4FVaez4oz7dpedm55KW5TBuoUqNHxMU",
  "key1": "3bQyivJmBcLV2tfe4ssPTuNMZrLKoDJBnJeMwRAzE73kYHweJ9JbYJ29D5PdfHqSLoPzqHai3sa3PMmh5K8H9ZaK",
  "key2": "7KdyzdmC3R8mDSyHa1VJ72dSDxd1LbizpdhT3Ve84yMZpvaq2U5ZvFErqxK8gVQYsTBSxhtCY7yAfyQU2Rhp8H5",
  "key3": "5ECpMtammzFcfuNsKUKBVsRLVNMDkc2DGu2gDrRZQDHYZRJjfDvpaL4vALCMzsYQHNf38wvdFSbfGspYvRcRQd32",
  "key4": "2cCXnDExMT7yHhmX1zQwMnerD6yeLAuGGqsCShngEb5Ef7Bm3ziF3nM8enUSicHVNTDtoRE1SgBGz5gSzCChvFM7",
  "key5": "GdhCrDP2p8CpNnk9AG5HcjVmhWVKzkxivgx6J3qm8YAqLgw6eXpVeZdr5chK8q3TPGXBCeLdert8Gg7AapHYwRy",
  "key6": "4FKafTzmzAEqQ2g1SMUk29up4YFuJp5Cnn6Gv6j6K3xDVNd6J2MeJPkP2rrh6RGDPd2TGrAj4bGn5MuUiGYiv7F",
  "key7": "5TBn4zfj6gvPUw4PiC1bo6VQCFDRECYSD6FgigfH7fWcLF2Fd8ujHf94mbeSX42obRVyR7WYWTPSRCzfy5wDV36d",
  "key8": "4YGfCnN3nSBQvUGPygmDaSq6MkVsj4PUVroP9KvwfctyHxtiaM5VHSg9YRs1ShffQvSWMmveFHAUfyPs6YzQz95G",
  "key9": "4ABXZ5T47ZxJstzTABapTRzFvXZ7WFp4ZK4aDQw1fwpLFfdw5XSxeNB2eC3qBJroi7fRRsgqXzo3QecMW1k5W4d4",
  "key10": "5EeytEqynJ8TciThCA3ZXyWUrSbonTrECqpzQ6rJxnqiwotEbNA8CthFqJXbKoRKx3k1fPnX73bEGPnYC4LwdHWe",
  "key11": "2kz4yYUUFKgVC8qmrY3SWezNJa4J1cBFiSQVHdvyKNivDhXSAGC7vFiew3tsRe9ACCiNontLF1ZiYLKFevfGyUeP",
  "key12": "52WhGvrPmSREUV2hHsnRjvhUqzxHdQuHG9GfhsWDqved1tAFLQ6k5agobdUCsdzZ1LEXSA1XZMicpHfLuCD49PNE",
  "key13": "5qw8mCQSiywXVo2r2oSHbF8gRAJDNgJx6kYnfMrdbhPX1Vio65QrVVuaXd7nGkGLBh2UGS7GfGFCGreU8JffzTTL",
  "key14": "5GVEyNDSDdvdYAyWxEpF1VcwdTCjHb6ZxH1wj25g5cWPSDtN8rVKoje3YXEYPi6ZmWQgHrjBRy6SMAh1BuirKMvZ",
  "key15": "YTrXsKTwTvSPhUsPmpwwgryagvW6fJPZ3YWDV1xTCBHP4uhgskeMpBapVvkBdV9orW3FwENBRwovaTm7dtuapnf",
  "key16": "4kd8ibftnT9SfLcL5pEah3TWv5dz4MSDmQjhXLQAPsstrhqcqWHxjTj6Pc1sxiQhrTa8n79rxTqw4hdT9onfNbCM",
  "key17": "667hkyT4S5x3N9SxjMULmzUki9TR5pD8NaiBnAvundQrGiosXhBK4fwWxuappCpj4NmagKk2914Go1HJ7JTw3jgH",
  "key18": "3T588Ff3QsMZU1DrQzSzqP9aE5rDkqH21gxw628iW71enTtPkMudePa6HHChLxXo26zVqc8ACxdTmULR1TY6T8Ak",
  "key19": "cEFo4gXkpiADmhKymsHXAEhKLMPzYSW6Crph5Jv2f3btC4s9qypDnU8CNktJ33YwScsqba8AGEkwAU78n9SFSqt",
  "key20": "5XkiYZ42YskAcKNUbXpDbb7eMpv2HVdgKq91ZJ2S8H9WtKfQqPszEhQb6X6qsNxxMvcDz9nWPiBj6X9rbDC4qNNP",
  "key21": "n5bvTrLbymQXP9o3EyYabnJgNcsGPehJA25E3eVZ96jMcTtJmJ6h7qXh57uBCbbbqorgrqUyZzrUnSu8Kq9NQdb",
  "key22": "2ERyc7EQBNSTKwYaSfGTA47kAgUWJVjbizpdUgJcNyxcas9iE16RBuXifwAdB1t5aiRfMbvbDovtkHELLh9KjDuY",
  "key23": "5vm9gwztE9dDDdpmnfNZF7zxPDMa7236GRn91kDBVZ5pkULELvfdy1PPHdF7u9josYhrw4ncZb32KHC7vFZ8Sp2k",
  "key24": "5suyKpeb3qRap5b6NFuVAeR3FAHeDQsZNZCKrFXvAreCGzyuhZh4kJPkaF99gAm7ywaxqBmpeP9KxrwoC2nDpeXT",
  "key25": "5xjGDbVpa31Wjkc69ugSGNHr98ibTWFVX3WjdKJo4s4hUicAjGPvpdDvDh5zsrogbHtmrqsyBLBg6CwNo4xZDgMj",
  "key26": "23uBSbBFx9m9QBjZNY4bRkYNCZgWv9TXwurshaYTj4cKoMrNwA7FtsVKNcdL4sPKsUmdKataymv2hrPQtSTSxsMf",
  "key27": "4nKQgCwBeJvfxW3HGfENjHaowfKMLci9736y82f24yZM9todq3LEACcH4MvUtXqFbedoGLvDcXwKxT1uh3RvL648",
  "key28": "2adjpf79axHiKHL7pJACivxutqU4PYFwzgjmuDHtUzQPufgo4E9YciLXJZD2K6ZerjpjEXgBjwpxGCa84vAaucm6",
  "key29": "43N71yqZ9CCWGDSkuo7MpAPR2u6qvJphqLeGnoWFFWhVNDkrL7pJwXZJdGMGQX2Cw29bTWHyVAQH1LoC1r5pKyvJ",
  "key30": "th3VRBXtC41TTpjCpkNvpez4Ncu4KscXNZkF2EdhNqB7aLnazqgERDLi4Qo9CohGjqjtPXCj2NKba65hmgxfqE9",
  "key31": "4NZYpMogxwy2T9MqrSY6EvVAuHj9bQnSDukcd4wg4hstDEovHE8PSCrhKkCi2XMBk5zfGYifiFKzQ67w3BBTn4hu",
  "key32": "2nF34dSZM5FZz8RbWnVHDuWo7JfhMc6krpVnHGZM1eCiaiZyyjRJQkLVmspfHMTNhBtfQ5vMBqkouy7LS3MowrUU",
  "key33": "2gvMx9tbtMHo6uvFqsg9BAoDZpeGpfGyjF3LauqDMhFV19t99HsBJUVTEUoobtJo4h3vCjNWRFje64Bmimy8gRig",
  "key34": "2W9r64CcBS84dCrRZgYwvpG5XeNcP4Dz4YhaXUbDZC7d9hYNwpNJiYbnXG8MVfxjy3wQ95zinGYXm8geex8oGtQa",
  "key35": "4jGNq8fofWH6gamyCnGXG8uwfqsanxMmqRXmP3HU2VVePBpyFioVDhRu7p4dgBTxX8DszQMseydiwDSAVATSwKH",
  "key36": "yCfAyawRX3rax6WPG7WBhTTfgE5gQJoLzWtG4iXHek8jVEF6BxQvVqrT5tF2QaLM3vms1TS7txymReQjozUfkxK",
  "key37": "CWjjCCoTD6cdpEEtN1FBkozdx5dVYRzJCqiwJqNpkf78b7qBXHJVAwbWC2f3UcW8a9V5JszwdTzdTE2gL8u2omx",
  "key38": "w8tVwG1gRm2HKwSyPgSQqQ9Q6JWUXhUkY38imbM8Dz4aTSTphk3kHjS92XTRDff4j4MV3JnSZCcmYNrei6ui3nm",
  "key39": "2BQtKGNwXckcEQ6zXfxEy8KMxTfrs2GrXPaqPKunQ6fbUidh6GtmbkfTmVAEnLhsSfCNcbvRSpLSKxcJK4qrh1LZ"
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
