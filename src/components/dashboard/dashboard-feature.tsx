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
    "5TWPgefanNDgKwsvco5YzzCd3K9Ka2SqnfJU8RQbsTqXFZeP7xnLTNRhMsZDXWB4TN26MDy7PTjYMewBW1EhMLMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BuR81AzdoNcmKPihQnA271XUzBgd9C3RSL4gNbgDyuuyZcQcFvFdT88GTV5njjVe24FxKFHQgePsu9wm5GbGYQq",
  "key1": "cWbMYFkwWVMjXPwUdVwBcj5A8sCdqaGV31UJXaSyguYQeDvisoypb7gtUaAhPDdF6FELYu7VN8rePtDJP3cencN",
  "key2": "3PefszFXVxsoRgxXsjLxVawcXPsMe3qF5EWNkHjNXwa79YGBhH1L9QVgnCxRTRiSMchymTyA7rV6nbGb5PCfXKA7",
  "key3": "5JkGT8e57VAWuWPsJp6rFy7GWV8Z2hkq6WGqpwpn6F5x3dFukmXTC55PSV8kaPWx3DtKHRP1hwTWsH64s3AuqPnF",
  "key4": "3fHp5rZeTeVqdkUkoFkT3RxmnW3atLdPYUrE2JMHF9YD4MqJ3Ye75Yc37RYjZnExgrdBnNgx2sUPK3gV5NS6xSk3",
  "key5": "2ZG8Fy1iB73ShUDszGdmcVqu3fakaYpc3PaQiJvDSeyhbAUWL71UbWtrAieL4fY6DTcKtnoRGscDGkE16nA2Uf2s",
  "key6": "4Td3hwKV6Ty7TYaCXfHzvZWHQqgFZS6ZbjJxY2eHj3kMc5v4hmcNdBGKBG2CEhXMQaiEAUaFd38FMsxYsBHxyCno",
  "key7": "4D65rXmyCHytpo444SBkxx4xkpNp68TSW3XXcAuoMSe9CUrzeY7obf1WunsnBVJLako3RH6qWGk12m436GPr3qWT",
  "key8": "2uqbvC11EUhPgQyf48PRF9nhj6Wf2qrMDT4BZEk9LYLr4ugsvKkU9RmNKAPqZQUX7YSZRvjGtBYrpwHMMCBaQgfK",
  "key9": "3BMsCZFGcMPkLrT6P8aC2hSH4HJEWBXyRtES9W9wZ2xG1QsKkjBVTwjQyDmV3dKVFtdrMRk1L6A7nJrfF3xizzwY",
  "key10": "4AMf447ou5CwEPNhQ1zM5zdntvSHYqLLYzUxsCfvcNzeQXsQXXgVdqTuzGSRmq1putsASzUjY6HELqdfrmtEKN6n",
  "key11": "4SvP7A61Xy9PdifBU3K32cU1t2oNRk9cttQm5roSCDQrJxhc8nEUkwHhLtsyGF5TFWf9aNZJ2Jx6ghYsee9xMUGi",
  "key12": "NfKEszo8K8a8hepL5vcDfMmJ6ZiLHzmfBV49hn7hgarh9dEvdhLyQ3pLmdD8rYHPcdGAikiq85pS4K5vL65giyz",
  "key13": "2cwjpidw5DCfJpyCAu56tXN1VMCzrCpGc57faUon1fcDeJbe5TMkLjFkkufRKV6GJFMGDm6GTS5Bppd8CpkvuQxs",
  "key14": "48wMAvdKfonQi3gP7XXgvx7HEhzPb4oWg42mdcEJKJuwuW5pefGKnvPvSjLmPZBabMbvR7RvrwXFpoUkuo3no6ow",
  "key15": "4HBFTLQgdU33TycyoJWUvpnX77wy9Sig6Ay1wZJZePWQbXUW83ryMGMQbdaapJvDbctWNWtRWDbbgbaqthB5Mws7",
  "key16": "5YTmJkL83o85KZ3HMB5BagwR7MDnMSDrZjotC97TaxcPJ4zyo1h6wdHLsveAcmFD8bDdxd6jvPTwghmrtQTGtDRt",
  "key17": "4NHF4HCJmW49yvLmrSLwXLMDGxgggCSi4PBmzq8TRFSfH7XyDGQaQzKWZSKnauv2iJxShtnRBJxG81n9HQgKfCyN",
  "key18": "54CNq7LATV3R63PBYd6LhXfmpKJfMBPim9jfz7gqbvtrsAoKSJdF39LBgizCrab7UwbkGk4aZ3bXAG3yy41h5z3g",
  "key19": "4bMR11LFE5Vc6ULsKT3a5gLK716i8W4jwZdHwSXstHXiajZ5t5Lg82ejPqg8W155CE6Fqdu5KkWf7vKKR1nYZ8TU",
  "key20": "586ymCvakFnB1heMFNaBFyuqjr3nixn9YoxewNGu5YCnCpFpEhco2xxKrdV3BjkoKhHWSVkNzgHv5QjeFT1vmV64",
  "key21": "5JBqUs5ca8wDbmWzowHGBj6rgEhsVYw5gTkBid43ih74kjfiufqrcY6Zbe8XTXqGtbX3sBTBovGdKKAv9Kcbn14v",
  "key22": "3bVB9XjWXRDJ56XQJfNsrXHPqTT6o8wvs3TcNXq6PyCfbYZxi4j41sB3BRSybT873ihkCo54GWSwwtaf5pQhVsB6",
  "key23": "2EUYpCkNa9kV3e61V26uMGYrf74abLiH4RAKPwhkzwu9ezQntGdT668z9pEWQS7YkrAS9hZbNMoQiWyEkNLMcFyR",
  "key24": "5qpdgo4dJXMmE8ft3J41DodKLqvYWWeGmrmvqggcVwsZg6ht5zKRc3Ne6WhMN64RZs83vfcW59S3UnC4onrvoUPV",
  "key25": "4MykgEWt1w7SPt3xgXFRmGVvRy5Bes4fGL9bUHYGwkKmrCeRzRXDgDLTPbbRa8zLfkb1jdk4YLzYH6JJpeogciH8",
  "key26": "476ojP17sKbABMQcyPCsuYARHfie6uJQ5zjwuCUjE5Ch8knwrw2Xiv3cgckiwxHFkuYH6cTm5Evc3HPi3ZJ8635R",
  "key27": "1C4XrLXoZWFJ5Hg4uYHkBBFExgwbtJAZUkQGjs4WYH8K7YB8sL6GFoUbSJkzMXyqLV3MS1TUXBQ6ywYegFnd4R5",
  "key28": "5iyJkgXaTDLoAFzGT7aUf1PWSLnjUm3Hw4CepkYE4gjeML2RW7PkFY7oPe2hYpjfSw6nKcxS83RfoCLWbd35F5bc"
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
