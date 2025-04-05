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
    "32zMug1pi73bE5cpFtvpyEQBAkNUYYfhhv5dv1NA9UTBz8N8LFQuckr1tLgAXEJqBFtJg8hyPZcCPphZD3nyB4oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmCjNiAnPhAMhVqdFwsmroWpuG1Pr67w59wKd3iEdgAuH526z72ogs9UnNaT4jtMDu1VdbSg5rD5z4Yak1y91Ru",
  "key1": "5sJwL6GiRQDBJ7vdCVzsfxxozZ8TFzx64y1w2oFnxAaarAq9BTcv475ja6xjL1V86YEBym8w6AFFG7WFDpct2Gif",
  "key2": "2BqMzBtgEEym5ZPvzj9ubyzy55k8y54XpLfY78efwzc2PKMcFyCVRmEka5D2jjkCPp4yrehBiww1t87cz5yF7A6w",
  "key3": "2Zt1kNPKkfR5msvNLQQ5ri8ddscSJL4AP7She3NHYUZTh1nJaqtFhMkXUznC4kecqe1hQQu22tfNp3RvateQM3uD",
  "key4": "2FMeTJvdXZCaV8zxzxebaWLxwamNNuNvJuTGVq1HrHiLqsbUNTxGyHhtApuaGx82RgQ9RtCFDHHxwVg16uDmHNcn",
  "key5": "4XUoZE7sRJWp6oVRJt4RKsUz1CC5P1vfd5agaWr9uDEN49H5TszkA5fVW31WNGQjz9bYmLbKU2Eyw2dqWRSm86jj",
  "key6": "4B7kFyduobRC2HUcgfnRSn8KCrYHbKaAcxRMDqjQJ6bsDhGKKY7jy28j5RocYP7EE8xL6xfi92uZvg5Frfbrafox",
  "key7": "2zAGEYjjbWncCSRUXu58oT29f9V5VxwLVa4h9ciPM6TZLff5DkZ7M58aDDPmBYta3L7xGvVRfHJ5PUDBJDbdwrKY",
  "key8": "4wGVup4y7J8ffGqFKzuv2bCxS2W19a8psJpxmiXUVSriEAwsnse5dV8e53j7f5siiUST5uxYtHWK4VzxWhBDn2Du",
  "key9": "3oYarAZYsnnccw3pUhLe4AVajhL1JC2VpHRDjgtAy13Lyb2wxwBTx5b269fAzPYMK3L4YjMSCfhFqQUEH9AgPfdV",
  "key10": "5wtkucZM5sP9Ft1c4B8gEc7Nb3B9W1G1mfGVTxxHLR5jNCdLdxUoyiudHRRTgvocbKrwhPGo3z4yvRSXsmwKgpkY",
  "key11": "3tdZafM9UBiKTxR4qwkhuJ4hTWKh71xrensREY9XPuzBfFUgDTF862giQv8A7LFN2PNqfZp5ZVSY23ioPqX8QXbr",
  "key12": "58SMTfUgCL1CiEZMVt3ccboc1MhePtmaygW7fdKFSPMZFkK3YXeewemNBLNg3JCu1Z6TSbNqtdHwip1fzvPE8S6e",
  "key13": "5dv3q8DtFeEGSUJRnxp3exLpYw1CGmHscbwSdy4eTKnByXS3evqFFfoP6uKELCVP7NLzy2JndHBrte6Hc4r6HQCZ",
  "key14": "3TkuUvy9ovmXSbbRHXk7j8tNKnPcxDntGgeLUHiKhMR3XyHXizSZ74WEaWNufTd5WhWzf46GD4zmScLtTF1AtMVQ",
  "key15": "5myY33yncCFaAZhafb2B1YEpyHGCtKRYxaR8CUbQrhzdihbG3y2DQcjxCu9VMspAU141mpTEX77dotasZdoZqQx3",
  "key16": "4yLQWS67Z6mJV9nDVEKhJKKoa29PpxrMKNVDZ1JPERTzfXZWhktDauGXKMhBuGFTZuM4MLhMm2jyXPvNeLXFAaNC",
  "key17": "3crQ7yoeKFoWa5wvkJKERotKUQS5jtdYdEwfFj6tr6GwJbyo2k3oXx1JGgosqULZELWqptLjFkKpVZENoz4pk6j3",
  "key18": "4KPFEdXwdjQ2XUz5DiehKhXUK4vmcB1cihtbcd1JjoQn3FDRznCpwfj4tYfHYhd36jN2soTbjGwwT8tb9cz83aN9",
  "key19": "4bW9oWFscTJRptGxrNQUZJr4Sae5BKF1i66ixcgboTbHyvp16VjBFjjjcfFSaFP5yKjYQFaNM5bGr7cNVjoGTks9",
  "key20": "3Rui43CCNfNFwRmTsBhYMHL9GFf1YrJv2zw2KsRfWpHwp2qoT1BebtG6addkzh4dGjLjjF3DHpNvcKNvEbSHzrFz",
  "key21": "384Ba1KHSeXmT4AEqw4SE3NePme1DWgSpSqteXmFbx8WG3PhRN6Zzyosgan4tMdo2J1TfgePNS3uLyihMiSXJBtj",
  "key22": "3ukV5ZTeSWih8DVSqLBuhrqL1DJxMUWueu7tLRsxZs93hC9KTUeEsDjkG8mHE8zjJrJaPbTSpXFRHwvgDuiYi4fJ",
  "key23": "33egxcUbdrBpYEouYBtbTEhHZrboUAHcEsAphwgj61M4wmCjtTfNtB2VKkvDjrAJ94ftmm178va5WJtSbnJ7yAWp",
  "key24": "33LFKQTVA73AfLM36rHWWHkbsSr4RtS7hMWjUXCcf43Snq7xxfUqrT4dm8DT2B5bfbCsKcqVuDqQmrt4ZQguRfp6",
  "key25": "MnedjoJfZeQFRpipCTuAZ3cdhKc53XW2U22NyUe46JicfGKTfFiEdFQhNot5CtSmWox8W7HDVhRTkXKBM1jtbEJ",
  "key26": "3gZmBtX2oCSmacZAfQNVexAF93hdFAoErqLctCpTkFrk4H6ksWjpe8sNbUepeyqPj9EG1yCcYAuUP6hJYFj1Y4LA",
  "key27": "bja1iSuxLpLoAetQYvs9ddkXqgLnC8mHw3mz3HFAABG2uLFydxP9hk1FrcQ99sRmVt7r4SD8NZwDxQDDdBibCmB",
  "key28": "2i4e1ra72jDeEhWpPFJvDLSvKQs8K1oZwDveUFWzLS24EwgrPatiVQAQHeMSN9qZu6bqmuAE8AYAaRcPztFVWRZL",
  "key29": "2yWGGBLLNMdpnFv9FKam2idAAGnkz4bkWRW5BweJ9triUvZJAx21SvBs2b3HdRuNukz9QBVARZ6CLMDvCHaNriNu",
  "key30": "Zz4vFydJWUMxJfqAToTNaN2XreYPqnXia2SVi7axZbGF22GLpSS3UZMHq4KJHDQNgEjJhRXVEcKYCpkSvut8CmQ",
  "key31": "3py7qaL3kpHVegcqC9bjdxhhA7WJT2YZjESdEZoZ9CwJMHNFhLDX7HhU9aD9f5RWTyKDyjshRzAMeFG1cTrdDnUh",
  "key32": "nFv2Z1hh3gr6mRRTkV23FFxzsyzdBHCegzJDSjwASuC5XWasrBbcd9NjMH14AbV5RyCjMTzbyrWzEPLx2QQKSKg",
  "key33": "5CcouRUaV6Ryeujtyu4H6emi8HMxLYsJra8x1W8KaWAdLXf7RnqRDhoGQjcu9wxDZ4B56JVRdy6m1ZmdfPZGjx2R",
  "key34": "5Zma9i2bN9He3YCY53pU7xDbNkDfhjiMqaoQ5qLPseJwFrkk1ydeTDhjLsfVGvcT6Zok9VkScuzEaEkCsQT21Dw7",
  "key35": "2e7zKSx7rxbSL6neQpq2odMXFdsSgZfJ8HKaKpJA7PSpdeNARXfDbMTiwwjunte54BSKQxNfp9CJnGMAC5pgpfnZ",
  "key36": "Xp7ycJ8hDqXLWxEW3oa5KEZck4Qr4UtoFqBSadi7GNAhnP3tAeB6BHDA8Cyp3Jksi69GnAC26odh7iWBZeRWGri",
  "key37": "2PmJF2tdvvAvpw5YTEgUPVd4c9YydKZqufRjUs5eFTUY79dBL7TgvwRXCKEhJogo4Mr8bCm92SaG9KwJVgtmFE6r",
  "key38": "2VD96PQLJdyhpKvVBjNPcCesbaLAVWeMFCYPUPrptsg8AGxFm4RNK5fWL5aYn1DZYeSrAATvyZrqWqpy1U3yyfNq",
  "key39": "cJLkjdnv9BvgibjtkhFnwsq4zY8YBFdeeZJCfWSUKLEPJjZYGHHi5XoHyvdAagd8KNKiJ2ewBXhoSmhdNhear7a",
  "key40": "2nXgACNZE8k7Pn8mQFXPWwiPtTcktzaMCgDzNPHd7w2rC5bX5mZctiyX338acsNgXr21NAqSQkdSA8t378uzKeqc",
  "key41": "5CBJ6WxULTnhyX9SaH9Zz3dgfK9bfGFJcZdmggHVgXBJcaBpW9k96mGdGPrhoJ7BMrdHDsBSuie3KVy7bPcyPJMT"
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
