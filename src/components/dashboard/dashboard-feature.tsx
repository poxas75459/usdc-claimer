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
    "5JULTDFtPgps4EPnXYmbayNPkdEX7quwsuVezmiiCEwFVVz2h5xd7DiR1AR4C2bvLvfwcrEUWxjAn22bvuTb1JPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuLaKQ7ygPn3YsBpjmRe3X47E2vJXRwhMVfNz7a65kU1i11QodwQwRvFxyrpUQXUSmytFBrXnumjFPcXW7XRCqR",
  "key1": "27LhhQVjBf6aNsqG6jrhAmm3wh22qA7mYP5gjtzXN5SmmmN3VbHPYFWsKtGvTvWuivWo6ugMS44Awc7Z2uJegxMU",
  "key2": "25WvYJn9C894qDAMSTKBTAizm5H45FfUuQbhHwmkoYdrRAbmzZzLTZPMCgbuWBoTGsiDnaoNejiqeJ73yPzKC3PZ",
  "key3": "2LwUdJA2Qpy1TyEDFEdRyDzQVuhC5tFV39KLwupJeGm4AcHuJ37yHwoif8VXrJsHXaJPcrj3WGkN4rpwJmjo1QXi",
  "key4": "66WoLKwbRxLbVoA7WT7WMXwt7rDr98sPupirMvnKWqE9ddb1caTkcB9DaMeDHPfbAmstRaJvFxmkCcY1VJ5MGnrL",
  "key5": "4Kehb9S3U8DFDm9Wp8mNL8oFee12qWCN8dDkULjbFCPrd3BciNp93UFjWLBWb57nF4cZWpJrLXnhASQGviRXAGFr",
  "key6": "3V4g93v4t8z8JPeAaknv2dRLVP62sUnvi6sGa8GutGuQbaVi4WKam8SgZ38hb4wdrPf45W4yy2DLJRKoyRX4s1H6",
  "key7": "T7p6C4PEavuaHhcTQCBb72E117o5wgAAwa4SJmw6JFf62csAVrt4GfA4wRj6c8zqyrGNRbcsXiwBQGj2YqGoJ54",
  "key8": "4HzbmvKcB8BGb1Fpw3N9PtB2vevwD1UkQG3JenSMWf5eN6ijCWdkMUUZGUcK449EyReHRA1WxgeJ7ZCSt3v9Anu2",
  "key9": "41D3SMW8ZLakog21wgjaUfyF5nnQcC37vqdoK9LZY4zvULJsVKMBdshBXA9qq4oZKVuvxMkXE5kqQpXKmtBX4iui",
  "key10": "4GEDSYNQdrtrbnAJEgmdo4nsZEPK4qe4krsHKQWK8ggF8S9AWdWAH8BwiMKJzNut7Jr1gUUDLP6g74JYwk3XqrLH",
  "key11": "DZaomV8ZjwKKJ1yAGi4Se889ty9cnhiXKkL1PYdiq5mWWWnV6vR5ALrKDqcAwyT7QWwikehFUbzUXsRbVxEHAbc",
  "key12": "4hikouGPhtXqC9QCr67zipXtXeawJdtruzH6BGeYuvCrjGYppG9x18Jms2xShayHAriNF1CHQP7VvfEabVsMAZ7Y",
  "key13": "5espscTryF555t6k71ziRHPQmmDqJrRE1dp612p2Z5hZwhCqpC8i6hxNvw3KJbrSGAxEtLj59mNVQA7Wy6GEi4FV",
  "key14": "5gL8t1r6w2cu2DqSvpjf8j8evh4QH87L6pLevUSUPTPfFrypWr5kmkZxr3P8nHDfZKKGCJDwWJYGBZMtqMTKUzky",
  "key15": "2QjTo27poJQdVifukbkUHMmK1vp47mTgFLjmvPHz1xr1c7L912DfxC6YSFft5mJT4dP4d1snUvV2Ah1KqY93mYR8",
  "key16": "2nHAFSucDzmUSJ1JSXSW4pYQCaP5tpbGjDHfuMqhstY3suW3Ghmukt4RvJZ2vZcugRytw8bNHEkVcLsVmXRLSxgq",
  "key17": "33WCxgwoas1zvV4GDZ4suK2btm6BZJSBUbwwREP1ememS4i553JHQdpiBCYRqsw7GdnvrspdDCJNh6RhjvpRrVa9",
  "key18": "2B9wJrWYuFJ3kdoex27S3LCqW3ci9pZaQ5q7UWzM8rnunKhDBsGNGZ4zRCqiyFppPdw9UxWEkzJiihDdLwomAmYg",
  "key19": "2asvWGyW5twD2MszLw5LoXMZJ3QH7D92BWRokFGXQKFh9mq3SoKxp5GJ88UdPmJBYPPVpyUKTraNsgTAjiJfrn39",
  "key20": "wZJAT6sPPd3APb5PJ4VbN8jmcqLZXdN7qWGjZ9SunaxWAX74fU2swj8H49NZF1fJbgEJ9KRS77NpwcVeiVCUSTg",
  "key21": "31Up8kwm2dQdPizWMJCQEiqY8ZMb9yhMTHhqecG9t5ee455BstPdHSYwwhswUhrpnA9NFzj9ATSwRfbxLc1pAboa",
  "key22": "vMd6ctw5hjiGhkgSYEsk5oCzcrrdTPTSUMcPFRn3EEZSa5KzxDBdxbC877j2StHvQF6QVJ8doaMaiNfuukvRy2T",
  "key23": "5y4XwuJq78zpD8CF8onU7cCNFWwMMG3QP3gKWSMb1ST5AWwxYRyycNioiYkeudoePc1Rrb4QcnQhprqxTmWFwDoW",
  "key24": "5W9cs74jBPLdPTNEZygwyVreAJsZ2zqCAWW7xtgAojBr9p3yBqef2fKmbdHYTe3hRgwFCyZcjyHXn3pc7iqiZeG9",
  "key25": "2fUxffgDPsKN6xjU9M3Cm8Q8ukKwfRgzBx7HfuQoWpKZc314KiANrqKNQhN27DxB6axk1TxHDMe4ncBwt9MfhRn2",
  "key26": "3NskjEE8EVkEbcwT31V3Ap9o3ZfSKmfWdpWBBVCsT9fpp8sWbWEiJYYLrKdA83kgnY9JmSv4rdXcz5xpcecaGde6",
  "key27": "3M1bv9bsnFzQw3hTHy3D4udLtforVFi6hCktmArx6gwKe6kDa1tkxjtteCMKu9N3Yq5DL9XoHq4tUnpBoZyorQ8w",
  "key28": "1BckAAsbBxa9ZSbHmASQMitdfWrhpuQUHT1VSxi7Q3JkppAwtN9ehwY5jHrsJvcTLky5BU57QEYtkG7KA5omAVo",
  "key29": "agt4E7Fmj7HpDTtSWa2zcnPjFMzU2ENakmqwxxsrtBdjh27uJMMfxWdsWf3371nSMnLof1mbmBuSQzEhnw2NQYn",
  "key30": "2EpuQGxT4rst9wGKR8cxNYroYYQGo7GRZg6B9cjeHXjyHh54htx4XCig6NwSDpDFf8AEnMW7XqR5QQCSvWL1x3C8",
  "key31": "4K7Dxcuj7dGhEkzxQFxJtXt8MNqoxkRQ6UUhQkuZyv8m8uSN6zRiTnqLsGmkmFgBCoqvhqd6FGupSC4wB9fZJxsu",
  "key32": "3nW4TYC37eMLEjm3zCvXcoxbw1MN7vgJGrsG6gLsmWCdYyiKUJTD6Cs31BaAsfp3awwSRr12n49LPeciLo6Gmjuk",
  "key33": "5FsK3HPcUHbBiF7nDgo5jNn84Nn4sJBLPp8RNa5RbuCFJ6hm9jbe1cbfkdS59ewp9qELBeRj7cNWP1us2TWuQyza",
  "key34": "3FEzPjuKYK9T2EsMeL8KwkSXMM3SyxVSqWQ45GnVWM56BvMW3cMMxRrkVaNxzo5ft1pBVK6u2dsEGz3enxtbyCpX",
  "key35": "4sRHZ7FVCerY1QvVLVso4zHZL7XXoDmHaqfwQq3256YSGyFn5Mpfxsywr6NsDMe3PT7tevE1GLQdXsCKT27wxe6S",
  "key36": "5TdRSQL2sfCaNn6qWC51UHw9CC7B6XEH1qpm2gKwMctddp2mvC2fXsTiZg7LnVqjf7BKL7G5Fez6M6WvWKYvSSyg",
  "key37": "2ySZLvUdHQxjUbEjYe2pGkkSEe6pers3AnJcKpbaYCqMZcbdgEjtvMxWnrUodkuBLmNz1pNs6beStgR2WrShaqoa",
  "key38": "2Wt3WNYXwsy63bdnfj2W1P6aYDF5QvuB7a2ywdfzRthXCRELpS9r3oFs3heF9gVhYw8cjBjbibhvbaU8aBPTFJz2",
  "key39": "2ocNWrUXNuBXyYpqaf7dFEhFThNo7xUbgsjobCyrXcNjVkYrprYAP2q7GjGQRQNZtjjnzubKHcVMSheo1iJjxqRM",
  "key40": "2akVZnfvZapiyMdxjgeuj2X6BEhfMwigT4Eo6t8BvTdRgMvEU7wUdwnZPpFKZ2rtCJPE94pPjUZCbNvkuR4a2H6L",
  "key41": "38tHtdUuytbojWex6Dxj5m47eaQRPAFD6NPgs9uSFoNriou33KGxkfqfikoF957YQR8p8B5ctthDWdpJgafohKCF",
  "key42": "XhXWfHz6fbKwm71qpyREwgE8orXbUXnfVSDUJE1naseaPUA1AzFWH3cfTTTWjZC6ak7UradQECs2g4sbU9HDaaB",
  "key43": "4vMsHkYF6o3uCj9jkU8PANC1vwCvW4DhFiApfidoNVcbaRAusbdDUMRbG3F6mJL7RhEtqFDMkc3APaHYjB2HE46D",
  "key44": "3W3VPVjfNiTB4PUTiy2mp13aWqdwA5gZHBWsDvghvcAMj24iF5Ta6nUREfERgsy8wwWcNnG6fZpU1izuUqTwAYHJ",
  "key45": "5NrBkfnkUnhj6BQDNH1DbpBsESt1tLFiHU98Mhn6zaxhHXHoiNLikLXS6Jwrs7Rf1GFUrCDfa3X7FFNHaa9sWYjt",
  "key46": "1ouiJLYbVMSx3qKNcwfdpCjPZK7W5jmgQAjdz4C6368UVWe9Lq3HbGty2xwUBP6gmwA8Dpz6jXhau8s1wHKD35o"
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
