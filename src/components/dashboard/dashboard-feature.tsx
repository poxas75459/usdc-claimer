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
    "3qyseraxryTmgLHpgb4n6GWkGDjDkLd6RkV6wmZhnrjKezMRQmQrskg9BAoTizKgVg58qKuLh9y4u8JS4hbX1NqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdThj7EeTdBbK1T2R9KwXj4asoFCxyRvCkwH7WcDU6f421b5DsUFWBcH8HRzentFnLTYP7PUBYjdsEUZpNmy5q6",
  "key1": "4Mmm5YkcVhiNr8YoPmHywVurRfMVvGrGkXUgStmnxhiRTj36zBr54j7SbmM2J3DZZBC4j2g8tJ9zBYzSiDms9uUM",
  "key2": "f8gLYV4yoZxMXxidkNtQ1yNBtodBoa8RNv8u9ztAW7o3MvksbweBF9ucchATfsfnsjtGpnXQxssgZEbva7QcS7L",
  "key3": "7rvmK19TDKF1vxHyweCJvaB9dUYeUutQsGc8UQSDfA5hNzPui1KuDXsDBzm5zdu8HBngEtmapHGVKLiA46uGd7C",
  "key4": "jWw8mitVyZQJbe74no78u3ayuk6fcB5CsSm236UPTaNc2VQkh2vBe3oQrC5AnX6ByrFQBEeFq8FNNafHZW69f17",
  "key5": "FKAR3YdTgiyn5ay1k24ePuUxPenMDVYV6F5oWp3Szd9FAjdmRS7uyQJe3kCJTnxkUKkKn3iFHvzLbNmvjZBXu4W",
  "key6": "637CD5MLM7uAZPCwqZcMDfEED4WhGgQuRzjWCcKDrgotkXt8jC98cCiPmVXNThe135qeh7MCRah6zEwRtiwvyoyi",
  "key7": "53vXn4TaL4ANyjLpt3wGpqtQEHeZRE9uDQbNb9z3CiButoNV1jVdkhvzjFmLg66rETBkvFJ3ogVMpspoYp1bBFSL",
  "key8": "3wyXqx6E1FYkeCxzQGRFQaA8mEUtaaUmaw6UFFm9SQJea3wNZGEGEdtch49tWFmCh3z7NVB4jAkdrR14b5y2oFmP",
  "key9": "5KS9JKxppA6pf9hripQcdbVmMMMp8vHRFJsQ8hDC3Yqu9TatA4ZgBeKtEdyr6T4t3zzGBj457PfTUsGQQhWMZi83",
  "key10": "5ErQEog5EyfPGxyyLGjEcrjqBow2e34QKGQZneisTSbQhB3drPiqL2fzY1CivGQQYZFj9qMYD3zWA4a5bkNF3GF2",
  "key11": "Ky6S5brSufcpWNx3dQrqTpu9XbTGpNjgA1YzCA6aTX9m8wgnH1gcLTJPMiHWFPKzYYvzA5JUsHxfSQ3MhBPWnHf",
  "key12": "4yhGWAQMB1Ls8e7Njz5eLdDFFicJJUpBHsSsvQ8UkoZgWm3dKTZ5ekbKfPVa6pr2aYA448nMDtvGVLdC76omDXcp",
  "key13": "2r7V46BhbAnnXDN8LpNUNWwhANcZNqoDKskDdepohVAys6whQCDnozpi73KejUF1yio7JWiHi9qY4HhaLMDCKCuW",
  "key14": "5xJafgmaaN82rs7vroQcNxgBtAQbhSaTwcgQFwK584V4CwAF6FBcitjpfx88kkj3owtnGzVsiBMwhAYGHmuRq1ZD",
  "key15": "4vkHDRm8WDv9PkQXMPNvaBgGth7nanZ4LMCsvwMwZoeanp8DbHr8N7iCQ2am5Ka2nYqJY8LeAh8UBxxPYqSnS7zp",
  "key16": "5DPoYo8JU7FQvQiSQtqmjiBR3SNGwnj1zDQMEzGvPb7UkEyjJZqbtm3xJBHjTsoUerFWoSLCCdjdcve4SL44hyTp",
  "key17": "2dLpyPNDj1GGHPZBKBeAK2mgVTr2zxj17hzYUSvMv9UV77r51TioyNngHfginoiNfjqxs8HBwhFDKA5j4fmotNdP",
  "key18": "3ysaGByyrjKNsbTdSVEhB6DHtFdAFwbJbKvS9GDV8JZSF7beNjMJdYcwYBP4Xhs68iKDvmNF6gm24wB1LHw8T9bw",
  "key19": "5F3MPX3o7sXGSQFYsfZR5eSdGzzWniQt2f48NEe4P5wFwrp5WPb2Zohges33GVWzjoNq2U73a3hcnS9J2DCnzb41",
  "key20": "4e6FGhZqvmm6RUPi5NTB8fY1w8oK9Ex4FpnSKXdykzwTzuMyTCSCMxhgr2f1T4JhzRY2geG4gRPyvnLuj9DZVeAW",
  "key21": "3mxNBmW9AdjfiweDPbes3m8Kw4j6wQ11sJd2Y6AJAXvqMqU9V2TEKMZG7hNtDKyjv9tcjreXEXjDFhv1w7TUedmS",
  "key22": "6ATG8ugEM8y3MiHWwD5VmkbCcG3MVPPPcd8v5nzAZbeuQ2Yr5qKfsZMNxE14ePDPNVMYjxwWUQ6KtZUZvNAjV57",
  "key23": "VhQjzZgd4gvnQ1fPRAe2hv2vHELkANumHHhGrWi4SbHFLy5iUmuUL9f4SXtbHrUrEGrMdyV66V1Ha5tZM9qvGbg",
  "key24": "2Ac28n4kS83iygR233PcnJR9cRuHckRgJX3UoPK3ReJs5fwVNHgbqMjBou4znycAd6wmvAm317HVpaJ9aMZYpuoQ",
  "key25": "4vkdGMziJpMFTz5xDsNwG1b76EWoVjxS4WsyUKjTJZeWRFNaS4xdgF9AWpsvrwni9dhEgEhstcMusFeYu8T4VbVz",
  "key26": "41fBHqDn5JAzTX2y3wYz4uxY8pXw2u9XHndauMPsnyPx1BAYvfXF37vvEeLLf5qajrfrwZfxrym7kiwq3Q17X3qE",
  "key27": "2sbYuy2QHdDotd8sgvdoaYfELWdBzcNGY2hKehmZGngHyUmx4ZqGinA2HV9SkvV5hz7RAt2XyKyXT2b81FS6AJ4D",
  "key28": "53bhnp4FUx1MHqVyHrjcXRmPqSsbP4Z8YbmAxLUrGthXNjHA9xdDRNrTdCWA6TtTRh25XxTKdUn3bUkGPsTX494i",
  "key29": "5Jig7CUKJ8dB4yU83GKwr7JiY7GZbBfpaHuA887u6bosu5UykUpJWjbuTXoeZsNxjH13abMkH2kNb7iyn79w9eAP",
  "key30": "4J7MiuK4HkjwkLuqGKH7tUL2j2RatRNCYkAhzHYrgRuWRwTaV5VB1q3LrEvg7ExH8R7yeH4GCnerw22LSkU1Qbbi",
  "key31": "4WUfeYivWyLFd5fdRq7Bv1oyDDrAL6iRX4hvGXKNM2YEVk17VtBfHYyXPKYHbcreC5EavsqRMgs4uXXez6bgY7H",
  "key32": "YqEdRYKrcHydDDNHwnvw5TBSNA9kX2XwjwL8g316e7zdJ29MRi76ZgjWeBPmzx1UqvJ1NyEa5FmiydwjHEGx55K",
  "key33": "2ZKKprGmi9Bd8kf92a9hohGTcVEJP65b6FcDy9NpEtvR6AyQjxtJS12XPfTuDkKigwTapEYZ6o4Gb3qaAjnVjgiu",
  "key34": "4bYc5zjymAsAxbvpQvZoUubm7PcYAsGTqEaEi7t6W6xU4v7e8Pc24N9C9MmWbXvrYYDbsB6opLf7NPCEENHBv962",
  "key35": "B55yxRu44RQw6CrcZc6kCkVd1Ka4FueqjvakwQiZipTSndg7gjAHKKcMh9drfqwbQBsTp3S2eeJrS4cA9om7uuH",
  "key36": "5kFJ27x7kyYVvPaENEBUu3ZA8JAL1ZEKBL9NMtJ7xfo4wcQuKcvGLEtX658FwnqXWiZ8RAVnmrkFNZuEVBRxXy5n",
  "key37": "31QgzjHn1MiX13Q1AmVEy3WBdejMbokVU2vVVeeUdhDsJG8bM3yicg85KCsMtEqdYYtYFZKTnALKVLnjmdg6oBnN",
  "key38": "4UJCW13DV4gfUcxPE2HDm1og766hDSJdkVcJbL6fjBAAFPCyvQELKx4RwaKuL27cy2WxJj1VtJPurSVDQARjaZ8o",
  "key39": "5ip9hP9rWRceSzQWE4fmL6fB6ca2pDrH3LPapUTqNKyaeB7oN1dW9HdH9nzunXTneKPX6ZZ5B2owW71As7dMjgTj",
  "key40": "2Au7gPHXdeDpiVvf8GDrEaHA1gNKxoT4hGyeor9HAUk7EtyDdhvGJsafnbWzgV4e8bCbekAaKeByp1Whf1EqExxU",
  "key41": "2PZC3pRjsiB1E84fFwGopyPWSpeHiaePnNoobTM9h66FhEyykgkoqq674YgtEUP6xe5GVr3RmmR6eg8ByXNPTj1V",
  "key42": "wwc2o7LpSd4aERHWhzKTohJj1JxNVpSYztnq7DD8QMHFqgvu8uhGaNGdjXyNUu8eianEkxLZ4AMFLQ1ppjUZ4JU",
  "key43": "5itQnMWcaUQw3T66amKTgWpkgNEAgw5y72Q72xrxLg6Wturnzq4bvL5z2wKwHEExaoBHipf3hSAmEJTifdujUgyu",
  "key44": "61NVsktBndpeF7EnpcHJkENkpZ7ijAKfMaL1Qddv2KGfrbELxixiTrQeyWnuxCpDzurmgTUJ2UnuCX9fdtU7Bhr2",
  "key45": "42oiWPfPCXCmG5AMpBWGjbBWvGct986MaDzJm3BB7gyHK3ogH2pPjguazcu5HYmc5TBqCcR4xsJN1VBTXhbhttwn"
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
