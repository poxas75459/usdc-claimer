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
    "59SyAB5927F1UdkBZVpc1D7bHpoQb2FphB5Ta3rEYBbRdMTvjvk7PQU6px8GaWSDaQihkf8rqn8nghpfB1QtbJnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HzBkgyt5MsUeL6hT6syp8AvKEDs83SKHbFwXEdxJLcLeGKeTEPVoDvKPi6rPBkBBUEvHdeRaQ5X3jSGdouaTuYt",
  "key1": "z1pGur5NeE7LWMzEuasx14oMaPdT18FVXT8W7t6oWk7avvqHj2U8FTVifE88KXy1f8GjAfqmBErwAKAE7n6E9aR",
  "key2": "44yEERVWe2bgZVGNAVXxR3gtLbxS6AkEGcsYXSzSM9KYJzGLDpe4NXYaWszb3iSpDfAPGN2nijXnygdFzRm94NJg",
  "key3": "4awQsxwfoJnVD82ZpPeuzubTyi8vFkDbEkXN7wiY15cGQYP7ZWvaybQkpxqwx5MF4C3fLCXhaKpyfZVd1gGbR5Zn",
  "key4": "2HKeDSMhr9NJRGTch1pDavsE8zpSSuoSjTp6FujNMhynWQAZYmgstRNtPMNSSQPvs17AkdkeBgofYtDS2uQacQRz",
  "key5": "4oBAqYuEeJDMJaDimeHUk1zQM8VJjwaYudBmEAwCddiezWi2QHS2N79AofnkmkdvkRAUp21FqZghA2NTFUptJMo7",
  "key6": "4X8uSSMQCi2nfVw14CsfvvbGWCVwgdXp8MCiieXixjGn7HdbtngPR3WAs5i1Mbj1ExhgzSAkbcQPhmeoWKKHCYvY",
  "key7": "3oRM3DHmwpCatb6zF4wf3FKNH9iKdpVXhBHTYZARLzwy2n6iDxxSEuskJRMaUqdGGcy4xMznBtW4XboB769MtZjw",
  "key8": "peY65tkjAhiQaTrLw14UiU5hBjnsfAqAtUaTXZBKFAudHGWxzkEkddLL2mk6hjT63BzjdNv1ntkmqz7xGb6cvCK",
  "key9": "creSxgok6KwbQUFEXvxLvRzk1JNQKLsUsKM1Gh267UxJiaKpFUFmMLz5MTBxZc2KCYG3GZrfY1phoeoA4RjyoFn",
  "key10": "4PK7LJXpZYJLEQuu5wWqDw9zQwbnZPHDLUSBgTrFMLTUngzJT9F9EcMY1cP6yXSAY8ovG3zwmLmmBPoxkS8MSi76",
  "key11": "3FtMvBzUFEVDgPx3Dt9rGrLZXWasJ4VopMRmtYZQLADcVPJfCbidNakzwrs7xeVyoUmCqJyp9UW7HveGgERdpu8J",
  "key12": "KVFL7SfMdyy7NmQZdULGT9jckv3XppdBtayVUHGWwsJrKbCmms927JjLb9TS9yKnGvn1NnPUqtCkkVRTRtiw11j",
  "key13": "4LQxWvCwkSxcv89QiF2G87M7BaZUDC6RWiQZqRVeDVjVWdKLeBZ44SjdBDexJYmeVA8zFyBzRwQy1GRBj5H9XtmP",
  "key14": "2VZ6PyoMHA5pnFvADshNxjfuoUZGYr2HHEwdsTQ9ePdKCU5Vhx7f7ACMRR7Dvc1myUU6GcmbsDABkWoVihVowm7x",
  "key15": "UmsvpHUUx2MrDFQjuEtjFL6Dj5LW9Qyina4gD3Q2AJfNrFkjDSVHzrhVit2kF8uKShxdoWNU1zwDXn1J9GA12hS",
  "key16": "3Sn3evrmVqd1sMQQV3SAcAq4qWogsxxM9jp51p3e2wXG9oAoA3tjA9pBUSMXGbxJLzWLgr4Lvp45TXpD1HEWudQW",
  "key17": "2gqM2U28JChC3yZb8u6mBukZzwvV4ZgNJJqyhBHZBTYMG1EtNPimUafUFtqYXkY9c6GGDMK1pAnoB2kFv8f2wiXR",
  "key18": "4tTqPPEPoV3WLF3VyWufuXuVx54qHr6ZAYWAYBSXwybYKXU1i9zRgW41wMiq8ghyjNp1vKT2yrMnqkz1Bcgrn1Tb",
  "key19": "R6jfHTnsbTouNB3pMrS94kHJCiaWqrHQApJx9VJwtQUcmrrML4WAf2jPAb4Jb4tmi4qHoF6tBVCFgqD4yL3nAYk",
  "key20": "4SMHWm4N7P7mpu79iA71q8oHprTQXNDumwY9gvYEE5eP7ZdojfSsjP3vjjFqKxyQv9w6cqV7767YXaPbL16vnj3L",
  "key21": "49y6rhqofv6zGCozjjKFSgadtP8uTM4gc3ryX5KBXvxdtwGpp4haGtmqXHNMmt1S8oEBH16m6Hq6g61dvFEuKT5i",
  "key22": "ftjhYLBKmn66RXcgPkTW4obHrPBz4JWGY5xskd6mFLvFCqgJcNUF6SnPAseCXiZ1LSYugXev7tyU4AAdHcRLG17",
  "key23": "33m7Gfa3kGjYj3gCn9hc9dUYwN7Vq5MsM3wZPobPJaH5rUkcbjJqpDCA8xydBCPZ1pB14a1noonxenw3id2VD9k1",
  "key24": "5tZStxQEaTE9xxEdssRPw5KXqASEA1zBQruKe7dkuHR25Vboso49dCLrnzTM6Zr5vNfUQ84Uge16Kocq29FqvsrZ",
  "key25": "5qgGxpPYPvkwWcz25y4gAx86XRwZ63TbSADpJByBt6CPXvEnsDn2YgBsDhhCDkSX5g8i4EAkru8eeDy5ifTDHhHe",
  "key26": "4BQ3UUhE1NB61ifVy9ehjZBZ4gtGAZoxCYyABBAveqwebgdPCFLUktXbynvvE7VJhHG9dCyp59VYeqXSjQd4mmVP",
  "key27": "pTG5gBn3VGghNpvRhx1w6UL9HipAWnH2pCQEAsh3SuUQgYdCEsBc1C1TuzjnsCUMyfMRryGpFEXMTbExFrGUuVs",
  "key28": "2qbjxSDe2Wm4Y6PEaCgZeSbGkW2gt7rMXBg4czqq3p2DD83nVe6Qf4hLheHde3p3j2xfwWc9GCZcDrB4gu2apwsA",
  "key29": "3kUuEVwCK4t2gPKwYf9HxyKDErodV8JUjLpBawB2VfFnUuaV4ij2tduydma2kebzJnDXUL1cznc47o9sJp2u7Esi",
  "key30": "55QjqazWhgrpHY7CGTLbnYJ4DaQhFf7QHjfKTZSrNygxSAwNYUfuuwL7yzKbjbrfBRTp5T8UyBoprNBvYuz1wCbz",
  "key31": "2X96PkyPTt53mHn7vKQ33aQ9N6ihsb7eaPqEpDkW2FgHCxcFEyVkH9g6LJfCDZtpTzaDuRsaCbJ99uYRKJZJLrKy",
  "key32": "1nzd1QdpLryDp3R4GgAsdFddm58DttosVK5kyo9qaUxSSLNsqz9iisysfkWatWg9ffjZ8RqM9meZ5tMUWQzxFTw",
  "key33": "4Qxjn7LoagQPgB5kaoNT8oN6WrFNyr5xyaNGYPtHekiLDnVHcxGdtqLJhnCCEfWqk5WNeCGqZD6qKqhFEg7AGcxw",
  "key34": "gvwrCt9RL4e3cDyZNStJVXtb27DmNwyg43QbCNwP7SAPfjfoUY2JbLUU9Gk3z1vSYFbsZ3gDJQKuii2ocCxHPaQ",
  "key35": "E3Xs6N8NJRBTC9MgRNvjMopUnL5PCtLUJyJP3wH6Mo7z4nX89AUU3zaRHaMYFoAz4fjLgjGCQDtbVsez1WLDKoq",
  "key36": "4XnbcEefA4Pr6d6J3Gyf31Dss6PQBMxV1xrhzmcSiLxcWnnGwRaVjVyTSivbEqbYfaz9y6CSZsnKjSc122aorFpx",
  "key37": "qXPNo6xHL326XXknfzqUiq284Doz2hmYM1FpMZ9x5anA9MxUXPoHEiP4AzJDDTbuHkLTD4pXHmPRNw2qMzPL9S9",
  "key38": "3u8vCx4VGyQbBGjwWYwWjZ9U49uAbyaXfS1CH3GYx3Zg5ZrShXkoPXyMiKzZ6pVGY4oK8SbHadLp3G42QjhZbpv5",
  "key39": "275FSc4DXorrSeoE7nQqs9PArQ6mrD2brHgdMnKtEQy6zpcyGsDT6FxXE4xVzHSVXGSW2xxFiUcmySenLw5NLDBt",
  "key40": "52uV7GHvuBBoR9ojhX3S9P7pieMAjyfR9QG63EVjotKzgFXLd1M2LKyRzzx1fNEbybTFyrWx4CfvTF5XEmG7jR1e",
  "key41": "Zsj1Qzn8MxsMFitecaY8njAuTLdf4uci9ksaodc1yBJpSt9KpXxQJFVPDq9ohyJvc8Mo9yKZK8jafmEigVRWbtk",
  "key42": "8yCWczquBxPywKRMVNNNBnN7XVQmAHxHvTzg8HocKbLRoqD7acxMAsgiJbuYrgP9G4TEuSPSCMp25i6hcZmeUB6",
  "key43": "4Y84bu2AiRmKdLGyNVmtPehUJvUB6vyuiXWL3FppwcZ9YrJarnthhK22Qu6ctkP2cRrb1DdKR68nHS5SDKjykDhb",
  "key44": "4WYHJeoMBf6ZzuZzgnczzQbiE4FDJNYM5YMhqMdHc857VNZRvHTFfWbmwpJaLjaKfoBrqJz3R4LLHH8pyeKdTyeH",
  "key45": "3hP7ZmkHx2y18E6u6mBfEE3qTnSn86tFBqbdh2TX16DAF9BQE9CJftiV2BmuWNNuHiHjxUvrHUBK4inKfv6ZSYsc",
  "key46": "4yqDfcZ7qcXSK9pbJy6N9EDA3H92vTVwb424uabzFDwqWq9H51WKFrTHJBDNaPpN5yiuyQLNKiTv7RSktxuiWSNL",
  "key47": "2tJRBNhzJwN1dcbxXT1BDxiPhhcxHScgdyC4KJ6cUGZhPaR1eVP9otohCMR7ShLvgFNneFBnkCD1pG6isiY3SUYe",
  "key48": "4V4FYpGbHB8korJ6FtBjQp6FiH4yqvKQM9WtzjFdqEhzpjPzoTUYDG4xLcDHxjjJekosczxxfKndGXqr8KcyqBo5",
  "key49": "r2dHeVwJgjRv7rjqSVjYxy4AMz8mCV9RgtiJ7quK34GfUMgquWCo2UsKeQ6ymq5UsXZazFPVHMgsVTRvAYyKbSt"
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
