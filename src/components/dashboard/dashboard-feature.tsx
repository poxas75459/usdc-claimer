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
    "4iBMZj5V1gdvj53WpXNW9xF3S65nXkeMGUwqKEh7YcPV3PefmoVysM8gp53af7MBqp6GB8Coek3jVihB7VTvn2qK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sY3XwScAJcFTdJeAfSGkNKmYzegu8ikAB3LKqgiyKZceYjAhLnCqGdFK7ej1rNpaiA9pdsP93v4HsXb1D4YNETV",
  "key1": "4wmKyz4LN7fxGqeiiu6i8YnyyRxXZCqePoBxSbXauAjhvnZCiuXFT7JEktuUnFpCb2TNBEqKK3Yjob5S9PN4C1Pg",
  "key2": "49Umx1paagyc73WL259fiYSReV2FSYu7zJg2X2bfhkiWihSVH6RdcPMu2UMgmfYZNYaK7s2vV7VEzYfRYCQtjyme",
  "key3": "QpcmNXqYXG9teGgsDhrDJPmRXGWemzrLPQdyXaBuxSBxmsQKC8FHW28uTadKjMELU45t3pPYx9CbTdtMHiB6i8m",
  "key4": "37mfTP1fFq7Gi8rNaRenyexw4vAoCky6bG6mc68uiivtYSGj4JCgPWLU6Lh98kKXvWDq2JjJaBGMhCjC4zLsm66Y",
  "key5": "5hJzRrjRvetAao5Qub494r3tm3F9HiFaZ9kkhbwk3dZWhYFSoXoxpRwGKDtu11bGJVkstJaGgfTQsmRrqs3Qdb3m",
  "key6": "2kkbGPvVW51P4jZukqWPxdaXDhcmsmKtRYWvtnqwDxvSSFtZ6GiwEfPwjXRYWwmeHnPyaV416EeL1VcsxcGbwYQK",
  "key7": "5dnGHR3gQFttT9TJPLS6Xs2n83MzUGv9cjqQXy8yAHEFvuFse6SGuQCkPS3GGS5byc4S1z7JnThzy2wTzgynqntH",
  "key8": "3W7hmSZGRKykuq4MYZs2HCaBC9E41UNDYeGMJreCRhPjzgKD66xbHQiZcSYAQ2F4FCP1my491oj9MMbo9RyywDbs",
  "key9": "3m8Nt48SKZqKe9hYaPv1pWqymWRJb5SR5MjS6doziLCWqTdB8dpiEDpnSMa1L2e6Z2rSuonAdURQLeM6JhijH62X",
  "key10": "2kjfVvjGAS6eQXQtjcUib2EPBGhvEu19S4mcDVkD3Gj3NhR77j4SiR9B9WskWD8e42qVSjZSKxFYFtwtiEhGs72",
  "key11": "2P95JoXVxLyXBEAyytvZWrM92r57cwhrYPYz2Q8x9RupcXkMe3cZbJLZCG7UhA8cLRQEmujgBitogf7G2NGL1bbV",
  "key12": "64mrV6b9DRgGdeDHRcKzK2zMzSXqfNc5sFy2LKezuQe9jCGe1RURZ6ETXUC3uaa8cePT3LokLsL4LsiRDVWjGj3f",
  "key13": "4zzjreJo2y6Xw7yoHTbcCquTZvm6Xn3LapVq1A7XNU6txKZFPQgg8vQ1QCstoUjcnMbtcgXTWcgjk38giP66jU9f",
  "key14": "4D85oHzk3qxKPvNStxP9zv5gPayExg8BmphAuQNwfu7uQSqdPnRMbAUpHuHr194534pMJLephJpWJc5hR4KAPuE5",
  "key15": "44enycSQ3T4pLkKDpq6M9FfUDxUaGSwz2Ak3oBTLR2Kaf9PGPositdBdUqdP3xi1VChTQ92idLCTL4WRmN2y1enL",
  "key16": "45NhqmfS8eS6DUcxBot6B2TYyAtXxSY7LnBJt2vqKZGPNEncKGyYBjThbqDtyjK7ermwcRBcc1Wb9Q9dDJCCoeXG",
  "key17": "4TYNAJtyxVvu6oGr31i5SoJZ9vQFxk793UUuequm86TZPrcnHmAhi1nVubKuuRu7u29tYHWeyAaUA76k8WL47idX",
  "key18": "37TNUJ8tpQpCDoZiqdPw16hCV6pK1R4PfHrhnBUUCV9mRgwYZg7ZbPuhwoqgRnj8sqdvzc2EV22CiRLkhEM5H3yM",
  "key19": "2eibWgSPFYZsDQqLUATjcu3CUfwTRob7YXcFhqsetR39U7uJEAkffyBQBDJpzTy8J8BJ4nyGwx9bZFeRsA9zCWHf",
  "key20": "3HVXPWQsswfg9J5rdz8rQmNMdirkA2kycQzLj4cjmg9ji7EsxEHWrxJ8SvRGHVhQwuEiVG4g5i6S86W1mHeMHaRi",
  "key21": "3VRaNXxuNvpbcKt7sjCiRqFsmwLJLtNqc9VbMsHCTxQYbBw9NNpeMSxkiXJwi9TKvVMPBHKuXLuTZvKBnWAg14u6",
  "key22": "2AzaeqSztSfqpB6yJWcmLk19apTA7AmeAHCMHzgs3cjGq7aQT6Xat3pscuUc59RcafTFMGVBNjibKsXrRjhtuj6u",
  "key23": "3K9E5xt39yiJfCWWmqzcGKprKnqBCrUSvTJgeNpNmRmeQSLiJoXpwdqrgnRkWfCDSp7wYd1gMfmb25G4a1boPJHo",
  "key24": "62mXoxRdcCVqYhCuqRS4JN2Ggk1mEnW5HvSxNt66HW9psRoqAtrsKdRdwcQEcDLq878sK9hi8rgbb1LedJPtbY8E",
  "key25": "5yJ7TtErskofBv1RLhRWPCLhpEgiutc7UgG4cZzD7B8734cue8hsUiXqyE3zr1HcHiFbYBgBnctvCGrshfpZzVa3",
  "key26": "fVGccWnakv3dBqHXtmJXPaQbHkRn5fNYe5wxye3MmNcHsCGHJ1XJXywyDhPfnCHzg4CQEoABPTF4tEuBcU3Y9d7",
  "key27": "4tk83jpNEGC4xTWJPfCzSRmGHzVDVMoYBM65qBX9GjY6ZagxzDRCDumHsY9rPv5WZzkgfHKF3Jc11Yss1zVfn6xm",
  "key28": "3nzEvSG1cqty5kfkygQGbdbXfZ9zmB7bdLAYyhErrRadN8zykQMke95QySaL6xq6JkQPJ9LR9EhsBv1G9yc4dzKH",
  "key29": "41NoAURbgdySsBcd8wT6Ez2TxkCmDhbhUUn6w3hQCZXhufRXrGLZAcVbH9ot4286XZP5wxug8UrJCtMbnS4hWF8e",
  "key30": "65R2PdqPJEMuF61LUzWktC5aYF7b4FvtsxoSYskSAxpcudMjMGhhCeHEKTbsQ9PV7tX8LfYGzswNUsAFP4jc4Y7U",
  "key31": "5rsUUEzXq7kjAUhvV12xQYphRcbBVeoYiKM7a6yEee5eG5W35zn6s9yTVb7jF59U3WyMaLv6tNLCpx9KByNraMH4"
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
