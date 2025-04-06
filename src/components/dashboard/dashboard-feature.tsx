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
    "43Yutz2qgt4fp3JXvc2kkBaif8Bh3ProQ3eaGN6XpPXKXw3SvAF69MZVzVq7A9GuSgkFzD8JYyMnATHE77bCmLr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5APiVfL3qKek4YCeZd3vaDD3z3FnB7ukbuZtQqiSK1NBaTmqn4Xg6un547vejfXKAG94ctku4uaiBmZUt5xSpjdS",
  "key1": "5wbwEGqwZZtRQz17dAYBg1yygHkkY8pMVe1j6PTTmhYWgs2S489wfFyv2enqt7SfKkpkLtDrTbHshVdw2huiurs8",
  "key2": "2imgXuKNn8CamRJxGMxQptMS7wkaqqjNbvEHS52JEQgtv3NiBbBhvJjuE3JjaBKr4LhJSGjAFugnp26cZnyjT4et",
  "key3": "2N4jLP1n9geQC4rsmjpBARQswA8dn8pBaxDtt3GFVHyDydLnDnLzAPPA1gqpbXtSCFN7na3u792GJcUxCKk23gg7",
  "key4": "2SwywFUKY98HEpukfoRHCPGTB4WVX55jKQKjSKJrijpTGE6okekCsDAqjWnxrnParWCtjVT6xncFe56kmX7rK9yh",
  "key5": "23rrhsGCDhFzdePt6LUnhh9aX4xvA631XCVTK1winJucnM7eSzrvtewHL6DqYwvPq4BsTGUEGzTezZ2KwRNUMa5K",
  "key6": "3GjCvx8DZYov6h6NLeiaSVfzByTB5DiUTsJ8NPv76L2PHpJhBLND33ehe8oJxTZJcYDEc13mHt625sQkKkpSt8ER",
  "key7": "Na3DTaP9HygkcJMRHmnQBHbbb8MbWVPWfUy2uS7FbXH2Z31FueaY19tCHmSQrAp2x1ywFTD4qCeFr3h4E1mNBvZ",
  "key8": "66RGCpCEUaqqRnVCrF1yQWVNWKrefT6cC3H7sRX4FbuA52w3oTydufPzZnKmNGhamwN5nKLCyJ6VNrfLZn2S6dP5",
  "key9": "3ggZYqMjTsmE4JZUCHRiX6cHunk6EP3AZjYgCbfx17mjR1tM8CBTUVk8EfJs7eeJP2qySuEu37UfQDHcukNPnTbv",
  "key10": "5bT5CsBiWrGxrV2dJtTgUuS5CRpjNzpQLuMKBNAoZeNXdWP3RHre6poCvVUu8g4Z2MYGATNrLqwhGh9UYEF1Eueg",
  "key11": "65PSH9nrmMRRqRN5yNfmDHXVgnGerHiSpUsp6GUfYMQFm8CvaaMGqec5mTceaDPWKceNnnJRvWBAReaeJ1Ru7G6r",
  "key12": "3HeBDraRaiD8aUuCMaYU9WrAzbYW7MafB1C3coVgvaKuccD2p2j15DAr1ogS7P5FqAQY6EceKghLCW5U4AqzESXF",
  "key13": "32k3prcbYrbfd1mXJ1hw2u6ex1drUUbYGKvvcMPPU8Fq1VJEknsZTsoZodHv2M6VKwEdMGhRd5AuEfdHgZwpSpyK",
  "key14": "67J97BhPsPDiwbrt5Q8c1pcLmYbNuDBYiZFoBLKstfAHE8PDBve799T9kwTxFspvP6x39XK17x1npLkzdgmseh8P",
  "key15": "57K94hxGrxnxfQYK8ZdhnUusTDX2ZUpV5SsHrdyH51nXfHFhMCfsGkmFKhaG7E1spRzVoM6MrM9VhTzbbXMYiF2o",
  "key16": "46LGN32goU56hTjcgythDHT6YRxhM6xDY3Sdk4dJFbCwGyVQrENG3WUbd4XZdPfKowiTSnDN6DPf1MYBDCwwRm73",
  "key17": "4sFoKrPvXET5G2fAVJ2TLS9qLeVWxfdxjJouQaAQHPU1Uw9bPFZqYA9uyXpXPdE2BnLojEWHHZSjcJfzE7h9oUuo",
  "key18": "5zLy449bS93wJfdHDytvsH2RnydYT9PdDGQu8GLkQkorLXmXGQcSpi8LvKJL8yKC1taK9BznWaKhZh3QuLd6PXf",
  "key19": "MinzreqpjgoX38qxRkTCT3JXQvJ7esPkKifoMpstctEyrLEqHfHcVxdpnz9smU721syS1h3d9xE4ZbdoeGh4rQc",
  "key20": "piCbDmb3oXBbP9ao5sodivN8YPg866gAMw9NFJ5DpQtSXSxYiDoH2e15rwySfDmMfQySD6ct9ypwxmuDR5k7zrE",
  "key21": "2TAsU3dSNRaoYwRD3wccUPjkdmyxAoG2qMCoVChYAgXQC1VQ6dEREmC3sQgf9rgXzDkkgH8idNotntmfoG6Ezna",
  "key22": "4XuA8NAR1FJcztheQYBoCCD6WYkmMVggc7pvMUtynrsDH4HgJJccrFRMN4MtSrwyGKaurCow4KefLj3g75hGLzqt",
  "key23": "UyqsEHfWz8UHjJY5MauDkKD6KYkvbKLzA3E2GJ3DVqH4rbLeJSxcMMm28vUFLL8d8PTUAsmQnB43MNQVZyVpjFJ",
  "key24": "23crj1c44f17XWFD2VYBUaJ39MVQ5s1XvjsuP5wFyvzew2V4zjtDUcqbY7yMZruwNx2zSZnGkQUb4KTRfFw4K723",
  "key25": "2iYZJ6PCNxoncGoAwhpcKvLaMAzsidZpSBh2AfNKddTurJCba516hCgd4b4RvU9yvP7vjpPSX6LY1RpTRgvLX26W",
  "key26": "3BQUdvPPqYqUmws1o2xajSRuGtzjqKfaFiccykmesX7NzJF2uSbK3pUiffRbrJUDzb2kFKPwnAJPNhti3LBv8N2R",
  "key27": "2QPQXZdY2CVQtDV8wB3kRKQuvGcKaF1MdbgaFrVZ8rYMr5Sw1GZKgnKvqg1eovPDLgSj3sBbgrSp27ZskXNjEWi5",
  "key28": "5HTkjdaByvU3n1ooRRZN9hiZXjNiEi43dMrbhSqdnLFJq9T3f8A5gGwWtsp8zcXwKkBH5VMWhM5oMyDGCc3VAsvz",
  "key29": "2YuCpDVuAf9ppP8XaB1MJ6QhDPne3Q7M8HF8WsmmCFhk7LB37rh6ejpNkL2BfpM8RKchEfyBiGByCyMFaYge76wp",
  "key30": "2E4eVc1VYN9f675KsEGtg85fcMUS4Jg9BubVbLQ6nUJj24BWfKM4XQVMUDjrzktDcXvBy5SMxobH3BEi4dMXgGqx",
  "key31": "2KCiG5Ah5dpp2wvajt7tA377ra2Vg9gw5B8AiUPu5E7v1tBcMiQaaqJKPb1xcSGuNCPMEsz68eFNCoGH3mFeyuAh",
  "key32": "4zQuQ7sqWGBQeNtaQSQ4YEoDzv4uEtB5HK6UNBy9P3baV8Bo9pqj4hwoGsg5kJVg7JwgAYTdJ7zLBc1eEV7MdYPT",
  "key33": "2UTQjauDz8fsgC2joW5ZRLesjY1keKTmfV7TFmNeNETRJMG1FvatqoLQhVgwCtErWBSsfVJtBJk6p3vzkDGJfXqu",
  "key34": "53zrHwH3XPMUx1cf2Y6vQoNWPkZVJT4QeSVuBZ88XFLFurrzAzGuet8WFDPigKwAtt17tnZLxzvTfYXamhnbQhmS",
  "key35": "2dAHrrWCupeYoH9oHqiMF6Up8jAZRcYHHnr9d8UvNLc6jT9BctVMKmvqTFY84rfTfEQ1pM4EcqkSzqR84WKr3HHB"
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
