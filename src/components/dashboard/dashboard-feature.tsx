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
    "3ULpk92TesAdeh835X82st1pifBKPNGQpCifpLqh2FSBEQC9hCvNNQsUS3f3g8YXsugrZ5R1CPb88TCYk4yJVYap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BE2cZ4C8TWzgZY4EaGat8ebvFHNr1ix59Ee1tD24vmSNRHAoK4ZG1NjbehyHWdFA1F97tumyuWLKbBszSFgL2m1",
  "key1": "3f5TSUjnyK9ELvtzcMKnyxeLf1xJXyE7TCgFw4MRGPzN5KNPAPwvmurqKhWqM8doV2Anmu6wtLYRewYjSFiP1Ni5",
  "key2": "2B2KRTUzPwTh4qgooQiEVkSxvhULEB9wC3a5QBYckNErKYthA3EoMdmKn4HyzS4zEi2afw2vRqzrrzqExeLqRqCe",
  "key3": "5T3kDiSAmujemmhNQXdFAf79HKeQVsEL1K6TntZZAffaYUV569U8qMWMZEoQiQffAUsFJTYncBdANxFgviKF4DRY",
  "key4": "3TKzttPVNmgnGtR2FKKKtLGCBDxgDyrzYBVFj5SLabDsUjpNxC6QxDAqzuFs7ChNjsdtPW2kgdiG9dCdGuaQKrGL",
  "key5": "vd1Dzrw5MsNsq753UjBVkc29vd9msrgdTCaQ5Qd7evYF2AqDqKrEvY9UWEQx3ok7271c6qCnTC4EKUWRRqsoijH",
  "key6": "nTKCMmmLgLaVayU57UPF9x557rTFiDKxTRUXvFy6eZ1oCus8HgpctaKuso8XYFbLCXcc7UQUNCh9rgUhnik6ZuL",
  "key7": "2H8hF8BUDioUeeYsBoYWi8LoTDCM2UZMe63kNwV6VwdrYyWTojqvbRNoNTiC9AdwJineXCbCihvCsR2F8Dmb7YgS",
  "key8": "3WYEixWrH4o7sn1eXYonNZKt76PhBWZac88HkXxNnZ9YMQyvpbjy1PBxwC3kX2gXe1hRcVKKEq3Lp2xdzT6mHDfe",
  "key9": "4PHZux6981J6B5Kvw9MuXyscZXDCnNPD6XoMCwUaHokjkmtjgqUP6obMFc1nFSXEa8n6iaqeMbQUWy1o86KS4JKK",
  "key10": "5SmBdBJWp81p1sCRsNjiQBRQRD1CYiwe4fsJkXzBqzhPgoL8rmekc1oJd3NXhmWbZVgXPQgNn4ivRVqCLnbdc3f5",
  "key11": "2J8mWBhYZcr9Tptd78vN3kSWjpLHLQATH6DuUtxNNg29cKmicB5eqetB32zx63AoeFh2g7WJrPurf8r6HfLB2Gd3",
  "key12": "PJmxD33CrXtqbN8CBFWanCUfmHJopRK7guoWzrAChL7x9u2t3GwM9Vg6FMJtr5KWHpbA6qthY1KmYrNDXrfSdNb",
  "key13": "2ezQ62QTaiX3B2X9tfUyxjhvgP2BzxFBYpFFfrPeDMLkFG5BZwEqEjsxALVz6MyomqSPz2YPzqTT9U82QqoWp5Ru",
  "key14": "2RdvnF5XramY7HhLKRHDdV5E8jFzKwrQyiALDmcZgPS3qKD7JgZ7kZCJ8vBDs49SpB93Uky6ctC12pMamLVVFGtR",
  "key15": "vjFhTMGDAF9EWuDkPmyzCCFsj7pW2N8vHA8qENeMpGwUjWuuV9R1DA86hR5MMRGZHYQfUZJv4UzWv3ayHcMsSsk",
  "key16": "5ZFZFuio58zakHfMbDbX3wKxCKtEqRmvGscn99wJRpQurWRobfMMkgfetHEjubSNpAn5X9GeegpzPdXAiY8wv8p5",
  "key17": "3tCyTF9KNdfRHA3MPfxjNFiiYjJatf6U1RofspK1fWvWv4ohWF37FEFRG6LJmQK9HZPXqHpo9oisomf9Z6mgjEoQ",
  "key18": "5gbi2uuEzyMNeiykiNCMivg6X7eqL8eMqwR2BWqNh4WK1up7uMyiEuzyGv1o4sT9D5HoLz4zxosJWtjEtYZcygX2",
  "key19": "5MRqqcwzLs3QNHvH3aoLjfvtqgde8vJyaQqymvfgab8xgTApJionvQWkSZTLjvH7F457xXCvqBmKvmyPggN9uDqn",
  "key20": "48EbcrSms8Z1eQa6Bq4WDiAZLhNKs5uodVXiUP5xjx1z4kuKfyTCVMVUuMXB7Rt433PkNo4NL9JtvXnfDzybb7as",
  "key21": "4se1QBGQXjVMPx1KkaywpHTR1t884xgbNd38FxxbgFWn9rws7W3Ks5JpmBs6WsiJ2aSu7zPvNdQyeEPKtf4Dx92U",
  "key22": "2r7fNyoh5tRKY55qiZsTTXKsxhuBdUfybW2TEWdgQ3ciZCR2EzdepziYVnu81bga8z4ny4vBcFBmfJhvJ7s48JmK",
  "key23": "2rcEdcWAVaJxH45kQuLqvjGLohC2WbDGWXqQcVQN41R8bzuWt9LU3HBD5TJyVuy9XL6ay394RCNjPVchvwQy1gDP",
  "key24": "Dw4KVUbWdP8S5bDRwyRp8n1mHK1TsCa3RXqsZTpUMp9ZXQ4GKFv72wCwtQKLT51pHZbLU8mxN5Wd9vcRoPk7mGX"
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
