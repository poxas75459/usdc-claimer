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
    "3tQLXGuspL4XuedCHgVy3R17SoWkovkQmZgJdjvVnu42jWRbyKR44rZUcuoD5n6iZaKsPN1xxcfwnSCuwBoovcx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGN6dqN4LRTbEJgLdaHqGuabyf5QkPAf5w5iFwQbZECiudnQD27HgQBmJDx84hgpdnt7pK4xQUzSYyKtpFu3pXH",
  "key1": "2aTbiLPz9HrqxZ61kXgzbdn9UUyA8qSRTXEmfZZZ2eyQsz4334A5bGLjXQ9X4FSP53AQKRVMuKPbq3RtrmMQSsXf",
  "key2": "35JHQg663fmCDevmAMEZcwTiYaguyCJ2EaKZeYxPPFnCvemUpL7JgnFB8gs7X1nxU1Hz9pxLN7SWJuMm4JcnWNwp",
  "key3": "3X3ZxoGri6p4f4dA2eu6wdJPKK7uZFiHgbbqNdvd583Q8p27mkKtvkiBjLHF9XbCPrJKJwqodDKxi8SkQg7ZvtEq",
  "key4": "5biRyFCVZyPBCy7zY7bmrziXpM3vFc6irSbxE65uETdDir9ckyuLLhw1NY86So3rGax8UTQHyuWQHYRRaomqMHuq",
  "key5": "45wBqKp7vZeShX84nve3yvpPi74Y66GznFT2brq1KT8BEqxrFVdhp7ust8c698J29REcqMdrYocd3pjCWuFH1bo3",
  "key6": "2f5Hh79aRVDKqpcEv7C9xxqxBHKZPzu1P7DKtpcJvxak6s2SaxnG8SxVXVuyncsGcgkNBtwZFuhRc5ALi6GPd6MA",
  "key7": "5ejQmE7PeBk1eE6MvCg8FneoEjMu5XDoMvh65pvBXy52m7t3deVzBnMzooYhGaPRgFsZWPMrE3fXuZXqWumFe4YE",
  "key8": "28pcA5RzRk3ovmGSKthw8k8hfawNZh9cepoNNzDTpSfC4T1HWy6qZQQS9tCL2CAhW9VwPu4WDB6mc4w1Po2Xu8qQ",
  "key9": "9feP5vQXFpD5PQak8VwXdHVvvUPVGNLS3PYA5MhMBVRreetSTsVaM1CFfLpa8HwXCM276aBRuAqNETnnrjE3Ab8",
  "key10": "2d3YDiZFpZqTbtHVZ5K8acEUb6a1YFwz9c97H1Q3rspidbogzvyk5ziUCQ96gRiwm53bVJuVxSJ5oG7TUUkD3QUe",
  "key11": "4iJhAZPuWSpEDpUkBJWgK51SqSijp457kAtBEvECMzsTWVVKQ3hWmSUDsBz1G2vUqS7L8gNFuo6tqfvqy4tKuRv3",
  "key12": "iuxfSD5vHg4XozDWmwfuBE4tUqPWivxanEvYrzVU7rry8wFwEg85Fng9ks2SAAvi3sLc5DRzZUTKLWT97DYty2N",
  "key13": "4MHbonucxodRTuh1guHNh1pq9ooNQjUpAsGqjfRcwe6PRgpAWRPMv3KmfAWyyMgGCE1A77uqxS6DJ9jwSAEtAE7",
  "key14": "5JERoE3DkeVTugbwHN1AK5SVbiuQK1thUQXegr23DPKFQnyhJwV99qohdaJrejAisAyqx1kxqaRBZtiCTvanpccG",
  "key15": "3mWf14uqcm5wEGp3RBCvEoAisHB1aL8w3dir8pxvtNseoGtHzAW9YgraGYYNDFUXBWBKTB5V8f8MXMsyyJMJe18D",
  "key16": "3HfBYSqWTtpES5adnMhuP4iSKseTTdiXDPdmgrDnXAEL4ivBmkuZAHYEiPE1r485ATaMpsxU9VWPk5Xs4VxK4S4M",
  "key17": "4nmi813L21f2XzgsJnfPWJuiGhByUcGBWFSJcvZKNPfYpsxMKJTNXZygmX3Ciw7roJvtynStjJg99XC1CYNF1fSo",
  "key18": "5JqLrzRhCEzqU3Yei4MJfrtooDjqoC3brHMj66wU4KmjwGSNc2hYLrwf1DdjD5q97Hx8CnWHtTe872BAACDzVzfr",
  "key19": "4WnEmXo9NBrdkr436dTbcAi4TpE5V3Q19PMrWhrDbteYgLSeTNHUZ1Gvf36y3rCNUgrjZFzSXLpTPTY8tFHukBSM",
  "key20": "w2qrc2yp9TRS79dgUCcrCYAcjpDGoNRXaMEZQytA5gvLUjJS9by3jv7FQwLpm8KmaBL2efirHW7gnMqGZyCmAjC",
  "key21": "57yWsAGXNh4aHeAjhuoyM3vsjeqCWjYRwVFCz1GDX9BoVdEPGfJwJoQ1c4W8Q2BBkCJUmfb3Ex6NAd1fSuwekqBM",
  "key22": "3rKyGbG8gsMFbxPhYCYDKZPFGnpVCmZjNCtbLoRLt8TdNbmPRpNZYgmvjtbFXxr5YHewpDsSu1wwjWWcfHGPadU5",
  "key23": "3qkGXNEg4Zc9p7Y6LkPb8aKCQELtKe2HYJXnixpFBmeKD6Ybk5xGV32bseHqQMWBzZm8V2M8brPvZAqDUTHZT5Yo",
  "key24": "4n43jPnCvthFwjEmmK1t6FgrF1jckCU4KTJH8XczAXtY2LXJtLLWm6EfcKhwfuCWG2jFUzC5yBtoJAt3XS4J7BVe",
  "key25": "2vdsFovTmkpB7sC9zPNdMpP8TkWZpCf69P8SAP4fuzqNBDRQXgwyFWjnPHbQ5wmmEmbupZ4JytbyUShnnACy1KBi",
  "key26": "2c6DdVmS6ZKGcWRZzqT2CtB7earyEtiMrURbMe7LkqGyw7C9UATbjddpj4WLnhUcRzD1Rdc731PSEujmMSDpKbfZ",
  "key27": "2vuTX2sLTEkhVYg9KbkKJZjxqGeGRxGTVNQWBCitv1rE31hnfmQg36gFBpTaSgApprTZ9XuXN4YQEB3ohyFLKZhY",
  "key28": "aXp2DCNVbmQe4yQSrjeS4FDurFhFWCyHYsU2WLZXWYMR2cgsXCj1Cfqr5FVY5YEVkQMDHbu8ZcYLimLMuWQVT1B",
  "key29": "42cx81jnAaiz2rFx4ReNUBYrLGF6AwETyZD8vgWcaJas5khzQA7XKWyZYU75PheZKFEbVPYVnAtDKCv513TnWfDC",
  "key30": "3MfC7ydxEMCcgbehLhgp78eC5C8mqEWhbuDU9iKCQExoitf5DVv8NDT2cD7pVNGmGXcLSwyoP7rhpedufJgdbJLy",
  "key31": "5NE49xD91WcJVBubA4aStGJcRTmKUnmKtWm29cYLjcHFkWTXrkbYWaRjWv5Y7J6DfbJTu4KCB7kEpTACNXC3BUXs",
  "key32": "5SGfdj22tQozidnujWCkTfPyWHcVndJ4CnCynyP1HZP9T2one8uSr4ebDCau2hrcaTaEbCgb3xG3btpMcXhFdjNL",
  "key33": "43EmPhf72X89zAW6A2jaxS6PJtFK9poYZFvC6NdPuuoXY6K65u8Z54goyduqyTt1tmpmsSQ4gjYazU7wyJ14yuCp",
  "key34": "5tAN8CH5or1tk7UuSh12sBfEXP54aYWPQsf6BNVcuG3qDuaBUDSP8D5HXiNf4Ucr7hbc695tKXJ9EvggaoJ1xiWu",
  "key35": "4fepKaFF9XnFecFgQty9vNdAXUKLCW4MxBHLZ4DvqyzvFgwhJS9H28Kg2PXojzTQrM4qgiuxPWBkhZy9qaohZfB9",
  "key36": "NkMxEVG4omg2VqDXPRMbkPh3VJrLjC1DMzpHSJ8uAvZNoX4nQLn77WJUGnuf6ioXzLciXwqDoKg1y7ZPbP2XwYE",
  "key37": "36ivEttLUQrQc5SEfHyMoe2pxmnrTSA22fvAzTvKSETquaF6fveLs9Q12CfA7dgWGCGpfEd6nMm3TzYcpBzccoo5",
  "key38": "2zPDmrVBQFQj2JADyXPPMLY1xgnQD8oPova2tVFPm2dQRjcQYHt5rmnMFcR1SHxsGPJkkiAy7UA4sgWUmXFNWKgZ",
  "key39": "26mBqtayLapXZGk28493D8ac9pfYWuJdJtBzDTQp41H2ZxJe71RLrNWmGfFuax2CWjMuSC2sSWivr5HdkE54Avff",
  "key40": "2kqR8Er9WGJf3zKhZVSEcktBrq6VGtDz57xFojcqrfGwDepBEf1JUksPAZTUQ8CfcZFM474noq5FsvyvbYmdJnox",
  "key41": "3UjSV9H9S5Lfi4SZ8jybonNjaiDgFobnTHVv1a6vhbgvMZb5bwHymeyzZTkdL4hT4kJ1A2e5xLGw9r91kRRCUF1G",
  "key42": "5jUZsfwZepn2LQeQb1VUzmnTVpVTDKqnje9sUpoWJyiiViQkn9yuhe5YKQRRGDJan9N32KzYMKGH9CyX4epvRSHE"
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
