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
    "46rhymQseTFViXCjDicobC3wUQQRKhH5YWrS5QVeAFwFrWdi96k9dYZF2Wz52yo8VySKtXCL5MJgQoqAcENaofQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GAf38PMaJMJVTrDWGkxmtxhAk7r4ijKBXJxQ1Vs2J46PLHQnkF6o3TvLVCQoHU5xfcYuRAD5rBzJdQ8BFGmsd1",
  "key1": "bmcwBANN1UeH7YgJUWuL8JD4SeViBfDHmziVxtZFYeC68RhTYjtDTwwpdxh3PFfTn7hrMwDgL5r5ASshsfvQ9v3",
  "key2": "5roKsyjy6gqhURxffQSpQU1sn1GrDWhcNJQrMxGjLcNahJdfg9sy1A5a1xNQtMvMnPi55Y8oKXMgSKHFgEn6LBch",
  "key3": "3tHkN94rzAx9WN8nqkpqjrV4nhixmVB2GfuZmtNVXWVd7MecNqipcF5sE3XAJEL5UJExiX72zCQiwCQxu6ATGyyY",
  "key4": "SSam4U55ndbnmnctXx2nA4PVYZhr9Q1ToysQiutKXs8KseWty9wXQarvUyxgNw571nLZzzytoE24d9KMEV8ZfHk",
  "key5": "ncXg3Kc1nYaxMjrz1UmSeXmUVkPSYxHs5hB4TPJUaVSYyfBB1G6DwjUDsXju42zG27qaMAp2iBPZWi2VnWwqVmG",
  "key6": "CKXX1wvx8Uf1P9jYYrhMpggwjF7BTFywZa22joa37BPnLNd43DFWDPscfssYSYQHbcAZRSAazvRVUWQ3XCuQCUe",
  "key7": "4jHtiWLzH8Pxnrj2eRZNRGZcRbEpeU8WduFQpJtymEmwgCTazGqEEib7LZKECKtJwp8VcGVg3ugUWXjRgiiNpfoE",
  "key8": "4dGm2XpCG7qV4kQfy6TqzR8ZNubvjUPEQLhfcY1he5HCoPpRYjeNvtYWTvmcvZmPMN5ekv3W2HPQnoQ2FeExwPZr",
  "key9": "44wXkFMB7WZsAZMdBKQZmUSzqyqoGywnG2W8yiAbR6sveeERrLDXG3JJTF8Ngt3p2jQhZyLVZXEeemhSPwcJz5rk",
  "key10": "58SFZ6MtqVQ1aN6fLaXRX2fa1wneyJYswPcKeDHMtWeq8yiVhMivFNw8mycToxKb8Amgi3QwXV3QLRb4ovGy3Qsh",
  "key11": "4XSZuLev4QjNJHoghw6vbzgJmASjCF7fjaypwcdKCtDiAdR6iEbNe6SGnTyYQhqNuvssviyahbdCnHMwAtncCSFd",
  "key12": "ebXRBYaNEZafDVz2xEFdVEjtq5LW7S9Xv6kVNNTBNKhwzupzFvvG11oVx1LxBdSAuVtq68YENcHHm7xhPDGVdcs",
  "key13": "kRtbnFkpEg6QAiiG3hHDWGipXyi9NPddRsuND3cp9xBKbDFiaQjdmxrtkG8ZBUPmE2dbpVgi3UX75yt4oLtuGc6",
  "key14": "2gTpWQJ8HuU5HtbTJ9khgfFFHhKMiQxuGuPj6dqyaY7W3iDaL6KXn1RzBeCppbD4sc9mEAXZe6LroQhJFEBirpCL",
  "key15": "5yHP3sSXXvVxPBs6GnrjopAgNs2zrGvdzpJNfGBL5MQzvkmhETgCv9xdqrbavthza8GjRzGXX2aYCjEpgkXvNekk",
  "key16": "4CvYn37jnrzqsFGaPpM1RFkomfR33fLXdcSX7kpPTpFSJYnHhRHQZrMAMG4Uq1mHns2FUT4hibUD57dNtvHrVJ6S",
  "key17": "XgpfakdoP4Njzo4vNszMxAUTPC6JiSWdrT8t537jBuTsjKfWU8841Qu65TzBAyee5w4ZQhxkxvT743ybjZZ6fex",
  "key18": "2UWn5Le4Ncstqg6v1D3WySBbpu4RCKWcFCyiFue5eCyj8jk1yadreiSg88rmBQ2Vo2xGTJM5RNS6iM4zx8e4b2wW",
  "key19": "2gHNJV9nDaSaRjrrUKwAZAmhvKDsvbjaC6Ak6JeVuZ5zyw5SYZvoaCu5jvND68ihjkFksLjWAXKrJ55CZYNd38of",
  "key20": "3ZRgE5Q813xuaAgBnHK5W1hgdo7hutpppiQraS9gQf21Sc8esNmwjxgvDmGaF4yuRgNTYboS9ZjircQPpBaZxFRA",
  "key21": "hqNtfYGpLm1hvzCGSQwuLzMdgdVxkAWEnp1hWD5MYMDT7uCvNiY7ipLrrWCZQnP8Dj2oWSgCMFyp7e4w38RxhMH",
  "key22": "2gmGdkWPbTa2xRZiNqBGMzpDARMo9Eg7C4dEBcYDrfdVez4DvkSwYBea8zRha7m43hNmQuYeTj5G1B7ScdTt553j",
  "key23": "5wX69tWpr8LBmFBmQoqp4Bqg3tFTSdXQKHLZLGHqgcpBgdFSptRo7idv8bfuj8T9sDXqnpK28AXPBkn5EhopJ4zu",
  "key24": "eJUPjnPKA46RgGQWWtVu3X45YZKSjz4tj31feqmiWq9qWrxSqgoAQDe17h3vsdnMN1fMreKQQG9K7U9JVmoHt3F",
  "key25": "45qb4fCTQjfxkgnF4TfvM5EM2Po8AKp8RHbULqSj7b6vAuecqTL6Ys2BC5R413W5pvTv2wdWRvSDTDPYCdsERwgC",
  "key26": "58Kz9AePKwkiTLCW5PbJp2Re1RgvJxuPeDJtkV6uUKomeLsn6kVWgkeQrumtf6u9G218RevrMsm3KuGmJ5pootD1",
  "key27": "22dDoLMDUrHeyUMMPpAHA1Zy7Uhfe5zbcPY8ceKpfoJzaWJwwhY8j7uLRQJtyuS8kdxAjSmk31ZAdNJgqZMrehXi",
  "key28": "2vqveepGhrhuAHY1S6B6VpHNT9G5mYSL91JwqkD1ZfUpjkso33rnVWuUPKBqow42WZkRwHCXB1r3osx8rfbhMGpp",
  "key29": "3rbPDcX5DsiYj4AjhMMRmkuPuLsrD2JXvoFxDZyUJ1K4ntrdfAGwJW28PRzaXjBdcxekXCEUPFHgACtQ8WizqMJj"
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
