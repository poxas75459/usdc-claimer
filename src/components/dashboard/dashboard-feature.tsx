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
    "2BFbKwN2jLQCNZBituZHSs8cNJDVpx7eLRZRrfKYJVscoWFh3LPEbeTT3eKnG7oLzBJjiMF1fCFLm34m8YkyszMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wu1oREPBHgzpzcVfz2dwER8ttnuKKgFFhWMZXzQBx3TagChV9pCL9zccJbybJS2nUaDaXFz2SzF8tBHpAByJt5",
  "key1": "5kd3ACK1iM2YtyRnvSWAF2wfFkqVwMVxEPWkvoG8xLZSpH8RvFYEirzgg9QqMr82HaFfqo1jWaNAN3VG9CRsfSSe",
  "key2": "rVYXx3x5MdjmdfEYHnhkFJkcxMgmTdmnpDWTwMy5QwPFeMb73JeExYtdLNpgQGrABxEzTvb8TKsgErvJJxCFjPJ",
  "key3": "3kNXfRv94c74JBX9yS86e22p4r287MVjoZiMF2BGcM6RChYAqwfruENjcQt9UmyfEysnARAyvbVYvRMQdghkm4v5",
  "key4": "3ZNfmoWbhozEEpaBxx7i8PiG45uQCnmENCdgSpwP7ghFRpQKGnXTrGYUExueC1Jdcx1f9mPYk3rzy3Ge9efGv9vr",
  "key5": "2kaaWhjESA9LWyf76RxvFaw8oxSXsbF3WS4yRxWtWptq6Dsq9PQHKKaZt4rNyLbAGVvzbbwv8eAbENGvfTpeyJPM",
  "key6": "2cbeRpqfJXchV2gNDptr6hm9vxDvN1WCsFZV4c5qtJGKxNjaUFEyz6tLA4gBJQPeReZbWABFJH2LtjYei1DwxV7x",
  "key7": "4zJoQ1xCQUG2gr3eAdUrpsDCRCVYChZ3nNPFeYhovTPSBS2XSjnbM3gAzcknesnPU14pn7A178qqn2DNAukMRTTe",
  "key8": "3BT1B5oitpBK987whCH7uynY2AHLzxyVETmJf33hRUwih8N5Y4UrZcsrcxTN8YuhAppEVaiEzzJMgp2AwKozF8mu",
  "key9": "4HVJt3E9BRtvYZDLBWUf55z7o5Cpijq3bEVuiBzF4CMejbKeTvKyVGnSUrkozu3Uv7pFQELQiS9St6yqjHzVMuhg",
  "key10": "3ezZsCde2XFe87Luj1h3VQxjXVZM5vnzDbnjbs1BE2NXSywWJYzogaBwG4RRhhKUGSoGZyo5h2tJAZH7wiZWDEBo",
  "key11": "3qHndRy15wVeecRcwyqfQXZnt3DHizi11qG7gX2Nt27WLucBZXG6VghKKF9u1TAbXWTQtdtP6Mt2VxnB1FigZvFx",
  "key12": "3TmXp7vL98yfaj1khfGh14hShJ7rVakXXgQ94TVYG8Na6SQ1aDa22kmhkcJBdja8rvgEysUFcHQSCtjB75aLk9pB",
  "key13": "v5WkaLpZFrT4qf6wW55ZAEord1x3A1EvEFMZTyrbnc2d4DbY1fRjWBgXCo2RBZUgdx97nYagNmR5ZmKpNANQFcB",
  "key14": "672Zp1G6NerqVRXB7wQgN9vbCXiqBsHzeX4BCZj3cJrh4Jd76SWgo5freUE7e8fkTXStNbteStC4FCcsVWuFRJ4F",
  "key15": "2W96qnrLVZ7uysqPMbnndeMMhYEBAtseq21YaunNTE26XwY81aLcxkFvFT1b7fi6ZcDUBdo3qophYUYXjxZ7xKSe",
  "key16": "vkfgX4Y1uFXQ9qMpPZTL7ksW8X5oSVJTbEygT3ZAqht974Qx3LUZkWMhkXhFBJuwxyQkuiLJ7xtx9nt1AiCuZib",
  "key17": "2xY5Ta39yFh6xe27jFn653yHprVh6hraprpyrPcZDwUcsNT1yRt6XvUVgvYVaJjK2v1HFxPjV6KeBicN96YtGd6K",
  "key18": "5Eu1mQxKtcimxr432EpKvpcAn3Jo6Un9Q3tPVu5f6sbnKqP5Mo85q6abQPBUjPLWNmTdXMMX5XjcRz5eN23hd1jQ",
  "key19": "3bqsrQDEhfnDzLut41gmgkwVpUQdwxpPQZTLWV9e43MkxgsG7az3Ya8EapdNuEoZ6QRc1K7GUkbUYCYSHecTwaid",
  "key20": "5Z89xkvHQo4N2QZeRvVhwpTJ6VC5V7ojoNWgEgqBH3pi3EHPLQwKFjdV4GsqW6UV6qZx5k5jrYDrRUwMYZX1FGPg",
  "key21": "mpBpzHZ5dzbzpagC7dDHMtYpW9UdwytYUN6iwGs3yKMMRU2XAqy2uBuHDjbLsMSyCunMnvL39RNNUxsdEBabWsy",
  "key22": "oEYGuvf9TRMz79VDGUYqnSwU1MphnBtX9xxpkaXw33crW2w4R2tiU5MFP7EMg5dnkjdo2H2HSL1Hzp96maLyTDS",
  "key23": "5NjmbqRmVbELiWjo2BqjVUFwZPtJ8p8ECGvCfmcbSJaXcf4mdHfRzAkWGqguHGtX5CobskBHytDCBwjWqtvRgLWQ",
  "key24": "3t1sPGNTXEHEYhybUfYGcHxbt6yCqBkUnhTeLx16Qe2N9BWjANsseP48iB3qyjgKxnJZXfRbHGgH9hqbLprS2oBN",
  "key25": "4p1aYtTmoYKSFjKpy9Xpx599nHPRmQZUsweqA1EwKna1zq4fbi1cPv4CNZHaTqndQ24kjcPLpTAovxREfRd7FjTr",
  "key26": "4Nd2mYi91q1zWMoTjeMiroSAPKLqrHrkGAnqpk5yWtYq7JrihDhBiEZyo4YPXkhm9vPxsUKFg1dipBXv5xcpHEbg",
  "key27": "2UsZmtw6tUvvrCcDPiD6M9ngMpmuDLtn3AQwMDGbvUzUmhMZPumc4qwKw3qRBwrdokDVy2yAAYvgghRAWWHyyVhG",
  "key28": "4GxsSQsXZhz8DFGw1RvBDQQ9q2DVyy2YsDk8Nbo553SudPxxbxWmNbk7Q7kVDJiJ3DnSue94FEWkzH377JPa4HSu",
  "key29": "27h8UnN4xtoe7T7yRK6RM6xxwmmiY3fSVa8Acy7yrrgnwDVz95zGAtfi69pGQaoyhbGUBGAdyS3rBNNsiLNn33u3",
  "key30": "622cb4mo4ZUbtia15uJVP18hWqBJ9okXzYpAhUfsAKGatEj43toB1T7RybPgp47R7MXCXXMiGHRJb3LozajSiEe1",
  "key31": "2bbwHPAaZ2vHnAaKkyA3QaKYwCpYcd3HNVjNaJ8Ao8Km3r6DadzVaqMy29DfSTKPHrMvL5Ae8mTL6k91uRN3fdFk",
  "key32": "3c4xpeVEFfADR1nKvQnLc9oFVX56abFvYq2qki7N8oBs7yrvNinwasNagef9wvX5QQFXcW91PCM4WW2wECgYzm9w",
  "key33": "23vXxpfPZYNptiCSRaRhZRcpR4KJ3DEhmBsHroc5SdCVxty3UXTYNDRsJqA2SZsXv1oNQB3yswzB3XVKeEA7JKGc",
  "key34": "5WpR3bHd5RhYZVbH9BZELuhbXRKJc3ma1jBcmHQLJJSsDqnswSBNwJX19s2A75ZTo8ZA2XhqNk1L5HHfHeST6Ydp",
  "key35": "ZLS2qoa6rF6J7NdDJ8snXj8q7YQrnrvczWQ2SfN34asaAvmuVWNNCmQeNYkLpiWnv3Sj7ysB55bDVRb1PP6uefz",
  "key36": "2kXjS3TBv28iSfMrfhU7EiW4Z7QHBHBpskRmfnqbhbNNxRWBsb2DsQ4BjADW8DZ9Q6VFaHJaxab3thRqeNvvQbSY",
  "key37": "3Y9JSELcttwaynHZ5dz2VD2AMu4sWHha9qX6rkX8H8WHQqUDRX1Xg18wQfmSTQBd8UxmfnfDxmsPVB4vfLKseUdg"
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
