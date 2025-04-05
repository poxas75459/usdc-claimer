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
    "FeUKbwp9vMfQ79JtcYCeuvpBYpgQ1EWTHnwEnnpQCSx5yrAwT2yH74bR4V5qpudhHe8bVi6io9ANXn3Yi6pB7Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yj7NCG2GhhGJE3ZZcy9bCCbmgWxguqkHKykJ9t7UZCW279Fq9hsuGWhawe5yc1wUXj2YbbYGFgy9tvjHxdNWhEM",
  "key1": "5YemHPHJudjkiTTiSie6QzLQtTzFfk1SsX9HroP2sXjwKWkS8U8cbjaNGe2M5RYmm3fhuf8TBf3QSdCZYtMRJ6SZ",
  "key2": "5ATRuuXhKJguqkdk3yXekV1x87um98Bu2VtKJVdzGH6X998wD5qW82BZgzUpoZwxWUJQru5yr1beSuiTxTm9S4kf",
  "key3": "5MeeBe4NCyv5JerSvzkLxopRdsr17uboUFozWfj3CoHPXRF1BRs2wnRKP1kBB8tpr7ssmYUNRoxrnczA5nsndo1P",
  "key4": "4fGrEbHpGEz68THtXmDufcAt7131JoE93YjZbZwnmVQQwmo4rL4Q5DXgwE4u5igCyXFoSiuCDpgDofkCSkCG6qGm",
  "key5": "3Lp8Xx3Lrb28qeUJQgTED8VzSqEXnbqA5uLXNyApS5XoJiWbBhD24tzVVrKTVWcMSX9kPpDmtf6vSjT3p9h3k2KD",
  "key6": "4wqs9rVws5CfhBQB9jCbhsv5kKnEfvJGBjGgYYnsWswaMB4qePQ2MrvmayHjcsWT6TqAgvFrHgcbRagf7wFzyC9t",
  "key7": "37qxZ8DBY8wWnuUnd1w2BCGXQ1GRcjWsPrDetpoWFdjDKqkckTqFQDqq4YawyiywaHoFFkAFVBtFaSDkUix9xntC",
  "key8": "24MeYiKMJjioicTXbQBcX8Ay7FmmKo1MY8V9bkEhGbM8XzJ7ZRL2u7cQA6cHRJZhLpgV3AnUU3zYKkxDJvVAjYAK",
  "key9": "5XEsDuGD2DzuDse7Euj3Werhts1fNGxcpg32ZBDLYCVzfhZEL4RFvg6zTXcg1hLNgXt6Bq1zMy6zwyfPjDiqvhd4",
  "key10": "4WKfEkEnMuf2b8TF1B4hspVxC7mTqdte27KvLshdqn6xd76A82fq33VPjTFg9a8Wyk4NuqpfqoVYafpC75TxgZEB",
  "key11": "5ZwnRMakahgPTZpXyHH6QgDbPgVq3yhFTchNuFkPccu7LAEUDNbd1UJBfsWtHS3JZ9FzTjb6xu5KXautM4xkrhD3",
  "key12": "41sKWJiMZktZVZbYFVqFY9j6uxdyBNGFFcocWYs5hHyZRLnsyrfnUTFt9kweDj9aJ9siHT4JPKf1W1o9JHL6rNmU",
  "key13": "534ECd9sS2zu6VDrowY4NQyCbcNsSw6x9E8qD9VBZ4BxnP6v315XNWTAkoVq6H86CSqLTCYF9FPuF3g2UxebHEF7",
  "key14": "3gDyJc8n8AYdGNNwQcQUVKL3bNYz8zkLhP93K9rt55G1FvmPBKRLF7Ka7MGZ4KKX9AQtUGtstQxcirwub49tP6vK",
  "key15": "4SzNDxRdFVnMxiFmanJqTi7QEt7mY6j2A8FoLm5m8umvjdrmBzAF6drwridTrqC8V3zkp4TBW217opS6GUJM11JD",
  "key16": "3BSByH1uyKXiGNnWWZTWREaGuzjmfocXB8HpiNvt3SaQtd7fmz54W6duvgYgUcZCSwAyQd5QgkyhiZ5k9kwi5PbT",
  "key17": "37SoZmgk4HPMGmLhj1QzESVxNV2zwqd2tcyt483YXiGWi9wTQrcLRpwDft34mARux9Ses3PywxbBbuxeQh99ZfyG",
  "key18": "5GUWCTsT7gSKrHJVoYa5FtL8XYJZyZYySgvG1gQaBpipdRDdhJ8G4scpZ8M6Y89YoMcda8tk65GkgVWYebYB89y6",
  "key19": "5Zexa7zgksy7PkgwVkbRahjEMavQFR7j5PMnAtJorFSyxoWencQShGZcBkaUtP9gHXU7ZcR7RkZ3EU4A3wEWRhV3",
  "key20": "4gAuSULbrG2fmEumjhnDZJfpgef3H5wZMvdzePKn4eW13XRSYLbJ9cjCasK46ydvMvf7HZwsXgBPJyCKdV5JK47f",
  "key21": "2Y8swncZVADMb4g35uQ5biRKJKPngWTYSNmqZqBUwSSQcrAi9KZhPjkBUevwfnzArrXU7Yw6d4nY65hcgMPBYiD1",
  "key22": "3e1GDt3pWGzhRswTKNgQP8TSSKc6xsvWubNWb99T58ihf8VjkPFfhMuHMNvbasWLES7ZgB8HVzrNstYmMwtM5ohR",
  "key23": "JBoHHbqL8Xhv7tDkN3xrXidoy1eYDfEu1ySB2rnogT5n5P1NLnAxDLFNEzLwe4uoWi65HR1ebgCnLr9buTp2bok",
  "key24": "583uYm57PvWKjkVzEhZvJtnRk71GQU9dkutjwTsDXPs7A61Jzq44zEvQDUaYgs4AY8AuMgqoE5sfgCqrT3zVyaub",
  "key25": "59fPdGzU24k45GuppM4goYFeLUJDoKQ75F3iGtKBWnUEda5LUwFdsNPvnvYC1rv5TUAZWzkeNTTPzqHhrc1G3zfP",
  "key26": "4jyqZZ9jiZvZ9naQFvRdJ17q2yoUp1tN4wcSFPhXs68MkCywSRji3e33ER2tmL4HgW8ENTFVMYrhWomH3wTjp5ep",
  "key27": "5jmz9KKyExZ93YVAEk1EdaWoq48TJApSN37XPnkYUrw86N6fR3HwJA7FAeNwRQ8gdPEsbgXCMEDiy3YEsvMKHs6j",
  "key28": "d5cAN6kGKRjFJC1qTcogZRwdcbfUFzSAwgcGwe2HBVZNSW6Xoj1PrTJ4FyxkbQftBNuYGb2NTeLWRJJ9oxi8r5V",
  "key29": "RtTSAUqGwFVhtJRMH93bmiZBD4H1nyXP9rCWerpoXMcpgrqXsRwuC55e2o9mz7WybrzT3XJy8SXrWMuADMP9h52",
  "key30": "48DoczoPHHAoR8YVtWCxD9UjJupNUtBEJvtD7fvCvckPonrCFuMSjydWiAXUejL73vWbWQKjAtuh7vpUYXJQbjuN",
  "key31": "657gGjH7cpdSaeCPUXpMDG2NYDDiVTnkAEQz5g3yhptmPLgQLpzAmtXNwx9c2Ndp5KgSJhmywJC3joUG9fp6VUsD",
  "key32": "2BARSr67T4zmmwJ95qZ2V6V4EBpM5Y859apHAAvv6QLMPhZGKuUHanZkuoL1XHawRmTsL5E3gywKhzUNb4tqwoSz",
  "key33": "5HzhHvqbMd52jHNdh2EPgniWyUu1J4j8jaQrnUQAz8SY7w2MYkLCpWCDo2ZBbLBCyRFSwbxjguP4MKcg8GFRdb4D",
  "key34": "27ru6h6gbHwVb1sBJ5B6dF9TPEvckfbN2KhrZ7os9zDdxakAotmonvfEj1BTJXmup8Wn8MMd3mwdA9hTMiuS5pLX",
  "key35": "5f1uhSkJqRnmTEXor3ksNGq69fMtrEnmCfdHJb1HfPGAFKSjF1BqHjQsai6NW3GgBoGMGD9tGqFNNVxh7RRoemaF",
  "key36": "4xZEH2ygKdWrHRtGzosbrWUNwmMmRcLamJesd5H254GGWWs6sAvyHxUdT8z4TjYwTmHWkZqFyFHL1frSBeNu7hFg",
  "key37": "S3vSdn5HhW27GYKrxiP6kjoKFacrGf5arMAzV4EdV5uSRH3N5HXJs9XJA9NKzz4Z8eAhk5beXWpD1BrDqYmYwtd",
  "key38": "4bWFo2jP9bHY8A542g2Ev6BNpMfQjMo9Pi4Bzu4b9kWhTdQKizyUoB7CC94haZ19gcxJpd3hAceMVAbWfmzXbiLQ"
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
