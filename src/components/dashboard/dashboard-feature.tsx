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
    "2bkZ7mb2ukdbR5VWCpZ89cesb5pmwBT4ru74YxUvT6CxEaGNt5kmFrwesSQbgxVJHkKdwtCwR9L6PTSrVs4zFCR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26t8QDqxmhAXLrD9UKErZRkQRAjjqn6bFo614ynpE98sv9UvBeQzK15gDHGgG2xMJSHYazuL1xpTeyqskGQMffw4",
  "key1": "2Z5dqqoREKXRRyXr4B9vKamGosipWTpnPRHEYTjsyy4gr9zaiN65SwQtJ7DGhisABFzYE96oK9GZpZVwT1QxPFBW",
  "key2": "pVjEiTE9qABVGpx2hbGgmmtvc6bazmvXMXJZoHYuPyL8dCsBYczGdX9YFCdrXZoQJc87pHxa9D1fYqWPRSdohDx",
  "key3": "4vuvT6Uv8SnM9hSKxw3rzetvikXgZiWU4BRcL8eHjLoWP6UH791ujyu8v9pZvN9UiddhHGXFMoTaoP17eFCpw8FA",
  "key4": "4BYKqxv6TQS4AmRQnSXtknqKiTYt6PEiF3KY2Q7bnke2Bn7VA81hKRTWFSR7Gsi8NFVH3rtNnigEpVa3xHbGcafN",
  "key5": "MNoPxwdvfUKj46f88w1CjaYc1fHEAMcSdGkXEQaEDLdqJRLqThRNxeLGs7XqCUVN9AeDgA6pJdLoH42XuXwKEEN",
  "key6": "469Ho92jYhL9AUMsA3hS5HnZcYh6ANKFvYgM3WcSnNTFPX2VX3F7Ne8CXZ92VG9VJXHYNQTLXHzPphDnJe14m29J",
  "key7": "2jivRBPv4a2Ej771AwCCTvs4KNBpxUqsLSUBUr8mqf4YbFgk768F7twGwSRLZA5wKqNzS55MEpDy41aKn3CQeeFo",
  "key8": "5MeHC2weUT8bPXwYxeUScMp9S5Qp8RfhPGoSLtWtPwHhhXmmowh5joByrUGaGfHMxHGNYLbQ2JAjS8qviyPCVhQ7",
  "key9": "4ACHRaS5fQtj4hY1LLFeQTk54eqvXa3HmffQpram11fQcHJYZ4zmsxW8hjwVtwGHF4ANcpt9mpfbtD1Dewxviv4q",
  "key10": "3JDB4QjuaxgRLS5GoGqrxijtJ2switC3XYx2gSB9Fp1h6PWcgdUepvBu1BAxm6WgT2GBXkeBkPnrhNEjUe8Asaav",
  "key11": "4W61LVs4XEa3WUqwgiHpCqq1ryuTxM1gaFLyKJUDn31E81oENJQaygoSR5kKfRdDfKx1XHsBMc38KdzkLhFxBCAR",
  "key12": "4anHfSXKK2dCa9oToZYHXsRHXxev675d7u1xuPL9wzvNFvR8i1AMvhjQio318vLaUhs6gwDWi95TEK4R8cWmJvqB",
  "key13": "22wCUjvsTSXzPah8RBoNVDkonHFjQEDhx5qJSQSornCs3kAjerLJDzr7oQqJsVX4ZQtvvKhchXXuR3gq8Y3Y4iwg",
  "key14": "176B2myqoCzjf4sw2WygAgHPZnLaeoB4gJHvpibL7mXPDHHVwg2KN5AWr4jzKDkF7pe6k9UAzb4fDPtiLhnGfzr",
  "key15": "3S4EUHmbgnienTEQPVycuamcUXqvjZpEc4dQw9fwYucPCf5C3ULJ67DkqkrFddg5JC6xoVsBHz43ffZid7PorXDa",
  "key16": "47WtykEauihvZZPvpuutgFZje2WwAXnLdfUjSTHF5ypyYLqJnDXkqXNaj6y9PvXXk3g1snCZTFreereVwAyvWnWm",
  "key17": "q523h8tT1Xt8qeBPyuDsv7671iPqrs13SJu98ou5fLbwHLNseFaFWcaJoeNmhUbwnZFChWsTHvhCL17Cf3RvC6j",
  "key18": "2pC29L69oMUXrYFQVAEeCSAijrDe7c8dGunz8t9drSermPaYE5SFT8qpasaQ7ZqFn467yp8eAQnKQTa25ZKqveD3",
  "key19": "2J4DPLRytUfWJ1DV1SMjpU8LJPrXGbswUKVUKbaZHin1pEwFyRE7JFSmgFWuyHggecXhVaFVX6gt3CtfB1ekJLKH",
  "key20": "4izn41zYuEEcMnti6RkdRHoZBZ5G8DP9AfdZ84t21utZ2KTKQGXaUpjnJeXXSXi6PXvznbBiPuUK5GGdQkMV2ACY",
  "key21": "5Uu1SfmQmM5SqEwR1LfqnGDtZ9V1hV14pcxyPfXPDjZ9FWkqS9r35rNnywqg7QhRtvUZ6AJDcPiWWUPwccHDLvym",
  "key22": "29YhrCptK77tjGu32EW49d6aqCC2tkrsP7SNtD7iSPq2tTApjiib381wsQRtPhFAi9L4znNx4SVnPKe44hhutA78",
  "key23": "wMpTQc29gPHwjgoELJveC5SMUbiFfDCusEskpGe835YJE25mEAM3zeL7zJsVAZjqifYcL79PkozEoqZ7ArVqJ1r",
  "key24": "UCQLFiNffQsRnoZgoTAAU7JiiNfvPGkqCi5km44gt8zvdW62m17ZgRni3Wu4pFJhusFpgRWiRsGSC45aa4AxGWT",
  "key25": "2fk6Uh7X8FBbMjjUhmVkphzQ5wVhUX2SYEfXSAhFQvpnZ5cdNRnuFS1EJ7Dc1omJuNhXrmSinyhYAP4mTcr52gbq",
  "key26": "kCHoUoBTzyyixSRb6MbjoEdLegAgZQDUf3RWJeHAakkcTAXuyZtanBh4AsDFtgfHr6485sXDrDiaJrfLeqrvUCZ",
  "key27": "5pNuBf2T4tKjCFkLbhB51JxRpwJ8Rwvh8sr91pFGikkumC5fwFpHzxw3oHYDCaiBzGcPSGja2rNyyk9JQVeMQJW2",
  "key28": "2FkVp6FFJXbKox9y1BuovjGE97T9Ph28VYFtsBxb18ywEx92GPDTTaZuq3A4bmkpmC15NjgzGseu2kxgt1aS5kna",
  "key29": "3ZpPL2jDKWtSAoD7wm37xVWnxEnn7PsH62ccHtBHu42uGwfyLu1KEWdBXATKZszgk7ccaxa6EnRt9x2841ZovDZi",
  "key30": "mk3R9KQQ4c43zhkG9dFTQnwZTcG87bAqkTT82iotPi3YjUFKcVHa3QVMAA7JZMY7pQ4BWQHdHHySucKyiADgvKR",
  "key31": "3HDExTBuuYxaVpJrTG1NY7z4KXrUU22PTgazwzTZheHvGEveTMToxjFT54B5DQBvmnAVNipnkKq22AososwnxuXV",
  "key32": "52Snoyzi2gUThq93TXqjazUTaReK8V3nuY8WeYDzBQcbf2Y8Htb8H6B7rFLEdMi5W9on5WU1VnfnDhwRY9ZkkHj7",
  "key33": "3XUhHgpt44ov5pAtmVQYAY63zQfYgoWULGYUP4Xxm8iQiqk5fYU52JUbKJBGstR3bagX93BjxTTn44TMEeMdr6FC",
  "key34": "3vfo5GMgRWE1FiHPzn39Ainj51VmbPx9PoFQY3tJsQPgWqypeex6THEG6RRNFdfAVxkk5Jc1v7Wt6ZR76yb3G4iK",
  "key35": "4tjSKrQJVbySZ68dEBaAV9CL6XWgbuQpDHZFiu928jFY3j4f5EGHZcSMCxL9zh5JM1kKFtY1fHHFZLn38tJd8QpQ",
  "key36": "3iot7f6a3v1SmXQdhuYR4HNFN6rv4eJpyvCrWn9YpBt6JdjQMK4s7Qyt51DZfAE7THVgtFLwHgAnJRvi5uPaDRPy",
  "key37": "5JUEjievapjukBTFYPC5KfkiyYSwR2CUUvk6GxFbdvw5nBcdhE9TaYxkM2KctRmEv5n2dwwwgWPJFZeL8nVz1TpT",
  "key38": "QrnASAyXh6s2WEYHyNRmB7gZ3oA2BTyrJ53WK1jagUBUT4z9qcyFKhwLaz3bYYBhGw8WSh3FQrRSVQBDvzcRfYz",
  "key39": "3xAd7AyxFTUcibiCQKtD74w8fP5vwKtf2AeWAe1Q1FcT6w8U8t6Tqwi45mj5Rco24PqUf3Ze5JcLfoBoZSMcgw25",
  "key40": "32hWejteYTebkD7UpZgyu2kVf3V3GfbYZyVwLKj2N7Mk1SW6MXwRX1aBndBCeyTruqrbi4P8gGjrwr3LSyZCx3Ua",
  "key41": "7Ss8tVcFcg6hTBBUbYYWbSkWDdSQBw2C5vrmBmJYHaEY9ZbqtYLs13tUpFsarSjxiSVUATSpfQSwQZkqjG81tDq",
  "key42": "5Ztg91ZGVaCcFX3rvVnnCn12AUd3DktALsdSoSMUaEpdPsuyTtjnjsTp7ZXegimT4w2LSGSHjdnZAsXCGvmuBdPY"
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
