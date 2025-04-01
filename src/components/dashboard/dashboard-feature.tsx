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
    "2WsBQkJntrNsoHPDRjVDiEZsmErwSGg24niPcQBpi7QCH8C1wBfi34Bz8egZg9N7tCF1APhZw5UiLsfz7mnPCgew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xs2qtUNaftWNQ9UprpdqBbk99DrjME4qpNTqTc6GpGKoHGFGP9CJ2QdenvtuGWGj3APDgrzw5N193S4B18NbYQy",
  "key1": "4g8zrjBPkdggBymR8ysRyHQ29d8gq2UftsDFvMg8qvaF9Ei7aihroC77hZ3oqYaUZ9mCqanqCyV9B9meUJ5wDGYq",
  "key2": "2DPJtSFNvvJxN8My93yxaHYmK3qEMSVE8UTpAc7j1ZSaGaYCu9su8eSdzwzFWAd1psnmdZMffY3gnW52Q4Wsq4VX",
  "key3": "3Lxc9WkD2DaJPfZM4LPh7vwo4dSn2WPNUyF4NtgwmmUFMWkj6tCcM1pcAY1Ko9sQngZHi7TvkJHTDdQsvWEKz56N",
  "key4": "3EVVj9nnrgJRFrHhU6yaim9i4RWz6uRDeACTQhhRPKgX9CpVFu46t9f2JPi9ebfdjS4QfuX3GrTUH3KtfUMujetH",
  "key5": "3CZazoxfSZXLN7Tfb8Sr1jJ3bfjdZ2HtpwUG5WpxAkSqHdF8hoXqrzpjAtrdpW1S82o8qSXH9MkdhK5xCfJtgMw9",
  "key6": "3g3LW5wZoNguAUbumPVEc5xGokWETEuBE8qEJpFSEKStDYWVbAgPRdvMJeLsG2s9DrJCs81rcmhHkwCbdqWJ4WVL",
  "key7": "4Ld3Spp4J3h2x8XTnHR7qpKMKeQCJ9jB1T7dDu4sKkAY9YqL4KTcKHs8ZYKX2ZtCVFvSxuhwuHeuWKRWFJkNK6J2",
  "key8": "52xkJmFxZHXeYfBFmbsc7pqjzKQXLzw973QPXTx63hW1tM3YaujCAWZeuNwzwZB9BTG17LysEsBZErEp76RX1Fug",
  "key9": "53K13mi89XYE2ToD3hUdz7gEvQavTpNznNz1DjsAop7MvrVZNCz4KR1XADCs2XJXV2DUn5BNbrsLhX8QW3btyrqm",
  "key10": "3mbj3XQFbeJtWPbPsw7Skicc2nsWpSxTsEBfbEPC4722HwGFK8c1smKMzaWU5bAdJmqYiJ5A9dXjDGyaJs82wQ2C",
  "key11": "2bZPENdzEZxfXBxP9RmWQe8ZUyEvi96ZAoV5EaasKMLd4A62TLpDeSHK8RgUsvsLbx7qm9RpQRrZHGX6vZVxQcnp",
  "key12": "4kRpkNWeRycpiRDSN89cfFDykk2n5sYHXS67fv5WNTBMWg9FWn7WUVYWcB9VB6pkwidTLn531t7E4T98nihBRtZv",
  "key13": "zRdcRmiaTcQ158qfGKn1ho2e56MFqwbo2x4sEqQ9H6V4j1WxBqM6RfEmJkPPqSjZLH2aTYR5Y8Q56vGE7JgHA7J",
  "key14": "3j8VKdga5n78VYM55aS2Ut8N7Q33MPj3Sky3iP7uewCX753G1Wkxx14iqDw32PTgTNgyGgA3vrdRqtPios3KFkGc",
  "key15": "5nHAyjhPcGQV9pJMGbugMVA5GQLeKmbwBqXYF7iMt41U3NEqhCMp971SCmkPWr9drv7jHW4qMhDz2m4RJ2GEcuNd",
  "key16": "5ymGbfZSK5TCLcRNgk7PogZU75TgaTUfH1Gg6PUbFJHE1JvkQMVnueLXXUveuo6quFwT1QaUKn6NBzusi8wuAezD",
  "key17": "335K4CQAnyK9UuabWU2MWTuQ9gXt7hcoqVjDJ5zNd4xDVxMy6Nj2KEpvU6Es2EPoqAqSubpN7jDFUEbkbqKE7hg5",
  "key18": "43RtY1Eth8zzeAxZAfiCkWDzofipn4VYrGDLNqo9qZFWzx8VeW8Tek6sna9XFG4iLuuNypiG1uUiRzHhrrEr4dzB",
  "key19": "6164FxaUhR98GySCFoPazkPu376daxYQ2CAmLeDQ9K7FdGZTy6Toi7wuFpD18sMctoVvvPKVW1tsVkyrcWnbBM9C",
  "key20": "K4KLoch5dzih1iwgefjJZN8fbvYgb1zqRKNnZdbXe62bf5GvFevEzsDt3Kq2c7VsLCVz8HiXTMWmaq2WV7kQpEV",
  "key21": "2haBCiC1Uocb7vc1Y3Nc3R4EQN4xDGBfbL5Dv9PacXiY8w5822wdEBXRnLCXWC3uiXVTKZV5RvuCvqhCynCHe78x",
  "key22": "2mJGHMv3RHRBBNcBsJBUNbgbafYYAJZzXaC2JD2tovN8jvg6dqSGAdSaUCHiTo41JaWiVjCXMCDorzNLYS54CXYi",
  "key23": "3C7XUuesAQbkZCxHv5CurV5G6p2PxzZ7wuVNdJKRkTGQ9svzMDeU1i55r3ywpzPyfEw3FqrY1GY6GyyiL6uuZu11",
  "key24": "3eSU5amuXsVWSPGpFAcJ18L22bssSG1h89R4WMrjRo88tNm2Qm5QRVXiyvfgge9b4R3vKGLZg9awYWrpxCApTZiz",
  "key25": "2oA8NEiJtN4j1uNZANx826FHN7sw568VGj2ydfc5zmwhkB5VA3XLDsVXmbjzMePnGzy9bJvjTudc7Aq1imRoG2qU",
  "key26": "fP5YWbBuLXFnMX5yDNc95aB5Cfyj7vjVej38CBxRsG2eaTsfjY5C4Keu4sTnwKgjVct8am661WdRtkWcWU3A68K",
  "key27": "4oyVLppLVZ7JJUzG4Z52SrpwYWJccfbY8twgNwkMAtDDvbheQBKxWAf4DsFKe5oMQtzwmGF571xTGS2PvZWYrDRo",
  "key28": "5KXq1qNtesf7X4YjKorsEiH7JJA2rdxNufiHSVGLaktVh2ZMGAeoERQ34ogryMKmLHhZSJeSdGFet3XGfQnCRgsV",
  "key29": "5fipCbCSGUW2qgfv9RUxN3XD7iCjib33Qe6nmMmhMpgieYPcMwhG1E4vEPdoAQ6YwaiF89exXkxAZrUJtzTdRqSa",
  "key30": "4xKMpBBE3nHPJ4DhrNkp6Dq77Ym2HPF7Cr7quwbB8NsEVUMxGi9h5bMjTCjbiivpeveitjSjf3FHv8xZiWT3V8W7",
  "key31": "2hzxCeBsFFn9nh6F7WHTH4Hq96kc2Gb1banLWudKRUPjZVguREwHUSbPcvioQ6MPXowyZ1DjHCbetuWqXtRBf5Xi",
  "key32": "4LkFR5bhnZhkQHjRgwfz7mefFG3hdGvxQF286pPiDPV1T16xLB7s1odurJwqiS68jSBDL1XEkR4XqEhXqRVPK1YD",
  "key33": "4hwWh9zmUmJH55Zj9yg4yBV9sz2iYfvhFUwB7oDn9NZ2nsSWo8K4KmiXo6z12MfTd28ot33ojHgQebBXxSSjGy6n",
  "key34": "4NocxaW2UTYisTmbKpQLxseBNBAf2wRqqiezdnr7Ur9jodnjyxQFmcEdAsSs4G3xQ3gL5U82doBBZxTnagW3NXtP",
  "key35": "25fx55GHAzgEjywbdTn8vQyac6YVkc3mbC2MNsSjrpWjdMyKLTfoCvvWrbna5kQUU5sNo2XjUR1k8j44QfEspraq",
  "key36": "5SD7HZmVH8j5zmVQRhNjfFq29v7ABtACVU3NuG636W2jCUvwdfkd2Q89J3eqCXXD84QmpRKCqkNf2mTFAt2pwiFV",
  "key37": "2HTHhPtbQzpBKD8anSgKEXR3k4YhemVJ9RptR3RKwEC8rRLSo1jGrxWC1FkbnaRJmDLNzzrLVK6cUeWRDQ4F2g4D",
  "key38": "3rXDLxHEhGCK5n3R5khYRZ4yrB4d9t4EC43rRNgeUf6dxwbcJGWu3rtZXv6dgSTErTTcgWiDopC663bGY1f24cX9",
  "key39": "3c2hLasr3qzkCFGGW1bnqvV3bHiyZUD942W1SgP9JsWdWWwtRUABxTJyiUK6soyXNUawzhSTfFPB6k92Wxk3Ezwf"
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
