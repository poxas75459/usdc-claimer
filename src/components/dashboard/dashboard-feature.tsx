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
    "2d3FGo7TtzgJzkyZaxLmTEn8yUUaDozWRiGfMFZgBvMc61DYmVdXx1WZV8B37WtiuScrcpPQ4jKzYJK93rTSatm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRvUa3FVAutfr66TTAfp3ajRKrYmAqqrLq1jaKiujuyPLrBE4PBp9giw2Jb3w5kiUSQ9Q9AdYV8x2EwDnjcXk4g",
  "key1": "PbWrojuSCTz3ru6yYB75R86GgkxiB5ehwRXkmLYFiprkBupjFKHttinduqmoy8BYSduJhYHpm1mkjzUvYcjZWLc",
  "key2": "3tft4f3cKN6H98CjQ1PYRxYBboFa5DhP5CMpWHrccmmN56JihvW1gGmoN6qzBKrVF4gqSE4CZXArpRSqmkzH6KqQ",
  "key3": "4dyzKKTVXWSF7rVGYsGG2XkwvJT4HikzPAj3rzhAbULhcWnGnGgsz4byZUc3FU4PkiJJRWnG1TPRN5Mysu9NPfiz",
  "key4": "bs6HNUKaQ9bzJYWV3mY6ERcQ9Z4H2qPbWLDigrdAjQD6F1vPjQoc4HEniRV2q6XsvAovrv5MTULQEXbpoXmVarj",
  "key5": "3bUaUAu3mZ1jNT1WENgbAiGFxkLBXFd1xPe8PmpYJzP6gjx6kWFpoE1Wa5ANHMnyS1gE4N1Vco2CZE2cvRg1sriy",
  "key6": "xobGzRVLsMg8Cjmtuiy4XoK179E8dTz6EQHmRUChKMJTEzqBjXm32jfSZzq67jWFG5XFG7B8Fgp2KwAGxp5cNjg",
  "key7": "51DbDDjcaN36CPEGkpHdYv3MMGt6Mr96dhq5eHLNgdALGnuKC51LDJ6y6aYjgsL8qS6k8mkULPzdUAoEYDu2QeYs",
  "key8": "2evPfgDnfzK2QtYGL3jRjkviYEbMgmA7fgVamiR1tRUYsXrjzazQM6UiG1hgALk3v3rEidLCwBET1g63XzAtFam8",
  "key9": "5HdcHnSweBQDH1nSXsVDupgdt9xQXLCpyWiFhDxTigRkSHLZEuysfBoE3P5ycDB7H8JYpidf1b3bZc1iAgsU1wSf",
  "key10": "4s7b3p3rzBqPbva2jsKcfStVtZSWoWhajootfB93gZYofq7NrwLtdtrpU5PJa5dYAaYXSWk5GdxWpJGq42tem8wL",
  "key11": "5LEP4tXnEEkoEqXKWRFAq4Y87bMQ8dRRr5Wp3nVbqnpV5wryhTTVtkEExjspkxPwngKgDaPx6ZvZD3boRZqTrciq",
  "key12": "3CSW2u7cj53Vw9QpygBLqxCYZUvMVhJDu28utpCVPbZuWrCwa3h6d5FtRJfwATXpq425o3vXcdxE7iUquSWGGbST",
  "key13": "3TCJRGvrKkS8ro7M5LphebkgaN22dC3foJYeQYyPgxwZek6z5GVwBWuzieBYHW5Xg4HTxtLy4KFuPrLttJKcXFSN",
  "key14": "4vaGSSBntUKLkNvwYzBMGd5wwvNz7qApBDCJkFNDLGwKNiBXCRYvK1Rn1PCy5TgTrRRSrwqAiEUhu9kxk3yMxYTW",
  "key15": "5SbNrjs4avQ9U8H41GPEDHQfjNVZUR55dNTL8YSgqRpwqrgSPASBXrQADyfWjrZNnGzrKtTBAPV7a2cJ62pTr4Em",
  "key16": "2JcQegKTbzjoBGjPyEfSS6vrthkQDeny9tvGE9RP7QWAHpVVNrsx6ny4MU2gtdXfrFZxWbNj1AAgYExvNPV2DKcN",
  "key17": "4D1R88FNRVEDCtfPC2DFLcrfTx2rsorhzUHdA8KPKkRXZWS83oGhatCgjNJQiweoCUA5mrh671d9LkYnFxAhQQme",
  "key18": "2UEp2hz7bTJNnmQq2FkqdsiX6yhp7ngTAwWr1xyLgdGBsdokyggYeiCagLxpPiSPnDjstDRayCGncannZd6Vvnx7",
  "key19": "54ruZz5fY1UGEA8A9vF8fntPjBRo561GDuPrysKThAbmbhhwRUHgYgNK8QzcngELJ5pxqMA7nNdSgfA5Xr1ThJXR",
  "key20": "4wXQxyX8xf4eiW1pYZDt9wSkamJ2Fycc81DhygLWXaz5Z1nL9QTH8atWAYyVre1Vm7CNQkMU1tQ1sz6co9cnjuVC",
  "key21": "3suCdXX5GByck4HK2kjM1sbYgHHTsXTnCDFq4x2jN7tbKLXMAGov58CLFNSw9AY99vsrBmhRk3ygazBmzhQ3Xghc",
  "key22": "3Yayjt8NzaWJ1USXrtMzoUzS7XtVdgiQRmNtsMYG6TdaLqrwPSdvdahHuaSerAJAJh45LRC1suRC8c5gwrSb8obs",
  "key23": "32eymd82oiZeyoXU2Fa3gLVJnhAgsVrgS4PUn8uvWGFLbxVTdYQd7f7DgduqsQD2Bm1xmBp6P9idZoHqAFUvabJf",
  "key24": "37MCfKbEv7QE12sYCNJHRWd6KXD1hYvLPBLYisXUudBaQirwNZ2GqLLKZEBQYKVU9cD8BLQZFKCqbrTAzPiQUvWR",
  "key25": "4o8NR99SCgdhtxU7zNQ8xWMQ9FfLgHPiAHJfojpcD9tUNmp6CNYh7i43Fn6Np4KsPrjrAW6mX6HDzPWVHiqnkNzx",
  "key26": "rgrrikdpZKRLX5FN7sMeEcjh7gxHQ66fyYmid7w1QxCKdsfbxcXxCs3B6oUj5YEak3Q9DETQt5b9spGkGMcsHEf",
  "key27": "r3gptL1jfQdEpruqNd3FgtgUCd8nrijjBKWjyJTbpr8PnVZLXfcvgLAZMuA77LADvczvvvyvyrsJ8bYc9Kt7EbH",
  "key28": "4ZrX25ZDzQf8GybdZ9GJLmhbJrfh197VVVeVe3KmckHV76LFPBcQEcConBgSXFpYMfmRdvVcDXmbz5QQuxnvZJuU",
  "key29": "4Ep22RLNKrouPxmmQ976yxQQBzf1ZspB3NxXvDDKahifLhKk1YkNyJR7cbpGiqtYts5dPd8XK2yuzCGqMsQXYXK8",
  "key30": "2XA7LJteRzhgFS2faJBDuhScfmzNKGKkygReW7iYXCq8KBgxz9BYkMZ6oNi2MwdjYtcQyMKSzUG4JKQXw1jPTyG1",
  "key31": "2kkU4zhCMzqzz6Y3RheEfdNwoULKCFXXk9WBh6ohxwAJup3Um4bDjGe4wYypHkCgGpBeymqtRe1edUaRBntyv815",
  "key32": "b3ntNzLe2YeD7fNo5dpV8TPG6gAbdkj7ArbR1XNecU4zTzcKqtfVsQq6wt2KKyDjY3vnAM4VmBH4wsrUvmUXowh",
  "key33": "2GjTG43sR9yqzXitdYKgS9EhhjwrU7brze7U8PeKxyFkEusbwccLUZFp7Cf6bV18mmXE2YTh7Df54jD8pDvqXyC3",
  "key34": "sW5oqNYqoK1ang89qkZNVgvnZHBUhha7hrfw9cSJeUWNhPiVXmS9ufjBigsZ3chZtmBu5sfmZCJWEZAkMrzHjA7",
  "key35": "3KME5JzFutMuMC8gejjf8ErZPuSqNF1iNX1xKXt6pnQGTtDLCzMyAYHUFbzujJEMN3wH4thgySSwZ1YF2LHCrQn3",
  "key36": "5YDgqvMWNqs5m1CdoNg6j1vCo14MUPeSej39MayK5QLtErDCUtK5fzQu6HKcJnAhECz7Pe1XGgbu7bskP6SUNPMZ",
  "key37": "2Zq3P9jhozPrVorS6owJm1CLykA6sGgVGqvgraK5emtr51g6ByCLBRLhDN3gSp3pkQpXP6FeLxZapGHjUEzV2PC4",
  "key38": "43AuLM2q4Yp4jbzRTMRdh3MhupRoLh2pbqHSJAoeoZEgfYARgYLZ1gFZJnUoBSDPjupM4H1G5T2MKAj49p6q3A4N",
  "key39": "2pAujkRvUwYmESc2HtcV6x1FyEfk4mFLWPTY9cPwTtCaQhDo1bWNpUmbjXT1AUQxPRqPrXgy2BUbC3oBAD3FxwGM",
  "key40": "2DBkmsXkv6jzXwTd5E4i3v7kkgXYu498VsTELovCX1NtkMQ4mCA8wuZfeDFAxy9LS859JiMpMG5Y94fHoZ9AdEjG",
  "key41": "2xAUJgrL88xdLaEoJMAT2Zrw12Pw12CuoeDAtZoh6j9bLva1ZGYonLBDkJtpFW6CXJeyfdWN7RLn8sWYBiKfzYVK",
  "key42": "4Wk1ryvbGbkHdegaMrFdwLKjp9EY2uQE3jxwLWmnAuW8yQyhTcHyXaiaGCVRZvGAWKuUqeNuYa9UnLYDkPqWopf1",
  "key43": "4hKn9ZJSwLN21CE9pooHDhxRNqvaRjXTzuvNdf8gY5qJQsS9dXMVtduvWtDPQ82Y76NJ7Ct73Tt5NYyrYUyrw9Ph",
  "key44": "5tFnK6KZ4ZSrS9K4AxcdNf9AVSooK3e3ZaAqRw4L3htVT5SjWhfPH9UcpVXFx3xgGTvjgDd4BWDykVHZLV2hd2LZ"
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
