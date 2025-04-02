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
    "424svFMmDgQT5CERn9ve6xC1eAe475Mv4fLitcpBwyYpDhzt4SxzNnMVBtb4wKV4WHDsFQG5fBt7hYohqgKZFLnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YimAMNNs2FenyLPaU7WEkwKEZAnUsHLry5Es4qxTKuydfxzWfsVzVkLG8M9sG7Ph2LUS2BXU3R5uLVNhEJiRPqN",
  "key1": "3wwUPyEbUnjJKpXv56vqoXhSGXuUHdU5H72Zf71AZmRiWtwzgspshDB3MFyt3TPKarkgeuSsfp11VhYqQsQBAEfu",
  "key2": "wyjp7PKrfARP3ZAUCGnSG1avHrW4X436gRAKczUPbAv9DfpeuYprGwWawGJtZfH1VhaKz6xgvSZ8v5cyhYTq6jj",
  "key3": "sJUi6X58YDsd4w5NXhGzupwuQKV6Ba3bGmXRWbDPokKbGcdcgxoFANEEDFNEFBWVhLhsX138CyYgqRegWLmBtEj",
  "key4": "2p2HF4cfHaoAgujyG8cCCXjUS578Kh5PjZnowopnxYuysW28mtUHFqyBB8Nk78C8xKQfr5VNCKhTmyBezxhKrPvh",
  "key5": "3DcAmagk1rm1vTdNA9o5Dmm88S1HQF55fZT5kNjaPUyh8rb93jLHSppiqE9ZgAzvCt3RzLJjppCdXL15MQd1L4TT",
  "key6": "3tEAXH2khMeE9LKCRTChYALdQfZSv1odggAoLgd5bjbRWnQ4ZebN2pJKQeJkyKddERttPAmBYgAygymtDMDTioq1",
  "key7": "kr67BuhTznf3P6GJgLhjjSST1YZRMnmEQpnKWr6RBKE9yEhrd8bvFiVHXTrv3hhEyqZL9xPghpDpqVXWs86N2y2",
  "key8": "41jYWWNQD3198YjCU31pwFgSuc42eMJF8UvwG6mMUtkvJjRotArCczRzXnb8DrW28egWsNd5e6jVFnZTvdkyBK7x",
  "key9": "Wabh651jHuTudCtxQRke4421njQa1Ubhiueu7dw3X7T68aNLwrDDpsoVCAqwq4sCvaQvuqqnXHUux8u1xteTBRB",
  "key10": "4SxMty79G2XhkTGZrQmUV7oV7NPviB7FkzZn4AbkZugtVR72GPVfv6N5fYz3nsRL4wzWstyJJfKCZKcJ2hNnhKHW",
  "key11": "52Lpa4XFadKcfL9vGgki5sndsWmKSP7GJ7mxFyC3b4FA6BYNGdehFMJ8KQzSqnnrk4g5zorJ5uWokF3iSYTwvfTs",
  "key12": "2av51NNsEoMCidjKaUDyLvCPVrubjBB1huU8TUsJywRP8dj5q5Ew13yygpaWXxiYFHL2tXpsVb4MJrxHEBpMBaru",
  "key13": "217AnrgGUwTTTxHJ47ie6vKRvtWFDmaczwpyiAxSRxopcew5S1KDQ7uuwcss79GHDhP3NrPioyLGEZaDxwBShpE8",
  "key14": "5dWf9eUyGDQjafZkDkyfwCsv9cRsGDwq1JDKZZASioRyemPeXWyvraxzPPT5hrWCnCrqrrwcdzjV9du5CTf8xBrc",
  "key15": "2ZHDtB9tVu3Dk3qVAx4HyGA1PL9iBNmENWR8RHdovtoHAegEfShTGhMBzxjvbPjrFjc5PH3F4FAd1GDamDH7G7Lj",
  "key16": "5FetQy7RnGZXn6qeDS8ybPQtK5mDZxYxQV5cfR6TfnJDXpTnDNP3X1oFDBCYtE5vaMVAcCsCpN2bHuvRdhzeyxfy",
  "key17": "5fT58hNLHeqCNfhHKFyEKSErZdiVSrHgNNtxRVq4N6Pd93FuuaFhi9qjsFHgCyNZwb1VRduUxEVpAXjdDZ17RZXM",
  "key18": "5S5vHuvsm7QHXF7wkK5QsruNGAQ3zFS1t2UzWYRYkEC8e6ezduiipM2t6gj4xFWozAymrHcW19hKxxgCiW9DyFBU",
  "key19": "327P22QYpWHRVcqC1gkPSGLsKCJjKX6mA9cXuTuuLSXGwHVTXR1ozCSm2L4WjqiDpBtJdj6DMY5e5oFuzW1XvKMg",
  "key20": "4ae2kaA3iATqKWZ7Wcf36zpLphySXmofxRXaPrX8cyo6CPU8PRorHYnQQjJoa68Ug8FAEXMr4rmndMzFWsv7jkf8",
  "key21": "4CKwFSJ7LkwtC5GqjPUrsciFhcXnsCskEY1jhqQbfU6sdc5g8v1Fepxef6DAYMP4BkGwaqDK6prHCpnGkAWALDrW",
  "key22": "xQoLK2WoMoMYsQDMF1C4mawqjuRmsjKK57ejveQsc1b8H1K3of4hbharzKHttpSitEbZ9Sj5U5N9BtjKszqNgL5",
  "key23": "zjg1rWetAxDkdv6ubLSjEuPUvCgMeSUeZNJAx9Bp41qneCXomGZoWQcFyZRxeuFiawEcqFGW4F5zKegwVDTLymZ",
  "key24": "5MW4osjEd3K3rvoGuF9rC51Hix59tgf6vERGtF4z8TjPd2fMzTbaDQGypRK9JRsSsWbvDhYc757reb6hUKVUQwDd",
  "key25": "wnAq5rFeaeJvT6MmpV5jbfJRfPjBgjPBLo2Uin21ZMRN2ENinyenbPF8pjAtF2LCCCREAf2bABqrkKdu494hPy8",
  "key26": "e1ngkwK2wFpQGW6WRtJymXzVasx7E2fVfp4SsYRdNcG73AsE2Q3c1Z2pNmE6w2yGBZD1Ew1tvBVGBUEtAL2gELd",
  "key27": "21truxRhWD7PapmFyfKhqzn4cXE177byzZWkHynN7QcK2sRekqiztnkVc2XEHommVav3PevSE1eN8j7k5uQa3S2S",
  "key28": "pfP2rBNZcUKwJFKzvyPqWCLRV9CBWpDZhFbAN578XWiyfzbaHuYFxmGN8qPTZ5paxWZwWai3KN5W5hM1gZxjwEw"
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
