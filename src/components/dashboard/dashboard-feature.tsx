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
    "59Vg3HLJzVyFECFMcS2rHqqmgJv2r4v5Li1TxHrF81yjx8HthgyLN1AbkYddoMB8NeEuZfgs2mcYWoEWoh3yRoko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wyfiAWAR5HT4yXR7vo4sfgmsjeCygrHxjpyRuWcp9dRPttQp1ZxGmK7umykvNceLUgvozvU4J1AA591wu3cvwaP",
  "key1": "4FJoV9EdKkAwKMncR37uq8u9MMwoH1NCaMvScjy2TdPA8oZCWHLATomMGjMwfgXdFmVJ78da95ybAQQfNup3dUN2",
  "key2": "4EX9P97zKGVSrenuYYCfvtn4PCN8aTS92dZmsuk9szLyDntkiqKuttiMxVtqWkUPmf9Eh5yFyWgwChj9GbejhpKW",
  "key3": "2qmqfgzkXSzx2ULfYm3KJyv2UTbAyCZvMTcXAj4rVSEqMLyDuDGykvadybc1NnA66fB4s2SksdvRZ34MSCrvhRTr",
  "key4": "3ux2aj3F8fFmd8vPs23XkeztbLmzN8CRKGvUJ3ETUjihAMzjzFfijKfmDkDYWjCm8cxaa9f1nWxU4JLaPQ2n6jjd",
  "key5": "3JfFFrMe5sKzE6eK3Tgzda9bmmD1GYscWQ3sEo1eKaTWA2gtAENQvdfh3zG7zmKnkLCeqfRErRVDvrrD3gsuNLob",
  "key6": "9h8nAPiTcWAUvBYxHvhi5phSdJU9LJPQC4FyC2e6FKVB978yWV3Qpx5fEqTWVuGuu9ZcP9yas1EcMe7H7uq6K25",
  "key7": "3WUz6ncBwu638s1kAx4vzXoZN7hC4iAHJh7A52EYAtW5d4uxNL3nKes7H7Cc7bh4tGQVPR5zn7dfE12SS3PyeWzu",
  "key8": "3gbkBxrAwPwEbjXZvAKAvRWniEPSkWAPDhMTMVNP9L3KknvZxFFoUU7CoRUboqP2hMx5YwzNuWwq831EVvZ9YvuW",
  "key9": "3T6K4d6k94J3ebcrb23uVXVHFUDrjqU7WoTtAHJh2dcZTRi15kptkdtGQX1Qt6dyC5xsh2F2G99x7JePrxn3YvKv",
  "key10": "8Q3XFVVmMiKcTx9xp1izAZszhVWCP3ekBX5hCrSXFaArUwsNWjAdoUEEA56xy3otMh45Q2xa5mY53999kj76RvK",
  "key11": "5cR2o8GbufMx8Fvdyk8hkVviqoNUjwdcuqDoMKDPvPp8nGRQfB3TJeCubnHVKzvLtN6PWpG4ixTEM5baSM3LvyGM",
  "key12": "5uVXaETjUaDTaJVvib3k5pEK8R4nBzvcbMyzHjLiqk4zy3MJVuBzQbB7tMYYd3rRAA88yqr3n6XFeJZc7EDeXrLN",
  "key13": "4s6FAKMXJxGbmiqQh4qSfz75nKdm7F8eat21F248F87PmM4rioCh3CVMaqNqhWsGgyVXoLfbFU97FYBjsFx8tsYE",
  "key14": "2MoMQA3WvXgZCWeAwF7Po5CqjFT3j1P4hfK3dNifzYdogz226a4nmGgnTjQxbzD5chi1phjoLLKVdyqNQA6et6SG",
  "key15": "5Qeir9ApC6YZvU5yk9SWi8ATaTv33Q8wV99saq6eQ7JUddyHKW9jG738JW62n4KgBPouyHrY9BavK2UUeAXKcfcW",
  "key16": "653kaDQ81DEkCK47hdVD9fdzQHM3fNyjnWjSghsGR4Bq2SR8gpbfuukeDDkUDyHsFs8Sf5miqus3q5QMjUWvRGW7",
  "key17": "22K8z7TdF5qskgTg4wxAnq5Npgv92s8f5nudfH9TboY3zTwhUqL1zQRxhwkoC9F5M1avwamWFULPWbZqrPajPS2p",
  "key18": "2NTTudsD62nnWPcLLdHhZWfv5Xsx9BiJBEkf8CkFwHkSX4vqyiGWXv1bEak6hgVRBBrJ4xJNkj5gEEvbEK69X9xR",
  "key19": "fBMX4voACJGpEGspeuifnt6Hs3QRqVWpYL2rNdaAvu8RegX5C73XhVfoa4ztNRVmbEmMjEs821Zc7MVUGtJ5Wtd",
  "key20": "hp1DQxn4h5SN1KNRFj61WLEGDy8qxq1VW4G4kYWZRVSJj4fxr8StZ9ex9u4zJXehHCmJAHCMkviDFbNrPGC6KXq",
  "key21": "54mmGs5C361KirtoBfvy7U84JcrpH9moNfFPfH33MMRzurAS1eTgwDihP163rWgewyvt6D8gKk36dGVAyTLFhzRT",
  "key22": "32d2qpF8WLrCFjgGx4PTJFCpSkZqJQAf22zLbdqTKnz5kxnHLCz1StNmZgvTN8ji5EJLRcsCZNJg44G1JLb5CgEw",
  "key23": "3Fqfug47jcMQUpr5MN6iRjVM6fpEgzeqKXbPBfwLXVcVzsxLStn4fyKURnHxWhN9kmt6feuvyYz53EveFUkY9w4x",
  "key24": "5E7EJiyzXV6TwXFmZycQxrTfskgbSWY4v7mNkB3MYLtb3GyGQ9KiqsuieEdV1HcRd2ZWhBEkoomqU3NpHrpsr7fc",
  "key25": "CxaXqmFC5WARzHpQUdTGpJvKWxg9LAhgykicBL2Dix3b6rAwNZDv3nH2CPx2HQEt5wbxQsGsnvkcMTKvyt8bRY7",
  "key26": "5wE2EDJB7VHs1HqSKgAUdAd1yrGPbr6PS6pti95CscfpfdNZf9fu1FgDuT3FtdPwpxiyh4qtxtNL8D5uqSF9REtF",
  "key27": "XQHncF9HoY9VbC3XiKwScnpc6RnF5u2nRKB1ZjJa716y1yuLq3osqczutDrbDCF5ReztitBEcTE7o8GwKZwSYdu",
  "key28": "3eoWoNb1cpWqJB6nyJJceZKEd62UzHqKnunXtpm2gxFKRDNGNLtYYEcEiNAwg6fygHbAwCGEaH6Q7CZ2qvLWKWF1",
  "key29": "66gnUCPWv5wh6Atd5WSKkAGyfQ5YGshB69bYZ1n1eE2sTUyTh9n6JJ91FvQW3enxeSjib53VUsMw6cYGmQ1n3qwW",
  "key30": "nSDCrWghaWqQSM5m9UoHTgutAMbkDDDUMptsUJSN72fy3FL46LQy8bPBYw6M6jpTnsWkDHbZuRwbxgVxW6eMgY2",
  "key31": "5pXudkGjtbFn7m1mrCHvpcfwLv8GatePKqrStRdTJEwYMGZ4tb7eMzZpP77MNthayJ4p1uufc7z8oeMGm1jPbVQA",
  "key32": "2e6XXx8g2tysKJGsz8Adtr4vTHdphErzC6XQqVaFJ7yrfaPU89zJGeDmXR42YZhA9rXtoceQdTzuQZS26s6i5YT",
  "key33": "48WppZLrkDK3FpVZ6iPqGBzaPa2w53NdJQPz3M3H8UHWfvrsN9KPzZ2knceP7nE4RgqwNMmnWMrJRYPT5kJofkNk",
  "key34": "3Wi2apaoUf5yULCawUqdwqpteUHVeoDQnnwkmy3RkQzHgkQnPQvPbAquq5HZ8ajyxdGfV2BCH8PAyhy8dDSGqG8K",
  "key35": "26Reqa3SNdEc2u9LcMAjKTZtfoPjvfSMPbWqFgjrjABMjiqkJZuekhbFi6UXkQ2D1LcA6DdEDAefXYQq4YBTJx9V",
  "key36": "4Q1bARSsB4v4j8gEEUTXYZxV4ywaC4PsB63KFg2rFKzqgcCMhkJvUTvMd9GDAAB1jgZnBHmoKm2mZtTfUzfgQYCJ",
  "key37": "25ayBxJJ1zx8BCuPCssYCQhNaoVNUiuKPjShUzNfEr8vATtcEzxV75cJN66aCRjkZ4xrrvhjD29ic9GaagoWUAXc",
  "key38": "5nwj9kxdpRc33HK76cMfu4B3TgcnPXXT2AiwatJUWusAD7vx98CD7XFEQz9GKYLcEr7RuyMxxNzFt9HZakDjaprA",
  "key39": "61tkqjaKzVuKNbsSEtiM3ofqQnVkbitnNo42STg5i3YLEfUukRzPeZKGX25G9Rme5qSj1n7Suy45oC9MU7eaRgUC",
  "key40": "2UHBxZaLnqmFYfekwKTpARfwcQpEQ3AFqrYncuCPJjE5xm5AHesrVFc82xbtEYTMaTj5nCdhQqwgeopaptnWJXht",
  "key41": "3tbpSXQWvpZae3LwrbprjnMVS814A8MYusty6Z6x7QifSKfj7vMCtdxRnEvu8g53qMtN1k8zFENDf9LN1Yix4D8a",
  "key42": "52ciETXfmY7DWEo5eHmoXunemgo1Mc78DkoPkWhk2XVc5gXrbVkE1zprsG479HEUeFfNAjF1BvPCV2ccEeq5Zrr4",
  "key43": "66CJCvVzZUZRNktSyMLN7B3LYrk45M7vJ3eKkxnyrNBTQ77UgCSvNCcaKKGuAm4G45Y14hKQFptMkKYvn3YqeroY",
  "key44": "JwHwaLcCbq24KN848G8nPwQexHTQdr5La5d7KcECu8PNCM6F2h5oCP226MFyhNeTebnv2rEvS5yaUQ22J1mqxzd",
  "key45": "5emXouBwjM6qXXyx2EY2TREtvc2bQ93Xq92VBBAwwK1aMGyoeFkQ4Gv36AW4Zq9nb4iUxvhU1pTVQHPz7JzmdtY3",
  "key46": "5uGwW9McLEu8BgNrSkfEZkBuGhaD13Cxo3cT62iVDCZCrhQ6Trb1demCgWH61sDeA2KSp2eCcy7omS4GG8s4x5P1",
  "key47": "jMQx4YuRq2FhuhqGX1SrT1MmcLckvaLgvEHB1iCKcxUB4zFC3ixDdYBKwjSN33p4JLYM6RzVY9RKfjHNmjR6xKz",
  "key48": "3dckSm8vzNtRLFmCCs8iUqPzbw8qrqLDGqoABEWYjZoJr8YvytB8xwsCeBvUV7hptVUqdEr7bd7yxCcQrUQoEFGs",
  "key49": "SjUDm4PGuabmHsyT52jbmoNW6u9MF3L8kd4oTKqHyJXB9HutVqKd7eEbe75KmWgj418bmKuLWz8eKQcGgHUx3uQ"
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
