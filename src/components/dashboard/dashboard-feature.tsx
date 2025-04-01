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
    "2zGNx4A6tqgzJmDYXfRnxLRZnqLMow7XgrkJ4GFdcjAvEb4p86nxmaK397bEstKPi7jdVUEbPMMq2DYfoFVvRwSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41J13hBR4hN9u8vzh7bn1MQeF1RZ1rDW547ifQnfc6nNTFeDuMPgRrepPLMSXEB8MpLynijhAKVA4dipAUqM6kri",
  "key1": "2CGzVTy6QZ9aF66PiV1Eu177o3ijV2mTUkDqqk5RmfYaVUrcPF5Mz5LT65CMBZhkwgK5amHzrbaT7gtLnA9xXseH",
  "key2": "2TeQFPxxzXwGiTauLPZGL8Rf8V97QjLjbNMFMZtyvA6kRuoPBcwPGoXX7ce3Y9zwF8848v799W16p1FigPmmRHUL",
  "key3": "5ySBxNFVXrDiF3LjegWLFXGHTNN1XSWcHDFw8c6YwV5zNjo8XdDiWQE6ap1yvNGcSSJGRRyZYfYaVz7eYyM5deiM",
  "key4": "5jpXJgc1MwTzw68wfbntuca9F4rd7Npd6LURvajuWPozDL3S2p4miVfSw7XNkvD4uybHVDRcbcAqLRimaCqeXNRV",
  "key5": "4LkPQDxR6bn78gYEriFi7L4irimNX3wm945Xy8WY4mjXVHAAxAXcFnqUPkpNig5hk5cXQ4dsf8dv5VoQ5XhiPXAf",
  "key6": "3KRgRHHfXPR7qxb5wHwVeU8uHijcACzQwd4Xtv2Z6dgcseyNuV8GnsLEXppnUc1apTe1XAuNfubG5Yi7bRLA7vBq",
  "key7": "4tg4ni45rfDxjLmfLyhZ8LguNFckasnYxx87ZbP5G1K4sjfQYxAAFHnr6MXKFDbgwNxsXDAEAeKamYFwXTVBgSSy",
  "key8": "2ceN32MUnmzPANXzAPsfvrWvVttgWBFQU9D3pM7vpWWrt9nVruZsCsbkq5sUM9WWEHJoyRdntFzVxEWGLArXQvge",
  "key9": "jswHDqe9uVsiyx3RTdWLsvMrzJobsU7fLrLkuXRYjohd3YyWkuxqWnEtfWzw5PeD1XytGjcveA4vNMycQAnyPtM",
  "key10": "2tL2w4WNUNXr7ApgeFechUcFXM2KVbVSh3NFnZXaM3xve8jyGBmkMdfNuPHXrruo7Z2XmMY6cWJFZFgnKQttuYpd",
  "key11": "2zcBPkD5g9yjMf5o3cCJbixmwNyM4a2Gz4WanpCb2ZjHugPSzPgvt6g15Wms9SrEDEwfKqo8bMceEWJjyrRmaB1T",
  "key12": "4FnCKpmo9WsaTeWTM8Ezw8HFFmHZ5NK5T9CUuGyd3aNy9LnXvsWW11uKCJwQcDemmTr7yZdKMW6AQpFf5UaDMy9h",
  "key13": "478sGwSjrUW33TFxpPFEUrqu5twMCNVmVwcfBZsGvDhQRS39AFfntKrzGXkjNS1rEW2osJubhrdQbkozNaKeocKe",
  "key14": "3sfhUrhY7ydkxkxFaG38pMx8LDwFsQh6bxifQoLXfm7F47TVtAHXmWWZYBwsbAh9KCq8exYA9CDiZdTqELDSE7Mb",
  "key15": "2PpN71YRrtX1NHcViLkmZD1eajf9fVgkFy6BaWeUMwpLVy3gaaonPnGNFzR3o83EUwz7YABgKvxaAK3Wx1bmar5",
  "key16": "GQr46KHnMthez6bLv8WUoxAvCUQU4A3CBYJiNZaWfQLk7wRPntDLUhW4WmwLq8o7CedWN5R9Rss3ZCewcvNyZ6Y",
  "key17": "HV1Df35Z4WtGcBWgFdYVh5oT73kU3eRkejpedLpTYtaF8Za12BnHvHF2Sy7jSy9EFFUeT7dHXXmtMutXLAzCVWn",
  "key18": "39mnvc8KyCQRFeSXpaQAnrb4AvJAJ5jSYTgtpWMPG1Zq6QuEQk3WEjC9YYieRS6qs7nWo6bnnJhgfRLtboVmSnrh",
  "key19": "5VVabUs2ohXHC1hMHK3ZF16HXrEygdwRzCXG7mm4uvzzdKPJ7PANyuAyMGesUXtrSe3wxPseDELfraWBEFuj9Mcc",
  "key20": "5Jti2Sph6FDhN24dz55nvdNAWxKUtmTJJNJDgc46DCRCHhmtZ4Zh5ydrnKe6g9LdyNKmYpdAi9Ezjd5Q8jHnMRRj",
  "key21": "57d4iLDieZR8nJchn2HExbf274N5KJ61wYZphpeibG5sJ4gR6yDwjM4rHv9Li7tqp2uvJLBHNuvRmYdgoAL9M6Yk",
  "key22": "3DLpyffhG2EqbYUaDogydvycvk5VgSjAENTm6eAEFLP9UJmb9FkTaexZwJuiVpuA4z4trcXVy1JdS1biQ4P1WDok",
  "key23": "3ZBty4MiZ2FhR1baXgLKv2ojCihz4kqgrA61uEErmdEBujXURW7H9BYaa1aGnrybPCBCchrsz1hAnYmXy2HmbBts",
  "key24": "3LVaEsQhvuZ8qs3UXhPYjunZjktVPx815yphLTn6FktjJcP4rHooJgvaJAiWBttoohb1WvppHCRnFNuFdGg9Nmk9",
  "key25": "2q1u7szFYodWMGyNSXWsdfSEe4kp4ypSMdNZxj9hcK4688K2eQKkfEueNqCpczFSkyCXjwjBKVRaJPb7RGBPkCRt",
  "key26": "4K65HjutC5iLWKGJEMoRBLZV4TLX5yCsPERJLp6zyZzLawxetoArxd5W2C2W1aF4D3r4LF2RL7diSrpKpNp4ahdG",
  "key27": "5Vvj1cCa1SQixu5Bzb7YUAg5ixvQL5uGcrVChb5CBDcKeyyiv7m1PGjHDLhedNkxy4mhZK7AsQwRvo4E82YUBqML",
  "key28": "4Am1c4XeShbwvQcHkn3XXVczL7nFvvensdPgYLdBoR517fGoUENvgiUK8qVHfLbXH2KLjUSVoSuDordVG4hx9kCD",
  "key29": "48DcNBvtmaV4vShmDmPfYHY2KjSiVMpo4eobVx4yyNqLy4YThtjLiu9Mcopi2j4JMTCGQbXv3fGv5NWXMWXthUdT",
  "key30": "32S6x94mHHNnEw2fZsDXGqe7XTRzAcCExymCSYEUxdqFuygo5A6u2vjm12yJknCYB91suWTbtE88GJjWtUQYWB5k",
  "key31": "4tRHQAHv1CGNNvQ89bDo2BhLJM7A5rtaxRt9fE5sKNiHHRhSrG2GydaArbu5bjzt3bB16aoC7sP3nBQwgCU128tg",
  "key32": "4s3unqT6w9yABvhcYP4kj4u5v5MfT5BE8izAyHzpPUCxUe75hQGjfo3nE1axL7dUqfL2FNt4E6i4dqfj4iZgqbuU",
  "key33": "ADhMwrd7iDhiBdY18fQX8atsyGbp65mxJr1gZPyRXvDFQ4UHLD1hQqDvFtF5yWuhA3Kao5DMoyoPE316moszZB7",
  "key34": "Dapc2yFLe7iXbG1DTWZuHTHmk7SZewBwwocAq42G9afTRw63mojZvpCZ2kcD1DAk4dD63keLpj9QVGHCvHW9Fz4",
  "key35": "3CQRRFy4aPDuF4gPFfGUnVJTnDcdxDWc9iLaWqo6KXz6NC7tUwFey5cocaQxJ38wXHrL64rDgMjWEcow44Amozsp",
  "key36": "5uA4ewbtWjVChENHA4sJeQCd2VAezC6iS6PmXqXVGaoKTtZmdddrsDCmxuJHmMS1HuNFrbBAfnof5iVCB3fdHFfc",
  "key37": "57EWkbbG3kxzTYoJfKQiWgmnzRtmrh5h7ztpqEEqZsgX3mizxq5FF5gFjU31zGXBp3Z6yhdRKWsVCQhsDrEz7Jzg",
  "key38": "54xp3HnLyRxn9mUFKkh5NVRD3YFcCDeXTjfvRzc1ehHLnzHg1cpSupHa9ftWPcKtbSnyaRV1NP6WfPUeEvNGXWRR",
  "key39": "wvRqo96HzdrCRi8utzf5rVcCnfK3muSBYF644VWR6eMd6p583Jr4eFFmS9N7nUemiA6WY5CcQZ4Znm2dopyYD2p",
  "key40": "3uetgCgPwNPEmMugWnYgsWKvXEaX83DTQC96TssFWs6TSKFwkqtAxS1ndRM592JRena7grUEcW2dQM1U7ikLLZRL",
  "key41": "2jMARo5UALdr8EgH9KJrH3HwkhsUtVphN3A6Hh346HuWSKNQavnFKCXgGzQaJUn7mi2yXFYBaswMigmy8FchEpGh",
  "key42": "n4m6QDjnYXnFeUT2wBdFytvY8LXcpRuqnDqCP2xYeMsLk1BnCiVaCNqRZN8AAyhG7SWDNRSBFArnbu2fEsYMdMD",
  "key43": "3vwpBbeFvaUdc3p3HYfZGtansfBi5fChh8kw4r247BsK6aK9F2pwvs6qdbGteJNNdpfCXShre73nuZnfcVHKuYS7",
  "key44": "5LytEhFU3VoE1W6U8JPaA3LBRNqc9BEaRhrXaLmsecXE1ZvhsYpbLAHY2DZJkEavhduZVncWgRuyErqcgs21mEvp",
  "key45": "2f4gRgque7PrLaUAwZm9Uo7xywk55wm5SCPLbCxkTgUimkECqfdUhKwbwBkaCpejqgzsUeedSrZE7HcQ5isZvyG8",
  "key46": "3fEkMK8E1Fv5jvmQGnhVoH7QEFmnjsjkNA77DM129xv2z23qmf7TtbFqD2NKxZUWuxBkuwoEcYWVezEgmkpXURjw",
  "key47": "5wv5JMZWeZrUeyvbynBTyE2uFStPDZGtjwVYQgRuHrJyQa8UpwMpY1Z7774gTStuduKesFVggozkk5Z7kiBNA4JW"
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
