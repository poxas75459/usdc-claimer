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
    "2Feth29eqjZqCeWV98jPCLodGH8X9pRWWXQpszmjjx1XqeLYiigRNmkcJv1ogtZ5YfkY4u4ek2UhAosq18jc8xsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZ3jQkVfuAMFWM6UEq3Aekfm2ieewp2cPTL19jjDbqeCgAg99HDUe9eLn6qkLg9tFrzucvKVKG1Hzyyw4kn9977",
  "key1": "3XBQ3bLXGJVQXb1EKApsZNw9JmJ48rtXc6L6G1nFSRwkTPbkqtgVBzJqTV9c2e3miM9kbF6D1rX4nb8KKQyjQasD",
  "key2": "9Ev86vREvAnKX5e7GWwy9nWDrX3VNx652f8oKfJKvBYhtEXhko77dRwSZormK2RE2AyBvJyzGF9sP6co1ar97ni",
  "key3": "4yYE7nnvGSftwBhvmbSGeGD1rKvAngNGrhLQk5oP7HiUyuRidAK9FNQJ8xBYVBfJa7RgBuobucHvtNxi1GhYMZWt",
  "key4": "D1q3fUpoxdzDVH1qqkzHy43LBkUsF783ibVHyaEFgxmprFPBLVGdYb7F5PA9TSq5WTq7QGscwh6SQqGVFK9pSUa",
  "key5": "4X98rvWuH9rzHEGHKnSdmNMowBgzWy2NNc5dSFywfFTC7LcPaysvDnSGCektKkp9BUXiL9DZJdakoYxSnApFLdXL",
  "key6": "36KPDGASEHn7Pw3WfsjikTezCVkKgFHsx3hqmf8WMF3ZaFUJpdicWtNwy8xaZsgdbVAXGsviZEHBLAqoGbSuATRv",
  "key7": "4F88zgKV84J9u8wBb5bBQHfQs2UdPaA8F1yEqFjtsshbSyiK4QorhfqocjDWyArzBY4b5K9xivoB12KyjjyzaNF",
  "key8": "4edxoorYNS3oDhukLY4g7oxU2zvkCBx5xrM1Q7NVVFTWZQuGZHvD5QmACVkhCNDdrFRn7ZuotbiNz4BUsktk4xDW",
  "key9": "771oRmfxjwGCeSLZq6mRm1NX2ASUaZ3Ac6yXsV32zoiqdr1dzQGrZtQXJCNqKYtsRQFna6cLokEZ4oyYBxxXshs",
  "key10": "5imcNndRk3fHNivqZ7UgBVgsMSMJ4e2SJzrU4UoKUtuejnBHKbuc72K5PyCGwC2cry671DF9yvLfp3k2sumXXoNQ",
  "key11": "mC28Layu61nuaCztXaVutRjH4QKH2fJcD1b6EVvkkw6ABS3xeoypRHVELGvod2CR2y1g3egqFf7f5zTKQ7mdRzb",
  "key12": "2bW2qPKJ7onsmK6shS4ruxhK4w7xxYUf4P1i13N2tZYHaBXhnPA3u9gwm1dLF1Qz8CkupoeUYxLQJSVACqy9EzvM",
  "key13": "2eF62kQvPU1c3Rqtu5c7cansdVHfTx2F6RfvkfEczXySmiGx4WPZXV72nEv7Zvi947y8LMWVUtYn1bTqXCCT29T6",
  "key14": "dL3eXLf914Smj8SeUfo5teUCa5zq82PYz2x14FCfEZMvtRSwoHDrZHuKJE7BqdLwLGquoarqKtjB5tNmzK2bV13",
  "key15": "2WkjiaLvEHe6eZ8bS4DpGJGtc7mB3NhCddRzKukU7Thb5uTE2VZUxQuT32LjXPiN8e8qX9krUwNf8Er6gzFjkAE5",
  "key16": "2Fqs7NnU8HhWVStnyo1uSUeEcx2tNc9Xpx8tuX9P4oHFMCTNEaNTQe3N5kmzqX1TYjB9TFim1gfYPZQdKkQbc7M2",
  "key17": "4EZtVoGY5H5w6KJZqp3JFjQ82ZDV3MzVS1M8xxEmT5FGjoXRmSng3zi3XWAQvD4e3MPpNMsHznErp8PMfv6EwbWv",
  "key18": "5rcX7TRKtwHdJgNMNWBdER2xygq4mcXWrZwGXWLCRoyeErEeHvHRLtBfWrKfCpHoDXfmFNxsYLsfZs9Hyk6w9Jv4",
  "key19": "4yv9gnyBjR99BkbUtsZKrWWLatBe8xGncbYNaVK7qdfow2rW8Vwq8s3RNSHJ4336sErSCKzZsL9av6ryxDc59Fvz",
  "key20": "jCrGEwB1Q6vGo3498RWT5x63gUBR5EYReL2aV5uEFTQQNR2AYFrot3TQmRFKv9aKp2pcD6wzUMeN9vNDrcyuJdb",
  "key21": "3tYUmcWswUs1kR2FY9XdCzCtLcsahvhR852FXY2pGjXWHeRcEqZKkgDkpJ1q2i3CFjt9zgM5RJrD9AFLjmgBMije",
  "key22": "wZvRn9DcLB8ErKAkQeegfLDawaCq68tqa2xkcg8gY24VEybxicMEumGuqbXQNc26P84tKF582pxsrb5upaWso2E",
  "key23": "2xQQtPuXyJMfBJqxq6MM3fvidXkQWE5sisBzKqeEdseoiEKPwBv7Nu6744GESGjDcuhm948La5UJQrWtC1f5MY6C",
  "key24": "3fi5JhkGXgchfmBHMoFpzNQoJXQB4SXQTeEQbQwD6qYsjMZdQE7BFkc55Pc8RyRgBZEFGgGcVgLXW28udJzUp5He",
  "key25": "HZhgSSkDyuyYKSmwR86tvCzHz1Pdh3iScd46ZQn5CFodRqrnEdjkSdm65zVyY3EhrsEhUsdtkCjePj8fK76xVZG",
  "key26": "5kAYKtCbUosXUTvdP7R7Py6c5WruyupbpytLGyBQniWBNPgGCGrimTHiuMTgcKZJ3vRB8Bv3nAgr6SKA3moQEewD",
  "key27": "r1sbA9ia5vtgqFYv75mqLRmTjh5CspoEcvb6mxeWHhAwbt76tFSvpySfeuz1ggbg47Rn9r6wcSCmb4PgrT2aPb3",
  "key28": "cd7yxVxBHG8MYTuuQB7oLV2iyG8X4GxLctLqpEKJW9UiAasCP9RJmLZDfNiaHLeBmerdzS9zEYtewYcPxH6dXz2",
  "key29": "3aZHdUJmXqb79HoYsgEmGovEKyVsuHWkc5GA8KGc49x1sdGw9NSr6RkBbWQKayx21VBmRtq5YcuYFoKgzkqxYh6k",
  "key30": "3t9PfpNBjLxuLaHat4FCA9qgheg3RtNVSPaaC7d3eTifdNqnGAGeA9WcKhQpoWGpgUKY3tFGuQiHnRHD6wnPeCZF",
  "key31": "fJfLLwEythKNzE61RUEk7n3K6XtyW654MA7yJTiB1jY383f5ovFxuFi4uWnw5GPg65cesVdWfurqudwhKwHboqo",
  "key32": "2QEiNMkSW9acuov5FfZJLyaZatUevY1GXME2QwdJR1ac2Uu6pzHX5Hw4h5PGVCFXDzx1Nj77UWx49qFsBFd9Bgsu",
  "key33": "25bJUMJEzQhGWtG3YwNDRukzYAxLYB7u14FpoVYrL1EBskoS932bf2Bq8FuNWVXiWp5ctdnoecnbngxUwcgym5jX",
  "key34": "QetdoZqKp6dw5LTQdjC3kDufqvdcSGnUC1xUkZRTByxqsxQ6DqusdJT9eRjF4ZszkPnYPZUdCYiFosGHGHx9gGH",
  "key35": "4d4LMUm3y3yPVLTNzvRFm2uZdHaKYecLJ4eRPFsftY39BwUAuVYiPjH3G5RkYbDWA1FCeC8C5qLpyGAqzcCjN6GK",
  "key36": "3zpyWwZ116KgA3GtxV8vSrXJoCudGcUhsHNAVErh9Qhxw7fjhiNhJ26U7iewFPzW4ZxkemkYLskRaVdUw3Aqw9m",
  "key37": "2FUYbRBY3Jg3z7UzCRiTdgsUvcrNUtCtoKyxi8bX2ioVBQE1dSBCeU8KVNWwoa8Cz3uDw53e92YE7UcZ1QfSXXqK",
  "key38": "2MC1EbZweNs7utzYHyjKSme3a8yPeDun75KJxxZmMxRhFxRTr5bQAraD89uqjvBPqhBJYpW8ZDwG9AKE9mim8eWv",
  "key39": "3FRagw6S3PnjCL1DGXkubJNjYkCbJ4wz6ihPgL6n1VcP5X8SbAVtKomooMH5D27CQm1z8XSisc7uKmXSrtjL9Yse",
  "key40": "5h1xCHdRAiSWh2Xo8TQDLrv3ZEiCHvKtjDWzcbmRSiRPvfQbgmG5Gsjq52v7fJUM2kBXM6iKkp2jtdnieodhBE7N",
  "key41": "5koHQ2By7gPsxqzrBrFQ2y1QecgffRdSXfrXerSEUTuJiEBE5nQjUwPAUkPGdzcMrrRt9xN2qHJ4wKhhS4YZe7Mz",
  "key42": "4CvdFzHdV9XR7x8Hf9AK5Q6ntPhHkXSqiFAravE4Dxgt1JWFpu1h3mxvtdix3wWA7sVdTkNneXpaSDgN83sfiYc",
  "key43": "2c7tGMR84RTRFXkAquGrWir5ppS9Nw639Fxe2DZdWs2eNSUzkc9oJteuH3U4BaPKAKmMUagg9FUFk3y3ojKYppht",
  "key44": "4AwhJMBkxQrUkTFMmsRyL7syMAJ7dE2H6qYPiidtP4aTVAWUYaM522htYxtMGo3E79JWEArqrFQifXK97UQFCaUP",
  "key45": "5EYtxJtkJqQqZngKcstcSeuM37AgFG2zr8karyCjrsgVTYnpNnkgJhsXJLELpZCdqaoSFnTmpiBraW7cznmbAHRC",
  "key46": "2WudBN7eguTaimSRvHcy7iiXKmHrdiRzZT43dQ391RmASMPuYLYLt6s5LJE1yQszUDXusKDLjVW6uxqDAGQjjME1",
  "key47": "6iMYdDTj7S8KSupvKs5PmnX1ADxBYyBcoayp6qg7fRuFU7auwUzkiqDVMfxHzpe5jKtzNXLnygJUN1J6HxwaGh4",
  "key48": "42GzZFosvQZQu3o8sCb5cB6m9yrKBsjMQjEAFEXXbNDAHWjjw2spwwXP6YNepWLynzxVdnAVwUv4o4GYyYzFA7n9",
  "key49": "39xcRat8SRujCcG4gcGWXk9qqM7RQdDJHN6JvGhCB4vhbnzmx9VMjLTABNqBYhAANawAvLwPbzoL3rk5n1C3UVCz"
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
