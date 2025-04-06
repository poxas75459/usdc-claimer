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
    "2SEoMc2Xfy1d9s2fPN5T5Ncq3afs2E3fwGoPb6r9yMTcXE4JUXFGt7gQ5cnhpnLyVQvuahrmzJo58bG4hJ5drrrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g1mQVpcSP3MhuaXBWCaeGYABE1dcyNBkanXniocnY3UY897covgDvp5mHxALJco2yL7U8eyiQxLEyvFan3kpGd8",
  "key1": "PCcGjr7thVZy1GfQRJv77AsQ92kXnYBoj7zQfeJGa5572mn4MrM14cnFNYb59fe7YStc8mChLEzxC3HhV4TydBn",
  "key2": "4KHXVxXUuHXgby334ATJYeDWbUSrLSYrRSiUtqUSESTNZW1koVV2cEKBPUN1yAVskuT7cPpZ8ATdGNtupdUg1B1C",
  "key3": "4h2faStakJnf5U7h1ikVW4xq1ZGcpySWkqukeBr7DUoQA8sgxkStscWvLf9KsfjbXDbeuaRoEnfpJ2EEN6Kgej97",
  "key4": "2bcsbEi9vRnzc4kVkFEPAdh1GAk54JgKgqzZ31JyvM5Xwfy3iJMVVT74UpKXrsMXVAzA2VBQtrZ1yT9766Fss8p3",
  "key5": "5V9Vy5EgaeP89xj4JfciydAXMzAP3rtArtAfktntrR6RyLWje3Ku54WHh6zNKHvv35q3hWLq5UZurAPJCDbmxUMy",
  "key6": "44vtgJQ6dq54FR5bwJZ9KtBc2jCfGmjsAqnyzJh8qQDekgonjscHoo2zqa9VE2uyTpujFqhsSQFF9w7EYTk7aHw3",
  "key7": "ENYa3SE1H8zs4DjPPbF4VJqo1Tv5Gb53h9xb9t74kjA5XtjtUbVa5p97oRWLU9qhmiuLoCSVdLtDjhEwpSPYTBY",
  "key8": "5z5GWRTgSbnSpMBuAsNuMzwHwPfj8EhegFZyUcp6su1ZdjfyBsrjppP1EMj9LhqyYpTy4kABabnyebvirZxDnZvM",
  "key9": "GgPRrB38FN7raZBkLEiC3Ln7avMb4aYgjWvsnKPTpXpAN5PkSRE7XjzSBimsuE6VMAqMrWoxNzJymUTXSWFFhTR",
  "key10": "5DePnRiMCcVonLQkqbCuupAXZfbt38gRVTEHtScKwurqqPyT79L2vRnDJLXYXvHUo7wFqFFz1DcuYG9Je1tGJUVD",
  "key11": "4zy7i6nsXki3yFjFqzg2SgnJGcmsQDyqESWNFKJ8dERQ2ToWw7a4zDyUhycukrasFYdCL78G8RVnPz6weoFt1Gig",
  "key12": "4DCgCM7YnJLvKKwTfwZ5TU7gWDnCsYCK4wTNS8UP6SPvzngRiSx4UtDqyA5DN6VS73z42uJKSashMr1K82HKDXv5",
  "key13": "3fv1eNoWSdwpihzP5eQ2CszwbK3BhAk7PwhXSfYPhsoqyrpJNdZJ7CyCXHPrD9RhPLtAiafcTWb9wh6pJtT2o1iS",
  "key14": "4cthY5UhA8DjFXQ3fAGi94fUKF2jU2FiqtuFNLZXrQomaJpVb3rA58GVvnaZUEEJFGzmVXMcvjGPV6JCNXbytK5B",
  "key15": "5SCjezwXUcLyftAs17qMbp1oC9H7ZqUw3Bm7YmVS7CR62V8Y6vsyYjk3Jt2giqLW1pp8PAfxzvXACL6R3wJtmcWv",
  "key16": "44QrkSTvJfgLnqxGPMvKfjV7ENxYU7gjTW9EgsyBey9VPAJ7cjgsbC4GrQwJu2aawdphMePrhi1ujLyQsAJBwQS2",
  "key17": "3Yb3aGcxc19fMkDKyWRyer2j5dXhekN5C7jesAfTV92FgXfHvAgqCA7EQL9bWGwn1v1F9VTAJDxW6HsRpQS4VqB4",
  "key18": "5Y32bquf7wKEbbPveYjW3pBx56Q66doNeaL92pf5AVEJCTFaBPE1Z2DxEoHMqqD13jdBgLzB1tXManJ9ini5Jjfc",
  "key19": "3cd9hqy1D82zyAr6oa34ifd4mVDgXuMGJDiFbggF1kVNrGC5EE7ryb7oca2F2L7y77TbbnbW1RQdppvqMQ2quyuz",
  "key20": "2SvTfZp9uF8JLw8DpGoSxPzDyjW1JzAPGDRJCC9951h6cHwZ6VD5cXSpxXEcV3nBatQmv9TTQmwLLHVFqqQ5u5ZD",
  "key21": "5WhSJiFbP3sVwvqGBE5WnvLXUSGoeXuzPmsYba5MX8MyEmiFn8XTPuD5XgWGRu6JbhcAEa6NAZcXhjuhpZApyLpN",
  "key22": "5F26Mj2hi99zkDfzs7nBvx55f293KbfFKUoUuuCcV3VjuK3jDbgdoDnANkVCfJpZa98CBFcYviWtdsUbGTgch7uH",
  "key23": "4Kr1KUxPnbJcdR7JLu8Mxi5o1ykEes9GF1b43Ds6jKnaiz77VaU9VcghNJFToVcAY4k7vSnJoHVARsiEniUzaRbB",
  "key24": "4PhfaKTdexgLBY3rCkL8UmNfC6SR9ovEUwiC4iUyh6WZKn83AdNzhAKNcZbDMQvFHqjPARfu8C1zFZdug74ejzib",
  "key25": "3kKt4c38rhgZqww6bz476RWU6Nm1acnECMAH3qkxueCxkgQwVkeJXoR9dbYh6PJHCbMKKxGcvUWHz534L7wuLHU4"
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
