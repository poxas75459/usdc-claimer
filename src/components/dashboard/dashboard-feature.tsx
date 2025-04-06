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
    "5oASDgz2hpkEnJrvSccKdY7Bmds2jcSPizzF3AeD2g2RWgPdrbCH9AFppa1q55vdFg84VFHqiuGRycUUzu2cFMkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVEdjdgxc7uJkRFtaXcssw26WwXVY36cNzT9i6iQ4s4yQxeRmZ3LyFEttZFUb7B4eudVWPkkpEs9EGFDZH9X3o1",
  "key1": "3cr7yzRBTw1fkkZFSYRBoKh7uWUPZLqWmDUMkd19fsed4GnUkzMFZjRKdxG5nUX5W3XFS6PEfSX7csHhph1uEsMs",
  "key2": "3mwVMEHStoJ2xdmCfCckGF89QsDmDCswgYqNtgZf1tyGB6us4yvC3VAcGzo6pWszwpeh4nnWCuc4sxuE4UHRQaiw",
  "key3": "31tJJbQE3naMUBovB6KdDdBDGTkyHAbtsQGaWKFvTyDhp2hEMwWnmWdKCrLrGzBiisqqpgBkkJzPuELDqHPDmXTV",
  "key4": "4YCb3PNQMSVeMvV7MCfrAYVMWjYDpxH4J9bePv5FRweJT9wspW2tz3hh728B8uiMdCSZx1bnFkW5hPDpMDXSkzJW",
  "key5": "GqWYzhSnZDTAnQhr15yHMWcUX73PLkz7eiatkZKX5SKKiGSpYRSEewRPgoPfCFjtXYxLmjcmY1rsReger7VN5bt",
  "key6": "ymVYNUaoBA7icXQw8wyKpeyose46avyi4EQS6S7aUvQ3YsN5kKTDHfvpfwLnjsmQscj5VagLvQip62Btumetv3N",
  "key7": "5M8bHVKb2a4eyrr8w1kXhBqr1b5S8Vvv4uccW4vpRvr7aTPoJ9K4iNCknLzPZytDv5yB3JsbMwyStSsxVvF634sW",
  "key8": "JYLrou5sv9ccZzvAqmvfLJzzM2wx5friGWSZc5TkFnaLfNbC7NMmGWC1gR9jKfhfyi1QU2juGoXoJP3ECSobRes",
  "key9": "zdMwAGNS9T5QwGk7gGWBeiGzLaDvkCjrDHEWDZ43AN8j3ZhYhi5gXiQ7ocBvNx3B4hJHDHUbMdJ9BQpy4LaDNNg",
  "key10": "BPhoKTjeyJ1WeoCccfRYLRfXQ7q8nwrMQJKaKSonF4DWfzHWQr2KH6kC74Bb592AWpepfxjDtKDBb11ngxrQ758",
  "key11": "5qwhtKkp5ZA5sfmNYEgLM1LjfrQRxZ2swAQnP71vozAmreoQb74h85BiLdWV8CPotBi6RLn9mMZwtiTn9zX85k8p",
  "key12": "5UjucjQZ4iE7gG3BbgEsSYxSgU3Z56jgU5Q3eCUhVUPjDjDEXwoPjvjPHsMeXM6VAnkCYNi43mfP27XnxQVWwyV8",
  "key13": "3fE6zWqruEJ9w5VTdoZR2LLmcnGHuNzXZvjtA79u8WRkq2KeCYRJ3qyBKYrQPXbnRG3KtYpd44KCTAcQ7H4soFA9",
  "key14": "2hbxwBG92TiwzNP26weLgdr23njoU6uAKZKgJ9WCsRwU8i9MFXybPJoQkVw3T4X48n8cMJTjVChqamBeHMFnHJ84",
  "key15": "3vzcxauRy8G7qDt8WvVwLe82RvLzJciPH6PGk1kDNS29JQZdvSr5W7fw4sjZWEPPXTA8dFbSzwKPUaGEowNccrnY",
  "key16": "36XtcQgCzxwGy4RfBY8fXGx3Tssq4J1As4ShApGgcLpt91spUf3Y5QPZkvpMNoP9f1iziRYnQKsZmfcD4bBQiVko",
  "key17": "4Cr1wbdezWM1iCVGTgTjpQaX8ab77ZDXaoNa9nWf5eCCx4D6k9KRNuFv5ujjdNkzYBktw9GQsSxxiqo4io5uk3UN",
  "key18": "5BQUnBQo9rBdPs3c5UGiLPrV5dnrEE5Kz1VARzg9AHyq4eQbEu2JRd12DBWQ1fAnT4hwJta6sECaeVv536E8Xu4M",
  "key19": "3oYExTTpmwZKNJnVyXdHXFQRh3kTdNyTGTqh7HzSMFAr7BdiJg9ziXKeDVh3bDax6vZva4HbFZdmmYHLwSFwuunt",
  "key20": "64d9oDrTkKSQZacFF7wbyzE66nBwSc5rHPuGQ7HX697A3SaUAM4oor1wcvwMZHcbA9Prj3TmhCKD783TVj6cdj1Q",
  "key21": "KEZtXCvtsoyEiSTtGjoToqjNx9vLirxJGvVMscAPkYNgqXPAeL4o4KRX4gN3zeDGXcYX3d4JkZPSz7i4cqDdKM2",
  "key22": "5MNzsSonognSnBKbDhZsAndDqbcgrPf1YMkikkAXJsbVA73pw7XsNiBnLRwvYta9ddZWGz2Kr4Uk8wHrLZSjbxva",
  "key23": "2wQSyj5EkSzwRHPpnLQ44dTE2ARBh5WrKFCydE7QDSUH5e73c2C5yXPxLYHNjyruGJoNBKCkL1aDqY8wD5sN6Lk9",
  "key24": "NDoAJSt6NnsMeVyqqQDPq7Rr1bCP2Jg9Yki2MJNC6GBykm8pWywVPjB3vWuiTzdtGzK7wDXjJGf6zCmwvg9oVdk",
  "key25": "2tyTDTTcbtXCuyiYyjtBmQNmeAjtPDgweZcX5Ufy1oc1h37uVWnCHAsVENNePRxzUW3nGTsgtBckRsCUL8wqDmRB",
  "key26": "eW8KHCN8gQVLUV5TyvbhjypcqtRCMGsGvRtd1kJYb8TzadLwbSGnoNbVCvwfd7Qf1FF2nbRjaRBkHRuoft3hSGK",
  "key27": "21HSp58nzYgYSua48vVUAZkjupMV6G6SG8Fk5ckb8VtJ8zQb3PeTALZ1o16XJ1rCDD1m93zxWRKSDZggewaazXLX",
  "key28": "52EUk3Hpy5bJ7jQtaxrGHEsKNX2KvRFxm8zUZJPsALSYr4PAMbvvkHmzzeh2spVf7G4B2hhyW6Tbg7TYpsANfwRs",
  "key29": "31TQdHPuuiTmZ7oSe36spuNgpRvXLQVNWCovG3X2BaTKA5PkitxDYCpF24oyqDN5wfESV29xcCBd16LtGebu6SWY",
  "key30": "2RqAw9umnzMJDzuhLbyVPajYo7pHUmK8WoVSikoro3NgWSjmVPFbZaX4jBUCrmYANaPe3m542Bhzo12bCzsH25N5",
  "key31": "2njvrC3MDqzV6w3JkFNwLs3aPJ1Bdm1nBrH288GNZyrnjk6S9KBzwz6xqGb5sbHao84aSs1yPrWJA4ARofPscyCs",
  "key32": "42de128dYr1d5CnAet4w7SE37CB467472U7d6vwisHHiaf4g4ALykhPhyUeWP7Fv1JrpG1hbnK7if6tAwX3n16Lc",
  "key33": "o6gPUeSoj2xPsCQHrpFV1WVTrYQMMW7vSpqSbm94gh1PQz56f6q7nTmKK6fp1rUEYghtTBX2J8kreywno9ATLzd",
  "key34": "ySTdkPfwef9mn9Sa8Acng9RhyoV9yzmNDXE2qMcrZez1EDB8vL1Nfr6QShoCXKgdPWJ8mBPYr7AZN3Fq9NzYyZQ",
  "key35": "2K4HYNuGqZq1NtFgZMQbE7aFsXv3PnZy9h8fA6oC3rrejST2hF81DRqQLPohgfrEqi25YtDJZMApLTew76rCY9EY",
  "key36": "56kXZuyqKAFQYYTQq7zRmKRQsukvByMvarGhZNZ8QQ9qrc6PZYyTynsQMToRLtVRmwZ4Q2r3wkQ1aJvbL6PKvP34"
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
