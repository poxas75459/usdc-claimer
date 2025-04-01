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
    "2gzEnSBH29UJR5PY3EyjJetY4pnk3yYoXAR3wfycGC5hFGQSCT47dbJkS4eHUXMy7eLAcCvgEXRoCcjYEwAgSuDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J3112Q3Bj8NbMuo33F9Pu9dcLfL1avionf6XtKv2WH8zp1sihmGnYQgGRn3LaNkeEkngNZrA94SKUEJeWVZ2aEp",
  "key1": "311yV5mkKBS1thgYp8KKL2EU9Wk31juyUGSLkeptNAuWqJMdoxebzGqwXrDm6zXfgD2ncZwFq92uWvceYySVaaL",
  "key2": "49U1dhs2hXbFYYmuAFvyA46NcrQZE3yCUuTubk4oXBrGbknruMydKKN1Fx1WLmkCnFmFYws6RLbCMQTDYHj4adQ7",
  "key3": "5DG7SRXE8ctJNsh3ZVw4S2EvXacxXcCk2JZ3soV7QemXjkBsMjaJk99VvCjSf6Vq4miG9W8jsoMfsX7SyXwvQTLv",
  "key4": "55b1bqcoP2PLxKR4eT5xeMdGMz7FGaP1cDAd6hPvmG5qhnDxCcgsYhnaz1rWunDWE5PonJY3BHxkBfh2NBk8yaT3",
  "key5": "3YU63psC3MhfMHgxdVbaj1wQ183GizohitrQNd4QXn1kVjHxaQ7fdPYDbxL8XVa1Af72PaubGCRop2KtuMDKSqBo",
  "key6": "1EGhjKnrPrN3H6aX92muicDkF7CQnNQMB6J2gL5QhxeA4mcPtrTU4gPZCX1Bt2T8qQHz9CVexYiEBCwoejPwVXD",
  "key7": "4KmLoYSkhpC5bAMa9KvtHW1B1znCmcZyxSHoUmuFYNTghEQFvHDXNJnEsu7i91inT6eehkTQkETLA13EmEk5gogh",
  "key8": "3EHjLeuHkcsZZQMz4Z6fxcHGKkCMzCwg4BbPzKuLJWimgGJuFg74z23n5kiejtzeUpaBL5Mr2Lc5CKGRQnkWt52P",
  "key9": "2WKNwgPh1KkxABBfsfY46BwntCFznEmoKyFj3cq7VnXW2v216kujTk8UcTWJ7qnaaLDG3hqWdT3u6SG6RK73QkFp",
  "key10": "4Y4z75wtynk86HQ9czwquNjNwFiNyV4y75jvVoGgGH5CdgpzWi66Mtb6UpRGkpB2FDNzn4YVCkaW3m7aSPGV5kws",
  "key11": "5V4ffL25xe9wKWM8Wad78K5XAm4Gc68WZsFSVLJXdRFY3N85DuMHpc5hea33jVWaymcm1F1qi3hrqEJFemZtUiGc",
  "key12": "2PdGN8hkSoGsRWEZ6qPSUeSqjYse5TG92ED3Q5cqFB3pD5wjCYxovQr83QabgxWpKWzF3ynwiE2LMKYrjz5oezNL",
  "key13": "5qaopHu4V2A3aaXDhBhNdWu8mt9gW49u93HPuDhYspMqTBQ9sq1c7HXLs84ju3qq5kwCNxTBuEzbsijHzKGZ3vuZ",
  "key14": "cgfu2UzPso3ctsW1RR3RRq785BCWLFhpc4KdW9eTFmQsgLieirE4XatUWmZHSuvqRiG2nvTpfW6eJoHeuPEe7f1",
  "key15": "3WLZnEjMevdGgHPca3NDE1wVGmn34u8BZXpcPni7aLkzvx1xx36DiJgGTic6ngBgZxHYeA1nn1WZdMJb44KXNdRv",
  "key16": "5ABABGEa4dgGS3KeiW59zDMdGLxU83emksMxfMWoYFEBZ2CqViEHqoDssJBKWvkXk3Jrrcv7yZQHKEdwUxUWrzXb",
  "key17": "1de6caLMe6qXxJKtomH5m5Cv6Ljf2RxJD2dfrG5FTf9i8vW3qniYgFQ3WhpJrSkHyVMzXuW3E3nYtZPk2pLUQ3o",
  "key18": "CCyn7qLBFvnJYjC3P72nWGNNxrfSvvnMc1JzmBRo7XxULUaaxYqFwziq6buTgrc1vFreTCjfcRX92njb6g881A3",
  "key19": "2VYgeCVpe3WMg7htY9eDLCJknTtVvMTodyf3n12yors1YEc62vm8oJzmBzSdwmT7pmfS7WGJhHF4XBQXxEY7G8iQ",
  "key20": "4pB8SnDANPqB6bBqNCcgjWvmZVWnAJkeKrAknbtQSBy3AbJ2B79iN4759JLruSDoNVRzLr8FDvXAjZqe9MdjtVst",
  "key21": "3wzYEVE1VNccK6TQAzR1FPa44UCUyUNDUBFKXKAfsKiLvxjDSLguuGDRwwJ4Y3yp5LuFeZL5TBdpp3afmbbqvqcv",
  "key22": "4csTLMkcorDkSAFk6FHrZ8cFq2PLPrL6U1NPUmdsEDnn89LG7Xr1ugmdfVRd13PL5CnqGDkF6bzrHF5uURTngWdT",
  "key23": "2g4W4oCPSrzFmd28Cs6qQDaud7hyeAZiiDqRVnPS9qJwEPqUezUG3KDWPrtowgQJTirLzZGMeTPogZTP51hi4p6F",
  "key24": "3P5RorsU1EQGtUP9LUCgkAWo2zDfoztsfLvBy6aMTSHrUuCJz37BcdarLMnuPcsbWDGqJ1Deb69cLt49uFSuAX75",
  "key25": "Rru6sJhrXmS4MAWRQTt4Ktz4C2hCozs93ETEoSaZfmnzZYKm2vtnT1mooAcHSucPoQJmMN8Vdkd1oyqQj9gm5i2",
  "key26": "zChWML8Nt9vjjgRgEPK7gJsnvDnx85vWi5sn9BBRZBifHPSrDStD4bb1PtKzBGbSeoHjLtpNQzypK9tehdsf9t9",
  "key27": "2f4y4trWyrKrqTRawTSgdCv57tFZc8376egcLpycR7fmUH6wsCzR8nDhJPatp2DV69PkSzvxj4jWRKYsoANbsawU",
  "key28": "4mNPpVky2m9JkdzkkDUoWY4m3kfdNjxQ3SnX8JDLq77KppZC7AhjBgsEMm7gratkobAUrfLy24csgUhESLgHjYKG",
  "key29": "5fswjpeQT1yz1XzA7r9PLaLocuKgd84cB3qjHNCLetzJ92EpokmUdvesuS49uDEKQxzjWvpDqCj6A1CRNszVNKEL",
  "key30": "57QPUegGtBvAKqhfGGQtsvdBvZdAAY2ASspYLZvNSxSY9KCNxLRsqM1AhY3BeP3Kw3f1QTKjLRniri3NynJQwkuR",
  "key31": "bVNx85EnxgqzNWktZNvEft14X554ut5VYnpzxDAmp75JqsUiiJuc5SLb49bwofE5d3wVTWT5NAUUNH5bQptapiK",
  "key32": "3dT22DBj5NqJeHX4LayKTGsipp69QdF6NXou1EZtSyzSmMdDTuwUB1a42jfBUPXBAgti2GxPfDY5rhv5x9NmA891",
  "key33": "sYFUwDfuwgBtiKzHRVYxmj6P4mHvGLtMeZsSiec8XtaUD8Poenqm9fxjwejPNqm588pcJQJ4ozVJhHkc52feKa2",
  "key34": "28b1in21JkDVZm4oyWgz5eyo3GdZKagCpybdgiAZsVGnLZUR72ndo471Vg7L49uyRLSq9sud84RX38iXCoLBaG3q",
  "key35": "2vvk35pcxu6WLqocK83aqoZPPHCLZRAe3FZdEuih18VWV4muENZNvWfUsDANAo7U2rGVbxo3eEgNzdJVisngPKK8",
  "key36": "2NXHPBEAsZ8AhGVnk74BS6XrHLrpqRDCJj1GGDbDstR8mmwZFDM8z35bDD3T6SHSf1BURbPC6gk6my1JDL2ze8as",
  "key37": "4paVk8rLKkkYhty7Yfhs2zHTtx6cPBQp4pCCMZWu3M7uZNZNJdWDo8XcmaCAq9yjUfY9anEgmhAJixHm3gbWuMkz",
  "key38": "1CGu2zxheVD3N38VRXYCQeSnSt73VxAkoaeaZCZPrSfJaLQNHT3suKLCXChgnz1araohBMZz76Qno5Vq3scAYrr",
  "key39": "5RKMBBn7Q4AV1WRnii6wF9SAXpTRVMMwYf3QLyeL6GcTu9rHyYkDupYvoGctdtiMsRcNhhHWat3rBXhtoBYVYjgQ",
  "key40": "4f2Pwpb7NBVQn3BK9Mi2FUu8XGYHmjPxMCEvvGwoWt8PkSWT5irTBUSG6Yf9CicvUJQgNUtj6zTwh6SoHuELWsSz",
  "key41": "5RnDX5Z2aCgiRzi3AYvcbZ88Suqb4ffCttTpJ7dvvizrG4NvpAKMbodKs4tJpUhLQZcLLueXMTPj4PeuLjT1WdMj",
  "key42": "3K6ckpGbXgxZaaxzMLWAs6F67emyKMgJV2g8ZFzUeV8uxqBvw11MzJ2wUWbG38uoCxo9M1gKvVAbfwVBGAYHsCTm",
  "key43": "4N6LFbiaNdcpzAoEMjBdp2qmDwiMNtqMHMNgcHtqzxVxNxtjai7s59JAPhj1QtsQvAmLyupPynmL6DjpHNZnRCH6",
  "key44": "2PWxs6t7eXD5KYu14GKEc62RZHJv95uHnZY9CF2b7WkHUypqTGnHtwVoPtnG28eRXpykkUneVZK7V2StXGF9jhsQ",
  "key45": "iCVQmacTUaFTj4hU8P1fcSNtDbUw3QuhewCGomMZeXf4ypoWrYv6dGdNnxX4cocQfBfnxsppy5Xz7TULrhozM4a",
  "key46": "V7yiiuhT3Uy6e219LDzseW3KgCx2x64evBM9nsaXaHN2sGg6Wip6eCxHPiKBgzTyVJQpR82H54UBLuhKD3SiQ48",
  "key47": "65kSfTA9N52hreUbZNAiWUJiYV8jfwhkBnAdzNHoyfecXNXytyw6fspSYLetB7sKBLv3mrAT7U3eH6yfqo8H4YaJ",
  "key48": "2KaVMbRke7VsGiLp75UqgdHhs13LmnhTHPdVwfwikbnEAaE26BhgCp1V5qXPhEc7Roc6GtcbcpDUBZaCRWidvKME",
  "key49": "3fCdSudSP5vDvzwoeCJLqbg7zwzXSStqML9LVHZsB3AHkhmcC2KKTotzNPMquXbpzt63GC19ByRys7zyQ14EVu78"
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
