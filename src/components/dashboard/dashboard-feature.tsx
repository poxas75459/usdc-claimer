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
    "5gk26rQLqX7VB5ZB7vMadLjpakWsfqdkR7c27ZmYpyuUWoHgSybWQ2RSotHxAcWdwo2MazxQmPn83pbssRzjjnQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmvSCEhfKxNoSvagM1AC7rMNbEuk8m95HkfQGwEYVPyNy7GD3pfNnLhQ6Ch5mg2jCUr5rD8m32SaV9Dzx63AkLg",
  "key1": "fB4pbFMHdEzKx94ksvgHWwgjtTgg8C2EcNYRLtDbodS8rxJxeQsQ2LhRmyDevHPzzoCLWpxeaYnQPuUA8Q1xRc6",
  "key2": "2925xSaBdmA1xtUUs8PDTe5RZUd4RFJ9qR6P8yU55kQQG2HEG8iCUHcvX9k7wrL9QBkqxFopawETBKMshY6uycdD",
  "key3": "5DFpKft1XuNtNqEbfGQvFA2f3z6EN4MQehyx3HgHBYVBNCtebEwJ4Hcq42dwsskyfKEk7gyXkDC1EUtMos1U2u3F",
  "key4": "4djiSGbTMNkCwHDtRfrqj8KNbSnQoXP1J7DEMH9HKA31PgYDxR3itDbFQosaBhesrddrUNZ7SKfgtyfGmDsgyKHW",
  "key5": "4mKmooaJswyg357kgaPHWt692GR3wt5LDa7XAeoGnBq53fZ3GyvaHxv8zfNs9Bp3DDjXtn7fT4W4DLFWzQghwLRB",
  "key6": "XqkjXNeDssjJgmKZGksvGrZk8sxwnpRA5BJqpxuNyi1DVxc44XGi3hCFH77g337i5gecj11meB4ezL9w8AJbnzW",
  "key7": "4bQiPqiKEEzGjNBjLrnPznRVHeE4L3RxbH85F21ysTVajgQqHBwz2p6N5XomRg7KfurBApCqXtENqvsxnDuB3gvZ",
  "key8": "uyTsWApCMwu1Ekff577qJD6NZaAkSbjCggZuRGTXSw5UdHDWsndrwwm985MUb68nbDUCdH3VYML8jD1a6tnRUo1",
  "key9": "3u5ca4wtQgDuq4k8egVL5QDU5q8bka4YVUGv5QVa25svjq6VSCE9Xh9sVdwbL83A6Leqed6KrpPU5j7ZEri9DStA",
  "key10": "3cqcAHaeHWyVGpWL5sdUsBT8NYj7z9H62fcDB2fxabL175LcysYApB4x4Gz9yRmJyvmaQVSiEJuEaDDW1G9iS6UM",
  "key11": "eTx4Bcvs4ynGoQxNkncDjDEexV6YZsUyUQeQjF1tSdAZTpKSzh3RJmro8eJSQY8MMLVEtyuZcmyvo3vGA8FYWvS",
  "key12": "2bgvx6npvjpbHXagmNiYRHP2KRfwhwrJoDzmkLcynVdUHZVTxEVNq1vrmNS1NB2JusiFCvisfaHrRmEepug43cDi",
  "key13": "5Pk6CpV8RHeoeRgFt9C7s8Mr3pRPd34djtvCTyR8khH5XtosJMezaPq2uADsVAqGaM4oRL75ebjh9pVP3xy94F3a",
  "key14": "dZaKS5eKCzdiMVLpjHaw3TWi6ULn5HR2CspjLjknovWftAYGVrSF1BHgdroBC1QZgqVsuWq3HhYLKKndgmR4ajV",
  "key15": "fVJx95j2hoiNR4vgdtp8E78ZvcyeAPKW9hE1HMGXrZ8QLsMxCRbrBq5EPSqVQsJCGG3XdWNFAb1QQ7fNM3arpxL",
  "key16": "4TG1gj9rECScw9sznPSz2x9Cey64zW8s7jtg8EjGgz5Hkaxu98iptLeJW4fEuPd4u7A7ZUVPZuKJQn3ypszJTi4B",
  "key17": "3ceZJXSmtrguPGv3sMKKnS3LKL85TBaLdF56y1QCZSC4jfQg8xAkosHaRyJCP6HGmTP7ApGvf7PvnuEQ9hnCEPrW",
  "key18": "3JdsrZDWEtPEuc9RxSGz37sAGxtSEDfYXRE9wpExF9uYb11HtWeBkJiFRQE11kuh8BUqMfQqxLLYxtwg6j6xWvuG",
  "key19": "5gjGxFyVeNbnBZcy9dvYMB2SSxCvuRu2EBpTQCnaQGujEDeUFoExevQNF7qS6RLUowi1LVVGPESUXSzkjE12Ngtd",
  "key20": "5Ar4fWtePWN5twEjVH1n9FPp97AqDFFvJKe9vcCecgLdRuTGmt3H5vQqTA2CrdNE6JAJwYGMWNQCGqm83wSXkQgc",
  "key21": "2aHTv5UCUNX16YeadhsQiJPDTdtRQ2J91bUCuWETAe2B15Uq4yDUexDDVXP2YTMybBevq5JdjP6Gs7gTwZq4RxGz",
  "key22": "2YSeHqEu857Gx5DHt8b95wjEfU22iynCzimSvm3H4wy4ag13CaBq53BZ9KZDAMSSLV2EenqJz2ajk68GwHUEjt9S",
  "key23": "3LNzF72HmAoNwfChPJz4Lc8fDD4TtLqWM8t8HYHv3BMKcDFFT6wxRBTEJyXu8wx8QESCeiibxcpZaPYQVscrSev1",
  "key24": "suYys1C4CzAh7JxUDTkSVNiiGq3CiZxqXtpf1mYMYB534tBY7NTsh8Fk7yBszbAfZSNtMTSTHvXsSL4TkgdLRMS",
  "key25": "3kEgjDqS1WydUs3uiJn4Y9MagQqtTEoRWQsWhVkSETmrsQFAFW4z2bhsgNwBL8WQXhHUVWxUbh2ALD6kHXBdFbAN",
  "key26": "HifuPrvPnriNc8xYjvrk8K9EYvkXQ4dr5pYdmoFowzux6T72KWSknJPRYx6rWfNRF1xMvpfobJm59ouRxsgRRBv",
  "key27": "4EZYckmNR5gry6phZyuBJLY5DWthns3ZDyQLMrsst9Sd1GP8GcXV36r4xs5CytxtpT6nY2Nn66MjNsvurNZgeSRH",
  "key28": "3pRwxVW4b1uRxCYrUCv8cPZ54r2Nu94SuBAqSUCHBVVRVPcJAh4vUk8Tdkbj1weBQN6G4kbfUEv1AN17eGhNFuuB",
  "key29": "4xTPPmifXBMuEt2DqRCoMXuWWnqSptsEv3B4qkh8kv5btg7Zpk79xq3V5vHA2YTUWRyH1Hpkhfcv3hb1rX68agXc",
  "key30": "4oNxty1v3VERAP8GgkbeKachiMsFKRAsxzVJw37anmjEyEMA936NuBQYqX4MkGwuNjWZJvJtwJFudn6f8pMb86m2",
  "key31": "5D8Ki6bwdGK3zHDDoAkb8vwdmTzwYLapNUgRMPMY4aCzk2xgzpYAHJ8S1jUuhsrMEi1Q68MaKNiF6GpwLKZhmHhU",
  "key32": "5QYPEYZEtQiMQPRBhjay6vxsnYHKDZwZGEG2e6S3Eo9k5tgEX1JcFJoQ2GaadEHHTuwUC1Fvc6JqZtzVQ5DXGZZ3",
  "key33": "2sX2133stqiFEhqff7dJoMre9e6iNf4j73mtLsk2rMbirmKfJiQe4r2PyYoD1MjCfMdhFY12FdWSCMTCQJWAK3CP",
  "key34": "P789a4B4AWmLiNkrY4dWGymMoEr92n4sLPtF1vT1k63Jnb63wbsuTHBEwVr29B9pWqRE9M5GChbBjP3v1LC89rG",
  "key35": "533Rhkd6mody9scyXQHjQn1yFcgt2ssi9qmaJ9JtwuJcK3VTnFXJhC27ij6xTJqqjtTPtbxBYr2ni9FLj8WcvEiQ",
  "key36": "2b6RKWgDq5Jrq7PmiQL5AtxGJEs62uiCrySBLzvBqamnHPcEvxd9mGTatdFN7FPSEcuMbMiFo5yxM6ounc5Cmbrb",
  "key37": "2aMcwgWdPCvopmrWk2C4jvbxj7ZERLnhdr2mjBN9hwjg3hdneHN4om1fX38M7JER5riZ416fZ5pfH92i5x9Q6qxf",
  "key38": "3GfPKFFU5WsPewupVDoKPbKULijH2YCodHbx3LZW2PAGKZzZQjvSg4Ptg4oDXXm8rQtNPFA5mH9QrHZ72CsvfKVC",
  "key39": "2579nv9JyLGChCUiFhxdp3bwkwFFo834S3JmfEKXKaHkVzVRosBj62h2vyrpwnyPYqSXfVHJ7FWTbzwJd4QT5xAZ",
  "key40": "55zviSrx56f2QnX4idYkVV5gsreW4Wsyj8wJkjoTG5vzoKsN1hRSYLujLenPMBj3zqGosLrnVCLZhTjEi1RWqtdU",
  "key41": "T8cUGCDxPRDD74mJn53z9QfZfewtWCmHdCbdXVjr2ZNf2diAivTDV6os6xNmjSd2zeerCrDKHuoEXEMyn5wAAZF",
  "key42": "3f9UHVq82B9SXzKn2ayz78JAye7Vt2xwJji5mDzY2SUv7kzNPnQyTX8komvM6dwUrhYRHWpak9L8fSMKreyKtkqe",
  "key43": "3xQT7DMPMbops38UUXNPfndKrPxhLTzByn5Cc3Bb9idMyRiCmuNUupnqaMbFre68emQcgdAsZCY5nPD1L1f8no9Q",
  "key44": "5ZeaD2XnbazwfqkZmmGcg19vZhxuSPA7pKAaEPNs9NAQc7KGsfg3eUWJJUZ6wvYFqz2aqREj7KNMMiKQ4jSRf78W",
  "key45": "4ZC3S8YCr8NmD7FfUHjbPfzcCKJm43S3osw326ufBNso2N1voj82sS8pYrwm2rogM7HaaLK8ZUiMWpTf1o8HiA2G",
  "key46": "2fSd6MNBDocA7M4c6yFYKzrf5XdyRVfCRJb3RDgQMNfmFemQmz2vwStPphFqzcpm295JedHpJh14KqZhwt7Cj419",
  "key47": "4LsJPBF8E4ccRKE4XiQGctG7nnPtxNzcUjx4Vt4eMQ1SiiMKSCtvLumW8NiCyjcUnUheWYK2KCDeNTQhUaR7huD6"
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
