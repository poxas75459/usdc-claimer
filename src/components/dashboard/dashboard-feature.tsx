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
    "5tsH4dTHHNDAXAWbgjhdz2MZmEqgfZBMkQXLYKneAk41p6qh9iCt2uKZRPYmqu3hja5F2DnWHKk9CEEPi1Ub9bFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KqdK5mzHUWcYtjs84g5fkAmnJ7FUyrGHb2T2zfSLn5cgfg3ZGAZtu83n8mSAQTuftqR83LWuM5tfsXAEsPkyFo6",
  "key1": "4bsNDv3EL9BKRk1JnA49Cn2kL5zZyLpcSca1pcCJrNS6v1roSChTiysnLJ82VtKkekzEt1ihQn8Bh1TKUhSFVSFt",
  "key2": "3p7t9rNRzUM3KkTQmqnrdQg1UPkAuS3wDLqVA824p1V553ikcBz3q9Ag8H13AjDF1SqNLKQxUmPwjZns6TnxNgWD",
  "key3": "41ndEjZRNaezv3Wxf5wfM1aLnn3MdNzFE9C2BkkSPCRDb7CGLU5Ew3z7kSy7ESZTUfTkrA7Jj12Vj2HH3ncBuKfe",
  "key4": "5CcveR68rPUwa4oL5tuknBcHjEVy7Yb22Tf7eqhFpsPikT1JZABpH5XMZV2nkUY1euZEFKNgoAWhxsNaXN1Yh12T",
  "key5": "63gFY21yc71UXP3twDN1yHFJf8EQbFErw96zAsHvZhef3pQzgpkmNLV4rsfm5nQcavQjeUhimuMRFW9tz7xwxeAR",
  "key6": "2XzFjwHxoy2P3JykN1RdaGP9ajvZpKL5XA4H4Ya74HL2X6rWNk3wzFT4mjzE85MSb5RxnUbx3tZT1TAWgiLBWDF5",
  "key7": "24KUyZLsmsajS1eK3zjGANH8GY5zwohQg1a8yLYwG9SEFnY8nwyyhY1mvU8inDpz7gvhNyTKWwnb9QrsDdAoomRk",
  "key8": "4872KN4GytrVce5SNHCnGVhGJsBJaVUWo3XXbtmmZRpnfXMLVwiadfHobmKU1qEo3uBMvSGqujUXfJzscfMSrmMf",
  "key9": "dTeZjzH3ExLBBhosX27CiMarJmZjCpjmHxrrYY8xP4SsM1f1i7wvWmtfYHyqrhAv5uypZo1QKJkyKNNymYTNmLd",
  "key10": "4ayy2Y9bkcQU8nSeoppqWsP5CuJ7uhQY4g57Fed5tXviZy6JWHGttAmF17YKfFbA9ScZ61WxXD5QZcYXjw8QUcB4",
  "key11": "5BzEYQYdqfbGFufbcazpPqJNWR5m3BiGhWPdGJT6T3kybutB8ZCBVu6f46xdfYBDwUVXkA3dZjxE44gTkptCQaBX",
  "key12": "2ktda1aTVDRvARVJktggcxDTJMdwAHLGFYGAM74iMfSmgQ8GhhvVuZXjUe6j3tGrybWYCkg4jZAJuBVjU6ZDU2mf",
  "key13": "5EVrZp2BZTKTZmVZuiaY4PLvCpB85ScWqfnC37gAZMes2KjiEHnwxhpHHRz8dsnDfNTcCR4De95dbU6D8LBRoDPw",
  "key14": "5yyipHtW5s72gkrbsWpn5gQ3ySuxuuaxBmHYyizb1gB5gqmdw9CJsVuWY6a57dV5RE8Kw5uRZUkS8VkZCyA1KT2T",
  "key15": "GYKkPa1hDkRTbgCawZD312emVazdVd5fpHS2bs75rydyYgjxqpGqHK5LUpArbypiN77XLdBJ3BLBMP1Tom3kzn9",
  "key16": "Nmgcy28YdrfPyZtzUtQk2c3N4q7QBTfCh3QMzQHjZ5JGB9C59zWKGbKXdNxjv3YXzRLY3PYzhAf8VDh6wLyGjNy",
  "key17": "4mHPAjWinQt3muRuPjhtqTc928rYfSjt9kDis93Nvef4Y5eYsWShe8vsYjdFedz5iSiiJ1kddw4nkp3R9ntTsCvn",
  "key18": "gvs1UdfyXF8BFzwXHSrY7UzDN8VjNfBANVM9BSFemYbuEdRKYSr3399G2YGRkLZKZqngLi4qYAKcwwt8maFGm3F",
  "key19": "4dHJfMCRm6PvSHju33vDNDWUQJXtAK4VyG1rxYu4rXigp7bp8vn4udrxWUeCizuxsCmQMcACzWZvCeqA3wKiKGTF",
  "key20": "3UkPXaDpBidduq7vUnogFMnwCcrB3wV7V1YtDGjfdz7r9VA62Z3aBTqey1Fe6TPof1v42CEYeceC6N1GQKrrKULQ",
  "key21": "S68V3eWeXrsFFmLzjKqFE5mSwwEpvRrxC88ahGNE7prDymYZm6Bk6tCNDtwhQW1DE1pmqRnxcS1dBwaaM5m8Zan",
  "key22": "3Wpck7ERbVGkARJ5rjHzZTR5NmVrVLPnHkghRUCbFXyHRcsBfbLUFc5TaWR3U7r2n7pXGtGi88xQVfYqGdfN5VCH",
  "key23": "geczznKLJZgk2LDcX4Vn5t34NdJZ6xLDaLg8ZKxHB8C8dNYxMNFzmHRZuDoC3PrDbK2KV9Qdi3mpn4AHxjdNYw4",
  "key24": "eg3GiCcrffYt37n8JDbgbiLHxnq2SFtehYJoMhuQnuSLPmb4JrzPE13aDzNQ73KMJhUTT1xFJKAz9wspj6iWQHh",
  "key25": "4Nqk4Unvth8Noh1L2ng1V1db791mtumpLSTNTg5btutbny1ePJxCFhtt83WvyQmSCna4vZ4kdWvRsy2Trc5A2tcz",
  "key26": "4cufnp5Q1ePAtZsfiNBnxKehsoX4AKkj4ArECDFSTWfp5CcLrG78UDabrkU2McsvrKGcL3PZs74vNusSdU7Ap73F",
  "key27": "4pm5DgV52brixZGTYTHnEsA1sU9wKDDDVVj6iZxr1PPfpR4zrF4CkA2iw3KoqSiLuiZmWXqbhPLE4YrZKtpk5d6v",
  "key28": "3WZJPXD4C1pb1ZVh4MZc3r5RmuWaCNBsE7ZXeCpTitNZz4nhPoth8GhkQtMnjdSBnP6AnpZMBNotAQ2CLd7cTPf1",
  "key29": "4o1ZHEWxZ1mHVH7BuHTyNDJ3gVuJtRLiDu1rRCwGzAhJgn3CcP1V4HT1sSL9M5N2dr2juSELhmVKEXVxCwTn9DUV",
  "key30": "a235eY5rfnU7KaNpnZYPYfeTZgjt5csr5xuVVb1uUrGCasQU7V8AdjEeRkdMymZMvJhuHHg4ZGKRzhaNmbgHrkm",
  "key31": "3tK5X5RDJLXaqtf421ibnyCYd3677thcsqQ8x8jbbfWqbcUNdaQW4BpZRpZ3USbpJwTVMuwGBeHuynRUbAEEf3WQ",
  "key32": "5jLHdXWRpgRGLqtVhuNuaCsyTFknHCe9AGzpP6Bkf5afG7XmzzshAAmxyaLHoh9TAqGjBg6CgQiLwrTcr7NRh78k",
  "key33": "nPJaYgVEdE3VXfiprrrAgy7zE3kE8eCLWDrpX2XE2ChstgziJiR7VgNf3VC56cr5vEm9FexB6CyTVSnfWMVrYnj"
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
