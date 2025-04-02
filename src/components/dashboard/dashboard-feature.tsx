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
    "4hxPg22pxC5Pf2VtsJ76KNQXRH6VCgkcTgKbGtwPVZiXMp4qpiEsrSZGSLcRqt6atSvGgS8oKTEoVtHVXL6NvBXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABaqGPhnsS2dq6w2SeZLJDpnBUQj1zGLTCn7c8tJKxFhmpSCcm6vhEs9gpaSg7C9AVALAEKMjHAms3bNWbbKsLg",
  "key1": "mh9ndr8HEWD4kXHZWJj42iEQzEziJyEfdFJi15PoRkB2zaoL3FrBoEfnhnfDH7KEX9vLV2ZfCo4CJMqMZy6JJwe",
  "key2": "4TAFyxa2Y3yE2mxYiZbcdNjApwWmU8e61FH2K9bm7YYEQqHaZXwBLYwMzoq1xkfr4rGS5E7B9MucdR3iUPmLRP4g",
  "key3": "FR1DJc46RDQREjDaMdQHSCi22jWL4t1TVmh7ykEBYZjVAJpf7ftwgdCLmm2oqVgCvtFzrX8B3WbRXPLUuYpiHXr",
  "key4": "3ZZbjFjLKrbWCryKn7mUVqVBHEvje3zKh9abGFu54t8cqG54dNW28SFaqyCKH5UZQbZe5t84nMbLsZuo9SNW63h8",
  "key5": "257YqF8TwLEckmrnrB7j6WgWw2PcA1soVHoiocCU1bffMiYUQbpPgEqsFBVbWdgxbYnbS8m7JdzZouzTgxRnKyjQ",
  "key6": "25vqp8KeF6gvNqn3QDeGokjgqRXwCkrwUVov6QkJMdqxRP3EPeLPTKKmvTyQ1ddMKhFbQacFkQwi3Gmof3XEs9Q3",
  "key7": "2rrH68H696BgcWWSxWKsNBg6sundvtzMDK8PDQzm5NXWDeYhV9zVA5zPv7AizjGigWmmjuXVt3urMksJdkMY4aMq",
  "key8": "5tDQcB8KsSMZAUfLcTViqkhevgZS78VQoSTnzeRv8HX4RUySVrekN3hyh3sgnzsJLBjEi4aofDDND3kvgYQ5iV5f",
  "key9": "aUevT52RpGpaHBxRfzxWCqrmM3ZDcEY1yAP6NnRqz12zEJPEBwd9USDmWsfmHjzdpx4MVChjeLfweeP8atJ2fPR",
  "key10": "3Cmz6oGyjG8qziiigo6qorZ4GLGELmkGWBiqep2HRnwZcp8VECGBNXfuJ9Mqk8sDnNbUPhCmqBbQcZgQaTpFUx9e",
  "key11": "4Hovk1zAgjCw5vD3pMuPLANuxr1Fbu7MiMgpCegh5gcVk9imxza9LrtTfBHF2nANQppxH9DZ7DgfMxERaNLYvfPf",
  "key12": "4kGxh23G43nf3xjdok88hUvuKwdxdaVJxbB25R3APHse9w2iEQyibsZdzEDhQGWHv2J4zPmTcb4hBJCYqk8qd8cK",
  "key13": "251AtzuoPagUBDSg1q8NdjB1TUjUG159iYJX5W2H4jrSPiBqtCpwEvGsN1R3GVigwHSNcAk74aL3Mq3h6HPrYcuL",
  "key14": "2jXjeGoGsyhGZpNz3BWFjBCsct3NrNw1uXZ4dbw4ocQF2DiRiNPJM23BdxbpYDdDfdReMLGsw2PrSCXAjHyQFTbX",
  "key15": "5aCPjGErCdNWijkTWcFdHRFKaMi34LqLAq5jey8CvsXr81NYoReqdGwizUUUwD1s57SQG3KU1eqZzCAjDuvwQ67J",
  "key16": "MRjKrTiHBVXmxHNmijNB9f6tGGSBgqjHFdkMUo6US5Tj5Uz4kwgVCkFJPDwHKgJ8N4fFT6E8u5sm8SLgPrUdi4q",
  "key17": "4VFUSHH8xehNhhTWgnVY8rH3UQ8CmQvMqQ5aesoJe3DZS8EHeHgtGNjDEQMcKBq84KTsLCT4YagZfeeJWpxaMxok",
  "key18": "5K1bPeQCv9zxPjmQcmGC4sDx6XczeoupzpTpwc5Rb3wDhV5sFGRKyBHbWWBb4PE8d8ZjX9o9xiQAKPZt8RWb7k2z",
  "key19": "3k8u18tc9pon6jERjSTJRB4NT2Auoso5MFEXt63k4KxLbSTR313kjzpUF9jDsSoNaQ4QDox4K8gxXvg4C47xBboc",
  "key20": "4pHfJqC2Ky1wcS3qCGh9CR6pPDBUhuw28xWcakybAkJRSPac6EPkofRyY5wbBk2Zq4UFNCehwgwuUSZzU6CdHb8X",
  "key21": "2SmXW2Mmgy8DKctp3hmpCnnw4neLVSetvVjxyUK33HXD8XejgLErNjw5LwskkLkH2xSG2kN5Jnix8ptx9zP4msSw",
  "key22": "3EB6X6Bb8Vcp7pqBznSm2GnBc4VJ1uXYHRjdsq4oYhd76Sr5mtBrPkp5B24kTjeDZp3zAczwtTj2sPwrMMdQaxjj",
  "key23": "W46Pgp4r2BHGTEaWnGRGXYMd2Ho6taCS7yDqx6T1anX2mCQdNipBz7F9eB9BYSavPG8GXUSjjHwdqY5gbktdWRB",
  "key24": "5kfE1kNuyF8cDvBn75sU7VT8wqkRV5dg9sbRuP7DiGhSyp42NuxfKstidiGSPpiuTRxAJK8tRYKN9m3oM9TCu8zj",
  "key25": "2sRnMTx6L6NUiNJqQ4kWRpiuKwusLMzcgE8ubeVWAJLg2b5E9mRWQLUz1QfMvYHgb93D1dr2zp8ueBqUBPtSAehY",
  "key26": "swcvgwkqJWXwUtd5C29yh2hMwYzNQeUoaeveVM7sLyPSBxSjCwfkUS5hgkQRbvuvY2K1mSLb9HTY8ndiHQDi8UD",
  "key27": "3wsx1BSpDXysKHeh3YC5CtTMe5rWxGtVDP8H99R5YPxnd5fZTKXaeGjPvEKQ2pMcEBWhW5WViXpzhXFry4xPcBjs",
  "key28": "4BkjHXZY3ngSkeNGmYUjUeyXvdfMMA822hys1jvKkVyxSRkiuXF3S56Hh5GM2dn1u2qDCTTwZQ5UmE6ssWSUJQwj",
  "key29": "4bxGzcWvL57uqUQJkxjMRgR8A8gpe68dYZuk6pRtwW6sQtyB2oEiEwhBm3mCZi6JvpbUN27Nkdkd5nxZz4XGS3LU",
  "key30": "67bcn5oFp73X2rbgaYkKdtTVK74w64TKnerayfCYa7P2TcuC68YtgeL47851HcyU8g6jdS4jWacLugc6BH4uy4Vh",
  "key31": "5P1Z2s7Mf8sTFHP9sMr1dYt672FQtNcfyCPrCALaihBkH1U3NBQJ7GTiMpbcUB4s6AFbSB9MVwQ6fmTKGfbtuyCS",
  "key32": "NzGns1HnzxLfoKMcUDGU64yde4euSEM5ifW3pBSAv2YjhhGWYKYYvHdLwfiaHUZz43bf67LW7vcyAUaUf3VCGm1",
  "key33": "ULPkbJCnEkgYMom4gBNiWMnUZ475byzrambadMEAbhbX61nucMM6hz9P2WVhzxkwLcgb26V34YwwCmKHiJjxweV",
  "key34": "JRcvCKb1ukPd8MHATT5HSo4SyXWvEQkfH6S3sWrKAzDPLmZrb1RBBhZFnAF4qLMj4HcNEvbqazXYkPFZeLg4vGv",
  "key35": "3gZtehbK6S8Mjfcv5tPQMopYUfBzDhRQyattTduH23SYn9KdUXSfL1McD6bndWaQSpGRSozQ2eq5Rv9QLBgAwwYd",
  "key36": "2GmEKeFpXqHE4pQvH71ncCA5rqaKoZqVQYaR6uHpdu8RRo3dHXqhAhwhoE1C664UtVyVQ6ZcPGAuMUWdCh2XHJsj",
  "key37": "vRfEyXyePPVw5SGzF7WifTeAA9aH64C2vn7KnxpWZPRKy6X1CAGtrnz4XPyQgn7rLjgrCe3gfcJgnVm9FjMUjDE",
  "key38": "4Szy8Vg9zgnNYXJa3VJXf643b9oaL1r82xgicWLSA4Q3NeKPwEQ9b1fkTmL48hN69A4ib3TkSpuwkhPEUPxvPShi",
  "key39": "23UkQvLyVGKbHGX516TxeNdjb3MjSoWVMA9UzsmxLEAjTYzSDLonrBCR2agNYrd6K7gQYp3T9qedVMtdXD39Gb4f",
  "key40": "4DWTvLitwZ6k61Z8oNH3tUabnHTJiz7iX27Qx3zPAvLUC7VYivEmkUpxskJ33h22Y3aE6EQE2VEuaTtw4r731J7h"
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
