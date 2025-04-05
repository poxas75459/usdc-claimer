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
    "2TZg1PRdUezDnqDanKzJJepDAKRThTPCm5n8bMWQCQBBkHUpLkZixVVAszaqfc2iPPm6LDEK7vYAzk4weHwHMmCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2vshUKqnA4DFY1j6gVS2wNvf3LWBGnGFJwcMdbjj3uRNajUMfzoAczgC6TZXtPiLGWGBtdimxSEBC9tecXo7Fg",
  "key1": "5EUoNE13m3KoGYpaUApaaSDLFRrQVj9a8vpXkoen1JtWAmogcEi9xdXAJb71aBCe3b3tJ3vtP5SZLd5mma6i4ksi",
  "key2": "61JCFBE2ubUo9KpsC39TDa5kDFHtY8rW29tEzgYEZjcWJwcnMoMNVHxHHCHS8orM4zDtF3Z9XLUbXUjUZ6RByqMz",
  "key3": "4556UEMwe8BZD9YgcjNCpzzyWroMVeukSvwihDKNC2s1HXQxEKYf921XxGEJwxKU2yHZeQLM8arMmDeKCh9yogaX",
  "key4": "3PvAK5Ayi6M5CLfaMEet74WqWsH3EpKADhs3swJdS2wkSeoT7xXBiAboXXWocxXNzLrCfahEBL1G6wFmReFoJiSJ",
  "key5": "2NXbumcgEJNo2zukw7bTLQoP1ej1jJNi9KqHcjmxUBGNWrsQBwqcxLhqcUNEvNUS6GAYLKwTYADweZSv678fXXad",
  "key6": "26hQ5zAA7d8Zsws3NPqnpHfSs7Y7ye35Kztat2RuEoJsT9vdyQAZzZvWgMt7QFDq7KRXrs37vZag8Ltk2y2mjuV3",
  "key7": "Uri7mg2RuuzjbqQ42EYusDeQ1cnBCdL6nrC2Xng4LTPFRqfRTJWvGhvCr4vN7sShx6m1sMts9UMh2sW4R2EhP8A",
  "key8": "5fHFgNS3yamNvDxJwUXtRfUbJxf4xxb8FSj2yaS3CKQGGB7EbVHtTeMK52Cu3rDfcyJmvui272v1exQqn6fE2RJr",
  "key9": "xdQV2eLoMVd475XwaavypnfEBPoatarH5W3SeMw8eRSQDsnYd2jK2fUHhGR8AAGcqwbToTLYfJet5K6vKBqibuZ",
  "key10": "4mmS4hBa1LVZ91p6J3M4GoFS9w6zTjvju2ViXx48kGVErA1hbBdbzuG28siQ4YrAw2otjxkzviUenZoReAt16cvt",
  "key11": "3RbUJBZLX9VqPLdZVDYyAdnr64Q5PK7ggtnrpS9yo78RQagj9ux5tW1JUmeGdWnJ5TNP8a7mn8kMU9g9m8yL9dCw",
  "key12": "JoF1EzJmFd9KGPK6ashDMyEnnexMQ1jXArLZnigR2Cndyt6WU8svEpHT7zUumaQnisJxWLNLHhB8dkFY3RFE8ir",
  "key13": "5VHbmigDpdU9frZmZvkFcFG1sqkYinBUoY8NMSqN7JjVcpHfEyHj1drP6ijtR3vFXU4rfeVqrZbpXBzJNQ12h2Kq",
  "key14": "3szMfYvTRajr6ELpCaHJoNtfg3zASKGSsw47sGAANNCigceH7XFMvXTuJ1sw1yQSomXUpjehsf1pBn6Wc4zyCfuY",
  "key15": "3VkwsxsNjncewLZxzq76w81KE39CrtFNRgKb3E4624azYVANjukNkAnHUzbz1oYeqd7eeqnjKRka7fCFNKR1VPdz",
  "key16": "4EMQwJx55wAJQ1RWWFJoVZSWE5wiGnzaqhAqKQPUupRLVm4nP2XFnjHnjK6gQQrawL2vC8i87oJcuh1zBnL3Hb8F",
  "key17": "5SxRH42UZomdFPEAy1v2TgRFbKCgQkAXyAcRA6ayw8NHGzy38qie9rLfWDXmLVWFqHBWDKzP37zhWngYab59iatV",
  "key18": "aUxiKfGzsnLJRgQk2aetAzCRkWFo4Nr3uVZywnjEYgRrLiuagm7yYG6iBsny3b9LLjz5yXzQBLUuguqg7xDhSHf",
  "key19": "2qvFFz6NaJosiZpejMUfq46xm2h8gVDPhVjCKMNLawbqYbfs4LsrTPEDBKAkj7Ks2fBz4GSFxhD9tXTrxbcnojJQ",
  "key20": "3XGCf2m6ru3FCGZWjztwr4pGQeV5NfsyCSvuxF4Nv8PeodUgRRDnrhWeA3621f2NozGsFxi5GjUc5XMKjhCPsnUE",
  "key21": "3Rs7kxe1jrrMQGXWtHysc9PJeWi8eBNiJbVkxtZE3QZCdeTqAu99Y7f7zXqyP5bbHp7doiTxDoCYYfoEVmdR3Uxm",
  "key22": "497wRRzyGyQ5AQY136XkKxEKp7Zz9Md3pFynWWAcwcJkkBncGi9k1QwY2z9tzai8j92uZmuC9jMzCvFoHi2YPhqr",
  "key23": "2mcfHWsfTNRCchyjmdXeHZtA6oLTfuEuNwSoXMSPkRQuKCVYDaEoPhDGkRHdTFaCSwo7pz6r2mF85RNZFG1LUStH",
  "key24": "5oBMs8Cm27gXwq6AZiYtxL13XV3vBpW2PQjQabyX2N4JNqxgFBRi6uAD68tr8wXZVNKdG9Jz7eFr4pzT8GhJbjsP",
  "key25": "5kXEmCCuE1PUbfera63CCeJCk97c5b99b8ABD5DJkwk2Ha2HzCczconmzoqoXZDnzkVDpJ4vRSFNZ7ypBRqNQDKF",
  "key26": "Eb4TNKfB14CxVhJYD2C5pBTKLJpL3pXf1ytT1ugDtxbUwAJiShVAXXRRWug8ibabL3CqWQYGAEz8woQGyLcKp5z",
  "key27": "5VgP9Qse2zuYmRFGwQQw6joshR1z4T2c49i81e2Ptpkf5WXvoyQ31pQDzAQqXwyb3KKZHwGQwuchKgTrAcWuiM94",
  "key28": "SDjwSRQcv4kX7NkYnkrU6NNFBUofJuF7AUKKuRDx7bnxjpTTFhx99DrhWSBpiiZnX4bJ4WaGRq124tgg8UuRpg5",
  "key29": "4MjgUGmGCAmMNbBvAMTwpHHfm1TgWpZLVik7AZHf4oD8wLSkxkPNJE1Nj1fMw4bBs2qk3wGFUxUMyi4aGKt16WEd",
  "key30": "3ch8p8NdKo3GPexBiwVtfibXVaEV4xSg7EdmN8wvwBvV6ChnDhGFDJZNoFpLmd6B9Fgx7mwL43bYmr6fdMsn6wYc",
  "key31": "4xG1EdsUrtAjzF5VgG5mwsqaDHTZbJSzxA6YZrw9LofohN57jdoDM9wgnVjkhNdUJ1MX1WCSLbxftF63t9a7na6x",
  "key32": "4bXrmF2w7CFW76mipyRMcgMEKiF7imGcLnF5AsUsk53Dd7Yh1wF4GDyS56A7sNwrxCspN6PdWr9CX2m4s4fVGxWn",
  "key33": "4SucTfg81RNS6Kt51jdCqjQ7pqNQsPxvACQGGKfEEeC1LG9rk12wCoPk4aVrKe6A9rtVgtQWCQxBMsdPMQeLcRzE",
  "key34": "2yo1AMQBvQi5dPruGFQt7Pr4A58xCVjqRa5KfnHyGeHXKM6Wdi3VrfNRR6bBzhS45xU628ChiqNjsj4Uai916qg1",
  "key35": "3yDF8EcAD8EeE2gkpqNpXiN3fmtBgiTUeQLjDf3uEDtAk8L1dyHUzuiaYRwDTj4S7TBt3GoSGrM2cvy9HQhft6Mx",
  "key36": "5TbLoaF6xjroJAMxEZmfZ52Bn7PdLzoAR1UgnHsZouSUMfytuaERgdMAPWMCUv3F6MHDbwTpeD5SsWiG1h7mQJPh",
  "key37": "RbzNv5xtpuxq7upK4DZuFEwGuXFqiecbH6RcxNRcTc1L19sdSZ2KzExNXHjp9ejvJG6AhYR5Mox6HSTiyVwKgq2",
  "key38": "KQp9F1jtkepTCmWyGXLCeocHAoKjnVs2tY4DYpzsizv9CvtGGRy2r6mQo2HaxAh31XojUT2VR5G76p449TJY5LH",
  "key39": "3JL9pV9c17YpsnJWfgRPGh255Gp6cNfpg2q8UFqFLXXLivrZjHbxbHDUhYJVu83SGWeSwcceLPUUfXpsqRKBiWVA"
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
