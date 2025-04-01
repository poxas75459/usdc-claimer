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
    "oX39xTY2mgCUpQuLYyiKPwEP9u6ezmMZfHbWvFqgwC6t8vXvxU8SYqGHDBnxn4SXuJ9Q6DN37c3HxVzewa4NyQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymePFdkEvCms6b7a4FsnjCKqEXDK2V9MWsBfFvNmzQD7nvq7bRbYpoTA8AWfQLUr2D7nxQxKTeYA3LgMqLiiMxh",
  "key1": "4kE46BSZsAaUU5qpK9vF1mx1gYDYbxfrVHm7Hrpp84P2rpzgXB5pbtWcqTUqhXPYLggiJMTVd8ibCQ95AmuxDhc5",
  "key2": "4VJAmaVWCgJffpfu1yL7vGqNDgQc2zTnacHbfZkA2X7sRohWtzZBGV53GsGXCsimtuUZmnWDbLRbWxWFwMgYjCGb",
  "key3": "3jz34JnCEfTwYqoAt2VtabQFd6wdsp3DJoEBXbDkLq7ToeLecXmHiWA3gVKri9cny7jAgsufGpk2TQ4uNdPvCu8U",
  "key4": "AQGhW7qYSKzKz54GiuPA9791n74e6TEpg2KuDFzwCwr6VYcGxSKjHCJ7jpvUPiLo2YbQJiUkpMJQ7zEQc3CaFcq",
  "key5": "2BjZSQpu3aki9fCVUGYapGPgiWbn95x8HnddzHQePNVCCnNKoKwBrzVLxby7nWVpsTHo7h89XSy9ys7754dTez1",
  "key6": "zwp119QTVCh8knarTYAL9z9e2FufVTqqXHB96pm68RB6cYmJQcp7WmKCCdsb1oRA5n1rM6iMJa8Whjp4WR7KuFb",
  "key7": "4TDbQUQezmJbaCMi9qsS8Ga7VtqQ9K5PrE8LHuCsTSKw8qYDGSXT8jNL9PxHPoGKG6JmETZDynLWdxHc9sNtway8",
  "key8": "59uQxYWj22hAkxUo1ekpXCn6Eyf1ZkW1GKEeC6cbzDMzoFAhKrLozRmjTMqdkDuv6bEMFHBuKaWyKP5bTACGV8CP",
  "key9": "4iv8YqPnwxZvbNHLRDrwvV7MKoB9EUN9v31MdwGKGWQKNC98uCQFD8SFkAFtGjD4uYKvKgwrR8pUJSTPtTWqXBWy",
  "key10": "2DaX5G7eRb9FhQ5A6tiPND3LkS1hyvbtDWfzqMJAgXocPKpa6g3u1kSrPBHapgqK8Gy7oia5AS36BVexQDiUAuY9",
  "key11": "4XJf5y6AD2d4hyeAxzk11uRGLFuRhCQHsE6khXDHzHv6JThrk4NpvQgV3Xn4GGqzYfBzEEq9C7nW14YhrJPagkGx",
  "key12": "21AoFrq4rbhJ1yz8cfMLozZjkmnEgetxvRQrgHWVpbjxy1zsRxdqZsTkqBkfPqhYFQ2zptoAvtzcoju2pELMtHTA",
  "key13": "5rJRfvBE8s8pc2eqb3jbt5SDDzPQd8ouvzKpwXGJRUdUoxxTLY485ysR2rsjE5SPPPei2aL5kh3UzhTTcvbaY71X",
  "key14": "iseAhkbZk1aRUmWWfNEtkv3WmKgzFSXXffoPmM171UGRaDtvPkqatatz3XSYhJGqRyUhztkUardG6rTbuKadh4k",
  "key15": "Xyx1W886UoXbEru1pC5mHzzk8ctzgfu5gjEkz5bUGvL9LNXAMGckiFcweJRCoMmYx1usb7ANAafynSu7BGQd4T5",
  "key16": "4yXJtGjjqhyb37m4bFcYBvkv4CEnWXzULb9e282TB6tkuRW721SiUWccAAQaGC5SR2AzSvL6sAqJNyq3Evq8DV9o",
  "key17": "2fVdjUWSZz8GUHUunkX4aeEBtVmAPBv4VMfch47uPN7rFTyL7ksPbhoTio6UoAUa6kXZ6dygRvG65BT3jcddkGT",
  "key18": "3y1T9wQL8z1Tg3WEFmwCjoN2CCb7BufRrA8QnqabpJ5FuPVU9BHt2SnTpKx1XRH4rDqJrekw4t5oJ4TLSZ2tYdsx",
  "key19": "37FfiE2BvFMPxi1JKqMdESyisikJfgC1ys23GKAUXPPMPvj86aG3zWCjzc9ML3M3yH6n9GYctJmVkNE2CmDHg5hw",
  "key20": "3DMt38B232Gyo6ybDGY3gYDRyNZpgq5XbZuS1SoY8YTEFs6F4FqX1PGqmFct9ogaCdWj48CpwLN8tMQyWvdaRhSb",
  "key21": "jjqiS8cWv9upeoTvBGujwsU4qFuraqUHxwsoBiVUpTpJsVfcxmpqE64QeKYzjJjV2SQNa8TVxPf829cuLqv3MDt",
  "key22": "QHKwJN74N5i7yUfkkQHrr68tAiYGBYC934TW8RJ7ihR8dALGvhkGh2B2oHKCuD76x5zdTf5rjqzGFfvVrvMKW6f",
  "key23": "2oi5PbSUuKRmVSqgMutszhvNLsrFuL27EJMPKHMf8wbc6fRsnu3EXCvicinPffjsXkRDsDScMGdVsxV9DisJPX84",
  "key24": "2BjWTvk5oy1jDf9fLzUNWXTYDm9ZnFJwmXu12FbwFReFduUeUJG2KMUQiUz4EYoVfJXowe6nKWLgbVXLUV4DCcZP"
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
