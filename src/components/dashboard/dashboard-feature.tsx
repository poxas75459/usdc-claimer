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
    "3L2ftSjFCTHWyFRYuuRXFppCKZqtTmq4wEbCnWyG3KHhHAb7vUUUykJnp2hmEUFzf2HVhCB7cXGCd3JKYkcmbc2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5rXnVAzYeMVUopue2wQ4KUsTP75FwscN7H6oiVLc9HP9Xu7R1QBRWUo3iXvsByU8XCo1r1UutpC4fKPCpxiPUu",
  "key1": "2HwDpTbfN1So7u3BbYWcmKSNjnnXV2XYLaWk8vX6vbnQbyzgdJZUb9cshJnFk5dpcxYuF2oWS6atRJgn2c8gJoT7",
  "key2": "NB9c6tBirTDHBQjamfnU5bPKrr558rjwfR3JWUrVG426RWnWKJzCCsYd94Xw3dfx8aZ7DyLfxf4ihAeVkDkneDa",
  "key3": "2JHnRjRVGJJxV3oZDKkosrE7i2jynxQo6XPXSyJXqkS56ekBWkDzFb8vbNXF8c6Vozjrv2zAMUT9DtbHjhtNmzSc",
  "key4": "2tyDMaHwv2YKTtNg3kznrGWh2LC99UJFCHqwnkZYCvYEeUDYM86jFQjkHRhgqb3zgGBhWvwUQiomr6GvjzE39kbW",
  "key5": "65J7QfMBGduVttUSGTWiKqgq9sovLsySxauS793uoX32kj3XbTEASDwX856LEBdbzXiE445av5KifMy7fewDnZUA",
  "key6": "2tZbzr6cbyyiHHkcNZuWyyAvrSbmJ5hygMVX5njHHMfJyn5WHoyoZuZ6FCzuVrokeYaV5VgDH1V4aH4ce7xTge4W",
  "key7": "3Jeeq9wHA9UwirbL2etEo4tyBgRpxM8udDqnFpqC5oWz6wznbAh9CKmacqbMw949zAgRnbvoF2EZFpLLX9K6YnBx",
  "key8": "5wwdQn8kRP1B9KJUsdQT4unL2KQ7qoZ53zmL2KCiyeNYcd7X4t1e1aXkZjF22qMVWL1pfCLhVe82BV5kp6UEhiEX",
  "key9": "518WxxfuXVXNPSXDcJR8JNSBzE6iFCcegWbvKenQD9o2HJqVDro6uDUbmHLHHYTVKfmaWhNeJSmRKQ4V7xG3E2dk",
  "key10": "4BjNUUm7FFphrm3wurEUY8wuWopoBjVbuQhUjaWr28TccXREhbr9FDWgBaYh8EAxCiFdGX7CRqLgMbowsGkuS6ko",
  "key11": "415z7tVKg5887BerX5ZS3XfWCn6xHhF4WW1xhCVuRqD5nQ6XNaCCTnjfzymNzy3ttj23dbEfNfpuACQbv1imAyFP",
  "key12": "56YV2X7h4D5AGjuismvTBRK4BYvuF61hux16vjyRPhmYNXnfxAiWf55YHr2dLPDvxby5qYf9jNVc7n5rDJanJLuR",
  "key13": "2ChAvoZtFj4Tcd8YseZCKVMnKj7CT2Am7KT1DhTAWzSDadhpDXMB51PczdpcrPpoapxzMKAi6pop3CFs1srGorFi",
  "key14": "451Kadn6YDybFPRQwWNB7wnsbUgJxoTrcHLqJeyEN6F4UTiAQUFA778t8xvtLokwskT6hwiZaf5frEyaHgyXQZdx",
  "key15": "4WazWMuuKM7mVMWLiqjoLocjNCxUAh5uq6Nmm4Q7tWcXS7U15HA6kES6V6VFd9goBLaLVAXRCvJtaxgEFu9cdjJe",
  "key16": "36meqqcJqpYUmD2TuBoRsZahE76XYHb6JFi9pEssrNMaFfg81LE2QoHJGfPKMceUJVWUKBFteGcQdJBCiQd2HXzN",
  "key17": "5Q3RiKhN4X9Xiq1tbUUEumxG3tVumKPfSwd3iZndgtHmyfAn3E5YME4RassEtTauAy2zaGpqV3oBigvQPa8upLaq",
  "key18": "wfH7JQWSEo88Pdf95SPHbvKmRfy2TdD6osS3df9KP9Ln3nP8nxnZYWZLF4Zui1cVCw5NYEEfuU1gQ7r5Wtt4sbL",
  "key19": "25WskiQDqjJrPZJ8ttBDfQQzT91e81RypgnQjFk6cRTQvdoJMmQnUPAoBQAbP5EaKtdkDqHCyNDb8qwS5617z1XR",
  "key20": "4aWxRP9SZXm2m11ZYJE7bUSJHVU26qcDmTVTFsqXG9QDRHTd4cw7cEZs5ViRVHfo2vkwC2i8pm7Sz1pE61DLEJHQ",
  "key21": "4o5Sb62RngQMwd33A4XwCLDaTpvyxJi8qjhMjAfeN7dXwQGTfmTGYXTGGPBY88yeCDBc48q36CRT1ETGtEPgJnKp",
  "key22": "4yTy1nPRxCHMtgpPomrSQjb7jmbsJ4p4FwoNJty6yhjGi6U3jwzaqf535J3w1Moi2Gn8wC3bYQ5iTUyNuviCcwYe",
  "key23": "5U1azLaDx1NXCmRCgXnTYuyFcSsJPCSFZ5qqJ2Q9UfGGFp2BpCPkEx3eZtsViGrsvtGpEEt7woEfEphwzzjsNuLp",
  "key24": "NHYfqyoMWmjgrHEAVuGEqwmSoQa9LNWac2KPzMf3krPfBWMSrYtcZ2TSaCfRXCmaUBDpF5eXRhgiAsoAk8Kfnrz",
  "key25": "3xo3RxfqRKfjif6bikKhGQeiRsMnTxSiT49HCGT12fJxfrsZhHLVLGf9x29FWWDrbwHr4XfKvYTUVsD2Jiiq6gyw",
  "key26": "2sW8cktR9skJ57wZfDpTy1HkjiY2QsTEfae2JFSpYo4nFRP26ZerRrWprPyiriv5cw4T1ZrvohB6DvNsHkQJ9wSo",
  "key27": "394S3wRrS17FHshcoYvc5jUtqkkyks6Nyj9JT9SzzyoPeseKeHL7RHX6tjf4vkVqU8PWBnrG8B3joSLFpMCKbX4i",
  "key28": "24iAnnF1zvBT9GVM4SmDjCofqED7mnY2C9era6ZuwFphdGNbWG6K17AiXiaGjuuJbwjPYfSDZYzD46NL4NcApbFe",
  "key29": "3LEdYY6y5q3jZYmZJK6Q9qmvSYDMqXNZU6RcDYAingrWfe9CtNNrQ3dupJGz5G1BarSXboDq4Jsijmx8T8CZkiqW",
  "key30": "44QroV2ojwC2g5zwJ56HUvvHHzSi3ZuRQdTJs7TjLMkRP4qkN2iPnTEbybr8aqc4zn6Cw6WFDfFXkZirCLgenfpu",
  "key31": "5Ybj2N9sXwcQ44rY3U9St7fczwCJqCr477HeiMv2HwHZTpkxwZF2HTNpWUtq6Rzs6PeRBd5jMm6vtAjfRsoWVTvK",
  "key32": "22t2Q49pZTs2nBxMMKxvmjC3AnJcQXQQhgzUHyTNmbxC2WRHmSdiw3NFhPRrtCFzzoVrjCMnbyfwqy7mhrwR6HM8",
  "key33": "21fXh8579uG3XRznhvXuvP2L5XbiZf3VsMmEgtXszLqT2xARQzJLtMxTYTKsiEzT35HFs1xqPL1Dm471EuLDNjH7",
  "key34": "56U5sDLjL64X2AGjm2wN8Zpn1gHSwPNtNmEo34PP9d1968nefwLDS3bg6rovPm41MAtbk2XuFpASjtDV4odKQyGA",
  "key35": "3fex76U7qTfxhJZRioXXhArg9BvUzFDAn2UUCrH3wDzwNtNPJuqJGfAU6cdbdgZhkvbNyzYHttiY5D9E3GjWsWiG",
  "key36": "2HWAdZyjssDy76MmEDzRsqWqqGTG5eXGzpvSq69DfUEEM5fXWhw312Cie5pD8GexJZ56MjjZB5EPJHcfrsdUygf5",
  "key37": "LcFMZDf9GZyKGCSAJJuPXAvweSPEPc8RuAtfQ2RkbJ3Vih5dvpNBjHnJisfhahQ5HavJoq6WfgB9XjJcdSW7xf4",
  "key38": "2umYdnJ8nt2fVnB6yrpj4jbaaBM1MRPJVGXAYVnY8GGziVnKyHsLZyj2SERex2rM7rpoAUUMw1DCGaESVkfyvp19",
  "key39": "559DRFwiox48uy1N3wDNwH4EmKdpvLaTXkU1LvMvKmokvyuWTQz86xbuYCGVNAwPiKGMhTkCCyQmgwha6mmmUN9u",
  "key40": "3PhawWTGNbY3FLrTV1qjC96HH6cB5zk2kXaDgdCHJ51rFjr7pWcEhZa4tEPXYgPvEk2xGSqxDNSAU3h1wv6qwW7d",
  "key41": "3rsabYFL5YYVj7GUE3EhZ6CpAFqogAphgevdAM5jEhnDt7unJTkHPVXuuSe9Bgp4BoVSU8GEqzNkP5AmvVghDz1P",
  "key42": "5CzYaMJA1BDegw4PGFhtQLoa2vaoYHVUtoDraBCjwXoLUiHpxNLnPFj7aALsvYcGtG9pKPKARPYsafTV6Nk8XK3T",
  "key43": "x6dCpR5LU7PzzFm9QY5oaJiNb4LvBB7MA1zRPvuTuw1kQE8pj9EPHaVSfa1UJqzqpUMMdZP3RTu9GST3ukPPoQs",
  "key44": "24HtwfLx3KHmeMhuKRX67wH5bfh7ssRFEig888rQMcCh1HHnRw7hq56REYhqB3Cw7z3LoaT2U7GdjS5tCwgDhcsZ",
  "key45": "siH6umqRN3sjdgiBpwqrrMHP7tqjpHVuZmLiYB5dMhzJhzPgHEfzLLq151cH2dyFxbV2mF5XwSRb2vj7xpWSZUX",
  "key46": "5WuUUbBH1YwqSJb9FRQvzCRgh2BNP6JfokDMyHcoRGubMK28aQiyAmvgNGXSZrKqhgQtnPNMiEbHBmqQQx3tPSVs",
  "key47": "Li8qJy68qWX2ttbgmvceyhBRHZSNEq2mcTKG9PSz6aMMy3Em8ihVoTVmzm2M8vTCa5RBMmwnHs8xhbuVuwkjhrq",
  "key48": "5GgQQ6ZXURj1xhro14ZJwkd6Ur6qCqXbmmgNbSnw9fv5kS8yqCAswrRzWRyC6nziji9J4rakP9YybSF3HhKie5Dz"
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
