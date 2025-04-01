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
    "3KM4QshqP9rjwcPZdLMMS5mYvDx8YzqDiKhYgbnRiws2pKTJKSdKQk4H9C7wuENEhiLTeonYobWV1aRXLUEgb5W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DorHLtGtgBBBg6fsUXEdfLg8KaTCSrp6DNwHfBXv3weqo9dq4VCZmqFY7Usx5T68YV33Cqq4uG8EKkioVZaB6s",
  "key1": "VPkyoCuWV1gZbmZd5dQHRWVPiadnjHLT3u6WPQrDuw2tx6i3Ntx89pjyapXqk46T9ZmF7u41EbBTfC4em56Bi9F",
  "key2": "kMYVpXU3W6zZMMcXH9xTYe1ei8DZax6gNGDxyCD9nhjtsDZHDQGT3B6XCYFiaiUBYZq3Gm6J3cyypTaoN6nXGst",
  "key3": "2oSJ85U6RsBwfag71Jq4ZPLw9KQSU3YzyvXqqLiAYywSLhScFpeMNbMuN66tXsyie5ZGdxdU7ABabYFb7dU9nxxF",
  "key4": "Juoca1C4HM1iRRJ3fjs5n8aDg8i5ej55cE3L8gAfnkJbKS43sGutLLdAHCHNt8EWbCQ8aihHGJH3oUFAzh9P6d9",
  "key5": "3b4qDY5nE1hRE6h4a5zwiVNX7hATnt9q7cYg2LxKPntX8JtxAn8nrzWTjL8yip3SQAHWsAbPoBkSD8oYfxFGYFeH",
  "key6": "2kC3mChpkkdcJzkYfXH5pb2Jsz9dQpsw7iQpnZ9wTffmVb7ir5DYW8aUYoe3ZKVQAWpTJPPjKUfnRYjs3KNQtTTM",
  "key7": "4TDAtrvRw1yWPHa4DRanRXjPLmPQzokeZ7D2JtYNeb3BuLhQoxSrutV6P1XRQTvvYcxM6rGA1WwuXr1sPt1zmzZC",
  "key8": "4hWH73GgfBQQmQVVAUH2YhkYjrvnByPrxXYuSeQZ6EqAwuwui7AJQgdDb5MMK1Ju6wAsvvEo8v2Nyyf11JPw1QuR",
  "key9": "Dqf4DtSjcbJ1MUHUJKTRfp67bSyJzLZdzc2zSACgWtnxkG84a2TsUuxt9jEgS82qZ717NAhxa651n6DRSz3Vou2",
  "key10": "3QhqV9dSHGEgNFvvwh1hndXsithwRHw52wwQSPASammSXc84w5xjunb7h14mRGQX9q2XBWUsDtQyxrznZ9mPwRE9",
  "key11": "XixkbfoCmdNrM2u1pixgnUuaMtJdnkuAwzNqxux5TtWMxSUc9crJzE5MxzZv37SWuXkyKJTF19K6uywhnLpNJJD",
  "key12": "4BMQ19xA1NpQSNx9rRexnUygxUJNMx6w6971rMPdKDBLaDKMW5FEALfdCPctnffSc573nmdgHFNKPWY3h8jrhoix",
  "key13": "64uGgnJt7msWUL9gjzRWUyLwaL6LCZ2RdZPVCV5zM3jTWY1KzYe8YC2BXPfDpVLPtSA2GQXRK8kdgY7mKozHVGJX",
  "key14": "2eRDHtRhkDg2Xdp6DRmRACKPHHeaKW4FoHEeyA9FBEPAN7dGCq5Y1JqdJPZpVzoBPWSwHy58eNJmypCGa45qDfP7",
  "key15": "2ePFXLL7EaDCW9aC3p5UZr5Kdm4nrakSpSwfCt46QsxHsM3Bh3T49o1rwiHnKXxsoy2JC2Ke3dQs9MPXSqS7P8Fn",
  "key16": "54C7MkpZ2SVCMK9U6HAa5CWp7YWbuAoM9rbu7fM8Us3efG33WtQqHoudXHSoSDiJcwkK67hkhysvqndDCwDk9o8w",
  "key17": "4rTnpnEuBGdnR2aTqK2uzDkeDJeS8gsDBdrXyNb9nJ84wxBPd4YEdoN3jYVo2iArnRo8SENPjRwqkRMntZQ99jZm",
  "key18": "2teysxAFjJyBrwa4d1bhyhd7qfGGufV9xEW4gyWw5GyNEWCaqXA43omsMQysuMynemFtBcHTA6XjuAtTagkK22U8",
  "key19": "62SCj1bEugZ2nKKJgRHM8EvVmiATrRYGTbB71aqcmYCXz4DGQ9ewYugdpDd2sswj63eHkfuQgRid3JCBnQqrr6Ph",
  "key20": "5L78wmBKdQe7PcoyZkcmGWgrZkS64z6Msuhczn4s967F7rx8KpAv5EYqo2VJ15bjACHRi6eCEhcJPXbiD2pcaWWA",
  "key21": "MXMmC6E2pxthmKqsL2XujC8hSBMNDNU8JBE7cRPmi8GBqQ46JZBUspWsCyE6AjQ3fy1XmKchjGUvCmasFnMmFir",
  "key22": "5SpECaVzE9tngSNuH9ZCCgHKz9bxoeTdRcouE2h16BcwuGp42cEsqZBSMiCWaE4HHBPSgMPUujyjhzvfTuA85efp",
  "key23": "2Ba6FH2UgDcPfBVWz5Yk3BB2hjPDZkumgVfyJbEtZSbdASLDFo65f1rGkg9hqg4h34mbKTqCkebjCVjxcp3V1PYp",
  "key24": "643AHggQ3UeRTraEvDZz7LxAgxGRT5AxnwvsANsW8rV2ZUYR7fLZ6hPkeaedsj4eKP4o2X9HTt6tWsDhUCsYUBi7",
  "key25": "5k7eHmkZXee3KJS5gpLBrJuQVCnGxwfXup4sykES9qpHwowypRerERdp2Ser1Hkzo6qdMxr3gF3jPYVjhNq6o4WT",
  "key26": "65Rhqq24MwMse24SnHcd89r833wBuiLmYAhd2GWq6khWguZqGws8U8EVbwBcqpS1SFCxUe2xANDtoGhz9X3pZezH",
  "key27": "3GuE4NGVx9rxKivJ1NjumQ7jQA13W9kaiXkwGWxTfaR2BMEKSmfHZ7HA9d9DBecGToeB7rniqsaKdJ5zjsbBWKKX",
  "key28": "kuiXUggTitFqjWSFcRwpGdBDQ4p6CnCgnqU49nveVUJYYocpaR7Vd7WpNKaN93Aho7QRfhmdizfGvnBPJBRKw4b",
  "key29": "24Wsw1zhjyA1ud26HEKn3Bixd1fM8c7d6viXYZJ3QjQt2741VKNN64hbpn4RqBE7eMpitYPSsAJBE3VW3Y3iUk7v",
  "key30": "3muhVXFWkX5WpqpiGPLYd33TYnZmbQMsdw3sKoL1U1EMhttsYtLUMGVjfs3x57rMGQDo1t94ZEVFAnEpnHX2XUcm",
  "key31": "qNEyXiSEBLsR97xoP5hA8oowJhKLa6u44G7ApCiT7khZwcK6UaV41UrguYfEwyFjBs9i4NE7Sz5BJ2JW6CE6MGh",
  "key32": "46VFzd8FM6e1Eh2FzNzg8haUR4BTJD3DLp4GqseuC6tygCgP42Je3bvaQvwbAt8didGM2T6iS16VjTvy3cnREyDs",
  "key33": "y8LqsbLoUeb6iMjFxwFPsNoEofQQutCjyiSy4vtZpP4Ax35PBTMHdPDMciKmiU1focHyj4pjf744W9SyiW3H2ET",
  "key34": "3x6xtXQnyaXKjHow87Rrfzi2441zbBnvvtTzunB5JhqZLtZ92VJgDiQf4ArnEwYR4ywhLUyFLQw8bcninbvs3waE",
  "key35": "5rFR5nLnMSkgurL6uG8g6a6JRTTr2GjFCUq6EGifBFhWjJNRoUj3kfthfjqikXLJwnNSBCkk29HSBu5dJ6WJHBSZ",
  "key36": "27FqDJHPmhi8a34Y2BAFjGVYXf5JvwSmai8RYzvhTV1gaYfyKuNwt2S1ycQBBDkF4apDj15AHjxh9ZtR9Gr5DUqm",
  "key37": "2RHeNS1HzVVMLagsxai1yA5qnzYcWbjnmkKzwRLqzmm4PLTSwdqU51yrBQanFFZhNrC2PEVHqfvwqzGX3h4pQeGo",
  "key38": "5uQbH9oMbEMLNe5QYFB5LAdsFkqDwaYVU53bNkRTR12AyRqWQZGMjHfs7BJEzy7LWaJm9yowYqejtyeWqwKaNM6P",
  "key39": "5BPw4nCioszuUh7Xxyme2dL3SF6YTAta3zoC4FS6hpGFq2UUeabLbEDm6w3aMpDpdXv6seqMdjgrVvnFmMvw92Cn",
  "key40": "2wj8o2dZ4xyJtN6GEadWRUePAQbuNWh3MeqWrP2SwWxUAnNFmWxNe2JGX27WC3DJMk9Uu7agAnwfqqFQmysxyh5z",
  "key41": "3ian5Lnq6Lm2ttxmpybedkVM2uqLzNzGJCrTXKKDRonXuVWXe2Bfi4yDhwjA39ZnF2prmF7bvSxXKEACrWPDb38M",
  "key42": "3yERJtQebx2Ze6RQKGrGVcpeBTSCGFbgnZPcvYTzuY4hbeUSLTdyGrS6ADNXpqXNAHtnMw9MidtLqJpAZQuJmdtp",
  "key43": "3ae8MqwjjjfERHTDMaWpm1dgTWoxrXP53oPGHQAfuQ5Y84tzP8Q5F4wX9evTGYM4ZbcG7EGKF3P4agDHYAtsoYJy",
  "key44": "HMH9Fe5m1d9XmxfJbsDMcFk2RMWEjenNrYgmqKFpurSq81KxzpugFZkPDgUkHVuNQePnpN4KsZvY8Vcu3ZWctJL",
  "key45": "4KEtFjGEKZeZpkAqCgUYZ1reGLLv6RHmxecuS1d8jFaHJvkSNyrdNGrovhSu9dnfq4a2Xw49twQMvGFK9AMT1qDv",
  "key46": "3MBVrwgshZ7Z7RdEWGUQWJkCcwayGxjTD79ZHwmW6XwT7sPkMBodKdF3Pa7yUAYsW9khwKg2Jz3vEE629eZWZsFF"
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
