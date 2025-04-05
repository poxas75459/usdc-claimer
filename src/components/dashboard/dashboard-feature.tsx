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
    "TnDETtmcRPiuMEVxqCJG6CbjYrNVTqNar9aEP17DqWBD4AwAoJNhTFEptNQuF1yLgo8BNcg4qf4CWn4KaQeKUK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzvYiEPPUZDnVaYKPo3zfQm6Z8arTHnbkhKtFfYq66LW5ne2HLHRXXEdc6GE793VyftTzv1ftSoQd6Hdz2vA7vV",
  "key1": "23jHqjVaW73B1FR3LgZtQaDypVPWFLSviXFoY51Tp2LxG9X6MXrpDzSMrB8quefhYTW4KFhbj8JZwCsN2omKfLck",
  "key2": "3UsMHQrcwTTwgQnkHXx8v6pqji4k5SSZZ4aeaS9WXA1Ngzf9gWpn3m4DrfPTqJVeD6H6GDaezNMmSNw1NrZXRaNi",
  "key3": "2fuwRqYGjWawS7NhxhXjNXPccK2Rv88ixgDk7Dp5SWi68oyhBsXFd8uWXhhyG7JgSY9ofS5phsuyVivxYxigRmAw",
  "key4": "4REo3hQS4JWvk8QFK9z9gFJH3dR73tMQyRa4yTyzozkeSwnJYMfJs2qhXMkMLVqFk9nHmKsyDymLRibZYF6mE5eW",
  "key5": "2kiTG9sPu9NyLuKKrN9FnUFD8QoitqYdYHVPvUgWa8HfiSi2FLnZJEcFSPKfMtgnCZnDkwE4WXLtHoBQjGhvLdzB",
  "key6": "2KTZ6EEJgmHv5nUEpMjvkfUsdSqgWgKZXiMgdZ6Y2FejaGrxCvUdZBcpBquwHW6joJNRArAmsRzBmwKSXGKik66j",
  "key7": "BQttUowDy1g8tNiK7T9pZYjNy6aP6rFaQLvvyEXmA6fN38QVUBcoLads8twcW3hjSS1N93g38u1vkvfS5V4dhzj",
  "key8": "pvpMJNQ1GZ1J4GnNbtAqAYJ7nQ6ThA38HCpNdBppVj83iPoG6sDvvbi5fJ9tidnKDynpUGsd7gaqTc7F5YjG6Ph",
  "key9": "38zDDZS7KAQoPCqHJ4Tk2qdPwXLTWNzkaV4u4j6JgheQVZCvwdqX6wtSx5R5izy2t2Qg5AqiaNuM9UW4Wio8gjQe",
  "key10": "fUE5AcBvhfFXbo4LXAH1cDxxZhCT3zWUZws9sjQBQCirsn9KmF866obKQKW29dpWcbjNJw5wUKivuvLamR1K6xv",
  "key11": "457HXHY3Y8REKkduFoP4a6AfprrqbDfX69vrzeDJTe8ipzk5oFYJqhWVe8kYg4mdp4SW9jtCb2xcyGSzss4eoHh5",
  "key12": "2Wc9Py4oUoyHWLpgHAr9ZMzKQ7yigH2tRW7RjaY6gc8Czj8KKtQVGeucZAxRoAzGNpWbW1anipQh39xwoxLbJB8U",
  "key13": "3cw862irkzsEXja8iK3cPy5pB4gBfevQYHhT84vPXTUcA4JK1vJJjc194qGZiQ6pJje2bd3pf72SSeewDeJdqNsp",
  "key14": "519N5T3catoNXbdF54HgP7w8vLRXmN4H2f7GikrpejvL5sKKWSosGErRNG2T9q9UjXJwcEX9uCSNGC5RKbH7DunD",
  "key15": "3mCGyJnMHEgnESxuYkPEArhhXsBnhZwtjaEPV2g6sNZ2mdGbQxCU9of8yXSAGawtKmMW9P11SpFtG6o5hJYUunP3",
  "key16": "5p47JbMMjTrzjj4oVnibYx5R2mwRtZUbR2k9ky9qfNLSaiFQPpsQmHzC9qRbAAA6h1ixAo6HvKHv1TL4hg5eLDiE",
  "key17": "3w6aiMwzjgGPWQyRnmkEVnug5AYiWDcMz6ATENv9UeghfpH81eaiAVu1kLh7eUxC9fTfmY7f9YMvgLKNqeYKpFag",
  "key18": "5ab7yiKK7rBGJwNzKLSRXEmPvRffayLsBa5f7da8VDgSKJBNwR4h6yyiDYMBXLdUbLH6HYDweMo7poXM7GNdJcyu",
  "key19": "5u8XEjWMG9FbQfD6bMYZPxBwr37Xo8uSrrBMJL9LYCQWKKzcsCeX7g6SUWWzcwjhZgX6kFdvsBxk4Y8R71UUnAgL",
  "key20": "577f9hbDh6Rmv1kuxPb4cbjUf5sk9PgeRQc6MuPwHaCkSLiibb1Sq4cfbcwtgXzPZyGQPxcoqd6Y2tRzXzpNi618",
  "key21": "66VxHzC22ez6bLFoSBGz6EXndGskPgVWRrJ6B8YKrLfqEP4ZnAfFkQN66oYm3saiYD8jMaskoh4MCbyLWK2ue7FH",
  "key22": "4BhUL7hYJRhzmXxzPNsvo6p16NYxoFnMdgg97YwEuBSM9DE3HWDaCy62r5qL5nk61XNw4znnemRa6HKZz4GUTU7c",
  "key23": "x7aUCSJcKX166xuzrdpbiYdoh2UjhJVM6KgKuvBKz78Wu1kd1YqiBn6NDVBVToC8kyH3h4YBcR2aQvns5oUFyG5",
  "key24": "iNbC8yWSyR6vpuyipUJMabKBZhnFnsiQqRvNsFTinmQa8yjNapB5CrrhbcsnQWc2r9mr5ssJQV6AJHDzspmorJi",
  "key25": "sdF6Ld3Y82xjyTjFoJwGTeHZNd82nQYvBM7NjziJMoSRqbbGutCYB7KoiDDdsY2SndnY5x8GsTBVHtBZvZXAAYd",
  "key26": "2wBWDsbRkY5X1qKuCkv2iw6rUFbuZWy23V9Qcb2R24D277EhWWPnTGCzvab2GvGwHApN2cd9Mmfr4djEYZh5z7T",
  "key27": "2L5nYj2gfspg2uWv4o39k35qiEL4M5X8XquTrHaEPdsjB8MNhLZcUZ4gYZM3HBQHegyfw8GDfUXgmhuKFEjBd57E",
  "key28": "63SuSuTLkpitrsGGo4tYWeZRTecdjKwxNgx5avxxmE4buYPyDrnChLjd3oPFAuaK77qTVukjkody61AF2kJ4VbyS",
  "key29": "21cEggiGZZbBZ8MwbhPsZ8F8JQ21bFnH5ZpQEc7GfXxHY5QFyQcPRa511VikwtnCS8jeiKLTs14XijN2UTb7mW6m",
  "key30": "4bJMkhcvJHv9EPCPTqg81aAGvUDQXP5zixB2ARpT7DCYhUx4Z4BZ39uhwe4XPsyCfEwyZJ4yg8FdsrmarKpehHkw",
  "key31": "DVDXMbWSUzKabEYJGsfpWq9qok3X87y5DEeMaBGg2h9f6pTwVVNHWTbHxVodTDr8GsLkQPpWAeaQiQeornB97ZN",
  "key32": "4kBG61ResXpRRTn4kP8jrkiiv4f7yrg5DRXDGfx2cFB86tzyF4oXxdWLKTyP7Pxsctvhmr3pEvBLV9A3z5qgRj97",
  "key33": "8pdLnH78jhBuJ2xekf4CdYkwHNWKgrXMsbWTtobjA5o1gsVJ81NPgjDQmL82Mj44PFmkPGz1VoCHafUrkoEwB41",
  "key34": "4pxyBmgf2smuNE6wkV4EGoePixSkPzrsxnEo1ZKGmEDBhyaZ4C5FZA58F2WSQy9zEMmmjTV9jA8DsAh84QEvoDVk",
  "key35": "4n4219YnMXZsY4xcre8fVEoVtnxFnipzjtaMKB96ugaqUC38bTsdtjahY8qwT25PX7YB2666SPCGg7yLGZyaU3UA",
  "key36": "499aF5mECy4FSk3Aan9wzfaM5y4tCNta1EWjMcHETsZCnZzsb2Rj4ES7uHcZ9ucGxmUVhL94rGhRTQH8QgYfc7no",
  "key37": "7QUY9bVg3VbJpkWviqstDJ5rcUMAqb1upt8JLC2NGm65uUaskt76WpQLbroh64rwnMA4JSUEohT1f1zR8mXeFVf",
  "key38": "3ujxLD98dzzhuEvGHhCPvi3kb6X2JRhJso5y4EVybshMXiZum33Dc5WSRMrYVHiWgEcpzPhKkwx4yFtjEci5uSXe",
  "key39": "234RVMAVE6StehW2BNwSJ2T1jTDBSBRSHMMbj9anZ5AefWRQTzWnFAwfgpRvYYg1Uc6352skHMs8ggJT6McLc14V",
  "key40": "5DmEvDW2nvbwZf55yzxnPL3pnsYf8GrQXRzXhkFGKmuw7ncq1jeBdQWnxxVvG57FWwsko424gvPiUbSyzWqhfoEo",
  "key41": "2SJtZv1Md4Szk4FZsV9zPweMZzy2kpuGzATyakpgqLsaJVGRWy4DJW4skyXAGVe48QqhBYZUQdXpXX64DZknMvZq",
  "key42": "2E2v5125hxsiH2ZMDKw5XpiXtjQwTZwAcR6gje3SY1fpPmJYLX9dZuGzdLSXDYPY3PeqXYsBfnkB3fqkDzKjZC7P",
  "key43": "45eRtheZzzQAq8fi7v7rHzsdpBpF2nq2rpw2hUwV9vPUnVEtrNWvgxHiJ3vHn4Sr3Yk6RwLJSaWMhPFdHsoLLEvL"
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
