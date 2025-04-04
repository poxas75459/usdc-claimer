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
    "3qmH7G7gFjLe7xqdLK8rzwAKCYLDY1cFC8R3SgW1GGmrcoknKL7HE7Cfw1x9dnAGKYt6pFgRV7taRnBNAuFFxFQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MktHrWyzGi3MBb9Vr8hVBnUxMTsamrQtcJDhsetgSw3zGYcEJgDZ7gufKuXQYYKUNMwXfwW3fkxiUr93sZFCKnw",
  "key1": "FRYa3LEZVGv9jFq4TbrWvEpXFH4nQBqb6oNWG7QuCfhzZjzTNbd7is9MLniXCqfFHnsFFDeeXp7h9FBbADWoeNg",
  "key2": "2aENcA5YCCq9yn3a6qWniHXHmpGjJBQ4QBWA7yJCCPbVskNQsgCY79Eba3kdMcn2rTk6bPPFexdzGBFYXnjheKq7",
  "key3": "2pgTy6ZGpeqGvSSqaWE6cqdKroCHsdHjjTAvFYGfA6r9FrYpPJeLa5j6B4ksdbfMqUHUyvyx9YSgFB3H6Y5u1w7w",
  "key4": "3niRArKcEDfCy6PJR4Wsxq7LNAnuQgBYPrNMHemwKFARufLkhPZ4C7cSAXn8CEQJoNXYjwKJrfk1ipJmjyNN8yhQ",
  "key5": "3VxBfxuyHApeZENNLwUoXpKdkMcKCFkTadDcd49QZPG9N1bGrQ2Xhyw6rUzYJVAn5Df4WjcXh4psNuK8krLcKVXT",
  "key6": "yGMvRkjArwNJdgX7p1XxbvqXzPjmmqKCJgrKUDpoyQVy8UTu9i1aPuN5DFq6F6m8jHj8bFsL3E1Numnf7y8ceHG",
  "key7": "51VJcAGk8nNCsfBn1hnfBkTFPPuxJgtJ8U5yzTM8ZoNApyLBaA4F4EVhDKpXqynv8RWMf2ZuJqzG2U12to7bczWQ",
  "key8": "r19u1r9ToeR3No46sQmWwMtwpqjJKXmQ3YiwtUbM4xFk8hCkLawDNHhVMJp23a72viJsP95cWPjpiR49hQnwcTA",
  "key9": "5uW6a5Dti9PqEy8uvMNzu8QZNpMxb3NPnydcS9QY5GSA38BWL2pEhRSwFeqqFd1t8HFZhcWJd4TSu9HgkMgKDSW5",
  "key10": "4qaYWyK5drifrbhbGSmRPBk9VTyfNBLTA1tc7jQwKvsU8NTeYvmapwSofxPGvR5Lrd6g8nXyCVb68Q9k5sU12NpX",
  "key11": "5PHMPSxdbpbtcVTbfrz5tiYP8tnZa9bujGgekessg7o7NRMU31iTrFvybXmJ32cnZ1QaAHrnY1UEoQdswB8iMi1X",
  "key12": "2CJEcWVXbwtinsmVByJ19HpfQAWdnsDqp9bLRoFwcdeE7MnuKdxuboAzNvwRBmpmXfA8yLN43QfspAnBa8qAMUET",
  "key13": "45kk8u32HXBGANvrQRRWaDdxivY4ecbaNzU98J3bH3naEkGgQv9Dxm4Wy7VW7ofcubTCo8bMPUemvS7dAB2ioMfi",
  "key14": "36Wvfwsv1afGConETWRprzecT1hogmKBVKTgNh3MWHTZFoaPHX1yqGBgBjyXcLAgdSwUEvogF7aZnCu66Mjrf773",
  "key15": "zWdBS1awhTnzwK2mh7vow5iW6yB2sUMLpux9kMwT4zrmqvzUg344jxZX8kbfZiiiVjdFUpDvrsdjQErfzcRay7M",
  "key16": "haYG9HjRgcdBgyaZ4Jrvvk9u9RwLhJvGYgUdBnx8CJtM6mv5iX7cGDW6Mqr4etyqtJMbjB42WZnmWmfxjc6HTWe",
  "key17": "bQcL1KoUtTo4tandZPhvHzY4C3Wr2tHGhSy48T4e4ZXzbrgmmmWGTJqY8SziDzgbpP622qUPni82NYomzPf37GJ",
  "key18": "FaiFLb5w6KcqEtSrgHptQC2etGtYSSbREg7krqPZY1rqvrj9mw5h1nNj3btr791B5MyBFtLZ5yEnN1k3FMEKaf8",
  "key19": "5zNkkBtZjuQ4XsuCYG9UsnX3n9CN9B2VGcEHjc3fjmqrEcZbFE5yptqB8LVNtTXdiSdZnjVhcvrREaFLACdwaAVS",
  "key20": "28SgZeZtLLbsKMuL9hWWp5gZdQxAu7hgxpfcPkartLy86hRiZ5WLXvV5TLAPsKZhA3b1LXwdxincjU9eXgFPjrkC",
  "key21": "Yp54AcRm1nGddnPVwsJqiMeSXZhH6TQFVQhMDb4GJf6z9XLvDk3rVZAsXrHU1bLaMRtb51kNJg9BKN3qVbF3Nw8",
  "key22": "5KoYHpLmmhzYibCfPDZCNQX2oHon88Xs28XVSBtfn7aAFfnpDBUdCXKiaqYc6Ws8NgNFCRHr8q3X1n4ehUK7PaPX",
  "key23": "q4bMg3NtV3xyGNmHhA4C2YEqMKLhdUkZnvQpu4SJMj3397vAGjHeA6P55hpVPLw9F2qHS6knEi2yjW73dbKfUaJ",
  "key24": "3stX8YQPXbotSP7NBmxs4fDqiFe6GW5D2A8Y3Mwp5ZwTRwfqXvXDB5Fb4wP9fcMmqJPy8zEzsK3WgQsrLXcHrwoY",
  "key25": "2EZ6z2dS7ww9ktzmYTAgEJrY7Fy6zMEALVbgdBV9knMdoNT1nVKc9AbFUor2pigEF2M3wQKNFkaDTiaGxcnzoMKR",
  "key26": "4pn3YAzL55p7xjkzYbNAP3wDNLxkV6uCehxkQB5nHV5MppsQBTRshUAQzkkMCuyfdCCcavKkmLgf4knrdEuRgcbp",
  "key27": "2iBbz16XvxNpHmDoDESjQPmGpjjERrJHZVfEV8CcSWb84zu35qQuofS9w5qjuNFtfGTuzBQetoc8q48pkgc43NK9",
  "key28": "3D3VHbtxcKtQ6FQw15dsKBQp72N3S1ckL1fuKUqi9D3s12XxPsXRCD7TibcoehEEZqX5EyJoywsajsibuZb7Ju57",
  "key29": "3vaX4FjX5MB2eRamTqMk5AQHDoKnqPB2SdFNieNa5WtD9ToLufN6W1cS4aK43J93tX1anEGyJt1LhKk6tqruT1uv",
  "key30": "4GpFMHzuAL8nwMXtHq6zoN9twfPzrXfCyKmYPAbFC8qdGjQYg43dZicMAZ4J36SuvbpH8Maqv2ywTvjLxQcyS9ma",
  "key31": "66uo8sdAr9NXEYK6HZWKWsS9ttX6jyvQ7bWqzE7p5NfGKeCCtNpexUEy2BudcrMEvzEV71brhztf8E2QdAhACzeu",
  "key32": "4x1GEpw1Kw9BhfHRfckUHqF6RPcM3HegcaedZUmakdFJVoBJnwUBHwdWRJrNvQxYNtq3HAMjE8vPyJxtpvh31AVQ",
  "key33": "5PNa4o7MJqFyrBYsJ8FtzWHJvDcPbM3p5kNEBjd1A36W6z5hEw8jti9pWhK2gWustsNH4BKUPxtgm5TdaKT3PnBd",
  "key34": "3tGg8iMQ4ZNkUBVcFjCpoqgWdfEDpSbEXf4ohTRtYoMbR5mQQsfCtYzL6mTg2aprf2sPC9VXeFUVie6syoRPGds9",
  "key35": "5n184KhEfVjYruqxUioLwoq52PYHUypqm5Rw28Gqq7Hph7NUBLqDU92yXn64UXXyPLyu5t4b2nJjacxrXJt59qmb"
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
