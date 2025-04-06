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
    "49rP1tcy4CnDeBH8UMUrtJdChpZjwiEJaP1wo78cuz4u6WywRLvRtSdfpumeJCnugc7KTfYPjpWCCGmuSGiJdF7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dV6gcqWzq7awboz5MCuB6oGNPBevwNfopCRerSe4Rh7VMiwufmghUFmBC31f6Kfu4bWBwek5oEfGfMrsMz1kNf",
  "key1": "2h88gn7z6H1bWYAnEnwTZ3wM3aNfVac4AyWj4YTCbpWf2BPWKjLptC92o56nSz5vHqppZKRgK4Ys1oJ8LjgWkwS1",
  "key2": "2XJgutekzGpCqvEATxD9xc8ZfKKjAgu9a6iC9Jrqt18EAA6wGhFgLSfsE1yLA1mAev1isay2X82i7cg3WQCfxrxi",
  "key3": "58a8v94HEEvqrQhRTsqtQvmKcFCLhyZ82LZjyU3KfpXULu2ETm7BXxh75QUBWCZos3vFfK3MZKcdpH17Enjx5Pvj",
  "key4": "4rdeSwG4PRPR4RqehCMPtDo7bQrRwssKyh6qYomJZNck26oncx9TayYJEe7G5J4Wsik5gFnwabRCbhYqc1nPkW27",
  "key5": "48yKrtsZuHX9srdnFaahxuLdkNWV4cyua4kAtPAFK5TteKFVfsumcJaH8M2Qi1fqkCGweBYEvaQKTghiMoHrmeXY",
  "key6": "3TY4kwvRUHRynbMUme9GUTnTFtUwvrULRqjD6h7qgPB348eQxs694G8nkp2pWCzWXbkbRVqH7MFUoV3n5Z4PgFyM",
  "key7": "5A7Nu8jTeCDcaPM5m3f7SbTxyUArdErav2DPuFDNrdkw4TMijNr15PDi8FtAGXwsHt8oEcnjp2WMQtEAApELr178",
  "key8": "41B6yqWvWGneFeKqwfxgM6xykbc8wPcqdhC4XoVJC1QbWVVbXeLA4Dx65qQuFaPqh8gHTCGnvjY9cS5vVUUyMMEi",
  "key9": "54j57Got9R4A3dEXi8N25XBqR18XLMiXVcK96qqPG2zU6hxymbs4nVvWfTecfF2zKx7JS82avkwCJFtzBPfxPWr9",
  "key10": "3vm3FdBr5TcQMqV81EZxFEQwbFh2ZNdiH5N4MZyL41MRXyvA8Li9TXP6Z9TT2f3Roi2TGevVMKS7XNjeZUPNuLDU",
  "key11": "6324zxM98ziEcbgonnVaeTKVcamSnS4FDYBUz3Lt3gF3XGxKac2GaSb7snMyKFs8C65BPYZhHY2YdDu2GBR7X1bN",
  "key12": "465HmMXgqwKSNnFEkduLgmcqWeBCTDQHgKBNdy5qJRaEQAFS8tDBU8WGFbMomR3sr1KNENcsoQBnUH3qBZf45vZb",
  "key13": "3qCTYfrjkvTDz6T3YeawkXaMsjVKPpm8TR931hN7DRctj9Z5owD15UZn2k6X5M4uYq5AapZbzNSv1zzRexSVvQsd",
  "key14": "4W4nMgUyKywh4pMLwrNr66p9zLrc1BdRqPJKjRHRgBo74hg6n2KTwfp6jbbvSjNEAh8zq2yrZ6XzL8y1uLtwZd9W",
  "key15": "jrcsVvLBAg8LCEm66t3hBMDMm7xHT4Wz7gdRjDoPdjUZgVwwdTm2hfswhfNAshjsAYkCYZrWdjhF3kFpFqjV6MU",
  "key16": "315K8o2jzh6EdDU7c4eXKLo1zNWnvujvLtTHu5HQXSLjVNs1jNHHdArytfJYJYaXYDn5eEWPdxJQKispnE7KwXrH",
  "key17": "3H5LBF8yWsYzQZErHH7AFckMw3dQZkj3DjQpf3FbNWoBZpMVBMKMKGrp83RyBYAAVcRPF56LwhzQ8yfVRbDLNjL5",
  "key18": "448e2r6UoWpZDEBPDNRqawoTs4gBCs19EJBPsTCK6WXUuMaMRfMx4byk7UKCyLW4gmHUqdmPw6La8mVfxhGCkpGH",
  "key19": "5UL9joVqVUppGX8BmMZbiksFVXwzDxwZ1eDQWhsTvGod9sKwYf89DuoUL6F3YVbn2Hek3wKgokooJzDSnNmE8A5X",
  "key20": "5gqLhY7Y7MqiGXGw3JYK49A2TQ9Vjoqp2AhqjFLnJeMwAqZLv4LgaDQGQjGVts63QcQAsBvd34MYaduCgMFCnP9N",
  "key21": "5YzRmpL9XYaH13KR6cXuFSZzm25fo9jXYU4D5d6436CBtgwrpDWQxEes5CipLfMVttaYKtuVfPpLVaYcnAGHuuAS",
  "key22": "2Ww2h8PTECUUYTD9F1iENBDBWSxdXrrZd9j2M9KQ2v2RvWBHpHk1YTkX9uoHvFyGbQQVQnuaS21e32JYeF2Z8wSJ",
  "key23": "2LBah54wCFj1QmomHhwydkQPMUDQATpN1MdWYP9GKMQ6hFfFrhwrQPF4Lr9YoT6xj1H6kT8qaVKe5UpQc2miiiZX",
  "key24": "4dia464aLpvJu3L5YrnvWURpWq6KqkYAaDqqqrA5dCyHPSbmpYv5nuMRNx6DXFuAcz3mK7xF94Xa3PvdS1UobLQu",
  "key25": "3HhVfknGzP72dkEsAdsjhGeZjzKnxWYA6scXanasZxgLPhGZh6JVD9kseFtnpYoV8Nuw4bFAh4MfpvVKdL16uV7h",
  "key26": "4QSdf1LZaZHEVhC5K3TQsmFKX3p59and5h2FnjgCxA5csYqjuAP25sTJH5ygbbMWebQtsQhgM3JPoGWjKbcppP1v",
  "key27": "PUv83Zsuk6gTofk3D7dBbUTdJBK8CgTHjLwUAZUYWgzJeyxG2i9oK6PeF83W78F9duVoty8yTZvU4e5mygNHjeD",
  "key28": "5AHx1oxEJkM4bKLTzg9Z7Wgb2oAkiEqXbsiTgh9a2dH9NQXHN4ijJpor5TugQHTZSsi9Ssnb45DZ4Wb6Cvk6Wag4",
  "key29": "2UvFaF3bgkmLF84BJmWUDuHYeq8Be1vpb74WTyKLqZW76DoBj8K3VMsr7EQYB4e6aZ2aX4RLrcZnPVQ43hHZLKJP",
  "key30": "2S8PmKDsaLCyDjYn8US7f5rjRWQAoiJktxq19HNgfTP34niYowGtYBSqhHGEcsXTnoKmhG849ajM8J2SGUzDbCK3",
  "key31": "3N2omf1LoNitfySrzucZuy1GbnzqVgaMyARVbjkBCNViHnLZmhoUqN13Z2G8qmVxgFvM6Vq1vnV3mmkQXYX7hsqi",
  "key32": "3XS4gB4vJF7VU9Y9JZu1kf61K4zgBj296Z92NCebGQUQcFnVhDvMBG3UTmpfihENDZ2x7Da4xvfqTYjgWtxNaTT6",
  "key33": "5dG3wau8LVdV7nZWdZJB7yLgqRMPMkQAnFxxJcGiWeSAHFNFV1wZC1LB5zxEoXTRfMHfReDc8xKuro1vtbNcRbne",
  "key34": "3MhTTiVyPsuJ89RMiAWRgiTSAfw4bcgSdD9Kw5sd3T28KKCrXA2A8W9EE6yLMPqnWczicegefo1v8RtwKKR7h3WB",
  "key35": "19QByic6G3cfjKabv81cHSpLZXatiQQQX54mHqCyQi9rwwWtLtaJ3R4QnxDr5iujfBzayw7KbDg8b9mx4UR2xjS",
  "key36": "2GWkBnaM3RMn6KLEHjYd8Dso14kWaKEosHC6E6n25RGBzsD3NmieGKF3vD6RBRu4oLfTwk9ka846aJEDgfERYYWJ",
  "key37": "3MWeL9nw5JF424qLSezvCmvBuNNvxeuyGjdcSg2MQ5u8JCcitPDam63c75C46K1MA5tec5Jw3VNJLhbdw7YfPbrU",
  "key38": "31Txff3DVQMZHAhGjvyLuDU4hNPQQ2TkY2t4LVsXLjYGRm1XMgJWyTua3QNvDz4YwG5bYeasCdGN9cqXYW5itBcR",
  "key39": "3AM1ygKHAtMb6rVf78EvQ8xwzmMLMepmzUioXYuJhFBrJYRgZKWVFy6upXMi1rfcJFvgM2bqU3c11nPAmDJfEUKV",
  "key40": "kgZwdhPJhDfSmmVVExDZdKSPAEVL87U1AZVbdvtS9JTVW3LRVwrsaCnc8khuES5buqyoF47iaymqu5CbcKNZvDF"
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
