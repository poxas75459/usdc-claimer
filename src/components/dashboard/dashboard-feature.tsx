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
    "3roX6ksTTrCVpDfAbRsjtbbBrj6uR1YtVgkfWDpKDrqzZzdFARoEWCot3fWJJvDdKsr8y6mmEU7CFSgcB7KEhJXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mN5voyMfp6T9DKAm9ixUsvBpEQktBu67TsmNKZkpgRSa3KWjXq8y6RcuSX8ZL1ytpd77aW4s3dQLaH8NYTvoLa4",
  "key1": "4n8tD8wz3RDrKv5kNja1nGyxaUD13jjTYzJSQQZ3wan6RiMBtC3X8v8TBW9mUsQEyQGbtc9G8E57XVJuEmMoWEPD",
  "key2": "424gpJS9GJgfqdz43qENPXuTZmPsr4xpstKWconDHDoJZpanYRi6Uj4tLNq6gcTuRKxqcQKwStVmEbKaqJpetTHR",
  "key3": "5NnexbB3RtZCDKSW7KfPKrSLwQTbicC6tv7uY7MyKADqW8hs14hHwaQmuxsJ3vExLnhzinWeXhDTUXpifWaVCMXT",
  "key4": "65c3jHdzgnZCHUPbUqeB5vxw6Z9Th4py3xBW9KVKFdvkAg6G19MUmxv77oCNBvruJpcHTxxWqQtaGdbfQs25jM5Y",
  "key5": "Ri4g7ba33WnBK9RxFPYzRjFVTnAAZZiXGhR7MhG7L6cfZRJBbQ1keSjQZzw4yAktLQ8TzpqSdzm2nZam5nfCEpo",
  "key6": "48sPuASxciATSBG551YAVnwUMMmV5XpQDYdeJWFJ8NDfwmZN6A4e63xtZPT7Sm7VQA5A2gFDWjV1ojA1r3VFXRTV",
  "key7": "5mLQz7PmHawEPspUSLPXcfDmG5cfX5y9Wb2Ad4RGkn6DvsuMhgfGgYUEPVorFWxqmdATFsjEg9PiUik526eWCTGn",
  "key8": "fzxeCeR5tskgvmpS7HiW48AZxwBv8pkFh3qE89Qmu3JqUnENxFv6zXvz5p6xDCGkqeWSY6PNf7AjLBJc2sxsWkq",
  "key9": "395b6njeSgmJFNaSGND2foSA1T3zkyCaqKxEPZh8Fv1kEgz2vwW9C4UracHVWcJzUhaFbT76Y11txBCceVebYpMZ",
  "key10": "WRhVtULuXR4wUPH3q4TGniNvssSURSDwdocFPPydgmmmBNNYkzLRxcDDR9QBVW27ARFT6qC6kAjvEnBD2jsrgpP",
  "key11": "51AjhHSL5EQxZL3kaV7iuQt4Qjvfwm3L2mHey1V4RmqrG6p4j2rjmYJzFwt5P4RmJhLgyypvKTXusB7wro9zuHsq",
  "key12": "5KZ5f5Pbmk9jMcBMhBFMivkWgWNZSbwZUa99C4Bjt9NzjhZ8NgydB1z3m1iddyTcU2NgemyVdPhKBmQTDeNfQFjY",
  "key13": "rgLjg33AprmNgskCduwgaPSqBZpWubtK83vpgeLNvVMCHUjkqHqTMLM7coWTkvwGeHs1RF6Y63GcBWqo9oDucHG",
  "key14": "2VzaMCEzizYhVGqEwiyHEja4pyKY7f4VkcvSYVRpVENGPneUaWskrceWyEKrmpcnKH4RzUjoe5JtFG5P6qT24wy2",
  "key15": "4iv9yaxcb8BDbitY45dnqXMRVRT8a4Wmqvx6PYX7Epwq3Vjihg3uwziCf1tvyxrT8YMBUj4FDva3ozkUtNcR9yy",
  "key16": "3gck8JVahGncH5CbfiGFa8MTYgVkEiKsQxko1cVu75xoK1auyWtVgHXR6aB2MbHxLSbUTCgiF5aDo5KBz8pTgTvG",
  "key17": "4QhowjYP9H1gxvqBxKBMybLrKaiRZ6DZuVeMBhWgH2Qb2ynGTfrq2AXzJvQm3NfNrLqJ73ovQ8GDXGNo3doxWeaw",
  "key18": "4mSGf8iLMaAZcbcKgzChNGhiiiCcdQydhxgYETrCVqznZS7aPHWacmtvMeYWcexDPJ1wX5NaYHrd1o7rCwuiU6up",
  "key19": "2tCkKj2UEi5QWSEy6fVxHNmDmMZDDr62mKdLzQpF7TrPcxg3jA3WrYSkjWKQYsRcmSDC6Rf3oCeveAGTxxs7F3W5",
  "key20": "5jTJNcKT7v1DPyuYBds1gt6u47L4FFjVWAp9HWHGdWjggRp4ZWbb5Zi4Q4YGXwMNRSaocDkTw576SgfukEjbDRzq",
  "key21": "3F3HkPJ1WCVyeqtCtXYYg7vufxsEbtiBpmUGBEMZvdEod9Aqxc79YCtSqYzLgGqHHVME7xMz7JJnXVNx4zAZAFah",
  "key22": "3QwaLdhiPrDiD5e1t9fcpjh1fssBoYmnss17PSVgm9hbQJDECGy4HxiCx3tYMQYnVeGDQqHzDk8b7WHLZ39xw87o",
  "key23": "iKaQp7j5YNGUNx2F58zcTr8CU9LSKL8jqg1SQku8wBAYSqMPWhsR1uPo8fAfb6Y1q4mZcotqEP4FBLX9W8PyMgG",
  "key24": "5f8TiKoXV6E9rHrwp8gMhufMtNcpVtSTgyFXab4AysNisoVUW32s8cuGk2BFPKJSykavtVwU4sV2VHWJzPyBL5rM",
  "key25": "5n8onRhcC5Yv7zJfhjhvk2UBV2QVgTt9peD18tGjWFpsiPGjmxUsxtxVGZ7BwUUwgiVTdCuUbG98CQHep9mDuC34",
  "key26": "526aMXUyEY8EfJQBzuGfZ6acuf6uBKqFqF4fQj7tLqQk5WoJFdTK591uFMuohvYKuF7bWMJCssEXFucP6E5hYu76",
  "key27": "5KksxQc2W829oV69aZTDzWDtU5czimH3sgQkgUXRzkzT4zp9UGyUS4DLLjeXahX3GqPd8e8rkfm9r1Vhe35gi7En",
  "key28": "42Ri7bguXcDeKXKZSUGH6Ab1N8gu35vH3apj8Vjbcv1AMvqRPuZsEYVaWh6WPFNY6LN4V2AQ4C2QS9Vt76fnJFdv",
  "key29": "KgfHDYCK85YNrBeH5xswdHxKSHdsvuEMBsPLNJ5TZcfpkb5QgNux6VZLAGGm3mNycZEEarw6hkyboNYubLvguoN",
  "key30": "3jgVHUHKmLMZDaiefXaVxwhY52XPV6NimQ8d3B3FRx42R8vpMHSnPoC4G7Mxqoc6DqFVVRWbs8FAEVYkM3oX8q1K",
  "key31": "4QRtCbmkUzJsKTRouHSoj1s8Wxys8N4pRh6UKgeVbwguMXDc5Mn6pt6R8BuQ8ecbXcZXzdoViJdJ1ub3Fim41nf6",
  "key32": "23JHbyhpvHD5zxBPCKESyhHbyLEmvCgE67XqGCL5DebYgEfxbW895RtgsMSeUMmuo1mcUV4A13WWsMbuvDiddFxB",
  "key33": "2ZyxXpZ6p4uNceT3NuMWpgkQ4yy1DXzG94YTMo8h3YKwwQBJbsq3knjX8TCr8fzH8HUaCfKuCT3H1nquA5gPSZzv",
  "key34": "2tq86dmRgJiu2VAh6UbHHYAZs8PhVH6wTKCfawoojoDFoNxGV9KyDmYXgPSsHqKaotNQ526R1XJE7cQMyAv7XSLU",
  "key35": "5dxhEzYZba5tjmtC8zVKJeqEojrZQSPAa2QsAp5j6bn8yCrSbbtrcfS8aZ54snwCJ3A5bxtAiTBzz6tpH42gSKJX",
  "key36": "4eGhBX85ro5NC5tipx2Cq1K1eaRoK937ttaggknrH8QQDjMHQbXdVuVd5tphuH5pzji44C4VSMNvQK8xN9NPqSAd",
  "key37": "42vrwxH28R6T2fBFBF7Gk3tYLQVVGATCPxtDY1N12omQZgdAJhDGEKMf1UQonsmS5a92hUhep1DtR737PiAZGnYc",
  "key38": "36BeVootpjDsUkHL2MBpewJ5emLX5EZcNbKxEZ2qnJnzaF4m9qJim1WY3eTo2pMGdxWSucJqPLgHrGsXcBxYQaMT",
  "key39": "5JBxBT9y5z3hUi11LCHPzafzqAgpwfXjbhN6jFbrPVs9ju6i56ib52UfLyM7HLJHHtSqotwEJzf58Ku3VT2tRTuz",
  "key40": "55BYmANeuZSpSYFiFs7FucNUCT3bRzegMrnXbCP5VjvKRs8dFSSYM9jLXqx4AHUHjs55q6WKSBV9CfQ8cbWkFFTN",
  "key41": "29DBSYrAfefJcuXxcHQt296NLAcHUPecwvycAcUhkMu5S6tHZ4KNG3DJq6nQmDJCfBnLy287S4keprTDGnqS47eE",
  "key42": "21b4XCapjpJz2VG4Pv2gsWTXQ5hswYFGDPfgum6K72xL3BNx6GLwtKAxGr1LwzkPfQLvm2s4xkfzZprCibWDFEoF",
  "key43": "4QdDFm8T9ynHnU5e7a1vwPS8j8tedyAeaRh8pgQ1nCGE4oqFMfwN8zqPv72xVgDUX2r7QUwbDv9B7dGYWq6bNGEU",
  "key44": "5UTFmq91aXY3aEBgL2tDG7ba3PzrYGHc2PjfvHUQrTkUza6m1FgQAtgq7z7mCXZ9fF1Kx1DLKPM48t3Y4pkvycMp",
  "key45": "52xwmwteDaMvkPkBxet6CVb6knAcQ36LTnuJV48ACGZu1dzCk8ySyj1z8DJGUuzqBj7gKsyyfY8xzfAJSNHro48s",
  "key46": "4qoNyZaRpMifaVzDoKCBapuSqqXAzNScaT6S9ng4SZmQ2brg6gV4wq2MXMHCf5ZNUqVX3YmPLGV5KTryZqmb5NWk",
  "key47": "5ivKEWTLR2AM7s9t1N3sb3PTy5QjF3iL4BniGon7hi9tWqVNjCVMhxsspgUFj5cZ9nQ3oQTua3xxDqN3rDEWDmLu",
  "key48": "2c6ZetFdiAkwoNJmgkYT9VDMru7rLwDhCcV38SFWgiUajZi1viiMJgChq8vUVAMJbqriha9twSj8x8nxZ5Q287MP",
  "key49": "f4FAaZSaSFiaxo9RJEffftKoedDnmKMcmTuxEibxcZdqVpgiFC6i7pntSte2Y144aNz5m7pwzKbtuZZ7YntYktV"
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
