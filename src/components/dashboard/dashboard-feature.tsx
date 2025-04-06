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
    "6414zh7kt6R3XGqpGPfc4EswiJN5usdrmKUs5BFZ5XmhKBdQd2KMP66M5qCASckvRPJQnYD5hN6o9ExR77Px6Lj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSm429Q8A6H9pNsywuyJgPvxHHmCdVftNBDqzCEDSwotuwMwpV1jWBRrcJNyHYQZxiEJsyr7kDC1av8A2KnqRxw",
  "key1": "2vce2DLnyK1Fpr8NqbwBSE3W9P2bze9TjwGJ73HdPsbQD1oxgSsBGxbsREipNcCkrbbczKcK52rSYXqhHduYZBc6",
  "key2": "4YSjhwbBbkhcvhYe4Mc3kZ4S94zaamWjj6S5xbUD4U3LaYXhUzwSHgdZ7JcHoYFzN23KPCHTb5uzZH37LXShzkcd",
  "key3": "4q2BtThp8dnwMH9AL1uXjAVWcgfk78T9DhFcyYAif1rkcw5TvzSEsr3chE8cDWvQUQ8HLDudUWPwCD3L4WYAo7Gw",
  "key4": "5ga7jfSFtnJBp4KDTzPrJA2mr8Pi59x3STWFaDfBVjjbhv58pYBEBYDYKrgFmnQtMdMs6toiF1j6bus8WEp21aVx",
  "key5": "2S9bicTHF9p8z9ojdq5bvmtvx6427nkzb1JXGgMXo9XXPU6MVLAoxbcWAAci4rw4jUQcGNnY1AHmMcErPBSvb1Vp",
  "key6": "2mpumPCxebhnu66zew1znrEkEMg6BnovoYQChaC7xg2PuEP6U3iQpjrdxCitV4ukRtZPDvS2PzSmZX37offx3p7D",
  "key7": "5MbseG1d7u6HGwbXFCBbyNUfFnHgFYCMp5W5T6GApD2Z8qpdTTL1wVPnz9BuWyq8TA3kw3TUorYxnHKzuvzY1aat",
  "key8": "5eghAp5wmVugS2TqmCD2EcFEibyTkTbfJ5ZXZXxqVVstpWWkaMemu8xS2t1RZsrxo2XXCU9QgBZaEAVn9bx4fAyc",
  "key9": "2bZqA4hgVCkVRAw2FZxp3wtpKKipxYUrPrsyMUDqpPe5yAZZ1fVi6rWZnEuHSpQeNJZCwKYXos8LUjuChAFFfHqp",
  "key10": "4fFFMreAo24x3Pe1RnLmqmdREqtZYfv1qcu26VVz3mRAQehLWKKRqcUta3mhzsVJ3vQAtVTWr7fqt3JyPAkjrZaD",
  "key11": "tj1vs81tyZZBRM7pg3L6mZLxKkW8Qyo3FfwsRxzPqrWwBdKtLgKJcURjah25YoyZGkmdVFQ4tu9KM4geep66W1N",
  "key12": "26WiJJLTr1TcKJ1DBUEheYSE9iQhCPwz4zh4qbFRmNPFR7vjj7LKCBkCyFu1PwmfqPDh6hXHrBHaHqjgN2phcP1R",
  "key13": "38ge8dS8ZhfhCkfX9p56kZU4jHFLazTBLPsDUJ8kv2B6Uo3L866obTgS6MUc6kQGRT7MrbBkgfGq3yBB8LHwRLr6",
  "key14": "2LiUEQENkTEHgHz2Gor73e4ekWJa4U7L2m2P9Km86LVp8o4khCYVErsWwPXEQJPadzrxKJodesg49aekYvHAuPDj",
  "key15": "5uKmzA4PXTFUumtyqXvBf6mejystXcR82UwKat9gyKz7fiL56zaeRfzR2HFfcQhzkk9uhnq5oAshDgTVvdqKau5a",
  "key16": "2BaQX6TgZo8Wf6cmmdc2RZFtLF1HZKuzxHNUno3XddZF5DHX2JXhxYrEd146avG3t2K4X9jtAVHzFLCuTWHA9z1q",
  "key17": "37ixxFbnZtHcex5kTCFTf9WxqvD9Nex8hs6xkUbpzQLwiH5T66Vifh2rNKu4UmYRv4Gr4CEBsPmYNmN6SjzfdfuA",
  "key18": "fM3D9XbByxx8duhKLFPeGzbWATTC1jvgH4hreYtSw6MRYpywsADJxhpgWxBPA9qiFaz5KFhm8L419h3VJBzybqD",
  "key19": "4S86w9pvQEtkBS92dJ8aZy8ue6nhzSPxztMHXLvkvPL9MxGVPBwHGSZ8YSJx9db7178aHm7G991xifUqz62j4sM2",
  "key20": "24rnYFJH6CykMnGivdX8VjCmyCts42UbDDGkfWPkD9BCHQiPHsgSXEMmEf8mrpB3DwJbAQ7CM8WsN2mzKezSLRvi",
  "key21": "5tXTRmv57aAk18tPMkeU9pyeBqqbKuHZ3iH3HLTVFx6Aa995o85mHmoGaywDxa2kfLXYUrGA447raghacXZRKbwc",
  "key22": "5ShR6vNjg2yrrQ8hsot6wYmKXJEwqUks8qxGDSbjKutSEm2phGuCNH48qu84Bscrn1B3CAEBB7Jy6Mz316xML2JT",
  "key23": "4w5BJ7mQ7hpv7EgwYJ8DQnHQUuPyrGFmGN5hzKsEsnqMRkKd2X9tGot1ERfGKSKxvG7cQ94Y2ttdDHB3ERpFa2fK",
  "key24": "3opqrWJwfj837cCD2t1hUnEqHjFswuv6gsJtgQC6n6k3mhTTMHnSPiCYQsMk8U9DHZ6Sh9ek5EB3PTL7eirDUYHt",
  "key25": "VRRSQ1pSE34FiMHkwA4irBCWMSTQX3Ym7PDhSmhfYxQZKwQFi7fgbPrtfoCiVL5fkzYnQQZtM74GzbjKisgvtVR",
  "key26": "5P3XESUYJdKSwGAeCufZ3HtETQJUw1RtoGGYjERNytksjzjdggAGrH52ekspHiWiupkoTWGmeWXosu2Va5AoA7eh",
  "key27": "4hvWrDFPfKhpx78XXDj9GCFEgM3JR9fZ73DWY5VCgguQ4QWDrHUKbbv4AEmNF3EDJaSu6LNN2erdjPFGyNKRCcRr",
  "key28": "5XNetwDrbFBKszTywYdg3MTsjdqnHyKjCcCQ1JykRpjJzfJpJGFB2rKVCT9PJvPM4eAN7BAhjtLvxzDzCUAUXwVj",
  "key29": "3jcgbsxG2WeqiQAKm7PnmK5HdRiwtCcPe6yGoKyPdXNAtLhZjTWkU7CUzpET68ukG54Sj8AYzdHVGg2QnNVk78wG",
  "key30": "5tP7A5hr3G7di11xMktW7bUZcB4LQfNz21WK6JZnzA3EGGA16Amoo2NQyq4KaGxVcpGjseS9Yas5mgEdpF5apXyE",
  "key31": "45eVHoSXs3uKb1FLz5qEkK5BTvM5RAcuKKp54Wm549rNa9NVh7QH33LKcFZuXN3t2ss4oWzZSANG3G1BxWgkwK6N"
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
