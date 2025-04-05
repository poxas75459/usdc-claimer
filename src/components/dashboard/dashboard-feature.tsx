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
    "3sebp6hfsNiMW2d63XdVi7jF2GadmmfgAYMSDBtuiHdj19c1wnwB8B77X4TSPHHFAE7sJ1BhrLixfKqmage4C3Qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQqVTJrUieid1keBcwWVvi6FTMuLtnmc4Nc4skPqqrC7tXGv5V5mkzKSqGtJvqTFUPF7C2sauv6eXGX1Acz8nbR",
  "key1": "8WQ4TFCJQLiAaEQMvqtgURJdgNvhpn3czPm723Y9KTdyPgBPEuEXxHQvXeNniBUSRzucona5sm9h4pANteedkCV",
  "key2": "2fVg4NE86MCvR48Y3RiHM9P3otes5U7XYroQ5cz5dNhhyGnaJnVXrkwWKQPhKj9Hr1PrQ6d4CdbbNjKZunnR6tBU",
  "key3": "3fVDtoEoBHbVCVC3VnqrJkZ5KnM439cureP6ZLDC5i6cyacn44s4Qc28PgL3BxozibFmoBK64LfXcWgxCbQjXX6y",
  "key4": "2WhUdyv95yeo5dQtsuJXKJijsRadW8CovEAjuX1Lhada5c4nJsHYEhCQLsoucffyw16iqxbzM9QSzG84DHsZ4NFg",
  "key5": "5214UBE2TRw9pz1Da1jY9NB6NAZmcLvzptEtAfE2KqowxHs8j38gdM5bPGaiPrKYfdCcZoPK1gAbyRJ8huJMVAwg",
  "key6": "5em2eEfzo84MiJsbcn8uERGaqUMMHUC3rvGch2xQ49baSpbBnenZwKDa9pHyHyQHSBe9So8ACkWvxxGQvZEGUeuT",
  "key7": "33VHcoVSR3kWUfRfFStWzzRxy7dr8WRUNwxVvqjvqwwmWQudjUetUfhcXpvxfNqajtK194KnYTCgYr7KZvx9KrPi",
  "key8": "2QkKbR44XJ3fhtsnnoT2BXnTotGHj3MrPVzYHBBMqn9CMPH7Jwep7rvm9dSVk7Qjy1f3LGwoj5tEW44LEvkwcC3",
  "key9": "4P9vkU4DQq2tUCqoQiUYK9gDqVrcpjPXG7TTvDE6L7xCKbVfnR2VVw2VR87SkWtqNccBE7k2CtSPopoRoDetcUNQ",
  "key10": "3sHFcuxBvLi2G5qz9NXoNtQH53YBh93J6jMaWa91Tu1YQsgvmcGXoR76SZCuBcH5eVNxWGUbkG4jredZfzmdc6T4",
  "key11": "4tWhhipyVo2hB8bXfM4GZeH2iJ3jRTedQRVe7KuRwZmCbPTReF5MtDrgMEiYXGM1kWi9AkeC7DSnqkdjHBHhdR4K",
  "key12": "4ZEA7By2wntoc9sL3F6He7EkAeLbhqUu6jdwPFW3VLp76xz9U7qsHwDcN8zCEpwpuQt3Eup24z7TpGa8bMnGuQ48",
  "key13": "4BZ9pu5urhnUWP6S8EDxuJwfpv6rS7dDPSVuzqRkMUobwumZuzvV74GWtEZTqHRZp4SfEP4TwXAjFazTjKPtq1uJ",
  "key14": "3dk5o5ZhZwDXWuEV28t4xqR5PCfchDQR3XobmUvNSAfhT5NHseSbX6QrDbAhVZScCng6dKUjAvHFSBwJgJrhbdFa",
  "key15": "45XMjGUUucNiE8Q6gkiyMnuFfYoHCdbfL4yWW76YFasguDKEcWcBVrCewdKEeQFUFJmMwRKbrVWyQN5aX9RQUcJq",
  "key16": "MUacXze5nNioPca9LQEgnAkcLrwkLy5JXsLHMob8v2KDRZCzQ2mDuMtBynypiBmD4YEzgxVeX5qfSAmH6KLwsgi",
  "key17": "4SDXxHrNGGz245kF3hwvdyFMEAqtkrE6mgDmgbrWBNBA7RrmGN5YyYtmBbWiaAexeRy4rkWT5mZAmhxRWo1AB1gE",
  "key18": "5a2FZmuXPkoiA5ZnZ93sFJnLZxtyi5uhBpvRdEgbuyVDkcA2iYb4Zn4zMjB4m8Ue2NGE97NpUpBJhtCoP1MXQYbm",
  "key19": "3BWd8UBKzSNqA1ZQWUyU8eASzaFXfbCstN2SNmF6bzh24Edkm4vZVMsSZJj1ZZvjdVdVAJG2UjqeiZbXu6dJYcy3",
  "key20": "yRmmrhY28sKX3q2ThvPPEse6ajdqrJBWXESsnhxYWKbehJQ9zVSBsTsEC4JnfnwYhByzJdJniGf9mGRXxAKwbuH",
  "key21": "5RFBao5qCH6v7eTKn3hnAkANLL5rak4ooq8Lvq2tbhHz9dPhZhhQkw3WKf2G3Qgko57BPznhwR3NDFGxShxUsmH5",
  "key22": "4i6n2yzXPCpDZqXn47jKKFbdLKrNzNCfEJLFjtngjUTfThGAJoW4m1ZphpUPPfPst4bLtV8HUqooLF2pJJKndTtp",
  "key23": "3rik5tSFG2DyXTAfZ2Gf5tysFdPnjh8uGp5DPSshhKuEprkDxQvkhLdVqGwJ3tGc5Ks4HMMkmEtMDbELX2coaPts",
  "key24": "8R51rjZ5M5E1H5SCsJQB8zjwS2T9KJNjEcDSQjBtWUQn4KMWU4aQbaHY5whX73XNw9FZYFY15rWmZ1yGyb51yLR",
  "key25": "2GzVWdNo9pQEfpjL5V1uAut7XRHx6nbWgJL7Uy8ShktsBhod5qTGWfEtc1mDdCHnMSxTzgbcQ9hn73J7qKq9ozZV",
  "key26": "26S4Mfzi5RxSEQQy13qExxHCu4Yvif6FEbYwfxp7ruu5uM2CQHGCspDHGp3dqvx7tmZ3NbG5A5f4TpjSYh8KxAwa",
  "key27": "2CAgJuQyJ1ovsMYzzfAarwdDESeHvgMuxzfzrz6jfTJiTVdn4d9cimu78MphNbYFk2dDiwRbJgHcpfDStcGou5C2",
  "key28": "36W6mubmWCGMG8s8sWj5cQEhjnJEWVyogzspcqZXYUU9pf5NxWnFgqsZLQVayz9V4KJjyM3ZBSeA5X2iDpyFoDNd",
  "key29": "39VKPa6wDsKRREekW4T4Tx55h5piK2gzQTFdF48tAkvPaDdrDf7gFbnC3XpGFVCLkW5AX5RLBNLv23QXfc6zkwXN",
  "key30": "2zUs89Mwx8vfTh811vxRYotsoowjKcZU3tEoL1MizKhfToMTQpasnwTaeAHLVKcvp68gsyFrwr14ZfqCx9gtBVxf",
  "key31": "2r31bcq4NEuCSE2F1Y9mPeWaLhTKdEDZnJWgjYiCJ38phXUTKPZFztb8K6oFFmSnaHyU8G4t8GTxcZWHhueGCkRR",
  "key32": "4uHvCoLWCfqMkKtp14KSxeeSHjEKx6cGrhKyTdt1HP4c5aQsFhf5wE6K5Ki9wzCRdog8SM2iQNJokWgvzJwZ1Dzn",
  "key33": "4RZfiT9i6RVtcvitWLRqqHzQHNi9tRvHNeJatynN4oNkgzhzv1PrrS7ydupcJWcQhpDNYBRLG4qDXXsBkmH4EEVU",
  "key34": "2vszvv5AzLX4fA6ggUHHEYvytkME4uHsbMTCyL5R8Z5mdHXXzN8fLRuXvJuwPMUaS1AD5XLDK9amZ4NthyVwVbcB",
  "key35": "47TUvxoDzRFiwmovcZKfzgnaVeA3cQDYzD7yN9bnitxdV9yJszfos9R2q4EbKsihbCKXQAQJfjSARrvNw2EViKye",
  "key36": "54grZyP8kY3crgqTBuq5msj6w9Fhd496La37bV1DM8oUqi3SnkEosE1jGV1wnQZ7gTuYtHWKh7a6vGiK1jhCoLju",
  "key37": "385LgNPqtuj9pLQEKFAVUm8Y8MmZfxYwU1W5PHy58Hb4YXNdaYaGUpzz7cLvWHRBfs2xMfbSsWFYA9y8JxQ2PsJE",
  "key38": "4aSaKpxRFTfExBxKAJZG7yccDgGz7jzHk16qMQELdWWgfnWvdKvLFZKF7xAX2vMoQE8mfBkRMXMrEHuQFvaNwRH6",
  "key39": "5L7nRWKxVR8NAbiesgqJQnT78WT6mDmPdt4uiHjYwE2aBqTQTNmpHafRTaw6fJjE9UfghrSEXxa1Zs6a4vog7bsP",
  "key40": "ik53fHmREGEa1cu4w3kDCeJ4p7EomjkuCp8EgYg4f6BnnBukQrY1ACsKCEMLAyRj952vhwFWrrVx3NJwDBHLHMx"
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
