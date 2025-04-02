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
    "42QFREHS2p5Pe3DSrBhiD1dCuLEDhFHHTSiMQYXGbf4pncydvcca9Hfaq4HT8BvDcnYiSJHXxZ1rkKFfwKDsymf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahoLZRsDfm8F8yMQeanVHuaFUoUopDVoBuHJBx8rzk6q8LGaBpK7rCk9p34fVxhrUji1c8yQATZ4AMh8SmwfRux",
  "key1": "3ARVghxtohC86n9qKA1us4S6uppQtjbZkp8tmSRkViAqudVmek8vSBjoxHPXHNkuMhLRQsMwwDUEFwpDsLm9QxsY",
  "key2": "qJ2fQ46gjocTBShRTx4a1bAWuTo3wGgjm9CpAyk8woiNcwHftQnMq1pfaKYjcgvfJwFwgfXZSze3QYpMf77NmRF",
  "key3": "4P7d2UnauahnwznBTEEkQ8HFxH4RiUBbRjMxefhHoTXvJJxiMMXp3AuWq9a73qdCCZHSQVe7QWzrBbFk2yzg7BGu",
  "key4": "3pYF324HDdWDfku5ERpYnN9RjRaxNZdr1oRB6hT5i5ztzzfwemLj1Qc8QkR2aWV5Kzti5c6wdUMoiGi2yJoCXGWx",
  "key5": "Qf5vAinJFMezbFFYvbL6cuKcaDfoh3ZjLPdpe1ahTPVtN1MDYNsxBzXovbtLfXgazug4QKZm8DousiNbVNmn3AJ",
  "key6": "5RGqobSPQ9FaarMBj6do2uwov3DSJGztPWBjFYyd35iwiXgAyFBtEeBJxbaXQy5ro5Q4XZb1Cnosq1tx2BwuxVEz",
  "key7": "RTcT3Bom5qrT6ZspeJG7rjJ4sG2RVBuE6ZPQ17f3mv2uLposegXJyNFsjuDhZYLJCk4dWUqzsytdpZDzSyp7mjP",
  "key8": "4VMwzEhTKDE2NBLwJ1zHXJVuewSkxR6qWkVQ4SHgTy5FPebQJetZPX3NHBQaYxRsURBokLUzHaubBrNT7gAWm6Eh",
  "key9": "2pGzB3X4HqKP6S7dDSHWE2xepnDfegY2iNbG9Jq9pftuZ7RVTGwHwHEtwwfb7aVnzfUMpsrdqGtaebYbB211fdS9",
  "key10": "2Bvq23tfUnq3czCwMCaS3oPpUNvu29eR5LbtqmNaUxktRvxYqyd3RNkDQrC7KhCpUUn4WbjBSaYwVWE54kPrbA7p",
  "key11": "2wy24qtewUijtrLbranifwRk8ztMLwaRDa75mLD2dQEFgFw8WT7kUTtuKMYYG6Zh4C85iuGWi8DRqaPhHkuYqvEo",
  "key12": "24W1CA6dE3AWE1BuRcnaAYT7f8qfGtNVEvvdWKbh1MJ43YWWHmtZvYWU1x2dNNX7LAm14uAH4wrtmPKgDSz3H9G7",
  "key13": "HYzdzUugW8PxCWVjXitJb6WwvZD9tg5UtXLM8sJ5XtFRjqB3iSVny6X7Nxaz9C5sT6BjqDpLFaY2TzvWCFKQMzv",
  "key14": "4wFrboURG2Gm3kTD1H97y98qWZ9HncxNCjUeicAcXNBm67DP37T6HJmVHCoRJeaRzsfySZetV5cMbUaRNaH8jmLP",
  "key15": "3NywJCQezwXuAzt8y1mHtmEdN781aZkN1R9wzgYgu7sMJXxUFcVHvBCapdKTek4eJg8eswKvWsxYLbAveBgqRQjw",
  "key16": "3bwHdZN8Gn6x2Zune3MGJEwodw6uhguD4aRdJ4nmFinLNAiEKvknhWNNgcKZadHHsG4RzWpmopLiSFF2J9Dvh6a",
  "key17": "5eF915bjqhJmeN2H81ALQMYxaRRempbGYt9MsDVmZeHUW4431zLFVGCRj6oh5AX2yheLcTfHLmyTTGym1EstmuQX",
  "key18": "MgsotCFdFALHkcLNNKUKvKWZDNnHxvkBoqc9uZNGxZh1xRDiRkCW63UZZ94qwEcHJyhk43xKzAkfTQcRHoo3jzx",
  "key19": "3GwrQWnxGBHi1W98uAwnpDzaJDHQVEuWfCdtFLCFKEhxfa3Ey1ccUb1DocwQGgLQQocoR6LfxCAz42E9nNfEDdst",
  "key20": "26xyxx5voXooQ8LqBdY3ycrrWdZ5dSKkBHXxXzAJRu3P9PsYMiSXtK7QPZG946ZWG33PgDw5pDs4RpPryBU4N6eS",
  "key21": "5jVrLErnoVppbajKGS6CHiys1CvovVsK7m5EXEYfWTM9ovAazVSHTUZqjrJFXEubFw2QBo4vQQqfEN7ZhiwqYeu8",
  "key22": "5Awr5at333xaXd8GYNauKk8GKY8QbWrpZjWJGg6aX6iJk3Tf5sgD3r1v1DM2RC5RBgJ3dNzS9Ha4HN5MYgb11z4a",
  "key23": "EpeSMCBgvxhYT2aB68mHMoyoTdPpqUHGQ5Jm1FL7kBjPZmx85pg4V2WbPnczHZVBVKMyYZsjZs97ySQJNLkVeNL",
  "key24": "53zNUm2TCDZdtZH5JWq3aA5rLK8TfmhDsCDVF6W2n9bttaa3UpNTERBsLjXPtdSTAHFEeB9gpJmwFgX7vTySEgZr",
  "key25": "5TjgyxczQfYpBobjHZGkUL4yxfpfdxrRhwgyzLvYWqZu4FHpuC1aUa2LUpwVgJrE2f5e628k2hw8NhtFoojcLhi1",
  "key26": "4GZWnddPyfdQAjHE4e7k1nRYD5D5PrFwqXmSUkdgcH5zjsgs6KKp9S3mKfKT5GmTm2CfeGy35hN2xWor7BgWCJMa",
  "key27": "5MQhqM8ov8YBpPyQjTi74gwLwcKWMm9w1GnWVHTtQg52SaKzza57YP1dJX3FMXJnWZM1LPhzM1ZSCiaak7Ctr5Qf",
  "key28": "5EkuLuSkqFn7a4faQjDGsDaMEZTQMury2CcAoNuk6qjDXfPUySeSRUoaa3hxuCCRYVZix7C5aZP3CCe3614GQdNT"
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
