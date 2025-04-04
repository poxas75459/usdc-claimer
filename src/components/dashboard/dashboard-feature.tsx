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
    "j75aBLz3gYCdcqMMXsA2i9oytVr8J8M9PSQtnc857YfHhGU1JsKGYPYhNTedyokpn7epgcFYkAJc6GXPs6MGte4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aM3hv5Raf5ZmYxFtcittsWhADesD1BnxxXqULtU2f6LYnfW7FzdgthQfN2EeU7ZaTBbv6j6ceyM1BPUuUhuoWSX",
  "key1": "HP2CfKXC3XL231ZPrAXvV2yHVL9Kz3jQuzKCvi3rYdJVxotWQ7q347tV7bj76K6ENM35BNc4raF2SVV4icJ6jCV",
  "key2": "4ZK6Snho7pvzjXgaUd8chWZrSMtE7YLCXgbW5VaEMsPD2bPdP8QbWG2DzYGaU1nNnJbN5jhy1XCtGpT8Sb738mnJ",
  "key3": "45MuHcqHZeWVgdLAMK8mMM1u82HpiWNV4kaYjgREYkDN4nQphrDXjZkAjZmHS6xpRQ2MzHWCXLtJUNT2WQZkNmhP",
  "key4": "2H8feL9cccLP62ADY8CLsqmCD1mutPjmfxXXrLFrPtX3wRqK1cKiSofMZ8BVUAP14MPgDksHPN5GogFyW23VC84F",
  "key5": "5vUZ92geCtStityro4ZvGzBRhaaubV96UULcFqS5JmddQijScNhVQ8ZTda1j4BFANeqL7R89fiXCY9dwVbe4M2GD",
  "key6": "3vf8azcqy9SLnz8rdBiH1xQ44pZntQZAVQ39Fx3k5WY8gDPpTTwGLcRBoHEqwtzdAzuSnyn9rosvsPYduBL9B72v",
  "key7": "5H4CZZkgQMegc4S77jeU8HXBgJNQnw6tEZbJJkvsTwBARTeboAxC9vtXZmc1v3gUh3raxLPnMiP4t7FVaRVgwSdD",
  "key8": "opKT3SfrzjweYzboFrTQA1iP4BiA1JzcGSHzfijojnyWbmsvDwcL3VbKLCaokFg2CMRaQjkwC5XTxLDdyPGMUbq",
  "key9": "X2hcBZwnmXb14oF4xbCxgPeBSfbkJGw23aJUkwun1xFjN5nZHFWk5Di24DhnnSsz4NteVxDvvrNfBHqMrgz7Ldq",
  "key10": "4FSdQRGzg49bYtXryv5UztapBnn7kW4iFRW8DV4KBhvDAT6TMrTV5P7BF2pFZC96213SfypQEdsDXYWnsRyoHKQB",
  "key11": "2ujs1KZRN1eifc8v9mt23cvENCKc512mFWxz3AaGK1pTFzthWV4BZe82BHWxyXryJu28nU3ksXbtUc1hf6fTwjV2",
  "key12": "j7VofxssznnJX7muNPQwYSF8jQY2Qk8viFhNBJTMUzNnWm7JurvuQF7BVuR5fPLezfLXThLr3f1279cZyKBcUnp",
  "key13": "4aaioaUiMyUQzHoUnAoWrY68Fchit1LT9Utng6NEWn5HdNhba5ABiV8UwZbGJ4qJvVA3VgyMERxN7eR2huGaeaHL",
  "key14": "2satxrWBXPFCktzZGFZsUjAmSesRtgnQDioGk7xwMdLRmjtK3ydLM1bbpdAtv6qCTz9Eyhnc23w5bJRFWrkM4zXy",
  "key15": "R6NATYPSiiZcSqeMBzApTDMAN3vEnEbmvUBkJMhJECpMywhUZB1Nku4j7eMfAqBqNLWhtPrhTwVzVhZ9Qhog7sK",
  "key16": "2awiUhJbdHcdex4E5eHvnuN6fD2EShW23QxV4SRf7PJAbAmSAQTn9AGZx66S2MbviJc2gJEwNLqa6GJa2JZBzFpe",
  "key17": "2YqEvcWpyq9M9CH7fPG1drtFQwE18H3nBmNxviAgU4na6PieL1C4oseMeB4b68rHQ1nsvFoNwsz4f1WBZxNdk2T5",
  "key18": "4yqz4ENyyAY3MRHoAy5vnagAH9tb2WMYASgJKLeqH6YHSgzbv2B4KUN2sqHLHXDrJE7JY3kYLQUKUsWedfbkP4F2",
  "key19": "2gReVXrrkQcjyvPs9smTeK87pi1Ym3J7v3h4JndSDjEkoKq9aXrYhgCw3cuSQJC1wdd4LBaQXw96WX9oKHJ57zXx",
  "key20": "toUotHM1B5uu1EHyGaLxAWASnEWe86PcpfvQpe2q5EW86diRysj5yiy5MmqK4Mv1aasnaevYA1NLy6eouND4idR",
  "key21": "5vHrn7efjyyLMvhYjEZkKAGcT4CR7xzUZnHU26HCyuM8fzyN9fhbTpWgRVaxnzbj33sRCdkQ4SM6psHCFcEie37N",
  "key22": "2ZdhjPDtnZaRrytfwkLaxN7CBf7UnGqNFzYG25zedArdFbNUdjPyxagH4fAFM39Fjw162WEDZb6ZNqmHoC24MYEg",
  "key23": "3pcdzHqnTLjMFYShuXixF7Kk5fVw4ek6gtFzEwczHewrbZfCxdnhg2zFYco5CExBjLNvfruJtrirtssZ9T6QJxSr",
  "key24": "pVkdUTMsaD6dniFLTxZaUXgWjayrFznm4GqXQDUDxFwxMvywdo2QJ1iXHuMrtJHN5PtLTEf1Xyoa46sJTqACkAw",
  "key25": "2KfuAiPn4J2Z5969HquNR4YiJT4MWXNtYAzeZgbZkE1BgzmLhVZ9GPsErT7VB47ZKJsKwMpAHK4fxDTiG7sRAPML",
  "key26": "3JfWo3imU5ERieZhNz8T8HczPn11a8CyD9coxrBEDbyFqJySLuChHessXaXkfQkA8gX7p7tgFR9Vx6vdGKhCMDYa",
  "key27": "2Qrwh8dzL4wNSRWBtDCJLS8jMVqpoeVzieCq75HNZCg79yyZr3qLVPucP6NfXnr2iAf1Cw2uvwg28dX42JnLzQ7C",
  "key28": "3ZiCoN7ttjWfJWS5qs4W7SCxbkC4Nvvg46AnoSm4td3x8ASq52e6pCmcmf9mCXBFRZ815qw7yg6CpT6tgG6CFnTh",
  "key29": "REJ2UZ8ijGZpPVS6jcqX1HcMAafY7dArssaSpGBDYtiHCQNc22kbqFztvB6C4YBpQqRZPW4Jbihi1r3ar3uUxPP",
  "key30": "2wrC5DyYyHJpc2GayMFZGvQxgUvfUp6R1uCri2whC16rrNCPKsHCp9fLYwPWmu549Zh5Zmsaxz28SXSs9xELKWKz",
  "key31": "5a4UHhMiWtqo6gL5DHZvzB6CdXQVUYEYfPLP41a4MFpYSPFosxLnfQrUuYaczXUn1frKAFGaFi2vDPciAK2KJ3sW",
  "key32": "2nTKETSCDf4Qu9S6oPK2pmLYt4v6jSMeJNfzAXsTfCsYYqhxUY9anRAWwH6MTY3tjgKqqPvg3pg5nuauA9D7PQXZ",
  "key33": "3FKuxmwdStRLZy3ptcANhMw2PLVYJm7UPAwx1APFzfkyhkgskYNPYQiwyiDjVTBXxGrj3DjDesUvq3wmmXsf3fSy",
  "key34": "2NXQmTotjQ4s3dR7KtF2PespT9z5ZU9Cz7nva1rzopXjhpUm2AfMMjB8ZQAkKFJ17ax5T92trRLPJGWVoynU9jxw",
  "key35": "rBD8jcYFrdtnqdY2iC1MLRwKAcRetnuC4FnCjEBaypijEm2iGx6m5MUnxQ7WdABmSB6tkFv4S5xFSvwaMpBrR7w",
  "key36": "25VjD4o9hTzW68uVK9vhrTohkPwimYGej5up99fqMdMdXmSJs9muqKNveLT6P8nW4paAL1FoK8X5L6pbemcG4HnN",
  "key37": "268do1ZJhnb7uuq51YLihYjtKAxawvuFPcdFfgbf1S9QXbX9mrEPL6HHyCrPYdHLQQQtw76ic7iaC6nfPTF4qKn6",
  "key38": "21QHATYiqZdQRDFtPJBsZtpTfQVHxCe6r2gS2wmhgyX1idcBEvTjLXDcoEidwN26vRjEACC7JsenuyXt21bsvbog",
  "key39": "Czpgf2sBqaJZwkpsDhARrEFYhL7ebfRyDF7hw85q36tRBUXdMSmRHkCs1f136ub5J7XtS1bhLLKhGsKE9QdWntr",
  "key40": "3TR3DjXqcp6EmtsN5gVfLtNZ3e91AZsEkWeLH9smdB11cMV4BK25ewJQHhQCh28H1ASWK9TaCrBrq5D6EuWqvboM",
  "key41": "5y1FRojYbrV3ZbZT8r5jjUHJJ5dEhGFcS79GXDSeRKwYKjA3JBxfq5F6ER7qTwYcpXvqHC3Sb8tmHZeB9kesEFxZ",
  "key42": "5ZY3wuA66Dh4DJSWn7pEtzB2KMk3qm8WfxZiRabCysmKp5S4EZoY7H2qHpWyKhcZEiJwT34T9C6sETYuGEQJ8JGV",
  "key43": "NbzthDPtHyoHh12V2ndfCMeqs1EtFgNR89iCUrRLMAH3VHWr5WzxJQP8oPiXAPHJs7R1U1ADodPan8cFp3AMVNg",
  "key44": "2qGw3L3WZ3jp3FKemVgavewFQyTbLz9TSaMvmCfEaLzSng7MuDLSaqJ6KJoPhjHZxWhnfZsiCPQ263h16KNkZSv3",
  "key45": "4g2NSNh9ibTs2y9LfobwAbMpP7nun4Y7AKfMvhVe3M34ZFYCGUVtAeAMJZ67d1w3Co89zRTEj8fFvPtasVwUWfbt",
  "key46": "cg64W87gaBKjoQKuFeea7k4TPWQNDxzUeXaJsH3UdGwYWQTAnEnANvybc7qHQp2B4UkGCuk4xAXHWAxMQ7zfAV9",
  "key47": "4mr9TxZCpQUDUhXyCSj2QTekjVLggLkiR6bJ6Y733DkVgMxd34GXapCNnWoXk9Y3RHLN83NZsFTALFd9fjVf7cG6",
  "key48": "5dasc6xat8CvB66MPrpWTCWbhxMMVuZJxPppkUBdaouoySvYGZHh1oVPAGG4P8iHRhupo7aBjqY1K8VGtZrybE6M",
  "key49": "5HghedaXvGTuZCPgz8cWemYVigF1AMKHG5TgMUDnYmrJu2vVYYSt68m1Fqsq3CJkqzrREZ2LEukVXEZ75ZcpTVde"
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
