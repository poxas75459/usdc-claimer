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
    "4dRLgCiY2gaNQjebaem2WqxxS2Jp1atsZUiqUKK9zWukro3VEKFpmWf45u6iR6ui9ngpmukru35zPT7YJXzWuusz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVDQeFjWp5P71CCAV1CiwHqPFJo1XBxz5JBQrEUg2TCt1KEri8Ah7Jjd9T3GHMjhwhzqy4ySw5URaX9tkwbmTnM",
  "key1": "2sa34Ld278uHUA8m7tH2r3SSVvJshdJ58Mp2LUoPUDH9tbPH9WMeAHZxzKCkNs7y8QiKn88HzW6fystjrmcmxTg1",
  "key2": "3WDoDgdoerocvWo7Hzy9F6A4q3Mkdb8XZg2J3jnwtB9oqG1UBdb9KPD4EMaivnNp8ybk5B29TSohQJWtZBh3jhS4",
  "key3": "5Eqgi7ax17nPXWpxbB34d6a12u4zTvrFMyQdrJyGVDC1VqaLgX8HPo8jex5PifDcTtKAi2FCLUvbe53ANAgGD7EJ",
  "key4": "3Nk2hbCu7NvG3n3gLz6pKf8BPHT2mzUADcyHjBjej8P3EJQoqC5mEo4D4fxAfmi7ZdQtoxT6jsKKPXFSq4MDkfjx",
  "key5": "YrFoxiDVZUz8zjPQxxpW4GAgLhDaG3cvD1bnqmmf6gfUeAAoEKCnnBSyFDK5msYmsDWNWvFEN6njdc1vamtuHpZ",
  "key6": "4WU86ME3abudThvjGyCyiQx5dBMYXJnFDJQT7dKtsEitpUKSVi7ih5dyetKCRAPfq1nc8PNYK67qGA4pp7Fzr6k1",
  "key7": "xV6ALLpGq9YNDJz84cRxYSCS5bhSj6S6n6scNzrG7kGqojS8BpbhFx9F8f2ywKXUteaYMd44WAPNZthmrCAVNjx",
  "key8": "2SUPDWXpMumT92AAdz7aPAAfgiHemASaBXVAkAb2eynteSxtYRaW8DVBmjVnAFv7L2Mz7fM3HGTPEyL7SvWVH3sy",
  "key9": "2MLe9WSv6ohzw3HgEj6LcXx4N9WMBFR2ggsXjYrLVq4q4pmAH8SxMjY2HEUYGPBBAjQXGqVSgrueBw8hw2e89frp",
  "key10": "DHF5h92SPbRAzJDgXeHGrB7guHro67b1FVpCXcBYDm5TurWDXEDGZrJgHsAH3AgT3TQoG5xw4EeSX84ted8ZJvY",
  "key11": "28tcD5zmZWDQsPK137XRgs3GHf1cGu3ybURFRjYZF7U5rA1N4WrhMedLck4VwBHstA1oSBnGnmttwyax3tBg7uaW",
  "key12": "1ceJNzrFX2uNNkQFCpPzo1Va7vdXSfBkN7wkHrUYjs7y9mjRxVjujHxqzqUWiRaMA53AeMwFNFhFjhpL7dKKVL4",
  "key13": "448DVLcLRBwaDyL7GGVWr1AybNWdL8v2TQVxf1FTxc543qBbUf3rRNbhxVXuGpanitzo527RNsLuhAVJXpzPx5ig",
  "key14": "4XudLxSYd6w367JYUBxYZ7FNimsPsMnPRYAb81UE3U4RqJLbzEAizWYHbe9GGddtcDcnNaz6n4Q33MyU4kPZWdbZ",
  "key15": "4Q2cAXDX3twF8iQSauE6J8AmsAjvuhUo2pYMxhgRTDTs4MTUDmjthAYZoT9GB7BrXK6jC8ZtgzYUMkrYjJVpMWeg",
  "key16": "sPTGefJmP4VLzxMGDQg4hhbMgGUE3PSDurtex5Yy8BNcD4KCHbJXd86ZCtuTMftUT2ZQ7YXSZFG2cYNeDnABv2W",
  "key17": "3nstXYBXXtz4MG8M1rK4uwPhrp2uGPCkeBANWXqiSTi5ugXp5u32b7eJ2AqkrsK1RaLu9ZhWMexsLVDabsy1jeub",
  "key18": "4zakrMRUGoYGqEiVS1vg3fud86BY1JMJeNFibTt4e52BD91JEvx6YskQy6f8eNEL2JY2TNz3sbfLvZMB6oeAx4J",
  "key19": "3BuKdBZFY6Q4Qbu6XAhETht1HVxWh6KP7Wr3RRmpPpLLKUSXzbnmubwYCzocjedBER7H3fMgnhvdmQvby4mDo2GY",
  "key20": "3N3ms6anKkrwQsrnH15sdQDscuRJogEiwUXeF3NykD5p9mctRGwDB6GKWGwb1Bj1T4vtQGd1BnpURkzgcDK9Efdq",
  "key21": "2XLipde8abW9wDaQEKAmvVc7T7oi3TXyQLdewXidS7imXJDCtDVaE2s3aSMDhn7LE4s449mu3vpfi1yPm8eTjLSy",
  "key22": "3yNXYSzTq3MHQXVkwymKtqYcqKJ8cagyKAsTzZ3oP4t53nJk2dZAuKPm8998cjCAjpCnTgm3soVsj8fnumsgtErH",
  "key23": "3UepX49sySCebGxhCirgsQE6WWKLz5RJ5nJ7jvukNcHhyEr1Sj6AreyBs1SnotJcaVjJYf1nGyFEq9T2FMePmLUB",
  "key24": "635w4x81HUQisngkWHKNoyHzLtGyomKwx6b9nP6xEh1Hp9tVdoWBS11PQjxh3meHvP1qWKtggL4AiWs7e8SrhCRP"
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
