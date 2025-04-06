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
    "4x2NKSZo5Gs85EtZSjpP6ZkSXi3aigJy4G5VGkErhwrjgXCFBLnJevV7KsGN1mtYt8TPSdLyRydcSVzESLSabTNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597e9Gq4KtRNaKW49yBpGw5q8eSWhVV1EiZobwXJV5z6yYMUebWke7WYjmAoSnu1TG9idcPGszhu7tXeGzoYRGjA",
  "key1": "2qNhhWiy7ko93eyV75S86vHCRFr3ksbV5xvJVKrktoEBTbaw2zLbtfAxr3r82bzYUFkLXsC8pEcPBhQwE4J7BtgQ",
  "key2": "5wz1JaGUVdqp4JXGK8xfqarZempMhA2YY8Gjb1GCPA6jCAHygSxz2TmCbUegBVkdTaNj4o93JLjijJfNmzhR9fcQ",
  "key3": "3mQGbETcLajdBG52aFEo6sv8ZPXWaNCZYLoiC79NpNe99mtJkY1e1XMeytBpBfRqqoLGbA4ACQrbTkmwTsukgVP5",
  "key4": "24y9yHsqW9vYSysuFnNeQEoHTXzAymbAzzzCoR93jyPqcmkNhbPEgxiDBG4ARcHyB1rrVtmZtaoVATADvksoct9q",
  "key5": "5sGZbk1qgAxf2JBBs1p1qM1pnwyjaZpCYRQwXny4MwpZ7Fynuvy2CbbKiKPt3UiMRccYYTcqwu5ffyZa3daDw6Pz",
  "key6": "5gcEZyMznMLnQpGpfYJDFtZYYNBbV9AinWgfQF9rhpvXXyMarTj48qzxW3cu3uYUNRT54pfJXpUhEr2siSRJZ3vw",
  "key7": "3T7JEaARaafans3WqYKCYVWjXU2LRhgMWwzWwN4eYgPHCGxB6pR8E7TcQtdLXubszLKBYYXDaTV3YBLk3BZVnPCr",
  "key8": "53b4sM8otjmBwkZb8KvY3FLe5xBcnQpuAHD9G5mSsTr4UbqVEj7XL1JdhYUh7b9ZbpsE4od7rddTWATvAvYQnQS1",
  "key9": "5JSTqRsrvgKcU9iupcM3JEATnwGiW1k2otd9E4bDkGeybYqA2oaeNefvK4h3SCN6jyVWcujtE5opQsVg37C6sRCJ",
  "key10": "21hqNkVmqGreB2fnEkhf8T3JMa26fpyDUnsk9YGb6gWXEEyqjxTjn43TxhThkk3KmPUTVfeTi5r2wejkZs9yf6Hh",
  "key11": "2ZBhUK2DgSpRsGvUd7tVS4wvF97hpABA9tcns3uEVUfs85TgJQiabGMe9JM1m3VxaeXshdTtXc68QYSSDu7uZ6Ge",
  "key12": "24gFBkAnwPT8WNYrmY723WPhJXMk4vyktenJUGoC6VbCzf7z2G2wFAnZZ3Sv8EE5b3SkrggbAzP7RBmo36PjzX24",
  "key13": "5LFSEhrF3VXaG71C6kc6qGnvfDrwtHMnmcchSjLuBXm2V66DKRAuyW3je8Vn1kKyKgVE5Pbx6ERpZWpPZYozkwS8",
  "key14": "62HfWfRxSFjPPQQGVSttRJKiaUfnZMr9AAtNqaxFYw7xU1BDJPmvK3BHUwhwYrDWPBzz7N31Bf5y4proK13BdSTb",
  "key15": "5RtHb4CEwqY9om8xyhozJbfXdCwhDzEz3vEPCCnqYzMQAcxcFQWPe5jJSD5VshrRn55BfUm2g2kQAwrj5WBRRi9U",
  "key16": "D51gB5TCeULSRu7Saws2vkjHDtipeuLtjzACVf7oCkTHXg6pVGKno2ttAPS2jKysrZSgrr5oXx7GBUDF38hx5WF",
  "key17": "2LVes5ExLYdVktf5jLbzE5by1JqdvWCerJRDZUY5zYb9MaVThjzns9ZeBD6akb67dpqB7VjAJHpzJ5KqJorqCerG",
  "key18": "27B73gqYhdGMM8wpQ9rZTs3Rj3YiPaZpMrhAGvzpTAQUrAE1EtdbHH8CrChLR1rtuxmqKLB2xi389ssJPZgUpgQ2",
  "key19": "2KysK3VVfw5dvoBQBMxKmPpJFYZEtVo4NxBNtf2akCpFqQUZYgeubQ62K9zXXteCAPSEMm6VbbkNP48zMRac3DD4",
  "key20": "326UPEVHUbJJk8WeCufmWRQKiAeGvmmkgt5NWyfzgi2Mm6m59ErtAKLCbMtJxsi9qmHMnrns1nVLqJUh2ceB2qt5",
  "key21": "5ERHEQ8X9s2Fiq55eRF8XZqH5rWoHEUbjxGzepcdrygLwsBepfihEestY3Hp3ftLPFkaqbyWh22geWp9HE6Q6RLV",
  "key22": "4gadJRSGCzsJN42oxrX5628ENqWgaRsXHLAD7Xhq1ssH3JNZSgqWVDkzccyLJrMk79WQbxdRqDuYQSRod3TZQ5Uf",
  "key23": "u63YfBbvByQi5rwBTzkju6mKx7TVfa2ni6bBPkf2t7ZQs8o8kW8gRiqCBYe93jq2H1t2MKMYv7dRuNcjg2YC675",
  "key24": "3rNvVQvTZHY6GLv3wG4rZMbDTH2DnicmReTporpKgMxipGrt7Xw4nPGTpM6Ao7KkNc1Vja2BQT65Jnwu4BSB6ZrK"
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
