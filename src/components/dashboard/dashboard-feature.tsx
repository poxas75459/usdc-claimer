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
    "3AfZm4qVRk73x7oKdU7isJpVUKSQUtw7SJgqFea3UPpt6MtbidBXMd8DBmuVKssirxAjzuvM4BC6KkvKHgZSN8e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MBe6wgCWuZs8Z594ZVxkUNzq5aNum9cuUwAaTpJyu4GwEGniuYXDWFyL5NNoTu6ZbZyCrEmdhUopNRpHmnn2rfv",
  "key1": "21bhhqw4saboRkY1Fgs3VBaVvFx9X1fVDtiCzzuDZUTVKsypPTunXGcUrjkagsWRaHq9ppz6ygQ59JkpsuoxdX91",
  "key2": "4VoftJ7pkeKbpwQDqKwTcn72eZRbJbZamcmuuGh8qzwp3JXgTsbYAhVB6jSBi2tLBdSEXj5hxJfFotwkUbiUxQYm",
  "key3": "yy2JFHBRuSR2kMo8AQQAiTtC8QT3MVwh4kuQucUCX1zKC17LTQX5EEdqjKopdegwZittaHuzwS1JeVenrspBrYY",
  "key4": "4nBch5YiT276EsnHqVkdCpWebXHFpdzttHQbACD4VqVms2sMAysphYJkLcVNwAZkb3F2UdEstzGSj6o4fJYEmaLt",
  "key5": "5AFiKsy8enRCTfurBoPx9AFKeNgRrJRkZszGAM68eA7cS7cmdH4jRPaAz2KpifY75oCJkvXyBsbyXtjB94WnBSzp",
  "key6": "4CmUxkdY9VAuHDPCDV91xjK7gkxcj2aEMwmZnqEy6skmtxNBgNVnUb9WzDo3sUVPSnPdmAHmUgW2KUauz6VjfPYi",
  "key7": "5Y4JZxYtuw9LP6kej1d1EmFdohJmV8GbRJ9x9LjpqRrjJ4rNZKYAtkPPurEAs1XCsmyu5wSKmE2XwEo27c6xzx8V",
  "key8": "Vap8Luk6Js542hudtJ5MRBVho9J2seaTMv9xKURF9EZSfy7A4ZapsokRKu6bYdWjTVwNwmkez3fnMUT7M7WUA34",
  "key9": "4E31nwWjCSYMQ8dA7wBkHW1VUjSS2HZMoJbVnw3uZU5sCdfpFbSbknGzMTduHFkU7QiXGGfQXkUMwfdQAzap7n55",
  "key10": "3ag2UE5WtkKY6AUajDNtsewL8zWCfWyK4vNYoqKetShk7u3mtfSrhVqSTNProqPo1qk5URD2STujuz3HNrD5iPAA",
  "key11": "4hJ3wiqP4KvqBmXDgq9ZQhYC6Dh2vwDg1uQVZwb6RN9u6uLqUHehMu4KsNkfA9aZEbpy9So4rs9WVaKMMaTVorKA",
  "key12": "5ANuwzriqKZGWD2VJSdFcwkFtFmXJKYApa2FmrkLcA8grWx5qM3h2njSsgwvQTXEnZ9wkMih8nHVRJdA1b5GLzpS",
  "key13": "33To5NJcWrgQ4G5gBX7TKrKt6v4MgQMJMmgt3A9SeQECukjYPYAXmEEazMgmNmH7sNewAJjuaakkZ5T4mAbvB3sd",
  "key14": "2hQZaZEz8CyU8atUzzHCm9rRU6nxHGoC4pJKjf7xf9mPAgcc8UEcdrhrjVgifE7d6iarwphx7VvTrbtjwpmHcTN6",
  "key15": "5C7d6GVuvoRoERyrPBGb6ghgP1pEPoLcxw9k6VUKTYzf1ZCksaUNA4Yi4ZrE2wxj7McuwUrjfybnq4i8J1ez5Fnf",
  "key16": "4wirtTtgGNKoN5cN6kuYXtqVBvKEp3yfcJcqP67cqNmNQspEQp9UpPwYyR3WMWV41FhuxEKU3riww9aPNzjbQ77z",
  "key17": "21DqynBD28d664FscFNxbqfamMXse8Fcsjo6trD3JWBdX12271pGjqhmxtY3Z4SUn1KT1MuSnYKz7vgNdtgJu8x3",
  "key18": "62r41wNhyWxwmG2Lbho2aEoCAKNVAuX4EEYoSJCGQA7iPaMvo9p9TkcECG3SjSyDoTDdTczhdc4PJvPCoQcBGR5N",
  "key19": "vMELEyujj1ihhJzH3KqH9stb4Wcgu5JdmSd21CD8S758v9m65W8StVFRER1Fj5kA7wtT7U3uLMpwQ3n9JmaHeDM",
  "key20": "2xEtdEif9ouA49oJUAvYyq7sHfXuah3n7u9K7PfrGQh8KniMWn6Fx81nt6f9knEuzqfgS2CSDYYAvaZNMymEaNja",
  "key21": "4oxeobRoki16LoPMJrziLsQcxGVG2BhZh13WYvNmKRiM5xX68uxnjGEjWVovN9E7JKF2pbWUNsyy2CjW7tNK689b",
  "key22": "3PmAcq9M8TgbGMQH1tMCGeGCk7DGtEsh7Xv6WEJM6izZnpf5VKNYKGprVcrSNPzn1VBHZTa1EXKQ5ZHGeTwZfPkW",
  "key23": "65N7482KWq9riTHyJ4REwB1ntKrX3mXnVBYAAHqMNDmmvEK5jtaiaLcsG6FfT1fyUVHSxKMe5v2EKZDuDVcavTky",
  "key24": "3nPvVhKRUPVzpe76imVGfqE2xswXQjRqe61YLRvxncmY2WmjFNcEAP75uZ4YJwPhMBBnJxxzqzanSWAZ7A6JA5zw",
  "key25": "3Tn6TKDJvhaBcQej9Vk96Ea561ftCN6934j5mmtDLdDABRyu2XGudEGbj2W8sdDrb4p2hWGJXkr2D1ifM5gfCtAB",
  "key26": "28L88uR8vxA2hEekzx6edhuSdRLgm1x4BjzHhdJfT34XjsmB4JSVivHa19MCjcMG6kVmq1b3JRE5WD5gZ8otkhRR",
  "key27": "4Ffv6BXgQkaueNNGRQ9FFPds5354gmESFumusR5mtmhzf9sjo9HBYw42YZ1BAjueT8tjJfocAQdSL2hjsvBiTrjP",
  "key28": "jUox6EpmNQEmYTYvemc6VQNMxnTJwgeCVq2hDQ9GAxAJx932F88ir4rBvAc6J7kCCRNMR6tb2Ma6nrGbLQX6dw1",
  "key29": "3t7Xdgg4wtbcAGepFXGWCZxge7KJ1uBUnXFmZ21VmTYgkALLtJDhrNXJhGfeMMgEdXY3Wzrr1f4EZb7JeEHsYt4t",
  "key30": "62GaAXExvs2s8CptoGCfrPKHpUPXc4bxNYAfpXocMpiL5j8HrzwDVHyYb1FNr6qBX6ZqTRzoyrJcfNTtJ9ZQ9e1r",
  "key31": "4MdrHvN3mvYjcZa99NdRQiZV5kRm3rSLmn25tdX28DtG6KxLr1SiLQwWEphGNQNPRtN37kRT8zD5oH6QxRhCdrq3",
  "key32": "5u8XAPNd1isntixpJE7Eio39mUCuBgehwQXT31o8z4c7gFCdWAmc4SvUY1fkAEuZ7Yng6TQhM6GcUtH2C4VrAFqH",
  "key33": "Z98RY8dC7WtEbRFLtWzArT3xChNnZkSZnCfCTUZHHQKiuwJoya81XtXUGYRQfcMFKdQuKpadXvtWYSJ1DUtQH2b",
  "key34": "h6t9aecyfp4rRBbvTwjWpC9f6Pyy9ayeaUzhiXw4MemHdM3WkJmUhTmgMpodMMb9rUPypLZX96HkzTMMygR5q6W",
  "key35": "4NWJ2GuKkYQexyTsiJmbm46kizr55cKZCrG8g975MKALawLHPGjbLHCUozLwXSF48a14wLCbKJyigCvSL15WzPiV",
  "key36": "2DAzc7FUAWAvnjQ2aWMk363Up4Fr8kYiWfD3ZZ2MWF7HfemF5Cx6X8nNcYtknP7u4hf5tXTyz2Y4tjwhcy671mGf",
  "key37": "FVFmot2RztxNpzknMFCD8CnzGteFmPBQmUd44LFMTjsgS2TvvUPYvsHkrvvhfUNB1cb7aB3qc2cdAfbpEtUeq98",
  "key38": "65RCmwab8JbtzjHhoURtF1tPADALVuZmCRsukGyjbQSeF5d5boSyuqcdLRQ85mBcRPBkvD1HQoZMfUFGtkPyXwoj",
  "key39": "5LhXNbGQyjnmad6jsBo8VLJUYarq3BeoV3qWtHzbQHerxzHa9XmmMLgJCqv1a2snk4QYDDpJnCpVdaVofu4zeLUJ"
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
