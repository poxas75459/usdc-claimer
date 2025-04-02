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
    "5EsgYrydu4AiBiENBE51s3B4WpCPHa65H6K4aHmv9yT9DCy7hbYcomyo61sJJQVy7uKg35QcPqKomYDsCWtzxXUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mEfjgw36umMSD7Nj8Kvf94RF2XZ1Wy58kNkQJRvNqLVzUExGqjewes33m67WaNKdPGdvxtJCdyZxx68qw6UJM2",
  "key1": "4F22HAeCATtstuRbp9enX6vY6CAvvLuP8rheX6wX2Zc4rWdKvZQ8ys21bAT4d6DbnJWJovCPPgbHScmf3ZUoWJSc",
  "key2": "5ffwKEBMV3DM7L35sf6cdewTY55sFXMyWqXV7qhZ12QY98V5996rTZUVS3qEeefdaWby8JuCcKfyWU3hhPqAWvF6",
  "key3": "4MuGckvqiomkYsKTEerLo5uvEzogSKzp9S3idBv2YBPrwiqGFji83MZ2NZNgem5BuxGvv7U9YhaL88wniuF8ZNpY",
  "key4": "5EeYvKdgdvcqxjYfcukqCYbnpc3n6czHQHEQToi3ofwE2Hs2d6zpbGTsQykPQv8Urns7h8uwXArZaPsMrpTTnWoQ",
  "key5": "36pBr1h4YyfYjhGsb61dMsyws6bBESyWA6uzr1cQzRVzu6HYk3RZZtcyxDeNEuArrpvXovPrnr1q6QVGy3WRo7rv",
  "key6": "5LHAo1ZVgyAAZT8bHBYPmiDXb6VEs2vdyGP6dnoLaJiXQJs61zix7RHyDBuaBCCNzeWjTNFJptiJj6GeU5H4swPd",
  "key7": "35NbmrMp22P6acY8PLXMiQWgtqMthwdCdbLDZu9Vxiwa9NeMM52tQZTUHsmBDwVQry5vMfDSPYsW6QTtjZLHw7cW",
  "key8": "TggxiGGNU5kpVaNuN5vCGZYW2Mfu8nyyNBeDXnCwFjsdBrk6YPxrewxPbmvCYggA2XJiuXdHYRQNAWoUtiRp1GC",
  "key9": "5889eUYjaSWyKNEcg9as5dgANfrfTQyP8x934ZrzFmAp2qUMwLjPhwBPvP6ruHgZhcMjvfqXYhCrbswnipuj39CS",
  "key10": "5frUgQ1apgc9vpJQfhyFk5N2h3aKu4xmhGEkC5oqkrvyZrxMGJ2y8cdNA35MotDEPgfpU5v1bjaeNB1apCUpSfVw",
  "key11": "2mjVsAP7Dhze3v1f3MYd7r51mwUGbo1ZWYscisESc9op8971rJt5vhferKMr3wcDmQfu4aVHFMcUELKdJHUoJSn4",
  "key12": "2GsrVXp3vkDAujGVFY3VDxcGSjt8vX2MgRAW6iZURTf2q6je22Mj8QuQUdcQTBpoaGYH1FDiJNZuovsMLF8BVDZv",
  "key13": "3N9FmLG1X96cYksPmcZQ6eHPmwKoy3dji4NCuSa8KgzeXSYEma3jnj7TrXZswmLYZ2aMNFXsgm4U23ZXqMBsfw2Q",
  "key14": "5qs9HAKTmqhgMJ3gCPb4fC5Xsu5Ag6iWpB59Y19KRdriwZc17PY7PSAcw8xSWBT3QiXXP7hM9BRyUyzkVc8TaZfc",
  "key15": "5C7qLLJkH4gPiB4gsDc379MxHPJwTgdcRYH3U1xchwugSZZ34VWNcLnNm2DGn7vo5P5A9M21hz9ho9cBoMA643ov",
  "key16": "4HEYAxNHdstfNKu7jyDQe5sCbVi8nq62f1Zi4M4BgPKkxPMYb3sSiZ7YModRyYbHJwW4RqzKFPHbBiJiwp6yhUDJ",
  "key17": "2rhMKj4pPoDS6gfD3FV839MMrMhrMYgUEVCy7HMygEkmfssUuCSF1jNyMCuvCULqdpjF6TQdHecE9P2We93J5oqL",
  "key18": "NXDnWUMeSeoPnkgR1j5RkmAiJgc88jCEbnGz9TGEuxJnY4DnH7d6Pu85CudzJ2ENgLk9UWJUiVioQcyv4zwUxvR",
  "key19": "2wcXZmWKxZCC3tt1YJ8rxMkKiSfw8o1LfuLw59uJ2n1fcUxAmNEedVsi9YU31m4pNMm3PyVAqfsqQEJY5n5CdVur",
  "key20": "2zoewVn5oyZ5X5vPoTobLpdKmepwkVrW2La5Cz4TTh9wM1vFpjqL9djhXKBVLUMMXSQxHCxo3Qcb3qgqWKbc3XVd",
  "key21": "2Wtwxa5Q6qfz1BgabohCM4QKoQr9dKCTrTNNSMh9a9Y4QadBBs6Lp7aKQBtU3uu6XnKaAcUS6PuLfid9WPZuzfE7",
  "key22": "3AJBvnhKBHwFVZ2q5DShkXyvLVA6DNU4m3QNnN64PRnD4SwE4e9uuq3gYjYbU7jDJ7Lj75E63fAGjTGLPTQTstzv",
  "key23": "3jbCoKULabUeT1nmKwfTKDvvCoMNzS3rwvonXphF92px8Pu6oFNT6vTEmnWkcbWz2QvCuFZ1XycnDWfqiy4kKeUG",
  "key24": "2fdSzDvNmUL3SzRxBFoDhipRsx7GqNYokCKCf7MJGEt83v8bY7dDTtyvrRzKYfT16pLBkZ8tkiERHCKMYDzKsDue",
  "key25": "ged2RzmJDLDpiJnNrrL5VgPpdjpxtpof4agP41wu8AZ921PWt2rdpNB85pGzy7u9z3yPZB9j1QSNBrVv4RxFtwB",
  "key26": "3D7DAyK1YPaytFMfv9ak2VPu7X77Yh4Dt1a4QCbjtCukyFom82FfVnqiKb41Tt2ELwM9rvpg4FdS3reVCMkn1bPc",
  "key27": "5Fm9xTddRAUpBSiZRFVgFesKQ8EnmbkbDVPWshigz6pEAGPU8kzk4yMQ6KVqZgyJs8AjDnn6PhcXdS6p6qzf7fnm",
  "key28": "4ok5KueUacoA3Fewd1CoMduNb9X6zTC28DwC1kmBoZZeDN4ShBvhX6tXPt8eWuq5mevJgBevLZCTYWyN3R1PZzw9",
  "key29": "5gZDBhGE6b1kyeXYqjVH2dmB9b4Hu3Zv8yuMgzSkQpcVWr7DAcELUu5nP4oixNE7rLzVe8ifRqJS4zpgYXkdJVEC",
  "key30": "3M6VCQFzzRWfn7A7jMrXMw6PtCU1EU9DiGBSdcZe7CV95oh3Qd1ZKmeykAAZXJ4XtjDpbuHZnSyDjLbzgF6FrikH",
  "key31": "5DC9KcyjTmNz9B2XnQLLHqnLx9tT9pwgMqo4NCTaSq8UQUDqHxAppn9xngjpSRNJeZT2HNiQm5iCX5pnSHPdW65S",
  "key32": "AGxierXqaY2Ak9qhc3MMEpFGY2TEK4E8wzE9yncTE4tFyzhcCneUeNCguTtL5hZfXu4dKtnFywZbU8cAgiht2Bw",
  "key33": "2C72aAbcn55hsbSfcg5VvPXaN46epNEVUtwQj6gmy3KMd2RiRr4AEhLDVfP61cAzWJttmpGZtQLidd71xyZL6v3z",
  "key34": "4s3H46tzTPAgyCh5jysyHgN7gPE8hxUWLitDF45vFYmQvefoYaip8gHsdqdZ7Ufwc2rM2zssBdHEFDFnmjQAp1Mr",
  "key35": "5dPw4vK99MCc9ZC6LL73mZo4arMMB3fVN2mmFWYbQLWAbA3KcTmaCiCzzDH2kbJtXDi82T9CHxBTyv3J9P2Jsv22",
  "key36": "4oEcigfq4ETfiXTD32huUn37xBxwDiLr3aujVBcWbo3KzLfUmGAV3xqETKsRFoSHajm1WkDbddfexCAR3UGPCoJx",
  "key37": "18aGNQmaW5n13qgDoKme9wt9kq6Q6R54Rr8FvxkmSXsT383WgpS6A8XMdBRQYb8VVfb6xVaXQoygsG14Je4vtd1",
  "key38": "5vriuBeGtQMu2rH6qcbMMFRX8T8c82M1cmT1xTSDYP4GHyLXh64xJUhH3FjWpeQf1JYQ9gbBxjnNy16GrLeGWUfw",
  "key39": "4CfTnZygC7S1GyZnK47kYJt3xpxVEzbzikrQGMYcAapzX7KagnQT1bPWNcvBAM34pxBDzQzQPmW9uTkoSvLHE6qU",
  "key40": "5AUqFk6A8yAooqitRNBizoypJzb8G1mJm97PW8XCBdFZ4Ut7K56gQ1ZWbqC6UNnq3rgVVNXnPnDcezpR9zbsWjhc",
  "key41": "YuQW4xfizxJf9takPRaFSB1Yhtcmg1UPnqWxdD2gv8Rq9vpkv2Cs2GRo9pNanU7hGNS4jN2BdrP9PFx3y5qd2VK",
  "key42": "qpkai7eZBvJWsZ1zKMzEAYR5cX4cCt1s2mPihuRYt7jT7t38CxobCsCgzYEjVFMy16kA6KcQ19oKsq9YnYTKDvF"
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
