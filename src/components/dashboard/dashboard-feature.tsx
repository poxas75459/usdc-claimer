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
    "5TXAks688K7bVR3QubYyCC7qQMZ15kzJvD2WzUk7ibffwV66daBroJUANYbXNYSxNUQCN9yGXocHgAuu5DJqSgEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QdosEjpeHWGbbcPAEu2k4RejDdyeHkefSnTAvCJoCwDcCsygsHmcxgAY5rkStyB2apWaY23EMtr2S6oVQuYrWWa",
  "key1": "5q7Uwrr9heaNrVmi9tF6ULW6wqjLcxNBecguPDpp2dsMpSe1LSTbYSfDAXhAg7qMRHnFtSmKT21mWUqJpKtywYmS",
  "key2": "3vQDPnSCnWwo7kCL5PZd5J61N6FNPcHKGdH2otsJiGcvXofjkJwDGLxx1ictqyXnSiPBS2oq48bmFb7dipAtyxjE",
  "key3": "4uLxroXibeH9tWRNTHwtFQe19CQqWa8rPivpwNugUzvQLykXWQEUiFYt4zKvT2SqM8YznmVBnoepNHzreCfgXezw",
  "key4": "4LF7toQvdkpohiHEM8VT1HXHLkqMgSWju9nLfAYpLovyXtr9Yb6NQsSCiu9v94wsgVaZrkmoUGNNyaoESKyUMiBR",
  "key5": "3627rd8tfmC5WeXGB8ndcqQtGkFeGcDLzjvgFPZv5Pcw517D8dJAEa9PVzau7Btzp63benK7rPGt2PufgNqG5hLk",
  "key6": "3MrcPvNZpSMbTdiCYo5uFgpyjq4hxUeVDnC23tikXzTiWSkyeepKpg1GaCUh1eLmHWnpH9iqgDGVDkguAqNxUy8D",
  "key7": "1xiSuenKDycyfFKeLFTUT4H8exbHd8nAaEYkHm4XxKcwWCYgKvhfHomoid2toXa48ftchN3eySFnJWw9f4Qd9U6",
  "key8": "3X7JoKJLFwiNrkw9zemFbGKRJy6z1iFTzLPkNr3AnL6qfZdkWvAAa2B8meDsGdyRNW6zzcV1MYZS5119UPuQisL5",
  "key9": "21eurWRFppLKdu1mTqgxQRe3cCE6bhT7ccmVp3inQ8Zk14mfwmbrrVDJSeyoY8iL52pp45CGJJw5ZYX3L1MWUFcX",
  "key10": "4QHvmMUKWmZGweYF5UQWZUH3DzboQf1hP1GB7DhNudWCXKui2dAtQHgPWJvReUTuZhzdNsEoXoDNHxqUFQNw8mwy",
  "key11": "2drsartsMD851t1CMERsaHKdaHHw8Hnc4HUZCrjiME6r5Yaxz7zWSqmL9xVpKHLQ1f33qV6vKz96De7QiAiiDmiJ",
  "key12": "2g57syojPvdG1EmCurSJ5gJp1jyxJTSsJh1NSnoqnHDRVEDGVU7Mbbo5PPx1yP4LqahnN9i3mChVq9EJBEc24Vv2",
  "key13": "26ZY7u7GQxadgxxAJCvwmmUSDn2F6Sw8BJ5rvmWbeY22G1zPHnun2sm5JKAx2MVPJVK8zFBJdSSSH9xYFpuEscDG",
  "key14": "ACub6vqW8gQoaUDF97ZctNbUAvh6oMY1RDSQ181fnui6RTsWpXZDH1vrNt8opWiEiqtKMx9HcW58QcT3NRVFQQs",
  "key15": "5NvzHz36tY6BjGawUZiMbzzXyQNdmZTxCsc1wMtvRNmjxr3GEdP2M8NZ8ZHkKEgX7kmgVUVzNU4DC5595qjtay2m",
  "key16": "4gY7PuGbxMTcuXYWsUcBs6qnbxAc5WCtPNSPosPQnSJBv9S1mQQqoBTr6xD9bq1SbWR35DAamHWxen3pNUJXaDsg",
  "key17": "2s3svP5Jt5mJ7FDfWdsW3M8zMCnqT2hqcRGJ5yTbMT7xxNKPNDo5W5nvWhUoFUzTUegkYBHdJVnM99bSTFohz1Yr",
  "key18": "5AcKrJZaFd4ZQvM5rZGP34mmaARVCLu1A2gDcjERchSyoUNC18XBCpbAPJNwPP2tMtv1NYT2sQhvTMELzYgkfokC",
  "key19": "4QAeu1bFvMbS7h3TcfeeUCLZkqkwJ9pj5PJ5dDcnpmEvdqkpHiKnwFtxuKWK295rfPZ71zBKn8UdgA1kZKAFp725",
  "key20": "5fqttpTwMt8qp7qmWbLRXLhGW1kFEtKUZrk1Yg7WCgUgN9DNrM5mLQpv7uXNiF8echEA8Y2MCvKVNMvogR1w5QC3",
  "key21": "3cwqW96GoZAxoP9UxAiYM3KAMPdkKGoqi9Tt1Yd9Ad9rSqeRahhcmeqEAZf9ksPthLShgZDyX9p7ejim9jAHJrz6",
  "key22": "41QhkosJq44E51He442YMnFxyVG6kXSa4QT5bkLxMWvXhomDvpstb612FAyrMDaNG6kezcEepwWW31pKXL7F5ewi",
  "key23": "4j7iCTJTtdu1LmAJxEf4twRqMRt8KwL6iaPAjFZDKhQnQkAN358A9SPHuTYFsvK29DZoiBqmgBC2T5tVtFZxUoVP",
  "key24": "3avG6MzKUenkdfQpFFTJ3RyT7EV84hWqrGaHH2p1KtwAYPQ1fK6J3XmHkXjCfH21B8H4ejXWRWo2b1PVZHSPLsAc",
  "key25": "4rxPbSJkvh82hPn2Ww7tDQCTYUisoHRwjm2r1y1GepaAMaB8zXnbuautagReMXyJtJLLG1JTHiweJ4jEMyE4ZmpF"
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
