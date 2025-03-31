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
    "KFqZZSQ7NudrJCDHesg4xhfFkRc5vGBcX5kjE81WsXzDtanrm7uyiwj7HMMecpxvwyWjNAKXzkrBT8UumN9eSmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEsU1hrnv21VFSvQJ8jkMbzp83mHRDL78gVMZXYUF9keuWu7EoEAtbRHADnEa6ESXuxUHCNdE1XXgR9YZ9PKR9X",
  "key1": "4SaLUNXRrwBiXDe5KB9893R4sR9vQqNo796tsGU6kggUvry3fmFKCATMSQXzMt4j8q8pQxVaRARdizdDWDzgs2gW",
  "key2": "5wiedRB9BchqTBdsjeRMf37yEuZFSBijxt1BZqYa3TuW3K5ntS1nYhV4o4dT6SBQd6uBdjFAgVdUkSc1VwoY6yT8",
  "key3": "4f78dxow1HWBjHkLgfhwbxgYo6e24YhviEV1Xjc5zR1dr1XNoX64oMpDfNDtrX2vtKSYbzWJWCQUA5G6rAruKDaf",
  "key4": "5jhT2Ur6s74rtpPab6VqtnkMxjzCqEpFoEFtJSce8u5eKfYiQXh256HrMeX92fN9EPbnrRkRywU9hiwoU85ArnHB",
  "key5": "3d7U2iEQKkGpUC49zyhvpDB99dPfYb6Apt9fMkqy9iAoeEnD91CHHBDWgcHtPZZ5fhLS56Fkug4dZkEg1WzvN23s",
  "key6": "4LW2jA1wSiCZ49syRT1BzPJHj99fqE474xYGVa1rAwLaUdC3GgHgVBvL7vhWoQqNe3ovKuZes5weptzzrDa5tatv",
  "key7": "5hLftR3M99Jh67awGRzbnKNy3zEwStNxZt9cHqvQauZVq4ywc7QRhPCCFD9hNi3qzsEo9zc8jxz13JEMPJJmEZUM",
  "key8": "4BnWV5Eoo3otEBQQrKRtjeEXP8ovGH9EwLNDR4PGMKFDGBZUB4UVM2GE9jyJfDpHLoAsFP213hPgrNnFruuTX252",
  "key9": "382ou63pKkB6T9iSyCvRVQkE4zKFZYNZd8DoFD4nynqoMbj6C3g5HLCxNW39JNejXQvTw5oA2HG7YchZQ3BMrRY",
  "key10": "1Qrb2uoEBrHPzA5s6oEBqaB2CxaoKYVopsDgvSS8bAbdWUU2tuYQLgoGHZLyXckG7T4rk9pMu6EuBZw9G7ZrawN",
  "key11": "5xabCebeUG1N3PbMLhAbfmSMrG38o98xH1xQN5iWnfRMAMM8ZS3KNbVnz9bvRznKq2rkLktzpVUXM2TZCu9qFnZV",
  "key12": "5TYmVY8QwccxaoqD4AeCUGYSziaY8GvmmijehPmdXkzC3QVMgpzEcSxC29ZpgDzBJWo9iruMVzw1kYQb2NFWh5xX",
  "key13": "3m5mUWa6ssXB8WJnHhWEfJt8tR9T15gM2Q9ZZZmLQZBTgv2cRCnn7EJ7mfGCW9kbLWdcrPc375kdGHLNckyMUqpc",
  "key14": "mA8vvsXQr1abaL5ePAZEWrBD6evaXuzr4SVGc8TRjZSg52ACVvvrrSQB9Uaie26bzhkSTnhDY4rq7z2TPPpJ2uX",
  "key15": "CR3ZHEsJvEAo4pGuGrjw9v7o45MAQTDgVoEjMEFWcc93jaBXaTj7L2Wf5xyDQin5Q4WakjTr8aWRAhkUqdQ3TNr",
  "key16": "3PvgX7m1MH68CUhdabMfU79A8CGwV55vLfsVRt1FJiCXPmALDXt8anqT7sUpnS588Xtug4HDTjEwNZENxsC4kjs2",
  "key17": "264uMHKHRaYpanQtWi76ViMpYYLkWfyyBpRRMpBFVf1fsre9MKeC88DooeHwHQtCVQgZSo6tSwuZ14LzZcky1prS",
  "key18": "dV9djf4Q8keBS6wPYnYw2frgxKaNfeSuGi6C9ECKnk2YmFdXTGSfPXpEAdKGEaisHCBSrsKdimS9EiRqaf3dSx7",
  "key19": "5rriMCBTgiJhrCQk94vvsfk35MaocKNK9P5swSb7wQxsSW3Ztv7UaiUKNV7hh5vfBgEapvDifbsy7cL6NiDb1esh",
  "key20": "3twBnUTT7noQG8ePMzVeDJWkTgGd4N9iFY857e1cd5u5KNvTzuoGuLKNoKPwCvj2RXb5RD9w9p4Hp6rsLCNL9TJc",
  "key21": "3vkF3TMLf5adjzQS2jjZEkQRactxowig8n7uSxrZegzPS1shhkiQUaAo6WbpVK9uXFWKgNexq4Uf8ArBkmU1ezT7",
  "key22": "3TWkaikeqdCQm1Z8nHVRSnYrFPfzH4KAd5GvyfiRGc5KCAn4fmCgk271REekJHcjK6YeS2UgFc3ruiWFFx8jvyEq",
  "key23": "3C5RUzZDFqAuQQrMv7LoVRojUJZtxX8gYmMVdgTrizgjaExrC5BMk3GFjBxtjeELx5DukyV7eLbLgmuxJe3iefYJ",
  "key24": "fpKKGpGRFTr3SHS7ocwjEwA2qrugE3KSoxw1oBWchUoYVGWVycf6pXA764FoGmZeDXSM4SqdBF5eqm7dEDfmLAR",
  "key25": "38tDFxba2YA4snnM2BoomvkYM19BHeRRSGV5diKEVbWGPUmbGAazmjYSav82RFGCnEhpiHNkEDA8G6VX5AUWk2Xn",
  "key26": "3Wf4GRVUtms1d7i57kpMRqL8Vzkc99nT6tci1ZAkzd8fAgkNqtqqVoJg5gbtxGBx8ugkjj15UHcAtAiktAYPAfGt",
  "key27": "2ubjLYGR5ck4xCiCsNq4ASPzX43dM3MH4wdcQjX24kGMukAKRytiuyuZ12gGSHcd3ZXiMgGkKxLeSy4tKiyhqEtb",
  "key28": "36hoNi3NV4xJugKfZwurzKZvqiE17cCbRTJaiCCv7Gmk6vfzwWGPCpMQbqijNZrMJcKz9pANpAbjrwzpbpHaNLmB",
  "key29": "5RrFfAc2n1tscHLwVje8453VLhn3cGV6TFJFNZMBWTCbbS53SsMFojXNSXcq68JzxZjFwoXxnfR4o1NPYhwkfY2z",
  "key30": "4KiBb9NEv1AyU8qeP9h5k5qULgzFE3azaVxqcCr9bhZXoSBmGWcmPDFk1gBE36Bg7WuvsY67wfM47onQNi1rMUrn",
  "key31": "5iCcWNHGb2KuxK2ZjapBghWZVnaX4tknYMkKE6LRgpp9PfMQp2pjSj3YXJ6NjfwJ3fLzP4mmb41KknY37EQtXu7j",
  "key32": "5Nc8YPUHUmZkv4TuMX9C6WbPnmbf6irkgL375q4UteMJ1hNo2ZxhrZ2FD4gi4qMdPrH9pVhG2eMp98fXbwbqrUwV",
  "key33": "4LKLaHBpsnQMx8HAS46D7u32xH9yzAynbod6Rmi27PdwZsGkCTFQHS8GHiL8f3pgMSjCujb4gdzBV877sXsnkpWN",
  "key34": "3zGLjZffiLypdqbonbLe3ebnLQiqb9VUKT5hszYY9RAcDLDw7eqY3vVu66WpaTvry6o58HxoTAwUWYr9bHE5JYob",
  "key35": "2JQT94nhmKR3xzi35P1FBnejQRGZWWvBvQFjtdZzwBwCWuvWA837joc19JiyFFPSE2bhQGGsLMAM1ZJnkd53kiZ8",
  "key36": "5dwu6Hi6mu2MX58FAtgMhnKnBLBKaZZo7H2CXUqJRGmL9mKySkbC5jgRi8MEDQJSULYuyfQ8zp68E5QbAnd7adCU",
  "key37": "4NrzEnQegAiHe4EfGLQreEbXD3GtkdjY41sS1TPW4FaKFHWSqJDphEV29ewQYrerUDdRJdX97jmdAddpscrgZ3dW"
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
