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
    "4MZci7aJuPGbibhEnLPAurCZCwwdBT8zSCkiBozLxmiNduuM3sjt2j52qxsn6TXaqkBmyoiP4vDRSmjYiRGtCvZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAZS7omrKamFKjQcBCTnyUuwxMzaPUGsyw4Vm5uFAMUKHsVo1Wn3pfYTHEBnmZ4Nidthwfeeg8VFgdzo3W3HjAE",
  "key1": "GEA3ntZ6XsKcZeTKR7wdmW8vh48dvJRbhZNgqAH8KUYfqag6sQSEJ9yraZzoKrSF3VCQaGAapnPcw3rsWYwPtwD",
  "key2": "3ZAaSkKbj1htJGa4VZBw24ewKCZAgcpSwihQy3YZanLkhnpJyEMjRcDYAbRheCZh8NahZMMi4sGSnH65YtsMh3T7",
  "key3": "5A9KXsNuADrCF8AXzjZNnQxid3CnahdS39XSWHyFszuXXcHu6kYxVd79MfkL3K7icGV6yYfnULGqditGW9ftWk1z",
  "key4": "3s45XjhcrtNQmcSN8tLc1bsJZZxTUNundnKnCRSvZwxR618gysLeVEvUqkfEhpUeze6RmV8tgckN3kBx8bZpgHJq",
  "key5": "62HqSWwZP9WG1wy6VmH38vYAaQ3867h3BxZ7rp8xyfzEcSKmXrbLtTtJyLLoFPXnsyY4vuQcvYedempHq9K4iWAP",
  "key6": "2taUBazR86GarsdKtCHC15a3pwqfutWJPMtYHpYCcz4DYjeHd6Afg9bKxh1CzBSAiUurjBNeRLrYtK8BqEZQkN5c",
  "key7": "s3R7ajaaULeHX37WP69jS7fKkVWZLURuE7avTerScyJU2G15XeacNpHS1o2tBy9iVUgu4o3VwiVse8LMRxEdCMV",
  "key8": "3srKSa1enp6VzVjFZcvDhBHC5CNTvqB2NSagmz1b8G9cQVRVS563mrHAqqWXL1xmcG78J4Tai7QF3MNETYrnJxTb",
  "key9": "3J2JvyTDBuKY4U6kwRGXmHFQdqRs3JB5wizVzi92bi5vg9Yy9ozksB3XiNnsSwsLP8mYbjL97EKfhFQ9aXZK86Ho",
  "key10": "3AySqP4i7tSmWbgMw3PoSfWqbC42Poq9EqAtneDsk6gzqGdECAH7hn4LCQypFFrSfVo3aUPUnMSKLAhpdBZ7EANq",
  "key11": "2bFWH93JeW5FCHQ29rSHXtboFjhgpdc8vAV7PibjTmkbYXaortA2sAYJfVbga7tTHQUTFqa5TLB2sgnzGg3S5AAn",
  "key12": "3Vc9ydi51r2DURF4V5Qof4iTbCSANgjmEKezN77ho4kKbBdmTh6s7jmeKMj7AthwcM2Q2FnBcUM4S628t3tyfMqE",
  "key13": "NHBHxjkSoKA1kDJg2KGqxrHdfv8PMaJ2PQV6814cpaBBz7dpzSzJ4F3JQgUckhpZ7ooQzQ6CKXzSrBpcyWtfDuk",
  "key14": "4BjCCyqxsThTsNVyRELb23GZfvXSqfFXbyssS4AqxrvYdy8EL4ZRzJqvhkzRZZ2s7ztLYjGP7D5MUAKeGGi2xwpR",
  "key15": "4eiTA35PXi9HPLkwyZg9m5MeRtXkH1c1Hj7S34b3mvM3ReyfUQr7oN3q1MZtSxhE73jtiHEa7dR7334NztBWSJJH",
  "key16": "2eQCZ1x6fzQWg8ppPSukSxbgcRyCUr7wAaPnN4TvfKfkB9491h46Z7BbPaXTxYcxkLsGj7YpmgJ8HYMKv5WGdskW",
  "key17": "2jDe4QqfGMjTyqEtb89NJhCA7NWbUfoasaeWHtbfPVUUeh5nTEycEbMrZF1pipo899Vr5Bf58pS1tkfmmFiBYcsg",
  "key18": "4p1qPgSBg1JWsxgeHd7LGmkmrJSPMbxLXdHG7nGKZEJ1WXzr8wfRmXdk15nre7goxforTUyABobHfdve7HdSxdLU",
  "key19": "uEVKKjwAmM1ywey7R7o9n2HsFLsdjFnwGtM8U8fwsReXPpgWzhAD1pbb2PjRqr47G3LQ8T4vL18fuTQi2itvD7J",
  "key20": "PYR89Af7hKP3coc4MacBu4pGJQyRFZUMSuPZpAeTK2NN774YD14hfuX6GGJfiYBCuUKpZc5XkSWtjN41d3kkg7s",
  "key21": "66JpHPA8WoZYGUXUzZfgwwTgeisGTYeKkXC18UGQnyyqEFRcn8CdTBcKkhukcGWQVa5JMq1pbyKoSZLLq8D8eg2Z",
  "key22": "3a7VKDHJuA837oNXqjk115S8pVPdKNT3qLnmBK8yt5py65RBiW86CgsVrXT55bsZXraU2r1sczpuXgL9LV19M2PG",
  "key23": "3EchxnbpyiBBDLZPVLf7C9VquiHQtRoc5Ekf6vB8iufAgFFGLMoSJ7hD4A5iWxVxiZ3oLTSdUFt4heeXjA2CMZNw",
  "key24": "56LhVDS8RVw2pgPxdrPJ975NPeFvwnRoCFiSJuanTjGyGvcakGvLPQevQFo5TS9e6xRDWqYwDKMaArfL2LRqBWsR",
  "key25": "3Qojoxa7QaV2hTpPY2ZYTPFYi3CZFCLX4DvA1kQ9tE5sT474UcFnherbWbtsLWMnrS5dvAw25zthqd7ED4VLGtQe",
  "key26": "5ZNoBWWcNAV1u1mfnpeM6HJwJJUF6SLsrkufr5uxfCWTrh4FvwGZ3kxt74KXUKLTk1SWibY4sdNgisRBiqCngmsT",
  "key27": "4HXRacNSwwxErCejq63Bw2XqZ5j32FPqAX6MdwB7puajbuethyfEtetWW2YHXrSRZ8EN93UFvCqzyD1ZWRBmZ72L",
  "key28": "5MEV7g2WTGCNrzNsAiGrZhikxTzgnnSnc6gfp3gfUXsZCdicbnvuBUSiF498wJGVnTeYWT41BA216CA47yFPyFCQ",
  "key29": "4f6prVgXrdLYjHzMDmoqkTu79WNTfakDh9sALdrEzzB6imLa1JRS2TKyASZg4Njezp26L2yt6e2G3AD9Aj3FuodZ",
  "key30": "bxaHA4QdgFS57mYqtzdVvZLorCtpZvUWdewdy2E1ZSqFHfXUBkS74tz78zALWXUDvodyfESo3E58y5MUhCA51qW",
  "key31": "4ADRSSrZcJ1QXXsQTPWbcEztZg2krRvjZ66yaxuT163W5MVHLi9NGHC5iRoTojPqxWiWV3HyWpjnK6u2tosaEkbz",
  "key32": "46siQDVvHfUZDEm2rhQf84GRohAT8V26ymCQrhrZn4L68hDAczi19mc93a6N43hbB6MoTmfPTELjoYviUMiBmnkT",
  "key33": "47Wmkg7aEYfZFnSjHmnY6qAh1zsnqMvu917ohNrKser2kvWeNLDAUhcbR3yHaN9nWB5dpAoXoZVRxQAMXnPF4jLX",
  "key34": "5ARYR8YwRP332tDvQPvybkcHfeqZF2sKMDi8VDHCZSucy3iVDgaa2QH2zSqUdthwX4txUoBvqZdZof945Kh5LQwf",
  "key35": "g5mEXzdMXrAkWQ1zeZJVdUbMcchSYgfsFwUsRQiMATvLriijypEJkUEaDhggFcota61sFg4zTHNAkJ3PCwHuibn",
  "key36": "28rYWosh8e7epxvDHbZ5QQV7aZ6rjPgXQ85cZTPxBvpmsCKnLC7NCWihRpAHBj5RVtuDzdiEoAPdHDoQ1NcJauTo",
  "key37": "jmEZk9HMt6ue44a4B2rMdLTpLKVfJCE9ZeY97TPAUyWKNhdDeREF924PJWtnFLWm4nnLUXKEQEC6zXpRYyWs19W",
  "key38": "YPNRhz3pZDRiwJ4hbJvf4FetZeFBZZVjrmkQrtozhFmaRVHQEHYNVFJWUDuWRNZgLUuHWPQjNEpTxzG2YNcBnn1",
  "key39": "Q4gcxLjG2PKGJToRaLU9URkTgcyVprgaFqoPUBvm9tz9PvGvThpsuKX3u3U9Efv5Dk4z2B9K9W5vz9R9jdFaBiy",
  "key40": "4C6kU8RJP6wh1VFjCZT5cUoTzmoGtJydjr1HYHsBWgHQmvT1se5YRE2zEkp8Ts7t31EMQ14Ab6XRZdd2zxkyHA16",
  "key41": "64cABrTn7TXgy11BHcyw9ENMytwJyo3ecC9wnd9Ckxa9Aoz3o8QDJuaqADy3Qzg8YabmY64YqNA44WMqio1cfKhX",
  "key42": "2dgPcPhKM9RDKiDsLUfSygTje8buDPnqcQZnKmjWJfKA7wn3cW2vfjQYyCdhJBbXjjRpqx87TxsZyXPZiK3bXsDi",
  "key43": "2cMTcckk9PY4L3hBq8Xuy2bdrLiByjk5BTghTCvjNbh3qrC4YcLRidUZCtcZEG2jfNmnK6wNtxyy6yZr7zL5sKhs",
  "key44": "23xujLGwmWC8MUeyAndHvg41WV7z9JwTvDEqeaMGsYnj8FXjf23jKAd5JM424xgcnXyS4exdRLZVrXvjWo6QQ1nt",
  "key45": "5oBLHedYrpvHVTKWp99MTmSujL3UvTqrqCH8bEVThMPmzT7boVFjUbncYjkAMomS6CpWRLDZuy4ysoqrAqxNm1Ku"
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
