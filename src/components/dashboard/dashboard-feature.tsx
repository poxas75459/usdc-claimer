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
    "4PUr8bGHRWzu93R2M8QAZMMNvKpFdbBRQK1ofiYjbYEBFrtMxwm7xoWJkJwhcmYJZfuVSsBvnrXa1cn4tzz7WMWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SAtuSyDJ5CQWttTVubcifqbVEokyQyhFe8VnnzJ7LmD1sM9ZTad9TSVC8QStBhyeCiHyg6nnhmVqXSvw3keFJe",
  "key1": "4mrsmMEG3T7E9mDnevTrqSyCiaWw1ckinAPFJhxSGyKESEnENJSFcMPQudnD9hqgt5BJd4RQNDov2PC6XgtNX62e",
  "key2": "4uzPRWY2vMfJYnL8DdKsXBe3SmU2nLJ8bHYTQzb5zpZ4QNJGsjufT1oD7WoFpu5jgfjBxsrPcChRsfG6Qqa5rau",
  "key3": "5Vfv7ycaiyt4oqWzjdFdeW35TA6Ws8wt7QiNoHYqEN6oTEXACBLidY1PTHxZa4NufbQR4UGpF5pirB8o7YP6DYdh",
  "key4": "3BQmzv4QXBDuMi9Ed9CF8ZL6atuKqhAc6X9H7AsaceDgFor42avknAaC8AT5CCBU297X9nik9LWjszSXwH2AGRyF",
  "key5": "4H2QEwx5MpFbwcE5FrspS4EBxxkX1SXjZx4mhbxwRBMLhA21T73rzHk8fyZ4udRaFZrJyn3KiZ3R6q3L7WvTKpvT",
  "key6": "2kgR4gfCNuA6EpTLM3jvGiqFpytqLiVKHBzs5fUHwgArnk6ciNpdpmmPt8AjYPa3mt8BKu5tdR5vBdYnjJwbqMPZ",
  "key7": "5UzdHyq5mdXG4DkohngHQQQtVPvPqdCnbzpSr7R95rVnBBGepe1BY42T1yVZdwKD6DbUCJGq8tYAgsnUHvinuDbb",
  "key8": "5RtvZ8xFEu8NrMF6NsXJVabTiF7mwctNrsAxo4hkC5wxByXTXGqAc4bizu55GZCQTWueGAS3BTQmfCmtAriMqpCX",
  "key9": "5w9zbpJbgAoTqzpzak3dSwW4HYWLWgpmKGCpKjbcZN4HGucXXhVUUrWEe8iXwxfQrDG4adNhmbKSxfmkGqfHwcDq",
  "key10": "3AQGJR79451oyicNcFaE5biucqmFZ4WPzg3VXtSggqhqhRRCbG8gc6eEjsGg2KA9VwpM1in9EC1Vg4JGgP24oivV",
  "key11": "2D592yW3wxNTCYT8HE8uvZTzGbaDZ2NzFocmVnCGUNsf41B9YFqVU4yQzUkx6UvJc3vu2WvasYFUfho9HLTmE7X1",
  "key12": "KZXjxFtPowhT6gz7Xw339jQk8sdQ374AbxvyBThjeuXqgBwYP9tgpLugG6SJ5ue8G4QZCErvNh1kCkoBXT237wi",
  "key13": "2Chj1hJyeexzMBLxvSyuuPYGkZkB7MxxCcnHMbHrgNrGGwRygKGtgGeStqFdfGeJHuBrnf5wRuakM6E4RTFT1Ev9",
  "key14": "2L6Rzw77pqgY1dkt1ZcDZ2RgFPjr43dRbCjan4Gznn693ijWTz9XNBcsgqRCCtHFcfnuCRAchGjf5PQQ4J5cCEw9",
  "key15": "p977UekcVYKhJJUmziJVyCJpdGA7kWSMa18YZwKPTGmBdbRkSHmwdF5JazyRHYhDfmXXhQMZ2egy8njMaLZHVsj",
  "key16": "2KG1NuJM5qaZhnzzQYGpEtr5DifrabDxukWT3jMy5vPEkkhyChb1vmm2dx5Dd4T2yC9QoHR6S75xsWwhqEHBziPh",
  "key17": "56nBnxa7kpKKmrLymLmsr7mVZ3gMJrAQqRen3CsPXLhe6C1hKRs9DEib1VWaArKFhxTyfAvrLZjfECokX9gakLSx",
  "key18": "5M8rFJYWncwiJeX19uHLSE4dR6BJL9CZcxnLWeFHRfNsUmLX3TapNAdWsFhmWEixkZhHjkrM7djidY61p9Aw5pmx",
  "key19": "38jYBBjiJyXVVBFVEcwwyv7UaHKB4mrf8VgSEa7wLty27Qk1uU6YMFT42KSuYDdDEgK5hPqJUumQxMe5Ac3GNE6F",
  "key20": "5YQPGgD8BcyVMcEkjrMTZZFoQfTF98Gcn5uD4FFDfrZtjR73rrTEArWzq9VT7BqB3usjEAAZUpUyBuwuA2DJPHGc",
  "key21": "rZ9dGzsJxGxKvscgTfXdZN2UHPzvRKLuDrJbaztp9nV1SfxyemP3NVGr9QDYZCVT5PnkUkZD9CeHeDjCpb23qak",
  "key22": "MYNvYxZ5u7XNkhHW7ku5qb9Wu82LbCkFodZ1qtVZ2RGCF8iCPq42DgjayWy5pTXC5ruPiW2qnfLqqam1ffGKFZq",
  "key23": "3CLj3g4ysqhmCCTrBUzEv7rc63g36seY6eg4GkqJpcszdy3yksxMPJdSvS9nqME35JTCU3wUusyirnQS4SNzbUuZ",
  "key24": "59RkBBVxPxoboLtHReWSw6pKpQct2MvCNgJ6qAny8AF7s1rQeZYogfGtSk4KrgvZ48HxXxcZQ6QqGNG8k26Fu4Gc",
  "key25": "55GMAw1Fx4a81dZdUa61pDRQrXW5RDiRBd8K4tXpaQQUaLsu8f24Lxr2YAPW43BwDtWEpNr8zrEycFVgY2DQzZcP",
  "key26": "4mwAMghdUCQs7b1GhUrth6g3XQ9oNyUQYUi7kaUHBKUtGxmphMBnxvDZBQkQu7mjiuNdXakojDcty1BhJrspadpG",
  "key27": "29eJZP16BRAF3hBGb5JjE5UVLVsy724YPwnSaREAfUyc9RQ2nmW3mN2rdvxs8YraCZuibTbCX9ScAHK1cMyhCEWZ",
  "key28": "4RRsfKExLFWJ2EiK9ivbapQwi3d8xMShxVdHkCMVGEefEDjJGKiSZ1EtNc5aJRdHXkR9f8Bzn3JD7hdbaSiTDdvm",
  "key29": "4ahh7dTSABqHrvQvRP5EoP6jruZMET4yGp7KdYKwXVHrA7JjtqVL4vdPu3ka1q5ESGm5oPwiBdXeeY9zD28tndws",
  "key30": "4dkd6fQsQY7bzEygmfJLrZ3puB57oPS8i6tqEntvVYe9MN94R4Ff6ozo62nUgJN6q7aV97Mdb24Dy7YfThrKcnUN",
  "key31": "544QwasPxLAERpjURjbKgXSAmgFkMLEv88oxfvpeMdmgpLS14YJokJTqcdCoAbA1qVXouVdM3YFaRQvBQoWrkZP",
  "key32": "461BNeFK6sciMNxHMjN8oLc61z9fj7eF5h9x7urLYnMRvHhuWfnWEepShrCDCiL9G6CeHJ7gVB2BxvjRc8sHx57b",
  "key33": "4N6PHnc6CWyCEKtoBESY9nsjS5eHxSKeEVUUzxHdtXYZNSF4VwdVAAyGjqqprs4wBxHW31WBWpXqxDxtMf2JmPue",
  "key34": "4y7vA43gUUxoDiN3UixMJgGXM8mVaM2EwYvCYwWTv8PPax29BHrqBVjxqHxzH6FfXmPj3mCGLGGQAT2rToTem5P2",
  "key35": "5zYHM8nJxzKPKp1J32KatVgokv13FHEM3FDRgGB6zRhTRsssDgcqhLxTGbPx386jScf2o7RCCMYuhjVLZaS4mtLM",
  "key36": "2tAC1fiuWS8kULRy51FUdwKSmWKEECc9AAYfU7mc5ZS8DRrZLm8SdxqWp4n56NzxhBnCvt1uLYvfBzXjC7nWngfT",
  "key37": "5RmDWoHqAPwBnsEFchUhiRpYu9XeBZdZEMwEre7AUE19Di5LKAfVTL59cfSsdH2Jfnyg7wZ9dRsVZ17NjPR1QrGv",
  "key38": "3gVKdTjkeDa3GHMRS3rcGUy9sKQ1GFMf2MfqoaV25Dw7uw8NENV5Z8hwgK7xaQG6wwk2UYFQ45BjCNP7j6tFMhoG",
  "key39": "KwnTHDsmK8PmsCZLrPK61AAK4wz8bfr6dMHKpnSfhj1cpapnAEZk1JMVU5iBcPvomNYyznpBmSvDbrSxSEph38D"
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
