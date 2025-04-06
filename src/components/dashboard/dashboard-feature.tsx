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
    "4xHmE9fP4XfxDzXVitTP1sfKkYvaRu5VbDFLeN2SAyCwJtvHkrRKD6w1soRkhRrAonmFbSBtTCiPenmyeF3UQy4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDufi6PiszXaiL1PC9r8WcFSDwzCMJDRE9tJsytzinXEu8uZ8Q1wTKXyPieAYG7EJujTuytrq9bpNmgzkpGx1Zt",
  "key1": "2NxGZ5MEiJP8MQSWyfjRqZK61R8ovbkjbNRT2fYZWu5Sk6dpYr8XwDwYTkun864wVZpBwTJJsYgk3DaZawzRK9c3",
  "key2": "j4KLxbituTES1W4LK27y2sYU42N1BPLFnkm8v5uWJ8JUN4Sh5JwUJWuGdGtMDqVgWK7TuEkKZbWrQWQtDhd9ioa",
  "key3": "55oGVg9hM5o2QFp6iQhJEpfocW9L1wgkohc8YD4ry8zPcK5eDpVSHSe8C5u3vrHCg4KzGiDeB3KNSAGSFhrzUcXM",
  "key4": "1rES8nqKGqpABVReB6rRT8AfwjadU616rggCgZttjJDJo6yPtpjMyFq1ZRZuV99Gg4aCGrviDpUD8eESJpwyZsn",
  "key5": "4msoQtqP6XEPctkSvy8GGWfGmnJBrShMJ3jqrMnH946AvffFRLW7V3zcTRATXfvxJqrfarYqT3p1JNgtHwyiXZg8",
  "key6": "5awG4JgyVFG7mc4APdXjh9LbrUkjSUhhQc9uwpmw7VZCGSgaCqXZeginmpf8XWreJ7PjFVj55jZohh7ixyTMMBth",
  "key7": "34ZiDKrQbzXrBn2DhvaGbwfVvihXqrzvgc4ENYqxd5AcMfPvtxTg32so9wmZPZQhqhao7FGrCosVG2uK1K1B92M2",
  "key8": "4qbwvLMA534TjPzNSgQrei62DbjTDBwsJCFzncBMcKthD7gSYity8h5uquEnUFtBnLoLRPH6RcAfygudwVYioyfk",
  "key9": "2XsyzkwQuPT5YFg4ggtdSiBE5wguG7Bva7x92YGsAYweycnGW9PWSTbs3vuAHMGDHx5JZ6bAucZWVLh34x1B7Hua",
  "key10": "22go9upbEvbYr9yZdW2tgpPjy5SbakJr3Jaz1ytBeruon3TN35Dv3y9qZ2tKEzDUbWNAVyEuwfRLNAfx5GaB2euj",
  "key11": "3QpXBxiMeN3f5sbUnjb4yp2gYJH8YfCNwDtxzaXkwtoNCw6kYzE3Wf1VEQoMYFJE3ffS4gsaRtY75iUe8vzTB4KV",
  "key12": "3yAXGs1DZdsBfmmf5DgkFmp8fYJRMjwpJAahHNfWdFB4eafAfvPgX1Sc291eaDXKCvxweirqe8ukfNWdZUv2hjtu",
  "key13": "5baqT1zprR8p8vJaxGWDRGnqw1EqLjUZdJBjtWbs8kMMAGDogZ9jKCtEU8kE1S7DX2eUSKFqsYs2wTbJnacYbHQH",
  "key14": "2Sb2VHN3P11PBzvE9bJFJb5fvz53LJd5jFFaukYmaV1y8pZ66K1fWEZgp2dmgRS7P25jAwEPjGhdDgex9KWNV6wP",
  "key15": "4K7yvrJJ3JfAjjus3dWQpKo6x8RFctUpfEjtE3Wnpxg5UdxtSrpU8YDU2L8panSKGhaeDqbS3atoSUM69hAGmmLR",
  "key16": "3enZqHuDj7FvjXGCzhx11tZXv7x4qxYW4LMfX6sUBjtFcY73WrXv41YHhVgfGiDnZj7P4NvFn7KuA88ZskpFbzMm",
  "key17": "p5k6NGQyHcxkHKvxeRHzy5bw6JkTBLynUtrqjLMMkiPhE9wRPHZtnif6ww7UqCk91aXF3nVvkwY5wTZekFAVXeA",
  "key18": "4AGhCRcyXeW2m1vTqUECbXRRm2ZNZN9GPoxqt7FAtgx8Si1da7dwQ96XZSbkwpvr1aorFLC7fhCqwMUEjoEsseFY",
  "key19": "R7f8C1A8J5jCaoWmwwBLxPXWGJhNXHxmM32kk9xoxKXPcM8KZC9QjnikseMXc4Ndmob5rskEnPYKrNakvfz3s2Z",
  "key20": "4EmUr8RpadK1C9dFLgAZx14bTDQrf6uVfrbhdjuaSiZDbCC752oLvGr8CxK2Qj3jXjFo6YfAmRefgNfR2a6EKztk",
  "key21": "5zR66n6VMF6UZG2wPyJQFK6DUzRD6NsMamHN2EB2txgQcpgCzc2YsC1kUjoTAZnvSEXFGhJmbYPzV3RFZikF2QgW",
  "key22": "26ThiohVi3kLXWJUtEzJKeg7ZPZ2QERDwC1pY47VigwoCv2FvqrPL1CnGWVLmZKexSknCbkXoTUH7oirpRoBwezK",
  "key23": "YeHpYCXp2YkcZuerBNJXu7AAH27Rda3EF6okCdEhFW7sM9WWEJBdsbbq5rUfT6dseCUzBSy45pzY3MEwHnaVNmL",
  "key24": "2AC63RJTMj8GE6YSnmyK4LtjwMBzipxXJwsDEW4svuYRWDunqCsogr7R1N6zoGftsbkmSnMnqVa6JwzGwrb4JS4E",
  "key25": "4oZQ51ZQvjghQJaXvJJYJdAB811DUsSgQjuHPtavecVRox73MpocuMnyStc2UfMA6h4GsQ6vZiTm7wmG61mBKKtN",
  "key26": "5pA57s1XBsDeTqc9XqC2g1ey3ukp3CJPdybzJzugMvfcVtnuHXVxBqbtPcjGQ34Dj1Xr8U9JZrb99rM87g6yDig5",
  "key27": "3BAZrRUvVnMreEBmRKneKY7qn5CW3QuFeMw7nnkrHy9SbFN7rj4dsrFTrrCF6LuiLX59P44SZBk8sc9DYTCUdrGQ"
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
