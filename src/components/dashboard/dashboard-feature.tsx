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
    "4Ct8gHULg2wbAqexmMWMPRgFoeYUeesnMBNyk56JcP9CCuQhS96u6vxaAPQFp7ejZkAtk1ik2iKX24rLS36oUBxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37yxEatqVXFB6Czjsh9mJsggFn2SPKh4sPcmbYMsMZAVMNYqoDahVA4LXzxd5Rcsr644EUXcKJQhnbLnokXcCvJV",
  "key1": "5AZ5wGxiRfSRzQmTVqMAvYFojSZQFA3rFSLRNSs9tMLP2UD5TzXRUZobTukUDWcc7t5qXE3Sa2WccHap3DPKxjmB",
  "key2": "4A6ET9MQPqkVvxb72kbD9eCGPjtxcQzsTDtA3AvbNaA8tNCC2wj6uNJch5nDDUdfzcS7XheJKSeWf16xfQaxYyXj",
  "key3": "66fFad7kNbNs3xWcPpVLiWMEUbxxg64kteFLXPPiD3DCeX82TSCuRHCqNQwYSskGgm8KMYKx2h5iYUxG7oAWKTqt",
  "key4": "48Df9YUdhhGtqT29CWjGgAtmBGBnckqTjHeqj2N1FpNxxpKH9UAeFvV9VpL6JVibSJhdwA1vPrF5T2mVmFLZxVT2",
  "key5": "4XNCzQngWrW3KcHLyacoq4QoFZDP9njABFigLwSN2f2AMS6CeCZTxvYkNbpvMoAoHTf1ekyNA2xZBT2FSKkNyhDD",
  "key6": "4vzasud5AtDGoYotsFSqJkQKAUQsLno4gPNnWoMBoBcHyMQ9JSyf76GpqMWHef2AWwcveEng8XmFAjdd5SbXGUhj",
  "key7": "4H8wy1yAVFUs6ExaGpsxAtgBot323JWM3kJcZzwHfCx3qeUKkzuVGSDszBz7BdJvhyj88ZG37q1AxPuj6tAibjX1",
  "key8": "263TrKGwAaKMA9AVsVe7qWpXZqYHtNkYACqLPEGfYS1U8oREZXiPu1XXUYUY9vdB88EMduzvXBjtyofFYbZtyy7h",
  "key9": "35WATo2Doz91MBTrEAE4uznsxuiAVf7TNzHFwrETzCVU58gtpGBq8Q4vqKhne6FZuZUjUzq172cWBU71YtagpvMh",
  "key10": "3eZiy7Gpngsx2GS54fuqHhuCY5edaa5pXe78BkggQbbbVG7UDYenqhKEyPzb9LvDfTKVcrMbREyA5Ffn2ZvxRuNj",
  "key11": "53dxTbvzdWXgX55yveBiqUu3pbi9v3unoD4tW5SXezxSJix8z2NHM7QowbYwpCCupnTVn2U8xPWXxzkamuZt6NMJ",
  "key12": "5Bm2tQ3v3mF1jeiAAAgDRrJTYimEknqYkp8HBRVu6eNE9xud4aRNygeGaRUADpm61AYb4Vvc1HNRtCaq8AeJvs3K",
  "key13": "2WFc1mL77CJMFunFkbjCYXkqXLmWzmERBzabvFHcpZorVwodZpr1PBQbnMG1QBayTQ4LR1PCxd2yhrbSRWKX4FEN",
  "key14": "2pW9g7MSUF2DaPdEH7j9fxW3yE7RG7QqUVXBDyXWifLHmEe12o5LKE3hqwXR9Z3T3CQ4THBbNh6Tw4gN4MgfbuJq",
  "key15": "5sdzjUtCrWC8JLcWdmcgkFjh3kq5fWBqvxu7eGTMXh9Zi4E37x1a3viYKNmrV5ESMVVRnZXHysGoHLouFMCWEmvq",
  "key16": "2eMjjdnVjQYwh4ryDXAxnygtM2a3dzReLRvwGgEHXJ9H2oMzhydvvoYyBSXxcp8bNDtnRGu5y81A4NnQ1Zi35yfz",
  "key17": "2R1zbzzamGGHCAkUyr3BGmHRCGvXVin5ZoQ1butFs3QE3MmPWPChoxZRF3Fgt7eJR6Z85w3XHTvdcP6SspvFGMay",
  "key18": "5BZocn3Ytv7R8ewdAqGMhGmi8oXoDJZ5znmooXvZ2dB9y4yXNMKGPN5XRb72V42HtrxJCVdyEBsskDLmoVN7XDrz",
  "key19": "2cZL6gVcnoU1kSctXcG8F3iGWbYYKzcYp6D9e961RiAW7otP3xpZBMJJYgTv3kjQG2WwWZ1CRXyXBwmpz4cW3aKF",
  "key20": "4FHc67y47J4Zqyw2MQ6Bm1FUqs69t99JqJidfYowWzMhzdLNBEmzP4C842sgZbPPgsykUNGb4VbLVUCWyyBFsvQH",
  "key21": "3SfU35yRVCALTuEoXKFRTbY6GRUEvp7rC9HW9Xxjb3CUjnizUj1EPkctMm1222va3zVsWjyYrinMobwPA3P9PaXZ",
  "key22": "4nqohSZJK6gXoM6V7SuF938u97GVEjUhSQtjdQgujvcGPbCBRsEFKeNsuKqW1NuE6UGfJRk3CCeYTWQR78QYDccC",
  "key23": "3EGkRWAUxM3mU2sao48Mk4TwGbMqX9HQfsZ1Fuxh95iSZkVRHMfMYC7YGEbgLEm15GvqKp4KZomEYPL4SuPUE8vw",
  "key24": "2cw6NxexU3WasHZG1zvprZCWT3ovDAM8DbcyE8zGw8viQNF8smd17FjAYdYwNcPLnp3EisLxc1RAbqDKpXr7CcGw",
  "key25": "3aRPoKLHTEyGzB3FuHahHcgF6dkindFnZAHdtjun36xRT8sAbcvB4vBtMvrhzHAact5gd7njoE6hDacwVfD6Q6nV",
  "key26": "35UWVMbK3kHFcWwBgCYAkkf45fZQbDLGCiu6xWstd6Z4q91NCjg4hmZsX4Abx4HxEhsidaNrytK4dtxzyNDSjpcv",
  "key27": "5K4cM3g3j7pVQjvn1mcBG4NFiWnKoy7VxMWZRRAdGjUfau9SzS2NoZwhjVajZAMekY1t5wqiadvTPKdycRWkfJxU",
  "key28": "2bfFrhTELvab7jvyqj9hwSid9eFzWaxvNTxtL4vYX9Rwa3rYo7CpeYEitVtBSeV6VixSNKTxzqbrXGwUgEdGsqz",
  "key29": "4ssa5iqi1jdaUBBX6dT5FUurNhqcUJJJcNZDTdj7iUZ4WgX17RRn4znBUer1FKKn46YYsPwiokKvm5k9QSpXMCBy",
  "key30": "fEtxRsaUgU6DDUe7TCBKpNm6YCPfzN7J5LaKZ2aekVMDArN9L8ktT4bL22GE4TPRQyHzoY2Md3dZtBrT6gnw73W",
  "key31": "3ouT7ocHFD5ZdjvKWSMbtGse1yfjmdWTmsumuCUgQje2UDaVEFJnr1YhZ71FcBv4syr2YAGwMaPiwcqMuiebHcpr",
  "key32": "3CJ7Yk5G7ZkyQputG3LaTJaxuMDMu9ogda6UL8GdWTvsC4chFnCDuUmSrtjEKVi8bnd2jPtjHjaA3qWXp3YJPmVc",
  "key33": "3412TzC2pX38oDKRJxHWFKbmRR6U2NB9e68NzgZPBx6BHGVGqGg1wSKakFW2BU1rR3eH7JDC13rrZa5YAxUEU6vg",
  "key34": "2Sn2CTE7HfAnELCASjRJfD3kiyrMF9wg3CvMAU36fHLYQhMq2sSLBdPKCfiMroLMps353YzP2ZzzG9kMfNnw8oJE",
  "key35": "54TeuTwDDTAqpxPuVQ4BMGNiwDJxxYxS9w11sxNWE147kw5xRHnFQNd6s7f3c2Vd6fxKD2EQDzGwp1QEnhknJJRC",
  "key36": "2TQuwegXM4mLU6eZfTUPyohMoCQ9x58QawcQEdScFRGZFUgtaSuoQL22nNJWA7grHyT8y4Xn1vSm9RRaN7VxHc4Y",
  "key37": "67FeaXFGcLxH15yZqG6uEJpcBNdfBokHG7pGxYr9r1WEXPxbzJTAd8DmqJTyYhHC5fyrK8Rw9tVbeZ1VmLEn6kQn",
  "key38": "4Dv25M4j3R5GvrNbwFPL1gKH3Wr2NfbQqxDPbcTSqA1SovXkopkXfP9vjNxfGEyZfx4157Y3j5aP31zGGmmoET2p",
  "key39": "5uXtxzKar46hpguBS39L4aUPUS52HstriJhr332uTyTgPU1rRTQAZma9odn618y6imJaL287WjXeLAiR6hU1gJ1W",
  "key40": "DvCKquKak2hrwFA8pPD5j7LkFSKk7BSQKDQMDpLikSx5hgJfTV6YKF9aFjjc3M2ioAdZLjEzcAcWbso8rnqFJvj",
  "key41": "3QEQFX1Avidpb5L8fM6gw4TN648HDEpLfVoZkKhRo2zY7WCLPdK8oACEvgnnKB549ZVeQqGGXYDSUgB5bXmoWcxH",
  "key42": "4ekTbNpb5r5rTt74WaoAuVb32TwyzYwFUBT3EfZV7BRBeU2g7LUMYFmMaxtURn9TaaJ5X3ojEYt8HFZbE8QfBqw2",
  "key43": "5wqsMrjBXDcqG1m7dNRnrmogvoTTsF5jTM6hjPEajDmysPB1ptnZDR7S6ox3boskCbboTRjrcrkkfchVuGA8VBP6",
  "key44": "35xNZY21966EtRTzNKyN2vHm1iCyaC9zqs5THfh9DksBr4LpNUrmgPC5hxE1dSscnRBU48nfbwnKyxR8tokHY61h",
  "key45": "4LfLHpRyPs2Un2X2i22KP59RJZCQSkmEvTyuF9U11ucWFF3t7sBudeLaniH6siK64jWMTFZrtmFn14om294LGtx2",
  "key46": "AHEQRmbhGot19AmrJWNtPT4AdL3YjJsQQp7QufDen3dwsDMyYT6y37gANhmKQQE37YQtVCWAbPCev4h4VrMiCRN",
  "key47": "L6pHmx7HBVnEekQzTtPk6KMUNNd1uxoAXcrsushGopDnbc7bFoU7QU8TQju4xrYsVzppE3a8BPx2uQNe3gGWPMS",
  "key48": "3iU4hKBve9AG8AWeUqmQRrgBBEaALXm5u7Y8ykknGcDYyLxyJjRxpb9TnmCbrhbksN1393DLjELmfr1BF14Rx8eo",
  "key49": "5D3CqHGpzdHBzwdKJaHoYJNm6LziStTxRdca42qhDkzjSzaepQYLZqYSGqqwT36LKgeLtRF8WTWNoq9iKnX18Zgz"
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
