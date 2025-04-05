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
    "5111vh9Qb9izBftePzvp8ygAEemyuYD9mPbKbe98RurNfYDwbeLpUW6MVzvSK3FTouboTrRmBCtzgsiKxRjum751"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VZuUW5yQPoEQzNKpjCQ8aUqNdRfAj8NhGHNbpmG1rpi1sK1cAt4eRBhdSLcDwVMeVdnLosaRojL1dh7jJLQ3b8f",
  "key1": "iPe5pzspN4mSZybyuCejRvKdDLPqrEUq8FA5LG6bbCDd9uedDAQ8u5uyxtVDzo7MRG3Q4eckqtjwk4H6dwXTHFZ",
  "key2": "3HYsH5BBamvDPRgJXUKD7c3rYiX6nB6WAhNmC3zELDnkC9UwafHRDwQX9Y3eKyjPZ3dbGtNTRrJNJ9WcZNHMaPXD",
  "key3": "2jcPJ72s1HXBrcJ1zKKdKig4KTPiRn4fvzqXtcWGbNS5NDV2NEW7trf2Gu2okhZ5bwYcfcVpbXs3wAqdei5WwYM1",
  "key4": "2CQKptzBfUfLVKQJyUV5sDc36YvsLymDnKnwjBZAeETZe9gh8jPfWL3yhD8oXc96LsAPJx3PKCRYcJDt9SHjwZhK",
  "key5": "n7e5wMZRmXWYAdyTVQ4shctCmVeHyr6izyfPaRvMEv3ifYi3QJu59FjUTUgXPVWzF577h2HA3nCJrd6jJbtwUkL",
  "key6": "3qQjs4SkQ2xiLkvQmrzGBX7yYFb8cysrJ4w8JrZDZsAd8W8QG3SS35dGLRnqtk5bHmHd7dEcXWLTszDpk8o8r838",
  "key7": "2oHbEcK6RQG8wwGHNjdjHVLoxNpEi1ts2WBeNE8nP49ZmBFgCGGBZZdR1XffRzy9skwotUHTsCzxMi3wLUj1MjU3",
  "key8": "3NMHrJLd38b8F27CFmSeEGkVLhmYZ9j3Z6VuQRQBPD4JKdNLauUH6ANksyJsSvPxygtSu3AseHyfCv7Au1mSNa2R",
  "key9": "2mS45DaJ7qxCRunT3tf56g2JxHndZiVUgydwBPQrfvM1WLRHcBakggiPTxMDq3XQ9RhcnTg5DyUmhjjvN56pk7yE",
  "key10": "3sXPf8BSTysfFuTJ9c2iiPA4Y2MGS4rc6kpf3XoNSZWsKnwouCfhjUowoCZHtE1wnCMLYnM2KmEpPhLx5Hph5kxm",
  "key11": "5H59K1WkALuV6PyudGiJ49FYR1r7cZ4fjbmzZgbG69c5G8sHBGpwij3UDkhqkoGJsWbRxJKTgUZYjpdiq1XwpK3h",
  "key12": "ifkvcgSz62bXMi36niE8k13QzMLuxDszmJs7ZxrRwEs64x3wQbTm76gPfYcQbbpy1q3wbt5wxYsGw4roPPeSkbL",
  "key13": "5Fq4GUisytJitHPAPh2g9WwqHVDi9SvAbypdTYAfkc4ALT1C8NnpSam6oHhbp7K8FTCNtJ2pmgQFoPWD1FHMhday",
  "key14": "22ujpJJoMP5Z61zV1jFg6uT8u6EWNvKDCDPfudkUzYQquK2NFCM1De44EL3RuFZJ78br3ZYxBgowDK8ThLjrz8Py",
  "key15": "4g2rToyRLdoKSWbVTwYDnmJ988HV1mfbjLYN9zNsgCnvT9QVcfcxCNQWaceQmQsdcQh9WPaDdxEoovnnYJAQsHtg",
  "key16": "3Lj7KKQuKyfZL1EKqQYgRujhqxz1aC2DhfbcC3NmEnZoDiKLNueR2CkkppsFKG1mW8Aq72DhuC9Ge2WHD25xW2yv",
  "key17": "23vSYzfEmivaVjeiEjF9a427PeHnzyP1WeUJ9N5c4PKuPnH1Vf4B2wmxGULjhTdYdBvJSW51r9mLdFNvYooGieog",
  "key18": "5pejBJAyZ74yCuW5gPUi36gCF2vsAhUWEb9W8TrM99qabbHuxpSzFDeGCzr6Tyfnb8KFVzyjc9n96vUyx1gXATYF",
  "key19": "4wpkiVH3zpeLJfkuh3dQuBqdRTn8qqgnR1sAtNenFKpNJKxVuJJADGYHiDXpatW2ajipsdPbh6C8Ax7z5xSoLwoi",
  "key20": "4pDXLnKi627AR2q4yEbomcuwmxZejCF3paK3m1A3Ta5zDxgswCjkAaSiHFxQmqruTJfaNDCCyXfthotFSDca7uxx",
  "key21": "qsynxjh1mhMdDFHbn4YBEqPoccqx6guVbwf3QDX5JzensWgqM1qpLeCvDhN2nrDCShFKfKcPUXomn9QwEJPBcvy",
  "key22": "3vDqkz4FEW3nW1vFkotuXra2Dm5Y4Z8KQGGfuciSz6CnLg2n35RaiPjyCZ3hwbtL9x1Tp8Kv7yjyZAGNUnu1TtFf",
  "key23": "koDktqNh5DNCoUjgRYo8UrMZREu7iyAFUyeJBAL5wqpY2HzprAUztwLfPE4zpqYgpNP1fMff9dCpfNV7VdmUsW4",
  "key24": "snrbGQARc7GH8RuPRzbxAsQ3aUG2ETthbfszWrkca54DikV2EKQMVJ1VY5XKZntrBzwbRdnGwLxYgDJyGLyBS1t",
  "key25": "5hCu6yeJyaPXG8W5PYAsNRGCcrq8zBCWgknYpTxit4ZYdkLrPz9K63AD2jnFBbRjurojkyvwKG2tSMpz1tKPV9g6",
  "key26": "95B16gi3ueqmbPd75yd7mCGCcXuacCgDnr1rYZ8Gn8nB9WwJpRnhFSA9RDmkpQN6Qm71PB2JkPZNeNyzPzKijiR",
  "key27": "DQvxSxJFdkGQAQcpgQU5GDjgv9gvg8HLt9aAsSAbe5etj8EowcFeYGmBirXTvDkP6ZWZUGQ9ktGnw7DxxY9rQTm",
  "key28": "ct8v5NHx1rso5QezPD7F94CQcDotWumE2FQVMLJXbBFLVVeXZQaZ84sLixjeTwuUn2xetCGTSiJKs8A1pJ6ni8X",
  "key29": "5TrEV14fpUtLFcLe7f1kpcfVK5kv1FD5QDZQrgzQpqta3VTSwM7EUaaTpSfFDiPmnac38uAJSxtUSHeyQ5sH4nL6",
  "key30": "27GxCLKhLBDydkTA7WRwVdw55DiGQwCqF5aoW1ySeJ6z4Tv9zzgZH1KX5xbfzwgoFDN5SzSVWMA2JVA3ZF1gmwcq",
  "key31": "4r4k8KGihbbEvVT5VvpScoLKPNnznPhRrB1uKkxMUwMBPxF7vanjmkxyuX9q3gjGGpHcNEnxFico2Hc5mqzPkKud"
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
