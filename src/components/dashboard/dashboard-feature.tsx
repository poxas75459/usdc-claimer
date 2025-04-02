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
    "4tHanR1v4CKYdwvrAhqAWXXkNqTYCFZKJdqvpw2UVd9iYXVFP4K8afB5dRbHjN4GxXpv5Y1H26MqChnK1mnG5M79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUyZwimTfx8RibXrHKf9sJA1q5sFjcXF4Vj2aZCA5UNij7hxD39S9qjCjVpCd3GbTRwH7xVC6eZrWS5Ho7vrr1r",
  "key1": "PS75AbGmVNi3SUXGQznJ2iWXgeag44ezxsJJBTYHLDv7UeSnBSNTsqzby5bFga5C3HogKbQD4L9AK5aKm8zEV5o",
  "key2": "5D4C7fPeUubfQWVvgtgZJyCY4YKdeyF2f6xbnVEuhEzF732mgw7Pp6QRiGXpk9bvHnwSiF2ibc7vwoSR6YkJweAo",
  "key3": "q6qNgnnoQ4dkAVgPo2J6vGtyuu7LTQqwvgaNeZMbd4e3S4ydWy2Ges1VwY7Pu3Wf32c3MY4i2Hhf9fHHJnnkHAK",
  "key4": "bPBxRMCGHgnQu9AuuqmTVF6HAzEbq18CfxyAeAFjuRfJjsbDytE72wBA84Uddu2y8WGtE53kYJQbZDtnDzzqHq9",
  "key5": "5f1nwGdfxFFg8RSJaS1oVEGNv3x9rCCj8Y9rVrsndac2HDqmcoAurrbacz7oQGiVCrb1HsHFp27EjWre6vYPXhfX",
  "key6": "4K4LH2dnHewo8GTvsh3cQHfweHTbUzfopEpCfymyyZ6SVnmPKKgNfDBPotLTcGqRNf2xCLhsfNuhWbnC976he97P",
  "key7": "Ey4rsPAYVLRDyAPP7SUdaRpmnQE1b5uwzwBep4yrbcvKRC2kMHw7Rd7S6a4r88caZAoejqxA6xt2za9AWCPJesJ",
  "key8": "29caHDawRqhQuabMo29rTz3pYdhqFkL8Cig8emW95eQEChvRpM8EcHe41Ub2JCuKnLbFV4BgnWBf2qqGZhqNfm5T",
  "key9": "4ZJfG5V4HFfTWLzUAMsT6G6LktB8kgga45UCdXFYzbJ4rzbnS3ourqgLf7pTkxMpc1AYjwExqpWeZJHsVLP5tpFn",
  "key10": "VWMQsfDT9gLdizJHFQmWUCHywC5NnF7eZoBJaverdHuuDh1sdgJBWsDJpV7BwAkvm7GB7dUQFnGEVnVLStMADV7",
  "key11": "ZC6uRfrEU63ZkRWUY1B3nKvDfAwXL8h7Wo68x9BQvrrbd5yPXx1z31vC5tSZwvtufkHjSi6ZSCrM6neacSeBMtH",
  "key12": "nqVGrjSuLvYQZocq7G8HSSaDSuDyT5PYZTWTLXyJLKJ651Payu8sohNJcBFTm33a6DsP5kotKTpG2omRrTmw753",
  "key13": "2AMtvKMXgcfm3CTnUY6WTN3RrWx7KWAxGfakTDNLEcjjpZcWcmAPEY82z796XqVjcufeCokV6QZgUgi7sJ7KTTaG",
  "key14": "2Fir1DTPeBVWHkVUvmK8azWkiR1b42MW4vqDdPwyQvV4qajM8xMcECK85nKpnma5Rwz7UjvoHQ87nKwo9tNFaHvc",
  "key15": "4BSEaFPYFvSQujosTjFRjhtEdYHXCDhd8z8YWmvkkky44FeSqm7TJxgydhsGUmSi5g6xDGTmLWm1Pd8bu44gzDBM",
  "key16": "3ztpoB1JY6k1BNQcxRGYygC8Y8td8Qye9PwzSzbZydeiQ53hiENKqDKbdmQTkELqEJFMHXeoestGVFGARB6vTcPh",
  "key17": "3RyeDNyXXbuDgaT7B3rwqdh5zztCntRHi5PV1qKF88UMvKkwTgssiJq7bXHvAEfLAF6gykDWQe246C2c8C6EsTJM",
  "key18": "3GVuLzPk3WZMDskVjSUzXy52HyCDxvm7YrtAMDqvBbq2dnEDtHiWPY8BWbKX13fjrBddT7sWRkDYmn3g41CWqRvN",
  "key19": "ZKpGj1JLoVGkiT7J6RwhnYe8jebSdpMzNyWrQCC3P6uVPuSUm9mFzi9kW91f3fdMtnP96twx2N3NVzffgZdqt3Q",
  "key20": "5YSQgtLPdxXH9dNyZJYfjKXcksDuZqxXv9kyuGdZRcS4YhtG9BB3C9cmVQX5ZdwHXwokais3VZwCZXv6P1Nun7WG",
  "key21": "WcGQ46oU378ZiRmde6Sp5D5pYddsjMqoV2663gDhMo1ZVxjawjS1bgaymesFGAhdGP8hVkUVQUc1DNCuuUbebhZ",
  "key22": "5pqe1nhJASEmAmGsCgKifWAAXK7CHrpuiyWLFfvRAQyCePtnbYwR8WEFTPtH3W8cVy2dLsnn4Dh4ygq1XpXScP7n",
  "key23": "2EiESQanAhPhg5Nm519FaVWHqEb7GATRXRVWzZAWwuweVc37gS8DeGeXk8yJ7qZgR98SRz8ytagppJxEuWAbx2UR",
  "key24": "3AyEuLwwrY6XfxENbRdivAjP3d7uPEzjZqX1D1ZTWNKGqNPJpoGtmeoiSBHtZdJwbtRxYG34fjF8XSQhNbfMiQYQ",
  "key25": "2h56CBwXeCoupAUSf28AGaF6pX3vzWNjBhAgxFgNLM1kF1WdCJuwQjVUHYRWBiL6yddFn75vDwEjnDsKYQXyqbo6",
  "key26": "3ZPthfxGNhBX6pjh3iaPRmCABErdHYSXkYvSiv9qcVzMWmDnY74ENVSz1kgSXzcBiSE3AN7tkuedjLQQscmUMKTw",
  "key27": "DYmQCr2VNDKpPr4tgmAzBLKMNjGx79rpU5c7sHhZvG1WGPa2xn9XMYceDvg4atnyEVFrkP9HGjRNtuLBzS81Bjk",
  "key28": "2VC3fGcyGeUyttNfriaF1RPMy7JMKtMVRoyB475EbprvhrBV3QrVpFrHu2wTYXzuzbLBtthnmxNaEbf1JhDJgC2e",
  "key29": "JznC585Xc98pESo2Vitxkgpe2UW2arcbAXz2BESqKXRgKPNaorAVHK5bZfRwiDoYoJ2XngZySMupbtHRuQM21Pi",
  "key30": "3ujVApyP1whX9VCmqBcPa1FHWug2XwyaEtu37wN8QHPmmw4FYCbv2gwwBqJRtNo9jq5BnspuFNXFjVAudK22cuF8",
  "key31": "FrXAhiqfC7j32ot8HsPEz7FdAbLrqLKWt9pwYBCM9hn5NKKU5i55CfBJFNLvUraLLLirVyRxVwnn6h1mhHtPDRb",
  "key32": "i6S5K3Z5bXqrRFBZQY6Q54pEdxvQhgywzP4p4bX7p6FRwPkDtyk2VGuAxebQ2U5kbJPnfjEwjxYF84gsSGrXdho",
  "key33": "4sHSZgMvCxGuDhgPwUnE8pS4snpWpgMzwLnm6VpTEDAjVKRtnjMvBxPQt6WNFgs9kMYCjaTyc71MjjvRXPVr3tK3",
  "key34": "ZyS49gH5z6VW5LBUrzAP8ZfsG4rmUYy1wDppinLigfGdZJKHLQYgxjy5HtE2DmAgioqFXeeS9tqYJx4fw2z9twM",
  "key35": "22b5BuWyAzRtLsKZMiQ6B7iegrP2CBFXJeirfmLSSJEfKhSQMMvwDEFt8xhwAjo9Avo34vtYFYCtjNo7L2AK4gRn",
  "key36": "DsT5swPLeUR2Nw12tseQqtsgGWMvjCMGn3YFNEo4xJHQb56yNec6yMjNv5KzgcK6rRWUrA61VAycySfNVbYNr7a",
  "key37": "vJgvaVfJt145cdCJYunhaYxJh6PkhXmc25vbFiDWsuZ3Wx8bqfkyGgPUxWK8yx2HUVrXQuAfir6tcLMj8FZdGXt",
  "key38": "36MmseeyZng2Ly13RzsKki91pvc1qzgtamX8umM2WKV6zy8oJkKvp3fASRor4u5Bjd19pEHTPEgGGQxUFM9R8YxN",
  "key39": "2WDjG1t4nC4qBQRVyRgzkAGSE9eamxAcZtRx7VJbsujrigV9AVp5oARKwDtmgHmVD6VzGFShfnTup1tfMEggz7wb",
  "key40": "m28seMPjeyoorgmBDkjYG7Q1brSN4REN7aGBs7nw2UmeiEySKHCAhHGSURokRbRTzn9o1GvdaWMc5XHWerS1CDQ",
  "key41": "j3ntL7rfCiStrG5iak2U1eEGygoSP3fV3TfwPYco8FXvGPCrJv5tTmViWotNZSsF7414twHD2BMHx5pH84fG5a1",
  "key42": "47jhZjrBRATAosb92EUViuaEiFnixi4URkWwcqeiBqRav1pL9Ny1Sh4j9eekjTLHEZSAg7gQXqLhMaXGuBahDxDQ",
  "key43": "DefmQXviCZwxNdob9ZGoD6gG1nAgpVRp64RPkgtnGPNFERjtpKBB2ZFkpbo2Krx7rFVdLxmrndkhvEcJ5SDXxxc",
  "key44": "2KVMDm1M5sxBK4KABPkDWYuHVmLZGEK7PVGXWzreSc5d1W9kHKFUrTLnAn36ZPSxdF2Bvh6tJEru3Fdwp1cu9vDU",
  "key45": "3v3FqzbPPAybytkbNYisGTSTgY5KyKC3J6egTmor5UsNhA3PvUDP9fANANad1NCgCS714A4rU3UwaoG9X9PVqNKR",
  "key46": "5F14HCtmhAVUAJRL2Y5mp1y2aNNKkypmQNJFa6VrT2SH5KfLtpCaBeNLBSXD21CjU3NBHd5VjP7P2sWazeYJX33q"
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
