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
    "kzbLqrZ1zU8sSEHTYa7oS5Dcq9ViqyepMDzNu2KBGL18Qtfbx1epLGwjvNzSncQuDpgyk9ek5L8p5Q6sFUjQzdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uM2w4fgzpGoZArJr7AevgTegjy9yuCQLyrDuv5VHZFFzL3WDxFb9bnSQhAKSLkyzPmvHVCvyiuvDd9WSoWk45Xa",
  "key1": "2DkjQCHgYg5DN1tcvohocHAPBCEcjj4KZ4CUr1d8aejqLrbx3MZLfKnnGmBSU4vYmU73WxgaEtE1QETbAeeCgJSQ",
  "key2": "P5XujdAkeJTSZKxsLNG4i9y62gWFBUcHmQwiz5QcsZtdWYff1VXc9e5s65tvRhJSKLKaNG77KPXfonZBBSCEZ41",
  "key3": "vK3QXAoQr4NGiuiMvRdFP2R4UGM5QUq5VrPjq8xEm8vmFu2EWojdJvpb6poy1fMboaoyeQHA7WGKMP8K1pZHhey",
  "key4": "3FGfeg7PdBoR6ZLVpdbs6pgDWfArr7PZa6JcP3LU96r8QJVejuYg6BpDALkx1ektoafWgtrtnmqHoQ77z5yZf1Pj",
  "key5": "3qmMbYSywvhwsMN7jZ6FwTBT7a6yPP397Cx7dkr3YZQ2R2s1qPHjSH3vg61Aev9gBG4Rue9UbvDFg1f6KMH4dsLC",
  "key6": "mdaV7TfemH1SimHBbaBVvs7zMPzJxUhUCsUJxbgcaasT3mJoJ3UcWykZhcPTnSkMe29tZfun4DKuPK8EmjtYbaW",
  "key7": "4XbcTd9kGoarxbaoEANYbhyASboRSQQvxS4V4NuJWY6nymaMJwHC8YUQi3DkX2qT6W6Zn8exaBjJcMfcNHtiiDYs",
  "key8": "gNHXqfDKunHuuyqATqnxqh6NjnnGHgrdtHzaGEyHgWMk13sxUm8RzSSC7deAj9WuA3Sb4DxGPQq6NMx6bcZMBhM",
  "key9": "5o8DHMsBycuAdHe6H8L8iXjNo6ekRRd9uqbnYEogZMwxKBu71ioNo7yBDeos5Te7ShYFPRoQYCAq4hTK99sDRwsi",
  "key10": "2jCHTiaJkfjMyXNmJg95BvAuYPqhRTxQ8DRBKHnnfB6VonTvXfG9rDEcdoK5LpPSEwXgaGYCbfaNbAeLoGr19Rdr",
  "key11": "4u8UrjGVW51Lippzo8XJB1j7BHnmHfE8PQoPuXTXooHfcKZvfkmu37bPThLWGvvKVMAu2wjhjcofK8pYKFpCkQQx",
  "key12": "4iRt1yf6KYH4TutdtR3gWHyFqr4ZQHC3y4YCTJyx56kmkiWMmooZDN28DzvbjKmzPAfjpE1tiPYp5N15Q1V17J8c",
  "key13": "64D75wkKiqKC4WuovkR9NYrciDBc9KQyqxH4xE9nMoQayHpABm8DcWpgvkeW9cssXgzH4Cmd8YRdAY6MG77gNavk",
  "key14": "3zCS5jnCMh374yfgRXkNodxwZN69y74d7rJCDcsBnKhStrxRqLzsnjfiCH69NWYVE9HGKqPkoYxuWqWiyGu2RtFV",
  "key15": "52ioBT95Ex3moGrcXJRtgfVbESEAXPnrDAfYM6oVBZVL7xLjUBDuEQ2CruQT1qdWVQxYMRqaCh9wHvF5kZgD4U89",
  "key16": "5sjt4oeVxx5Gt6DQC4b5TiVRjAiAqqiiptczfrvCBB3vWusobkURHK32UrMTjEfiWmeywiPEjHuoXuLoHEAc8ALk",
  "key17": "4rbPW8KNme4eUYU4VJANbZfZ5dGUVFFyngA9ERwP5CK6fDY6MHAc8CkvLV9ZwMyfRih3cyPS19rWXwnqhzyTZQbS",
  "key18": "2PgnzPFkvRARDYEnyq4A4798FJ9cq1eb3R23KgvcdQtK4bwZBBmZCbK4UFV36ChBqxEop2D5YTA7vJXTB57mfWxe",
  "key19": "57yGRxd39mfadY95e5yxWHZFgVp6YbXhrwLkF6t2wzuBuFxHjwKTDT7TJ4bWMZ1KmpvgMptCNtDdHRfw65pcbmkX",
  "key20": "3Nmxe4DZ2UhTrq6QqTpLP1RGs8cTnyHM4TQznMACJDEVJQGZBqxCJN15KqD6wEtFfi7AxPd5cVV9pcsBysrqWu3q",
  "key21": "4R92SgnNSkFF74NS5Eb5CqWCYXWBqX6Lhjzxn3ctS1jzmUyw8RrzSs2hU3RLEQdRHgAPfqf1Wxvjr9i8axUieCnt",
  "key22": "fhu9QHrYds86omDqy9Z65dXNxYo62We8nVv5NQRdoQYaW8drbSUiF6cD6tfP2kTAXeUbnuEqjLXAtP7WjXZP8Xe",
  "key23": "xc3J3CeN4AVMhJcycopobMojSRQDcULcUwg1CuUaeG6mzUKqHDvhwTBn9GR7Ms27t2hgifr4g3xGGWyxMwWoKVc",
  "key24": "2qZqrQi9owAMQTm17nRwQKR5n5KStmuYJTdzGg1GyzAYAMY2f21UgGRtTm563rqbhX3DnLFmvmG2Yp9fkrBKZNqN",
  "key25": "4grZf89C2MeE1aAYduXYogSJatvLiV5GcEXNCbve9juYEnZB3VvyYc5ZMyNQyMVZTF8i9BdeG2ib4sfNMe8D9oTZ",
  "key26": "5G8sja1nnmWe7TrsEYKFcZZNw1hpACV1GBza7RZn3GYtn9UHhi4PqGFLXXN62ouu2L8Gi2ZKETZ1UidrSxpNtBec",
  "key27": "rKdDvYLi22KB2PVvH9hsFsV9rW9yEePRZKjav45waSw9NsFEqBAt1J4b8xXF2so8tv8dQwtyDD7gfx4VC4oyWG3",
  "key28": "5JBS8aJJD8AJFJRqzXNghetTz4Riw4Qxyd1NM4TWiBb8ZoWGrdSRz7TSMx4fpkB38unVgysG7vmjG7T4EsqKwdQ8",
  "key29": "F8wHpUVjidwkHapfTgvWt4JqkmNZpqsueiVfwiRnqR23xfofvYrghuc1KhjxLurwoSbxoUSztx3yBk6QAi6wiBW",
  "key30": "5KdKpAzJzHTW4BmLsTVvFWVNZd8jTvDwXUdxe4t2yB72S7pK2b6cucgDhuCedJfBotULRZs7kyTYkYw6uavry6vg",
  "key31": "5xZEiJVY1AHToTnTXm3dhsi3HBqSZAvuEymLCvT1Pk681f41DrBhGCW9zK7tbfs8aPo1AdjpZ3JQMZBRUiKa5oeY",
  "key32": "2FzRsGc4ZRx4ewDGg2BcSj8LCQMYyVQPxc5bZt1uvgQBDedsMPoW4ev3UbgSAwcWPjYVGcK9uV71ssqyLKHYcWi4",
  "key33": "YGCBApYwiyjX13PnXGoz42NbbGpX97B4jqT9QoijTaZjLGxQ7zhmGrUx9mMoWzsLsfc3d4Prxc7c67oViWU42jN",
  "key34": "3KFE7Eohouqqbhw4HkkRr1VcLXshrf25J5ZcmgH39uwAmS9rGtX2EAPZ9YchZ1Y3xWGmAR7KVfx3mBoAVp4HjXkg",
  "key35": "2Abco7Dq7bTRbNDLQ4piD8wTbw13RCw5GbGBHXp5LEADvqFF4udKftYQiYk5h5G5n9NC2nDSN7UAKGHEJZ4C2A84"
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
