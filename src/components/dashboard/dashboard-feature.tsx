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
    "3DWnbV9Efzf6bHCwmfnFHaXGBWqPQtz5Xvpr6FFRupAqCUxgQJkRQWC6zb2f9Ax184sFnTb5aLPX6CYxXKHRL2EA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usLnrgGVy1SwBSvHJrhJxnkViH9eVfCNh9cWvjBtgzGFH9FmrN4iS7qm9AH1iNNiEV3sgUioqaJLotz2BttF9ZX",
  "key1": "5v2xezEAFuMqenzMAgzob5BZhpd77Tsz9CvvVAgPnyHHdGNcKgsRpZqNSnU5EkYYn3WDYTVxwTHLtjKjJQbAWbPV",
  "key2": "Yhi1TScc9jfXfgMrPYt3tnRAHqmtq6aqrpTxTBoG6Mxx1eXvYX42D3sMYsxXpfynBXm33ky8k2tYxtjbQ5kZ1YM",
  "key3": "ykCEQYUF1pLt36MVJo3ceCqujJ2P7Jgmh2ebvAMVY15tzSa5mNDzySsxkhW6bcD7wb6Lr6hPF1m8otZsFifRCFe",
  "key4": "AtbVZwkb2j8gthm23FBBEEXxaAxx3exWkEeKrPf8Kf3Cz4J9Uke6oX8s6rMB9vU2CKDaPX9HzC6PBmQtV7pMrY4",
  "key5": "4yA8jn3yjo31EksNesmYZDjWxsJdXS1QqcM443hd2PKvaEMKLnNxNXeiCjNqhQvQpRbkF8sPLpGgZRtFnZp1ZZhm",
  "key6": "2wkntYgM1cY8dh6XsE47Jcpv6V8g2mtjVwb9zpAw4XtNXgfddwLSnrszSHW6L6BARZEGhFG5STJxVsrgv6QjFasT",
  "key7": "4Xtc9TEvdWSqevocpx1d7P9jzDXSa1Z6giW9jQ5nhLPUyE7adPXoTYNwkxeyG78ZxuAN1RwQuNKPUnGWWMJ4AwjR",
  "key8": "31XioFBxFBedqGCFAoAewSPGELKPhoQr8Pqjfby5cLwJMk2RiGNgYGrgBZ7ewpkahaptuDJoYEmjnoXxhLGth44a",
  "key9": "65DfodN7B9bKxxoiNWuWSSTWN66WQdjrXrfwsx2FBjWhJUp48UzrCY8ymSdQ4eqeeBvjhf8k6Yex1PH5X3zCedtv",
  "key10": "52AAnU1QupMPGo2HDP2YZ5UrWkztJGZQTeRDpsLtDA8VAgNW5u8pVf4Zfv7ucrYqzYeHxkYu9kUkNmRMoj7uPaLT",
  "key11": "4whPxpkQ6uEXzMbxn1jNwpAR56mWcQK7XKt7EFw2JsxJ9525NTnCNVYX9PCTdqTafNNXYmGM8nNruXKPujvEvfih",
  "key12": "4hHYGtNKozoxtVqJsCimTBwS8c1s9XKaHMfdxvvpAs6D2rR1KJqxnWfpYkzoKkS6KpKdCvtT1VjFbEtwgKu9S3Sv",
  "key13": "3j3WzAj8FhK4ARsFEej64Ey9nKWk3AouQqx4cggRYxNmatHTWJV9ZZVTkRGR7NUriqmrixjNxDsCgDgAXSfWCsEd",
  "key14": "4FkE3XEf7Uv7rsR7nMTzCFWwLbMb5J3BbDPPD9JnGJuZEv6DTzJryeArxTbFKMqAzKNP5q8E1oQxgdP31gbqXsXY",
  "key15": "39J3A38tvddUATimuzyi93BKNPwePZj84TPJY8ejBUqJVFEZJVRVCwkZoHXAUdqNnrH6NH7kcHz6H5ATnaKiQdvD",
  "key16": "3dQUW5MvF7h9FNHUd9TYU2x1GL3USxbrbkj2GpSyneLu29qvjCMFrPrU3PtfrYFiswNBSrWKHowEnQyHfYaWYShx",
  "key17": "272hyoTmsCkcU1jhyoWadRSuYKn7M5j6CduGpPYV6yrTyxLxThWUgWJfQRaKmMfpWsxGAobQcZ2zj7HaHuFYWWn3",
  "key18": "Y3FV25GRpeUDCVSajkbvckiXvtNdW3a43sSEE1xQyS5EG68Qdi5qg7zBp921q3qFQZ6zNqzszPM35BhPnyVEJ3W",
  "key19": "3Hs6yGZyjzmhYLcK7p5HfZSZrNpvFHo7tjWRw6Y8ePm27Q4cMPdcgsCqLQYKwbXjskjqqbXFbTfoRv8TZDfU5WV9",
  "key20": "2J8BepwaBiu4sEw8TzyPocFyuoZq7iUjmAfg6dnbUNdeAjv9nDwnYa2CQWN92ucTwhZtR7x7ZxCAq9xxD5PFJ1Jr",
  "key21": "5dibt91L2ZrGr6GEvQUgUZRL27gcg5rA9Cw5rJJnQ5ckTSatxfdwEVeTmmQak2qJ9hAu2VsoScYUnfR3qc1Jkw5z",
  "key22": "4dDoPDxKf7rMCorrySU421NWxZTymUeEd7S36pYDCNsC6TbULsXzeNLSK8rHJZb6G5MQ2Umkg3mhmpVZgsxCJA6V",
  "key23": "3F41SKo8TufFjngf9RezAkUm9agyFteLg9jkp6HpQ23BncktyYFSSZoR4duykzTuLN23kVEbvLXJe23V1nuRPLN7",
  "key24": "5oWdCCx2atx9WoD8vfbckv49J2eNuAYmPqvKKEHLDJPjZfdpkpUk9DU4C7pADboDNvvgiU71tvfWTDubwz42njvj",
  "key25": "3BpibeWbXsa24cJAVBh66MHgYqk9mGPNZnJCdEYUNNPZoPVi9NEKXdzu1UHwA2MkJcFT4RtnA8gVFpzPJjpEeQo4",
  "key26": "13ZNfRZzkJpdezkDF3WgbKscvzpTFud3pGVXpiziCg8AeLbtfxXZY4JWML8grqyjViqUPbiE4yiy8QLjjd3kh9R",
  "key27": "2kzvsHXYht2AjYDfTHxETYkB4zSZXYDYCUGDMFvXC52Js4vzkHfENRsoZAVrR1Mu8Szi51ZXq7z5PAVvJJezt7gk",
  "key28": "3k6H5Uhq4zDKXWyMMqPuRMid2scHvj4XoDqFu2tnvBJk97M3suNPgA8xwDLeYnU2BJTSpKXfS4qLD5Dy84S7Bc6K",
  "key29": "2fDpstpuyMhK1AHR83ddAwh9ekGJfEw6NvSxh8FJHe9UbR4G7vYQZAaPJ7NFse6XM9AtuKtLafJk5biLiki7AtW7",
  "key30": "4tEofDYitDcePeUu3ueMddSy9xtZXQjAqawBxGzyBRJYr8QAV7pLf6JVM1igyxxzkfpsTezbjfh1opGhb1kqe663",
  "key31": "4ic8wWdvSqp9yEcVndB4j5CYJvDrxLTQr7HCjLkgREZD6GfGw7ydCvG96HWXKyiiZxDpkGuUyxdEFEkEby2fRZGA",
  "key32": "RSiNURFk2cPFUpheP9xx4NNm9KEiEuzrdUnrMxDv4paQjoHrcyDxKR9kT9MMzvD8u6cEqPwq74kyHmiQUxQD2qy",
  "key33": "2GMfPDxU3N89iU62WSyzmfMX7BjT4opLGHupJjtynkQJoGeA8PY7wh9pEsYxSFkPfXfq7FxprUcCYgDqXfphZy2Y",
  "key34": "4KsZeb7b5Jk4SF5n1wtXbH27XAhdBT3c6w68eGMvh1H6mhh3z11ptANzEMXJjtYfxDm5eFfHodhF767qUP84WJtw",
  "key35": "nvbxeMU3pUkfrpbxddUS3ZMgftPU4Hvkw67RwFd5NDSNykgbnmrDutv7WAVd9kEPEtHTokGffzafhknNqxwQrm4",
  "key36": "wboJXp7QYYbLbQzq8pQqCexnWGKHm5F2sqg7Zotks1my6tTxyNaBsouLPbCY4kwZbxJsy3JzUAVkfLwPxYt6FSv",
  "key37": "r55Xe5Vr8QZ1fpYGBm3PeQSdwtqCNd2yoT7hUMT4Mye7yYLDXh3dRMXAtZEydE9NYX9H1sCyRMHeHMfB1jurxjM"
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
