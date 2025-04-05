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
    "4ucvaeZTEhDwiQHf217vDY1DNdun8VvweiTxdZshyBPMoC27fY947VHHNiPVrpBYC3u97RHor2H2WWsFmHkikR9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFXwaJ7UZaw3BE9HNYaciQgTVJPRND6u4oRUnAM8jKbCaFR1B8fWGvWaHrLz8mpYiNtYcUFX9Wp9cVzZXEid9iZ",
  "key1": "3qXCEjZRSD1gtymg7oqbcA6QLFrXc6vkTBHZSK5DxnLkjE22ECZ4T6PfDhVWZ5RXuuy24D8yGYzTL1G5YDJSSZXJ",
  "key2": "4LXyZQYhFL1r1PreiGX7yspQAnLnP4X3SqoEbCCYCRXuqVs18XyCg4RJc5wV8uG9Ary6yxq2nRXk2o78sfVAaRCt",
  "key3": "4cFLfLji2RJmp8GV7z9Vr6PmsgaCz3VjUDd8GCrvKtYjWNAw27P1ZE3U68NREJkcKseEsuQJKiRtu1RnMMRjweB7",
  "key4": "3KY5cWqEuuPidGYvcoQzY93jYZFjZT5vk3u8wkggr5jceUQBaSAEfY4FMGB2ExnVwVfEUrBVsM8KYbTfqtdWcrdo",
  "key5": "3PmAXrYgLbZoQudLA7cpTHPm84vNL2rrGF5KVuCuRATqgvWpWLz5RZxQgnzE5uZPR4FGrv7vmXNUB6YPxu9cWxKZ",
  "key6": "m3zaNqwXLhwzzGy7AHYhcbZBVrwaf86tteiaPj42VNSRpYwLVZPPb47tPaq9j1b5jangQoK8SFi2zErgrudRBbo",
  "key7": "3yYRhJPu653sy3TwPzvuoxvSwTDWk2wNh62Y64otnZkj8yTdEnLBqQVHvKNwR3CVnyxSvAseHvY3pq85T9xutBTw",
  "key8": "5tDxy6rnpvFuwDvDDrKDcmpPytMmR3zFikwLjB4sp3HPmoqB5yi676Fsg63KKBpMpWWVstN3NXmBDWijuwUmPB1Z",
  "key9": "CrF1ZonEcLPF67rCghkk1MPd5CkH2kh3guhVGwksJXQ3ThKTVDoUYuBbQZ2x59jSZ8X1gx9rixg4rwVLTQ3pfCA",
  "key10": "CLivqW6jiuW7kaYdFbq9bYjq5Chm7WonkBmDxd4PmEDXC1V3a6jsBjFpZgBa6fq8CsMrT7Gw9pAmfSoVq5o8snk",
  "key11": "5xZudLhjXggiVRKrmfCFz4nmbMsu5feBYkrq3KWWiEuuDiFXc8jZL7XYDPB5PqvXCfg8TPmJNzZJxzu2xvJ8R1g3",
  "key12": "3wAKJEPVJD8rKVrKTj4iL27ELFU5AoojMU48jmcSo1R17vvieEHmJKRQNhDbJMmqC1XJGc1kLeWRkrqxuxuco9oX",
  "key13": "FK9ezeCw1YMtgH9jp6GpnUgSJck9s58YhK3Y7Qw3uQVoWrD7RsWfEzCozPcFbYGxrS7aCGz5tUqegq26ipvjv1g",
  "key14": "3N7ZxTHQJmgXFNGskbTkgnU3xDh3b7bSoVQ9JBmikSqqiwQx3bBrZqQLuuN7CLBPGPr6vKt3TsbhmnPZHS5QMZKS",
  "key15": "4phSrz8sgqgvSdSYU4aMEz8oyNuHaAWCdJcSUPGjTKmDsEHRVpoRwYDK5Ju4eHYtihLr9Qn8R5bx246XYaLfqqFa",
  "key16": "3A52t1fKa9aArnmYWvR6CYoHyFmtrenhD326HVnwxM5Appsfsc9yo16QtRADWRixsuhWrT6i99tir46xp5Rdv5PT",
  "key17": "4Vm9wGhFFsMhmqZMN1NnBx5iGyWJcLiBLUuCom8KBZBWhX7e9tRV55B96KVFCqMti8CSpUuyktBDBXeFcsCaGVWm",
  "key18": "4CN7Kgm6qCN1h7joJVFd3mN2rKwWxcZLE2KMkvJfgqshhHmFRCzRghaFTP1mFpkgZ3kRBoK2JiJF8XgmKa93u9xy",
  "key19": "5ZpavgBFyDb1voeppUcZUUHon7PnrwPzxfyjhuvCFKTfHnxvxXBfvMQf41ZqenQ9ZpuhQNSv3WSzgaHoyFKV2bAJ",
  "key20": "3YFvhFEzkLcHVjmdec1edJKdHCSM5t69FaBm1ijYMidWTQa7crcWSLD2JTAMp3jiaa1TBx19UquobrtiZ4nBuyZX",
  "key21": "3P43XRjwTdMBCNFREX3XWM9sLpyC4N9o1hNt9HdE8o9ric2LVbnFeWRc5yyBNJpktWgyEVWxF7DWgy8vZBo6iPkJ",
  "key22": "Aa7UqYwegiRS1fgpVCDfKDKJwSccfSpHJAeQ9UCkiGNGsuPR45Jv9oUoyf3Ahb4jWHuX1jfmxqUzme17kpkXt22",
  "key23": "65dCbq4Vo4sgPH2mQMEDM4P7utu9gH7Dz7Dyfk52Qk7RaQjUD2v9aUuzBr2RKgUCgCVn8ocUg7bDvo2uNWRmSqzV",
  "key24": "62nd5j8C5VmUYAvu83iDbzYcKh689uEDS9dF78rcSftRxbDczsUUDWryZop3EsVgZ8tNFvgh1rionHChYRpLBYc6",
  "key25": "PC2Yf7gg9c6VRyU79Ud8oHskLs5MCFfjX5AiBdyrq9RjiYyRWcmkcs8cJpZeg9cj98CfgAoE6vq3TbfTiEXJAhc",
  "key26": "5Cds1bwk9FXdLB23LAeQepYs7EWtZZLkCwBtPoZVtCtj5N92fbrcSotB65zbGG22GWkWuuq6pTgA37BvVaRnw9fp",
  "key27": "3wyodBcjbvq6rPZz7sWQNYoo1WrTYnz78zv4YTRdTzKGHMAGythpEg9tDL91btePVnAzqecnQqYePJeKU4DLm87q",
  "key28": "2g8rrxHhPK9H4LFWGmq6oqbcNVScYxX44g6XEcirrZtVMhwJ7oknnmv8i43zkZjeNkwm3WxvheCMcLyzgFGtG8JP",
  "key29": "2Wou6BYvw8h1iKhpvwbawt118teneDW2GYFTjfUTK3JYtPaRVcT8fTivfEEjuVo1vsce2AKwz3HJCXGRve2Uk4fN",
  "key30": "Rdmf2g5CNsQ4hSZRpAUzyuWJwvZ9kYBZiEPfiXM84GVu9v9vB8Hc4Uz7u9Gh9g9gjRQx7rtoG5DvKNoTTK1TJaU",
  "key31": "3K6so9NXAUkJWaZ3kN8NHBvAXEZno4shJtkGtw3tS8arUyDvsF8tk3mZtryc4CdpvbR9bqF1WYV3EazkzpfY2FtG",
  "key32": "3vY5UGfF76Xrx9vLUyJnzjsAkPeSt8JjNB9wvw9chQ2W4CPtweJ42e3mqjVHcgfug1QFuMZg6Yp732vqf9Nswa3i",
  "key33": "4Fci1THiCfsxdNx129Fu3tGUEhFVUHFmJdxyCmKJhjj64TPPnaabMcxGmMjWUxKAvaLRwGisE5tEQe7tqPZG6hMi",
  "key34": "Lqbgm14kMJYkWrYmTz4DDcZuCXorywD7zu9BC5UFB5KYesXTEzv77Dg1SanNGtm1MMYj7hjwaWfFD1VgZd1wJk7",
  "key35": "oswHGGnubi4i42Di66CdpgK5XMDWjPjpTmLb2brY7v4Em7cr7PKvuB7Mxcs7TyTAvg5jAtUSmeZLqxUpQn6tTWS",
  "key36": "3EcEJDgHKUJ9uqtcvVvaqD7g2dnkYNTKU3dExp3CdSBuYKfJDYsXxiquQJ3iWRjnirtG6VAzwKgQodjeAyzgLE7F",
  "key37": "en66qk9aKFkbuNh6CMURj3iT59BHRT3pxLDpYajugJrdQLpqU9xhxgi3Kgh2Wf1SFS3JrAKfhmB2xejuL8vY1VP",
  "key38": "fyLqQwBbh3QMaChjX9SdiGkuCMc5yBpABqPp9dBqboUQgLUbuePnVUhpd6kURrryWKp78AFRiCKcx4AXtAVpwEG",
  "key39": "bQ3f73uVco38gSXnvxWpDDSWurfpVL7id8Qy8EZvKKmzb3VnM9w5baLaEmH3sq8e3JtiosEPDiQdkBxmQ6QKHbz",
  "key40": "gUscuSvNXLrBnvvZ3kcpaR2tiQxKvtNUE48gY3LWhLNJ8J2JUmpFHLLHeZuT6zL2vP5EprJR1LjZUERLgxTn7oX",
  "key41": "cqVzEZ9BeXzJkkrk2q6fSH4rmYb9if2UABTmk4A582FsAhPumN17Cpzo3oF5FcqaZAEGCKiFR75otLgwrQkwywK"
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
