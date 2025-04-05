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
    "3GSF27NxWL7z8bBQCm2x6p86N6w6ocY7xhn54aRP7ApdXZCSxgcRzyNZpA5mQde6JKVFeKsW1qKyyBLdBHzuSsvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53sR4s8TPQfT5xUwZip6aTBhpPTRurXpCm4gvJMUGgL7EnKsLAHWYcPrDiaWdmXGJkb9MDTmaUc83uAj7Wy4dSX3",
  "key1": "35KCX7Vj9KydswDwWRJ8dhNwQ8nLuALWa44nLdKhemx85TNCsT8QrmHg7ZGHguocYnmv3ovScRodPLUkmujs9u8Z",
  "key2": "5tifN7TJffZsvjb5aEi9rgWjRvCNutotNbMcHhkoUvix8YJSFCj91y2Th5UZ2rAuvUinTXaqvGMTMu6UJBZah4YA",
  "key3": "2VpHqx57Uwiv5BPrprdqY1wxCYRe3RtiG4vBXZzrVk7cAdbkM7LxZyYMAnR5d2QWmYCGHYUjEcykRHZwNUYb9CPw",
  "key4": "5HFReR5D92vc8weHHiVA2A32QygTXYoSM2iQ4ScSQHCajgBoFwYCkFVUmDcuFXAD3RuxbFZtVdBBdcRZsPrHi5ms",
  "key5": "5tpywwxJozbGuwvgbpK3XKUecQfKqSQvpKEaM5hqFbWALyL84VLCZh6YVsSpnAC7N2ajG5JCFbNU1HHhAwAVhxUp",
  "key6": "4ygs3NNKDSHKcSgVb8UqTU6pYgq4pTsFRBy4LSGH85DJAGSFDH696yzx2jrmeEbwVxEBgH96y239wvcLC4Vz19YS",
  "key7": "NqMoaHZJtwUfCHMQihAkXPuHd6feUGHvDsq7ySYjLBjPWvt6K8Sy4oRWnz9GPsXPKEc8FGhi7tV2pdhzKDARFPY",
  "key8": "2RSm67UYAxMRWtYeaqWyxwGCcP8prJ3vxuNhxEnK4bye63ScdKiLFaCDdQjyzvGVCs7eMZ2nH8LbvxXvoxowzTWp",
  "key9": "2Ryf4vbECQQeoz9dS8pcfynBgs84X4jyTmvQWW7RcnQQqhPvmtjEpysH5zks6qdeHWzRqHB1oCya6tkCU44aTHK6",
  "key10": "3oLKy928P6Y31hPfsaL4WSW3issDupPA1EGGmMaFL9PugGaAC9HURMURfQhgC3d6FUF6fzrqVvwXn9d5B94C4FYV",
  "key11": "2EVT6cBfNWc84YaX3rbRzSjYc2tyDRKFG1boVY3s87mEimTbSGX4TfXjhiX9sgQGxfMTbL72BqjnJGKy2RjmTWcm",
  "key12": "2z7C5wUUcpuehYDs7o7k4nrkPhmmMVruF9kRZuZa7RsDuWP9K2kaRpLvEWFsGUs2Aw2fHS6amkPkdEQYN5pjAJ3E",
  "key13": "2zHVu5hamLL6hVL8iEFCLaQwPY3monePnN9RcgGGtbbDkLPK3egVyhhrWv5p4gFB4d8P6t6RSLVYg7FdzBoiSnRj",
  "key14": "2K89MsgKnBjrNnMDY5XQVUMKuT2ecMJ6YYQ8MJLpcDoCVhxanL5ZsrGjY9LUrCThYKiGGcPerktKnea3xhuyKA2v",
  "key15": "5n2vDm5YVbpEUPyGhGySZLnvLQjiJRDuS1dENzLfvpEHXAU3VQ54C8vGZAe6Mnukw1oaMyD8x6mgMNCzARZyxDRw",
  "key16": "3SWxJFQSPTVPHxgb9ocfziPz29zeaVgRuSumvLZpkS4jhFnsnVrBmKxhzhUndpgjjUhbwSwVU3pGtSqq7JV6zUu6",
  "key17": "5FK4uvtWiudZkTXrPW2aKRHXDGriFjS6ScERTRXDVFfBY1epPihEkRHe8rt7BqzWe2q8b4oN6bBpdG6d16H86J1P",
  "key18": "4jMtVeW9ZtKQxenr6JNUYKg4PgErLW16qCUSUkjrNnjcxegBBmaUCApD9oLV5X9nfQNqTWVEtzxesy1MdwkVYPKw",
  "key19": "5m6e5cBPagdUUcHTkgVxeU1a89VQExcX8FtdCpghLTKLmXRuWk7JSouU2N9xz3Va5GetczMs91cbFm9Nt5ZSvBg9",
  "key20": "52y1wNb8ypDrFVxr3aYJ7JHr7oGpVoNeYFSf8UnDgRGnaPECNcucNqzw4c5WHnZPRtCWFsbiiVRaLkBGAjzTmnio",
  "key21": "UyntSzbYAt8BeHuio8wNPLDYbo7DcRW2qjqLAxGGdnPvNZoeufnKCcHCXueSjbyQzy893ARCipm2Vxdeygr7Bk2",
  "key22": "3yysAagJ24Z5HnA6cKRwk5t9hsDmyvvCBTxNz6Br5949YQgVntfjQn8eU1rb6g9hfSEFbNDrs8cfu3SghszyyNrn",
  "key23": "5MCKHKKFyRcxh7mvKnUFhzhnR7j9oZvcu7hVRnt2cUYZBc6Nv3YYmLGx6trVT4a2PePECUfN7UcMaNWbDLm5UycW",
  "key24": "2ZTNVXQ1tfh41XdzVYBTrd7G6G18xJZWVdKufDgBsFmT6ddjVWjFiP93syqmPakR1n7H6NxbsTvtwS8gh3iGHejx",
  "key25": "2Dq6EVWnkZPUfgMRAXktzCcY1rKmXgrV1S5zj79m7cyCKqp6WwEobuKzA1aL3D3apAwGTUJmULed5b5tu7vfLDEG",
  "key26": "nEzL2bRKjHjsHj8rFB9fiDrngjQHbMjrzWX4Wy159rpKBJWKR11D3JdojCBkqyw2cNmEH94885JoUAX47GNaht7",
  "key27": "5At4FfMhPVEzu4MP9A65iPHiQLmZzFY4bwAjTZ8Uuxx3Ge5wR1YQC78xTvvzhs6oAikkRUKkMmSGezhhtyMmLoJ9",
  "key28": "478UrVzJBD4755GqwxZwpBLJA3inmzwA1SS61SpZsVQeE1rZMEQDaFwqpCtonRtGvzKHcqhRwhkkZcAVymvsmHs9",
  "key29": "4iQ3YgpB2vw9hBWnsvJ3ouPvtcAT5VxEJpgR2NmHSC6MXHXGiyc4PcrWQWgwP7grjvh7sbrwWZouARTYTGvPUp8y",
  "key30": "2Acnw9qxj9MAMQnsAGbxZGeeZC8hJMZySuzo6GA9Vr7C6ZsZF7N6tpS27RyuPrs3W7jT2JZKs3xwaRGWvVE4FAHE",
  "key31": "43T8LqfLhh3oTy7A2djNUkJ238YeQybrumNms6eXH8jP8CuBY3VWcQgKav1jJhuZdkRLnNDNEutaS9BWNiAAmLNv",
  "key32": "2MFCtFu48wJoSriXG8R4LhChrdyY9DkKnkzWa9M6mSLYgBeVqk89evYkjxaxhgJUpLbPS9oJPYuGXR1m7pzu1Axy",
  "key33": "gtVadwahQjAcYjg4kAJNA8AebqVxArtVTJT7khZQg7QuaH9YLVJbSpTQZhNT7odSmKc4abrogkaCBk8CGxGmXfb",
  "key34": "4it3PaTEie1FPwcYoKNTFF7ymnafzxPpBLu7w8h4gsVABhgGGr5THg2tkWMAzT8bSJpcVVpgdWwLQtCChnqce22B",
  "key35": "yK2UBCbnA5a1pJq8fZuvHuszhjktwb4b5HjX2eeUPdZWAjKm3BAXRbqjseKgwaSYboSCfUfLHiE5QEi1pMbDFtm",
  "key36": "hWLyZc9J23x2k2eGWPHuTFER3yiMLzVWvH3vD2EDvmgWcMoetKafCjiZsxrb9uxkd9zqcnDRyHz5og9sg9EkizP",
  "key37": "2P1rFrtCmXYQVbMiSfP1pffJV8ULpchnke1ko4acf9qfirNQQkqhzuJTndo5YPaxwKxE9rDqk2qT5XC94mP1rnZ4",
  "key38": "64qGqXwjGAq7vY3FKncwp6tyjwGda1vx9oJ8futCjePXq57yDHMqLApomHqbmFML2ZvZUiEEerdT7PvP3d5dTRKq",
  "key39": "5dL6hnWaWaW4CFT2iiqJfSgrtCpA26LgrgjoFYoC81xz3jTzP9aFvkZSc8iXCX6buL7RUCKXcxoxfea74k2roBdf"
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
