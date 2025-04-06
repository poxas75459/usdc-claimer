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
    "2Rur55R83NRLtwjYGkRuufPSwHrVPsqhFw13Ltdi83xuWFFVFkADQ59NjWYLEXLEDQPcGaPFvdWGikLavC6C2tFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfSMqrHWh1gJZXauVrPcUBJocjA7CsqfHhBvvdrjJn5QcTjTrSmWzEzRSNRrrXyKGMSMFLESZVsqCwvVL3XGNKR",
  "key1": "62wQ5BqkJ7q99amY8jd9RLNz3U7qZtcn5UqrG7HUcfJiaT2PHzB39qRxMoN6WsM4iDrEcjqB8FuFjiAFzsxVNiXq",
  "key2": "57DFZQGzzNjH9uEnrBm2UZcrLngHNFDoizTbGgiGet22SdB8SJQsP9WPVn8jXe93JPuxmAZ4PWjVLLMkw3cjQ13A",
  "key3": "4G2UACRuMWbL8svyicdsMSRbrn8kqCpXJP1ZK56XNbHGQ1btLELuN4oojGwg9BWZKa1GTQtjHe8f1h4edNUmb4ca",
  "key4": "5ufmoMhNam4q9KvnaKiro4jVT1CKu24QBSh17F96d9Ct4qdpX1CqXkz9WnVmygCahPzQc5FmtczfR4uGGfoAr9Dm",
  "key5": "5qxieV4MgwzDRktLskmMmt5cZf55iMk7BpPAmu3M2QznoPoJVtApm7mjNqVer8SzLNN94keMA4SWT6f6SSUb72Rx",
  "key6": "4esB81PpoGTL6Xdc5mRSfL1r8VMQTG2duZdKicvXH3wUf27whZoounQU8xoB2EyFL98yFoPPZtCV6BbE92nxhdBi",
  "key7": "2NAG23ww9t4NeWa7dnvuY2h5vqY3YcCdgZnR41EfQKtUMLPYdbs34Fc3AyycfnFkW33VEdSv33ibdtaq2jhMDYf3",
  "key8": "5WzdxfpXcDFw9kR2HPud2ZrNJcPbHsCfbkoPEFuVujerMtGR6HqTLUyok4hwjQ7FT3pKibnKniqt1dPjW55Qt1jb",
  "key9": "4HKSEkosxdxzpi7w2Fn96MZLcjNak3piQ2greaZQMhVG2YQ9pYtv1wNxBjuT7jcditNCzAiGeKd9dWNShMHgGhxh",
  "key10": "5Qh6wa65Uku5zArwSp6tgHHh8c8UPDvMNE1x77D3NQZQaiidtehTCmkESPGTb42KyUuKwiacT6yCjvnd2WbG2w9h",
  "key11": "2w7YyHxqCUE4A7m7p3hKuRGRzS2S3hSYreMnEtdrit4GVTHTfogSXBKhuYg5uCW2dqTXS7TpmBjgahY3n3tv1uzF",
  "key12": "21a96r5EexvsrWbbNyEqrxikdnXxJSG3fiQ4qE6YUDgEDv69wX6LmtHFStDz9cw3z9ZjuA3P5NtnThH6akF5PPMs",
  "key13": "5cYHKhYEEh11tiUFYXcnxWk1Aeud9mxJhZte1KpqwHwBrSPb9emSCQEJqaYkYxoT5Huig52LtcmpPTT9KVYQLrxV",
  "key14": "2pFcD8JxGdT5wxzpQhC89XYFfqrdBn9VEiGhUa3Cb7dikSKwopQ4GvjrB89AyS9mNF2GdGQadvTxsgqg7zJCp45y",
  "key15": "3KMhZYCkL5ksEh5qEapktmUDoTuTAqmuGaamr7axNnLV7rdHRm625hz5GTgjXeMoftfYFzjD8ZyNoMkT7XTAwZ56",
  "key16": "4Y6CodqoMk2cvdjuJFqoZYRCZse4orKYebhFQV1ATSSUXFkNbZ4ct9bz3RiJA6ecHqTDAmxGNV8ZBTQ8zjhJs87y",
  "key17": "3GVufxvyL4nsSZQsq57hVuahdxJbVQwYNwVsC67iPUkiGXRBYZLKr5VuSfWRzbTSBSBVoFzdmYnhiGrFU6sAk1ya",
  "key18": "2x1JKy8AhkksMLZFjFMMRmmVCu41hBL9PCCeRX5MsJQNGUxJzQZJt8GfgbaQ4c5aCArn367UfNb8ZfPLNaHGwEuM",
  "key19": "5HKd8Jbgh3b7Nmy9TufnsYn5VZQ3SfddWKuduPcxgo8Eho74tTz7TsQcazSVnU7B9SDifeAAHTztzFRCNjpDnMLC",
  "key20": "37HW6DRrwZUA37BNeyHBK6JTe2Uf8MqLRsjDS1ANLBxc18pfy72GZwehacHGs6CemP3swvx6UUJd25Rsmmsgb3S7",
  "key21": "3m7UsXSbywLEiymyYvbDY5yT2NWbNBBcdquodzEjXVUCeTdX9Zs1p6HJtomyHdVoFVuxS1U9QCTGiHSAxFHR5Cgf",
  "key22": "5gYwooYpFxdTtvre1bxrCBqUqgn9UWHn1GFQUiGFZuHs8emZpaBJC6Y7cUj7tDHc82roX1PSZZbL4EVtD9Jv3Cth",
  "key23": "uHf1H5NqJ3ife3PTPKxUJEGbYXXCSgsj1Qxc8v4aC4N3tP85fePS5d5gLzQg8x31aSPKqcjpPKCYdRxEWZ33PUL",
  "key24": "51KcaL24hcY4R5ge3xmZ7cvJvpJiffJb86Zbbmzov5kbJz5gSnTVKQ5Y24931VNWZ8pDDq7cAgA5YPTJ4vxCCGzP",
  "key25": "qjFZ1qdvQN2x9kPqgn6DgpPVJLLWbxgwYCvmQu7SyyE525B3btd7E94FZCH5iSkTk7b2KtK69v16nYRoHL2kVfw"
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
