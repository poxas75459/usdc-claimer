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
    "4rf4eomvEbQAR7g6AmaR2uxbiQxckcrUqHdcVndRiTpicTzNFCaa5X4UiHUbBzLVFeFWGn4DFFT9kENHQgwd5AS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23eqqBBBDek6YMuDXxJ6vNy7ND852kwX3AuC8aeVqqtftDzaT2rfR8cjovCMUB2sMKeJuCBQgsrRogXtDzPW4VJU",
  "key1": "3M9E5gMRpzZ8nvkV6EGkakhjvr921XmS6mA87EMDwiafgxyb3jbgRnK3utVr4PP3WuLrLr2aP4BV2foPE8XSRG65",
  "key2": "5DwDSD6TCnZ95GzGfPpYxcGrNbP5rxX6NEiZEdeQL1KP8KggYieQ9m1HnpZr6JxDEvdoMF5SAsmTDWeGybPrm6jD",
  "key3": "5J3mkjqcJC78g2jXhm8HfvFR8JFzysQ5FUe2aqfNXYCcAWJ52otYd6m5pqDaHEszszYTjVK7oZez3LmSJZdEUgZt",
  "key4": "23iwYL1eZ4XeVULKLis1fbWQwSPGKJgtV3Hjeo1oyV4dNKLySAzWafJ78rZ6d1vM879BD36cnYP7FbFVn4KcU9bS",
  "key5": "mDjeLBJKcnnQjqpL7ZpdXX8hYdHgWcJgLYgQTLJzY8f6891Bf7eSuAQs4k8FaHuXZv13RKdmiF1Nj794iJxvN6Y",
  "key6": "5YLg8GuL61YiVxvXfAvR9mbPxevuzjcRM5broRgaZXdjBTxSxekk7mFexXTbPMmtaKPfjbionmXnEzSPRgywESks",
  "key7": "DxR8P5KjSQ9QCpYKpmjg8eiK8ACGXWVXwHABKqCBLr6JAjTN7pejqgiJDCDtkTP3KCQBnoem4DP4CtskvcnrZ6C",
  "key8": "4iEW5tFSUwWwDL8Cv8v8vM6ka4rWy5ZT6cKvCssVNojSoqcYVcmkQvYUZtjLqjfSyMopqJJ8JBkcXGXmmrhaRizp",
  "key9": "2zuLc1f8KLoDH3aHE9itq7w4PKL5vWwGY4mtTPbbfE89AXs7BV2QnyvZnjr2Eapyn15uFeK2UNwUmw61Pd3oceuU",
  "key10": "4wvQmH4dJFnUei7MbYUzJAKFwzCzxSbg4pTHjYnpCrY1zFWAkHJ6CApngEzNoMQ5cm8EKvFiWQntBmVfDzToqEwf",
  "key11": "41i5u2GWJGcA5EeaF6vKn7DpjLaqDYjFhwCBsfDYhQkPc7pD1GYWusG8SGjZjpVdtECNz1Kzg74sFhnqRwMvWfor",
  "key12": "2nNfMsNKte9MvPtCCKew6Fhv2A7GSYRbJ2nZVcgZVpjBwp8Ly84yZtkLjr7GuEdnqEiPsK2Hm2qWo9gVbkfXVEw3",
  "key13": "2dhumriXuZzG6o1mmJeZUa5QU3fuju5W25idrp8wQFYPqZnP9tCGm31wLuGVhFzcbvBHa7Lon7CENXru9TJS4R7C",
  "key14": "5BczNk24qok8baZiLMGQnn23b21yR1qZ2gToPMeu2Z4tzjSXAzqB3kApP6LVy65nEJzyD4aFEYrZLKew3oRdGh2K",
  "key15": "Ec7iNxwAp9B8FP7vFEySH2kDwpqcXUV8J15uEwCiJhLFDqYHXTyVYekH4jVRy555KFqH5vDHxGfPZiv4LEj9mxw",
  "key16": "29zUsoYVcJtDGy5x9R2VnB9vvLHkEuN97XTDdD2QCNarfvxoQSoUA7xgK464RMbaM9G8isWJPDh7LJJDZSwxaeNX",
  "key17": "yZ9EUr33hGjByvq6XQRECyZkZF6uqr5EfrmnGHKEgdgz8YWvw4TiGoqJZ2kVHB1SND5AN1ZYWYgdWroH32xGAGu",
  "key18": "362zHWwU9rq5gd6uGsba5kWUvQT2qXZ4Xg3QhBCxVuY7HfD5ZLhDGZfiCUkquyzLPvqxXqbJP9nC4QyUvaMKdRzR",
  "key19": "4Qn95KvZqEdhty5BQ6vSt7a9qQa6965KQWXaBvSoFiVNGJ1FDdv4MSmAJzaBS6mb9ViyUoLEcjM8LsnbEwGKYmGk",
  "key20": "VZe1gknxSz5ETkhHbRCtibW543yA1BEsJ8iqZBDR6rQbxEpHnYfp4ihKuxfwgHkhZmkztnvsUfspirSLniAMLdj",
  "key21": "43WsNktJ51L4rSBR3VfBL2cfkJD6vfiSxQ6NTAFqCE91gBov8mGhMmrAH2VgyWd3sSKjsR3pVeoebP5JCSmyMS8B",
  "key22": "5xtHV2ptNAMVpFNJKPuk4XS9syJAu8FJGkvGuVg9VjvU2aSPHUhDYoFTpsK9uEtauWqJhAGVppox6A76ufzbryiZ",
  "key23": "5cKz7C3Cxh5h67AAMrBCdRAF8ZsvanZA8oYWCFS3hYjqPc8n93yKirSBhPMd6i9KTjyFqwaLpo6qjkGDCcAfPK5S",
  "key24": "57ww88jg5F1pAF2ynHKKx1Bsobv67gXinjPnZXS8jtm8mcJmNnJGkSTYS31QVcKhQFsukwmNnzHzW7QM2AJsmGHg",
  "key25": "3VNsTwE4YVbfvMJpha8e55kC4StVpXmqmBKJNMobH1SVQgXCSBJp9RvLrZGGTQ9arKtVPge1LWG122tAJj4KAHyz",
  "key26": "3iyLXCZAZzmHc7S9pwbvk1sYEw6XtWaQLT3BWfW7xpsvyM9U1sMvFuBcLgDCzfADR9DKaVKNirB8D44CCLPE6Qi9",
  "key27": "5HDvYnQkpeTPYaxh24aAN9162LGaZZKbTXAM4EBC24inLP24Q8rinofBYKx4ZnLp71yc8kakNWhZQZQxHSxKGa8t",
  "key28": "3hfp8Zw47RXiweJaRPRoPk1wdNvEfu5Hk3Vs7HMsAi7ZxN4bEMZHEqEg2UkTC3Jcc6SLzxKQo6o8jeGxnYWAcN6t",
  "key29": "DXdLG292cEf6uvLsf4dRAw6qwj6rHT53z5saT4JrCzX2dBM3jK9vKb2LzUVxj9q3RyHYcV21DSAMefYQNxnEoxE",
  "key30": "2hekfWtipNCwwF47dUsCSRVKZaCDFvRpD7aSzHjkEcAhwCV2XduDZDpqMZ5GZLuQ8WGgVxTBPSziwHr95RbUgVcv",
  "key31": "2epAz7P1RQFRHn16Xvg4UHwgVCJVLFZcjwmnV3ovmhqSXpjKyKCRPQMctXPLvFRrpQmMwTzWX3NDXGT11Dvtzn8K",
  "key32": "5UKoyfakFsqF2pQcJdCjsphtnk47bGnZGjvxSuCgyt6pEjvutRSHxqiRuYuSoYDK7xYy1PYuNWUpx5Ymcwzd8w3K",
  "key33": "4cZeX8TbbsFRVgRbxB7xEoH8Bpcb6MZfUB82HHbh4T1R4i8wfPCQyrE1SYJ9XRotU3duuBreqt2A2qc96LefKiGS",
  "key34": "2USjHLbPMP1CX48xjb6LsBEan8cSK4in4rdEoWcoDpcom6J1TzrHErHNTtWgwQiPhjS8TpjQDLRzfH3VxFkYQ4xF",
  "key35": "4kLZizi2ygUJHw9dNaoWY2k1eRxwNPzC9tibHgMqsdWvWJSf3DQt6qU5CcWByEfvRnwyhXzJX2hLT7AQnJ5YFezY",
  "key36": "3mQ2o5kBGU7xQ4HQRxNxQMuxtoYABq5JAKqrgA9fYKEzEHETAWxtCNtYYAxe1E9ULYS4WtfP1tVTUaDoSvte6S18",
  "key37": "4J9ArazRVTHT7zaFzRu38odzCAyWbphpcZ3ZUYqK2r117LwdevqfHDEHaRCFmzwDHQ62S9auzhrfsC1vcA6HRrMY",
  "key38": "2TEget7Aer3Qzxfm2HM3tPWdJkkdugXtLLpoNUWBfhJCwzKM9md1nDc8JhtH2ukAJRnzDxXhqd24B5QacGxR1nH7",
  "key39": "3qWxYE71rDUUDctWaMo1pFxn1zfR6sPUeZtGEeCuxEnL8quvveNAKcPzBwbHwtNrZnSq78s8GZbLd1UyMamyvCQS",
  "key40": "3Y3ubE2grujCTThGZ4fPsK7VSNxx4YS9L5CSoFQUNVpxnYFWCqCR76A5CTf75uf9KdWRTud6XBJKCGv8Kj7kvcUj",
  "key41": "5bd5kfu8TxzmNtbkXFFepVinSbx31jj81nro5TRqriqfDaGu8FLTYgfC4S4yZYFYx47QkLQ9R9uQrJL8xqwA2SU1",
  "key42": "5smnTjdMirgFp1sEFGjZDzYo85FNz8bjy86ZekEhEV287XcnMBkdsRrFGWBY739wTm2ZS62EpmoTZKUYbosF6aw1",
  "key43": "6KG1AuaVCdJ9RQjHZmwKkyq2wrjVYcQ3KsDUN1iSwmnxYu9dPC7t4PjohmR1n3cQKDxJ4YCiWT2XEvK1NvreDup",
  "key44": "5eghNvEGzL9uByEhAtwV6X6kjizbH6SMA6ZMX9ccX8d1vEwQ64gtKhDsNPFf2cmAkQK4XQosEB1C39XCwdbCX5uQ",
  "key45": "zgN6wX2BRTg2qZU84mSjwTxBstqEaCNCbpzbnAHHwq41bzEUY7wDz6xLEDNQHpqTc4ArVTVXQFGzaMdwQcntqYw"
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
