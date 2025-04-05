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
    "4RMmdLFG1GwFJqrxZnYR1G2k9825vDoUp9V8uMD6tXrk5WdbDpGaBkmHhsYNiGxBUGT7rzotrNqNKejjEXspLtX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YL7c6JRjkb5HSCgxSS4EVMBBj7eftDgEDAWu6FSa4RzYUw1m4bB7x1u1tmyCzYcUH29M3fP5DXZLtjfszTSoQFE",
  "key1": "5nzFhFjcCBN8MuEdNLuMkiRZMC2ixgegrg9LzQy9Lm5oaApqWBkWwoHt1Yddf5MtqrCE9QNxUQ9a4cS6dDzhdCYW",
  "key2": "5Xdjev6AdAbLS3SgHcx6p3YWzZuinuRGmmr3a48roNkJmnT9NUyqMPJsGXhkTopu84QVnTgiWBVW5D8zsg7zsS2N",
  "key3": "3sFKN98JBQ6ggBjMRT76fKuch5qZtCpmUCFvsD47cm9bTi4BmSAFkyBX4Y2QR2rTvYdF31AxTBpsobQDvExgq8Bv",
  "key4": "27L43cjFKy9Svq4saZ1eqtieodNWzQhCT7duUNGMTZnF39hEQB7G28p1Cva8BQff8pZ5Sikizca7Jb2P7m7LZgab",
  "key5": "61oKCCPS3ecQqR1mVK5Mo5jtxh5N2fCh99f78ZdcKMXAL7TuKbGCkmHWqLwv2umGGyzrcMgRhaxqCQLeWU4CcvGs",
  "key6": "4zamBbPWdDi9txECozjZQ7GWHE1YUvoiA5tr3aG59uP6Rxur6GpaKRK95AigA1D1PcPz9rgg3Ph5KEERxRwaUEPr",
  "key7": "3N6Pg1VDpx9m5ySHoTkc8buxJX8AiiK1uXZDUE3hFxyButp9QDqFcpVvcBT6wW6m2FnXZTcs2aCGh6m6SYVCcG5Z",
  "key8": "47bEExYmzakBEEFcuQZCXBU7k8rUiiu48tqFLcx1UC3hJ94SiEdDAGzDScZ62mC1158RYcGmsDdoVyRwC5n6FZU6",
  "key9": "3z4mpvBczH8euRdr2wET3hqjvAUYK9AHRyGkqwdVZMLgmv8WWFcua3r7yW2NsKqjEVDQgi3aRN8hTVyTCJs4TH1K",
  "key10": "4gPfeRFmw7kAkpZ495bWugYkFAAWHCED5heeBGDETpGeiyyeL82nSALEUEQtQCNumV8jHVcf4MS8WkiQKGXqf2t4",
  "key11": "2Wu8n9VUWmypEPZafepQKSmu5RwDebEfSi3xhbiAGts7stqBpnxvsQzgQqFewE9MuiAnjYCsmpDY5WYWEuFCzere",
  "key12": "4jXEUoKMRxsRdLmESeLwXqfE9FnyXd1LZrivPxJMdCUmRRnwuyZ96CeZCSQ42dtbbjXszTSphY6kCL4BC21tSZn5",
  "key13": "2FzqMYfaCHdAhcbJvjdjwnvCDM2Sy2kZFeK7Ph9TjHFvzkwELqE7WT9CHFxYY87qU935RphDU5vW43Wx4959V6ju",
  "key14": "5nxpvTwPz1Sw7RBEEe6MrJpuFVMFJ6hDLR38uqY3spawKsU8P2WfgptRQP4JhbVZExm3kgV86RAHUZkYcHgmTwpA",
  "key15": "26pRGXTomgN4ih8cbmntF9hLbWeQZ5LFwqeAt4JL5t6bUbysqWaab8wbAPMbNsoC5w8mjNTPopR3sMbi2Z9Wn5zQ",
  "key16": "3SpUGrJa85Vn1Ts7ZuLhetGijpHrUnWgRePMPG848JdBA1KkGCPTXKVy5UFhG8gNfYiGayG1FECacRhGTLaptW48",
  "key17": "5zcu7qxCwMS3rEGsYrLq27f7HMMgi6xxDTpRouW1DbrthdaPHvSm5ixRmXMrDxh41gEaZgn5ARgf2ECuJynJS17a",
  "key18": "3J5tNTX62v7bQ7TdS8knHzyxjUBJSusjL5tK7hLoJ4skStjst2M9EdF2LqtxMjtZNgXevC6CxnYBnhKH6uR7ZVig",
  "key19": "6bab7GzRPqGycwpE8v51thCQtwimiCSKTYDjdMawADii51NrZmxcarZptekefr7xeaK5jtDvrDDk3GDbdAfvuL4",
  "key20": "3vQP8BntBLQ3MusLEDeDBGzsmY1FwufCuRm9e6T4kjA4VNok245jcFUqECiD8ZYHowmTDdBmXx8SPtiNRtso9KQn",
  "key21": "3ghqqM9Q4o7DTvz9Abh9hw1cTFfwW9XuHuiYwgFimjeGmtoqq6AJ1vXgaLf9jEzkJeVnKM4fwtgJ1uH6PxP3GVEq",
  "key22": "4uhe7e4kPyLptmRNw2dxMfq2KkCAbdQVscw27evH8JRjgpKRCdbX7h4gTPzWWy9eGZ1zgqtvdC6qL3vZs8MvqQad",
  "key23": "D2jSu464MGQBe25b4hAf7ZwXqxWHC6ierAyt8MYma11dwoAk1TsvyDgneQgBujU6SSWDtUA7jZDmB4QrTJTRGYG",
  "key24": "2DRb1rPnuHDhZpaqjomEzsqmMcchcMJsMkgfJWJ1KyVaVpnZHnZkQZbNp7Fw9xxGAyUvzq3g7n8NuVVmL6xeJjEv",
  "key25": "64mzigdxtgKSDT2ozfUMzcg6GQHVa7UfF4YJifBEL7q1ve9CMTPXFeYj8uiKKbJppHKeF9JcWgMLkYPWqQoxoC79",
  "key26": "22cbbnfT6xfE7ymYvLSxXTm511HsXdrwgqdvMQRskovtvPEf99kQAmGnnKuhUfrSvyAunCcwkDzE7fMnbt5yANsm",
  "key27": "62aYUWXBsXeG6SW1Wmjssk9zvjb5GYXKQYuVLvVTLkPshaXv2vLEcB4xEkpCnNRucfTdyduZoSSArnUCcQNtJBx1",
  "key28": "3MnNATjoVXdGifQSstRBxyKNE2ogDzrfwcAr4LKhwrtYT6ZHgS9cHay7mQAgBC9Lu7ePWRRy2XPyB8cX676EZQX6",
  "key29": "3UmMcpQG8P1BeWhta6MNQZANXZMrfc2v49XQSmQFY4ghuaNRwsBSMv1hBHLBhfb1RYRrxGLqAx2fH1UQKAJSwKby",
  "key30": "5gKY8LiDiASgUCWnJ8WqixQj4BM9hA6LFRCU47GGTRteK2GSmSpava95PUcyAgoYXejCZKfMDR5q8AAADdfDRfUw",
  "key31": "4UCCpTCchXVokwczKDEESq3cppTcMQpbCYtQvtuYhN4CVQSnMAqxuQwXVLCmFZc6beYPKAL1WC4rp4WYs1kw2FA1",
  "key32": "5UGJpEcgU1s7jcteoyhmJsZNeSeViezYHYMXi9GGuZvmkQJQyQWmrdYaSoQ5paocY1E4gKqQ9PnXCBGyLk8UWkbq",
  "key33": "55PJbwVkAPoJ3RbAAsFPeAbphCWFWndi48MwtkQJC8fgUqSGpHQYzBw46iKe9GXGprfZCDN4upkPRUsxi4arsyBr"
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
