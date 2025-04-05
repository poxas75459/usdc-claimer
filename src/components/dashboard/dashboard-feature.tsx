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
    "4R1CYMQyj9zXDCeZivgRPeaAHSxUqrKntRFmLs7ynkE6qVYa1hDnA8pwzmjY1BDmTfuP1g24cZQAiaAPfggQySF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZ77w9dNybUN6WArapFEFPd2VuC9V5FRv2npa2G9FJGV2YZQV3SoEx5ppunQEZAbqgSyGKknjd2FnPvGki5PVr4",
  "key1": "4kLhaKZes2JQJdfYikbZKZn4eseMfoMCypX1qh62X81jHKNJhtGBEPvVe9kQ3vqWsppLbzp8CayzX2XBHdKsJBM1",
  "key2": "3vqyvHUJnsHLWNgkg1ed5k2hHkU6TrSxU9BMBckE6pNJawZYMB4HT2TmyiLC3AqeWtdai3W2KcPD2fPMkN6Fhyo9",
  "key3": "B1qEvBNTG8x7MQGGccXHzJRyeL4o22PHSHYA6vS3eGyt3pGBZJvvPsD1pLB3zAQxmiMU5S7XSBU4t8PvnNCHeKt",
  "key4": "4QUPCW6eBFNKRQNSfDG966VkMzF8NGAmkx2TfsiQDfRE9fW2E1VuQgRvBCZRjkAoMXt7koxfytbQYXxGxyqXCQNi",
  "key5": "4HCDvEQhktUqZdcKVxuF9SCdrYrH7D9NvLCUFQrXkhvWUSiz6KqWLrw4DepxW96ijgvZTyNiZz2GxxL4YqQmphX8",
  "key6": "3yGABGGpGabBbErYtv7yZe6yrhZUMasSNSVntvqgTAHSqCB3KigBAwDx1Croew9h1Pzmwr7kQR7Fgv1XuaMcvqEK",
  "key7": "4Knw97BvKKvyFyzSHMGyYBNdSCgt2HUq7iydKnz6Ft6Z7pWaTTBqb8H2PGYbENPyeonxmuR8pnKaEmmC7Q85fnFx",
  "key8": "2zZJCWDJ3tKHybf1HFPj6py7cdGLnjk65aPdBHRsntG2PJRd9pdCT975VYRJT6pfFNZe9xA4yg5gbo1SYDgdAY5w",
  "key9": "39np5uLk2p5g9Fwhw7mxmVXJhUJe5D4QzV53krWUzvFi7LovXMjskWXZ4kFaPrtJSyuKnm1GyPVxrZdDxarjW643",
  "key10": "5e4UUrwhYznf8755W4giiEhSatkbJgfvJMDLLmhQBPnunGfP3VrCBsD1GnodWbsE6db9Lp6SyGJQdG7gMWrQuru2",
  "key11": "3iBhHBWMopjPC5RhDnHWZhn4VePgwhYVE52SWR91L4SwdH7cpLogTz8Ac7cKLNJ2QrcxJyFDutMQ1QUgMvWUdBVX",
  "key12": "2xiEZHM5WjLRHAL73zUX8EwzouydyZmMWRnmRogoM6Z2rnvBwGwYmHcEPP6hV4A4Gbc5r3ysA6QydWDZdtYHzME2",
  "key13": "466qP1rAJMaFnQ8g35H2c85vshQtYRRXJV6QpJSBA297mGkdBx3hU9YCwTLRDjCfpGvxjSJ2t8CbT7VKmG4iUjGX",
  "key14": "MAgcYRrQF3dXu7UjCJEqiN5WxYr4MtKJ2e1Kzjf4iEwYaWgpbxm6zngeW9Nn2VPKFYsvdtQtbPJQ11LFsxhBkDA",
  "key15": "ciPC7xsV7k91Qksdx7JtZSY6azt9VqbYdyTVL1WzGbKvJeBXPVznuyDTVexdTsmGDyToDfFyDf9hoKzBcfGdKDu",
  "key16": "2PLSqwj4bhVSD4giGCptiThuBNeWFqW14zzcJiphiecVLdGMa3kjUQGkKenEsi9FxMqeEc1fsZVDMXcR5uESjPGf",
  "key17": "5GMNuSstae8YXPPMmPV5Z88r4HVtUYDWS76M8xCfPSipZQ6pkDV4myuiZ9wxZNfnMFTHXcS8TYom12t2YeYGeSwW",
  "key18": "fHNmz8qitZ6zLYTfKxUmAa2mAbokhtdgzh3pTPndZSAwRu7j3dCJVQk2n1V1tuirM7fJxJTpSQq9yANLwC4hUzf",
  "key19": "pR9ag55SY4Kv1UU7Y7x6YYim5d65gEcQJghNNhiqMYhHVCzkNmLmjsXUKBvM4xyFCi4t3S3xsNE6wDSw8bYV7Xy",
  "key20": "4yDQrai879qa9oDeAmxwjHg2fnAXVmD8HgF6kwHuMkLeRAQ6ez6YHuRucP8Zv5wDvvDyF3L7JpqGAVEmgvy6cBoe",
  "key21": "NbBFPrqbC9ZNcT3qv7oqtRrLx6Bg485uMZLLdd4WN4trYRrSNzQL4Kd5hAL4bxbvkGL8Ywd6QS8Sd2CpreLkeFn",
  "key22": "22VawHMsYCpjeDoRn1NHEzkz6Jep4mA4rAu7VJJKVhUcm8BEEZptLLpqfvBiyva3951qGeWi32xUBpYroJga4qmJ",
  "key23": "2WhfihvY6LC6Jwd31RpoXnP5rwZTTQvfpLRe42gnLMTRQonbHcuJSBQQCzoUYEx5djRE6LnSzPiWsFGBQeRfZajq",
  "key24": "572bAGXSyTqDQgr817p2Q4B4JiRjcXNcvjiyaPohfYoBU9BiWb1WJKywanpqHXBqbN6JsorPBQrpJX7GAwy22MMm",
  "key25": "7VSuSMjaKpgqxEa1b2v35nKbuzVG9oxxRUMztpd4gNxVrhsiJEDHjVxgknwUUKYSNFCZaGzo1gWe3y7LPGxBPNd",
  "key26": "3eoFzbN7EjU2xkbgEE4hNWzLRLGyf7xSdcWn7CHGWLVjJ2BsU22qYDcTWDP14KLzpZxDqjtBpoztWSCMtUJ9hrB6",
  "key27": "4HLj13jg2xLhTnMsDfaMtVVgvXUfHLYEGPDCRmSviubrkA3JZxfq69RaJyBEmCQzxvRoPVXxRd1U2ybizVuaFivQ",
  "key28": "4bS3DKE2nR5oqFH1aaFpEPCorpkGDhuaT4DDn1HaEyYwyUs3QmtgthrUrQzaqEbnbBUESGuL5fq9PjjjfVn21GWo",
  "key29": "3L5D9E6hXVTfPvCe9rG3HREiTaGjX35FR3Tvi5U87SSeagzL7V8BdvQbdutBadeah3KL6GoWAXGZyVGUZhCgGNjA",
  "key30": "36vyrrbbmpSW69pxndMPk3PmaToqLzKbWVwymkige1UAx7FJjghQitgj7FoPZBwNGiM9auYF9xeexz1RER1bknaJ",
  "key31": "5ggqEyPZkrw8QipPN25vAVA4oFV62m5Z17Vp91HyzbR3Q29zpyB72vS8BZhjBiLxEmWFxcwH51mQ4X2n9vpmKpFV",
  "key32": "2TUX7DxPR6b1RanQiUMB6zgTYDmmQmLGqUbi6hDJPE3YkQkZwEYQL7yZWkGV8GDo8WuzXA6ggwRn8DUsYRuWuuC3",
  "key33": "KjjtTzEmBfcLGKd7gxUDuBC6ZJnMRkNhgZpXcS3CtjQGvPry6ogFdCed3Hd9BZpkYSiWWr7AtdsE62rT5aKwHhE",
  "key34": "2nY8BPfg9Dw2Q9p5BgpMoZmbNYhEf2QLb3rwV2H6nhgkE6mApzESckdCdG3dZ9TAgqnRKgtn6ewLto4oyRxMFXG7",
  "key35": "5tBAxvYE2XiXpVva7p79czWQHpUK99vAMhtkhxT6YeUrqRBafP1v1MSua9TrweqRSnERcWfDaxwXjQMTFEAzVVhi",
  "key36": "4fmFvUJbL6cMw8nPkdcRFa3EQggAsrru7CU6sELQGJsrcg4BSt4kk1WRtfh6nzCRFVSJ2p5P7cbt833cuN8eZR9V",
  "key37": "kWoUfgqMSyuP4zep7SPacHL6iVYCkScRy2adx7dmgn3fHS3u3Wiuz1b4GxFzZFXjjy2Cfop5q9JSdFFadgqRu7K",
  "key38": "2azuyHzPyiJRtqm95nHqSAWdCLTvjEf5LzZjB1MbJAuVuygznobD5eYraSuXmtCXkqDiK6CYvbLT5QJHCFdsWDGx",
  "key39": "15JDjYDnZgjYkz6BLpqtUDN6NW7nvHtui4C1yvypEBFAGP18uGueQw7AGq2Dcca5CpqWEAHkUryRS6EFdLB7qfU",
  "key40": "4fHbzXPEgtS4PxzgMwDneeZTAJSdYFreNrriFKCfrqUd4C5M44MGoSsBTmt41kYPicAZaFf6rwmaVuLL9JCqff7Y",
  "key41": "5g1fKRGx99M7wojF1GSHwMyeX64vgiyGenVkmffsoaXH9rZCb6p2iiuSMhM3aXGBBvDQdqeKyUHm4pkeUEMRDFyv",
  "key42": "55Z5ZQd6YEufd3MxLGzxPT215T2VaUocjpt9gzXzRthMTkVcPQsNP8C1Jdqr8h17URZjy5DJuxDQg3ZjRTULRyoJ"
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
