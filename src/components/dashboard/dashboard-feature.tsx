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
    "5bUAJRM1dqBaoX3a2ELP6PQKpXqM7TDLPUb4eWaLCFi2cLrPPcqjcWjeWZGTQJTLhWUepgKg8Q6cqyuv3jgjaVgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ua5a3YqanybifUpgau6P2epUBktZoGS3sKgp2a8fdtHFmvcitUwC5qBUmuHDA3pzgBujhrkTDr7AY4NnrKzAs1K",
  "key1": "5bURGYsCLJcuhoq2wq3jbhfLFrxvZyGvmKpe8SGyAJ14QLsqr2WxgTNwhKEmrkznF3uWkyfALN18dVqQx8YqB4XV",
  "key2": "2fZEjxsFwP5LWP2dBN1e1LoQkfVapiQ5T9PDCJcHngiWT8j7SfycXniLqmpQDTy87DmBc2oYa7rNooikLS2uH5i",
  "key3": "3fkFysfy37NxmX2AsXh9Pqv8j6emV9pHahUTzn1mfXgkLN37G4vUsgSLRFEcFVjKJYoWHVnGW14hG4DnKT7c3oke",
  "key4": "4GcTZBa31WkihYEWvcwPGh1JHkvPWSF84qyTrWJ1S8NLZKBbjWC5VLZ1fEomQfsQVySx2g9BdTcsfEyeYNP1rGJV",
  "key5": "53wPsRr4fySF9ChKiodYwFohCPu5EmEmM2YCX9shPWJ9t1AnFJBhVRVLEt4pBmUMm7SjK35e25BKmz5H24LncnjS",
  "key6": "2FcTz4LucjGhn6MWKnbyiZmBJSXvCPBuwmNpCyHX4w5GcXpxAAjLBTuC3jxP7T9m6gm8HXVGezhAjbJh31zLpKbv",
  "key7": "5NeCm9f2LSmJSqS5o6jhPpZyHnC67evkb43MuDHXzueoCyKTrpFUi1gDNVC5qvVDqRJivxaN87EQpzuJFmakA4nJ",
  "key8": "2ykRQttJZVMLLsZiG7KyMb5CygzPGEpYT5P8DyXXAiGRZt57baSqC5QdSGYfcZFxAUzeZByejHZBg5qA7gWqZcLK",
  "key9": "4MNZX4CNsm1DzHwmMiJ2cxMTNr6PzG1VCeBq35ggGwkFpgqU1Fd6huUrYwnEr3SAfXyrZZDNmpVZas86W4f3reJF",
  "key10": "3ynv2Bjq6GQ6wgKCJbHhQ3MP7NarUx9LEDfJTg1gzhj2epJEQ3fSSKu5Ec9EL8PKXWnGXAygDd8HaCTCBFigzVtF",
  "key11": "48UU8PFk3RwxGtPzo9Sc25TtcEnHD4ddEX3TLudFohs3xkDgcG8eYeEvHJRs7KMXrL65jS35K2DS9j8LWZb6wHLU",
  "key12": "4FYVi5LVhgxfjg2gBCGLAwoX9iy6fYXDcFnMmS7Twy87hibgULaKnEV383vX5Y7AwHHxF7jSapMwfqEyqbJYC38o",
  "key13": "29AYqouxnZsddA3ekBtNj6xTQtFvYjjJ5vNe8pwBBcoViGUQQkcuNw3Xwf9hPoX76SieJqQ1rNXVBXBTZPMWgy3F",
  "key14": "z4cdQy4ndNZXGkjLCBVkYNvKouEsxWg3n4ZC1qjS2bad6f7f79B73opzzAVi861FW516HwpRzSTSQQYtMJAhtg9",
  "key15": "2qZ2qaHqvAAftT7kJpQBVnuZ1wxm3RGmtNzt56sf4uWDHY14KNqRucmDFwR7XN23JeUjXZ5W7JbfqHPvGwNzhR6z",
  "key16": "2Lnm3pNg1LwWfZwTWDsPuWLVq1aK28aJksn4qKqoKad5X7Vo2mUBkbK3HypK5CYbTfBmA26idRNE11dQPvSxECmS",
  "key17": "5i1Au5QxPzS3aYEyr4jHKi9xHgMgQvvQCVq1M8ohuMo1sqXi4Ahyw4nGuxs4Z5SdRkpKSNVQPyZoK39g72dj9LKx",
  "key18": "5HGPgkeEKmxSURd28rcW33FR8LJVQRXhfGrpXMGo9AvEWLx5zZiXiTYpAhjhNi8wyuZ2xmbSb4nLycy2eFqL748V",
  "key19": "4Lu6grD7XN4GCS2csjkiMve9pYGDeQjX28e54BcqaG3Wv7LG9PMusm6ZFKmpnpFJJBWFV23he9immijeDr3MdVXH",
  "key20": "5nzC9prEcp31ZKPAVYD6V5JERGM8jNMHj7Ew6qFWd9fBXRm5azAJFWC6Z9RaZqKuqDYfqPWHa4o2zpZmxb66EuLm",
  "key21": "61ngp3KKMatUzTYAXxg8Mfuh9ALhscph29msaRyB57bbo9uf6DbSzAGcbnu7nHYgfUmQCKtSu3Amsq8v75km2KF5",
  "key22": "2iii8s1vTFdarbzuYehM2ZGo7RXQSNCoCkmEmZYZ6xUo9Cs662R677662S1NyLE7mbiyn4oRzWst35oNKpKYu6gc",
  "key23": "3xHUf5CafPtBuxphWkbCjrmQGMn3TkByHajeA5otc6gzKBvutjJ6YCm3ewHRrVounQi2pBiaNcxRgaEcnmrwyLxJ",
  "key24": "5LQw6UF1yMzyVhzSgvWzbRYz6q3s5ie4uEEs5YCEc2Z6cKPb5WCNZaoAXkcMZRLTKvpXprFApUBydGdH43zH7nqr",
  "key25": "5KEVndZG4gwCU1qsV726hDimhJmuRmbrUis7mTG1kDT2QYKxrzEhigjpky6jscHLtMNv22Ca9B6BbZKjST79FCDU",
  "key26": "4V1vYhcgBuscSpjKQ524BHX7nC8CV74Xbr3bSHYhm7dYNzWwszi6epCSepE4Yw4Fu23xsqbqUwrgMG8SbLMuGTZm",
  "key27": "583EpKfHksrSFRU5QrdMLGTe21wqyJVWVL2uGbtRNfkspr8jL3etipjSXKyeCUB9ww9AsZ51JzczS2aZ5N2byU2W",
  "key28": "45gNMT3crME378VY7oGhGrGe9GcR4XrM9vCC1G9kuSQfGf7YA8caBSFhYHTKAqEL1oWcQKwenLw5A63LpfYWMykR",
  "key29": "3vLbQjiGQc2RrDGkg2Wf4UvxdF6pMHkfh9qVkHLgA8FTuus1cvR51hT3bweHYFMB99V2wJdZfAiupaKfZV94xyTN",
  "key30": "iP5zQbw8ZL7ZASq7ryzM4oP8DeRMC4Q8CzJTefrwST39hWFGE2TzLtoV9hvMQzZPu68kWtbiNDQCu2Ar4cUgK5n",
  "key31": "5BowJbTHqrrze7mReEaiev9aSDmRqEqWKtapURbn7dHvUKCQ2F2Rjpk9X6aKrzdm7G4RXrrxbzeHWdxVeFzE4JLk",
  "key32": "2gUHGqs9M2Ypirwt9NbzQhTxs2Sak6Zw2zQ1hFeHL1X5QDu7FtW1fW2NvL14mvnByjHMpbhvi6DBXRx2Ygmzhtbt",
  "key33": "3rsqjm3ancYwqSdezne8q88WiJu83b5ksEQfrtSZS1AcZHi9zsGSs6GPCbTUfJLZsZtyeKCyW7ywUeVGdSBVqVqm",
  "key34": "4gU3Ux12jC71QQ53vtxKhrSMPHmVFb6px2Q4oNaYPgBz951WGgMw5pf3aynCAnrUTip335k1WjMmq6U5ac2E3vTq",
  "key35": "44ckkVS5rmZHBRyMaper6z5zEoq8vtWgh6gpiTty2GdzzaPE8pGkwPKoFrvQs3tn3oQRLUN2byF7wUHCjTiTyaDU",
  "key36": "3hA6bLFrVavgHtaUruvhdvDA9SwGiYMWjHZDeALiFNWrsqBtSsfDRLhNFY3JPf59BtrshibAt6WfKYtYbtF2uqVv",
  "key37": "3816ygUjuZXQi9Rz7UY74UjCutn5Vogz5eLHCQPWnKirWgDc2c1MdTjaqAHwdSLyA4D8XzKuVpiRLkBYntdoAQac",
  "key38": "4hEsNcdUUj5oMTE1BCvBniewh7E962Cmxu1XgJ5ycxiDW6Smt7sDLXoLzfgoUZKKb2jFvSt3bmsTESaNoSU7F735",
  "key39": "KWYN7EdGfBDNBPofwgnjgcFZ91j2qExLeKaSq2ZdTrDuKwQhfZFSMY1iNzRA6PH1FWY4NgVsTtB7kHSvUjvAg44"
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
