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
    "pvFdJAvd33JTunWkqq3amrKZH7VKG2a7s3nrxoGmyzTRKqYhNy1kgqa6pwU5gVTfLCGxMWgno7jXKhiG66heQSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8ct3tkvhLAd8FBH9hRwPwnACVgR9v8QxWeEbMHJ5u9PZwMipiJK38uqbiayzND7mf5DzysVWbvG5ZCVdLmjVzb",
  "key1": "ogCitJM8D2tBbzNVqZApzB5JxdWDWpJhPvLtQu8C3h93dvCB1j27Dyh2GjFD8WEyniR5P8kDzk42BZv3SEHM8KB",
  "key2": "3gaH4fNbTEPtCEw2GiCD1wdPTERRJ57BL1KGAqs1n2zFfFBQLBZPMhik18wiFWgdaadinzSwTy33wu1Fp2nKHBJH",
  "key3": "5mAGFkzJYZsoAtkovgN2fGQ21sPfRVckAm5BrYjeJTQEerwwSsXQ7wCuvVk2ReWhz3WfzvDTTAaCe3v6MnwYBEdc",
  "key4": "38gdj9dW4Pusy7BSZrRBgZ2TJMjTNt3C7hpvTSEvF7GZeDavPjrrLmZ4cHaBhn8ST7WhpWZKoVqwRYLb52DWv2M5",
  "key5": "4KGucNKmBZZikQic2nE4cW2xVDC99D6EgE1hDUo4dkBrgkHurCanoHu6j7T9h1A2tjEYymHy1uhnoAjB3JgyR2za",
  "key6": "2qwj9VQeUUstsHS8qAuBk2NBC8LFJ2eeXmoaTZ97qSjH49T2yxaWuJa51mWRmNLUmbTC8Z382oxa95gykS9TupWq",
  "key7": "nPi3HdK7wcqvYwpYv4x2T9fjkpsSpbZ3ZqzQ5h6ZDzyWjvGs8Jamig5ic83AJjyiGkopX8Ucj9eibmLns5H2wgE",
  "key8": "5UM2KvExKoAzTpBWFbUmdTSkkvk2SLVwZBDX4v5VKJkSiPCCujm18GR9ZBTt2xkJsU53QQ2oX8r8gLDrW6LB6fX3",
  "key9": "5xpYfbDadRCkwQKFQQY1sEruhL5pCbRRU4eNUo4X39EcaXKzXRrmKouUBq3ZAMB8MSpzAk1MgpjwrBrS2c4f62ye",
  "key10": "3JSJNGaUsAf38TMpB6n6rQhduVXaaJqYCFmE6n4TfG4jmVYoHTmERAp7okigeSs9FfwSaw1SbQ33Bs2PbYorXHHp",
  "key11": "5KPRLaNehjmnYvrXmynojcmBxtTM1ocb17wybkmsRvNNw1GgNVyzZDJauGHL3VG7NciXpwcUXDzFQ27akV8KS2L7",
  "key12": "3ibsyHmFtQqdfhAENaYNvMpja9QMxPmP7CKanb44GXwewNQygk3X4jcVEuPXeZMYVnEFSNBT3YnZ5VaHvHyzSzfE",
  "key13": "46KZ2AiceStC3aZL8XvSn18raTfe4HfAp7EkE81Q68EWYkUFYkMn2z2XwA5FTY3Tacrj8B6cW1QMmcgvCQnL2rsx",
  "key14": "5RBXr5tUduyWcmKzze2eva8VF5DjdFDHVyR9Uw19puy3xp4AuNy9fGTkiyqYVnrxsCceG1C1NEnae6KsvRYSbf1b",
  "key15": "5qnbKhfphV9e5WbciQCAd8cggRRGGvvvFiZKcv7LJ51aWDaXy3ALjbSrt4bk6WGeiCL9k9QjUr5Li7b1vAst3kQN",
  "key16": "4NVfpLyJiUbe1dq6XMHgo7pS3t5Jes1zVRL14dDmvW31bJvyTx4GtLURfo4hzUBcr2RGzE7Lc2yJGS2mffeh9UiT",
  "key17": "2Y1BMWBABg6nab11mKU2aHm1oPth8KFQaYFzgDbgttvUFbvUmtnbLQdmPj2AafU8rzDHb68Qgxsi3kd8YdC3Vb1Q",
  "key18": "5BVUng4AyQ382NefRqDayYEhsPSPmsMCV36pW1ZvQDrQEhYAKTxRyCnUhpoAx2R9pfMwe4s59ZfFPTTjLxY2qVQ4",
  "key19": "41y5NJhNnx2c2NwFryd62pjK7wGGRPKB8NJG32gV6SaEbm1hgBxYQe3bFjSAMMSJhhNW1bmAAZw9niv1CEVw8ohV",
  "key20": "2z21bFeC5nc91oX5dADNiwWPeAXvBC1euV6tDzaVN7NboYNMXCnUsoC5nnUX5ovS5dYQ6ZhD4Lbr8kyVisjfWCq6",
  "key21": "5hNGZvWvY42r3uWkY9uUdNMipwV9Qx57uKXUeGdssKBzBNWHMEfr3vLqbT5ncwM11bBQwSzcwk8WogCZ7Yu4sY4i",
  "key22": "4W9fCg2FygWSRqjEujfFjbRQ4AKoHdWBXrhLhueom86eXyYGC251L1QsWNLVQBE5wRkGNigg9jCL2x1TEJTjmwVw",
  "key23": "VcfwcR7R1BNrxsv3SkhDLSzS6exmUcvGocoBXcT6UeSVAC28w19UjyXWnwng78ngD1ozp2ayt6SLzpzQadn7wgs",
  "key24": "65kovbHajrhbCsx6AZLPFQHrM8jYusLVQZPsRxz23GnYHxXmhjcT32Do94AXvXd6CaYDNtVCBKooETbhWS2nqgkh"
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
