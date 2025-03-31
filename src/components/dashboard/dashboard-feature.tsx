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
    "5KUS8r8u4MDyRs8DKsjpK2Fz6thSDCBv2HSLK65zDKzRptkxk4vc3hHtdythM7g3rXz9dkhsQ9xGSeujcjSFyvRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VHw1Xofai9yB4vtAD9HSvcU5Zk2RCQHG1mn846URg6dmfGC3AyZfiT97EmgyZWFRM3romhKyi818j3TWjgCQUAa",
  "key1": "5qGRtCwuosScVfBHuUK3mMErYbi1hoLeBsHf1DCNB5MMqE4SuNe52GxuD54X1TkzgtwMKz8yAh4s1PiH1AyGAigL",
  "key2": "4Fi5V8tfJghB9WALsxh2JyW1mJ2Ry7TRx1q9yioDg8FtRuDrBFFUnFF4NMSFEy84yS43GGGJg6oXVVem2Qd1Dudf",
  "key3": "3HAxBacbApZQgkWBh2fGDFKjU98RJMYiCtUaBiqe9sqvvVgSWZzKqpd7JkJLAQ2PGeC5PNerPLNmUKb7L5Da3RZW",
  "key4": "42YgmH544L3SARoAdruQiWfov6XuYRznvZb9UjZrSsMdsfgqeSHoTQw95PmsZVS5j8pJGcCWXsXS7AqA3HvLDzKh",
  "key5": "FNmhcMgQ7NAnUEdbwgNtFhEfPDEyAQPtJr4k2sowGKD4UTxEu1vzixQGwnC9d79QVgJH8MYbpRWjRaggPFApuwk",
  "key6": "26a6iuzM4GW3zAhDKoAgVF64gSAsoeNLBYxkek6dn966S7TBXU8GuhYK7jPbscvRkiB2GchSYF4DsWSu7d1hvxeU",
  "key7": "KkDiviBJgpKmssjvgS4H44TGaRG7F8NvJGtqYeivQ83QR4wvSQRWAUMF88pMh8rw3jiK4SBh7tcydmULrbwGoYf",
  "key8": "oGyUC6RaeJHRtR2jyU5wc5hkorQo1yjU3R2qAtbFKAi1TqXFfYMsofYZqi77R5Fyp7bXdDxmsZTr6McMPCtGHVG",
  "key9": "4pkW7BPCvk9syhvSJAej4kXjEGTXWMDVuhaWe13kAPsxRoWVm6vgtNeFsv8hxfXQzQGsA67t4JACE5PeiZXLgYR9",
  "key10": "2baKexGgyRCHAMQnQcksyM4M9ZM5uJU2jAoLLK62T1zm2zX2EjUxK5B3fFAJyXhVCzRSAXmySEPWKhMvJTU6T4RD",
  "key11": "3ep1ZtkuFvyC93XLQvocz4Lm55cCvixnsySnfWV3SJzAHfg1aGVjoT5uTkjXRu5aU5HrKb7RcqLrrUCeQ4cNfZe4",
  "key12": "1sdzcSdHQ7RC2EopMck7dya4oHmVt9UtQtLMvfnYH6HpjKZSZSbuCQomvf9sdTLq1B6vDXmU8Tabrkzce6scrxv",
  "key13": "5GKxbug28Vw93hM573AH47dSKBcewbsGfJwDdZnV6jHdkUWPuwsHGdTYjV4T2nzCTBBsSDixjCUztNuWnQ2Dtzpr",
  "key14": "2ynpMpUbKcHqSSfPYM63d7NVgx9HtEoQHGUvF6gUU3jAXSfAkJLXn5kr9Ncik3pkbaPHp8bx2WzkFxgZBEyGQCUP",
  "key15": "4GpRxjr4yYwhJfXdmDV6DAkf5kYuJPSAqi4K9kkudVk8PKD88JAV7JNY5ehDELWQ9juNEK9kbqwGDjR6ejatPhaB",
  "key16": "5w3uRSE7eEAGhUHJjpFByzpvavyAb9yFXU1euTyxWMy1RA66wUhQLhkPRkjNg4AZpzsUsH4YD9n1QENpc9qtT6VW",
  "key17": "2S2pJfZKx3Un99Tn1Kfjq6vGjMRwD5XjGQYLqXY1TjcqcPZDmApqfh2rpLFKpQ7R95zUnmkX5NzTihDs1GsCZjQc",
  "key18": "FWEDytjfyB4YwNkHv5MqHHbYmM2TvtjDRvTQLj6VvheGkioFkXtLmVDGbTG93TRtWWJjVjUiZAH3oVRS1DWKRxT",
  "key19": "5C6A4AKiJ6SHLa6uWg3hDauHn3eJKamPhYnh1cEAjfE2e75UCdrR3pBv7XoFZQGuD5Aoj1Xo7fwBLve7kGYoRsrX",
  "key20": "5BRHAhKowt8eGhLk5YvQpoDszqXCVg5YcQF3LAyU2U87opbQDhgp6EW58bgeMP4gHWrHtxSUYhk8dFv9uHqZFrYA",
  "key21": "ZTPKNnXxjeCUeuZJxJBf2Qh6CDPNpqA4wRbhpW5sP4EDFWhvMAhrsfFRrG1R7zA8GAYXZDiNkhDYGQJU1MgrMUy",
  "key22": "5UE8wzaiBdRpC1YM3ytFC19VPGoFDcpsoL3jn8sgc58enCCqFSf8je8gQeEC2LDvk1y37aB4eQDbhzH7A1dAsEDB",
  "key23": "UfYATgiMtaofXvucizoqq1vkx5Rff6h2Z9JgxLFUoZ3MBchemqoVdbsYFx9M72QLN3RRJbLeqD6tvNf3MNc9nqb",
  "key24": "8XK3tPj2fwLY9Lj5JEZcrEUFjZKHKgAMARPVP2YRaRr2rLPpvSsybAZezcxQ6qX8zYQ3eDDKd5VBazrwcK96C6E",
  "key25": "3ERZDebLodQ67aN4DSv6ShJaauHi9esKQAjjRE68aJuuGA7d1e4RetTmZ4knH6Zb3ULTm4mTu6bumWRJjs2M8jNK",
  "key26": "5nznB4vgVUQWGwzijCNJzgp47GN4syXTaJXCeY6GK1vjnq3hctt2zaoBE7nhAiKLVDRKKZ95gNfBbWsn1f8wUMom",
  "key27": "2g2BaP3BnYc5ErcqEcnB6ybU876GeadwE4iC5wJNCFu6nvipZw6UjCsKzaJnxJtgSMxgR3cDJGpDMsULFwxY6osn",
  "key28": "4EAZm1HxAhuEtNNw3GN7jntUfhcdktCntUXgAX13JdtLjsJNZbXFizmH7RqKkvmFrPeWThtdVQ5w1Q2Z6WJTqydJ",
  "key29": "AyQL9jFM4odnwBNCR7CwPEGYSfHSg6yxWFvzrfJQPNf48AYkmBs4yGUdUP2KaWzcBNhGteYF86XnUjz27eoK1Yw",
  "key30": "5kEBqTtW9XT8Z516om3DzDQWeX5d4komv22CntVfVfdWwEHKwQx7dJgwmPfro91xBY9LdgePNfFa9FCBWNtBzUM4",
  "key31": "43jijzokVQaD7cP1wgmM6fseXwdZgLG8xHttAX5Eu2H6ETa5h27z1gxiD8TseeRHiPbaQiA4bVErUGKCtH13GHi4",
  "key32": "29FbadD99g5435FjsX92MbNvqW6GZDyZZcvwU59iNvoQo8TNVpFuaNBG2V2XNhRoky5xQ42vJowaTRYgHUAxi7bf",
  "key33": "5VRs5YcEZumifn59PVinoxQL4yidxMbzZQUyS915XZWn79BKSMNoiYSFYkgemuZBGoMa5ABjRWQZ88PzYYwssP9k",
  "key34": "4AGTpAxJPRNoje5CPpkKeHXvt1fKfg8FZzWLzEjmCx8Q4cMHv2XnddE4PVX3p9M24mNzoShyAy6F8Ce3LRrRgKyk",
  "key35": "3nCDY6ub6XjV1fwMButLB5fpCrmMUAB9BUYLC47FD3K6NxvWiM2vc1s9Sd1UuUWoqdkoLZ7RajVeDiydiGdfjxw",
  "key36": "3X9LLSZRM4eRVDT5qoJChGU84un1iHJ3ghquByoFtnszHjzqAjfFhjYA7CVioM9P1NvQhD7QX9AzcZ3wTfFVeoJD",
  "key37": "4dkY3KL2fS4yRsMQW23aRL3GSYyC6pJiCkDKxQiFFvNr3pAyNMDNvKCR739RTed4f3vJrgXJCjbDKC8kCRSSugJA",
  "key38": "54cMnzCztkDpR4CBt3P7QdP5uJvDxFXH98pdYE18JXabUfV5BjDvVP5RFAXvf27dejPy78qqvNQuZFqCpKh6DEPi",
  "key39": "WVRnzNJiQJRqtFU5mF7AiDGX98hbfD6TMYch5Wtxy6KZ5tRD3FFWwRtxjmuvQJL5FAqmaZycmt4zmdLLnpWBxko",
  "key40": "5Kt8VgbLxnRQ8iKpTvCT99KmWfbskhHoGcp6YX1z3yGtegDXs3ZcWuDALEdAUqGGBWxZ1SbPFWTYWBTMeJhJPXYF"
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
