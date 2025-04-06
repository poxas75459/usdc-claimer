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
    "5SyFRXS1XJSZes8T6LmwxsgyvWwaQEsvU1wGkB7YxuFaqWvA9qYmyc9jYEsnFc3xc6EQ37m1bzY5hJjZp72o2PxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29LiJsYDh6LfDCMrp8My4skYFAyLijeGk62WDrFax1AFXgB665Hb2GaHs26BCfoXY4dzVbZfjtvaeZhJXcdqVMkE",
  "key1": "48nsJE6oEHSsxZ2NWHoc2mhtCaXMpRrCaNZnMLxjkVFKpTftrsD6LwMt8hz8JSCZ6Q5k7t8MBxui1xSeMpjT2hMw",
  "key2": "33DYFDgoMRUx859GHzkLsz4dZKGyYUTAc3nNnV36e98PBiXthYvJBFqDbkbracSn9sBTqZTL421WNs2yP1EpErQb",
  "key3": "2EdNDu7utoD3VV1BJGnJG5J7w6XSs5QD4qYKEdHRnTVgmfs4m6juQX5ekEeLqQn9CtWo49fMXgGJq8Tu4yAhy4xU",
  "key4": "4b7xACmcwyECGS1xCFh49Hf3VGz2rn8gHqcoj9T6rZZ3sUbXauVzbJqHoXNwwmG4morppmz487PsN9AxaToyouPt",
  "key5": "rSWZ15GHmPiB3F69QHTkQpMqUqhmXpjYwMWmWJNAvNJs7nRw5m6cEFghGSs5fTLRVhRSGsCQe53Pcs7RGkigCUq",
  "key6": "2iyfmMygwaFAxZjLkDrq9X7555EzW9T8VyE5Kc8u1yxg5yQg9uCCHcnb9pdQG6ui9c6F9fGrBCAU4UefAQkqmnNg",
  "key7": "2WpytuCmGBHsdLr9m6En3FZykhaCPa5VgZPjfsnvLMyvDhLfS16Czrr5gLRQknA6Upx1dru3WtbqJJWjuXBh9uRb",
  "key8": "3Nnp7KsCcko8kpXnUCZVoQu9qDPXU1DP8mCCCKMY3muru31NWN5A2ybFK5io6TV4qcwHv6ugQFENEsydbgn1QRet",
  "key9": "5AarPpYnM9pf7tSNPZnRZvq6rVDyabrxpdGRCapYkWXpXqcz2Ksvi1LfXn6HzwUPxd5skuMCJjwuL65Q9PEDoTaw",
  "key10": "4fyrYU7Bjk1qdcfU33xsiWMTXmgXjvaiD4AkKbDz5C7YkyQ1BCWM3TMxmsS9uHVXU24Lu8RGfEX15yT4e4Ksijzd",
  "key11": "2XYoNUVYrfn4FJny8ghW4KSicVwie2LtqrFZYuLfgtDqHToMjuYZgiMvx2miKdEss4DRUy9knQLCqjwyxU16UohY",
  "key12": "2P7WHCbiqdLQY8qPYwf96VmuseDZTiCY3sxsHKswtaVR6cXM5AXgEcCWQDLBAkp8j1ufNLxfTN3QSkzCgvETFAnT",
  "key13": "4pfrkxZPGDoRaJVguLcG2bZw3iKeKBVsj4BJpbCLsDTHVy8jee1Z9EBpmfknBXQmRi8evEonvx3qBDkP6euWZbn4",
  "key14": "2De7GUUxmKLTprvzF8Dhm5BxgquH7mshot52XYLgN763dih9DefTa1oVQmDt8ieCSrWJamMgbptyMWeMNhVxyJz9",
  "key15": "rr5oUobbs3uXR1KkWTsz4bSfzPRnmiGHXfYUhMQ5fiiccGcbcbkKuRQLuJ1MBabrmcq3FiB1eaZsRfq6viQXfHs",
  "key16": "2ZpnKpwv3rLaHSVHCAL1pKsgw5LbbyNHagP1G6d3mcT2CSfJRTGVLbC4kja35WRHdJxbUXuU5Z3b1bN9y9U7m74F",
  "key17": "4yzE28AGZiiADrnzL6e4L12VLgnw4S5wwx3Ax7sghnNUL9V2oPseE7t4eTe9zxv2rvrPZwonDJkJ4HGXH45Y8YoS",
  "key18": "jEmEvvxcxnjDxZSA3JYasoF2r4gVspAxLqTAcFpkSJU4onnSg8pAYQjQuiptHVuNp6zvkVHxAUHe4mKxJLQ35Vz",
  "key19": "2LKxLzEseg9rWMgBrjzzwv9dRL4gX3thk6WMXaZakSqAyV3X8PDwVQXK9LuzE3nRfWSdaRfx6ya1CuBryUyFz4Nz",
  "key20": "5hkdYc9gQgRjYYCqkAzsGsKyHjdZ5w1vtctQUxYSDMEwVLNq1sMQ14u3DVKN6AL5T5VqxL6jZZhaCYJUA7m4dQTL",
  "key21": "4ep2DRajZfRpHHt1RaTVyCPQWpQthpSBryN6bM8nt7fCRdFZLvUYuDVjDBWsg1Ncm3hbRbvX9oLos3LC58Qnk26P",
  "key22": "5PWUVPW2CAKzGfHKbnwg2oRxEEjx8kVgyxNAfzJTbxioMGakuNVJi3mbBH4RuF5PEYJCdkgZw6BhQ4yWHQJNphia",
  "key23": "dH7ueeW6Wr8oxhxBWhvHGeZPZvDtbVJ1rGzNaqKFcDBcwA6jXqhRwgABo6Yy8nTFfXK5K1k4v2aYDVywA9yJ631",
  "key24": "3dnC5aZEnVutodDHa7DY8VXT2uPREfWVogTiEnkFqdPiSsRtVmgMrP68gMu12CK2f1R3ay3TPHRtKMiUqYW3yR8h",
  "key25": "3Kf9iSZXG6BrcxeMaYtybwRxr8HUuUXNtx21DozfbciTwaTiYjox4mWuBK2MREcniJFoAfjxhrJw4zdV9W71qJ53",
  "key26": "FKvgcaHC4Uwv1krJna3toJXA5ApfTauMbYLqqibip7fHzwqVJH3bqA8Xw9AhZYWmokbPw1waYyEwbjMjTSdAb5E",
  "key27": "43gaywtaFCsJjC48koxKf45ZH2excjrdkJ2Vjv5YVVc44ThY26AMfdEr3WRPG7ambqBxXXnjahKhDGcmikJNgwk8",
  "key28": "2Un4BV7AJgrN834bM7frFjSMB3Y56xZJb2R5TcjTaBfTgXRia4kmZfKppURgRCvcuA3h7WtL7NUVkDysWTjUf2XP",
  "key29": "5XpCKrpoLFcUis4ZcuRjZZJHc7HyoCL5bs48G4DtMHs3MtbnfXRCeQUUcEHA6e4Yx82x238pcqanXMZ92AXh6Gte",
  "key30": "3zFTQvd7xa1cDKRQ7eU7HAy3P1dsUUYTGHVzDYMpShzh88prt2LJir1mBzpY2FXwNtqyz9dE7WbTgBr6CnnRDjz7",
  "key31": "5Xub3G9duC4pRpoiorQxDh3HpiGHh2nNR3eDCBgDjr5cCDT9zMcHvAkaGx6G4xYJ25RcaqtJg5quJwNynT9BYFfn",
  "key32": "EAbZpACUYCjhNh1ijhzxcQ39QSWNuFc6gNWvRVq3DbMEwphk6LNFRwSL6jby6i8S74u7gEv3DcoLSYC7Cns2dcK",
  "key33": "fgMgw2TqcqoZHGMmv2hwfJ1BSbgcFuGTvMJXPh5uNiMH7zKaRDdTvuVswcNZtcZ1WTz9g8cy6cDJ8rrqs8J9faW",
  "key34": "PjfqaSFJMUx8sSBzpudmq9MiGZ8NEaoXrcZwM6i6THaKecvwznuLRDRwBiZRwERB1KX78ig8NUgwq2KERsGsFey",
  "key35": "PNUJ6KaBVrgzm4VrkCRenx5tumm5RR2NKCBWHBm4kXR9BeV8eU2dK3KxJgN7z57bDVMV28CKJMH1zKUdQyesmaS",
  "key36": "3mdXFbm9BkCP7QRMJr8znYrswoHzSbqDx2qjah95N3m3q8bhrE21yR97Ushhk29UeAm7x3BUdMvjfztzEskcb7yv",
  "key37": "Ey9MQgCPvVHi71pXEd5PojnqAs3UmrJeLk18Y9yqWxeCndbjJEiiK74h2wMLDM16rSJLYJkA1Pd2VHGjBqZHocV",
  "key38": "hjCETJGSzkdzxBwjGMDWFMv5HZox4aEn5b9m9uJEPSwZCrrkbn7twM2Gz2cFtdgRAyZB8ZFgRzU636bQj8XNUFm",
  "key39": "29mDuv7wNNoVNuoXjZtJcgbbTJ1CXxfGUDzfXP3B7KuWvxQNJXYbg18fKhf7vQ61okVVUvG2rWoyztGmFSY7m4uW",
  "key40": "2zh6VXzE269HQKAVBwoW5FGuicvhsi356otxgNmq8t47PhfRxk4mMnNRoeAfKtn92QmqfmAKcXWmmFJJcUEDzykp",
  "key41": "34qQXgTBNYQAKadwSz6FwjUZhXTH3RNWYfTaBNCnhAVuPSfqyeNVzccEzPJ9ynbDxiRZcRzVGZMEk8gZf4z9MYFT",
  "key42": "5ESJHovkAZNnaBpwMZWe2t4UhEgqua1612AuehWoApgmQcMEBXrgZN8aJtu7kJEz3cAfnjNnuHQM7N8YWpoYAZtU",
  "key43": "NHNjiNm3yhCA59cCTsFcFHq7gUWrrjmsUV2hZsEU36xovuu3DMGKXF71cAvvvHFagEqhA4KRVNAZC7X37M9Hicc"
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
