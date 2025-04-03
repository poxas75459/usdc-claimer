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
    "5UedKt9x1XRV9zbkPb4VonHZ4K7a7FuF7Q5eetKSE82TiEkXaaVcwPaysS63Ep69Ba4CrTX25X6xvuYJ4pfKkLMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwoMpz1NnfrXpQRYSkDtq43A7DwdTy7mxuzgZWMTjbeCQumGnypCCX66yv3sogq2iuA9R9PyKg659uQDL3BHuhM",
  "key1": "2xqsMtdU8mt56py5MnGNEMg6Aj8yjPY6frqLKcHLs8JDH9SBz5K94S2Yxv2wAGiAm9AHgaiG3XyP9rVvTx4gjHmv",
  "key2": "bEVkkinQUa4ywiCnU79rN83ydjQ1pf9H8Ko3mBj9wQ8zqeJT2DHdKwLzo1zZK8UK1i1oMFF3zuYEPCT9PfKRkq6",
  "key3": "HHwdwLGQPgTZ4HMHFEPXakFJoREShTiywkgTq2KmpBgsyzF9DnZNZTw1JbyHiheFpKwNY4FiJBtMsKZQQsDDyjg",
  "key4": "3L5ZF2ouM4ktYmbu3caEWw3b99usRCupFJ2SB1J369YhrJRLWQbjE9WEUmi1NQ3nmJMuWmqDTK8mTspEunuZxtn3",
  "key5": "3mG5vfNU6TXi1y9iVMrKRrFc83BGQKB4e6NHuPn7qJ3Q47U7oqqu5iymLK8CfYrQVAxiasABpkuTVRarVDzpkgHy",
  "key6": "2ukFryNdL3TpMA35GPu4BW2B1CbxgacKrXNzBi79jfeNCh5PMHSTVWhzksQrAzaWAJ7ULQh2pNp31mRu4nsx9sWc",
  "key7": "CVtbe9R2cBt7RnnWr5gcuQYQfVLRfSaDX4h2LzahmXpgrfsausRx84sboeKgucq3xi5UncpqaSVAd4oVU2khPKr",
  "key8": "4nMqMrjqnNqkgNv38kJ77doFbsyzJ54kwyoSAtJpknEyJHEN4oGv7yTRkPKJYpp1gLs7RZrVNhueK1HVxw6wyphC",
  "key9": "Zp2tWPvdKcBYKTQdS1KVbPp773LAYsn9sFdRVHoRXgRqd2483ehJqZ6FNmysdtoNMb4eHpjTrTRVm4VjtumwX3x",
  "key10": "4eSWDMPgkC7kA1d1GqRAMYDfdSp98s6c8vd8syCUkfr97n8G953917wj2JQF5Jkahw3gazFAFNyfx3wzBgA46BYA",
  "key11": "CjNEFxQ9myP8sChuoZvkCULUGXcGY2cVTFKP4ykfPDTUiK8qi526j793wveuyAocGC2NpEqLgCMDK22u95HLiqq",
  "key12": "49NSPksvpFU1fPkyn4KKGDY1nj6CFcwnqy7EjApD7nAi4paaks73AXWucSqLR9vunJzeqnaFaJ4VRBLmMassoPmz",
  "key13": "2xMsdkxiC35ePHnXq2bGwS48yffm3spKt92Ndx3AWJKFaGd7CmfLbY8ngMcRvUd1bw9TkiYAJHF2DUmcBQp8iCv",
  "key14": "2DWxMvdrdKi5Gjx8zWiQGvDQUiNdcknFUMXhcPLfPP9sCcRnJpeSzPdgdd9FvR1ta1RJ4joetj28z8UVReYEzNp4",
  "key15": "2FDocadaGGVHdsEFSXVJKgb4D4LPnhLQmvDX6GwpVjCWk6d5gXEb4wmxU1YACvgbSNGVcvL4P9i8QQmg45BwFamJ",
  "key16": "rSnYV1shmmfowNcC2zXNdyJ3ZiB8BPawYkWF3LM5ew5vAwfm4Lm9iHp6W5K4BuWHLdxsLbSf3otwsSAZnJJvWTN",
  "key17": "4QVxwqy8Q1TUzrGLiapXE1QzAohE49xmgttMRZqhWLanCYjmVESMsaajf2dTDC9ETVsFUAWPLyQuG8EV6qNkuNU6",
  "key18": "rCCY2gop9yU7zbBKMJbrPF3omsWwg4RNSzLCq3ZFAR8ibSTgHwyLwd29KXK9vUvftNBnN93F1vUqXtfbjWfrcTj",
  "key19": "Csk7D1Y4XwgHvtssAeZspeGR3eA86bdB3Yoj5LEaXDw2Ur4xSgiEA4Rn8vMcTMtYubdXKMGRhcGwTadabFE8piM",
  "key20": "5LFMFqgbz7J2pN5Z6j7C5iXeWCyGm4iuTxujtnvcj4bKws2hDjJ4Yzgc5saJM6Wxcjj1YLEBfYsPq5KHf9PMArNM",
  "key21": "2yuBHf8ntZ5E79dKCeNU4ubN168qbUNydBoj3mLoJsE2SqfWqotZTbz6t5QS9vx65RvLbtC4rVLoKt8h6rZj17b2",
  "key22": "myFns1LEzND1qdC5zBzynZsPTfx8v781J7F9DNiBfJ8qu493uQy5FvKHWL56D2faVFujttMzhRTEcWjyRfaRZ3M",
  "key23": "5f6G9BzjLM8vAVuWKHNqTmvjjeU2btSNJBV8VgmB8YpuFPtrw9H21La1RZznpp44qpRxrEn4X3uQ3h5EALmY7ymk",
  "key24": "5t4bxewxDAnEu8Jt1wz9NbSrf7nBjzf7LhYbMC9X4reAbMuWzGddhT6kspSPYaTHmVGTBbEmnpaf2aPtFgEVjpGj",
  "key25": "4sM5RFcmwveX3cG9gfrEvZwScrEGnXqnSQZZquzxzuBbEwAcjGahG55v5RV4Qk2NYUUHTe6kr59FyEj7akQNDiYn",
  "key26": "2gnMG3eVzbtDYtG1U5Ez2LYBRfa3woX38W79RuezqodDyJd6B3uTnRdfeDpxFQjYzurDFS6xzvKMtnf3DSv6Wegh",
  "key27": "5Uk2xE75dNN91hekKhBALxnV7hCFD9QwnxtLmwp342VLzkHxZWbWeECwv7n5n2eFyXEyPyr7mmJ71yF2LD7eQ7oB",
  "key28": "3RGqvbLjd47GCZPbEqjQE6wCvFBMZzCxYoErKVF2q1K9GZU7u5iRRZwP3nv9cQs7APdC5pzfgydYM9JsDSMGvXLA",
  "key29": "3XjJd12zreeru7RngzQzwRa6MJjXsy4rbgrVDhYpryX3tn6YGjBQFrsgHnB2hseHzvceq7EpaWF1scwCypzjUjX3",
  "key30": "63MKjBwUehMvtPsT4TFDyTbpaVNsbgVmS6Qkv5ACT6ywNDDeV5EpjXE2bRdAQ26ZRJkXmBLd7VndXSW3NK9FRuDi",
  "key31": "FnpL6B5EXWbycpc5kAq9zkMmjhdPpwzuX5guixmJy5zbjbw73i6sWdRvJGw4wg3yN5b294MPfyyfrqKGYbeXBaa",
  "key32": "35qMhXEhQwbpSDfQ9db8xnzCY1BKHrocBL1giJcghsNNm3mMKak2icppvjBBMbNTpUQ8FuR7irMFLRtQciWqCb4t",
  "key33": "2S9LNxqyFMRKXErSRA4hviiemsk8VdshMGGMgdRFJCj3f2CgRzr5P6deP3Ucnz9agpNvoC4NNanNZETJ4n25tMdW",
  "key34": "2yTBiWBernfJL2bpRFiU1eWiWgy3jUtk1YiKJ9Ta5td9fNhhZZcsjyJwbnKF8NwWkVALdJDPgCLUjiSPyMqM5whd",
  "key35": "U2j1jokntwD8LazfdVDJcp5dEqHTtEy2eYCL8zWFmdd2ccVVjbJtKPpurZUJkXTRmZxQjt3E7xHr1TrUUW1ouJv",
  "key36": "48NjYdMMrUFZisTpYgJsgCp4rN3AYhaNmhSVqJJ6K6bJiPmViRLpW9dDWZGFEon5y2aiP2F7rQW8KqvmBSbNZyKv",
  "key37": "4EgYLGr13D9RvgE18t5GVNC4Y6WU5cxEixjkVr3RkTaMoDJikg5ZEXs92wU9GkNbj8LbdZUHsyh9Nk7KDmcUUQGY",
  "key38": "Sr5rx2yLX81SMbkT87c2UiJHotHXUxYdEf9P8Qj8wb1rY6vrMna86EZMXYKozDU5Ae3G7d7i83s7eUwfefKgafU",
  "key39": "P4HJx5KoRNkQBzdXyZYVnFpPWB8bVAk2PzJY2BRKbH8KbNqkSveKQ2eyKdz1SYxsCY4RbpfLaGwVbkUzHfFoJBu",
  "key40": "2dQNKdmwopUkawTQ6VPRERDD6t3366u62YjBNn4PgiqsyLNhhx5SX9rjeWfzFMkPfyUNun68DGHnMQh8BkHgGc89"
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
