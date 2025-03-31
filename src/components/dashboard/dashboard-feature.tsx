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
    "G2XxQQgJY7KSHBje1YnZCYVuvz6LdzZ6k47vek8Qk3imDagX5Qp57pZEURM5QP2mRYSyz5uXCZkELxz1Je7XRum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SxiwcvDkAa9QM38yePbZkeaGBjkmgtq27LS2P9EnLiVpPKWKx5VUK9zaySSPDUCH4vShAovPHkjkdpQqzb1sVBt",
  "key1": "47RQ3EXRmHAqL6GkQJXjyQRaFYHRKofX47o5jDCrXvFLg5S8NqAsSapSZwa3rbzKzuWA7zZAKsGePQGv9mihvmsE",
  "key2": "4EBCWPPnNdU3s3rh2q8kzfRQyAAdAwY7d6K2p1V3i3m5FRFywZxDqcjcDujVvkdP6xtfBLcDETTz8Sdj6b7AoUk9",
  "key3": "5yhKh9GRUwaCwBEqbiBRzKuu1EZh39NATLCQf86PHrnGrSBZh4iGuZozMRJBYM5hYqktgxv4dQZmGr18VbL2Sq8o",
  "key4": "3RguK9SsqZA7DnthAkVzLQERu37VqAniayH791WF7p41r8g6LZ3HqPhHco8bHBHeY6AnJ9gHG7AtnxiTVZzRZhhJ",
  "key5": "oy6zyj3DzMLGLWP9p5Kcv9663o4rAKn2XhmmsTP7PGbz2CcjLof3mr83gRuMv8zKKgmeL7gPKkE9iUPtfNwmRQN",
  "key6": "5QPc4Fz9VG4KrLgmz5zNA2QXtpV9hQN9DTreRFwfaDLu6xDGXR7igRyzxUYUdRyaEpYnmihGkWasBAoQ2QSrBQfn",
  "key7": "2UXvMzjMiriKFQdCLk7PjChSVtuv7FRqSC5gUVE1a3fdCmikBYT9y6khnYqnTriSNRZaXxb8BFbjoHKZEVqeqaeZ",
  "key8": "4SGzmZuk2yUW1m5euSaepxsvrHAPoK3RVap1UeSr5B65L6QZ1VsPmXVztS469u2EJhzVBnuRCuNDahKMykdqW7mp",
  "key9": "2ERG63zQZgNZBFiKjWBcHTS8hCYMP7Fy3PStJ3CeAJfSDuq1rpVkesiAqkARv4cFtV1HSunZLj6h9g64ZPs2VFqg",
  "key10": "2jFtPFHvyrSNRxiWxQ73g7qAgnZum7U4mkQNzsdRCR47H3Bf98p932WhbtR2KMebyyVLHeMuudojy3osVSKTf5sk",
  "key11": "qPD6ZG3FqUh4CmsfY5C3LKSaVWDH4NnuRAVupSxYbvoHc5tjB8X5r541N1apg1SA5aZ3tfDhqMDzp4PdehpReSm",
  "key12": "2DL28wS82wAvxtDp3cTSo8tE6XpR6ZqUPusdGoLFujJbhh8Rp1sjTPSVZjpoUNqq4hcaoZYPSjrSqjU4KPabmWYo",
  "key13": "3pk5YaDKgCfCqZwmxtDQtbhi7Zg5RX2fets244yjSv7ix1GMDMho94gauVZUwEPRkxauYTieUBA6yjN6SHP5Qxna",
  "key14": "2TKYmDhRfcgtmjazkSt7FvpM42nfia3tJiXiBEcHM4CfKVPF6TMpjd85hk8x7ZBYom8AJ6oRmcpqqPEimvWov695",
  "key15": "2rfpb1cDP6HfuofnteCVmHmKVeQCfe4ZP2eaRgbsu8ERbGRC5fzJJV3obUk3uJfkPJ6wbQCD4vVN8eZW4EVyxNkv",
  "key16": "2dmL25iJfbnb3sYdyYKAjAu7WXMd3DJicVRzf6RUw28jdjwWjwRWxbQmDGrspJ3eqrWSSmvqwPBBa3pJPmZNEyAw",
  "key17": "2yx9i9gVs9C6zduinZVnsHwqCBQq9TcMaQP4MU7tDmGU7FmmK5hkjDfdAfMYQaQm5Zqj21By4w8WK6GNsmYfdnjt",
  "key18": "yuscLFNDD2McXApNVYJUcERVSjj3LeMLGsaumgxSWqTmJhK8tsaEFqfqR56DbkP3EsREB7bivB9AEgUx3YWQTg1",
  "key19": "4iiFr7wGadFnjWtVgKo8n9H2w8yh5aTinyAkVDx2yrCVCfTYkYsZkCu7BXxPGqutTedPKBcqxK5X3jTV4Hr2Uwmh",
  "key20": "31mrH5ky5QWdNtU8YEGkHNc6bijL5Rr8mjqqgcw3oNmBfPwF1k29qtvyTpwNmKGXk5Aq6J5U9QUCCepsunkDfC7f",
  "key21": "5XunzpaboAZYdH84RAe8dcYYWirHPw4YpPkWN2kcudVPtvKzHh73uVoMhJhS6BFmpF8GwqM47tgRme5BSmuRy24S",
  "key22": "5Zc3DGSP8s1XgspSyYWer7xZCQaLdyTy3u38VT4hjMTyRsjFVdZkz9MB73AkmNhkhUrh3htmboX41MvdcYM39BeV",
  "key23": "4YdmLbZQwM3BAYnu6P44wvmYzRzwRG9CGuFT7MzCa9ctHHMcjVpc9XWRyxYriMSwUrRvE73GKtNrxDeYhJ1Tt4WE",
  "key24": "63ccj5XgY7YiyjxSjWVNaPm2s5Nr12hvC7oMjarDGhwyZVA8hVSafEkWP8cqEX1WekMwhXd3yxsjL8vkkqCMqtaG",
  "key25": "Q2gro2ChjMxXF9JLN3JdCizzzD7PstuT7THEt1pa6ECYsU6LGK9edCqenLPsfH1FQnhQsiDL5JGKNbwDQ51fJsw",
  "key26": "4PYKDy3fGGN5qoymZKAR3A7n3c1kDZQv7hbVHNpPTNdVBNGZQZ7TLz9xxW6EYd9JAWMeDuqncoNWNq5NCHgk8bJ8"
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
