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
    "Jn4z1sRrc7FSFjeGi6ESsVJHbbNKNjcfVyUY1kZYDjWkquUpkDRh7gLzZ4p8GvP5YYT6aEuckf2wqVScYMUQQX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TUCNBLqK2LvGK6fzDUWmAGQcCQbDBz8KCksfypnsAj7emajHUy8P33fJcjdGe86XY35b9dUKcPqYFnRNaCJU8a",
  "key1": "sKDjdaFJXm6EDeXsCbshYy6DhTR6oDuNXG86o62jMevfJDaEDngbf1nHS5Tu824yPYKSxK4aUKSs5vjwgc2KZvb",
  "key2": "4fxg3pf78DFzBT7h3wn8bAooYh3LwMLCwvf9NXynRccMQmYC5P1UWA6PgGgC6bSbWf4vmWMgEgJnnM3F4mAFbL3P",
  "key3": "5KgKNxjVaY1fGszzsR6GZUf6Hv2RCPpKaoFfa4t3ECqV44WU44Ksx4779E3HxGewVvihNXqHpoYZbGVmFycqEL9u",
  "key4": "njewZwci7JdXjZcZmeCEVohQ2Fz5apE5KawQkZWfGqDmbEvzxHZ3FAPBhC59xfmHRZki764RdxYhDhFxQGb5iCM",
  "key5": "27vr1VeNtL2mcjz9XSJhNpF486yaTbQY12Gf1j5YfFWweqUuovoZmN5nBi7xr8zzgoqqaqd85ui4sBKt6frF2Wiu",
  "key6": "2tTqQrnaAZp7xCiFbqFBK6KoY3GqKaBfH4K3wZgD99FsUPr4SARzuq4yU4D97zj5GhUT47RcXctaZQBmuusGUbwd",
  "key7": "jTDvtG8dKyPHJfSNMAJbfH2LYyQVXwURZSxc3zsn9bpzVZigpBmoV9jDZimSUC9LvmTmwtFQM6s1PdoEJra7TPD",
  "key8": "2bNmUb5fGzuf6QA98AFoxzSu8YJwFAcaBZbagAJRtJFSjEXwKwysXkhc4eM9q3aZ575Ti1yvbY8B24pogPgiHprr",
  "key9": "3Y44PK7ow3WzcLXUDcuqULKfdypCPDeixzSAqmRMn9QmFpGQttBLjWLqF7QfUzsr2Td5wbyhvDyLFwrgZ36gr8os",
  "key10": "2mc6Y3Ui3WjGGtTrgwjXketRSyn3L4Bz171kG96qGE61L9gh9VzKgqw7fa6M7et9JVdwDB3KSozb8KcnHmphpTaX",
  "key11": "2N4kjHijLpWN11AtN5n1SNccbmbowcRSTqM3rZutG8dCLinGvK3EfG9deMTDPzGcTLtkn4FPvGoLU4TFNbbjGswC",
  "key12": "4PbRHgSryPsrLX9BPE5fcxqowxmcNAHWFBucpAHbdwy2YNavekHFH1XLDKjU65PW9Du1LUfuxWUkuB14MJQmvRpo",
  "key13": "55Drv5dZWFgzVKPBPxDDdQdBVYkC5PY8s8MCeousoh8nmaoKG6ntBSFSZ6BJUgPmyK5hmf6q5ewwMJ7mapAHFEvQ",
  "key14": "2yG7a9j5QPE8ccbsALGhKfL8gdv3NY6FpwU1ASSp6AVEQwvb2GTBFvjVBksB6YUjRghGw8jrHsJbgtiinvUKqaN6",
  "key15": "zbA3APiUvBWvEyE8DE3bdktECmrT8z8GhM18p4BYQvWj7rMd5XrE2fqQzcaVQF3qYbY9KQutfjt5Fz6SvB6EUWh",
  "key16": "TMJTM2fjkwKVzf863eeCJ4CCuy2aoTovt4cXKBxyFVs4XXhY3KA8NFgnLV6njdsDub7ZZdwtj4nxSdgiUoucanG",
  "key17": "2MDi5KHAw3NXRSvYB84W3ZGzk7eSFtEjXxWHnawjnAjC6tCCaDznLCPE8arYhjBwWuWzorJfzRaHAN6CUsyeFsjt",
  "key18": "4tHB6o1QSqU71BXKyT95vRzq32uk6176Nt66jsJfzRRavf2RHWEdtUNDCJaScWwNtjZ5RV8cejVHiHhAttx3uCPx",
  "key19": "2FepuvCVeewBZRcLPQLe8DRUH9QymioSZdy3LQHJCo3x1JW5hqS4HaX1dE9quUzreKf7BmCQPjy8srYvW5mZMdzX",
  "key20": "4YYbved6dH9XZ4KMaG6y9rzxDavtGhv4f7xNgpmfPhCAD7xVvNXtdkySN9Kb2RJP4LGb7VDdQEf1anfXSPs3oScH",
  "key21": "4Eif3QLQu62NngLoFULzCqDJyGBjp5Yk7ufqygur6AVaceqFGJxpcxXUk3KHbcvVfQmHeEFLNE9LMApd81BrtQkU",
  "key22": "4EAjUdtHY4JX3gfbt52uo8m7nTBwwuNn5GFdYF7xvZyTwzERkXvGLG1HTvqqZmoQDvh1dC2j6wgKEww84ivoaYQY",
  "key23": "4P8V1WjsuNwSnZc7gq8aPXSfEQitAcko1L4oQ3DpA11w9vUz93eqwJj5ZKwJueQ9w2rmYbjpLN5Tj54FRmxM9VtA",
  "key24": "4LMkSTYiTeeeWrDcoQXNMgpfis8HyNXG318ADqL62ygp8kJcnvKHqhSEBxirjdUWhXFtojUrg4QC5U6pMEfKgZtR",
  "key25": "4P3M9QiBN5JhJ7WrRHwxbSfWXdio3b98EK31rcPU8hihUmG3HpcH45sxKCQdpqtg3vLbvunBL6RhNAsGyX5W7kRi",
  "key26": "jwP6UtRfJUEpWcdkbBASn6evsA4Y1BUb3ZH546bw5N2ATZyqNYZXE3ArEri2AZ2Dk2YS5neMTv2oxXbhY2rSJdk",
  "key27": "5A4m4DfvfdFvPR5X53JovRNQEA6nC1AnfyM2t3e18vZSs1iJCzmVyHWzvZMm3UGL3y54CJFjKQqdoqS5iNmA1QG4",
  "key28": "YnZGyrE9bhSixACbchYY5Qb42QhfT5t33azfwb4GufJM9kv9Ef1FDxtaf6WT8LovmcZBsGeCKpsfDzAfV6cby3U",
  "key29": "2piER98FqvcQTccTMovDP5GyUcuyo5eh58SEAbYyDNeCmYmQgVA2xpHn8jo3XXyKbHzBEWJDUcaZJS23RfvXrf2S",
  "key30": "3wv1dsmgTbjvRhm9FpTyk79ydRkMwQNES8DGmA5SPqpZQVEERarRowE1johqjsuJ6TtfKxdaxNr9bPKRFJN6DU5A",
  "key31": "4neTr3DaaTjvcgVgF7Cw8V33H6Au8gKiadFsM28DZTPU3xkCwTiGrfPhXtThNJvR1BLyv4euTyEwBS8xU9eD39dy",
  "key32": "3ebJmYPg56rrHFWYC9n6N3w8ghCUqYawQELgFE2EA5SzKnJcEKLv3KZjz5TtfKewLvgpnDgBpYqtbykoUaWLemHM",
  "key33": "3jHcTfWKi2D5DSUkQCF9jXxkcdWLtALU6jhEpHUYKtQTQWd4nATfHscJgJrMaFiQuZ11zBzhHm7rcHACJFGcuZb3",
  "key34": "MXrjgWNQNdm2tAMJWQYYHsut3UkShAcVFqPZxmbJUfQ7t4sRGaA5qf4z6LFUgpkR4jvpQiRnBrZ2SRU7gxSapm1",
  "key35": "3nRirZLPheprzxBud1adHH2Kjiz8jRRAXZDEfTfZRpQhU1K1SUuMWmjtc98fThEJ9N2JgfbKW8jpNY5k4N8xZfnM",
  "key36": "4veRbtFvUsqXKSgxcurNWX9sWBqsSXw7SQ7W7ZswtEbwoK5RRyGqKLLVmqcP7gkbq5W1kNSUp9iBiBnSarH5dW2V",
  "key37": "2DsmsjSVqBqhNCnfRPNbtUsm13M2tX325PpKwtN3duPR5q3pknDAEfSYUjWg5NpeEht8jR7gjRazcBXLVAEKtzCz",
  "key38": "yFL6s5JtaHkokGJNeGNdv9cnzhTxnVreWJ54jQ93cdtnggzBiG4dKcoGTVqXy9brshpamazQXyEEkD5qyLRUxFj",
  "key39": "CH2iEH15EFF3cjddrPekqNuEDrgsahcqPMA1BCLEs5XaQ9YYQUeFEgWrK2eGtm3Ni2CU9wXKmGmnct56pdw9Fh5",
  "key40": "i66rXHagm6VfJK4SRbXodqZfrq1xiAAeMo13zF3NsEpiwdLv36x6CTRNU5oxWDgn2eWR2p6QmAoq68widQiG1cU",
  "key41": "2KDoXHAhYAkeXQECvuxENXFWEpAZov7z3k19ryWuddzDUfeXLt67uQridZxec5PYkteRhD5HEpVPhet4uUyeJptC"
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
