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
    "52fy3s9AYGCKRYLuBjZrPkMyqMha5o3zYsWC9UGLWf3qj58aZVF5ygv4yWEkaKsZ3TfWe5gMD3oEiwe9PiTry7ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFgrv7b3nPhtWDkg6WbLmFGCt9LyXNeP2omEwUed1qKEZHNuvAUsiBb1Gea8gaz2YAZTcg9UEYRdkFSCfgdduob",
  "key1": "59j7yAAiWVDc3bhGMXCCtnACdRgwdK86CRZBmhLrZ43CovzgTcqjCYgYVkDjTgS6CL9pgS2BezAvMFDveLjsGK47",
  "key2": "fQdjNmxTWgHeGXx7wkoWN7H1y9sDZrZ2agQXnF1MaUXbFSApM1qZNCUxMy4JBoVZD6ivG2YhSYSNJcw6MXBW4DG",
  "key3": "vQHXumkFQsmJyJUf7zMeUy6jpUNzVr2bMwKGLrBrJFrtdNAfF1Q11WZ8CRoL8MNjBJ8rtv3jMTDbb6UtppEvTDs",
  "key4": "3i266aqGBJ48EL2WnNXTczcTzrVFcVvCU96RmVjBisMC1p8GHLYvqZAPoPAxxecGAynuSCVPTjzsxnNW4us8sPdx",
  "key5": "5LDje5gVARhxaP9rMH4vdS5Mc6AYTkEjJeRZJCimfin3e3xTwBZj3RrMcLMUku7Q18BTKauUobUz2qdVUX8jLmPC",
  "key6": "56b9RyHAFfTNGETRkmukwS8wL9XYb5XrEsziDSX7DWHfJtRm1FbWAqNEx1b3Mqd54Tt1NpxPuebgn2WGi6JA9PK",
  "key7": "5jYzgZxitEAZbrVyDYNGZwW12CTRVanMPQQdHFfsqQQte3sYTDwBe4V2ArwV2BrpYU3MamoNbEBssjSmvLBtmruv",
  "key8": "4yk62Bp8Hs1g2tvDrJpxatxXGsrMjWtDT5uFvtQrFGGM2hPqFearzCyyp3zVZuHWCvhuGrq7d6FfUhVbTnLZY5rZ",
  "key9": "4t1RzjExpB5pxRurcy2L5RrLq1cYsq8xA4X7EfLrQtHZpLUfWYxqsocVfXSgzkNoJhnCUgz68PoTiSbw4Ms4acL",
  "key10": "3xc4PLabNkgRGGwfBDq8VRmH7xNR322x1fBb64CGyTQmbtgScJBvRVeh6memDWqXQ6JDCwFPGF9vSGEBM8mkqZv6",
  "key11": "3hCJH6xZTGaVF9WGcGKC7SX6sbcFA8hnLdoinepJQHZdU2JQiTYzhpfNdA9r3PcPpvbkDR3DcjjtrixGHTPinUBD",
  "key12": "g8NsryuxJtSUeW8vipT8tmHRPLbdZjSV11VhKQ2s5gQz8e11oDaVca11tH8TCfsJXhYMbK4GBr2yr5eqj9rCoaJ",
  "key13": "VAosTQ8cVpyCS5tW6hGV5hhR1pbYet3MMBEKLAdti3z9UPsVeDCQ1GNUF6XdBBNx1WVKBCi4ZU8kA9gAQdWnK4S",
  "key14": "2CX7syqWbFmqebrNxHpJA3yucwmpY2ZYujLvQ6wHEUaENcwHcSQjsK9Xb6Ywxi9mJMCq99LFPRXKA22mFt6dBAgP",
  "key15": "2haZaWsj2kv66AvCTiZziw36zLPz4tFDAH8q2hp61VcebsX4FKqZDa5TYvggeCJkRGZJrtH4VQGYyUw7FEDCZMQq",
  "key16": "3bXr3cjNKw3GhHbtXQuXBLjMvDDwV79KpK36FySe1iAqcEwwAFETSGf8F5Nsk9m23au3Wzoaj7vzuZ6oSjXJUhnw",
  "key17": "4KtgfN9WzvMUWFmsZh5KySSsAqz4px1M8DPzMyaHtMDLQEhgJekVA2PfJow2WY1iSsQrwfTPiDMbeBUHd6Z2DCtu",
  "key18": "2fZnvGUAKpBtcz4uwb8JqWFgf9oYcDATCkyYjXUpVd8JCyxmqqKqvKrYYNT96TJWFpxEEQWMVjJwr3Kk5DHh7NWo",
  "key19": "5dUcJhaJvnKSsF1wA2VNt4QP5b6rysaWsQCcuBmFmzqGXRfx61y22BsR9Cf5ydxAdvieHEiRxqHfbs1NGdCwPJzK",
  "key20": "21e3LL4Z2GVYhekEefCAvTf52yUpbimNo8EfvAArZWX8SzEM6pvP6P51PVe16pZyThbXqRnJwz9K7RxgyvbbqTtP",
  "key21": "tmAMDpNsJCspCQxpyTraQUMLkBDzboTxMxkTkrHSxnemzvB7WMd5nP1shD1ccUXKBphFgx8BtwzCDqzg88oPdyY",
  "key22": "2c9JtYCcPA8oYtBFLsSXw3p8Wt8grYMjLSGven2a1ciTJk3KMqXBs29uqNomiUic84vy2WCCG1hGC3mGxmYf5PeX",
  "key23": "4qeP7Y1fstKcQv7mFdUDGeruUXbjsbpyz22D3adKUQnbG8qdV46qtin6V2wVoH6PgH8bdePGUkt3Z9jQnaqu2C1s",
  "key24": "617VbhkuTG2KaKmnncjth5Z5gG4RakzwRsfvrASCiHgBcdzJsXfBqeZScHkB9WKcgx5YPLUxLn3jMfhMSY5wpRdA",
  "key25": "3k9ja5r3MiNijM2rUaJ4MBXGUkFCfnc9hmA58FEund28GNvWbxiyHYyihzaP9a7qd9Ch4XpQE1ZaeHSjFQMXwTxb",
  "key26": "3SM8wzrrPLfh6hGGr6YGJurBnJXxDToUEHp8LefgJT43qnHpJnTopDPqXRFrpwv1f2htj7cLmB3EBUiK6qPxNevh",
  "key27": "QEZBWASAdMb9P695ydKQEbfWQt2kAh9SN5Wcoh6AiuTNST9G6Tjq1mQK7cMQUCcbWNaaFVN3h8PpQg9cW8sSwko",
  "key28": "2vCDy44xsEAyhobivDtCFtd1pgLZVfnXkN3MPpikwiiS9KjXjZN3e38DXUEBmF8P8btoJ54BgLpknizRZCRQPcMC",
  "key29": "5hXuBbfs3EMkuvdr1i8WmS52FbfR5Bv4nGaRFgR143cfHEkFsTyjaMmMWPDBbY96MuueDW7jdYiL18irLhWEX36W",
  "key30": "2TAYV28ttUbnj1vVqWxUWWNcZaJNAz6tuTSdnb7SQHPBtykiy9SbznNFYUFin8gZukuaSLRAPvqYqqs8ap3rzFoL",
  "key31": "36mXrqsb54iu6za4qudKKbR6rvJ1Jv7TQmjvVwshwVFtSn8DbVhetEawNkyvB6tpeKJcitFgFTa6vixN59TMipbE",
  "key32": "4Fqjaccfq8CTdchsJGDf93hxEna2eHQXJqGhZazEwqjCHDuUuYJBK8H6NwjBiQ2M31QLJQseqbSUuWtAc2HSxtTd",
  "key33": "537pmu35PxCEdNNQn6FWpSM7fF6xgAyejfNAmDm6mz2WDZuyRYjUm1jugF89R6xp4zaEGAMAT6qiBSvTFkdv3cqy",
  "key34": "288WtuLcxgrKjWPkqfxVcbhpqdWfb5T1pZ3GLrF3yiUqTRcKTTawkuSNq493EqqyhQc1iy5tsNZguNVCWqrh68Ko",
  "key35": "qCW1wKd4zZGdY57vebU5eXiCue7xhDYvtS56mNp8D113yx7JKrv6XVtZYw61Atgp1ypJA4AH7QeseTyFr9curmB",
  "key36": "5xmRYQGWKTzc6oJGqk6uc6uFiPtJtbcSv8ZMM2bceNBRnX6rDJNmkexyLkrfBJFbf2Jbvf63z9pwgLDYCvxUQNSi",
  "key37": "3iZ6dGmQKNT8MFwudwdT6pn8ww9t89cUGsZaozNAWJr2RxExrJQtLQ7vx4tTFVzKzfciuG4SULGDcWDUX44vN34D",
  "key38": "3PL2b1Bn312yvD3FWXBTQxQDsJJarUhzF4rAEELvEeTmXB8wY9UrJwqi9Z8Pn1kLJdbdrrgxRcX66DYXsfZ6Lp5D",
  "key39": "3GpBWfdQbZDcY26M1WbQCQgeRd82WN2eKZv4MUWGqz8ZmLwniN5o5F9fzd6tQ9UHebxw8VYvLuEN8WQYJDTejRgr",
  "key40": "iz9d9Svs9g4Gmj1wnaZyNMxRJUtPnyTeqaxy2UXaoWZ5dfQGQZkEtfZH2ocKDLn6axk3ZTtbUUgHAgqxUbCGshU",
  "key41": "5TgqN5yrofMKZn84cHuPbkZ9dev8Mo4WvCiiBewo41tMQ8wLn9AvJ4NaMLy6qfqme18ac2icFFPhfn11uMU8VQze",
  "key42": "4iP1YpdinnWJb4tmdiLBvUG4rw8gW9HYpXEEukLsLU83saTojqUXpKZk9a7b31ZZSSvnBJZfof9chGMWyrAYK4iR",
  "key43": "2WRq8FUXMxbMSAiBqoU6XiASaxKZSFsksEow9Tce6dYNsbcnYNr6roQ8z456gfHkuLr86gpoWiWVRCzxPwVffK8T",
  "key44": "5qXLAZoTQxpD1xPhKohP3mnghKZKLK4k3hj7f21Y3N7pVZr1yYD1NnTpaPZzqjFhmfTY473LqoLGSjcfh2FYNfBH",
  "key45": "5rBm3WrziFwCz9TZdKE8tfVTCshgKrE4b5iWmFTYVPjL8zBocVbg3YiWiSSpJgWirGGYAWzYsdVeT1iHdYwJVXLf",
  "key46": "3SD8JpocbqcUBSFyFWD4x1xWFea9ae8MVhRYZ6qK1eTYH3ize5EDn8CyYi4jbqGbEt9jaV3WSZw1YgVw7gQF494P"
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
