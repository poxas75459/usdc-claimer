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
    "eiNFs6AgwcauxuAYdaW71Gk12PfYyQK2TPgVH3GAksUw1tjVtJmoMrqEVYG5AKwoo5LCtMzHNakhRAZ42sP2YkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqsWRc9TCz3u7thy65TPTijThAC6vSpjEWVvEve4P7KRXgZwgULVeDxKqJXCYyh5iFkAqkn2Dj7mkCKME6b4tSZ",
  "key1": "2ceeHvG9AZ3mUeQ9NLcbW4J5izhpQDpMBvxRbUfj5iG5a3b3yCZz1Uz24X1hkMZQYi6o77t94naheNfEeJY2AKXs",
  "key2": "4rjuLmhACyYhKczUFYNuGo9j14ZZ2PMZV3ZCy6chhHppzmxKacDYemehiVsPjPbLzBvb4uorHH8fKffNFUGZ8fUo",
  "key3": "4KHpyksGRvkgPkkc3n86v36f6FBqNEWwzQa4BBXA1b86mnoFUEsTEuNNSjScHwrdbUz8qgi2EjjRWk8LhmUHM1wC",
  "key4": "24JxzUpreRAjihERHDyqBTQrPNiimWXaZkNwR2dZgwmc9MR7Xm6SeDJnk2cD9vaJC3HPZNDmQ3pucoCbBQnWVcTo",
  "key5": "5FoK4rbgHLdd3hTFUPkYK3fJLjQ7UiNBgQiWC3de2gwwBBD2v3ziAcCGcR39Hvc7GUN2qcz2xSF7BmA6XaoQSKmQ",
  "key6": "2S13AGJmy7WSLgeWXyFiPyWMmrUEFhK5wSZx2CdvyUfcLHREjd1RsiyKZupV1jWT6SpSFqHg3M1kLr8rfaALc4kP",
  "key7": "bAop6jkmxn9rhRwR1J64Yzb6NCV4wiERFsT3cW187H9kCnVZpBtTZjdKMzDdy2fzBBDREGG1tu71TaWLJSWgYdw",
  "key8": "2674m4H9KPGFupgoWbc2DgDUtvZCzWdwXaStgH8kBfwiX3wiDSEpDLJUkSaM9AJiK8SYi1fdxjptWV8f1T5abEXh",
  "key9": "jsDoDgetvnct3Qrg76HupQFyrMBN6S8m2DtmsXyAwzc2oDPya6y2ZGqiPitApwxrxQ6R3LTz6vG7CCKufwZH7p6",
  "key10": "5JCxLy2KiVFB2sCxzQj9ZyGEJHjMs42bQ149Lik3SiRojSaxJKqX8CTz2rriwryYWwKj4ktYu7Q2A3xRdXAUJ3rx",
  "key11": "3vbKo9siwWHasrrxtdmt2inE7idjBUGCGKWDjEtgPoPg3EqibxcFkk69rhwCV8euEehzQdi9vMujcFooQgricciy",
  "key12": "2uugmaXGa1G5Kb8PJCwbm46pFbriaQv4vdESsq3Xj9BkcYaNqJeF687sc6S3C86hyXexEFt5fWe1qaNSUzdryfZz",
  "key13": "5GzZGvAdczFmiM4sYgEGxQWZ3JYSAzSfw8fFv4Gf34DaSUG2vVviXEotBabNVkFiTS1k7amho4zMqxXKCuAHTTo8",
  "key14": "4xYTsWA5nBrxd5xPFRd5joyvvdPwt58z1uuC518YZGHS2Z4hddxfVquPRoX5B1vYNvYPELweAvvCMitB8C8MtH1a",
  "key15": "3Uh71eXoydxtEN69qTJGk5wgTADjQYJSNEVkWXVUeb6Mcypw7aEQw37KSgghCGzDLEhtjzjmWPkUNM9funz4tyq",
  "key16": "5bXi7JcDRv1c2L7Rsf68G5p5HpLNDazFFCbbYxKg234DbTmLnjsUL8bchBQ62TR7crsHuue73X6drzfin93K7tdX",
  "key17": "76EHqawuzhPmbS4MfxTTcyYt7Ek4o9RCHeRww3YM6XrDLuujHD7WcfLEmWgSGWhLx3Dkt36fAfRRahPyNx9cfL1",
  "key18": "4hu1WLQrsycE8FTCtNXzsFZnoQkTM53xGAhMatqqYZFY2wC1Qu5WB18p58et6rajbduqD8hkDqqFzzqxsnkrvj3c",
  "key19": "xomhKASoTx9ZZCGazWhSgc9jTYMuEEujZtKMGUzLR52YV38nBRvSpsMQUmX3CzqTVzoBeNqa6n7tHz9kTbCXMGD",
  "key20": "4GrUD2jjWXyWHRaNcrwZWEp97STkeNbgodhADQxUuTVDbKPRTPuApuNm9o2eafJKBez19tgM1tx2PPKFBJgWnT5E",
  "key21": "TG7KiyfB4h4tp3CNvPWQbWnnbqkucRAGHzj76WBVsYaYMVwPvGNwDYxeDz9jZufbUfHzwJYqhw8xSpGnd6NVWWN",
  "key22": "4MASrPbqojeJa8erYySdkBptciHqSt3tUNCpEeWR1SjBkDt3ME2UyzqsQG7SEropErPmAti8Su5YCMqHxVWTYMps",
  "key23": "oitykKgNAR73KH7M8RL1B9KfKPUMF5VkNLFmoK1cdAEu2vE5vuDY7En2uCo6b9jU42Cj6GxZUosU6cfPJg2ziba",
  "key24": "5GN1MJvVDwU5iTW9SuqeRXdZNBxZhQ1wQgu4gBo1CXYkQyZ8wbnUvJVistN23pxcRvPCc5ggUVvbCwxbPETz6sLF",
  "key25": "5tGX5yQYeyhLZKKsJyZhBGxxHmWBEHuEr7BYswUX1oVA1awuiBHUiU4v4v4KixQUtu6ETkF5Zct6faCuAtjpivtx",
  "key26": "2t5M6VoL651BhUQVQEN7rJEvynxzxnkWj16EK8BquXB6kpHAfegVeWuMH8dkMCJcXcSS1UJKCZCFWFhPsR42Cc5B",
  "key27": "4jsQaXTHfDqYhe983K8tAuHRsXLM8SKxgQUpbnP6PQrS5KWcSEboraCsu3mcSXM97SpKJnRzLiLwvZswv4tVYC5U",
  "key28": "4KD6Lrde4or6ak5G9wyKbvqibSvmp28Avy1uytfBPDZGbEEq8aUrmFz9MGyh2i1U5hv3gwm7Jt7Y1w67eCyNoEtg",
  "key29": "3Nb1VA3mtf3WXAb9kStN83dAQnXYGxE3JxsvqgJHGBmwRfA2aAvWDe4mwWXSJ4raop8ad4hJNJLh5XYmUT6N6zM1",
  "key30": "5DPV3dwA5vMvJKG3KTBJLR1bKgJ7FmqFgwBhvpkrWAfzEfwpT6M1DJqmU8eiviZfjQuUNaq69VpuPxEV6mjVvDnH",
  "key31": "2NLGDsqbUTBWBAjkfdScAACKhQqfvJ6YhiTSy3vLJWBVjGjYXic1RjG1iFHqr2cBFhKf8i3iT4C2QbcRw96rwxNN",
  "key32": "5Sih9hB8s7Hgiju8AQ1ckhw9NWS72dwhofvVrKgXoh8BvQJFa8iKULTXJPVVVPVoCWiMtwkkFiGHniWnhJHAtkM",
  "key33": "5QMejtWgbz9CEfwMghTeE1WWToAbh8R5RXZGpzfg85Q2cXEDTr2uobqavxw18ACB21epxUYzA6FwLxZ5CYvXA8Yf",
  "key34": "41xruBkkUFn7KxRSZoVPiCZpzCLTmXY2KVgTChZvEMihDbG2bm2RiXan9EGK2BLn3w1LHbyvAza5rqo2ZX3zdkGV",
  "key35": "2wBBKrR518oKqFYxdnotJQSKHnTfNgs4qNwzyKaGH3EKBNz7t1pXRXcAmGLSacqiuQBMXzCwLnRgrwPcA54EGPwj",
  "key36": "4DuN87BbXmqFfFPRVFgZe61Ri94LWy3wfmc4oVrxi29zcFqKHmbtdHFuFxEqAWVADhDRZufgDCsgTr8RULm6XRAu",
  "key37": "4R5uMKmkNXZrgJMv8HQExxRHwde1bVCdzjrmhyj4wRmTzhXPT4iWFtGDnKS4uRNzR7Y9dDaY5WAoCrFPVtJsgz2v",
  "key38": "5EtqpCiu1CKuLXEPoZnd2pQGxUbcZBFiMuiJ1ZERCD7dzuSUFLb6jGSit4e5uhk5aDraYyCvrKBUuSDm72wgNoUW",
  "key39": "5e2694oCqbjiXLgDZyLSqweiPcQhAmWESrNYWUbeEw8ybpUbY2qhgfM6vr2UbWF9EFBazoKDJk3xVpcgmuwCQeF3",
  "key40": "3qDDcTw9dXDGMucRCVqxwEAtJHPyMEPhjA5a6tteaTBgHqKbPzZ9BHbD6oDenshnUg1c6sUiaZDkm4P65nGmksod",
  "key41": "D3CtwinjrtmeoaKktpjzDdT1YA2g5ggJHmEGgahX5xeqyNSFViEkaXx6GuCHcsdkgFkW9EpdYuuz6Y58QCkN2ym",
  "key42": "4qbeX2EJAcsSL1NSMCkS4c9nGigXipVDaizQhkGf4P4cYeeABD1QmKoSCPox6nHnpnXGHixgWkgaeXHPbE3QD9aw",
  "key43": "2G8ZPgKyX2SweojGq7EBvjfBPJ5jBbgLBfoMu4pV2QMUHQaKD8EnGQbP89T2vSeoNZgUScQtwsS5YsmFizeeUH7N",
  "key44": "2FSbUt7dCC4v89STjyAMcHoMA3pe2C1WFgYJvWVECWEuH7AnrXLUfbzuYukmGJ3hWqL7Da7sKN8rxViWc1PRorQH",
  "key45": "9LsU6SiKcNFJgY7uxNnMZbnaq6wTapJAEnaXJmSRXZJNVuDkBhvG6f6p5EUd5TdRS8BfSCYcJwp1Ndknn3iu1ic",
  "key46": "4Y2So5rUmK9y2Pd8RC4UD7TW5iLDKhNVYJP9xsdeMRQNUmDnZyHVXatw3fkUxdWJaRFmruxq98RG2WGRHPnTwx8B",
  "key47": "2AhRr28WxExHiHzHS774FnKhc6aork3Z396Px7FPeaD3TMkE5ywBJU3qXbG4411nF17SsYaJzGGAu7Nwesc1cwR8",
  "key48": "2TxMKb6RfcpNH2gEJVKQz6SkwpTjPSW4arbwK4FPDptTYXaFqfRkuNZXkJL7HyBMBERPrSo1YLhsrQxwj8k5AW9k",
  "key49": "RXvsQbNhhvWJNhBN6rwCCnu8KmixX7mmnJnvCqmGVcsuoKcEVWfmaJFWyKxJkwiUY1H8zF4wmEBXQEYgUdRMyio"
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
