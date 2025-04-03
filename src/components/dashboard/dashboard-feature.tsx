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
    "2m89HBY8nao94579Ei2mKx7HzyXKMyFEASAMNCkRbjd2fTqkF3S6L2Q1qULCVvjczezSm2gkbrRiHAshPvyEcE9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwgtSmPkTRF8VYaEaEGcJSVfrAzukzPGKYLSfauRdVbcVBytCb2nEnhGgAGiXwPNmfrztAbyXXZfgoX1ufss9N8",
  "key1": "27QsKm3fygRjir9g4MrB3JEttRWyD4EzLoUayei6HQsRQca5KQeuQHRTkr71jMpcxfLBx5YqszKapkmGZuFs1guK",
  "key2": "4QjhznnUqv8e9VXS24dCbYw4k6V2RVK7NFGYLDJ2wcRNxB465ZHNCYL4HcL9JSxXGYJkVbpXm4yH7KWzpEWXQskD",
  "key3": "4kSAJW1Ymx6u25sAhEvS77Qv7nqepqEx7tiUtUQkL9Jro3dtXM8jpJwBLLXsiduAChACyFL9t7RHmmWJJdckQ8tf",
  "key4": "4uEsgNWVJub99rhvEDJpyVbw5MozEVj72PrFPubWaSJaMxpt63rKfkiaNvg6VLZ8wFzdhR8c5zQhxNspijior1u1",
  "key5": "5Ej9LJkQmFaFKj95dLQiFWZ9vmvj7sM58ggGaJYiwjJawcQ2UbUN465TRYhHE3JNUDkhzWSYcWCGsu8dMtwZRVyK",
  "key6": "3phqK1MPBmZMjf5ESXZsSDYvMD7mqpsY13AmfN3djv1pAFRADLifwnDN3kxcR6k5Qzu4vu7ygqiNmsahqa2Yqnys",
  "key7": "2sH4UH8Htz2QYxfVZMsvZWT95tGtf7RsgDBLEicBqH5H84zGwb8iRi6CnDJhYHahGcMn5L9GkLz45Z3SZdiUywJZ",
  "key8": "2RpZMABPqqXYcSjWxQD52NnpQZPAJ1ddogwV3PySXeLjgjaEuVXa5FFVNj2zdJug2tnfeWMZviM6a9dY4WqGUzJH",
  "key9": "5HodBywfCXNgeC94VRWqsMhdSqPjjBMNkjLLsRo5Ebyvj371Jgvs9xH5h5uiogobPgCgj1qMGoQCSBYsYhoJ6vrY",
  "key10": "4BdASRLknxfsCUBSnzBiR72JquUFvtWvywNeybT9yRyM7UwGyK9UYbydsYtDBNxrFuzBcreQFrFrX2qKH4TTkZPW",
  "key11": "3ZjVJxcnqKqVYXwb3QBArw86E6ESvjURqdRaHDkMLyunCXMMCz8UCAfmLSNcMJsAegFq9h1HpQR8mgqp2TDBMgt4",
  "key12": "2qRmV6bwCR56HTHnPeaSw1mW78WTCxVk8TUwb6nd2XYPREFGD3GaV2MfiReLBf7ocYsZyD7AUJN95Zjuk8XTVx8t",
  "key13": "3AYbg5iFS993CTa4zaUSj4Kpv2sn9rfXH7ubsBQQC3mZrwAJTkLPwv4111NotS2NYmvCNMEAyrvFxQKbv6Uz2pFp",
  "key14": "2r19nvFJATCTudjNPEWHeY3xA5Fp4tVVwx8khoYXXNDsbi3WMoXyKCWyy3e5TMeyr8VzNNtKbqi7jPe139kY2w24",
  "key15": "5vALmyHZBDyHrCbMXT1yNbmrSTu9d5Jmd7BbQbciZ34er7JcxMMjYfHntQzMENeoXvqDikGMyVzrn42WYrob3dmr",
  "key16": "5b32w5Fw6aau5Uju5rmyZWpmB4fmRBxkQ41E1BY7qDFQX5yMar8jKB3GxPCiG1QaGNrzxJZSVDveKaXLA31vWawZ",
  "key17": "31n4vFQ8eVxdR21AaML9ECBTbkJMXiwFH7yLQ2sqg2XCr6n8T2DDQD9WPd4wMaD4F6SHPR3qasRD8UcCzmQpMeig",
  "key18": "23XDeLULmAndk97MHQGqGqP84hhYbGq6WzmbK3tsZHXVp5GWWXeNxscsCCekWjEJ9WKsQbzh5iVKMvFemagoF1ft",
  "key19": "3JbZaonhdsgHLqkq5XMrJaY3x2GaDpgmSZAGYb1zEzcaWMSxTScPZyNTDrGTX6vmvChRGC6Vwq8wQHSj7a4SR8dx",
  "key20": "2Un9qSC58jCEt1SCwr3agNMAMM19rFy3AUMF6wXzEa8xzm9rCyBLzE939oHWk3DaTqeUmkH5fehUAatapUgUgamH",
  "key21": "55Q3v7BPNmxLGMBu7hXmVqkFKViNr8qMEWDhRKrWqC4g9ezJugu6cmpijURBUzJunikP3yDMQ1wNKTCNXf7FjFhw",
  "key22": "2x5WjXy4LpL6hAQhtkM1pBMjbnrToCuL38om7CCwSML3gXWAWBgnn4F48esbeiNc2qXzodNdzXsxWSZjDABh1npr",
  "key23": "5wXxkwE1jCgUm9cgJznVmpRMiGvbqwjt2GrYCSJEfBRXpkTE1F65yttvLzXphmkSTJp2zeg1Q4RYdfiWXNj1sYaA",
  "key24": "2VDd352jzuhrr3gJAGyyUmc3xD53YPg56QT7qKmtXPXySumwHZWwvrz4y5i6AhkaAnzjLcM6Hb3g3Zb8AidXeszK",
  "key25": "2gYPahBfDxGYrii1ggPsBT67XCW9hBwdqECjKmBUcGUDPWp2k7dZDREiyxJfsszNp1QJCmMkL9iccQFZeFD3vJNj",
  "key26": "4uDfCRGrLGnPNSQoKGPvAhVSAZ74rLP2uDwPoq39n4rSqH81tm994QuKHBpZirAVVdTsZT5mTRAkqTLaTcTuRoHG",
  "key27": "2VpWPYm3MEgr3EqDvayYDM5zSP42rUCGbXRcC6bEuSwCJqA8ifzBFapLKaiTGBBDNgsiZusJfZe6zLXVEVFLMzb9",
  "key28": "4P8Dkgd2ePREJfbwBmhy2yzTas9ocUrxwKKGcMX7L95CHRrMDNQ935E6AzcFBvahwQNTE1eGkNq2wytYcZ64osJ9",
  "key29": "5WKwf196oSTLuaTqmvxbGrD6CwkMGSFJfsWybGWP4KJRLrnrjm1YcAEhiKsix6tngYuZdmW9sNmA5tYnhJcufWNw",
  "key30": "5MsLdyKVZaxGKPh8jTjaqLWXMoFv5sQFKqryW5bpPfzbKENoVyKHx6dt8DzFV3R4QAf2ZzkpQy9T7435LnodTj68",
  "key31": "5zLcFp3FCBpFVPZqwiQqgCwtZkdsCYHgX7PHZA1E6MP3ADGopxcp4kejj4NtHZfPvKU6ZbfnJzT8fFXFnPg94DsC",
  "key32": "62acwqpu7Zi2qU2ir2QAmkopBzGZWPr4SorcPj3VsnKgESiKCNBaRxhZeGEao1ZfKY9MDxL1nbXPT4LxxiWNuVah",
  "key33": "4eYQ4tsUrJQNFWkHxQ3LLzGSLE1JXp6UjUUQhpnjRfZutTe57by2eUWTEGymALDa7Vs2mLh9DS5V7NZCr4vESRNK",
  "key34": "3LgP7y7d7MFxDUhtosGGmRVuUZjysgBMqJcLmvNbPKPx49WiDgtcVEpPtfLvsTNgA4h1ZzsvEZfBHTwU1taHg7ks",
  "key35": "2cUM3icFpU4j3bXZgF69Y8gV6a6fBuMDsdmaYeMv1g64VcyKXet1QYe1j7TkuEeNgphycNuSVkxhQNLHscUdfBAw",
  "key36": "DgDnBAtpf9w1J11vQthJnyGaVuNZyMcRR4eGwnGtARA2xSruTgw376wF9UWNA3FLx7nTkyJFTR27JpCMtMwnD9G",
  "key37": "4zUwyY7ERVwnzwUTRZXLcMAxrMSgFf56GLbzmPseHFRMZsmcMwV2Jk59j9CPq5Pw3awbS9mpg5w2g9U8ZDJVZgEU",
  "key38": "UeYuwAEfasy8DWMyMkKcFs1mGiAadiVayPtgZQTzgsq9UACrR6jcdyQgmGcPx6PUJoBjQdFm4jjBobWy4joETj2",
  "key39": "4VfPTXnHq7FMbECBpRw915ZP6H9QPmzASLNGi3itwKEJj5LkR8F8pHKeQ65pANtWTb5C2PcEHBYuDS5sWi2YV4if",
  "key40": "Ay4sNU2Ct3W9ReLh2YYaHp9uX3tr9SbnBm8B4z1TX3KUc3G2StRSUM2xM9s6WWUogoVCBSuaSEnSqx4nKR6KwjG",
  "key41": "4YbhXgXmW5kBLJCAcfacFc8KFAEQFvVEzgP7F7E7p5HH75DwLUp8w6f9pHLNyNgFW5G6ZMvEnY1qNoGMpnabWrWz",
  "key42": "3E9jsRcb6uow37t8ijAVUzdChSbjwWSqr6xbC22i9Qt5ugaxNkLGtRHwhD8ZxDDsgBrg3GTsj91LYKYxh1X2cTPf",
  "key43": "43bdxPuCV8uEPnt2E3T9tVnPtewch7X4rw3PJCEPne6to4zDUxG1JdWdyZ2t1ZyVk3o4KyoNrcpjTjMEJBwvWQue"
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
