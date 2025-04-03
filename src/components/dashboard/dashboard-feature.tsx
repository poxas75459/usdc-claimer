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
    "4epmd5G3y2ozK1E5Eww6TiaLzB3sJjkd2Waq7unSy9yeB5idFWiUR413s7WWxAUzmNXkQGR8xk8XahPtxkbBH9z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgbV5nnwQvaRTA5J7fRksqQrChgHE4K7FQ1jMuZ85c1mxnRsFJ4wFvt4THEr19K35zHywNNFZriLLgShaRn3M5Y",
  "key1": "5PJMJDL1VUBdbQAAhmU9yShz1xyfCL944ipL5xtkpXVXCyQLhCJZKK3DWv9Exa1LqiTsbPV7PEGJKmic2meywQgJ",
  "key2": "5r9rE5uFtT4eamtWFyeCbVBviouhymoxNSLhQfk4VZuPDnqDKAkcchCr5syhaeVG51fH86GX3kiUALzPiFJp51vz",
  "key3": "sjieV7iubD3ktBBdE19SreDLUPUAPL5sfMGBy8b2oPcdCEPfvrEuXgPXebUSd2xS9mYb51zd5M8uCPVQdTLAx9d",
  "key4": "5BGPDEXkd9tzczsPLi2LaESCKZmo4tgF3rLJSZeocBFankrjowzTwfZqWNrTvBQ1UQhd64gn3egf1Vd4cNizCeut",
  "key5": "Uo9wgdVoddykCS6RbXxyiGpVLHS2DUBBj61W6Kxjc3MjYqe1Rn9MPcENCecSc4jgNcqhvH8ru9s8MZjTEbDdFh1",
  "key6": "2LcGmHobyXkyZkDFchyoNAG5cVojux9Nyts2LnujykZvWbm5PFFzhJiVm7R2wax9G5xtEc7edJ6NHbCdedxwtzwM",
  "key7": "59SAmrvbyh6Pr6Fm2U3B2f47LbXPQGi6QeHyUVPkuM6REtv36p9TpaUDGarMhtxkuzZDBCuxPDQegFmuLg5pWaQm",
  "key8": "3qbpJ7dUiQQUrm8VyJ3oYSyLGYJF38ksgQ1Lfud5Y4QPJq817fTBLc5BceRXBXRQKUteZdR62aD64bq8GRzoM8PC",
  "key9": "4jWZ5jmP9m9jLpVz3N2NYrHM5vF7EPdT25txPS26jHNNnCbzxavSaAVmH2aCqdgeD6VgFdTpzfzt9dBWNpimDa14",
  "key10": "kVymhwtk8cERXUwwUzQaohT5cq7v9AjycN37hZNXTKTZtzbLPZbemgdwJPe5xDD8fhFBgyAWRdfoXvHCd8hW1Dd",
  "key11": "4P17N5b5DokWheipTXobcamDFtzugrB7nrakGAynDNZJUGiNHFUkcxe26eMtYuPCfEFPSEDxBEJstsLeYxhd6Cre",
  "key12": "4dCky783sEg8QUrDeDHEC8n89EYJFxd6hxdDASx4qZKZxJuNrpoyBdGv8YqHReRAXaSNKD1JedELyxoXiepVJ6Yh",
  "key13": "4AaTNFcieQbaC8utAeUi1mw876powBxSFeTotMyhaaqPtX5qEzvxqcUUnea7P14Gdqtnt1BF8RsnYEzFteajoUQV",
  "key14": "54ko1EiznNBdUh2AHBExMP3XMb5KJ44Ykm1xS3yq4vroereP4pPyAtvio9HsoQ7pcWCU3YybJ8Sh3K9QXJX6SDKV",
  "key15": "pN2Xn9vXp4x1A1jw8NAY56JqeoraAjqax2pBaXX4nV6satPmczkHMEQVGDBKTRCffCcwfsXMX5urQE6DdvPmDxj",
  "key16": "2C2SXYMzFUbRoFcdfEWnJQ3pRw9kuHGfHm81KT1nBBj5Smhx2pqaCN5BzZ6cX2K6TvHNw4xxFi78a9Hbc66XG1ef",
  "key17": "2xER2NaqHUuQYNg5CCkr6eF4JdaipHY2otF2MNReso9ZVyZnhgZrAD8rfTeHDNVFrSWCywfHXGssTYBhoswzqWAU",
  "key18": "2z82xu9jtEPpm3QS6dNQ577Wt7DSjmDVfVQssY6EwNBexvmRyk2HEegJL2nEDyE7uVae2qPdXNxTT2v9YLCPDpsH",
  "key19": "3bpo6bgGru3eBEXzYewvjfYtpXVxzmpDVUYKhb7Yab1GyFwd3uhRZunTNexSPxXph2o1NafrqXYThANZuazYPwwT",
  "key20": "5vJaVGo1J5HMcKUYdDzrZF6sPAyAfNgc8rWfeG8b8X4BGCPm8YMhWjfJpnFMSPvsskexPaDpSKPEJZxhY6v5MNjn",
  "key21": "14EoVx6ZBkghJPhYhoJCUBcpoDZ8E4PRDAeAXaKn2fF7eyq7VJEQNgUpiBVXy5MtWeUywz55M6tLd1U4FREidUa",
  "key22": "3V7qW3EMSMwaXtLEEo2XC2M5Rud6AnFv23gQmpWmSi3HhuvbwsUXWZRGtAjVf1WQx9A6dP9GTn3bZEAJjCtmx4Wd",
  "key23": "4bVK6kgjKTqrx9ynDzYKrUnLfPLhB2NioTzc4qpLnTq5ZQ67pLwgSsSYXKjV32PDFni66XWnyR6Bz5UmhcpTZcaB",
  "key24": "5tkBx2Srr2jUutYpSGivXR9EbYFDcPFPKPhwKuhebRRNZBS7tc62pJPZedvHwF2pL9F2T9jJtxAQ4Lz1LMbmV6Rr",
  "key25": "5JEafbHLruqeWPy4YMfcR1a74uZesCDARiw7URuoiYexV65q9iehMTRbEkrDbhX7CfX7Sci7kaLjcWHnz76rrMZp",
  "key26": "3VXSMTpQiGRvH6e13knv98j37Yag1qELJkn3s8C2G3zAPfJhGzJjmKkt8GJtfdC2MGviowbsXpw512k2zqVatrXH",
  "key27": "2C57YzBLKVyLfp3RpGu1rhkybYKokTbUqe2XLm6bVKo7z2KEaMi3JDmN6PysvojzU4fGnX5QHNE8YvzVoPwmk1bY",
  "key28": "2XyFFhS5BX7e37FTZAtNqJoToiB5d84efRMVUYtpzYz89s6QCbqKFwg6JH5w9UCiT5Dh5peHg297ECCUfGSA8Wvd",
  "key29": "57Jy51HFFxWQA3jZEgSg76WkQrpjDXUL5uf16Ujtyu1HKgTVw8kygp5UZQcBhms4aBPXmYMDWKHQntxWpvzxzScs",
  "key30": "5mW5N9pCVxBpYXw91p2vrP49R1VXgnBVBZaKdp1WZVkKTFR2pnw1Kd8n4yhUEFwLtWrwYQnEaze3qzNcYbwwJJqP",
  "key31": "5ETvqT8yqt6oKpCZV9x6Y2SveeanVm8pKzu8KJ2iVLPVfBNkQeejSLZAq1eBrf91z8fpxA1LrwcSM9UbG6UZDBwG",
  "key32": "3K1tivhyWxM6jmRbsPeCZieyYc4jtigeqi5ucQnxq61dootpq7NYwRMV8gxTCLnjEXLVkzEBm3rNvPbc9GPYD9qb",
  "key33": "4czLwmnf8TykBorJAy2YZesbYU7K6U4hDb1qUdiMTwB3VRFSunfUv6SZtr42eFvQscGJoguTeWHxJLEAB3CMrKaf",
  "key34": "5G8Cz1Qj72DBjrYbh5Fn8owk2AVEKFMfbxUCx31rfJSSe2j6K5pxLirEC689jnJYMgRBdZ8X4WxRkcDyYABjnar1",
  "key35": "4JSuaG3AMyzE43FfLbCUacmTj69FPqn8tvfdJwo6LY5Wb12JqdjYaJBMEbht42trwVcxwKfMyCA4MN3xUJpsqKk9",
  "key36": "5npUkKjGta3o7TaMkF6GAjrZmzF93PPwsGqGfLQQ7XKseEz3ksY9VYmgghnHAbQsSYJB7ox37zcF9XSXmMLAaEvn",
  "key37": "4rzp9mC6WwdRQSk8twzQPfBhwJfskhK7Nm9kZGeYWZH76ppDEf9YAWG8MmEQ98CBEdiTnL5zc54i4K3BJccdWhnH",
  "key38": "1n1iyc6cZTYH93GdKaUy6LAAhivXjZBAyk2bM9LQ38Fp1aNDddF8pefVc2gEQzBrQJCL5Xw2Kg6Ehtm5ykBwye3",
  "key39": "4fcRYALqhcaPePrnj5L3EVaTPGPp8CRmN2vdt8iFUTbf8KqmMEajUGdE8MZqEK58wZcVSceAbb3wnzpGYuPRXWXx",
  "key40": "3cP7R7VavWuj7XHRhBCWchaMBtUmiQ1u9x329Jgy6TDzm2wqYPfw6arMD1EnZHWMaTLmSVZr2aSL4QJocLpx1RAr",
  "key41": "4QXmYBwQpAkTka8g4WBYToYfLRU54b9Q1AfFX6CsWCM6p1JpokiDc6dZRch3m8j2S6UeXzoKd34noXMMxHVSwdz9",
  "key42": "2vaSCcSjRDvHqxbghS7kNzoarcQHu4NEsdCYWA7UrCzuTGNnWoi9iMgUcE55xnRTH6zNmd6DFAJuDhsxYFzp2krZ",
  "key43": "3RvN2LNnVZfxikpejPG5qyALgvin8TULg16pJeMuWno2Uo21C2zkGDwEAjzfwGfAriVBZGdNcsNcEr3wbcgP5yzX",
  "key44": "4DQnBteewESCqRyP1XymspftzWJbuqHUXetPrXKWSd9aKTE3LEUL6bdg7FGZxsnNETxg9yLYvdLLKR5y5m9VQgmz",
  "key45": "2H8YGku9UN2UKG1w3pwbuizK8gfG7iBHqHqZBe7DDJqNKHALb6R1UCLz21uRmW3jA1Wb3DPTaAH8167xtZN8AxBU",
  "key46": "51Wqe4fRfRNo9UiNiGoRzeCz9SwAFpuUsgDsFtidiFLsvmoyVB6tbq4BAQUNaFmRUyXn193g4kGkvD7YKJP3ebzu"
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
