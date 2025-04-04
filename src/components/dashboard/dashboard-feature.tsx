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
    "2h8gW3zJi2YfTWpxr163joaPr6J5rwxi2fNwt6n1vFv6AnMtXTCXynqHQW9UCoA4DdQcqHBpncE66PyTDb9LtXim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMHvEvwsPhGsbJ37dW8vb7GifUyhz5ivSWoUdCvDtX8AqCwdk7AJp2Xgri7KvZzfyFR56tvA6x2jjuoqwMdCQZq",
  "key1": "3rZoz8LjepQC8qA7ErGTPC58iK1FK4bMQQZacb6QWZ6WRiX8r6VmLhCptJca1DxsPZPoqfKhqKv1YzMiD3bVp3xg",
  "key2": "2K39Pppq7L8Un8LAYBaWH7GZKnKnXUfbwqUYngwktbBfnmikueAcvLLAUPFa4rjRtv5AibWXQ7tCxj2i8bGLLUca",
  "key3": "427MoXfL2JSNXaPcJyGXbDphniTHjzVuwGKB3hV5v9rGDvQEQ4Xt7UubXxAYhWN3acQAfbf393Mk6XKqhmDu8cJT",
  "key4": "2jYg7WMzpTvLxSB7JMvkE7J13xgAYwSith3bKVfAZQ438ZRxfcZdW3Phh5CHD97P8ewhjwLpPaEd8zEv4LWrF4vQ",
  "key5": "28UK3farUMupJUrPAxrQRLso4HH7xJUqhW3jpwXVnb7pDyrMZUwXMAQ2koH8ikGNsA7rJ9vcAYVLrwJsgYmsvYPE",
  "key6": "3sKT8v8Prc398AvEBVpiGGzYXSqF7DHiTS9Pj65eKsRTi53wizqVYsr6u3pEowybQsjC9cGUqV7uhawDTRU68Zra",
  "key7": "RGMbQGZvSPC13jzyqddQTDxH3mW2hhVWrdqaaeG6SB93NXA864hREdAz37outgALRhWFk5EX9QLXEtnfiyj7YCn",
  "key8": "5whkgzYBSq8y5SK6NPqWn1a6qQmJBfj8EfuWn9N58wxqZdQDbc8RmKiYjVZcWzcZkktYUYse9dLUtGHzv7d6Qdw5",
  "key9": "4CQ1YL5s31RXEuYwYoL9Lgqxx18ZERWQQx8CWpMmBhpuJTfWufcdt3MbKbyKQajdiJfZcZD4S995TpnTjbBiQjbS",
  "key10": "34vGaiUSuJrE1eEswVoQWW1PefofCGPuc7rLkaZ56HYWTxcTnXe5bemmK44ZZLgUxUNf8AHrqKJ6tuwP8KYEdbC8",
  "key11": "3JfZx4Uyvs9WHnMEXXdwbFu15ntj6ejqodXvcyUnH6BJEhzrAKH3BXYSSMhJT7aZf4EBdrTJApTXYiTJJzKCzGyU",
  "key12": "5wHXMdeu6AZvPtzBhbTBU9k4sX6K2GWJSVbbPpCAdV71pArC3NbPzWW6NPq3ZQs1Aak5Qj254H2ZHEXS6XmQ8vQL",
  "key13": "4zrNbUHTzWkywkmNAXSqgg8MfuUffpcMauCEWPK9XvqHAENbHZ4Fu11rChRfxNyeyb3CtUQs9iuGCjokLT4SDyrY",
  "key14": "3H66Mw7iC1D9NdoqF9vtBP7vmn8TCksN7mdegUiRjAYmqQvxysd6187c1Z5zL1QAHWgcAnkAazVVuqtKh3tZnHLL",
  "key15": "5ru626gtzyfpKH5dSnHngDtzEL26RBAXHSCA93GhyKcWgnVV9iFoA6UDTUaP4GiHbrFuma1mN5VMc5CQ5NAx91AN",
  "key16": "7KUr58rd2BoDB7iLTJ8ZSDE2uAU1jp7tQQYSPD5GgRu5ckvD44fHKY2utzfTmeyyMuzQUvu4vEFbpfiGe5MP9Q6",
  "key17": "39Euu6y8LUFyLVUWqf9iCYKtmrqoVELMicCqLdtm7ksADBW5YxjUmwQ2Le8t7BTWj857W36V2wV1jtLNiMbiinuy",
  "key18": "DFnHot626xbiWBEr2THB7wgWKb5bmnrkqCP8wmqtmtApJ1LhuMMZPaPT1NdNcC4ZfWxHG7ZtmBWM3dJYUEWhwe4",
  "key19": "4G3szjQksPQmNCD4u9z2d7iKdprryYLVZYhRF7tAULetNTycEL4EjU9Z5cedt83yBX1BE2LxmC8hgKiezXEP8HHb",
  "key20": "5bsgJBPWjcAaFhhwBTMNBc6jh9i1ZcuWT9pAH7Mm7UskMhxrSJBckzcW2tCFTCoGtnfzE1kfEnp1mZfXSG26yPSh",
  "key21": "kPFu1cxHGQvXbKxLtmPdgQtRHHuf2wsrCEzuiJWcez6Qz2nDFbHMwM2PwKCTs8w4wG2wYaxKo3RpCrAzeDiEcZ3",
  "key22": "2SH7QYQYYCYB6p391xUsjB6euC1RnQh1qCsSbp2aqsHo3xDPRNNybLuwjAGRHazjCshL5uB7rK1qz9JTzX5vzsAd",
  "key23": "41LZzPwXgmuDyESNRdHJinNGJgX8A7GG64qRqYvGtSecFiSganJ6xvuXSz6QBVAzNZt2wZRW6TDtu4gQW1yVRnbY",
  "key24": "323EQGnF2LRe2U1d1bhFAEiHVXB4ihn8ED3jSdm4J7ivw5jJWLrC54k8qVpZ6Xw8XtSUubuyhQGdRCzJG8TNzgkD",
  "key25": "3kmSZqLNE1dcyJXFBt9jSf2J3PJxYQ2BXxDuLj9m5CAarpTkQcykfSPk4x9SRgZcBzfnhoDVW6RzpyZBeufvoecC",
  "key26": "56uUgNnkUupJQQFBdQrZCGa6DHARzLeMKb62oRW8uNaHRsmFAcYvtDYrFUESpCmybdzcxCRaKAcMkKgwcK6ZtsZ7",
  "key27": "4PNJo35MWHkWWcVGJuaZx1fRi2FchT1kb59jtH3GaWGgegSYZA2rdK69vFsXfYfJgQtVJCFoiey5b6kgga4Us7qd",
  "key28": "Fb2xhfDqsXSWzHjXS1nZjzMsZR6kgkWjVPqxcTXUiNc8dbgKxrQ3vvSkKvcQHLxjPLSmRanDLYsK8pjnYZhSa1B",
  "key29": "33B6m5Q3FUp8Cr56oj9zeQRHXXLA8rUEAAtpns343QJzSStXwKs7c3aE1oZXDoJhmbGkLUzowYJXDoAv2598gzPv",
  "key30": "wNXdgujX82BNruhN2ctCUCWj88uHKwxJYLjFi8NF7V3ovmJUdWL2Ai8JAfioviyuS7VhnCnAdTc5PKsqWrdzQKs",
  "key31": "41PtEZyyVSbK5nmXK1QFJSfi1SjG1RBNRJvhKq2YDJ5jsnWbDVZ9iDz67teiMLw4ZKsosxHtb2WUNbVjM28rMhTc",
  "key32": "2ogC7YD1UvgW6yTtoNh5zm2cisenbyYwKo8FLbXhCMwSs3ZAx7gGM62269ZkGWqSSQwCneqbqdf4jCfozNZ37RsG",
  "key33": "2nRay2AikktCRHejMn74xEP8VRqKZvVT11A61bsQixAUHSBoAUmNUs5GuWjkNUDHKU5qnuMdGYdbFKxGuX43ydit",
  "key34": "49G9AJgvdAuH2ZpP5K1Z81mNLmrHA6YFp3DKG3Mkz837yTVkaZnUjmPU7SswmvRk3i4MtT4wjHPka1iMsLZDG8GN",
  "key35": "e4VVT6aZRWnr2rMcFP4mCr352BX4pATxUVEVxLuHDjU1VKcx5dNgTt5vTndTy6y57tpGeG2UfgpAC1Gwn63THG5",
  "key36": "2G2izCX1XCAYuaJc33zHfe9d7YAc7rLzXpoR8AqShnSNHqd11Y7AwzqYnMGLvWsBfVcHzUY5s9wjTszjnjNQLrvE",
  "key37": "53ZbZJ5duoy5r7arsgpSm4MbA2mW5UE5cvVCfVn6KT5WqKMi29kNY1PvwUfPy6Avd3RTwABVWrCHH1tuy8NuLRR1",
  "key38": "37KqAzhKHda957yfriHEYkxgAvfYkXUg32FJJticyH37F69zSLTUmmbNUSzJoqVuMAPcZN1wrwBh5YZYLE3SshcS",
  "key39": "2tFQtHrwNMPKSKwepwFAmqv8WvjJ5q9fTxQwFRD5oGj11uGBESwYN3RndrM9d2bLNk8snFQBWWfk8ibepDrYBFRe",
  "key40": "3KJdTTU6MUmZhTBbqb63q4XRUEAvau9Msy5ZvbbVaauNEpQkLh174spc2bzVg2QijD5GNe3oT6zSrUi6pkRdxEwX",
  "key41": "3uEVPaPyrFej1g2gkmEPZeLWtQmn7PekCMBr3vhNFwBNAXGfwBbGGJTXRowgZqc5WRHpj4H3VBvTjQQv1nDyxhQo"
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
