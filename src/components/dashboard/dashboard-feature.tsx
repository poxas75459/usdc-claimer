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
    "564s3uReaQb56diJbjsatPLefxjAeRrcZS27MQZRTaDRWQXZt6boTJzioFChjq9iDuh8W1T4V4ERXKLiDXSJJP3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAt3NPa5kCSNWqHiexNqUSadH5ifatB7xvhgy5ocHqTmNrpib7bozDrCh6yUojGvSFuZL2GdWiyFot5yT2XLbVB",
  "key1": "5Dmxm4ezrfmgJox7cCh3xYPVBVnNz9g3CQGW4X2Z9ihqYiXg2iyQVsq8sRZRjVDBBxn76AtsnRqCt8stVvLWhtZ8",
  "key2": "41t6tBnAKcrqJxS3QqeAPG8pgYRB636iFZdFhEp59GjDTZoJAr5k5SXP4KFsHGKFbqefmae79qu2i8PnQaTsLu2D",
  "key3": "4SJx6srzRYWfdaoyKXfDWdZJqReYg8iq3g61ih17hi51PkgR5ggSRcYTYJZV8wiYnSXu1UAALEErgRtNFhV7wV8w",
  "key4": "3rfRGVsgYrLnzTncBwZdDT9zQWjX2Mtk4wNnbQAoQiyLpp4WbG29r7VyoA8ZtwrenS1HodVe8zmgHmcYKBzY3Pvt",
  "key5": "5rKXhUrqocdgSpMehc6H2oXwuZdYe32VaKfUJLH1ADKsFFybANjWAyJ5YrQuz6yJXbMx84GnVWmQdu6FwVMLkc6B",
  "key6": "3SwhJzpGUacAR7qwyTE8yJ6NiDbGiXcydaUfKCdtpY8UvrMgjbLUW9cuAy5jpVhYDzv6c3yHEBBTtB76iVuSoz7t",
  "key7": "3QGUXmE7kQ9u3kBMEQZoFrXP8gtLmP767HoNF9y8sEHnFbf5fkyQe1QuFwfXAhpJKvsgJyGqVnoR3eFaSreJSGnm",
  "key8": "3iRymR17SbvfzDb9ioaxHzs9Cdakgs2TnEroX9iHp7LScPFvDbTpniGMTmtU5NbzQVkiz34JbeFhTq17rVTgsT6Q",
  "key9": "3Y8DErgA6tQuruDkhHiK6CA2aJvGh6kywN5Y7fcS475Y45rXG5E82EroY56Hb1c4D4mTNPJqh3DGBpDikpkjCjoQ",
  "key10": "4PAFuFSPGLe6PpzfunMemVSuFAirby8doNCdSXqzZUCpnUdhn5hVJmXjqGMa1GcR5UQWhmydbvatJtizqX7CeYKS",
  "key11": "Jqcin1KTyKkTBfTv2G6b1tz61cwauxrUxhQN1gkxR5RtgMoYum2jRWvZhBkursWVZvwuQDXgNWiWccWeSPbkcU3",
  "key12": "3tHxzCQBSpo36oKDNC4XFWH3Y6iizxzbbH6sUa452fwFb4JCA3dG5WK2xzVK4XduLC8CQJVT7zUcD4gmn4U5aEgA",
  "key13": "4YgcfnUh4B6MVQLKxmBkYZqZc6vHYDz2ajHM7x2rT7bUpKZHimGYC6LUigHtwHCs5w6dMxwJfr5BmEaN4zfmewQy",
  "key14": "4ewbUizjPdvn25mpyhgrzFHwM2kiMKJreeZi8nSy4ptu61m6MH6NHjJgQdNyQTtGyrDmphFtXE1FWd4EngzAsykK",
  "key15": "2TBFTjdWHYRc5KHTZTa7DLLMkBDmmnXzgb5M9Fb6uMderKoPY9jFZtcA2Fe7aCQNnjoj7SRvKCbNnZHNy6wdXS6k",
  "key16": "4iTTvB6hZacDEqJTDvyWcU3A2Y89jsDH7s7YJ99Wey7RqsjoHe2xq1HqXpJgeysr5LiYzFQ4iSnimbMsfzTMACrB",
  "key17": "65uDxnUVEPHQa9cxZ22gcxwYxqH1CaUfvWDwmwtYeojNZVfNKkGPaVGuuJG23Pd1hcpGzHC46oxo6oM5LLYffM1U",
  "key18": "4WtzH8FGBuPd1aYk1uwXAXCJL5TUFNA8Uy1k9SnLuuQr78uP8btkkjTEAkXeG8mSgj5gJ7K8V7VznmtbFXeUMKAt",
  "key19": "2BSKc5gqjPnodCX3kUWnMPPCDrLveZL1RwAuJCkPAqfZrALxU1aeQZpSuHGFdeeZWvQ1AojbAyFg6sKGkrbbWfxV",
  "key20": "472LPkA6wvNY8jLSYPH3iD2WAPXGFmoAip5U4oZFo4F6MCkdZoFvvAq3uwdo6jX8To6uAs4RYXUzEyBnLP4z2xQY",
  "key21": "4CgYpnbS4774Kd7igCfaJEFaz6QaY2ciR3SNdo7yvf5rnqDUnezr2YGJdMNaTQtsXSuNY4o2cjE2Pj4ibm4seeNJ",
  "key22": "63VxrvheWc5ZfAXVtTNgPpYso8Q5awZWPF4UvVBqx5bjGcssTeQ1eAkxbAEGvJgGKCvVewNV9gbjdpnyJn2Q6qYu",
  "key23": "5yAhKdhSZ6cU49CJ4U9q6kFkHDV75wRWGhFR8fRho2NLn8UYpad3crJ4VSqj3eE9GFdeYMHXu6sC6y6xaCEaKKRg",
  "key24": "4UqfY6ufEEeEY5WDzQ2LHYkUuKFBkQMprYMhGz3pBg7MH8DahuvPrsecUPUMKj5mfM2wL7LSUn4AkyAz7qfTYEge",
  "key25": "3PeQBeZbRDiwSVmWhyRwFYCfLtz5Ty41N6XVnBufZbcXSxQYaY1nsQCf5iXdqnCAkTaNnUMUqxMQLu7GB5hNz2vf",
  "key26": "23FbnFsMp5qYSJnNULNxdFuzdGEzareJL7FgsgChAGZqqpC14RZZ363UBSTfVGPUY24gXPSfZJVjjiwyQ7bitW6f",
  "key27": "4P4PVDxzFkXaCvn7MPrLCXocwQxgkx6uQQyz3wtJ7ERTXqxhgdu6hBidkFz6L7LLhhEX16gfPR3cqGPS4UL2wjsd",
  "key28": "2XBuw9dJonoJBs4pBT9xj71JRzbehFw8PD4YSCSLQpYMLsDAxsSqmx9mgpZGM5zM5Sg69MfrRQVPxvDKVcYnb5CP",
  "key29": "3JEGvEq9MGt9YzwGYNLcYKPkqMBXmW8E5eY2tVg61sXi1XphcwWTjzKpzrsckh1gBeYYtdrjN2zpxwLwmyepjTDo",
  "key30": "5xDNcrWXvjqVEbRBSCM2555ksumW2bkKzFKTvhp5trCqXwHz2K98GFXWJY6qHnn3uR8qwzm4go9hHFNP4SmaNyRB",
  "key31": "2iuEbwAhiLpANweZr2w4ajF76zYLM2APt7x4y4vdjXwfw9zZsjq4FLW8yvBJ8YEBnJV2KKEKKQ4JfgEnLquQeuyL",
  "key32": "57BvrGHV7QNj8zm9SPkfhMP2WexufQhheFaCskvftMvj1KM7UqQjvhmoq9qRK17rLs3odtPj77XLdizZv2FGCEGs",
  "key33": "5Nei5jSKUL2Jqg2TyE8W4PmAaDaAHnS5R5rEpzLueDKFBE48dHTdYQLfgKuRPmBRjuk11GbE9HHsrWibSwWwCDUY",
  "key34": "4nLsCyJXjcYtRWTwJBwh3ARxLUZSVdia6AuvV5pkXpz5BNPPh1jqCgowgoWUzmVwDZ4coe8bJyUmGKxMa8bH6rhm",
  "key35": "puzPTqiGw1z3kM2mVzh9MwLLNKyvauzMRVKx1CubEbgWBggTtNNeDLXpwSyoqJ9MMaRzJHn8rm1hNABFpQRCdz2",
  "key36": "3TqwnzcfQ6AY9pbTFLNWMFZnipFSxVui6f6RMLvqEZ7SEXd3oUsZ4DjfqcbQR77mb7c5Som3aauSU84xUvX7vK3y",
  "key37": "2uvdxYSBGGC8PDmtL7KuQrGCe4KDJiuVDfnJhnoLLxwtXiFdnmNXK6a1evZ7TuawmTh6eZRM4DxSrtUSxFZTzUZy",
  "key38": "67S1mmySDAHvTZLs6XxsqMoEZfrfbrYYsEPv3YEHmA6qeEMD5KyBdWgUwSGov2qsQxkfSBptpuxGsEBS53M4W9w9",
  "key39": "37ybdJksCqshB6kpYiGQdjtsq6wrndT8tpitJm6yUwj5ZLbqBZ2TR4VAgUdBzgV89fHJhQJS52k5oQANJK6Qc25K",
  "key40": "4CLuaK1uHk2p6uq5vp946uJsLSjhGS1eESS4AJV6hfX26fHEtqU7dPzmqpXFKtpKytM6Pi68HgKh5BM4bqEbL2tD",
  "key41": "Pq3FMPemLFiDPxhFAei4wGLypM46YaqkG4qgjcHeVGHFJb4NwwU6DFeARnC5V8cpRK9sBH9ViNHmaZwXu8hdhvy",
  "key42": "5JTHUF2j6AiDALeDRkUHCPvjdu7y5SNSoNaP1ZRg6i8KWbbRbS2ua8V3yjJxYp9JSe8cY6xZJcLqucM9tTp7h5Jm",
  "key43": "54B9CWiWg59KfzhvuxgzEsD6Yeg3EKLzep5aAgg5rv7tEZvJUWgam7Zos8e9YUhdYGGgLG6eTzDaGmFSLYCoCeA6",
  "key44": "5YZFQmcMX56k8zd6ok3L1unRMhjbrVpocwhmyKnbFeJPgw2XDLxkakfNetBeABBRnTXTGqcbxfLhtSL9Bk18iNfX",
  "key45": "F8JCbt4YLYrM958kFSRfwyhsBVzAtAZf9mymcgdttf5NeHRfqQ6b9gxXkvCxqHJYv952i9S31Y4YAzkWzFzxc3V",
  "key46": "3U4PuoBYq62KLyXKRtRUT91fu5STN9FWP4cgJPXQn1QEJfKdV9cmb9vunvyBPvWEzTd543qU21yR6xYqg8NZzteF",
  "key47": "4CDwrqDxY33Ynm5JJf3Pkzow5XTpfSLgc3Wz3prnHiQAxnA1Q1ZAsvR3MXDcjWEpaGF9T4cxjnL7mFt2psxvJnuT",
  "key48": "3E9MvVjyzges3yxi887LDYNZbMbkB3DP2aEbzhxxiE423kTbRC1EtbpkFoHEDrKZoHHihMsBeZfzKBmp7BDMqSXr",
  "key49": "eoj1snCWD6RzDwwKcBmoQBGETB6VUvuvwJPLpcCCqpUeTX4xstSsH19wETwp8W4h8qszSitmNCnLkPRmutb34T4"
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
