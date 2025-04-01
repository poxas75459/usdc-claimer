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
    "4EYYT7gV3F8LMUms1VMoqsaTMjXd5TMEkpwdhdzC6CFSHusBHDPYFAsYLyNhF68n126ymCV829K1sqbKr9nYfWMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubPH48Ni1G3t9EJ2UAZggoQCNqh2sTaycZKMcYJvigZnWnifWmRsQT2nSiwvwxKnWE5wuFuP4KuZWnLARM6Uu8J",
  "key1": "2JYrBZDCWEMpc1XhTKqtcCn96rp5PhLPYXBwJF7s8C4jBf77jt7tirXxLSw2EbJcPL9NBbDr281sXadyy6kgQ6MJ",
  "key2": "3Wk32jLzXq4SoeWQr8VDzYw8SZxVjzyCdQb18PSF1zLiL76LnPpVfPT2LwPtA9ANikCfYNEFEU72rRiKenwFRS93",
  "key3": "j8LXVKGbqXB7tPf8TpBQGTp1DU7GmJfsuqwWmbaSkptSC6DzU24hURKFS61t8KHLCJKt11En3mTHz2ZVCwEF8QK",
  "key4": "28N8HVFYxvebbKC8EsVLz6SHh2K2HeuhTaaBZbCgubUK8Y9V93pMmzURUQdbbPJd7rb4GT71Xw9ipR93Soz31tmu",
  "key5": "q9kotApsj16geycpgjk5DZ5yiALaL4uwn6woiE4esKKqQtsE7W5iFPddVHP5Dc8qE4bsNYDBe9vi6RcXLmFNdwC",
  "key6": "4tnLAxyxdNBMzVfZd4BHRBvjZAC7geJVpKq1UWQzUecqzdvQwAQoa8yo8wy6CZYDZ56L5TeXEfMh3DSniq7ovCKr",
  "key7": "7yXuC82gzrLQ9yaG9wKp7qGR9gd71W9WdcV7K4oW5bpR44jkzawLhCtepZyU1rt2WkEL7VmAiu6RPrANeSF3GkY",
  "key8": "3kYRuvpUjCPZk6atW9H88cMJavGbG8G1qo7BFxhPnFNzVQrE2WD5kXrY3gZKXsLzQCHYkdNXb9Y7jKNAHRXc1qmb",
  "key9": "5Mqicxfn6xHjwYyjkQChxBgKjKpjcnxP1gitBX7zFkkNC764aDmeRZ4XnUCagyXpzQytoJT3c2cufeBHGPvbihSJ",
  "key10": "4wVh2hTtUWfKESDWTFFu7uFngHQ8Enorr21N69HqxSchnmerMxRSM1fbDenPpGVq41qcFpYkjobf6KMybQBXChXb",
  "key11": "Gv6DjkrPgqjTe9K8U6eRNUqagAGdKLimVyEaMJ4tty6yMJ53dHHc2KmFg6kVVnXEcvNTxLY24SXx9KnZBnMRrLY",
  "key12": "3bwCX9rG8pHgozUZHM7wtDug3fsLJ6E6ccT2vQvZKEQGZGvF9KiE4rri3QG9UET4rabNNghJPGywU4M6tkbmBRv6",
  "key13": "2HDxY8mNnSm6XTo1VdxzEXV9SrKpHpXA6xLMqe8nDsoAz6TJfGiUFvJRJoZuCuWvR3uZSREF5gCuDKNvX3dHuWNH",
  "key14": "3N9B6FAXoaLeXHRCsPhY3ozxro814VCzRDoe1aZuzfbngLj3bv1CKD1MwUqqFNB8snqNbt4vHkQUi7Jhwu66yGXw",
  "key15": "2w6VnkDxPqaqtv3pAcn5vXB9cug5EmWfbHDvyt4swwGcxPseNZyR4WqAsk1fVVHfeUaW5QgU4c36oPcAYsSdSgpY",
  "key16": "3uFtTjj16hL96fxqPysMdViHS3ZzyfoUzTtu1pihD5uSN2TnDipNoao4ApAYR699rQCBqz7yQPqQe6SwswixPbij",
  "key17": "5ccfRPj5QSLSR6tBCBjxvhrRDUgEtT74LnFCbJATRas4TbQFa9q31vY3dyyPcyofChQT6K9gQHprM9Sd84RQ3qzX",
  "key18": "5bHcyZZqsRfaJHvaPYc6RRt8MPNv3YcUmE2WDd4Ax76dG8bwm31biRs6MH5G2AQAkhZ8mTKAbFVB94u9ws1yuUz9",
  "key19": "3KzCcntFS6fvHMbJDJuuh3M6Stt4dMfckJDASVjwqfM6EJJMQvLGjRe9BaFY42ieK9JYVwo6a96SfjWxf5FpkEQz",
  "key20": "2yczTVim8kHTFCgd5Htp8rWGNabJyUMR5b1kbapWjSXvTHHEgf8k5SXF6mVAM2BrnZR1TZa34dbriDDFt7X5nhFW",
  "key21": "CsHV2XWACQ1vjbcV6iz5FKZLt4R3JtBxNQsGHdPxUsCN27aNP6LxZ4GksxosWcSBiSaC3kaxvKFj2S6Fyacmy4e",
  "key22": "4F4PE3do4fc5EHb1eyNmj4PwLAP6VnMPDEH1LQcyAZjhSb9AyX8uEgTUdBKQixAQ9cvEUJmRL2NnzKxVVnY7WKqK",
  "key23": "26wPBq1rRNJqt91hEJzkkXGauc3UGFHpipBjbUHPhT5DojxyihRyyY1uWvidLAgUJnQiz4yuCj7FvpHvGPaaETAh",
  "key24": "2FsPboBT4kUvmkJJjviuSmC77LUwTm562P46tkeoL8oKCqCRwMCcfJjMZEcpdFvLAub4tksbagmrbJhrKf8u3K3",
  "key25": "5CizCL6cuwupsBepXuhDabriBo4s2YE48L47Hg9HH92wSLH9BDYgUNFNcR9sMB5uEyeXEtQRT93wyHU25mAnqCjV",
  "key26": "xGLMSPzozdG22r6BMnvGLHeKJNcDAbT6XNY6uzRFDWMH9n5KPZ6pf6CsZ4MQgYpCVmka71mf3GSFuuECoN8uLsT",
  "key27": "4ge6j7PeRnbAAb3XBcQBeqrvTohnowR5BrHxoD4aVUa3bZgBvh7xuqWqEub1Gz9Y18najRH7qdWyhsLhE1XpRsDC",
  "key28": "qJxJjAXdbZubFXFavRLvxninpYr4wkBuZfkWDHF9E6SwJPfEjBYqVG8e6i1FEwMPvnshyo5jjKfW8MbsNiPcXpi",
  "key29": "4BNadAHuiXfPGMJLkbKb1j7SjDDWD7o5cNdMcbLkTgh84kiHG9r7EXyynjfb9EZQtqh6zPaSj8u5N9YefUPBa5jf",
  "key30": "262tUa65RNjKWpWcvFY55icXJ9BwsqCy8nocuCwUQC9wV5VVvuAkPnj3u9WmtgEtP63yiQkdsPpyJn7ffqneVtKc",
  "key31": "k2uTVhrMViXQ5fRJPMpzQQ4ydHb7rkHigL8quhsRaXZovU56QEp1cvHUiBVQP7FmxYcSzcm6UxpzTkwXAn1qvwV",
  "key32": "4GbbvRCeenTPjJaEGa3o2hwEd78N9tHSKgACueXsi6VLrf6g4YHCVQdGL5uqN2Lz9PheRtYirA3Jn4MavGXuRY5g",
  "key33": "63SB3GEM7sAStnaDrQov6FbYmfi9Gsty2CZRrKehTk4sELz6gnCFx4qQMuWm71EgwAnEVyV9kmFR7KEjq7DgwWdx",
  "key34": "2fESBazNkraDY82mxrdpLZVsf3MfhPFy8yS3dHjfrAcmD9QLpLGxUMyzFVYMH6JDmwwU2z92wQHayyzmG1aXSoma",
  "key35": "LWn8ShPYSuapDAgUXXxZUPkE86uU12vmjXxpkbyVtnwWQxEZa8joHRAqoQQPtkB8Ljm2upnSGHPgepja6ruxMis",
  "key36": "5x4yyx4puXgzDfJDhkeAeaSY31y8yCsW2PUZKBwAcDLKWudSEnpjmqeBMiBi2s6xMDPhbYYPqtqWPkQcT23LYw9K",
  "key37": "2YhSpzVFiARz4uXbiimWnQTNEoAasV2EVc6b5oCKrQL73FwGx14iGyrQeSx1N87ydzUS1WL9TyEa6Y2nGp3aCcR2",
  "key38": "V7oUPpt7nZKQWKvnXPE6LiBkvu486ryM7nPbXRXnC8WVKjcY4zUQgiztCPaCkMXHnjZzHDjZ7FnnxY2HNcNdcaw",
  "key39": "64QZRZdRtivR9xG9nVP5emFyn35HY9QdqXuatGpzKp1pdazMzY3cRW3LUncujvVtX24EjAgc5bAVrb5YEP98WvpW",
  "key40": "23WfPpR1Ur3usLzaJPCC1MTX6HKQKAwh5369ubqiqWBJ6LY6kDCwr9WAGPyF3QtB3yHScbhU7uYiMqzeaH2ewvYh",
  "key41": "41v3rH6q2JqWFM1k17e797Qsntc8vGXPuYChDPXz3Auasp2JDPmqqgQtdj1oM5tjPyMHM34WdY8yVFGQaPKAkX89"
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
