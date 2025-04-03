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
    "5Ubo4z6miM1Lf7KUMRHxJsimH3HqwPXdEGa81foCwiV8BPXyDwAbwkcoWcsiAmTaHfyfgrkPxUHYyfL7z4y4Lix4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CqXt4Mo7bxdrgABUYnqYSEiYNT6nEsVM9zqpQmAm2ZBT5pbUtRiMjEpayBe9AgaKpin2mRKAfxJM422u1CbUv1v",
  "key1": "6ro9djvdSmxiEwoarMyWCRxHz2YVyNA7XWEhyGGuqkLtHV5LRJHQS54Y1W3d2U7aoUrd2ppsC2txKC7Q1PCQPjg",
  "key2": "5PzVBZ1qXKtinAwrVLg5rw5n82dM4pquXH1XWDAoREZAA9a6gBP4yE1XBrA3ywSsu7V3HzqA8ihjLRBqF9aWGvgR",
  "key3": "2YtJiFCZwdcH5rVayq6KdEniUcmonM79nELMFLDQhFQNTxiX3UPeoeEswMwwKhaYtRSc3qnXNzmr68SiENDCBKCN",
  "key4": "38SgKoDAd93wMQmQj8uUvWZeUsHxgYK95YE9x3GZZEykZWzb87NwVjnqePpHTV24CP87THPMGzvfPUWdou868CJV",
  "key5": "5dJattD2hWBUDfp5YYhST5Kgr5NCmpozLpbUSkypySdyfWXMZWLbatYWABsNgFj1XGvyEzTDrxR2jcCBRpojuz7",
  "key6": "3nEAA52aWMmQtUwYp2WiN5ts9vtHiwe1CieXQMKCH7AMCEdZvzMFMqyMVAfaSGHgxR3DVyJ2avW3pFtWJPsbZAz",
  "key7": "62UU31g9tVrtMLvxoXxDoynU1CZphxn1Prtowzx7k2Rg2skq1pdkw1rUefZYsGfhGaaxocuCz6wjd7RY5WsHqaA1",
  "key8": "4pwxSyMRA2GgiuVanPoRektfm8qArDRVqrKzJ51eBzYhmhvzsicnDfbNoJWTWKpWR77Sf93uq1cgptJqDyBmPKAv",
  "key9": "5WqubiW7gWLhCckMfq85AfPxLeYzUV4pXqEdT5P2F5jceueZi2R2WmH4R6G8j17Dyo9wSAcayE1JAh7cvbHoP4AW",
  "key10": "3JvE1wNa3LRevVC1mSvVSHYv69R5VF93mDubbTd4DHHsK4XyJSS4jf12N3xE4Ca3TC3SBjBZNNTWMFs2u8RT9PdS",
  "key11": "29nGjavW77yKiAKomHkxQvR8asi45t8LiSJt2MTjDcyrGD2MYGu5kyRnmBmwe3XGCqgoB9DshURrZHayz1irbqae",
  "key12": "xyAm8BepHrxSUMgqsZzhJDrSyB7U6SYdRwWnTKd2s4aQspDhbtoKps2qXbUJKfEiKHj9XCQ7Le147mNxk2dSVof",
  "key13": "4NBKeWLmXuFvFn6weWoCYdZxQqpMoRdr4tRmbe6Y3HUvLJGYoKTy2BLJVKYnWy3LhobkCffo33R9NwTyJDWe7Lty",
  "key14": "56TZw42rtgPUcWSsVi1PCWLbYBkKSUA2srNotVPdDoUMcok3W7RP11UBAHc4dyGwaqo9qSPtfbbARMyLALQPbhCQ",
  "key15": "5wArWCLpNkyw6ufK7SLbdqZUsezDR2tAvh9u6kZ83wHjGxYDKwjidBiDbTSnbMH9CVc1pNKjU9fPvd3EzubYjVvc",
  "key16": "3h1faDs1T9Cnf2UjBMugMwrYjsv5LTCDp44nU4B6YFY2FF3YAVKcB3SQCSHkQDZJjUdTpkRNrDqwcMwg3uqhsHYM",
  "key17": "5BBK7CJPZsrXFvcK6PH33Mn2r5kjfbTpjhaCBtP4bN5dCYbfo7VUJxcyG5Ggz7DBkyuKsokxFkLi81giUhXXQNQf",
  "key18": "4TKvkKPfPTairhsSuuwC2Lm6JekxgLL357kHEaECHtriSetnKbqwRK6JiZMuFiUYc8nS8JUC4ieB3LT1jRw1fMAk",
  "key19": "1UpoxzWuDBAmxFSwpCCwKcq3Wqsbb1LAkqmppDcGSsVrK5xE6agptfMrqDCsuwiGdkTFkFTbxU7k7kfZPBUTa9X",
  "key20": "4c3anGzAZmQnDNXNQSifQMAuxRM5zSPtFH94yksPr2aMNdHPvxCfizEkjoiCxFKiYUviDEB5Eue8ELNAnHbLqN7G",
  "key21": "3RjpeKDug7iMS7e9v2qN4kPJV1W8wfed5WcCcZKZRJhFJ2XWg8AoRzrTJsiRtyMxP2t15MqCdNjMSAZCEU6yipkJ",
  "key22": "njCKued1tpSnbC6hqjVntuc3WrH1w7hySSUUoifK2S1aSLuj5zYzxNpZSmDk85JJfkciiP92CDegjR6GEKLgwqf",
  "key23": "4RUcEp8exFMsomM7GswUnJUFQw4SYuYvdiShQqPAa8ijvzVx1NMKkm3dT9xXhcEDTpY5CG1mV6Mtsp6GmwQZhZJE",
  "key24": "N89RQ7E7BPjvDw8RUSwGoRGSib2h7BGEyfL6x7r2wevQx9DD13MRHCpwVenNzDDjmzcVMNaccxAWknb4ykdgjdW",
  "key25": "5kpvCK73PbGesE7gA3qaxp8RAeVnBDoPPeWJDBu7ExAYgxmC7zziUuryTeH1aKUBeptao1vZkS8ECNHtkEznCyiA",
  "key26": "CGts8bRiZgy68PMQLkZkewmbPEP3xpCXrsNtzD53vgBJr1r6uCe9nY2gVwiH3CXh75nQmX8Jk2neWuvuRVvXcYk",
  "key27": "5svfVsxrJr5tNcaPTgye7MHZt7MdLL8d8PQcp1KN86WHsmHJGX2G9e1jjFdft9SLCviS6XEK25oNHE2XacRBNuVv",
  "key28": "AvumHsqQicoHURWUUw8Yp1E2SXL65Z8rBC5aynmMBTKMULqcxKtzW6YBYWsUgrNRWXGWyu4Uv7NdQSbwDjJHCBN",
  "key29": "TxspbefwABDtuprNuCLurBQiYaTSYpGXjr5hvWQ4nYoHWrVmfXrQ4hXTUBA3NSbZq3NenvdWiocCQJ3kF6PutYM",
  "key30": "5EyTiDEgpXxNpn6EEdRgTA4KbyspsHADYzotfSsmSRnQqNezhscNX5UeCxGRjxdxWPepgxkf3wuToJmu3TmwRaHd",
  "key31": "3psuArjpHzXZuwjDp6nrgbeTNoD69UjqHWv9MUVex7ubBb9TsCbuDc6W9AbQ8cYRQX2nvXXy3G74M7gERMGjvPvu",
  "key32": "5zRvRoGcsM92S6XskRGhGd6cjD9JdvrCJBzKUDhZR4t9z7sChfuGaSVr7a4xam6GTkAvukHcJRtt1hYpg6Q97Ka8",
  "key33": "3pRtgxTDYrpHcYzd3Tu5Yx5CppwoXioc6iEDwKcNhK91nvchi4V5pX2x17xBd3tw83dgTk4r9LNKfh4hoP41n3yy",
  "key34": "3KEfqQNkLtsCAGvpcUfhVn2XzTq2dgus2qTr72dZCuRmWZKp9pzshorwPVNyJMsoBqnkHLgTDdrgZardNPZvp4tx",
  "key35": "4SnYUZJuDeSFYV7iFCa1iVwR5sW3uFth8otPkYj1VLb4JQqUaZ4S8csZfgZNwpSDEpacS8hJcPMH8do9gCTvGaRX",
  "key36": "4mubvgKez3y9uwXrNvKRtRU3QtQmGbQeygzaKpN2SCrgaymmccP3PNqFB75ExX2prWZQcw5HVvAeJUrgp3YktiBE",
  "key37": "2t9KjFfxeGomLW9WhAexGg45E9UNEBNAPUMJknN62aDUbuvRHJWY46otM38zvVgYhhKC7qcp5piZVFCHFdtqtgbm",
  "key38": "3rg5sQMTkN85mZ3pEUzLkTHf8asEHhq4Pz5U7tDgEGSSD4RaGRGHPXEQMsxgvEPZEJxxX2Tz8uPWEjaVAwa4pwst",
  "key39": "7LdkuLAkndgqB2Dw2kuS2ZDBRpTssQ1eVDagXgJCFvtTudegsyJ2udcLWX4rchzXuzgVQpughnAFAaLVMPhXpXD",
  "key40": "PeMhVmx9vZfKUSVowz9PhZC6ny2KuNbuvaW5L973kB25RET5fPsUwjfKzaANzTHaZWYLXTao1TxJdoYmcd9gZY4"
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
