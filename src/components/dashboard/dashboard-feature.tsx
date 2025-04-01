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
    "CmzLZmZtRJtSapbpZq24Z3r97mwejmR6Hrk9BVmgHdxcHMBRzG1VveyocpZw75FHpbQMCADVex7hAa48PZpbkMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8KGMt3fqjDfd4FsVK8BVSbf4emgXriq7ATH93KMFkwmEQ8kjHKfJUekqu5AjEsAx1m7HF4JSpfqsu5S1hgck5f",
  "key1": "4SCftJRT82hY1xeR25E4JP7Q5Kz1TgQoYJafzfFY6nNfJr6XmC6CxfexcAzozGxinoH1JTAVkU6imonRm5Y19MqE",
  "key2": "2H1us71AhjXpXyhw9PHLjhiKdctqqmrNKhfeZ9qN7KjyZEWceyjWqdD6TbmdW8BucuGhK9i8Adhc5xaaibhYoVpB",
  "key3": "3bWScN9GGuiDPYnX49qegS622VToPtRJdhG8aRcvfU9x35dYRVyyzZstmm6vRjsDKe4ZbarAejkZzvJu7qggUNzr",
  "key4": "2pcKdkuFuvh4kFooj2u34awRVtvpHehGNHsjFGY78kDWbysnJx49iQF7sXXx92zHnGTPibWTLNSobBn4EZKDnQrY",
  "key5": "3qUvWGrLY3FChLwn5dpwvyg3qfSJxGeni62XBSCatZuyJvqvUUV52RGWWQhzw9rPMZ31YXBabGhebBFNokrMJYQq",
  "key6": "4jsuCRPxYWPXqUqKzEeNzZ51AJo6yqxBM8eTo12Gc6vasz2qLY3orZiUaoV3dL8NVHy2JucE6ZLvqpgieYPNyDn3",
  "key7": "2HmjcJDDVfgnzwfNPqYziQuUwudV26ihzv8LMpRYD9gJFMsLGvZT5hANz9uCrAzhW9De7q6gaT1QocENiSSGjosw",
  "key8": "45vmg5hs8dLx8F6ddx9rCF7f43RzeQkUdcSAyDhoPsy21NV8Foc8ra8DgDZjGCuUgMb9UdYqDtRHrCv5CZAvd3WJ",
  "key9": "2ruHsfmgfwFhyHTKmX9hsa4nEiY1DtFFLSndMXLYqXfonEjqw1VuaHFHbwTGFBSa4fCp95t7Xwj1yvzM8rauN8jh",
  "key10": "3FZckZWVxcxSsM9Aid7cpjRaFs9HB4rtNmd9sBaKMEWyKvdXdNwz73gRH1NgsV55drmfzvpdr4X46NbrrjmyHv2z",
  "key11": "2u5F6ct6jzMFtaZ8mEDJWP2GPbaJFztGCRHzBctiuv59wijZazaGL8bNUieWmBo8NhjxueRr5DkFY5HvWGZb1k5r",
  "key12": "4TSaEwQknh1gtPid5qhqmf9wJnWYfCqhsUNGcUDWp17kFYhxPUd81QH3kxadpcNmrGeUQhcdRQhdPYLnqW1MCg8J",
  "key13": "2QPp6TodENdMtm1Z6BPYvJzF4f1UUAzf1YpYE6r1arWNSr1PhQqjZBz1oWb4w6jez1PxSuWXUajK6QG5XZTgbJMm",
  "key14": "4oG5qdKB6bwfCVBwKSuTBMo2fe936tuQpdKiUKQw6uWHUUUD82pij5uzsVjznphk6DzbyDHzMmhk2fnXnzBHQx7S",
  "key15": "4Jq2JGLxAHL37w7otk7V9G6obzejJR9tQU1Axr1RQHSrtamXg6j4oc9dbC5s5UsVDKEbJ3qAeDjySZZJXD41EAXG",
  "key16": "5bTJDQsuXKBF1t8CHGe5wNmc4yMjAkWMCd9TKn4GHvRAGTB2USp3QoeMwkQqeikJ1cKSXKNgHAbdRkLNrGzxysWm",
  "key17": "2niknLcYrmnbhaEDBtx6KagY9HwSFyzDZSUfuVc5E8wpm8Hy4Hq4DfWDb54WfG7zGGL1xjMY3gZK1VMsjbwY43bh",
  "key18": "oLWtxTTUJqpj2F11PVLwHBDZE8ukxDen3tCJs1fWj4PnQ7r3GSAaUhtU1x6A5kesXCrZ3B6UJFg6myLvm7HgTku",
  "key19": "1964jV1vYPauJM3QZdX6j1eCpAV23AnBDemutyTAoRtV9MEuEkaS6UQSNxJqCbfYLZNPH9AVzqyCTsWb95uXU3M",
  "key20": "3BXBmimDrM4SV6MomeZM5YoU4ZjHSeKTrtkfDRU2kuMTKma4e7BtqNrzZ86tjWj481Rg6nbMnuZ5DKv4kpRx3cuA",
  "key21": "28nwAuaAuvyrdUnYepAwzu5PisTHbw5dkUAs9YJ7v3WQjGEfwn95J1QgskgkyS5M3UsX9EcArRBmjANRFoJhD4Te",
  "key22": "4r34UaXc48ng1JXBQe5zUDaRHobb2NN2KLgCJLy4vacVX6fY1bhMiYFhdBRzc3GpmnQFgu4cgvNdRbZej5QBYNUc",
  "key23": "2ftyuJykM9k6PxjqDyrNKdujHrn3BKti3acy16ZfUVB7aDzk391vCvFjzMe2c5dwbVsvAV3LgcXWtmpBF1soYN7e",
  "key24": "5ipWvypV8wKdmYsPK29S4iF184g256UFNfw2cPWpp73rAycV7qQ8WZ2oiqsVuXZS3wVVRK65BKPfP9fgyii26cex",
  "key25": "4UiBxLu2MfxmZTa9xskdgffkkER9Li7GqsLDQj5BLQ5cwoCSwtPtRqRQuvd5Hih8kPP3Vmq2yMU2eXRfSxh5VhhS",
  "key26": "2X9dGG9TEDLDP2CuTT3YdyMNdSMLFyHjbeFKS45h24jhBDvvJ7hJ12axiDmhkUZx16YMkQ1sG66SVVm8KFEjD8d9",
  "key27": "4smyQuJACndbD8u7Q43kByBnTbLrFAs1sAkpY4zDn5pPhc3DmNwXNonwwCAeJDUCLQuSaw5L8VWKTUfYh1qFJDu4",
  "key28": "2frp9vPRdiy5dzQFdK1ouSsDNm8MNeNo21B5c3VBoZ4HaNuirEJLV35FbrYskX1cugcwa4NEckUrwGYGf4po4hZs",
  "key29": "5r4hxkk92JbtusV6hx1xL2y5dvBrfH3CDogZzxgH6fqErf6m7bXkAPXrLdgHyhvY9ST6L8Q4vhbjShsQSXnZMxmg",
  "key30": "2LYdKRDipkGEBQs8rSUxHLuuHDegoRWvNqiJKKiKqEru9HiKBgyJXcD5fWvaW2HusZgaMcPnQzior7eSmERVvb42",
  "key31": "5QSmjuwZJdgu6FJKy7P7f1MX5gpHzbUk2YnRvLjgE8weCicxtQsg48yv3eLnWQmHhCH64FkT6k9tS5oBm9Sc1zap",
  "key32": "34PXhAJtCyJDGyvecYjyU1zrsBqwCKJKjrXq3RZVoMhoQgWkeTWST8ZvQVktryZnLSDFwvzzUmFRCgunpQMfFB7f",
  "key33": "3RLiEwPrHWh686p1ciZdWUFCT9U8nGi2SU9oE2BkLkSy1z5m8BKooVzAMXjMFHzv1STZFg95eivNKjDUrwWw14w8",
  "key34": "5dmkE3pjRZMAVAfj4MvuLK5nZjisoWP2j1MZMGMHYVoNcypEW7YenqJniYrbCRS93ThBRRDqMWHGqbPQA2tCrh3M",
  "key35": "myUyRTeePQ27M1y1LGd3SKoFxgJFkEAZ971R6ja45BmXxyhTNDfYZqTdpmYsQDWKEeqaXBXp4FGSPM8KrLtf1XD",
  "key36": "2YxArYaW2nv3bYGv3S2cbHfT2Eh8XJuYLgyWpdHwXL9K28ZxHqaxn3V2QeNmR7uKf78wakqspPVvW1CU762on28d",
  "key37": "3Ee2UwqnmDmUsRYtrWDsUv7fL7bJDtvwrwsDJEmkjHPKiScMoAFr8nkHfhvfPbLMFpoqfsMm7CWnMcSmnpGRAPcX",
  "key38": "4cfekg9YyJKCmhqLqAMifz5SWSLvtUwzunYDZdx5Wf461kGnBQaDNUgBgv4cQ3etePuwT6q21SqY8BncuiFXiyDP",
  "key39": "272qEg5d5uT4CgobB6DaoL1FdaGkAoBLLdMwpKprQGZe7wLxwXhM1CHzPX4jqqPWFwf6pBTKUG6svP13rJMMbcKt",
  "key40": "2n2rpHX2vvmPYKBzAsnomhpUkCL5Kg885DUvMgfzHjb5DjzKQFseAHCz1UKqLp8QWoL8VWf8dMbLH4jQSB5ytX5V",
  "key41": "66jDfcDDwfPx8xSmCHaRkuKvsX52n9tPmfBkX2TfvB4q3PzVeMsXLqfdWKRkhSeozHfTfByXkhVJmVRUCv6WNa3w"
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
