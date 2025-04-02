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
    "4ScBdXpC3rBWJPhRnPbiL6Nvje1oUwLWomUqX3XcQ3JkDFWse6vEECWjPQH6mMN8J3MLn8jKGyCyqHh3c75QsBhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DivtfkkmtVJLgyAT4Vmqf7mRxzNZFbQkjU77kz6gWYdQ7vnFzuNimgcnpN9X3B4LEUQf48hLzS3PxDA7iZAKbmo",
  "key1": "3zHVe678qqr2Yr5xidRhUBFDSR1S5c3iCKNGvXn7c3wvZTsUrxnCWQch6YEre3pVphHsKPQKmcgTVMh7Aa1WJNwT",
  "key2": "3KAQ5Tsuz86aC9nXysgmLxeaPvWSrDs64bJsXULjVmMogujiwSLYokfaHsBwwRnKcV5NJUwZEiKbg9Jp7pY2jFFe",
  "key3": "be2pGGbvZm11pfmcfZg6r7HnGymNZfTJd9TBoLaTTF4WG96MSsZafrCPUuwwpRk4V6ywS2YCMVtzzzgLNVAndJz",
  "key4": "5wfZJrZchFq4UMrXvc2hJnm6a4mnoGcJMAtFnmkwADPbWTZ4SBqbbCVYKgyneqvUJLWv6ejEzfF63XuoSATxEMVK",
  "key5": "5nKztaUJY4P6H1S7iNufER9XPyj731YJiYeQRm6nikEcAPYggmHow6uJ7UMoJhEWqjjdSCza8HMd85ZKAPKDadLW",
  "key6": "3gf1GxQV2pFz4ybD2uM5LmZE7jXG3DyM48W2G1v6h1kvQ9hwBLKEWWb6JxrH9PZcN64oyWMHE4baa6NCUrYvTZ9q",
  "key7": "kvxBGKdnnW9yuTJFjj6eXzfXMTZBVtU5TQVGsoHZ1k9p16rAKrzp3ZptFguitvrvaEMfz4PmB7d7zTWYpychFsw",
  "key8": "3t6PtTxuWvHvRjZbKkLcWhehAmszfCJGN6iPTan8fwqgW4Fya11yXNgrfZFVb6csyb76zuuhCXP2Dmzv8LfF3sSb",
  "key9": "2Md46vbZp6d9Frs4SQW33xS1LGaUPCQKywrrH7UFyf1YGhpfiDmZ5vww1nWPu144NLXgV71diMseUqkSQrgtrtkk",
  "key10": "5WnA6uir78wvbmVYLUUpvVLYcrCASXu6Bbh8EZq1sFaTjuB7V4nKHYarmvBfBsDsRwWvipGpdhjbpMiWfuFqr3ms",
  "key11": "5SmcEdhbX4musNhe2QoyDJ3Zz4yysA6p5xvZXk2imQLgTTwN7LEEHAXxBCdeUpoC62Ejg333WwhjLk53xDWE1keA",
  "key12": "2K257RuL53miqi2TWmp3nuZcuCtBpREtdwj5EGcM5eF9ZbC8B7Hm9f7Hv1fExiUAABbtn6DqcEtqkJDBqJzATArE",
  "key13": "2uKaZPZjEaefU7r6xzZbJp2fxyzTzr5PPhTWbtF1KYvCmFzRc3JC8LLtRLTfxFuDf6tPEgC26D7JGQg7YHs4QetQ",
  "key14": "b37QegdC9Ao337DfD9MJEMjQwH1sAy54GkehuVoJK9itwcq5nwzP72uowLuECgtPNyziDNN21Q3VtEHZjoMkP5H",
  "key15": "HpM4cKh6QGQLM8M2cB2D3Naq85tnqyDWdVozwH433TZypjabRsHS7eGQXDhT6y36qFnXdVEFV3v5PG7gm1rDLMT",
  "key16": "4ZyPGwbYHKyE5jwjqKntrJNqRxRy8X6CYyLJhxZm8pWSXKGcDN8jQb1ZzcjnCSWeiv3jxbPbhRw9bJuDYBaurFeB",
  "key17": "41DJNmuN74ZGt3fMGu5ET2yVwCTtdTo2DNkg5d3SoRLH1a2KM3CkX6QgccuhzyjUevHEz4a8qUCVfVaEGYqwwQUV",
  "key18": "5vvv9Lzj45iJfP7rf4tHaaMmPADfohinDk8R8va39FtTJrwFVLezGbgcBGV9G1vbgXbkyU4wPm5bChB4HYXaJVv7",
  "key19": "4Fi3XSbenBotiQzReRMSDwbVdsuPR6PKk9MbJRS6dZPZPWnTM8sC5mbjGUdujv8uNfWV7Eg7qUFmQgyxgBz7ygWG",
  "key20": "uf9ckuEs7Q7wZVWFVDu6vd8A7TvemyuAPK6nHpekXo2xnsPYuwS1XaoPuX5TGgEkpPcaeMtQ7bjY9wKvKESaemw",
  "key21": "48hJHAYsrzU5k5vNbZH9zvTyYSjWbyPPXrmfZDb3unVtNE95Je2qgsoNNaQLgcLWAHHyePPhdfRyZx2F46pcMKqR",
  "key22": "437Q8EBQaFm56Eh1twcHJgy8KWMUqFDtpafepae9cU5q1Q2brLCN2PRjCH66c9qZ3v6uH5j98xPEwNLirHZojySD",
  "key23": "2mr3U78DWtZpSqTqsusryAy6BvjmXs47YgC4PC5qYVzLTwWBgc1R6h8gdF5ymyHEaaVJuGX9ECEV7MxaxXwXcRTG",
  "key24": "3kih4hqWrJGWBNMVefBgQYePBxuy3cwWyVEDkDGDBV9fzJqGBmiXqQxH51yyGFdbAZPqu5SFz96EXdQLhMjavui7",
  "key25": "2MMEdABSocFEFkbzRwGyFrGqB3XaMyQqiThzuqFcNtrkhMYYcvQJPda12XH4jgigRsLRsabUYUcnWqFzcGfbH6vU",
  "key26": "5TiSfwxKgrsBnWFKSR2m1tPy9mij4sJNC2NZfmJa86vns7DRJMD4mDKRcR58mmDGqyafCJBzcBCdtMKNUx5asbsd",
  "key27": "1Q6754tzKCXQHRdjyj8oh1NXspp4wBgD1aKwsmUU5s69xWEcBZvjFanmoQy9bc1S1tVGJpBrUVfazf4RgM1UJ56",
  "key28": "NnTR2Bf1nGpj8fRecHRBv3u51fQzF1CNtpdVBdFNaqy5GpXuzSJvnP7zyx4vmg5RQBAJDrpFB9DYniE3Rc5PDmu",
  "key29": "2R6ZtwzroG56LE7Mprrh2wE8VgnYY84DfgvjE8PCjxu2F8R1bAnUX7FHJFBTVngWkB1sGoZLVT87puP5XLaEmrNM",
  "key30": "4tssy1CQ3LodZAxkpum51CnjwN6Roiu64BphrA9GM5uaWHPoNnV9KQCFPWPMmXfY6rz8cUTAH3zyX1oJrdQYNLAy",
  "key31": "HRvMUw72kKpF9k2LSEokNZUY4kujwUWUBX52zk4u4Vqv1x7ZtXfc2KuCznAYz4dCFdcffHtokuNNcoyiEe6dmLo",
  "key32": "5sxyeZq8e2HvH8Cuw8FnoowJCEU5Cyc56aTzhD1EoUqnbSsiUH5psd5z3eVnveUiYvdC46juC8P7GzQTRyczA2S",
  "key33": "35dbF4cZE7eEWy2RoxbEzyLEvuRSuBdU2xWY3Xirnbb5W74tPwLHYaFRAYw8EFbV9LdGqv9pKLL9f2x8YUoJYozd",
  "key34": "3SwX5HhGRCzUwicRysyb6vtmB8z8HXXC8kQGwZHnMpusYceRHYW5pS9mekHCjXzHWPgxFiEnjE7o49r9xmR7yZZ8",
  "key35": "46WapAJDUwHeEF2MZUJFAkuNJXhP3XYA6Q3PXSYhwpGus4uZBYmP8eHVYtM9bM4s7t8JfREYXPEqK5N3yoWt697p",
  "key36": "5AQ3xsK3x5EgEMdyJwKzumBcE4A1vpdAzZPSYbMBkPF7LPepM4MDY9rG3ELjH4rZihoQYe6o6t5dm9XVBsSStAEK",
  "key37": "5Pjoa2yomDvkQFwdQr5C2Zu3hM3R1vZ8tx4AV8ArUph2GxBY6R7KeopJjcFEDQg6NmJwHqrfzgDpYK4B1G1dSi9R",
  "key38": "2yWyvEtwbdykswxKQ4ktVnPLc9m1iog1CCTimMomNMwfUbgpZ3Rbafe2xoWDUjXJ4HJj8TaVJAdfN8EsU1jeAM8Q",
  "key39": "5WVD4h7E3t68oBhhMR4NCA7P2Esg8QczWUUFB4nRsv9KZUfeN3fknYHETLhdi6qSzGkitzqUTMx6Zg4459Ci5oqm",
  "key40": "X277hGakdpxZW2X8oU5FcwzP3pcBJFeGbcPEdUBUmPME5D7jNREdRBxkfJQucfzUsunjT3ahtA7PjifuSHWsdG4",
  "key41": "32Uvc4jHMouS5hddsxJdGJwYKWrCZdnzhMVEVgxrz4jyvok3qu3jyMUVy8mFuBE14sJSg9Po6iZt5x478PNhUkW4"
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
