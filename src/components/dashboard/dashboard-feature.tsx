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
    "5s73nDpJjLDGUSwwbyb7NUTYmJ97GCXcP81gjFLc9DfdNF28jwANiR6UfDZcft9xdqXHWxwyR1oHTsyxMe2auAok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nm4WiFQyx97CpyXDCjacp7RTDbnifPqrdNSaPXqiMBkYCjeU4ZoaT39AEySnawVFNiGk5TXAaiS1TuaWwNMNtnF",
  "key1": "3AADRpHDAUr5qV1NS8xXnGycnFZgYN4ASzpKQufYtvRjKh2F4nwXyc1N7ZVqxHVPDawiXsKbw6UV1UGvb97KZaTu",
  "key2": "5pRDtvxx3JFJyyexQ7yjwtdcJHQekis9D22tbmU73accmdpuNMRcYVzjh4tfueFXXzZrAMfXwTTdKzmRCdn3FBCv",
  "key3": "4jQG6o8SJmvBUqCSY6wWJpb1XR4ZisGmLXz1iGZKa6DBLsqKew5fyjEaSPApZXatwMzXpNxC1bsPuSXtdNbNgg6G",
  "key4": "VdzNwtN7YDmvpomdYkaanjeDeUXo1dXTeJBq6H453NY8EoKfkooBG3E8THV3qdLq49g6AzXWBVkHfwVuGoNxn6m",
  "key5": "4U5WwEKj8xhkn4NbAdbxYXexqB7UUsr5DMimH2sQRuPdvocLBM4V8BFavgUpWTNfri6apny1vEAD6rfg6kVpLUqf",
  "key6": "2rwye3k2em4kKLV5LdPoKvebrZMMzjdF9PXZTxAr3rXiS4CnCeiyhV7h6u3YtiUP64iH1VewWgTDATwxuFDgzoCH",
  "key7": "2GU5sbTK72g1TjQqQNbQCig4wj3fwifRoC4d9GZhFQ978JQGJDFKGjFj6Eyncj3RqaDdEcSkL36cZv1B7qiLWvgn",
  "key8": "45gJKwhKsNHxgNfKTcGBRxd5QvcZCqx8jcZMnLRWtvD5Ph7oUnPYm9U9sNqEHW8koAeRcY55RfEytbYFUPGtJud3",
  "key9": "2EvkHgDn1WB2GVG7X7rtEUC6Qw9x98rKgTfGwZZrbsmx5ArzdR9BocMZSG3YQMtqRCuohHjdT4Y2YCihxdxY4G2T",
  "key10": "2mFceACUuNLJ9WfEhx7zEHMem6GgtqpDE6uioBRWj8S2j97XTWrZaRn8AdhFFH5i3dezitn9NNnpCrgiJaxM2J64",
  "key11": "4umLCHFdnY7xv7Wjpgh8T1fFHyK5ih4ZWMnJvqGesy9nJfhV7tZDuYAtAbAyKm3VMbx1kcTDMUkgqK7B4B9zQwqu",
  "key12": "4EgQgu7NhPu6TEGGUPL4V3RtFJsQuupCcyAz2DSLDL1S3J6gbzTzBC7DzonxuXY1vyDTgYhZ8b73H2xBaLQnCUXL",
  "key13": "3HgMcs69zdy3ZtfHt1fDea6HEzTxXUqCtU475KvQnWQZHHHD61SFmQSoqQJNfAg2SPi87GA4E88Vy7RMTyqQqEaD",
  "key14": "2K2oUUGbtTtL3a1TVtBseSahGo7sGxKCM3xzaQKBh4CWhh3HLnoGoxgtqikTCJU22EE47sTd8Znv24PCARgzEAJQ",
  "key15": "5bCp9Pmh6dmSWxTLzqQnc4Zdfx5RHBuo4QNhTiqvdVTWJisFFsJPuTAw93rqPBMzbNVrsiLjdmqkWpm89ztiedak",
  "key16": "4FPpCD9h4w1D4aXbQus6k1Yg3eiZuEcsy9mmBzp8KHFEZgYWw9tXw2Rnha3Q15uMvviYEuyW9waFaWvCzVoxZLSS",
  "key17": "4135Gc7pxwRhNVGTv4oEcehA2xgHg33Wn7AQHjdPdkMDYc8EYnpf3fYf3X3M7UQXF3zhJxMgbi5Z54amFXKsLSnU",
  "key18": "3UFVB4AKrkTMaU9xFwf4tT8WwnnYugGeyxPXBVDf8T3T6iEEPxpiUFHZ8mrES3aNtUzgGdBF8yh45Hwz2ZhKRB69",
  "key19": "3voDcMt9ZjEM3XCAnNRzcmm3GBP8Yd9xKCAPuCcryzYqup46PbwLrzfpRNcgdqkfHGrHmM5BBCWAkXAtCTCFvgx8",
  "key20": "4R9SJSZ2DvZZZgwZiDU72TkRZvo63Dr953BY9VMmTLBST3nVmnP8iVdmqjkckvEYXUzuD7oACsrXs9y3qamnMzQh",
  "key21": "2dTvjv3pudgGUzXxH1gYj9FT9PVHr1YX41vn1nPTzKPzHGVJyg99qNfKu1xJGVCKDqZnKwjhkNRWSMaBeEZQgNDJ",
  "key22": "4o9mqLYUtB95Yh9kQBErs2WhtCkmc43QBhJzMpZZMRAryYzD1SqAhDR5GmtiJEyYd7WjTre4cGUbR3qQrTKj3mCu",
  "key23": "3rMTU2wtgs4Xc1Td6koHu4vQx4hjUsjHajFr22UqKMyRr2AbZG3URmnkjiMcPfZPyMnaVQ6XZEiiJXyXzJ2PN1rA",
  "key24": "27RqE6Y4mzgVXPmPYfgm1YmBsdp1Z6fN7GhXghUpyhQqA2u5oRqow1Eb1RYwgbRbB69rWGUwwW8wJETRnRaqh4p2",
  "key25": "3r2YeUaCJMnuHGA38gdEwhdYqKBfo4A1pqsoDUo1w4ji8CyttPdKzDp3z3GDP1mrkr7Gds8nyPLgd11TaqCGjEyB"
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
