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
    "4XNQn9XcUTYECsJkV73qRgpAMDZaEkgvTyuC3mSaT76bW8RSdr3pTkT7bfwPVj8Vozg2rWYuMaFC7jnjNALL8sXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d9UZndAnazzBCnYEMPSen33ejxa63uF5N5VAdk7tyK63QuwJcCr9PT7briHVB9jrGcs3a9evvWAhm38nkfMDudr",
  "key1": "5SVHi3Eg4Q1m1FtBZfsTnPvat3jfZeXQ7LsNEdrS1L5KDNLGmvymt5mwKujTev72qsoZd7Lj7uftYfUmgxWiB2Ww",
  "key2": "5UcdAfAMsNuxx2ovf2Ss6nb7kURLQj73vWP6BAPzkLAtEbG1zBZ4P252zR7Q2KuR6Ah7Ej7d6w8PvzMTtv8XgDHk",
  "key3": "3ne63dNzDhaLkocb7aohKaviSzbbRhdVUvSZVLbDmeDBpsWxz3dgsXfUWAcSw9o3vYQjQG6Y4scqHnFEJcozNjJx",
  "key4": "4Agu1qAv293gHJEPRBApFHxntSBZq1FxG7vbCPnzphFQUTLFizn8MXXbyMfMTsWWhbW6QA69xdBL4kFbRVXENRw3",
  "key5": "61AhRDfDbwsStuxMcHXq8pjMno5KtqPKMYF1mscLy5GMjNNu8cbwdtgXuTV2RxRroqTUfHtqMfNRhT5krpYbuuGb",
  "key6": "3Hdu7VAoe34gkTWFXFp5y6STztdcVnc6U8u3pDqxhrsNELYSaSJ5NuzjAX5mAieepFRS9bGkiSANrP8SGMLXHxTm",
  "key7": "2kVFXwRqPjcLbEE4X4T3Ug6CYMahgtDqhPGKaqB4r3fwa9ajiwVMpDH6BZnCKHahmQT7i2y3YeHR6pELP67Q4SMJ",
  "key8": "3zFmZSfnYqCNsMJaTk2dNvWXrL9fdQ9zBpxfdw7TVd4hy8msD9gRNiHo3bKXt8P9vdHshvqxj6kiuob2hv4Xq8i5",
  "key9": "5emwNGUQrc2yKHKQ9KcDNLJUJEcJKej8fbCBaCknCT93SGsutBvNRP9Si9gxwwn6gDUC6iiQKCLw4otowtY1ey18",
  "key10": "5u9h8fGE5Q7JXuEPdDGQqUNrYQd6d2yzXAjJuSw7fG9UVxhYM81sgX9xafRHky812onRXNHkn37KdpAye2FWXD6D",
  "key11": "3312x4rStRnQDBmoYcG38jh5Bgi2xWmxUEp42JwkfDmQ2xuFCKcheaeN92czyyDosnvsyE3yUnEgYVBCzTgo5Xs7",
  "key12": "5b36szJf2pEMxatpHqSyhwU3M6YQQbfXePqJ7wUzwWv5PFczZWCzr2c2HAhrJQVXW3hKPM6CSc3EATBqSTMUR9NQ",
  "key13": "65HUofiUV1MXBuGhfs4d7fKuq1F2sNN7rvFsV2AmJVSK7rzkELow57DfWc3LmQYrjfAozLfNF2h6zCrv2Yg5TUwb",
  "key14": "5igJ8Smsp4TnPkQdrKaXkwWXc5arNpds98oZbkeFdLHGnDnBNPXheJt3JsXNpPwGsg7cDZV4NuKqBr4Xr97UYJa5",
  "key15": "5RKh2bChtxFbKTNq3GLVj8RW3CyQ6AEDPbT8xtrojkQxDvHxoYGoC59JFGMcvwBG1PJrvi6FQNr55wHK23om5CDU",
  "key16": "3sGBuWNuMTX4H5WEiTujktHa2pwrevzj8eTnRYqv1dAk9Atb9u4xRXxjpqVqLHZHDU9uSawCmJYrH2ncJRDLLGFY",
  "key17": "5rwETioLPmXW7aa9JCMJCBeqFhne9SE4ewEY9CeqCnc1FJpuEUVrVeGp3E6hhUe9dQ98X4u1XZQ7VZgbf671sG3k",
  "key18": "hr1KV7HVHQvnpgAfkob1HEcWfpaPfqmtB7Fcvg5YchBEjzTsiKFCdnw8r8n781WiM1b2aZx12jrFXJM9gkLFNMs",
  "key19": "2z3zRUzjwKeS2gmST4WrNFcuFdh2nG7t1prZkNCUgjRPLatsQpsWAQasMuLNQyFi2n1wQAJLzgVznKBQKydFgAiB",
  "key20": "32DEA6Wx1N7xgVZfMFLMNWrbpdtqxVbREqnXHmF2aQeAuDXKeBwhyPEE7pmPzgbJNuyCyTecXE4s975CytHH8NEB",
  "key21": "3HTxjvRDEbf2DrFf3v3m5vxvsaGHuTHxfS27VFbomZ7Ax6fZ2swcFsgWKp6ytXWWfzVJ3k8Jr34NYbAHxSiqs77K",
  "key22": "2hE8teA1v8XyKKqnsYd7pBt8pt8guTYT9iJDLC35V1fyYKvH7j2noiMtnwPJJZ1mAK2RfxCPCkoPbJxDGnda8fDt",
  "key23": "3LJd82t8C2juq3ftA8CruBc913RUmboGX3b16pX9T4y5jFnionWsQAgvkj1qTyY51rLvC93uk7HCgBQevAF7fias",
  "key24": "3pPDhrKxAJNbSBE2KzdPN9dWYAbSfjWNXYMajA7AAFo9oWqpnTwXBi897gWz5dLCZzN3HRpY5o6sMijWxdnyD6Mo",
  "key25": "2XmfgN7ZwFx8PTaDozAqDpKkcAM7ZEkSv3inhBqoHWcY1WtS9b5LshmpP1tVFwHWY2QtK4W44eEph3cdLFCi83Z9",
  "key26": "4v5tiup1qqyj4Lby9CCzkyvuieH4fkM3RaNt28JP4fftx32XADSNxUiGFDysCakQbsrj8zpRRWEEV9yvBEmyBPaQ",
  "key27": "5rZSZhaAPuavEAvLvDunjDCpvyePb68zptfrv7zLMkiCQQdZGpqoZbi8gJGVYtsdEkZ8x2SZqj6m7zVTZ5HWDZx3",
  "key28": "42KM4T6cGWtk4guC2Xn5Uext47kUfNDcuAQEdXUtpkXRm8ShX2U7uG43XnHRcxjH9QEWu1DzMiHfZCLkF2QBzWeB",
  "key29": "5MrRjwzqvtrqS6M1NV262YqYtU6v5MtbzdsY5WEWg2vAqsfteGpzixZPKTxGfSsY6EMPSQfhV767cn4fG8X6AkpB",
  "key30": "5b3YfSRHH3JBtoZrfpUGhZRYAbXCmaAc4uJ2g1kvpFTNYcuJNFUPkVY5iqLEk5CSj12TJVc7Rg4dQxYKaFCFex8f",
  "key31": "49nxZXW3Chy2yfo6xLhQrxPKEwSNhWf6K9WY3QubXhPSwbMrWmyDP2iKH5pDZGTtASsQYtEpvy4wmPcZNUYe1cnm",
  "key32": "8mEbFu4mXEWQNperRRtEea1UH8hh8UCE7A68ayEzzZ2uiCLKhTUP6GW1rU3M8ZMUSKrLERBKRoRNN4f7x5tEF9h",
  "key33": "sQ46NbVU3vxbvgFV7HboxdRGoRSZJeL8Qh5KUCSDqiMGMTdmRz9xYHZSvZvg15EztdjrQwMVeoZGtFZvjDMkz4Y",
  "key34": "61fSNHzmmd6w6F88PYdCVnzEzAMWmsQandMHAPDjm1nimT4MvEZr2QnucFxAcMmMYL4KXNBcqKJGZhe6VeEhpM2K",
  "key35": "3xG6wvbhG572LT2BVUrcaYxGwVtvhviDBEYsxsJ5aK6TUvugYdkqJ51THbUefgpLCxXS7ky63AXdt9iqdxWErE81",
  "key36": "23zgeconDKxxKmtSGVm8WZZwHJer1kVGqYSGx562hRcjAAm7UhqYhqFrvzpaJthykrKekqHrKpbNMFCMx7jNGzkq",
  "key37": "3MCnTQwsc7iDq2WKtHbM7WBHX4LNchEPeXjw8o2D5329Y9vTLotqTLHUmRbAntLznb7yJYTnaJduBXt1RqEa6KNE",
  "key38": "2BGh52T9vg7nJ3wcnuQFBosBmAKhpoK29MYN4rCGyus8mVcnSbpFQuS5SfTkTeXjpv37fUmTwgHWo9az8CziZbiJ",
  "key39": "2bfBgSKazRZeYmHJw7S44U9qb2aYzRwGmTyR8MzPDCX5hs74ZuN2E2m1BNbNvSdbKhUHXZ8ZYbNQGVwgjLR6htXS",
  "key40": "3BKEuxSq8t72Un97gymZWpxR5mPfnr7fs9ScFTV45GUS5H4bhixQm9HbvPGPQts8vKFAx8W3qwpLB43iDJiGELHA",
  "key41": "tNosbnqtqmYbMuwZX8Y1UxraQvJti3vkFBNKkDenkK8H8NphFMU1TeAi8VPq4QwTevwba71CyGuuC2a1focd2eG",
  "key42": "39Raz1RHDpyzu8KSXeqXxZiRUYEyFcjpuqD6Vnqu2NUoArFGHGGR42eVskpdqvobLArPVBFSMcUt5LxdDLKLrtrT",
  "key43": "5m8G13ApwehCD312a3MWX5n6NoJ5k7TT9xNtg4yaqSkhHwVi9boSsD8Mw6oBCxb3ELv2gen9Dw5fB48Uhd41mT6Q",
  "key44": "SL5UScH4Usd9s6TKehNcQUTUM5NZZbw9tHFi5ENeDBsk4x1ciXnvHQvNLVy9HcyhsP1aQ86SAdU7b7GyJBeb4wc"
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
