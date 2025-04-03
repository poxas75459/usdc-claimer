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
    "phHLWtiSFsBL5RbfmLJiWE1impumFNyGXqpRPDXKSasAk4QVBX43R3JdkL1dyS8UFUQxz8Ri6bUMTefDsWaDEWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Db4rTByQLCQ38EMmEa7tV4hR76isK5E3TotVdWv27AXqrZKT7ZCkwFLUWKCw9sGM4mhVfzB9U8f1y5TKDJBPAYL",
  "key1": "2tVBDnvZmwmyh7gU41DuPiXcG4M3kxHQJaNmPStVKJDsAEz15H5sw94gLYuasPutgE3HrBoRL4jZDFTLu1DzekK1",
  "key2": "4wJXG43nHvtKLBhNgSF169ZZmgehUxH4CyLBzimbfhkiKnnZoQddud3DEWcqk6X9bRroCnTQczBQ9GPWtpUoiSad",
  "key3": "4LcrJNjdFD6coAM6LjPdE1d6jsmzGQvgffo5NTZL4rsPpBfYSQh2pbvEW4WuhiBvp31iRffPkKQLDXBaigtAzAK6",
  "key4": "3tu7LCKFsXVV58rwmLZLfTxPzrLoCR5w2EQEvaAkznsF4MAHeoCCrRzaCrMk7idkkD52xzEzKKDKmU79vwwaWqic",
  "key5": "3vAxSTaxVcpMjgYhRgUbjrx1v4E9BB9BcMmjXcBt2DfzRM4SVb88QKUKkAJYxNg2GzMQJH6tSruxuaciKxfD9xJ2",
  "key6": "4DzvDe5EGCicso7xPw126az67F2PaPZVZNwNxdkjbwmL1NTR1TRNe14vbfJnGunUdH2sKCQvG2YJ8BEHD7V9cHqv",
  "key7": "2J713RPJ1Pr2DfZyNiufrLPJWmWPKQM8SfMbysUjtX4mg1GUUAnomzRNMte1AJd1H2Set6C8rQbHK2oPQMLhibeL",
  "key8": "2gJ53HaJ5fFw4GmZPqLncJUmA8gHftpYZEUhGQAXGe41WhFY4K9dnhfd7KJwnHwvg6FAWdboKJf8DFcQEwLawJ5b",
  "key9": "niZDRG4wiBwcTWX3vEt5CBHs3ZvbZkUVVk26zjCP5RmZA5ehYpZVRg9qssbcxXqRcvg1t9NqJjhu6oJTSRbpyxX",
  "key10": "2W9eix4NKr514dKQfswiFwW2Sk8N6QcVBWo9phQtSogBpSABGVFbsMmDowRy1Wo3oaSoquTCrvFhzQ5oTMeosVYq",
  "key11": "49YdFdyJcGXSMAy8mZ4ZMAZfuyPgFwcDkjjqaq5VdUhpYVwbfr9A7LyruLhdwmrtUSs4uJNctoCAnji4gQevqNNo",
  "key12": "DrA1LHCygokCY1osu5yhV1vEPpBDesAnipwTUmK4yja8QqoxPMD8NWBESVKkBDSPasBaDe9nbmcBi4UKYrKg8Cd",
  "key13": "5gWnE2HqqGCTue1YqNoNzqMaYmW2G2XBJQ3Cm5ApPuQqiUkE97YcT9JJkhtdgE72mCAxsvFbBYs5A9ga7KkPGNrW",
  "key14": "4si3gZZeZSf4whDes48HXwpV2TUVocWhv8b3TJrQasu1fokGvZ2qDBvmznmgpycXomuHBKd8SH9JYX7ugsEJY9H9",
  "key15": "5Nw6PZrdmfg2sVJxz16UCfZs4kBBNRBbtokbyow4xwQLQ1DjThnyR18i4ex7dbWooNbxkQVN5qpFwHx77wkdLsj6",
  "key16": "67UT1ZvokPBHNQRMedrw7BZ3YnWusYoqPMmezormjNKWVrXavALRC7rByejkQuHAp3JoYuvNfeRN7GFNQ9TuiH9r",
  "key17": "3RBxw5JxdkmP2iHm39QxPpdW6azRY3tVGUBeVP41HRAnZ8UbbhhnChBbDtfhm6uiTkR1aaAEYVwqVe3RZckpcetc",
  "key18": "5c5fR5eC5kPwAnjZAiCUsvmvLX5kuMsDvBpjoVF3j7KZqVnEHvcW7sPAuefHvPc4TuSJbHNernJv8yDot8WKY4mn",
  "key19": "ggoBynEpLt5MAgoAe7Rm5wsAsESy8f9CDXKM52gPj3yS9opicPiHdNNi1TsjevKqRYMXXujv29xBACWDxsz8m6D",
  "key20": "5tuGQgcE9K3W4wBMLearoGuhFj7dtQe2cDKgsQzjKZpXaDWxmXrpuS3JLik7g6BJgegG4JKdQKr98GSo46Ph2zkk",
  "key21": "4YDopcxmvdkgraZNzm2n8D4D6y4c6bmJigVcor1fecb7ravfRRSCBbpyUmY6uiD12DYfD9ZYFah64b19YqNKb9pT",
  "key22": "3t7vBNaC1DXmKp7U77hdLv7pcgdauTFwit9Lr2wBAs47B7p7dKV87q9FAYD46E1Hba7EqzQkzF8ppzPxDrCuQwSf",
  "key23": "5o1j5FNBJxTP9jm8mJuQfcg2PLuHGaszu76odVMHZZqG7FL3Hedd361YaeNjwzUm7zLgjK118FN7BddwJwuM8ynS",
  "key24": "74nem3rv1FP47gGjG84sbUym7LYXFkWc3LefRY8k5agEEyBQeqbFRPGfnyEHA7u41gBBhfQ8rdJRv4co5acRMUK",
  "key25": "2rgGBiodFdoWPQkpk7BSdQCuyY9rKDYVJthYtdAyEzy1vE2LbstYrgh4zaomA16mMnzmQW1ddkiLLfnKeA32YSFF",
  "key26": "4msDT8EjsZayugbSJ4EGDkAynj9TtXPgScPEAGPYUK9D3yBfikoczC3TSnjo8K49ZLwue74ubf74KfCSQnSeCGT",
  "key27": "5XqTwpA2dFj9UUKcD3S1E3j4WowtzWq8fRngJMtGwb7yhJHuZZ1X1PobhUbA53YU5Tghe6BTJd6WSsA1MA2PGPB3",
  "key28": "4K5UJEqzSDquEJwgxfrscPidmLBREZH6wpZPGvs8eTPsvMAR1h6NBtwQb2H25ZFEN8gBogycw79fvJdPUkrMPmWq",
  "key29": "5Zs3QrXQuFyMU727MD1TUfH6fQYZKU1aYMP5Be55t7jgxc8cN6cB6ZWUHxJrYRQLQSxw2H1oWYhTp5po8X63acGC",
  "key30": "2GfRMKExjTQM24e77f8Sinc3wjPR68Zhzuc5PcV8L6KfBM5d1czrz5XE5PJ5HpA75VJN9rhoRdukYVjXiTLVRmrb",
  "key31": "3aA2RbeyW8jBgBedwPsKgoZgMDbUKs9KQudsiufuJxeJMhrLqv2ckHssTSefKCy54dmSta28rxHTdT4SKCEJmuwt",
  "key32": "5sDuW2XwMRsvufeEkNBYWEMShXXCETXZzqDNj2CNXvR8CyP3FSqPAZ6Mhq43J2p3nSKw5fW6Ju3isUQmFXmTSVak",
  "key33": "Q4Nx3WAmA3fKpU24fvAJS5Tuc5kngTtnH56Q1o3f1HB8p3dQ32EnddpqfkbdaMS5cY1dnCWA22ycVhrbicNQJqp"
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
