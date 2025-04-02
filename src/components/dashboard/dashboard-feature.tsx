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
    "3xvFimk3QqfuSiXpFjFn7YH4zuxgr7CEjrFqJfSCo4UbuXvFx32MQg5VwDuvBDpKvMWEMyuMD5cvxeMS1dz22s9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGkeHa2iWTAp6KsewR4DfKZM83xL18WxYajEEMa77cWCMuY3UHu2JMsz3W5i97VrubaQ8RM2TnTzZ6Uh5xEQXow",
  "key1": "5PiwjetHC7LQfNGMfhSkxRQdPsrPxvS45DEzVyMBLjqYgAxcb3DADMb4J5Z8ziCJCL1zT9T8umSoPp93CMwfSqq3",
  "key2": "5sU69kG2NDnMAb3GNeXj3pEodzGerKXcap2h4wVkLE9sULBXr98dpHH4frcpNGx486LLiqYLAPwjVynqF5Y4A8Mg",
  "key3": "2E7MLMnStnxi9mvqtScUykgAVGYZqPzDmtoeE2Trq2QbwtkEwyRLigAjgaSv1UyDk8CVbvjo1JqHsRSpSnaTZHBg",
  "key4": "4mt5fGRrbFertRYCAZFrNGmZJj29SB93ACGYg8d2m9UWU2Yh5oUJXabrz3eLDYuePYdY81w9xv2yaeLZzQbEXHJD",
  "key5": "2s9yrKw6XLWKrwwHTFjSJazSR7Xv2Z4NfcF6FzRS61bz83uPwDujxDnP6YxXdSG9ZicLBSKp3CfUpm2ExnARGXf7",
  "key6": "3amrUvwPAHF4fN78MZbWrEaFcXjteN3fmNXZwrtioN2GK8A1aWTzsbXaLvx2fNn1Bofm7CwD1a5asNaan976DJ4u",
  "key7": "3Lk6z5y5m1oCKF8Z5Yqw3gRmdr8inbVW3iZ4pRnmCzhtbu9TcKjaE2WHQCZkoecH4Tdox11xtr61GpXsPdtQqvdx",
  "key8": "JZXpwVP81C7pi6wBiaPnK4U2Mz9ZfhXjSpNPWWJnEyGWcM9TPHfT2C5ZJ9f6XN6eSHvqmp9GXvFsbvmrP7c6mZP",
  "key9": "MVFdjBZt6YSDCtW9xZxeyfjyE5LeW2ud3PPF3jni8wfKWjvSQktAgprJHH5Jyj6K6jYjuLnx4zq1WhdZUGNEyKe",
  "key10": "39SmVVR3cxt4UsZp3DbYU8o7bnNbyn76grTEpJFsMsHtrwcrXJwgw5RzkNQUvuLpFMPZBZ9duBHEXwUU2VHq32pC",
  "key11": "3jvKYZdekAPDxybdwB1FkYTj53h2PQnJn4C3SV3wTAYqcD57chNjsGy1ZKCA9oHTa9EroMFHyCCQof2wnNjk6DS6",
  "key12": "4TyqyvTXevBc2czVy55cTbG8i2BXLrSR6W4fu6apEaPUFfnaxYLfZyhBCcfLcU5J72i9KVexHgy9fJhwxCR4frZ8",
  "key13": "24r1qRCivscJCqRmXAoiV73Lu1vEFuntu2cMJz2iMmzm6gDS3Ryc7DY59upHuhcC7s63yBDaz64Xsy4XUsv61SeQ",
  "key14": "39t4QxbM5wDs6PjxTqDk7XkgiWnkXcPCfMKSMd5hm2LUurz3UagiGdmyD472UGVbP6idVM9va17ZCf1MHrnLbwVB",
  "key15": "2Q1Kdr121V3Zayz9SnTkNptCQCvXNvM4qWyDWvn6TaAy5ZJ3dReDQEeNJJ49CYq4hK4WXMgLgCWn9g3qQKvSGmqJ",
  "key16": "3dH49VgT3xxmvPmtLgEowGVBFx5kayMxKBDcuendWWNRNqb84JEzSAKuSQCWD2TYpB1n5bL3CxHXjtMhFaxC6xRH",
  "key17": "33uJKeK8wSemcmr5wzDi2qJgnznVh2CTE7FbnNe3pNmGLaUi8GsVTN6bpP3vsTHfqzr2WiUyFzfk84DmM3apw9P6",
  "key18": "oW2EnJPHWDANkjbFVXEcd8zo2ELz2PXu4HXHcrC4DXHruKLJa43eGKHFEVBbFPP7FMysfjK51URLSjPCamkCsT4",
  "key19": "56ktZSsWyG7eENokAcsRp62qEdfKhjKm9mfNjYNTbq11xoxitaDEueGR3ry4NR2CfevpYx6k87xjtNxvnuiBLBQp",
  "key20": "2o7X4a8mcJr2rB9qSsWr6jehG48tPE6brXJk1gnu48UyBUQ9RDgL5aaVMitujWg4k589uxdigL9mEsQr3bax8giK",
  "key21": "5VsUzUgZnXq4YWjnUna8M1ZmUbkQo2nSrN3LR7WS7LGA6cfpJtFuV5s4jiEZS9YnDSsL9cEzeAtXxd4XRtV8PduN",
  "key22": "5j5LdgaUx1RggQiVXgSCTAXTg6VDAkChokr3bkPiz9121bFQeJQMgvvJWwWrd1G56UfuxLVBVDwzSSpV8ZjFiik2",
  "key23": "4NWTsiKFGVewazR7kpDdM7Ysv6nzip5h7hu16H3iETN9xjc8CUucwtTvRPk4m8dbZKVYo7XCwa5VTN8e97MTJky6",
  "key24": "4Es8SvP2jsHsBmYzd3gVi9xM5XkqgA8tNGrWE7TcNriWsU9ajn8X2fgxkhkaJ4ZQuCGEg4FbbfbnoKmt7DFPQa19",
  "key25": "5kKcyPwBMdVUpxU91rAxYzuwzhZYN3fUfcrm2YMGhTnbJrQmDLXmEzowYdENW4TQ1tNYBwpZw2GW5CxiPKHk31Ri",
  "key26": "4wumhPSVEbP4s68d5P6CcVZN4Sehnvyebpx6rj7yy8UBKeE1ZhBFwsVmRC8qzidzMdAcUt7Ln79ETS7RcDVAcRTN",
  "key27": "5KpL8Zp6JQovhBMu39g3oQTZ7gwCAgUspehanKkZtKgKcR2thoiJyZGimGcjvjiES9ShZDiRPK63JMgaahM6F8UM",
  "key28": "3GQGfF3LV9ae1k5Qd68jnAAFzLcb9qi2Mq28r4pjBZTkBDfWRsxwuvxm3mnrxqwA7ZqLzaQjg5G6zHtNnp5WVtFD",
  "key29": "2S6fE9CTjWXWNNMfxxDYyc3AVTvmZHBKWwyVgabBBV6L49sA1AXqgaqzbLR8EwtNJY5QaViYpbGx9em8LpFmJENL",
  "key30": "a3HVaAGMyW5u3BDeYoLuTJ1YpDzjZTshNY2XXsNVtB2TcXSsECrFL7fXeNXxcQyUKSf4SDc9FZYhk7cJ97s1866",
  "key31": "2nAbvZRuVxaMRnv1uvKPsEQ3bMUkNmNBnUUqFg9TQsgP99Dxvt6T4fsdb4TuKCyp1oGNo7TUVBcSMkf9HCMD7SQE"
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
