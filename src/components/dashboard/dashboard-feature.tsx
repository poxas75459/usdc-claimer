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
    "5LHNk6pbmYD9DmcqGEVxvWftnRrygHinZW4RGpboSJjbePPN3cxQkkQmmrBdnuwDuom8vACnqEbfq6LAxBgnBSBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pwX32wiyfdNMcwoaJr3xzeU4asFs21JGw5XocedagcJDPAZaridrBHzf4BM1FNqpqJG46jzTiZbqqD2AjfwUsRe",
  "key1": "43XiihfZxToWm6i7kqd3P9LzdgqToS4sYtueTou68jBLMJ2yaUSDoyr4GWnFbTqBNnzvL98N1h7YDALRiCsygcFv",
  "key2": "3q5HPHe3kk2gmZPmgumaxx2B7nDkeQyf5Z698Awe4ELDZ4rXqET53e2vTmpfuQtX8jiAifLktwA5ZWcdj4L2Kmnv",
  "key3": "4gkpcKL4oB65PYAXL4oVRtrymRFXrLTa6TAJypCWeDGLDavvprSuWqG3icH9NsD8fhxguvdh8aiWtvJzvdTSt1ag",
  "key4": "nLdk1MUeT4WVmFnfFESjJsLa7d4492uG1uLbbcvKmFQHM1FJB1MseEYwxZ8cLhCDFzK27Qth4So85DLF9VME4D1",
  "key5": "4YJBkx6JnmiQ3RTBvEZj1yAxwfqkQMcRUB76pqMdGjYidb9FH4AqWd9wyXBoPfzF3JhBxyrRRU1jZtmpcWAbEXYu",
  "key6": "5Kd4Y2AA2UU5QqzLhfGYzpGKv2bcfgWn66NAq7jLwEjsBUCtXD6gRLquVkd7LJ7htXUUvoE9szV4Ce8XmNnCATG1",
  "key7": "4xGtRHXFNh32dFPGBRyBjpzcaLsVX9msP7jXPbbww8kfvwnPkj69jJnfC6WkNEeLWtVHNHb8RGXhLUyDumr6Exfi",
  "key8": "3eKEpx9hp7V4bc5ffByEFZydtvvGPnd6sD1pR9FCLfCGxowMcZFUNbvH7Wo4FzMpPXho6WnKi1KZVxJ996K9uRrA",
  "key9": "5gL3Bw5ZegQnthTs5uHXhjSiyeDLVn4SJx35gzSo7J3K568r4dMUQgYGstywHfVyp5fo9AskCp6xmJW9KiYqSmih",
  "key10": "2usYBZr4iztULbuFc7qpb8f2Tdd4WWU1ggbzhzjSNG7f9JpBTmDWSvMDAnTQSZr5FRGRSD7dWgcMLnTiHQxhs3RQ",
  "key11": "5F72hMBxUxSCkXi7CDgFQBBw4kTiGgcrbsWzanVdpzAK7YzPMTTTiRA4fwjQNBJkBLHa3r15tLUogsjUPBWZSzxE",
  "key12": "21DA8YUTuUNEeEmS1pDZXmcGLsjzDLXgBh4udP2UCXix3ZMDtB9GL1JYAJtqpwED1yTPeGq6spYFfd2VPkptYAPZ",
  "key13": "4zdUCRdFnJwFB9JE6Yu8GWzRw2oq6XD23n1hctc5L3XS2oXakjechiB1jXh5LoLSHJcPGjV9MK7BrxjDP6RL1EyG",
  "key14": "3JkNwm1TLvV7qPRb1f5rZpyc6DuigYnUuoQwovxmhBkYpXPAJ7kuifsPxt8YCxhg7S6KsMA8ehHtwX8GRqdkanTM",
  "key15": "NLJe87sDYsGefy6teex3a4VX5Xd6TLMfBYebv6LpNXsrm8Am95ju5MfLwtfvPKT7GyxRrpFHDNzbGmkf6aT2KiX",
  "key16": "5cMfBgUmzznVdyhtPt3o1hDe6tPJRq9BU2ryknc5fRampZB5noF2TTHwXgHihHzGv5wanycFFBqajzvX56TVyxdA",
  "key17": "5RpjywUQCP3Hs6y8BcBGDFPiPjoTjfFSnxarWbYMx6kxZiY3FVzoRnmqfs4oo6tfeWJ8PveJQ2Ymejg4VAjGoGJ4",
  "key18": "5n2gZsuXQWQmLwKNH6yVtGAZ1V6jnrWpGvdQLXcoF27zUS3neP7KnjBb2N7K51YFqFP8W9Dn8ZPMGWCSA5ffz65X",
  "key19": "w1kV1uBqqNQmmYyFaEoV5jQyvkpBu5PtnCCSNwC9vsJP9DBxEaUNen5DYgzovcsj8MjcV6yEqRN1KGtfBH5UT8w",
  "key20": "7jzDbuEcU5JwYGLpekREKZqQAQ7SEcMCGqS3ULASfQVBwf8dkGJDqCbQKh1tZsdbWkTd1mkJEMZkYoKDvFrAqwE",
  "key21": "53oA2yjcLwPiRYZatrSYki9k5J4GmepYGxDFfTNfWJq2xjPo4sVmmVJkfaRWzgsnfmvTbjr2sQQGNrq3k6uHFeh4",
  "key22": "5Kj8nsNjWzKsduU64Rt7uWhBQ7PQhWGo3koJ9Twr5NBrdoHRHcHxTKLkjrw7vrJ4fdjmondTwj1U3ZecKHxKkiTN",
  "key23": "2aRuDzezby9ULwrKv7NLE9y8yoEh2bifeW4V7VBevCG21LQiZMAx9fdC9AT1BQEcvRPdEUnJhDRoxUrPHwgQJwZd",
  "key24": "5DeUBe7Q2EjAtyWwWCRwmhYvVfyw8uEiREoptZPLNbtkTn1BQDjp9Utwpmkj2hZiATHZc9x8XSrgBK2vAW5CfJ4W",
  "key25": "2dBhHQwRiyPvsR1kEEeWbb4aKodr1mmuCU8oAU4zwQNKJYb4GvNTGcaT2PvvVkWEpDRb6HDYMcvNgvPW3P6bkjRs",
  "key26": "5EH344HFF53BGqLFMS2RBewYiJJgcagk4GDxDt6CbEn1YbV4m9kphQGgXEPCqSuu5kdNSFXFHSBVS8LuQj2DFuwg",
  "key27": "2Sviwt9ZEgUJD9Fwcco1TjW2g8nWBmxD2e5gAcp9gngjAquVjYzrtzWyLgcYRayhfnnwDtj9mkkEF4f86WsruUuL",
  "key28": "6159US6L97foK5jwZPCYvSifgYP1QtzFGVpVd7AfBguZ2RPCzjK9xUc25Q8aqvwEKoxgNMEbJBPG54ze5csNKeqY",
  "key29": "2tPFcbig6J62iBDjW7bzi77iayAW4jDEkLXh76vwGEKseGhZDkqhPx9KHFrnSh17LdNaA8wjnkmdVmNkZAQk4Bwf",
  "key30": "61RqGtZRmWSoHAoqrtfV61wvvLXNRcnreZtQXuUuXFy4nyrntctV1nt6yEmvTHyNN9LPcrFK3WmcgpR7xJnYgSFR",
  "key31": "6P61sZkYhs7QE4rm1AQ5HD7unWQTfeE4EbKbYX5P3qEn2sejx9PZRjQ2mz6atbUgQJwFPdV98noWsehUd8q93qM",
  "key32": "5afAzPkho9ep8vWLKFjCjoGqadCrTh8GvjrEUZ8uxPx5nfHmwAcx5cyiYca9GphiCBq2kbLUYNrZEPtUn5h5vnWr",
  "key33": "2HjBpwX7qTt5cFwVspE6EuuFSZbWBDnWrB2BaT7j1GniGv6Yjhi9ShcJLm1P87WMZy17Hco6kfrhXWNxqc8Ah98b",
  "key34": "5SdoGXjXd9Wr9zxFiPTp4crLFBN9ASVUL7RKaWhTQFZY6DHbhznfs53HRJZdSrLicousM2ivvSRQ5JMWYUWXPeNX",
  "key35": "qZBUSR3qxE7PJ5PLBggUVafHG5qgAvJ16cVqdQHf1aHCyqTLEVXLsvpdd5uQaCWQkDTAE3dXWrr3srHG3V1cwbM",
  "key36": "4zYac97wBiwrwB9mKgDHwyZYLFebQNg1G2FPRfPuNSho9HNTDWiQWBMrLSJPfMwfmgdZsnofWmQRVA5W2Ft5qhtR"
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
