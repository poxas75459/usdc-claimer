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
    "2jRo4fkz8hc96DUfN6wDRY488eD2UDe1ha3uW4ez32EGx3R6FuJW9uoNKM1k1KnrDJ94T2mpBp8Wq3bbarxZDQ1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MWm2w4teJA7TaU6w1f7S5o71XJKNspPErPp5LapWFbfMM8WMJ8PkQzx3ptpNCyTK5UXBKmW7miU6uDBp6SpJyb",
  "key1": "GCVoKqzaCzmYckcBno3YSgJXN5ZMkfZYhGxBS4wGvtY8BWiwEnTRs5ByMy3KBpJrSZW7XHNRXimbVLQuJdvNLDP",
  "key2": "2oJ2RPTaHfEFC5gTKRSZwAgkMaJKX4oa9Z8jzJ5off7rTErHXqRAmqvUYy7uESxvNgRFFKvbVmTwQbvf6kmzim3B",
  "key3": "32cDDVsXEdLxnt11KJqVjWZpTgXfNx9RY92etRTwq142QqjvrmCV3v1UNGihMxcAaYiSJzhbcNztUS22Wbrs2aBy",
  "key4": "eNZ4QSSeEWWwENWMDgu8rapujkyGiMycFy6CnM3PCZrATkrBNW91g3EbJCmpHYDX3t75ahu81ozj5jSruP3yYHa",
  "key5": "5DHNUHeVsoX5BHUdpe3jQwSxCrMVZ5KhQcpdfKcdMr77b5qd22sAK5sgMm3XBZH8JNErUS6LwpdRYLC4La4iv8Nh",
  "key6": "zP21xSLTqX6GWLsMJjmsBM5rh4uYKhLmJbXEgSmYj2oTZBVHSVtW4oMba8nYJGWETcPkC75i7q6WacqoWj4u1SW",
  "key7": "5R6LTj8XGuwGxhGVSNtEWjkMFFKb2DTCgAorF9bVUz9Y3c3Sonqi7kRmA1nMDB4jRsRdHgQDzxyJATvT3RCqWMxH",
  "key8": "62A6RTD7kRJazoGVNKEQoYyyQyZA8oxMjevWHQNBKkgoy6KjZ6HxMnRRCLj4d1RFxUoSQU44nGmBAvuuysTS4aGq",
  "key9": "5MjQGGNYfyzBhupX3YkherxBFzQji9QHut8oJa2VxQvJRXqvAVsxuKYJQrAjzH6rMZ8PYqXE8vNqbAhZFjMdxkUT",
  "key10": "4cXbt9G8Kr1zaD4NekZUzMQBbuYejz7zQri1EUtPiPg78WdBTEt72dpZpa1xBUH7vTmcE3vkfG6btT7K84xTZmvp",
  "key11": "4WMQpRwuUQEYMZeE9uHKRMqYGgxHN9P5ksPQsfBRDF7FEXJJMePEwMmXCAnhdqKudiSSLbTXKxu6PfybWLSNf8FZ",
  "key12": "5wWuvpEREAMP5GfBKRLPoiJs6DHLEP3pFd5gnK6SD7gJJyVjTkmYAx4XDuQS23dA4uyXtptb6GFDpY3V4vnvp8f1",
  "key13": "2GJYBUUaNYsLucV4RamcjdBrvTd6PdqbtDh6dJZBnprZrvwB9Bi9rn8vHsEzCvAQdb1PuEZ4YTSG4N2Bi71e2c58",
  "key14": "3US4a5UPeRUL41dY6fEVL6V8ues8SXAbE2BWFCK9zU3QrCm2roubrqB7MqwAnUvt5sb9hiG5iZ5vxWfb82LA8Uae",
  "key15": "58ieqpExeHvbfkRcjVEpLjMCXt7JeFb1ZvMSAV4DkjbEdr27a1DfFEXctWrxNf5tWVmhtd1sG7jswTrhanSRhQkQ",
  "key16": "2BrRz449wMwbCcm3dph9BGNG5h7v96VUhsu78sYuBjrZLibjduRLzqmLuUMpsJmv6phkYzYFpsN7FdJMERThiE3Z",
  "key17": "5RjWPocDSUPRuSCExLNg1c569YjXpMrg8gwgX56FsJTLdeT1fub7Ww6K5J3KHhodqvACLextLZdhxyNXSREuGHRG",
  "key18": "eTdu6PLEF23qZ7JcudzsxYUYvVNjmsdX6gmh8Kb4qGTMp3SmMaWWnuQPDgTxYFbU7j9cJe8QEkhckY2VevWx2Ld",
  "key19": "3bJi8rqZTPPri5am4aeMLanfVYdiE6HqytZCJPNeP1RKFJmexxdbrpttTWBEoTPzd1xrBLUF1WLYLtvjP9wHscEK",
  "key20": "KDeLnggifCom1aDiBB8jXJocDsmXC7PvySRT5h6M23gY5VuUcqVwuLhyxv8R7Mpf1P2XbBGrG5ZUjZgijxLaXBV",
  "key21": "3zVKS1VhGRWHzmUjmFQnr9MQyi3F81W4XZMV8WPmqoF35iZ5e1mcp2Rh7eCCAnKztwQh8rvYTFrfbyU7aaVvD2Mk",
  "key22": "3Aw9ESgBYjjbPbhpZTs3k2LY2RJzFDvVfayey5qZX4V3pSzaLv6mUNZSTdSizoPdm75zuADxgT2RiYzCxFhbftZQ",
  "key23": "2WURnzkGqhUnY1VKJfbVkazWaLBnEZWpF4nqbPkeoqdnPScqZrb9QpGKLk9UmNsGbv6oYT4JDMfW2jsfoBVCSpHj",
  "key24": "2JRgXHiYpVWnYk6zDvXvLPFnguPq8WAsDac4EuoyFLzyGYLRNEpRwXCmp14F84FuVWjnnum3y9qfQxX7gymoeZb1"
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
