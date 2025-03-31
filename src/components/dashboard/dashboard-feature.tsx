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
    "5CVY3a4mShck6UymdsiQphRMmA6V9fuJivfLjbfi6oXudnAwi3Hz5Z2UE92EjPpNAKeUvZ3ctuvMshxcTyLXHw46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcTWD6JN6M7CYuVygzH47sJen5LD8r5XPHD8vsGFJpUfijCYBaDiDvk9MJZSEUJTyANfTy2tXHv6TFqfva8ybJB",
  "key1": "2QvjP5FkrtRuNvyj9eBU2wUo8K9WSgwFeHva2W1EgVK3sJhieSmTu3iwo7iMFn1BABy9zigVXC49DTfmThqD3k1R",
  "key2": "2eBBwyGdJ5z61K7rANTHhxypZonDnHZY8MWCq8hzkvpmeyrUFUzo6m8ThbdZxHeiWuTQtn1rmY6MD6wcw4GoAtfZ",
  "key3": "2hvCZKFu5A7ZpLYTtsxrCNZMNmrRM8vk3Y1hG98gdgi28T5VMT9HZiJKuxcDXvnBZAFvw4c2NKQDygx6BqQpTfaF",
  "key4": "5zYrAChetXTPMNEbnjMbt9FX4gFUbuhQXNCAYL9kp5AqHenEST15vD5u7hGYTmu6qEGojMvWc9UVHa7maTTcETx3",
  "key5": "2Q3aNRJfcVecVhxfEM4f47vzrsiBAMr7rPhauQdxXG2DeUKKn4qSabCSBxjG7TqYfzwa1i5tELteXGK2GjAXRf6R",
  "key6": "3TGaMsU2TPJHZEHG55tz5bfVJKTy8dtrLfRaC8sWgUYAsPHrUtsbQA8b19B6ahxuAWa8qPDms5H2AT6Nn74deLgm",
  "key7": "XsNzLe1FfD3GXbmcWjCS43jENCQpqPo6MNnZHpqCYbvk9od3dnLawKwhxRvhr9Fj8K5ZAcBF45F6MzViXJKjVdY",
  "key8": "TfBK31CuVhGqHKESSVAK6quz9WidyRvzAQAgagFp3YS7xqY27WTd4UUJScRqckzWSvwjgchuaYSoCBTBTeDgCr2",
  "key9": "4ortHaoozsJUEqfDsVn4bJ5RH5YRSG4kkVZRJ8jvVawPxhXaw89Lcn6i5dEoZiRoDQNxeEGgQMoxLjriAwnSyXdG",
  "key10": "5ZyiQUdGkNjRtuFKUfXrnE2VX1EZkQCsWnVuu9d8pj23sBLzjuTVSHmGCDub96t9uTYswwHCGDwRXRXqKZyhcgMP",
  "key11": "2JXwpoLJYKAQiHxUr8bwSCQBA7Na5KrzLd6e8gF3KQSurB88gy6a5BRXqAau6iQvk588XqjEordPKGQ7PmmUWsNP",
  "key12": "4VJB7zmAuG9iTkZTutqGxSVXhX2WCXJSq6RDVJrJK4x8qnh79KLH9QeW3HHywptdP9vcw6Xzg6GaQdGDkNocNYst",
  "key13": "4tyLG7uxZk9bSkyCTnzttA1RHVt8f51TGez9SU8MUMu88bjkxqExnuBeu29KUs3bpou4F7RsJRGsBJQy7zjzGLC8",
  "key14": "Swu3kKNSvrS9LERamV5vst5G1vSqnYxi2TFsqDz8x5s1BzRXzXbwGhj5FUjRBsgs6JxwhP335KSq3Bo3J9wnbvx",
  "key15": "2P3Ky6ARX5pjV2oEZnBFNS3kHZ3PZrSMoU5KrG1uEAhAnyx2ADPSjo7JWcUKK7pD9aCu1dHBwqzb5rmWnRnfW8fn",
  "key16": "1HYy5RifcZq3AqFWm3zBwG74zZjdUXXAF8rErzStCL6bmWaKLZXBLK7UXDGnqRhLBssXeB3DozqYhrJ4PDoYJ6G",
  "key17": "51ut1e5SHNjVZxViprrUoDpn1AMJVXGCHxNDLF4h2ZWTGrq4ps2QBj6jS6Xe4PcXdiczZP9zSgBi2rPhPo5smuaW",
  "key18": "4TML5edW4hfNNybM6hZgqH9LzcMd81yAtDTDrPsGagFCtkRetMFvgGTJ8MwMDY7QpnFJS59dkKg9Qp9PZpBtmXzr",
  "key19": "GrSTKKVcGCAkyStnBPWoN2SaKpkFZQqZiXP8tmkVXfp3MoGNpx69tFVPKo5BwD576jpMrqv3HZgK4JcYCKkfDd4",
  "key20": "3Ngo3f4ghvwJcBYagLU2eAjhGhaHrKKuLcpYgDjPE5DWydtzfLmJgoSk6ydKjdBM9jCXe1QQBFjEp2FdkH6b8AJZ",
  "key21": "34TVTwq8xgZMLRsHswKe8o8BAUtdhWFw6zwJzXq4mCVZM4euB7oMffHKtrwitY19VwgbHM8CcdbXypuR3CahQSS4",
  "key22": "2ArtkJHmLhB3hNAxpGfFR3Z6VLXA37h8aB4y4uWgXAtvp9xzmv6JwXEKnbAJD3xVzM9r6QPGrxSgqr7WmDsQdEip",
  "key23": "4BTdK6acHNX4WrcUQB6Lr36Z6RfbjnEuXunARC5QfsDDBJvK7AuSsFiTjMpiPczB2yVph5Gc5fcq4pb6CF3QNsAS",
  "key24": "PuCB3Kc1YtH6ktg9WDNf897PCSxiCM9vju929MgsMncfzeNezShWhN8gLfKrWrwfXDJzjv1trKofR5f6uHGZVVD",
  "key25": "4AXWZk8hsoqPkzkM7dD4c4kvWuBeinkLGFdG9Lu8tPoPLk49uhC1VsTzHr3QUDziHfpKWkmoAJoWRxtkCDsg1mEW",
  "key26": "2kRoh2j4vq82VFjSwLeU4SKc1dhuy8MdVq1eH3dgXYMAemtM3KvEqvB9PRVhBBhcWcPNVTnWgoo3b15XeSzwp5Kt",
  "key27": "4Nobsf9Ksdbd8adLwtSMbcQed4vWmFGM6UbqoqD1G1ZF1VmWtDRFzkLUrCryYx4sm5UTmu1ppse8vwn6LwHbe7N6",
  "key28": "4hYo71PeDx2EPUtHvW2y1hBNdV1zddezcJbwfC1EjXbbrN1eZADAKKZQvrNCa9mnJLnXJiLLciYFQQrkCrDaS17V",
  "key29": "3hFMKPfZSVpGJ9wXLX3mtU7sjZ2ZgJu6Hs3hPRBcTFYGbioqYA4sPxCgzXHJmwU6Ea7oDGNQ7DGFmgoV2JM9sttZ",
  "key30": "3r2M7G3cTX5sL6GURjQkrgZqEz5EdZMwH2qwL31qzrLZS1hGreYc8DbRhncVxA2B9NF4QXTtJgPC4o8UhCbfUbiR",
  "key31": "5db16ycgh2r28VakM9BSu1FBGq8Yw756iNfy4e2YRkheEZjX5v3GCEFDvGJ85SFTu8ViT3AiuprhwyRSjV9b2hwo",
  "key32": "2MYjvi7cewQSWcV89Mfy4yQcjDZoSYZ9WsaduPKdvzUc8zV6wZGkN3NVRju4wykxbBTomqRtGeryTpFmTXzP6VUE",
  "key33": "373epXGBVQsVBKcgEqfPpJajXXZ2qT8KeMsyBDjnFfuL74AWGctKFagapv1ELDNnFYsFmaKU1Ja97toDuVsX26M5",
  "key34": "43nVnmdDLgHoWUxjEBiVtGE8sugtEkcGsubY7vNzcQLB2Pqp9LTGjmTiPYdk3mRP1TLhhaZBTnDaPsHADSuaBneR"
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
