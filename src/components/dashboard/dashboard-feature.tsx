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
    "5uQHEV4TQTtWjGjczaDxShn7kNVTCMhfUjLPu6ubd3Y4Woa29mXifHiZyJGtH5BxkuY6DnNyiQ9JdLoiXtg4FF96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61P8pWe81k55FVDbN2xPX5zG3ioe8nTWRGH486YsBJt7sb3jqYcC2YYQirGvquzmNy6uMxu4yBQ9QFi5ps5KjrsR",
  "key1": "3GhtME9hSxKRKgrjngk3wGnpXNdJPYkvuj8JCWWqeUkWSsLit6xVJLQNyiUKqcoHLurv3CobXKzSE5m59cDhLko3",
  "key2": "3DqDYzWBSfJsWXTVLH2Y6kb44Uw1CjQhvGnn3TV5xrJAXLDcM15RrrrWFUN2K4R2Lqbmkn37r1riCE15ucvxJL5D",
  "key3": "BWsnbFvNMFDFjzsRuyiZBq2oGEWfMG4mnJP67AxaQUpaJa3kjjWjXuK7ZwanotN6tH2PAUahikp3cfQQhYsv6Ad",
  "key4": "2ycVQKvFGi116L69JZ9hbwyXU5eS7zc99gLr8hQz7BKGADnyzcYeueLpG9TdTkiDS546ajpgkkR1unajRCYZHEkQ",
  "key5": "Gv9E3DMs2mJd8bgj5Kpumotd2FWWK9pDMhnUeVPvNkHmTx5eHtZLxJxiMZNvdBCPpbdRzdfkmsKhjDbfoPs1tNp",
  "key6": "4bTS9NVfyMRu7bRPKVayVKfKL2wMoJHTTk8JUfnLt3vjuekeF9BCxGBQKr2brKprAYRjKKFHAibxNr9w3MmtiNSd",
  "key7": "2rXB1Btx81J1ky8adEhBa2eutip8kwKfpwUiTXT1r8weShPo2EZuabwUEWEKokAXTKQ4MBdnCZWAv1a1V1J79CjZ",
  "key8": "33f92xFkAngJw2wEr5VEjEGLzmPpSeW31WLKQnkVx5C4PQbZKgrxaiKdAghEEhJuk5T83oJ3anB69hUajcUthwYH",
  "key9": "2Pavbq9X9mj1KjYwwpTpRE4SJ5tbRqsdWqFPWwvuRLjKhFf38PoPFzbhpGHZkJNUaHB8gQx54boR8tpUCXP6eaCs",
  "key10": "2VP6MnYwm3sSEQLv2cCC5Ck7RvGBEpE4MqZ5a8g2UYTip3ZyC49EKbd3a7p2vB5HVePcYGMePaFHpf1oKrK4Y4mL",
  "key11": "52eRBttYQUZXWooWLa22D8o7UVAZiMJj9RudekYs7ZtLYWHc6myirGBVrLSAUH4drJKKSgsb4edNDGDqWcPM3byY",
  "key12": "3akpX1FLWUVspp6deq4ovNphvzmF8gXBRNxMJ5NQLww2GSaaeKSgCfu1n2MCzZYN6zc4zTYFd3CBsdkCWTU8qzpP",
  "key13": "3xZ9pQWxcVxJGK58GTEKswk97Pq6g2LWbyK95zpARg4YktV6guYadQQwBZpybH2RtY7SHjcGjGVv5pwYGUoqVQtp",
  "key14": "51VoPoR9FL9Jj2Kevx7LaA8dPpST5P9L9reW43bv9nkRCCxbkNiyvaS9hd13PNJ5TzaY7ysAbH2xSJRc4c8QW2oE",
  "key15": "4fQTm8kj8nvXPT1NCheuA7Hx7JGfQrjGPY1zwrzvJ1wnHou1mvkXEPvz11rQnsZTas2njw8FoBMRdnBenA11bqV5",
  "key16": "53gdcs19vaY5YYhxpaeqVSsKx3cYPw3tYb8aZ4XaK7e6dqW4mzpz6MpYj4H889dHYJb4kCZT1UXTpLwqVxQUAdGP",
  "key17": "5ypYWJKM4uJjM2M5JtBX8bC9ChrvoyybMLZdz1hjMeeWS7cVHL26kencSZbqpTQ5Pgov811zhtyJK65sJDF5eWuh",
  "key18": "ruEr41Wq162qaWsAQYbYrTcu2bpkU11J2HxvNQA8uJR34df25unfLSHdZchbSnVBs4ANidP7jN1GqKPAagK7rhP",
  "key19": "29y7QSPN4zPknrbcjS3ZjDDvJYSH1DETdyvjfL3Le8P3oz498ozsZUzdcsjdahD6bWqJYWwxZxSFwsn7N9qmWXUK",
  "key20": "5QFUhg3FHye1K6Y3KmC8TUVNy445yiuQJxkYfwTjHvFgCDzLjraZQeuVKMLTcJZJzofspRKWsiNe7MSGKH7zEFhW",
  "key21": "3HE6Jxq1ZWY5d2SdYMkqgNzhhWDBFRb4eYtUrKZ5pbyePjERQByNfwNAUB2BJvo5wa7m127BYeG5Xi9Q4otFxQRG",
  "key22": "5fJqAQC7cnxiuwfeRogSg4s4yjjdRFETwpEGUzyRRFT5AXioGeUZb6TZZptryXceAoEwVVGGnZj5DRVDh5o35S5B",
  "key23": "64NhgKDnvcBBRzSgeNNmbeRe9x8m33gXotcbCGEGyZfjS6GvVsNeSrZDaoGuZ3v8mTBVzequen5Rvz2VRyzzmL9k",
  "key24": "2p4xnibcUnhWWpknRuNWh8ncBXexLirPiSY3zkKtx2Nnod2rNSddc5BD9cmHaSFWC8H4DmyBuwnGvuZJ5z1XRAKe",
  "key25": "4W8wnN2Rq4QWGfyJ8MqygwZ1LodsixWYWA5mWkPNyoDPMUG3rRsaP6CYpSUW6yW8JnBkk2cbcFU8ATCu9a2fVsVC",
  "key26": "4zCAtjjzHCaDkbAvqdRpjCABdqHBcpKsa9nMJ4fEok9xBHDyB3JXQy3swdZd9zf2fQd4hvpMCPQDKyYe4WGdFDPp",
  "key27": "CyGkJTumVoxsUtgtHjbQYztcXhtmeV2SFV9xwTmuyvvuXyC8zTNdGXeWvPXw1QGKnAdeSfTGrKG861FVxskYCzS",
  "key28": "4JjFn4kTT4ihnZFPoLtJMQ7BaTbXQ67fvyiEM6bEHH7siGkhPbhTwhpDdJmbWcwSigocjnns1e4dUAAo7sryaWoY",
  "key29": "Vh1ERbUsr4L5dQgPAyGS3XtSP9udKdcTpZ1cvacn4YsRd84rjd5FcrxD8DD5mkz1UgnfPqkrb17f2us8TzL3dsT",
  "key30": "5HYLsmTbPWDUktuWDqJfPFVAXuQVonRLACKkYADSfc3F91KTp6G9T5SJkEYAwD8PqCfz5o9JvjQJvZDRyyG2oNr9",
  "key31": "3MePeDD5QGyxhfEbGZP13HtupNqf7GHLJRfKSooDZ5unWquqJQWTf3iCkhKmAsK32Y3xwk1yjJDs8fpsLT9yMNdz"
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
