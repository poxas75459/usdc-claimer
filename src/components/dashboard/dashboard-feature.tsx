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
    "4QH2ta87S27vvypz5XVo7os5oAFdhWw6pxAVQrWSB5QVg4g8a3yUAJ6R2rfiRKGV8LYgDUqpuBQd77hZp7NRq2Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kHcy7qY3Exff15y62LiVx9XEqS3Gh7SXZPZdbzEfNSCsdL3UujarsDGh6aChtbudxzjG5BpvaQieesB2FmNSkx",
  "key1": "4ArLXuwdTJ9bLJtGSBima6kZd9iCzsbjyzhTbN7sWQ5MXA96N8fMEbXEmMUXHotRTbRWc2GJCPszMMFnkWfRj2Kk",
  "key2": "NcVBYtZ1XA5W1G6k4XE4mbx8owWZ2oHWLanDZX4qws8Q1qpeMdyjF7dgw2hNLzRQaDXAQjoybiS9gYqMYN8if6G",
  "key3": "5W9TuhgMCiBRQ999i2qf6MQV1UidXXD8Ru9fVK3ydnmwFdSuHMmW3rTeVCv7amA9y3BL6v4W7LxvucsfAUGSkikK",
  "key4": "4Cd3HoVQPXa9eRLSEDacv4ij1cusUVmMGS7cy7q9wDjtXZX4eC7Z424W36NqxxPG8DQi74qTzhop44jiR6vdZSAH",
  "key5": "4uSbJ35LeeYoXKY7y1bpWk1rRXudV8jhwNZhtnorDE9TcV4cRL26WpryQdthAmtrzuv6reufKRYezzkUHDjSwNs7",
  "key6": "5QRB5quBky6J85NjA2yyhXMyAngVcCUiNVr8M3mfZHq7eBG6Z21pBP7aTSYyBAJQEoPw9rmuLDCXVZsuSzqe6va1",
  "key7": "3Tmtva2ExGcCB7BaiFA2HPUjxmykiX3QEcm2bNcbaqFx4RYK7J9waKEAig7NeX9U984DoVMvHGFC6jR7c1EGf8ce",
  "key8": "4mXSgybhuv9ZfUREotNnxhcjFjdkVQjUiBCjBgxqwt2d267jzs2RS9qMfZ77MZwGonq7Y7Y1tUsJasbg17CdcU9H",
  "key9": "5cRSbhwGiQaHPjKfW1NbytNM5qtMckxh9vvZwZ1vN6dPVcfVZgwTBWSvbYZ8kKYz6vWQZb4hQ1FnAqywWPD3LaX5",
  "key10": "5ybhC4ZzjfQTR1xbeqAwJno1rAuTkJpPwiWoYyaJEDPXisp4GJqDWPhJKXbrGyZVYRVddabBGsJVz32ixAUkBC11",
  "key11": "3wsyqvhjovjDKiiFu7AuKhKs21AdULbBxtAWscZ1fd3bPHNq2pXubNE1expexnLo4pG8y29VYL1dtQi5EwE9vs1v",
  "key12": "dLXNz8Qb2qWNM81PdXVnDKJqGSgiLSqhHJ1BDbm5QDGhinRFLud9vpCtrCW5cuCXfwsJz2rVdtykXm6nHc2DBs2",
  "key13": "3UVz7wm8aKaSWW2xpoapqov947EkGj5voiGsPzNx9AU7K5cBm3npxss2fTQfF9RnAGYoTPyRrFgfmonJzZ23JExX",
  "key14": "27xbdDYj9V4wbPZVYo2B4EeLN7nfrVvLXBryEGVFaW31Z4r3phmesopq5J677JXehasS3ggU8hVMNikpAPN2fqqK",
  "key15": "568DbPB2qfHcHY6YQ1KhxziE1xZuud2VZMT87mKrkLTq5owBPzSuo9bBxYGW69ZCompys14JkzDRKcHC675tYTg9",
  "key16": "5ZYAtEpyCdR6ntkZtbcadJ5k255Ezx3PfuADkzh9yfMfswbiATLPzmrvnW3ENBPjsa7hbW5w9axirNmrrjKr2cVB",
  "key17": "4ocvXxqbzhL1eLQbTeFJkjwwrNbMfMtLRojwbQs9e974mYoYLByvjm9FiVgWMAQx2vaCHJ1pnRj7eL579Bji2Lkx",
  "key18": "3dWCDMYC4EgVPshYGy7RdVSHzcjcJjYpiaPBWeXwYvfWEAdvqQgcEpggvmhjaWwo3XTge7uKNX9ECuKjyqVztapd",
  "key19": "2tunZ7XyLGRxsC5EJoJow7QQLxdVcEeVsMmgDCqG445wPub8Wwsu5rKdGeGrykcrXzwgK2bwfpWkyTGaCXczha4v",
  "key20": "4ryzi2Nb9466zCfYR791sSZN5ikSN1kYCFa85bHcMpoEidRmNh7kGnmw5xzaDvJZwd8WGzBWNihtdEcPnzeH1Ti1",
  "key21": "4se5Wg8avovj6CaLy2EfLcAFpjd8Ky9wpaJHqFJYiQDkXyQwKLwv9PN8NnEBdgJA3qn8UTkWNM8SiiZ6PbTfE5Le",
  "key22": "3HvdoRA4MDwmqsNtgGB3L9fFQZwyYv4YvohM2f5DsFtgygQrmDFrhipqcXjbku36QRmdRUVBDqVGCUV6xwN4aZmv",
  "key23": "65sRoktEjDqbfZmtowzCDVfW3m1TgaY28sr79GyV2koJwhmkmjQC3SxoSGLVxgpNwGUXUXwvh6xM3Rh2oS25FHNm",
  "key24": "3AgrwNjirQNy2G1H4USguWifkFXbCoksjhmXHMKB8uhrHQZfy3vZ27MQM5BHb9dRL8ef1unC14eHw3SMTtaLLCJt",
  "key25": "3MeCvxNhG9gfGQWZgxqWezgANhJ1SukUmNuqZN4YqHhrDQ9bdSBaY5pR9f3mET7KdELW5iiqAmCq4df6YYU9xoW7",
  "key26": "5TgyRVmUBYs1KdXv6poNSX9ECyFgmeUJUcfmP2hbCFypTvFGR56E6QtK6xu9HvqgsY8qgFT44XP4CGGh3xzjgyay",
  "key27": "2CQRjxNncts55jVjWQGaf3GA4UxPSD5Vygg1Xhce6Vb2prTT9UECu619RY6tat2sSZHDf8sCXPAEsZZgWFnE9WMQ",
  "key28": "4nynLLi9AAGjQBC3YeAXUzPiNdBwW3AvpDaQaxaBCEZjPb56XQuTYvjcudJgLTpvM7LKJu3i1hqdsu4HxqgbzrUr",
  "key29": "5bz1Dt99LmxCCznrPLcXBMhZFQHD8BeKb8gLjJmbWdAzZD8HxNGYHg1BseNy4UCd8V7yzmcKk9XK8Cs5bkyHWLWA",
  "key30": "5QyKKpnaKWoiwH33hgd1wpgfnfvLfUN8E7oj72omPcfA9N91F1oikjmhPfRbSpFwGe8kFdt3QVw8F82EhBA6JJtX",
  "key31": "WKFgWc2P5HX68fXn9pe5S6vsGMUGtLkfZ7W7KV828dTYBr24Dzs9SEtBtQHPymc2FisrFLMAJwCgeHeNoa3EaDP",
  "key32": "1B1tkqDnzSqDoZtZDBS6pWGtY8kEUhjhNRH8CQe43MQddymGd5D1SYNcdt97o5upKxjo6evfqKhujurwbkjctP3",
  "key33": "4KveZmVdUkiAYT1Qduf5d2AgcKFCnpXiNuuC6YYLiSUfKjg158mESn1YoYB5whx4CUnyA8nSMFrXUj5DD93C6C36",
  "key34": "5E2PprC3SwHLFGxH4fJRT6VaePDZ9P2wqMqgw6KnxvHLdG6JcMquhroJrCyASTJxqBY5hiW5nWuz7ap7RZvQxcUj",
  "key35": "5fHfAW1zQkVnzsbCSFEVCQbCDsXAVXW1XXRCjSLzWN7EHNy7ABc7jAqE5rHUdVHE84fcVLHCD1p6WLWmfLuNokB7",
  "key36": "5Utac7Kf2Ft6M6EnoNg2wTeEQ2EwSBJLUyc2JNjCdcx4k6a7vF4KhA3GZbSaSbADMAJPJPRJv7SVFy1euq2okJdG"
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
