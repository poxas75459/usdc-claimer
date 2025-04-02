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
    "DjXK2kZVcUgzCmxrHZr1R6UFDft5RjLKSLn1XZ2Yz132LPUgSopCJp8qFbArL3AXCvdhVAVgYRfg2s6F19YwM2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wczdx7wDbt3HETVgKcko7v1wK71rENsiusW2swaB9hpWMYRM28UdzqzTC8FQZSviYw3iJPMa5KpobXY3ZWBkHpX",
  "key1": "YXvxM1YfDGrEadAKwN8JtqAzWgVyjM6ZKSjFqPw6Rv7C7yi9ByzCxUm5eSDbRqK9EQ6MY5TqBYjwNBPfbLD6T3h",
  "key2": "4dpZwutfFTa3xFgTJXh2JJeosqsoFprDduXpMxx3kbEsuww5dj25jkCqAf4B8u6r7yyGxoGPXoKDCAzUGEqQ8kpw",
  "key3": "2HNG7S2bEvGUHTZExBzqy7a9Hz31CVdLhRc4i8Ci5AmXoM9B217oc3JwhYyxD1Akoa8CNztMy1M5ANixhn8YZmo1",
  "key4": "3hJwrkx8VtHbrbZsi9UZjKAQF4Fk4cRARYxQ4LvCr4mVvbyJUqXPdsdnMG34a7VBgqfscAkkpJviBuCSYjgeqhKi",
  "key5": "2c72VNdXSkdcRHQD5XfL2xtx2TQRDcc3qwy44BBgjpUTjXAQFSjGbjvEqBHCpRfJE5ZNMa6bMnB343fF62N75Scy",
  "key6": "3Ffw5ZFRBRzDp9JPJUcLZdRc6mt7cgTL5TKLhUzwK633hPEBmPzHd199HmxCRG6gbMhVA5XWCwDTw6bZHfVkLmh3",
  "key7": "366bV6ieFKgK1MrR98891hPph4YJh8rDhfC2oJgGNgJzTJs5ZKJqSHrqYuQZKuYQZDB7XZ9AzrNF6rh63RU2gQMD",
  "key8": "3zvwD1XC7FUawyfxPmURw1bXYEUqy97y9xBcC61DvaLf6gY9W394AugTgQpeL3pLyaVB6XFyg6D3djRMzzujzF7x",
  "key9": "5bp3pWhQMwZRqi6U25W5rUkWQH1WTLQ5Tnj5f8Zkymv7HYh1PbRUQTrxrJNrfqaG1omf32L77PjEUPXXhSXq3AhC",
  "key10": "4cg5o24euQNbwUoyqqNk5RmGXphedd4QkYd1o1AB21zYPVE8h4HzFM6G6ftLrHGxqRUhW3QX5VWvj38iwmgvdfVa",
  "key11": "5D9a5NvGJoVDSHdnqqAyVvAefQw7V15Td4Za4ygYn1Qdvoj79p7CAkEFU5VRCR4zjEdNpBcYRwRkNw4HbmBuB2dG",
  "key12": "3zoizUn81T8d5b7WZ7LXKHBXQimqnEpKvMu27NLYNaF9HWUECZX6zc5eWE3MMQrcJSwVxgUCW3kiYeC2xvQRjC95",
  "key13": "bSiWnQjzrcwTpxdiyndu9UdxvR6EMZKtLXYqnUWDz4awCKzPYYHiqNwZd29TgaByCsURuAfYHUwV5e27REuf4T4",
  "key14": "38SGqiXi4M3q4TMSFPi38GWNwXeo8s3SHXL9LLNScFTqX54bNQ2ukffbxwCr6eRYLCpRST2LmWXd3JwfNVoWv4vQ",
  "key15": "2BmNZAfyhvHVB6D9PU9deFKcCrao3x2P4zKP7EhQHajXEjJRJkVNjbiQbnSizS9fonKctMSebkpjyVidFUFzk9hJ",
  "key16": "4AGxPurrL3sby4M395V8nTWKMKnqgi6UTNCaQ2dGnAEbjhqtkTdFwFiE6rZG8GsTnNsTvRFPMUzZvZ4hFiu2R8Dc",
  "key17": "438ipZ7uEyJEjqufsFsMGsT4VjMfasHqzRd2Y77Lnq5WRyfSRtGNd7BEuyeDAnhEEUmzvngNMQwKv48CGGusuNSi",
  "key18": "5sTLaMp5yRyTcYc41uPy4fNfzKVBSNYPTmHFHjwdUo4Dvg3jybPE1YToPizskDqVG9nc9XV6KF6AT5EyYT98nMdt",
  "key19": "3vzm3QGWmADojZ24q3bna4T3K7bZWLgYinboaVH4kbbYof2jPkYZEKzGyYTmh14EKBxD6LPj1vcVhUN8RZ6y1Dwx",
  "key20": "6wMo42BDEx7PZ8RL5VzLbHTftM1a9LJAw5gUPPqtTkrsAWJsh6UaMuWnESNDndUgUd2V3sChPdNQBGBXXH4xcxm",
  "key21": "4vhhdvQSqXw29S2owWgK6MYy8gmh7Jjmv7axiaMUtd1sEnhmjTX7TZHg2ncx74i1E6RPfLvs1cqJ3Dg5V83qmGZ6",
  "key22": "U1aKqnzhNmdujXaxjciGxJ9RvhusKSESz2kczPSBNp3etmqPH5EEFHu3Q419Ys4UejzjuBM5ACb4vTdQvEsG4fy",
  "key23": "2QEKach2g65DL2gKkzP5GFFmC5Kzm6i5pLHtKjiD28AABcSzJJr4ZAepBPY6u2Duf5q7zQrajziYyARw5z1DaVu",
  "key24": "5SKcRQBmkq9pA5nsvy566v56knNEZD6EY1CeWBx1MV6VXp2Wyfo5BEbBy7vyy6SU1JTiXWbCTpNYKPVSbQPiMtpi",
  "key25": "5xqmsJDPVcEJ6FrvzNJoAzESVR7EVUbuDqBKNQhoakjrPt19qG9VsAHBVCbcVWmGoS8939tMG8K3dkqmUrLxSTkb",
  "key26": "5CU59DX7p94dmq95hAMYC1j1wjYprq3YiuiXAzzxoxps3bHDec2xTLGRsxsiQH3q218QDW7VEoXr9FAn3choXAZo",
  "key27": "64xko4JHnP5cFKihp1JZoEn4CCV7zSvU1zvDz4b55aKvvrSdXiCWT65uivDgv3SNJLS5JDFer4qw6ouYngxAWVoJ",
  "key28": "4CTjLUN8EqSxg5Mxs7AMm8LnhcqrXjNtPxwaFj8W2Ht6pVi9SDpUJV8D5rrYJZcTrFDsRqkiuCpouvHg31aFh57E",
  "key29": "2JhJcrenpCcRVvt1MRt3zjvTVKLNefZrEyjYzNqyizW63mJR1sjr27tayZ8WteFrvSha866T2DCo2irtPN75MWUV",
  "key30": "4RfkkpFnAj7aVnzJSg4srT8wvD4Naf2AMQuB8cDyYX1GVXPpoWEL8scGFvvPcs2L3PzCts1ggDt8W2Xs65epMTpV",
  "key31": "4SVJFcMLTwEZa77WhBeCRF52P4S1nEvCHuYiVxdHnGgHCirPqsmdLkdQRbuZVnDGSFYWvqgCc1RbhoKgaAZTxMHV",
  "key32": "4feRsaULGMosAeEMG4ccBcoM35czzcE7SGRckeVjbrtNN5BSn8FmkYjaeKwP7k6vzt5hq1QajoZGCNMHcBjyZoSR",
  "key33": "2MwUDqfAorKvJAD7HSZ2JZwrrJhXTQFEQ3rPf2VH8HPY5Q55CAmNyc1b4z9YymbtSKcRDGtv6sFPNFrACdzmDuaR",
  "key34": "qBia1XCWwhUX8uxApQmeLyws6L58aJYcKfp61DzwDV4gamSkis6s4BpmqHC2Nch7khF2kp4vSynbcTWY5F6tcvc",
  "key35": "2FiXD7zZKnL73TeyU5QYdVKq7WKtvDf7c6YPPcwGhJqLdUcJcZjgbKidh7RRZtsqBX69mD7ZgRBrRdTAGec2AFvn",
  "key36": "2oySMVmb4LsfJE8hrPXgcvfWJ6nsQjxh7N8CGAVtxPZa13PTGRv8W7Gn4f1QXW3FNiHd3jcGE6n8cmM9CWUsVkQD",
  "key37": "h6G6tTFmb3tAZaopF9RTJp6bfU12aU8N6zh83FDsWz17PjUUp2pNcJWwBFhMoG3BPtQJjoUubmsMzv2XHsSWNpM",
  "key38": "4xxshzEeza2pPZnHompPzULYYJV2VC79BS7K2MyCAk21piqzM1PcgMjaPnz6bGB3sY9dKo17KrFjd5vbyniMqpKS",
  "key39": "4tYJxtJ88wQSGapoxtPSYtPGaP3ipHvBAGLHue65EicVzg7bkdWAPFRhQcH6HZnnDnYt2cTVfHE1Y8T3sEum2uMJ",
  "key40": "2yiiZ3M6BRLuMiJgaekFgvCpeSt48rd1FQCFdygJgQ813HQ7ccdnjQd9uqA7jKXxTiCko9Vgs2S3L7fwbcce4Cig",
  "key41": "3euggng99EDtK3d99sXUgV9XMZGVQ3hHXWh5eQAob6TfnT6YxQLRak8ZAnSpYrS4v3VypiiyrWuA1TuKzw4ghd24",
  "key42": "4N5rQxPDEAMsgE5fJoQ4ZM1pNRWWTXkVuPtQkCfphwA7rSg7oXcoJePVUgqaggN26PBKpUQE2dACkqV3wvHPzzoC"
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
