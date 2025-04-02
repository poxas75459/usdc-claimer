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
    "nQQXw6oXPnDUzkCKm1JGy8FkGEvWPZF6SQ2K7Qmm9sKbuTQ63Y3UpuaZog4u3W1RYn1FDnqzs5QJSs6EqGST6G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uAA7Hy6GGtsjiiEHc2JwmZxn25NLhhZeunJ9yGzRuXXhuJ7gH91bEhme2Ex2hoKEWqrEkcRyXryp6DciceAHTPq",
  "key1": "5VKCQAKENMAsYUsjKQCffoqA5JP1Ygi3WtbhvR1qe9omKwxnPnrfYupT3LwF7hSQjwecbkFrxanqKMcdLLVCMUQ3",
  "key2": "5wwKosEhrcShiycR6ozs3eMfDrtRvL4vrv2DnGTVRZybx3dHkmqaUGKrDiq9b9pNz9Fu4L47GjhC6DVBvZv3Wx3a",
  "key3": "4hf9r7bbuY5AiZc9aWscwV2DvHy79gcoBhGmRGrkcAyz1SmSq6yywcgpMq2z7vRhME9CRzWNPx5tSLpzcx39qgHh",
  "key4": "2CTzDZpxYpdciV9S8T8rprFo1iRNPMsQVDPpZcCYk3JDvK9mrk2evnxZdzsLADW8LyTreS4QaF7aqjKkTK1TVovz",
  "key5": "22NG8tvQv437M3t7aYZ1WNsu8FTzVNSL6MqT32oUWrC8MTZpXaR2pZqhW7Cv5sX8Xe2vCVemAnv8uTAD1FAonALh",
  "key6": "24XqAQtL2aQNwsxFECJF92R65gn2bRcDUYBPHXky2vZAWf93HiuYFEzQUKaHNJwpF2gduP7aHHfdm2tXSWdwC73E",
  "key7": "2GsxRdzRbCmp5aht2otBp7TMFeT6XiL4aR66YczUpc3Xg1iE3xhXJqqxujkC69uHTndW9VspCKu9Bqvo31PbiCty",
  "key8": "55dPMrMzLphgLts29BMAR1UwJR9aPbNNnriQJMKqm7gWYaek8nJzUqx3zS3bumtNKd9yp87FRzubv6m8rXPC98b1",
  "key9": "2t5uYdqfho6hk9qw81dT9CpVgXiMgdcSRjVYLbCzfRXJtrbEZkCeJ6XPXg2Fib3X8B6NKLuPbBEquNS2ZTJQ337g",
  "key10": "2mqjxs8zNHD76jAymwfp3dSyRofjk5GFZ8fX3gSWS5Rmk4BVdxekUzoSjXZBE7Gf2JiBiqz3Fkmcnyw4o4Jak9Ro",
  "key11": "3xWKNStisb8PEd2tm1qzj9Z9tD1Y3tAdZTw67ozdbi7AaRi67KfcoLUFdjyUoHxp45qL43mXLuicMnybcaY6AyJp",
  "key12": "3h79ZY2SaJQDEYroEkS8sBi2HQ4kKdDX7Yj1ZVTJZKDjKjwB2mMg6K1M1NFjNYt9e9ikAk4CJdJ2owbbrmRUBtsg",
  "key13": "3y9gz2s8s4dksQ93X8gArp9t2wenbn6Q9gi93HoGXnxFSfJtstm5SVsM2pWiP3mwh8kkL7LBdPEpDwThCfkbCjaA",
  "key14": "2AX4F3661TgZZXt8d3FPiPyR1RqxKgAui2t6PJpmKqmucrWrmKwz14J3snnazGYirPYySEnogN2Gnh6NtapXJcZy",
  "key15": "35ZzZcWZA7vnffajdKvQp718dFPYki5pu3kkioperNb8oVsEByvK1nMYtw8TbEAhkDsgFXRETexDaMU7ge9Ut3f8",
  "key16": "4PXViLUjTPpjNztShqc2HhBA77wpvFQqCW27aySSgasBXLtVjBQbhRLbBj6FJJmzVUKCTW7rkqvs1qMHKMxhnsCP",
  "key17": "4stPgPLdhDPCT4z8PXznybMCyzaozz1Hv7CG6k6WuKq6c4jtR23xbnLB6ozMRGYpm2xbDVinL6xKqcUxv8p1eUQA",
  "key18": "4DFah8TP2evV6LZem5jAS6QpUbVzeX8iBndNeQSjdTs1xn2QjUAcuBLb5SLWGAZhyMaazJktQKnHRxeLey486Eiu",
  "key19": "eNy18p7LhWBnYCpZHPCDSgyooHXi2BNJXjZgvTbhR7E4xSH58stHi1r45y7HVafSyvD4yR7R8dZHZYcYmSECMhL",
  "key20": "5JyRLDLndET37chcZ3JL4TUy8yBYvavzoKiPY7E2jUTbAM2X5nSJG9d7MntdzahzRktDprAS3MXCTCegZKWHUC4E",
  "key21": "eW6Eujon7PQfxNyHpqWh5ABSjZ1M9L2aQSyzPQ1npXsUiY9peb2fQhHKmiT7Awn5F3yQqqpyKqLZGQitfLVkXs2",
  "key22": "4EcsDywFJpnTq1KiXpygqG3iLP4ifauk4AYivsrqn1P7vyQvdtSLJBzKU7F8eMURdJXkWmrz66NA18C2oxAFmta1",
  "key23": "4RfqRBteDSAxhn96K91s65quA5eMnbqMhf8j6wMGKEA5xHaFGdcKNRfZGYr1TgevcthBHms3EFJRzJu9Cy8wCHAT",
  "key24": "5hNz9Ck9WEXCou31RDkvqrQ7hJ76JsRSbYX3L5UAR9cK78DLNrJnrCf38MKhdqc7absXwkPx46KUGruhAtg5pBLx",
  "key25": "3nTdYTRTSJVepCA2AAWFBPS7dFVVX1aLz7V3tvzZsjyEyEcohkbxsojDaGThUZrkbSd9oLNyA8K9acRMr9EcML1U",
  "key26": "5agBGTdaN3v8EXEXWGtnKtT6Txz6TFAfE8xc4b8krXA9xBC6SZJ9xguWN52H8mk53VZFKespM68eytoPYRgNdwJh",
  "key27": "4bcxvetdSaQUT2ux8Qus97iVNeE5FVor6FkeASoqtDVVKiSwSjFgmwZY4PMHWR4Y8zi3qJkNdLpEJFDFxFtQ8HbM",
  "key28": "2vrhwSbZvyKTGEVgeQpKp6y7B1SL6yCwdJ59JR6QyVTDWQHB19mWCaBcWrbJ28nZBFHMTv9uLq8SZew3a5e8ENjH",
  "key29": "3U4hQL8Yq9YzHCC4uJTJYSQfko7YZAAv1PXyfcQSaMqaUW1N57KgizKPMY2t7LqGff8dZWpgJmSVkvsVKEYLDf8S",
  "key30": "R5nHjGVNBPo3KotYQQF3DHCYq25kdR6b8UZF3aPgep1R6LRVKkfY3oU792RPRwJBKt63g1Cigv3tkoVtotkxJFY",
  "key31": "45RyX2LnVL1Qn48C4UWFJyN536WmzJUenUiLVZ2Ehf8Fr5JCYrgxXicgeiVbJMpZvPj5DwYGio7gwZXzERUDg8t7",
  "key32": "4T1LFneVfYbMquSVoUeCdxhHHGTMDYoPoKHZk6MzKWLr2V1xM96QuUkvn9xYZ6sbYDKN5fUby3y7iwPn1A6LfZ5y",
  "key33": "2Ezd2AYSsWmY3JAaDSmfYh2WmLUWS4Yueo1f1cYcfJBbjmeKcE5CBPQZxvaxafKKZfzBKenztmeCk1J6jsSi52QR"
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
