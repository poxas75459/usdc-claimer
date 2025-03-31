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
    "M8a9E3hLi7f8g7GwuNveZSvPGYJdMQ6ZAZdMAmBPgwxjnvXboNEV5AkSRm4SbGgAPWpnsWzhNxzKXBtkYUcLuxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaBtC6N2jq1c6gUVcqi7agoscfxxRnsx3spnnxF7q77p1sTQ5kX937UzjsLFvYjRY1dFbMpfywCAVqGzwfpm6WZ",
  "key1": "4v9JVSCG6vVkMuEmgk9eKu4nRdLCoGCeo2VUi5PJ5CgURemfTLFfMGZ8ntQUyRQvhifEZemfhErpfMRyqRw3oq6W",
  "key2": "2ivsw15mhawLp5bYv8L5JHFFzbott8HqDGraSCHt6A2q1edq4aLtdhrTo8cyHmieZTbEM7cn882eCR5Hfou1Y3mc",
  "key3": "LPPFpgevH51fJHGLuKodsPagd5KtD9CtTa9C2qxXQyvwMwQ5mwT6EqYmX9E7LdJPbBWAJQfCdKdSoh5yfJ7NCzc",
  "key4": "4WbDa36htdBFimnq3EqbGv1o2SPhi4yHhm3qfFyzi2kfdK6LyYH6zpRys1XuQEkNbrNj6bacC3tzfYJHBZkeqSAW",
  "key5": "4rd4fxmm7CPg3qPhC831qAihyFp6UmVHP2rCi64E48gx7JL4pt3FR7wKuapWbeQeeLboAa3Vdx9a6K1Ud6TxvEUd",
  "key6": "3FkJALaoQLmJhpAFz7TcrwQ4jh4NiJe1ptbKJkN5zqHzSbg3XqHQ5DVcsdb866u4toWk7aPNBBWq173GyAHbPeuQ",
  "key7": "2Tn19AvyBNzJdYAY11vx5ZTpKXrfBn31Ge782XTjyFvpbaVpqrWX4BxTrHzooW16eQ1ViumXqZD6SWKY58fpasYR",
  "key8": "JoLFi5b69Lqtxm4nZScPy6Fvfca2JwYGB6zWxgdSQNFvSf9m3pn25tokoPNBKHLsvBnmnLz8KfquaGKxiffeL76",
  "key9": "jrN3PeePiuGXSQCBcUDbhBdQ6QYfVJDyqdr8fHfjzLVX345jcSeAmtLmyHrRR3YLsKwcNwupi4oHa2NwQuHMXbg",
  "key10": "3vx66QSp6pwu9spAUqKm5S59j8ovX5hdaYmQHFEzUZCPj51dYVDYgWf6FrTAAX5LMyZ2rYQ6KYRUVKS1rjV2988d",
  "key11": "n8A14uVZTwz933vqqRC3iSwE1f5U7ZteDoMJ3oy1wi8u4VyjzgCvNaypVsEK7xXmsLhUPLsitQyoDEMpyiWgxvm",
  "key12": "5ucvKdCSWERAKssBsBxkyx6JkuBc3AMGeG5SyFU4WDqRAY95mpNRh4obDHArsZavbDV7i6yLzwc1NMZDd5aQLPJe",
  "key13": "4HLcvSSHYY6KV8dCTy9gyDjZjwf19bnW34enoDuRAzyRMpqCRLnV6cVVwrww6HWSKv5eqKMvTLJZnxBNYwenLGJK",
  "key14": "43jqKJiUnZPYBbBPnFcKNuduCHXkZUkzc3to9wikBaJjfs7vZzwCfKiJbGYskv2obQeyC6v3786KKJ2MxcwsUVZm",
  "key15": "2VUT7APBjt9qPA7MQfshEWSuEnC66t3YmcSKCySKPco19vzmezKyJK52tgCH1tFxSTwHXpZLRDoYhY6zjE8TmT4T",
  "key16": "52pPtgkV7hcFfnQjTZtvXeRffU4yNhSs2LVGPw2LJVw7c87HPSxJuFtr1MBAJjhT38VWMGQ3GydUyHKhXLgo1DCt",
  "key17": "2FBq9HW198Jbc3tZjSwMaPW32tAdU2EpMQKnHwshsjCen9HKEdnu6DmLo3NSkhnYUoch1B4tfKqz6WQE2vu1kB4g",
  "key18": "34aGQDxqZP9bEFJeDBzPhb2onvVX23jV1ZquzkwQHCQMGD7zp1CnKDkyY6KvdBDDZbqTmibDs6dPnfGV6CjdK7vd",
  "key19": "63USgNz6mVgnoM5MBV54SyTi1bZNZBRk7BAwYAxNBzPB3rM81GHiy4Yxr8yFeuaMLjYAtiFUn6MQw6tXNfVKFt9m",
  "key20": "2SCB8o5gbGz8MUJ4sHgDJQzTUGFS3M25xzpgVhL4ixVCvuZC3u6jhSCiFb2tgjehq1pGDd34udo9p9HAD9XJ2RkA",
  "key21": "5wv1LSC4xELWKeNZz4NywsiVtpNSbecat5vWSbud1mrWZQoGWc4eiEtv6ZQmgkWVgRsH91xspzDddEaMRwXF8FVp",
  "key22": "2F23KRuQMNK9WPncBnHV4Sa8rh9aw1Fx9hAKraKXgFzD8W5gZF7SR1gWp81gTdEbnuXvuxDUoUDKYrkted4gC76M",
  "key23": "5cdLwUUwYE3oB539mhCfrcjd4Ve4px49QQt2Ys6fXvybeDQHJKQbPmkxpM5pxEQaUzPmpxXHp3XXWrVAKVgt3Bq5",
  "key24": "2mfxPepbuP57JbYif7Bq4NZ8s3faHKXMnZcrRyrRn7XY6oqyB2zMqMXNLKhvBkRyBaCfXfzPucq6weKDLz3Dj139",
  "key25": "5B7RKvukGjZAkkusCkW8hWhPdrENtGr3Jk9XFkAPuLh2H5ijqw8UqkwBmeCRiWsuB5jJidKcZsnnftNXseBHddvh",
  "key26": "W58WWgbNV1nHNDzch6C2sQJWWYZFVX49cCctLyUr6qmkJiKmESKzd7zp8qsNFmFusQiXzhj9rLZbduvKKrhGdNc",
  "key27": "jFvEFjW8fLa7HS8B4nJL9hMa9tssCJ1EKLe2Mgb7QtRZEVnnFmyDteYo3fgqw4v9zipdEotsmn9y6N2ZNyQLXC1",
  "key28": "SG3NtvNsCw8thUhugLQpzAnig7NBnuBxCxHpW8e4iVbArKaFYZhbwp7BZNLhkqycp1zJsVHe6zDwWddLMQZw2UM",
  "key29": "HkNKebWzXSJWbNkTsBpnyUGc6nPfGdkE9jwDFR8gWhDJGTEeY9vqmucg2Rj9XCNG5egcEAjygdg2RedU61dee12",
  "key30": "2Kt5Cy3GQSk8fVgwxgfMCV2Ub9gJkvNZqiW7knJVGL4LQt5wN8DF7kqJYKwUpN2H4xjhEfrygRWU2McnS8bocfUV",
  "key31": "5FLEiBZ4wV9ikHEoKvZXmh3EGdXhA9KK6ZSFpZ6393pSmVCetm2AEn2MQS6ERAcHHRV7agaTxeLRK5yYNLhmUmpa",
  "key32": "4RDS43uVPEjbETiDkktma4DWCpYVX3CLgqkH46zeLxf6AmnkqxTZ2NF9LUMoppNv6zvBAN1F89hsUpBscS5E7PwH",
  "key33": "2ma3Fq5YfHgrJhmi7S6H2BKwcTnCN8Y7FXuuzfKKRVzFYWSzAUHaxf7hZ4Ls5TiCZo5FoZRATc8mgDrEZL2iBBDb",
  "key34": "4krgxamEJU9S3VmEfM7iMi5CDSfTBgt5pQZojdeKbaAzh9dwrPbH6aPNAgFUVyHFKNSTwvbGcJZQ1wZeZMsGxBqL"
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
