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
    "5YMUcsMvQR11YaegYYT8etenDaQeBKHNc5Bc5YSFQbMosxi369zXbb9Ct8BcxjtR8fYG7uvTQKeKNAejK7JT46mD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzetrS7ULuRYakM7Ssv9mY5WGAiwuLbLtLA17BmzHeG1r1JoJ3EYRuUxJ4DDHgXLtmmb7Qh7UYSut9j5jnrRvC8",
  "key1": "4wCHSKX1eiiV5FiiBWe4cBRGaisMMNkkLE5kAXFxzKjLpzrdVQazyC8hfGqzL5kJSxc1eWVaoSpTqXZtTs2UbW2n",
  "key2": "5NFYVzdMHb99ePoPYKnYyvAL84cX48ov94ndThe7wn43kAeDmuRaXhtKscKiSigdmmCt1DwQCjZnGkrtY7wK6qC6",
  "key3": "3xNhM9djTb8P6wN2PJdsCNuVoctcZMEM8MoH9PQbMeWc3xxfcTZhL5ibk6p63ffkLogwFtQgQSmVjPcZZSVgdzCB",
  "key4": "5sU1AxmvYZ4giYbfKDHhtY7SBJMAt5isBMgc3wJHbgKbR3WryHrLZDpGwV3dYcvQ4gUWQrbAizY6GZg7ffdtHLec",
  "key5": "4hzbW2X7PBkLSiadffs5LVFG8e8634reAuQihHYoS8v577TYm8RD5dZ1K9DdPF2wqPqNdySLephKuRHGtLbWxVpk",
  "key6": "34UnKaYMRAmkFrNnaQBnWngdMa518JG68uKxjR4X6nroe3dZkFguYbHq97xDvJetiTciR6N1KDpuvr9CrcPKmk7v",
  "key7": "aSLgyYa1uAybScR9PNuvr7ftDaNPWfCjdvrAyUscbcWjSHcsi5kN9yTcFpFG9abkqcRPtL6PSENGZ75WQ8pANEp",
  "key8": "2sPhFnnL9bUgbi5mQ9b3T5VAo45c98WvxQFqpc15B2TkNPs7r8rt5cwEsAQSZUdTvHy9q3gTTsgSHo9kpxw5mSg1",
  "key9": "3z4EQsXgbt1bkHsvLeJ7LyXE7xBZdbp7VqL5iHadWzsVeTh82Ek5tuivSA3wssqoavE1g4yC6vDGAx8midJRKAW1",
  "key10": "Z4BvzZY2u36CBS5kf2Qi7qhs6nq31LRTZcuxhGKY9sy5vcXPEWXxcpi158EpbVdmdgmbDzbWmKaQF4PjsywRa8d",
  "key11": "3YdFQiGgSKiGEWUoFFnnxo6zsR5iehNEcHp3jFK19K2i1c14SfqjUNBkt4XU1BM43Y8ayvkeC3k4sEYsKsn1e3mE",
  "key12": "5TFi6Zmbzq6LvaW32HPwfmY8ACh7w59WCW4cd5mRMBr1VcYY4M7KaJJvWxHTx1eez7Qvhp55Vz7qV1yg5gKNNgN9",
  "key13": "5B3abCu6Lse5Nbg7z9TMKKsNpvXDHqmi1YEk3HDzMsoTtWQbbzKD65zjHM6tCj66Z9H5QwDrfukkbmxQJtK5RELk",
  "key14": "1MYRvpPjAaeGPjRSyzp7cgDdgJqakJu2hubZXY3vFTzCAeJyDm8c8jNKUJVTYxBjJDJEoL63o1AirHTn6uQuGoK",
  "key15": "QidQdeJTDUKR7ER4dPYYtb6CveBuPYZAQDq1L4N34Pu5fbzF5q2rKxXG32VZam1kip6xdk7GkpcqChxwNgJpbrv",
  "key16": "2o3T3eudqivKHSGv41WNJH1ytP8BCKMCcSWhbKzQcFNZRLHNpbftKajNJjvbWrfXfsgJ9KTiyY2HwDK3CDXxg8gB",
  "key17": "2Dj61YyULXxY1i6bQysNiUEwTCUo45mLmtn1LBv4P567RF4hwtuFyAazZdjXN4B1BWEEQabtcnfpSs7wsc9hnsxL",
  "key18": "3hcDj1rHozrZ7GsyTxoQtuCMFB2B7FrxstfR8GzsmMZ3bEotRnuk864UicLHK5pfCGW2cqYphBcdcLxHie5HYDfY",
  "key19": "2ZWwRsy3L1TXzok6gTqo15BiR4GiyL2CdeZ2deDDSkjF2EPBTe4a6ubjj17a2E6PpHBB1JFp1eWn2iGCUufwBLcq",
  "key20": "5LS1feozimqnfu2iJJVQZrz9ZGdkqdJNu1ujdwyLCCsvZ2cPRNBvSwZ1EXGjBhwLHjmpNY3aNiVvgN4FGgBzZ1os",
  "key21": "5iJ8iY4SyzMgUCfnnVeQcbC9iNqTJELKhtNamarxsE54ucvcy9i8Q95gQCagNebdhtpqD7kki3HpjBv4ynCsJkDv",
  "key22": "VuZ7ZGcxkYbAvrU1o92YbF4H1JQpmafHuW2rSQ1sZmpSbLPJeJF9XanypCJeyZzoki6Nd9gyQjiJ2s9ZEQBDMQM",
  "key23": "5QrpztBuRsMNYJtCqrfNm9XW66F5AmHCpuuivmiQQfaEw79SUxY9AFEWPRT8fNr3rWfvERbNEw3Y17JDg6qQ3j1Q",
  "key24": "2dhThrei6osCD1Y33orndzcYBKmyFpiynYR4wSznG5i4EH2wHK8SmAk8nm3r2q9puPnBYfkTj4X4nAyfag9DLYJj",
  "key25": "AHqXUeyCa1mKdVQC83fHe86mpo3fU8WXM7tENTyTkXWtemfArP9xYWzgfbQwiTxrkjbG5S5KQWa46NMmV8L5rdX",
  "key26": "wVXn6gVPQahR6HqtFqEh84WEdhxL1p7vjcEvT9JP56boKJ5usmwgoapVpA1M27jbXsvz1HTun6yzqS5qEtBt1cn",
  "key27": "Ba7iEV8dUu3UfoDAVfYBfNogaXUTbENDqiH2q76QqqNiohGwQs4WjEDwCN6qaN5KUKi4vVWsgxTqqRQ5n1S5PEG",
  "key28": "5ZV2LexEjYDb92tarQ9PbvFMnh6J8vJ9juMH533bS2hkDUJfnLAZcRUxSWrqsrBBR9ohtLke5bc8CkBjGZvhHxwK",
  "key29": "2saPiM8ZnwJaRa1cGwmk8s3guuveJYGr4jUJwg9A2n3yKWetf1NHBJt12bWMwgbfyYiyursPJVLN7k9tZaaiApsc",
  "key30": "3EsUTN6eJFHqTWhA4x3kaasDyUJ8MW7Rmm1q4dB6BrieEZKysae2FgCKPfa3YtC98wYg1SHnbo9YfNauQTx1CREt",
  "key31": "HodNUBGNW3znBem1GLCmJmCoJBqnSGAxAxsRpGwtnTcWjKb6KkpSVnbhPRKJZKv6Kjng3Urr9dRRapHjE5MBPyc",
  "key32": "4VxtX4Js5o5EcdHTddoV5QeMJZp25hjYD7d95SyCtoamiFUzFnrg8PXJJnVe8EYQGyajDeezXP5CWyoSw2J5Rctc",
  "key33": "5hfHSrqZY66zigxn7hXd9EkCuQx2K8TGFxAgLJNVoz5sW9Vcgspn55tZVi9fRvZ4PKQqYvzF7x8wQqb6tTZQuYBr",
  "key34": "2agWDEmVEa247qnNigp7yyLxA2Jdzrp8cZ8MVF9a4i5NKkh6NP37PVqNWqmgDiTwsK4wSiFqJ377h1PCeaC8Cb3p",
  "key35": "PHRn3JRTfqstDSqzpmYR3jsp7MjaYfM5AL3NCTfik8qJvapiaJGa2ZDdTPki4wGoNHMx2eeMPPPCPc7QAkjA3aU",
  "key36": "yau4AXao5tkTGL5VhUnde2RoFkPPJJSqUAaQwuZw2gXNQPBHsvtwPodL18a4aqNPuFzHpXNeTpNN463Sa5dcxit",
  "key37": "ZKirP3oBHuJ7zxoWCvMohPDA1WNmmGMG4N66Fyikgym7dBYYv1oFNxAX7YniyyTFwHTsri33ttUGyo95nWVFm3b",
  "key38": "5mPcu3QfVsf2v2PmbEo26j1huHp7jwnorBL7MKaVA53SYisC5vjDRnYSeW8L7tR7BXB8t4zWDDyaKEJPvEehUmjz",
  "key39": "3LdYXXsDjR7Sz7bL3c38nL4orWaMSERvgn9juwTgGZLmF43hmXKtEGq49yETCPncASfrfhXrgfzajgU2v3usucHp",
  "key40": "2rzUZ72PvzMFU3wbH66sZQmrBwSihMNi8odEF5iv44T1sRxhVmz4gp4ZYuRjLF8MoAHYJ5WXVHoXrjg6eBp5TbnE"
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
