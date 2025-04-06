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
    "22Zc1uscALScKX48NB66sUEEA1DPEd1PS6mw251L1HENw3eTEp8kbNSnFDByPrs2xYWQtmWZj4PJUh2Dz78MSdRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VoUaNvr1y4dghuyJaXVrWkvjuDh8qccs9zwKGGTZMzfHjgeVNGtGSheiE4GvuCY4HkG5meoRULze2KviYq8NXgb",
  "key1": "538CuGqZQdoWMUusaUHQanCawgaEnL8RdxjWk6j81D4SZTbXA48HvHgXmiZv5NzV1DLLDmrJJN51ZFxPK5kVdaeh",
  "key2": "hB32NRD79z8qGoCXm2DBrQvM6N94NhNEHCt7dLoesutGTH2HcteBcH9MsvSN6fnE97YLg5YKLkTEA9mr8iMzreP",
  "key3": "5sMHc9YQLa45g5LQWkb6zSJJ5UTEC7v3uyfQwkzTdHmddqko3W925igH91qVpnETSUcYy8aUF7d82MfhcyjpQKiF",
  "key4": "65HUdZoHv6M9nNgJowdx2vQt6QyA61ZPvKpTWCZxVUxA79MbhUFRe45h7NuxDPqzt1SM5onewtNizSxwkVuCuWGF",
  "key5": "5Z7rztnThkhPrUKgPfj4YmWw3AoJYjrFRdWVotyDDz4KPrpwsYdCD186hZqmb7hbqUrcKMc7YjDCZRnba41sXe26",
  "key6": "frk8Ly7yDanUgGcemJiWjPmruofs94tGXrKnqu82wWbDqpSzM4AgMEvkD5frL5uMTYz9PRnAAnQYxtPK3hFmpVQ",
  "key7": "5K4bNFgT4UJJREUaTbjxMhejCSWHSc8m56JFBLnGjQizBnUXUKjpG9DghTQVPrdsvdAvfLAG4zQ5PqUpvu8DBS1z",
  "key8": "4rXEgzyW4oWdfh9iQMJAhdWsPj16PAk8Nvz4wamj5jRnHJRLm73SZ3mE6F4s87X5hCtfJo7qhEkUPDrNvjpoFNoa",
  "key9": "34DboSz8yCnjvRqr8Ptmz5281Ev3KpmkKQgZrtMauffvogf6d5AHkgW7QHtrmaoh6tE8B5nRSUvEGxhRSkbaco8g",
  "key10": "4isFVghfSyVnqEQxqmsmzBTQe25ucHqv19D3MZ3p4xkmWciU5JJLhsMH6dUAVFxyi5uB3ThvvJjEhBdE2EvPjnQn",
  "key11": "3MiamN135uQDxTxfmF85ARAqUyWhdUEeD6nFhRe3tbYvvdiusjBAnPooqWw9se92EAewPVvTTzBQ4yBD73NRYVua",
  "key12": "53ErVAkGXBRz9PZ4ZuVQxMtmruHqU9Cf6Kk65RwddiqsBSUY8sBUeFfnqZcjppmsyuqn4gXsHUCReVwqiWYYRWWm",
  "key13": "2JpJjpDvMtEpuJAYSuPe6crcyQrJWLmy2Xp66RABVTzkx9ZEQra2bGpmjgQukjQLp5nUDVh2gknuDS96dP88F2zQ",
  "key14": "5ZFJCUv2HY84kX5Emv6XAQ5s574jFYunvrZw54PXfakbX3bzivvrpiURVpA3wvq9aEG7h6Ndm1V9xTHCNRwM9s6d",
  "key15": "4WjRb91nj3TmzxwJp149cu1pFKBtVYeWuWovPopzKmMZvdDhVbGwmLk2C7zpJdm4reFJgr4MXgnkn9eUZMpy5M8L",
  "key16": "4uokL8R2jKwzRViczZfPnXYPXxTH8HYwwhw6jnpQz3qzZYxutURPDvsJFXCT6bha5VK3TxqPu9U4QivnwWVoKvSi",
  "key17": "qH6RkCHkqQTtg5RJBbSj8XtZQrpJGqpapzviisJF1Ftbv8NjFodbnwLPsX7zqCoot7mukokGAWuF9HaEMrS6p3e",
  "key18": "U3vNxnyhTgWdqfEf6EqotXS3gz1VbSERAMTuq3jrqo5iswPwTDJiaQaBRdFpjTigM9cZeD4vqz1PnuAFsNwws5y",
  "key19": "4cx4aypY2E7JCwRYG5a1R25XM7VwNkEzW2CiFE72m4Cif2BkZhaKf4oknCRVTdFEgaPPCDXHEHR98YvCfZnNpa4k",
  "key20": "3XhQdhshmTJGQHcD4fABLqYErtBNchBg8nMuzSFTh9MhziBUk2LHpUmBKdhe69rgJKi7iXYSxLqXtWttzPCVkVWp",
  "key21": "4LpvS1aHEaNUZaaCbBgqfWX21KZaG1HNpR53JQqMAKN9iryGUHazw4eqN5y1H6cSCkj1R2z5mYBBcXBjJWPciD8w",
  "key22": "Nu4hKBJAhs5WgKMhNPWXQB2X8dkGZDwNUTuudnABhFJcrUEUTxqjpT4MKGPpaAYuruSHkFV4tdyxRGenjW3FfUy",
  "key23": "gBdk6reGWDfiTELxEt9wns9Loee4UAP4EN3W44Dh37XEpJUXZkasUZHBwQwEqnBpUnayBWAc4xEbGaJ63HTaLWd",
  "key24": "51bmchuiRmphgm4BhMnStTmHY9FmAjnYhqa1L8ECNvjLSKp6CxyzBmToU5yCbhL83TgNroA4JMANiqzonpoDGues",
  "key25": "5BuSdmbwsJWzNXSEd964tS6RNPqqTX9GtFbQs2qogNMHcxdGMVRK33DPKzRUMPemA15Gz8vXinbAybUBNuRacaZf",
  "key26": "XnrpFxRp53FtFtrd7ExdfcSAry7XL5uwm1DkRRuHiGVdPSpdQq8Y4UPTXNkpef8oQRkT1tdAPaUykNP9tse1357",
  "key27": "5cQUN97c1qrgXicGSYUESJAAKfbsZvMJ2Q4LK8fhvGgpUKgP8yrqBqFGVgg2sjfWrF6R7QoYiiys6BECQr9Ji6ZJ",
  "key28": "2kL1HZVSFTMjru7G1UistM3ANMeJr6U48MufH8Gjh6AyvBj9smmSCwPRhzRh8H8i4UbiHv3mXcFW3KjbwhzVSwCP",
  "key29": "Y3ZnY9zfm44pc5faWmFTRUQFHX31GwvySYiXzTQ6MJzqkPfP7DYNBFrVf5YqD4d9uJehi32NKNwioU2sKbccxgo",
  "key30": "2B851eYbUnpHHRKtdPJG7NEAUnui9me1a661a6zABXEDa76tv1sD2PGSfNckKwzcEffNn9RV6879yDCZjW7afYXU",
  "key31": "a8tbrXgshMHccFeJajM4MLrhFywAvJ5dpmSJYSVsdyyRrD37q2Z7xt2EJoXeH7P2ENnrXsgKKCBCDv8aUEXSyHo",
  "key32": "5xTUXThpo7H5YRAsb2zKNQu3hirSbCgjfbEhEi1LMn8twv7fyhm7nR29gi3bZ8QVXGxGhESHRdHNmrobh2hsrron",
  "key33": "hZ7xbqpowNz8rR1vTi9WZcuoPvAF8nWUHJmEQZZret4KWFkusg1ngqLPPF9u7Ke29ZTfeZXpPrGykkqspHwLDJL",
  "key34": "4snsxCBcT7kM7ibuTZQHb1jsBuZMkYG7cVPj8dauNjGjMq1b9ZeyNPm8Y6o4jecDNARCvFkZirwk16sGq14Ws3Q8",
  "key35": "3xotDCHyoDZnVCPdxrPKDMt25hjMucNAZSu2HskrQ6YeSHPiLmtHLA8JggNYPbVnFe9icRLxAjJ2DD2dQanUtTmM",
  "key36": "3ndNRM4wvLYCC6L4wwehtQuNSiYGBTfpduXxsaSGSUBwNrXZXJnNbiiXXwjKaXB36khbUVEnU5tRfQdgJzTf1QBH",
  "key37": "RipbsNTqnsKTs7w38mvEyXLx6maXzNLFvdDSC3iYMAAMfpbQad7hSKK6XPhQyTn2tBWzvAQfwGpZ8qCtiLD8NpK",
  "key38": "5QTAU3iFJoCzwF1mmq41hnfHVYZe6aM2WLQRK23q8aSNySenSQoNFqZqohsfngWzbPpdck87QairqZZFA4GhtsmE",
  "key39": "R1C9GxWFFyR1eYMhTkCFv77NZzcv6h7MwpJbyb7T9ENXDf8mVxqdPAiCzo8fZ6UNe112D42ch1n3k9wGzPPreRx",
  "key40": "2SYheRKT9F5ptoVm59hH5nQF4wTeJwcfFvAc3L6sGZDgxvn9zs25nVE9wabcRom8gZWFMY6CDQBuvrHKm1WFByLg",
  "key41": "4H8LnvAEeLj4Y9ysVRDbJsWVneLDGyVmUsPJHeZXZ9VhbGN2JyPwz9hwtZXwHAfsfgCeWP42qjYverK6MiDiVJ7M",
  "key42": "2M1zN3MAEEY7Lqzq2jqUdHTxMTf1EVF4X5it3Yvo8uAgrdo2Bb7mRTL8UvmuXB9SDynctLuLzmrnDRUbPk4CAKte",
  "key43": "2TkyoH849PbPLS9gD9p7UxMAhTcACLUDLBdCAV4xbiasyJVtoFUJUNVVedtofUKNXR6qogW2pH7K9aPRLnzBp9kJ",
  "key44": "3oZUzrJBofCk93qvHh3rHVsr2EHYyAasT24t4c5waXrVBPwAqsWusyyzHvCrwrxfcdEojktoKc6UAECMS9pWwHdL",
  "key45": "2L62x3cdMZtJ7aC3qM1cDGWPSZEQff8Bx5HjyrZSDGwdZMkAHibqqkGhEjJaPA735BLFSW3T2JGwTbQb9D1osa2m",
  "key46": "4vwVF1Dc5N3a9htymLxGVG86y3mkNtNyRsFaaexjqwz5chSMGJ4yXZutDaZttWQWiyBXATBUZzeSVBKN5JXQpHTA"
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
