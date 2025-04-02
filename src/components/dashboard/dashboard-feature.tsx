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
    "2KXtSNkB21jsVUvfq6MhjTo67gQGC3LT8ehk2nxFuCVCBfc6waBhnsqveYtk8aYexCnZK3Ccv4E8ieuqdpDxtRcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bHpm6zftF3YvNg3qL3ya6juPgBSzCCojtUwFFLHFAMTvWtNmNsWLfPgV5oUMRkgRyg1GzENMxGti8F9cUBBm4Y8",
  "key1": "3qpNkXVWp1maC8ygiYJJUsQ5uLiecvT9qSBuQL1mkFBxoxMdekPjEh1FhRFRAcuuh1MXiuW5yHBfPp8K9GAP2doi",
  "key2": "4nArLzfW8GQCW6rbWpnwqHFZmcAbvZEzEdwN8hgiANf9FeSMGVZvTcqgVDSANvkBKkMXZBVaAAjAQZUonBxKJQjr",
  "key3": "3VoBRST3wSaXSuFPXBa1hffSvzEi3Zq34w95GY9zPkQaDFcpaF4bxfxxuf4KQ395pj5kHPtqe5VMow1NxzS2o4z2",
  "key4": "2GtQpuEFdPihCqTA4qJkbNCLfhvdwMpXLun4BtCDTD3yo4j484X1cPLcxMFexAAfvwfcjte9nKjNbmN6BfntHcZD",
  "key5": "3Qf9BgZFkuwfE4tYHUsSDJYTvPkfrPJ4vfrBNx75adiMYzKk6wzHv2Vg3P3TLvmth67Gqn6oVUqQyKenmmniFgb8",
  "key6": "4ptRRoKk9JoSobf5oWCbEBvTRDcooDBpXktJGraRJb9Uf4ThyjMA4cAWGZhN15KSrHDezCuad8pNgrxnq6j9dGbE",
  "key7": "5c78nyGkrZ9e9eFYBPKCdViP8gtmXBtWCPf6ipuZHM89Hdaxjg7LUeGMxEdxX1EKHwNxp66jMAqChp61wMRqdsZN",
  "key8": "4XhcVjUTdz22n3b7FJ1T3kbe9sewsCESquxUGAGTwmzuA5NrkyhHL44jXFtDQNrjcQPDQuQwcckrjNNvGQ4qjZs5",
  "key9": "3iM4C8kWcwwZboDT9rPck5MxWthvkHseKsmhD7pNPMjgjHTDHXfKdEWSd1Cc9rsc2TYfYqV1B61qTzJDVjEXjJCf",
  "key10": "ccoHTQ3eb24CyU6emf5KstXpnG8DYteLvKjwjjAZTFZ217J63NVzhNAGSs3JmjYgNGhdhghWzwdvdzcEqpttk3D",
  "key11": "2qMwqmi1xqLwiPga3vcebXZNFdbJBA2XEXhZKARcpEUB9RD1MQmGwJEJbbJ4oJnKcdBCZUWMRPPEFQFvpqCiCtRF",
  "key12": "48UFb48GCKDagHJVpnSLKUUivAx3oePY1jcPUKR99d6DZdmbcvcTLu2DyzpbG9Bik4PX9BxWRHJJRmwNvtGYMVUG",
  "key13": "4tntDcmksv7okB6SPhwMecVMXxSLhh2z9AU8RC34txMuuCM5qm9W8ptE54Hb2c7NdHWKAMtkuiLeyvgP2JtwTVbH",
  "key14": "5ipUYyFVaZ3x4X5upsU8qkrGMFj7dRdrrBTAtV14XBj4y8mSsaLXhseiS5o9dkrTmuJuj6CPiEooPz2jGUPZibzA",
  "key15": "4re4sZDLpq7EdqwnDbbbhXXUomZXm67XQAtBWsToXQhsaiXrTfpL1ztqtYM4SHbFVwC5rfEX2RxLB2jSj1Lzw9Qt",
  "key16": "3RsvKNuN9rW8mkgejJUN4MC5XJAXpZhmGQAh5nckiNHhhrKA9gjh8xpEUSCWPQfTvw5XX2Fbdq1PrAmCpK8DmRVm",
  "key17": "3QD7AYmnkmKc8iEoNA4xkgh9MDL5FMKLh9QyoNRQiBznYbyRh2Kvtz8BhYg1nbvxoyBBEsHavebLERdDSnuu8GN2",
  "key18": "gdUrM1hZR95BE2nNVwbQ1o4DmJykzMH2P1hCUrCCdx2m7djAZBiYrkC1JWFVLj6CMfwCJmWSq7pPG8Xnud9dj72",
  "key19": "2VffRbdXNBnPib9fPby1YXYirfKEE225qTr4ia6SsX4527bmdpqASYTrvm3JhnzXCHshNKUKMUmQ9W3fGiBAeCc6",
  "key20": "3b5eRG2yumwHacGthfmS6vxnvAVhwgyftcAGjpx8ZEJdweNaZVvGwvpaMpFneaYbwNfaMyRiQG71SmgjNu1RBuiS",
  "key21": "339u4KfrZHm5wXRKuXbfDokteMcBgGUCRiMqPLHaipU4SaiZJKPoYXXtFsg7hJHdEzMTi6oFYKnR4sTyCYjUUybC",
  "key22": "m2BDSNr39MozMs3WoMKijdmfTPNxFhuiawE9mP4LVDCK98mZxoW9TeFk85vM1dcvutT7eevsZcwQSfVPM1kgH61",
  "key23": "62nzyDFmqjEmLYAioA4ZQJkfvLuMgqBhA7P2qDWCAk1UWWEG1a5MSQ11E6my5ixBBdeWLdK6ptKRsnwa2T7GgZmD",
  "key24": "5TjLuEidnKWcN5Dy6TsSjMfGNHYaK8unTWkDABW2cwFkmxWAtSURAP89ZkELJuLvgmuxWBuu9GcCP41xFfDPp9eG",
  "key25": "3xULp9E4KDQeZyTsz5cUsFsAmLHtwgMejBNkycLPpxhwuYiNZ1eeCyWuFqTxb9CgBEfC9DQdZ4h3SSnX2nrwterQ",
  "key26": "KnFrWBW9SqftWFBKMdkzzsT1iuSnL597uh6Z1add4qTkajoiiUXPcpHCQNSFsxxAdTyEo4e6oHkBmd4TuJV6oru",
  "key27": "2FyuajU9FbPurVriL7mVJRtrZsqwu9SAdsLK4zZTTAZHx1wM27WGaDxii79Y32ACxAkp7J3bhFCvLjgbD35DLhKL",
  "key28": "5Pqg82kPhoDZLdhPzPuTr5AnbCgaYfciyPTXbFR1Vgo11Av5Xr6mS9UYzyr5bpJdbJAXiV731wDExF51viSVKHNJ",
  "key29": "8F9X9QAWgPZ7y1cGFs2KRwrmAB8q5F6rv6DZzYLHzhVvRoYhJ9QJw8gc11JvcXoYDAXRNz9THDWXzQ6kpvc2Xm2",
  "key30": "hH76odsf6rfCzYDt7uH2ePHeGTUJjHZ2gdMrdNu5biLKep22m6Ui26M7f6s9sFhYgemFYozuySefc2wWSuL5xZ5",
  "key31": "74b5E19CNa2yPhoEQDgAEtYPXQ7C8bBWZU8zHgYB9WUfqUwgpAswQtNf6nFPdv7EdKsQAzjtUQULkYdLqJ6DrUA",
  "key32": "4UDfGBF4Z7EKZS7JjHcg3Zz8wUyvUTgC7Trw8Xs1b9cvbeBpSeLKwBjsZXF8b62fEqPza3Aw2J5Z3bD4T5bc3aPV",
  "key33": "62Z4fWJHz49e6JL5CEASrvf8Db9wj3hpDPeTiXLkLMgcteV191QKQvZhaJ28uwUbRSu6nxdDJ85mYTKycBTKyJvq"
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
