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
    "47CYH4vUDuViR5JyQrtF7LMkS27FmiW7jec5dcncPimsyZXxHsaKKmYsne5trb9Lh2a6Ep1DxAsV6bGinMtvDNPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8yPgybNT2zXKrarqQsNkQNnqhNZFuqqr8JYfwRtP1MRqcvYMGsoYy5rM1TLPhHxz8eQLapaJh1au6dQUNuqFqj",
  "key1": "4ZNBs6ADJKGuExmajquzSkV8YZuc6WkcJAB2eRDyPwaA9TTuMf9B92umWeAyTDUsCRfd1g3HVDpTxQrHb8Qm6uTy",
  "key2": "26hufnWC2yAo5UwkvjRAunQei16QZYutSdqSTAjw6yyi4oEjTomNkurQZucsr7SWzKACCCrreU6dc3DVNkBEpjs3",
  "key3": "27wxUZrF971r9xKEmzWSUvLHghPFZC8nmQjbzq7YS6oFBQ4wqXDooKuRTFujRGLEiWjXvoKzEckRUiJ5fHJzi1v4",
  "key4": "5MtZzKoxaPChzUGRC3WEFgzqFxCaUFoWZQRKs9d3ituxfN5BLdiWtYV97tLNQnLA6pSf2AT9J6QGXz2iLZ6sKWL6",
  "key5": "4Xi1B5rrQZaCzHoAZWMup8Lj5WYHdcW8kcXgUeJ2Ao6VrxaMcUaCA6JLqTRFSBXpLtjHiJVPHeX1xxRSMNVczuzz",
  "key6": "YZSHfLazv9uzuSt742aakNkeDtawM3PyVvduwvQFzywEXiHbuk5jY4kRYAUWTuJwdaeYXFudXpFQoucgjjMkU3S",
  "key7": "41J6mUW7WczjD1vfc1492zGKdctDDJ7SMJvkjED6ZfJLfHkpdmecDY8YPwuMXwqdkuU35AQi31Q3kJL6BMbqf9k3",
  "key8": "52fRWQPnjFG3X7mzmPoVesg9pmpGTEXyxxpj8QGCj2feTAV7CwNNpFMeWN1HHBdpN76rfJ4wVkVW7kND992qaCwQ",
  "key9": "2C4SCLJvhevugDyG9VxwbDWNWirmgw7gtA7EsKLeWKPAFSj7GxDvaQzHqtaBkFKNMzNN355aCTCLQfgvXtian8oc",
  "key10": "viZDJDQAz3FFwhHm3oN1FeFGarrQ2DZ4oMiDUCQ3s6xEHYtMP8SzLYJL6MEno6q4UoSfYNHpq8PLbAdLYtcBfzu",
  "key11": "25KcLLtZsuQD5LooSPbBDfj8G86Y1ExVQqzLt6uoBneKCXkd4dZ4nTozwuhrRw8g2foskxroUmSWQUwbzN5brf5H",
  "key12": "61oAzA5e9vVu778t8KqU5Kc8eiLEqXvAjy1xveccAnzXCYpSZQCE6aeBx4cD4fx1cjM8B5amQ6x5jTDX7byGDyAE",
  "key13": "3zxujmt5CPQey28AcEnETgSC2RB9WLnoED84Va1BHLbj5o9LJ6hgRP8rbMeNUensSqwRCYJx7WCZLW7YmZZ5JjCr",
  "key14": "BjC98VybECJQxKd89kTgCdTxbJdWC1PW9t7LYTM8VLBCZsJiT9Q9Y6TEov2M2VgVutFtdbGUtgYDoFqh7xb3jRa",
  "key15": "3JmvkZq1K1xSbVpGZcE2gTnf9F7eyRzsmy5ia3CRKdNzsPQyxjjRXEYAzkb7kRgXFYd43v2eesp2Z5WHgkYS5hNo",
  "key16": "38ffwcHdvndGs8P5v9ohjqVd3x53qQDjqpx9RQSZiPu8Wib5agbjtXbv9Zmy56TRF2UxwEJzjMRQVvrKdWbjNVst",
  "key17": "2My7HwG7wKxAK7fmaEp5gbke6TJX5JXYn8enRetHrBfbGt5gvDQc93iQjT7MBMJLrbKju7UCyeUMPkwrAARnxZNG",
  "key18": "5giHcAd5uEhV4gW9XM6JUcLBoKi8QkaNpyyP2fFucfYSAPB5yhRfSAagBfMesEu414GnJ8gPnSVDXzdYmVzwtMC6",
  "key19": "5qXK378vMgbrkXtoiBXnDDnuyD4c6U8WHRpzqrpGoYJfMjSiviGMUwVftU8vYL7kT7Jn6SP5HjZrmzprUxynrJyB",
  "key20": "tiYoFeGzJuFubzSZLZWfRHQkWqbERhmXZBHZwVFwDhXAataxooLH2DPfhbweDWAyzia4L7j7mm2dZTLCuoVRVJQ",
  "key21": "2R65HgkWG34aov1uZjQ62cmptriMWmMfvFraYEsXg4ibJpJMXadFjAWP87m7Qe8NHXTF6RzQYnrvNyirzUR9whzo",
  "key22": "2g7Ym8gysSUrfQEWveezoaLwGguWwAjV1VBTQvBGtQ4Qc2D5qrSRNgZekfgcXyZGWQ1vMJ3fQtWe1iWPZfgSBJAU",
  "key23": "5wr1nmsBPkiB39B59HUA6YXwnZVeLyNRgu6tpJcMwwZmtVxxymyVqKiFrS6HwXf4XiGRxzJVF5Rqo6tagb3Dojxc",
  "key24": "V6F3U3pgZAKiwwRcQyHET4LcsKptx9Kyx4TJUNnzZcSLbx6ZKTTE41qVAZoHtuSzM8Bnh9XhX7o7MDFokutbUho",
  "key25": "2LSTRTcNiikKzcLcwGzsgt7Db5kvGCtHoAgUicXQEsDjaktzG3E56nWGS2m5tnzpc5C146ksCTEJPeKzoBiKdCzw",
  "key26": "4d5SSTxZB3TksJSa2eQNYhwRf62pbPvq89bP1yPyMGVFiFjcLuBBiXNVH7JogDxiyN9Mh9bnbWAvPQMv3fSBL7YA",
  "key27": "2tpZ6pcYwqB1fBuNrxQ7DwqWv6No6Um3k4NXUeoMPrv43vDGtTPdTABWW2wuyjJd7xL51ydMv3W6m4eNn76CfBeG",
  "key28": "QmZBDbtmAEpzkywvFnmgc1k8KofXxwbnEs3qiuRgAsmnNP3TeP4zaJF2Zk6kXk4guH7WAZfLpucCrMnaw51iJqV",
  "key29": "Sj8aYWa2vGtvGtGw1SjowKVaKwLpqs9QqXyhcwPhK4XmgTK8BZbaS1MBdRuYdWbcuNwX95S7Doj3egJcm9ngi6m",
  "key30": "4UfzV8XGWwWstbfcY8na2X3HTPyhXtXjqij8qppdERQET7mQwsnMcrWRUHj1ecyfp7kLkp3LXt7Aurv6cgwBkFrP",
  "key31": "5xNuX9m32LBhV9AzPAvPB3LsZiZFnd9ZLVYEk3qn5SXdzZ7fFPnEW4nktJ41fTr8AT5PY6Gt2MLVNnAatg9DMZom",
  "key32": "39jqR5UfevqMEGA9WncXWjfKDwtYrS9oBtnvk1TqXc5yXHsEav3geJLbg28Zuuc7iLqDcvvW96CfgXJdC4RiQgj6"
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
