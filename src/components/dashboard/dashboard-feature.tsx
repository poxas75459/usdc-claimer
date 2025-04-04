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
    "5MuT8miduZ7xH8GrXYzmN7D8qrxPEFHpT1eGwqeaQ38BkxSJiBtK6MDqV9ghLjzxa84mNnanReZS3F9KeP3oT2B4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58gw8TVUCqkEsPqETGqgjB96R36hB4CA5iMSwJvb7J56as3x94yjMDTewBLPmDMdqd5PP6u6DSwm7zdS4wjvz6tW",
  "key1": "4qvRFEhB6SQLmtVtSCJLX4bgA7mcgzgjxBsNwYTAK1xFochDv5SBzsY7seEiqUThBhYJtir7En3qjjUTQ2SwgKYh",
  "key2": "rEU4q6MGzh1Voom5sF3dn6Pq2kEUyZAuz4gVHrB4MyXzCHoLh9hLmCqqYn4GZCHRocZvBSH614A5DNe23ykfJqL",
  "key3": "WAfo3tLCEJcPhbUDcbjgR8eTpuPGbEvPw1c9X3mtCGD8HTJQx1PsrL3mXujTAxmbij6DKG3AN3RsszbABaFUi4V",
  "key4": "5wyvn3fEh4nfYjY4c6pTzRDaK8MxGSfvCmxS2uZnbamXoLZ6fUaKrXUMKXsWxEt4M2yxaVDUti6Q8h6hptAmtCN6",
  "key5": "3CeJ3c3cJ28AGy8RRcAEpfRbFRuo414PvzEEvo8BdJKnVx1ra4cyH6x8raiUEFNACVkSTdceMoZypLr7uHwtoExf",
  "key6": "2visyNcu8eB2M91NVPJ1Bb5Yztoj9ZmbZ9kAqY4jSuZ338jAXLmER4SQsepWRcupSsnx8a2UqgW4F6VLV5XsB91N",
  "key7": "3YUKEN579wvX1KDwDTWf1gaFW9sq5YUZfuQw9KNDEwAWrSGZPgJES8PdRRJmMNanYXQo8oDPviGu3aD6cJktpEXg",
  "key8": "5Sndv27zS3itNe2tv1xp6TdLsfRUwTNZfnMgjYdgPgA8GWAJheayKUhHXP6XjVkcWrTs3i8YunwSd42cK4e9Tk1E",
  "key9": "3cz3KbUsqNFFgYzhFF4HTHx11o5eR2PeSHSaxdWtAkAsxoZoByEAehZVw3HZSxahCvkurQuuxLCiZEjF1mw6Phko",
  "key10": "qca3KKzr46gFEFNXC75vEJVuiXRL9M86cJdxwSdqu1U7ixbsgH56kxHANg6oLTu9E6gAJtdpwC8LJ3EevABnCRb",
  "key11": "5Nu8zRKsNXw1PPAKAB1BFHdCb4JaXL8WtBGKUcg9sRvsjZtRAbsB8eTJVanqtBBTsbqDzXpmsDYwC815n33uF5fW",
  "key12": "674QYAHNt8EFPAqu7brgESBMuYhUu6UZPGcLpzedfcESJjarUTrJLYsn7FYnYUeBU22rNbnp38kBw1mQ9odA8p2r",
  "key13": "48YPBm59TLZnUn859N4yVVsK7m2pq6hdoPkCYsdFiakQyx84KRC2fn3c8iyLmxpBUViWHjs4SZm6hq5pYd2nsbWp",
  "key14": "3FWiMjMXfLwNH6CKfdMurnAxLNGtJYThh1xdmUUkWffYBPSpz2Gzh9ETEzNyKqnmyPfFyjbkKx5AFX7iN7nxDZns",
  "key15": "3qqj4C74Gz3kDoZ4AT8wyenGoJDtYf2YHWeSmFcEKf4dqD5YVScxzfyy1RR7W11X4zUoMqmgTBdtAH1tTRKEoSa8",
  "key16": "5fV1zGKQw5uFbCnwWwVkivn35ExYjBcgR9ZnGbzySA1tRu85ytHn186gdoFYTJaAJ9dU1DRx4vnYaqRqYzygsXiS",
  "key17": "4SMqLUtyiLos9hv6h3xAWEYSDu9vSjy7yX5rMQKQXJUvWjwLLNKW8JE62ZronoANACRN4MKHj3uk2H4oGdj7W38D",
  "key18": "5XBiSxv5DczZ6X3Tt7aXRCxesV1YeXjBh31T3B9QNTVKSwTQkAr9WFAvqTupXjqtW7CbMUWQNaWhXvUdDFnQeRhM",
  "key19": "2SeqPPHAaRfRvgrP4wcuZZWKhFmH3e5QvLFZjhsDD1YLBpcVfehkukDSbnEjdvJ8SmhwqApCZvFdALBHWbtGnsfQ",
  "key20": "35M97ih2bSmkJx6CFuq1XRNAaZ4Sm1ih8pG7YX94GQaJ4knQEFwV3VZaQzRt6TexLzUuG4tA6Dqy1mxh9aXGT1AK",
  "key21": "MsS5A4dJvXPqTsGtxFtK6qKtc7sV1Pw97vHfPYVY7nfTo2j4zyZYWWQe24rGedxhkdCH9j2TnyHPB9zGrExcRUR",
  "key22": "2yMSDbf36AuPyVCyx6coFuu8mTCU7GpdPmRaZ6JdkKAu3nrrPRW15oGUUW917TQGPBaCj9nQ7CobBSFuX7c7DDw",
  "key23": "2N8XzUnCPEJxuRoR6t47qipbosDHXZnDvNPp2gC4SBRQEYqZSrkWexRQPJ39ZVPi45n3uTU3LhrRSrVEb3BkkA45",
  "key24": "5wTZ5Ce3eCjvjAprtwbvS4fccEhu7frajCCU5MH7qutJnSoyfPyPC6Nc5dd9dqWSMGk3tYgFEen2QwA5RT9MLcBn",
  "key25": "48Ly46vhb5rZgM2qt9qVMZj4N6sNcR1ZaYKf8VGQnsJbxzAGhubEV5bvyCVihGpreBEMxFpTWSkyXEjs1aWQjYJi",
  "key26": "2DaXXDbXgXePVZ2J1jjk1SDV4Wua1PcQN83ddoLf5X7mime4JRa4jbrxJkg8VPY89kBAEX7HZ8e6qDeSJKqPLYwo",
  "key27": "2ghvscfQfUz2gooF4vButxkZkKqyfaUKHUMhR1vnTwgemnohaNGVs3ZeGTnKgUYxX9GfaTMpCRR8WodB58L4zm4A",
  "key28": "2g8HSUy91Nw2UQJUVx6aMfuDsSXohtPDVHjjNYTgF5SZtzjmrucHBiUz2jXzoFRu3xnAotAMVoKXvS75ghY2fUoD",
  "key29": "Fa46Qu1FJ6xjCo1yJ4j7NG6WfqV8FsnbEvQwDJqamBQbgkrJwQdammpAv3dsJz7YanguGmzN9D1sg2RunhnD5L6",
  "key30": "52bVLr7SByZaiRKUaZo6WWjCzVPitiaPNSX47t3epmFaRbr15KdUVefCAb4wuy95s8w8LRDF8WsdSxWCsEVUv7Bg",
  "key31": "3W62KSyQ29kEXWcW8tmJhYrtUQn9a4KSwwVPFNVBrDaiUr2p4nFVbnFQEZADtJehmpp19fLsXHNxsuGXsRYzfBTW",
  "key32": "4caKoxW18fceeyJdLAJrq9o1hZkXiToHciMm7rWViDtTBc7YN8W6zC2WCNVrQP2Y1MnwbVTw9PVZsyPDjaHLk2Rv",
  "key33": "4XDHhwKmg8qRPMAkHVRJEukALn8V7va6w1JoxaXA9VjasnorxyHzHpFvMWQU9oNfspm4fUiMw767KihT9kHU8NdW",
  "key34": "4uYmJTKityc4vYGbFk1osoWggRHLwakqitSB5B8b3sCQjNBkcbpj8FSAeLFhUtKVLTFHK3oNH383h3rSJuiN6Wcg",
  "key35": "5X7PpQfzns24jwLDBLdszCWqYJupnk19S9SXxuDnVAmJgJ1xQeziXs7VuyfvMtYDgQJR5mNcyHRussUQkXevmWxS"
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
