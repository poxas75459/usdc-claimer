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
    "3b8YyFu97kNuYi3m2M18Kz9p26Pp4eNUtC6q6moj9D9d9KnwLyts5GaLSiaR3s86hpXVUvv6vL5MYvYoERLwWbQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J693pZf9Yt5GmY5xkaiNPTkmooL6Lp22nX9yHtyf6UTP6QQ3DGB6DniTezkg8r4NHHyL9kGQXsiS6BUieiqQi4g",
  "key1": "5GnB626fmMSkd7uNCispVCxPfSXkukBj3ga7Sm1mupBGNbUZTVTMKoBW3mYjQTq4CR1tTrQYEzY87h33jkLi7MrM",
  "key2": "49qgh44R1zwSmXLiSGeHqeWVEX6PDNiy2whM33t9Ty2oLT7kjFY3SqxuMJmPTe9gBxWKngTQ94ANpdhu9zBZie97",
  "key3": "4rsfrxaxNGp6zrbLC3Tti4w2mcZ2FX3XZYvunhDfmy2jdYFbhe9wBvVb4a6MjkKN3gG6PzKsQe2azR5qA9qcVvTP",
  "key4": "3zXg6z8CkYENLjBCCErDvTjXax4LGDGNt5E9HtrBHY3A3wWbzgg81KEy8ijrohvGiky4B9tNwAud3QcrLzXk7Yx9",
  "key5": "456GEztKNa6DA2oi8GdzG6ogmVygRUVkRyPYMF1646ih8Smo4h5H5ReHGyBm2CtV3Fc59wpYuUK1vR5TDAyXtMP4",
  "key6": "3bdWfCuA9A6wBCejn1hNZVUueTy8enmLthKsP8aQnazCQy68jYCVdCwbGgjvA3mzvqwSgcQaBJtyRLDRCqQzjSo4",
  "key7": "ZotNF1H9iobgJZ52g31BXTosHfBpQjHWxq73NHoYbvE5g73fCV3fFBbZspQHmus7zDHoy6JeNaqJaiscMSLR7Df",
  "key8": "2J1tR7CzMHcyLwh6zab93o9LYMjpEmmAkHGrLsx4gg9HxdJQjUFNeL731uewynvopM848ZoT7cCFgcJEdguWBAy6",
  "key9": "4tqKy4rP82tqTJ4rB8NZx1c4pNxhbqChBWrnpEdhGhgR3EjEyaHGzYWThHNUzEAutY7gPe9JpXpmSkcvNY6DXaro",
  "key10": "3ar9dkRgc7AHdz3U7fzaYuj2DAaqa8Af5CetF9jHK3HzEDLCxEMtz7UKyJAdXCNcoADbkN96EdmA5UzTnLRJMXU4",
  "key11": "53fPMi8DXe4tR1GsEVbjkYZo8sR2m4iB86473eKSx2DdGupjHsrgkY5q4anRP7VUdBNQUCVr5vmvCh6wp7dTE1Hk",
  "key12": "u5jrrcD9ZrXVKd5dNNDFNUYZiVZqTLKNuV6nG27xuzFK5rN8ncE85aRPqHC3E9Z1bx4KTkchbi3wm5Bc5yz6zLT",
  "key13": "3pynDb4z467PSvVeHGetvELkwXUreXNTxuHT3oCSEHphHayYV29FCp9NmoeMpkZTbRNMoT1afHj8JAswTWM8mbud",
  "key14": "TpMWTV4W8hjRMGFghDgJToZ24ngxTTKi1PqhduxYzxEdsqYXBnMqziaTuCZ8c1GvTrZxEuFH9T3QWYVAs4EZUk9",
  "key15": "2r38AALa1im34AyVFaXnQDUDgCgCDDFZxAhLbDzWgSruas5edeSqR7dtLyxfryf5PzjPgNfonQD2SAoVZCBo9tTd",
  "key16": "8cgRPdtoaqktfq4rkq8Cms6ZJQDSQ7DUGiJ7UUJYbAwR9p1G2ApShkujLYdAtoLfBmMKzc5wjwc7xosctYVWgec",
  "key17": "WYXSahpeTGYYASUaBxma6xfxWhCrAugRbURrKaJivrdb5WEQJiRHezBi6NpeGwuLFZ422qcNW4Ho2g12Z76TVY2",
  "key18": "fUipGbpNv6vT3bwt3x58kGr7FpEN54tamtNpPqFBHWGs9YVm54JKwrsAwmqKwrA3DD5JHaEeAjY4eo1WadUr4or",
  "key19": "3Byc1946wX4XNBS685AA2q7qQZq2QQcRAfPArHBsb1z5xC6aj57mAp7ycFr7rbT5e92Z5VnBi7jCVKszJb4jxTyx",
  "key20": "5SbyhiJLcrkaWUzVYCsNEPhgtdpKkyg6XHd6xtL9q3eDRjBy62NMQ9xw4oNQX65h3Ne6uTLUfeGUKFfHLHdcmqEt",
  "key21": "5PHVr9nCSPxvJLzKDmNanCHjRrBxGUzhcCuGoA5KHwqp71RiTrQGMr2RHzgWBujYhuq3fSyZDXhwDzm1PabtVMbs",
  "key22": "NEaCXqtk6PfuJ2hDAWJ57dpnLaFNJQ7eZXpJYRBrVfxKBsHb8N6ytyxA8ePwhGtDb8EckDfL4FNc65e6FPBq6LG",
  "key23": "2U4zUsAfBFBa6xzozZDiTYjbo8ZT91WakUJizUGYfBYy26whe5JFSSdCx88cb39Cm9njM8RGDcz5MuXByCH5JGEC",
  "key24": "3y6c48m22gmamWCNq4MJPUFhbwk4q4B3oX5sXNCTpJQNBiKPHWrnEQubrDgQqo6vYGPeNoPPY6G3L9egeFVSEEpf",
  "key25": "5dAr955NktWxJRz8awfd3dLKHQcE5owMbhzbbLKwMmpYmVe6baqqNPn46meRukbcRTShnTDTeHWCeVEYqCE2o3Wr",
  "key26": "3vjuHczDJB7n2CTqpaiRxrNo4qmDEeDiKecQgJ7vohaVh8odkARqA4E7jTDn3UsQjucE75VoMrJX2YYuqPhp12Bj",
  "key27": "62hpxFmHrH5Kfts7tjobBPdPSDHiAjcqEia4KTw9e2njSCDdP8dd439f9Mc1ZHT4SkDYpUm4qKZXJ1iHh7x6q4bR",
  "key28": "ycbnAdeE2kaCLXHyViGFxyTcoRuw1AguRTqnTcq432sKKUEu6wBT26YiQRg4Q3DHSwY7PKn7EgzD1Ea2EM8zyta",
  "key29": "5mYryYwaP5794rK5rBLTWLGCfr4f8riMZNQUB6QUzZ9jFig5PVT6hpJ3jGMEN8K8MhD5RzKo5767AnLddQJBgX4N",
  "key30": "3qHh8L1VThQvwZ3PXPeKHyxzzT7vFqW2uXa5od5RFpZ1rKiyYVfUiX5Ga4msCQMXwivd1HYBgszNK4mZtt7Kn8xy"
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
