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
    "hmEfE2RCU5i3TvxUtKEuTHTYkVVNBkyAx2TXHHHrhssEQMMNpLUazffCjAKRZTQz2D7staDxvKEVg8niXxFRwWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxeJ4NnaKGsZd9LEnwcUjU4p9n18wuL3nQm5rCFELpbnovPopTEhVpApF8TXHBPbqhCxJbmFAvW9JvYvELZbBmb",
  "key1": "2BN1gzUnfDiVTNLBbDE5RywCp5gH1oYthMFJiui9amfmYuAqWt2UWspaAX13EegNt4yvvERyyHiFqHNtmXVowoZ9",
  "key2": "3bV5FUaD8QS7zub8FHZN6EdNAQRaBsotmz68Jqjdhu9PLieNiUM3Job1HHVs1jYqyKDLe1KYaR8Kt7uVMTmaBc5u",
  "key3": "GJYBKTGUAxjwx7SiJBRVXCfoFEXmrUnoscLuPbR47gE3x2u6C5svXnDpZ3WzbpqojuxjKf8zrGuEhvhpWvouhVv",
  "key4": "5cJssWUAkxDfc2CcE1yNXTEeJvJBAYW8qjgMp4enZGJoVmQBzjzRhwwmJQoe1dgfq6TA7P82z2839pmxF4wRTRK7",
  "key5": "45vSfB1Qc1hTTMfPisSpVaB9KFoNZUFLKiJYZuWa6bcNNojqYvVard3du689oZh39UK1RV9qDNQNBVPRfLQtcXuC",
  "key6": "5aoXQP5eshxQshLN4YDE2RTBRA921amrQXbEoC4cuGqC9csYbYLAtkvREpQt1m5VCTDb767igTdoC2JMrH4xNZog",
  "key7": "5Ewd98JazJr5Qm3RKuRkAz4oU5HthtCP2b2oGf7CwNvoYjNqWcoXXAwuDLzPHv5AwBEmAZtK3sYEkoUiWmSmap78",
  "key8": "57gTbCVy4uAGtaHJKGUyHih6M3r3HPAS87reoU5whtY7M1tAW3QhgPmhLFK1LJxu3xVC7kr6xbaUfee2J8Gpuozh",
  "key9": "2komfjgfjkrDvYE3jp6MyuwoWiUmhzNbYD6GXovQS9aUmAjpyAATFqGBCAnvSfMX74n525j14vpymuH4gbU8Kw5R",
  "key10": "4C8VPVxwiXouuxhA1Y8uu8CjibhPuryxGk78rBoHMGTGJMVzvcw5ZDg6a3cv7TTsGfMthqxhrAoMnhpEWzntFRvZ",
  "key11": "2sB9GFrNShGoQ2mwif9vycLWXGGBgJmt4Ri1SXgwWgbYpaYwpTPgt1En6Q3cAXBeCCxzesYQYXQUs9LoATQK6PLR",
  "key12": "5hJeePXid1kZmtiCFhs5Ttm6Rdf9j8j85nJNmY7sEpkWJgAnZM3LyXBvJstxchYg9TpRxBN6T5vvpVP8uTxWC7eA",
  "key13": "2wJgTpGHLkaiAPKDKnhnjWWGVkH3NSyGWw2LZkD6umU6vxFkcQeMi38jEdBsiLwZgee9Q8vMmTWAWR3FWrJ9uUu9",
  "key14": "R1k1JC57VFFHT3VmdHH4fBkCqxqtDQ2EmY85rxg9ajmknvGc4k5MBrV9MK8i42W6FGt9NAWMTzgevn2eK5X34tD",
  "key15": "4JRCeVLRW1f6wMA1w2kFSCFZuY5fTTZGeqvRfnHcHiE1iDW5iTAkMQrpQXn7rre1QUUj8ruK23XexNQomQBUuTJR",
  "key16": "2rZtY5De8HErd8qG3VHmPSqyrDUJEDCjeeLjz29adsMEZbQUXoE6Gmh3yVhqRD282tL89CFoVdFuZKcjP71GiD8U",
  "key17": "2EiaGWnoCYNMyG4QpnyhspjvsZsvuoSG5L8mmYyHB8qZmpaXyAzkBwuWh238d3dMtuBn6tYrzeKYdiunZUyQRJ4i",
  "key18": "3CGztYnXtACYnoWRyqUDgdgoCAxtN4E2vN2f9wxWKvf3zJaDR3a4wk73w34m4pxDtoeZduzkhBCjwcoRpzi1sUBX",
  "key19": "tA3fuMNa3GeNpTabJRUR2yWhgn4FywMqh7yARrUBeoYBEps5Y8ueeoKi15YWdv4Uy9j5AAvYraeaFey4okEwb35",
  "key20": "2chcw9KZDqtRXD2Y3SFHGghga1ydezseL7sbQC246aPB6V4ZQLo5zHo9XkPx5dFKw3pE5oJRU2WkyC9FAvmRXscw",
  "key21": "5Qyvt3mZCsKBfUfZoPP5jYVKvcWbQhn7goY8BfhJrevPAMSA2zVwCbU9tmfj7ztssk79f3z3EnBAYW7HF9Vj5idi",
  "key22": "SHuvv4XipaQPTdGbKBHeJki89KbH3YyfwjpymFLduT7VGPf9Lo435WSjTJVAg4C5gZR7m3FPdXk5aVnyeW29rCF",
  "key23": "3DAsFXmDJHWdQ2tkcyHjMoLm9qKMTruuFxMcjquJMgxRUzNjw2xFJiPnZVRasT6XRXNovVzXnUND9atJ6TZVmXZW",
  "key24": "4zzYoYKc3BQTbKmJUeoGSEa2ztEgyxwA3wNuLnrcycnAt9NxYjLYTBooaUGG3aVLiyToopeRg3RS2uxrsJdV9S4g",
  "key25": "3ePJbeyjXu2hUvjw7fb9K76QgMJcUne2PC1Lttp7esxud9LxxGhqPx76oiG8UAHW6z4jA1q4uGwpGAHAZPvfxTWc",
  "key26": "65J1Pn9vxxLp43eeihqdr9iYyCF9KcsJgqywwAbK1c2fLVKyZgYsCf9bS5mcwY7ZJ572RYuKVK6NG7KjPq2TVXwH",
  "key27": "gZJzREeWqXtXZhkoxv7pWQdHPf2xDkyqxbsdMP3kXWW5GUdVCwqaMdYhuCaGqzr8TLV73i4z6JfUbkJvCJf9XrC",
  "key28": "1Zct3ahLoVwUAKv7tWcU6DzmD1tW8jtpQiV5t4rBNQW7wTwgtBjsFmsYFrkGDYW3sD5GCEB8zjmeX3cXgw1doVD",
  "key29": "3bLYi3CUHZb2pMxa9XiUSxC7CVhsWJjt14D69GbUn2rCHRvWvVjtsMCMP1QYzyGJfFejPqKr3LP2CShh5b12uBKu",
  "key30": "B8WLHRz14K33WykwHqfKCMpcrqCYyTaRTXvUNiUhJsSqo1EBnyfqSpKCSitXE6RVS6KeavhHboHTiM7bjX5Dugb",
  "key31": "3Ps6fpNmusBBFMSwPrv6CJxFigAHEhxBePGNXKpQuUAWx3K8Jx3S9tGE9r754E9JbSuc1H75N9vJT8EpatppCzkV",
  "key32": "yuAAdCBFCYGJYc1uu1PDxgJHCqm4r8FwYP297Wu36yWomPQywVyTJYGUWNqtByst6cuh2xb5oKXRZEsMHY7ZrLN",
  "key33": "3kXUyTnAJYW2VjNkXKseZjn8dS1w22RWxDQ3j3abzseif992E2wXEx11crpa1uqT5qYp55ix1rQ3Nm5wHn9E5VV7",
  "key34": "4wdQGpyTqgbFyqbVSJXAFWPr5EgKH1QKdzJnSktdTzRqnQhVmCNrC3bebN76KYvNnVLA5cgGDrQ9gCzhxbEvCBSF",
  "key35": "3zP7ckimcA1y3Qx9sBrzCFgPAjJ7M8Qfmwda5i3RC2V6fBSWD6DipTp3j3SJUW6VhUmitGKqy5wip79juHQ4KiRX",
  "key36": "5nwi3tWXaK2U3Gr9FzgZhWhCGewAcMfdvma9mb8gLs2HZZUQXKsA4xPTNv9jiufJ3bHjgLJnSdeScoh9tnqxP4mP",
  "key37": "2BgM2AcK65SPsMhRSjjySomnHZfq8UGCfnBmEAiff5k1XaXUbBYcNFZC9BVHumWBArYDdoAeZ2FaFZ7io6HXHKag",
  "key38": "5hZoScppXJmozXP7M1o5KbLvXaWUpksX8DsBvLwJs1qBT22GRx4B8N8hTYgEP5ZmSRYamtXMrm3ToK12pPGUtxga",
  "key39": "4eoRBLmmDgXSo14yMKmowrrSVyP581rfRYogzYLcXieXrUMoKSwv5nnuSdvCu8x3UkCx1ypBf3mn2XTxurhkAGi",
  "key40": "3czpV8MQuUUwibVaqMmsF4ypQGfkPJKhUuSXotQ6CyPYX3D6k9HtfH8d6bdEpiqNDDrMv6eiQtnyfd6eCmmshUWR"
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
