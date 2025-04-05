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
    "4h8UwiKL9UuEAQLN1y95fpyU8Xrn1oZmY7TrYPyMhSQZvrxUYtoTgNXETMc2zGcU8D8Cu3EtR24NZcENXdhezbHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYeXywp8KgzqrEmFZvh2hJ7dRq97sapFexjMa4SPRVTyiRFf4HoMAZdJLUYZK4sUYV5PZ2CD9JkTsducyfcrCpE",
  "key1": "4V1q3ugFdbo3PYAnYWvbFsqK7rtei9Z2xPUF99Lcs9yWcm71LqKjrzAWHfV9qhzLVPjUtsr61RJBu6DZsmuPF5qR",
  "key2": "pdN5MKFGtiMnetRZQbwxLqr1qCpTNDd5FZWtQFe8Xynp2mCUqSykfxK67KwtSqUaGuEW3bp5yBpDepLNKWVMEdu",
  "key3": "4CoaqV4esyYS7Bd9A27ba2ERYmnoNQEr3LJKdawMGpAnYedSzuY5f7VynEDxNZh7qFVX1ri2ryyB7bh1RjaMyfQt",
  "key4": "3AKjBz7cStsDcNx8qFUjA5eyqEYsAjqzoyy48j2jE9HKhk3LQ4tCrhTCWZSwwWU8TiL9YyRkMuc3Hv8BQDnUtL5q",
  "key5": "2HAhCKxfyBMTYveERLJ5WabCCq7KbQWYSEC7XEwnNmW2zCNBcaJDKwwD6duCoHTLNka8A1sjmvdnryAogM9rxuc6",
  "key6": "5uYGSEsMeQNqtCozCysZuPSvWAciNzAQRTUakSFw6JXRtfyMLMw1sGYPrN8J4g1rJWwneJndWx8oTwcYaz1jnoJG",
  "key7": "5yUxS4AuHyqTbbkpnzAXBMLhgCurJJD12rbdCmshHADa9irMJFqNzNzDjCVot42Z3LwYshBz67KTRdqMzkpFg7SN",
  "key8": "23dUi8TwJeNdJkXE17P5RqFSTpc7Ua3h7UZgdnZngejALPRYAfiiZfkxVZewFGx3gYQyi2fjvm2xar6fmaSEQBCf",
  "key9": "3LQv4KUB4JoZgjPNp3Nv4Hy3uonPia75hWVWpGvaLu31KVSbg62g4XPZ392H1525Mj3WSiECmbiUxzLQcbxALAUV",
  "key10": "KjAbhQuXQbdc52rRYkjRMEhcTQouhRFjYtDZeaW9NS1WAhNzTisWfAywb1wf6Eaus4XgaW7XaoMWQGCAx4yvu8S",
  "key11": "67kwxawC9ZMV9cfGoNuybdMe79hURubCazaWYdXEtPBYyMEDzbdyFUyJWu6HyFrBEiL8PKUjsX22bmsHWStfcLCz",
  "key12": "3W5rPp1MQM2gT1FY8TxnGwsHJ2xdpVUn9zpcX4CEUKfHcj1HvzrNHMd8Svdb8TUKtyeiLMBNjqjoGiuJkeZaRKCm",
  "key13": "3wV97nfeUCGQmLurMTjihHEnxfz1DauXMBShQHeJg87jTsKmH7dmBDH7N1sNAAXLYfvtrve1NRXFP6s9LAU1zC8c",
  "key14": "8C39d16zp6X99rd8e6Qv6VU8AuguGbGpFbTZibSyCAY2BpapeTtNJgmMbWBnwPkbNAQ3KQ8Wi84s7hwT9tWipTD",
  "key15": "4TywUjWdjzezfQHkqcc71KYT9eemDGfhTKpjqbHRj7qXvEZWYLKyvWPSJsJjqgM7tJg5REHWMpejPKiGc8yYhjAp",
  "key16": "xHXYR3kWihdTqSHG73ANRxCmLMD1ibvHdsCFwoJP7Mv65DiK5Vdrm8rbNmCSKL5oUJvVpqsYfpf6CeyVZzHCgwq",
  "key17": "4SigsisHt4x1DzATvbEVLrpjK2fNGrMaQ2hYqxy6zZZoWwXCdQXzZjp4qzn72sFUsKVRt5t1EinbsDNpqK3t1iuz",
  "key18": "3K3mpw5sHP55owFZmXvmn7thqgmENB9rYY1853Mn6BnVPp4mAwLQ5uRdRHVdW4hocD3G5nARoxXCGd6x5E8mSbGb",
  "key19": "4gAy8buSNSqzQtCzBnpUzyd6Z2f6PtodafQb4uP6ChDwoyRV7yNAJ2ZhcWDpLXCanAKmv44emREasdNF8WbYTZuL",
  "key20": "Z79hJjfFG6hgFdPYNz7najeZRhY3XWuSATBHFs4yV89VCZuAF1rACKLp7S7r8z9PQfCQ7KaYu95LGHjTeKnrkyo",
  "key21": "3yAHkAS94sFto8jXTpDUmkFFye142NwaYbsL7HRpXmFkVEHbsFmV37DeDSGqbSZpMQSJr1kTiooNVDNj7VAtaRDh",
  "key22": "jzykauPEUNCxKwRxr7cKW4pXP6cuYf7BPqi4tjrphogtPkAkAZzwq5kRQP4UKjiHRLiybUVXsrvZ4Qjqtgf7o1u",
  "key23": "k43mo1revM45GuATAX9LsiMekHVnT8pzesgTFZetuGxqfbXrvp371TjkDkr6iZcSwBd7gyagqrydHRjkmSLFKbo",
  "key24": "5A9JWUqrWmS2LWGry29SEUmEJqubNeEBAXQua6b2X2QzudrB6dKw24TLR9W521v9T3xzzoNu7rHMq9752gxPK94w",
  "key25": "3qtE6aCKUSyAB8zpbTkFAmxNFab13Sr7G52pTjdwk2z1pVMsxRiVqKNVXRBTYKeKjgEVkrQrkTRNhjwWMdfKTcM2",
  "key26": "QQWqShDVUqbu2trkEz6DPNBjpjFPXhnnLr9xggvAYgDxGEnbUsQpB711QdHrQM1CpVHt56xWLNW75tg2G4mK9W8",
  "key27": "2KGfJTUaEcZQcr1fBwptDzUSSUiAPVpHh4jnPH1BqTe6m3H8Kdp5DAgWUasvEyuZpjQfjPi8o4vqfjw2xZb1Kpx3",
  "key28": "5r57TCiG7HNvDa7hbUPnR21oRc2cqhU5FDRYP3qCRvRWy6pV5bp1GfiDCLG2wZEWFQtUeqv5EUoTrQnRvEZeYAc6",
  "key29": "5cW9Gz2drZo7nKpVsYj6QPFLxVHiPk2FNdTx5tosePWe1KgaFWUF64Px1aMqpE2W31eUCp2R23SdZmoyrBEtqxH2",
  "key30": "5YMrPKdukn5K8ZHk5VEgRtQY7VPqg2ob1kS9vTkRiPtrSm5vBmBXwyZHbhpgDR76J22eMWDmkbHMGetR1TmSCzQZ",
  "key31": "3SeoUBd9TTKwkEjTK5CWN57ePYnjsRjBYYFbq6bLQXRwws9tgE6yoea6H5Q99KcompGTYZrUfeQKQ8zrZqj9fPPJ",
  "key32": "4cAtMZuYpLx42mvdG3kdoVdY48A5gYXjWNWjqLyLeBWDBdULmhDrjarJDdpPamFm2BLtRaBtZEiAzc9sS3QVuLAf",
  "key33": "2abqGruPDMKgZR83a77a6h276rP5RRqw1g3LnZzqLk6JEUdj47sCVe7654ohX1zB7PwPbu63ZR3Y184JR4QLygLp",
  "key34": "5N94Z95S3AkHi2SfxfB8hJAatFLMLhtq9V9eL4vMjxRHfGFTwmC1bHAXpB5DiPAUnqANaqsYTF26QvzgiU2x5zrK",
  "key35": "yR879aNUEZ6LhSWvft67CTAzdraHvt95ar4oSPapf3heE32vNjSgHLfdmaSDxCZ5VDxtd96LZ3p1JkiDCEY4Pob",
  "key36": "gJC4dB3LtHjRtjNujMPqHVxgfar4Zzkp1SeoHJuWeQ9GAd6o8H9xwwVWoRNU1DdthJsrbabGkKH52E7VjKuLCi4",
  "key37": "4SWi5Smdv1TCKoP1Gq5R6rzkJiBMzxVfNb9CjpYmpJDoiVrdm47WkGXRVzBqAuyNukFEdDmKBTEScV4SmHYJ7QZj",
  "key38": "2hqExt2dSnzHfnMMupaSYwRs2CZDe5m57L2z26XUSyM5P33SzRdXNZPAY3Ebqq7FMApC2XDBp1JNJDXo99t2P2h3",
  "key39": "rYLj7pSDiZwj3EaL4Z5SXtj2WJLjW2Eiqg2UmMy4bW7dvuxbLyAVTJ5XtMnYJQrPxJG6PERj3dcK9XyDJXXmb9A",
  "key40": "3jD8P1kTKGeR1iFQkLDxxLqjYVvTMx2qH8vsFkvDkDUFxLKsTtMbRiS4K5878JXLJrrda9XJACSLxREn5WKift4g",
  "key41": "4RRNfFNGJ9ZAABNR4zb8mjhqUANPttaGfCuKqcii4EAvnePrBL6x8sFjcNtfqseNciKpRQAgJEq6tbEUZpc7d61P",
  "key42": "63oEDdXsChefARg6LeWK1HcFgxB8MUKWqHEoUupSzheiVkmwepGL9FU4wz5HAeFKyLFPndjWDi5TrBfB6xCVnM53"
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
