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
    "8TcHtDB1SUpadyS15CG28vxvPcyQDBXUTAHo6uD1cEuZWqK2EphHKMTsuwfCWeNaRN7X9iCZVjw81efAfN2mkP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVkp5Rd7DfmYKPr3ZA7ETkSyxTMYn1BcLuR6s4AmzitiFTx4WeZP26eBPeUX8ET24BCecDMi8C5EEaAAcT6TAFT",
  "key1": "5xoRSa8nGu3fk4zFmj6tCsxYXfeE7n3p1dyQddt7izmtQPCsR1vHAXJxwK1aYT9E5UqMMXhbxig3H5PgiXVks81r",
  "key2": "4S88r7X2K7mUwAkJhvzE6WAENHpUwq7FTeivcGcwkErsACKyFFZdXnegqQTwCQrPVTioyZnaNCj6QqLAEDQjR3Pf",
  "key3": "3GhwF1xtUVinHSM8zBwvxriNiuiAUzYx5cQk9v5heyLoBdbF3nhsZVNbdLA1dYVR9P52wsxSjkRQSVLUMTW1Nj8Z",
  "key4": "5bLqG7VvjkNcC7zB4mLutXWpf6xAD78Z9jKcsUq8cFV6UeFAxk7xwcwhnG54taW3L1qgU5zrR8q9PZjfcBk1YTWL",
  "key5": "32qXvzuiwJVtE9pY8pWic8GgS1DLZokUha6re4roRcKE9hTidJkdr8JenEMJmFdb7ZmYneo1LRF4D2chQ3LNhof3",
  "key6": "2rxXkSsfCw2rmc7AmbBacbgZ6aQ6Y4iHjsUfQoD6ypFrTgTZzzgXrTK8TdbWyWyTK7LzDjceXuhXY5rsnubcgyh4",
  "key7": "4N9oK1jp5sXQJ4bdYko8rJMSjTmeuRpHZJ92QnossepHk5EpvWS7SmiPVNP13aePCnCnU1RmgKPrTwz41aEL4VPj",
  "key8": "2dwbxkBo2gBd4asQZ3u4GtVaFpdMZFZiqR87RUS7vn4u1XNtfEqxHSmsRVPp947kihzE6HY8v7D91CoUStzu2JE2",
  "key9": "XU642ShBJ7JvSNMczi7ByFXYo9AxJ99W9PWV3qXkwJ2o3HyyYG65gkYE4dYzjzjfnN1EtHGdzpKBq2xiimw6VGC",
  "key10": "2zenRJoHu6Q8mjMuZArCtYiKqeoXbzN11qzZLAJAaiXHsZXe3MTS1ZdCZki7QQL9CXY1t3eZEiYU5EJZUVNAMQBh",
  "key11": "3cpMfR3QKNDF4oKWvrh4maDVVPNzarmYyDhRMHzdDZBbLxs9aYMNeZQSySS5wbLWNTczRsP28k3Czkhko2RcfaCw",
  "key12": "WVgJDJHgxkdqbGdBFDvX9MRTeNqMhqsxvUNUDjJ7zNfCtAMdYtK2c9Xy4ueto5fzeUbXBMLzmjz5gbFd3moDZuV",
  "key13": "3rzQ8vK75QfqUfVN1FQ4pVia6QSyodoKpS8e4jMLWxfKeaXR7Vtm3EuWzGHKPKgQSCAbeuYfqDzpedp41ti1VZCH",
  "key14": "3hmUJa92K6v6hS55JD99KTD2m7xfDD9afVBpJtSz6VSCbUNXfZeMhMNUnQLcR8AQJ93TadY1ymGKk4oBhLecpy72",
  "key15": "2PCKDcmWPqkKhjfJgAquxaRgvMDUvyDdwJQtCs5QWCmZxQF8yFs4eTQJKRVhnmwVpmQuJ7Yb5yP8MVsMALp2bCLT",
  "key16": "23wyEx4cmmmSSdJbgWMoRyENMuQS9DWwN1jb4s8WAKH1aK4bBioxfjmGvwnGwSZu6SiFtZmwyTpp5vmFyf5JQowY",
  "key17": "2yLQbmGXtfxwyMnpZToQAwF8nxuTXTnzRKmyTcWvkhqDgDWK4K1bEtceTjZCJirWqDrnNnCUfJsaGF2eF82bHeaP",
  "key18": "4hYvK3R2vdRU7nn8hQqewdqA5Ska4dmXdjH3GK2f4ABCNfz3TnznCbX7gneA31sXwMLHgjVoPK1goTEAZAKF9XUR",
  "key19": "5UL9kbfhZByq67VMMcALq9Sp82nAkyqTgRb8q5Wx7Eoz4JFFyzjHyvngtJmR2yGD67HgKYtee4e9oNgaxuv7YRko",
  "key20": "JLYJxVmZP3ZgV6udTTAyrsgGs1Myc9eUXC73x6Y1S5wpqtWKfinWnyu8FeRaBeB5VTTXFTwyeZZfWWNzh9jB8EP",
  "key21": "tjgJXv5EaX4JbaRpDF6pn6x9LyC7YuhXV1qSXmFPxKUAhwoZ3ymwyhotQZgYjt638wy69sa9uYD8t5feSezSeYE",
  "key22": "5aTzy9i88W6TNb6eUip8hLQ6hZ9TAdvxGMfANcq36YSNcUcCQJvEH1DgwpHJ5kXjGLhqkpZdAMoRJRdxymhEZgYY",
  "key23": "5Yakc9NGVu8hGJEQRcW2oqADjcFM3EcdpVqfKYEoAmsLKSrLMQywkY2zXD6DX1bwoD7r9oUNwrj8nRZTe5c1jgZ9",
  "key24": "4AAEk1Kcr3ecR4meUodjzWGarh9DdcRTK1D8vevc9wUTf41qbeiQPW7EpgLTG8uMdTUDJM7J39ifzu45auZyJzGx",
  "key25": "2o1HJ4poEFZDQpKgtX3Lf6Tti1qLCyCNHirBR8UGdTeRnf5Uz1S69zzHiH4Uwvyg2RJwDAdJipTomqAPte6Afpm9",
  "key26": "2bhrMSuLNidte39vex8qRrT9edpcHpUvcQ6s7rL9omrJcz8XnkNobc3XDmv1vG9VoKqXzycSRxCFiiXN3zywZuK9",
  "key27": "2f4o7YPAoK4aWhEvofmz2gqSddLVgLST26NxFK1vc2g5UrGq8spp98mP4DCKSaBvYfUJHLqnjLK3ZjHDP7enfPZn",
  "key28": "3KdDx5T6AGQDp7YtoRxJHLVBmTp6hEqLNBq8nXCMPJ858HQHFhqEYnZYjZyC7EbFnDCny2WrBr8tDytCJf1RnFFX",
  "key29": "5kfsvfY9pe41WDiR286Xd55qduLSGyfHseLF98k1fGMtJCoTHcP5LJooiDc7PJ9kd9mKb3su8RVBiDFPp1DKpNjy",
  "key30": "474Pa6hArKc8c71xdHscLQuBT96zR6DeVR4M45JGdYQzmbExWkc2ZPQYbChT3KvgFtRUb6sjkd2qde9AHLxE1qcQ",
  "key31": "9kQUVGFsdXpHZkw848bG4sT5mcm5BELpyGbSfdugLCgjNmQtrmbYW1AL1XLTVz5rwBKxxqXBmiSqTkAQzr9mgfs"
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
