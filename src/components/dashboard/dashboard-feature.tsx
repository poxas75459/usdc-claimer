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
    "hpNDryPs7ibYnVR2bwzh2isWMoSFQo4dsUo8ULZQpR5USCFocKfvrQD3vegwTRRxqr3PztV1s53XyygQTSwnchw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KosdMkp7nFLaqfoGjKcqA7NdP2NBT9SWgJ6f9x8A9bAJPE6TKKaSJouaaxpiRpB56P3fpKrHtC9XAcvwLTjn4Z6",
  "key1": "3NbMzH8RFQJByH6PYeWqDh7YrbxLnCviQ7H2GK3azaxHJMWE34RQJ6spmaPYdRseVRZj67oyyFwtvXJ9Zbr4W1QA",
  "key2": "3kesTxUeGMvHa49vmFdmETuUtH4QPw3tVM8mTDnP4pqN5pqVMXFNMcikaDQFedj3xXJM1boj7a6qsaJe76134gKU",
  "key3": "jct8NHnvgqyTj5Rq6Fts3RdRNV4Jkp3kJApt4osMJzqo7rKPowML1LtqpAz9BF1fyBMRWtuZzppRezHetAsckdJ",
  "key4": "4HqWpHcAd4XCcbpxCWnuEuwNDseKoKc4NunfdXvtuS8wpY62iHRWdjQDrxhrF9RuYoC8wxwpPxwCyThA3gYg8NbV",
  "key5": "4k3gveguuQ7oNJSSn1AyaJe3z3MX3MZ9HK14rUr7DmySkKGZ6BCpGzJynNpybuSE8HBuRrgaoPDNuXgJTZVSKWpb",
  "key6": "5GDpWYyfvRFJVfUQ6GyjmHMTX7htKPnU1zFuG9aHdecHMtYCVY68UbyauHfB134bcGjEjgeZnFn6jXjvVv1H9zQ2",
  "key7": "2XMXq4sZN8AL6VvJYe2bxdC4EQZZruK9Ps9L3RQHThT3ZtT83ktpcSjmGM7h3fLnYb1otj8RSvuCp8Wva7VikyPD",
  "key8": "2uFnRtE3RRH9p2WzNxJQE1gm3xRJ4L1asK6aWyMDZTJPwjabAYF38aNoEqbjFfo9gWXQanAcTDQCRQqYm47dHJzr",
  "key9": "3ds9znPgXZsWhb3zePQ2RrwYCwECQJauU7ZQF1HfLh4VFsNLgB2MijnKRtq99bagnNGGJikrLg4GASG73gg8Jmrn",
  "key10": "2Rvy86qjhVwhvYT9KzwUY7p7EucFNFNeKPmQRk92Tp7JuVtkrXAqhHeBE31ySY6UwWpP1qsfPajmGujU1UMz3ktX",
  "key11": "3t7pK85XvS22NvqUR2MGh9Do6kHvUswWybi2d7hqYPXXNFmNtJ1o2wz2bexgMN2jyAbvqjWk4pzirfS9qrhzs3re",
  "key12": "42gM42jmKsU22FyLGV7j33i6PfAbvfX1J3QY1ZC4bxFcpg8H9x73e5an65fKobxAWpTSocigHeJnGQa7vaGfRmus",
  "key13": "4frahJ6Q7P9S5to7qe9cqjzxCiLNzdYD87tYgvPM26nmmgZmBhWW8DfukRRCZJ9zne76FXdstiRP3R8WfFy3eU9Z",
  "key14": "5d3a7egzMQA71L7ZL88QgcYmU1htwhJQoQzugxgRhWKJAoQYqvJBtAUEzor6WP4vbFWa6wbXX8uLuGRttzniuP8A",
  "key15": "21DUpbeiuvMEZYQZ7dSVGuR47kHqjqqzmVGhoNuVRxgfvDi3Yx8ribUfMEKCvg9xosvS7V89Q9eVgmi5Q4bD65ff",
  "key16": "4NFV7BvBaStcfbpa1hfKSWzkh6rTrzYQwipFs2BMnSFxm2bywFY2DnL2EpmJbP5npZAM5GTeMnTKstaYaioDZkNZ",
  "key17": "5v5eG1k1gM55ZAvybm84b3L9XcjNhrGbJbaw1By6dLQd4meqcVuLBtovNEK7bqnCiLJfVGotyjPCorUq2ECU8SQi",
  "key18": "JZVC2sydLYgTJCJrHU8CvbhtmLMkTJ9ycA9TxTVrvauj5u2UhQPi88JXHqzBp4APjpYwVX26wX4KhF77kHKK8Er",
  "key19": "LdiaEr8qaoodcZ3TGFJ7xp6n6rcyQJFxexZQHYjMj7bUf3dQ7mbu1ado4yz14v9dMQcanhV7LizyLaRqb7SgrTS",
  "key20": "7Qm2APw2qzuCjAHrCmgUbpsA2tmRv6hRg7kf83xKXoucHDh8jgwf6UpmwpWaTdgzEEopmcVLkomtXr1NEKTHr1c",
  "key21": "62QWdecLLLcsPEnRfzBzgf1SqhefVck3tx3NK8KkqB3TEktohrxyNWxmV9MdquEpu7ZQqyqte2PG5GFyqAHTrfj9",
  "key22": "3A22MPzMkWGyZKEtgwNLXkcqwddxxf728VJijum9UD4xVBn49FC36Ptj2TcKqHDvBmDYcynHYX7btE3dbJmV1JdJ",
  "key23": "4ZJt1x2x1ipH211VeccboovRyKAUHVUWPFTrZkNJaRbXkGSP75mBLGSdFmMPtqKjkm3DPc2ijuWuycfbC6CSeGrb",
  "key24": "265HWb3XX5XBrmF1F79RvCvKDWksxCi3r6Yqn7E9NYBDKe6sYz2ywQFmXaDgKhEHLhcosYZATvRVZnxSaafN7kZX",
  "key25": "2TN6rZ58qrjonYvFJTpBVwUZhgWuiGiPQsAUNgCmfZfdSCDmovX4co4zxUwaKrjVAqesNHeWU1v9X6FNQM3fiyMk",
  "key26": "5wftDjkotprv3WkwRnxLnxxqsuZQTxT7XPW7EYpJqGrPB6UAW7JfGFssbFnoeLjEtcfJXDkdntyxnqkzwzaZ8FU3",
  "key27": "5GT4gMxz4JBXyjtKEqcR8bHL6N6pQZhnQLzmqDEn6CGPdB4g3UvmwXg3bE1Bkr3DkAmYEpWJZbmmfk4nGgLyw8Pr",
  "key28": "5WkFafjaFJDKneAYjP8y67XqEHaCe2tTEDmdmtgw2gjxTg1eEvYsuT47A3jm7Pf8huMcp9vhjZGfTL8Emd35U8Ne",
  "key29": "5FHYuJuorQH4wipJQyPTsDe9fRbMA5D8XMEuZzS3Mw3MYNr3wUZQtnWbFF1V4SDnK1kzWT7qcAivDxf1zSirceeq",
  "key30": "FnXjNCkLRH6dBbcxxz7GBDyaSgzmFUreTCbBNfHD1kZdsZLs36GpXrzSnVBawYiD6hEh1gx5dkUnKveLdRmJHnY",
  "key31": "4MQqcZU24Ha6d7kExmHNYAcdEAfpJvHh3vr8ewK1bDngxTyNBzruYPnemdnit6QuNbC4YRFFPaj9DwPjsf7zoftf",
  "key32": "5pkfcuBVp85fL2rCfgjkEgzU4vYPCZfTYPbZ8MNFfta77GdqKk6y8H5SxUWBT3wjq7anCL2rTsnQboCdpeZhknaM",
  "key33": "2oH4UtMqMw9fsyFqF3NxqHie5j68AUk4QgrXLkkK9RtBKT3GmwjuB39MYxqpvqFBrEiXwjf2rmPgkohCPXdJZVtF",
  "key34": "4S2gx7bdqH89cQxR8a9Zyg85aB2qcJSfpddfTbMS7Gfif5QBvPxm5ThtMryk465M53LGeWGD1whF1zHZKePcTLtH",
  "key35": "4xZaJbmk5mBUhv46pZDnXWBiiZZMTd5iHSm4JJo6Mz6AEx3LH6y25M9XyATRaP37CnZTZhTThoLKPqAsseF9txgR",
  "key36": "59YRrP1Ct1dBbjj99ujzwdSHx8ZVUWptFqJeqBRcvnb94HL243mP6orANc4DFaaG1CDaBg7Xnv4SwtRED5Sa5st8",
  "key37": "6Rx9Dy1w377LUdJUvRZUYd6ByyQLgAL6ibANY6Te6rucq5MG2TR56RuzdnFW6tm8gmVwDMZLuRE6VE8eAkrbwUs",
  "key38": "5WLadrqmqmbJniLbV9WAHc5K5PK9AhoKtGUiBFE2x5M9ToyKSV642WrhzLCBC96Np4KaasUzGVBPLbYJrF7ZicLu",
  "key39": "2DHif8spAeVS7uZ8KUsFPw5eEBBdinj7r7FSfNqH7bP6gwaD3hSiqQNNKRaXYkNMFXUvM8KtMKJGStebtKb7t6Em"
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
