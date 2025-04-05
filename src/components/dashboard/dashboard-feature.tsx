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
    "5ayfjK3Ncig6ApmNjRHZF5iw38x56n5JEZMrkEYRvgGzbeCZqFHtgRpvFMWnSuvkNoozseW1VuJ2GJMenhGnuVRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT5ugf9Cj5V5dhKhDkQcq5u87R3VAyk5NxXW5kQH2YK52RyLxLzLTbGGkFJpeQPAiyT8fJQxY19ZnKGYmAjsbMv",
  "key1": "2wQLSsk9BzxtYpst1TjhwLEveWjmmYRMdY2M4XpaNoxpMW3KiFREcvnk9Pcd8nrMny1MrXGrEkNCjhcWa86EoB2v",
  "key2": "2JzdSETYonLWCsgpMdy1sEk5ng9HLNm4seUi7qGCHvTdP5Gdu61LgYJ2zwTpbDX1gwqVWoUuvcj5GmWhB8tRo8X4",
  "key3": "39dqnKWkyaUfqe68fJQMX6ej7hqSjxvDGKKbuB9iNAEn2FhisdGSMZFZq61mz6znqP93vCUEcTSrHAM6ZUHN2TbA",
  "key4": "3KWhVTP3MfHngyXNPcCVaTne7J7YScfeojwnytfiCETm2Uz8E8eGgi2j3PimRksyy7id34FFkk8bMYSqm5HqaqwL",
  "key5": "4ryERqKgzdoMQw2z9BiEUPYS569vZkrdfyFN2tAzKbSadS4HrNhetFfm6g9Mk9ozNVPU78GV4ivzspRE7FwdMRmx",
  "key6": "1cgZM3CLNoACkFuPtQQPc3iVbVxr92VUKnUnkPoksbmJQhpw7z5n32aHrRsZG5J9BK8r1qV2om2yZF6kNNHhGTu",
  "key7": "2Lg3sMxdyNZsqJhcayeBy3sBjw1bs1qBw1SmzsPcugpBg1YBsdshK652vfnAkmYvugEUMLy95x3TNNwHjQY1dkZd",
  "key8": "YQm7AMMuUtkUSKPChjapf48yi8LBGjtmGr3P1erwDKhz2cQhEgRkFaawmc8WiMdiiNq7sv15r7QbrCfiNynckvS",
  "key9": "4vi2UVdvgxVuDP5CgksM4YXmdn7Y5oe5KrALoKx6E5M5Z6B15HTtQMSBrFXCtNBHacxfyh9RJxYYTXCdhsfLk1sN",
  "key10": "2nnWzDR1svYjFcVAttBcqVAxBUjvVUH8cwKXS64auuKgGfa9rXNvddbVt5FKdHbGzokvQQSmXihtPXoZBNXHHzae",
  "key11": "5kDvdDaUwZSFc72T8paKWvbpNMNRY3YjcbW3Lqefc27ixQ8S3S4ndumuM9sPaLnJ24jffm217BjH5mrJPXzFQHSd",
  "key12": "45uaDaKHDSDNzAwhfaGipEAXqv2LekYiZfpDnvdLQWREiX8LsEsBFN2YgHVTqUjoZPrDfc6oK2g7oDoQnqf4PimH",
  "key13": "2JkpvPD66dLYtrkFnrq6ZJyqFcoES9475nmyaaU5dr4tjveAB2x2r9E2F8hULtXyC5FT6biqEHqK8exYq8Vmjmnh",
  "key14": "3jdWRs4a9eUTig4aJNscUqcUYgGjYdjwdREFnxWLUcrCZYXvFrkZ5k6E5yHbhsqdpBLoWAcjHFGh8vC2WZheB7cF",
  "key15": "j6EERJG8dT6FjMVNJW3gJnw3bdD5w79SE8kftcdsRgyGrSNo3Yq7rz13JJ9SMCKW1qEmP66kKiUv8cwqnbLEzG4",
  "key16": "5ZH1XUY5DWpH5fha1P4bkbCZ8BGMAiND59saXPXKV8qzrAPxo4GrnXuMa9S9NWHHfyia8q2b5VG8VD5JFmSLjuAn",
  "key17": "5XGHC3d5AC8sgDcX3jP1o7QAguqU4fpGcPiwHqcuB9AUAgaa1R3x6f6yWmNQ4CFYsTp4zRqiRDiZrdbnbJQ2WNma",
  "key18": "5V8DTnJi7brM3cZhWicmhZjVSknuR3kTL8qntZGAsLfxHtDXxKDoo2AnmRqJuJCspkyuYLrDhtro28Uv7cCUv8Wo",
  "key19": "Wt8qLf8R5DrqKm81QG5fvBdsZnLtTopo39DsnrANNVxsrZ9WBkQa6WozQUoxwJuKgwchaLSNa7awXDiSRbJWP5e",
  "key20": "2Cn7WnRr352npQM8vqc8QvczQXT4L5zxBSN4WrkkGuHVkqDwg539igTzCStRqhhFfcNnPN1dR9Ue9AuBwxxzvBT1",
  "key21": "5ek65Xp37QAfDJRGSy51X7Ksw1gsbhqrbqWjs2Fh7D4kt65fKPh6NaHkMwoxuaCQEphUL2SkwV9PJWoVY45TMyVg",
  "key22": "2B43iCp2ZBG33LLnFfX3c9cx8rLfN6N2BgLhe6r6zZNn36u3uXoTSPnRhivfP7k1oLEEah6c9y2wd1T9gY7e8b6P",
  "key23": "nckigKrxmtG3UkVJmTqXoDT6xojQdUJy6yfXzew4peEYWQQDb1ozJiHi6WJchQHwc7zEArugySykE5fmDz9qtU5",
  "key24": "5q7uxDXHRUpF33wvHK4hPqBLBKQugLbqJQJqJSqfsJR5quud6wnny79ENjDuA6UbBqu1QeeW1GwL1MRpLn6h3phq",
  "key25": "2iUzojf8C64PyhcjYdMno4vCJy4XH1a92LbgzB2fZ7VJSGAZVcu2w5ApbCoYSNdKXRtF1PrNopZuZggDdzGrZEct",
  "key26": "4A4bDjgtk52uD2T9JVKFQwfTcdDDUJMJzKySDEKdo8QgnKbbB1c831BayGMtbkqRLfH3tH7JXEk4Hdb1rQ51Nwo7",
  "key27": "29QbHwhHfhBwSTfkiGML2KWt6Ax2X7iaUmAQTybZhwdoyaVqxSPUpoc6FPpBewTK1FRFLWFogsBy1zL86Gz8YK7L",
  "key28": "5aZYparnMVEmWdXYK1yzxG7UatU6PsR3do11JTtCQhH1JohmqhoHZ3MuEGU53aCccYhYqmB2e6o47U4NxfudzHu6",
  "key29": "3d1Db9dHdQb4LuzdkFJRSkn293LumAMgKDuGG9BuA2YNsy7Rj5xtEL7CD4uZRKbpfhJLwqRfRKnVXsHJSvkE6xcf",
  "key30": "2zmnxpnY79vQXZC91NJGWpickkR9PgzxwVEbAJNpjp8Evc49RKtfezyWtqGPnSmMzXsSj8MEk1NEnHwGQ9aDK9Yh",
  "key31": "5LPNwpQS82NXq9bYDTQffoHAMvVDpWefrcGK99PWT8S3bwRKKkpgJvmVu7p1oEBNoCXi1sH2AjNQ1R8qHDutPhFK",
  "key32": "46RMW7Gu1PoDcS4WzQpfJsUdDrqiFMJo7zfWv2cus69Zcsf31qoA5ciAnVD6yYQJmZRM1SmU2u2ba2RXYiNy7qX8",
  "key33": "3omMuMR98hsvg9QCtX5RZTZ4wCoB16U3co3e2GryYKRw1fRuHPYq2ZhfxvZBSJWVttSkyHfmJnmUYMu4cTFG3Qf9",
  "key34": "5vMNzo6MdMWoCoEYytJiKFLWPTZcJzxrfUUwvSFXQ8rEDRetPaq2cB6Gd9QJD5pFkcwVTe34Dk6PBACPjYYspGHA",
  "key35": "5DuEazfyazP4NE4c3QcEyanNvGEjWnnPCjyWATyH8D6rXYsyASeE9MpdG534bFjiHvwX7qQwcxXtey73D6vBzHMp",
  "key36": "4iemUx6F9R6UakAsixop7MgP43ukQEP3R51NmnZJVpkjcDAnGDRXBVa88FpoXiSsh4kjXBbNnR4V4SbioavGqece",
  "key37": "2553xtq8FP31NQ2DjouFqU5pzYeSrN7A8bdS6xSKysQfyA6m7kxJB6ryzUKunaSvnc47Ar766B4BuxRKWWhJep8H",
  "key38": "3RbXhescbUhjPpuP7eaqKjGv7w8QTQU1dDpAMSqJUZZ7fMDd3vLCUtBgifahywvWsk2NnjXZXigmQFwHYKB6HtNT",
  "key39": "4q8oi5PKY85MEjEWBbdyvPvrHh5uDFydiV4uzLFxtZVqs5UrfjKgNQHQPwFewjxijEekhvefwfFduUc6qQzDGvyE",
  "key40": "5skeo1kP8E7VpQYhdRCp21nJEqKWwFxxUW8eCtEFvgEUu2uPaR9RedAeSZgdnQSGE2PoGoSKtc4axNG4DGAZhG3n",
  "key41": "5fMuQNfQcHB1wTM5gCZhBKLcyxUmHkUU7i8VtKvu23ho53XmXLpCmZrkbSPrAwhsSuumStFXRCyQmmmKZ4FHYNt8"
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
