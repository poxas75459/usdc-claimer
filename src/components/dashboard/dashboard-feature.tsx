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
    "5rFBCLPpHXKiMS5As23JJpKe9uQngqjjUbFEmMxdXkkvGJXYw3rAM94ME5GQkTFW76JCNn5aHNYdqwiaPNdfMT5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d479EYUnFywzWDh7fytjhDj6ScPozmJZ6Czi5iyCuxeuP1ZfcSLnzxzZD5a2fNzRmnzU9mRnEyYyAtLtgUzvD1T",
  "key1": "2tXC479yhfWHaDy2pccniHv85ZLdwBeYjWs3Lpv9WGaryXFZScPghXyMjJndAxASq2ioJELic4kPwvfd8V2HEep",
  "key2": "4VYntr5VLwfmPF4ZkRbcUsRSJq5F9MFFBhafEJsncU8dbgAduyjWhm11L4zjxDtMwLjLwBQNLunBzZ5nYuUZEqPY",
  "key3": "2VtRJSKzahYcwwqFUVJb1bqkFTwuBaxQ9cGX2x9EKgYMKhWVv4gk7Bpv2LyZ2FwYruwqbVQnVPKxUVcEnw6SDhHX",
  "key4": "4c6WNXDQovEPT8qMmeWioY4iYibeiAJLqjk2BkvoxLeZqkNESDdRdbt2nwCiuM2hGG8Qz6tG9jfnEqHF5Ujv8JdC",
  "key5": "2sPMk4s8Nm7oe5FS3JvtFnwsZCiVtpb1xsLNVcHG7cudpyWS8akNnVy21t614U7wAmX3ieheKMr2osUcrucEZF9n",
  "key6": "5VbNu5BJ5VynYSTCAzzczMaJwG1NqCbRpFzcHNpzimCgGeaoj19kXunvTnwKgYWcqiQB2u12KH5bAdXfD212dLJ3",
  "key7": "5NuBkBMy2uTNS7MrFYs4QiYSSZ4doUV2yBmLdftqkxCJvDxo31n4jPmVzyxM2uepo66KzE4DJ7jrbzdnjaJeXqSB",
  "key8": "5xsVzqjXT7z2m2rqmhYnXRrvbE6RDDhaL1dthAU4PozhYHfBY1Yu5TafovDJS9Yz3gMLBgQmt65u1hECWTpgePgQ",
  "key9": "MegbhLUoQMjhWDgcehbio7ixqFByd7MG2graJbG8ZskqbfjsgfW7UyAPQkW44Ez6pYA6VWx95JfVpHHvVApXXUK",
  "key10": "4BWtngppks2zzinGrg6aHWc7KFeHQAoFKiYQniZkwXQ8o5MQtPj1a9hGJgUDv1DCnPug3dVdWMe9mHuSCoEY6rp6",
  "key11": "3tX3U6nCpn2QSTU4WXgNiSkL9syvYeViAfezsMdyqtAhLNbd3jN4un6yWaeqJnknj2tctMDFAy5ynQZP3L3R5J6H",
  "key12": "4js6Mu23617eARMfMASxEGxjxGjdX7MQbC4XqSavN9cn8W1Up3ToeAUTq9eStSmo6Pn7ANH4jzVPbfh6Rzr5VfzD",
  "key13": "3Ro26WdCT3yXX2SukyFCGRzS42p165DZXBdGNJBYu44jjeLpri6tVnLwJNU8xdhEw9HVM6KJWRzqFnqoq2UP1E55",
  "key14": "475fXkUBQeMEzKL9dUcuprRHWHVSjjg6XLGs2jmmPgzEy7Lj1ptXHAmrREX3ncTJUzG9uqvs8JDxAzAj1KCLSRET",
  "key15": "21LXP3utBYCmMsnwoWvKPpavB7HWAthYXVG8hUAWnaMmZvUark8iFV19FWwUdcNrm9khdNSZmXGbkVhs4bDFzasB",
  "key16": "22rXwNNZcKQ1gw61P1qbZ6apVLJFAW4AZHuZD7voTRm7DmJbcjfyoXKzpchL36m711ARVLSLxpLMGSUHoSrYMoSr",
  "key17": "4S1g45Q7jH4yKk5LvnAYSop4wDytV7D63NvksyRqWBCP2YX2CZKsqc6Bg9X5TMFcfBrXZZxYCZR4CbPbfvFyPRFA",
  "key18": "2kUE7pwj3BT9ioymmRKNYXibGvBvugxA5QpHU2BXnbdhVNzJYYJpTxpch831kcEibmg5mi6MzMYx3wCtbemzhGzG",
  "key19": "4dm5rpNm1tWvqmqnrGyaEE51my3JA3nihnGsdQnkEvrMpLjCArXfTzRp3yGu64kHBEmTxrsXXN5NR5vPdGgEke41",
  "key20": "5DNa41wjCuJQu4XuB2rRQ1VerLBLZVcM8AzWkQSoNwFTmcUhyiLzLrA8Z9KamYyhemhdRkrPjSYdQMctV3RzuUNx",
  "key21": "5sVFtcfmTGTzEqd2ursgontTyN6oGj48CnSQERw4kPLGYR6vsrRYCeQ1fJswFEQVfyBHqDB3wJAEuYTw2HyRddAy",
  "key22": "3Z3bpB7q22YtLMZWxRjNogSiyAPGN3N51BoBF9Vs4aECXTwjrxt4fiGHQWe3PkjiGkSam3LSfe844vVaNiAudGoC",
  "key23": "ZKZWTKDCgUjztk95tKJDxtxjpHouqdMpxCBdyt9QeE2a53LgDLr4be7EaiG43Bvhs6PtU4bEA2NpRwjTYmkurAp",
  "key24": "4rMMPKiURoihNYvk3eeMa1S5fZNF3gq5UHNrPjzXgSfquikXTyTy5w5pXT5YgoRdD2EWmyJVKnQ7wqGn3jtD3WNh",
  "key25": "NxMir6QgirTpJ1fMj75ZGU6dwanoGoBPxhxD8LPyYbfup88WfFDDTqVDntc2s6wdTEsqYS8N2AhuaNWFhQb2gDw",
  "key26": "37Z2YASSRCyUnUP5nfyB3vM4dfG6iFNWu2c9Ri8QnNska6sj2oxbf2YwEAQp5ceVdKVNeRRDqnjRKCLAr1Hx8aep",
  "key27": "A8WziCiE7NyzH6H2RydYFxJxZ3u3ndQ8GYNYj2QB2dFneYv7P5cdAp6Wn3F4N18WSwtnVK4mV3cVj2Gj5Wz4cm5",
  "key28": "2t6VCELTJKKxedMnmfUNysJZyWfJ9FoGtvautWUviAVCPgvbxyPUwHRqCxLofHsPMMPARjkskDSSAsVAkTmCNwGb",
  "key29": "2BzyBY7Y7MiE7GHQUMAeYaWwWv6oCVmYUBajDrY2Ab8HkaLwDwxtzfykZvU6BHXbrQ2hnA1FLBS8TBvoa62dz1sm",
  "key30": "3nYWJPZwBreTkbGskFXd8v6d3KkqZict1aj4Q4HCe3idLhNNBmGFPZUJc4VxCGEtc6sPi7Pav5sazQQSD5XsReEk",
  "key31": "4pDmizKwYa23UE21ARNXKzTXVaGPyKSK77oGG4ErYhPjsqEBwbaJCENhKftLodgaRTX4qGvjAsxYmkyKroDe33Hn",
  "key32": "5VCgq1k6QS5ATZPcqf6ECqB9qezrYqKpkMR9BGgKJop6MR3PFwEZGi1GoE1Uc7MZJXGbhUswhf6m7isUKywvNRS9",
  "key33": "4YDnC5uFFq35gve745BjiscVLkNczHK3LV37B8gfUmt7YXo2irGmbzdA9qvyNvorCp2GXJ1dXyAMa69kmJohkgBd",
  "key34": "3B8icq1E3G6zKaf172zCQM7hQ2WUWf27MawkFmbxLN1NcU4mgDHiCD4f6P4NC969haQ3UEhdWmvpAjtfUs38ftnp",
  "key35": "4fuyAjeLwTPZKadcPhgpH79nTdJdq41y9mHDWuRX24Ws5wizt3zoZG6qzHuHVuy1yyva9f8vMmMpcFKeCK7CU6Si",
  "key36": "4vLpQFojadsBs4azJLeyreMuspceapT62tzpjbAf3Ef3ayqcm6EHUZhLEZF2rSWieB8N87PRdQo222DaqQyvWabp",
  "key37": "2Yjv6Himh3ehcQYdp9YvAMgPAGQh4LBdqVygfYj4j3qBeJVLfhiuVMNuiasetR2TjT8D1B8UzSVKiUvjMNJEQjBG",
  "key38": "21V1EeDHFhmnRHKfU1A6o1F3vjGJQosssnbU19pbiT32JLMxykikVwDaLctet2bmjWN3u921QZpeULdax2EJcEPb",
  "key39": "5qW3Swyu4nubSJSosthRfrCtt6pXt4WgrZ2fivH3z18UsQTivRxTp69LrYngCnGK5bTPwHsUVxJSrXXMfn7RaXhc",
  "key40": "37M7uoAYvoHE6XybpuCzF5T7hiByvZXRHT3jmYKwCdyLA3CydVkPrpjaHhfn9rXU1tAL9JHzLZzLb21BB6rqqVmm",
  "key41": "3rtADyhpNd2miDVQH5PNoyousTpTqhGcdQ2cw6QSLiA4pBspgcqsrFWYhbUGfnd6n9M1SeYnq6XiHQHtC3Vz1f4H",
  "key42": "34on57D9WpmrXkHv6PYmfChDtDt9XhcT7K1syQDEmngftLnevUtbcPpiAXqMJdJDAeUB45AF4DpCCGCdTTR8ibn2",
  "key43": "nY1SyKrNNCMLwMEQQqUS8WCwvXwmnF8rnJnYD3Rj3eRddM9w3fwrNQPygxyoD9tmv9UygSinoQvZ24A8EBkg7GD",
  "key44": "5PXKRjJ5ccWYnGbcNZZqnDfRQd36MCDDzM1z8kYVow7j3VAW8Zig9pCz8XFE68G6wyYSeQSNTnrE5a9uxNWQrtZT",
  "key45": "21YF7DzYnz2oxU1WuDdZdhvS3KfUrUi9NhDy7EAKBgg2to8bgERsNTp3dD2Pn5jvLCiwy8YnfemMyBwfbreYxT5x",
  "key46": "9Jq73XHLh9ejZTyQmV1yMqpj6BLiK1Rczu5wqmHUA7JxecAqKxioTmQsTQYHUsd52155NjrCCFeZ3yJwJZsLQRF",
  "key47": "2fCxmc8r2WmLcVHYrqfZaJPVMfNPUahzT6FPrFYSfBXMAmB2sVqJzbmE8jKh1ScBE6cM5N1CnqeooERR4jVJ6VwM",
  "key48": "4iDxgKLJYguunBa1ZmMoNVgLscPLmNN6pCGqssztLpqh8FHRt6e82BE8kUeFc5ApTQJECSXQW7j2UHHZKzgZNhpb"
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
