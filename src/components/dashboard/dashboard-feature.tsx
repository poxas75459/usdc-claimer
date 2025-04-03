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
    "3U9yJEpPtqJLZJyk9JDjwdd9u1tPc4zXVEwD37TmM2yRHpjfyYTM9f9Dkx1rEgGg64ryhRqqkXyLR52gP2mEnbT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPD9bpskVbJqypQpkSiU3zG7R6YQXg12RQhAKhKxaqAG7baknLWFe8MfgLj3aGRBfaEjReaq7ELSAvhZbJikKZ1",
  "key1": "51ksrXsWRr6rQVjLi25ruyoZRR6UhP7uFkGFPzrNAfQMovYgnoXucDiN51tZGoJveCKayHLh7L1pFpn1AP6VjX93",
  "key2": "kTK2UJCEN5ExwQstQ9b2Np1hWauLWxFzSSLJtMCDJs7B56R8gHYwnJaFJpbuWLgQftSVLF6rJEjQWuZm6Rs6xLu",
  "key3": "21xgqbMAvDvnKAG6Hr1GPqzPu65VJ1cc4BPer4NWyBLBmF1qWRb5e5GpgD1R9B9jY2KKaVeegfrdRH1e1SiYKP6s",
  "key4": "5MrkvYe497XweCgUboqdFuZMf6qL75vFwZijhSX1CtT1ppA6efp8LSszaVn7Pxi7J6PuuufTtSzSwf4vLCa6MTMC",
  "key5": "2Kgb7nDkT4RB3cA9Pzaqh5dNKQYDKvD7Uq7TgtRa8BuQsnx3Xt8XPHsWKTxjo6sckkVnU5vXDHkPunw4gDYjToYV",
  "key6": "2rH5Fhk3yba4b8NBjNqhtPE4dA2weVP5c6YBSCZksszudd4jxKJupDpjNwrtxJ8qJtedkWYVAUV2zWCTRY47XZUt",
  "key7": "4urskmUQcNfmnNgQVmY1qnFTK9PrboxJLzJKwfMjDTXTD61oymhZDrcFtU1RT9iBgcAkSSTuH4BJjoTptwnGjaP7",
  "key8": "Bi9UdiY2tQ3wPz6QWZPXcbkvTGPq4eU5NgNf1V9wYaJEGc9zmnd2x7kGu6wA3KGgAkMpjD6VCxnStPXDqVmQoyN",
  "key9": "5r7q1KP56NGz5cvpdVe9GFtaqy2jZNeNU7sJRukmPhz2yeFrhnfJf8PRjpejbZtnJBZR2zuNL3zg25de78ym5aUy",
  "key10": "36yixqBDZSTL6xoSFNd77zrirvkybf7hgMqBqaAf3cC6Q7B7VxVYZrYVG74hKuFE7VTXK8DiRAxZUgUZYjSzAvm2",
  "key11": "5buxRXUjXwvdBkucSJxauHrChuyRGGbNpaiKrmMbb5jZvWgQ9TnjfbNKaG6dw6TMzzVMr4DQNAeXdqNomoTLUJsB",
  "key12": "xMtDriEwGJks2dcwGe9BV5y3yqmeSAFdd2cJF6KnFWtAQ83tKNRHVVW5JXvSXTeC6fQjZRmV2VFrWV3wWSVoB3f",
  "key13": "3E4r5SSyE49bxhxkR7PegfmkZRSWBTYFBKjtWqSDxWWk8f8P1YfbeWeE1oW9v6uPtPjBHs5y6Vnok4Ya8uZhQ4Ja",
  "key14": "4z15KAq69nnDMQhMi3AgvmTeHs5iRyE294kHikJvosxA1gixFsPv2ivxk6qnY7FmGveX386mug4p6xmiB6ChUwwG",
  "key15": "5hX1NDmuTKKNoZsxtuhjA7PYsujFmVLMwAwawcVsJoym3yvcF3vgv7mkABA2acYw85NnsVWtwztx3bbJrhwm6zDT",
  "key16": "4MghxQXbPJnW3TPMN9CPGs6RBe8n9Z26J9cKrsEfeLrTH95TaHTCUbt3BKCpQSuVenEX3cjTgTq28dMWT85eiKG",
  "key17": "3aQASWPp1sexBfE6bi2fSLko9zXPipf9Ewv23yYG17wyVp1QetVmBimaHbNgRDnJr5nTD1ngdqJ64LMgcxUsvYVv",
  "key18": "qECTorLdPH6hHXqWP7RsfLLjR2U47aobMbdBLzsFNEPZd35DJ62SVMhSuGNAFoJngEzehEULJDBfd8vsMs7Tn51",
  "key19": "3nNoZ3Mgbk6Lyb8QCGq45hdSZyWdJhjJvKzGqBauuqAEGj6VMnuftitMetTkVdb662Gfu137Qvw3tJ6tnS9PSnqs",
  "key20": "j45QKKpGt8wRt5TfEhFQWGUB3UbY4bVZ99sRvmr9sJ9snNzL5SDB6Vbw4zdMwPBhLj7SBp5KP5vB4FW89jmWUmv",
  "key21": "4w6LCPQvN21M8g3FxFVcxPFkZNUL9931mrXi9oGY6XGwLyqZNDKsa8zZh134JUSZMxzVbFFBVtoCAm9SGXf3raJ6",
  "key22": "3KcqpabD1Smdin6kBUKFdXKEoxCac1cNdRngbdin4yy2R3Liy39S4Z9gswNQSJnsA2Gfd34RaUSrTCBMFeynyWXP",
  "key23": "49xExeP9zeB7XEAmbuEEjgLFXXFjBUmvYEw5tr666cShuZVL45k7LxarQT8pQzGyq4uoxjm3E2tdaD7KYRUhWMHx",
  "key24": "3M3eN7cQSJeEZ2WqvBXRsFNXWkKiso1P5avBJPXLFUWEAPboPvi1ddeCfiUsidCJWQmRHpYQipPPmPSn94hHx4mL",
  "key25": "5tFiw6kNMg3RXW6JeBxzB4QdtJ9MeZTvTfarQKUCqFXo6z5918ypbzsoE9iTPRrhJHybZZpodFBjmxvxnbpz2vYm",
  "key26": "6pv84mxKg8NrS8XbxqAmT4s5EEvkbGuZFyPeDTHqyUpiQfETUz2hKSTAiJ8jXAm9qsrB3LzTZxM1nDsHjATupQM",
  "key27": "26g8xwNKoknC3fQxjJ6PUVCwd4yZpcBcaqKAvNVgnDzsR6ciKcR6vThyotqXWsBMked3HFYhdLmKqCjbjm2xzbps",
  "key28": "2HWw2wZy4JNVdHdmQzE3getn2D7XzVjMBYbmHUhYdSVLxP2CV55CtWDu2uwJgC1u8bwUTthvwthkiQzoqQXtbjbE",
  "key29": "3D2LKYvehCJVC6vcmq1h6QJKsCY2eZXHKRvMADi83eqMqSidCNCeRSL7zKgtKPusfAvS1gRw44g3u9MyqnC9zW2G",
  "key30": "5Pxn3PFTN9ADw9SSHUZ9e2kA3F4CVSNEKYkaBx6zW7Q7jrZcDfWZ4fCKDdp79s8iDMMWLsYrARvuW4GmG5kHYkRa",
  "key31": "p5NtWoGuQfqofnaAX2AVgY4BrMyzfx1p5JKt8odUoVeKBR1ZXZjewPLABfQNZqNUPmYvcNqTCsBpnZGZRCeaNQj",
  "key32": "3fAUpC5LaLQeX1EeR1rJ7XxAXWGVSqyqQCijTACFPUCRQWDEb4H7wjMbbQA1mxPNzvB3aSK3TF1RKrUS6S6nDFk6",
  "key33": "57VqQb9bSJHHautK6NEEYYMvEunNjvHpi7VNbQ8K9ph5VjjTWpHf1T7YYDDXJhKMJuFByRsy9DwYpZzRn7jBnaPk",
  "key34": "3AZj5LxUcvwPHy7sb8QxiTGqVnEwLJ1uGxzYSbyM4tk6mLKcWBmJzdVCiHPZSQAbVUkNjzu8JorYorjGN9fMv2Fu",
  "key35": "5XhZT9kB7ndhh6qAsaqwunEeNFbD9RjBHViohuzJGvPH8n525netd3Wed9Lm4x68r5Lr7iSEqA3K79QPrDUMApoW",
  "key36": "3m7xnEywtMPhyaBKA6ev1qnitmxTAnyFeos6rVgbrTABXb8a2JEiaNEbBbKayXFWWApPzbfpPGu5rqtihWXA2k63",
  "key37": "UeskV9sa7XrQ4tdJdnhxmTh1joTvXJanBX6EFQhYQPLT9M5QDbUAbU2nLfA5RSbaPMnC1AYEwrxZiYC1U9z2MGy",
  "key38": "33MxJ8kofAkCpSwh4JTonz4q1UYFFrN1VJJGS4oNriaM4RZs8oMgxKs8izNHuoUbSRfRiLJvUpLcz4F8QoMKReFn",
  "key39": "3vCiq3kP6otTYWL5hyE3nxTBBo4HGz4eTHGhb1LchgH7LDiZ77z1taYbRcY1iXYNERiAHzdUBJifYXyj1XXTuZ93",
  "key40": "2kJVaURyuRtd5n5BTuG8W9JqnHAnSVEfWnaojWqLAxR5rbwNBbsDi2pj13VdUJCDzuSCc7dzvpg1nWDE71ZtWzVG",
  "key41": "63Abm9bfn7Yuo9LWqr2KHuXseD1uMBKJVwas8q3mwmcpzDy8HoKBnVqR7nv1vPs3Sr25SDYn1FWMAwqULq2oGLXd"
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
