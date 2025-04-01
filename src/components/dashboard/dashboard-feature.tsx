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
    "3STFnUqbRCMCryXLNUHG41adtHRx5DimXAmjLXyK4fTYpvUJDTFEYmY8sayjbwsKbaDt1xwk1EzHh2Ny2rvkocVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rRW2EoTiVM8nPbPG3kh4ejQ596C9k7GMzAX7WQAn3WWGCnBYbqJYpaTauqshaetEaxKZ6qKmFyKTeUjnsoXhm61",
  "key1": "59jDs1s247kLSj7vmi5tnPS6qeLQsZro5YLQQ7pAJUrJE1EeTcJwEPLcS154gi4sNnuARptz7aZxmRcmqcMPmEMf",
  "key2": "55tZf2NYSJspqjvmKCobMLbtaFmXfuo8W28y2onFZtF8iocJgUaTdHGRZBgVqhyq8zjakARzsA5eiARoWyggUR1Z",
  "key3": "35TzRKpsfnGn3jPnj1YSUQHHZ69EXBUDmXzmncatpo8H7xiNDzyN5MNmQCFCcwZEi2h8yMxEgRMjo3B2DJ6dXQxJ",
  "key4": "4EHfdV2j4TXTsDquaKcjPxMgLKzcgmPP5EEH4XiJxLDH5xKoEbSNKRi69MRVCWcK2cZ3odiNj2uMGLz76Aj3gMLB",
  "key5": "3fQPpN66dbXtjZKZXhB7nrYyyfQ7DqDJXEY3TcGVD6gVTrfioWBBj4YQE9rqvNwjo9SwM3qkR3eMkychkk51QeqF",
  "key6": "2KgE5DQTtgzGvh8r8v6EkmH1rxb4SCq71o3ZT4po1GsL192vnWJT9m9EaC3DsvQfA9vqBjdPjsdbUeGHQA6USUSa",
  "key7": "4aF9FGrC7vjzHgGgxAGoXWME3kdRXbCbcPGN6xKrjcghN1VfHWrEGURJJcTjAQQjYLq9ZmJqJapZZN8fm24P6cKk",
  "key8": "3WbAq1ngLgdFmkaYU9m5BsAH83wn2o4aPhBLzZeENogWJfLQyEDSDojmWi4R5LjXjrjAKj6fi8KezT7bssE66pwG",
  "key9": "66jfnL9drUNxxyUX4DWXojikTxuLGbTnPXxyhoj3rTd4iqsRJ2uG4M6hcQ8G6up1rtPtWLk2CNDGHTv5hxbA9oE9",
  "key10": "2R2kRv2zXMeQw31nd1tRoaKQ4ajfo4WwAK5qBwMUTfwBZsrqu6VDEcrndfwTa6jw4Fa5j5D37wZYfBZwGraqTeYx",
  "key11": "5ATC71wYyy1U5Wu79bCAr92y7nSWN5xPjEJGcj8YczRjd9x9oFFzUsVykt45tm8hxEUcB5s8Zn6MFYRPqpJH7FF",
  "key12": "4rknCm1pxRaYC3RCrEJXbFy521HmnwXcKHmNewYQiNoLu7UUZivNw59E22DQ5JfEgKwVAhzLk2F9pP1oMKYDJXBB",
  "key13": "4i9hZiCYoDEzpSo6TxuWFsMHMWf7D6TW1mEpJSQD5xeCMPCpEaESWRG5TyEkPgLJvP1pkCLsJNKq1zw4hrU96nRs",
  "key14": "dsPXWW7us5Dc22fFjTTJJdiw5zLDYiLYRftKWWk1Y9K9TJREv7zY5Kxu3zECSsW14gJ5p1gJoekb2P1BCHe32uN",
  "key15": "3eDqX7V4JnnrbE94pS5pBeJLysdEK8TqYejFT7k7JR3TkmeSRynE3k3JvzsbBjeSoLj6ueqEyQBBVyGGmDwbL5yf",
  "key16": "4TCFACLCpsfZ5SZvyxJWVqwFbG6GDEJxx9i2fSmnk2mAtyu25ok2duQLqHbDnsNCid4KqpaUpaNTwXnNRj35dtUp",
  "key17": "2EBD8yfUdWYJfgm5pzEN14Ff3oNVGcw99Y5ppfR6Q4nSrgroix6nG2rWEQffzJzjMDFy5PjmDj47pX1cnGQ2Dhij",
  "key18": "5bT3Bxrgf755J4YfSMLovNHfRWDd51dq4w6QFUERC44wx5dwhFfxsqCA5H3HV4sJnpafbeuorqMDNEqrhxXRKMwa",
  "key19": "3SHUYWLN7EyhrENQ7REMnn2XUxpZ1P9QG5ZgYB9kjV6a8M9E2F1Db3UwDzJqkqUPy7Q2YxXUGjPEndSD9zkHA2Pv",
  "key20": "5kLrxWgcz9U3qywpcEgegkxxGv2nqWEHB64osedMM9TeG7q9Nxc1bUqVo5F4sJV4qUPPBK3rwjKrPNGnnqVShiAP",
  "key21": "hbV7u7RXMMPT2XokoK9GYEPYYDeSFmMEJi1MEtQKWGD1A6CLHwgxugUZUZe7uiXaKrdou4hPqU5HugeWk3wQgew",
  "key22": "5pwMyoda5yPfoyjTtyPH9BdKakiv5mYuVPFYR4SxhZruSVJbUCHMw8wzJ2juK1hzMbhM4nKb2RwbCy9rsd9VVZv9",
  "key23": "4CK7FudjfLt2UBwNFaWv7s9GEb3YDT1WSyU8PaLfAkTkMgVWSeATm4UgAb65HWqoC7xcTgXRjJgCxW9aqHLUm2rq",
  "key24": "yrtrRoX1XJtorryQKNHkPMnCRzyHwk6orrGkEJANk51oaYqq7zqCGtTM7ZbcaxKuzvC3Yzu5SwXbxau2PJdKyaw",
  "key25": "664SDYf3W9W74xaMaFSBqJE5kwqoUn6cMSyap3UXe4uwBBxa3YzudzawD64GMhj4CmvQo6qcLwdRd45sHbuQAeiY"
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
