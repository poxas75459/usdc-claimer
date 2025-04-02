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
    "26Ncm8Y9Yhgsgajbr5jHJUnUxr1nqSEf89YMYEjFTWx65EeyQzYGPFQEnwh8oQcgG7r34UoJk4wYZ4U8S2UR9e1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qvCNfTPLGcWoRXdzBMM3f16RjfQ41Ch2r9SwjqPtpygC5TLxgMvkd3e2zR7UK4785SfN6bMNpihBBXo5uSde39",
  "key1": "5BrJQ63SmHy62hXkL4JHsduii7dsFGMSXsVphr8UAH958tpiWf738Wc94MeiQaktcaXe4zRBThPhRbwYEGqyztMP",
  "key2": "4qfUsM2ZZ7k6KvE7yktaKuNY1pjSHvpJqge9tWoGGgR26pk856HAQTNNcn7khno2UVrjPCcKygqNBX9bH3oMhai7",
  "key3": "63YQerfg5WsmUULyA1iZKqds7ZuFLAS8RKUxsqaaje2eKtQybWefv3WRsj2pEGzfQwXtXFK71jp6DHCh3nVMyTrG",
  "key4": "6adX5P1mCMr6ecteNpzsiAiisTtLkRCRkys7WVnV65Cp3gg7MRNSKejjjU57jpq9HvARDdJXPDrN4u8FDEYh93Y",
  "key5": "3kkHQxkrBBxNLJCtoi25CFxYUhuMC8UD1BtS3EwfCWibA9uyDLWcaHPk21gX4jdcCVALpTaqFMgFKL27gmq1grQT",
  "key6": "2yZXX8Qthhe4T8X93LK6QdyAv3P12QTqeH6hgBweNhzXcFrMKJSZ7cj6rCgVCC6LTH5peuqpLpotbw485Sh8VYwS",
  "key7": "5Hb1VcdSgzz7JJo9ep31DTfRaXELbfkYDxL5CMzCyxqgu3uZpLEcrof6u1L3XTMhwpx2DFmdHcpRHvbvanfaBAAL",
  "key8": "41QRHWZhFeZ8n1fFiZKi84XBKtMKn3y2RBPMbhNSA2TPrvuc776AhLXrHBXHDmdG15oZUiwiJfXEf1BaA2UUqfQy",
  "key9": "2BxpzADDM5jCQz2M8HVTzGqtBUFXX8WtV6ot8PYuHUdMCTZSrMEiDK3Yx4inYR9pY2SdyNuWxdmZSUdL7NPEQ8YU",
  "key10": "2zTxmNTMZQDmmgrJ74p3T1MaLFQgT82Rzk3GPJrfbdGG4RbE2jPx9ovBUPATTWcgbekz8Y8vHpMSXh1w5pR7hqUW",
  "key11": "5HV3VNnZxpttC3koRRMY3Bj1At1gUAVkv65SF4ww2PMic1R3QRE5hfH6kUHfPxGWo1LtK45LjqoJar6QEcfunXKd",
  "key12": "4GzjJXKN3JACjvdMq9ngU18rin4smXeTj7mXVtmwQPWuPRXLwzcPSE6TFoNiwG2uTgmnxY4rvFSG2mptfXdtCMNc",
  "key13": "3QEHzTAJHYxPDsiow4u7bLCWCD1ybmnvTYrEZu8UJaseZdXkphfsGDeWQyHsshWFYj7LRBuHjsbbQqh5tZvcNQzT",
  "key14": "48i4KBTmXgWmfLCAXKKVMEseQufGhPV8oxeGYUBZRC1wTvu5LuzzKuixqJgD1xBwoyGmrbw1Rvfx2EZQjcSJbLJS",
  "key15": "5dnJ3vLg9Wb5W2WpAJZ5MpQepczXrpVJ4yn1FNkwH1WmKApQGbkCvSt2JKrJFP6y4pAq1thWFSk1pCPJHekrqMTV",
  "key16": "MjjpuWZR1pyqMSZMTnN5Rqvg6Yh7qWpwfLy4beXPHifAsgfiCCWwsKUPfAEsw46u7BM7CtJSYnyWj2Essm3s6yh",
  "key17": "23AyhuaATkBW2akU6gNofQ9Az6NRes2qPBAKEBEgqDH56KfD1g8bNtE4QEdyK5bwhZgKvQFUNgdFmb6nu4ZWX5vV",
  "key18": "3S4Yqcq63UB6PrB5ceSSvoUP5QEXTQJBw9CRZHqKKWBLWHxTvGkv61pSbSJVLAoL82o2VeBCA52m6d3oe2PY8P3V",
  "key19": "TYrsnpa6K4Cw2tJ3ENzAWCv1ft8GJc7NDbe9swDrCzpbGVYrJrTDgZDfvnRGjrRwvoSjsnjPsKUp1oM2gJTbvjv",
  "key20": "5WDtNTUfD1yqNDXS7vbhU5mUPfc1NerTsiDLPm6tymGWgd8sTY5hhNa9xC9pHE1BsahPvVGHsB1in33Eiu1Vansp",
  "key21": "4nDEwaCNsPgT26H2rkpDWQMNgnkAZW1cdKKbyoxdhLFtsrsvJ4uNx4bRYovoBuBYe2Q7Qu3fS4ruhqpHbGd3uVvR",
  "key22": "hcsgKYHxwCPN6uYMsgRKhKRMWNvAUWagvcRVvBykgQCuq3rKBDGoWZ5deuXf1yMML4wWdkb6npsb7PV8xaaFMuU",
  "key23": "5cWqJiBb59iCexa9CjR6M925J6xnvGEJ1weB9QzyNZwSGvv6rqamQcEekmkNZxn9cDkpRwjsE17MnacsU89dpKrY",
  "key24": "5DpBsfw35wn2sc4myHAFeQcNjMckC3iUhkak7UG7BCeg1n2hE4SJ32MzVJnWeHhYMaJaucB47zHV9pMu62zEp4RJ",
  "key25": "2cS7vEvLUHG9mmZbYF26je3KcQQnzToZj8cqDnE7xxdjSduhCG237uWdCFJXgfoTXKDjkFnL5Rn5maX45sUkRsxe",
  "key26": "2BDRqgpSdDCywgP6QXBiFNXsf89FJLY3ftdZgbp3e2PtcTi31gwWsTw7r2kyZ6jV6vULhj6LeExbiH3DmNLUQPka",
  "key27": "g1o8eGiz9MXK8GSkjYBeFNnmSPjbf23Up8MopFRikHn5pyug7rjtEQtkmZESqz7AQknZShV6f3q5TR6kLWdeEfS",
  "key28": "4gFqXpsdcKioBgYYVA77oCknhwQ7DHAyrUw2ccw3pvmK27Sc3DcKr72GvevtrV8fdSQ57J8WPiQbk8iuBcobeawf",
  "key29": "28FR2HajouyTC7qH8LEncFqhB4HASpctXqkqZ9wSz5aaJpJjDutymbG7JBrVWhrMnibFBJ2ab4DYe3wCtgiz7zcm",
  "key30": "44Ck13xeQRP4H15MZzQ3MyaPcdgHW5xg5CSj7BkASTgn7M653ijhaaSbpAfCDnTYMqHMwdmJFGQEEB2Gj47xizdE",
  "key31": "4xuo7uj9Z7hQ9SbEspw67uRxHBLp5me1o3UekwzxTbxyi7HB9ALmy5VYWdoY6ARUa6LbZAj6DY7R9CnKxSdH1Mgj"
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
