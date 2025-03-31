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
    "3EZkgMKE4m9qiuYHk5WTnx1JgQcU6VvjLZfSYYczzg86K7Mj4nRYcGp7nwV2jet11JZmCAQVW5jNChCrNpuCxhPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfpQzN7JrivngDHHG3nZsVt8Btc2SYXKZYNm3C4tpGnbq2JUYc8TreUax2pPxK1N9zkH6SPWYdhaoxXdSnzZbbG",
  "key1": "e2vCd9xWmq35cWKvBLraQiA92R6uRUnTwtwJhYVuTQXJMpeF9o9nPVXy3zFNw3yPh2ctDA9FexRQAWiFBg9kvJW",
  "key2": "5TwoqhBKRgW2ZaY4AzoKW5akVZ91QAaG5Q8EJTora8Y4eCa7her3jQhouB18aDnD449VMQ9viTHKfNjhpKmT2EZy",
  "key3": "4DxMt26jPwdPFhw5Kp7NmcwFtjXgmu1D4C26ohw2jyRkJU7SZM2Ue16XgnVdHyiWuczgVkidMoBTYv1fNzVTA4dd",
  "key4": "5ZgnKK485yJ1qusW52T4MRNx2a1dVjAwKGACdCmz47t1Cxdo8LthUv5tPLPbc6CLeC7kHG22aEePT1YFuvru3Bz4",
  "key5": "5HM2hix4WHErJMNehHNvZDFHGD6KE7aWrd7aA7Cw3fDbRKRocTYgofvpeDzvhx6n97DJQ1j4u5ThfwEqSGyrUoLE",
  "key6": "5oSQvaU8uFGxsCK2fdj4ZhGW2LKQrvVXyTthgJY8VrWnhfwBbFXDJns9YBRT4RFsetDG3TtzN221L2X2fNPEeivS",
  "key7": "3rGv6KCajLy4MvHDHqWUjGiYt8CvzdnUBtGimxSEF7c48oabiKVzCtCe9qkbsHaTjc1PxuU8ZcGouPuJCu5Z8wbh",
  "key8": "3UJevN88zpWQPBr6kfDPYUYo8SLmyW4JraLmjM3Y48ATM5xFPuMjKTmj65EWFQ2X4hLpUHh1FDUjxBYzaNLbr6B",
  "key9": "34KsoiXzzZXmWCPvfYoxiYcd1ERK6zneyoyJHYf1XjzRGq3C3Q7xFpBQcpehaTndqhuQ57SnmdwjzWRMGGUiFeGA",
  "key10": "c36kS8dnUHyMY5LpLTiMfrwiACikkpmhjWxVAoBUQEGPMEFvQUe3eL8xvbVNNvaLS1YMiu9V6H9AUBDGLCubyQc",
  "key11": "5svDR9ZWagS5ndgnCifAUuenL42bFJcdpPNCWm8PiJVchUg1m4PNKEJNGj4yLMMVXXbNKVDpbEjzbBA6tctiUB3R",
  "key12": "55VJg6BTXTy6aEbEpb2dD8saLDDeHPdtswooGN3AtSdD4bFL5s3zo2j21gvnsD9h2duNydTFJ58ZkJvU5nvc36r2",
  "key13": "5qep5LB2ReHvuryGkaEcWtPtWyio4oDWkKhsVLi3h64N8VaLmriFSEeE9Gs2zeL9r1RFohTCPDnWJPeiEEzh1Hjk",
  "key14": "21M2FGteDg7w9y1H5WT4MtnGTigviVQktQjbdgfQrkt5xyouiG27T9VxbvcdRWFRAKR4FVd85pwJBZ7kfFzVzEbk",
  "key15": "41UapYSJtxxrN8C66X3Q7BQDRgvGWGYt1etX7mkcjPFkV4zBb1EDMGR4H6Y7wQf445Ed2J1nstzd2VapyY2nZ9QA",
  "key16": "5DESs3DUq3KZ2szPP7pnJ34dFvB7RTGxoYRuLZVg4m7kymyUFexrVecT8x1rgn8BJNwNmNXPEdQWTsSE2ZFPAJCy",
  "key17": "3GrcKxNXyopFcYcZ82uAqobEdoA2NVjJNm9MBZdvo6NbCXYdFv73g5MikdfZSR62AACdCWo5HnsUiPDS3v1pvTvg",
  "key18": "2xUjVxNdgNCAfDXgqpXB1k17Ajt44Xkhkj6hBybCx5b8nRftJG3VfoWieQakxPfnprheE3mPfyCXu4B4FBkCbZAk",
  "key19": "48NyQf3BT1gPeTa7nfxrdp1PLEunAknssMEwXHg6d6nX6LQBeBxjXCuRq4ke29NYEDFoRG8LpSZuUKn4Jri2dhye",
  "key20": "5NZvynxgDLg2JA5QReeQchkMnmhDUKKR8wCRtKfjaxeY73waZ4P1Lwpp3ZyDEBtW6yngAob8dKQ9aJ6is7X4ieAu",
  "key21": "FYRjoG3bujf3mrHF7J6Fkj3jHgLdaF5pJaB786ovXUXrbbKGu9eDQzYdkGJMHTo6UFqc2rYgRsB5SbqkqeJmuYd",
  "key22": "2axRXhRXAAipc4WrYLZrT4JZeJYQ8ZBd6dmrrqcEXDzcMbXZSkcnVPJAYZvck4NwLteLWzbpeo591kJUHWrcB3VF",
  "key23": "3aVHY7ZrtL9mFC7r3nJwZpmA8zmZ9MPsiFccw55KPsbxnBtF48HwFm4V6M3DhiL4MAjWqpa5vYopcMxu4dtV24fr",
  "key24": "dpgQUgFKTSQ7hBvNbby8iP5bwrZLvweGgPcfdet71ucfH96Cy1Pp3qk6f8ys12B7AJyWCphFGFyR78gDaeLiu3Y",
  "key25": "z1cy6eqMsu1sKPUuziJxiEokb6JQoJ3t55sQwBs7Kaujgf8W2pNkKwGd4Z6VqPHdWarFSeBE9TUe3wSShqHDedx",
  "key26": "5MVkZtayWKWkFEso4gge3wX9MCxZFK6oDEEG9adBEaNgJCdce7WRdJC8wCUHp219Mxypm6LmfpgehqqEWjWBaqmH",
  "key27": "57LzNuNiVSTjT8SASn9nkvEdMf3y5jQvRVLLy6ykpnjd5NGS8N6re3T8hxtQ9xZmKyrVatPhmRBQktBmp7ZEM6hw",
  "key28": "3VapuXjkNmmnnNQU1YHFYkB8UQs7Bm5cZnqYKUao4vFHquJahKR1KmMXHcZ3pFcRqxvmyEm5NmjmqtyKfk4cHupb",
  "key29": "3UegruUC5whdo61rYiDg1uF2FUsM7RMG3jrKWYnUQVfTC2V8TU4BLJbyxibwbyJRjCrqxePndXWRH2ttGeEeU1Ls",
  "key30": "5cpnUKvdoqrx8Evw4KSRh6mTPnsppkHqpunGF7RP7NRsZmdRALYvkUks15aZQdrW6r6FGvKnGGs2pob2EAsDNtbx",
  "key31": "2DzmruyogZ9kyrnZYFLQdAAXcTVxXzMNXEpQTWQnKTGvQU5NkkrezV52AJqYHdLAA7PvetgrMdrJgpeUav2XNAHb",
  "key32": "i5Nbk21ruWdFAahk9A8rmD8SnyBfmhCzPuPxBzEXsBLtmmJsmgxspyApjCmxYBNz9t9hPXVhBmf8xN2PaN2usgb",
  "key33": "3hoFRt61nAsLNtb2eUEcbwnZmvX6GBx2ofZuDGcHb7xsfrT8ja8LFCpogFoFqH81BPZavHfNP3fY9E1Z9vUeGtFw",
  "key34": "4K2i7DC8aTEbRG8mTdUrMMHS6PgPgJemo2rmxG9hsXxRxXQkS9FTkh4diMN7f7bXV4MxrUrrgaBaMxg1RzMicJ4i",
  "key35": "2ZPx32LJFmjCj2Bgywz88SoziDYT9qi7Dg1PLFxpjQ5gBJ8CPDoanhDyfBfsUuR9FAnY7bYt6BBF71cdmjeEN18R",
  "key36": "4V3HG3TqWufMn1DXk6zGmn6k37r8hQBpbMYMMeaNHbd6xL3ZtPR3uFATVDULxSarJUN3d7q278qNmYFxGyB1s8EW",
  "key37": "PVegEuEsUojSKmXGWsNfSoj5LDCWwTQdBf1owiy2Cy2Egf8MysF8ytFQPhW6Gtzf9t3qEyjSihNZi3ypkfuJfrN",
  "key38": "5hR9HJo5GyH9qy8yuJMgNfsJs59bBUp691BW2iPh3ybAF4MKmj7M4okwTPzbXHPrBiUTLc5f7rfQnBpz5FMiMGTX",
  "key39": "bCD99Hswm5xq4RFcw9W6KaEqwcQjphHhNKXVHwGC5yUr8JKKRxdN6wLy7i3LkteRUxrN4ksLd4CvmRtrcszoBuJ",
  "key40": "3DeNCcba31BtpLs5XgPF1vBZYMcypQyERFfmcy1J2jpaskqNNNJ2az19z4vCrBWe7L7Zoc1WfhrBfJNXtCMdUFLw",
  "key41": "6UZCmHEt1MNNa82e3UaEQzMUxb2Ld3q7A3LdSBKeks6UH9dcJZBnQCdxmvPb74BdUeANo9EFAydTPA4MS9H1Hki",
  "key42": "2BdPgV9AEsnNQQZhXPyDxPT6DqjaNZ7Zstpv54gkk8Wzuj1bxWHnHdG2pQ3bivXceNQxS7nKaEVu2TxcHf119sYK"
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
