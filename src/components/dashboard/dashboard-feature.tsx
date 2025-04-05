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
    "4FkbBjJyg9xS4FXNaJM5F1RuaBh8jBZf2XseUcHQneCQEomt4QHpBmFz1f7RmHVzSJ13tmiP4KMHEQCG69GaM44d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHnaRQYSNwTnmUSct7d9juBP13dBQfPnqJwq16R2xDiWG8Prvh65JZLewgWUFz3TE74rFDpAbMmKXGdtiF842Gf",
  "key1": "yHRmicYc5zUTqHWRWmXB9smvGYJZAg1G8QkMDWsyAuef356rzEXj8dPE2SajPvFTpxpjJdSgk54TpuLMGSPVK77",
  "key2": "3Y6rJ5EiE6HtJ5Xo22bEXTucirceU9vGjuebj97HWKjhzQFH5iiM9GRXwyp3YrtQ35rvJ4kWUXaDFP9wZYMF3xDZ",
  "key3": "31RUubQ3VW2oNnjkzG9yf1w7T1NMcZnjRnnwF1PrULhz17TBHTQqYAUw1XNfjD6Cb7rXdz93ucCd2Z1iDhfwi8ib",
  "key4": "2ZbFK9FJUDuaxsVaoMoiFCWkgc4yqMz9hboPaEXiESVEdXzCGan5rjc6jYCoGUUZrqEAQr3iFLFQXxXBRWKLPByS",
  "key5": "4BMrCqzRp6dDcsGJDguSTCGqdZjSp1wMNU128X98fehW9gcdbiPuHdvKo5Jx6anCo9Kg8oYbZ2jmZ4EkCo5iSC1t",
  "key6": "2zVBMdhMi47CkXamknBcUfL59bPfU3cm6ogfJSPn4ikFrgN9DuRXmNwDsrW8LB69TCkaBBt58rhN1fUktLgBwtMh",
  "key7": "5dV83qMwzAT86yRkKq2ZVDTJummQvhTnkKq51BsdPZd6DfpEbrcUUZAZzZLZY1sYrXEhy3yjhAsUttK44sZsp5Zt",
  "key8": "2NtUxGYaQaQpubrWBfNHZHfvw3rHTizGcTd5Ngscm8brgMC2CyUJd9eKw8kuE3tYUjzGDMCNAByxBimGsnuCVZDD",
  "key9": "52bannEs8Acitn7gQGhCAmLNhevm2eW7mcQyDwNspDUNdB6E4Pmv4Rj7TacEmPBzrGBnyzDvzEmWNdXLVsfNUmik",
  "key10": "3Q25ikPHGXGmPe4ZknYVGtCkjHLhVWAo7EvYM3YgvvgviXAJqTMRaVvxsCK6KwMhAie5Nij9aU5bzbk8xV5coj63",
  "key11": "45PyDiaYhC76WHgrtv3wteXYUYSujhnpoFQtQUyd1nTf9dP5iuZ1mbPzh64x1zrhA2MgtQE3kvyo431VtAafQ44Q",
  "key12": "3zQvWzsW2UVYeYqXYpKQHnZCiUdDi1Gqjp4auG3koU22PmXCD97ubQwNcnmHr3dKuKJYY7hFeJqnJURLioHAMovV",
  "key13": "9YFZvnF5RL4LPKaiZYhid5Thjru9JrRQ2Lm9KXJt5LKAc1mS1t1YoL6dm1e74GHqU2yWARfMAgjvjLD7u5EVL2F",
  "key14": "237CoC9wp7QKaWtWDJMaxCWwKJh9RzEDrHMrTwsSoEwbXZPEjc77QVG93uoB6eAVGyY4YAjNX8vmL2pBPHoTX7gx",
  "key15": "3tchhXju55d3cMvppTP1w66Ey6dP9VhiRTUBfT8UUr2Qf6ResSoVPD7iufNZQdffU4WSY59xQiHKabU72NA1jSfL",
  "key16": "3ni7ikHnKHS8Yf95XkPryg23icoUFvxAeLx856d9ZuRouDnJVdFqQtZ5eLcL6X1AAfNxGpqn4BatAmFoRJ6SNJet",
  "key17": "5a4WD1qJuiPrrPXGyU1aoTnib5xwMMb4oddR4wVNfEoViLtakkbMUME4MqU33xA8gw6XAdrkUbV6Bzby47PzqN8A",
  "key18": "Xt7ZDeHLfJSz3uVpukYRUC2o7hvyeuSJzMSB6LSShnHBhoqcVQtDJT5Sf6Upex4ZYr2DKFHEaG6uReQ5NkQ6Cpi",
  "key19": "zLFfFKF7xCBRTopLUPnvpFaWoJ5pdw8TXujmNQDGE3fBgPjpN7GJHqkhRY7eQTDKvbQAYwnsuce3xjiuPgAfWPM",
  "key20": "25JxiorGQ7v2M9MjNQmCTmwJFNdjzx8K1R3xaJ1LXYBSTWi3b9zgo1AwENe3JKpTv36yLq4T8gxGhVceeTgQdu79",
  "key21": "Y3EmkHwKUVFoA2PdVw7mW3nirwR3W1pD8Pa1Dgy5NLqyZPHGYSwBs58fiDE7v8LR2Max3V2A4ChdpvF3dduQMSZ",
  "key22": "4E9rQPYV4X4N95c3StxciKejdhNzh1gVWGXqdzuJeoZ4ivEKmbi5Fmwu7bMGBJVWVaK1JjqtNHSYmmFW3DQmb7Bb",
  "key23": "9mxtFMF86MoZ6sAiwC1k2G1SHheK57KNAfP7DHE3htYfdVdHZ9PJkmNSPCyP9MgnuTfNdaUHxBBC4s72HMps2DL",
  "key24": "3HxiWtF3DiE4B34KWy5JRRTtFxGTk2Ma85vfVzZanBgE2CEdNxxf876iJgX2RXXdVLGddeo9Un9SSxxqgPjmrcL6",
  "key25": "42G74R6sHK3G31rSRQwQ34iwvXH4ZoRdRTwF7KbMfsBM5xe1QrqLEouaGY49KB652SDo9xZy6F1f4UbVeUxo11hK",
  "key26": "5CdHWggYNeKVaAw7QV5DEKbUTN73kvxJCg2iKogTujZfZ2GsxnZ26bswbuXZ6XMk95HksDhLcc1pS17DXQEmGXxs",
  "key27": "LpwBcaBM1qxnEh2hCLu8eNEdYENUDeJpBUkZrmC9tzx9ezDZ5i9iWbffuvK1CL3RpTz7a7DGcDRyMKJt8icGHBQ",
  "key28": "HCS2jZZoBf9zJQXhTXoFAZVPPD8SgARuctJUy27hesa6dhrFmC3Fi1KqxQtj7DZBJN9ttL4SEm2zt7UJsC9ygmc",
  "key29": "2ndAHYLW6pkLJXXdBEbddoYzPBt3HiqTLenKrdevn1ZW5x62FiHhs2MS2MCn2X1wLwa9D6KLvhVSAsjWKsfGozqy",
  "key30": "3WjGDav62fWq8ziGhKGy6GBcM1fC2LTi3K4rCro3MD4XQXaguUhTU2vT1DZgVPBfQb2Hi1M79NSVK79XNeuyTqz3",
  "key31": "EqY3W4br9bijQErGqp8VNyTMwZc5xawqiib4D8TrxsNTy7JaTdfCmkzzJYXTE7Ud5TA3qE6X6h7sXY4gC8ijUr8",
  "key32": "2y2JAyuf26MrWD9s6BVRJUKpQ5h63KnkC2mEHoEKcLeT3sLuuCdwcScEunjvHZxVENqZXxsbdEt29HLr161YCm9y",
  "key33": "2XfRRPaByBEg46J9g3XjdaCjaQJHGBxfZm9hRNs83QVDPmzGpHsi7VMAnwdT7CRcL4ZiRXgarBPvMP5PFP9NRQyi",
  "key34": "5Yb5sv6BsLM3Jy55kiEzUjxr4zxLGSZ7mvzQgfw4VaDQB8BfwtUfc5ANDcZMTLsPRtRnwznPGDZbfGydckn7ahmY",
  "key35": "qNNpb2nH3zVKas93UhVK7yg42L4nE9yQ9zwKFdGPiVAv6V3gZi4UknVjnPNJ57gk9hRx9cDnLZbPoRf1fd9TFv3",
  "key36": "53S2QhGTDF44AK6qC8xYBdBtkjpT1LZGdcWhvMa8yLHo8xidp5UyY5AxxCuRDYwUubcWQiiPsJtVSkLdbDjn7mZy",
  "key37": "27iqz2gGEnp6X61XAAvAnSBavSc913xgHfdnQAKVExQchDAG9et8gnqahdhcYMFUdUcAmxPou9JMjGYz1BeWLj4D",
  "key38": "2xyE6Tp1r2SyyzY3dKwJqUo2mhv9B9xsF3pkN8DK8tnQsWRpzQVXh6xBKbq8bkiKECgVXWNCr3qHd9TLrLoMyYFr",
  "key39": "2GrGG1R69AstDzFwPcvkC57GQei4cewNpwktgSuBniPbZPXaEbsgjpi6A2MYrsomt3VW3uagQTWrpQ9Zc8cKQhPE",
  "key40": "3aTNaRUsccbTkD2ekKfASNW7o1jYYUs1giwzGW13RRwECgcmj2qG2sHqjoVESz3vBqZ8z8BotbVdCKbFtQKdhaW8",
  "key41": "4rcca12qZXybCUHaMWoQTB6YABonoYZ9LutNbPQxcs9rzM9H67JQL8B4SAgLaVntbW4WemCApoxoLEX6yVK2CZRy",
  "key42": "41XbEXay91NaWd8S85DTpDLNqgs7SeZ8dDoPWsy472uqEszhRZFhhMM9b8BL9TK7iWy7d8BfaW5EHLTspnPDv7gF",
  "key43": "3QV25kJU7aQEXY2VCimywUNL6htC3CxkEoHiQHcmiPoXPE3tDb4ha1qC6ABWg3JvVGbZEFbaMiYq2Cr7YUpRr7n7",
  "key44": "37mYukePUtFiJVzd5MiSCWESU2dehZKX7RP11sh3pRY6UbYGGAtVdYszwia2KTMRaQKmJ95oAswzx4AXSGMPBajg",
  "key45": "5XTq8rtBCq5kD34dEn3rzG5Dfaju1qZUHMZ7XZrfmK3BXz3r3umT1kkxeE8XRE7k9enYoSxRL1Hi16ifnoJz4F7U",
  "key46": "LJ2nhyQLQ1Fr8HkJxMVdxxXHpsVhpoxPxmXFZjcQAEwJ5vzHrhqaFK2uWAyvhqjARxr4JcQoBstBLdVbmPkWq5X",
  "key47": "2sRhdTtB7C3Lmghd9tyZ8UkghXjnriJWoF1iJAjTJsCiV9pUgPw4V4ZnQqcW3kKedqmPx3ozfDCF8z3xtk6vfnkK",
  "key48": "GCGGDHZ3K3AjSAaDikkwPrZsYV9NdhPBTXyzepJXVp3Gdtb5wcwTejVn9qBh6tL87FbXKgW8EifVscsm2HT4KAB",
  "key49": "5YiKFSzWbobtAU5oTUub9MWeAmwusHDLoot8GodaFNrfwrRGgUcMKuxKEyFLq1WMpKzL6NB8EX3ifmwfL32hL58F"
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
