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
    "uHVmjzRJbD3G3UStBPkyvADhtzwCuqi2fFTrrAo7M4bdMJx6arPMjWfaRD1rSME7iyh1kcjttVsAXSxU7dGUDWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdGmNe5uKu8nUHCPUic1AocFnEV8bNaxKMab851qvpq9MgeiHnr7javXQkCefGnTCcNYtVjtu3FpCg8UpthoAL9",
  "key1": "5bHm5g72djpzfQahp9YjC1kwd4sXHkFJfd2R2iZaxN27iw3yYkaFA6D3pFZ92yfu9AQXp13xu69pADhuthDVpQqM",
  "key2": "3U4FWA8LzHfFEZG2mavaxTWRBWa2exE3i2UrHwRBbcXbezXZGqEiiisWpXWivsyHwN5EDttccVat826Z6MhJnBH1",
  "key3": "3ELdrPhqRzKaCaB2vGTTmiZUbqp1gptT1TW4fCcsDt6R8sdymLxg2qXnMcU4DEgRw8fFLvEA8spqkbM3ErWncPor",
  "key4": "5DjatoEQVgJpYqDjffzGfgfhkoXRAgRmr9b8mqJctK3aZnJ6pcRg6NbWF1HaAowQFjrjYMf7tuLGR6H398V7rkbh",
  "key5": "4PE9JjQ2KFP9vqYu8bQ6XvTTCe4VweJ99NgfRX7aED2dwg2U4EU4GGo72Adphsr9aVuXMbpkgej1NZ4R25njM8WW",
  "key6": "3UPUAUVTPRT1sQ58gTVTbkaB3vB2HvXCsfRnAj98rXb1MfZJvGZ8j3EMdDyJpGmKjK8ZzekiqLxFXWoMpKbaxnnw",
  "key7": "4HqpJgVUb5obNWejgvt1aPuCAfV7c4mPiASv4DK9GffJSpCHsQ3jDuH3bbrFVd5djXZ8wCKq9N1neRottMKsZbTe",
  "key8": "5MvGj4HBtfrzoj2kQH2diGoRzBuQMnUee4kwbG5KpDMJopJqcHvP4WWuRDGikMs1ibrCo8oFfz7R2hv7wQggBsDH",
  "key9": "5WrEQnMRfGJwiJPjXw9mA7GUvHGDi6twKRk9d2hEnKx8GvKRUpEsJEZLLH8FhNu4YU9UcvdbM1asGsEXA4CqEfAt",
  "key10": "28z8yAmqdEyznt1199guHbSLU53t1Uhu2TzdpxAM8vWko7XS1Lj1n7G5YxdyEWHczqwBqFHM6dyUrCQRfrkEgzDu",
  "key11": "VYoA3i7AD4dKWmn4xSc4MkcvtefWaWpn55kRv1rDPwTogocsmLxirnjoBj3qPPTHvAv7Bcs2L3GoKhisexSG3ow",
  "key12": "5vjCnfH4RStzMjRJBxu8xuRHuQt3B6FxzrMaRBpe7Ls1r2xFQPUhi2pSkzL55y62Vu8xm2SN67RYb6ZNr5PQWtzF",
  "key13": "3mvSUKZ1iidzDPVtdJPRFkM9FtpqysDHe7rTXVUmKEh9uA4Som6HWnLFPKRM4Cz8qDftcpsKnmqtoVQiWeypyY7y",
  "key14": "5ZC64zoEwJqgTskTbZhztuKPn8rHgTHSWnRdiMGPP25wzcTCHdPC8NRcmgzVSRRRB39eofDCpb2aMve58hQTFyjb",
  "key15": "48t9MV6soncoBfojp1ioL5sG9Ys1GY6SsGMfJGNnN7nMfSpvj8whk4ANueXRWf3KLmApphZsNgfkEC3sFABXFMxx",
  "key16": "4cd5gA6oVtQ9N7nWyjSgXGdwo7kyQVbEhztyE4HS9b7ASpgVhLZFtiUDuWiWt5srVghDTwjY9YDco2Xq4GK7E4rS",
  "key17": "2kVY4ULUUwkgR9Da93WSM4EDGff8r4kFuffuezsyMSAJyCwCrUP4bjzUX8gZidVjdmYGgZmfsVJpMTYo24jSxREP",
  "key18": "4CWS9g8seD9sbkHDRzbn2T72QmikQNwBahUHtfzDusiomLsQ1worpfW9ZAWWuc13Pry5uz3BkKc5c6qY9eDHU5iJ",
  "key19": "5nSKsJtGsW4CQHda4pN5Bo7erEyoZDbsYQv4NHXbJabmXemsYnQnW587184K25E9Z1knxaJRc964XywsXgBzpaKy",
  "key20": "2dfBotaAvSFfdjqVEgjPZ1aHiEzmu9QpseMYpD5AzXM2au2EZsVGGChxZrV6XXVzsJVDVjMYWbDWHmtGavcNa7j7",
  "key21": "5FQZBCKUvqqoZ9ykP6BYycE7fXiANHv6H43mq73kHRa8FsAmTWqdYXN89R6uNkD6Hz1M4eghf58mJbx9c5CC4XPd",
  "key22": "2PHfTrUr5LVn2AP4WbrHDUCRxayqijQhfWfCkU7XoUtUtQ7bS4Lsb2nLe9AoZ1MCTR1TLz2QfeuXBH49azeUwP88",
  "key23": "2sWXVSX7ecUkRuWugEAx25FTVhVS52DqB7oWw4mh9ivPjHW4yV3EjkMVE9nWGbtpATYPh8zi1Yba4nGvWeGxAwHJ",
  "key24": "4sFYsEXCpm4WKVkxV8ZnsPoaTwE9Dg4QB6GiHDNokBTH3LNngKVBb6SLRqJ9eeWUxSMpk6MQLsYHCGpyygHcL1Jy",
  "key25": "57UsPMrXThiLR4i1C1e62PmaaPnjPUbAfWmFaSZRNFS3b9zJpn3Vd2Dm2Ksf79gXo8xH2oidWLUFqsxw5x6h3wAM",
  "key26": "Q8rdcyb53XM43AyW7GAcaLGrdfNtFKCFRGHvbfhEetMiHJ6hTCsLZydFVuBYF2ZDeC1SUFRa65wFm2pXUWPPZF1",
  "key27": "34jyAW368W7WtJBTMj7rnbiwNX2M6uGKZjXrsTwoCa1maG8HFdpAY23eLTgu8i44YLypXHVzEhXWEaA9xDKDw5VW",
  "key28": "2Zo41SR7SHQpMKaPMuTz6CSFdJYHKiUNz8D9jgGQewJuKivuzHdriQs9VjcpMsWJsiNXXgAVNM8uKypYHidijkPa",
  "key29": "2HYBe5Bm9TU5M8oqvTTrvU6rhZLcg5tvYEpS1bYFJwVY57tV6GSGeG1TaUufwuuK1m3Vdv8M8cCUKN6DuYQokz62",
  "key30": "jNbWZPS2pRBmyRufXfRPwKZcYRAnSoQ9nuS5NATCGv5vFVnKCZ88iBQs5NmHAwetAuV2yVQ5qqHLJZp9bNHF5ge",
  "key31": "3Cc2mL8gNtQiGBRFEqTDCY1piArPxYhfm9GWNA7FavcwH4xVcQ37fZ1P3xEjHktYau1y8r2RAnW53VToYXoerAgM",
  "key32": "5NqozwxzMHdNTJKrJ7bAEFqQVZXnVxePz1csR8AZPMvQdsGfVyyVGkXM3PngPhKMHAgXJbrfZvEe5mkP1j8xPpHR",
  "key33": "5PuQgedLJBrRVRqTCW75gheDE9JA4ostFJwKV74JWKMV96At995tX31s1WKYvMjwF268pSKXXS2pFSnNXPKzh1jK",
  "key34": "4MKjzvDoJgvbipbLQgtLWYPsdfHR5odcAfedJJEdeRjiXXMtjMYxt3bG6sTG9eVXxGcUxvUKmXnh738L4sMqyoWH",
  "key35": "33WzgXnjPYhW5Rm3rxg4fp2jWPgqpsKEMkcmgnDUzFYjBK8cDALf31FPCWhC2CSwd1o1eCAENDo2kmkXnVNA4Nzq",
  "key36": "4xa24yFxCsSdCcMsbfwt7ridSn9dcRyc2ayDx1YpsHK3qYqwoExbwkn7Yrb4Snui5rHC4ZVSVkXmmD66jemB8Vap",
  "key37": "2SvtB5EhXiYLFyCBgBpLmTsKCzvex2KzGTyaGrzzaw9nzSr2ALhjKPzq3PcDn1w1XWx4psKvHDMQVjif89uivJJ7",
  "key38": "3oXitSdFNVivrzbFjqJjixSbwD2aYCWxhW4ttEtjviQbN28Lpb9qxesDQ9YVaYZmRpDc1ypoc7Fr6ANfb8rqi49d",
  "key39": "4AUw27V27eo2Swp1BXtodKgs7sPPCV1ihKEec5nAE18WLDLy392E2tiTFkyc1ubBEx9duzvKjBycyskPtqXtAn6r",
  "key40": "3tyjWyxe74PX6SFN6gQLNbDTP52cseeK5aFUTh96qEufFTodLMULvGbki1ZKNYfKJxuwqaJiJ1byE7XQhSzxAX2z",
  "key41": "58YpeUFmQireGq63kp6UikNy2uqWJDbeX5fcXxon3p71q5qTpan56VnSUDtrgBRjF8GaYuem1o4t5NMT4BU4EPYR",
  "key42": "3MSTbib6CaYkagcUQ8xKH5cZtWZLgAa4W6mthHG7XjzR3mdY9ikuzCBHQUoEecWZgpsugxCGxAc5KW2Zja3ZZWRy",
  "key43": "2yzRjk8R7hYsLVSF6LPwuJ4hKbHMrVrbZfbqM9vDuPkPJFPEAnmzvb7M1YHE8idQzPrQkum1o2JMDwHra3zKvbsk",
  "key44": "3sR6NRybpDMio66VkNuPLVJCTRMseLZWDvsXm8GdqHjwbz199DCC4aa1T6CqmZDGgJnu9otQYeBWjxw4jpgi8o1w"
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
