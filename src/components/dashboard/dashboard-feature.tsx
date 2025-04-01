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
    "5gjkLUowreehhbvahaDHNHhGY8aUk4CwDtuDmDhRKgSPVkQUHsFjUtDQdSgCihR4wtewwqKA9VLfDmevMsrnktBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEnDqJV4VkTUUDGpbQnwDGdgqGTrAWRsr5wQKXbXMbYqLmctxGb8vuAVtWyus3XYVmcwGtb1ov3BEmGCpDjbMqg",
  "key1": "2oQEgBymrbKg88zYq3wADfUiJC5LEXPRbo5hg1R1DKSFiaEh5NnmUaT4Rpzo1qWauB8VpxgH8aeBrZDAPCZ95gFz",
  "key2": "5GfkgRstH2xxEZ6PNxarj7zSPmuFufcqgWKWWb3Z1gjf8JnK1kkjzCWvZxz69knT963joHenm9G95iAEmQykwAXd",
  "key3": "2ARLoMk4e2rQUAKA55DpHGYMXR5QSZfHoHHtES8m4E3SqbFUKc461NTCta9ppQwxx2TGTqvarbX8jawyLbR2DeHq",
  "key4": "4SKehWbcXEdqeQHWnRvvixhBavr9y4Bur2dZbacjRzvKYe7W8E7Lq3NYkUpFeDB5gej1xV5NJ41LL7eaKaLKu9jX",
  "key5": "3xrHgZPxZ95y26SpaHGbsjNficZFRgfwt9tE7RVWWMHCngBLdgH2rhvKxB46PA5aqVqdoGc6DEvjVFThEy3DVKxM",
  "key6": "2vZgmUGYK7FKKAaUzcmW8RkHk42kZJTfRc4bnLqJ5gqqHLjYijzrdjurW9cz3vtbsPmnwsnqk1dSaNsfRnoL3Ydg",
  "key7": "5TxvQURXFBSBYjddtvJNkDHeJi9oWEgyfGQoJG7tQRrd5cAdkqsG2SiUrvzmp4bHrGhGCA78WPk5RtNB342HSvGc",
  "key8": "2BUDCWZAeTUZUBkcudL2JEXKCEcXnTkYpV9zQeLosRZtAX7JFbwxP4KPNbBosbyuPrA6g89HasreiLp9RzC9xv6i",
  "key9": "25A4bCsjP2HaR8Jz4rJE3aiX289w5a6Uehp5z9N4GRTeThw16oXctymYcmJYTSvF6SqjjrgmQxd3XLW4EqbbJeaX",
  "key10": "2UbYo1VNj7KWf2CpMhY7emByar3HzYbtCoD76TCXxaqrGeWPkx7DheVdDZGjEd466eG97gu4LcDS1So1n8pe5Wkd",
  "key11": "5CHRr6ZmWN6VgrQMekqU1pxWw3jes19fL6BYujyJmHaRqbXLZYKrHdH7euMvk9kfEmPmmRU93RWmDaznU7zrLPEX",
  "key12": "3tsxTnxhzJkrt44WEZ6NbQxAR5S594iZzk8ufPQXKqqSGqi7b3uamY3oQHKpa5syk4bEg38igGQSLUw41zzecq7a",
  "key13": "3UJSZJ4GmusQYDw5mY3KoHMZqBHDNA5ZbgMcwoAMjtZ7C3YrRUWmT5yhgaYN5QDZZRP4Jx6Gfe2Gj1f6ARD51LQi",
  "key14": "4gU5kq1i9qWVThjdaz4GJHLaTJKZKcwYvy46HKLnXzGrEG8mpGUSmx1T6zivXvGFd5V4Di5FTP13Zry3M99orWce",
  "key15": "4aQH5qrKVKXpT9KWrjjWtMW93x3X6H3RKrZUAKA395TLpoSkuVt8bYsZ7F7yV96tD8UeJbVfmq52UtjAzG5PeAyU",
  "key16": "2y7sr63UQf3nDuZCna2Ln2mJfgRzB6H2UqGvXn6cJaJqDnV7GrbhSVHKkoj3Ba9DSX6kDMK1s9c8UXwGXpAKjZft",
  "key17": "4xJWnC5zNxNUfNab8mhtFb4UjpsDHXmRqh4SNRmvin5maqnzzy8VinR5G2Up1VyFTCnkUgRfKtXRtjMD8hzsnT7P",
  "key18": "5LJr4UEbLvErYQJcNxH9oe3sbqnTmNa3QMVrJLYXFARHj3gx7iaxLwstTHBSMpHzz2JBNHd5SAY1SmYRLwjnxfUy",
  "key19": "4RsbGQb2rKr5sPceb2TFMSaBvN3AuxpW9xdPwq8Arkwg3fsWbPuTHu1hFSVHocgRf2WVfXa2k15UZePEyfY2E8CE",
  "key20": "5Dy25Bm7kJnvzVCYgq7qoUSmtvqZbe1qvZdroh7oU7L7ygiygu8N13dMXbFBb4R43mBxr7Wiq3naXeAwBWBmei2f",
  "key21": "2dpRnBzd9uz69Rmby2TyckhdDMxZLeqPWdp8AUxnNsUw2KVTnj75fHUb8DfwaYa9nh1YpzzLsuP7P2hkdCEPMvj",
  "key22": "4FCvQV9b1QRZZJp98cFspcHvqkrNt7RNcE6b6FHdwudqp4bfJthfyMzcbbitSnbqoGCnuYto6wkCGvsD1y5KqXZo",
  "key23": "2svRk7xFBxiAZa6jQ48QhZC2vju7tHe1fhTDd4LytaMGDSHLpHb7YiKutX83xazrEER7gQcjeShbV9kE7Q7HxAQd",
  "key24": "5oLnaqxBVdafkoinLFF6gPMfVWXTPH3aGyAhgNxUvFdDNpWpyy5M5m5EbB16kCcQt9v2t94CUuj7k54YQMUntiJQ",
  "key25": "5RJ1URg4UfUgEJ22KX1DsSPdRPmLXBUoAR9ob5YiheZcmfXooJPHsQJw5WH9Rway5Vrf3hLEeHDzDyktuR5gZhyJ",
  "key26": "55FRAM9t44QWVDJcASqEZCBUhEys1PYdRZRhYzMrkiBqStgYGiaPMKX9Nub1DnYjJWWdJiRyYVd18BY3E2hbhk5t",
  "key27": "5iLSb4h4syd7uci2Nzbr1SmvxLZ55gnMyh78bVLS6meScdLz6UG7RNbQX4imgMc3MBSZMzxwRhCvbP1EFJmvC5LV",
  "key28": "4XiczhQN1SiayZbwHJUtY9BZVg54ofaAxSARWgFZP6UTkzaYF9pD5gp6rhEXEYNdsREDeu76rsq7YDxSLtuwDEcG",
  "key29": "4EaSESkVrGELU9K2V6kX26PRaz7HsRofbeAS17BE3MxnFokv6uvnhdr1eb3szzBFxKuWNtfvaUqh9829taNoYYC9",
  "key30": "H5a78q9psNNq6irf5Pbn8p5kpJHoZXxrvrMSboLSvxdkb5PHbRUwaYU36d3iM3ijGXBwQBgUpmanN7Zzp3H3ez3",
  "key31": "4hNLcEoKAGkHDCJWz5VgQwBfSxC9RDqXRxSye27fd7ahbh5XxjihoBVS33xbLiAMP1ecuntUrgjwHv3K9nk2siNt"
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
