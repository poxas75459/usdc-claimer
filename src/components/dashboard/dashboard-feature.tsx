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
    "3qHCVz2bM5LdubRYc3ijZ4JDkzRoB25LqQgJEVpK4pH5YDSd6Ratkpe1Q7ebkf9Lqvn4msEbdXBhCqLicLCY8gyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLSfRDzxUu9ZqveGfp6Do9NnF14X4JPMN6sJpDMTQ8MhNCru2gexMqD5zE9f55j4mBWE6yxdvKKd6W5PvYpmCBh",
  "key1": "2gQPNd2jYhau9qJsxrHohBs9FMqcC45YhjKv1y2ndESP6rpgEQvpxVLLGCemMkvSoxqA1HRz1V9Ta11njQ16TH1d",
  "key2": "2YHqVYvCNz73VNQupQHaG66Tn6tDdY6quF6xRsXqARUrMsFqPxhidS8h95P9jUm7ESiRhdro6z22nzjJTZye69yQ",
  "key3": "4zi3dT7zAyYoLjwa7NScjfm862TxTemYB9LXQLcRRgjmqyrL9UsJkF8wxpMcZjg8YW9kqRVRENVWtGJJzPFPzHxS",
  "key4": "4qvS6UHDXpngdSKng4RYCSA9opmUqTvKyUoMD46iUSovmuY9QfZHYQUcfoXU3YXPY8qKms2E4zK1Nu3g8HTA2w8C",
  "key5": "3KEECPnxgW1LVz6dmbVQGMtv8V2LDzLXwqpqLbx9XLhqxTvn8s1Tw2h1A6YrsEMqw66XVNEPVsyacJUqkK33NwcR",
  "key6": "5ZCjejU1JWapbogQ4vLtY5a7NjToT5JA7B4sXR6tz4xgGLAf33Mntp8E2GmLd1aC7dPn95YY6PYgS3FSWjFBHQrR",
  "key7": "4AafdxH3uFmbX5nrAy9miQ6hvXs8mgp4PdSyUvjh3BFtDHERC7dthe8iz7BJipdkTD5ECo2Las98uyh7epY3Yk2y",
  "key8": "5KCtWaJ9CioH2Sg9Lz1Kxiih7MiHrgRxoVMVj2MK6vrHotbwAiUxiMNy6188QkiaHSAqA61NbNecWCBBG51WMrAb",
  "key9": "2gFV2DzDu1qJy6PdguGGFFXtuWu7Wa83b6QzwZKT2Jor4CwfA7mQuGEM6LSMS4XqvtGAzdJVkEEiGt7Psagww8mB",
  "key10": "aVikLSQ7mXYgAiNjWr1HmUcSvzp3DN5Z1adZh8UcjajPFjqypnqT1yA77U7puuxevXTyeV21KF54FLmDftNeHJT",
  "key11": "yWqDfezhVMg2C3eKiYLYuJfPPEL9wpVsL3TNWDMognuTPxS19urMVsubd82aNXvbxdbwVGKfUK7qQ3Ktx5TBRrF",
  "key12": "cbtQUoTCvrUJ31kN5MwzQfgCqFfha7TiKjjoVVdzdh3juHo5AsTvbRAa4weC3PaCBiwAshqseJ2vmRjDVpQFQvf",
  "key13": "dzuCzXDxhWHC5XJEGuLqG2BZqzAJhDLBHWUTyPH1GsYQCZDSxCe8XwgY9zyRc1tvDKGzLFNcRpdBoUdyBwuiKCB",
  "key14": "56kkPhCcyhsj8snefr4WYAeHe9TPuRugSaLTa1U6DJabe7b8n7YCrZSLbB5XGvEJnKDmnkPKv7jksccvQFqmccTR",
  "key15": "5PrQyPoxMwtB1z2nZorNSR6RCzDveeBhNGjftkGvE1yvp52bDPFyeirAPjxpygBJyrANStnaPqn4sUV3KgXpdPgw",
  "key16": "T9ds1g9mGBKjjqNxx5pGT16ojmP4Fhz1KGr4paRHT8QFCTJAviKNrW86ZKvVjo6FLdFFRpqtECGmTWDHP6yD7wa",
  "key17": "AgpHtng21k14E8vQjVkFV2nyoAzfeF45As1ougQiMzcoRrpk6oeYgzSczN7XmnJFyW1ePhXNB68CH7kLjpecLD7",
  "key18": "51BD5WJHi5VmNGRcjjSB12iv9gCy4sWVGjUyeqodhnsKChWJnpCPfDkd6kFUxUTg2aGCa9eM1YzkVCVFYfvHNBGF",
  "key19": "mFNThwnNc65ucKhscz2VQvjmTY9YPPa9tVXLxBdKi1LuP2dkVEhT2TEkqbC3kRcio8mfhniKtdddgCqep5542JG",
  "key20": "Mr5reCVu5DSP6kWCitymQ7dTfFpqrfnxZ9WUz92KEXctJr2yQJufFUuiaSiZhJAtYTxMPXXYtfZ2ivo6zf1G8yV",
  "key21": "2an3ywgCeKnYZX3cbrzdHtKTQuoYxzF2QD13kQ9YbN15rsPixotXPQ2E3TW8Dba3Yi5uwVGkw9F8LTw598x7Sjj6",
  "key22": "45Mg3R5fEbCrWPBxrGU7pNqTBwG7erDtFKW2QmbKdAngG92AyHGJ2C6ci8TLfFuVuwK2njnaYXPMbVhv4Pz9Byto",
  "key23": "655Y8X8KL5Z1yz2xzQnrqAREgP8wimSg2KRRm4nzMzUGzRAVVrmgAhjUJunmVvMmvFBowFY3bFDq3tE1K6pEvztF",
  "key24": "3XKHr8ReLNsXggbga26fcVM2sVV2dec5V7daGkzwLtPPFhm9CUQY6SmxKLQAxsAGhDrKVUwPgtEzjmY6osgNUW3C",
  "key25": "6p7RfGDLmHC8sY1z76H5xkZ9SCAuadrmUg9mEpkc2TZBr1LHVFNtXC1QQkfdG487rDoeN5TrbehgAQcoaBuB2qk",
  "key26": "4rPcxyj7WGYRV3UKV93pQHc1Fbyt3NoeNAFTFwg9bDJHUkqtNVwxfUTF2BwMLfSteoQQP6jFuXPiJvKvX3qC5RyU",
  "key27": "2QCUQEtiis7RSnyCotDwN6ENVVmq9fZmxp4mJY1KAX1djmEZBQB9nteL6fmMHPfaHs57nnMgU7Auk2G5RKfV2ZHP",
  "key28": "4ktSx2gbvqtYkMMqzDFVQXRsJyfP2ENdAZhSzq3jCrMTVvnD2fue3C6BMScCDWrSm8goZx6YbQvJEJKcp13nb72K",
  "key29": "65u5Ap62mSheWeLJHCxxjqeYpF6oq6DTtHdyexfdjLZMnTPXt4YtkoFPmR6tw7riChuBgrDjcvRFZB2DD2HGNBwK",
  "key30": "5T1DiLXhefp9nsVpZCp4P5Z9VmbBnhPX2vSAM7nuBnq9vzjnVejjsYs6ChWUmGHsaf69cmk3gJptuf361H3XiW4i",
  "key31": "NuibqdmepZ1ane9TgA8jDvBj5tDJij3s7FqDJLu7Uz2GT1dwTzws3go9wzL4T9tPUK9ZaJgahK4ttzDN31Rg6d3",
  "key32": "CvPQYMbQpherq1j6h9ZuyhmC3fiZLsupK6PtD9g7oUyWM4vr87TLVecprZTnjevRi5tC96FfYAdYsWGoBjSGfw7",
  "key33": "3z4KhrX9vXzxKPLJym6h8CzJb5HLPHhhsZFw78WDayuz5nR88xQhdopWuK33cFLjdE4AuabZH45bmf4uZXWeAKLV",
  "key34": "4SBWbJmAE9MT8F6TRXaj6JpMfn5HnkkvHTHJPeaPNfUMcEyQEVUVgkQ2KNDgYsN3TVrJ7P49YZUwgnDbmSsTXjia",
  "key35": "bEepL2v7G1ogZqALhrhTqKejLhNbKgPYvnVHg8RJVVHYKrsGWiJ2oLBPNhpmhAkypFDhremHdJbtEKHKCyzDDMK",
  "key36": "DJKswtsRvDZyz1ikWNnQjy9NuRUsDeutC1Zp5Jq2ZMcmub11EvMoXKM4nQMhFGci8knzcDsXeDbWEUsHnEvu1w8",
  "key37": "3jEMm5ZseM2U1HfWV6aR5icVWCdjeVe1Gwv7j2upaTFnp1yJBLnsDSKqLdcvjUNTDQyf7PDb34N1CCHjzz2szhN8",
  "key38": "4foGMhcjDcfQQQgQWrQTd1mgVMcU5GRop1SakHuFmiNj87N5EpFmfTivY3k5WZGpx1fJAGgfrNNoqZD4RG3i269R"
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
