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
    "6YQE2EHBWxEZiN5fiDiHQX7jgkRyiZscnMbBPVuYVSW94mEs8ZM5AeKYfU1CsnrdtoNFvupKTSAwsBYGXgGxJYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3JmtjrPoeZL1RCghMf1Hn9pzkh5nSdcydBx9zWqzeTnt2jesaeDtv37uDHJg1jgd1Z8Hes7Z2agEdjM2MwX3eG",
  "key1": "3LtoHf7L4YbFFFwvTq1xZAc9hLvg4Xfhf3Jm5oUgDE5yFcRcjpTKC3bueKjJNHK3ko53iwwL4iStBCbtxXK5kkKi",
  "key2": "5bUdcG9j6iPaVV7WY7iPdHTcZWkTCUgtGEMcwE8FCjyTojhgHvMsnLmWATtRCqUbJ1pGsfdCqvvvj1pHLVSoxH6r",
  "key3": "YXct1VYpzEM2eQL3rDQk9mt6fbFrzG48A3Wu9mPEWuZFAo1pFPpkQ8xmBmtLXSqSszCwySF25gFjo8VHXYLSLAF",
  "key4": "1jpYWv37MDEVtH5fxJoyxuGDGc1NVKbSTLVkVGnXHuJgZExujLmdyKsd2wzfBsJeDmAPvnyjQv8MJS4wFP2Nx1B",
  "key5": "5nboj3AT73wXaQt6HYjrdRo7qrQBejDfk4K7Qq1y7jGFQAEphthKPet8FmiYTaaaww7a4DLgci1hPtvjjh3smoDs",
  "key6": "4yqMVEtGKLruYovBgji1Qp57BUfdtjE9kfvgUsTTaGRCu6HfuYzvzQZqmyaekykBw8d21z6CXc93MuA89tzCs59L",
  "key7": "5sKc5JY6r7ZkABXxCRiFiV2Wb4Z4AAURturKQawHKgQmdADH9YfvpMwPZt3FtMoytMz6CbbyR468KCuPtbfFYLJW",
  "key8": "4DZVAQqBUAtK7dgPt1Fsr1FhbVakxfmZr43dsv7qk31cGyawh4r3pdCShBSjst38eeCjNf774o3RAcoZSQNnPnDd",
  "key9": "4P51kLHD3i8AVW46SJ7vGLfq8dxpMfXKV9iZiyekqycEvF1ysHPBXCLcGtnp6TcxfdtFTVRDehymRpLCoqXaiohq",
  "key10": "2wbN9c1LYt8Hossjjnt9T4Coj7p7WEFzMn53aGyK2yawUazsPyVq5iGfeBT57cmKqrDDuoPJQNaNzmodYDgeCXFt",
  "key11": "2LfwX635cfnmXUwdQhE714vVj7jdAz3hkkDXHffKHhwfF7JZihkR5eZe333cCG5Woi4mk6jxMDb1KynqEXceBa7y",
  "key12": "4XTrLzvEbHCDBeuAinmss7HUfJaLhn81cayCbtsvqmuL2rQd6BjpdQ4P44bgKBqNoKt7wsaH5rSpCzJjNWLRigAu",
  "key13": "2sRjEXCWNJKABiPpuvcNeH1eNXXNs3mwoCTn7br3v4EvpjcUQYtg61YHAQkQsxNDpu2NdfUSK9zyDPfE8XRMMZgz",
  "key14": "5APAs3Mcc9c1fU3ANuieyxKSqJbDtsLA68qCiRazXVnhBzHxRjjegsJ8j4ouUdzjEqfWEKKdEa9E21qzMS3b4YAc",
  "key15": "gpPuKugMKcBDdBfwQM1jGAUFL5Bh7HpNXzZTfj4Y6xZHQmrSr2dDRgKfCgE9rm3yyUL22hHxdLVAsYVbvrTHD8W",
  "key16": "65PiJZwxpfbGYwBJwqqjnWqSPGmppUcieVj2zJAM6RM1x1Eejx5LcyvXPXifPcycX9k6mBg7pimXmLAWDnJKz6HG",
  "key17": "934Y1JxtTp4DNdr36DXcX2HuoCibzYC5kc2fcPNQpW4DFT8wmqN6xaavM1MAtqTKeXR9qG3ThNMjFwBAoie4WMb",
  "key18": "XTbzrJVZrsr1uy3D8v7FAWL15XK3UGDo1BaTK3bg39ELFuRMJ7EQuRgnSyyLo8uTk53Naqg3k8RtqFSLYP6XBAx",
  "key19": "3LWN5xFMyzQfa5N8UeF3NJfdkVi9T4Vu1PFc8mYxF9nezdWSgdVrf7h2rtXpsuWyWk7gUYP98yR6v5JJshkUQ62A",
  "key20": "2Ynsg8M6ZKxas7JNdauAVfiudYqT1sv7eab1cFPp51P4PNSXcvPwUCzt5b9dhZepd5kRzjmCjFrQdW5qox8ujBMt",
  "key21": "32nCrvqkseVkZ3yNrRPfSatQGdbWYxRH4yF7N2a8BYqaSGoeMtrxfUgd43DLraXAHYBu5GUYSL1DSMmzRDvMuCXb",
  "key22": "4YgqHoFATrgNxTpkkzg4fYyXuKAc91qU4Sc6Rtb7hD2RXAs8EhRjtAvR5YKvXk11tXMWefda4vJUCbMXkhzfR1ih",
  "key23": "2sdwkfWwQKjRtLy61Scwjq9ztagdVXFivQutQZhR4njDTWFrAftokiCByWBcmtS4eTeAzgZC1fRNnXw9YLcvNqw5",
  "key24": "2tcrcLJjaVfZaVdmEpYX7Bq4KmtTJSN1gt6h6erEJGYEmsRyauVphkV3rk4naveZthjNwYErhWi2xxuKeF6paibB",
  "key25": "2hBh5N1Y5YkyGmkWEeoVbAGecWhPkWVNUbiT8xpqyDNmMyFpNY96Mfxxv7Cgjso27MYfqpzxGyP7bsv8hCfXH54F",
  "key26": "3zQuQkRZdN3QXDMUqFJmVxN6zSNqXgsKrRJdPKAcg52pvJxbaBZTw2Par4hVo6LuVLD3kv2svmeWXqKhLj5FK7A9",
  "key27": "39DBJv3YUL3DM1LDeugwjffr83jy5DqnY4tcBRppiBHy1woKN6qj82fV4wzG9bKKDgyfFeHkiXpRkgzUcxgPaH8a",
  "key28": "2qym3JcpmBesbaRqQwqfifHQNqLc8QqpqfMtLkgMspwjG9pEfHGGvPWxAvukhSby1JxC5UT24fy32WQ2fnXzffqE",
  "key29": "8d7kF4TC8hdB8RDuRHkQjiaArFDtf3i4EP6rQjRDPtdS77jKpHXHBTVcSrbofFRUyJA7xbKM4fx2opt2eQygT6Z",
  "key30": "42nB4FmXwVHaqPshVjzzPwgrrBHo99kNQDWQvcbKE8XVpkSqZ5FJAtt8RL8Ay8sf2DW5tqRiYbanhrGoHw8cjQos",
  "key31": "3M5JfQf37gdNpx2hW3DoYTQ1f2eYq72VL24sP17qior6Yg4KXXfHYehBAeM7NZgbhtEopWq654FZkEkDwvYxfAti",
  "key32": "5T85yURqZt5mQaqo4oi8k4SQbT8avUmzfdepTKvgi86nf45yMVtGFG8VM4JHJX2wnHSzTyNRu9fpgCFPSQG4di9R",
  "key33": "4H5fyLbPpWxDeDofPYou6BTjjNFwoTkiMrLNKyFaqn1sRf18fLRDYAQmHvoJ64bDuWua1Zt94U9Xc8nhQjNekqGz",
  "key34": "wHkRyqEB9mdeW8HCxf91hRvP2j262bS3zCrGDgwJHLLiDro4K4421QPiK61jeh5C8iefueabNXSabHWYf1fKvFA",
  "key35": "NRq9ai6ZEkVygvPASBbAdFM6fEajdpNhznhtrJ6hi7hHojAP51Mwa4xshsFskobttWiMAbZNfFGoSZpmqFP3Hsj",
  "key36": "2RyRFBJsBk82fR3mpgQdRbkK8g1aFd2EBPed3fW6UDV6hjoSe4wZru7ha8vCNffZir2kfADFxnhytGULCK8kLm2q",
  "key37": "wMDFQqNhygk63umag1yZWaREYWqd8m8Mowa4yVZ5etFXiGWUshv45i4SJc8gaZnnUKmXVUbcWYhWgDAVzm6Vrrw",
  "key38": "3wDp3tyyJbtYobGv1JbW2pRMUKHmRsU3ttuBaGbwbMYTX2zDRfUKmAAd3E5Ztzmd2tsqVrMEgWsabeYBGS9D7wEW"
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
