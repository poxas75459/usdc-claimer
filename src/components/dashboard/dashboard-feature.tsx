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
    "3ynocSJkanaZXcPuJeCTXWsz4MoZoLzP8gjpFCa8WNg6CPFf5NDxLoJJN8W3YJPDrquxaXPqKmHSsNXx2gd9sSHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5zToe2r3phdJ5gFVLTabeoGaZPNjuUCRqmPzExchJdXbjPgr28mh84BiJ58r3eTJxJfjJZbZen4ScCzVEHWZNu",
  "key1": "34M3yYpZZJ9Xv7j7dDdjWmDeBhX1u5aupMzeamY4bewaDg22bDnnCBWuM4kgdUw6H9VXcYJrE79M3MkR5qvNmwrs",
  "key2": "4WHkd6un9zx9KVHo1F7bfevVxGhXP4wkqzZsjQkQU5as7BSMeX8ZMtYHo7XYgSqx6P9PsP3rDEnTbArMfvmoYq5u",
  "key3": "3hZBbwMMSDyDKfYEUQy8E9AbjY727Udo1VKMAWH98ibazNj3ncPL7AuBDRJ7MrPquuA5CsccfBnC71EQ37Cie1tD",
  "key4": "4UN5mTMhmT8AGdN5M64DxKZevzzr8Gc6QG6beui1KoVZ4dkCoMrwtKx5KsPJ9RtQRMMHj8Jzp5zWaKJ26YG49Vga",
  "key5": "35S4keaNaTf17YQsyMSCmyos56JvszU1uRtnicYacvATTGW7Vv5ctX95GW9T7sxnZFGQTEG1xNx6n6D4kYPbw1cD",
  "key6": "29s19rs15huYamBUFEW76gnqMx5mBbMPHsM2Q2szivnapu3chFTyfP4BMRzV8R9ikgFq6RMWuXWKJ5cDm5z283NG",
  "key7": "4D1qTfuKjuu4cCvhU2LuACHp1BizqoWziVBcxcrTvzghKYTaLkEC27XASwCgoH3LZRed5JvvQLjx39n6UQwMzJVK",
  "key8": "scCXcFgX29RYUBqEVZdTk4UVZXW5e8mDLRDnNxYn4Rb8WxxajDT1yWpJtM5SaLWCqQPfx2U11vbz83AxpJkkTjD",
  "key9": "4WmpJ9dKKjA1w6NgqbchByQgiPCEj25FXLfnPoWaMsCqsAYruhmSXSLbp51RRdp73oyWQi2hb8MVARUvovnHfwK6",
  "key10": "5HX6GbuaE7mz2DHDJDYaeEqML3Ueo1nDrkpqPBqEcwgaR2ZVASyAek1ufDiNzAti3YwswtGtK4ukzKHDHPFeSjPp",
  "key11": "225GpEomwDyZK6BfTnTDm4h5ut4dx3hTh9cynpjUi4GXXEcqFNtAFcensXgJcKjd6xWDDtmQiphZbrizyFtCeiwa",
  "key12": "29FQg2y8ZAosA6bwuUVWT3RvR9bSTjXKzw11ecTkrzJg2MTDbNw3n9ziLhqoqrVxwb2uFp2cYvfvq3KG62WSAWS7",
  "key13": "6xj1QFSd5WCGqUumUDoLG7wgsiXnWroirECKLA43EWm3LyWVTP88KoyrPxsCrxeUprWGfn8UPVYoagyWjDy5vSm",
  "key14": "5Z2gpRBGmCAHaMZLCvWxpebYTCamJvLxjzwtZxvw8thCRB1NnV5xF39t8nrJM2mwdqAuiZwhLVgGK8sf9jyZTSsp",
  "key15": "F88R3nf5v9C8EeesN7zWACduqyHF8CCjMsJXeaXbMPpxEVV3otTXnpxbyLuijk9UicMMkzPZfRkguhubGFQx7zX",
  "key16": "2egXiafZsnojkChXz2aPsH2y7YZqZJ6sZVjK6f3qZa7WurSLbLdK6GE6dZ9i9tLNT3cZhqhgicoBAzThHtf6pmE2",
  "key17": "5p7P5ZQg71rUUeK3NCtXDrw2c4VJ28dJE9LfSvHkpGYBsYdFKdm17fx7fWGc1KPZWvzp77Hy9CTqRkKzLbvuDUcL",
  "key18": "4MZWgVbjXkyMQJVbc8oRVyzLzZYWSFL8fbmdSH1cTWHH4rz2MpHapouqwK5cHnYRgBigoqJRr4w9d8u147pfgu97",
  "key19": "2fgU1GicZY272ZJDkW4x3SJ5sQ2s2bd3cntXK8FQmvL14PuUY7LFrK82kj1C6tjEUW5sTsJoqBXTrnrafG6JnUbm",
  "key20": "3Bm8M1wznSnuecjbLiokXn25qHS4YvCtYcg544Fi38P4rWskp2tXYKfKaEqT1TXSzLn1yT3Evw3b8TXTXYCGzrUG",
  "key21": "3BwKzi4AHFyA7gzs9eJtJAiWfszPW1ZohhKs3PYjaCGdnraUCzNHDSHMeiFJ1sVbM8DjLamPJ42FaN8wPkRsd8hT",
  "key22": "4iwGoWHUND5S1CJqE318rWEhQjFkB712pBLpwfK7VFMDioGSfFVvmoSpwZjuNBQXjqnidy7bcxGadARP3Es48y7M",
  "key23": "37D6cZxnWXjfqTmVfQc4wAdT4am7q43aAeSffVJmkfNzMgfvscthkCQfEoMiAbX59FVFM4eCEresysQLbSMYG7RA",
  "key24": "51aS3rzqwMHFU3LT7fnBPr7mpwvy5cg4K57dwFG4BcF64MAmXBMCQPfJBC3n37t1szFn4VdhZ3a5WgRojjNQUzmo",
  "key25": "4fgvxVgi91k7xtneTzvYuBAmedJWTc4QyKkUmfgDU6hdqMiWxDy5pCTdNcyQT1EAy7ZUHLMeA8ienXDKBovWECse",
  "key26": "36xohTqWKhMxNzcaWHjpSnLKhi9ToVuZPjJWWdS2j3zPDeaCGKdtBVBp3uT7VwqBjp4zHqfCXbr2fKdWUk5WqYhn",
  "key27": "4eecobpDtM99oECdwSYP6GTVbsMWQBRkAS6XMBbNyF2mvQfM7un9S5DdneeDhk7JxHmWGj7jLbU1c2eXYVk8iCAS",
  "key28": "2yUwxRJFZvSoSycoptM7KtD6ayttXP1qkKEmyTSJmX9c7KhUZrUQag2EipNZZcw4RXUojncKaFUbGnQnFH3QtPXB",
  "key29": "nbLEe7YjHo1zSnJcDD3dDsUoTYP1RznfdBJYp1iuBz61tLYuHkfDf8PtYT6CV6JN57FEtYQ6YgPzw9JUsaZaq91",
  "key30": "4YkULkGAf7x6Mnmd25pFtgRZ4NJ38wE5nJpPxewowz1m6NPbZ5aE5wEos7k1X2c2mfCDf3rdU9NZWYQMFeMfnr6W",
  "key31": "66y1cA537ZF4zGQTXXSfvVvct2ahL18c2QC7vUjpZeWzF5hLaDt3Lppx7x3nhmt73AyjEN2sy5M7KiWKVhPBaFWq",
  "key32": "2T6af6Qg98AymBi8ZvWb21zhgurrERcX23wCMEnAqYP7N5zwRvcZBu1QuhXCSxLAcRT3nfwHraqo9ewqjDtm6bNn",
  "key33": "2asnwUTbYd3NH2MFagnzR7hSzAUYoatm7wfyTRGBPmQ5F8wE5m8H7rsSbda7rQLFygj1eq1bSRGyt4b9NYGESTJp",
  "key34": "3G27ddxgHJN6cvoYcHDptHjcNgMRA5e1BZ9rTAVjn3rbWQg4FCNKLKPeVqash3eWtJ9q72TuSGYJvmPLJqKXfoPw",
  "key35": "3cP4D5uCdVzx6bUeZfnYgxdtfjBbatoxfy7XmoUUPFCZtwbVMt5NP5fHDiUvatirr98ab1r4byRPDMaRzyoEXPgE",
  "key36": "4aeTGuSMGbToAwYdq3fXfW5B5KXUQ1E5iGn7qys7FDUwXutoLpVG8jdHmvrNtdq6fAtgeXf5dwVedTSH8oz8SvBM",
  "key37": "49sQc5apLVBAm85Qkfh5Ha7AjXvbnPqj9cyVrnA472AWkBUfFrNFavq71FwyXet6FNVsVqTrbV9vcDmgoQdhZYW7",
  "key38": "S2KHYbdEZAw6fBEH322pX7ApUFmVZjFx6QNq5gWKNAyEDeA2ZtqDxLbG75QengosF7q5wH3kov3G6v3r6tgwFs7",
  "key39": "41ii4cGcpGChtiaV9HUsgTyEvMzxbQ7WneFsxZEuvFyd4b5puTTaERLuN9BnK9Std2o9fjjaVs8Esch6qsYSfr82",
  "key40": "wsBbLoYaggZwMjtwwZWJAiiRq1gMjPAgPbhXnBsJyKUVQjjqvXMrQcVuv6xvrrouDCus9QuWnLsj4h2ZcdHR8Ja",
  "key41": "2w8JoBsZJhewGqjyn7CNysbxLssc4R8ziDiSMtNEBgMBfZDJkzsb5EwWofMonyB83dJc5KSkQTjvGDwo9qMzVR8T",
  "key42": "5Pc1uw5xoXgAt5dgMVggihY6xWtk1efj95B67v8VcQwvfFJ26jUB6MEJwakD2vdjXbbrX218yBHNg9HMcQqa31JH",
  "key43": "3asdVRUwoSqQUM4BG5iqRmq2YTREVeDPHNn2AbhB7EWKLaXwkdZk16nJRdj6qx7WJvd4z2wCg1ZVddbFBjw7GfnD",
  "key44": "3rsEGBLQbyG2maQM87SEFDFoQBdPe1NwAHDhFvy5bL4jhaSZbZkP2Hbnqm87DyuGepCKbJx2unANFJKFt68GM5sq"
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
