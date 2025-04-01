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
    "3SA3PwgcCcPwB9ZHASrgdoE8uxQbVBtNVAktwEWsyLBeUgKtmXLNUFKVJH2wRcpSQ4MHNKhh25N9BaW3VeLbkkGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BV3i49mqpZ53VJj6qscNm3vryvBLgv5pL5dLiax4H7pjEs7wVwTCf6ZVwRNF36ZKW8jACbtf6nQycEpS1YvyMGg",
  "key1": "3usHc8Mgzjo8FrFXKYPuntzqZ5Q4JDkHNtBY9aBVDRHwiGBwoc8X2gg2dDXeHzZMZw2JQdebAwfWEDAuEUV2rqHx",
  "key2": "6HzqNoQMoUh1U6U9YkQEjCQjzAFVY4j8GFJZDJdHDrDM8KFizDmxbTd3y5BbEp3DY2AgB3u38oZuMEBtC4pwuAc",
  "key3": "4dunJedHHtJGsE1hK41ewyv6FvPnKkQuCFFzjNgWAz3eq7gvTUeXaTZ3xG9JJrMw7jAJb5v6gMLtr3LFG81MBinb",
  "key4": "5tQZKn9nycwnHKc3nfe5nupkw8xgyp6aWmtQVPgzyTvVnfR6MTxvgpDVh9xa8BNSyorUeZE3kLb2PMWAWf4unUyw",
  "key5": "J7uwBTP6JEpZJ4Scer6PGUZy8voYFW8XZ7EHSmnDEUTD51VYUe92heW2WjesNH1NucWw8n5UGPgw3acZ6bf6hAT",
  "key6": "5v1ozYoZD7RuQp7dmVWBXgr7Ptj8ZfRnfKNxAGdiiqY6wUmeJMeByGJcabZF8B8EjyKcVELozdZTGNYQZZLjqoaD",
  "key7": "2whHrJxHvo9N11yLqiTugKkSftJCDK36GoNP72bnJponQ3RxRbYZm1zAq5Nj8CV5ryduydGcUGioeNnjik4TLdM6",
  "key8": "42pmcUnG9LDFXercn18BF3MZEj9SE4UrsUPrZQavQehDczt2ZM25GkAqsFE8NHpEz7me8MbMrJM2FmyH7ovtajGg",
  "key9": "2AL9RPYEVdfoQwoFG9pqrw4QeSgRSmNPhwqv5bJvpEsWYna7HMsvKgXg1YctL6dme1UgSBTNXLZ1UDdYhV3Z4eke",
  "key10": "3cqra6cYiSt7VkyvqnbvvAnRSqV8LagexTMPgc1zBQQzUMsCuwwGtWGm971sfJur3oex6cvv82MCJkLc1rsgK79H",
  "key11": "EG5Caxf5toVtdWsdanWM224FsTyPgK4WqpAwJfDvULHp4bPycX3d7zged1W8fWgQhkjVSAfBAVsz34oGZPm2xF2",
  "key12": "5ik7oxjRpo6pHdy7cj8cff2SkaRuPfutBjXmC4aUSRPzd6xRmgBsu5nid57Rz7KyfYPLxzTJUUkuS2LsQjZo2Mpe",
  "key13": "33YzwQEoaykuusjBTj2ttvM6b5CSKdvsfUEG8xpNo2ztHDzVCiD7zbm54vvrKhcnCKGR1mWU5RFXKqYx85GyUG8s",
  "key14": "2BwyUrQFTXySM4NCdxDMecm36L1DwEeoUGNaaGeVMFCVU3bFSb7ECRznxWGovCC2iAEas5WZ83h82AWHbg9umpsW",
  "key15": "4wd6RoN8LY1yqJdu3wQcv4FKoeRzTp5wYJZ4Qyy2hkbHTPFbffPh4wCPmqNDbB6drssGcubCYXMgf4Qf8U6qgbAd",
  "key16": "HkCrKYfwzeKHpKKdchcHyGZGbmkC6iWtUKRGPyhQpixZfdqLPX5MFcPDBieG6kkcbHt85xTYLAAuYmCeJtdodsQ",
  "key17": "3EyeHaNHbnXvDnbVvSQ2pMje2DuyXYUVd7jfGpBGsfqcK8WwEZR4YvX7duPhfvYbsutxVQgTnjzg1VcsFkbERPbW",
  "key18": "2zadvXSXQ1TuPxj1Ruhw2P6GWoqXLD9u3GoJPri4avmnRznNcmS4bktVVR2HMSktd2mii17nySyPGhVqC3wkGjLa",
  "key19": "3c4u4cNCxsJc1kFQ9Wf76uKRLcufTNJnnNz12h4NsuZJZqfxLDGTzqNiXYNkieCEMtyizhf3sURoXhPmGib4qXLj",
  "key20": "xpUyJrfozYnk6zKVysMFFtWs1qxJSaAdZ3sRcNDFG5fAJKxELGn2YLTE9kYR1zCErP6W4kxjmtH44HDV4RGXuQg",
  "key21": "356GPrbGt6cfu1MnW5S1mFG7EJCZSYFAvJ2QNTfJd5xo7knGBaZzLKgBkuCW8srUZmmNEcMyLziqUgdw5w7bzesE",
  "key22": "54rKpS8SU1ZFoiWucvsqiz55yYmfu6CSkUPC9rCF8xkMQsT1dWaR57PnSjjAMrGNo9M8Myhowst8hQCoKBvq6KwK",
  "key23": "5U8NdrvdSSMCJqnxLjkrCq2ouEuJ97aWpLr5EL2KXgz2ywNUvEf8ccxViv45gurGE5A22cbtYbHfe8yTZBEqQWMV",
  "key24": "3MVVYaWFmUVLJ4ktXSVrns4Ln3pWMzZHTYPTx67pGeaRPj4h4eC7FJHWpgtbuBjrrKExXxTPtd5NpiwHE1bsxBoe",
  "key25": "318Pbi2nfscHHMu9a8gi7W33EJ8LRALrPvAExVPSQAh3ZYFFUADFs9r6ziicyeP6U6TEqRXLWo7Su83BUiF5hzws",
  "key26": "3uEXizBhcgB3zv1e86UXNRFFninh2JPeqWfrMWxA4c1bpdYfBFtSmNBAq1on8tiy3cJzaKQf57UzmgAA5wvEzE4",
  "key27": "3qw8yr1dGW3iWroy4B25RsaNGxCGte2ZWg3JHWdbMhDfekQYoPeyM6ugjhasRJBk3TSYFgvC39AXyZxYt9gdJxKV",
  "key28": "2T47cKWTiadPHRuntrkjrxr39jDovH5nuu9E8QN6UxAave9yKzhNiXNKkmv9tuUYeJLcsSnBWks9s3qSTiiqvk92",
  "key29": "4UYT4Nwdz6URUDJ7ruzEj97Z15GsXuFK8UKGzks87ecwt9Sz2dvH25UHekwz1H6wyupCM9qY4USBqZrLF4G6SS5K",
  "key30": "3Grb9mLkMYHm4kj4yTufT57CMPAr5qog9xRJTNjj2i3H7RDjYJj7LXq7BXmB6t8TeA8Ddoy32mCJuE7LHQGZvu8V",
  "key31": "4UHsLxxeknsV1nQqkh1cG996TahLDjZ5qKQ8jHU4dvVSWvq3tMv3Ybow2muFfESPgWKabRarFT8jUbasbBd58o25",
  "key32": "3szUR2kZGwMfMF3Ht81RoqPiGZQoyNL6yrbsxbZYP7hNXFxkr1G5yShUctptKm3nRX3Qy5Kt7bAW7KAeuXchS3KM",
  "key33": "5vYirnUqcSKkLD5Un36rWqjr4ddn7Qhh7sQRN4ef1DxBJmEGteZadXuVSyDnk2UmU7P88T8ttHES4SdrTAje1qGr",
  "key34": "3kbyLpB9k6Wzt4evfKXYpyAPuS7RxDTryGp2orAAPmCfHQwdDX3FQUPmHAYaqVLvqUBtRmPz2gydTNXPairvTTSh",
  "key35": "2nzgBieoQo6YcVmwUjNeXv46BodsVafKvZStA4dvDrztSegD3GRhivX5AANXx1jf9PbQU32DbJcnVsYnccv7y4x2",
  "key36": "2C6kCZofZTUSvLfSK4fH6G8upSQAwzDqD2vhHEANon4bMs91YdNKtwVw9627ge6w1W34vFDTGQWJfaox1K4v59GH"
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
