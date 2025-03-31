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
    "pGuFQ5WK6MFUzoAxdPPNhiMLmHg4d2CvfKC1bWsrQZ6khhx7ScBAwhXUzeUcwTUKYzNXseq11ZEWHHz1SLHiDvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8GmxCLcpctJEqeUspnEav8aF2vZsDJZp37GaYzpqbWy7G73qAW3wLpKw7NyRTotjogBaha8zHe9CN8sHMCL6z2",
  "key1": "2rSb8amKqsc6oHStBekfML6PuLUCe9Z4FWQiiZaLhHAjoLHmJ4DvvZUMRqqW5Pheyx4mYThH1zUTpojH3cLnWHy",
  "key2": "3GRUJNetx88Wp9qRS94Ga997BGvTEcc7LMirSJ4Yh7krvy6ziBgB2SXWiNuKGMNjH6hM5qBfTfBMvAsLrcwrvfqX",
  "key3": "Ht7ToSdUPq7PMDe19Q5QLDhNPmYYV7NCa7brb5cin8kh63nnCGoJ7T8GAvjNYqX37jZmy9B26dzCagvMekTu5H9",
  "key4": "4LGPvQaNrYFFkRaGv7oZRjZU9zw1wXDUVoCHrikeGzvvybJUrpR5Q78c58i4zWU1BWR8BsbKLjuCh592xxfyfEHN",
  "key5": "4JFSd8XFiWZuzSAyQibKvsEman3NE7pUL81vz6K1LJCL6Dk8AtvpE19p3m3vrEJTznD34tZKh8XxevJCq3Vy7ZnW",
  "key6": "2Dr13NacfoxP1jgGSHVSxHj6k5suFzchMA7kfvbo75PdLZ8q7B8Yb9Umbzmhj5VnXTRWybiZhGutQ5GwmihzfKpJ",
  "key7": "4mRWYsj38Gy3F8hNS2WioP5f1Q3eBPnGa88AnGo3HdQExVLncGBzgNtF2op7KJxQp964FeqW7fEABz1Tv5siXSJZ",
  "key8": "Ru2zVXJRS9BVTsz81YfBYSpCykm4JyM3dtGDGDoJJfdp6wvKqgSvsN4bX28TXuUmffHTp2vA5jf5NMknHH6kAEz",
  "key9": "AvSzhWFx7VgPCfW6hog76rUDzoVqf3pqfdsNGZxUxqUz3pKVigdBX2StaGyPKxNnNw9AS8ZRgyc6b7DrA4x9CFK",
  "key10": "4rJL82Z5jfstvMCn7h8CDVkGbREfVL7ovkZqboBS3NvkweSRjSBbsdbc3odRLo4Z34WHvqe2TpBjDaziVCmqof7P",
  "key11": "311QcveTfKBPmhMdQvDFPBA1QJ6RPaEwmQNPASCfdjZoQxowMBnNbonFPAjtveEisQMj7maSMbvesBjTZaqhaqDj",
  "key12": "3gVebKLJFNrV4acVMMbyZkzQv9gNF1GWs3FpFmeastgN14HjeonPiNdFaPpTRNHhHB1qmB1DsLytsuMpbRv2hbDM",
  "key13": "HEv7iqBc6ahXwDBZsNKgV1qf87con2zZ4CsqRQ4yzhq23KwbjkPm1MsQJBYPY8KzmmU3BL9a3GYsWUrDbp5c4xB",
  "key14": "4FLiTxxefNEJ57fat9hh4k4PVoyr8uPAF88vN9oAFhM4RdKUooJKmGTiSaj6L7d8D5rwDWYNkbe4746woZV7osFb",
  "key15": "4vGRrmD37acHmRGoC86YGYqE6NxjCWp1zPgq2UsgwP83kyCG3g3NjHSwEovjHnTc9EmAeEjXa3vFKy9QPLYp75Hh",
  "key16": "2KSMurU8e4tgcEEWyxz6gw2AwGrkNvLYx5wpPRk6maH3xRQWWcb5RynhZfuMPe5LarDccs8BHnCGJaCs8ijZw4VL",
  "key17": "4zhdR46H5Y9h2eHzzxDa75MmZHU3szBfBhgQgpgqGTAeqm4x1Nrc6TQvrBizbX3BZmPTwbTLiF6CGuDw4UTd8nda",
  "key18": "3binsoVRTh2nHmD9MVPw7PhCSnD95JCtZ3WSgq5jbxXsHJX8Y7Cyt2WnjsJy9MkqK88tno4MGGDTjxdddh1V8PRR",
  "key19": "3skx9Yb8S1zaN9AuUKyLhvsXRNceAzVhXFeEX17abKcA5eBHPkR6FmpfepJuF3KQuYkskaewjAzTX2TJDGrazEDh",
  "key20": "4sKDa2hjoK463AyauMUsrJ6XnTEnifBJDJEocN1kiKRGTmvrFRKRDXg13k5cC4ryLDNtZ1ZVnMuNCT5c1D5eYjrr",
  "key21": "yVqjksw7obqNwfnHZLZbtnvVF6fxUeDJGweMZnSA7PJie1DnWSuXXyrYogAwibezoctqrMGQKc4CJNswUWK29UA",
  "key22": "4295etxcZHezWWcbs63rrZ6mxsMh7DufJjKunWh94oGDuaDZRaDhvZrZi3n9mtBvzGgfXGstxPKr1UTDfHNRNURt",
  "key23": "3Lrh1gk7L2Jtos5iBeW2cdendfj427PWHoVnoorSBbvL3CP1ydkX3kJmSEfVcBVFX8iA8Jipa4EWJW7Bm3tJH4ct",
  "key24": "3vJw7HyGmH7Ecb3Ue34e8kXFFhCbxvV9ufmcrme7VfseYga4jLRnStXuq9Cjg7w2Y1kQ9Ae5NP9iAqdBYJxwxBK9",
  "key25": "XPjRntGXxPGw2iemzJaymCuz5tQfXQiNLCFJnoXDxCaUTSYPv7dKNV5FBM3Kzn47U4UaBoWgA3ZBNu2wwW62f77",
  "key26": "dAxG8UUSswRxQPCUzearXvAVywQ7N2bqFxZK73pa1gXifLTfK2CFcUVzmwfg6HKBz8EPJv4RF31Mqa1tZ94R8Ls",
  "key27": "3H9AnZoKCuyCTdNJVAjRTmKedUkrXbxWdSNBoDQWt6xMHnApK5bnvDSNuqerc8xUXXGavFYQrKdabYfFeA4DBrdN",
  "key28": "5JUmrEMXKuja8qjyvfUeFYJsWNg8QWxX8rV4pcdrLn6eRhQXAFpmwSQbraDAaNsixDgtQtbyALaHYRXpSS8dYr4Y",
  "key29": "4gEnBocsnDVUsLgRLgNuQ1nEZRCcRnqJQgiqk8BZsCg7qryVQBPsRknJtuuG8u79rGdbNJdneWPvJWvcsn25v4Bd",
  "key30": "4SjX621t3tG6yxcQowWZoB9AeHtvp2suLt5L7WkLEo3brTqnDXuPn7bAETrLtkyaWi8V1UDfGHxRJA6exoKvJZ6M",
  "key31": "3HhaXD8JqET5y82Jm9AD8qkDwvqAPcuxQQ8xQNRCe4u8YvntQXA55HZ9r6g1uAcvbNJXp6sJ1LYZDfzU9qWGSTgc",
  "key32": "7VDnbCGSRv3aUTMmSS1GjdqpbV8VcFU7nYRi5AzEPtLk2WUrKBAhb9X9nESSwYwYW4NwUF4cNqQY5xgwqA8Zk9T",
  "key33": "3xEU8gyPcPFX8BwqzWuSV22PJHQArrCakkngWN8pSL1iG3WfcwYBLzYVKLxJUUChEMdTa9ANDMehD3mHQFHnD4LT",
  "key34": "u2L6dvzvjbiAR4i45FqGWnrRLLyWcvx8MagsCD2VBR9KFaB7qFajEruEMbDZQxUn6ZUUgXKeutoVzuwEdQMinND",
  "key35": "3k5CpqND7vq66hqB9LeSTQAfeCApTCHT6eeoHL5JArFGDE6ndBfgFhtsebTD9m5L3z7B9Z6GxBVeZVKB4rEgxhMN",
  "key36": "5yUnE9cnrPFC58TPzYJMAALGs59izLJ5S1Evu5nAybosBr13VssQVDG6QNvj15KWy2o3CHGeEQNHpc5BrtGSg6UD",
  "key37": "5bu8mfe1v5ADgXwAGg4xsxsGboM6iA9uprK5Z5jXMQk6jhorUoM9mRQfUUVa7ScL9RZvPkewVV5aAV1FzRYTrCA8",
  "key38": "2wjBmtryBo9gDMHhRd52FEwvbzUjo9b2h9yGPzV1ESv2FtUSYYH3krzNPJZVRZGBqiVGLk7ipNGWhs3WVUur9gZd",
  "key39": "5g94NvzVoW3aGd9yK7M4FZzRkMBauut2KSyE9GdHEERHsW8Uh6GUymegcpVhE1yvCRF47NLGsqFsG3FGAGyUbPBf",
  "key40": "4V49DxPsgYZ68xQVUowGsMJ4oVgpGTvk83srwQCfnBbktQADaYbq1KjX469SyzwkPd2DaAGBQU7iHVutVfeJYnLo"
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
