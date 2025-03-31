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
    "2Wm3QwJfrncRMdtbtYDagSviZJKvA2ZA6XHqThYHnQojJZ1sjYyCFoNyroAs8RUpVCKkHjjdME7DjMjHw2nSRTSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ar2vwhpxGmYih3zRJz8yGaVLXvQa9uppE1RMGnWkvvEsugEof58ScB96gUTExd1vSkswGA7RsHfy3vC3SRXagxb",
  "key1": "3ngCUvjrn1sS6ALy7dBbyJLdGH2BWAxKzE1i1QaAfZH4ZuieXPLSJURoyv1BXaSiZhqpA8BDG9HBM3852oTcXJQm",
  "key2": "2XWkjwk1jmkLwoT6kdWmNBfoxjB2nHp7cnChHPfKULUuds6kqmtMawXJ4NMpXNiedjmMpXB9krvXFEkyKMGVTnky",
  "key3": "3yvyDqnGn8CgfBB1Va3bzW1RgohyyCsf66pKHT48jmY9r6H3R8o62fxe1cK7DFYtLNtvHvvevMnFbwWf23DymiHY",
  "key4": "5HNQfneYSQpMXkgPVRYwZyag7ajHczBziyhw1EELACqgSG3nrEq2PUwErf1FEjYDN5TCAPjEANJ128CurTAT7qNo",
  "key5": "5LcVJgWoRKRjnpwuocF65N2U1HFrL24MMADHsUWVn7uydE2QjT7phXttePykYwquKSUeCVzhccvzHWU4PiDzc4VL",
  "key6": "3kFkPNBsqF4kRg6w34LW5LbXvUS94xekxaK6wxPMEvaTBauYhu7NFbw8KJWQkZr85QS2jcd4bnbzLHvqkexojfaM",
  "key7": "2iu9d7faSTtH1vQHgJFwA9n58Qx2T7kLMXhVk8zKtfCqMcvkvYDtD3CA9bbjMgpK49BP6uPvrkkasgyT35Tzo9Zb",
  "key8": "5vgYNBRVnnsiCGCU1FrNohF6pSXW8x3bJ8fFE8e4J5czgjFmG7DMMen2bDJJpFstLN2ooTGxWMV2BAcTaLjn3tD5",
  "key9": "39RQuHs5Fj9JeATrJqAqWdj35YGDshefh23jZgFGNYtyrqMaywrNaUZWaeTeZyR6XtcdC1KeiZryEfhD66Eanhnh",
  "key10": "3FdZx9c2b8tZD4YoKnKdaB4KYstAsHbd5EBff38MkPRkB8CHU5Ngfa4kVQf6wvxDL1MLWJrLwWYCKpTwPxt9vSVx",
  "key11": "5aCRmJtV2Bnr64PAVLa6LnyQ4xDm3Zc5DRxbcNRg7iTSyGcuPo3q7Cea6JcxSGSubAxPddCZhzNnB3XU5QG13J1m",
  "key12": "3jBHRqakFu3FaH9KCVgBaa52M4FzgDW5rC4trSMtQ78zFXzutxgodisv4SMMAnkYdB2VD5t3u4mo6Yzcr3gQRS44",
  "key13": "2ZFMRo1k9t51qcwQBbqyszHJkidxxYsWLXRWPniBGxNZ3qWS25VRuRmUhGy8LnJ15N4MH56mW56JkyrX6ByUN9Co",
  "key14": "5q54S5UW2FZTFcZuyHtqUk9RMqExYwDDDr3HDQqFzGLR8qrAvqkL2ceafjrF7CB31aCg2NXpY46VWmdbdGgJdT6C",
  "key15": "3uTut7YHAPQ9vEZFanmcwBmyntpmffLdwMpUj1E4p3jzPxkvGWvKWxiT4VDoTQQL5LMAS1VuXAVyvuhdXQBbjPpm",
  "key16": "5iaYsjQ4f7LyGaHDTAWwsTEagx7KVnwazF9sjguMMCA6TVYPEQdZ6Ud7qPvzzPnQGC6C7ULb1qVM6o5AyQUAqLP9",
  "key17": "5A8U5a4J9cDZHYmWEe7j2vVRutMi8wLz9JkorQKbuhoh8aoZeg67VDQVvTksciKNZDPrSre9Mq4WwrUApTdBeVuN",
  "key18": "51FQrXG1YaXHgcdb9oeV5iLUCSKiY5cJGG7cXPDvzeYyGdm7eEki7Prm1cv85DCaR2LaMCM5Ycvt5zAk9Cxp2eWs",
  "key19": "4Azo9GQWPiPmkedtZuumBxXPAYE2XLn6FcHXKKbDZRm2qcrbjbYFVExEcHrvzCBrsZFofFKxeFCdt7XM577PNwpX",
  "key20": "67fdxpByWnaoAcVDig1TPqtHqEHy3VapQqJe43MtEPFfVCMhPrvC6LoBTd6hVMX72135rMJyQ5bibBKcp9RzUjnT",
  "key21": "4WHrVsTaEQ1jKpoq53HPwgNWxEEnSoJyU2KgPyTdaeBuk6X7qs5HQBvphPBLMmx7neTmh9tG5T1SXm7HkrssR6FW",
  "key22": "4J9kq1j46jtpDTRrCE2TR8SbQQKpwUwAkkfAqCKbfC6RwDAHaUSuBYAahfEzWrkroq7vV4GuQwren3MZFhWDAZr8",
  "key23": "tPfGrsfFY4RRPWdthr4N94iAr8fE3vw2QwsNbxf6F1NLEAhwEoeHqKPgUnMky7kiueRRVpZcnjxgNcFhYjPVVgf",
  "key24": "4yqN4gSncpwSrxQitfA5MWdmTXy9xvHzY99qwjJPstCMXKNjPWRfpZDr5SunXG9HrSSpi8A7fpXbbFcq1okbYE1t",
  "key25": "Nkg9s61cfbKhya83LCTBcoUiNtjkeW93t38URcX52uFD3AWDzoF4vCDjA22bzXY78gy36kUKLoRTCjoCvegvuG8",
  "key26": "2oSiUEud8XuFpfeUc8jXUt2Mier9YLQEZKJCHRz56J36a9Kcu7mvVRULWivcjRqVLitCnmM3FnZNEb9LCuAFdwbE",
  "key27": "5wRfQzyq9T9GMCKQptPnWNbYtYZK1xRfZibb8uW3379tRUuzQ24UahENpbr8YkTq2w87w4GeYyAnZ1aexuASvtrH",
  "key28": "3QBXE18aynh4L644sVTE6haGDZLoVKU3umGCsDfDR6nHEDQ4cFMsxZGhVyyZ1NrSk1ntZ9U1vG7CJbb6rNEBYyB3",
  "key29": "41i2ABRF1EJKhMvnS14c3SWhr7rTs8bFZxh9zDBHuE3GjCYQ9chhZKQ58tMGFKV44sTiiS6WCFdaEqvV6XP22wLR",
  "key30": "3PpiVfyEub7P3zn11wpipUkSjv9VLFRZ3mSnvUwQ2sDLDVzKR6WVPSPSABPCzVe3LKSSMbrVmd3pSoxs119hWiw4",
  "key31": "uTotJ7DGs9qfx8skfAvhi5shdi6FYDcNxQ1uyyB9Eo1cWSP3kRCdduT5h5mFu5v4hZfA8cofyBW5hB99kM1QxUe",
  "key32": "5UM3rYrGH5owdHKgGZ5BsRAMbdvg9VUi7cyxEnGZEV5rM5TvypyfPN37sT7pzqTdHastELhWw9ETLE1PyDVfSbVh",
  "key33": "5ebEiYUe9zsLxji2Qzep8NBW34QfxSpVb5FxUCPqd433JH1dYwgVmB8Ajw9fCy6JmsX8uUVjBP54ANx3qiixDe54",
  "key34": "3i4hC8Yt4c32TKA95SBPZ4EQHtH7NSc67iZCpvFqQB7ZUMVNyAx2WuTdVyu4NxyQBoTaJoTmAux8WjZFxSkwkTgB",
  "key35": "2Hh2SUKxNHbckCiTZcwCgUQGRV5EnkAL63EWMqFui3FG1T5HYHi3edDE3QKgD4BQBfeyCNiMAcrmJCkiZRJNkeW"
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
