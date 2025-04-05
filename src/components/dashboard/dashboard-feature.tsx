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
    "5kRNZSsP4BcFXdjB3Z1mZyFESUPy3LNSLQqN4wkrS7pcohqmhQJhPQu7XnHi4y1Exdb9xhXRjGZrc1XDD94sk3s1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eskdVt5JWbdv99PmQkXTmqfpEauATLGqnEdC3at9m8vqhbJHiXi6EYsxWWb2Sj9ayyuuCDTCWXBzZ5qvoUyRcQT",
  "key1": "5wsMRh1VHozm9Rmhk7av7JbsyNnAyYjS2J97XBzokRWNAvgUknvCjdWKaStJJ8Yzhxgft2zZ9zjLoYRBw4UjAXUN",
  "key2": "42DfCADY9J4WinshbwUTw8FCqZ4Kzmxf5pz51p6z6d9MLmGBdvaZqCqnzFAzRAuBnf2xXWNoBg17egCYaVxEKk1e",
  "key3": "2mZXR9BhZH76fVjjTww14ASAutuetskY7AhNLJDZ9GRSACwDtE68dh4Q7cYz6sA4kjB2ZXX273p4m95Moze7veEo",
  "key4": "5siLjum3xQCuZ5bmXoQ3YD51ELxrEvHBV9fDW14LaxdQ5gsMpTXk1ZkY28h1ZezT6nFtCg6qMJVyhi2BABnnAueh",
  "key5": "5v5WpEucYoKx5GTSpB741TG2zhGikqFaoCFTP66X88t4FqPA8X2L2Ur1RaiBpr5NTRWDgoT4zgSiX3pREdWnrDYa",
  "key6": "5CRWVRnirfgh3SzrDBZ2vgVMAomNetpG89VYH3vWNZehBdD1bdc4rwPnNw1dFwGfzFVXY4FoDQUTHymVhPshTme3",
  "key7": "2qpUD7R68uRKT5T1m2ZkiBoEZbwadYFiYhKxL4QYnaewce1VJyxop1dWa1STnVsN5dAKmkT2FHQWs2vBw4ox3Nwj",
  "key8": "3LHFKT7PCoaDrAhkdRDFMvugqW6eShBwpRXMiTR5swqJv2LGGvnV6JRDj2NtfjkpwQJurfvpeF96FFYqqnEdg44k",
  "key9": "4AZaEGEmJVM6sgTDH7YRMrgLv3QF8L3rdtLpXxnHdvByT71Sn3iByNpYmLdQ2jjcnrNetAWf5g5N6cHUGaR5wm27",
  "key10": "56SyaeY427qieUg1aLj5KnUamfqmWhYRPahhwXKmoKWmbe6E3SGzhnTFAoi5Jtx4msd4j4BCsd8KPghbNvj8wwi3",
  "key11": "3Q2J8CcFL3m3swbxWhv5AHXwZH9J63zQQ97W4BjoK1n8AQZgsHGREVESQd5mt9dRdca2xVy11kjwHQ59SACGrpVB",
  "key12": "3zQxaV2PH1pcy7kvNZpvj9pnx4hovZc5KWt1GvZv7DhfEXw2QeRt7xFS9sfXxaXrfPP3GTY7SSaxUNR2DVvRdGwD",
  "key13": "23xrz1sq4Z3w9QWfg6MNpGpWN2Cc2NM95JX7DW6GzdH6HutyBX3htJSxeZpR2kBzjVsbJwB53iuWDcC27EDT59hd",
  "key14": "3ViEADyxmUi214aXAwcP5crJZb5pevi99W4YCKYjVuY5VCE2UafZ7sEh6aTLNerNbQjBY7dAtipTrEYd3d7Gxqde",
  "key15": "5kvtnACkGs5VR5UjQkMPFMM3vG81jAWQr6tZcApwtxCaok5BHY9UitjbZGudJ19EFkAyN5ZFSwVpRgc7YxHsj3JM",
  "key16": "NKK2SPd6rT69Y8C2zybKk4jtqcnmXPzXPmGUbeCYk5mz2a65haZ4cABBU6jXqcSjPiB82KN4rq8CX1gWaDBW2Xv",
  "key17": "4WqN2boa1cmDNrz6DkW5n2LicviHk6S8dV3YM1FWPLKaxwEEA6N2R2jEugfaKhnZSJt9J385cWhu6y1hkWLkLd1",
  "key18": "42NT1C7PHBtpq48JWC3i2rE6zd4PNeEok7H4TF4FuE24mNj7QSufgMuq5s3qLkb73MPLnYkP9KHCGFdnGLQRDxBy",
  "key19": "3p3SzyyoHXZEawGqbEAVs7JyEsS1wUK1ND8aZGoXy6MniC2uwaM5fkUgkeuvn3pa9xanURySoW6gaEEiR6TpVC3b",
  "key20": "D3tRU7DY7P7w9TZmX8hPUaemCbaTTkv6A78e6FBZe9pSw2UqehdVBGRe3Si1yq469cara7JuCGDFKDDo7UauL6U",
  "key21": "PRmfR1tK1iyyGGvgTxjPgsp8y2QNMzYU3JRASS2m7v35vNwouLQLHrWJLcqzXWVA5MXEZnWLe68HkPSkri5eCQV",
  "key22": "5BYWGsD7Na8t2VP1itTHUQoMFJzrhftLtwtSsCnYrRqpUSJup2HYJCWGXdpCY4qRD9s8Ct7ikEAyrzWbJ1t96ye8",
  "key23": "2TZcJ3sRrbveJE7hu6pBthvc1xdZVTHQb4idvY3WMThFoBe1amsS7vQonYuqkroUVfVXV2U3dFfv31kq1PAnatHE",
  "key24": "4wSYQ9nrJyAP2C4sqJNrWLSWJrRepMyqQWRS7aQ5zTMy1aZVrdDcGFRYH2tkapLUHvwYerzVZ4KEp1obns2CVXEJ",
  "key25": "mPNo2dRv3vJxh7rmmNfMgNC2N43uokvJFHnEmjd6fRbDT3npK5EojfsKdbzrYjvspFQfk5syuYAMFVP4pEVCYbN",
  "key26": "3QEjxZHdbJECHXq8KVkCVWw69WNBaDvvsJQB8tifKQ7MpPMPgffpFm8p5WtdqBAouSgvxY8RNDyn2VTY37Lfy7JF",
  "key27": "FaJBSDus8prvNKGtGRpyp5sKKwrhpkGpR2FwXveqqPZGbtTvaFFBkzvkWSXFtEe44zcLcmYemDQfkTGLXsr7khM",
  "key28": "3hRmekRX3miLUsjkeiszUJmpJVoQgAkmisYq5GYQ1D1ef9oSp7ofrCjBGCgUgjK14BCvN8EwnCnuuP2WnztCckUA",
  "key29": "ifXCqpQFA6kksJRajczSDeV4at7RFE6aHMsYEb61UsMs8oSi1NzSKF5rZEz5N7F57ZM92JHo1mLX65FZm8fnp8c",
  "key30": "5CTP7pRuuSwjXVAQjhzTtTouA3R82q3W1CKDCoWeSKNwxshVy6Yj4BJW5Jt8rhYuHg49KQtPoSruK89UtRUTREeP",
  "key31": "pfJMpR2Z865WGjn2MPLbeGVKDCR9CmpTPjFCwJqxXi2wkAjHMmxD6UJvaq7KSEsa8Y45Aot1tjdR1hdahDJdgDZ",
  "key32": "5qM7m8qDEzH5YgrQCkvKxXQCSa6Yw76Uuyia26dM6gxACJxqnFx4thdHq2t9Wqcw5G6VrD2ECeUZDpckWzbyvm6M",
  "key33": "4okaQK2KiWW8n5cD62L1TXMksExjgxasrXtFazacKAMfaobxMGwQyQnaxds3cSzZ3oc8WdFTGzgs7aCSxAqHk92E",
  "key34": "5RKvsYNHnB6KkQf6jhrmimSsbgDKVQAtPtpeNzTq2RMyRnNgyLnfUdzpyZhRvFNXnBEtdB4EVRBiUMDXzhdG9jXh",
  "key35": "7Mn1kDASNiVXa2KkofRazwMyLUDqv1aNrsVskSgH7XP9FjjAHbv9tSdQcvFDQW5XdxKgpqZ6q8gaXdqUnUgbRn5",
  "key36": "3hZMKsJmD5M6SUEUumpZgChDpKBvVpmoERFhtdDeU6MvPwrWmydWtAEkJeWsA74u1yHZmyuK9gMCeXMj3WBXn7oj",
  "key37": "2xzAa7o5ibCp8sEP76afuMixA21kQQ8Yrv8X3ZNHWLRxSNKv9Yibtgu3WPUPoDWmD4tNt6ezgi12eiqL8QJ9znXa",
  "key38": "3QEd8maxzp6T7vfLgKAK2dahkzAkrc5YjHfc826wBfwtDH7NBZzBR4FAhCHTjwt2VpbgVJoQanGGtkfRFt6Vv1Gp"
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
