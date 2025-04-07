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
    "2pichGTu3HYosscMKkZ2NqtMz3TnJNSd3DHvDVdgfTw8MevuNnDhDE51c2fnNFgMpq8nLxJHk243PjnwioaKsz79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnPEHq3erSdxgjvvqttBSCyvG7KjZdFFhLgHz8MTXtkoh3HikaZaxBBNVqYqHpFhZqvGQt3q4i3Tv366g34iPAD",
  "key1": "2e6yzFAjbg3rFPXEKWdxumzJKcW6jN9DQEVyb8oaZfWsnAG9QEbJuT8sFKfeBAs9Czvzi6NUirEqQAiRHuv9B6fD",
  "key2": "3y5UyibgsJCTKrMMxSQWAnZXSpnrn1QDihkFi59on1xWs1nAcK3cSwxLLw1d53EEaEWbrQpihb7VYmRdP4mHTnRy",
  "key3": "3La7WHp1SL5BZe1X6iGDEVkbmvoUjY8hATuSH18GNcKye3G6AzH9Dn1vLfryp7XUyT6xyhJJcgHgbnXmQ2EYCVTS",
  "key4": "4dAkLBjMYySe6fHbZKqq7FfhzkUA4mPxBFuX3GSy62hmboP6Ybm1xN1MPtKukKknuJMmQ85KVhuRiAGJfznBpyuT",
  "key5": "5Q2oWpP9tR8uXLncet81hvrJrtaqNTpUd4bcWMw1YrF33EK3tnb22MogvWFQNC6Yn7HKbZxiXHMgs4hNd73c1xJv",
  "key6": "G6WzPjJd8ZGh47wz4fcQH88S59X6XYbVv1mKZTPSSTr9tJjj6ST2jXfDD3AQ9zHor9K5XC2UTAr3EWVQDyCRb7j",
  "key7": "2PFpUNa2QtamHj2airuzJvtD4w9adBfGvuHWoqjvUFZvAURZrM7u3CWu8xEUoBV2vbCsDVCUiCjt8eZGJmuKh5Ph",
  "key8": "ZTBz4NiSy9TZWTWzcK4EoQMP81UCrcoA451bg8UxjohPmr69921vsj9qtTnkbmT7kNTygGRJFtkNPvyqyq5efWx",
  "key9": "zYwPTNUCS1vfUXaoN2TLoFYLjLj7Y4suFyEayudy5BxfxcZsbbQJoSL9tJem3V2KJZgmR8nerPGehvjhyse4Sry",
  "key10": "3wGai6BxeaLUuPfAihE2mpWDzhXQT8Zkz94oL1YAbaqucGHX7sY9TyF3CqLR1MhLiJd22ZA1BhmkRaALFAonrQKA",
  "key11": "4xPXUhYdqouyr4QRkEHAiXq1t9izBoyxxzDij8Jbjb2gDk8azP3jRFNusi1yN5M4sYRxxgBifPYwCshDmht4Gxra",
  "key12": "43T7DqGBoRLnnwwQncBqhZgFe4cY4oSsMF8YSk43e1q4Z5ACzD1NHxuf6fWkMNHj8aYNWghoKLx1rUTnjKXZZYCx",
  "key13": "5pwXheEuUf3Kow1SAYt4DnmMAeA8thUhKnfUA8bN3J47oD5wgdFYc5b46Ndj4SYppgavRX9s6xj4hqDW9tuJyWzP",
  "key14": "2GmBN76NnpoC4qXEKz3T5KvULAKAY3NfCduJMvAwiCBMLC89hhdvD2vDHtPXV6BjRGz1tdESwq6fKH35EJCFnKrt",
  "key15": "2KNRTtZ29GniwPSMkTL9gGxp68XX9EZugJxBMnHSUyHb1aSubCULPGYKUswkn5VDZfk9skRrkDq4t6qCAmxeHoiz",
  "key16": "CtuvBnZmwR28KoJcK8kZ9dgtoQRbEgmbPhZpAw6NKQGtpE8tctKrkeYHhrqTjn3hzvuSize46vabrKiZJKgCKZ7",
  "key17": "3yMKM55yjNkSEGBh4hJJSFebUPNCbLJ5pbUaLA2HTEmGMVwHMMZYNnYq3kXVJYrooLBRKJF7hAumRFQnYfuN2LDC",
  "key18": "2X3884oH1kEY3rRagKokM8yGKDgoanPdj5gkL8LYQJbyKim6ASURa6Au1PyzMUv5BqaF3rbkydrsrH2iLuEyY4Kj",
  "key19": "3bCHTUKCT5v2s5TrHFamhrtmrdBYbGEcZtL2YvLenHnbP7cprEScmuqUQgyYoCyS1BWjP2EpYtmSe5V6vNnQbyTV",
  "key20": "3FHqv6UCG55UHtnxCZnTJjeZTC9eyY2MsaMtAxDqExpVmgBesqm9YXzJEAU4NSJsG4p9Vhxrs6GSzDUoGhvxBU1H",
  "key21": "KeK1BCgHnHutBhnJqDN2rSEtm73vad7EEdVBEtyheisvP1wZmmBbUTxUseRQAmPNjhsvjSpvaDwLU9V6tzRNk5C",
  "key22": "4XkUJwNfKXG8yyc24Kucisvso8x5JX4jEKFcfbNtJnmTQXxvfAX6VFnPZqNDEdFkmEoM8FAGSGe1AVSVT9e6Fcp7",
  "key23": "3cq8xKArtjvJULyPSiSjPSGdySfzWFYXVMh9zjexCLRuwXF697DfPg2PL6hMjY9EbNsKo4kC4Z3tuHiRKTCsENjE",
  "key24": "52P1bZdAAZgpnXDG4J8zNDX9TRxXeTv3Wrgo7kf87mxV1fjTMtw9JAhigiJwFRXChYQLg6Mpe8KikE7xRWFsMNpx",
  "key25": "7LJ5z6bELKNJV1tFLytQocELAgrF85KXycYUWfKgGyPvN2YF6q3C6n7JscY3MdJXwkqmDmdjHKw9u6i14ETRfYv",
  "key26": "3JvH6ChNbDpUsq3LE21CguqGeRmPSQcmJV3JyNVPCAvb3GonYggioMtedM5vfUYMNWmroPDBb68nRkfNXKoovBWx",
  "key27": "4Awer9HQbejttmQAdjgXfozPxQxCBbuBhkFbiWdLWnZfghGKgHFZh2ANrLxU2M1npgKHUopudKZo5d26YVNqbkXH",
  "key28": "5Mza93fHTmCwNd42iXcm4NM36vWC3GKVai6zyvMP27xEMQPkkTiR1xmBuZF2bKvsjy49dS3V2VPfgjfpBkq7XyeA",
  "key29": "366NoYJP5jvT7Pg5EzCJvAczuRZckJFjqpts1nXjgsB76A2ZGSLYZMdSvk47muhirz9DkvTW5XG7VMUtTkqvorns",
  "key30": "4wsm3x2Lu8aTzGU89zDwmJwnPZChcQFXeMPiRp7NuH9m7G5FKnkNkTiFELajZUhBcvxAN9GeRpyWZKQyrVFqu44s",
  "key31": "1YDYx8r6UnZ9Ntua8NxHAAtZ7A967xyHziZgSCwNpVojGvkNAEpX4QkKPJdDYLGtMi3hMkSs4WMwFFURM95Trrk",
  "key32": "5TqZyGtV8HXmEn5rf6csUTnZWCpQkUiuQCvPJR1hApkDZ2PgGqQvT81JnZGEqz5xwYiqWxTNdQYzvJP8CsDY4of7",
  "key33": "5TQ5ZJ9dvxX7UxnrRm5Hvngn6YfcPiEoidx946r3MKvo1K6hjKS7Z9gx9dyLqfDsgtjn7MdAZ2ov2qbkM7T7exig",
  "key34": "4esZKk8n9uvCasKWkEs353k4VXKZfehAN7yTwEi9zjVLUprwoTdvaS8eM2SehxRHAiDYzXUb8wQt3QFaYijhdrT5",
  "key35": "4yDpiqmiXWqqr1U7QqnxdLzvMReaNqREVNUi5Qy8ednL1T3UTmk58kZ5zjU1fApZppaKiAodbiWGaBgV5wtNAiYH",
  "key36": "5pxai9mKKbFyvvMUbkvdMnA8NCJwvzPEwBpP3vZMj5yXx6hArujQDTXhjRuyZNo27oDNZqa7FhL6RXzVFKbZF1vM"
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
