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
    "2F7dXdqFg1t3tN347Zdcu97DTpGyZomPtgeB93vdUAysseQBfvkAvVT2VPChAia5CyutEjU22PPxsjFgvt4Rd6PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qGQF4SUM7XFKg7Z6HqTZspf1xVQDT9Vu7qpAbpJivg6FutnNDD6QxV8oKMmcep4UEpmvmddNbiLAQsrBYZvJrB",
  "key1": "3poLA6DYiHPVUdGodvLnpkJ7wpFUtiY2NG6EKfR6yBsFvAFqfpTBowkvNN1pt4XfWMy8wm5uETKP6gyN1UomvKUD",
  "key2": "kCQaaFGUTN32jnEg7SJBMjaviMoReUyCYR7gV9AfsD454nYzxytBCxouxZU2SPhQe6Fjtq4t5PTRmwCjCZJk82P",
  "key3": "5reNgbr2HKDnEe5MCaUbq8mLBRyPd8RdqqwdjJg6KHDGuJKQ4iHAPvaNWekpSuxq1QbJmrPkyhqrxJ7i9aRHTkq",
  "key4": "3wV8VEKa6ngo9BrLYhFz2zbNPeieLjqGGkzL8UCJuxSfqxpFr7De2jdAaNwHSUF3xMwWZw23TNKjBJXmNkmVvi6h",
  "key5": "5uLNPWQC2GdqLiy9nt4WK6ZwemnoQtpmS5kZLmx7s2xK6tLZUzytcT8HVBFMBLQaSbYv3gXVix9UeH8v8Ao2EGUg",
  "key6": "4GrWw1uxWrDWBpZS1Bp7mHimiTBbv2Xh1naFz3tpc4MbJKQQ26PPvxDAxBsffKB7Eie6HjhsWtZZ4LYBUNomfWVv",
  "key7": "52UxDYsjqhD2spsPsb7hArhJcqBYUs4LqQ2FrP7R43z1Rihr6ck9n7qorCvKyy2kkUctgrz4dssSbmkNKi85GKDY",
  "key8": "5foBm1WMeF5G7LEEhuJjg33JehziucSf6CtniVKJFBuGUpqo3yaTgYsVKtA6Nfp8LyfjgJ3KDfxAYqpr21Daq1ZN",
  "key9": "2eERErdpUkRFXTWLqURgXGVcRCSgynTZRx7zot4UoK5Y8WTwXfUSy1fZ6gcdLYoPsGYUHVuwzG8xE8EVP3gZyVoA",
  "key10": "5kQrB7FNjtwMtZD89LJJKiu3dN8kRev5yLsaKnXAWMfgTEcmDSDvUtJWrKBx6xr6yftzTLaddPMqqHn7tP9B7tPm",
  "key11": "2K1x1a76ZtUustRAHbfEzYgWDWjn7nYGbjmWG3ggfX889q4VnhYAWUQREJEqrvbiLzLREcASY3daGdasEtdMXvo7",
  "key12": "4H9Y56W5hopRPoBfhtnnFZfoNoQEj5D2NmGxbntHbjGhvNmFJejuw8KVJ6YAhAxfWT4bX2dqR6tCrQ4mSiKKEJjM",
  "key13": "4FMNYqwEGsK4T4yXVzpaRvS8ifusBB5HLV8HP6S8AvjKqL1xDUWfho5cUggibe11zCrgeUHda9MqZtDUyEG4WYtL",
  "key14": "2S2Mpwqbr1ZtefmtdQK4SZYDkzEyP7kQwzegYUq1wiYJLWTVGdGe34NE2LwZvNQAV4bMFBQxN17wJSTJ69kBgomu",
  "key15": "Z26J1SfGxpXAx46tL9yVhKXccDprk96K6EWjREeBs2KLdhK8S1GD6bioj8tT2HetbEmwcey1xnrrqgFFWEAEkd1",
  "key16": "37eLT8VhCBZ14sUMYsUyoxyPEj6iEEZoAiEVhngbB1Evhm9xsTsGF5BV8jYB8aYStnbBy1nS442fwxR38nxsSECx",
  "key17": "R9RanLzH2TAqLcwTq76yUpKgYWgCNbQwHaCyznsGbQs1svPDyJU3gCtnUBxP85vLq3aWSiP3vsLYMvLA3BsSBUF",
  "key18": "5FxsibfixeLoEVzXsZ5L7CopYYqyyuDC3AuPXerqkgnGGJ57igQNg6qpBH8yniZexqEf74xyJ2wXabUgS2yx37Bq",
  "key19": "22cMbeEZMs2ZGhDkxQwFX37zsG7xs47qJgg8vMBRghtygF54DbQDvy7NdN6diqKBWEWUTwrLWUZFozjZCYNfVR52",
  "key20": "2aMPdb8eAw1XPYiVNJAuKLLyW5KD4itMfVwfSDHnxgPupEbSrpPPqn6NzFaG5igbKQuxL2pY4TPeVyf6wLfsmps",
  "key21": "2EzAU8ac6wx47cCbsTxdiR1DBDd4ZV7EjPewEAHd7c5G2VPAY391gJ2XwuV1SWq2pBrX788M9ipgAfU7GEDXGr92",
  "key22": "5NeMcaTgK6Jh2Md5wMb84q9J7xXHnY6vj2cCoWuNdzLsfXx9tcPMmczfXu39pn7oAk4cnnhrAAYy3mqjLiGSLR2L",
  "key23": "5CTnaokeD1YHMjL7xfp5ATEGbsWKxfVDckJwTgjTX3yynBAGPGtkL4H8umZDHcTnSnp66wdbHRU76nm7yqFujWxo",
  "key24": "4mzk2zVm76bqScprJ6RfqqUiuBvmEhb7VqVMP7rUYQpKxk5KHnhFviBJN7ZHQHsbbrp43C6kHQKhD62hXZ7afVSW",
  "key25": "218iotDzLD6jH3E5ZsFynZpe831Xmiv9TApaE6WjHbfdSurFemXchgbe5C2JHok5nMVVGjRBwx7Go1ARJsmLv9sa",
  "key26": "2JSS3D97Kx54p7bU9YUSA22VczdMUT8WGmhY8fkqPcDZYxsTvq563ha676treMA9qk29YRMqczn5G83L3BYW3iuw",
  "key27": "5hs1eY8HUZzJvfDM4pw6eEERteg5xdow2rbWcTXi4xCpt4DuXyBhZSjxxXQe3DiW1Q9KdYhDDXLuJSoiW7NSpF1U",
  "key28": "28txsQhGM3WBNP139uKQybgFc4zcr6iPowH3e96mjoQNFnpkQSLXG1qqrF48Jshwd7dDMv8VLLC9gS6n9jkG5tPH",
  "key29": "3xKQhah9myBD8SUVjMxQStcxTAjmkqg2KMUJfgdyxi1PQJNWHpEXFoVbddid8YkkigWBaGAbtiz7fjHNTiiiFvpL",
  "key30": "3TVuK69j6iAfT2wfQpn64L7fV7QVNKQxghKJYDBAp6wncsB9KJrgNdWkPC2HsEGMsuWnWxtZySuFJ5n9Dbkw3Mkm",
  "key31": "4brJHWhqmwTNeikHr1bZYeseSHyEf7s1vQErjxnECXdwoxZGc917yEX7AAXGLP3vNmzrPPY1Q1MixkpsPd9G7Gkg",
  "key32": "2ZzGiZS6gyB4Uk4Mprt2jJZYxpaYrNpchkyTHgbdNuLySbASu8dFegkJ4dKWyGmtvxUdrD1sNc3JRkYJVU948Dx4",
  "key33": "4Zkc6HoKGZv9EJm7Ztkv8Nm56ourcy7rRFwvR75JvfxE3mofehmhBV9gYveQs3V9TthTDZrA3mwxxx46TQ4HiYbD",
  "key34": "5oeBgjbm3fwfGyzPmvsZQTVmUT4whMXZqvcCwdyJAPi6xvTtKo3551R2JM8j4Qy8NqvLMpyn7uUwDKkdYvKBzaTH"
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
