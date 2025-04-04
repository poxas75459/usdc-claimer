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
    "2t9KwCJaSXFLfEyXWGzLN8qgsxzBo1T3APE9reuo2Ku2MbGXEWtFJhgiP7KJwqL2bvyg1YrHVmqEdPLTw58pCu2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hKfaxgCCNL9TKWNYyotqDdGyoi51CtKxobQgFZEtdELeR1MFJn5xiTSrZW2bABQFaU8mG5kCRcCGPazVxMNKkQE",
  "key1": "63Khz9RHNCnBmE47h2kpmWu5NMUeaXm4GDb6zc3seH71LH9spgKhbhSVFh4ciRD7a9i1URJXKwMrbyioGp5ewaYH",
  "key2": "637xxf47G95qiHznJLrdE7QYow7fJLs7QQ7e9XeY4Emru1hf17DyWmmMgBFB8ah1nKjkNj3VswD8K8vzTjAfn5Zu",
  "key3": "TWUAovjpV3S98Gfx6MYQFv1rL3Bu8eCq7f8F56Kho8KH6HSUbfofvb1fAY14wgA1EQmmxGNLSCbo89au1NnrUUs",
  "key4": "3thak6vSTAPTaMz64k2jLmcf62zEAgiWKww1VBs22ST1K1qbAPy2qJQqsYEWWs4w5mL4HBuLuPqgvaMRowvdL5Fi",
  "key5": "2YAx4h1SZsu1dby7CR8YJ2ipsauVVCwJ6Py6WHxxudvD89gAUJxki2zLfJ6WUMbKEQMEnUvDBsZmymEsAZuJRuf6",
  "key6": "3keijRVEazKNa7pdTnkxii6d7dWyZJJDbSsALCnEKVbXW62qNnp3L5W91Shw9bnkCY2o1AhgdYdvU56SfGzZUXFA",
  "key7": "5TgTMPq9eVYqDHdPdmgNmRDvTCi3TTMvpHaGyL7fgid6Zup9YhrNbjSmLCkhxP4uNbx9QnzTSjgS6ZRcDv3xtMMt",
  "key8": "43go1PZ8XhKASpZSMsVdVyZnX36GFJB8y2PUtcy4zwCxdGPWweazAUogKJKocbxeuvjkRZq3HCJ1dKZrCvwvewCn",
  "key9": "EmckGurmXt8rExrMKQXifjqrWCPEkSAbxw3CJRCHtnHVaHfZBXN42aCtswPwAsyfd3fLbhTKkWyB7vvUK5gMNWj",
  "key10": "4nLwp4Y3HxeT1dqEPSDWBc5ZagYqYeWxzkB8XrJhfjuwuUsrX7ZCYvFcsTtkmufYMubLcK18uN1MXhwtprECYosV",
  "key11": "3TNyKDpMetAubn7kcRrbwtSXRL7EypUQMMC4v5UhD6dW77ZpyawX7BvwxFXwMCiQAkg6kMmy2tGpWTcwVTuSK7yW",
  "key12": "41bBMZqx1YQZv6oNniL5DMkZk3YNygXgAyxtHb3C1HGtqLuSfowztvR4fg3ryZakVTgZYecDdLzW8wcSGPRHy1GG",
  "key13": "JeXPu4YpazxGc6YnYBEDYKdYhigSQRKsAMxFg37FZHe6bkVvggenxcYgrmc7r6B2dmmtGg3tXSX8mz1nkYddRtw",
  "key14": "5PoRNVLCbiopXeAGhgYrwsnpc6zaGwJL27z5ycnuvfxcthXedzZpYn7drVbaqiX3PYANiejYwJxcCAM1DzWjnh45",
  "key15": "3QT9vkTQscoTb3opWhtMcqWwii3TBhPGJUYFmCWuguowzLydYHqVAvwiEwc4z8VeyqDKmSmpmv9BdU8RMMAqyc1E",
  "key16": "28JNe5KFLQ1kqFzCJ7Pn8KwF2qe9pcf9C9qr3gE2MAfvAmtcT89idx1Py3ccG699Ues6AacQDC2ZD6pvUwq8E4Pt",
  "key17": "568QAonEZkL29GFdjpWsNmsXiADvrYyh5gAofUZAij6f3JVCm1PNjiHqdHCZt3KHjWa63y2nVXJx8jvT1oY9E4Ty",
  "key18": "4HR96PkLjZVr1KyPtWwJuCeWsJQdTV7XPNC7Y3iQWjQuQZWVKAiC4fwopDiccGh3AT6ma9N1JcLgPetGDLwJE5hK",
  "key19": "2tmBdRhgsJ6KcTCBPnpX2P7qKdtZtAwfWuqw18QrweMxjrsmP7pbo5UicmcNN3AiSybZH2qp8Nb4hv6yLs4nw6oE",
  "key20": "EGyy9vfHSJ7cdKzSd9fHMU6L6eRVTztRzZnyynmrNDm1qJhn5srCFMrmimoPkPDYvKmqrdnV2CgApHge3sBXZDW",
  "key21": "4fWGEKcs9MtbU6xCZJwdrgJMDxjNhFSPWPxXjnstYMchHybUcGxxR1ymjLLoJSpmMcAz6q8Bd3qEafNtRcZFLJYu",
  "key22": "3dAhruKKTHLDD3vdzBNNcTbCXxrjVGTs4jVa3Vqbv18kLWoje1Ht29mcpSGG14bSxiBtuRRwh26NSwaLmmsQGP2M",
  "key23": "3RSEWjxT1x9qAeK2kTyCoujQa5hawihZkjP1gmErmv2UuPbDcXGB1B5XLxJbjSxDCpRzVmNFtWCSoJ7Rt31gWYQ6",
  "key24": "67AR7QBT6sco1i5SeTKckrzbjxkFZW92i1xYc78TuzH2AzQd58PYGVSZgKUi6xymxd3ywMYLhvFYPtFMeP1PC47h",
  "key25": "2ZRbu75EFhxNLMDqhG51sCDUGjodcgqxuECfZjeYpkQT4oWQ4jiBu1hYvFJ65W2gQ5uAzbbJAw5YH2ERjuH2hSs8",
  "key26": "3XebGyCRMdQ9fe3m8vkWKy5Go9SKTWG5MRXdLBLBk6ApMiBNtDmarHE8jbGaSyUZhodf4mSLPvz5SftAskTxnjsP",
  "key27": "1GAXshKK383uK9U3M1howF2DEjoaHPnGKPyrfSksZGNyoM4sCfgQPHqDk59h7T9krKpq2XzQjuA8sydPdJtNx1a",
  "key28": "idxEf6K8LfY5t7RyU9JHG8S27VQQhXpE8d6WGyPCjU9HGTwXoDGfLZvGmZKPwj8J9cVRiBJyUSbrfDjxf5n5rtj",
  "key29": "293j3Zvkp2j1dfehHVCLckn5Lk68TZ2SR7SeecJmH5pmwKArCZmd9igemM1wK11qFS3RCiDRW2G76C954Y5vXfCg",
  "key30": "5FqP6mbgjvCPCYVsn8pxRsysZVZALdfPX4RK17fPcMY7w8Ta4TXpULqKX9bFtauPfj119wUpBb9XrUNGJ77tWCTq",
  "key31": "2Zur13MVXEQhWFNsATHQK9afSMCDNpDzqTXQYq7uLaZT2gMtAxSRNyWG3hs6JZ7KrutNMwBmp2fibXpTwStVHELs",
  "key32": "aLetB9WhKxg3TEz4Y8Rb1XdyXaNvbbFkJwE7WMqg3gHo6u2fmXRm5X6KWu6U3dvifsXNbehHTrMe9DGS5YACxGz",
  "key33": "3iCAwAUxHaLJToMfQCCVHQWeeKNoN1MatPSLztAyFxZjiRAoTsuLJwLQv7CSL5j83QEZcqnx65PCkh7xBWLit42E",
  "key34": "2tAUBZ1AUFkaNkJureg8jqjGZzXnMPj6mEEzeY3czQnhQMVNPVSgxQ1LsVGRMdTkKfQDVtz8urA9r3Uc96TsVz2b",
  "key35": "3J4GgtYN8EaPkR394846PujTNU4smv6GhEXRfYZe8GKV7ap3Ke2Yzq4FscD6T2i88JnuMrm2RfMJ5xzevewpga9F",
  "key36": "65TkdtKeSRfgCtivNPUuYdTcgbUZfJWrgT651qRfUEsbYavKKMixA2rMxgBcJwEmfTbnRxPcKCwrKvKKDDwmZy6f",
  "key37": "5om1kbRM1iMJSn2X2TwUkxtGQr39cgbYH5qXqtxtj3kFWJBdxeVN5FmkGWqxPnBohPcMt7fZYGjj35BrCfVbXJrd",
  "key38": "5m1C8YnCcUmRcwr46PoHu9x4X6zdugmr6ArpMmjifBYUYh9yHCBUepaTuyWEjhD6LGazaymBupP7TFz59chjxpb5",
  "key39": "55pnUQpRB5HvJRveWUnETh1wf3DsoEd46kJjKrxv8B5cbN9jeBNjpAaL7TTLhsrNx6hLfk1mfjYAps4VR3HcQooS",
  "key40": "2WRncHFdAwvBiptJPMu4SK62MCwU36K8Ut365FVRVkvuQCJUaRFBZGjGHALF6uMzqDtzm9vtin7JfzMwTj7J1VjE",
  "key41": "4oTADpoGSMkovJL67N5a4TXsyteTudJhxv6WKaV3eQUPuXcRrZTWXS9GZ9WEx5XZTJpiAhxvzabKn7HnnisPh86h",
  "key42": "5qfZ3W5TWk9dsGnn77cUZsHBMkojS4KRCP51xpFgRTumqL7Cjf4HSWRDyPKieYpNquUss2aTT6Mu8FreEhM4e4hC",
  "key43": "6y8qKPpBZhThKjqZWGHj1BUpNxTNPqEREoCyfjBM1rAvieZjvF5Uu9UsXddRe672hJfncvMbJSr7Qt993AmSZaX"
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
