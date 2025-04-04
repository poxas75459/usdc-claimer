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
    "5WbVvxkBskmXo8NZHZzaQKnqiLPLGhSF2QmgMn7Tvad6GA5qgCvtk6qJknRhWGih9cxf6HuWzdZrGNkvfaQykpxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNiu9rzminrtiL47pucoVHEjknHRgzyFE26ZxLnA1KbbjpXTqCMA6Yfyw4WEJfNnchw2zW5qZWMdEv7u6rhNthk",
  "key1": "5yKKxByzMfQYGy7orueUdgXpxQJ8Zsr3RATQRL7VMYMxt3pNTspGNbLebr7mWfaKWosiffgUMbyPBC2srBUf7TUz",
  "key2": "4hSiAfeDsxQjAgBgu5ohBMqDni2VnmKfLKt5v7EMPfhSBd3PCagcdozDRiXkf1LLsCSktB7PrX3dZ5zKP8uJVYs4",
  "key3": "5dgJRZmGXq687Pm7HTjULDBGVjpAc6LZFFjgjeaRCqrKjgqJzwmfPwZ32TJak9mANwG5kMkJQsvjDHAnCn8rPBtn",
  "key4": "2m14PihhxZmyyELgpauibNjUDHowDyPegaQHRUu8ChTsMjv2Eaxo3HJ2SoD3VnfnrF1tvkfiQVNQ5SGEQtvijhKL",
  "key5": "xaaYuWL6xYXLyN8cEhVimjAiJY5uQXxcvw8fJq7L1xQQ7wFkTYJVQnJmpQyU1AdrDGLFow5wvDDsEQZbYVHAiCt",
  "key6": "D6xyWzk5oFs2ZS3wsVHASUknq5piMnVxjRCiBQ8aBrqncFriepRrnypKfjeytrkwd1Fgqk6eSU4uSah7y11Beeq",
  "key7": "3gBuh4dmh1KpEpYdyZSZi3iBWwUYJb2d9Wi6iUjoAY7eGpiVU6WJprQ2CSMAutTRS8F2oKWJMp9SKrbeUAn5THmm",
  "key8": "FrDrjFQ9FZAsNBbnphyEmYyhsCiUgDBeW3TjiSXgKqPKoEkqAvwb2R3XkNWWV7Z68xxoDk8J8uC3HU7v1LudR94",
  "key9": "2Zr9G3Z78LRqNQMC5qZ4FZz3Fyi9Qjnn2aW4VVwYyvqybLa7oFubZrf2iqt1oqR89DxeJ1ZNMb7JAH9YQrTx11oY",
  "key10": "9drkwNRjZZuZzVP4sYYPhmBaZ8TtTydHWeJaG3rzagKVEK35en2ckSJDeN3YtL2Q6a1kfoArVT5XtyZWiywHcky",
  "key11": "3iDW1gbjoCDVWNFYofmyAEwuW3cCBUt1VUTqkHKViXxUAprHexSAtkmrAfXqTc2MHy6YgNNRU89dr9uPoLYraodS",
  "key12": "2LrcfaqJpCB5Sf6SiqpkEkYZk41kKMaKpJc5ocDzT4qDYCT3H92zaREx1T7PXswx2Gsnm2sZaZSgN9BY5gA5H7gg",
  "key13": "4VaWuqPa7ucjV91GqSBY5HKqS74Yx69qn8nxWSc5gtJPveExLookTaYwqVavJ2wtRs3evDUg6gD4os6MZWLX9kXi",
  "key14": "4qPkeL1NXK5x5BQSmVu5x6bS48Kz9aRk8fijUAfi9mKd4ZBPcyD6sYTQco75CuBSHM9udmedgSntarj5AhumUKPj",
  "key15": "4KwQP7cow92Y8cnq7qzR54yKNSFjhHZ6PGck4vwjbG8J1utuTu68tPFBanYWM44G4ZjUpEpDwhBWSkpWsv1CvdCX",
  "key16": "ccYzNbth4wz6gxeKwMLev4Xg2aYeLDqyGshymavBWoL1sjZZcvT9BxAX4jKBUmAEvi1uYS4PEMMQbDgfm9BQiDd",
  "key17": "52rEu5UgLXRdD9xDce3DoXQsD8rQmzL4kfNAsNTEX6NAgfdA1jzxsKibUWQB62hdbLKkjY6tgoE6pszhib5xiNx6",
  "key18": "2Xd966Qpv2cih3WabSCkFJWBq3SQomTCVFV4yrdAWSxWFMtu5Knat7s4Ze6xwhv6B376gXkcyAapeabRNuzFrSF",
  "key19": "3UEy8KUqkJ1tRf5fRbqZrHJFwc1HfVb9APZmNdKvib24HLaoFKKAGVVMQUpnBNsWYBRr8k41L3CgoyfjoyPMjpZZ",
  "key20": "3EYsGtoRtXUaPF5Lj6ar63VUX559cjdhKbxhoJD9v6kobsnVEJB2WvhjgMaHM8mVzYgya6aQ5qB43359NFZvA98m",
  "key21": "4BmCTujRPDAmi5dZqebzyk6FAhfFNSza4gAyDTNwMVbdNB2ygJtDD7AM9gtycsMdAebrapzbSh7deoHert4A1FPL",
  "key22": "4XY1x9daxnvuPyHwigvUdArCNjo3NMLXEF7PXYS7f3zQgq7zJJY9JxvSpex3J3bMdWy9YMJyZFh1sL3uyet7AFRf",
  "key23": "7UaHUh1chxeLhBN7F8zT3vPN88GYQyGqmskgB25L3xBxHXG5fHurpMyYUXZokeDoCGSGuBGXb3LmotN4jGsutvC",
  "key24": "4ksEoRfpbLJJTWRoLuYwphJeW2dv4kCjKZbGCDMp1CRgymY4S3JDWkEszC4o3XE6HtpqEoSmyAHPUBsE3bhuicKj",
  "key25": "LtRoCdBGoABBvYqQDmqiUUbLAmn1tqKn6cj2hQCDk6VcWZdUs9qTq6r9i5ojxSY6WyVyhYnJEbLNnwx614HvtR9",
  "key26": "63rhuksjfvTdqjvptmzdDcRdi9KPTwrvHxaKEtf3EzYhDSgBoqPU2PWgzr3hjggx2Gu5UkjUyERsz6eNX83JRMHm",
  "key27": "3xBpzJpggkB5gj6yuxMu6HfDv2FwbASnPEu3kgXGi8x73mCgGm1xwKL57uapBpkEYNCJWo9Kyst1f7qZXSdqmo9X",
  "key28": "5QBTkvczDNGeofLahTjL9Z5eiCL5YF9jvvRYUAAFqTy7k4wQfcCsQXKxQiSBY6gnFgQSGntQL2nW9fSa9qKbUXiR",
  "key29": "2uf1iUT9QQkQD4FkrYzxkZvsehmYWisQ885Qyr9UumrseVsHuVr9hvwh7KnW62Fw9qpzEvBcCyjhgEuKAXAWvmfa",
  "key30": "4uhfEt4L44zkNXPpYZUuXbZGjd69EtKkEDf1MPTYueo1FH2RkYy6vtwscuWPEdwKaJ5oryWrBZhexWasKFTG3JCS",
  "key31": "2LfcHmMNrFekQoA9hRJ54sqD6m1HyCnvGyyA5rHBa4UWAwMXyk5JNMooc32gujF31zamd97L44HeiyCDGE2zJ6Ew",
  "key32": "3UxWrYw3PZJjpKpHVfBHVVEqGDvExHcVgb8VsxSZvxZctMp1cztsBEKQcnaQydRHXzRkcFp6dG7vyiz2nAPzpWA6",
  "key33": "3ht5G8ppCLYN1L5Wzi6srBsYZb5HJtLZjQbRLxfy4kdZKFNcW2VWuSY9eM3fNTbLy64iXmcQfRE7ReTDsTYoA45J",
  "key34": "G3QhMPHACGqzTZENocZi6uPhjGRVEj93aAefaByb97izRfgc6sgZjVHWBtiwJRNSZFcpd38cHcgFpEWjd7r2yB7",
  "key35": "2YZbhsHaJGcADjV2cKtpj7aU3e9avdHH93L1Vhihg3kwgaJhtg4xzaNVbiQAe6orNti3csPPHM6sccvBprQiMqv9",
  "key36": "5DoPcCBmXhF5sUBVNm9iGAm96p5voPGFjPcxDEWBivY9FuU5smsUEKKD75sQPNKm1qkE6RYRRYZd9z29jMGK3gdo"
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
