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
    "3f7hPSEHtxwCpghRLUQZ7cw15NgKppPYbBp735UKSfw92csFdD21d1KqCVk5TUpcLYdqEQ5oy5sbiNV9cmDkvdvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p933RzX7Ue6YdaMRYpXZRDEbSVde8VZcR7t76kKkJ5d9N8N1y1s1VgGFnoPfWi2jCiZaDQQw9NGGTwGqCnRGeNK",
  "key1": "4VN89cWdG16PsUqxJoJM8vymS5NB9SCP5DeSFEZNcvssnuScm8vdjBrQ5sNKWkn2aPSvSVVrtnf8xeXf1rbtrKCB",
  "key2": "3kxLgUZBFEJ9R8b5sXsJwtz3VdZtrnsg94oE6qkwY589x1X3e1btsJ33Yw1b6hTtXcFBYBK9EsYuPEJPyX3iUFuR",
  "key3": "5pPEcQnZF6GjpvKkfUcpezWEpLfTFq5EVBLLgbNpp3V1tK6SeVe9oFKq6AEjDCpomwdAQtYS9jUQfH3YfUcogVYj",
  "key4": "246TeS1LX4yvDYz1JGt5NXUyt7vXTNMAVouT7UWXXBFrET7SNb5KnU7qRmVxJMxg8QnDfYF2tHDuPQL1SjjDzgRU",
  "key5": "5oKvCxKGART4PVmYvLiY9CRpPRMGQP6JZuSkp3gthy7c3chKid414qK6Q5SKw9Yh9QCZUYhX78NndiM5RwhBCfvf",
  "key6": "2SHNDu3eMitfiBwzr5WurEA9iyVQnSitTz7ShPFid95jcqrQt9XSF5pFW6NVa1CxjRmtssgb9iMhbrTqt4vMyYre",
  "key7": "3wB96ygBR8nq28L58YNmA7JPWD8SPyJyrwJhDSvDk3uwJgLkMHM3eFNMzsdg8y32vT9sg39sARt1DVEuoiM7H8iC",
  "key8": "4pG88BXiR4mqDYDhqF9D7jikDMJVjsnz8a1TiBYJ5WUiHvHb5ax3bvS4wk55E9M5GFH1j4btopa24AMB3QhDbeSK",
  "key9": "5DCRZBaFTC9CERWMZz7yzZRhwGnk3nQDvn4vZzrLw74XtdNJGBC9yfrnHnW8dDZNE3XTfJXz9FTGDdqM2kCABEvd",
  "key10": "3GvepKEczvvyo4vMAZ2GMP3Cyzm2fNsn5QpgcPpQWaKrBxbkxhU3iTStrF3WjAddAWTiCG1hmXsftMuBfXd9vJCK",
  "key11": "L6dac3E5p1P5LB54Nhhgkr3f2GbeZXcDKhTJqykhWCLK3ea3cWRSBXHd5ZCGR994LWFhVxmWHBkWXstfdxiEzCY",
  "key12": "33jyFvK9cTTKXQbdwBFEA785t31evuZLPQje1Q5LAxB5QeX7bDv7hb3Xhkbn3vL8RbAS1porrQc3T5vDApHFc6aw",
  "key13": "62mQYftijHDgsMoB46UHmrFSP1m5UXHrFLBmoKGjwXmzzevmZGmzKZbm5ziFNhepMucb48w5RfWSEASiYWCWucBT",
  "key14": "4T3DPSBi6ceAhMHihK5Ndw3fDACLq7pS4NHwQTiWwdoCHkasRaGyHfGarHnWsH5PkmRpfjB2PWPhePei1f1y1nz9",
  "key15": "49XStNLCaP5msJLFbAvuKqZQpUzzT6bmNsHdL7dxZpPqLy2TsGa7yMT6kFRvXUrRo3ZxBzxzE1YXFXNtQ2EbrfKs",
  "key16": "66FUW9m7wL9PzdyCGVjXonFxwanG61eTn23FAbLNXuFQMuZFvMfsm5uXjLjxVjfBrJfqrJY8c5RGx5wR11pQsgM2",
  "key17": "2QzqjvBx2utKe2MappuvCsfp2ttEbtvFQFe9mnHpqWC3258PSr2UmbarrP1YYB9rJQdPSrXQrBeGZhGCE9LXqCoV",
  "key18": "5k1dfbTUpt5zffEzgMeLLtcGzVwH8UAWLnYVZ7LW7AdoXzKr3hFxuuGwFDHm3Muu4nELN8wBgnzG1wNLhF4M8Xt8",
  "key19": "2xVe82NNPdGKjQo3vM38wZWMwdJxks2QVEPFxezvNdBhs3Cqd9uSdJk7SJ6CPtSwyRtGEtoSNgBrbxJo319AKYbG",
  "key20": "2HnLenAHmoeBx9JQLeMAgg6ckisJ86i1Ur7b7iJ3V8S3msYHaEtiUxS4RdBwoHxeRreG9cWjaGUzDNf21TJ492gw",
  "key21": "4L7gcHQ5y8fKRPRjcb5gDPFVhbgcU7DAyreB4ZssRX78VjsuZBijwvpsgnfETj5jeuuGYiifCYdRTyp6Q2chfSbq",
  "key22": "2ZbTpoXvR1JaHFzycXo6ZdDfqVt3hReRuKji76hw9ietaooo1iu6FJ58M7tMb66hVS1Qzk79qhNqMRUKGrG7uu59",
  "key23": "ovt9dhJ5nPZwBL5St8gwK4ExoH6ES8rER7tCbiiXfKdD9SWox1zc9bcq2qjpDWdTA3CzfV4iSKHbdr1Qagvymbq",
  "key24": "4teGH67oT4hDvyJmDeYJQe3epa6nyZ9X1UkRpewvcYXqJzDmUajKCRUHTmMRNsDwe1fzpLm5vUhWD6aYkLfjw9Az"
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
