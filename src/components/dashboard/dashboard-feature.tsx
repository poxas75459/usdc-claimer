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
    "2FTtZa937fZXoyVTFsppkmzy8SsAjeDUpLdzQQFp1Gzmrh2cb4dDm7Ccx4GAoem2tczxgNxDXF8h9hV5CP9e8HNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xa2bji2uzVHjUz8MrY5XHJLRW5eT4T3C1pSyuGh1EPq38b3pZdqyRzjM6u8NHhaAViCEomwgvj2yXTB1jBFEw9n",
  "key1": "3ra7QiDwpo2qJJDjVx7A3oqcwZkEahTpkmxXFTwEyWTwyRpPgTTrbbxjDikRPNKv7boRzuXn62dfyvdDejsG54dc",
  "key2": "5GYLMeYjvtf2eM1iUmDGgBHRwqHcTU5BrqWpmga4Fc7bBhD3JpL7nfRXhkcPMXuHSxSH9grc2LapgSgG9z3eYCXo",
  "key3": "5vBHKjTguFM3J6xqCvFgy8zs66imPFiniYpTDMSidKKydduGwW56uJTVzSabqhRhMorw3vjTMQNUyq1DGLJFL7E2",
  "key4": "4sBU6MXZL2hhcwEyMsAXcKtjqx814WiVY89YHyFECAfN535Fq38psJgq3UT2gQkf3jPHUPygxMKvCwFWwpTJbSDd",
  "key5": "V3gmrD6txtXAbc7fK6adkUTxiBC7JZStU7Fj3f3dy4s2FAWVNJPfYDe4BVZMZNymMxLBuWUEa9bgYyzfwAXjRrM",
  "key6": "52NftWgAmVKpqvD8ptzHQYDJUhub9MB8uZ1d2omsj3NSwbgQfVq43Ts7eT83yBcS5PG4YCrrq92SkCr9d4h91eqV",
  "key7": "2oXv3z7ECk975i7ijPZpQHLWBeD7JVpTxDjbDdiZjg4X4XmA45CapfVBLKkKuU8DQzEj7WJCSb225Sv3S96bdkjD",
  "key8": "BGnddwBDMue7MqKc1ihqRTctpX6RSBnTDp4Q493jthtaTKwNf8bhtsDyrRYQFPe789L28RUWGbNd8k3MPataaBn",
  "key9": "2G3UWmgHzJFgFuJfCEKhYtrLfLfAydW6rQUECswWjYUnYHLn8ms5rsmBYF3ZAvSsqoTvHaR2GbKsXzYrrH2BLEc3",
  "key10": "3CiUVA4X1AeXPopJokUVoDMrgxpEn1eKyJBzuXqZXHhyP3yZeDgcPj5Q3FxRcEfFvGbr33sgT6sDB9YjvKkpZDfv",
  "key11": "62opZHhKLWDA5xQAzp9TE9UzBhb9ChqV5bQyenn4yHyK9uBuNJqUCrKRJ9uV3hfK3xBeAPL4AorCt2guYB9oqGEr",
  "key12": "4Pwk1NaAnDLzC4XVjSeYeUVvaYC9adFKm4Lg7BbRaxyYpDmkunM42KHU2PDH1geYqchCj46Jj81Pe9S4z4EE3tUt",
  "key13": "aE2Rxuvg6AXXUj78VvUw3C3C8D4ydWu63TBrgws9GdrwWp35pNREZ18xPNuSnkfXCo7gWuYdyJ2DUPhQWaSBQ8s",
  "key14": "r8PCCkiNjrPmA5CqXEEJn3HL7j7fD5FBTKgs8w669CBCUPPccZJRQ2yEMCppyeZFS2ojz19sVFapsq6MjJURArQ",
  "key15": "5sPF7zH2kX9jVtozERnaYjTCDZen5vwzwAcmtwEPsNm9zRA6GWgxfAgXCFi15kh3Tz9j6BhRMyig6gYwBPzvQVCi",
  "key16": "RLWV317R9GXkoZ591fuyKcAEftpP4ZRT8UfFrEZ4ZMgqizkMaajHjiTMbZ9nbhxFFv7VkSnvU6PnFPnd5ikV8YB",
  "key17": "5tyiK8UYvuaSWwH8y3FWEMz91bdqRwcx3suKyD5RFTouddPUKAePkFC4CFWjNUgD5FeetPQCouatDMVMbXYiGC4d",
  "key18": "DLucwyrNrL2SQwNDA2fdsDF4PAW9mndJPu9EZVjNbiBSWpeXtAkksqiLEKDtR9M14r8k7NdqSB2nfL9qmngS3KX",
  "key19": "XYhFTPT7xNENWV7znHW1jykUFbnXNkJF2G5LYUZQHFGJ4gnPcgQco1KNS6X6LJ4fq8SEuxoCACdcnhuBSJA75dd",
  "key20": "W43he6zZ3ewYhcTEr7p2YjwV9ADEYnGSXEsBWTsEJcys5HtyLx4D1srNmeiT8me8zMwX8vNFG61eqf5v3h5Tp3A",
  "key21": "2Amzgw2QPg8fHEKVRfXb2Jm6Tve1ewMmNRoxmDTndeAufgej1euzRcb3jKZUdqQq5BvCcTdZnTaCLEaSM2PpD1g9",
  "key22": "429YZn2hsfSzNoeZHTLXqd6KTG6sJtToMT8uMWda3bm1ygazUDuwg29ktHBSsXjJt6dvHgHSPmkJe7pJYH4vHNdZ",
  "key23": "2DM31fMokQqKUi3YjsFt9e8mXh7FMFBZ4cNo9bksReEWEoqvGES37JbtJZcyjk6qVW78s6Ze7afXaY1BCZarFcAp",
  "key24": "2hociok5hA3x7Nw5i8NKjy9BT1Rysq8vUnJSJaJjsd5JijdGyRMEBC26LdbJJBWZ1w2JeQMAQR1Mdocm8iCbEpXd",
  "key25": "3ZUXfZDXb6eZv4vQJbU8tb2eB6StJy4czQ5kc4z9aZHJx1p9zPZeRQYfKpn9B6fr3JSRKNxKVwMzdAQfQoYLN3D3",
  "key26": "5NVGGnA8iQ2QbS4qEX5uuS4FHjBrqEDbABE7EMBJxwsRkp4LANkMvEVpE68rUv4kasV8DJgvBUHoYGzc2jRCoP3S",
  "key27": "RMZRGKvtAPikY6VZ4cn5EQ8NKtpMuE9hnHdK3aDgxYbfNHzMBiiAtAm5UtcEgwyfTVmyab7n1WRtVEt8aiup4cU",
  "key28": "3qh5P8LSZrfDmmSkmgsFzcEZ3gDKM8WpsoNJhkbdQemsWGtTEXSTrRGrvHjTGu74GfNeYVweww7DCtLJBzUhSoMQ",
  "key29": "4DfZHJWXg2EjY6nnvv3aYDt29QZZdeCBncVcav7js9VD9hUkcTsc1MCfTWZoxFRoPTvt95EPhvWv8HC14R1QnJCP",
  "key30": "21DNtf6Sidh1sR4guJ7ACUQ9hg3xFcLv3m5buuvg61acVaMF6LZze5B11Q72NXq2SZmmkQAZfvCVJM7ezW5qAt1E",
  "key31": "4n2hoDgWVM8z6t69i7vhn4JxVjmYMYAeWbLXwp42J56qPoLfkb5tB1hFap7D1zV6bS78EFJHcsGdssYihNXppK7i",
  "key32": "33WKkReRLX2448nvkHLn58PsZnE4hk7GfbayuBZxVBgQw86tp6Ag1mp9hrsJ82eTyBs6cYF8YS2qWs6DEBeGBy64",
  "key33": "vzk3zVkpXJ3mwGGK1ocreLG66fjPo7kaSKWzsCJVgyAdNSbBgai7CdwsGFNj5dobix7hQDE9TdV4k8DWPquKQGR",
  "key34": "3BztUFVtjon3uDQogC51Qur4UAjtGPPnZajUoFa9TbowfSDBFYkqbAR9hmN7zqPyEWW57s4XzX6Svv9KkaTBp7Ls",
  "key35": "8wg52jQrLz9RySu5j8kRokJBYmARoGcKu7aK4onzMNQMz7YrbihUCnnt3u3JgQRcngRfQkgchproNFLyHtb6Mue",
  "key36": "4omj83sGJ9kXwHmxkvZ7agXPS1Y2Mj8LHVXgyNHQMh4oRFqTHPeaUNFfd4u5pGGVgFxCdXnzzSdw8JQBj3TAcJGK",
  "key37": "3WT6Xu1kWAQ1jornAhv2DaHVcyhAXPieqdAdEXqRQjKATZ8B2PWNiioN9X1Z7A9NX2dqq8krBzmphoujhQpCTtJU",
  "key38": "38JxSzruHCVmq4QPcDEEagQtgQzLdpo8WWuPt1WqQby8kudn9TaydQer9bD5VVoionYhGMkCKsLYc4c7eGGzrqH4",
  "key39": "2M4EJZZLkAeHaLf64ByhWdzxXutLSqRRAsGLToywMtdpqxTbSxuxEYug1Gvn6TCsqW323hZnCejTZn5gracm6JGu",
  "key40": "2NdEfKH47tnSy3Qoj63HkRuAsu4sYoGfG3L1qgXuDBZFF38bh6rJR9AApQzGabNS7PF4XBxjEBdp9eYPfKm6SpyA",
  "key41": "3HZTuoM1oiLrnKS2GVQn4xUyuPFGasZhFrTsqGcLyB2JF5o1oQrmc8cw1Yf123gN7JUCrMrswSabsqiBf2NcXik3",
  "key42": "4a2HAF1Eywwm9YmwucP2oKpPqJic2C5gQgoskrbtVqNyFKJVGAd6kxBqZ3YZfS4LDh4z3C8APVtowVwa6WtuAsgz",
  "key43": "5ZXuuiT1ZCYuBgSfAiAgvL5M84FoTTybPMqpcXFZi8xm1VFP9WUUzE8mkDp6BKDskxX8X8HmZ4xDMx4bhC29UPfN",
  "key44": "3xPirEP16ZLWGN2xDLiKRRm8mXDoumvTKTYM8PdyvTQorWT2CMJTvZJVfqpi7iW1da6bEMQSthkkVeFLqRiGu2KY",
  "key45": "84rxmSS3RwzJsweGMEZGcW5nzTjMU7MEz93B7JXBM5TZb2LdAjENoBf84NcoY5SJAu12Su7xLoYeR3SSuD2zd2q",
  "key46": "56PSzzQT8pdJZ9BQ97BoBpt6Sz9Gse5Dfws8pWo16Lq7DX5AygW2PLAD73MX7k1zyu56LoenjFfjmsquJfWpzXa7",
  "key47": "4QmT5dLRdr42msNtWqfzzTxXUUsEBBosj4P1gXa6zwo6ivrQDKrPJ2dCiPGreYniyhTsYmvBpNyrzXY3266MLiaT"
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
