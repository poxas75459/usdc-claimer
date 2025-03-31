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
    "5z7PxBUBHaKw5r15Z8faWBKH2LzMiy4obDFkXum6mCF1LCAX6nMcTZvz5aCWQQAthjZioEkyBNMpd87666honJBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQRJfewWTu8fwzwcTgsDLLWXtRq1MKmHp9U8o7ftiLuk2QRxCsitE4gTmQZFpAWdQE8DnSzu1SuqFnRXn6RtcrQ",
  "key1": "3E67CrobHJmqDVx7mTguVHZS4CT8mEeka42ZSdjWNakNLWSq2AbgzDhZNNhqQNeypnonFwfv8NDyhJtMzBAGFJpA",
  "key2": "wjdCwpTHapysRKSd4wE8RgVDP2QFgKiMAN5yrGRNTgyaKWoNmKwRy688Fkm2kWcixqqpM4SvSCNpFqp5hG5vgAE",
  "key3": "3V7LN4BwHaVweWUz7mhAs7U3y8qtemcBGiQ2YLPPS3MvKNV2zPyocWF3XykVQbuumrcv45PZ5nopD8AGpwTBGWV",
  "key4": "46nskocPA9JXRTMSrsaJe9GriJmjTHaWnFBSX1A2UmbsZ4JsMpNV892aHJmcut4S9HJCAKcTaVLFUoiHpcxWrZ6G",
  "key5": "VMhZzKQnh7dAjS8shg9VEwdDDcWdpgBqWe53v7rUrJ6MdVt8xVXcpx8yp3ZZ4VbkFEayiGTsxRPXN2xK3ceCyus",
  "key6": "bPWQxTrYoeC8b3UHbjxW7mZurFr339E5AuD5TQJDD6F6oLaXEN98Hgquxqp3gqZp4zUxLvMsBcoWvEemCetHKSe",
  "key7": "57NPNs9bmDRFKpS9H6FaeJF2p5CAJzbPCcpoZNs7T9FkCbn5wMyV5si3n3bf2YHo8foLrpMH7cQ8u94jbsGA6WpR",
  "key8": "4FLTgtnrL4tVvgYcWdHECzJDodMYAh2JKC6j9ZbJpdmipKD9Yb1hTZZiB5mfXDXcpwFStLbdzQBpiZtNG5GKea4U",
  "key9": "4RQ2qt55PXW9JykuwXUvLhk8fhPgnUDKkcyJZWqzYp3d7iDjriPgSf7whdQ12hoP94DksTrLgPXYLRt1xjawbpYG",
  "key10": "2oyYwSnL6XUaFHF48aPVmLbeEZHaacHswqU2KqT9tjD2ZP4mr8hvYgntYci4cx8dtqp3my1FbBL718pPDuF4U7wp",
  "key11": "3L69WwcqpvgxNFz3ig91YDUb9VE77XCVFMC1U1oyBqFWccTy8Q9s1V1zUmBqRgFFBMNzgS6ueN3DzpzxdnMNmRgz",
  "key12": "3XbwgV6gryo5LPcffVs5S6UfxATmtcqy72gis6PN4oyLDac9zJkXKBJMzBkbpmUQsGbRsTFJQVDU32UED3dACCm8",
  "key13": "4f7CpqBYQ8cydaryg5mMUaBeHP4qQrVjv8TEXDdovG9Qa89wci7SZkYJ2bhazqBkRVNY1h3Hh4WzcFe4be5fW3Rn",
  "key14": "2mEHcarQgRfSCzygHxt6Bj33eWGaTMKhyAA76xFJdZAmuTQWGmfYonf7cCdAnun6Jcipk2HvWUsjQP3b5FURJWAi",
  "key15": "23GPhYgRe7FWfKwSFaEu64vCCpHAQAgnnA9wZvsUvkC3DKLQ1zC1n6q82rD98HDMMSE9DmmfmzhQtXcNJhwn6dAe",
  "key16": "53GwEGVykbf7TiU6h3AM1GDQAKM66mATGHaSnKJtLXtjtnCLABAwmsPkw7VumHwHwoQgcHQ2nbUyCLaokNGCkirR",
  "key17": "5qga2i1Ewyi7PaJ1649535shvdFzjkLjE4uGeFL44aUM8mQAvRFCqpkV7ZRztuaYoj33d6TNJsdJ5LoC1iGdodwJ",
  "key18": "3ebz6MrdiU3YX411Yew5MrG5Uu4HNcJ1QB9Pzt8vwC4S8f8GzbeAuRe8o6yEmKSKQnkTy9txSxPFKxDtUbq6Y7zF",
  "key19": "32xi79GfhwHmRGLgsqmwh7JUB1j15yMm5ndheN7rJYjKsNgLdhoux5J6NQfXLxaqsiJvj8WqVf9Gatm9Y24KpEU6",
  "key20": "WDTLzW5sRHa5dzWEWYrQycMtTxxmAjid5rtL14s7CmeSpWzrj7HeU3SxDBw9zcveKDUWBSN2UAYPqvELdKwpKAa",
  "key21": "ExNRNxMjVtZ6VXB9TbUofDwfEYLsf9eyR6btZzFFm1ei5dxjzyAPUBMardrGuerH6YSutxQGpx6zuES78YEbdDz",
  "key22": "5VBjzHjQxRhUSwoL7yQrybeyx8Eu2wygS5EKZb7qNLDPxPiiEgZpSVP9FJZPM2NomDGN46nMsjsnUSpb9Vq5sCrH",
  "key23": "3RZy9AWx5xgqtUVrxgxeTb7n6hn6agnD9uiELFA3houTRew2VMBeY4wiTJjvWB73NZ2p6y9NvjxGidVLF7tpADu3",
  "key24": "3K9DDPJtKYk9dpVEYoog3wYfdPtewkyiVLRhqxdZCb2e5GhZzL47kqS2g2Nmh1c4sBD7H3yHa3CeXntqfBoH13Yc",
  "key25": "3hfaeKZpcZwJxDLQgfvBh49hhV3fVMTCbw8wT81TnhZzGH29E8qpFXx29cLHWvzssw9M3AGTDDGojZbh6UprUhVs",
  "key26": "4W84jinKrv9GkzD6EAqWnXqT6QvziFNCyRTMgeojtYah7JzfxeHYZiW2qor5UdH7gHvqATRf46DggPziEzEJp6Ki",
  "key27": "Yp8zBgu47X5H7NbjBDCabKSh1CWrEFh4rKNoV4ZkMZvZTWghgmxtfi1TVn5YLmxnbA3GfrB9HVg8oTGxsMHkwc8",
  "key28": "476fYg9i2iK2xdCjJ7aaanEc6knViE3M6325HXsWyPRLfXxSiwFXH3xzVuCPXPYVfvxV2xymnDchn7pAFipv5qbR",
  "key29": "3zDpQ9vtUfTF8Pz7yRjWaHgt2Nh7Kjmq8WB6ufXnvroDpkH3hXmRyrLPqeUuGX9HC2c7Xa9sYGQq5msgqDUszTqj",
  "key30": "5Wnp9zAAXYfFvFqmcgdYWNXMph6A23RUdu3S9NScYySNjV3t1TRJ7iaWEmk7eeesaALL6fUpPvpE2x11RXVDy7Ew",
  "key31": "287VMbZHvv6KNFbQPnjJDnVsCdqJhkosR8bntvQHUhhDXFez9VtfguH15ZfSckjKwtMKYN1Xi9E1jjDq2cb8jhQc",
  "key32": "4RwTj4JEUu39LRY9pZHt3y35VoRNXoBhZ46UsJtLABVr8wX9b5dUSb1fuAxaxBNCaFikwHJ984JAqhdkxNPVVNpu",
  "key33": "4WVyQyzLtnsRzKdcHYkJXpw4S183M9PsHvhmTDaD5s4AnqndDdVfiTCu3iNMAq2iUqpzAJm6GGrZ5EUkRvhVZfKR",
  "key34": "5QEJ21HuG5xzGm7Rud8yWwCetfSU1vsGDcJvBWyq8K2vzxT7nw8zf8iQK425cXze94n9uij2VDWCqhbjhyguPrPz",
  "key35": "4Eew25AoiXynwLYE4Pkz1hjjuDzWT8THXc2ov6RW9dqMJJrhtdrSVg5wUmZhb24uo6DR1LpCayVwGE25vZFfRqTX",
  "key36": "2f2potopifC6se7cJiFAA7KaL79Y8XiHXmuvuNAGQTiL6zJdnFetr3hqVLfPxJt4rmsECPBTPD48me6pZregXCz5",
  "key37": "5m1R2tFAJQurtJnpeJkTSGUEoKAi9g9L7neqwCQ6cGcbkRAH2WPp2wm5nEK4XggDkQqm5SbYGY5ViEBbD4ekEeUb",
  "key38": "2jbiSBRp83xhKxc4SP7JDRcYi7FDErQRw87kKiQP2sdzTcThkusBLb9HAHJCyVrpgv3yF3MfCqBzCxsU7JHYgQYe"
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
