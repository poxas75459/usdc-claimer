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
    "2pQz1PHwtGfrNa3shkGLmP6mUPZd5kTN5Etb65oYsZLPpSgiTiW9YGMJXqRQcS5ydvM7HyWraxHL2damu7YrcC9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjuWqXBfUR74p9ZhyGTx8CxrfBk9TKwn1zkjt6UFSms75t389tBpQpi6QT4AJr1ZAegsxZDQQWsBw2Kcxic4akd",
  "key1": "4nYSzxegLf95wCRDWJZNdGJA1CWcPmqVM1WC1oSadGxsKYFaqPX6DtgPX7ai1h4bhT5yAJ6cGS7ZFQLtzpBd63LZ",
  "key2": "3WrX2uD4XGJ5ajK844FvttbECaUFsaEXs8QxLkuTUxgVfUuRxiQ2aDKkMjRRuBvXtjxWvxzzfjXEPD2kuaJj1v4H",
  "key3": "3FX6yFmJoYuYfcSXETCUuK9DAwPv9VEyaiJSBknPAd6GrvUY78xS43pRbhhwHaGbYYTe1UJtkKvkEPtXFySbnHBV",
  "key4": "5SBL9ua8gvDpjBuzATpwwhSbdxR3DQazNmAH6mYm8W7753es824giX9wNqpd89fKQMTJQm61f1cRAUj3MxhKwCjx",
  "key5": "5mfPHBdq9wwNkD7yugamGJWv3srB2Z4Zk37tc5Knpe9FtAht11Ja1C3mCcoSY9H1EUvsaRK9RK9U5aKmTdxkvNrk",
  "key6": "5X9JeH1rBzvLHc6E98xe21ajc2G4WTShFU9fA7dNYzCoTbJ3Xxs4ZoCEZ4eykSeidx3ij8SGyr1jDkjBnUmQNr1u",
  "key7": "3k4iM6Ycs3XbkWK7Gz3XBHC6WcoJXvQzGSqdRukhHYnQEDXRhsk58WxfzUfA2MzXGk1XvXoZye2cNS4J82jCnXzP",
  "key8": "5Sb7ytGL7mX9at7Sj8jQQX1Lc8wWf9cruECrubrWFoSnBgJTEBKAKdQpsfriEjJG3XPHB6ZcTuuJY27wrETakgXT",
  "key9": "4drosUeNUJGUEi56kSA279nNvGDUcYVDAaPwCJzd7KQugfoH4rXmQAy1GaJwD66CeXSnjoTjvnooLMBSRGt3BiNG",
  "key10": "2oFWuodSsiYJAspMVebBVSvrZdXqn4FE84LV48M8g8oPiRQ3sQeBjftYfiBCrE3ExDD44N46dubGprn4SsLTi9pi",
  "key11": "5WBNFbryP6SswRopGnnSppJ5bkKNDyRKSo47Nb9UTgQKv5AQzQjeGVemjimyDozQ8X2jVYiTiJ8mRYNofte3HY77",
  "key12": "2dYjuq2icC5pBfjGWBbsm3LG6NdYBJCZaa3dJBcWQf9pVNMdCKqph1zTYZGqnTwdSQafUfdq7RSMtQrnby45f7Sa",
  "key13": "2ccqQ3tabha4DPALAJTNFkiRw3QmWXb2X9do5KZmGoZFkB5ueoFUptW28CNFHZDJ4V8HYshC25Qrcga8dZgidW4N",
  "key14": "4k4XAHdtM4Lr1m3LRYaRxeiP6kezYibpF7cZD1RJaSdsjscGpUhMKhvUHJkHKd8hzQpGh3DESwdfXQcf817vHsV1",
  "key15": "3pJKjt7KAX2A7aHmx79tcJJ2e4s8G37M39X7SqvuHkSAADctszBpwjujWqYSMi6229DUPuUTjnxjAkbfH6xssGdu",
  "key16": "a1qJs2FrPpfwJQEzcSUyHmZnfjX3JMiaCubxzjyUJGXAdRyChVFVCT9aQhp4yLbgamhRbgc8gzv7KZMGkPWvRfP",
  "key17": "3D2TdDGYKaE1PJxfLcoPXF3VdEG1VxXWifwGMmj5srfdKxGrzv6uYH5KJ8Z6s8cUBjzQp1NgF4HEmuhEUDgDWnMA",
  "key18": "3LmeAei44Yj1aCuSKm8gUkH2uQnv9nvciMaRv1xXjLcpdxdamsyfzAqZJWquJ3yurgrctEKQtrkTmLoDMS598ssW",
  "key19": "2o8bZtfwJYZpRFGo8mekULSYpcovu3BDprjs15ZN5b8Y5r5nGLQ5GMsTWaWqVC3ovKGF7DhvXUcbD4V8j5prsv7A",
  "key20": "2hAne5QAYyiH21NrrhKBySqj7eZfLEzDeyTZWqEpZxy5zF9pLqPC3Qvn6kSSmqQnAvJBQPU2znHFbya9qPgWrFoJ",
  "key21": "2XKvzpk9KNDcTeTJDnpyxdfgziKa9buJrm8p2rSQQAxouDuJf53xA4pS6tDa5oi5xP4XZ2BsoEw2dRACWAqiJ4bK",
  "key22": "5SPVDJPGf8AiwaNXb7u2DN3Q7H3rjudV7h3gR34ZC4AWf9mDTnTHJE5A4Wc6LAMy5NZkF5rPf867QF6BUTe3bhq2",
  "key23": "3ictXG8eh5qPhVPc9oyFg4e6NByLR4stSZCPesorN3fik4Rq8T6EihkhGTjHJ1t83MLxRcyAcKbrRAi1ePimbZ8",
  "key24": "3f7HkiF4ZayDx2cS4XqsA5Sg9WoozHYv9hzY37Xef8dYciVaZ8pMj1x3M9K34KXngaU5SZzHrHxDMFccE18Wujhr",
  "key25": "5qxGH7rQ2ipGdXkQuuknPLu3CrMo3HxVfBDnHhZQ6TT3DfHEBKdhRxnXLmB7sRKfCR8aexVraQkPYwGY2m2QFQ31",
  "key26": "9vX9mxSYHEgjvYnVkupkyJbLitcpttLFcSz2sPTJzSVmLTEvmvdeQepMFtg1STAuRDF2Q5hcSdARdjn4XDkHxaW",
  "key27": "2G3WY14r1evZDUxANun9GGj4zePd3cM4kbyDMypPAQXGD6GtKG1AWaGD12dnghM8Gm6w2jhi8CWKRRd7eSRNBLhX",
  "key28": "3eB4dJapEY9wrXsX8LzXqKXJmsWHcdbtY9gHrgTYs3Dw2Fx73QwMryNbpyobaFrbuYr94R8Q79NBTuketSBrGHtX",
  "key29": "frR7brtFfRsn7HTXAXbzeytj6C3c1xJ5A4wnZsJbP9D1CSczpR4MAZJvBMBJbXiXq2f4dDh8A6WZmSHSreoaDE1",
  "key30": "5RNi8gKcKetVEorUYjJovM2rsJTFCqkXwp8bY1d8NKd4dgap4v83VGWMfw9V7NHotjRCDS8ABTmuw9FB6Y4FSxnV",
  "key31": "26HBDjKwCK8y6SfdBMHg3YhtXGRsqS1nDMd6JMtqgHRCU2DFUaJKsfA28mpgi9DiRiXr57E5UT5WLiNGkvgMMZtT",
  "key32": "2zteHdYjjdgihy6NAp5ZqkzYZcLpXDuJGmSbfPpTrMZFyC9jKshgGjnSZtpj11pUKzWsvsyrrGNoArvg6KoCNbLM",
  "key33": "4Lg9AEnE5yiJyTWv2F3vq9AyDW45Fe42B5RsCDMNf1DDb8xqnetfTV1r7976fCF3kX9xtNPBSQD1iwm8WkLkheEA",
  "key34": "3GbCWNqobXQz5fueDmsqfcL4HT3kzJYRyKUCDFxf2WUSWXx5zKwbygBJvAeebjE1QoPBXgrUeHL17Y6agxTjC8dz",
  "key35": "5hYdiRkEz35JLUqmqRwKKwh5zoj4AXv1LqUs2bpFjNs76zH4cL2aux9NiDRPNfG8Gb5poLiWQbkQ6JgQXoBhFer3",
  "key36": "3w2vTQ1nnr6UqxWQqa1Pw6eri8RFGpqw9FvW3qdUTbKpJn574d4p2neV6sooQLxkR2kms7vU6KwYdcGnudDdGYxP",
  "key37": "3SJPQcctgsLk97k675thXcue7sM2YmZEnThHsuMHwsH1t2qga2evvfWEDKfPXP9LK4J6RUq9vswU7E6GtdnuH1iQ",
  "key38": "2wW9qJ6dnRWNv5yxzAghmhtcraMRXLcTqefWy5yywWto8H6bNKrt4k6vRx7xP71AjBYxsHhBhFCWHjcpyXBGRDNr",
  "key39": "3Sipxys6W46sGJonHvKAuLeA93hRxLPCvJknUyR4ZsTAEAc2X2JPdzUbhmDsgwVxZGq6wvFsxWmEzUYFxJUMA1WY",
  "key40": "31Nnnnhxt74SJDugyAiAgpjyMUhcfLbvdn89Zy6JoH41F9qXwvQCeiiGUmnqKnZnTaXjxUoXST7TbrPuoLGZWM5X",
  "key41": "35b4FgPTmwCtNVoW4o8PgNp1k2HAwGB4ch7W9RSZ8ShVTuaePZJer8A2kgwoWLqxAPdUmjmdH4Di6xgxwUKwEumm",
  "key42": "C9mYBU117esgKzjYEYUF8DRkcW9MaxFuyak2156i4pQA6cdEvKFAkPiK6QDAZnjgX5xkR7sqtWuFAPQRA5eJbHf"
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
