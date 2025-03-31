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
    "4jPxc4jXpRCz7afcE6e2BSoXdmokM53jVMiGdNfhK8moZoTwm8jFMqTsu2Fd5eCzEXCuwQua6wjYV65xbWQtUFVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQsudW8xPfZqURBNMhY6QEZNxRNKsMagX8KcCCcrDyeacv5hXQg4aE819mVvmrBcUmkM1skXLhhLC4z8PG2knhC",
  "key1": "3mR7KR5Y67osJoXX4sjPcgz1yYQFeH7zynwY1SFmr1BtrdAvKnx2jKJbZthwdgiEqJXVayUFz41UrqMH1EcrnNjF",
  "key2": "3heeNu9ZYYejKpe1mVRMjYcrEScGdJ1FezMwYy72CksnuidUVpN3UxGzpMHyMdWJyiaxbqWkWW56AURvbc1Nt8w8",
  "key3": "67iUGfQpdQf8TTZDEfN2MPZREmHZsJQUD2tuU5mdxkR3Nny8Sz7fPuqDnZSQvZQRuwcDZ2EguZ5VC4MhaixFEYa8",
  "key4": "4whS2GYEVXr1puETjPZFb8va73zu8uqn3Xf1X1EYRGme82QmEBZcHfuoTQHbCp9bqjXRUuEiPPVUTjCRqyhLjg5k",
  "key5": "2wfhGbLkivgB9sF38n1Kriz71B4cf9tisHFMrjz7jYvqYYXSGb586pXJLq2tyCp4sBRxHQgvEwVMziovAAWU2Wnb",
  "key6": "54durPqaHHuGnMrZqfU73QnJgwAvPPAxD26smxWFyccpgsAWJbojZ1WMjbdWb9ej5LKNsmQ3RL1isCube64HaCnx",
  "key7": "2XLBGDLeJkmcoMj2pz5bFzCFkxFm2kgoy7djjtSwYR1WohTSBkh2MQ4BXF3wAQFekhCQceaPeEwE1CEZy63D49s2",
  "key8": "3ByfuT2rRNz4cKB5VaPBDekWoshyfEkaghXJuFEEbpGPF6V4GSxiz2pEmopibduZ7eupo8eWLX4DdFX2dzzgVUnY",
  "key9": "3HAPE6L8oDXrBHdEGH6kiJJiJCuZnVtBMTmWNPrV2b4EHYRxnqpwsLiPBTy2GNPQk9UqU63Hj6Vnz1FXujwrV8qX",
  "key10": "66VWJ7wGxwWZbE7NWVdWmQQMj4bq6bQkwcvAa1Bf7Tt4iASXYJ1UaPxNxxkBZ9JLCb8dEgp9fR1yXAsMX7hzG3pt",
  "key11": "2PfBDQxYyLkMJAGYYdM1eCujm96rPJqvxN6ddYtuy7f5f4RebQf2M37gKs8Tb4xjZCPzdWMriBviRjSCujLenc5C",
  "key12": "2sDSNGMSbiV5ZefVZ8dgG1oKNBsDGSpQ7xkxnTmYgxkKrb7jkrJD8eyfJPWeFBFDzbDJb1YPGZ5z5eEHQ44uiwe1",
  "key13": "2pMVWNCueUiA7Cq7Lw2cJEBZ5qdWU4uNJtDt8tKcE464dspAEED4uovwqQ3VfLBFZVRmUt7e81vVefmz3HQzFsn1",
  "key14": "5YQYtzAGBbQVoYQSjKbV9VhjRSNxCD9y1Rbhok1xb76BTJ99NHmjnx5k7GKgveirv8CcQ9Mrnpc5tW5sxDwU3bSS",
  "key15": "2bjEGicFzTczWoA1Ru6akBoLTdL3EkbrMvfhKyhJkr6xcmPDX5a3Y2xuzLQa58JofWC9tFY5JKwShLrs4jV77koB",
  "key16": "3vhBK3pF6R5jJkbRiKhR1MV7NNwKT5q6bkRNHsbwZzwb1w7UZi8ajipWYUSKF5YNbXSyFp4owHU4VXEZUKwv2qNE",
  "key17": "43YyWRZaCPy6PLJRXZCsu2KBxv9vuj6sEbDrsLPq6bE1nJhPWENPx3W8FLoXPkP9WTYV71iWZRNcbYLm9atksBFz",
  "key18": "3fNcCKfL3D2sXTvqdC1CNJ2BhMiZYJJR4vCK1pkPaDXpPoCqPDNDEYqiU85pJrE1vkPiDzbG9d37MaRovKiJWPnz",
  "key19": "TTL5AgVcfAnYF9zq9k6vXFW5Zu8hcxMPKLFSSe1J3NqwgsSLfQj8NKQBDWHffSzGwzSthx4yCe4Awn467Z9Hfpb",
  "key20": "4UJCayq4vktS7NZL4t7dDjZi1bCFiREqVste4iSpDd3HFNvnLEWcaLKcYxEqR1MxKdMemSQshMj7K5LVHY9LdbtA",
  "key21": "45cFSuT6KT8oT7RU5xDnoXfeiwdmwQtyd7EFY32reXexQFF5Mr64kPMYqdJuACTby8Pb4e2Em7R8edc87AUriUxZ",
  "key22": "2sZq8WWQa8qdLi663SJnwduYKXuD71BFPynxzcG3ectYiGMs2oGTPC9Qcqi5pLWfpyvkZ7BiA3dCDKnYmKc45Uu8",
  "key23": "5RGQZ2qnDwBi6U1D3fiPCyUB4FRDW6RKN1AcJmzF28ZMdYaQqaxLKDvsVigpFffbviCqR4X1tFQhtqEXoMi2SALH",
  "key24": "2nVvmmFnPe5nwYZvMxmuVyuctbYEca9jx7ZMvLJHWJLGwq1RgwxTrc1iu8YG2Ce5qErG16v5kEcsxQ4jtgAZb5ie",
  "key25": "4JyobD5VfGev1zDnfJjAJ8845kmN9vgsnPBBcAsUJwYSN8Y3YfABw4tVXvChVWCEZ8HaQyDJq6yTiZCnkawzxSMi",
  "key26": "vwm4HF21Pn5mscvS1thvoTyAKYWDGpWoFCPk57LFJ6VVRSuq4tbfrGqbBJvM4JjbkQj3QbWLGruhR2xRbyR6Zxj",
  "key27": "3bwqiowDy8tdfdF2tN8paVt3jAhXMGppvV7F6XSXeEEX8WdcWsWCr51SunAMszvHj8b3jeNao7fc5ytgU93jZVeh",
  "key28": "3Zq3LfvRyErJHDzstC785dr21FkWqRJuhMeWDiHvD8yV8wu5nmoKhndRAYDaaat3Z74Kr31UR1HB1bttQtSukXc",
  "key29": "5BKzCGapR3pC2mwnYrEKJGcFFDiM5Cbzn3AkrHqRUS4dd7wpXJ8GAAHKhW6tpgFxqVRnkmYFDxoG7xSfccrqCePh",
  "key30": "4wNUfWnKfXKxxkJaEvWXqVJ5K7w6tktQcwC8TXhLbJ7GAp5Tbd7Hz8YPpHSAaFAdSJiTZdqQEivFdm7riq3asquc",
  "key31": "3EMJrk8wii4Fcwomvo6q6jW1f93ywjHvfEsscwDe5FTxTBuH3GXR5R1AFokdhUn63Pj6YefMVD4sH5jdnVcftfLU",
  "key32": "3q4n5wkMXWbibNkWDE9pgZEdjZ78RJBeZ21AWjchxuD9gEejNedTL5pNnq3ksVLW1jbGMqqbxJVmrmErReaqREHC",
  "key33": "46kSvGk88nAN16wey3KFvZJ98CngDRnurToUz5N6bzNF9FarnQk5LtWsLzkDLXXf4x841nMNxbRu93BQ3VAAZnSE",
  "key34": "4XFPkCFBcmnQoKuG13C9fUcBm6FmGH8CuTv36fFybaR7WUFfh5Fcx6UR4PdsDR9DU9XUY2s5222HdcJYNN9ckLsR",
  "key35": "4uqDqT9VWBXw791SsWi9Qrc7MHemjESwRpAC1GgCsCKfSyaggoD1tKZmZBLMmfpifg5pNMy3i4grkHM7JLVC73vj",
  "key36": "2uXpL27df5AntPWV1KPxGZ9vcSdWa2f3HuM3kBPYogXsUTPatqsZUuEQhiVje2sp5yWcHarzonmoZVnvLRy9A9Gm",
  "key37": "3j535F2LGgVESKkEsFCvHvfhDSJfuVpwWfKm3jEqoAjCEYxcwwzkwngBFrWwg3QsxFX6gZTwUDT2WfHdF2FMvw5p",
  "key38": "5y5Jd1mKThYMba3CkfcyPfLnQNxPwHHWihGD61eFyZJa4Rj8veTDwHfdiUxhZ3KHYsrELj745n2vysvL1gGH2cc7",
  "key39": "3kZeDFM1Mt4cgTewYoY9NitC8FMR7wgiGP2riTTNm4Uz7jZaNZr5byKKpd6VSLTVsYTKeUsuAqD7bENh7hmN5ma4",
  "key40": "PQXLFaZ1WiDVDtyVSTkj5GCW4v2jzsNF1eAtCa3g8qJmVbPK5GjYq6eLxCdibTTsykCLGhVRRkFrivW2oWVEQHj",
  "key41": "jQmM8WNTPLFTzhtpZvr1FZEYXgd7HcvhtCEwpBkwNXXSau3WPm5uV8oHF92DUSUq2XToTqtxAHTUsKrvf9gBWSA",
  "key42": "379QpYAnPPCe5Yx6HF69UQHQPYeiMwXc7i1PXdKR5pX4iWgry62p5KiVq62YCBNRsLeHiNxpCBp3JQTt1wsLPRsc",
  "key43": "Bg4LNyjvofKzqAqEuy6SwRoQJuH8APD3xeJJeQD8DAxKYTozz5XecBceyHSeku9oXjFHkDtnxmvYbCfYU49VmcU"
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
