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
    "3HkRKGHaTdjhKdoiKeLhRjK2DqFoDikEwMv63stTkFYM7TfJcZrJzeEZUdiU9iSGoYarCP7zBfWsuiP8fKHFB8dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKodk6SEQAxG5tvi2nDxHDq6VNmhmmU7qGrNeRkbJpLYpqknzTnB4sGXTogyPBmCMSU34uGWwHsfnpK9KrwPiHi",
  "key1": "2v9gPiHpMTKLsPAYVxzg83RtaMY987Sw7i6nARU7F2LNxPwSp6UbDrenkp8XujafxpXsyh9rkzpB11cKDq4gYi7E",
  "key2": "nSjkuwmwgGqqvcTdtevPDfeXyz8WT32UfX15CFgxauESSEb39aA8oEw97JgrNK5pVTepwMcrLsWb15BvJkgeQ1o",
  "key3": "4VxS1K6qAMzGEukz6bunHhD2d6rn68G4r5HpKnqCgfpLB5qgg3NpYBVBpwniPcmSDaEei13UyrRrsU4n1LWeiNyP",
  "key4": "4dxnmyYpRJLfxLatfKJ48y8Ct9jpsvkTbeiNE6qimpfE86MvEvFk4T1gSGkBCz9gBPsR6nh9MTsgPty7V2xqw3oM",
  "key5": "4GhT4SRta2QCA4DhaP8AEXygVCiXfV2eMkDeekA5qiSACsQRBUwP2PB7JPqsw8DAdurMjvM9xRTt4cFZ6yMvF9kJ",
  "key6": "2zi9ZW9VwiQWtTMiWL9ysroHzXtJLayFeRyF94XdwnU4iNMKnMhhwRw3tmcvbfftKHcF9kZiNDRzbFxdDA1W4WKi",
  "key7": "31QER8eCKvk2LCycCb8KvSZzhsjz4vSMFzyd4LfW8Vg7thiv3jVkhERctRHEGNnQVbohVMfdxFq5Dc6UpF79V3tQ",
  "key8": "srHWdsQtX32DNoxeUuAbPBksbrMrUQrzx84GqEBzjnqsZ4iVFvREnWgaBd8zJu1xnQPZz4rEdaBNDdhwx8tumnN",
  "key9": "2tjCtWTQig2NSCHMmEo9kiEUvGFDTYyEfN3N7UB36UAvuzYma5XrejAQrAg9Kwszjo7EY3hKFDE16TC8CqpkbWce",
  "key10": "54D43NeWyjRWc8BQ1GQGQPn1eFpMk1kJNUjGZJ5giGRCwchLsr8BTdSeSD5LfZpHPmCyaFn8u2tetJ9j1wNgsEnt",
  "key11": "4ohH5RJXWt6YZZH9mw8xYrPG9jcTRgvkTPBST2cvKYyQQSr6kH8VEBRhc7VJREdxUCB54NEKhQs1qEN7XUa9MfAf",
  "key12": "3B8pbmYsaHphfY9RbxkJAqCEwVtnU5zRVKR2giASWeiH6mt67NjsfFJ6znnkkicW8hUYPNyL5FsNTS1iCnePx8fZ",
  "key13": "3cMgWub6P6UWvXZtFDaAbpH983D1KU2geGYj2cKqAzj78mfTUDHPmysTdUeDQDT5WgepREgn93Rhur6DJY5UqLYf",
  "key14": "4dhNhH96Es9wvXy6RxLWGJZtF7nAzAnv1nsdTdnxupscBDNRfrFrT8wiM3WB2LEpR7QZ9i3LFZtvG5Vfq3gbt1gG",
  "key15": "3THK3saAgYbe2PeYtEXA2NQkNFZVkjLLtruNz64MNQNbcWo7qrTpHgDwsuBF5inGJjRZqma823gcGJkkkgLbg8Dy",
  "key16": "hwuQ6V9snaeUkvg1FQ5AyxhBxncpCJLYbdQZVzqeK8DpHGdyiFBrVVuSmvJgxX5ZrbJZu5WZD3R2UbadvZMyMKT",
  "key17": "67HcNfgumXhKAkizRB2kWrTzeq6gVAaLZ4ALtz72WUhTiMZWbMbes3xuuQWWAuot4AUUEkyomjrW7tmHE7V41BjY",
  "key18": "3yrbJpP3eKejVr6yxAesZ1nPYLd6k5VjyLdqZgXZcd94Xn9gnwqfTSiVUyv8DknHnW47CwTYs95bcFehg6X8udYb",
  "key19": "pfkoQqKheVo1HsfBxSU4Ya8jyGjBMpFdfcGaPRcyDCTcxmHAPZVGhYjSCfL36BknQo1YdjFE5ieCLsMD7zqPc7D",
  "key20": "2SPa47NdtCpr3p4PhopVYnqt8CH1XDJGxLm6WRWa6w9KsA2RBJXVUTTCJA1w1G3LoFwTCjGEujPerKMuYws3YkYj",
  "key21": "2XcgD53DMqTCzu1MTYVfC4zAfYJLxN7WfSw9aQxrubuUPVafskbaAkc6uegRXM2bu4zqJMWviMweA9iKsXDjsBKU",
  "key22": "L5HfyEFHAqB4LtaNCw7ApFMuKbHPnSFxCBWZp8sCvbeWDm91wcdWFkU3NGXdoTjfP3f8dthUzN2Uqt75zhuVYXc",
  "key23": "67ddB8t5gsbfHmmgaG7hB81xK8uedm6noHW736hkVF4aDbqZgrwZxc5B9BA46SWB6nTS6ZNuoTjyG1uJZ8WE6GBV",
  "key24": "3q3AzCwZeXW3MqcLUpWXw2DyDJhwWrHHxWmNeH813UZGiFh3aPw7gSJVq1nUBvzggj4FabAjT7hYAJwjufgP3sNk",
  "key25": "2PrfA2y9UyNqQc64Y8AhfXJ1NwSrnCAUB1eW36utFZAnXMitZZ66CiSKc66CeQCVS9wRoedTtFcbgPi3GHND6RSr",
  "key26": "5Awkj3ZVJb2c9HnqXRKk2L7PtdgARuhuY4G2VnVR8UoBty1Pqdu2exQkAb9Aniz3bs1SRdZHaoFANkD7Y623fUZu",
  "key27": "2TbTyHu3TZxLaEuu5cMvTfDv7GPCTYedLwSUxjZVc39MevHkVE54rzZsThv4AmPiL6wXp92syEe9soCwpfSGKkHP",
  "key28": "5898c64fkhKihzToE1bKSALuJQrHXZTxJnexVfFuMbKdBRtxgnvHHxpjDj3CL5qvSQj1ffuj9tyujANe3G8q8iu9",
  "key29": "2GRXMvk4MAnhCTBbZHcafmZhLcVtxTRA9WQEbo5gusNeVJPvBvEzuFAo42eBgn3GGFyzCqycoyFhy5uGYfspFGNL",
  "key30": "5FPRHoqA6cLvhghmndwo4hFfX73vhFLAgQSzJbHMZKNBf8Hp9PRoGZTN5QoeuDCzG7XwGECM2jbZMvoWkcDba1gN",
  "key31": "41gko44eVPHRSzL5dJM6GHTtyAjKwSh9jif5tegPUCTk5GmWiaHV141QEuHVvTwGWo9TTqckqgGfTHVzW7Zivtct",
  "key32": "3vYzqMGLcVMhBM9wWGtLvviiTPjLyNPckK34QDZgt5kRkmV9kXDqd3a3ywwamV9tz4aVjoF2c3uJGqc5sR42D56M",
  "key33": "2WiPoXVBRQ2YK26oCocWQLN7XsAR6kcR6D7QnLfxiaUiF3EdNVs29aQg1vW7SHreaeBNZh2mAXPe1r92DbhTGaUw",
  "key34": "37JVEqwys6eWKVA7EPBo97G9VQUoqm5GiAbBQ8Yacpvd2SWiiNmQUTXAPX64qRzhjZ1BsQKxYR1aS3rLVkmkk5RU",
  "key35": "ykzwANoyKR62kxc9mqT5um9JsmKq585vZ4vaPGA6DWZUjD94ATtAd2buR19MDMs5PczZqZRwGkUE1TrnPN7vw8x",
  "key36": "33PiejdXRuAqYvh7Z3myZ21Ax3Mckc3iR765xvc6ukgmqWbFCs4cjTQ93k7e841qr5XpVRwetev6W5Me2CiVZL8q",
  "key37": "64EvQk1Mtp973P3iwqrnTQfofyZmutS5gUojJM8Rf7G4XjBdZoGFmfsPYhNAZ9ewV9bZs9MeuEbiqqexcnfJrTmw",
  "key38": "5vCNdDNhqhbUueBSqzrDddjNCen23YSmD95fc8ZuCJHDVV3YKqi619wdDVTY6ofvP6QyooKVt7eBNsfMNNcKUqvw",
  "key39": "QFxeZhEgNAcVkmK6EbWs7AryCp37jHtr6eRfQfCFWo223mWwFAF3SoWtunRJqXhEb4NGVJ7hwPm82RnrCVdsVWb",
  "key40": "5utGdy1iPUefRb5qWg5QVosETLnWq3GTtTguRfkhchJCgm4EkZ1Y8jjpJzaCGZ9tfy8TnHzfay4qSyx6yqhbRvLi",
  "key41": "5L9FHBp4n61gjymwTnnC9dqsyW1kx1c6kHXqXhocYXSjnrYQtKvEp3FeGez2hSgFAx2QieFKpCaaYuBeQRZkq7xm",
  "key42": "5iKiiLFtMnL4drKF46eBL6r2Chjs71hZnwWzRLC9uNrfshohHf1gmiV3TFEGdzpLn5bCZ4r69DZcGDXLnM7mjATR",
  "key43": "67FXrxNkshozWzJazLjwfXLFuDkAbXpZgVyAyNASjGP33siNZah3MWppU23gqmXHtxT3rHRhLZn7dVtHjDuUBMX2",
  "key44": "5qyu2jXh7iZvRssWpsAghqKSu5dRoBpdGwPaU7FW3ozH4gPRjjcESDs3cgJibBe5qZBb2yKZsZ6JopbHnQEtwPeE",
  "key45": "5pbGZ6oqFSoXRdQguSAMborgm28ckEu8LZVH9Ev1B31d4Rpx96aeRQWdUkcZZiwDPCwK7Kg3xCCuyreZwN84p74q",
  "key46": "57rynYHqMaWiLQVWJN9TwFtaaV4XdvtPefggHRYMwMvJRQajtuQR1XtbXrnBqF1h4SCuDC8bjTWodhhDePY3zbWK",
  "key47": "2Jcb5dcoWDsgprUM2BcBHjgFukvodHdzYTwux1iKfbJs7Mu6LT9QT9VNrobqjJJY3XEgGbjjY2RF3evwEYBPwo7J",
  "key48": "26kh84eb8cA7UNcxd4ANKHmj6shEiG2hp9UnrkhgKKGAjctMAqV7Y3oiFDxfrspdJqfBWjroE1tTp3Y1gvzv9eCo"
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
