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
    "2vhaFZpJQD2LHEguQT8jGsQRCfGHFrQanH2hyZ6765JaFPQCvATLP59fZuVPyX9GfgudaUH9QnfUKQAqvCq21Qw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNBbH4XUf78evPE6UFSr9hqvL2N85CvN14rWMVCJBJsxPXwbdrG9756AXoomVuXX9kruFNApom7YscoKL6wAkMF",
  "key1": "MtRf5JwhMpnoYApztr9Qwy3BSUpJBtcgss1HnAsFg27vCQKzUk7UY78YXh9RhNwWnU9DqA5vrzk1ikgVUw5gie7",
  "key2": "4VHNLQXmnNXZrrbpVEvM9iguhDEQpCiHBBP6ANp7UADvhCcD26LYH8taDTCPc2QA6vPCyC45YSiF6NQxS9fmDnH",
  "key3": "53mcPkMJF9UnD7VXFcZLG4Wf2so9eAnM2KrzthD3W8wuyaWyNUcp36b3KPqJUo5xXmtGjLc9VksWCf9mWLWiwHxT",
  "key4": "36jRMzy4V6Cv3ZKYf3gJFWfV42egE3pHCb5yaGW6WXDSL8yEpPdYf3GgSaX68iJJgaTjhoyycvtiL54TY4fgMP6G",
  "key5": "nKEMkDuxU6RdpXBdwU7n1J1r3QTjc9GBLDDFwjPzTGodHvNKfT77oJwr2HTJ8JC3NKkjCeGggghEHH7kHpN3i6L",
  "key6": "5Y2jn9wrJLseksDFsAAQnNTgo5aygWvuSGehxmuvB2C3mEzq9TWBqtgGqS9FeZ6XZ4EH18dxKhXdH7jXyB1oR8aH",
  "key7": "XjsUWhZ2GuviVjaGxpQfY2LnjvkYx428XmehJjh4oCWY2nf2vWoSp1aG6wRkUEhrCdShy7ZBSdcLusCuyCa32Q5",
  "key8": "3JW9iySRKDos4qbAxqXusR1EUuScaU1DgKiVYqyNUA5wryfYdhBG2gM4kqLrM4QSbuFFpAY5acUqHw3jD3HAEW8h",
  "key9": "SRVBLapMk2jgwGSthPrGZKrdY4ZFYkWxjWCYtoS7hqABtxtEJC4ZPM6oiWVe4x6AbFtXX4bkM9zBWw8dU1xb27C",
  "key10": "44U26FaQSxXjQwCWkuRoBkcNegE7DXGPNyBsJmEAJTPVm4bafPpV86fSB47P8DLe9E7hWphd6PEdUdro22GMruzV",
  "key11": "5CWwYNVf1kikcRsMAKWdNtJjTMdd6pG351TcyDeYKWVAike6VAewZmeL9tAYpFe5PrWEaJkL2x5f1t6y78H1tWDr",
  "key12": "5qwaMCHJM6eLXZ6k4dhJ6ZduJZWuzZKmtb6AwTL2Jek6DYKxb6iUgaj5gqDtmTiGftgBkyLPmwpTPcRA49S77x5j",
  "key13": "2jJ6XCwtjgSmxNXfeMLMkfoCiBQK4YxvwEXDDGuT1zKZ8hQo1pmE5QWAajuH175yjeGg1rL2vqciCR5zzPWD64SU",
  "key14": "1itxsTZEK4Py6CEsNXuWzfhzj71zRnWK8z5siWw4dhqhgY2VVoX2CCPRMoq6vvS8WffEw1RVkfpdyzuHDJWyniL",
  "key15": "2ttGHoHFU3htRT3aSgG9UW2dBiHP7gQ9Z6b8dZ3iijwq4aHNSLH62euNxAtejNKRJzAoNe3WMYbw25mDBGToZb31",
  "key16": "4ssrZnzwgFHqYgWnL3hk8kN1HMYV2Zgs6775Rjuair7u17u21sP1JDucSYH4MRYPoN1YWDvkBXcMUeFGwGXV1HkV",
  "key17": "3xTZX9MT6pgJyUEdYufJWNeduA8kGVWgfmuN7TZAqPgtFRrNFeKcexABdzksqdF61VT3boVNG8dQ2bLGut5GCmrH",
  "key18": "445UZDZEa18feWio1be1pNX4S97GzATe7gFHrKPnnUZgaAt8WdppYyhnoEfzVoGXZXASGPskWnnaA8dktsa9L2Wd",
  "key19": "4u2RF3qvW6LhVdWVqp3vUhSf7PTRNLt7tsEF5oCn8gcnEp7PpGQLb2KNhCq1iutd1xcgpSG2hVjbtiKnzG61Xhty",
  "key20": "3iKpuomwsP97spTJtZRQAjUrgEjxmu6fdpYVedd9V1TghwV9BmN12wRFDEPMKNCZ8tm7uXBRA19g8zxfNdmwEtA2",
  "key21": "3yoVDLXFPm5HTS6HqMgN3ZmJETU77SBBVEz3kwvHznXGw1nxYp4Wc7KezvDnPGPBsp7nhNPrDgEmXfAF17WPryuL",
  "key22": "5hGJpMUAY6FZZPCKg63qKH7iCSm8bf5ZpMc5tFehnccRguqza3WnzXHnLeKTfTajLrBsSMhhjg9C4hGcTcmEyc3x",
  "key23": "ZjgnQ9HZpKo8gQm1xamPv2K4WgN4Nmo7av9pDm5RNA3ZPtaqEPLvCwzj99AbZLZimV2JeKw9XuK5r1pJqWMjYtx",
  "key24": "2AzsEba4zesYhoaLtjnnfdVvB6ofdHoTBdoSFeC8CYaseqiepmkUP6P3mne3s1AaZjDdytsu2LD1KL5gCgFvBnVN",
  "key25": "3qPzmnrRW2n761Lvqtbw4EPZAudGY8ehG7KQEvqdHxjoKbCwrUkfbT35aqAX3wxpwReS3R2LMq1xt5SNRH722nbK",
  "key26": "2QH69vCw81FwsWP9ETfuXHxieXkRCXoizTLYQmmtDivEcPvmEhetaHc4T9kdbqr5HKrHegv2pKuz13knXtKGPYw9",
  "key27": "SUj3exf8gHEvZJHtkybkkJ3w9bqtAsZS25127FkXfpnFyY6uJWKDDtz7gsLsNatzWhP4a1Zwueq1z8TKLEt85tu",
  "key28": "5Bxw268ahJYw3rcboSBAvTqRxumKKuQvigEbEsa7absRdcPf6ZFN7hF11kSdPT3j5KBt5f1hz9GGDARBGLRfYBv5",
  "key29": "49g2CuaocGfK911FTfzukokktDdSyNHr6B3rHyD8Q23jDgUoi8aaZJLS7T2ZvSu99nj9RgTQ2a5RC1VUK2KEzUez",
  "key30": "2V5jYyiyNe4uEEyiCDXxVmV1iXtyEp4hnmJE98A3pCwmrimanHzdeRvsn6hTBT9MU6b2V7J39uke6SMt1hHKLXwF",
  "key31": "4CmBnHCWR685uKUE7K8Z8hx71RsrAHijKd68WCWxAoMVHbNzNKbL9xE2CPffCHyKVCgacD5xFeR1imnvVrvUWDUA",
  "key32": "rjDA49ukMgZqmi7C6971vTrsLbqwMaKD5avFSQ4Xv9BVCco13FbEsMwzsszcXs8DxKuwHo9Fx6GtUN2fATBG9SE",
  "key33": "3g4FCqmJ3n3Cv6YdyG7NvX4KuQ1D8UV7CEQm4Z6W5GFkpHWGbBUnvXdCCq48mws8DVGosyUpMYW4eR6VT5PisNZA",
  "key34": "5zmqRxbhrLLJvFb8fj1RLLvY9ryAcizy7HVPed2tMP1hfHcUaHryPwDg1FJTX7dZ4GUqDMnTzN5Did7mHWfXvGu6",
  "key35": "5TvLer853zm8GWz6cxLBjgWkpKdmjwqxqnEUhS4qaKoXnGsX9z84FxxDdPPwhDEDKpucKhdAf9VtMueLbVxG4rcD",
  "key36": "3A9W6gdYL2zdGSknt6MgNihFEPimoMjSm2F4QUkN3Ci8CeN6TZuUTYJwZEzur5aXQ3vW6SYKsmmQRbJRooPc4ZBm",
  "key37": "5wXe1tw3E3FrQ28rRdBna3TkgWZHEpTa5h1BoNDpVaAJMCqHvE9oaFXLiJUzyUq8DuGxyg7xYNBy1HPNvPnySq4J",
  "key38": "3ihpi45yc8VMn7j8id1bYfyn9HFyHcQ1PutAy9V31Zuno6vcGa4Go3YimSfywMLTgUw88p3Xhh3pAWuSeaazYHY3",
  "key39": "4kdZf6BF3JF55DAtBZZWi4G1ZD9XubeoCP48bjb4BvRcAGdnjRaQWbBsJofpxsPCZDTAUfRvJ5QhMBpsK2wJf52x",
  "key40": "3NKrHHzGqsCHcRDGMAft5WJ3EVXq9BLQznQLLkiPhaU5hWYcWXpxhuf3F5LyXxwUm9NWjzAdkEchYTn11fgSTaZn",
  "key41": "2Yx3wqi6ZuB83Wfmkd2ZKYtQs6HLJiyqhbrg33ioEam1Z377Gt7fKYaSHUvQbefvK7X2GFpLnffEevLyLRAABtbk"
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
