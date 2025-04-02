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
    "2FvVJuvAZQ6H4m9j1CL4a77m4GmsmHes5EaDZjrJovb9yRxPfdQFG3k8NDugev5BDtcDS46YEeiSQrU8v1yY9Sqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Nk1tj9J178yGaZmEpKUDsLt5TJwfCiEJAiDUa6dGKx9dBYu7vxu8ofnRWa91KdfyFaD26EC8E9ai8PWCWp1NZU",
  "key1": "rtDUVvFy1HUF8C4YeMPqDtPh7qycVj6yZDsqWeEV5Tn1URFXYThhLz6n733TFx5Bf8xZr72WTcWUTq2m3AQWoYA",
  "key2": "zH2aujMeSQLUmxZqc6kjiXJoGYVTsySTYVV99oemMQ1ZxSiJmt9p43jPfsQ35bCY5iFgfMmpuX2sYrtyPegjjJv",
  "key3": "2QL6gMZWk4GGEBiRYUZjWErw6X3aqcAHoM2EJeQbJaPPV8FRZWERcEh1VnYFDFK7XmiBL5fnN8vu2fXHYeEE2Etr",
  "key4": "4KssquawFAiWh7KEMDR87McxPsL1sEDEFoYZkQQCFbirC8CVbnNHmMfQFnpnbsKjsYkGyj3kT3u84sQcrvJ7kaNX",
  "key5": "5RT6J5M4K6PeCH52DCxmy5QahysMuYDffxg7yDRPpQYdbqCMtMeNr6N5W9aa3ywxEwzRDZh6PGVHyVaNN5teCNCH",
  "key6": "DVVzSTGjd9x29guLncYAvA39NULRtGXz17BM7sEF77LLFZDdqixfptpcRJxY29twghgdE837oEun52xZqtnhmpw",
  "key7": "5Xp74pgfGugvKaBAV8vwWVC92uwiF5csv2DutDLdZ7ptGYX6tzpwF6z2Bw3WZpwnHE6kzXm9c28kKSzVr5WMFxPi",
  "key8": "5uDmeQgdUp32A7pXsziu7KRVo5FSN3ePS5bJL454zU3PD7BzV9UZFwLxRNjrqYAuKc8o5KRrvVYUPamptqmQGStf",
  "key9": "3QcCZSWpXN9KfrquDqQoKPU7MDR6RqNZY4JxNpje2Mb5UtmsDeMf2LYyhD1f3HBC7jpsF9LSeSRWL2B3QfpRydV8",
  "key10": "5ucZjPijpK5CwLzQbxDSftGyqFtYBp6MUs5EnCQG1vQ8vx8RiVDe7w4r2YC1HiJZc3dPSQqbajM7pgwX1xbNgvas",
  "key11": "7ZieQRcBYSdSieTRbpNRwS6vwMoJkqsqPzqBnyub9y9YDJYLWbCrwe9La92EYszNrJoqM8isiLfwdvLh8ityDfR",
  "key12": "65DGUdMTE5d4qQsNe5gYxvmEp6t7P6X62hmQawdaYT6YzTp4kAfZHKgeTUnx8d3fFAsUrKLDFFJL1yK94YfYuKxa",
  "key13": "4KfmvKA8wtc3GdSokvdFrCBgf71hT2u2htovck8gi5GsD6UjWV9h1kWXpELh5vKSdK8fx8JcddtCz5Nz1Lp7enrp",
  "key14": "3MCaizyHVY7B1xLfYnAFhShkN8FBF93WAUW2Gho6KLrm5GgVYFwGRwb97Wn5WVqXKgAs6dnFZK7DsnR783XDfZZy",
  "key15": "4ZLyJ8ZHV2q8isnLaRz6eBjPx5wXVipyL5BFgrt5PaYJZmVioUjQtfYKoMvqNhzei23p8MVpAVQNBxi5LJRagaeQ",
  "key16": "2TQD5UuNpFf3t1472xZcs3MGi2vfnFH2ZKJ5Y9a4ZGQDi5QRP9LFSohYGmsa727fCa2ZThszNboa1idAtmK1bjHu",
  "key17": "51fSUpsqn5XYApZugwPmXJMpi8JakMQus9ouRkzAFAQPPWgc38LHyaYz9U9rmzw8P1E57EHcj8ts7AtsKwBSjkh4",
  "key18": "2VC9ZG7wYjPhdFHzDngBxAmQc3kKTDJnKj2E3625rBycKEqiAEDv4Gy7RJpVme6TUDgkvKiSCiKBNG1ppt8zk9Am",
  "key19": "34MJpPtRvhuGYGs1LV3XrZnxwc6E4WUPdkJMEZWSTkzw9LwJ2uqgqJcXFSPr2Cy4rYoYWwZRt7YZpxsA4m9bsLfb",
  "key20": "43tzw1FH5VVNNXqhiB2hoiwsGhx7XgKUeyDfWAgLbKhhv8uu5CiMM3jZM4PJctNZMXJZHEhUYisccCt4cD7m9giM",
  "key21": "6gm1jbgi6viMggbQsvMmbH2wc2wKRRBTi5GXeEbzcvRxqubzm7nf7k1RUirRBLAP9G6XNGAFH31ByeSdW7G88dM",
  "key22": "3Rd5xizLXzrxp3mm4Cx3K2kL3eNHcH4hXGz7WGRCi9WERPx2PNswprLo5hPRV5Nea1tBcGFZrsKMCbHqM6ryiqTr",
  "key23": "4wUdka6rdigtiL4p6GCSKdkGwkaaBeLattuhAUDTQq7Roajdp7eHdexheivWoyreZQiCqCvXvTskQVvQMod8D35R",
  "key24": "3Ji2Q2ortuSGug9X44sGiFKjgBPoYPEtDbU8H9Po8uXn1DRa3Nf4yuZ1fzyuzS5HWnfMvpr62gk9MPkZSpJHAj1x",
  "key25": "2NJxaNDy5FaZ9X8JAWBoCaGdpQcGatYEkL6jcYnjAuADqfn2UwsfA7ALuLJWnHKiRU98KyWReBix3xZDsdAhTdZ9",
  "key26": "4WjeBmL7CbtMhB4dHQ4jJnyMwwo8pBdQAkUKwQnW3H82YDdCrLmf82E1Ufn1jzP6MmFu4PeWmw5k2QCL7aBJ9aF8",
  "key27": "23JhGFMBjZD7X9XhLDSDSZ2SfDjZ7PtCM1dCoPcckz3gS2cMMP4bYKeHgAcbDuenGjtnrH1tRwcuk3z5EeTo21hw",
  "key28": "2hhNBjpcdeWwxfeC7Rf58nA5FZM3CiWAzuSfhR7dE3hMW8VXBSqv8iJdE9MDbv3WYof6abXF7PHD1EfU9hj6HtwX",
  "key29": "2HC3US6QmDKsMfRQhPZVji98DTzJiZtDHm3oW7gfsCxqWx6V8xME1ZJfWz8Y48t93brHPaHZUsStKAHnpbu57CXR",
  "key30": "f4cXwf36VmsPc1SMmkdrvwAyd3tJ1vSRWzpuJpdMgJcJ4YCFVrDj4UTLgjuAwVo2MgQd9YGRUTB8mzNYatb5wo8",
  "key31": "2PNwR7gd6P1uwkCwM6yYoafRJQa7dxgvukao4R2SYw2mA3E7m52HnLcCazh9AnkSZA7ZshLcWi5dMmjuxjL5LFYX",
  "key32": "64o7QWpGcYDoieRVHBSEDZBmhDunWGnJE8NReHSQeHw3ppfb7A6w347LoHJNiAbvsdnorJqx6xkSDRUVD9tmBr5Z",
  "key33": "4s3E2CemDAu9ngpLorTefrxvcWXEi6maADjDuZeBjLujLCZwtdboHMbDvwjP61tKCrz9z1R4mJhYWvXt9LjNjsKq",
  "key34": "3A6LPx23gkFAMCh2jt1qxwP1EX6RSPC9cgHEH98iJG6ZH1nJocFivn4SYDbmrhNpquj2FiPpFojgxj2b62D8VP51",
  "key35": "3zKE6Ndij6Zi35CQN7GcLUicir5ap3LqD5N3tXmKZCquCB8q472rNw3MJkcRokcAJ8W1huvDA5JPbJwq7tSBhpVY",
  "key36": "64zmzm8vTLNZLNZCQAUcvL8uuNBMiVPbjboq2KUrs2b1rAKTUgVso6iEU137u1xYtA6gK1CKJYUD3K6GEj3rT7Lt"
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
