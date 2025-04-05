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
    "4ENHvZi3MyLfFhL3X5gW3f9AdhG5KFYsod4AF2MgTPJhUdobEJ1SdX5eVJPFnF7EJe93eTTcPfNVrLT8DnEEMegp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MZk6qYcjxpTSFRrKNfzN58DecxyWwYBMTaGSSedPonp1Ukf6FV5U7hXDc3vDjstYXe8oRthUNoGhiHhxbJ5g34",
  "key1": "61rNMsmo2VyTBQFDLMWxpVzcGNRFciEyz6Szk1sFxpNBk4yfMAcegWCegTZoTdsdzKGK7Qzc78Hu1JkrhkLnuFK1",
  "key2": "2ZYHJHYrNQMfBq3s6E7Xk9KMAvQAFdXZJrAZT8P6gVUQxqrEtczZbG98Kfo7AecA71utxbax9Wv64pMbSKiPogSc",
  "key3": "3sDqd8kEj8FAudCGLiTu2qLY426CqV6NSRTXTSoKzWyHrmnBvTdvrnJp3jjMN4eGk7zcUbVBVwqpp5afaSaRM1PC",
  "key4": "4cRHEvMP6gUiP5uwiobKxnoFcgvZgb97AyByjZvCuuMf8MkyMZEjybDTPAP8jdiGu5qNjzoqLs7ogNnwEJjrYBxj",
  "key5": "56eKRjQGWJ2cXBxqexgvVSMkBsdSv45rTFKaWtd4mUwoEuqJmdwu6PrTH72tb5jr7UPBrSZxQKakYHyMcL66tKfS",
  "key6": "2AvLWEjKDZg5v6xWqWoaWdFxsVvoRu8BwbCoTr5RfhhAZfYCg3YTacueESbq5EgAujCHTHt22Zh5UsYkVkoNmwpf",
  "key7": "31w6Ay7VWERr8xZp7NAMS7EELhcbUmo2Y5eG59SYqBGR7AgE5k3iSnAo2GTZQAqxUL1xxQjDfU1bZ2J99bn1WLzd",
  "key8": "66PbHWvZAvzfXug172H6EkFskuKGzmvjhZmvW6t1SZ3TyLhPaZmVcZvPau1TYAVFTmzEAcbVpH8beUGMC4mbhtQm",
  "key9": "44jSJeF4SgG2cNhueLLSF9J2TL6EiswN8C7K1hXDQ4958e7AdsLKXSr8FNkj2GN8JwdBzhwf2pFwa5XN8p5JcbLQ",
  "key10": "2XPiR3gQNLbmVS693uosddC8xofTFX8dRsBGSsERhTVVmp7APGt4CefXUG3HQN25y87x6wDVu8Ynp5Ub9tP1kCg7",
  "key11": "2kDE7StMrri6oVxco3FFKKKsQxUi3fD6XKdAU1B8iouevaJvi2CqoYf6D2dxMCeh16ee1BzSPADxgfKP3FfZDP8J",
  "key12": "24vMhoTzGfrHn9igTqjzP3LA2QBXUW6hXz7H73f3KEEdkrBKv11sFCZcR5xnAXPL772xBVP5rNCahs9mpsigpEf5",
  "key13": "6bZU2SxLmRgPSzfGJoDn4vShEtufNX7g4cRpRLZe7pWHFzG2ERdeTNHx2VYRHMByAAHRgCxgeA7AgGg8Lrmw9hj",
  "key14": "5JSoRb33CJ8B5DiyTWVyPnR8NaW6HGz1KHnD8TQtVfJEQrPp9HXMw9n7LTBjZb4v7fBWQu81ETmTiZWqBVKyNTzX",
  "key15": "VCt9v6aFzGB3dDs1r6mZmvju2gM8tq9cgT53JfdpmQNDf9Dgkua51gE3TRPVLKL5CxkAAXxoMZGjpdmDND5Bc8j",
  "key16": "23K313CbgqUK7Lj77mu4N8DHByWBsoA4dpQSbqRScwYFgf4DbW2TpCJekfRjxBmDgsGTPPcUdezKYaa1WD1Df5pi",
  "key17": "5DQDbvLx1jqRJxbPDZ9Rs7jnAvJb5graRr5EF6H6xKUy85iUHybgMu3mXNHpa5kyQp8UzZVRQ6PFPJYv3Fy2b9D9",
  "key18": "5ziE2qoqZyrn7t9ff1dbwtrhsYMk5R8ZRr8YbPxFswfXQxZGmGzcLxoEx5LNhUtkwyi1ZUw6nroJk6jHV6uCZ3tY",
  "key19": "U17ozHAmTLgR9oMY4fyvhqL6eXhy3K3k2CysnGP1gsj56oQM2WJxTMn7uK4Frb49UzuAT48AvAovLKFroEmfNLD",
  "key20": "4r9o6kyuYNwnUYBwyne3P9BsySG8niSth6zsJRqiddRka8GXSkuFv5796yunQqgNqvTzZDh4XrgcxwoZw7Q1PWhE",
  "key21": "5W4ACN7VewGJZxWjHptDebyQShEoHWgK9TBim3WNif2ehyW6JKT2YNBRSurMH8rt799QGxrzJx67HTFXBn4cmAAq",
  "key22": "39iqPuJArzYamqFmcHA6TiSJ97SeFteUSQtrgbidqry5Yk5FXw9hs8d7i39ADcYaE29C3F1JQ7yZU6Jhgf49LGzX",
  "key23": "5MZdWgNQPzFJ6jyLWcQH72jENtMQuHK1dCB2voSXth45qY9ki2LJW9kZbveh2gqi2iDPnR5F3584W9n6CXsgnxES",
  "key24": "YgAMVPLAob1AVAYPEA1UikqYpZiXrWTvsWCTrfJr6FnJA5WixznPZCRTvta24LXgs4NBV1qWL9xX3tJxu5YLdAg",
  "key25": "N4xFHzWyCWmVnA1Voocv9JrPhU9TdMPwNaLuY3M3YsGLTMzvbtAD9gRhUhEpKbwms74EeFaUGP8UWT9K7FbTpbZ",
  "key26": "3Q5BULE5xMWy18GJQ3u2cGCZAXLPF2iCWpLvvEjSK2ifxwJr6XKohy3FnLffUKYUWwtNSHL1PCqqp48YpfKWn4HW",
  "key27": "21qcWSN1AfMqjX6htoYHY1HZixK84iYTYmuxHrKLp4ZuGtzZKXpSHd23Vc7PWaboGg3dU6V1pnKCpcMmz4q9JjR4",
  "key28": "2XzkQ4SEEa7U2EnkTkZdD2zzUVyiMEz4XbGXTVMCXeAfNTotNNXPCiikTBjpvpajURiiYurc7yo9RcmEfobxqstb",
  "key29": "fTGgCTnoLSC5WzYJjpJqQ8HcktFVyBuGNctqr6cZ16of9eaUq7NsJqGvw2WqJbqVA12CgFB3X73UDRBcG9Crnmm",
  "key30": "39JbtRowARztt7otxGRSf5q5QsvGJYwyPqUuHRDoA8VrNDwVEbQccPxTw1Ru6S5chXYGxMXnQQ2RJcu8hKJnZUcU",
  "key31": "4xEEFgv28LRxnZRQEbjqpQtd72Tuty56HdHRBjUu63e11AcnLBqR154G3PJnpRdVPnoJAZp1ezi7pMQCaV5AaejA",
  "key32": "3mXBSyfxe9nThWp7rWMSqGnsLdr3SY7eTqJZqZU3jtGboz4ciDDTrP38uzTHbUdfTArx5DkobSTZnyNVfe5YQHua",
  "key33": "4G6yyfHczhmxGeXcs3GgwUduKMPq8poifafj7Cr9HC5tcnQ87KkeVyQGxEwrjgMZmyJLpuiqZxwYKpjnXSZCv1sT",
  "key34": "4RM7Lug44vbHZpZHctEQdJ9cUZRxUc8ud4qZDfkTAMorznTr5Wt35pbJBF5hsHgirPkz2tdETL4oTmF7veCtR5v5",
  "key35": "8hjjigf5ov4nivjGbgyKGUXM6skrVVJJroxySAUsvUuoN6ndvzNEuSqm7gJnQSBHGoNe8aQtzhW4YKZ8R59KhTU",
  "key36": "Kb8mWX66Y1mps4Pk2vymapN4oDJrktCWMjqjx4enqf2hvozPsKjEd1YiohzGVXaDDLsNhcPtHNrYvC8VgZ7CgwM",
  "key37": "4QcXxGw3DKSpxF3qYLbJ6FiAm9d6hbW53fwohdgDF8aQ3rfz8rjjeFhkSwPE9pQzTBVhgGMABRXk1k4nsNiLqE2h",
  "key38": "4usz3YC9KzjXLQ7qVYTPAKJpTXWaKJPS5sPCua3hFzsezM518mkqvhjLAn5RkxjPXv1bxorzG6aRvazHymntg1AV",
  "key39": "56ZdToydHAFQYMDkcAvmYt35MV8yfnpmaHT6VLh3pLZxYFHSEChP8CfvjPfrdktBQvbHgB9sBgrnbaiZDrqCTYxb",
  "key40": "35jDqMvSsWvyjrg4xN5JxSHoVs4QakGg99Y3qnFnDwoqKGz6uuyWsrdi7n9QJ5DfzYJ9yJePQfpKyD4a59xar5o7",
  "key41": "57NbuCgrj4kTHMnDLFbaQy1g3D7Pi6kB522JzqxQ5LgVaQTgsSbiznQninaCTM1qerFxQRqdbDwTucpoGVBTQTYb",
  "key42": "4HxiAiwtZTC1FF5xm174xsAE17ctStXNTmCouBE6rHP5kgjyhvnP9uoCJTRyfan6Nn87rcPALHBgNqT77vitCEEL",
  "key43": "F3zsj9seRdpz9rsLyK3wya2R6i15QLTxqk9KwLWKKHTtY2CpsoQmsARfygvFe3CnqaoMvDWvrNnBHE1NKY1sJTh",
  "key44": "im38hc7VpaXKt6DdDU4U6PZyEshvEYJzKZRgin8S4pcf8n2LuBFMQxUk8zRpTHGbHTnNGHsdyrbA9sQxzSwpQkR",
  "key45": "5dc718uSDEGFsBUEv8RYqbAGRdUWHFvDdmB5Z32swQ3gzz6PHfMF6xn4BFMAVYCady4smJrYyK5xtpT3y9rM61V9",
  "key46": "5pqdTmXFzjGbd4278DZN9J3VJAhshx4HwYpqTrGGbf56gAT6b3SkhzuMvszEyDRvaXpZVL8jeo1ybpTU5Vo9rEqK",
  "key47": "3HL3g5pYQzJNE5irk3cAjwS9gCwZdGLnweiYd6D7gbvznFNbjRHa4b3BcvNpHAMnVyzDjKku2VAZTUCN5tfB2BPB"
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
