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
    "4oPMzV6u8Q3vYmdqZa9ynnNWefvyYkQjMbvA1idufr1P1JW18hHN6za6Lo8HnY884iVUyaduxmmxeJwWs7y6iiiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSnAcSaYvoBpD4aWWYvK4uEWpbMYLnVRacQLkt9EZfW8ZPbYZ6vxnX1mBWXdy5STGWRhctCKgvVRrRBFkKKNFwe",
  "key1": "5c41xe9d9sjmBwgrjzRkfEc4zGv9pdAatV8JEbitxpLFJ9ufVCqU5XDYhwTrjWtkjf4tccz74y2j5gx6pfkLzJ8C",
  "key2": "2HJ8EtZtYQwpvq8t5kTLj3bcdRdcedzHyzmDnBMsmWgh1spTbokgZ7Y3SuAF1f5Vz6qEr6B7WNdsirGhuYXrdr6i",
  "key3": "3eb8WQTnDuK6BRSNceEzoAdjDAiXxvRTbwhGbTGqQNSn1HF2ycdQziGAxi125YDiwNmNSKP3pYNqFvzwg5i3diS3",
  "key4": "5JQ2ZNAdGWda2TPjzD7cFUCT1bY4y7WQhfYRYRjBf1YgyXTJCgcpJMTgSnY5FTjQVzAfqDA1QdNMnNn1EudF7HYd",
  "key5": "3gZJHyDUb8yHjG5JeifA2y7VJaKRbNSF1kbon6PhY3xPpf8YjQkHtQDiB1gKuxNWzUSNNiZpKqUyArogjjpBcm4C",
  "key6": "4EdWFv9bZn2q8XLeempwWKXfUgX1CNR9rnLGYwoAaDBkun6dSL4PCRLL7wNuDLDscJg5ub3xgU3ehGbq2Qp2W1LX",
  "key7": "qy5HWb3ea5Lfaq1UQCHbmyzxZSWj3pvQd5rf2TaKJ9HzuvstC17x4Hkfse3krCeXKXe7tGAZj5m4vuQwDRGYTSE",
  "key8": "4BNVxtMUGfYnxCoExyaxaDkd5vADghyJbFUrdvVuQXd8Z6wnqM8syyN2w18nEJ9wjbueEYBMoHu7Vezo1UwPY3yy",
  "key9": "M7KjuiDwRFTJYFucVtNGm5yiDyun3LxXYJ3HHcgChLUaqZ6RjgEwTXXHN954tw9YYpStG2xA1XBb4zAdfGp7Ci4",
  "key10": "2zRwDw7vLz9dwSwqbX27oUx7A9JMtn2kd9vd68XzpWdARUmobtjbc2wvFTt7EmDVAPsjeiwox4TXofHVRRhgmrGh",
  "key11": "z4Xt2hmHXZC7vuvWmBMP4pVF2rodCJyYmw5rh24uKUsyU9vb98MdHfHBMBKw5iNBcXcisDiKqJ7JaD9aZz38ma1",
  "key12": "4VazCydoJd6prvGXmn7LWmNgkoJ181rcjWrE4itvj1xM9qY2w4grVQBq9cx3At9Nzd5kAWv9Hqr7ch4kCQ6b5bNw",
  "key13": "2ndMenCyew54rAkGWwKZp3PBQb56ZJj8rQTn9umEiSeyzUBnwcAWfNg17zNu8CuV8Zj2xfYF7BDG1X6Rfm9wkrm8",
  "key14": "5ABtZghGJRJLVsjXJwH193zj9g1nACiUK4h1hUL9nezDdubhsjDRnFyPBfb8hD2782q6Mq7SWbJ1KHiY4eswjNxw",
  "key15": "5Q7ucuQtjNRSNddrXhkJ33DhPxfcDPWNRz6MBAVWazgaPpxqj5qYMxM8XFeeps1z4KcxsHh4PK9abvBhodLyT1st",
  "key16": "2xLSGugiXVpKCBnDsttT8VfGmMo2YfmepRP4J9e5NpDJs2kLtM2B7RwE2V5NU1Pq9ZoBvf2UVM9nwsnSSMaj1JT1",
  "key17": "2tffDD8K4Qc3ydDYi4ze2SPoozhpxVyezfPvarorkNgJt8tQ2QsbFXDYUyJosW5iB1dRmCFTc8Jh1jbBfeEv2mTP",
  "key18": "4h8YX3zJXLbq9jVD4a6s1o7Jbe2QVebqtCpmd1DfwTUkyTShtE3vhU4T5TmdYn4gUdRkEaEPab8JTGTTVseTLJq1",
  "key19": "5sfs8v7YF8ngua3Bm7e57htwEMfYcdAtTnc1QoKdfZjAfyJTePAYTszfLtkZrCeGK2vhYbs6Asaww8XHPamsMpwG",
  "key20": "7MNkJ7S7iE2YjyVP6bqyBoEyRHF1a65wMvikq8xTKZJb8Z4pdjhycRD6tsHiM6VnLKwk7UUhc8L4b5PRxpg98wd",
  "key21": "5CcygMojYrspgFCbbGnZCSnGjNZwiK49khcrajYw3sw8pxc5dmfhjV81wWEAdd7GmMHPRVHC7NUZ4ghKrdBzq7dQ",
  "key22": "3HtMvZ98gyxniKzHEo7J2eo4odtArfsVCY3xjzn55Qc8M5wCKqyNWUbUEvhhtre8eB7FEHohyw8ZG6qpdKUTYHVx",
  "key23": "jMGmR3FWx5W6s5vG7U2pNGZAhC8t3rKRH9P43pxpaKanRxHbvJDcSHFriQ11TjEAGyFhRT8vVoQ2jzVPY2EpqoS",
  "key24": "4wMPFZNqzJF183AueATVgNmFMPXpdR2mpCS2788BF2XEPn9U7K9JVQwnDt9Z6WnQzpjjMYDgHmKvFeqzeJMAXmCF",
  "key25": "PSM8zUX6cYHcctchfsgQahK4LwFnsu9jDuoowkY1MW13mcUu7Q11jWmJaRMZ31eXRajtRezvFjSV5SgJ2VKAsm4",
  "key26": "3Dryo1JELwS8Qw6MTX7nYzimycsGnAvyaqwyhQrJ3Q9bFhoZCpLjUCDGQoDYf5GxyoDQcKSudg6Ld7kBiBshy6FG",
  "key27": "65eFPj8US9cAx5n7pNWmFVnifN3vTv3WMnrvLeyp75kLc5ifRXW5MJrPZiYok9PfwBm26kRQCFSAodGP1uwfvGBu",
  "key28": "2Ew5Datn9jbr3W9r7vhcctsLadNja3idE4aHG3T2rMFJxbpA6iwXCPizjcXYY19WXZGXS8hfgxSSQ2G5GboiBRKQ",
  "key29": "5rXxnxg9ek3RTHRD51ncAcPNNk2LfjfwfPhZ7ezuVKQbyR6FH8nPTnuyERPpX22UJS43kkFuy9ArkmnQc9UKC1x6",
  "key30": "sB52cXd9gjonqyRpG5cZiHHkwQSNhKpSBB4zL4nREStWaohFcNv23xcjq1HmtX8z1SVu8x3FaWCfikC7Ub8UALv",
  "key31": "2bKPqejBfYqp6te5mHih2LAN4s8byCHubUkwZr6uj4Qpr4cfpTD2x7SSBdWyCDuryxwscYHd4PtgsHspCg6sjbvg",
  "key32": "5xZmbvf5p1HJCLrg6TKR9MjAo6uHA3zAN3kJa4v81oLhH33BSXYzGoitaXHWU34o2FHHw9z5H7kggzkyxMjBNFZ",
  "key33": "4Mv7DF4mEiNTCSoJUagfy84hZv3wL7Q4wNYNmMPsWaNy2LwUQL51v32kaLcBx2cPA9BxULVykrc3YTMbn1Q6VutW",
  "key34": "3xH9hDsYfbS9WvJPiqZiJedZx6dUPYGAPyCfpFYouGNkcEW8zuCxqSUDnbLAXjMaNStEVUCEW7atj7xPFiHAg6fb",
  "key35": "4r7CVNXNtpe5jCTaiHtAjxSszoq1VHjjs2PvGk3Jh9BUpQ7onzPrPG3DYc6Cexp7kExQW4w8nCJAsg3fdq6QNUFX",
  "key36": "2JAFGF8yscwNZiT2kcs9JQwZ9YcmxuMTMgJSTqxLhrpNEnDgmDxEX3byzbn7hxYfkUskMmtU51FhQS3HX5GkgqrZ",
  "key37": "37gdJ6ZctTsVs2by6DWePuTWWuGC1M9m5PvpstDmwMWjbnVHTmpkLbkswEoqioYrv1ySsWasMEFvkWWCRPLrnFDX",
  "key38": "3ESecPDPwz3Z2f4ooB8TyFmXXru2FhirP82rwCLtz4wPH2inH2hKULt2WJY2s6PDxXC3R5rggmd6UPvxr3FF8WuC",
  "key39": "4rkx4rqU6c4XNte9AEZ3gHgDqyGe2nedUNfyJjtmfc9uGKhixmZfPjqiVcEbnS9MVxtpG8BKvpvvJ1HcG91a4Rts",
  "key40": "4an6EWSGoDEzaVoXq47MExbetvgLBYmwzii7e3sGeHug98bHoTn1YXQNbMh8qrfNVv8sNzJ9XEJAhQdJyFBNSRWL"
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
