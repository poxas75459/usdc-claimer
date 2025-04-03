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
    "67hVa4YWUpQ7kGtWwx5LxGCUj2uFPtw96YR7vKe8D2dTdbVzGrALtJJ2cz8GYN7jXoZddixCgQEGiAY24sVG5b1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDY9NdfBLyYVsksgci8un6mkkc3YFvmmJmtYgTNfZ9EozJZk6tiqqrLFGSR1SEupv27jUvEjhTiPWXaCTgrpEre",
  "key1": "4o3yssEjTCAJKfbce6ik47qxt3LUoHHG2uAFqR2ErD6vEhhaLURLY8NAgYYZSkKxaMNWjcqsYiMDeQUNj96aJLY9",
  "key2": "58oGRmXovfEhCgzLP6weEohVA9zzzkPyg3f4PS3D5BPRAxa7MGYVh73rYLmLcfj8s8v9qdVVhnu5M4PsN5uT862Z",
  "key3": "5igiKwL7e7S3SmKSFfaxQpVZRcC2Ws2rQDuEqiM25iC3G9pK5GtTdKDuDK3gJzdPWNeUVmSR1p5j9Wc9aXkj7dHD",
  "key4": "2S5WdqJUAW9HqZr1ZgdtN9rEYMpTrsf8mjeD4zFSLDhrGtiEM4GcK9cN4tK9xx8NSYbcc7sZg59Yj2TdiheEbSxm",
  "key5": "2a4XTiUzAQtsxsVtR8Q7qrt8bkC4uTSC4EAGQ5LVt7bCbmM4g8Qwt75ZD9UFqJzVF15BJieTjp4HcaqUCFu7Jo7f",
  "key6": "4ZaXAX1vFUE3PK71CnYUnKApx5YKBGtNhFxep51HkQoZC1Be3fDUQFpfYShnc7dBNMmvt5zGNiRrLqxfsEBX776W",
  "key7": "4BRzcqVUtEuKJ5UsneJC4vGpQ9XUXMSwZ9stGJa7Ly48MmxYZ88hupus9W1oTsRN4SYLXyFVHvnSC7QgArs2wUVh",
  "key8": "E1YvGvx4CZpbf8Zsfu6vCpz8zyyNN9baJoBdvRcLKnaDAN6C7rfZT7MwQ9PGpg1d1FvRMiAVpo4QSac3vfb6NxU",
  "key9": "3Fjar9yf7jR1n2nUeXX4r75xFXUXdUWS4iGCKzifu57pbAfiUYxssFBxsiqCMcsy51r2HuEQ3C2sLvwxpLseZMbK",
  "key10": "2nVVscqrzkqJkutQMPMbVaoLaGwAVDfLgCCDh2RcB3AxTuswGLXe6e5ySe5PEiUP4cE3pZHrsPJTPPgqT3jofeP7",
  "key11": "3Se5VckPoknk5ZPzYicrHxQgBbdjNcboSz22iNHUUPtxBBTUxEHWD95Vq8s8YMGbhdkGKpbVEygRGpQySpRR1Lhw",
  "key12": "q6mQftyDwq1JUJivTzoQ9xAouuYjaEHCKGDxh2g8BSyvbCgoSbe1JdwjBCJt7ND3Uj88v7pjWhVGt7uLo9K7FkN",
  "key13": "326Ne4Yq5c2etrErTLepRZeivvY9qL5YdYfbRoMxjBV3ktTMNP9c4DLQRDJzwLqsLUnfvByubKPyHQN3sAXjTLbb",
  "key14": "4hNb26ioyA2xift215TYrHpEZGs2T9N4E6aAdDaY1vAu1YjGGmgZr341Dh13DdL4SATLZ4QCftpd3CM9k1tSDLDn",
  "key15": "64mq4cXDUACoMhmJdyTz9ptGsDDNygB45Q33AkV5iVcHXaMYV6A1iFDejTczsrZti5gxkH8fJFrg5UGTB5fYq8FH",
  "key16": "3B7uR9cmweDhor9J2BoGw7Jqfr3FRf62xEPpJEvXf5p68DkoKMHd3yTRCWySacVHUCqfDTY7TnpF1ehe5BkjvgvB",
  "key17": "5GADJaoSW9u1TnLvXM9vRh9vbqvTUmcDVMFeMpSYqhfLdT4LWXsf6emo6qrrGHx5kr2pCJPoeLHopspTWyxkXzXS",
  "key18": "5MvU9QZeTeKpPBxAEockw6BaoeJQPtpczKKTbLuwzNxXpiyKekdbkeDojRpd5Y64bL4z54Ns2zDFg9T63c13Ugut",
  "key19": "2gHMP1PF3AWiJn9f7CokPQ7mMsk5Vt2cUERcqmkVJSan8JyMjLqaBhvVVh9qJKfLRbhNm9KobeQ7LtkbJcwtsFhV",
  "key20": "EDjrVoKCfD1VYgusVpyLtsQVbytceRhGr3j3y92YPkEKToZkRaR3o7Rw9RrdzrwVjshCwFMcD8Dz84zK61d7dYC",
  "key21": "2SMBGH5qAPbh1zF4wPkoUSmagSMX8NWMptZswMp4yDKLQXSwNLYSrmeBxyycdThmi4D7vTWCsMW3B4v9V9Q4xwwf",
  "key22": "5vsqPXcb1eWtyK4wcKNrGX3Zq9uZpfEhzpQRJvbqJGd1KyJPxexnPguUq6d3AbgMbuzqpAZcV2da73GnQZ1aPJ6G",
  "key23": "MxkRywHMR55zTfFLToSnQUsDA5CvUynRZf54ofGafr2d3HDogPvwQmH7t5HUU43Hr7pKBJuuK67MQrqvYTumpvT",
  "key24": "2LLDNFM4k8JVoKtYhzXpWrp6nZ2diW5DmrKCEh5kW2LPqAoKWikqXdd1hDxU4yHGiQFCnfyr37EsaRFfe3sg435c",
  "key25": "3cEAgXsdAvmaDQWYdpx5JyeBjcGWVtKXN2PCRqwgd5hwxooxsumCNw4Q9aVA4CrTkLB5SFAfwco9KXDCzjgGf661",
  "key26": "21CHaaX5RnqCtkKsAmie9MbVCgqhTqD3sLjMmL8FWmTsPeFjPxf9qGEAisHe6rgcnKf6HjsfLAbgfsmvsU6Pc4Ew",
  "key27": "2gYHUSLsPA2x2m7S56N8Z17WikA5DbdgDpomFhRpH4kWvtkKWw5WmqRKE6RthtQ2m4tGbwc3YPKCc5jWVJPKvM81",
  "key28": "4exxZhKscmpbA9YTCi81ow6daBvttegFPBeKy5jKf4Vo2bowYzDePgVQ5aJgokDMFQjap7RWJYqxofmaFb7oRvzs",
  "key29": "67UVGiqFKTN84QpKDFDyrpXqP9cSQSJbnFa2mzyMecCKXsGCYbGtLoEmAytEsCzBrX1p4uafHK6nyktHntRofDfo",
  "key30": "3Z9Dy5gTx4ykw8WWLtUMfL18ZQycRg9xLZMLhyuMGroemoSsZ9RFwmYjN3Efd8r74H7sPjBhUK9sATodmbaso4tf",
  "key31": "3yiD14T48RnGvqJiAxN5MVDw3VqQxhxjXKmyz7x2HXthGHarqXWr6N9XxtUkWc54R7NfzXbM96wMZJgxHC7SDDYF",
  "key32": "4DWTHF7cdWKtsv8vnveNhJgDaegihf1JMSaUNkkCwXn98XH4kW6EZeyGQBBGYbNG9kf2SuM11uKpcT1DjxzYmrLb",
  "key33": "5eTEdHfrZYPBDyxCSNJNpMKXCZdWyJ7gcej2VvVjdpqgxG3arFHvvKjRTqbCoZNeBBrS7PXBv2RceFewDjr5Y4fN",
  "key34": "j8JtfHDx5kweHBi3a5nXQyqeETy3hWsRi5zPcES6qRQieYzhfju399dTreXfTNzW1Ed3NFpKhNi6YGfrEjNsCx9",
  "key35": "56a7YbdCnmHBbQRcCz9n3hNLVcNH63HuvNUEsEPc3xqhtfpkYiCTge8VCs5YnX5NQDCXG5h5EMMXoGAq46SrqcF3",
  "key36": "3y8zEUCcZFFjc5yF3tQ5JMrVdaP2kAnM5SaeWMVW1a7oV3ckg98Z8EzkBmZ8qUipg6iyn5BQCpMo3vzKMDvg9r9P",
  "key37": "2Xc8CVVUVKjEH5QHqPp5ZmDjymWBDfqzYNn8p6ZLya7k9kTwUWdFHBeL18P1GhdcfsTS76boN9teL9Trd6jdd4tW",
  "key38": "34QNgYRiBvSqCZM34nKiEJmPiSTKMrmMPTLDXTsEVQKUxGQ5oYHWKwdahYWToAN3Sz2jVipQuAaC2jEmaFcUgfsD"
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
