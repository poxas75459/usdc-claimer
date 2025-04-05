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
    "2D5sgpjwm3T6p1AU2dVoFMNFsPbbeggrWGqskMhXTq6hjKRYLcoeeodXuaMhGRhmA1QhkMTkCFwMYtHz1NYEDqTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCoVQVu3xpiUcaYugeAEbc4nak2aZNfvxegRUG19dnQ7RgtPaCSqDq9JihMy4bp7Mpn2U5VnhZEmSZBVS8NjTEX",
  "key1": "4zHs2Gf2WakhEYPPqjayAGFzXU8sbp5AjucgSc5Y3Avqbks4gZjCXuCBMH2Mq4yKSLBuMNKRBJabWc7vZEPz5ESw",
  "key2": "3Wm8aPwaf8xLpwEzcEH7Tnj4iEuevwgEAX7X1sMdTwWCw9T9bdxWpDYS6JvyUvX652yRfVQEk8PL9CSujTWE2Qn",
  "key3": "3zUN9uWFpfC7zoVZGRC5ttVoDpm5ELeRYtYwt6BiF3rnsethyk7H2arPGcWEAjrC1ZnUqWFf2MjShwfchmusXgaa",
  "key4": "MqNbpnmwjSLPwragB8tJuDusorJLyM2zouRi6QRT2VLUpiMQ5iqXtuLMUwJes1VpxFEWdPwW8oXKnzYuUygRVem",
  "key5": "2a8p7TsT3s3r9PtR8edJ1fdPsjMH8TsvYq5GeG8dhem27Qe18QVSLoeC65hKeuMuVkHjRU2MAdAayVfqdwGXiHg",
  "key6": "4Th2syRzBkBT51DQycdAPYGKgHSXQhTMxCHaQRNBmtke9Yb6G9LSWRm7cnSXavMEXsWSZiDEB9LMHg8Hc9QBL5s6",
  "key7": "2wvL8hsPqZ89ZtxaLhahCZizRGB45wZAoETMiqJhJzmbUbAfWmkAJS5ErvWR6uuzLfZ46ykM4ay183ip1cdEJPAe",
  "key8": "5EmCM4E1X3axYBHYNc8dDnEnPUVMa8r5zXPSjKWJjpEzNnMvyQkQrdzUDHe4mzzB5XR9oVxRf79YPVCF8kLBVzRL",
  "key9": "2PYJsm2xCmTsEwYjW35XKTZcLRiiW43Ykzo1pxwMAfh2ZrD4CmQX87WzQ7cJjrsWZY52MpSS2BzzMszexE6Phpag",
  "key10": "4H5nrQVDqzciTkYvKKh2fPpC7PJZuwMX6xK5RL8xPREo9PCcUx8yFRtFViRw9tFpAYrypLUXw9aiTsZD7HdYrdne",
  "key11": "4f3MtGc8DNsbED45xN5LjCc58GiFRQLVqZsQdaBvpn1kDw2YkhALfdVPXPrHmQTiCdtHpkGU3DQ7b95JjtgCzrZm",
  "key12": "2MN36WpAmZGWudRT58734GCFw2Vy9uUSjpi93Vzp38EvSFWZj9G76fExfkTBEGfdn76oMg5q7muxtf7TsMywpvbE",
  "key13": "29LA5HSQ186Ke7dJRjxGbPjiHL3mxtPig1wskytcbSVAPZLoSMbpQaVWFmwV6xaEa5yY37LvpJ2Nv8g2YBTFSZEr",
  "key14": "3LVqvZ3X44wsECjGy8cDMV1JGNBeEDEnGFCHik7HFvMWi48KYomJjapJEiQYiAqCjUumftmhc9zg9LQoKFFb2oUL",
  "key15": "2PWQRhG9VZzmZQ61fCdEthY13pZdJn8MbUVWDJtFvHyTqLrWeQQMjErgqbehbUjBkjafxMTNAfVDF4N6BQ7AD33D",
  "key16": "3wy7c7LYkrYyu68qgXxoFZH3dhuTszgnz8ACxaXUJnPPsDyt32DcQTan5vBLoR3HL5YzfZbjRKYs64igav1SxsqZ",
  "key17": "4foJb1JRnvKzWEGpz2ckaAwJx7J7vMEsXSPWxMWXhBCApFSdajt9WATW2EZJYwiPcNwnvcUW7b5p22kmuDmSa4w4",
  "key18": "3enoc4S44TvwQPPeXVRpL5abNuUwDVAwFvuj9bKcNX1ZZ5ZQp4ApWqBizxjGfQpjh2dV9wE714RAQksHjYUZaCVJ",
  "key19": "4q75xk5ZebMkKLFaQmHogui7Pi2JVvDEcGoEyonWGmqiMpY8NNgwuwRC4WS9fMvrpq4FBUcw4bUMFmaVUXhQXwjH",
  "key20": "FjmoV8T4oA98zvqoPq9P2HYdsfo5wc7XJLyfZqnr58fF9x4z441cu3o4wbmiWE4RF3cTubiSnDKUAH1YaQzGZX4",
  "key21": "4NGmmfBNfUzqP2RVrpp1JWZw9j4Vjwv2TDvxaJCVGrEdBHPHPuRsAtGGSmTUtsLECiSNwC69woRSXoAWgW1CTaxZ",
  "key22": "2JCY8PPiLKT2QUs1zTd5jsnGzyUJJVhrciVYJcQj13QwwW3WaJjWq7M9kSxbv7PPL6YRtNUaHeVqLX9Qs2RRQFTA",
  "key23": "5LibGgETh7Nce3H1tJEeHts3z29HN9zXMDdoBHKJJgX32LRynHxLw9ZQfz8NG1iEGNAL5rt41T3C3oRrN5ZVH343",
  "key24": "4tk8g3RoznojAnertBukexBEywU1ffjdaXnatcRwCqGv3WgNes5xvMduG8gM9jJhakfH8v3KfmoDex8t3tuTMhYQ",
  "key25": "2nfd2tVzq4E9FJBo8yqnfEaEgmbFHZHVj9fJbt2KegoZQyH5iSupfBhBW9C1DeeMuJ6YKrZzg58MZd2bA1gJ2PCf",
  "key26": "5C9oeJ3jb7Nd8bfq9Eoy8roqw2mB51Kvo7NkjgHD8bvWbUnYUTRibCxLbvj57ziUV3q59zQR7o9PtJFPpxmzgikD",
  "key27": "5Svnh9m6bxoBN6VgXnC7jVR8B48komRa6hvQHwrjL5RxJsRLN2XftkRaT6fpTV5Bn6wvnaRGC6AdBTBcDfVbXXzm",
  "key28": "uE6BxQCAvaAq8MB7LGLhwFsNPbS6kAzz8hks35LDK16XoxMAsYQqWdM13ZhZs3fbfhagx2RFuvLar564rUDLhru",
  "key29": "2Uv8s6RQ9EdCwT271muzpWoNYk5GjjxwXC3DRZTHQWP4htWhhnTofLonpEiCbR2EV3qr8ataLS8vS2RJnB3ZPYGM",
  "key30": "66rP2S6ToeXUr1uGN1Tkp9oR1PiB1y2YJN5bmBxF53y9sA8P3vhUpHtJHjgF12m8SQh5bGePwtzDt4kMiQHMonWm",
  "key31": "2sTSXURVfksxibZyXVT9DirATCL2bfrRzhT3V2psekPon9i2Uiffhe7BD8BRu2mpSfAczCSXpjwnrj6K6wHMuD2z",
  "key32": "2AHHC6iqbGAzVKbVcHSRvbZQhEsUkbVuEtUZmHw1jzyh85MButw3LtKhGruSu2rUJc5PcgYpJHbMwV4Ga3336YwM",
  "key33": "5XDH3XTGGhRXh42zyokZbXemN8NAoiXQREELsykPm7kdtmVhPqgzQdxnzke7vq1gvzeMgyPPV3rvPk2WYiJbkTWd",
  "key34": "3tgd7R1LmZ5cqYCVYopfiYurKrPRGsnUnADStiycJhWNZwVybQvJyK2tYxRWqoZWNf7fLtYonx8GHx7NJUUcwxs7",
  "key35": "2GP1hGNgPjqYvfjjw1QtLpwwjhYcvvSZGGq2uLaTBLBDXzpwEW8Hq1vpNxb3amDWGvJnZneuUnr1nGyyKT5bTfFx",
  "key36": "4z4VpcdqWmx5nFUFgZYbLuL8RXNvpx4iEzeqG57N67qT856AHZn69kzJwzT95kKpmfPFqpNEnjW7cJJ7sY5m8kUn",
  "key37": "4f9ouhyUhzzsLEzVNYeEwf6ATNdJx7B2oBsiRKPkTJUCRKQbkyjnkvEufWDVr6Wanbx37aTzQpCkgQZkFZkY7b8J",
  "key38": "65tjY2hRd4b2HJyqiXewLKC6BuuscqbtLoHqrZfBrnf8ePdoNxB2ZSSE8ycpn9kHQY3yMiGrJHNcf6miQKimYoGW",
  "key39": "57dWmBu6t5V22TxXjmPXfpdP66bajqyqxRbyKPRxSrS9T4uR9usFCCndAm6HwLbFm6jqeSDvYFmncAvcZt9wtJh3",
  "key40": "4hWEM7ssRJki4KHN9t5ibYh8EAcBAiAT9vSQ6Qdo4ZuRnbGfNeHKyaNCDnLNZPqiAmXKjy1poXczQDBhCY4hYpuQ",
  "key41": "puc68EzUan2A7D9SRpxHqoUPxU58wjned7JiMyY4nor9MXpEbdi2pUrtPDC5q6o2hKqSAPtuE9ur2A2dCnenm5h"
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
