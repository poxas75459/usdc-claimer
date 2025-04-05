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
    "3qRgfQkApgA9dn1f8bgvg3XXhdWLFQbQ1sP7UxYvyqQTZTcxoAzh3mmyW4ZrZZGu2xfn3hiSdLrU6YigpaWf39Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qELTf1viEXjiJv7bgZJnsHiKnVo9brgTsdAuct8VRQaQ6GJ9LDs2rnxe8DdFpeC1gSraG58qe4naZRZQHWct78",
  "key1": "3EdRJTGkYKxTRW26QSsXmHwTYxHZEaYBoytETJEPRdJSAJDP3M7BEC3oe4yEfDBgjPjSX7qwvC31JVXvFsTSL7N2",
  "key2": "2AhK66RzwpNDhDeFWdWHWy5gApUhNCHd4h36MZQBHYhzamudD3JzFYZrnBFKydtwmq7TaRSS11vbW41W1CeJKfSX",
  "key3": "CC6yBXtKCnUxBEBiT22hY9wnuk4PauwLFJceyBeLR6Bi35MWnU2TsuCs4hUHDWa8g95iX5dbgSHZvRSVchxCzFc",
  "key4": "59np2vJESWzu1RikdgnQyjLg4Wj5PE8jxxxZCTV4esn3WGAksDHqfn3cpX5AWNB1s5hYh88VSZ3u6KhWGPZ45LXS",
  "key5": "TDYeyZtrFrNiRiVx5AAFfoXBaKeGHSeYwwztGpuUfoUYcpMhZJPicCLF4uqoAU7DC5Vprs8xSNrdVRmiUF1iRoH",
  "key6": "2kyG7nqccfE5fRZhRP4bFvbqcYmK8z7NfEjJ46H6crMZjBpYfG8HBpEiyhBLyerKnzB4ruSJZhMQ5xyY5RKDueny",
  "key7": "642Phuk2r5cn93voJdgmWRBMrHBT4WRPiFr78d7K6p9TnH1BmM7gmqSfhVZ8kbpmfBxmQfuf11yAqoWhNNjf3Yeh",
  "key8": "3e8VHxUESVAxNcdzdw5cnRnSJFRNuXwQbYgMC5e1KRwKaxyCszKV5x2rREko2sc1BJG1Lhsf61rcaiUQ8r17C5PZ",
  "key9": "3veVioWcjCJXNq7iJextYDpTcP4Gi3j6mhpcjMZP9MkjrfxcdvT33W9Y5fjtMTe3m7nZQLUqD7GTnmAtbgsrRTMw",
  "key10": "4Vs6NFf1MV6gvNFUojqSyXRKjJ3FmGjSuRJ9NNmTSnskcU7gubCuFzLH8fPTFFwLaHSytqHm3L6tLE65dJKcZt65",
  "key11": "4ekRkWS96hzKkFwVihHdUUnfxE11VKMvjWdu1egTjaFZxijg5QJfddkqMTeeHp5vfQJxFJvcubSVb1LiZLrVwziR",
  "key12": "52aGAan1Px8ChBE2Z8qZoj3ccEDyRbwFwNkk8BYr4bdVENkw3ehciQhwLmxHjLscf9whqnxSS1Z2f5auUsmqnWbh",
  "key13": "2ScXCjcfiAFryVsPT2YwRHzjbiwwMp8AaxfsiGC6PcwLhjnfEbkSwB1Avzi2TYeE4E48JLnPj2rs13ngoN4y7zCE",
  "key14": "2EFzhs7kLwBtv1hdzZjJPRWrtp8KuxS4rs69FsUsxjYnTBdFtSeFY4KJ3M4Pon9YbJhpRwAy5aXxeNyDcXUSZQgd",
  "key15": "5b4FB3f1jzMrSjfhtBgVGSnxGRCbsQEg3uZvp5fhFGiDWp4UaWFzc4DKRh9uysBrTmxK5ikrTA4QPWJWpm2tR7zr",
  "key16": "3cxpXq1m6ZogEAFrZn3B6bQE72JREursSgXxTPVJwUQjm4w6uGgdsmFJtRzWF653WZGVWj73GhFqm272jnmnz6fz",
  "key17": "NVSCwjG22hyXUPtEUhUMXKk3eQXX3KUjWMEUq8puhhqtwhWgLVNAY6MvHyrZQpF7eWALyTw2BqLyerow27pbwAR",
  "key18": "UF4ppyJDvmbL5Tqvw5YYCTZ4pWRaXJsemeNJVsW2hCJXcoVnQTAipqwpNfqAo4eBiWXG2hPCLf3oyCDbz8727h1",
  "key19": "5jmgvAqyD64xNHrts1XUs1yef1juZAsRLp1U1ouj6CEkDdcQTNnzb9jdbQLjzXu4JPgTtVgLSm732W1fN5J8P2s7",
  "key20": "5tVqVg7TqShyuQg1QykYbtGErUtKtDZaMZDhUHTYUKJsB29BMWwMWDcFa4oKuuWoLXh8NvnqbdhXHQ3bzfcgNgLu",
  "key21": "4AUYFTxUymenN12tpXqwuMAphdsexDgvd19X53qz46PEwyZXtayNj5o9bPUzTWfLviwF6MVNkQmpW3UCpeLadMe9",
  "key22": "3XdKLz3gv9N3zzNGiz1M5zHgSfcRJF79uu77RNEq6c6fMVApyrF5ua4s86mxL75v3RHwbg957KH1g8buz9xXtQmR",
  "key23": "66xcUCPBaQQyPUv2ZsSg8ag5iT5mCxRSyyuU221KxR6or2AjATsBnvKK8zmUaBi21zWKYny7g7oxjsZVeCJgpmWp",
  "key24": "4NJvc6oj3WceLpVzYhWjrncv5qoA8CseF6tjHCGP4ckiYWVBAXV8fve3Aev3puVg8zj617QQBM4n7bCUq5MoFV86",
  "key25": "4NJdLKXHRCZiUKhve4LR6h9ktfburogwiDC4Hpsfoj1dPJNVUhGu7X6aBvmxLDzpQvqshmFuPuLTazFJkqRymHVU",
  "key26": "2Xp6YjjVS5irSwWHc8NVBdseNcYJVjgkuC7BXBeSeaye34k67NXinVbACmGe1RxCPmcKj66HYe1Mu18mULMKY3x6",
  "key27": "4zWMci67EzKmrFyY7xjnP5Z6pUKQ5CqRVDkfc7FqNKbDt2VrU8BJcPQGyjgAbkAmxuyhgUc5LskN6XmTNRgYAmEB",
  "key28": "4Zb2756aVeUNKP7Ka3SZFsY7ymVsnRCiEF7eBZEpCKCiW6Kjcj7sHpPVx5qZgWA71oMfrMpjnhtLoCeUSvgprAbE",
  "key29": "XL5cbFiYGGFfgMBc9zCBJAmxKdw7gVVWBGkihJC9gCZjd6rFeQNxWZSps1vSuHPZhMVuvDbHP9KWrXTygnnEdSg",
  "key30": "2XyquvSZ7ayXe5gn5Zw3mLEiDnNG8s2NAgALCJ63d6iS7GB99obV11r7Lz7472WNckdLLiUfG8tjh3JGpqFAE5eU",
  "key31": "vbErbUDmuudUEWcPof5YvfMhwavPGt3AynMjmw64XXNA8xDkae8CVkthW6ZBxrPjmgMnfRGrEn5PuVSNg5hXiMf",
  "key32": "2yYVDFTV2VjZSYn3c1xcgUSF9khrUM6RLgrwyApt6Gga8z4Y2KQoG5hYo169mGpztYFHoe96tVfF93RJKnUzjBhM",
  "key33": "5YRkWDjFefnpJt73WVT3zPHr51UXvNvxBw6XZxj1K8ipGWFYutqApFggVKg7aY4fbbojHKfG2vsqj1bXZvqprPR5"
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
