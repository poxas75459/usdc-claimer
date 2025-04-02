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
    "5SizZMn8A2zTUdKXigUu6ACJmvEEr43SoogNiECFLD7uuWtsdDf8GLXEnSEtQJaUJ6QseApPJ2hx5t6316apkdmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sYqLewPUJZZPLvponFmJBXZEUUGMGjv1SDN587CHDc9DX95ATtC5YUsWZduRg7sqY46LCjZCvQMHnTB4RiB5TK",
  "key1": "4LstdFygQhWShxEW3nfDKKSYmywjaSfw36RpNaGcjLq38cs4YBWs9MmuQf7ZV1evsTQMboVbKhGaE81A4ZVPfSYA",
  "key2": "2QPkfeDnmjQt3poGW7ZQAFRcvQFkDL8sFNX2HtqGmrinRXmqwM9fbMZ4wzCvc5UWJJc2fHGVKpKYZ6y9WWvEWD9F",
  "key3": "5ufPvv9S4mpzHdHcsAssqXBCzSQ4LQeiLaBnJeZSJcuauSykwrLh1HdNym1CjcSYRbTTibzHWFH6MkGZxLSekPEc",
  "key4": "2EGpd6J6cCS9LxdFgQESYyEagkvEDHBvToupCYMCDk8a1TALjaeg86Y9o45Lqry3aoZJhrYLUcvdSbXZdRj6oGe9",
  "key5": "5yEAF8jNLNqjowKMRXcZ5QUsYMWmiA7xXnqanx6TfVLLWvBViu5Wu1h2AigjGcY64KAEvsXvjiEw1F8j6VDb3FcH",
  "key6": "K8CB8FeoKX1f4NYxK2hvRA6KoN371vBdbL45scxvQeQN6h9an74ej1kHyPBZRP4Y3mPyuqDoERaBuGtmXVuQYMt",
  "key7": "R8w6PfYNf366TvxuGGMRa9UnwdEQAGX5r9Ty3onhwFYHpJfDM746nLcGjED3vaD8HPTxeGTqMcM1CDEzf3QdqYX",
  "key8": "5uPkKu4Y7jKxEovLqer58HvFgEo5YxoyFD4uRQ5coxpGgSTCCZ2GF3ArDHXVqCDRM1sDE8TtEB2g4uCdGqZe7PwJ",
  "key9": "N2nRYsUAjQveN5jQuFyNZUeyMd1oT9KKgbEuksoaku3bfJAgiuwSgNeR5TbZmc4rKYz24Y6WZuSyeEMuzwMwqQj",
  "key10": "2ZRt3g6AwirbXXFVuHXpqUETmPd5hA9JYVquLiawgEVPrE8PMhNEGa4gnnu7tMRx8iEyWEd4gRgyp6CfnZBBMxte",
  "key11": "672GVmRykvE6JcrEVH4QHZc9xrymse4Cyc2dFi57bh8yAtHuB4sWaS3pVYcDgEgBtPdGTNYiKf8UB7hViu7Xtc4p",
  "key12": "5mgXvkNzj2RGpNepbKdLXKYsYCvS2Loqy3GMP1svuEooExv2DjEoBrv43jykfkKHpVfbfDXjcq5QPxVqVL3x4N3F",
  "key13": "2CiQZYQLnQWgYMEWPjJNwJ8uTYq61LhKhSwxtvwD2zz8sq9Uh6p5hKTnq6tZz4bJiy2Va9w8SCvyun8Z2GXD7e8e",
  "key14": "VK461KtCbpsy6wVEDK5WrcivwGhyLdqsJdDzPxL2mTAPzBXtfXQYcMusFm9bpGVHjRSnLBcj5DJSjiyvsVmHGdh",
  "key15": "5sqL6iKU9sKwhULzTW1NUPMtyh4qg4UphEQzF7St4AK5zrFML1o37MpENweYV6GPi4z3KTtA373ZCad4uEx5adeZ",
  "key16": "xxDVSCH9Yo6ARU7SvsHUijy7uzgaXgg1j6zp1aV9FdUF3ewuTB26CffAh5rtGqgReUYmfx1sHYRhHdsVynfobTS",
  "key17": "UAYaqk6TTwh5Aw99Y2HqwCnrPPUu7ahyrXnWJAmcapVnFeAD3Y3jLMrYdKtuRprJL9q9iSa8fSkBPuYnyuoM1AG",
  "key18": "3ioYQk3n8vwPMLBQB5V8PUvg4gaTrxgVeWJqsT52DpBJeMfYjSkc4A4S2uPio9YFMGXwNc6vLbEJsJVtWobHC9rp",
  "key19": "2SJCVgcHF9a9SqcrDsFHXes2f5uY9SovQJ2bMTxfgjbG1ERPJbeDnxqBcGEUAD8nnwoMHeh2nopRvBcp5sYyxnD2",
  "key20": "FKtTuoAfUfyQ2Q3eHdVLcYEtTVqhc4hbe6GTWGNmQTeh9YQwaitHvuU5LjxZ8ZzqAQxWG5Wrx86b3S7jsWf9xrZ",
  "key21": "38NXQpCjMSEw4wHVvNpRpoqeQqYY9muX9cZS2oV64Du9x67rm4dRo2GcYbBhoUkRD34ra53hqjTpsgua6vgatsr7",
  "key22": "EaVXuNpbXeTqYW2a67wDTm1eDHruWGE7dbMvkpeaX5eeTrEH3bMKjPmm8C1sj7yRo3yvX1XpprhmynY7ZYTkrKR",
  "key23": "2XgpDvnoxNLKAGfdhG8GcsWm7YfVZuciGkzWoQpqMvHciYzuvvYKxQzhWWBXPHq9sB4saFa91w3SMHuV1QHja5fJ",
  "key24": "2JXer2iRdzqR8qaNqVTUJ6XCmCDEmH9MYDcXGU7Y4tPgVogavaKL8tCJL3Z4zKj2sDeNbkf9yNemd2i9KmA3ppjn",
  "key25": "24SCH77AADKzmZj2tnqMha19n7pwmj2XvtKGKxX8BAzerv5VwJp1Uw2Ew35ExxpR2HPvfC5xFn2sqfUy8Ado9fDr",
  "key26": "3Gfu5FsyMhvqe5e3HXNeGVbvNnDHx9jM4GwHL7V1adrYwkXEx3tXgJcWtf9zNvq8v6RZhgNGpVJfwn1zP8jqvjcL",
  "key27": "4bKZZhLpTYDYR2qDoH94AeaxUn5EYno3SM4njEsRFL8BeaRxS2Hm1zGyvjPgqNKpmYRXX8SsEGeMruhQtenvnN9B",
  "key28": "TDPtiUFgpXqrNiH9vCqUmQQ3JdmMhNw8h4GAzVtu2KsmYmQxMdiw1bTDK4z8pEjZugjttSRnhvj2Mm3Dsb9Kz5d",
  "key29": "2W86PB53Hx4kWssQZqjReugs9rNVYLWKbcihAPkPZF22NVp5BnRF3LbBdnqUPnWypc6iDaT11WDhdeoGacZfjDrv",
  "key30": "5TvBKU67dJGE3Ey5X9kSskkSXkMh1yUYJNs7Ti8Ddd4AYNKspMwY6YhuyRvSR61iMq31we27h2UA4fZEa1J6G6BT",
  "key31": "2ePCKiPjiWNK6UcFe8BbV9uqFrqmfHNUnZwngHjHorXBPNTCCg5UVqwZGKFwvgWo7u94mZBV7kHHg6Y87iELCMWb",
  "key32": "5fSwtTrKCdqMrR4EFuNMfJJ8Gz36aS4yxVHiaBvzDVsmBcTjg6sevgxGuWmCsGYja1btS3Zj29qDNcnQBh38xuEd",
  "key33": "bUGkdbwS7hLXBy2ovHndCAZ41W1rUDbBaMNuWoodZWTiX1vo64zQEM8FEpWxTte5RuEmjqJsfM28LsTsK5rvGAV",
  "key34": "5Hjb9qjiwAhMnBXg6i1hdYh2EDsr4FvmPSmpAcxgMjQ2VxNiUUbDoghXa8N2VWGjgsdLTPp6rwEZgZywVCXf2FNs",
  "key35": "2BxPoJjTftKbLUmQ6DT6cGAVqC9xVMwoinsorAxoXecTv7J3G97oPLG3EyFbeFvJEjq6TaKVGyUuTKiri3gdvfEB",
  "key36": "tUXg7Dz1eSUYSLQjjxVVJJvxmtmTQQdm8UX7RbLBap5LWY3VX34AguuugT7CQKvbzvXABUSQ3h5s9Ajb1RViJUz",
  "key37": "37XMN576Yox3FEDhu77pYdqHsNwY8CuKUsS689BDza4pTbkzsBY6wURwn8um7Vkf2Uf95KatrtU91z87DszXkyCA",
  "key38": "81W6Hwtob4yikeHjWf5iPrJUuULeAS1FJ23suNLJv63Ap455LDAp3vwG1iJehof5DYojQYZwqSKxq6QUmRXxT5z",
  "key39": "5WzhUmm2DzoHbMZGhm6SrhVMGpVCvnKoTz7B8RdT4ha5GTgn8k52V1g7L6Ea7SgAve4X5EjikX8QbsRbAyPNQHzU",
  "key40": "2HBoQ8rTEEHZfdHx1jmjZUVgmK7bqmm8NW4qRQCoihoprXxLqajt6bCqyBLqgZHeTKdzRLCThGXVVxYjf4rsFe6U",
  "key41": "3oCstjB7sargUV2gCd26jngwhNyuGUizFAmMxiLj9e6BQ7katWGptmk53kNHcwTq6qLGbaqpJtZKy74epetDTe6K",
  "key42": "5wRaLjLqptEa9ZLc7rmes7PEgJQSSBXKXYzLH3U5SryKjk2jBggJ8rkwa5akggVUguXj1v1SeAJb7jDPaF1mpGWK"
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
