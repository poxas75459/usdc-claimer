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
    "6UQrLotduSqXYNgHpvdRX6T7jmyRiUJCPBJ2X6ouarbzTKCVErMtQkRHDrsZ1HwWsm2Pkc41WFn7zN1esVurDk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbUvSrHxYGR7g4zLfE5csuFuSYarUJ5HW5BpZapD7414aMLzqpJr76CdAYFK3CJrhjTdVeWdXQuTQ1J6cujvdfx",
  "key1": "25hydUdzsoxb77zc8Dw1KSQwHSD4Cu6XMqu5JH9jBx9XT4Q653Y3U5NeXCmuVYsJjgsMTKLnmvn3WdxuSeVwUNox",
  "key2": "3oYqURUTTu9GdrwqYsoxogdTu5zDTdsbFLNXZUJG8P9STR5d7LRvgMLNMWVTzws6TJgzev41bhce8f9WMnrgD661",
  "key3": "2Y6v69sCK1rJ4PhmEayY47yvZiFpcJEMUhgx8vuQpiigZTD5r7ZUrwkFp338jSRpKFu3ymebbSUV1ANnRbbJ9dto",
  "key4": "3LntpLvzvgrsFjJF3W7eZw7eCvbERgSMni8pdVpBTz3QCGJrY6czYxACDaDhk3yQehiwsVYBSXRhs9ushWRC9nyq",
  "key5": "51xiLcabP9vVFZRZoEsyYwpBNhu3N9Jcaq6MuhRqgtzYgWJkhMrJPQ2WTAjrjm9nJbdnsakyJnVb8p25TU92Cm5i",
  "key6": "4vsob9JTrMSYuLaAbt5jqLtUFaS1LrcoUMKcHVStsUBkX7UbFpSG2MmjEm1nNEooTKFhRjT1UdT8v4ueSvZNCBZs",
  "key7": "3cmHUUGLB65p6UWZJ1tPo1TfgfTuaAisGQ4HSXBWsiF4nAUfH4K1nEKjvQGBV3dB94tNwAChA5EEgUZDjdUGRC8M",
  "key8": "qrWqaiGFx6rR8Zd8xpRP5hahZuKdKBSKbQZEqASJ4Ca49KLzwxUdPS74BLUS5xj6Cb8Pq1mhivA3RJDc95EGEU9",
  "key9": "46NfX249JAvNM8CSFapMVcP6knTddykokLtPME1L1rDduWR2nKmNYTB1ZB3pDYHi4ySkyJPK6ivC36bKo95bWfGd",
  "key10": "PJTyRnVbUL17vLxCcuHatzKqB2P1sa5KRJjkbonkxpTYu8QmYfdyojJgbNNkXDjHpKfBx84xVtJTTNbo7PTdq82",
  "key11": "2TBswX9Tq6MaKC4LcK8ePEE6yyZcEsiJrxhwFFqTSvurSi6gJ5pcbdZ8TvTZLsYcXqUYh7155H8UGq4XR4qfBS5G",
  "key12": "3YdtSz6EaEFZaVrSdZL35fUjQoJMDNmYVuQaCrD2UPJkF9odA42DrDtTsjY7wLD4eF33oEDSCrm426SVf7r1sPzs",
  "key13": "MsfE66ywBBx5R7QeDNRH7gkfvKerbtsEFU1noUh7fAxMfQPWA5HSpfr763MjPMYDBYpesvtoF5Xsm9T5V7RqHbC",
  "key14": "q5ijiBzP66scecPoAE8mkLDvWGQL3VCU9Ck4UG8mbBLeV1UEMap1agM8evF7aLzB6xz1jrP4KamWgUoMX6fxY46",
  "key15": "2AgaAn3oU7z3G1tCunGRxfd1hTVdeixJu6K9jCJTz2SkrAVtvACqpAV3Ra5du78jm9oWZSubfaSc2Hk7sxsZ9um",
  "key16": "5Q42NQtxL16LuGQQBtiLgdoGLy4nJCZApcYMyqY4QEwkup99M9CgQMJdztBBUatmqZAUGoq22mTNZCvmNmdxNeHd",
  "key17": "467825CBwuB8F29FJHJdyRdBCV9j73dbojqQ9cJCf6XGq5cUgABL7vCr8eAa2Wa5Mwi16qt21aKEKMfp4eXVXfNc",
  "key18": "5Eq9tAho5K9BVioJTRcMg1uKZMuZf8D5U4G46MNcgRVNCWgdq5LwyyPmMV8wB8AC3CJ7891vqSvEhRv1nN6ExmJR",
  "key19": "5Tunucv2HCL8ni5XHWu6o7m3sohuCi1dwcjvFsGCpvCLPeRXKHxkWC2yfwureTjxcGAtGk8yMnW1bLSwWCXNa2Zy",
  "key20": "3SC2QYJxrBadCcB7BXHMVsXYgZnzTE6hVCbaCUEP4prtUX7bF663vwdr8WDnvdRonpruLuZH1Ja6kXU5ksDidk2K",
  "key21": "3MTguGThfQKWpBLuN9eKpH4BKm7DtYrnsf85BYyZUkVbivR1u1NHdp3uACecHWotzxzXdwdHCXQkFGXD3cHGaFc2",
  "key22": "3zuPELMUWEq3b5jGvizbjYztpeG7iPbJSgjrLqEHkG2kZmgcdCL7XYDciZET9gXxr8huTbgu5VKg4i5JWJjPdSgv",
  "key23": "4QUhvFp6GdvAKzQfAn49dh24AxCavuhJ5SK2rFbXUWhPacD3XFxDEJJvju2YSJJ7AthbtTyXQig8q9ftLfPbYY5f",
  "key24": "59x8ThQKcQvWDPsp2CbfTbZfmr3dyg2WzFyCNFPji2wCgwHLx7ZeuTu6reK2pfER8nE1eqx7Uo1xVN7TLYoQsTQ9",
  "key25": "4Wt9smyGzQWLsFs4zd126zhH5LfUZgpnMKJvHkYVSiPAE3S1JSJVGkVHihMi3fe624yk6GMvM11DMMJfYLMmBH92"
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
