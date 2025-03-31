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
    "DQQKBCZ8mXw8hNEkjBPFtD6qrJcDKj5JATKNMCqUpXkiPgDyCvgdTLZnUwp9aFv329NACzYV4JqEcgkr6FndMXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ip1LubVVGo1EF8PSvkRqoCLX9PKju3GTkd4zivzUpavGHTCwJT2JRGbWJ9AugiGEUrDs1PQBv2K43cKzrVgbZbk",
  "key1": "moukctbAuw8sX5G8HUa2SSbUzCnov57bikmWfhfBnpgTUW3NRU9ypsphK2EyQn1hMgWeQX4FtKmXyLhmxx2JACo",
  "key2": "s7AaoWus8mqdwSwnC9NPGwPd3BJnx9agfFmJLT3EMg3cT5AkhC5oe9odWzKbqMgBfLpAzZ8CBcmNXT1MJ46guri",
  "key3": "5Ef7Hb7LiyifJd2X9cm8TR1vEaRqpJgSGkqdjJ69ATSq7Ug1VV8n92bbRgs1SCtDEvdpDtqjkZz6yftREbt2yVuz",
  "key4": "37HxcWHAKEfu6urzuEk9ayyteBA1x9BAA2HUivgpcgUUMCVbwxhwB9sS8VYAVTjfDn86WgJzUPHujYDmzfkGprrK",
  "key5": "2RHckggaPxJybA9HnmoEBg1cK7xP6HBd2nHmZSXWjKMTXxHRndpm5huxj982VwXpcKr6vxDmn1hNB8Mp3u76MomU",
  "key6": "3DBhR7LYCs3UJgvKYwz8MXd6s98aeN9htmZm8VcZFkyamCw84RLCPex1trnHagVEt9ozQUkmCTRKd1E1ELivE5oF",
  "key7": "5zfC5TUuK23Tj7ApJhFfPJ4LBQL5ptgE9pJiA2Raf3LuRjptaCTwDxpicJgD3HGt9TwjYUXVZ4wkJCioE4QEEc7F",
  "key8": "3EdEr7JQLFniQubq3JxEXNxXiNKz9T5gw7kYN8qnmvQsujhRRyqwyyL7g8EFK1sP7x9juTnA1U5EVqqfv1JzA7Qx",
  "key9": "3WgGH7zyUn4Ko3Wmmz9pJBxR6EwJLAkb9JSzHSqxJH9MF39cyEJYeYt7ohxpr5MvuY4KRY7UQdyo24mxnpXVqHQG",
  "key10": "x4Mpx97moFu2zHNdCwgYnhsDw9fnSNksRvqxYtw9mFYFsqSnhGARviyYYFKzHNi1in35pvoWk1YCgU9GkB2WxxT",
  "key11": "3xUNuBUVZAgztFEJvsYCtdPyjunMSyQKsVHLWZGKAb1SVctStYsDnzWZyphGqJg8H88y8nQE1Lu6GE9ghAZ5goxT",
  "key12": "zt7v9UusfqmAWoLSkx5ofE15ub1ton1jwBMQ3MtvG4Y3HkKqEqyvTFiLMsguzc6teoR77ZQ97sjrEcfSigWRQ4Z",
  "key13": "2YBHy7ApX18PJWQG2CugRaNczgKUv8er9s5aVno23RZta3zfv7cPZQRSMJasCfT7Ztjf8XRtTA1kX8bHsyBV6zUH",
  "key14": "2eGMZpVuMLREoeziWAnVMZ1CotepvhMKoFBNhtZvBgyV1FQeFhy5FvwtjqPTa3vwdGUjCXJNr1s8cvVmbf5nAaxC",
  "key15": "4MwueiyxiKg4L7cYxADw1tjZtg4qreQvvzC44fUGqzDQGnJcyKMVh5j2kJwZD58X9fzxPkhSRbHUmA7du3fWGFSL",
  "key16": "2gX553Ae2MjFgy3JPTyEXo1DU7kTJmkGPGvUTFiFSvLpW12REToiiAf2Lt6G39jweTPW5zAVTUZjdew3GrfqeLqn",
  "key17": "EdXqRnAhLgjftsBzWXG5p7CkecE2LkMXqAizbpRF8SCjeoFjafaDLrB9hZALHyKuDJtdsfJQzn8YrkAp4joBMy7",
  "key18": "3EPvrB5PPuStXrkaqFe7dK5UgDFAqbAoSrXuQz3hQJFPcenUf1bnABqZY6TuPmmkaSdS6LfDftCyfcdC2yjZyAxg",
  "key19": "4y2hGXHNb1zuVoQRjbdUqx2n8MMxRdK41icQeEFUiFjsFqT89Fb9BmVfP4ZAMBGsYykT1AUXnZ83NdmpJuE4LaSu",
  "key20": "65gwTTDcSvshe5LrJBw2CY3MoQAVQAxXfE4Z6icCd3FFac1doBBPrUUqMWzpDTEgohB3eYSWvvXaEykuvw35mPgd",
  "key21": "2eXFXwATfqYzuQa95EUw4dXTf5K8kfxRBVXc5SkXF3GwRpgedRytKZc6NxywgYKzokCPRjpf8jfXXBz7AWidscqJ",
  "key22": "3BGcM78YoXvNFKjRwXP4uJbsLubcoB3WnbeTvZn9Zg8hGuwowdh9DmUXtGt4ae9pAN3v5CxfABouwYj6uj59pkL7",
  "key23": "QWK4RZ4CZ2897WHA637gD4GGrDNQtJG9m2Cxuez8pnPA5yw2v2NMQu5Mw1bh8K8zt65mZVhZaTDNi929d7E4X63",
  "key24": "33KHgTBUwFSGQujXRxBEC7JCLVTVM1dt6eHtDDeFHnTQh1dgYy3zpLwD3GrTQJzFffcqjMF4nKA2UjnLD8jmh2Gw",
  "key25": "61x2C3bxV2f8pLwdZRVuMEeyrhH6sHenVEzgZNLCNoKrvPWHyYpXqznnDHejZ3oRkzbWcoEWbsB1uVs3rqiXztbK",
  "key26": "3Bw6de3TEA9jr7n6RXf38C2dCwDQe9K17euFyfBxX7TGCEKJtTC7KXZpXaZsWgtDiEq66nJXMjvyoHxfajkQFWUk"
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
