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
    "3D83BU9iPaDXhR6x8FqvW3bv7fdjjWvkipCUqfhfKFBeiNWQu38d2tUawydWckcoc5xrK5KejpJy4SYurYH6Kvnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJxQyLgGR5Rfz5pTintCC198nmN63YCQttkSsdz2ZzUKLdyJo8sxRfoak4teBM9ATZHwzM2nprqzQ7XYiHvzYoc",
  "key1": "3vacqCJQdK3yH5FSR5vHiqKRvtpMXM7XhYUuSomKKRC7zjneYLvUVnubQ59Emg87c6M2q6FiJ5SGBEVDDWUVee2C",
  "key2": "39wyAb8P4NjqtHBvgi6b95nDbYibMEYXeLe7vh1gKkZeTDD7vVnapPzb76nYRJZHz9JGKMCimCz7oeVBVofSe5rh",
  "key3": "5LzcSZDAT1Ap1dEp4wdwYVCNddYsx6KiBkiR7ZYMKTf22RFehWF9qanWNLzsSqJQAsXTLqHYvtw5qGnTBB8pTsmt",
  "key4": "4yFHUFhiXYPEGQPEGhj7ahAimcTzvWEfHZfsipSSDkZx569XwBL55iETyhkvknNG8oabKXaDwhkj97AuemLdNrGn",
  "key5": "iHbcXfbB6nPnb3mr2Sm9jXKNPxxTozSu7YWXWdnNuUk9bt7uqNs6FNwP9NeAM4KcFZPfJeCDhKCesnBWeuCYZxH",
  "key6": "2Nw4DanYY73oAN5NqXepRXxiiE1hQWtX8CH1tRPEuujKobouKbSePDeaJ3omKmwWPacja67tUzfrg95kE42ZCx3q",
  "key7": "33WWSxEG7ipv8phBsvDBsnkSvUw69Y7SvQeRzG5FZTRWxVTUBCXyGkAuRceeMgmvC31oeijKWFNs4pFL5ZTeoNow",
  "key8": "5qc6rkBLuwgJTcxjKekEXdyWdHGUgjG43P5SnNXcCMh1b77SGo4jqifVcTiu1CrhyLd5budfunHSTCMokpwKAi6d",
  "key9": "3twse781BY5Z4wh8BNA2xeo36qUTH3b3q8xQcaz1vtsdzk4LYkQKrzgEqHoZ36S1KitNic6rJutBtDqYQUxH5Xdh",
  "key10": "4iCcQpDZBmFHR94tnTKfYYXStid6wTjiu8a1BCxDYAUVWL6R7pSMKocfy7aHhbUVDogRTEXaPHRvsxfmepe5Q4gM",
  "key11": "3XAs4pkWw11EgZf9jZ4m76FiWigfHyMzRbLYAwQHr9AXMExer4X9BrMuS42qwY6Mu98zhSLS3muEUk846SDbGTbm",
  "key12": "43MsZf9nqYhoJHLdysVHDiozDNs4yKypahoRh1JXNBTQAFkuCcqd7ievXLBFSVX1YuDUzGDGUWpTh3zBAGm2PggE",
  "key13": "5sb5zhwG3CNH98MvyeCWJLSpuHzx27ch61yYaFcULra5sNEfsdW2nxXNniayzmkJNxHEyrc85SummHP7KbWLDY7t",
  "key14": "57ab6RMgqCxTQUVexfhaeNR7UUMfgXkgq4KrB6hRL5RhWGzxF3vXWKLL1NamTMiBstSR4kjruxciAnF5Gy1rLkc6",
  "key15": "4HxJAfYscxME8WsiawMppw9XcTmGLkWm1FASxmKVRP78vEBC7e21GApqiFaoKZs8siUfTsQmoCADExqWD6xhYkwW",
  "key16": "5w1qyeTkbvZCEepQGHu8622rAnJ12qGqeLBU6c5j9pRJiuy59FX1AEqeCcEiHgoPpbQ77YsRwXygpxECmruzUXMt",
  "key17": "4Vk7HXYCt3vdxsgEtoeFpqGTdxFnGubZNyFJhEPwQ7KH7JeF27Urpq1YnpSpGzNzN8qGJdpW9UAWDbo9MSs5jJyf",
  "key18": "3rvFNMmYeKaJjeDojmtusvNzYPoMX2YB2eADFDKv57hoCjx3tYQ8pdvTGk2rbr66MvDqggieyn3AMcLsGfVub5uW",
  "key19": "3viouJjqxGcQ9XWF4NmaAuhciAz1Ffr7QfWY23iPABxE6B12EozvpqoDatWcx8Dx9nN6eXGVjL69NdN66YKXeAjV",
  "key20": "4a698qSoCajFgWxXFvHyv1wfy6rfqeJHdjDXTWzsE7WdCasvYeE1DDqEReaTf3eMogLZdPtMzDDMf5smuwi8Z2UC",
  "key21": "53fDkJSqY2Z6gGHpMJ4A7JcaErbNd9mabvkgwVxe7iAvuAhTFzeyxVF8zocbtYK4meNQV8stDfcXowGdvVu6cYTk",
  "key22": "2VBTwt5H1b9piZmzpstJFZRgkjQiGbfHE9MZ2J6vthbQofu2myCULbLKsVxy4Yts52m45x259dgSEC5rw3xBvshM",
  "key23": "AMphtPgYg2DVWWKADNh2NHfHzYUtoqnQbcuuC2p2N3YpM75rYuoyXk5NrNdmkYCt4Y21xXQHdnSWgAbVA2Nicb9",
  "key24": "369RZFvprMCM5n8UzMmJckoPEnxWGUbL3rP9ujMq8VAkxgKz3Pcju3NVEx59RuFB6cCKqFP5GJLEmeXgNuM3u3qP",
  "key25": "5PvtrD4V13XcVv2PfFye4vPqMqw9REs6NZUgNMseJNq5UdC12aB9orvfDfcYAqJS4aTRyCaWebT779cfufadenoB",
  "key26": "triL5txGsxVk7GMyKMFuw3jciHJahTQie7DQSXW9qmixWVVdCqpXiESoiws46XqWyKD2q8TZJYyZzRm9JZRBYnd",
  "key27": "3qt6xVD3mcBzZyrenRQmcnQLCQcx8KybvxqPhpaXiPNG1RvLxLBnT7zHhBEXK5oxZVVi5czNBsKec4wjHSJXX4Hp",
  "key28": "2eMtpbUUXP5sn5e3nJq1FKVeisfREV8udrfj663Pg3j58aGkcpZMg8FnxWPLA1NzwT6qsWcEZPjYzWfQmSeqDLEG",
  "key29": "33zu9Y3CRMELoNDEKDWfVRyTnU6aYpjsPz8XYpM5gLiHwvaJSe8QuKowxCYLLYuKXkZaYKqda8qW2ndXjcUBjiEu"
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
