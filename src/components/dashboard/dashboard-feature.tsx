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
    "67K7hsVUuFgyyR5nF1LSrKwUvkpmMqgWkmbvncHXjr4QsMMiNnAr5tsTaikk18dquRHAmgnb8iYrg9iNVNuNvSQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342HCXMdtaFraEpjDBxrR9E7A2PMKti6G84fSEBMo1rHt6NZ2K4gTvAJm8eq8Eri6tWvtoZNPSqSge3W87Xj2CHH",
  "key1": "3EUig47VhxTwP8mw6PmzzLageruAjee6XVy2NJrQo9PNAo24GxSN5Vp4XX29jbf4Svk59dzzshmMGKf1znSX8kco",
  "key2": "4UackjWP1PBMi1ZcuKNgtetT8zXy71yepzt8gzkeaqaikU6HMJj2RFigW1oGV72wRbwW9SWFAJJrZWyv2dLJQP5K",
  "key3": "4HPvuKsdtfsB7XWaT6Bv4oqYqDn5VJkyP837NdXbRywH7LP6mQQhjovjAhEXxWZwXuhEBa3aUgydzCiWQnW8pQS",
  "key4": "3XhvQ7UaKVAm7Vv9HEnHasvuA58rDHy9xm8UTUAnS546deYJAUNEibeKxtfsooUtAnJn1vPK8Y7jPJLkTA8zryv2",
  "key5": "4JJEjEe4xwGRGUKWET2osVbaFpB38sQokECft9PvirNQrp4XAtCKYYqxf6kaBS2HvaTeY2wf72FVrJqHrRrD6PUk",
  "key6": "2u7UNnUnqphZ2jqx1izJCn1BzFA6h42T3g4jdCWVnY8iWvjx39KfxEbsUXS6rvdCx57bgRZb5zhKb7A3KMnqBe7R",
  "key7": "3GbuKnPJxEJp5mCMbqVW4gCyUJpJmzPc1Vf744WNnaRkzVuT1Wr1egQ6uAp6DxP3LBxv5yhw73vDkgqvjXngHV7R",
  "key8": "4jotHwwpppyn3tVjmTiq1qTGy3Gpt2TCcT6Rroi3oEtuorwxoFSWCNvtDs1e2VKR5xNzmZ5D164xn42mFWcTgWAA",
  "key9": "5BnF2vKAtFrDTTPaCtHb9ZJw4Y18rUoRvxyRbhoZiV31kkyzfYgFkHpDAxtgUCGMkZYXQBu6T8e4HTcDjNRskCCz",
  "key10": "DfbFQkBk2dAopYauyyxW1sNtPoDeSEbTrnSmsNeHu68QcGsy8EdAp2nLfrKVmc45TTkzBLpCCm754oq7Zc6Bdkx",
  "key11": "5HDymVuWj4z65RCWYjjjKn3hCHxAY7K5AM6thQaUEmxo85yda1o4yVBSip5W9PoDoXn7D2ctkKYeFC9aLLQmCcbe",
  "key12": "2GgqA5VRNvr5FJgE1vnjXsQDDarQPMuZw172sq3iBiicNud6cf6vuSrqKkNA5SbeM9zbBBjYyXCgm7UofT94zzxu",
  "key13": "3FFCh8hUMFTcDKD7TGQXmUj48JSCTPtozzbB6oNb7zRncSicaJf4XW4Kt5r6rFEiDjRfJhamLU8aTG2ys45RXxHq",
  "key14": "3UgUMiXDUZ8WaHuXKZb7sc3oWp3vLwWxqnaLw7U7R6oBQL5gCe4qVQzwkJ4Gytvw6YWvSpF3TRWSjySZpsWRbtKP",
  "key15": "3BXNRxaYp34d3NGMS56nQNEd4ZT536Z8mcmHnKov5rsyASzAdYtaaAQcsb1dT3Vx3cimuGqDduWQrXvQBBKqd4Wj",
  "key16": "58MXQLDyhzgNko8cf72D3qaRiHHk726afA2wqG5uZnxNZrc7MdTZeXnain9CtQr1S7nTVvmqde2hyriMp9oxUFxs",
  "key17": "4vFZ8Z1LS47zpkm4H4ixfmHUZCBk33TAoU6kkiTmdp5w3NjAqcokCtJ5Y25T5TRpGGHVZQEiHDBvRxWayqvYuYHM",
  "key18": "4KmySaY83NLvU81fpW82vHmZoWpqnVxy3EPs4PrpZDFVu2qKNrJitrX8T3DU3x7h7T7dn7A5WwobPx3RGQ1qYfDW",
  "key19": "35C3PrcjjSgVHNZxTMf2rajmxm4wq8xT278x3eKGKYCGwWDqx7pgXda2BJmRUznRwwLPF9Dx7Z3pwAc1AtcnfGt2",
  "key20": "2jB1USbVUybDjNToVnBUn4xZzQUmWq7wwrCeeFuiAePWP2EVZM6cPnJbyWT1tL7i2SYe7iEXnaGQSdXA8e76tMns",
  "key21": "4xE6JzMgarhHRVafLeTWDwbBvPE52AbVGjmZHD1VD2UDGr4WJhNMEwcGSb92BqP4EM4xitzn7run9kp9PSK3cQZF",
  "key22": "5CE5oJeKXsmcjEhiTuasNrZdppHHXK613ZubSzkHUPXJZRqkNdiifEi3FLjEtdjD3JR4PwhSwuDD4U2scTicsB55",
  "key23": "3WuxwDjSPq9m3EVUHQUvx6yzgs93xCuzGik9meeWsWsLWHR3mj7mmqqjw8XHYV6JaW6hqADkZ4fXnv9DTR2FsziZ",
  "key24": "3AiSaQg18UbgW7R6HzzT137emuV8Js2JGsvT2fCCs3xLsDpCCHvgXbCZBp9RuKDGWXPVgtAEVtnPw4tLmcmamHU",
  "key25": "5bEVEsjrjebCfZwznsjZ4ETonSFPJkXPffe41KXrDm4yFMoyVj2x9uXkRzbUzxViecRwtGDUdcpBjjwUPL9x43nW",
  "key26": "2eLZLxsc8fo3iKegUM2w9swcguMFNx3otfyeFy13uZ6vJu9UtAQ671BPGSY9GzoRtk5mmnphB46cdLgCH3Fo7e8e",
  "key27": "4gzGHE29iJeUoH3Agp6P3HXv99ecYmJfeUGvb1EgtiQE8tn56yzCwZZpvKRnXd5g9fNiRhLejF4LtVAxDHoaNR3p",
  "key28": "Jy85fJcMHb1LDvd7A5zd5DGJJeWwWx1UkfHaf2ACqwBhpo8XSoAj1vuwfx2aMgaWrD3i9NicGdf71MD78dAbu54",
  "key29": "VVqS9g58nEqhruUtGYEShv5zFs2e2K6Qs9KAtvH9B6dr2rub5ne5XDJQBP95GbQjmXzzvWzFkFJquzUpBykzVhQ",
  "key30": "4Gtuvfz61LwMTCdwQgV2iZJyWbEEg8YLci7aryMU4Avjpa4bK4TDQp15M3yPyaDKXr3y8Ajq9Qiwz3G4B1ak7fJ",
  "key31": "g7nsND4smh9it1DJGYFFeB5V7Ea4fvc85sWNUHbJKfxH3g6CJjdCMhxg6wufDi5sgTJ2vPtbMB5axu3xNUYbx3a",
  "key32": "2E734eFBggSRz9KsSNfjsY4jyjQgkmiCL548MJF6nyDvz6oX3zCS1QK9VgKGbbJ9xvJT1Tfv4LUMsv4HtGGQzYP5",
  "key33": "3AxDpENEdDMfk3jPXXLq45ZaQ1VdRbg2mm6Hmey64tz4zDuuhsZWpquj2MqBQkSPZoodVxWVdxCyPL3bMgpLG5MX",
  "key34": "551h4Us5Xk5e4vJVDDTWhKwwwXy5tJJzgVCkSUeyhhrKuxVdA9LoFKErF7FNpMQ8mGR1TPThbGLFrKG4rwh2C7ZZ",
  "key35": "2XeqseYUJ2dsR4NLEPnfFT5rCiSQd2e8GQ6M1QpSGMu3BnA9BXWBAP36w4zVQ8ZzS1gFDsnbDEPHZz5FwznnR3Gh",
  "key36": "46X4aBuwf7zpakarubUTzaEu3r2ggHCHGdcmEfMVLhu4yjR8oKrZ4VjVP3VFb6xX2TMhPq3SZ9MwY3yB363xa2zy",
  "key37": "4b1kNdngbaoVYuKf92SHJrai3kdTLxjE5eXYATkvisJc9XTPn4EFeYXMuArcJFchEhxSJc2bSc8MrUbaH7JueDhY",
  "key38": "5sbqwpC4G9rGArhDP39Ge9QcgUtZiCZrvmBzcBfvncFSq979S31XJ2Eo1B8wb2UWjbs4JmUeU7S1NN1PMHRuJikE",
  "key39": "3RF1Nnyo6u79qbDpNj6bw473ZwEPeP4ZA9g8ETqXRPbMMrKYqAG4WNjmngwGqPsQWAyoNsY7osbxLmEuHnTh2Eh1",
  "key40": "55mzZBsU4pe7rZkSzYLV4cYo7SyY8Yn9uJsBrotzo1HbFHfsNV678c3AMMvm1C7gbN3oQPRrGar584YJXbMv1pU1",
  "key41": "2tW3Wg3KBxH6mCqaq5afpfoAmjtcDJLXRe7cp1sWTYZPfxAuVoTXRi24Hc7FN5cbBxCganf5bSG9LN8ATuDEDwo5",
  "key42": "J9hJHqfzzZiBMSTFJbDdYLf3QvJ1oNTuznKmZXAJF8P6QBjgMciEVAb5mxYs3HtrGYsRtcXfiPwTgWUHiYkGXBL",
  "key43": "3kqzdKvdDS7jBMa5SAErYN1oRLibnMA43FsBunTA1ffYNMQ8GKvQJbX6wvb7mBNVCpREBmTmYei1YYKjMfYpzHgy",
  "key44": "2ayhg8jfo1WzsRoC3AKdSniBSy6niqyQMyAqFrYhHqWQT4sZ1wtHgtZkeDTaixPxXZoWKeuZsr2QrDZopcjVxtf",
  "key45": "2mAmQWxJB9edapvnDZZCvrxDzkzxyE7ETvykNetBkGFDYFGRN6yVeoGn9F4n3PC765chBEHF7J29pKmvDpvVzLQH",
  "key46": "2Rg1eYZrcESMA8kLPh1j9G7krteitcVUYGoT2jD2zGbyeXaZZS91oayqiHDuP1KePXCSNf6Y31etx6PZ2EzCwQz9",
  "key47": "5oeEfyazyFYKjDguiW7ixEyadQ6sCEkuTcpyeYXfQZxUnL26F3GWFRcPxXpyKLUw76JtMtkWn1c36oscXKm1fSRj",
  "key48": "SMS8CoHLXruhhAsc4s5SpNHuQsgyytiwSRu27ocsLMjxonGiQSa2J6gf8vwutZQRY1a9ZPnhgov2xB1Uush8gDP",
  "key49": "3g9qcKatf3dfiXDvesMeYinRXV94Bz2Usae4mU19FqMQsa8bncvzwCbPzVfhvPmnxS9TZtvceFFcTHnXVVydKvjW"
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
