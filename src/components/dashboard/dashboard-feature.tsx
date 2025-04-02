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
    "49sZSJ73Q8dnbwXMa5fnkLVw5F9qUCnQ41cWvLo1nDyvVaDKonowZoZPRSmUpfTU4jo4K5K3hejNixcy3pxDmo8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2mreWLPwX2nDe7CVNCeD5opSez44SKH8arDeYGsMFNmmfJD27b7RGLKPTKCUYRB7BaRHC8GEk6RWRo2K7bHwEf",
  "key1": "r5NdEBtSSZonRFiRcofmsKtrg5SQLkTX8GANa66s3xWBX4p9KbVbP4ZHbkXx3zuBjcwVuFeT7hYHs3XGG6sHn36",
  "key2": "4iXdoRX2rkd97po1h1u99Z8rFmfmNYGbxj6ZJBJ9sV9Hf1HBS9BtG1ftaQWLkDJWBTBxKp8mUM4BowDrPVAxfgtG",
  "key3": "NHgCvhCxDF6AegM4Bncv3ZmkNy4buvujU4oYfgyT4zZpAu8yKNCFbueT7j2xryBPyoNBgvGCfBUhLgSqfxEUPLu",
  "key4": "5iByQjbRf1vnzQtRSmMKT7gigjer2zjdmLvXUVeeLjALJ9Vuf6Ti14nn4yHeH5CLCootQKNBTRKJh99zZ2YnAvr9",
  "key5": "3KgHMrcxti9hAqQpo1ZbSMkDRnzDvnNT8w5pKp2yPagutyMh8nYaeEsPyCrm7gS92UDY98kqJrcEe4ib8y5dvoPK",
  "key6": "2V7JAyHHy3RqskBJrboQWsMrJDh9VWhSwoKT72uVnjrfzTtAUbk4Q6SFPHBgwNAATBDGTzm6DmSGnSgw4X9gd2dL",
  "key7": "g3MP3C3YSr8VA8FCYJjW9PL9XsxfEitgHwMC4ZJiKaVgyyvhHyZMkSnL1YmwthNcF2xAdZVwjoH91pKpmG3g9Q7",
  "key8": "3uW2jkCy4DiC7UEM6dGq4Bwo8iRvJhCg7a7GTa3EkGfbNBAaNdC8GVgnVrX8Vzm3HrqUaaLedtTRVAkgQXmrPE74",
  "key9": "2iaZceFAphQwbkqhEAEPE9GhT5f6V9dNGjE9WPHwjGFFWVbfokP5mjoXvhuDTsrSd6Uknc8gpMHTNYcbYDUb97rW",
  "key10": "4iRRkqpP9MCnEymRoc2DchU7CanV8jqQUiuN6X4BVtvdktvM2RPJMqXZFDN7cbaFqPZ9j1BsNTJo5jcNtXLTJxFA",
  "key11": "qDBXKTqB2rA1xJWKBW6srzRSLExd4miksxp39bSuFbmTmp3rHUf3SNKRGZtVtjuxczh6XpYstTxW6vjzLTekv7h",
  "key12": "4oP1FExF4z9dNgPyARUNaC8RqRwbFu3xr1ZDyMQUG4992m9FrjeVK378HEyo7ZZSExB551GJypjSxMs1b7QAeiVb",
  "key13": "5R5edVv3yZGcTSjCGN4q2xvJH3PXfnkkcvsim3mkSUBCr13YtSg8QC1bF5UWuqj1v4AL2u59aXR8XhHZSb7z1vX1",
  "key14": "2knufu22i68JupXFvwj3G1efCxhnRVwnSwUoXHHiwEhG7YSWdc1SGQS4NJNkgz7RZihWaCG6vvJy9mAVhUyGqGEb",
  "key15": "pe3XhT7sxH5U414XrVjDtvANnb71EQWeMUuV9gZTMbddhqf5CF1n2VfMyvmudZnLoLctHnquyfoJDCe7ehawXuV",
  "key16": "KMkBayfrjfSPrrmPoTBDYTGANEHYSaz6juDuFbzZi2DgFvRmDFBihY3c7ZiQEBqPh4p4jd8S2uJAFfVcyHpv9Md",
  "key17": "2HAURNCPS2BGEQYWUyRd8cBZiqUarz7uWeYVd3hEQQjhrGYK2Cb96qtrJAYMtqyYS66ei5Sj9do8TtF9bwQMu8m6",
  "key18": "3SvTx2jZuUcEWDQvGr88spZBpoDt4sYfvTtUS77ddG9JT6Z9N4XpPh5BgcciHLbiQGt4QxuHLQqNra7FcEnbLEvs",
  "key19": "33L5dcxWik16wBVm7stFBDh4tv7JR9RVu7MT7hMUMQS9gvBmY1mobCdMmpnBvf3iDwzBb9dvpFgD7vJeBL1jWfz5",
  "key20": "sYrME21g4Bdh4SyLNtxiHZqFC25uVJv2nNwuJE5DKPZhd6kyyLELPoaF7MihVDjLdXCbUtY7hUUEnRWHxQavs4N",
  "key21": "4RVToYHnoAzRD3ZqJmtSSpfufnmmBwvu1cC4KsiBf6KrbgGjMobmXs63dUt1mygAfvgW35X6nnEndCENvi7bY7pi",
  "key22": "4yevbsGxkVdAZWtCgEa6J79ZrkBpR5rc8hzDK7mfT1gRecT5nStmVevgTnve1gkJUMqt243RDJSn9TikxZiwGXkE",
  "key23": "3bwxUjqkceg23yfBRSFNQG6DSBQLUrKcvHoqxQpK7zPtXZ6FzfgXKR36VjwviqUECwveijjcyLg2vkjqxBTRAcZc",
  "key24": "3tDtCPyQpkYBoZVoYSH124rkroobfeEuPyUNgYk9pi8JRkADWoaaqhw2ad1vuWM6eWqZQ51cBm74LJ1LpzvJem19",
  "key25": "5YRUVxUaAyMg9Uio9qZjgK4KRaBSif2edKof6pZwML6X9wVFJrSREHnqmtMiFNVzSVz21gyWoJQgwWMpgr5noaBJ",
  "key26": "4LMV3PrGoJJ5p6sVDEE2SVUQbuJCZL8hxmRyVRYe5WC2CtjULu94sy9zrCGtHUfBDY9quCruijCKuAfGkzqnAp3t",
  "key27": "4M8SefUL5aV6eDAJ7EKPjUXJEm2pTCH7U9Hdo7Mv7zXwVLR5jHsdd4AJWhfeg2gyhKfNiy792FBaektzVm1ZUkwy",
  "key28": "5PA5rp9EFAPiEBGuBM9s2D8WkaaAqU5zJkYmrDN23QFJDAYf3w45tCtAqgSW14DaPu1ikr3deezTkHN5udbHKpzW"
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
