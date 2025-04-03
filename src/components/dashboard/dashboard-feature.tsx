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
    "4Ut7nRBSccNRcjhhYNSiqj9rirx1uLYh9s4cWxg134zu7JA7DZ6JdViGZLdNA4VerqnmpAg97xk4dwAWxWTqPgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bH4ZaTSgTNNz7MPkdy7btC4okn8fpzWn88xMeaupFupUwQsmbWxj2EdnTzK69shVbSSCN7NBXahdSmXrgoFApBY",
  "key1": "45o1emDaEPyXxJpmPqb4zBuiazLyCegkkFfmgZYQuXbnZ8tjGcidkZNbeqdxdn2Jzn8ckArwYdzgBPT5Sd9kVnGc",
  "key2": "jbyrHyfXGbP6wsqNkkp78aBHBh27XT4d8pe56kFbBqZNa9H8KpB51jBTcVfyqYRCaqGtxLpu4Zc7t7YtXdDsEfE",
  "key3": "28oaqKwsSDsZ1JgeM1xkueLtWKNVcDGCJov3XJp3bZZGQ8yQ3TtHD5b5fSZ64LppRxY7u61nBLukyC94irkabUzq",
  "key4": "449QnnvHBgT9E5DX5XBVgmYAP3kBMnXv1ufBbcp1kzYiamyhpLgPTCetjRYNCUg3uuVv2FbWYLEtpy3RHhZRpSUT",
  "key5": "2KGCb4BeVQ2AjVjDqGSwNcuPgSdAgK1vm6msmxqMsg58c4F9p3jkjAERzC7LwwB7q6o64L58QRhqwpYRnaRh1PvF",
  "key6": "3mogVv6Cd6T5jHnriogWeRjKuaajArLZ6PSRVteo2GmA3dquEDTP1wp6Hu14Wrz3jvinZx27u275yMg4ZggZCv85",
  "key7": "51o6EWgYFRfDRSbU5j5PwUVHwR9vRLU2TPEUfNLLvLjrNh7tw3Bx31FiYYsALKTWrGpTaEJRfGgrAS2SuNefZ2Xk",
  "key8": "3rPZezCifp1QasT39FyZj2ysZNYv7GiBt9Lx5oxz3C4ky6ENtfRmRxD5RWBLpzce7LVwEgdtPwv4wDgs7P8zFriK",
  "key9": "Uoe4MFUKxnWuUEYNGvHAJCjEXYJQXDhxd51BkBWRKUL8pcx2QctYGhmmCuE6bbx9b5p5wKY28D2dht8zVUXicjP",
  "key10": "47wqWGArKqyBKHyWHyhD3RK6iBjHrk7RcmVJ9xkPtFGfsaihrL6kUDSWmX3f845kQEDpBqQEgmFedakcFDBfMCKg",
  "key11": "2hb1pYcCrqtBJ46hAZXdGd6hrXNY7p7DMHzFFwLiE4ugQoduyBmUjfZtbJBUG46T7e8TXTHMBUzD3qxPHPN3hSXz",
  "key12": "3cGQ15KHsNWVhnt8L7Y5HvFdmxjY86vZdADKWujAQeGY8qWrFwmfGsMrT24ZbqMeo7vvFzZSL125nsTPGMDcikFg",
  "key13": "62cTqRkfW1oZpJg2jMrkpNz8iFUrrsdg3EznxbgpUGVVrQWL7jd5w4VBvREKeoU3ErtKe8WitatHrzaK2DQGsuWR",
  "key14": "3EC21459PunpkNdouphusrFrMnwBbaRWTCb5qwpfGfFqBqDLqq6PwWFoCGLres5QBtrDmKKGGraz111tjmdTUX21",
  "key15": "52dvDErndM5ng3tGRv7K5YzPLG6snT423Zqq1zzNRLz1QoN1dGFm1b3d8tMPcX9cXR39wRavVhzPp3hf43fhB5CQ",
  "key16": "4MGoXWaGQhramESxwUH91P4pYhtbXxqpEUxcaMjxBTxR9FaUGtBGM8jzVQgUCjkbdXDZ9pwAezqfmUCGJca9NeL9",
  "key17": "23wTBGZVn3iLVtm8wEMhjEm33TexWL56tJurnkiV4bWyDz8ffdtEAkWU2JhpKhhKZojiyLvDB5WwfEtXtuhQVGv6",
  "key18": "5P52EUY6zDbsAYqPyUtcTwnbshzbmMLSia9AMqbGWtFLfuZEtAqCxABn9oArgxwNh4UXLBFiF3h6SMvNEN15idbT",
  "key19": "5mANivLaFpDqL3TPuDvWxgvWEL91qmn4m7TTHpjUUB6MHJbwKnkgRkXZpfs6CAAX9FaguWwAJNKrces81w273Hkh",
  "key20": "5ibU5NSHu2YGHEE4qKGmbRMaV5iKgiqwEkAaY4WpBrubU22JNMmNbs7aUPGxskJYi2h5Kj1FR6nCWiYGaqDBUb7A",
  "key21": "5Ge8Mj2xqj8j3waNHSkmH1EC4rdCvwMHcvFuQKtpHdQqu8YpEPHcmF7vQkfFvjFDfmKtpiwczKyZ3FJkeSmkC1Hv",
  "key22": "2x5AwUL3a4VcPXvKyG4pHKcARuLtYbg7VNfwie6NV46ED1dLBC9Rm8anDcrcLzwFwDK64XcR39WT5oaCxgoB8eK",
  "key23": "662wY2dFK9JAjtZdhDdps8bRoiqg9PSPBEVpEG7AwZ5M3gCCKLmk9n423A2j7AiDwnVYNsTpL9o3uRvn3RuqPWFx",
  "key24": "dNytPrqmfSAFvx1yTyd7DE54UUBySXvU2NSs5xG2Rc6orSexoFWgeSkc4zBCJk7nm2SktS495f8okqs3w7tkmRy",
  "key25": "313PFkepydHguuuVsUyVNfreGeuKgK95YiJBRMxUYrmiRHdsMuczynwtS8N2HbfhSNYk8ib2WhtBSj1MhgNzSd6j",
  "key26": "3evszqudeH2kfY7Ew3XDnrCZTsmAwow3YooB3b3zjHm1tpDZwP6YQMMedy2d7KeegjM8yDzStgYkvBSa7CPvghck",
  "key27": "127xV5NmHB9Wpe37veffniprpdufSmfjhWPvu5hKQCruUp2KC1mhPrFAJPszbxVtqvzwatgQoJJKVggWNRs8r4hn",
  "key28": "ZqBENMmgnzfRkTggaE6fGS22LXPWMEYK6QMLyMY6LUzoWbkyvFKdZxTbBKEeAHz9o4SFNu1VqRvvkSLDYnK7N1x",
  "key29": "2gpdvFGQyWMzXpf3Rd7AnEU6u1RVHuYfurajcynr4cBxtCbQdPV5Y97ocNq5agYoN3xkweTH374m7WdYHrQVGYmu",
  "key30": "5M5Xq5288Nsaiz6CUefoMwGf3zbzdDP2rE3sPur24qX5qgzxK1LR8Kp4uqdkAVnrAbZ1mzhsEE3WGyXXUSUQ8Qoi",
  "key31": "5DyiyPtEGLmFtYpmHRoDJcVMnHXyv89spZsfQARcj3v36vEwvjD6ABQXpEnkF9AKK2sxWJnDrEAyVmuVYkGg9SZS",
  "key32": "43zy8gudGoCjjEqDaFWcSggRtYr6AnKp1F78EAasi1CRqeaBH3isoLKjaZr6qDQ6wy2nnMeyYrA5RWinYAdoszVq",
  "key33": "wUWBKGjf48e5LFsS84kQ5EQ5LGZ4unDDy7abBMXYUmiENpEPiQD3dnxg3Lp4NeyR77n1vbY8dP7CKkCnjT8n1zz",
  "key34": "fNCaMhhzmiLUWFGwso4iapAMQnV571rYQE5M3oWBapR4yFibzRzLend9R27G4UW8VKmUeQgtetyWAPdwMT4mx2b",
  "key35": "AmQ4vUUwHsakYR5uqyxjeWSCM49LKjE64xoxciRkWS6i1zPVeaExbGJgVXmLB6MwLsqcPpboLD2pboMQ1W8uARf",
  "key36": "aCNw3oavyQj871EaFXs8k4s6RWncz2K57dpXkuaRTAdeZm7xVBZxATokV59SvnizqDCMS99VY6858dkgTi74Ro4",
  "key37": "YGQvoHJ8xf9t95nmicADSDiBtfsFFk8N3MpYAfZ6imThArLDgDR4JRZ1pTs1VRzVDqxwJbSYstu7rtoruwKfJDq",
  "key38": "4JXbTfZpMgKxRA1ngmCHxLkHuGdsCTDaxFxFMUzEPz6oAL2XaevhH8PMojEi7cbXBHDFxmy53DZ6Yqw6TrAJha9x",
  "key39": "5wDkFGivFFKyBtknUSw1ZZKycNvtW1WMLFfLrG722jZmYp2qykrfMJU92QbdvkFTCwDf4YXAsLCTMaNSrwfUTPt3",
  "key40": "2ZJo1W5M5joggW9ukCDqvcLQMwVvn5nk2xsHvi8C3v6vXotZWT3GwvovJLR6SM5HXggxddVEK2kURnxkpA3gSQ72",
  "key41": "3uR4p5KoMrGUnBwpxGZVZxmnhRj53YLVDV2DiJXJC8F3PBmWXcEdxqjD3eV87VKcJNgbrGLYrUhULbrS7yetokL9",
  "key42": "4JckTycijHpS4e8MTQ3eb6BMHUE6npwsad46nmUfhD31c7LsFNvBTCg8yR6zkvhecbLwnoKmvXxxmGpDNbvVnGPf",
  "key43": "2kELspyopH3Q3mphetLYa9Cg1RinuP1krQQgXZg1s52NN7QrQCb8J8S1AGL2ktwgjTFqjevVoxSdxMLXcoqBstu2",
  "key44": "fh1GcjuZMd8F3eziMg1XAywBbWQTwDFYuHjwRH7LCxWHo7q7wmLt16vwaeUTJxBAsNwnAEFW8T9WJ7cSeweoXN4",
  "key45": "3FLmaRz1J3GXnGmjyBQZR8dSydSPALzq1pF5MwtnhucSRYRfw3UcnAFdkNMS1cEadYar1H4ibgvGQ9PUyABxu69Z",
  "key46": "5BDF44e8iyjMm7pVnaGCi3gnjJ1kCRHzeyi5L4uytXeNfMNudKoUDxcZQAMBPyTEQmMvk4W47kHzwMduYT6QRwY3",
  "key47": "y3CzPiconFpSeYigTreYfgkSgLD4VqB8ZjYZruLSr5hKT7FhgJfEvYvzereSEfs7QVe1u1UtLGas2W8Y4TZ37Lb"
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
