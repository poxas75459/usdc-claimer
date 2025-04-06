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
    "VYNY1WsbdEPoJkbsbD3MpELgLe9awkcYLSG618F7DWiik4QvLwRpNnT71avJv6SLCBGdkoMrfeiMd5Avd3T7a6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bb3pQGu2d6nyeUKeEFGeiVcJcyQYNEPmW3dMTHiGn98ANeWDbnGWTatx3BFupyQijQovpRhN2Da7K18gUGHzpoc",
  "key1": "4S9wUG84YGSy6CtB8hEKSVmLiHUMAV5wE7uENhhd3oiAyDztBT8aGWQfDmkPV3dp927gzmMcbupWSSKvFweVRF1r",
  "key2": "csh6ziHtEghE7kX3Tx21BsVLsKwev9oCL4vqCtt77arD1HPVcRDetc1BDXAnNvA47eCkDYuGN3CZ5zgDXXx28uM",
  "key3": "2iY8j2bFgECTBKTpzqU4eJvu5u4zdSJALrKEPCtr8xka35Kdo4Ar7HzrreH4UMPX3Rzcgcy2svrNKh9gPuopsPQz",
  "key4": "4mg1LeRf1SeZppREfJ7kiijrrN6dBRWKCVHgNz1B2TdmtS65ZMQLaRGH7pK1gcJ3mGRdWyRfBW1ynd7vWaFBphmL",
  "key5": "2iVonp4497e1rvRVQjafzwSTDe8LGkLMyVSUHQPWfBq1izJvEtP4NmNBmoHhJPrn9H8oVZCSN327k75qrhLaNZEB",
  "key6": "2ZpaDurctisBef8cALfWAHbVx358xKpNSJGDxPo65MSxY1zSxJPGsBeooCfY8WFh2bW5LkgAP7fuJwvH7VKu83Jo",
  "key7": "5Miedgdsqye81YBUb2sFmSF9BWz9NPEyRLJf87X6vztTbQ4p7m84XvB3Ss5KCqybYctGYw5gtsLZhEZF6YnQdsUS",
  "key8": "DsF2hDnob5Bb273yrHnwfJ9NfGpuUGKhg1cCULxYhA8n3cX7JVKuvDUWKP6429LsnaMuVsGYfC1mnaJtaMgyyvk",
  "key9": "5qj2Du8NZ1JNs4C533efSGmunQLFWmqqvpxQX5oU7YWdDKu8ZmtvbeK8aVpgGEPJvr3JAzuQPHkxVEN6iabGrsbX",
  "key10": "5Ud1LRWUyAJo742Tpo4dTRshEQ1DJRJkp63yVBS31gQDBAW7LWCi2NjaHrwEPLdKk1jv1DnUh5KCVEuXZfzRK2d4",
  "key11": "c3L2LDdwHAEaCivjcBEqsB4eDXFfE2KEEJTRKmBTiaLM4CfwCoyaziXgeinPE43k9oUaR6GG3s6gurjvtnDtkha",
  "key12": "3pjQJRQG1v3obXfgafAPrURCEytdMi7uVHGCZ2JNaTfBWrDcSfAk9nLN1kkVrdZ2CRrqx1pP8mZywUuyc9esykM4",
  "key13": "4i489hqjsW1TnxGpRnNyqnuhUA2upswAhCW7aubCme9xZL8wnzcSWd8BccMmT3fx3VmRtJnscUgcMJnsqr2wXqfb",
  "key14": "5AfW4LTYgu1s9TiFjxTDJXspffQ6dpWpKXoYPjH3f9fQ4McCNDFTv5hYFdidqpUMhcy2cSusaJZGRqKTWWhmpTyD",
  "key15": "44bs8J2sp85uyFGya1U2fA5E9gTTPnHP1uyG5soHLDs734u9mXCNA3bSj7EyqyG9LzZ8GbSR6mPmLF4WthRgXtkp",
  "key16": "2rNNtxPhhQk2NTJR7rvsShuhzAymp2sPDbdypbQGJFfWicbQGau2Kq3SZWhUhpqc2geoxjhPTxPpokMCm9zqw95A",
  "key17": "3jH7Kvja5S72GjSVBhkupiiwDzG1L8d62cLpg4tFUYeRbgyeuLf5b9TpBd93ArDb67i1ND4PhK4gGatY9dU4q3VY",
  "key18": "5uDtFhjXiSJTJRDMzTaX87u33awTWynPg9waWefvgD1bA6KEcbuFByGoHJ2nsMyRW8i7vtyqoUkuk7GkybD7RjDF",
  "key19": "5t4zN5S8MPVYkpNSjvWnj2LhmDXzEEx3ysnANWeWnmymGJmC8aZbFs5NSjymr16Ck5BEcuyK2uQzXbrAjg9Lqw91",
  "key20": "3xXN7dJ75ZXkhf3N3RY4U1u2CChX2HQ5Du6cL7w36iZR6p8buaxCus97ncSTtjCTSEE5qYUuYFDM1zgwSXVPcoPd",
  "key21": "4qnLogdET7MhikRBuUzrZkb77tQh8HX7ynZxLdgq3pQQSn887CnhBbsTTxafPffpg6LzaoustUfEmjiUccuGP6YH",
  "key22": "WTkyGaL6c2aukWgmV8yWQjCwyvWfCGWRtmeGCXsaJgs1sTe5MDjLxZJ4Uo3QY3MhoLBR1wtQMYECb2f4uW7rTdv",
  "key23": "3dUnmweNQAq6fVZvMXTMMCWBXJUqY48YUWH4M14zfg1kUQiZjeb6ivmTYhLoLrcCxCLJJsRQqtqoZxEHwM9dhqda",
  "key24": "4xfhJ6ZdaXNNJe2DQdDeGWryGRU5z7B31iZHhkQzT5zKo2TuKmCHc7SZ1wqR2tupF72Bos4afMhVxa9XQ5Wu4hhv",
  "key25": "63qRq7n2DdWw85iynzh3V6yRvJ1dMZx6CGinyEKE8vMNHyEyQ84xP8xh3Cda8H7evAuf33KX8zkRGASPUeEGCLbG",
  "key26": "498cUoKH6NWJZd2WmbKKuWNVRQAUR3Xs8xGHwDiUa9eod9FKCvk8JeiqpWzaaqpRQ6pXeUx17z13suo3KuTJL4si",
  "key27": "3HBWQYN1hMJbPbGd3vKurHUaNBRatGhmngA8Tg5hcbYyuxavicdVLVsQTLT6iXLhDUSkSHyskk3K8K2bcv4WtSMy",
  "key28": "2UmGgKWzJiwk2knhaMep9KcU1mZWpBh7ftbuYj8Ek4MPnsssNvViE415dZFYjtATgGXpWoHRizyLXFv1oALMEop4",
  "key29": "JjNqRSTUnqoySYdaJv4c5zP5VcqCSH2HBj7NMLedYMpMhc9vweWbvo9dUKB7hHeCPiFckvN1DgA5LCB8VsbAj3D",
  "key30": "47dQJu85Fa2QADLr1VEdjMrbQVjpMVgxq7d2MEJsw1aZKqXNAQ7BStW2isx3MLjfFMMehygfsiaYfdSa1kJ12SXV",
  "key31": "3KBrPo7zGHuam1UaLwQvsoixHcetBQynwKRPkPyQxU6iYf9L5JjVfu6CYqwjiaVvg194vu5bHNh4B7qpdHG9yUvH",
  "key32": "4zeW5E7m9S7Arixy8sdWK66RsCmY7wku5pLN5NwZT2mGbA6CJC7sGSMXfQP7v7EgLYhgvvN3kwMF9EuMbHTyh97m",
  "key33": "2QmQtyFfTeEkGzj1NCR5wUBGfVuhpC82srkEaLfWGwmEeuJ6BbWt8YrCTa4wdwHQXGP2Ltck6GCKS149iAvgfCLF",
  "key34": "4yXrErNvtpc5a3ZL2D2tCh4exkBNzEvfwRDQ88TK5CHt8i6Lfoq1iNSmuYXrvyqDAH684EpueHeiLhUQUEXdv1VH",
  "key35": "26RyMindBjfcVPXstW6Ggp2Q2astGRQQ6XkK1TUsyhyraiLk3Y23PGnq3sFq3FbpKwEvkZkWsyQLeEifQLBABUJt",
  "key36": "2vpyYwTdZrumTZN2c83YfWjZuVkzMkU9mHmibbfZWjABdaxBDy8VthNttyzMQtb4zYtT9Ja4mbVRxEf3acj3MhmM",
  "key37": "Y71CXJsb7bzXHnW991hjeFUfXs851aVZwxCActiNRSjGDGvKW11TNXskF2Cf1shXaXNyviNsqKpssVZajiLVZA8",
  "key38": "53RN3iaHsZn8Zhcen9F5frh1Hu1C5gdCNiLXD4m2NiDXFbNpaLCcLG8pCFpnYQxiyUPPw3RL5Dsc4nEenxJsVtJK",
  "key39": "2BErWGr7vuv8qJdfLWVZJfzKEwE4NnWmmHG61EaJ3aE3cLvdfkdL1v9pAeo3hf4dw9b1RzBMFGUQxd34fLxTkEJJ",
  "key40": "3cgSaAUpVVoJkQWewoSW1o3JmhtkSkTQJNo8PhYCyK5rmHaFxuTvCoi7BDEyiaMusmHQti9WJdxsZu3ejFwc3h8o",
  "key41": "4jDFuVvBqqiWVB3jJ8mTye4k5A9ZiLNDfA47rbHUjotVKvmsRRWXh2X2CXbvo7JKQTqTbDa2drfDZroJ2hoyZDbc",
  "key42": "31ADfK5Mkw5V2YXMUmcVVeesRu3vXcgxDiBCwwq15tmJFivpdvnyG3v7G2DApgitL9KWHcWTdMGUoEtK2mjnpUiM",
  "key43": "2Srp1jYrd5pPLm6BpNH6me329qXx7Lkt1QKgMzsn9DpqgFCP4QhCvNmETkcJKKZKUvHuA6LzsqfLT1ZuDFssAXoJ",
  "key44": "4e1mYVv8EcqN1nLSRrUHPqpGa4V2WfERSQVzoESb7ewrUUzz4w5dXLDQyPCfosHQRQifNZv8YYnpMzBmkhWCShWE",
  "key45": "2DGCsLZCfPqhakkJWrHhBEFi1J2Sx4ZYEVwrqkAtoygevzx6gkECCSYNQAhPArdZ7hBrXV8hvMDbAFZJ73JnuV4X",
  "key46": "26KL2PS8UqRC4hCZLRC5HAwTFku7Xve6CDFuDfLKpF1baV6MJSot3U3PLtisiw1vG7vaci8NS7SbJHsqsF6i1DQj"
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
