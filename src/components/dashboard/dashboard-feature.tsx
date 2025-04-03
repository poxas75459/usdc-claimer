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
    "4WoJuQzy72VL6CLjeWbNrJYaBGzRrLfbRHf8TV8UDdFexXcrjeq6GZdKEgsYF5Zc9NMsRUqPBP1uLj8bbGfpW9Uu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22UstshKVwAfLJ4siEFAAGUbqF5m6fyyBtkENmttTFyiDSdF8LfsgxoxHrj6utcTXfP1Lc3s1GjX199sVrjMjR9u",
  "key1": "4RhjfXJh35QufEKdeVHTq6fGh5f3BMZT9Z8d1ad5Q2G52NxKuHNDi2fZvEGbuGkHEa3GNG3xw5QDqzAokgdeit51",
  "key2": "2Fopqm36gabr8BRZ8WrAY1GXY5e4J7uYnn47ggAAr42aRc8qqhxi5Vxn8wSdDt97Hw19KqnXNd1xRqVify9daVX4",
  "key3": "3K7S65Evjjj4dqiheWR9ctp9ni8qjZbBhMGsQbzSGfbHCeBSFF9tuiHb6BuxFxGT8swC11kYdnyhABaxivkf561W",
  "key4": "4Q4dLBP2oD1njTpiqpoKTrLjPywuKtJSqB5Vt2qKpJpEUqvmZvcR25kq3i3ojZ4RwpvXSCBkvs1PBbdgDGze1w8Y",
  "key5": "5iZYmcTj5nKFLKKusQ4RbopfVCWRvVErfXLLfsSbFckvcujxodqtdNZ7Gy67423vyH3zqcdgnEkX48u7nHgw1s3F",
  "key6": "485H9oBpNa3URV8PZhtuXgS4VxoCvnUfACGejqeGsQzXnarCzNj3kBsrHDprWtQgfEpZsCRB2rBoXhusopNEsxdH",
  "key7": "56hQX8BzaEDzbtpQrsAm2jCC5YVDqs8Z2XhfFSQpDtsQiZhEGt5K2tNsp1c2MJRM5tL8qzFGKbBGfDYbkyiidQ26",
  "key8": "4ewiwYsj7jnQYt5gfvwFHEiCUEimY6DbEDaXvqTfzctoRvkfG6yn5MkXXNCj7Fht3U7FYrq98voAtyZ9BQrrhbyp",
  "key9": "3HaX4ujLAMmWDtcrWvtTzUL1U6WX2jF8PgyiBztTT1sJyKqkNiwJYDkV8x31Zamdo8UbpNWCNwNtqzui6vz1xqER",
  "key10": "UyegEujGnYuj9gxPxugytP3ShKgRjJxjcigZm5mtmcy8iPqXTTYX2nPErBJGNMF9SbWJUSwaseEU5bDToK5vuWS",
  "key11": "3fVyY4BzKFRnb3VHR3rMCxE27iAYvAWYrw2ABQTTwuaejtM7WcGVraW9E1jX8MQnmkpE7msXxXrLPAcxr4oZwBbR",
  "key12": "44ngdsCTvpaza1JR2DNtUr8SrUrDxAXkCb8PfVYsv5jQKdTNvaybnANFvjezG4HmgaMqgyZJyRRgST1ho9KFAAF6",
  "key13": "5zGFy5c7LFYL9TcifB1Snc5ugyXtqS2eZN5Xx7wzKPHudqATzBEgNStuJTGiVRbWC6j6TLjnENpYwBBTygG4pk2J",
  "key14": "2EnSSEXq4B8r53voespY5HHhHYxWqQvboaZm51ukzE1ZYcmhJe2kUWEuHV4k3oZAtYUCnpUFH8KGRN4oVjpnFp9f",
  "key15": "iHSRQbTSaASQaqrCbjQkLq7oz1qXvWdpyAaHKzYeW26qVK8bw3Dxs3mA2sqq7DXTF57QNGEqT75jduni8jRePdD",
  "key16": "4jW3Xm1E1w5PjKFdkrVN3nWNNsssuPQJUGqV6kavcN3vw4THvYtkpknoJCVzWYshNtd2y683wGm6b1PEfM58zRUz",
  "key17": "383jBvqr3f4nx3FUC3SE7zkwPa8f6nXjK3t6WjwVrVVaauXJkDamA3AXmbhKpb5x9XmhvMeTngkoLW8PZVEbYbUR",
  "key18": "64ZQrM7zxCtorKrUDpuFH1r9cs1PEU57mWqBL11gZMfaiocbEYitvYxAEb2oxyf92zCbDR6FTKWoTPdDqmN1Ujm",
  "key19": "5juSGqQMz5uvF4hzkqoxnsZypTdJCSD3G9djn6QJL88YMfzj3gfCsmHjDKZv7NMt5HLUybj4bJWPhvWaCjGF9UBw",
  "key20": "q7ykwrNRPzRzfYsC8YRo79E2ZLNV2pb7mx9et7vHBaC7dhP7gy4iUpbspFmPgXMz8eGjwf1dzsq9igqCps1Tx6M",
  "key21": "2eFk77JCV5QbeXUpQkQYJkDGQNgQ659CwDwPdBXgo4SKy7HFtJA7bXPnoV59y8WWTpnvwe1LLc1UuMvegJpK2Aqz",
  "key22": "2qAMkYUZ6eJ31cguS1KfcU6ArDXtoPSgUK8mL3xvFgL4urN1KMhAy6u2MdMtivarWaTA29J4w2mEpsFx5M3LFGtt",
  "key23": "5MdyyYkdjZ6fn7GJws2jZDkAA8z7KWjHQT2xnbc6DrWXhkGUVgnkUfvQsyhiRh52gdxEiTDENiMEZDAFiWhi1nwe",
  "key24": "5NLuJsywKEsKBXHG5iUcxvB7JcBAJZ6t6BovNrJKYuLnenCcERmPnzEwgPbCxeyuPkkxNEUgjsSC7AGYkZgsHoW2",
  "key25": "4rkFhfApHt2MBzLwPKBbXm9VBRVWJVNSeX7BT1yDbGJssYCJ1RaFPWUyhW1Aed9dq5MFoVcFRz6Sa8zFrZCMUs4",
  "key26": "aXg66c5vjB38bYpNtpyYQzFjUx6kN9NiPAyPAL9N1hwRGBshK5WzAT9un2Lf6DnMG6H18nGRrGoowVBP28Ro2aB",
  "key27": "2j1vFfyFXmbTu3n5WzokuNw37SRRPHF6m2miW3ZxnLUrTHdMjX9KRi2fdDih1ifZnCKe4ofTix9dWny73LfUfN6q",
  "key28": "34jMLHkS9492W2qqDmg78ne7mHGXXz6czEksyHaXkbRJr7h2jhfkscYtioNbrPLmiV2PUqnyC6SxW1G5WbTEERBm",
  "key29": "5drsABdVokHQPVtMDTubUR44DHVRcbZm5sUC6GKvFxW5CCcRCvY2GWqXYVtAucqRPSfZzrzHwvYxvzhwBxy5Hwjt"
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
