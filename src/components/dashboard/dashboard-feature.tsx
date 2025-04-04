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
    "2hspE5r6BQQBtcfCHZXsxxVG48Um9N6HW5GCruN5RXrqzsM64kj3kYxieQNPeYHZbz8Rs2vwdRa18tJ5RhtpZhhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E67ajdDFhHUHqaQDgCryKpxPsUomcf8cvH1Gce7gNpDptfUTupeMz59sEG1SCbjUMgKrDM6boEXigEdvTSVd3vW",
  "key1": "49Ccz7mTFadU6W5TJa7xgPY9Dc3wAEtNiUwBQtD76cQRHfV42BX9VTmpHYHBRrfqZUPrJhYQLr3DGijdFgsWgNNX",
  "key2": "63VenLm7ojS3ecmZgctcmQKSkoAXUhDnt17BSUZAZ5xzuuwQkuirfjmvNKCqhtGPPL1jBQ9BpHfGE7i5B7XtjqAf",
  "key3": "ARhkcZJHFEw2Y8dSipsNzCZKZPUFs8Gb2T8zG2K1B17RA8No1SYC8u5BLx8nbNtKdRV9mQp5vJktaqWUWonzL2n",
  "key4": "nHifiFchCMoZdmTxpfegn5umGP7TrUXkaKNRAQg7omS9fFgPFncQSvpqKmeJFjw4ZakvgqAy1bursf64brpSKxL",
  "key5": "24wdrLjAhYWpZ8byUdaEjTHvjaGaDyBCE897YPSFvpR11JJHVjkFXsmoUQ5RtmMRwdPEXTG2jBNB7ZxXzCsRmgA4",
  "key6": "5rqUtzMsNu3bhqt8SQRLuAtbrUgV49kGT2fsaeWQx1YsqiqBHrE9qTL4mFfsUFdmv6LVES9ij5peYmvHFBUTMrWU",
  "key7": "37bv6W4sqhpFrA1JFdFLwHpGEbwmsCcLo9jG4fydTMZdMiWpFQWF1mNYhiGJJqnsUVhGnwp1Q3ZtKpTbFhACBNCr",
  "key8": "QzffVJ2ujw3djgoLuVx3YyptN7EUkvYLJFfkacCfNEpk9ydXVG6DKtGs1hGxFvr2Drq3cxv16Rb8WZf9bEHunkj",
  "key9": "2v8io8AvDPffnMBaVDKkDwyzKpUqzHDmwt6p2CD5c6tppHUEQXWfmnTqPN7HHj31Ww4GefmsapBe8D1fZJcivqqd",
  "key10": "4kTDnmx5irJbTAs8PVmeTkWKTDTGvjh11vGMdJq1yTd6WV4yme9VBPbKYhJTusP1jiW23H2ggCh5zrTnNp8qqW4T",
  "key11": "FGPJWpBXfrcum3jSviT3eqcYyxXxPTo2FajPtGvPqJNXbZfRqNMV8rLsgm6NQrQdGZGmEj6W1pkj1XHmqpiJSjG",
  "key12": "2jNvFozgnRv3EQhkkrYj9gBxqUX534Vippz1L6zvKwVQyNXyMZWqijZauuFNgK4mpUQiWuKzUjvmsGUofmWZeVRq",
  "key13": "3HtN1pgkSL7eseAdXNMgrWtUjQaYkgUyuFvjNZCcoDiwFG53Hr7HLfQZ6oNKt8bmZndrfC7TzEpdx6Da8qq4PECW",
  "key14": "32fHkTbQu1weYbdrsevByi8yEK4SZSLYVmWfBBQnh1cbTTYr2j3jsYf2EhRVM5hiixEtiXLUvLTgLUuuS5sKn26i",
  "key15": "5DXSzLzPwcUZAsG4L8XeNXgdRgonJHbmSWCf3pBUsMTetWa5EwdpntnrJRTBMCGCE1ujHPuLtsMtYDqcAYbixZEJ",
  "key16": "5XMoaPNjeLJyoqkeFAV7tpgRd4fKeaPWkmXNWGDVAEUQNypj1UoqZY4TKPzGtfsuEvkBU4tj5uPtpPQTuefdQfxn",
  "key17": "3sN1KVgyzQvfNpqQk6AUGxauNV7PyQdqZXfSPdrY9FwdjP6wDiotS8AXdXKFhcMZcdPLq8QVBsGbpZoFNqb3Ribk",
  "key18": "4yzG8xvXUAubkzLWEJjgNuXE97fFhK8XnaUYVca4U4ZkWdLjK1bmTMrtG7jQ9C5oKD9BNxxTVmKSute7wN6osH16",
  "key19": "21oEMNbiqJQD4iaRr2xaiaE6NY4p34bHnAoEkhH6zsLhyCb6D31veNBFPJ85TyfvpP9TCYdyWuHaQWRsKMQq5JxK",
  "key20": "2u9xPZT5F39Jz5cjQmLBxjuNoUrdWo24N1pagz4v78KUoonRb7F8efSCxYaHbHqcJJcRhS7onEb8eMCkxWv9VVRW",
  "key21": "5SWvoWA6mnv2rENdhupiGmF6riBWVbbBGb3RuFqjKMQxCFMYn3HDL8xVqf6Zw5XwworXtURb6Y7dyoeXwW6DcfyT",
  "key22": "5MBjowwW9w8Hyz1uddGVBMzHceHU7zDNosLzG7X8G3FLev2z6XSdT1QVE2CD2xAHQqR93QdA7QwpvyLPxLBaTM5",
  "key23": "2LrRrLUSmvjGazeu9QaB8XsmAkmGBE4McBaqaoqKiHxfyWrorgUzgv6QDUJX3cZk7LGcbGqbFK47pBtLZUJ2ZEjU",
  "key24": "5q6232WN5VV5EwZ1o9SA63NUdpPg7whSkEB7qaF1RwoLwsuRke8WEpgKTt4ML43oXFKsVkQVWE6iSuJKx7W7VbAW",
  "key25": "4PrfVah7n8fvMcfaR7Uad2SoQfCnZnRgmb32Y5NP9dRegsN2KaNmSLhnHd18LFQSzUMq311hP9toR9iczG84ytCj",
  "key26": "27HK2tyZ1uY6d1ZqxudRci8DSepKsstcA6HuA4avaSZrfr32BoSQWi5JbWTCzPGyYvoAr5UrcwivFXYzuqLGK7Pa",
  "key27": "25xVaAMSzeFRbb11tfxDEjreHFiDxzrbRzV5rNmRM1n6SdqU2kxoq6xy6bUjyJKXpuDDqRXQKvqtNNpDFcFQJ5cp",
  "key28": "4x6AQ3K18krVeWTJxtFJweRZHPpuBWbwi382HnzECoYMhP54cRZqeK4ZpeAYfJ6wunshywvSW3rxk52CLzrseXQS",
  "key29": "4Z6r3tGudnfhygZM47z4pvTi5u9ZZvwjguVtns8NCm34dfDUJygzBKS3YyhKr2P5qgL63m3TKui7BEQ1JdSseXxE",
  "key30": "65hQUjcXSpFnooJn5uNDVb1Rp1daaaodaiaZeWsVkrkhhN7jrHhtqkftrhy4VrkCCnFG18Y9Gt1aLQBXYFF4AE4s",
  "key31": "5YZm37q9srFHjP57DnPxxR8hLKKgS7LJf1SbnSJEDPvhNEC7ACgDCYX9cbwe8K9ASEQnRmE3YFdyqxHFQMGqLRSD",
  "key32": "5uNWXWVwZdM1NW7fU9vBieN51TAutrzb5Y6syTQG6e2b2N9CbX6CKJu4NPS2YkHPc2Jx2a5YgGFit77N2f9MM4pp",
  "key33": "298sYxutaoNgdaAeqQdn3YYziFpenLs9dMgg3F4EgmfsVNhwed4NCWAb4byusLNoSJiDQfh9DCgYCqyLVgwLbnmc",
  "key34": "4muqbcY98rN1ifCpr3YKoRwuJm4BpkPkVXyTE43LBvfv2nURjhVJNVhiqj4QxZ2kHbpNUqnaHJx6pDPq9SLABKer",
  "key35": "4gvr3QH4iBd4fbajGAoAggn41tL6P4K6DUopdyXHyBpA4jMhxeiWVpSUpGsQEosvb7SAHw8m5PV7iNjwQWKSzpsY",
  "key36": "4XW8J5GpZVEqit54fhe8ensdSYqm5RFwbJNnpy8YX9rQK6TyQwynLRjDZUNoiGz2uaToFyHMn4eZQhUZ9QWJSm1L",
  "key37": "f1V6aGWXzC4nkTpykjAefnxvTUiUgy5GmCbMsRR47jrY4JsPgpN89xF2v9o5SbpHKTD8pH4khc8pAZZHLL3bzxm",
  "key38": "2ZY8zpT251crQvRvFwtMDH1Kk77phv2zA53ae6WVNQozHoHAGpezAHp71QzwzehrYEETzmwPYaunjdHe7CZ6omKa",
  "key39": "2KVMcQcPpgY5Gwcmagrh28icBfgJWpqcdLkxhUgt3DP8kmrHDw3rSt41b8qa3gueWcnSr9BPLWapWsYEanSReCvo",
  "key40": "3MLCKj4YuCujtudD8Guro932EkE48rMudaTBUogMiFEjkcyRUfFrkQXxCGW3odZg11GVyXn8Qrmg4cPwx5RPEhSR",
  "key41": "4X9jM5V7dsPTnmZsiTBVcPh281dikm5LofXYdtvC45jJPJ5qR97Y3x8sbMc1AC5wHB63KNXe4D1ihS5Kzoax3yZQ",
  "key42": "4E8fidRFdGdzDkuaR1rBHMZMPfrJ9KVQDfX7WQQjoTn89WgiwZpGNXmM4K3onhhRzRWShhdt63aotaFRuP988xGH",
  "key43": "4AP8G4C9VtAFitQmXR2yMNG26vje3bDFY4wnp5aRHbM34Pw64HyqFX4dy74LxRS5rdAR5ZeTP9BCMCoXG7MtRdfK",
  "key44": "5rrTP8rYtKPVeEnxhsXr4Q8zqmKVBHHUTXEYMkeW4hyWr3Z1AKfVDHahTbACe4dTkZCQGpfUQSJ2yNPUCQDwrSZf",
  "key45": "8yQzyMCauwQcJZivGXcrYcoQKBNxbyEAh1LVwy5kdG5YFsv1ah23m1L1Z1eKXCUprzAmHPUBbwW7MfjVvQrm8hK",
  "key46": "58FNh1JGXKv2wGsNPaXN9wA9Ee2EHzFR6iEoGwZn9ZVVhrMFh11dsUHSLbR6bpWuiBNLbbEdrvwDUxVotcqQkb1r"
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
