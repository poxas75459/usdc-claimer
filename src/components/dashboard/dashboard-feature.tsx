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
    "YeHtWksTv58QLokfn7Z9Npo7ozm6r9zPRJzmBboqJd9knApQBodmwQzS6pacwDmsQ5S1maVRmEsQdxVtAqJYpar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VHWTFJDaUJ5gECe4uR77GVS1twCXGnjbpB7M9HXVq4ujE4EAyg5Ke8wqPFTwr6SxTLciEyTPqsDDb3wYK9P9zqu",
  "key1": "34Dp72Pz3zTkzDyh4S7k5zGc7Ltx4TcpN7DoNhMENrHg4cKVtsPYvJs8rdmq5Ya9wEvwTihXFmJMcetQRo2jVtUs",
  "key2": "uY18xoCoQvS3BMNsMvkGn56MzhnwK5hsqEnzLkwTRDggxYHYB1RpzQZFu2TuJwaC4Vsf6VkBjD2RBDkmLRqZDRk",
  "key3": "TcgrNnX4fQw1z2jJKgGCAiVHnBs8eP5T2thVgCdjRehc4zhR5tgzPP7oBxt8sq91QgUu4PqaaVCc5JDeenFLHot",
  "key4": "3MKSfiH93w9Km6DDKHf4QezDkCyicW93ARhpKR8p9GGMpoojFSTi2TG5oFodRL37UzArU2zCyYxdPYKnW3Z6usDi",
  "key5": "4iCv3BrbMbJFBwPvQ3pD6KVcvhhYvVwwK5bgpd4d4tpv7wUgoDHHFHsZ5S662W1QtN48jvisqwNwdHSCNfEnM9b5",
  "key6": "2ciNeLu68JCqStHfqKGRMG5dnbqrtWuHLPJhvpa5EzzQGAfA799tpHQxatvU47PCBSVGdPRmSVSprtkMHpu1LEvG",
  "key7": "4pn1ugcdJbp7QWMxww3Q4iEvchxUBMWtsnAojSqjwKbp8NoZ4t5cY58dJKmbSkz5VdKcyreqQaJiLk5N7hfEXfgm",
  "key8": "Z76h2LfhBXLYrMMjTfF4fvTxtGzwvTE4C1CRhqCKvvriTzPHtvMyPERVesewFxGLeF52FK35k2ZQ6KXbDbbwiza",
  "key9": "49yndMJ7cd6wFi2976WvkYsFaVYXr1NcdYnHvqxGBigy19tqZGYG5zocVetrSJ9D8cuuzbBgEm86xH6Uza7vH8GJ",
  "key10": "nCDUUtswCShBWvCXqmV2sf8pBdTSYfLs3VZgSgMHXT5mr7ggeZFc5RncEZfchWu19xWKnduHwVy8bHsb3LXSdMP",
  "key11": "5Um2b4CWUVTPdwH4PXor7X7gb52td3pLxoGRCQTHuQfiTpGTE7FD4ogjHjTsXE4Z9xnGn6txXguDTJDyzmHfgc6n",
  "key12": "2TpQKNxNVAQ4d1NBscDh7UwLtbgGXTKkkEQ5kAzwrHSKcbxPN1dKWRmC389NbvLuVmeJnSL2vHtPnL5gWWb6uDbw",
  "key13": "2cYdv15wTZ9vzZwyraDwk1sFMwotwzDpjXu6rNCZ8Cd7bahzdzHHLSMcNmFs6z1JFEJ2qoUNLJggC1dcHG2zPQsC",
  "key14": "22ZRDe1qyb5AH8GYcSMoYe9h288KUoUqCiqXP5dCb5U3zCBpXE8UAhLi8qft22GfCQgUVEYEL9Ejb7mb1TvRkLu2",
  "key15": "2Z88tdsrQUjTAN7i3mNh46KtJpfEdaKpeJ6d1S8vXfoSivXQirQg2rJ9fS7jVPfqdfvdnYWyuvLL63fQGdXXQtKx",
  "key16": "5PtwLpE3pnZXpZzkiTVKGksvTDEqmNfLorC7h136Cqh7nDYcu9Ky4GLbXKG7YkZR1QSVRes1kkQcQP5xzNbptVpJ",
  "key17": "2T3HBJJvghYpY7NtyD6zCgfkBoTSKEVwL8yewWjtzAhj1g6fmHfENnUTHqdgkTUdXPD6sM4W7gm3UozpscmefNng",
  "key18": "3ag1pUEwr3WVgx7MjbA3ZNGYpdcAaGc8SAi8VJroWgf5F2N3TTDKuoqjSbrBEvTuAtxgV3GqaHXTMPS2rewCQJwV",
  "key19": "3EibNW2hTHV4SsVWqtqx3UoKE3DXmGdWuaNG28HpJJsPsGb4XhJ5brswLHiN2dsGNF183DgcdWnMxHbBiv1zGgMF",
  "key20": "5kdHiz2fQyMfbCtkgrzG3BvcmVTfTEyb6suiuFgSkmhE1o144k9pcWSJru7dnypQTiNm7QiLEhfRtK92DhDUxSxY",
  "key21": "5EX9f8x4EiX53BPaEym8v6oMk6tkr51c9H2y9vfEgmjnJWL8BXdsMPLa5yhGrg6eaezAafVLmi7hDhYWBKRJPr7Z",
  "key22": "4Uy2356YfdGdeMkttyamM7SfVH2iXYhX7Jtkv3NyMEjsDjEWap2GPZgK6vqHoapjMcAiccKVnZ8jy9MmfWwtRLBo",
  "key23": "sBWYUZzuoiWK3VQ2NY5MYzYDTi8QTcLRT3t9zmErz4rMbhbLZ6ut8xcxoB9emfFJ15k5SoKasD2jou3GmH9HYcK",
  "key24": "3kww16JUwvVzbD8S4xkuG7wyEDMDzBYtPJZa2XHbtycutJG9Y5i4z4ECjaMEAnrvqmrj6mZbQYwS6K4qZ3FiSakB",
  "key25": "38P1RPmHN6UqEDuqgyCeGreXrUZ9mthN92FeWu7Mb8XHZgH73ti3eJLSYgzLDRjwt2J9YfJpKmmHaD6MEjMDcEPK",
  "key26": "rFPrVtLqEj3siWGn69qFuMNKgdz1bjP7mwWNUuuQZsG61Uq5xjtxiR3v4d3nnaH2R7ho4XE3gaTKUnBfu6s3qm8",
  "key27": "5emo531F4x9do8dsdvvNa3oDnJxH4FNf1GPNUBxUT2iAHtCqhcCxyDybVwrkNxTqJGmktkS4SVvdGyYb2EY8TZcM",
  "key28": "46wpX4QGy31BDj98BojzWb7mWYGh18c2rYdUAEuBXY1akfnhLMa9d1ucHkoefz5BFyLc9rVEjk9b4BrPh9NxNc5Z",
  "key29": "k9yWNchWt8oenYo3pZJDJTrxXmDscTmiaLN6RjzusxJUXV6iN571VmPsH7anUHWfawnM4DfaFbA32V9o2re8E7n",
  "key30": "66rdYkwSKdADJGogrjiYgtHGaDGAQiZRqCzsCzhd7VFLjnXL9MwRyS6SuD7tPCCSijZrTx8bx34sb1MGP7S3jm4U",
  "key31": "4t1atRWsbyTJxUkz2hP3zZg5m9EL5FouQJjtRpmJorAV3yr3TVAqxC3hVEPoT7AKgX6NvyaUMwkwE6JHgP5YeeXv",
  "key32": "4oALeKmge5FSm9jc6xnc9LxsSZnw6CwAUiLW4X6SMy2tf7uw639yXizCVTRyCRKpZLsChUTNyxFCCXDZdPiGizpE",
  "key33": "2iiSnvj8AGWYVRwkTy9zsuAQs9CNDeJmsb1HH4QkYBEz9NbsjCoQLv9iAn2aUewexAhhjHcPTP2BfRKufUUenquy",
  "key34": "4rZxhrN9Zg8PgSvXAcDGaoSTAntSW9cCaJu4EFYGbRJbdzahSMHb1A4fWCqMe2RwehCShLbrDYD3Dyhuwdf4VN3y",
  "key35": "9DNZeZyabLN4dDiEFBcw1BvHsgA5jWdHfjX4gqtTpg8a3yyetBBq8aXPwxHTMujirDpun47QHnPJ3E8cWuxGgSn",
  "key36": "4u4X5CpadogdVMUdzLH7ejrKzWCKwXVJCXFGxkdPAY446H3StbQZZHYyTNrhvVG3uwAbJny1acHdM7RwJWgaFLiM",
  "key37": "4wrq1xo6xn2mnaoje5xeB5iTQKKgs4cjUFgbVCGRj3UrXZ9Kkk4MvEatDfbtqPQG7hFDokJxNpoFbQixi5kCb8iu",
  "key38": "Cx5Jkg4v463YTcJKigzwXJeGbLvXUNLdSobFpAy67QzCP52BVv6nrKForjK2TsshX6grHBazLPggeH7gnoF7YJq",
  "key39": "48XrYbQezyLVorX3vcHvM2NC5KEJNf3PwvJGG1SEoEScnE8NYuHfDKo2sx5imYkvdu44GHiVVmTVhZ166KiMZrMa"
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
