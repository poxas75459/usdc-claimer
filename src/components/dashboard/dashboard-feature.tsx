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
    "2VRRHvD86NAz8GcwwkSukkJb7sC69TaN8YAqURxwd2ZBfreYwJuVFsSSpmmvv2pUPgYnacFDV8c5wqJ7FfA1SrC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkeQEvmTdRr2LiYf6LeSgDrb7tHDMs6mRfL355U9N3riyPneNBPgbcm3tS9JkGSNA34c46zUpWZPTAoynoRj8Ls",
  "key1": "4q2nG4LSZMNHRroBDAbWjRMUNbRxB9D9cPP9f1h1ZHjU15sqwRVRsu3fA694psKYGWYqQiL6J7qSkXjhgmGT47cV",
  "key2": "5LNeaWaN12WFSV4N7xLxxNaFiwJKdsjC32YPogDgRuwpFvZeeeH8X8eUh7WQfLFuKswQxveECU96cr9fwNwL4CFC",
  "key3": "5jvKHAFLuxXfPx5cG2rX1Rj4QsMMpryrYTrX4GFxLcZqboZyUABofmfhYCNEzbYHzzn9KeWUxBzZx3yxdMbB8HjR",
  "key4": "4cCnVtVzXVQr2MUzNsxNDQGpGWfRfMyTGUjHwhaZekwQbce3hnMQkahSML1eQmfMrAzEgLvmxR2ck6e9kTHUc9GQ",
  "key5": "354GSw4vG3LZxVU8t4sPm5EBEyjsuhwJAHLxn5PNXDKPaQ8FRYAqdnRVL23iCNsYK7n6nmNXix26g3R2iSHZpb7",
  "key6": "4Q57uL5gX7rSQz9B8srXcwTXtuG7FS4bQ17iBupmPkWWu8eo2skzWFtvtdjWUKTZr6Pj4p1xB5Nf9TrCyMC5Jqjx",
  "key7": "4KVpDQ5FFf84ZBb3TCwskMSK4i9St8mB4vHRwJ9pcBjCxFFWrvvAfmMbTau2wbx5Bh3Yc7N8HqmjGSAaYF1HovM6",
  "key8": "3EDBpCvKAtxLLcCE9yfsvUYuR2qR8qvAUpwAqUzBsaRixt1jY5vnWuSz8fgfyCvEGJ9YT7UcbqQpDMTPqvQa5bgk",
  "key9": "vP8fJtSmpBqyvuLx1dm71xLKUhDDt3yAjCSP4QQYD2EShP6hHuxxCQGjQdZRZ6LEZWNZMn1Wut5CbwFT5DCLuYr",
  "key10": "2NCySmtx5pPvvATwrn6rtXP5oeJhHPxasbTz3D6TKP1B2pnT1RixAThrADMZDD4Mpiri3BLW7Hp3avKnFRTrXBH2",
  "key11": "2pM1agwUf8qxKsUQFJXHCC5mSDPckuuwXcheyKuwDUcSF8DjjKjRXncqzUTU5GD5M3qqZUUCU2rSJhiPF7kagefr",
  "key12": "4rDozYK4PXJgPaT9x1HxZ8XUEu6tEwMvGutjrR6dw6gw5jbXzcFpot26mRe58DdQm5w9fhfjaAmLe1qe6PW4heKU",
  "key13": "3rzk6aagjmTmsfsoNFtfe8KVspn7j1QePM2wq5WKU4wVeTW5paFVwWAQmxTcrrCuPBDLrRu5cfFDkbyiFj6ANumV",
  "key14": "3n9kjS1XDaQFa4JCt8QzVgtAxTscTeqRAhhgoNgiCXeyfYieUak8iQ2a1jYtM77hWyXcJMRNwiLaSUSCmDLmu3LB",
  "key15": "4p77YnCC8BMNYuNg2Q4f9qTUpnnoXrRcaEbwhaw9S48TTCWQcwuouHYMMwZoewiWCWESfn1xd3yWr6dzJzRW4z33",
  "key16": "2LGPK3bNA4rJftnAZWpcvvHbwc2ioWVyonDSJPfrRoTAoSsomBUeySDGsnx2BjvG8wBSF4dEBWZy66YazXa3vXm1",
  "key17": "Eva7AAugBV2Ztgc2xd4L9TDhfthGezdL3LVpFozBjV95XMAx2fnydtzHftLUvPprFTWah8j2Ug29ButjuYda8ak",
  "key18": "3njQWSPDY7onaRMGd6qgLHFNi8GTeJ9HnqPqBPLA3KsLBuB7peTJMvQD8DretgjkXVGa28JiH6FTXhFytsHmSppy",
  "key19": "5qZvkJjoNaCSUiMB8Dxami2ZfBSmXU3iXzoWxQ2YxCm7LG21LAnTupSksjpwnXy8L35E5MakQuASi8cJxJmTtyYu",
  "key20": "EeDMMecemhJfD7ohQg4iyJGcYKXMQMTNSWHi6m8VmBT6LfsWERXnBoKAjbRayeeYQN6S8t9ryC8W84jExwHP53Z",
  "key21": "2XBvkbszHRnRoynTwfmwQPgrBEehGtmxLsVxqEeV1hNqbJEtYLqPqAhxiCpEuaMZQ4USfyXckd3SKEBY6FKVP5BD",
  "key22": "2EUMtCaK2Gchsh6CNETgFrakiEVdJLVm3cF729CAoJWxjWCTvNBqM5qmHD6m9d6SRvF7ickMe9izWmVkheFHVvEX",
  "key23": "53BqyPwxcP7KMgFqjndQQvcKEdZzYA8ocxxELtvjgRDsUWMX2585YkpSy2xWWc5o5zpv1omVootD7v5WzfR7thNx",
  "key24": "42hZqq6U2xYtu63fEkhEgf3WGEkGTeAby4DC7UiakpsCfQSH59Ks3JVtb7B7bZbRu3pM7WDuBc9iJfQbELmiRWdf",
  "key25": "3KqHpvu6A7zEVnUaLLwe3AigEqi29j43NTapCSLsWn5fM5n7cRMAEWBHBwk84mY6qjM5m4GytHVwF61ipi9dyZDg",
  "key26": "2uNgskwszkCFBkzr4rAGS2J2XpPRwLfqzXrRW18eFhe9SLouSr2Hwj2L55zzYjtREPUFbJrymianpALz3ViU68Sr",
  "key27": "2fdvMoKiv9bs8Ph7PuAovw9xC6cnk8GyXmcbo4UTLPqmnJHfxKjYfoFB1fvXdZookvGHK8HUwQNzUn2xu7BTXhDb",
  "key28": "5jd7DvpC53Kro9pr4AQPjsPSyk6fkhCixWJVfWygwb62je8EQKKi4jm6AHtGv7P9SZGSBoyLeQv7EXM9uCstmxT",
  "key29": "2r3Rtwvsw17R3xxDGXn4w5gqYfNSjeKsAU9kpYASdduKjAknHiCgcPSXVVZeVB11Y2povCF9rJAEoukR3FmUapcK",
  "key30": "5gZVcCtWLcHPbQtTyjcHyzmk4zYJQD3pcEJLenKoax4sSaovtbeHtsVWgc6f9u1cxcG7T3bNa24hm3LNGLP69v3R",
  "key31": "2RokG9BmzouT74nQhX6V5nZCS9b2jj4fiBurUfa9demZXzM57cBKrN8uj5BQy2qKsZmUwDmRpZbHAwUw3ZE4Ve6d",
  "key32": "4Neuyn1EubEKwZocKQ6MmrA4rfPYY8D2ZCzzVygJryfwwg5TD9RAR8Qewnu2bgxqLk2NvbBWjAR5ijRptoVrDLPy",
  "key33": "mtkFDCHx87UJmg647LXjevAk8rFXnsb4ouyveCBJhkXkv34nZd8bNUKcN2tcnMoSQEC3X3GvNptFo6gWcw2vxPQ",
  "key34": "4MihoCAAdip48kL4tj1kgDg2z5iKoqoPU9NygBi9NZefLbQ3jPZuQTv1zxfaJs389aZY1iJy4KtKumKZMEjMUarW",
  "key35": "2fmLhKBYxYfQiTW7VG8eBdbSPRSbWJU3KYjLykJKQpgi3tqmqdPWR8cDBWzMgeCNewsq2odNubr1uNLkCHzkDDQv",
  "key36": "58HjP7rXEfeJmnxXvoqUnDm28YMVFkGsmijkUkhqPtMH9RzDyJ4n2ZyTTTAeMVEUeMkvRxN6j4TqV1oF5zdHAGce",
  "key37": "4ySfS9wTRMuzd8QyeaVw7X8AqWRYBjya4KR8Qopsy5GLegJwzxu9gq9j7ZvjYhb2qd2XbaFg75KiZByciyMdT5LL",
  "key38": "3dSdub6DZWYbznArE5yKdJyBJKa3dGsEAkzhWL2Q7aaepE4DphdR1LswUg8i4brLxGscJGTpkgqdtCQ9K8eLPvqD",
  "key39": "27tndY3G39mPo21gAWz5R5NcmH59EaLvSgxy8rTEoCFCYfa9cn5ihNuTRdLWGKHQZSn6dD5exJVsX767Bp4pDLP7",
  "key40": "4xrXSETBqbpPuA4hBrpubg2XXcWKmB5CwJhixvzujYsVA4rgAYwRZRcGW9QbKaqKTWvbajfzaK3Gj4vWrRgBph5e",
  "key41": "53omT8d5qqVhP5ggYed4GSHbwYVrnZQp4V8faNdxP59zTvtfHFmPcfhG93J4r6VRdKTczMDctWEcSSmxE82UkabE",
  "key42": "3VdBxR6m5rnzprsjQvp3F335mbMs1cj7bHD1Bek51jtsswrXJDcSzDxUvPZKPc8qoDXCBu2q1TVtnKpBUy8UWGnC",
  "key43": "2LZGqeySytZJpLaLXwxhNx4an67NnBNjFi92d2jfKzuKrK9qE8zSuWDzrzxQQk9TKcyhQnFXzq7uD5FfbsTTtDg5",
  "key44": "TJHiMWyPFx2tRpMf2cv37PBsBBhPXWGw7v6rCVXUQr1vCnfaLnuRDYn2ippJzaGtPLW5hdKEnPXy9nbbJLnqGFa",
  "key45": "32Hh8Cd748Hk1NbqgVBhVhvFAmiozqJNjczqqBNP3o62yUzWVFhSoe4htqWQ6joWaWgdHExfUEjiH67eXj92KW27",
  "key46": "5WDFto42ceMDooTiJCxpbJ3F9mARLmQqbJn3j1aSt3znv3YHB2f6UixQVnQrVpzaGVUntdzjg79Qi6HQEtvag7tR",
  "key47": "5iSfdn2HGXDLd9QLi4muKMgEupHCLUXEeKWK64oAFhRj4PG7ohAefQktapYqGPdDAgChmxpFr7CvDdyvtqUMTM13"
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
