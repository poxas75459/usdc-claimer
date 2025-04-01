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
    "v4AcSh7UsYwkmHUeFLVfQWrkrdnF4pcEwVEvHNVpu6hT84FWExV3nUh3Mv1K9zcZn2KH9TyWcaupbJuUmJnVVYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBTFe2mXGCsufvpKk7ce6PbY62LwWWv2a33PY65w4qXh3LmYaX7aL7qjvZivwWDaVZfoGbWALAsu9yTwU9RK9N7",
  "key1": "2TWMAH9wk8hUcT8CSm9qYLeGyBCRbkzK2QxHzqWKw34th1s8UrYpjpuwyJQ86MSwxPiMGyC74w3BHQUod9v4nNZb",
  "key2": "oXiXuDm4m96dEAqbtCmQLJomM4CfuLdQHqnv242HTixqpjGj1X9mVcWZ2sycYJceC6Thg5og5PsU3uMoCumMq2L",
  "key3": "62SBzNm8HQhAjziSHo1ipb24Qt4r2XxkPkQ6McdPEzQhDw3EyTvdpFqB1ZxBbZrPks6TVtwKS2xbfi5Fy1rX6KJg",
  "key4": "4jTWnz5Jgs9z1QXvFjK2sVXmNK2tdJ9PDT8CeXtj9GnEFPHm8Vde9SostB6cZdHTFxc23ikqUgYZzHMwdes1XJbs",
  "key5": "3NycUzkLPxzwsyAsgUdQcbwWMk8iKJUsgL5wGeMN1x1xMnGAPDcTjvxzrbS59JCUqsoBG5tykNtjXNgKchou4ah5",
  "key6": "3WorYdvmfVxBvALou1nHLhAoiGekVZTdXwZ4SRdUPcPgnfvuKGggWAcH1xckvciX4ektSx3UnkmSgWvgocDXMPSe",
  "key7": "TfzwQHauwj3QEWvRF3YXCBBpHE4eRpeWr9PJMH33TD2EWb5qFaRXFyWkXnj8bZnErxkrd2QUqFuDMmotHFftvVv",
  "key8": "4n25jc9Z6BDS8XV7nGaqbBzumLoUfCfxRP6avFawB4XKTmJPJ2sSVwnSGjL3HV9ffm228EErHFGm9WgDoYaxq4oV",
  "key9": "2GyTmUKM2aUoV3RdiSF8SDFMMwSfpsb9fgZ9HcRAn13jc3whyiFF1D4D2Bakro7reupYfhvQBRkJYVYsddTSkBMC",
  "key10": "3AgJG6xv8KKX1kfJg7VqLYYUXamBJin3DZUYeN72HH7gEkv7Pmh64ADNBtAor5mTLWMPQRhZLyg8RNhP8EVUv84h",
  "key11": "56wbDp5D9iFk42DAUBr2fxdx22QpSkQwAGgBGeC1p9mQyu3kKqYy5q1bTa6nLcT52XFBmV5gvF3nNLbZe3Hmj9yz",
  "key12": "Z7YNpWPXJeaiwZu3SCCqjFLwAJMwnQaAr5e8armYfvmu4h2Smc1VbaxP2Lu6sCev5tJfbrfCaFtvpiFuEoPEvnZ",
  "key13": "2BrcjNskS1FJsY9Ynh4k8yc4N3mNR3BXViHi9mae5B7zTuH5tT1q1N1JiT8AHGZxvJRjsxck1tzBSAdcbxPZMV9a",
  "key14": "4UdWpsbHfouRWVKjy35x3Pjqk1zEKXR1dqeumusx1UYtsZ41i3ce2eRb4Zy6EVUBjZwYAc84NNuYqmxA8A3Gpg7t",
  "key15": "4UTf9PJ8nSAkgxxVXMiBkV3iMh3shnouQxeJpgXzJ5rkvyEXb9J9MEfR4qNDDN5jBrN3yK3e6z6iZZykhHtpj7ei",
  "key16": "2DtzzkGfYzvHSTAYTLPqUh9bCPot8HttcY9sPNbzBjgvepB2qoDBEWGpkNRgViCTd4Vm91yiybciRxBEQRTz8y3w",
  "key17": "3Tsu7bMbuMU3WFemVDrctm9u1sKkbwWgTWTMThxkEt7rgXEk9R57ZHMSUVYTPAzWxY2F7d5BsWrKUnpKzi5DCtpg",
  "key18": "WpQBUxeuQj4r7isYEDan1Yygk9ubEYsovTMGsjvBqFEPDG6RkHsv7stN8nhWTudjhsyBGxLSsEXUL13jG35JqqC",
  "key19": "3fkm7VqbMQiXNMxNbWf8DH16zPeVxFQ5x5J8ZWbnTngrUgL4qtbgekvy3roqWvm4auE12V4GPHvoLYo9nNozA3qc",
  "key20": "2m2itc2dK4e3M16oAc4r8TY1QjoGSwkoJgHwNcXE2ZAyAHuy1CVpp9j7PLjxLNHfCsWXQTpRk7T5pcEzH6ZiCshM",
  "key21": "vwxYpPvVd22RYH7QXBSF5mLEgvjjLEAjPrQmJV634Ad1qpuHEcZRSm9JZnpCGw2eR1sLuXFPbrpGrh23ggEDRL1",
  "key22": "2R8qQP51Y3rLvRZbKxcaRkDk6UnaLBmT8hziYTjBZ8a4sgMHSfwKh3yjnjnSQ46upNMLEDtVZbhUS9GFmoqrJyvx",
  "key23": "2RjWU5XDVkzTRTPcbiAXYwM7oRqJoWWufhuKD1dPccWV4ybxacXCVAbJGzgyMyCcaujDPR3mS4ePA4jXPjjb4uGu",
  "key24": "33vsyE6QUWYmQG62s3UaVGHCog5WD9fBHCzC2QfT6PNExwZYB9asLLU2hnxzkFTYt88MroUSrpUqD4cqD92JHT9G",
  "key25": "2uCJ5vzQ7iw4xxd3Qe932KwXiHjA76AAQfXGsqencyGfjFDMe2ozrM6hKdEJzAJVxF8QyNYHpchA7bkfyDZ961cq",
  "key26": "65WrMWqZqWtCCSY1hXUb3yXdoxYkhSjb7qE7iFtqfqNyNHkn6eJpNkP4cGcBefVJHRhGhrx9aqcLi2gSM2hRU6F",
  "key27": "43i1Ggg7HW9Zz5dqHTuFGdHATdfkizvdxKazaUDTCbfiSmvUtnSegKc6oqRcXqnpbec3anV4DqN5jhoSWUEvrjxF",
  "key28": "2pKD1pAvRVDwGsDLYgKgPZwncxcS8pkTxTi9qb6d82u9pou2NmzRzzr1dSwcTS7brvgFc1bcd7nGEAQQ7trDVkit",
  "key29": "4RFnsTeseDP2TniA5dCdaakBquVM92QiLPDxgREevRaEvj2Y9hHGToXa88SvFSpJWNK7qe7A498K2tGs5NhLTNZs",
  "key30": "26tcckGvkeLLjgbXzjTUU3DnoMsooyPKKj7yFFmsFU8wGg9gZMWAMdKTnCoEeK3CqBFPsz2zAFrqU8NUrE6qQF6i",
  "key31": "38bYYYFrwKt3ABtsbRyy3oYnkqjhchPGGS2j1U14ae3zXFKBd5MryVrGczDQgB3Mve2JuNw3pMpiLyYaYKn1pm6f",
  "key32": "4kTSVTyZvv3jN9jvdTRPmym2BHiSeof413kLxmWrx3S7sJK55gKMrSzncxXSR29Lfpu8mkMEhQUzjQFXcYRg7Ppk",
  "key33": "HuunQy6WH3C8TRLfT575yJ3PUVeSocKUoMXrCiRwLGYeXW4D8Q9d32LuSDXXyeS5cJ2Gq2xHA9qDmGYAdmjbX6r",
  "key34": "37kB8Hqst4MGSMor7RtygKQjMUZyEt7MZYjCuZteawyzDGhorNHyo5873DxNwLcxv1e9j6HbiHhgLKtfpVNW8c9M",
  "key35": "5MSejh3Dmk3DdutaoWDSDquvRBZXXhk7jRpA8GbEYn4FUtzsiy6NSwbJSg1kMH9vvn29YraoPmwUDFoJKHLhvnMP",
  "key36": "2FxRBt5UDF3t1XbUbUkfR6b8i5KVJ5oBPHZYH3V8R2CzxrRB5wEKojD3ZXvBbiys7235tFoNhBWe2HsaR4KuuMye",
  "key37": "4mJppXmF7tj1yhjkBpZMGxGBWdjnDnr3viWy6HnZzoZNvTsb4iuwLr2MzFyR6HoDHLv5RhMUbJbNe5Q34X24apF",
  "key38": "3qgu9nD7ZwxepG8ijcpgXTXsUBYUDMLUkQNGbZviimELgBpUuX1ZCbvRLVvJQyzK3oqexJV6Bsyd9GnnpzpAoy8L",
  "key39": "3xHBNh63jGWT5UeBBbRCxbCzavQ3jykFucUdUY5tFBt2kayF9BoJycaZ7bqwNgJKtm58WV4ZqtTjMeLNGUJMSM1o",
  "key40": "4boJuPNz6mfQDQ1ZV7FWjSFjDKD86LQMRijW4PaNWoMMGig8RmesftYKuHvnyGSPjkrCHo2LFTVrgQki9w4ypwcM",
  "key41": "5i9VuVwzK96NKgv5YimMF5DahvjoWxmJjg6FCb3xdgbhs9mnmnAjcWRTZAKbcpSxpq8fVzchGywPBMpHaHh1tumh",
  "key42": "2Qt4nuMYsaAyRw8aMNaVnprmmMHQ8VTdJBfu8K5HPqL7rJSJnLpnk6YZvXxMtsE63yVYyb7bS5KqYzUqCAUU5ZW7",
  "key43": "3szHp6fgfVT3DmCj1neKC7jmfNV21SwhugaAW5VWXrhSwdbwgUzg7ru5KmcMZkT9QKEogyFKhs4g7zbKhms54deR",
  "key44": "2ZgLa3uf8AFwUAiRj8kPPSYmuQoSJ8fwLbQB4h8u7Xc2PR6jut3rpJSw6Ln6DErcdFJdHm2tQZhuFbhzqyCTsWS4",
  "key45": "2oWy11Hvx8jYP4d9Cx73CP1t3sc6AkKqiEuE7LxYeQthkg3CDCqzoAUbymYfu3BFx31SzW6EYT5L4sjmjjTyngb4",
  "key46": "2k2By654sAp32PYgDp6oDnfZB2RbYoPkaH47cPRq3WM4ameP9RBXBijdwJv6wsauh5jewnaLt8synhNLLcF14adX",
  "key47": "5JpQdFXJdaZwsD6ThS2A51rodHut6RG9uYkBexZ9ULS95j52BPU4SuFMSZygMQEv6bq1S4yFwTzoF7gwNHHuF6iU",
  "key48": "32AJ18xPYdKihZ4gXS1AvKgwBthouYDSdow5NFFdRffgrdocWjyF6KMcwdGpUMSSSXRXGgXVQ2Rwg4BVG6dvuRuS",
  "key49": "5WTtPYfYVoSikT712wnec6ajroJM2C1hLKKU1GaWp8LhpRBjiQcdxraTfNVz8TVdDWcq7CmqMLqSZ1NRnptExSud"
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
