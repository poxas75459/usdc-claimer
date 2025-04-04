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
    "3yQmPZRAzB3pi3LMjjN4YoSEZisoDBdHaC1ioo12ripq1TrRPGLWVKX9GpXsDY2HJExJXDqGTfovZU2nMD6rMrts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23mZt1RHjRzmr2Zw3sZgLb7b1xPe9UXwdDwYTukcANMwTo1LgMnr6MAptccBLkjXvvuCDF5eaS7u4a8Bv1Kapfpo",
  "key1": "fD6p4RBraSWzauGxKxWbtT9fQB4maYMikZdsqDc85LJXSL3gryBG5UiJqKgJjWCtaGDgW9eGM5vut5veA2jR6b7",
  "key2": "bESifsLUXtkEhhfGQLh6AaXowzHCPcUsrCyK2WWuzy9CZDXY9r5GC3goT8egT7dAyFGKUBwiusCyqePLqqPeHVN",
  "key3": "5AvbZwFM6w4fJyNdaGZYwoJ3yio5cVQ77AYFzA8KJkrvmtWs6hBZyPMapzgghDQcPMgN7o3FDjY8SSBAaV2ZTKZw",
  "key4": "be9s1zdHEeAamZbnyD1LMBVSCFyuMFNcNx3ZWLn2cpjSfnQNvABMNs5tAuiSmuNZtMbsrkKNy6AjyjHMUo5p1en",
  "key5": "GrFcB6VAsUC5PJtKdk1jjaWhjHXSdTkgSHbenwDWjN9E88Nwa4tGA6hsXwHpieErVfXkhZvBZTnP8P1w4VaXtxQ",
  "key6": "2JUpD72dYyfFtjHP6QaVwVfroMC9NvdfjEMVrozPWKh3rAobpFcWdxPbAu96f46ppwEXcFHyTxWtY8ueeeESJyVw",
  "key7": "3rgXZFiRcyakfzHYqPzXjy1m7Qk3tNT3GMAzBnMzbmbF5sxQg3QuJ2NUEogL7RKhSsZwRXACneCnm6dnTn4u8nrU",
  "key8": "3xHFm5T7sALFVfkurwUj48jA19fWykNmcrvK3sWKazzmUpRC3n6bquk81NW1SZ4miSGcQ3sUtXuVeyfC26EfiT4P",
  "key9": "4koMwGs81dgHH2ZpUFeY94ivLpfkDyseUX2jPzbHdieVXUXuYMtVvJKgvW8NfDfh4XHZk9ZiUn77TNoTpdndfREb",
  "key10": "BsN956gAcrJRMwRkRnAZPfkM4ds8mcmHgbfS4WLZUH9JBkktjB6WY4mH4PJBgkpSNtg59KJMb9jAXGvCK4RVnYN",
  "key11": "4cUNRdw4222r2RaRop4FXABTRWKUt5Cntc8UvmvgMH6x8UJ9fcnr4vetjCTbFvrrfn2Coyv8VyZgs4VDVTs1fePM",
  "key12": "5mxSrcirQknjQTryZdPDJ3hRVfggsbagVLN2sDawQvZXQrixXqXyU2pDNpJwp6JwXQgStc6uTDBFmunw8TMUhnoe",
  "key13": "45VHZ41Hii2fEXZ993LKsnvtBt5MJwMEUWdbfVV7ro2Z8cZmoTTh2wtxvCBQeHh5kX84HA2if7VFKS5XZkfJKnb8",
  "key14": "4JfBHSJtyTf3wZqek3ZHNc4vsuTi6maBVZYr1cBCg6Gz36mvDZQQuCphrm1zJrNFf54PPy8EKmMUR4rwVwzYNEV8",
  "key15": "2i6a9x5BxSm1LyfJoGqHfhRNcwaupfdd7wjQ1yQuDB6sreTDanzvK3KLSk9v4nYoJGMokBWxHWozuXg8SaLDEQrm",
  "key16": "4ThUD7R9L5mBPiEcHACRL9JWXuPdbEN61ALNQrhuj6uFtm2rFkb2LkttNAaZRpgSNgJfrSXPuZpaGkiGB67RGtQ3",
  "key17": "4ozfcjgzP7DGnR28zQ56LF18XgTFCaEn4e4L8LkdbFcWwbKAj45fqELRnDQPfRreKbi57AnWo5gT7JVzxZq46XGz",
  "key18": "3WH74VK8Yp9gThbZY8c44Ja4BtSagVpXs9Mqo2BpNyy5oaNydCrHBqFLJVufHCKrtyxjmAPchdGFXvspR1mbWuu3",
  "key19": "4v5Bvp4bUBL6E2RyqdKJCuG1m53c74DF7YUZTyEommw1yJSH3Yx6hX7bKWWu14Nj5F63S2PaM893Dm35hN3Fj3rT",
  "key20": "5k8A3eHREQ94N5qfzdhRXxesDCDT2XRQJSe2bteF384bhYoFHhLJFomTHHzFesvSUyPfX4pdeQv9v3XSgayF2uL2",
  "key21": "5ZLcxXPoeGP6yezRVHixCZGrpFsNwyfAFeEC6GVqarzbpNpLWJcu1SzaGmu7rKGKAxY5VUTFfVJYzvxydqqTWD81",
  "key22": "3PQdNYdPgPiur37fWSMa7jbjgazfkFtaZRfziV1NibkoCZywcFWFxH5aMh3YcUbbNAr6dBpkbzrkk6vMkR7woWa7",
  "key23": "4VF9KJ6gRRKQkwX5Xa6GZkgACz7k8UDEybX5SEHcCYvn5Ee4tc4m3ZFw8CVeZiHkNkDyHBsUPMSN8BrjxWFDRswf",
  "key24": "BLXPezuyki6DjME5QtWzDHddB1T5qLcmdbkHdAJ2S2qnYPd2yKXuY4UXYScRGdvK7Xo51GUVebGe3uv3cJtKFAb",
  "key25": "319Tzja9J3McV4PWP9L5GpQPWAx5DJR1Mb8WcH1UaDnL5Cju75pM8xKX4L7RjutEc1cDzN1cQ27a8dQqtq1U8mYu",
  "key26": "2ydZUisQtvYM1Bcy9DKo1LwfyvuoeWuKWfyxD52aABqDhFogtcVausrTPMwc4dp5ocuxB5isLwNLBqggD4C1p4dE",
  "key27": "37oYoFeSuhRnopC4DV8msSM91a81EqiMzV5qJ6P5RQqaXojZAuRzDsjRZnB9JF1JzX9BUFTg72oE6KnXPFKcg9YP",
  "key28": "4fv9JVYwPsastXh6X1A8UcoKa9rVBjppBT9QELcQ5RKFmHKcQbmmUAbgGs2Te9b3ZnUsHMigz4yFrZu2CK6en9xH",
  "key29": "6743PdEB2ApRCosfnqL1Jhr2iXTKZwkj13WWrZvKp9eYTryrrUZHHK2Gu4x6CBH1j76cVvReeiu5gYdehVxGirwS",
  "key30": "2UEVXk6jzwUBuZLoY3sk2JEuBTnBmgLk2Kh9pbrpA5XnPHpoXznFd7f8bt6Bj8B3yZrsemQME9GXDsqmKvxUjUts",
  "key31": "3AyXT2NzkF5vLWzdpduS8cnuyW5ojg8tgxkBtEU19KMfSwhndnnTAndr9WKy7kEeREZCuXb7Ntew3AeWwLeTdhbF",
  "key32": "2MyvzsF3MWg8QuVP8ukhVBuxTGj2zg9NYhEaDMizzKKQaE1ndhNwGSue42L3uFUovkLizyUoNHQ6WBST46RyYWvK",
  "key33": "3r12yKvW8PNyVs2FgtUS7w2Q4rT1JB2Dfm6Gqf6Hi7Y5FmBPhY4vagPTX2ZrFJLmQ1Nt445vp6N6ETKaAPFyEEtx",
  "key34": "4pH1JjHvdG7Eu47w29JF4mqrNeg1vMo7qyPi9ouaAyox48G9JjRCPtcfXJy51BUXPvukLZukzsM5MipEu9BHLjaS",
  "key35": "3u7YtNaePnspce8GWi2F7kiKECsLhKgtAoX7mtGTyckPB9R2d32eguozAo5jGMP3cWpLMLF955jnn1ga34mN7KHd",
  "key36": "37SqLY4Npmau225T5ZeE5r5J9vBpwUGXn4AKLB2Ee7nDdWwT8pwNhkFpRAtBWfnqx7WFiyCssZZsn31zHP1iSHrE",
  "key37": "WsagThjPcwf72CsFddX45mW9ZMWBYcwK8cx1Vg9KAaWtnzPafuNiVWp5aNbzQJF1AUEUfYZrv4dW9jmiJUKe1Rr",
  "key38": "3aHBgRyFRzpqV13Ho7TmFPTU1a5MGq4svnuzaPYDh2fqPBoh4FkZBn4FXn9Yn7oCVbPrtgxPr2nQKzaZtkaBn4Ej",
  "key39": "3B5eGtgMoHPPS6yR8wWPPVF16YaqXztQt6HqLVnS76ZLjKCRUa9qN6TSxXvQZroGgAAUdYTY564AsKkBqTyDQ71J",
  "key40": "2UMCTWGJTCvBzbZMNp7aPWj6Qex6GWLPUkwie9qTtcT6SRgC8NpESYck4XLFsdHRJqumkTveRBFr7WsceY1F7Aj5"
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
