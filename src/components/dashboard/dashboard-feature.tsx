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
    "4f7bXNXvQHEHR8cXU11S7PK7KibwHfiyKBJdnYxPz9xbzGBB2Y7cjRzRgEP67jH5Ezv55vPkNPAC3oMLMAqTRFYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3fHj4VRBBvtBRpUSn7BCRjgv62YAjVUSACJegDEr4DQDkzZ31EYe2MDpgn72CAhJFDZZtYrBUdk8o9scabrFUV",
  "key1": "4jQKzAiVPnZGwdE6LyvfqUi2jmZuvTNEvFbAMQtQo5daZPeqPxF326CQwxmCTtcvJTe39EqGwGZMP2UiRpQoTwSu",
  "key2": "5qQMPqjDwSHjz3JcR2WdT5Vb6CnVvQPCfbKgWQ5iDudYxBKeUNP9KaqutAc72AmfBNpwzQ97RrvcvZy2T1Tx2Fjm",
  "key3": "5t5boJHmBS9gVpsi4q5MmW6sN1YvfdYpnmzobZLEFYP1bfQBbMfwAdpn2nyA9AwBDzbBLiCYwaCyLFScgaanSmgg",
  "key4": "43s8wsRrPK7MJJZYnXktizfXZ6EvtRVCY25JdLXuxfFHjcVcjEDKQB3HkrPpu9cLwfhjKtxr8rxsYgz3Y59RY4m4",
  "key5": "CVveWYoJhS69uHEaHCXK5Hu3irNpow5JmJvSsh6LGhCVqfex2QJi7buv3Q6hB5vRrYCTQUg6SZE83FKNypcSDXR",
  "key6": "5XjBhcs5hyj9tQFLyRqMxqCgf4sjr1DR23GsKiEzVFHPM6qRikofQ2RZ6yLnZaS8PvU7YWS2wkCXBu6KP62U6Dwp",
  "key7": "5gvZNeUrAQgiZGKevxevZMnMi1qzNcrdagjEv4BzWpCkpmkBwo7Nsys5vxHLN95tfQK3ZZzcg6x8vxNDcPkbcciA",
  "key8": "4b83Afzti5FjGML5YxD9ogn8b7CMJFu4c44efTY9hvsiJTm1AJtErB4Hr6VfHoHxHxUCv3BEae4MZAyzoZBtyov1",
  "key9": "TMEL6JB8DU1T8N9jEtvMKVQoPXd6vJGmF1MY6WyZtz2ue16TLeUn4LRyeX4pH4oYRMYXnvuUJSWnemKbiB1xHTY",
  "key10": "2kn76S3Uj1e1ZBDwAoVHAiJ7PvXmzDpFADaCJDDUBKAurK7WbH263hcdbU79Dn8tWWpQDT4iqqt1eLoYhpSg7J8a",
  "key11": "A1oqiJ95bFuBnwiYaMzSiUgBR8oGW5tFxHaYngVQmBkUY8GkHuM56Wkpd93tyvjS58J4x1q7m4SJmz4Z8bqQqJo",
  "key12": "3egCGV2svjVMfYRBT2uLKerDNdSM6iGdj7rdevQgZYbRL7ZVChLk6pYv1kineYfZYFD7j3CCaYshJZtEHYtJvVbr",
  "key13": "622DAQEuGu8uhPLmxo1saawC2BELEEd5gCarmRb68JiPeEJt8Hcd691tVz9u8sYr6wKUSsjNxrYx8scdHNmVmYBp",
  "key14": "4yvy15KL6nj6oqdtAcqEmVnjCUqU2RfAaktCr3F8LVFZSmztBoT6eXYpCAuWPm25vy3Nh5Q5t5d3cxcDsKY8yfNB",
  "key15": "3sq29AYznzcQajjMFBaxb1tgE7o4cdqcpSkNZMWpvqKCm558fQWM9UCF7vK6jzKq4cBG4sxsB53hHQfZ2LpXK5Cq",
  "key16": "5UbCNhzbgbram5MfKrQ1NQHb1gPPeWqteUbUPA6bETTbEtTANyE7Qfpjcaj1Yds9jGp4ydtcjsLNDSRw2d9XymN3",
  "key17": "rTajmU1RDbaucwoCW8uzAgk9QE85KrdYeciwP761DoyxXdz5762sjCrdAVHrvh2dEXMcNmDydmxDf7x8nXijnHi",
  "key18": "3HYByTFeeJhSEUXRVoxKqsnx3P1PYGbQwx9NfJEvuKgZZTKkJSe2NCyyBtnJCyC56h7m4QwhPDSRYGidk8xJ97hg",
  "key19": "3N3tVvQpLZXDTY2jWiQY1amGTBAVBcTYxa4KxKMzKNtSumena5aixfgktFMDyod22GFHKdy2b7H9nYZj1N1wL1ya",
  "key20": "os9YjfzyHvDakXpzapQ4npSQJSMemtkYqp77Mayqrva63YGHxh9ySjt2ZZuWhxcPzhZxMXy3uHMY9E8XuWHgnLu",
  "key21": "gYMPR4yHYRj7hUzXKGGdheXLiE8zMdSsxoYSFTriDefZZJ8WdASsYvxjpDcpmbF6XVvmtg8DBpgqsfk6txjCCG8",
  "key22": "3jxbmG32xzTRsYt2GZExqN594HKBAJHSX2DQAH5EBsdiEC9b7tddupf29K6GCwxW6LsfCAeEhk9DWyzje7SH5w26",
  "key23": "2kREm1Uw5KZfVyjbWCZheqCZvMomTcYJJi5N6Rs7WxefmmVhXyjbj89B8ste3Mf4fYnX7Y9um4UN79nH2d62T3qR",
  "key24": "3qJiFwMzuhCDMoAb6iyssjC9DLLRUm6AcEsS5cQpmX86mebPfAAEA4enCDyRkyLUHWSEZKp4FycvjW1bWhpMzNZk",
  "key25": "62KPjKku7LRqY4pi1q4TAYvoWEq2Zi8hXNqQaAADEpxvx2urtWvax8XqZ5qgCqMiz4Cd6sb6BbUHndqjT4AJXaCN"
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
