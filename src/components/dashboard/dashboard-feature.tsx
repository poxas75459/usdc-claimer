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
    "48zHTAzWny2kbDMDpVGeghgmk3t6x364vvQXRiiwosXTVRNZHPVnAnm23J9RnKqmH5fUveQRzQjow6A449yvPsw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhjNpxSth95qC8FBH5VSjvhtrx2VkjKUZzGR1xNSFimjG7dq57P2dgf1CfaHf8LKHHb1EoJgfvqZhh3GrqevcPg",
  "key1": "FmnpFXL8jNMYf7q6vyD1vz5qMX2A3PaidHQdfAQb5dpZuSBFeK7j1FDUN5xsxFpMFn1Xzh3PZq8FxRM5fsCf5jT",
  "key2": "HxL2hwRSz3CMhmtuLZp672YT2T9XNfD4MmqYuK4TidBy8893bkP3KzCsoQADhAhFU79XTfhVCw2pJqYCpfnrcsa",
  "key3": "3jVen1FHqn88hLKygwv8iLCjsQdTQF8Baki6aRJ3XNaLte68vdXZcYDtqbHKb3WtCwZcdeNTTQ6Xy6Us2ZneyfbU",
  "key4": "4fRMmtxMX1aj1W3haZjk3Bi42Pn6rtgfcQFeF7bBmRyG5ugNHxExvd24QDq5GoypuXDFM5LUD9aC7BEVNB84arNH",
  "key5": "3rJ4n4eEoJc7RyuGBprF5RhvTMX33TdHCmaSGz8TjX9MUYqrhqDrb7TE9Eje1R6rsQf9BSCFaFRj5CMEX3eFAjjg",
  "key6": "Dgx6rmghkWos3PEvfWVCjLyN7tueDkjxPTf31WG5LThpKLBKK9JFXgtJ4W5H76HuQ3pGnaKYQtmzW9yZo9RcMCg",
  "key7": "3DN2kCNY1b4u2tS65QJKwQYMAbMkpxz2FEJWjZsawUGNBueS711RGfwNbx4Q88f2ZuCxUCvf5RYDVkxp9S8CXmv9",
  "key8": "58EDfpUxGogUccUpYH3YRsFTtvhcnAX5moqj3PKhmc3oZnGTJeYvdfCQH6mv8mQPse5NiBZAF8mrtAchWF811M21",
  "key9": "2AdTSXucQXxLXwpNFc2NZPBCJsUJ6CyZwvHTGuchgn22Bb9kM1VEpqB1v6ExgqWBbaYyfdaf8JFMTaCTZX3GRiex",
  "key10": "2nvi9Cv98tVDQkAgVBwBvd2hRU3mpWGQkzYVm21xEJN7Lf4co5RuMfU79XHoJXFn3yK2DR2EqEbQcGvfZJFLhHXy",
  "key11": "4ifHKGhUGHLAcoaD5KGdZPXprt473XWWLe4KQbmiQfu3V5QfVMfAVWZNH9fjLFCdKBebMwEoaY3Q8NQ3rDVrLoZF",
  "key12": "3GxKjdcuEQLUYMfUGtxJoE34Sp79te1WQ49e5C2bKv1ybRBScEvv2aCDnMXoeauXhNNERVdm7FDCngzC8r36Auxf",
  "key13": "5GveZ5s1zoH3qvtDhyCoyS4dapdKYFdnKiWtRKmadh5TTS6EHkR9gL2d6j9epAwjoUjzVR5Fn6dCwqJey9fEpkTj",
  "key14": "5aZA21VpKfUVwyZ3aDqM8Uat7D3Z9U9jJxDPphifZcLWaChihJrYgUufkujFRfJxVBQ3dbsLMpkRDJ6pHNGQjTe6",
  "key15": "2tknjZTGqXu4Awkm1vB9tVzu6u2ciYCthX9HZKX5U22kFMmXrvHCdiZ6FAJghHm6iBWdszMTjDHEc8Nt9FhzaQp1",
  "key16": "5YgJxbC69KPjEV8PwDzSXVQ7dkMNABqMz9pJNs8Ma9kcsQEhQQsiBj8BKbqBxWVzfL3NTT4SNK891ppsRVPJpuWK",
  "key17": "1u7DUxb5D6CpeX3NSgnAWzeGwG7ie9HBpek8p9sryYUioLcVUzYgsoEbcxrtqXXrqEg1xjvXuJn9cssjWminybL",
  "key18": "12NibYVDnWENc7mm1AczzUQq4J5ghou1eCsz9gKTPgVCeE1vNWH9Jf1bgWmwwg4PfPycttx6yqqxYvTkJfgeHtk",
  "key19": "4xSFhqZNkV4WwGaxyXxa2ceekD1k24ApPq8EEvDfVPvZfCqjH72cJbjp3jRQcwUFduUaPsWD9snKXU1oNjCZqMCH",
  "key20": "3Dv4ChJuR9JnNKJ3b8CSTKjRf6P2Euhgs7EYa1HyD8GP2pYNRq8ETKdcJXLYBZnLnJdGZ2iEhgH8aZpessc6bduB",
  "key21": "4uWwJFfEREb3VhtMWV46exYiomkS48MtnBvfECMrrpS6qgnvA1PJXCn5MGegEegaNS8RSXdZghaKMSeKbHhfDBFf",
  "key22": "CfFx6YYsh84aViu4jYsyBKbDKSpPDqZzWLvDnAubE6ZNsmJEB6LnhVyjuLzhNiqkb8Hy3Gbb7qfxXbUVtXTKySA",
  "key23": "47B14bWb697JSbh5ywkCKvygeT3wrtYwstpC9eTEjPMYKEzr6ppHRL2au7itGBxeCPqcRqWtVNWTbTng7HvKxPec",
  "key24": "3etVjonG94BspWqXApq92Qud59b1tpc4vDsGwoWYUWMTE9cWZ8FZbKDLAK39MA4W3suy8BxNbbdimYkSFoQMYxc9",
  "key25": "eCJ17Q2E8pyJdqhBwbiFpTcy47eaUr5o2VqwiM3UnwgJTVa9eJHBermubTKkzDmFzfnvAosVALsExEvvVutv1GR",
  "key26": "3gUdMXFWGPwXpZfJNS1vdVZjLNzqk2exQofdrhA9P4xpkCKFhBzX7H83QztPEdyduieisgh4CZqdiSxFB31EHyrn",
  "key27": "4dndYf4411cgvqNMTeKLUzy1ghL5XFjb4JAna1QWZDC5ckRZNv3aM9x86uxbzHzCCsJAu2JW9HEdjaznoY2RhTma",
  "key28": "5yJ8zX9Z6CRNuvzA8KPLnXuVmah8EmNTiy2LWWoFtxAsbaXnWQqiNtfuSQ5ucDJ8wG8FcHkNASoQtKC6Py4syK2d",
  "key29": "2x9wMa4uxtEDTTsN7y5inLvFJFZcDQ5KHicKBJFznZDjQpwRFHj5DjiXDJmCMecGdYUFRx2LbRjag5badvGu2LAS",
  "key30": "3tUx76TPYpBGbNe6zvbsQkgQnT5d88qNELZynVjs3BVU93GhasJgqefRACKAhptZjpwJxyDE3ut4G2AQgZ9Lj47s",
  "key31": "xphiQTMtZgYMSvbcQFQuWrUj1jG3zK612JEYV955f6cH2gQgBULSvdJvwj381X3zDLgcJLApedHJmkNE2eoQtuz",
  "key32": "5o9tX83GD1ARahST9p6ypGEzk3nN1Z3EaEaeqdXaqaAbZkUMs1xAqiPJcHhoswkxZoe4uUcEdXgRnjLqy9aT3MRv",
  "key33": "4qCS6acuiovMUsiYr1zxXRwPpPUbuAyVKhWpaMZQdCPaAoHX35WD5SrGBQgHcSdPnWvsMQUywZRPLy2fCMQaRNkq",
  "key34": "nGeZLT8YRMJsdPUzDJuTJt4qvyGP62BRUZCewPLW1r6ph5TWoZwmCrWp9JruWdKnG4xob7Z15DnQBGYALEWy1m4",
  "key35": "5GVuVbgwoUeNbGzyDixT54n1KZWa3aZJm9tKzNqr3pdxFq3JpgaXf3r8TGzPSiyb87B3wKJKwhagW7BYiNUt1PQS",
  "key36": "31NTQE4ZjuMrKQUg1zaUZY9f3FPwTvQrJChEuZmP7XcmQtaXqzt26fBjmBoULHppGz6g4nB6dnCqmQrcAfmaB8Lg",
  "key37": "qzkARFKrmUH8qUvqJ3XvgPkmhZp9Skim7KpgzMuovioX6tNj1QoQMdvR19RdJ6JbpiaeKTikQvCKWpSa64RjNuf"
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
