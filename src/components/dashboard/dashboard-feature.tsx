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
    "5KKL83heXuMBdoqmn69e2KQ7ySCpQYLLp7Z9aFfxrN7B8ue4ZtaZ6tyi16HsN5U4u6XoYRzeayq6Ma7Vq5E5tbYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZaKaEESYuNDA2babMutdCd92Kg22kzNoy2nLZrV8hsmwu6z5gDsQa1wFxBRtQF8MRA8AtF7kCi6noJ6ozYCh2Dc",
  "key1": "FKnYiFdpT5JujFPqNiu1iUuxa7XqwYLZvhNzqfZkz1CjJ4Agr73ihkm2uD32xzocGnZAqwSDRwEcrzzxWz7Bkr5",
  "key2": "2nWCKghaScej7NaPFSbqWeujiLkDYYB2RutULpfdTz15wYxBgjiadTCJHiZPExvcDZjvxDdCusfP4tWn6zmt13ef",
  "key3": "2wGtS5BNBYNwPXp2yPN7RfXiPVZhAKF81ANBxnhmrwTSGutPAUMre3npHDdPZ7ULCLoqXzopWWu3N4rQoVCJwKoY",
  "key4": "5f7jkborKoT7Z5bGMkjzUu5uLhtQgdUgtNpszFXvb7CdCWX87pqnKoWbBZo93z3MUAJnG6C5hofozXJRKfkuKwGJ",
  "key5": "3KVCqnFMPAJsiB5s6ZhzsdXnazx8CogwkD1Z4LJHF2PnFets2X3R7PYMoUEuB7xWFwqFXaPQXJayzcELWYncDs7U",
  "key6": "5nDrAgayLq2s96GyeGgR8XUmFPofuzLw4vhB3Y6tugdMWxLoAw8LCJFQBj2ympxs7bjPhZmY9WM5oCMuTgGrTgMw",
  "key7": "3zYHZp6CTZ3NcCBETPCEhz6mRFWSLHm3mZPMaefQVRMH2jPs7Pgfe8gR2q54qs2VFGZhHBA3wRNTWGwQT9Lzgfo3",
  "key8": "5tipSJvki4Qki5WqFDvXtKLhugvNYZ4T1xztHtZwSSSoZJmyKQqshz6xUbAarnYskUjpaN5YNEf8RBiVhkgTen25",
  "key9": "5UmK87gACXRMTGyGTTmZ8JZFhHKVMzaradbDjVsCELRBjH6gt3Uhg6pr1RWnPhW8PuYnJwyKPwV3Meo6Lt7jSx3U",
  "key10": "5J2euK3LTrzcQJMBVy1UHbNnfGpD3eGW7jBLp7LJwNeEygkcKBtGh94o1XruT91gbZyEYu6GTpLMnH1SsimL8EY4",
  "key11": "4SWN1qvy3VeqbFstGA66ChYeyyjr8eVS3BLn4p8WmwJd3ix3Mivs4UinifcMpvhbovpAyJ2qC9ycRFsdawmBzFj2",
  "key12": "2992x3NetLZ9XD8kLdiXgfFUbjFgPMYEPMgkAVL8fbw9suMKgThajjy2SF7fYyXPzLXFAkonbadGRKBJFAdJrGFv",
  "key13": "4QDGfbSk7EQLfQeB9s2kNuzUP5DzHG5LqXk8HrUiieCEbH1pfqdPygCghuXSCsqsKZ2LjY4HFEBCYwYdUyBBHHGY",
  "key14": "2psUrZMDtEGQGY66peMKPUnxhKxLgv5wjsgYaQS9Z5SYVyyGxaJDNfstzkbgMQDUsZfJhmUThAW1jHAmfwMqb8bS",
  "key15": "4CKW6A5TjY4g9jZcJ88NGUjvx8E5JQfRjG24LiMbnfDGhKWvqnX76v5nHnEbPiqkEDzQTH2v6T467wRLASJexXsM",
  "key16": "55Ef3WS7P7CJe1HjPQLsVCm4bt52dWPMSaq2UZQUu9CvhDwthevib5U8B6BCHiRp37L8WwVWi4KZq7MPJK6Lbxf1",
  "key17": "3MLWGCVj7pLJDsoW3euFfGH6Kpfogdst6eGJe6HMGrYjYzeReKqBvgrF9Yv6Sh6zqQJ1bgLxHDL4JmQCkuYp67wR",
  "key18": "5aAjLXWksRKN8X57R2ujGywND4cyTYLrtqKPqVe4wJbJtwjXtGedqHFRJUvzLZugEpv5ThcFThiwvJ5SXoJcn4N9",
  "key19": "2UJE7wUhN13Fm3mvPdpdEcaJ5EAtaVUYY88iPfwPw2JGN7AVxXSEHTmPtwuW3Fvxqj8VfkEMqHnpz2DGEvm7rYcH",
  "key20": "3YS42x6hJ5Pd7pvDid7DC4yEYKPw9SeKpwvTpLxEzgbPc9BWKP9jaUbEoPf9ogkrgduWF3qjTA6CF7sT6UXTU7QZ",
  "key21": "58uDWUVHKYFhQFN4Ymo8fMb2SKLfpiGAybjpxptD95R8E1SGjweMAmDDoXnHEy3s5t1rEKCP5tfJMzP9BR3vVKPL",
  "key22": "29zt29pcvxGQQMX1vqoYvdziCqojWZjE9XG9BDi8Z6iLmycpU7cxEg9CXSGbnq8MhBntzRfuuGtUVK4pFY1WTus9",
  "key23": "5n5QouFU5vePse3A6vTKkcDMax9cbCsSijP4djddvmLK13mJawqPaK9eoE4L36HM3n8J9dCtTz73VY4TQCAhkBsM",
  "key24": "2Ug7izxdgbsGgzUudSoRr3sMTMr4aEaGYLKmcogxrpE9D1pP4AgQoxMBGTZePZY6Z31VNhUCqkgZccawLdVgfhgm",
  "key25": "4kDnZ23pPJDABEN3GrVg7rkZEzFWw8DH6x65nRsKuCCPaDcbD8jjsHJE3WcXnCcBxUwR8EHWJMqjqyYftXq3WVRx",
  "key26": "5ispgj1QZZ8dfLoGHXDUMXHjza9y6zUPYoc73dt76oxz78qrbidBneoq1qgZLsBJsjiwL52tn49i97neCUauoJ6U",
  "key27": "4dRvxX9UwYMqykitDVkgz7x2Uo2NtwEgbNP2hM8sAVS2tZCRt8By1pXDac9ZoPoPhRXGDvGtNJc1v2rCKdhyJ4Kx",
  "key28": "5yHyZNMUitA9eqbR7YcBcQfdV9XSVT9wJzHHzgDBZf9qW5imp8kqbECoaQEvZywidQAcrdWbpxAkkpvL43eeVm9G",
  "key29": "3uU3JrkXS979DLkh2EPiguM9GUQ7nDgVJEMyWjpjbCdFiLr4QvZZ424mxW94XyfdMs3XZ11zC3AqkQDdpLRjPMGz",
  "key30": "5UN9RZrjfP95gcNPEERyJrdvRUtSLTMxVaEGRcGGrzmR72PvRFaMmgLF9QFkhjxrXdBdWqFKf5bS4XR3LfbFxWi8",
  "key31": "5AZt5Gd1pyNpXTBHf3mYLEciepHLGvsmrVudBmS7L3cKCTGCkLez87K637UnUjX1ydpEmBQE8dXeouU7FmhnSmVn",
  "key32": "5qqNkbrHtomc2DkbPTtqnuDLEMKjhfWvu7MvZd8Mwvp5YeoEQTu74L2HNCEv19xve9bfqYrx6gppQ9Mmqxsjptht",
  "key33": "45FWGhgyYGUkM61JDyoEeBxFJsDjVTPMKpPGWJ7xPQQkHnFb65bxyhsS78q7hoEsCYsF6BYe4ANXfKddcYQU5CmS",
  "key34": "4GpoiNgcYT4wqT2TfnYZYaYDqMmnVUixxJf6ay8aw7KJ3EHkRDHv1gGRtsTr2BeRBqMqdRsmW6gimEGEJQfctoM8",
  "key35": "4SrB66iCbuynkkNhJ3KFuVfgkfKmXEngMHATrij9W9gZxaRjHsfvNR86FDr5JaSKj52M4Trz1K95AK3wQCUQv6Zq",
  "key36": "4XMC7seWRk5MphvoCauK23ewextwuefqfFA5aqGwaFHKZXv9JXEwLW4y1qwVSWpMU7ZuLNDmiFMKd4EcsxFpSd3c",
  "key37": "2QsMdyegCdn7oepxpu6jSkat69Y6CiN6DWqiwo512XB4gNruC5tH7fg3dawH9q7GQwNbWGEx6pfTYPUNus973FH3",
  "key38": "3oWrH1cigFeWEx19Nk9DZwnfmei4a3pou6rDkzuwiHGg5QZWWTw6PHq1czHP8VrowjeLSkn72e15rKtsRgAXn7uY"
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
