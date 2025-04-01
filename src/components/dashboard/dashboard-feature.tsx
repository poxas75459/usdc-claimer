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
    "5mPLzuZC6aDQLhycHW2JyWChoJQQn2a8P5m2Jtm9oKuaBBqqHHHX4UwC4vVqshTwyJPwHJC96w8LAeCw5BzGJNDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bYKZjsZezzPtPbfJgnHz6pB9cv7FJxDsEHUfHCZcke4MeYULHuftpRGDs7jZRSHsQhkmusggmfV2kd1ekkS7AZe",
  "key1": "4JT2XfsJenTYj45E6Et27aciubSmQe6BkNzMj21ogywXQAe6xwo2Bt1rVaSs1jVWvkbH7wHniHtcmdB2WaLP3FKX",
  "key2": "33vcvpeYoarSsBxDbTmo7iEwveQgC9MYK9KVVYuitPXgnPZGiyb7tJi25KjFhapA67suPe95HxQ6aSc42J2mzHHU",
  "key3": "5iWTm828rdh4NW58XxaHi1dTEdpFX29q4UJe1tVnx2Asf7jY5Hfg6oA4b3FhoqAXdsMtH8C1XoKXZH3T7vnpcX6A",
  "key4": "5Nk1Ee5gK4NrxLbkUW7gTzBNeawXKZHyTj9GCgy29r1PTbEGMG91g1bAUVfnkCCjq3y1PzMrGVvPH6dqJbmHQwZf",
  "key5": "2KHLuwCA2rn9vCBvpdn4cxkpW5km1SsBfS5QccxUjsfZchEKCtiskvfYrgM7SDiyxCdqvMFytAn2NkmsuGwbpx1L",
  "key6": "3pnTchGPemvGMSSxLVu7X5Q7uaczH8j1znH1UkaWWe8X6REVmpTcWd2JVqkR4Re8REhzVJwQLBiVtEeMnaeSZXdq",
  "key7": "31QxYzJkGpiA1w7c7ZkMpGeUjM1jZCSypBDxVsQUGcpTKxR6iwQNq5u1iMWnPyHggqksuUANN898qyeLFavs44Aj",
  "key8": "2qufNectDGnbk9CmeEX1nagzCv7JsAwQNsrxgkPWTQ8hkpHQVz7ahV7smv5ZCVDv52ixinzZVMQF6Nv8SH5UbeFn",
  "key9": "5KeSnS9fTfzgdurtEqZ5yD8AUeTrJt3wojJq7xaWHsp7LkXGyL2Dvg1Lz2m9p9F3cXwsr2WPTtEvGLWq97PSghF3",
  "key10": "5GTqBj2Qmik8HdJu6bW2ZY2b5MpGFgtHUw5KxqzxsgxuVNLRHygUTRgvqBeC7dEuaDpiFxsqu76zvSPksdEfGeoP",
  "key11": "5P3SSBtvrtTMUR6KN3GKdZpZTxLoUVohVsQWhDUK9s9QFNWYmN9jQ4PXtWvWVNih3ZimBqekeMJCmp1gxNMqYiGc",
  "key12": "2nTeT7BF4uvydREjNawfnBhAPAqS1654GMP9FB42LeGNgyb958fjWsgcHTtdYxmty4gKykKcCdtZHRC4iVhanXBn",
  "key13": "2kf9SNfstnREGg7U3hQufEnaB267FgCGCFKXcp6zP1gRifXZNMqeLUFxfKJZ9BbHZzCU8JBPSh4tCBeauNA3qUdB",
  "key14": "518bfNpXJmJN3tEuTyiCq8zw2jn6sZdGSyi4Kvy4WVcGvHGKQJnzLq6bAd7Qh2QqD6brpzbSHVvixzscpRMDRdaD",
  "key15": "2CVHB2n9S3LfbggA7uaePja27EGGgoygyKL3RptofpKMTRhtvSrrQK3y6jbpg7kDwTbfb3KXsX753NWDim2MLnUs",
  "key16": "5roEfgysTKdLnNqxLUyCiB58pyUNnDuCJWdufpAFRak2D3KM2XtCgz4axGVwJhgPnHW6a4PoXzwMdeTWsX6bEBcy",
  "key17": "4C35aVwNB1thxymp19DVo2yF1eJ9sjJRiqB7aE8zrRctwpE3hR3X6gQEtgmSZZ8Dsz3DqZYyMqp7oW5pKdzZAb6M",
  "key18": "23LvXtuucyC5fppxSA2o8Se51yu9VkHDVifUzUXQGFgQwuWkd5durMdKaHZR1kL6SJDnTUzeY1CY2rHHAh262Bqg",
  "key19": "3312KjbY3pygGkJZjpQZyb5TwXTGqEKvaf5jZJiV7E2KS6YkH5AEYtvzZ4yFBDNTrJRg4aNvZRmApTsGDbi7oFpf",
  "key20": "2BKSqhan1a8m2Lq1ALmRCF5fXqfRK1ZMCijh7timXjui4Yxb3XtDPL6UftjyVPpWqeNbjmvEee5tpvSdcWHVnZ7e",
  "key21": "2wNHGxsiiEej63K2bhoPTe4FVuNNrhFzkGSNPcs1dPBpQJQUDwYunFGkDK4UAteQjNYRA1qJ1fdqcgVh2Bxo1yBR",
  "key22": "3wqFu1j8AHWQgCA4vtiGtVsaX2LWLK6faVfRWtcmKdCCqwYQeAEG4ZT8cRPjsuhznxTfFUqQZmvQf1uxFPCWQpYj",
  "key23": "4Z7tCxpSAEJ9f8s4YgrgkqtUfR9JUmwsfmx8kPgN8T3ikd5ayERS2rRb3tuRxp2a6diRnvfWuHLAmaf4q1So8gZ8",
  "key24": "2Jh63ocdDwpbXtFEce6nNeMJy4n42bY9qBsWrkCwMZScUpx6kBJ6dFV4TqLRCGzugeWBc6CZphc1f57bsV81utef",
  "key25": "4SbVQyvbvMCo3dx9ggWygJAxCphH1AqhMrEBerNXyoF9iSro6jps6StX46wJmMfh2D34RLhZGaNGnvtcHP6uMSrq",
  "key26": "XKStZCBQLNL5upukbcGzUUNLb1Ez2p8orLukQYzXwqQvnd9UKWQjjoAFBDtqqnMwH1dbwVtb6YDgbaErHuJgSBz",
  "key27": "2HodTW9G4swASy2WitYhewD6Z3GFWQJJCuwLeYcHRK4BqCBJawvCk7mWh2RiTjgRAzYkq4GkEpgkPRZSg3kirGgu",
  "key28": "2u2uTubpFPY8R385kFyEPi9hHpp2AZXsmP9ph8hCTUg9zUvur7FH7b2znmz3pozqHDSC3woAMCp12UBhFWdYYdwT",
  "key29": "2bVv1qo6H8h3KU4NjL7F3PD4ttijAo9aofMUdjAY6cAcpyjuSWCXiq3Y8pkAeGhAdHnZRZzJ2JQxcxMV9xymdsdt",
  "key30": "4sjRrZdFnfy8Su2MxQpqf26CCdDNuTTZBsJUBky5L4dBYS3CAKcE4zJETcmW8w6kdfJPdJdhxbNw8JDqu6H3NnAo",
  "key31": "3LEDoJwoNRnDz6R3rtz4g6z2m9kRUygpTnUeyq7vWbH1GM6XE9tZhynoLamjgQ7qq2GjqeHAh8ip73pdFoSf8Uj6",
  "key32": "45HULFDksyRfBs7Z4XcLG2WfgrDyP6r56kTmPj6kmax5C2Xz1hX4watDrtNCMYZYGx5yDS7A2hxHdAKxXFqaxnFZ",
  "key33": "2XEJqdxy8EdwdqW5XbsC6oZPcJ7BdXqFEecvrDEGf5VMirn8SyhhPsYn2nLqHtegvACcyk8nvbtY3hq1FrexkVzq",
  "key34": "4hwwY3jXPJzJA3NLgJAR7PNB8hSAbaUbXPty5yjJZxsWSJaQbfpQkB6QscgTBBoQZvjm6BTdh7mvC5aqKzi7mZ2D",
  "key35": "5F8pvVgg5W1o27jszu8d9LPn6EQJsErM1f6bqM339Vg5H8MZopxoJViV1nbWPhwDeJ57M6EL4cojEFPavzzfBkat",
  "key36": "2KwkvJ8ffCu3Qzp6hyRzWcxHqzS55QRgoWo6zN4C6zdA5kMBrqASudR9bawp7A7X3q9SYdMCAisPurB3jaygVrSR",
  "key37": "59ZgcUmRvuBdZjmbwv3Cjii7bRaHWtP788Y3gHEZjh4Y5md3AsNbXQsy8B7V21yeCN2bPPqFsV6tD5wRfGnhpXmR",
  "key38": "261meBT92tTNyuE8AVmr8stvSUFpMXxyjDb9LdoS22K13dCPdnf4XH3vM2yPZuCZnC3bB1FdaJfLsi6VC8oU1G4P"
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
