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
    "5hz23DbNqTLaFoFNBzSguGi73uVfZp5SahhbD6R7Dw98b1iGPdYjRqo5ZESHqULwH6wKmSCJR7YHuqs47EV8WW2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DyQzMwwbnNH2Usmn9dyofpS6anEAMYNPHiKHG4cNqrQ6Thg6w5PxYdrAAP2aqqnHKQxL96MPZ6AnA9XVY4BPEg",
  "key1": "3pyGzWu6AuHhtJEhGrkY4uuBUprS22KTLLoRdcJ9RZDKoCBfjuL6Q48QCN4vsNsgrUjBaN8xUhjspb9wesWYMXvQ",
  "key2": "nqBJMrHLmU3DggGhwqziLpkpHgP2QqXTyJP6vj7DsECWyJz2zzbh9fyWeETeqvQbyukSfWXQND4GV69Wz18N8FK",
  "key3": "kJztXb7U13jTXEK2C4fvz9YosWE8JhdhbKNdsV8UAoJmBDDDz1KEJPy7wvtwHennR2recPSNNF5T3No9G7CPyAg",
  "key4": "5JuMPppYKtHCiC99icYhboFjvNUBUrEKCsViknqFrZa4Ghcr3d4i7dDkG9qBE8Ebcu7scMB1UMN326sDvLJ8uUSJ",
  "key5": "3swgjy5pUFSC6iQn96w3RA6GFX9dEAaYtg8bSRhf775q7gZkLkZBmr5gTjvX7HsWS92mteVyi1mWnKRi97ZBzeAJ",
  "key6": "5AdCRwb3EDFZ3vBZ4ymnqBjTD3KMo9UMNmVx6NugyZxGc5hKyGYJgiWQncaaqUUDHmczdneuifnk7VBeoXzPixvt",
  "key7": "3DQCWGdHM1XfU579NRVRnU4z4dmig6tdvAJvHzSnu2XsY6dFiesKGAZRQJspLMfcmnFzSp9XwsFMsMaHfeiXj5kp",
  "key8": "qpjyQ4skrtVdWt2kMMFt9dA7smESEupBoiQeDcgyKifhcbD1Nufw36rmQMDNYtwbYviLsWQip2gHAeuAWzi9Yee",
  "key9": "4V4fCtWf877AR5Y92GTUszSPo8KrAsX9KrbgFrTk447WPns82jwbVGkWCifyVRA2di3cQguMJ1sxSmBmT9beieYX",
  "key10": "2aZNMy8rRdP9uRUKcqJwKhKmgRwLdjYnftx2DQdPirjV5WXhtp88EZPQgjo3dyqnmo4HLGrdiCTqCngko1E68mEP",
  "key11": "44peFKxjZ18LLsAv2Xu7L9o2LEfaJ4GXMdvuU89srQpbFMcy4dLbDNWFewnXA7k4USG8oEugFV6MvPW3RpbHY6d1",
  "key12": "4nVi2c1vBKh8JmVepTkeeyFigq6tHNG8rNjnZnorimrmBZr1bUW6TTFXn9bKn43zHfu3SGNicn7aJeuSvR78jyNF",
  "key13": "jhtRRTMJTGJw5yhcj9oWhjxnB5YjxeBejiNbH5nbcmDGAVZGk9SwJxrTksSJJt4mJw7ARE2XsDkc5kD9Bq28pnH",
  "key14": "56sH66T7ajuRLdgwU6zeXrrQwhS6E2vHqsFHWQFiBNgnsvhKvXhgAgYWMWoRUcLKghmGrw5qUVa16hw3cwTXkoqo",
  "key15": "4oCs3mo96qrNGsU83qf9wUKo8preM8wk8CJhCeWkPUacBCzsDff7U7AuTaqWzqe2tFA4sDWUyZgnSkwnfp2m6Ggv",
  "key16": "2Ur7ERTs3cVRVngZCPr3jXpwLAYBmdf8HQHsSMpotEcrxt66GNJjea7WvRvWARY4CmfLjNZXEFJq1S1iYMEt9VA9",
  "key17": "3aU3W8j8GmwRTx2sxfy5ynMA4Jaskb42EvS5L96ft8qjD7GCC3sNPVsoSG8sWgGSL7aJLscQ5h8C8FzeZL4UdE9t",
  "key18": "2Tv5rzv91CZ9uEGv58wr5vYfs2yBTMZukZcCtu8Pb5cqFiqTWjBFc58hmX1dKAKhxQRp2hGVPcdYw1fF4WrZwLf7",
  "key19": "3MQ5Mgy5nPhSJQnyaw4AnDmCVnQm4XYSKwm68VSCvDzr5TbixQ226cWGqnLJA973y7KRepQik5FmdiagBpXZNYau",
  "key20": "2VUsWWnWBqPV4PTnRo42gXhe2GZuSkUwxKrH7ErB5nXJKexDEPPgog2jLMc88uQBrxAtLKRk6yqS63EfW98CR9GK",
  "key21": "m2VrfDNZcAPES8W91NYTzXYEgc1BF1XZHtedbbaYz8vwiipx8UBDmGcNmPMJfN99TFThcZuD7tT96S6o6j1ytXE",
  "key22": "442DU6hwdxyV8QpQF4itbyx8DZrCdVPUAAk6h5qg2tLb4VnjrGS155LMNe4y1Qabki4kLhhitZapK6gAPdxkZdUT",
  "key23": "3c3PU1erpuQ9mpNkZ8hckwDzVRHgMGg9NegBdJ7yP88upq2cLTEoJcY1r3vvSVqgijP72S5BZEFFubbVjv5ZJL11",
  "key24": "2g31959w9F2yK2hMzXQ1GWGtwacLLFagECLQi8rn37R6Mdb3DsYXWnSYHLneC4R7ZD5TePDsbWnYiA8dq1ucR5Y7",
  "key25": "5wffNYcWsNJV2e8iKwYRfxdDZJENkK4Y61JNgVMX4Kc8sKYPjCWXEWNSeud4GHXUGdDwjwcmtdueZyWhJXL6jPsC",
  "key26": "2CAYkPtX71MQ3M1ZZtoV8uXo9XVjVaeciLb97eGmzqNryN8fBGnrQPy1SnGvvUxGoDcgEcD1UrKXE5fKBip1zodj",
  "key27": "3WefNp7UmB4rdoWxaDVZgPiJ7P3vePUeGJH8TNKJ5wxCathy2HgXY63sn24b292KCJuqdVndFwppkw8Jo5BMFX37",
  "key28": "j2Jj8UvRPpHHqRYFy92vgjwCMZUvHmWqYmwj5BNkJrumHabsdLA9s3jBEHzQoLu1TmogHmmVBXhFnMrMvRgMtRq"
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
