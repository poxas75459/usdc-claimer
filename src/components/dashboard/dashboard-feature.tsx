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
    "4tAvrfCfsnmjxz2iNjCY83x1RdtNt9fiUtAFbt6jSKZMNnNw1y4LkXdLRGRiyUcHyrZh6egJFApYwFDE5R49YqkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CxnHNV654X3n8Dr3px4Rmgcw6tWEnduasAj8eYuVCub28X2h6B9LPspDUc8PPcq5UKizKk6vyKp2WF1rYmH69wu",
  "key1": "236kMwxoraujxZwzc1gdMrmEKjQ3RLfYVWngLs6ex9k3kPUufT18ArnCPzNbeEPBs9TbJqc1r4AUDL3G9gok2Sos",
  "key2": "gLDK9ByCw9dLETaNKp9rSQMeAuadJwPBhridm8Gc272sTT5mgdXfAQBUm9aTgDVjzC6drGG6SMaRprJ3Mfvuw7n",
  "key3": "61EjKQqdp87iFrrKaisEAfYmgQSJLYVEnNTFcr2ohvTef67GsH7MERtx7tujBDdG8nHBVhD78GEXJAKTDnam9VH8",
  "key4": "2kF8uTmoGyNyQLxhYWWsYyF1ku2SM1BxqaG41NyTo96gGtEtheKFVJ9CytwW8R8CJpbXEbo7PFMbACFHF1Xvg91j",
  "key5": "33H7VdXkzvNY8UvXN4dpVTjBs3EpkkGoq7ZabiPqFjEV4KPvnxhJ1tY7xg2V39yfhQt5S6CFHjgZ6PAUmuxtEwTV",
  "key6": "225rukQsx92GksiNgw6HXcBGurwtTGFcYQwok3usDrwe8D6VzfN9Dhhm2hA2aPV8u7fqZjewGf3uQ1Rkw9vwTQQn",
  "key7": "5MpkRSfGFRdoCT3kbHwmyBcGQowoD3f2SrecQJZU3s4FAkknMXTJv2HZschpyk3iYPuAZDbXuxP7nPnaV3GN7LRf",
  "key8": "nRAnj2sCAHWSmYo2j4HaAiLyZQbLE2WBpeMBWHaFQLjbX6oWHSRVUssE2gQdwbxUrUwGB5vbi5V3UmfbZ2oP2JQ",
  "key9": "4XgSFW1imC7p9dcm7nxFQzrgsxuuYvGSEsnALtN7bkf9jeNQbMkHWov7vRYSPxRLVtkHKEh8kbC6GS6XdKdJgLj8",
  "key10": "4W9Ap13WsToBrM9yZx92uNw9sb7FZaH4c8DJp9WzkzxbYSsXK9KYv9p3FW9kVDnztS8bsQNU4zJSuygNvSvEXtUk",
  "key11": "5Pz8AAyvzP6ohg6VsFVTcAin5ToPvygNsTUqw38TbF9So9BzA6heFMRX5YsCDjg9jb5LN4aLtzooJfWUYqg8KZeh",
  "key12": "5aTC3LjNyh7YSUgA6Xmhdv3sZoKP1jAXdny5Hehs2kdgqtT7hMjFZJRkwugyPMzTAhBUvFvo3Tyvh8f3FYH8THMc",
  "key13": "5wcse4xcw8VH8MGf7i439Y1BjV7xEDpX3i2LS6kQCmPBc6Hnd25tLCDj7B3XtTwwgBnQYu9JpgssDzrcb38FSKGn",
  "key14": "2128UTAKTTVz4G9zJpPWiS7K4jJDg1PiCBBQLHB4R57rLwNtYxNsDBi9amCPhKzVJFeKfneLZHjAx9U3jukJzEd2",
  "key15": "fSiH3AQavriYiDjLWn7dNo7148hDruLn2hUbvLJ5SjwL8Ct6h2mgMPjgRgK3im4sd3HVrPLa8DFeg7UEv3zn5ie",
  "key16": "Xzh7JPUq6Trre2H7yAoAkuDqcBcKwgUYZibAp2DNdQ4vyLH3ined1X77N84BVQ3DL3PNchBwYCnQ2Dz9qCvyDdF",
  "key17": "5WusKqnfmCohbG1wHDpfVDwyyW9E8AfEx9wLtM88HHrewmdrRhBPJmzyQs5h9BQU4ggpDLumMUeN2HGeMKiDacDZ",
  "key18": "5cseXkW6stJVFn4R8AST3BNxbAPDnvQNgQ3psemJ8zadsrpM4M9am1DPhWCP9rGTA2gcdXFAGqcSox9vFqJry4D5",
  "key19": "jXBZpKw6uVBuvGwCPmAL64DMSYTqvQrwpHdugdUnASLJpRv9fw92PCxb5eYFCCvVgYbseYGJj4BVFKfiCD1N8mo",
  "key20": "m3jSEu1MPCdhrW9qBqxnKGWAKhPhrH7iwPVgstSpZzYcegKjd8HpH7FvWTPsoA8kWvLxDrzfvRWY7rQ9rom4ca5",
  "key21": "4GmV4QD8E792s3vLL6umUyE19KjgLUKeKqGHUgNxMJ9C8gDM1XsXSM4Q3tbct9cGW5GYcBSfd8yE7R4Gb5qJH6HJ",
  "key22": "5cRewX91d9cCfcjbVTjbwRkY76s7nUbrPhihxtDuHA6X8GEm7u7JQUsQStTneLyMPCXEvtiqk7KLAuDdtVzmsr86",
  "key23": "5qpyuDdt7vhKytMPRFNDinmEBQb3beS2hUYSfQyB1MVxAoHw4GegF9SZYjEKrH8AcaKXj7HHPzr483DYSL96PKZT",
  "key24": "xBevNHHx3qF6gSj2iZRjFRHyJJXtrxqop33iACEhPX7BM9H5Cs6NXBoVRGG5ZknRMr8P1RwJ6M8tJ2SUdSWnHTm",
  "key25": "24sUxTuhYMzQcsHPc7FCU6QAhmbUdGhYVKc6ViNkCAyMafVzbuT3fBNUdD1UJsHGycxsUGeMqM4HuiDCKFjW2DXr",
  "key26": "5PPkxkd1vF2Pfak1hTiFujhXrB9zhVbmZggRxQxYrVTb6L4fLuZ1bVirMcRsG2SCGJGB6MFg8oaP3j5wBqNL7kh2",
  "key27": "4KFjjAJY5CxFT2jyjM55ukQ8J9GMp66oaNfh8k18qUvew2M3mj9xBNkG3sTTCdLQFfrsgj3CZzJ7TAMZ57RgVfPr",
  "key28": "4z1Xt8MvXpH7tnNwSTEvgPWKRZK9AJPYyeS9fE4aQz1UqPoMTbjktrtknwcWWPMrk1bkgUHneu7gbFd7Xs1Mbc4A",
  "key29": "4wM9rn2PAxNMhuEWgNtExp6qGzc8FydWLjatwFWQrBF5KK9KnAa5vxQijqNv7nvicUT1pokBBUML1QRHM9tg5Ven",
  "key30": "1x6S9SY1R6drAX6TqUCkE7ScbTnLoEgSmCCz6vJoRvE76jFefWafHqqCCU1L8QBPRUN1FwQVo21HBESmt9DLaju",
  "key31": "2eca5WCTZn3mWANJU5oj5d6e36N6psWcaznVQ2v7ZcYakcXCErwFZJPmLQDfrSgR8fWDFgX2HLQhCFEDDUiF1Gv8",
  "key32": "5rrwUJKxFjBUGdVPtPpZFanqHvhFBb1oc7N3BBBzWNoC2bNgeucMVa8qgBjKRj9QKMPjtB6FYxA4A3wSKDjL11H8",
  "key33": "2DQQ3gj1iiDBqhttkyGR4kVFiS7G98K6UiLywYyGoabgN4xDzCmWewv6pNrwekSGFN1X3M2Sc9BhDPo8usDqnM6w",
  "key34": "3jhMZ76kg22Urar283hg1F6oEzj31TVSUaXnLWfp3qXbBFH4ttwWb3HnjeJFAkwYGgZghhGthaaKz58H3QcoXp95",
  "key35": "3zs4RLqDP6Sm1z7MXoNEqxA4zohng68oS16iDqEb4fnD8PEmKgF3Z1uCJGtSDgiNR5v19agTjPHJFCKxPr5vRj8c",
  "key36": "2gAzLVo6Bz4SHzR2DAXxuWP7WQrgmGQ7dBxfwJVCQzsMWptG95VWoGtmBax8asMptgdYQwVcaez9Jkss29VMpNjv",
  "key37": "51FjTtbg1FSjKmWEXzHH6u1j4oLNH4KM1gtsdn3YWZg7K3uX78YFsqxDsceXADD26PArt8hUFpSQmcAsnj8Ko3VR",
  "key38": "5w1YNYNH9st9sPk9Yts9he3kfRKKsjCjCCLQSi4RhX7CN3GY7V71XPSMGjEgxTm9yTuQxXsCYZLV1xBHU9UhpwTV",
  "key39": "2ig4zpFYdozqrZ1h8qxhRTp97DEkPSvngNzLbDKBnwRyRHm3mFswXuDi5hYFtELntXC2krAVVBk1WeUnL6xt39fY",
  "key40": "ZjnZeyJxvKCZTeLxjZCRircf64ruAG5MqnUykxmsqj9T7GbSVQUnLjj3uChqZBY9onprrP9xTtXeoYugkMFxNPg",
  "key41": "BB4HFRUhk2izBWjhFdzKRvB2QZRhstYoRZCQAW6sLseNzZjRiMSR7bwg1T1V54axitQK7UHnswhhmyhmz9ZDJem",
  "key42": "3AUBLFtCntfmeEbbotTpsBYHUThsTt5m4o5aUBpWomdp3G4SqnAAu4Zas9c399A9PrZyoCWMPi1MCS24LyDAMwsg",
  "key43": "5LX8Zia23nexmn4bhsAnSEewHbuHc6aBjaRCHYiLiLDsEjq7CFziPhJit1vDHRKJsxH8FfjeKVGV5f1teVXDSL6c",
  "key44": "5dpRZPgG7BXb2kBtjvCerJa8Quc3cATLxzXVE4Bc6kcpEdVT7PR5V1cDm59DveKegVfjnEyFDvvHKxjqXpK45ANr",
  "key45": "3FsouNFCC5sAWf77P3eZBbT4M7ZHkQENGGKpvoA3j73cBHc9BV5fN83WsKrwoUygwubZ1XuN3ujkgvfK16qj8S3R",
  "key46": "3cxutHPc6K9P1aPjQecvGkmArzk2a9dudfchupxdsQ8iJ1WWFZDPk4Rg84aUkEkx89gvv8Dzzm4M9BASHTpZGYdJ",
  "key47": "36rRVmgxjJpWAte3BHh2SPSHLRPi4B9MQhQ5GZphuCHLtAoD1S54b4TRZiRqZQHGEMxvg6kviXWRN8J9x1s2dapx"
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
