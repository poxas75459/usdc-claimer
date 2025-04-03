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
    "vwXGDwHavdKv9yo2CUxkuyqbGbmEkQ6cx7pkEWXQHnvYDhwgwYBNeh6e4Km9HJpPNyaYZwXmd6yX9ZEnxMQ2ofb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59BsHqnpYgcB19y9r3z1bY8f1ezDifZ5zVrWysUm4fNqRKcZ8QgiU64ebrBxFsW4ucZLJ8Ng4tXi9ernx8kVw93",
  "key1": "5ySiCuw5rCYcu2dGKwcJ93Pt6pDAC9XM4Wmfrsc2vNQUGTC4s1jY7E5pvvHAgFBckAXGm68uKX9fhto5zGE6bkMG",
  "key2": "4SMNwPFUVphwB9of8Hpg7gGQqw8E8Yn3zbo6KzSKeBqMxjmqWRWvRmMGrfFogUYChrckS378zUww2eN7z3PvAzL",
  "key3": "jYNmMpwBp5B7qYUMXwAGMKAUDFXdwkdD1f8GFRuusnEe6JAPKFzFnDdx69hwHb8FSzM9FTZPhUc1mw73VvbPBUS",
  "key4": "3H26Y4xCrjcrQNrB9GXkW6tSbPfFyPX8v3HFR1eBUkcfnDNEGFux8ikYpmFAp7kxf1RcSTLKJ6P7avNeEgDMoLX2",
  "key5": "5hyquZzqG4q7mhSokENQxJ6ibrj81FXmg6buLwLBci7AaumZADSYE8HxHfc52wDPV6XRYnW8MsyMkAse8oDUDj53",
  "key6": "4dhEqaSHdomGodm5TBzagY4VuNFkz7su4Y4RZxYJWHtfbguugH19ns9yTnEK5RJoHNEAAUdHkiefk3SauynE9kPb",
  "key7": "d7j9xCkdf9DanYa345YbVYpWABuTnYC9DjreAPQcaocNd8gPe8emC5kksJGZ6NTFXwXBKtaNY6RvFMY4qj6sn1J",
  "key8": "5wGtvS8M9Lw2qAqJsVByy5Zu4GhhuYJphqGAXX2ewv3X14Z2ZksJ5KxMrr6BaneBSTDY3ycA4LeujQ2EcroubsiA",
  "key9": "5H1VUpYsn61rAwWqo2Dp4H5xxGQi6VtKYpxTmZeDNbxS1Qhi95wLRuH4A7CQCdrpNwam3TnQdhMjSSYhnur26H8n",
  "key10": "pH3Uz4fU6fHF2R6T8WMdxUtqQQKseeQYjGcxdUScGLuLrhywu7V6QLjzWdjKhK4nKdRcr26o7hkR73hCMToDBHo",
  "key11": "3zFTTUuWupPKVMi2w3iy5ourkJRfXWPfssC5SEhWqL2XcjDDb2jJvVga33MEGnSdYgi8BzBDexG4aw5DQdQNFNnX",
  "key12": "5gEdWyAwUCm1kyUvmGXXgr6vtrj214biPnfDnon3b4ydxwLh2vaJaSyQbH9ok1FPGxRzSXgjXzooik3PEKGzMaSS",
  "key13": "5FK5s7MTQ7uKv8sj4AURLVCeqr5Ary54k9q7YhXUmGitdrCXf3LgmNBTjNozZBjY3YQkE9VPPVamzw6mpZHB6FRA",
  "key14": "5WZjk8n8ANR39dktjZor6RKQWWqDUauJr5VeVeGGpdfuLqNN2UyL9ZZ5KbTPmjwDhmjJ55oB4gyMfhkiju1m4Eid",
  "key15": "59GX62CMS3tRkbcaq5VcZqGsDcGU5VhGgs4y3CewXT8gLQgA3Na8kpKX755Bs6A2gcCxQEp5St2P4tvH8ewJGCp2",
  "key16": "4vUdamUGjuFgA2pB5YYZfraZWjxWzgnra9Qxry8SWS2FzeAUDgy3fXd5TmrmAPWxZ89k4tMtudB9HQmJ92UtMeFb",
  "key17": "d1sda3pYoALf4RQSEhsHdqhq21KhhZUn13TyhsETmH7mXrzvKgbJM4QozhUph52CZEEy3NQ9SKugDHGHXjT6BCC",
  "key18": "3engUoGbivZbKhnGnZX52CEr7qu1n3rhKJ1iNhn8D1GgErKcmwrmGZALRbMX8UydJ6eJQafrxMaFxgSGjjgQAUuU",
  "key19": "4oGfdbs9jDk5Ri4a5QgfRewUGro7Koz62xwNMnY2Drjb7KtEr9P7yojWYPBvtTLHEoTEAvx3kaRPHT5UNkGcHdJP",
  "key20": "2gBBbdhM1LjJypVvzz8tVHG6xcojqFqv74fEwHT1YZdjY9YB3TCaGdVrmNfieCPuWTMi9DpNzVQhxmg7BE9GvMif",
  "key21": "4uNp2YbhhjarDHCKwRo6RWvoZ3MqUa3fdn2Ns9vAwyPAoYuC8KPKGn6LpSLZQPKh1WikKgqc1mnsEqh9fqgLhUvS",
  "key22": "4eaoVHVWMkM4zTu6E4mMrEkskBdyddd1AEwqkfPSKWSEgZCUdfdLFTJBTjfqH96UR9fmXBE7PtgLjq7yg3oEeaKt",
  "key23": "2LL5SSv83RHkaPwKGndZJ5cP2JBoxCRR5HuRPi4XriYMnosqWhnspXxtcB5ubZn6TfaFQfTGQLX3hJjk6x5r5D7N",
  "key24": "2ZEVMbARA2bAWEvbHDhDHwm7dxAbowL9tLu7BacUYi4b4tEX2fH8nbFU6QHcyfa1yx7LEdSNCU9QeskMU7TRtjRF",
  "key25": "46YaaeTShW1nhzSr2CR3zQzeeek6mEUWFfSTKaxDZNn9vVBo18Q2Zv272Z2J41M15ARimTCH49PwricwHPyfi7bS",
  "key26": "2W5bcj4Nn7oqkYCXDhvSApce6HBeBiyMmu6uUQbu4RvAkhY3v9kGAWJBeRueHmRyQwWBaXZxu5qJAy8Jjv9UYgN9",
  "key27": "2bhHfnYwJxhr1QWtYAmc4vZ8WWPnmN9uWUYhKRBcDKyYCs5dYsJHmJ7rMF7AaLWEoRJzDrhEswZL2CxnYcDJBxp6",
  "key28": "5oZ3RiPrwkn8ZetWDsEkAzXRukeeJ7Un5FUpxxmaoKyRakp7EHJp93KkjQB74BbZzvw4Su75a6WQqGieUGVHLRfZ",
  "key29": "PptDDR4DkwfYR1ondDvZ7r6GtqnkHpqusj6st1Y67ma97nkELRESjNNXGh9Lds8ALkxcH2jgi876JyiYQRwtJLT",
  "key30": "5QaEGMsYnquWYPmtejFFZkus2iWHqNoTXqHH6wFEeuMqqiSENut3KYrdbyQxnCjc89KHyreLP8VCXQSMxvupDT4g",
  "key31": "52t6tDfQ8ca9S61YUQmKX9knTmPYNtKFZ7NnFfDhWEr358FrkGxDzHYmBBLdydZ9UMVwuoVMvYkKpvMFKnJZg1Tt",
  "key32": "64CL4NpvCmWEz7Rd4ZKkhLLCPrvUvtPDqkyPWGGYqgacy2xWYMEYMFAwHNgiBRccTgK79EKkJDGdpVTEdk88dDUA",
  "key33": "4eAbfRfRiCPtysQ31bxkiVWS6njDQy2TFR9VQeMinhnDNedn72UpGu8J7pFQas1TdSoaNYTb5H6y3o56WxdLAbDA",
  "key34": "621MTcwTvAGNzJGdem2b3HQVc4fKKtK2dD4mSrn5XCHfN4gBrcoHbpvYijG59yNRhyhdp23HDVFwaJPyNAw6oov2",
  "key35": "59H3zKsXbePtu8gwPEM3qbcFwyntXxqpWaHqjGK9UyqQjr7MMT4t4ZXhpnrj5iCRd6NYPf95ZkejHKnY4SN7JkUA",
  "key36": "4r35F3CEtQCG3xsVrSLwRtTJ8hx6p5BubWMPqouXC1QgUW6fbRcvjAWZbMuWEBnZXTPGFQCE2zjiWxcdQGdT6FhA",
  "key37": "dXoskUsRuswpU6yGbsYdJ7sxagrf1QUL72Fezx4YwmvqRUhRZDKST6P9SRAZmr8ftnqfErR3vAQfsa9Ftmapr4w",
  "key38": "2MyiSZVnvEQJV38RjpEZJX2hSTjDwH1wuhCoBPBaosCpXgLafa6pZTVGgoXCwEPsuc96ydgcuKMhH6wTmbJYBsZ8",
  "key39": "5kMtr6V6rg1acG43ttGUHsjWjVjn5NXS4dWTpEJxwXhpuTYjAUz2pqcz3V7raaXAonNJQdAeQS64p7FDDS1YCN8p",
  "key40": "4xQwj3Ao3EKMMxkvbdtSSHdN3vX1iuxHseax13j1PQpUuTyuXJVPNPSuZM2Ye1FsRKoP4EdVMRsGSGS7QUx2FkKE",
  "key41": "56oK5vtDU6M15ZSsXQnKXmfmf5yE6fMLB1Y5ctSgFYxN9MchAuF1LPaFS2sJEVG79FpV7DGpWemGV7m2MbVJkiEG",
  "key42": "2sS92bgtDR1RMYSugZ6vE8TT7v5vvzcka35nwMtKnhcRCsRDhabUYQAMKbXTNjDcMHkt7MdfmJzEuWGxQJU81tcM",
  "key43": "2L4d1nfQiPeb2APfFevkE7YyTS165DANzdao183FnDVxPf2XZcUWE7iDkv4YRXwp23iecaHx7TGsPyDqwKheY1ud",
  "key44": "2JrX3rAYWQjqQfTLmWJ8dKifaTFDMHJhiGwfpFwGzYrYPV4QGvEaBRoPQqGGJ13GEVAQZbp3uHWa6EzuVSynzqaD",
  "key45": "Vt3N3objgQ8UBf3aMP8SjjZCHLJk7PVXrdqurmQhTXmYUSj4JpoZ78fyPoyfAoRVQQpJq6qjiJjdpdN1tHZD4sq",
  "key46": "3Vb6mJ6Ros3MPJRjDoUvSGJuBgre5sjzCaqVYrSMe32siMcBbiWE2FnmfbWHacdLnFzYeWWnYXkmBouoKntVTZJJ",
  "key47": "368kxM6M2UZJp4DNNQqq598tqEa9ddBdbjLmc5cnQfj7eVb6oHkMs8KFsRho83z7Ux7QRs6TFxoGKYfBaw8B5gow",
  "key48": "3mWNqnfTA8fR2efsNdFUyo9vHJFvzoCgvYkirDrSTLb8hRnJFD8LRnp8vxTYkSS8QucqkcwXmghtAo2WdzcN4At",
  "key49": "2wwKaKm9acZDn8hzL3GyuoYpLEfbyMCLKQd1UUXXPA57eZoQesecQm5K2QUdGY7HHdQHVUPNu7TdHkG7SwgZcD3"
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
