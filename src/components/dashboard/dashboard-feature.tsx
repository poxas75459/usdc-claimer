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
    "nBqY5hJZFExx4sia5wrcLc7sDhqTq1AoAvNPfYjy4J3ADENkQNB9sELLbeXjbs4JyumzPaGqCk2kwES1f3yHHJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cotd5m17NtrdWbYi5iQjkbejqg1fktsJDC6DEVBX7tUGmeFXjE3ynb4pDQP7N3P7VXuZ7k9EN1Q7ibbXJ9gQDjb",
  "key1": "vsijn2RM89GYPLMebg6k7F4rMjCRxEx2VbrKaLoyeJtDdUZ1Bs42upUSiprMWeQCtaUXecZ61Mys3hRi7UtLj9V",
  "key2": "4kuU86ofuafAHpZ5o2nrj1822dPbhSXn1zzJ7QMmBnmVhisy7DX4WL52b8DPiXqy9LJ9TqxbKag6P54MiWacQSMH",
  "key3": "4JfgwxVATHZaNeaWd6mPU8neRvSzRBYQpoLs3pZPnodabeauii21hZ7CZoJBnNfwaAHkh5Yf5zuoocWRoaSjqD86",
  "key4": "4aNRScuZPAfHVu1ymb5QRfStjtogQrANU8KuKM8HBXYKxRa1x3b7ZtpzF4dR12jUu99qk7UFmAmXH84Dz7rXoc1e",
  "key5": "M63FLR5Jdq92verNpmuqntTArQQiiGgyrgdZQGNa489kXUsRq2dTQUhzvKnn7JFknVo9aAdwaQexNk9g7ePyuTp",
  "key6": "mvyjJ9Z9W9DUVnJg3LEJS2iUGWeKyAtb7cufp1CuAxHNePkdrRyRG9D9fFP93y1Dcscm26BDDh3bquSFAAXvQAt",
  "key7": "4ynwHwrwB75tec2zJ6GTa9Lqdkgvewp4jfmNqNTpDoNBTER3uaBhFyHzNkkn9gfd2UsX4fLRte77dMPEKpPsNXfN",
  "key8": "4SMN4NYEAJCnYz6AXcbwUE1rcvH2mCfBbCwxo6XGPgxaNJ4ha7XwNeRy2J7LYD5qF5dDjhCckgrDVJutac4yvCmm",
  "key9": "5nC1tJwo7kNNVV5KbsvMLXpoeaj8Rvhgh1JXmg7RZFoJCa5CPPuQqsNSmACgLuUMsQn8xH2U9UN6yNaXNQtr85tf",
  "key10": "3n4Tm7Q5RE9JarQ1uRh4WH9Jds4YUYe5ucMKdtb5pfB7CfLg7yd5tgVsGHxC3NpTbzvywx4rtbLB3R9uSvi38HyT",
  "key11": "2g7wivgyDkFeGcxMaEQnpbsJTdYDnYFYUcdxdAKJsqxr9pujAxtD1Ckx28yvMLpqgduxgqo3pxaMStW21oyuzkCU",
  "key12": "WQzDw7hWoqPseMBZyin9HqVJEf2BJziTRyciF7FZKbb8NjXz3q7RJwcoXQdJpaQHt8PjZEbQ7boMjZU74wi6Fo2",
  "key13": "CMGMg2nCvJRLuDMwtyPtkMsEdEYQPpaMyj9czdz4HnA4JWdXXDYnCiv79CwqV1XcJ7UEgUUMX1CRcayur3cu87S",
  "key14": "3h6JezWBeVDxLfo9hBqrv1ko1DdC1xTCN8mjqqwFUK29TzEGVUz1eBpkq56SaLQSbHT5DYZ7ooWvPNZePLEP9wWV",
  "key15": "4AyojETkSDswGxafJ7W58GPTrHgzYcYdx29PDdQEEoMapda4W1XaSkYkKuXg48nJ9oww8fDCVv7JwhPjP2AKcfCr",
  "key16": "35MDVd8VfxzdvSznVhshxM64JztQG8jk5W8FYytKmfbsHF5scgN5j4AbPYDbNdqDDaqCdDeG7gbNVr2Ddatgz6iX",
  "key17": "3ATfivHfBXtJWEpezUGJR1SVq6Yfm7juv22NkCv2fmKC6kTY7pbw18mUtKDUWXtRQLde1Et65ABoLojCZxrUdLTP",
  "key18": "4FkN2rgouxqLSMrFdSaC9bHmZpnnjqmDFJnc2pjb846VBmRAynRYYyDK4Uj5qMp5mNbCCzh4MJ8y9LwFixDAgUwt",
  "key19": "y48G6X8qo8kLAG2Euju12kht7x7FyZArGRPTrQHHjBc98GYDRToermAKAHXXngxwenrZwWNcznGb2yJSrjPzaAe",
  "key20": "2Yq6ko6RNkvgD6Fa1TL3JJDBABLaNanDz6H9nPxNG5EcLK16jbkNZaYbBxmvhZTNfuktsgLfqakjWVKbhUc3XhtF",
  "key21": "2pRwdbWmJAbLVS7BcQYu25Lkj8oMXFNsY5bP8um4eL4QN2bn3zoSr66JeSUoArYtNjR8wQpLwDTsGBa1w1JkKmwX",
  "key22": "wPvogJRnfCHnqz8dt7MHN9DiELEmxT9ADubLbzAuDxsRYwpkoUCzaZEC3Asdn2ivaG8jpa3ewdmtntLntkWwmAA",
  "key23": "2veJNKVSpmXtfXubfXWzYhuFHH923tZhF632tQW6ntTT3G2XghbSsFWur8Vb1yz2RQoFQiLEkNgTtdDf6oMFWQiq",
  "key24": "2AfgbJuZCmFkBt75xDSNwboZ43jEoJHXmvmi5oU2d9buSZVDq7MUbuBC2971tCA3f6Go6QxMxuM9iMqkf4qBP9vn",
  "key25": "4KVc44g17h63vQ5gxpXFdJp3yEZbGS66PXn4WB8Jz9r8uwDva28pTkYuJvtdXJN446eNBHZgemP8RuJfJq5U8nms",
  "key26": "4tKBe8R7QBzPfbqA2NxdN2toLqByc7rDfgW9UH5gSGHxqVsZoPaCmsXwqqwptQMiHBK35KNm9BFc12YV5oH4iy8Y",
  "key27": "457pg1CPsFg2uf465DZfLx9PMd8h7fZ4siTTE4kYyNrwfGhY6kFBnptB4t1gce2x6RrryQEcXd3te4ZbkcLCPeof",
  "key28": "59VwepTZXeDqeU1h84pLotimN6VwFKiN7CQNGQKm7ukhzyZ5v1JRsHBxGZz4P9PibRjdzEFZUFS4xEeZJtjdye3x",
  "key29": "3nVvnWaG5sYQuhKFZcWS7CwxSZEZHV8P4X3Qp2HmxvUXNdHjUazeWtwUXjzYsAJ9qSVn38QTkWSkUC7SkJrQ9U6W",
  "key30": "3LMWbbf7fXaxi17XAL8ccGXfDJFF8KU3P5WyAve1p2fbF58KSTEXBFKBSDVWDXzGbXBvddmoXsSzfB6FdGAycCDF",
  "key31": "CyDpjN6eX8QQTNLhC7YMZPbauN8LrUQ7z5patksAJYjVkHvRYCur7Sj7WGkCsAppdmiqspQf6Ee8i5YZ7YB49p2",
  "key32": "4zsppX6mePBpoVpx5fveka24zdojeH5Agv5oLF9TcPtE5kChUU4BgcS2NyfNFNrCroiTuTEi5C2fJQ1ZZJ5payTA",
  "key33": "4twP9LjwpsBMJs34PacX9P4qQoa86F35MrtmGBAxbwsRJAy953b4KZ4edwMduXorTVVat4wR24JJEpRB6VdDUzvt",
  "key34": "2xEjQuNUoynnxP7rgENAosUxjUp35EbpDoCu7jLNWMFCKhmUQjrcRwgYwxTzJhELfbrX6QqmoYU3x2JzXfq3GtZx",
  "key35": "54rSCPNkiQHVpZTpy99MRiRrM2sPgbuz9yk1jRKEA32Zzy45qp4aLM3C47GKDNSsDLZN98iVgcoXWEwVM43gR1cJ",
  "key36": "3rZX6jGTY68fLWcDsHWftSCC8TKcY5ET8wvR6cW2ynfTGqLBwG7bDRPNs5UBFtauz4GMBfYH5NDiaQHNkQf1HM8w",
  "key37": "h6mvVAhmaSFpsuF4BQbZc52uxzys76R5gTWyabxTVo25PrmzRscaonqN9j3gGMFfX6r73Rk47vFFwYgHT2BHah8"
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
