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
    "YSeB3iidZt13M5Kb9iURCbDxVHX4a5byp9JaeyT5qn11v23oPZgGkUyhcPrCiMKaAnBGwQRBxZ6SP2dhJLT9GKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4op6TDT8Qiu3fQLtDS1Epe4yuFqg6NBciwoNiBFQu4Y6hgqZt13pRAis3Gra7cTrA8rTFjcbbHixaJ73gzu2wDrQ",
  "key1": "CK5RPk5f5PTpwwEABdGJcjzrHRXE3ygmQ3D4wGsSBDNnB2bGT3gWAF7rjZfqQGwGJaHvypSbd6VFK4moX3vwWZN",
  "key2": "4qyrN3BUQd2dJHQSCRmptjHESS3wYGLf4QjrXJw2peJgPuyXJtxkxZQ58K7vvFoDgbS62EDqyhEvYfKendiqopdK",
  "key3": "AVTxXN7rgDcW9hdgj1qXTC4vG9vyMMhvzpkFYbmER8BmmHUyitD4EcxgfzAMPp8r6Zg6nFPRfsiFW7U2tTdJiQC",
  "key4": "37VXtXF2jaDtXAHTWhvX4CtDEahq9UcsrAPj9vBVxZwdzHJW9m5KoT6TuftFcdCdpXQSHnkBR32U6R9KB95tuQFo",
  "key5": "4BQLA5KqbdYpyiEbVhWCW2WZ422j7ULk2CcZyhhLczfk8fCyrMBbnEQABjLj4KeJkv8fwSWYmXmM6KEEwD6JifaA",
  "key6": "2Bw4HGmAv7ECShogK4G8bSBBppzrtQsfXyAVPWf3QMj3QE1MUzZerioaQTZpb2yWmoRK79aEofPp94aAfmnJQEtY",
  "key7": "2iQZgJPFdP8EmyqLDgBazQ6rXP1yut5J6gBCBNy5j7FeUzMZV5VJ3WfjD2kVrbSxaWMi7EURMjDzTkUCvhwNLXCZ",
  "key8": "3xLM2rBwRt8b6AHqScAr8B7Hu7kbMLRutwtwfFTHKwky5VTyCDkb8m8fRjx6S7joJPL8HnWJscTZu9WFFqUMSbB9",
  "key9": "5pa5mhNzyjFUphs37thKU3JUdEtXZW63d9U4fZ8vaGNwARPygK5DQZpRjbCbHr4Ls6aHJh46gcq1NJkjMx3N9DqT",
  "key10": "36D9Ubj4x6VXTBJjMN2x6xCTa8py1c9zJ5ME9KQZLXxGLvGuCJdemZEWF3XvkKqwNTJBMTMmomtExMW5sxpZq7mN",
  "key11": "5HJdj3UaRxXTijZGHeR8sPEv1w68g3vk7pLzV7MchKmq7pVRE9JHKyJ9gHexhLjvpSffLWxKTWd6kJbN4gNv1Cwr",
  "key12": "2uLY8AoRfXbBX6Cc5yft6nFJxgGjxEa6FP5HhE6cY4qza32XRGZHNm2dUKCsksgMCXKrigpGYEprqFWuAFL4hnoS",
  "key13": "eQBCgVnFCoGqNbpwKm6WPTqCUdhyUm85VQVnTRpHJrxovQvjfqGQuoRi1JF2MCFbuE3yzLWEte7xBZfN2HVYPMo",
  "key14": "4w59hiZm7QkQisRgMyMe9TQBuSM1FakcodUPByh9ojHsb6kCrYrdyEHW2YTAYV3VkZhL1AQQ8XB6Q53yefzMz3bC",
  "key15": "pbYBK3WFCuTBa3xQiyX5C4ayNWWEBz8XdYwQjHktk1RrK2XnZiNXfyqmWK16W9pG8Du67a1MS1Zv9LfpgRudAiN",
  "key16": "3ie6qCsagwx6LVXmBieZtvdMGmcC4EkK9bkQeG3sagug7F8LBZKztJSr4PVeSjEYq26EK5qDoKyDPR8vQSHBajX5",
  "key17": "3VeckkdfHKmEQCv7ZpMvUNjw4tCcf7vMZ8bGXDQBoPoEWX1pxGEhKGf2mruo4BYVxcNzU2HA5oM8RTfGSTdKqfbC",
  "key18": "4pc7dn7BwGCZNBp4ekffaNBGqHk2aFo6CucHJL6cwfyjft8S5GGYcm65yKjzC8fzhrLZrzzVYTqeemGL6kNV9av5",
  "key19": "2DPuVA24yNsS6knhikuYbpWXwZUx6nnGc7ak2ZKFcRpYQMSTVsiwro1T7wwmDHKLpDngGuiYAdFcFwj8amgfs8Qy",
  "key20": "4YUrKKF4DbtHJ6QVa5aafoaKrz1xhri83u7emUzXp8A55b4Xj75RYBkfgJfrT7yhJTVgcxBWALQKDxqMVVpefk7g",
  "key21": "NWcH6yHy9HE6TfHA8X1x6K86dqP2Y22KQ2SUWwxHw6xzq8sSpY2VFNTvkPvB4YkwKDdQt6Ns7dNnhBrmsgczJeS",
  "key22": "2iiKjd2bviZGgMKaUfqG3ZkPmJuLMAEdE92cVbMfE627YMryqBW62RHPSQ5zPjnmvRLWwhktrFQ8hovBfpCmuRMQ",
  "key23": "EYWenCzVfYYNto7tVeYxKKorBD2vAdxNwqFHTbtaJMirfHkjPfiSYByvquvYgdSWuBNQkmgid46M6a87wQrCCuN",
  "key24": "35E6RKaWgGAA3dGgZEhtFFf6ke8LWPdJvaYuaHtZAsPipG5ZdT5XWYLhnhZkAqrnP8HZQsGm7wSSJaWZBdJgojKX",
  "key25": "2JEdgrtQKtB8z6hsCTjYhpyaCeQ6eHia3fSGgHvt5cY1Va7CnXeCspi5i34ijvvJpGDVNfzSTgta8AD7EiT3QHYL",
  "key26": "2hAY8VNvriFNxSkzUq4vxMwHgEjkbcR4bjUuVmanhFYK3NbexsA66wyu1WmKAZQXwVABaWJsH29c9LTGcumamThU",
  "key27": "51CYULg5vNagb62aGWhBAY36GsiTvKXyh8jFGLSRjX16UgNCFrKQLv7HRbDvXmxr1YynwfkdF9KsFvaa9RHdeciG",
  "key28": "2eM4AEzcGqmvLrspS7VTWFNme72aQiN6imKySxNxp6gLKX6qmVf4NRMuMwAnD2ocpk7Bvk1rNhMwZTQKAM8tU9pr",
  "key29": "5Maa69W3h1jGJr4V47nQtNkAsS7KMgsexD58dAg5dknWFhUiJGfbc2mQgmjwMji1Vng6f8g6oXqM33Dj8fTX9WRQ",
  "key30": "4qdckMPZqssreCDGTPWK3Z3h7ffdkayGsvgmimXksDpjTrphjfiDKnDKk4aiN7mTpAeg5bbjBqArt51x4pwPQoma",
  "key31": "4pRGwPwFzK4msH2zgDEvTU7DTCTcAZm6maem3kpi6QyGizU6qN5XtvKesDCcJrWXRimbddjCjAAjzbox3PR2rHyX",
  "key32": "3AJgN5VwWXxt1R6V72a3hAtMwSvvFrCUDX3PcHRMh3vTzesyYj7d8fW2Zu66mAMEMHMez3as6Pgd6RwSzm2rmoDo",
  "key33": "5s1iNBnHch3KTo8RPPXpyPSVp3ePuBZYcqswMTiKLwBPB94EdSCE4BnXm4jbuGMbFDianhvPMje7LjrkYnenGybq",
  "key34": "5EUt9GQ7Jki5rBZoxLp6CFWNLNpxZhD4iUCCSM5fJ7UVja1SdwLh1MHCoYSrH7S6noxWj4x83dUbTyMvbX9Qnbg3",
  "key35": "3XarqdEfmdfzoVPbqTkD3WWnMxiDKYvntr1ebU8rBfFb7okArvoZkkxr5LhmvpJMnd9wZwFazsN922DzKm7HBXj1",
  "key36": "2sc3eeoXcw2YdUC5vK1gMo6h5FZUNZz9m6L8Dg7iPSo7zZJF2wLDDcYX2212cvicJsMrqvcJcrrK5uTUzRfiP1jK",
  "key37": "28PaDU95yoW7Bx6bDKhudm9BhEFxiiiHjTe1ur6RKqPbaMKEvHdbAfSUneLEXm8GuPBqvCbbEZ1ruhEEXF5bCT2M",
  "key38": "4Bi9VK6VxioR9j9eJ6WARfJotP9gWm2pi1Mrq9wxNEFXaZYsm7A5JYyFdigk6eAzZp6dN3GJmtWKM3HbvWeAqgit",
  "key39": "5fiMR8JYJYzN2JQJyBPmYsTR235wqE3WwfL8jGXuxnuGmmXVxCQ7oLADQ4aiSoCevp7S76jtX1w4vCcVjxMoRhoV",
  "key40": "3D9robMX3QAHapeb8Y55Rd2kPvezzJrUk7N8ongXidvszYLZxKFmUaiE7t8brQrJJjd5X6826K1j3NGnMRoq4ME4",
  "key41": "3QTaEsWSyJViFBMYjAe881UaXgCs2yYjZ4wU2buameCfDNEsjv76Job33h48XEE3tEDu81VqVcE8NvWPxU4KcR18",
  "key42": "2RHg2SF9UaHDimkp2mY5oVprkWtpVRxvpab5GQ1RGSHZcuEuvbpBt1jUW4tCNsMZ9qUa4LS3RQ7ekfrooRmZd8m1",
  "key43": "45BxDLzVJ7JTnQRuk8FUjQN5ZyFUN9jBkunBA9WKpgLxoEVtyjRX2NRhYUZatgC2X24ciZQKjDiaSDZNhc76osG3",
  "key44": "idgNVTEnjb9EN7oSEsgk183U61VHUq3L8a47QSf7bLHBb1B6ZJAfTf5hCG2Mb7KzVBrScvvZDHxACAySWEfBZFj",
  "key45": "5Zt8fwp6UcAY1maSXDEAJ7yWYfyfnvHWp1pSumxpWVhoortA45UnCE2qariPRbaWQyGc2KFshwZBZfVqFctBDHCV",
  "key46": "3SJyhDU9zNR4AcScxVjM4XK5FoYpjRxT2Q7diTn422w7AJmnnQRgZ8ifEFibYhA7cX2XSQyaBU2LqEHduzXxqrF8",
  "key47": "2WKcncMxii4d9pL139w1u4ZRFDsQsvBWfv9zHLfJSKycHBEkcWoD8xzwZEjnmr6iWF7tJ441fZShLhfhiKHc9rhh",
  "key48": "3xwm2cnkLdYVBSQwEe7xSw7EujASERys6UaExwmepU35KC1pbBnkoo1CiwDu76HgkFqNoUymRUV3xhKgyu1yYTv1"
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
