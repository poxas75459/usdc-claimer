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
    "3UiMmP6w5jnxgJwZ2fBtgDyCPeTepUiEVayzirUPUPgwa75xDhMpbUN6GKZbcFb1FCEdFcqjUEMS3CfgXM3Mazkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJoAfVG8W4ToTnLqcbbrr6K4QBS92wJvrEjuu9JxgZeZPH9L1KxY4PTCeLsQJUEjhWfPySiPptRLc86en5M2RuH",
  "key1": "2jAAok8hFYgHbGpdax56qgx1sf6UpU8NyqCVS9cv2TwTaCXk6YND8SLeUrcK41usLSdGmFJ9j4pejFXJSmFrnXpp",
  "key2": "2jGfcrV7ThBemKacSbeat7wH3qdEAPg2reDv9ZtqJtm4f5zo6KSKJCzdCfDxFegvuaQo3KWauwZyqcHSKv9Dgv9d",
  "key3": "3Py4UosK61eYrGENVcpLyZuNTPMh5B6ZsAhe9zmJZFvn7zjgAA2scC4bu96Zgc3PYRHPbSUqsCN2ypsZkxyqc9o2",
  "key4": "GqRfSSvQKYTrMyUrFhm83Wus6Lc7BkQz2q3v8nAebNzFgcDsJXMy1aEm3P6YjFZ87tKKoSkbnVoZVfZDQG9gdhw",
  "key5": "5RxXDd2vZ4YnK2UW7vJRhAxCRehQYTFfvbSGkubqYDcorFfbnkLN6rfxfZxG74jiawDJy4DsWGBcuk19xh33gY5h",
  "key6": "DCxT8cP3TczFW2SBogqiZjT9mCrkzfapWeKLdSenuMrSHgksVBojfB8NFTg5sqFP4KZKJDR7xSvb6SdpVZ2G3uH",
  "key7": "4i8WXAvk7intuWFGNUgjRdrZyZZZTi6M7mE1MMHHqjJLvnKRaqmbe6jooDN85gtmMnm8txXYJw2E42jzRtoYNQbV",
  "key8": "2mZN3mJZA9D5uM12op5TJ6ajcmVkuxencLNKFvVEqpCbpotKUhwKvtZUxWzF1M8DFtRMiQz3EMnoFEsPertoeL3y",
  "key9": "spMVN3bCMdfCLUDSvfhZT84jAeBRHVtRn1iNonKNr59kzHmgk8mFb1pnGszKLQZ3k9FpzD6Cxsp8jZU95LqiYjr",
  "key10": "2cGH6sMczv9VxVTvv24GLUPR35VQR8ARM78Sz5jFgGwPRX1bgLnx8xdzETZxN8s2Tq5XqF8fDHwfC3ZYBt1sXCC8",
  "key11": "PDGQT1vBwCRAD3Vipo9ihYi8WnaEQ2ZdqegVuLiRgb5CWDXshutPQnhXcNtFUizFEEEwPjpU4raCXburgNCSBTx",
  "key12": "4EbZhe1vKpacodG7KXhoTi9fBTmRSPnGDk69dPsx19wVPsNzVYs4RLmmG8Qt3gzGVXWySzSd8Q26GMj9oFMifZu1",
  "key13": "4xndsumZXkpWoU4LVLoHzjsuaZFmtDXudJ6heHySvMVeaL26x4dUVB5HucZcAwFW2wkkW4CdTQ2UqfZmuAyN2e56",
  "key14": "3KfLUzi88jMAeWq744TwpZUiNsikLv4YDyAg1u3dnWuwNa5fmq5ZmvzNmhTAYmN52DqL2VwebA6WhUMNq66P86fU",
  "key15": "2cAcxgHxM94shKTp1mEvpwkghGwcBjc8Lrz8gGSYYLeujLNib44bV1dunv3n7ev3Dg5FptSQPci2tbKrvAaXKHCH",
  "key16": "3Py697FXsnr7hLLcvkYQyN3iSB7uhnqL7SLBp4r1SjvWBeAMd8fXjKu47Rpey8cCefeFkEGVHJs6itZnZNfuHPwF",
  "key17": "32hv1aVWy2MDbqBwvBAkA2XWgojqkEUvjexHJfnBG5Bf1uJoVqFjpE2Y6uTwgFPPFZeacwkE7W6hGtUTxm9pdEhV",
  "key18": "5zoXnGSvV2yzkGm2pYFnCxnH8H1yCcQUy19aBP8ySFWNEmXzi5B3RifCBoCJHTrcqgJDeCMFaZ9A5B34yVyKp4vz",
  "key19": "3WiWtopHgkFiJy89X6R7VgNwpgYCSrdWe7Q44SENxquYxsP4zhMwKBCRhXTL1A1rBSPXPgeKwRZ1YABEwYwPisUB",
  "key20": "4zfw7MQP2KCXgbB9Me5f2og4LerswimkXcZKuXvzLt6778jNkj8h5CBTmvL2x7D5CtwsyF7EpUV74UWi4XYb5Hf3",
  "key21": "cuVqAusYL3y1Ru54AQwC1ceDwirg2sPvhHgd8UeoTDPSi9DaHFdA6iXUCMQMoccqsJ45ovbHb1yeJ9u4QCf4MJZ",
  "key22": "5nCvnVg5psZNja4dL7yTTJ1Vp27z9urwtXGn4rMjTF1hB6St3EddFgCG2rLu6AQkDBPyYHJnPpPSfC44JzmGEbbF",
  "key23": "4mtKbeQYAikz7EC7sAhQooYzHfLNbK15AFisiPT8GpskRognqMkNwHFDriNnBVtrLmYBqBMKtEmfz1LbKJ8u81qb",
  "key24": "5UjcvVchCM27cKDCKnxoBjVMAjayjPsJMhMLb6T6pGLGqavTPQpEh5nQ7gDJ28FcPkXbVCtorgeLrGe2PD2BxQsn",
  "key25": "4ZxdF5HW41wckow8PY3nCzSBdzgMixm76tiUChiAGGWjhXgF8cunQV1YSqYBm1bgwh2MkqzXd6TFyUv4FtmV5DcY",
  "key26": "65urt5pGfLzGwv32uvEFB4LGrVoGcbT46Vu5B4qPphxCGTCU4TqGYXBdTa1fHRrhgQmEygRc4bZLW3QA92RmMioZ",
  "key27": "2tXLoQKE5rtNrAc9NoTBTtkvUv2mLqs27xyNsBKTHLRbfrLh1CJeVvsGpWb8YCMWqdR1Jgv1bnCzbmcU8xiKxS8t"
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
