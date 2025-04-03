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
    "2DTfMyAnMAZj6hbSZLbH6cqKr2HFpt21qpmuTKDbbwbTGsaCvNNUi83Y9s2yUGxgc5585bHN5dUAdSZyqir4aP3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXkYjVp19bKDCjSqGcv3oRrquCbmpwgNEHMWkQABzPc3KAhZAn2y3LPzRkRh3AgCsoarwjK9f1UXJTyPEWMWyM6",
  "key1": "62dj6iRbaPrNcUPrbGUSTmd6JcEoDcBFdJteViq184EhWpL86pSELM6wUyuPgxiywqu89zCg2jqfDmYMuEk55X9x",
  "key2": "WMbZxXY3bjsKBvjHZ4mU8XhsK2FDixnoqqXomPUYPiX1AAx9Ui6KWguEAsHJ9Bqgh25DVXRvEzFgBDhErL4Z5ar",
  "key3": "56R7ZTsKaPNgqSMxxrCA6TtU6UeKrk75wyJyrkp2PGt4kUUVfByoGHVAz6TZQmD2Y6UjjJFXBDzKMCpfzhNEiA7s",
  "key4": "3UPpeG5xZq9atdV6bajma2v661sfTEAprhTU2i4Ek9oCraTaEtExphBerzujgjUhGARyvUHroGsN7UBz1q5vY9Sg",
  "key5": "3FoteHuPYvLeRFiWgBrHvKhyqcjvLzTrNw3JYgY5PFwJe3w74C8LWJYLAwVM8kgqYeiv1tDJcZpsRXRcXWpXwfee",
  "key6": "t7s2qxLqgNf8LyNiM8b36ToxMnkgKu3ECC7yPUZ4p9axBWN12hgGckdynXC946zDxhAYHjmhoPFZ5FCjW5Cz67P",
  "key7": "aNcrsUpoV2dmW6mtkFeYiAMgcrhMeYydP1sDNHPxQRPaMskHuwWdgazF28mqdokdgzEC3Z1pQatS1oWtwwSHsPB",
  "key8": "2rswCLBBsUVx7FbZ2wBwsLDZydLxspJMxCwvMRSSHiFZeLHCfxhry6FAtSee3ZVEKYYMv664qxa3CoKE7F3mtZm",
  "key9": "LhhygTQGQ26uYyhY8vCzYfdoXBAcqD7n4rswzCJbN4MErLrRFbzRKNEDoearfP7BxoKK32mUXvxYvoFNsMuHHkj",
  "key10": "2JZ7dqwN9ApEr7BGDw4t91hcSY8Cw3tE8iRTP3uG7bVSWnHQxKcasgueoeewrCqopmBhe4tU1GP5bAUxrAf1zipg",
  "key11": "5sxD75UWkAcLSjcgcv1NzsV2xXuqa8TBtTaH8rnNRTkPfkzk3aKji5tFkEWx1ZvZ8qnUw1mfsrF8fwXA5PUePa7P",
  "key12": "3DmxmS7GcS1p122pndF9SUorK5zfpCWKjm8VtjhFCSzNrMRKDX3p1soBS6MQc3d3QAv92x79UxWn7tSRxawD22Gq",
  "key13": "TFuku571116JfVSZqbnyqH6Kz8QQXDrRUXxqUViDVJGbdGyqHroM3sQyg6XytoKvAxyjVifDKHMrV6DDwrZCkoM",
  "key14": "59eDBFkJN6ewqcaeU5J6VoYxMSQx2erDBmtL6eQkvLudCpfUBcW1S5UBVFUwTsGKryAWJVjM5Wfuzzd2gNPziHey",
  "key15": "4okHM8NKBNHBD8LHrRfr4GStcibdUCkZRUwrFQr974SPJwn1YQaUNXqeYqZqjCRdJh2zLwYyAox8BgmAaceLCEFS",
  "key16": "5M6BSoDk5Go2dnijtQmwUyJhYNDP1bNWMQZvPqwSkWm7EFgL8DhCN1ER3mZJ3bA9Tk8PJXF9o8XxHdiC192Ti7Cd",
  "key17": "21Jk2hKgturdR5YLY5BM8wPxLsVu5uqsWCKMTQ35vrfmfHji1PswWrMT6tD5eM4RPhtRcgwDc1eDRH5CXQZpBTcc",
  "key18": "SfiT7rijdcY2LUHFJiRutqSz2A6ABsfETLRYZvP58htFLvxH2m7YQV6p4jrzVxthjJ1iCAAjxK2C1ziB7X4hcJL",
  "key19": "3vT95cdhrfPdJb1KRayY3dihhSZU5Zi3QgNYMwxh15h3haUFTFLeQJx8ch6Nkjcj92tRsih29QWbZejwec4JfeyH",
  "key20": "4YkAha9rtPfivU1u7c5KxGUChbeVDBhjTorhx9JGJ16JEFnPumNKD3SrunbcEaKfGpFFdeCRKWEh9UZvRqrK4v76",
  "key21": "59JWxe2NbkuUY4aLfxMPvUceAU3Q94ENoGAEDtDDU43yMXMQMtxPvNjbVCAv2BLZEinWZ8W2QvzSLyBztmPG8adB",
  "key22": "RQGbREmpVcXCZc9HPAwsHrMpUXWC1rLst1yaaTVEHoezMQfMJvRja6cyoDXvPUHp8gHSGrG8kFgZn2TScTsseKY",
  "key23": "36pVcGYxxoqN4vFPzQkFZdf74qT3GYjt6y6Ady2fpkqKcQdnfeJQVEr7xMxuMoDnDYqLnbELgdvfFbC5RWLQCmJY",
  "key24": "3b16AtR9atw8NoWt6WW5BaUmtQRtXbWnAWUedqKuHpKLctnD56ByMYLebs4CEnqZnhsQT9gzhU8L1HgCimLgo3PS",
  "key25": "3o2Gr8SjgwzJqXxYS2DR8RmwoNzGAX8b9xyQsb28DxPfepG9cBBkbNMpUFCKtwBzipjLswDLwCamqor8oh9cwdns",
  "key26": "565WZ1Yx9vpqkb6eVcwT1n7SaU8w7nz5LGpumecyVjUFTNSHv6KS7FyJox5mELo5DboZmXAxWKPhPCR3xhPx7TJX",
  "key27": "2LxZwuafbnBRcC7ekWqoV5xHqE9DUEy4BZHH9wWMgknDeSXshX6F6P6Lrra67orWzK8AX7Ga6s5hcRqbEddbEJu2",
  "key28": "2duFsjs2HyjEgrJmLPQhYpNpLj3EsU15m59uHrZeZECZcAwnNNEUDzpCJVgzciZ1e7MzoKMo5dZR81MM4WnfafQ8",
  "key29": "3t3TFExC5srHUcyNMRzc4MhGvz7ib1HNrE48UBpyy6YfqvNNcuGKWq9KCYDqTukcvAJJpXyquueynRZBE9H7jPg5",
  "key30": "2xFgsWU48cuNXoyfKSAY3LUMaJ7SfSFjMghBPtmWL1TwXWmjCtojqCdSftkXrSrFoABmtbV51Qx9V3jgnFL9Geaq",
  "key31": "Ac6wXxNK63uohf3FDTQm5vSKcfiZ2eaRoU4W3uek9M1SPU9FdzZLf7u1oCphokkp2mYJCX3d6UBzE7sLnpQnuQ1",
  "key32": "3XiWjS28B9NX9BPRDEBwPFCR5z3YegpwsmCj4L8tqgBQYzsJEwdiFXHdLccfLBnK1r1MPprg2eB3aCE6aK5U6otr",
  "key33": "5g9BeyLnLdc8CBug8oxvxQcu8B33r8p9XH1HkJ34Rxb8WfYdZPpyfRVFkwAfJ6gUJ3qYXvWLi9g7yzp9EXSRqh42",
  "key34": "4sc9HUL1zTrZoEXpA7NQEcboTt3zKo1apRSPXAuVaBgT6h75h27S85YrwznWCzC5tsWMnmhTHNoNbJr4LzHesqn4",
  "key35": "2RWapnCwfGqGu9fQsTtwuqEN1dfbMnLdfeJakQCxDvLtgYuyzFKrQguDxMrjeCBZoD74PPMVS78TjR7o7gPw8ZZf",
  "key36": "5FNeF2i1bJg5TqJTNHBhfeYZG5iasGBX64QLvfPQwqzDHybD117CLjgQu4PfFnBe5y98xX8M6CaKufGM2SQ9WJqt",
  "key37": "vd6EFar82C77oq8SSYRWwoUdXZhndAL79GbYESaBkFTaURyQ773MBqhzm8fyRtR4VTa44czEk1kvFDBoBHVVnNs",
  "key38": "ppDofVq1zmcRE4xRcTLHo1TdFV3vWqQP9jomhXbqsYfeTgoMc8DfKnYxzyZ5M4KeFkspux1Ct8v9obWwtPCjcik",
  "key39": "4d3cRiDfrYZnCSMrQurvvibE6HttTidUtTR1ojzy2z2d8gBnAvU5f229MSvEisyHzwa89UnZJhpNtCu8s34774PT",
  "key40": "42uubYZ4RxE9rR1MiDKsJFQQCJJx4kDUM6GpUxajGQTypdkxUciWxL6n2ocpLZHYKU8z1N4L5wtxyRDnswX9c9nv",
  "key41": "4kAA9san2XEmhjqP6gSyYMzzANgSScFjKw6cdFNGQH6pCnN5PTaHYUVDhqi5AB3PWMdmq328vVK6Csds2KHKEkWV",
  "key42": "2ABmTQgFM5TPYjd9CF8oWZCuRcPYQDCC6BAcHAcrUezSE1v8ckeo2JXRriysGLMaxHumxSXodmDBq4AAYBLCao3a",
  "key43": "4tAuUtMUoB6CbqemwsbqtDLk5q3ejivUc81CjxV91gfdfyfAcfzyPwE1d3phiLoYH1cMzegtoC8uLFH8xrbEFzur",
  "key44": "3dEba4QefVSEs7p1zcXkYKNo8onRYhcYZbNWZNVBRey7LM462yHAkyzavURf8BtYbEZPgiQT8yjT9AcKyPmZcQEJ"
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
