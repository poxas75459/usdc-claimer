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
    "2jkhpYLqpYuCe3D8CFig27dFFQZJCFsEi2vKibeZUyWMNZyEUioWZFRn9nV5HZg4TDBTF6zoNMfMSDErLvbZdRR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2em7r38v85Ncsn7EVZfqKjyY6jrjaiBJ62mvAVauy9qo3bSQT3DrYmXjhZbJQ3erWe3Vzx4gT2Ce8rrgSFmtM6Jr",
  "key1": "2bZCcs9YjTC1s4yeGsMa4eEGe3bDF2GLFfjmFu7QXcknm9ygjSmf1FUewEYofm3PkKfSGuLTspJQWq5irArp3GcU",
  "key2": "Kk1KAKX9QwJZSFXE5i8a1ThP5H8PrvtBcb394RVmkSfywJvYKaKMTu9fHgCC3L7Yeno4UpynW1sQNXrKNx1hEos",
  "key3": "5NYCma9Y8LiyKktv1NDVGrnyjQvuUbdmnrrkSqLjoVParV3fQ7TeEGKmPkyVYtR5RzCJTxnTEe9Do9KZHSKprJxC",
  "key4": "h4YspWviBXwJieWW2aqjG6opZT61Gq8R9Afwrynmuf6Batn3KTngNpDke46ZHuFVD34EtiDqk8t9riBHiVzug94",
  "key5": "Dr9t9MVGLHRZY2WNejFfpErcF8rZwWErLwfX3zRFr7sfjoAW1K77hZLCvRcf3hWg97B2yPtxiHUDC5x9249owLE",
  "key6": "32VSu6s9o5ywhMnsrLz9nVfrochX4hMwHxKfv9hiUySNgzm3dU19yVejsznTicBwgRKguiya5KneJQ1ZzugVPtY",
  "key7": "5f2jdq3wRn4xKpYZFZm1KFXeE8BwaRj9hCYtMJX7Uh3SHk2EqQPKwjn3Mn3RuDcmUcx2DoZ26XBVpv4xdFENAHwC",
  "key8": "2jBBJxaXTLTYcLp1vnk3cU2j1S8dVGV1tEk61TX1qSZamYyEqnD4EBD2mRrx3hmzFBWYK9oGNDrmrYjfbzHLEj96",
  "key9": "59E6egYdGcBE91crtXjbuDyWhPJe8Q4h4VA7MhZXdye2sM7VEr1cbJLrgYy8FGDpKhfcrD1HN2PUVNEs2XXY5q7Z",
  "key10": "51gmKG8cDdBJt56SiPTjLqHyULx7ozwEVJryho5Q3bM7KwZfztgCL1fjcdwWoGdahAyrPzMJZ8QCYtjAZaCbaLAn",
  "key11": "e9yZGTT1adQ1PVQmBiCs8woXC7kHMiTiTECweUDjDuzYwXAUY2gijstoSz3PBjLy7rM5n898C24WnqDqkRGfp8K",
  "key12": "4ZT6ewhuL5LtzcvYuhv6dEPTxYTQfhe9crFsinPWMxsStZ3oSLXrDRyWSyYUoLfx2SSQDbZS29AUSJSo9RhpotZ4",
  "key13": "2VuMCPxSsuWeJtpjVq6Wt5wwoCWrZboL76TCVj8JKt1822L9UbMmG7HxuYZ9RaCqAKKeiM2QHGJjHDjkjXFW8SKp",
  "key14": "5qznbpbVAJMp1bFpNp7GRggtBknaz1kGgharYJutNx8XLxyPCFwPzNUr2sUTeAiHTaMYKyTNG9zQni2ojyWG6cWe",
  "key15": "4kuKh1twqhnGhABccUknqqtnbnBUeVytuLGjjwoG4WL2fLMmc7THAmFBJN39g8YR3yy3e6XcyZ7MnBHWQGqGByWF",
  "key16": "56f89PK8EHSPgMbRLYznUMCD2BsYkWWwJsEgeh4Qkmug199SzjMEjhWGGxqmccCpqQKxV8npDsDP5Q8zABjYVjkB",
  "key17": "27BQzY1C316Dk5b3dng4DGRwtBrXW9ChagUKur3drG2yYTLuoup6ygdq225Xs1oaVDfJc8wzQ2LHHN3EyvB2PUcY",
  "key18": "pFRLzCEMdeEp2fT6ST19wXyBEZhzEEkkHSbt1YGYwc2JEVxMSfyCzxAwFeKk6QgDwWmXmZD87kYm6nNSDsD7A9L",
  "key19": "46LC4eKNcw9SWwq9PEBAWwiA347TkfSB7ZUeGzBS67Pc2gXQaqna5WfDgSHGfuPx7WCCu35dc1gEBwDHWJnM7qjW",
  "key20": "3N4yH6oFuJKSXyzc5myxKdJH8gczmsg2FREwbHdRewV7NhiyGzz8fgXShbhoYtPYtejDexDDPwtnVfXT8bwyDfzF",
  "key21": "2wtD8sbzU8V4UvNrbh1vWVrVEoHBrQKYGZL6anbVCksSf6KU7DsUfMuaSLXwXp4E8PkhkxdMGJaRDCK3aQvNqJHa",
  "key22": "46sYQ28FZFGudKa3qKUmiHDrGGdbtFAgVsHSqp9KGZbYe1mQMAMg3T1ikSK7djth7ewnucXC6d2NQ5XaKa9Fe4Rw",
  "key23": "pesNcw4139Ry4gxenFyaNwNPpZ5G4QxrNk1S2qAN7PwrTGxBiPRik1GiHQVdJdeQpJdCTRqo836WQUnyjnRUkgU",
  "key24": "5CVFQ1rvTtfAMsujy5JeJCksVMD3hifc5c74LhgcGTJRLCKBLJybgXoqhUxwx7U2KUxkpkPsk155zRp6BeBdyhB7",
  "key25": "3wUDmFqGaxiNyCLVE3wQEMiWeWQRGRtCq6kRsKDJj8qNh4RTHwyRZHRKQ3PXts5kkLXV4wxgHGJavpSHPpTLZA7i",
  "key26": "44no4KHoJEMG11aiPHmFzPETkzzXKQNhPa4m5MpEU4JcjKhe89hSAVJkRphRwKuqna1sZTZq1NBmhVnXKg4CvzXh",
  "key27": "2PsUAj2nWnJfWR9Q1b21ugNixAuWyAwXTVA6N7JAhPML62yhesPsut8UMTP2KmzaQnwvEgpnAS5uaXLBTebKciFL",
  "key28": "2EL9GVn7dXaTtctpQdZK7zz3Q9aZGy8UM79uoEPAbWuWz94cAs3XDwCv8qxo6VKxSD2pS62Hj4ayuNm8aWhFMAyX",
  "key29": "659YmhfP9DsZ6nndyaspokUV2zPL3XoQSJzy9c99SwWP3A1247xB3xFuxdLwrhMSvA1wBcVeQsbSs5sD34cbxNTu",
  "key30": "5QpzZgevqY16ExQr2ZkeYdpog2U3bLKCXu2hwbHp7kHW562XnWVmQjHaXGXCvxhtReFPn3JiTubZWvKEzA3isQcr"
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
