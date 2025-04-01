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
    "3yw5ZHjXa5xFzRDxLxVtfRF23anAaAH9GZv7Bt8AdQLTnWKcahnBjdZAajJqC2k5cWkkF18iPuQDFJbmXqUM1MnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGzVJRWPeXBvzuVUcF66GCJWayUADd9wEZFc5oAk8ev6ZfNmsFwvREChKaEHN8gzwL6bhjzGEvNkUxgSytiVLnx",
  "key1": "4PxfpQjuAvhd6xaRpA4ZUFqQGd8jS2dKnbKZc7WWB13uZMmeYPTbx5urhUzzS4xWf6L7zo57hTgp8kWrgUmAcoeH",
  "key2": "2PGQ3pwA3JGKLVoQNUhK6xAZqSbyh3tjvmcuGdKZYZTo2HgbXQAKCwqcrhTTNzbLpFwPXm9o2ZBV4TGiZeVCXpn4",
  "key3": "3wWgT9u7nxCBvdXRDRPsj6aKqqmhuTPcgpnxZgDG8pjQnPFbTgqJTKeVGpVhiAMXFKLyueWWgYjTHTAEJbm1VHh6",
  "key4": "3eBH9sfQ4UkgB3pnSdzGEfK9iMUhopbSNArH6xk17fSY1uPBn2acpesrjadC2pWtrZcpZTY4mMwS6Cxkw3MNkgXT",
  "key5": "2P34x6A2mxk7QSWr9sHeWuKgDzb5s5HKALsGy2ZyxyKcvisSauju4kr9LMNieTmsY1mGFW5ndRaxdqVCc9r2y8ij",
  "key6": "5w5J3z7qDPRhoTKQ7wZsdcJYQocka6QSmq5iWqB6VC3nwMJNr5n7Um48qJM5HtdTePAEbXCEDibi2YrjSwSVX87t",
  "key7": "m2FLvsauTaQgNHVYWMhFDuS3YJSmKAptS7q8eJq4kAiTY7uVjBCssDumyvJ3HSdYXMsbs2MiHU74Szpu95JWbkQ",
  "key8": "431LuMGzN9QUBHBNabc5pGowFDf247nKMspq7dGMHsu4R9w45tdBBbzUUr6mExDusr7H27hAtcavgdQEcyUQhMLX",
  "key9": "3xiV8W7REKMDdpQ511d9uAANX6pjxicQZ2AZxxMZWhWxdFpbfqtAgbKmkAxDrH61gwwFXP5brKmBPA9hFbd8hZer",
  "key10": "245f4bJhMkiHf1yvLvZqSPEJZnpCADStryCG9mGqzoD9PN88ppNRmrxKEwVVj5sAd9mUfFL6RiRKSoskPZuPDDWf",
  "key11": "5HKJR2aJY4EQx9mUSzpAR7aSNJXG3XoaCiXHtYu436H2ZhXUFd62q3YE4LppFUEyLU45SAEWGLffBPgsgWCUCHxh",
  "key12": "59oiW8CYT9ne7oSa4r936kM6WPEWmoYC5GFqhgZ4szJTawr2BDkds4MsRcqBpZwwaTLr66qevsEAWZuEmpvTxGWE",
  "key13": "357DPobB7UXncZCi1KuejCLAZZRyqkFxScchVAPF7f3WyoSAfab86v3T5dnjp7LrAKjzNJAyj6z6y4osP2KHa6EY",
  "key14": "4CyZdpfCjVgsswGtYUFMTVkcMXxwt8czRGb6hoMrBK5b2T5Lan5CpsmAeaXPYvJBKTcow3wj44fnYAHuc4b3SqaW",
  "key15": "P8bLAdKzyrbLB9EA3F5KhgfC7utZMU6gwTCtvYECSx5RrJGNwkd6sBs5Hxra8X3iZ5z9xnoADdyFo9F2EVHhJeK",
  "key16": "3GN6Q8jh8hMr8L1xhu7T7Q68ovmvVZndB5LYam9sZ4xSBLnveMxMpxF8ZtQobstNxRQkFEw6kf47Ti25Jj45diEk",
  "key17": "4yERTpTNnBG2zvw36eVbZio3r3r46FaSh9yJH4cuKtpHNhPqLwwCT1PkLpVrxqj9tWF81R2bWi12SEb2HGcXc8kH",
  "key18": "3gXBKhEJgZJGCC7YBsvxeTrpUmn7fLgFuCVqxYTJ27V9PygBTPLjYRnppBGESJqJZy8FtaTxHZA9KJZb7sowTG6d",
  "key19": "3udCvdLCDJskSxu4qneXhJN5v9SJU2aqGbQRzHpNbGYx7zDgTTktjDyWV7ANg8wmLLquXpCbBJsg5nuoGfaDjYtu",
  "key20": "5YXe9qmFJvPXoToANC2KHafw7XycrRDDwwNdkBtK5R24sarMkX1AFja2LBwUbcB5e8BRYGNRPCQfW56uUT779RYX",
  "key21": "fostieYw1r4JqDzng6N5aNrQX23dYFRknKa3UYdBkCd5YPtsuRCALw7j6Zurp3ca2cgrxyMMGwAAHgfL3nGC6J7",
  "key22": "25Xz7JDmpsHDkCBBwBK5moXhqQYK45mu4HvPSqqEM4jTaeV2JUhP1oLJv4d6i5V7zQFMrx2S11ZZRGmzBozD6bnm",
  "key23": "g4uU5TZAoiQj1N7WcQz5EHYJP8dFgdEQogk19wSAHSVJqnUEoDC2xT8rXaQnZEFrbY1utRdo2X4stb9DStMHq6D",
  "key24": "3kdZy5L4tj3LzS6HV3nJeQ9FANm8TCbzK7QCTquend8kC5gqrUU686vxujHzgZDuyRAkHdtmXoKiUBmmiATUqzNP",
  "key25": "2eZ47gTs6qhLeuB5VeVtxfhsEkWqiPKo1ZG9o1V1KRbfrFsQykAmwGPf4RF8tAiXi25sNLpUZcJyqWugD8Ftbryu",
  "key26": "PVb2euwUjUoun4yxk461NDtLCCuwkQu6LKGTBK8Hpyx2JYwDUzfBEdobWd66TrE5C6FNikB4VMALxBS3PFhqKwa",
  "key27": "dyJa9qYWQa7VQG61ER4bZA7taL7tHWmCLzhEJ3g4XA8QJeWkGkBe5RYTggBZKXEsjN4ULtwgSBy5ALVXiNTFpdx",
  "key28": "3ecBDB48iaYKYmegTDRL4PmT2GbDRxv9eZUxTQjR1bJ9Gi3PGVBqNDqkLBDN6U6cDnHWm6cC9XZ78DABny53yfq1",
  "key29": "5CPWP3Dh89Pv2rES8TPTtPqcLBYNkDDipMSfQVX6XXrBThuf1cRHFuuwrwXQB7M6VNYEnK9mh4f4bKfhvqZujzCZ",
  "key30": "5exqUoNaqaGeiARZyd2rZRmEmJ8XPQHsqKuJdZUV2WH7RkRJy4hAJXjY7b3gkqr43f6fWVHjMm5ooAx6Ktb4NdnC",
  "key31": "3hnmPYN9AgKS27VUbREhyDoUBfP2iYZm5MvDuXoQhKfLo64h9WFwmvD1WcGQaFNtGc5BGhscUhVjWDNb6NgZWs7A",
  "key32": "UVZKUkaEkKSFkDM6TYYzoLK5ANhvUShkF2LEePPvdXSQpQWfKTShDtwY7BAnoWJJJfv8TUdvQByuSNNTUV1NmvB",
  "key33": "2UWPQCTA3bdt8aDLrdmfnceFbLY6MFmy3gsSeyVtK37MbsArsRmUmhFnYVosbUoqU8u9wmZWMxB5BZKd6taT5eYT",
  "key34": "3gT3WXdPAnt5gTFvwZnDWqYzm6rp76EVxu7mNRQVNWkTrryQ67CzYgUiZdWVimRqY76smF6ci8FzFNoWxEq7NLF2",
  "key35": "4LeYLcALEM3WMQFoUnKYz248omPochdMMtkJtuTc4SNqvDF6s11g8CQiQZ3QHvZ2eFzA8db17T3ymFGt9E6CjzrC",
  "key36": "4McZ12ksU71d7yF8RxebB5yy2cKTMbYXUk5ebprewvUxvWWrFJWCxeyxbhxHe2GSdV2sW3LxJ1iR2PQvDajGCNAi"
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
