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
    "4StMJoFgy6yPJmZFnZsskGdZHXbfUXdiE7rUztnpbMnc4AdcVhuauskS2YWbJHgY6KSGejsHGV539DTQ9npVdUGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JGidqhrXdx1h6NhcVmnxUJ12jHYNucmpJ73tXB3VYxiRSmkbVKCDCY8egLt7JpocDrdvywZsu2tLCw6ViQQWZvN",
  "key1": "2YggCif6sRwNEALdmwjchgQWV82NcdAyYvCkd9Jnti6SDgmeVWtJArNsEdYHyAsScamFm8nGtutWhGQ3MB62cJ5H",
  "key2": "3eesQLZ98aMruUtiXN59MGjLKYwi72adDkReeiW3ykAhPPPgBgcKBDnA37TQjQddG1dWMzKAGCkUEfwD8a7xfgtW",
  "key3": "2R5y91mH7jNFaAH8HLm7t38TznRNUND88K3VmULymWAEM9Qmd45EAuxi4SeJTWTMrgR6pvBxPHzQLKGoNMwvREo",
  "key4": "5N5PfTU3tiEUQDj3AKm1Kv67AHHWmE2VWkXzo6CY2BhRQabYGzvYFRohmeodLPkucq1rqeFcjpeQSA1vTotGe47Z",
  "key5": "aV3a1AeqsdVSf3Ba5S5gp7fm2GJUbAXXvPiDKnZqpjpqnVeyh6saRXJ8KSeHr3U2E8gtajSK38fJybF9SYwuAdB",
  "key6": "3DxVcQVShm7HtP8AzqJ7Y1Avzziigc85jJLh7T9oLB3x9mCm8zzmMyWRrK1eiG1PZGMAMYkrn3gojzqs47cNpXyt",
  "key7": "Ee8RHDVXXt9XjzMHEJ5DXw4EGbDuGfURAnbgMjZSaSicQMT75EpK8TLSmscJF8Wzi5kBhBSyTcn3zSQWo45ahVo",
  "key8": "31Bc7uUBa2gqFoowCm1hhJSq6eRx5hZrQQmnCHB9jJRPybGfrnrHKDPzPA4hBbqtExds2N6Bqfaj4idbNdrbTdvQ",
  "key9": "3Lm3MhZsqsmav7KKJWtR3MuvCYSFUTjrLz7Jp86Vdg8GzDe8gLhLXZ4XqG6FHZoKc2mkkBdYa9L9toYaqBtArcEH",
  "key10": "5V6uRpm5Ur8U8xRtwnUDckvzSEt93dkzqBh1fezL8LVXXqvKW99cJd43ri9T5YnZL3KmYqNita1Z3vbU32JjZC7B",
  "key11": "4byRaUvBA7AgZueWb7Rb7eNAqFKrzXzs3tEfKQh67JWqQhznsEmkHScbtDhpdT1v1xcejc7tz8iYn2r62yHeWQMP",
  "key12": "4nRfToSaXHNNxbarLiSBmxgHa6NV5Lin7QYHmewUDe3xvFKXSUZGivP1xAFHwJLefDqLY3X8tdRr5692e6abJyB9",
  "key13": "wYnSGRuGt2XfB3S6S8VZys4tfgm2jj7TG4nQAnkgtdprpHyEv9ef9ca7h9KXSJ362fZ3MJfFq3UdHjnomiWcXSt",
  "key14": "2tH9ao5YLc7uGzRNgnQdBWDPdpPsNBrCJAgjph8kMswQaNzKWb8aQCWSDx8hVUSpbSeNLVr1eWRTY5iEhct9X2vr",
  "key15": "SmdvmpFdxjMFfiFqcEzWWXN1259dvPGAPbzEjLpXKKH7wt9kJfp9Tdvng6RFF4DD6dXVQaGGd5owsqc34cvL7DY",
  "key16": "T3fj6wv45sSF9A3WgYmwATUHsgqEPQD4iG25qgAsHk8BQyrng71LMbu4rRsRGJ586S3f7hj4eS2PmjxA9rM8xMB",
  "key17": "5j6UZ4ACpuwkFUbAr4nUEjxubSaDokknh6PYCdTQQP9ykmgED6UDo21JSxEqv67HX161ud9aYB3Tnzv7Fm9RMSmz",
  "key18": "2rKWnVXxMAYyVWRAegVmPHdDyUrd1xszr9mg8WcNMe1kGR5LDpFGV48LJLbEywYYixKLyrtABmjCNV7F7Hs1T6Wx",
  "key19": "5FyygKbKMUyNi79SzzjeNd8KzzSHQ99ucfis39MeG3nVfJmJYdhYMCryMExrgbyKF7QhxiJJJjpwYbNxhKdeGauV",
  "key20": "4uvCrkHPPr7Gn631UmfqopuonxdFDA1XERrReexpQcT2s5eD5R7PMssXCScCAoz6dC4LNd3tFHZjEy6XA9LTXRPB",
  "key21": "5CLwau4BEP9RPFmA7o7WL325PxVRGogbGQinSAHFiGr26Nu1sZhAu78LXmDWtsdR2uiSnHw66aHDJcNbxKFh4Y5G",
  "key22": "5d4xPP92QmhyNr51TigxSxZ6HpdcC7LcfwzBWMyK3gbBSibTbTEgoUWPnxhD8w16SjHNJH4aqXL3b2zNrotCuA9P",
  "key23": "5kqbdJ6NxByBt5dV1ofqbCafSWxy3RkFdwuvTmkrFmaTDfJwEegGcMM59tPehYUgpMTkrQYwx64ofSWW3b7eMJcy",
  "key24": "iWc5LgbcCkX8mWThbxfscTBZGGyk95YJ5ewckyctYLvRXLZtmbA7muzEEHCJYPcpAMFabZamPH2FMnUZs2JRcee",
  "key25": "557FkhWe1Gdsm8nSLpPJAWK6Lmh7irTcGAAmryHknYQiLiFpBkJgVxZXBFXnhUjVQz1b2rSTb4jSwzgcry1gnSZ3",
  "key26": "3YxzWBoegP5Qc8kdQoS7Dqnop3jLFxPuGpYTemcPAoLhVAFSg6eMNiMLZ1H6nRg9MXbTgCwDHRf2YWqdpY4dY7V8",
  "key27": "3AzynbQyPACBzVRVmKbZht7prBiJTbcpSonQixqA4EeKnaUPVjAeMAnS7Ff9dSoGk6hxPc3gQyaTEpwm3YJtRVBQ",
  "key28": "5gz5X4UBXnLUKQC4HC3Mu5PAZbUCKRu3ETJQW5X18gaLDZwn2aqtpBqAVLG6S35XLQaRauLrDEFf5xSdqzAsegUJ",
  "key29": "5HsfSyHarUYyUHUjzzC4LzFLf5vKMRqWztExWQ4TE7czg38Mec3ndZgMnag3SddTVA5wguVvcDiwESMQa7FBYXgC",
  "key30": "4GJN5grDt9MNCGmxPvQZNq2N6csDUbCQKwgDCFRQp1HzE3GYJqZYAKzX2ku53PkBmCRzF3cd2H3QDhQ98s22RMH9",
  "key31": "2DnsYKUzEguQyithEU6hgTVmJiSeZrUoSbvVVBskiXUoyxipvWw5mNST5c4AiDqoQdVzjsATBw4RdeM2NVusAg9k",
  "key32": "3E6h2y8kJZkYFBmpd8cNFPRyCESAtNADYJytSEcVQgonYCLKnsnJ9WTNoykfe7byFEnHi8hd5oQmrgzWLMyeVYhg",
  "key33": "1QZqoB3FzZmJRJ5verL57ft3YdBsUGq4tJunn5R2vaR9C8eqDjt2wnYa4USzfNnMD96Qsodz4zccSfiRrREBtdA",
  "key34": "4qauYPVQn7hSexSFujHaR9Rj7MwN6PZU4q6NN6B2BTD52KVbBF14stBZE8un9uvU92J3Q1GQKbmUMZdqVcFkopD4",
  "key35": "5EdZnfR5jcMXuG5q8xcEu2cZHH1HxoFtgvmL9wiLWGvFVNv7fEv9fi7VedydR6hnwLSyNPL8MbDtcJxmSeaeikmf",
  "key36": "2LotwEJyafyeTg5jAroqf8neU2N1gS76nkEgwiqNWYVBbTdgZkS1QaWfYvjkseSBWFSABNs1dTsWGaPRdxWXiocP",
  "key37": "21U3fVjq4ai9W5JqHHTqfBz1x5RKQbh5TkVSFP1X8chiHp5SqkeMimduQjQUGwMNXiVoTtb7AXcSiETbDBXEdPZu",
  "key38": "2vwk2zTUgdCzB8uBCcXvfMQ5wiJ6hWMBvUARcn8M7SrwnA3whMYBF7N9Gt1Xkwxetk87tQut4stURvm2DpZL8zkq",
  "key39": "2NFyrVNEdY6QNeLhmvnAL9MhgZ7rwMobuVzLEFrRsKoppELbCUy6s3DWUfG7ScMsGNzwDj1NeUbAqMegmPvw1XBu",
  "key40": "3qZ4fSyX695J6J1kYRbbJ8oDK6AuKL6AsZt3iG6Lq2pc3t3Uqnt6iNq3HVtiZmMcjwLLq2a1h3iu51mkxiJSigFN",
  "key41": "4wzw2QQvTJ7oLCkESDSx4noQFLUbyVSu9vRYsrAbadHtynGVJoVg4BdB9kccTMHyzUCPfpGHQLik4kn2iFPdEJrC",
  "key42": "5oRBvicZvK95zkzn5GRJV8HnKWYrAAnm3CwBF1QTko673TJi3Lj58QuEQS1AEJ9kwMD44NCqxx3K2Zkku5mD4Rjs",
  "key43": "MY5fiHjU48AcrTa1HFz1mn5i4pUoMCs51vh4wobwtmBY7KcvT6KQM62MJyGUEfEvZLiaPYaeYk46ZfH9rqAWD9M",
  "key44": "4DHNwxG3GwFoMd6PXF9s4H6t29UXA16wLsunUbtJ5rURuQSPAMMCmc9uZYRkVT8vEdJXw2ibhPDj1asSCsovkNLZ"
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
