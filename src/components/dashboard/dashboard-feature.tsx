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
    "2BMJHt6Yk1zsXxAMqTNmptXZhsS8PuZVSVEXPgnYHCJxxRS4pNee5UqFumXVDhuFTvgMYinwLqjQDxqMkeiVT7A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4kY3fHFBuEq1qMoJGBPmSHJ6Gk43Au8W4vE1NCZrdnEVzEoxrthx5VG7ta5xtuMAGJ2iKCaPqegEehBAerTPp",
  "key1": "4PpocPEjiEbCpixbFgQQbp77EbSYvB2kS5GxgDrZQNWNAjpGcsuBC4oxUTpWMnkqiqfRJ5CjdCjiiqWb7JEtGnfR",
  "key2": "3JksHqgHcr6GB2dUurVKsfSm8snMP6WUWFPmZ8j2eYPC6McHMjbMazw4o3hEmwvh5uQy5ZUxBJ2YHkcrmxiHXHdS",
  "key3": "2G3dEgQ3N6FVw79Qya2BDFoyLWSa2gTsM1X5Hordo1u3oQvP5hcNP7nBvxqkEwGJkJkWhs5UNLWYpX36ZTsybPQM",
  "key4": "5kRM8QxF8PcKzVsyBefbNge9mVwETJu8BkrZd9js1tt7NxM2vECbWivsqNmiop9guXb18smvU9SPFkE6mcgaw8Wr",
  "key5": "2MB7YgcA6aUQTtuYgLAi9YAQZDjPXXJuZhmdCTwdmYSX3cxjUVT9FXcAcRzcQJ4JFXqhUeXHQdQgG7cGur5WSxGe",
  "key6": "4eYKTezLEXuLckdD8U1vpzZ9LgN9ES5GydRTnzJrmneV3Y7a3uT9TKjKhuUVqLVnfgY84hZKu23H3ABcMgTGojPa",
  "key7": "2SQqb8aTNwcGz2WkLvwzzS1BXXJMzdmY7CZEEuMyEufEA4hJL3bDhTnsjB3f62w2V43oH5q65rdxuZLaRyAo6TwP",
  "key8": "4CbdeEX5hwnVibSqWAgcMPRymrCCvQ3xHn75KKH36goEnpEVDmdLHbdkrbJ9gA8s7SsvnGieRSz6utfMDGbfcuQf",
  "key9": "5UfaJhk6tcS8aYkkaCe58AYWDkPr1Zmp9DGeDHyF2PMu83aFDGwQHg6BjoDKH6wiPicVH8VtXhoUWMuqJiRnQ22E",
  "key10": "kj5QD7iSyeb3mcZZ15kUuz9GYtehzpk3AE7T7f1f6DnQKTFGkgnsQNr9E9xRvY8eFEUewDCNyZ2h4Wbqop4edzZ",
  "key11": "2sd6RQkPnQU4tqs5hikDME6AQTLX8MMJoJkx1DcoZrPYD2qb6tSb3Baz8x87m4AMhkk14rkoGP9b8o2ZkdhLtiqU",
  "key12": "2JruZ1DPb4QCPzB1SSV9Kt1W7J7SFENKvQW6q7S21RspEnJ8UCZyML9oXb7BkpM56juEX5mCTLLeYyg8TaKpD8bt",
  "key13": "4o333fsdestxKs5TgKNyLSLfjKUpcz9Cr9DnHvpkiDLvtiBAj7sshHSuw4c3fvUM3FR5QizeypYNSDD6NiGeEXnY",
  "key14": "2y2J3no2YoFTnbuNdpiQdc1FFv6c5z2WoSCcWxywZ7LxzqpBBwgHg4DvAe11L252XtuzEee2hJ4xBDn9MvnrW2jd",
  "key15": "2VyTKAkymYduQqUETf3DdT6PMgfG6JbytG3YMXJJgVmz1NEoLQg1NMmabd3NLTFdsLVr8JCAniSc5VrNfvEuQmZZ",
  "key16": "5JkSW37tBR9Qn6AutEoHi1oJyybnrGjts5ofG3a3WWCgCVAyfedHt7Cr3Y4U98TBwfVFs4fKh6UtzLeHP3HNR3Z8",
  "key17": "5qFppeAcGLNbYRkHBdTNQyc3T9CwGFcyMCY6wSwaKx5cUDNyyXrW9Hk21JBoPjKyM9WX2Zs5cP48itVkof1rqFVb",
  "key18": "vvQm4dzGpLYdEhiBspGFgRhz8UJLTzjeiHBxYqmTg86ZJXU3NZB5iLKPgifiAnzqcTiyUyU28eoAR7kVdabVGp7",
  "key19": "2XyaSWEs3CE1FpCCWYkkeBcDuNRypNRRJnAgEVY83NkRTqtWfejDJxYJoJYp5qwEPMyPPoLRqNNpJ5KZzFCecaxR",
  "key20": "4nwZ22vX2Rkf4iV6T7oVSaddsXsRCS1TF3zCE4pjyrHuwZ8XcKSXoGDDZ6hWmDQon6BTHF2EKVT1EYxNukLHx8c4",
  "key21": "315FgA3QhZoU3mxgc6YkABY6qhNiEPFwrxib7s86ANhAgNAaw3S6i9QqDeeNdLVyKSXiqWV3p72jwtXwxdrrTaHR",
  "key22": "3QHYXkgJTM5i84Tv3CigK4hBmdBGvk32JDXFjpSQH8htPXJWumtE2EGzQLSntkkBqjroVRi9WdWGEwsdcRzakb2N",
  "key23": "32vcjRGJSgzm25gzAH7ieeLP1MkYooP7jWFZC18acW24G9h8TZSnjfMnzgoVrUiteTiNb4cQSWBXGytiEu66F24L",
  "key24": "5vZHYcAfsgoXaheiZZwSbhxEFhW9KbDcjj4h8GgCNfrJmD1zjoKynz4xkTjPJDbLZkeiofksmfkTDyMhjFjfrfce",
  "key25": "4YweQpKCPffNkXvGufReJM7Q6F8kZs98S5GwoDFCPjMicVKvgt7YhP9W5NTUGTJgTyFie1U7VhPmuHgnwLJTYb9y",
  "key26": "5vCLdTyaLj9z1ZDPivXhjvMU8Xba4V2qsAZCPD2mxpJa9fVFL3AdppV7gxkSxEtb8HkpPehzN3kqh93qC1cBPgdE",
  "key27": "5EKUL8NkhE6TskmW2UPWqgkptkarKksSzPLhH4Hwx8iDy6yZQwjqDZZa8biCgdxzPYREGN45Sas1R5G2DqhPspGy",
  "key28": "spzF5PxR4jifA5yt2v2TF5ho2Kq8mCidwTidhPLTYjroMmPqzqshNA5rDMmd1T5efn79nPtjweH2M9QRLhe3h79",
  "key29": "taTJYn7aqRzfph2NT2MHaMoappys5FYaX5iGZhSrcrR7GK9tLZKmEQCUjoSgGv84wxnPyJioo8xXFvUzh4iu3YF",
  "key30": "UAX34btNbuUkbW57TEuq2o2SZihXh4MCjzKiCGzTryKjWp9d1poZ6rLmTC9G5fRht76SRDe6uURVn5HyXt68V8e",
  "key31": "4ehqukXWehrHFeBJZkrbtkrsbwCaGEyMrxygtNjhgLdYXufwnGbc2GsRVS9Y2VzdYTWsp1GcN2N72pQgFw21m54w",
  "key32": "5PqB4NdfAdhWZpYdT3ibXwDtGLHg77kyN6jubmzSRud2Sk8MTdYw5t1MHt8dakBaYm4PUvRhA3NCXRBmRmfjRfXg",
  "key33": "55kuXHTsPmpdJTe9hy71GUQAax6zAhTKxbWTTmRDMfQoSJorgTfeoVLWyTaWKrtA1UacvYTEmCc4YZ95FF3HkAJA",
  "key34": "QbfrVijqAVHasLpNJjxtA3XL2TScsp95yRmT3im7MorXFctg48MPwVJynScTcgMLnHBHniinRv22St8uHsFjv9D",
  "key35": "5NqHsPqYp7moB5sw6Qph9TfLjWeQK4Z8SFKymLohSxu4rkH8DqzAVSWWqYnWgtAT7yJzqEdxSeVH6VwaoM5YayXs",
  "key36": "RQHnhsV7SRDdJc8eahaNo7mcv662SpYYYMRWawBJXi55BdB6KHLPp968ixbKKhJ2K8B5BSdc9W62fumpyYP4YxM",
  "key37": "5TBHdbR3R5f2Zj7PYUXi2eKwTzomtSUBbmDgBZNr9VJWjKybYuQoYy35ECvpUmtWsww61W6s7KcXbFujYtHcB2Rq",
  "key38": "4ZurQSozqpK3UzUWFXboifaZPi65GumVv8H7htxk1BEMFYWcL5tsiWzmywsj8TuvWrXzVprWb8fGopXmwcBXSUr9",
  "key39": "S4NfNdEbhiWyp67pgtSj6XRssgAzKWnqj1UT3jMcnCxasP5HhDjnUT8P1uSvfMYP1v9ZukTJRFr2mkqdWFv2gSg",
  "key40": "22xRDFBPnTWGBFPyU5zipDJcLzu18WSvDP4ZFr31mArCM7RFBjFfkd9sraKp5ccuYhNjM32CUStiCRmYEWRLkfCB",
  "key41": "4zVRNAxeN5JkFe3yiJoy7RiscxsF2CHrwun9XvH2pgiaCCPtm4bH5Z6xoDmJMzQTHZ7RnnBsFHgBxvfFQZDZAxfF",
  "key42": "4eGMc56xwc4SJ3uyShoYTWgAJ68pVwDVV59tTXyUpzaN6HLSDUPfywGrLx7u2xwGMYVxvngrnzCe79eA19RskDSP",
  "key43": "XcpRti4GQj52roRWNcb9Xz9HSqZEjdTPEoQczCUMYihzZVtduc43JLWtDiiqgGdtuPuRZKVbn3AZBZx6WA1MNzc"
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
