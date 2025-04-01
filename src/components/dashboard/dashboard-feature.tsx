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
    "65H8bVmKuwomAiaeGrAjzafjcyCRCBhZrsEYy3Rvr8XaXXMsBTocSwokW3FyFwNHeqdCVv3iLeaHeDAL1CM3Px7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NysjQ57nL5yVoGy57q9aByf2Z9HCsWzHDJREfF2KvHHApKui6WQ5hqdXaL1cK9rF4NqiSb7TSk1sKutCMNBWLGH",
  "key1": "RFX9CrqBvmjh7qetoD5U3Gfsd2dNvQK57qzGKXbSkqpTdcaUoBaNBM8N38TogTymDZYcT4c763omjGP61fUQ81J",
  "key2": "2aapYL9R6Hvw2ey1vaYsE7mTN61R4pDvgHrZwcDd6bGiTJKMZXoucbptZEucjzTrYykdyG5JyMtGBJpwo7UMxzP9",
  "key3": "v9swtqqYsqhbJBZ4HbXT3wjTeGddVrmxFtbaFUcvocF2xYEvjrMm1jVwX753PAoETAb1GcyynrUFLk7gWCKP2AE",
  "key4": "3A8ovDJKe5FitxS11nuaYZWAYRfYiQ9raXHCABNN1RGVQc32DfFBmYjGvpsZbNuGLvNK4Jm4pbu3UzXRm46kLKjU",
  "key5": "ZDGa7AgzrnrfyuhjP2CSiAzRnehN2n4H3N6qD56mzD3v7UdhgnTuWg3U6wGtPYx1j42DMS34YMqCm2mv2XLRYA2",
  "key6": "3paE8oGr52tfaYr7x6LKE5RfiaEH8oPDrYDzsMfMaQ4K3KS7pC8oEqZEX4VSsGchXXuqiqgomViE63f2oBYvCibj",
  "key7": "5PhUTs4Q1jSz1YocjAH8Pq3kTpyGi4R1Hi7RkKsHmByGkR1ZYTnvnkhK3NT8ucWoBjEwW58z3ZvCu2UGq7MeYAof",
  "key8": "4jF2Yjqkb2XA2sUPJ9th4wZ5BdSi5yZA52yjsWmNFbM8LaztfuQJeXLK7EumBr1gXqdrBNHGhGf2Cs4HZeTdfmDN",
  "key9": "43mrxrUtdSBMHLC2dzik5LcJtTsp4Agi7NG4Necb4Jo3X8W3zg2LeDpvwGtyfKH5PfxjrTXg5uZCAPdWun9brakL",
  "key10": "4CAswcxwNC8hX7YhvWioKkvGhn16VT5kjaLsLLNM9frrSe7B7B68NCsy5n8Cp5h5BAC5GM1fV3cCBxwjGbb1cG6S",
  "key11": "4qeZoJrantZoKdsFP4KytPzhyUiiohQpUsZAd9iMsmTfPXkGqgJ4PtnYwEbdb6f5vvkRHwn3GEdiLsmuFKAoR9wL",
  "key12": "4tB8wssTagYyQ59b8NCFvwyKx4uQz7JqT5CXEALYpz31eaHRELVYaiiPYufx9QrCk4fcshMUkzodSM3RAZiYbDrq",
  "key13": "3RFWenKoVkQx6rGBEeA7pSu99JWrSexbziGog72GudPwYrT4w2MdxsBGxtrL1hNfpGCFiqDDBjshcA1G1qZyRmVS",
  "key14": "5KexoQokCYvNSVS1FvGVCb2xfWPMPwgMxodrRxckFPjYC7Pu6eWoU4ikPCyaec44fjPjjtRwwFYfXbMopCkKiC9g",
  "key15": "5DeoKpHBphdgUHZ4gq5KGDWX53ab132pVDGqw84YrTj2CNLVnPsHGLSRapkX1X7avdsfDZVfFNoDy8J3jiipd2zx",
  "key16": "2iW4wAbApQ6Ryn2GFD9XcGPT8gT8bA9SQbmYCXoYnMC49vPPiU57g7HGrF6nDcLCinsG3t2nSLDQGMMwwgdcwiDW",
  "key17": "2SBYGkUTR5JH1AjsGYuZyZPLriUzmBhAPSQVLpGyvtZ68k7KVrtm3x5ijGDiAnb39JjkH7LmAgdaRyc7irDmaCYB",
  "key18": "62sdSpAqLwWBuh3KKX24Vv6UCe3qA2PLiyLpteu5egCVyBTQgnAnrtkWcehxz6WAmkkiBjGMA3Zqm7hoYKUiKmmM",
  "key19": "37d8pda3zXNa9CPgkhwbngv2bHxDsBWYuUMY59kLNZWMHnKNCQVysSg1286kpqbuRDDoyqbJ4o9LSw5i2FF2e8JG",
  "key20": "3eDV4CjF6YG8kXMHpRuGCQHqvConb7KmGJhKCnPWzdHLGa3Qthei52iW2CqaNFbgU6aBpxeSk3NQt74LjeTixdiq",
  "key21": "2egvk75XkuAePFpQ5yS2uiWTzw6YGmDFzCw7swRnN24eDeFeZyQgiKgmKiMKa3g2ZabQMoWivvEUrRuJcNcah7VK",
  "key22": "5GxmwjuiYYSRb7P9ADYZ1SCTP5sKybdsHodoZkta4ryvYWRg3rhp5EcTfFjze8gGKex47DszQZLY1fvVb6ehrmYX",
  "key23": "127vCt8r3NyKjCPAY3h9sCiSqfvNbzVYyhZAJ8gwDhjdME6weYV6SzUdhSxt5nt8HbUc4K2zw1bCXZPCErq4THmd",
  "key24": "5ztkjiRgQayCD2pWVCDdhS4ZFg7rW723Ti4KNG5cfEFZp2ZBhwQbzbdQW73xFuG4BNPeoMUKxR6c1JsTnGtuPrqB",
  "key25": "Hr1tJUFVT57YGQA89e7YP3scWTimRWetqtn9e6h2ftzaqMfgGJxadCKJvcjnpqemZq3Mw7wrkQieeBo4Kf98RuN",
  "key26": "XDotU3uM4tAcjoGf4kAYnFmC4g8FusyL8mgXNBan4367fvThXcGRo69f5Zx8wD3LAVPRu3DpQrajXZuaB6pujmR",
  "key27": "3A1t7q6SHGrfBuB1x35cbicqFp4aj2ivsBBuKLbpDNticnHdvEEfcK69fpW1s1niRTuwdk5aP9RrAZpHEh46qFWb",
  "key28": "KSPNmrDrKz9WH21m3vqKDtVZxf3ERcFG7KRFjQyTpEhbjeEbF4N4LVQFynQiSkXRVD99yqCBy6JBGniYr2TdSgZ",
  "key29": "stiqzkP7Uh7KaUGgG7T8Pe6ewwBUy4FhiuppAJphKqvBAnz1BzBcgiDepk6pov5wvz4a1HzKtU5g1mBXwdPV4S2",
  "key30": "5uoc43JQNsR5EhLLNJAQkukrYxAJfCTG8V3EhNepek7gaqiHENRAGLtp287HEfdEDz31j1XiDiGJ3AqovxXJ5S2h",
  "key31": "PKn3r6R8UL379fxrXzBBUyRqf7wYC1p2Yjjp2uaDzn9aMDRYpe5Y3KmK8EiPhm8DNXgWPrYeG7qLDPxmS6q8czA",
  "key32": "4hkUUnAttaSkqzhMY92GHt6dWFMkLuaX7Jyn6CkuZRQBz6J52CEcMka9FDSoZTkgbsjTYAvVWwbgxzZqgRAg7cQ4",
  "key33": "568rv58WVom8vqxcG8HzjgSCGY8oVs72oBwryN718cPRA1yZuGmvBaz2NavB8epk3ECZEw1YBbndPJxavU4TKW3Z",
  "key34": "Egmca641agfBhx6JLL1BLDo4XT9ARgxLisTkDLoRJGTNxrNaAEU4o2poCCiMNgLk1w3WBRehbypD7zjEvzLnwz9",
  "key35": "5jQS6TbpiJCgQKEWrhW2NGNq4y2xkKinLiuPoRDhsCZyjfX3ugSdiDbhyXYDy2namJVtcwaNvF67weBqA7bmXTG1",
  "key36": "VAm43UAPQW3Nu38xwxVfMeNmCyCBpwetMKjR2Wu8b9jPJnwa77j5Vw4AaaCT3P86o9h5PehaZ4R9HkNgQVyZ56Z",
  "key37": "2XUe6fPHoDRNKJx8tqpKanjHGESnbbyGohnMiAf2Y7xGAe2JmW58J6WXLfsSEPcg7ecEG8TqpSA5RTa8q9XpAWr8",
  "key38": "hGNftNKPcW7VAZnEP4b38kMVbf17L8p9C81xNYdNDNd9vKV7dbnvq2TbdhFd7mCUH3MqVBjEJFxuUgkTMdUyuhY",
  "key39": "3WGuseBoXozaLiF66NC85W17rd4pEKFU96H4VNe1igNFxUL31jrqu8sM3VxkQ76NkKF5NQh8GjAZfzmE3Jeb8Lzn",
  "key40": "4BtEJGRttryLKy2yd2ZFCeTAKD4e5AaCvdaGaXeMftA8KkYW6fcRsojyvA8UpKrAbdp3LxRaznFdePx7wAKVmuSG",
  "key41": "2CyXNxibAAFyqFkiJURPiaXZPCpGPKShUTvw4WsT1mKWiLB2U7RXyHDRZGQ4AtNTeWoseS7DW8owLzwTia9hKNbW",
  "key42": "3TUz8kZmJ4uUVJNb9AkH5c81Dj2nq6tqt2Rcn9JkHrMKFiADygHaiiqB6RZhzjcZXmruU8tSxaUEmJu66GpPPCyt",
  "key43": "25iWqSri4FsTd2K1MedFuLq8Kv5tupuBhKiHUsk5cMYCbM2vmqC1GdXdMJEoZsDdKzCZAGXkyXyoqJu6rUbrEHSB",
  "key44": "qXMftnYXaR3Zirq85ytA7wev9ZGpgTrbsfN4tc4tyhMENq8uCo1WvQf62Jvv9MvZGdAFJpLRiuXPDokfCLvTcff"
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
