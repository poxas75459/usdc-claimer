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
    "HBeBZRH4CXz7SEhASkRcgT3DJ4sAYehvUo3aCRECQRtEkstrULuy1Fb1EAekodSTAbkFzcXM4tU5bVt7DtJjibE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqj2DguB3Wz7QNTXtX4Nvx2W78KL1oefpPRduPj4zoL18MxHQ9V6khkcFbvU3btj3iAhucFnTYJMwQEujyLRoGu",
  "key1": "21tFjJH6Qwt83UJnrviZJp5wK8FoWHrWfHvi8Pb91Bpuv981HRDFuQBdAN3pEoZCLQ7SRMgMbX8zSCPimhdN5DwY",
  "key2": "2y7gBLDzdux2uVoEJZnxtMAXUpzFfQyc1wQrq5AHdPTBmzG6nygLQrWY4ps2ZUzPWeqKHPAuhjCmyTu2T3VCASZR",
  "key3": "5KrLpRKzhZs2zMo2boJT49YrXEVqpFcg9VagemAvMaSEBFZUeemsFv98GUUPGYCKGmfnSXb7fZW4uDirCmGSuNsT",
  "key4": "4JW4ddSgkVAFHNrc5cwyFvmC945XkaSWNpjTXcV8qEvzr6QSQvguescHpbdTQetVS7iMetp33spC2P2kuaCZCLj",
  "key5": "41z73sxMFpuvTR9sCaf9Y5JhXgUcJqQhi8zVv1NB9TtBERBGYqyk1w7753U9Ubcmgq5DqrjNPgTxrqV8ZPF2VsF7",
  "key6": "4uR4XMJ9TP8cL2m4jf9cfoEsUs9nRGU1RjzBfbvF4ErzLQS7PeC63SGfSoZMjqtUBFWH19VwMfHd47PHnKtXbcAN",
  "key7": "43XSD7cgxVCWLTJamVTB3m9Gny9AQXbK31sEkuRwVaEdZzDMd9diX6oNE3SBofP4CY9ApraMYRvDJaqFknQ1E43v",
  "key8": "2c748FruFuYBGgQ8YHPYvBQnDVHKGZTGuhGtLehAZznyrsgcb5dCNtrE1M1eu42s8dirbbNcuPyGbiyN4S3jrvDj",
  "key9": "57fFsRx5R7k4bMDBJwW8SY8ATyoabXqvcsSmEzeL2pD2HyshvDnsh6rd7d8GyLRsLcUv7LjTum3ZMuhprZtdefc",
  "key10": "4zYpJGEuXREh8dsxofzQSMBBZRe6FzFA9zV9WTZ7PRYMkiGau7KKdXxyv5fJnFgYyoHQji4VJp2zxJ7cHxxWiz9M",
  "key11": "3pQuabbBPq7gtr55fAieBqEMx4ejPTCCxRjQg5Ww1qiURn76JzAxVY9tT2puHG5F941TgmukngQxaWMBBzMyxkj2",
  "key12": "33JqM68QPPgqutHYC5vywSoiNnnj1VLYT3pgZVMtf1GeKkt1RK43NGc49wVo3NNZcGJGDnvkfhVp91XXF2Htaxvh",
  "key13": "bNQmxSwBjCo5XKbM9fzXFUfBGNn4r75awuuD7g9gKvXiDLcAVCU5jCBo2MDBH2BHjEKyEy28sThSWRidMEuRcXN",
  "key14": "4iu3oYWmMJq9F9X6ZpuxAgXWEGtSwEMNW8zYk1whCt9Ri8jvToqNkKeiSi9PjdhL4u9a7ZYEWzANjTECAoTZbtbE",
  "key15": "2HJJiDi8QvGndQnArJJhPYZVA1yfrCPiRoNC8kdty5TSaPzUD7umgKf1SN6VDAmCi7B9MG5d2YQcs5iiT5NjEA1q",
  "key16": "39AHp8SsG7GDDCzSGFJ1tYRWbZjRxHCbtPDQmHqhf4xFjdRpEmSNYtopwWoQPDjutBKcEm9wrHe6s47zg7YDV7Mo",
  "key17": "47KchPFkaZCNCUiuUnR1f32CDeW7RGHGX44w6ixsEvk4ABjkXBw7nsRxK2GY67ZJjYPHG3VyTHDCnz921sVbN4qn",
  "key18": "5Jck13f4EzkRBaLc6YeyixqQ3zXG4VatvDTJVdJnEk1mFfa1isJAfqHtGqRxTXZsC95RP89SL6FFpQpo8ChcvpQK",
  "key19": "ympWzmfoGwaHWtJGVk56QjnjY1cjraKwGZgHVxiSD5k8WuaU1v9AY1VAJVEn2aVBNxoaLD63FeUnyVMSUq96zMM",
  "key20": "359nE1FyAej2FS8fzHGxzN5cJTo9XsaSMog1CvbvDQHgrm8eRVMKMGrfhhZgGvFhfjnHLurMPuo9Vhyg6Y2KAdUf",
  "key21": "2fPaw7VDoZZkiZAosWsZ7u4HTCG7HKX1WLCPFmri2B7LnyonpJE233xAWWN3kABfWrv1FPVFqkXd3NxXoUqxPHak",
  "key22": "2v2pJPJH6Gg8zZ3tG9xq5eD3JT4hbaPjpEHk5eXf9MaR8h7eU1BV9w1qQjMfsSZhNqyCu9x11cD729BppSMAGqTH",
  "key23": "254f5GbmiUHBEdbE8aTdxKq5wV6j9LK149z7xgoZbQceLtXYyfuJVfW8g7FyuPwMMUjKLEJbwaeiKSUPmfGp9P8D",
  "key24": "2EAGBEmajyvNLJX4dajpATJcnW3Pq5nQ9PQJfjicvorxqaXG5zwSMagWXRjMYCh9W9bjCg3jPVQcnyEDicaxJ4GP",
  "key25": "qG4qLxJGnAh2RPRpeDTJnxuVuY5ffqUzjnjYgTASMGy4BtYZronze3cCettHz1zn7zGikz9r3NKxBWhFtY1e1WH",
  "key26": "28Evc8oNfHLT1NEs2BM8ZFnjKz1frxedgqGujqFHCgAhXibWwU4gs8HKA5m3FZftMnWKkXmGfHZSVf2SBYH3Zsqm",
  "key27": "567yc9DuuRPoGqMnogbec3JG3uGLeiUwJrLcx7A2f8xGutosfxg2uzzWL5zZnuxgjSNxfVi6ZCJBj2ZsEWrhKkA9",
  "key28": "3kLMLKzVmf3YPrZsMdd12BDDZ9YfFUqWYRsUNu3jYNFVdAe3qBZ1B9evXYXZSB6FciFZRPatyGaiB9VLjBAykb9e",
  "key29": "Ryr3BqHSGqZyWFZaYEfLmapqwGgoVXXFoXj1zK8Dz5TfX9G6nkK63aA4cZPvs4bWYnqE3WVpHeonX2s7oxsLc7k",
  "key30": "4Fz8Z8uSRhgaPqhhDdGtG4DMDtmvHJQEPQy6LEVDdQYBaywEDWuCjnKYWXFd7w6tqzUjTPUixR6yWtdL77iVJadT",
  "key31": "SgGCRenfgcAxAr9DWS5f4DJPMUs7A9tyNas47etmGhTtQo16bwWBZqBQ5WuHkZysZTpRwCMfZiDMcK7zAjcbKx8"
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
