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
    "3Pz1xrNFGU7ZyJVh4WqsFnqnVLdat6jTj1vG9uZLmjqb6bpzc8WRxeg6fy4c6nAsKsvm1Apk2CDtodGuzG5kCHq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2J9sqczbD5vnM2qZ3aXqGiJuN66z4frDhUeC5iPkJnAzbgbFyUTZLGjA4E434NJsyto2J5JoGHVWqdphNQgTHf",
  "key1": "sRHomq8Ce7PA4HKM6sg7JFpxoW2BZQv9YwTa2FphDENFPWmo6uGZRv1qCA6vYd8r1gyttrDMssq2P9JP6aPActf",
  "key2": "YMyycp7MVoskso3gTtKr4U3vkL31WFtBEvAK4MLf5WXZM3eJwoEXLj3EiA29xSfqQWVah8Jq3pxQJynornNPW5J",
  "key3": "257vsZdat7cFy8yZxNDCXSiLYpXrVDtGS57gNFdpv6vHGRzvVRu2vNG9UyqtzBUcb6BM4wggMyA2td7JLUee4goG",
  "key4": "tEZ3nwQLRPCGR5pkddtdiS6PnqKxQNDk69W134GM6FerC9LuDGuD9Siry3htrct9SBj3goG4jxoJHZT34iuAVyh",
  "key5": "28KKCjHfBW5MJ92gtLAEshgf3rtsBnmA5ynwgsCgsjc4icaogszFtsLyXV5kiucZihSLPMc4zHqZfRvVco5rGSh1",
  "key6": "2CPmjSF8v22Ec4vYZDRAfeJezNETM2y4MFiSvX7H4GTnnFknU439fGnXweTezrGgk6EveLHY6HTcW9fL3UtjHFZ2",
  "key7": "3ju3SWw5kEjzZV3qmywGjhH1WQk47fwT5U3BY74B7W7qr7N7QfSmrmTADD7NKvQ1ndWEHAEwKNeQqgGAePeFqhMX",
  "key8": "5eTKWRmFWrpp3Z8NWVHUhSNv85g6wCtFuoqusuM4UnfMndiB8hy4bZFrGbpASTx32BRRecz4dnq9ahgusKonuamP",
  "key9": "4wEMqngmr6uXtSJABaB9dAAxywoPXW2QCF2NwTd4XuXWiqPYPgGex2sjmBsWMgNZrz8XF58ks1bzmALNKTg9ij2C",
  "key10": "3n6gLMBtNfeqYqxUNCzgwe6H7BWo9rbCmrcHgMR5w2z4WfnLmfgrqGfn8m2TFXM4d7kapKJZtYfApZd2HLKiwsPt",
  "key11": "3m7UrXzYbLkjB2jmBbnj484K7gPxu9Tht5xRWrXz59gRn76KxbdUipXjeKbgV4GgW7VZ8xaoagRXjPD8ywjamLTZ",
  "key12": "5Fk9GKtFLJKuQmPBFvPG5s5U9fPgxVcMMdj2Vnzct8KWYzdNJy8jsjPdK9AmsSbF5YMdhamWd5mCQfhzTuw7Ydc4",
  "key13": "2L8aXQCpJoMfF9j9b3CARmXn8jWhZPQ5bgvCrSHYjthAyUD7bAcXvahZUXgNZSW74FfKiov5zWUrhrjXDEwbfUEe",
  "key14": "4XEikafcgxsq6mc5NtM5JfchRNWZLWVntm1T8vmj4u1Znihy8xEzjULjUrYMGFT5e7nAtGnQm5wwWj8rv69jLT49",
  "key15": "4UNHa46xoigm2xtxyfs411BKf7p8nV9HADLV9fL8drWo4usGvY22EJAZZPXdWNrKS3Xm4gWPiE3qi14yH1Vf1ce1",
  "key16": "4smPn19fWMpgA2Z6FtA8ivCTLosHeiAvAvDUqijyAoTfj7qpvohmoKMPAnULa27EqM5GJDyDKyCsqefLLQT4bTW1",
  "key17": "B5QwNNNcMPCSTeYLeCrUuire4YzvL9PhYKdqaMXTiy4PDNW1DZKnCc9hD5x6bZGYKr5ktRgceG1ArNTKskTABpW",
  "key18": "2XC2CVbNJh38TStUtZy5H9WN4xsqgQTwNqogPmKJKfoKvQJPmsTZrBgenwqQKMrgpdZZV87fjdcBCdgZZw2cg6RJ",
  "key19": "4Vj1Dnfm2RJYvpiV28v1oXoU8EjwPFE6JxpBvoEbmz5hwoJq3sjA7rgfARBgMfp3X6rh8t16N7h3M9CWrx1PeDs5",
  "key20": "65Yv9q8ThqXXofNgFANdxt2yqHonj7LJB7zgBQJ3VYTJu93MouQBTSdpggnupGre8H5FfNi1eaGgX79diTuNY1sp",
  "key21": "3JZaqEJztnjzJYG5GYycuEnzky7wCPT1bZzMkx1i4WQjZvugtD5DDdTJiNUrivyyHKyuzibu2hkkpy7Z6EcXxEo1",
  "key22": "Qj7smhgMv9xMyEJf4A9cS34pA9Hf889nfrpkhzzicwJhXjJB8q4mK6PAfZy3kEPJB1gSrXXeCkcZG4de9nDxgQw",
  "key23": "5ipvJEddNvjJSYHJQfbHbrqf4uK2LpmNr84VG7sfEmynByvwVJi6RA38vDtaViJSQkf4s5oxDTPtKuMDBDwjBCM2",
  "key24": "2w7n1GetoRAthy7SXCxRmrd2sHxfJnMChT44yf775eVqjWJi8PMBehFQMuxAdPreiDYnkgeeze5sidDaebQJ68tS",
  "key25": "66QtZD5UEZuwgXqWkNhsUZgwsDgMC5d8tDPXtUe9FMCQzftdWzXuDLBgT1DPLmGqm1jMPHJEG8h7AFwSrGo7rfC8",
  "key26": "4cBE3EQUeyYwpB4x8w1AZy3wLXv4zCBF8mbm2GrWePR8t8bCVUHqEBZThUHz6oKWz5DQraVB5bXjHrcWsw5LjM3v",
  "key27": "3F5tmr3nzNQg8F1qiVELhYP5UmBzj5eQFA3JtrA6MXJDz4bggC7Ur5NPpwdBByzrE6sY3QY24zKjgsJVEYimSFFK",
  "key28": "5NFietp15ayrb1qqwmo2f1u2usasPTgkU2QrRFBAm68K4z1HMRPqCdH9U7u2f6aZVVpyY48UVn6hnMoqGaB7aRhy",
  "key29": "4hsJ6s7ZPCdJ2EUqct6b9w9rpYuBwTWmZ7bXDNdBJi47xdR6y5hzekKpVj8eUq9eL3ivHhEaVgQmn3QKBLGHEd8g",
  "key30": "4zZvxSoSWVWFxSeXM9xQmEpsHoZXPzjDeJyvF6rpoA2wHMof9enxw9etjuRHVQfUhsEKUjeDN6avKBSsvTANKRYn",
  "key31": "CDfahwiSvWGr8BgNXgVp4eB4cHTmj8v3JMTqTotjWABLR3ztxZkwRqQXWsj5CwkwrDFWWQX6q9HGMMPg4pB9bR7",
  "key32": "5XMdKAerPzWnXiLixbAm8RdJcz9XTEzCJKh1knnPMxBzMkTt8unaxgA2B2yfLoY3QisouteZcudu8KTx23tkkbq7",
  "key33": "56DnpQr7tLb1Y512jJkpJPAoVgwff9N6ao2uY5MYA4EetseG76mDfCV2doeUD6y6GbaPkJPPjus2JA6nbjtrGQsR",
  "key34": "2ELWBpEcyrb8TpXrSzZAZ2b6Ukg8GsumbHvKmk69ZnUL1VximKWo7xtvtAG8T5eunqc5UjZnPYqUP7bPtoTrfaX6",
  "key35": "H9TbVJ8a64ttJjUSwFvs4TjTEuo8dmu8WPpVHA5zVfPXmgCa8vMuKpMtuEPgobfC5DmnFr444GrABSvKG14bZUu",
  "key36": "63AhLm9Wexhb5zdzXaGh8MCTiex8dXWg5hxwCk7iKUHrvb9b1LDT9aDAUPgnE3xar1SUSyxK4ry72hcK8FyTYUfs"
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
