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
    "4dHUnizKDce14sXDyzr2k1w6u4u3vbgLPUFruR84oFqc1zVzWq9jsVuXEG2pYxqWX57NoiFzrD8WUbmTk5yeTL1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsNtqX4ZDH7nUCBWA8pT9btHQ95RKsZCfa6PzBMhGH6gsgK4qvfCGBYSoSyhbiWzsGAjZqGKUJ2wMy79f6iiFWf",
  "key1": "2y1eh5jY8CtLV63B79taVw7NaNDu5YWkkfEArBkTwNhLTCPHvtFiQaftwGfVGzhRz3KEpbewPft6di3BFuq6RGUD",
  "key2": "4JWHvbfA49eHDxH4TmUpiV9gwU1T4n3meWapVoZbxtCAstniV2rHKUAJnHtVEzNNX9BAMUp5mB1PNAJW6wnkA5W9",
  "key3": "3uHYBy7jcviAakeRmdmEBde7ApLPTP76PqE9YYzxaa7rN8csaeVbhh6EW49n9N2uXWHZAbkpF9WuSTHaYqZyrmXR",
  "key4": "57QJTvKvPnNZAAQkotioF6q3JC8Linjq7pphwinYG5NdKcg2jn4w5fpsWDJFaj2B5esz7cL9KL8Sg9KzGsGvEBdB",
  "key5": "2V44D2Vmi2SDjtGN4RssK7ANvMvTjBxZWFRGBqf21HWisCb2iGfmLAA18mAM5BFTuuxuhoVNytkaYwSMeVEptrRN",
  "key6": "5wsKhGrnLyZYKGPMtQYSrJaAUrozK3rZp9QrNFvKU3jx7x4PxTTQLejdd4Mpnbf3au2bpbsqwKxFrLNZriyGKKmX",
  "key7": "4Qr1QRnB3xpSros4AZZAD2W6tmU8dH3d38bQ8JedSVUMqdipizmZLUvrj9zk5dq116FiFEyk32Uf2dEJosziPgMf",
  "key8": "4NPPwKsAvCQcg5ijcWqN961UYjiLerHDiGRcwh92DozZrskcgtLRKpj7sfTbupYneUVi6xvza9HzeeaXPUCnaSWL",
  "key9": "8mitjSusqkcK5ezMqoKCbBfP79LgS1A7JHAVvnFArGTcH9sFKDCqUqTC1VXtB6t6b5oQ7SbetZpNYrWAPUXZjja",
  "key10": "3vYUPcS1psYcV29vpKDebS8upLQe6uosvaRk3iF4JHPR2AZieVW81FbzGVkxGYpLqFy9jQtqQkdnA3TFUN8F7JzV",
  "key11": "4gXLaSfKHzH5fRYp47Z9iL9HDbiBngnFGP6b8E1ogjwcraWnLnBsdFadpaDcAzerwcX4kv8ys9L4yQmoWRjgx7ZY",
  "key12": "4yF2SFjGdZsSx4kP1FCoLZr8LXJHChGQsWwqyESFEY6DLtfbnk4YXrdFy1Zzu1NkuENczWCX7nDdL8fL14sEJSUR",
  "key13": "3RaovzraffFsyyVH2rogjwQyBens55YVCz2xVC9XxKzxeBDSijwgNN9LUmu9N9pRkY47HMouqdz1MtEp445ojtdQ",
  "key14": "bgtvWEeFoCmhnVtL9dSYg3mAsGhFZb4ZmPJY4JiHxS7Tdkc5so1G42Yc56PkaDTYjZJGQLkQ4AoQ8fET9CJVPco",
  "key15": "3kTGeB8mmaQvEw9WTzVhGpVurqBGqYNZ8zM8bEeVNRTLMzDebbUQTNfa5swzqwd5Bk8542vv69hYddxyS8dVXFJm",
  "key16": "43KZCwQ8BAxbpYzgEKvSfHFW55mbWj4MqK5oPNK2b4ezikCWC5LT429egHwa7YS4RvuwGc8dPhUjZGwVKZT4zgbx",
  "key17": "5mzLt9pMhU8UV5FXzih8zukZLSNonRB3hTZxDLtuAsCqMJjYmosgERHDBFFr7EKLd9MMVjZWebPv9uyY4PWKbbDP",
  "key18": "4bHhzXbiCVvbqn513Mx8bPqYi7HB18C3Vne9JejLmLQgRzzwJg75A9SS8WHdttjYgnQ7AWxHYooSxs5dwic5a7Dx",
  "key19": "2X8iqXuqkBLXH4AdcLkZMfSqJ389Qk5qLEScnoUBh9voGwpVt9gXLpWex1m7gmEufjkA1FvSd62DSybrcLMcvYAP",
  "key20": "2ZDqGrRuyhqibunu4c6d3d9AZd8M6Wsm4nDaqfTXL7rZipuvRLw2q62D7beJA44C4oPU3RSgsdCSeRvFHFFMBxnB",
  "key21": "3ttfAQQcBsHJduV9hdt6ZZndBCdykQDbGJJcKXxYwKTcDuFvnvFtrHbrmGTCnT7D1cJ7pzgQL5MDVYFyckdAtAJh",
  "key22": "3HnJMDm5vneAGxYxxqMjY9R2sbEvm57FBtfokZgX1CUPyZz687q6AvFk33w8jAptXFhgMLz9Y7ns5vqRKAGLCBoM",
  "key23": "2D41vuXnxFXTAqNejyMcUYo6cx5SLEJzMHhKasyikzqvj3byuqrED87ECDKKs3fiCnkW5fo2ZQWjUi6mmtFqsk56",
  "key24": "62vpTLtmYL2ZBbFWWxDzaeHvLGMpXfqYB5zF3o6ySn9w9pSkPkXAfVX6Kx1GaptCMWexwEHjPgYaXg23VtQLJaHU",
  "key25": "3zwV1c2Yx2mfso3uDq7nXJtXQ4jC5uvfRRz6YgyDp8zmfJfNk5ynBgeKK5KAdys1iP7a9nYYgSnfgFwZQmcb86Se",
  "key26": "y98DmP82FjpLipscuSM2ZupZtVBBjWCo5vkUyALite6RwdpzM8CUSDg9y7c34DLCyXm4NFbDZbntnyFwXrxZRn8",
  "key27": "5CwuAyK1UeGfRvRqtrMpc7vEh7SGEU8xX5tmCM5aDVw2Y3H9LqU1vhGWXQy54QFvouCGR3vcbwTr6dZbC2hcyUs",
  "key28": "4bB8ZeybTdeCCsSVqfUqUU1G5NfSak3KMvSJHuSgANjjYGaq3iLLLNH3KUW1iCyL656adU8ujMxJESy5TDiyvLwm"
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
