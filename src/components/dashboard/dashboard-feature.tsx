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
    "qF2WsH5BUgmo2bBu3ZWNXLY2wikZ9B6YoVhhTyNZoN8jp4psioYFRKAnoUBL6EYntANLmVFwxuUKepSJQXq6p8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2Ktt28ToNDbbZGLEYcdhAn3ZacbuWGHHxHVKNRAER7qsTvEjmjZ6mH8XAWF7cUVHGDsL2YcxZJgvYjYnPfEEEc",
  "key1": "3Qc4iS3mAvaqi1PemxYVKKChKc4sj3M3A1ZjpEnnvZbJGm9DEY3Bxcjj2nMPYacjuuToAPFnafQqL4yZNqjVv5iL",
  "key2": "2GLXwwJKXykpShQMuQwaJBf4VLP3bMrspE7rGnze9Q2LNNsEHR38wbctQjFByQNSyxM2C6PuaGL6GUvdMS9qax4B",
  "key3": "5v29NvNxwA6WUVGBtDowVkjBNNgfZZQc82NmUuxQyqGVNesc7f92jFW9w9E3ycnEhQWsBdhx1skZgE8N73y1n6Nz",
  "key4": "59oMzvDiW5agSVN6MLjXGZqcZmHYK3L5wmMEWX5LFqC5TCLzEqbBQSbS5riF2HQx2gSvmvi6NEJ6xSwsep9q898H",
  "key5": "4nnAr3jPNTaqhCf75SrhjBTW68NuEx3xg8YRtLD8z97PV1S3TznA89625aapYsiJeH4Sh6KEBBCniKa1hVpbefja",
  "key6": "4TZ36714VV5XNPExHwUMkskEqzbL6vg5eAg8UGUiK3rRHzHzR6bceccHG9Xxfgc6JRXMPrDrCTS5xZsFvh8oBH3T",
  "key7": "27HaQsiWMsF8furW8N1zx3YydGF6icfbtwY2HtsSKADFv9HeXp9v9597rWfuqjoMDxkoFQSuEYzja5J8YitJniub",
  "key8": "33rU447dLQLjszVhGyVDgauZ5e5G8HqHa2PiEAoVDhzZvKFjnrWqHwnN9hAZw6mGiXdk5KYLP3gCVD4ppSezCkS1",
  "key9": "33h5PD6js73S1g6PA5LTbzgDzUHBejENZRzdT6AxuKidSWCEFtEDAAVotRnzw7QeF2vZzn4JVwazMxZwiEM3Nnsu",
  "key10": "3TWUoPE1kYsJzEyYx23Lcq7uTfLxbBaHtJyVmdAh9MAJxQswubFkQReFGp12FU7K88SZR29V9EzsvNg6SypBp4Lg",
  "key11": "4f47bFy3dWs741AZtfS7nYyF6gU268emRYvhmrLfBKm8M9mh2SXyg2wrFVR7t2oqsvzjSciMNSMTKXzYScEwnPdQ",
  "key12": "QemUjQJMf46W9eyxVoSxb8M1fmzvgsS9mX3RVe7Xn5wk7tLqv7huHrv21UupKyrhyPJFxqnVKNUT8HBm8m45pZT",
  "key13": "24G8pwnCcSfLyHN1g7en3rwQgyCx9H61DPAj2zxXUBV13z5nUoNn82pr4ugHwjs2g1k1oUHSQrbGtcY5b5oB3wRQ",
  "key14": "4ngiKRRNroRA2tUZ8puuhFZ8bN4x8gdUnFQfx64NpKZwjRHBf1xjJ3M4rcNd7pbsCHyFwY48PWG9LuwJzSg2L6uT",
  "key15": "2iUZRhgToTmDKCrBXZE4xKRXMsu4kGpPQY1zpPL1o3dukS15Du6DJcqGuX5Euqtx8GFYE33TJym3XZ5QBUe85kKk",
  "key16": "5e1teJSeRtzzxKAUpBpebY7BcBM2ZoX4jEAStZpTjETgRquMNuZ1WnsdbmhEheBSvsx7CMKzYeGjfdcE5bBfThcZ",
  "key17": "63Eo5zdHTSeSR2g4KKx48VpC1GGV2iNivDnojszJEroMFKLE46UFH7WRnGbgsDhqtdcHcsJzXJfXvnEVJ1HsseKC",
  "key18": "3BTemEgZJh5jUHJj3CsjwuVeqTLn1kpXEe4JkaQa3uvN8YrBDBGEcdsbiqvVdubECarrwjLXkAnXvPSnKxHvr9xx",
  "key19": "GXKj5FzgqrC4HjNNfSqmYzt7Gt8eTGTjSe9QWY4RQFEhbTJTdU9PcE3y3kepyLaPaAPmvpMTByKRKXRtmjBexGF",
  "key20": "4aQVDd8HmJGJDLTMNy7VXXEkW3uvL1fu2XyDJ6MWtkK37rLJ6qvT9RWwZKnfsiBE6dSwjFTAryEYaZEufmun95U",
  "key21": "xbSSAA5CXUG5ZdxYGfkD5zppNqzV6XQyd7CckBaYSgiC7S8dUkfSGdgtgFBwnUduT1g6KGutsrAF3x3tXeb5BUy",
  "key22": "2udmCndTMJJ7kZ3txMeKjLZ9EDU6Mh577FJDjowLYwzYtYHzpMrWdoUj2S8L7JCduoSow3HUK3Xg3jHqB8YY3ov3",
  "key23": "2xpXQCG2q3NcXaS3aRBLHj6bGEUYpkrpEpEzuBxm4XZHJA9cjadbmRqgsJ9GeSf8CbwU6dRCEneDH4KmtViuyoLc",
  "key24": "3Q2d7qzJ1S5SZAxwYQbzYzAFvQ7mREfoMENvXKkGCEauSto9FDdaZVY64GKtKK2jyLXffreiosnKJZocNiMDT98h",
  "key25": "5SjPxHMBP4EHfNR7muHr8Ycbvajyw61PBu5RMHCp87W4dEv6wbKp4PWvKoiczZw7ki1M6aDwoF2jB5YkkfnYhiMu",
  "key26": "4jrknADbPYG11DAgcFbJMRRPM3DibbCLAGHWz1vZvn7SzVECJ7DStRkMJK9KfGZcuCHdajE6JTzS7BAqz7xk7uYP",
  "key27": "22QwP2Rc5ZxqaaFdVK1BqQpuBxE8kzSbt1eH19SSDRdyiQDRZiHoLda3v7Lt7sczJhzu2c6ogCsCt3nuGwaQxjSZ",
  "key28": "38Y9c6RVJsyYH2wUzgYXzb2yNAYvF1m8CBEBt2zQWZt2FtyeDfbhHjvGeRWrWXvYsdrDypgoeKa9fnje8jHg8Csq",
  "key29": "nEXax873ci2aJ6M9Dtg8MtmywpWmU37Vy6DYJ97FcynkgAhkwUG1usU6hAiT2hhVRRs9hke6fc9EdQs53t2rHqq",
  "key30": "38G7QDipQb9dbfjtZ47GsYgJ8PBry213tp54x5W9h3H7M8bPnmxpHQ1DezL8M1YwNK51yncL1yKHSjrjorYSfKc7",
  "key31": "2SBdBehE53z3KgS27ggPdDQ8RwFPV6haKo6cEgsxbLmcceQ2vCv35ZmbYv9rtPAwkcpTEiHWSMogtkHAAYgQhRWH",
  "key32": "4ZQN3ybwX9fG5x91iWjxHh3m6EfHZshKTnWvTaFU7oXFyjKpufUHQvNmKrHZxrqmDz24MmJaiaE2pMrTS77D66ta",
  "key33": "kHzMSBncKrHFHrK2LQC5849ZKxsxkT87KSRiDs7usQDyZ9dCqsDH3iCHQZzPovt3fS8a4DHAeYJ2d8DDweQ23K5",
  "key34": "4p4yBXScmLic9inGk6yzgKpEwr6WeGTjC5REMw4ysTXJpaocMaJ9udn5Ub7cKCCySB1rxXaXsqnxpEWqmrRpdjjA"
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
