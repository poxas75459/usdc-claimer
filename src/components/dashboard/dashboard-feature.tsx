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
    "4eR7u8hmuYXqLrbzYG4iuMw1Xr5cj8PoCTWeGj5u89mLCAv3jtV5axTZiDda6fWkFdpjUvenpxq1nK5Mn9KHKoY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuXzdeUGMGZtzRWDeY1k1RvaNGtgb7VXKvC89VG38NibypXvqcVAp7xHjvHEyVo8J9RS5oxSEw9RH7f3JRkXhHd",
  "key1": "4HPkE1wT3FbDPSZovcC1JhZB2vfBuE7gKZGyR8UaB6yBq9M6QJyXCtt1YLGkBRLy6EbrKJFKsU353ZnXdb37fupx",
  "key2": "G4LX6GnMHPg7JJsirAaRBa86cckeDSvAzGZ6QfSd4dBFE237MK9HNZF9wtCDYh8wYrxCaxLda6uQHMLzR39oaVL",
  "key3": "hvF8S6jiQrZVhqPHD9me8seuj2z3itSjg3fFuoLV58AKNMPXMNZvHK8rNHFmE9qd4zjaBCx13bcjwPgW4REdYHK",
  "key4": "22m2i2dtc8uWQkawxB4ax3Uxh4dM1iJ6Apcq2mjUiLHwSex1qRBeqwtcqKq9LjEVD4VW74fU2G2jUTvTXPb2BS4T",
  "key5": "K8roRQiaoeBqhmyhY97ySMezFJ6S1hx2DUpCp5rokVZ7VSpe5zeAkcfc17GgdKt5tMYy9eSqBRTgvbmdB5tKFsC",
  "key6": "QvY2YwG2p4vQERpgUF5qLY31ekjwVxcJzUaZm6XT29AXWBjNJYdRt7wSSspjByw8F4koghMtNtbbQaDqu7qEaeu",
  "key7": "2dVYR5y49EiKKSPKN2Yih4VnYCoGmxNUhENsd4C75VSpVUC4VjXR5KuHUnRe6vT9C8YtpYTdwB72YHGwpcoCB5sT",
  "key8": "2iLh2iDUQDXwKfEeDnet4Hzxv9gRizKzU6EdP45GP7PbVm1wNarzHt287PcUCa8CtoMY2HZfRQDsu3yHmAL532YX",
  "key9": "2zutLa8GFuaGfeMCt24LDoUBK3hzM73hvmXUHXxWX6JExjPBiiUEBQ565fSkdhgRQUpUF9VPF3JJDYpgNKR2m1EJ",
  "key10": "RA9MyhhZgJVzxGNhtAWRRxUgK4SCeKdXhNHjQx8U4q2YjaHDnBDgQMozo15Nzh2ZwB47T5vpyDVz24ffiJS9SWC",
  "key11": "2HwZmaxMeiJP92q7cY15XvcLGEwwWe8Es3YcmC8MyiNC3eSzwUANk2R5ny2qSdZ6yPRwWdov1FXs4ykLMcdo5kNi",
  "key12": "2AGaPuhDdaY2FKm2XdB45fnMQUEy2yygtLx5UgfgMUsNihZZhUWTt8oD51BB7J8px9HMFBYSfFChxPT28njbQaMe",
  "key13": "5Ns5uhxo7LxyQBZVnVRKaRV9YmHBHy1wXmfzmrVPxTftfFujnmJw6tdZzGfQMzYkVGcPwBTBupojA4c5eMcB5fF7",
  "key14": "3T1ijyM21PZwJ484gyZjmNpZP3sRWTE22PJrCousQsxczbj1m5ji6MwrMRNgZsKc5nhMbaeaRcULznVxQwGkXgky",
  "key15": "47HQFdmjMoL2GxtYSYcECLn5TnCGP21ghQuvUUPrvLQVWRDPYGXAKxt1Ts5BuSt3xHkCB2gVHThU9HdV6nTLAcdB",
  "key16": "3jVMFiGZ3MabLbMZNGYn3cFGiramXYjMtW4bqMGnv5jWFZsHHzjG8UaLomxevksKZYk6W3ATCcwcz2cEQU5rJx7a",
  "key17": "4DULs8Xz3TrWEF39ZkNtqxUAWqfrouxA9EBpq4CbYCrQmxSwcGhXJFkgnGhY9PkSJXYcXP9HbtjSP4VkV6wJtB25",
  "key18": "3wxJcweEvsvw3KaX4MUjkRAjeYZR6buqsHYnn1DvEdSkJ4uBoN2XZCc1MiJ2G67g6MPa5v98uM99P8CTyQSAwgxH",
  "key19": "5sGEgm6M8AeSZVgGhug9g6kkX8J6QwfwdvtitmqRBsksc9SRKxxRd5Rre1CGZi6VwZdrxqtYHUknMaNQ8kLQNYV2",
  "key20": "2d9gXUNEuXGNZkbdSwV5yLCGb6EYn3e8qYiYfoxoB22UJdmYeBB67cg3pXxWUL1bsb8jQdCqxiwUdNg5xrcyWfRx",
  "key21": "nZUeCPgAzUTMXfgbz7xHyXHvcXRBPEQ9MoNmjT23GPrDYwwkJ8bhMY4UH5SeGz9bLJ7AURJ2tSioEJDQQeaFA5o",
  "key22": "2PtZzWpaSFAbRjzkDcsWWHhYLAMFEc7BtzQ3rzk2bJq7jXWFvsqxxAB99NEnBtqaScQBFp81iQUzPtDe4ec5Hd72",
  "key23": "3ZAP2im1Soh2f2pkfJ2hHGAg1We7U3iC63J2EoiHaLuzRaR7yCYRanqV8hZTeq2U4GJeA8LWgsmUTrjiacD8oWXo",
  "key24": "37ncicuCxSDDb3RaC21fmcGcfjEu31J3UTEhjtf5Ht2ungrjoYpf9Uyk248mhHYD8b4Ess87a5bhPDEYDt8SnqPg",
  "key25": "4qrkVde6MMrwAHMKx636YfvKMNB2ufJVDzgSGtAxUvD7UAATm6cpzLxygwtowsakR3kyS34mxDi4jQkJZ9p2QzLE",
  "key26": "46ua47z1CkBWnbibDAZ15F8GrZdZzwRbLptHiyY69HSZSLE6MYGwDuCtSjRu8ToZkSz7wCKwRH2WKWo5S13PVi9a"
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
