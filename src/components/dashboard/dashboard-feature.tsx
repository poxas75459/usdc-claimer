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
    "5adac93qxtcXZCN8dxiBYF3gooymaPyPhNPK6V6bm6WkR6nNppZZS7Va1s2N3QhtxJxH8TN8SdbVxxZzSCu2BmkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQJEsiTr3zcWCnoyPWYeTLUK6evasi1VBcLCLB2ht9jiCnwHzPERbdPQpxkgc2LpfB3pQVioJ2LsEZzWbKeLA45",
  "key1": "4WHuMNGSKgFEnfZphCWEaNvH8j3Y2A7mtTA4749eCAE9CqWa1bGdoCDGYEjmaCQtycxmKLxbGx2pRY1FKA767PBV",
  "key2": "2rqxkmJuWChrXeUtDpdk9wzM8sG6QwRts2czXEH2Eh34xDCg1a9q3Dbk7pUD55MLLGWbTyWNgAF2gV7TC32XEDBa",
  "key3": "3xx1fpConxxxTBuxWak9XZq144Se7UGas1gQ57vfNrajsunX43ccrAsnuvcrdxR3yNa2fbfpvHNFcCvmVMjXBvH7",
  "key4": "3pcVhUgj8VQx72oTCYh4ojmtmMPXAndS5ctwWuXdU6W6HDZPbM2SuJ9MoAyRCCjCaXRvjsbmc3Rc4DpnvDG3kXfg",
  "key5": "4NuDKqmM7zHti5JpLnjdaP47sBrbBa1ByyuXNKgASo7uJprqsigwVsuvhMJbjAAUEjc8bCRJHT4sDEw5x5U1y8Mu",
  "key6": "Va7QJ2w2oshuqKCdE4SJAKFtq1n9jHcreyB4AhgfEUpFCRFU6USwNhSoaiFpztqDCeYccaHof8tzcbVTVH1FDjw",
  "key7": "3F643yTMqV5Q2o2rwu4RBsdvtk2yqKHpdXayJCqJDQyjNR1gF4vut6N4E4zM45gePcPWzFWaA6bFZggD5kMdzfx9",
  "key8": "65bxnoSBPyDofzSsHCUa1cQ7oEooQUAcZTTZHx9VBwRL7vb9vG5pLzPJXU46hh5GyxYwv9RCezBWwEt47ce1Z9vt",
  "key9": "491xV1CnrXzMe7ga58MowJTGQpF23iSb8EVzcbrc4RTbv8pxZqae9CxdEkwimmqYjYY9Bkm1N4oY143bB527cyjj",
  "key10": "SeLSueCYVYQPTkmPJKbdForndzc5PNTWaD7hatFZfbt6sQPA7j1W51wJiSPbxyQm69f67RHwNxB9hjNiwL6fDyE",
  "key11": "4wAqtZtfCvC9cBRpkDfescFB6uze4TZFwqvyxrjAdKkZh5QR7cZJsEUB2P4wGgYMLuWbJo3vdw9qgrzgPGKBtHN2",
  "key12": "n7cBUdPbLpREpnjBjYne7F7kjertSYoxv2466JKhnWZZVv7YHrftCWY4EQNhvgCVFK2hvUDQuoZgTM8Q4BTFBTt",
  "key13": "3bzyzLVaWmGCRSzK9GjadGgXdHYLCGkEwRMHpPMNcB3UifB2HeLAWxEctmHa6o8g8evXth82vygF4rSpZMpEkCfJ",
  "key14": "3f3DuZBfEA1WXQy4CCkXd4sdNUrzGd54iAdypNXBMNRNeaxQ3NcqBH8c6JUGQ6L76z1pBHG6NH8Zy6NxiGHZhBDD",
  "key15": "A2QKdNZL6XPGM3XCu3bWotdt3SxgDAfXx5C8bKcMmEs7j9hF96RRaqnGChf5rpDK5bs9ajSt6MvD7jEpqkKUcQX",
  "key16": "3rrBnAUFkpoLoqf4xwphL9eF36hCYoCQDiRsNJ2xzY5r6mVd2vzRgnTd4r61pxgQdk8Ueas5ULAhg2JFByPUWLN6",
  "key17": "2a7by44p91s4GLemCMrGXc3FkGzQSpZ1udBpidh2UpScxsSatcJfAFUC6hTDCAXMufLLVUvw9DWCQwyjidmXgjpA",
  "key18": "2AWRM8dRsXeR7VuqTyengeUxiq4iWyz1dUpZMjALgxZALs3box2sNXfA8dhoYCWLCjZVF9eo7CVpcR4bBstAGMv5",
  "key19": "4EJ6LVYkhKHYM8BRh33VD1sweLsFcXGbHn6NUwfNbLAGCqazSBECF7bi5xgBJKR9MysvWU1zJ9E4Ve1bx5oB6hYv",
  "key20": "5GvEqUPj8qd2bpJMh3p99UfQWM2LWmaPJrey6Jr5kxDiG2bSTezuRVZ3o9bZ6LQXD6D57Bp1UNSPaiqwRhPnwkSM",
  "key21": "3LgEKUpMjLEFSk6EmbsE2zi7Jpvpr95di1f3MNEqmcJQvu5HAy8og1ov51Z159xfZrUh9SbTPzDYsm2EDHHf8v4K",
  "key22": "2Vo4CsQU1wm1fpZ46hhkurJoZqb1jyW3qe8hs1Du63Ln9car5sd61Qoudr2Gw3FknxZsKJcGE7TcV4E4QpHyaZgN",
  "key23": "2u4eaai5ixcSdytiwLEWhtGzmtiHULYir5EBRUR4NJ8oJbTqRJ5N8D9CvH8W1uJxyEQXLD6bFjX7MgQpB5pEzgU3",
  "key24": "24ytR4hs55kNdhKaY3Mm1WM1qRXciUy63kps4XjPt2X4Dv28oiUDKRsXruM49Bau4F2KiJS1kLLUSxxLt53gcbWY",
  "key25": "2TDcarGS5G97Rauuesf1uqpbsZHTQiGhFj8jqei3zF3jn828aM3YH6ovPmzfxE36isMdhGUxZRxwPoun711BuNFS",
  "key26": "65kwUfx6P4UgsMUnXUJtyxJA4Keg6UzStJF7gLheDNf4jLkZcZHsWhSPWLQ8WqAjTAJYtUkfE6NpeP31CB3JC7P5",
  "key27": "4ZVz92dES62PwLEw85BRBCT9GWAmg1tyTyV7QmLKShYe2JMJo5oj1Yku6c9QqpnKg5T8PbA19J65TJ9LofbatwS3",
  "key28": "GXvbQPWaN6u2esZGweC4PJztfgkmQDEPBGnXdEKosVPXYMXVi9FVnrPTTQ7BQX1wqjLbYmeLY5muXSFu9Hf1svs",
  "key29": "4g1Lyfc64ucGS659beZ4UVRUCRpCr1DV1YPQkGvmumcsAVvfzFvBb2V3SkLdAgb7wcautP3cSJ8ygjs2PqyiFY81"
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
