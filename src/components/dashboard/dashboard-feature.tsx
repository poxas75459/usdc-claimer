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
    "2rhtu4inHn1e17tJsdZGK3dSttSt8gALg4oAQrRqmatVCjc3EPSysdm9MTx4A19BSUEXfXDpvZByCgZhrtJ8G19X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gnFWiL4rgiAh9t1nh7hZ58r67MsPPvAMbjB1ZuY5DH927dCP6FjL4biFzUNCDJxRQ7Zdnfod9WfqXMQ7F3e5XgX",
  "key1": "57dwdwftfRTyaKjL4pyMSWwQyj4GBVRCqfntLgtTE5xTRtuj77EGhotuFyMTDKKtyS67CjHRB5srh29CpeRTEXA1",
  "key2": "2NQscXRK5ALjAySLRXzBZ8y4i3SJG4MwWK6fHa1C3zGYavS7MVuCGWodL6vVUGe1i213spEhzmoks5KdoQ3ViKb2",
  "key3": "3H5Jf8PXNuEu5spa6AsoE5atGZQzxhbXGNK7vfthELLLwh7UqPevaqDZ1DNkoRohEgfffBMWcRvcTuXGf7PxGsun",
  "key4": "ycLRGXR9TTpaKoTo2qK8AHGWuu94HUdeuaMbD2YPrLqeikeg3wc7gkQANSRzgXPbuUGo4EStWMz5yzZDjHAvw5i",
  "key5": "2qW7rWbLXNDHHeRxmUZ9mxFKLyJJShdk1DHN43jN5Ri2RvD9Ei355XmjTc2yDTXRn6WBTvGSqxazEXpcL9KK7sv9",
  "key6": "2YxXtN18ychweBYp5QC5upVjgCiyYYEWs4WQ1s1xKL2hC6JNxVGGXRjW7ed5VqaEPLKNMH2hL7tc85V1btHP1nU4",
  "key7": "4gguv5ALGDWo64fxV8QpcWRrERUTChZj5BcMyKwFxzBUdayn7YkpucXtExcWiH8oodGnfWS29EzU3HXwi8f5PzFZ",
  "key8": "5Xzgz7VLBadEi4SYbGJMdKhBGcL3PnBw7hbpBKg8wiod7tGBtBBAZYVPAGjeAfPLZh9A1sKRiMgrd9A9AN83MkPn",
  "key9": "5s56q6TFqmJnxvGQALYNKc3bnsPxNEEyvRWj63w5x8tNuRcyUMppT3VoSS3HdXU6MbA2pJqGNTkXCK6t82MEXMAT",
  "key10": "4WDyLY5meUyZsze2MX8Py6nEirThUxiMKuwbgmynKY4pgWYcVji1zbm7u5KSd6UqAMQvuG658XwmtUJBmMtEYvkU",
  "key11": "2Ye2HZbHL2GpW8UbZmmuH7R889DrwWhrERsJAXBP7q3gDC5mZrsxcS3XgTms9MRyXv66NsQd55Z2PN9u25KP1zNL",
  "key12": "5Zk2cZDdU7bP2TdtY1JeXzcf3dFcJg82K2qP7RovaQAxcfpmyZ9EU2X4VUqu9mnDGEa1LTSb5sW7Jg4SQPm5eNX6",
  "key13": "4aXHyHAZrkSQgyGMfM2XhRJ1rz9h2LTo8RB8B3VCsyqbUy1zGa3utM7t4Ys5brAXCGZyuf9WTvZktBEQHSdPm7Ny",
  "key14": "2mKRAmS4o7129KExXey3nGUCBa2LFQ4cmC6gdbajMRh2hqjfyruRDnQoqd374RTrjk3KzAUaS7CZ9RpHMHQgyCWJ",
  "key15": "3ki1wthBDdjyRXfyCTEEuwtH6aAG6PKX7iAkTurbw81FsMEC7Z27b7vUswZg5ahMhRHSkDvsuHUjvWbR35eEKaQ6",
  "key16": "VyX5JWEps3iR9rCbxXf8pNSkcgBE5AfqHCUoV6gNwrSgWoNVx2b8hVs7m8foL38FAsnhmd8RA5aFea6TwVfVabF",
  "key17": "2JBMCjjSpSZDadawo9xVfxuuZusSjLzwyxftUTu2ZVtAkTJ4wjKy1moYEXMyCoWDi3Da2uAJU5wys88zBc5Y5Hr7",
  "key18": "21N2x2mSpLSjwQKKZnV88d6bBQdTGKNmQ7r6To2Pm5WZSwcfYw3uonsuUcwqfnfTxnx3FG6AusehV4aRB2QWDVtp",
  "key19": "2MmZpi6PKKVy5Ag3nkBrN7X95Cp4NaJdHGFS7gRudWaLAaNkk671vEk1sDATquTz7TDL3BWDUV1faJckZfxDFcW2",
  "key20": "kUxPnDSwNckZyqWpqUyp8Xqw6BRtrtH3bLybXL1cpHpNaxCt64rK21UNybUiFMtSVYbwLevoe2ijjbDG3HhB4xC",
  "key21": "42kRhnhLujfLHhVNmpVt9pGMixvWpcqAHddTiBWjcCBtA7UQvtBT6G2icM4w88TsqiXPd1LK9Z4Y8BMCoQW6xcXN",
  "key22": "38UNa7SRMxFefNcCTQS9Q6CCjhQzqR7fKctYY3Coxf393nsXoUuMLn9kP3W8KTeXv9nYyk1N6PZ3ohcQfv4p9djh",
  "key23": "2YS6N7zQHYrZLu2gNbfjNL14bSysoRWA36Hsi62ZM9a1aRtsrCzX7RicSkTbkd2soQePBNgSq3qUC9KC69MgVnqv",
  "key24": "5u4U5bgqvcveooHBhG4kGdwxTX61QpS1QbARhfRw8rE8gUeNWauLdTcZ3hMJzAgxjumB1wajNanMkZkrdfUPc8Py",
  "key25": "5i537JgKdbdAhpps5uEgqeGyfkdWw2te9eWQjbsmmFVLdBNMYHL4Ww4HBcdWq2LoRQdTjV4juma6QMrnwdiLgBwT",
  "key26": "2jtzyA1g8ADG86PMSNiYusaH3aN4ygPBJ1tm81Jg4Z3E65RYdySN7hjDxqLPJA4JMYPvkdRRhP9E4inqBsanDAz7",
  "key27": "3v85c1VTju3UEbrK9zK1zXFER6MWzejrUWniR9AC8WVSTX75dApeNHs7Vgf2mBc69eksQ4LRznB5wam5ZUDZP8mb",
  "key28": "uuNJ5kqJmvZU2dJeVJ8JbcPZb7Huok4dt1kRX1J4v5N2DSi3Y5T2WCLHBN8ro18ky4Xa4YG7imLgqruc3zruRSZ",
  "key29": "2sNy7j2tZfC6Ck69s3brU4HuPRkbiz9B8JrJeivyZnndj7WdY6v6haRj1ijCTaadzwJvCGfX6u7SjR1VexyBAuM2",
  "key30": "4naz18QNVbbr78K5S1Cftj47gyXxziYbyF1cKi4qxq7ms42NwQaTV13gXbFfEQoNWPFaUJHPLaDUPUvbsZnZRMEe",
  "key31": "2r5cfzRkuZmnXHtMYhw8QraUFgVBRpWhrG48n9aWYM5CawWM5C3UCv7YzxGVTow5AL6hL9jwYoYh9yBQnYr5iCx9",
  "key32": "2fmr7Dsb78vi4bfbmHgF2GfJqt4N9s9RPGJEMYhf2jeQWftbQqh6Modh44VFeFEuwdZ84h2Uq3rY5PrkY4cENQ7o",
  "key33": "5u7UpdfFWTvUugmPE9TM7eTsWg5dG9uKz8Kuuu6hAeLmHWn7HKN3etbasiRS8LRq12RajgCzoQoNd3uVAGeQ7SsT",
  "key34": "5nNqd92g8yu1e87ZN1EAPYM6Fy5k679XDV8y5KSt9tDTDUKAxXG6VP64xWBW5Ly7CcKJ366TuMHR1pM6mVsZWQ13",
  "key35": "58JCGNr5TjpFzTwkrcpw6oPF3Rg8z6biDQjk6acjReMYwwfCHZvLHo3bHQNjWSwUy8oFJZHaDjMZdeQnARjAqbsg"
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
