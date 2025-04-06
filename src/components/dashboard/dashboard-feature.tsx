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
    "9pQcVqVA5arvfYrBa4unDs9uN9BvxvMG4t1YwN8At2QghSVZ1aFZgP3DPYmFKwAL312MYAsdyjDCto3wnYeARrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5E7E66qWz5vaUvw4thLGhnGFHLLBQkgVAtFgHAFt9eCVHZ8PkALkgCaUxqUvczKSyZFVCqaN7vc6GX2y4NfKW1",
  "key1": "3pmsQS3ugjWsWRggwwhR1Cgi8qRMcT1J63uQiRmguGiAKykSDan4gVMDCXQmT3msu7xWQn6DPVAnAGj1sevD5mh1",
  "key2": "2Qn2sXG85WWdn2UE5WNThFs6tBwRa6Fa4vCpJ9Gz8B8xhXeAgdT6WE8u1BXc2y56eQkkmftpc7WBCJXtW69HQCng",
  "key3": "5T9PZ5ZLJ8SSEALyrq6WFnpVw1999ihYzRGtkQk6Nma4uCLz8oXFjN3t5oDd6yrsZRYGyLHzmYnK3cndGidRRsFK",
  "key4": "4z9ffWhpxQCdLPN2DEUKjEBjQ99AMuYG3JiFNmNZkMb49m1cxjgm22nXJGfyZcvhPk5ejnKC2B7NQtbeNcRXaFA7",
  "key5": "3rzTTxu17z5AfFda2KDSxxUUrhQnUVYSiwrdTYFtfX2yARP75bNHS4JKpYXUzKaeZ2sXC8B7UYQNTAAbiYUv8cBJ",
  "key6": "2y1LhwpZZLNjsnsyQC2M3U9SuZSkn9eUewAwb9E1rkj36JFYJm1ADEu5jAfr7v2GxKYLfeb9yi3yfEUxvRbcTHhb",
  "key7": "3y1v7qT1tXCnQyY93e9RZBEHpBj3464kcrx5YAQ4m8MM8UXrt1UzT5F5cnbjeZFVrzVS4CZ6AGte7QCjwyCLAL2X",
  "key8": "628uPsCTPbnyLieU5BFRizMTKjJnC7gjFzgQLot9P9PhwTQN5G4qsxSUsEKhgHGvRkJqmSr2eiQpE3GWy8icFk8d",
  "key9": "WhrkVEsV7PLvU8Uji3JqXdqfi8NSJ2rNxDv6fF6gFSmNN1QULMDnYQs8zjDcue2fpYdpNhuSdtqBdATAiwrpKAW",
  "key10": "3C3S7kuck8eFsQ2BjY2DirmyF5AbSBx2iHUTo9FhGYnvfRw5ryqQk5r7cBspF8gbMp7PNMpw2rQ2jr3qGUAuMY9P",
  "key11": "Tixb8D7ocxxoYcMW8KbK4yY3M7iS3pgoybcCdWFUPw4Cd6z3XH3iKHnxt6g3JgnEBCaQyDshfw4d4qB4NEvFx4B",
  "key12": "4XMWVWsMngSx44Ew9GX7Rq9hvzNq2WPuVPAZeCmLaZp9q2NwjAGUdSXnw9yESHfuRR4135R23TZ8vqv3pNH3nJ6u",
  "key13": "53TeFctxxQaqzXAbTtuLvJT7XG9pAafWnB2hL4dtKxfLLpJe9TFE33Y4he9Dn2vhcx1fEAAV41abZSLxSGgsXwB7",
  "key14": "3Muu4eaU31TM5aseFRda6dKZHuX1MSvDKUCX57wGXVMvUmEPNek9fXLi947oGybaP7cYugzwpdsy3XLkvdFxUHkq",
  "key15": "64dtXeyLAe1W7he3RAps6dtAnuAKmkMac45psG2QoFnT77tyumU98mWuNwgn2Waw6r48zUevhKGjTJXF2sTSrsJQ",
  "key16": "2qjTMASaCcZZpFdyVmZ5Tq3Vnh4VZvt4r4DRj4KZVxbbnqREtADZgJUBnFgHtoLhRZdDS5mh5wd13fZ8NirTSZEc",
  "key17": "3wdrnhGBMcx9tf8T6CohK4sgC8v989mAMcVWjR8R64viLTUSe3Ahx3pdTgBRsctu4PwZ7uRxCksrwdJhETqNTDzR",
  "key18": "EhySXrrWV1HoeC9jkcPRRd95SNoh13tcukaUSV8C9X3J6p8aRUCbHkXLL4cZUMHHGwy4dGg9r3bRjxTmWqhebRd",
  "key19": "3AgMDdw8XT9vSJyGSqTLbLK6r4VcWQWJ6Kd5zmksLmMTkqDeXNSREaE5bd5aJvWotZNCg7wEVAkuXQkV5x4PnCtm",
  "key20": "2CE4aT4vQjP8Zch8yeCMrQVTE1wwrgLVjykZNJ8vs8dT585Wn4NsPNJHe6FgoSnLTV7NiJL7feTFnGHtvF4UB2FH",
  "key21": "5wbif2p7cu6y8f9S3i7vWPczqJoEYmfWbZZydsRmzqHFNHVnTLaXiga5R6QScRWHTbfVYFDafF7e1qcMDJj7hRdW",
  "key22": "1bcnGnpqv7uAaqNvfu8iKqJaRiJKfqWnhpu1dZvaq1sNM6RXwZVYDSZkm3PYerz1DQoc99zH8GmtVuZyjs79DTk",
  "key23": "4S23B52rjSoXTHHWPbuBQSwM75yDXGUpL5sLoihsNFJNxGhuNgmbVoHZNb5io7aNejt8s2J4wKWrjCverS6SQC3L",
  "key24": "AiuWBM3CNDFNAS5tFxumo5RXvAJBzyhWmsAvd827oJR5VrT7qeFNWQ1mbSEna7U8rXfzaaC3FSV6RhL2JHQ5RmV",
  "key25": "NCygfXjCZZeAoz6HL5Teaki48nRnhmEuxKDWsVxwWHuuNrRz6aRxrMmctvidkMkqa2zLJ33b2Z1CfCMTuLANnqB",
  "key26": "2Sg7PJAXDm5L14jwdy7Nfqcy881hZt6fVDsDt6VDNPq7hk26dFwjpu3ZJfEq8uVQsGZfw8ueo9xSyd4yPVxtMKJE",
  "key27": "5XByJxyxhkzt5N7guNBcYtDUUNXUnCFsdEBLXqZCNzifnn5NCTo7owWHBDqjLMmNPB95bBiuwAcx9EK7dG1K4RAW",
  "key28": "3vAT4Lg4WbWWZB9Q8zNg1BTe2DT9N6SLFrEzjejYhJRVviNbapQSU4AQPYMzVvL3VXjh151FUgwe7cEGKA8hSVD2",
  "key29": "5VYvPQ3fFjE83FEUDjYX3Urogp4cHyv4KANFU4niUjExnCkGfQUjBQLWXYS4EuaLBJP6h7ZWDPirWWjTq4u3qX2C",
  "key30": "3kGYqJWAifMK21H6snnR4rFtrvEsmjujGs8Epo2RF9UTf3kUKEk5nEvtYhkumgDj4M1FZF3icVcMS2YPSDqUStVY",
  "key31": "2WWtoMtZz9DqGkUorDKH1iuPhXpkAErGK1sjsg1s5FrShM8RdV8V3N1YQgVJHLhH3wSrDEVi7oDEQFPg1Hmofr79",
  "key32": "3821BquVq5uhcfr4NFxy1hYbZBnt2hktPrzt4fAXxcQA8GnDHhqittqhqJPVUEK42XBNqMAp5ZfTLiMxw58v7jyQ",
  "key33": "2avoCZ6LjWKQZKRtbGCydtsDNFdvxdhsZbdjLusG7HDhLKoxxq5AhEeG99T2ByjHm4U5k29LVxeUmF5dYBiDuZPZ",
  "key34": "fvYC7W9TNfztQbPWT1uZmZHuUcCzh3wD2Y28BBvTuonZVknyhaLGA5cHw7EDRcpy1KoHNanS9GrGx9kGipFx5oS",
  "key35": "3HB9AoFxRwB3nM4E9DJHTLSD3H4kWErwmMVwCufuNn3FpRd3wZhuU845eG7dYYQbgn8Sbcg2JEdY3hWQL2huMULk",
  "key36": "2JTei9njufJxZSxEDCMqe2e2TEnf2AUqDky5SXHBNc6dFnZ5Tt6UWqqTvGxq8N7JtoJ1baHJZuX4aYRcnXnbid7q",
  "key37": "GXMhvBUvMroKjaizEgCTGSWaoStKQxk88haDLczL5xrQCymWLQYfPr9Ave2vEBVtXLe6HCmxnthtkr7EfFvVVrg",
  "key38": "48y78WfhcerQtvZqyGeaqtYGEbdiMDRsZ6Kbm82QLSz9rq7SYEyz4rowUsZmE6VzatHfukuiZA6MArLzY3F93LAC",
  "key39": "PLweWxvByqdcgYwPUdPctUB6ZgdLhe1gXrPdScArmsaa94aD7MWBoMbCTgdWr6RgzT2bBCkRYSJy3wuWevhrfBU",
  "key40": "7vhA66gpvZqVUg4JNxNrPPTBp6trU6F1PRZNbiBZkyKB8L3Hc6a7AmKQeyr8PFD7Pxt2nXZwQHT39pVPxNYCvY4",
  "key41": "3gaHRbnpWwNaejzsLYL8CeX7gn5qDSRScHD7uEEVnTxcmDohyvrxCcQycTtbv7hTDpLwLsJdza5MSjCfEiJdpEec",
  "key42": "2tBzhMmFRHCvLzxtdssdMNyffLHC2zpShyUqEYHN1kBad8Ae1YXLGSDpeUwzpv8dZ4BELGUK4Wqc1K2NNCjKjSZz",
  "key43": "5hKMdyV35zg8dwRWg2o2WhuPc1952V3k98r7ZDKgcwGUCsQAaRCpFnde5Q1brka1PQw3nbPeZS5DzUMVySFQqY67",
  "key44": "2QZs4fgZi1gkL68DCw5tzuRo5b2AEhjDJe1Fbahz9PXtnEytodMifvznwZGb5meRvqzzJ2Z49mGek5zgFTwxTjLe",
  "key45": "5BnBU7ADAXiKGVwEzQ2UM6xJogpUjoBESMiMbJN2C9JCGrinJQ2JUi6ZgQvRjsecFWB7VM5vwHkYEf9wQTG4drCt",
  "key46": "634NBxr4jVPbniPu2qVViuL2V7MG2SewGTNenaaiZH9jp6KjfZbBPyYm4k9gxv1ttHRkpNAt6Z18uR5GFXzAkfMq",
  "key47": "4AdmScnyyUmAhfvAXbhRKmq5miuKuRp5GoGA1KgLDkfZS9CZqoNZAeSkJ8nSN1MzjRRP4k3GvWA4ooz71oWz2QkX",
  "key48": "2HbtR4V4tyUsQpzz4qMbvtd8Jy4zQYZ1GrUboKetJd6978pn9VLvYKsNcNmFmAnwa8qJQ3v1dbHMpRzhSz2p1gMW",
  "key49": "57j659Er4XEn1HE7do3swRLhc4WU6QxChYJ7nyTVELUN4jWQ43c4Mi8JbrrcRGBBBqD7F38S1se2P122C1SyVssA"
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
