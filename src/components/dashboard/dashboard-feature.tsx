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
    "4NejBFqSrvu81pjjf6X5cxfMg7rhCsaMiXxbipELtY4L21tyNi23ogxkU5FZ8dkbz9QhT9U2UqXCQphEDy3CBueB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9ckJnahteWz9UTW3dL4qn7nACEH2qx4as2M7Aq7qyvUBxUCffjqAnB7TbX5y9rx7m8mySofWYd2ecuCMCcayon",
  "key1": "4yZJnvEkNofuHSBDuPK6XmNCbfb8xwTeHTNo9yRrP5a27ychR6n7M2Jgvm6JWU4Q5RqgeYzQSsB4vEZuFa7xHcBB",
  "key2": "4N4cgrLhWCcBRQyPZidXM69XYpBU36p3AWaSqxatrYFBbWQwh7hQ2Rh5Fy22SywURNyfyj7JzpVMDWmwo7KHioNr",
  "key3": "f5kJ6PEhN4bayayigC1jV2qtkpQX5zantZCboEgmKaG9Wn9QSiWrbhSuC5FGBL9zceHUiyG3aP8yFKy5i5gwWcN",
  "key4": "3jicbcVBXpSmK3TycMmuJPTvoLmYLybra9UnDAS78d9NChLWxcD9FupS4RiV8q7VwqZGTUV5jz6k4iuqWxtSb3g1",
  "key5": "3pdpMWmuqMcETxYx2LMTsgUF1czrro6afq8ErnMsVVvcuexcNjdXzrNP5KHNeDjAf8n8ck4jdhPENFEAknwDumRA",
  "key6": "4xfmwt6BvGQNhup7qZ6beWbd6QjCLTw8z41SXN6FDQ9E1VqCnEb4FCFpjY8Wg9vgBMYBoCMDmuTq7bMK8QiCvmqq",
  "key7": "w5gPu9RcGcbDs6hwgeMaY2FuvrFQ68iU3pi9prY9DYJk8tKzFX1HUsVHGMxraLoVQ78Ruquusih9E7aHHQM2GLT",
  "key8": "57RuX4HULmSpWsNt8AngarWj7GRBpfCz3mJb4GTu5ctPbVMXNjSCDRXv2i7nZSYZrHTomvhvtmmJCivwZgMNnw9p",
  "key9": "2kNNyvxg7RbZBGN9wBYJAL2bfLw61cZojUMWvLkhnjyB2SLqi9ZNbezwtFw4gcvcPidEQ3UCWjwc39PpFx9UxrXx",
  "key10": "3LceGY1UwZWVksnQTHPLEAxZnNFzCGNAjX3kW6vHpbwj5hGLdF7NzyMgy9puvqu35bQMtKwZsTYfYSEwjtSwvgTr",
  "key11": "55t98TFQ5LhGTueeTiZAtACDbzFBHYVzGLiF41qWkbimvFRMXahGQxU7psErqU7W1ZMquhgeGjjRPEDGqaarzN9N",
  "key12": "2oD5xc7N76y61jrDqSCrBWdUEmr1CAkT32jDdrzdumSMcEDcstHdPq7GRduQX3ZYkvP1jMmJkcVx2P242efMYufT",
  "key13": "63zxjJ3cVrLPESkKn4hvMdLibXt27khhdUVEK8FsBMFbPn79wAE5KPM2vBdsekcyJqspH1nTQXGZJcESYNPmDP1F",
  "key14": "F6d1dJZeCVJAziLfMvmxmPXadwWFqHBDCahbxRaouNemwi9M8zQVWWtzqRKcons5zdLNbGgVr29coB77hquK4nW",
  "key15": "35QFjqE1XeFgWy31sdgJGLgC65dsLykqwXgUoKjxtpPs5FRgS1AeQZnR8USVmRaEZr9iTvkBwmdpW2oChMHHoKF5",
  "key16": "4trdD4qkw1CUHwv6hfKPucaqWqxp4BjL81LQfhDkCJ87WEGCJTLf4qunpSspLQkFY6eXZhPBjBvLJVhh6kAhGndq",
  "key17": "3LndGPsLzBYypNBrViHo6vpapRxjZPYgWxveYUvmMc2B1UtBhyDPAKvCYQFBW2BJvCgLQ7nR2dbw1eYtVcwGTJWY",
  "key18": "5JSDHeyGdrCWaWfTB1pVXKkyXkwvTxyWC3FiKKnWT4vAtf9FFa2Fx1GptF47qpAWFZoiidYSzUHueXQBJHoVejAv",
  "key19": "4o2jto77ZWcK3u6aRhTVZDwTxLEEFEif4wGpW42WoPMp9DfegXtDYp6bpvefhBCB3fUcuxLXpkoQ9kX8adczMoz",
  "key20": "RnGh3QocNQwjT7EQH4bM9pF5TamjThJgdJVyNMWaqVGUvbeCS6e9zt2RcMvZ951c7UNDS2QfmYcrYiNgZuoj76a",
  "key21": "3dVZ2woWZDqnaMbbpxwmLzQEHP5jGfPvTHcocdALzSENomts9RbYLcjpWXAQzyCiviHKrb8wMJKwaCWKLB888upg",
  "key22": "5Re92o7nATncVxR6TwP75wSS5rDSX3YRi36G8HESJdcZARUXFpzc9hcnBjDjTsw9wCioMtQgWtF3dXJwAgExixeF",
  "key23": "2WDP8QYMQah6XmjH888DyugZ3iVR7zyF9bT1yUkP9vNMR3yMiuXoBZQo3EKCzZEDMWqPSyAo69BfLU3Pv64cXrZ3",
  "key24": "VKn3zu6uKbEx87D8cxF9XZ68j7X2kBZ6TRKc5U9dyLU4Pxs8rbk9ASavpT8pUGajaTk2d153ye4Q6r76sH7R6kd",
  "key25": "2irF1ERdJ6J7RtgGdTB2h3qqdruTxUvhWvc7L6zKvBeB6d8fnBgJ8s2bAe2QBREXs8NjLHWCC4uXiVjz6a8jx3sB",
  "key26": "2KAyjdVWNFkG1VRyAi4nKN1wpAy5M5ZXRiAVyLEPUcdK23qxJu3S5VHxz1faxvK5hvSJmQAYsx9gYC45s3iAKVXj",
  "key27": "4k1tTyFg6ABgvUFYtuEnYc8koA5qiS9XJhSNjnMYyEt1BMokFXxQWQE2xhVPjzwmLAbvz8untx1v6uNHLgKnBDU6",
  "key28": "53rpcan6P2Rc6ZZd7gSbm3V63XkrTzRHbsBJGGYkTQ3EX5vqMzTLqPUaDJomTmq4dCEdmyXSbpU8AVNzMCQbr2yv",
  "key29": "3m7r4Msbo4KXtG5M2giDBprgAM2btsceDf6Yjs1ZvectBVC8fA73zSmbqjF27MWoVVHQTpryKE5zvArSvZkCgfcN",
  "key30": "e2nHGpsTcTpWDiPQ7H596waPgoWgGRC1ExdsNmM7rgY5kuSxPnQjJyT6kip4FLmusQtBJ2yfCDCNMk5D2MnAKkF",
  "key31": "3TeJ8D8DGtCcwdFsvZBpY7LV5JjvwDfHK5i9v5aqheBExi1dcMgrY7Sc6Snmw3MDSTpojKeVHBqZfEuyPjvbPg6T",
  "key32": "28KqtV94u8Cvyjdeuo7bV6W7vs1Xsx9C59esg7sTBcW5Cb8iLBAmyQChUs6RA5fUdYqQvPguLqWJZ1qupFY8eUe1",
  "key33": "soYkJy9JijCe6NSfzuN76YKPWPTrej4E5QT8zWJLiA9MMGZgUrSguCSF4iC16Ca3cTzR5NMZeuM82ahE1FyuW6Y",
  "key34": "3FPEzqwaTcMwJ4V3hCA7fnAuT6hUYPihyfM5q81yw3BJHx3APorq2uXHmTs2ibxLZoMLhJMaERGhYnQmJG4y6Ng4"
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
