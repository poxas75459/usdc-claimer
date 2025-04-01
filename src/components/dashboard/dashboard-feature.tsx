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
    "diWKPPqwhPg7kyVreU1vQRek8TjUwSv5Pv7Q5erpzPavR6bXzpTCdana9X1FqjCTrqKzvL9ueWStbnE8XGWxy51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbnbjBYfBzdzHvWpmxBDyNkoYSKsPKagwVs1DtqjezDAZcYPNxA21oaZSAVmGNEpgkkKuu5YSkaroi5BvRg2qm8",
  "key1": "5VUqt9xEuMC3jZarx8nb2T54eb1FaohzMDUvUSdhchf47WUMRpxykGx1RjFyqZeveQF6CSbDrn2TcJGuHcKBGLeh",
  "key2": "3BYniFrrG77Umx7UQKu55eEBphYPg56tibJy3znTsq44ja9DrwooKr5rnasZQDFcLNeEJyJcrB267iCKnw7ckRLL",
  "key3": "2QeDfDx2SDtkfV8R9poiUDi7otuVRYcaNWzT37QfBBF4spbopssLQ8CNYmUPhGkNKBDuXsJQkgx3mmPRYKkgj1VA",
  "key4": "3kcFizr1cTrtvsQSqFcKRNxqNzFdjbdbNSgL2ZD2aEXsYtxajkrse95TjCKCmWiJNYXmpKn1QRTtNpywwL9g4E21",
  "key5": "KwyX6unK3dScoj4uHM7zeffiV6k7RzUKNEBnN2ThafwomH4b1cvSFniNYU28akqyjJR8Ny6UrQexWJPXV17qahK",
  "key6": "gDpmP5nQmvsFrgPFLmY9NoBpuQRHvMt9GQZ97ve7fN57Nb3meiF1MYKm3hkpmucJtqRupnXCVitookikKFGfiSs",
  "key7": "4uiTkD9AxRnDES6iT5bFoQsR1FzjHy6Mqh2tqnMbPXvEBMrxTzRcstQnT4j8CqcAoDUpi3ENkMuzY2Zv5YFFSWRw",
  "key8": "3yQS1GbK2QLX6MTuLAaDAarW87iALBT6cdFgEdNwQrbg9heM2ZWGYcVL9wgxc4SfxcWXw2vN5AvW9CECQXJGtnp5",
  "key9": "4LchvFrvvj2fZDKZppWmLUYoXYnKdwBVkhKoduuLyUfUXEMTbvrCgMR3iAW6BoNtpFBM5hKKpDZ4iyQ1DkS22o4e",
  "key10": "3AX1H8U29bSGQPC2gPetoLYP4pUGhHTWxE64DteiqtRCCDFkE3rkgdoxt1jr4frs4qgsj8nixo8H9jssfm7imavc",
  "key11": "23u3gVyYvdBknNrkx7kfMMGHQ9xBqgSatWhAxqVweBBNhutH6cdV7vpoFLQeW42LJLXeWn1dstoZqay88qHfQ1ao",
  "key12": "3bZerxe3f99KvmisPM89JEXuUqHN3usaMmEX9Q1enLzZHMqwUgYhS2tUq6Mzk771RkySfk1Km33GoLtnXEdCMxAM",
  "key13": "3P65FbMS71YEhmBLMT3thqPNEjn678fx75x1ShAeBf6d9eHc7jXJjiMdXYJs2V2NJF3tRGj5efwnyVd6UapkPe8L",
  "key14": "5RB8CgCA4dErg9YYKxkjjvc3Y3wdjStz6y5n4pktPpohTRLXRQuh7hkDFbZd934bKnvDwUX28xsQNWjZKey38HxX",
  "key15": "3u7X6LKpVMVT9QZHnTnGswbJ4sgjL7wiuMSnaVow2ByEVkvAJUn9qPbUR8oX3PeSv6YNsFgrbjSyUsAJF3pevFci",
  "key16": "4CG5CUrHxFppmjRxKP6NVARKYp9nw8cJXKhGcxMnivoP5oL8DjKmYFXWqPdE5mbZwDeyZZKZTpabAGzjKektHeHN",
  "key17": "3gmHrcTxXntFynjGrSn8s7nivW7bqE6w5FBASKNSrjBLi6vPJoRfVNntT2CK3ZLvYqFtRFGWU17BdcPCZ8G3NjAN",
  "key18": "nDdDLj5jwWyCFGzG4MK11KuT1zouXrvQ8G3rv3vRQxaAKKxzc3VAsjGwNdpZsqENDBARDsqwDYXYBYoibPHiD8Q",
  "key19": "49ueUx8zAqfUNdmeopG6jgE4r9y4UFD57NhsMYpPAiFSWYBeU7gyQbpSWegspUYFujZfS3Wb3PuUGnAa9fCjaAwz",
  "key20": "2w6GRBq2i59hREvZzUKqcdKkUCA5nFRLoWsgeSoySuQwECGex26dqvNMky9cUF42JraSnBHhuSkj9UcKs1Rwmxr6",
  "key21": "2EuHmkjWJdpqfE1FCiL57UkFq28xJFMxxvg5zxXdDtuSU1Pke4JWixB15qoViaMpgPMk1yUmk7aaBex5P4KmKANd",
  "key22": "8Ng9d6QYxWxXsbmE92jN3HvF27D4Kg84XVaEYV2WxySTQmfCwwc5BqyeRdVTYEjgNChEcQZCi6JmJRb5RSADuWS",
  "key23": "2WLcdWoh5wM9QqQE2higv885BCanDmR6VzJkdyS9ieG1VwPKWHnT7KPtr7azuy132sWADtuUJBd8YQwarYmQt94G",
  "key24": "xv9vsPoxonddYTKexUUYmX6AyVwaVVNbL3npJURHR3t5E6Xjrw3sgfRHkf7tByHuT78BgcSJm5PWTpUTNtcKtr7",
  "key25": "3hrT1X5hV1HCZvDGYWSH5i9eZKVp6ab6vbf8VrnYTE4n6KjdZyhKLmaRAef8YubgiTo1JChvf6ibz8NNmaPhdyat",
  "key26": "4hT5EVK4WmXTgqQ4SRaff2CTboJGuPctTP5dcAHtRjHBqws8whJjszWK1CmgZv25nRN56ZY3pRUpo99YFRGce3bA",
  "key27": "4DYKVY2LUAEtPM87P3JNDwUeZKfkrmfBK4xe6iBjUyLYUVocmb8db6kKJK8U1Gh8w1a5iYooLjpRKFGuhDSmd33P",
  "key28": "3VQv2RHUrzUvkKmj1cKtPrrxMry2DDrrkt4tchC7bnmVRZhwtLPeAAf8UVM1wA1sdujepaNY4RU7RudX84gxYHR7",
  "key29": "61PteF94rEy2ZUc5CoGToKBpEzeH1Z3Vnrms8GXKjHofKVidQ1cCRpcS8Y9zUgBEvQB5tpQkczs5WyeG4JLbe7d8",
  "key30": "25gHWX5duWLwpLSqJ2gVNH5HCUxMRchSxEbsDkG6gX4qfJ39vieLdcXEhC4KX9iHk9wefnrMrxfu47CbueRwQVdU",
  "key31": "ru5Bcs2GZ29zkKvHxzN3ffTqLfKk1FCuPXmShuwqEJ1uWbgBHSJ5C9S7pAoofiMpBCXwoi2GjLdJvBby1MF51ig",
  "key32": "2M1JGGJ5UeNYYP1DgCpju5skiXqQJKFhyny9eM2o5bv7catdYh1ExdkrvEoggKrtoULRKac18H5FdAGQhYxY62Cg",
  "key33": "5CpU5DfyU31XfzqqtLApKtzB5Z5cfYc7gQ4qGPLXXHRY65jepRD7a52cU5U5x2yHm7GQ55Es5DEaHrw7cJD3oRws",
  "key34": "3f7a6JoAswxekE2GvviJaFbQnU7Qqnzc2MiCBcYn43gW7bWYsdoW8BTUHG495HwhZWXEF79RMUx6Ndd47Xri72Xm",
  "key35": "5BB75rAhb76MpSRhdhSYfTZBTZXVkHEjUb23NHGpe9vPPvSGtYhAZaja9kDvBQXFzuuSXXM1DVaSpp4b9LnVPdBC",
  "key36": "2zKHbenMLKDt2DQGQRa74rdDZDAu1ZxwpUYNeRVDP9r31dZGzey5SATCdKHHkhzzqA5jC3vX7CdDhCsSeR5iKDwa",
  "key37": "3QRb8SHYJGhCczXuy8T4jQW6WaimxZ68kUjnYVDquX5uH5RyefQ4Rr5Mi1dZ8NwTGLfYuPSujsTmc5VPjky3eJQt",
  "key38": "3FyaPYqsKo5rW3g71k1Drs4qai7FsurN4eyhTdEosZVB77qR3UacYLJCygkoJjKjE2D7FMYHcY1C6WsoLZhL44fw",
  "key39": "4CG7KxFg7aZ8Fm8ZrBjmEPumqp9QuUBDXzpLaP52RKyuMKwUfUmNm1mRr1n1X1Rq8X3nshXBy7troMTy9rG1DuyG",
  "key40": "5cAAgu3ZAsxFUkHpbxsAv5sbBaDvSqDA6f5TegopnEmNjR2C2RaMYZok3XjEsMCMzuo7eZ7GwioLrxt5evh1EPEP",
  "key41": "4LyBw4JctMwNz6wWxREm63njB71o62oDTat6ycxA7AURkAECLtMp3Ax4Ux6r4193kd7kL5mcr8hzbuvdAhheeQSJ",
  "key42": "3i9fYiyfSdmZGEqLSmmEAmj79xiEmUdCTosQnuJbPvTNudcgGnXhCj3kba4svtKuoH9JetZCQtgvLsx6ksDYamaT",
  "key43": "VFVMjFdguC52ZWMRgDV6BSqGjDpesa4ZK8R6jwDH2aJm2j4hbWh4TzPUdcEcaNbWsBXBeNTdx7Zv4qHoRWvJucQ",
  "key44": "2GqVUPsibsNAL9hxQta8Uxwq2NNBywcnyqmY4EMUq9d2fuY9MPW2oM6XgcHCvKpGWRtrgyYizA3SmRn1sJaTJ7yc",
  "key45": "TtDVQvFs2JCgYiy3hEBPXTwqJ5SX4kiV54uc9MTD3vjSCXW6Pkp5y2DkYV7DZpwaZp64DUBSNdjiV2EuA4Pqkcx",
  "key46": "37bfAZPoQicvJXypM3P5A1CWbfz1vXSGeZicFwfCzgAxYh6ijPJV4pQDEoVBgARgAz6z6Z3AXcZhM56ZB3Dc6Cw2",
  "key47": "3SskqAFwxZnsZgjdRc6xtakLLrX6nJUVwfJDPHeP5QSWFzNnKy9ebNpaxS27R3qZp3dkR9UfaNG5DBGwZThqxEZP",
  "key48": "4b7i7KVZFbur7xTYUegxHcLainTc55bGRJ7WHG7NAhCSVd8dayHXoyEaqCvg9Jwc3HGyFC5XhUS1HR3F2TbPTQ1x"
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
