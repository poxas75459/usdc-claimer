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
    "4Vph23snWyYD7zV5BsQpuPCmkmdLtgUojsfrP2VcE1WUHjQzYm2wbiRGkkXfWpJ8PhhXinchmcxTrNfAbReBR1GX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wnEqYNwf66DVazVmTV2kZ9thqXfwtCxGhd3PvgZJM831YLvfi5mZgfM4K8Y8sqajt3ZfWhgJ1zzqnPffnrPEZTm",
  "key1": "3Uh4Cnhh8jotcjpP7pnYV562QDeBVrQTcPBLrX8r5zSP3HaMbkPe9Q8x4ote2BfTjEvawH6Da5J2ZQbDrdMr63DS",
  "key2": "63LZGRetM63zkRx1pDkcNeTXDMjLRuem39EwxM9dmQUgDLyFajdBwrFZySEiMPpSZu1MC4RCw9HNvuuNkoe22LPP",
  "key3": "49CiipYqpXB4g3afm4oFMbJTSu6Vr2WfzGno6Wn8JSMApLHWB5VZuYLqZFexg37YY233er4U8WzpFh9Zf6Bae6J8",
  "key4": "3fxygvxRozdCGcMniVtufEGygG2FoSH8gaNL4GrXvgziArUHWTqL4LRdVrTkvZiqWuHuQzF2ECuoHQAaxHP4QytB",
  "key5": "f74nUPCf4ZZgCF3HRQKZediU2UbkFx8P5LfdAmC8KpMcH6RfzmYPtXHwjtRJNMS2oapjgLn5DDB1iYLKasmNybR",
  "key6": "41V3qAFKD9K3BCSetJozcGtCRJNS745yq6dEAP98SzDYw21oRn9s9f49mRZzn9kNYCaamoM9V8oCswVixADPqZBH",
  "key7": "62zwPezme1FtYFGmTfzNTqB3k1BTNcMDf2oh9Ans3rmU5deVjBX4Mak6ySCiVK2wrmzkVK2Txd6YnykC8pFZSxHs",
  "key8": "5KpWMnYZoqNpxjRydbNKgpDv48DySBby3YrqrqZT7ueXV8GXnsMb8ySQ3FbQr2VRzrSuvDyetcFWgBHryzjV8Ztz",
  "key9": "3BEArFNfLV9BN8eozqbCJEbgHGUbHdNzTJHLo2HpEnk388pLSKDdTPPgAmQnEgZQEpJpcnHVqPUKjc3xQsSv4Qkc",
  "key10": "39E637nzutdGPGQht5KTeLMyTy9eRd1wx31JA47VUcn7jHA825fg7wke2zq9MTZWwrKcT85WGysgDH9KLRmEQz5z",
  "key11": "5eSYcpvkx6vxvjmoazfpVSo1wTLowMU5PtJuLQ5F15FNsjyzYw1PespRt8RxziPziHBUv9wA9azJ6kKNE3ZwNkFB",
  "key12": "47ndGtRqupfNX3vt6t7egQ6WUuSddmwGFFJp8QbJkRiEMah91Q3iVVkW5qx2ttv2v1vsft214JDoXMExpCzNdaKf",
  "key13": "wTCYpuARUS9iV7fMNP3u9WGiEZaE49H8Jb1Q2giqo4WVkQGSvETwkbnU7gK5jvsbSNr9Vmc4JmjYeESeFyY6UQq",
  "key14": "4f7MiJ6GvaaUbBQ1PhgkS8pwpGKhkARnnQdUrdzJnVTFECMmtuFgQ9iVcXxH2X1LqCgAXtGKbpeSYtrxThbMttJv",
  "key15": "ukm6GdHYeJTwXdQndNcGK6Q5SXpaCDdonoy4cN6VxeC9cVZ5jsGVi1UMq26SwGKEoF9XrZciDchccNvFYpNvTQ4",
  "key16": "4fA4skB9D46F8emBgbttG1xzXbpGxyozsHtfxgwwrWoEHCry25pyYsPR5wDzQSWo9bEFo2uGForSvsmifgGKAQvq",
  "key17": "56YT4ob32oBJvbAP6TrTM5VE4fJsWtaxZ2K7Qa4iYsKcycsw2LZqwJy8Lwfv1nMBZSvaNeKs6edx2iD9csGwbzBq",
  "key18": "3G1oZFfAWVRJNAnbagsisS5mrCAWf3QraV1V7FiDc1xAiiTR7P78KNZSGeRZs7v3qfL9yxQjGsKCyyReu25qd8h6",
  "key19": "5v5g2hV1xw1aqcYs4UNMudzcCTgshhKUruzAuQWXpLCHM2tFuBhuyGRyW1LAZRkkmwjjmtFnzrTmYFYRQdonT725",
  "key20": "5KmGgaPCFQduaJ65EkF1w9zs8ucoN1rz9yQH36rjvv86nseMnJy4b5qpag6r7x8BtzZ1SGNKEk9Nv5kPU1uXgR7a",
  "key21": "XHczeWRDJg4cwTCmVpVkGuqwnDSjg69zW2tSYrmKXaRNf2E2amUukeqYNeayBreLdeEyfFBqsdi2uRpYYiXnfCQ",
  "key22": "FnDjxm9KyGoNXtmv49AZ9uRNHhByhS4cUhg6kTbNSyUfBQT6npqLj5ZmF9EpsLYAjQDRKe779y5G7nQBzS93JBY",
  "key23": "5THC2zB4C9pWEwcpkqHLCDrheYWEn3vSQzCR1Bq1mJykRN18LYfoRgj6qDXJXdPFMSDdMnQm1eRfp9CKpyaTp7FS",
  "key24": "3e6uwfLFtTddWd4vJm62GqU5wE2epVFAFmn4ycPBXVMPByr7KDfx4PeASCizhpTfv32E3C6HBXUUvAgpT7xT7d1q",
  "key25": "4YQm4RfrZs48ruVpKQvXHuzGTUab8GgNXSy3tTrXfLpZP67ZGv3JD83pfRU6cXzVduPYEoQscVvq8mPHM3Ev8X84",
  "key26": "2Mc5AgzbjXpzTKUP4KYsQcNE16MndY7G47JFi15gYoFXSscC2mTFCcBqcM9PTEibRsUsEXF69wp4d5D3YvsfjzoV",
  "key27": "WtKBNqAYv3fiUtQzf6bqFi1oNaNwWe1Q1yK1tjEfswDyqYUMZejSjUCKpQT9qkG7GKNbHonLzQdMgCGjSaJpVir",
  "key28": "3rBqsAHeiaHejdSfUNvmHdEDAdNCKp6WKwXB1zieXbAAvkD4QCU6WR9WuwUftpt3PYunZtKvWtch6yoExXDGj17h",
  "key29": "NC2Dmj1wLFFUscv8Kc79QxGBwMcsy4RhdKFBP5GU4R6xwa9EvbJocNJi7tUqgtq8yiV9EgQPhaiSYwhuM2SrqyA",
  "key30": "637Z4ZxDyNbzXvCmTMJvv17S1Dk96JjMDLoCAjgamEfUFmkZEmrYn7FSw18JGtruzmowLnPWxDu9Rd4xdue6MGiD",
  "key31": "4gQ3ofsnjZfUZ8bZcmSVuWxbrmVboV3DGu5vLLkux7oXgSJNzKickUv9gEga2yUiBCC4t9t2HwxfzeFZxBobDe3q",
  "key32": "2C1txqmRBYtj84gE3jF8t1QFrcQ4L341ms3JdyhgckqbUjKr1EkWkNanBYFgTwqjzECLxXCSazFSophebk22AZ36",
  "key33": "21wAkgyFp7mTYNcMaBAYqwm5GVWXVY2R3MHfvo2bcDZFJNyktveC4FVcGCu1VwxB9QbLbgyS3hHGPeDu2g5vBwYn",
  "key34": "4WCpGH69GguBxiL3E3eTZrvxwisYHwY9wXKpp6LqxfdPS4Bxo9Uki3XFVsBTt7WegTMStwb8ZAfto75cMVKS6FDE",
  "key35": "5fjTBEPXpNZPBxLykjzN1pUo7dDawPLqPzGaGyp9iBTFaRQL2kruqgYgkcQBa9jg2HHoPnYf1a6LG2giCBnUEGAq",
  "key36": "49UpbQ5cSGAjP5MrffS8yEgQ5q3GvPKnS9cHQonEvkoBvUpw5kkzmLHb8nZDA1BYQNpd6WETiX4G8Q4TunMxv9cs",
  "key37": "4DyN2bywYtbUNuJJAYPeGroVQAfAg6B5PSZvPaTtuVpS14YzvTQgjdtkj476a1sLVYi9xW2r89YLJZgQ4G7TUrZh",
  "key38": "81qsPfsJnXhU4WU2xdztdggXFWNkN79pSRUpGd4BpTqaCbhwFT48UQtCztN13wopHsuF4q8yMDWStp7Vyw2ctgE",
  "key39": "3pEx6yXxtEVYV6kbwA7oQj921eGXJdmWDhQ81dNgJRcxGn2vgsZRzdoskAQGPpN9eCsztvBZwwC96zXmjcrbyspm",
  "key40": "4bpJrArnY3CMp5G8JmbHehMdhPCtQTAmBMNrdRBteArQQSXMGRgTRtTtvdpNjPrqKEjfi2iu18FnMqtXzwZALQRj",
  "key41": "2nAK77eFaA52cEN4Cnb6b6k632khkujrSFSx1RGdepT7iWkvHvghVq5rjtGuWohDEsm3e8rhiZZPSZ2SwKPMK3G7",
  "key42": "2SkJ5QHgBD62yvzHgeGQtwBJ5oYjCqG7GWdRRhs1fMiuSZNqS5PAp3siYv9nmqw1ybfYnG5uyAjfD4rEfj8nFnY",
  "key43": "3pqwLA6VqT2sSLFiJYfNp4qjW45zePBN9218fVBRuijfjxwV9g1ZDTVASoWevhWGYMWqKbcTwe1bWT9mz1XzyYGr",
  "key44": "5pPUimkq87qzb7Zumf38TrtEMYcXiXVcYpQdzWmonsXHSjkstioCjeTdcgAKQYNtjEivdca8jvcjFe4ZqfdgNfGs",
  "key45": "53Df1zzCcz4fD7mGRNBiiPjTjCMxNW74p8VsJfcSvjccUNdDbz6xAAEQu9oHC7ghsCgUxkSusNnaqY5dwEDeKotz",
  "key46": "4iQifGaLMRvMRNutz3E7w9UsBTwjmCjTE5zFDq76aWYw5ASF233nbq4iZ5iyUFz8XJg7TvHaiPLbFu9C3vxk7gnT"
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
