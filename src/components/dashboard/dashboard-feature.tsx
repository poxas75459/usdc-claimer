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
    "4RYu26N2QQ7f29fDzyrJZU79e4r5DR3Ddhdazpw8PPjWF3Rqp4ynPvb2FhVUwg8RLpn4X8UP6aq5SHv6YngeqE3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzw4Zhn4JnGAQ5U3hWfwMR4Zb8rK2hhcayM66gqVbiVo9KiSG3WoDtsHRQreGbcx4qMMjYYWb6qLjcKgjuTffdT",
  "key1": "2H6HpzqasUttZwwh53gkBXwvYGGTh7ztCnwAQo7K58BrGN1deNk95V2gnYf2dig6sDEggYfiLR3Aq9opUbQxXLt9",
  "key2": "8PEG9QpwgESRCmMaaYfXEHUyZBmEEmbb2YYyCLDSk2EED34ns1P8AD14TRVuWHDcQkRGkoeHWQatLeFb7fgRLSa",
  "key3": "5ricUVWA3AzJwgijXF7yJQHtwHmFqx1PJKHkhXuBQHiKsnYgaugS1A7TtvSK1myLeDLpZzktm1VXT4VE9EtBVzmV",
  "key4": "WtsFnjEhjQRmkn7NgUrbBZG3h1gZCMfZJPsgKLrVEJRFiFvP1F9Yv54zj4YUi7Ec4WGMU36JAuFJcBy4gCUKFwF",
  "key5": "2dYMqoMfibzvh51gUHSPcb84yQHarc9n1ftz1XFRxjLqkLLsu1ph5BJ6funNMhBVXSwGsYR29Kedy9EGmMaWpCkR",
  "key6": "24UE4NJyS1188oQ7yPG4SBzsVHbufWiCq7xvCeyXuFixFdbXQ1nxgtWPAre5ovXrvVofc29ieh6jttf6SS1kMZ8N",
  "key7": "3XHjYXXDzGuq8ZPo2geHRiFTAtJ51VLCS6qKAhhWs2SNYtarrnUE9aSP9uw8NZW3gzMg9hMpHidD8X2tRFfAb4GC",
  "key8": "5nWDQqj1HJXo12Qk7thrgYEqCrrgqb1vCSrLAxNKUvMv2wLX5RW7fXfDaZXyiVHEv9j2LU5f17qQ3fmxCtWHgzH7",
  "key9": "4yp9wx2rTmPtJ6xJQaHysVhfo9NBnWy8ovfh1knVrHSUsfTfuNi88oUP13LGEHhpJsbBD9oufU2pA7N1WSqvYkpN",
  "key10": "4sNJLoQREAEGFYaPHyqPJr652XENPDVYWpxVCg9wxJMevpHDuQmRL2Lkp63rLVSjVv9okfHJsFXtqkLWkxMcMMUd",
  "key11": "2dXMgxRZ3Mptqx1wNQb96gbpCT9cJLfAdyJWrV1WQxWJiq4mCBCfk8hktXaQrAwUiyHFXpLphp6M2chffjFx5gQj",
  "key12": "euJwxFjhcRrSeSuUs8uBhbnX4qbkxMwFXGrB4kYzhxmJbaNvruHmyrV1ESP9QYb9wWs73a1sN9MMX34WP8FX5ko",
  "key13": "3jAuWmzeKzDuxW4XuYe7ANSeCYBDPCBx48ZLzTj7UQ2yDU8HUd9kWAppkQWUYwXXhAhqnp7ZjGUFG2qSwp8A6Ewg",
  "key14": "39eBfSzZP1Ru14phqdswA9TKVpW9qmHDhkuk7vstcSBZD4uQJpBP5CqaPAUGgnYn6UUaJZVmXCyw8RdD7WiXVUHQ",
  "key15": "5yE6SkQTjUVGrttESgMHMdx7pwbdJbFRoghMiCMpgsLj2KwDYHzxTDHGVGbRN3UsLKBVBQYoag9fy1JzohNgJ3EC",
  "key16": "HYd86KhC239ekEumBezFUzU161i1fYwVNGqv4KqxwnJVZi5mXBhuhmRhiuHzVbNvPnhJQv8JxrmMWrVYZgwbGGM",
  "key17": "2wbtubYJpz5txhSZoCFy8q1iS2vHyVZLQgqGtAhaQfZ43wRXU1ejGPgCoWTqLEDSME852wvtJtTf2yVKKR7q8eXo",
  "key18": "4QT7QRCH3arT8X2UqnEnM35obC9in7VJZypVjbAQV7XDbcrRta2sBaWUZDPRew9JP3pXuxm3tbNwnXQrmo2kGaCY",
  "key19": "3JNs6qQPfsVggyu8ju7AeWNh5u1ybCTdcszUkYTZBr6WiAVEjW65JjT9Bwc1qSknQkMY5TMAwxXrzxytaKjTiD9j",
  "key20": "4uWFbQ6LoTVNiNHss4Te4dwRyDSXzbA8cxvfFqyUTwSjvcastkYkfW8xTg3JfCEeQeamuh2QWGyNLMzXCk2gVcNy",
  "key21": "4TQS5jbMMNeo36BBgFNjx3e8xCpyAEa8ZB87HDnCQybUVhZ1PptXKaARkzMXwjhoYitUX3winqUa3rCsktfjJLZ5",
  "key22": "2TFNaS2zvNcPCXpKiLKXaVHCGVD4rQ7NSAHtxRjp86gGg2vwbvnyC5uHfqc8VZxJfRnvem65dqocBEAs428VMUVQ",
  "key23": "M19MgHqS1syPgvqcZtCYwmTLS6UP84LAy94HwPREYM8rbtauwZgiQvkf2RFDiqhXw4VJmZGtzJ4LD14aKF6PjmZ",
  "key24": "4BT44ExLNYXLU9LnBNmd7ves7JyyoYszk6qMm2mrn8gCtoMi6UVXxfU3PJno3f8bEL57gphQ72e3FCmRYqkJaB6k"
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
