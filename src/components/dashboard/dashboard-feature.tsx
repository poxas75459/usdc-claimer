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
    "5iSgiR1hCe2fNM3iWE283srSAkzKW7ULYmPD6qHeud1QgXSKzbEwitJb4DMB9BowCBbvkJxrxrV3YDSo74FJUNKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "338qWB7hN9QuyJczAY9Uqg5roMZ4rLiLnt7wjz9PQN9S4hAV7dTwCdHWsJDZX2u6Ehy4VVDSpG6vNp6LXgL9iEzm",
  "key1": "mMZuMiBJbfCg81C1TeaGyAUALBAcbGwYMcw1kKNw9emHB11S3RA7nnPyjHdnQZxkJqjoPMxuHYXAVFT8S4QC2vb",
  "key2": "4WDZtQSmqJ2eYBoK5zVg9XNkp3FjUn48hUZmSiUpmFboskMjrdPAWb92UJr7jJ4v3SoBQrNzCSC8fPkB4LwTk2T9",
  "key3": "2xPpsdEUcb715h1pttiRDfYKoMJAhGufqn5LLxRTWaznnocpyt9WX7ShTiXY77KWgkRbkjrpsnZd4QbKHaFowMkj",
  "key4": "2JX3uKMWcz9J2vuf2CSTaZ54HoxLPrHxhghZFLsLXBqZFLLwLgB7gvYeMGS8XG7wHWb1V4FfwpuweccSahooLNTT",
  "key5": "TC6kvpdWAFtuSuXSCm1fVJNmiSkYL9f89PhrroA4miihAcxWUyKhLY3J9GhAub1EXoPMvVwM4NgNcCzUztC7uPK",
  "key6": "3Nt1MmB9Vn32S9W64zUjQHSNCrnwv5Wg1ivLgAfxrSFyyiJs4B93bkeAVQ54aq4zSaTshJYB5vCiLZSeRbWBidxc",
  "key7": "6decvB1TnTKRn7QLGy2jXJnXPgTkL3uH49sZf11soKry1eWM3og632CKaKrCod1WA4gHLsy8VG2snVuBMXgqqka",
  "key8": "3VCmj2srU2aYPZ5v8NbxodfgAzR6rzaECZx9ciFwsrrxUxGjnUqQydHF2UzM9RrebxBHxiDt45pUDXhbmP9wbzJB",
  "key9": "2P6h9dJUpa5AgjQsbGWq5P4FjkF4V4UaVQ1eXLaND8QJS7M2TYAq4csSkhag8ybB5GY5x3B1vihoDatv4qpuaRzf",
  "key10": "4GGFsVBg7Vs1gRwhgV2aHHkVNA9mSfNJ6nZfZ3Niz6huBBiU6pf3jriG2ZtHxrexnqdRQ99SWfxXx8wdA2cYWi3c",
  "key11": "3e6TNdg3cYAjwDD2mU1Cdc5jGyvP863Q9kLgX9iszL7mHXPck1vsYu7U9zsJzvGmWd9cu4kK3V8QyKhfFXaH8RS8",
  "key12": "4gAKK3w9stKnY73AiKrGWHH1WkNy7VRVswXbZrH9HZ1qqQ4uNTXYCw8jefdFFrR86qk2ww77UAZVToAdPTqRb8pi",
  "key13": "2XixkjR9xd7f2ZKSaQpaKgFbCWYHzdfP8ZssY9bVMtqote8ByFWK2RjZuSWF5HbGNerhwXmth37EYY6RL73isFCs",
  "key14": "3pGTtipLheMDryKYwXtWmdpzw38wQ9CKBSXj8qAgFydJpYqsP8mYgSqU4MenHEeV7fb2eK5EpXaM87xx7zi8wKhn",
  "key15": "2U9oarfBhnAPDazK3R4YjyQq6RwCn35ScZgSuYGvj1zNKFVLwE6cebv3DEnjbFXetMHpqa3mQyLUCDknHMK9DhCf",
  "key16": "4srh8KHmRSXvh3EjPn9Dx9gjNWwxNej7BxYteZqFwBB1bPQi9X2fLXaM1tNBWpYh1tL5tVhnP8tzJJGx1xkqpmjM",
  "key17": "4nQU4Vz7EiLwGnUoyptkpVWWRgtqwnGgZc1h8vb3TdXofCHAvFp3tF3qYgA47aqX4DGBH1n7WSe2AqDZNHYicG6B",
  "key18": "67mW78D1Qn6Dw49GgMEwdvbzWmTgrtbKFz9GXZHWJ7pQrs5ikgchPVKapr7TfAdbM1yzbkfx49d95v4gBY5vpaVX",
  "key19": "KeMvsNkj1GxYzndFfdPHq9mAnnFQknjS2QP6Tz5V9KAWAd8N8FkQv49mfpnbBjTLsBoMhCCWB3Wd1oRB2WMqj7T",
  "key20": "3uJJNY7rnj9FdG2wznhzdvYUvVmLDYVyNv3Hk2CKX2qE4kEYaSiJMAZTEYytpuTYzW4v1Lm5V7GSoP2hCua5Ppjk",
  "key21": "32zT3N6HRKM1mucRgcaNk5FWUJnbZ6A4sWMBAf427vpxPwFssoygeuVdhwYfYN1uhxiAhd8xSK673SU14nqETh8o",
  "key22": "55nqTU4Gf67ZnCDbpwM99875NBAqM4Mbj9Y9XBarHpnN6hL2xG2oWugHZyHQwuQ2JFooENpE6hJfQGkvf44hsVjg",
  "key23": "61KdYEHe16JzZBN7Yuo31GGJXUgC1MpT35gRwSz9KJyJLVvwFmHeLWV24YcvwNWMkQkPMjB1rrTCU9iTskjAAHDJ",
  "key24": "NVPw3KDjDq7MVqUoE4QTx9T4mMouqn16U8RyavCFCprsLpW3xpcnhvUrWBPY3gcfyyePLRHxzWgvwSKn4MseQ6o",
  "key25": "5oTsQ2WwbCMRvL3oEqiMCasQqhWEC5C4DxTrWr5w5LEFU92DqdzbDjHPqZVkuMf51x49o1FqgQdGJABS72Rceoi3"
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
