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
    "2DEqrdAGY85HiNokRjtWpnGNUBL9t5g8BZdLrn9N6B1bjLMQwhiLkYVK4qZeCjPc5K6LCKyQteHDE1xyUpj5hBgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oiANVPxF1VMa1XVb7YPTp6RpLqXTMYBzUrEqXqpBEkdiRUGJAPh8CzU5vKtivQcyUEjrWb2yuggWX9Mp8TPXwf",
  "key1": "4m9Fd8D6dAUueZGJYjn317nhJovsj8zRdJdnJkCT9QKqtah4P5WWMHVay79xU34bim62cMnXGKnvzhF6U6qrzoGx",
  "key2": "2ASKBrhH3kqsaLWr94oeAvpGCXY591LSi23Nuri617Y8cTm15izTF5Jm17SpFdU2dzmuiYKZL8VCMxptkWomnvzU",
  "key3": "2EvybNJGWkCJFEFoqd9WsqepzaQCF6UrxewpDcJ1xowC7zBnSmxp4vT8c8MTuG1xEz3B5eVnLBXVNiSkiFqVfJV7",
  "key4": "4yYMazBEWV3RJDBZwnwRfnZzBs2WLTechBwkMyJZ8QAUuS65KvnbXNj4RXinwrshDmx9qgzgqyW41fNaejZMUcWf",
  "key5": "gkDaDM2eJxHitoV8N2qW72bFqBC9d34FKn2uiYrjpbnrjRTbLcY1MY84wLa1egKZTjhDaqQW5FhiG4GJkd1s3Tw",
  "key6": "4dZf8PatnqMpbHHDsB1WfBavB86GkXZLTtp1xvzSAr1rJ2fYAdZ8EhMhSm5tZhD9ajvFe4sGk4Dn9879ts9vpf9f",
  "key7": "2qfwu7kRCtpyg1EuuHuzhqqfsHxgyuTzxhLVMt2wMXWhqQCARgpXK6hjTL5xYs93oyxcYGkCMXNa98qhgVutPXVP",
  "key8": "5r8KrX7RNneoevtg5agkbijQiYurYXhhzZC8ZS1tGahhRVgyutzCLH8fmDd9e8j7Fv67V5Bcn5Y2mDARhYkNXAif",
  "key9": "AcN7emWFVWd5i3C7K4zKuKwMLEsv3nJZxZyx9MJhkkcWUqgfGbusScPJ9U1WnNPkiur9ZwkPnifnY8qS9tPGY1L",
  "key10": "3XhgZNF2EmT37Y3rzsTKAdwhgH8Y3qsDHmubjAihG9U97wfSETu1BhFoF5QHih8dUVHFYVm38gNMjchSLA4phGXs",
  "key11": "2xBfihFsM4cXjXeTefJyRGkJQ9x4YppVsFZYktkF5LEBQepMYYQ73K9tadQpNZPTWo8uPtFe461bf5Bsu3Q3usMp",
  "key12": "Y56wDdQ42BYk3JSJGsvRJU6HBxUJWX29YC86dN6ECRi16W8pRFDkPd5abQUpaYQgSKQBMC9b5SaybC5R8odWNap",
  "key13": "36AcHCQP3XnXQLcHjUHoDWALpzM1g96xWc63JcRpZNF5Q3exiZaEdyUbBn4WB3Yv9f6ByeJNATszLxzzsPCBbZHV",
  "key14": "4tf6q5prcpSdGr62JyQfHmmcuV8h24s4VFbhaJQZSx4HyZHvzKrnewfi1LsUhaBDmJMUnt1XpEq56LA8bDrrTA69",
  "key15": "3zKq2woUvhkDvX51fBBVnQ8QSzJg5uD16FNqmpBEnqfHPLaQTsVkMTPFcYGb7Qz4uzSxbYPt3jEm1TPpXzVdrTt2",
  "key16": "3poUxyWxVqKXam9graDr7VoXdxS7RSZZEpS91hsVcNHu3BVTTsAijCeEy2fYm7bXfJp8BhEhvCHs2x2JZvGTa8RY",
  "key17": "4X8U7hafhG8n4eBXj3AwgNqDucfyUbyu4k4oAjDqkwJ1nqoCt2tamv9iH7yaJyidWgrXzLSPCmBvAWrVnUiVD6hn",
  "key18": "3AGGZhoQCCQ8DYxwy46myMrt2m23a96BoHP5CfrPDbFyaNXu1N9wo64GavFEq8h3yikmUiRxX2527f16Aa3uVWag",
  "key19": "4V1dpTB42PPoDUhPMVfUcAmNt7Wp7hMdswE7pQ63HM1gbtFb3qJ1mFhU5zJ2ioq51V1Za1QLofE89oNCCW8rrhsm",
  "key20": "3sQ8hoWzMejwDEawGhDDdN4y3YqNf8PgLVzC5iYLFjgG9j6vuAB3ejJgFbTMpibzbHbDrYsv85jrd1TpMXxZCTAx",
  "key21": "41dNvQPJcRREVV15H1SJpSLpzZS2xnTBxmE3qnbi8iVWa1n4ciL3Nk5msG6nLXwFi2Pt7sqvnNRq9kbV5b7a3qj3",
  "key22": "5VSF5NhmiJeMVemfvGPW8mcKxuzs4pABCyAgyEEdH2YcsTMJGoDaBmZgjzcim2EGJ8DHX7wq4C28mijxdjGruij9",
  "key23": "5d7akw7inSKMe2yStaJ2t9YogkHKcGUHqTj1wg2Ai1snpD47eJevCrFiGDo1Fs5LgsjaVdpoPxDAdjtcuLT7HP3o",
  "key24": "3LQYYzZx41YF9yzh3Xb8dHPAXcFyK344VFe6CJFNWmfdZNN5FA4btZ6eZavv7Pfezwjgzawod6M1ttx6wRSVSrLr",
  "key25": "2v4syKN7214jT5WTRJRsj8v9eZYVr37srW5DJbRWDXmwitFXpZC9xbgjJ3iESPUgNgjE8JrtnQFN3wYmqDYiXSy9",
  "key26": "2kb7FKHpdnqdUtYHuK7TND1oQBeJ4zaPdC9xGHrmdbLYYMuvoco7NR4U6ob9R63pSGcdMkeyJMPyn8niacD2mHtP",
  "key27": "3YRLpoxM1LHPgWQZxGbML2BQGNEFkU8cCmjDvSvJydK76uuS3mL9S3Wz8b3DgwzpqkpMRpi9mJDv7dXkkjsMRTsi",
  "key28": "4kJZaoBLdZBkQxByDkhft4suZAhepmESJ4Fq3vdDbjubfV2HUFgbfdEWzuhBzbkvzn94fCWK1eXXym79EqPPRfmz",
  "key29": "2J5mwJvt3t8qV1HLsDE3fezUcAJEx7nKh5NMneTzkq7CzvSWjoXyAyMCqZ4BQ1eBX1LUTuqVCvgao6NTm3iGQSxm",
  "key30": "3qZTWwnuFLZVuZzpwkejfmoTgTL21MCXD8MFLug8x6gMRSxEpzxnW7qAj7niuuK2EeNv5hj64UgZ5qLStvkRkpBB",
  "key31": "LQp8xGwAr2vt9hNMAXiXYhm7U5RwxxXvtxBrk1GMmBewTb7Tfm7zuRdpAEmjXPsF6QPdgWbvEepbEJa4gzdJxo4",
  "key32": "jaH9w6EBhY5AFAjbtYBku7i2VDXiTDPKDpCWrRgo7SxZwc8HQNvfvDmQjbEakZSyA77wgJcRyJnU6GskgadSXB9",
  "key33": "3wVj8jsDPg7U9bE4Gx2qQ1eVAUQhTvi3CmgsJtDbVdHy2pXMix8CrG3B3SGwm3a2FooUxzid4ER4ad7zFW87gunH",
  "key34": "3T4hutcm4uAhFgoMM8sv8XuUdME8bcfg3VuV6cd4YPCpX7Gzcx9RUfrrvzzKb8M4dofKnGBhrXt98yqzotQUMTEE"
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
