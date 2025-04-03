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
    "5UJbSm9MzgpTr5K1LpcGBCHzbRitJVgTcG12hmeBCM25JmQd3F1mGfkT4LW7PGMegpdKiJZo2mS63ZqycAorHrKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDnd1KdFgjmC3r8KK8dbatTLbzTjiJvrCDzj6pEMRAda1kfnGUctbDgPAssHGe6pjskSKZR81HV7UWCWhRtm5G5",
  "key1": "4nsxw2NbqWP4hFFgmnWftFHYDzoCfYVySugnL1hc3E4qqrJTqqe1jUtTA5C5xnXwPi7UyYcDJDdkZ9EcTuMgXSJs",
  "key2": "4kiudfFC7rQm99jA47Jf1FNrnFeFUqVZHsCsLSHRxXQJETzGUntaCKVGvZt4PX8VU3FJydJjwRVfyGRmWvjBcuoa",
  "key3": "3ycGRQND7rRgyNuBHtyFfaKz9ZnBtDKYoVu19CRYxf3eEG25xnv79ojw7EDUGEUdUPruq346WHovaw8ZRDW3LQWv",
  "key4": "4FAiwAN9HmXQz29Xtue3QwJePJNwvSFh7ecr6QTLHNW23TiVyBFgkFXEbiUJSZ4xPbdC7QYyCu3oNdAzaSuQ5Xti",
  "key5": "4R9836qEATvdN24ecU8XQigNVWeALiGXcgYpytMF7neW3MnjoyZFjvrsepKwfHK7qw6ygGA6dcZ2Nh8rm9Sky3v9",
  "key6": "4iwcrzbrikE2R8FjjiVQNvfjJWmX4C69pLc2VScnYUSk8tuBzhVyEaZ4PmwMJQTQzNcjZN312gk35R9h5d5wPstZ",
  "key7": "kqXNER5JcUMAKuSJCH39PGyWzjwaAfrBsef69cuCcM9CvqpHb4ckudwqcbFbk9zEjruWy3qcf1RxVMHHXSrA6L8",
  "key8": "5rm7TX4MLcLGyS5DUwX5gip1JxhpMb2BuXm7nMDvDBTHAbVCU2nsHoTF9c6SbTQWiDaf9Qs4orpid3DebASFJLN6",
  "key9": "2sHJq6ptSDGnXMWQhucdCZVzfhaMAzmXHjpaM6wQ7qwKFPbTh9fEGekncsHD3LQEz15eU8GjZc2vVq65eiSQVqry",
  "key10": "3DwNv5gkHaNuhYNvYaBYMEA9Rv9JAZCGo8uhfNcWVcebhZKdQXehe5D7feuL3u7QGHhPHx4Tbn22Ts3Tce2EohEX",
  "key11": "4gP6iByzqTk1NHTLMvNRPH5kDRJinmKsn8XhrEQhzFmAiiLjveRqxHFtvLE29sRFgNM3fF8zifsq78whgsUp5tms",
  "key12": "KQEDTfrsoT4mJvVGBSGoh2FSkxLheGTkyuWxCqoh4QRZkcP3ScBD7BLyWGqFB2Z9QtGrvoHF57QcuTs9R5TmB4k",
  "key13": "CmCJwvp4rPzjG9CTp9arranGLHH6QCXowGB2KWBkAYgT5asTJBkQGupHUGaT9fbiTXd4U2HTSYj2bitmm4J5Etw",
  "key14": "2hmPChra8WSk73SmP2rjVQeUkseNBGQQxZqmfKy1wkbkEQj7uMA7Y8EA3EBUY1MXWdLtRc1REazZZQptgxfS1bPH",
  "key15": "3Qfj7vPqkSHzEJFw3Db2K7wEcbTggHMJXArsv4xNhyQP8aMsmHZVtR82b3wx4dZqbtvdY5so9xH7njpnJpAsm1VL",
  "key16": "4eC6MjJDWUbcA3SrQhEToaXvB4wAJrx2azNwuECjyznNRWMhqbVD8BNpepJAtxzu6aD7nEhM9ujBdekLjvKAyBPw",
  "key17": "2JugQFJn6mANTfZR21sNeg1EKeNqDkkJd94cAo7mAKxFo81gUTYrWmm4angGKU4qaW8Dqv4nicGmoy6tNHoVwaS3",
  "key18": "3Pgw3yFB1vCE8ZCsvfQqpfbdypw4hWpi4n6qBwKQSovwDSqjA1APcCZJumExX69oBk9bgf8r4BgVKbAM4W7FquMv",
  "key19": "4ErddCJSp2F7WvX6mZm9n9oSGGeTcTK1MEQY91wdKGdKmU85rrw5WWMEfA8e2CYJaFvCPpFu8Pki2Tux1LNqWHVS",
  "key20": "3ZRVSTuWmSTQwEjA4yiAi1dmkchcuyKVaPrcAeCooq2DV1d9g2JzKwUi6kSVsEshRX8uQHzw2Lpz4WHQ4gquC2U4",
  "key21": "oyfukkb9KR9kDvRvAqZAYPUcqjePGsqA5Q3UFQLycYtC32notB8gxSHXXy5ArDpKFGUU12DrjV4ZLNeKW1sDKbD",
  "key22": "38p7SgjVfpwaVAxjLFCWZckX2LZS3qrGdmXqw8HxrMvqzNXZ7Fy1Mw1ZN1PZHTBFZ87M3m2B948k1wWYbVfH8yv1",
  "key23": "2enUEgb3RKDadkUdsg5hMhYUbPthymtQo6Q37CdGYbna4kQXPssknZhDeSwLe51ztpX7LM6cPohJFkXKCfU9qbaD",
  "key24": "HEmn2aSLooudp8jdWZmrbuKNvwnRQkvX6ZVWYEpjJycBB5Cw3zxUQrvGikyjkVvVFTaU3gMRmjzZwwMcGySzyEo",
  "key25": "5hhu3UDazTQz4HrZ28aD7cYH7jUxam8LsV487JAa4EupasgtaeCrpmre7FNBr53vpAHnJmVwBRrYg8CA5S6nXHiR",
  "key26": "aLUCdR45ogTtPkUXpJDvVD6zNsRRTzBRWWpNBucVA1nvgF7s51caB1bSzGdWABEqRKutNZBoSxdBLaBJ56f8gTE",
  "key27": "2Ck6XGuDyKQhWYygyiMywBJbCkr9VwiRr35kARuSt8xJaVSWAvte6fw5wXXYPoQtuGZqtF9ZoNJUX25GpMJCMiX5",
  "key28": "3JUYX26ASVqUjbu6PcygzF41ns7zGgUNyCmUTxpiBX18FUzEhksRtRAWHHqF7z7xLMW93VeKJ29DWSCwEKE2woCn",
  "key29": "5Ly5pg4arMANUerinHqQgkq6Noqt2cDT8uV3osGKZHaD8Yb3YqZhJnrLQjs1qDFZ6H8ivZrHXrg9FaGz6rjS34oH",
  "key30": "3Nepfb1wtH74UUJDUMY7SpwgGDEh1V88nYKYeFxujjDxpdHForja3e18XYxBE8yzZoA33BXE3GdFr21eP1YVTcUq",
  "key31": "2kxTHcircqS6varaNCNUeMvudw37hiaoJ9j96fsWS8FFmJzUZUECBVcNDmZmAEFaydWdD4gEtAmc8Arf8qn3VQdX",
  "key32": "r327Sa2JQwxtxsTJZVo678wjuSQAnoxpdZMojkdAzZj2DvjqEebcSpMiQ15Z9TwjDQ6gtgceiWmDnxht7RvBm8R",
  "key33": "5G89UxG3xYSFaiaKTu6XrUVEMCucZyg3nCGmD75byDB2qf5YCxFKw5x7VvyrNr4VXBVqKcsf4hdJMAQuVejs5tcR",
  "key34": "4nN6E1wxBc5eq7i8N8e282M12KfKA4DPVMcafL17Tp2DgjoEuoYKaH6FrYbgEbar18c4Pw4fwqSqFuujHQD8Mjp1",
  "key35": "3h5o1gFeDiPUPUBTvG3zwQWv9hDZRofb9C5UqRvPmqNpx3RYBz1mQf7MdTRssog7uLEU9vtYtWjCqaQYrZMNJPcn",
  "key36": "4YbSL1aAQNg9NM6ANnWAkKgAiTbvfiuB9QUDNM1RRqoFmUqHeG7LXX3HYsfD6zMN7bXb991GvpYknkfudiWSAvbU",
  "key37": "5mfj2KvJedxfFr2mLXhS1njFYDqWfer4oZXq3dWWR3WQyeuquF72mM9eemfQzyZ2AxCBGbYLTHukfyqNfVy3kx4W",
  "key38": "5wh2DL5UxwhFWJPciC682hTmAbao6ZnWcWfj5WXNCTEw5jXJFf9fQY4tVVZ33MgkU4rS181RYM94xyiPRtLwjNad",
  "key39": "MRhkvqEh2FbXAXS9CoKzhgWqMfz8Rxvx2K9NbhkSHsrM2qKzYRKUnhBUddKgdfEW992HML9qcNZLmuTs89VegFL",
  "key40": "3uxbsHLok87oHXib3WVAoxQDNZLVrMPw3YRP9AsoeryxiKC61b5cA5WAtugZNES8aYfitFT39ETNZTN2c5aapG8K",
  "key41": "2zFc9jLDuqzZTYqbHsdtJc2fau1HFfcN1VKpy7qSVkz7Sb7bQs29xfB1RQ338PUiJycUoa8X9UDmawPvoo2TBx1j",
  "key42": "5LgGJ5MJPtnuKhtzhwpEaPNJetxGjj9u2cynzvHJdhyQKNi7pVfxAz5Zo6k8tkPcoYqwFr1WknX4q41y2fP7MmW4",
  "key43": "4s6243UXwAmg7ipPbWRqcyDqMVgteeBPh2tRas4RM6Xoc46ajq8CQc6GHnsyuTUf8TVtxmMVzBwJpMdyPvy4tcNR"
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
