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
    "2HgKS7PnhPvwCjomcDPRAccNYSRAQQwKugzM9Qgfr5HLgchqpYe8PRPfaw5JBprWbQLa8T7EaqEiSKcLWNJvTzUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5om5WMWw6QA84814t1diyM8ptf5GjukF3riiv6tnHLzkXhXzmwQ3x3QXJmMz7R1YCzfKucEJj86bPvP58epViLcM",
  "key1": "3ZNMCw8mJwoYbXbViqYeCkAKwyi4xD4xxMrvUBYRKTD7AaRSiKyE6Zi7SktS86QpgaWRCW8wqUm1g6Ahww2zeuBA",
  "key2": "22CMhLo2pMNxEp9pVDGdTLfr4Z3LidHLuvG1CtZYaqTdAJ5daycX3Q3Yao4Rzy8ZQSx3h1MNTDJhw4NMRrUhDvm1",
  "key3": "3hDkaR8hFLY85AgTECd8PZ359rGfAcWusfJ71x7kmQ9NamDt1HtzWuKzBqLKegRiDTjarPzZvkvyU6Jta1NPJP7m",
  "key4": "4mHxQhb8wopoKYmfQBa9324xU1aSRLhJavjUVmibViNC6AZDQ3wC1Kx8hUmYvf7jUBbyizUj8GdkT8uWC1LiwDqN",
  "key5": "JH4ktxA5ECAQPXg6rUusRChLHB2v7g3Sg9mxDLHwkqcVWppyFUDkC24EaaQJPQ38zkz4Qpokw64FLszF6QS4S4s",
  "key6": "62ESZn8sWktcdc1TzcuLfo6uXhf5ZxAzaAFQDKkLDKBViunmh8vBhedNHxwFA3N95bLxjSm4g25wZENx9wwJVU9u",
  "key7": "4RWsekMGAkjYyZikWoYK7MopSqzgdL4xBj21XhmLDf9QGhevrpoXzZAViHppUa7c2zdyXZpKw71LTeXA3QmxhKGR",
  "key8": "5euYmhHKCXRGYiztESkQCF6HR5Pqp3MAfzeQkS47m7hPoLBtGdK2d4Pa9888Nhb5KKdgc4qqA9Tw8mho3Y4hfrU6",
  "key9": "2gap9BrZJDDfWrud9JXZUin47f5fVWBG8btmjtKoKKd9ksCPmkhU5vTWb35N5w7PEySCCWuqURgHHY4aQanaCXcw",
  "key10": "3cRWG29EdteG1R8cAexX5kFhwCxQuyeMexohYv9WVgXuBrwLynt4HeYHyG8GL6HPq2LX2P6CQeC3jvav5YrzwWna",
  "key11": "8SseDX9PPeQhwdDaPNeWkvx2DgHT1fPpFb5aZXGHpv8UipMzBUcrme16EabDQf95VY9eSRjdgh7XykxbvPLyBDX",
  "key12": "5xicU1teVXnfUzQMoZBYCFjpwu8HZhLarDUNTMemtFoKzc8QiGizdUPgPa6GoEwq7QA29myLES1QgFkpqebpxQ7E",
  "key13": "4smpNrJAmv5XXL4Et2CeZ9jahuK6y7G3w5UAf3riFjAtTWiCu2CZhiUJVYTSRR3QPbjZaoL5yuqaiv7jbAEvhg2W",
  "key14": "3d8VUcUsh1sisX5EzSG8CDknLVYrT8D73fABtSGU6GQRAqkP3m6YLxZhzmTUSs95Vqac6XfdRXvje4tUFGrjTGCP",
  "key15": "3uCzKj9SCWkYeajdBSUYB8vhdrqhqwpWK6G9EuKZaAFF46ipL4YDcDF7SVTbxgPVMCZnbEApH1qEV8C2vU3wtbr8",
  "key16": "46AF8VpwTHiVQgarDZJewjnjSq9FDjRHH1X2MWFe1TjT4p5DKFGSpBiTaYbtokvVvjE5rK56xGCDxV6KRsZArm9p",
  "key17": "64wLUMYQ47bMBESRh1u4iqhUBshh8uouNpkYQ2wD1n7NqiiK5hXJLYAVVroU2mygLwKd6xDFbx4WThAL3vLpq9GN",
  "key18": "4KnhHXHyzJ8FDnJaj5mmyQMJMSSE463DGpiSrcY7mrnWM1Bjecx84EA6gPUoBFjUUJnhvmKmzHMtsyCDNCyUaQL",
  "key19": "33PQP9J8QE3E67ZXmgTab94q21dQ1fCyU1ZUNynt8uhn9LXDbGX71duFmgbNvRTNa9mEKP5ZyD2zJem6rUcyxp4d",
  "key20": "2ntAJwkFD4aFoXemLJd6WiYcvLFEK1YcVs6CALrDKkjcAGq1baTw9dKfBhjThiokHvFpq3mafCXRdRWwoRrL4yi3",
  "key21": "5obGtMTSUPD73FH3iDaeWoTbaXswoodRcjsiY1qURjPmZQLXNAoFeonnEoowSzyzu7vSoYLjBDuPnWuUCs3uKy63",
  "key22": "ndCkj7wkcxwSNp86zvyUtYBGfFWTQs18JwwqVPa3bmuydLL7CEBxAN3spUV4qPKCSibjw4NNF3gqJPfMnb6ddYc",
  "key23": "4j9XhARXiYMYrqoy5RGsUadEyaVZ7ZrsekZmv7SPk6wWav8cfua8sfyX53ooAr7YWi6KoUwHZiky6qnPDSBkysp",
  "key24": "5HuME1e7NaFXuSnTkRdiYzaZkJKSYHVa9over2cE4dMYakWLKtgvrUfmpT3mYvBVrJug8Xs4Xu4KVR2tPttJsMDL",
  "key25": "2rgwhSvL9jq7tMyS3ajYHBu8qwYkUKq4neGAfM3rP813jEt7XYdpMt3wkGNXqknYLQFj1w4kSGPWms2Dkizkk5Gg",
  "key26": "fpmw1nRXdxiNnQZ3JHASrdfnZLqz1SGNFxnWUVuTCattSR3xy62hcicnixcNUj9kP6zB169KwAXVcjsqMHojbUc",
  "key27": "5VEvVRLoEXHFvbmy31ha4NaAnsvKrisLqCZs7hNgQnbkLtEGq8aBXiaMK3GDyYeYhqbJST8sKxzx9kYTeCoPBeHS",
  "key28": "23bsjBih5UFgXbeoBSJJbssTvupyM1Nbq1dE4GvFrFi1C6WRRKNua8th7oiFkjKjqT7sZ13KLcRbQF71Fti8J5VJ",
  "key29": "4cPBFc7iP2Q3QFRxXeSyTmSj3s3J8Cu9WHJfrTSusacJvDD7PdhJKnqFVrTSt5zLfUegw3hVQJedQJi5cz8hCaYG",
  "key30": "3HvofjJYwmP78ycSLTxu4uTFyRy769yFpr7oNsjokj87ukfaBgDH8SnttKvRSCCUdALmauKmbg3oxqwqy6jqbSaq",
  "key31": "5vQGVw9fP6bsbz7tpuuJ2CBpmnrfR6w6MjPrpcHWuxozVhz1zdEovjL6T9ybzpR8mPXyw4BbKha948VhxyntBfDd",
  "key32": "7dFa4ThsVwwGonbfCAXXenkEG5D9Sb64WJ5Zfw231FcAp52mYjJec5dseMLWLKVgBhzsudxCkMKiTdfNuwf5Bed",
  "key33": "e3yxjyLHHvdCh6A83XzwckbgZ3n1Rn14fdgTvwVmkXXHncLuznrRwjkE4oEBC4ZTtzNAXQ4ni7u1dvBcZE8SSKH",
  "key34": "4wLUW9G9CG1uGmYVrVTywTmrMe4jAeAq1Ax1RzvaR3HcQ3cFYePyGUgpWviNqBNoa21J4pdj5VdGZr4TFcvs13Cu",
  "key35": "4QcWNxZgNwHVsjWmFFSq2SK2tikoGV9LFQXtHcxoPkhxEHe4A8aGsrKJcTwyycSWEhNwiuEavmoEZC8XHcoHpL4E",
  "key36": "EbTojja1EL24Kxmie2XrT56ttMDdj7hpsdaN1unZF5h1GZLEcQSpWzZ7VXmsALoHeczXETmLV3zZh98WwQV7bH9",
  "key37": "4XacZgygo17NzYR5p7qb3ySR2qtuVe8hCNnWCEt4hdJU8Dnx4BM7vVKfWAkn4ssHL4rJmakSbccGVHcrkdG6X24Q",
  "key38": "5xrpcgpDvQBuE8b5AeGyQXQxKVLMf6MnJ23V6D8UnK6hTp2Np487T7Ab6RcEWuNxYKLu1PqWi1YSbg28FKbCNwrq",
  "key39": "661eiqTPFK7nY4PTwcdCr7pzSNgXY3DUThDrz65Sb3k8xnMRkbzzfm6HsYoLDCwwNTFhPbUzviwastf9zKF2dLrP",
  "key40": "5Dcp9LKuPyWFFy36EyFunh1hoFi9dpcLPUBaTGxCYW3S86c1nwfVJBkTZkdzm3yuAXtMaPCxoYEeqdCTfUEHBUdX",
  "key41": "4GsDqpYDYHZnWuJPC7Lt2zJZRvDHb6muypvpkFkQNSaGAJmekrRBEiMCRfKyT5TS2XmcYhyk4xUvV5vtygQ1UuB3",
  "key42": "39X4fT7zhEFsnvZ7fCWhKJhU7h1gaNbi7pgyDYPuT7FUL6H8tmjEmcmp7HrFJxkqFrNWRHxPFSk7QWqn1QrjBtdi",
  "key43": "3oYitzrwK6QLqKqDbj7PLxTSXhEAcj4UK6R9aN6dVbW3pFb4xUrWzNfC4ibsj5W8JYV3ZfGLZve6hmnHjgmd7JqR",
  "key44": "5sa6VREdoihwv2uHTye8T2hkpLmyhG8u1q3kpEVVgsKguxgE9reZcYzACDNwnejUh3gv6yQW9DHeCkYH4coEQjxU"
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
