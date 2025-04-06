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
    "4bLZtPKATEGbpWGo6tiEtUCDBnJcWDJNG9kxtacvsueXiX2JL2mR5DQ7TNVqz9D3NQMrtC8fSB8p3XBcMjJdxzXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gnf5wYPcZUDP3mHzBKKccz7BHMNGkopYjDmH38UGEWH7kfvbcheSC9CC7XKeXGZZqe3C4p2tF4PUNmL4mMVsdqU",
  "key1": "3wtSm4BsetLMkhVoCnqJZrfAKiWVXCNPWLt7NpEMaVn75raYY5Hub7zuA5x5Wv6dC9HEK8WFr7Axqnxp2xCUNAKm",
  "key2": "28r3HmWW6bVSPXV7Gvnd2ytiDfLbjC5ocwugdfQJAJ4unHsf3Ha5g779R9HH2q1rVC3FryXv8sWfXeDhz35CEB4C",
  "key3": "pKL1CGNzYU6W6cEULmGf5DrJiPH2dGeCgwvUUFckZQJaZtM66zWPEGPBkQZyAMrTyK24XqR817qbtDbgMneXBFh",
  "key4": "5zrYWe3yDzyfYgxBRt9AYRvFHQTm6fDh9FPCfhP1WEEmaPSCgz9uqDG57AJEk8zJxxp6AEAW4ooiijZ6H8pBti4L",
  "key5": "2337YrUTPjrKmqaQwkH45EjQMmzQVD8kNnz8L1gMaz8xscUNrMabogd9VnUmXD8Fui8qpeudUxoJcgRbriCnzezK",
  "key6": "2hkByf6CfjwiBVeeD2P28oveVd379jnFsXHamADuvRHSUBg4ktVBbxaWdiVbrKc8refQAi8FTzLpmAUEC13eaxiG",
  "key7": "2Qc8HDPV6wQrEvwKPYgZmPn9RQW78ENfWfDqHo6g1TJkgo9Y7iETihGw8LeVmqkcef6gZQ3xRTt7uiwWTBh441J3",
  "key8": "5ogo8SZbZJ7LTwcnBesawJPsJTFUChfcdVM9ans1cSPXg6wUvDYd9VjDcVZxZyRWYsSm2Xx5qAARLF3jL6EatzNJ",
  "key9": "5QgboNdL8Yrc6RRgJwVDKt3qMSbnmfo8aGGXT8ZXexVrh3xrqjmddBwabzdaJndW5VfzKPqTaA8Y7jNKxciwpijf",
  "key10": "2zcAuv8Td3NycR47s7s83XMm3Fk8irD7KJM4nc7fZDUoKB6HhTD9jhj4Bo7xGjxoZJApmA3wmQp1gxz9hSTpzj2M",
  "key11": "22UpkHh18taL9nHn3xLdfMgdi7n4VhKkqUctYx56RkVnnWEiL7qCMTajiQvGw9ggeNVSCvqYsvhUKEkMbQeVptpg",
  "key12": "5XFWThB5sMkmPkuV3xF91r3o91tQiGALF5GohMLrqRfoKFUj9kNsnyZ867NhwpTR8trD3TSgCpym1hgWotFwZt3E",
  "key13": "49W5fQCVnL4smPTvDGvnPZ1uG35HhgZtJQZkpbR9E3kk7hQfrHK5YCjbeZpKWy9c5bN6oPAades9ygP1JHnzbDha",
  "key14": "2pu4t7vt9PmFxFZHU9QCrVTDqDxmcWQ3m5zyL9phWXSjmbc5ewYgGz9j8NE3yiGfLvShpbW5eX8yjs7jToYf5A96",
  "key15": "2oyK2aZMGPhL6BsknoCbAyxhDTTvNzKVXijH3fKv9sfFzuUuVpHQky3JSD244YGTDDk2r1dkEmg8az811Si4otut",
  "key16": "4pzA2v9mqF4QAydHvakMP1uhMLWQXPAoqMkHLyAEzgki4uy6ZjgH7jHDhMbbnQCi9ZmSf9oijo2A3jXVAPezsje5",
  "key17": "7C2A8tux5PWCzVfeW5ngLER4MHpUn8TkuA6hgHQtpw5C5UrkASjP3ow5ez86FaG3e9yFRxazov32AwVBfVaKz9T",
  "key18": "3bRPLBukpdKqV4hDRVMLjgwQDXjkJJ8YojHL4MdETBAkuRyWXvGQBqwuiXmiCYibh5GToNcqvvAkZfJ4PaVdYYqZ",
  "key19": "7fFzkhEFj9brtpPZ6N5aqcqLMvhCd6NJurVHRg8VCuqPAAMVhuMtqJsBoWLGgRt5e1cHYwgHEsDBowHKzDqxYuK",
  "key20": "4isB8tRYcUMFN8N8aTcx21oF6iuJDw4v7S8S5TNWWoj3MyRpu2gmjpHxPSNd99bkyP8YpNdgh1om6JbC98CViSfe",
  "key21": "54X6qrrX6e6CCPoQSksZgeMG87vxRjBM6ngDHWMDvYdLtYwiWPEWufua41Cj28mprNN7ArHkKrGf85NVdgQp27uT",
  "key22": "47uHh26wtdHtUqDA9cxwkQEMqQabw6Rrfrrz2KX1gebEeoDtzUyfeqMvPJuGcdw8XEhxgR7rGT4ubisMisumXeaQ",
  "key23": "5BziizmsPG5GJ4tHh4MBoCa1L2qe6CqWnr1im4v9v5UYMmkPdaFy46fVJWAra8sxSgueMdfg8ojv9VpRdrcqKPdn",
  "key24": "425kjTSKiEMJKttWYQxYjn7kj7yUzeU4ejimnAyCFR6bupZta9rQJedXMC1eAffd5iCC9RngGZ3qZnJY7m8ZaizH",
  "key25": "5u7tHeEB6UgBmvVqabxVLygPqxuHxFAsDaZU5LKx1v6obfxSFzMQrymCNnSEA1GngeYhppiKFHxzitRM5Q4KYV4Z",
  "key26": "4fLJLKxLMGR3EN9Fg5Lr6BYFLBYDtsJPVFHLDRPHffmyx7ErgBuAJQ5c933RTBvUnMSwx1Se9jEbvp3pcornyVpP",
  "key27": "5WyityGVCt3AqmeTJMV68tGqgfkxvAyDzYmhVKqWA5H7atjPmy52Uu2kFmoiJK5swJpWTwQaiLSoquJ92iYEbwTM",
  "key28": "5iMumw9MgxCfFXKXiHt81c6YQFBzFTZqXtgYdvsPG8pTPkkYrscBi3qNBvwdnJmvDEvRaGfMnBomH51bpTvkiExf",
  "key29": "v1yRqB3dWeDSBhjEZkZDFAu111szS5Y3Sq95eS9iK52ATEPjTytKsKVYREbHnR59Jk4kkN95hC7dk5Zf8uwAEQh",
  "key30": "W1vmQqAciqrb7XFMT1AycCgqkQTLJziyYMB77dPqdHsFVxTgCq7CPugQY8zCebyGjrscHe1G2RHuhbrVbEm5oay",
  "key31": "uUgTQt15U4HWZiHL8wLHfadggEnP5iqQmm4dmz7jinXNkyLAzEuDXy4MpVa7cms1Jj7NRUctiRzTtFBrXoQtR7j",
  "key32": "5tVmXXa5ekEM8CrGdAYgCR2VeWkrna4MPR23kowUaYBZoErTm5DuZmEJxoD5urLMnPLtcCyzTaSFqnbb7oWMsR84",
  "key33": "4VLCU4efNs9jaacgfURQZnYhB8iiMg7GUzmL6AHptQmUvGLxJqR2SC9xRFg1DL7ZJvAxUzdqEPoE6YhDuUiNaoHd",
  "key34": "2gbMxiWxbbRdWkft9Aicy8KosZo34Dp83u8rTU2gwHcd8odgk9tKsALQ8wBqqMu6GSeTxn6QpJR4ZGse3BrjC67P",
  "key35": "B8AzvrrZuUssKsAxQZU4ftQV6pUAjDe9KgVdhCCneb2zbgMXo5AjpgRqfoDRuKdKVHQ9qKMdTVXgitUKWTUY8r2",
  "key36": "5fdXoNfFvpw1xoc1j3Yi2QJiTfYkVdBcjJ9YxW4fDc9QMGc4jV9WiMnCL2CLosAYjhJbPZrMjK34jTNpPoebczFw",
  "key37": "66v5MaHY6yqQZJKXsaD3ho3PxkEcNYk3k3MXGo4VWyF9VMESLbf7y5536j7Aw8QsNvmqwz1kywMq8fC3EpFxv9jH",
  "key38": "g18BnEixcCXwhjYS1bNxx2bFp9hk2MdqPVsgTWcCogD77TctfgxuF1pci23zjBbQxN1YmgLEgaqoMRXZDUj4DSf"
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
