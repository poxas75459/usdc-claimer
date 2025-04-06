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
    "2ZUsJQJ86ZpM9ygZFRd342bq7tuZwhPjRLETMgTP9zWspWiUAqxVcYz3hAHoiC3aV6jLXqT6MWYwyvbsNUGYyvqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZxcJJoUhNLiXDhu96AUu8uYXUUfu4SvDnCtzDFDEGkmsZWZzeTUiSvsQJ6xepLEeEkQUqfV3mWQCEeWbxjATwb",
  "key1": "4vfjkTd2sYaK2AZ4pFdTPdXXQNs4hpguxyMJMQSXrJ3pBaVVeoWyjntszG4HEerZ5a9fHU3A9CGCBkBDjyc4Mm7d",
  "key2": "3cPu68oejhLYg6qvCstryNDChHNxaggRcaV6vfUKRGE7QVCbw9VGf8845bckMKgPRjaNCN98YbokBcvTaZrJMimF",
  "key3": "QfcnmEWuZjFTqvDo5hZENxwZQHHwhqT27sjrZy7dN6PbBdPVdZTrwrAwBncdm1u4SF1LWG9QXHcww5yKSmrNU24",
  "key4": "DjWKuEqLxSGHn3cvub2Qarc7ThaX3ejn5YTrXgdo1qgA7yu7FrTMWjAKXXFKS22CUTCaxqUWLF5GnVgx9jPVLpo",
  "key5": "5rAi5KZDYtgmZXqFoNGDKymQR9yGS53X63ne7hALjAMMXLUJAX3JJ6y7qFLnxuozHS7TAD1fPpxKTSz5nLYjPmCw",
  "key6": "2cPkAV4fijvtFXuYqJNfWHd5h3TkGW3ji9H9pVnaRWRA1cFjFaHFTBTqsDhF81tEmX1Gmiu1nB8JRsSrsRtur8KE",
  "key7": "33Sfnvdh6653obzSk3DvZDSp2rMof4FjkkUaWTP6R8qMPq9jXoAgrQz9m4Pm5kspF6uyMusdTKVQ1xBceo8H8gnH",
  "key8": "2ho2vsHd3eLmYtxh8og7MYUM1w77GVqHMC6gmAt2RZwxKQWrR5HEUHy76YFZBmpZVa7EeZwY7XqH5HzeH4jVxNGA",
  "key9": "2oZdhv7NwtvvDkmHUyGVwaZV8HxxKSx84b3U9PEp2QpLuq54B8ou26yPRdaYwM6prPgtjkmoxtDXFmUuKC9cHu9X",
  "key10": "48K1qcwX6nhNg76SZaTZPQPZsMM8DYhiwo887Yy1dELCcgJi6kembJCJ54XqVvuRyPo36Kr1ieyzz8HJFLxquDqf",
  "key11": "4UVTeRnu1DGxcxtF84j5S648Mw1uwhqMEEt6haRFxWnvriD3yAASLGi97rpB9A4T5WC8ZU6jVHVuu2ezyfGCaD1f",
  "key12": "3a2SgQV5fGrPkj7krQjHJm6eRKCU657cZ5kQJjs2FUA5te9VCh48ezuLi2KwjkzgmjM38gGipgdowAZ4Ee8PLdZh",
  "key13": "2ESjXMDofsszJNhF957g3ft8ZtNgzwBUjewTHzAHa5kYfKMfSxcxzeNQa8RY2vufpCBgVWTtQbcSBSM259zSrzkk",
  "key14": "2fXzPKrV2L2VBJw4ZRdwhpg52Bj71vBTP3Nc4AvwNPNqbiYG9sPZfHkK9uK4LmMNvNQH1PSEUVoByKWcM1kMotmP",
  "key15": "5ZDht3ArEy3nFhaDex5WVmvFuCD6rscfJ8ageymXKtTyCnHLqyCPu3hjh7Z53Q4E8LPy83iukWMevidyEx2Cx7AR",
  "key16": "5KUgTCsHX1Hg9QbCTmVUQKcxW2tYDviac5GqSQLw138iLWU87Z3wGhugCzroECZK8onb7wUNKTTH6Av6yyAgwTH6",
  "key17": "qFqeDSKruL5knySCXBTA44WnEUsfNBBc3PhuwJ7ahzJCon4Gkf4xuXZmsv8U7UaYabqyU8KWwUmFph57sot2CQh",
  "key18": "44YLPpjWvfbSQyQtCSTVtaxfoBzco5rvtp4RHGqTq55AdudJj74bCdqrEy3NDWnhFXRn5ri23rkBp8Jk64c2CDHs",
  "key19": "26RePENFWPrmHVpDeeSbm4HxJTgJx8YeQ8Z1fLkYubsAfTggpfFkjaGmyxHS9xepKqyGzC5BJYtQoDsTes9VBEBw",
  "key20": "22RsmysASc8w77aiXz22xj9ZF7k4WujuiSabcTW7DiLZR66KRGGMJNoT6j6h4fYgvH5zu6Fw4icFrM9o3hVwHrQm",
  "key21": "5cRT4d8afc76dMNDno6QvFu8e9nvaTDnp2hPzpA4jPi6spYRQ6sEFo6JV4bGzD6unZk1ppsfEF8V3KK65BdQiN2k",
  "key22": "4uU4D3SLeoYxRvC5nP1wtL3YXoLwMpmLBgYvELScrAtd4Pa6q3nPRhpJtAdx8M7kyBkLhVyJR6puijm9VLQ7hhWX",
  "key23": "J7Z1QxMgvrTrqeAH4PBh9qWn6Z8m1kMzsXMsVaXqQVhQRRZB7Aw73ZmvnRuTv2mLbCuy88AePS5UTvpbaDDwKkB",
  "key24": "2V6NZKq5wnxTivySLoEqaDeGtVykkTuHj3xyBxp12Y2XXCAbzWVXbMowrFBg6TQ6RDHsvM9MYbQaz9ebtpqVuZ7i",
  "key25": "3JFcipwPPB9Gjg8uMwPr5sugJu87c83NaHP8LXox9qZLjn99X4vFLAA75Uah8LxKbeQ6KDB6RU6uUtiuKoC4gs3Z",
  "key26": "2kKASVgRKAVi7PvKiJtJDZWBbpicfVb1nMsstvmdg9ZpfbQoWWJaPTzpueLBymrwLU8KBXmSdUTJFJ6Jo3djP8zr",
  "key27": "3CHevGKk88aPETyKS4NdPNiBSj57zECJ2Lc3aPFpQiESfws8DjpXXBd5bcDZMHpb4pvhciyiydCvQ15B5D3kuZem",
  "key28": "3tMqUQtH8n8MBPk7o4RD48TRwBsih2tfPPcMdyKBYeVEZGRcqcF1s3BCpBrGLRSSEQUK7N5CT4bt7tEgVWtWhjZa",
  "key29": "2aWZzzhmB5mAG8S2uvtx8oXLZZqxE1zhA3yrXVLiPBSPRZEQ18uXS32cteQJy9p78Wk53Smo7gGN8zY7Bowi5E3P",
  "key30": "3N5CGQbHQwsGpMgcEVeXmF5ibQnKBKxWqA1AmnamxWziiJ5dWByVPTKWJGXvVQnB1H7HA4DG4b9kyfzb7dEtYBAh",
  "key31": "5q8G9YZsbczEsMZCpN8L3eHgeRLaYwYaA2Jvi4EZmhW4mfUS4ZkBdWN2UpyE9FVCmvdMUjGS5jccrtJVfFyfKfJM",
  "key32": "4ZYsxniGSHi7qHr6yzwg71EoAEzr8BPiTLYkG7DpLfZuM92RAxM92ekdMtxgUYnuioCrctJFzLjbfmvdJZV19zbB",
  "key33": "63MYBh5kSdpX9TS8n2gQ14STxDhY1hcveK9YazE6gKgsfLRpxDmwT2FMQKwT4F8wy5j44TRniL2EeNQkrff8zVFX",
  "key34": "3TFn615jBX3BVNxeAS24jycfXFyyJXDexRbshzabvH63UCb9eBcpohrdooSfmgKr3q4obA7oACBtjVJrBVBvHZQ6",
  "key35": "3YtjFpt4wh2TpdeGGJyoD2Pm1BZCyUhk3i7HyorHDMd6fCaacXbw2XvNQFaeWYeyUHcr2QVUsa1g2UTFWkDAsJRU",
  "key36": "5kfNKPxJbmUAyjEWjdApZqhZnRf9Xppmrbp7Bi2PsfU34DTqaJgaFSBcJVdV6jsnbMB2u8PaMPaNwn6UqEsAXqbR",
  "key37": "sbxg84v4ru9x8odWAmn9eQFw99v6gkEYpJ48caMiSwqKdXxBnxihxXiq4xD8HCAcNrn2qNRxP4s8Mn8nHHBBQec",
  "key38": "xp1yZAS3Zvu4BvkjnLY7ssQJHFaDrjvga2BhvMdTBmm1as4g3pNoMEDy4fw5ACiWknRnw5XYpJKYEtU3Ttjun46"
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
