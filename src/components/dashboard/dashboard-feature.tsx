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
    "zohzKHjjGM2mrZMB1jQHp7hyJTYUNsTfcZTMFMt7chXWhNBL5fxfY2DkRoLkTWSb2xTQYyQ8ahBrLbAGEmwtv6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAd8Y4BszY4bcXR9ASCS4R45JNvxiHDb2Y6JKiEBNnU3rhnLnLS5GiBG6ZaEi9VGJB2nUChNzpcTNVvGdpbDZxS",
  "key1": "4iR36VzKsdhVS2WM9gwUUpPWrYgRa9qpYnDD8RsNFmS3SLUY7uvKe6LSEuHRPyxRh85DCAKURgvWiYGMSfg47s3n",
  "key2": "UPKLQUyLEJqFpEbnbBUStYEoVc2TnwpezWBxfzUZMxErShvcKDAnZhfdstqCWwhLwfF3hXJwtv3oGy7vMMU23Mm",
  "key3": "5CAveJXhCPon6aPTGb3s5fbmL3DrW4SNr72CDN47hWzJu2K2EUdPoqJHJzuF3sJ9zPE7DP7WaFCfPvWYwLZBX164",
  "key4": "Res3cD1VaPVNxCuDjmkZjtqEGUeUEWq6NV5cxvwGZrDaYw6XD7qLGvx1a3nRqnBFwUJeb4nDGyxHFB4XvmGp2oV",
  "key5": "2crzx3wjGWaxzdAWFM8jCgY3iUG3N8CN15MYT2KGPJuoD7MqwawVW78dFGg8HNVEXq7NGSyCTdiZHTB8EPWTHHNm",
  "key6": "2aRbq1uEYM6QK1dBsq4o6ydbozkur3uRMfaVia8MPvCB2KU6oq7A1TsunN8M55Zq8JJQbdXHcnE6s6rh1qpLn31c",
  "key7": "4mA4w9aGwkByVumczTxP5QwfmTzjQy3yy17nDAVVYVmE4VLqsQo6abahFxdZQQPwSTcZu9XDYcbfpSMfh7nPSvTb",
  "key8": "FM9qgdJEfC6dKCKpHJq3uL9hGk3NRx12nQemEJRZRBSEEiBvKQBzok4z7Cyp7SNXpL6g7Lo9d6HRmRM6Ntk1LJZ",
  "key9": "5TejuS5HE4mNG9McvD8RUn2FkwEz2WksYNtEY1YJB5B7hmTqC97699SKpUbpA1AtnrTT7JMffKSYZHT22xRhGdNV",
  "key10": "3E5FMe6EEnAfAANyyhd7XzV2zYfC8Fcsk178CxfnbbqDEpqa8VesZtGS2At5wEVJxZ2c9x46osHvxbBv2w8SAsGk",
  "key11": "4jVUhptjick1eTkj2zSovMKF39vwnfmfeBozzvdnDg5rJEZwrwy6Sbif7UuYggTuzgyEqbAQ3YHmrYiuvUEc3uEQ",
  "key12": "5TnfiaWBb3w25sooAKjkW83FDsECsVd4Cxi77Qfa4NwFkpJWquWVmcvf9jsHPPZickBXNVo7qmxzgkw7c6r5fvti",
  "key13": "3s7NapGKS6PwvohYyts5G5qGf1BS8qXNyU6tp14oKfpKP5zxJ1ySjY8cvfm4VhZL6bjUJCEMLg6tCich4trwfM3b",
  "key14": "3frsP1UXtyfXUWo2UiTrrwzL3JM5akC7SjJYpaakSW6AJS3v1oXXd6xLPyJZgesSpygqjvYRcP2ehgiDnQoTwxEg",
  "key15": "3dLjDm6UMFWitDVmXBYipeofa4QtjT23CswXRHC6KEwa8K9UA9AoWsA8XSCeYmspVoPF8GgoisFXSfNRYia9vCXT",
  "key16": "5s8trsDvQmCe1nboo33EpUgCG3Pp82FcCKR1xzEskjsEf616ZVEWXeKL5XkcfSfv35rC746ikm1CGKRkWPSBe4R6",
  "key17": "32uGT6k2vfuvtM5LwrgxWN8PCge9FgUoVnbjAxz4ysEgYgeZ9g3U978JGWHFNnEvKfe4TiZu6XaHqx43Mvp7awaU",
  "key18": "5sJD9tckfxRofGSMBibbTv3aAT4tCtWf4Y6keDSBz1fM1hPSqLS8AVrfHHzocneg1ULhKAzG7ctBDPT6E9H2AeXt",
  "key19": "NLhHSCnfNMg7uyLnYCi8fdQuPNtkFMJ7bxkUhJhEKS2HribMBuzju3fVaddGpKN1TGFbS91AJmqce1CdXvtYA21",
  "key20": "4a5fcQQzMLZXAfPukfqnTAm2qdNy9kh1ABjQz2Fg6Ejg8DxKMsPyq4To42PqKkbMBvVmM11C55brzJxT2sdpSZ2d",
  "key21": "58yuXaDquGMGuv5yWoFbf9vDJZtBV71E957ihBsTbbtM8FniMZktTGMmWK6vSFb3GCQbJLj9X6ngVWrZYCdZcEnp",
  "key22": "3FfEj4QnNtytRbFziptNyM2fPiZwqsJ72kM1VFnzQwmWq1E7yNvFuEgW43LiuVcwrhTzH6CULukvhaFpXqXZAzED",
  "key23": "2RNyFAFLut6Ldhz4DDu1aMZ69FkgDMAPQtCLYT2oNp8CmCZcdtKAGLQC8srYM6FsmkKqbMKhBcY5KG1N29DQ6YjH",
  "key24": "5JxWru6Y8qVcpG34Vg3RT4oj5Q5gXyiTBCfSoLEmacSMfECV4pcxD3iXNnrtAipXYqZmkCBiQjhXSE5xh2VjeLSo",
  "key25": "5APbuLfHnR8UdfBMTpwZVEjRdAomZTzm1diuMudCRG8YaDJ6tGkYXJ8sBupdaEzKWji5gMbtMSAFMLxS2sk6Wthk",
  "key26": "4TceKEP6LgFo4ej994veV7FwNMrUMz2pPuUH2gBYPUpGosMnaFyEjqiAyhdwWz3fuPmeAgxdVqFXwvxgKUjzJtaL",
  "key27": "4tVVjGSE1VE8waT7LxZdsXrARojTQMoCKqDwQWBSmM9ivcwpAPdvwnyJUc8hVHss5qnQkJQRrKzd4sXVwjknF1aT",
  "key28": "51aV4NC5XWRagiU4A7C4Apd1hdGVis7jqWkmBaFjDSvqJsrtincAyjUTtKeYRyqUrC565aTCvFvhZStgCDzjQYcR",
  "key29": "61TNPu6pFmGXyzFRTGsS156uYAQDLYujPmRdHkLYN4Ytv6SLQMS7X4A7JpBMPnHtFhpUwnvUFK1a6nQ6M9NBRofm",
  "key30": "v4vVpF3d763PgpMV2HcFjZdcrpn4ovRHAKckP9TniMQpctzhWoDyeiURJY9PhRBuqRSaoKgGrpXXqHFbuHUVmCZ",
  "key31": "2WqU9woBGV4XZbZVJ3mc8L257UrJqjzrvj6xsdxPyNVY7egSzVwGmVcEqYEnnmbqMFG7uaqxiwWownfmubWqnEyE",
  "key32": "4ks8wdQLR9ZejcyD1oP6XdC5TzbQj5GcoeyBLTM4cXDLw8JDx7hTVJdgLpfiHi19AiVZ5WWfAZCgVQNSUnj7aaPT",
  "key33": "4KyC9YATZEFmsPwT9E4P5FrgwD3FBuFzHDYkaMfyrTkYLMdJSMfXVaUYcMwNamzrfezp2wNCNxgNYvDwQ62Kx2nk",
  "key34": "411AnYNZvxFsgAAaZeQcZW3Eek22PPbMNQZYEURAzQ2cHuseCz5HbHuT4VoeTC2axZEGEq57CNa1mwPzA1FHJNX9",
  "key35": "CyCZCkb2LGmh966qqpUvKzaypS8vBMmPcUXY8ky68VCHqpkx443Pnp8igWAGWn4AwNk2PvNXmSBdpjwvtcH8Pf8",
  "key36": "4kAsjxN7ZwvFZXEtS14CQZfBVR9KZdHehRYR2dBE2XZgkxZ8T9xDqnM3CUsg3NRCxzyLGy3BTmeuTDKG1pJJwpah",
  "key37": "5HeN8TJkcz51Fjzz5tCteejE9b37aNzMy1urZ5zh9PxNvLfaPfXCZr7ioRtTBLcpqD1LP7ZuNfawfijp6gWkbgb8",
  "key38": "3ZJNZnZXYijvTFfNUQoQu72YmanPQ4tTZFKxNbFAf1xrGw6mBKNaCRgNKKd6ZBArrCcwt91QHqPAg4bkPSbLZYKw",
  "key39": "2rDDP5oGpjnCERpC1kK8r5CiW7gm8CLWdX9AtoMBnTfNuM3K3tMvMiTS4SnktqKeMnPJMrtLfq8da2m4RhjngsAk",
  "key40": "31Ynm3zNu8Hn9rfUUZCbAbw3eMp6uwZAKcXtFd1Vg26rnCBc8Lpud9KhbJUY5khQyvuRCs74mCZKsLWHCWJr3MeU",
  "key41": "4hTBzhK3zhFd8PjcuMy6zSbN8HfEAMHYR8ShsqGaBAySJNaWS7b7Cqn8Ze2dSrPwZ8dq7y1c1cYLMTyPDeBrqxyE",
  "key42": "5qMCjJ5YXQUjpdvhkbwxj7EVEfpWyg7KAgXwGVqSWoDLtaw5ZUPB5TedoSpk6F9h3sHwSA7khZ3G28mdRvjkndnC",
  "key43": "2jmp8s7QtAQe8zum4LUhGfsNMRBwFmMABn9AmTGk4KM3VPHpmp9J7tPiekjpwdA6EtN2ZMQQaDCEe2rifTFAsq1T",
  "key44": "67FS1KGjzDiuQhyiVV39Xji5Jo9fC9H46kP7BGofvXmBE9HqUqQtY8Cw8Q32TgzsKdUGJ5UmMbqQ8xPwWt87kxHz",
  "key45": "4LFMipoTCAobX6nxB51BcAEYcauu8tYGqw1WNr3KSMmk4vKSB1dHojtnfvF7i1k85381CC2SQvffNPTbLCbCCjNX"
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
