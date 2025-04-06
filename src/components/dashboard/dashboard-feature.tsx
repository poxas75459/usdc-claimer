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
    "31LkhLUBet8oucBD4qvMzNrF5kR6BEQCFvvH4mk8rYN6RxvppvDEHxLQ1MLbkaurF2huR9xNY3JMAbX7g6METNf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V4W6dU9mpXay2z83RDycTM44kzXpU5tefv5uhCGB3JRXYpxo8aSgLNcKNXd7voHQn8469keVW7LngxZ1HN8Azmj",
  "key1": "4DGFN3jQeaCFGiVbZ8Hn7TWgPSYdouaYfLbdAbT8odMv4u9omULGN9jmoC5Q1YTeQJvQXRb7DHL1FRVvqm2tTnJq",
  "key2": "xbvetBoYgu5TGVjHiWAhgtaAeHKVC3t4ZM9v4BBByb5VCPNx9i7mhdqSUqisR8vExj2ULesbxZTsrckYvuJM8RH",
  "key3": "4G1b3HnH1RvcS6J9XbRSmARrVz9WQS8UnHby7nzeL8uSxEPMqQ3zGS5dqMVN2YFJ2Sgy3oHCZpk2DanzZR4bnAoQ",
  "key4": "4vmME46TDG4QYw7GErqmsUDu4zYJUaUCQVDmRh7z4PukJxWEHcb5CHrZtsCoFxoCedKNXQZfdcgVmhr8KZTrrKum",
  "key5": "2EjpzT23kzyo8fLjdG9GuV7vtSdXmzbG3f9BEcxVLqoGEbSfxjpzU7NJrYC1GtikL7ZogdxcKsbB26v6kdaAuZuB",
  "key6": "b3fhHvcsbTWcT3wF5YNApL7bMDRHrrpoEShCByrrqcFJA24VoX5RaDwqruUzAjbsdAJMnU1reUpQekhYypDB8cD",
  "key7": "37GA9ndq3qMrfHrhS9ydV86ATz3nhvetTsn2QrxqM8Eq7h6TrNQQucMZSPCuD2WvTRnkeB4gGgazBgb9pkn4kd4b",
  "key8": "gqSgQkHLpZDjuhQVnre2AXVzyVcvQbNpCfsKYy27NoK4UaEBGoX5tfrGmMJ3nyRVuYvn1aqeeniGsLq4yXpWmrX",
  "key9": "5cKZhCjXpCzvu8VhS3VDd72ZkMq6QVdgTo3TyKXNpcPNsUSjCkXXLupSHK8uvyhQj7oYLwUAW14omvp6D4PzCzVq",
  "key10": "5vsHUrT3VrCy9Y6KRPLC8iChV5By48ogmWDge5pHk2xuS359919QaFC1DspzfcqsNCw6stLyg2JmVViPZCyMfypK",
  "key11": "36eMKkAPUT2HZPqX8hZ9EnjF5nKiRdEr7zV1cPhjU4wQ8GU11rRk4DcyxnETo9KgPRZy4TB1suKbM4yqwxsAh2zT",
  "key12": "4zh7HNdLgVxYPQj525r9pkqyJeFDSpBY8nbigohvoXZBjMsyXGYgVQ8XCoJrj6rWPQQwZjjQBSqUvJdgX4t6BxDL",
  "key13": "5sG9avVnTEwQXpMtgnHsHtvLmh6KAxEnMzpQ6e1KD2Hb9nY1E26cJaDMcyrkNmARiNQXKdEbn2QbZqfQjsKbkdgA",
  "key14": "5rsm59Vm5K3MFysg22THHyuRrFXtquEruW4RZk3u4bGYnADpMUmPfewqc9URSnNnnbfxtVrbt9kPfjMwZE1mTaTh",
  "key15": "5qypUQKcKaespbJx2xEiijVxpUyVMs2T26fJzxbDvHpgAmVhi9X9q6mZuWGdXsZnvFGybpA7QnpwDrQ4Tpk9kntw",
  "key16": "3WDmEYf16ir2ECFjyGrxhckt9kYyQsq3p4o6vQfgkDdLGhwWg5tGwo2WqaeXU4qjXtZcrNkVEYy69WE4tS4ifGWn",
  "key17": "3CRk7PQT83wgJLz7ThfkKVEWUw3dGtLCriwMtHSgEJgRGsWHR6HLXTWDJtJTLMbCozxDTR1zCsxPCtuQxcMkR5nF",
  "key18": "65a2wQnjCHy1F7WddRzWfShyV2o8sESWC9RNHBNRyHGhW6PX6KJwE9i4yfUgbnFjoGYtQzTiCTwHXxb7FUU1VUqM",
  "key19": "33p4tqQvGBJjz2ckufpqxYE7PN5xkCavWaqDnMC59spRZ3V1BdeUkdL8MQto72fhwygQjJgtAZHgWvbVHs8gF5hH",
  "key20": "3BwSvjk57ADgZFcwdLfA8jVNqNifHNMdjTnwQ3xBra3XtXCvtCWmrRyjJsvHw4Pnjbmad5TgsABB1aLtRch4UyTs",
  "key21": "5Cd2sB2JJv6HR6XiEFqCLMYRWWT8dDNzPpsfqJ3F7SLynPaLTVn8m2bzvpmeNaWuYybCnaB8L9DWzp5vaopYKZsZ",
  "key22": "5rkeUZm1VmkanuJtoktLXfemuhEFGMSSVNmUNNkXsJaBGKNozxfwVAiCYC3CQiLWv83XJVCG11iQHSDhYk6kkumM",
  "key23": "4NgTeTttixqLVtcjtB4DLmvYwY2A3u11BLE6yar1CaWLtHXARtoggiGvdukrFVvfxho7Rp7bkEhExfvw9Rsmd1sf",
  "key24": "4w9RNSGwGpNQU99ByN8h2Vgxpo9WbSwJnmzZHm1e9uHGsywbVdpYGdMDE38d3hDwZ8H4Kxb1eZ8MkCnNBJ6LLro3",
  "key25": "4as6MnLpXMGeRoDnh1ceVJQCa55XYALDnBYuNe1TWJgCqYEn11U9rPUB3XvkNb27zjebAVBLAbk2NXBPoVA8HTKv",
  "key26": "35nPJU6wYfuCq3yjLm4svFujcS6cNat9sJyrXmr4TZYkGq5wVVhMP99ZW5xtg8sMfqzGbQd937cXEwxPstejbCvm",
  "key27": "3zWPdReaKtxLjSvz3k5izsdcCbL3tToBxvCsWbJAex8AYptFkWt4WEjPMXrzg9Ptb2a9tpAV7qoPhVnusEj15dSj",
  "key28": "3eWp48YAceS9uryLTbSZduwZzsZk9StbTABPqMW5BYs8MFFEJxzMpK3qeM4PThbAXjV5WenWt1b6QBFcsbofN9QT",
  "key29": "3bc6XBqpdwrE2y18rwYeYaGHHcwc6wczxngxX1SsZNj9mSCzVwhPNdMbsGdepYL3UgTy3snLCaJ3KzSgFMSEVE1a",
  "key30": "5HLRZsfLZGNg4kTmQLVSJCviDXtR24AmgX4f2mdED7RYh7uoEe9HEQV773kWncQ5z6R5FUTAFG8BPS8CeYYapJF5",
  "key31": "5V1hwRufZ8YVaESWpntm9ohEr6o7QJdw1H2Kv1nEGcnXY8rksraztiPtrk6KBxZHFZfQodXMA1vM48v9An1ygNfm",
  "key32": "9M3AUY5D3UjvhR6wTStox2oSsV4XZwTvLRLEtLSxxmcFFtJHt3ytWBMgPreWThekQ2ayj8jBa6Hvd2JqTsLCpht",
  "key33": "2XfXanssdaf6VZtKaxxuUJbRpYwxpsYFZ25EFTxC3PmpQcWW6StHfSownhHELwg4smae8U8qB7gDNXKHiAuLEfz6",
  "key34": "3uv9cEHVudmxmYP9A1ZdTqVN4okx4tcr6bsbW2cRbsze25yzr5w4vF6jNogMp98Hs8iP6Qcm8m3DpXjgpRuWRD9c",
  "key35": "yTV4dygW9B1rSnzFwKUQdu7pKW4kR8uv5p5QTJzkSdJa3Fwpmd5RPQfB6X3BzqKpNRTdw8g1YWFZ8YSdhG4xTxS",
  "key36": "2TEwVdnJ1L2bT3UvW6e4dnieJweVA3Ab2Ppc5CEY61aHefgMm4hTAdE3vK8ru9XUoThfaMvyS6dXw66tF7nhKvmh",
  "key37": "2fedPkpxVtPrBwL6JWdCxgTL3wCUkKTSrT3e4bim6DR5mi6EgJDz9DeVyA1gaA5NEGiR26Ej9vCnmrJSaZU7Awuh"
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
