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
    "3nNVqcqWh1eBRLPQPfwWMw57XhCDLxWDY7EFMkrSVdEWQuvNbaTdg9DmYvALgfqq9zCb7XXbjkJsbRkwe6ezkpsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gn3qYw4LPcHx3Gqt7e4JaSgKDw31UHRQJKNyE3ZEY2FTUpXyCcPj2rJjBY4ec4EiS1o3c981HMMuEymWaCQdAwe",
  "key1": "3SoexafAbKof3Am41xm5PwNazNS2Zdi6Rdxqswe6BFqGZ8M95g5Q281bPitGm5H8mx6RGsKrSJesTxoEPQSUBe7X",
  "key2": "5RUT2KznV85VfaRuiZCp7q9wXAdPDvsXKZfFwdSugsDoP7Jn9yyh63F43MVE1bUkjQM5h2qbYooWB7VR1U71DiRF",
  "key3": "VB1FtAKE3VtJdKVVvNBMLwGeh5x2XdK2aQErcBd8ik1pVZTR6UP26DK6uN9nc4RJEVj38ZZ9cL6YzzY8GKuo69C",
  "key4": "2HttS7xqGzkXnpppLkfAM44SkkXG9ku28t2MzFzoBoucPmJ5QwKs2gZdRk1TkCvfdynND6w9apLnpX4dd2pCiZna",
  "key5": "4Zjtj9M1Hm9PUmWkWqHDTK6r5xxonvR2u7xuX6oFCtaQFuf8iR9jx3Zi2Ubaa39Ebxyvs7HEofrB4bSZidNj364v",
  "key6": "5jPnhVa9FxnTGVYVeC539UusgkGNRXcZqz1V3VQdyBkexGdT2NyLVyvgSMNKyGqDqwwTeJRgu6hj7VQbyLM946eS",
  "key7": "5t8Cw5Py69w3qgmW6HvsmRU2ue9HicwPTjow4mT3pKSwoB8TTbHQJgxy16csG6Nf7S2dv2uNFoaceUG7zoD5WuUN",
  "key8": "3emYv5J4RrXZcAYsFRSsGgEbM7sA9NPuqGr1CJM14XYo2yHiEUrFkMWpDMjmKDSGPa7T8PbhhE4sRHjSLURft5U6",
  "key9": "5PSgiB3kG3VDYCBbxXWozhie6NRyZdvsFTRLFTJhzgmUUHd3tRuXTcsy14oVMbNBNEBVpLZpNWYN3vkXidRFdTNn",
  "key10": "TbQKASXKnaDCdrgTA2YYugT7a4GVnq9B29mdYyKTViSiYdsw43gqXwN9K6ygLZ2cC8HRDmPHatWHdE8deZs32GN",
  "key11": "RdvRcUPMw2T34tPQZpp6A3H6LC3G3HF6r9FTJLucwdwZXTWAU5NHe8WeJjeGx6aWWmhAAa2d21e64JqcT24Psbi",
  "key12": "2nTdCCPVc6eSr5wBhQjsRrqgvk6XYLk22YHyTa18hqgKADg8BEePp4ZYFMiPJmQgK23uLjNVEm3s5DEyXDujKwtq",
  "key13": "48iZFTocy4t5gu31exSZFyan4b9ujFwFh9N7a5oLeZieBNH6mnchZoqDwwLbPLZyPUvc349eJ7QVU8pcbkdA6iwY",
  "key14": "4myjMr5pey3qQgukhz6Kb94zZFNKsiMNCMYY4y7iEPm2gT4MkF4sWsU1ih6Pwr7KdFmbP1Ng8spQ3jxHWZq8H9ps",
  "key15": "sGVJfVJoSdctqH91AdTp9fefASB5Hm9JxdEBxV1C4XHQCynnHcNmbGqx9skqb5KGCNyV99UUu7yunVsyejNGofa",
  "key16": "Quy14mBnvtCUN6Twg1jiwZ9KCJ7xAwkD4hvfH3XGLdppouJA64AQ8uwePZCLCcvhkxdkEA78earntFCfiJzd5uw",
  "key17": "td9cXg16U5LL1LCc6MbqxzcbcRNzNgAoFjyNtcRFk1tVwtB6BNb46xVEEqVwG8BJpgFSgUp8y9KjZ2Fm1KJs3Ep",
  "key18": "3Zyv9mSM9HyGK3Tb84oHeNu1QCg1QDafxvMptaY13hq5WtRwoXzPirygrii6L4Cx1xTgyrzBZshmJtAQA4THw57y",
  "key19": "2npA61DF2RxcsUNFq1yz1vqKarM7uY6sP9Es7owDHuaJWd4DuVJag1ZewsLCck9SaPpk7a4RQ4oHKdcFMwyAdxwm",
  "key20": "2QrUa3pyVj9Eh5xJwB3ypP8KDU7zkhZYLcUuFnpmY9U6BdfXUfik96YTidaUtp1QWtxHHf9RPufHyeQN9mzeNABX",
  "key21": "4cvQkQ3fkc3DG4qUFcbM8SnnYqKJeiB9MYi5wHXx5Fzn2U1h5WiF613SDB4MvvKQp3sfY9JcV1addKunE7FeENB8",
  "key22": "49D6ZiotjEsBknjGJS5umgFVJXYEsZGHrobSE31EFt8fsewb7Ya5SvT6vwLsrnw4UvQYmyg9GjatE3Kkfo3Pivd7",
  "key23": "2xzFEZXJEFNY7bdB4opQnWsk5Qi9NAzQtECFpitMuXnNEvroodExtQ69TuKaTLemfuYebViZfUUJgKwsUZHTn5Mv",
  "key24": "P2CoadBJhixxTNR8YPoEb7KKBkCgTReVqcL4xL4yudPJnAWsjDS5oZXn8JxeRX1t4hkDduQJ95VuWdeu3vr5LtN",
  "key25": "5FQuhkLYWSWKPZRqKPHDjg6VLMUNmS14Cqzb4VJouK6h541RD3JLR6AWt9MDKBLUEnVw7ZWW6S3KKexG5S3R6YT4",
  "key26": "pNtqK2CNYxs4Wcu7EMJnaCdVXpjmHzUjNWSMKPGjxHJa66XoMC1whwGemcsMYEFDatQZNv9i9jjxLXUZnm26krT",
  "key27": "3phBNw7s4FjEctdiG5Xwq3P5fuJyiiaLpHd69i3robHmdzH6hyqmKfVVJSKLhwzBRJS6NHQQsmfKg1BTL5JYu7SE",
  "key28": "2ijnApfBQoyBfLhXGJfEJN22qAgAxX6ehXyShccybXyQEUbAsJRAk7iBpwhze1uc2sRvVyGMYvbcCtUXVG6FN81H",
  "key29": "D6pCtQsLB3ssCHeMdVidmSoJHWyuAdipes1E358Rcj7LMaJmWuwvaASxFU4nnqJDPpSkhAiAqHXHgXxLqA5zkqK",
  "key30": "47PVpsw7rgRVJFUu4aKkeapixZntRsdpNuRi9Z1p4AEq23m7XwUaDt2Tz8nvozbbq38cQKdjixuVcwrLdoJq48Eu",
  "key31": "4w8U5rVMuKmHDaqyVgWgFi3VaQ84vjDAENHT4RfnQNbvc5eGdQtAA83DAQfFwfG4toERajYABG6TKRCnbMwycEbE",
  "key32": "441jqWHR9dZwia3KoVwgQ3Eo996caZavCDE1J7kocuGCbs5NVj5CD7yKoJND9RZdDmX1jZHRWrWjp5BiZEVBb7Ys",
  "key33": "3Qw9CfFTedbYhgDSp3G6YJeuncZQKxSsTMnVCMVFHKSxqUmqHTvGNPtkiNmc6ge8YXCvjQw4LotTTuKjSBJMbrCc",
  "key34": "5uAbN6TBUe2Pz57R14gcyJKZwdo8WbaumY3Wnq71XEzXxuyGTi9Xt3NzdsrJ9wraWry1nfUBEqBEbtDisrweKJuz",
  "key35": "5scKFEjGPYdBFLfze2JY3krozVRGNYqWupmXHVrKwirPa3wRsXG2i7hQpghf6dmzT2gUcWs5z62ArGWB94KNBEYr",
  "key36": "4oxXxdBow66GFFYXH9gReYZHwHC8Vj25yNNeZcPPDfUVCEPER4FpxkfNAxWpSchJZndvwMUFjAruAxW8QZc7iaKj",
  "key37": "3erfNx5UWB5Du3dnAoJjiejvqx4DAzWmyGhumk2rANVSFfVmjj3r9qqTebUxUZE7DyiPpHsJmt1WFpgpgtnqt8Q1",
  "key38": "2kzTGaD5w8nRJDv47eU5ahmubXyDVXA4YajwGNsJ4FGCP4M3iMMN1LsHqGMg4abtYTsEpdVXwUxP3AEFY9y6whTA",
  "key39": "T8fWgkDpMnyqX83EtiPcPSzmVS1MmiVfz6X7KuPD4GeFFRkJhSgWUgCahBLWBomKMWJBDy4K3NgeaUy48zeuNJ3",
  "key40": "31mDSD6LQzjrMvogcqsbTk3CaZxqSNSaj3EekAD7UCtDuWJ2eTox3NNZJS1YUb5a83vFtK5Ty2VMN1TH73MrKYjg",
  "key41": "5nq76AJ7ut2ydMAsBaAqMiXMPytAfs17sJQsVHTGVF4AqQBsKs4JdEwn6GKSeYvTkyD7gVgK4naHTVdRpnob2ay3"
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
