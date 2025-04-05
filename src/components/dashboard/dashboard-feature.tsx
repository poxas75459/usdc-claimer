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
    "EUmHtTFw2MSq6umezRGTaPx6kt2NgJEk4eqWDTy43Ri74qpW3PrA3fdqoLeXqAXxu2cByULnWhQwbkRt7uhwxAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFY9hNatSMRqMZsGLgKGJ1vn22ApT4yW2rqT9cm9AQeBGXYHCWjwWt2ngaUPaYPmhjPjFDkfiLEgFjG57kYs9uH",
  "key1": "DPJTYpRGwvWYWorZ7oGAKwbtmrJRNXRpqz7P5Bz8fSknd5EWYoiutCrUpFiG1y5vhNvdju3ckxoGeWtLhi38DdA",
  "key2": "3kkv8KTxLmHvSA1c6BJP2ttFEyeMeyAcdGmg5nymCxswoKEz1SXH6U7gj4vxRtEwfycReuzQ56HrUe754SgHP7YW",
  "key3": "3av5Nc2DWvUrpfuJ7NjqGbgK65ntBR4vap89oQb3cB2UDeD37isM25MfWtRpJA9btHZxJxXr6jCnTiscx8bBZvTk",
  "key4": "5N3emsAJnWTJA5EuojfyMdfQAt26Z2fy2xUpRgeyhQR1aQg67cCw5V4XaiH82bCMKgPAgTChY8akDnjkQJkrrbHS",
  "key5": "4idEHD59cDXynn6ieWJpvvAszQSQ7aGUsuUs4k7Yeimz9LjXufC8iZe4mK61MQvEdKamJMRXJZpgdrYfpDXaq1Fa",
  "key6": "1Q5NQkcA3pevujiEM3N1V9V3EX4R5PAJ9uuLeCX4qTDxNmoFNxdGPBrzk4oaVATRDbHxDtu8N1pG7D4k3vFNyv8",
  "key7": "31iRW9Wes9JdSb4j4PQf5APdwoTFeYJj1jdf4fmqu3wox8DSTmucD1WjZVbDbHLEpWH9jRAFQ7D5CaqjXmqXCdj",
  "key8": "GuQAEpmgLRi4q4zibowhYxYdhrxvGFz6JxUotpUykp8wRube69VqGuLNuetJk1WnjKK1AjK8ksgshy73idjG4Ct",
  "key9": "w85Vff7afyyeiRuvYaqs1NXCWkAzbACX1KVZtgPqVjNYdYmqWnBcAa97Sm3agBn1qmscfg7Lisv8gpAuHcSi2DD",
  "key10": "3z8i7xWQ2TJwyywTTTDbTHsQ58LXiBzgSQSJZMoEcvHCBZCij8nAqv93jD6Vm5UqCHcyoebMucykmfUKkz7eLVvX",
  "key11": "2ArNAXakrh46if7bw6oqRvht3FmqHTQLZVSx6f1HXq5YG8gMVs6ebannVCh9FfgeBkuH9fPcgMB1XhCyrobMBkzm",
  "key12": "63Gvw9TkaQ1kAeNXhrdFambXWUKVWGqzh93grSCvQ5oVNkuGPPbA6dqjQrN35qoyDK22nDHWpLvhpmdxo8dWbT28",
  "key13": "5VxL8WLoZXNPfxsPueKcy8YPY25TyqVvPSSnMGgSfhKmCix2Pe9hYGcE1CoKg1c9Fdn2a5KA7Vnjae6a8HUEy25q",
  "key14": "4GXnrTpPYQ3eGjZYjBLtiSwbJUk6vmZojPbr5eBymc4CdNVG7WNESiq3y6W5kWJLALS4cE8x2xpYz3bdonV1GcC1",
  "key15": "4GnLWPggcTNdFKjksnJYJWnUWtTFazHmdKy5HQRtrADojy1nTVcPL5BMGtaAeVRJFzETVoDuKXC9FxPpcLtU9vLW",
  "key16": "5F3xqJLpwdkXyvqpWE1sy1MSTZFYuhnbMK947iSzV4SGVcgYH8qXE1cUsFmrivuoZkJrQDjTPuHBWL2hqWrsHUGw",
  "key17": "2KayWCN14VcZKvhP1ouFgQSJT7kJ2jYbnvQg3eyU5c2Xv5tpUeJJk5j9w3ncKLMC56nDWDgMoicnB77AQejzJWiH",
  "key18": "3nfCLvn3kv7eAnTaNmP7d6Uiypf5zQzANkbDZHbqBwJjqdGGcWxrxDrmBZbeN2Jd6nqwZMKsp2zLJdsF9Tp1iesh",
  "key19": "3cdBV6Hsxt4X3EF9WYjqRU7X1jDxofj73rSUqLyhhXGXEURxAGL3rTPWgibYmfdJ6Bf9axAbQsH1JrDMDVtNgT2S",
  "key20": "3DkhAkw42W2gZinBwaXSiKwBj8nLrepymusDts6G1QwmSrsnu9X2fSHyne4UZdBsDLEoSt6tKDCW4uzrnvuTpK7B",
  "key21": "xDbJX7Dc2WNH4VBWnSPiZcDBcTDEaYWvyQjtCMSeN58NG9iwXZaUUUrbkHQqCk2ZFGgWvgox4ektLT52hh8Sayo",
  "key22": "WtH2nB8LhH2n59MH1HsrR2qzLKKdSiHRBJSxLSejohthnBznZcZm15xxqkV3jQkccVotMmvksE7RUcioxsszmoK",
  "key23": "5eyFvUSFj4F8KD3pYvGGfwdkBq89SEsJ6WjsRZobTneFTzLXY8cUAVoseLBnskxPCmxa1XHh7UFGExGUiNDicz75",
  "key24": "5Z8Uvuvkw55s7xHRuQwh6pA3oo8AR7BpYoQ9ztNHfjAinJuNwyUXnBwhQDSVyBmn9JH7P4tKeuuKhwuaWcMjuF1S",
  "key25": "32vMYJdfEN1rn71GbpafXpm4t2HeR8zjaM82n42new4r7ogXSbTNSHn6y1bVFMssuzTnaL4MsbxvWAH2Gm1Nwomc",
  "key26": "424Hv5izS6kz577ZgzvA3wt5kxQyvMJbUhShN7DpLTMihFFKbbgnavDLq7pTMsL23sFhacZwnKkKMavp8qyVPrT1",
  "key27": "3av6LiQaev5xJUGWGeu1q7ZWHHM5aKfoZBcufjDyvP3L8g9m5S2pQa95x1mNYHhonKFoYTj5uXdo6g8qsAiYkGj",
  "key28": "4NZhYcaPf5unQ4bW6v41Z5B5SV6hgA39PxW89RXjbAafzCypF5pguqPKNEzRSt28kReu5wB5jaiKYYBwgwn3M3xS",
  "key29": "4gC5ocgNGpECRXmkB7uF1qPoWjFNxBsCyHidXUv5tV7hY5Mcg9mi66Xiumv8kbwaDU3mL1c2bG1YqzLgpMPq2uyo",
  "key30": "5SSFAwwPwi1Mcsn4DndcEKT8zqRx9Goj7AxhfufdQ1VCHwCzqb5z9PzWe2KocqDV5mmurFNscg5mtsw6WT9LtkcM",
  "key31": "47u6pvigmLvTtzX65vyD8sAgDs3gEJytFKaLRHYW7vgJBHnSDemo8k9DJyeuv72shNveT1sGZJbmX6ALt17QNB29",
  "key32": "5GxQ9QaVQPnuifNoHPKVAC2XFkYQEhGqqRkhaiYi3WMWTqDuUPccppxmhbY5BWuREWyxinSmb672ySM17T1XMqt9",
  "key33": "3c1QnyYx2HDfRY6kHRgEZQjV9NjyebrD6TYKe8deYC8JDW1rGaRjAb7iUQPNdtX1DwwScgv31wy1SVQ9j8YiRXoZ",
  "key34": "4jFU5y9f4RXd6hKf7Hsw8nMfbsGDA5YgcTYy7cB7NGzLfVJuRTKJYK3D6FfTveBUZ7UTuQbFxU8yawzyBs5NvGrT",
  "key35": "4Tgbq7pp5sPWXiyiB1D51aaiL45HbReHK5TVU2AaHu5GhdSTv9GE13VZQWHp2JHQ3jKFdXCnuZnnhVFn42T9N66j",
  "key36": "5PvwD1epLxanvFuWr3yZX7nvsPGneYEsnboLipYytdsQoTwkLuGpYR3L5xHiQheR7taG8aA5QFC8zHAFLNEiwSzp"
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
