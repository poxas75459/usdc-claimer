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
    "2sVjgFFdBVohT9f1vbAZ65Esujwhj8x9LJxGY9nJRz44UGArUZ4YSGEpnR1MowbCWWbD9avXnKcCdon2ESizD8bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8ZSmgx7zAqe7tGPLX3ik2eW23qu914nrn7QXRomYTzpWqXZg4SBpxqzPc2oFnT3egb1hBK9Sd3hfJX5WLo9FRg",
  "key1": "58YNxjP2NQTvd5ujgP3iToB2dH5B4j819p6H2MHfdHf58kss5xFk65B4k5RATxVHnDee7vSdCMRLSW6xTAXPeHhN",
  "key2": "4gHD9uhfrMGgH7Z5zzgA2oYKuUSEey6w2uFj2pq9vBwxX19KkBp69Cd7WGAZhAephkWLiBp3c21KjZC7y2keoSAu",
  "key3": "4HWAhU1TDwZf6TYWgJzPynsSkkM1vsN3wFrBAh3z4YDycdTfxafpZsEMLKiWQj4dbr4ravPMLe2DS2FDxPbKRJ8W",
  "key4": "57ALVeUBcdPaJxXmr8uKezHo2J3cNGB9b7MhS2Zq78a87o4FDrT7V1USz8pbT4KjgbKWjfMasP39cTo9tSDWujjp",
  "key5": "3Zpu9h9NP39KCXzCYt2FCkYwJHzKTG5gXRn4LfznRwbaF8SBSUZx2rUTa44vUreUtyWsidhDN9NdEdTCErqXzeLf",
  "key6": "5fqzHDr2AdfXxV4GScyuuEBowghLZFceN6AzBWxbtcHJEy26WKzfRh9bmnVoKLCRXLPBQNpMzVtwoZ9psWN9Dp8A",
  "key7": "3Ttjfd4AUYmZ9GBA7Dc8FGkJK9U9GWUfN8AhrxAG1Zqt3M4ytHezv2Euqmq3dTE5dLzJHsxUHqgqYx2nRr6Divdn",
  "key8": "4ureJthf4YNZ1dFVV2eki4xLXZGnbqFZTKL1eazHQHH12q41t6YE4Zs4LSNGRLkV76t9q2qxs8PKWxvy2gU9eJfB",
  "key9": "3Gsu3J3pWZJksUgUDv2ZndWeUMyFek51GLCBzmCFHbtvRJpuqdd73xwAtWVr2DyT3732wwWsMvABMYpgmiVivq6S",
  "key10": "62PvAKjdA4xNGgMbMHmbwcVFiG9hofrcYsEBuLPmQpu71v8aUrBWRhj23bW8xhUPsnRWQ2V3iyot2LcficbrgbXP",
  "key11": "5n1FSc4aUamm2FHDatX4cLyPjoSLQMwde9RGYLCUTT7svfjhnC4tCwwbmNHbjL1ttrbwD3WakH7EnBqQ48p9Ru2J",
  "key12": "9UBBxLdDzbUDR2RbH14TnaKyvwP2VRxijAScVijchrF6XyjKL4odkypkhqiNZcELrdybapMJhsK3XbcY5ckqATH",
  "key13": "2LXHCX9bXCoCGiqS2WDcouk1GHA5yHjogKseWiVkEYY1TBBLRTtWeCJQgbdTXHwGjkoia65e3QdQZ8fS17WRPEwo",
  "key14": "hQCxRLgNneDBfpGdLFunRYtz4dtZu2fBmTGwvLNnR9uk8Ukr4s6cXyXAmrgZqvFGu9PeVX3boN7usMFU9p57Sq4",
  "key15": "3FMJ1y7Dc3UY5Lk3ZfiepBM5BBUnfmCDUcMEgZtHho8k8BRNiHcpVS3y21cwuepQCF2ETekDvYcvX1FtVxMnPVi",
  "key16": "2mftND45v4uvhtNeDhcAcP2QfPQhsbZW667N35NiiY2Yd72AdcanPJBEwkggLeWMKLoBqUvTAjp5XHugoDThKArh",
  "key17": "2eC4b9KUPw7Ak31BjWJNYsvKGgFYuQsiSMTECktbvhECx671kC6Ky6pAN8xoWpNmDfyuoXCJ3N8Wp6onVSqsvtra",
  "key18": "5Yko47vnREwBWxdjCaeK45RdhsdJoBbQdTHPHbjGGPPCEUMuMCzrkJzmtNjcMtXTnTw8CztfrbBRTwyWZri8Kqmu",
  "key19": "3hLXJBFsWx8tpWRHP6UhyGPdqdx7i5YcLd7Jp5VDiJLcYRgcvdqNHAz5896Xg93KMsCtBKRkYKqEiguYSBnj4JJt",
  "key20": "GrvEwdtXkEXRngN4HBGswcmVppamoyuact7dFDMS4qmYuhPreHFYdc4RDru382Njfd3FhoPyE1zMWaDRymMRQ2S",
  "key21": "FkpXB24Bq5hMPFgQ1RUeCjQczg6Zjtdxc9F9J7ELxpsiAu5VZ59BaPnBWvJRDq6FkTLAH35jsCB6XGnYSTBvCum",
  "key22": "2MdZxLcCZswVBzpU4T7bdFNUnBp9ouzbZ9v5C4rM6vdSkmv6DUZpbVvFNNMYsFroTZ1YKo5yaSDNWGihCraznCCQ",
  "key23": "243ptfBcx3WFJiogchAMy6vDK5QYvbWzLkXsBQNWirU5rf77kNpfuVTBYJjRhzNhpjFXZdmgjhTfi1ErV3d7Qq7r",
  "key24": "orD756hspwA3iMNCHyCmrTvtBBF8Uhbt5Fz97kyLuUzEH32RxKZVu2cuWzZGMQ3yr8KwNKtnxoQ7zJm9mt26n61",
  "key25": "3TPCEFy7nKEgnzQv2HxbgDfm41FcvPdBDWfTu2rADWb4R5xdqY9npUBafVSVyEPYhrYiYgTVfuEs4r3WpSeTA7gD",
  "key26": "24H6mCeupKKGh9gbfrD4rLNgCv1WQqcRUhU83yJHXCKt4jgqT95uZ4gdMpMBYnbA2SLfKmm3WiBH8wovnbFHNisa",
  "key27": "4HS1ksqpW9peeXpo8cqckxKs8kj45Y7katQ1HKWwaEATBPVVcx6Vwx47gGdkzxbrrWZrKVMnPB8Nvq8YRTyLSA1j",
  "key28": "4UiAqghDHqsndZr4wqchwb7x13fqf3f5muF1B9biD1nvTHYiNUMFW7xYnNXTb5yHDDhN7fe3WP8tyPtMHtumTzJ4",
  "key29": "4JxvevencTUzJDauHBkHyMqwPGFvrPNNDkepgTQusMoF6f23WyYSKj97Sy5q8Q3khfFPiaAKTWyNGt9myqQZVghd",
  "key30": "3pETKAV7Y3SwsUbakyhfDmD1TYFRXEWn2LpGyQH54xX1ewAPxrqWaGMbN3tQ9QPq2MMXk6jF2QpAqjSNhv6gpLnG",
  "key31": "2AHKLfAthhnV6SjoV4WBTGtY3RvQyXjR5LcTh7LwX71PJ5eF8sA2PLTb3GMGpbjDgdpbEC8abRRWijnKwvCMxW7R",
  "key32": "3NhNHntP1bGawuXfSsoxi5ZrXLeramfBdsjLLrZNwfLy7m8wfa7uFe1GxQmZqXFxWmYBKadrWEoYow3PjfhZWoMs",
  "key33": "2ARvpyWRh51zawUDYeSDbYcF3xWhXHPsZx8UjjnTCzJae6kTN9S5Kueyib7NUX86ojCw4qxQomvwApZPdfuN57Wu",
  "key34": "KGqHuYhBdZShy5MWJcta7NRYC6wS47TaG4EocKsyvLS829vWzkUepRQ2LZ3NUAJkxKFYTfVAqWdfzRn7M1BQid6",
  "key35": "pjWJsM7ivVK6KFyuya889A6pb64fZwsHKDhzZcp2k2qJcA4xqq2hX7jowkpGLqSpezDZKmrVzSazpCnxkpvASdi",
  "key36": "xjRjh2g8ezYscUZhbHjjw8NY9owhrp5rbuq9dk4qL8KmfMSxxK8MbA9vXC4H87uEu3AodGWrAV4DXnSXfCTEekR",
  "key37": "5UjsV1nW17deK9vhHKnW2H14t77QvFDvuVsBgpsPtQWt2vTBGJuozhuQoTfRqte3FUAAEpvkjdztkbQtqBFZp36P",
  "key38": "xY73Y8Q5qEdqdxaVX5YFvXopWbwHNPB793xjgUjah9FVXpentGj9pgWr4zFJbGbghpfo39MGQiFzdV6Y5iwFBcV",
  "key39": "3UphY9N3zTG2pM1eY8MpcaA9GWMZno39HqpKNdPLnENRK5zSHdckQYmUz3zrfZE6EjYtwxpKWWzSpydwtNuVLr8Z",
  "key40": "3NT9oipYzzeikda7qPRHryA5UqhVBA4K4n7pDgrQCMEhBZfBxfAyJgJiYHmtWsSQubjDHGWfUQPjMavxgrGyvRMr",
  "key41": "54nwPMg1YQwFLYcUnrUjCbAeE4mLKQ87151YoJ2gTrC4dqRcGWfvVXLg4cowad5iGmuoAMVr7xb71bj86Tuxyjkj",
  "key42": "58vnVVqoey591jmtH7Ey9QK6kcQ1U8HJH1qZ7NjXkuqXwrMNmLe2E7yL1cgXodhi4ozS82vWh66A1UwS3nyLMYYL",
  "key43": "5sp3za3gNXyX3Jyf93x57ba4iAGAQABb8QwP56Uf2HNYuAscxpmyDsZKiR1vTGJHy4c9NePg84ZgBR2H4SSZvGg2",
  "key44": "3Ar4cFSG8Kf95UF824zqitSciNpZBy1rGoFmx8SftRZL3B5iMbkFSYdyctbmQQdQjbWJGBwSvo6mYYHxvH2nvKr9"
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
