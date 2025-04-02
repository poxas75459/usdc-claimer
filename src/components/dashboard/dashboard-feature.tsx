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
    "pJogPCBSDMz4HtnyhXDrm1wftHjWkG9uAsxAirjxzPosiwR9tZMwCwFSLSfNG6dXHtfZbtmUB1uVZ3UaBubgkjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZQavHiBEgza8xRqGbY44uWSHVUZ1KRSN3xVxck28esjPsZpqkD9cTHi7Bq6yP8XDzmLX8EKxsaMbDVBqmacV6k",
  "key1": "4xfUeoBb76KPnXwuae5BTHx1QY4CGM6GEmMDctUguD4dkdZdJdkYcZsAEMrDm8aojFNWqdnJZgdmthGKhuPdV9c9",
  "key2": "21EtKn93BSCynZyH7ncsmN1XBWb6VjMr76rcxL3RDd8teJfAqbVoXVywCjkkPrciufXi1w9yVhm5Q1Kebgs2hiTz",
  "key3": "4gUWdqvPmpjhfGpUpCdt5Dv87SVy7L8oviu9Xpz24ge8E7N9xYvyMA9xUXGDXnLFnwgsDELsfpiT8dTHnfdtxBpH",
  "key4": "62oxkqepqeCxj5xwXMAvJ5Zmh5pGmUcRqKbAcD4FUFoYtDqH7F5y7Rbpiu8YtjBfxpFMJ6f5JjvFPeo9YUjEzgqu",
  "key5": "4tH6BvMGP5C73vpKDM7jePp3ftM3y4sndmAvgERUdBdqVE3zED1Hscg7memEo1KwvBXdktMLRTpMgnDLfQDGkSiF",
  "key6": "NpKz6NvF3oeTjWo2mSki8XPSaM7hhVRpKwmiP3Ls1tzFeDjjoHmE7pwfuBjTaZtnapc2WKU7e8xfLmHCN1xu7jV",
  "key7": "57wrihZDYjUnv1t9gsx2JsxAVggFyJpdRYTCNSXHAbr3EWR91E21ibEeSibkqra62wqrGyXXugXBAZGhFmMgvu9J",
  "key8": "24AxEAFgu6QdVbHHhAS3enxZeyNbNSFwnZbomq5WMmjubZeaTxWysRGHJTD13iCHj9gajWrmeY8EJ2b32v3ZE6QA",
  "key9": "4zCMjmYtEHjVTHFuKQxaq825GFTiwkaFtzSptw2EqbjDJ2okqghdLYNmwyghs7N6G2aikAYpzhH9dBpWgWymjRVb",
  "key10": "D4goF92N9ucrtW2uZ3k8dryBkGYJ2eo4TcvWdWKrziEVrqQ1k6hRNJnJiLDWDNeJL4JvViVcJTcoGpxFqj3UnJH",
  "key11": "3zCLsKPTfARqqZoYhyS4jgLU8G1sayDJSAvAr3bLi5NZSGLjbsci9fhgQHy49sWcwLLfhMniencyUCEP1XZgr1jx",
  "key12": "4WpTH8eDta8RiuC7yfy5opKmMtMRPGp5EhSNfi4BtNj7TeYRZFMJg87WGUegxGM4BiuXaJ5gMwrCiFbxot5v5xhi",
  "key13": "6NgbCRkzTP6AQaVqgVY4mLDLUYdnFnL7mN4Mt6ycGik3apuA3SXZtkqPpodMy8ijcr2dYPsd1nAq7m96crDzudE",
  "key14": "WvuT5yf3Att3HyySjth8w5Ts8reffBxiPXN7jHAMidDacXMiPbxqaKsswbWJKx2b9XzxDvXq5oRdLbJEQi2UDb7",
  "key15": "513pR8ZAm9x5BzkCNfaKcjEiZMP14aMbVBKbKJA2EeRPS1wWWZotvnrRPQHbiGRUYi5aCBCqCRENhcj5VxadcmBa",
  "key16": "3vuLdzbcDbpmnMzngvQkZts1FS25fo4Gk6wgZtMwMLWTuZkyGRo4ZknZXFWpLHKCGSCkZBzd3XtTeJW2wg7Xhg2m",
  "key17": "3YDND8H4mGQGb8B8fbMid4Z3vWqP8Z3th64iEb4UJMw9UyrfsEasCADDGmWhjVPZ67dzpn5Suk2MfBLKDkCRtXWN",
  "key18": "3hVTkzmjokvjPZFshuETkGYSukWGEzscTWC73K33HMXUETnzEaQzZtXh5PMM7XQEDbamhcyuVohsBCyCydzJmeRe",
  "key19": "5x7FMXKU6kay5ygew3n1VFLPoaLsph8Cin3SaLCjoTJRtbjCq7o6BCuwNxZtAgRcdT31GVcws2Ut1YuDvGwyKGdn",
  "key20": "48u4pECWfGFWeKCUNeEBGYHJxycMLj7WSPLfhnmJ1tmWknYZuQxXMWZjnqrqmTYwTbuaAQVsVfXngqdjxssm7TzL",
  "key21": "5L9dgNwg1zvN4Y1KhyJ5587onHgsBQHuiDRmWSoKAEDFRs4hZBYpshm3Ntcs5wi3gocLVfQQ5s2k5hQvSBptdVN8",
  "key22": "1Ac4uTPW3TH7UhMvyD9ajyJhz7Ww376QThtdnqhTTXNeLKC3AQKA6ZrNqptxFQ76q9V1mftarY8z4rA55K4x4Hg",
  "key23": "oPhFHDa6hyg5v2MqxE9tvAd6Ph625jkECnS3uJA9vPg898gdYCMvGv757H9ygt8RfKoPYvpXmm867sGviuRrE4E",
  "key24": "23hPFZBRWRYeuipi3qnCmqs191fGK885UFVYjLZmDDsv6LmBpThz7vgXCmFmvf9d4skbw3ahyfc4ChdbrEkPk9XU",
  "key25": "3QV4d9mBpJ28QSKS7Fip84FHKLZBjiAtzj18GtzSnvqCZQkwTAgri5PkrsEwo5k1i4D8y1n6mckRMTFNF77mdjUq",
  "key26": "58hBsmRRAKSvXEk7ErtceXUiu9ym1fTsYtm6QzssaCK3uDGJ3xGBTW9xRz6Dd83UhWhJmsV7yR9BkuaRFfQch1XH",
  "key27": "ctUgF2i4i5juqgy2q5Ahg534ayyZpE99izCgyPdJdWMxqUavkfnedJDTSbk5M4GbCMY852SMNfCtFb6tudU8Aef",
  "key28": "5rQya8wVdGRhvmZt8fTBfomPhJu7E1wyigfbTzZKkAJgCzArtWNmhNrb9ehepupV8bYJmcqhR8S1eeKy6WKSj1pY",
  "key29": "54w6zBsg9bzY6GWMgsF5KSX95YA3dzQJTyQE5s5n6M5RFEcRxmNLncS4AyE5dDcbbBtfimNCwd1rHY2FCxi39wTm",
  "key30": "2sBtq4nUPgRip5b9yFGfXFYs5ebrohXVAY5rrXmsddRBWR96RPtRoZKp6dFTumJnELAJzGHjdEGWVuJ1zQKhgQgk",
  "key31": "45nPQ56qndVvWGTx1o2pbHzuK6qukjT6Ld9Xuqhnmjndn3Ve6F6V68vHXpTGZE8ebNZfva7vuU33QCBr2czSNCwJ",
  "key32": "3LNfbfh39NV2vPd9oahxtaRbqLLgLyotGxNRmYVREZhgTkJyvRBkiwpvSZgbv9kfRXAyGuqSawari3gAYpU4WT77",
  "key33": "5gbv4ahLUFyFLHxGjZ5BGXidHjFVFexzvtfQrkCmg9keCocajwLW7AVUZ9h3Z4sWhZBx3n2d9A6CTEAL6oGNMCKG",
  "key34": "4f2CkfpwMZX8BAcWLwnTJnzaACDxbzcyXdb4JdVvjQUEufQZciajHLP3Ay1k5T6RkCXFiEnb4PcFCHs5YLbQxSmp",
  "key35": "2Mt4McnWvWEXEJBjp3YusVz6fJ9J96Wa5E5ND9K7zbcVj2onPATGyef8UEYjN1DFqMaYx9Q4ArwmZXAn5Mr2y6z4",
  "key36": "55EyVXHwXWLLnYrw4uuq9sABZ3sZmiTdFgsN85UR1HVGVdJjgWhUE5gxjBCWTcAMLb3pC1ukdbprvTEPzppszHx9",
  "key37": "2ukTxJxJD57DJY4JcihVUmLDSdFGdfQfYykhxXcPkyAAuiJLSD2PCioU6APrWmG7wHLnMZzRMSuc68aT8mctMpSG",
  "key38": "2x1k37E1sW4ppk2z9grTxLCuwKj4ZCX2NpAURUpSdncMvRA6omvTy4xatHu9tUuAf6eQZnoz518Ec8oBPaz89sC5",
  "key39": "2sqi9QjDe2kXNQDHgqLcZpT5mM4GuJuZkUosxxDer64uHCPpqCvag1d389HAZWZrNo3RHvAnid8xTgQH1dkYLv7b",
  "key40": "4WsMuUqeTdwGbJMBvLiGWERaAyUt4EoSs6JWpR3h4WgFUcXCZXZENjXqBdZKEybwHAdEyu7xbmySHt7jNFVE2YFg",
  "key41": "qyULwGqqePJr2mSVCnEirHYNFR4zw5V4hnLvSpdKcRgvC9aHGRQctn3DcLSa6v4TgGfQYXZaammrFGe8cALaRt2",
  "key42": "2Tk7fdR8GT7CXoKjXafVTBEwyUm6WUTEfPrJuQZWj834F5mmyiHqPYevyhrg7ozAh2DJiRyPDeczUhGGpraSJgRP",
  "key43": "2rBgT6fHKp8E6bN27WznKgtATrt2n6CXaZ8hTEWh9x2cMrUmkpfrHC23sp6RvVhZYeX3eSEcdVQU8XjbTG16w2fH"
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
