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
    "5M2PgXHtiMaGFJqAa572vVuUah3qodZinDXBEeo9fog8ayH6TxcY5z5w1QzQwbozvnSrw27qENvQ5C8N7FaqxKzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpypRCjaeBVJePa5mXKVtY6gR3AAWsMFV9ZofMUXWPBUJ6fJyuS9hR4Njh3gds1kns54WG97AvwW3ELnZkBEybj",
  "key1": "4mf1DRkqJmDbefwagh5awdc3PEsTX7zFVNGPCFtCqXSDEoGFfPgKaQE5jXH8KpThvXrWhQFB5PujTW5EPXMCkjcc",
  "key2": "35cpGzMX2vHwvy5oQBZoui15iRtAfpeWk948hte97cdgfHV4pM9V7NXV4HX6DCxtpsxP5xvU7Hn9MBM2dmzqex1C",
  "key3": "4mDGpaW3gzWbZNCDERvRniqrSRZrtSPck9ykUykfeiLD5mTsaKhfe6hwhyiDpthaECMa8HUDfhFcwuXigCC7kxG9",
  "key4": "wEZxJtYSZumknvwfQUU53vsUANNUJo1c2iEe7KQ2zrQje8KxWDJu8DR7uK19Msi2ZSn3WJZZJHJ4fquQiqGiM7J",
  "key5": "5xbNPeE291QZsJx5eBqDTpy8VwpyzxLoshNY6jYAzqBiyLdyRxBJcNY8NhrtpVFGBhEoKGvp2NDvtQWjvuGVCqQp",
  "key6": "5QsTxDzU2Q9X3pSaQ8xbvbpDX4JESZhtQY8874MVDQx6oS9oBuWmzmaDpZwTqw26YyB255w9B8ZQqgtAU35fhkxM",
  "key7": "4LSn2FRBqNgGgaF428e87isHUs4gGMV58dkpwbBsUiMYmPgDtiHCCu74r25GWvsSMKYeXTMqtnNi1CWNw5QPDM8H",
  "key8": "2sMCSjppeSVrUbGAwHUmGHEwDnSuKJj2Hmytk4Eyb6bCmzd5Xh4BX3nGjV3NBSMYm3rJQgSKEvJV3fjUSrDcBnop",
  "key9": "5CZd7WWtCgmSdjhmDMkV3oxKrbXTb95rtXiT2PGbzDaV3MNfXfqoW7kWJQKncFGMw5dkhmJofMiU3YvsvWgHypKD",
  "key10": "2RgAu1cL8JMhy7FNTqEFxnVMPuZMKWRmRNzKc2fQCVSNaKkdFD2pd5mQb8RwnJ1FKNyZgjsaijQaays1j8a2998e",
  "key11": "3svKoCRw8fo7Z4gjXJrhxzj51WcWRqJ1goAS68ev4Q8vzDjRncs5aowBZvZVCZmqqgqKUTVonRN7SUMMD2p7DztP",
  "key12": "2HXb9vWn2AkZ5UPRV4bSRJMky7cGqXU2hBKUVfUEy8tUsqJ9yscsAr4kGJRneTWpJAiBCTiqALTKZwMNN8EWcvG8",
  "key13": "2jrp3SQRFADYGDYrDnC3hwpUNGFrVzWfxJfSLbB2FTHHwFWvyQUgN2UCp2Lc7TAQYMyieePXx4oErjgbsxZtEwxM",
  "key14": "2qyQVtfnFdun2UBNnKeTj1kJdCujAWRLndP4SrLegauwgASshFATVdSS7cwAhoR6m9cwwhsqdg7puygCHbBuQKfQ",
  "key15": "ow1VE9b3aJVCyrVpoxnb7tFyEQh3h6qg6DRDDxPcj3eXBNuxRYAZwTkGpc9cFd37rC2V6z5Xj1bb3WR7BMQqYtP",
  "key16": "BGjEwAPgBQqVeKWwvKjEAjMFC13pykFke5iK3VJeKXevLJvNQ9urx1EpoMBMDHxaRiiwbzVPJ9qiapCBw3SfEmp",
  "key17": "fPtUH2ttoPZdLd8h4YJyL8d25oVQUK1yU5FKywuFrnUgAD8Km8mRjw8KkbZdVpRFJxqy1bjXmxcaqYek8iVJooe",
  "key18": "2PSkqfL4yfqpq4MVzUQ9Sruxxiw3RHMJVtp4p5jpRKeWKsUKghx9YU2JjvwCuyaVLXK7pd7nZkF66DpegGHhjv9Y",
  "key19": "4dJX8md7wBnqjEu1pQXQtsfBFfj8SvWGbxRWr6aQFFPmPcq8FYr7iRhs1DRWs4cihLYGb5TJiXQC7nV6MescV7VA",
  "key20": "2aDrUu7LLXizWN9LuxyxzwSjRQrCYgu3MzBkoMXJyjSTVct4wHCm2agysQB4BnVJogv4kh7wgszBHXcNFQXD31b1",
  "key21": "pEvaCvyY9hCe44XjndbygkseQkfj1TXFBXJSkAAdHbjcjmA3cfxuvazt4RpgBvzDrAQE46Ub19BtysDqVomWtDL",
  "key22": "2a7PdfQhzt93FNTELSfzafQJ5i6ate9Nn9b27MbNdgdwBwQJNgVSbt7Cfzi8kky7LxPGUt56NgywP4yjA98y14FZ",
  "key23": "GKFfSQ2XREPYefHT5SkyvNnECdkufeRNpwmDVcUGPzecSsvkpdVd2w7cpHtgemxU5TFcTBTZAmnNs4ddKHGrvh9",
  "key24": "4wnwpW3NXTwPtyhSqUWbQY5eaPTRjkS5TQesP8J88CwyfSzCjpkoZcdCNtpKvjtfPfP1nk4nuWcmKVjXc94zkAfP",
  "key25": "3v22rt4wmFV24QEAVFunKY1ekmySupDZWd9JTbsA7WkwWjW2Hbq8HhPLZFZKosQYFWLxGV8XuioaveP1J8gaZSgs",
  "key26": "2cWQ8U32cNZY1gEcdt2jCWyLki6SBkzA9ENTQyw9aKRZeDKHD5tyAnY7XpGc2TL2ZhQ1QL6YoYzeNkJR8CLJ8fed",
  "key27": "Lg7Neo2gXNW5SkmqwsgrSgXDm4nBEQBjmaxChTpbz2zWnF9reJzyuDfAUeppQmoVgnYu3X4BZL7qMVYWoxAryzF",
  "key28": "4TdHAm6vWSaj1AoDTqg9UHZcKBkPHj2YYWEvBqgbTLoBfccBQZbyeRUK9otdJ3nLpGKfgoiyX1A7H8RgxXZgtuGU",
  "key29": "4L9n8WGqc7VWRg6iq4mPSyQHAiv648jX4YhA1DvnapSZ1D5B4852zxXHqk4LGK3rMZ57hUB4afyxk5hz2LbvV3V5"
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
