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
    "8CB3Co7pLsTbYHgntGqhj95cRiijDAGbgSfGdB1wQwtmP5BWmQPUBtY7kN68qPGyhLEu2ttr8Ca9dRVn9wtJ5aF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3hb86ovyUCLKV5ZwE7MW1GrEXv6BbAZmxMYLHDuS8pB24VrdwR2jRHE9bRdbJiWiTJLj2H1BPcLXaa8zFa3o6E",
  "key1": "4YjiHmNN7mApLurPNu1Wu5QtsskbbpckCRj7LzpBKkxisBRQCbPisE3bqUBtwU8vLmxCVLWhfnMmXcJQYRgE6Rae",
  "key2": "E3fajfYavQcxQ2TD6XoF2R3hnKEBamd1nC4ozcLExGNqqvn1gtAZPN9y1zmAak2U9SEQ6pFUUuBJjB2fFwFRbAg",
  "key3": "64Cr5NMtqkScXes22HPtak1CBxqCQsad2oNmVxhEYLJoqt8RS5saeoTomEm6Df2wWS64cSKnHpfCQZxDQh5D93SG",
  "key4": "4PVDXFHrhEN17fMVeCrSo6oRaz2VNKWqCx9BqV3E3epqX1RQTXfAKUtxKZBMCdQfNyTfWUcVBjggaVqd4gyncdn9",
  "key5": "5xSsB7sVP68Godw6vA7vxUhJVBPfMyKhVPZczWPi82ytxPJ58JFjF4xPxYEpKFPRPqfRAAwQuDbuW9JJ6hssK1xC",
  "key6": "65o1U3n7LaNHXWLVraFRjZtxjGGZogDqsct8Fq39EEuyWsphCkK6is2zA84ohHqc8MHUCDeque532XiKKQD2Zkny",
  "key7": "5keahHUg1CEknYUgjN9gBEMFzgB6QhMUjbfXThRjNXypyVA6uz4WwCkjPYfiv4serTUhRtTk5vukdCqC8cQ1mZMh",
  "key8": "5JLQx1za6Z84PVUwwGMjb39YErDtc7e3nPZw4wYTpYomQnPUxmGDatVZjAdFHz59igNxBxLgJKNLjmsd7FVNP5Tu",
  "key9": "34BBPg1GuK8z97ypr31wp3X596HoEhvqJiTHW7ZbraKk9MxT67SzHLZuw1qUtNTGtXRLgWG7tawmyoGayWgFjmBz",
  "key10": "QBdbpQ1CfPnZTU9DaTBJbT1zkvVB2kjaxJvyjmRYV2abMnxDpAKorz1NocLWsGy6KRCduqnVJGAqqRGpsW9DguM",
  "key11": "2whwdDxGoTkD5hsqPz9xPJBdsGtCbdG4bHH8iir4dY8mtPxBo37NybdJXHHPfLRKrryb9TDJxPHBjgbawdovzohs",
  "key12": "5YMioWkppWeDDH5geCe8jjqPfyBv69aNpyfNsZwvPsyCbodAiK4P6eevuCGmJZwML6R4exuty7eit7XTdNjdbG3t",
  "key13": "33c8SqqWYNVVJdasWvwCobT2QpF23ACktREmrzxKKTBed8iB9SQZvLCvrvGJD6e8n3vkBVeuqdiaZ2zkCum27bXQ",
  "key14": "5SogKbfJWyuc6TBUB7CSfYWJVCPXCyT1P5xRWHXB3ydv8YUyE8qAwmy1VS4huFJ2j1zu6jq8hNSxoXyseudezE5D",
  "key15": "46LjjdapNEnQhPspCVKWFzt9yiwQ9jBxUWLM3AF6iMJGfSFfb7m1dmHTRVYWfKneHNCtU6qhgBmHaBZGHxxALTYv",
  "key16": "2Bz1zXX25BoGCsgCpsomsS3SZ1TuL8uunRmqBaAsMtkFFxhweUWTsPJqEE9WvAJPdUPhjkt5KTqSn68VLGpT8VXJ",
  "key17": "4pekzB1c3dX5MwuyC5Zp8RjM375AKvpFBmJF89mqRgTmQiHbnzzmMfaqxcUZPjaGvEP3m2AXBD5yEVnAvgyeJesK",
  "key18": "zWBszstV2hcZqDN3UUxQx4C3RZVuS3RjEd12n6NjqySAviW5HYsBGEvNgSshfoJnTJ7GVJvFWE7tJb4QMimc71z",
  "key19": "5aLJt3H4o1FyP2qWWV5rBrijawwH8Bw3p8PXBfd8LtKYAmMrpwyc4gJwFfoqznrRcGUcXmKFg5mB3J3W9FLThTZs",
  "key20": "2hw3Jt8wvd2gBwGBBuWd9n1VwaeY4nJ8vKREK1CPE4CyzqoomX2sWkxsbRM3XL1266bJkxiPC9rerL9faa6qUxwH",
  "key21": "25JYmhNdEDqoLWhznxeVSD8Wiir9wkAYPn7TjFNexeVjAw2uNPgM53nKjpxQLcDE8aTWiC6xb9XrFuYc6kWJG4AL",
  "key22": "2jC7mR5PUhNQ3FDXwsbMUjwYZnzSD7bnu8FSyYUmEhVPL93RuTWGHkbX6rxj1r4VvTP2wNbqtc1kr633YZYkFAPT",
  "key23": "3iYqZkZ27YDMjS5NfuJGs3ZsZoUY3xYuUBzmeNCWvCw9pXfJmbpU1fT4P32s7LxUpmtWEUwZwsBC1j3Qs1FiPWhH",
  "key24": "5dXLbcCZAodtdUELN1mYcbsuZ8TJsnUyCn6GrVRTtdPsmLmm2mLASUJKnJf3EMp5LsuTkct7oDWkjKqTAbtSGXCe",
  "key25": "kb9FZHkMWSZbtdn26VGhz654ph6KVranpqfFo56yFVxoWp2SPzLJGrLUgugrr9z9oWzyPDviN7B8QhT4kqZ4Lzi",
  "key26": "njoufvEPXs7HwFeE1D2CoXAPPzfqan3khb4NhuyMjAdYo7rJnTAS6pEn5rJRZ8AzogUrgJ5WQcd7YmzhsTBdEB7",
  "key27": "66qeuiwPw8mhuocPUkzFX3ntcoDcJNyPK3tD2vhP5nJg9U3Pm1dPe4rMznTAPJjjk2YrBPLbTdTTB8Ecs53dJJAE",
  "key28": "WCdsRUjmsMcDqNUP4Y2cYEQJYUM6u2bsR69deR4YBQe69m8v84psEpJ2W2qMATneCUSG83H7wQvCxpPsH2115uD",
  "key29": "2BwTM99JVcL2aiUf8fgykR9CQS7iEATFbX52Rb1N8ByxmfCqQxZAraCvDWh7NP3vzv9JGtB2HVgK46dn5sQZYYnp",
  "key30": "64pdM5mFGwbQgbv2fH6ayCFQgbDgJX6UeNGN8VCg58oGTmauLVYN2onRWsisGjPYQmR6f1wV1iWhK4KpS1J8nDq1",
  "key31": "2caYTVz8eMVRsfS8p2uy2vU6aB8wPJANVng6f3oWmGTq46NsGW2uDSjApm2LmP3kmPipyRDu281kmHHGqTNWnrVr",
  "key32": "5LUkkwmd8Ev4cUJo53WHyihSyGfc46NKihwc14Ay3XGLY1PwJhdHovyY1Qxh6ma8Z4oVY5qpzBnhLU9uBqPR8RzD",
  "key33": "2ZN4bk1EpBgEWGWX48GfaXgVvkhAGvQYreMwnebvSPpMDiGBpbGt8XUugEnEr9F3a2qG2CbRpaZCV6kdsCbQMxe6",
  "key34": "fuvJhEWvRTcyKAfQpWjXYCsEbHBoDV8m6LyZAPJCzat8RFq7QZUrgJVUAyYEnJb6CfsgTaCTJunLEDYktRmk35Z",
  "key35": "26TWSseS5HETu7z6ZXVBuJBejuaP435paz2WWVisCeSMcFYd3DEvE94J1QYFggsqfMyjLQtyj4iANxsLqPFFH1Rm",
  "key36": "3Hb61c6vTNuw8tz4qGMXYvrReiE35tzgcvVJFySxEA2f2AUyCsBhGD1S2ob9fSyzqLCT7J3JbjkuGCfRy4UBpK9T",
  "key37": "43KzEcUvD6oJ8k8Wgo9LRvwqswM1XGtABhnGngHRdX9e5pHsAta3ddCVHxTLCd1hfHLCpL5fvrUja3MEAk3qwnHR",
  "key38": "LHgMhmR3MzyjHNU9VP6obwBk9W3DHASA9ezWR1PENQ3NGsGaXu3gdCGosrDGoVd5Wg6rmhRtFexbhrN8ZDun8qz",
  "key39": "9BzxFPkQWkanZyVhL3ufECWAtuM7AfXTUxcvbbSQ2j1k3FyXNq1MxCBSXfG9tUfx7KVG42vugMpa4JSEx7WqU3H"
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
