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
    "3cfP8ctoJy4F1QPu2MMovpVKEJYgFDG3PEdAkAAJb38f4QRCx9eay7KBGddmVnfnBqTswX7hJ1NvtvFshRFrrUpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4rc5pnmza8GXvhD18Ce23GN8rRrLJU67mnp23jgMG5mstmTzAEzxLEs3CjGrWZgh7dkAw88sGVUzGFGM5j4j6u",
  "key1": "vtYRopah6L12xzo9THGJNLAa87WExASzHjFiF4rEB8vUnyS77D5jWfuZ76Gj9f8EMCN6Z4XRtEYE1useBvFYVvx",
  "key2": "jDzT9CMuHUznzN69LzDFMFyYLPeyvJ8sss2w32hwpcPHp7HXTGYs4j1GBGJPZhBqjbjLq62HGGr9ocwZcg91zwv",
  "key3": "3XFSj8v4AA3zmBva4EowrMs8Lsc8jrJ5FsiVRJsctZRxZYi6uHa4wKPtbdq79qfajLJUvS6pntuvJYQMGWzFXayp",
  "key4": "KwFKryfEpFzd7At4XfME2Qdg9QCkCCLvJrJTKMFRDEerrN9MNwgcWur8E9QJ9oXyj3VmY4NvRrTtjHRU6vJSWDL",
  "key5": "2cQfj8hnda7P1y9fYHRhgsUKVRD5E7XyDpTLDrWS8VhZvJtzGw5oyxuwbYeLuh8k9nMjzrKcWpdQfHJhkRNskuga",
  "key6": "2JTez7nMDd4eF1KNGD8XdeZiU9U1DQffwdXC79piRBjmzv42zLejad8K9qyrZd6K3S3Y2eiYB9ESQU7oQJxREhoY",
  "key7": "5zvzvSu5kpBazzRQc4LFR3ZFDJH3v89Eyadq3hxBNogWtXGfJedfXqmkbmtPZNnuiPhBsThuHeDHJRwRf1ubWPGH",
  "key8": "3e8cNbzL6uRDSKJQ2ivwj4zsHSbnCZFKQgirMw96mpy3dWN3oz3DydzqTgnVRaJFBmLbqTRTvTRq6KHXNi9Bw1PJ",
  "key9": "8V3Fest3briaGXqw948to7swinADN8PB85JojCXZ71EvmxxeeD3AfWd6nU3m686zUfmdXF6YFkS9eeRCFwcrYFu",
  "key10": "oGWVkDdnWS8NpTEWHjkww7bqvvAs4kemp9YdYtqcXtepkFk8dzt3DbFScNRgj4Sdv4TXWkWYLZGVrLuiq2Y5DDM",
  "key11": "3mu51t6dj1sfTyD67HS3GzTV95fxj9cnmGvzbnyniUK8JqxstM2j5rd6vbGnYmvL9k6HhJcLtY2F3D9K9R3y5z6c",
  "key12": "3WAToApv4G3FdfwtCuErXe9X4goVWB3SvRedBt4Rd52VDH4Fx8SNGW8k1snMF8Ftwp3zQrsS1ELgD7gCj2reqQsW",
  "key13": "2ViLvVqxD4X4ZanfMEATg4eP9q2VyKpDwzB6NVUXXkYAvzaz3CAUacwMuyUvvyG8SLzcXyDSApHxc9QusaNBU5Rc",
  "key14": "5Y8Y523iw3Q79fECPDjdu91DZs2a9bp1GuVPMDTfXLm2BKVCSgrwLSSgZ2bTYTcN4AxjkDZ3HVwCKpkB8UTeEsTG",
  "key15": "63pQFtUFFXr6Ec3JFkQbUbPbtoCPstx3f4WNJLzLZMhLcJgTFaEfivb5y8q56PeHnnyxt8HwuxFSTFqJfKSXRscJ",
  "key16": "RrMm9mw7y36sUQP4muesmeVxjArW2rDMKMjMejRbesFHEamoFvJsYMMPUnzdbhMYW4Fzvh7ePPijpFtDdzvmpvu",
  "key17": "QWhV5S48d2ZsKHRPTw7M84v6H5g4fLbWi9ApNLSW2eMnrizCR79ApQcMoFVBKTjGvABMDXmzdLWQat6iq6hHyYN",
  "key18": "4P95yp2ntszRSKHCpuv1Wy2R2EKai6ddSRNMdkhnuUTbiAZRaWP3ChttG3HYtfnxgehUKg3isVerciXjwxrV4grT",
  "key19": "Hy1MnPGeoGKE7duFkcvH8DUZfqnNy5n9sFuYVDnekBZYXF4LcX8wcceDWDszfb3mekqDafnPqV4M1p5UAB649gN",
  "key20": "5jv5bDdQ8qgeymjFMCRSBSf41eSd672qYBbq9WZjBCdmyahESmU5K4DN5Cs131jvBg8ZDTuYkvv7qb7KcKKJ6VVD",
  "key21": "62MRRzkqDc1hNCqAtYobkv31CneP1bTmiJ5T4D29PoyrqNFHNkjNr7AwcQZwq7KALTBqjfo31pKeW3VuBze1ThPo",
  "key22": "zkKW7BT6BaxrCNCPyfFaij8HXV8KAGsSsgm6Btgf1Mg9ApMmUdRut8JKVDPeNXqEebaM98xQuzfeoGgb8g77Smg",
  "key23": "E2u4bp798tjbZcR97rHxSmmfqKJZPHJ8ZcYJkVENv5spa57oC28FSW5GTwvH5BEtBa67MgcPGp7yBcPq2rduWfK",
  "key24": "3DUW95RkNuuF7pq9BdFReuQc74KaG1S61JHaNJdH6euqxE8ztrUap8MeDBNLzUoMFmkyDZXMEyrp8MNkfuiv5A4q",
  "key25": "4FR26M7H4GZttxUjToqFBYStKuE8nDENf5BJ9BzHanLSWskiKKVS6XNMqVhpbXWSmRodYygTdmsB4zbTgcUPzWeB",
  "key26": "5c1UPQSkrW7kyY3B6Fa6rwmEuF3rKn8GJC7b9gaUkMq7JiffzEE1ibFNFz7a9jpMuuVh3mMgkx5nEo5mBqRp9RdN",
  "key27": "5cdzDXGKfm5F34PSLy4Q73wFJF8SJKtrv2RtUJ5a7a7xanLxxsCsJnr5zVBQxNhDxCmjKD7VSTpTyY15BX9x4R1P"
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
