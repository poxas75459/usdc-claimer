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
    "5ysW2TcAddPcCDdKFye5mRmwFc51ouRuGJ6J6CwwghmNRzzFDq9RUocNbENNz2xLAwwX3z3aGBVYh1rnikW6NBWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ntt2BDo52mCfapcwABDco57WDtbDaaHiADnKfCW7KJsB3rXguPGsDrnPdaJsygydULurdCSRcn8RLr87EF6dyY5",
  "key1": "5RZxwjxv2sftBCLyswgT6vjKLukxBWTesrDPLGZ1nLfsLMB26LSUhpV8jSTwf7VxqJC33t3DakJHgRFJ6gRQ1zh6",
  "key2": "SND2ifjnTE9X2n63jqR9WxaaVhxC6FM3WGYNAfFBeQDDgsgrZtcxtsJia8sSp1RZToYzVx2GAYGUYTuTURgtB52",
  "key3": "k5Xzv4G5qhxRvGxFDSvpgLcG7k4hGarYbuPrntPhEJqCqZmqUyCwyPTtaaDdXDxKLhKq8DT1vveQr5Bs4pbEH8B",
  "key4": "5Pn4DsozCSL1xusYi95VTjBHQyJ1TcLeDP92vfUKP4bA9xsUkiuZHoriKD5ZZqbcFMb8UgRV1J5qMkiMDNjntVKt",
  "key5": "3mndp2Sbf4xRENLR3R1xUymPp5YurfsYso2mALMePavuPPt1DhwhE3pd2MztCaAhgXtvckZExbQaruxh94VgmEAS",
  "key6": "4msdqohHHjcXSbgwBBfiWpdL5wnVLeLDtwvZKoVM2RGLQrsJMwExBDF4JH7ENGKV9dKQGa2triQ3XFeBrpCqTVXt",
  "key7": "zzwi4x2eRTm7QXSLGMBgFTKmxekMigoMnJkoTyMV8bKHpLeakUGpEiyZLhANQC3SpNuiV4XYToSS1zhk8628TJz",
  "key8": "5bud6dSALMmSguhJW5y4VXg9C5UGZEnNYdsrgEpwB933f4Pht6VVkRje34gKa4qiVrdMB94HkwGxPTwMSpHsBRFW",
  "key9": "5ms48PWkCbChcjsgm94zjVvHqWhJBVJYcZkaa1NU9fEuNh5a7mMCb2uCcnqHouFPR1VXUGaCFx2uhQ9wtdhYY8Dn",
  "key10": "3igBo4hbVnh9J5AShC24XJP7oyLziENu6KrndLmUDqTAfnRuEirTQXDdByFpV1XYqTKu1BMjtFcPiGsZ97sQS6uB",
  "key11": "43r3ubrbg5EwG2yc94uZQ7sn4g7dc85fDWpusQ9Bo5aT8AcF938TkMdFaBxSUYZniG654g52eM8tZtK6RBmyCXgg",
  "key12": "2JwegJghtbKrcEnkbuR8Y2DjmqiVxzK9UQfFo8jPAmBgGScvBEEaQ4PHN6KHBhQeqCxkvMYFuh4SUbgVyfmGvdcv",
  "key13": "V2LAbS7Rpkbixc6eB97ZrDWCT3cL7d6wuSMAhB7xPXcjWcany72PveC5bHuhgUZusd8fz4ETkYie2Ss4SSr7Yxd",
  "key14": "p1jvT6ZnUcXSzuZRhDJrubSYJyP3TEJXPKuJaUSPVukqMeHVz4go3KTu35Q6naYwPvZtPoMVtiNiSN7Dgh84cQL",
  "key15": "4grQFukAk5siGjuntprUmooZpoyfy93VDGUj96it6MCfKD2G4aZdWTrEbnmDsMzrnigUvKS3kjN9jL5mb9KE6k9X",
  "key16": "2WkS9qNAVKa2R9YjHhEMhPtJ94hcfkvTaLgq5D4dA68NTK4vpuRKhLroDPzDd459Jkbv3gPWPi486LRM23QnBLHu",
  "key17": "5yS5EqNm7hivyY6VT7WKqHBFKcCNKRcDX7i3YBqqfXiMwcGTjUbW9gqQYyYLyHajVyESaQEdngYHVxzQzGBKSqdN",
  "key18": "2CZ3oSXRtKYoMbYfaoMaE8CsS9qybxx4164JvCt6guAVDd1AZXGvCv5vKqkXX5R7kH6cmH8msKy1LWLmxQ5JkpXB",
  "key19": "4soQqiRUtoFpkREL1QaHkiiP3yYNWAeHL66eYLLwBwDpYsnK5qevZQays3AFtwSeQT7oyLzcJKgCP2c9Kxqh1UG",
  "key20": "43EYkLhaZiKvxLtSn1U1LSNddhVUJM31T9HmM6qyErsmhShahR16Jovg21Qa9Ww63yN9ecd9BgmHPGuG8za42NkY",
  "key21": "55BcLf34DFX4GbMBLA1CxfFzEDT22zaLbaYDbdbhgnKy5QrSncNL27eiajw5exWNaarvNW1eajovNZiLe3wiWsRC",
  "key22": "gdbZVR2h5nYtb89qLd4Nxu6C6GMupK9WGxCoostULmjccuDzwEZ9Jd6YCpG442TreM41HEujjejsrkozZeL7FbH",
  "key23": "2hi4YHH9fSWjB5yoNvNJSivtuWgCN43zMXgsnVDDGaGWk46bH2YDAJ6oH5Hc1ESjpJzr8HDU3883LG2fo7jVvkep",
  "key24": "5W4H9th3o3p4XHXJyVrh4UkaroUpJeQKwhK3bYn1gDDohg7jgWk4KSpK2JMhc8GxjVUFvaDxyRUninFuehqdAxoT",
  "key25": "24ecjtRkBN58WtU95AyA8vdeHbZwTcJeprMomXsouYT5nb7k3dmhF1sX4gSUagrDKUjuRJoy76YePHU2yE7y6cx2",
  "key26": "4pDrexMsVqKCK25RXoWFkAES9GJNPTv6ciBwAx3kuzd237u8huHomU2hUxuYcYnTcciReLtFDSKPiPrXdBbpmABr",
  "key27": "4Z7R6KxrChonupsMvBKqb3h3SVeQECD545qqTSqGt9SuRRNmohFoy6GapJzpquzP3fEF4LetuNgd2e8gjgmQ5Tdw",
  "key28": "65W1RgEkStVdN6ijmKPDqmDu5WLVVzQFQXt4TQCo8461zGT6HSzGoAgdnn5Naqa6VUDvdkc8szo6EPWinr7eXRZK",
  "key29": "J5DAopBvxJfhBExvxHQp79JGuHSzJxPgDRt16nFtFxxZroqKJqDNpZQtE8vtPHiJTniFjhbmow7P8qeSGrguAz8",
  "key30": "45obLPEAYhAT1xyjyH1qfUYsc6P5oDQsGRkBqn9ju9Pwc5pruqGgsKywneZGrQTLLifMA7Q36xL6FyVvSp8mF5Ef",
  "key31": "2QMZap44RGghgZDX1yc5V2cmbf7pD9SV7WZg5EwZ2yNd8S83N93GcnXRHVAvioZGaodSvsuzbSj34Dg1QKsK4xrp",
  "key32": "2gkmkw5EzRUtWdfFQW3ihQsRbC5idwLTfxhmKMNKKkDNcMukncfHRs2QE8MAFYCceDUPCtV5Ves1wzj4ZtHbxc9p",
  "key33": "2Ty6zQTrnhZcHyZ1VGGCm8MDYPwo8pW7ktkRLxgPzYWtQfDX948ho7s1QhBPU1ee6m7fYBTrFYk5FV2mDbieDX8z",
  "key34": "4LabMz27jWW41d84pD1SfjRmmZd7cDNMtsUfx9REgjFxrEtPg3xndScqKk8WGp6BQZRwrim3Vavo9gha2RCJvijg",
  "key35": "2mQmTDc6HvNZuNDbqX6ZwgQu12Xw1GbGCA9QKeZySgxX87ruEZa1UGdwiT5fHNgJMPonYK186tpQkGBtfAP4kZB1",
  "key36": "3n69YCJcdQvb8JGML5tRUFUEt1tBDxt7jfBNaqMEh3LV1tCu4trnBSRSZSTbkwKfnWDnMQ3BtMg39M9psEQugzA3",
  "key37": "3UNa9SFcBt1Bu4f6wcLQdDUesFV9oBnzqzntVu8PjXoQYVZqXbB99yFkVRwDYiM4eX7FarpEPuph6ezGr8WGMsg2",
  "key38": "kp2JfiQCyZ765n9MiF5P41oDTU9rsLtLqvZVZ6WwNpufxSYWp8SJ8dh4tqVa379nFKywgspzkdrNJTxvwJyTSCY",
  "key39": "34etVAYKAgWgRg1H1f25xt4qtCqBrmW1nMnBWEGdm4finGM2jFRZSwvvY2DNySV4GjSmm1Gwgi6HiuXFdmN6bRvU",
  "key40": "4hfzwTVE1gzPUNpVkBg1pxYyQ38BFtoZBkkHDocBX9qZugiWjqhZBPML3wsHLbZSvccKUbwNKfeXy3ydj4NhoWEC",
  "key41": "2An6hLWTPXTxWduhkfNccF8Qma3agnfGXaRNdKSr7WawGSMxozH1ryZU2AkZFqN9FyHVoDt5ps8ET13Lemo3E4aw",
  "key42": "2B4PgLrVuh8X4cKu8zLxk3fVyMPdhkXKQeX2dPyj4RxKjfv7uu9nWmvGEN7NHagEyGx1A9eAGiaHTvCw2pmCE3WS",
  "key43": "5tSALXB97eM6kpsPSX3ZuBJwCdJsHKb2oXQiLKwABzKnNKbycrEDfUPmPRdtfQ2PmJuVkgdEteFbSAfMFws2ujEQ",
  "key44": "3r6LTsP29Tq9JRZMChShhmHAdqfHTnFWYeqgBpj4D5wargJjJQCuMz37kxkDGk9Uv6UVFefwoia4WVJLQT5vXC5n",
  "key45": "vpHXkdH3iWtdPG7Rm8Lqn1Y8YZD9ffq2HsPcT1VWSgYRWVD8cSw1KScgVdsRh6jAjprgQvBR3A52kkaVRiBEfwB",
  "key46": "3qkT2Kogy82Sdie5eBwzK4CnXNEwELVrcA41HYSnyaoVZ3aqsfswVUk3mVttaU3bktK2ioexSeYCNvoAa3RKDHGa",
  "key47": "FGtLd9ciNKVVz4VnxEWnDZjYB2SNdASf4jEKXKbhfQnUuDqYUXVzj4NE1G3WyVj9zvnB9T2vwnCz4q6VyEBQywR",
  "key48": "24w8W1owT2TjLHJDxmmysznTRx1feUqLiq8qG6rpYSu64VMe9eKcE754FPYXzVYXQsY8MQrwNszNqJpFmSZZ3fth",
  "key49": "5dSiZjkm71jAWKPy8DFxdHoSoH5HRQGBMzdoqKowuYC1VUHab8TXqNS1oXwuJ7poMviJUNPwvNcU4TMogCZfpJ1m"
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
