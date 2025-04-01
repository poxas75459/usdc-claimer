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
    "3SE8QSzvyUu3emTdXUT3ZoUM6N2BK5wPrxKBRg7swpy4iK7gcwhXeQmUXxKfyzDcGzQ2atGj25rozLDCt1NQjG5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njvQx31qCFJcrnZtLHoAzLso5PZhxqSJwMeXanjACVVEsnZd5V68DtzGQJpgi1LVNp9kWMpRT8D6LwnnXVMFZbN",
  "key1": "2v4KzQ6gcKENbHjN1XdZHtYH3YhjKQncjfnKXfVm5tcqw6Hw8PTktdmJoiaE3G5f9PaQbZgbBFU6xMbqsNJiNWNT",
  "key2": "378nHR5nz9XDm3v7Rfa85mDdgHjZVyXXV2TV51VYZs5JjZUDxbFGWGaoECuYeRixNpX4mg9JmxgXsQBvH4jmNUa2",
  "key3": "23Enx2E3YHKD2AMCLbyinXzRcRkAnU84W5ro7x6aLawpSKrE5Qxugz1atJ4133QQF3AyPaq6GmUC2gz5hTb2dkhM",
  "key4": "2rbFHfeUzjiHCLC6ZWFGzKmsKXpi3HVH35VyLSLdJuoZViD4LWQPUyi8yPFxWKjgHyvenfoyYN3ax3c6rKwQBHg5",
  "key5": "1zsc4hYW2SmPGoJdpvqcB221rg2ptAwdNhStP7AuuZf6Arm144wb19kVMT9vHm9qTQBqFxdkEXyWrjmKmTvsBVH",
  "key6": "VyM19eDCQszk4JXRvHmXPNjwg3yJ1D22Nfs76AhZpYBRJRBHL9BBAUEuHn9QQDoeYiaPEAZC6szKHnwBrJjH4g1",
  "key7": "2Jq7TUWPgLaWyakc7SgP4UX5cD23MyNFuPmyaFxU4pQ56DhkymuUeZvPxmtQZMvejPGFVVXwKP5iF9xddJKFERsW",
  "key8": "2TbjkB4PQB18fyQYPacbGzwwaHqYx15AE2J2ZiFcJeZCT2f4MbJNXwPNLeAL2y16DdNGnZ45oKq3BQsg4HA7uNUX",
  "key9": "5rTiUUCFkT47wVLvaiVfB7RacDv496Ukr1FhwvSeqEMW4MtUYT43zWBxdQFc84bXCk3PfH7uQEGwWmi3FfGYYwCY",
  "key10": "5FNPwVB4CB8gy4y9TV6VEE3cWJmn88waYxVigck2xbYocCrEL5ASoxCzVXWnRsWGuGJnY912as7yoRDWWxpvGg7j",
  "key11": "5gfxtwDNey3nLH37hrS3ijhh5EQjjzweGw99GpNPAqD6a5gszsVYmpEgSpocSTuDyjyx3qcUd4cidBzdwK3Dy9YQ",
  "key12": "3vj3JqvHeZ3v3tEfSFHA2jkUEj5sgoWqyUrPdjVD2v31VouFuCrYycChso9r4kxGSj4844fZuBonRZoJUyRrQAYa",
  "key13": "65YFcz23PQVdxz7BvRUZwAuPWCyrhEqR9pe7Qv4tp7sPLp9UZheqoZZZLnbt3uUB5V7EiHz9dVgHifZHmycf3Eoi",
  "key14": "8SNwbrAVyXzXbnAVB9eTrFi2ZfkWPGBdFwnqBF6xn875faubDsP8Rzhsq2M1Y4GR6RnwZQoAxKqpYUqrwcfyeEz",
  "key15": "A6FcFiV1sqbAAFBm7xLfZBGKDgtFwHSWLJF8ZzfDBBU6c4GzwBrhzANtnVTbywVGwrogGWE7YLafg1aEJkUsPUc",
  "key16": "2oGfJ97nv5FViF6x1iLjVZ1q6ujRTG6zpdm1DT3Nt3Qg9hY6rSjppDK7f47rXqPm2AyaW3mqKKoP75cH1zR19V7X",
  "key17": "TEwyG4X9YaSayqUridtrjnk7nSotY8oNMy9aPWFvDGqq6GLgcGZ1bhNvJg8XTqpwGiYsQzJqKPq7BVMJR95Ay9u",
  "key18": "46cMtRxGRUXACngRPkcFuXutz3PK3PGNxWBeLNhWht6Eff3gjshXbwmr4FWmDib5MCuuTbgQFnjumYfqeZTwsNZA",
  "key19": "5muFN2CVAvd4rystLyRFBwsgE8kKTS1cbB7yygijwoFBaeeCNKTXQzygXs1xA2GAkLMzGVN7jfUNzrCYA4wRtbaM",
  "key20": "51mTybHfZQknYG6SBKip5GwGx9MxnCeazh1cF8wKvZ1zxSm4VpdNufBWzSn8RYw3AZHnD9We7Fy8Z9DTBirTEyKn",
  "key21": "54oGEVzFcysAoMGmfEkFbSiCr6Ge1T2Ud9Frv7Ta7WHHfY9g1gvg2QGqefVxXrYDjSyMCVVS9qPPMF12zTeULwS4",
  "key22": "ZTN36JzPHr8HoeLS5xtRzxsAeL5rKUPTMs5eZSZygWf31f2rTstJGeGd5AZZu84iDfRsP141Gd3QBgkL35bhQAV",
  "key23": "4eP8v3PbmNsrb8ydBtsnZYw7LUtewymZgwDYfcEtNaVPxEEDdvq9epuDD57jSVFs78By8fv2FtN1NY8BEcnfpVqw",
  "key24": "4K9etzwrx1JF5C7pHLTXGVobVSRQjSPYMn7qTU78MYo3mvEoUGTdACgKzNPLGp7wAbQ8cNGmLgcG6DXz9k8GAq37",
  "key25": "37JmXQWYkLfXYeCv9r97ZxMPWKV7TBeRuyjmgtqqAwc4ktoTMwcTzZpr89prd3TuiaG4kEDGcLj1pq4Peuvq5sWH",
  "key26": "3DKKRXRc7iSAH9bcWVFqe4SmBR5dvgxPmzLoMhkPzBX2ZWP76EGmQi8udxnrg7Ne6ZFHZoS9roS5PoE1CqWmsG1C",
  "key27": "2YAeLVGoABNaYVgoQR6CHg1xkhtxFs6i3o8zM5ufKCumGgdm4jDHN9A6wfqtVT6mycusqKbgFgpXf5j6sC3CxFjP",
  "key28": "JaQT2Z5PHejwkLbDswEG5kniJtWNpMh8H7jFBJRBtdNnauxFzwPKHs5QkoKsZYr8YEbQKFeDpcEHnwL2nWCxmxR",
  "key29": "4LucF9AgVXwRHe4kjbfPfGPn5bGG2sAJx4sHBAtYvrRmT2cgGaAgSdWiAyCVn3NBXzCyt62ZXo6NqPhXgHBbuo9d",
  "key30": "4MZtYabR5X98ZApcgUGJNFJCXkMBfDx4rMGG7ptK7V1cr2C1iVdYgppGbBVwNAvYk1v37WLAtLDxKzzTKMFutJxW",
  "key31": "2weGBpPKoxPY6G9hEYeQD9DHkah91RaeQftNdUFkLsiF3kugjXMmNi33kbbFQ1AjbNCciPjBhc4TeZXH4k6bWMZ5",
  "key32": "3YQgBRiawTQJcJxJCjxzcF95RTiGByy33MBYyEz3bXRutBYhLT5zmjLMUMPQK65skGMsUA99z8L8qFgaXm4xZ8kL",
  "key33": "5jijavFevBw7xGiMPvFixSHzQcoYN82x2EfdCjEfEi2dovHQTAYpyXJQ3mKt4vucu6qYzFQTaF8u1CvuYZYfGdbc",
  "key34": "43Vzf4zH5DS4tThYaT7b4zr37YRQ29n8hnBXXWUJZBkTmDjqhSzewyDiUbGfoBeVapExn5qc5nFgg7FXHSW5yAf4",
  "key35": "3jxTehWCbBs3ex2QTHi5dpjETCQkgy6jqASaWtEYjuK79zQudJ4xaCRRK2zvmK8UDN5Gv2htKiaEhGe2M1jBG8CZ",
  "key36": "5XwXrEbKu3pRw9RSG6kpxz1NV6pQ96RhK7sAq7ushBgMsxY8KUZGvrSBUEQvwV9HiQuizwyDXnPch1dA5R9QVna",
  "key37": "3wiz3GYA4cZq7BgRDAmkofLR3yicwngHVqhFHrbmggpjtz4i87prXCjPzjAT7WJRcB47bsDu1L6gqqKhS28sFi9d",
  "key38": "5shDYh17ZNjm8hyZ8HLrk81oF1L387YVAmcxq2cVyQP4SKxw8eKvJU3NmR5kXe24ETHuXHr3UWMqvgLjt67xAiyB",
  "key39": "ndicZyNUTs1TR5M9hrrVNK2fBQaRViTjUms6Zxhk4ZpWk4eyjm6a89aAdttqE6hnEE3ZXe6a3vveQ2qDGLCmTRB",
  "key40": "2v4NGW54DgompB7cGCNnWxvoVjPRFjwmucwfeh4KFHfEHRsy2wiACxF3msV7FFuMLuyPuhBxTEFkhpDrkwSG6V1U",
  "key41": "4VbN4E8VxXYFTtvFfC6d62AirpkySZp3X88ZY9JcDuJciLQVgoU6U8TkadiiWffyVMu1u7vJGM48tVPhjhPfT6gg",
  "key42": "2c948zrKpp9ZSbv6X1dM4ruABiAjRq8QTuwziDbqTvjrHs1XgPUaQS1qyT6FnfS1tcd9os2kxvWC36Te4PK4X1w",
  "key43": "zVg5SzDCDsbXDiHPJWGxfDupXaWWvG3GcZJ9BSSsV1asX7vJEgNBGY9HphQyHQPrdAn3zTWtEc39jCGDX2Cn2EP",
  "key44": "3ycuGae9DCfDWi42oL8GaS7fGGMbn4Xm6imzGpxGknnuxysC7RB8kSaS2jnfFcCXBQcf6DAjVcjwtzQdHYJuWMCk",
  "key45": "3xmVpDrXiNYvLMTi6wZ9sdg7HWdUdhNpe5v7HxwLj7UZyn8ePRGvWWzsKkMuaNapAM2khFj2MndDV8L5xXW7PoHY",
  "key46": "3sgyWzz1hvcUugMBwDbrkqSaAaf9emHDSxmo9nxsUFJvjMEgHr26KRGqc1fbdrecRx6eLSqfPGJLDwwdxcwCtR4U",
  "key47": "2J2fWkwwWaf4ZuX1DqDLEp17CAYytFe4SsybxdJKw8YLqptVqJAPGmRHJyh35KpvYBoHnvoWJHELgduBxrPwjSRx",
  "key48": "2knXWH93VySyaU9b9YLzSU93swodPHUWfp8pYV5Nt4Hsha5D7XR2i5gXiAcyQoasEEGtXFDetEAdEXf2WdUuYHeP"
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
