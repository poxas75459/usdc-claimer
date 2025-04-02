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
    "A27NuYKXCwSuSxyhhoMfhiqc5nz3udxL4o2P6sEceAsfjx61fxC7DGQXEjxDjA7HD8m74TYgJKbwLzj9rP97KHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqMQaMatGMzWwE52EaJuhmnyQY5FHBf3FeNZb2NSbRhGC4183P6EVqkiF2NChzy5SSnxoat7rnfvBx78drxL1pq",
  "key1": "5xmmmx8zVbwrzank42qmg5Zmssz2JVE4wXH1oXk9VeAPJZjUfaU4Ya797rHmWcEZVurSYRAjHTUCgkoM4fmFotSR",
  "key2": "4dUsP3hHjejfSwN2umdoUZdtM5HuuB1xZ1eoHLRkU2rESifezpGvkdvmnbLqudbou6YiQyVxLJ1jujhaL1Q3eb6d",
  "key3": "TmF18AX8Gdrh4bhzbPNgEe21m17iL9N86N3nFMXHVLBf2hb9TkYRv4HJEAh26zTbDbj49Mgbk5smpq3kKLPTXf3",
  "key4": "3qS1Sp3NFw3dPmMWRDAuKMPjY3bdtzCNA6feqTpc5d6x5yC9YGwM8pt3D7neuHJ5nRnX1Czyw9x2rLaeD5RiezWX",
  "key5": "5hXLwC9XhT7uZG1uVMtASDQgTCZAo5XzZXThNbMKYkjbMitiN3utn131AzVw79aN6yvvySNkmvQz5HTk3f9GbYqB",
  "key6": "4RP4BJADZpHjom7SH5775PFdbfr1LkVvcQBgTPomARx9xqC8GSSmJqXbNpKxTNLkdLp6xnj71tQeWZvQ6R8xXw9r",
  "key7": "5aiWWCkxGRNiWrTKJJbesHabwPQFnZKDy8zjGsAq8KNqp2bGQjTvWQbQtHHN18JJ8wEboWmqWzz1xuUn1Rrs23LT",
  "key8": "2stfjKUGbXYsq5hjiGnyVdybLv9nA5ktycpN9Wq31ab9ZpJwz5kMHYn8hwEP4y7Jdon151yVPJsKmkfCjDcJBrSx",
  "key9": "331bxTVXXVTtJ55d2H3YWzzShHK1oc89BMDPDyTagAkB9FezbiMmk9xUvWpdfXVoHZgChDb9uoiUWu5H2STiBEFN",
  "key10": "4XXtKBHQAKbQpjQJ77bkthp5eTqspBFEG7uGAt6B5W8sRw5K3Mj5cH12mgJDzZhzF5CpP9wj7ksSUEKJngrYenoW",
  "key11": "5fCpoB5we7Tbyc4frRNKeABUSPZRNM3gA5u6gLjSzs48fmVxPNRSifM574ssvideDEgrV7t2rSeP9pFch54JFNjv",
  "key12": "4V1txNqsNCGXeM4KNaSDS9iUqk2X6nrg8ioCYznKowUqtaYkMVXTr11DFiC8trnkR2qgctgrPSeA9Vrfr5Qbw3si",
  "key13": "2taCHoQsbqc8mCiYqGZpR4q9YdBLnFks4UMbMwrfeBYhMyQfDKViJoQLUpC7k1p2Cv3u32j8coxXQuG5Q4L4vGP1",
  "key14": "3q9mgzYJ26av3qLeERGJsswJznboxid5r1vLzUqfyxwDFthYpxbVvdbiaWH4S47SokkSizUtgzwbdS68HeBn2SkX",
  "key15": "54ytvDVzEPPy9Svd4qrLeKeKWZ34sYQTLsM7jh3CqjefpmPVt1Fe5Er8S9Fhx7xtETGGo9cZLAS94ovxSWyuf173",
  "key16": "BBo3a9MY8QTiHxzMXr1JBi615ANPR2PuaKB27ib2WD7YLQV4aKjLHBymwV94KtB7zXZrpCAwutJ8kE5KiutVywR",
  "key17": "7dL4hA1j9NNU3ybfWF16jAm7XkW2naazopXN6A66fVVHC8edpVEUY5bH2y32i2CDbPGMdAAXL8juD2U2rooFQTs",
  "key18": "5DcHqH4YT59zeB4utwou1Qx632BZFZ2DGHXykpbwwCfCVovTNCG1qgWbeoi1VVCMFbbkp2Sd7JjUubYsHo4GKJzJ",
  "key19": "3E8PQkkmey1gqt7vf7y2jynHb8yi6zsKRDjHpuyAHefaJDL9ARAiD1ECFWBdixMyMekRZGcthAB5nbGW6m6EzvTW",
  "key20": "26D36eJ4dezZkjWpvaGoHY4qncjJH5xcawba8xTB3tBQ9kCTpThMoDtzQo6fKVNqaNPVWDAnMX3HFxGNgbsWoNr8",
  "key21": "5VkgNAisacyvAtUEdmqHTEm2DvNb4pH4b8fd97QYoY4hTMeKcjpJob9SjEA2mm3aJzgEso49EW1zaCU91fm45Vmx",
  "key22": "29oLJguMkXGbhoHAc8D82nJ4gdUrxdbHDpa6UMzpSW7Q2o8pZNegzM9FKd1VJsR6vESnUkkzrPcJyvyahomwdJkw",
  "key23": "5FFiFZAckVykSMKZnJiadUrQG5F5xgKqAHLraqS2v2HNBnWzTfQWeTuv9V7jDo7fCKaBQSbKKjsyWMwQPw1ay984",
  "key24": "EeLf5qTsQafta8ptyZJb3n7KvotSALuEdCuPMBTa4gYJ8ci1KWdTSmXA6HSRFSwjng1dPnKVdRUL2v3w8mspByQ",
  "key25": "52zEE3b7bG3SvEJqsyHVxeMVvPaDiwgyVuSgq4ZZkabyrK6uJpzfn2AXZJQw7Txc44d9J29YF14NdRGFHVJTWhY5",
  "key26": "sYcHaNsbufjQPqPbP3tpHfmenZgjPeAL8oKuhxxLeHVj2HbD25SwzuQo3EbdxGXnMEB9KhVgyynqn98JFb11pUY",
  "key27": "5BcRa2BWSNDBEnttBeD52J4hQJxAYtnnrVb9emYkM2aHZPUP3KBU59c13cMgRbrJ8mwS92N5VLJrL3f37onemfYs",
  "key28": "DBFJrxUq4osATGCgdKzzJ7Sg6VchCmoL4h3LTvzGz9Rk7oGQRu5KkEtgpXyXtdjyxHChf6gDQXAL7qA6tU794gg",
  "key29": "5yJy4Ubck62jo1T5HULibxag9S9ENUr6qNMruhd46gQz3jeheaKUBPBM4kKSTjf4UmuT2qpmfZ7W2bhC7eg7SVy2",
  "key30": "5wyf89559BJYAzCLGoFZZBDH4ZsPpV5uWCPmSCAXPafuvtqcFU3zBfwSpTQfLvfXbxN7UzQt2T8XXxVVDhm4Uvh6",
  "key31": "5iggH4YPk6A6KWvVXQs2z521PdpQViKGSwkCFDgXZTfLyJJEaiFJkiF8UwJbgchGqNy2rzajDWZ3Y9WmuZd1SvJQ",
  "key32": "otYXeUhRfpXBmDEdXgSCDmiWWUJB2zMRD5sYpzskWPBt3B2bk8TTz9P63tThKQ1d4srUCrfFSk57SBpamE19sac",
  "key33": "3yEUowjHGw2nBfkrzLvq4qfjzVF5m7tQHwAeR5kfZt7SqtmpP3LvQSzdVznPTDL9nyfvsTStGJaXrwFcr8PxJuoN",
  "key34": "2L6QXd3dNnWdzR2scE8iwrQKymThS5xcQy3By2yEg6asQNYRqH18MW5ApzkzrJ5Bm9KBR4ibKRG3BNRUnwdoVvVU",
  "key35": "4SGBQ8YqN5ZU1YBxNV6ugcbjy4ahVb873uxFWjJb3tb1oUmADXykmUPpebYNcuLzuzr6npEWznGhVACc8SH4RBk8",
  "key36": "jZjQE15g7Kh1MQtvBfJ55mt8pqSkgfkjqFb4aA8awv6x1FJXyUvPCX5GdDoaSjEh6y6irBfCD5EWg4i6HPSSLRh",
  "key37": "4L4591ussRqEK4gVviDANxzxQsYdJxc2L6uwds6tTEDU1wGFd3375Wa3PqyFDtE5w8Ct87ez3K7b4vNkcU97yk9W",
  "key38": "3VCytvByFKxfnqzgW6fEVdV2n3L9NPzUZCAS2gfQUPEWSFtuxUVrEaEt6AUUEWdMwkkZQXyQiu7Q7qg7pANJox3e"
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
