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
    "4ZUjAJ75K14UByMwHvxamCfcG2R4mmdrwn3r37hGk4ZngNmgxaYLVnwvXir8iRS1nHEkV5P5expM2PXgM7VSL4Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kP7WPLeXYupMFYDxUqLukeHrCqzuYbEa6AbEi4j7uMfkJxSzEkAWziNsEsreAjsVgQd6x42m66KbXXi7tJoFn",
  "key1": "34sRJvUVv23fpS357Lfd7naiCc5VAnGAYGXKipjjcG4aGWcH7y9kzBujUd4b7pqAFvjZt9ChuaMJf9Jia2RsGxGh",
  "key2": "zr2ibxALpvoZuHuU8kRoEw87cS6VHLZh2f9ed1AffZqJ2Szd9mvUiyDAhffnRke8c53wzPZ4XeJZgBJD2BZ5KPc",
  "key3": "5DtSncMcKH9Qdd3hHz654HMh5SwLU6y2u2vecuoZ1HxnjqqYkeuJWQNPS3LMcfZQxFHobPigqc5G7d8ARV61J7kZ",
  "key4": "25PcsdiUAAsUeGtL9ncFgXNpm6zAKZmGVg11bUE4CWXZL4wEPRV3nBv9YmGbZtyFf8aGeobTgK4S6cwtuRFRKSjV",
  "key5": "DsknT16spMNbhji4eiZh19Nz6EYvzJPanRAWhMZ76PmMt7DnHA2zAyigk3bfswUjrqeAw1ToZA7W6qaLnz1ZF5n",
  "key6": "34GmSFttekLGK2iqPHkfdk3qeNM5zDNzAcZdhTTvEkLYV9zGGSNYyZarK26BMkUnGqy3SQB7U8RqCEfZZBePfxtm",
  "key7": "34ex54FmaU3KSZb5m859ioBTypjKaSXdsHCjAjsHUd8QAUxb8Rn1dsENM6xWQb3yaMzsSeFzfC7fc3N3x1QszCFj",
  "key8": "4kbugbZaGZtBxtEu6ac3s3A7cMtXo6xjpnZAobGseDXArVRrRwhGYrywPFH849KEknjRWx94TWEpoCJxFmKuFeqt",
  "key9": "3xz5zskHsnqFyDN5MaXqWGnwtSWetgUPQwUSkUko2cjixw7CD9pEkZik7XmG1ydqv7jwEwikae1CZSEfhKrefZzv",
  "key10": "2WbewxtrmDqUDWebuxnwosfuWwrhd2ZDgz3r63nJrzGWpoi1oLB7uS6CCu56ac7BBpPcPKrr4k6r3KQvLS2tjkhi",
  "key11": "5mvSJuGoN5bYjEGnZHoc5126dFCQEbrPyFTfFXt2yV8ym1B1VinMTkMKQhq5CWtGrepfYiPhvBdoKx7zX77NVPnS",
  "key12": "p8QftMErtjefXiFwK7E5MZBJgq4Mwqi5uVfSnX2CmjaR4c1HZqFNv25w95ti5BHvcvVYLeyjKwy3YQGNuaJotFq",
  "key13": "4beA9P6PdFWaFrVV9yJTTTupVfHA9SiSXAvrwwNdue2VkL5TttuLuezGcNHnF2K15H4hXt8L477Nmxj3rr64dvET",
  "key14": "3LvmRX3rGs2wZ3dYBvTk99KZg96i9nmF5pKydtE6vT5NC2uy1u9MZvJktxocRSydth7787UiTPGaZpjkgxD2Hado",
  "key15": "2oavHRxnLzd1AnJ5jHZXXTSirNAg2o6u91ZVi27CPBvHKBRnS68n5A1yfWeqCQoi3jNB32rDqSguiukdYY2QYCvN",
  "key16": "4KnWuTcvA5oAwXSQxif85k7XFprtiAxUJaG4Pfb5u6Q7shSjExtcs4ExGV4JPUcJt42Ci6ScBZ4m2YLyvS33xJiS",
  "key17": "3uBrycFyDtLHy9km5WRhSyoRiahAgZ5ypdNfGzJ6xrgMCimxjxEkL1oE9zzeVxJNrRJjdUVHpV4ugLG5u31XvYLM",
  "key18": "2HmRWvsdi5w39B16AAaet4u54MRDia1RfZrxoDypv8bbrUe8xKJNXarmDAxLECtaN1LqacbhMSTjkEmgVK4ey7F",
  "key19": "4JRfGHoghYfrvw7mfGQX8YJ5BCRutUwKwWHkMD1ZmuEP8xZJo5JWiNu5RM6wW1Het6WFhgk8TnGNfvTYzv4Lmh2h",
  "key20": "4NsKzhEz1qULsihFYBYeGG3bxNmTPavjQ91tqWKkmzBkT2VifUFP6XQfkxvfzVBCQWNDYdtQXm4yGzxMXYB9546G",
  "key21": "3149Dr4YnJYsWbFaz1EKGnd2s4xyCo1Bk3xwQHa26EMDiKXtEzLmq7yTEQo5CSrzzdzdfZmpCzxCMD4222Lbcf64",
  "key22": "GiRpaNWWS5nXZ1L2wJXBtjN2SJTBaHKRkik2fkam8gtswUdWvUH2pRDovaisLbf2QSx6AFxB3LUdik5rrtRcfWL",
  "key23": "3TjtFmbkHEZdb8zQ5DuCfe4aNpDUHEXo3woRYXRaUoZyuNeX1UFZLHNCVDKAxaN1LyexYbEHYMdC6RM8L9AeWe47",
  "key24": "3NnD6Co9z57MJbsFz2WqCVJ9myDf4ayaQ4KwE2UyxF8fYSouErDxSgQ3p9cuVAodYqnZ2CvMaiqW8CeXzuap2kjc",
  "key25": "2XYa8Seji7cdte4F2fEjZtVK5ppQZNrg3CHAnKhWRHi2mBJQbLHKYLxkbWFo8LdM4JtkW11X6Cd3PobhbvBBN5cn",
  "key26": "3rr2JbyXQ6xgXQsRmqfZJd8JM5KdZxs2HA8fNc8Qs9t8oiGQvyKvfwRZxEa7bpedKFZhYrqooHMfNxreR3rVAP1d",
  "key27": "2EjGF5EAK2LHAFaAbjgYCqJdPbpevDYPmm8x8RpozZJaccnGjCrKJorPLSWzJ9SLdKGiwVqE3jbUrEKJ65NQzR5o",
  "key28": "2uNLY48A44W14Cw84uY1LRc8aKhdv2sUWFVdA5LQJdorwVohgAc2fA7tAKD1RgmVmZwupLEZ63iBFpbYBdrTXrjE",
  "key29": "3pgUEeZBVf1Jjnb2neAFWZwaHvZJamZ9Ny5MDBDeZiXFEeNjUB2EY6zmsEpHVx7aEX9gY55CTqyrUd3R7C88acyN",
  "key30": "33MBiLvKTo3JHAyM3hsni8CRxCK8K7RVwaYipgApGJ87zpsJyM6p5KKmXcd5XaWbM6GvHYxbbynkGbYVyMSFT9JX",
  "key31": "5uLAjQbBRtJvb8faNWfq66rhNQc6jgPMS84Crd6KKvuDAYASdDyU1azoyUMDVxAQuduyrg4dga73RgvG2m8SsRzK"
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
