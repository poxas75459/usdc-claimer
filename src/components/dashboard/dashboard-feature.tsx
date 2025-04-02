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
    "5oqqV1wRakV8fHbrT5XvdH3353y4QsiMLs1Ex4GzSZEqUZ5eanoqPHHk9fXxCoGKDWjhHic8awvEegeVxMKYSEBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W9EsaEm3GP3eutoEvm6i8tj6iwP7a7Re9g8sXjjqENPmHiiDF8CNZMUGPcpBX5EzmHJXBHD4fAjorYQzGbmoLQ3",
  "key1": "zoTdsmtjXS5B6Bw82EkxpnsxhgpcHUFGpJad32bKGiUt8DkqhNX5NCx39wCtSdzDXMWtC65LeEtw281QiEZwB2g",
  "key2": "3CtBLs3zgUvqkSHYw9P2LKqfHVo7jrR94kj4WkyRfxbfoRxQMpA7iWTPFMBkPjhj7Gvy2nw8T4xxKTSXhfRknB5E",
  "key3": "2eq3Thx6F61mhXyLqJBJcE3g2csBFKh3eKZrQxC8Wbrke2AV1cwU6Pn39yYQL9p4Qw2nq3Pdwm6V2nHTq7JPWbZt",
  "key4": "2FWqEeLfrsh2nHCo5L6xJmyR7pCjd4DWFCsn2k5LfCydHbL9yyvLjr3goQ3yq3UhDMSn9ZaXZvWQstZLNbvrUyT6",
  "key5": "5AK4YcvTCLuDZzj5reAZMVJMR9TMguo96NxS9Vvgx87LbrLzjLb9FcfXZrqKdgG6MABZG3ZmJkX5qWu725dJFG4r",
  "key6": "5NjYYNCNjxNZEi3qCy5YFvTzKFXGmkCyaVvkdhmrzrNHU9T2RxTCgwY18oYozDcRMzZaP8TWfji47eWPU8XihUs2",
  "key7": "R5nKga8hKpMCQJ1YueJqJq3XSxC4XwxnvW5sb4D7LtcGS2oUmohiA7HN46R4utXxW4hr7DMRKWRkncba3bxvpAs",
  "key8": "cncNmTsq5CPQNKtmbZZD4umRc2tWmebYQyMMTmCFktYXwNQt55pcX13sdPSimYNAsPik8CHXJEfwymLP74pfmWk",
  "key9": "2v1f3nbZ29u4AhzxhEhDbsF88u77AFY7FsKzbGigQAuxqqqKapr5hkGeJQfsWTMs13Ycwo9Zq7c6vMLWTU5tonAa",
  "key10": "2bhW9p1jgGcxGXDGs41STpjJrW4YvpoTX8St7QYxx6RfXFSzsK3Gz3RUwLivZRaNpCMcfjmDrjua1LhS67gcFkFq",
  "key11": "5kWz6JjNYsFECktmczymDvmnyT8Fe2HUExJoxsBe1Fz8iuXRufNigtz1gfwZ22zQ5DqQMdPzVK2MgetCah1c7qWV",
  "key12": "3RbkQuMEswkdpwJqxzR3cGXfWDP6P51TaQFpraxFQ2DBAEpBzaTeBCei6gC5joW1uvhHoN7ZFK9tRo5NZq8ptogN",
  "key13": "7ZJq1zWAi67zhg7aWMuSNrNX3pb5zZzGZpGpyQ9UixhrGLsygRFqLQQJB4nN6TfWak6NLT2vtFvmaQfZRAE93oH",
  "key14": "3SRWRqN6bPHFFiLin9KV3koEqXqbYPjEmtczA1UNAp6Uzc8X2eG8W2thRZevN3MHRb8PMsxVBiRSVHCEFypwjyub",
  "key15": "41s6N3PFz2mRMQxkF6JMXAuvEM6nFkhEXLdyP7FTQFWUgVkZc72A7WnP7irfUrqVD3eejMYj4g5rDxnx1LsR7GWh",
  "key16": "2VJiRztrKkJHBtyJyUZgfEg95hhXjvxvy8u97jE2cNZo7tcyKBnUznfFs7FVjxuUzsML6MeM8sbvJJDdu6rEJ6ds",
  "key17": "pQNDBCNgJ3SuxFxvAwFp5jDeUCEPxQxeYQ8aD55o6yoYKRmGWSCBPAkTDCR6Gy3wKEGixCcLbPbS9A5PkS3t3C5",
  "key18": "4yS5y1STfZbrxoLjX4hieM78A9z92sYjcxD9z7oQRLLvUaxKJPfBcWNmudxh91NqGRaBz1g19YtMdtrJKtHr2oQ3",
  "key19": "54mTLttdR64tmMCuMRiizn8YdSpxipQKsngwNpw7YNK58bbbJggZxJ5PFvC53oYUFb3UDWnHyaL15rFJUodbREe5",
  "key20": "2sDUHSAMW4YjJFqztHzcmrr6KJSDtpi3PKfTsjRN3sAsVxKpQNLnVB41aC2gpusa68GLm3ZJ9z236F35M9pzYYYz",
  "key21": "2o5wz7EpCVHCzQG8QyDXWLwq7RFytz39T7zNpNWBZo6vaW73e51AZVrdP8RkJzYde2jMBYTnRfyEJqexZiDfmePK",
  "key22": "5RQQiUA4sRRExoeu3cTvCFqcd4SiXk53AbereqR2vjZj2Kapkvrm5qkRJMoHHaLqBsTigtWLz72HqQsoMmUeyAkb",
  "key23": "4j49yjBukj9va7zmQpCzHCnscVeVRGHPkKHcsbbyaz7oR1czHy5vxkbFefudayCp3cskKmACUaQWWod83bo2BPWb",
  "key24": "6544MqwW6GMyK3C7xWPVoLKLJiqTXDY3UwQQRpRmp2E8WL4fNfPqwRwkZ3fZcetDJhCKQw9vVbFGzgo49yqPGVDE",
  "key25": "2Nse3L1HBdRMDgvqWGaNq92yVeRp7mvvTStE282r5xbT97hLqeLws9vP5tfbKdqbLbe8Vg39ehK345GHNVkKxtQd",
  "key26": "4UCdNug9MYSiqpN5t9SAEnrgw3U8rVMVyRG21x9M5RBn9eNXwLynkjUugfk94Fr4ze2Rh5wWwUCNTEwvxyYLB8DD",
  "key27": "4Wgpy7VbuudisACo69XXbhnnvkUHBmcgkJmzXfvGF3XENyL2B5pyqRENts7Ytdk96dsa2XPUz4x6RqA2D6dof9XE",
  "key28": "4soCz2oBEFnyz4iMiMwZRBrTpZYBgf1BCTmwMuqVmNpqxdAMHccp3sse6tqu5yu24jmQzqfaWVBuDMdX11PVNw5d",
  "key29": "5N8aJqrZuyi9HpcdEPbwaG1nzdkS9XPHAYoqcJUVLYWfm6FDJazgTFui5H9s6Ki4DGgncFpjMNusne4efcRJbBUH",
  "key30": "56xdcD5uLL1kL6CUbhPjCVJ4TyYJ1ww9HbZuL5qhUx1hrh5jdbw33epq4R69N3eKnd5Y14myXsgiB2qbjgv6dRfT",
  "key31": "2NEjuSHswJob4ApwX9kqAacmbBjMDctN3qXaEbvdx9n6jaoZ12rwLMSuxaj4eq28RzDXxWphvhvgg5RJH2J4ykvY",
  "key32": "2eMek9KxCmsPTCUgZG4BWAtSwyGT5mPLDcWSy8wTw5FeXYi2BUh1mpMbxMGbDG15mMVWnn7a2q5uArx91mCHQq9c",
  "key33": "YAuXXr4JwXTyg17BdusPuJwJtHLKrvqNjfPa61FGoqPYYH6yq95uyFnKN5xhiXEvtpSPTrW7rd3BNC3uzj1HtLN",
  "key34": "4e17Udm4cRy9k1LLK3NgopEyuui4JTBrZQsJ8Mhxy7HTvDNiDE4yF1XN5aVxpChQHVnZVMmtnxfjzkYM7vMfWZbv",
  "key35": "2XWE6LUFweHMVdLH1ArcXAQxxq7HGut7vA8e2nuTTZPXqTxYhfVSypFCbFi9p9magur4JMWjeabtHdzRfzTvrjZU",
  "key36": "2wPy35PjEtKrRV4BRLP86wQiiAPzsKNNqKn5pVa412kpC9VC8tA32iPhv6nJj6oCDkc6ZpvRL3GRiR1ADC3Wyp7G",
  "key37": "5kG4DHN4JyXznHpzMpui3kgrCxR3fUjoHc99WWnJPE3iGUEonzUnnL6PzbSvctu1H3Jv38iTRcxuLPTXSFnFHbhh",
  "key38": "7zbn33mgJ9LGTbAV4vZhVqtsiiS2i49cNsGBgUf3R8MAeK2EKMUfxxoDzV373ea4FRyYZKF3Bx4SGFfS2BHWhRY",
  "key39": "2ArpyQCeew6GJEHRomZoDPiAiphoBbxmtjNjprDNtZeADt5aRFxDB3seWUBTxNVW9YHVjpdELeUE52nP7tYFyhRg",
  "key40": "TX8CUxsUHdJVinCiuh3zSkynZe7bSJ2HMESRYWfgzjDZrVZ3WigQSd2iRrFGCv4F9ZY9rnkWDowbrrbj2UpZ1Ty",
  "key41": "4rRFbWZY9hM4cgtJaBxLmMeA3Vk9y1uCfkWAjokKVJ1vWuMj9Wo9822jap7VNYD57ctJguTtwHqBgaSA4QHnFEsH",
  "key42": "67Jauw8tTM4HaTyLJFjN65KMhozBqadWiHJnMY3VtgqqagitbMRB3mRs1iUXvf8w6NfBdBB3DNLH2q3GXsJM3Mtz",
  "key43": "454M1siyViz9rxuKFU9ULuqJDcBk2GfdAG1FJ2GjUZiZzCxTJhVQZD7WKTa5QkFEeveBpznLkda7tyfgabrX9BUj",
  "key44": "5XJdKBvRdyCJHRNPg2e9rEX6cjLji1M868MdKeTPRh636wiK5yNEivjvUR9aWAeR3R6hLZiAEp6vVi8he3WjLdW4",
  "key45": "4Rn7dfQTEAhRLZGrTjp3spSYtMkGRLFZPktY9UNbYM2hRJvyPuEzLSEcvsS7bHwnxPJ6LcYaURmKGaxAXbHtr3gN",
  "key46": "4DizasDF5mxqTqEySEWWhvt2xm87StGaiLW1KjyVJUPB913WB2ruVxGphsmAmfukoEVsav9wnf8Up5bgN5WuQrxY",
  "key47": "2XrEN4sDXGrQuLtWi9RoC6CLbWbFwY7ivDwvkd74shKNwXsveFABemVFhxDRNRqBCt5YbKXNQ8gbUxErpgRvpdj8"
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
