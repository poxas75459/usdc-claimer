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
    "4Gt56SHtVjS2Fwt2BQL7YBQjYyp29MruNo5gHQUEACH9aLUvNmMtFLYWfJW62DQetDec3NAiaM6RShpQWugdyGTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwxnaTQPdheyFy9XxGD3KxftdWM86D2thJZeQXz4gKon6YP76DQvmWuX2Q38qjTD5QLC32Pv8fWBBUvVdKKyzhz",
  "key1": "FSQCizgjdstZ4HsQjHDLbAre3a1MQe8JfgYKVCvrZiVLmNQiVd36iXGX8E94foUUAvj6QEC7a4cHdrMqUnSWqA2",
  "key2": "4xwCHA9BDCfvppyCYd1EUqqp3hzrG84x5qXXKp6Cev5rb1fGLZSYWXkb5N7h76E4NgtPuvZammguGWF13G6NHkCD",
  "key3": "5ge3rt1d4nKMFGoS8d9XZ8pCBTK1JVu8Lu6yAJg7pW9yVnkd8q91PDE7fZQso3o9YzbpGfwNjnCFr3ajBwLLdZvg",
  "key4": "5iN64j6cpyS3Erv48PoRxxGhU2LYAbQzUsYGCLDE9H3uD1HHqvXpeZe2ss3uEbAm9EWkmvHWMhtdg9zpt3mjLHkp",
  "key5": "2GCggaPQ2MNatoC8Wm35QZgNv7s7Noi7qPgnwPPXMVSvYk2p1DNGECJ4hob4zwSXYgFyNReRAAJaKkam74e8PMSY",
  "key6": "5nfhFfh7PhrSJUnCXPc7w6rk7iNKszqaTynNePqMXKzeotTvsyVyZeqeRBjuvDbPexNf7Z9BGsreR2gvn3HvH2eR",
  "key7": "5aavCTNnwSRm5pSECvSgtb67HoxU7GZUrkCWCg44mV3Bj6KHGbHN6M9C6MbShpxqcipdSptNHKm47s84Dg8ULZJu",
  "key8": "56BPP93SCdpNDRzwjZdDZdaq3q1nhjFNcUJqUopEVCNLnAo7M1rStvzb2BuVStR5gGXKfb61Uofx2PU7NReDap59",
  "key9": "5EDhN8jfubXkmFEvn4SMEYXtgaHmiXPQTF5zWn7CpiwNGbRhqLe6pd63SRB1PCNZupmk2Vjq6u6S6JLDYFP1dvDA",
  "key10": "3aUNGPkxPpUTxRn2Xz5CfXCbBNLLZjtrH4inhs88C2GPGhzU22i4Ys11XQPpVxoQoiG52oEA3UqykDjtq7hBG5ML",
  "key11": "55XaZWR8DTApJC4s56JzXaX3PBUY8jSjpAxHW7yRsfMLP37hHkM3dM3BCEL19VuPLSDy7mZqDzgcKNEiu5Udi1WK",
  "key12": "5pqeMCbLJwaNEQTREMbkdWqDgLWoBUhtrdSSbXjwerzTqcYXNL6NmiYdyg1awv1a2Q7EfAuzsfenFA3KDmNQhsvu",
  "key13": "2s41XJsnfxk2WVvtKpf4D4YK96HYxU7A17uCQm7NyoPjiW7PLd6XgzoeWQYmvYDmgdx8HW1twS3FW1jLv8rVGLF9",
  "key14": "5X6uGSow5P7kqVWBsxpu1gh416RcF7SJz39y3caqv7XyBcDnR9BnwXqjMJx6c98xaKAQr2ypNGZHR4v5uEV57gy",
  "key15": "5SEHKgUPX2YYAAqVZuNFRjJoVPkpbvnEdC8Ed93UVAZ9WpH66PXRJYMZrgZLqjniCFSz4xLhBwwcEGeXTuKgc5y2",
  "key16": "4SVSPdTAnWaAp6ds5JyiWaNCgx89qLJN3obnZU4e594HXzVLg14MwExWvHALHEafQBmd1JTK3Z3fnqrijhBDfqY5",
  "key17": "57yvsngAsS11j7xCSKETzLfvy13cL4769XbkST4Y29WD6hJ48jhcdH6v8TtFkjAZTuKVfxjjCESmyRCxU1QJ44RG",
  "key18": "4feU29FpgWq1XEbCACSCEg2Caw9ozuFVX4iJZvFuCXSfvkGjWjK5DjRu9SrnYKEkjjcc2vXfYCbnra3NypgQAT9D",
  "key19": "4hP65JxeLXdfuTzVJEJ9wx1rEgWhKcLWK46SEBcmBSV3fGHiR6U4qAicrMHRXv3ZJps3ezei4xEciefwxpDgdJrw",
  "key20": "44Z2W4tFPozeZz7wZGBquVrTYhsquXvTZ2SbH6hbEx5xUqFuPxRgBPgNSeHdTm7mSYi2AyEmtu94WBXNwhTEwBar",
  "key21": "6H1g8pqHx5kyF5VUW4v9pskusVkUYYz5j1WATxMsaiqttV2jAkVkVPbRSKvuaQi2bDCRumV86ZvcQ6VzVNCWd8o",
  "key22": "2tiamWYpgun5Ly6aZTCpdZPbj2N5UK9v1D8UWiChwrmkh2X4KUZzS8JxUjY1LVbdyTo2vhuSfA2Xo45nyBEQYDkE",
  "key23": "4yJEGbbxcmpMnXhwq6MtMUpYYq3v38NKt7q5QcQwR2QaCuxT71sK47YghfMgDakQkaijsAXLVM35WjsUAexXRpPX",
  "key24": "2Vd1uc1i6os44fCDu7VAG9KRpYFenjsjEJfPGyehthGY8ZEHiqZBSWucC4wSRBt6zskdYd3mKRgVBoKRWuYuNYTm",
  "key25": "64n9rSt1tnfknxkupaUKNwZSqZLdcWdmvjmFV9mdg3PRgejzhuCPR4zAdtweFDGTGhF92DCpcKFRpDyoMDrxkfTL",
  "key26": "3vriGveB8JKuBm4BaLRyZ8vWdK8U9Zy1nqoCa2C4QFMrckxRwZ5dX5udnRemg2VCntnwjtjTPQe3s9T32WNRtAmc",
  "key27": "2Z2hnxGQYhi8H7aCxKL6WBpxHgqM2spLQyPJA8HkJtvLVQiS8Tnisto4nkAaJHbSmNQJGq4WZcM35CKvzE2CXNFG",
  "key28": "5EvKkKPG6dzPHNLGn1r41GQXn9oFrzjM5zBinE1MmJR82yGZ59bGDvriXryFG7fHhXhnhCWYLvkG8SE5WJDGpdcn",
  "key29": "3W83p82a69XmxBhHMfPMbE9aTdn9TNvgE6zGWAQ2eWhp9yUsczUieu6xiHzr3s3BVzw64oXNqtWw4f5aMV4RZhJi",
  "key30": "5G9vcUSiTXbwsfAJbzsCaJpM5YNj2gbWMPxpGfQ7MvCL3yLKNFJsCb2ct6rS2qfJc3DuRiRfykPTwUdXSFBn3Rex",
  "key31": "3XYPgMNShRVgRRnQFYk1LY6pbTDJS9w5S5ydjvWN38Lc1qDQmxgsxTJaSeyWWq3yMoupJKG7JscuyUPSH6u7ipfH",
  "key32": "5YqW4xk1vPe4PqFHTvWwx5KkcJ12wu8cystwJLGHUnTNEsoPc3E8FMKCt2gEMgCyKU2PFPZAitp7q3UoqXeBSSVq",
  "key33": "2s1bVLJFmhtKkPge56WfpSd1f5sBrmaefkdnUCTAW63YDQNTFWGANkUttGdCbiMXsB9LHzCypvU1mihnowpY6mhv",
  "key34": "5aW41UhA3fiLubeLuHYuPvn87rfGXA8vS3Nwbvw6sP2xrXRw9vftwTckmGksCN3KkFsvgqKLDeQPLZXXnJUex1LU",
  "key35": "5f24au78EjVB3XhfqA2goDL4dQy8u4WPpKSP2vYjVmzjZWNeSZBacSZut9k9o2HVSkAcVAfNQn1sk8MbiibN1YsK",
  "key36": "4ejZRCUaPRFL2HsDV1yCqk9YipEZkapr5hd6FbKnAxyQcQYBtLbRNYETpPXwKykwK49AQ8E1sbuyExJg1n8rhyZa",
  "key37": "4Zsqo9iZPdJFgFcc3wyrYnkN4fykAi6rWonXqN19kFfdMQHRcEfb9rr83Q1mAzZ54eZbZnmiX65vC5msFoSm7MAt"
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
