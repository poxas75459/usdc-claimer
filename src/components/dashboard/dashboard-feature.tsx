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
    "42pHUB8c4Wei6rLgfR5DPs6sYk8VcHg2nLgrNRsZ5gSCKzLifxN9q2iN22EMYRHEzpKzpp5tZW6t1pahR7uHRMDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPiykxxRRtj3JjekBNQ7YnGAeUhAPqVAWo9xNWiqhyRQ7Cg1H7em93vhEpGX6snJ7o3xmSCpDKx2Z8mrJo1yyxW",
  "key1": "3KzrhpYMDJD3eMQQ7pd4dfZ25F8BAhBn8YBpLH9UyUmT3Jy2upZ5YpFuQ6XuKbwxwx61fdr1gGzuAwyHdkeu1wVM",
  "key2": "529yWXiDmXZvt6x98BMNkdzKdSM2dTmZs1o5YVNNYw46dBK7BM8WDgDD5nGMFx8JkZAeaovf1ooAWexhNCkgsTUP",
  "key3": "3jJ41DXUJodKshsSteWdeZH78pvYUQNTNFFzrnUxwnKyNswwCWLJWorjWoATgBtJWWyfeZz1JHqHB1ZGNP7hby4q",
  "key4": "deq1ASzE2a74eBoLuWoMigNPHXtuXeKoCBvkmqj9tF8XhH4EJ3xvUGnTLk5pBBQx2WnSBHqVC2ZFS3S7qbes7KW",
  "key5": "4AjwxMTNzPDtXr9Z2UHCSnLSqJgKNM6JRNezr5cLnxhj6FH63VtuaQ6kQ19JRNSXR8ELbgTmduMf8dLABjRTHE6x",
  "key6": "gvAtPCuvx627yzjbecCV7n1vakii7DPgNqf28sDKSyH2PGLCgRA78vgwbGKMhqX8F6oXpka2cBxTmBmE1sJYpHW",
  "key7": "XxwU7equSUKdDhN2yburdkwD8gp257DMnTDTjRRTNTSVhDgUPUn7ZWwFGo2cGshfWJZbXutRRagMgrhge1R7mkV",
  "key8": "2zsz38DNq3CGhyhdBjdeqQBu27i32aivgicTHSUmPStkzGq64SFa9ryHiR1YvpeZx8n2xaHC5i77qUEKs82rxZZD",
  "key9": "3dwsLEjyewnJM1BbhCW3qQ4PtQG9mEGf7NJ1Tfoadefqp2uMJZbeDq42CG6RqaHXX99RKqyFgYKkaJfi8GkePNcC",
  "key10": "3uodVAprx6B5RVK8Nh7nsZGNkbdjJRNqZfnjg1uKvhUWmmDG6qoXjSoZcVGse5VMeViKVQZmczmMhGYrgkY5vf3B",
  "key11": "FpDSX6JYvMB1tkVJn4XqiFG6XohRsLuqw8KPTtEVVEbKFqzsLZ9UuqPMYXzwKY3MHtX84qwBR3kfhrbebP5DXqA",
  "key12": "4nKLSfaeSHGZ4Q9Jjv4qDpTP98uK3T3ZMrV1PkeNSeTcCTiZBA81JLCDT8vJRNfHxnbaYb5nkn7ppzLSUQv2A1Dh",
  "key13": "5uVgVGXo2xYzoh6cjqHT9qhE6rSbzQHxYpybLLfveKh3Was1j3ZYSC7SCoamnxJaD2TnFKEM8wJMrhtVRKTAyDDx",
  "key14": "2Hf5sHEhLF5fGY6K7yyvD8Bt9MqFs8uSykumTWUatMFuj9d4KShcEVpnr39t7LKGmCbN5fT2Lc8ex55jBgoDNXLW",
  "key15": "64ujS7VU4M8qKrP9k8MfJYX8ndawnRdobNo8UybHPfrpkoBjy53zAuTwUwmckQ5e1MLcBZmXHai3Zvfe2DYpUmPQ",
  "key16": "3Wgfjr7KjD6WueC28xneC6mXAa4oWY7bLzkVX8NaM3nQSfpxFNhsh66X4cBh2SQ8bFVAxwYQG5L1hQiHr5VRe5kK",
  "key17": "2FYibsXv3cTdbWjZg4msNj9ANC8NLUhms5xnkjsrpHtkonyDn6c8chDTpo1iJDj1yoU1H7xogGZNAR8uuE1gZqoR",
  "key18": "rn7xFN6NakbBqyGWeodCwtKiTHGBfz2wMoRgbs1GcF2vqC5EcrkCk3Q44W89HHuivNoLbwgu8ycqHJabcrsS5KZ",
  "key19": "25oNgx9ubRVW8YZgcZdTjgsC9SrAMe8RKBN6NF6QquA7qBV3auQZFNqRrCYpvXCo3ZkFKtNg55arwcS3aER6yx5L",
  "key20": "2Jo7W5AT6iJCKMQdVR64uhZQyhwxR7EKZ8MWL7ZxS34uLwGya95ioau55uoR5MaSFoHNgGXErkke9g7VvdtYks4g",
  "key21": "4RtdGyFVZBXNJ8NLhD7TvYmk4Koj1g1XgRtsv6ARx5jpCDFkYRodEqiZkiqnUSXLuNq3cpAAFQs7jfuSdwCajn4V",
  "key22": "5xPv6zmo7YzLtBdcULo1UtEonHdESx61GWDtawkap4iwVU3gTjFqEhhCSffeMMyzVzFjXZwqjJsTSkyuUVScpKjq",
  "key23": "BC4kgVN5QBpdiwPC99bgF216dqBnXJCUmhBiYSiaPPgBrfFA7KditkwKHqJSxoL22mf2zeBSr1RNT9y57rzKvi5",
  "key24": "GYX9LcvcLDz3RUKCkHxssHb64BbGFsoTfngbrDTJ5mX3dbdTBEcmAMAmLzWDzSEsxfk3zkaS8DwQL3p1u7N8hsH",
  "key25": "2L3zQXuNJtdx3t9GGj88B9tPkecBFcsgsemcdqubHLFZABGiXNnhzi8Np8wUhFRAwyHQXhp8R5uD97z78TxAn5rh",
  "key26": "TD8q3N1CJ4x39ykMXRiNiQXK9fEo7dXJCT9j5JKwGY79HVB8J7Qo8ziTRDLXF2EM7XB1Yck63JCkXoeVKHc7L4h",
  "key27": "2wb1PfM4z8ShBY1QhGqDn1ApK3JoM6NYZdQcHJokbk6Y29xTaAN6XWH2LF9xeCALpsemSAYE67XJ6w6XKbLtPMdk",
  "key28": "5uECi8gegmoyccY9SXetjib8krVc2g6kSna3ocrwHh1bbytwatvE7ntZXgrpc71Qz1mavCpkpQmff3LUprN8kzs7",
  "key29": "4PL2vL7Q6WA4ho5E9YCZMsVYLuVzvrujyhyy1mCBuKhbDKnB1K385vcd9zA5iFJfiwr5859k5476KoB89pVLKc6W",
  "key30": "4yYDnJjbd4HZYtSNshD5S2JNQZ3uikowoYc6u2puCbfZ5HMqY3nShngjf2d9MrZPdJs1AcaLiKrtj5gTbmNZ8HeF",
  "key31": "63sc68HUZSfBBgxNR4Sx3qXsRnxEH16asmyikjbHGRxw2Z6S6VvLdzYjQC7uVTDETad1D6aRLgWJGWEWMb43TeCA",
  "key32": "E9EGBueBMn8UodYXQPEy2zmFnAJmxE73ahPjVbA2QjB1pzEc1Rdw3qyhQxtnuDGSuFX9sD6nBqtEC9QWS9BPNmx",
  "key33": "3TUMK4WH7v56c4PXzsjyvjVsiG4T2H2nT9NvcJYhcg8dPWVh3tJh3H2d71huioc6inoaSVZVVDKjwuDJZo1HjEpS",
  "key34": "3WSvNAGMLQUzEgnkYw2TpFXwB5efaErZPamsstExs4jA9fVMEfgYd1jqerm6Z4p84HJveycMcaZ7ENftCCH8jYiM",
  "key35": "4ptGTDCZJHQYf5SDkafQbb7jxLrxJc9fuGEh1ZwqreNe12hEQZ9i1XFoK4Z7pCbKbtRPngn1FQAQqjegb7kQgKeD",
  "key36": "4auu4giphT7rtrGHBF43eQQMhyNoAow9RsxbSw62A6YLjjejBLNGHbR3EDvEDbG9sVPzZjX9dBcrYJsULUyfKbfX",
  "key37": "2DhzLK3n73vZkKBFUSDKjsbCi1xwzHwLLf8iwmcnu8kQSey8LYvafGaMcoy5i6wvqBYiVtqLXBFXg86NMofYJYz7"
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
