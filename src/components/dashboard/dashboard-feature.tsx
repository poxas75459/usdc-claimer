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
    "5GztdgUuASB8Eyaas1TG8g723JnHhuKxAn56ec84pytjR48kF7vb9EjbeiQJHc9CgypcCBP4mbTaqHunx4igYpSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYej75qxmPePkvAmX7GfyVoZzNGFVrvXWi8qyuy2hTNetd2XJNZ2auTA9vfBTDCUhVX5A91tf6L2ug428MbyguH",
  "key1": "53N9ZBhTL7ssfpe7g9uKJq6zkyhecQDT25yZhNJnE1Mxkz8W3RmVbrELCFAaUiBXFDnFexgcffqp1dubPuHKKkX5",
  "key2": "34WrskmcWf3bdkYK5dKcPL9eNgAAZMGe3yE8Kva6SGx1q4MktBJAgXwqShgX2L1dDFB383uB86pr9npXEZQy1iMn",
  "key3": "KNfnUxgNw5BAWgNfGvJg4uaSy3cDSsXnF5G6neMPosasNJTVkbLBVit1YK4SyKLkzjX7NMLV24rdThweqaR6hwZ",
  "key4": "44NksXybjWHDRyP1JGRpwRTf9BZ8KevbGt16e6qQmwYnqKTbTcZ6ZoaNHtNHk4tTLnnxMctzyNHYgvDprW18ZjDR",
  "key5": "4VvtzFCx62HHXchWH1QXXhZiFySTjJA8XE7CAEFnvunVkBPB14KZTAGy9B9ycU8YUhuKGxo3ZLZgdKwcPu8VSJcP",
  "key6": "4SLAoZnboncZaGbmcF8Uey4EbpfCtrauE4mYDh4kRxagHN3KFw46tkxGFdFeum7oXiRUKcWPMstotZ8cBry5UykW",
  "key7": "257gLvTuBQmCtVJ1m8QCi8APz3XEaSyySQy2WFZi1Wt1WczvDFmDtcqYWa1vMfrSvfzGKE9nsGzoS5tjK48mLgmc",
  "key8": "4XHEFs2qKPSAM7Uz16swnKLszzMVJj5zt3jVacbFdgPSQsr8NvFKmdY9YTksriDk4S2kqK2UVNftjZKupvEA1T8f",
  "key9": "3SBLDHbNoLgD6JAYpUPoQTTr8NTSJx8jwWkqnEwQEZWT5K2TPrT1WS6akQd2uSpNdRh7fNjr2jT4ijrCswhFmAnM",
  "key10": "5y7HJzKxFF7kgeoPo5k87AcmBHpAWNJNdasetiprDBJEXnPEhVPcRyCrPSyFoK2h9pZ1WFjMMA5sUkcoBuv1kfTQ",
  "key11": "7CnGVUJEobUGh2YfVjkFzSpma5Sg5FzaaPXYHncQQBJz25A9Me2Jss4zEVsaa9c63RZuXWfR95m8YDDETHTPkKj",
  "key12": "4pBd5Fnum5WReTQH9KCk22HPGa6mAx5PyCk5bBoA9wG9xPPKAmtcdhGxkY9TCFtDvTqeLwwDKahFK46s9WokV32s",
  "key13": "3b2ekcQBZa9roUF8EdfY8aqUxprwacasNcmmqSg4bw962bSJsKoJdjSMjo4qCSsvYqqrdB8xic24kbJPrvWb1uhq",
  "key14": "3PyKXmCCt5gHcRtTS3TU3R9V9dbbV89SX7vBL85XM5LHG5gen2mvpVUC37rgRXzdXwBfDgiqsf7Fi7nBN1CNTWMa",
  "key15": "5nboRmWnE22PVYnHzndWr2WgRoHGP68g1U2ThG1z1EJLtLU7tPTiUQSVDdxqXZkUsipXdmssNgSEFuZx54rpCLcx",
  "key16": "5KnjWsCaVrZuzVN3WmqHpc9SGNe7BnKCq4jBC2dSZNS422TiGRNrPXWkUkgaQNfSbcdj91JjBSDDfNMTSMtDbF9K",
  "key17": "44iSfCbwTQXfnvYxySVTMefRWZQyEwdq3h7ob7mfy3eV5LqZeFf2J8trwhYiGnsqWFSyJwHBLguGdGQQ9ZpaNH6M",
  "key18": "63biqTq5iArPRsjFYTHavr3Q5wqf55eLnauMgMbN3KjiGrZHSEYTurH95kqSZdxYao4kAdJD6XX9PQMRuXYHfKUZ",
  "key19": "2WeRcEUgzRTr3kk5h9YunGKMYDfXiyiyy63TB9wJUyfrPvduifs6wbXysiEfpeLYkGehyvQEkKkzNsomz8BC4XtH",
  "key20": "42HpiK4s2wWKwooLoVg7ryEyUnj7LE78S5CrwPRssdZoygxJRh7aFiVkq2Kg9kjcpStFi6t3STXHPVs6E3J8nDu9",
  "key21": "2d3RXT6Y7tHjmEwd9mPgM6kawbwGXvkBcr7vU34bxvdtp2WewVnyjNUQCLLNXz2Pae94qXDQDVpSqPc7G8aSHanB",
  "key22": "3xfLWfALr8YboRbKQXAdKRhn8Qybs1W7EwiRK3NMaLAAshSSpzjRss8peckrobZbRDyM55nNYHDjba2rQif6Vi8B",
  "key23": "2uVzQJLTqGJ88WfRGGMcBisxGmxqh5SG7z7AxirpE8NVMx224FsWeSHeLXxj4SYtNnfHHAgDP9gh3Mp5VSVN4skK",
  "key24": "2ovCwwLczjXFaQphbxDWfigFGirXveEAeqoiy5iLrspxkzirhpPXQ26xt51eJe6gWNHTVXpZ9EwNRcw7viZRUrtq",
  "key25": "5Q27MkHYBwMJaT2e7pnzq1VLrw9hieQKx48hNrZSzpNZ6XCNcjRdvzEVi3LoHov4U1nDC4MJGjpz7xuyDBmtqRcw"
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
