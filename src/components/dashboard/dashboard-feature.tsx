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
    "3sRcK9HFzPw2PejQDoNB9PWGZVbUuYtGKNLNYjmTJY4phRUUeF8uUtcJPy7ENkd99RXihSRXuZrXDrxkVxgBpQJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFGcA2Mr8DqU1skapCq9hk8TLjrnRhYQL9pm5f41FnRuKAgdWgk6uRzgKmnddfxZ7pxbcFJGMsjbZqUzpMuHdmN",
  "key1": "Dmo69vNb9puQ81Y3KEPSvvggvbmnqZ32DDr2TRAV2Wp8uHMVyENXArenrkomRj2rikwEMKLTmTwSeWr3L9XsM6B",
  "key2": "38CV2mCqG4ZUgkTZstfzsvf3zzZ1hFSBUHVBYpy8X33uBADPeA1GuqMjuSuDFtXdUnvZUEfySjNKhU7TboPf7YKf",
  "key3": "4e8oFZ9QJAvYb6D4MhXNNmVq46FWihmd4pQcB7XTekeR2K2HJtNzPz9XehBFd7Fx8AwmP49MkfQKSXBiwrRWrzrA",
  "key4": "2WawhrVsEp8RdFR5VSgRBDdLNgQBsPN6FY8htnDH7XnRYJPwB3ek7Xk3bx6Xe9JXCh2MfATdT5dHK2n86j29AVFo",
  "key5": "PyRW395viJJbogn7u98AqJbVTt8v7UizL6kfHjWqeDnADPmHUaEWBjjrsWdmgZRf3a3ZDRXndXeLVZWNk2rcqgv",
  "key6": "3FhTHHZ6yQBCmRwNPQTfAjbga8SBrmnJuNPxBBpwE5bCV9e5MvZVETixs1fkcQxkxo3AAwLCXBZmVUKdKm7Jgmxj",
  "key7": "3soBuV8fy2GWXs7HV4VubXqMVLQzkaxfVegpNzv9D9mgjui4BWjeYoEGn2vba1drq3QHDVWR1g7eKkFAbj1SKh5",
  "key8": "4RjC5Rs14UAFGbpLS1rBok4JVHXL7aXcZzJmi6YSW6CY8m7AXyBzr3j2stPBUrYpuhMnVy2BbH2dVTx87kSXWsdy",
  "key9": "4P7yRcSEuABS96rNtPdC8m8w28q7dr6AZvUyPhxemEsjUiKJMM1RDkTrqrgbZVQVFxzGXHdPGuT9MFdNNPhPxsfM",
  "key10": "5ywuTUVUoLNcPMoafL1KauoHz4anf99GRaxJW3rwRuGT8WVZ4FNRLqXDPofPSM499K33K8ERGb11gFrkCoNk92LM",
  "key11": "522RgsTqK4k7WUsZojcGFRttEsCbmpPbyDjn6TxpgZJBHNCh88gsfzvnu22WjaGsSg4CrwqJSSDraue515E8hYp9",
  "key12": "NAYbEwxJM3VMapbGwFhyypFcubTFxjgVwBN625d8Qo67eivJVeyJHHxEvVmjtwUPa2KKFUpM9FX66YgtvtWMsLY",
  "key13": "449PYtUxWo1c4gLExvuEZaJKU1MFbCXa7jGPgf9btnQtub9gGLJpneMWQhoGuDY1wYcuyAGADeUE7RGfYPhohv6m",
  "key14": "2BwLotmZz4sPa9ZYB7q2qY6SNKdEQM4m5RvNCBerfu5Afi7q3AsvQGYiTZ6DyPFwnXRKRUYgDNGcijydh8zs3n9Y",
  "key15": "4nT88QyDCGWCJtVqNKkERWQfGPeEydUb4SRK8mC1pe69Xra9M2x3qAVscK8QHjPmHHjnfD3ZAZXLNkD125K3GPHw",
  "key16": "4tsCJjJxywqkyTAaNLe7UDpyLqaXh9Ucd1v2ZC9m74jU7XX6B2yh1Qkorp8U5ik4HTN3V3SwgQPmFFeUJTqPgZF9",
  "key17": "2v6ft6fbHG3a17ctKc9SpzLAGMsQHFgEfFYasvGAdRU4BvaDd4gsgF48vM5Xs5qbMjmxFJEj9B32cjqheVviqzBk",
  "key18": "5uQK3x45hNppB8R9hrRD5f9Weseu4itm3DkGYqp8QWg8mwjMDoovV8hyvjCJ2DLTL9KoHXsuxkX9rku6FrSRSJo9",
  "key19": "45zC6Yvjz3H9CggPqFeon5BFuasSLAn5y3NZ12E5AYYiYBDKfLXwZ5KEgrdB4q62WQdY1guygSZ223jGLmj8yuBs",
  "key20": "a3gxnBTNQm54YmMDdY1X41NdFnAsPCr5HeEwg5tQN9RbpvZrdZaMTDAqSGa1tCd2D2r4M1TZdwkL5HQckiKgmqN",
  "key21": "3Q21GACiPAi3DEifqVwjYUZ7e7ZuZ5wWfdfRXxdgVcEF5gzRpWRAUFDuKauZUVV2uXxtFV1MJmDE9iUBsVhg2tZB",
  "key22": "4gM5skTFryjhuh2Le6wN2wTuX2pTkQ9r6PmjHM6wBn3XkhUsrA6A9Rbpi8th7AyDSKFY2EF67DQUiGBvNV13SWWw",
  "key23": "2ZqnN6kgMk4To43ai3gk4WyQJJVR2URvc2kTuZFgem3VLVTG53ERyfdAjfVbChs9BPVAWfXiG5ugtxhJ1QUFpCRy",
  "key24": "5SaR8FYPhCBKATiys6mXqWCu7qovNcfgNQdLSRaixckjhDvzhLU6SVzsAQMv3d8KWvexHq9UDV9gMqt67BKi29M",
  "key25": "3WepPufByTeWEXDkd8j6ALUzc1xmNAudD3heCRMwat5cUaQDW96kEx2BR36ggtFTCMJNZnbbAwv6SFkQF1PqXeqS",
  "key26": "5q46q5KEW5Hw6CK5QNLQihZkdWtJxi6MT9AQ5nBn9GGh6cgGnb1xD7mbesyACYdBbyVnqXhiG47VgxZNJri5fGGU",
  "key27": "2Zt7iYbYXWXhgqnYLBEWcoZYZgYoW1prneotHBtxpPeSFS68xF66G9ZMUPpTvuhx2Acg9Tq6VivFfDHJXY1H4zcE",
  "key28": "3N3MC2bUih6gQsZ8fSGXPH4cVwfGBT6g8euXB2Wm6Wp9tzyA3z9hexuKY4fB8QLSWjgvaPJL3tg8grP9fuUJ5f9i",
  "key29": "LxQzdusNJsJtc2CSHf4zcqGouqfsJjMxcu1FqVgVk93XTSFxTyqK9h6Rg1KVHPxPkdr79XvRZjq2n2FBrcMMmvL",
  "key30": "BZiVnQxPHsGZZ3nEti9Xr2dJAXq1U8hQmSJ5BgNzUhG7aF4sdaD7LivYVHf9gn2PRQpTrUxUo2DPuCMNA7rgA1Y",
  "key31": "2AqWHBumak1NAxSZ69D6NkvBzqTLveWgzvy59BXF7YJ29DhSBpowKVhLavFiksWoiqKpWsmi8Mr22NQe3GfKCZAa",
  "key32": "5m35nJkSkDr5uDFEhhicAHGXxF5jU4PY9sUMMTS9CBnVnjuNLHokbhAoZwdWxVUNSLDKvTpX2Qr8V9GK6HaHghJa",
  "key33": "5XAn3HUcPBXD4FSCnAsyEqstgmiP8YYQsCEz3X99FUFo9BSrqpiKuJQv1uDf86xL5PjVtdtW53LhgdYuQe4WVj4L",
  "key34": "5HJnrSq2JwEAbJvyCRBoqr4ur3MyPY2P8k9wqaU5f4ch9AT2SAWjfG1S74rwpxipivMLjS5ZDJPKLm4GfyKUpPKJ",
  "key35": "A77NrVUpB3gb1JGNneoj7U7kN3iNWaAKtGvisYWJWKDLihxvQW8BBAtYEmcfaxb5Yksu12FDib6nPJBw8gR6WtY",
  "key36": "2GiwqvvZ434GVJCLNVhojooLfmbPdBzX58nTteb7FdRjM3SEjLK6yRCvLvyqmMxaDmT5xsvanHgNbhmxgSLT2gSt",
  "key37": "2fRnvuSTe6nuM77xFGjDPAycxvC1o8vms6NgxpUJTCCcJZhHbc8L7nuGWZEDDDLCxofEryGP6FqnJhrEV7db42gf",
  "key38": "yfj3F46Fc8Z3Sp38vLRDn7HkLFxLkUCmNqrjkfq8tmK7ZqHgBKP86QipjzNo1MbBz7FjgdmDCYXiFFzbEg4SyrL",
  "key39": "scYDqufYDrwe1k73P4Y1GyjEg8v2F7UXgU9reQ4LaAomg1pJcZZGGbaAXPDq3zdRQ8V47wonBPFqRiH7txXNJeG",
  "key40": "5qBVLLVXCgyehdB5ss7B3nAqYwKGSVsRkN8ZQP5QEG69SgqzZTXsMyPU5ban7g4BGWrAgysXbjCF6aKcBXSD7c9g",
  "key41": "3SrhNu4jduisUVFuDR1WPVF46GQ6EoGCpNK1tYmw2LiYcJFvFwiHbyVzKCGeB7Un3o5FHDEcVYhStezFtJz67onY",
  "key42": "5v27R8ruzF7psiqBcufg81gX3sp8kM8Pd1CyRF8afLzRuDgRrz1AbTN6vkvrFcCjDiBYWSDV65ELfnocpmny2SwQ",
  "key43": "5oVjSwMcqYXkUiGrhHdbAPhs5UmsUnQSg5oM2dBZg1NS2VjdYXkKc773kAQQEdb5vaV95DXfxcZ8P44fZeMc43w9"
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
