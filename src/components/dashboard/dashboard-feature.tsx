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
    "4WgUVxEC8CKaNWwMhAUmWW3gLTUZj3km3jnteE5XxeKZVS446NT289j4HsuMyJGLwBkY7wLeqTCXB8r6qQXME4k3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtfhJu9RG7ByEwTgBbeuxYMoCuh4ik2sgYZer67NrB3L1mYigJfYNpHvMnVMwAnKNi51CbRWvXtArs8WN44ktyF",
  "key1": "QacDMrK4ehhcjms2feKndKwawpqBuvRqgDovhSAiaQZFTDP4yMqVJndzX9ECeeBUNprW98eDJeFuMirggS4LkDG",
  "key2": "2eZnW5GknHckvDaJ1acfs7pLQgoe6wq8YQdkirCWhnaEdmmSGF1bvu3MrYWfU3bdLZUUnXn2rmJMR8DAXXp9dU9G",
  "key3": "3M9fjwv1pCD47KGH2FUuChNaeK2L2WihfVCWT3sjcY2Lpvmvfin35my8Jgd8ixxBQnGTjGR1MyvXcUdgYth8x3kk",
  "key4": "hwwE7Cc2S83kjhAZywZJF5aJ2X3cYQiQkvckeTEmfdzEZHx1v111DAQJz4yMhAEip2npeb4ZKHfGWECAi76TJsV",
  "key5": "4KBwZHPtqnYkTCFeUngBGWWTE2qQFrNTAo2oWfEKsZtQYhAXUtF7fQxrZA2mhDGU7mKwzZ5GwSxvuNXdA2AaJWrz",
  "key6": "394Mdo4mEaHu2sEzexG8KWTdttbgiXWgj24yqtX3hNKLuNy2yZasmscgpRVUeyso2aRuupM47SDa4aRnc5tPhrBU",
  "key7": "3oouG8mMutvK8js6MKDVmQWS6AGVRf5mSp2DmY4AjXKsArGRdzprbxEst9wuPavxuwvnb68i4nprjAc1zx8hMSKF",
  "key8": "3iJEZYrdq9dSUPUi79ooUAX1jwf7PpD2yAogYyNJDURRrBXYyLB3X87DapFrnCZPF5sjdB555CxLQKXhKM7TqbXJ",
  "key9": "2VfZbWzx27unRoKkKhYomtmwQKtcVDejUFACAFRUN92mwWq1pmkxZipvUXocGUJ1yZV4rN1khYgYmistP9eqmWaW",
  "key10": "5rXsWcxDi3azss381sxWhVrBuRTVXKphtwiqQHpdxxpjpRGrLaR2VS5RrfFPsoYoFD9sWZz3zSFfMjyUaga47opi",
  "key11": "3qdG5dcQiMfppJEPugogtUqcKi8oyg3x8PSYCXs9Q36FK7i7Z33yVx1uZnNVyUvfW6UmC8QBMecf41C7CZ9yo4D9",
  "key12": "4Hh7415maG14TN8N7heY2wswoSXDomxEJ7hYjmiWfs6TNe9SDczTEwZfkJ3dXK7QPqVjwea2RMxfdpEShYshZB96",
  "key13": "5bDQVnbicqhqo4ghViEFirSfyrz4Y69RCHkgku6FHc5pfL4JKhMyXFjicLYEKUe7yerMmfEeSnJHuZ3hCsx4w88",
  "key14": "4bqJoqZJe7nNsc4t2nLcWS5pWypUotk5PygSjhweHzA3XaN1f6tTazFNEESaWoZ8myMhvTQCdN4T3tk2gQHkqhE3",
  "key15": "3YVFq3aCVduzyWsjsqXn2EngmuEbxMJzUrZYTf4m2k7BXTzb6q13zdoBQPAp6dRy17QGMNwAA6iMCWiAduiCYCyG",
  "key16": "3znKoeCjsbWoQGdHskDDsthesvmvh66fMNu5ogrjFAcwaaU39S9Fh2cHg7zwnFFuDM5MLxMsYaBP8P2b1Q3N7QHe",
  "key17": "3ftPhcLtKSGGcM4H8NXgyerKNKpKZZqpoz6wLGPtTsW5BzgBwWKyLdBk7sT3Mkc3ApVzhTDyBurqLRdhZPPtsR3J",
  "key18": "4YwTLVqZyWJ2ZUxfhQ6DCEn2yyxY4xJcJrGNRDSGFWbZ4uKGbHak2AGTM6misro6qoZzwxbojDdZ8XoAwQ7jenBk",
  "key19": "3LNotWhGg6a2yRmxNEisZWJRJgZcBaZGsQLiQ8CtEY8ajWKUy1Q99F6PBYxn5EXgSiBZGTAcrbc7u6nWhcd9WxPY",
  "key20": "8Lmuj9jDVDdTXeegQveSEriZhXGZFbPvZoju5SgeJ5hxS4a6JDDgCndtYRu9DDTVKHiz6GQCokvd5K1ktFHko2B",
  "key21": "3Y6LM8YRigSpFc8PkEb9akyphmz4tb1CiTruD9BRZKF6GLs7XwvuCnNPCGjjvfabwAx1dhxxb46yw4McLx8w3vDd",
  "key22": "HHi8gmV64CvzZNj1isuoA1TJ9FJTu8WhUqkny6HzLfzbqGRRiJPPA2DVV2JNaHCtV3Fp8sFayMHBYVy5KWQ8wMa",
  "key23": "2Mmzam2qz37zGJKCohvSmMoxKpC1GC8VXKEJ5NQd7goPZhy4uYByWXPDhkbqprAWL76NtuEK69nQ7KA7XDQUFmSj",
  "key24": "3P1WndFy9iHTdLU1QxQnJyPmz7a8NfeSgRnxuMVPNxfAmrkgaF78b6SK2WN6CnWTZGW3d63EJJXGPmNAZhUUonEQ",
  "key25": "5Q6Rz2CLge97zQxN5qpGfcyEjmzqdGHvDj6pSgUkPZkRjXfc2ccbQvhAwjdoJkjajERkRkPDrievE2snHtnycYav",
  "key26": "3ZUeR7zHUDdeyb8b1zXxsNRHAFjjtMbtLxBFuti1tJMx449p3BiVe7wm3FZXraMDnJCwPeBvoHiGLzrvJqPcmHMV",
  "key27": "4qkjrHE2xB7JQvqWmA9NwURGdjS5ZivwJcojRwacEXHVCztnndLSPEUPmBPBTRTcQnWov23phyNVYjrqB1E4RBpn",
  "key28": "4dz4x4ciNdmN8cP7pyWCAxg1Nym8txiBXmXzRULpoW3Kdgzx62LEvFkC9fJVXfHqc1BLvwBUbyTYhaPFqmAisbxw",
  "key29": "5eLMS3xRmjbUiK6uLaqJFRUNPPQDV8uBvimhx3EdsL8EMoYCsGvsaLtFVvpDVAFr6nnGt7uG8KehPpa1WBjkpwKH",
  "key30": "2DHGz3g1YwSC5h6rrK9t6v5UW9nVQw57w7pqBtKX3uHKrCUjAg41tCsJSaQUeCh3MjeTWkFNeWuVfbdzi6tJLcDv",
  "key31": "5CBWJEbmp7aYLexgRGNqe7wGgaHyrRMzGGpgA5ALhRyfo3ZjSGdaHzGaFXKwQ85Bib3scpG2azFECRi41wYWSBmC",
  "key32": "iJq1JEvAAjwwXu4wJr5YTaufX4JHXasBkiyxWGSACsoSXqZ2Bmc9E4DCaNuDqbj72sLVcGCcha6ZxKe1W7AfF3e",
  "key33": "5dmoyVKuMiUKHwVMgFnJe2C5cqwv6yb3bXuCtaoVu8SEYsfXBjEWxFnnNBzd6pSB8bHFPRPoTrLaMxn6f5HPY7TV",
  "key34": "qWhCUDmemipwPLRxmRZFwWkYizVScdmAJZ3HGm557iCy5S88JjLQbi8DAXYDnuuqjPUEbcrk7vGBEaRV5o4Rv97",
  "key35": "2M7yisEsjJe6bHGVugd6LkbVhKJBomrY43WUuXKJ5aT1G3MVPQ2cCpmrjCDaX2pbRwYou2i9pAxWZYPvR1wZj1fK",
  "key36": "r4yfmGSLSzbrfKan2Bwpbr3ZjAdWs1Ws3H9ffTVw97X42sWt3Wsp4V4ibHRsVtiQy6BRBF1pGFJhsJ9pu46Ghb8",
  "key37": "58rmtTivQXfWBruXkwRHfMZ47f1JUqgeBqp2iYZ9xaqJVZtM69JrBUNE55bTi1moPLP5AssHXcdHVXKoEEPXS4F4",
  "key38": "4ueS4T2uGyKdgL49S6UMpiyJ9JHQ7FTy4WpKGjJAsjGAspJqauG3QbKPuRgc6attwx7BxhhfyUvrW1w2d9equTp2",
  "key39": "5vYjvsu4y1UTiJWvMKAhrgddJp7Vz917YyrnwmdUuwo2TMMizV33JVTf8Er6r4QDVvThKW8fTSSzx94UsceVvJBy",
  "key40": "3gC8AgqYZGwhiHMmHeS5xJS5Vj1FgsCmFTAPzBtVoYZzEP6D5XnwiaoBJk1LMM6ujFF5h1cE78XCsjHHD3r84Jum",
  "key41": "2AZ8uAR8xHxo9T54yRv1cphuLUnPDwb5qrWPXd5BP6RUVgYoW5X9VnpaFry42w1aE831NVc9nYBPQ57w9FguwtQ6",
  "key42": "2Dh8o5PYTBZ7tCBWM6WcZddWcPhtBws9LxN37zBpb3SSAUstXe8GHuB7cV1vkREscz6zXa4jVnjtLZgeNtXUo5GD",
  "key43": "3KNvdnjacHWCUcEHNpAUg1wKy8AiJkYTRVhT8RzcccNVyACtxTiU1E2mbvCLasjbX2VQoh4Bi1ApDZwa56n4QrUR",
  "key44": "J49W78VmgbuFHA3BwT82k439EJUPBsqw7LQphVexMJ9663W2eMmHKPtCiUyHcEKvBvpB5sgd25oUvVgmcm8kUTL",
  "key45": "316WaJyXozEVgZxBdxezqBh3VzKs3UAhXcmdyhr7GVKgs9pU2aK6cKp5vwUrsTE7dSaqZUfm2xQdPwFR9qs451QD",
  "key46": "4WxHs2e798u8tBZJerXqgWZjLexhuXnDe6zyg5G4FK5W934gKyivWbqugZvmCW8RudPwh2RhADsQTDn9bpdTvEQ5"
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
