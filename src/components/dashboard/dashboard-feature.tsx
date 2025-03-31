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
    "2pRxb3FdQVek16AJpJ7vBRvLJxLu1xLxneyzmGaz5YRNfD6MqM7ct3rZNgFFj8FLFvxYrX1LohEsJg1cv5tDvEoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6TezqnsZtyMmNTbKMhf8m8CXDYuvJgL2N4smerXdsxULtJrpbc19KbQceJ34oJ4KrDywJTuK2rJuhggENZ86mM",
  "key1": "3f5898LtpiQ65GEk8zJsq216RDvpVN1ZGMp4tKJsDZhWro4KrAzAnRUt9nL2fkMw4PenhfgvdReugyLV5kTTuVmu",
  "key2": "5bra6yQEWb7nJAZzGRqyRnKDHFgEgvpqToMmn3Ahn1t7qTVEbBDGbPxg9wGeVKoJHbZbwAm5RawEtieWWMzboor3",
  "key3": "3LtdbtjzTYdeZPjRuEa74a6CYY16KmmPqDdAXDj1egerQWPrXn7svsevnGM9nyZggLZeXE5FELvuUgFFQwoSUHGY",
  "key4": "52qKKq9yGwgh8RDWxzTzLQcQBevYXiWPBB6cNVrFfS3iJYKS7FPDEWQuPUEvDPGx6UkB7v8Km5jMQj8bsJGVKYn2",
  "key5": "5yroxTdA1nubQr3YPhV6563jqk9PhAQRHMYjgXQDjT475aHswaATiw5V931ttMQwwkbx1Zp8FyMqoXMocJcagAU5",
  "key6": "4eCLhY8Z2VKARWebLWzRNppweD4u2j65TEhc7y1wb3ftY4LGpNutHSZhzNDKgZxr5MRsz16bYMq3kqGqKjhayF7N",
  "key7": "XnfisFrhKkEvW441L4AqQpmApBuX7T6scVBT4b6zB2CvLxWrGR6KuDkXTLhCsFPfmGo2VU7CAwrYM9Nay3VQKWX",
  "key8": "5xVoN3Kj9VPhe8TTPKJBMPxbbh8NRFk5vWrdqhcsLaK3T56B7CkP81SYxLKSJV3hm37wYYLcRXxT6gaEEb5Vcf5A",
  "key9": "34a64Gvrx3jketoxuayZ2ndHXVY8Cprf5RkRoXwccCoQZ3ChoQKaCVLK97tLs45A5tQb8yiLpb9vkstGHiCjPDxM",
  "key10": "2jPSAui2RNek1tsEr6M68h8ZF4ytnZyTmbfknqsMusdFzgs8znfzCCBxjyJWUmDfjxttJKi2idy6QashehDz1DJC",
  "key11": "t29bSX2brtDLDUevtLPLwiFCcwcsdWw7fSXg4nULQfG5EYVHfvbiTt8zctPnHQu5cTFPvXkGiv2WRf3WHWyGJ6T",
  "key12": "4rToD2ESMWzLUoonMmZaswXnPeWQcmRj9kLBwYhLD7L6vJbvZzvA9QeU98xfpfxwSqjJnsWmG5MKxRkuU5HRAuK6",
  "key13": "46zherHTmrGLzKqUPhbzGNvVxAVThoZrLa9m3xjazJ8yTiLg3GoWwxPriajwJQTZ8zuR4dHFmb6vHvRSfXvhofUw",
  "key14": "3vcB82Vi5xwsnLjx8ucT4cNDp6kzuSYW8Q5cUnKpFNBxfmj1thHfLosEQhSe3KyZQCzvYTb45sC8LSvgyhYiwaBy",
  "key15": "2F96eFDyHzAADNiN46W7EY4VGSEJW6uyqUv38KS1TqCrYd5czWKi2mY9M7saoAzGMB3erzbFFLmJAeZVjjtzDSRv",
  "key16": "3Ci2JrVHDcNKxktbKFT1jtSnfLmCnxEer8UBu61mXzsknTZng41YZWdHDcts8jUhMKNMsh6HWnrtkfuhkAhwt5wZ",
  "key17": "5921n2GVWCwuPpmkUCB6MVhJ7GVjFC91irhoFNqDUMP3VB4jjDm662Tywxi5NS2G9XdnYZm5iDv22wPpTpb3AAym",
  "key18": "2kTDrctuPL33UvP7Lji72QCbG6v3c9WnJ3ZAM226XS83KnMRpLhL91qtECF2iq3MYyPeRXuHCMdsQMNMAbkhXkqL",
  "key19": "2fvtHftSYRNnyBhdxiXygjpXgg3qQhzgmgvSoTCKPpvMcNxFM8Pjf9S9Uaxc8BYoQtMDLRbXTTLRibVSFs9jP3z2",
  "key20": "5tS7NTgJMRza6sBmvwWdtJTnsCuf1dxkrD6nsH4QHZNwqqHFjGAws5eaU4JStZTDLBoe5kPVKmMG4giiJc4vW6Cu",
  "key21": "3w1fvU2eFk8to2sQEG258KV9xuPQ2eFBVhT94eRfhF2dowQKtTnDedyCNdcX6daaRx7bMmgVTpqb4rwKbUMqL1ht",
  "key22": "2rP5F2YsWCKBBpzJhu1iJRows5obMrQcFvJprYHbWgv2D72kebTfWPhJu9SoCoEeRbv1TiEieWm8o3qjujJrob2W",
  "key23": "58GDWuRcjZWfBHWbDUxQthnyV4WibH2MST36tUdxhsTtV9nuAcuae9NF3CtN7wzgy8tS2qissTnh9YBo4F4qB1k1",
  "key24": "5vGpEheH4wSuyyE1t6KsxHLZy8SWyT44QVSiPdDMT1BRhCrPZNaoXKhhY3UcNwXiwPNh9zWT6QUpD8iMnPYMY1ZU",
  "key25": "J22ENjX1sZs5NYMUci71AcuFa7sDZVKGKcigwUyMLmeMrrjqVWejRwbEmufuqjjwwuT4U7ZMyhZhQWPBpXiHPjD",
  "key26": "2HP32YUPiyLitCyjAGxDxtNV1werfzKjDZ2v85wemjLu9uuHPySBFeJH8nmesYF9ZUCVLLKrfMJnXp1k9ZgEq6TD",
  "key27": "3ESPMB8qxp6sZt9DJJE2u96Xo2mP1rUJfhfh5difmCM7ZURGKYE6KchAmc7wNA7Vs6SkQQkPVKEi4F4rYpPxmGbC",
  "key28": "aH3ZX4CsRjgNqe9ZEUnx3VVX6HxbG4FiAyGELDR5HVVfG2TQSgCVYNQWm6QSAv7MNYjcpt4wTLdpCtwSgqSxSkk",
  "key29": "3Z45muR4MeTvg8aTZhazvyaEMq1p3Jk6V7kPCiGp8LLmsKSnFjvDHe85DVXoaApzcALRngH4gPq5oMJiSfx343hz",
  "key30": "2Myj1c4ov39Fo1AJhsGE9ZcCbY6c73s3ZoEdpK7ZfTbjKSaZm9ZCboXXMG6wDQLHUEqjPXhzQvYcHewkn2Mn7ixj",
  "key31": "2i77im6jeiroQzSeqTDpMerEB5cVadXdrcXwM5Ba59knf6umJtH5F2ehScga8oqLd42bbkXUWVqcBdV2MD2W4b14",
  "key32": "3nN8qSeb4zH1WVzYx19BNYkp8jJCp48A2PAXAQgGWhKpuUiiV74vkXF768H8q6WYypkHD84CWunZ21jbT84Wy4mi",
  "key33": "52WtUnZGkvYeLdmE86oVA4Ke1r5yu5TNnZWEjCKQrv3zgrxXyveEXbUCr1bUudJXhM2PAiKCpZ1NaqCpZ2nzoVhM",
  "key34": "kuhjMfxCPopfeXqtu2yX5vnFroDrM4wG6zVBMKdyd8xiTfxSNyNxvFnvk1sprYb6YFZ3EzkNJHv6mAxNrzUdoHg",
  "key35": "48j9KTmvgLfMSqAASp7s7vH2ccitgPLu1yXdpVQY7KcRKrYQKZ5hquWcWXq86kVQM7NmU3smmiewucH6uCmd23Gp",
  "key36": "nAmwZDE97hndYxAw5q4rk6iQCuB225DrLN28jYFCErZhMT954jN7eC17pNxacRiBDFTuj9fUmbWzFBr7h1fE5x6",
  "key37": "5ux3BnHhXhgeueRXVRWHxpcFX36SkMkw6Ba9vzeXX7xdqLcY95dXtbyqQFtasFqpZ4jo6xHxsx88aQCHk3PzLPVq",
  "key38": "5gM2Bqcvmii65Kbqd4aiQCnU3WWSACbcXEAhRM9b4zdY5HrjbeXZjJvx1472SUkNLf7gNk1imCrDFMVk95RDfDsf",
  "key39": "3gxfRxqE8bgwm74mrWYHncHcgZRvajLHupUPTVpcU4VcktHMjyWU6XtS7vqhwexgMg3mqwduDu5upXjbbdXDU8zA",
  "key40": "485jdb7zTFxmFMMV9A7VbpFpDTqZBEsjcQXpPMv5CNdiJV8SQduQoZNAFEbctgQF5MuKWmiGXoCK8cydv2xwHXjA",
  "key41": "DWnYfG3RcbXHrQt4RQTPNn33kvs3FW139McxXWtpunkuVr5EMo3TtZ7CdgGzfMJYG5dSQ6AMVv22UtgMLMkLZHn",
  "key42": "54XuF4eoSxXndXDtdKejhnMCqeTG6NTRa5XmWBuyLiWa39XjP9czfhzhnrtgHqAijSeWL8sRXtbDxNCVvUDb5US4",
  "key43": "63qz22irZymREgpsiuBmCCJ9mzKbLZCySd87PY8vkHirXCRum4BRYzpjyz3zdKGHJNcAr9BrVtfpnEwNx6HpKKvB",
  "key44": "mHfhVKBo54s1FFAWzg7uE4LnooJAXaDYECJtUPUxR9socygmjbeSi1h8WFUs82fCwbh76FJYEQF3LigmvB2q4Ky",
  "key45": "5rGwkbwjHbEtbjPZdPz2tsPK5tEK444vRN8bM6uUmSMb4FeBbzKtNkpGEgz38eBeBKfiGLaabp93XETwNfJ8yJo8"
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
