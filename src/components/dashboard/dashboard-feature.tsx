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
    "4sa1bFzTh8vi96dbGuXvjH7WiFj77TJPTtQSRf6w5ePRpNFj9kndrFHkEsPD8SneVbT3j2DfNHfdeL1erNPCAgFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kCkhJjsracUt2nUPYCGawJd7RkVs4vJ6YvUgwrdBjN7PrFHk14EKh1dfkdNJpc8sMiRXmZHJmcfKTvtWJ9GNVt",
  "key1": "2GPTiqFw4ASuRa47yfiyk1MRXJ7TKEvsR7N7omwfwHHZehgNCronZzzQ62ovJr6AWs71uHMWJQFjKQkNHy8D5TGA",
  "key2": "b1F9cD7ygrkawXDhpe6bWTkTD4mTvRzmY8DyhPdzFS7GPjh3XyGu2i9wMdiyzVnbnJMSkq6CGAKSRtZY3uSBDyA",
  "key3": "2USVtjNhtz7hM9RR4pKQzExajJZgDB4PiFuM8Jv6SDZyQVkJnVMHdJPE9G4BnbLnv78kshF62hewfY8rtRqFGVzv",
  "key4": "2UyTzKhbs2xBAXUYty6SDnN8rH7hipH4xjGbr6S1BbDiELcvTjXrrSgKFE4WrnYu8NUMo7SxG278oNdNHduPgYbY",
  "key5": "24gybmEs6XmmrJh1hxX5YN7FhcZc6NdkZgGsaspi3iGCNBJGfJMNQKL7BnrLWNN42pMyMbLEhtJK9WN3yyGq6drU",
  "key6": "4zsVvj9nq65oA7q93YgAvFSSDZcNZiDPQvnuMupr1SLBVXNNJCCMRy4bc2mg544h6FHwU5bdPrpWi892rKfiRAXZ",
  "key7": "TTcfBSzkDeMo6kmFt51MzZdCxSjgUTvVve5aaj2GkRoHMiXp2WXaYyVVj5Lrq7eR3nGv4oziGPWuH8AjANEZWTj",
  "key8": "2sDhobkes44sKMPn6eN8txfxqqcjgH77Uq1EXh1bVXnd4TixM44iw2s9ENcG1iVqvZDf9iCoJbrjxHSLFpSXck7Y",
  "key9": "4H4J1NQNGVYXvdZaHAinkQVCcDXJLJ8SuDDzCwbCHchajnE4vMVBeM81jjdXn7LK6o8eNniCgQCqKBSBzJCtSKWX",
  "key10": "61o6YBZdx8iEE8JdTGHqmnS9uZSHAvRhgLe4TjMkQkXin3uUuv1nkmh3Eg7uD9juBASnE9vznpZWMP7aypqotEAM",
  "key11": "Z6kWEisZ9WEuYcFLjB2TQjngA6dfK4nRLVNsu64Zi5dzMrf8jahYpZwB3aYXRTnEwPuSGjFJCtoASYGXMhGgewy",
  "key12": "3A8WNbxzzESCNHEBGn5iLQAddyVsqqb4VYcmfgjSD5MqiheDJ9i9nFW3v3wi6cJQkVBipmrEvusmTXGaXrojGzU7",
  "key13": "3Ro1bDx6rqCPPXzfU95JNyHuoymR4zQrjaCkQswdwQR4vLXS67oHLyEUwot7JQB4NeNTd75M9dgeDS4Kett2A2NZ",
  "key14": "2MMX3fNGNBns3Cj8gUGGizGbwb2HrazHnJ4997SXCHD94D7Zu7VJ22v7SsrPitbHy1wAhx4VuJ5rDxR7cUaNREof",
  "key15": "1LvE4yBES9tYXDWJnxM6kzVmPPCBg87R56L4EiHysP9MjYo9iKp5stnCWCmVGQZjNb7FAJjyzjzGFsrp3bDs1nn",
  "key16": "bS2uQKpveXw93jeeY1VuZFm2BtsnCDHziq2hmSb4XGSgB64bKpw6FmBmqKH7AoHj5rJqxsqmvWc7EwshRNh8MMB",
  "key17": "5GffSFREheQonDXpmDNBb4ESWunHi11pZ2ZvPkwhs357guBtoyeqxqa2TjWxGvumHPxdUbB1NbCwSDUBpLgZ1NC1",
  "key18": "52PG6Y1adbFCBAFVGUNo42DNLSpafUMtViAzLcNHPUXfX6SZx5qgovmE8rjLRzct8bhKrmZV3evL1QLRoHBjNV6p",
  "key19": "5egEGJXRGRqKwmVgtXuBP31Xfr7rP3dk1zVWDTubPEwd1HQPpz2wVi5ywofKAhRN4mCeHyVmQQJLJQhJxfVyuRzr",
  "key20": "5Rx2f2NPRPJeTdxbVgCm6iAhgJ3wPXaG39rURrNCU8Fx4FRKsHtp6kFU6mXSrRMoNBDv13CE2tUUV3fw5SJ4vQCu",
  "key21": "2BvMwaow48KjmrPMCCsX92HjaNyUNZkq7qK1D2yTSZ4fuQWbyxeHjBnRqDYLhon4kAHQDhj2917DecburPgQhc2H",
  "key22": "5KgPxsd7sS3Q58QGWiTNubKEbUtQHMBWPnWfUjdivzdoSN7Y4cUt2n7ofL1exYdF9KUZdUAUFvmzzuNe6EkXwFwt",
  "key23": "2iwY1t85xr5wHbHM3zBRxe2p1LQKpfe5Yt9S3Tkd7XiqqkS7MUZ3MwKTS8R6FRibs8ae2t31zsm4FfxR3esHqo6R",
  "key24": "51omwh3svT5RdfMLrxnJKeVbi3bhh5f1QnM7omehseTmanGWHBp2sejwzLkfTmCLe1ntpFLLpxMFjumiYM88Wu2a"
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
