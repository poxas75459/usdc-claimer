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
    "4PyRVk3oRQH8Ay2uM82sEVsweQCRC5tEA84WhZ5M95sUXdEq1cKtrm1WTcLAGsiig2imk6ykdH4tcJVkxfhr5c13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJ718qxAFY8Bs9rwTb7B6CRde6rjopGNLeUqXb1gPR7S6H5SbkzCPYFLJutCbeBTR1ndtaYxwDmAyUCMajDLNzt",
  "key1": "3s2hSzXcGW9Sgmc3pCXqkUFXNcoHNvrt63pfGcoWhmAZhrZQAbBXVTPiKDqcEGiKazobnXfAAptd9Y2mLGxcFBmU",
  "key2": "2eWy8bnee79LSdmEQwoFHPtXdH5eyRgcRi2mxxtb8UmwAzpejzaooJgaAoYwpooFepY59HYZiqsXCKSmFTGXbowT",
  "key3": "4TQu7cm9XMYPXjBshiVwZeoc8rCLoKA5s3z3BpRe3oLLeUKGGjSvGR3cJBYhwXcqYZkVW14mSErD6UR8kmb5dYRy",
  "key4": "47wQWLevcaD18mpqgu4nKBVx1vcZomSip7XpWR4f9BEKUyoQ48HaQeWAmdUcMToU9reA331SzMbTN7w2pY6SqvJu",
  "key5": "2Sj8bZmwziUzMvSiJVyFrZzpAiaSxurhoobQfDJ7cSURotHQukriXpg48jFPNwxRcEHTxp4FcTc17N4vtvyiUjZQ",
  "key6": "4rjFSAsZKc5tiMas6YSbDhzkCHWh9omGjuS88zebFyVA6Frh5ksmyxLmXmm4rAoEW9BsQvsVcd1HMQitQfLLpu1g",
  "key7": "3gYrCG6P7abraUSdtbdr3TjujHsJuVBcNshYcfAbFDzkfoqaECoF1FQsTmuMy6VwVJP3c1nXun1KYhzyHm3SuoFt",
  "key8": "2VkBduozDc8qGzufAcpCVTr2GS38iKSaoPi8eBfBFwBedLyeUZMwjNGr3oyc7NkJdMEmHuXgA1gHsryP15pqBRAa",
  "key9": "FAW1Z6Ts4GM3a75HPDsWusqmYiKrQwFoZKhPr6yLomwWdYoGnNoiNuanaXmBKGry2zNv5WcYRjHpeba3epcZ8LM",
  "key10": "2suDVkPLhsN1HmgmYJBAWTV7CwTf4uHS2Y1BQXxkBZQB4BsArJd4P11PZdETaSDzJuXur2cyPGYoKia8hhUhL3Ht",
  "key11": "46ttQ89HeJDyDjEmTmchDCQNrbcSGfU6zUDL2Pd8bEVrTo2qfUxNkk9WrdfbKsQt2B2JWBukgQsM3cRAcBN7Daoc",
  "key12": "mzy1pPTEKfmpJpt7YFFxrinPMCeXuAHJe6tuE56XLqhAEJydRckAGT8ecVQmKqbAQq1kQMXNWbZUhmcFLVxhA9r",
  "key13": "5B4RNojiz5GedHw6ynH7tAbt6xFQ7rWLMTTgUhGk7iiForjYXJRBaZWyckX9bJysHQvc2rPM4Z4cpAcqmBXgzH3M",
  "key14": "45W8NdWX5ftwCixHxyKuJKoyZfvsMv7YRq8kQYYUqzapjjXoCxoyBvHri3JkW2t825JYiLyH4BUzwrE2guhn5ah",
  "key15": "3op4dCka3nGWsL4KXEu9UQAewsB9EZQBdFdJMMpQ2LM5EtA36NKZvNgFu3rQ1qMwoUZtkMLpLhtxns2AXghFFUwk",
  "key16": "3nCU1xnk4inoCeSeR4P5MzMhbsMLW2Cct8xyYm9d8396Aav2qmZGx8kePhrgYW2TABCKgDokVHc6rkx4GX9dMyry",
  "key17": "2tXNf8i9kECm7d9g9XDNWgMpXi5sT9cEnphDHcR596CVpqqCzNXUFyDQFAq6cAwoQxz8FDKkH7GucrN7N3DcLdor",
  "key18": "5gLs41erXDLMzShQaMxRAwJUQ1ZRL1Ys4z2WojP1CdnJJuxyzrshwL3GKm3dsZSpW9RjKGELf89XaQtn81qpy4M7",
  "key19": "2QwVmnTi4ZavPbUMnu5QGZSq916i7FtQqjVhmaxwyW8LMScaD7VTZxgfKunwB75ksZujVo8PMkaUUReSwrvQYwVd",
  "key20": "3WwWomm3yfcJuQwD9qFUQabC9uaBkGsusVgPPPpySfLLmmGLMhiKd9La1ATdDUrhfXKHpMRqxCzgZ1dtNpnKmSwh",
  "key21": "3NgAe84Q4tHjrJFt8niCovF7L7ghN5EbSbNthmEN7beJXG5QGZXGcq1QxAASi9zCKn3sFxDycZvVHSghDyS9htoK",
  "key22": "2RDRzXzR1QDP1VfGC3z9cUCJPzrC5YQz1YDPna9rVdLt7aEgwPeKk9sf3D4pji3BzCxCR3NAnvBz4YmJDW5aKb1f",
  "key23": "RQP4wxUortfRSKtpiXQd5abnsqsYRnAWMAkZbvb2Yxs4q3jv4eRAUZuE2zmxmfXXyDztM4bzaoSLPKB9VL2sBmv",
  "key24": "uv6hmAjvFJ1YNrCVA7DaikJcsKsDTuARYFCxkyPnutD1SxUcDigyZzhUBrsUkq8GkNcAmjShGFccDdy2LiAwvuV",
  "key25": "CrDzVgTtobueKmzKnpG7o84bPoQNcF8DDdDy5npyghSMv24WLTX3oQYUfNEcKftRCUhZijML553vGMH65A3BXJV",
  "key26": "5omMUxTWZmsJMmik9HhF9B2RKMdhBwbWFWL4xYv8GN5GfGF3KdQhQ7487Y5x8XnrL1k89mCeuCqmuY81rCszZitJ",
  "key27": "3SdTRuo2fwR1GknJvBj8UA5D88LoPMA2Z4XSrko5RfyADke6dgNCcATtEktYNTAo5z8D5gBnQmK59dSUfwqzUege",
  "key28": "q8sa1ehfF4bqDpMjUtTbiKcpVtn7YGn9vMVvnDYMXeyLDo33qZJnXzKgmDDwNhCYwzASPLtgpUM8bMj45sUdaXM",
  "key29": "3NHGGLmUCvKRxV3zawtzcm1gvkRVuQhWUDtK6gvxRmHsPHTZx7GozC6V5NzmpBfqrZNVu4PAHEpPo7DXiuWAKaS7",
  "key30": "fLpGkrHbYP3BGT3tQzvWcH2c96Su1rbTmH1gmk4FTWZhBwvNoRfaQ8cq1sAT8qTtZ7SDMAcw9EY9JmpCeSgHGVE",
  "key31": "3Ydmmknx5qTmbFBtfbfu9LzN5tHTffbwvftXZPsrKqxuQcdKKqaaf6iLhC7FBb4QpWsrPLPSBRby6y4UCVFj1pgL",
  "key32": "3f4uBKE66RAXi5PDUhDey9Yrpi8CxJzhqzNE1rQHJ4FGgjSxcx31oZaCTWDPXkJjnZPjdHniJQGoni6bfXGanPbs",
  "key33": "4SuWom8quQCxBA5XKkbRSG8tBVsUUTf6r2VTwLnzCLSUspVuMcJcWRWmA1qHwxgRzN5o75rxrht5knzBSt5ias3g",
  "key34": "3SKKJ3pdcmk2cJpFP7LEDDt3hKmz3f4wzeAHas8H9ZrwgSqvGgozMfXYjnbHwEzenCCq5FkHogLGQcJLrmd7qXwW",
  "key35": "3kKoy5F5kgKJTLA6s3mUvLbrn1bATCAoGNejSLHeEnWnTLtiQ5NmgyVZe52ckoLyBJSetajGdPyMFM7RPYXYuZic",
  "key36": "2iutkXZCPi8D1hd8XCbEEjmQKYZHG6cJEqp8Fex6bUpJtDziHxY6A5nNd9zuf5v7CvYMKGN6cfXBoaaePcE1gZKZ",
  "key37": "5sy8jteegMZLK61h8Fof8S8KfhSygEL23GTN9dVamqWQvSWqgJzfu5TX4Sq8HJB3WG5nBW7XV96f5JvYdArAr2zb",
  "key38": "5LRLfQYsqbS8tSZupu9rzXavrwFUnhmycMM5z3drXncVQs2ySzHGgFHu9kEd1BomDknDxDnNrPTy1nVHikMRQuUW",
  "key39": "2s1Vio9WWNBP427xCrcsqFWSDvGSdsVALQhYppAXgHe5LEgagRg9QUQyX92cVHvMKYYbr2HmAk6U3Fvi4CCixkK3",
  "key40": "UrnJtnMJSsP2auDaQBJJsRxqvm6hXjAokrWzHf8jVTxZdniQCcZB4nFTW7iEBfmZrnNoHToHe8KhndF5ELjNrtU",
  "key41": "5p1ZhZ2BSnHzHwv1sMwJxLqAkMuDrZFTTBuceirDSmmnQC8iRUe2VAk9Eovp7h2b7YN9AcfBkkEZnbPNDSwjmPXP",
  "key42": "34BJYA9fWL2aGom1T4SbCc7YAC3pfuu5UdLfb8SkW3rGLYXmeprPuXTf5qiyswMfddscu8RoXfh8EWeE3W9ZKNwH",
  "key43": "4nPfZoihWB3LgtnjSKxVmwxhcdAraHTssbH5paSJzZewbKEcKP831LiBR3z7C4XoQptX5685H46ZHYTZKMwwf1xV",
  "key44": "2uC6gvL112iHzW8CguBMbvq3m73kur5SKzFAbbwoBTNkpCj5p8Gu1PCRvH7xvxNtoW1tSZQS1nPzGEzLB7it9Nmj",
  "key45": "2AETVjLTvFH7hnggA2kHu12XusXkFucH9pSswXWHt54RDdjMGCHnxopM9xMELa4PowmhVdg7a5fSRwwGbr2mrxxf",
  "key46": "2ZBrHosfzCi1nafjyJG4VYtu9b1KX7iThEGPLv2NruE1pDmfMgvMa7pRTKZKyuCYRDUUm17YEktRkgDzi2UPhZwb",
  "key47": "643iYpBvyRdF5NmedpMrMMM3nPcHPD2LsXZCWPPPTN4QLnF1sJbpzkGPCUsfVtH9EGKqTP5jbh3Zg4WNCDwcuiZs",
  "key48": "3Ghjpdqn4gzcPKX4p9UnzP961udJvp8fxKfxKRemQR9zeyY2jKFxUDKY8pakPhoDDb7RyKMRvWSijfXngnkzDUMk",
  "key49": "3sAw4qTM2twCnoNvtUp2yz8PDMY3GfvyTT9UzbfZ6VL3i6wjWrxsSkVzaZMmwM2g98tH6xFgw3Qj3Y4PaMxcZyGb"
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
