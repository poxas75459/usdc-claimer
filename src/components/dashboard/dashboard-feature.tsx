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
    "2TfsGJsDi18iCCpzsxdonxg4vm4UUBfn5ybLYoNDbV1BAdi4jBFSeEmyH9U7ikP4jHiZD19uVaTUCAsN25jsoVs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGVHArLiYM4x2Pfg9iY1F7avtoLoGVoUv7Cc8VYpEiwtvGjcAxVRYeVP6y7SrxCjhPX7249NMgRhLPtMgF71AP2",
  "key1": "Tr5NfedZK7K7PHNEXrD1gEYdLo89WR9a4bBTnzNW5BV3tJ6FhikmEZv4BMwnD8iZkxs81H8G9ae61sjCWQ15AQ8",
  "key2": "3R4Dre3zrak77vnLa2i4Be38fahpEwa6Zi2Y3jsZcX1qv2dFD2T954bwZWTixauGveRrW59jb6WuTuA13eSA6p64",
  "key3": "3A6bqreCBQVJqBb3yGD1UCd1HypEfZyyizJwuUj9yv8nktHu4KDHh58aqeVNGRTyPXnGbL6MgNceqGATxhWNa3uT",
  "key4": "3u2y6koNFAkWUJGEjf7TGPfiLDDRRdYMbHtGvoWhYc2vVaPQqnG35WVttBEydUJTVKdeJBHZhGcoWcb4isfiN5W3",
  "key5": "21uYjHHM32aaaE4LazFaZyVCpPq5qUYcNPWTT2FAzbsw7gw7pEpMfi8BsRHf4HxUS5APHKmkguU22bwUvn4mS9Ak",
  "key6": "2zj8axoTy5PgpX41uLeSz5mNpk2Zs5Y8ieunHV6i65b16Jn8rHLY55mDfAskpkuG7Zmod6UZbsyPhzgycBQXH6mf",
  "key7": "5BkhQsXTsiZ8PJcao6eXRnHponZ94MPAqf6x27AmCcc47Xom4v6XBiaCKSHqabMS21FSJxtB8RXwNs42hxtvXwPW",
  "key8": "4v8GvRtnbY24jK3UF7rgUee7K5zk8JHSVaWi7wmfEG4DuxccnDCbea5g9V5NxtT6s7r2QV4o8DeZ7TR1dTUepaSf",
  "key9": "57PLNLTCyk9LCDsfhhnjdwJtm9WQkVGzLA2zE5hP31h2HuixMYuFdamUo8FytXu1efYQN8yF9nAsfv1Kv2agheub",
  "key10": "23QMvAxQzmQGhUBwjAK5rJpNdcAm1Y9dFzmjjfAfv2B2EnrRZTPpPAxaBDdcqBqQcgFoviBftEnRerSDeDqNB8Ba",
  "key11": "37tpkHxPcC1DRBHSJ5CPxxDvp3pmUE1kp3AWum3KyUAUG2KNVF5psoz7U2y4n6ZBGd1i3cCZeC9VYuDZQkLGtEsp",
  "key12": "5PzB49uoi98LwEDkcfp8KHtaLmTp8v5xMPawxJYd6tu2N5Exd66cyYAGSKJ2RyKMSsd6HEWuEX4aUt1dFGgmmGwa",
  "key13": "4BZxbD5xS5GNbmPYXEC3WQsYR424mc6y9n2GV6cmtjNACK8d2F8hEKULsUjX5mKUnG74SL9WWkfHoqpq3xKtYK13",
  "key14": "3MUjBJpSboDtjChzHC5oMDBtDkzCrbmn3mzYCP5bUkRT7Gfg9TzEyJSLn5GDfpMXqHW5aavDJoGppAoGwzxziw6S",
  "key15": "3YrYmHVdeW269wmkHfkGT7VxYRtDdqWaK8yEgicvoxGETb8gWg6HjNzG9xV9m1mZx1KzFLfS6wfxHknWuhdpRGWK",
  "key16": "5BctaCkVpj5TrPDbMbnevz7XfJsxppQT5FP7A9731bsLb4TmhEPvzVebhy9tZ3gxVQZu5UX3xnu2efqCktgRwb1g",
  "key17": "398Fr5xrxYbw2P3nYeqvYruevMqn5WUTraRPLgd21snSqvNmKn9sib12H2YWZEq3yMrwhBkrxieHvKggVzQrdMZ9",
  "key18": "4z9y32XXCHttwLFZDqStgfEk6nLBBh5u1FahE4KP3rbfmH3Ynfw8b1623n3ubo1ZK29eez9UncAu27swAFrjqtog",
  "key19": "299ZnnjjqupPq1BKVynAXL7KPRxJXA5ZscKBTjQCySeSdiLazcDWyUnTfZfUgtwsw2BQDAWs54xuEXpHLEP7KuE8",
  "key20": "2bQz6yX9NCwsMoD7yejaCG4DVWnpSqAauPM7KBu3aK1Bnwyt3xx4SFH9btWYiAkM6B9fW1b9aAkuhi9yUo6P8Msn",
  "key21": "JzVTzMf1Qg3M446mqEiS9ue9oUbX3ZRXkYBCaUdyy1SdQ9Ut6TK4TZMYTw5t55j3MZJMQLMkLVahtaAkFQuTDCG",
  "key22": "4RcMXW4SLrrKEVy8qpmKKs48mfAvY3xudAfCGvehRBuUSisLbwciHmBi7QGgzuhA89FrbTHn3Yqwq2KYn3pseqfK",
  "key23": "2qYz9zTa3RHWMcbsoKS7oEifPhq3zvKHthbQGxVYEAyjghpZkpQnZDnBTBfwMQeKbUfACUK2K55vuPNB1J6VQrJb",
  "key24": "hBDisS34gKSqpWK33tKdAMbbCbsKWhKDAF35YNFg4odhXqHDY4gszSuzc1e1KdGu8Z2u5ksTMaKb8DEE7PTFuTn",
  "key25": "2B8ZadyU5FcLkTmfsfHK5JWi3y6XsfAFJY5VYPMi3XDoRdyN5w2Mis9WFJywPsEoAfJpc3HapKdqT5Q8ckuvd74J",
  "key26": "TQzV2ZiZ6xzp2nHkZ6rA22MV5hrq21unwZgdyjTKQMnMk9iPngucaMba4VBG4frLJon7MUJuhaWRfSApeKbEtTG",
  "key27": "4XoKtrRasBDfnjz1LngR42yWkznAaUbZnLnwGDVAD2vcHYRvnMVy87HLYwKXmmPq1V7YHWq36SUXnt2yqjUrt5z"
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
