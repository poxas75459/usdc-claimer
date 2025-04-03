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
    "NwJpAfNfgyGV97k6G9uCnziZmpzdiqh6XR486sPyiXbW61V7kb8weBN79jfq9qeNS8mnbEpfyrsts9qDffkkPPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axrAHZLo2CAgme5yNKbtyvhsPBZ6hskwXxV2crqQNiDE76ha9zmwJ4y1a54aQghtnzABejRKYQTr4utfs1enbUB",
  "key1": "5xvU5WjzAhLnkM8xrnzVknn3mk5kcUmkbYE5wk7EroytKemNa35cgchxXA74ZV5rAVgfLQmy4GEvgp7skPFYyhq8",
  "key2": "313GTX1do1fixVvGpdqDWLbJN8JC9MfCvdXwuVMy7tnwG2Wf8q2ECDtW2vVGVK9NDGQvxP7J7uksGjPM8jMkDeN4",
  "key3": "3tFmjTbbGofDb1uBZAvYAGvPMvh53d4XFEx91Vyd8b7hLMePavZDPaJ8XCktQ6f5ScwbqVC9P3tMVuBY1VynZqRL",
  "key4": "4R3W5a1gBGvjDYQ1nTufgjYeCwgKtzHWefSX62RNgB5meqGGf8Qng8aw7e1G9VxaC9WP3yMeudLbWMJE6CZcpd6W",
  "key5": "4wRTGExxBjgXU6YmCJENZiygPwC12GpD6j5KZQnfassPnuSb58Es4MMsHduihHAWeECNcRESLBRjqig7VgdwvXDC",
  "key6": "yjXGRw8Ptsbt7fnYzJuWyr9RH2nfTRyZC826H2u63AbYwP9Qhh9vMPcT5vSxGzuUFbi5PmMUHbGVd9s32uHt1PD",
  "key7": "3frYW2EUFjaH6MyhmnPXMmtzbv1uPPgaD1cjr7FAtT3e7E9beJHSUSR5smDXsM3sNcHtSivS5EL8pPbkvn8ZSeER",
  "key8": "2jwCkM7u1juwmky33yqcogjiXD83GPKdJ25L7qUo8q2mEpQkBGD4p1iHoUYdJt6sAQGcMDU7nAfUqRxc9upFP3wu",
  "key9": "2kQDXjFWZCh2SGQuwkMtF15fxvn9usMBL67pU2vYpgwocBwjZgBb3qVU2bzAY7ZsSQSwc1XPDigvuyJj9mMma6qP",
  "key10": "3NbNrE7q3gxcyVbY2H9B93hTPHp3KQt5T4E9PhWEi3cWe7sGtzDAf8kcto7w96VmbkshxoURWpRZnM44EwTyuUaY",
  "key11": "4uALozPEx64HnPe288GHJnUCmm1yD3yfzMXAj7wruAnUP5frBaemMov5kkLT13SvZ8hEYsmvW9T9VxdxG7ue6czc",
  "key12": "2V86LF6c6cnosHPmU2QAcrves3sSqSveiSQ8AkecaWsoNNfLbVhRb1vMkH29EFfXYFHV4QkCQ4QUn1wEfkq1JSSt",
  "key13": "49vHvqhxPfRS8rq3kCPj1Nrj4TBwGgHKita4PedCYdBFy1uq4TRYPobQKYKGxoVHaxznnRR2udX7z2TiHrwo9a29",
  "key14": "2eHdGzboDSM8bRqWZzeHqCBpGXQxVaevp8PCyyba7FKo4zyoxPr5amYP5v3tsMpuKtDur6ohSt7zwqU2EMPv9sKc",
  "key15": "45ftv3aJQ6nn4rV5HGVfBWgc1QL9UumXipAFA328s123WoBuRJ8TuF4XZq7sFdd9FB8A9zrJa3UFh7Z5mabk2mrM",
  "key16": "5w3UVXvb6xAyt833zhaVcck7PMWbQHj9YQrBYWnpksWxSJDpjZG5SWJJitzjaiLLY3jEhhgbQLpAirEDeARm8bBu",
  "key17": "JGv2LvCiTtyXLWRnRYzKqgK5dPsvf6sgEAxPDd18cZ7qrRup45CsgenhyTWmT1ja1BTvToMxkJis5hNiiJysXCo",
  "key18": "2syPbdk4y69WMFNcQcmm7geVEjXjyTH7zzigPPndLpF2ADATEdunesNs16848tHafwavQeLa6kibWn4TpWub9cAs",
  "key19": "568ZfUCFUsk9PZf4tfZRKbC7LWWnWzbV5h21d8BAyKmPW8AP5k8YbtFEjkQvKqdYXV22u1MCy5swWK7NeHLiub7z",
  "key20": "hw2cp5DJ9gNtHkCpBKvjCN9TRKiJdSnHjVTFtiFimWb7QmRH1JKCm7tdmhb41PYyijDTkx7aaTYMxjXgh6xxzhh",
  "key21": "v5JioTP5vE91uMhttP5XWPgPRgAo84mrJQArtf4V6hKRx4CkmYPDArJN6d7UHjW8G25sGnAieN5FV6GK7No4cEB",
  "key22": "4mDUrB8pMPrBGEQhdD1gNNJ7FSxgv7QHrit7TMTZvjviwR9dg1VmvScsDW6hfvhf2YWnKLyw1A3g7cNW8FjNK3DH",
  "key23": "3Nsk6Y3MsiXqj8FZ7AYroQwapDnaM1211P6nrRY83Qe81a8BkGswCs3F5tmcyZHBGpcbyn9vDgTzxn67UHm78j4J",
  "key24": "2a7W4t1zd6cUDWLrfrnVS2dMpMCdhS1NmxPQawb8KPdpU96SRpcMevtTGw9ZD5pA4jZeWjnSUX9neojwVFzYz3wU",
  "key25": "66Ud2334zGTTreYu7zfMrndeLjmV858yKaVYBSEZcH59qtrVeV35nH2eERaJvsdnaRH6rRZBKp4XpSubJ4NpwJA8",
  "key26": "62JGzWuZsLuGzi2x72rXW78aE8YRQdPLLGB9DMV8cd1DQ7kKkBetCAAbLU9Jq5JJrYXiS2KLCdYL25VdLQCvuSsX",
  "key27": "cWho7DUHEBBrxaRw4g7H26RmcTz11XoitFTzRJCzQtxxjkj16yGStcSERLtBxPzh7xrb9XYSFufrvJuhKTKPjbC",
  "key28": "uDMR6JvJLFnu1f1csXiL5BuyF94WGn44LWhM62o9wksv2PtomJbBrGXPbTkDh4PVDa7tUizSDyJ8A8gECA1JmJn",
  "key29": "4zZFRfXEb3GsRUkz5GevhmiijxKKBs8sRHsoHh6iijr8bRYLHdriV8FzWgSkm9Zig7Cs1uywMwUptuMwxjFF1hkG",
  "key30": "BBEo1EHtEkGxMEto8cMyL6ttiK79QzwPKWQa6ibkU26K4Pa7EcQ4VnfgHZGumr6XaAnZ3ERJZHEFugDeSq8HUJr",
  "key31": "3tujZYoh1dbyHirKkgFYyi9EScxTzCiJDKTLv6taZ9ZKdHSkkcejpYLF4EB8552tPdvZaPPscgbz2D7buSaMdaVi",
  "key32": "34HTe4wLpT8sND6FHuxdjyHtNPALEhCdsiLXMZDKkRvbY6sVVR8rFxkvmRgShaimFf4VdcV6ExDDbALVbxPF2G9W",
  "key33": "3BMSFiyK1JivHVuydy463pNNAiDqfnAAg894DeWJbGNEh2eB3faLuvcER9j2a6a7dRfzSjCbNDkX1xcmTiwbWbJY",
  "key34": "5gn2ixr5unDuN81hZ3ummcCTfXVJhhs8hyRwnbUsA8JF6CaSxQvNNUE1d1QnHeeusiJyExMAYa6oweWZmsTEMik3",
  "key35": "WWY92Uoqb4KKxvYFb8B3mn5ai55D7FpdVBqSNkEjugFQAuXnqei81mfEJPP6mvKJQPzJ2QJZ7CCh7ds881ryZd2",
  "key36": "5bd565w8qzzbMdhBPgcw53p3XLEcBJg9DpUHMtWvnodeLFxf4xsc58rqXiTCa73eBTpy4Rjz3WemMz8jkkhVRKkv",
  "key37": "4RyaptAcov6Ajmcx4LUVtXsDacESLH41Q2dAM2Qn5SYXQtRYjsNRWggDNaZF3ybZzeZyTiSRbLc9AdW3vmgcfaNf",
  "key38": "3tfFsWA9joaUrUBQSe7pYq33s2rJxGP22nUQWTCmiMLEX8zfZM6KBHgBgcVcPP4rHYj5Ky8w44o6hthWZogQ87FZ",
  "key39": "5NVseEHV332tDFQRBYPocQVGBCU6qmFKA8wRnBsd9QpENX83MJbDxMUdfk38VoERAPZUtYfo4yc6dc1tYxqFTAKo",
  "key40": "2Jg7onjAcdPDUzbKHVe5xbqqsweKpo6VWSZuvquc9dorARJhzt9rcf8hrxTcMyV4ZxJ9Urn4jaDbzJnDpJoArggq",
  "key41": "32TL7CzFLCpWdPovqcjQuhxkKNJfSssoEiEdD6aiKbn23xTKZJYQ8jWhg2fcdiwmn2rXxjPvMHg8QgQLNLnyV4HN",
  "key42": "4u7xsuBPzPdJs9QuphUJgvkt324tyesbSTv4CfBPm4wECbQwg7xSBUbocQQMrbfTYYk2Kjy4VX56davPai9eTJfZ",
  "key43": "5CpqyuwntCknqGgrx8zYVbwErYUGCrb4rRtzKGT4kcAvsRQHgTXaZSKdkXJdv4GjgZympuxAG2gm4KQKMBgepVDu",
  "key44": "5VrMjZSYpxURquUbH3kypgBnERwkZnGjGEmEKLykZ9BW7Gdk31NihbovfFJbLH4gzGyAceYVNhtwpJ1gFVZLNYuM",
  "key45": "pjtLnM36Fo7PyduDWYYL1dGNKsWMgGnwVFW33EYvxN44ruNQSMvUukc4p4c3J7SWVdBDh78hKm7866oMpwYVHga",
  "key46": "4jfpXbpypbcFy4nad3Hw7vYgLPh8RoPBaMaUU3msZN2YjjEhHuoizb7x6teSBRibo8JjwaPqKPvbSrPwkQEYR5mR",
  "key47": "2sKkfGZx19SnkSR56DwYKTfZziPq7wiyVXMws1cyJ4h4BJ7M24W7XCEBHX4hJXSm1ZYn56stcMJMr2uVCAfeCHt9",
  "key48": "4wdvSXZYqyphXNmyWBKKWHGpwwpMe5wKBt65geuvSFRvai9fzmxYxaabKmgTxrBujnv4MEoTEeWj13AztxAFfQb4"
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
