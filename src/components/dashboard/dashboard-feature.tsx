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
    "4TaTvNPAprbmZTZnYfQFhrrFPQRQv82TprW2St9ShRDpxAG1e8CAU3humRHhNvziUewNLHxXHWnyebWQGvHjYtgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1QHe5DKRo7sDpXspZvLSgwjPEg8aJXbBakJaGzD8eVFgsB4dUgUsKJH6dpVCvK26ac9uUXnTd5ZyhwDhAnWcZbZ",
  "key1": "3riUNGr61HCRczY1uS3FvDefy6SQR7UcUt4gjwGFThSnJswQiKcikgJn1dGax4BLRM3b55FaX5mXD7PSJFudEzj8",
  "key2": "KQryKgE66A8EGe6DgiKJtpnp6ovJ4g8j7YTXLJH6Z9EDVp8ED9vUJkB4yzfogWPRMRWiNVxiv9sh6c3d2JJxiRt",
  "key3": "2s6ntW876jHfsQdf22MAVYaaTLrz1LrvyNDpnLYMNpW3PEMFVryRNFQp1yTz5JiFaZdf5vSoCiJdtgsmbgZvVfBG",
  "key4": "2SQsSJw79iNSWGbAwUGFGTcGwKNd6DkWQZRqq7ZnWDSJQehLETFYu6jU8tK1qKWUEcHexN2NFoyPXtqWNM93P9mY",
  "key5": "5gJfpxMhRwEnnowF9R6sY6BU279uPGiAUSwyKgGu8g3Dv7hY8UivkjAUs48ZYEo8T62PBqBxvdMA4o4fZS2nuWX8",
  "key6": "4CuvcvZGzZ51MDeN3GD4VQ2xiaCLKw2ENJoJqeCYknEwQR4Kxh6feDhxsf6BRE6T4rLtpUE77Cycuu8KN4C3gLM",
  "key7": "3deY5opPb73E1SUfWEqgWKF7sVQmtXUCRBRPt9tNNeAumu1JNA9yWCKveAW1dkFmEoeKhDaCen1QeqLzuw1g8Dhv",
  "key8": "3ELJzohweZvzzVrt3U9nkn222ikfvp3fnMoqaqJzZTE92g6caA6XD2kh3rAL2Grx4Xqj419aXQSAenwz8zwh4h5d",
  "key9": "41Z8TRzpmN4wfmrKMaJRSyC5So51vrtFGE9BA2y5AVmGKmVqEK8KS1835tawUmkmxQcTHLhjZYfZJY7f5ieZEaHg",
  "key10": "4JLDHsgFzDt3UpUHyqasM5AtG6TMSiE21f1uQdiDJpmJYfqnfet285i78vQco6xDtEgaxmSQkQk7xLKsN7KM4Pta",
  "key11": "2AtAha6wQDkWu1J6sGPHDDn7uF8cNbLstx83Bp1st7ijdW7rRPFbeQ3c5hYsQPqVJxbm1zbuYHbUJhWKrRJgcCd5",
  "key12": "2rtNMbwXDSwGcXd7pgmoSZJBPMUh34zNBcgrjv5vwPTCuAb9fTs5FrhQ5UTzyapVMvaGdFnMY4ZEem3eaYkcc3Jv",
  "key13": "gv1mQnBFeV9PA2wrXLrDgfd8uS2aBpLPXwbpCwJC61f37TqZzDQpiiniivbWyjGVDbAWDvTwRMa5biywd9Gnpah",
  "key14": "3v8GdkGvYkkvkrV8ac3pWYoHmc3bA2KRikatbkuQQQ8qByZX11482MYwSRa3jNzKXBm1JTDQdeGt7juPXuovnYEw",
  "key15": "5q913QMyahctKKaajf3v7djQzivYZnGNkz8LG5mx6JMaDFAfPBvB3tRYDCdm2XxxddkdrbA424NkSoX4FvEZzonV",
  "key16": "r1SAP3C5T85aKvtTkX4ihwBJMbxkMj9VHKvLzUEJ9RBzNiwyMbTLuqkFxeJgAFtaLmXnpxc82b2QnuJ3Pbtuyrn",
  "key17": "htkYWYMmwX9BpjZ8SbssQWaVEidZXfWpuV849fzFsGqgadxRUE1aHaBVcbDDDYirysc2CjGKLGoTTNVkyE7CJgo",
  "key18": "5vFA2F2QJRT4bNJoGj6GVEnxP4yyAMmLh5P4fnEKw5iz7w5FeUWKYbERP74w52U8GLkwdZXdRTgqRmr5Tri6mtyi",
  "key19": "5qYot8e8zwr1m6B4sdLhacb6BkDYtPvZvTKPPGbKRd5AcFAioGxHPo2AW35nE8fKiGpHrZPJunXFQJmj7Vyrth3a",
  "key20": "4NxssbeJdWXUeK5ndUVNnwhYG3ktbBTnz1nuEysiMwNT4gPjnZrCAQGzFvBtC8HHERpnEU4wSEyrhHZqPE6G5PKn",
  "key21": "5VTo5kjwN7HR6vXd92rFegvBuCDKBL7LUx3EUBuGoy3W2JRcJ3aG1mn6THnxsX1jWD2M8T1yCNK7fFdmtbiHYxXr",
  "key22": "iTMM55fTTTU1hkeNXtqoVSjpnYbeWT4WAJxd3xDL3z4QfZavsKkNCHUkTu8WCDPnN36TBrvGgkNbx9YPKArNzRP",
  "key23": "2zy97Y18MXwP8Fi2sg5jSbkscWtMZ3bSYLofC7GhVGQ9yDboAaqZXZhaQggxfLN1nKR7N9NjaDJ2zpukyBVPcDE3",
  "key24": "4ojYVng4tebhhfSf7kCRF7kfQuRiAKnZK9s2uHKLirz1aBZCcfXt8PjHzQ8ituMuPZQppDqMFXoCXMPMBVExSzim",
  "key25": "3BjZgncGHqADPd9a841KkWHbTyLDTB6xt4PdB5tKBDNhNqVZNCQXxQ1yLFjH9QDuEoK7m3sjso3UJ3CgiRVguYAT",
  "key26": "24DTUfYFRA2E5KgJDvxsN1FFooFNhhqAytWtVqqdUCKKgGFGF5iL3Jih3exGog4bcyzs6QSzAVF5tVsu1JKshNSJ",
  "key27": "39kuHiuMVsHTfMasopAZzhXwF61BVTLUZpsTHK9PgBegz2SZKJnwAhfqMUvyrhq4uwsFhbjWe49szSppt8BC6M4u",
  "key28": "2A2JL67ou3Fpz8PtVUajo4jKpXv1PaaNn2Ktw1GQFttgqygo6NBJy9iX6Dw46SJxugwuAQhm44MvX8cAXEZuir89",
  "key29": "4RM8bdKpAbq8PKCoaQg12hU9kf3sNciA537VoWU4L1SyL8FWGkhfo3RDb3w3GXcyySz1GxRRUeiCJqrQABu4pi9w",
  "key30": "3HVur5b69iDqQvRYC1Y95q7qof2fHSbRrJ72QgwSw8FPTUMQqZsY5nSQmHfPgzFzkjN1ckzZv5RZJdf9cGPwKSSb"
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
