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
    "4dnp5eXSvcYi8awncZuZNVTtc1cwEGnt8Ae2eqDttVQYJqjAh8vvssjKAB5vhNxoJUutQyHtQVi2sXPobduxCdrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CPJAKDp2JwhY4g7XSD6afHsmtfQq5m3TmMo1a9aWsyTiRFD8ffpHketXcDk4CwZCD9NCYmiae7JLxpMdUosxaUk",
  "key1": "2eqeZtRgp8RkWmnvAqPyyrC51H79vcY4qP19gMbZg2ptp3mPoELUBiyR4CTHc8rC55Dr6hDX2qAa1X57Psrqbsn7",
  "key2": "5SMYhTZ9aGPwAXKWNmC5cpAHu2wQMBXZJCNP1QCgFcQz1bT8fYnzMri3GwkyQ4ftTtM1BeTV1fgV7atTowcMZ7ij",
  "key3": "4mt64fKpxi4o5tcsWLstvDLQDaRSGVcJVqvqbsS7kQ5mKmfQZ6FeFiwWnmkR5RgQvhAx8ssaGzjXHgxBTYw5oVNP",
  "key4": "Jwxybvz8y5cwbdokifPgWvg3Z3khyiBmjKXyjFinv7v475QxS2wiFwuthjt82iCrdGRqYMSrk75sDAWb6fQDMP4",
  "key5": "5L6r2dm1TD7wj5NzZCeM3aTjZBLeDzhWto3Z8hzZ7C4Qr2yBtrsB39QYhdAD4t9Jf4ViERLyxvrUYqTRr7PkXqUC",
  "key6": "31p4bJq7zh8obvS7DtDxTUbGv7gVQhUvUtSXKtVsSAeFJrjgo9WD9fKBybGeKRqLRbpmeHMgLrd9f91vCm5YKmpm",
  "key7": "2U8aiwZ6UPcZbhPGb7yK6Zy8Jc63twXZEaBgb2oiFVNUwVaaxzqSxqq3w1FQTBWBaeqCk31WtVfXAYbbvWLa2LHc",
  "key8": "4Lgwn31HA9dEA7rsE1uKu7oHTQe8EYiYNh75wamFaBvqLWeSLGYFD6gWmu5wEGKozmt64zjYtnw429zqmudUevVX",
  "key9": "3fC8Q9vi9sDj66xL4GXwmueHSZky5Dkp6iwSxdjjzU7S6Zd6zZBnNi2hM9avi7BTCMKHfbCLuJXAXanLG7s9c94e",
  "key10": "2Lx9HS7195TynxZoEV1rUyXBv6sfvhBV9UxJSFq3qsMMVP9YCX8VhsgdSvjsrMF2LvTMuZcJ6GvNwYezEcMuygVH",
  "key11": "4rJ8rpSdQyrA6TmCtr6nCb7Gmog6StTQt8ArT49YNkRh9MLUsGeJgYUXfFgGn2LPSFQpHNyuFwKwk9Fhy7tFtWEr",
  "key12": "6232LZwUhWDM2kUFs1Da61KEtyRW8NZXJGFw3GWJT6yBHVVb81QZStvnyeuwLTonvnLeBav4W17PQztH52Mv5Qh",
  "key13": "4qLfvWo4J12yVZz7CW9cYw3831gBV1jyRtcBidWFowvZibiCv5iTX91vD4AN34ieyhEJGUJtTvrmUsNrMDDd31cK",
  "key14": "28yt9qZDtsD63JCvm2CpC5ej3Hkv5DjaQrebZJ5WkkTWGaUY2EKq1YwFfRygxEoFzFJ2qEhr58gbysYDPf97MaYF",
  "key15": "3nsvFdnTHexdnEEaXtDfUBZTPwQGwLbuh6PdRnVyrK26jfiJZrGfXXCcbUFLk8oiz3J6LRTyjM52Y8JW3YstyTgW",
  "key16": "4L91BFuft4rMy7FZQDf29aujbHhGNV1ETWv48qDnK4t57NzuL1arnQyv1NU8yJfDf535nDa4VQAe41uou7Bc5Er2",
  "key17": "5n9Nc6QnnnGYXpuGu1YRL4gfbB5mEYPQ1QqrDC6BDDD1ARi3r7pRTiWMoWy7tBjSyzzwnNmZdMjhStK6wed4saZ4",
  "key18": "4DS8JsXPL77H9B3zcyDizEsSRrjkt4erAB9pECrzzfQ81WMGne72dcaV3aeo4WR984k1g3qmqsuTRRwS2KmwHgQD",
  "key19": "5HChPr9WECsS75uccUyanJkKRb6nfq4NA4Csny7ZocjcX38qqMrPkdEqcQhuJpLn7YDjFfa8H997q6PbyGrpML6q",
  "key20": "4uzcuMqrmNur11ihs92KWaAFfQfMvfsZefn2yXHUf7Rr3LSNoCdLPGLZXXsTt6Su55BkehxnZ7BHhnCSzRwQrMuK",
  "key21": "2n6HYBRLmHhZWYMDob6fzco5hMtT8mP7UzKPA2XEpbATyGwcgf4oDXiaSF3RvfBNQEAuWWGJY6qsbigXzfBgJGiR",
  "key22": "24WL4shqL9SAiHeUtjJnd7UeyxEL7bWSPDvP4T1DXqnoGa6c1Mg8Jrm47MNK6tBLFP6VYeBn2zdczyTQJrjneAwE",
  "key23": "3W9tBY5HGNr4QRaxqFWmxFf5gLL4QngzfEeag33C6Va8tKVvWaXtbmf3evUy5jBPxcHhqWmHAzHHxpAHQSpi7yZ7",
  "key24": "4L6ShdL91v585QrGcor8NVDjH4h2zwibjyebr9pWWC64y6Wqj9m5UfiiLppzrAMKmFEKX235FGTA9mwaJYzgPbZ4",
  "key25": "3cPwe1DGp1gxn8N3PyCqomQkojPPeVKDRVMb3EUEkaSq3Ee9aHTpmzf7xj8eh7newU5QicMDht8tFnnScdt8JQoe",
  "key26": "kx4GRHfBxfwJt4WsVDhxe6LjAHez5sbugKWghhusUuGdYnhhUuATp8oRmjdxR6eobRhPqhS6BjPS55iUUMHsvtH",
  "key27": "EyQANFyquPfXSEaP4E1kVdFGWDLc1QTtqjBXK5aFovR7DNZpBKnonTXqLFqtxjK7jDqKa7dGb7cEVTPRdUCbD3B",
  "key28": "xdzbv1FuzUv9HELTxfiRwicQfMiUxzxN2aQ8mYkxG45ECiFexygrYdUTN7z8hFdmk2Cuefsd411DshmUnTBayk5",
  "key29": "2g8Dvg4gMxnMmt9EKA1wUoiWotuYhKpDrS2xbYiUXYrtrf7pUKxSG1Gar1nBC5fUt12CNFcBH34Db5LZnYPo6N37",
  "key30": "5bS2cbhGx4HRP5kgptcRjNrrMjnW8QCUCimajTWKTaS3zGFfR8yBcgaXZ2EUDjRreAqTxCgEYiYqhgt8VP654CvR",
  "key31": "4ezoBUAPA2vfdyX8opHFwuiNxCpPaWFJxFf9YVCYiq7osjFHgsFgh3ZZ3w3HGQB3nWt822KFsR4yqsGXUyTVYPDt",
  "key32": "5H9yeFopDx8DQuPJvz2xAaFXDMtvyNn1mTasg7sDkEd3hF3WChbCTjRS2Caxeo176HhWuRP3CXj11LWtidF9qgtr",
  "key33": "vC62msNz6Xe3hD5ZBn7au1u4nheBHdzmsf1H538myjhdEd5fjgNmt7DDDeaBZ6mLe9dVM9DAugP4d1LQSgTfnw3",
  "key34": "guxoNER1EVPVwYNGhBkLamveV2NhQFBSZxLtcQxT4Y78dYxPvtN16EQZudLUvYhRxffAPWestVPAsHu1BwtGTVs",
  "key35": "42UzDJLfER2wf63FscoK4sa1KLpSKBXZUaaKk8SAcbuocM1F2GiDtupgfDseUSyAJBukLJLxFFtqiAtcUGBgVN8N",
  "key36": "4qESpENcsLsnjGjSwyg84Z9PRp1RqELR6AyhT4GaqPyk5AAHTXvcLCgQdzTQrj2KaSraF43yoyXd8Emrtpc7uGH3",
  "key37": "3RsJcHk6Zh5t3pavNCMHr1wkF9E5R1w6WxgqUvPfZ8FJ8bC9A51gvVGbxDYMqMNgoHC8uk4nehvrVMAto5h9Sfpo",
  "key38": "ZYStfKocfKgLaYtTZx6wpGjGxaUR6vnwpZrKs48UKRuHciRc9BYZw4UVgqrjpRb4ZSMsJvazgELAhtJ94kbstxS",
  "key39": "49Ecqn5jfjqfzBUP1uH24QnHMUiDgUsZLK4y6FsZH5GJUd3Rvexs98NWiuT4uyhBWp5jrUAcDidjpBYP6VRyHk6F",
  "key40": "4QxqcNaZxjvSzTmduJh2WrBvi4JrzQpviJVGbj3phoiZ17GJ4ExzCN72n8ofPZHYde2yqtdLL91SHuQ7RTvBZP1v",
  "key41": "5G64hoMj7oX9j7jo1s5bQNbSzUEgprjSigTTBBSnEupSASEJUi2mvcDTfnzPqRiihRGzc9TJrTrHXmxpSsvDCGbS",
  "key42": "2AKDvptuZcEtJGTh6UTTEANNvWAP27nPjSGNm5jx3CvqmXWcwVpLa8xQiG7FnuaV71iezhAzY7NZDxsvG6969nUV",
  "key43": "3nAGP8LygFGBvrjLy92GB6u2oHPd2RxZHVCs2WPavZVvpUDVF6XCNin5yGH9vA9k14pHgcdUscxbChUFs1EUfyK6",
  "key44": "znJdspbtS5pZXH4vowRhcHbtS5KavRFRxraMspEc1rcwaws5qjMn9CaKnfq8cMukFspHX1NxEEDxibfG8itbtEY"
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
