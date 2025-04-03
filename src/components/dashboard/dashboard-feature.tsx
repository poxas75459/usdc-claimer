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
    "4akw8ymscdcxKWJFayunCML7A1hfjHYvFjZJG8stqiBxoD12ZadTaRwaaUSvJg1MYiXBx4SH45iUKreVpSyib6QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4LPoNJfqygLmmZucA95mRKEBSThV2pRCHr8uMNpEKLcy5qWoL2rWGLCz99Uvg8zzzEpxdTobXcCkACoyJKXanZ",
  "key1": "2xCYVtdnqtK8Hf4wZTChxjqo1YKDvn9tqeU4pqHPZ3nFWrCEihQ9adGJQJS9aTARyFNWT2rqbsj4R1kNDY1hK7eh",
  "key2": "5kBnaAAXfmSUdzrR1UQ4UwWkAYWmwv7oQ2UPWxYSyoyQKmeBqd9BV3S1x3t4i8EsR9JrSE7wP5mn57r4VC2NebsF",
  "key3": "4dcGf4nXNxQRnRmsk8EzeNPT7pXJZdZoEN42PFDCKi9KQ5KgBYHTKct2km819uh94PC9PLbaiqK6Lui8c7jeyt9f",
  "key4": "2Juwxziw9i1A8KKHkiD4qDYXib34ee4e6JkzioDSoEJDPfkgHRzHmCjh149tQBv7pQvWxhwRMAYywBux5HNdASfn",
  "key5": "5DJx14uCQjDT4PwGv8GtRCmBpcoKdVgutgnfG6znDFtyq2bsgJksskdzQXASdM8DiKMxPRTY9ne9Coi19tNLunsH",
  "key6": "4wvYexynZ2cdzymVWE1avTazXyhyp6YygANYa3JVm9zg3zrBh5XsqeXicKRnZz3GXABdqEroL5v3tYF2fG4qRSBm",
  "key7": "4mYiyFsPc9onPLyKuhTbA95zBJkFrgQbvQuW6pQhy21LHvoHLUxtV5BiyMAN7ixax1qXKJrABGUGF5oGjU5WLMTy",
  "key8": "46nqrcuDuqpQxJZZ4JTXQhiqLBzzS8mKH83NXWYJBuWwGc67JLqfNyRG2gnYsrzyy7VdAZC5vZ9kPqgsGi95GuDb",
  "key9": "4YyE3J8o23gMcSokkWqu6U7uf2P64PVFd9DV3ok869JA7JVjoFVtMLPvq73uUT8aRtoDqy18dBcGVLQ45NJ57vuf",
  "key10": "5f1CE3RFeUGirJLP1asMJcCt39VBnrqvLdnQQ2ZuYWaKcu25uukHX9Qv7E47LpcU1deVLM6wrfeyDvuCoXC9HiJL",
  "key11": "5NQ2UMo1ebmZS5ByPYPiSMjK41iYbZ2vVvKyPCP5PSQeQxZmbXpij947CYY4zLXxAChnPukSV4S4xc2pktqf9TYx",
  "key12": "4WJqus834DCaLtvq1kyCuVct7JyGN6AU5Dcv7XYzNzJhKxrFVqbm9mreNbvheiED5NcFhqFJ6zAV8pB2iHmJ6JCr",
  "key13": "2BMtf7C6g6dMYEVMAxtxp1H4EUnSd8ACUz7G6AzXGfUhcs3bWa3mSenmoUhvfDdzWzs4WQZntMzEFjoruB6UGt4r",
  "key14": "4xp8G9RTykJj8rx4C2htLNQhmXu8e1junFHxRV9F7aukxrRggojHmYdFGcw3eSutqzWBVqtFhMMgV3PbwYPzRdKm",
  "key15": "4ysB5zMfBxb5Fiw2Z81wUGY6CU7cNVVy4HivebVhvimJinYncUGBgwH2dpJDsz3KzSf2RbKDYzgffnUdxdPUcrc2",
  "key16": "5khvVbQyhchjCo37tufepD8FxoByKVPad4hC3e77LL4VfSLVDYYULWgP4Mdkd5ZnmkCmgLtVXBsSetJuxjmqfo1k",
  "key17": "4g5BPSQEHx6REnrHfRcittzyPNym7L29xjTq5yct6Ny6Xm3V3Z6xCGZqLuWvQ6htJbcyeBsGT4XyxtbgHSGHJixZ",
  "key18": "4Vfz22EHweMUzeCwusyRzKyNBLcdFHKPhfvJcXdoEErMFa2SWXmqkKRNXsLG6Sq9ezb3XTbFnm7sw2tajLUE18Wr",
  "key19": "4QJHbr2Gmoe8MYT18ZFdaSqu3JFuFtKdTqjB4oxGP3FpWz7ehKoHSBTDDZMPphoivS54AyTWdUAX9UUe8FsxHh5o",
  "key20": "4mYgyKopCyqLAcVHGFqhUZJifJfxGsMrfmBbZXbGjvtEDc4fschkBMaoVUrKs7BHBpowfdzSiQuYvPaW2XoJGku2",
  "key21": "5Xyi4s6ZYdSojTxnxUQ1Q5YGGquJZWJihwwttyzjZLgxEBizKFCZPRnrYcf6LXmuDe6NPpryNvNWesFN8PvVxhDb",
  "key22": "2EWqFRgSziDppSFQnPziTVuKhe7ymM5YWVtAHVDDD5UXAooExNmHc4hcbwtn3JuKhqMTWaDrY52yZQhPMuCe86co",
  "key23": "3nDmsDQrL6ZepZR5rs821gk3Xf5pEhqYQSBK14pj2rWrUs7zz3RpYVXd8jse9sLw1he7tyacfCx9Y78kfA9ywKna",
  "key24": "3FSvrewC1JpTkz8iCrUG6ksJUQF8M2W2yvthPQABNACU2FMLig8zuZMnA8vwirRyJKQJcAcANi5cnzcTABxt7ZFZ",
  "key25": "6HxkTr9BFyJnGfXEqHGVKYGQB673Yys76YX3WjPu9PAxSAMT2RqonuEBN2Y2XqXLXqDJZXCoDcr48PeEif8daXA",
  "key26": "4rS6GLWACU5ckDd6QzxBRuLPaGuJckNy5QMpsEmsBTuzv9sPqh2sqrA5XFcdJRq7Hvus5p66zYsErSs2ppVZYwg2",
  "key27": "3DVgTsDvmFqN8Xnwrt4xmMwbTZhJg4HdZTBKiNALkqhmgHnF2KaSfjX1yFgDRYjvHpUUs7boK2r2U6TiQgEW1pfU",
  "key28": "3erUXdnrppayPhVMtcR49qBsd6FELdFpigtH2dAy8xVSUSJGDFZSHJFvwHRM51pEW28sWAyEdgNjTTiNzk6o7k5R",
  "key29": "37wseS8GGzaJrr7BDQa8HrxNKnqKhVbcRyUafeHbeZxhqx59MT67mg2aWN1CUapSA56oXgjeVTugEvA9SJYNZLf8",
  "key30": "4QQ18ALzgMLMEBvX7RTF71ZZ9gbtQESGV45nnL1f2pVtfiQ1PKMBCVHjSp5MKU8XhJmEkkBj3fZneXjpRShpFQr8",
  "key31": "njj9hgjTqVwnzAYbtwkiaSbnL4Xbe1bgECf4McNbLoZsNA3eFZKc6RP9khcAjZN9SK45DjKKU43aZrdknT7dwo6",
  "key32": "5uBdhGANFvuExNuC2ANJZXmfZwXzTch2fdqbRKzaoGrZQaG8YUCjXMVQ6f4CUtmFf6h1VT4CBfuvukmxDqyYXnz9",
  "key33": "qpxL1N9TXHpD4Y1ifDFNsxQNbKpjRXTS9zrYMAmwAf56BVUKTAnNijqSgczjkx8t6PQc4CJxAsz9xUafn9EntjT",
  "key34": "5kyyhvEPAwgKrdw8VonzCPqcRVJV8ZFEVL3TgQvR7Rzw1aKT19r4CeSvVCVx77atmFthZLL2sCev4vrcerpLnRVq",
  "key35": "3E2ehF6HA19CW3MSPkLuxU1M8RxbSZxCH4NWjHF7ZgLT5UZbo96wESpBFzLJW2vYTENwXXQDC62wZv2H54RspgNF",
  "key36": "4Ecg4seG4BcY2oCQapsGvDvZEfBj3c4EVhZ3BmNaqLz9p8WArjukaX4fNjsFqFkmFkpPRp43VyrogLnBjx3hqLs8",
  "key37": "5rDNGBjvRMvFBP2YFyRYshftw2y3oFJFfLj9SW3Hr67vYecQww4ruw9BNR91wdyWL9oYYB2icecNBHEScWvW9dcA",
  "key38": "2inb4PRnBafDxVNsTYK1JQktAZjJeJcJh92EPPWFxodqU4sYkKcGnR5rZTkZLdfHmYypPV2tiiUJzirTKs6wU5Jc",
  "key39": "ic6SsXT8srZqV6589DRHvNtiUujAJyNqjWkuF1VvMFAw5wgyR79LVRfAoD3JHgpPah3c577AHFeFBQbKFur7rEQ",
  "key40": "2fGLqxdiAKUNwgsvWkfrzmqFjbH2jjRttx44syKPoPDNjSNZD9usxmNjb3n8FsrkFNRykn8D8qWWhVXounzj9RWw",
  "key41": "3wkTUq3ZVE5iH9FAvJho2aYFbechm6spLfnfpE5BJqwPo47bvGgmkp1TXHiJCKaUX2oFreV1SvXN8tDByD67Fv3y"
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
