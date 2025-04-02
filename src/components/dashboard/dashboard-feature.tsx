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
    "h6hGqm3Kr45E1jhnTG7SVygBkrditFgPq5wFewKSohAUVPGbF42vtzjGtjtGH1UUKmfFzePHUeSpMkkhhryvvBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qL3jXGkhHC2eHsM7k2wFF2WERNJVn6EepFMhC4BJL4WmoRqWBrYCjjkBBBBT7sZJ9KinVRMw34GpZnCiDmAudh7",
  "key1": "579c5NUQ8ShTgA9aUN3PVqnyqz3gGw5ZLwqbFoKmqvEMek63D2U4xzqs45iZXMcerJy8bdxLLYo632sBuFQHfzMm",
  "key2": "GBAnjYqDWHdazK7789pwtE7WEuX5HwVweNUScBWz82WpoGpViGjmG4b9hZxr2RCAw1UWysJes7UmDSziLnFRv7W",
  "key3": "4NiiqMK4tgqwi7rGgYb3fcy1M1UmDwPAMYLNpHZuNUGnCJkoQgExGvZyKzsZcaa6Q6US2pb86R1JWwjY44JvyCiA",
  "key4": "34wxed4UTMyZnddAv3PKZqYgm1CqK8Xg6QGvmBU6ya2BnbNkgYxnAaNiDL3565ovANKQTQP7VjEX8oP4DqFYWCv",
  "key5": "23RoszP3rgxp4qor1KsaS6PmoFfaYSKp6jiHxJykFFrN11BNzPz4x9b6J1SZC5L9apNJJG5p2f4E76y6P3m1BcHs",
  "key6": "2Z68S4a7mfqKW3pADHwHyyky2m3msFB3QMP6oNbKrBMNaCqX9Reyyi8weXUCit8uEHRqHLeqCSfPMZwYyhGYXp5a",
  "key7": "3o8jkcjUruGh6sSBJt7HTgKKNcbbb2xBRQQEASMJyuK1zrZsi53ZToYh5LkhZqicP9JUHtFWAztUoSJkDYKab3rH",
  "key8": "5y4MHunttrRp6Y3tiYd1EhSd1a9MN3bifgNoo8DZcfWtp5QvFmAnaChJNQRjdD1xdcXKktpiBHXY6ARDa8ah1mLM",
  "key9": "5U8nQXbRHN628KXssrih8H4QB6b3o194w6v32D1zLrNPUryat6gPNFTJKPeEMVj96b89kH1LBawv8d91i8JNjpDK",
  "key10": "2JVnhauzimqj34hbpywdJDzr7vUpXHgtigkVCxGiyBXVRNbifPfz7kF6cVpAbswsAHSD65VKz7Em9NFP3YTmEsKX",
  "key11": "4rGQCwJzcHLqAaBoDCGkNEyN9ZVWX1ReL6nJjy1QsjTuoK9ewn7iDGLkqmVmMHQTzmVCvfAJ2qvZmpXcYeaRAmgm",
  "key12": "4YiDr5LSvKTBXmfAoVXF5HUdtKAzbWMAcvdZnFbjzF8vUQgU8kp969rjDPTqVd5gtH6VurdC1YTuVc7SZUTuRf3R",
  "key13": "nJzw43Mmj9qLAwkE6RS5sGkS7GyuGsS4R1iiNc4uLeSwsPp2WUhDrZ1uzvPK3ic4zJDFw6NP1gGzW8MQpz1LcTY",
  "key14": "3p7NB8BMsNE3DGsfm96aoE31NGrj7jHxVqpJVRDcX8qngG1MHRxpQgSQJo5B4Z9zVWk5jz9Y12u6nBwcqEeHFiqj",
  "key15": "3xa2sGvGQ7y2ntEZYsRk4F7eSX6QL8CuxMei6skQxYJKKKSQ2aPdr4tRBP3asF2vP4FuDukE7Jm1uarnn2TDbrWh",
  "key16": "44etPmHmwjAhTGN22UvVTnbgxnvtQVvtddDxnRDMeMCPfErWGRVFUoLwjhLiEKq6WNHkkhBCRp9Sj3iFY2UJTuCz",
  "key17": "SxRdy521Fonsf1aoeS4AZzQ1QD8XvFq2FfTjfmSSBcC5EN41VbTMapFbzYkPtKiqJgoXgUiz37JHfYyWRz6nmKj",
  "key18": "59ABMrmcnGM4skx2j87kLav6waS4fcK21sCV78CTM5CcGn9nx216sJiXzESfDZTR7sRuJk2txXJdgB4P68ugyzGj",
  "key19": "aCcSswS4tzswzosRn3xMDwRKbVAB6hKJ111cM2Eerskk4zER99ZYDuRFzHfBrDZ9x5Rjv2UZunZVtqnJiDvZKdE",
  "key20": "3y3193SFh45RjXmkwBEZFdc91noryTpas6vuVL4qQ5SrYLx1hi5SvpJrGSUycuWXQMLuxGM47dxjLkr18NAcRnSA",
  "key21": "vjJVtgE3XZRvzYtSk4479RYA6Q7BjoQFfnwCf4BRZiPG6bTB3oSzrZxHLLr627D1X33reQvQZXpdG4QSNGpPWeq",
  "key22": "4r3LDN1T7DjZFoAGPhmaKmwsNfFGi2h3Yo9bZXHtAaVygUboZ5bNzDomwNh4n92P57ehBEcRKGvpyNj7yhwRMeT2",
  "key23": "2iACGUo5KA9V6NLCrNajfTPS5RYsxaWgD1Q3CWLHB7gLCsJTHL77HFd1eb6cfXxBAW7aAPnRVoshHutnAoZqF4Tc",
  "key24": "5daMRyh92ERFk1co1VJPW8rmQZm5YD38Tfq29ghBq9Hn56PBo9Xiux8iodNbZohL8U6QqBjCjgPswLqBvV9wQKqF",
  "key25": "2YhKzyVVCYg4kw4pqCro84yaYvbe6BpmDwSwZWfhbzSHgfD9hKZfYxiufTim2w6Dx6ckdndUSunyEVQZxj6jABVT",
  "key26": "2vrZihwQe6EFyJBcNWe5hYbMGxnAJzaLZERk21srzYzu613zsxEZHbni5RispztNMrFiZgoU7PaAVzd8cipwGC4Q",
  "key27": "1syvK8pwVNhXfVBih9VzfuW1RqK3XKcJEbA9kvA4SDqYxPharRg1K9pw3wxp6rVSiitkNNMFfQAqnAuQsYb9KbT",
  "key28": "2sA6oR3vyRx3FJYUkRSwUyCLgEgcq5RJVs6eSUnGAcJvnUAER74KZ1D5k5YeTeNLtCvm76uGQhxguAmpMj6F5R5n",
  "key29": "9BjL3MT548E66qLLZnk8XNiZwBKexj4hK2oh1ij2vVQaY4s39SGVr5v2WWVwLd3o18du1wJJ9BRHUEJXmDYorP8",
  "key30": "5Z8BinDGcH46xpjVM1HjxF9hbiKBFvhPJGEdRsFM6VMcgZLAVpWYDfrYP1FjbVAyTaothidEag6Y4Jibnc9N5QNL",
  "key31": "5Ycyy4Tvxe4EQmKja2H9sHiKXKrStG2WdsTCthpvt4EeSmRwv7hSA1Gp6iHjDmDTkkeUAiJzsJG3QNTwhSfEvh7j",
  "key32": "3FFmoZk56UTc41m2SwCKbYSLo8rYwGknhrFEehVRUoCahJqPDdVrh1Vg1h2kpBQVqRki7uvgaCD75Xmk5hjgcvK3",
  "key33": "RoxxfZ4PdL8rQPjyLuWJdHqh8Rh7nCPz2hiPNN8KHYAiU9nkjfaabEGZtJjmM5o5ULDF7FKDoSoYRDiTkBUK6Pp",
  "key34": "5HNVN5T92RQpBErUTTd5utRtPv8dGhdPgbDxxjewLedGZMJNorCwZYZo5a3kU9xeQkYnCMyQSrx6q56zPtKB7Z5Z",
  "key35": "5uAvEcddBxfMFD8EDjJZAtgnEzwFuo7YQNe64P9df1u9GcyUHdqn6Co4Z8jsk5eqxy6Fhk6Q3ZYJXWuGGyAWDPtA",
  "key36": "2RhQEdySHgUQBC9LLWuZJbCZfdF2aLqU6rCEEsDdPQatsCusjbwcwAtCYAvJioE8XBL9GBENdGWXbHchVhHpBCib",
  "key37": "28Atb6hWzF1SPTc84BRaV3tYAs3KMVMZjsVLPdUZMrG5LVyHnhxgu7Frk94vkoLmGL74pj6RsKVEqwZjUNwniP7j",
  "key38": "4sUMtLzMGL3Lhkc2sod5mUwf6xbdg3JeBuHckNeRaHaEVrcNxoULE5yt1v8uZmQk42fkp728ai5EqPDFyc2SNmDV",
  "key39": "3gGXKreij51rifJvsiPiKt8dd5hGLWh7RoBMK5g6GLfDUMhusnpgYaWXQb64WH1GiQoju5LPS8sA1CY2PVAFZmQM",
  "key40": "5tCq3V7jEJcFfn772SqeDU3btgiAgXNbyqU1G3Nbn1qyHyEeDRvEwbeVm8FGwghyMhr3Re2NZH3MMnso4t1Q4WPW",
  "key41": "2SNVscxMCQUdGiJmzdmVYmZWoCLq6688fn5U4axSFnjCCcY9q59CkFQyBZwTUA849tGPAmBtrj7yFR2L1Jfq2uEV",
  "key42": "2v4aeffkEzvoettUPugpQgzStCQ46rDTzW1xm85MJ7xygaXbGMWN17TxDNThhBBiGspX9TqZbfbRmbMtZVi44Kpo"
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
