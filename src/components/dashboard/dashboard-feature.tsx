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
    "2frsJcqXF77qfysURqsXSxXHTwH8en9eCEehDLvrj9t3E3bLdeGhaafHzrYg5k7VECWA41jcWZEhFn7jVL8RaqoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WN3p3k6qXDANpcJQBWffpCuXjndxVLbeseK8RGEju2Rf7x8ZmfC8i8KgY6MvL2k8TtqxAWaGSPnhDU8SnPLdZJ",
  "key1": "2B5baJWVdH9SboRFgGf8tcnHeTX6PWBYxNKaPT28tMHBGydJ2UpnLWJhKELUtNiHEACsHLLQ3uy74ooJ7nNmHoZ4",
  "key2": "2W7AHVTqDLswwiVoue99pYFyrrKakkFWpcDZnceLbkSTQZpAmTCqz7T8pT9WsBg573QUFMWi8L1xFjjYxq2Y1ghJ",
  "key3": "3pvV13ydBnbmmjvvKNeRQ2v2Kc5aU9Krf1LKBPUQAdFmX1zinJw2JqXTeRULyQeHSsNGcWPCr2acUfxpNHzio94g",
  "key4": "3vhUirMBnW7HpnJ9HJxVcteSZA7cKRRFAJHWxaFCpe6b7Gje4KXDqTvA6m5gnNLz9pWjwstcmrjENeksiAaZv5eZ",
  "key5": "2wP4o1RiddVTrKZv5vFXmGVMBDxjnNUsrJcU97m5AEgfjDPYYjtaspq3icncmyhjijM9dWsTcwGZKcyn5E24gAqA",
  "key6": "AtFRhD79tn8MjX2QKVfG5N4rS8vdpEa8xmC4NngAmKg6QYSgRhF2wszF6CzSWjT7w6XAnCRX8T27ZUHRcWLpdnN",
  "key7": "4i3BtL5BLgBGUS7M6ag4M5xezC3gynACGRBrEBGj15Fgoc3zQNiCS7EdPGqgMXtSq2SSFmDB1Lyq4sb9r4qkyP91",
  "key8": "3j6wGJVmfkBDmjmcV9tJGZ4rPyPsV9ahaqpPQ5g1EiPQB7GjQB63C8mZybZWHbLdAQVoRDnRqhfVVe9V8FBkQfm9",
  "key9": "3hn3Pg6uU8BJ4HmkG5EkVQjsrREpZeypML8KzPRyFoGdRdvbNTqzEWFy1aHP4cLQjgxu7spPCcDDoNubns4UDSnr",
  "key10": "Ave5WJaVt3Vpqjj6PeBp4xNRkJRvQ6mpohdwpKYMxwKodrfSSptsrTz3txzyPTAswCxHtUzL6MtKiMGW7Hm7Qyy",
  "key11": "3gqtQF8oMTKGmkittp4qTU6NM4oPvRwBBoLdwnfNFCZH5ZXV1rDi4ZLtup4dEqNATFzKC9TQG8tw1zyXvk2b6HRg",
  "key12": "38arEuX81h3R7r4oBCSdAM9CELCHm9MU5cB3MXfpDvoesS7aMbNQcBXKJBbGVCURND7H7bbtqqwTMoLZhq47fthD",
  "key13": "5LBEUskrwrzyB21URc6RPjArCZYWQi7kRxMFWkgEMqFbdNq6nFwxQEs61AMWfVXKQ8zLWCxGxGhKsiKzDkeg8v3F",
  "key14": "2RAz14w2XfXF2ycEKzfNJKVqB76qgdA1BYntyS7pti28yzpTsrTHvk5z68Tt2B3f8K1NMfgCtTmacpt4Wr1F8VnP",
  "key15": "arxNhLsPD6hDNfVuUWibPqVC8XeZJ13CF3ks2F1KnyieSRdxtXGedX9e8UBNnV5MFeUHknYsVKc9ZtXLxhVTpk2",
  "key16": "5W8JS4Ff6kifrbQ8E5dKUdDsYtQMUrJCBcZKYpiYjiqDMj7cbyJ8Be2w9wyuGk2mof5vgzB9Z6EuYUr9TBAR5Svq",
  "key17": "2SJAQ7PsUutra6drHYocqFyK2tSMj84fqRVZtFNT5ejnYXkiGuRiPiZPdKrveBChK1KUxn4nLfbjr9tu5yA39m32",
  "key18": "3kY4Vcdp49ge8mR6Pw9Ng94KE8KEFKxze21fdQZD4mHa3vLAx553aKhpbBbE8eFaJsZ9Q6BCr9XTR1bwN1XzF2un",
  "key19": "46kj38Y8vBE4nKLrznL4AaYJ88VajhzRf51Qy2Zv35kg7dAPtUqmEdFabnDjosEYBzHra24rkcJsvWeL9qFYyQLb",
  "key20": "4MAmELsTEH4tCGanbryxir2Nk4nb55cqDUagKTx4BbZqDFA8GZXYuSyAEkpekK2Ju1C2Uca8n18FkmivrgPi3igE",
  "key21": "s99zpAfDFGvp4a1Vxab37wfP8wFJKe54Y3dPaCgHUghr7MBzzyPci8MMU33ZjiiRsysZ1kjUVaHqCVXRePpXtCr",
  "key22": "48ntP9d2S1F25wHTaS9GwLFxTZjYKHRt5jWEQsYUMwwd5FD3waPwrPTf12FHbuNgxKv27jQeCBRmPJUmmJUr252M",
  "key23": "2eqdp2RemC3UB5CK4MF8o4rsMyWZikU1RtaooMrwLPUW67ZPEW2fV8bx6SbtKzJ3wuAKFLQun4dZzmTPvhzsrABG",
  "key24": "kCZHEmbYHf7kXXy9KVwAFbxJwXtFGsSw3MCp76UCSLPhec462j147d3rokDZ3z8REgPVSEsxYLcoKFBrA2MAUtU",
  "key25": "2jUc6g3DCAicHH3PUisJkH4C23qKUexacYf33VW3Lu1nxy97AUpmxPo9EwP6WF4wn6a9gVxMM3sUqVztdMUsEGvZ",
  "key26": "5JXdbpTkbvALetoKv2ukRDnnL3dyHEiwTw1KUwH7JRTEXdZfkse9fJW4T8F7B2hV8BcLdiBjF9An6S3KzKt6NaXU",
  "key27": "66fp6YbMEZyn2zEYAf7RN1NgTJ96jWoKgRWaqeHikRxs2sATAJjv3kBXbUq2ZcSqsjjjNkTcrDQ2RiFCKKs1LtFW",
  "key28": "5zSZ5c8Yz2mabDkmfbnFn1XaN9FHcFJh9BBL1LdfX8TUE32gjjTJUeg71sVbgkSVxTrCizBqhyKbCXVy29HxF4ET",
  "key29": "3SfydxdsanbLg1zpRmeQLaaE8KQwLjvU7JC9GAyR99DJDJoDvq6wQVyC8SdqRxQiVZnks9xboLtmjLGkxtqvHvyY",
  "key30": "4n5baDxrPUCCKWwz44phZLCx4V6NgbFieq7p6Bkzfziru3HRVvEmQW1fnFSKRK3WA72xGVQ6gKZg1hvD9cQ8AMQr",
  "key31": "3PAPw3fezYedGniseM88oatLgYmmkWYzaiUDGfqyNhxRkRMDKcaFnQU74ndmhEn8jQ6eAtNU1wAYPr2ws1AVAsGW",
  "key32": "23JQzfVT9HM41rkUZubmfSAn4b9zFwQTd71VAMp4VD9PqLmxRjbDB2qqCsoyaa3vxEdUTB5swsUKAzcqiNnq9bfY",
  "key33": "54FcsXAMBi6URSKK5H2P7jRaGGBVi7CEL3pkDFaarduePgyQBT9QMBjxUQ5TWyaXBapcEDRtz2qA7xj8MYWvDkek"
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
