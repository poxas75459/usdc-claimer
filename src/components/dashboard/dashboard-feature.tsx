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
    "5NccbcdHaWT2ESVDRKtJLa7Pe7rGr8TPiTcmCMfgyaTtCJ8ePS2vDWE83DsvhnVPU4upevbbQhqJPNddRJHvk3bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afnraF85HkcTBDMePtq7VhJKkVWYiXoAHHZMvMP1ZgGteGFDT1He6jm4oJWdiFexgy5APgBuJa4E3VHFkrPBTYj",
  "key1": "5VJSjb3coupN7xsL9pTDSeX2fSiLZ37eyvVjvpWiNz4c8jjc4jizxiFYXHfyvXUnE8dDunKy2TZEtnA4guWx2eR5",
  "key2": "4HFFudPEwkmC3EUFzG18mXr7PXMSSCtwPdN91WnRbKwAPuJkxofM9cbojnTnNAt7RazMLcFyBahr6gS4ZKs3mgaW",
  "key3": "4s3q8xhwYz35R12vEsptXP6YENTjRQ1Ug1MGFvGDiWMKHcpbW63cQ8GuN4han7gb2FgTiG6b63zvPBS54bxNckkV",
  "key4": "4y3dDH8vk1aRce6mmg6K2nLv6RxUsybMsbJKfUvEhdaQiLodBXwWb6VqKxg3xxe8W869D3mj9LV6BeZoMtaswHrW",
  "key5": "1TQ6oNdbpQszsiWaeami4hdLYNou6FixD3j7ug2qtuZFK443hbD4kN1CVTwwD8msXEAR8eGN8DGxWXukxsW8dRM",
  "key6": "2HaqtrWrGxogUEzy1EZyALALoMFYWwuJCaZoHoc4FLuAtY1iG5kZiRDj8rUtdAmZFM1MfRQqRX8XhGyZhf7U3Fwy",
  "key7": "2TJTtWYtw2dq4CN4wYERaSJpfHNVEMf3m8gYXtXr3MF22PLmSnWcULQpXT69B5496kthEkAC7L4esKx8yvgjxRrM",
  "key8": "2Fi7xPG5EsxGSwJUNb3ca5mP5yzk2Zr2J4WiT9WKPR5mbeAFq2rbqPENbgYZzd79N2Zjs3F15HF6SXmqBVAXjYr9",
  "key9": "apDuNDY7HvqXYq9UHwiY2QmNfNyCtQjMivHGJsPDHxgddgtfAys4W4DKAyaDMZhoE5q4uoAPXwcZrKGLEMgi6CQ",
  "key10": "5JfpSzFnBfAGFrh8ini6bYQ2hjw8pzUh8fAnpVrmxcSHLNRoyZjGcNCtWK3zNJ7kNvrRU5j6xH5zrDgF9ByW7Qre",
  "key11": "3kCCcRvoTXBAK8wUnztRF33UdH2kpSAuprV3nf14Y1ZcmCpTXdhJGaBBf6G2xZ7AAKRdv22V1d92ohnrSGgZ6vrX",
  "key12": "1UkxZiZWv7y8tRsgq9hCNCzY2XcXUdVzRPxHCdV4FYiZPtD3Tj8LrNDwVGMAoHQRWHqHvNQ8JfuK9Bm9rXQAx8V",
  "key13": "fuVZXFm1hdBmxahz2WdxsUVobAwjqBtyWCKALj3d4GwiSTG6jGsxXWKiNWtXdwg2cg2wLEu4JyGCadJYpLqresy",
  "key14": "Lf5T6idNs6Z44WWySGCYdhpoYgCCfFWmWRTfy8DmTf7n5bAJSHpdyL3LrJSj7Tr7c68BHYtW7KH9qZzHCKJ4xwd",
  "key15": "4tH2ztgeARVHuk3C5p8Xvr2ji4nmQL3K18M2j8G2dXBqMgRKZfxKdnRvd7oKnGes2mwiZR4R1MwxALn9udpdyc5R",
  "key16": "2M97pSUqKY9DMdsR6L7dtCpXp1CqkCtGHStRVMmS7Ft1wKDcGo7BBvLFPiHbhXGgQqZ5hRfDg11RNKyWDZf1bkPw",
  "key17": "4WJXK78FzBKHpbUh19eywzD98dg19417AbMQXNZWV2nVEqWZW4ruVLjoxAsT1Wya2YG8SngQiXLFgwVAGzfA5dz4",
  "key18": "4qqmazw8rfvx5BMAwXr3rod4vFCVRojSKReZXMoWj9Zu3YYZxJPBMC8g9UcpVvUxJNmxiSqnsMbyYAj18hfd3utL",
  "key19": "jEpJyF17BtWDL5A12UauLzzSeakdSUM6qkuQsETecVwAGHH7aeFxL3y2yzDTJDyjoz2DRgHVuZWCgGThChaQHpe",
  "key20": "4SpH1KuGCYHt4m9yEPKHDMdHQKEHXYRwqL9HZsWM8ytNJ3oGGBERnExEPsVxs4UxvfVdcVHZAcH8tuybsbrZgEok",
  "key21": "5fz9Yz7AXVpk2s867uFV5Xwir7ZUsFjuggsYRvoSRU5U6GCvfTRjirHe27TpYKauZtumGK8Bof11ZZ4MSHEtxuqs",
  "key22": "3R2RYzTn4MJBRGjLBYs1LrDhe6EbvkJCecyEBdb1LYMCa4su1PCScBy4QwX6t2hjLvF9iPoBeCXCSBrWwbvw9UQe",
  "key23": "32vg6B9SkuViVmhrvCPm8yb1p1Y7Bp9VEiHmyWuGUsj8U5BJ61JLoyzGVAtp5owTvDKsDyc1JW8qPqae8u3yiB1q",
  "key24": "3GGRUZ7hdwreLCp9udj2Q4JgWhU2ZtRj1RWTR94MRMG3Qn5xtrMoygzqtjVeELvtmrZYiLaNZ5TuZfLnGvanh3ie",
  "key25": "3HVM3iytPBkiYiduWzJ2q9RcrTfWZniVaiA2VuvwXdYJcpZ26Lo6nqwS26aobcz9aAamJKz54ybDRqZysFkT44TK",
  "key26": "2SmL9dVaCL27DyuHGcmGxGGfkW2fyqcK6SHCLoJkVbiJL57fcrxPSnSrqGZHXLJgtnEXtqsrcGAz7fHGbkHTU9ky",
  "key27": "e8dKtDwYGFpKG3DqPKj753sCArPgrLQ8ewwuS4SRHM54nHMiAyQZVM5Ab4PRUjqQLHeiDXMrZYM6Qw6pxURbR6o",
  "key28": "563pad9HhAzGUqAExh4MN9Xcv3zsQxCCEXZZVMqDNmu559bK3KUUwbjSsLj1J84mucVHzGUPZb2VXkD9UbxeHhcK",
  "key29": "4rnqCrkpuynFNacUAxr35GefubsTWJc8i6zDe94SJHppf93PkG8L4khwb6yXAwBj6dComUGo6LLTDZWNYWe1zaMz",
  "key30": "2LiJEuohYWY2sb3EEZHUM2hrna6KEB1U7BKd6Lo1s3Grh2TugVQ2sLTVtTC67ZWCpxu5J5C4r1m3MAPfjzzGtmzR"
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
