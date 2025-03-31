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
    "4RhGZ3gnQT7RMtuUfrrXUJp28WSBihqEdSpFUspYxAeKsQR6NWwX7q6aFf6GREEgA7aKCkymaqW8j26pkcmxiNV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5cigMNsGhaJxK35dH7kKcssF5kb5K8JAtA2UcrRVoR8hj1rFxVeBoWVWbPtV3A8NNZwzPnZg9Cbet7NHcPix2m",
  "key1": "37qrtLCAMXd1rrnM7HnuC3ELPFLZUogTtZsWQEzAMqnDRFHwsuy9ZNSVUdcjzgS7ZEEGjY1ckCmcMR2exoXunRwP",
  "key2": "3vLxp7XxvJgPk3DzUe3ZeghF6K2c2csFNPRUr8hqDnbXieuX1KWU8v2gD1edediYpAFSyCHC26yJrSsCn92dHf36",
  "key3": "t4146DXDTe1x4SKPwbP72nky6R8Q5fHb8vAF4XyCQg3uTT5uD1cL2JE3VZQkBcrqsjJAu9xRwais9WANWjWiQ5Y",
  "key4": "5a5gGnqDqZYxzaey7ahqyf19tUQmjY4Tvon88tFpXyVg1eLUo8hF8DajDUmGEvacfPvoS9gPLsM266jpAd1zW6yT",
  "key5": "31XfmjTZAUjiMfSeTru5k7zsWehm6BZsY2VFQAP67C4gwDZm41MzfZeCb4V3skRxpNdQ5v7JrBfLjHv75v3ngJjg",
  "key6": "gSVjPC5r711XiJ3tVhhpdqZzhP1CHskyzu1XxGdodBAChaCJq9iFvexMCx9djVcf7QdNbGgqea6Md9xqx7vjZD7",
  "key7": "yiZSqtMJngRdvKg7kAvukjnQvwSza4MHSwU1PCe3fG8vAhzS6g2yPc8PzCCcY2Awc8b66WGLuduFo7YWF3po9So",
  "key8": "42cyNvUWgTp8RAjh3c1Q1CQN36zM3ZM9KAa3ixHYYJJrKBUnFo31HxtFuozkGBY6GjNzGkULYigkcTTRNSeeb4Hq",
  "key9": "4xsosFdwV52pKTW2avz8dJ9r22cFeF7A7w5Sp9kRPYWuAySBQRN87EEnbPQQSrjXqW3Raq1TnioJhTKV44BHkbBc",
  "key10": "2uXkEnZTdk59vqYXqLb3dk63z13figdkTP6epeynxEui4XUCbVbqh5oxrUN9sbByCTUL4CJ6RKUbEgnpLPZwb9GR",
  "key11": "5BSFnrSZCnFw8cUvZv3DNUauunbCouvVVvrbYBafFbo6BJJ6oHJD9WspQWEXehiMGqS68gmriod8SFLYm4Ps38oj",
  "key12": "4EA6DthqN5PwRM1B3jkV7GRZDJKcaAT9S4CGX8V2KFycd5bXYYH7is3ZpMwvxHFgULWcrMdPAs3UjgRpHcAe169f",
  "key13": "25QgAqcsFYQ4WfAVsmbQEFEAjX7RWwp1HdWeGC5yJCtiZWqufUaCtYBetxiTzu5ekWyAB7gUmN9t7ue66JUuYXTB",
  "key14": "6AbdXxLfjAoK6pXGHvYU73SrFDbohbqWVYidjagXQLsrXEWRmdDqNjcQsgCPh2jTED4e76m1K3e1iVszmUDPx5p",
  "key15": "4Diys6jQEbQ4BLXcwFEiDTXkCH5ggA6iRLN75G5yFkxFJsdnjuBqaLWhF5CDhsdaKqF6zaf9DdG8ddr7bmtBKGeb",
  "key16": "57q8HHeYxdr7pQqthdhcSQaF3i7zvXSpL9QwmeWK3kEUrhjbAUbq55BeKwx5fgwigsGbnTwqhUzv3GXhXANrd7Du",
  "key17": "3f4UX81Li28dAxzTC1Ho62UyG5JWjS8Vy1iezsfwZTzdTsS12zYpCS784Unn8StwHK7y1wUgC2498sUWu1jg1owT",
  "key18": "37xUp9nreRYrJvj13CTR6rZw86ijWqctL2ebw9Ey31qMbnkijBvoqe3qwzw6jz6GBBTG4bbLgrht1fLqD2L4gt7o",
  "key19": "kfvKfVdh2kxnUuJUMb9rBfj2Bp9UKg6Ccz64ezZpoT5FRx76jtGnLmVkxKZmHenxf686qPx2C91iVgcKgeXnLW4",
  "key20": "2MNBAtLgAnLgKvqZVFaFe3cd3aNSUDxse5Xi1F65gVxcY1oio4jyTrZ5fi9Sf5nnC3Zfj3NQF2RtEW8qRueJU9cf",
  "key21": "4sQgW5M3q65athDMoHWrtM6ckHrRTzRRXTPmDMLAyWij7KEsnf7exChtLxNfV4Py3kCM3xrxVEFSRDPcr5U22p9V",
  "key22": "3spyez51zyDUHsL3hcaHQR36tSsxQcVzCpyGiBsN8vtRfQAxpwLSKZEPfmNY1DMu88Pi4A3amB3GX9F3JVxm3Unw",
  "key23": "4rnfw8F4YR91kMzHD8yEyVGwVMDBJX5ncKZqCVDk8u68p7LEyE8uTt4b8R9yPrAHHWEKBijkpvj8VYuMS4ruuFda",
  "key24": "5rHocPcYYDDumBiP96aGkeV4hJ6FnwRVdRxqMxMSy7PgGNQVqfZbaEEA2kG92kctv1AvyTcPBmJCycRoqjBA9qsX",
  "key25": "5PX9Sg4FPSbcLUBLLMj5HEywJpLSs66axm5Bmx7oC8w9QJJ2TZkBXSJAf62E7QyAe9HAnvhUxTrNto4KMvGy3aME",
  "key26": "5fmEFhF7WH9MGPL3aiU14WuKJ1AsG91hLKPzQ1tTCZpA7aFmWM45LkQb6pfLkHSgmYgLW9kS3j3qPZCbuiqFxPxX",
  "key27": "38pLhGNiNxMhZj8YXaYuqwXuJ34Dh2xu5EdxTQHP1Nq33SXHxHDDUeHqTYjRyjjYHXH7xUpfgnXLzovP9gBiF8Lt",
  "key28": "5Mrm2M8jPoBCXgY2QedETMvKp6CJKNx52Weo7EVvmfMwZ8v9ajJhRBbZtfHfW12m8EQarmxUYRDyPtrdpLLNGX7U",
  "key29": "6sL5y6NnDVVbptMPUNw65WqNKP1FJozb6nQMdjZoQYJr1s3Q83ALn3gDyrqCsiL3DLchsHryx8BkGnnMPYUB34C",
  "key30": "EB5m6DKASdZvCws3xEv96CvgrYsTM5rVjJmh7hdoh4Pk4Esz6MbaTnezguSk4DqyftpU1gGzEMQ1YDyqDV9hfkJ",
  "key31": "4tpnN4BgbHNfxt7WaxAxrN3ZUcKL3uDk21s7sjV5RCSsHyZ6VtYvU9VaMrwJKxFWTWb6XMADhd2qEotZf6bLfLNR",
  "key32": "2W6vo1Pax8K7zPqHbvnFKLGh2aPJcd4WwQ9VKjc3XLNyC1ZiM5XcT7vJ8bkNjfuyzF8oQYDwTYcodNRVHLMAWCyD",
  "key33": "kSN7WYTUeaxEXsRMePhiZbrNRVNwgJnJ1iCAmDKVZ5f1VenuJPxjPZDyLzKfc9pEPXq25UmVUHmii8zknUjb3pt",
  "key34": "KhZfbRPiSk1KSasQTyCgkr3XeraQ4yGrUEqFJzVhXxmfCaDTZ8zV4t49Je4aVP6PvtFmGtw1TZvDYSAZEU3aHE5",
  "key35": "37g6NM6Z8FE1S9bN1D8deQc9f8yi8EVaegAizhy4kwG74auN89NXMPzdtmZoeyDdyLLDHHnpFQZMXKN2iRmW8n4y",
  "key36": "Bg7gNXXvDhFAaG6zxCNNnTsVEoPRWyXmz28rBsYMjnuKXCgKAAAccKqTM9dfwhaGgFVFv4GdXG96hCJ9CYNkFEo",
  "key37": "5hnZLcuUpi7aTexXcmx95Fg6k51CrhqUka54Sw7VMm11yj6mytschMNBLe4kD3PUia5PTupccAhk5dqsuoqcASNV",
  "key38": "3bTm5YCPEL5dVqF7wW7Mth5QEKskukDtaTDJNfbZx6UCwEKcoztTA35mEpk9ryrJrJV3iqrckKkKg2TJ6Y2iBJDr",
  "key39": "268B8azDDKzJrcQjzShBBdA6mCU8UyvSETuhc7NaHuBUcMwTvKQrxmoMDVQ3nLMYemBXYC224EBtCUyDJntzw6Yj",
  "key40": "65FuWTR4fCyywxnY6LoXRyNabnKpmCcZVEkATWSBeuhEKovdMhkpzpwKQfdGvoSb1P9upHDFTRHYrw5nUHRy7Gjp",
  "key41": "4P9iLWyjUA52aoZGb5zufPDmaj1SsqRx1LZyCdEZKEwgwfooBCNLSsYKLsVn5Zr54D8LSnCgYbokfTtqywpcjJ5G",
  "key42": "43JWSwnDddAbrrBZC9bNK7TnLY7nTFpPXx567Btm622xgdBGg5DXtNn9cZkVxpEVtefLMLYc9xmYFsbWC8gipaG1",
  "key43": "4VqD7YN53VcD5nQKvk7M5vi4Pwg5PY3qkRHBs8b1De4n5sbCWEfHTHsYgw4kCtbHnPi2zubhLLDs4Rfa3R4wvJa3",
  "key44": "59YJQrZ5vaPpX9rbN67YSRXA6sjx7d5VkjW9eDrV3kcWHN4knbKnxYArLVuA9B4eygN7AXSWy5o2tVrLLx3YGHR3",
  "key45": "5pUcFhoLwvwRfTKWyi1MVrfhq99MZm6iAZXtqZg8hABQoGncFa1R662PY7ir8HPvhSoaK26cHc4B1PCCiCjaTGDv",
  "key46": "22Q74wqeboxFUSwspxZP7H9Rn15GFJA1rESRs6MjuB3pktXkKx7UJTYotuxyWgc8rXtghPBrE3G33PjQiesQcx5x",
  "key47": "5qWX5WshrnWbpmUBya3KQoBqscrkL1yitrCKoq4yQbWDAGzHKAj9ywdvX6p2NKhjN6ANSruWEo5viNqNgsofxi1U",
  "key48": "5ge51wweXy9Z4caLpgWtTZs2KuATyNdw9j5iGZsFPDBji1nLHe5WPq5kGjXF43iAT26qrJmegUCqJqgcNr835jhN"
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
