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
    "4UQVTh49NBAJKUtr5AkJJTgG5RBWhwJyaAKSgs339RqeQV1ZDpgZS8uFGXjYVGwcj8HCx1Q7pY9dLbw6KiH5gBCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wawMukCt6Cbwh1Di8XMvSpNH22JUfafUjKJHTqUMrMrjmUL7t5wzdNCneU6A7My2NPeMRCyvkUt7SxiHMjYbkFp",
  "key1": "5D1DKJSd4fYevFstd7ABsknZ6QTxSvD5WTij9DUbhtm6mQiyxKkty9xGqKxJXXhtvzrFfiy8sRNFGzKpkWwQTwQb",
  "key2": "5dzucfqm5SBpqUwry4SQB6SnfPFoeCuTU3MjsdLLEtDZSm9yngD3NCpSFddbPiaB2ordzrmXoNMzVmMWPppnYRBu",
  "key3": "4DsJP1rLeM9kuNkT6opjgBxwQU6siB66mWfU4R1ArY1NyARY265hb949WSochaofogVuG3URAuw3bKhKhZH5zRZm",
  "key4": "49GyK4cmMX7vQTS4a6efCR7WhM2g7XqncMW1dhLZpRDSa4m5u8ys1Q1hopUpc8JG9rz2Wu8absdMRMeUgQg2t9qG",
  "key5": "Z5ssDooMyM2UvtapTmdRYdef3qWem2jNstwNLRMXAkMuYWnjbr7cx2M7anqvsMzV1WWgjREasB2khWBu9kmESU1",
  "key6": "3jswNBUSmC4HbiysSSTpm49sp1Z8KcaNRqJDpj1JqvJvEsu3BuB3p7vWERPpU1hhF8XfYJbU1GJPLny1eoyMV2Sj",
  "key7": "2EXmwRQ2984XhG5QCc7aEaz7ZU1hbNy7rMrmCjLbUV3489YqAfmHFc2GkiCAYm6wNAmTjS6WqjA4a6gim8xqmepj",
  "key8": "4v8RLzdg6dWLd7ZJ2VPSMf4kXwb6peitA9ESVTeJPZbMWjW3MUY1FWHKnqJTiGwtng9WwGmF5MD4esSJRh7q9AGg",
  "key9": "5Hc1ugQt8mH8NvhsWUVirjjgorzwM5dqNyttTLEyBjYwy8EL5e3PThhRXyJWERYwFEdwwusKUVLqTMAsa68i7Krf",
  "key10": "5HYnP3ZxKKHrpETuaRzY5TdB6GtJiLzZ6LaFsAw4Ye3GX1SkgvxG4ePrjvw5SirspjkwxuoyNHPkaDqJhATZvNJV",
  "key11": "3KXWSkPAoVoXTB2YmLTK6Kpeiaikch2ZU844dtM2iXx4gTq6y1Ty1yjnx1YpXK9mg9SmYqCyo1gAmsWxPoJkg3Ei",
  "key12": "3ojdxAXZZ3AX5AiXgJcHjEowMDdsNvf37NGaNGcF5UQtU11SGMkXRik7tCtizyuMVu6Wjx8uwcV7hLRw3wbujNVB",
  "key13": "2W74MmfSWPj2zkAq2X5WnXeK1REhbZLuS9sHkoFnvVCmvdJ4XNQ6AGG6oMSAakAQQqM9swqgFK5mRJ8tqaeMEZ1K",
  "key14": "UL7ujd5vAuf1zEWquSLPmHRi8x6cW7LnBQxoUcv6Zfv525LAifVfWR62BzLXuENDMswQgNwcfXnh5a1JGU2yhL4",
  "key15": "49djPtwZ9oJFDCkYtvJHb7PYtCxUATvK9WRBrQHZ61hKD7MJ5TcdhhUXAYJxiLowqE2SMpb1GuRWQoRAAAzGcjdo",
  "key16": "3PFF2vPxAuytMLUG74fLmVPAqnzv4TaCemPi3F8YhipsK93F31GRKQFgdAhjRL382aYGg8RRBnDgGb1qBmaFy8G2",
  "key17": "29Y9sUAWV9qqzX75T1XHKpXSAypXr5xwMjWU1MgJYzCrodXeq3JyN7cbkUKnz7Wu4yokqoxqjaHybD2dx8SXMLW2",
  "key18": "2UHUcAQDBDL2YFtF7PRW89TMgKtLsH5p4uJVbFjSsku5iee5wTNAjy2CeUGvzbosBYnBn5HrqM48fxyi4X41HBYx",
  "key19": "4tFttzY3JwmWb1WWzgRqpnDLUSUayUmdwfvf7qn8z4FR2CTa1HkKgb4DPqpz4igbsoj8Ey5KhYNduNR6PSLnsuei",
  "key20": "3P7LUwQY2ppYRkg4QgavfUU3cuGga5na1Y81T9RvYrtfNUoqknJD6rYmEEth6p1qze8VNSY3MG2sciwoVxhoguvx",
  "key21": "3Lu9ULRqn7wmP5dZLYEsekQDWfARfwUpXVz9XTryT9o9nML7wUxa7iKidvxdVvNqRW8SJXDgkkJxJnZBDRzYbcq1",
  "key22": "2tJmDQ2QYNKz86BYzn7MQe2qecGSMFvmfTf7JvVY9q8oaSvJWwhNdG279Q15sfkgjfeVKQaa6nByb41QHCGSkd4C",
  "key23": "53kEM4WYw2U7Zpxn7MSkMby8QDXut4Mz54cyXkN6nC389XF9swz5XGs63oco1DJm4xp39VKwJ9y2pwgJAyQVQrvm",
  "key24": "3pPxWtB5wzEGzNcmdcGfCExM68QWPABau2cLLEBcvc4oRs1eS87cHUpzvGH7XqiPJ4hhbBddyp3GRKfMKLdq2dEx",
  "key25": "2uyekTdRw436rCzuXhuscFBTBz94ojWMDvDpzMQHPsdmWpxmGD8hdZk32qFrNhCGXpXi2VZihdZy4bAcmBvbS7ny",
  "key26": "53hteeLHf6hQn4aCmGiqwHvAu8neJ5uSBnwJLAFAVtTQNbvBRgKYW827TXdz1aYuLZGcbABue29H2xetnMcgeSjm",
  "key27": "5UEK2NWYxTRX9BHEMKtotRMV1THkKqt4sSQCMCYgcD1GejNAbe6CgJiiaK94ELjZTYq2pJnU7xsAmmy2XtLc6LPS",
  "key28": "3gtM1BSn1hmHyqAoVxXcCz39Vy9XdVPJecwfoQiyej76NsdLwHDCfKjVgppddXSoJERECM1mACt3CohrQ4qKcgMo",
  "key29": "4xD9uBzq3adAjY5G6WtnnS23ikWaGv7AG7nDodvqU1oZ868rRE4RSz31HyNM91KyfnGDKSpwuUVXsWHeNneA5NEN",
  "key30": "3frUT3EU2mcjernZSvurX8PvLtdrfW5SizhX8KvvqrEFBPqLo3xWutK47LG43KkuBQXQQVCxsrX7eCGFa5L6r6cj",
  "key31": "3QB4t8SXsbYSr6ZVmZmHWaLJLPP7dtPgUgKWjLMhpQBTCeSZdQ4hkD9zYa6R7AWUu1TU2ScAs1ppRtU4h6u5996L",
  "key32": "3yL1MwH622tkKePUxGdNEApvkMCzpoa5roRpFFSogqKhXW7y4b2UntgxVv2ci24FNZM6szZtHMnrkPuzcJbCA2iZ",
  "key33": "54GMivtETZ2WcimGvXXtxE6kFhgZq7XZeHAZr2KLCp3W9a4W2Lkbde8NUstV53pPVdBYRRBs8wPwUcpWqFon2pA5",
  "key34": "4xxR619QFvDe7dhMf65Qe9qg7o7p4E1hfjb8RgS3M8HwurSo1y7fYkkCGs3JnpL6vWNLGCLSwcmXMZtQtBGQiP7N",
  "key35": "2CZkMrCNUjdjuPUgah7rH1waV9Cfbfn7E9FjcnWvCHbbUA3EXDEETBS9Ex6oJfoNNCUaZHbL6svuzKULcZXRZxyK",
  "key36": "3hjbkbZomaj8XsXhuL97F3NkWoKbdq4Ud7v3y94E7NuPk9hWRtCJAv6h1Kmsm8YGsEbeXrg4Xn2KzjqmyPULaW6d",
  "key37": "5i5uvGgsRD7k8zoEQSv6NQDfmVUD6iCKJ3pAViVoUoj6JobS8PtuYbxkvNWpHqbgh5Tu2WV8HWuG1c8qUrfF9XNQ",
  "key38": "55AMrkh3pz8joFuTqBXMvtMkdJiiY6PPAkvsqGGd3XyEvQ83VUqC6mGStCmdMRTEkyqp5Xeio4i2VNVvYhFNnM6Q",
  "key39": "4yJEkhJ3yP62wCptCpsV4Wvof2BdhLp3RrqwEF6WyHWFVcHwKkPyTnhDgrnaWBZzVFvE7r2qafoSZPjevGtQfZ1P",
  "key40": "5WpiqGqHP5nibuXDAPJCEWqqxjPf5LHVR9EegAN3ZSW36gs2DmgYL857fAegRYL36VGNe6ogcNzMFUvXgbvFHJpj",
  "key41": "56MjJFp1Fdo4v7KHXe6iHPf66gqfZoicwiQjBW5s9zoGXbQgRv4TyRHnLHPRyAkZBMoEM9bLFDv13HrhNoKMchXx",
  "key42": "3WqNxMHs3CWQsU2KftdVJKjfRMZamE98PBikMAgzQkkzHvSpmkdZWQc98QeSRhehfJKxCqB3Vxn967AzMx3JbXiT",
  "key43": "5CprAjLQiyYt9zF3PJZ3BD53UjfKwVsHWUxd4MfyVPs7ekR9QHJpdDdXVNqCd14S9pQrcAmUPHA9RaaqYYCsQbHd",
  "key44": "2pDyNonh2bD3qpgwFd4cukC3D1UAcrWqD5B6pC9tjmuNkUwkayCq1Jp2FaUGkndq1fCxGRvMU42pGyVwFT2axHR4",
  "key45": "3pSxKHqJhwjQB2W2uxUDYX6ibnqWX5Auf2AjgRx6iSSWBi4G7ZEVHkgqxqVvd2FWNKwQvCu1jY8bUZiiGBUWLNpH",
  "key46": "3Lh1v2bWT1RxyVzWvem5GcLs44SymR95Eg3sZJtT34JUKVUKcpFk3goxrckJoXUbcdReiDqsVVH1iXCGroLqFw4g",
  "key47": "5Md52Fx61wmnrbMkLGUYEiA8pF9DoZFx7RYmXiAHwSZgY8nXZUSWC2juiVFoC2MNKwQL5NdPRWYU8HM9SzJKwCoU",
  "key48": "hodBB6HqndtKgV1Thz4Hrn2GYRAMsqxVb41z1ndnTikA2Y7QuP1bwEJUZt11TyHur71Fk6heyVBDioLFrQztunp",
  "key49": "5CUyV8abWfuZ9XWs7TvxQd1ysSZ9A2eTVaqkkT1mRpYxaWUjWzGFBFCh14te6iMBZrJnMNF9AzgY4ufD3nyXJgYM"
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
