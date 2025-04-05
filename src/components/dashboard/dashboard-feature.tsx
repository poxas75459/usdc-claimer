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
    "4aLn6znWjwJFZeaWB8iXA1QXYaV7psPsGW1pbdPLN76ML4D5579oucP31pcCkUrdLfSuktn8K1JL8aJb2yQyasnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H1ucRAqQu5Hdi6nJSHHumDzQnzoqju9qrvsgPKpvd6LMqiWmqAhv18xZ1nDzGAiE4vQMEkHEdDCPrXSRm6izBzy",
  "key1": "2MgTivUjmfb6iMMH6kJi6KW8LVbfuge8sQaWpCNvmTv67G38qKmorksuJPhiJ3MZVCdWzzNnkUMasUgXPrkncqD7",
  "key2": "D6z7Z2ytThCvCkv48ZQxttHsaspLvgKuap92YtkHjY2iUB6CWvNSmpBm9BpQNbAJjtNveMk7e6nduWLe2jCD5xQ",
  "key3": "5DHzBc5NP6iwrce2zpYwxHCgeVdu2Q9Y3cLK7ALnLw5AyCDM4Jfko2gKL9XbzgnBFJSdRQVGnJkByFpQRBktwQiB",
  "key4": "3WUCnVBy3wg88ak28rexTeA8iMF2b84Aa25qFy4sizNMJMPqAQyXHAxT5K6mRfCNnHn1v3XEMyn4APFkNMXTHycC",
  "key5": "5kWhxYdNruWuTAbSkdQHfA3xgDVLtMLEBNokcbx2a8ydvjDVQSgnLqrYAKKoWQnxZvXhJN6r7Kx39BCkpDhVeAs3",
  "key6": "5bkXiJhtzvM53dsN5xA1F5kQUqmYemKq6AHbTui7uSWTkTaUrRxtsyxWcjRG8N4sMsgDHDpMR7JgXZyuF7bVuoiX",
  "key7": "2rHJVAFRzGFdqd7QabahyL3sq8cnRACnR4JdMerCqYTXBELCm9pkYadDfy3bAh6Ma5TCTrUNKTdrZcAPQLLMT6K1",
  "key8": "2jAuivxsYj3iuZgJNafdNHfJuyZ7JXT4V7wJ7kKp6U9bs3zBrTexxDHG2kTVDw7zMYoufUBwADqKpbNDR9gdRJ2h",
  "key9": "n9A3guc7LBrbKZzogYMeT3hcr2TjqCUqUM7RxJ17A3sDvVK72kBFdCAXCm17x36GhDkGJrUzSYchDo1BhAD9C7i",
  "key10": "4cmKdExPnnj65hys6vVjm6Xgjm3z61NAgf6FXxHe7jbFkMccBVyMk1iHzBbWw84ZT2rPiEQyPGCrrGtfaSf81o3H",
  "key11": "XuExiPo2uat5uV6FYwDdqkVbQfTSuVnXsxkxaXZqemUaw8sP4QPsTz6jfyAe6nLiAm9oh4WtX9ryc6BfrQom7Qp",
  "key12": "etxpAsAyAdnbhkdPq2g1vHoEquaYD5Qb16Ah8dmjpS1FwHYHJQF54bT47uEEa2hAM11YiQ67H9DChdMPiJmcDN3",
  "key13": "2Dryd1cuCa5zhxTQtnjrXyKdKDng5S87JPn8GQ3knQcELGCGH8Lv3BvkXsYeD8JbDnW3zaXE8aFEkMSS1Da8jz2U",
  "key14": "33phCKgWRZseVJYBMzPFG8erKWkWGs7ypFzju3yTKggi1LG7dGsYa7mMrkh8eFaCf2MN6Mk2D54yFJrLCs6B8Tko",
  "key15": "FCLywg5zxty9s8ttHfB1guFCAqrzEp3oVBLdtvvTL8MRnCKRenuoNaHdLT25z9LwUXnSe7LMWAoMZAhgBtmxUdf",
  "key16": "5m9v1x4KeECqMT6qZCLyHzgVLJwRg3ohaEckmph5cHiuWKwwsNiBW9rbu5bbCFx4wRHkQZWEDqHy1br67i83US71",
  "key17": "4gDw4a4tWNpxVm9L3SxdSBQoT62xBZoMu3jUzaP5bohTRWvQ3sKn2YNrF8h9iCwtvdA4tmdsefzDCJivbpqvxTYX",
  "key18": "d8v7STbWvbCXWQy8x6jKPbvAkmsBnK58U1wPYS6QwU7QdLnrwVvaZJ6c7mv5La2BGJDoaiQf5LYx9zKVTwiE6Uv",
  "key19": "Nf7CCzucMSTzH9MJs9jgi8gqnvkZd2Ka4ztNWJGUErixGqKk8QuPdmrJPrWa7KZmHSJqWueey5VJx1b7Ursubph",
  "key20": "2UwVooD7xZYksFtiSb3wHa5osWAeDzKgfwo7xJwdQFEUnSzrQTisLjLLGFJAp1HDRzVm6Q78Tz56i4SBjthEmtST",
  "key21": "5m48toVfeZ4NR5YRErodqZYDa2PqRTVdAgsi8JU2DCdjG3gJ42EdNB9yPWGZjqRJKyA5G9CZmB4Yd7VHx6KNuQ9E",
  "key22": "2Esj8r78x91s6SWCvRhcqBHUVjpDWTmFPaxuSoETNB4EmCZqWtQ32k7XayuZztfE9hi2xW9D9wzGPBCJY1yTr1X6",
  "key23": "5Li7i4wGj95hHZdKZNuMn4aMFvHRYZSkxaNxzokyeHxWe9VxR16eW9hqusmgJvzqr3B7LCPPBgRpr2KhQCF5Y5kH",
  "key24": "39Y2JnYvzvv4HdzJSjL3K7WkoYuLDhhWZoueKGPpvAVb81vMk7g8JjDYv9SHxMA8uzvn8EsUUddfpAXzrFzVaKUn",
  "key25": "46Gmzy65Jgmktkg48aLFqpUkUfPTf7yZ2Xzabvp3GGA6eoFweAZYFsa83WZSGydPJBmprhMiaC32t9gQJcL55q7Y",
  "key26": "3uaBdvJrdUdeYfo9Kj7uyQn7uY9npN14r6kDoshnHMVEiEGvdmnSbTQMynaPG2m6XZyTXixnuGHQnHMAGToVenun",
  "key27": "4VM1UMSoF8YAGWvpEYzstpExWrALUeb3DbcnZUGtQuQBSFV8VH3fY3By6W6EZqUkpabQv3a1rE6LD7De1xzw1XVZ",
  "key28": "3zbfHV8J4epmCcyQiQ2ePWDQ7AA6EFYkcbsPfTeMaF9y5aEhEJ9kYVabhMEMYyxTYUkgNXsjDTMiNWurSQK6PJsQ",
  "key29": "28xjqgjtQdbmmLC36U5QgFKELHf7KGBhVN9MHJWrDR9q9FM3abDPqpiX58icu5CuTBHVNrdyaEJCAJqr8gUQwGm3",
  "key30": "2zT43zWuemYbMjufDz7CYtF97ANWQh7iVySKQoxXas8ccpgRQPHrgJcbz3bwruVNBJUXX9VnjHwSGjgJo5FP4S6w",
  "key31": "5XB3VMg7TBegvnuugPEwc4LpwbDadQu3ecaSZ75nkH6YMCKj3jV4kVLFEZSBEFT3YNcZFsYWxwRy3C97kKbQtR4P",
  "key32": "4fXBgSYmGWRZjxVCXGyDACXEr2HB1dpU5U3ibsXeEqrpSEbea4BwgsShzTrbwv13wAu3c4Hx8nQcWAaqS58SdnFz"
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
