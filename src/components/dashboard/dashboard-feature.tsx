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
    "2DVczh4sbK5wbwJbtkZyYjPXu6v8UetcUc1mmbAQ9BL3McWDyArHZhngwHeJGkPdYtmQvScfQrGYnub7e8qejKB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RbthYdsyrRfVRaFKhYUU1cbbcSnfdvXeBhM7tuJUB93eF4KxR6xkgjcP2TV1ujywypbrhCnyt6Z26f2NMh3vJkT",
  "key1": "3PYXcYVie4TnSrkftRftgS3RQGNDxg4w9DtqLwceH6YcFHVtEhP7USxpP3prhiykRY9aCd2Lm1LJwY8ypBUm2qEE",
  "key2": "3tfW5SFXph6JQZ9o23GVNdkJHrkqV34NHnMzpG37KMgPhFBxrShtMDZx5U5Gje189AVJ27pGJAUpRfdPihPtBz6e",
  "key3": "v9SbX3Uapd51kXhmgRhciDWmw6HkADJJU5rKmeAW4pHxryBdDjnztMMGNeAJDmZ47zSNEkB2pGpjQnaCfkzTWdm",
  "key4": "4B4EBbEakAWUAVyAZLhJRR2p3KCbtCYK6NPtVnB1URhEof5nLGTa3AR7AKHrGtK9yw8mnGdgLbfuFhv3hyxAC5kL",
  "key5": "4p19cmQ6vZZeG64pvZeFkggCoVVJ9wRVFkvSL7TF24dK1gBjhhw6i6sxCpizgqNqztLJanex7ygwpZq4EbxtWrsT",
  "key6": "4jaQZmZzsTwmcQmo1g3MS7FvkHag8u4nYrDmm2xyJiQGnDny4REJsSJVM4YRryoU2RjvrJq2UhkyBHRTN4ibYeX3",
  "key7": "5XvGUo2vwMxR9x53YYzwUk3QFLbu7GvpR1oXyet2QcKLgKTDz6itZEmsTxPxvbxbXa2kHfufQkjZJtU2bsYhTSBa",
  "key8": "2W6jA5rtmAq4AZk1qQ9oy4DL2dRvTqPr3TNaehSsy9RDrDQ6Xm8KQNenKXWonEs2nf8SKxDF9QTnQo9VMsKRvWkX",
  "key9": "RyeM4pAywnSXkhPCC1vn6nQQQVjTULWxMT7oiLKaGeofk6yygdqnjuEUskYPbUBgzVaXSCq97bR3n5UYHPottK7",
  "key10": "2XBQ255J3n6VmHLQZ36pAUPyabU5fAntLqsN4Cght1N5qQQnFmvrebURPGmDNde6ZYSQoUKUuPdbh1sVPcet4vsE",
  "key11": "2H9qr8Lfd4fRNjkUuBAcVz996e9enPuvfW2Mab38ze6viUKzzvGztnELrugRY7ryCoie7kTdv47fTXGozet7XBQb",
  "key12": "4wWaDHrkTrfzug5Y22JDwUL9a4SrZXMfSeYKFhd8APfRi9e4UDCpsAv26CJa7nrASo1ZJPCaLdVjssueNP2iTK8t",
  "key13": "yEv4AT6G53phuGe4SW9wi82UaSikVPT5gmmQZwok2JUmFMYj7281nedtnXUDdkMaB1cWT5t4my8zQZKC2MhcAy5",
  "key14": "245dXz7869ShCs4jh7mwFiX6ubSgZZN9gkfxycGLyrr3jDcj5Dw1xHTKuyDPvj2yezihGM8WRYuHDtNEWqj5eTcq",
  "key15": "4tCuCXpyes5J2mewqev4co7xuaf9ZWtCygdfkS769smXioPCeLQBHjAFCZdGwYM3m8DwA8bBCUUSaorKwQiyU9MK",
  "key16": "3k6vAtaCzvxRWd81gbJqTov1rJc3quhHFmTMd3517mw3HmNkBKMkE8pKQ2fp2ZAko2FLMA4gEEmbPYZaZYdLH13i",
  "key17": "42yHijDjA8fZ23RzWxddoGFDpC3kTBdmHPYYwmW3x143nJDdu7tjTpRR9rVhvzdVzFT1RRDBJTHvZkfswducsNvP",
  "key18": "4G8rAVw1YradQ9Y6QNXLNJdJ35xwcozLgG9QnrdxeHi3ViSrmMtrmqChoZSjBCZcgVjRzPYNGjg6ye4NjNUCmiHU",
  "key19": "66BWzQ1xhqEXq8bXkfRQ5yYczf2JceQ9jhQTP3pjddEiLAJToGud84sCTh6ZFkjFTuGeZirpARXPtGQFu85AVfGG",
  "key20": "591EDevoFwA6atZjpmZh4dMm2vBeTejpWMwC1jK7Q3FBhSk29tfS9mud6edfqKwLWceaXu436yKcwziWmu5bMUUA",
  "key21": "4DBy55wLpYSck5qMjzYPncAYkRfvRHewS4cwsJSyVMetMQgj5c9SSuPLBHhwffqGcEUfsLe57zJt2Cz7CHESdrWc",
  "key22": "2xAz9moWYafgrtVKSWTg8dukocwQo9ywLA47ywHa8NTTWG7NXhFXZQZMAZgNrHFpRHZQvv4RrByTaDGmbbPjcM9n",
  "key23": "2ny1w9RYFrM4Ey3bhnLwstWdQ6ZproNhYpsd39kkJjf9UphQtyF9GoHYmSbSP6KY1etcxWHpQLSreT1uKmsjvdLp",
  "key24": "4pSkhJLJKeLRUP2UD58XRnoxWrE2F6FFUowvxv82LvEKCPTgJG9GZMhbMKbmZVSPvTWapc5bjLw2YhuerT2LjbJq",
  "key25": "5WHJyCNFGHu11rfmy92jjM6eYPs7cMujE5eyCFSm6CAKaXqCZTt7QGt9ok58BodbixeX6NxKzVekmKoqrwWHAWkG",
  "key26": "4bQgGAP2irpJKhZcjuShy4WvLdNax1dAcMNx8sjRmjk7thwaqa2Xdt9NPxJWmNN9Ce3ip6NCBYgFig9fijVqnWyB",
  "key27": "2zcND453jANSanrPEMpdRUnNztX8zQKeLNaxNjvfbQdwpXVf56VeinFc5jktKKSHD99hq2BD7S5qsWpwDK2LU3Dw",
  "key28": "2p4uBvW3mVfVuMQhdwPc7krq5H5aZdxdDkF9VNChGteVi5YYuRcfqpnqViTUEiHwrhi5rjG5uftuKMwoNVBUFchk"
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
