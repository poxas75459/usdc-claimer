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
    "4AYVhgKtEgTe6mUgi1uGe9xiSsaVr9x3de1VuRGCSMuLcpBHu9LwQ4FBfk7eSHJdTbJ3yeyZ3toDm7JsXTuoZsht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JMeHWiWhZzLPE44rfe8A7BYcsKzAGxRUvbLbAjd9z4Z1Z8JqgDm9GPmyYA3QWKiQnRNJ8Tm6tE1SBferQEhyWbX",
  "key1": "4Y6b2gCuX35nDLFG9C8S6fB6U5ezg2EcuXGeeLPaMNoMF64kAyKT8WuZjwdwpFiPxxea37TXeZ7Sq1sEqD9zq8rC",
  "key2": "YTn88oUzJNENWWbAUYeSHTxodyFXxjiVpaggs26LzPSBs6Mbgoo8zhNvV2LcHbUjeTHmj4uWJc3gLBvzaSKRKUZ",
  "key3": "5q1zWPVDLr6YueBNrKvircQCfAYN6gXBYcdCeSXTJeiAU6vw7wfw8bJPX5o6sh1ZCc32c8RMHyUCoTLEF5Mz2J9",
  "key4": "2apjx9UTYe8gUsFPq76Zq9Rnr9HD2etHPuDSvgxrVP1BsYDiFLCVSmRbVUkVbP4MK3xMBKZ3ns9ZK5ESmr4Awksk",
  "key5": "4x9V5iqomZqj5QpPZBahkdaEcUmkXTPZjNytLKXTag2hbhPfbinPb2D6CehTkmDGpUy2QUdxsAL2jmkhmLoi5P25",
  "key6": "4zzKuVmywgp2tGuXFGW5E1etTGcyktTY2cGKRLACDGYq26Tq4P2hVkh5wbAw4dvsqbV8Zq3mnwWAhq496A2q3XT8",
  "key7": "4YbGRzvqLNvvx8h3jMt5kQzvBhAf2sKpqcaX7KSDKkzNL8J1G1Ca67mxMLjvCSSS1Rcj49ThPJxfgqFxoFP3sd24",
  "key8": "3NVojQTEvqrduEfFAE25F1qXSAA2SWPpybVfmnWWgdhdwheuvARQwsF6bAYzGbbu7vthEBUX8idocEVcUxNKA3KV",
  "key9": "4EHnft2qJRn5kLhBnLV2dp45pt5UZDcT9xfntMTua41AZL3UwoUUUhVpSpcV7A5V2kzXmHmF7Utb6eDvayrkEQka",
  "key10": "2UvfMGSQSw8KHoh7S3c4tsCtKcjEByL8LnCCt5Ciug45parzUNetzkgoyniKb3EGgxNy9PduCeSvPqHdtpo55oVX",
  "key11": "4sFtgR7BPNLj9fZfMVuc7kEvSFXaBw1bUTYFhS5JQ61NesnTzicRCgy2ui3jh9RgaCQeotrvBM1ABpGBPY4Q2q6L",
  "key12": "t7KumrxXv6bmURUQJMLoaWXL58hSSoR4TabgZnso9vdD9cgY5SqesqLEUKU2kyguyi7gY4FjZaWj6CMfJPdk7Lz",
  "key13": "2vsXV77LeDoaZe5o829TCPvSc19dNvDuuuExR24qVKDkyiVNTETMVFDSmFWuPDGkS1sqkGX2ARdi3D9VoLUsBZT7",
  "key14": "5t7UY1V5Ygp2gvS1uXB8Az8YmK18J8Bo7fgwdRCGZFoJboJ85k93kCr96cR62EKcV2rWfvLSyENqrWvksQRKbZ8W",
  "key15": "5eJgs6kvzWXFxw2YCdsnbcBwY16PoULDxdeUF9v9yB99svnCYTStaUED3Ypu4v8BYfVWGchjN1c2dJTcGY8HqGww",
  "key16": "4g4R1j98VtUq7pmgjFtjQ5TCZPpKJNUiwTb6qjGNXQo1eywQ9XVnDDX1iFBGD1UBMk5hPE7hpKhwHguUxBfHZ9Z6",
  "key17": "3yFgbH2GXX692vMTweS1mMP2Lr1Y5W6sQZ9A75cZGJo5dh6CrYhzYF1JXgq35fnfJ31TPQo61pE7dozTvNNn7XyT",
  "key18": "2SUCoaDXiGuitV6AnzXkaJ3feUss2M8v2Bx3YWeTbSx2ECfjmzy6dptVTKyYLrc7GciwEbpPySefXeEitJiQUMQF",
  "key19": "5Fvq6SNDBwBhe6t9dkSdXw2DB3EChofPuAobKPQi9CdbYb8n81UnFz7KDDZCq52JWRyyTwN2fQGJXMUsFnbf4RD5",
  "key20": "4fUWMk5ULFTd6H6CEXQowMPPWBPT6iH5vm4bPN2bPtD2xJd3PZQnpsPCdWYk5UPKdZLFbQHWDJidubgL9oQ5ytFa",
  "key21": "5B1fQjT2aNyUm3FE3GMv1KMtZ65HcuVZjqZWiNyPZdNJEH44VT57YsumW4bc73jPfwUqC51cKhwWAFsANHb5csZE",
  "key22": "3gw4V8MhiRF7TKPqh76VmKy7E27thkyfZ4WeMgZCWDdErMMCKUpg8tcrJNjUbsVG32Wupryqd9YTGFPGJgji1Gu9",
  "key23": "3uyrjHoVUqDVwnS4vadCnQz2sqBgTR4DQfGHShzrzEuTLheZ3DrF2yXCzrnP8gmjm7n2MXeL3yqu2P46UcHsw47o",
  "key24": "5ZmDmXhafbe7vHRUxozHxMezMLN3v9hSZW96dp91mr9SYA5Ho6R9QLGgPo2vJCzzsTbDH4Qnt2ouE3YEUWdaKVeU",
  "key25": "2iE2hy9BU47Bva1gF83x1HNL3SXfkXvoLKRTAY31b2moaurD2ZExoB4ZsT2NGYJNHYowz7HzRq21gfXsqaqeBjMZ",
  "key26": "31KQhusBz3tbNk5zxJaeCiaWbZfmLECT3M8iiNLvi6kSCb7y9K4YhSxLT4wxKYosbzFP6svjpopcSDjrJYNZhZgb",
  "key27": "3yNJY55HFR1hnLZoxGUz8AUpf2BEsg3taNLsN9xgUDz8f8nfVofZWLNLBJL7p5HV5vzuLWPcsqF3Zbu4RyHvhgZZ",
  "key28": "5ujY1qcvwZaoQcWamriMtK7Jgw8VhfukCpnWXaz6DraGKtgo9dkN14zAnKxZg4e3b15r7jPhFNgayBE2CLzE45jn",
  "key29": "5JkXUsCbFkN7V2C8XbgSDpbPLrLyybZktthnfEMFVFh3Ac45UKnFZxFrocowGKqmjVEed4U6hJTDLGGPjj5eq2Rz",
  "key30": "5SB17KqNmJmFsSPZCKtzz2hJYpJ3ZAUXREEbGeVHmmZMizkJbRzfxzDor7zLVQHgUNULvHoN3HARnxtZUsEU3Wng",
  "key31": "W49NtkNJnM6h6V2GAaSYRJFcCdSCqQmPcnahyuX6NePxU9GQe8Rt6YHkpYtWrX7rahh6HAuCXPNy5X3sQRo7wnF",
  "key32": "xqxnEsKwXXrsdmFY8ce1pBw7ppggb6aqii72ieVkQn5xUffsivyM4qyex2r4FsD66oiU38Du7YwwCRCC6qz3S7T",
  "key33": "F5CbKsTVwBkCsh4MFH419V3MUukvmNH4pCJnbAYoZauUiekkCDCqWTvMMdW1pEjKisuDMqEwEEZKtNnTs3LVNkY",
  "key34": "pKSZYfv2oc92y61vutdqxLFMZYgNSNJmu9BziAvfxZUW3qdMGKJXjT7AESv16Xy18da4zbGRBsy3RtAJs7bfYyC",
  "key35": "kvZxpFdubf5CGoa4Yj8XGgqtjGzAN1QWwppoYFFFhxBHj8dyBkFch2F3DBk4ZB5nqbsjMrTdVzmX2ZuabwGY4dX",
  "key36": "4FLJWmnGPAeVbfiC1Zv6djV7BnVRtpuDhnUaWwkDrRwBuJm5azAQGKV4jXgVDkmCiGPNsWbFYfZTJ1vmnCGdPEPw",
  "key37": "3ApB7mnCxw8BxhsfmJDgpetxU35SDQgoor4dpPh8Jw4TdodNubwjMFEFcxULoZzezv67Hdv9FNEmBBKsCrjQ26FK",
  "key38": "4NcM5VN3nWT56jngFNLLA23178mo7wJk9QGBhr7QdTTxPTQciGyz8jUNHvLWvQqNv8v7MujjsPR3y7peGxUBsKsF",
  "key39": "YZAyGHqhe1Kik1X6UDRhVX5dZ92pQYu3QX7AU8W3vmp4S6iURe7VvTZC57FfjKTKkWc3YegedSSMna199RfsTRT",
  "key40": "3Lf64ypBNu8EKUvUN89o8Pf6EiuVpQT1NCCZxQBhst5z8GR9LNXM1f5cgF7eU6dujSsNQbigxhy9JnycS359nyVU"
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
