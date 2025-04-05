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
    "2fx47Z41FWw72nbtzKA7KF4xf31khsZXHrme9FapoaQXbayEYssw4ok8ZF6YCGqUWxCvqPNbPW3uZ1jotMhNengZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SykLcHDRM7eo92qatwK1gANKABGdSD7KGgLUacPUwJDXzcQAmJMS7s233B4cb8pE7PcKa87FLUoQK4x6o8w9dbD",
  "key1": "4cpn1138F34qkkzqzpk6jLqz49eG55a3hSU3tyGrBzDijenGW4yhCEroPug4nXNrLmLDfVGdZrKiYjJozWdVeSS1",
  "key2": "4HHZnS6MY8dTyEe3uLmDhmmhC146hk9rwRfB95jfriDWCZjZ2dVFRaQqSRRrEtnXaHa8bDTTWLPYaxrPAL8V36e2",
  "key3": "599jvVz1wGPkGwb3V4Pg3pt4QYye4yamYTmAPt3G1so1ezjerBkd1wm1fhrV33jY5d4wTYCTMhfiSi657m6xB3T3",
  "key4": "35zZ7BnmuwNWHwwUrjzkuqJbiZ6JN3Rs2DieQJtQvHz8jihRS19MGjLqS8VTSjGYXjGMfEybfwFzYUXEzGiVmXLV",
  "key5": "Bu3Xws26eBKBJ1vpfv1aBnP8NsfVeuY6quEdf4yKd8mSGUzxgzE5PRMkLr1ibzFJqHLXwfNQHHwZggKdP2VKqSU",
  "key6": "5kD7jNa7jcAv5UWTrhPT6RQ1k2YX17PunTMuRBQtm4MFufRF8WSNYc1kKoYPv5qNykpD7LzSMG2PgDPmLAogkT3v",
  "key7": "1vdtRQvBhoWiAjmbUpiRFk1oUtStGXrM858mkJkh1BhkWMTyhe7aq1KTMZkUSzFXz7H7vJgXzRtLj4YaQHDCxFf",
  "key8": "3LFU9jBoLAhvipKN9oFFanaxQPRAA2RBeLag2UWjR74vVdneuobiJzWrp2uVd3aYpWGjJxoGgPVEDjQK9M7QtZYk",
  "key9": "4CwGU6wah1NXjgVL1ndJ4XDEMmpnZB7wWn4ZvSZGaGdYYUb3zhqtiFmzYWybJLNfMQ32djnWi6J4DANwYX5NWF3L",
  "key10": "58d9NfJdauCtGWZXyb88cZjfeLVpeghy1iFaPe1Jhrp8vippUfyfAbXCAXE2Yyso2Hiu43pPe895K6YtsW5rmzEg",
  "key11": "2X4JRyXodtcbyajHvekvnPTTMk32Y2QMRwTQPeGvhjqvQsmiHFgcK4WN3cUmRBGtzUMh5AYsrUjKqJWVXMe41sWj",
  "key12": "61J7VLb8rGnQbYBkWNSqtnFmqbRb4biQQ4D9Ab4ZY98Z5WQZMxPgHnGoVbsozagDz3QjJFJsMhGhGJGkctmssf9d",
  "key13": "58tGAhxKQYwb38jDbyk28f7qdxTh6AoeRBbLhoA4GnffmMGqjF54hDrWCVQQU3TqK4vuNWd4NSXKPrMMvGQGy7BD",
  "key14": "3kELpybAaxRrSkhLwMvYKoxf8JGe9fUHGKhvi36bHv5MxA5YxxXNCwGE75SFrPFgacMCn18cyPShNSUh29Q4rfX8",
  "key15": "2UdKsdDnbykSVT26QbVpsNXjDqrGRDPggMAVRzvCpkd6XQMbqhhsYsdBRyAytUjeAC9sYujdqvimrHztcsCy7jyh",
  "key16": "At4iYtBzUiwbsGWQAUE5zAKVVJKHL5Ed2rghAymMLzrFAEKCCvScKTejFfdwb1d3waqAwEKj3LKibtfZN6cpsF2",
  "key17": "5gU9z2Prz9cL4caHXz4pHtGptRQcCruGDqGnpahLCUaURthr2ijfoe8uAUb5YuWQ9oQsaezWcTecVtWWNxxpye7n",
  "key18": "4P9EhApDFyN7jV22VBBAvTX43eZibv9R8xVxYp5Ys4ZVq4vZPMzmXgfDZXkbrFcyEeo5Z8R6PV7VVQiTHwVwi1wr",
  "key19": "ZznWnA1EdAGCEqSthVW1amDGY7bDWFJFus9NinCXoQJQBMNjtmHkiP3dsD2Wpva3eqFDQCrA78RtkjHKwMM386y",
  "key20": "JaS3GtqgxP7f3vWFsBJbTQVHKcSudszosAhej2NPUCLQYXyGGYgCYAzH9VWxUEv2tH9BxHdrEqfo7z18rCfRFdn",
  "key21": "2UtBpGHLBFtyAuYKom9XUrwTJ9qSUQ8Y6Be1YbjpyWoGcWVd7rLb74JShUQychGnoD4xyxBkrotiSfB7PnoFnLN4",
  "key22": "5y9ugVBSbX3efkPMbi8dNM6vfzM3VyvLkKnAgESRz9XJaNw96KRq7RwUQFju5vPpED5dyoQoogSHDpySeRFQqNRH",
  "key23": "LRo4yWCTV7tS3JV7EGEc1NE3uUX4Xq1UAbL5SXbS92GLFR9Hxif1UB8XzRbJMuG8Ub1T4X1XKpyrfdVMVBMtWhT",
  "key24": "5LDCRSENqha3JsZn9LNEiDBsh94hhYXesmEiqksy1pQwScLqj3LipAPXbnFboMtGDF19V8bNRrhGSE3cK4FvTnMd",
  "key25": "2yhzuzR6PZ3C1FsvGBSNR6BPU97XFC12LHqVWCxxezS1DB1GPqpJ4KFw4uVrftWfREbnppdjxRiJzJGummgzkyaL",
  "key26": "4QybsjPaLz2eA4p9pTzUojMtGbhotJ47MbSN4x2vmaF7CvwDjDT6dTSDC6q1wGp4xRgCQFFdSv1Q6ZVfKCGC6nEA",
  "key27": "4qjRHeGUL2z4iknLqn9mFXpxJfGmo4VvSAeZeAeiVCdfjxfHkzcXhgWBWfLyp2fNJi1kpVTwZgQXegy5iuqRwQdZ",
  "key28": "3gA5zRBvhAjxTp9jjqKdyACX9gtifXmUjsKdh5WBR2M9KaTGNYGxkPUk4uwhjd4qDQAWapA3oRVsD7RFynhRD4js"
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
