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
    "bZd78YdVFoyd9htGxx1X72WD82dPifD4PR85UWtPaF6m1TTkXL87FjZ5KGTUvUm3QM3Ea3ye1m8UN9Sid4iqvu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RDbxZh6vQkQM72tKFTSMKu9xhdwkPDehVZndunPr2N8BmUXUvWEFwgSeeXnwcAr2tnbUN8zJsw685cPdkT6tfw7",
  "key1": "oEXyKuZih4BjquDadgimwDYXQhdFVJgceASjQUYaiusEeSE6HTsNgJ7ryV9n7AZS1Pd52F9SAsPnKiEPjwnjyxb",
  "key2": "2CW1rJZEcfseAgMjCBHXtXPMsHcidFoEyEHGxWGV7T4u2mgzxJdHfY66tJPSyAp3qSah1PQhi6wGhafwyEfFK4tp",
  "key3": "5mbYkjfSrB7tjszR1wDQfXE9KHBzXEpJaxmesm29XdkNKbR45iqJicpMB5x15zazKJ9byzxu5cox3EWU43Eu32t1",
  "key4": "3VVGk8T5ANFbjkJYLoEyyjHFwPSpJydSzaqjtqpHZLkKFRGi4s9Qxf9yayxQ8jKoXteF8gvqFdrYTZLRQoCADQih",
  "key5": "WucpxWSVUQ6cTVopYhvBURiXiDMiubZD3f3jGFmjS2hai6FXo251pRqkWRsVwWj3Tg89Lqt1MyEpmz5aVwsiD6z",
  "key6": "4q9BsQUxWFZRk31XKbL8iYbVDfvgnxZVa6U5XJ3KVLzEiA4kb9q462rfph1pJYmKYiHbCn7LjssTZrF3dWsASYUE",
  "key7": "2rFWYNcxqUQ4bFNEj1Du2ztspNFYU9QaiSQLN62LpfQ91tW8rMvWBG5Z7J4eUwYuhMsFnckUQcJFEBX2SoKRswnR",
  "key8": "5scstopApBVAQU3nzs6xuGZQ74WZwDbeZYTJVJFxDfKJBUakLDj5ktiDRbftFyLQgsEm9NKQ3eZtJu2Lv7PGsFbz",
  "key9": "2RfEccLxJwrSa9QxpGwRFhbANY4JQrT6HWTnfvdDpLwCQJm5AMuwyyEL6UhgtUYMxTYsALE7DryqeC6N1SEcFLGK",
  "key10": "4QevLA775v5ppkSPwSbqXKsPm7TSjBfrLm23ttUbam3J4M11yUcpFjuoUVXx5RdJVnsuZPXC87w1uZyL7bdsARMm",
  "key11": "2PezWEkqgLowfYgpCqLaQM1xd4F1yMLdyVp4jKFajbb5EuQbXw3Ff9Sp5r4GRvXggQD28zc2vvp26s1feE5s4zgH",
  "key12": "7PHD9KtHyCrF1GrzgWwTRp1Jqtdn51YjdUttYzEkEC81mQVcwjTeFpS4WpU5rFN1A1eQxEMcbcLBLQbXsYpqWDd",
  "key13": "ziHvWGAMLmyH4G1MQtTUGpfNpRngmK4GhjaRVantPUSdeVFH8sEJ8cY1eD8sfDXzUqDeqsbzNb5gD4fj1MjZA2Q",
  "key14": "4FTHjvPLMLXz9pJ1EuK8qKhUnRfyhuQ3g75yGXcwTVG5LP3dvtqKsraLe3Fkwa169HVCjzJKk2TmtecLYTQNjTvU",
  "key15": "3M3EkdHrZxg8qgM8NhNdWqGEJX35Ks1eoNKTr87kaPDtSNkSRMq7o51Jci98j9YDVHSNE7XfBiCkZWzHYqtcDXYf",
  "key16": "4jPyG5F3cnVTMwJuCVSds6wbMmAgCQe6Bpu8kvnTrk9VkvqeYAQLcZ6eCVW1F9D9emy6mMb3gg6j2DU9uL3AFznX",
  "key17": "2CmgYGD48wEasckwcy4RBZJ72qf7p6RyDTFNedFBY9X5AtKmtocuknavQjyJoMZdzPfEpwv3Y3WseYGd9dnFTqDc",
  "key18": "4ayspyTeAMaJVMAa4GnW7iVWJRNJ9wCCyjd1b8fvKf3i6yHeCgcLvDnQoM52YGriTHtupKvSAt8cBjkbTgT8Z2Bk",
  "key19": "3piRijS4NdbVgJpq5Ys8rZ7EP44KBbs1XewRjEYjGD9M1dhdMZTZWFP6Zgh5EGSt6paMby8VRhG62M5zyea1ANo",
  "key20": "4ZEkWBFUdxCWgqnVLQmAr5n1SuPoooF862N7gViqJVg81dVQTr7SmTVBzJAbW7n3A7xoPm3Aq3kYy11obTRL6B9Q",
  "key21": "2q5JPHkHbHv3YAvQhPFGk63gNk47P8gPvwp5XxyQ189ejguKN2jQkyxEkB1HxX6JH5ret2FMoBssveZbmSLL3zi8",
  "key22": "5Kk5FJrPDmu6vfZHA2Kvg7xS9pv6WsDmxA289JStNWKshr92ygZsFJLtSd3tSNSDSa2hVYFfVYwRwZHxKrMoB22t",
  "key23": "5A2cDxBGhES6hGUgtkwkHpmuda78cZzqFhPTFJHuwMbWncP9vcPtWYRyAeNCxGTmJ4aiBw4DBSUHASNPgr41KyvP",
  "key24": "3HKdJRJFa84YCefi3rq9Ln6TNyExCYks2BXNLZAUFGh1rwuWeGUnMFRMmB65W7VLRQcdpNJ6vYY6vStq3EETHEm2",
  "key25": "37ZF7aWPqTJGG4fAWj6ZSFbKBXdVciGhfU2NQsdcSuwppADqc6rqkWr5m2b9sjHyqzjXiy2cNa6wDPb6AcRmPGRp",
  "key26": "zQbSpFaxp2Akph8QWTpGScPSb3i1wwobk2ApexuWJkJaK7rU4WKeRpPPpFHeFQRCYp5SSUy4yUYGyugmtd2opFW",
  "key27": "28PsDz7dHKNsZgLUnXndbQGPaYgS7WCfautMkaGR3k1Gw2WMzakxY7SKy3Z46ZqAnXNLsN7bAzWBTcG8fnCguLqa",
  "key28": "645Yx387HF4NLPrZz83iCxib2iEVynUad13qFStZ5U16s8U4QXHSbHLGA3oSqxWQZ7V4gghVLQqvgjD9yCJvQAt1",
  "key29": "VVBf7H6sJGD5nNqKLMz9TYANEpcjctqu3Ax1NT2yML8m7tGC593wQQWm3N3KSHAVxx5CkoawLZHApLFn3YBCfJm",
  "key30": "4kxNh92wsUt16vUU5mfjaQsLqEa3TfiyYnwaYzxBXscGHUTkrVJsXUZstkoXNaoSxeXmvWN29CegX1CyTo9tgHcx",
  "key31": "gcDqC5h6ukBKpCRhdx81FmApb7Q9tLgdMoJ6Rstkqe2muNaAjM17emsMZhqMqTW8vkg5ud34eCt5REwsbcDyrjP",
  "key32": "2bFvcmTT5PnpSGEcEXGQ1kfEfupkgAst4SbrQb2NcFzT3KQ1xWxTouzhYKRtAboFcQMwCXeD1acQMsnTUPXB6UZT",
  "key33": "5BkjLwQMXrdWbZNQWHHsZSPpjyBgkV67tX1ZvcJ9RL5yEb6LK9K2vNkpnBdkT6e6Qutuj8F7sA8kDMciu95SC6vY",
  "key34": "WmLWQ4uA2HqoNEJmQW9B4grnGFztWurvWdA9xmDJHYJ7ozwjiMS1JRg6Dw8gSM44NR8Bp4vyz6o9upwaB3XmsmR",
  "key35": "42gisu3rLrrCyacM3eoYANN9SxbuvG9kqKkgHZ4KtZiZDgT6sv9NZpc7MuSVydtZF2tsxFN5GRULsDvncjwdwK3r",
  "key36": "3DEjKroJd4YEw73ELeBve4uYb7BfwCoxLjkNP1iDZBuWw6SdSL7N9WyX1yTxkmQaqA868LpNnbrLruDQUHpm5DTK",
  "key37": "2HZfh24bAvFPJijvPc5g8avF1pwoyGXofAF9pH5P4BA2FcEByVF8feLaEpiw2sbTtBM7qcQFhrvoVpNqd18jK76z",
  "key38": "3ce8rtr5LQij53va6KYkbBF9Lafm9kZf7Nxmq6wcJ7Bd51prpD5gQGHxyGL9re75PsZa8buKh8dqaHCDrC6pUfkh",
  "key39": "3SySN7whgJUJUCM65q9njXMwq7V2Y8VmYACkXzM5LJTn9bZmLS1gMv9tXD5iR2xRWpiemCuMeUKsXqjcdSAjF4XX",
  "key40": "2ZoiQhDUeJPog4j8mgqMzbeuwKzgKot4jkYTH1ewn4NXzceSBHWPihhM6Nqn6vPycKZcRSyLgQscyEo4HuiHb52g",
  "key41": "3Q7oYFTU2zuE85NcPB28nX5JdgCmm856zCb4rs4XFEtSgv6X2jofAfuvGFg9SiA5miBL2xEKKSKyC4Wy7KBW2PHB",
  "key42": "2HFdmByptjmYbmUX7VCbgTPNQDs9SEz9Y3cCxTeRnDs6FsSgd2sRGPcWFwqp7Uqu6zJCVrHfPnwxDkfzs7hTf5bx",
  "key43": "4QsuwWvnGehqdRp9KrzWiJ7u6cRxz5QAeius7tM1i5HtG8A8nPY2erHkDyXqGDRuoDrgjNreJZp3P7MY6vgtqie5",
  "key44": "4rKCGQoLzTPw4JaYgKz5boKLJ6qcm1ZnMkrhy8tQjAqgBRprgnKzmSvY6CcpJdb8nUHDuxSkTDGp4U1pDtRngTEm",
  "key45": "3oU3w1nCS7VY1iPCMvwuqLZgemoZRTZAGHdNkyvHz5ojKp5F9YAFrtZsaW4nc2iWkqfXybeqy6wDK3djJ7x5RQU8"
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
