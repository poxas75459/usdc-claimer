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
    "5Gi4o459dZbFxK3wiAoqDetuECeyAR68KpqV6iHZRV2sfhZncw99kY7nynWUTgNGjYZ87tWBgdwzxDbssS9NdvSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5r2NZK6ZMZqStyJS8Wnc3CompxNz6naa3sFv9iWrXepJZPa7eAGg9izHpKTx2wXsMgoddyPcB5xkYNdooE69Jd",
  "key1": "3o2ZzN8p1pdbpQCdMGvFZFDEQ5YUrJBKoiSmsubMY4nCtHXL2Mqupc8uangwJ9Je9jdcJAfVnoititzYG1Gy267D",
  "key2": "3uL4yRWwApXpQX6gnWn6LiZCMND1axABcg2ozRwe6z3P6EcrXL1YxWjP16NkBQsyzz9TAbKU5DcX32VxoT9hzUPn",
  "key3": "b4ETLVdFMLUqr65VSWnasZkynN1f8SohgmJppFU3nR3qWf7aXosANwjcGD2UktpvG2s1oqNvAda9oeP79SxugmS",
  "key4": "zCX7kiqzUGTT1etBZKGdVSrv2AySyaL6YrZc1Vgj7WYSR8tMkWQuT1ANAZ4Q2WkGBPHx3tS7TvWqJ2Bf1VTPrRU",
  "key5": "2BDt1h5dq8wjk3KHrNTowJqDSuQHYPz588dZjFANH6zaMc3KuGPnUcWkboe4FKzTTJ8JYPjQi4eGN6V73dwsoP6k",
  "key6": "5CeP4VwM7ESCwknvFY23TnxVkeTNKUNUSHX9RhKh7knnyV8GwAZCSZZbG62Xmiw98gKRBRbQsdgw2ZTtZ2AikzYg",
  "key7": "5Dqxkt8RwtKfwdLp6aRgNGbzCJYxiQjYdNzNKWh8J4t2QFbgYKDbDtMTVG9EPsNaqMQH3X9e14VrP4K8VNLELSNa",
  "key8": "2J7UL7vtd7rp3vE4BzcpGscpENrSg7Su7QtWud5dm615HW3WntN37Fgotqq9spLz5faXVJVc1pwwUcZrShvHFk3n",
  "key9": "54iwMpsfJ668jGQRhDFgYk3RfwResqetN6sDtXWnCPeaUSpD1y1v7aNKu46WU8J1U4kae9GczFfU7PcHp2vrKSsZ",
  "key10": "4NMgs7oVExZVcqM6XSUys8YbgFiUDEUX2rhpFM8njAq5Zihj5abVGtnPzSuwsJSTZ68HYa6BooKpECeZXESzgB9k",
  "key11": "2gNfmhbKBkQNSubnAXwa5Ah6QdJFiEsDRFS2uwp2z6VMZiVGrk8zfU9uehrhWspL9cxq1vobzH5ZG3pkjdEwi1vj",
  "key12": "5VSXrGs4otcZKnWvjzhcUx2QcT57M8zG6MQBSPgKXuYiLr2h1eN3Mh8LkQqvvZefLiuvtesGoe4V37KcjaQevwtL",
  "key13": "2i6fL51qDkSLxTHLzLfaioAdVWp17fGQn6VWkFhdDMaviUiAzNviusf9ZuVmeDPgg81Y1AHFXoseUhTmrKifJPXY",
  "key14": "kcqJqmTWtT3PUaWBKiVLTSrA7cr1jd3MNQUebNtAYtdSVHKr5txvHaFEMRqtkbzfHGWuJrgU7rJmh814wTZzvqD",
  "key15": "2FhvAd88v38UedYmvGCe1nEKBUHPjDpeuwvSZHUh2Q6pJnaWaBED6BcZBfDdKKBrCQH7vBHHZPYcJLrGcTJYzhHX",
  "key16": "PHJHrgXEE4ht2VMMmAoLufuUQGy3YBprxG2k2gVDWwz2iWE8HJRfjq5GF38BdBkUhh4TaATit7VpQsVKob71nec",
  "key17": "31FSfgWxL1fq1Qam29sXtPTGgDnhVgDhqVdqb6BRw7unwZk9m1wHBHFLDmUF8r48YmjuHb9ecNnL3HFBwF2oDS4L",
  "key18": "4DgzUc1MdjcSGqEhV7iR6uKhApMvpPbXYr5PkF7un5mN3H3DLcj7SXe67SKM8p4voiXvTPNXjoYcuJr28ygZVzVx",
  "key19": "35ts4byoQZyMgMgsy3T2AaNfjezRNeEqb6WmUoUkLjKB47DjP1dQBnwWH8hhnMCckF44DtqryhYxcxrJtLdMhKHm",
  "key20": "3pbwanZaAihmUvxc6q2RbqeWEDDDnNoiV9kjqAE1G6UfcMN9F8UgeLQ4keVU3LnGN62uSipMJZRur9aBLjhGrTyu",
  "key21": "4Dq2FRKB3GztncDHi4vrtBHk7n8iugbd84C1EeUiuvazCqrgWPR3nhCYYsJhppzfSGMMLJYBYzge1hKep6ayf7rq",
  "key22": "2NneLcPxvvoNyHE52emzSSNvTfPCL1TZRfN6PtER7SfuhxvZGRzp3cNtCMhSgEzkH6jqv2r3tZMjRLYjcjKvxX9L",
  "key23": "2rAhKAPJ6q8rrckc3KUBWvGYecfh865ig7eYv2Cae8ExpXrnD1ocdFYgCBNnCbpEvtJ7VjunMyT9aMECeVryPek3",
  "key24": "67E8jegJCibFBYnFWFJCpYT2uuLdm2E2qnB2QEfDZLuvoBFvDsG4PU4dq8qVYnV1nfVPj68omnARwZAGtBBgjHzN",
  "key25": "45p9BkCZY1ou48a3qqVycp95f1ngfwtMG4KMTZefgubiQiQUN6fWcwmaG73FihA8T7FFNxr7JtJk7xvZvWAfSHvA",
  "key26": "2ZsyMNqs8TMDVxjV2oKFzSj4BLALBYWhTNVxJxpvZChxUMqEmMfCMQpNQeCD229tTKCPrtGPY3GmLYKWvpniXT5n",
  "key27": "3dgjgfiRgjQztuzZ2xvVxgUTNk56KByiya9tHxCutADZfeuaK7a6xSYiP16nWHedV6ZoUVzFLDgPGLHgrZnLny2n",
  "key28": "nPPFWtxkD4W5rLCfWotZzHub5uPjgNdVCk7kyMuUbuM5yec9jMQGWQT35n6x5pLipsQgiSX8hehvyhnKShKuc8S"
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
