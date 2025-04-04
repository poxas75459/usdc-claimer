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
    "2m6ftZpMNgHZJ9EB3uPJG4qKpaz2BH4WTscp9x3ygEa6sih2nMti5Eh4SjkWwQfo5Rhe58PjxkpQAvx1i13qjJap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1tZ1PTjf1veVeQMdNiQFXVZftQUntvpppAivmPm2Z5t8qRUiGCEw91gS6HLSPSarhyEWnrT57Bru8Qre8V4smL",
  "key1": "MeJLk1Hi5ECdHkmmBfcsMyzPQDuFNAa1g9aB9z9yKzhVK2GDAY6BfeoKp9rytp1BCJiDcfboEz3KoXK5zYpbhY4",
  "key2": "5SAot1FrnsuXmnnrpYDa7tsD9y6D3AtpdPBJx5djYStnEKwzJc66sUsU3yQJBfNoq8g1S9yTQJ8PJCp86358z5zn",
  "key3": "2WHQ4ZdtXLitQeP7ee8Y1JeqjXGg1KbadZ4jZmdMfm86V4LF8TCpXMZ4pYHjo2JmjiQf1aycZ3ZGdAjiABfpB7pW",
  "key4": "3AEeTAi2qzS6F7jCkRhiYqmpyZ5F6YHT1FaLzRGcW3sCoTzujaaMf5dXa6bvERCmiBkNFugb1SpVvJqpTauYEJJh",
  "key5": "2EoCd2ibfN5JR7U4NjXmNopTURpuuyD4JSvv8JjSUWA7DFzU1Lkdhe5Sa7TdfPwzgnpyQJyEYSi8ZNcZT6HR1sqR",
  "key6": "3KHXsVwTwjecaUf63kZSb955WqjFawq9hTaXuK5QxQWPm27CyYapoKkM4n2TTSxyS8XPoxZfzZGrzR9v34Yr8BC5",
  "key7": "9h3c3CtUm1jVqp5F9F8Zd2Lx33E7wfrZETr8sT2znhAKemBbBqbDyVgLUNzE8ZihqFfNgzZFjj1Tasy2xvpgKK1",
  "key8": "kkKw6M3Xe2Ho626d1BRCAV5SU6sMhG9fxVFxR1ieNV8RqpkgSmdGm9a1cozWX9WJAL6Nm4Lxs1huykzgsNxG39S",
  "key9": "5XMpPLvE1Gt1eMw6RxoLLy6Zaqi3itsTKjeyrfJ21q2PnoJxhXgDsX3fw4ZvqLA3fXk9W1KeQJjJ8ZwmmwSz9ivn",
  "key10": "121w3EhYDZ6JTLXEo6QybBgwhPmfvCeBMWmpe8qkfgYD65hJeVURno8Fek2DczXanBac8xDZd2wBprFmhLdQysKy",
  "key11": "5xMnbrebhgenc3itWdAvfWwG2P3W8Ye5KsrRuKPvScXMbor6G5CmxbTpH8i6nSnGNYUZACeVM2pgLfEtQ9EvNNAZ",
  "key12": "3G1sSLSNA8Xfk3EGkedDRz9QBtEeiYZuKTQKRxwgvswaQWy8ChKreU6gSjXSk2KMijshny3XbeAv3smHPGaZVGPe",
  "key13": "hJg9zPoqqhH3eeaWpDD5hoQhQozigZ2To1ad3qJdeNKPiKkJT71hBHV9yzvdXM3ijMZ6NXs4C5Fd46LJAxvRdaZ",
  "key14": "3zPyJJTwHXKiB4Sjc8gGjQ9TEWNGfxADegmFvN5KtQSGUpEoXSuyTBwMqzp5Bdnk7XQ9svPKGonCtNrngNSuRq4z",
  "key15": "5SARr697uf37C1mEieJj59dC24e6NX8U1dcbEuzGJdCRn5sgqviRNi1nPJSRX9DVKMFGWQrpGJKYqs2maH7N7G82",
  "key16": "JTC2u3e24b7U2UFyNpGRVHao6UKbx9FkXHVse7aSdhLT4cXNYD4dh3TDowSdwZgdxqQJ3wm4wFpX4xyUa1Z43NW",
  "key17": "5xAAj27gCrvR2K3oDMMP9ntWPsxzCA3i9YXNp1ktjyUFxZnMveTkUD4z81kReL6aGvbpJhzUCwpTcBwQYsQxvyGB",
  "key18": "3FDgB5u2cnjoEaJbrnuJnFGWppcRxHw25RWhw3HCtNyCpDEAhmgH6QgLaEpkLk9gvu4GuV8fYYkRGaaMZrSFsDxY",
  "key19": "fXukMj3cS31Sa66SjuEe9irMP74wxr1y518uU3mU4sWNAmjwZvpZj3YH2MDKDKy32xHcPv4veG96r7XqJdkaJdW",
  "key20": "5k452EGB7jQfPZbWP5aiSvdNMJvxyGo7LCtahbCdkAn3ZVyZjKjsAJzwawnypZvDtvtZFki2bBmkahqmaz81XftT",
  "key21": "2rdnCCrssVMobmJ8sotGbj8TzMtHSCYedaTY7bth7TuYCqoTSKHnk6N7hbvZvjNzFRZbYpJm814vJmfeJaKpsz1u",
  "key22": "2QHGVkpxwu555cwLPFnCb8XeZZ2EtraizJUMFB2T9oZeQ2ArpDWkWLJsTvTbf5kQqwR58gevxEcrV3HNMPbjaCNP",
  "key23": "3Lp5pDMi8m4sXCHa2Fo9mNXKqSqrRpnpiRq8pZNEtQ98t3cg2DueqjGg4r21dmx1UYk8F3oLiedYGRw23rhixYDZ",
  "key24": "5h5QrHkpBCZYcgD9HDQw8gu2J6ZKNyjtBKVy5fZy1cm91De1XX1pabPUKpEqnqehmZYqQ4JuBFVZqTQV3pdDP8Q4",
  "key25": "3Z7aXLj6CtQHCjZc2twgJrcnQcud1ZoXptQk5gNEkXnGFcMYvbQpZBpw2aLXzmpQ2VS5ZBjJCwYrgZArWmRZeKod",
  "key26": "3DW8iPJAF4LKur1pMiPVWeGvzLiyHjjRRbprCmU7qXm9meLuwiQyyWm6e3J2WZnYpyr3Rspdejwoh7GhGbYniGu2",
  "key27": "4GPo4YMqSCFU9owj1B28vfK2tDjt1GGdzoikEmVFphYC3TnmhxQ4sRDLSJ63MzENkz4KpsA919HgMxTgo6qKJArv",
  "key28": "4yHZxEaQx8wQgtATtdzJV5sKwhR4qRFAtbjpwH63Q6qTtKKSryiynjDQnyM15gWCVAc3o7SgdEkjNpGNX32Y9MoG",
  "key29": "4VZJSA8UFt92AwSbr7GicSmf1LTzAfDMVFfv99kRioqsFn6mPRQmKxBMuwdfuUfHwRu3cxx9UYfGdrjE79CC1soa",
  "key30": "5rk4CX3otTiweLGjowi2sxwwowybwvKRpZtUG4AnkLsSY3wrUN1mejbpfsp4pE6xbcRrSyv2vh6xjk2iaCAKgLmZ",
  "key31": "azjSA3GZAjkC1ve1YeFVqc6KqCm4dZBBPGQKrhJxuUyWu8v6pRGBfrqqPo7c2Lphw8GnBV3Ti3cy52Nubox3U1j",
  "key32": "4VF35FoZj5BZUSfncyE631izbPRvc9DBRG5ixXbNUhtTYAhWBsjnm5qDtyLf3nS7vKv55bua3GL1vzJC3edfxEDA",
  "key33": "4mgbbZSgTMT6MmkcRCBTzGwd4Fpi9zEoUznyVURkrp7bw77Sx7EwZdSTmcyvxec8Yv39Va1m5N9KagRKKdysT4kG",
  "key34": "49rSBAe3pe3USaaautqBAchLDiGHmZ8FXE7gS8C8k57A4hLCrfxy3nZpHyKCLbdTKVthSdTFPyg75MDf7kB1qtY2",
  "key35": "5Ncr28h69wcnAyT1yednvuQyoco8zqwLSqRwFPMRudNshh9GQV16WiqMDzFFTKLT331ZsWH4XUATy7H5UDe5GbwE",
  "key36": "5z8W2Y4Tk4tUmThyhCMbwfM7jryFU4QtFESF55SJ7J8ndgkboyqLHsV4UrUpzGht36wiwz6JfstsoNrkZKWyVMFe",
  "key37": "4irA1FxxdLZ1o2Hkh7egqEGCxcsCF6gXvEBe6zuL64nBkAeJVvRzcxdeKcBB79HLxNyUZxECmPyempCS3ueHKP7X",
  "key38": "2CnvTtKCdqw3MCab7LHyFuGPjJwLVbuKWXfwmHcjjEcT9tBf36GWd6QNH15PnqoWNkT5yhveLParubrYSPbtdLWj",
  "key39": "4WLANdcaJbM5KPjYd88NpBjZgfkxk8zaZc4i4FqDMhP7imVdKaHfjNrPUdc2jpXeFECHjYvDRtsobBQvW3bcdtbE",
  "key40": "57iQbA7cwWuMnRccFUd8HucoF9jjpGcVMfDAjuvVEm1XX9Ua1R2WVn5PiCSBu24kp4isiaU4GRqQLx1mE6BjmYNP",
  "key41": "4k9Unv1QuTGHgZj6Cmw3MYiq1GfwFYjy55spkWHYPWSxREcGQgMBEfTGh8rUG6mX4pbY2Y1fbj8rxD4qXimzxrKU"
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
