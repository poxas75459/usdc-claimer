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
    "3Ai3ehm6gDE5t9xnrrpzf6fwgAD1poPMR2661WFJTy9x717LLRyfPNn1R8GRHa7uQ8SSEQE3CZhvV1zHsXGxUfKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuWcFqAzRAPG1THBHSYvkc622urGBDcmhJrYMs7x4526tEr3bVMW3zSHtgorzxKRUPYMcfWmuuJhFdSREuLRQj5",
  "key1": "4PBGn6J1HqoDxD7sJT2KkkAwvBUKyT1FyMoMGShwu3om1f7bganVYQ1TrKm2F6FfLyy4YgKZFh5zAaQKYyLLmTyC",
  "key2": "4nMMCKaZMWsVWLrmM1wwzKrbUtz9DV8uqCinfHPWpSpgfBKZ8mNLVXfotPcM5b3pQEwTVqzDV83F62BRZL1zRWRu",
  "key3": "3C1LoBYDQHthhiy4FgsXzheLh3pXZhu8u3GDDSopp4VfsqxYAZYWcfCkRhKiLe14Es3aNZ5jwTYCnVHo7T1CvR4Z",
  "key4": "3GJPmzqsD3Hr89DFaScT9B2AhoMWnFBvbKG9cmrXfEeZE5yYcSia4Fzp7sjqsnSDDpF4iQZoteLDS2uAPeRR54jD",
  "key5": "4i6VhFcfDomX5P2Yd3msDBcwDhuBQgKRAep8W2zjUdhG8iR1pqDZqurkedhYg3CnPoYmGAX5eSap7bMegSreFUSx",
  "key6": "4xyn7jAWxvp4kXWb4ie8yvnge2fUY2wLecTmMX6GwUz2f8x2TV4PLUiswCQzs62ELqLzEjMZ1kftKu93L2irvtRn",
  "key7": "2fLUoEQveDA6CG2ZfubnEUAW2abjSPdN5FNFTdpebwb8S4wk7xYqaARrURoYrtKTKhaNuCYArQDDnZNveZJpYpFr",
  "key8": "5RcWiz4F8HAzX9qgJozqR9Gytiq9LK8Cru6myMgk2TKfKpKxqonK6BTSDzFFw6dN8sqUB4PQrxNaUkaNpZSJTph4",
  "key9": "2qAumU8f1QCgVpEwJ3ZE5E1FWDJnrbpocvn6KtmTTBiVdcjKUxeWgpgcaWwfA4XcVPYcsT5GVJum1aCBNtWyEC6C",
  "key10": "5c79XdjKXajBrRBNNB3PT5ERDoSCCrSqUsm2TJStVDAcaDCvAVQLYNJ1i3NvqDVon7RfKx1UizhmKTDBgC4HxEHB",
  "key11": "23SwoGkkTHgJYyYkvr1GCaQbMsc51aQn9hMfcR4u6teAdsMXWRFLm9RpL3C2TxtPHZwtk9sBJRD8wykVBHNpXcPC",
  "key12": "5ABt3zCyAaitM469za7e81BujjNngAfjyXhrANZVST3oTS5DETNjaVfKShRhg8CTdL67o9tcg2MpWhgTpnxVKvjN",
  "key13": "3dKJuitfRKaMhXzTbyL6xvA7iZEsUo2hhc7SFsxjVk7XMqGdoaKK7rFCkBxAPfLvyzbm7nwPDwbHT2uqzPbQ77g4",
  "key14": "4UHtgsvRyAnLjk1qx9P4p3F3KMSR1WUfRL1mLMMDQzBU6kKjkSHrf8Xc9BspJh1dRncvz85EJGr3UE2GguFHiFkr",
  "key15": "FU4LPdecA5gV95dHLuZZT5KZomhyNbcSgsNXwxwfWzjxPwbPRNwduPqEqs346Pkn7wZAxw1fo6v94xsputmAdEJ",
  "key16": "5np8jBWd74YMT5Mcnabnb3m9RcGXVVfHtvNgxdasDvBax7WZBBvFJCPrmGjGdFstXV3uVHUpzu4yYWVEFCr5FhqA",
  "key17": "5sb4LQoDmHGd4cJW8xNSXacpDFLhXH5JrZkrB6ruN4m5AxzkdsuaWzNewvvt69yZJ4RqQTKDyG2M9GrDCqFKM4aC",
  "key18": "NQbUkMe8UMLE56RLXMyiQjiRTgGc9zSGCuSYD4xALF8eh9V7JUG2GvVqgpx8zzckgmPdXHU5hEHAcx2qBjgMY3A",
  "key19": "5XZX1eMVm1sBivAbqubtAtGyxjnCThc1FdDoFqDNybvXBvmoCK1KGTmDDJQJhWCVhLDqRoHbQqy8E9gQSqUFCXRp",
  "key20": "5hERuHBY85UtVxo8tEA8VyqzNeTkDx8TLU6ZZNHN6hs2Z7kZSAuNDY7djiZZzLM41EHaBmLd5KK2AcYXcba8Gzng",
  "key21": "3YqEnUbbFX3nJDY45MK5mB2RKKJhWwotNFCDSSVDYY1SCvaof4Qz4cxCFsuuwvR337KrMKvt17xCYG5TxUpU8YGq",
  "key22": "QFWUpdD312Zm7YaL1dNuAVMbi3VZxBq1hex2BaoxH966zW5Jk36Kt3SbFbyLFug3MiGWdACLF3YQLqXUB5b4ngx",
  "key23": "4QtpHM6nbufP2zpNPnwXmQoVnv2zjNXQwf3uG3CR7KvGzDL5doW7DzYxykpoVfKz6DUkwUAjxSYycJswjTFwpou9",
  "key24": "4EVPUaTNCeB9aqfjPhvRyb91ihUc1WBzXQbyQttEVa1edDNhYrpHGVYaHBvjisrYeQiW72itBkge2XDxNjyX6Aw2",
  "key25": "4dg6PPLMsmBFKxnTRLdmVTdbvfFC5pA6ASiqCU1aLh9is8tWPbCAwXX7CcGbXL4W6UmPeNVrkic6E3uVvm5WRray",
  "key26": "2mh9X8w1USsrDzdnStm24rhRQusKfkNE3iu3P9pNkJqcBmqmp2WkA3Txpwqwo11uQUUET33XUd1EBH8mwnLrUaYG",
  "key27": "3ESAxi26crKVRqL6VDdi57KgQn9iXU1v4tSK6DfEfLGUULDFwGptWs6Z6C4bHtSCM9mZMBep1dv9fQtyiVdVoXHD",
  "key28": "51jpYstjEuQWcGqkNaAF2iBw4ysi1GzWfwuMa1EsaR2DfTTHqF1wHZobntwdjiCnzDzgrh5FM2WMepTNM5cy8agx"
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
