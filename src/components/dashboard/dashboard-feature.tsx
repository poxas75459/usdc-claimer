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
    "PjUSb4V2pWsgoM5kpaYqxnzWx5K1jtWkJfsBZkXe6HB1uYXnKJ12LBVYaQJ1MQ1xCHcD1oUBEVZNv9X7cs4ceWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Njkr58f6z3bLC7VXBdUi45rwTawgfP9LuVZxwm6Vsd3VeRo7Trzxh5BpELBVZyFrXVefkbdSieHNeNzjesWtDNz",
  "key1": "3ir13eXnEtX9XBijNwVb7zAwEkt4bKGfKYNr8Dms9Cn2d2qSyYFLNd4StFMTobKSC19tYH7VuUVZHNcU2jb7dCCA",
  "key2": "4tAwuwEApND6sWc6seKJRJuaFFQaY5H3uQE3AJhr87ywoSyq75Qk5WjCZSTUgWQUNjun7GkxKsPpPdbTuz17pvEa",
  "key3": "Aq7RxNoUrFUuRKJ4FdFeMEwBDk6qkqyzyKGPvxZhP1J7GDT9Sg3gKuFJFsN2pFKkkboGjFZM6doZDHkZq44ywGb",
  "key4": "5MnLz2bAY5SvLWrSXx5KeFXMWDvT4BELquzoM6s8coit5Z8RiUv7T2m4h154MCVdqCpoZbEQTuD13rdfnuQvDAQc",
  "key5": "2Zeew8nsn7VspjdixwoCyFR6ExjPPSCZYmYazpoFesu7jK6zrEAYLxKTG4SU3eZSwUbzQDttmhoSTrLzsgAq7opF",
  "key6": "2ZRVSeRf3wLs7go9cfSYvytoBY5itJAbS9SEK1kP4b47NsmaWAJKLbmfUpXUATcbon3VsTtEY5SyvhZzpkYmKxbR",
  "key7": "2qntTvP7r7QK4UbTDzL2c8DL5TtKtEZHRSkpyV493eyBTmLKuWH8rfT7VYHgXXQqNhbLJ85MjE6HNCWggoBwN6km",
  "key8": "hRxoPCXWGAKn7TqvoR5d813czN4G59wCaHeHSwA8TA4CexLqbFafAzEewUEWqwTym6x6P452nFuYxZhAAgPyEhC",
  "key9": "3yoii3HeCwqVBpNEVjJSWVjMJYR5jo8wUxfwtpyF6pFz883bHtbWW2nfWps749qxSLRLjXPczCaLRrFvbia3Q1bA",
  "key10": "3nCQ2v4RgcBixYgRjAA6PdBVU7ZVzKfo3v38PVcpdTCq7kJpynAnvzTage6QxNrANqMxLVXnwDnKWHLBqxaajRgB",
  "key11": "2XmU9A4RRKvrx3Gw1Y9zwTBE4NXpTSi24Bgkrbr5jdKmK9L6SyLqfQTPLi1AZi2mf5mts1xRF7z3LH7FvXA2P4rZ",
  "key12": "47Nr5uXH7QGrZxqJd6oW1WUgyrjc21Esszk854wmWsPx1xg5JP4xXWbfKGJKeaKGqWUSNEu5ouFKybA4tSpN2w3E",
  "key13": "2hxCY9qeWfTpP4LzP2rjhgnwpLDHtJdksMMWSbeXGzxPLU1Wcf7hmNsDQ4NoaXpti6SsMfAqxPDV8gR28tdYXdeE",
  "key14": "4y5cxo8CCd6HPMrVt5VdxsFaAGmRpKXE4qrpFSDG6jJAVz2UdEeNrn7joN7sybnqA7WDFZomEQyqiLNjoTSAzv4L",
  "key15": "4swh5wG9qLAKVNmQjaS83r6AX2DXYAvyvW1wnDhNNE74Knc6Dro66XgMuUxh9Ta9GCMoQr4WWT9ysv8GNfjwU7ZC",
  "key16": "5Lj34a4AbJHPViaJM4o4LAE26UkHkbD6ERvTViuysSQR5EPStrNU2YaZKU61RNRMLUnYBXcv4gPr2VER2vtaDzEy",
  "key17": "5tn3hhZsgLCQkpcB6baPmbyM3qxjxtGUFLXYe143wsZ8dNKe2jwRfrzCptekUgyvbzygZ6ANGAdE8xSiB8qeKFgb",
  "key18": "5t9cJC37zM1vjf9bBAUC8x7NmLGfNMMAcArVAyX6X6BJmgLSLMPAGs4ZgF1noeiaQfWE1BtvjgKdj7Xk28yEfUXk",
  "key19": "25rh683xq1HT5F2HbxWGoFQUGjdNwhHfN4m4CkoLmtKuRHKYR63E8zTDGwumqndPWgGj9ySSEwkUr5zktE816h41",
  "key20": "33KQmi8yVssH9p9wpKT3K5rnu3p6wYz5dCnwjwJvSMzu7jDiPCzGJoYyfKFV1LzmKUTGjuB9ygy7ucppREUjjgPY",
  "key21": "ynKgKTu3bRzQHY96GH473crFM4cJz6aTZnrBzuAwWsK6p3eFhx5QkxubsNQNhB6gkwM3UK7wDv5QtS8iM1Fhg1M",
  "key22": "5khv6uty5QZ6WUjTeT2svrXS13c3E91rR3FfEd4BE5fHCSJn1agsQEUYF2SiKoeiiDnfnup3qx2AUfGZqPBCyYkp",
  "key23": "zxeGWEMZtpVa4VGm1ANouL6ZS11VpJeojEhZB7qHNFAa4kYCWXRRjTDgV3ih9WHgQ9rFxMqDHndWLYJSsD9PZRw",
  "key24": "2G6g4WuSsY62Wza4sHut1KAR8BzkGxtgZUiF6rrCYMb3hNP6osdNRrtcib2wZVvySijVmRP9XS4ChvcWcLpRZvTr",
  "key25": "2qXt1m6pXEjJRmDzuuiyYdzS71c3xhYxevCozYUtvEmyZk1FZL6Kyx9rdbzC1AM58ZxATH2GQS9PWuKWLjHiYKKb",
  "key26": "zDM46X3G21KAtDyXTkeiqsJbdHrZb6WuSKFvtGBcYpjEkU2T9Mgp1MUTmupzTBc5jKxxxC83hZuh3asQmigqMjB",
  "key27": "5Ypub64EMsZRVi13JbKLcs9S3r81Y3VQdthvMgjHHbpbQHLFGX3G8ysAjjSfWDK6kz1pMpWVrEEHxzg1nsff3FUV",
  "key28": "3C3GPZPYgDJ8pYUCrZTaWPZ81DsyENSBfHxxMNevKeSa8NmKDt3Bk2RsUyXYQzqLu4NzjZkyakfqcwD5zKZR6frr",
  "key29": "duUXouFKLw1U8womu77Fr2c959zcQWHfMKUA582NQEQiGkb7J4HMLWNaAWjkGSejss9QNnnrEBQW7PvWrYJ3dks"
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
