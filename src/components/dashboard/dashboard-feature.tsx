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
    "44BGNd6GBcJTpn4YayNwGjt7HXqZbPhHkPAdEfYRxspK4khgvb2QifYxEMXZXmvnL1KfJAyw4FZDYvrs8assyAro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSckohsiDdAP2PS3J83h2NarZBJwVuHVke7QHfZhXTUZwqUM5s3Tc51VyVkbSMpNmg64shphNHtGgDBrTtpy737",
  "key1": "64sVgMMfpwQK6M5SH2YEdRJgsrszszXdRkQQVcxSLJ5eLQHj6SNhkWLwyK9nv8Xrv2pwhMfwR6m9gfk2qH3EVucX",
  "key2": "2NqCk5xcMLp2prKD7ywE9dQTKxjsL7FnMmj9UJgd1nsrwhez9fk4st3reS5szE8dcnToWoE5TUuq2eHDnVEWmzAt",
  "key3": "yyKeq8gjP8oFvs6gzxPU5nZTFeGYA1RgT5Vu4UZ36ec2opQfjatntfuGpahQYHgDqVjj1Mz16e1Xvj31q8Nn2Lc",
  "key4": "YB6NuHtGNv1b3DdQuLtHYuVeXzf7b9joGahkHsZndies9vaBgTznzDFrUN6RkTKAAFQrwWw8ERVQnRhhhbHZJFZ",
  "key5": "2fRcwHCtrRVvnYAeHTAbdtsMcVu9egLQdvsmK7uMzZsPGX69BZnLUjcL6VWgSyYhwkXD9JVTq93evDrCFHUd8WgN",
  "key6": "ouvYPiswDJp92JoBWTMgBFR1vB5hRVk8jUTAtSLK6ZQsiyitZZiPkaXZR5iLPFrNPEc7Z2tQKxKLbKYqgnt89pb",
  "key7": "5RXN3vobBZMEFHLu8HXSnXuhEtgP1iUieCrmFCFcQE9mg4djn4S3oRJWF7GcxwKLxwWFo8w1PoBUCmYmseRLyMjX",
  "key8": "4TajZVLF6iWUHRHxf1oVLtr7m72YVpipreyVLjPbwuikyAGcEnBJPAfq89oCqBnzx1bKEJfvLfUjqJetXPwCcgLf",
  "key9": "5jvcjn7saUKqaSBnr8t3WvMq6cFwx9vwhM8tZvEamg1fipgcTB9jgCt7VXNDj5A8tYyZs4S1ePG8CD8Bva1dG1jV",
  "key10": "2aaM1xgy9fLc1tKTwQj4P2kuzYTpTuUJCkpTV8VKtJdcTeUe72XVDE82vfsaRKRbBZJ93zNpMocqLhEvboXzzLHg",
  "key11": "5STTKambxCjUDuDvC2TSf1w4SLXPhLj8WqpanBuKK4G2ksPSLfS6ek518AJfAtfYctZeNzshGnzuw65AA2VtPwrH",
  "key12": "3ppM6hoiiLFeBy9hF91H4z2Uje6P6Snv2dtC1c9XZjdj14FQFJqZWUVNJtWcNCtqSG2JgyMYR8kzCxEDcAFb89R1",
  "key13": "3anFCxksd8Zju9Gva4bzqMaftQZc19qXX7qk5EHQBdsruR4v85tVGXAECKfm2MNYYhno95QySioTM2AaK6ptmrhv",
  "key14": "4f7edDRJb7Ld84nezXnusK8qUMdPXrPwSVYZpgKgps9h4ijiptAYiwofW8EfABTiDAvySZx7taqHaWvuvJ1RPHCP",
  "key15": "43qnf6hTVFciX4DxAfHJZ311g1qtbiiT4uuCKUXjg1EGLQjhYtkRhTzx2P8dZm5KyRRKur3kW1RDfUy48iTZpyg2",
  "key16": "45JsLpxAmHfhsAT2vDtNSaPcbhYgzxEbpQ5p3NAWx56Qxz8sVnWq6SfKotENmBci9e1xQYMs16oTtvqvnnKSuFVH",
  "key17": "5iCf7RopFQMP6AE8CxipqZ6EyuLe5tTvhYPiW5fzdwMLBhPk4B5wKWuZzEwZeXKcUeVpouDbacMrN76Rh5p5M76R",
  "key18": "5aKo3hxvTZVWdwZohgEkGoHPd8M3A7ar3wEgrQs8axZBTNeNdSthAV4SfinFBRVkab6f43ZL7k11HX1QkREdkLA",
  "key19": "5HU2aNfibXsqNeYwqAFEehLAzRo9JXuRbJtVDosy5UpgKiXqsXgQwQZbF1W4fbvUFbiyBCX62JPREg1wbp2GMEMp",
  "key20": "3j4vuaRSqiFxnr71SKCoAJMZdRQWdr41a2NHDrhmWFVPpN56YMCdG9nJUezhqUWBqTPi79XwtF9yocc6EodAvtwT",
  "key21": "62Z1Ljmdn6zQxYLQ7ptBe1cp23FnupV3MgKSg596tBmSsNVa43Syi8hc86Brv2bsRUNGhRSdd5GMbWQhjFf3x17A",
  "key22": "37cutWfkyDFA6apdCYSTNZpYR9ke3cpYQyEn13ZjEW2gD77frtQHPtKx9QMXTZMN14F4PqNrbV2mPbnGR3yxuZEQ",
  "key23": "4NYEi75mAy5vAs46woPa91yegctD6ZJi3KJwzZpMTBAPuRtLPSfCYD76Xtp24Lg2tryjoQGCQH8nnXES4tGth3So",
  "key24": "3jDXi7wbKVFdHtLZ7Fc3mTS3KXXZU18xq7VXdtLx9efrx7PVsCaih1sqp9ZmJi4dCd4d2s83DTVzPMVDyrkQYrNT",
  "key25": "BqRwogAubk2Y1DKfVf4dLT6ESGhAxJq3Lwa8yKi3U4kwrJWBwzQRf17X75jsL97XvsbHedYKxNvo5XRT5cXCQHE",
  "key26": "3YustrwEpRbVTSchpBetEZoQhk8AEmc1GsrumLA1ovi8XM4FDTs5hVGEShHX8i86JRc3CPm5DCUAZvooeNj2ohMD",
  "key27": "2jKW4ABScc2u8Lp5RAEnEqL9cd1FTYnAH6SK1AaPWqyEcVzr3DM4G52uSqbLA765qLXzuVQbzuuaDtASCxffv122",
  "key28": "3h2oQDJ6tTZvtqbdk3LTTDfGd9bGYBYkbeXqJW2cdSz2Y4xoh5nN5jXvrXB5r3cZRtpmvFx2Yp1pCb3GVv7KB1a7",
  "key29": "31rgiAmWQ9nXBrznnxBUAGj67sht5M66TcE8JZwrRWkoSbHhuYwgKgghdieYbcuFvfAHScb3Bwc6mF6eGZyu3QEv",
  "key30": "5UvC7vdu1qdFp6RyQxuv9Tp9TFyZj4Rx92DCJceLcitf7q2YUt5WQVHLaR1U8HoPijVnQ593eiMqj3DC9wHqi6J3",
  "key31": "CH7Xf7axAVCekNrZtHFf8iH3YJ4eWsQDdPyLeVPQHaUkmk43KJYNk6thNHkxM1c4j1biJp85nuMbv41qWXymgvp",
  "key32": "4cuZTs4or7XvA4R2XUBu8J1CdbeTEbCQeGEFqGXX5hUPAG3HiNqRdkVZ4WnZ4WvJMupWUQLBKhkoJgptcLqcifn4",
  "key33": "2WmJihk22DYtSW1SuuyKEZeudgkUNeE7yGJWwU3ataNVnvXhpMymren2fgNzEvMvbCrSNNn1ArhLVKjbG2ZFEhA8",
  "key34": "5iYM36aqYamKdLxn62SwP7AfKEVyMSgkRvrGehLnNfZHH5kk63SLXVbu3fjfXMLqYq1XQ7mLFjNzitjhGgREoE1Z",
  "key35": "uCkQWqPRfEJroPzSVSt5kUCn6NyiiHMcGGz6oQLBrUmuCii48hLkqPj3K3uPeQqCNdwhEUxigYUmj1n2SaKusSx",
  "key36": "52TFkMRiWrjDs8yGG8AtKHYByn7LU9YZdcBYAVimcnKiKs7U3kRX9keGWpqtYxQx5MJhDfwoMWW82vu1BMzcJYhA",
  "key37": "5mRzH5NwWum7WA1hUf6d7m35ETzpWH9DJvPsSyQ7Szuffyq1q2zjtJ3qaszJJfdScrU97JgAtjwdswwUEubYRc5s",
  "key38": "2k62DCzG79NgGuaJcy3oLH21kgTahx6hZu67R7ojdGvP8naNcN9od9zN5Fq5cBRBYhZESoPs8zVftMpc8Q9DYfS4",
  "key39": "3ss9iZDXTUdV6rxZ2N9WS12bMVDxXijGdKq2VVCctr1sBLuy9A7xcwqnNADjDgvKAp5RueCkFQ2j1xGYmUa9TXbe",
  "key40": "5LdeRCm9ik2mutGpo88pMQybwDvodc9G7j7xB6pxUrny8HYnPeKmN566NVDsXTL9FmKY7ALDymHAZ6uDA1Wx1qQy",
  "key41": "2oU4EJ7gjWAnAPUMu82GLK4dG1dJoyTUhcxrQbfD3PrJJM8AKMC5oyYNwaXGD2Auv9yvPUXWXHPxNnXCPWxsiSLi",
  "key42": "2vxDMrtp52oibxfEf7KzAPGR1f45Q3B5PhEQx4bpdGBuMRpWS5VHd7fmntye1WuMAUUNTLMZ4Q9PCrzH6Lqqu32",
  "key43": "aKorMqNygAb6qiXwkwP16XjkUqqDtmDq69Fza51TacaKdH4bmd4AUtkpqsH5G838yThu6LWbCnMUNzqsK5GGkxc",
  "key44": "37qHajJyMtXvemX5LhF6Psq8NdSi6CBWtDemrP6TEVaWGnUHjGK37Q3NM87KYFfUbnFwuRqeXrVTcavvwCTqwk16",
  "key45": "2pHD4kToySb2xnBsoNggm2vfQDBvKNAccvFqXk7ifJTyYpqvYBtQyo1TEXfcBn4fvSd1gL6b6oA6jPmMU6gNPeH2"
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
