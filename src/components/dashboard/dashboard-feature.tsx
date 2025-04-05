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
    "4MsP1S6DD31GZov6LWY89LUzbnATLej2SeAUqsFpDFeCKzs2JsJ1TomMPw9Y1hrTK7UkBiwV9FqsUVx4TUSUqLxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJiAxtbyVyHmeE83fzBaucM85ebjRZaWVeyTKuBkkYvQVMqfc2jYsZwTjYTQar8HQ148hM9KLsD7v19NmNkifXz",
  "key1": "2Cq1anQgiV9utXXa92uPfrS82AVVHu6afMygUpG5RHGRrqfmiSQwSnmsm7xQsB5TzwmEPbuKhmpYpk7wWuZFcE5N",
  "key2": "3F6VYp61Lvw91WqSthtkKtSAeusFXkR9TaeLAYLokhK7GjZWzApLzzomBpudhibkN3kq5PEPEb56BDCnuVbmZ8Eg",
  "key3": "3kDuBWE1m6kgcp97oUzfAnPwYTLG5fhNppV8NLyFdD7Avk3kLxrvcS7CzLBoqhFxjKJf21XxFzQpVoEve8tBKqJk",
  "key4": "4cfYjUiGFxdvGMf9EW9LDSqGYz8poWaXuE8fQXhEhjLNHtJHhw165B3AgemoKqKPRjm4JDdKXfUUseBvny5x56ZX",
  "key5": "TdrgST56AphNoNaUEpuG1VXk3f7CmmoioXi2oAgXCem1T3shucRzCnNmY115Lj6dUWvKfrJmL3XuoBo84BhH1FU",
  "key6": "3zvrySzCnrCRiQQSQdJkJhGYDLqAj7p5bkaEZD6Sc4mVDuVZRHdUz4sX8ynPX2BXTxD5vfmxg9368RhC65PeMRf9",
  "key7": "2mjJ2ZVbE9NqKJJKZUJAT1G1izz9xb2hiqBJG3ooSWau7CFfv4dmAgxD4DurmXxHtadF3CaUYfeR7BfVZ6QwQhEJ",
  "key8": "5TcVuPxxgcBppEYHkc3TJy1UALE3BGjhzKLbmuvdqQoZAACgUwrBbvTj15R6zKLthyihEDnWuzMuqNJzeo6aNqrc",
  "key9": "4ZrUoQwasN3EVobZ5XmzjK3sK5BohQSXc8GAG9WVvGedxHcjQm5yuKR5fQFydDsh1gkauobZ6A5vqDns128Sbbk5",
  "key10": "3RMFjiVQAZPAYzqGUhiCFU9MbXuLonUPkbBVM8VEDeHEWyMrLiCVW1eqQ8dxxA6g7q6X7aHFrv2SB2hfCEoQBkq4",
  "key11": "49XkL83bSFg53Rfm2YLYbzr368bLEV9rvJ264XC4X5u15uwCztxUcFtg8rYaY3GijKkY6jZu2NpBybCqM3Heg6w2",
  "key12": "2zFmva4mW7PC1hbAYuxs5yCx7Hp9qVzutioF9QdmPCxwuJbDG13KfvD8PAHjXzhC4rQ9t6KutKFk42jGyAAHTdMm",
  "key13": "3735VLxqcnWYXQgQDAGFsjKkQoUNfLxNZRudJqU4kaJ9DEsXBmcxoNW6aphW4n2s8JALhFdGFfqpTtVwDhLwhpiD",
  "key14": "2weVYUtKB7iTBAPGx6j1PnDhNcrfn2q74b2DP4G8toDNvS6FNixhGJTNgz4V6xsyHqCPzCzneQKoQHqEgZLSgXRf",
  "key15": "3aXxXCg8QWnJxLCiJttK8rxeGYZpELDhQH1VveJtdbUgHLuE6bTHEYBfeNwybgxeny5TshXRCCiMaAuMe9BZ26uG",
  "key16": "2YWthAmeJp9wiMTCFg7uYNYnWe5GhyLjqVc4hwsx2hVKKNGdAoaUUE3gYrgM9rCpWNUz6RQjwHwXU8U7RmjG1nwk",
  "key17": "2CDvnKuu38Y1QT1Svy92EeNZ3PvwqayeqtLreoQhjyL3kqHcDGskEUcRwYWYFBKtRfaDeogqv1Ap2NaHFxM4MJbF",
  "key18": "36pKY74cHXn7sfvvGmvY8q9Lf8s1sa8mmRCKzzyZb3NW4Uz5MiMboxYhGSGfnmnbgCnJNQnLmSnjqQVnx1ybhNUD",
  "key19": "3wzfwHqaMTYqvhPMgqDU31h7gxSRo7cxBqW24YBVC9nzDQgsWuBjkJgr2sX5dcKX1Q414GcYLArx7CDPhp8FzMRJ",
  "key20": "4bXxLycrN4tDtsDuTuibDJ5JtHLUWYh4TxE9BFZXLgSEN2TNcaTqNHvUAjPGP3nJg2XY4b3y3YVQWzuf45tHkKrt",
  "key21": "42vCb4BgKA1voWEzjPJzW2DE8cACVEPF2zxyU61tS8RAhy8UiaVE9KKqE9v1P6DdSEKzr7Hqkv8vXxA12bE1zqBE",
  "key22": "4iruL3rFhsVRtThCHxdZ15a2aTJNz1d4xpda5H7xdiyRgo82WuJxLoi15Kn2CBdi2onXnjBm72Van3WSMemscC4k",
  "key23": "5ueYwEq5xWNzwBxBQZU5QpEG316hsPt4KGfw2YMhMBZTZTHEx2g93RX1MC8ijZHgzPVks9FWVfQP6EA5JKd7eL3e",
  "key24": "3wHxgZaq1DBnQDUgaAjjVVdX2XskuP9BijYNS5RJCnJ4vSHr8ocQbBM2EbbFMdxBaVimSfrD5FQMRr4Zfiv9gLYJ",
  "key25": "4Z9zLaogsvNSMJ6oM7ueb2nwkBBexkKLgEDwvPjx13BfUS8PC1jX67UNR5cv1pyMEJP8psXszFAhu1LrLb9848uy",
  "key26": "3idqFwLSaxEAakDiHdap1yTF9kgHxmVJmwRWEZWq6QgaB1z8yw8oo1Z4nfyoh9XC4whzuvThreLn2RWLSVjhvWqp",
  "key27": "5L9NGDGZKDpuqJkipuoLPX3EJDDsH8Sy54bcNhr9msmR4sTCK2huanmUKaAsiGKjQTboyd6qJFyCnsLAeBZ3iiux",
  "key28": "5RkGruAEcawFTaxHpFSNbS6zTGkMXka3NoCQXVPoz6H2MNeeMhVGDyvwb79NUmLaap4YtWWeg8x2koRjzBCGWwbC",
  "key29": "26wjkwi3RuxRAfa64n4ioQ2WZFdN6pz4W8GasVeLMyaVcjhLM6n5j7Hr1ige3beVnNHSuzp2zsx8v4zvndQuKw7D",
  "key30": "3HT1i6kymWuBMVxjrWw59pahL3cjgq5VjGYeXS3cmFhwYqSqf7iQPwSedL9PnXAkqYuvGTXTT6t8h6s6z4FyaMz",
  "key31": "4h8eXdvenppHzFK9gxYnSkJSqGcxfyPENuP2dHvnEZMmDWbvuBr8oUMqtwvguR5tYEv6ncFz1UE9Kdwaxbvevwmr",
  "key32": "3JTmk7Ly2XD7VvhYvAhhDSy8CVjmx3GLvUL4gpjNZBHCL4F4vQrP5yFtUKJ91WN2U3uyzyksJiMoeq2ctM6f4WS1",
  "key33": "nmg7S1K3JLzhZUyvJP6sVrWUuqxAsqAyD4qBcsN7kYfFHqaTfmff2Yvj1r5WQZvVZuqy5J7tpjQ92AGDXrAjgwo",
  "key34": "BVb3V5cfHPBxyXCvHEgTjRdXNRGt1p99PtuNQJwszSSAQ3YQoD6wVe6NCHy3G2KSDfRx3a8UopfcKKeTucosEq1",
  "key35": "3CQriAA7uwMsXVjErtsEEaS8T2wtFkygqP4xycfMLnDMAgsn5DuSan3b8Uqoobp9Csqgc2fsqrTXtk4MrjVQNkvV",
  "key36": "dVZSdwCq7gpy7Y3NURM8W1BL2BGGuQqSYtqcdUxhS7S6Qme55RMdvRo8hLZ6Yd6cy68sXj8wfFhRjnYzoeEcvta",
  "key37": "89tFUGmY8WawCNj4kkyrX8QSC9dZEiYGpFH68tC6dXduL9PWVjdkmXSxXdcpMAYjn4EwVMjCBgNRpAvc3qo2MeJ",
  "key38": "5JnoiYtKgd6fiMm1Eos3gxxJhtbqeh4xNqodaErnGZaLAENXvZjBqh5P7wYjxw7JvT3SLwtspPZSk6WPUGJqsBLP",
  "key39": "2zAKbWwdmUcUj4agSwNAvgwFiTRxkEYqWZrcquS8HtY14dBoV5iDCCfX8mxsDfwwTVJKD42dfa3KB6x2JguXFDXi"
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
