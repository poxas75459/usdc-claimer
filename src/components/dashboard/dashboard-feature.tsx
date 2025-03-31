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
    "22qDbemjH8eZ89GZyEux7FjM3vpF419qRzr9kGTtB32d6KXyFbr1p4UKC53hC8DXqeUmTwMEefMVq7M9rRnymK3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tvxcwkqyL5uhRtUP2WKq2DJwt2v5VKiqjTtNap8VdhpPG7wdmgPj5AvxA5WSUxQAZsPsPa5E6NhHkdrYDzXNni",
  "key1": "5NR4Gi7UkcK8RxKqggnRTdFG5xPhXMJsfmX1BfLxzAP9u7nBmT1gDp7fd1KNXmkciqfm4nermDiq55wxxfSFH6sa",
  "key2": "429rxBc7CubJDfnQdYNN7vVnxTJLzp1owd7eLPSoJ9TAb7NM77xDDKwGXaJkNxaWmBD5sBwGoyteQxe56TEpcDrs",
  "key3": "3EY7jHD37FpVWHgyBtohazvY2RnYPDMbXGN2LWmjQk4rsZvZPa9LMn1yZfKWzAMGfZUVpPaDhrZmBCvRsKjes2vQ",
  "key4": "Bik4kx6aLNKJovJ5iWKTnfatpcktk32xgAw1FqciE8oA9idPccBtSePFmi4x45KzKMokqBzqmgJXYUyrPRbbrVq",
  "key5": "5zYpTo4LCwNQGKGezzaWE8Ksa2knYKetkUk23FqkHtqHvfR67J9EeTvJGUNAwwuMTDEcjXfifVjqHMxnieaBgqDD",
  "key6": "3LuEUtCt564DkVQWmT4fEwURDc8pDLhRb9fubdGcNnbyUC86Xwx4EhR1fSBSCcoNFamQXe2411izG51NtQqAPqLH",
  "key7": "34zddBV3CX7YzTcCqo7WdsePYdqFTF2jWe8k7yBTKvYvnvyowrWQVz4zrX2H8P1W7pdkwEPUw4eXteMPVyJRSGf8",
  "key8": "36vvW656sUHjXEuk9upLqj24vp4AHXgRWXgSW4tozXct5JrA1Gh3pHUsG7krq6DGTy3uqe11ia3fTKTqENt7TeZd",
  "key9": "2LCACLkSFDQkaCdFUBP5weGPz38zDyGNB1kuEKM6k2LQ8JzdhxGfkBmHNQe3mGZmZEZdS8J63iPf3VPnDTScXg4P",
  "key10": "5hUp417RR8CQtkRTd1iM4LdyYkK6WfWqHPRwCszeKnU5nS7RHdPibgahhKHuTnaLDDyqJuFtbck2Yxz2vdqZAz6X",
  "key11": "4fbz2uv85LfeCh8CPFbDk4CxFnDL8td3RTAHSnSRrFeP5jWhERzb7MZufY7h4cN48E5M43wzNYDjcKbLLYf6Rk3t",
  "key12": "4twvFuGDnCAPKWwv2Zi31SMet43gRbV8VLMHxYMTffh7AUanW119JwT6hBnGqJ7aCGHzeRGMBnGh4xVupmri8b6g",
  "key13": "3TPczuxyYU7hvyFoJbwkuEBHZQe6cBLoFyXHhHMu11LfR3hHvo9eShWsu29hixjMqmw3tY9oVkTb7A848By2Gitm",
  "key14": "3VFDtEU2f9sKvXZTYeR1tiiTpgUWJduL4DF2nfJnN9yu9wWif1C436kZBvZz4U3zDqwXZLk628Ye8F56PaZ1iLtN",
  "key15": "5Q7gCpCrB28wL7N8dFvzc7rfF73Yb492Ejx9Q1bcg3RaRe7o3zSFcorMWU72apG7XPmDtt2HTSfCFDSKiXP7eENP",
  "key16": "G6nRhN81Gv2Sh9tq5zv7MDEUNRESNzXWW9psWNHNi3Y7yeM42XiTBCuapFuAFVHXNUQriHx3qtJBL9dLgh1DUgp",
  "key17": "5NNrir2smKAUerjYXR314M3PNH71iacfFBy2KhWk9XvynGnq9zKiF2qJPR7iZ3n122dcErZb763tjGYksW7edpQN",
  "key18": "4nw1GgGs24HXNKAUcpGmk2DM3GbJ6XAsybr93yMV74RZpgJL1brjAw7A4cZLS3cLgiS7LnZbyKir29bRnPu9tzLs",
  "key19": "5DPnzQHxqaoynJe9462QvMTHaHToSpro8Up2iVeriMesu5V5BQjFWVw3i5y1BcUSdQHhAt3Vdz5BCEZtksJfJXxj",
  "key20": "3kZyX9tG8y1JqTmXWxEzMAtpaX4W5dZyhsiNwGvTnyyCyvioqjNLmktRCZeznqhbMSUapp3UvThh4t2xf4KxmmZb",
  "key21": "36ptniYqPeZhTuxF9pSyreeWc7uESNeCTHWYSZqFV3e2or8Ugh98yNtWbwo8KoQ3dg4dYW858QszMR5Zmr89skvb",
  "key22": "565ZoSPMqsgUF4H9sSobVY7AWnRScotfiAR9ctqBPcpKQXcsW2Geu5gFgwoQb5JHerphbEjwAeymfrNiiSPp7h3d",
  "key23": "23uyAPZ7pp22cmQTibMJiHfEGva2xda5JDQSXWShq1uZt7PH1NsnfK4AyPz3SY8da7skuudbyyxrpegDu3qyiWmP",
  "key24": "3Qv8EVofXiLsfpYNtxu9weTkWuGnYVRJvYUjwRawt9UV2mjzj7wghdTBZUTR5u9t2kc1ZDHP61bFgfDTtZRXC6up",
  "key25": "uUorvM2kK9RQ1EJfUtJ5BuuLGWK1JZccj7ibeMmVupRmh5sSM6uAw5UHQi8rxdTo9EcadAjwooRFRkGiFRayLo1",
  "key26": "3CVncM6qw5Bt4ZxPYB7VWX9MvxJ5tS3sBLFFuuaTZes2b8mkbtasjD3QFyxos2KSSzyAP2NrRVPc1XvrXbnr3Tk9",
  "key27": "2u2Nfoif5QTQsnS4cXRFReB1WbQaFwjZy5qwcGr38j2pyD8d35RX8yhErgge6Y64yMf8STFPZUQcNrN74rbXYCen",
  "key28": "3nEFUeN1DEuGP6XiwaDUZU8oVKNwzWMsGs81qUUKDecMtjZAnkfoiNxJGxuhCwJpZeFDZFm72smKktNdnBjSc6bt",
  "key29": "4iLiMeTmsGjpWoq8DGZ6PrBVxLpcENNp51PMKPxfp1FLFHjhEwdBEpcuzJS2NJgizdS6nytkz9rN4ztuHcsg2rZJ",
  "key30": "4qZxMUd3VZNi7gmethEkKvMPmJJFC4hmc4MCuruttW3UTfCLTEuyMrEMMA5o4rAL5Ucbb2uP1owpKkHgM7hQU3nt",
  "key31": "3EXeGTq3J9VYggX4NKcGoEF1WxgJLbWVQYGfT8nBmsGTY5oY3WVomePViRYUJbqfpoviWgG7DyxGC7KBzVf3Rzwg",
  "key32": "gJctVT6ay1LLoednFTYUE4sq9D7Y7HthSJAmmftyprwFRdHnvLMU6bhHB5fdGenwemec8QW9foHb8mp7MNwxS3D",
  "key33": "NPEcUeRE8aNXS8FK1vBe8S6nqSGAJgD2QxXS9GfQ3VAFiocd6DrzE7cGvsbGxyjuAJKVguun4Fc1TGtXhmgY5jQ",
  "key34": "5YcBD4hN9LvxxUMfSisy5uCS9zNVQQwrvmgzEGJ2HtyxhLBwSFrosZTUq9qDTN1hx7XvfMGLZvCkEvmrHeLmMovQ",
  "key35": "2juLaSvbqMwX513rv6y7uiCMYuoqoNXve1eDeiaW9h99pQuHk6v4y9VpdzrwPazxUaeWf5hyJhFCEtXsPrGxRd2h",
  "key36": "2EQffwjDEhEzgQ3k6rVjVAeE4N7iX3HU4Ljp9HxmAjN1JJv7Rf8hMVuniENg7vnuTTzKeEfDZjRVeEhGwjxSmUnq",
  "key37": "65jmEJ7ZjdVaKLSB3K2PYZ1kqf5Q1qx68BkyJ1aXktEshehvV19gWaH6dAUQuF8qfCEtc9bsCMkmRKNZSeYw6TuG",
  "key38": "5nQ9rG51XHCcRG92hZFojQUttdwwrU2wxY3iMmY3vXSw9LYRtnDfnnmF2CRTWvfLaaLwc11yk5dpdrHimC9sXVph",
  "key39": "2mFuT9jUDTyuFmL1uku5YmaaHPW4MgEgEFfMoGihgz2jtSdKt8AT4JzrmzPLtp3mp1KPg8z9EtTGnsbuDPHxCWeF",
  "key40": "3KVNFqa3n5Vv2eoYFS5tw6Lw1ey1DCf5FTQz1LbhyogNzLStHraE4MfPPXFkxgrdFmomdwaLM2iEuuEmh84PubrG"
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
