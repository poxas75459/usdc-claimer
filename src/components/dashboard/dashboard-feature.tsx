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
    "2p4sRYMN3gB7oUCXc3jccHtJkhQi4jyR2pqU8g9jqeKAyaaQdunY3ya9E4UP4AGfZXaenxM9pUuBWQaS8kTLXvXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T134AjuEWSJm8CRv5qQP8K5uX8UXSWs2nvYv5qQLjvWphzyYHMfKhabxUdz5FySSxWjE9tAvDA55hUaDKhAaTA6",
  "key1": "5HdcxdUyhp647LZTDdh5VhfEek3Vm2U1eKFvw6fi8aX2agR8krurJTr7f8oKVg4qKAN8JBpQfHAsNhde7U6Lk85k",
  "key2": "4ZqWthnGhQVc6hNXBw516ShTHRzQWGMR4KEzC2c8RiaDcnBF92GqFjXinvFYBVRw7joaRv2yqzS5tugMpnvCFdyS",
  "key3": "4b8eNnitAmc1S7SmTzCkVzRtYYggxigsXrL7mbc8SRtMb1nWdhJ8obV8vigQRCtjRfPX3r58p2wZsk623TQ5AP5Q",
  "key4": "5FyRCpQQNazPHpncWh5oYiFvHvNBc4FoVzZkj7QSaXNP51qfS8Yocv1tGvF6yJKGdBjB3yFUHfMHhn4jP6eFyWwd",
  "key5": "2cqNn2aBuqtcJRbErrbQ9Ae1gxst391HfAGUaCeHqP8d9zxJHibLQz4zoBKo67Dbi7tvkm5gEvyPj17MV3wcXXgR",
  "key6": "XHDMtq2w3Ag4RwDMWK9ivxPvaHrM4LQ8HxRcYn1xiqC36dkUuw9CrEHWw1QVQMT49Ai8PnP7W13q6d1z18kyxTB",
  "key7": "4LZBFMGgbgZGXKayDcuZTUnjwkqHW3DoQ4Cny2AL5VLVvsuhK4bQNS1ATwN1Q44a9N7V4MfWKWF8dZYRSqvcUgUU",
  "key8": "zfiUDAry2GzoFyAQypVsreB2h3eE9VMrhaqumq2v6eTcqfpFRp4ur4BnzrEEGtx792SfWTDbdmPDz5NxCrYEbL8",
  "key9": "KpauDm4Pdsht2nijgBJKavZsRHwgQN4zqkU3cGdederc7s8nXquALNZFvCycfetk8k2qUDgEbakMB9xuMG3n8gG",
  "key10": "44CgTRAtDsA28BEV7hDMjQaGFA93yQztUnBkjkLkjEiDCkf1H1wZhfaQyrWxkE5R2DPg1Z5HrZDNvyHr5p2MYwhJ",
  "key11": "47RgbvHxD439LRTWD6tXSWNqN1YE9n6tF7FAM5XPs1KDGzht7wdsBAQjCU8SR3We61Fts32fJ3jnUW1dM8tF8tgT",
  "key12": "66HuzFy7vc66MtFFGpmdBQmZLpZy91kNBG6nPrbzwJokBbhJXAq8bQ2snS5u61sRTn5vEAZAEFP8yBt4b7aPPzSs",
  "key13": "2Jzi56uebJDYktHCvjLbP4PCqvi9dGSVPFsPUJqaVnhchw6ARQCxs9kNdydnvq9AkDk68qmckdT5qqSnM8JzgwJN",
  "key14": "62mFKk982zYqpSCS3RAewPYbnSEPU8xbgfUppYpxAiQfX6SQKT88QpPGvase16uwWrdeSKWuhbQSLofsmVaQhv2L",
  "key15": "3eBpfWKjDufUPwfrGHy7LG1zTyBWU2u52iD74KqDkkqfXvWzrvvhP4JEeqLW7WTkH91BAEYQgncyNRsQku8idLRj",
  "key16": "23sVWsXXrKJmtyULbkvndUhEfqcjMfvvhVGYReJ1yiJ9LgaNohuHkPKsd6atuke64Gb1MP9Fgf7AW6H82fz1Shvd",
  "key17": "2ZA3DAPVviPGmyRWt66bAZsVw8pCKXgAEJy2FE6Kj6hXpHTiWN2yzZWVtAydQaVezU1R2ZyuzT25wKMjingEkfm3",
  "key18": "5XTb4DueG4h2FSdNAWsPJNEDMhhTUYDFqRxS8VuNGHQi8Xpm6n1mV5okqwCGGiQAM5k2RjtKdEyxBJ64Aah5ntRA",
  "key19": "3zS9nBj2w6StNbBsnkFQQFm3mB3RmUV3bqvdd25984LVUvmgwYMZVVceT6H7BP6XyZTbaW7ZyhrzdsKtwAoKFqBq",
  "key20": "4eWJnrtwkQAz9t5JYYSNYcCysiTXQ37rRSwqL3XaXx7pLiDKFuuFjCTiZxWmk1Pxd9KqwhCXoBx5vdNGWQew3BjL",
  "key21": "5r4PsmEPggDmPJBMzoiP2NmMrDSbza2yohns7JgdQDT1By3yuP8c5HUESTTtoUGR5k72Ja3sSgJuudSGCRaP7qAZ",
  "key22": "2BnuDTrXuyX6eZPcTAHnjsb6NHXs92RA7a2ZkF82EVdpTiPsFyEJzBzAoVAsAVtj6c7SD9TfiHX2sTrHY2i5DHcE",
  "key23": "5SPSYiVwPUhN3axYFSwWbRw3t2Gy1yCuxzatitvnMkn8YVYJnyp16aK9k8hQdiECvdooUidTLjZrwatJ1RnmozPj",
  "key24": "66jnPYAfg5g6XNHVh4G8KxauHuo3eB3JPerwPGQXf1inN9zeMjVP33XdAhKcRo44sMaec8hudM42opXmpGq6kLSp",
  "key25": "4nCvHyEobvMNc4CKTsSi8L78qAoM7y1NBXEtpnpV5SnUPBK3rqPzLXcAZHtddrPxzuHtj2VDAq92Mw6MSmGmZLue",
  "key26": "22HGw5H6e6FR3A77qvD1TSo77T7QxGtjt3ZAWjq1afYo6qyYUqwHzXa5u5ruiJzpa8EeinmP8FDZZY93LB1nirVS",
  "key27": "3oePTFXqTk2XejVouCUxG9gYwWV5KbeHjQcb1xvvaTh9NHvwct7Q6WhzXBxuoE8RUr8e3DUK4UxPK175TJtux15U",
  "key28": "35Vxqx6AP8tuomFuxQdPmJiH4Sey8EUbtjCbaJHdAhkN3apVo86JmiTSUB1DTiJgS7dL648ZfCJ7EGUoXyaVr4nb",
  "key29": "4Xti6nSYYSzszpNT84HwBCLxfs2NjhxXsUXqEy7vZU2oVPtc81ezAQh342hdgazp1EAaoDeSz1EUmCn3q6NLeLEM",
  "key30": "5mAFv8ieJ1JRAkeiKmYsuLoeYVjm7vcCqH2w1rZVWjYtfjKGSADhMBEUMptbH7T96tTdZU5aPip97i3je448S2DF",
  "key31": "5YVDJS2VybVN76A88L2hEiFUYu2FYbEfYhak1LsNqWxQY8G9oFMB28rhcCGFLFPGNv4dTwT2BnxEu3Z3ZmKQAZRy",
  "key32": "3NmAwgYgNxnoBp6TEVKWempV26b1kQn4oJbv9S9LkdCJhERfgapW7t7taLTkJu3KiSuPoXeBBU6pX2Hi9FbUGgfy",
  "key33": "4pNUDjKZkCgVD9kU3Kh34JUNSBdDsuiYCNDVR6EctUGw12M3MwFWXvgzGPBjXWeNh7p5SDqUr9WJHfyENw2rvnXF",
  "key34": "c15Fm26AzNk2SoqQ8UytNMnUmEh5HaaYwWdZfnUkLQbq9Mz9fVPxbid33u1chgLnZKCpebfg9NJNs3e84e3C8Nk",
  "key35": "3nMHEmjDg1PGMBaDscoabKkKH37uen6JNGyGpoz3pXEV7P6WU8rLH2ojNKUky2wAftJMspL9CRoo2rpoFiZdBfpd",
  "key36": "hVcytRaVM518CurR8KUAuVDya8NzWS4EHWwvopoBYqcgRb8uxk6fxsdUDpdJJCfNRLioGcGchSYt6n3tMGXjAmU",
  "key37": "gXLUfs1zswbTTkxCdcwYoc22KP3rrVrrTWwyqVuo9H3GuuyvRE8R5zKhNJAue4pvBzpsW1UzRKZpUyTFmhV9jT9",
  "key38": "4LpEtGmSjBV43kTSiQCbVt2dnMo64u7bim1uTM8mtJnFCYi3iMpo6HWHMCpEBKyQrJJkNUsTwFEFQR3oPr75o1Bn",
  "key39": "64tGd4UZdqKjqnRtPVjcwbFxzT2DysbDMHLqTR1a495GXbqYe1w7RGnDCEGE3UgG6UHh6FibT6bTt1dZkxagLGxX"
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
