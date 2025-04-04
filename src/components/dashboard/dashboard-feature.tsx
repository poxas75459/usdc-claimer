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
    "44JiK4thLRFhXuaoKKveHFPBSoDyUvoBrciFKPtXa8xRnHzkFHSvBpgQmw7rpjPQ3zah9WXFhJ9pWUwgRwSX4pbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yAp92wXjKvjkijhy133WbsGZDjRjzB9fy7JAdo8CxELjtLogFyYfo13GsBWgsyUqAHYnWkTfjAGYwmA4niSW2VE",
  "key1": "3RiBjS9tMXwAeyQtbVN4xzLHc6WLpazUp5p91jm6ogHE8LzVwBfNyowz6WheWKFsFfmqzyufLkG4ym3ctFkfym27",
  "key2": "2T5ebWfvAQ23HaLwW62ko1GqCMquRwiSLjDMrqsM21ACJCKSuThMVFtYoTB7gKDFZgiscwiC1vqyheK1mzSD1sPm",
  "key3": "2PoDfozZgw8fH4N7RUPyYfPtb9BbwdizweHZCJYrPEiEzaSt7w69Cgs8DScnEaW5ts5tgD84iFLRS7gAjYkjHwT2",
  "key4": "66AZTse5wthTaVu9Gu9zLTXS84e8sv26XBhHg56HeyeU8doBmB3DrXGbJ28gQNGnG2h9a561Denst1FyM3eaJFvL",
  "key5": "GUvvdMJUZjPxSnJWWBMFkafpKT5DiLyZykRAmfJyg2PRKcT8AUgwm8ENTsmT6Y7XM8i3S1nB1RYUKeLmvZ4AZxs",
  "key6": "28sqNePiCs5TW1RkbhXdCcYs14owGykywyf7MEcMajzFfC34x9BZ3m89TXggRNwgajFR4VK7bQxpq53EhnpoYTcc",
  "key7": "4jsFun12XnDiJBuFyKrPzYJ8QXy4L5SDHafqjaY831X88XUPuPsc5xX3qMbRXSTREvmYV48Z6PLs3tdDmdrroEw",
  "key8": "CALSpUQdr5uaZpzCh8sbwXLk4HF8rfoXBYogYNEqgXNkvyjZCmya61MqrpK1BVesXC5kHKPwLNuAvhGvvg84EZ8",
  "key9": "RHxVPzUXCAkfW5NkjV9dKsiEHbm85WRXfxHtiXCSkPAzsxjptoeL3TNJMzffqRwHcTh8ULnMw3tjEoyD4yxo9kg",
  "key10": "4W2KZNkhka4wBRHzJG1DhrRSKtm6q4ULwjohfwyPrtDJCuejG3shbhNTurUCMeYcSBY3VXT36ac8tHfusbERJPpu",
  "key11": "3sTrbJdNgUpXUAcfsYCUadiUXYpD2Boudb8YXW2g7As8R87TsoakYSAMuJU7Hbtz7vNRiV6zDCE6hfMaADGrorRx",
  "key12": "22zViD9TzVd7ruqubHYtucNmz5PnmLAqotHbQoaUk6vywLaq2f56L3kJCmkQ9g9et6a8sSdSdnhJk5Uavz1UaTrX",
  "key13": "5UfKLVSAAvBPEoSVaXoQ15MMjzX11srHX9aFKbyJaVQ4TjX1q5xi2axtV8HmH1vyzn5tQkkj41eyL35uDZHJgvDz",
  "key14": "iDBd3JTzFivsKC42Rudd4pRsPrTsVp2HsQeeaGKRHGZX4DHgUc1xbwEEPWhBKs4yMj2tzKwNWAS8wNzvHSz29wR",
  "key15": "qb5S56o3hgHJBkzLD5vmEV19utYbSP6BK1Qf5s4d6oCKUPQWmgQajjGKPWFBPh4VBxzmTLbcE4AfnSEv9jxXfpB",
  "key16": "4opFwjeKXzmp4PFdyTWqCkBxqktCQvW8H7GaTZMYZQSoeWzChbRzSCKzzgmw6vWzGGD6DqizcSxTXrERzkM12VLA",
  "key17": "5DUrWRLS2DMnCEHT8T5NqJAu4fduZybrUQytt1ADwW6ZB9iKLqHXDhG1d16M55Ea6bpPyPLuQsAzVgKMeNsrnYGZ",
  "key18": "2GE7sRtzHw9oCiz9proqJKacuvCYyvKyMNUuQHeYim4VUE3gN4fE3oTEDsS6dZESQGxdNzZ3bPkL5ViezYegf66H",
  "key19": "4oGmfeYZe6rfHBZzCod7rCDey8uhg9We6gLhGQJVKZhfXiHLLEEtiRZ3kqGCFskNwWJWNZDwcWGHwLSQGK67y4kT",
  "key20": "3oJHGBqedL5yVKaGeyo6KWzWximcrRfyjtH1fqxiQHeKRZiKbdUAe1SVofbz4ahnXqXU9H58PZ5h1r9Begxbr6po",
  "key21": "51HpzMcGFw8hRZ2gmpi3Uqkz2Dv6JKztCryQfd2HKeAynbbXXoBBA7ZPcNSKg9BcfRuc9qLZ28qpmWZ6ToXZ6v8Q",
  "key22": "5MbW919gD5wpJFGFYy4psJDnSAvAyWm6ydMeqLDm1Ahvo5cdxkakQpXuiNr1CNZAZsW2j49aMXTkjZGXdWoKBeR5",
  "key23": "5oFwmEEBnuTc6rhCfZEh14Rx5brLDbmr71GbMBgwZLLwJP6qJDxFwsRztDL1hLSiakFBYZeHvWtRomwvuecuM12G",
  "key24": "5SsmCq6R26Uza2wJGWgzfivFz8mdvTPJktCEbPybpaZB2im5Q6mr8Avk9rN96Y4fA49TM2o7JieJu7MBWimTFzty",
  "key25": "wEEUCJbc9HBhmyNoDgdmNPKJ6W3vmm2DZf9YrSkLoKqRHvmSs6znCeWhZRp3gsPnAba1gjnaSeSA1pMXdrxhRM7",
  "key26": "4Rt1zAe1ety6AaBsE38TZthWUeQTtX9GdQ4icLC5f3AtR1ipY9xYrNuGvvSd8MLzdjrXuqtgfoa4qvoKKeFtW4U8",
  "key27": "29WZieQzQzKNAJa55oVoDGjdNBgnkTn67DVhChHrZiaeHKvQb8FSQuebzUaZiy9VxSA2dZF7kbexEdPoHVWvUTuL",
  "key28": "4JHThwmMurgdGjdUYb3vYuUdyWt2R5MPegkQjbpwcQkqjWowjteiAv7m632BZSQtaDRNLffbd7hgN6Ty4nAJKP1e",
  "key29": "4WWL78f8yVQN9kHfwcNCuJXaLMQ1eyQgxrZF8tCdnwnCn2qCNo2aXoZ5NF6HUZQAXzqPJWDEpX8nEXzwYH6dGjJ",
  "key30": "4r2fjgDSvUkzaSLhs4rLx11aXrZJt2UTTjiXnmWmmLBZSNXZLJXsTb2V4VM3wRtqgpXRhT2bJXhfupewZuJ5gb6C",
  "key31": "53eU6PgRv5LPixeTzKbAbpYN2dP4Gy3bVRR8byF1xnYdFJ2grUV4vnBhpq5s38Y33nv2pCj5wQ1ecbjdon9qCp5o",
  "key32": "5GKskDos1mxiSWKFyKBEEHHRoiGsukzK5vuG145F9EfejL385EZVh5bJcEp4rSGqAuVTHXzetToQAUgTFGfGndpM",
  "key33": "4gQHZHc4JGtkJfjUoV2d79wmZ8mHemsQBFrRQYrPjU4HqTJme69dRAXu6Tq3ehpKuGbnU9dRir6S5sorxkadfP5b",
  "key34": "4viD2VtAw4wLbfPspNidMYsvyGJJBqVtEqwW9KP7vRGJtfeXvQSwN3UtyNgYqZe6TPMKP5PCybwLUcQNuVu5LBRF",
  "key35": "5J3oLf7qVNcbT3prLVe6TJNvN44gLcWJMwgXhNLKZuiHg8VU6gEPjF5u6PVNZ9qr89UCRpz4JyNAdwupRoEadznZ",
  "key36": "4WLTjxZwupMzKKficv8Lq63tcVMVtq4sXLVjscCpeWubB7e6CunUe42MVegRTWiLkq2wmqZr7YNtS59X8Neo5zbd",
  "key37": "3eWA9CArvxtXeuh38HJooVZVtRU35yHAmsYsBfEEHw9QYoZZ9C9D6Z6rALj4YzzSCVp9rQkV4LBhsBhQGPNvqBdu",
  "key38": "3mUVfs7dTiDALuhbSVcZt9vNNKpcAhUJ3ctwoETRQuKVNcU8KqXpQM9XYQtcgJaaXSrtVci9wGiDbnt73wGTomBD",
  "key39": "sXc715Tvv4eteKGZ1BKTcyU9iwMbK4rSrwv51m6S8UcHsoc6GfHSrH2S2sGAU1Be2nowpXmkBY9CbYs3AckwjE5",
  "key40": "4jSMBuxqjeFWePXn1taLkjYfQKixwYsMGQZV1Hcw2ZGsPMcLJkDV93GZnMQZYXQ6a4vxwebo9hCcswqUQj7e4Afi",
  "key41": "2ua36MQgyopBMYtqqqCBwDfh2VReBLTVSJVS1MJWgfKQJGgXQE8cww3bYfKjGowcTdkdbYwPXfXyeqVjrPwjNSTQ",
  "key42": "5Gnu5tMJfoA2iCY3fTHrqsHRaDTGkBVxmsXPPpdfiKHMUuhLNNXkpVmYey8WNyuGq23YL1eEDdY5Sr5Cy152txt2",
  "key43": "5nYrdsahUStXNgjhy4Tdh31B9LCENXtArGmNBD8SV7q5nt9Te9FyJrwHrye3wYts4vnjuGXMNKPATzJceytT7m5q",
  "key44": "2LWQsdXTb52yZtw6mqFXpZKFgywZEzVXhBSLeFerpTFibx5MVGXbn5VujNXLX7iniXd3E3chYoetSHbziKpATZ4w",
  "key45": "53bhuyGeomrcuh3khJtsGZqQvzZcJj56KZzCyQqi8fW1s1EiseuxmG379Hd3JZNB3KFBBbFhwHoSaFyf9cfWHNgW"
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
