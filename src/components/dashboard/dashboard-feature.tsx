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
    "48jGxSfEeAuFzXGhyzLVty6UGNDW3433gvfzxhnHC12bxgsP8R9pdK68fAT6hhtgVnkKYPLApcjTNL8ZuWiUhrDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeXgy8S9oePFNrmu6dQv3nvNwmsNBgBRVerBsnfgZ48Kv2YRk9CtLkxxk2cYioBTqS4fD4XBconqfWVZxECqMW1",
  "key1": "3f58SjTUvJiB7fF8tdom7gaDdwwjsUy22nnQJ5fW5g3erydkQbHDCgRG1CtdqqCADm64XT7uKn2BdX47M5J4AUwq",
  "key2": "2rZ49UmbuiAEio6mnQ3b5DZruPVgkqiQCPd5rpGhKkMmwwWMNHoswpVzmzdEtVRMiugnEua5H4fXJMDZ9hdk87Uv",
  "key3": "4hjMoon2ZWPxqAq97kGsue7dgRty8EUMzi2MXorTXmjauXxRrEUarn8MF2gAzG8t5TBuSveXxe6ePJNdDqRbu8Ng",
  "key4": "31bHwE5wGHqCyAHX34ZNYYNgW1WjCyRLgVrh45hTFBvKJ9nCBSgPVzMxxEovXZQMnyYLaDUsDreUvKqaCGBCYZVn",
  "key5": "3FsfZ9mdJRT7zH63PXjHpQmjJ2RKRFLu8zLDBWajWM5pmGpLSpomDAh3zEu1AW1FLx86f3SarTcYn7rZVALyjvBL",
  "key6": "2Z7DnWJEhLngvYyR7yXmsDkuBgU8QNXsAo2xo4gzpmqnxrev5ymJzrX1cPDzmTRqTmtJDXAuZxPCEy7QQSx5iLGF",
  "key7": "2KP7i9q1UmeRJxpTVLtTHnNMxQrrWJMLAZF2Y7tLqnsPgY8FqCoGSmY2ijAaGGg2CXQ5o36uvQNbViYnbTqc1jez",
  "key8": "4YKH1vwumFQndvc1d2PLpTXb5br5CVvbCcywoQNqaPR2P4JrcosRk25jNT2zVCsYNmdEhBX5pb51UBN2ek2jJWWj",
  "key9": "uraumsA7SqQeYMi7gMF6dboS7XmWLR99vmVgDG1pEExzihps93bFhzTb8FxVks9kAD2h58utiy9RA9u9JXAjZ2A",
  "key10": "58b9AXKP94Bdx5k8NnWiPXKAM2TNbCu1En8VfyxBEBHJkJXvYCnuVbUaTx6gWXHpnNDuz6wsfhQAmfuDyccGgdC",
  "key11": "3SGgj2UMfUkLnDFsm3oXzB2DpMDqaBUwW91KCVWG3XVLbof2M2NYWm5Wo2pmPJoBSH6Abb5biALHRj3kaPH1mgnv",
  "key12": "Yi2ASxboQmF1HR5tWbDXYa2uDLtAREu65mXXoqcy3RbatdLqchetB3cctD4Dn3hBQP1JaPvYtorUKwfRQdpC49U",
  "key13": "5M7686be5DJCE8YuDmRVpJaHKMLBy89gRm78Y7CkftiNbcSJ6QDsZTLqfcCbncBN3FcchbXvScZJSA1STu2myv5a",
  "key14": "3cc1DApwL3PLzTWQgfG1WpHi5QFSWfqc5c5CAJnxG7BtBprWLoZerSEBGvuAh7ophc6Ses7dJQxUTLmENhEmifso",
  "key15": "DC66RxRuWWpSp1yLPBhZLNnJdQpB5VmG7iava3tq6hnCVgRBNs85zuPruekYUDR9dDdFoLcYpKwDqHtJHXGZaCq",
  "key16": "59z1jQvpNwH57ABgGH4yFJ59drb6fKKqe1jqjAQeHvszpkBGgZvpZsHzVPXraGDrKFaUZLGFtgw7ddsMhve7BoxQ",
  "key17": "2HwSRjeA7uKXpVALRZG491Jfzm4wtU6w9NRjyyf6b3UvJPmzeUjtxekGuPpmV3CeBNwckiFNoPyk2V21DQvu4SK",
  "key18": "67ktpTR43vXbwAutmDZ89dqMyDAEDgBvuau6capodN4ggDgi1ZAvqT99p14C5Uibmk42FuJxjtZRHiMM6n2p2vkk",
  "key19": "4GGyoD94y5KFzw1T765rBuZ77ZvKFoobqDiG5SfJLsodpZTSBMQHXjFaFYy57725hSkn2jMB8iPfgCxNuHuUsxns",
  "key20": "hS3UKg8n1DwKdvRtsgiGctu6yTLr6hNybGapEBErzWEKr2kL1dz7MwG9GxHP1vQoAuzGBFewJNyXeQFPtX4vZth",
  "key21": "5MqwVCZfq5UNza7a7z2QnvTVMcX5MwKygo7vMbNGFEbhNyFbKQDaCQ8Ps45X5s6BPZuLk2T8UVKcSxjpPoWAeh9Z",
  "key22": "4Bg23hwJwgpN87FyEbJQa5jztafyEpAWqePtajG6HzcttiP8cRvCkC4rMPwQSkMptYYRWKJ2BGGxMRsG2uvCa12b",
  "key23": "4dqrT3XkwhWhxtY2wt8MXT8LKqaeWDWZZsVTUxX4c1MjAH3s8pv5KygQPWy9NPEwVbXnTgNXCHxLZDSF2FwpnC1A",
  "key24": "43WRosH1CVFJECfTrDNDvFc78edomZC3D1DM7qjoPQzwCbNxGwZkrWk36iNAcAioaDdGHVTd1VCTTshggXvC3V8z",
  "key25": "4AfyPRMdd6abiygcDaMn7cYboo6pJCJmqoY8Wg1wngGgKnsjYoPojQbvEQuMeae62AmFfRHFQVWKequzikGZkdiK",
  "key26": "AjpJFMwCeJXNDidXetfWxTBPMSFVDpAbz7KM7Wppjv1NE8wXWXjUaZ8RQEgr3rAGq3euke3NH4EfJ5tKtpMdd1E",
  "key27": "513fa8jZrns6Ban44aabCxWZP2rMHuDBXGy6exQ76upAMAq8kznYrXvvYvKRQEtNnDPoJCmUXWdUMfgpiQgETj8L",
  "key28": "2t1ZP9RjMtvtgP8tqvegHQubge7R86QX537DEQ5eFR5mZhUDavxetSbjAiK5woWB8pz6jZb666fXoEsddyntozJc",
  "key29": "1JMmHKwpuzJwf4NXzhzUbnSa4tpfZQRgNntSbcAJwL9Uq5aDVhqmHi3F5m8fMnTJcg87eassUsGnxmD45zS8dja",
  "key30": "4a645eVuri4pk2m6NyU83YZCdJN4dbVdv3EuFY8zYnh9sExRYygdUaw5V2Wp1kVdH5NyeCopLq1SDjK1NrdHbY5k",
  "key31": "4u8JBAGo7SEQkvMFvBnZDdRTQZaesn4fJwoid6Ta9ypeTjnQy1aMnhZ1QZuaWVxw8NAa8VfMs58E4JFxsPUfGJtq",
  "key32": "3retxWEfE5eawsMwBHVcXwiyowK3XV8K36DvtxhybbpNi5mcGGXXcX3tXUAGVzKPNHAx22HkzXg46siwrR3jh6c1",
  "key33": "2XwHYBJWFZCH4BKsptMvrPjoYwjFJ1AoUPmxPZV4QXP53yScnXKZKGiq97CqgxeiEeyqrExwbBAn6bRdcHrmnM2J",
  "key34": "HYXZqCW6Loi3HacaDnfHLW3gXzEneiN1wNMMnhXzBQ6QycwQzzvr3vYpL37Muj8WeiWt4osHD4Fjpi6LX1VEfJY"
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
