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
    "28vvwLybpgiG7DeUDUCLRCM9TPv5wCw1nZZikEnBnvUyuMN4UvejWCDq3NSd5S2YPyBZYfmYSiXQ4NS4MUsN531v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Snu38DfKWeUk8MDGG34skm8Gn3VbCXSLNMbVVtBHqWEym3fDemsZ1NCwYs8hZg9P5yCVYU7nEimTz5WvQJV6sxs",
  "key1": "27k8agpzThpmM4PMhwLsZgF1toS1G2mEDmsgxqXUuFibcWpML5Bj9GPv3ww3P3Wc6AB68aWNnAy5pUezDgHx5KTL",
  "key2": "5Us3jam32FNi3qj9wYChc5UHbJyNDnVkiG7ipLwrRr5aDxLdexiJcwiHjEK9DNSX23NrfPvqNYRh9fA4amZCXTWV",
  "key3": "2Zddnj7TDyp2BjBdTppQe9d3xqQcyg9Y53D4pH1ncFH1eP7FjLnyM3zBKHq13K1PgymywBNsFYJrRFCPbxf5FHjo",
  "key4": "5zTJwf64iQUMdCf3F59GzxLGfeLfo5vhuSuJC3x5jjqt3RoRsxri9nn3nsTcy5FdBVy9BQuyfL12w1J9FDdesmGY",
  "key5": "5RpqGJDspDWN9JektZddnJWY5isLdWAaZf7RZkeNgRYfx449zjv9GhXmFqdUboAUB7ZbSXNsgawHfqHUjxAWwcoY",
  "key6": "4NKFkVrQWeQYoeYigw14FxuA9evPBUK4yFtgpzsziP9U7oxXDC1baVwN5b6ahyJp7EqqKQh8wMaVVqNi9cn5GC9e",
  "key7": "2t3NYYPbZWytu3DSJUCW7Dgkjse4tkN9eWEZRRFCr6j9GFtzjtZU8aDCfpzYF4aaFscbWyVrpSzrZLAW22e4SYhW",
  "key8": "4aa3SYcaeD486Fr9FSxzZC1K66uZhGgZCGThkPvuQZUWoExPhDMis81441BYBesU3CS3iQGwSxAvaZrPZdo4XK1E",
  "key9": "2VMXjtApNHBNguhJJHnCXVBfVxPMVueFvX2U9sgBjba1Zn34K6pami1p5ySBnDXG1RQeuMRD5RKbmjdLArNgcd6G",
  "key10": "HpnzXWHJfHLhAEfaKANs6wnfYBW6cPmSdzmoiaNofGdk1XRV8MW9o1bADA2ST7k5GzptTcenA7eKdLDPE6uZ68p",
  "key11": "4nruuN3iPAK5ZscUm3X7S3GiFq5pzoXGMFfTaPjDVgKEjyNGpFhdSho4EcPmHvMyAV1JJv1C2bZ49mcaezvnQQtF",
  "key12": "3beDvFZRVjnvSQNdiEoPJ3nhftDXwEhYhYKXkNRQ64tAsRBGwCqSt3htqpP5eKyEETP2gD4c6doLM1nRjm8TKm5P",
  "key13": "5BAxhqrNqxKwCFp6cwjLoffZwLNAn6FE3W7AbMN8Yc4TDXwUgj3LAigA5xhuUH5KMrUJ9SK1PnJ6SL5CPnaxbWfa",
  "key14": "2n8Fqvz64BdrWSRpMoPatoTAwrLGW9zxD1yoiCD5YJZqpJj8BG849GrSQxCBHWqfTpNEuBQhQCEtyno4qWzY8d75",
  "key15": "2ANEuSkSi1DsecobkG3UGZdR54azV5oV5sgNXhaf2cPNTc8f8ARs5Ur3hy22WvbbyUN47X4Dne6s1oEPXTbEHXY8",
  "key16": "2QN2pnwKEWYtY792hATbHniZ7dL8ZZ55zCz9pTK2BKn5YM5f5bvzeq7Puib4dn89BNDW417Q8W6ANZXW7mGXyVDG",
  "key17": "2vVSsKF9viawLQki13y8Kqwj5vpdK57bcuNZdFkMSgw9E9Bm1Bp2WZy6U2RaFUzFHWXN8gsit1qt7QminbvFfvSa",
  "key18": "12HxFjnhimFGyY8sTsigc5fYrF1p4u1k9C8rPF4q8cQg228LudQ45hEzymYUMxBeBBcbtm4Bx3Bw3PLfzfQFKys",
  "key19": "2pEFq3Au62sh86FTUWrgMBKGW7tFqxb7bJjkqw3gYHvkZEDdSEvsHyoCBYDwNzWTvSZKkSgJEMeCFHuActVw7jAN",
  "key20": "3RWiiNBF5P2L33ytZZw7XLMbo4BxSKMBRGonAb9A11gqJvSLDsQpoPcswsew4ApKTNz8TYUoQxeyyh8C29WKrxRr",
  "key21": "4fNHRPsjkDkBDKWaJezEKHP9a2w2wtinuUQRBgwBkxijEDQvJmVRnahRQkv6YjSTTLGFGGGTSVQRJmMAUaryGubR",
  "key22": "5zEvWNuWxPQ6f9aQSmjM5YrA5Lq2suWcemWBQYbhs8twDuV8AwdYjqQ8WjGxBTydnfMGZvBK18btTk5PWtDrmQGt",
  "key23": "8kjZcvtrxWESeez7EgM2AJX1nwSuWupWg1NhqE1Eseyw73QYuVExV6GpAUbEKYTeMcbRMFeZfEyz2CzQx1e3LtV",
  "key24": "5CisVJumymNzAubE5maFhdTKb1U9Y9gbhjBG2rEYzjCiPPpfSyDwt5EqwHqaBQ4AaGdsZvpWiq8AXV5RwNmdqY1e",
  "key25": "5L2TtR5JwH5vq8YKWZwGZcDoToE9mtqeYXYZHSERhsxrWdYYMrGD53TkfVzWuyNqLGzCe7cbNPHt7vzVZnGVKMXw",
  "key26": "3NzRPzisDgqJdau6n8uvjVT1Tki9KkxsqjAdtxBGXS7CwFiqcEdbkmhJ6KKHueSKvo9ogJr8yjH9kTw4vq4UASv1",
  "key27": "26KjayLcVeDR6eWuLc1WcUa5Nk51GjctY3hFPShjYLXk3otC98QiccJVdkB6TRXk8xwmrjCn4NkbhRF9jP2MAfaq",
  "key28": "3fMqwCwdNvLToErataKY2X36KwRJmJeDEnzdooqBtTdBfuAaU9FdmfnDGLoqroqzmwBPvCMWn5zEzTgEV3tHody8",
  "key29": "YPA96Fgsfz8MCBvLnqTenrFj5c93bvAcZGnhvDnZmTKfDiaYQV4KR1k55r21AgkY63sTdBE7oRUcyA6iUjXNYDb",
  "key30": "4yMgeqadbkhB5yCT9BNoJV8KdyWRPwp55miT4PSDJN2Du6St7bY3yajJ7ki6q41Z4NH2LWvS7bGRcnF9mwgwc6SM",
  "key31": "3oEpK4j1gyyV4KiYJwcFSNju4bHX9i2PQzRN4JtGvANgiC8DUcGgsBNXSmMhQirXBDyMPaGpkja3MX41LgqkXduZ",
  "key32": "2JCASSMAVcMttZHfC4q21LFLSEUqXqd9SVs4GVCFWy7pFWsY5E2MADhzXh9xRRk9veeHSkEnbxJgohDm9dp2eSFb",
  "key33": "2UPphMQWe4eRRV2cyaQXsv31enDmHwAnRw8ZcAeS53esxSEKkrZxiwc3s44paFbxULm289rgsSRw6vHypAirmMWM",
  "key34": "VxT882JkRJGJknD5otTqL2KymJYDK5Mjv3pggzQfkrqZJFwMBPpooTqvwkeYny46onyHdWwvYKRAaJPh5hoiKoe",
  "key35": "64ix53281Ko1ZJ9PXmXDYhTK5WQUcLuutAsaV7kgJXQbki9MjcFDjBzygFqkMbzhe6jcKz2tmJGCsQ2QvrXWMSre",
  "key36": "5sUzSn5dp8pZQrQez8DUQe86364rS8TmJb8TE97B9dkpS8nKXMs2sn7VJtQNYStKezufJrWfgL1GnBwxPDazjukj"
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
