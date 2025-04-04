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
    "3MyfaGCaEofsd2KeNmcPSVNr7o3ZeFrHK3e7nVAm1ENsi9Lay3VyjBg9scYdVnWsnS8ExxRMkzVVZNdyTQk1tuyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTxJLi28Mt6hpgNqZsJhnbDrS62UtKxEdsnrrZ425btedgk9daws5QS7pTNjKUJfpRKeryUrSnuBgco39xbLSpy",
  "key1": "2QjHN5Qf9JZTFCLPk58LTEGanGcrePWnVX1AGsgjPM2XxVQaerQeXDeBo13g7qLSaVkv2fxuf6BsRfrnrVE2dXyQ",
  "key2": "EuqFnTVqy5H51sAy67ij3wUsiwv7Wtw5p5s7BvFp2U5pacriGrtHh6ShfQwMsomTTuGisETjo4WnoDQQ2Gc32VC",
  "key3": "iitNq9GJiUhH5AyuXUPSg5LXB8QehtA7Tp2DZAz216tpWwRytz947gpUwPoQiDLM5DRJFm318nGBvDvboB1G6HS",
  "key4": "4NyLcyZfWMkGwkm1FFytdjuqwpQtJRYF6ojCGbRkPkPz6XQBcTpYHBrfbw2G4XYHMLimu98iAq88VjVwMtSqsEe",
  "key5": "2eaZXRD9gA3zT3YoeR2BmF2hhpKRgBznEDbWmGvQN1JobMu6fjR9TuvTEPHQnHxZDaUaLsMXcKZgz5zozdjuMq9N",
  "key6": "3NvE52Q1cGxck6tXtmambtToeea8tqVNwSUZUFHAih3ELT2NPWqpwyNnEK5QFmFkkesRiivrYo3zzXQTbjhuQwZS",
  "key7": "4HcZFUrRTFnvCt1JSjqBADLgXKqxwNHCw7uSZgKUVW9Q1rMpMbMLkzJYVpnkr61QYLkzhfit9XoTZnpCVXuZPYQk",
  "key8": "CjfmTPtQT5s1yVeGuV7S4zTUaZnSKYsVs14iTk8TiqcJhdRNPGvtvsocVVNq2ZVUne2GRtqyyPoY71oDUtAt4U2",
  "key9": "27Z3EAELoGcC1SPN8WNeAABTtf5BaykDhMAxsbZqGbU3ymQnffp6KCctD5ZuhCiaxLP97BfWF4tNZaVMXoGML4Wa",
  "key10": "byhsMMySxfdv1ToQMLz9rETaLnhjaCpEWLe4oC7mNgYPcB5714gAPFgKpDSQP7DNzqQbLEuLnx5NyqXwrUme9sw",
  "key11": "21P4yunAGct8bHC2xPtrU3DgctSpfoAQ1a2teimeSFCLkf9Ht2W9erRGgajijgDfng1YhBnGf3U5WcYNCsGEBCpJ",
  "key12": "5iB4pXJUPxpxj5DxTi9L3xZ6sDJQimuHqvqfqVmRzZ9agVJQzYJWH1VvxifxNf1bYJF91ngRPTr2JYPVERXND8rH",
  "key13": "4tJm6beV8YdnHkupZd6jYzB1AvEmMFxeWpeoTdN9pV8LVbpAanV3XyCwNPmhfzvzsU1FxGBBg9TfwGbd1tWz4Lqw",
  "key14": "2EjT4xvJookT64U3S5ZTXKusXYK5ia4pGNrydXAStxVht9YdcDmYL14HHC8naS3U47EUv5t2HVpXWg4dME1FDhRP",
  "key15": "bN9CbR5VBLW3ZvoYsqP9FACDNUMF6Ru7D7teNLMAjh4EBeuXAKMZ5jSSR7Kxkoy3NYp3UCYiw8818p94Fto8WbT",
  "key16": "29JZ81WzuCvdTpCBpDEFMtXV4R6F6crCA3TM23qUeAtYcDTmy5pqfd2QwLx4JMoJiBe8TvdjN36dciLnm6GUzzaB",
  "key17": "4uNCAqv5k6BoAHG195tZTNuKmYLc1y8iBXzHXWiFXKeCVnv5sGurAUMQsAVsuExLnBcgsaRgfCPLA2312GRpAX1C",
  "key18": "4JZVZU2SdoY7ahbaCVVduH7vTAHX9pZVJTCCSGZY2Ay1i3WZNuK5PkpJ3NLpigH4sAVqSz2zgQzCYg6yjTgyNZSS",
  "key19": "SioCe4852JNEBqCDsfVdoEauuKShxffjvbZUAQ6d2HikieocEDMPT83UgLK7kA1Fd3HYamFh4h4XAP1CR18Zdvv",
  "key20": "2KzBDeqaSLUPnSPBPpFcodnPRPvqhvJS2K8a4rrbQc9WXSbMwEkyKU6EKxFkzkgEoA4uV2eXsLMzXzdnL83oqPFk",
  "key21": "4Wt9RKj4QzHwp7ULnwG1ZGAPbJSi7Gbi7XWgwMVmnUewMxCfgQnWWeLSjKMwUZkxuRzH6HnbJzwu67JqTKEA1B1e",
  "key22": "3E8ujFy4vYsNTfTqdpS5cLWZafTrG2cBgeXW4Qca9UmSWC6YUqAiwc3wW7Puk6ueBZ4bu5zMi12dD7ed9sT2HBLe",
  "key23": "47NqnhBKm8UwiCjU8zNssKCMNzwYf31PYX7b8aX6P2by1KNUSxvYGufkmZN79vceAXmaDLDzDjk9YSQK1dJgEG9F",
  "key24": "5Pn7ad2yMk86EXhAR6HSnAWW3zyyunMu9LihK6LegjaeCsCbJvZALSi3zhM7dyodb4awQAgyVcZEdy8dzji9Bn5z",
  "key25": "KSdzGWKPs7Xe4eCZmf7m5yvQuPTkaotN2w8R1ukRH8bugGxSUGGhDGwnGWBHqeKAdShPMRkNXSgjabgGrhrKeKz",
  "key26": "3G6D9zRy8F1tuFCgh9JuHi8QgdcZrFtYTb35hAg7e5aPP9vSc68UEbwfLA8fusBVSEkrR2beDduoKUkk87BphEM3",
  "key27": "5xpv9fuCZb7Y6jPuw6n1jKX1qsqjM3wT1yNT6JdkuAeTAZdfkrw8hiH6bXwPjerBPG8boJvB5kTvr7PkWR1Y2Mbb",
  "key28": "4TZ6Zxg1bRMcRu8Z6gKUhgyrS2DUqse8Ky3cefVBGEhs4oEXh9CziG3MPBJQVSWEiGb5MXnXve5r2HHLRDQbKo7x",
  "key29": "2EWhhBw9mmWaH8Xjoi2BdKFh9BR1KjB5EJHE2Wz49LiqJf8dhaxCF7i2K5pJE1gQjfW9VoEvgzR9vrcTpe4frR8k",
  "key30": "3MadRbjEPhBUCPor3F8pXMjp4Dg9Be1bd5zWF72zRnQ29VqYLMXmyew4cgp6jk4pXMZtZoCQJJSAuLajHz3LQcPp",
  "key31": "3Sd8bhYPdLryvHM2v46B4mbpRR46ZjzksdCfGanMuRTS96bhChgUAdHULw5ZBJEz96auRYpxnTSPfbjaNj1RXh82"
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
