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
    "3SjcmnHCTeUHoYUKnKwNjN7yaNWb9DRAsWECefXyTu12V164NVHB9nhtSNbKaHHr3FBoSUaYVGuzpmupFPC85KbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGQneNC8fDWihgGz6rXWQWGGuim7RK5hiX2VWK62B1D2oasgSxZxzHVgDRun2PnD16zahHKSJT2wxyDtS6jvGNz",
  "key1": "361Bo5sDZihZW6Qf6Nw6sF3ksHrFPk2ySPYGfCpbffHqHc36seutntoTbd9bTSZFbVzBH85AYUzNUx433ew4EWTM",
  "key2": "4BuKNqFU5Z6dmR9y63Y4nu2GSi1nUDXjZGnoKwqpKANEDZiPkV4akxQHtdkgrRu1MTue53ihFVMiDesA3pVQM3RK",
  "key3": "52E7AbvAGdEfr1JyqusqSSXyLw6KQbAQWqt79C9fKC9yAT8Qn5LM7NK2qU5gfEZVSgDjbfLLymJDAPbfYujVQbj1",
  "key4": "4XxnxJ32awD3fKu7vkR94XPHsV685aTsAKUsudWCvS3n4QzCh9GYc5KyNCCVpKssFy1vK1f8XEDoJA3UzK4We22T",
  "key5": "zyQQATzyyNtCcAWCvTSVvFBL1ML6ock4eAAKSjw2qoFMLz64BpsSDYJzoXxcETLqmWrrZJZmRavF643whys1iVc",
  "key6": "4MfUQqYsT4zHTduoe3cVV7K3THLZfm9Vd67n1KwTocL9jfkTjHXqrFKqyYahM7zvTAhJjGvm2cTpRKYxrgv94xbj",
  "key7": "2H1YErr3pfhRDnutDdMtbo2fzjxdCq3BsZXezWVUZwGzTqRVMsHJgoXdZz8HUDsvG6KXuZMBhkxXZTS5nqndjS1F",
  "key8": "5NDmdTDJH5cJZQWZkY99nBn3vpCgNdodx2qcq7hX8W2DtKDajsErjv46rJJ8nYMYqLHmMfmvo7ngArkpByfYZAvi",
  "key9": "x8DDUo61V4V4hsbqJFQix6zEc3sStt1bwk638QLSZ1HcCEVsawuNE2Wr9wzLnc9iEdTZkcBsNEz2o5S6pisVYi6",
  "key10": "5io2nRX7xRRoPwtuVMGJn2RCd5Gjs6jkArya7jSLmrARStJSLbAfnhGHNmzz1J7Q91o4nXMuMgmmzffm8CuSBEBY",
  "key11": "2PUWR8mNNNfs1KqhCw1Ut6twHN9CoBTpsZTnBWoukxDVrEVSao8T1wremuVzYsHaCuAk24CH9n5Fgmd7QVM21iW9",
  "key12": "35KRHHitWkME6RiLYnUueV6gsfJc7wb5fMYqwn1Qvt4hV2y1Y4YJtRYQZuU4nVfdkGeJNaHJDWdoEH9feXQ4hidk",
  "key13": "3p46a7tSBpmbxjJAZP1qswqCtFVW5HyDRj7Z8C9usZ4xTaXeDywrq68iAvo2KKRVjp3tFnZqrUzyfwboUzdDseV6",
  "key14": "2GyVGohcHrXQnLDeR7K2f4J29ZQEeDDdrz9WdvrCiBgRrcmcSHLLc2SgMLneup2wRKYwETnf8joTNPA7A8TeXRk1",
  "key15": "33YbpvFMnUgZRYvfTiE6JDBCQVyzeCqMqBTzx4dJahGb7WDNieQKvwCfVTfAXfPLk46nKEs8MLyUGBrwdQCSw7sA",
  "key16": "5FaHqgMqgWifSmkojmjo7z9ajLMXURWvmFCNFwRrUv9QgFFSGbXBAifQxWCbUr7f3em4h1DKWRNeHuEKrvu7Cr8q",
  "key17": "5BzcraX9suA9epUePCXJZJtzua3tPhN6H9pSvoTFJjsNPaTaR4xvQeHzdhkLQpZG8zBFFwWpPA92w7iNtzpqc47V",
  "key18": "58cTzokHdKHYXoMPSd7AxUVMdFFz5YMxH6XBbjPqHbU5LoANE3UqLXXkiTFuWt4k2xuCh2Ahxf7WZ8QDtvBuwJfk",
  "key19": "GPSbqKxy4miFcn1n56vh9Pzk84e18aiGcRB6hF2FrhY9NNwS8Na9wjouKaJ8NjzTg2UkD7mwquUHX6d1fw8Nmur",
  "key20": "4S7E7u2KnC86tWTDh1HAppTjG1Q6AYanNCqpYwsNL9fEX4jysSSRf3mokKkQNtL6i4Y7eR8mHjuYg7vE3ak37fiT",
  "key21": "Y7W2vHCRvG6t96YagzQVAe6Nvk6mSH74iAaCG6zGzg4rTk5PrBPDo6qiEcjkLg5DYNwrHH1rQPsz7Uq35UY4oio",
  "key22": "64kc3VvFk43RArerrCM1i9Ry4a4aCdDYuSDHiiuDhCL79JLEUz2K8534LeZp4mmSwt5dnKxQjHGCS37g2fhHs3Jb",
  "key23": "3ATwSrY2dpDSoEqkwDYFEzqAtKqbDScEbjqp4aUAtp2ScwmedVtW1KAi9fsHFudtRuKLFt7S8tZvb47uWxWvpQN4",
  "key24": "66ktnySJYC2m7HtMyM7thHBZcwdkjFwGx7bXJmPMr3Q4oahNZfoK4dCc51jfhigy8GNdb8JGMSELdQcVMka6HXL",
  "key25": "4ay1vK2gec6q2m69CcnmM8ejFKyZj6n5DqAd48rnvNCmNCG8bTLaUU88HnabVSGkfDtAoK4QUMmQduB6CVy9bGKs",
  "key26": "5JkiQGJngQmMJNjJLiEdYKNNHKyUhXFZoPezLFck3S95QjtbfBknUyREFrSWeE4FDB71oBqMDSB8zMokHMwFFNpR",
  "key27": "4TGbSAmoVc6hbZZ9eLae9ha3X6UTRzf1SKviQV5ZkbeRzf8Q5jNEWruuPLyYDzzgwQpc5LrbNd7pdXyUgPyhqnEe",
  "key28": "2ycMzxBz1pGm7r2PngVrEUQ4qzM1VNNjcVH9E1jnG3RJmyoEce7jHFwV72hMEmgfTkMwMiSGJHhTWVYT6G2KFeqL",
  "key29": "5FTpFmRmngoRAW82Xh5wG5n6kpX91LUgpd8p1kYKjFF63aEHV2CqBQcttbj6ivSi9Y963bk2P51xhdi3umqfDbWo",
  "key30": "4Z2jrvfTiqC5HGkJWYKZW5YFNTwmZRFB5MzRokNrkKbJBLHcgEg3coKWU4mup2xLTgKCMWoCgeGhC4cpNiPPM5CF",
  "key31": "NJpA31SR8K2ZBea1Rh5wHAAKjUfpqjwefptCA4oxvzXRh3XYSkUxgdYi21Z7Ar9yJAhREeAGXkDh5yy7qjj897T",
  "key32": "3zNKPq9WTJRtX1RcjEr6oaFpHq5gDGR2ye6X4due8CPrVkzbips4K8RwgPtRdRLCCGqJMkG5N51AKkNHhQoSLhDE",
  "key33": "Z76cHXTYea8qSRq5XPZvv9k28fs1U7MUafKRArd3Vy4N2UVE8NM7f5ZoEzm3tZUWqHUoZeCjrFSgF6XQRpoXG6u",
  "key34": "24TvpECQL8ChLaB9X9eK9fsaVqAtUzdak7SY2oHaaS1LKPdAEpqJsocpzQS6nDA1hqwMiX6b7ciLUwMDXJmbEohW",
  "key35": "4uomFZ3eHTqReV5WCGKWXWQ2Cj8JRQtE9fYChENLBUinNmooENfBjX25kYZwsDxkhdeSWdQmYjkHyPd4G3fJrUMA",
  "key36": "73LELddfyCDCznEyrqC7AX7QtAw5bTGzFj7Kxy7M3fHWxR7f5KL5otdzp6uV82ozhFaNLjFe9xQ1Gi2Hir1iR9Y",
  "key37": "5VFZDeVGan3zkcBstEYrEfhLFt5VzCy94whBd8vuYhWjfz8jy74PtvBNCtBxHpMi5zBSEmHiork4HQvh7avFtzmc",
  "key38": "5nE7thkkskYzq2gMGr4hrrqm8De9Jeo6KkQMFpaiTcudEdNrtJ8cT5MGEUDA9SnoEQKh9qW6yS51ngQVmpnD5L7J",
  "key39": "4xNQ2HmmLP5Ce1c1jTh6nhUcCdnETY6JR7nkeFRLHA93aHHn7qNgLUjPgwjftUKXbdtp4qaqWUKpBvKLt7uZ8X7u",
  "key40": "52ft4QErfZzhCmPP5R1sDUpFNoHZY4iCYivBqDW6tzVmYM3uEZnar6hcCLe4RWk8qofzZnXmyNkCkyd77Yeznitw",
  "key41": "4GXaxdFYrn7MzUbXXE5TGYcC4zuTtCQtndz6DrFNCpyp8qUVED2u3RbL3LGuqToWrjoK9sPfGm99yqE5Ehpv9vZs",
  "key42": "4nAgDeGHXaT35s8BKLnSsZvKdFC29BiexpMM3Jw2HscTkyVk4syzhf3euHgPppTJMfZ8RAKv7exWdpVnTmEHLnYu",
  "key43": "3ie462i8mtUAtGwbm5HSMAuSNqycZewSNuwfDicKa1agcxZMPJyLju8dtCedTQoJCuWUP7PtH3tKNGx6SMRELYV4",
  "key44": "2mDAT7hX689XpxM77a5hyRnyaGB29bqB3kKE2ekuFp43gnrAhKtj8kBpPFdpnBKGHEFEM13fxcrB8wNsn9wsLj37",
  "key45": "3cSzgRJfvwEB3Uhtcx8tdEkm9tDd29uStrVB2SEMxm6DHKbEumAD69kfaBqrP4qyobTczKmGrBKyMCvs9ueWRSJc",
  "key46": "54mkZ2UsoARcpwKsndcx9ujt24Nqi2Bm8QYm3w3bQToTMFczivssfYJfy3nuPunkutxj8YS2R6eL18DjCtsK5h67",
  "key47": "4Q7b2gzDMveoyMDtxJgcRxUjATiBTzoMcKyKrjiL3ZQXSqfXEjiJpSjofcnmjWoxqFUVi3RREC4SEQRZHD9SaJzQ",
  "key48": "kiDDiDnXdnqfDFJt5nczi3Tgm9Po2AsYMwQUAvs3hpJbQDLFdyh5LNK9eYuAfxzN9FRnVXvTSBLECbcc8VMEx7x",
  "key49": "4RTpfpmVZzQC1aYLEZfPQZkK1gDzWEBkFKAn7CyDFuvFbKEdur1BcAPRBWiRNi6WKddYeH2HYpQL9jGCNNkzj9PS"
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
