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
    "62BhXRV46LggFjvzaTx778e4LCa9w6SUwndV82nPLwhqeZTPidV335ypB93UBcsiVnsEmfMXbRZub8rp2o3YthR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvCqyCvrLa37CtESd6qVAmwzvbnP48e794WwBErfo3UBBE8sBnDphkNKwDriBqLmguKM915siPqfiY9gHW13o6U",
  "key1": "61jAKvB2e9wvTigKdjrW3LuYoycQNDCYyr9R8d8FBbJJokDN58UYUhBfWLdzPA4Fhy2MP7tC3t1kJWvisRZsCbef",
  "key2": "3bQn3NQfe2vPmX1zrnk2WBJs41tSmivL3EF1MHZgquFw42oaQJntgZKRSY2DNhDX2261QCJFdsjjQfE4xJgh8RP3",
  "key3": "3dnqGdUc5DesSCea3P1HejbXY1cf5o8uGcFXGtWdU8N8Ni39dM8xTCJC323teqBnvCragwEPgHZA2BrBPMRx5gKH",
  "key4": "4YKQZb9NDVYQFgLr1EXUFFxxSTPjcBhaAs2mc1chro85sejdwmsNAp2P3JskeUvDUojjji7Ubw5GSZ435PzqYQKU",
  "key5": "3CJdw8W4UFAa4xW4VWsUSnHw63r9E7a5tsfYN1xESwUHf2pjwN3TechuMAR2HwKf6TRbMGw2d3VVqWSe9BTytMTb",
  "key6": "4T569WX3zGpfPo7okNypsubj9gHwptjjcyFYKouWcNVZaGidaVc8DsxZEHDqryG6ciSZoV5Vdzq5Gs1Dv8BgBGqc",
  "key7": "4d31sigcdc6dpjkkH9neLNTrd5csJ1tkHTk5cNCGXAW3iambWthgNJ8Fm7mMb5UhMSStHmbDDTHDevFxMeZ9Z3z3",
  "key8": "wTZPKTxLe828GYQkjVntUzbkQWshcXr2q56cqVuWetWobp8q4quU2vtXoqjbcKE52SpksvXXVsF59J81qqnjE53",
  "key9": "56pPEPbgciPWM3iqF1YoNbbQ1z4b9CADeWkPe6CiQjfYfKEJKmHgEegveEeRwSiXdehRsnSugWytvDh7E2rFzHt",
  "key10": "5frfWVFXgyiCRLqa2UsRaAjMirnrfJtpFPARRHws5zbVV4wZrfYAiPJFJ4Nt7BRHFMgMpzGngMhDHBUMFMH1AKNv",
  "key11": "q1ZDVUK7ALCCr1jD4AL4N2pgdgHgccFoR8dJb4J2MWVzJejEjMguc1Q38P5rQvASq19MiiC2NBdeaBzSi5JHXt6",
  "key12": "AbTqU1h7WPRcLeLa1q3trQo4tHXFr6d3onx383eFCB739QfePynUjF8wUX51BgaEwzpdwvzo2zvfGQW2Z3EBF8X",
  "key13": "2RUTkQ6heX2UBYGsN3rWvnXm7m9gxQ8BPMVuU7N32rriP5R4AHXRhMej3yTe4qmyZpiaHqJmdJ9WNcvzFnux5YsK",
  "key14": "5E4mxKgkK8n4hCMiVeggAuEbne6T6JwXGoFpGJRJswmtNJgWCEAVdPHRJi279avGshYbGbuvHPU4HsZDB87Jbzwt",
  "key15": "WX6CeBeej6GPLptGsR5j9Scko9KsvFRQ1AZhf3Sj7SHLkBszuee5bhi19mGiaPpzCG2kwb5tC1sB7Gi4YXpowry",
  "key16": "2k9TZuTXjbHL63B1fdZBzP3UGmuvyjfAVhGVyXwbgTUw6dBoMoCEDofnca6zSqt6ucSku7EQV7Ho6b4Fuw4iYUc",
  "key17": "38JvMboCJCvTZtiVb8PHWKTD65bD4tti7RmkaR5dzWRGYLKbTeQUBn595eyUHLED4B73jfDgu2V2wTedjHzG4AgU",
  "key18": "SZYRrjpXpYw13aAPt9unMJ7RVnt94VvzyzpxCAFXLHLCTkxhy6KU8vi4nRKyANF4h2JHoY4D1ZQyRpLnUSjDiNj",
  "key19": "5KpPKdyDa7gjoN4m52F9LGhTBPj2ozaSdrqTEvvqSGqGV9zzL54vbqr2spsmfXtgttPFEaAHfzS2EdXK45NUV8LD",
  "key20": "5afncA6JVRahnKWiiyEJyzaAxdi6HwKmC5PiSZXsfSEfy9LbTXLxeYy6rV3muDEQHLackoEgsXwfH7SbJXSBf8kW",
  "key21": "fofFDozeE9b5DgLxYsGoLnEfeMSbGByNE4krEJTKPyDcniAJg5EBGMbRbBCz8nLszqtUWKhrxba7u5T8xfQ5eUt",
  "key22": "4iGhxUVBkzUX3VHiTQdY9hRU6RQELzgpqbCmRV4ZSRifQY81ZfyYVYg9BDDkJkzs8EqGifYJY1vzYVpCoBQLtbMU",
  "key23": "2YgktWDVVXVexUrEJktJqexHM81FqLvPApVFntVrqpsvXmtiLShhKwQwFra4WNE899qZyY6pr7nayBsZGAM7saKF",
  "key24": "4x1ntxH9P2NBy7sZki2Hso6nRHnFNQZ9G8Dw613S6fUrzYmoYSDZQ2mpaKRLdnQ4CRUrj8CG19cG8BR5oEAv4Apk",
  "key25": "5KjEWGT2y8LtbLDc5azLBmxNWTZWuZgSYB5exchuX5XWe7M5xYa6YRKByHmk14ZonC1LwfsCdLUyVeddEabqvz1c",
  "key26": "4evXucqcX6usviVL3nwCJ92qHmkTFPQaiyi1ZeWKwLhhdYD8zcyo9fvLt5Ap3tyxmeEB7ohJGaNSjNCByvFsb9qV",
  "key27": "49fHqAkeXLVi9Yk6hJc8bPcK2sf1QSw9nmKPFfy5wzehi5Ge54oUrBuKuHHzHVjDEMB4XjJXqGRNVFboPArZVYwV",
  "key28": "4VV9xt9LvQAXpY48jnEq4oXu1DK7KZr3yvBn8ukXtDcmNguW6hrBFoXQrtmC6nGE8vhBZwgfVoMfaxbrzifziwVX",
  "key29": "5AEBZSFmTLZxLZwmfYSdguRLzuMCdp4amxf3c73Ndz4GrTMhZ75hRh1g2ny1My7Jut5g3JbJzLxe641LqgpnRNXd",
  "key30": "3F7XbnG3vgrsQUCdCf6mq6diVDX4YtRCb6m8sioKSvM9jdBUbiPKKHB5hJzp6VTk5ayDCujcEDVRhKRT4zFyYNrP",
  "key31": "2prsJAmnSAPAm1qs43cs7y8fGE8TzmqGZ5ERCRxA7DX6SzcdKM6rstuA8burjRSLQJfhUYXc7SUsrD12ZuC3JQ37",
  "key32": "wwmCfPYFnfuYuEnvpGJKYt21QhDvjMh4WMXMobSyYVXfcTgJW71Se8DhPjqY5dqNWtZuQBMFJJKtof6TywDR3BD",
  "key33": "23JiqCakZyNHKQ2dvZ3mFFbwteEkW4mg6LFCZiJ2nBUYCLCqu1whJ8u1ezQe89tsrQPdKVGQihU8AkECtv73mbri",
  "key34": "4wA9wQ5NQf2mYxxjsbrN28KAo3DD9qAiwuAyDikLRTMQpSAXoxiDm3PZG1EBTrUksYRG5UpTxs19xnGE21HkfJnw",
  "key35": "2ZpvckLfKuCgJnxX36uwBsziqcyvzVJz1e2rxBRQMFkvwoue9D1f1RJtLGTjiBdtiM6ssgo6ceA191ym4P24HHyS",
  "key36": "3tPtM4jNs5BEkUs8AgYvWX9Au2QMMocE6TPdWdW1sUZi1non3JvCWt5pbRXZau9BFeJaavUy4MxVSKEMYnzy4wMT",
  "key37": "4SjJiYyNiLeWpNbMjQsiLhWXDGd1FD99LsxDHK7ETSLyfbzoFiQ4FCGhVftwvmGwE7yTwXX3m3pFDokVeH9ddeSA",
  "key38": "3VyZaCfsaWyR2d1p8FQ8Qth7oeoSHPnHC8Vi5zBirZ5dpCYagjBRTf84wxL9qF5qsVHJR2DqLYPwNa2HSmd3XzeU",
  "key39": "2sedoeWbmiCaiEH5LgJsFKZavrH1fV3m2eFRLBgbSrNXohbmcbqp7YHyuLrQf8cRyrmq4KqGBWMW6Nhhjr42eGN5",
  "key40": "2t7fPamrHcjtjtgbbdrMmbv1e24bRVzLDnAtsn1zCFB2cVPeXD3UpWPUDyPM8rT9hKyvMeSuvsserEiuietVNADd",
  "key41": "txa4iw1Ts2if6aW4gcB6UHcMPkFg3brX5J91tAgJiDQ3NJ44ugcHBRQjLTP9NV8F5dUALwGZtYj2bmCydwoGVvq",
  "key42": "cMBZGzcbFyVJ12TKstxNrXUAkrCyNc6G1dXDqUzAygbLPcz5KGTwrLfDt2TemnGbba2qARvmef4Tbf5EHPBz2FJ",
  "key43": "4RT6GsiGQkkKzbELZeZug1eCW1WvoocsgDCvTmicrtaEQcXZ5C4zQAvJPzu6cMT4B9TnGHLcvmVLxgSj2VsNLPQf",
  "key44": "3JEUxgXXMQyNy4xTMHkVp8vQ4JuvNEWSYKGMQ5AuVhkiyFHVkLMbrMb2hSmEYtL4wQPJB4pzx4uigS3cQ3WwJpzQ",
  "key45": "HAZX6H2ovCJQh1Uo8hVmXtKmdBWxtixdSyqQ1w9LhZSKvQDt5PZDwJLohSqZf7uQcDcix8FN1Kh9Re83PaW8Avu",
  "key46": "3eyjSS6wXgiWfCUj9XmJqvVRoHKdWvBuDo5SS4vWhvxTVHMt3DhsGAD149wTP1uKMUEQLRPNdWQwWhEZ1ZCtFJfF",
  "key47": "4XSixbBckFo6TxLFx69iPCo7HBJhpvVDq7aZZav65vmkxXCNFSn9E25Vo5TsUh1RM3eVkTxpv9kWwctqakzQU2D6"
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
