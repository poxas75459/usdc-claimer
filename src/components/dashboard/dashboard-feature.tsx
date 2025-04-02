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
    "5SWXsH9UgkxuD4UeGEWuCaZzfn1PJndGKjrwWAgGy2oXm8JR8m2apNqX3K6gPSifuEUcdET4P8fo27GPjg5j4VKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31wwDBhNLe3k5BdXE256zoBUtfFqbzMDnjQrYL2GGGqpV7w7sx2aWaVZK4Sd57nHbsELkqoAG7D36Lmb6YkcNMa5",
  "key1": "55QoR3n8kXX744y3pb26cmbzB1JxB8xmhxwztBMrTyKnjL9mtKe6cRJBT7VEqxtuqmfb682YwxcMMYKDyTyXDrJy",
  "key2": "4rDJvGAsZcaorMaCkeNYkba92cUBsKp3ifYTvgvHr5Moatib2nG8M6Czd5rRMtjkXGTDYtMF7CZ6UnxvEbxzr57H",
  "key3": "5pMLo7oaoakBGYoBvfXUsNVwvTvWxCC8AFRAC5nwmCxVUXcuajJVvoF5NrGWorQt2GZdCu8nvCPJTD6J4vYEbrXD",
  "key4": "4RiiEodAkDFnwrqdx8YRF6eVT8N4RzeaeG6LZjmWVgsAXszXKKJwoArnKyjMBviPEvueq4ezMQ7jNRjrLdsgebtL",
  "key5": "2vpSpjFnvw8rHuAf485Ta7WJxKN1RHd1nv8kqC3N9sm1YXS6MQTwyxz2UDoGvgAyTg9kPhg9Fnri12VzR1A6NtwB",
  "key6": "3CpiR4U7MqvZj4A9Wauk55a5wEegPt54VNqk88A4gQ586PWpahs6dkvWtHvUHV65Hv6QA8KvskQTiodhxi8fgVXc",
  "key7": "vyS5AfbiHx5MtRnNZoT9rue1ci9kaQTh4igNnpcGp7DMJSjdxf9EJWS2TY9uDNgEFgT9kDhS2yoGi5FPz3oq9BB",
  "key8": "3G3cndP3qYZ5d8jzpXj2bzDhdk8RpZfV8wTvRDsiGUzu7GrSvdwPtJpwAWXeaS9fV6CdmfJoXUdcTf96ncr5irkZ",
  "key9": "5DV6beVopzATgRsaVsyzY2cnxgiXABLHnTMoWnvEr1jL6QRj8K2YqtkViWPHHYbYzuUAqjsj1kHA5gbojW4fQ6Vw",
  "key10": "42j5EhxzXZih1urHTkpoMgDa9U9gwuZDF37D7oUr4LjU6yRWCM1pmyjzTSPo4cV1ybjCLinHPHzNzUW7oWGUAfLj",
  "key11": "BeSingJFNSyGznWEkwJMRdKhBJqo5H2MP8LTThd5daRo3UnPjXU5bdbnn9grrTFYuoX7mL9r4LeRsBT7Vb6ofcZ",
  "key12": "3H6DPwMGuByVK2CV52dZs7CikXLLR8rvn7ecLwFa1wb2HLdKuR9ftkSgWxVUmQKwvE2XmhWfMWzgYJPTEASwkZf",
  "key13": "3zsKCtB5XfYDoipvGaeGVoHxuviPghpodD4v3uUHYgKeVPzmN5WzRXjCNN99z4gzfTWXpmgJVvnJ6k8ryHCcasRP",
  "key14": "2N9iBSD4SptUEUV54V5xNCMvp1t52UtwkTVWD7twohifZ51k3LcMQg7REJz6X7zj7twqz9XMikzN3myQ8YU7PrBY",
  "key15": "5QR3vABGD1cfNU3krYR5iUgZRwXfi9oq57EXhpvquAw5pMJDBjYqxMfHq9QcznTZUoZXs3cMUnkwQGcLSpdRkdnM",
  "key16": "2Br5xwjbDf2pbhmLgixdUQD5U4CmyHvWJdfyJW2TLFA8mQYGBpg5Bakf1S2JrwTnU6JhcULCZ619wLmv2tYngtKm",
  "key17": "21AficNubnzmAWANDKgP6XsfHqBrgAJJ4Q3KBZ2Mr7sFQTjYWPXRzuA2dRH4x8hPpUvRX3Bw1888Qz19AuPGBcPw",
  "key18": "25fuGJ3yX3onrkLcLary9vj1qAenz16PLcUDzcUwiTYqE7HvUMPqbNpxm9s3zRDi6QXivoUHAgEVxmUp5oRyTLfU",
  "key19": "2cQo6csmUPSHpTjcDCTf89mSMwyRkiK68PPZFyCQMjdoX2AXe8Cw9J4t5yvowB4j9wgtnvsN9Nibpoo2vAbCgb1X",
  "key20": "5s3L2wSSQY4nb6AnkRwr7mMCwRBwBggRMVGxvLjcBf8MiUwJshoVYB1vf2NRC6fCvM47JnPZbzrkUJe5oB4jtyYA",
  "key21": "3DPCFbsHR9TFyhrsBwnuYQg5digrzAGWezkPyWv5zstcUaqGNpDs2AEEHDqkVwGTwnM5BkerRGhRpFmwZ6RyhcDG",
  "key22": "2RkX3YiTSGC3QqqqdfpDWke2QAXLB8DvVQzTqaFyD7bxJBaZge45dKcy9TdkRBPwf4Zi41QUN5FjdqsiwtrKTYYH",
  "key23": "RxEsyBjBtzgyzoMaNkr7v113rqmCPhiUaruLkcqvH1KwLvLKbtkxWPumLDKne6iXLrs6QKavExd28xxVbWe6JtK",
  "key24": "26NNb5Et1R5z5GwEfp9W7USdq6VkMZsGNrBKfxJzS5WS5wkLAdS3hYvyPnoY8XUkFLqrAtTYqQpm31gEFsEKUTq4",
  "key25": "5WyyNnZKbCuechEGfvVfVnFAZyA7UE39rgtQP8iwvSnYL435SAFREXMpwEVnVk4T7jZpcqVkUmLsvUePpGSVTWcd",
  "key26": "3VnAneZ9G4g8v4pagqbaSir4NGz1HrGxvVGGGVvE4giSYwRUFWYmL5vKr6Ubxtzb81zWUtZ7aJ3PSnHaLyoxm4Vz",
  "key27": "4x5ZvJgn78DhSr8b3RXybVyuEH4RgPxisR13h1Kmta5hzBCaC5dkToyo3jzbpm6kmeVi1LGmNH3XtPPYWXLohfXD",
  "key28": "5bfgTBqLUUpFsP3RoBhqwuiiJNgbiAf6W9CkYRNdwPno5JubASf6UsYLQWt2nrf2RAaMi95ZJYayEA3UJ1UT6bBR",
  "key29": "5LrxF2Qxv4szh92uSinQ5C3WvgckZiWA45jzQuR4eA9kfTeF1MzuuDxdhrbxWwGJizm5jbE9pSfdhKicP6JrynJ8",
  "key30": "4zjPNr86qv5Ri9xh3zwbBJsncD2SEAcg6MkePBjXrX3WUXgXYikGzhd7YByWTK9ycDGvju2pKAzhrTCHForwtPAD",
  "key31": "41xwraxb1K2gmc18pYnAwLPzVhYvcjzXm2SFy3jxGUbSTeBgark6qUhcy59fQQe7ovukezqmteT5BZz4gCrJKeH3",
  "key32": "4HMS5y5Ry2dCS6UxHxBGgFFEm3PoymwuPfBa3zkQw8p2pidGwubkzdULJXDH2uLyEkebb2XT8RjJGk4KdCUk3HWK"
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
