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
    "2BtifBuPSGw7wv95ZiqrkGdd6iE1xbuUrasVzZXoHpDp6xzgZSHzg11kKzmtJZDiyNU7LLjaS8aa6hHreeSPbuXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkkHsodAXyJ8BYNdvQtXAwW4shaDJUSxbvrKpEBpJ8gLofP3s6oQ1BcEujkh2drfe6bLsxJCDhZh45rka422cpz",
  "key1": "jGfU2gVVXt71XnqygY1NRznzJMsCPdPe8mSm4taNppnNXs1iyFJkvxnaXnMggcDiyoaTeH2U1G8K4R7wUSTTUfG",
  "key2": "34YM17xd324F1md6Q2nBs8Lk2mLUzSPnm1rjaZPtLoFf3ourNa94D12hn4VnGGLQh7AcQLSmJwCbPLYkgzqjrcJ7",
  "key3": "5A2oHTY3SyykbCE9R9wG3r6RK4HaDWazx5NWPBPHcHGtoqEH9C7RZL8iakgmYgQ3y1siySqDcJBA4XeJAoZ1sXxS",
  "key4": "3Z7QZ78wGZZ4XP4pswAy9vmTxF5iTuV4iWZVCenou7uVy3z46KT7YSVRFraHkqjXTov1tBhrJ4yYhvsJUwtTEGUp",
  "key5": "5aVZ7uBdTtsDPF1QEa5zDPVM48Ey4r5quz5GSUddRkotD7c8eaKxpcsrGRrfWV8nxvvsn3JdexHzRddCh6b4Gw3s",
  "key6": "4DQWMfaEDS65d9LT1qgfNX5XvsQzDpmGsvJgVyAkTDNx1XezL6RAjgzuYctZw5GpBp2pHQp28eobi8y1KWDbs1fY",
  "key7": "59Gzdzi3tWGHA9sd1Tq4BktJHttKBwZRZAog47d8cPCjQe9pYw8mBFeYQWkT7voTti3f3vuQj7Ae98F7sHZZWzqp",
  "key8": "peffTUdQvN8b1BW1NmZo5Uf7yxcn3jUmQi2j3aMudBQJV1xTu8BqCaMQwmh9ds3C6yN6o4icmQzQXecNrpooZ7M",
  "key9": "5CnawVKvJiUyTYucN2FLRiRFLjECTciyKVLeXC3BKsrFdxhA8xda1dhuoz9xezDGCy851DKNKS85QPhYa2NAvDLZ",
  "key10": "4ark4c5ytrGt3QrWHVHvZwNa7ZdbcpPc4rip72MBXS5sAyxx1Fzk6fiZCS43bk4LviYPBrJjJ1mPBQUTS7voAeBD",
  "key11": "3gqFDor25zipwsz5fDFuyVsLbpGosZPitYBuPApCNpz17zWSztQzP2nVfha2BxGtRb6xWADaAjtdrqdkHB6MadCr",
  "key12": "23cZche1r6AzNQkJZVMC9vDDTcLLWeRoNFjDJqgVWApWfLXRpD3SRFW6Dfvqv5TJkmZxw69YFBuRNWSRzh8oiT6b",
  "key13": "ivT8tLFdzABTmju8HXK8mBvZtiq2jJxUQzEb19tPMBF4UPpPYDkEYUi16Hr5TcN2M2unA6DSezyYSvUqr2JE1Ea",
  "key14": "3t2d8BWWnxLthQCXi8SieTm3axY6RycrWVETZLQAhX4Px9hykENArNzveyryYVhxnHpfcmcuh14jxqc1NQRExMLw",
  "key15": "3CVSdH2Wae4JLUwSnaJUg7EiZqVid8KhrFi4zpVRCeSmdZkpkCAQoiJxLm4jDV5wt8cLkTxLr9yiR4WHPFTvrPQ",
  "key16": "2s86qVdP2ZR7QufLzTAKeb1w47BZWarPz26gWfipfuAPYBqPscHSJ2jXwvBgCxw2Se5kYWWUacLpfAaBfzAjmTsc",
  "key17": "5xhkm6iRqibBgVvrhsTBWCctzVHULEWLFxkaWKbc58rWerqwUkKxZcff7vhXWozWmu9uJEpffE4oj33jPWeYU17D",
  "key18": "2xK1GauckKBWfJ68bMGXKpUJVL7vwUqym433JBTv7B48kfSrj8aqFqUF2usCBsbANnBkmrsMsGtD9aitYK3kNeRb",
  "key19": "2PcRxa2uDw6KPjHtDL9UtddrUtbHAbGvDKyUmDTVbBPQYWmaqaVtJpErtyJs4bLwqLjHA9y1LeTUouEp3RKgChCj",
  "key20": "32pPQxFpfJom319Wh78DADxnxfRcz3YwZAr2e7kaLyQpR6DryvVTr2sgqqL49U8u5X2iGwhUZfRaLZjEjbXctpzg",
  "key21": "2KTeh5LZPR1JH9TDEFNDjnav8VJWw7psaDGUnRTzscpHDo9j4jrgScKJjfVkj1jaotSKGUz7w32Ln5rJ6CQxw5ck",
  "key22": "KSYZ72VoavyQVKF4TWdZMSd89FZ41ZpxbmYhGmDooUQJ2hEh4PcGT4p27gSCnezucow9sz7GhZUgyny3uVPnp2Y",
  "key23": "3fNygBezNuktcSwNumzPSAmLQxEXM2Zb83TxRpy6iD4TeSeDwKgBciuxGqow2uRMokeU3CAqELFKRpDBZfn67Sy5",
  "key24": "4unZcwZZxyHKx9SV3WEy3QZHvtkPf7dh8vb23hfhR8E1g334S4jV4peLSQG6Hip5UUEWedtniCSMywGp8dAtBiyh",
  "key25": "4v1UkuDWz7R3c9VjLg2ytsPccBJEDYKNp4cdCtqjpoo8k8WaBKYaZUnyp2MBo6dzeKTsDDysr1bSMQDteB5XQqbq",
  "key26": "3N8adpjqS3bNmbsBL75Ueos9StaKZPcK3XR2Hf3UoQjrtMgL6ViswQpCYpukuXbanQXi1REhE2L3A7ZTLtmwNMtD",
  "key27": "2vFxAesbC6BELhwopTASBzNY9pdHNG7yw1Sdth8UDd94oxQ7bey1LFRA7Q3BnygKWPveF18JC8LsiafTmGN8xnvX",
  "key28": "4niKXeLbwY5whpbmcj8VthhPpHBfd9jAxPfRjmAZvywSrSJfMFdgWEyJJ3RuwX3xzxv2j8Fv56joPcZew66GnP33"
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
