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
    "635viJxpNnvmNTkK7fCg1USax6STVGVGKjrhthvJUvvjcBnpxpufyP6iZCq9utR2jFioRzKT7e6ZXn8haZDcybW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CmEf1C7sCEd3GKYcvwqg9er9KuPyAfyMD9fxfx6oVGgveLXYsc531DC8WEDWgUoxP8vYzs4ikGRxT54HjHu6KN2",
  "key1": "2FWHLMMozCbweFvD4tg9rUNz2WLZ6c1NjfzPmkKKqTPDC2V3Y6MqryfESypeHb4FZ6WgJio5XqkREAWYt3yHjSgc",
  "key2": "6Am2roPDPZn62PbydYHZfVzXXHUSn7CnN9ywMEUjkuycZiSQFm78Zjpbmsp8b4P9TbdG2wEf5WaXmjiW6BgkpY8",
  "key3": "SWA4VBd2NMfv1nLJDZY24jpuimi6LMHXLvVKP6C9554Th3xsg8aoobMU8vWhMfNuimVpa2FW2YRAST5MTNoAz8M",
  "key4": "4sLYTyDkM9GnuWfeQgcebG4CScwz8yuVbfWfxTp6ZfCJKS5LrT65ERxgt3myKd3vA1nvPFb6kz45b9v5b3Z6jgqr",
  "key5": "4hox2iK8NFWnr4tbMVqabVFM2Fq13J4XFShBpzFs24MfCxZgst9p9FxkkVQDvMytMF8rAdJXQBWMjwb3KiH6vq5D",
  "key6": "548XSdhAmwcVPwU1A7yVcT8hdPnQ6SMgnMAs3Pkk7Me4T5HRVU4vMHkTonbcqztxm2L6WcwLoDgU9Gu2H1euYQmp",
  "key7": "5UfjBa17crVeCkRE11WBeUQKHTFjrhJBizmct6XZqrswcQuvQx5g8Dx46oSeCTKAUVJLtNde41RHcHD1zndFoazE",
  "key8": "4MUXEcvxsXyqS4RDmoNzrpLtGAYCtsaZgzHB7xk8Yr34oUgm9jiFJQobSpcZkHCbH1KYipi7tfF2QDVmeAxEpCqj",
  "key9": "UwsTpywUGxk1c4EHDpZjqcm5CrN95neV1yNkVzYBbGJHBAbXXHHbo59cSELEMZKRG9ivciTwDytZpEcn5WBS54t",
  "key10": "mHPetFJ6o5rFc4vpVbDTSNAXaWjxwg3LCSJExwkWqkgaAr36H2b2vjwLA7274rpRaNy5XHov8VEAUMbst3tLNF4",
  "key11": "5JHiukEer2YRNLj7HtZojHBwwpkZapZVr1dfCSvfDWTmJNA2YqWStoK7ZgYXkyjeaYfgf4vbJrrMMGVvSuk3DD4X",
  "key12": "BLCPLj5nYAhmF9DJrMaiTrb66vDXtrddBAT2KiugQgcT1F9w39hsqf5HEaixWBp5dwVN3BR5YwVT9xSDGp1Eiq4",
  "key13": "6759nDQdy8Znr6G4syuhEEfHezzZiFDCubzuQsY2f7Xxh5cYebZAWsfWKJr4BMQonETXG9cnVdCGKpdvbTXj5dWQ",
  "key14": "2nNYwoYEtzAzgiDg5QXFYTZMSJKJ2qBYrmBuyPL811grCDu7C8SZz1xBFRFkTmE8VQzSvph3QYHjCs2bjfXam3Ya",
  "key15": "4iaCHCK94ayuC5bDCd6VJGNubGLHxNHzvxxsGKfQa1YKL73um8wdBvWyCSupAjVN91ES3iiLL3MFmyQKs4FADPUz",
  "key16": "63gf6whgutTko9Fx1DpiNgA6EsmdDn771gKg2XsKxQEKYFDXG1t67kFMQqqJozmdymg8g6X53qiWqQGT7WVLWqk3",
  "key17": "4FBHekuEG2HzJrE45i4yjR62ARJsPRru8UivucST2fEM8XQohbpP6jGULU6Ja6SUH3W92pt4pzKuH2gJCsKazcMt",
  "key18": "5yFQCzEfGe1L89Vuveqjrr2P1N59RcRYDiqYbxpJSchjKAJddiZv3gapqT8cSiUf4ytK8TbR8VUJpMASNxbLp7Zs",
  "key19": "54v3NsmtkkXX1FsdauyWqFfNK12bx7VTyHLzimPcmTPAGtKBs5fjDVVrdvKBtU3DoXXsfCgPme6LUCzPVTHy83xa",
  "key20": "3iSTSeaVabbc3F2MwkkVJtw5TP4zuDqWkgJtdzxe48WyHvDx5zBhLozeA6TGhfFHyK1pPC2qkjYkMMWYCmek9NwH",
  "key21": "wv3eiUPL2wJFqJyamPUNEg46jwQ5kCZ7sEG72zUvhP2VQzMG2u6cxcbBcQS27HeeQta3ud1QecDXiDZN2FNej24",
  "key22": "v6SXxW4DjyQBU5e2togLhQCUFm4xbo6uiLKvpzqSQeuHEDGmSX1tsnqYc3p4uTk6y7DYaxMWUu5LJfzqwEVGugF",
  "key23": "5NjHrdoAFGEqoL25PZtva54TYS3Y8Mby9ikEaGEUudYKjFVVmhGAEdrzFQP9pbETvcrPtKHMq2ZMG4D16aAdGGeJ",
  "key24": "EXsZjgehgEJyYLmnSqTjuLdpynLG6PjmgM2ydESfTUKGnHdAPh8JZNREZgLExCDtokxUeugvxQtkDqRq1CWYZtR",
  "key25": "3xviVhnPJ4naHTAC1sS2FvwmGejfJmVMpuP9BhRGfFUzM3cjmBEKLTUUpZTtMx4W3EPUQAnZZ2CDMmgDXRotUjCM",
  "key26": "5jp1F6iH9io7ngvUzsoXfpWed4XEV32YDmYHog6iYFJqknBnhFsAzZLY4RWmdMrAfmngwHtYcthDR9X6bHLBoPtM",
  "key27": "2UPBMFLKrGeUjbFukebyuv1oAd9JdM87oViZpP1WW7MbwP9BQBMpWGBWdU5ftyju1UqCi1DW2DpQB3m6A6NfboeU",
  "key28": "ScxZpJWw48KdvSsAfnaGQaQ7wV5UaamZ8agdWwnhk3fU35y7fPvMAT5GbAurMR77PobfsGjgqghF1xFpw4me3Wc",
  "key29": "5wSSMWuHuDf12PFg6h4GrQ9xvM5RqnTA643mBQAMrxtuywMF6fKnWwqCaaUn2ixWQwyk4Vf8S1Fm3e2hhKjRJBLV",
  "key30": "4DEy4dj5ZSRyKTrLcyzmVddwW6V5cEeYQWhT9oWEpdwdE8qNfjsqTxTBFHadVL1kZbc46VGBEj2h2wC1QmFj21sF",
  "key31": "3iqzhQv2EGFHNBQ8cdsqqw6wuoksG5b3rs9ezNwnzqRcvdfQdcSG7KpfQC3X9LC26FAseYH4hvhJ4jS6fPaZ7Kds",
  "key32": "2Kzu4Pc8FyhrJwQPpptfxs7CZku4p56eN3VWLk5heKm3uLWrqorSY2Hzids9YvR4rDAdZzPYQNzjkhyPYLTbit6N",
  "key33": "3Vm4eFaNF6T8ZF195YZ8hNhHTLJR4hyM9s6N61RrKYwVHuXuiaTsQVsPmGoL11ng41eGtAytWtBvxgvhHim4ADKh",
  "key34": "3BYg74eaWLUikpwdCfn9Zj1Uzf21JYjJf3gAmr1rGyQDzA658QYfcUgwDbBDF4ff2uetjWthqVXi4WHN5V8gqQ4a",
  "key35": "3M5Sn8W4BgBH2UTEmAtBCUPJNdu1HW2BpXa7nhW7hfFt3PsVgWVLzhpdfKtnDQeTj5NSXjujaQuKcSGVti23Ybvt",
  "key36": "5ijhWpWEUfz59h1EqaPnuJxGwoyUikr8wta2GkfQ7aUzJyXB9fnGwM5JsiLj8ubXALjQggc6D9nPxRiJQLrtrKu8",
  "key37": "3HTQxkuuc4SHEE8Y4iDoGTBcYDDGy4Yr7bpsWtRk3sq9CFJ1gSuvUfmm6E4Rh5QCNnXfG1XCo6oARK5yNiE6JrTJ",
  "key38": "4hd2r6pdsUWJybyMNMqQZQWXj6bMhy2VDU6sUAFF6NZ9igMkYwL3LNqHEX3z6kvZM2pugyM3Bz1uZiWFQzkXW4Si",
  "key39": "4BddNcRe2KzrpsTFSEBcdFbpBFDWx5obA5eHZEi1GAyNfsR14Tz6jGnr4mpgP4TKgUCAyRzXkAUmZ1noWD5A1YpE",
  "key40": "3YfSzC2BvJowH4BuTaquB2xrTLbNqpZcSK4GBupAZziKSisSYYWpvddtaqeEe49pyMXUaVnbwDYNu1JfGtALGUEn",
  "key41": "2hKf12qNbShJARygi29XwKLBJotDXi8XLSAZ61nWZpcU5V3m4wfT98C2tA2MhULySy8vdebssK19CUoKqMq1ANxZ",
  "key42": "6kE7QiFNqNqLBT9qCbdkik1FuwKG2QVsunsHcLPsed5ApiSvwbEM2hmDmk2DntuabF4U1E8Cpf9qKkaJMgqaZEa",
  "key43": "RLuKKtaTWX217iWsDtnqPCW8WPfBgXRMzdnCEn3yzvVedcvyj1PJZtFCbr9UjjaxkcHDBxXtPSe2MUkR5hzRiar",
  "key44": "3mqKFh94KwV2ET7ogWNaLUD4PqSuXNRSg8AZtnK6jLj4wtC6d88XD7dJxb1vozswQFZJENa3nSw68sxtmvW6XhMR",
  "key45": "4RokPmuwKYHbuz7axsGVexgBqGXQyp1HvrcuhCDcDPw9JrhscZzEfYADqFrmR3oUfxoKgdhRSxb1JrkoaVpamrHT",
  "key46": "5Ahspgbf1qoZU9W2Ah3H6Js2rfWcsztgvtw9bRPLEf1VE1pX8o2ekRi6wQTqGQcNKiPhiK8WawxJ1b5jn4TgSWKc"
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
