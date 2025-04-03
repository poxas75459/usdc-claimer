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
    "dnTQibGMtCcfJKTcjycScpUFQgNmXUckpaBT8ZbYncMUsCjgL8ZbbPTmyks5aiExKncQxkcxy8ao5mAHsLw9rW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3to357vranubJ1Vqd3LyaEUvKFwPFvbLpC3JVQtDrxgS8cKv3bCxcJ8zAsATJtRh1RQN8NycmbXqRCKCY8Cnfczs",
  "key1": "3L15bvMTZiwTjMMrhE3rkoYkkd1mFEjAdDJyQC57gLjJ7VLKEiC3LNrwtutH9YZX6LZjbNia4fbQ4kgysjrjksQW",
  "key2": "2Q3sipDHhJkPnvWUuZUe9PvX4KYdzNp58hAvzSsGiWMWy6up6bbQ5dfxroyVZjV7MyG9HHK1qk7bwndzmdb1NwiJ",
  "key3": "4Y3exEEbyeWE2CsvXT8N3dZ2Qu8RfnEobK9jWR4sEhNqWJMGPNq4wRacDVX68JXdKriSRLyTHE9EEAZRfyWfJkZz",
  "key4": "2EAcBXspvfVHTUNQpkHDMJTnTTmRi9nNNeUKHSHMgi6FoVghbQPE9QkUwmqbb2FnfSUtxvNaA8PQnMgaa6eFw5UV",
  "key5": "5AXsiNewFECHdnzVZ8dHdww87kA4FFJ3h47DJtUNrf4ZMGarZ8RCzZ8F6RvEqwq6Win478MeqwiW4YkHSJGiqEQS",
  "key6": "27QraaRL6aqSJWmJQTvBf6AxvLX1K6N3u1PWAVkz2XbcvW1wz6vKjoHdvUBigJVvjkdcyLJPKahgStQGc1VBwwGr",
  "key7": "3Rc7hkpD6jSf56dQuBm4gwNA4LdrzrfDAbwMA1YpAiVy2jLRtp1XTBUUjgrWid8sp6srajntF9scsqWhcvPyHB3m",
  "key8": "2VkZ5QdH8T47eqFAC6iXdWYVLmHHaBrVJMtRXkeDcePChDBDmBd5VcLK5q4sVJSiWC9sfW8xZdueg5cWtLqJDsRJ",
  "key9": "4F2nAq2nZfaDg2QPhSZzLH1M8KLE6F54bharAdimYHFDo1qjk7XakwsiMifCijcEZdfdpvx1xxUYvpLWmUDgcuDG",
  "key10": "4jfNqXW1ie4eyG3HU6MKsGDpFKsXe9qGra1kCNgiHu4YzCzGcRkuBjF5ccB9EBdia3gZQ8gohL7vcsGPo1aHdce1",
  "key11": "Y8KVYTyRtk4Zp2offSriSLXBA7ap8tvC4x8TuK5QYUoksTKVmmHcYi15aV4gXouTLkMtrEKvZEkm9UV35VdAe4T",
  "key12": "37s9XiJLL3armgi3gufbkK76NroYHJE22NrCYB6Tkxp1NpypXSFY5BRvusftMJCPA7fgcSPPdEjZ7piw1kSmfv8s",
  "key13": "28ryTyuxxBoCWTDVvBWV188WQD4UwMe7HMVPJSQqobMGc8d7fmVi1ugE7RMMp1eSmngtr3dHXbomdwtsGugqy9Q9",
  "key14": "2GVMjUhYd5Q25p874rR98Md5PQCW8m92wwLCAqkZAV5hfoJDAWVBdskhpP49SbJ9SqsfGwKb4QLnH5G2okR3V6Cf",
  "key15": "PSDcwrAAzthAPWdAYTQ2FdtBEzFicUHv13FVf9EBu9jzrZcd1Xj6gYGxqBKVP9NWX6J1Mqt7LjWhqQNkYek4QCj",
  "key16": "4pmr31oFmdgETUrfacMZDLQBhVK3YhK1n6kAUeWQ5HfzhpsHysZCa1AKVWLsxdMdspqDfdudm7vFpr1NeDAfhgcd",
  "key17": "4adtykMdSVXcqNyPpwsTnk3zZNUzA8LDpfmF4CAGLjAgwpkyXQtgJpbusLHJLzw8qUBjiJPkWBu7DdUWQRsGxSY7",
  "key18": "5AKxLWy6EfJHX8P2aXx6ZMtpPvLUMciDyurKJw1ZhhxvbGtXbi9wqsYqJdvkSDukNHBFZCKoVmzK6tSMchimureB",
  "key19": "2PaV1xYBTWANxPrd8dQNyp9aJ3mXSJvirQypULPiG3cYEjPJQTePnVicDiUfLZCDsZ8R67zFk25bQMcqK8h4icAC",
  "key20": "3qXAbrqwkKckdErxDWJCXMM7gqT7Myckg5F62Ai8pzPcGBP8LqrUju2YwffXB9VvKjiEXpps8Gpks2xFRzC9SmrE",
  "key21": "4sQm5ZPh8sxTgKK8ggu1jJQLk5XvoCg5S1SxFi1UGPTXW48bkPBZan57Y5iyRimRkQXPvXwdF4W7P7WnaaeDkg1",
  "key22": "2MW6ioxzzJ7WiCdQYnZpp59h6guSduw5rn5PauMwcdVAfUjQuE2y8mmogeucTUpjAkCCmxsAB7J9AXo1CktKZxX4",
  "key23": "2Jqrn1r2PmXtpXWtV3HUGjBZ6zvutw2TssC4DyRm5P7Yz3i5K1JiPtkyChbwNnodNHCtkcgfyccevDHdswdhTxfa",
  "key24": "uEdJaxGg28qYBrzXK7yoLAGGKftPtMvXCPFvPU8wipu3yugm9xWirSLdTBixkmnd8gdgp5cE82QeJSdGVFHXp28",
  "key25": "7Xby2vN3vr1YR5Z1qKHLrNo4XkVDPEm4mJJNDdvgocB1n4NCc1JjVX8pWt41Qr5xLaoBzf8KvRiFQ7Eb7oX4qkn",
  "key26": "2bjh3hbTimB6sdwXgbrFr6cmiU6jwzto3ozAnn2FRYZfU8uS4SegdTSitM3BDKiwBuFNbRzyKYsVH8MQsbDATnuZ",
  "key27": "5XvxKCCwN8uAjzrV1ex52DjX8uryxCZCwypH3w1J3LaDLBs5vCURnDCts4TDmfm3hbEgMDs65AXANLa2dBvhmNEm",
  "key28": "65woLB4DoULKwR6PgsLaZuTRrFcT7VYVge2WtrActJY3KXZ7K4WWNK1ydSFU7GSb7wJFGzBYrmM89Ms3CiN8yb8p",
  "key29": "E73jwj4pV7fez63CP8uwYv9BudmEFdY4zTLZhAgvYaFE3qA9K3WhUZ7bE6tSn8h2yZhCVDxb8z4ZDCGaQ9QBFRs",
  "key30": "rJrLBWtGsLKtkSsQSPV9fiJy5JKG2ZQkvYWAs3YyQw3SL4hKCx4R2J3dkpGdwgTHQULoK7C3SVpyxYcFoaq5L5M",
  "key31": "794hXVcDHPdtoPB88TafhKWJJfamJMyBfzTYywuxST7SuJ9DmGgQjzziaaC4U3mwf3bUHGidFZiEimjGcHWNvtT",
  "key32": "3N5vuCvAmDqYXDznjGBBYdnJmyVqpKLfPDUUX61AaH6pn97W9jecKeVpeXX26hEtAqEsHdnJ4G8sXFA4ie6p9NPJ",
  "key33": "wyUQ6sNGGCUqVP88QpZAjdcZy1QBP9wFaDadbr1YboLLxZeM7vE7683mtLhNVJZBMnttJbr9Zr8eJdwrCMJ46JP",
  "key34": "4d8BgzpkBMB7LqZWa4noCkpZhf6qfStJBSbSCY1BtRfgdKVeLn2bXXVaJHPd3nBfpAyox2jdufQLVTpBiPyM8RT7",
  "key35": "S5LX7HbwjNWpBrSS1qsvtrUo5gqLwNYXfJmG5cCjj9hunN1Jxg8HCpE4fnSvGQ2FjefDVtJqTi5q6ZMExFNZCtg",
  "key36": "4kEXEbuXBc9VbYiCcPREEHf1rbc97578Wq1C4tQF6HFC5i1UfhoH7Ho4uSYALynzAkZjTyfcncxkM6pEbW8Xdznp",
  "key37": "5GJRJHFTdzifedDrkcHddYu3enxdpf9x4HkdC4c361zpzhrQzU2qu7ZztsmeMKk5ZMN2wNQPqMA1coyRapJ4Yryp",
  "key38": "4pctKsSvCS2T9PEYRx6HZpirJVXuNsVsw8nsURmahmgd21mQo3PwLH2S8jQa1TUufdc4Cj2A5hGJyaTKG5Zeu8bu"
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
