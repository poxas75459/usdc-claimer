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
    "248VMB2gcUScwNQpe4meerxH9AVYdvfxJqkSXYxbJaFtrs3As5fSKGHG9deCUyHfLbMDAE5KSrtTWHP4MbXTKPks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DzzvxRaPy5eBRQf8LJNvHWUQ4uafjCsj9uwbYC9wfnVLZfP9hZYwg9o2QiVJG871SQDjBLAoU15tw9w6uXi1vx7",
  "key1": "3K4ETX3i5LmP4QwadhEXzXnzXiPZkYNyNLkJL3iXw73L4nH8QiNF68y8b8swbZtPPyw4V35tfKW9BnDPbeeQQqPH",
  "key2": "4GmKrF3jjZrM4A97ya7ukD3BYTfiudqYm33Py91gr4dqmWAxsMvQUqHQF2DQvDsBgTrWPrPpoheYg7xMx1UiXtu2",
  "key3": "3ufCGNSQorHCP3yDPFojFfSVSg63sDErXDKjUUJ9DEV3o9DdV6mb3nSqL9hme3rmk9G8XSUnccLq1pSwL3MD2NCp",
  "key4": "3LyBReCkRSi1fAtVvUgcK4r8MNmDbiuoZ7KLSrGGKmBTLacT61d7JqefuV9ae39amENKkgt493u12Ewj381vCHtL",
  "key5": "2ttGE5SwVWvfrjDcwhN3Q9YYbZBMZccjBfwU3kKGBr5vs3EnRN7dM5eneUskv6micBtwY8Ly2PuvDzjQkkig8R9k",
  "key6": "59Vu6LNvNrdGsttmc3ExBRcyYEHhejBgBUwYcXVkubspfd6piEHCkRpLVC3eseB52GXfb5gKvFAV6hbepeY9NaSi",
  "key7": "29BsSCVUfD8WwWwb9mFBJnnVQEcrM9i3pvK372TGgyi7x4cBY1zyZDqYLWZP6aHyMSLVNwQQ9APyiDoYnFv8UZVM",
  "key8": "LXKy55ZxWx7ZS6StLYsNqRrosGvjdq1TodbUr7GnujA4ZSsBVxKcerVY4zh8GwvUbf7QrmKGSKjyn8HA2kjBiHg",
  "key9": "5RPCKXtUusXhmZ7M9WiSkmTDMhQuE5dyjNGomY3kzoEqmpqgL5kxocqkgqCTHd3cXfQG3j2tCneHUwpZy9Qz9A9h",
  "key10": "oTrUfFjZaLVZT73QUAJhYRrkmiXLuM2rVnhdYgknNAZWm2m3xtf5QD9FjhuF8zYm6yUw7ZWDkJfHPq4Wn1jAq8v",
  "key11": "57wLi98TLSc12qBuhMeoF7TDY51H42wnvTGJzV6jATn2deX1pd7u6sZwSxnSL68GeyAyX36UMcHoLbVTdCZPSjL5",
  "key12": "2Q2GJ1YA1JBwzoV8Scqzq5AvQxF1MUk6qT8HditQrF1X17epiVPEW8PTEnURyS5k2VQkDRV6ZZvnmLcRPEzUHCh",
  "key13": "2KHs3QshchEok69toYM4C7nnyuZrVQoHkB9iGZrz8gu7Z72P2hKLMa2jiwsZddrox7BjEanDCbjpfKLRpYjFZfms",
  "key14": "44YHjyksTbUGaVEKRNZ1z1VY3eHe4Bakb6Wq2bC1wzaxQVRxLCbtyy84Uj1qFprvyHTMgmjRpMc3a8o1R1jcdk2M",
  "key15": "61tqpzY17zUpZ8YAbtH8QDoQKbUV8AohVuuibZAx2rs6ihFh8DFSaf9Z3ei62ieug1MB3zs5nWtUtKzd8qtibHsq",
  "key16": "23Y2W4i4YWZQAcpjWHHz4PPJCbFbfFmaNUJyWsEFtiKkxVAMr7xm99rF9r9MKW3zGV17xAMcEwsTFVS7Po1EmtPZ",
  "key17": "wFHCWUhysLmbnVApUn8K7XBeXiL4STMcQFnxobxnCeQZaTUTrWAWtspnwVt6a4Jxp2GDz9mX2ne25xToiYxMAPw",
  "key18": "5veA9E3jPHMr9LC5ib4YUeMTzUVR2jCCq95M4Y15Uu8KDrrhs9JrRx5xWhkhGgrQKBYnvfuLpJ5viaMPE4i6Vsbd",
  "key19": "2GhxbJB9kGrhqFA8rFk1n3siKLyBcKsx4fSzCGu3eoCZ1ERJrx8Bm9Rn8Y5mUqeKXhpEwX4sgBYXrYh58hsGa7zm",
  "key20": "5UCjusHKefJUdVcEKZYJSJFSs7Bkk1Bx3E7DRB9iWxqMo1bosDerArHc7oXMkfbBuU7Ft34S7vNhxQb91dpBwvhN",
  "key21": "4n4wpVDAwpaceMGwdCR6wHB7P1rmKLyoPKbZPK4WorQQzV4iRMwCovyPRzTvgxHecmDPPBydJoGEJecWbNmr7XND",
  "key22": "3RaxpYUjSZvNDhWW9n6mdNH4sY4gayh3Yn8wLQUTP9GVLVkHsy8AG7EMSqYVP1QE9zvRM5Avh2xUqWT8WowdXTnR",
  "key23": "5hoPJxwr7zBuxkHW7JU2hXePKiwxFGYFLS8DVrNzZFApGH1S8pCV7GqyKSAcHguRtwetzZyqrmyGi4h1fRiVAxrT",
  "key24": "5r3HvwgGyZaz6SciSHgAQmc9dFDp5VLRCJ4xz4fmAZVLaR3L5mDFNixjP6LEtCdZpqznWZwHZ1EN4g6XuxcbqBeB",
  "key25": "2N7frByBgzfsqHVJDRbunEGRqoiZ7EkHQG8b2Wa4y6KFihPzj2UVxYNuFHREdNpWd8aeFkonCph1hbaR5UE48uqC",
  "key26": "2Cxj2RGaZJc5eiB3XtpNzPJmEDoF6Z2cBxQAFg6zkUZ9aSjxiJzKBADDT6a8UuD9z6rMBArMdW23xxwER1HruymV",
  "key27": "3EsiTXtghSBJJAKaJ2kNRuBP9iK664nFz5yE1zzc7jL9JS5qrAewg7rUhGzMHTW3ZYb76hGoPEASDP8YTDeyUHaD",
  "key28": "Ru7eDpP3BMcW9Gg37HFrnYGEuwnxHhVbFydEibZtYiZNK6PsbepCy3L5V4L5SUwvTy5PYYvAVLzRMJZpyuGCnNR",
  "key29": "4a7fG7dfKjesmZETdrp8zpT7bWoEe3oLV2Wb7KxmiEmRMsZCnYEu54aHxZw2xQXMTWXeVvvqY7p6iqHsZRHhvsAw",
  "key30": "4KNTjNKRzduGZkLsRuxUDdGwJzQ2sGJwny4U1FVNtead1KcxAgBjmTt9yM4MnyCB3X5T7nL5sGxexfe8BUdXtTuA",
  "key31": "4JfmmMxQuydeyYwtVwAJgNg7sDQg37nwoi2iKC3iz8WUYgpafr7VaryqxtGuCq6uJRfBYDMkBGpkLxHFKmk3iQ4p",
  "key32": "4JuTdgyT5GjuTzGTe5AsJf4sZ52M7AC9QwU23iRzw61ExYgRLBpko3YSMFd5MXkZPhPJqAhmei666e2BmcPcob23",
  "key33": "51jbfdCQr4qsuydhLUu6QQad3d13quTja4jp1bbLQqoy7MCaAn1T8VJ1ruhxVu9EG8hnaEAXogvsnX31yKNgaJkV",
  "key34": "4Vk8htaZv8mfuBK1fyJMEQzmJiV7eVc792HMPD2oTkVpfiX4BeW7gem5fkzWk8WNuGKurnsPWg4kT3eid3U2qURw",
  "key35": "4HtxVorzeC3ggYNxptTUsLzPrsugdaT7ZytFfVEYQroMQ61uACvaCujwXdTrecYiUQzhw1VwJ7nPdSHTKW7n2soJ",
  "key36": "oRm1nDPTcvUugBxfDXahT7RJ9a6APR3AYomM2bTcXqYhYu9FTdVYzoG2VgEwupGDsN7LvZFeb6CTij4rxfbgxyg",
  "key37": "3DHHLXJdSxf86DihHRvyVVgz8kDwRPXwr2JbkXGCnAeNmFkVH94uabJgzraZFaUaGi3KBppuF358NPFN4rRG55Rk",
  "key38": "4Q1ze5h2nkpUTxQyCJdfwvRevVZbcZhq9yTiF4EJhR5CrALNv6bwPCiZNG1HT3jLBu6zh68Eze286B4c74EwZz1C",
  "key39": "5VeV3R1CsCYcUK9ongpuhMHEDruD3RAj2JhvsNkzg1sZxtxo2MF6TcTyWFi1sPNThWMZvkj6iqKhvTxLraSpgYMP",
  "key40": "5MjkCLqGZf2WiAXEXaYb2zNYuj4nqeZXHmu4zHFdigfjjxpuj7igN7PoUd7mgnERXWwXbFab2cUjCkznChFybMUy",
  "key41": "56ZvrmvGT4do3GnpjjxUqFWRMTzaaFR5M3w9s8aK1mtsdoW6SDj9Z8J4UJJVP4QiuucU4UgkBveeVpSKEw8XW23V",
  "key42": "5JwXB1mSLzrnMiqf9JWjL6Xwf6vNvePfXEBkR5NtC3PuznzrtRusDz1MDsQVDwniWWQS7Ry1k9ktEB4T3Ey3GUQ3",
  "key43": "4A4Wp3UDjudMV1G2SEfNRccDiNx1gU9UheBfrFr88mqWQJRrSqUCPxs5VC5GGhNMQCQk4ZGEUSm3CmerZzM4vqBK",
  "key44": "3A4VFkTwmyv5QShQLas2dVsz5oKcq1CMnTqXBkWHKoP8VEsfuzTQfjJ8mEX9fvwENQMdh9VyQVX2ydVYpNwzXyNA",
  "key45": "4ParGX24F57vp32eYSkw8gRQLvP2KYMhCCe79EAm6s3T7Mq1WSGkPZpcxwsAuf5TGJvKnp4RLh6tbnXzMs7rGboy",
  "key46": "2LN3DPWzpXHT5pQixGmixUb3keYJGBLMXtvJQ4hsmgS8jxpCeiWkwm9gyT1YCTqC3bAsdJtojtTsc3XUGuyy1b3y"
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
