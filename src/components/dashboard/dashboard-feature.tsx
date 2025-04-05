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
    "38LSgEqST1buGu4WDXEVq6BAeajYvvUKsBmnzig2GRwyN4mPT6dDdw4ByHPRZ9ntgN4V7wWXx8AWbNGNTmMuQb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5its8B5ij188TeoroQ2NkdUPnB8mfjnoPDpK9cfE5BSA7GSFapoknn6ao9FytR6knMFzQdHvVrR4QvAP4HkwSRxw",
  "key1": "R2XTusst6Lcnv3uKvB4dU27mCLMgPkuN2LbSpF9sgFRXByknAJqLraQTnZQTcTWryoosFnf4trGvrdgK9uxo3oJ",
  "key2": "3LpSiwaVa4pMo5YDuYrk4FjRJLKD5QzWZexmR4GbqjqbX4DxePzqmzrDBfuybYQegHheoeXEEBdAxTbpgTBvYQcv",
  "key3": "5RJBpSYmxc5viwkVp3i2wqFh5YyqSvYmGAYkH7XK2mMkGnc3KC7uaBbRkqrraRti6PZddKwqhF6gXjuRf8aeVGux",
  "key4": "2FYwQkQqRFXVwFFosSCdE2SQCKLRuRYXhpJADy7PPxs3muDz64yhSB8bkjpzSMtUwd4xNpzkoxjwrcQDZSuw53Q3",
  "key5": "3ZPB2AibJS4WfsrpCNyyfMBoW8bMWygcb8KTqSFjgnttjAd1K3Z6sQJGtjaqFFnhkZta8GXD5gHXawXFPofAuoyj",
  "key6": "4pD7Y9kFjunC2msAxBJy6GEgB8ZgYeti2uSgRrAeyNzrbjgCh2dtEWH8JPmrY2iUUSpadzaR2SLehgGJqtF83fxV",
  "key7": "32CMNQmorpc1sFgQrzbV3MjqiPaaGoXWdFNEEt1j4eN6FnKL2uv48XnCPvrYhUAvuvPgBmmhUtN8L6F93ikkabNT",
  "key8": "3GJeijY2KyxCpoiJcnBjL51RhXTeqHzenheBUvNbvGFjWK8BTCyeqseU5bDxxqfKMcKrwnTTXJQXjsoiVRsVTDL7",
  "key9": "5xs1KSawzcdi9DLpZeVdLQdravSJuteEyhLg1epeoeJAoqLh73oSn5AgEoz3hRhKVfwHv6t5g6zZ4QFzLCrdFqMb",
  "key10": "3ZeKuDrG4mLHG1AjqkTNaZprpmbVGzSA3S4ePkc8DGXqcNJPjDucZpRYT7gDgt4rffnxkXZgW3v1eHWymHLFnmcf",
  "key11": "3BcxS7fxfAs7XcXyhcpH8KGGfw2yFUVMwwoyecAooyPVWJCws8m2MUNB3xdScBGArgnbqD1wrqEPq8MtpWmERsa",
  "key12": "x2mSUshkYmrQfbkLi3JuBxZ7QjEDAtRSKXzzPR9iZY4WwE1UqXj3yAQiPZXiFPJW25xVvdyEunTgJg4T22jdGr8",
  "key13": "2anRkBXRo653vcKdbNUehd6HB8cJgCbstXbc29jqexakAkCMjJTDYUSnjwA8vqVymYSa9D6MQ4MwoiR1Tc6rFTh",
  "key14": "4nHQbn4U6sp1h1Ni7FTk9fJZq2dMvEGoodav6CSA3fpkxjzWXSxYuKjfyEhyzHpHoNbjCPJu2Tj5qaEsJiEWpa5H",
  "key15": "66DfDJrrXfEvPxJDzDjMhkq9evJUDgzFyApHPywZPTMez5EZfzYnxGapuSPytAeF5KmHCWMEE1gp7C18GncqA46S",
  "key16": "4QHbynwRPexRegFhw2jb5UrzwbgZxo7EjfLW5BXjSdJQHdaXNNoyqE91rdvHhHATm3NK7kfKTdFkGAoTYoGZfr4k",
  "key17": "5k5k5XtaYm9zFFURHDBCcLiK9ngXesaASdtufwaG5vz3NeL84D7R9YS3VQcAY1L3XQKaqxEsuF8ktyrAMZiAwaeh",
  "key18": "3TbALZ3mGptenLvwSvUHWyZnmyWTAyLawkJExReTRaLoU9t4yZQUj8t4wFiiVX1NXGwnLf5bKaTWUqY3z3Us4x8H",
  "key19": "2XE2cCpWCEFx8X7rhmAQEX1uXqEetwYLetgWYnWTtVDrF3BGJkMUY6FQ9TFrB9eNLxCpM26t86HfC2nwC5gzXva",
  "key20": "57KCMm6NsgeUfmGyZnAywgX4whGRTrv9g88azPtWh8Wr7RmKrYfQdiyds8GBTUkMa2uK3PgznBGZ8QDwXkNQUSiM",
  "key21": "3Coy6BCzwgzA1H7Lhj2DX5dTMJxajUEt4XRJgWXcvevi94oVpjN4KXATC9zwK2v81N7q8ScaGN8Pts2augLujugD",
  "key22": "5bJuRzW8ywGMXCUYPjJrRGZzaTJt3fEu5rHWaeDn1JsHFy1386J4Tys5HwG3EqTRob8uMwtbcWY1PB45Mv6wKjdB",
  "key23": "51ScdAwHjnFAYmHDEoF5p9iV6DnXxUFL7jdQVCUJDFJZrVrNQgnbo6FiL3pGzzMrkdx9qqCZAUkZgVN3mXPgW1HS",
  "key24": "354D5zk9uvwF8JY7jBeJKD8WGGwqHs5uHK9FrpGEvW8k7JAcPQL3x5rux4UAZW34DQ2j1vgjiJFgzcK2Dcbgc6QX",
  "key25": "3mS8JnB1P6NjpoQLYxbNkNYRH9BzZSq1ijrVezhRxzQqqZvr868q74jbb183DA75bC1tpQ2srcPmpRixhzzwN9K",
  "key26": "2qsPyHoQSUN5kaCSARkmkV5bjMW5uxukp8XntM2FJCp4zgFwXySxgDGhMvXt8T9JVjbfJxX3vJSPjf6rbqWYKkU7",
  "key27": "2Rm57yHqQYvC5XGHAj76FMSFZqgDK4XCD2xeCVv7zedufcyJBmey65eD8Y5EDav8sMgrbNwfgQDUkU1TJ8XVXQck",
  "key28": "5A4srspDk8n8Q5W2fe2tySLpGTFbrFgLv4irhjmXUC4zHZhJqpo4SD6APrA2X5usYKHMZ8Wydx2EY29AeNEAgiyJ",
  "key29": "4UTQw83vh2R6cJS8iMZgJp7XZcw1bvsM1TAB1hj3X68hUNPqxe7HVpHjXgbi8sGvaxSG3b2yW9273D2Dxq8QXJSW",
  "key30": "1FUDBntKgGzDjuRuWKAqmXnCarvX6aMboTyH1Q925YgTdXsm7zoykwrtAQ6iSyLXPda6YfDhKQFvmtFMAfmFg1b",
  "key31": "46zPZgdEdeTrCFPncUb5BzDSbZaELMVX7Lh7GyYvJsiVowfmLqzDtLYBL2ZBRnGzxkvrmLnpGf6nCvFDh7oJxUH2",
  "key32": "3uakwttL9qDAUHMHEy6sC4f2sRk1TxLoUau7RQ1jS3tJT2VLmN8so5uAPFS5AFctnHg5UC1qT3WX5tPmJ8bCB2d1",
  "key33": "61uEaaoM6q64XYwtW4qm6SJiTxy5k1HGgNjiNEdRVCXQotgeG9XBRWKwZvcYM6DBu9sHMhUUtMAnkVL2zhQNzRdW",
  "key34": "5FqqgpZ17fHJqgp2vtcx3CSz42XEobfa1ZXGFXtE7RVeuUyVgpvrD3ENFqTqVMaCssvx9iQJxWMDvqYDfQLehSFo",
  "key35": "34dF42PG4gg167e17Ga82if8mrxpwf67XeoQb5ih2CaTTvAMrJSnxvouFoKT1SMXNYj6mffVJ3LkqH48gbJNkbmp",
  "key36": "2R8mix9Y83QPKQBSKxpuEAtjQMxVwKAmsVZYCPbyaaqwqSvWz6WAa4b5buX5spkpfKn7PtXbuDyYVi48uuGpRkG5",
  "key37": "2kuLKR5KHpnNqPjunngJdCSaPdWYoCpWjiXwHjGC1V4mqRkSLeuuJPsiNwAssbgbYyQnuhC5jPdrBFJiou7rfRYv",
  "key38": "4gY13agAkfZWtneRz6nX4eoc4mgBLRbhfjHR5ussDUHiX8a2pYH33CEj67i3fbtYopoPHtNQFhjtKfvrxVRz2jy7",
  "key39": "5GeaSZhp7YchQdzMoW7RoSajqoK1e1D5PFEZqX9gKTS1Tw1Rzr5r7kERHdEbwV9W4nhcn8maxcg2hWSVC4Ybxojj",
  "key40": "5rDb9Hgy2uHY9MBp8BFH35orDiKPcisxKXRUzYjRvUAggsiELwCDpSytRaiA6UnGRpyqM4yAEY2STaaE5a8pezXd",
  "key41": "2tK91j6CYzC5pymTWMYKLiqz1UXuADTdb92ZnZ3F9DTsCQ5dXbpGrfocLdyM34rtE5fLngz8LWVVPvxF4QBxvtKs",
  "key42": "5ghbjFLE9nai8ZhD3vhZQwFrtXnFCKUW2FK8tGcv7uMkHPSmu776qgTXuWjWLoAxiYPL2tic3ZNNgyYCWBZuit5",
  "key43": "5GYCouWkHmywBXQfQJyLMUrZUXPxmhLgRphkUEMFjNYmkqdLEKmzPhX6YQh6YzXhPjY8z9f6ZLafPywQKF8B4qTb",
  "key44": "2wYJh37633ufuHzWZjpy7THiGaqmwqBDau8ppNGWTssLgfNdrJohsEnJWuXYhxPLq4PST9n3diSrxSNXzHkLKQWD"
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
