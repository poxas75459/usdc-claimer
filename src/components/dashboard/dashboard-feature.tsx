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
    "N79J3bnrF1cDg21rbwJL59FN1vMWsZRmYz9jAJmwjJhrxsRYo8aQgthzd5mWJKe3qdq8VKCNqTxubBD7TkJ3CnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GedfMm9Tmfmy1jVzcJxXSYXaqCZR4TGTQhvgJAztwP6ikVqrVgdtvUJyhyGdXWc3FLwTWmzuTQCdsVGJhmxn9rX",
  "key1": "2NyoNCoqYmpQEi5Xr9BXKLwP9GPNnp2xmpa6jr2eyEVGfTwQY3PkcPTSz1UgJtiWzYVyVcgBiBT1fzENQ5SHQMtH",
  "key2": "4U8TtFr3zKjTtN3p9JFBDXapdCu53vBcd87jyEwuZhBbCtgnFLgrW6DhBHF2pTnjhTwL44mSg3id4p2PzKg4YzNQ",
  "key3": "4q6UgKajNqzZimF2zpGqwCRfmPJTdgEX8nwnheBSYFmJJ3S11Q2r854eWM4KVNYQ7zSoCeA56pt5GdbJMzw8MddP",
  "key4": "AmUQzPG9V4HGyMYvHysZSBQfCSjghz9h8xjrc7ThikbD2DqNuQ8titVEdjYJH9aEDZsepeBM6g5RWUV7QK5mrhw",
  "key5": "5dV9cbKdd5Kj8dQbjYGT73i2bzw35F8vAnvszxtC8sa4ETh9Yr4nE5eWHpZayLeAtddDDQGAkzp5Vr9wGQh4v7Mh",
  "key6": "2ubqQ95st6sWFL5t9o8UWtZDaUzJ2NmsAhbMQynAnDZKT43WKqN5g4mNM63TBtuBWr17eWQjC5y1ZvP5EeKKd3AP",
  "key7": "2nnzxvdoUR6CW1pbTPaMntWAf5kPYsfYMX4EsrUsVMguxkUvj9XixbQDUX26A1NtK4pQZx8ggC9fqfwtBAYHitAb",
  "key8": "osm4vDF3x6tC4ViN3HptAPny3t1eLMR7CnWi1QLk6hUm14ezseLhhi9in9L3aH53kw97qJoHJdo6AHx1tEV3DZ6",
  "key9": "4B69x71kGNWgPRebW9CBFTvJXbQmLNfQ7VEYDeXn18Q2JWnk2PDaHmoFoC8PGfooTz4YAhQLLcNZurA8w1PxSQgJ",
  "key10": "3eLZGK6wnqcSB2LXPAwmKonMhM4pYCnYSWbDmsmdaCmhUXohnQKfJoqkd6uvH4gp7TCdypd5tGJ489KiTjLdebev",
  "key11": "5xAyo5dfJRoe77GpuNhAtkyN2frJjmJUgv3AbC7PpYqdGHfHQ1npxBqkpjsvMp9sQByjSbpJwWWPvhN4mPVP6wuT",
  "key12": "2up1cY5byXYqdV2r2wao69Bvc8vv9F491SQjzugmoGdd1UMRGyPLmXPFHUMYewgECY6Kzd8nbSdmLWCXKb4MB8RL",
  "key13": "3vzcBBSxcRyD5QymDpfLUQhUPHGPvZDfSLyULptgv1frFgs3zuGoNLw9YNApNWSRk4SKQhvBzaF1Q4iJukfd5NJS",
  "key14": "3uuS9Gm4ZcCqFb7AD3J9sd5wzK35wCC5MkRDKheQUQp8t2KuqcXoXc7JXUKWes4AJjsgsxanvYaTxKndR76Up2CF",
  "key15": "5GHNqQBBCVkLiW7WfZ4EHx1VJzNVfWufBf3gXqhzEoPEczi69DVRH8tEo45UxGB7mx6RpndfHNaFM3UfSoEpKfXg",
  "key16": "4TrDPdJX662tSqDTZZ94jpoCKHqh5FvoDC3cApA3jCfD9wPxHR47dQx9etb19sGxAbwMvY1Qs2LWJwQTZgvS9RGJ",
  "key17": "2xmDTTTBz7XYZiZHx6WPfGx4APoUdPUM55HJoDtETndC8unQnCGHry7mc8nEqKJtLpHaJWs11wf95sGE2yTtn51R",
  "key18": "2ymwqSAiFzVKjYPPbj97MtPtWLCUvVSpzyCikST7T8hTosMc7KyURPMiCxhjgyrLv7o3U3ZYHo8uUVf73MKBkLH4",
  "key19": "QdcNjhh9waArkHfEphqP5wLrZgx8CbwchALP9Hx3MaUySg6J7wz5fshz6soMpYqC5rwiPNWRAXq2ZktC6qTmELn",
  "key20": "oxNDWVDjUdQFFDafR8PJJGCzpJvzcT5S8s14rzzETNtdpxwqTzyzagBUSsH1kXTqF2HaTWHk4Gcz1aKoSZXBrCH",
  "key21": "tNuAFPvb2uwGfjNeSq2FpgTyXuksuoTvVhNkmDVdPzvUUzY5USVo3BXqdTAinrmVU8mg3cqTYQ7eFMJr2nMuoha",
  "key22": "4y8Dyw24gLPuS5TP8KBkC5xkN7xAsoe6rTbdsQ8tXeRaAqbX5uh6xXyjapMcxEzn18JfE5TujqALfrEeoLq8dMwZ",
  "key23": "2oyE4kWSjMgVHhypZi8puoHnTxNVdT2Bk3yPHZM4A2QM1s5gMAG9SA6UXtXtrH5hqGCK7agwwMvDfvBUiASEkSYo",
  "key24": "5zCx9K8uREArKsuBjNCTF95JUgZGo7w7dKhALG8JqrPnpz9efMYBSUkENwKHi12qA7ES5RbR7gbL7GCqbXg8GJFq",
  "key25": "3VFwP8W53QeCqVirJ5cc3CQSPEtWHaCwhxAqE1EazuCnsWczezWiUBEyQN72d3yvHzzA5C8oQgzYRWLiK4AT44qr",
  "key26": "ooiBMeEJ8ma4NbdwXT7SXUPmuocDdnN8yKbgaJsfuF6hVjp1BevReWaQ5wVh8tgU7faGBEdHnT9NSLGndxYDixu",
  "key27": "5hYABDAkgVqfWnHJubmECiEi6rLBNvGYTqH22RxXxfr1pMy8QMm1dkpEhe5FaKgvqJnATFespoeyFVqeEJRFdyWT",
  "key28": "367dFSHVkYjRvsaivCXVYbyXnzxzavtUntk3nNzTavuPqfw49UfE5o5d1c2hZEWGCYGKQAYtnpd5UgiRzkkYFVq1",
  "key29": "mePNm4frEShzS3Sa5db7ZGdphCob6rNR19XjSA8t6nEKCCwPNZR33z1KVhJGeDn2MyuehYDnSVpfnNN745tQwuL",
  "key30": "5w4zyBRGjJfPpcnXJaNHWGWA2pbUZEjPejNyNqFguWTvmsw7naMQSzWjtxHERJ3hNquZzaQibQXt7FXk5Jf1sYhp",
  "key31": "4CuUHBd63dNPK9FSJDaBwU6AsUwdq37bRfNjA2K2SKdj6y2rrmCo9L7iYggLLvZKkTtRB9epq4hx81SQSXogpTa1"
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
