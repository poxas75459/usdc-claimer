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
    "5jx37Vk6GBptM3a9We8DpdSP2cczhbcjgYnmSCFo2QCrnDLudRWviEicVoDroBpxoF9dQiAWT3ifZVzAzhhWMjRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZ61WQki5Cv9uYpGH2QvuzS7kXyS5ibGxKSEMboGLhX7faHim2HcNmyvMBkrfPFsmYjsyEaiRoxmpTNByeLJHy",
  "key1": "3T8BpfsfZya9gmMqTxjfJL39FBtkcgo8kNjHjnKVG6kPFZeMehE86KCScQGzNoSJt9tG69BUEHLsP3W7cfuKN5Mx",
  "key2": "2qK99KbMeK26Y6RpD5cTq2EN9QYbvue14PJZMMWNkrC8q1nEo8hLQ3iqjJSGbdJjbruPvDMCotFk4wLPTUUTfNoc",
  "key3": "23kCcqBz4zQY6cquttR5ieBkEkPCE9zy51xdcvkQeVtT6VKdBsWSw6hQ6BP2fRtJ41rrejjxVtBrBMe76dqY6EwR",
  "key4": "3RidhuFvKioe5CgfFDSrt2K4yUtYUm6TAjY26pUK8EFhLLcTsGePi9ja5ZGXTe3x1YQT8SYcF9VMDgTCRtL49NzU",
  "key5": "63PzoTmRL9ChH8GvZRt3rZKo3PDs2ZuLHRU6LiXDs3anxJoG93CKj3rVAHELZbicPRdMSPEBA1w8SazD7JAdoH5r",
  "key6": "3Lno6V6u3PkDmcR19aRvU595gK5SWXhgLxvWPyYwDAzwbZQGJr8v9JT2rUdjCi7gwxJgjFx8Pdhpr5swF8FRaR6y",
  "key7": "3wRBiUFVacW5X6Vgs9mNF4Xt7YaGYC3CzHvAinVR96L9kNdjC9cDV12NXpngz6ndT92S2aNvMS6DoKUo9hbaTK1d",
  "key8": "65sUu9oKs9S2BqUJNa9jS4DqYrHUSpTAT8s5c16Uj15nGbBvm8VqQkbTeSQ62ppKeizRn9pQyDHzDgM5misyn8H3",
  "key9": "2jhoNubVwB9C5uZ7FqzaZW4rZGdaxLsh9VuVW4stpbBfiiv9BKy9H7rG6A9LocsK6tpg14GtjPXybSYaBCfJtRYX",
  "key10": "4ymSzjv1UErZAJveTQNg2obYRMZfueHUXkym8neMqXXvrhu9rEW1XSqFNTqTBijQWmwRh43BsyPYse2HsHb3id2a",
  "key11": "4J4U5uqH8qvUoAxKeUvqY15ACvM2wU95sZxNuUfThhD793oQFFQKSu6EvBnmfiToSq5M59MpBwSSkEEzr8tWuKH2",
  "key12": "49JKjCJU8d9fLidx2XqJ26CgQGrgYwkvRNtQDxCjQhTYMtJ4ooXW8wNQkyYmwYmtAd78PdDvMg8RLFBLzJCqX4oy",
  "key13": "2dyamcRcPUbtYeatctYcoX86tMsWVP4Am4TrdZ58Y9NRKzBDWPp31KckvNkbCWSKrQCZvo44zMZiH7dbZMJSR9vQ",
  "key14": "48hgkAraP1fSVs3AjuQHjF5UzLzrozGLjWVb85eWBeFEJj5oLDbpTT3X1CaML8drhsruemmYwYMFfpSw9ytmzTba",
  "key15": "5KYa43tWd3JBGUKYUxfQVkgxD7VzMqqUQCwJCsC2aEry8VTxP3N52DPkRbybiNRNaktKH8Nk9XgMm2oKzu4zLoHg",
  "key16": "kD7KNEPia7PgiD8NQtoGuarNBqqdYPXHHQ1bKcER9oQA4qm6jdCFiMTKDR7bKQ56YGfCpaeu4spDuMzyRyMydJR",
  "key17": "U7p75AjC6p1wfXCmk5vUXMzCfTe9ssaeeKPLHh7Mvm72DK7xnUCd1roCfcM1dxRMQ66zVP5mYmgN88doeLJc7Ub",
  "key18": "4CPHZpjv4LC4B26Wxc7txooPsJRTVxgua2ZAjbFqfNStw5uzvaLxxgRTsAuokG8yWhFudq6upyuMBq3wv32fBjLp",
  "key19": "4zZfb6V7RDgfrFZRbcvETqdCqXn3hk64fN21V7BqC3svTxNkN6WtX9FS69n5BXdHksKjH5kZjApGREJ89fme3cht",
  "key20": "cpTNLMUyttBV6kUtLGjyhUFJUMY1kZ9z1ZVBEtqGY7CSMZtkac4MrRYZ1p9LHWfh6behqx7sowPVvj3NxY6Z2AT",
  "key21": "3oZaavn3dWk5N5yvBxAzBJr5kqz4BHgx3L2KWSE9q8fuWTfskKDv16ZAqijBmfDToXDyzSAKXUqWWLeT4Gtb1KyS",
  "key22": "2kPWDKpsQ63zPan34ZicibcWyrtvkEaZ4WpNEbw63KZvFvcgWTqHfdv3hw2Z88FfCEj6wL6RnBDrmBmziZ5ZcbjL",
  "key23": "kj68Qd7iM1TVA78ezECTwemmZBxQmGcZnA6dRjZHS4jHZL6P7E422wC6KB7DWJj6xJLc3nFseENGAEcmjA9VUk6",
  "key24": "4F6GNz1g78xREizhToEvena3DsTEMsj2HtE2miLjx4nwWPBEymtPAdkxD3BwKkpaYsNrUFQL5MpfJERj8FGR9HcW",
  "key25": "673tgk3sajqUFXV7CGwH6f2Pi2kWHjgYffe9jzMx3F6MxoQwcAvyrDgQwG75uzjcGCZQz4yxN3J7vdVix2iWmeUb",
  "key26": "3aFkL9HUqkFQiVYJJfierKe44a9CDmDVDqExnCwzpdz3AjGtkXWXGRJUYgekW6VNUTenuVPvED7cLWTW7war52Dk",
  "key27": "4udNsydqxsbYpVCqu7DZbDoqCoqj6bHgyQn32RafvhorBPtRoZ56wprtqgkZ4nzcFuMpmEykV7R2nc5vwcrNwrcg",
  "key28": "2QUNWv9xpsGNQMhruMnY8ozYV1jad6hcHqabkoCYys6pFMG59YRLB56aQ7jfZqJ2rfBSqJpq2YNw4XKSCY8s6yTH",
  "key29": "5hQiYBSKexYGwWJKxVtyZbC4NZamk9YkMY8zgCA6kxXS24okeL6ecLkcmCGfvzC8AFWxJ5T6UZPyzFadm2Qmiwpu",
  "key30": "kXncejLvW2Nm9GrZbPBuaZsbmhTZS446fdFRspRnZF2pDALnknc5AzJCpsAeWF7D8Ahk7zDUEivYRBVbmV8ebSM",
  "key31": "MvPUFuhVG1P9LWm578e1v98J3W6omk7N6KrhyC6wfkJRtiGc9SZfXfVAW8fVKhUuYNPw1cxU2M8XKWniZhWPv3R",
  "key32": "4P2DPnm6YLyDjE8v8sRg4qKjo6HMQnTEzUQn7Pas1UzMZd9DVHcpiYNFsZerfiNGNYuQmwwCpPSfmVEy8QgQCuUB",
  "key33": "2mnaWEAsLxQhnFEAQ2giebsXbNzFrEEFLdTind4fYTFdLron5rQshMz5CAqC57F3LMufjBYvrPdU19GXSWzcZKNt",
  "key34": "4EQzmPvhHxTW2twPUAvJZEZtkLdqkcAfCKsmwrMb1hFyTZZASsqSZL7YDGnVY9N6PAhHQD6uBKSvuA78nPz3btbX",
  "key35": "4ds9EKGGefcHuoGZdwxR7QRuw9W48aACCrhSMCuMh9LYhou2vbmJD76pzWNcNHfXBeuHD1FgmWeszab64f7emde5",
  "key36": "3BQFtNxPcHUzAm2jhcDRGQGNfnuwxhpetGHsXGk6eXcozpfQ1eGai5GJkjLmAr9r4ywEFzECJMvLoXnVwhntpsjK",
  "key37": "JMid4V9thTtPDa1EmKfsc77aWgKwTbdp7V7P5eye4zHwcKob5A51ZTh3nNXCTqSdpMCCsQYuKbSn2inGXzGHfxz",
  "key38": "5E1Fsc6LEP7tqMZSCkoPnAwQsCgxyvMremjwEBXV55jYA3E7rwhS7VHU1EzaPQ3ZsbSeQ4u9Hnopn6PmR6aJViJb",
  "key39": "5kFUcQ6fwaLbB9BxRjomDvp7Gonab5Gq1numawb1vu1fqvvAXgD45KUeiF4J2JvmVsFVPy9xcigVTpqRU5FzpJgt",
  "key40": "23695DnBYMSsE3eTLWpNWpAt8hLarjtXg7MzKuCK92uA4F3jKHxaP2xVCpabBWPmn1J3xHZP5mC4VTn7LFod6sfc"
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
