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
    "5jDqLzq11qrVGNmmC7GZS8dQYyN7q56qHDbZ94GxgaMzg4VPm8msku8bB39JPkiajdVBELBBVCb94ESdweEpNA6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MwazXzgV67HdKr8vmRtpFaDZCzD5bxk3Tax8Ks8dawV4NyVU2Nd2Mgh6gspvrDPdxjQazTuw9BsxbB7cxvhHVJJ",
  "key1": "3WUFRVmJevbuoTNmCdNLpamkPWC6T4xYJvFUYXic9uJrCkoovJSDYvHHYaPSw9SwufRRLRH8kyxJhoHPBgxbR9fs",
  "key2": "2oBboFPVEhfkQTffHt6aPqbdMXxaLs8YtsK6oRBAtFuGM6C8JY7jgo4Lwh8GtNNseRvtw6B5kXrz1ALUrLzyBBUC",
  "key3": "42H4kto4T8jmjjM9KTi3sVT7KQ6rKdtvh6nKVA1ChtdTFoDtL4Nr8KsexzvM66J3c1dVDUhtAAEcLG4ExJyoBUFB",
  "key4": "2jpLmKCGUDj6BJBMwWFzBeje6u64piX1Uc3vXQJsZ9kGo8TxBmv1zSujt7XXWjqBichFrLDncJ5vukBg3nE8BqzJ",
  "key5": "5nFWiY5gcRkqZiap1ojFo6j6sUdUxCCW4V7Y4vBANRZncvspM9HeioFriwiLxaQovJPqqS2BvsuaqfFnVZHTLkbf",
  "key6": "3gw4SEhcw5ns49o2M4PcR49hkHoHur4ZwzcUTNoziudt4zEm4htn4SsfrUHkA9d7m7y39b9pjSeMnWxTL1MgwxKW",
  "key7": "44Ps6NBnmi6eQXWtZSHsfkSC2xymB6NSL5fwjNjGGRhETdPfAtvXd2iC6dzT8YZDuNhiDfJysc6xr55dw8BJWoGa",
  "key8": "3n3LdznKA7fT5UBUst5vuVy9ZtusZkEEQpd5i9PqWtpUcpjhnRkzfirZCx9fczXvp6e3xqWxE6Xt2Kns1BTsEpjZ",
  "key9": "5uxhoYW81VaTvqncGesfFVvoVcWLTmAo2scVmMz6kDkiX6XTHwr893GUKTNjZDnYDVx6wK21tKUs5wRjCUqTcewV",
  "key10": "5hnZ9QUzvLzfzkk2PBMhFSEoAxkMmSWb8rJHf9K72huVax6NngKB9mUro2jjGgQK6hvZXk4JLRDF9DMH1wKwRyDY",
  "key11": "5mtkhYrRJPnmC46UKepRyzcrAE7g2HqPxNSE6Zg3mUv5tfXvpDn2CUHD2peLuzeYsgi6yx182KUYHHWnzd7Adp42",
  "key12": "3SNZiXTbCD4Hr6sLsFWmSypgPHgPE5Nc6P5uQjLZeTyKatzp1bkUHU7nyTZTXr6bgsj47P5Dt96Y1TM1p2hLSogV",
  "key13": "GgJmskksZ9iPzj9Yfvz2NpcPA9ctQDERn8aJpXz5eW4dPbfY27SgTjYyyvwGqiLZH3sQi2Si6kwc1iHf3ZRKhbA",
  "key14": "4YdMAcXFMi7hWzWj8osXGc8ya2s9Tp2ZWXRsRqkYambARngPDc1FdHACB2onoeayzyz5fvdA948V9dXentESWFmH",
  "key15": "35m884wQLhuxAHs14dirmBrbWKoAJ1jqt5ghN4erqQDjVSo6i3dSA6AzinrX2xpESzP2HgzocXvw1vtZ8yv2Ls2t",
  "key16": "YugmjRuRhfYs5KVVbiwdNWeHwd2TAGFuG2SQ59Pzp8NqsXnvZgjA5tnr73h18QoJEe4V6wPaUThJLWqERUgfYQo",
  "key17": "3hALfpVXen3zfpGYaZzEpihN5Jp3qFVKANz5LwZihNgRb3hKHWQvUkR2GKwgcUBc7HomZkQ2FSj9xNpP9sNgaFMc",
  "key18": "38DVYy74uVcUrycAdQnFSH41fzkMce459oLNeZTormYi19KY9vFLTTBhiXvbBP5GiHC7zyejftgLQyZUoMiJieUT",
  "key19": "5gz2hZSaCyEn2i4pp2cGJxHXSrTApeZkohZKULMnbYxkQQWadFJVHMqQRGE3QAMxg9YenG4L8RYWgC4bqj3SUKx5",
  "key20": "HXekUgjHcVBf7gScuBRH8U9FEzVXUPGB1USLfbEnV65a3fZLBF99kRF7nEattWMVe6Zbeph9Siv4yr8bgL7a4Ai",
  "key21": "4wGALzhWLaNqLUB4ViznE3TT35zKF7L1zCuiZUC3tMHABoc5fbQbG99ou34YwVb8v4gjWSLGGMbFrYjdidUXNdFc",
  "key22": "5A9k3gocyBFRsS8oFrLdfEZ6ZTer52M3pnhGNoU1wgvk72yxYzf2GE2rQM6TyHxsXDbF872kZikDphPZPXd2a4kp",
  "key23": "3RprHFUd9vwsRSxVRz6CeJTFjD3Hj5T9gQNjVUnJfMPGQdnPgNHfteYidt7DbffTY8LX56rYbxnJrmt8Nd72dWWa",
  "key24": "rq3wVpke8feQsEJbihGCPKsKzFhhV4JHwtEZJaZbN8GzLCx5s4DxrFkfwV6xV6NhUBsKwtmmbuqMBRDxpF17haK",
  "key25": "55hCDx8KF55esQTS692xYAyfD1Zq1rrsN4DfjV6EhM89Wy8kRtiyJuYriDE2DoBnAjJsNQaJcao2P6gM2JtWi72v",
  "key26": "5Zx2mC3HV6H5Lci3DMgfQoUVFCWQUa1MxHnEtKfBfjJuCnKcofYzLnfMXFmznJkyjX52bE48RADKw47xPrBR15rH",
  "key27": "5UtVbENJ5GoP4Cab9K8BKXzA43ckxLNcoiqRkfhS8PeeZRuKKBSJJ7PBfC66gF3M2kJmvCZef2nayy49ohGWGkqr",
  "key28": "3wE8ogiRK4w1QP7Fu977U8ts1Z3x82YSBpALsu6ZmGjobm3bdQjMWFHqXqhaUmzKKg8F1dXms3FuwT9uKsU4tdfY",
  "key29": "5zhyhnykPSr3dRnf6CjNH7igL6ipXyjRdkqMtD4SQ4cGNk1VmfLZ7UZhWUWhPKkueUMXYsHAkvZKb3FRyxfxGtMa",
  "key30": "49TQaDcQioamyJ19WYC59PSZbRKoUgPMnEtZv9FPETDEHbGodU4C8LceyTUGnsC7WhtxztFbF19cGeXFDLaX7TNt",
  "key31": "2jAoGKTzBMWg5zp25D4iTNFwqLYFYpmkdP1TMTjeSAgs4kuGBmyp7x4H2EsJKCNjeiHGoKvWzvAffKrfxgNwFeTH",
  "key32": "2GK2NeFRX9NjuLcwvXJJirJaUHpizar8zk5FQFHWCzh2JGZ87zK5mvpmRn8MjRXHsRXdcfxVrxufBvS1nELWDCUx",
  "key33": "zMtnwcEHG7SJBEnv9WdGzW3tWnNY7vPeKHivcL3vWF3hwj4kofM74ZyXrRJXZVNntPohjCEMJWDPjwgqV6b5G5N",
  "key34": "3AjE64sdUD4XRXvgMx9P45fSndLjpuUdH8dB8qxsiLvseTrShqeaKbHM6sPNWmVGAneEA18dUy8fhxbFFrjE7yzw",
  "key35": "3SLETXeqVffC6GhPybDqSrqHsbEmGcCQnJgP5uE81YJSAcnSLbs7B1fZ5YzyjxEQ5NAgKaMXGvYvKWckHXwXsBrD",
  "key36": "R2Sj4D1sck3iqt43m4cNnFNRkANZTNDysMtPUHdab93MtYB4mxZPDPRf6uNJJksG3xtdczDRpEQKALjRu9jLQX1",
  "key37": "3EbK3ob8TiVPuo9saCYRhaagFLbboWPnGyHJ51QpaF3xvTCDsVhrHYgXZTY6QswSP7UNEwHbYB9Lf1dUjY4dcBsj",
  "key38": "3RqmB47WJkrwi6MpPZyiCnT8YJMRXGZr4sini2MUXVFTBnqohyXM6tMm5icMEdpx4fLPKfRCQMKuXt9Cug13Nabx",
  "key39": "5bF1JACHDbadncTYbBCPqSJvW4SaBE6xUxTwLAfE8X93N8Jx2BSUEZpnNgAjEXcTwvsLjZQKZdsotwASbkeRkVUD",
  "key40": "4AMhtYte2om7ZdEwraMadwmRJMxXvUUbzhx77Q3M4jqJpri6NW1kxxgQVLy2EVEZG8tjzknqLM2kccaHKTWDgF2B",
  "key41": "2CZY6WgE4iR5CBntxscJAS6daWx96ZQyr43Ja4r3J44ZXdU3tkTA1kg4BBskV7MMtqwj3P2y7PpoFsKW8hrpxKPH",
  "key42": "4DX3REfVfuVHwoNrZ3YHoDR7vbdzKDhGnsHfedcfkPbqa1UgmjH5RVjvXDbNBu56wKjJv8DaShpHTPXQ4fB6iTYw"
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
