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
    "3AdvMK188ALN2mNdyNjW2jGBNrMRMBZCmNoaS2GLyaPYs3zKFvB8KarmBFPCrsGeMYMz56KWHpxmEiBxHEVBAnku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUTyn2kbGptvnarnpfnwSAimvtUKXe41BLDPPp1ajtLnEeGhR3r9cJPFmNpjKuibBodPWiQgyBxoiiTJYos2QuZ",
  "key1": "3mpJVuw7vneZ2ZAWsU1zrqHz4mUWzh8ubiS7wp82Lro8aaNpf67hFqvHGJQpHRZ1KzAR8gvfKmnUazWu5Ru67ZqS",
  "key2": "4LXCsv9VvfMgcvkqCynHPdRHmRHhToj2EYPsEuWbEvBC96fQm2HreCHwoAEgBHuG2jaAjjvPk9rpR6kijwJSXHWN",
  "key3": "5BoTLCiq2XuqDDNZ6zTF3YRb7PagbiE75aS4fkAGJaMzNwFXHDbscXYFWoQBDTuwSZ5SHneVMLnMZCUcfyCv8RYn",
  "key4": "2QAmrwAnL5cCgkPB6KLWouwbz2eSk96SFMuwEMP8mxfkNgJPQV44wXCH7XT2gAqy6g1Kmb4LNt7bFWr9PXcbC77H",
  "key5": "4LrnDNpMuTn4QWfaxZ9Uat87FxPSULCL7iQqm6skbM89zYt6uy3u2C78t7Xwj9JmUdQz66EP2My9ZpWxwpkYxrBP",
  "key6": "jRuAc11huJ837u4ehUyDtAZDnKLxUeaQAqUtzooH3zKWRqjkvDB72zEtD7AWyRFaB4M6Krv6YireeeNvkC2bBEK",
  "key7": "2X6kYisuPkUFtwzoEKckB3CeosVUVQKVnYEWHxmYrWZrPtfCefvi4mmAdWCdW9t3oWvxbu5t2fas8NxdLwQzZ7ZT",
  "key8": "3Twauc6Y37jSWt8SkzZ76v3iXLnNJdyYUJj47pbjwEErbtbeLskoKFAiSv5yUjaVKsD34V8FL25t9zMskS93XciU",
  "key9": "4ZXSeWZ51yMadaCRjBzk3SEa6PK8CjvWzwajw8Ldspz2vcQ62r1qvdTQeM1qTgvhv7dacVqN6cQpjtgdZiYEkNr7",
  "key10": "4emAiFvqPZfZyoB65B7SVxBLaVhqP3EHiyayefKDAXXTwxtmwxiJfKjPqmGt21uUxZqg7s8S1xGecMZGWvAFb3Ah",
  "key11": "5dLHirVcrohHGGkQF1h7wEsqotN7cQDLaxvgwjSEbQ6qx1HwwYz1qr3aDERUH5fbKvkPw2CcpAUvpvYSoh5T23Q2",
  "key12": "2rSdP7Hskw5faFkCwYXqKuSayYfnhKi1cHJwrt48WyrNGtCrW2WuqCL9kVjPRk5k67zSLJimgi2KBEH8MUrhiG3A",
  "key13": "4dEhx3S2TxRVyfSa5E5Hy5mVyYk1VxQf3VTnLnZczxWWmSmnPXVQP7J8mJqNvdeHKAaiBriSim8Te5eDm3fRoCqF",
  "key14": "2tJSkmkhBS5DzQjAkEsXiZbYortCjSGAAa834MHsuTeFme8ZgoAyEX7uB8S6WRtFboFz4BvCYgt7xd3tagtY1ntM",
  "key15": "3GGro4Qvh9szHzZbcAbCXeXu1W48jAMNhyCXKgsb9mh4YzdMzdvueMJkYpubjX82VXdJcpS2GxDvj91Lz3WL4zd7",
  "key16": "4RzrsSBNpFkkfMP51tkwyLFNzRd656tBPyNSDU6AkqJspDtDpT3WMAYAyYkB9o9FRr7nYNUaxCHUvQUUo19GUNWy",
  "key17": "59XnpusjwNoC7SFEYnGJ4i7LwVHouV5HK42rLBK4UepGt7ciUDyxMbY5heTwvvZeQ4UHQkjaUQq852MKroQUSpvn",
  "key18": "3BAy4X1ijv8hgpXGa9ZF6RJATQXsanNrnHV12VJiW9VCLVgA4RzVY6g5GvKRJ8kmWYsRbazoZhG8vHNLRM4steqP",
  "key19": "3kbvaAKLdLPwSGGy8EDwwQeJHDqCE3j4kgo2nAySC8Tdoq4vDEFp3RkJYokCUQmuCsv6HQsRvc1KyiWjW7x6148D",
  "key20": "2LorWYVwZD3HLmaM4feWewcSbzMGWgsE8GdxE4K1cY3TfQ5wLwrvkqes5wpeu9xQUo8c6AMdJYYHwk1EzCuisaEM",
  "key21": "3svaj9JbSh7NuARNjog1DMhBb7qQVvTXbLxQxTXHZWi8FsMChu4E4o7g1LyE8Yj4eRBErB4nfuej3FkG1VcfSAoa",
  "key22": "2ErWWAJH7EDAFzYmwTqudZWQWKghACvFHrLd7ZMQcLPCpedAYZETsRWE4F1ZycYCieoGDQeo2i9kk3yv8x3Bb5hG",
  "key23": "3bYPrD33MeRHeQw17zC1aJKD3b3fjEnptcXrznByem1Xos5xTVquTkvCVaNHngqQN4azEVZLZy7YRLemMby6QQP",
  "key24": "41EJtWobyZnWAe59MvpycZk6Z7Eb556aMYHMCTtRfuZmmcByA7rKtKBnBnZLxQHZ5bdtQMSeJ8tDRUmDYQ3Pi2tD",
  "key25": "5UZnKNYDPJc8w9vKB8YXnhPwihS5ASx4w4NML63JMzMAJLUSvYJwM3JA1wNtuKxCkM6pHJ3jhJGpNjPEaqrTRz6w",
  "key26": "RMBK822DtPnz3c2TCCmatd49MiXJTC11umD21YdeGu4xX6MmGCAwiiXf7GZ7YGs6iPNyrMg3FFBMva82Zdobtvj",
  "key27": "W9v2zvyrShYMLqAouBE7weYABJUCnY9AkBoXmmr7NqzK2cBZfcBPfvXZH4zGXG9HwSNNUDk7fhyic2MdAzsLhi7",
  "key28": "4cMZu7ndiJmDDbDwMy46ryEcG4uniboxKjL4eHVhu6s2ToMBzpuUdAiSoX9URLCph68FLcYj1p69XxF57MUG5h4m",
  "key29": "2Pq5r56UBKQR5hN5nABfFskmVXTuikGnfCUarsx18PLn7XiyPTTkSuejUf5f29DTG1mDR82yfNJfYtDURQdXo2k6",
  "key30": "4tCgrnxWRn1tXzwLJZwcVVhK6yUF2MN9JpSf6cK4ABSZhYbf9v8AZd8QQBQjwxavXDD4AWYWPvpzUmn3ZV1DMaw5",
  "key31": "E9rjGGk6vM4ZebLnUaskNvfhWWQUARoWiBXgc9vV7URV77votozxcdJt3W3fNFTscN5bvD9NxYKkTwC4sFTdBZA",
  "key32": "33YZuhQoCpHW3XRFRkb1PQqky8HTQSX7s9vGaWnFgUHuFxrU4kmuMyYM5fXLrtjbU38e4EP57A95kGPzJuyZMsw4",
  "key33": "5WdyGyexbzMsQEApbPVU8sLmqrsWzXrM7A4JmArcw5iNq8LiNgRBxorNvbf1jqsU8e5UqJzMthNxmHogQPtpPSFZ",
  "key34": "3QSwvrYHroUNBfesNpokJME5VLufjdjWoCGdQgj7eiD9vbiz4fgm5QDD5u11LY3rxT7CtoChA55hTxvHNyT8PWH1",
  "key35": "3djMxWrCxUQ9xWN3FZwwHjbgSEqjcjPANzmddqv8HZGebMBLcZvwaCcatgCsNMcFHHS6ZZtrbcby6Gxq26zxtrAD",
  "key36": "4tW3UzArjxf4Maf5Uji1YDhHRkERARccNKACxY67LZaSypkTX2svjfKpuqwLrvt3Z6Z54zZEEjdQqv7SeF8aqc5N",
  "key37": "5YkDrP7w3hsVwSGSgVNUDoURKrAQtM3cz6fswUS7hY6pXK3nC5svhx7cuB8iU2CQy74WtxfjooErD5fvYKCPP9d1",
  "key38": "28Pvi6cTxzeKeMovtW8jhNjHP5KEhMavQHaY6xnUybUN8wmkdG3kQvamD87mxzYmkU4QrKeV94qN31EBsCpEMTnp"
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
