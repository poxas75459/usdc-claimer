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
    "46k7w6fUcCYfkukteHsr7PtBjtUnfNrCgGqq8sdUPP9kFRspssEE5kWCVepfgDCJ7p3opyauaaZAYmi1BtQ3ZPAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgebkEH5AaZUEymouBAjp5KqqwCtu5jW4rZaVrqwJ5Vh9Nx7eZAUxsmUeX5dKe2Qg9qBkTzNUkVT8bzKFStySst",
  "key1": "59W7pJq7qQc5XSbUbSXqBwcgwLZBErBWZPG9G5kXQcpqj8Xrr4mZgGD5v4P4VPmR1Z1hmU1c7DwJMHLodQVQgsvX",
  "key2": "3QHz7Wyfa7uiC3hwY4E7FifASQQzdVxDVAmzkcWeXa3H6EYBcj6pqnnnFnaSVinXMr6rkaycdwMkb1zWUEmabCSV",
  "key3": "5rQbQawk9ahu1gwejadHEMFgmEz7XU3gFEvuWAep44AM2XZoh947bWqDFXSp2qf7LDwH4aQYDWaXbS6bWfKY1d8r",
  "key4": "5b4umUaQrB6Gy6ZDQasYiaTsbedei8FbQG6eyyas3RXUZTiMjCqsVnvDavTJokECN1HxSkeu7MLeFTWChwTaC843",
  "key5": "2eo3ZUg5WyV7khp6mMFyYnTTTvqLynv9BFDCzVeTi2T7kARBymj9jSGvXsTTaSQiQfCUxh6sUpwLEySip6XQS3Yq",
  "key6": "4XNbGFev83a1tNphHz653NkU4hXKhiXRLpuWJjjaY5jyLYde7D46Vb5JYw4t1eNfMwDHttxC7hikq5ZJSyAsMSW1",
  "key7": "5gQA7jmyX3YsBrLw74A82ozpy5Pqh2mb4H198eLVAEmwHjNxGsmTC3HNiHECrhkrSwcqTKJRNDiAb7RyFe9rhwsc",
  "key8": "4KPV9aeAEdYgaxfeMJmC3vPmrEdK5PjNLupDqWm6ZxUK673Wr6dLcpathKZdcCBzGxd98Bcz6kk6GxS98CiEJXoy",
  "key9": "3XNQ8uu7htxhQmdx4zwvRXmqfSe4mZ27AfKLfgyMdnmu9tAs5JnbR35WXSswejgZ6QBpKbzoohR3aLfyV6pJXsAC",
  "key10": "59LmPMC4F2PQm4KoG4MJh4CLacqrpfeEjc1mibdBrAk7EUsMGxNiT2ezLkHKQFv9hVEL49NasBNwUvqnHwYVuKaQ",
  "key11": "3c6GsVCnWB66vNcoq74ivUCj1XjNCrmEDx1VBfXJL7LufC6Pud48ijmD2hDijTgfYvL2uCg94o3APqDNwQETM6np",
  "key12": "3oV7w1RVJmAQCzhQs5nfTuYEQdhdfdFTDbeUEPFqAsvytBtaqYRHMgrCE1Yx6rU9zwjjgycLLzpDQYPHabvh8zeV",
  "key13": "5g5Tu2nkF48o9ALoP1KGKgnCToBrMRGA3JJdhrvV91hWn4mB5iTVGjEnb3yZ4J3rM7ZkJFFPUz5AYUyAax6qeBLE",
  "key14": "4346B4tWr2uMerLjZd5jo8nExEkZZTakXbKbyc9fksPuG6PfSCcNisjzW977YXfrYp2ETqipDMkTok4a7Jq88nmA",
  "key15": "ALeqzy6FEEaWb7iZVWMz6bZZhmQxZQc6QhqPdAVyKkb5Aq7rcDWxnfgMzbqwdyQZYrNeY6SPYY6EZV5xXmSTytz",
  "key16": "4sXs97xAAooeMhgmh4ZpUGyPzY5vFXjUa4fFUues5bif4zx1gSfzmapJP1pU2JhVkrXJPaEbjgTeyc3PtCBzsg4F",
  "key17": "wTNsFCo1Q53Ci3wYKUx8nzy5H7fk3L9s72HGtGHMBaDgZcbL1ur3cUB9PjN2cEwehuiRJSsKKGUYdGhx1qx6V39",
  "key18": "3TzPgyMUYdK4TNVRuRGZKWAi8AiekvHtEj84bL1ZZhCDucmueNnN7uB9pi8c6df3RFrksi1TvsxgqRuUD3MC97js",
  "key19": "anx8gLgGQY5rXUfwBHwspwRbCskmXCP2RPhqY96ZABV4vg9m6iDLCDJEEoj31sdytAfjEDTii5GL9wFr5hhXoTQ",
  "key20": "edugtD75eShoPjVNGL4yoKHS3o1hPmPgXgbKq5VsYUvmYmaDdZgU2fmKnh6BKstEKaixx8RnikFtyzkNB1AjNro",
  "key21": "LDfL6JZixU6m1PTp5REJWGpu9LZapwKABKKxtoZzcovGgfdBY5h1wMr9DGuE6yvXTMF7CtFpRiDPPumVfsN8Sju",
  "key22": "4LfSHwavU8spwZddAtCBJzxQ9hFn4W2TYraH7q8PttAqrPZX6TsMpLJJnD7eVH4x3YDyuviFUtTbyU7gA2FUJf5i",
  "key23": "X6ZCF1dyXRCKC69KytT4m35CLK1KMnQd662j8wgUKPUa8aGay5NvWHkBdh4dW3DHfViPvDo7xTkQKq52s3UpNTB",
  "key24": "4irUtBbLpiaUmR2UjGnSGsXQGxcUzN7FB645c23WE7UnQPD2MqdVvnh6Pd3bSzBpcmYcpLgS59YnUWn5sLUHnbNE",
  "key25": "3ferZUZxFSqNgxjG9vxs5vjDUmq6HCcDTUACBa3P34cbJ3UNK96UH3UAXoPVKPK7ut4gKe4Y4Rn72Lay18HcNe2c",
  "key26": "41mrxmEnXPKsXNwojx95ookaoHC6TGPsHhmqTvmKL5AhhG8EW4xtiPdzEVFJqroCrba1YjrC36Fh3As23d9ADeEz",
  "key27": "2gaGhZM81wU2FPKAp47UoSBFmoW7uw5g7FATePP6666b8dQwpi9Afsudv2CVD66CpusZV6CfmRNfbHgLe9BSVDyh",
  "key28": "2VuDrdiGYa7z2ajcYpxJznuLwAVADh8D3YWVf6Jqqia3MqHzNHZbJ6K62PYVyx5MkFSsVKzb7MuHwCDL5mhMVpcD",
  "key29": "3zmMNYGRo6j9dRNaqcfvZJFs6JAcSyUvUczLF2ht4UB9m426ZgjvhFRE7SrcAPY5YqYv29UschHqn9BCzhSDMHgx",
  "key30": "4uG1PTTRtACmukKMDq4epYrBiiRL7ktPwRX3KE5KQ4DLuJxiPkEhgUHqTH7x4YwPHauUEtGcQe7PdsLbej33pJ4a",
  "key31": "swVhSHbMFrGs9ydsTCuPvduGAqnouELwwemj2GZUazZ9zVuyyorDDFrQ9Cc3f8GktK7dSah7kaoBVhixhygTcx1",
  "key32": "38UFheTyNWqNFu1M8U6T1agtAPJFyzWsM8U9kDUEzoXWJBX7Smi7GszsCsJ2fmkQ49A1oReu3qot5qyk2W2YCAeR",
  "key33": "4oNidbVWadHLrbEjyGypDJznMCGRTW6bvyzsbwngmynVkzRKfiHYEXguii3v2YRkoZCpK6rzYGwReJDTf4wDxuJS",
  "key34": "5Yrshm5QbKopSUUEWZtdGkMThWZpZZkF4C5Mxpj663WLHrmnfURJwMbGse9wHzC3hyBnFdNjVF7FvCRnzhUPeb8b",
  "key35": "3f8QSZhsMYJvaUfq5DhR8kzBc9dF4n12GRuA8JqZUmHM2dn9kWc3ec7eQfd3arzzSwT73LGYfC55gQ3kv4LtfWuA",
  "key36": "26xffH7VvYGcMbNA7wGdnNo7sowYnGGbqPRDWc4v92WsUSUjwZqSGpTH1K8L3Cxj2Sx2AFaYdroBuXzvmRPEahMy",
  "key37": "68WFGUn3R4Q59iHsjtAzenqATyQFWRWuFKj39Fjx9pC65N1b4uz6kQJRdXdH5TUctrjSJ7W4FtUgDnBoA8jp8XK",
  "key38": "5F8XsHaLm7KWcgKKa53sY8FkvTfQRPXc1MThvHsfxxXMzxJBL3iLhNAGEHDwEtaWET6aqCSTwcteLAPc8PHUnbEH",
  "key39": "bNvBxZyrxkNGra6NYAG3AavdwueQfSAj8GDMAT7JxDUzkC7SfbqePnHFFmYxMq2Z4Cvkfuqo268D6Qtprs7MCd8",
  "key40": "5a5xZHMcDcaaSzXRnc2qR84mSPfsejGvKhrZnPsuX2y3JNkNgzTFyxZHm3hGfVtsRBDLPTfDq3a5A9eSMWK6rD8",
  "key41": "2Sa4pixGgXc4qTbj8BPVopYgtupjZDRQbweHXjretCovAoVkVgWqZHADr6UZqRve12kBtkEQpv7gAVTWHVHuoe7X",
  "key42": "uQWVSMZsWXHY9DMQLd4Ww4gXnPzUWgBEni4qdnAz3FbNLiAUfqAVefkWU9RK4E79rN2mpGJjhFGLX4rrTxfakrZ",
  "key43": "3eAy3Tq1eYAff41w9hPBs5exrB2BrBCXxfHi7t44FBVntydgJbaxFmahf9PhYyxNXwBZaSHWLfhEfyrgZYoQXCir",
  "key44": "3owsxb5iZaXaPdf5Ve96RRzUDYjNrQfeAWq9MaoQgZV493mjvQbsE1orDD8iihHwfH6ugexXPv6NRMeJnPGF6MoD",
  "key45": "2UZMfSUtEYztriB6xXTXNZtRT6ztMaZKUeFRYQpQ1x1nbdE2g7NbgvHhvacNFpejv6sRxrq82AMqt3BJ1jJyBA4r",
  "key46": "63gBPLyT7GqXp8HAMuww7Rc45z1wt4eSfK4h6PUkGwbahCDhPFdhCQ2Cp2kSMW1aGjeXboXjSXiY7pKKHMU2wUcQ"
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
