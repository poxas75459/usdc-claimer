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
    "271X1GDMqyyu9dtkWtjdGhMWxvSYzvJvuhHoMdmLYoxbDULQWZeBDvpBdTmg3o2Pqhp2RDz7B7pZVFMGtqWbfiH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDPtbNeTxxqeJWBnqmwbskCmJbskcKHaKKe2PK9efpHKQiBzNZHSsoS6Co55JfG6URKxe57vTr58yHEe5EwUBKS",
  "key1": "qNzBDPZsDs3RDYx7rLsgyQKNQhnyQMgjCxpf6yJtGrjkDZKVP1ZGgPgwr9s5SoQmaWmaQzUCYghsTDg86uc6AhQ",
  "key2": "4DMrsWMEQgxMfve1itHvxSXbuWetd8kqGdapkjFYCmrgGTHwLU6NjL5Zm5U4hRbM3UhKaV7JQnSpeBvuK2AS1uea",
  "key3": "3yrGSsS2aNnaPT61ctRES5UCMAu3HmuV7ntHkkj7r9hc538pDKNVioN8BAB66mkecrC9StAKjRzJTymDKGn2YJN4",
  "key4": "3Caxd5kNyeNDgWcFbAyEKqGQDnk4KDg5FjXccJzH5nkEMgiHnEoFWfpbhKXpy4G4fY1B9xfUhoTcXJTT7f8Bx2WT",
  "key5": "5YTJkDSJHzj7f4gwWXV2HvYJ7TXnuQTosw6rb3QHGDDhsQ7dB9r1sHfpe8YQga1wJXoZPNcgxy5M8td75uqsqNvJ",
  "key6": "3MKtRsq7RZBw47Zj4mrM35fZ3biiLCKH39W1DpYYeXYbbhqDkXfCkwRwnr6kZgwBCPMLJjKz9EoM534kQGyKB99S",
  "key7": "4Wh2fEqsZc6XCJ8baAN8X3hJ3Dm8B3czTHWioQvr1qptWVGuiCKprwzhyChfKEAWWgzGkizmPQBedMUHdfqz3RfF",
  "key8": "4qjF7pWLiC3f63WHZviMmdvVqVAtkue5yDA9Y6Yywa582zFSwkv57ZSLu6vcHz9RkUBikBshEWnVJo55drpeMJMy",
  "key9": "5Wv4zzF1oY5nffZ7tXCgHG3bBeYk27uzV1nm2J5s49KZ1pg13DReEa2FrQ8Mrp3yd4wFrucwYcuFxkGHQ4Se7TZx",
  "key10": "3ktLxD2HapfBxC5PSAEaGsg4qX3sLujMcTXjjGdFMSE8M1t3z2d6MHc3VtRtpo9vcMm4Us18FzTmGwiUrXTyft1c",
  "key11": "2kDkwJDEdFjoFxohEbjQfWL3hQiMXAwD9rVZtg9yU6PBBufdwgCNvar5oU6jnwZVQsS3nyjUiz9zNyARuer6BSDu",
  "key12": "4nvj8XVB4TGLTKB8Wc9Wks8RNQMUvtvHkSLYgijYynxtbJdpazngZkYaHuLGcnCj8L2y7aMYktK2VC6pPCqiEh96",
  "key13": "3fnshzHa7XESbie8aDjcMNEopBWWAEZWXvDXrMhh8TYzjQxaGADtn7nwex33EWeUUxTMV1VKhTqAF8rmsig8tYU6",
  "key14": "5JK5QgsQhTssdsSyiye4tSmz13BvH6iyDae7s2Tz5Qs172tJ1j9KFeoxVkHbbLEiN8o3hSdrR6xUfLKyhHA8x2Ko",
  "key15": "36rQmKFjo5ivU9gFpp2qNVgpSts9nbGKrNMdVvW3cph7J56LAdkaUyh2RfJG3j88oz9DwKxxcaE1juoiudUbBDVK",
  "key16": "5fcsVUCJsX3RB8xo24XJ5P3pvnyMakhQtSJt9LGLyC7hQ6P8ghuwrbVR5Bz6SNtoRV8DwKCu39R7aC9hDT9YU7fa",
  "key17": "2VbyS5E2MKXBj9R2yoqn9QD3e7xyQJMxQWsDQnvQkWF5krAE3ZH2iimYLnfcdoAhR9yqVaTedkmyhXzi3stRr8n7",
  "key18": "5ud9pak8JSmcduYaNC5fhXew95faDfbF9LfvjcjuYbBniTA683KEMzsQHkcKrCK8853zLHnxwjYBEEmF57Wrxeon",
  "key19": "21dg8k9hdeaS4cc4eHDPW8xrYB8uPSZrbYzMZZce6jtLNS9CR2NaiWH54fjN55m8BiYAHfNCqQf6fpE1Ed5HDGB3",
  "key20": "G2xVntxgXKZQAPQ5QaGkrSbQ9JNHNs6knBds9t5AVUa6GrrCFBEyuBzi72im8uo193K3N1N9skV6ZiiMcmzqPwn",
  "key21": "64GHoz8XBq6eK2NkV1XQxKAtM41JQbqipkxy3ZQ7BncGMgcnFE2YHDZ3pgZ1YYMM956kwGF7AtCEZLFu6v2BDnJH",
  "key22": "2tpd9CZMBQwck9v1mRkUFkcPw2dmrjaWTGjKmh1BRcCHrkSpXeFmRm7ZdNsTugY51KJoxU1iJdpRG9MXuVUuk7h4",
  "key23": "45ciGE6SiV1BmwgQ1sXJrEiBFYqHBtEawP7emDGcphLaDjzJLS6w32i6JnRwj8LoVW42xHGimRb25duhcdctJfai",
  "key24": "5wybx7ekT1TH2xPEHPFym1KWGNwMQAg51JvRLgqhQgxneLVHxwjn4JECEKHyHHda1cPaZtzNBANniqEeTkApfzRZ",
  "key25": "5Rig9GcSwRcf2cup9H79sKMhd2j9yh2oAyfVfAJwduqb4gorTuwYFXVixy1LZVD1wWC24SfYmrnwkSqN1PkpXtSv",
  "key26": "4eXHwnrayDy87m3ceuCM9MRyVRpkijUp51nms6rKdAtWDrV6nPDMce6bdv3BauErAzqpWFMgjMBjK9bX2qZS6WSL",
  "key27": "3kHwUQSWx67aNN4vsAUX3xddTF2J5C2JLtgvWcVvuA8b3sGHXNn31Mzu6MSLTmqhM6h7wX3auoLsZzZ2gBFnX94z",
  "key28": "3Mro9Rts6wPYaxMxXfwLDTjPrFcyDWXj8PSmFFPjtcnYninPuyWcZGS1GYE2XRSMtq3Z5S1Eh9HT9PL3KyeZoYdp",
  "key29": "4tJcPu5UxHzWAj3iiP6KP9a6SMy3gfT2hSybem2KkZHR67fUq9eZLpXVwVYTXeNwY6ZJhzSiXYtw57yxpvXut738",
  "key30": "4wVXG4upPiLHAzQ7YPvWcVaiWHUwjz62RK2J6WgP3mPYE73Y32tBJ1rAm18uL9UDay7MJLdrrVttZ5gQjxJckE5T",
  "key31": "2ASZPnrrDyeDUtqTqwgd4w2dREzJe2j4Uj9RzKJdxWssThapAPQkvEYDBN5c5uR769xZShjGmSrP9BNQP65eUSTu",
  "key32": "4exD3mT9Ktyo6YZyt1x9GM6qd5WVXp4iGfkX9K2m9pvQFk8m8VUuA7nEd8vYcgz3GJTnmwYQavmqyj8xdKdtSWKd",
  "key33": "662LmrCBqTcFPzZmPWryYPeaEzHxwaM42puU4to6qEq9cyQ9SwGJkm99iJJ7TGQuFYSGXFZ8M2ifsQUqR5X1M3RM",
  "key34": "295GxJhZ43etyTFh8u6keyjPapUfdyeTM8u5YDBeYSk3YvXmFdBPTeNpCzhtCC4GBSU3DzmYM6tieUkrkiU2qP8H"
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
