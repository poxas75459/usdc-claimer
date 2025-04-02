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
    "5zWawTFV6DdkakkbMi1qcDVxVvCJaz6rcnN6sSM4698Ckd7Tv9fJrK2bbzPr9ZNyzcvHbZSJyzLXm4xQMsjRCfLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GRkSk6zb6kBNHhzn7KgzLPNQz3wBihZt311PnZ3teZMGQqjWDpftrByiV4U17cjzH41PvCMgDhdJhp7wnJdz4Q",
  "key1": "5NydjTQ3DYYz8v9pDg9vnZPuits9v5nSkeeTMUSBSCo5RBcPEVE2CpjJayD6pWUMqqGoyHvVZgUgm2JrtKMBogp4",
  "key2": "2Hu7JvoqD9sy2FpMjhRsWHXhuKSFfKwKbDuGUMoQ2tjujG8hwECKszzFdJFAqQJPr71Rhyha9cqfDhW4yiYYuMVL",
  "key3": "Fw7vFu3HnQptVyRQfwezNZDD91ffhT93XuuhMJas3aZHB2qyJ8C9eLgutp7wwnhabc3W433DqP9baC1pAkdVbUm",
  "key4": "R3Z6AiKF13v8Wu4J9RZCFW1FZTV1owoBj6ePoaNfvYrhHXHqd9qsVLdgHLU9CreF5ftjhHLJ6iTWXU6KgdeyAQ6",
  "key5": "5ESpFTvG4PpqDWRQeEyrzAwbZyupqxTTFBxExbCxc5CNHJfX8NnGArEByhEgRzUVbwLRgwVbPEAGn3Cwg6RikqPt",
  "key6": "4ZvnWKwzomQbd1oNM98vkQ6pSLkmRz66AC8FNGmEUQanu91T4EazSUVSFFCEXb1JbXmZtUPyKQjiavYMY6qTWCRU",
  "key7": "2SS3gnBC47v9gFfMWdy6JrurPvAdbCe4P93NGV6niUgC9Vrh5MP6b63qPsVHHUv2Hkt5YKHMoLeqAAodqS5VnbxV",
  "key8": "5HxYZoFCDW4eak3R3kciDZRcFmhLWXayyaM4SsDn7VV6SQtSAjWw3EXiWJ1BPwcn9anMZgJFCpS1kK3DwgSSqSus",
  "key9": "3uxRmD16aTUCSbrgwRoAM99B2VFK2gUP2JnYioTi4gJdNdGNgVtG5DzxESKwXNwGbJUKq8pjmHBbzhim1jvTzqCU",
  "key10": "eb4EWvkg2pQQZ1z6CiT2MG22ZB7BLCBfURmvxrYWPy2iaLfA5Tny6YdScvooa94zivi86frLibLx1oVBAXqzYe5",
  "key11": "57HLH17DTMpL6xrhpd1BAhzz5cgsdS1eeAPneYxhDV84VvovpQh9UHHHran9j65uQw7Ee6Puc3e8YQub1MaU83V3",
  "key12": "5Fz7zWU1knjpmocEEHdM4Uv5MDe25zYQtFvwxfoH7awxWpNJ9SNu7vpEZDpYPBvNCmzkWFzCuofzmejEYK4r46Ut",
  "key13": "5hYdL9e7wXBvquKwKxYvWKU3djVgqdLTHyL2N9n9X1BLvd3wAC9jvddVHUQ5fyeS2dFUKzgGHgE8dwSeNmSBDvLq",
  "key14": "5tmx1zz4kWaQxV9nFeTkSgnTmfUeRTspUGBJtjexcdEPEDU2wsn4GiFjUQJPmVemRnStJMjiroF4A7iixdKfjDpd",
  "key15": "uNKjUhd1tJs19HLYkEGeu1wznVSKjcr7ssxtARWCF9RGzV9otTdrYCKWAnxMc2EX9fHLFWgdwG2bpADnKW8Wi2J",
  "key16": "4oHk9dVFcwqpRNGdKo33WLSiwMPiqvWvbFi7SXkoYPvnhRmyhGGTXpNCwXiqhjRdrk3EztACR245YXnGn8NsG65R",
  "key17": "5LrpmpYY3LH8av82fX1KLMz47Tkq98KnHoxe3p8fkCjx2enGH98SdQm8RNFLp4UPb2KD4qbZHhgXfrXijd4GpkXT",
  "key18": "328PYHuSqbKEXjpdksA8SBkiwXESEZepfovJi9urwYUVjsT4gvpAUpbQSAiBd7rYPK37c8ELv3JbiwQCVvjt5fGC",
  "key19": "5qRP5R88ArEcs3Ls385uipD3fE49WyXBfgm31VWCxC4Xc2Ybfc4nuB24JSyzHKfCqBfrb4YcsoRPJSdWnTBeamsq",
  "key20": "5ks8AYeSM5DvWcZDUs42YpqhNuUWpQicu23K5doRi5QmVRkUgMWZ6MSvZdjWcg2dznQHXidtF9tym2w3GsH2ryth",
  "key21": "4FV9A2tczF4fL8iFVTdyCH764ypHo9McBA9bM5e2nWSc8qdpKuyLtyRZe1dK2FnusVnbWf1mHWzAcCfkcwXgXPJf",
  "key22": "2zvxhWPzk11SD383VyjhpE2yP8CHQCeWDdFdHFhPRGPTbooaZceCZYARQKibQ4eDSCxNXsU7JqfN4QKj4Zn8wawN",
  "key23": "8Hnu95EieTS1pkfewFUk57L39yZfN3Tz8z6YwBVSdchVyU5cG7hxX8wdT2wvNZVaSWuDAFfkdxKrpk9YQM18gty",
  "key24": "2Z36iDX19Zqx8K7rjnFCjiBfBX995yE7dyLHhbcHrTmh4LEVehHnSoG5mX2EHMjaB4p8ehgGKH245BQjtd6XYp8q",
  "key25": "4VFuqv3FfNVCfNu6TN5TAZJkaU1hsv8h2SwFmqABtRn6gENCywd8CXK9htPW2PSQgp7QnC7QJXu6LdzFXPiq5ija",
  "key26": "4pecNmDZ2Tf8GSS8AYZnWcNBq4oXUtcL5VZjBhWhkxZ6myGrYUhs2BP5kvtGpE7g9hCqkktc2JgiMd7D8mMMrcno",
  "key27": "M3EaWsqvyc7yut8cSmyWvkE39hDze8mpmxn6AgENawu8J5f1zwKb4mgkKRosX8T3thh3uCEwyJYVtv27ULRm1Je",
  "key28": "55Z5ZENVKAqFE8wmvUsi6PLnuUerGMucVkMDWWZCDa4Z5czDZN7ibiUuK9xMSZ4SeadCNbiEUdm9UgH2foY76Z4r",
  "key29": "5v3FYYCQJqa77RU17CVbg4aUdG24NQ3fXLa14cVeTpDskzC9rKWWjqwFSUhBE6Wbhk2n7ZPucYGjxRLANPYLkanu",
  "key30": "3jNj7EeLtEi959Bqbo79mCWRsh6bPkDdn9yfvDfLj5Nnw8cRhbXayybVpusUDBhatmzah7H8N2Xzq75tD184R2KS",
  "key31": "5zTLcne4zvLwqixrxR4o2sEHcJtu62SV7y4AYumg6X6jXJvxfseKxQCLT87c8dEjBnZ2x7JiF5Fxu8g1NDCNtW78",
  "key32": "5oeMMxUwLHmxMhSkN73WTc7mV8hWRety1B8YtT2b1ronHyNqTP7Q4giGZVhrRk9YMQRjawBf5Z92tds1Rp96duMN",
  "key33": "PbWPPkv1USt1CVPa2NkjZ2cfzrgytwDQXFt6ok9A9CGAc6Nf2DoJ8XZt2tTb4CeVNb2EA1zX9vLk27TozvprkMw",
  "key34": "5dHiCbD785P98TSFhWQyPhKeaAeA7esAEzbpT1efEnbJrf41z5ATNmxyA5Et6aFV5AoJq53vjcKGH7VnhSiU9DUv",
  "key35": "2crjzJcA8X51e4PZDr22dYWnee2UA6EHRfQ8mZRMYkusdfhTJTcggawT2bivNF9bbspa3o3xdxZhdNMyzrxzu2bF",
  "key36": "4dE5DADranHeYVisvEZVjhWhSqNF2tmxvgjkhYvrMetQE3dwr7QPGJ5vKJaZqRXG1ymCjxCtqR8K7aPY75y9Yb2R",
  "key37": "63z5FN9axUTdj5irsGupewUUKUxKf9q4V2HMbhhuFSSCK2eKK4q3iFzTsQuTku8Yh4dF42sNeucBTMbHHxueSh5F",
  "key38": "mbSS3zDuqP5EHe5h21uxyKtiLnjsqKVUCQoXAdQmsKnKVwPGMFmR5bdGVoUhZcurqjwYYmuwcpLQRJ9Yfnc2NLE",
  "key39": "5RHvGm7Es5NXWbgSEcKAj1x4jvCRoLqqzpNB1o3x92SYUF6MozqRP4CfASZfEowbNjWHhisyi3V5J6JVdFZqZte4"
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
