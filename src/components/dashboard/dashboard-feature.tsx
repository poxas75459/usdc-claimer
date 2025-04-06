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
    "2FYkGPD3rBBXA1H4TcfamFgR5RUKDBiYmwTkysLsu3UTtKBiiB9jAjVXX2LkCoez5VoHrqnGuHiVgARt8gL2Arny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9DbsMiRozuhjz3wxyWaPHgeg2KrtQf1bm5jKnp95bCj3dbqgs2813opzqLmSkhyAcLhKo93rQAzqFSvShsPeDS",
  "key1": "3V3HM2tK3j7kyuqBmatRL7UvHN1pSKA2GtT8Bjg8QXBSXB6whX7mpq7nGN9FYziFmgittsyrP1pGd19Qm8pd1wdd",
  "key2": "e8E52btYmPQwayPWHjzzRHFchiWXTC53tWwzaHxQyvju5LeP6FdxBzAhvNfCQLxhdqsvmZveVfpGWWR2h1vQxRH",
  "key3": "2F1BKuQzZfDEdh1hopqT6AbmvGgKJLeWRzanQxmQex9HAyruRjEzYJRXuEXM39c9J2aa5fjHoBGAYykfdpSgx1YD",
  "key4": "3oknFPcKPSr3AHPYVkTKNekvoUTU7Tb7XmQWWiLMFK6PyaVdyc96Quqj1PAQbT5krADxGAcmGL6C6MocqjoCoBbX",
  "key5": "RjeRv1VWfpHsjdEePfdhGR3pKxpMQYh9oJznKdTgeB7WjRsh7YrN82VKQoBAAKrfXdiiNQsF5EHg2JCSyaQRMoM",
  "key6": "3WcDJsV3cc793k9fbFrUmMJkB4YJz3JdHJZp1Fn6fVsurNRGWMeTUtuHJCKZ8MEofhcQwR1ySe1we3S9QwVBR84",
  "key7": "3KKgtA5WbfzEfvwyP7XXqaqBzxBRZRRV7APGC2u4DAQ9wVzTchTuevPdS4LD7b6VDSMLNZkyim37yeFrc4a3VDrK",
  "key8": "4ZTSsKqpP66DjNYHMb6bubQqWAiBoU94wT1xGk26TEBgJrgkKzsM8N6yom3vkryvK6hzv8cT6EcxTAzaZAxWBMoQ",
  "key9": "4oidcJPRrZdFB9Lgs6ULguMurdGGcUTexNZYQNkya8iSmGrEmg32JYxdtnnrvYhKZr96QUmrkkqQzQ1dZeHbV4J2",
  "key10": "5bMRPhBG9GbHMn2ardxojw7rzo69RY1CUysrMpdQj1kmKaeUiSUMubXiAuRRgoc2ZswWsGM4SF6PmKtYXYDH6r52",
  "key11": "cDnFDo3mZWT1YzBFmZ4QnuGqZYLj4dUmNLZYfhx5dfmfdb6NWzMehatBtA4j1wknB97esLfjGNCDHzghVYZYzQK",
  "key12": "4z1f4k1Vc3hqJk5XhM32S8VqbxBeuA38GbVGoqg1UDNE7E9AEykspWsjXtmuVCVCCV2VT66uApu4SDBiRF3jw7YK",
  "key13": "3PmNhfaVE4ihGhx6qznx5FksdcARKfhpUm8aMA3LzSsz7UcE3nV5Quydie9pik71hQMTk44jpigNCfAVPn1978fP",
  "key14": "5DhjUh4WgExoUvPozyDyvGTNBywze2xtHEzjpGebZottwSYxdwmppNYZLxdFy4apDo49J2MHsRvb7z6bGF4D3oAK",
  "key15": "4jgqrHNPvciKcHqo9p4QPYX19b5eo2iyv4As9aFBX95mde2zEoFsyqyDtt1nm8t82dTN5T8KjXHeXkwp98RzxXqx",
  "key16": "3PtTvLr2yKUidL9cb4JybVNgpFgndmRKaS8F5hgePqjYqwS5XbyRAVwV1FfLyJvKNV9o4qpmgWgxfHgkCLwDjTsn",
  "key17": "5z63ccfFv7mJFmDyiy5dBhnyDhjBLWmoARPKZJoiN8KFxowG6T75AtE1WwisvUYewrrRadqS7dZbUyxLSsWQKZS4",
  "key18": "mrPKLyr5juJ2KhSUGU5nFyxbUhXW8Q8aPkPLYdnjPGWXFretUt6kneu24tSVGqDHTB1j5WjRbugbKX9jNh6KAnZ",
  "key19": "cqYcQjpx9ha2h6ZgKJv83DVjg7bbFh6uWCxMryVvRGxgErbXUhsZ35jMmkc9z1my2GDXUw2VK1KxkvNdjit9o7c",
  "key20": "5myFTMwKo5Hp6t7uQxyBgGvxmaosp1zvhsaHpLda8BMZ1eFk3szoLUURSdx6RU7XN1zzKdTK9zuNqenNaQhuzwVV",
  "key21": "4Xp8kEaUF9oqwJcivJSdbxXVmg4d4WPUCRg8PvbESjeswkyRMmE128CKKcJypHV5WnWpH1VFxrB8VpPPRTS4CqjL",
  "key22": "5STY3y14XBKZsvNr4nEr7t988rh6Kzpq4QoXaXET6iyyMTdVuA1vXxdy11F7izCUY7iArsgbFEgznLdFHqRvsDe6",
  "key23": "BYCAWmSBvi3ULeaJhmm1HYX9rudxnnYdAb7fjHaLGYsbjxbZRMM2iujVTLEgskcuneKGB4gDXqpj2xE8oprmgvZ",
  "key24": "55AVikr2TZNWhYmJsGKxcQsTWeTyKPbsNuPcDqkDs9D8x6abUS1mSwc9ifYyPzKmne9UgTLNMJt1kLtW9mbwgzaA",
  "key25": "4fGYaYzNeEffTpwmx2zKq9KGAM8mxjni7HtHP1tBK4aty2MEyAD8mAx4ccH9KHzzCaMMysyfUQXBba6q1jj9mkeU",
  "key26": "332kPjC46MEwBeBwte1qqLRC3wniMb2h7Ar296Ck8rmx3hbXRe3RoBTzg3rMLo5qndk8opfjhc59SvYVDeWhv36C",
  "key27": "2hMGzHDwyq6ggy64m8e5DUDuYD1HbXTQKVyY73uYSPXY82bfem1hNMiLngJUvom5Vzkn3Wjt5HULLWRzLHZ8mHyS",
  "key28": "Tmxt1eHWdWP1WiN513yksr3hpd6y3yVnyGKJKqmSd5498HzQUsYVg4kE1YxgryZxjj6TtferYRZM3TKytbpM2sJ",
  "key29": "usL5Zcg1k3GncJHtahDXCQdyVNJdScyjib7Mvoa9QaaQHDHDY3sWkKUrJmC2qpsQZM9F7MjWUuWC31R1PrxH4z4",
  "key30": "3AtZqcGMQG6AWZcvQ1Crnwn9HGHFrRstsAYUdjpDePhcE4ULWfHdxgRvfgLnkozhFHiE4ddguFq7grvRGXmpADBr",
  "key31": "66SSrq34hzgBui3j7c1hDdP1Ci2fftV2xCcfUiMkzx4jE5dgaZUmnt8p6oWf4rkmQkQwFZpxRwumGzrHNzBbcF2k",
  "key32": "ADr63EPo9mn4cCHHD8YqLWS43bq33SFdGNvHGZnF3QjFGRCTR6BS5QDNuafReBZjncb9k5cvxbHys78hgTzP4Mm",
  "key33": "q7S29XUWfB6eycQ3yxRFQVsf5KES5UWZVaMfh9c2dQni8UpTP6ARo6odKmWMzR3Z24kJEr3n1d3Vn94rCyvRRL8",
  "key34": "3GiLfAaZofpmn6h4uTdR1EyWz8NwVG4MptB74kBWC2iAjgT1GeMHJyvYPxr8pxsha4Wcd9Fsn12Pbx3WbiNFvjjX",
  "key35": "5Dfp6LiHe3ySeGU4uxeiVs8xJUsDoMiRGSvNMLTN7BgnXv4CMXcLbAd87w69omFnuTx63wLauhHavbQJxX5iEkeq",
  "key36": "2uj97y5hQ9y4RGWYjTWjbxW3MsbvFPtXSqVUts7z4dVZHWefXzjS6eJwrEYtHgjpC9Jt6qrMimg93KhwfUVd3SdH",
  "key37": "28FEdvSmWa9q6i8Y9V8be25HVkMFSmye7BR7mS761MnVHukNkr22DVFse8BW3Gk7JjfUYxxaFaDYjHTAZaRPFw75",
  "key38": "5LFB1JpprmkgGDUHgoHWY19EeCaHASKhCLetA8q6xvbPMXuMhCMVyk3VdMdLN9e5kEXtEZteLWjQHc4dRRxeaeRT",
  "key39": "8vrowb7jVa5dGBeoGdSS5aNsT6T7zoPRxc8hEC4xPQQjasBcroTxHdFLiJxLrp9BTtiWe2qnmfAK472fUEC5Qzj",
  "key40": "2qMHGaxdVnaqkX1WyQxPMJErYsSmGt51HeGkcdM8bemp82tsyGdZTTZmyWxVjF7oXsXzScb4gtgtbXgXL2qUH7yc",
  "key41": "65W74dcMsSdDgXXycwkbT1WZM96XNXbweBjYBGuGeeho2FiJqcvFjHQVFo7mo3RnwWKbkvprw3xAeYXSWbFgPezS",
  "key42": "2TFE3mtQ5akJhieD3fz8fp7F3N7JvuhqViPpBDzY8ALKYZVjKWsGEm66fvwTXVaEzMg3RygJC2j6oFrxYrEgvpDr",
  "key43": "5q8BWTFUxorVKZw9AbJdaxLn7QSWQnN7sfcgyQRWH9wNXgiaEF7WEZ1ez6s6V9rcQZi8s9yqr9jCBXqM65bh8aRq",
  "key44": "F474PYqs6EEaNvVRJFTksC6JRYKemUBrY7jeo65Yk685impAyx41QgfztpyiLE8nDx2s5VUDgUPehEwfuEKtNUo",
  "key45": "5cYrzxpZfFBSkHYQqogSNLTKY28kUuLjJhvsPBTBjZFvfFXFJ9d4u6d23ZmJNGGZNJVR7n5ogiZfVxvKKBKf5b9Z",
  "key46": "31Y8VWnFY2Wu2eD3BY264jnvCVL4EfWnxYPWUXkPoAXsW85dbfJyP5kFYzE4GeVcn2x1tmZzUfeL1BHKafJyUZoK"
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
