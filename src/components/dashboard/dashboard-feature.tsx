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
    "5nv4tS93ZhbdfFLSpme8FhRX7yhV6TYDW3qcqtsGzWcjHs7dQzsiRU5YvmaJBdLHsRphPxa4gnbo1MkEXKfeh2BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVvKxR9R2TT4bRudaeEjD1YRe1ZxT9zMmN6foy2Jbgs8EfnUVNai7Hz3KosbMxivi36yALtrTs58mtvL5gEPxwo",
  "key1": "3ffxDPXbYbSCYQHdFggZoQkYowXzqKDREhTaLFkk4uNRjaLhVASG9zsnYGyT1ktr9KuBhy3wzDk8P2sWN7Tj7Fj2",
  "key2": "5GkoaZGmWDLzEvFdwkQU9G6YqHeW9wuxjSzBH9PV2Bz1ZAmzpPhVa1pmoi1Jsz7aexEbPfabfdrEMUNdW1XSpHZa",
  "key3": "23uf6AzxMPUKPWGGGFkmPp7XDHpW9vuTrekRQhEDWHLtqkZjkhhps6m14RDXf3cEJkcqERKmWh759tkuGcNsz47W",
  "key4": "5WmtszStFJAprACDrAf98z57bD2kez4bZ8ykpkwohSpzMKpPADmMSZHTe3VT4oCt7yQxDUzRD5tNSJt3xDinWGuM",
  "key5": "5YYbqTjkgnpD3tKejHBsM25bDV4RC3jDo39o5oGWMx6orfG6jzBb8dFGDMksvPxVkZyVt3Vx1MRfVuv9eBfiDv1W",
  "key6": "4McDaGZsP2VH6JzBvNotnoiDiy4BpW2Qt2HHH83sQYhxjGNBeHvysCRShTYXHRonF4jsgdKTmgsahJw5ioHv6CnL",
  "key7": "3fDwFsWE3e7aA5UA13bKWS2qb8FBWphNTq2gNw9eZtdgwVZs7TbMoMbm5MeWUeMiwZDi3eU1DD7H8qjuCTjBfnjv",
  "key8": "5FK6gvbPQJjy1N13S4MFBahGNQJEHsS7MDF11zWHP3fVypMHHd2P5zG2mQuTJo9HzR9J3TEo32A2LSgisCA2CN7m",
  "key9": "2n64mq1Us57F5QPEjvoY95zP8Vun4PFQdGM942f4DMUAgCwiTJKuF2JtLZaiDE8zdzszwm4zatw4k91qb7tSQ3Ch",
  "key10": "sbo1FcU88Ta2yMCmiS9bZKzgxYB2tNWCrHbHQcRc6FWimgbuvWuW27kVNiRJqkSm9SVSa3FxB6eC7A6BBHK9Z1F",
  "key11": "2fwn1SbXbin6U2W2jvKRz57Xjovfv2hktRfF64LkTRZmWdA25v5H3qHCZpcfubQQAegW8GTsAUF4d5XnphZP1foy",
  "key12": "3vpT2z25j5N6qYZ5GTNXD9LHyK8CE96F2MvFv97BLb4NwHwK8rXChTC4KQ2VAgQcULGcZpaiSPfcgm29AQsZpNxD",
  "key13": "61tE7M9XPvGvMFW6j1hhAMPS3oiEwfT66u7FbiL259tc4U9gVpiP91ewyJntt8pnVJfFZScLnQYP28timPdPAtXP",
  "key14": "4sA6kp4fVdeZRX8cY49LpFz86ZapFuaiWn6RXUBcu6ZA4qTteEpAGJFFTW9HEriHVtrupAswWkSkUFCgfNchT6sC",
  "key15": "5uLraDyicstNCnRC2eYwKHK8J5fsmTw1DpNXk3gWXiKSNG3eC53fERFWz1p5UTG2cFvMhn36NPLLjj77zbnEjtEK",
  "key16": "41YFDbX7pDtxNtyakAMmAy1sdpd8dS2XzZaq4DVoH9QHjChyJYGwk8ATyx7gPZQHtBY4P4xvYFZZPahLuwvqsApQ",
  "key17": "4aHc5jS7GoQa9gcZTfZagJUXFinhQDiyn3JGMqAkaxD1eXhz5HLfcvoa5ADxFZoWrZF75LHV7afarnZnX8XyjkfL",
  "key18": "5Rtx37KaQhcrqkXGP3wkaqupYfdsz2FKucu9s5h3yLBuVRnds6FniPhyfzREmTcAgrbE4NXEjXTi7aBzLzSr1mKb",
  "key19": "26iX2TX8ZgzuN1FgAT4xK2iuLP3vvYdTvvcH4HN4PisVoSwgKgrJeNDuu9XNP4JKqkFqgmpdQS2urZFDd6ktGj4v",
  "key20": "5xDv84CtPKkstTE13hqNfxVBZagjgn1nrRXkLNbPtfcoAtuyUDFGP7Gg581Cw1mbj8X1zoFhftRmNExBK8DqNzTr",
  "key21": "4n9zW3WU8ZJMAySUBKW32FHLYKNiTpYYuUqvNvi7SBM8EXqev1bnycjRSwcM6dQVqvEMqdzs548mJmabvPC1mx5K",
  "key22": "25hfEvEekKr7svy78aWisvbiiE5h5fpR8ZgeC1jH18JXmtNd6XA4otAYDMBCt82HJ2njkSucB3UNBGPR7WkX7tAR",
  "key23": "3TwhDPrifvxcTybWn5gJ6ARUN7g5SwwS19hThpFWxNtuwHBNeKhyyGPMowQBhZLFFesiMytKpoFqQKaQ4du7pct6",
  "key24": "3ttDbBmog6Sxnauk6MPsZz4Deec88cqsN3XvL2euTNMLX2JG4fa8EtZ9pBaLHACLyJUmZw7grXwjU26xiAo5oMMr",
  "key25": "X1GaUTxXkUM3rvx6ED6XkoHh6UcoEWyXnN85us6UDod45zQ6jibLGVSYfC6gjuK7QwF93QMAKdqhm7eL7LUR83e",
  "key26": "2sCmfDfoc3zLpwDFfo7zLRzAWSS7CuPVsgjW83tvgTb3iCCyKvtYkEMeQ9icn9tdg4WarVJXpG8T8AR149jhQHS6",
  "key27": "2rGa6sirSEWHPMSQeCeHGrXfRuADN1g6RB79Tyo4EBjpNZHCgbdHjihUtNbDWj1dojegGDzox97YuRF1DkRmfwEb",
  "key28": "2ZEZZf9JSC6senjc6GepBJN6awFFqY6PF8JMomS3VYWhT8fzJXqX33giEfz1uh2sUQzX9eoKQvf3MYh7SnrHBNxz",
  "key29": "5gDMcCFDEEeWPqyZfByUKyPLcdM3wh9NBrfefSeJ4oLvW1NFjdyVqPcJ286fFYSkMWvuGdncnBHxBKVB1n9M6mx9",
  "key30": "5Lqbz1hgx9CjQVHsmBHuXvpM1hhV9tnrA89EbZwziixDLBbvMN2QNM1yp1kEzSTWY8jAGpcxhTpaM9CJh3BFKYTx",
  "key31": "2Gisqvfoi5vTstiQWcJLVSyrXs6Ra2rEyQ7Fx7ULGEKeRaJu3FwTTVtRWXdJMTaRSC9TeAKYksEQSRatxJysKaTN",
  "key32": "3sM8zuThgM19L19Zm7zqDpV16XVxHn5EvEPm1w814A3Wx45Sv7ZG69WpuqvRwH7KCvxoDC7VJ8xRbsLKg5CkxbKG",
  "key33": "33bGDDFXxMRMxrnK6S4RV2ktfvurtDUUabnFRJTWzKSCYaxqUPGjK15wUwoPJAg8e8T2QZ2WeeDuGXAK63NDzgEd",
  "key34": "3XoHcojy79rxcZSXbdyAVNyEVJSeEUJHKRYbfq8oG7A8BnNbNeUGDa7Gj5g6mXEBMiJobjMJbZLR8wm7JavTfBjd",
  "key35": "55GAMmvKovoiRozofYPCMmXJinL6mQdyhEvhvBuaCZutNC8ZZytq5MDYcafSLip7NPcjWxQE1KaE6JCQU65MasWQ",
  "key36": "2NGL4R85YrkunjrAtPSweriZzNzkF355uNVofHjnxzh9zWbo5XaBuUeoHZPasPg5TNTJ55R8ZJD41uDTkTaVwYaq",
  "key37": "nSJ8RLoEr2KVmiy6xJWNVkGBBvdFbFyZqZ3B1j2xUVpTa1fzpMf4Pvj6pkU2XCN24aXn4UQhjYLeujurj4tcBsF"
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
