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
    "5k8jxHX3dMhTWqEk14eBRrxbgcQtJa37G5QUAQbda9sTmHHvRPkLWDz2VwaHea69ui789S9D3BzYbdfBSqsEXoKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEvEdQvPrFJxwUpVKD4ucP2Fq3Ma6NBQ3J29kRun6RKBbsGoQzRabL1i3M2WbxKZUUarMGrCkAFcNyoLjuzmq9j",
  "key1": "5y3imFzX783B3Visn7cXqGwc8LTBxP9ZumVBCH2L6Bw1w1fKXWXd3bWDEQund67UFd4bcXJMJcZv137NCuh3rBw3",
  "key2": "Lp79ZQozRZYsA3rNHkRWBYgX5ShLEjzdBwiVv2qSTkvV6Cdm2AZv3nfPmGUvZJ6y1qqiwoshNyYbSg1KcyYVL6m",
  "key3": "4PCxVoRgXK995dTXHLRekDdyawT8xuLBU1k5svTT81SGLpQge66xChyWvQTGpY6jbsTghhe8cxd3mfxVqDRffH6u",
  "key4": "cfyvSaRwRF46wkKB4yyUzMTHAyXFNAC5e9RMejhhK7ffoNwE16JVavVzaqcqMLXELPRkRd2g2SgVub8DkTjFdj1",
  "key5": "4kWedrX96DRLavgWuUPqT64RGBuJPSNzbBLCB4npxySZxzGxVVZaJDMdD5JArBSjkgJbRoq5UnVSYhKk44KXjq7d",
  "key6": "5qrXe1WmTA29bSsvcr8wmcVjWFNw3w1mrg7niVNoS1W9mamLGJXe7yjS5Jq6xWkXTYsqa94VDkFvmaEBo4NrtAuk",
  "key7": "49EGCW8YfpSpizwEhcSFcuTYBVb35fHr8Aa8fpDjZUgo4T59HF9mTi4jZEtYsXeL9iaG7Qd7FA2GTbgzuyqyhtVH",
  "key8": "31ULz4xyMsJ4VR5FVC3xmikZugduwppKtLRhf8MkisLB8MnSaKgrrPWHApMcCoPxskkJ5Pu4aFN1MF19wryZ2CD2",
  "key9": "5tAYfdKfo9mpu6CtkSbWekm5dZ2cdrGSbPrqf8ugzwpkK8EH9daSLWAkkTk9JTN6iU6PZBpFoPELMUTD1dYMP6E4",
  "key10": "32q1oddehpBLj6FkR51CmfoKiTGbsdb2XBQnJHNBnakuzWvmfLByWpwCfsVjeXz4o8HPmscD7aVNDirok39T48HG",
  "key11": "5JhXY4oa1M9D1xM7jDWBFYYwj5X6dKMMbRbRxYeJxe1ao9N8qxMgT6apj7L8gU5yQfw9TxFg8Vh5LYQDHD1SYmU7",
  "key12": "4AJHsJqxnhG35Mi4zWZ7u2KoFkw5qV1X3Ho6XiR92KtpDUfDVnUn7sccorftm4ptubSfyADj82avCxK6pdPAQ2Jj",
  "key13": "5SxnKtTKptEEMuwXg5n2qPzUwgxq4e2BGqGLXSR37dA3ETmHZTytHdzXib3HUb4xyCENGKdttx5mR4soffBxB5k5",
  "key14": "3zoXkepRMQ1wa9iXTb8xZ8i8XcwJbhvabYMYgzKwneYgbCaSP3JNTKuAuTdDN6eCZR4aQeZUFjMAhndLbUMGjJng",
  "key15": "2VyheTaKaDy9UpxMuA2a7SFzFnmWGCiu4ywfsN4jAtnYP1myBmvHpcMwTbKCpd5ZpDZQNJo89dHKHpgq3DLzmzTQ",
  "key16": "mmEhMv9oBWN171NZdAaLN9Jg39zjouPpSVCasEvQy3AZKApnM7oFTTSRbhqf5T1iHJzwH62atENuPKvwPdVN4tR",
  "key17": "5muFx5GipnGUwSsgqPRzZSnAuyi43eTjSApZ833qqneGBmPbTUKg26c23chfyfkp5PmnbosMYUo1tWGoWWLfx6Y1",
  "key18": "2T3Srv1P6ckKSLFT4SzJoQfAz9Cibpku2avwrpgJVjx3K2F8ZbrhAqthprYS9HLyBfD5sRqs9dydymgJzTecprVc",
  "key19": "2xetbaCn3VSba6rDCqBghLaVJk9Cfnm8qsaYgbtBT7B6otggHAPxFTveNzThY3j6NipW5EgqrfJTP7PmP1YoQHpU",
  "key20": "5FQK57ca1imJD73USwk5p7eGNb8UA4nwLVVeC9WEYKrS2MJumDcd6DqkXPETWc96oWK4p4YM2jnuNiR1uf1DqDtY",
  "key21": "3bT8rFcjTYzWEcxEZtGacQzHEQdX5SFfA4CyPdXAnd3vPBVXaR6uNDqYhLixu5LYtswqtMsHdTrvHjXTB8UpEn2p",
  "key22": "3LpUg2EGfUnb1ouA9YN4JpTpvSZ8KfX4EQxeCwBm29PjDyeyNtg9QnVgwiwAQiEs2amugLzsjf3wConDBQAUVVUd",
  "key23": "3ZK5Hnvy9AisYP5j57rtjZkJQzKnBPterEENvqq9YjuaDC87Qp1nv9XZevWT3EMYPrzacRwVvAuxGzg35HQhXaZg",
  "key24": "27f3N31tJ2ETPT4Z8v5arboGuoyMgMixXL44xzXDmd1QV963fupEJ9496rR2jibzthcM17Ver2dKjjcxEMQgjyRA",
  "key25": "2xEid9wUezyCBzyZA4Kp5THhmkYxeVBL2baxisjKYMxG34DhSH2AMAnfPBXXprFbxMJyqUKeSfdF9R8ucqj7xusZ",
  "key26": "5QLtuTgADyeVAucFtTYCRj6mCLmxhNFB8bAosMSvstwmeJkU85nY55zfoHWz5p8YfiytPqmxYKxTeGaQRMRxnwAY",
  "key27": "3MsAXMiKsfaejPM3oKSdD63qGmgT9S7s1HCLU9jAkdXr91Ft63DfChBdPBS7iTWQsavoVKoEv1pkzbcHejQxd3pX",
  "key28": "GvVpxXKhjC4s55QK7LqDEabxdRtZ5NNYDtYtADQJG9oCVELbxMGe3zWbc8pja6NNNnz1aAhxw2DyPhdG7NedHmX",
  "key29": "2WBBHcf6aBT8n6T5NUwAgCHwxUMRuerFZ49u7HuwLN2UgQeSQNLTVgJWbyPAt1HxWiAXL6AGXfhttB1pGaYU192r",
  "key30": "pSujrKbt3DEJQHWoQ4N6UeXQ7SqG37qk7bbNUG9FdeC7X1afjepKQpxdepynDrkTsRe3utXzvtZ2yhRzr1E682S",
  "key31": "5DdEFV8WyDrYwtMGLgSQo97mNHTJP1iiwiPUyXRn2Wcti4mcK1q9o2Z6BjSNm5yjThvVfbQKPvcfUb9H3VGKMSx",
  "key32": "2o23maYRJdXknBf8Gaf278BKNB4pHYSbfrWxfSXPRwpjxpcRYZEmhqRmBJRfgKdrFFsCppZAdV6fFLNLqCtLEQH1",
  "key33": "ZigsRw3ckaAQELiWGcWie49XSCiKy6uSkarMdprt6YXJwaDK3Fc36KPwv4xp2Kyti9Gm952cM7uR2iFueE8e3Rf"
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
