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
    "A8x8Zprb3WHo4qzHHPEM5ECB51TUwugM6kiAWobkBgo7NhFsbzjeJ66iU3MCTrmAwUcV1R121ZUJzZ33YpDaktV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iac1BwAbLncfX4BTLYKCXd7kihGXfk3uy8XuyW3oWPyHASjrt9erNsZCg8AUA6i9zopogki2kpy1hQaZNwooobs",
  "key1": "54Yt1uFqD7xfQgxnj9hyQ7jkvxZ9KcEp8iQ5bVtJwNJWBz66snpwRM4XnWapHGxWq31gs83NqVhyfCThzW7KjhuM",
  "key2": "x9kk6A5kKH2ctxQ3Bmk7f1SAyYMfUic89sccE7BBDSeqkdY4nN3HjQsuGokY5BX85TwasdUN23ALLUpwiSZbbhC",
  "key3": "wghvkMqPxasf22G6m79vRZFHssjyn4spS1r18RQS3yiWvSPnJDPpByxoeax6SH4KPCbeSN3SLY1F5Pg8vPww55R",
  "key4": "3G1a6a7WSgEibHnrteGt8enn1udUPwM6gmJJXAnBGWxuT7Cmq31xqoYtyg6HGFA6F1zRXBVbNnmfeU6b3jci1u9p",
  "key5": "3qGCf9ZkVixXVSQH7XjCVnqLTBrjcLoNuh1Ueyj5PmiiVKZB2jLWVc2yRUXmSDFkkzZPjfq6F9w44fJbq7Rvy9sW",
  "key6": "mAXYoooPfyonJVxMXWURY52xVPy7aePjwnc7rGz8ahDBmsqDUkCB77kDLpCxiNrek4UgkyHsAWRQNNc5v5ETHwL",
  "key7": "5ecZqM6PPAaXpB2dsotmcEvCE2DEShAoRPCPvH8u65jisVzbdwe2cZiXnvLbmPq3Gj5RGp4N3HPjUnZ6pvCW4eT2",
  "key8": "ZYJz81JRrb2ajpqVFx19uSZjxAfB3yo7PMywQb5Koep43PjuNqXGvjATpB132LAqiCXTGeS39c92EjSfWa15JdJ",
  "key9": "5JEGQs8TEXgX6wShUjo7BQSpvrXS1nKuPypqkibtF4eKSDF5svLfgFuXDovC4PRWi68iJeWpnw2vxUn8eoSMATFP",
  "key10": "2TawAb74vEs89LvLtgz85HrSo4u48D6mpaPFxnET8JE63BBNq4ta32UbpbysCFyiYK5TeECg6284yrpcrACbYFFb",
  "key11": "56usPdZ31kjAPjWiRgaqzDvWhWv11sCknEVHqqhPiJ9A1uhXpNexBF4neHuMDStSjRFSLNUvWRipeYynqdipZ7jR",
  "key12": "5ED8K6rsahSAZgK1xLgdSNpMgjHoDJXnV3BLoXj1pHeLTfBtrKDToihX2AJLuaDRJr2Z5oVcGCk8SSP5JjEMV3Bg",
  "key13": "24oX6prJtUJL6Z4jygvc1Av2y9HxPszPfbYSQQD3Z5JqipDWUisvrYQ8gYUzuWuHPUEnED3wP5LDwGoup6wzo6Fq",
  "key14": "YjUVUMQyuHbookvgvWXVALVpnHR3NGqtL3cJYcya7tJpnghkBrPFVYMQJTXDLFdevGq2VzS8A1EhnKCmynJnqpC",
  "key15": "5Et8guB5oZ43mZjhMZexTtY719LqKin9oDR24gtki3vsS8JzBZvHavMbY8LY2g2tMg4bYVtguEAahd9sqTZyEo9",
  "key16": "3cvFPvEHutisAYvB6NLVmRSY28yds6rGzBBcZ8mxPZLutomNgEUmQzKsU82vT5dvrkkXwHJCGgcxmGjNYxX4o6Vk",
  "key17": "8eyhfD1LrYLJQ387CCyFTqVQ3Kv7Bvz7rS6J7WJ6UqEpU9jLvX33uBFkDtepPd9y6N2uxhbpkk3s2iz1humYYHX",
  "key18": "61HDf2YHvM1U3vYssQ8XAkbjTPw6RmprZZXL3DeTGaQiWFfqyxZ2mx3ZzdY9wf6NWWxCL14sc269cjs6gM3R5W4x",
  "key19": "2DpzXaB2pfZVX8GXxq344nDGQ1DG5LeDD9awqkiPk5acSwuVQQaQkFwov3dUSieD3onMMaY1LB7tkWtVrnBK64up",
  "key20": "4UbmnNH1Gx2vnxJe1MygypJHtMUxV6mZtDKBgKEThy5Dm97YAkmS796M5TirXAqwXUjWg5Ed3yJGnK9shmCMXFa5",
  "key21": "4Vi2RRm5xpJ5UbQWVLePgMBmDQgDCiyqduqGCEzC7t7MrB4Kic4gmaTJkWDkXav2Zv6Bfj3GDDs6sXtenaaSSFjD",
  "key22": "5o119bgwUbJJctETCToXxBaZaa3RQbpazRXBDNYYiMA5wtqhmaJftu68AetcufCdaaaseJVnhihDMnCLoGSqUJH4",
  "key23": "5ac7QbLucf3Uo6VSVqYhC2biByibC3BfYEkmCiiyrk5sdVueUN2FJt2SCJgGaw6rdG7Ttqg8McL2XeaLhRqHrWkb",
  "key24": "42xQm3KFX4NRSqfM9nLY6azAD2H3YtdhRU9XP5L4qZaAoC8eJz1zQtE3YSrKYvGnrbJgCTzMKnD4g8PhZQdeTpnL",
  "key25": "5fZusWbyPG2gKoSS5aJeqBFNBkPuYnct3NQX1bYuSJLbVYSLi98vqkKBbGxjVXBGV7Tya9hVwU8tPzEu4S3sEobg",
  "key26": "44jJDnjPC4oYRcbLc3oUngXU9x1LGnA4oAdtEoXnuj7wm6Tz2DB7KWJhv8nPXWemBfjDLJ1bvTFcgnZxN44hdmGJ",
  "key27": "3TASDprP83K2hvFkhxN48H8EH1WQY7Noeg2VoMgeXAdeho2Qf6ZmPgQkMZJ4cBxdfhKWprmauTizELsZMm1sbgKv",
  "key28": "4ETvcX9PdFpLZifDPpKrWJTFu6fq5ih922gi5KgQAuvcAwUdi96G8zSQGttcUH2EfnA8AtzzXx5rx56G4BAt4tcv",
  "key29": "nhKFFBZ8jSkmtbfmz6RZQcAq1MKyRR19X4s1FZvvkbP5zA1TPWo7BStyPWfQfrHNqLndPt2ABDbPnRWVmNb1aFm",
  "key30": "3NXX7ULsXaDLjcf4EKp315L3nMWykFWu28w5ec6qATDoBPZMAaFM3BjkxnFbyK3DxDPdcugZbnMVUe77K5qzdpGe",
  "key31": "4j3PQatS63A3yrFXQVstvToCYkFQs3KzgX91LBVewsoK2Ks3xwKEcV5noiNeZcRepD27eaqXF9S96wZAXt8HSUZm",
  "key32": "nPM7qMhYXwye5FDfJX3i3zRgTLFy9zBE4GacGShDLkKPpJJXZUyVnUoCEuU8pSBD8cL71Rozpy64pC2wVNBvfap",
  "key33": "3HUesAn3Za7NCBhjeemzWqAxVVzVHMGfWXtHkQDZkRzqzqR44ZTM9FdFs1yxCjDFASXdBbo7B3M6v5wgJkHWypvf",
  "key34": "3m9RemsBNoFXr4TNgYdXvgRu7CWqkVqng5Ck5rP3PQob3yiBecjzFwzGnikz1keqTXSVj7Nv7dTCEt4hM1ghXB3Q",
  "key35": "5ttdZ2ZDU52gMqpvpRREDqJiq3zjYErc1PcTbPKqcs9LJRqQ14uHKm1mDT5M8HekJ2L9LnP89rPdJ7ZDVo7hRvFS",
  "key36": "3EqsLgdpEzTDUHja1agPinzpaGc1PbY1spTRKMCdoczWCixwPNpUsFhHmWN2L978rLKgyTjDipJ9ZDUPL5bsmjqx",
  "key37": "3v1twjqGRt98gGJS4z7swZP35pv8yC6AFWyB1nK7Wjt6WCfu6pkKoAHpVd38Kxg14JH8P3EU5S8NSmNLy7GXQ7mW",
  "key38": "CNi8qqeqvW8GMZBnA4cSXKsTaTa55kfCnLTRVrdzGc57fDt24BKMGw1EyfTGq9hiPweUiLUZviwwwQ5VxJb6J8n",
  "key39": "54UxDnK3A78NVR6x49N19iHkVczJrUyHXVcG2YXDpadwYQUmz72VGiaDayPunYrwxd3QotpT8nwuALay475BDtZ4",
  "key40": "4mXJ2gnER9w85R7fbyHXhxrNX162nSo5x41eQq993Xk7f6dRipVtzhVpBTnD3jcjAVop9xYce7x5Cxbtb4GLNCJ9",
  "key41": "5nSRMAwb2EGNPr3k7CNDWTMxACdTiEaHMGkkoLYTuM93yDMG2f6z877shw9fF5dAja6tUFZNp1A8ZkExXLEsmGjs",
  "key42": "2FBsxfb4QMgfmaczY1jPrT9H1TqcxMsMyHQVNpusMJWcL14VCjGEbTcSN3zpkZ1egdqZ5BYUaxRce9g3EmQnv3Ky",
  "key43": "2R3cFBHGN46dGU2ag1GmMGtQAsDUFbqmEq6T4VMadyzasxWBdkFPrfsD1FB2ivp1JywhHVHpKisgwpAJ6XA62Vz5"
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
