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
    "3uzbWpUEVd2jp2khsGzGwzRPgvXCoG4tEAdVEmGkL8ApnPPQVVCLpsKRZq57aiwbRWSM4i5HCKCe29dkG9cKc95m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqBcRVsraA6cRXm4jVw5hTEuZDrF6Ch2nUEnXhyChCH8QxERDyT2iZsK8CXqywG1Py5Hm46hDXR8vUhyJrdiotR",
  "key1": "5f3ikP2mEkZ3hTnquDsAmH2yKoay4XpJUMZNEuZ29CKCUVnATXxSvxSTPHMHTbaGvdtxaQXq7GzG1bpRcApY5wNK",
  "key2": "4tz7GvokFMP4P1svzVwFJpDBcpaihtKoU2z53Wy1EJoa9DUEoKYMecTFd9TBYsGDe8cNsuhj6ztzLaNpPyr43E2G",
  "key3": "3wErfB6FgLsSdfU4PDiWEnYxbEVyvceiaMQiVauqAdobnBWKUyq5oVoVkqvtDkJTM1TRJfgodp76gJdteFdXdx5v",
  "key4": "52a9CmdZRNnRzWpyCy88Y8hHRQ59REcoCkVbSXWjeDDpShbghdtcwgLTuMs2Cizz2ySMGNvsLyYStsK3f6C92r1v",
  "key5": "3btMyREQiJPgdH4ghBjdMS3eLxsRRKpKDBMKmUwcGT4vbtsjN2jNcRL7eL5aMat645J26WKwNPzm5sLiaxrdgS84",
  "key6": "349ajmNJdmnau2ccs3kKKuTh48spu7BDuiCbtsXU4iPXUAzMHLNRwL5wFC4UsaxxioRs4An7jm8SorQFoagEXudY",
  "key7": "2dLFshwu6Y3csykAokd5jpbVKBTreB6sMXii96QF3PrHDxjm4Hn4C2czZPFdGy2YtDf9GMo14sEuaPo1bJNrKbA5",
  "key8": "4gnbfi8So2iTyNH3BsPUrX1GPC3CpphQPQzyC6nVeCbdzGCc4ev244kDrh7YViHtJXH9fAruiwGBUHujykNJxXuw",
  "key9": "ynLqdm88WiunPr633h46rvsj5R8QZGoGUUAF15GuQVrQ7LpSBdyP8vcn3gyfYHnLXJf5YwRmstBYR6uFMcw5Cyw",
  "key10": "D437Tt9SWdqkUoHxo2fht3A2iPLDGyNDAEdKy53BHMvW1Xj1oWCkrVU9eshUnC4ETqy6Vyph1wp72kY8cx3qqJH",
  "key11": "2fg9Q31mNf86Uw9krJHhpJDQT97GSZMRKTprynwLtVZpJKXbfLAqu1n4bjcZ851WZtYBPRj3DLa1memkYCwCF1sA",
  "key12": "4CuoNxoZ182JzMPRpD9So2tUYFD4L5bPDgupT7QQ8izwtkY3Qj2udNZ51PNvbmXPctMhQrR9xgLYu2EeGQ4jXpPX",
  "key13": "2xeMSyB17sHh2bAC8kFYhEJMSKtq2RSzChqqfhptwAt7uP4ERBt1KQdKvN8dGRxh9RZoFHoQxXkhftC92Lp5336",
  "key14": "39nAophQCpDL4mnNY2X5CWxe97Gvj1J7Qaq8J1cqLaD96NLUadxMu7eKJBUksSubUJShhhtrb8ZeTh1x6z3PG8Xr",
  "key15": "3ndr3AApnhH5TgLs39cjFB5okxcA3omQonyPRk8cwoGziSpVsUYmLfsYeZCxC3758jwYDwBeYi683yJ44cWedZSh",
  "key16": "4meZQJgNjKJzmHvrhM1gBwZr84b4G7D7oDH97V3uNghHd1NL18Q995jf2GiYHxLCCbkBfGxY2LnrhhQaCyYmyAmL",
  "key17": "4wYTaAUrYCkTU1Hny6a69Gh2EimKutYaKwB3n27Ur4jtJxYYFT1AJinmsSFuAquQ7nfQgnDYjGAF4xvLYZS25oMt",
  "key18": "5XvJWKybeuTyxEsEDqihH6V4GwAFMJwT9GSZ5BUT6kEXbvKU1a92C58LXYneJ6SAiCyaWnqHEUidajc4vTSgR1jR",
  "key19": "4FE2c1YE9kKVxHwFw2MdT3yjCDfFfx1WP1YtYeaL2MYmGownr14PC2hY6mokrmzpBenAaa2vA8c5RRg8VbgFxFCx",
  "key20": "33AnzBXUdBnzA5U4it7isGC24XimdfNeUarFvX8Ab8fy6sgNsEDYhcY41Zcw4LuDgH1bAeqgZYjwz8vnUXzxvhCV",
  "key21": "3TgGpu5mCJyjtyEA3c6KYqB9DitQR1KqNSsUM3mCEEjgBkHMMGn3CwAdoFZyBPctFfUfGkMwXw7iL2w5SrqTSkss",
  "key22": "5mLSJ4quMTwYQk3KYG3hMcSvVqK4J1jAZvijUEcFu2Wbek5HgfwUwwc8Eooz7CSQ4Xvfy7ab3CKkw7HtktKpLA29",
  "key23": "5H147ghJ7NAb1M7WRnmGSzLfgXz9AmWqKNkCPTzpjYKTdyK7MJnb3byoTYWMH3GewkFRy9ADVT5HRcy4JS3bMUcf",
  "key24": "4jKVzXmnkzHeRtzLRVnFLxYYD8nVzESfbdtAEoMupaoTtWifanHb5RdPwGAuZGL2uHYjeTW27Js39wn5ozsJjCqt",
  "key25": "1N24dfmeGtMkFCGhGEZ43zfHhHwFinyJYgTd12imySQnqqAtD4nuvoAk7rCSLMJvHgGcWXLJFscAihFRr6ZJNAT",
  "key26": "3ykhLawCVS8rpTNuWy6dHj3ZTW5Uq9uFqGXgnf4sDw6aedhfvv9qNdY8s9MtmfvE3RbJEL3V1hTFy4AgpjsqB4Bf",
  "key27": "4ut7cbHZGfsi6Bo1Xvavk7apVMXzaNqB4Scitx7JBgab6ovKdWJacPDPNicEFGjUxNijMg5ATRRmuWGDM6ojqyqb",
  "key28": "2h63c7JpFYdxiSyyj1REY7RskamXq81bjK5n4QRYmuarL3Qujigygu5S6uhx3SfyFDRe7A9srpZeMZG64ygePrAi",
  "key29": "5ov7hD7A7zzDb1Qs7hjhrSidoHEyWfhFG9cATz4SaA1yZQMfeLHmnfqfnW6Wt73HkaSoaqeZcRGVjfeERM8uzX1X",
  "key30": "5WTtvooijRh1dGpGAqoS6waXKQPBaeoagcosRT9StsnbffXibr3SNREJubfUEvH5NbVYKCXKeU8XXK16oMJyBLSb",
  "key31": "5RFR4nNCk6YToSzPkihLgTYSDsxkT2H8jV9M5GrNHJPCBQpqsuGN1uYqvPbLkcXAHL1DPAaK6f53JYSR1t7LoAtu",
  "key32": "JEiD53CZJTWrDXoUtCERMzzHxkuo5uSQGvmeXmhF8Yxr6LgjyHWknP2ygZ7x8HTSWrRP7JCA4YcwPeHjdEjwUxs",
  "key33": "2ofgSCv1PD13DxZ7fHjbRXCexLHRyqdADssjqx7upxqXK2qkkH8ntV969tMGhhAdZ16ntoa238QXw4yS1dTzv68Y",
  "key34": "5hJhZBP9gwPdxagm4LQBPJBW7WSwfyqfoejKBy4oVVXgnmvLYMfNXDeS5uMuoazqQ5VA7f6C7dgNhg66EDxwdeyp",
  "key35": "29WeQKRicK4LWPL5kHW9dcaj1DDtr5RYjMyBJ7ny5knDkx7uqKSpvRrh3ui4KcFk2yoGoSZRxwX6yPNaGEs2kh7Y",
  "key36": "2jRX87P5wNUaUxX4MNZYsjDYeCJEgzLgfvfYwdty8dhzcdzjsyR52U35p2T78gibv2rbYwMarskdmSSkEjuEauE3",
  "key37": "3rETUvZL7ankA2dFWBjygvQ6gAr4LwhRCbMRpofFWVP3Q7aPE5VKdfYhTzDU4kUSicygBbrLoBfrjeZvb9vdFE93",
  "key38": "636vb4NbZu1SWCLap2Gi7aF36dBpRBbMBe7iqCoBh7YdchMKpNJQTuRaPWmnhfTL7LSBc1jiG5AMoPW11vLd9Vnp",
  "key39": "2WBkQUC3UvPBuNrCan9N1MEpgiEEEp4XJsFkfXhBYukFcGq6ewEhYeTUgjzn18j6746mmJYVrACS7eXqN6kDWtyy",
  "key40": "2szodREGjxeRRZKAHaFXBXW5U9TCRopu8RKMtzj8jfaKZzECoiPmunG4gK2r1XCMesxFpGRD2EFiTTUm4dTfnvfE",
  "key41": "3GiDxZ2ZQpXHzd9BAw4xDWTpUDfqsiFvCeYgMPhojvS3DbE3WnvgFCu1eTaW5dK7cmkkW1KPxi8W2z5NhigJp5BD",
  "key42": "rtWbxN5TnBRAi4Sj949US7nfJuw1S1BkwSfmZcHpPVq7TXoY8DTqWtQxAG59JuUtw4BHHBmr2CszGCUpTHfMMsg",
  "key43": "64gffp8YnXLV5gZHXedXSjsH2H9Drd2a7LoyqJXmeRpQyM1Ck8XyeZXxy1e4dQYJNnMcnckFWknfwLHu3KNzeK7X",
  "key44": "2PTpeBisJFrw6m7nhJBcxtmNpNZRFR3qm81CyasaEmKPuLTTifUBW97sUcfBePTfrpHzzGRoNcoeytx1NC2mnsw2",
  "key45": "2JPAFRTYvTH4xdpfWApJiKHhy11SqvR4nggW5srP7Zhzfa1AM64BHvw2KZsMNUhURg3AtvvT48J9qZspG3af6fuo",
  "key46": "zgVZbHoqHig5X3gyj41SvSHZgB16Fks8D2JnvDtZwUXKUqPdGtRjx6QaMdwrcbBFVZPwDmXSbA5GiYop1eg32Dw"
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
