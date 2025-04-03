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
    "4zqwMYRxio5defSWbzS26LGiPxDKVeCtmVzhHx7DWm37JC2aS1ARxBPS1AwJVVnDQK1qtEDKwUTHETcVCdGeYQ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bXG8oESkFo6y44ji2y34HVDTxwnjGaH8dPoCpEGSqZyLUdNoNueMPMpzZAgak4aVxdeTozN6vuRa1XnKNUFGkAZ",
  "key1": "4k5p6qgq4x8TQ4pYQZ7inwuWYYqFsiDd8zPdon6uByeZKk4skxU5XsYoebYQTS62uf51QiPmBZazSkSA3kb8Krgh",
  "key2": "4pWUbXptwVywySL12ag3QRhVu2rR3eSHNT56H7CjDhyBHqttzpsLogeNgQsGnKA6pADG2wBzum8hFtRQfq7sehLu",
  "key3": "Jp11Byx1NZwoj1DBiDSjU6e7U95tJ5h9hCchpsahH1uYYkWnYJBfDExyXxbnfpvPDCtcxjQ7RsAThKigyWBPwS7",
  "key4": "2knR8WuycY5dAbNor5xPKWxz6FnVTBUttDgGyDRyQDuSWpzHnMBuXVGoLW1bjyNX3WvtzuDYudVMN5T2LEwuwFDS",
  "key5": "26h3tVUdFBjXLK4etanhPqqbHPoujsra1GVKrXDTN9LkR7yyHMsWsNwf7UVS2pVHfECVeWS41VKbwcdqMVSRCThE",
  "key6": "5t1S4MUVJpdHiSPUb7QXwZa14pGhuoh9MGzbjWyg3YBYG3WAotwgweZCsbu7mAe2faqFNopSkdRqbbcAVPRoEjos",
  "key7": "na6e9hiRzxEnHsPQvLQfd1g5aVL1eGe7M1FzvHb4bsuJqb7zUC5cQZhz8YmBTCsRXC3yAqiaJqLPg9VToU3Vcy2",
  "key8": "4pGHTg184PDoKvjp4UE9Ay6MacGLsBrbT1wt8E4USN6kiniyRrCsjVbieeuKJtWPYYfpVpa4JXa5tk77nhqy4cPm",
  "key9": "PnmH7zCekVpbC5Yafench8DqVfGyH1a1jvKubctZTWMWAiQosDaL9JkSTF5Uqjg327R4a15Z1M9t922LkpSAGmz",
  "key10": "3deLrBur3VAYxJVQMkmgRE2expYzSPB2SYZ9TGPDoRDksLYNXpjeH3vb1cxiqTfwjFBhHm8n7pPZficFE53xeEAa",
  "key11": "3K9DUS3wTVXH2DKgBKqgyoej827hByWM5JNsESvfVxJAtRkeqLwve3ZY1XwkkpEBiVk6pFsUGiZZmSHAaGBcYoH9",
  "key12": "5Lj1EG8LtP1UZvL2Gbj6SDF2naN9GS5Bf8GfQs8M99HBr5FV54dzMYK62uDeoRtwfWTGwBE1NwhThnoMFEnExzRh",
  "key13": "3itVNebyDCYaHeaA7qcGzNpD7SA9wj5XqzcgYoL1cS2PvMccup2yQHgpyiUPNtsM71edkAZovvhzES1iQ81Gy3hQ",
  "key14": "bG6hKabf8xVoDaQCLnM22vQksEdn48jBa9gmZHREViJwNNbiVKYDK1wcDq3VKU6dLwaVaL6WmgtyQ1oD5ngjWVk",
  "key15": "hnPLtK7DGZr2rJAz9t5Y2nDnXTjbx5hQ5UPt7KMWqBgswKy914oKeUzwwHTEnnM2uFSDKCozUX6Ff38czx4iugK",
  "key16": "2Le74RKs6krmogSPcZz2ktp4NpSS5bxC7SKPMQpS3pfkeowzMswC5KGrh1xBYgrT2AXjxS6pYHkfRoipZ2LMrGf2",
  "key17": "4DH6tiAHsTQaX8Wh7MTD96xeQr7Adw3HXFGhgzckbRjyJV8CEsyxp8sHEuy2BVFyXfEm5CBXDiwub2dFYmPKNfgj",
  "key18": "3Ci12mCwRgEGxdZVScCZUSfef15GHouZqU1L1tuDwzYNLDTZ8TcvxdtB1T8X2vvrQigNWC5pL77JMKissccKv4kR",
  "key19": "5GJuv2Au1gxuvaESoBcSTENdcxW9HuL4qW4aAJnRBtbU9GV9CjNvsYsrmECTnG4D143nwcvuRUqYiku6QjXv8D3B",
  "key20": "5Ugtv7qk65DcbWEPZzpyN1riyXJHd9dPHx9U5NMUCc51iDCcz6vMScD5e4eineNefLnk7FekLEAN9uK7Y9YAzmcU",
  "key21": "21RkuqvwyqFf7xG9DmyH2XGBCn4Y17TxLfg5zUmzEgPoQ5BArLvzb9SSDdkQP8axgAYCLFVn4CgyXxupKkK88dDA",
  "key22": "65Wdo4PCHyinHpDMqZQDme3duJGGS4JAPURGWDwkdz1KMvtHJmYyvyAiAbiCtXCcb9bry9LptPzmTYxEZagRD5fL",
  "key23": "5Qh51xSk4fz695TBRhKqRFmHn3xVHKXcpSXzWiqSM5gZLUR7r7e7ZbnYac144hs9vJVfQXkAadtgRRjJdC3Qyqs9",
  "key24": "3VBArUEwy6nEBrzh44sRVWXMSjiLy5Liyvvn3g8BdXDf8cxGPPkedmdR2QtWdVYUEvPfCb7rKkxmQYqdBxpyA6W1",
  "key25": "4cmn3dLQ8CLFvpmurrCoL3dsg7pv6ezcz5SeAQnavm5Br5V3waYZ4Cjr19CqFwn82vGMf83C7oH4thFo42zFhbma",
  "key26": "4HedirErx6jpo8B248o6NqfjEpvBgNPnZQ6ntsXb95ZgSDTey86DBc1vJRR5JeoEJZJkCfroG7Y86mSj3vfj1Wou",
  "key27": "2PspCs8vpGqVUmyd8oP9ieWYCAjNUjT42Vp5e9WnTeKpp5VPAJu4g3iMkYP5X18ZCusbvz8yGNUDDNFjimDVMPju",
  "key28": "2DD4PqBS4q8x7NJwuiPjUHRtdcd4KTVfQ2fnPNp7VmrvwmkGWHXcMVFYrgPZdyezGYa6bE4YPYrosAnhfkgnoVjM",
  "key29": "Tme3V9Eicjoe8mMkJ2kHUerB66nCXkM7ZwRkpXuFsoPT7J1rZaEbXSremBdRCcb5auqrQ7YH57ibYPZxt53wwjv",
  "key30": "9NEDJTCUUEs6rTmFD4PhDM1CWTmFXbJymBmnLWwfy767JuxsgEyJa9ymcJNPU91gxqKwKWsRLN4cZtDhx5f8PX8",
  "key31": "4TeT74oDMdbXUgM9G7F884NcoMJq4PxTD88DvSB222jTYGfQQ9RN8RZDSDDwB6c7ERmQ74UDtbpQZQx3yp3J1jAj",
  "key32": "5s2uB6KSewcZGeH8MrwP2wvsHeJaf7hpN8gfKKCTcbj7FRGdiD2eZr7KF1YDQWMXHmwoKqoUH5UPp3nrjXoS5BQV",
  "key33": "7Ueh91pCqrJWB8StqqM54pqDyaqEJLBXkQzoUQSWNdMppdxtGVHhj7NBVEvmkwryNaWgeP2ByqaYHNhmAHqFAgJ",
  "key34": "4wgk2jNtHJJ4uRUHquqRqG6Qwus3pbyYVdQudFJgdae4BaFi76ax91QVDLChrKZ35eUrxDuweGx4kW6uveVkSNFr",
  "key35": "3ibrFtL9hjZ8GDsA6Ty6Us1Tqcw2YqZGu9yZhEHVLqvHiD9yCA4K31fBgD9baeTu7rBjcGn4cHvRiPwNH76wj8GG",
  "key36": "66Gv1nBzgQMz3CiC75ZDqQsCXYmNtYy3Y8gZ2viegWuwmXnAZpr7K7YtV1gE97tJ8xHpFQ1KmaWNba6G5oFu1aQ",
  "key37": "3Jcjo3AELMwsvS94qJESt8KHLvvLVQHD3nK7GsytcpHYZpT7xbDnyXxjDxBCCMK8K5nVBemLSstYUCQDnp4qG33W",
  "key38": "5DmjAPrtdyhxDKZkC386J1fNt8f69HMk6ECLZ32NyyVEXnD2MKb4fd56QfQu3FBMoubdCDR1o8bDmbAQVXMNSovM",
  "key39": "26H2vpGjrTnxFMFdcJ8WwD3eFGdaD2NopgaQ3gQdZKXgmzxAjq1A9ASkMB9k6sJ1PpsifEHaa98KmshN9AoG6esR",
  "key40": "8YJAyEFMMG6j6tB77zbXwoBmFzSWiDMTcbdL2jasPJYiDxF6sVzWM1fUGjNCsSU4KbukVMzgW8LNd2vvPiu1ads",
  "key41": "39ZsYTgYdtUTfX8rssVcjV6HnJ4DJyY1kj16eo9ttGPxzYLu9g66z6BmNv9Znr7GZSoqo8PsxJ7r7ZA4XNnJFdDq",
  "key42": "49z4n875938rypAhHkAuf2T9HTZ8b8NScYfWRQ3cZAYfc9mF8AFM61akLzGdMMkeYTkHidUCUQ8L5gqz5wrpEc8z",
  "key43": "dpWKCB4ZY7enK26DZchpUGSVbyuwcPheUK2JSPN9qpTpHhYdb2Me9QCKszUu7iuMPXP3hFaMwCcRST47KZXPQou",
  "key44": "5yrrihfjnETRVNZNVorJ1r7XjubLqm4c2fhp2RYQCLbnsDq9nP4mdNoaD21dZGL4XqD9jUrhgo1nERUe7mUjWNw2",
  "key45": "4rtURGoJdF1tKoC9tqymgUJjJ5NQ3NZG8gHZaVteM5JJ8tpqbui2fJkhMts6AeMLyzEr4q6uWBzTNb6B6SqP5D8J",
  "key46": "TawTPy3Wn4h977carXpyNXk7ZPY3jp6RPoQpKSDkKkLF351gvhnsaXTjCd9ZM3wXfbZ7am4NNrDMPrwSaFm8x32",
  "key47": "4gq3woEmTRqqkK9gMcHDdqZ7fyYNeBKkWZEFHzoqSLzq23CQtNZy4oqJ9S1bc4y76BrXt9TyvKSk3MbJcx3rMPKv"
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
