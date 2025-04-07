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
    "RW4rKMdjActhtTwntScTMt2zkv23S7hUwf6vMnBE4ZMFPkrinEmaihc3oxvnpuBYqLJgzDJAH7KG4b24qxrevC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtnqsM1x8yfUeQRCsAaAz4nYqsWcL56rzYCwyHTdspMSqVyujanYT6xBuPruTs9hs7wseBCrSHYPJRcpPodcnhP",
  "key1": "2WuvkMUp9rsS6ExeyXyJFP6m1fHm9vf6dvxRc8ChTmyngxjgPwTAi1pvzVZNDi9Zt8MJMojJBX2pJD2bmm7z4xob",
  "key2": "5XZxnFq1gdvcHUqiU1JmXt3eP7w4mvwqoppUM2nREbrXWBtasMi3bw6EGcVn88UXf67jhwz8M2axm16WxtBekpTv",
  "key3": "fg41Zm3XWD4AEu3ggdcpQ3MRRBrU223xSY3FQWuZCV9kbL4uM28YaFjdkWc7jK9h2Y4mfXRu9pvDma9rtCpEjux",
  "key4": "kdGr4fHGLTq2cpRNWyxaavWvotaJadkDg1W1aK5zwsvW5tdkVQTUhGjoSF5quCAkHG13Qiv77joq19qJ6xF9MgU",
  "key5": "49hp83v4EgvvXWRMtUK1Q7LjnkKSNo1LgKRWHMNLzHjDsDAWtn7PA29UYdwugq5iH5oKC48ftorQiLfcvwVk2AFJ",
  "key6": "2CwvhqiUwXZdHaBRunAnrfGMZhLT9QbhhufjArMMpqEJacsxxC5vmUBWBGZieWg7Tbw3UPrYNeBqnPtgmjHBXFWm",
  "key7": "ovB4z68X9biqZprKya5Eh19Rn12xsyJ3iERz3d94VuBVgEW4zrdZGTqfy3gVFenhHq46KZSL1TvZXNNiEDSE2xJ",
  "key8": "41KwFPFqBKr7fpY9CjSzzYXqCpQQSx1gb3d5Y6g5WgRJv3CpbenjvuMwiuQm1CzHJkozrSgwYD2bgZTL51Jz4Zk7",
  "key9": "494SfSy1pYN38D4PcrJ8SuVvi3bREfFdcmnD1VeQcyLmYSoa8FQrUNFTrDqS1ksMhztndfBaWcpRFboX8DhXutzd",
  "key10": "3JzDZJ7TfZ63S1Mhuq8v9qaHfyJ7L5ecCuaFcKSXgwC5Wz1emMoaBnRywRaCYQEGCVPzGu8VDhCMYoJQA6eCgFVt",
  "key11": "2xRm1kRvpJ6QWAZRxycSm9nu9NLDLFxYcXkBGqBnfrgVtMN8tjjtAQB8WnzyJufXAxpfDrNkthJ5dF7aq3UP5Rce",
  "key12": "2THiJk9YFW7msg1W6FgBHAzpcSYghgDE84gVrPskoVDWH1QcALmgY1wwYbfUGvrBgubvSxfo9nRfjsjvzvgv6DLL",
  "key13": "n8QrZJZ2eaEw2ND3HoJd9H9wgu9uZfFjWE36ENDjCRqF9RKjpEFiVHbmxwPWosSYGL2eH8h2zkCXmigAKgbjWMq",
  "key14": "5Suni12i7wRmUbgPoLgdcJ3nvCfhdMiLZ4GdAswrTbrR1xZHeGY5tP2wa6ybc99RaojXDmn418CdbrUt5HHPEQgF",
  "key15": "4AVVNbwrPKSieRv87KARTzbypDXvgyBcXNW73KMXTgCqCr7uk3m9Ssr1yKLJszzy7dtzrwau11yoiecVXB8UJJGG",
  "key16": "2bLitiA3Jm6nBdBibfZn6D687mr54FEeRA9RQpRaFUXCxU5VA6mtjhwHCESmRhvqUQFKprfef6o3eJez9zEoWFxT",
  "key17": "2ft99hJoKKJpM1rE7jSo6GL5TAqSZ4CE7Ue27753BEtobHx3oGBLWNkAx2eUHWpQzApBEVvEVjD56AKYjanaVTGp",
  "key18": "DzZXdxFCkF12z8cB9UT7vcwaSLmh9bjX8Y3bL9NQnMj4RDYCCVpzuz9srnTUFyjkpurVZkP535fj5jcUJ45tguw",
  "key19": "3aGtq766ucjJcfgHhj4K6wQgsFKFLzKGw1aiwdQraCX7vsF7QUo4xQuZaTUbJpFcftJZpgcCnsC7HciiQSsZxQjQ",
  "key20": "3sTsyra4yJwE8F3AtziPkeb1r4msuHTqbJrsraTMaqCJmV5iuP9Eb3r8d8KQt4SywZmw1WQnwCrmLZP4ddLbCjrn",
  "key21": "2AsRCH2SG5aN71qUzFS6MzScyo4ThJCtdADWVSX1NtjbzDQC554MaogLCB4e37mNxViC9ABT9gJpftCTGPnMYtT6",
  "key22": "5BAuCbnDjNuqvch529YyEW8BNwyCQx9tmwU1P3zrWU9d1eyUTT6oAT6fg6nfM5k8qYpQYBzD9ePbC91tNhcqbn66",
  "key23": "2gWKkqVrMx5grY7DQpYsXWuVN1gAv1y2mCcBq4k9yi5hDWjmfgrncHAm8GADMrUBjY8K1swXhTsNh79Thp1SrBy6",
  "key24": "2tRQ7mXVDfMSoZ6RvxJrPe7nGkkyPdh7X5n2GNr7jT548PPsi9BVDPHDUZyjkxiRLojXFH1FfNfkzMBmUqkRuwRj",
  "key25": "HiS7AqRUteUZ4DAFYazN28WSUQSMbCqv8xPYKeU6oawhrbAAQMxUXP1PBDBK7QBwPMUNViqVAbWydb4mrtsDt9f",
  "key26": "4vDFFuziJct6XWTFMHyAFgHKhugyxqFM2j4r2Wpdem3P3roLyygZAKroscMZm6nRkxybC6FiBNP1bqmRYU1TCvPP",
  "key27": "8iewBdZovUnpH2ToeVHPK5hadGytUAHpRbGbaGB1a1UKTnPsmQ2CuLLX3CsV43XC7sJ9r9GgWkcXDPLiTkEjTpc",
  "key28": "3WvD3o63WaDE8WAnA7j7Y8uSKHnWeMUaHf3MsGxm4fPwG7zfYNRyKT16uzegBq7f3fkNRpH3goFLNZMginWVyEiu",
  "key29": "2Rye13WRyWBzBNxz8kFZRXBQmZLjqhmB3P5eE7Bi73Vx8J1LP1BpqZswK3CeDLpwEu6ozKRWF4Jm5KQZ4w8ddi3r",
  "key30": "4BmJnJmPmnhznZKpruTaqKpG2diKT72ynHpTESeAg3AxDcnGh1SpmPk3VEvY8Vzyoa8QRpoQ3frF41LeZ9grd4mN",
  "key31": "5DEyZQB8KN7ixU6DffKwsTiU6sqMRXovaiSeT1gMyctagKQLyjjvQDfyTr7iDwBF32LSwwVooyxsEWEi4R52is7k",
  "key32": "2B5TTDPEzeNh9zPy3Vw1mh5WXZFkCdAxJbzF4qHdkmbaGakxnHjph4EqQvABR7FLVEHpTYry2JWzy1UqJzrrA21M",
  "key33": "4REGFUq3mTMt8qjPoCL9KtSKJF45KaWH5tquqzkEw5CtRTTjsCQLvzHT3H9FJ3YAjDK41M76WCtgNYcZgWs48EXZ",
  "key34": "HKNAKYwZs8zUhZFPrkbzJC75z3ePPoavDmsSzPC2vyaEnYbHPDesvGRiRZyQ6dvCCzJ1tMsYgbkjCnZRzDkEfmg",
  "key35": "3zraqr49MhRojSmEFf1XWA8CatcC3QjYMeHh2Kaws8Xrpo7aSGXHa1XYVHaqcjWu5dd8M8bGjGhKoP5cAmSEFKRD",
  "key36": "Wu9c5WmBm7RaZpTEqv6GhEZL9dnUD6BMADepnNuejJGRmHEWWuH1F9WtpMjoWBpxfd7CximARsPMzi9Tf9tZTe1",
  "key37": "5w2Tjjnz849YkMueSCr9wH9vytXcgmGPnEuauBiEMHL9KkwU7W7xrrCs47CmNX93nr6uvp1zourxy7JrwaBBniEt",
  "key38": "3W32ijDr1T7NFe6hXZabf6HGw9UqgiiuPX5qARp8GERW9fg2aAEHGCCxFG3HRScGPDQiyioBjA3ZaL8RJK17CBZi",
  "key39": "rVYHyeGKhWp1SFicYojh6jbheRyc1rmczWGagwpC2D2m9NgTRdifrDK6YLNFKw2UhwjURzcLBEmEUSejSidEWMa",
  "key40": "516kumusmpDcvj7K8SjPH3hwae6J7fSpUuv7zSQUwzu7GKWskFdZzvwkvLYJ34suk1ZvMR62rER2VLRv2kgfZ6qj",
  "key41": "2mM1hU1fCUVdw93NysJgRWrW9Tmfa2QznNjHzNvGVjWkRYNY9Nd4ifoDypb1M6zyRHLcvt2bHMa1SQF2gH6M9Pyx",
  "key42": "LMaFwz2WSQGtP1uExj6pfQ6TVME5WDvYTfDKz3UmgQFpLk5HudsYi8tt7pupvn7eR3XtQ4zVutDChdX4TS76zYu",
  "key43": "5XUDGDtpiGZHvGure5yzuKLC6LMPDWgcjeXY4395yQBYoYL9xaHJjL7AGKH37rUbjMxsrA5ykHSEbp6u2QYEfHfn",
  "key44": "5tFMVRqwUCXGWBXtr5BzTBsgtEnXbEhH4o5VsFyq4f5C5sioM8ug8bvLmxmL6EyofDqRNQRUTsn6xDgETdejTv8f",
  "key45": "4iPsj3C8wAP4JLregJ3QNqi73H3BoopRTeixBuwQ4KwrygNxd87kiWFv6TkeiBhwPkbkX8gE5s8HKfx3UFPJWn8M",
  "key46": "4Jgb78vnGdg2ynXpRKfmy14XtbDge1kduiu3kSKzy35kbFaBPAG1rRANqKJaSBDA6FDURaeR5RMMRm4r59795XDH",
  "key47": "UzFF67XUS6vNduVdLhhgbM7L126BXCuX5BRuHj1jvFg6FMKQZFyaaBH8TQ81UyXMeegecYZ5zWf1pApfKBREA58",
  "key48": "92zw24QBdRMcq5qrQRyjihDyP5vw3H1DWJqNeVs2JM6HW9SRRA9MjR7bZTQ48zcaCyNvQgit5QrqFDKGD4c98Zo"
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
