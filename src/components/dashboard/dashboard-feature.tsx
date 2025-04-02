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
    "48ftdET84szbSYPq9JpYaUx3BF8cccbvSEcdfRmv9SmHfAXcqsbpkedZ5y8m5kwc81C8ad9z8jsMmjmCXcrTx97Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHDMsZ1PQzRpBZpKyifhpzUotBZPjXezPTPEBcrhvoRMMHRTd4Zjcg21VG1yscBbGFSDqwjrUu4oJJc7VWAifvZ",
  "key1": "4ZegP98nmuxFxJSkY5i29cwwspRP2KAdm2xyE1g7A9JQ2zofdegF5SzJcAxXzFMW2BQxZ8RDk6nVdBYGeBDW6Bzd",
  "key2": "5PF1BS8WS5FWGeYDiMctKiWVk5KLXcHaoYgfqrU92jcQD9kAejWJFBLDjgKT2T9njy58Fwsww1gvXAvEsCraUsFh",
  "key3": "3i6tYkw8fHpzDggVtM98ERdGPP9LQa7fCxK7L6hEKFyiDYdVbNk8QjTbLXCVZVwbW8HxCprctZEnfXcCm9tR7hEN",
  "key4": "5UGaThoTis8p6ZtHyE2RF8LkbHf4Sj58WbiYrPH14FihRJYdnjoWfiCtVPDhCcTjtDEWygtKei7iP8q3XzYX3WVT",
  "key5": "3ofmexgUk61uGNKZsdCubidDz8cLR6LKi7wJmG7oQEmFy68T17YEkL1eCJMV66cwmPzvDPYJqbhc7vMRqe6w5oc7",
  "key6": "5hZrZ8sTnjpDWZaESZvQVfTg7PjwuTGvYzsZnvE55FnQt3ZheYcJ5m1qQHUHxdCnBi2raRoNAfbtUYuPWHpPDtCP",
  "key7": "3AeFDqF4W3beVDThGVzhtHFdLbuUAYYkiDmPnkP4jox1simqjL3nbTfLttswn7E6QiSeRLSQX8TZEmwK6XbULVge",
  "key8": "2pJii3ZbtjbuFT7NWN7gLL4MmDX7MFJf99F9wjCCXrw3imYHHBED6RTQpfnVFWzHyQDFbA4V1Wbs5CZThCBNYEzv",
  "key9": "Jm4ivM2jeNuqBQ4FA5MtHMSZB5NtwY44VzNfwVErK8DMoRC5LHiGbrb8vBQVJGB2s4suNjKM8K6gQLrNygGzjFr",
  "key10": "4CC21phzyhCQ5oQsFrMAig8CPbdefM5937hv4iXoAQ65wF1csTUerPeoas4qsiyRZSB4AVPUy7kDhWwt6iutFQB4",
  "key11": "2uppkYuuVgGLLhbccwc1qnPeEWEc1rBHQR2hX9eRcQHyFvEA3DtcLXsnP5J2TNEc7YKm4uZy176zCKnHo8dQwZtc",
  "key12": "mRqLZQdK547i11joPZZWRxhJMFf7gcUbPfEQusJPsDRYmYT7KHew8sQP9zrVSbqhT3cGDC4vfcqsiVtUKjWox5k",
  "key13": "4CwxwnEUg1pgG8sCrMZbxd38iMEGZSm5Q6fnYJYjY1Z2GAz1N2fWCS5DrqzeC1QSAZdthG4WiVopPurhLKEbwXfv",
  "key14": "3e6A1tPfcSW9aTMPcjQUkR4bErUDrw6GF6S2vudEPiXY2oENw39RzKufkLJWxAsM6hnZNy4MZDchbGyFtAPXVBgP",
  "key15": "44Ti2sMnPjEqJ6neCb8UmJTJGLQ1FVhsfuCD3H4RsHxnRHiwEF12f2Ze3TU1wdqDrzj2uS7ZZERWqdkNdTBoZ78z",
  "key16": "5suE5zLWQ1SzhssaWzdR7bgwx3X8EknQcgTFbxarytZ6c2DE2XPFM8yxVjMsR4ZpgL4uVYcVvQawAJaPV3Bgv473",
  "key17": "rgePYg4R5QmHFYifPBP3sURprsAnFbzJh7jitAXN7hjZLsHMkGgLbZjsG2yG1yWADC8xzpcMs6hUGz3LRUzT1DB",
  "key18": "Edk7YNCzbwLUYQXwjnpqcWHrvZoUbvFoZj88XXH4uMVStDebqMyj2SYca9vvZH6WFSvfpeFzUzgXCiYumjKG4Sz",
  "key19": "pD4Hz9sm64PV52uLVr2iVi8iNFR4mFPtrEoQ7pVTxCJwfNiBqMjeGpvTg64MYssBGqPGD18weoNGsop9Jf12oBx",
  "key20": "eGMnPmvmHxYzNKrwgDoaHUW1itRxMK8gbrHpnM9AA7R6b2LRo3q4CrvvpH8JWXLEqqPkd4QNrrBR4ZagLWcdHRT",
  "key21": "2qjzAhoGkdL6P4B6htZgHECTDogMb21iGHtEar714ucxCa5TRGq2medHfzJgCUspdVYoteFR5T26H9ozwUNrtZSp",
  "key22": "29nUe9wAW4wytjX1QMEGA8giBKFVTV9EmDZfBJSbvdPEGBVUMckYuhzKEkVGyGS9ZVycoWBEkvNEw88tUa4g7TVp",
  "key23": "3oAsnEHqM4Y9UZSFqktuJARvrrFbwsH2d7z5LzA4hSdC1Zkm86Si49J1Cxo8MFGhWkMDwx9BcHuzmZTxdLPLu9eu",
  "key24": "5ByhSEp5s4LiFGbHuiy4255Rvs93KwaKbKDk6sPmD5zzCBnRavGVPrvYWxGMoncLDDJDGG1BXMWB412Ac8bFhk3o",
  "key25": "QzKTB1BCw5UZRFhxobCJqK4QzV9foUDRsfJLo2yoybtwtStWt5P8SeXstTCfHf8v1q794Tyb8QHYgV5CdhfbeAX",
  "key26": "hKZWjrw99WmKEJcARh1UT9hxo56xaP4xCXzHThZyEyWux8W9SFDQ4SJiHcyLnpSUWhTpbRrGe2Us46VHUHuLQpe",
  "key27": "3Qddf94VKnJfCDjkwN8hJ3cY5sibHuXaU4fYEJPN2Fgkgc8hTngAzPNdNQyrqvAQhfTkc7rLcJwXtDyeEkAZwDEp",
  "key28": "4G89gJBAHizUBvPT5PjDfEbANTXQPanx6KrDhFzttyJdQwe75Ti7UMg6Zokuuw5o2Exmya91RFVnXea2impZbnJf",
  "key29": "65YwEGcm4VugzHdRvfdAfx9QdW5h4gA8xfEa1pPZXP7anNaiwhA9KvwUAXR4MogLzrVJtPnCbiVroSGoWFUdTmZ8",
  "key30": "5NfrYDwQCdzDSgBh1ghfyj8Mkbe5niuH9P8W8mYySNhppR6m2RYpCRHVtobezy7aBqEStEezqXKHMG7Sa6wJtxDy",
  "key31": "7UxySSrPvAW41u9zo93asXxVjTZV9F5kswMptXQQe4XPDWt5qjeJYHT4Hz2g4Yihy6zcVcKhiSKLJ43Ddx1DjPd",
  "key32": "3MHYDP869Uwede23j4wkHzDzrRzLMmyfCQYTnZfj3xkpUXHV2pm4imzgMfRi9h9jnatBjTS2cgjHoe5GFaP8hu2g",
  "key33": "4sTwj3cEByhctqXS2m7AvU2pZ11EJdg8f3eB73Ka7Dta2b8EtFQBcbV1WiPoMCeX9g9qreCkt6jtEvWh9gpETh7L",
  "key34": "3p2xbZNDMtYRd5dSFGCghS9dYRVLvhPAZ94offUQeVFNKp2Kg8WkZpDMBmLLfH6656QAGYSg5Trp3ekBS3scXXSN",
  "key35": "2RwXHkaY4cfSpV8eJtmDQYSTZ8dCK3EqNaY9m5Lt5KHYizNMyMjQDRoXpDuXr2aqunYS9sBUTCsjFPAGXoXhcfxK",
  "key36": "45qKQE3MWTVpQ37zH4uGzfEJ4Q1yuoQWZyz589TsZyG2uCVaHKZwSBaJAYxRpitg1PzWzPwYmc6eS5CVJu8qpRFy",
  "key37": "26mm1KhKXF6gCRkXUa3nsVNKqyy6qH4qr3rzHPa8jnV7JnBNLdrWvzmvNAzVn9DpXnEvPaUpFAUZP5K1xetDdWnu",
  "key38": "4D8SnwEPtL5uLjRJyvPDFAC6sjZjr6Efv2yPvBNijQJHkqKFtuzgHY2DZ3MRUsaJLG4ZWHqYAsGG1VVFPZyZ9ssb",
  "key39": "rxYDvDEgMu6ppsc9EK5r9sZp2JP5xBStZ1XGqea6t8aG8n9QCNnwbLiSFH5vNod2cH4Jch5WRyK3kyeqTXt4Crv",
  "key40": "2B6rARTwVqWzd9qyuccBfA7ivMkvLZMA49MZmZp57ZVm3qTTmX28GSto4uJtY8QLxaGevBZif8XMqr9Voe3j31AX",
  "key41": "PrK2XKgJPRMgTu962nH6iu7vtHL8v1J4KxSC8to84paaKzsuC8EESb8uUmF5qSKfmXZ98kRGHGZakaonsnk4KD7",
  "key42": "2pRDQts7nnK8qcCCk2njtJbAma1nT8MdpFmyFM4oMuoPAM8bS7xqGYQn7gvg34iWufS5aw5FbGoSgcj4HQKi6kgg"
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
