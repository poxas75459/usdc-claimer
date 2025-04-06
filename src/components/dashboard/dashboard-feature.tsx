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
    "2mn6HPqq7UEWhPPgniBspyRzSSbkGRUq3an56MssA3Gn7BnGSRv8gDN7hqLQH4PsuCJxJkxa5ptjmo9DsfNXLhn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kExEEcWRjaFz5WruzdUHdCwcbCMEbzsL8Zj54tFSvh7aVJ9gAtmF9x5GTUnpS98zvhmDfEMx457RHPfURVdqFJS",
  "key1": "3NcqYfQYJjkRNrsExZyqVUvY6ygxyQrExWgAGefQFWQyCcKtBeAtXsJYJsucFXe6ws5nv5AYs7ScwJgHfnFzPmnm",
  "key2": "3xmT2p2vzABfxn62pyNC8NcYhQWA7W9iTnNMSV3vMb7gZQKLFrrqXmcLsJpXXuhFzURNKYsrp5LnHiNF84JTXgqP",
  "key3": "2dxFyHBXESUrkSw23M6LbRHiXySyPMkn3QmBKsSqmDwd1zdXfUYRCry91rfur7jq4pe8jVr4ad9aGwNpzxP37dwz",
  "key4": "4tf6RqsqKoaXPNCv9zYNcZzVb9HUt2AdTTm1PUVTZMwpbssEDtw4MgMnzhNM44FeenjtYQ3q7srqnbtTb4Pyc7HB",
  "key5": "5XpLrdg9SmgjSdj88oCvKmHBMAB3x98ef8Lu5JdscYNUKMWbELaEVp2MYnGtAS4i6ogE6LzDYmmM9m5od4m4cCSw",
  "key6": "5uoJmuF56ZUTbDg2vw9rbmBFFDjneHNArrpUEiQSkix4nZzviSUBCsVTbve9KSLyYyQr4jGp5j3o93uwJSumPvru",
  "key7": "3SNsTVZkMzjKXYgA5g9NHpbKkf79sj9YHFphdv9Z6YrjeV8qeTbRLv942bo7nzEeQ6drgwE1jJdYcMvDtHvvZxG",
  "key8": "2CY4XwD3LfnR2aVjbUay25aA8WZCPAucJ87cC22Mmdsiu4QStPRMjqnjAfGYYZtdkGyw8HZDt6p9A4K2VWynmSYc",
  "key9": "49VBkX1pwvmHbvQn8nBFEWQXmLiQrbQUS7tgTPDEMPuRZLb3B2PMsJqPgBpRzmJuM4oUatmwC55viua6NiyZ8vvz",
  "key10": "5BHeX3cJijytagdn4HFvm1rDwLEt1pw29YfwsBQSPdJpiCmQjTpkiL8eqgVMhDEyPXPna5kSZkF85u6JtQu2a7Pi",
  "key11": "5P9pukXNVKcPAUzNmBVkoD1sNKrqM3gqJ1t71g7UWGsoAJadFaGzCbuxT7SGj2fFpKsRragVFLXWaSguN6kWK8EV",
  "key12": "57V7Cre3BeSCcubg5yNZwtbKRjTyJJ6tDFFYzCjJiKtiCyFbBvpJH9CY24DbojEmxDDRKBmsUCCHs8k5TwAMTiLS",
  "key13": "2XruwohmWS59KwbStBbr2jJSBW4UWwbZX1Hn2bA4UuuNb5KcLmr5ow19Y2QGGbxCRxQbzjy5BExm7ARakY3Dx67H",
  "key14": "2TKrSo5x3oTrFR5pvuftwd7j4gNUqP9uT6ftYM6F8EvvX8JtuS4hDjG3qjspnyV4uP5tDDEXULgAtSrwsjvjvnXZ",
  "key15": "3KAMjFfBBK4AgcFgUkpUXhwdFgri2KeaEB4khLCarkbJx5PuH2Dvn6zuqDAhNGLPHjTWR9Tuw1evhgKrqk4yNpY1",
  "key16": "3Cc2uwmG5GQPBKU1HDDTjyrkzvYwLDWzguGCZkcUkPpdkAS3pMntxdL8HyowofScqLcjfFe1KmibgFbhYXEML4YU",
  "key17": "2nkyYERipGed9E457dkXyFa4TdA1vzZipZTPrdnxdkenc34ZHVHveCxcM7LXqW2reLniH4RPDEEt8peFLNQ2sfFU",
  "key18": "2YTWciNYB9mdX7FM9LuETzHFrBgybTo4oQretfwpR5vqE2nohMokCL535KfmdWnRjYq8aR1X9TGreeSn4NUfeKV6",
  "key19": "3gQ76p9npD18PptsF88xf2YKo33M659LuJAvFRyzNxRrWBywBivhiwm4YEcZZAfN1fR7MA4udVnoifWyi9oBoTBa",
  "key20": "5DMPKCjakKBVPQYmd2sEQMLnxJW92ReR1v86cj3UDB7SA3VZXd8ziRYvW4fWV95y5ZrQGqozL7x5RpdvPNdzgeuz",
  "key21": "4Tuc1G4iguDFhpJ9BFvPcDDNiWZPzwx1oQv415q4RrB4d7Vyog1fXGUCrd1cTHZnqsUdibrSvooR6LYes6ZFeBQY",
  "key22": "2stUvVtQd4emFX95xDGEH3X3AqFcQUmrDoynwG8e3a1DMaA2Roaa3jrouQRCvh7wB5jvr6KjSywxH3XQD1JMdsdo",
  "key23": "3K1hxxpwMy6iKUT66Mb6jbThLKHBxAUDYQQX3dGYvCTigWqiwBTnK4XB2TVo7zr9g9ZL9W1CPqaTAtbMW7eH8Uzj",
  "key24": "59Mobw7KSeMTySYazzkmS4dFm6Rz9LCjJK929NbBJPWZyD6a2wUWkUuxvRr7GBHTiQehNTpNiRedpCYhrX7MgGsd",
  "key25": "5NhV7RGWeAxiN9PKQupNLzoDJsmtYbGK4UWfERWiKfzbSESvWUZrKm6ZjbPQTiZW8gUuK8YGPSiqbgBNgX6mfgrw",
  "key26": "59hanFrEXsLd6CJ28g6a48SviBVBaaeetJxUFbRceaV7kVZuwFK1oTj2UR9Vzt8ctHufGv3gA2rovvdYdwXr1CQi",
  "key27": "5i8qRNC5dyTEWFeWDZjk5bw746QbBy4KjhddK1uPNcvSf8pFFD9NrYfUmpHQdEw7qtpZyHdJr8EqDvYKxnbXRgq9",
  "key28": "3mSqScym1MnQUENWkgkhskewPqmAt7E8NehhRwuBVJWzduHd4dUhgQSfGxHeidKTekJhHiV8HtNpDU74bEcd3c7f",
  "key29": "3XMYaeeHzSuTD2wk4F6ynnQj7WkwchHcnfZ61AGH8CxTKeDDEQoGj4TPStfshrZ55Gp3JsSLJK462uYrrmkc6bax",
  "key30": "5UDpwPBvhhYPxWonjPHodkxWRBUnjx2Guu1eZSrSW78y5nV7zASwvFnWgfCp2yRqmDCXZAUjLEyVK3Eb92orTgLa",
  "key31": "4iiP9EiWoNyy9C9mE1voYin4dJR7EXHu7xYSgK1DxkSuU3qQG72exVjJkXC9L7KYb3vzgGKkH1Z7GNG6mbjpz8C7",
  "key32": "4rdRwHhee2zmxhgF5L6vHnpu24iQxaPQuELgVkhGhwzKwuYCb9AkhPqpPwbg5g7UDuhPYQ2FBvYrZbJ99ctDQS5V",
  "key33": "5RUVHbHFU2HstsgBXW5fVRSgzyivKzzZxuDDqHNM26VmVsA9WGdKqUAhYTyNApNcM365gRuQsphjhrUMN7bqEmyT",
  "key34": "3XLXs7QXYiANs2fNcQFC4vUMsUoKY9Kfu6T739MfXeUgbK2VDWQ53BgcC5aKLSbaQVGcEhd3fxBmJohZfW3KGWRC",
  "key35": "T7AajcPvG8Ygz7ccpfmSVhSqsmPxWmt1rao4zTt3VBGpr2N5QT4QKCtKkL8tBKei4nrVuU3PtP5xZqv3utPftdp",
  "key36": "42GKWSK6enXXncvQ5FKzJWCGmTGXEZbyBtYcvU3zbWMYkempFnTikuehQcVseE3AF2spS92TsiDgQckDaRQBY1HV",
  "key37": "4gNt6SRHVuqNg3yDXdfeipwsNiLYuqzPXtYpYbfYwoL6YiyiAcTdamuqXo5u6NEWPa2GeT3xNgVxdMY98Fvu2i13",
  "key38": "5hyKBZewmYEsMr5QVvoiHjyQaW5TvNdUPXQdcyGDMV1nbghyC2EgSa1cNWbwUJWd1XY2Sh6fmVx5KKEntoKTPJz5",
  "key39": "2CPiZ8graR9p6n5u4FA7xkZgtWKW9MT57WDLSGmRp3xdb8oZL6gChNvCvyHbinbQo7PEonVFbpXTeQV64D5a5SYd",
  "key40": "22roLx7FEgjFAY2fYBzJwXEDoo6bU8pfM5ADFdupuqHbyE1ySn4p9jFX7TAjLrbwhykixTB2WiVKkU4mYcptDh53",
  "key41": "4ZScpBQhEx8dgg8tQgu3qi9D44jXd8FDx4KZ7ZU7dLADKY6sbMKHKkYz27xBKx2K4BzmXE87GzaFNzsncnm5zXDx",
  "key42": "3KuFmtLXUAraE86hfb8F6nAHM5XUBTni1tciAih4HhTUtZozJfAZyPWaqRE4xMgovaEC2UQjZze7ETVPAwBJT5wt",
  "key43": "2aM14JC7jbJQgDKpTiJgQvdh7PhtCeJJzbFn7fsaCWQxaMeSLUtZ9wfSvL8U9dExTz74HmFBjncqkVWyEtNjHZKw",
  "key44": "qrqLTsYcTk5STzohY8yTLfD1KtwfLeUCMkF4rr422TmYdH2kCANc1MztTkhjPiygz9LBcLkSDqr6M9kSvjoToJo",
  "key45": "3B24Aqg9kPzzvty7rgw6YHpRaDJcbo5R1L8AhyVdqDYEz4GH1zaPjFWgj9ZkUdFGfRsFYQX1Y4eHAUcVuUq4JW58",
  "key46": "5TLFg9bUNzJcTjnm5a5vCz5RhGvgrc2Um8njzMwWFGGrexLdobuWCbptzKh4hDD1ncXmo8eP9HazcdWPMNCewGE9",
  "key47": "4EvDJcMG2fyy2pHs9eCxQb1oKycXoxB4wzvwvmM3sBNTXpyTxiciptVcpSvh1wGBUg7SbA7UvTZJGrjXSZvdTY3K",
  "key48": "4swZ18PRVafhFzC8CbyXs9884omLEcmjUp76mos7YnF2pfVbhiiZQoEibq8gJArFELH19yhhwfozXbNjzY3AuK44",
  "key49": "3sZsNfVRokSWpXCgC3CcijJ27EavkwW9rFcxpbcAmnUvAUmWC1Ei4xz1o5jQH4DZvbaUfYMhvFaaWas9nr4JYghJ"
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
