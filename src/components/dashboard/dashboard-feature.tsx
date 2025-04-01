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
    "2bXK1aRABf7haRQHaBFsHqw66DWHnoazdmGm2xdUQF9ePzYb9tv63jkeFpkxwApD8mmQMp9aosyLRwJd6RQvMFCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKhLqJto6JVimyX85LyQQt2gBxWuC6B2bEg2tsdfZDNMgEqoCWPC317m1k1Gai5oxNsaNSABZjJuRFqKBThPzht",
  "key1": "3Zkz2e4TC8d5G8pv1U3un2faBh9AvnFp9jNUQKJQhX9MESSfTqwmFUfaHcBG4VKEoXEkisNvTLjqV6RJKKobhY8X",
  "key2": "2buZMLQxAeiKxu2ZGFYwzVVtu94xj9bgrsjKXRUTESrUs8BYGd61cPgn7NBFf3cocJLVwtYyKu7CsT9UV1U54R6P",
  "key3": "5cWvZTx7FNW2MVHt2mShmW8M2p4nEfaQnnAuAAySEQB31fFLdg1HGu6iCdXphfHsTSrDqtQR5Skna92uXa2UQPTn",
  "key4": "hc97rrQ233fxRuUV76mZ2iGizukhdprPArJzzP7ZnSXTZNB81FEV5GxgtXsNxUHtutFSMbkGjBVqwC42tdctkZV",
  "key5": "4ZWTfT1xAW9BWAq5VuR2VzKPtBgVsrugohYUdbbmd773JHJPqWeXs76cFtwtdpmEcg49Wb7VCojQeQoFE6568F4g",
  "key6": "62pLZjJU1R5MHnJVXHAsYexHa7qNC2Kr2v5ydJs8if3BghWSXM4LVrk8nCZ9g5UwFEekdbboSxwBgKiBfTkkEF3k",
  "key7": "3r8Yq9AS1ZecCcQQvpQQfXx3DwtEx5mBvEybCS5EfxiwYR16EZf4VGEQMZnXyThLPsppCiDx8ChxJGHYN8TJPMxA",
  "key8": "4K4HrPMwqu75SfPssZBnaaXthqN7ZGszs9DB4TzjzX8iMrfH6Uryc9e3bBLUexgiwhRbEiTKPT1ZBojU5AkvXdHC",
  "key9": "4ERFyiY7pYRuTsAL9V7Dk1DYS9HmdzdSvhfkZvK3gK9YtQPvZvtRnFQoha5nswwcPrRxyP2m1yAUvTABo5dH2qHL",
  "key10": "BSq1hh7EhXd1F1ygmomeCVhBYCYktKdBtdVNAPJ88r3WaA3WLKaNJF1cjLWHcJFc5gx8nHztTaNLcmvQNbMwRoa",
  "key11": "6fPiY2TXNW2uL7BEi1kxEpDRa9ZjdbgKMwyb4Jph5nTroNPXsa1h2WaDFUJVwFJYNESZikx9dUyczST7REdFbGm",
  "key12": "26CFXTtKMjmUVKNV1JZckxYn7vEpWyRm3y7KJMNVsRVYxJEpr1D7qk2jGXvoVrPJQy6h9VL6vJPD1ZnQzqzojQj4",
  "key13": "3efmfD4dKAxRbvkQXfKooXBK784M1n4EbG7abD6qjcyu5EYJUWy7SQ7bo4B5rLk9M3Ym696PX6HN4NnaynMnxg13",
  "key14": "7BeFGkiB3yuJeT8tS2y6ZG9W4kxKy5dpKmNnCiwYCZrJg4nn9kFwXGACqHJwEK8fjnGfHTuHEiGBVQscMXwgar1",
  "key15": "48tEH5aSBEFzKWFpd1GXio5ShPGYjZCiqbBwrpyBANfmj5KL86fgwcUkHjshzCVga6fLScAkDXyaXTTHVS4hZ9w2",
  "key16": "cJuj8a9sq7qcLj9168VaJ4EwGbvkYqhFPRdS7ZzxWX8NB3NRDEmQRMaGQSzcnzLb1JyLFywd9z9EkGVSL7Er3MT",
  "key17": "4eLhXWFYi3ZqX9oxX5ATUbvoGEUAgNdGyWrLc91DZMfdY1afyuYVXCw8nz5qt1ncPfW9QLDzSBmkPCYSzN3AzyFa",
  "key18": "2ckhBNgjfW4arjanWKyhXwCWX9As1eNJs5Vojwrx3JDwdxAsmgzp6Kc9AWxZviyGnbaDAy6xFRz3ChiihV64Jzv5",
  "key19": "63snoQbqjdgZsszEQFXf6XqbUUQyHSAZ3ENsV6THcDTZ6GELtAAPycwV1zieLbZLt8LsZWAjYg5QBzQTKmUiVYAp",
  "key20": "FCMMXFC8bE6zxU2DF6Cc4HJLmjD7bCsD45oFovxYpimkNoEHkJRGPG7M8HqFn8KvttNk8MYcAarUgJRKz1iVtQK",
  "key21": "5Fi1rmpiwW8myNwKmzk3NDk4KaBRvEESgzHa8uzVerNwgQx2TwWq4rcHHkQtwdU1sTEs1uUnogY524XCMNjUUKGN",
  "key22": "5GnHy6sRPAnXeNNyJfDtzoKzavuTspVRAjLyQnaM7ZRkUE9ZH4MU7YATvnvwn5iNP2jGWrdEm5ttP8UE9kty6GqD",
  "key23": "3FJefRb7SYrmUm8zogMgqqewktvnuGEEoi5qeigXtcyTQD5CfvFcTTLmKHTzJRcn94XqJzGP49r6PTvKZp4mu2k1",
  "key24": "q4L9DdYJNmWgFtXUAoW4sqDu1PrQkkejDRdSqn4NLQpHsHW5BNZXti8zWaQvDEb5DxFWxNLWHUZwpPDuJY7mTaR",
  "key25": "sErfzMapbfcFrDKdWc2zDnh6zSneT1L2v3uko9nhnVg12swMwdqPqdZpxcpopBwJjfewbTxboVF8pQWasEc1DsJ",
  "key26": "4X7TsCEFJfjpGGy7uXagLSCcJNzXnUrzJnQPTxk6EpocNH5A38CrhmmG6MATyZztgQh1jnYHrnXCt8CZJAKgoxK5",
  "key27": "64w8daEZrEZM9WWEuhfVxMnrnSiWkWnMEh8oMCnd9jbDy5oKuF4joJMqC1zR2SvRmf9WUx8As5bWxV4owGeyK7PB",
  "key28": "wyjFvzo5x2KrqL8rNSBcQCng4nGp7WfYtgMsf6F8KZdg5oCGMnSFpjhqnN3Ce5t4xrbsiWQKvdrreC9Ygdm8TRR"
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
