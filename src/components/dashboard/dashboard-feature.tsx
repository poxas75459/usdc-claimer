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
    "591dq57gGy8ih7Dtc7L5gr79DdZJk5oD7z6wKNvBHBAFHqLiiaZV73VfoPKjA8BsqCATz57ZEw3kz6iasBMeYCMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NU2XUk4kV57ghYSBP5XkpSMoqdyfRw9uW8PeyYni8MRNa8gztV63xEoPZG1iNPd5ym6QNLbF8QD8Yz3LzPKJ6kh",
  "key1": "5Ru53t9HLZZawPPEVfjQXxHM35ehFoArjaLAyZXybmR3GgYmd65dVZEsbYT3761yUcyfzWdcd61WBT2GqwKiEVz4",
  "key2": "4Ha6nViKazX42ppueEk6q49mt5prhKotrigsMgveiyciPE8mJkMDyreLgQaKR7y3QEoEWb7bZq1GiEz9APx5LAtN",
  "key3": "2FnVvzTdivWusK68VhgczTDhwuGkXGiYyxtsauVLePsBtWKacy94vrRkLn2qyShomcFQ5iEXJzUDz64KDEH8fjZr",
  "key4": "Xiud9Jc81ck9E1DfcMJww8i7YbMUPhvXvCAMeeCFqeC6dahpeQAAW9jycqeewWrDvT7NmDDbHLU8xQe8WMdZfL3",
  "key5": "2FwWyDWs9h5jCFifcF75SbpkoHVKenGQkEt2AJpax13DJfDB2Xf78QtQjte7MJjB5mMqKmXkso84x4yw3FnqjT7d",
  "key6": "3LcHmq3ZWzJqniMUZ1aaFL2yXEGSFBwzx3YVDEWAzLDSz7VzJBm32Vz5FLXwgTFDVsCTtD3Tf5KM4KVpGucvoGG5",
  "key7": "4pCT6v33X2QdBdvwrQpHP72cEjXJbxDSMQqKm9DR1GAWxr3Q5ib72b761dndAAfoaDgQtwDd8tXimGaFL4dh8AxD",
  "key8": "2Pov4adrRGgYbWregUxAqbAgZXBxDJ1zBBHTUhiahydjY14jXtnATbwbzCiNB7HKoYDkn8hpRZy4JMajgk313yEq",
  "key9": "2MJPMm26H2untXEATMDr4UBHfX7FWxpyyddd6oHUbMifreG3xUo33i8oDcQnZCuqW1Bv2P7E7HJ4aWFVQjMXrTCp",
  "key10": "45XMtGrmCpZtTD4pTBi8zqwhmqhxx9cHGuGwTvh14UJEcRhzRXg2gGwaRxsXLTSNcLmoNDeT7cZUHeF57vdtDJ5F",
  "key11": "632VwGxGtLqbybWC1eX7yWVo9UV7rvYx38aBtYzVoTjvuBPjGXwVCewVmUss5r4fbxpPJSGn3N61Ten3tuX5JXgM",
  "key12": "kdq1mtAXiv27hJVCdoRF2G5KC2S1Jst1mXrnvJgjeYyxYSLN4dh92VJezSAxbGfEV96Tb6PLVi7VMv4kHSu4Pbk",
  "key13": "2sbes2YkLXQpiRX7eeR5sfvfo1znSfCpXbnTpGTNKRCrfahGj1ghproiFHDwsnypW6zY5wY8ijWpbe9hqu4ZMDW3",
  "key14": "2jZRgRTe7kPsDB7s3PUB8dcHRzrJ23MXcx97WcciKPAzWquC7McpPJFPgjBgvd4mBNgKvvnHPSXVza8TG1g5HUQe",
  "key15": "4kb2B2v3SUcNyAWeZaebCvLVUdiLkXbdA2zar4fYaiFhaVcZdprM76aNZFdMviodVfbGGu5ELwQ1KZxg6J9wWwKG",
  "key16": "Uo3ZY84Fzm35z7WXvQYfjcLxGgW83Su4hrZPhqmo6BcibLzqGsSKeXdEZkfpd7NCEfdvtNUiskVMFQKJNWxBoq1",
  "key17": "42jtX7SwPAvckaPgDP6jzyRuUyY95YwinYf3CTph8s1eUu5DMQvpMopzEyjUELnUACy1STPkjgY23Sp9iK9jGyo",
  "key18": "Hp8boTvfwvoZ7RSXntYWKkcWPRw9QMta6JfyRsLVW6PbyyRtzfVEvychKNGi5Ntg3DHNyvfh8CAWbwQVqRuQZa6",
  "key19": "2JfzA4XfYkZ3aknEH8eaAaLp49NPGfR8dp6cPEVRhn59bqJQUdEap9K6DrmPB49jAwiMdWzJW9XN5DAwee2YaKHR",
  "key20": "4jMDQs8V5x6LW6RHiduoNx7w8wuzTDcTMjXwGeWaUtsQF2adCrPSKZk17ZSVspYTdGSy9efGEbRJnXGbPsr8zj4n",
  "key21": "2Yim5To7ukvxCEuMMSJuVvNheHcSBNMPf2hRKfTusgNFRD9gD4yg71XLMwvvLWLJH1hHtFzYQdjorCa2tynxD1mt",
  "key22": "CisionwrSk2gxw9wTkkv62epw9gzYj2KLCE1B63DbQW7dDdBYgrT5haeA5XqvVLqhNyZsX3aieiKjTCJyrsw3sP",
  "key23": "4X7vPDDkivbKRMZapteawNL8SG5sFFAiA49detgZchBtVDraZXSC6L3R6ezpQx9X7UYrkVroLjwd37TyivgiydHa",
  "key24": "3k7HpNqcRmdvwknm9bqeCbbMDtYoabSQEwU6x8LzrLVsQmfzRpeX2FW2SeBjZc4YJxz4CdRHvhSuTwKjTtnbR5MV",
  "key25": "3vRQqDfX43zpVnZdP9y9wN2pBtehvqDFf5NAuYnZpYUf6gWW127yvaxG9JYiWJKAX13kekWP2JqE6ZE9qGHvW3Dx",
  "key26": "4cSUexL4QrFaTAqndWjyczKNHhmxyAUXZo6MthfwiCoxnY9aK9n1ei6QujPWC3fgPqtVQspn7hKeahStsMEUsvzW",
  "key27": "2xdmbcJi7Dpgk1tShQbEn7gfrVBX2C6xgpnG69E9GW6DSFv2gq112hfCTdemTCbSejkenGNFBJL9cLmcJbaskaK2",
  "key28": "5sV7RfpUd14igPzvxNFF8qb1SkBv7UafVA5pbodgdcqV2ThVsex4ceEvj8cEpveirpXGoChznXc4EjADb3VJqT97",
  "key29": "3KYjrZD1n6voQ7rWZzha8sckCcfYqaasjiodWrZ5aQetDDrcteLyWK696xFS7VHvwPxnpk2XRtGBtQYCjAnif9Dt",
  "key30": "3GVZeGhpX9ERGotCHXFgVnm2g8iYtigN1LGCE7oYqs2fftphTUX2n9A5xSTG7e4AgVrmcRiXg8JtKyVGghYz4H8b",
  "key31": "31joCCcBGmr9uHfC3kiPnbTdZmDk9WDz2oEcMdb7Ltizzsq4kySeS1V93Uey6SGQhQoViena9RMACRKcU7HZACfK",
  "key32": "LosdwweFZAc3pEfz4wssd7JyYHrNkUZSwfQajF78VGKrFDqXY2zpDq2YhMZ3YAZvkS5dzaSM3DVPHroznHW3xgs",
  "key33": "3JkXbCivNXyet7DfBcJ7HXmTPFLrHog55pxEpzXY9iwaW1z5jhAPak1MiDzd9NzQ8kxrd9D9HghezCPK7njjYmhw",
  "key34": "2S1Tbfneouik1io1LGngGcwWP3rmDpcXbewi4HNzvQGwEvR6kL3Lj48E4eFnKNRruWdNT9eP2whiNdey1QRfRu5g",
  "key35": "38UgcUei6SJQnvCek3ehmeFkxtVpe5SvibTxFbQkdrxzpAT7codsdzMZGYJ8UuqrpkXLL46hcrZYLcGa3G3j5Zxi",
  "key36": "4TFBGuJkUvci26xrv5Q37ziK9zU6BRCSuufX46u76DzByLTLiZrHhaSEyCzQcZxukCUu4CrT3pE9VSFpe8Vy5pxW",
  "key37": "42ML6sgmm126LUoK1ee8T61j5FQoCn5mN7ZW9dXsW8VwnufwamqkZzaymimmLqMTZQENRnaC7yzGmsGwozWhu453",
  "key38": "4TMv5hMXrcY4gzzDsmWJBQXqAnw7c6gV3LvXTVFatTfDp8LpkjuJSpdHvZqNnchk9SYW9oLXC1ZFcZpmv3vnWr5W",
  "key39": "2DecpJCthveYnD8jjo3sqZWSugCiJnqBbAgmc2m3BUUBnS1GExSfWp2D8yuY9eFXoXMGUwRKTUremKbEfpBmXusK",
  "key40": "3GJs2djdKPqUQzChdBUmCT4XK6g9MyuQdYpbwQ52qspTTPPLSaeJFFAQqrKwmCCJWsSfjouuohURq5sHEWwt7jkT",
  "key41": "u9jspPcUrGJtj5QN3g5N8H2MUY68v6BW8PeWpCfJtFXPXuj23kVS5vsugU9o1umHpNJAFGQQmuGLFj4pwy2uMf3",
  "key42": "3HSQyQhyrh8BmRBEncNVP6CnkWfRXUZmjFkSLjRBb2TKng7vjfn7aAhF1qJesykRXVqTnJYA1ehrnAkK95JCXcKG",
  "key43": "3JuSJNYbdTUx2oSSWBfLDGkrcG2nMhK2pku4FqajbXEdhQp649YiTBi8M3bzxX2D4ugGEzPx71MbRNjsz89XAz7",
  "key44": "24fZtRZNwNU9gvDy58onktCVvug8GHDtmTMoeCFUHeZhWAc651VGxJo1Yh6W1V6iYhqjbdNTJkdHVNsJN54hchzM"
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
