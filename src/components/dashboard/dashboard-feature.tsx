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
    "6eE6DokVHu9ZUti5ZJ5hoQ227HUqzLf4rJuiy8ggeAsbHFXk3CAwER4pTcXPQyqkM5K2tSPVYswwZAP8jTYdi2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uF5Ggq3rrcn1i2dnUsTjKVu5UPaS5iNqRVKQqpP3VhpzKDFsB3MpAuneP5ujoAaieHosudGgRKTswVuAgQ865Ej",
  "key1": "5ytm4RQhpgNdhKkJi2x3eqqMD3JS2Kjf2iRkdsEjuYZb6bituarZrYZMmeEY6X6mhATaVt5CqmtvWZR8fqofnXsR",
  "key2": "2fepYZdq2oFLP7hPgnF54EkzyaDoeZVcYbdpJtyrFtEea3whMLtxn62T8GMG4vMaursSoHgjYkU17upDNSJCYUKt",
  "key3": "64mGX5gsRx1azbGrHFdQnhvYCVGiSvD5aqnQQiUbndSdV9korsVHXVvuvRvXzgw7ZFzRbqecweVdNZ9Xynhis66n",
  "key4": "39Zbn3YDxgBFPi7PesZBC8eDswAS6N9b9W69s3Ldi6Hnk4mjddLjNjooA4bsNBV7N6EPvDxqPZYssBrHcivi2nC3",
  "key5": "DMnETK4VoS9CfMHJXHoMM19W1xgdgoD99qo7q4LU8M8NBE7MneLinwrdv7HrwSaTSfQdHyVx2gdPBbM1RgzpaBy",
  "key6": "34qyeTbP752VPCTeeoWMLstZVRNqdx7sJuLBV6N42jRFMxLPTghRLC8C7TuXaQuMf147Xuf7Yx1jJ61fsB7YKTVE",
  "key7": "3Paju76WEDrnhTTCSkKuJ9QRj4rXEGhhmLjfTvS61aQzWUXMuv72zHNywPCw2dzeVGuopLJZ6RySqYrqyq8KoNNU",
  "key8": "3bMWkHcKMgh2Af1wcYPbeRb7bP1k4SDwrxcaSGaQFE3b2axD7vKx3msK1VjiqDzwcxGt6HSwz9W2PaRx9st6t3pN",
  "key9": "3eqhrGAHMGKAM2RXHS4YnLXL2PEv1zJ96Loo6nC45k8E1ExexHoxrm5LGFbgHurjGkhZDNNTkVj3XvSYheH23yZ8",
  "key10": "5MkAXaHa3MALWEodxiPLStBYS2mWPNfZksdeNcfr21METnW5dtpC6Shp5dViZhEPXBJvhDByRfwByRhGu74xJgwM",
  "key11": "3KpBgmN9hj74sJ1A4VdF26u9R9rTT1fmyHZUBQCkXqbGHatZdoqHyzDpciiq5SkYp4hz22TLvCfYMvXJbuTamahK",
  "key12": "5EojcLBZ4mMZMBAAhcj4PeQ9wBhEWQHWaoWHUAL8LxFqbcScYLrUUvgdjJY3UQu7LqkBdV9X4h3cNVCdoUjJWomp",
  "key13": "5HSYku5iJbE5JZkhbayJtWGcZgY6LC5j56t92gVvFPnYWyoGbbsiVFHpDVCxuPRfwDER5xuynSNCg19H8zzchztJ",
  "key14": "4hrvnxqtAtkQjY985pBEsmp4G1M9KDyPbpDFmkJjFZyvUAsD17WxNkTyNRQVKxPnTbYcJr1bican1pjxF6BR11Kr",
  "key15": "LCRKchUD1Xwk22xFnP8e2TZtc7zAuaPqcDNRepC4uMFr2qhxwBA6LqpG7TmFRHpfj8mGBKM9aZcFexLBGo8Tr1v",
  "key16": "3xN19duyKnrbUT9atHHc32U9idgB6omcS7EqymAKm86Lt5gXJdsah1Arz23oxsPZqVbkS3cumtZeHm86anZKXgtn",
  "key17": "5WRfaBv2LFxTqB13bk18kjcCwc63nCTFBKqs77idh4Emap1BeE6PnxB2JzJ7qGhzusopJZ9wGcGCZDkNjVpy4eAt",
  "key18": "47x31nagjU7UfZj1QQ3hYz69EpBKUaPY9YG7AqePkQNqMwS7s4vAeASrEsB3s4iKTtdgcNM5m9azaoWdiqhvEKqn",
  "key19": "3xwykySagDhgwDncpp45ujDBKRQHcoosmbf9YJqRgknPtjohVisFMp5cJA6wuqfNwpRkCipRaMXC59xpEDXz7Sh3",
  "key20": "28QNFpcvHZhcwWVRJnWBJu6etjj6N6XjkU8JaztSv5ETUgxX78493rwdWUmCQKyqybcYxhVSWrrcQ81MHHsRSWdz",
  "key21": "3bbW7j9zrgqGXMj8Sv15rALg5699PAbuAK9zXfmyVZ3b4paK6qugW22cvPguLmMUBYdCqXifvzAjyNcorFXG3TnF",
  "key22": "3gy7ffvpcSPNH1T4PU16a3fkwR5Lttv2QsaNGFpPvG214rshbzztWYQ4LyNc8Mz4qjJ9qqvdcwqg9zX1yx3gsJJB",
  "key23": "q7dUN9zEH5nsU6GyfE1KURoEVK5Wo6c1xHQ5unjfD3zVWbmhiBPDj61h7c58pmtb7PEdBgRBypeBk8kJf8FLDG4",
  "key24": "D8ZqiSSeT5pWeDhtTiVE9c11dziYt9yyqZnaJQ4iGAUtXzNDyNhrrd58JWNANnvr4ZCAHDx18RS4cobBQhhEaEt",
  "key25": "54HL3xNBy7cx97yG8BNGfL6nDg3W3h2EjigaK8vHSTxpEVkiRb5ZDtUPBxhXtzo6uV2NSrQYxCaFH5J87s89RQev",
  "key26": "3ZxAxsHN9vrZzPhUHxdTd2Nt9wsMERiL7Zqj2KYvFVEaffpoHajfyTCjn1DHYHhLTuv93DBNMqqzZQq6et3dosKY",
  "key27": "484SxA2CvyPdjXpN5FHgjGCZzKvKvnXcFagJh6XYAabhJR4sC6c6zLQKRz3G49PJt1jHm4vYZFYrHnFnVB3kCRYC",
  "key28": "562ZbmV5d6pnozDXpmUZ4CxeA57BUhsXyio3hp1vPneyUWYvcGNiV8XrUFhJHyUbPDddXFhmUtTMvYGjGFhpfGJt",
  "key29": "4jSdBpF3dsMNbohkDVKGHj93UMyEwB1FRyVof3NM3WWYY28V5RgphQJc4nRNKQ3ZDJPFqCUaWE5mvhEF1DYDFgPm",
  "key30": "651CaSVLRFJoMhK9g3EBDQRUDD6GM6rnzhAivKCbCMm5CWaLgoDufXEcJPcS7FBjgMJuZ8JcmpVeSVXM4xL5jhwu",
  "key31": "36fcS2bbnFZvxZT3eL1RqisGuNHWcEPbtLZgWQtvM46L7CvSS34y2u7YmbQDgk1kPJsLY6JopBLZSzwq9Q74oih4",
  "key32": "38F9UBwLY3m9u1q1JuYDfTTwDR5TSSRxHCgLacBx8Q4EhSrX42kaw6jiXSMzgFeA4ZzpUXpyTToUQJEZMnPWP8nu",
  "key33": "34fhtaA9aYpUinfcZBLf9rS4DCWD5PqBbxMR6FwntPKTTmjFycxb5E9zPFjFCYC1vNqYHLHntRd5CGfQNxjkA5wt",
  "key34": "4WKFvvDdh9osQEo8TDvHm4bSZ4PpBXnUAYvHkRqrnqzm5omAXi296KfRJefmsgSG9yDFpLQHSTyrq8oN2RYXZLRu",
  "key35": "3GLBoaLjb2D5j4yAPUCTEZ9UszxSzkX9MPfypmjT5yMQoKo8DmCbgcsiAs2tcSj9NBpqCvtKm5Ms4ec7j2o2vKX4",
  "key36": "MRysC5Uo7ar2jvtrwJeMZzVuUA3xuZg9mn5ktzKZphh4yvBxhWrwKUJVMFGbNC5mdg2tahjXtcsd4gWcWzNCQoW",
  "key37": "2iteqkXozcZR18XWfWonwx4JHoH5Er3ynGtfcfPNoqmUWNKAxoyGR41MgsKmDqKQDiZiiYAPg7mg4hQTjgaC8A8m",
  "key38": "3kmTrwTTFSYoaS35V7LSrtph8ixcT7VzfS9YsrHaFNr771kg9dQiMSoEEqu6S7JqyggLEGJvz8EnS9H2gmSk2EbW",
  "key39": "4RJFkP6JJe3JNdaDi8wzoH3L9tDc4P8ggEkHgedeemUkYWE3kvrJra7if2SWSbkzF5qGPRfr79Si9U9dz5rwPYiW"
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
