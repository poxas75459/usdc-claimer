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
    "d9mosYyvfWopKx6JsENE4aJnssYyTgRNN2Sgx9URnMkdBvJUJWpxS1U5XTU1rws2oi7wcFxmc8rcbtXoJLeCtP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iW5LV5uvi69iymL5iv5BVX4UXHmKnueaM27VaTfenTvxqX5SStjh1PcnNkB2FQG8h66HVGEwcxfGyqh2Y688LBA",
  "key1": "4GaBEwn3ScFJQZ4Nj4F8HC7ZpkWXVwB4wnMcL6w2aMghP559Gf4VyBX7kuvfJbN8yj3Wvf8qZB538X4qiuroQgpk",
  "key2": "9DKuvQ4Q9U1Ndf3f4LczkFp6qbvusgk2HNtk22T63ivVfyaUwbdJULbih844WkmTnD3zfCC834KutZDRgwi4ZuF",
  "key3": "5DNznhBFrctT3DQ9xTnqsuQ8tjB2JohScoi6rsRYvFjHfxSbNCxZzBEJaAFgBgU88Cq59VJx5c9syzDkk53ibBY9",
  "key4": "5TCqiutEJDnF3L8kUdnKfAJnC4xrdoyHnZpDufQt6AqhJQReuM4e6phRqJkAVsqDhsTfp7dhjTTL1aHnvjYpYZwR",
  "key5": "GB3gyZXCAmzkT6QeVRD843zjutisxCaGQ6r3MsYHEAZjsLVtMir4na54gKZW6agQ6ymkgUW8FagqWFeeSY7krP5",
  "key6": "4pGxBsQuunHdAJU57VUUuzVRo3vPfQ8mWEBxyD4Pw4KbyEGkxh9JpHkk7J9HDhbBBGhtXd4tpBt3wVhRaX9dDrcT",
  "key7": "4qNsZHrhY5mXRtELgJFUhku8wJvVbNaRrgoedt6TQKxSRQ1kU3rsESjsFkD7HZn8cS5qhcdzS2Jsq2ZLtHVSsRg7",
  "key8": "2MBk8WeuUqrPBxGVut3cdxTHyYjE5ZxUN79EebkECNDyQU4s6rXrpp2HxdfiLUqi9RKew6obS3H3Dks5mXW1aPUi",
  "key9": "3Rq4E33Y5bLcZxhxZnV172fvbYoY5FVfVHjM7hgkH3Pe7MEy5QDJsNP38LPfZAkEGN9rXouzcU6JnkQ4iTPJnHFj",
  "key10": "4Sn8LbTfgK9AM9TuEt8DhAN4xCZCtbLgYqapVXUdNgTv9ywKtcBX1Y3j5fGU859VpdaRJ21w9MxBX3SmNGApWJ5a",
  "key11": "2j5NbreoHSFGf1EoaEhjDxU4vuPSbmz7ZnSbwb6Y6AGvKf3FQhDMotSY19FuXokbu83SjAurHLrJKieTit6cTdPr",
  "key12": "3mSB8GTfAXCjkwUV1Ji1vegTh9b6GfwYbfxQEwrFWiXwua85ubakHcrmWyPojAfKs1t97xDHZNiJcCnSUWNCvHks",
  "key13": "3izLSTE7xXHCjNgweQRHfYZZsfRGB1AFkkMbh6ezrtkqWNynCQikXXheWDpCHEy6au6Vjk2A1L4jTwWSbj7TaJmy",
  "key14": "2BdbYs6jaQfMku6L9iQiUMzbjF9iqRdfzqaN3xM4cGqUDQJViNHUFJaUZNHrKi7eny9VmSDr1K82MpZSP7rWyY6H",
  "key15": "3yVpnwKuUVLRQiFmYMzVt7ZZGyNREtp8scVUvbtJUyNTWPszRTdbCSS1E4PeZf5ko12ebCrTyPcoLBiCZymvuS5n",
  "key16": "3Ht1YuCFWo58C9fPYfF243s3hSbtH8SqLADkSWNXKKRFHn69VcjqykoTXpwpDfzb36fpgEi3DAhiSy9zBGiaysZi",
  "key17": "5hgenQwfZWPQrGRQFE3fV65YEqdtGqMkgg2MfSKu8GGpzfh8r1DhUu4cYY5BGFAcekmQkbgdnKhVbx1wchzgsQPM",
  "key18": "3ykK3ZhwBAtC7i6ebdg8Jfrufre75ms9y15MCxBZnFve6zFGeuz2ZG8M5ABJKnW1aJv5VpKBPEJ2wHDWXTa5Ncj8",
  "key19": "jkRpe39ZrZHdARZPyFatuoibbe23zzRJ6eDyhyEypEdFrosjJZnB4pxGyCnC5o5uhLQcSmj7rusjb7DUtFt8RkC",
  "key20": "5XKpr8oB8eUqk8NJ8ZWD94M16SHhU86uGdAhA7ZRLgq9PhpW7TjUsaXndKFDhnVDoupvHTSqXrBQfD3gy7PuwbWv",
  "key21": "62xy95qogh79hobTafycQmji9J9Lub6ujHJ7RuCDpCFXvftAs5bbQ3CBvVRxHwAFyiFZNYuz7k4c4zsGj4TqX8YQ",
  "key22": "2n7KbssogTPLi6pXZEYShTtRePxQ4y2TJxcSkCBwnswS37D1Qaq6dsFs9ggBjZ8wntDGuqde75siQpNPFxNzW41C",
  "key23": "XoLdPUzM3JbRzFpTV8RPgUQwuKXasH6AMe77o5xEY6QN5wQSRnuN4uewXzZ7yXYiUo9NubfiuUaGd4wzBTvDYN6",
  "key24": "3uzWvQKA4h4KistBVayZUC9nF8nD571K4ygn7rwDuLhESSk3ZxUdA6P9LM9aD4Um7ku49pU2Kg8P1mE44FjhzkNd",
  "key25": "2FF84ArffYxMMBkUpuHvYDvAP8EpYjBEzYP47VE6jLGTxkvxtK2E1iK2NvJiJnk1GXuyzpuBY4W296BsMPMX4uoo",
  "key26": "53EVti8X9qn9jCwdGWZT8GdHEg2i8QmjibYsDrpcpD59YNhj5KCbfqWq1kK6Bnbnu6hsiKkvGTGToWnE4UC84m9H",
  "key27": "4Vso8QVDoiZXM5UVepTymz4wmuPRp45ZcjhcRhLAZttp2uGjRZMJLayrpcVVk26L9yQh8yTF46Si75LdZbycsuHy",
  "key28": "QCL8FwS1FaNBFVbP5R2MJvQB7ZESQyj2Z55DmXQucME88HLifSatm9R7e32TJrAD5Xco1CjHk9JJVPAx13CZQtz",
  "key29": "38FXC5h3WL8j9KkgBVrQT1z8b5Ygc1H1qRQAxwJCS7NSsLr3vXWJMqVLMEogji1ikETU7j95QRX9huzzmPVARczs",
  "key30": "3Lnj8L3WT76BJemYZDBYq8LX5EymYVcV19YScm3uiRfootDZFyzvY9iLEqKvdfKxsd66SXYbtDXBCwfMDT5FPgFq",
  "key31": "4xLoSZr4DQ5N1wMzstzDDL8gCWRUfCemrEQZmqg1DaAwRWvVCS2MuvDfZ2179DN7V1fC3CQSiVjyYwTqheC2h1V7",
  "key32": "2rrPRuPX4NaaXzmBQXNtLfDs8uFevxD5451vfmQ5R1NSvf2Se8gc1JuWxjvt1Pmm4hFgCNbKET3oqcXTnspkgAjG",
  "key33": "mCzdMEGwNbcPvbE1jERRKhpBiSD7hKvMbo55r2gcSima1ToTi1ZLCsGKjq6NFWE8cAvcM8fXTADeb4zmJvUvQS7",
  "key34": "3HaMyjoGrpkpd24KmbWiEPEMRNJoAkHDnfq6NwtZ2jPRThxn7PnH3voEPhbZm6HSFs58PhQB7FrjRBL8hhyeBCgH",
  "key35": "61CrbAkaQGKkimAYP2SKhSrwPHfFcbsQgN2ChXnmZLqCvv41HUiRxWwb9AfWqQmEHNZJR3cprDdJWwu3yVT945rC",
  "key36": "42hAR8j8PZVyBZrG7WtiiAENorAaJwnwPHozKRUcqKLNmBy2WrZwAqYFsW6AqiXDQCufbDwQLPpus9SD3dTh2wjj",
  "key37": "5dqn1nTxyBB9mBsDxizVgAX1BuypdcRHamGw2tmDNT2HUfwevBubaKENedB2MjToFbieqSfEFUzJ64p2miZRfano",
  "key38": "4UAoZq9FhbRsRJzCj7D7sMDyV4NGVEe53AvFLf83WXnxChVotEU6gucUVJau6kUqQWUQfQURVkMuitCJ2hA77ade",
  "key39": "3KENhGLBPWmBpvFjwyL5wT2ignUUmXovnbbb6iCZ3BYWTNDcG7XLzcojV8tbFqDsrN1MYRzvDncmvfoTcwPbrkR6",
  "key40": "3Vo8upEaodqvtHxN2tCiMysqaVvnx1hVrevCKtnUF8bejJajVm5m66yZpMsZ49ijkjJ1uJvmAKTzVygRFFWZrgRY",
  "key41": "3LpRzwvotRyUZeu4Wgg6ueNmJGPh8ZAfmA4QEDmCoQfqYEKgKGoJFSA9e9HzpFTWD2yLbMSzWxR5jQ1ExxshKHMC",
  "key42": "4oiiNG5UGGMuf3D53mBMgth5uKYRm7p5MsMLi6XjVvJE5m55j5SR2nmzViBwvZME9n7i4GhM1pnWWrqsmuZpsvGy",
  "key43": "uFdg9Kg2VVq1LJKT1bE3JR7iXmnbvAc6UoKYDHoPpjXK8DiM4LP2enCAn7g4kjVvCnPZD4Xcn5wyoim68Bff5nT",
  "key44": "3sjqhVN9EuDJfbGEZYjwWgtd72ocu9Z2umQ3GC6urUWWYdJCaKroY6r4rJuTvU1Jd4NwU7WmYw6aXgzYjjdt2wNq"
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
