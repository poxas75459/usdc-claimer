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
    "46aUG3fQ8ha6md1P2g57shD5RKJ4wCybCTAr3T3KQPyPpwfgWZXzCEV2ssoJ2Bhigsox9qVdEESVk4t8Y155fc2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXXoMLvatmZ8CEa37pPvHpnnbXNrCBx9rdLh2Dro5jqv5RjJ8hrRtRtR46szhJ9QcNV19A4cKkcodo29TqfKkE6",
  "key1": "3CAqVzok8KGY6VbCJcvmcxEXUPfwu3gtbDbHfZDgxZXdgd2Mp7EQo6gNZrG8MbePi5n6y3MVUs4YS4XQ1JkYHb3b",
  "key2": "56Lz3fkQd5mnEcTFZ7x2ZBW6nkLq5Kuaf8FxUxuVTKfbJ3PGiHBWGEACwCbZ2igrE4tmkDKDTRsv63k6LKQTbWop",
  "key3": "5aRgwMZoXLV9T9S8s7bnjzqu3WaSo4Le2x4WpGJvtjNd6s2zPj1VD8rJqEUNbrB3t7pPp5C2p6JvgkjCffrr2JTE",
  "key4": "5k5rmSWXoVFQirazEpa84xSxF43XK4bf5KAuZpTY9qeTyXDjgUTK247gRhh3Fmfcq2iahx9FjvZuMyTEWQZRvZSs",
  "key5": "354pXhKWg1eeJh8niLAgveidnE9X7yyjoMH962iWNvJB1kPtVZ9kyT1y7gA2Q16cmYzngc1eGS5cg9oW4Pk4M4ae",
  "key6": "3u3CC2gevYJrgb7cdKwvHi5xin9QeL4ajgjprCjuY9W2C56SDdqyeiZkrBS3CNeop7B1CXXnZc6oZuyxizhUpB5A",
  "key7": "Foj3pKNahrBaijChaUErTJ61xuLtGg9HUGxSYGtyucUhcXhKQXbt7Co3FcEgqZ81Lrd8LLcYgZwXAJ4hVFhhW3P",
  "key8": "mjdjJ1Fhb8aioMw2NdLw5aQkbJCbbz8nqQs2bHghYH6iEcPz6rgjBkWvKSuqfii3cUWyxwhZmFusDkSaXcumFky",
  "key9": "3268Ce9L5Hevv2RWdz6XT9UtPYbx6AXGSidTHAL2ixu5LyfWe9kF4YyWVw2Pca1Hnevb9bCNPrg57HBkvAXRUH9M",
  "key10": "2wqjYkKN98DxZVjgra4vGLrXtAnMWspEbSg1sxtQAXegJjHSsJNRiN5M6G1bQYtEEGxET7C9b39QYBx1TgQFnhXd",
  "key11": "5Yew3A2hdyZXAADba2rtkY56QtnMV594KJpFeTfaWe824k1D9KNd4ecoSDTwVJTvcYayvnSdLb5Hs3PXVVeY1Tfx",
  "key12": "34i7busJn5R9JUnNGLZvUYk1wqU1FQm1i4TRWJ98sCcroTTVk7gFt4cpmUBT227SML5h3csBQcRZtF7gtfx95YqP",
  "key13": "xDfVMYAFAnpLf5mEzfST6qEbdohqYV5XhVQWMy6UK6dqMVpTVWTcXcDBVA7QFpw8dgVNxadrJ2e3MAxgLjpLb53",
  "key14": "4jFXj9yhapCzUfegzjQAuvCPtD2veFz8MLrJFNjj93pgiJjwTvTw6JxfonZmLGpqdDRxWp129VyS1aKdH1BGJ8vu",
  "key15": "5EPcTZZkRYWe9yTvx2MknJs4pqvjz3JxfSEgfKTKAnGZgk5xr9kXCumCLXmPBrLrtwhMFeBDZVMt4SnEskogwCX5",
  "key16": "eZNhzRTvqkXuTeroHtEpZcPEy3UrViWSSCkEkdS5CkcRUfoRuphBw94kMJWMKANDxSVsWb9rFbgnQHXQ4terNRu",
  "key17": "2XsAVwyTHwEZGvT3Kn5Ts47WL7ZiYXMSJeBwXdNHWkXNmdxdskKp73UP7Mdc2V8ni3uVLHvrXBhTRd6N5fuzmdWP",
  "key18": "PMyF57T2NxoNKuaKLVKr44bmsWDoL2U1BbMXziPm3XW9T6yVdkBP8gLXR8XC5oEYCCRacHTChyqoLy89VMPrmdR",
  "key19": "2ihVyDVfo3F2inTc33thirXB829vEjhntsm3av9jeAAajEmJxdSgATRscy2hiyfLAbB3XCRkHmQ4ax1XyCUTn1ej",
  "key20": "5VQTfoys7GBWZECJxrUb6cZDDmL56QFh8xELqMY1fgeLkveJFt4EjZQdHLxUpv2DxkJozKEHGdhxiAj7S7YwW9QU",
  "key21": "2bcNvz5LULPzDdE25Y8xRpMZfbFrEWCutj8wY68stuRDX4ZMzoMwaENc47speqL5c5unMwcRgcBM2LfwYk7k547R",
  "key22": "tPNEvnvuEqpEEGyKw8s3PhPZZDdVtGM2ggtDgrRQreNLy5aftDjk1MmounuqU5h4hfAeFa2Fe2fsKCnkEF54HMR",
  "key23": "4tRhoYyS469JxaZjpYf9QUEKEXNkAurspX4UkgPft543acVDScL6kdT89q6BtjfHgsbFjow7GQQYPZWaedWqKUJd",
  "key24": "3z6utJeNDhczhK8XPcRUsR2hxHgwbxfwQ8r7RNXjMxgcnZZpDwrY6GW7JiRPo9vTPffedy7Gotbnz92HwZnFu5un",
  "key25": "62972JBY19ZDEf85X3Z9o9XBKnsQc24yXYM5RQyfDApovK6tao7mXQYHK9V73AP3xVFvYiNByknUtrEprKsz2v6E",
  "key26": "41or73yXQZxeAkwADExZKbPTDtBZeL4uV2DbUXRfqudQ7qKAkLv3df5jvmMjutsfHR5a5ZD9v8do3gpAcDa4Jvck",
  "key27": "cmggMPRXpBvWWRDpG1DGs4WKdKzvwGtDhd7Pks3x6wBhaWquDvN3HD7kgjYEqVZeqJ75cACx1doRsRb5YGQKBTS",
  "key28": "4WSryZEWm27cfKoKp2eenx6rMg7SiirNjrpr767ToEnB6Vk8qzqWK8cocUYpEBnuoaj6N2Ky1b5fBhKE4KeURAqB",
  "key29": "5Ujy9vhSEsZcn7eaPeDNTSVJYuu2rxsQUZvpyXACS8P1BtKRCH7Xqvn966kHC5C1vb1YvDaLcsGPkQae6rAKf9B7",
  "key30": "4UxbxSjXDiKRQJBfF8qTS2WpFjtZydHPGLLe6iLvREXNLFqeoUwjvh57C4nZvVh7uGPm1MK34vuJiXUHkW6K7n11",
  "key31": "4uvBBdf1fxCx3J1EXDu1zjsiAgCHMtkVuR4y3d2U4V2BqggcctnBbFfCAqX6ty2YtbkfAn86V9b7CsGEj51uigdH",
  "key32": "5qcZXKXhyC51buqwu3goZxmyZ8eD81YVtPZd3QSGwLrazvSEZDmrm37frxP2kKkWduHhBofm5HME1sZEJPsfNMym",
  "key33": "5vGrvT9xng1ievtt9MKkhvF7ZREaygcBduaxKBCNPyBfY1GXYVqQJW1FxXSKN5hM8cMR9xrb7DEQNwZkCXgEqQ7g",
  "key34": "2JL4NwvXm4nmgaXQBky8f7nDjNL3zyrqu7gq57NVfYHjYZDoM9RKDSJQQ9bEYg6yvrxYS8f6hrSKAznrPV8ajSWs",
  "key35": "4ENkSvyvWJua434Xiz1BQmcmJ8hmfBqkHg65n8mfwFPwtYBkVoJ3TY4z4zzB6Cg1vVhefpqQq8JEckXghHeNJb7s",
  "key36": "22HhqzUxe2w5fpDmaf6N4vnKiiE8rbGYQM58yphzEKbbGqDQWC3mgELxe2FDAAUrR11q1qR1ajqokxKUNxuHgkj8",
  "key37": "2LwyeF1L6JCegY7BiboxDPjLjJSjTCrpNivxm1JDcVZTTY6wbYHnxxbjUegusPY73SuyW2e2Ux4mHQPkdNhzSQoo",
  "key38": "oojTKSfTCPRZFtgRUQdkKTpin7jgicYGPerCqbCRNnj6q8Kq5JfePPHTc3YvhQP7npoBRtknagJTESmTYSRhYpZ",
  "key39": "4q12wNWFrZtcb4ej6vMrLR3LQUkQWcLAxYeTt4T9Fa8BjJ1qA9MBnj8CmXXGzUbwaHVoSD7zvDRy2525q384ngBF",
  "key40": "BLARnHXxW7MVcaDkWv7KoB4upPi2ArLZoKLsnYVcBAufbjfcw79UQ9MbkqAFXF5gEc9poBkWBUEVUrE475s1ZYE",
  "key41": "4dGC9ZqH8sWsiicnfCUgZH6HLEeGFVcSNyw8c2Fg23gWsUgmaqC5qLoXwd4SRdd2RWsb2ghYqXcC2uB2c3kxpdEN",
  "key42": "2VQeLAoeiP2YWriJkwJGWCvdN1wDbLwVfk5w3DtNwcb7EVQFmovaqYzHi7b1Q7gDfjMAKsbhdp69LdiTX9kHSbPZ",
  "key43": "2iSGYpGNhvRnuUitPt1X7CaNTbGpWHNqTPsRZPVPksb4X7LnxQbiEtjEm8Ggssig55PTAENJcwQHVoiqjX6bTsx7",
  "key44": "4XqGF2Hn4e85jwKgKZUhYexDqbDqwkhnPPswYDrLzw9RigK2TUc18sUCvjYoLMK7esoN6wuVQqZKpa4PuyFn8Xai",
  "key45": "uR14pjz4qU42GGwxhtjAoshBmmYLGf5AubZgLp1biG4CzFLut629NSyCERnwqY48pnDTEw9KHhqRvkNHq6JEJHQ",
  "key46": "5EWwiAC5cfj9R86DpknepFNWvtHMJtswWUvozvXYcedNpgQw827PTGf2hQpF5wqcfL5QwjA5Rqin5zxifMGdhf6Z"
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
