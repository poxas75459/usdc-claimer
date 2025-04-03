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
    "4k27ocvFPv2M96DYsp58r7SANPbws1TkciNBggtZNLTBAZjDJH9hx2bGvmf59XUpZpgaBYV3VYfAq3fN2ft7YioQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGCHwaLti4UnMNkksj5LHSJRsxSLc6VWC24dbH2tmAjmjtnimUY56gr6TygpYRDuzhaNPnTFnWU33Lp8RcNViQc",
  "key1": "ee2uYewpYAdKdWAADsNC1VLwJdkuEqQNwhLk2VTayLSiyePHGKhCWH2xEnfwVFYJqMivtycd1Qo9fAQyGwsaeQk",
  "key2": "2vZEY9fULCUgoguSsw5h5LNvhvhyPP556acxtNPEXH1g9HPaos1zGQFRnr7kMKWvJgZ5o79MMgqmE17fzNntfooL",
  "key3": "2fZquZ5wFjp8XJJxN4FmnJhmbVMEeLWxDNFHD1bZXUzL98fTBBbDGJFjh8YcoVZhtN91hHjRmTDtbc8rvk8EWgiM",
  "key4": "24JHWZYymHHSRJpWjSSqqmKZZjw4CjdjENXXwjw5233i2EzrdXDYZKko1pML2WEy68RMH3U73yCQgsFWx8REJ6Zm",
  "key5": "27hEXZC82XGvCLff13jSRgPg6JVB6YH6U9ggr1MBmi8Y7y2J2V3w3zbCYsn4deNWFWyRWwGUqNW5Gw3TLuZ7e3V3",
  "key6": "RrLXXHbpmzdyR7SvbSjHUZnJwE9LSmEScgm3DnEu7gaWNowPjjMUDo1nSquP96ixoyC6HgfNP8c3hRniVpsRb7a",
  "key7": "4sTGfrfxrPsnDuyogQTKVxmPiKpKU5L1yGDvgUFqXUCMkEC2CVNYpYgbpKdFmqRfL9qWh3yK5mj1xDb5CXK6JEum",
  "key8": "3KcEYdi1wqzVcuwhmw34FVvyctkYKjLxG7YA4gX24FTTN1pQ2oQxrA9hi2xybk2FJeSxLQTFbNfwwMkv6EHSfWDt",
  "key9": "3VHQJPaHA4ra5vTMSaNms2EuNa2otCPhnCWPmQge719WcjaPk1Mo8KXJ4cJAQted4RSmmjbyvTMeuXb8Qoe6u1K7",
  "key10": "5BXPeXZFBMLpSKk9RMKqB5PbBcVDrVQap3Wv36V5y2KdxiAoUEQDN6e5oZYep98V2pBxYkrwYWUxWG3pMaoG3PS1",
  "key11": "Fzp2UetRcLcBEYTgBVXNi7C3S5tnusYUdu88ZumFPDV43TCVELcTQuz88BXK8Ndd82YZ6yfqjn9aUv6rZsSXRxZ",
  "key12": "5DD95LXdzumzrLgf8rND2r93WGEDDfARuYYgU8Avtn1gYDhKuH5j9afeZnnTAY3p9UwiiEzv7yxoLGnmUZ6kjHRx",
  "key13": "ZcVF8Ap61xkCg7DxMUnmknqw7J3VeQJLPpJ1hPLZi5WD2LF4kyHQ7iXvK1qwvJyZF4v9pHA72boF61sXqUZgfzj",
  "key14": "56FgPL4arae1GYmvRorv2FgBimgqFD5GiVZu5T1iodNrHQ6JH9YsApSfdVwtjRrMNugZtJ9uvc9MDDdsAW9HGyyn",
  "key15": "Bxgk7FL4MiNGY3V5FZRi8rWJfccTMmMy98wcC1GMouQh1ty2RuoTnodMomxZ4pHuK9WjkQ5xQtmW8Qap4fx4Usq",
  "key16": "2a63YcsQ65AuSeJFTRD5YdeK9oHYsd63oC8UWBZTYe9okDSDD6gYpPzs5cp4VWCsZkXDrnUzF9nGSqnaMwYw3Ymk",
  "key17": "hDpxLouYgrqBjwf3ruAt4TmrkgVo2XhiYu3eqqKqS9covNLUUz4vQq8MfxaVyxWhRMxV5fBgt1saf2eiuPMoM7R",
  "key18": "3472bp6sAsiLkzBWbptLKNs3ifAwnDEwXEonvz216rUnMrKtQgyNXfHWYMb9KiMqJPdVAETAqny9hhP2JaRegH7T",
  "key19": "59nCihPYGnkVLiXU14HPdKHA1MrpZMfEJDg6D7cASHRQ1sB9ABXeKnjm4MUDZF5poNSbQnN3AUsPBVQiR3dqkVyo",
  "key20": "3fxfkxXjDnPo1nDiZe1BV1xH2JtxehSt4SEk4FEnGAJ6tXCmSjfupMg4neshgK6c31cW2ZeaSB46qoXqLViDBkss",
  "key21": "4BUoX3TZHgycSxqFjvAoV5ojYVcUu6EuBiYTa378sztPwyFC4o7GzuHbaTmA7VFjovekeK4hUUW4nugpXwZJv8W7",
  "key22": "5eGfpu7iGRFu3xKUVLqm3j5eitCNtWDMdyGkXeTfXtbBq6QPd8DMdrBVYKte6NpRtFb1UuJVXMFtmeZnuFCPBrke",
  "key23": "485P4yeDZ4ipnFENXUkAkChdspCbngspSfKLJtQK9P1EDTyB3ErNbhXAUAo4ZkFzpL9q93Ef6ruRGWzwrku85jDx",
  "key24": "2jMzNxDRFeeRuuuBbewURe9uB9s1GJqgkji3c7MjXZaxkk1QZk6kvGaVtTWBMbDS2CvrM5EfZZ8AYvqAwKsATkcw",
  "key25": "rvkPGbkntBKDh8zaTFqMCGyBxU7PW4nkisECUvKZNL8sG5tNEQ9P98VMToVT92mxbUDX8pxGq2iQQEMtTfsFsQt",
  "key26": "3hx3evsAjeCBcwVypvYNsLXV9JDEmzHmSnEvXWWGgZD6yYG7U9msFnnynjTeAvLnPu1cJGchN6949dZ2ydmgoxaR",
  "key27": "51Ce8UR6zLVQh1YiqrsqMTNjvUQgQA7bPxK3MxE3BaYb1ybzEToGNoxyb3EYdhxRi4K54nnJMfWty44mhgv8ar8E"
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
