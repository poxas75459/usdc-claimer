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
    "nA6crEhmZ1ceMKGLzq9VqBys18ArVCsrZfXyr9mnj5nSZMXBocYDwVLJJfy3Dj9DYgDoCmFUzZdGBjuDuFBd3Ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQxNP9L7xLF4aLAbzW7gwU6P9fbHfbyux5ysf9GciXjN9qrP8Ldhj3i3pWJ3Am7EZj5JfKZkotZckgYfLmap4Ur",
  "key1": "5hcgX7mbWtj5ivrNosuYNGjPx42pxMAHRSaBVRX8cY5Kf2m43mZUKap3QBDDvYW6krV8jXhBpZt4SwByacX2pjpn",
  "key2": "49Zi8b1gADMsVsyzeSxRj4hYQCdaGLYvDnmnridpK8DFZcJ8MGNRY8wgz5Z4HVLvgdydtWuWSGRm84tiGYPXs8Ze",
  "key3": "3q9bQiNeDPsfJ6h4LCcKWURkU5C97SNkpNU8fmFWgjaPMAAvgVxmjMqnhp9BE79NKczNXKkV5mnefReY5eZvjmbu",
  "key4": "516JysYkvUndirRdaqV7XxupB3NZEsQDt9mLGVqf62oLQq6vvm9RZx4SZ1RxT1QQ7TGEpLmryhrUWQ6h7xcvVnGd",
  "key5": "4heiKhaXNZyVFVaYJqBFatYF2QL4Nb4VPLBiaLZcw8LLKYfvy1Q5tELBxgDjEFYwCq5cDb5ZYDs1V2Lo4m8yJPw7",
  "key6": "3ndZuQnsQKviQJ269bz7X3yy7bFQqCuwzw5HpyiMpYVBaQPsk7d3k2nHQF2Qof6V6n1hqVcBjL7BBgJNn1ZcbhRh",
  "key7": "3AquLWaAKK7AGcoGRNmkNqbaicAopi4mAiQ46qVRTn5adDLnivWaFTdU3QNGMxHDhYbr8YjwFmRXzW83p5TxXPZM",
  "key8": "GSSCeceLoCBjx5x5TD1NAw9XUd3GubeW6NtEJ8sia87fwvQ3UMurijcae2rphsqWPS9qfoZGwHNnienRwGRQd5t",
  "key9": "3dVdWJx6VdwCiN6bo4uKRA5UAYSmqtEuX6roHzEHvvYjKR9PwYSwbUVYnqkNiuJuVVjLW1nq3Cb2f81FMxqAjd1q",
  "key10": "38RZMce2m1okjhSYSUY8TfwZEW1g3cFhJYcjgY7yL1JAmFYeaqy9qCqzQxCeRcPoj7c7YqLiFC3vgHw1qaxPM3KL",
  "key11": "xvRy9Ft7NGvab66P8q7tecsz4mMbjmAqW32cXFqNKFsCiFoguT58pvfmFgLQG9EUyML2sQW4866Rj2m2aBDSnd6",
  "key12": "2k13SHiUdzG4SBs47vPDxFM77zs8z5HGR1K7Kq7Lywxobu3GGYbmADzhyy7ehp1ZDorFTVL3EU5DG9nau4j1z8vU",
  "key13": "59puTuYhnDKr8ocvsc81UacyYm92CmsTU4PYsRV3bVdpqtetzjyznTCLpSZYuhNrjoJEucPoMe2K3JduDSDBT7e",
  "key14": "4fReQqzDZc6cGBACYGCfijNttdiZmL9avoCBmwoXMW848s2MTsisnPgjwv6yVgjhoAQppx4Vs7K9sfSXJ1k9YdYz",
  "key15": "des5nW3xfnSuEmZY4oH2Av4gNj2c8FSsPhFfZYdJGoBP7FgFgdCKTwp3YHZ5oyAaC4HHBJK2qYUUZePDYsG14vc",
  "key16": "2Kbac7bHG3huCAs8bDvs1o5am5R1jrQ5sn3abWXzPGYRYEvftJoQM5n24zQ3ASr9n87j4Ha9jrviLWVzYMtFgHZT",
  "key17": "2iRPKSA93Lcx2doVYTfVhSMXywgwnUBFoti23V4iUGz5WyZJNhrdNN6ovsVrKoXiM83T6kPzWK5Cq98BMALCXv7v",
  "key18": "4GeBeAFJCcRbKnJsWVjgUjKDYiBHoBSATzhvtV2w6qWWpnZpvKSjDUtqQ6gpssayXQA1LYTuetfi4NZQ2ZyG6U8d",
  "key19": "2JhinNcALpC1HXMBazRUc4m3jA3eCATdzgYAhAK1HZBcHDVm6CC2gNdWsCtn6xoAiybGaHGcEETE8HNPxPcf8wNc",
  "key20": "8Rz5dtKDomxdqH7NvZc9Woz92Z17vCceFvwPwq6KGSEtLH9NgAPtPuEQNxL3zpGcvA71tK6eGX9bGWZV2RgSfAR",
  "key21": "52TiJ3gi8cKqDvA934628xQNFEe1v6wTfPgrjqRrKdrA2f9TvU1Kx4gBfC8XZRD67gg3o672Y51jZns8TV5usmuM",
  "key22": "486KwuD3hNGUprzip5Rj3HNQnAiPd27zJC1XWn824F3vbztjYzp6iKazsqwZJEWPgt5zxmwkNp24ezZ5ncM27MXs",
  "key23": "3iNG1J3umZ4eS5WRzwwC9fePCQ9SnW53cihhnxHMkjLYm7YzsQPpAY2AieCxsWidnRT3NpJKPfjZdwY7JY6h9YgB",
  "key24": "5LPpAgRkq7Ku2Zxf2Wu4txz3TnNjEeP2rpc6WMhas4nue83BQ5f6v5bx8HQwFZhpad2m3T4njmo2pXJJnPnCKnTN",
  "key25": "3avdM7i3jJAn1kxucimQn8H1no9h7bJaYNqoaynKDLyMh5ujPMcqBFfsMgFUwgFnh7xiVfn9nv9zcUGSGGc6nKxK",
  "key26": "PBtf83tZS8k59swBKxnwY4Dh85NDEvZ6bzYU5P7MqkC438ucoPBPF5cso5bDBmsbYgf1ZoBVns7jcmPtF3cCgC3",
  "key27": "5NpuiXV5rarw3Aw31R3hSxNCP7jJRCwqh3wzFfPVYAH2u8jpFodHbFXpkYsKAGa2oKRXHVVDbHcaogC3411fojUx",
  "key28": "4KrRofay6DaJqBWQQx5hQZzEaPdjy8AJF31e1NpQKqsFRaQXeJXUqSThbMEcD2JLPunoYfSwTdTDQxdGvRH19dYQ",
  "key29": "4YPCcFnCtCnzDgm4upeAAmsE3y6RD2Ui84zQVGZE8n9WP9AXiT1BF9AoaVoj5ze28GmKV7EkSsEYhV5cHG7nTHjL",
  "key30": "2ZFi7GU6fKBh1xnfzYan1U4aokmjZ7h8TNHRni2Q9dfDaD8tsXRF4RQVz21ZQVbkbkaLK1gotHhFKakrakBekwSf",
  "key31": "LDdqBaYjVC4bfrjq4Fkk2FgVXN5ocYTXCB46njWnNZ5QdGSVgFuVSgcQ6Zovi5oKgRzjpr3ieiPqcp5S3uGbWix",
  "key32": "MZHhqsZJetspcDkGq2RDsSY1RYWzvDWm5KWWwFfQrwsMHDyRnbpMPZgC6Afy7pHMKVHXTFk3iuBFuX1Fk8isuNt",
  "key33": "a47hSMPMXJyDKF8BczTefhgWWYay9PrADoAX46s5jg4ncfqoMWmWNDLdjetoJVEDKpNpNXACge7iYoccVZEZFsv",
  "key34": "46yv3NnaRy8HekGohycKx5Yhvpm1vccLJ4c8fyrKSjHbWyKrwrabZzNPrSvgnYpgpbKL1BXSvADEHaTWXZh3oKmx",
  "key35": "32ZSmfkskUQRxUxBqdYwrpq6NR1FXSD82Bwpoz8VS8j8zFR3TWFdw4EMdEBE41DHBJ3R2xPYp49BWKsC9CSW9ErV",
  "key36": "4f5SJi8uXxTPLuofFSwf2UfY26j5BjQxQsaucVCtmGNVCWvmJ7EsBQp8RRLSE5qG3kE3AMVX4EyUT9eYejFwLtcC",
  "key37": "5K8gd2pEkAFdJp9zMEYZ8zeAMshqAWZaAYfe8JytgMb6e1HN6mQ9fERuQZ7G4uJqnaT4H9U8UdjbrSi1GTGYPLrk",
  "key38": "ckAD4ZYnj59o8pvR6euHdKWFARXpXQd1HjETztxchSDTEbPos9QBJVBPtrJ3qRiWGcdPhoJ3gripHzG9EWLXx3Z",
  "key39": "3EipNDLnWAGYK3Rui2okRz3NAtuwU4aqfX2HFMBgzAUMRnJeeechNAK4X3PV9wGtP3icnZ439RqdvNfLg8wamoUC",
  "key40": "55TgyA94mHUdfwgVW11pP3uEU9DHjMAFB4D2KK5mgBo2ryncpy7t7MGWy1JgUobMFtfS7Q2pUFbNZhMJcssnRyQo",
  "key41": "5pDPsR6jME4snoU1St89s828DShoxMb4RrfLoGc4Gmr6hCX87L5Q8aoneYVPgDyjYhGMDHCUumCfZLLopH41ABfZ",
  "key42": "3bJvWxT6118Ud5GMSVuDR546AUh8cMYwfppUUndLgS8Rrrb7jsDJ5SWfNozqnqw3mB1Zdi2b5HFfdGHYb9AWPTgi",
  "key43": "3JY1cTMZUdy8URbwCV15s2zAqRy7ssHQYwTEJBZNaUkKdv44RMVEoDyzZYhrwL9Zv1UHRpe4GUpLsWFKP6k7XoQ3",
  "key44": "297p8WPqQ6Hy413eG1iL6stdPUpU4rNtd1gnMg2djs5chHtrHuzgcN4TmTuXrDfFk984gNN3DGDMFjPsxYCcN4JZ",
  "key45": "LBKrLe7SgxzNsRC1K8njYQdAVkm34rTeQ2GX5zxFoSHyvcjKrJvTCDWv9NHZ4AKYd9SJQwfKmTQnkz2j6w4CCCn",
  "key46": "5u8VPh3LfF9UY7GNkFswBn7YyKVoAxeu5PjZ8k1W4yg6tHaDw4qE9Xv2WrdzbHgM1J71oqVVdt6szUnEiqdgPmAk",
  "key47": "4fab6utNkVNr7XG29JY5pSExGkxuvttNPTBvk8kT1iSRxg8Y5eRmEErpKdnwQUux7FWCg7hVet5mLjYnWcuZfX4Z",
  "key48": "5tcg1kSHS6rWYDUDKPSaDpNerMxm4q19QZxfx7A7X9MfzfmsRR3tHF3Qdb8aMsy6YSzpYanNrPTVV867ZK6rGq7U"
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
