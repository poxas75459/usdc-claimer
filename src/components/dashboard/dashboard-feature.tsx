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
    "4dzk7L4KkU5uJ4DnpSXnwQ33qHyr4a27pJoGcqYPhwtpviFJWaBKtjxJuyLw6qtRbZc3pg36XKEAFRfZjhGnqDZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNk1nJnwppEAfiC3vFPRqkuCgxLsb1ip3odQ4ZGGuArMQYTkyqWMrwtGXXMvbFAzXhg1t7Uz6G8aEzVLa7BucPJ",
  "key1": "4YhFWRVLYwJahqZf9BM1VJ5nzfY1Zi9hRc8odKF4M1GnwjghXZMktjgGFH3vwsDPQ1Q2qN8MkdD4UvpCgtUp1hh9",
  "key2": "9gye2umHPgPNimvHdZD2QrAia1Z4rJjb259fyFruGMyAe6stLqocjRTFRoVb5vEovEPYxChMBPu3nPgk3XUJjKT",
  "key3": "4Vkt2iUGNRg3h84Xi8Hi2nncojk7w6mM4A5ezELLobWiZjY2xa29HbJJrptxRFe3DUF829dFYJhV6TyFWXf1nboN",
  "key4": "36k4i4tQ4T4JqDJb7bkn5ucJmLRx148mx81sSWwZBEhEHh6KarJzVZ5jPXbjCeAG8ACjgZxNpd4rfFGXDkuZJ6Uk",
  "key5": "3EjQehn1CEFDcdwB2jpNCt68u9wdDiupehKU2wzwFE7GVBSxg8gvmHmfgEQzKsKm5e5trr3dJkB3gokuM8aaL8Lc",
  "key6": "kgEf2MtddriQpbRJiVzmjfj6mFaR9nNMxETPYHWLipZxzLBdfoXXPTV9FB4yEANAySwpDJry2YSBXjNctj2xVm1",
  "key7": "2QZBBTYPWq7dsXQ4UYdqaDPinshZw6ufjE6JEmJpfhHjm2mjPeWj82Cn7TsEgM7QktfeJDkQB6JF7uMtJwM2hMSf",
  "key8": "4pxawNWq4Rs7HGDT9ncQNuuZ5CEnjJ8kQFb6cJQHJbx8q97Gw2X4botscA56KvhdqFYSAe1mUmqiqXdUVC3nFE1e",
  "key9": "3ETqHrqPRfapDcithhbNMCUKv3GAipzCrgHH4kJ8epQqz3WvsMiNNx9pPD8adBoVj3EnandbAeU3RdwDqDZdKcYD",
  "key10": "2ZezE3VgxY47e3igB7gEsRbLf5dn5h5oJ99x7Ce2MyxSwp7SkS9KwknhGamuGBvrFx1jqCAuqA2BjcnKk68nLa43",
  "key11": "XPD3tTNFz7HJf3Rc3x52cmmiPWi4nQCiEmgv58d2QH6RATZwYp5tKCFaReeDh2tsx3V1oiNRihZNk7CYjkMm5rp",
  "key12": "TnVwiXjBufjTheaaquUBFo6tAowDPLS88VSUnhSzrq8AnLnP1QCLuA14iqiBiNb9H5Hsu1kia7nLwhjra1dMJnS",
  "key13": "38EKPQJmecaVHroWrQJnLxDyYN5LtCpvyVms4pKdgN9T8nqq9cD4ZStBvGajxSQgpc35Ynz6XY8K43tLQx7rnEF3",
  "key14": "9mYLZdm6BnZ1YJCEKEX8ebK9CgMtmBQf8JA96ZcRDhZXZtfM3fyrAeN8155wYYuLCc8Ur1SVmKFjTfBwGxm8KvM",
  "key15": "4eq3uVPzGfRHptPonvzemv41HuebGxBjmsVDxDwsrgMp2uohBHGETUyqVykUfzisynbczwdcRc1wakQ4Ti9DXrmr",
  "key16": "2fmK2P5g5KT2frskcSddkp5HGiHSTeVSfzZBKBUb1UGtyDgXjTjgeAsGtza4nnGB94zuFWo21bvpzoMuumqU81mF",
  "key17": "cZq6zuVaHfUduuMkDQMXaax7tFALogzh6kA1AoKLcJo8v1DeMQdLaQYeikkx3MuAW3WGbMwN35KmM1SyLMFRqF6",
  "key18": "4YRerJchdrBrV3mtVjHscmvTm8GgTbcnm6z2nHWC7XSR22L92tYrDwiY7jNEkvNk2ubR3HBb99xbLwN6JEKfVtA",
  "key19": "2gPfRMTr2oeuTQvbGfhrFwaHhZMunbR1YEfNWJFbJJvQXJpNTFqRFDkiLwNpUCCLRGBo3h4BtwyBcHQrtfSW2fvg",
  "key20": "5XAx8mKxiKTh2pGk5BrtEZxTaEg1M4d3pjgN4e9khL3JaS6R6Mz6Xi6jzJCfzK2jwxS111D9kjCj3gLF1k12Hhwx",
  "key21": "5zvcn9newmEsfmxSjQmJTiShTgxYN1QtqS6DjZ9aKn1E74L2VSg5QRwnK18zvFXTkz1YBL86jwF4D6BZEqdccZH1",
  "key22": "3GCau7U6Ped6tEJcRHhGKMqacYUQtoCmfTj61xj2nCGCdEdVDmyKUhpnH4KNwkHcQPwbhQDAUxgBxChVYGg9H6tT",
  "key23": "2zagELENLdt8qwPq2nsWY8D6WFqKNhmHhS6NQhAFuBhZgKvd6gC2ZB2eLz42x3tB4pz2rWbXWCv2QnbFn4s39PnN",
  "key24": "3VzqdS1fPH7EQz7FR7TuH1hhVPGypkgJbe7NHWMyamMG8U8NS3ep6YGVTmx4qzZ1LmcKR4TxoZz3srrBjwR6e7xC",
  "key25": "5YMPwgNXBKbJ1JuCda86h3FLYdqtgSNSweYTt8C9t7uoYpRGzqEoQx5dRMDMhEw3QWM451MpbrXZHAZqHS6g3mCo",
  "key26": "e8Fz9FyeZYP31cHqxaHxELZTXjUrvfStcZrtK3JsACGAbxmKh15FsGBM4DEvbYXGkKxRpmVxfFJq8fdngbUJM2w",
  "key27": "5DY9q4xce3fTPTffgaoje4v8HBLuNPyVjchAugR3pUBr2MpMDWxDrWVv6ax8yJ3qnGnjK3XB54Th2ktXU3SbbPS5",
  "key28": "577XJuU2vTkPvmZPVM5aMnSNiP3MhFQ4xWKc8VYNdBbwomYsqeN5oU9DvmS4kJFfZMGL6DSEKnCYJJitxNr8WCqk",
  "key29": "2oi8o6CqizBAxEM8aEKkHxVXFU4ooThPPuDuBCa9zYvcVvR2QcnoweCHsoV1JhNEY9kf59XdxrFwYG4rwJAkj7f9",
  "key30": "fqnCf8js9ymYYZwW9jsMGSx5vxwoApQJ8pi7gy3pfXoU33d9pw3U1zkm8hfDhjukKDLU1QewQkniccxSTkof4eZ",
  "key31": "2E12DU2mLXsbdeuC9fpmMYkZdJxNeTYTUdkbnd2A9gAdV34WKfEe4oopvEbgaeuAE31ndUdSwazZjRn39NJCMDcT",
  "key32": "5izMrSDY9fW34AJ7s1qPMZcSE3h5A3ZkeLEvENMPMpVhwHArqQzhkbyLTTz4bGbNnLDrAQ9DsGDsmCKxAGRJuUkQ",
  "key33": "3y3WMVFyMH6urNykSLdXsxWyu1LBNQ1Lh5arDuB86p7bn1C5Kd2nPTDAE3bbpBhqnLaNDArqKaELmFyGYgUekYVu",
  "key34": "3tcMXwofiDiTYDgBexcNANss2281PpRZW254D4HyHdfyoAFyAXuDEt2fr9osKrZU6qiVLkW2rqbuMuFiER4g6gHT",
  "key35": "2EAKuWQvHKUZjPwKMxwYJoUvFmwNmDBRvn5PKLDAXm8XDJND2qTm4uRdLfnjK7fDETuEsr6RNTNgFR15WjUAAA3t",
  "key36": "5um9wgAkBUD9YL8ZspsmMkcbdBbLsEau3pQhee9vpvut3XRPrWLHmSUi9A3BZiuDMY6DCf79nV5iiMCYicafuMX7",
  "key37": "4Ynqb7y9fG7YCTEXmntihtLkffDHDgNmsju4Mvcq87Ux3WFpn4vV9Xi6mtA5YyXGjtbcCs3PDa2zG1e6MRaEJNDw",
  "key38": "4ZNeM4Jy1trA2iNJbe1xnesHgNL48juUDuCMjiYBt99aCbDN4xDu3xAcboH4HehriVw3q74Hj2fkFSKBoB9dFHiQ",
  "key39": "45N7AedrC7njvj6snBoENVUsRgyM5xq7PqNkMh2VVAoiSmUdnD8m2MkazvVX7ebuEEK1oDACDcqBvfn8gaQgwRG",
  "key40": "3nztdiZQAHFhYGLBdrLsmaWmqev89ieU5343MC27mWgmznuPxCP9G7CbD9LTLxGMEsSy8oojKr568XNVvsj3N21a",
  "key41": "37Y8DkezKWL5EfM4g6UbUTqMf3ZXDC49wSywAHRkY6a6uPdN97xoGL6Q7hgEtqDZRKnmbaeKvrD5QbjPMKho5Wgp",
  "key42": "2CtM8LLhoM9X3iKXFNw6jLDbdyiraw1wGqKRpGk4L8ngXUM5VWu1bHRgsQdnKxxnTgU26zLV1CDNtEdC7psSsRt4",
  "key43": "5cGnhx4BN4BzptzGTQ5tYZVN6HT7ukgQjxNHAHWG3kdU3g2aXZgLj533B98Fkqj9DkAKExg6n4cJjxcwk6F4iuzD"
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
