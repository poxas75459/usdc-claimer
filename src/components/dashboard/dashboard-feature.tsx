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
    "A5U3LdHSupVbQ7CNCNt4i45rtQj6Hbm34vhbC2Yvn3AtB1ZdmjUHbovgCL5bQW8QwaqepTX7goVN5PGfT4Wf6Vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsT8XbQvynQAWvoQ6vVxvBnqUKhc4um4ELAHiFfAoSbSHmvyMr8fRX9FYfbJiuuBJdhPvaUucPP25YBSBxZTZ9A",
  "key1": "4ccbmMXgkmC7NvmtFTstor6MaibnYB3UwBZQzzvdaqXtnv4qPU4yKjmhnHApwWdPoGyFxij9Jnpp2mcJN7NUYzhm",
  "key2": "QzSgDSbzKQ46QDFwU5q3LPauoHMv3Wuq9ABAnS7Pd1KYD918pagposnqR1WrmLvFXH8foxiM3ydXsqUVE7SostQ",
  "key3": "5L2YyDLUFpvF1SF6eqWsBaVxxKEzu5z1vTC1YC13amgaDwTg5DMvNKCWFsYUWG4pieT2Dkxq7CCViPZ8w6zP3E2z",
  "key4": "cbojePhHR1U5VZbH3b3YhEZMTdNWcVmAJ63CSUDAG1QYNs3JsVeVGgtixWh2RUwoJXQ4b42kho4KC8Qrxtcrv6Q",
  "key5": "5YmYcvxMHL3MF5kofsHjDryY5Vn87PgkbEKAAe8utDsxDzMg7T3HqJMVzx8df4WEzVCB7KydbAmU9P8u8qEVb8BX",
  "key6": "3z5viVsoMzWbwR4RpR441k6n7f7B8uw7AyJtsaPaBAf8SP9RkcRZiUzZ6JjB19raHT7PRoaXBEVD6x8qHfAVR8vU",
  "key7": "5eTp4oTisYWEzBJHoTkHuDNM5zdoyix8urXccFwmzDLgLJkdXqHk6t89kjssrhMHAYr64fa76NV78VTuQmY9Lowk",
  "key8": "3z7iYjxGULizy7MGbEXpLEwspCZ8aFeVhMMa8pbJumbAFQ9YmnobXrV5JHrudWhV9cd3E4279PAsdBQSr63y5rFt",
  "key9": "3JjLJUzTYz8tXiSo5GVSvJJ1yHb4Q8Ynd2uNDD9CugudiYpGevEHCCdafiyiWKacQJHgbxoFWZgkxacL79twdapv",
  "key10": "4QUj8soGSU8doztPkNbHZJB1xm9FqiW5QyPA1w78zLVrMtEyRrPwQrj56nFyiwkAcvL3W6YionPsW8nDgWZeskbU",
  "key11": "63EWevzAwbSgbKGQBUkdHD62VGHHZWhdqHoxRgwLRMbvMbCDq3L7J7XHDnDHiRAq7tGqTvdL5xc48Rj3emHGQSJj",
  "key12": "3dhBpKR9ZwiHUb3EGzUEz2qBqXQMcq1rZSffVZZQQ24QrkPYtxUWu4C58fAdq6yg583MJB3STpaXBCxWBXiRsqsW",
  "key13": "3zGjB35uCELAsScAiNq33wASfyQExP5gNDfHKwZ5opaGdkNfdkemKHysbpX8xQs7BbaVPWAoX5WPnkA7BoKmiAwv",
  "key14": "2JxoSeeiTsoikMHtAJUs7L6BypHUtdayhNvsV8YdZSVUxkeXLjmh7Fr6nZWoz5igL4ZYKTJHx6CkZe5NEWafYJZ3",
  "key15": "4h942DEbjPnF7WpPwWTAfDDVZuNn6YM9AjaGqHXykqmJQYuADk6hFsTA81KwcEAwnB9ujqHWheR56aZZsZAsbkGM",
  "key16": "34KjjNFmBQS8Txq63SwzgrQYxCLZSaatzboTM2s3oiUDi47nGqMgBZko4BbApeznVuX7sPiXMFswZHNEi4r9X4tT",
  "key17": "CJugztKs9UDTeaAiiLSPuWkrJLwb3oK33jJENrtzKsmdjQ58vAZXyU56JQPY5buE1hbuGjkzH8w4gKgDswtEs6N",
  "key18": "4UMbLwPBTB6De9LdWFE26B41eTf7F79deFxmq7sCt72sepyEx1FZY1oyG6mVrQjziLpTmxLUHauEMZS6eVAReCUg",
  "key19": "5L6WeYAynPbJquJ5W79DSUqxEFggEQmE1mLPAPhKGmsMK9k4QZM4BFbxPP9x2KvJLHuhVF6RGpAT7Aq3EYhgB1PJ",
  "key20": "3hckqCEx6zV59gZT5WeHep4r5NBvJ1coZWRvszYrpcuygPuuUPSxGBLuYUtK9XYEVrK87y7uk43ZmZCq6D53Gc9S",
  "key21": "4mMc4uLM7DnhGmFzxqkRwGcdg6tga9fXD77cpNyn34Fdb5VEHcrKDtGbri74KDWGYV2dwDuzNFKaKux5mEKQWyL8",
  "key22": "23AVcUJ5KkFLEH9vyHo5MGkr1to16w79K5D6bzVKwqDijuGByASsLquhKnHyGCemGX2tzE1KfKAQo4QPtKyTV9LQ",
  "key23": "4CM1vUX7g2ePon7D4K29u5U79LAhD2TQU9kUQ1JVUBkhjxCARZ4FmJ9DcUBwy8tAK4oNcfc4jQnT7V9DmGf9w7Hj",
  "key24": "5qZahV8Y1rSjJEeY4zX2Z2mK5LyC5TzPCVfzQFo4UoHxTWYBY3jn4rKv93FptemniwWtb6WLye56zpZWnAtNauAS",
  "key25": "5u91beg3bLgRYhsG5oM2S51GwXwnpmyQKhtGwHTXNKyMkChn2csJbDj6Yiq2dYZjxTbfyVsfByAmXTg8rC9CeP17",
  "key26": "2AzzdwFWioSvcf5hzhDsbUhua45a3LyNPkKKSYpUnNpbDJJ2rhVv7NZkk4ZFcULwxSCxxBAGC5yiDx8NFKV5S93P",
  "key27": "2KrZrNCFUFizVPEo9KHPLjW64bJNauAnurCoipTNuvnWqcstCHYs2RQ5mbAPshPgnJX4rYz2TEoEeVdi5gRWYpBo"
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
