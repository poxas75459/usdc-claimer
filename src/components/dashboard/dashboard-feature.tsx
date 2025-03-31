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
    "47eVxPWTYYvTaJWrSPKaDCvY91ngCFZqgwEWvQFXcUhzxyvKAsxB4BopTj9HapCLzZozFjkDUYeGp8B5Q3xnRyRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vy2u5Hm7rznRPpxj2tf5Ff7WyRAVta4oAvdqCW1EzGyiXtyCR5d35ddRuojothATsddwouPGSax5pyWEGZiK8Tq",
  "key1": "2nXuyEW7PLx7bNpP2JTYkzxJMJgajUJByQPiy3qYFHVuPeHB8StMtjKdngefd2GT6LVJJfKdyzS6jNPTZUv7XkJ",
  "key2": "3MGm5qpHSNMzhNzCYakykPZo7BUqDuNbVvWmi8wNoaALXNzuooM5T6e3Un2RGzjPnjBKphnT87YME5kp1gekfaSU",
  "key3": "2v2VhW1z3xuhnBCnaDKeLZpDPEknnVrqtENAuzLGUL6dkMULh1NXXKa2NwowyfanELn7V7P9Brpsjde4DZtxGWYK",
  "key4": "4JQYGTBqLkRjJCUEAm7eUgDANcRB5usABS9mkebVzzG8pBD3f3KABFyQrZXK16WKE72cKSpBZrGykX9YVDAoxYgb",
  "key5": "5QBz9GMH6TKX5Cx1XnWTrQkBk4q5oukXGGhsn3ehcADWFUBdJXRivbdNwqYu9PoPfwZFNMfzg2fgC25J8rRYjEpC",
  "key6": "46EHRCjLy7AJJHJtiL5wmtpBq2Vz66MYcMuie9iZEVATRbhF6YiGh8bEFqyf1tj4F6PxcMeTzspRhrUgANPbBoUG",
  "key7": "XHKkCKk5voxJZnyCzVmQ9v5eWVcpgCDPyjZqJc6i5ZJcLVc8CgjgPxDbtpRarpkV3ppjB2ynMZFMM8d5ZhC8C1s",
  "key8": "57FByBSTpJNMTBN8zUDtLqph4nw28LCitTMC3P8CaWUVxMPyLgEBPMX4VasqcXLYLxKDdrU5zE1FTDe8uK4nqrxX",
  "key9": "2u4x8CjoyvjE3bWB3MYBHcU9mSzWv7MPNahvT1iYrjcEE5LT5VRLUcwcWEJ8FGRhWDb6xn1zeaYTLVroVvJ4R6Z5",
  "key10": "4U2cxJUz2KJRH5y7CYxUhNGg8nuwyEja2RLfcjQahXjyRmC2grJViMtPxgDRumodTtPZQpLQHZ6jEbJouzQUp1Gg",
  "key11": "2Ufac5yDLCwN7L6jUqcKuAjzsVWzJie4YuEBL9Yme5S2CKdmytFhXHKGUQeYrCr2XzXbwnX3uf5eHD8oGkFNwc5G",
  "key12": "38KyQESuBZYxJYjGjGTJmkGfadK3LxHvFr4v6Yj54e5RgdG5U9VkRYr1zxhMhUmnnqRyCGgkj8LZTfZiTPUqY9o6",
  "key13": "4yWuT6HGUCsHJVT69f9uFcoFN3KfPmToYVymeLwqW1vCBoRaEnTNzTHPXTe2ZCqGpDFvB1oFdXfXc3BAWNDvAggc",
  "key14": "xKFn1QT6nDUpxxWUpg4981Z51KzaWJWGzMAa69wWRSefDfRWKczfGzVG5CZrDR9JKe1sHmCApBNpke1wtoMdZrw",
  "key15": "fLZoP8kzKC9YxXwFRmvdRGg1j2STXV4NDP32bDmqD4mK4gSuvPxW9J93UFzf9QJUQGKUBszkY2JjVz9NDADG6d5",
  "key16": "2iZAbF6rkynczxgbZ8QAEw6VvtCMpNCk9xZ5FGhTK78qktUq2jf2kxtYUfQnn5Y4dPGSY1XKC69cWPRukZtNiQsX",
  "key17": "2NqZXq3r1NaDNmdrZiocVzj5bSJbxACHnoRKTttmS54xTBGS9J2nzZKREMCP2jzToJtTsrUZC8K3uh9UMJtjZdRF",
  "key18": "awFaPAjgoSUudXKmeFmBY8JyX3MS68JYJiiEgkx9UZG8ZL2A56uk4oYhEN3vQSZKRwJHXMUqgAQKnqVj7CwC7mB",
  "key19": "5CAffr3oL5Bfubo91UTT9ShUvstAn9jSSXJWEiRtJA7UpkqaAbAbhFKELRBMSPHCVFKp5Nn4uYhrUDVms3erPDCW",
  "key20": "3L6m2ktxT5HZoBNZDnmZqQBpFB4fxd6NvvdYa6qp6dmizuVDufL3i3tzWgF5K5PHpoqpHWuPLFHitobNSXs9ZgfZ",
  "key21": "4YPaTWs7csYZYTpLgkSapLqnxU77A53YBYficyAnUJjFjFWX11HmSnKMVicGaT2UJh42zZq9GLZv1GCyAo1oKQHz",
  "key22": "3vZ7Q3SiRwdBAX6sQuashBqCiX76bSJGoAQhjUqHMw2xF3bZtUVKizG7cDevDL4U7Y6fPAFESDpRYmBQj2RgTfXF",
  "key23": "4g4EXxNhxy8xJsPMuG1Y7cAQgNBdh47mfsYqtjaTedWpNqGPicNFJQQeTbov1toAL9KANuvWmpeLrb8tFHApUmq4",
  "key24": "66vsTnQnQ6dvMSzEPbWvRQyryExnCeMCM8D61tZjsMFZ4f8n4PyYgosw893G3rSaxFTw5fzmcNN1icTXrZZQUqNf",
  "key25": "63PssaoK7wThCHZToFfCdPnn86uTjyt3qaDgTLzBQtaLQmds95Qb5p18MPQQBnw7tDQrSaJwPyk4okZ7bLoWiSz",
  "key26": "2PpSbUR8d4cUraWfWxJe84zy7FwxcPARivMX5mHKJWWy4DQFvUAFGEzLojyCVSeuVJurZWxRMFyiHJQPPXeY8nqE",
  "key27": "4hEy4a7XhDqRsHfZFLTGELYt3vo2Ap75DeL7dfvNEmZHzmTeScroTkVqXmdYMq9yU7idrw1YWE5ZW2eCxzTRyjZb",
  "key28": "2htKqcSc7VP2TaHT4nnRciGSDCGnQftJHk5vdpBC8wDRjZnpa1tMWbMH9Th1uqJfputemjhnfzeqCehLobJwhwbU",
  "key29": "3m8py5fonZR6ffkHgukKQxS4RPTp5Xd8bsbnM3AocKEaBFY2EPJUgDpjyaYuVmzqUpCaBcRRsceeE6e7MuLLm9Rp"
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
