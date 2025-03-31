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
    "4x3xAng9BvmdfXYt6cShbD4rvQp6jhvizRuhy56GBKsecmAm48w3cGetYwQyQFwCSyKqXCbDA26q9YqpbMNEwHBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPXQx73xAWvf2KCJ4WAZLaCpUG1oXZvbRWM3vA3Z8V3LscATfGL6LwXeD5QfKCe9USRpMVbhhGMFfES2PikC9Zn",
  "key1": "4PpSuFSEMgnBS7iY43Noo4XpQwkMJKAu7ztqHSDo4rqhf9djbXyJTsKJeCLyV45E7HsizWwTL2r5mL8Ncj7Dudj5",
  "key2": "4bPitsZFL3m75nZaBKTHvz5tPcGmdt6Nr9kdAsXhWsgG7n2j4cUen5LFfW9Yo7ZusbXcTxiMqpZ3QgWMHkWzcxaw",
  "key3": "4SQUxTYNP5i55D1H3CQoPB3o7G5yEvpx36M2cTHLYtix3RSzATAWgDNgAFXro8X7MNmnfT8YbmVTSpzeeSfjehct",
  "key4": "4HzMb6JsGUMLG2YfsprH4wwP6DFFH1wtoDoCi88DHgpjtJbTi1xTvqwPBppiP5HuDY8hL2iry4CPxS16pXKf8Jm5",
  "key5": "FwY21VYmTEuVp9eAUcCdyd8SCUh9vCSBXRmdbuAhniGz1y4fDySgjj4ZzC78UZPouD88bmHcAkeeukceZFrrHSj",
  "key6": "5wbDtPBgpYfjKYAb9ES5k11Bt6WCpnKcxC8pvNqGkDMCobcFkPBh1qUuBr5UdWMxJxYnBjW5f9envGZwfmbHwqzh",
  "key7": "4aDgdg5yrtVoCfyYvkxsHpFzhMfB55cUzd1x7U43nPBZ4XRyXqXk97M7tqM5XkLLhwziG3E9ScKEELWL4ARF45Fi",
  "key8": "4WBhmA8zpRYDkfT1LjKskvbgWmhzC3Syf3Gh5rMZFoZv6dDGThKLXKspt8fqMwwFgTqLcNiCehXmzfQSqzG7HPbx",
  "key9": "2UuQszdwuJfHvLwjeubmtWdyTdtmZdmvSgvsnSUreTBz4WAZBmGbepPt1ZnX6vug62vgADrLAjaYXv4qhr62FmPU",
  "key10": "2rXH9Q9PiYcLAxG4vynyAxKLieMHWM8EWkDvKp6sCbw6pmj1dmFaFfh7sUxpc7sYMNjdbz49g2k67bFgXiw7fFSd",
  "key11": "3KPFVAR1mAa7Z5rdh6xZbFLjJJtoY7DagNXHNVvBiQEwcmQVUXB8emD45Ybe3c4GCXM6nDuZv6nYqQGGzaJd1D48",
  "key12": "5ueN5F7DhZR1jo9bofLCb54aGtNUGH3PJRtdijeJNwdyQhZbUkYVa5RC582AmPcCetA79sERckKdY4zkkk5CMqpy",
  "key13": "2QQjy95nqXiUM9ygUinPL6uQtJifzXJVW4vrRdaE8PRHV2ak6w2P6zkt7AXZyozZGV8DcCarBqHrWqK3Kz1jSrCR",
  "key14": "5eyikmEvCaVnyRcc3Vd2ZWK2dubCjBMeZ2FHpVgfTwUtL8oCXgCXbijztrwQ8B7bJ6muN1ZNrdrxGVnHufBceLnt",
  "key15": "3G1e9kf7bBL5rrxrU5ffifBvMgKL2oUb7o6bVesKMnxzMeZiAC2TSmeHLQA2YdzkVMUGQ2Yn7TG8Rvtu8rn7X9p5",
  "key16": "3nEJ6577P9oxoPdBXJuLJP6B399XzWDFVuNtTm3RUPxdqePDtkozADH8ViveRqNM68Nf153HBf4bPW4opjtftmo6",
  "key17": "3coqPvnXHzC99BDoNNTwHMZQANMqe4BbCssgKkgnF2RxxTN4NvUANiqb5zLzJe1bciXp4EdsabaKdEgZ8jM8iP62",
  "key18": "5FCMt9nvGm8N3DPBXAYVCqJKNcGnqH8BTK8bhDgaxhWsqjnTujqvGD9vncX7JxJgQopyCNgjC12Lf9tgvoGzgcpU",
  "key19": "5f67A9S4YY9q6gGtfqPYq5vRWn9hqZqkXzG8RHaNiG27CD6xC6vGR49KoKz7tXUyNGp8eK9xVarca87zpMujDMyi",
  "key20": "4kdRW8P339572fwsUEpM3oLK43eb8aoVmHnZ2NywtHdt3igCuhKhEHhWpXf5c4YhCM7BgAfFQXB1iTKLb2MR4wGE",
  "key21": "zBLyWrBvVgmhj1QzrhExYT1cLNDL7nwKTQ1FuuBmivS7c9iHVjQWHavwHkZPSJJJGURHz6Kn9q5Vv8r6cCA36bv",
  "key22": "4cYTTcSQr2YCBRaen56Y9DUzCeVx7nHj2wiLGCKJJwp6nH5ooSwmdZNQcnsGxrhPjYxBdd2W4vt6NUugT8LXft7n",
  "key23": "Z9PkgsuapeX1cUFFm43DnQbsYexKp3NXW828j5AYjX7bZynsuJqQTtP9QUieM18MnVSJ4bDRFNHAWHE7u96uxhX",
  "key24": "3sAFVUmjLdq51ahrmxyBD77FXxTuwroJxXrccL7J8s2mbvqyzKyATzCXBhEpDfqHnyuaEtVWTHGsxSqA7YncdWJH"
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
