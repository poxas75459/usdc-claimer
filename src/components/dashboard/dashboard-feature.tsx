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
    "gAHeHuC5Ha3QxKngMNpFnWgnT4kmVpbJ82q36uyASK4xtxyX7X8ayoarFVL6uq8yyQWo8rqVbAzmHz4NUt5cbCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPzVws45VN8dRTp6hu8vXgDRntEkvVLYXTzbiT9XqCudro7TSuJ5rHtCEwHAR1LUmzZL8NFcQUYMBSw1DuxChjR",
  "key1": "rmGrmXT8cGWmLnx8SMpasftnwNF6WZyXMWL1Wd1QTmeto3RVzjQWqEReS7Y8MWrry9Z7ZCyNep6yitQQqU1L1wk",
  "key2": "2ceEc2PJfZqAYxHtDtTMxNRM7cYZ9c3u7LXRBueSDFnaRKnAUuKFpCKLYLhWgGdg7rcuRZh5JiWLG8EPrD1WErz1",
  "key3": "5VChrTwM66sNzSDcBuxNv8XdHnJxtRqxevczRZsnqBYTSzNRRrn9Pzgrw9yi9aRNQ9ZQp9bcGgU3R7xdD8s8Fgp8",
  "key4": "2tXLjGEFWrJM1hb3cvXLH5B36x3oKqViohpCsKBqtgkCFuKpVfwiGaABbXBEbZSvJMW2XjYHetSsfYkqHsRY7qrW",
  "key5": "3nXhqTLrNJKThz76A2HutEAi238V5No49Hf3iPJYYBYxz5zjx2X2ZzYUneHS7s2F8xS5WrUFcsBJL8kZRYpDfz5y",
  "key6": "3E6hyQLWES5GBaw1jHb3qbJNkGWW6Du6Tk79HCWnycB7Qz9829oH5YTGNk1oQ55WeZdoxRcZSy3gsdqsi1ZphNoq",
  "key7": "5iGtFdaGXQ94jtwbiSCCBVJgeD8e7Pwx6M17wd4U8SmocGthJSMkNmUbwXzGPdFtNVq8F2qVoJnDQkPxTZeYgb5K",
  "key8": "Kgdak57HBBZMNK8qXoiLF8gFmxSZ2caLZx1iVDc8oyTDf7BVvrWBiEvk5rkTPFZJShtzw6xZUvtjAxprfnbpAjV",
  "key9": "gCoCW6MtRQW1i56LjPudNQ9eYhGgEEUtUrf6dXjYv9j6aqCS6uLQrL5k4mfStuP1GBPmTjUvK79pcyK9p1PA1DW",
  "key10": "3jKL5YKv89AiXRDN1ndD2BrdzFFtGYuntCfLYPREqfgunPwka4K2TWkoMsgdhpgV1bZ4CAGKWY1audYQTfcSx4vj",
  "key11": "4i3Eg68DPzqZp5jBHC9DFzWxAXityHZuQG9Gkxcjwm5ARLSMdSaA7Wrt2DMSwurKvRTbotYfef84pzfaQtfXSut8",
  "key12": "5K6ogB7nqEY3Db43FzHLRZiTR9d5njW94nuRs7ugAgym68R5w4Rb1LJ9FUAa9daZmmbVeSgUsHgjmDFzg6kLKYZP",
  "key13": "45FzPg26cWLkMvckupxrmnmG3ZjShM7NozQ5uiDptmB8qMv2E6PHuGggWLoTnLg42qpqzPq7Uxn1HKm2XTfwug9w",
  "key14": "3mpLE7qra6wWFk2RF5Y3sN3Xs2YJHPRcZRYxeZbju169veAiFvksZmWG4LfhAFME6ARnmc88U4FqSMAtDexjB8R8",
  "key15": "5C7dt89tq9L9dh85KhBRL1Vzm9FCbRrksZrNaDbxBnhacj1ssk65fiKZHu55rvhPM1yRWVxPb6qzmJbRFQvRyWTz",
  "key16": "3njSLk5Qgw8GGwUgJa18dSEeWurLsfqqSQbvdxFAkxQXm5dKbJnpB9KXz9CA2sUQyhUfvTHWTYYSqMA6WThpBxBs",
  "key17": "59eXSREiJPZ1pFrfsPyr1RWZpKux5AKsR7VoTbcMYzP2XaDxjNUG1p2JHDtUnovWFwiEx1QNAsrNvEzgyfknd5sM",
  "key18": "3WjxASF5KFSJZ6AasUFnZf4PwsXaP8haXSmdjbgd8ETiZLAAVsXm4drsSgYBc4GQ76ji3nVzhvWUyp14rsxtg9sq",
  "key19": "4Nmb3nLDDvGt8yZtFkgvpHLV6Z414VJLvUKtqx5JKkcaStCR1BPFNkL5iUpZT4eCs6SS21bHJrD2tJDX1gKR9p4X",
  "key20": "5L96pNLkPrQii4FdjzVNeTyCtxUfEdfVvDcgR9qfpEAxybcmbaQ6BR58w6WbK87phUT5nP1nDDgacQrfcX5yc5bL",
  "key21": "3muGkoFU2YLRwvXMPaMsLFwNL74sEEXARtvHQ7jaa6thEpkSKY3jxaM55DwooNJFeycNRhtDJucssiKq9smCx2nt",
  "key22": "2oBQqG5RqAJAAs8okXk3dBaycnVEwN5E4nAJRamF387jBx94ZwWGwyqf83gYWdgMjgG7YxnfdABdUSUkNGEQN8yq",
  "key23": "2mL4gE7SdgzrZnf6oP6f6CWAHBsRCTpVftTqEu5VFSYbxaRmwo6s7JrBePJPGGPBcnLUYJqXa3jt6qW7uVLcgcnF",
  "key24": "2GnH3rHDxuwF3GQL8tFsPYdigyXfb2oRWchezLZSn376V3CARA3xS8L3ifbPQPgTSZRwarUrG9CTPcWNyw24cyUY",
  "key25": "2CstZDiSov2Ljp5BuTCgC5PdJdRB2uBrJwRgadMQCSz9Z3ZFzXBgqMXDKnrWNuX2fhtQdUTGQFagHLLU281W9DDt",
  "key26": "59BG5rb6is4hW2cSDhi7HDpQcPB65Mx9qXHQy146YqvHtWFJMZAWgMuqpaYhLTN8fjZoTWCsrEun4i6rp2pKpWdJ",
  "key27": "3VqbZqQSy5MBEzs8C9cn19sgX2iCAU1tHunHCEn29MrUMWurxYQd8kUtWfzrbKTx8w57uxhs7y397CKxt5LVLDdw",
  "key28": "cPMLQD2LCmCGnGCnzFVNRDn6JszUHk3r3fWGyaB4izzpcPG7SxdQfgJ9yacL2UF1oBLLHJBHVDDRLgUbvHSDKgV",
  "key29": "3CfVAj7fJRxVNMNaebjCWQSN1S87uqfcQxvdat6JUfurCfLAuVzdXREdnzW8mKKHRgyBSyF4rZ2QMW3Xq7upWvXu",
  "key30": "4shwLV4eixLohtQiMYztGh8KZ1XWSvR6NRpDCMB2CZPV4DTKA9izeRtqpmsJx4zE1df5ozBCijwVHW7zzvaSgmPq",
  "key31": "zXmAfnCQHwswAt3T8Pz1nm3KKRv3djZmdGUYuqesCh6B2ATe8xGGq8z3aiWRTYsSzWvcuqs37his451aSx1Mqxn",
  "key32": "3D8gfgRRkXX5yiBZ9mz8EXWXW1K6tfSoLKWWmQpFc9YkwAcccipzM9kTE39SHUPz3MzTAatkJUNMuDKBmPXBWvUK",
  "key33": "5WJH2KG3sed1kH6SKRQ27DcijYqfPLYgHDgKCD1CyjUt5yrFmbdc1tEs9c9ftsZEy843QQhP6B7ZG53pJ2cu3yAP",
  "key34": "F9C4Z3Vecovwo29Xsfez4bGpF1VzpqqR8o6ogk9F1KfFJC6xmkbgVxkMR3aKePf8Qhn9FLQ2rV2WWjMzodZSFix",
  "key35": "2Ji5A9aYZtLQmj51hFkHGmMS43rA2euzbxXsSrHbKqtTSnZfCRfSHvEabrvUCsyNqgjSqskHCpcTEBrDqjA4xAt6",
  "key36": "5GGULjgpNg8dHe7hok4F6sV73S9FeL4gN3YR2nwQvj8bDvEpJQZvqVYQrSaKP3xZCCqtmN6LZpLMSzuLWLjMBt6Z",
  "key37": "1J4CDfwgeSuLmRegGuAcHMraagnUWTCagpjS54qv8Jc7MNM8PCH7tXp3QBy2bon2snmNiEqKnjuqurD9Q4zKSyX",
  "key38": "2T7gHoSBo9xajsXG84p434YRCXzNSQrP9hiQUq41kKqcviLfiXcgmE75r91iSMcbsZusJd3UDBpAj51YQRuKBMSr",
  "key39": "4Zpfkiz3ySVqYKQtRN5etKXpL2qjfsKgPqkqmaKGm1rcheS22vCfCYoL6CwqhzQs3gTVt686Upv1W5zHdvdwbxg",
  "key40": "88hktx2rETgWGtJez8qAyj9hZUsafk8tfecKdKDXxR9e6yb51QaZ747Sd9gQTzSwqcVJFeKSaE94Jih8ncqJbDT",
  "key41": "2c8xrR1Ds6KhUCMTrru8AUWciRC7x8Dh66GoFW2BdUk4pskYpswrctQzPwTrkQvM2GBmHRMTT2qZo2y8NQAHi344",
  "key42": "3zjhYW58quikbxazqNos6ub77ZTjVSuYpG14xaXHxJZyQ2CvGQxWEbsU63JUfe9SqH3JJ6QeWU8apFft6v1EvyXq",
  "key43": "4AevVnrPE5h4rbUMuSpGrN9jzUzNhLy4XqYbq7A7PsxhE7UZ65Lw6MHtYVgGSJsyTZET21TmvyKdmRTLZCf1YP5J",
  "key44": "4D4dkjuQaaMUwYbhgbE8UPaJwfER1UYMBkt88sSSRAM9TAULMCkeeST3WEvSLpPjd9v72bNrrvi29tpCDfDh7UYW",
  "key45": "28NZ4TpvjCig4XPem6F9ujAsR7Q1tmmX88zhqLxpuY5bzzve6soQ3c1eR2W74yzc9m7zYcBSiW4M3ELXwFVGRLYG",
  "key46": "54WeK36smkrmZPEubKRsoqHr5j58HDLyreykVV3yxA5NQprg3ZW4KXn5zPx5Fv3vnfmzikCRS9ac2J2HdguyQDPS"
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
