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
    "5AkJvbSXnwYH5SaxqiFaHoxgypPMD3shQYVjWAPUbRjvWL6rhi6hAx7HPCqX81UgufSNX64WNwxX83QmJeQHmrNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yjqWbo8zYjSno3CzE3E67XxWfXZaMBc1PJekJVu7GZ5GLm7xF4rt7WgNXfjC8hgk52AfrPQv9iEREvohnUak1d",
  "key1": "24HJgCdP4Y24sQreJTNxU9pZ3c5QvzHADv616yRy1ZGmB2tBAKv9JbqA8PhStggfsQ1vVrDjjUSQMNQF9ipj2SZq",
  "key2": "T7bEnAjaLUJnKm1cLQTUpGyBmuVPfr7A5tp3EMwb7H1frno28mkizBChC6Yyz8B4bGsB8VHTEXqkXZHJuDjgvCM",
  "key3": "2uc8KCvyzR2G5Jvq8p6HKfi6HNeFCsj8nXY19QtZhagjynb3quWQsM7exVLF4hiTr517kwGtu2eXR2Tt8zE2JcVv",
  "key4": "412k1Qw72rVPgrAa9vDFfr4GyUQVn1Uu3UnHxHDa5Tvp8SeMmBweDD3MN1h9Z4da3jE1EeiGvg7L34pSgA1nX6UM",
  "key5": "y4FSSn2k93Dtd43w8n9nRbAWbfnqBpqtcbv96u6pyRebQYRB2dWMuUimsUegZKqnuxLrzzUmnTYy21Ro1bghPR9",
  "key6": "29sHb2Ma4z5okbCfD7Sb7zE2XnFq9rzHMPXd2oYQUS5UoWqunhXEYEYe8X8jMyUmfSLtm5PGmXU6oCqvkkegZx73",
  "key7": "4GaAf57Y5GW3LiCuojeeHiRat3Tc9Qb7GPoNkEtnXW7orFQnqrBvyuf4vZyshngdckzaKQW8S8EcWQRZKH1QtxTc",
  "key8": "65SNAT7s6NPqouXAHMybrrXf8ynGeCVhnEeyJeamNoD4XyWExmYJJ6b1hKdDgrfZFRVxZLMdmDQeMd1PpDBEVqmF",
  "key9": "4v3X8pgdNfKB9nEUzd25iateS2mDPH27h2gR7tcfjaJM7ftWVTG1YzTXnjiGY3T1ewG3dywysVAUGuE5okEXiChe",
  "key10": "26yRDYf3YQUuDoetxhZjHz94fCNpw8gL29mcUod4BPkndB8EcoGebRXYmAxiocvvLdnsGZdXM2vvETY8Ri8Hj3kE",
  "key11": "21REnWibtjmwGwarcj9YdEG4G4FKmMyhA9p8A5z7DD4pZum9GWLxU3ud1xgyQgt3Z8SGuYgjEMLHWHHX5AQJCiwZ",
  "key12": "3yCPLbKPWU6Q7QyuAtAEKmaFv759tCf12ktZrAtMoRJjxhCV3UjCYkwGtBpb8sv5CZP9FZ9y5n6jxQj95JskyoRS",
  "key13": "3jBnDzzH3xWv6J6XbECf1q52mHFTTao4PSCKkDbUBCS6x8zAEYxcNcECRMvMyuARP7jEUBg7kjVzihAUYU4LiinY",
  "key14": "5QHDSpV5UNw8aX96KtziX8gN76dSVcBtsnvLjua6qDQPVwsTVZxAn21BLfseq7Lv6zPmv3haxPB6eVHRcMvNqwnw",
  "key15": "2PerGYQcxCvZdv3pmdmqU2GjujWgpqsxLxFm8wWkka94LYR93SYHiLi58ajngt4F2HCNvfoq7JH8EoDDFwGpJFg1",
  "key16": "5DAxWaqNNMjsbUzRuHA7MaF8A7G2hyDuvWGqMznibXMcpn5fGMwWo8QwBjwM47368FFQsvj3TgPWbfo56aAwfmj5",
  "key17": "4PmLMxK6Ga4BrcZikVc9MB7qFFncZruUVbqDCTimugFMzexKeDQyxAkkKyYLqJg4vrpThSDnBa6gR8uwLXF6RwvC",
  "key18": "43FdfQLhBpJB48f5maqFEAKVbsLkd6oRdX9hVqbJqfSTG2JjXxVURZRhcCi2EXf6Tfi8exhoMJgJ8BrNZrXZjwpA",
  "key19": "5T2iEEAS6f1T7NKiufX1p65oTgPXvFA9SD61e43PvmTBswYNanJPjugNBCU9x48pZBt213YdTy8xfGwLK1adBviz",
  "key20": "uoTVSg5b1hha1tyTEuDFGgfm9NJ9P6Lcr15jvL5uRn1nqdiDRhjF4dmjxASYt9ReimEePgrjxfiQQHsVC3Jo6va",
  "key21": "3KuyfptJegtiLApRcm9EKLGddfsYfxBr1LLNXnGSsPYTxdHrYF5xXeW8HrsZm3KJeLpzdNQk9Yz4EWnJvMYsXD4F",
  "key22": "5DvmR2GLB5jVQefppTRhhRizfTXWtrpZaRpcoAmYLEcehncZVbaHrnHvQLh2tbEY2AwfGoHZSnUtUzNorN4wSE1v",
  "key23": "3Z6jFMt8MTGtKR4FY4bMhj3JyPQRqSfXs269wdzKWJHUWd2SnEFv3XyfBbncnoVavm2Lv4BFXA1M8pjc1rTTE1Mg",
  "key24": "u2sjGQFeF8ospJDXDJJrncxaviboKu3KknjYHdQYDN6CUqbcQvzMTqgLvmmHsedoLt7paGLCTHajBrcsUtLmKbc",
  "key25": "G9QAKVSBYkUYiaUHq1qQCdxLAFDaNAvBp7MLeojHfvVpFJMcXAUvX3SJcZxZdJaQKLH5BRJYATbRTXZmDLKeyiC",
  "key26": "3FEzdjaaE89jrxQGGqJGBgeZRzRKCadt8xznqysjtVPq6xLf67ekpNr5N3rHBc5LB3GpLUuX8TuawRTpDTDukNL3",
  "key27": "2R3UnKfXzetnYVD3MZucURnuuzXVaBimrv6Kse7wsBzG6HzN5qA5EGoecboQUvJCHnQKjeoNrTKvPo7AoJpDHYPS",
  "key28": "4P73dkCkccs51Z3QL3kjnidrhJPmbCnE6sn4fe5kjvTzdGujFEqiPgpyGTTTMMTq8G9tFF7kGb5Cuc5q8WPdPqJL",
  "key29": "5Q11KFfEzUYCp1bu4DddCWekHpeZoKqQhAEoCCABEDBBX2gaAoGkvALRRHud1hYADMDFQP4uDJ7U5JXbMySPuiSY",
  "key30": "5y2o6KBL6cnCRvuvsJzNTjx15uizLBLzadFY7BnQbUkbYnYicEPtoSfu3zhmkdTHZnMXjZENDMPZwfAtMVZiTtpM",
  "key31": "XKuttf3BmZhUMqAovt9VAw7NkjTo9wmMmQznMqvDbw2ftjRuNKB4NzKeBxvop68bfbJ9niGJxMMWKcYAejGzm79",
  "key32": "4jKqjWsNZ8pneVcZwiSrPZb5UjPdTQgT3GinGoVjtmmiAKkwy5XmiAJpSzUVYVy8Ydb6jciN6vPaoj5CJYtGYt26",
  "key33": "4comragbAmADJxpcvLnQoAUmpN4fNrdScHkeUxrcqwRDPtqJ6JUjae8N4rvN7bg8YUncJMLqKhjDxr5Ut7qPBXXf",
  "key34": "5edH2q5B4ycYiDZ19kKnDgp8YDfDqTiE4y91mikQ5PkSF1khhrH4CxedjWR6rHa7tMKAypPbv42LHkFbi5BxNMff",
  "key35": "8cKHkm8c56HbyKcctF345kb6cReRchboCZwiWf2ynQ2MCoCyHSAoybKgiwM7QStZuja6qcUMuvMjhXzcY4MMvDn",
  "key36": "dTMq9cQN9dJ2AWX1Qxbp9D19QC4ECd1dz4YzG5VYtqQ6u38PYyPUejQLpPAxeshnKkZX6U14VKDe7zSHSds3byA",
  "key37": "Yy3SkFsW58tECVc4pfHzGhyhudxoVzaH3ckVg7umprj1iHyTe1rSYHn8LWLSnt8GjHk2Zi9qZ6SKe91uRzaiT3j",
  "key38": "3UGbMnMobvpLVT8o7w6Du31gZLWRZMnSofiSsuoE71WPvEPMfhcc8YpupLtPcmWtSZDn9Ad9dFjrxaz9g4T9K1tx"
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
