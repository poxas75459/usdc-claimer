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
    "3vW63j2inmv4owREW9hRfw8XwhexuBaj7pUWTirTAH6CbP6bsDs2EqpdDH6tNdRMkPJdUqsmiWDwDKGhzzBv4sPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXC6kLV5yhZ4BiaWVUbBKhQwZ5DvKnLjBedNRr3QsotwbzLbNJJzkjdEKy3n7aphb45Y6U8RKeonUEjSKU7DK2a",
  "key1": "3oSM8VScDoY7TiFJiLV5cYjp6EogdDZ4dRK3dGTaXxA5CMrvdzRDrx1jYU8qpNK8M4xE2Q9HPuG1Lngu5J91kuTx",
  "key2": "2MQC83JUbgqd5mzKGNCMwbmvzcA9Gyhi1n4euoXJw1yRhMunJnBoPRBXDVvgCCykyHxCzQsvK9JoDKEQQzeVLRep",
  "key3": "4y3fFtjojaVErFs3Dd5vULHKUh3jg6u5qBfjoJotxqnZgrKPZRgnjEPYRwDXAZTycVon1rE2XDvmfLkppZVDhRx",
  "key4": "42Er5QaRZ5Sjxz3tUsPh8UU1hRfyTgBx4A8LfLktzDgNGaS5wqtXz2FweovwkgqSkNP3mKTE5fVFvTkuD79juKH7",
  "key5": "4Z5y768Rj3FriKLYwwNSvqrHCTRWJPxdUeZSc5aVF82nBw5qQ7tG8xHTkA8X8Mnue8pbucU7R8Nn1DYy1niAY48W",
  "key6": "r9NfHxq6TeigkFcr3vEe4YvbhToXjNpXEv5MJC2cixVhymemb6dtn9a9fhDCf9k6tvpSr6w5XfuR17qpyFzxGg6",
  "key7": "5X1Ehc4p6GMdJab3hdyEjSJ7i7Ze82gK5mLid62qcgrUssBux59WqHsCykvdyuCGUH3ogJqba6YKVtJWVv5iXG2E",
  "key8": "46eEqJZWUFQsMrb8uvq9BLtzpeh1p25Nn7Uu7WoSz4BsUM9chaGqnvKDfaWWFFBSkakJE2x6E2GG4LgAnubdjdVo",
  "key9": "5oHRA8BafAcCZcWhDLxb8tPeY9f4dbAv73Ujw7f4ubFx1NycSQTtLQkMW6zy8BEGNupBj4q4cPicZyYr9gBPwTXH",
  "key10": "4986tHw4JHiAKKYhMUb4haUjAzMzZUnTHTrnUoFW5gR91y4w5ZQvLGozX1V9BqQrWR79RCLawDNvGa7UM1xw97gs",
  "key11": "4NfgzdHcBPVqudiV685J976yqrwTWHYWUmwWzpXjLUZftiEWXeLSS6QH9KqEcufzAVhgJgU1rEQa1GSEgiFGXerG",
  "key12": "4HHSZnVVFtjyhTgQQja9BsJPbHt1DAYq43GdHDTzVodFefUwRrWbf3xDDsxQiKB1q3gexd2EiNasy7bnEiBRSiNG",
  "key13": "ZgByjWafhXMhq6kd1wr6Bwg3eWbujUzGSTAwoJSvhH9ikVc5ZL6u9gBbnJq9XsDNwEwPkBPs1SxBGysx8Zgjy91",
  "key14": "3Q67g76gdW2GjfpzBWistWLNprThQGxGm7gK5TdvNZU81ii3cFP3yvN223ADGDycjFr5YymUuosa9TQVptoF3k6d",
  "key15": "4UvEuuNTeSiCnFocK75PN5JPVhFnKc8zGYsLAJmMJhFJKCNu6iTBSEZhDM1fR4TYrgXP55rYtjFBXAKH56LYMbMP",
  "key16": "3FynU7RQSifLAM2zRdJ3YzKc2fWfWikwQt3sy3NEsGuehEuuqtcrgiwtdVvgXErBVEDPdkUCaG7RVYatbU8HwaLA",
  "key17": "3qT9Q2EnEL5VeYBLKVkgG7amyFzFeLrUoRycvS6iWJKWJ6BHyYN4zorBgsnGEwX7EdGN1dttMEt7CgcFTSunUBEF",
  "key18": "5kVyRYEQaSGwAuwmexPxB1Fdwsb8jWfgwLGgFQeu1urskouY9yftLcxnmaiLekbMNpzDqScCU5A3ocvwjvSYVuDM",
  "key19": "3KweZfERG9ePdhnDpu3sJqUsaVihL3NVF7Eb7p9ifjT6Ri94PbkzLrhFB6a5RNLzZNJgyx1fAgoManzuK5WfFqPF",
  "key20": "8pk3Rq6HnVsJVjAdbfPiUdrQAtVSseDHXVmMb3v5QX5aWuAEswe4T1qUCTYyNAuu6Di2GLkNnjRqfnNHuDnMkdk",
  "key21": "4Zr8Hq47CLCUrD96XGuTRGKARUyjmGTkEzouZXHW7eJC7GbMxKJz9qdrdS85LWJxDw6tM7udfpAkjDfqYnLvAmkd",
  "key22": "ixSmED2jJhMX3b4cvAChafcPeQPAz8KZxSQysjzG3A1gvAjCGPwizk8ei1fiNFgtnAVrs4BU8JV8c15cwKHPxqY",
  "key23": "5E9FPPGkSdPPKhRWZWaYJQs54hjeRgzmdkPLnzXC91U1vWbk3NJvfVn1BekrmRH4gUisG7LQWDP1rmTQy3qBkZcY",
  "key24": "3FY2U68u6gtVszGwCJvQx6gTcdSuE2stUBhrZsgWZTN5u6mhvibBGiZWouts6sUvRVYkwKenUC3Km749VfCW5d1G",
  "key25": "4CwaoT8Wgy6jqp4cqThcRxXfPgXFQ7C7kbQkJQGUra51Dtmf9JysswQHU42kmRU64QzPLMFZVB9NyJv9uTvdnCdM",
  "key26": "2YHMSAemruj5ZhgLoN1L4WQurXgn2LH1T2rj95aPC9uFQSQC5ipN7AWmyMV6KcuAKUKoSrvBUt3MiM4eirkJztEH",
  "key27": "5ixjzdY4NWynBwhBXrfdcuV6P89mF7xbzxcimKb5HF6TLsRXNw7REK2Ja6aBeUr3ovhqZw73KgpcrDE4EM9yeQJg",
  "key28": "2422LJvv5yzkC39VRo8PURrKKSXmBeXPGAtgKeqr6rH9Fp8xGW4KSoBCoxgJqXKePbBGUb3kZnE6z2tCPb8xrnCU",
  "key29": "2r38DBhrJP9ajHfJqpV2BnrXpREvXivRHbT7NoNzvvQ4p4mhejf1uwvj6SbMATJcZPbrz5eJX8WecW5abguLW7T3",
  "key30": "PVdUYbjtacCTD52LrswWg9fdWARF829vbzbSBozj5Ahv6KjiTJTeZGLTefSkjtKMBmms55LEwhYqPHr4LgujpYW",
  "key31": "zS6Qrs2M4PLjBhxFhFHQHhvEzykDA5J4gxJemJnUsKWfN1AiwSKgofZwSjHv8zaQoP61PN1BwPfcGKvhx8tkdcD",
  "key32": "22PFKhMFmNNefLPSHCf7iZfTgyy6tzeMTsbqUm4ryaRxuvPNdXDatNkeBXSDwadwtTP7zwoYghVe7yDYG9ZbUgK6",
  "key33": "2ctgcDM5CdoFRdSUxVxogitKdUvbpXstcYkP8hVrCSpENXw1wpxiapMzwc44oBJcb5msSaBAENxt3cXbVvi9VooC",
  "key34": "5kT5EkPhJ8fCHKcDvSuhGGXcGnUhDjubv2CsvDrfpZaPsmAZdw9oeEzLq5Zmqxh3Z4PnfAWotMrToFAxGhkyeurc",
  "key35": "2KQQhGLhfUERFdSV3asEshXQKX7huz5kD8TQWGZk43qCaCdj9azMFC5Eghgs2X6Fwq7dKFKe7zu5ThCU1ETDzJvc",
  "key36": "3qN3oSRwx4eWu9Xxybt6xPtmwrumswtTNW5S5gebeRLxHPDwv9opbnv18FUQ6Btq4TxfsuSuqrZr8VWvDfamNWE5",
  "key37": "3BgA9pcGUzU5oiHunURvJVcxCdfYaoa9kFtj95tAse7y4erq7ao9UiDRk9xiEPBzjg58hnAxFL9qk5Yp98VUHBoa",
  "key38": "2cK1wxEwfieZCYcWc9v2bLmdjL5YRdGpeFNTSzx8pWYfNyJu3ww9ubodSMqbnyQoPvLXpeWu9hQP4GsmuW9Nehs8",
  "key39": "4ZnVYZiykQiGmLDSEFfZigwT4vGaYX31fCSSZYQZwXbxvbpUzKFcfiVcA9M3rUxrZzbFnWBC22hacCuhUkBBTd6i",
  "key40": "4wCWBcr61ifBTCSk6iYjYUd3F1ZGkaWScRN5ak5dmjTKePSr2CQxyDnvQ1TKiqFFf2qMsV7nH46XXCTJGXMFia6G",
  "key41": "5pcpkjHjF8W61qj7qBr1pd4gF4TxcQt41jDUEAzDNLEeodwhHFDXpayoLn11zwk8WvuA4PbRv8tsfymacbdYjzgM",
  "key42": "LPyP4pzBNtMcZ7FDzwcG5gA7SJwS754vwM6HebATGUcNDK3TTnQ5PfC8RBSoKaMsntj3esoriovh329S26637L3",
  "key43": "4cBJz14xB7iVF4cHX1epuTV1ttfPfTP8Am4H7eHGQwri9G6Ymtk3PwfyhhWnbvbRuVuEuqaXzXbuFyY18A5m4HmE",
  "key44": "4Cxyt4sddaNX3NeYzdbtcNhh9y5pQburVR9XS57fBGzc6jDTM8uMPAem5bVSbU89onJ34TBjhcSWouLE89x4jXEG",
  "key45": "39dm2uC5dbqGAAZKvbd7UACnq94WuKfrCVVKZwqAqL87K6rCTH5wrZz1sYpx6u7PS9LpoLB2Uv2vyvKfvKcuZXoK",
  "key46": "3cFAXX1YoT7EZtjCmDcDkqY9954w3D4nASei5TqfuXEHtzCkfCVu89rGZMrvido9BEfWZGgWK7sigD8yQb7c2ZLn",
  "key47": "3matjAVw1J3P7q1cyVQpshCL2nNGtNEQ19sDWxXpXQizNLrNcTCyckk4Dtm8eUgoF5b9D3Zpumph4MKakP6BDQRT",
  "key48": "2xmFed1YfTbkYSprMPTnyPjyaK9GbprLXXBAMcEnjRU35Gtb4oSDx5hK9dKzCA8WiFKmwsTd2SNxXmQLrx4BCXB7",
  "key49": "4tj1ZqH7jnS2jbCEjdGnB1qMV3Uu7zWw3jawyHFX3xhNnBXtnD5U15w82FZsb5wtyvp1xPNXeKZTzv4Wv6QgbnUY"
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
