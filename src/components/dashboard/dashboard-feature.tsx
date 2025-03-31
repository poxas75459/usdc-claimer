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
    "3cYSNwoEKtjxGKgGApMaos2VyQSsFFSddhRLtmespuXVKopG1HD6tgwEz92P2NpxB9baoKbs6xcCxJ1Mrdruu6Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRJwPcMHZkk1cHqivNc1mVz46cDksC2dgYVgWXkTCG5HLufeBHFES1NjffDictVGcDGLgUaEJsKcCvkuNs4nfJF",
  "key1": "5nS7jJeRuPkib5QT4WxRjzNWF6CSNiFoFcQQsQxrUFezV1NNiko9TQ13fE5h3iYyjSuodtxY2VGvuy13hQ7SjQBW",
  "key2": "2ZweHAMpksaqn8g4JFR9vZ7YBdi25e7UzNeCQdNMZAdCkHPPt6E5Bw2CSupy2jH5wqHTv5WkjgNfJPTNJH1tu75S",
  "key3": "3MoFB3uY2dA69xRTocyD5n6ek5PSh6Jpqfz67ccRuKYApev3S1FD12g6Un8bCQTNPrS4pfbCPtyGHFkn8f4SSeyR",
  "key4": "3tNfL64uHUnCcPcvx7S4aS9iKB9RVXoPj6JCuhVDZ4yZWC3KCsboKjGaxB6JuMjwo49P5siuSL5bu9xmeN68bdif",
  "key5": "3fNvrjQ5hV698T6HWzYitVCnPvXDZpymdizmzpcw4o9McTdT3L3qyiNztGdYizwzH1P7LdCwxNvqrycSABTVhvj3",
  "key6": "5nWMsAu3BwHuqRMjJAwmm4XSHMZEWiNFhge78Z3H3JWqRLUhFVE4sjuKNpA76555MNNxfHSdHLJqMzeWPaWSEcMj",
  "key7": "5kiASteBgnrqnxmX1KvoUNggAJDrXhbz9aKv3psKwjQwDvLHPenJHkg7aDiERVcMDgxb6TG5So9C33cr1pD9hUP6",
  "key8": "2ySucoQnjWLT3k3qtAXWBqdyqhGNhicwQycNJsNEBhPv4vzw2MpzSPMR9xydtJ8n6o9cft9Yos2xwZ9pRXeLP2td",
  "key9": "rzt3SEd8Uqg9UL4sUdARWTGW3oeiR6GJbLa7QuHMcCYGqirS2nbwC2gD2U95tUFjjstTdZeHz4Cd5p89qGiqSh6",
  "key10": "2NSNBHs5cLBuTpdEsB2zTsQ6FqJD5juC6n5LQ6rmJHLym2bBnS9v287P9RA8k5dHW1s5AzWTs2vpeLZ5tLMduUCb",
  "key11": "5Mcd3FvCL5hQ2mr21yhpkkHP8ZA2Qw5VyydC7hhcRPtSrmXHMWCS43DoBUgrNBQ3ZvJ3XUxQSMHTxBqwGu6KP52U",
  "key12": "4g6uBhu4RuTWa2v32g7pMiy2u3Y7GQKYNPrLLQK75SZwGMbGtznABSqkPeGKKrh6NSigRdH5X69zKuMucBRKpr1G",
  "key13": "5eah2jgt36WZuJ3VVpgSHkXEBpcEePJhKugM3c19QE2VA5QC3p3QY8DGqYUrihJsxGdBTqsztbpoThoZtScmFCe8",
  "key14": "4C8FqLoMeCcWWxtD8NPX5HTKhXqRnrhmBbGQz7J3AdzWpTfXPYm1gxLas93pzeia7nwzkaUJcWxndXWkvFWNNjD1",
  "key15": "2aAgtgCyTyquWfoHrN2Tdc675EaaZqy8Ksu8LDrQsoX95qLttiABRFh8aeTkaYC9yv8NMyWuGqhJnJgGejm7vvxv",
  "key16": "buG1vPWfnaxP3hsjmGnqDP3YuTcynDA5BDoct11jFUtFddodXsfi8XZr77XgarcvW3XhywtcaSSXFdrX5fskQs7",
  "key17": "qDk4zKCA6Tzi5b8hZWhebKB9VMpbM4ASnz3VqHn9dfQvs215P9SxsmXhEnVDR4gk7NiuCEW3fp2bYxGefsJxHPJ",
  "key18": "255iAA2ft2pgTSDc6fumKV5tG1y5B2E4QenJfh8Kp1UL1Vc1vGwsS5pPCM1Q7JhHLb39pbLoKMG1wyZ2oXpc16Yt",
  "key19": "27xRt3BdnuybAKvtNBgU8Nxnks94cYk6ttzuS7QUYdsEdV2NMiRuf6wz4zCjZQLQyreUbL5HBo8FGjK5Tj9LzEPq",
  "key20": "45TysEq83iWyjdpnnH4vSpMkRrjxXgk9jty823mGemYBc4mmnbAVbooULXiUwdZY4MJp2nB3Z6koN5qycUBEkpA1",
  "key21": "5CtNdmJEh4SmNcpDwLtREeEu8Y6PAZSNQ3pXUktbBE8QxzQYu2S2afsffqH3DjdAj1yaSqEuj2qR6antSyAxfbAm",
  "key22": "4maUajhMuo24wuWjtAgTtCiJLn4SFtFkDF2LjdHmzPTCG53P9SuiCE2cLMZpbveMmApDA8QMoZ5LRwr2MhLfFhg3",
  "key23": "5ajEMDfsxWHLRjhWPPn4ncU77zHLJJCi4VjdWhAvujqdedNw8XrvtoiCNTFfg1suGFHERfXiwyonGnyyzuXGX8Ue",
  "key24": "5MZujK4xhmHjbixwXQKpFC9MS8GhZkKtTEGZ6rJd92A7SvXU2QrWLb6dLRXDUiHAxs2NFTbXMQUk9BPoze9gUT3G",
  "key25": "4YmmUbAQehM53XqWQ4uBqr9vrcaMFuWxGcE8P5xGxqU7ppusYJfUM9GXRXFa61o4SVT3HpUraZcvq7MHHviAQd7E",
  "key26": "37fP84SZVjtwGuBWqQM6UhFtzvxqByF42DzW5Ro4XyFJ7J1PhTSbKxCSEi6VJvuv9n64TDd4ppLW8XxyrgadXDpb",
  "key27": "5zqUBEGJyyda422kPLZ4D3bKpimBgfH4K4DczT9npt1UfFZqoWJxWmDB8uTRfeFhDJvAe7H6DvLSDobNwkp54TYT",
  "key28": "GVJTAZLLNv9fBf3pDKN5kxvYc2pNxynY8mi2XYw12BXTuCbGTK2dXN8QgmwNKBmD451JrRBaRanFdCzEoodJLEH",
  "key29": "Syo8mKAU7Zc5iUjv4tAGDvqqb2EC8VSw79548RD3ynj9j5ANy5nJqr3tbrhLyfCTfhpNWKRxkWPfm65xas5YXBg",
  "key30": "5U2pY7b3x3mcjzEp1G8WKDQNsDnXsSN1WyVQCmciwRN5J61VhQaxbycZqddU8DwfZTUzyLnVJcSVYLPF3FzqySfm",
  "key31": "CPQAreAY1dZXy4kY14bJ1jigLAJNpYgVkiQ4VqfYNabkTGyEVhKwezHr9EqUL2anFbcYTW3EdKMNjT8ouv7BNuv",
  "key32": "4NacoiV7M5JT6pbs9LaXnnVdf4GMb38d33WugUMLWsqthE1xxPaAa2ssRr6TVK2RaYp9gP3a2GUGGn2UppBrM7tw",
  "key33": "pMo4PVKSyFc4cagHbLpAMBsrK9gds9rF1SADx2yZgh6egXJDvHvceuC9gihhUtNnTJkRn5FaP41Wfqbo9EghZvW",
  "key34": "3pY6EEyj9jKn9HViw6upUzvQejcq31XwqQcTJM3E7DP3J2zPPefo5qv3L7PohUmpxVoAPaDyKCpUzqfVNstotxHP",
  "key35": "4ZtJUM6Jnu63KesjqUT8vKaxVbTGYEEsgSPt6zmRkiwsBtEr5East8SiV9aWhjwmyXsQedZJ1Wff4c5VaF3HSkGE"
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
