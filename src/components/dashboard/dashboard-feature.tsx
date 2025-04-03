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
    "2DguNNpmWoHVfdXNWd9aBQ8xjV8m557ea4ZTc3G4ZZwHMxAvxFDBYCgQuQhnSmMNkXdLU9xg6T1sjgNVPuzcTqMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tC5B5Zx9qLgkYLK4i6cd1k8Gm7hg8sRShCJQMhfocsqokkypAFrANLQeMsSwy27BXAqpeQqL1KsB6eshQUifZju",
  "key1": "mYvETEcrhU3Ck3pps4jcnovkPHPNuZAHjo7XoAR2SBXWCfhYufiRXUbMxyati1oDikvhT8v6aBQv5RXFF6MxTHK",
  "key2": "22JUva1QtpnFTKr7s3punHXrB3SDfxMVbAvMKxMz6y6RG1fD7cBcTzMVCa1HBxcuzHwYvRfLUeoJcS5oTE4v8qus",
  "key3": "32mGjVgDq6JAZgm7Sm9VoWmPTDWqXcHncSPDGwtcakyBDJqaJVjYqz3hpFj6TgTBXbbm7gWwRDPi87eZRL8V1Lnw",
  "key4": "jQoaq8JffdSrkqP9amCqmq8v53JSvkEz1reyLvARydbY8GXAUNxzqZYSXmQK6gFfW2QkRF6bGdGfFWdDshVC279",
  "key5": "2HDXMy74TwzrPvgN7oMzA6UmUNBirs5pFV3NJU5C38ALEF1Avrf19RaVmHqWa1EBPu9fGSSam6TQC7UtwSM1tTDc",
  "key6": "3FEn5qm3ziVKJTNCeHYveCKS6CM4KLbBKrH5stAufFRmGWkRCdgyp39pTctLFJn9WuLyXoQWWT5by5HJnz2Krm6h",
  "key7": "qancq6Jo4kYavnwsVirJojWu8pnXt6izTuhVccSLbHfPgskjrTGzv5rE6qGhT1zzuTtKmgRpMmngVga4P9bF6Tq",
  "key8": "3jeWGtkvXKfmcrP4MtroS3CxcCThGhS7pXzHiQoHTnvbWXnFwRDjh1b6b98GDmS1JjnzZxAxfo3XrZT9xJ6MrXsr",
  "key9": "8FEfDeWRLJDeNxux5RyGZFYAseAkBfy2BYLAtmoJuHQAPqE2JXK5X7RSDGnL5q5pSDLKmeLG7VDQAfNJjKTpVnT",
  "key10": "3rgpfevxz3qHqa7XouED3xx2NNeVAogZE3Vx5sWaidMLRXkgc7mpYKz94x2VwVdNnVsr6WBXaSaY7xDsgBwnGjFn",
  "key11": "3V5fPHshBZi45vDegPgGnC4CiAPNbp13je7upv9r4yMsaAgiSTWp6YfTAauj4ijPcUs7uYBPKnTuADbdU4rBzgbs",
  "key12": "5UBrfxpit7Yv6TrDvCHovTwREXDbGhWWHWfTfLMyWhrrBvyAKYDjVBxjjeC82JEuTTovSCY2kZAmWa5zUG35Zhdh",
  "key13": "3xkV4dRsGVkcmAEyARWaEEkhSv1jNgQcBj3cqCAzhkXu1dZrw47cacMugwqgzhjqiYY5C4ZnE6wc8kfn34M3sjur",
  "key14": "3UdRpdgcPPcyXVnUA9zjUWHjvSGSiT4YXLpjHA49YxiP5uxgoC3PxAuF1RYzKnsNvDmnXCsY68S9c6hkAivwh2bd",
  "key15": "4ipgqymL3uGoiMM8zc5XZiyFYvZs5MpciWT38i4FyyxvqmMibotWzrxm3PHxEhzFoR2AAv6G3ggL9A2JYKBoNJso",
  "key16": "g4qLoybh2Ma45vXMi3xkeYKJPyLJjLMziQqgWAA3AF9vK6eg8AvWvXgYbLNkiYa1CrcvWvhRh7ogXcoea4Zj8Vb",
  "key17": "29xZe7ZabFR9ovKgv7DHaNoqLJ1pWKazW8hGtxajtvmeQ7r6dvpXz8E4rKwYSvHLrAeYFXPkdccaGK5NCAJYQM5L",
  "key18": "5EnqrFQpFH4MH68Nug74HxxC26XpVb4BQTTnwwAtpe5EPwYKkiejyfFRfqyULHcrm2vQxZZAbNctnfeqcqBMtRi2",
  "key19": "3gK5VJ955vGWNiyj2oEQiwaGnM3P3Uu9i7ARzw4iPqZidcHsoMcuDDBKb5dcmwnmaUt6zbg3GpKpQ4V1rvVmWAZL",
  "key20": "3yfgPAJkNu1Cwb8sVz7jdNDyeXPcVLcsEVam2xfPcxxctjUpzR3j5AcRSA3fzntuTJ7bsgrNNwSEkDMPWDhHbdAZ",
  "key21": "5qRaDTUiZ1XRzhUrhCFRmHFG2qXwRPgCsxGKZxyP48cWjxDbGGntNzRfGZU5wEpXtczPTu5CDSB3J2bye6N528mu",
  "key22": "4Ej5gwyRFaJxnCfW3ipB8Trq2Nr92cy92A9PDgH2uJWoN94X76sQKZqs84r443gfbUWRzceCy3cNRdnNRVgJabf1",
  "key23": "5tyX2XFVWFRQ3NXNEurJ1jYFuAmNcrFWUTpHtZjXKj5NbYhwxaZpT4XsdEcRKPfRTh9BkRti8hjJ581V2VWaNZtA",
  "key24": "67QHYjbRm1bSxncWtaEm5L7etZ1sAM5uMCy4ufWaMAFTomc2Y82Y5MNndUyTQb63EwsqwDCRHey4br46r7SjkJy3",
  "key25": "4TufUgahQ9RxVfRaBZTG6wfCpyht8Dqi9Q4M4e3NnGU1TU2uNuwEWN8MuiWQFAwBgXMhTywn4PkGm2yuq8ZVF1Vx",
  "key26": "2ARkYfqCCWvZobtfCppc35TTWGoq6EkkRu1gN3ikjKhA5LkD3J3wW7zY4M8m2WbvPfX3k5SmuFTrHLazS8WjmEZb",
  "key27": "2Bhqb2JG5bNTz7Hp8JZPNF2nr7zhvk3ePhU4ZcxFeV8Z8R6DDqh7dquYowF9g5GoEypVarPzC6ypnekaYfjDmmsb",
  "key28": "xSSa2cj1pxsHuNgSbRiUTk4r3JBAi7c1HRG2zRZiVNARk6DsKh876DTrhZ81XQBc47KxdpHUEqh3XpzWT9iTnq9",
  "key29": "VEfeQY3QDvdnDb6MQ45ZjhPxPujvEP2HsFdZNPHQM4YayeCjo7xQ2cggUr7aWHsEaUYSiEy3mETvFmN9g13kWB3",
  "key30": "5qqJuQ6pADDAMcTCYSqXeceogMtxBYhTuLGRovggQ8KGMNg1cNWB13BhfqN4dphcjCKTw73VdRd2mZoJ5LvM1t1o",
  "key31": "2uobpiRNepSvDR6wG8VGiP1VMjN5uG2nB5XrNkd4PzKZRU2f7vwKJxXD9nAkNp2okvWVUomZnJ3pdMhg79jgh2QM",
  "key32": "4SX1Z2NbTQYjKf4GDEcga8aoyMUwZHXBDJnd6afnEaArZniAktXYkXhuMov4x3ZcdKSeUitUAic3NP9hMd9trCeL",
  "key33": "4fcoEB23S7sZNrnTo9Q6RT69sJCk51SiNcSyFDs8jf9Z4pE21cLBNFgwELHtTWXQhmzy4ZsTBcXMjPTdfbq16S5g",
  "key34": "5cmzr53FL4SqzBLQnuriZDCtuLtm83et5X5mh4YvKvqEuTffAY89Z8ghf611gk6dyN4DoBGPKnYrvFMpanQMfdnm",
  "key35": "5SYGoBTgxVLT3Tq4e32XrNxAUJyjDkvewutREkMm6dAZyZv2JKKxQhyinGD5UoHb1VWW2tay97qV1gW149uyeU8c",
  "key36": "5gdvAJCZZu8H1Jpo8DyXdYLA6VZY1XWB9nV3ErzRR7VbYq64T4GVhWK8nFNck281guwGEAZYfrrJShQfNDK3iHdh",
  "key37": "2oGnaQmbLwjwKCcJgqYroeU8U9QwjCFhsQ1SZNCceCiCHimwG9HQZ7jsXrdUXXDLVzd9nvamvzvy9ydPaMtkcsN",
  "key38": "2gTPJo2KaDxnBUM6ikb3ZGqkDidtF9qW8mHV4nFLdswCEKY7BX1mtVTnou4xZYfpFg3vBZATDiqd2Y5efJCVMYag",
  "key39": "2AJstW7kaPhNahaZR7vRQgX7meF5BCNq1GnguBEYhznxqw415nRDKZfjR3FmmyyA2R3WeJYNa15gdribkCD9E1rA",
  "key40": "2ph9bEFqbAYw5Wyc1kycAaw6SUriAjrSAzts2SV7eFbuhVdhRNJhrxWZigB5wZhKHbV4g6JhdN3U8SzycxEnjFyw",
  "key41": "MDGhQhgZBSrq1GT79n1vZtpbFiRk6YME4iqVQdDMLCiwCERPmRmbCMTpmHkaj3zR3sBF16mB4G67LqVGNgNkJwD",
  "key42": "LpJ6DiY4NLg2fZVG1MiwRvAVYuU6D1DZnZWcggeqy6eEueMytjHYd3B8HfySrXKjaPkQdXGpyiSfy1KXUfNcDfs",
  "key43": "4BXzoqDcR4b87Wt34aRToZiLadTi1CUVsDkJB9FTo57mkB95u8NwLTEtudRN6WPjVMzuvtSaK4YNTCyCKFdxkjm3",
  "key44": "3zDq71MLuummyddyGAdPgAKmCnXiRmEkUwtRTQqBZMnzNeaxhVJ4d7Y2HPVaBvZ1tNZmVVwU4WbQZwxg6DY7LcDj",
  "key45": "BL2AnX3osDP8iPjw4RbT4AVJw7wTGTHSumgMEqbGmJvLPAuBSbh6KZjWX7Fzj3cE1FKRrSR64WaEXWyqabXZ8EM",
  "key46": "2E9PC1jeZkuVi7TjHqrkVdkf1FQF9tTH49SaECtApDqdZKZ6jjL2rz5PZjKDtG9LUW3KEX6CjS8v57CG5s1TRow1"
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
