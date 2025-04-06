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
    "2Lp9thXeitJ3QWS67gfhvkCVR7p9q3gJLdgGT8MPKGmv7iKNQ3RRuk9pZTEJwbjGqEZbLGmzcYTPrbb54uggYxE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wk9KQq2kRXVHPBHjWmY5PsQxSfEVr4C9PHcZkmqFB9B6wjsjfW94TEJou3Y2weRHTFpEyhJNL7YobiGUVLp3A9A",
  "key1": "4TH6hbKhokzQ149rDo4DQKH96FUecgJsJJYM9c4uKvEMS2vpBKB8BKAW4yLPNz5YdieruJZHC41h4SRBXQHuXhU5",
  "key2": "5vKc94buLMjhwdaSmJMs3spTf2X9BwZx9XuMjhavdNvmqKGHFrxoWAg8u7rwnuxyQ3LQeiCcNtxFkUYffgRXpcQi",
  "key3": "3NcP81R5cPthSiTBcqPPHamunYiRCgMwVhg3CFfUrXzmcA925QwAS7QjNW7fiedq7fXEFrhGaAr57iFLMDrBHsJf",
  "key4": "5Zb1crpr3z3xyeVMMuU1F7FnMM5Mnjsq7qXQghp5AsQhxt8AqXMBFvwL2dEkhD8BtZwDpebMv79Kbjb11nKFQkKA",
  "key5": "4nKgsZ2V4DSAezD78tDkvkWoCSc9Nk1cwUi26TEp46r4hfH77BhM1oL5km6i8S42hDEnMr3iqhbDRRJHDknGoXbF",
  "key6": "2tAFJLw4Ah5zP2LLAS9rpfSq2D1M4HDKpJu3f4nAG44ZX9t5MiERhmuoyMCHJVDzK5Pp2vqpWPoemf9WfhM6mBFK",
  "key7": "4m8r8ADrn91WCX682d19X37veQN4vAFcARB3mGiQgt4XBSAEdTD26qtqmv4mmWme4wqfKb1L86AMBeZRTvhrz1RG",
  "key8": "2hrivwCHsK8aVxPmFufwzKTUbJyjBH4c7yvhJ4FXWqhFbdY4hoDggbZoUY4gXBSSQmiWJP3FTyG1Za5QpGdx8EwX",
  "key9": "3dp812dHWatKtMJoi6UQJKBXrDQFybnj5i2k8MVT9uT4bU3HyKvC5LmTA1DgVf83ib9nEhZ8v2pDN9s9J2hPqjC1",
  "key10": "5wKhvqC7yzo6VbciXC7qRKM2sSz3ztX65ZbwbRrYw6d4JgnBnz6ACAJ5L9984PSbRWva5HfujfA7rWuxuLEtGjn7",
  "key11": "5ntE8owts6pyKirWFMUdyDPuWsXyhTobchm87TG2tNMrKPxHxm4hRYaeBYvUbZsuFkpLWmAki3Q7fpFCGqQzTB9q",
  "key12": "5i6zWXhAqdKUpNze5BQMgsNvchy6RZNHtPRHeycHG3ChE9nn4dkGrdDuyZ9uVfdrUwE4tC4W7r7Z9dzcGyfU2P7R",
  "key13": "4Wv4Rnz4xBBa2vLABzYZSaKDgnYcgEVbiEsd2YYp9G81tPwgMP2zxHqYeMgX3HKgqoXnrMhw2nrsu83DPf8vY5Ln",
  "key14": "rFExUYPPBiMZxvBnEcDKuxYhs18L7mncsHuwCHhr55dZk7xCbGsx5Ksix4BLLwwHJPAemqxLVL9fw9nAxKXovTb",
  "key15": "4njZPwGTTT5WokQPF9crMqk9Qfh4yKv1FQkv13sJMjHNhjrGu61PjtM9JGYB81j6N9atJQoKfkrqAGw4GyxrFR5C",
  "key16": "5mM8PkWV6NEtV8NQnrFx6K9S1hQe7wXK1joMqd1n6GpavavsKaTXnXDnmQNojxi3qKbG9jNLVygdWmLAJfnvRhco",
  "key17": "2QhNJNzH2ViWDKGxLhiR9tgqDj68MSj9j8kfzxgm85Q3zPBrFcyt4TXGZSBmJKpU6Tw5KGP2geKpw8x7H8BS5gVf",
  "key18": "53nEfJLRjcYRUGU3APGUoUtMifLu191B1uHUT6Ddxnq4FUjNaKQfvGEqVtwQTGdpA1GboRrCVDaoLw1Y2KYQ6SFR",
  "key19": "3igredphU7ySwvCXEQXYK89Wnxrccraj7JrXEwXugbgw3AXT3VPuy1RtWgCEWtCYBZs5UGesaCMjsmmDsE5ttHna",
  "key20": "3bHRH9eBduUErXUhoWvZMapi9TDtYVGAH5kPnvFq3iAwvVyWhq9TuNN6rN5wwpBUuaWteb3BXEFubgfXcR8c9iy",
  "key21": "5QdQ3guui9HJRo8sBcvCKefSSFsswEYrTVtycWpxgjr5aMoYjJrJXLXHZnSRdmiv5kuiEB5yZzimQL5ZnKyESmYX",
  "key22": "JZZHbBay4Mr6SP3YnQTbhM95Yvf3aahXg82YNJrLzorYAEMsWgv3dFGMU2e66j2FZF4ZN7RX3P1yKEfFn6FDo8E",
  "key23": "3yw9WJ5ZuBeALTGac3aKpEiFmWrreeB93rzVLn9BNAhPJzjkfjpvqMsPW4JGgcYZMxiqRMHoSCwovbN7256kX4z9",
  "key24": "3RG8zA7xzD3TcdmtCQyZZ4VD7cyjqqFrhJobdsJNHwvKDqQxkDkRzxf91U88zPUfcXs9AJuqNrW6LTABkDWge2Ct",
  "key25": "2xhpQbtEgdcj9bSiWUdPtpmogmQHpMbmMqxKYpsZtMVY8CRuqTXWSvVrrHFMAF2MejdaJxXU3r4wgghZuWeRJnn6"
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
