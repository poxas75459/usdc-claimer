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
    "3EzgvBMPVrujWhhvjxrh6Wccsi1YRakAwV9apaTPF2BfAwSpKUdVFWhWvk3rFnwT7R3xzeGKogGwJKb6LXqC2tTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9dXsRodsUhKeWZcWoFaA8a9EktrHhgAwm8ymVUKVEj71NZcYrFAzgJRkLzZkXyF7DRfJh5p3CPyUoGoghxgbw5",
  "key1": "5G1EzLdAW7PcxDkL7ZnsVXgtpWP92uJ2eeFaFpDn3WQKrrMRXENqhB6SJ5mTBCbVHwEvbE6XMzyvd8J4NZr3usA5",
  "key2": "41mnL1Lw3kGy9yZLaugncy4wja9W1YJQn9b63tsY4sNiMVtkrjKF3NHwsXtoXo36Pq5kbgEFKen2J6TmnfT1z9pA",
  "key3": "4JyLSz6iHS6eD64RBqPYYNxTmembzy1rpcsQyJtzEgRxoQsfEbQE5j8Y9kQtM5UcmjNMQv4MErGGgWZUAeyeNUN6",
  "key4": "4xcBGjsFgXn7yo3kfDHeEwexuBeRWRyZ62dQhnb1xbChbfxj61Hj3RHVvmiCmwL2kLQ1F9zYnVSQRtEnHukeNdjK",
  "key5": "5WSSneBrAB6pGDh2SHSXBbes98sGq9B5QyKZPL7Lpze2YK1PxEjAmQEy1Va73VQyR5qkyH2p98pFGGt97wH6uMet",
  "key6": "FX4KHWntCUffSguGdbHTbCLZqL9NBkmpSnr62qzVvZhbsZtKGLxduBFxZQDmKVH5xsczScpmW1kzoYZkCmA9xaJ",
  "key7": "u31h8eUVkyuEuCvtFK6GJcary98ocsKar1QXsxtHF1KbbSyYzdDxy8ABi32tERLfposvvbipvVFX9hNY3DN4Xnu",
  "key8": "2kDQXQTY2J77dkbQoK43scT32Lb9nTyFS4TSFsNWth9WBdvUtu2WWL3ouvVfgV3jBixTV8MaZy7bi88zCjhx3GaD",
  "key9": "4JCnbeMVbst7rjf7CCZPwF1FqmGpyqcqADbLcRuXofzsgA9rwuLPC936to3JWhFuiVrr6y3QGi1b5LjjDQ1FXhj3",
  "key10": "2Hnf16dNWUjhkNXwajCjKNNHpdMnP8fx9rmqcATysEGZ5m87JuH5oc1wK7j5PxF7XPwVhpAoAENMxnpKAHmGQt5b",
  "key11": "gngZxeRKAXh3jyoNVUK9mQYgkHeZYVGVrRf68F1mmNSzZYp495SREgeK8VjFo15pMZGdMTpT33e3uuoKcFi5Uzq",
  "key12": "3Mwfu5QfGYbnGgoeeWeksoaXjqCH2roHH4Az5fzQMzM3q8ScpgBqee4AdtDQoCyvwW3PRuJb24BZdNzUnVk81MkS",
  "key13": "2FprUgQgXGCYD759zgjdU8qsbAWBwKLZBTt9oQ7mYt6wdSVgC7F97QA5jXcvfq2XH2j4tYMUaD6UHa1V49xhGFkH",
  "key14": "2D8HsyQoBYhgBkahc4f4zrWArGgdRMfyEjknueNbKdRvyiiDg1jDCEtdE92kjxECoiGYRAst47DaucinjQtYuZXG",
  "key15": "jeVF8Du38MHyrHvkrDh6ACGbriuaVmrDEvwdoExNs3nNk4S9tPB9dseyYQQt3iwkdjxFuMCYrP62L1jmcvELiSW",
  "key16": "3J7pweQzPHNH4pQaD2ruE3QJZAYUK3wrYLBpfiu3SEXKG1kUd5X4Q4Co88vWgrYPUqjzAxAvbWX7zRTQ81qFBNPk",
  "key17": "4m4PoNTQKcorBEgEVYvk7vtqyZ12HDge1iMZyovqF1iNVHWH5idUkuAmyyPuWPRm7KUN7pS2vTckEoTGQpnqBpi8",
  "key18": "XNSL6ffmHkgbKY9uBBgqczkQJnNvihg9AE5aAoCg1bSH58tJHnwV45RkzyPUYK9V1wA2V7rsvbYoJ2NcdyxXg1N",
  "key19": "4t97aJNrYz5Eo8GZTZq6y9vdpZStyugL6Ra6CynWYtrGucsRondY2GzwHEpaTG73fLiqiKxGdyn41LW8vnfX5buo",
  "key20": "2WgZqewTeLSLKW24u3ywLUZ879uk2eDPwT7rH5h5eBiFEnDrAiEkWqFCneqjcRri2egHNxVa5ax7NoJ5PkH7Rwz2",
  "key21": "Pi5Ff9xBnDMJufrNQPkzrejWrZHYS7gjy5CNQWzM2Nk4y6eyehnePuBJF49GqNbdrXhSv55FeAM8Ke9MKQvNkT2",
  "key22": "467buidQpJp3XpfRA8iYVgw5tMFx97TpQRdhBdnqH9enBVAYpRTuxu3aiiyUz6KJYwF2yKqKAMoYSFxZYLcoEThm",
  "key23": "4LuwENZDVQiTERRFAgfEjBbUREJPHAQwey9XMHooQcHwm3M55dimuGGepYrRkM1hwznG4WL1SsPFFVwpcKQEwNfq",
  "key24": "65LqMT2LDCXTYABhAUwxJgpd5R9ftupVTCkC28PVBysYhyWMV7MSuEjuGRcfi16xu6i7wZz1uhsHPJ4kTRLWqzDw",
  "key25": "56NvZR2kciQ16pUA79n4TAwC4V8mZnpT6ATkLoW2THCqB26xkLptfxjuNjejzpraH1BNZjXARV8no23NNbBeipAk",
  "key26": "3YvXP4KboW11gbmg8a8i3ganfuu148qzkm767tnGzszRiECrAGxC9WedBWgKEGFP41jed2tEBEiaKKXY2hn3vyhj",
  "key27": "5289uHZgJJyY3oaTUMRKRT9awjhgL9kQp5ZWP6S1HfThZkF5KKNP5GXxsmpMAcHFZnAvCEMTyDUpobCVK3juD591",
  "key28": "2W1B2YD71HjJo4Uhp19Jfhbu7xW7b5SLJtMcd6TG4Susb8kYU6jHrATGyF6mDCs7HJocYCsDYXrFPshdL1dYxjmL",
  "key29": "BCyZjKkeK7FGGJLLq8gznANy8U87SCyhqBJRejPUn41JY2VYPM15HaSutpXr72TDZu2CQMWgWhaeebyijfPM6SK",
  "key30": "3vV4VE6ByiGBKM3pReuQFMEUpCHA7C234FVcVcmPqYkESpxZGcqoekuAYtv4wnC15mfkpw1eXdsLLiDzBp1RRq1i",
  "key31": "2Rp8A3LifPXPvo7NaMTcPV9cCxnQRmvGKTwC6VAZUaNDeobGCVohVBKFBALjAG5gdqqJ5erBKi5B7QpKxHrm5GQE"
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
