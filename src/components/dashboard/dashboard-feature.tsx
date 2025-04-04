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
    "3THmvWu52npNZ8VYeyN1LSrLReUJmbiNqB37pywFoKhEe3z5fDVsc28Chrx6cXhJwUeHY6N5ZQAeyEzMZCRwaKvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AePPA4uk7ZrwYpYYTgYPFJGKt3dbJp1ycbKRDfcyZFqRPStTw7MS6wEv6YPGxTZN8KfXbZ3ZHwFjXamB7mSx1qu",
  "key1": "5yCw73sgrt2p9Wn5HonNn6ZQwfHZWpJrmp9vN3b8rb9mnEfHi9oakTZB9RD63q4AELcVXbVAz6ojbugng4V2xup7",
  "key2": "k2mjWvLYRZXCeNVLb2NigYpRNG4XZQ47YRZx153iXT5RCTrcSJqikTxyGuwZER73SMAvwLStjxeYKoKQymyHvY8",
  "key3": "3WtcrCWij6KukRoSrF43w812yhD4TC1WJESAQqt9TmzMSs2ZfbkvZiBaZoLorGfmbYLWj1Xf1heUDH2hR73m5fxM",
  "key4": "5nA6zY4rCQqkK8xMsdpaMGiyjWSiwaiQ4ZE2p2EuUNr8Y9enV19S3UxJdmuAKHUemgZmMjwK8AzizRVuE3AXDckt",
  "key5": "46PX3p4nDcpPnE3ssfsz9jiTsHjaTLNQKc4sqa3C2oVhLXetb9oNUw1w5oxE1UsjuW9LuWM1pserKZ1M3oHbqXV9",
  "key6": "3nF6BMFLK2P85B74UvwNvyXDxZ5ppEYUp9KF4LLmEJw2nDSaXBJWczGqReszHu4cAZZoBXKkM9wwcqwijKPtm7WH",
  "key7": "2BDrUQXvCy6r9SjhEmJyX5xPSuZ1Q8z8RhygwDYr2UeqjhqBef63E6RbHjfRTj4feqv1xkHMVtdy3ehRfp8924oa",
  "key8": "3ZfsT5o5zNAqx4nf8Kv4DQUoPkRSsZiT9525aG1euhB2GiFM7q7tB42UKgmZrKhfqLhjRAVxuwWdramsA8uzL1z1",
  "key9": "3za72TW4L9wm1QS6MmHmKUHEQ5Z7EdJNPX1oJuPp44u6k6hMUiqMKfHJTJJxhuc9EiD78CYDenjB2w972EAXVXUg",
  "key10": "oK6DrJ7nPb9yiaywqT12zEPWzBiAqHd9STwy3PQzzNY5FE3dWuPnwKh28W7icaDAAU5RzfsWV9kihM6V71Da29Y",
  "key11": "4ouj9B9nzKsMyXYxHG3hf4VFF661yL42hMuLG6Bgpg1xbTyFCoXdr3cfG3orookM9NU9LQGRJVJaMX1MFdiNdtqT",
  "key12": "4s43TQ3TjNqsLFEJK2tDe6GcZkJBmDpB6ybKunyHhis1zV6JTfLszuSD8bENKU7WVuEznCbZJwyuagkbaFAYoUyZ",
  "key13": "29WUiHKWqeBZcD7ZLV3fwP593QS5PgugeVVzEEGtTaH6csJVaFxG9Yn4nJYbka4tHfd2TYRrFQNZ59gEa3uDCh5w",
  "key14": "3wP24mEV9Y9cJhNQBqEGkWMzshacb4R3CJFc2EqBP7RDkfFpo6RFHRqg6Q9rvML5vzdCQRP1Vey8URXictYDXMAR",
  "key15": "5nR5irAfCDoqJNYm4rZqhh7t8ZmB7aJSeXAB7Fcz6UT2dwKdpNTR88625sRcvByQrb3r5ceHL3mW2T3gEMwnxBHr",
  "key16": "5Wj8bp66ksc9uQ2hqhyCnnVH9ionyMxwYKN4LsSWLzAMg1mEGM1G7djVq3NyD7PSuiJLH46aLpFMWdNsaaK4DFUQ",
  "key17": "UfTdWcbis58XEA3sY7Vz5WJQiaftRHJajiWLTo8wFg3wK94ckWboN15HdspEyarquXdoPccVPfBeVwCjLUszhwH",
  "key18": "64ce6Up74R4Dp1i6vajn2mszQoLKHE3wP5BoHHdsFASdjkN1Cx3VLjA6xeLv4Qox8Dw9YhTWAkRBwGm2Fv7QUkg",
  "key19": "2BkBUDjwf7qdHSevf9XKJWFBtCa1Fyx8reLN1BRG6QAZk7nSm9kgKgkQxgLLkQdK5nKDAAchjT4fuhYpiYFfiZ4s",
  "key20": "2ww92YUicFrHygP4CTZ9NCohYLWas4XGmK4WNBZJnkevLmbTPBwMuGzFw8iAZjpAqa7w5j7ygmcgNjCGtES2nmex",
  "key21": "2i1S9BwsFfgweR8LSefNsmSZJknu3oxLLnD5yFipJDpuF29PTcDAee9UTZVWBScGweRTKd1jxgipJ7QcJJ7BQ6ca",
  "key22": "4Bu5E3CvBThLr4gx4sGaycgwypH5e54uhX8JJ1eunfG5B7rX6zairML1CDR7RJCHVK4tqH1cRYacJd6HJzajjuYQ",
  "key23": "4Xe4BgYYM1Wmx86YeLUeu6B4dmtU63hJy6Yjr1d9GcXGK7UsujMv2rUpVYCeRQvA7j2Ux5V2PWYW7R9V2kG8P1om",
  "key24": "63g8CAcugPsmRQ9MrMbQ4ziz9i4NqgjvPDezxup69riNNjZt9XGP6UeyCsxpSZiGLdF8k44ZQ3hQzf4c6N99bSNe"
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
