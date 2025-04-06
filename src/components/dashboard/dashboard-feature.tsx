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
    "4piMo8LgvarDopPNf1wkE7u4qoxZCAmTTem6fkRJomYkkvmm9ktbRVFFaEgndKKD1PiaAUjZp7BxxMRcRsv5ic8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTqV5Hfxoq2LfrQNgHfNa8sSBjA4sJNr4J62bLKm3taDuLSyXHjdju2BkFKHS8PS1kkAxS5bmqEzQCZX8NJuH2e",
  "key1": "66D2SUZdsCz27frUhoMdobryLzFe8NKJQz6YbqinFcAdrkW4bsXQtyVr6UeiJyLGHgeJqx4yjYBxM4qbfPfwYDkt",
  "key2": "2Pw7mgW23jBeDC1BN24izivugAyqjj8yjQA7ksPHmER6mK1mhxX79k4AisSqHpeyyMnbtzE2nFUoCkPJAaQFki42",
  "key3": "cweaC6x4EHRabfgcxPd5PKi2tcPBwMLmyriA9GeVBjLbPxUWdFzCnKHj8FL1aFJtGVr5QH1GgkzTTP2TyPq6HxZ",
  "key4": "4Muw7mRjW3ut4pmYXdciBENaP7v9himQSEYv4sEiVG41tLrekfCotfnwQ9XhV8sWzaHRd8uUCaW4RfqrNnfbSUj4",
  "key5": "5oPF4topsU7RvgWcRCsNzBEQ2J77RfU4wpyzYFnYB6BvCF6UoZ6iuBF3gAD9HAwWC6mWirVuzmC9sT5oAkNecbVH",
  "key6": "37v9y71LCYgq6xNS1idTx6xxLt3uFtbibyn1C2foeiCxcPcTwgpbGjCG97YLb9hBkkUnEmEmjVsn7di3vbov1EEK",
  "key7": "43m69YJH9tu26fC3By7SfT8euyrFcm3FqMhve1bRQkkj231RRrG6GQe5Qefj9T83YStZTHzSTfLf1P9J7s1CoGuz",
  "key8": "8552obqP8kXVLWeVqDZdnuu6auefHCRFyST8kBXiwPSPn41xxUHW3XZUGvyr7mVwYXggcPpWyZ2X8gGJjym9FUf",
  "key9": "2j6E3xyXtkFHenyZu1DoDhqfN9d1jctMkY1z8nT3HWnqf536XxDD3YUf6XXr9gX7smvxXDJZKaFSkTxSTBCQwCFK",
  "key10": "4Gq5qf2hiHRgXyBbFJN3s5XSsq8qWSiMXiwA8uMUTtXpRGPQe8PxiYAdPBwsn4LmJ5J8HxjhNHS3YWTjUUsgSkbP",
  "key11": "HpUhUSmm33xk3B12dNy7SHxf7fCJ8zxUpxvpEwDvp6CJk2y7gQsJN35obLwKCrVQh7b3ucvndxMmxMh9TXteYMV",
  "key12": "b4Y2FugsMLPmxJ2mWp74dfqD1RF35QGZ6kRFRaDPP7dy9AsuK4FRe5CJmiexnPmm2bsF3nKw2pSR8RHJNpixPLS",
  "key13": "hukKn5oq1f5kkiDN4VtQ5kMucWMAGd7KohuRtbcGCUNYkSn5wj1Dc5M7boT15dz8VP4MQF2x1s1rvS1C1G1Uu7c",
  "key14": "gEqr2FwRTnRFFazGGrjoKcrZFCJTRfqkiRDsghApXZoRk4SrDbtBT5X7WGxhj7Yrqze3Tcv3JPd2zmhnw2varGd",
  "key15": "2ALFnhBkuQ78fqG8Ft1jAbSWTVHhwtX9LqapR1GHWMVDCbDvqnm18eN3ynFypHJEZYYktG3BLG5t21FX4x7eYf8t",
  "key16": "3tpUh6ieh4QvGoWdaK4fLVfxzvMaHFLbBB4gy1aMWkfZDUFuc73qj3LV6aoZxhM8AhPTQTqkqeft1cMEzEnZ6SoP",
  "key17": "BfwrTcY5XQcoDMi7TAnoHYCMUAeBjb1DpDrFgnHGzfnkW8LSc2MYxHaw69zp8c2gnXU6LkeaFz5ConDvarpNVrx",
  "key18": "2BpANNXjSdE4i2qvTsH2DVE9u4T7WuPxjsr6EvEhZJeWYGmvyuuiL6jyXTzdp9GF5P3LyswaMAKGEt6cGtZbVLpd",
  "key19": "2V2XZpi6NRLF2Q6jZMTpsLUS7NLcmG72SsndCVkZSYw88yfeyALhCEWnSc9jAJ4WgzfpZL8xPw641ZwGHK5RSoqc",
  "key20": "2VYj8SpU82FcsbipnRJJAPprALSwSq9ySE9MSinxbtwsTWXYcEiSq6kEhLzFsMvTTnFrMba5j1crNBGHRKDDzMUV",
  "key21": "2ECfm5Ly5EKki5M4T4pH23SBZq9FKx8y7RNF8nW4ioTeN7KGVyQ2vPamfP1T5p5zoCJz3FfeejApqm4YA3zzMuqU",
  "key22": "5hiZhEK7oAkQD522y46Rz5L8fpqGEqgLaQ2cB6dVHd4t66BgnR2t4jUrNvf1g1GSmYwzRnW1AsQvGGCgJGogMiok",
  "key23": "dz7Uwu1ANmvP7cYVofrzSiwBgTnWyiK39HDvTeBFQe5kPFvrXtcgpaiqfDcN5i9jijJA1A2ER5xDZYwWynufyiz",
  "key24": "2i34CMtKf8gi6N76D3S9SyUzKeJPmFaahHi2yYiA5e53f6Ph85JubxXBw1HiazjJbbFTh4nP6FfgL1kzqYvYiFve",
  "key25": "3LmdoyTtj9g3cQK2xN8DmvGTXVsc3SoUpqWnaUCiZxpEJMjzmcCvpY6GNTYzw9md1R5MCVTuMUPaCf8ymFUaSW9y",
  "key26": "3KTBLPonty2gjUsRG9r7M6ToUii9Xj4ze9vbcC2SPLQok468LVrFboKVjkz1vYynhLkGHEc2UxHTc6fZVXLxqak7",
  "key27": "2KBagUGQrc51zUtr1ekTTPhYrKEuC1356qY7Pc9SuEiorc5bCxL9TQG6xvnVjw8uUmoVuuYLuHptHvHV5BFJBn3Y",
  "key28": "3ruSZUddtYbMQ5FYv54U78F4D3JbMZsVjbDPPbq2n1hwXkQg8xFmvjpZkfZq5WzCT7rcrdSwrTLV6dGc41EbCUJi",
  "key29": "5TWGpXyNJy7Ke8hkjdc42qsQR4kWjcojj4bRKEH62Db9AxsK4HACmT2ZgVcxuSqEod8c3YMrvkRxLZNZeHKaNmd1",
  "key30": "5btTFsiEwbQ8N9nnsGCd5G11VzxhWW8JGAZC5Gme6SLh4xNMrBiFBLq8w7ZBT8fwa9Hn7WsvTF5kug4PUJfpYHes",
  "key31": "26a7B84HsBg6njyYZv4Q9vW9hfBjWaPFYCjV7dYZewZTd2oLyfjJM1YUWNiV6ruNfeKZBWVvFUAPc7wxdRGTBNm1",
  "key32": "5exwAJTSFV7EeSc5tDMTxajNnU9bZF8QQxYzUGPkr1NJNYjBsd6PF2W5YXWHFpVSSZQKz4uPkCn41oLh7ZQcCghS",
  "key33": "32WsqDCfpVs1AfqsSVCHnYVy9rJYHKUQ19fW8vwLshFKZ43gtG8VPM1xbvBw3p7LWTMu7XayvCT5fXvhnrvV4njh",
  "key34": "32KiNUmWw2wPRqDQfoD3e4eWC7cJiFAhBRxb2ye6cbSZQbiCisHWyfdvLATnydkX2jXtYUQkpv2v54dQMdGPKuVK",
  "key35": "FCv2nZfpRykdiwLU7CignPGAFNunfq5rzgdGdzyffiK8umwA2si293LrDwnzwYMjiQwRh4yjaNupnezseZSA9v5",
  "key36": "2PKVyvQoNEmWNqZXahdtmEberiRNLc1RLBgNLAQzxqXNsTVrCwLztArMNzXiHgPSUwmyhJgDDbF533C6z8h3u4yH",
  "key37": "g7BJioMJc1yPWbSggpN7eLtUx8UcZ6RMjuKjAJQVAJATDuHHnFQ44hAVkDAjbwFVT6rJmRGBwpumkLyLaMjowuf",
  "key38": "5XUcZePP6YvSuu316jFGCbnN6CSbGH45JeAhyDVLvU7aWCtrhUeT3N8UkmfHdAbmhgs6iyanSnLysydhoLPHPX1",
  "key39": "5TpHHxPTnDN6mvMS4H9igPdszQYDzukPFZVxzeAN5a6fqw3pCkqYmkGahEAVNTHqcdfU1FVzn2BFzwpbDSdprbK7",
  "key40": "kw5HgC5x464qDxgncKpoYcdA6i6fYW3F8m7vxCz3iDWuuuP5FY7fpTuJusooa8LyU6H8WhPgvekgeVs2A4LfnXk",
  "key41": "3zSy5yXUdZpURwX4LjxwgHHwQF9aaccMGqvokGuw8bwSYRDDdynZSfzf4CvmW6ynyG7i1Wt3eb5SWRrs6XEXJtgW",
  "key42": "GG4FjDSxkrN4AcSBa1JTVQ5kSA6WCHAxQefXpBABNCVNJ4gwno2M9zZdXLMzXPiPuGHERfNJLiVM24tKtpeCuUb",
  "key43": "4GsGwWwRhTjFkzc2egZ7qErx5BT5FmwN3pQaoVjgWAjBEiKM63S8GWuXqbijJGXSgR1ivyR3dyyiVaGu91Nf9XJe",
  "key44": "5gQRCxET4LhDHEcex9bXbh6VN9nqo66TfC1dEioe9hL7UDcLJtjPFapBq8MykgHBFee8XFJ6jMBeWJea24VCB2Za",
  "key45": "41DVFEvVWUakPSTsBiZV9WF9fHCiPKuMAWFZr4CzHf4J71xxed1qVUR7H9yy5UrGDNyetNKSfscbsTtX4JXAAzQC",
  "key46": "56v6rQsCjWdHtkUEqMyWYSK1whcbJWRz2jRw3qa6NPCdvyhk5pBPpwAWRDHPNibvxgiAiTaQBA6UTtTaYHAAeRYo"
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
