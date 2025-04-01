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
    "53wSHsCBAStWLVJeinAY171UL9fQxSd1KtbtJEu2QSyWgWfg7xTGj5s2DwcDT9YanrhRXv5kBKbnMPXHMRtQ2eDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyz4nxuge1PVy5938cMQeGLiye7gwhQhRpbx1Dmxdhy3ePL5WAm2T61DrPXD95LjRAqWCmmYjym1x9giVohBpKE",
  "key1": "9cBptutuzPEgG234c8pTk1fy6soR5hqJdgCBSz44dyCwEg57CvdvetA4Ru5jwGq7oWi5JW4DQGegSS5dKo3nSRL",
  "key2": "VxRbC8LuSH5J3BUXezNDDp7YdBS6W9uJmQ8jVZ1NBWFRGGPsEivnPbzU5cvuo4utfRFwTfo3NmfsdBfXU5ySzGn",
  "key3": "23xzL1PgtzJoU3ThVLwic6mtZi8RQoNy8JwxS91GExb7YHuXNdiBY5NLMLszX9vskL7idqMCEGnbDMquD3W6AJVX",
  "key4": "31CmWwRL8SnHGUHwqqXadqNNZhsKiC7zEyC8XStTt1XhGC3LXDZ5YghLFbJM5B86hmEapb2qgUxew5YD2yCqNXcC",
  "key5": "4XA1kF7cnGigEz34dhh4Akz5W9k42SGqdQcdAf5m4RqpwgH7r5SZJahq963aXLoLaqvbn7XTqEcPvj4Vqx2ec3mR",
  "key6": "5HRw2L7R8Z57NFwRxF7XGMPNEcjXNMSLUcP36e51VLXRhr3hg7Lm1x4Bo3sFqqdJPXPT38bJUz4gr9izR7bta4hC",
  "key7": "5hudP2LA51Ftn2Cwq1pBCvZNda3kFT3vCYPzdZ9Czu5fi2MU9hCjPUeBfLejFHLXvTrc9QwzUfGS79QV5DEfWEh",
  "key8": "5qttyHf2Nun1rvYq3ZtnVfeximT4zFCkejkkbJMC1X3inwKzJLQwzCr11RiVuuUcLnQBqJzwpFrKPbpQufwhnCG7",
  "key9": "4Atz3YAoCxMU9yGKF7462uZbFTq5cTfNRoKnXXf7K9rmRQMZhPU94sfTLb1ZmorFcmAS32oj5aVciUFLwx3wMbrR",
  "key10": "3GwesWmZ6ywJ1BKSmgR1fopRTtUmAWgoX7PuYMbUjyhY99guuMa7m12zKhkcFordCwxL9FDQKJXsA1NpSbnbaGLo",
  "key11": "2BgZQT7S3EtnVyy74xgcTyHMbN3fBBW3FH4XvRtGtyoPr94Nia5a5oC4BGRabYEGdYhHYTXLbsZd57eqoqqTs9aq",
  "key12": "AC4BjQJVXfCMdgkQoe4cFZswggMwntKRU5jwwYkknEyLnKqDqZsk1CDXCkwFTqKHWUuzwm8kwXcvUDoHvqEfXMY",
  "key13": "nCyWmJx5KAeiuqgYshtpTrZtFgfYipq4japMVJ4ijnucgT1LfyK39miTCzD3Mku4PV5MfLq6oe5ZJPzpNcqyQND",
  "key14": "31wSGGoXmFMx2zXmdX8LPKGaSdX2csRZ4u3oBnUf9zfS5CS7HAXcJqZZbk83b7HzKwqok67CJAeDkkAoPQCZ2DHY",
  "key15": "2fwH9TpQDFzoaA1accsMcZLYMDPHrdqzddvpVbjqppsxPovV5YHGBeme82CfeMDHoFRJnowow9UHpvfqdX9xtZER",
  "key16": "287fMTAspEEe3Yr9vhWD79ZzTBLJ6fkBsUhZrkMt84q45kHRAS4DqYg6zJRTie23Um4WW8ZxANjCCKi9DjivAFED",
  "key17": "a5vLPrkBqZ5H88p7n5zs3PLy42CxXXMpKg5pj6zvd6vXLFwQWQp3rSq3W3JrnJi1kaLcQ1ASn85MR8MuvvNPHUa",
  "key18": "3aNq1AHneweuSJX4rUZZBhDcajKinzfnHdCFZavwCsPfJYCkZCMCxQjsTJAzjHjjxvokwhHwMvtjfTBZRLyazTSP",
  "key19": "2HhfE1jXTK8ztq1DDPbZWuVDmhjaiHepSj3iE9RgyFTXQbQA4kNM4hDowpNBrnneVcawoM6eNT71WExNy8yyhxmb",
  "key20": "3zFoVJfD6pozTjxtyxCwV5xRHJQxqdDid6yEUK8zZPZsmi6yWXv5CBZk34qefFFccZ3Y5rjMnqqzZCbC9Fj1Ce3w",
  "key21": "2rDBeipdT3oE36bUspH4hkUf4U2D47Nh9buavJA6MfvKRbmZdpozhf39m9wFrT9ozh8teU2z49XsoEqTzJJEhSLy",
  "key22": "4j23jb5qCRwCmQwUMt9RBAbkmppJF2gHJYUGVVuEPrdvC2x5WGVBpVds8iuq4fBma1WPYWRpv8LRwDNcY3fvDDvL",
  "key23": "3NCq1LiS1XbD5R67er1174QnQViYdDU95BjZmEEw9uJsxQkfqmFYznbDySA5sAvEms4azNc5AeKvEW3dTPskoVyt",
  "key24": "4oJhfsnMUkEyR9MTdZgiMdDLEotchXKJDkQvePvG7Be8wEynBCBHhvJQoYbAwwrBz9PhYwGjWKfFK354Q5eWhr9E",
  "key25": "5q1XYq6fuMoRRy1Q3mQNW22kaJmzWESgGbzEquTatQfbrjTh1HHsoaiUuycQSVZomaDpVg6DgK64We29F8Hxz6Ag",
  "key26": "4Ns2BE1dhaSLz3VNAPkknHWoNi7vjeXcTaLEk7ZBrp4u6Nb3rjpjeNXcEtzSKyEmgpStBq3wFHzXko8bjac4DmP1",
  "key27": "31GTTZHiZwMu9hMmaiiUkahjwqnC5BvEBBjKmL4zUpa1nWLKTPNRrZ2ZYynfoqGojmgGisCrFpxHp96dzbQ3UR21",
  "key28": "3MK7LAW333H3ZXB7V5Ukcw1vGSAopjndu2CDK2ARUF2d6AtcWcYZnsb3VaoZAYurMETVmjY3hbQ22NWF9C5QWrY",
  "key29": "y7dYh8JhGmniyYPytkhLH1KoTjCPoZsz888jkb9sBosBpE9Qy9Hxop777tQxxkceGaWxYMNG3he82H3gzvYwrB3",
  "key30": "5z8x59pbrkKtrAQK44tjk6LzpFwLKTKtioYwyBX9qAp3Ajkw9dpD9MhBUy8cJe3cVpLNx6JFMkmz8P29sXA8KwGf",
  "key31": "2SdZWGLk7fPyY1JoFj7P8a94na8mv3PApBHjWQVgkmdJjL3wQhQQCmeDAGqFvB2kwxWZKxYyUMKxLuUa3JgKbucp"
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
