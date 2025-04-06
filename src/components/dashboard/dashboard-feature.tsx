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
    "3tqydihVSTNsZxMop88Fj9nmCC8r4NaRoQ23T3R5FgSyfbxnJM65QgDiXgLi9uzo9akn7AYuxmUDpAhvanpYhVbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUQB1fLtPbXcAeFxFw4zq12U1wJwvMP1cH6gofyH6jx94Aap6W38Lbzhj5mAVu5TDSSzDiVED2V5STrKB61Z5VW",
  "key1": "4DKu8mpF3L3aYabyCT9ALqEBJ43D3Px9xiMbzFZivu3KpnmCaBAFK9723iXh8oTDmPtcEstiSnwP9fdjddagP1ae",
  "key2": "WiCidDwqpvqU1P4x8nxU4fQKAs5ahPQuqb8RF8AvMvSXx1tT7DNSikm65wYqPSrCruFsN4WB5X58acv1wa1scHg",
  "key3": "53EHf1ZpQXAAdtJHMnViDLAkLrTau4fhvhF39LzmRPGgoUauzhAJYxCANfKKHmbMUcLQv1FkDvDN5AGiBHRr6BeG",
  "key4": "2VpnYRyvcr3DGXGuacDPmevNvqbzgNNu7wrPYtmQgTPvndCWLov73CyYsWpD9SrQFvrySaAzb7eTrRF7nzcxNx8",
  "key5": "2MQ2unHN5ooPa7sapMirm1NumumGbdgBxQdDC7RZvdJY4kowHpL8rZZyY9LytNxPXcL4U99H3Zx9rtY2VZA671yP",
  "key6": "ntE7bDpvS7aEjrmWGKPtYzV2Pq13Rx5RcRL4jMdn19Xdx5aYLx17WtTgquKaGK4JfvSwhERYnmNT8cHvgfpmL9S",
  "key7": "23w7baJPLGZERw86BGMZcSX1aERCWFdbt6tvRRA2CmqT9vDKgM3xpfNuqKF832x3Xvi8oBJdNayj1G2C2Kz8U7ez",
  "key8": "22PgFNsergYEMj2kpbmBQosPfsmDfPWT43Xfu38mo9mHHUELoTfuSRKWcDmDdWVn4r4uKU1e7wGgxbqrfd1iyNLL",
  "key9": "mPRG6Xtt6x2FjzLViJcmUgoLBfyVwrMd3tJAsKXLDAb4AVYhww2DUs7Sz2tPe5Sb12ojGBCHR6K92ougnf3r2bX",
  "key10": "5J2QUy43raM87PiihdqFEMFJDwoyTU1awEBk7y8UpMou1GJ9No6vUvaP1QTjNqvN4xChJWpK745RagkFQhwwheqx",
  "key11": "3E1SKWxF49deyiYZMmAEkk211Pkex922ZGvcLPTUmum5jUX5sy3T9XKyQ1o8cihQPkSf2iPAqCyiS5dsquem22eb",
  "key12": "3oNGTmtPZQgQwBDV2etunKxoPGXyE2TLVxSnS22P1dZrRVCc2fg7KvurvBzciE76Zbs1NPFVZoegkfcgAnE2DVtp",
  "key13": "BipYqoU71GiCa5b2VcbTFQfVzVgt1Dzh8DwKz6cHQi4VnmivVvgqbwh6HciRCmD95Hi4BVw5jVmJD2yEyQguQ7m",
  "key14": "3n4uZWtH8Xnn34vZGjy26u3NzHk4iR3MygsiouAXehmNQFoZD1ZYAFxgHs93DQZsx4SWaLb1pzX4qQa3nEw1tSkf",
  "key15": "3iNd88erhdJ5oqZpwGdwSWHf4P922Wyb4edorgYTyM8SBxT6ahpYP3XBe2AdAFAUTet4fzahGkiEsGHsYAxgT3cB",
  "key16": "qmWoHVsP6cEdsEtYBzSGGjnxUmBLGh2qBcU3QFWddJHkTfM7T4Uk3B7VgZ477SPeXCXeGvJZgRjwLPqsU8HEvvd",
  "key17": "5vj8vs9PT63xLXcz6xUXRz5sDewu1kyDDQpGJHKiXeJUMWDtPA5sjEyW3ygeQNHuUuCGhAE4tAwLQcT5YWDVGaM4",
  "key18": "5r89ewr1NUfppft1DZ4SkqiwKbLVCZwxRLTYQqtx9JdeiuHQArjxaAXiZeRAaFvGZKqhmLYBSz9DUSCZiFEdUDSv",
  "key19": "E2udhcJYUpgb2yyBWos7B5RjhBDk9Rn7M6hZ3tEBoaUQTyoVNug8Nk43F7JeJyDWyCxhVHrLfdc9jbmSjtf4XJ9",
  "key20": "wTQ1ofUJ6hUxbgqSPnbZpczwy3khdow8mrC3DK7cHnYuaosg84P4zQdfK1eng3ifKSaPv1kMqdT2PMSFGmMqCPq",
  "key21": "55mpBJnp8EfDc25syDQt8xUimSMjii3ebKPPmW5FF4bY2sn64bHBrZg7SixQurTufnuGjzNu5v2iAU8jWHgoFvFf",
  "key22": "b3nY33dQgdfbZ1SAxfnecMNbbeQft5q9NuF6yW7ftmpPdMEGFyFiixRFUGqsbkynHeoU7QhDCLp53CJbcYKCpLe",
  "key23": "3FrVYSzhqTnXYpV8ALQ7v5CUFNtf3f8ZqLj1UaDi4UhcGgKXLLJeZQtdSJ7kxwRegfeqGnCK6yzbQgfzzC8pEz7h",
  "key24": "62rzJa87hMQ5xNxyHB7uoVeKp573Qn3eD7RDoatMQo2F7wsBgY3pvcopnctrpmCgRtepAjgCCx75HbCan8N7KShZ",
  "key25": "q7nb4kRbbnpdrn9x4ZJgaiuoYSNdFGuFy1mxtjXhngGzZnsV2LcJaqjmzh42Jhwur9Kgs8BWn6GzCpFUEehpgYJ",
  "key26": "eHXJbTvoSLMPMkGHsdNTZiXgHgRipGsmGeNwRMQNsPbHYrPG8APZBnxzcSzjZDhVjmzheQn5MpDKEU3eLVPRG9d",
  "key27": "2sU4tyNbLTs33osRYFsdr29SRM7pLA84uEZ7QAz7dXfnCWmihK1i3Rk67c9ksCsgrPBJFarxeD9ew93VSCRU49KM",
  "key28": "BUZ2yMDYVgVoXNNwRrp9woJ62CFBxXkL2HKtwaoK873HwZBYsKBYFoPpSPDmzeZafh8bLG1bjiPndUaa6uBqdwo",
  "key29": "LSPm3yFcWwo8PFq4URF74Q64bprjUtSxzuX1PVPvGBLUu2REzC9dh8kuhFZTQrik7YZx7WTD3QnEefpDHFtvU6i"
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
