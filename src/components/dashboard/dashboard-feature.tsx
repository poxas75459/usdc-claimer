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
    "4ffeNqbsRfQrUR5d6KsWB59Rw6hYTSTAaZodSQi3JcSyz4BUNxwdCgxUA71HsTSkEwq4FgBqXCLo33dit5DGiSgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWtv4EM1HFGhSwEbYozdwKCpUYjZq7R83FTvgBjeJvSCKwHNCxS7yotPhiz2BAU5fkqM1xsg8EfH3hx4wAjmvPz",
  "key1": "5iXrusqabXJan1MoCi2cvDihuAZ8MvvuUFNAkoftu7d6hbtjCEjT1TcrF8vB51sZCPvGfDXKfMpsirt8Z52PWTHq",
  "key2": "WgjS44BZzcxTgkapux6RdWeFYWstznqoCJsCuw35Mi1QAehWmnpZv86Ng59zCyVFZdDC3LoBnKb4fnzi2W4dGez",
  "key3": "5Qvit4tqLD42xDYmZQAP16MTT2zmpsmy9cWQEzqx1vTEarxQ2JF6EjNm1H4QNnbPF2uEvRnae9PP4Gd73beqbamK",
  "key4": "3RZXdtyZfTj6ucQ8GWcv5hZgbv14zwLNkU3eQkgmfM7oLFVHGe3pvNbSAXiKDbeWQE9UXzrb5cRnEcdZLa6HD7Tc",
  "key5": "3QBUZK4wmXt9YXoNXQQo4FQEkjAc6aekF9U5FRZB3JgQoorHzBTkXBLrd3LLqdRbFJPxoz8WuW8knjp1jYHED1RT",
  "key6": "4U6cncgi4QjCCkpnM5A4xtArA2kuRe78FmxGbNxvRuNXHgYwQTa4rJwCyE9V416RemfnMGN4eYodKGkRTTdkX36F",
  "key7": "QsuZvi2DeEFATQHfqVBZxvFWx2Z7jZ3rumGWhUT1PSxjuZx3vTgMTMqqaGsPcFGoeXsDjXYjFzTBdW6R4H6dRxh",
  "key8": "2CPrDyZFkwB35pRkXgjQKaR5xTyFewyhEHRJr8KF7T5YCnRco32cnBnnjYCpwmcutdzPT5sHsFE2K3JWf7zcrVKT",
  "key9": "4LZSkPx6PSNEsM1LZo1FvaGL5eE2858hGZK2HVLbpHSbsLQUbtNxgag12NestqJZMAxjs5JxxGVdn5N2BRj8z8Lj",
  "key10": "28Dc8xzuUjQ4c7vemTmha7mj8YXopNEm1LgJLmRLTVaPY3XyGbqXsXnjzv2QEHs1Gi6EubQUK6U1zVfPej9Ko4xH",
  "key11": "58gbsACabigzCVcziXXcmecqXSF5gELiXtiEu6Gvjpv5FAjvqc7VTLXmKzSTFs7989wNdwNSXEGTWxtBb28oaVB8",
  "key12": "3GUvM4F6K7U4bLuK3ipkZFU3mYJrHGNnrMML8SLQb5tNz2K5jurhQqJUhEBJKg1xQt8X435yhM2YZjX3yxAnmZL",
  "key13": "4teSvg3A6bPtcVmtsCXxNwFLWnTTt5GwvSYWthZCSipPyq3H1co7zc4fdPqPm4SFpArbVRaoSsVdTJPfxbSLgmYm",
  "key14": "ps9Vbkxz8Pa88Dkwxrbj3dYLWmUcc24aCiArAdH9jWFavzaXKRoHeDhC9DxzSwHet895YrEFi3EU5EMSUsh5ghU",
  "key15": "5XVvq3Sd6uXPV6rQH2jwTLDwkXmjbWYY7CarFGnLGDPPztSxJ72ai4R1nvpaCnNR3XM7n3jdgDmSGjAWnoTKgvvG",
  "key16": "5bThYYgGV2ScFjc5ub2H24im57i9QnSD4iQxsKaxJscbZs9TFTM9zi5eWTvgLj3qJVvLdCrfzyBDLZzsRgx1tFM9",
  "key17": "9E7FWSJGuxvf6UN3E5SPvvtRtJNSu635iwbS3KCDBsUYhvzdPM8Xwj4Re3MogNnmAfT73vU9Fb46o7cZoEYjCHL",
  "key18": "2wy9CvhZmFmNapwDhdwzh4mFgHHou62aHGiUdS3xbmGHanTfBq53wZRvpnKPVwL1wQm2wMxm3AF6V7QhbQ32tEZr",
  "key19": "3Y8xXBLbLEtUcZNKSuSbAdo5niMFmjv2LsvHcT2B7s7u7LNaN6GPba9SvzY4zHrzvxTWGrLmpTExbPmLxfEf9328",
  "key20": "3fEgAvP8hNL5bixtvEjSvcNgoK3avzqvPCn93h9qwzJ8rYjpppoXD7oNAM8aiCZaquChu1F1pUWy3a5L9EDuHxy",
  "key21": "5B3Qz4nHJMVzGWBsvAmjrZdy4KrsKDcbqc663zDa6NpousuRw4xXYkhxLnqcYqqc3dQKYZtkK4TTkS4VYJuj4Gak",
  "key22": "5UXnubBubjRkeCEQ7YivwxmLmfmPGhCKpiBAeHzby36kfSRjTazmLgTh2m8eFQvfWpLyh2FbtTDvxuB7ouX31o6h",
  "key23": "25KyADztf6hfRbRmqMzocqf65rLEypsWNjED7Ai8spJgdiWpNxLdBKEJF4T7N3pWYv7Xt75o8DRdXfw6d6ydRHyn",
  "key24": "3C9N1oyyfuLSuggjHS4VogfqamM5r5wWv9Nv5ta4wbMTuTnhyYM4a53FL1VtunaGvmJpmadbqhb7aDH7YLS7jUQx",
  "key25": "5A69uAikSFdTyo6PDtzSXqLmox4gwyKxVLZRegG3QYjSNLdo3UyT4ssM12ZYXDwpdRiJ8ShFAunVHu7LnsQNf7iK",
  "key26": "66PXoTrFYf9qgmmj5uK4Q44X4di5zSfFDhD4uLaz3rgF9Q7842dq4Lch9MeVBbq2fKssMMS662NAffUYsYhRwTCR",
  "key27": "vLCnTriY7M4gh9mm86PVrCSKfo3Xs8KUFX5E2C2t5owHyUw5ZiLc5kC9tfsh7usisTkfc5cCDAZi9Z5TFFsrPNX",
  "key28": "qtBufZ82kfy1wmvsiPeAnWaXfmBY9qgRmTgnTa9Y4rWgek7WfBQLwgTbebeSFQ24PaQYA3PpmKyeoWaBLmminQS",
  "key29": "5iDrx8mxknZgfqwxQHDfjBSMZTQe1NJGh83xf97srFsd8zTAQBUMDpn6mDCSu7W8R9T1ofynDcXvfMgDGP3qDEVs",
  "key30": "5q6e6ojcTe2KgcZTzdXxiT7sRJsKLNQEqUm3UXN7WrjicYEwTJn17kMYvU5AAvUFtynW5kSryvF14AMCykDTzTVJ",
  "key31": "2pzx8pXW7G8SKxrrpVQmPcVqwfDo8PWVcZVnqfjCdfrSzTvjPfzQhQYMgbPriLzpiMs5UKp947uyH8yp9x9SnUQ",
  "key32": "2RDtm1anhcPcxRiqhAezttyJjh1sddCUZUjkLhwtXZSt9WvQqjXJAGzFF9bHpcNUjoAw2zAmGqxN26SABaYGB9Df",
  "key33": "2LZ9fD6yGfPkN6yeHLRp1krbmHZgmtxSnXS14vTGGEdbF5eh5UmULYsCNXSvCeNk5piZnPoa6S2BMaFrCTz9ag45"
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
