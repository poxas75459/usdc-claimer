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
    "5xRm7L9dxfZw5YZDA19dhKG5pSfJUsiAATPht8jWTvyop6vpurmhWtYF6KQrguYTNjtzU4yU7wgj2WhmBWRReCtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xwm4wmTCygep8cz3py67uZrDZ71GxV4G7zhQ4NxQC7CmaHUhjv2p2hQVQHx1ieRHQUftzDHSkSXcDAPb6MCtZg4",
  "key1": "49PitF5mPZALHfRbYrGisW3viWEuSwhcLHTort6beNDj3jKHkQkU2ftupaaM63VbJjAMRc2JYR3EAcHp7WSBHVf4",
  "key2": "px3WVa4FZbGBCe2mcGWn9qGvSmBJwC55UhZd34dnCednAY2kZf6QwvanNDEuB4mWAqJZoUXGsJHSEmpUchoCgVH",
  "key3": "3LUeJSbfV9wm6Zq8JA1rLxNG6ki9cTdp29WdAbdFRgscqUdsQNRz2iy6ioBVgjnGHJHUJyGPfx5UMYp6o1c4mH8D",
  "key4": "529U2W1bfNnhofPHjUFFSQdqoSkq75AvKNoVTXNJDFC8bEEGQ5ooos7V5gNk9XWSa9KNgad8CRzasAfLakDC1YZm",
  "key5": "2MFr41TvWsC7zj4NevGbDk6MhMfGZVGsaMEM49Kujz2ropftZ2m846AL5RAb8U92SMHAX7LoBHJpkii4bmYsq2Wp",
  "key6": "W5UqwbJ4ZDfQU1H1kmy1yFX37Wp8xranPHoPVxEUCUJuTbnKiH8bnAQVWi24nUFU9ALMoEk2HdyhpPk7EifBj1o",
  "key7": "3vaEK7tNDYr3UaBF7eKAgmcASxTiDX7hhFaZSUau5yaUAwFcsdcpPE7yZmhpxu6meUgnGzaqW9uxm4Wjk1AN1wBD",
  "key8": "4HQrMEAkyFkohfi35iYEXRyz9CJ1VrhTH5FLnsehNqLguEpFKvcFRCw16qTop83Xnbv17E2AmSE8BgZAU3fDbEMA",
  "key9": "3MjZnhRC6miFehqaDcZt8G2Z3iTvemMbeXJrNPYcFXKWTBs8dzUjGNHNhLjr6jXanAbebrQAQg5zvVRafVyirF7b",
  "key10": "4fESJ6UJbxTPodquDK8fd4fjhL2uUkPHsbh6nSjCzqKSNZBCXmT4Mg2DDQgB3CxWRVu8CFqSBJpv3dZtmeoDEWcr",
  "key11": "62fYxHxW4SuoXjNBb3jwBAKYhKjdrkv7qnvVUqHrZXaZKV8Pd6WyM7jZTxbNmJqqZ28vH566ccEqMnjr591wTv1E",
  "key12": "2dag24BrxQpSYdYB6MzrVpqyA8Y1m61K5FZU2hUjjjxfED6sFBXwu7FPYVpNxyrT2XVwYArPs1W6GPgV66QPMx4",
  "key13": "kP6aMGxmzRVHzZtLsZ4kKC3kgU4gXW3JQFxtgGonG9PHV5xdQqogQBPQk5Hz3WW6r6MdTdzPXTCX2T2XMJrkyv1",
  "key14": "24BPi4aeAUyeVwdrieBCWi9CYcs9HC6ZrPJLp3LPswRJoHcsaHLHwstFJ3Cc1XgrJZsXTWCfEkyRzYMxDV24V2ba",
  "key15": "4aa1ku7sZAVLpC6EVuTShZJpgdNieAFHukgZMG5uWHfgecmNRdmQ3wRpKW62ZszNt1aoFouKQ3iXXtd4TtAX3Tx1",
  "key16": "4KVGGigitgDHP7ZueFQEotRKg2UdUTks38pnHJLxgLNsifeV3miNLicveN3nvdW9KV6yBZa2pTiwUXKbUnAYxaTi",
  "key17": "3QbzNEUiPKbjrAy9yx6ZBXALxaSYktjAzxuGZemxvYBWY4gdMRErRKLP8Pp9HaPhF2XRVrNDDxzFnr5u5wnSmaMZ",
  "key18": "5JCRGwnQjtMDBYQYiu8MR54ZsZYbfiLP2Y8Sjnd39nxLufYUMgV9eh1a2tF3iNq3U1kwr9PiHRs6mdfMEDuQveHF",
  "key19": "iunXDD1gWR3Y8TnAny8dCESyVJZVHxe2972tGVJHFAANjXLfvdKptVgUD8qJxvc9DzxTPpD5HsqkV2fR1PZ3QL7",
  "key20": "qxYbZiSMFdEdjHuRECnzJC6wC3E2eqUG46EgyVg6JfNYeUCsS6QuWqd91nj8mDa2Rho2xKrZvW4v6wLiX2ThAFY",
  "key21": "4VfmVxL4eoFn87NQ8KdRqJ5YN5maxP65EfS7sKmguSb7eCjmnH6jChgS5ZgEVAysv3vjZ3r1HSPdtzoTjw6XkqKm",
  "key22": "67R8Rfhx1hBBj64cm1hofPgdVXuJE3N99BCRZH12EZjjg7CQajbPSKBrwzQSANirXCoWoYo9DHwoVP738Y9jZ7CR",
  "key23": "2CYXMee8C1puiESSPxumC6E4LiUfDnyA54ynDC711dS738QN17eScDP3QuHyFoqcoqgvAs2E6Pt81Z73ogHsouvw",
  "key24": "2jnDv4pB1u6gG15t5gBuoPDa788kx85taaHm8yGxFT3mhBDZLyteChz8RcmQ29qHU5dAv9UUT7nczNYVnUrNcsHd",
  "key25": "2Xe88VrCyskRWxVDQGa3NDswTFPvTBnJ8GvAGAsUuKpnY7GNTpKniiCbbbnp5iURH97E42DGXhruEN52nD5XjpHQ",
  "key26": "4ztcU19K1MzXsX5fj6aND4FrNRgVAkCxj1eGzgqyKFzzotEeS7oyCx68rvEGYPdaSobSykXWjmz9B71kKRTri7Uu",
  "key27": "rAJCbN3i6bh47Q9BSeJmcg4Dba1U8zEueXYS85SPWRmZXyaYB7BCifiRkxKDkv4CmW5gHTbXf5ahNbxAQNQABov",
  "key28": "57GvQfGEfguiVsZGpKTVeYnhUB5EgLHqgkuMbKd1Ef4d2Fo9S1hS5WvW9sNwi5b27x3Zdd2qcAKejBk9m71kc31Y",
  "key29": "5wKzVB1SWdcVzVtqcVT2PcoUnAi3WTy5qvRu7wRRFzbsN6YaviEnsWWuLra9nYjscf2Rrbg4PB4F1Tq68rp8ki9M",
  "key30": "3fNaBaZD1Mk3Q56ZTCJCNXdCtRG7xNeCQRvhTJZH6grYQPi9YR1FE4jcwrZEkYweC6umAfteHbdSiJyqp4FFwU1y",
  "key31": "4m3Tbwx6ASLQg6WE6rByhgxiNfs1YMwKRKC2zTmpe6GMTHjanjk4stuTb4ZBYNuZE8RhG84buEddAJ5s6DycQDce",
  "key32": "v1sLUekt4Fmjy2BUWFB8aZMM57PSdMJj5xiqm7f9j3Y7xDQxRARuWfbSLv8WjjaXogjTDvQpDWSHb5dGeEw4XA7",
  "key33": "gCF3SmoKxHqs6DJgaKW96xDMuSGdER17D2v8VEqPR1picEXJVdAFe1rnTedA37AxqLHpXrNVg27Do95PDwB4bue",
  "key34": "4fgEFpNLpaoP6J9WQ5SczSMArbYusng52ehrRhygATwiYJe38jm6UoUEy4he9zTsBrKBPUbYbo5cyQxZm4Ucyci2",
  "key35": "27htCzGePTyraW9YJX5AaLxtButubqvPtADYb3ByadicxVGb8EfBrR6Gu1AGkQuitF8hCbDY2zzyenGoBDYUqbHp",
  "key36": "3RycQ7Q3dE7JAuD5sLSNJWm9SU7GRD2vx7uQwtTSkQQo7aVv61QPg8Jq9m6wpvvGDVtMewj7wB14DA8nWprY1Yku",
  "key37": "4mUFNyZFScFwLFX5ptBaoE54juJ44PPKnKF1AbzBmoRkqE2qJzYwmCCav1WGjLrBZxvpw5fKhdDmFc7jJ9so3729",
  "key38": "2VWtAsFsXNQsJHMxj2kFjH5sajEZbqAj11VV1aiC36PZggYJBffjzPVw4yjKrBrGGarCyZY2fgcHGdXMmQrz2fLY",
  "key39": "5LoBwsDxtvWRPUUjvzjhRPGMS5VsEhiBfW8mbRAUyryNqp5aNxSLkWBfGSYHJCsP7nou2h52wLSYvqwQxHSjFNu4",
  "key40": "1VWK7eXVacv3b5GCf6XzykdJLYRP1gPxzRxipTMnZpvj9RabvbwEGWFkbktxsU9yRzrnDZKj1nWSb3Fh99oZqVk",
  "key41": "F9pDstNZ3p8SooqbRL5LGn8bfCHMg8yeSXBfjVVpCroVfVgJb2UWF5FysNqMMykpkr6vgBXZB3yyUzdnr3hSqFu",
  "key42": "49HVbQtoSZUqJm5okqocCU8QcmJWtrmCNWhzGPkcrPbwtzSKz44fm8SjAA5wZBN661XYvZAfGzurJPSdT7q9CUFx",
  "key43": "4w8uDyet7QX1WYaL3HGcvyb28h7wY9mRxCuxfh6N8mDBo4FueQyQoiJknRdby8sZvGsbJWwkXrszGPmC1sRpYkn7",
  "key44": "4R5VAW4M8Yek9rmNo4nzrymh6GmQFPnNG61j5ySLVoS7ekRg8oyf2d8mK84YZTDiRLRcpNzPU28B8jFiESDbcimT",
  "key45": "5cXubdD19qrephNHXK4yGPngtKRmrpq6TcXHfo4dWnEGekxoMje8zzDqEhWAw4MN8Svj68kNnhWFmNSFFDCwdgTW",
  "key46": "sLYw3GcN9VuSqJJUfNLvcKAxRE2hErJrXEERQeXFy7djX8UmVaDDwPL9SwKKWikU9i8dPr2jzQ7GUSZVuYZjyNb",
  "key47": "5BzjQtFVdPFdwHPQtcVVgqBiSRQDwvwG8xNe6hLZPi7SUubn6VjsH63RDmizXyQ6A5khMZXHnQu36ZYz3rKFYNdd",
  "key48": "2dDN5cY33hzHiym7sXc1Ge23ri9CgJBSu2LMsLuxMQU45tGsMJH2pdt1b66tq1XfpBufJNoD8odbCnd1oErKQWUp",
  "key49": "5uiftddHTnukRMbZCkPMmaz6fHdRtAZM3yHkLRzyjbTcN1aDnn3wGuBaomc82w72uKjZ8GdFiCQH5NZkzYAGnV19"
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
