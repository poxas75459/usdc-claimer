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
    "Uv7sJiNXeCmhavT1JjLz96Rstni3j9av1BJCMEnaiEgmPB2xM8RNCyec8oBY6knvxp21GuK3ezkUZpDP4m8LbP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APXULRtZbD2tWy1jA4bxcgJXK2zsJnwfxbS3WoRdvkV8eYV5Vvvn9TNdhXWeTNGqccYrJnMGuJ6Eg4VNEFfP5s5",
  "key1": "43wbDsUcTCwB1cQ6jprCqqbemfZ3tvhumAgbrf1yovEB7uarHZLrvmW4vpyo8VG4K6mJFYZpNFkKkKyM1Vsmdtfx",
  "key2": "34rjxDzDVjMGAPK5jPbRF8Co3KawhMFkGtUDJUa4sozDwvhQCpZE2ETSyWn9bHTd4DHZfgp5YEiwmC2mdp2pTuZH",
  "key3": "3uTd4tJjrdSqrBVmNHXbA8ksp593CDqJ5jk5nLQMjBcHwCxLqwsr3RceTenRTZxdEi19w38R3J8e5kt624TxzoZP",
  "key4": "5Tz1rN6auTLQgMESaZYuYtaRBpmJBcFukKWfX6wZR2TiAHGkj3MQaVEppobkGxEBbcRdDk1DH7EZHEPxFS8yQLQg",
  "key5": "uBjgSXtZwMd6dFRHvMmvnVyiP6PXTjHtTaGRv3kSoWHUWwWCKuM8VPQyMkXwv36Fvz6b1iWBeXN8Abxr3iS8rTJ",
  "key6": "3GroanQbGtibGjEnFiP3Fdt7wd9RWYqFHzYgYk5i2XMGJnG2Tt6bJSdyoQCtC7vJgaqc86NqppisQfeCtRMhBbnD",
  "key7": "5HimqnXvNAqS4kgkWU8SvsrHfg6VyzGDm8j9g3zDVyAiHEHXi1P6Ekc3YZHFeCdD3XvVfdEZFEgosXUpDmSMidm5",
  "key8": "2Xd8S4ghQPLuyXhUnURbnEuuS7DTJeNhoWQR3kiDMKnpeS2RbZwrwFdbFr8cwPS4MNErKzyMuEvU8e8CuCSWwCoJ",
  "key9": "deZK3aqtPRzj8BAa8UHFeCcy9MWV9EGq6Jzbj49W4bBrWA8TQJffLoQqVrmp8TygNrPnf6tyhnPtKCjZqAB4vGi",
  "key10": "5KVTf47pfPPpADsTzy248wJB8TGJRm5HatXcoHcgFdhVSLSiWJbf6272Ez2L8cgtQAMdJ4dpCCQSdSdS26nBrbX3",
  "key11": "25CjT3C3QYy7dSwe7DpbEwxj8zyUYyRdFQSdcDvNWi8wgrvEp5sactH9wh7zrVh6fJPv2yyZL2VMo94mmfwe1jaZ",
  "key12": "4WiWDnmmYJNLLoSRQzhxocvddoCyQyFwiDatePtCBztcP617NZrgS5Y5EZjphWfETfPAEQHPLDUi9yCjywWbwXR1",
  "key13": "3Q6HfK534oWevgbRkChrryHBz1vDzi2hjBUedymfYdLiUrah82YtAWeWo1HVhAyzptPLMNe9fd3Z5rt9pfnH3aNC",
  "key14": "CNSuUkahRfe2FnnRHfNSwBPzPx7znc2Nm78DYnCJqhVXPhqn2YFfHtNPcCp9ZwdtW8g2CgHA2rrpqGfwtcf8JG9",
  "key15": "4eJFvKcLBnZ2FqbB189uysHguXchnRgyRkJrhYcCkaV5grSkAYz57zEmVchQkTgtYVhmBC2LbtJLdRfVZMURtPrV",
  "key16": "5J1GsH1QYpHkBywKEoaMghuJYHXpP4EnfNbKrrAZLUxespkM9fyEVtvuCtrJtqnnnWVboSXymz8VEbXW6uZC3PrN",
  "key17": "48es4YAeVGJPBbBHSZGzJzzcrAmRhAY77WBeCNsFvEEttX8y2mb3hE9TtmgzzmYWMhF2u11uc8ztBQLsEmJJ6bhN",
  "key18": "4dCV1tAWKXE1EMNfEVmdLkkgwpFCXXT9Z6tK3eDRyM5NSjvMZ46c5Q3rBvHuY69XJ2gum7CeFvTMBEN12KHKutQ",
  "key19": "2hk2dtBQkJxuYiSHusktYJAcNZobCVbiiRu1E5DyWYHhyatHSuzx1SE7hvoX7dD54ev2fZDSjDmYsK879GbwDWe",
  "key20": "HVfmKirbz4KnRM3vLXqxdWkMYr2CGf3vr6KMJ6rqwVwhcj9fsvtTioBra1FMcgrNCxpMwcQTzGKNKWsDh8ZX8Ny",
  "key21": "5M8m38vhF1hnVey7nNxapFkJ4kckGGoRJ5nHoYyRp1UExoUmFZnAEyqdiPRWVJiXUWh1ywBZBZ2k3fFDmxXvJXYa",
  "key22": "r7xSspnJiTkJeNPecmUm4KL3Wdy4Boa1ykCRLpisKxMcajny2miBLtAjEJW3ixLTStjatas8GPAQrFPLqV87zJe",
  "key23": "5q2Sb4g2tGturbWtRXbf7LgDwt2K26JJ99Adqj1D8LDxuZ55geGUpvBMciFkRHCNLaTpdS2XpivzRFzrXLFUTiVx",
  "key24": "3bsdwbSXBtYeyhyqX57WhyksYoLYWdtLNUfTxU64qbtZQWyAqQ8Vjmo8ic9XyQBnW9ZMNR6gzPz1KHvritnxv71s",
  "key25": "2KHrk5wAEhf3NTLpHoXQyoyLnZwse2aAfH2DzRwAaTVgShyYvSuurH4gm5rFvNCoMBzQfvE4U69qsGS5mxg4eSUz",
  "key26": "53XPh5tEtwqEh4Lata5pTUi4Mu8kiKef736GPVkkLA3cFRrdQqgt571ye2gkXapPHxGedyqgtqtiLLSAngaLyqNg",
  "key27": "3WW7fX7AoBCRQydpfhLz3uWHV7RyeW4nLdFwY8tr6beZNz8rEH8tnCPNAd4CeTYVa3WxVgPdPEVcF7HWZD77P4C7",
  "key28": "3QkiTuiz2xNARNWKf6e6DTwmDcV5KxabviKak72cJ3ZFiiwW9ZNw5buiF6BdjeKEXXp1Efec1fSwh8fdACo9CSKo",
  "key29": "3DHK6Lb2Z1FDr2fmRRqdWL74tEUfpNEvsWWt6QdvzFyoPQEBU46tkZD27Vpw1r43nEuYigSBeQCEZ6JDtS8i1rNN",
  "key30": "3LVBsNm9pjBGV23Fa1JQdSiXa4xQypD4j3Qd5sD8gojQUe63jy3DiGkiGgaDuh6M5wABuT2BWuHNxU1UzRHxuwRX",
  "key31": "2xovVcyRPTpYwQpXFuNz65KdyD9mdQprNPYw5mpr4nqrM1bbGNQoQ3dxMsCANJNp6uYrY9GT3f7b3tsLLo7J42q8",
  "key32": "3EimrxabU5eyx4qMr1JwNths54tq3YwnSYSHnELSW5VAf4DrySj6zdsC4GYypScmsV1v4XBkh1B2Di3mYdH1LktE",
  "key33": "4sGbcBdDKgTxiLxABN53Z5GUedU8Z2Mya1uoSSchLjHg66LGheuxrGrnPboBL9ZhvqwNrQA7thPy7VHMLZc6eN3j",
  "key34": "5LzCdAY54y23RzXngMyTqdnyVtCEXpcosczNbB39baP53avVdVKQe9EaJcAd72RPm5huNDmSusTkbh38Sr97pmYn",
  "key35": "59bUNmCGrsShvsAfwZiUCCY1k23G8oPK9Wywx8cc9sZEhiSw6PW6Rcd2Bee2PHf9vL7h7PpB1fFA3RNdXFbxmdFc",
  "key36": "3r866KBnYAU75nYzLQY4WfadiD4r6kfNzr9T4ArY3Vz6hN39NKLmBo9WhkFyMaDMC5xcWNg2SvRj4CCA251zn8Z6",
  "key37": "5vA9ccuPwYnswTMQoVk4x5Er7YMXGZ2EVrDNd7GS1r14DF2cCFaERAPEqyoUzKnKkT6jJjR3AQFbbdvzLf1B6tJ7",
  "key38": "wURiLmvcYYa31dhRVh1Gzakf2gmUMmYmqirEv5TFDcfpmyMtmCF8bKjwCvraAP6RSA5GwH9roYXfYWhFDCGeCYs",
  "key39": "33Xz58BiPnvT3zEMBwfGdyXVPQfrSdfh1gEPo4qe4qiV6MHmpdAE2HmuQ7JBKAdGJ5uXUiZXn87QDkt2E8QfPXrc",
  "key40": "465siC4Yru82kP3smjhyNXEC3t3BGFsbHkW5eZRVrmmjrzdPHTjm1AVwXjiUG3SgsLzxRXTqbFamij8JRFET2sLc",
  "key41": "4zxuWNPmLJLTEuUNRgfvYZSDgtmD495r9itAAdbHNHGQEdHH5cqqhMU94AyhMwobz78hTP12P9yf36fWjuzyRE8e",
  "key42": "4GZnz7CMMpLJ5F18V8TwJRWZgoi2PhXKEgvEYmR8hohTNXTGcUqAgDBVVJg77njyPrgtMSXZ87VoJKNgbgrw3KwU",
  "key43": "DoPKBHDGSkW8P8bgjTbpLTWYxqF7kJ6BdqUb3dErsirmsxWpDFNmmBtSQ6oHbJe5ddMPfz7wnDpFr8p7Fg6BFJJ",
  "key44": "5UPvPrkuKSzgTf9DEBQbaVrFSXCwQ5PhbVRje3cQNcSwJVEcZe9NQoBCYjJBaNTXSLRYt46nZXBmsENoKfTBipM1",
  "key45": "4zXw29rjdw4dzm35Z49XSthsxA75Q1zfvtn7oZaeMHdrin14yxub9EL76Nte87TsHB8j51qgEau6nNweR7uvaGTP",
  "key46": "364j7n5U7N519jX76wN2SyiG7zcC4Q98G3K9zqBk21qEoVkuMD6uwQg6s5y3kHNmdSSczHhGwBDRdT21Y9sVSHhA",
  "key47": "5VEDD3pwSZYLhvRVUf23oCBizd4pqUHoYNyAMjw5PmraihqD7yE6qQ47jzqd6jP9NZGmuCUPgLBovY18dB34HXA",
  "key48": "57pnYpaCNZhH8uZc6SPNcqfEUd3hZpvYYXjxmahWZWa65aVGDDtJAZdiCt64fiPKokPHr6k9gz8iyjdjyHT7D9eS"
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
