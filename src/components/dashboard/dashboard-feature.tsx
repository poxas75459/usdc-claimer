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
    "B4TS2SQFXvLLB92uxVNdJSrk8dE9mXe3ji5mGG5zhGKSvVDmmVMRnhEteZUVN3TKiKVzyX2nt5A9D9rFXtt8r6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWu7hJeNvHt5X4Ai5Nu7LsPpv1bchwkzAngWDVQwi75jocCEyZD4omvDTarPAJV5aR6QmeE2J8GngXJXizdH3PN",
  "key1": "ChVjhkvotGLs5PFowxzuLKZtqrapP4imXQTNJxJ7GGnkP3pnPvcMRhyHZj1i2ZyvuMprJ79u4zEnwEMUH1rUdkd",
  "key2": "3WpUfyCFa8LaHn5rezMUoc1VbQHG5byD7jbhhbgcrGHMj43G4SKnTMURcJTnDiCBnBJXKVu7Vqs4yc47kYvdgxDP",
  "key3": "wZYTTzUfGhQZ4mUv7UCLETc4fQX8fEZLeP7y5Yg9CFqRVDXpW4UhEpQcTJMFwGprmtyiChfwpe47SfCYZSSLqg9",
  "key4": "hmi9U8k1wsN9W6WjyaqqCTZQVEv3dk98sYmNsVmEmLPDo7azpKGfKpMy7GVMTfsHMxoPRrXSZcqhXTe5KobX2D9",
  "key5": "4ioX8aHkv2bc3ndLFHGGiGFrah1PPXATGBro2F7A7nFTvYByYUwCNdk5o2nHFyHz4m9p8WUpeoRtLXbGNNrWeK7Z",
  "key6": "ySH8qEk39UTLrFJeGvvRbe5rDxrCx9CrBNLvcCjurHmiaR7fzwTjKtsmQ6K4H3oWDKLS9Vrb4L6JGkcBkFkx5Qy",
  "key7": "4PgdLKD7dFbZxRnF6RYhNppyYrFHqH6VHFStpESavg5C9uhLGKxPfCPG6BwNBMs42iyAdoMLiWnHiejbKx8n5E8F",
  "key8": "3aq3CvLRY8dnSRALr2dgyWbQiweK5kUTTj6y1nkRj7YjdrZP6qQJxhibaWPFpS9w4PtFrHdHUJ5TKgdQp8ZxVfma",
  "key9": "3XkDnX5fL1Sx5SYoCF8ptveMyDpo2vYf1joG8EfVRe1Lkh3K7Rd7E8hBkc1MiG58xdrL59g6HuJyuS8vU3uw5EFe",
  "key10": "3FLdm3qkCnDGcLxzqiABvcaqKfQscVHiWjxAiguz48huTZ9sfrTY6P4joKbSgPZRgew63paWYhSf8PRK8F4RfC3n",
  "key11": "SkcMDxTAZj8FshXNfQNChsahcv3DCEq6QRwjnhowVuvm2nT85btjgydn59DwPjW6nMLkoL65qfYf3gN3mviE19D",
  "key12": "3o8kAtVNkS1o911nDeoBw9jSfHKoskK8smouEnNpVnWuyPUL8Q8ENjZe5WB5HARYsFVoKKxUaKGtJg7BAs9rQSF8",
  "key13": "3SzmXKkgwzdHhHWLWcczc5xM9uKfMSfbJNDgL6txDT3hLUGDbFwQughv3tdipS4R2Xa71HLmcTfP7bn8FLmn3t6H",
  "key14": "54z3UEBUBQa7wBmbwUD75GejpSA1uXiJBrgVteUSNCBCQU8nn7weGtBPwG5VKqbXyNqoNy86sJ7vrpsXBHo425H7",
  "key15": "5pmdTjgiNoj7R91ZXsT15kLFDfXD8zTo1UzDp9z7qpRm6FKfQQkp47wxd7XudBKWQ8YKzXVdaFwWfXGqC83pRyBV",
  "key16": "4kBYFqrcUEvqon8q7T1PouXrSFVcXs7bfgWqcWex1fSdy4g12jdrjhNApA16eqSxyrTLcVQita75MhRUnc2ehxCw",
  "key17": "5J5qgyKQ3uRh5camCMrxMn3yQr3te2Jp3n9hsC9DTn33REtHUv3M3Vc6XGsVWKhuowcTvAJJg2yYALYtnVyn4hk5",
  "key18": "5EejCoDt5vBNRU23R7LMnMgGcn2MUSVW1zSic63XEmGQAJ3REgNtY1mDvBtXP6djLFn9HUxzfayJzPCX4jR5PcUY",
  "key19": "2g8jMcTSLUB1BYCsjHuBk8bhNaDo4EPiDqLvyovaDPDKTjcUfrULWL61PpptDMfNCYsJwpnFPr6xWSr4gCtpekD3",
  "key20": "4A4qTRoPd9p3KBBn6M5M7ggaDy8FTKtAQxY1rTkS6RQ8bo9TbZEBbDXtcyD9Aa7uGo4YHtcmXaz3gk1vwDwBNAUF",
  "key21": "RxvPKrN9TKLYvLjvMxUvu9Mw5jnxsfUSJ4MMcYi1GCWzMMugi9NmK8N1Ccpb1k9e8DxXstYFFnTQsQFFfZcNbtK",
  "key22": "4r8LDg6FZnbnanSeadu58AZdn8x9NkVnYHbCzttTEPD8S9dSwE2D7U9A72sB3QK1UhtCLWTe8XpZRxDwAyscCGbt",
  "key23": "3vJTmVR28EPafXyBodPxxax7rULPKWux9zCjEqr4oDiNSZ3FVpP2hkodzq2rEEu8bxm3E4EC7NUFk8jhnkQ3Akoy",
  "key24": "3QZuGH52QpVmJ3W7WLsxTLGGJRE75Y8V5cKTvJBtSe6MMFBticpvucPjhHdq2iTqmVWpEme79ynuAcHnJebthskK",
  "key25": "4nDd5S5g4w9hZkaJjQw1XPAsU9vqj9AwvqesSRmUiEdvSof5gwZZ82Mix8q5USbxAdmUvQgJagztFaTfSEFGA34M",
  "key26": "4eU7KxEpYSM8nQwDh6tCVNLxuAJcjzvQSfmSVKV6vN55Qr7JQZomayynmk6jCzXAR5UvQoMBAB1V7mC9M1gUNYv2",
  "key27": "5cL9J5eN6bYkQHmo6529vCc3XqnrZgC7hLmHQ4c83h6duFjcqbyKsz17KchCEM327AyXdmntUYRMCvapCrjEsSAH",
  "key28": "H1Zh7qfnMicrfzDpgPjQ1hAEzMViwJKFxPdnHCKGcVb1XGswnfu1Zr4JMhJYWpXwwtHitGQmpJA6Nq6FMVKezsv",
  "key29": "4UsQh4vnVjXQhDaJSiSJ4csHfJ3FLUqbJXgh4vZf5e2jrF7egXfXmacxpqiP58GrrAg9YGHKr5fyDEkyXQ7w3SiY",
  "key30": "4FnS4L2gTVkc7YADyJWEGRPJFEixvvrheY3WK1JVipCTziKnqU9J7uSUAsJxPPXKsLTVbcvMZZ3cg6MZspEEwGpK",
  "key31": "nN2y6wWwd1ttYBXvrpRS3ZNsQDkX4ZVRTxXykA5cN1NbiqnVWPnbwR1dGHU9L6iXZLME6AVvoPABwqBw9EwA9gY",
  "key32": "PaAe9kWkZmwqKDfRuQF3HdGMuU7sKVrbojdCXLZzc5BDqDkpmCwrfkFVPVJ6xQGuakMzS2XJuk42yenjTqkT9S8",
  "key33": "3C3eQCQSt9CEr5x8fjfL5AfBFa9yhTj3HRmGRr1eEErgxFPtNF8U76fxr52MmyroU2WTqc1Wvpw4RBnUiExeajQF"
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
