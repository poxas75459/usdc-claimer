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
    "3CL9mWaP1pi4ARPAz8EmwFdfS65GGbQQXeY4ErhFkbRrA3aoYrUcTdBPzehaBby2Moh6YvhgH19E4XbirzaAA9v5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wi8bLf4j6g7DVGm7Uh8mn1wjcQMqxHZRCixoXaPEzY1dfCTaVYYDdCQ1TinSZuyG1G92hWyfsN2JHPe5asX4Dj2",
  "key1": "wZTQbENcjLTZ9WbesLnsYfV2J8jaHgfKZy6QPzj75ZWeVr5FdCCp55qWZ4fwv6EmzUqP4f63peRhuzPPCPXWrwq",
  "key2": "4cQiq84RepjDwTPoSunGyqP5FTHtX4DAn9RMm9PjHiMfBHeP9okeDbc4aFxLEUz69LKDToGKrfy9tq4oBJ7NAjSm",
  "key3": "2EnULBQCfw6Sgn5K9Kaavjv86vy56rTJCXyH6YumGYZLjad4qrFQBLvpcmmsfvtGzjtpxs5PKTEE1s1Amu7S3uwi",
  "key4": "4psVsFGrVNDkUKaUZeitcwVGeuwSVjX28LNWAS7BMznXRLPC9AEMqmMH78v2AEcGUZ88sHLp11tEVETMUu6tcAD5",
  "key5": "37rCo47kaM5FZM5NcXLH33VP9oZsbow5cei1TYFw9PvbkTLy1A7ZdUPEQCa4Sg9Em6YEpYnPExyspy7NPZvVqemM",
  "key6": "yx85NNJtyv15Hm8qgfUAf19fedeTCak8MMN1KfovBwhfEHSMCj1kouT9eG27kWwMEa3sqzipgm84MrYWytp8gzB",
  "key7": "AwJdgV1Tvs2SJ7JQYo3cFgfCpmfDZTq22EMJCo5CsA69XVT1YMKDBR5wSyhnNmaNt1d9MPSyQDZViL2hs1nz3es",
  "key8": "3g7w62xvXAdJpTDFhL3qEqVWmL49sc4PyEVCoUY8LszfiaEr6hEAxG47o6L9dTirE81NqxkaGHxpzgRmhZS7kirq",
  "key9": "5peUyW8ZuNg7L9yFQLSzAuhVGgkm76Qo7LCTowp9aHUgupVZLvkY5GKLkcVgk5qhf9ov5BgFxxag9GFTuiitUt1m",
  "key10": "4SksmcW5T7dMXEkRP1c3DCqVWxhDd7aiJH1UVkqnY5c8qqDYGAVuXFjPaRLpCjgjUfda1Tv25oEvGxFqjJDtHyuA",
  "key11": "42MyDDT43yXmPgB4tTexqiPwndmidxLCtQkLkpRHdkHPbrBrfzyYwVZcz6HiZuGi2RrgFMnVLp4LFcoXVZhV58Cq",
  "key12": "2L11YVPsJWSJ3kkghV7yUWANA1kKCLtH3fE9Mdb2WAL37az4Kv7n2D2vySWebNhXvqd8JZfZYzuPBkGWaAqCkBNy",
  "key13": "QhWVtr2vriboGn35uSxEWo2jkqWTagpyayB2LU9G3pim4CsWit8ycSqkXCDdyRcAS1ux7KarGfkM5A1xt9u36iQ",
  "key14": "2gKNmj9oGuMFYAh5as83aAGx4pEsfgAxmHNB8VLBYMt6nSJtFhCoNizmG7EXqQx8LVAUwneHonEzaCMwQijUNe8M",
  "key15": "2bcHDdZdBnyjDRYjXYzzCAHc4AUgAWb2VTH6aWUvCGkytNfAejGrAZ8V3MB6RfdLxg1vtohdcSG8hZ63xZxC32E1",
  "key16": "2mZvJM9Fr94tPiQUZC6maynBJbEY9ucvjnxGSLnWyFCCS3ujfJgTric8PJTvFfz53UFz7cXLDM3e9z4uBk5Gz1VV",
  "key17": "5iAG3EYTTVyJfBwby75nU7tJY3bWj9RNMunYCLa99ABp9eMbWQsS3EyhGcgyB6T3tExnSUngfBkrnZ87Re8vs4fj",
  "key18": "5GqqD8Nzoj9FP9uYTyXBxULVMbouGzBxdtu98ApdeyNzgiWfuoFotTUUZMxTFskRHScqM1vkGaG4H4JgT37h6Ciy",
  "key19": "uX9VYcsSJwDoT3yFWctz65BtCayo9RxRTzRgNuY8QrDge38U7rB84Z895QTC5eoriGuvo83hbz49ZXx4tpP4ZNE",
  "key20": "Eonr1Skyk6ZmYPazJoFRYP2Czdby8GL62CvkQqp3AaoBNQeezB33wFsBDDNBmfz7sHg6M5ptYkUetdTKoYoGZHk",
  "key21": "2U2AHYY5jmJtC4PrWj5wRS7UzY5hjiKhiTbYLxpJxqbv4nSn7v8x7MuBkCpZvofRufRp2FrdCU3R9DTEgBm78HfF",
  "key22": "4cAft7bm1ab79iJ612ttohX6LUQSisi6LXW3DUnErjV5mS6gM58PvRtuD2CHkb8gRnVuVjaTsrNBu5tLzN5XVkEb",
  "key23": "65KXGmzrjq3YqeEbmfiVGtTJaHhxrshT6MFsiNfg8hZonnL4YmL9kyugr3cCkhvnc1gDfvLtb7hYdcxtXaRLRqLr",
  "key24": "5MrfhhfKBDZX3dbenLgzzKiybpw1UzSWR42C2ktWUavnMmbqW3ZgdRDyvDkeZmfzsH8zXkqShQ649XvkA97AMo3V",
  "key25": "5VeWynJuwfUXcfywAWWjiSsPv3LPxEjTe9umFC8YwsZxq88AJc62VP8vH6uW3WHkj4sQcB4AVMDnjh8irbp5tXrJ",
  "key26": "3K8whEznCbKJR89NM6XGoy28j2KpTE3fBhP3rnFzJgFvXBYugxvjzwQnbGfzghdMrj9BCVTbGDtjMqSUdDSqFUNU",
  "key27": "w9ABDqTdesDuvQxn697WVGS6ZiuWhreUDdr5d168bwuWEpLua6oiGW6XeFsKcZze2RiqyjwHn84cyd4DR8jun2e",
  "key28": "55fGRHRpVJBJggiQUPKTw9DCV4oMJbg38tfq45KMvRYqs3atVycPtcawzhGWuHPFezDJzCn68YY4ADUDiN1bcr91",
  "key29": "3aUm3DoMR6TkzgcdKHqfXgMn6a5WDSGKTkTaYpKtemMZyb65tRwiHngndUpWsSapRfjtkYNFpazEU8xh87bE8X66",
  "key30": "329PKkHKBKwJFTe57j9Vr9Zy4v3DjsBUVenaLzwGrRj9RzXb8b9QXMzyUFMEpMKnTe6Qx6pJ3tSmuC9mLkZKyXaG",
  "key31": "3qsSv4pw7GUCqDu5KAw7f15FAnHaqiN3XmrPvWfpZ2AmtYnFRLR2mSgaiUEU3GQxLuc4ii8G5uVncYZRgka4np3D",
  "key32": "531odY9CyDvj86RSDZjB5fierUppQjH31WQsphSjg7wAEU43DsSjiuWSfody9jq7Evioba38uxEpegwjDZpjRJHC",
  "key33": "2XMBAn9t5PnDhCDFqZpbESppgbtzpMSK3AGC3PdpGaoPkMggYxJie9cHQKvMxMkyzP9V5abYBzb5E87zp16cS3pv",
  "key34": "2YQD2WFrjpkC8bZFCP7dqzg2mndNQwMBmRhzRzyRMKPCFRHD66Jd2TtnRN7HKpKwz3c4TWSjV41szuTe24Yedn7f",
  "key35": "3yTy3W8SggUQiCCmi3xBms7VKdSCQNpirsD2Uz2HPioHmr4UkJnaPkQbBuXAWdf2w3ura87h8GeKtN7x8pqLh2iH",
  "key36": "66hYbVKEGFkQwVzJhGLP3YLRJME8s9XY9SLTizhEP4iMkbZfbwzXbVaRp3hXUhTpxhFvUBg9Nkwok494Cp9zhf57",
  "key37": "3HHAsvtMh1db4JRYN78HABa3aPvgRX9m1oxCSwsbdbMAcyRdVHjW6FDTCdfy8gHfjorDAdfM3BHL1HLsTiyjPZ3n",
  "key38": "5QPqs1KXnkAYGtsNbMeKv8ZcWDrwaDkEUyGoe1cySzxEBjqE8B4YT15k7pwhyRENPrkS2xG6fTCeHGqdBGCQjJHP",
  "key39": "KXBgYreNnpVq2tsxrC2TWNt127uHWDGfhgoikjGswcr1FZvzfxgzfsC5MRosbfhcRjki1QUvb8JvK4Sw9e4tNho",
  "key40": "3YGA1RUUoPYHbtUZeubMRAtByuEDoE8nybNJakva5Ef7jJa7bN1tkRYwSCJ4Y7gUiMpGjBZ2bLMGRAM41vGyd2xy",
  "key41": "3nSJ6HyXQ8zBsvzYYF2N5Efor79gDKfaZUKVi8WtJPHDiUbGfRA6yk9ZTXNoBN42YZh8izWeA1dD4pETs7TXVuLH",
  "key42": "kWoY79og6UNxB9ViPN84ogRv8uQpuZE5x35LDg2G5EM5kNsc67rxisCmURDCaUapPjsN12UXY9C2AeHkgnMBiUe",
  "key43": "64bb8qpAzewUYQM3rgeBRC7i1DUcpLY5ycuYabdqvf57MvGPgr2teEhdUK6cKb18FRXMpfwJ3V3zxgy5V2GGrvNC",
  "key44": "3wgyzEQLmGta9EpodSEmoCnAib68S6JFW4zJi5iB8Tjq46r7xV33aqZwvApd5ep5MoBrDZyCsbzUyAoFpdJKucXi",
  "key45": "4XgreYZZpj8gJYyVUzXH3CtUk3RnP1pdUPahm7m1TDWM2h8X8CvRtWbAhqYMSQj37KTAWVPfyWPvifWruXGHjWVB",
  "key46": "5BxMjb8bKFacuranUfBPuKFdX3BrQvee9F4YPe9fQaY4PnzxBGyiqJXRG7wAhma6Q9CrkQAgbmKG5LkgS79375Hq",
  "key47": "N1hhUvWoG8VvsvyxKFGYgmM3JrCky8uyfk4tkJHDda5u14ekC5aHiLWxhzHoNJ4XB1uftXL5hkD5VwUJGFjex2T",
  "key48": "4FFKJgbfmW4akCtFYJeSm2RzGA9GctTGVXaWFSuAvizF1TtLSRPa3vAuV2NYZJPBXdV6PxqUe1TfHVBRBBmJRga5"
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
