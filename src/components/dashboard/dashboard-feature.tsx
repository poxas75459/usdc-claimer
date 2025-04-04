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
    "5P6e6sNxhghNP89ug6sKxyvfSyFbukUmhfEeEj1QGaPDm1Uytzs6gRbF7n1TFCpq25MFgtEvR6eFTitLsCbFT2ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APzw57d8kb5K3keJzF3WQYPbdUYKKrDogamTppNZeAyQizocjz55w2p5wUvsiCZULkxsMwcJrw45QHZrzrwYHQs",
  "key1": "33ARZXZGnsrizEP8x3Gi7ZxW3vejsmeT3TuaDQYqzAw45XyPCtkykbKVTnLfkdCoiPmggEVJrKLmhTP4vcoTpcU5",
  "key2": "4AxMN283Upv7gGSa9s1HqGHefgjMEV2rMTnBCfBSnSdTWLaQGhaGqru9h5MR1hPKQP8WbcmPZ5o2qwQCD2Y12qoi",
  "key3": "5Gd1RNSti7DwCjPJa2Kcx8EF9qKbZzFAyRHgQrP7bAW4FtWVAG3crjPz9LByefpVL1ni995cKTmbVsR9R353wCJk",
  "key4": "2HDSS7QjobRhPn5NqHAUnq8BFgVwMdQhRQ2XjhwbFo1SsJAW8E5ScyuRLVyMccfG7GAJCjSb2FWCvoyqFBYtDDDm",
  "key5": "2FffDyScD7QtPzZzcgk6XPAsfGrh2vk9APPn4vV2Q5pFjbF7hPCh6kFwu21hM6GuDw3hMaybCowbFkDAsDx8RLj5",
  "key6": "2N3d13Pr8gd5jXBgzZ2qZQuB5McgoCwaPPSHjcKhPpZNzYshE4Rk5CFwegkiRRU5oBQY88Q1J8yjWNxbyF7hwGF2",
  "key7": "4WPbN4wnVTANykef8GnWgERoDbdTda8TNNV8qHbGxQu58Bja8DhNmdvySkGiKTNU53zhhBDV8kTewJZj53wSpHPb",
  "key8": "2YpfdeUZx1LNMSTc9LHxp636vLbZDLw6f7erAfWswFmnL1TrWmHVTtfbA9zUQBhwYBH7PnRaoLPJnGE56M6STFqJ",
  "key9": "d1JdaxSYFUJuANCFaaUNuvP361V1JcaSCYuir6YtWfBJb6zaAVjLj9owo8MuSr2fjr7Br1LixEZaJkajL3tVBhT",
  "key10": "2pqBgc4uo5s1dsRVrazAWoSxtmZLe8s975EvfEQYYmodCLuksxwHxFXQdWv8iyu7UvjTuKS7Ub9Q3Run3ewfvPiH",
  "key11": "39f7GF6xh7UoeWBgnyeTjtfLAtKMSZRPGnRPWjapXNvC9dLXLr7ZeSMtv2bPxX3UGg9PCt9uG8EdNZ2cKcsehxys",
  "key12": "4fN2kBSvqHvLb8hNpQmBUWc8NuhZUQmGJqUYv77n4rhN6yyw5orMQ3uny1KcxWHLdHvkCC9JPerZAUW2YErySLEp",
  "key13": "48n31Y2dHPBxC5xm4yySjzsSkgTUq41nXAXp2vN3GzquWY8Lw23WNqy1htSyeBy74QcbeYcPEeQb3jYh28PxzBDp",
  "key14": "5MCE2iVosFUBq6W3Rw6x6ZKqFZp8hev6Y7XURQ1UJ6WBdwbFaCZXWN3Uw7w4Cfj39CLFwGHdXpGc5b5PqDx62GjP",
  "key15": "PF6xCuuEaK4sSLGt498htZtHY5d3hqNQHr1jqusJtBqkApr6zMvYW5AnJRevTVXLwgQHhZEKKEN56Vzs6q7hdz8",
  "key16": "5ZaYwUHvGceorHGcqqCCSz8RpxGXTqNp8hDPUbKNvBdZuXSEvZU7JzSxk4qEjS5HGpwFAqUxJ2KvENdvNG2vtPqo",
  "key17": "3japQfJRAtqLAWVaQDnvTYfDisJUDgDotugR7z9aZEijs9974KmdFzRtsNx99Lr9knVAZZUVYfhXe4JDdSQckagD",
  "key18": "2duD7qFo6vAp1K2CVjNE2jpy2xkaTdLmgTGGsaeZujDMTMiA6JVEmNNdgjZmJtjqeNgLiL1Vd5PYpr7b8XdvG3BS",
  "key19": "2ePmGAsycHYjMDJ6fiH8muS2xQLXnRYVJeCMT69XD7Zthfc8Xa8Nv2Y63ypnxFWnWYTAEQmXBG7Hn69qvPdMQriG",
  "key20": "52BYZyGf7H35SYBHEjDGvG4wADmg8XjWMMUeT6tnFd5uegbyVf2uk2eUtuZ5EbNiZXuCFg7rZhRn4w42v7y97GXy",
  "key21": "z1Pn2j5C3D3jN4rciSTWtzDWnqHXrSDUsYxn85jucYe1Jox2kJn9k8Csm7irdfT1U3YYdLpagYohgsFsP5mvTrU",
  "key22": "bqZsaupw63B2kVhCSGasrnJGHr8E2U4vpCmhLFK2BV7UvfdnXDdwPzLSyiHDWvFiXsPt8KgsrRchnU5gEs7JKcy",
  "key23": "5MxX5W9qPQ1MMUx1J3Xx8PC6hvLccYRDq2QzcRHUet8W5HxW4y6cx7bgrnkfLp9Dy7Gguj7wxy6Cf9XcpDKHcqaT",
  "key24": "4keGJs3v5spcnpAhPEi9q9hjHfFSkKVK9LhYUAzcXTo2X3WLKUtzEhV7wZDK15zcERZPa3Ui1kLyQqpk8eWA8Tjf",
  "key25": "4RYJ48gV5bFakDy1MWzzeDWkjr4ytmzypXbeK62kZ3Mrus3qPsaCVtWWLXXP2QpohzWkJQMZEZEdHk5jFVz2Po2r",
  "key26": "8eWzXVbBe2XdPSbpVQakxxJvV7s4iyUEQVXQqrwoSZkDXBKyaEnTh3HcF9xdkUqkuiUhBaHB5u7pn1rLbz4DhUF",
  "key27": "3522HuEX2dEu6L3Q3pFgkhr3vtyRGuKYHfFaxHa8KW1y5o7bwpFockb1E4cXR6hKvbLLHxB6KxcogxqLmkL2xvA",
  "key28": "5VtgxvNujxzFwNTyisaoGKiQ4PqGWHj1sjMsHp4ggCmRcDfmtYQiFevZC4gtQPtHtJDr3WC8aP62wdc6m98Z8wXa",
  "key29": "2DXCK2PLf5gbA6QaM39QXt6cL8GQRJ23BNk89agTkU7SCZAU3x41L5EzFvpfrjV6FCdX8F8thUK98qG48fDgYmfo",
  "key30": "3FA2DQHwrD9Ss9n7bxnoFuwaY9C17vuv2P8NDwSAu3FHCgzDoC1mYWxciSddUzNTm6Pt3ieZYMyFfqDdubohnxRy",
  "key31": "2VdqUFKgDp64xfHt9G3mSbe5yjmHmjGaZWLiidnzkLke9HJfyf9UhgCRa6ipM48Jt4S1VkfK6jDh691KZEUXETxe",
  "key32": "3wRX8CLgLoD83KedWVToqK5RmUbpyhBtJgd7J85DJcNQUfdfgw6NxQ5MRBsLBBvufsqTQANu6dMFGPKYQV8Xjk6s",
  "key33": "5rpFt33UZLGQvcWfEyVCPGGzfZWVmfmu7U6VuuseHbeYPVYe4gUDujXkbmUH4F1uVAQoRfq5JYAn7aS7S2hLTzCS",
  "key34": "4KeCkk4ynfSo76k4BUBHtG5J97rk41TyRhVyyqHwatuMhjskeS5bjnFffSy9Npf6CczNEr2j24knsKnHeq1GRJ7Q",
  "key35": "3ZrLTyBwYEpvQUwdBLY4h7JYSCFJH5815yTq9DWsvgaLXhPbegyMAeRggpmRo9xvWHjNu7ufkDXKFDDVv58ghxQ7",
  "key36": "4uXAtaY1BhQajnhxQztb3SfvXz83uyH9pxtoaQq2BnMkqhVztzPWwNp9oSULwonuJQw51P9uadKbf8tvPFaihzNW",
  "key37": "PKTTvKwUQVSVCwkqsjKKD2wcc5H3hU9AxpU2bdYiyk4Gk7aVUWgPuFcLH9rczNjB7LEtXyX75wbUxLkJ8sFWfpp"
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
