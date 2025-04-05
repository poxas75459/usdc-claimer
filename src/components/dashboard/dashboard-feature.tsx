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
    "5c5NRkRNwB9JHaHyv7rCm1teoXziwoe9qtc4aPuPPddUNXTuJMvz1VwTAVFnqyw6hK27Hkrnem4ygvMBa7mHLzdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSgsGRFxQYGStxweD5WatXpCAVMfrxMn3HEE94JVnH13JpePYbxZHrNcvBpKqfVMrZ7MtTDf39r33CgvrMjaaoP",
  "key1": "56e9PkBNCBuCdLJZ8kbxk3BF15CoGrv9PFmJ2jGpxKBZUZ4WbJVci13UdnfhegKFNNNEJq65NjAjynLnrdXsf6sv",
  "key2": "5CejuR9NbkeiJsQLzhEkkMTUg5PbGQdGFsyvyKGK1CXRqFUEVLmrBoFVsvmD7PF53rMopCByMLXgfBy68nAHD3Ho",
  "key3": "23Pm7iZsCqpvXmnfD4KEjSk1bzgBdmPUTVPyHeTkdLL3bXiFUg5pR8EVpm9wrVxAwwrRSVn4AktEhVwBiMn9njL3",
  "key4": "5WT9o1stiturBNRyLmnScPpS2v3MJwYfBNorsX7Vj3Yo7gnzBPFbwbP36WptV27XFpmC87aBcgyWCa4qaZdbkEPp",
  "key5": "Kq9jWKivwJtEt3c74CPT925WnoB79iEYjZc7BtSFvyWJmvgKRdPkTGrzC1ysSn9oUYMhGFkfLLKGp4zENYSFTJ7",
  "key6": "47hGaHkNbzd34sDmrNbjunEk9Bdmrpme6DRauzUYJ34xXNysAEjpwPartdYRL3qEGQFBZCnuxh68VyozDmXqQjQT",
  "key7": "4891BeW9oe8YsUVJWLjdR9PGqXjKGtW2suuE9A8mnH2A6xoNaoJfLgMpfyGjvfdMLd8Jrco9vp1qTJhLi8vxeK3H",
  "key8": "4rhGXNiM8p91JMdqbQ5WuxiKGJGTcA65ambPztda6JDeV4gh3nFpT781XWJMuuD4XHfAuJn2RGfMrb1PwstowkGM",
  "key9": "rUWMsUTpSzMQkuCJMazzezo4PxvAsdUVDKgfgF54x6eHn3iLX5KSD9PrUNTuaYCPQDbjVNg1EhRCPJbXNPabuNC",
  "key10": "2cfyRnEwtLQgTNqMn2UWjqT3P9JftLZS3VDxAKebDc2ZH14YYSgekmTtjZXhBwC439AuuZLS7TAydTgDksWpvLt9",
  "key11": "swoAMJX8ktic3KyyhdARFQ5rbycMgPZoU3uvX5aRt1oRZqrGe3yd3puD7DKvaNWeBAooUcUep6eCRdpDrZ9Em6n",
  "key12": "5JFJ3AbB9YxYL8ffQUghb9pR6VAmb1Lj1x7GxAs2JRiTgywL3BCbGbkZhkNirtGa5g5JbminnMcXngcuCKvK7JhE",
  "key13": "38AUAyCe2cXVYAAzVu9uXnDJodXEW3XduaTgZGZFfWie3EwaTWQ8hUzTVfFj99tCf794qgm2USB6db6kULteHMaK",
  "key14": "2XhCY1Fm88Qa5KDwL72irx1DY3wtjXibFkBYgLVKx33zbWSkx4Q6Dt2YW9dT6Kn5sTKJ4BYzpArUMNAMAJSyFd75",
  "key15": "26BViBwqWsJjybj4PjCs76gBtczoCYFuvBbv3jLPnt3b2Ca6n8grZEeiWCQqNk57agZP3bLXd2WFbtjYDtZXdvVY",
  "key16": "pErkvd9HB29zi5TVM34mGpywzEDHxcxcwYoLMucs41Wdg7k1SodHMWzRLCAxsrAWHQCwgZdXSfhb42tgNqa2dJZ",
  "key17": "55hhfnTGX4HtUb7zHP2zgD38CtSWb6rRBMVbbZ9RDjFyWerY2Kepq9AnYvYQDEHuMaj1BQWiZpTp6iHbfR3LsGni",
  "key18": "6WKC828QLv8wsJU8PpAXvai56E76tYHDbDNxFfXXJscp4V8fD6RXJVBweSEgs1cMTHFjVseVsZMWC4cxaHF5DMa",
  "key19": "5cHWEpq73ygKyLbn2HBVoJxhjR4cxfPMLo1g7TtymqazvBs3Fppp61jqJs5ccCUSw9pnwCC1zfsxAxyYhSH5bBwu",
  "key20": "3L6G4uUN7YktYXa7aUH83cnGT9geiwtwZwpKKAZPquf1WZpnFmqMfbNM7ffCL7nLYFfXmGe8HCgQ5YYsPLzgQWyj",
  "key21": "67Dh79RE3hLptSES6jnc5Evu4ZrEFrkeXy7okXTfzoLWAjH8T5h5c7cxKEp7Ut9mwF5JdmzD73sPQcyy2mZEvpEq",
  "key22": "5DJM7u2iBAK4Ecng3ohpfvD9SRq325kTWCn2yT2nVZj8w9eRs1bBeZgYBBhNJBi2BhFoRRgAWbNT2nxd6gcd1rvD",
  "key23": "3kYV2orD4i1FiaX3AXX4JgF4n763fSCaftZ6MAR6Y6xygfcujzLz4BtiUcc7aJfnSKmDyK88tBuVUSJN3pLczQyY",
  "key24": "46tkYvoppWL47XFKadSWNbHF66x9GWwuQR4WU18orCmEHqkBYDfMh3rbSaH82o9cvqC6ddsqo3xV3WuhYXYRk2dB",
  "key25": "5b9fQNJE9PLK7s1mCPVQsHZEw8CdJuqCS7gBWujwhNLdcJjt5ATmZBpzpUhoe5zYUx7D95e99kVwkyADW3KinqzF",
  "key26": "3EY953WXjqqdxArE5s4oAa4ZD6WnwWNnSmJ8HfjmgHkVzzzZwpSJ7MVADnu6644Vton2r1eXRuvWoSXVcafMnCru",
  "key27": "44roznPUche5sxvwbmwYXgaYCRjhteEV7AdeJcjXMQd69Ta8mN2to4MGB3Gsu7fTEZYiDpzyBh3cdCpbiNxWyZk6",
  "key28": "5gDmMNb7JCTMfUm25YCaPr2iwuE7x5Pk38m3GZbtYmwgd67BxHofs4fQLXajiMvQukyvf4he3iByRQuj1NQfTJsA",
  "key29": "3aMFvsbnEpqjwg7a7dg492NhzSNZX5tfsD6TzEzs2WfDzr4jDndo5LU6upLFoxncat7vSDUuiGb4MJN32jwLQkhC",
  "key30": "5oZCzfbxN8FvWGfR8DbMtNtMKr6nJmcY3FPyuJELiRAjpUUsj8G6w5y1PcyLLzVfmh5uQf91pM3phB2F4cMn78wj",
  "key31": "2QMSHEwPfHSEf4EHZPqPCKkpXNPbpeU7xeYz7PpmyXG5G6U18NmKwc1dZ9QqfBPNK5YugrcJDdMduejPZ8Fjesee",
  "key32": "4dHRJ2NAs8n5BDU1EAyzG5jm5h8CFYmacmAHHPQpQBRKFVHBszt6QMTkjWGoUtqeKgwABCc5fE37XBHn8fodYfb1",
  "key33": "3MKqb81G3izAVmVsQeuzK1yScYFM1Vx9HhNVjpW4oRygjif7K9Ub7ZPHbjQ1U6CvZ7AqKkCTx9pLAvq1hqnQsKbr",
  "key34": "5UcSbEAoJZQt3BV6tQkUVQGTjwVUbYX55hbttkzh3eHPFvPoyRE31yb2mWs111qZnQTmz1jHhiugiHpP4JE5YqaC",
  "key35": "5zKJZZ3GMtcewYiqgXdcoTne5T7Dk5V9aUNkAmM16DQBRVPvGsnYt3tVQyrsdTVMRwH4pnK2yo5WCJCQQJvsKXQP",
  "key36": "jAE796nfZ2arURt8vpfB2VWnhT4aNyxbz2VzDKyMfdkEMWgYLUx66uw7nQnUeKgtnpRZ922mxNbXtmq9CmazSSS",
  "key37": "Ls1seFpAu9ipWrEdf9xSkR3KW2p6VEZ9QRwuubF8JVJD7bBtvbPqGRsYuLh8Mb8p1NtMUBQGwRbbDq17anrt41E",
  "key38": "3R9fhVVB74wEPPwzYeXxHwrwatY86KEVzh9xbE37mjpyxtUpoX6oGVEje7tAp3RyvBf8QeQCEUumjeuTk4hmxRfX",
  "key39": "kzA3wq76HB4cLKq2ozDhsDFXGdk69ri4bw7ETwdrs8MjuJEY87DajA3WCM6Tz3Ab8A7LniibAE3UK3wPxgkcp2V",
  "key40": "2XgScapauu3U6DZnHnc1qjyZuBVcighQK7WrfECmVfX1o4qZYva4FgzfjcNNQEJWW16kKEHy3g37TQ6SV3vByuki",
  "key41": "3Js6STVE8mY1CE5GfE7ns739u9xPn7LE8hhHqsfEGttvntLgFt7RcTJ8GXKFxchkRiBeVqHcukHDvDHb9w5ntDyE",
  "key42": "5Ed755wAboZcXiKbVAGTNKhhgzmGb3hJmtEShMJ1w1zr7N6nMJdvokS5b7VBfKn4UttDcBh1WJLeqXCx4zzT2zoC",
  "key43": "4uQCESGczKsfMn9f4YEvyH1rChBNfXC2jD8ML3RFf6uQeq9B2yKw4fbS2T3Tq1QnuFV6DaRK3ib9J7j4VUsG84yV",
  "key44": "TtY2aNvjxUeCNGvq6KR2raqkTd82v1uLgyBGnLcPnjhMNNNMovXg8KhRBLGRPdfdByyS5hn16uHVfExWM9VeNK7"
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
