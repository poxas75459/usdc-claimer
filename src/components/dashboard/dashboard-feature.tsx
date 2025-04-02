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
    "4ijFZ1K4kGdahusSBkdPLM6rLNZC1q3JN22qWWi7VV4FwsgEWf6gwVoQrpjHWDKd3eJS7poKCQH6RXn4Jti9Pnq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mn1pGXus7LVJFxK3PkYnU4fWDK3bt2oyapePXyCDgSeZZfqgq5rWvDp8k5n8a9jvagC2eAev8Rx5XbtcpKNegNs",
  "key1": "WxM8vY1EV57CejMxaTSyv78Di5eQhH5wCnUV9kTVphwxamt5JLm6De2X9cpEYLtCvQTsW9Lb4MuDcpdQjwTpc92",
  "key2": "5ZtTtA9Ho1mhy7fYjzN6UaNJ4zXSNdjCkozULxxT3xfHpn79Kpoda3Na6nGJqEsZngnsExJDTmExTJMLw8YF5fc6",
  "key3": "3pN53a2jZj5k4HwyXtqp7b9dH5kdntKSUywy9Wj9e1Z36jkBJ3DVAXpAvkbYQqeRLJS9PAnrngVcuC3JfpjAEz2u",
  "key4": "3jwZGJTyq882g1N9QMMxB5o4kjHT8s2KH786My4NHkz6AwhZ8AAeqKxNckyY83kKXysGgSfNkosg5ZoSYeaLCqF2",
  "key5": "bYvxD3Skh8wApAN9fRrpCtwnx7gBnrhhmjtrS5jsZpExfEqZwawNf1w6GP245ir4SsZKCMNmFd2qi7owYpaZq9k",
  "key6": "2P9mbc1pGijWWdJC3zJrHpN2Cg8vZ2wiyBeQxLLPmh7MZBV7ikpMgQ4tqDxhEAVJPKiYAoLW9eWrBk8oDjnapxw2",
  "key7": "2YzToMn9ZrEY7LE5jYNmERjNPnof7xAZMyiDpDuWweXrog46f8J8XVMYrA3MCyiuHXfh95UDyiTmBr4ofgnqyq5y",
  "key8": "44sXFVhRspuRri6zKcxW4mX1m9EpdFswfK3ytoEATak9ZEz6k435Exn4zYCniSUHrWwuvFdKrwEsDzx5CBnRLBV",
  "key9": "2ysSByJtbJFgLWhY4dBLZrmzjTsYYyPbUaXmnsiWJ7jq3XyoXZ8x9BC1XCmzhfQkvmQ3SKxKiZqZzq1MU6N2xP8o",
  "key10": "3h3Q65NXx2WQXMKTZC5zYioNy58xqcEmxm56N2Nco8xZTBraYJqNwXiMMFhWuJ2ffZt6yUAxN7BExej7dnTXB5Vm",
  "key11": "5Ei4H3AWUDx8MQUAs343HWrtvoJtmGR6JT87kzWebWETjTwqwz2NDUAE5GMo64aSvmopnQc6KEkVtpNw2sEi9onZ",
  "key12": "4cs9ZEUNc92REfnACbr5c6QnF9K72k3wXhMs14JSoc4YTvKD6svtR9uAZaf8Na6HNvZSKFWbTeKiZhAWZF7JRsrJ",
  "key13": "3eht5nFx1qVTCZ3S1TrTCBARV18bbKHnjFEJkVkAUGR4WLpQfRRk2gZRq827VnrJtrD1hLk7B8njERj6xsCBnc7E",
  "key14": "uXQ63y3oCdzcZvsYfLa7wb4J4JcGSNgRAZUvfo4pCMUvDp4HWMh4bcFCKVmW61mraSuYpoz6cUE9KQFfDs3ydPk",
  "key15": "3Hwowyz72yKKLv7qHSfLFUTJpFCozW2B6YYUoRB6QbBdcX9ht4gy5qVz7krXhAbgXtreGTZzYovUn81D2RCMBBZ2",
  "key16": "5xKn29j29ywHZjKB9n7gyGBfGrFcVVVB6ngzdRnTeUjuK1v2mnSPTn8VxCUKjgLaSCfSrMm7mAaDFWuKkSjFYuH1",
  "key17": "5Ddq3fBmngm9znRmjpZzKt7m88QYZ4yJxVoLL9dtZmvBUPjNw9WbTWyRrKoNsH4k9jgDYfgQWpRzQgALWKXLc4SW",
  "key18": "2Cr9ccJQo8RprPsaDRiG92oF4gVkmRPFmYej7aSFAERVjSULxXPSUN9gnkq7GyL5hQbH3SiuDd2WzNZM51oE4J84",
  "key19": "25tAWLSc2fywpDfL1koQ1N74vubDNy5bbbgLoW3ZnPcpccFbygQB6ioG5FU91ChYcuVqRoai96yKiPc8sLV1MnxQ",
  "key20": "3MUoMk4Dm6bNnaM4Vyh9YDpydpSheGi2n4D6Rei7ZADnPCbhNCRLP6GgMiR6w8KfxsXftwE9TvBcV58EdMwHYGM4",
  "key21": "2VoS1uGkfzo1W2621dATwd78mX1TePuK3R9MySSA373Xj6exW8WKqtjY7vj6Zh3wRCxWNod6r6wZKNMHGaXB5Eq2",
  "key22": "67XzwbX3jaruAHEhA7iQ4ENishobLQhzWEgBpbzFVtoZiGGEtqwJ1oWoAZknz4Bs2DV8tdRKvQDWGLZywbtcLRw9",
  "key23": "4cBefM7p7SfdLExZZ7WPu2S8q2Vt1EHQFgkEGJocE4BBXUN6zqoq2x3t81DgS84LmwpMcrMkZNjyaQUkoFW7LNxr",
  "key24": "2kx1jDptJZhNmvB4naoZeyKvGqkGNExQwVmpsSPTNhidAgZ9bPQ7wsFPy9m6jZfp2TukQ7L8yzGXmoCvdYkKUKmE",
  "key25": "2pR9854JVjM5wod142wwmbn6d844Xw4RwraKgekJoGh43HHgapRs9MCRbtjiM7mFXbVPzbTSLGq4sg9zfUJd5mbD",
  "key26": "62dmtmd5Ggk7pJDp5m9YyP8zG8PS7qKQm2jVp4e9KaZXydv7v8xfRS3zWNvqMaS9fuLi3JCXzTW5fsLPbabFbY7m",
  "key27": "4cXVimYX8GuWgHDoimM4NEdE2Sm5y416LGiPqSicaPiFgQkkY6P5X2XrnnvDDMwwtG7oQz4wxayWZjy8Dwm6ijKG",
  "key28": "2J9cYyVzZWan9XbZkRDx5nP8Syn7tRtC2czbj7wjRnCpnhjmEfTY5yiojf3mnDqwdC7KDP1shgNiCdoqwcxVdvCa",
  "key29": "5jff4UNzoVyf7HAtcR5T4s8w882ErdVhmgnsA6J8tKQEQu1xJruntm7MqfGg4VR5peeam1PokE8inuqKjYyCffth",
  "key30": "55LAt9cRtF3s57DsRsNfaRKAyU1W9ibD64oVs14bnDYqS5wvXMbYYQ7ozntKaN4NBCtDUL6nWEVn2SoNmubcT2Zk",
  "key31": "fjCgxeD9UVFcpjh4x8nssi7Rt4HtNEyZEvtwVrWS1dhTTwGZX9pEVU5kDAT4WPZFhpUJzWdWgojGh4QB6dfJVMj",
  "key32": "25SFnbrUrPELiW2n5iYEBXCZGEtJ6gih8amWd1jrHqqSoVpyktoHGZoP4VqoVTrsTXdJMdgLT5FqjtHez357b5bJ",
  "key33": "4z1cpARd24M4dSLzJ88DWdENVeaqpFahuDxfNvo8eUjJGpaf2u544kM2UJQUaXXdtQXXG32EN4PNPzKotbtdWNgz",
  "key34": "429KHKeJ3eJNSQAUYMmfMG5KeSVRquE4K3AR4WzPZqFX7ZYBoa9EGaXkeChHhQaNhqxLuJp4prUKHh26zFYFasp3",
  "key35": "4MMqARxzW9sUcAZg2FTT59TjbMQXrCabQeQVaHambMdAcacggYU9wuhP9M6yDFQLXAhSYPgH3AAvu1j5SjhSzmYj",
  "key36": "Hd8Vh9bcktdJVrQfXfEDYLNFHk5zuzmF4u2nU1QhhBJsqUeNqJZXBVJD25ncDcwFJ17tywreszh6SU9s1H4L1f1",
  "key37": "3EGoACHTBrpXv9qR183EoRTegq8tMFJn2LCTEqaEFUJCryywTxLFpQRMfi8WwY4WVFKjMjDvovm9HUG9Lru8ZVjx"
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
