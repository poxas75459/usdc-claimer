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
    "5BndMeCHRHFgEFbQcsK5eCvHArMT3rUPtD2noQdWBurV7ScdFwEoW8Dsh2DzPrgaeW6FJGdL4qXcAs9YX9Rvpvhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fX7KfGYTFF7Squ7d6n9u12isw1eWYNwd34ZYnxWJ9CPbKbrrJbWPYjrbVfNNxmETzyScX8241QYPGaQdrtLsT8S",
  "key1": "5AZMYpX98ibLiCpEq8nQatTaThpMVQYtgKd163Qy1xcymYABhAeCxTawQUh4E1UFmisGYrd34NJcMqCySKJ7Fqda",
  "key2": "52XvWcf4XzpT5JpJesjmhpve8U4EFwFGudhjqojViJfS2oCJkC8PT9GA8yvzoKU5JB9RDH5sYZpvjEZ9auceU6pG",
  "key3": "2MyDfudpoUrwPmtzbupJPhdYV1gKAwBaUCdAGBpqansZ8Rd31Zoy1aNQyjsNg4KikkV53mWcuxf7iKVCxDA9CRNH",
  "key4": "445BV1bgvLxorzreETGYkSKRCBYW8vCrjwSUYvhwwxaLnnZtZMKcARiqSKCN4safW6p4veeSnk5dQnnJmHP9tdyj",
  "key5": "ksoP5tc2VGdfNBDpkEbPJ9K7jXEWeQrueAfKyVXkcCUGzaAqmmBny5VE2fJupn4VcvbtgjxEUktJC4vY2uSsSEQ",
  "key6": "4gcfKYxYb8WKKxdgwtDbN3TN18cg2o7i1BMtqRsWR3ghjHL3wirwM1Dyv76vM2GmvGKySaksTFAnpb42kdGfE3Dy",
  "key7": "5YqMYMS1LqSPcEamAh6X2f8BYQbbmCRJm9pZcNscUKNAtRkYoCffukuJcURGrHDnBFERkDDR1jdRNPZpZnfPYYS",
  "key8": "37a2TeX5nepdMZCi68ykZbX8pUCExTyrXKgTZeABzfXr6dcZHg5A4ejV5faCtRa3qbpxNVGGXZf6PNRettdYdCP6",
  "key9": "2LjBZseTEyNjRfbtbGi16kkQ1YYQYbx6pfeuTeDGh8Q1PgSCKbQMM211fkCCf5h4cvFxpjzVhPrwmPUc4dtaUP3n",
  "key10": "vD6sSa9aE7P1K5Z4ZnVN8BWbZXSXZ9xcSNkrhpxiX8f1kLbE7g7N2rYzKUUoXbmAaxAtJv6RsGfC4ZQkJifmPR3",
  "key11": "4M6vAT474vcw7ppi4sN7LYDiBPLPBgkQwT9PwtENr3A2bnA7Km6Ukp9xsbwHAXFi1xoVeH6ZCzaJiMZCG1UZeLKS",
  "key12": "3oru343sx4tc6hCZ5Z7BGRqVrwNqZYvab1JyRkfrTBkwNM93cqr6DbP9X9Zq25s13w6jk8pUqnA43GLGUobn3EwP",
  "key13": "4xiWVW16BqTZJC2DxPFDmawckmaXJTKb1JrD8fqoB2Kgjp3pcY77fTQQcinFJoMofvgjig1WPWkLUuUjKGwncqH7",
  "key14": "49QyDoeSju8HK9SFUQXHbEoezoB6hEeVq6Q9MHzfaeWwsMy8axWfVUewe3PnJphrU4oCh5c94vnBjyhWHUyBjuJU",
  "key15": "4m7pyxJTG8hrtFZVh5JiVmJgCZYQdzsWUAFf6DPs9mwkZKvLZhsU2t21GCgUWqr84LhMsrpRJVnWnHEvaPq5ck6w",
  "key16": "2qKvUHFGFFQunBMhH1QuEZRTxTN9HPFTqwwwaVBYUf1mW5cbfRFj719Drr4Ppw9UC1uHqyoatqrUCF5cQRpDiYT8",
  "key17": "3vZTPLxwn1eE3b34C5Lm36zKPj889puSFt2oWEiBfRpqTaDFgQy27Mi5QmHDJEDgZGWcEaFjkojnFbnRPXZ4pdK4",
  "key18": "2e1hoMtsSJvxhArxbv76NyMjKirh4MJ957ATudrAH2YTp43PuA3oV4xasMELqUfTRE3EKayG5PE9YyfpcgMUdfL3",
  "key19": "55H7qfU4Ao2FyE67ML6w2jN4ajxotLiP1tDvw3bxmZpZ95rj4yVH9kNVRt8pmSwecrJBednqderL2jxxFGYEyPLV",
  "key20": "AEx7nDej2KXHPF1dSEs4b71weiyHg6LBbD3W9Q7z4oMkbJFBauVEzw9pVksmQEE9UcdWCraJXvDpUicDpzBn5Jt",
  "key21": "aVLNPYJQVCsy5ZQz6yvXEXMga4gQ6Ls5UdAWfpRtSeRVErtf6iDUaH8Wwfvvv7roGffDB8oTuxd4Gr29fGQ5zNC",
  "key22": "41XCMqhf3bbggKXyrzx5huCXgTH2P8vg3FAxxtE4veLUu2kp33VCz9uyFNq9JVt1Gg4ptWCnzS1wCBhf2fgy2CLW",
  "key23": "FL8TVUsLx4FTKNPCepNViUKu2csmQT7S3ojWDsH1nmfQGrstLCEDRkAh93bc7ENsVLjubevY1NfivGo9Z9L4krm",
  "key24": "4PLgijZGKhbfiYXgQsyqnJ556Zcu8qbt85vndRLSeLVC2x3KCV1WUoDjYWMeQM5KSjyNLiB69sZCuTq169a6hwuj",
  "key25": "4WFJeoPbSeUWn9sQNRw42kSpFyXNX9ttytjVAZ1TubGY7BYTEZ629H7krdmTXeQvf3SzjNh1wrLFXRXEraU55ygq",
  "key26": "2hyLM9ueZaDsLa4w89RTjPbUhxFR4VW1Xhu8qZCWLpepAtrpvAi4haEuxLWgovj28Zc6AzBTbstLjWpJmN4VhHae",
  "key27": "irjEVEE1sH7taxcKLiF4RPNuc5p9KPtz5opfTUMEbc1VuWpDDX6hUZtGhQ23zypvviNykoLiC8u2jeaCUmWPrE3",
  "key28": "2fVAfkThsswXd1DKPQ9aPVwzU3pcyDrZPN1YfGj3sP1v23mxQYFiP9tYpwuWJqJ8eF2oZFp3vRX2yJaBNYFPknac",
  "key29": "amR4e79hwiH5ex4RHDNPE4c4a3ozi8PggjExTeVfB7a5KzXLogTYwqtJXJc138AryPJejwzoEAKd36WcuxCZXvN",
  "key30": "5XADaJxfHEFv5n7mq9os6JeDbePpcmRAGBSmjRBUHi9cyqTfZW1BR9NJkRGi9DPbKRFsABRED1R6XSuhwP1Qeswt",
  "key31": "2UpSMovWuJ5Un3Pte1yhVgTsJnDTeDAHnHxjcuXpZDANUV6nwUSHLpcjPDwEcMKME7Zsx47Ff74F9kQncaD6t69M",
  "key32": "u329YDfSNj3waWrQmNSzQDaEY114LspQUrfNTVa9wKPBjQwZwYDBHSQu8Ua7L1CgsY2kuQJw2tjUh3ES2ckUQj6",
  "key33": "3gpEfTdy6Y39RRnqtyCa9ECmC95upmLMRoocxsz7sTLLUWiB7qJj6UVGPzmWCLsQ6fMC2tncC69rso6MX7Yjk1mZ",
  "key34": "3TWndmSZ5CheTBtE2FEMPiPBKiA3R7iu64T7KPfgoVCLW3fcXj5SVX3Ppm6TasWeUnF95eAq9aLUdHXafZAE9efN",
  "key35": "2fcJmSSLzsu4wZRgWKPcqQgYvKPfUswRyiPzneiu2uy5GFMGHFTbpFGR5aGT7ehtdZFymKYq2rvWCt4EpU7SAQ89",
  "key36": "DyqDNMFCUVnqgWRvrTTDdgHxsjwpoSyGUKeV383YcM8CcbPp12r5Undyfz1H88CD1sbxU8AEf78YaYsj8znLZ2G",
  "key37": "5s6RMY63aMzWRZmEdVxuSkDbrYgTujV2GzzpUDJKmuRzmNKL9x1jiKk9595Nxdw1vNeqRNf6vbkEHcqaSSabvf35",
  "key38": "5Zca6At6EG8af5jV73rf35cyVYbNKNgcRruuQfYQWEj5rbAK5hDiqu5QbLt7h4WHYkCBW9Z2n1HijHcm8oecYD7R",
  "key39": "53SBefGeDPzp6nYFFst9LngdtDW2RMNPja3PuF9Niehpekaw5ugphjdCn2udhFahDzMPCMxa8KaYbLraS7TpaexD",
  "key40": "yoWJFUzQcD2Phuz5gzZWLLdDC3gDkmwYGSnUHU5Un3pWnS4NXb8XmBfte15kjkoCrt96YSD9jaBqCU3RiaVXycJ",
  "key41": "ViGy7chy1srzqTqUE8s7R11Xiw6vJkXJbqETXegXo6UwFyB2TTB1iJRybkpzN1tEDwvMis6pUUXVNAgNCGnsgFX",
  "key42": "5jxAreBbcoPZN4xKJkAs7FHpC1vcECGT8caDvi8LDM7LfEPMKKsa4gDtTYsHmQ7796f92cikDK16qzZ1fm8LrVTj",
  "key43": "3RjD2U62jFb6PvQMktxfPEN4df8pNTvCiKj5vWq6zu7YFz74GgdfcER19Vb6XSsAVgs4aaW5cP53fTy7gvgWAMJ4",
  "key44": "3uU5srkhKoCQWxn5SQj2SViCag8qo1qW6dhSvu2xJqnXrLPEGDi9zivUfpkAwEpaHHy2yd4DT3hE3R6BvvzgbDCx",
  "key45": "1NeaiMtf3KW2ZBYKz7GD2NmBnJfN8VnnNzMSHHWm81ZarocBtCPj7pFGbQsk6H8xtDrDQbV7YhqQgkCtYtGnj57",
  "key46": "3Adr4L9chNghZz9cdtj1WtE9UUA1jmPHAaArsY3L9KX7gJBSVNTsWpKxXASPJVvo3eYB5rbrEquhK3L2r1L5WsDo"
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
