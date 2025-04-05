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
    "5q3Wa8uiQMt16thQgvophoqjP9q5AUw7o6DEB2H7GLjVDfbAneGMyBPXNqdPyp4a4iJfSA63aavrRNauuabJFcw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TeLwcXx3H7LQq8LVWxBsr2qyzpz7gTZxAsSyvWC7AA88DxiDGj4nNNGJ9a3NnQH7woctAPVsDRPwkUQDXhDqUJA",
  "key1": "4hGEdGS8a8AbG3xTVc3st2HufdFntrJuoVb18vW3zf3VEWVeZp68234LLV9tZ6wbYmLdkTdPS3JbVo98fgRbU97S",
  "key2": "3KXaz9yZntTnY1NpGAVQj7bR5RULs3xpLPKXpFBCxJzuEN4Aizfp1b6Y2cGRKjMjLLV1xZhM5ZcnqJaemhWzZrbt",
  "key3": "m5bKRnhs9RrHcTQqhZRDb34gnGVUZGDDKzYFETCCpJh1kHatYEoAdWMHaSWTUSLPcpfhvSRvu4CGkW53W4aK5pL",
  "key4": "gVBgU1PEwdQihcQU7tZzUCA1ggNUPyqhCZyGBFD2M7kcrPBnyiWevGWt6toPrzKjoRDDGSiBcUiBDPwXRMB2P4K",
  "key5": "2cYtqtiqtGvCg8K6iqVAv6a4aXy7JV6NxhbYmk6wucCcqfZo2b7GFFbpE7f7CPbeCSGT8RfMWhQHFeUkPLuLK9QY",
  "key6": "YRZWYsJnRNMBJstnaXXP5WNosXZrCsszt1SzimxBnKPhpkHmxwqs6NHR83siHLDqcpP3qR2Y7C9S6NZCopgH7MB",
  "key7": "5Ri53cgma8risMwczucCo9QCZZs82eKN2DtVWNgYTfRdVi4wGG5HREsB8B2VTAf6bv6G8fsfkjWkWxtP6ifxzrp7",
  "key8": "hL7DzMGt9BuJXMdaB8ZoFnPPNnMne1TCVY9CckVGsaBVNF3K8esNz99gGuzqodFVUQjo5iEvNjkAR6ak2PwYrGx",
  "key9": "3uVLDJApeDbxDqL1hmnDukGRfzns22paSqkHRtqHN3pjQ8ABLTTtWFBu9LE8aJYWM16rupmZrV1tYS4CWdkt6nKM",
  "key10": "4nYcUsuFmmv4XDUZMES5PhK6yFP8NNXiBNg1iJnEFbkFRcXb7oUNNNwLe9L1CwHZLC2eXhSWupB7QVYVjkZMLLK5",
  "key11": "CdjAEELKyCuUcDzAmDqLi6Ju7mjamWWc224yvkt7b3Wc44QmBGji7as3zuoAkQaLZo8ifYjN3CYTaUkvdRmPXZJ",
  "key12": "57wrFjR8RWzXeWgCxeYVyTCDYAyFw8jUqjFRUXBHSkuQkHdvD3by464v21bMK772oWYddS9Chab4gU3KY4uCV4VT",
  "key13": "t7WdXTxN9f71ZFP61xADem1FiWxJpY5CVcn6TM7ryH3anBCqznhnE93QJW5Vwjt9fXQSpQeHVL84s467YpiWc3P",
  "key14": "64s4jZTDzrJu9P7XaJwssd81isdn7cvm37APyTNZzwTqdEJhQJR8LVcdhJ77kb6sEMD27z65ko7sTfiWSir46vhw",
  "key15": "4KsqEPMYnCJ4RGYHCSEQhMaj6CjQCqAxyDmyQqoYsJXaDrVQBJRLgWqdxkS2Psdp6WALLXsQ6LLzzaACjC5FnuPa",
  "key16": "44sZhpv3Rrt2HxRmjTdVp4TiR1dGemUpcfCbXev2dLfMhjFy4ATTCXtUPWHsjJtHokPzAYEr91xVxqD8BvkGZjsf",
  "key17": "2dZxaq3YQbz55hrFzDsvGvJz5B2LpwcsFjwQFxDd1HgMf7RA4soapnDyHd7j433mSEsBRxjpXAt2a4q1MWb9hWvc",
  "key18": "4Q4J936d3Nq2kCFkdQYeA1CUg7xLad9JqxSqMb2nvApitUeFTQN7rng78JRLHp4AXnhyDoS8w9hRidP35TZAkxHs",
  "key19": "2kEZ7vE1UqSAq6AKYwrBYesgdEUNCyY7UsHJqSVu2851RSrjKnnUua6ZhTCvTQfLgauvvexj61pDnh6c1svYU4VH",
  "key20": "2nFDxXxhQHN1fATeGKjnNhYnMz76LqaoRnSc3X9Y8j4BGX21P2zByz1gFiimeWE6LWwY8FmnJETVwD6gnJPfLM7V",
  "key21": "3Hka4NAgZfiYEvUSnsZBGj7MaFUhdFx4cj74A4tpvSJSFDvdiv1ABReLX5DRPiV91aGXizBrewBSgVpBLCC5R13d",
  "key22": "5C62C13eSBT6sQPuGQuG5i8bnJSu5A1oA5kz9kCjBLRQ6V6WqsURz9ST5Nt4Xd2cTtso5we5VmX3zDAb8B59gbqs",
  "key23": "219dRZjchZaRPF1faFxdpsqvWskrmawVVPpjs7KjfYVn1yhSUGB29XG9GiGDV8eBGAfDyNdUXzmUcD4eEVVfaRxZ",
  "key24": "4c39nUFK89iMm6xQ5aTRUR34ozMu8awxRJkfQbGipTipRh66UzwSrWxVr1ciFhZRWNrxM9bLoCLESWGSVeHgL2aQ",
  "key25": "5SJaK6HMFdWT3AMHEtZyCmFyCm8LqPmpS66MvojkjQZmeM4rKbSERLmbWZoYAK67U9qMtgaXnSRYEKStvgHnfoMe",
  "key26": "371svn1sdWRzzCxoWqw71AU212oDtFfQhWoRjNAKsoTpzQvWipKYBKVAVni8x8nYMUbKS8TnceBkNBUXEjXXN3VL",
  "key27": "5g52EG8Jh7LunbSrdxfieUVxfma2RK5z8pAt4TtUF78Agdb9ZzNgeAeBrzo6Vw6qPvAMSHU9nafuTcXcFFyBzW6",
  "key28": "46F29JBFn635EfmwqGNyg8yHn2bhG9xJ8FumhVASPRKA7YyKMbcU9nMKA2Ao7QDYbCAx8vABg2QWMW9qu2xNAF5U",
  "key29": "4Kig1aPS7AgQoz8en29BcVCgZUnVGStvhgBvpEnQEwoUhpsmYygY3Va1mGi5CFxcQJE3SnvZ2rnipAhp1Dbg6o1h",
  "key30": "2vFRMx9FrbQ1y3Lpv5T4Xb426xM7wrrq2SfJpcDwpSJVrr87qd4Kpq6nnskQmaizkKyYcrz9NGXrX49AUt8oZqz2",
  "key31": "4XmJVMvwELtyu4TPkVbabHFx9QzqpB2EqfXT7fBvSyfVtx5joWaPkKntgScWMA4Mot1Hr2SJEgK919wKTTqhCaBy",
  "key32": "2QNCcXM7HqMn77N2ZtTHx1DMwhSB68VoZv5DzL1nhrukFAbPfyLwdzsZVnQcQzggdujeBgigRnRqz2p39xr8i1Ku"
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
