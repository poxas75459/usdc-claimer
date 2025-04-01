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
    "28Q8ad7bMEarxrNp3tQQnoKfdQNusm1pME39Nf2VvzpAJLj4rXg2Git79iogmJWrSh39WHpZjni8MuK2UZf6BTeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mrZZUSogMiy9P6UEtxKeLAodYkdAx682h2jhfvRNAFoN8pvpvuNFB4W8QM8mBUneLiLNiah3QbHyJRdJbmm9Ny",
  "key1": "53TgtWB3QndztpUKnHi9xBVGVyysfLGMerBRS1B48Qzsqzc744MzQgV4jULeRx38MxqU1fDqQ422HNpDcCK6dRxp",
  "key2": "66T5dwCyy1jQUuxM3TgieNbWkigPmSGCqWvYyyBm6jNU79R5QH8aLPUsDB764dmC8Xd6v864XXXLrjP5SHE8t83",
  "key3": "2KN2BLba7aHVcFJ9rmpQZYMFyoK4tRuJybAcoQUHLnqDxS8JYB6RVKh7RX8ZA7m2BnAy5ZahgAS3yjKkyggQZcfF",
  "key4": "3CYW7Y2hSWCswDq1bRi2kpGEbUZWq4srPxC2Nx5y7BqwXgaXvsDec8Q3bV6QR8eFuQxqcPPqP8vTFYbCawUfxuHh",
  "key5": "2ixPQ5VwbGmiJhf3xWkBZBY519t14QB9Z68HAGZwLEKce9L9JobyvtkZhCY6EDTMF9gAXEjMfMT5MWXqzs9YTn8Z",
  "key6": "XTm5LEySb98CgJPGarXe8BApUi9mQEdQd651reb957KzvzF6nWzMWfg2YgTtSsf99avZ72Cjx35aXjSDsHHuiq1",
  "key7": "2e4JYgK5c48pzdDhCYxrpoHPfFWgpSFkipAYXwTvrEGk5YZuyny6mZHPh5EqRkfQ9cAQX6iSuyfH4CxyUczdYTUJ",
  "key8": "3k3boDoLe3MPopp4M1oQYS1hFHdUBqe4vHKVAL7vozouLPSjuR6vR9uNkuz7kSrbTd7Ur65TE3ix7qDR7P8q6nFi",
  "key9": "5exnEotkF2EjJ2WZBAAGP5jGSQTef4ShpsHxRhCmND5ofnvNk24n5LFMxyREFwZ9cmDf12zjPN2rLih5RJBsMMae",
  "key10": "2sLJCFzUyaBChJd3McdoPQEnaUKafpr6sKJqZG7pj5ZtsDJ1Zem838p7ykBNdKBNx6bDtS8rij76sBE3MbnGv7Yj",
  "key11": "5nxJKRnt11kh2qZME8iTS5yZk1Mv1ctRcdzqeNutEchtshBBfKkgU2piXD1eBTrZnnbmVFoyYkfBrCqQWZ4DVs4j",
  "key12": "43ACCyk1HWwDfzTXnwDV2xfyNKT8q6fJ2gLNoNdvqwkvuSzsZ9RAPeYd9gb4tUypgrDnNs1r3z73D3n7kdj6xnr3",
  "key13": "4kxq2jQ2J5z2UGHzcajWgguVNHmufDn8CSuxEAbpGABk9qGE3FtwqjZp442m2gTQta5vjQG1k2Z6tcGsCGJvo3kH",
  "key14": "3zYDa3ZTxkJPEk7kPkswLxVDQPezr6fkD35NXV8YmBePadJW3DkUDRpbAAD8KHW74DrYGwoJEKfhcaQvvdGqe5E4",
  "key15": "2zbMRNgAG3TUr1ndPoBfGJG6EDAXqgQZuXpnvKY28XWNXmsBWTtzsGmrNZhYVAyi44AUEaHQTU9Ldi6YBMBuGLzj",
  "key16": "2Sen88w6gEZ7xUP64tBhcCqRy5cphgFcBX864h5qFNhacy3db2rLKiAEspF7D6EoW7pRZuHFrTP2PtTjBuGkSvyA",
  "key17": "9ucWZzcuTru2haWPvF3dvRhMzAtf1Lp4KPF6yeYtiLcqbU4minChoXFnTtGnC6BXNBP4cMwFdyLBd97njehQYQb",
  "key18": "43UTkNuWBVuGxgx5LPAqTazRHJ7NU2w9fJFpn1PKwfb977EEp6eDgwCKVci1g8orhKYBHRFqVELjHXcMu8z7Hbis",
  "key19": "29FTtcGd7PxdW26vKqJ3oiWqBcMfAbKufSyw3CmR9LC1EQJyZ9cCFMgDmHNqxfkDC3iDBjsL2TpBxYL6oG8z1MtM",
  "key20": "3u6yJ1SyRqDnW4uVNxtG2z5DVuqKdHnqnx8Juj74gdt4q5pNWj1vGwpz5dGRrmacKwQYinbMhwadyqnoyHbGxGRG",
  "key21": "5WgVb2Gb8U9ouxzjMnamJp4bjCSKnYgTFhuMetTUDagWsTqmqnMBULnJZHJQed7dGeC5ugBFH6kVJgQtebxBvayg",
  "key22": "2QeJxXNHP5231DCMUawJ3dFMo3BYR4uS9KxpQneq2h7T8rC2mfyy7w3Ds56bHNJVmzywXZcjATVC7ze4GnzDsUys",
  "key23": "2KqTHPG2qxxW642tNfNmtc2bJ6n6Wbn6peGTwPo5o2A8zCtux1G71ZRj7NatxEB7aa227jDo2BhAe6AJJiSnmyJs",
  "key24": "3KXUpffkVCf4R9szwbzKbTrAnsadMwpbafM2wSHqMoEmRdUDLvDfFYt8cA6qXfKpEg35jQP826Szw4HFjmtiXDnX"
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
