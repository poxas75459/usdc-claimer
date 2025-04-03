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
    "2HovxjGzo7mfp6oEsS6pEhD3NktaYjhNtx6za1AoBv2C5t2yPBYvpnic18bqjfoPbPVZi6FGqy697jLQSGTnE9eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HkZKQ3YX2NDq61bmhnRVQqDvJ5kvBmhXZmHBF5Z4mbr93b88DUQ9AWRxmtVo72pHNWkm9AWKAGh1yLnBsknCiad",
  "key1": "54bmFRtguUV3V1m3ohbzZZx7JvRZVw1R99nNj3f9A8PHjQ4pjo3Mqkseajew66izCXjMJzPgQrQFEcgXanL47QjY",
  "key2": "2zNSqGKYLJt1JNP9fCiHpyCXhyeAmFMPQJDgHPHbZNmX4JFz1bVARsvubD916StpCfxsvzgDymxuN74dMk8yxdZm",
  "key3": "nBSnszAx9E2feRQdfbd3uhPTykQcSnxZp2joDSVdwsN5rzQnefFMYynDAYBvTHntLSqHYbzGvBNig8WADuJxkcP",
  "key4": "2Rrqj6EqUUEc7rzxAgSarsgXi4E9q2ZA6jkG7fufcmm3Vbevok3n9EZvqeACWMrnVNY2cmYi3WKTdUDXtHCuvyfu",
  "key5": "54Cc6yKvNvRsMoKpFSDc4jcHi72Fff1XswYGrfJRwSRR8R7ZfAaHgbbk3APfJz7FM5sTfjcvjgxhrtfrk3jnkcaX",
  "key6": "5ZuqqnBGApbb5qzMUdEHcyK45C1E2QHj2s9jxp2KuPEFWFfZie4NTzZCBNfL5HiM8sHXvK6YuAeuKfR1X6k7HwDf",
  "key7": "2fm4eVAGmURVWfgRiPheAgt6GGP17ev1MRBGYALfiaPXjvxmyWwiZ7CDRMRsvcSJjRXfPs2A81Lng2gK8JZPPagw",
  "key8": "4XQjAvibHGiMCQ6vw8bjVzhck2KE2KSV7TULncVQwBFafMH66Ff9xoxRTejjJQJvEQoVDu1o3PzRrk5jnqvPGvMJ",
  "key9": "2rc699najpySBe3p6rDKGiGdrTgrDaEcGdUMg1enWsrLLGGiZbfeQgyDmMaCqH4M9KEcUjmCte5czYC8z3jdu5ui",
  "key10": "5AbiFFivFhSqiLHbqWVCGKxTmfEzadU5KVNNVK89srQQr1x4gxcvhYYhfAJFUBw9Bct7E93Qk6dx7aUrGYo1UhdE",
  "key11": "3jaaP1TSHSWDUYCBbFNXFDHkqt3xXWcZJieosBjGsFtqFkXtiy2LKY6RPR5o78G315YoNkpCX7bP8cYSLcPkALKv",
  "key12": "2AUzkqq84QRVfQoMbKAhMbYoMHhCYfWmMkcva8Gm1RFiVvTfXFTJdgnY6ES9bxNoZnuq9vQVgr1f8aLMpuynJFGC",
  "key13": "4BaCWHpWEupxC14gzAeAhvGnpW4UF24bKuFSUjisCCncyMGuYG26vGDYZDE9NE1Cx2R9kCAT5PfW2zZK2T73dMiy",
  "key14": "2ZHgH8TruA8XtNwoXjTJqrtcdofANoBnEtbkjczsnEAxojDQoezwqbEUc5nE1qckRTwHJq6qN9cYsRUeS6c8mWPe",
  "key15": "434dxZn4pNjB5xNTGwvZoVfuYSCRJnKad7eVMTFKZR9aMWTM1mpt8KJ8yGzWFqDQpbP4WXMdGANjoAFAk4Q9ktHG",
  "key16": "2N7P67MgtMsHweP7FEg8NhVP3s6BRTrAc48H9qj8NqrzhgyDpWuq6uohgJrMS2JaMK5fpmrvCzqAZF4Zz5CTZn5n",
  "key17": "tw8W61J4v6T7F1eDxxmBipKQjv8fdAmMENKQkwgQSrgEmq3pWeptTVV5Nvm97LrJ7sV3NhoV872yG1pAebwvcu2",
  "key18": "3dNmDW2SsuRemEGiPiWBZ7T6se7oqXeBrL9n1a4WR2ZGC1jLX8GSrGpet4GYNyj7YGM8j1qjNNBMGS9QXiXGa3Wv",
  "key19": "639u86VwBWXjz44vmr5pwd7eD6NVMM2qY3GdeDuHzHqZbMo3RxQCdCed9ksJJixBvfkE7vBJ5ekLdnkkku8AgZ9m",
  "key20": "48i2dnMzCLb2sWyo8RLRiSECbEcFmHhq1hbfXcbuYy8YiWs6UU4mbbtJ2gnzLYonCKvcVDMnmziTyHv5R9g4fc5V",
  "key21": "59BAqtjVHUfbpLNoY8C34onfCP72AQKs9MNCo93gwYn8A7dtgenYBQwb23Yue7Y1mSPsDDL16QnktrTHQrdxCacS",
  "key22": "3LdfVJ9FHGGwkn3jv4vXR2nVHB4AzyNpcpRhAWp55r8xGeW195AfD8mDaZVKdH9F6La5uKgu7DtCbiNTnxBpji1X",
  "key23": "GSAqU1BEWFL9iZ9EAsrhAJ99zekJvCJpTH4bUUiidC88hyhc7Kayv5PaFmki4wXeUaCj1QxrbVtG5coQa6xSPf3",
  "key24": "FjyAgMYT9i4Mc4dySGuqZYMTGzacABaWQWNR5pnPqKboxtJRsxtHJMbowx7xjivqcER1z5roPjheA14VL7bXVFy",
  "key25": "27kJpBDeXJoWqT3bbRm19KbGuyW2LZNF64rKp1vUYjzjo1wZure7XP7JrxFFq9w9chN7m5A5RagfdDV1PCVJppP8",
  "key26": "59B4SX8DSUyJ1jF7PcQuQ7movtcSS8wD5nMzBcW1PMj7EBvoxsXeZ6hACqEoH77hYkHdX2GnhgwnfqQTRqRqU11G",
  "key27": "41WYiRSnoG7pEMoA58H9HWjT7FyH8ThLwySQdagB1EeAsNPu12jkbnTLcuMk73HV7mcSHeVRmL8PbSyeTENPB1ei",
  "key28": "25h5peF8QXssk55EAU6qoEjLHFXgN9ALLeSG3KBbrxnzvHx6H4UAN8HUofduk1xm7WH5S2NXWsHSCK2vdhjC5h9r",
  "key29": "2abF6JUUH6SNB7o3oJygsn3mQ2eCwReYzKDAhgXuNBv4WSEX4xCqhhXmN3dJLhnzTedcKTaASWYScmhp8ArdxAL7",
  "key30": "35UpgiJUJsiuLJSv7nGTVLgn3dkjHSJdK8Tm7AtnwT9VgLAdrg7di45SgLf7b2mXUaGNFga536pA7Fk2Tr2e8KJA",
  "key31": "51UCvxqzSpMKAi8pMHiRD5SCL9GFfzELo927BMkVJqaBP6jo5k5tuUG5TDi3hMy6V2qUtJnUE49yhKSHVKAekUBt",
  "key32": "4twBpMKBXBMtdrmG2hfxNL53rfnXPUvZaVHV93FMU7oUtbGn4JFZsD766T19qG41VjeWaob1SuAyazdZgebXT5w6",
  "key33": "9WhnyADKV9hSmc1PfMEwSXpj2VXNta2W4etCrHAsWj7RveoZ1kjdUs9pwTxXkXwYejgQ5daotzRPBGUFnPvBtuG",
  "key34": "3UXkfXW1RraZCPEX4socBJMxfGbRw5pDbQKGfMjwsMxa2gtLVh4p1zuYkYSExMAeVecf7oEc6XM268gkbvzTs6fV",
  "key35": "jzGZWshWS1phoPt19S7FrHCUWNzSxL4i4k6zyzjKfhQqAKuwYbgM5MkBwNs8qLtFok1YWWWco122bZwaMUP9eBg",
  "key36": "5aG15AuMvVMkmDQchPhTMkhAf6DwNA61p6o1ML6ASatEiN8K7UUzG8DavVAD6cHEqphZaURjFN6SbYJ4iTf5ooyg",
  "key37": "3gSGHoho96EvMPMJXoT3UbSe7aJhjh9usqAEf4Go9M1Fa8ohYoCrgWVNv7MruuPgZ83BTQMsjGc9X6rbLSQWkZ1Q",
  "key38": "hcEKciqkp4jUNgSYk2fhoRJMZPtxy538jzfy9zq3TQmHu6nJG2aRpF7sdFkKmsB9JXvTm9E1b3CAJ2ud1gmp9Dm",
  "key39": "BnqQaogmZTVj42MZqxZsvRnaiujNCsm6rQJ3MCdxifrrURLut9k9ji3SYNR2Mbe1ZUGapPSzTTMNfaftGF9aLUU",
  "key40": "gnnHkoqdCkZP2BGkGu6t2NNtuHxgL7FRUFv2XY2i5Q2WtHywLef4L7of2kbns2PwbGVn2fcWzFGvC27v9qSQ9pv",
  "key41": "2eXUtqcZaDBhsR7WoppDjgz7b2zqxU8kukDgFAosoAd5T4GGf1hubF8mi6LFVdmKwD2HVQb8mW5ZE99MjzSc7H5",
  "key42": "34goiLFKPhoBacoYaJhti3zWo6bF96vF5WPo9hJr9aCurQKWHQMknT8HEmRPuRRcWThSKhX5Ag6DcELZMhzdt1fV"
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
