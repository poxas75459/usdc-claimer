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
    "3uSnKhMwxHpsTZKuZLjA7wuGh191gjfNYwtdPSr2WJxHVWmiNtPMRNoMa92rVk1hy7Qm5rCqYAj4KsQ9ZKN8Bek7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMHf2vRgrd7Yk9yZLgmreKFZoM5UQGkyjVH5V7b7k7cXjdBXJTyUVzn1VEhaztkLUjT3sPEtvZi7YjG4vmdcxDj",
  "key1": "2xxVmTVVNCBMtdy4HNywL9TokjZB6vAkUwxxZT3V2jzmF21EVRzQ3ET8sdg42Z2s5yUgpMesoo5cb9GVYHzzVW7i",
  "key2": "3cwvKQWDo3zdz5cg6bcwfr1hctEuJvxGkKwrbn9GU1Yvat912XgoL2SPiiBsnPY2BiA55W7Pt6N2QcXG8T1BFAip",
  "key3": "3HUMSVz8ECgUwuBm4NrZGsjbQgr6pc5tQvmRsL1CExmHmZrzXQDWXGrVQW1SoRNPXV12T7VVkfGS3DLFje3P49Cm",
  "key4": "H424H6Z5gbefKVduh73nLDhFSzzfXWJn52wTRuPado7M9AHqgVNrZSsFJ9qhe5RL7QEeVcgtvY7vzoSqidmzHaP",
  "key5": "3Fvo5tHiDxPZcahDC5W1pXUaLAbFpUANVGRiavRH3UxNrAmTTvMWvVgzEDtMFTR55gv7ZFM5VABdoXe7tuRnzu6W",
  "key6": "3tZPp2mS1rMxuKJ3jcAhDGGXZ5dM9cC4BuncprpLjxsh6ojGHa8Jmhj7uJqmE9L6ZCNENABiyGdS4Xf1mBzyqoRf",
  "key7": "MZn6XT3BgpdmH46pYREi6G9d8ZMANiHmhHC5Nk3ArhBvWDeto5Q1Sh4AV18VLa3wDxrEJ87EiMf25eetHX136SK",
  "key8": "2j26WqxiHYFqmYp3cu3gsbMY9eeyovRcAq6Z178X3iZPRM9Np2GpizLGk6gWDMMKuf75QycgKWrR76AD46xandV4",
  "key9": "3qAXLVYnqewV1xuXpaBdc58bjvsg1VJoA7dUjD22zknFkePGfYasA9atebCZbjhJYjhe7V6Up7ZdCbjs7mFfqVci",
  "key10": "3SeJ8Cqg41EXEF1UJMzSHHT2qyA9CMfVtUjd3FwBza4aGCrjEz6nvmfcMs2eforZZCwzWUcYS1WyNoJBq4EtpRJw",
  "key11": "5K5caPtv9nqjWPCQw4omL6hueh7WPBw75RTicRTKreXRZ6mEHPU8vBPz5oa18mdxoyYLWSeEe2qiqy7Qvu36QysZ",
  "key12": "2qztxD4DYUmu3q7CbjYz5U8oSLsgiNvNrBFytHtEY6j6pUZKWuRbPhT8UHZYxuSQo5VQF1dMKMi59WdJmmqmNYSM",
  "key13": "4r9PvTWEJJFV6wgRGXLPXgKSCXhLgaqaS2N7qRPk4mwJ2bCTUpTiwy6M3At2uDGWCp3VjusTEHSy2iUftkCfK72q",
  "key14": "ZiaVx6rGDmyQ9mfW5R9xtyqLagFyGSeyGyQLpNpt5ZbzECNTWgr2hXmdcoqJzg9E1yEUjLVsGidJsSqVN1AYznX",
  "key15": "4osU4pbDVgY9LP4ckw93gzU16dtviwypXigQwjnPCx7zJoi9HXebmJBgAMQkEX3om958xkBoUup9erJtYdP9S8GL",
  "key16": "4hKjq9X2UWbmRepdaKCHJJ4sos9A19UGkajXNeU4hTUYeRrjdFMz3AmcRkhNd3xSNY2MhgWH6mxpKLmogCrV63vb",
  "key17": "4R1urK1JkZeH8CbbeYCXYV5EG4gAGoT7csP27GSAEzzjHMiK8DQeNLwfD1iF4bKfiPbHSJA6gFK56LjTyekeKkGh",
  "key18": "292ELGX3SnbohKHEuhYLXM9X8yQAS8hKddfPHLByF8YEA4M3cLQAwXguADrEAAWsKDYNj3Xt9rXhmx1K8tRbHEq2",
  "key19": "3yyXdqzZPFbW9MJZEcYeWWh9L3JtFSpYe2Htmg1NorQPzJFFWZGKuiiFV4U3mKAwaTPqsGMYh93uxHuib6kcZRz",
  "key20": "3YVPC6bFCiwsWnZfLrUjhd6TWTg1U5D1XDb7228Q648nMRKDPAAdtha6mjVc7QuiVtAjSYqgq16esVGQoKjd9tdc",
  "key21": "2Fhhc8qbSCUFEHcmUJwQKbVCGBYDmZqQTKoq83YiKRFqsRQrcnsihADfCtqSJCpF4FDT3Bck4GEvQEaGJCAqUxc6",
  "key22": "2RrmmjbmewHqHpS3X9g8wBDAL2zwX9L6D1GfS3FdnGiqFD8FweWPdpb6YzsYoPEovajxWZWVaJrL6EEdAuvyLoXh",
  "key23": "CCxFSLMQ7mCZ2y1mcQw1kd3qxJH36Wp7WycnpfoV1ajBKEjaW6XmfR6zs9UpR9qTnvr4YMhznG8uEHhZfuMKMio",
  "key24": "3Kop7Xqch3PaYvkJXb7cs3oZoFU2m4tDcbzA3drJsntUUVcimN23P1Qfci79e6yqXQjcCDLdzou4ALLwPLrmgKLd",
  "key25": "3jfyKpfwz5AfCa5BeeXQ1T3FWzTJbVcw4jcK9iDTBZ5TiLoGNfkAPZVXGzmuUbLzQS6Pjv49KSRh8CpBNQo1dgm",
  "key26": "3XyZeC3dCenTeACFHq5sfXvifDHVeqQ159QJbk9athrxhMHHaAZkJFk29inWnU9Z8mz4D55U1RJRP9kbnHQGTFXj"
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
