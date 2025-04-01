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
    "64xquR1bAM5bsBasD2TijVgaYnAJiWYGeEdUqeBLSGm9A27wRFqRTcmzrtm297hHSBH3nNQyPp6aW6jhrLZdt9ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hEL9LKn3rJ4D7suuZ83vgYJyKo2khk6gHcAoTZ3FCWV7vAKvSNYCRdXn1cjctkQ764Gwdep7ky5pxvzKLmNAWg",
  "key1": "22ptBLSrdRBrvDoAek6CgvmLiTHtvxnLrSX7EMEa5LwRj1FdaLKfbLSY7YXM831afs1UKjB9t27kLw4KarySiPVd",
  "key2": "kxJctStnuHfCGi3S5HEyKCrGconFA5UZWPfeEkVUAR5t1VxmLToCaCE9bMcXr4CixYqiND8vxCnsysBWEMDQad8",
  "key3": "2NiCiLwUTT1oprxFzkUYjeLyJb4VqgdGCQRABgq6oCbrtAddd6SCsyBr15FpZmLcSRAqop5wyJW8Ac51zK6VuMzJ",
  "key4": "ZnRcrAS2Co8iaD8fgaRg5VfApyX9YDVhmE3QKkHouP6D6jw5KiZKeHoK6dxm9YSYsBBWtvMc68RBc8cKtpkefLe",
  "key5": "LFSuKK5ziVJCyd6uRCiNibij7n8GyghAykiXYw5DQyxyrE5ejrtxajrp6AVF6dTuvcvn3AG5vqUCTQ6dknKK4eN",
  "key6": "65xBbEz2MVFdoPENNdecSmJZK48Ts9W1uNGNsinuEAfANAevy3AmezmqHJBYUruXR6dzKMhQ9wT7bKDy8km1j7Mc",
  "key7": "4NejyWpZkn7gBvgEZD2VUx4GGyPA2S5ySiAGsvrdDfr2K5kA5NbzH42b3KuUzs8hntuJTeqSnxBbNKtejKuUbgmE",
  "key8": "238q8PybGQowQiYViU6gXpnrZ6VE79tEVQXrzWAfr7REXrhzVGJXp3WmFYLUBd4j1ct9Bkmo93koGyGU4rDnk46U",
  "key9": "5o5UGDgogaSUS8Jxx1dE9m2K4o5stzLZmJMwcMabWRbHWBF6aJ3P4YGZpkQBpuiP4uM3GQTUhoq5a59fxnVz7teZ",
  "key10": "5BSNNvtQPRZBBET3EmXXrmM7EfMvvV5cYqgtQVSEQbLb8iaudiFZfrjyA3jkzwt9J7uWkUucqRPAPXKfQQtWbqvR",
  "key11": "4PVU8DVwSsuAgLXRXxUyh374JjxA4wwCsiF6Rstj9ngaxg4Zq3Mvm5gad2ZqNvfRXEiTwqsukZhVyAxqK37QXSMh",
  "key12": "3wtaZPrGzvAq3gdAjuDDRFCCVoWg9z9Fq8LLufeWGEFhzkt3PgCzpR11JVFNZ3wh4P68ay6Pswuex35Zf8qCq7UX",
  "key13": "58k6wft7Y5CwsGjMCKkkSXXf7xPikoTXhZtiXAWZEoLVvxR3xHy7XauyWd28tiNpfU8Yq51yygxv6tXu3jX58Fgb",
  "key14": "2PQ2zVfjGse2QtZR9emLjXPaxkovXXd4k9csCTuaLc2xig4Tzt5FBGoQ1Vwzn7BfniR3whQ1f8ExaRG9mL27773L",
  "key15": "M7ArSfMS3gZqR4fAwKNsQ6fDGcdKx5XhUamSmSt3HMJKevijrvPaV6BRyZ7yZp2UeHwJpiHvkYy31b9DrTK67KD",
  "key16": "2vvLXSvyCGbA4vNQRkqMYRh7c6Y2Uf2EHzCEdwY2UkPQg3jwn2y637u8SYE2gH7qTgqjqQbxqZP1fi6mt6o6Emb2",
  "key17": "5nZhKvATye7ThYgbq1VJxHajfoXy3Psuk9BsGR1tBVXwEfyHyeGzBn8HgFzKMSHzg5DVw1eAk4gdEJvN8ZMVp6M3",
  "key18": "5S7B39L6oPDe4z8dS9Ptv9ZiURBKDTMgbqTQAcSzNJu1EbwmKroQDH55iahTB3fk42Yx4G3gtN9rRRqCfujJXrHe",
  "key19": "mVJTu4BznMjS1iuVgK4RVpudXdjuum1up6DC4xSQx8H4VrkfbGcTjv6NZPt4iVoU1QVpHE2UNPH24UJyTjwGZUc",
  "key20": "24qEGKGxNYiqmEavMzKYWfQAdkzNUskJQe2V5knobma5vx8tFnXhFaDw4bA98gt67wnQRGQGxKsfeQ2i7tjnYoyX",
  "key21": "4h2WM1n6eqtYXamMG3KmQoSPYz2KNFE7eZyQt7WmqhZG7qC97NGdU3TATMbdR4PyieSWU1qqyFWyLir5rj1y3teA",
  "key22": "3vC5MEwVwHb9etWehzw8xspNUXQKV5kkSSML9CpZq1XwE3mtQamtHPamoKz7oWD15f9PyBwZ9jM73HZvGqskrGoY",
  "key23": "3Cd8tGPPpJSs236sS468bfkSf8P4JbdDkZ5nZiv5k2DAXxTWfWjvJig2XKTaXN74yp41446Dx4c8LoTqdL6b3f8H",
  "key24": "5viovZaWu3sKQTV5FycRuAoVCjH86vympo4CNNw5nxNuAtpUwzQdDx72rzMA8NzRT95wY71twEHeGqNx7TK6Xu5G",
  "key25": "2wrUnffWDmfNwUBGoWQyPyhAGx1ESkbCiARKxRMMv3PK5VJ83sLbnBBEe1E35TwLCL3nw2PeUNjMbK56pknWLXuD",
  "key26": "imsrc1WyxCWVXbSqsLfvTykVwg9ZW7PFUe2jFzwuTwKaZYoVuhTWxq2DZKchwnWXbwHH2ez7k42tZteJidZuBT3",
  "key27": "3cdH8954uieVTG4zh5VNcpnhwyL2ij8ZH5vzicwdcq4shzxqZk8dAsEzdQPv4vYAJsRurQFb2ZWpPgUbGi2zLxGA",
  "key28": "4cafk4jQ7wkVXPchzxRuwHyYkqKFa1AgYAaq5UmpCN2LGDr5rWhgEQQVovVWtk8jBs3CykLfELXWorowhoXxLmCX",
  "key29": "fbQNZKqLxh5eNUYHMiUBYzvkGYfcVWb4Sbzjbsp5eFptQfxijhUjorhoAx4B1oyTHnVAcPE8o1dvVm7eZyKzQVu",
  "key30": "4h7nYP3TguWd67tK4j4p1UgmCEE58dGSPCHMNdQugowyJnDsKXvS73pgYewZYWckkBxJ339FUqGBsFqLfpUp5Ns9",
  "key31": "1vkL6LVzbdm9VrFWJyg8iBgRazCak68seWPrBh9FoWyCdXquNCgJQZmUpiNA1JGVxdCUNWi7QwEiG1EDKFMD73T",
  "key32": "57daZhNCb4872h6Rp7NZqgnweQ3GD7FYStv8iwUTJzVvXMbRKjdQYU8RhD2tJb9xp3s67sADpB43kn8Vc6WNJPom",
  "key33": "3JGLZ3YxMyKwdKDxX6CFLZYzhusiFPy8XpJeDwiVf1EmVRzW7TNYEc9MsJBMVYV7DzJa5UqjuJXfp3Qpb9tZfEdN"
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
