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
    "4nA4CQv6cJ3XusqqeH7y8UfPiaLxM4gMEURMJzMHmTaz2CsuX6hm74jdynzXFuAwKZAPWfHTKxtexWns6kMfy6xU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJNafYmH312ygqvSw1xZhW85LVwHcxnortizzwDheEBQoJnDdFFBqDR6U6gpQySeSJmxBnW6gVyWTUaJ6PmjGsr",
  "key1": "5KsDomysTQKpvPAwTJkzHbSBgN8XwE5Xho4RVaiLhqd9nrfkGCzx2swUcNu41djL3szNssL4SaaHvGZJsziJmNjp",
  "key2": "2EigqMxSZ6mhZXNLA3ocRop4pDVdLkzp7SZJZvG1djhbzB4RA4f1w1Neq4nnpjpVJvLVGLvbU8W6fttZn23dT941",
  "key3": "21tZyMox8LXUYv6nqTC5EpQcEy5cBWVKFMbyXyk9LW4szunjF3PkHfK8bcdBPKdRWPgF5oq3pcMzKAQn3qDGv8wB",
  "key4": "4UkMgLkR2arbtCGiL6xLStgeJkEJJ2KNxBjPLTCXGb1trdtu41cYKzJSTjKmR8pVQ4X4enVHqq9mbnJnXspw4jeD",
  "key5": "bCYmivgwcME8cdwMyabPZaGKGDJ4vzDZcPEkk617dAfLFDxkxt173acgW9fXMQCybNWy19owZJBsUZjQ6KmG554",
  "key6": "2oJ6j7y2e7vETrjMraYBS7v2FUmeYpgw2kXP6YpHwBM3mR5wzZNkT3dPuGoJAMQPEUnzni9v6SJRPQyUwxhZNts7",
  "key7": "3FQB7ewbbSjq7LVKP7yecGPj7TQaLsGTTYWu2QSv7Tg8X4cWm9TvMzCHSuum8WYnALpiLRz59FrcHHRXmxqtVYTh",
  "key8": "eprYtBvgTbtSrosrCz4mabLsMW8WmJ5SE6aCLKuANzcT9eLURf8XP3thpiBphy3TrNNsD5Sszaju7WPKZxJco7z",
  "key9": "4CkadEkpBm8aXEhakAF4AfQc7fYr2G25RK3ttvBWxU2WWzoVHAuifZRFHDMddi7rmxWoVoXZKob74gCHGKQxeUE9",
  "key10": "4KzeDCTBQ6HcZ9Vr57UBtrXNBhVGrGvvNuEEfwFXgZFhctiJpA4YzCUDU3qnzPu6h2E9ZUv8qqTtkbpw8rYUvSye",
  "key11": "4vMyhR4Au46mmcJSxF5WYk8wpHuwtZAN5kBPh3wSeeH4LbDSmH9qS4kGBK6q5z4efwthuHDJ4VSdXVYow4sXGcWN",
  "key12": "4HCfgrtoVwMAHdH2aszBDsgARacp4fRKPYafAaQF7AXKjj6yUcvBTHDKP4puHxFT8UjigX8JJuTjV9Efa1PWXHq",
  "key13": "2uMS1VVWtZjt9wh9KBKRhFi6yUEejHdVNbT91k5uoFkWrNXSQBPQbyUkmNUcjdNX8UxhMYo1kU52Ab2SorTFFKrD",
  "key14": "5KKGbhdjkYNvoNBJrVM9mbCu8mSXPve19XXsxGHpPS2QzWQzPdQWNz8cThc6BU6crrc5CmFgKEVxgPSgHeMApeAq",
  "key15": "t2QCTzYJ9cHWUfcMyVcivpvEdVjR5LxJ4kSekuBiaht6KFZ7tmJiCJ6JUgESZxDoK2sYmT3hvNZJS5CjkbkSTuQ",
  "key16": "5sDy4Py1kLPh2LcDnxDDLmjkbM8k2zqv8ubcqcHWs7mqnJVJ3yUB4ym28jCk7tsfrwCNator8bneBCZyyoA8QJgV",
  "key17": "2P7fwf8zybbrYUCT9ScvkdYGCpR1f45rKkXsATDJ1EqV8gFL7gX7AJ2uULi8xN8SMMaxEbEjbvBfDf3bvtu5P5Uo",
  "key18": "EtrqiyNxSNMrQW9ijVNsNDgoxfd6FqxCgyZnatMJfDMCZ4fwds72wfhGTTXHLkvDmNxnvMKvYywVfzHGHugVRgi",
  "key19": "39mhs7wJWVtEDm7Xmw9AnEHXYc7akxjSnGBJiR75wfi49tqygXztY7F9JLEprMSxv7NZqXs2Lh36HQRveojxJdR5",
  "key20": "4QNmcJeSitvUX2bZYcsbAd2eHr49xSh26jptmBy8K13WC5bQ8QSH5mPEjqHggpfRYu4D1yubfZTcqwYWqzGnDHYt",
  "key21": "2bmb83Uzdw8uRhM4jwwn72JvDf1Ry1JNDSZFVLowpsQT2nugc8VaxzeThvM5zfMUpTYgSu7ShfxQqCFcik7ds3cD",
  "key22": "2h7BYcwkqBCNMNnbEiwEzsP5qM9hcSBUjBqAJ3LuScv8rjzhtB32UXNMSD84JhjuVygMkyE4SRQxaQ2vkFhwdWE6",
  "key23": "5GFrfwsuoRC4dLdLxcGSYbYZ1VB2ijjJwaHik97G2GgFoew22wjvW4WsDyJH3fWEigX6GfPKUGcmoPiBkpSebzhW",
  "key24": "3JCcPFr7BtVbQ8ENcajXEjRmiyoJAKVCvwsV2Grd5MKK1cc1vVZfoTUKqFk8Qjzr3EkRg8ixTysPBeZypJMVqQyT",
  "key25": "2XYrbPpwygt6xKTQ5Wab4XtCb8CVTadykkvPRTitNPW31MJF4Sb1K65YivG3D2TvVFPTH5P1poF1FcdSjm5W9YLs",
  "key26": "65J1rqUyRQzE4UDez476TwzcpuE1KqcJTMfUBUBouo31KiGj4tQRmqCDDPWWZU3ANDPW4A5Gy6FTwitWgYpskBBK",
  "key27": "3xuS6ip4HfyPKC1GJMRNZ2T5KSJpEXCr5JjFk9Zb7X4DNwFKQkLQUWGNcnFJzwjXpCK5Xiaut5hbdFRyxPBEzSt3",
  "key28": "p31KHipCN3FST5G2mEcuWnDM18d6F9Bk3hwFnyn9NJtEtb3JFVQAevguACoeq7TRieFGUPUixCmnxRug5Ju4tBt",
  "key29": "5m9tK8sM6wNXDm6ZyrhEgyEJvjSZNUvwnab7RtJb7avdpDH6xjMq9U4ebzDDbSfa3PEYm6jBKUFwrGoLqLkpPa7d",
  "key30": "4zftQ549xBfu43EjYasPU5iaZ3BjVvK41vFXB5HyXgXKndrKLZkstZyYjNXZgC8YqmbVM6V7zVdwmKgcj7Nm37K5",
  "key31": "5Y9oUFiKpLH4AwRSFN2krBskj6Asvqr7U7CjHdpnhwvvycTp2mDttZMCfXBXv6VfbHGpDME9QpDkUhPnBe2gSw3B",
  "key32": "3wPw9J4JMezZi6ScKaqKc7SsLZh3zYBKKyAxMLbKL9kdwm3aiZYsSH2yFh3oWYKUBZLNSxe4yEqXjGBs4o5Fd5Cj",
  "key33": "5bY5kRc1wyZgGdZA4hntp8Zi5Cj6dVJh7PidiVCrRGX8TLYGXbd9ekfwK6Wx3wQstMdreDjBA74obu4mv2vbyYar",
  "key34": "qpf4NFfyfpBzPRczeWHHnLW1a1jWQsQRvGHA453EFZvXMtSpPMQGCEJucDYH6QnJeyyNkgR6i8LpRSYLBnxA2Bo",
  "key35": "4jbWfzNT5NoYnB6N47euSGfemzfCKGDFEh5wTJeFRWYT6VvAU4G2uy7xV4Zpr9j6o8QRoGxcksccVb92aKxp8qv9",
  "key36": "Z3W66yziUeDzKHCwTugr7yxxSZ54dSGXXgw2wpP6rZqE1yB2jvFMbLFiP9ZpZdeWJ7JmoKcPF12pd1tP9p3mrta",
  "key37": "5pvUh6kJX1c2MoAsDc3SbdCZFPmZAh3prwuHSf8RjD1wtvqoahVsnPpGPiXSVXvcwPWgWuXmYyj5vUwsYRbmmYQB",
  "key38": "2VugiVkZ3uXsz5kChMve82jYdUzSnvmfWeT9ZJ9qH2jabjyD2ucsuZHQuzrM116rgm1wqRCd5kDhevFsB9SDqrQY",
  "key39": "5tEZQaqVcjLhKoW9jhhKYdssysxLJ1fw69GcXrRv9kXtDyfrxnt5hWVBUKEiVAUHr58rtSYbN7m9vepfVYwCkXdt",
  "key40": "r2Mdw7NXfoFbFaqZdPPwqd2MebAespRpCDYqKcN1SPRLUwXzPZDn8PDX11WLVpUXj5wGb2vVRZHhbD2Uii3NQ96",
  "key41": "62DsmUfA6gQF8nEJejvur1m8kk62MH7KDDy4zynu5nb7FTGXH7HvhbHDycVRWppXh3e5bTxVZUrhNX8HxqDpFuun",
  "key42": "2YNg8dr1diDk1MGTSjfm9ptzpN8XCLSD25CMc3rar9pL9qKfPj4Xb9hX4FQUmMKZaEJ1kQWQroKfdkPJzhdCxgUJ",
  "key43": "5aH7kUbMBQkS7Ld1Si77Eyrf55WAKeJHacTcpcgCmTS29PzZZLV1uS35BSnb8tgJdEkcMzxwoWxc81FjeXiEoKtp",
  "key44": "5mtSRj5DThZw52g6zjyW8LENBXz1XwetYwhZB7hYRxmho9WVsPfmmwqoiiiDHzqRsjyxpyFakLVecYerdmU8A4xR",
  "key45": "We3JqjSw7GELw6DempXs2HgcebJopsVU5Z3ubdKsRgBpXZMLWYSHn5MPT7Cc6sTTQqYwaPmCmEs5XdzzFSjdXAE",
  "key46": "3Xu32wpBmxFUuxP3QLosxyGGoRwp17E2UPJLiYAWScuHR7WLtBwd65y45NaErcjDJ2kfcqaYVv7Beiny7MrKwK8A"
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
