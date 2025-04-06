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
    "i5yRErdeas6c3j2XRLBXSE4pDvozoPsArKJaXCGoeQqrTiUjtBxEN5NtsfreKDwZKCTY3xiV32VUZv6UdzTY2Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42prochVr6MJ1ECrgDdb7LsBib9vmaVYgFpafBE7Y1kLd7usQjfUWTQRinbMHCdcrTxECHmxy76ujSkDs2E9vQ5z",
  "key1": "2kC8E8b2nZHt2YyUNtdSXZid2qKYTriypdKvaqcev8fKJXRXseeeuinL43Vc6T8Av8QdbuJSA2UxPdiBCsaEwVZy",
  "key2": "2CqrvjjtGTFPafDPkCFhvHsLgPN9h2mgJbiW5ncboYMUk3Nn4GS2RjucKGhX8ajNJvyfUBwRoHNpKpwTqF4R64Lx",
  "key3": "49t6k1rZFkxF1SVZTA7P5UjUG3VnqKsek16kqwJWZYDp9tE5VESd3Z2edzonW5YYc8gZyfytbezt6TnLys2SzqzE",
  "key4": "5HLUa6CHogcF3zvi1DLRhcpnF9PK6MpgPcw2C6pbVZNF6cRrsvqvk6KhAtRzAojzRwz61gAx7FCdzPobMzL86njK",
  "key5": "3J9v1ckxBdtW9khkHqSFC4v6YbYwVyXuAUxQ8gZotyujJtv6HjcKz3ugjYHw4THgwZgk9EsVdradnfmeBwBYSavj",
  "key6": "5uaRa2CwCeXNFVS2eUJEJa5egyBTbweZv7MrRfEA6fitv7DLykycZPVzrcDbiRSGvEi6LimECNJd3uLryV8iKTNm",
  "key7": "y6n76aG1Ffep9dYFNkUF785YFSbM7UyJ1cxEPPV7nAxCS8fRXFGBmTDmSTFpD45djesw4H8deV2jBKZdmtTC4xr",
  "key8": "5ypx7xM5VJSDA9P323MENCtBirYAptcifN1A9PE7AbdAUPphbeSVk6xLhr75ybxXcX4xhwsMRqAvdFQZVb1Xvomy",
  "key9": "63ectyjHA96BeP8gaEbb2N9ZomV3UmsQCeTXEeGhfisnTNopmg3PDuSsfdVqwEoEUvUCZ3aR1HW1PuH4UX8mCXxR",
  "key10": "3trPXce7LTAdqapZfNfw23s4qqoMxLVH34KqhM7yacfFDtNChffiYDpX2SH4pivWF6aJdGoN4KxgvtoiStGqi1dW",
  "key11": "2kzB4c4CEdchEBB978H4RNDR5GRnGRzHmQJBi3oQP12S7tSDf6wahRJaxE6Srt41S6aNb15SxCAyugE8a71Wzb7r",
  "key12": "imwJEPSeZ7TDu4Vy94qGbhKZac5UYqe3YsVAmdY5WvudUmdgfsjUUgbnMCE8LM1wtVsMYpWBx5x96f2Ww5VdF7P",
  "key13": "4twm1nWgbKpfBQ3B7PxtMqP6WXudbQmWjJGm4NWdHttzoAHD5HzBVtwuzKPdqLgX2NhibQ7fUdNnzrUSzxTd2pKj",
  "key14": "yND1jZrd7zJdkEBecN9L4E8SzmWL3hMdVZs9gJKhqNM9GH8w47L2yAdWZDhwSBZH7uBULsz8ZiGrqG3A4HyrsbD",
  "key15": "4a4SEqiUn1aBPPZjWENmFqSyRncua7S3BZ65yrdCrWBVozyVk18EUNTRCWXGpwDwP62RUvB23oGfR8JmWNYensWT",
  "key16": "TnQdVWP18ZqgwagCqqtiwLQ1ACMWNRKd2G5Q9KJS8o9oR8nf4YVdL2RXmhatfV8Pgrp7wDxu8dgVnDwuNV18QKB",
  "key17": "WqL8LDdPnurRYCDM1geVQmZaMNUXrMzRD47H21nzeo4ubVrLprAUQbQeeuD8HVkUbr2o8cWAmkpx1MxKLQCAFBg",
  "key18": "3BYbzJDGLMfwUQEknvXANoVQQ9Q8tgMBg5L8y65UoNQnGRDFmLbgZf1EiVNGxZ25MQGhK6KuQkPk93TSrtnmWXHk",
  "key19": "4cbkjsNLX1qxSK3rcBLWG1j5azP3EVQr33j7KCnCW8VaDj2EGey4toWCi4Lxx6fBdEDkwq7bcchAsX32yihoKUgC",
  "key20": "ij2P7MaqiYnfB2M2bM4AZRLoVy46FrUpZHjzgotHRc6Fk1cNb2FhbPgc7BNsDc4tYUADyXFJ2y4e7TFt8craNgW",
  "key21": "5nikSEtcSiBSXJGakZUaksmZGRw7AgJSZgFgauPRFLYRbvvJ44cpNi6a5qng615GmfLpmbr2TGFsDCLiHKqFNgRH",
  "key22": "4Pz2odru9Uh5SRkwp4UEUPpfiYBH8Gvp3MmcP9jPG9qomxz1DvMMiEUZgELYGS6LTcuMH4nfF5bmnnjCYTMh8pPd",
  "key23": "3Qmu44vTer9SUQyGyBVWaXyks4Jyy8et7Hez1HTPwZKxEtFqgtn9Ro4bFWykwdjU9p9ZZSQSn6SW1iE8oVpUTWvs",
  "key24": "3PW8aS7WvKHYUSXUtbzM6KL38LCGAdkQEVc9o2r1zzsHuTFicqEpuWcCc6qPuKM6vk1Kote2aYFxa1D5w9wgNmRr",
  "key25": "5dAHrCAkgDeejMcK1RgaiK2nudMT2Fuvsbbp4MStH3tdWUPnfTB4tfD3E3fM63qEXraRGBU9HnWhsSeaMst51iFG",
  "key26": "3uMMPL3XRgtWwSW7V1uXCHTPWJ6oTb66eH8HPvJP31XxPcGk8ZTbQNppgaLcP9YGeZA9QShxfrz1mGvrXBF76fEU",
  "key27": "54p16GxLtsmzwzWbga4WVowJ1vV1638Z2tstgk6rK2CCMwjkZwrx23HmFBvCXEbei1vtT1Ui1Rp9vJxnqzYVqDD5",
  "key28": "1Nmwv4ZwTvTYGcCrswV4PQcSE9HRZDZTza5CLKFs6rPVyA6ezRCikFyh6kDevNnWyVMTYGLfRKRfeZfAcLidEdd",
  "key29": "58mTHsmxkHW7tdS8iMbP2Soz5PECiBFpzds5Gb5spyzYxBatWxqFDZwwXme2r2JkPeYigCrpk5Ys7H9E1vbjPtR1",
  "key30": "B2EZJQxLZVaS17gVACp5psCvh2RbY2jbxqqDz5prXyMh37UZxPFw3ffnxMEoNqPejuJBmSi3z8hRSAr9Y2H6yUT",
  "key31": "54NQqKM2A4eMZqzwauHoQdmkq3AYpNpTyT86Y8ss74tMgqMaLJ5eYVucAUgZBYbGNz8NqhunDTQzq8UsudgPEZYB",
  "key32": "5tDWWZaFrorrNfpK9UMcHyYQeQzDbbmzz1q9uXKg9KToL9Fr6ZBbvBoXpufvUyQs1JTogDjqVmeZUBgMjWBWz3Hp",
  "key33": "4TW3jR8NibDZ7k99RmmaGAvHpfMCqHTmQ5UTLUroie7DnYzcuhc1T63PSGv8t8gMGfG5bcCtibekRGzb3vkos4Ca",
  "key34": "4D6LffL5xySRbNfkYKuBnZNZsFJMJEcnYabMxMhf2H5fDK2xXPtkmYDqkEwTzShWRkqxoLmg1MLaCMa71JCFZiDE",
  "key35": "3uHTjF8ynvCh8kapSGSu9Z35fJJfsciTGpMfAzPzWSY6i2drZVkTJNzafJd4XkULXtS6pE68Yi8f1Stw6U4gccUM",
  "key36": "4VJQ7xyDd66eWjedHUCWjcQCWnW8y4MAgJoh4VYEEid35wSwPmnPB3Ga7F4yBPAEw4yRnWX5A94ZV4w84FRvpAZk",
  "key37": "egd6UcyrxsnSqmM97LnmW9MAUfi19cGYnLY5opz5NfFzerUt6eXh1pWN8sFSiFcoiQ1uArvPBc9ib1V3cAqVjZi",
  "key38": "3ENZtGjcgdUkwNyNRGe5ncB1XYvWCf2DfuDz3aShjTdGwTfuDyjvGRCZQe3ud6t8YXQNsQNSvPbe7EDG5oY1UDQd",
  "key39": "4uLZQ1FnAfdJ6cqwE4ZXcTHxHJ1GyHbnUdqiMuhBdkq1wUY7VLobYRNz6ZtW3Q1j32bm2cXvpkzA5fX2i4ovxTxW",
  "key40": "H6BRckjvyUoSeH8msgMrGrxG41Aw7985KWwzKHb2xfwy6A6SfenqadxhJtsYdRTUx9pJN9mJa3xZtogWoqz98KP",
  "key41": "kWetb4Aii7NTTRTjVCPcXNmRuRTUpnBWUvZxSRX83QcoK3cKoS1H5SSqnsQtQeyYhFY9fUi9fqbiFZXPEye9vZx",
  "key42": "38aTmBanewHkMuHPgKbbuXhQ6yY2Mzorusno9WkT1PxkYnqxHaWiYp4miMmwhRgkHiLckKLie1V3rkcGNoggVWAt",
  "key43": "4VkPWeg5y8C4g4LzKmn9noSeNimwVh8jS2HrrsvrAGopcpn4bBkm9WrzAAN6xGahw1DSWc3dBGBbPHpNVqH6pWm2",
  "key44": "5UNWYP2ch1bNoveQ6UDHzwBv2UXbBeX8PEs3ud9mTFPQjUiAa4iH2UtZSdpwBR1s3DuPz9UFovv4NCKLdxCWXrdJ",
  "key45": "5E4XVi7Gg8s5MSz46KskdRzqWdCcQET9Y7KMbMHAePDz4wo4kxHx1Q89YMy1vZZ86ofCvLkRwQp4syJu4Ma6owC5",
  "key46": "3oe54gfgpJuyvjsz7AuhY2QUC2guQkRDnsJtmGiULQSLFJT7WoNJFRQ7xGzZQ5DrZZXGceYGHVoc2dBhbopP8pn3",
  "key47": "5q97RQBpKZTLisHUitUbXQoQYYMN4jXpLRCJphKhHfPYAWo8J6n3YkHQ2rmQFedEbeiNAnYFvFqN8Kg8nYfi3f8p",
  "key48": "FcC5n3k4j2iUmKyz8PKEXQK1JJBjhMukTnwVZYFBziUWvjuCsicaiPic7aqCxpixT555XJg81SYzAefwmw1db8j"
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
