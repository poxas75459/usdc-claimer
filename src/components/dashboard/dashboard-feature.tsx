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
    "Frt8tiUjH753ehe2EpokduSzUwVijSZQGC1KmH5mnaxH5Sc511XF4fdoCnS5PJVYwECqgcceFjzqBEfJ4if7P4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h2c8zfgePZs67bWyn73tpRTYc1XwCGSFUQ36oMfrZQc5e4SR2NeWydiTSVqSgdau3zHTehKU8shhn71SQbZdxAo",
  "key1": "299tv9U4yyWm7ZnVamhZ5tEEVVraHzCLvEfsuxZ7keCzjh7sLc6vngCCM9VWZWFmmQoYujFF3N7otXw76T5ucaQu",
  "key2": "gczsVyYynG344WSeZs7Ew6ohbxfJnkGJkZmJEhkoiFi51TnXQUnpTogYAs2PtuP8ibGcT7XGTmDvxius9bJtQEG",
  "key3": "BzbuwkugmQ8T8mp57X3XWmBCzmJUBwpiehG1msf39Anx13S49xAg9op7ghAtS7azXANRqe4icZLvaNgr6mSbSLK",
  "key4": "XHEVEeiHJj3tzPEr7rXHLCp5SyE4cQGKXj7FcB18EBHbiWaRTEWUvZgbevzJUFPZrAER91VjfzdqRrzoAqAx8iF",
  "key5": "5vrbvJ6UbZnJ6VQz7uQdDR5cyan3d9ZCav4SFdLRB6mCwwvi47A87topFfKdQmix4p62bNbniJJrS2pB4VUyripS",
  "key6": "2q7zRDyTzTF41DW8wHKGSYnepS14GDs5tw12wyMwGwaf3yvKCkUQNDRsud3ycVVbXC3tVFxBVnQeNrUJxv7YGYY4",
  "key7": "3hQEtnCYZoHummd19KjAeCVuKqxaGX7KDiv2n6ByWe4Lsj3tGSL2iNsqQuW8dYBgRZWmf2ADmSBJXgyhy3YSdF7g",
  "key8": "5mp1EvF9u8oooXU3QogmiVYPXnN9uxpDrrvDqP1vEZ1rXtVPxpMsWRVUtiCZLg5m6KHrDS42M3sSLZWxMoffXwfV",
  "key9": "5F2mfMPY1NLG7zm3VqbM1jm5fTxg1Jr3DB5r3DsuMhYfPuj7uYfRkCWvqnUqNt3U8o8httwqavvDGwo7PcHabn73",
  "key10": "p5mV15tRZ4xRBhyCm4zukNeTDTso3E4FpjNMpEokFtsF2WPjoSizX9a635ubzYsjzC144siSA8GaJiQoxXpVs9c",
  "key11": "4VEkn4ybD74crGp5fHzErrfvt4hHXRE2mT8eMi3f4v62DxKqBWgh8eEhAnPSFQyJQ1GDCGvoSSSjm57gZpEHUC7F",
  "key12": "qSx7f1Pd3ogWWQkRzGLc8PTxvev3BNkmURp1P2ESC2zdqzyx2TDMfFPgKN8zRKCa9sDrVEnfezzP37kDd7pVr1d",
  "key13": "62uf1okamMw5fbgtNUe4TS9tujxWr5VLMajMgFE9CaVVxXqtvDKpdtHAeEGLKQfL41ksaY47CJqWyfemgKU16CTq",
  "key14": "4F1enbnn1BxyVue4zxiATfGhyWzRsF45sCxZMPvejTH1F9NELSu4VGdwPyAMCLckFros9QpH6Xg92vFsr1DZBq99",
  "key15": "4Gw1jyCwgzzcfchmTEauGhS4t6nJrUgeQ13KPiVCqhpCqs5a5o93oMphiBpWeUbF1eedhZAHZ3F131gmxmYPnmnW",
  "key16": "DU5Y4zZoixAcbwmCgVQhSStTjh7owR7YjidaSMBewyqfHDRYrn9ci6SaUvmfTH3GYJPHVhXKmQWA68FQQTdtonW",
  "key17": "4Ren1EYJBajATrCXUh8EdYesZ1FTGGZbfa6HHGaLQSRBqzkbZqMj2AFoxjnVYLTPFdnTYUD5T6VhuGmLmi3Tv5G7",
  "key18": "2Gu7PzhKyjVqe42Qi7Hcm4GmCyHYegfY7M9FTWTRiewke62ST3j4g1FFUts9JixyFkwkpnX6x3QtLFP2KbQCgU2B",
  "key19": "4wmDvjedNVUmitH9JCEd6YhwAENLhr7zLDxw5W1b4PZTBCgcMDZdtjLXy8ejDJRjpJrM9cYvuhUvrWnvVo8DVnAu",
  "key20": "RRyryWLYdiFxqghSAcX2qNyzptEjYiapQTdPBekvkrKY89XnKxTUqMGG5x7QBN7YLqv1RivtijdkB1X3r7LbV8H",
  "key21": "3KQ187u9CMZBd4Wi9FiSFc1ZG6RT47w6CcDteiuCG4fnFzcBDz1Z9DrKkxQbQc1onuhC1hmGWakm1GSeqSQZzFzD",
  "key22": "3bKx6hq7RkD5MLSqrTi6XVqQxJSmWgyZoPrJSvmcgeaJwXWC5mjZ512C4venCj9fsfG2mk21Wskz8raeBs9EKXix",
  "key23": "4ZqYtnMgWCDNnXzAg81kaW6mM7c2EpA9q7mQmoYVf64Sdp7EN46sgq6Wjz7qFUrVCJM8meU7es9UzT1wuXwkjb8F",
  "key24": "82Ve79ff8McFq66jSRZgK3v6w9uQAosz3g9TfzhutcFVKdTc2BDc8a3B4kGYahZnQrXA9Rf56MSdsEArtLxk7Yo",
  "key25": "3wFpNn9nTbSa7iXZrfeSiHXCPjgKXEMwjUxgLVUURsb8zDw6SrQvKp6p6WcC1JceDxDqSwvcn2qriqcUjZHt5LK1",
  "key26": "2JiPfeCUYrnUon3uP7r1oWGTtPHNDy1RRbv7a6xhRx3nRUwdWrkWwKb82K3s9p4thnqU5EeDdzyWmqegVZbt5gn1",
  "key27": "58LdEjC2xF11X8bL1SS12mJMmeTfn7gphXqFNTm4Zcp9UVCiLMYq6ZhJ1rmw4dizHsLih8gP9kvTog7mm52f3zdL",
  "key28": "3VT9emwARsmmUbCdgWrbERTZfsDNWK3g4GfhECFokuwRbdKzHh9u55HxqiCA8QAMA7o4b4CfGzoqAiuryXtZD3HE",
  "key29": "22wDdX99qMy7u9Dxra9sKA7Y2gFePjYJ8jbBD3U5beEYyhrz3WDzBCczJbPq5kvBLrEymjYC2eE3h8B7bVnVkD2K",
  "key30": "GBHryZzPRMR9HhWwd3UMfTMhUanxtsPhfVPbmb4EdfxjDVKgzXrNqtsPKg6UHvGJzf53DbjU22TM7NojsayJSuH",
  "key31": "3Fc5q2UByzVZPcdwprxgtBD4NsDXJ1rgzHNfPi95P1F1s3hhRU38CWghp15zwS56UTKjm2s6WT2yJRuCCJWnGAsv",
  "key32": "QWGBnmM4Hi9XDoC3pTuBsb9b1LW23NJEyNfMTEEcHrygSrPHTmH1WZjAupBC9jZTFUfGE9uRqdW7f4i8nmqRnc8",
  "key33": "PxZpU3DixERCxgD4i8GeAC1MULAVjB7EULmtpvqke8xATHbeNVVW1YX274y9pM2SftCPFbdLzYaLrg3m2QaTyv7",
  "key34": "1kHZYizxXUzFLSqPiQPzh6Mt2X6bQhNLrPUiVfjczrPXdZERiWNc7uNXDZHpV9a6c1hVk3DUjK8PmSXyr7mZaP5",
  "key35": "4ufuLHpXJoC6FF1v5LkUN71mVcw7SYaBJgVt4VgzFERyNpvNNeQVEMQ14VvNGem17RLH4juumCKEiEnEyqCsjBRL",
  "key36": "ju5uERJiPaxg8psEJyTWfLf9V8kZX6iDVAd1VXoyeBGau6eMMwEf7QKCjamgCTikDTdTqsNZwb3E2AsGdtLDVgL",
  "key37": "4F9NnY3fo7preokBoQrTNmBSdQ1YiGQxY6wXPyrmv931oGQ6vzbSWumQPWqvFbwm9HNNJJ3jYiJpkSMCD1Q4L92c",
  "key38": "3HrHmSiyXMeg5ybGGDXKyCTq3jhk7NYmyHqhXsRcLLGyvBde4Y932gcSm1b6XVUwCLW7DuxtbBX3rh8wmqicwWDK",
  "key39": "5ogkuJiczEs7GBo5XGXcdEmgQYJsqw5vhyj1a4sgpDq3vBRRUWvwD5M7xpTLhsrBgtDskHFQraBcNsg3GtDEqTRR",
  "key40": "5uVDs2NnjSMe9AU5nKP3nADzyqhW3qgCkkqXtVCYKNQy83eATjuXJXnSZ7CiBx4ttWQrSG8BgtP9rQhSKDwXVw3G",
  "key41": "2L38vJGFxb5KxoKBjbN9Lvu8HX1scShyYurYBCjMRr4Bh1EWSjwZxnWA8RGGoXkKSsY7Fp3J2NGDCPGyJPCZDsGN",
  "key42": "2rBm6tw6G2dESzYPjpCpcWKfVz4JR1w2r6jySK2wBFYPcimHJSbCGdEkwGcjmEqzMgfcP9mkF7wJViYjJJXpYp8w",
  "key43": "Z8RLP2eq3UREegCA5Wwdqh3JMoKSo24tzpmFzUGruFzEzShCvLW8z3awbtehLY7Ksy8PsKn9diYGLNGtghKtAki",
  "key44": "3Uvz84PkA8LzUSmhMsyLdrskErn75w2t31EFvAtGKmCpD7WhSz1PjWqqGwkMyFmXum6mPnqe6gKLTFjctFbqdKiT",
  "key45": "djqwqpH4zqksCTfMAcMgecfWBGSapT5oH13cmVTpZG99sf7UEm1oBXFiY1s8DoZrp1V8NSW7PFqCT3wG9duRxeA"
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
