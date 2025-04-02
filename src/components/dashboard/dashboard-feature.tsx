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
    "2e9qZwGixAB73R4PENhJkpjiSgeh2EY9JsMjBhYoU7bSiAF59Dck9Dp8h8RbYL8HGeUpf63eRhUvRkVLrxtGLMmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54xrQKFf61ANfoSBvocDYi4m4cnmAPYHvkcBy5vV9YFvSktf1awLp85FHX1zHvZGD88VigjkPzHD954AWgHEXZ3z",
  "key1": "cEG8yVm97APAYzoUDtYB282UQPJxj7B7JXHT6cAZ5uMokAqadjePB5mESYbNYXX9kqR6TXbWdJnbEi1e1wW97VH",
  "key2": "4eYma4JrXARKAp9s2sux1c8S3zWCeNoK7pcG5HmAyWzmofYqwXXtZrDaN2LC83y2ruYefSX1qv2N8gE1dJx7Rmov",
  "key3": "vGDzPfxtiSauZe1HRQAz1cby8yS2YVF3LP1ZXdmMzQJUijL6EpUpZTjCSJUsedpuF1M3AHqXthzuc5RvcQ7Syz4",
  "key4": "5syaiMXaVzVVwueCdkiLAxEs2dT1VKfktbqKKaQgKypntTF3YB7GCVNzjzrrUXfLYdaBo82fvPNFVEqqTuudEjrs",
  "key5": "3ZnbsCxLorkf3foqktWUnV1ny43hWJrzYPBugeD8gkDFAg7eTJf1cXgEvrXURHuPP8s37E4e76RXVLEFuSAhyvJi",
  "key6": "2JHgqsTMvYNJArHNPW8VAkccs3AgdjZ94hoWpUugu16BG5Sob2dswm8e2ssXzaWdgwGKFqgD6F4SXD6Kwi8onBjA",
  "key7": "2qpxRP4htd4dr9HvHBrRKQrbxeW7VY3RkX64j16JxabTtrr18JQ3EEKawPqLhbLwizDYR7psAVP7rTqsmMFfgvF7",
  "key8": "45TnHXjcsvbS94ns3KA5NCw6HGkxc7364HPAiakxbHVoxt2GFZEmxWzGvsSoFfHE3nbmwyoWCoPvXz4Lj4byaiyT",
  "key9": "3MZL34hrsqNoLwHvWY8FhEsysV9PuDSGCqqJ5VKbVkQFMBWgu6FkRkBHuPqd9WFvQCJwNzkr82NpatQqvtPYFTuB",
  "key10": "aFJcYzTNJLGvgZTo8M9vi7p3cHTxNC4SznCYP4DRCRAZEYNFf84QfnPSAXAi6GyEMNW45W9FFsKwBEkbszT3p3H",
  "key11": "35mWwQXrEE4EqeTUA316HY57zB2fmrRgeeyVrf5PDfiCtzZMkGP42dZpE5bBEu43yZs271tPCSguEQT4YPYVYfdE",
  "key12": "8fikqKegEW3fEB2bbEG3wggtShdP5Gt4R2FB2oQaLVnKSJGPqMGr8XLh2sH1QEpXiuHYLxXKrfsSrtmxjqGEhXQ",
  "key13": "3TR9GzJq1BG9Ks4sYpPZFpGFPraYxwoNuLj1BpL5kiha4zaC4v9w87Y4JJq5cLGVj51TKBs83eWrPA82NQvxPtwg",
  "key14": "3u7ih8FnF1wVfbHeQE1mnjHSFZTs5tNBbrXjN49yVnUmpeijRF9eAHksi3WG1cWnTNkHXgGn67kskniZgPDJ5AKa",
  "key15": "5gkULDXTHvd62H6836m7ffAw2bgrQ2N7xiu8k8BXvJbqmWQLQVKUkkewm11TLpY3AZK1uDom9rYY8gdqNavnYZyn",
  "key16": "53YDGWbXQgxNA3nL7HAKmGEAPGD2Uyo2QGvEBaTuCzxC7mAGEgJ8JGNcuq8UM2fWwvP85LaHPrHTvBczah8zsoqz",
  "key17": "aq9ehYrrjvdtHt93FTMjEXsmvYqjGFm2QuKS6w4qu9D2o8uoS7at4VE1jMrBb78S6Ag24zuHu9erbF96QpL1o9M",
  "key18": "5GxiKUxsUB7NuLDpsiFkvdNmJEEWi2VTuiMZNSws5AVEgB4Z4zstFTNK6Y7bihipJhiUSdVXzL3ajF2GhmmUaVnV",
  "key19": "2CPykR56HPa7SPuF1jZhbGRwtGGov2AtHFV8jpbm52mWkwFNE3YmHgRnifx8dKiDViafAjBSnUk6eQjo75dsZmQJ",
  "key20": "24UTvpBeWkctYCQX9Q8tZ5fPDJY8qimPtziUpuiqBQ8m86GWi3KnxiJeEvqQFXMo1aGkFQCBt4qJuefANQypnbxj",
  "key21": "5SHqWn4GXUhRi1jrzZ7mSNfc2SJ4KNS3aWw3McnYSKLJtdk3fzE4uwWj5kbg8y7cNGmZZr3otJrqQFpMFWtta7J6",
  "key22": "4EQfszXSRRQ9xUKAE7mtgF1BqAcA2BQi9SwK34vq2RhaJvtkgSWJ7CnPeDY9HEvvEZJ144QNj7x5apnRb65XFyGj",
  "key23": "45rtDPD33mdEc5zsYEAoPungh9E8SLp6xQ2wu6HQq6tjdQRVaxTKCiLjkt91wqhWniGisAPQu66DSNssUdy8FuJk",
  "key24": "3pLYDjiD625yCSKGsxzJEJrjeKn4bQ3m5RpmiHFejSrt4UZBkawvpqnPBjLkSDvXVtsvmLvmFSW6o5itCaW2zX61",
  "key25": "4YPngybrWKhpmpLDGJU9TPzRe8Ur5HvEE4NW3SnurifoPX8XhE4ogRYeuVg2KTWtg4mEZbcGoJeqFmqUzBWLs2Tj",
  "key26": "GqLfT6XsDsnVKGHaRykpgVaQ7K6A83AGwcNrQeG1XSkpt8xDfp8S3gavzim1eX6QSvn6gas8ogC9uALDKRrqbNU",
  "key27": "2gJZwtiy1HeUCHi14d7JRFpm4PS5jqjq6wzkMTXioCYVbQaLwfVXKaoLah8nXR4xS2a3phiTzGb6JXcD15REQaBD",
  "key28": "97uV2s91stc5crfiufdscDhqtpGH69GSnUfHgJvbMLWa2qPdCPkQnyPLJmK8mxA9gft7wkMWBMVYpt8DH11TkYr",
  "key29": "TN8brz2AobKi7N349w7oYJZSN9PJCmqpu9uwAyKo6ovErkjki4Kdbdc6YGpjw2Bcr4WnpSvZodotWpmK8ofUDkL",
  "key30": "4qaYEg32ESppZ3akLatCRt7B5WVY7isTiZkgmG7xVBg6cHP4zmEgk4FxU9LGbWysjiZi464KyMbP8yVQmXeNtAk2",
  "key31": "462m83tpSP6UjZk58hophBLj9tYL4xHuYVMLqyohW4vSy8hvoEFXpJfv9hmQi1Nod8776hsYvhHYovp2nDuogwNy",
  "key32": "58NAJyRd9JTgzjo6ocXxaaGTTsjtLFUD6SqwunKCWEoHhV655iSqEB5FRsAmzbFgLMttQAkAsfvh9GdmtKpFLu2e",
  "key33": "3PqF3ruSTZvFp3ApTHqiBhBKAULpj8PEnRypc4gTgdLPpzYAscvuG91m6f4P1DobhNuJXTDWoNjzv9p8UFLnrZSR",
  "key34": "n8MzjkuK1FmwttLGpmKwGH6JL8tejYGe395p8SL3WrRiN3D9z3UvNz3Mu54EftBsC4sMsDw2q7J4iy1nbnCTfzc",
  "key35": "31jexjvHtd2TVhuaYea6y6nRmrzGwvwkN7bpiDThWAKGHx8aFx8nx8J2rexvKdSKimVZ5codvSR9cjWAa2NTghd8",
  "key36": "3Knj26kqgUEa7vEtm3JfktrPcpYjMTpVRcgN1JsJ7icLnCyvpcUF9MxmLjcDfCgiyNs7AbsA2QUyephpgc8W7eYw",
  "key37": "3G6ffB6MjFv3AFeS7LoyScr6pTn84Bf5KsZBGnMu1unav49bP42BsqMEvoy2p5EdkewDAMB8KNJHvCHMmekP3Ypg"
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
