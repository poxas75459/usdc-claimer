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
    "yVobNAYJCpKTSoFQ1SkRagAVKDVvyvetuk7ej1TAFKuNVWsjMkwj5dLgUBpDXDfyDTUKKQcnQcdGi3uUgzaaku1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tb9MDLZoHMtZ388GWdnrdixFbqVWZCeHA178TcVf4jeeYLUf5jXc8iwBnbYyo4aNwjuP6VENcYULcaLjDun9PgG",
  "key1": "3u6zwMM1Zt652vRhSBSMwaApHfxGsR6n3Xa5tU3X9hN1dq5X7bSCKcHPGeCyq3FVpWb932ewsKVxN6DyPnVXhmM9",
  "key2": "3teqUmSpJUz6ekXkLVhhrTVi7KhStec6zwMFz763UG8TPamcFamxUr2QSgf3pVxPDPFvzAGvFVfVzD4ovNsaw5Vy",
  "key3": "3ehoAM8XN17x69rsynttVPATP79FbYCyEo7EK7sLd5Fm3DfhZAoL2FhSbVU8998zqNYatMYjVTaZSZD8N5dsXAjh",
  "key4": "21RvEMJzwsjppkJe9T6mwdub9YT1YPaaggy2kERRBMpiv61R1W6gQhVEGcxzStmG2KmYstFDoda6D7oH7x7cfkY9",
  "key5": "5tPVCPcfdtgbTKCXgg6JyXWFfxRpxZL4D9MUJG1HNJbNgbjc5j6Z9UFV1qthnTYT8aqHjWrnZRHa1DRkPABmANyK",
  "key6": "3kF7VbZi8PwpRehMCcyBnjf6Bx7BtFVymKjZNuMXew5aPycWdwgw9aBLot32B6Vu17aBpeWsXRuXRrBFcGwyBty8",
  "key7": "3Gask8tkAELXmy7h6aCQuRny5kKSjR3kPPzyn2aLJYsMzt7cAq7oBtwXoatG9vrAr9ne7VVusXbWwVQVgLSj77DS",
  "key8": "3qERva9WfRAR2WCrx7T5M2kbn75UcALGfh7LJ5rTSkWFXin5qjTTD1bKUBH8Fmbt75geRYGyckkUpEWueUUvKV1v",
  "key9": "N5nvGDu5ZCBjDspEX9EauPorVzj5u5YwnBePZ8EtxHrTi4JCfkahn4SWjtYKkP3thQctj6oNCM458GXyV7a87XW",
  "key10": "5W1CuvF5bkUo7RwR9JGsQUeM5tMNuCBf2bAfgmHWg2MtPv4GBS9iG6i7mXRAViWAmQfMue7Hq8XSGxaVfRpHvTkF",
  "key11": "3s7CGDdo1NKNAByS9Vg7KwyUFYyA21RPjnDN4nVkvVRX2BrWThV3oGbAZ6vE5gDhu4sWTsarj9boeZs66EdPSWyH",
  "key12": "59yiezWZiinJFaZsHxgdtnJwKVnz8ozfHe3fsSaJByJ92ferMncoJ8UKCpqDbR2WijYPEsqNDDFmbt2bHDUVCZ5Q",
  "key13": "62RXaYJJoo5d3v9inxo4CG3HxZzE1R7bNowviBuiv7B4GgA6yKYcEz5f6uCufPD9XprEaLe6LStmjJp24vQgK1mt",
  "key14": "h9myfgrsUFv4npuML7oChEszE8UUk2kZpjT9S4kPGZ9Xa7fHUeX1QpKZ7HuD1KBqkz2NCqQQWs8xQxivB4a1hPv",
  "key15": "TMWEhGN9vZ1gUNEo2jMHXH8ea74HC3Endm1RuCYgF1hN1Zu9gQ4rNvj7Qr6M9JimdqwTj3WMaigUyK4E34KULXj",
  "key16": "47yUS41kCPSwp7whqa2wWqpHCTPehsn1vkzMLqAB6LHAKYcWvQ89VQCYyVhuBRFJyBedTTcYCT5HHqqvoZQ2ZMVm",
  "key17": "2zqYMxaFkQvro5bxaYqso1qZj2Lja8eM83LHxYkM7Xoj4mASb3vzK8Ccz5uVGaqECwD8beEyKMrmutZy6GJav7rs",
  "key18": "2u8Mz9utRrHL5gBkstKBjti7m274qhqaY3vTZgCFYsqhHHE28LZZbN8vMhE4qbdavTd8X2mf3m3DToLCJETmMxQc",
  "key19": "2zwQLqWEP6BiJEddzPaEt1Z3icmKnkbv5Ye4ztoZdgzAur1N54sXnCLCsaznH8VSTTZy6oHsdskh84wQ7HzkDvHC",
  "key20": "3KVcESbwQcycujjzDKUrVgxxAKRr4veZznKQYTKNDDtSKP8t7LqHY2o9LyYafyMrHEbSeLzp5jQBMCogMVb5ru2y",
  "key21": "62Ao843Z782CWSeoYESrQZf6jskoVz3oTau3LxEhYW8p4sk6wGfq1YXetuqw7MoiGRogiBFhHvTaPA7fitjCumMm",
  "key22": "3Crh1KzxoWA64HLJ4hCmFV72yU8Tq4MKAfJKLm5JuXrMbp3n7WKvYt7uyhpyjex3qde7mQ4V6MLZrfu4reZVGRnR",
  "key23": "46Th9cFthqVRKdeJE4XzCimY6tLZJVTSkxWLFktg9x6V3i7Ska1FwswZqsrXkT1oNcQNv1Qwq4Jds14nSVSJw6vp",
  "key24": "ZvTCWCgsbqR5nUx6vm4d3D3DtqYpa4pRCxV5cPqDAK6nP8BNGwGsRrrDs9K7JXfecwmmocheonZ82DB4gDbgFSM",
  "key25": "62kQDdDoFZRwoAkZUPJZVomJ4BvyMrJY9B2DagncDUtb8TC4DUTU6yS79h1TNJEcWVy5Aau4Uf6FPq5eeuySm5Hw",
  "key26": "4BHpsUFS76JX69guu1BXeAWqHfgMxWSVpjksHPD5mCUjycziawFe8J6m8P14TJpXqECAhi2K7D7aPuPu95kAVFtf",
  "key27": "6KcGjNMxFhDVSMWH2QCUL894jWbw5puKPPBR9G15FBox6jCdXu4VR1JQLnxc64ygH4kvGNuvAmjx7c1YAej5eP6",
  "key28": "9ejqeScrYUY6RDpKF8zKw7cm85TrQqfFG5hmBgTvk2HHCNAswtZJLCqiTfWwtTGsdaHK1bZMxH1HwqDrdrsAuJ1",
  "key29": "4w5GKLpcuf91aRHdeEwM1czmbHPpJTYuNvHd3mGF3kMJ8YQu7tN1woKfpwWNn3Dm8JwgodpyUXLQzrg9k65TFsWB",
  "key30": "3sjvTJYCuGdsFafqEMJb3sVr4wS3UMVULGLj2jRcqqagNoeWHGQAnK42UmP8iodV7kyVby2zwqi7YNsB8GB6yEJp",
  "key31": "3ixWsBUm45w2KfrvctjPPmZuqravEATNdh1u3XdHdmnBuMuSXYveWuRyvfy37RTdUBnFzuCNHntAkmM3q5tQ5mdu",
  "key32": "drAKrT8N7a6eh2yRd9mNr8vNSsfCZAsDgGQQHwUzfmzTuLsPo6RmYm9M5pEKr1hdkeXY9crL5iCaLe5ppnpgU4Q",
  "key33": "hw3WoqtGWCR4DvFNERXnrgMJwTc8yAAVqUtzGrL2H9yHTYxqc1fpdM91FAiKajEwJ34XB3RJs7SzcjqWboiMPUJ",
  "key34": "5adCjzJ8FRAGiDnnFYNszGtXB56DkLzniE6SLZn6hDG1VbqbqGbrqRWqHb3W9STsDygZzG1yFTpgNyj9mXUV7VUn"
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
