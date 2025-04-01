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
    "L1ZnrQfvaj71zkoqRZtkWS7TQX5Ko9G95mV1u7ypZGE5Yomx9FdDpcwfCv3vDnoP1iYWqdTo4gjeyCgowKtkWZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJ9ECVzD8Dsj6nvJZw2mXhBsrpj1ykouc8yz97uDKFxRtRnwaXxPSLykxs2pvZQsFJWVhV1Ece5kQWqvdQtKS93",
  "key1": "4fLYejS2gxW3g1oSz6epMnBBCCxgM2Y7FomV7AfrycrwQd9FLrVyoFCzxzkZvUvqvo17Ehi1vs4FWH4tF7kocUEU",
  "key2": "hAK7SSczM6Jp8jKpZcMQdc8yp6qYGPrts72oUZZjyYxTf5fv86eCf1d4GCe7VePQau4TmC5duQVna58hwNqDhAJ",
  "key3": "2cMJvTsZT3ctSiAjAv5YCVHUB79qCsNPZca8yvuK67s3BnEHB9TUiZwF3CG1wxA7yajYVzsDqnUixedRSyDAPBvi",
  "key4": "5QDGJe1q2Q2X3xAnU38BPVaxRiGge4hYXqftvTFBv2nnTBPgrk62xvkyYm8JGYMuf2dAMRPPJfrn2oDiGhe1v5yg",
  "key5": "2jHmWUgWYgcciF2mXm3Gn6eAAzK7gLfF8P3wscn6fDdYnyJZtdPKd4rnhjBp26wZn6EMszbfas4gY3nMaAfQNhTS",
  "key6": "5hHcAuAwmK4mz4Ksx13c1b79SCVinHrXhghRLnL6n8EF1YAWEr24FA8HakJvJvNwYsRkxfNdNC5bq9fgCEEb4uEn",
  "key7": "5K7pRNuU6yASBvQAFQqLXLLUKmFKjT164t66V12sW6NprwXxHu4rQn3sCV3ZVtU1johmVner1DQZVuqASskpwez6",
  "key8": "2gXdAWJddgR9FSRqLTE7YoKrScDpHwacExwy5aCW3M9giQhdYnCXoK1EAWgDhfna6ZkZhAvp9RFRg1SyVdbZMQBs",
  "key9": "8J4TkxfndXrXpJQwUEej9jUEdoi2982mfz91pq1gHzcSs4hUARQCbSTAZTwHXEZRGWhbeN5cKY8UaYgLWxa9v4d",
  "key10": "5jJYyGWtoQDKUYR4gX5GBLnTkZ92ptAeaqAyt7rCB1EQkGEwWk86Uwzgsj9PMCi8UwkUDnug7z9Wi4WwkvVCA3oP",
  "key11": "4RrQZXdc8kh3AfP6sVNgMhJ7DXxBnjXsejte3G3qkv64kjhRfHS2sT5Tnm4SjMuXPcxSRfL27QPkiMLM2STbYgu6",
  "key12": "3bWnnyVm6eYXuJupGZzYZSGt7TJXSosumimQHGEuHvY1yKffvP9f7vSu68n1Zx26utHyxLn1qkf699rJuVb7ZKAJ",
  "key13": "3rD9fVuYwHtCoyLzRb2cs6GTKrcKsgkuqGtbgAxz8vkGPWyXMVGA2WFWmQCwR4bCdjBmB2t6nugztXQRkkDNjkQt",
  "key14": "24bjnTavJGpeH44ZbfrXiCt5SYprz63zr8bJn6GagBBpiSpG8moqM93cQnmvBCuGy6qePH2CiJu73Pufx4xEoX17",
  "key15": "5PpomkJL8APHdT1sXBgcijQJeAapFgSVsN8aUwyu4PoJ7DG5VT9S4J2LYXvhMr26qm2WwuHRHsMkYhYBS7szrHG6",
  "key16": "3aoB72t2ScVPAdJoZ3DBKdUT4rb7ZFwPbEKFfDbgk5jWM8qVQ2tXhTHAutHrfWMM5WQaySbCFhbNY39m4XZpk2fL",
  "key17": "2hxjE5KTtLh3XNKSYdc3J1vqf9kNA3mJmEZd9BSTobygkseMhY55bfxXFJ5FZuaiysyu6LLoBQ9SkGYnKvNBbuTX",
  "key18": "2sMaQzG9eCt3dZxAzg5SsCsa1grsqX4ecmC5o1XXyQtpA1kGH3GEn86bKywk2vSRMVUCc3qpFXwBhKghbYQWdaix",
  "key19": "21V2bVPs7DNMG9xmaBWwqGpEMRgYPP8uHXBKkBB4aaYh5WPeTktaK7nuRFoY1D2E5mXCXM3aoixox9KqG1DTXGPF",
  "key20": "2qHz58PRuxPfEe8xTiJyuCiWm8kBcrTtyi7K7NVZYe6eNC1KjyAgnhghh7JX7kySzyprkZUmLsgpqtofM3rCLjWX",
  "key21": "4ANmnQzNFrAEw9c2kXdco2b4qGSg4cdY44m4TobuyRFx18Ltx9oaMSzNHYHSMiWWkqxasHEt9gSmLVrPr5QXQM6R",
  "key22": "5FK7azuo2KNWT5f7DopZ8kqoLgCx9hRWEV2M16eN624ohWBMqqHAMjT5Kqv4PetNstSroKUeQv3RFMGeYkRHN4w3",
  "key23": "5Tbfibn7ukUhg6yeSG9an1KiwCs4i8P2uyBLQuwvupES6EkqSB5w5Xivu6e7jba2SUwEE9gcMdkkU3sDJWUioWuD",
  "key24": "5MEuVzJp1Cb1b2KXo7sGYmHxfmTWwaDv8ixHDNHFcCkx9ZaGu9Cuo9ae665XkgoDmtfuchhU1pm8qJXZ4tdhCeZv",
  "key25": "3qNAqno2GDrQ7QQ93vm4JnL1FUnQ4o3PtUWgoLy1aWFR1bTY1SYjHdP9wTVaTALztKScji7Rs4m4UANT4ZwPedSv",
  "key26": "2oBK6J1E84M989SAYJzrSdJnaQZGUgVsiXrJE7qi3RZNHUodzrYipuAAva8PHtHneXe4i2YDyJ2BumZESZFMqYpW",
  "key27": "5CaR68eSK6UGb6hxfVsHjWR5kuGAifkYgctczXi2jAZHmdMdUBFwc3enozyjpahNgrPJSY99nvr2ko7h5ppV1nan",
  "key28": "wWqEUHhLdmTt9niiPQpxRxGmPTTLEW1BnfkJTxsGffx7AkvDCpPGxgttmSHoeXq4bbZYcZ7AFHEdBAPjjfC9ZzD",
  "key29": "TVbYGUcQMkXeUzUAA9TLuAhuta49mHpDzY5STmnpARDwYxtqnNwi9zHopcShdPwCCus81aPVkM9tarRd3GYLrNx",
  "key30": "3EEL6agVA3U9EN5oPwhcEgtJs49h2kpk3TLnNtZB5ccfngChCWzFxjEhb1BJ1DYY55nEarsQu8ZyY34qAy42RBRn",
  "key31": "39j3XzmcEzesF1RrhZz4rdiNEsbVgFsZnAVgPxuy8axr41RkWdoutUgFjPkDP8KXboKUVqiKCMRMHUDoaoYQ6Lku",
  "key32": "jMqAiiXaaqLnDvebE3r3dJdNC7PQBjxfcmq6DsYq2Cy6FJiRyHJrUTtxz2JqezaqTyrU6Retx6YHyHn1xVwwhYH",
  "key33": "4kLZMHAM2WiocVfnSKGeTmz64Mq19rheHjWfV8LinGGFXxLk3xQB4gzcsVPuN1KNbi9aZctn2HJJAhwtnCHs94Ea",
  "key34": "343H7oVTT97iT7CoGBQtvPqs1EZkMNJK9Z9G3wUoRk6dMqFdYCNKC3YotQXTNWFwZeKyEVgSWp3DfhaCgqSy4Z7S",
  "key35": "42e3TNjQDXGyPQ6yAvTebjKPtGxy55T78dfvdSfDtF6NJZszFndnELqZk4F7uJwGU6FnnwWTnG4TskGzswh9Bet6",
  "key36": "2g95TvJMFqfZtGSVosNmjnDXDLPT262HpoeTDd2VoEHmV3tJjtP7TLrK8Ny6nXNYePgPzQRWdkH8K2JWh5f9J9jo",
  "key37": "5hpKHVPj3CG78oah5y955iMkXo27QQsyb6aQyFR7wo2N5KrmV5jfeLMpdk1ktdZyR37BJLNfrEMKFK9w9hUQ4czn",
  "key38": "5hLj7JJjRKogoDNheY2sS6uZLfuh7RDhFntUUe5tte1uKbCSQSqdEDUuuCZbMwcweTmCVPmSsyf8E8Bg46XzcB6m",
  "key39": "5ifV6szuqXC2kg7h2ydGPG4SRsk6x6gbhhEkp3ZKbkP3jXnsJfqtoJxLq9obPogibVeV9wP6C2V1aNJWeUanxKs7",
  "key40": "YPjj2z2h4uV3KzAXR2VVqEugxF8BZwTLcagj1ZJ5bHj5vWXDxCvThPCFQY87KRgftJN1KhPxUGCCwyMGCmodHBJ",
  "key41": "wBgmFLMo2SXtjjvbAdMeRLLNNefxVz4JEtdtmd9xBWpnoGL9UZrQp7QrowmBwLpmEuK4vdDtDM4w8LEZToaaxx2",
  "key42": "3L7n3GALkBrD1MVx9mQ5fKYKmd2zNyWFPyYdkLL4WTMyVWJxPimiGsFBiAUqxm4hz3aLEq8qZNPcNbp8BNzqfWDX",
  "key43": "2YZ31H7DpgDDZiHSKPMeZEc63vJPWWeBwZNVb9arrqTZ91oXZbHXueL3Ju9N7fAaYn63EuiADC5ZAJBMK4mk5wrA",
  "key44": "5M827uvtF8g31duc3d6owiyXHLS7ZRKpLVN9RYR6CB65KUXBEs1Nzm4iMTJG9fhh9ZDzJLQ2Y1gKKjXRZyrdL39m",
  "key45": "yP3zFdvTfa31kCwDBnJoJhPHZP7eXicUnh1gS83P5Vkxg9wvWghZdmaRsDB2TjFMuZL7nzQbietG6qAeEb5DygP",
  "key46": "5CEFe31dNykt78h58w1e3pGATHrUQHCsbR6DdRjNVz2WJkz3GNKB8qSBFvhrAVeU4aGrwaVZf4HV96TNEyCeawcN",
  "key47": "2Ca1hBnShsicqZaAEkjUKKrTPUQ1iYpz5aVWxBvzsRMEcvK1FrZb5kuNSsAJovsQUKXr5pdk6jD7BsxzDyozovQT",
  "key48": "qP5AAZTs9DhpwUKBiBM2ZQWeB2pNHB214VkB681AXMbnNrLWrMSZop47tBoN1sjaHo9wcC2zP5oVGZdDgKcmX1j",
  "key49": "4xfggkJR14h5wwaCyPmznzRUdcRw6puTUR1ZSDs8Big9kPmC96FUYp3qS1SLman3HU22YM6V8GBiBt34KawFdxDf"
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
