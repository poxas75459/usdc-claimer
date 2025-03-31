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
    "28kupY8m64zHmD6LgcETpkaB2zBpPmue2SX7d3Ax9EEarW4AEPCYrdov1GxdRrZhswNxAEwWajepjEinBxe71yAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgJmHbm8zkimG1co8mJBXHYQmquotRu4JcdD67C9sN1ZCDPajwph8KNo5q3CJfj6TWLqJMvz5Z74Gu4YgCbCe5V",
  "key1": "3cYqYRo4y7S7tfW4LcxASVo9KxS5u2bcAv43THNQ2JA1fio9uhBnCt7yzVvRTZ3YyrAdDd1KQQ1cqgouNG6sTLrs",
  "key2": "3VHZmAdveS8nWDYE8pRH7iibwXCXQp7rzAMtv7rAi3tPCqL3R1p3sRUu6fwmTdkkUWty2Hr52aiDFmo41XHqF1ZJ",
  "key3": "2vkcFM9Z4gEBEpe5z9TipZZW9pFxpsPRTUHPhmfc69DJjKzMJA9HU63iyXvhAy3tfMXScB7qTL8J7qNtpwPZ71ZZ",
  "key4": "53E88nVsjtMPu58vnVDsm4RWDdi6SDvk1JDvcBwYPY3g4Q1QodyAkwSmA6hiTiAqZaFRP2HCr2PdHucBRTTg1mNn",
  "key5": "5ZaYrJXg48mMSaupzAQzCbNanDvTaHnroh9Lt55CtYWgymkb2KjqmKwcofVRRov1vqn8wHjdDBXB5q2TAwwGCsEi",
  "key6": "61iRF7dVDyFsBjrt2SWgXWC5xpqEtXwjpQUpf7pe1z32cAXaQVUsBs2jVK4TURpRw8s5SCakEzkoxRFPimAvHocf",
  "key7": "2KXLMWimc1Q3rYBchm5xJkj1MgAqQXmF6DL3VXAEGiEJEMRV69ZNYARgDA5X8Tx5FRY8YQqQTRSkwdHrmrbNgDJ",
  "key8": "5JSJ9BsCStwG74SpqBunYS5VJGSza5SE85QNYMS5Ujna3Kb1M2HuwQnrrecK1759iQqqG49vY1WQHNqFNki9WjWM",
  "key9": "2nEMdEVp4YpLXD9HhaoviBagsaLTMaQm6sKNk767bgWWR7e1iyziKVZSThAk6nsiiQ6h1p6mRpkK7iv2Hw446QTS",
  "key10": "Rjx87tJkFrktjxLChspoA1pKUEBXM7MuGwGcMAJGUDf57YZynPqkdAiLPx1tapy4y3sz7icucPHxAhm4ZHcDzQi",
  "key11": "58Q7pEZV4bSvXPJqgcbChK77Goic8haZtuDs4aBjapNBk3wayAA3cwqcJBPt2QYwah1jWumDrsqJxzv2X63Ae1oD",
  "key12": "3sE99Rhr5J92ZVMq8my2KCHJ3ybZEUyjsDs5AGuVADaZzQpgFnmbnsn4yMRbteczRn8Zk6VgNaXfaCppjDZfWChH",
  "key13": "z6EbZ59cZXCfHkooStsNv3VoS4kzshSNPYc9dKzMu5toQssBbiVMrgNmyQWp8hH5GGR7oDi2bxPows5Css2rreC",
  "key14": "23aSXAfeXt1bDdqFjVra5yp1vZYHsUQtuGByf5yrr1mFxHckxsuJg9ybca78zG9b6mn6baddhSRoJj8HyYYcxb6d",
  "key15": "3DJ848vzEG3ejCirbvaeF3i8UGwSZpeqRqdbUp1my8wEVyhCj9LBsnva3QNYY3i4x38PZajQLEvczSapRD2Ks9AK",
  "key16": "hzrjEGzg11ZQ5Lzn9cxKrmvw3viHUBYcXjE1TAAxS9caTkSCzrzrqkEbkxJih9bmyLVj5fBcEkbEd5e5hvmJewi",
  "key17": "A9o6oaYSihCLjA5hvVAxFTRih7VbjC3yoN5ET7a7k9ho6SE5BH2zz1pqXAKTDo6nzNES5BrfHVV8C37z9QVChUE",
  "key18": "3MUYGNk3hhvqp1W8hTMWj9kuyCGV46iAWv1iyMvFU4K4trTRzemdP4NYU2suL3f3YhyA6TLjzGnzhzT1Bgtn4dBz",
  "key19": "4i3FLAEbybKE8qx8w6J1tBKcMXg3AhGfytmnBCrtvFgcZb8Uo6qGaN5GPXx9gHa7VqdZU8PsXrB5prhWvHAJi4ja",
  "key20": "5v13dT79nJFMgtTmvkwEJamdXgGYe9vLTP3FgZX8NdnCAo4wAZpPYzAgRKgutd6NrGYmkAiwpTQyYNhhqHK79DHz",
  "key21": "2xc2qETCzGwHHaU8wjbwS2WsgRicWHiHwLmKFaA8EdTmFHEipTdvCxQRZVSATMMG3FCSUkCBNjQCskmGWDHfKTbc",
  "key22": "2QA4WLAdi2YjUWmLTLYTACcYYGfsSre97mChSvRYH4nwzGtxvvYGdS21bPJt7LYDwDFkfd1oDUGV2LsmVdLkiUdN",
  "key23": "4Sg9mT2wtvUCPsR2GDEvukwUbu1kS6AAUZHLc4wF4LmN1nFG2grMLREKDz4g99zagi64VpcT6GQAjHd5vqtRft7e",
  "key24": "5SNh269NNFAKscaUuxa8qiGhryaP2FDx8Z5YDnaNWHXY6cBgeH4LRePzWevL41u91TF7pqSnKnM7qgxSSWV7QsVy",
  "key25": "NjWmQNgBwthGLmLqWCZ34AopyPh8UvKW96515ZVnU5MrEfzvAtf1Kj4S5DVXbpsyaj4RuLLZWZaeDhUdWL5WBAC",
  "key26": "5HAXdAEr91AA6HHEDvPvw3C12SdjrwMSgrQrExzU1DcJC9NeGYtV3pxoF3CibGUUPBo8S9V3EQzLCbRsPXLeBS9m",
  "key27": "4DSEmhYFDTNE3DMtByJPR4MiUgu4kreM62WhribjX3ApeHjLHEGYSnpTC2rhVKGYwCutSG2JWiivjP8PGS4F5ey7",
  "key28": "56DTta1F1xKHSvf4U2EZLSyrWRvkvmwz89CHGtF8bbUVeBYUpsKFkTbKqyKTZsbwJvqDdVhqD4izvYpB3874qNw3",
  "key29": "4xwDzbyA2sfEMrRTXDj2PZqtzpcC2GS39LuqBsEZEF8XCjDVTmwreUuS95dsUzJ74ivqPbjTSvoTXUgkchXWiZc8",
  "key30": "3X8KPghfoWAC4mJ9Vm7sJCXE6AYPj54H1Sj1tA1u6EKaEzvaST7hKffSwL5UBDcvq9ACdeYXpKvNkw9881s4sAin",
  "key31": "vGogxU393EvUEhxAHqdFC5XMJAVNcRU2Biv1BaXjetoJTxnfR7LJxpsE97oe59ez5v8DxywrGhJqxZMi3SEXBsX",
  "key32": "3fuhvyxFwQ7sBKAU8KdBftdzSRwFDqnZAXwwGzjDP98RAVV1MNfegUy36df3E4mAsw1AJ7BtGWcvT9eky7rE9ZuT",
  "key33": "2P8aKbZKcFsETF1RjRZnuH9deA3wrXQ4rqM1MpUAezeuHA9sTcCPbYaTtN15fsyFWGCnWmnrqb3JHUpuZVZX8VUd",
  "key34": "2tdQdcJN14temygf6ADn6B59dUdEE3sAZpKXjda89w2n8ax5LFntsBQcWVXrbvtS4FtJqqCTUbeVWQeMReY3Vque",
  "key35": "2xZmrWcyeJHQodF2ekpymEKsMmfYGBy6u9JhzXic7fr3gDfN28ds9XtNanRtgv2GmmroiT1uwhmMEmvyErKB7Jdd",
  "key36": "5Thxz2ui1MBMtwZsAYA2V7QbX5KZoDtdBVgsXB7rnBbMYcGXa21dRmoksETzbiJSxuD4L2wooUtiiwYBtcfSQZVZ",
  "key37": "2afdFBiSxW6uaw6MU74T8hzRv98BHtT12jZqAMMQjpATaP3zVDHxYLT3LnesaG5TF57fe73q7osYLMdd3Y1DTaiM"
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
