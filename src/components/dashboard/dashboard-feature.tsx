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
    "aStsJWC437bZAVqUcZPy8zVSFW8iXafrU95Vq4eoLNzguaRZeRALf1CyhjTvnhNyLSwgGjHyoUxW5kVRUWqqe7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eEHwwKxgJd9c5D3ycBE7JEsEFTQ6raifTLnBxPfDxH5tHdCXjzMBytfoCjYsYiCtpsGdZBUxcBXmHTaKw5j9cNd",
  "key1": "2gFsLMBZPx2Q2j74x5j3h27sUku746Lid9XqmvofcGTCRAx3oMT1qkU3KxPdfNrKpZF5Jv4bzRBbR52NThJJegaD",
  "key2": "2mhTob7JoJoRcECgpCkJKn1HSpTwnqhcmFwPeRfzbNkXok3kkSZw687pt4QUs1dqaSYgfChxw39t7P5oxTQxqKNb",
  "key3": "W972EFGbgYnE8ZGNt9j9R8iwMM79H8B6ez9bNVvYSsrWKuCRbRH4oWCu2kcLAYnQXtYWuwCcVHyyykbJAvfuUi6",
  "key4": "5pc34j97huaoWgAY4R1VnmudLEceUVjfY63vQkor3ofV2mhF7uf5p4o3HfPLQDP8SGu8k5moTGztDhh8W7GJUyHg",
  "key5": "JAt9xz7hqBiUWTW6qqhuTESTLAGsUi3pABrnnDvTiQSYQFgH9TMDznAJTq3QvajYybxHdunmQ3TePbL13bDtbqY",
  "key6": "4nMAHMxmVUeacs648r31A1Ch3m2BLugrtNmKe4m96ub2XiA5LBxaGWeVDtD2SpVxrFvvpctvWydZyGUB8jhFgsNB",
  "key7": "5bt1dERat5MZACvRWWBN4fjtESU3AoBnfNmE1tRPWn7ZoYXtFncEqzZAPcC2N1JzRx28ahEu9XpgRpPXsij5hYwy",
  "key8": "41Pt4ENY3efv9utXPDHt7yxqX9DYrt1r6RGw6DjeojYVi6BDRF6FWz1bfxgJa7hWrJxxhAPqhnp9xW3zCXis3uYu",
  "key9": "349BdiJaYVnejhe1DgiM3rEWtDdC8MiJVMTgWTDuT5sFeqNhZhc2UvykCdw1xLwWUgrHERsRLy5jKpPA4J355dy4",
  "key10": "5xpoFMGmo5wVFQqBorqZdZD667iErqdDsxHqipEQHszhCnMU5Vpb25gr33KkjMSeUbC4CirUnbjEeLD1ia63hwiz",
  "key11": "vhVZSuFF23JvyVYaaounWLyWXYWgwds5BP4hhJwDXGEVouzRYB8SozREkDsYFP4u2B7eFGThWebSiiN5ihG7ECj",
  "key12": "4hKqb23RR2S9atE2NZLHwhxNKChZ7MkgGdSaCPRnN4fWCaP2xqUWZAc21MX1ELYJiL4c6TCciHvSjFHUXrkaf1ee",
  "key13": "5YdPhRHEqsNYE6iauFE3i4T45LQc1JpsZcvFapc6To9ynhcBFHxLYMEK7VVztGds7jTXkxKCnuaAPA1GB3eQHMZw",
  "key14": "251GLpXBrhm2mjfcGZj8UDQeBWrbXYZ7MkzvcFVjHNPjiyXukiZypLhpxrcTZpU4HdvHyMbWorpTQE7p9NXtxdPk",
  "key15": "4zmtdeUQ7c85xs5fXVmk3wm7Eq2h7HA9uPy9KRHXzNW5kPkneS4vgMHLxHcM8WymycDbPc8vgEncwJv46zP1DZgk",
  "key16": "5CsH7aaWhXoRvWqWVHhz2fgpjW6UEkaGhNnBPKf8ob51wmeKJiQfBRptwoZt9DkKkn8BXaeaAZHLu73TKwgDMY6e",
  "key17": "4UvaUAEAQvZsRx8enoFbGQFwCehyiAVBKKvbccm16byCg5ypwXMvQTv5M42BCDsp1VVYvbP1vzSkbZVpvtR3SwSz",
  "key18": "2kQKxGHDhnWaz92Xiu1MA9AsW159qrbGdQaG5iEfbDjbQhHBcj3qZzVscSmxYJyg2RiZt5kZVbUanFrRsZ9phm6v",
  "key19": "4AMhGRbZzHn67mjfe2CSgrBoBtayt5nxp5qw4mBUZcfiDyhW7A3DjVtu3wmWKXiiJCbuQCFs5PzkXVF3nKrFuvNJ",
  "key20": "2A118NS2tZ3AwuPTVMiRvUAytZpkFk1j79CDetATNqwsABsZ79d9bVabKqApKFzWUsqTAqPjci4S7sjfqC8Xd3Mr",
  "key21": "7TZRrnzM4iDygEyhaS2oSBshe6tiXPS9urCemBCUBjzyon4fA1LH9M2L8iY2RPepztcVKB71hZif1z3BpVAnHNA",
  "key22": "S3wAvtE7zmcsuhC2rmLncAB3Ac2SvMDeiyJcc3FaWoyAWMrJFhiKr2RZzjzp9wpdN6s8vaaXWpeajbEL2yVvWu4",
  "key23": "AaYaTvkMGQpVhYmi1UANqXTD1U6tKMRY29jMB3YPi265jH5K72XjZJcSScJ3m3fhCftFSkJfDeu23Tjo56dU1Wr",
  "key24": "35h252GMeHpijvdkYgrHeNXkSSamRtwSyX8dnfrePqUe19nFgLgDiR6bTYvV865h7NzbEPhJqpr8KTTLPrLz7UUy",
  "key25": "4LFAJDPRXVyahbLe9wfjh6TxeFwzWnwu9Wtd2zn1eMvqSNQ4g3haeEUTtEobBeZyzuq5efdudJQynv98rbzpX29H",
  "key26": "3tJmcyYtWX2yy3wig7Z9PkM6AeJ1AqTiZpgdAxZnyQ934kE1wyBPnhhUNJU6Y2QRCXoNJB3mzYPQFvR2pr7ZKMiu",
  "key27": "59hn1efG83hMEoPo7RbNzLET1SKy7Dr6bFg4y66AaWLE4LbSXdVE4kcZ2NHj5tSgHnDz9Mua684rqN5ZWjWwuwz6",
  "key28": "3XLypj5jfrYrZapfpG7cSvjg2zK1vMiDkC9QnEXp4Lwqr3Nbeig3wGCmTi8Zq9bwSPqpQZTxQJTgnjJw1yqfYL7S",
  "key29": "6244PMyjSYqU68sfU9jeuSuak61jGXexDQK4JZDi7PpDnmBotTcr6uLqHEAb96BX2mnfZouhjENQvEDXYKe2boZv",
  "key30": "5ysSENgif2u3Y5zQTuwPQvkXbUS2LBXbZZqqaqT6VcURpAVot8g3qJ2TxnEb34qHGNCFYRdL91Z5mGg5Tgj3skrE",
  "key31": "62EnHP1yXLBNXf3Uixp5TCaT3AafMveyWrDswkgPsPHiwrFw1XgwZYzqFpr6wUfLtf5bqZkbWdkFs9sEcoCef4Pw",
  "key32": "3m61ynZRCkr1BPeL8umcGyjCnqxWhQBe82SEmn5tiAjjafZhscTCCxG3Sv1wiM9e69r6d5NBt73PZm5Djc7k5baF",
  "key33": "2PSA3oHUr1Gu98V7PgW9L39iH23yat17GkX9fJUs8ArrQFkc1e4peyrmv17cjAR41ZEGEty7KpYgqGBze9waHvqL",
  "key34": "exZ9wSGSD7zAb2D5aTYUqX51eMpkoC7boEvaPMbFdtBqdY3cZWfZiXaCevhYuCyGEWEHkPjDjxEAVRRUFmG6hfJ",
  "key35": "3Ny91Bb2i9YbbVaD2yEAPpDPNCWyg9W68Pbt5rWe5v1gkxEyBdrzGS8qGL6WP6gnyKg1xS9nFQDQqZz8RoZvxjXd",
  "key36": "2FUAQwDCVCEU8uVMzNvTgQGhcK6oB5nKwijJTEhB2ojQTP4eRRuhR9wH9fymjYgoGYtSPYSUQPdaLUKWoRk2Acfh",
  "key37": "3fokaxmct6QznoezrSaS3ootyrkKMgy2ktRQx5U6VjHF2YQcxsqZ36QzamDQC1QZMLpuMWfwbTNoJz3XXxdB12T6",
  "key38": "3RbHZartfA6mTHs4NLiRdxY3B37THb6hbLRLFieXmENURiixW4QUbemfqnwCU3Zx6xrww9srEYyDXNssCAm5aBWQ",
  "key39": "3t7G61LtG3gYa9Ygow4f67oSvTGa839qm6bA5Jt4bGQmyyZm7hLAbzA9fUwpFv1Wwt1CUTXswMAE9o59Ag6qCJfF",
  "key40": "32jUpT65iueNSWR3xbtNGeNiiTacyLNHGo3giHEgT9Jje1m3fEHVfBz6qxEP8uFHWVVHjp1bAn9bosLCBbqXVMXw"
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
