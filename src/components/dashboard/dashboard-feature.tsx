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
    "2f5ALBZyXmNmWwKwTfXReRCqQ8XBzxui3dP5bezmTZKcezhc45GnV6bgFRwQ6rPq2FwqCrwuXCPdurhvsWc5q3X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eNW2aisBdQJxoK3my5fKesjZWLTgcw4AuCkHd8eJZJcwS3H7EC6s5seAUAi5nTV7B3ppvQWdgb6Mrv77jvb52f1",
  "key1": "2WF4tybYRG9YQPeupXGgkFeSHi74NfBxDe7nnETyiEsUW7HUc92nYxHT98LKLoPqYQKMS8rkvdjDbvXKBP9H9J8q",
  "key2": "4nr1xAvo2s7rD1WsNULwTxQAvVCdDintqTkBHxqLifrt12EhJPH43DGu8uoZvB8Q3V4KvBTS2vh3D4NwQYXJUtEi",
  "key3": "6Fte7J2XRXEFW7D6vJ5sb4M2Lc6dzD6k7LptXs79sKkpVjDoo3Bodrx5KfcccWuU6ZRed1gFAzPEhjUQe66cPDu",
  "key4": "u9sMh9wWoG8PReLFhRpx1oFZMW5M3BX9JhJRZHnptUef8GKkoSJk3V7kEvjfJwswe6rR6PqfZ9b4WJuKjyTksET",
  "key5": "5KY2aJWntUBPxC9gmNaxu7gvaJweyRskeS9qXHiPFn6t4WiEV8pkdqMN1dzw6cNSscuqBGzgNz69GPu9iNztBVUu",
  "key6": "isJBF71m656RHVbMCwgcA3AYS8aFzmGSVb4iMQDj58MoM27wQc6ezPFWx8thCFLnGCgz8S32KEQ9qzKHai7NtUg",
  "key7": "3bjnAtDupgo3t2CQodDdsBxwQ2TEA663Wjn6NBFpqLMYfu6ZL8kSFaiCNLQzng8DLCSG2rg17atn1aMXPQ5tfgEp",
  "key8": "2tzk1BkVsToPixV6ZumnsByvRgtCvK1SqtvqTSApmwcxbqQp6xYkt99nWXV1oDGxajvdeK61AxT4PnWQ8eB7YbKf",
  "key9": "3ePQiLMCJVf9ptHKny1uN8ViRmwYk5VrcfekWKvcPDxoGDVq25yDsx7C35QjAkwV7j98pemUmCM2F5qQfErS1ZnU",
  "key10": "4BkqghSd5QDTwcas77yUmM2ZJxBSYFfBwNecAsHEABkY4wdr3WcUvhyj8Bsom5UjGjH8dSG94UJX1NT71GSx76P1",
  "key11": "aS8HpWGxDKoFJYSJUndeFjEeXAE5xbWQD9nc6JsArkE2UiS4P5PKZn2TjBRG3n6yPyst5mQHZvhDJmKCVtH5xDU",
  "key12": "943MXTYTuroDdHP4qhHxiueBEjqBbnAdqvkjri5hKXNVd8RqFtnbaFg3bF8TLc9rwKiiRCt8hmXsDf76XL8r1jL",
  "key13": "62ps1CWuJMLjaFjUjLkSaDGrZiaJweSqFZLKX2uuapjfnecZpobUXRbFjjw6nEViCcq4BjPNEmhWiCcZV4UwF4RK",
  "key14": "4XoZgUnyoYPWw8n6givwsT1Pk84hBzbespZH3uJPNB6oeL8maH2nvcEdzucKrEkW3GHP38jQGGPbfsu942J7zmG8",
  "key15": "4eP4xreNRBXSX7rm7i2Doa6U4k6FCGruJpdtvXh5RVzTMCvVzTxDybDPG7j91bSc4xGsAg5eYAHczhnabnZT2EC6",
  "key16": "67jVKL89bbfbNDvX2YKpid8D7vwJsCSZE1FR8Nz1Y6YSPz2kBNRp8xuUPMHGHtmMoeVjp95t9MTQUsbAgQQ7VZib",
  "key17": "eZw8k4TtiQL5kzionuTZapJtLQr7Pnqfgsma5pb7tQWhAX7MoeUDEvV1cJdNfJRwaKk8EmjtqHVeCLcsNs5HnGk",
  "key18": "4GWy71Mwwa9rrLJKJREhLgZhCzzth2EvGvY1yteSp1yYCfwkikB5xxDH1trKHM3KTKeLj163XoBXsj772Wzs9Zt2",
  "key19": "3iUXHrdM4MC1yTdpiciaJ89uh7fA6GQMruBH6ZVq41T7AUiFNWWkRrhBidPBe6cr3on6yDyf3D3qmVUGvTxHMoL2",
  "key20": "5eHazDwz51y1xxAHwQ1ARXXnYZXNNoC4mJoqFiV7oa3SakwXffCyYrSrYhGAFNFwenoWgoG9bAqmqSAWDe9VDoVF",
  "key21": "B8gxQqcptWC9RKWHFkR6zSLwnzBKfMLycxKqqLLxTmcFQo3KYPyy6a21qhPbKWzRRqmZz8hz9HWoe51E8QHTEhZ",
  "key22": "49zdDMRxWNsRfQxGYjbsWe7uxJTWciZ8mqHCcQDvrZ6xpwpLB5QoC3hi3kZfSCmuhqbnWpgj1pYvXxMezorpfnmQ",
  "key23": "28L2TD3EYRhL6dBdtTR1CyECBXnKLewL4BNVhi5wMYHPhSkMy43gMnYGGWtX2MCXtZ1NWpXVzE83DoAQ9jogK2TF",
  "key24": "pSnZ1vuRnkQmYaUNT5Etpm8bLi3ivN2wK8QCyEPdNcS58Zq4RYBTYFGqYj3f1YcCj9tC6mYohHF9JtgPHDgS851",
  "key25": "5UMZJCv64aQokvSssW6ZwBtebCYAFUhQgPcLzmv7rL78cFYerEmTDeqazYAbHexcMZCYtrvcF5LvEJCroQUdU7nB",
  "key26": "FMPmXRu9DW8MT4aCcb8h7Kcjymzu8YRDH86K7wJ7sZGDmLCD1MWVgMqMzEo3WFHcQDLsZ1MRdaAUb4TmaT3UqKN",
  "key27": "5LS9BfdYLKcKRy31ZNq48M495hYFGGSX5bdLP3TzKZdAwnkKn5vqVZbG9FnAdMEpnViRPTRf6Yge3UNdyykbyGnk",
  "key28": "zRCqqAGGy85DfPoJLY4yawS58zz2avbd4jCxzF95cyCEhCoALqrVRae4wZ7MnYEU1C4h5BKp6hPk1YhLqts5NQP",
  "key29": "8QLx37jjaFBDfrByHABh6uBQoBgrThYw6LmZxPKTwFKdve1YDjuTvC49Mmya84SfSiRgPQ5Sq6S6cmHJAQ3xwez",
  "key30": "92Eh69pgSbuDQxWFfjAaXMiPVDjuV2f3q68kbpzS9LRbQYxZKWU1PSxmJiENvR1whrtkW4VoU8gLabSSFK5TWF7",
  "key31": "2CHHt9G31Q15XgHdU8piQsGcicmoHWicvFnjzph1JDesGzPJNvXb1VHgDjF94Z6oRNAnrXdKw1Dq8zCnEmmkWRJg",
  "key32": "31LcTDLPCc6k5DLmiEiPCd81YWrqgbTwCyqtTvV9fJ2HmAoP7eWAUWv8xu5ceNnVN8Ns6zb8T3FSbcbLcyucWRvk",
  "key33": "3qbxGQehDQPekqKBdkPfj71KkUwFhSgiLyNuJ43DfKseP8U7gCGhim7ygQynUznF5hpVHy3YM9FfQ8HW1ow3Q3R",
  "key34": "2APNFTFCm9cNreFN7Z4wMS7bS8KqSoKCyMSg4vGzVqWwJsmHZrxHHuVa2EjVEMkRCK8Pve68ZkfFDLssZnBdNcCs",
  "key35": "2Y3W9UQUfTzHUhSSoP9mEvAdRoBtN36VmY1jiqD7XNrdyXRwfQH5TTeqzeWsUSHrQqEmZwxVgCcYEPn1gS5zdZe1",
  "key36": "4133LYs7sdu3qeRbESb6sp8UKibCye7T1swUQ8Lqtpd9JoLc2wPpTkYYrjmPXeHmsj5MLqZLht5p1SthGsxTZ58N",
  "key37": "4wyKMxve7Mvh8TMQetD5iZ5sKAV914GaPDuGjvrVpBJ8yAF353QddeCGV2RrkwwQP1QKVAdqFMvK1apSxfpG2BVW",
  "key38": "2t7PtLVdfqsB4ayX8VGB9btwPVCxjByUfL19aZ4CXz16F41Wv2xzRg6nYr2fZ3E51Pxz12daLpCg1gDmn3yXgtNS",
  "key39": "4FkRQqPyjNnpqJyhryxSMgskVpDg1622wSrV3nJ2VfNxdTw7WckP6fosceaddHE5z83Uo2acp9YsF1RwaZLrhab",
  "key40": "3Sn9AGbVeoLvDWVQ8QLeifibpyJuykBN3NSQaRhkoD4WFnqSg6PCfZ2Nm22sQzkixoz7rFKM4b1zL7PmdfDLPewF",
  "key41": "26Ydeyf2n7viRYrxkfFzQgQqzZN3YxPihKq8CqpmC8ZVpFJUKgLb7BDtQruSpAnHPJQVRm3uAUDLCxhoUGxXmSEQ",
  "key42": "26EVfP94DwH7yrzr7cFkA2MQU8nwhtcZj76WSLuPExQbTzjYJkARGHSnPSrAETYJ1tsXmdorcGKp4xdvbg8Dgitv"
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
