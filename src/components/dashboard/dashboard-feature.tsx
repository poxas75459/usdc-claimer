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
    "222V2jCosBfDftaWsVMf2qPtUg8C2rN8Kipz6pVJkrEi7jtJXsubMqbErRbr3mC6fnTvoPNW469xE4rzfQa5sx6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKnnRCeTiAtEmo86GzzM2EzNMXbDR27ZNTpebRayttZuCKrJT94E4mw6oG8QnUfmdu64wiaP2kkLjZykZ4wmvoU",
  "key1": "4SukqgT3H6SAQ8vMGhq7Wp8xbr44pozxizQdyBuB73CUJavhG7CrSdQ7r1dVPf3e5LJXcLM982vP6cEKKAqukN1L",
  "key2": "5yeHKs5RfgfekbRJmpoFQ1PEaWyEoyKy665FKMf31JWJ51ouBW6xzxXw8a9NM4c1BBPBgsGXrg2Gn7jiUjpQweHF",
  "key3": "4DZXaTAsz85i9h88NjBJvfbMzHmRrTcSXgxPvJfCPoF2rDRKQG7Dp5Tfjodo9uQJVKQabzQwyYturw69pV8LKoMh",
  "key4": "3rzXHQQwTdMSwp9p6irnAdPpurgND9LH9AUCRcduoUHQSJ8eRjgrnBKdcEH6adx26G5BMewrPrSgC95mDawCxuG5",
  "key5": "5QovrrnkYQdnaWW29KNxbkU2gwVmfg1jXwgzyKWmCbvNsXNhvsjrcDWjUv2eq69APKAbyyDAKBk1vDJnKh6KBEiD",
  "key6": "5n7MCUMpc8bawF6J9AzFTvvqgCHU9ttuL3WzcsjcBg8AMGcjMXwFQPRwaSFBVsSjNMsf8C9XUSPE3Lnuu7i6dpb7",
  "key7": "6bttgcDYsVZi4dkFzLxAmQnpsF3x11CnuN59w1UJdLySaC7vXryco8UqxcK4FLsra8TxArYhV1SRoLD7ML8WqRT",
  "key8": "bX5iHweDUa72ZAMKHSgKmwhJUGEWyPu9UXg8yGNLMhHAqqgV9qfBgNgW9HsWpmpghrbtQhJsUzpYnffPDVqBGMd",
  "key9": "2eHazrFe7gyU4APn7zuKzwNZaXeb9quHgkRDztgX77TRUCSRavSc9SutW76DcVxeKH5qqRTCRdkJTUAuYFjsSViS",
  "key10": "5HWTFtoi8sGhpvnCGhRQVWwFjQGUCVse7vUUEBgwVd4jeUt8WJ396xa7amMDUj74tydqx3FNV8ckp79CskXrKGKg",
  "key11": "4WxoJ3nos2XhyfH32ti9SQ8o2TUrta6RgNDMZdDpem4uX79KE4sPbn8zsj3DXDHxUezz5KaSBejLjPHQL3yig5Ai",
  "key12": "2xhfwFH1z8kuYNJZuWUvUCjEDHqAQiFjfhCfasaqE3aRmaWJgLKUizveZZ4dqdVmczhBxS3kUrhcw4rA3UGk1EwN",
  "key13": "3QFTUCE3Dpbbem5hHmenh6CcPTHvS7iGuwLzGvqKPQAhBFhHghgfcMUJ4JuiqsRFAu8t3Zu3uX817zdJ2ipN91q",
  "key14": "3yEqwRW7mERnAEML8bReov5axh7e2Pyg72DHhgWW9Wt6GwBepFNF4ZSbrgEFEENStgk4bFmmaQHSWcDRJLYj7nKi",
  "key15": "3wfr5QhBXHxWUc7wzPyQHgjcobjBkMgaBoexswUJT62hvFY5jKWrKEUMAFVKgWjp4nxGLcJSC12wjAf4CNMGAa4V",
  "key16": "3JpAsPef1bpBr7bmJqr17BXnBcrGr33S2nKnKuK52QbHUGVqp7SkgQgV7G1cHPXH1g47uZRW4b54VuknJPt81aix",
  "key17": "4buuZA76e69B9d4rSaZoyMfgqZihTEuqcSX3RpNry2iZyKMS1ujHzVtcU7HL6RENGzKwp7YKFgjY5dNWHd7MBaXY",
  "key18": "5vPShTAdz9x7reqUyjU1nerBqnWpfWQyN28TZ13WcrFaTenpbwDPrYPcUF6anfFQfNFWsH4SJ4fNDm5eSSPefNty",
  "key19": "26HyQTJRxKVSFbuCdq6sM5Udib4AJz5gpMPxUBkDFQHcq8zAsteNBHLTCA4Q6Ym4FGsgWjRcyz1jH32ffTmAwviC",
  "key20": "4RazFzSsrRc1Cd9xG5AYs1xfnhEkp8qGe99Mtsu2ys6R2AnLyHjdYbFfJ1ZJtgojXaPyBP9VUvtxfH1WgwNRpC2W",
  "key21": "4jrNwJ7RzEBQwbrVfa5G42cA3bi6LQ6ZZaTrkP5fKcgB9ERRCJpCfguiQC9mLBXmin3Zdo7Xbw1oN1NPHe5ASoo1",
  "key22": "2FwRVFjSzPAGqBguAmeDvkhZNTHS9KjKH6i5NpuMiT16noRqmVXtE1KY43nwVFijTbzssabfr8qF5Box5XJDjFg9",
  "key23": "2En1zWAxEgUW9h3kmk3eA8wREhxp2qwcVFg2Fss3VTSXLJJ84UXrU7sMHWHNsPNimZuMJk2BhHqhsdhkNxPguT2s",
  "key24": "4Z67UbmdnEFpv1guE1VSHwZam6thRRuVbiJJwoSpPpGCeL34zTyGk4hgcZu7j4nGX5v6gZ6xNixaWJjaSZT4bMrK",
  "key25": "5DtzisMhesjgqbMGVGEAGGX9PbWv15n3eamofzXNLJpN95W9qEESHGnAiPk3J2Rm9wwseUznQW9rF4WXXwR6vsz4",
  "key26": "36No4CwdhYzikuY5F43NQdrZpj3RxfNFgydpTps3Mi8RHX94mAgkrdmSCitLqaCrkouanSrxTE3ADMGFxyyEp87o",
  "key27": "56LVEsTBtEZZt7SeovMJQKpoLYg9RANRgvNL1C4FJZrxHP561NbqsnUpF8Tykb97CEvULucprWCdpngsNXPXd3jp",
  "key28": "3Ng9L67MryAQGoQKVyGTHc8e9pQd1nrPQvvJX2nw4cP1AyefhJbArcHs2JWNHUSLHdQWnPWc1ADapKtFkresWDhy",
  "key29": "372YVg4wbTKhdWDjSBtgEzbYNDhaqk2L33mKFBtfRsYF3yTVJcPwVVokP2V5XAk1YB7CfWYNEpLdJeZ3kzxxXCde",
  "key30": "4odCFovdAYVX8bbRyTCMVj314Wxbuu1EP458n9RN9JJuAh35c48yv6wPyA3ESv5LZtkz9GRNT9u5zLQe3ja7HDZR",
  "key31": "3HcTYs7rDA1EFxDoxwUt4ECmr1dLGcL7c5LxcQVXBo6g6cXVD4x5NPP8kjgv1ipSV8ECgxauUP7Ht13C6CSJdr5J",
  "key32": "3UFAcYdER9RUaXhdnLbmFSrxQQiKNwGSggZ2ynGPZVQdk54egG4d7JLhE1VaVHoKRpnTQv1Hzg8cM9n8SDkMKxnd",
  "key33": "679fxBBPMASZqs6YmQRnZy4ZjmE6h75UN7xrZYB1GzbZQaKYiZ2DVHMfTyfQ9bTYrVpizcZ88Sb79M4MaXN13tg4",
  "key34": "4Yn1XpxrEP3hEu1SDdUrLgqgJZij9PSaeb2QT4LfQJnJGvx9XKs7Kgrj67Ec6r1s7oiP9dYpFHaNriYsn6M9tfjY",
  "key35": "22xHAp8Q95JKMhz3LALNAGg74KyeLiLQc6t3ZjFQo3QBu8BSWtc5YP1m9wnTJqYVUTaxRqkcv9HsKPF4WzNAm8YH",
  "key36": "5fgtWBGNv5KJq1ttppMinTQCg8JSEWJ1pWuVU19WjgngFtVEL1w6Dboa7eg5ofFPYKRZhseyJwpBW2cK4Qd6Miq4",
  "key37": "Q6dkAeF7eSZ9puQNN6r9vzDm81Yem5ATypPhuozy78gKhyPAzBgPgrjMPMhiaAv5WCbWiPhxjYnB2ChEzi2TpaU"
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
