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
    "4G5FeNozJvehdRfNCJn4Pq7tEawzBM2W16mcYtJWJVPryYGZGFbpmSZjmPdyFNrSS1tpQZNn8gkd7hG1JoZZmRnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63iZmfQpAiFaDoomRH6mPFJMGJVduXggBBhsdHeEERDCyK93Viiow4HTnQYHBe3Bdu3HVNUXhi4yWdJ2iXkhUbNq",
  "key1": "3zeLSfiqp4ztz6f997jUsHdGDAJQHhPTYr3X54mAwaxTCA4G8jmRhjwxhEC8hvpRhE2Mqfz7EkRTUafrfiN8mdt2",
  "key2": "5tGbUpXTSPwXpYptK74GQvCiqtVzXGpx8VWPxj6nq6qXNG9nFgFCcyPh4nvcmUqKJcrBg7ozsn52f73vKmCS3pdy",
  "key3": "4mGScJd4Sb49NT4eiDkzCYZPDi3LSP4NaYstXnuSxFpjn6adELRdfarP3k1E4hUyH66FgwE1K3VeDApMwAVpY5XE",
  "key4": "kjqrULL7ruGhTHq9XwyA7mjPkgTm7GofVg9PuquVrUuynaiUfxK6V3YTjM5hkqzedberajuxiqyxbzRXpttsuu3",
  "key5": "4KJyJPyoHf82Lv5gsj8S8zR8EAirH9u7hyPMRKgJ6iDGfypbvqQtXd3KMJPJtviSVktdhRoKzqD2NpQmTYX6CqH7",
  "key6": "337q5EBJttVasgGcSA6kixtBNmg3kfTokQ5Rsri8pkdDV3ChLqBd1iMPU7apkTudMNxF3PtYFbH1bLc2NFNm7et9",
  "key7": "2vjM2QwNR8KQ9pvKBUcXDBBTxHaM9UMQv9d5etNS6gRoPb5yk7FYENuSi4yyckNnjFGqTqS4LbzaCHEVYRKVMMKw",
  "key8": "2XZKatQKChjXGLRVxkJ8cetDYnAFwpTrHCu9K9niH3XkGDupty6CGwkS8mhtFrMU5nrWJer7ene7F9pz2GH7BuXZ",
  "key9": "5XeHgZBMgnHXTpw3k38Z6ZDsk6yuRT49Tw5Sbma7Wgk5EbRDwHVutAyji4GJ9MpPeJouQ3EjRGP8GtCxAGTNR4os",
  "key10": "4c7sAwzm5YvCeCTpgpqnJpYKg1hEQBfKKfGhJPadAFtCfJmQNkP7i3UFAbF3hcAEWDFRY6gKEgg7M4kHHrcMHW9Y",
  "key11": "525Xp7yHAC5X1k13Xrr9m3PRMXCAsSBqzhHAvKRmzGQiQuYBMbSsRBkmQvYfZiQLEMan6DLcKw1FKeQMxUTM1oxL",
  "key12": "3ue7etH854Ncutgi2RG8wp7RJA9tFi8cbjuWYKc4m8DYmAhjRDxTjatsHkRwLCu9RAVrE3uevbRbro72urtEbtn",
  "key13": "3BrV8rrUTEgzrgNKK4PTwztQQVWiN2Mq4nEDsoeqmymiLvCAKGs1igfXhZmuLpg3pbZPwCF4EXa34Gsezon4ZTYg",
  "key14": "52D8RscNim4JzzZcemcz8MJqdYN12a3XseH1fctci4VmQAWDWXMBEroJYr7aFd58juNvozafr4UdodN49DtnqtGe",
  "key15": "4mNxuMmHcq7fJd5vvbtSxnGNPMWAs1TdT2sjuQ7vfK1MbwwYzFJLGR3oYtqE8u1mFFgwCkpWNf4Z8HkzrbX7iQ6Z",
  "key16": "44tUXbCsDLYJPfVfWRfrKyL2g6DWo9XKTvUpeWoMh9NzeUASfPEEFD6W5Ar4NqdboQ8bSE6QTNg5ADimbeayeuiF",
  "key17": "3qsSq3aapHrWYWzkhpwRD3uzBuHuZ75ufcLfHkQRwnwToN2VQg2Jj9jvJLFiF9JDRmsxQTdKFDM2v11bKGw9xmFb",
  "key18": "EZMvM356dpaTbpMLrHpWUCEn2NqHum33xCiTtMgJNZzHfLtD4fKGCNN1LoDVyE96dSsMKFBCwpW73ndmh9KPeww",
  "key19": "BoMYeUiWaUhRHiq8F7B1MowCAXrYZiZdEE4qMFRCDPHeuVtq7wXAm4oDAaQLBwHMCEZhMKChnPgEjEpDpMtdT1P",
  "key20": "2Xne7ry6asYhbjvJDV37HeEqWqdxmKBceaouWSswGMVMkpBdGV83pKgBBAypGiEszjWM3wNwbUCjMFmbUXHbN2p6",
  "key21": "5HTRizCWmBMXSg5JPmg5aV8Eujd3F23pHeFUiqSeRV4rehk7GP9RULvsFuarxgfY6TWtApi8WWrhqsypJ1is7G4q",
  "key22": "2J1P8Ea6DBBWbXNMQYfe2VosniTsMqnb39rh4UZBgCTFDZAy14LATfdem6tu1G2LAyAKvw7bqNXkYbGtVh418y6y",
  "key23": "4DqpNPs5SsLJDZikkptVn3s56rk7h4qH6AsMLsn4iaF9sWWsSJEAm7mibgQqeBqMSHJGcRYs2EqwqhTaFjaUtFjR",
  "key24": "2pAE3cwaTTkW5gZ44X2GZra7fVoeqwtu4nFotG2oK3BNHYPaHBdDHkvAcz77Z7UV8kaFEbdZPP5y1jq2LadokHPj",
  "key25": "v1A4pP5YWCEHY4341frjNbjjpvHhdyFmj1xdNF1kdGBDie8qd4B226FspnK1TPZEdMD4VdFA1AUEf3JtawChBWQ",
  "key26": "2pXX9NEengSSFiAkZV5XJgqNo65SqvmP7oFapw45F2DefyHWgfNKcAmo77TqbJ5TUdyxkCSvFbwX1LAs5FiiPNMY",
  "key27": "5Pha9gfiE71GoZNcA6YxhuYkb4b5YZXbSGnZharUiW3Agsn7wqYXD4aFkmGEnvPDH5zdrLAMUr2aA7DFZtzG2CKL",
  "key28": "4X4tERpkFjsSaQCUHmrbWuhH693uGzSoYsjZK4MdhE2RJNtqsjigDohLJkWht6Pfo2L1jHk2LRxSNzecC4GXc4W6",
  "key29": "4zzQMmKN83MCyc1Z6PfUgNZMyjgVtSfBAiNBcEkpykjw71pgMnmogfR8uvABdJbbhdwLmFW9a7QgqsbojuqAcNRi",
  "key30": "66JC7vAtL65A1w2bNWDF7DCdnjtUUaveFNqwGWz2BSwQUVjMYdSfkyDcfjV47h2QnNDgSunG1jXUAgkppu7QUUAJ",
  "key31": "2Lk6w6tkPa26bP4QmXs45CxtZrE72gekfumzNvcVYk4W6rsrfq2TQsSDQxcxYCJy819RztuYkDQW5NUKAnGfKyjd",
  "key32": "5uDuDrPxeASHJZxPjs2qMLuYn4aJeMzJ7EJ3oGU7YsrE3JhDEw2cyjMN2prsfJ26vWCKXDNMjMShK3SymaP1MB4X",
  "key33": "2brSmtJPc7noUvbhkjmmxSDH9iTnmDSB6HMBGtS9V1Tvb9MkCGnmseJfVoBmHJcv7cv1viuAhoc6NWBngWx34y8G",
  "key34": "4nNUcVszQoaaWP95T3513hTr9Y3VUXYZQzzhm3DJaVmLkS1HDG7goPmzwm9jxzgX3L6t4aGFTV3nuUGcWdLM9uFv",
  "key35": "3H9BhpUxeSdmCYBzvRNX63p19tHiAcS4eHkQm2cw9obuFst9HWqxiNbMMWocAan2ti34Lfe5GgY9sxL95irfRewG",
  "key36": "4WKiiSVuQgqwoKRRW5hmK8aYy41dWPNdTSWewujFrojKM3AqtHJd8UFSJg448k92tJMWvWLfWAwmKbDmVJBjigSp",
  "key37": "4vRapGh7vbvHVouaBLPsLD3aaKEGY2xsMS1NqjweWN5KEysDNeQXcmfaduJT2zebdZA2Fo1LKDJFbMX6Fbdc4taV",
  "key38": "6QtuW7YrMpkUYjS2nrKBoEAcW2eWFMr77WpSQyo7haoVxLZcLr9zFjWLSNVqoXJeKxLLTuM4291BnmpttqTeEJp",
  "key39": "2vDsVmDaZ1VXC4ZsTQ8GFKgeszbCtX2GfzcseCQwDrhcqZycBY3yfhbvKSn1ZegdQZddixfp59zJVSAaim5PSjGH",
  "key40": "2CZRMTSR9ziBNXnKaX3AdsN2idHgJj4ttEP31MF2uBQjHSBUVYJmMW7UBVPht4uvmSKitBwZ2kTDxE3bfwdLBFis",
  "key41": "2ctFhyQsGtFVYzLwWPWJqtvbY1z73QQVTacrc68eMdnLjxG3NaBjeaMWU1pGCgNeM9tKKn35pdH8ociv8gwj3Y3z",
  "key42": "5o2XbEJFQDTbX1os9HjXMp3bMo9vC75pFqKTg84zuMiEE2B4ErECGtbnDGaieh7uS9RidkQRLfQyYEUi4XngbRAK",
  "key43": "47SrMJFXqsHa16HzPto92tvaqK4AUiDySiEtKfi8rsXczwJFkE4U2qMhM3RauGmxfDqJYJxGV8MrL8oKbvyxmLNv",
  "key44": "4WnVccDTy27xrF3925PCvBzYBmdWHmyCxfuMpSMTRfi59JWsqoGUyPrMDuAuwYT8aAP8zWdFJBrj7ixyYmQWqFPw",
  "key45": "533RDfmXPyUgJSDV7VN4sSSQj6wGDE5smHatuUpc9ENfKT7PfQeSzPvjMwMTNGpMHcx35GTVXUZpGmgAmTUFgYPk",
  "key46": "Z2A797gSPJpovfEs4VheTPyZTpQBjbsmuUevWNGtXdN1A6SbTZ8GSZzHw5DbpgD2bg9Y6bzhHmu3LNQNMvZ2Szc"
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
