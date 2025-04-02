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
    "4yeeEE5SFFFXLS1bXY3HnQzgtVuzRcdBGzmCWPRjd8JegcTUeLh9crW1vfRBmVsZFEb1HEt71brhs1w4MxpCR4nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRQHerEy1362vnfFQgCYvZkmEiAT7WosefQLA2vikjU2bFcJfLwjvRnXcdWNL1MMgAaJ2JNAgocve5VBHzhta7S",
  "key1": "5YUWkg6NyrQXrMTEeroPw8TwEapAyBR3nzeXUbokbgzB2fF5EaTYUNYsmw1mYvJRd6MWsBDFreKD7ZFf4HTPDo2P",
  "key2": "5bJK348fQDm6chT6s9s7RHX3KqgNppqWWrs3EbhSLQPV2WBVt53Mwv5qJvDRy737G322xbFbUYeF2dTLui2Z5Tsy",
  "key3": "3Q8rUsCYtXdSAksybtexdt5DecZcWMqeiUfTpo1fzeT9gQrWmLwX5jHYEwNBrZoG8rLRqThwRSkvZuWKBjbJtGJn",
  "key4": "2VD8iStRreGKiK4sh4AQfr4qvcYWZFFBLsGpnFqyqGfbsXaukpfYa2gL5ZjqH1Gkt4wkJUqVMjqQ7B9DpbDWLKru",
  "key5": "4m5bmEFXU7Mo56FxvoPXYXkG1iYnC3WyJfgZB6o3NC7WahimUb6XfExY4B4MqgfXEnNVrKVW8RvtAGcHj4dcdnRJ",
  "key6": "4DGagsUZEKTNZPszzrkkf6W44NhMQ2RbKg9zyYcom1NKw74RGYAzap2jzbvdrP2cq3MeTR9aLYuAQnDCicq8PwTz",
  "key7": "39g3Ph8D1aX6tEFBg8obcxwK5WdhYrDwbN7eafP5EnMcEpgaejVMaht9w8M4GSqwZgLnRRHyVnfw5yGV88E6Qps6",
  "key8": "416Uznkoq7Ec3G2kN8TFSYwhzM6vUMBNyoQFqbB1MzfYkF4Nhmx8WMdJUq5iB2a6acpyQBgWsRjN6bnqMQj58unf",
  "key9": "DPvP7BSzoCd3kHqbU7Z6GRwvXUsog6xaZmAhnnVEQTX74EttwUkTNdKwCFq8SG2wxWskxSQ6FcSQ2F7F3oavNHV",
  "key10": "2biaemd4axtY5J8iAELckHu4fwh7dZMZLfXVypMnZxAsazhSH1UMvBTMs141L2ZHdpiDUd3z7BERaqC3GxWvCQe4",
  "key11": "2uzG6uGvUggWCra1vpEHM7xaWGATp9MXWizDAxjQ5x4fTrUiyFgbnYDoJVdJbPeuJck6ekQYgAVTa6LsLRLcV1pQ",
  "key12": "2UYG1KQK66KE8ixivmTWhXbr5Z8getXzFqzxvwk3kxJHL9mQUEg5vQga7LBgucYLU2K8qnS2VvsyWHzWDw6prrds",
  "key13": "VZH5mF5VjqZA5BTzRMQrcXZe2p9i3CBp9XjWLhRF2YwTqWnuqqKbbaUXkrcyiD6ivd1Xxf7C1Ds6ycSyfbFMzjW",
  "key14": "5xgMGJ9cHgYQ7YnNNG6zKwjptH6drb5geC3GM3D1eNj2ZbiYVTSja1gb2pGP5ugojBRGKBLLmUShYu3LQhZAeUJJ",
  "key15": "43pteeAJgWgTUu7X4dGPfu83G8jFSpJUSUdZjqRrTthVqPELJ7wk6SyxyF5aNiycH8tgom5BTHdZ83RC358KQmih",
  "key16": "9N3v5F6aMNhvQsP1vqZyDRiyPVVeG5CX4EVGYL7bVnhKcaw6YtFSxwgQ61ogYuesvAkgSuWB359okmC2vbFnkCM",
  "key17": "4bdpuLy5SzgNvwjm6FBQ9mLEmvCgCjwBFTpgYRRZzE37idZTRZK8e7jzPRwy89mBNGk1PapgV7Nfh2YiqTaXBjfV",
  "key18": "3x7zLiB92aUyXANUbkz1V9bt861uqdw8affEmstxgnnnNfQhFe7MuF6V4oY9snuRVDK2m8nTwCzkNayTteM3jfwc",
  "key19": "29736BE922MBh4X8pywiQ9RxYSndTLhQDMbotTxsUTtPRnzfivmgbqoWjLHHUfbQmkJtt1rnn1L7QoMwrmcC7png",
  "key20": "4nspvmUpa9Di7nLvkKDn3p3DWWsrVM6E1bxeQFFUgfG7RJYct1WTiLNDqTMDTWMjmFzzbsJbzUyCvEwAceFMavPq",
  "key21": "58v69hsKf3wRrnfRAWvVCV8HL8V6sparTyQ5eHgvzn4Mfx6kLq2gp5sipYLBFnbktMSJDjodvh2CCmupFnNKbAFy",
  "key22": "jaajfoweJYNr1HwvAPqCMKoGpo6YzDTQjsUsKhcGfGA4wUKfCSebFjKpDKgMSGb8akJDhvNwP5MBJuVu5bfLw9S",
  "key23": "2caYnWLBQykPXDxnDMFJMdNmMi19oVdjSvX4PVkt9J3YMicpM8GCUjBv1WDkxtvGeGjkf4Avum9rnFcpKUpuA5fW",
  "key24": "4T8voPPVyFYp2CGWWHDBLgDvbFPajzvEjqiypQxkWB7AepDEXhitKCTSkCRXd1J7WyFC3rhGKWvHdFWThzGoUWKG",
  "key25": "5Ye2XG9xiJyZYW9UG1qdAXQ2zFBsAA5nosB2uUBhvmC1iMZN9EqRGfmFwNPcxc5dJWDUS4bZVsnpxvfvTTJ5fQcc",
  "key26": "8ioKgynmyn3P3TSnzy2GXsS5xmhtpRPdT7rF8ByB5125Q2FwrDqbrGxhgNGDwGp3kJFxxvZFKc93ojRQvqkMwFy",
  "key27": "U6hxViBCjGyKpW4LtMNgQ3owrwGnRHbvNTyZyQd4eURiU2oQzUJ69EebdpJs456mk57wfKYAvgxrKi4ojZcJx9k",
  "key28": "3bFJ57DVauGWPSRHrKzXKLkkjTJcmjxy89xd6b3qJ5gdUVCYKQ4PcbX9AuJ8VbUJxoVLGPPYJXUPpKsHm3RkzVbv",
  "key29": "4ogHa9AfQyaZrxZDbXfb6H9hmwngNZWEit9BLMx24KrAdsCEF9BPHZ3kKEcKi4wWcv72CsUL5HztFKsesbQ8L354",
  "key30": "4VEgkny42gMMcfXPUr3uUVZ2CDJ46qPp5q9hy2jWLSzvRTYJ5JcEccgq6Pa4svwZMy7E3MygAYXW3JMfH6Docgdn",
  "key31": "3SrSboGDLTsJrfGPhuqAgzrUB3cYi5Rc1qWBomF5AZwJYvD3jQEqrE8fvEVtARjK87zHLpmSiaNFL3ro8U1Ryz4n",
  "key32": "vWiyMtwjjpHUTVVkZDpxYiJUwqPPABnevDVT8LpdDHqTzgB7HX6Lib4zmGxYNu6y8GTvHnCTf4A7tkCimWcUkr2"
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
