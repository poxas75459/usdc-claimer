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
    "5hXrZTTWC4ivwYMUVaQUEnnU1J4Viy5KmpuM4XB3zcuhtC8ossH55XSDcFYH4pS8QjE8YBLG2JK3QK729amad72c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkzhpKDt5dHZ6k2WpvKifqyh9tToncBKvvnPySep62dmstxyMyan6tWJF1dNCh4dgfxgPepv9j9U8qN15MdtqdX",
  "key1": "5UDvkxViCxMHHM5ErSXWrfj3ucT6sth9hU7kMtXBJnF7W8dJyovC7t7moKbAHPuBzHnmeg5bSfCxUhqdrtAUKD8j",
  "key2": "3C8ZvQkL1VwiTGB18WhnkjxTyHTwhsh8azgLmtyKzMBQM72GXLN4uMnZ5iLVpZYr5ZtsdpgzEL2gXbSqbLyTuZqW",
  "key3": "SMYeWDfZXnuLfLRyK2oES3TNqUXBhth7qnGHbR5NtDRUWfsbGyu8u2WyKhMkf1aYMKcvhyeEfHAFFRgQ5xktZ3D",
  "key4": "2WJxtuLaDAPHtCxakVGCNEHVhnvmFRjCLVvTJFkyA1BiLdKidNbZkJqBmY8c257Hp9xn865JfUSg6Ste4hQ1Adq9",
  "key5": "4SsR9AerBVkUXi1Uh9zkrKfDTKnzw1Jzs89GiqVjdmrj8HecwjYBrDqwD5kQ4XviNRjRugNDH5rbGTuKQVvaUZNp",
  "key6": "5Jo9XCC2NCkLGirhGt84sGwECXmbTwdn9mVXENWYF2Y5a3Zvt7nM1AUi7GsWxhoeo4K3gH8HvN4gRBsnGczn13By",
  "key7": "Gfje1MD93vPSdf2dudLvFs2f3cxT92CqP4DJg94qSQPCoKEQ6jdmCa8afZPZ7xyZBq2QZu78xoMcaoVT1EhezSR",
  "key8": "61h5pvFjxkbHzP1sNQeTiLhXUdAPABAmdA2yAGY8JmKXHZNFBcEH9aoTXbxfESQqq7JH5JN5cLQoWbdND9eCPULj",
  "key9": "2mQ55Z8SmqQAggBGmrvgX27LaX8rVrkng4YPieJZsJ7P5XE2Vtvq3aLupQRmix3sTjgnXRsy9duF7VhAUAGqiuAQ",
  "key10": "5o4WUNd1h1GXm8xedESK4s1DyDpqUfqN79n4D8wzf9Sn3RjaY9MzCtce7D1cYTZmq8WENvov6EQkNn9pJUCy4sfY",
  "key11": "48t4oznqqpm75ggrTjJsKgt3PNkCQPpFta5QmHKM2NNpDv5LniiYXCdWLnMcdiMLus7seXPiuG9GRWqrkbMhgLsH",
  "key12": "aQd1r1FFGBmhiXWCwV8cM95RWHyAYB6UhpjkYayt3Ehse98TiYBX7Ean7UWQYmUywJUnrPFMgbdhZwVZJ4wGCVp",
  "key13": "435pf9GHtnhb4TmwJUoBjmMreSDeMPa6g2AEwF6HMgo2eEag1v7XsGyVvkkv2fNnmbYbmiMiDerAqfs4zpBYgA3A",
  "key14": "3QyuHjsqWvQxtEs8AX4Cx1Ywfi2vDvQquewHSW4Ro6zVmPuoY2ohBUoDf5xNC3EeMbwKg1CL74NnskRiUy56Z1E9",
  "key15": "4eLsaLBXU13gBZZCE8y1EWXrT85XwpidDLyhGBhDGCTmSwjTZHFSE7FoiHXTkXJrdiHKn4hb8AQt7HUiuZceXnw3",
  "key16": "581A1co6rKMjdqiDv4oK7qZD1FPKjVgHx8dFN8pUctjt2zbTF5THdwmKQq2H7356HrQh2womn8mQodb56qs2HBKs",
  "key17": "ku9Teohp7yP8TVS5PDxoUqQookFmNwLr7PBKjbf4oneyaSjDrszT2aEQ46k3swBTbGb7unuZdhmRYXqxcMDikNa",
  "key18": "5ms6TJ8JNB5dcg5zf3cVV2EH99r2vzznmP2Rdd9SXi1iTh9K1i913k3BmSyMMYh67PVKtQaUesnj8PCzVQ4YSTF2",
  "key19": "5XuvPAm5cMV9hrVRMKMqTWAmYghuyReyUCTKPNC4Mc9rMt2FNvM3FCmh8GVQcMNoDi26h9KGHBxuzoHiDPvSbxtW",
  "key20": "3SdCYDnzL91SnDEFZLkQnQshJFAvruWucEB1wJhy2UrpJ9D6gpkWgLqtsGycrzRQ9wWAHa8t1fycX6tvRGZ5CxW6",
  "key21": "2RKcSLeqDBsR51ox7kudj4RwsuB1krT2Na7VaNjVyuRJWxZ5az2CNSybJBnDfiSHU68HxPFBN5ykvPt1EwQQpvPE",
  "key22": "4SBxez76DCPJurHVUkpU9o2Ks4s8uQ2HDzzrjBp1CQRqRVmmgigyu1qpsUHkYeFLnpgBAEB34QpLy7qAqGLR4zG8",
  "key23": "2s8xE2NjR68xVgMo1uRrqrTgxccjUZiN5j3zRoqysEPYDrkV1AaBLPAMDpZQkwKah2pfw8vvM8tKMara6qeEjLKG",
  "key24": "5FoKH6zrhGk4NJv7tCxQBj6a1VsK61dcJBuE82heEWkNsPxGAaKQNzkCMrzdBbG4VVBg6AK7jGYdXKGBTfebBGwK",
  "key25": "62c1tJpwwLmWVpxG6cFLVEN47EBajPZzkm1ArzJ1zemHaf3ncTKdT7589ymyYh1sCawAtMS3xfChXstjHEyZpvqZ",
  "key26": "4P55Cw4BKknnWxhpyCbkM8BVUtUUPjc8rxGZcoskGQwKKFf2NyveaphqU9obUYeXh24cMiyb2Xb81SBzKXnS4ceU",
  "key27": "4DFMu51M3StVWjdqLmyZV2tk6MU3PmgGHSD7uUy5NmmNrkHhFJJL3qzfnWVJTASMKjPjkRiKnEc5JKPPevJ2Zfrn"
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
