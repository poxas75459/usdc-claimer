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
    "5tMN6mVgRhduuA8ksm9eHmaAy2EjZnfvRFMHwKNta1MbA91LEAAcyf8ZGkJCZzGc7Pxbq7jXrxFsbXqVxt61Ch7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGH3sENPXW4pFJKbHiCaRsRMYTdDyNHZhMe6N6wVaVUJnVhauoSF7gnSbry6GSVaWLkeEmcCcPiS8AGJ4qEvxQr",
  "key1": "Y4gc2EuRYJK2yC9vKPisaJK63KsqWZ9EeEeyMr2mWAiNnqJAmVkfvt4eV1c1vxb4yPNmHVNit6idPyAUpHCxs9H",
  "key2": "3sVGnxHNG23JZTBbgR1n2w26Hh8ak8xCDQWqibW8LCmPKCyUnnEMWQo2XuZK3CBPvc3RQpnHY7bcQ4EQcgy8ZK6J",
  "key3": "4dxfkTRXMcec3rxj2dSVD37CgTXxioiueWcCqLGyrS425TM3BF9615cmMw16ZRsiPkg8eHyrsqtAAbQ3FA1wxgwi",
  "key4": "3T3qxW4XKFodUCJriFBNfQebPZHjH8hgnqVSjCtUbEUBYeM6crpDps4v75y2UYyyk7CGkGWsRHUd2wM5jeHfhY2p",
  "key5": "5rEjxtjRJh9Yc9YsdT1An9BpFZXDUqhZESjanNBAY3jKZa1uRCVeMkSAxGHyqR9tvdzaEnthVxrrZ116tmxJbVeK",
  "key6": "4M8XpGj7Lzr2prWkoq8U1hJX4QptaNtqM8N3LAmeHzdjdnrDmi5kecZcqQzKYRKPKMxCYnxck4v9QTeyK6cMz4UZ",
  "key7": "5TrwZ3DJACHCc1VTCS1D8nudow4ih4Z3PDvkyDNSBbNjhzsbZxSN6K5LbPu9MuFTzFY2TaUBQgHtMH5CuWMUNWPY",
  "key8": "3SvVkvSdFNQ1EXgpb3pwv3d4oHfZKCwki98kBXDDLUjCDn7Px1nrHV1sHLscR3ViyP8iMeTBRQxzTfbut8wESHg5",
  "key9": "4Le7whc6CZJ8dMtC1vNzRAKgyGu5cwH4oq28VqvQ8J3QXkXuPgdvttj1LbHe8PiTj3kvbxxvgfgipBEPAYkE3HXy",
  "key10": "3pCDRgL1kxZsY919EZcE3tHH9hMhbh3t7o6mLVBYUBj5LGhXdpzMzYsH9cWcY8XKfyVsXKnchBnxMBx5aTj1jVA1",
  "key11": "25WXB9ZPCDEp9CsJwd2pMjZhu9Kncosd1eVmzADXaNKDCSeTGCjr4jzyW6nRHiS8FHwngVTccHVbESnzLxJ5ZBq4",
  "key12": "27XgjLWtnmk3GthshNrrFmmYGhJQeswBkzg3q84rtj2ZN67z7X6Xd1ikyz8vjXv9AwDmymrqm3r1LhCuM6K2EDQJ",
  "key13": "2z61Ggjg5r1Lm1bNWp1jGj8rTma6a47yc4iEwvRdxtQUdrAShqNpYK8LuzzDDQ8Q2esGSM7mndPAv8yUCGRdVhEC",
  "key14": "51r8eRNWEKPGtmCacg9du5r9FAHkDxVd7eZsdE4DQUZrpNDVSRxqFokXw2PJ3fdyjhnge9rkDDNRnjiKwwXGNBR5",
  "key15": "4ypMC9tB4PG25j84BazEbWByH8jfXGJ4dKFc8SmZv1SsCavYXz34hLRx6ku1QWdc1xmF6g5SmtBGcTpWvziAscN3",
  "key16": "5h8sy6HvpAhWmfPthbgZLawp4Zm42ZVig9PeRaXPkgD54P2ftQZTkmeP36vdWJSrxr3iXAeQxMGH2mVB4LAtA2Fv",
  "key17": "3iXV18SUc2BZ6JurR6XkU1YwT81BwB9SKiQFPUAGEHHYVrGVg2AuFr849wGcUaAZWCuWsPRc8go1cffRVjeX5rsd",
  "key18": "3RxLeBwmx15D5C6Wd5zEbQGaAJ4HiPyUMX3UkuDPbbxr2RHsyx4hZ7KLnmiv7quNpB8t5byXWGjiw21uU4h65Bhx",
  "key19": "dJxR25bmHzRWcrjMDSsNK7xRHsD1vjH8ibVup4xqkewkKwTQQnRtKbkzguGhdi7fd7rGCjPv9motaXpjndidfhy",
  "key20": "ZAAUY9oSoX723oRFoXEe5Di8yrTv3a17yJJX4ppbe62kPh3VBYogpee8fimiufbh9qf6jghfUCH6VGRSRRNgYLf",
  "key21": "2AeGRnGwGkgsaR1wkfPooXY9AF1JLFh49TaXi4xTd6yiibiiA6AjyrmGVPsSuHTvKwdJx3f6yygqSnrSt5ePkQUC",
  "key22": "4c4kzprwdxf4HBPzan5XU6QyVyMpWagFJdjdCt7nhRuxWTd4eW7ivh46GQZBSXYFFfytndfPMm5C6xJBxWBqxhoD",
  "key23": "Gn17WnsXtYqJXeYSbk7E7XJ7jMb2Z6Mp4PhxDB22GkkFNQt7tpk4GMycT3YtETjAhwxBfpWbK3gJkbNBQwEEvAr",
  "key24": "kZJ5faScLdK7qFq3H8CmUTMLJJbKeHUyZNrsoFoTiSRu5pQG8RY6a45JpGiNUKb4CL1G6rumZLZD6sfMqAnVLyJ",
  "key25": "ebv3ceobSfsrVRk47ym9NfeKiPzKN85a2qQNSLobGNYjMUC4vmsxZGDQE94fkZrj8KajD64hszKJHLQjSTPQdbb",
  "key26": "4h15KCgYwpdE5U4EGNU97KEXXcA8FkxU3PBr23juCQaqHqC5srr5no4jQMsf3oA3hDBWT4hviFoT4zHJmGFDeQsD",
  "key27": "2AgZaB6BnybctwnyAnXLB4N8kqA8c9VLmnoUTAmDMj8yNzghz3AQZjU2hXvLAYyq8rC5hMXVkpr36vViJCm2dsR4",
  "key28": "3kw1NCvRmPEoEzat1LrRQHqo8VyFjgqsZ37s4r92aoz8L6iwNnVA74yQKE2VgdKL4Jz41GsNGW61DFALRADPEWsr",
  "key29": "665swrcXA8M73emuxN3dwTpv8r7QAfM7aep4xKQ8n2ZfTnbaiyy8zVYwD4RDkLQEQUqK2gK6sTLkzpzRPgNbn45y",
  "key30": "3gxMUjDA2Hvz2S7DvXYzZ3bqPJ9shpkyb84FCei4CkhpX1b95GNXsifjepUHXQdAmUX9SG4mKMuW5nWUxpUsUL6F",
  "key31": "rWgsRymCNgtiGoohhHsqnT6CR5bJSmJ5P9kYX4icoMmpvNAizKseLqF8yprPyooPcJH5CSoYGPjfpWshgbsKmKc",
  "key32": "G8S3ydkgKhK2NqKJaQoBTVVCy8jBdeeXaXWghh3hmPbe1HFm5KkWcj5cGuAV7u4gzMGJbSj8vFypxfyANeK6aaS",
  "key33": "37FAH6CS3FmPcjSaHpwddNbWiQJYrM9M65nT1TTnhK5WbGKnCuEhz4qX3E8K1E9fEoaKymNDDvrWYwZtzDewmr7A",
  "key34": "3b9Qo64RTjJAzDqscyi8hPqvBfFzy3hkPPX9GUEmCj2QE7trV4TZ6V2AQkucQGsEPKZf71ctCDJKhd73vGjpauqS",
  "key35": "1L8zczpRXCqGZGKT9M2ZCcWhRQucwUB2R6wzBJ3tqQDX4FLDe9psD5CTDWJL3FUHXyrjRWaMNRCmb31iNLrxXcc",
  "key36": "3d3rbKmYXQAqjohvXbyg7ZphSr92vAkNz9xB1kU8SwJXtKj2D8KH3JUouyaDwfns7hxP2pWJ4bakPyBbAa3UV9VW",
  "key37": "31FNVebXaWeNRRVEEy4xpZu7NdbEdj8KNQfUWoh9w5zdPvqWQMtdJm4CixkkUHYJ251aEoms3Vkr4Bf9n8gVDBJU",
  "key38": "3Xw7yrE7tKFwwH1sjKUgJ5CWcGZWMbr4obVYWCPYfqXUMTsbwXYXrAaLqN8rdq84ydtQsdnqwjt4zXUc4WTNxLCR",
  "key39": "bNBm4XsQuh3fuZXwtXBY7zPM7ujnv7ubYis7pEUGgesRqTHQ8mHnLDUjWdGmVvuhhh2KMJw1mb25woRHnUg7sfS",
  "key40": "2vTLh1RChPyR2rgAd5oQ2JkmMKXis9SoF2xKQgcGUHofDtoyRYAQo1P21Gu26Whb2mV7XcmKoeGZ4Eg5Y7uUrAYM",
  "key41": "4UzaP7Epk3oupRRfcz9cDoJ6H445qyrXmrHjiKwMKXMLKkrkmDoPqRzL7M7wMSBFTy1Ny35bqKnPybz4gX7Re6cz",
  "key42": "3jEr9i5jGR3xq6AfGEd9FJBmf3QF32Wqb3C2U1uDMvYF1niSZwy8obKgE1SrR4kDGznRrxEustgZLtUHn7gUwc7P",
  "key43": "kaGBfjhGLCdwZCLLwR8J1CmwM7Jm7jaNPurEtLpRcnBcK4KBEqph9n47WZbjqSQKf7hL4iNje9uUkh2KRGfLNJc",
  "key44": "3khi5GEMYnZWySGVchhWssh5NTy41T6ZQtxrs5csUUh9NbroASuB3m9F6VMwJ9r2HydSZR6cAjvuPEPi9B4iBAL2",
  "key45": "2Yz2fsiGjWgz2yyMWpjJxa9p64wffcieyyapviboB9AfofSP2Gi9XYJPpa2nRNUaYMsPA6nBYb7htVSgAxLUwMeE",
  "key46": "4PmxzvDFPtyNTMgYiFgp6hRV12muMg6sNepKoaLAW17RUqswFoqmjoAezv3s1LqSyBz5WeJsgiwMQ2Br6vFjjVUM"
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
