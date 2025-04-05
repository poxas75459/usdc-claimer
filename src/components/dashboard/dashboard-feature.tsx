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
    "5cASxfkLy6prign7sb6vrQyeHdqCVU7hcgG3C2WPpPiFa8ezdXYLMKU4SD99XkY49mE7Q4fWBPGn8iqubAgktrJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45gUza4hnmh6qudwHVL1dvwyxrem5BAi8J5n8fgv6U5N8bZid9bK8wrLZAFzzQAG4DjWXpRURja3zZMpv1dvXFqA",
  "key1": "2aXtUWjxLjAWQ1xpEJqweserF4NyakHErAKnWYn9fng53awMTXFKq12BGPZzxbtbnQgkMQuGxKq7CTYKAytXCF6S",
  "key2": "4p34fitYVwZGhUBnxH658pfxob4jXg7F1i67ThEpfETwRgDBu93Ecq6LdRS3hoKL6BHeVx2TCjbE1stGyGoCsENm",
  "key3": "2wPVs3D23MjFb1G3jw42YEtUWwnhUqXz6w9h7YC2SM8Feyz5omG77ucBqa6yc8A8fjkDLMi51Bc2JjvazLc23U2L",
  "key4": "4oTdtYNeB6pRSDMJCrUM7VpQVr2CDyvaW9D9ciPrDAHCYLzyiBzphEHLYWD3JE9UtN8quZvsLCjx1tFFHUqPKntU",
  "key5": "2D1gE2y3hB3FpssLJ7qtBafnFUpLeff7JU1jZhsNc3iBd7s1TFxNpMiurS8zviMfEYbidNCcqYwSFsBosg7r6r4K",
  "key6": "Rs4yQjswNnfit3ByCDVUfJcbiN8QyPf1dhGZ55wcz9hJZDkmiphHjjXB2G5EDkiVM6ocEpLCAa2m27bS91BjsmN",
  "key7": "JNvWKQrt5jc6wZcxUvnPhTiuupNcwBMAUwwtF3CzGvYnwfxcpeppH7USxJ916tF8uHpY5TPHXoXjqVuuZvyzvPw",
  "key8": "mmArYp87kCtTAXC8GaEmuynYfF53DZiXUEGnLTkgScNDx1pg5vrGPZouCyDMpvVoMqdv5SDrTd7chNBaT2kZiSw",
  "key9": "2yeM6qoFnRAPEQDEp5DMAaGT4AThjKHpv2zUYVZySYpnYKyYTDWwTJRAJ3vMUUh2r6wG9UoHz3gpqVpG2zEekm3r",
  "key10": "2Ga8saCUAeTPDQoLZVZRLrtJbd2Qd1b27h8tpAk9dMoTsaYQfsZnW4NcoPUJ8ZQ3oQ3XPsharvawMDFEwXYMevJm",
  "key11": "u2UjV7o34DspzTAvTr4fjdsPvoCp6kZvviZycawgMBki9hJzVKsvnHEwpGCA8EEHS9PzG7daicBcWjCwp4SWWzC",
  "key12": "3K9wQncLHqSKvB3h2L8wRUzfsM34ATVGgHrPEPVaad9F3RWJMM2T8S5w7hdV5sTCtqQ5EQvoJHq3HLpG3JhcEDYo",
  "key13": "93t1FPVSJtnrQfc8rGcz3YGguXLU4T46ezy9RjReHtxUoq8f49EmZJYERkQYsSZDRLMsHZsvCJmqusJrHSiYgkz",
  "key14": "CTZUn6pZTb2XtM6XBqCtoF6EroXNSdgEAczp2e1J17gvdC4qy8K5MW5zAqFFUUwCqXpyb8fCB3bCbiPF2zePSas",
  "key15": "eRxEGAYFoACi1kjt9mnNbN6NV7iS4CpSAVfChjr6mrfYDCxXSheR9bT4hR9yQuutRMTdnpBk9K2bxbZ7Z1MJ6bV",
  "key16": "2J38YyQdUrNXLaQsTbf1hfGzR5JBAugBfc11p4Gb7YqA3BE1FrLWHVxj2P8BfQvvTetv3yuCNKMn1a1cE4Xmfjn6",
  "key17": "26QcuTWJvfqLr69kw5Xqzw5cP9oPAmibxvwv1Z3gaDtLNrKhEWJMHxBnEe4gSZSimYpPGgZisCzfh7RwukrdkkMR",
  "key18": "4S6u6iVQeEza3NwZFpXYPqQueAJk5D7UvubfpWBU8AJhcdj95WhuHXTfMBpUehFxofDmgyEpX6gBmV4UhEA6GDm8",
  "key19": "3uzJhUHM1c94dNefEbwhLiAjRFE8JSSsAWUijaoLhfoMsLTDMjDtLyWsNnsTpcjvYkn3UcFdpWwGimR9vYmqMc9N",
  "key20": "3va2ccaBC7eX5XH5jULVGEUb79MjXh8seeLaw7cz44W5N5nYjf1R8nZHfPpriFapnys68L8ghvhjrdxD63MUuJ5W",
  "key21": "2rSHFmC3DWLEUJ1BsECDChvTCx51v5oz2y86SMBkKfSy8UxKnNu5fQuymNQymeNxdeTY4nTXjwDmjJWkEMjmhMh2",
  "key22": "2wYQMdUvAYj73pWAHuABnoqHP77GEGFVCCzDxREBuX6yAqr59P2GeDiH2HAKJ4Qucu5GdvVjEAgen9h4EJuBAeZt",
  "key23": "2ZtmerC9Krsigo7diF56KAbkQ2xKSoPbm7eqd6zB2bSRpSBURPF3nYBM65QEJgMxxcKL1Dm8bAsGkkSTdKNrwW2D",
  "key24": "p673mJgUKwixAez1awgg3WeAx6LjzC948ZJ7aAn1LjyTfkcs4TvapoGzxLwYPtfjZw9dgFug6BHYxQzj1H4TC6B",
  "key25": "N24aku2QFS7BBcAaMiNsZnwXydoEt4zHUraWc24UEAegHMQGpehRe7Ykv1GZK3o6Lhgz2spE1izHQfRUE9Xs4Mb",
  "key26": "5d9GXGcMxybXZP1eA5xJCL7GxfxizjcMrfHfkaFijuy31DADBvrpWYcoKdufwtLxRmcyJ9cUc4rKxy9xyF9N7m6r",
  "key27": "qVJD5TtLvyzk8sAWMJjAwGPDu1o3RTicGV3JdNpkxdiVJ1D3t8Wws8DZEJEn3m7w1EnYkaHAPAuyLc5y3HxYXPn",
  "key28": "2T18r66TQBFRLBtqze7cYei8ZjYByDmQVLJ5mgMt31HA5cBjfE7PboS4Hfhqx9epZMogsT41J1kqQEPdcUBPxMcU",
  "key29": "2ZdSERKunbaih7YnzFX4PksmfhkRyTfssQYpMTihKL8aCftfjtKBfYkosMkHsDu4LVkEMPQq7nmykG4AGbof5awv",
  "key30": "4a3kx7dbw9yxuKK8gdiRN82zZHRfKP2DuVCdGE4BCwAMVdCtnyAz1A8B4SkeDXknsqz96aABz3YWqMnQy17JgpZj",
  "key31": "5JJhwwFdQhLW1QB6Kckb4hSfAzdR57zYgHrK3QXPLBZuTAxTeiU4VEsQadMeAoCvH8Cc4PjRGvt2BEiL8fBCEwJP",
  "key32": "2fBQbLsuN3nV2FYGyG67EH8sRgzAr5SRR3QMyxhTzYpH8V1yXWcpDtRnN7sFhyMmjwRCRk6afrQChM9FysrK7vgk",
  "key33": "6whpF7ZdUr67x76cFhF8UPMNDtzz5oyR9VaGJTSfAjASk1SVVbiSFqZbFvqfDRuCPRckd8G5kvja5k5CcWobHL8",
  "key34": "4d9UHmoBAC9nDcNFezLCBNHrR21sDWranJjYQ3djWvUrscy8yQDPTx9R9qopybHpeLAMLMTj4NxUTrb7Ltfzs7ra",
  "key35": "9jq4YZDSXQJD2UJk6n1y7zEbnu5FKwFKKWeCawDm2Tc2aFSVgoGL4NuhKfcPDCsaRJhYjfEN2gu8e5fEBzNFnJu",
  "key36": "44zN7LFBmLa3ryDdmHQyC6eiaTSw4HDZqQ4G9QRCiZc2rF97j4P7Grc48hsKyFVHcKJ5qqAsbnExvBo9vpFvUAo1",
  "key37": "5KtWv2AezWdLwPEGQ1FnNJGX5AMsSiuZa6PJs7TW6fJQngPetbbisq8k6rBGyrV8QpwQC9hbFeoYkfwLy8eNWCtM",
  "key38": "24vynkJ5pKaFb1EmBLwnQfTGr7ubKQjb8sMBpNx1hMrbRGQQZmAkWGRtDxeUTeWBJUERZfLFA9DuvqBhGa8LzBdm",
  "key39": "3VCcnsXKdBoQWh5XfTjygtSrK4TEehMFDMGyPd16PWUJLHzRu9x8kXuM5F62PsYxAtoLSCEJ86kipEqcU7REHXru",
  "key40": "B9fshcbU6DtWiG8a55mCZWxtDDRL8VM29YhgVYxsv16KnLeFCtm1EqFE14BgoY5toUkjWwJpENYi3Gwc55FE6j4",
  "key41": "5HCBz21vsuo3ceYc1yn3WbWz3iJYuwhJkk61df8aidWWSBcwSAJN5UEn7YVr4wR7B2o6tREq1QqWfDDwRKdyN9Tq",
  "key42": "2AARC2mf7jU82rGNYGwPFfcRJvcjq4ZmZvdEGyyLbQNA6zT994Qyhp6sFySJQ8nCdqqLk399hFKrcbmiX27iNJRk",
  "key43": "59tyHJpGM9N3WSHRLErEQ19u8Pu6vyAdC4pD1VpActcdRXpkVwwQ9fp2MnD8N6EBsyMB3uLsV9pUz4EEu32FA3a7",
  "key44": "3hJ6wCSKnCTHaLaKGbEQzEs8wjFdGs3Gi2qbpwY13hWCFpBBxRKnSyvCgK6KgpuUdXredFmV5ooP2GcfYYn6jUek",
  "key45": "ssKSmUswazu8dUktpsC7TuEnD9TCUbZUpvbB1sv4L1o4oLE8bRYe7K1LLMLQNHGrqNoLzwgLNxJnVc2LXKVrKhh"
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
