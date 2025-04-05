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
    "2UQXghwQAasm6wqFYDpGm3d4RgBQyHRtTaoqUbqpYrTKRoB5QBta5fxjeZzALd1vzjJ81XFTjrjNkd3GUNiiFe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RADEBgehciU5PkVmxy65tqECnsw57xHgmFautZmLQHNKtMKb4jQt9T9KtiQFQyjuKoexu4BzZkCmcYvyZ1TfpZY",
  "key1": "3Gm8jFnijHtbpqP2rJqgcQ4iHe9jNr7im23Y9dyTiGiM8X945fZCKfXh6JBqfNAdinM5bqVfxHKpXD8pHyMzr7zw",
  "key2": "47L34A1Fb3d4amAwf4y8XmBGagWVJsJkD9mNm5nwocS5Pn7BS5cocRMG9qAZaao4LRef76zE5kWWTq7caiKa2FJs",
  "key3": "2wYGiemFoDTzguNwwtcjngqg45rDj5BaRB4SrZh1fMR16P4mnp3yKB4ciZybeeDLS5z292atgcg8RHp5ZHpBJdU6",
  "key4": "3SckKXqDwy3nyEWPrskvR4CZvdPeGpewRgddajyGqza3Z5XrnUos8LnLhrxRqYgmbXnkFWhJGkKzkW3oAzC3n8cu",
  "key5": "3r4RESqWTNGMn8WrNjaCX1yw3oHYMX4DgFjmFAM1gmEoyJdtDHsaDrt8dA5GGDQFXGpmATELyxeZYkDKfjE7wvpN",
  "key6": "4Vm7X6DYNEJTdSCQAE5pS57NQLDUaLaVG57VdBD9uTwgNzuLneDL8Y4L1vmos9Ts5GeGe6dbmige4hnuF8tPpk2N",
  "key7": "5VTRdGt5GPVNtUvY5BmBpeG67aKPTvXfb19Ls5a7PGBpaUoqJ8ZwFQLNH54HQQJ9LtKJbZUmEbZ4tfVbjJaJVgoM",
  "key8": "2kiTCLgzWb27oC81GYM6dLrvvULaEsfHXXKWuW8HZCyVPAqzKpDuv4aAZdEdKiToyFNDbJrv5fmh2z4bgunQSRaa",
  "key9": "5JaVqLP9Jk7SSSQ51JNdKCWoHA2QmCqUCd3o2mrHn6oi5W3ZEohKrNHrWJyGhudZ8zi2T1YgmXVkGXPciQt3FkKc",
  "key10": "3cSaMpC5V3VfXJ3ifRA2qWHPgUNYzikv4iRzKZhii33e9GYZm2x8BPqGGAxeV4btGZzruCZEJeRKW3XGUQHa8s3a",
  "key11": "2JDaTRgjTSe9srY4E86MmgjKRhSX1a6ym6xUjJVMUHv5FXsZu9TvT7Zfj6u9a1dHwUxshHz3yTZ3m9UW29rEdqTM",
  "key12": "411cJ7hBAFtbYbcF4ZSJjXfd4gdCst3GyN5jJAvD1opY16HMB5gqbKwHQcHqLv7rpRJ1vBEtuoAcQmvf2FkEknGM",
  "key13": "5ffgxRnjKZpdiZiJAeVuXiP1kT7rs6sRiDJBS3ia8CNGCetXK55ryhxJ6XzWESCLMm7ZnU38n8un9xFF6WDAgbvi",
  "key14": "4dYUbE8E5sFtZa5N9pCAYPZfo9L3tzbRemmTzgZtY6xTs1pHYXBRu9ZA7J22n38axfQAQfjDKqoUfsbea7eKeqK3",
  "key15": "5C5JAxxRiBjx2fUXPAhPiTJtynU1y6sB2MwAM1e8rTFrpN8NpPbyP2uvzmp5irPrq7FeRi5utn81Z9vc4HiC6oRp",
  "key16": "4j1VMs6hitcrbBY8VEkyQZ6sN9BnSemHYqTj8y99jMYZ771V43ETDXdrxRCdhZox6im5CkD8DTGorfhBHPvzeotk",
  "key17": "2VZmaUjXUPwPW5thpNC7aUHfETL5tf5zSxjrzCPFeYTV9H3GoVSG3HprnhMc1mV9c1P1zbPxsvuJrnP7bUQWALH2",
  "key18": "32mbioheUAyLJse9G32xLCsBbey9k8X6vBE5jKiwDE8w92RAk4xnBvae1jfPz9xSnc9MkMAfLcgWpcjimoTeVVac",
  "key19": "2TsBqpkzX2NvFXoUyTJhz9nBEoFiP92LW3beCi1qP7ZqztxMDKCTESSPnfmFMKmd5cSifFZjH7vTrvzNiqEMrXs9",
  "key20": "2QbG7dpnqbXdZSLz84rGkGroDCrBuUYd2TD7WsJL4kj2tFir9uCq58z2dF7XVwBwAUjf6xVE8YspyKuurDQBJc3C",
  "key21": "5Sd8Hm2AtbuwPwJuZWcC2L6w2GRJi1zFu7v4D4nKpZ7nZNueKiMag54Gjbw7hUsp3GhWoMmcvTFjUjdzc6L6fAQX",
  "key22": "3SUua7nNX6nQX1spZa6KbgksRvLajvrm7SEP5LKrjRfJ1MuK6rP1poAYSmmPTqtDDEEvP7ULFQ2rCK7uZManJ5Pe",
  "key23": "5zxJX52qPUpfQy2B9zosq2w8Jez2QdyYMYNxQtcvXjBikndEH2Erhyc9u64pQtobkjnnXQhWqSR3Z4kaDoHV4dR",
  "key24": "37ennbdKAKfQyJGzTNDLp2g3WTSLySATrpUgJKMLn9dAJAsU5Vxi7VvwYmUzBGmFkaSv4QnADbVdW7PieviiQgqx",
  "key25": "2yyQTfktxHTF3WnKDErxbH3DWwS6BCvAimmcbFiUHYax6R4cTaFi2WAkSmUVzVrWCfeaM6DRMQQ7Gn2ruYcftchh",
  "key26": "2V9z3bKrEBctRVKLFFRUmNSnHexsHqQVsic6w1UVrtfFE7j76ZxmP6EpZsYhKTJ2bSxtVLPsBVvoynCJC8Mv75Mj",
  "key27": "2PGjEkr6hcEEcttBBwgQ8vsZEPB2WWHSAB9xhfuG9j6z9Jx6R8tX2aPkNxC1bkiCUhsppJp6ee63mDa6wcLjKRfw",
  "key28": "4c2jV1zsNtLmxHunEsuq1yGcqvNeGkokEvZQ1CsrJm2QtraECTRWe1wrZAhDjWFPZ5Gfru6pB3FkqbnvANWFXRHQ",
  "key29": "4JHJ5dByS29jBtYHvQZ74J63uyyxeAvQmBCjnT7wfavi7oZYc5t5unQuVAL1vrhsHtuHpc3h3NKokwxEkzptD9kB",
  "key30": "3kGWS8hNeLJJRVWjyeNKH6GRAofNqKQt4Ypfr9bCJBP1XeFD2wbQ6MerfaFG97PNd16fSZVnRJcCEJTWysgamJP8",
  "key31": "2yRc8ZLP3o8XJr729Ysd7aQ7ekKXbdfzq2Dr2WUxNdZkBXL3H36EFZTTuJiSVfURyeSWoDrmJm4dSH62FeC94efM",
  "key32": "jXZD2ArtHe9fGKLMoMUjRy6ib4Cz5Szjg5gJY4FA8sEpPeVTyMaCrLD6rTNwjYsjroMuN6n2AnHRE5bqhjhZ976",
  "key33": "2NbAJu7Ps7Y4WhCpRmHn7CRfZmaDhKTSeddBqpV9MiivyPaTxdFYxKafDXf7fgeHigiCukyjtu1bf3nnUmWkEkK8",
  "key34": "42JDddH3eQ7y3Ler2adu639v5KGtzGmbCKbjBMuiWBJ1WvKtPoj79BffoEoqiim11U56USCqtag7KUCBxETAdgBz",
  "key35": "2vxWMTq9ZGmVTRd56xNEFRzZGqm1qYreSpmGvG2nQ4X4gNC4rg92aN41sYv98FT39TXyFFv3dhjuxatvBtVNZ7No",
  "key36": "2itsXCQ1ConGrQP3XMUB1ErPFptwiV3L6cQk5LuTZAxeuaAPft6XuHaR3PeAZqDCQWCDLUSbP5cFjiPMozCQcz1Z",
  "key37": "4LArRiAhWhWc3w96EAU614p4GnWLyaT68VDbcwdKZ3VDJNpKtgMfUhzCZ4uR5si9afA38fsBEAHEPbZSD56k8ND1",
  "key38": "2ZjZVfSKAxRJBq2154KoMwKPiDsiY3RaUGwYSVQZPjK2wPMsRdgVc2cvhPNuAMKUzZ3AFkqbPNNctku8fxtDWBYH",
  "key39": "5iyHa28trMM3GrGvkhYLHn7pm4ouLZov3VbB3KU5hYRSkaTduoMK6iecum3FV6jwpJynP7vHocdcm5qqypKSCaVH",
  "key40": "r9yarWMhhiZraggmJbnPbpp4njMct9QhFXjYRixwo1kCj5xm9NV5XX3J3J7wANrUBfkyf3sADWefx2o81Q9F42x",
  "key41": "5RfUqMGU3nmpVpWSmGg6u3FTd1R9hUW4Wh58yJ8c5QA83KF5B3Mt6Rcq2K6a74D67YhjthmSMbeBhmS7JgMAf8At",
  "key42": "2yJRnR6QPg3H5W4yzoAXo8SbiiYVqt1Kg2saxR21u7wV6KeUgdQ3H18MxLNzbwRRKo5sUUXpsHe6tT86HV9LnGg7",
  "key43": "4fjbKrPSPDtTXgNiQUkLDUiqQY98Axbb4r2oABG4FYFnFS4zEDWtRRRz7eJycQ1M9kXrX95URSpUjiyxHFqh1kCy"
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
