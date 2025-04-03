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
    "3WFjV87fyUTVk5tSgHktVbHEy7nafXtcKnuEAHu39oAobyLKLPvDT9TiECuytMvc7hVhcTchXG6gJLkDdATyLRUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8fGdAxCyxpEy7DfPtL446RZwwaWrbXkMptSXMAhYJKMiomDMWhBXLyiUoKqpGZBN831mhHjcKgirjPvjmVtKhZ",
  "key1": "2FdXv3Mujjg9i5U1vFbnbKRjddAxawfudBjAmNdynKimhHLYwF4RGDdETLgcignEUowByND4hY8WVdU4MzQBP5BR",
  "key2": "ncoaMAPEM7s54c2G7jTe6vKsFXn1vKuLJfPrTPULHU7vZNgCfecaYr3p5WHuoLA56r5199ZtW59M6XZ1CniSiHr",
  "key3": "5dydvDh9V1qossUaNhQHSpEQayDczZhjCG1fnrxkRs9A7FHcYxtbdPnXsL6Bq5bVVg5ZtGMLHGU18T9ifC5MVYnH",
  "key4": "4kCpBhcUCMjFEg39NuNVREXxBwp1fWNfjXLBWQfrhjLZNMoMHNYe7j76gn5Jk3P4BJfC4nyHcZDAh3XnhSwgeqVx",
  "key5": "4994setDv31Gg8m3cDM9UzD46bhCzZZnrkHrdSGKnXpzua6ExaBKkWpwNzN4XjbRWabkqp9KAr4kp6EAHtKzjA83",
  "key6": "21p8d2LeamqRKcbzmaFvcnHbdWnp6ASgbicxr7DsKZUrJnxxXvfNm6VPmcPYjGuSwUj4NaPUXGrymKQyNjJs4DwB",
  "key7": "LJo3NMA7PY9ZzzM1cnD5kSPTSvWH6q2j2EENoW82u8PhZcd3LvRfWVWjTEbTvAW5bELNQCU4vi65DiJ9bygj4n9",
  "key8": "4xn1W7CCU3XstUPDcWHfx3rr4oooucLBS38JBQJTZHkP68HumcHx3BCbVCRkcFwcBbdHrvqjEhKzVopXSeb4YfQj",
  "key9": "5zJj9WKYP8U3JG2ZvzXMVHxoWesT12yp9W8zy3czmRRt9xdGNgxFTsjAkD3pqiaedrw4NhGdjTwmqnHXcRjg7Xqw",
  "key10": "5j73QgtXFqTFjummv5iTKwSwgPEbX7mtGNJxtSVUnDP7og9SRMmhGHpc25dgPdJih4brWxcCCw2MHr7wTELyzx3a",
  "key11": "nm5rCyuf3kqtcEa34ghiqBJ7uqiWSVBvt294B49e7KMteDLs49R89Mu344PbenwUdogxwqtnKoirH37GGZo8jmL",
  "key12": "5kGZ3qbP2B4QSo6aw8KzsAZ5BECKtYUJjfRJhqQsS9ZDCVrz3u12jUKLtnuUzp2dSQnkjdABDqpgYV3qwTZ2eiba",
  "key13": "2fsmM3AcHnx2J8UPZZKscixdKHF3bG3RyQUQQAhZwVS9PjACXwEF1rHTgVqJAXPRAF21Mz1vSe6Fvzq1zggzjAHT",
  "key14": "35SZB7CLfRNFenwYAZ6tABq5FG9utBTVbjd3qhudHfFnjTYdcFT89ZPCptD7ds5KZsgHt5HqjVbDmK6LytFy8TKc",
  "key15": "tebqzxWCttzU8oUUouBrHhd7yvWQDFS9Wxu59jL9LsTkZsYVCe3AFURTn1hAPeTQWTXW6pzqnLtCCqsnY7US59w",
  "key16": "BmHydLSmhhJDFJacibQJxWVDF4MHPuC78zUeVpQUHMFAoAEpKeR4sQ2kV6dvZiCis13ehk6i7ULspVf8RAqzNUx",
  "key17": "3E8bi4WzUBjcFJx3c11mxHqYbE3cCbGyXMzucWRuJ6KEh1tB5rmHUWYfCictoEDMkgxuKB5erdE1g13cSMfD6BkM",
  "key18": "2uHpTC8L3N6SJ5cLCbasprzLNrztALkw53E4f2vpx4g8hy5RZqeoYVaaLYAY6qSipvTJdRJttDxus3SPJF5xri3E",
  "key19": "5ABy3ed1fTbGUW5ESgRFfTudm5hGARKMV3fSRy9Xb6x5C1cQsWwAz26Rw9fhbG9hBgCL1HFi2xEEXpGcquehztbB",
  "key20": "4oaDKDbwxSWXu5baDXKrKREqBUELJRoFw4Nj89GVy4LRgrePNMCyH6W31neZtFjFNHN41ysHikgzRWgBinwGgspq",
  "key21": "3HCNfaShkvtqVuPsifJ1h23yuZzWyxcarLgd4UKKMAvnTb6yirsonUB1CxF8zGzk297Tzvg2MpfhsSC8NSQ5EUbZ",
  "key22": "52vZrTwjLAeGYbqmo3dBGjW7hM9xeEF1ib9TQc9Jv9C8iN39XbX18DAdzXxE1Jbn4BzYC9SdRpUHu9YooTZjw3fR",
  "key23": "u7EiFpXgPYYbuGLvoWn1H2DKYdkj7RqaUcanFUm3xiwnL6iymRrvBaTofTHta3Dfof4v2gBi9ksEz8SpBiwPjtG",
  "key24": "4QKL4LFMQ3j3Cudz2krx4HhLStyy9pME2FKUD9Btr1uh3iesD1aKhuo55fkyBqgbcgZMzdredzjU4jpBb1ykL7BU",
  "key25": "46SpCQnYeqpExBqVeUmjYZPtgJ1zx5gaz39eL9SjKhWYWaE8ZXqfxSTH8rkCvTQyDUHdS5Eh3HMVUifZ9LdWUdWP",
  "key26": "iVxv7VbFnX4Muvb2QJzgcEqipC2Wko5rdt41r8BUvVBfH7V2K1uE79LNnZX6uG5herhTXBSdiMb4HTLSFxMurmM",
  "key27": "4fvsuZiy9GbBFYr6vKLSKiiQzF5JwyTGZ8hPsphrZf5Mt5XWWjrFpTv6WFSBv2CtZR5ESHk66UD4Pr6ZFW2XuNbY",
  "key28": "4BuB6JwuEcQv8KbxitwFKBrQfdj396h5NzEM1qt8bgxoiH2EiMkWP49qYQfMHc5bBKUu9Da6mEiW6JjA91eCMm2c",
  "key29": "62tYRAqrsx7ojWsA2AYHtXTe4g8ybVvxaWvRc5DzpDf5V1CETrhddk8nXN8Gyks6TiVoJNa3y4YK12waShEu4ghc",
  "key30": "3U7odov7di21KHmZFAHeMT7kvGoSEbkTi4xAWLBvgm8TkU46mosgyePm4HfVtnbs5d91HTmTyKSyH2EKC2JJU1jt",
  "key31": "3F9FcuHrccvRqusa8zbvLTBWYHXVQQQYvconv5GCAc8voirNJymSgJpYnWEkzHQS6g1TY1WWUM2HeiFniqAGQ9T4",
  "key32": "2kPAJT6vPTpkWhQGKdR1TtMpcpBC7r1HA5mmz67NNGbYCLUHSjQFryXw4cRjtFreP35zFVtpCyQXiN9KTkV6tf6K",
  "key33": "W8bLbp1VEpuJB1GEaQmwzkLb3iUjPqcQ1dJaMTdYVuzZQCjDt1wP6DfUTdxbxfWk3MBheXfXHnmiZzDjZEkmGBY",
  "key34": "3bBFSfTxtt6sRoYLXmBcPboYLBFJ69XP9mngYb9CvoNuTMj36Raj3jph7nsJB73j1gRyDnAPXYWw8eUtUWJuXVz8",
  "key35": "4E3UuQBGKzRsu59raPNVX7hpBd11Abwt7JtjUXpr4b5GXY3h5rmf9MHJdUfuzn3mbbmnaEyVZVZ55LwxPseZ66uM",
  "key36": "2e5zTdAhV5tiKBrcH2D2vRd7j9gkAjC7ciUtD52RRYtKYR2UbFDoN3vcZticahQheHP5grQzmC76q2VbLUAkVUHi",
  "key37": "61PB8SNma4udskcgSQ5WUbKDFbk2kYjvVcRUov64qx4R2qtemqcEWpMv8Gnekkz6YyVSURrtW3ZkuTUGb2QSFDP5"
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
