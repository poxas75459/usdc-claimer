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
    "5SDcaW2MgouKRqxuBACiTrCpet8sQ9DwqdR4DmdZWqtQV8iFDW788F8aM7KwLTYVT8dWJSXRdo9BHjXWKUwJdtD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EMukj6A4cAPX3j5yef3h1QFUP3EteLNKA5nAsMqi3gSTDbEWGqjZconkMNJ6h18i9h33JQa7z716Y9emfWFVZK2",
  "key1": "3NXAuADmagCTWXYt6JSjtzeiLgX24GqJCsokvasbDXXEQ1PAXdhbND8YETg4btxgqXTpU3auxm2Tg5pxjLkurXrq",
  "key2": "5M9yA2JRvjXAFLSEqBxT2UysuVTe5L2jfA7HzMZSTFWJaHsws38zazEm742oyRANc3PZ4u3wHRMz14aPs6rV5RtM",
  "key3": "3VqgfMo9sTpN9Ltc8W5F5xDCxhYrGe6EZzwtUoCz3zFkQg5XxgAsFVyDH2ZvUgAeVrLRmEg82h1cErDSn3vK4uQZ",
  "key4": "3EeZ76yofSkB467SsLQzXmWeMZsShS6MLiBT9fcpx5xEk22kTbxHqAcZftuYfTt3A7i3fruqbHXrTcEE6dWEoiN8",
  "key5": "4wAK6wdQu7uqi1MWG7N1D3NroYHz5JdkF7fLHBR4em2kS7zXL6edvDhJFVhFcPJMZErbHNKehPgMbbpLSM8BwdrU",
  "key6": "4HhvMUsgwv26hu938owsEiAiPENf2LuBrEWwLr6VtiqqUY8poF8LMkpW2d5LGrNzkETryRFASUaQcxvto8pTD2oF",
  "key7": "2FrscKWv6GCcRnbSJ4V89EE6yqsPX2HBr8irGmi5DtZ54htS1EduZFuo2wHDzBQXhG2AzpRkDxsT8kGH11yrWe8X",
  "key8": "56VWYGStfvrSueKiHtCbetTGZyfjWmHAxVUoa1dvZGxa5wXzRZTADQ9MLBGqKGHEYZzg629YNaV4Xg8GnHd3jkFu",
  "key9": "5Vyuia8vjp2v1qjm6hdye4xJ1YsAvMGb3agJ8BtkJDJcayYaHQjWTeQehqK3BTEvwNHj5FbVhFASsApei2326aYw",
  "key10": "2Fm5M8c4r7GE8NSxJPK9rEUeLrs2AHrY7aYJ7fuXGT6G5xbt1UZ6Us1XMyDNh2kxdtZmS7URpn3ctgbKehzLPiRF",
  "key11": "44LjbKsFiGGBLtvPCcNCg7dNABLDkik83ikThsMASW5Z1Cvhk9ziBdVzYUUGE2gePCaqzmB4K3QtKqURBhjwFECZ",
  "key12": "iD8u4YEv68Mj1f1KUUQfKRtxxomtpBAnJR56icxf9TWmLB6Q4gJWt7PdMqaQcnSXnstL4svDT7mC2kZ2DRhFGvM",
  "key13": "2o616ZP8eQYoyRVdsqr4WanpWDatrdncmcABAqYs422GhGeAu8qDHnbiLTn8Tvu3gJLePvqfJBLR3GNkSy3fmFxz",
  "key14": "2ixoEtnvb7qcPhLZH833NBYUfSTGttA58afYadSpFyG6ynqPY2cWC28p7SNSb7Wmtm6hEVnTSbofEEhXYwTdtknt",
  "key15": "BBGKdV1uNnAdji1vLRv8jCBaynWysHg9mf6x9GE9rnhKscXsBtdkxx9agWo6K1W6PHjr4FCEXafSi5vwaLy3cpa",
  "key16": "4nVwUBsRUgHweJCLqaUXDDweLrfkd8bHcJe8ikU3iZc2etVX6ZLDMqm2U8QhFm7eHrQKb2gyDRnNMChFTDRmGHxN",
  "key17": "3djisYjLpVwnnXjKwmpxQjqtLAhvLM3PQNMdmbbs58cu6CoJoePqWpyAXuaY86mxadogYrf5izvE9phF8rrJimun",
  "key18": "3M9W8qHznLGoEM7jr2tuQV6VDhFycpYzmmXoF8cppc2bdMNEaHnJgRruw4Aw85SyBSUJ6oXCfXVhHtPtkYYAUnoz",
  "key19": "5ZspyBS3u1sW5KEwtCtuocH7PGQmdQYEjFg4jctsLmQw2kojkRpsPrSQRGpHGLSqX5JJeF3L59Svc2S2fCnkWeyR",
  "key20": "3VD3qV1R6j15eF3N5Mdy4yUvzRHhBEXoM12rb2ymm2zdEogU95Namew9PFy1yMRLHLtzzPitFS4dexhNDzJcxPik",
  "key21": "2fjthaP7gktyemubcSECekwsyhoPfBaEpMTKab1qvPH6o2TAarSQvdixpnpEfR8AhDfcHSzdvsn7n6RgrVqfHrVT",
  "key22": "3rXiz4AsTcnqKray4aiLcMgtornFdVJdkTYg85ovuHoMhXrQfYHxokFxqKawuekgyrBzNQpnaUFPCMGBNytf3Zf1",
  "key23": "2spLXWiTVpTut4UQLMBx4YMaMnRDVyi3VtAzPZe9z9LPW4WzDzkvctF2zhtSbr77BWE9K4PXB5cfVAnWMHBgkRvd",
  "key24": "7Vwuibi5A5yLGYYoUmWDBJ3J62Xpuvh35afBFYGu3KSzsx1qPfPYvxdVTBh9nFbWh9ixYQurV3yvwhyqUZdvW51",
  "key25": "3VnjsLhe8coPCMpCskoBiz8HcH86UsLkrC8cbC3AoYt8SxM3BQfseXxjkU7i1zruPD1rSiqdmNrZDXyfYkTTVia7",
  "key26": "2gZkmdu97ZT1iYeMwRCiHenyjaVWabG7btHCTJfT4macmqbpJLpBucE5FAkijhmkkGnpnUBe12zA1WzX6BmhweTs",
  "key27": "5fqEZoiTs5g4tWshKmQ4XchcqmTVUKGppW5KfoAWNDKjbT7m5tkbiBDS4R3SEPM4XWLMZbBesTAzkjXMUX6WNLXz",
  "key28": "64xoWRqww48qWsCe9vw9LVuqspWiGXr6NHnTsYmF1wB1ZZBk3i7sGsFgzMwawUx5eN4qjJ5DqwhyAoA9kvC59gfq",
  "key29": "5e5LpApQdhfbLiAUSSJ9ExfbzaiBCFaitL2qYLyqTVKKMASv2jMFzbQKJTG8iWHKaPFQxm2zYLhoCze4Y95MMT99",
  "key30": "2JqRF3L48UjFziHugPGLz64gMcK2nPXKQkiEHFqwSr6Dm2YDMte3PvU4jKvX9gxRxftDE63ggiyq3kqDxj23rBG7",
  "key31": "555z5gy9LfhJXRuCLwsqJZ4VKoGp9VhAo9SnYuw5j5XxXAonCWNfNQawuwwTC67qRkWJT4Gs9CSg79RHLjQghybb",
  "key32": "4PHF7YQLJvGV3JWwuNHpHRd4qCTYheaxzXg87S5Pqf1Y1j5cvuxSScUSxw2sH6QYt5S8naMvT4PNXKZsE7SWdJqy",
  "key33": "3yUeYhtQjteRteX8ryHEg4qf6g2jmEznrxdm5823hUw5NM1vT6j2a9au3ivAa4FZDwJ3BeiHFKpzM24g4NsnwE4c",
  "key34": "3tNhguDau3WafetqmZhABNV2i33Dx7CnEtGWBY6uVu3GksEJRw57h6NUEFJ11zWYBiJDg6QJySMZ9G8zEdMe8ZLX",
  "key35": "5bVep6PqpPgVF5gCGoZ9epsUNExataFkD78ZhfJ2gn7ZeHZxMmMViEv3v2juzdARix1Bxb7Wgt9eXs3u6gMNre21",
  "key36": "t2TENwaJ8n6muHC7eyB2bAvFZCgDcb8A8PQocYQ4DgnewaRL8o1XdADREzWcSS4qAh9Kak7xKYRSU21Ari23miu",
  "key37": "Mp5mums9GjfmmsGEMPwU3RANPPCCZP62KYLVQTR2z76qZiNcf9rNibPy5v2zNDsWiBxUHPEPfWYv2dUdCg2gTky",
  "key38": "ojyZG4eSp9UZuegFSjwQs9yUb8M5tYbzp2utkgpbx5cNyRSPrEnZjZx8yFgiMQ3EosYTNDwvW4rzbfrn76Ldn9q",
  "key39": "4uh4sWtxyNANWmsgc9of2fZw1bQCKiZp2W5X1eGiK4MtjPuikKxP4fLzV5McuwgRrqHfkHC1dsNujGBzFPUt9Czm",
  "key40": "2AQ7RKtGvKfKkuNSXNczQs5AqyVepAsDgAjferX4pLmRZ6sjJHGJk1hL4BfbpnCw2TAyzQkm6rTPBeu475WMosvQ",
  "key41": "2V8HeBgduc4gMgN3mmqA212UcAEkcSr3kc8XtbMKq9m2N9Dr23bj9m6C1eAEeQZUNhVmmB6eUdxxjaaQDLChbD4M",
  "key42": "3zTjEfAEKiGy1zFU5eKLiSaNKNEeRfxQVwVxoJWYQEDjs86W4Yeany69R3wroH7fSTcpEwqwPcNuh6MXAM7gGcqf",
  "key43": "2kCkZJYUV62HuxA2a9ioiiAfeD3XwKtQZQQJvBC31uZ82tbdTx8ifWRMfr2QP9yqJBpr7KpKHm2D7MniSJdzyzBq",
  "key44": "4D4DBsAGwRVEDLpoxHG5x7DVCySMPqS2ji9Sa4xmfv73PykMqQqWksjv4NNEfvJEFLCB3tnVhUaTVAUrsVu8BF1E"
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
