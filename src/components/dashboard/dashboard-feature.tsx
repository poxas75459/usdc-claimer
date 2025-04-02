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
    "J4wzeCqkaTVFj5xzcV3uvNjdSz9LxLx15Jt5P5HinA5CiHAKEVSKU4g8UpoQAmkWXomyRBtdEehR2g5iWxp96XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaV7pX4pWkum2jfdpf6dCFCPauMeZ7AeHnkvhdXLYsiMR33j9r4rm1HLsc3R1EuAghdfhvvPjs5zvaTQ7vMUQmM",
  "key1": "3Em9qgPhiYh78U5RYcKAccEaQHnAax6CcjW7XgyMFxg8Tmwfstj1M9mcGfvPqt3PcNWDC6s7wNjvxcQZxew7ZCSg",
  "key2": "3D9zym3YfCNJhz8tppJUdiVKJzDyuAkyz1hBJzrkDTJSm747woLczQWvXEwEx8iut1PYkUzLYVRnduGGxx6Tacm4",
  "key3": "2YXbH4e1Qp4tEbqeYuFsBrVVp4Mn5n1oE2ycGKWFKMATaDssZHkDma5XdSG2FCSdhnBF8JTJbNPfH8wctqNr5xa2",
  "key4": "44Kcg9KdasZcJWBxbKCjsqCqZGKcDR2gpyNJZiLpV8PsR6wD53sgcZVBYJ8PJ2CzZvNnnE3i2pBrvJGb4SbxQsNk",
  "key5": "25Vq4vFc7anSFqnKpFr7hTqFM7XG8AshmvLQDjFjAThQDb6esUZK963hgoDVTW8XntiBGWR5wPq5YsLsGzbS9x5s",
  "key6": "5th9UavKNoXTqsE3rxUYFgDwkbyKDrbJYg6z9rhB5ek7jpx5Z9FdNADuKe6DJtM6JWAxoCuu6muMq833r1BciAoy",
  "key7": "wFERPHxDz7ySCuHigmC9SoY2TSMTaMJ2sa2EjqJdUNYHgssbeWid4r9D6mnU1DvxdtTpWjM2cvRyBnTRxqYaKr4",
  "key8": "Em15FS3bR5iptady9bb1bk5QuXZ6sPnpc7tVAkkXfJ7hkdQ5Qbdey2qqJUeEirPiWHwroMJUn1Tg7HbuaBoBh6F",
  "key9": "61aheNyNmQPs9AxBtBXiTZQuDLCS3TCf4xHxfGMwvGZtGyQNKc7foSyfpyZDvrbKd4jvZuXGs7d4Ha4FTfRaR7sW",
  "key10": "4hT92WFTvxcmyGQsn38wX8A1m88JVjK5dYbgaEd4FHWtQwvvxK8usRjcr3bvkJbprAgnJZwu7EFXEPQkXViYstGA",
  "key11": "3TAN5yMB47EGfXpv9VwBJLXZsYzfFqNhTGpN4GM4492SzG4wGfQawU3Syv9j4Lvath3GGQ5vzborS15qu4z66Usy",
  "key12": "5VekUfxnvdzM3ZBhhnhPQ7YdaRAUMUSpv44i9gv3mmcKMxU4uNpmnSTo6dSSH6QkhSNRRmGdhMV5BjhE1VDyC2Jm",
  "key13": "3sWeM8Y9GeXxKTucayqWxR3ZnuyMVf2FzTcM7b1twCsCj6GMc71yRGTsmcTirPuWTB2A5idCzEVURNCaKfLhVdmH",
  "key14": "43HsFzszvYMY4aVBBbDPc1p4Z2EkjPXngkVVdRcGAt2hf9jg1PLVHMtmvXCxvienh4B9kaz6Ca3eXSZ35CTeW13M",
  "key15": "nWjjsic1poFRh7VzUrxtCztpkYA8ttwQ3Dm7K6c4AK5SK2rVVjawUxaW4zshz3fZt3EUpbZsLtb6QGQkaJEsKQb",
  "key16": "3bksSjQihixRu8mQJ77KwZG4fPkoBoEYZv5FCZ1QQqPmbqFDfnVCKiFTyRNiTqkWHSPihvuS4wCvxBTmFJQ3S6xt",
  "key17": "6uApwYxGJ8ErvmnVm2CFx9Pb87N5WDNK42NYTEhYB6bhqc4N9kn9L1ijRNRp3y5S6swSiTxLftTjY8vTjrS7SHH",
  "key18": "3Wxg7M77iqwcHgRmQxDpkQi3gK4wd3LHMZV4YUC33kE2iYZqtYvzh6nDSGd8vjTNT8UkAvgVPriPamUZTCJBbzN5",
  "key19": "4TyF3KZjmRe7dWmpTogMCVRtJFsNTYuyZN2jsYEA1ybwWcrATif5xX5VWuutbXNaktbAWsGriQUB4T9b1bbPHdRH",
  "key20": "2QJGPRQSHdPEybgnvfq91tn8t5MLLHhS3JN2saxZRd8QpVnTchcq7Z4hx1NdpkPcozmhkDpkpvXhJW5RJmud31Se",
  "key21": "3D1FV48wWrHWSMJaYk2CYcQa7GpP9mmyMHJi6NCZpg7ehpjaBcCBfxrqDrfkiPTQsfGVKXDDX4fMRc83q4TVeTqm",
  "key22": "4EtpV92zsWcdswa6T24xXNrNw1WrVJqwGaiJmKidYnPnXqa4jxm1byg82pHSxNdp6icMGcPocXnFqGnKu6qowSRh",
  "key23": "4ETPsjBR3XRaSYnMMfieUmaTqUXnashfc2GZ98tbShnsXr1kgsEJzgrhnr3hTLEAtJ33xyGdZ1QqLPERqosJocFr",
  "key24": "3QAKN6Gcg7vgTCUDmussjnwciya28FDbiCJheAyBfV6joE36fznKVgaPMQ2s1XHwntywV2FkpNNZec2xBG3m1hJb",
  "key25": "4zPhdrNg5cmRsrG94AQpVKPAU6jfxhPEpSBMosyzotfaqntosbfXgoT7z9sEzUtAmj72GrhteQ5WPF7QZEpJFR27",
  "key26": "5iYHom8UJkeYHaPzSXJdYdBjyL7SPXmYSm3uxPa3DeYL3qXnqfKwaSj9vkXKvNnDLyHpCBydWZsiSFPHjLPN1xUU",
  "key27": "3stX96fF96yFCjhK4hSHPYHuDGiWq3XSZDcKDzU2hnb9ijuW7utbBiHy9TxxYTxyLiR4R2zanFNakadSDEpByoLw",
  "key28": "211pa2nvSKJUiNqXD7wVq2RhJjfZJEiykX2tb6KrsC4wenw2tfaYkN8vMHfRX7BygDPPiodugNSzzGtJLVboEFw4",
  "key29": "2o28JJDFKAmXY4GW4ULnZ5Hi3zS8DdZNkFH4FC84PhX5v2ZWP4sQ9PzJy8TGgRWn47Kcm2T8QUt3pmYF3VX96fxq",
  "key30": "3fNBYyKUojXBjQxUPUKmmscD6gME2oWq8aAn6re6Uwc23BkDo9dFUsAv8rgQQQcMwAMhPPcBw8ygTdVYZXL4n7dZ",
  "key31": "3K3W6Q1HigKV59dPmqaSb3g5UGfVULZnbPcec5XEm5PH7bVXg2BwivErnkShPYskrcFD1c5iZffq7HgBytGfksCm",
  "key32": "5RcW1Y4tsQpFvqee8Lw5MjkXxwqPkkvHqEC4i2ykBYVKfQQZR8sJrD4iTZYHpAJ34FkNxDWktrS8gxXEb7X3fxcq",
  "key33": "2fGbtdqVsZYZSusfh6oiKrHGdqZHYx2pWMTiFrBaou3KWq6xoFtR5xXeZfot4cx4nb4T4w9ndFLnjnYUpKm5UuP8",
  "key34": "qU6x9yFMZTD2VoFxMhdNTeuqcscJaThbm7gq5V2BrmqsUipw9s1yxobBNWP1mP9XqZJvoUofF2fVRqXZvCVuiHJ",
  "key35": "3qxf3hhgj7TjKWw8YKtGqT2wYfFZ7wMY3HyxpXcqehu5jyqPRGcMrwCqaakRy2D1H7GkuQyV1zfyCM9kwnQVTbiz",
  "key36": "33hCmCyuiKd1wDFmrFNxt4dfbNXQhU7fNzSFbA2cqbCrLNbJ3Vn1AiPspajAYfc8vzLk2WgTohkyrFjTBeLteLh4",
  "key37": "37eDimiEdd3mFnsSNTqZbzhcXnJ9GqQC8P1tTwRXTuDLB86CRzg4B63nBsg4UcU6BQhv7x2SV8tpQiroDaoJsGov",
  "key38": "41QgnVW44h6C6Ei4TwTZgcpSyLV5kGkv6DbbjAhddCN6dGuy6Z7uMcdghoHV3fJSNzHWiRP1hsx83pcw47CckZD4",
  "key39": "yhmPiV5HjQZrimCHrGDzZyzNqjn3WuQmnn2HmnMi5nseo1PL67v4vLYxTa1undPZqtoD2nfU1Rf9TZLA3Nxd7B2",
  "key40": "3YPukgMTvAs2r2R4j2DZEXtu4qkgiKtPqP6UgKBxpVxw775EArm2qvpDYNzDhdffMbjWRYbVLwTV2PNe4eKpgHU4",
  "key41": "64Vo7XAq2ntwWSpa5uYgb9k2hJZnUFjApe7doyWMFEFvRYdK2q7NhgfKiBCBaMqG8juSN3bPVnVbg4kin7y1xNym",
  "key42": "28Ca9m6qxXYxwncFCKNaN8yH1oFK96qDxM5GEoK1LMsD2dpCgaAqBpWvbvNdSQt64fGSd2pBBe29vVknFcLN3ruf",
  "key43": "3DXUPwb7bSfPkwZfGsxpCngE8cPLU7EmpcC2hoQs4q3ALv3rj3xoDMKUk5D8Rkv9tL4h74KkhR7XYyEyWyv4ocsN"
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
