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
    "5mKGCyug4iKm3p4aSMctT4sfJAPxd163u7g1q7UQqDhu3L7E8fNXHy2kCREdP4DGqZPVtFP7dWorNLZ8AJAkJ3qB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faUwYi6pARsKDy2CgnrM5wfsx3m84kZEAwXUcowaYswgtcAfiiwQuEWekvc4ikzFsrsPTJyHD3ei8RVZQPACvaK",
  "key1": "67bc62au8Wp2sRUFLXTyKhbAVqNE17EfpSnAoXEkzo7FqAUU5WhFPpEzXwsBcQR5bFjqstxFMnWZB2iZ4EEE9dWy",
  "key2": "EVYbhALX3YqiJN2iwRZXMs2utAW4QQEeVW8T3Aa5agWhsJY9GAxXkxMeetDGSMDUiy6XvfKRqFFzkDRLunDVZzr",
  "key3": "JET98h7Yf2PGD9YT5DA8SPP6enzjjNjKdfkSyxDZ6DkhVQa6DaZ9CjJ59HJBTqeJpB6C6AzNhiQEyScNWqBwQbt",
  "key4": "DVu92D9JJsHec3FPk7SqpE3JHnHifBphi83xZHTTRkHNoCJyoLkWVNzUxF9VRpgjKSW7QHR5P8agf1pzv5RrVec",
  "key5": "5mCVRV2b2Y931iH6EUjSmuVnwRWiexn9GmaBeA5tnTPUNCmxTCWYQ2k1UQp3uAmHQzyMC3okF3SJwbZHcvBXvxfE",
  "key6": "envAZRCzshAtTRwtBs8czU6Kgg9ZvGbBgXLc5ddjsq6x88k461cd49XYLfnsXk5mcYthR6VXqq8qYL4KNcrvEqP",
  "key7": "358aUNbWCXefrPJnzMq6ayqz7gqVD1o8xCikSguQ1A2op8NFR3BTAHfrr7Bsy6tfk6VxeJMNr8rcyaPNoFfrVHRA",
  "key8": "2TXZ3ouTGt9Q99dGUi2sqXQGN9wk37vF75yFn5RgMqKpxLWRoMomZmxtwYcLRR9tfr1mYeWVVWceihbZ5esCBdK5",
  "key9": "4zdmbNLfoAmKYCQqQKxLb8iQ1ozjqhRwjmoHKKxeBYVUgCUX1FZiRfkz7TCgeKJsVromjq5yG2By26mQjeNYtB5t",
  "key10": "57SqCXgs35ZPaHwCnwqRymSDdUnaKpit8Mh8PL3e3Rh2jeE1pFTeZymeo1ffVDFoXBZAq67k8vzNHrhjescqnH5B",
  "key11": "3erY91JNUisWrk8GFyeeG4TSTyakQicgJP9S9d12rQATFc4JoE6EtSuoE9GMXvfaJDsJC6pDixHmpNesYNCQhq54",
  "key12": "gryKEJS44rN6EGeED2HymbXtNqfSQHN9PgKAmbpr16yVaVPqk2HAoXsN4cUTP2zWpjiK3BVxDyqihGUycKmBQZ6",
  "key13": "5vD3KTFNQNp9KVUai5LK1tjhfRkqkpVx4nViXwXFNPFAc3uorz71d8js4uLaz4W89Td1H1Aq2DciFzNy1JmA4WQ1",
  "key14": "5KhWUq3r3gQ3c65n1HNGvQKQyECVELXa4uXeGHfvjY7mkKJc57AeJeuk2Qz7iQN76R6Ngsd4iYrFntQTVBT9BEB4",
  "key15": "xbrFfqdHGvyseSZppGo7UKFZok7v6XfDwowa2X3cumq98pkjv4Tak5dVb68AdaQdzTYiAMTRmt4ofpxNHdrN6wt",
  "key16": "gPeCYAboiSp6shir9BviNo7EJp2nVEeTsQZW5B3gU7RV69L7WciMt24SFHTiXoUNJNUmH1dUrZgL5uzy5QiFSGb",
  "key17": "38sqChsKuUmgS3kHi9CcXkE1G2SFwwzeeXsdkrpbB5BFKmTVHS1ZW1QizK5JX4GFc15biwjFwDYUZG4UxQNMmWuz",
  "key18": "24Jyx3oFm7n3H69UrSz8qjx8zYJM9yMmf7EUPKRreAmXrGpKqx1FRkXo8PNWJC8LNw71yVGLsWk7w8JWtiF2CPhC",
  "key19": "NBzUjVhGLNzvverCcVtdmggLar7CcWb6xCDFcm9PoKdnygpzBqgbYgRJSdJcVZrNGKqCEQu4oQ6mAEU4cKfrd3R",
  "key20": "59j4vxeET4dSqRmV46PVKQ4HyBa5AbixMyb9CaGwfBjbPbTDqaQuYNT6redeXijSJ2d22WBkz5hWhjH3yMKML2A",
  "key21": "3zjqyXqc3cb9Ejb3Nbn3w6SMeUubmVbzuq6A55KyA1X8ZepgogFFvrKcdAymrWowyJFaNd8stmGCjnzwf9ewodzJ",
  "key22": "4zZhmmfjXyxgH56QfwVPBZS2qD6PMgQ7tcah9aGeFRScfi42Qunou222yPHUFhdPmU6er3ryWpZWoCYpB5Agtcao",
  "key23": "h9jSi2yXWBTNv5xvNaJPHbgYGCmojB3VWuSs6DDuNDx1z8Da4TaddbjhtswSU8s792KjP9Tr1C4DTUhGHyYPjPq",
  "key24": "2C9R4pB8SH61j5GJgC19MRrm5y64ptR8HUiGGDQjhnt3CcD9WRKPTdj8S6Ez5MDDKp6pqeHuE7Vezz4L9z3tUUYT",
  "key25": "4dU2SygGHyJ2GTZ9kubPuxZo7d4eAT4Aue3VcWwXei9Y571Fsu5dVwpGDMncoVeZrLr3qu7A1V3UqHwi82nQPiRH",
  "key26": "3ZZMWYsUJD7bh9LMLiqu8uDNBwYFyGaS5353WRVL1gHdfWdXfEuMjcuXZb4PeZNa6B1TAfVw1qnPLRf4TWzRjALB",
  "key27": "5CgFpRD5Rc3nfQkWCsXtMxghk95e2BrVRNx8KxfihE2kxKtc5CoZEeVxgKFQbgfs3MApVo8HVyPNfTxEHDkNPPjd",
  "key28": "3shXLkuZ9DoFZu7QMgDtybWJ1vpQPTaHGQMGqnMgLJRs6EzTrg6G1pA6CozmpyXfgXfdLbKjo7SgepU4V4KYLLG9",
  "key29": "4w3BcP6aLKX6jP4eniPoUhmJWeVJvZUEuU4NUq54NbQZqaZCecgTvEDrVK5Dw8Ndhg9EqihPFSrvLUrtFkHp29vJ",
  "key30": "4v55k9QKEx9roj5xUoDcfeNGWquy77zBzpcdbt2hTen7iPU3xVy4JihWajGd89amR2YowrZTnMExTkKdK674jhkq",
  "key31": "66bybW1fXSe5Se1Haemx5MaSaohmQvxff1ARBw5rtLtGHTPwbc5ymt5vkVRj2Z97UWsG8k1sGCAMqe1BRrTgVDZc",
  "key32": "4jG43EExfy9UtCwPSTR3D6339CXu3UjF7jrze1AKXSy1Jn14Bt8rn4HQ3kh94r69RCYuL6AscG19BAgN7UB3rPzc"
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
