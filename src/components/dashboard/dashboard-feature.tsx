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
    "4WFibbHFULQU2nMGS3pX5ysSBgL9ShP6x7f54uNic59H5Xij3yjYWNAN2VyUiSMfbgTt7XLtTJYeawKGinpgCNvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgNwas57X1KJQiSiveV6MWQrWHV58pLcqHeo4M1eX39j1Srccoybfis34ouiRfzCtup5AGY6t4YNNzQHVvZXAJc",
  "key1": "3J3SQ8w6JeRfh649swW5hJdJ2CqRtpqxAhqUYr4g5XxJpJhnA7NWjGzURdvTjtTyWogJJ91uaKybKHF9i26ty24c",
  "key2": "28CiohrHaK9vxxNho3fYA6YVqaKSFQQGU9KQvPQaVVpkfBrorztX4yME6fTeLceqVD4rRCNvjoPvjw13Gn4a1iJY",
  "key3": "sAc3Py2jDo3iP8WQePhzCXGmHUDZutzyX2p9gCWnBp1rY9L9TC5z7LuyGaXhXRuMa35d42NsPQSnm3rCuagP7xZ",
  "key4": "ABFc9LGH3WJdtkxmQn2hZbwoQDSJfQ2nXMB4wR8k7BbWWRZa97znnKAtik78RmzX2cLotiQKGcUoHakNf7KB6ob",
  "key5": "4LzNn67ZyNSvHZAkqbBABWbcQAfgerTYivhHWQZZmuU9NSFUUu9cbkbJvdRcxvHihh9XWTDPx9dL2AEyx3BZ92YG",
  "key6": "3EoZfDdHz24npMVuQ3durREa9hpsm1RQeivC7td1z5ffnNquwD68et97au6eDoSbnMA45DvBVyZNgpiY5wyCK7mM",
  "key7": "TJr9BCZ18iBLmxk2Nzumzc23goL7ZfB7Eu6ZVGvnYLxbQKDLoNcN52okGnuPhVowm37W5GdqaxePGropW77dCwX",
  "key8": "3RTSSKZgBzV55dkaAcpfUjMdSrp25TkLQpTbX3RKBRk8f3rJnwqQXRNGH5eVevhTxgfBPQG94iMTB6EahzfEs2i2",
  "key9": "5xAyAPKTvyVrnw3k8RZ51KWG7QoSe2viDK1t5TVthCfuQgySyZiESqBNBfdpMvhVxZy2FThefEZJTkQeb5W36hdw",
  "key10": "3H6dKpsiJ7kyv1rMyc2EDTz15xA52ZS3fZ916s9uDWfHz9ZzfC5GTKz1pbXzRmtHzr6CbaSZP8m77dMT7Ga2b4iM",
  "key11": "5j91jepK8B97fRrsxrsQyZSw8EZbuPnkwm2EjPd71GuoFmP3m34rEqcHW7a1UoTigMeuZjK6vJZ3Bx7FWaT66vYD",
  "key12": "5wuPvJUhCNBUHrFE9iCKLuzncGUFsm8k7yhVjgpxSxGH4ZppSTZpKg3tkEBv9LauUsGwvWn4j4TPqsdnemSwypvU",
  "key13": "2QxvUSqBT9Lysg4AqS6dcw5LmPacLpJj9nc3qJqmvhjgsX31Pox98jy6EPKJoo4vPNrshcb6guKAy1QXPvPQAdj9",
  "key14": "3ntNxF2ZfEfWXP4FUs7DhFUKFG4HV92FvfB1eR9CmCYZwyPVSGVSMF55sePxMjMkZkNxbWA3npwDbJbj3LkgMJFk",
  "key15": "2RT9z3XwGsVuYoykgdCY15fnSXw536TgUJnnBWvBF5fkdunSRavXzLAboDbSJ9CLBqFtMBwsE7GBJf4n3d2g3VGw",
  "key16": "3fe5Bcehx3FZ8vnwCFJsPD1EhQdtSq6hUv9uYt4BmxVxZzLYHQUhp9FbK66g4iwSR7CtDe1YJCfcyy5HMsy66f4i",
  "key17": "5nEsThnrg25X6uWjFeShd4hFzNyGQFjXGdzABq2qrn4XmshJd2zisWXW4AoQcnvVuAkKSphP2uJwmPpd9k39CMrY",
  "key18": "4BaCPuNDACyEnrtJYyJXNYnM3F2QhZBnHypxeMw5GbGd1yKupsgRUSyBqXLny3Tq1ZGc5UvuewcyEQQvzjP1tmoS",
  "key19": "4PBQzK7f67BjrLANkbKZtmpGDMmcXSEZsoendVXeYfxqw71qtzNGP8ut8YufKcZj5wuqyW1ngyy2PKAwiiCNsMrB",
  "key20": "4nt9dNaBcjDmCjwvLE8TJHzFjWdhaYL4yv9qurXZahdEBteqjtnTk3vvgnEsUXf97nDpDCpP1ARt2PTZY5MUhLuf",
  "key21": "5FeGcZR5XuPvrs2cWBsyvZjyXr5aK4sAxgdEdkihEtdEeLtW2xQ5Mxy4PtyU7sKfH6aEappEb6p8iEQmvF6c9sGp",
  "key22": "2YasYYv3f7ZYGtTdaKrwcz6NenHwNjpio3TYg6hdUqJQ8M3DWw11QSsMCsStWvhSgvC2ehUcDLvkMWJHnTQQRBQK",
  "key23": "o4Dvy45gJBo7vpkRxixHvJ95BCNE4QxNW9M1U7i9TcNHM95C9Wq2PPotknhp6FgSWzQ4arq8enGoTdNTZ5EvQn7",
  "key24": "3gVs2DUYF9QCyLXo1ToS9k3Q9vMziAW9S21arWkPt4jgiTQgFpL6BhMst8aSRcqmoQ5jVaCsQdoEnVrKrGvpRBA8",
  "key25": "5qcfNrpVjNPUtcKua2pf2xZ9AZzYRNhjAuRAZZgKjq9ekLhwKoDauReBPaPzsHVyyjwN4x7KTN2BjS6LDf94jpHj",
  "key26": "5UfmHvpehZJrhgGiU8AhRJnFSYrsA5Q8LeNLSV8GNWtmnndvABefN5M7Kcj8YWi5R5CKPMNF5KvgCi5iyWdv6jDJ",
  "key27": "5GaPFmbtdHPb7QU96rqGpwohdHDAdbEsHmoTRa4jsSzFHD3WqPdGX8iD2QzEvdswMTHwRSbrUxiJvoXMg6yoFnVU",
  "key28": "2vdSNAy49fmoc8EqWhxU3ayRSt4LtDj9gy2JdQEFzqrjipk39j7rJVxAUHKtb3zCzrVSCYQiibhj5E2sPkxaPDHc",
  "key29": "2uRpueoaiGcCDCNzsW1LY2qtqA6WpiUeyoTgCh1aq9MAwujtVL8BsFJFgi9t3yekuRzyXVVuoaP1CqEmxFwSkQ3f",
  "key30": "2rG1Q7qLBqFBQddA5K8ruA97UnYRcdA9oRHp2vpdusK5GBmC2bUkT9sQAfH9MfHioNnn4hNWEQXdLrHjdf6MfmyR",
  "key31": "5MaeAThgeT4MowFhJXS4R7snuKGwY6SYNp87tG8GzsACKptWc9XXVRGrKugTp1MPvXRcHkpW1epRWsJDGwJRRS4S",
  "key32": "5Kc5rDhQHvGYt4Yn4Htm7pDnGamBbA5sY3gcuEfzsDrSJSuiHTvVxd9wmc51WzEBsqCiRCecFgFVg9vxSdYTxBrM",
  "key33": "38CNhbjhg2gVEMkugjudpZU8udv4MCw7Qe8GGpxXuxbPeCt6a9qCXKmmw6qNEESLGTGKybMua3yoeuiDY8Nk5PTL",
  "key34": "9Litj9xoGD1XVgvggfNSk9HyY6Ahs8HUPuRGdvRgNpSqAVGxLM6ZmZPRnM1Mb8hpjoZmWzdhc1isFPovSjii7hG",
  "key35": "2h6AfyHMj3YeFC1oh1gApRWKpQF8YYxH5XTFou1XM8oCRkpqJLFfzjx3uUFQHBQ4Yu825x7UDGXXGT14c8a53XeT",
  "key36": "4LwUSqmp98Wwazi3S1jycEcehtGg9SvtuHoGY7VeX3XWsS7zohA7yZqReahcRhhNEfF1M6HHxWZR8MuFxtEASeb1"
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
