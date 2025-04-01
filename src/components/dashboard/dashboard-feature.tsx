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
    "3SvA9u9UFm11djkDegYSqMp1QzeHmLPFsphhzdiMmT8FETxuaoyimBa3jKKbctCDNnSmgdSJQKLtnNrHhvnE7qpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3BnHcBSQqVHBLi4ZfR2zGwQFze1QS6hCy78Rp71FCku8Q8hC6GJynzXRXdPxTdPJ4b3UaXfcWrBDZw1XchuRUZ",
  "key1": "3cgrPYXKLiqqDpm1hPVP2V7o52TzEJnakZUv7TDpVukFYZCpRkxkEy2KQks3cBuCwKuxcYRNa66L5WLy3xnJLvcp",
  "key2": "xHHeJH5UrBu9nprwbnukhLYUzU4bifLnQCZVyv8QDqSd8zR3qBa7yWpHcoPKcWvyaDTzU1DEgrBPX6UmqxtYooq",
  "key3": "dritXswmpFwT89Ex4s2KnqNYBbkHcDViQ5rftGq8DWc82mrcG1caZmyFxV4DYzVbxUtzTptWwdTSkKQaWVzq1UC",
  "key4": "2YkxhRcj6jaaEgwCjMWVVvdoTPCN117tmm5xvZvNCCG8ZsLt5Wsq8iiyEZW2WKBazWx7zZhLRCVVBBJxwpvxqpdN",
  "key5": "5go2jN8teN69MBkibmYgohgaFEHQHdwZQ7DuKcD32s1ckbsbSiwYj4neSeof99t1LMwC7Hy65JcjZjsqEqMYhK6M",
  "key6": "36p6iar9bYdJYzk6HHQzmkKYzZm4ehC87Ty7sbTWdyUNtwHUF42R9EH6cTxmy1firtKS5gc4FCAC5v6MB5fq3iT7",
  "key7": "5gwJTkXfAjMPcA3869Q6QNR1Duotib8VPdAqfzi6dpJ9CxcvpizxPbvKdz2Cuyt2Pc8pNDejjyp9S4kwCmg54vz2",
  "key8": "LAajEgbBpjxy5GRpmc3oBt3PGFQzkfzL1JmhwTNof8CAbcm7yBkKuHZQcnuSjjaFixWvZNdo7iFA1nbs2dMe2CX",
  "key9": "YMu7FSxWt74AGsHYF6LYJa36AozXQ2mRD7ffKo4wmHaJCiSYPS7wGyf1DJWPj2PRCHxkHznhFZQGkRA2szU2zQ2",
  "key10": "4xt1jK5bKrjUBsDUFT7tEf6W33SPv82qWnnyAcp9iuueua8cKyzYmmMT1trZfDKqPeDi7mHQRvugbV9Ma7hW3THX",
  "key11": "2PmpLJ3j8DuqbzwC5CCLoKEynYfDSWqAFTrR6yRtvFA3MFN9DJsVxQzPWbXMsBWmXMgntRt4AyG2mcCyMTrTMmHe",
  "key12": "33R5BMH3PzSP61Hg2Z2QjDTcLzTc9xGS4rTfAmSPMCRC5zfgYGZGdBa2fMgTiDzaTdTwAEPKcmqJ86MbgqkCzACT",
  "key13": "59Nrr4xTS67F1aaUcynWrfPVqH6owDZVpfFGGnqLHyZkf1SvUnKPZXT9727pyYwfxpWbQFXjTNWnF431pEhSGcPf",
  "key14": "67DccvtD8p716AqTejvZNnwDXs77RzZQxfHfVtgykUiFtEcu1xhr56dfAbixxsjJfU41GuW5wFomL2vbRFfcAK48",
  "key15": "3XQmG5ZU1bHFsS4T7rP2AfzkhfmptnQSqDubPvonD8sz2nXXcsjr8Pqvbqu5hPbBqfttcV9rs9dSdYKCHoEuhTcq",
  "key16": "3ti5scU2PC8QCqVSks5aHmuncnc7T9G3mp4ETM8Cs8Agg6i4oYF5bcQJWk1kZV9mMs1pCUHP72JwPEmwZK3qFPqf",
  "key17": "3FYbD6jrm16N4abhxS7nxYmvJGMqDk4CmV31d5RyiGheyMi1rfMgqtMhagQesbPezFvBcmZg51crABXgBaPaqm7w",
  "key18": "4CaZofQ21aTzHCctysT9dkmCpi45WXsNRRL2WkimNvCCyBpmYcsXs2YzF27U88pTBRxHKRQxFKHiy1MxgzQkTTgR",
  "key19": "2ECRtwYdDLgNmrBKAFmeipURuUGdmmfufnEHqpqAgKpb7SKcky3tcVaupdNc3JspQ1ZCszRiKDNAsYevpncNj1Kj",
  "key20": "5r46Zud49z86BvR8dBt6bd94JypZxBvE77Yk5XB4cvMhNgf9njY6PPJqGWdBdVkcjfJBfVKodadXm38LvT4umTEz",
  "key21": "4S63H3Q6tFqhujhepwMc4n8BDFZPDzi1tg3xw4DHZvD9WgYuyt1JKqzoD3LAeav7r3ycFafhAZqnMrssBCuPuXR6",
  "key22": "5gqx8SguKrw6t7TMapYp2XQShi1Dk8eEQMsY3EHtXRt71FtW6FfSE9mW343XmMPNFAv5rwY1TZvA1gkbBYy3kkCu",
  "key23": "3maLiE2GCk9TVHzVJ4dFshrmxHD6GAAzejjYmos8rexQaANZWma6GWgmRpQ6TvqXrXr9cs6QURFbVaC1LnEPVLHh",
  "key24": "4crsn8JATmNSa76AcYhH3XBkMBffvVTo4FCzxmEE2vd5j5fi8pZ3hRXA5KdR815xzmP9ZNSR49kR3cQxmDrgnBXu",
  "key25": "2A8hh7JhQ3ya1p7UPt8fXvFaJc2dTraBcVqvXz68dYNiMuZHQ4UMaDodaFkP6wi2j2Bhu1GbiF96QsnrQNZc2aQL",
  "key26": "53nfjAgjiJqquab2aAjT3cr3Xsp87uVz2qLG5MerqRG64LKc51rTReeASjMAatinMfNCGrgCgk7Hv42hr9aThbDh",
  "key27": "5itvNY7EnmHL7o6JVBKNVcCQATPtqThksqVtPwetFtfgQHwP6Tb4gDfq71iS79EM75aihiM4q1MTaEhH4tiw1hsr",
  "key28": "5Z1Nz51a1fLcaJuwHZmNJx3gwHLRbNFPAYsnJNzB4ftQSutyWd7h6wy5vWFj3Hxf4KKFyjNnnwubGQBKNZvf9H2f",
  "key29": "24zT8KBormgP2gCyunhGL74wHmGzxXmkorS5jVkPxDdgyV48AWLapeHkfFqZ1QPvLr5sdqpq5o5jAnWq1Dr4z6DG",
  "key30": "495KXPCgRAkASY5zjMCVn5ECsCBhZ6bBNT3RaYEs7DDT7XEz98aP6v8KmgNf3KEcpjBKptMsR9N7jF3JDB4QXSp4",
  "key31": "3PbN5ypPMJHw32QospWT24SC5AS4pXN3dMSGc1cfPviJq5fKC3nz9fPnz76jeMAvbTZKb7MSxFVcn8ZWLNvxj1SS",
  "key32": "2Z1acU5q725CpLeAJ5XErc7u4kCzWBjyirCafBKzaXC1M4fNjnVNHRusW9cqjtBK7eimduyyZLLrbN4PHawrjb8K",
  "key33": "3TDETxYiZBAkArLQUYSUC91oVwut75ugFekBoCctVMhX2VgdcQLfN5nM7u17a4VywyYmsN5YtWSjMdSBFXZmcLzZ",
  "key34": "3ReyBqZUnBfbVC7rxmY4BLUm8hDvCFQzBQxbWtNpK2kz7oLYJsVudDakSmU8QejGLCArFjxcC1QmDpzad6BgJ7tT",
  "key35": "235zKxr7wdo4SPt6y7xB73zjsJaT3YHYgH9vnp3q8pjh3ifG1ADMFQov2LJH6gMST9pxGadVnPgCSUhYbACPC8Bg",
  "key36": "59YvbiicMvgcJY2KjuMyJ1F2AtEtde2F49VBNb791dxMsNFqPfQsaRd5id67QifGmSQoBVw1MP9vDB1XBmyk867X",
  "key37": "3fehcpUcQCYGYHHcRK5PRCLUoMQTiGUFbr9oHVdSKkrmkiWZ8qcBnEjKJms1si2bpQTZXiSERmamZH3jqWVNhBAV",
  "key38": "44vQtk3m9DPSr8iC9cmp1P4UUtzg7QGjAyQxzwsyirCyLV4f4w64ubKjDWHedZE7SbKUPskowBGCQdvNaVWaoUwL",
  "key39": "4z4MKibQxZiEyeqJW2qD6a7uk43w9hm3TmBGWAgzYJ55g4qWeHFo6MNQJWqFNVda4aae4crzSohWq4fLsMX3a5Dn",
  "key40": "128u9pviD3EE2Jf2MKL3MVji3By5GMG2c7CSPK8SMqKmtF5VW9VJqsgzvCDCTSHqjz9XU1JCcGJFDVs2v93STGPy",
  "key41": "3QMWucuRJfHpaDg7bT1AK2PRzuFsVCPPeJfthgpDxzHmiB8BufZ1AeNxJ3dsMUHFCoeVcEvrmrAxpxwkGBy6jVCk",
  "key42": "63dzcbYZNnn3QwfCj5HC8CRwPRtTWbPrwRiYBoiUtGT6Y3SLzHWbmfeczfAoxXoD7ng9Tvq6G857UALc6kSb5PZq",
  "key43": "3nhJvN2GrE32DPeGXRZv6pXZG39A8eTSf1VJVQAFREYTNz9gtKJTcVmaq9fNFTdp8bp8WMN8yy7Fb8MG8K2shqta",
  "key44": "5SjJuyKkJtjphqUtuW8d6HT24ogezS8RYjQnCL9YeJ3FWJa4XYeS7vvDjGr7Cn9HEkqAfrjV3pGXwTMR3eAV876y",
  "key45": "22xiXsW1GekAzBmheGKekuBvwHs8fqbfcMYFYsAup5Chb3gKCAbgeuRKCQbtNWwA9objB97wcuTzwCRoSvvst3vG",
  "key46": "2ffCT4xmupMWknBQXoGzo2SnDq2YmS7DhkgDsWsiQFYcohzVte6qD9bek3EL79pKcEnor6gMCufDJPT5FQHHVqaf",
  "key47": "33rhPUpeq651zbJLcDjjiiyJFQdL73XpbvtCweKe8XdxwurnuKHGjqFXebrao11VHpRa3xAcKGMYrsGHpEzEhtYY"
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
