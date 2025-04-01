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
    "49GLECsypiQSthsqpzvmnqfoCWexJWHGC2iB4Zh1rn9Bou67nztiXEF6Y6wyDwjzoBCTZAJzrtsZdThebPoQFQBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hE5PDrbt6tmPzpL9zniDCvDpmoSEsxj4JQNyBi5oDLzxPp1J9dC8wVACehZuQZHVgHGtyYrVQDr7WNhzqUpmNeZ",
  "key1": "2vRwRgx32jFqxLrLJbr1wQ7F2LpfaskhY6dMf2H96E9sBqVxyZfJubf4K49UmGxaMn8rkMd5mjYUa7kpgvt6GG8Q",
  "key2": "3wFzA56bkwgQ1Lpw72p7hESFAzRVxioPXms4vGgaykHB4VybuTqdges76h4Rb854VWN4Fyob6bnZ76kfm6a7p2Vw",
  "key3": "MzWgPtnWgMwTtENdup7cgjMJ47vcaUN4nPVSJ19gA236k1gQARfQyQsBuzPrBETDC6L26ZpjB3n9CDybbBn3avx",
  "key4": "jHa9py6zHe5MUrnPmmEMZgPw1t3druKWonYRDEqzStbRVFbM9FNKubnYPMxjHzb71gtt9DXAs5c1Fc9KiA6gv6r",
  "key5": "4dLF6UXWQvw4571ShRiLKhcQaXFUD8ktRYxGQzkbvtpepSW7UNmP938cSWNDbz5datGyFd3d95mu3X1QoRq63CMz",
  "key6": "3b6f6UogaVhcyzj144raKXZUW8jX8HssdRTYArnP8yQUKK2gpVvg21B3JfCyq9kh17AvC5znYur84ixQPi1iqt7u",
  "key7": "5onwpe4v9tWicQ1gVcWfY3ukv3DvdBx9iHCaYMKxhiWQZnmXhNgt77RtCuE11RFPtQJe5uVrdDHR3omijQh34Mga",
  "key8": "47X7fXxYWq3JiR2BuqTVg2Gdpe88X2AnradCdBYGzxhLxBQ7ggrC83zZMEEAJ7JCexgXQb9hW7fSSm8GNvMbgiMJ",
  "key9": "21bfkmZrJEJ552e9c5q2nJTwEAQf24gCFijC1MJNNLyWUYXnedpGqbFmqEeexvyD6DLxsCjGWiX1GL1dMzsBYvAe",
  "key10": "zDZgcUww7ya72fkrnm9jH31Civnwykg4XzxTnvnmv4J3WHFUdJ6dpQZHQNJtMW3zyqfCFjMBv8V3p1GWPuwq2CW",
  "key11": "5mATnRBRsz3be5edGs4KjGgQc824k5aroFqjM8XKW9uQNWX1Ju6mdRwUfj2cMxCh6VKZyfQ43xk9veYKrsenbWAt",
  "key12": "5Mz2V2KSJzuL4FZHNzYnVw1RjkWHY2p4m34KwBW4hUdE7MrUWKbzdoHbQ8p2AJryCzgxnjkBVNjkKUysGZBrq1Sw",
  "key13": "9ikubh4FvEQoWfKK6xXhqDWiyFNeuyTD1tAc5bqweg3WZA7F4gNGyrN26MWNdoufn4P6QURzNhZyB6JWyKKKfNr",
  "key14": "3J5rFCEmXtWLsmG5NNgzY2gSxhMBbD9D9Mdbr25SqccmYNNp2KzMccFm47EHXjZ57SYHYcyHgeJfzPRuiQoMdWv7",
  "key15": "4gq7SMs2E1wC3ub2E48h32FtGe5dWEKC1Vfh3Wnc8yYjsxMyppJHSGeKDtP5rPZG12KLPL2jM4FSGCKgpWEaGYbD",
  "key16": "4kfV5ZpXdvzRQUBxUYzuadBTw7wshivRUwqP9UuRR8x21vugGFnf9K9Lf6JNDGmcFYDeEdA1cmMs1rBzPoxiAS8c",
  "key17": "2tzYUvLVYFNFrnS6WCfipPdaCK9JqcqBKFM4GYALKPE7bYv2bhushuE3serTYFaRk2sUcMkErZVoC7sbJ1T2ciZf",
  "key18": "5XJpSszLjT8PoxieHNAyYurYk1ppdururXXvHh6RyFWGesxUHi7DW7FMawp1PVjGTCFiVExytzZ76oYaTBkAiM7k",
  "key19": "33N1XGfbnQSPHnrALWsXXEXsriXXNGvTiqDCyjTYtR3xtBVDAjmDsGfAWtp3aabHnbyiW6tt3cAV9gnnyAQexbSE",
  "key20": "3pAUtkekaLfbD9pmr8XPRw6P6ySmnoVhFy7y2fbrpud3Qvm8oWwsDE1tBr7YcAn4KZzBa3PpX9ATk3XkNiGRHJuo",
  "key21": "JMBmSxQzcNi2QeH3FHDF6Rw4r8joHAYcyjT9yMZnr1inaNix75nmwBgAQJVVxxFYix6ZyZQb2RaYqbZGoPhTBLt",
  "key22": "4toLAzJJTeVwK5S4hW1acFkkwsJAijmCrG7SwUejxQzxgtSn2P6tV3UwtM6GDvuP5RCAiQcsMBDfhmcqRQthSvg3",
  "key23": "5CxwnjKFHUqNzcQyYMzSu3bDEYvzZTnfHF6mhvCXfSV2jPyePV9BodCoQifrWj4qbbG2e8CFbWp6zWy3mx2e9raS",
  "key24": "5ca2qPvXct2JKWmacd1Z9d8urA8W9VyqLY1WwAPUMSKVPG6iVxCA1LUTvnCMQiRukza1Cmt7X6E3wa5trT4pieeA",
  "key25": "4Dg4prJM8MAYiSQYxWXcynRL8qYmSH4GBZj89wiNNYvvc7daDTPjs9oFud9QpShJRATRLmesc91uAs7Duduatgjp",
  "key26": "3VE9A3YirG7NUgJ7fXMZqhaE4j9fby6GwZq27g3ATzQGsH5iZzeKsTQ8t78oAzFd3FJHiEJvo2C2u3vrENVD64PP",
  "key27": "53omCoMZhQS6dipcG53AoRBswUUERZbXLUZCeQXyMhC6qoXVSzPuicYw7hzJ5TVm9sqzrdBkfaRtPqypnpjVaMb3",
  "key28": "2S72fA3AFFdYaHPybtL6fmyrYczionapjBMwPW4c1NFGqPzZiCghwmDtArng5jFeGSyLgfdGyKKFSGAHTtW3X47z",
  "key29": "fvLGSrPVkEVaGUUSD7gyYZUvTbaZUsH9Pi55DcAQeXjHg2YnuB5eFBoF7NktpdCHg9VtxvdiziWXLN3tge8ripi",
  "key30": "2JZdo1GNV7TY8pF6mY7phbpLioD8gAmPgrKnSs1tPdkDsYYiYmx8ye1WsPLQuk16zzV6RwiwHy1httd6SntVD7ys",
  "key31": "W7mdeVjtTz1atKdpTrsTZtDiMYTUwgHE3ozVigg38yoXk4Ywf4hZFAtAk7mEJ3FdgXNYQQsv7nnfzgYBVVN8TvQ",
  "key32": "52QosTXKkfVcfxEW83fJMeqN6nMoDWTtoNqqFWQ7ufNftEgwDpN24Zu6SHRBDbEBdx3FnHYYHUtKRSUFaL68YVgn",
  "key33": "i1FgPyCEeiSzsMXQYntZ1Z4f8iZVn5d5uTKSTc2vitPDoGvGMv2haQXS1bBN27sLnTcB4wUMytF6Egh1RN11747",
  "key34": "KnAUHqNe6PrRcWpLokfjeNhmfu5PMkxNRy124g8tvLJonw1n5mYR7BF3vQxh1GbhQU217n9v5MY8pAWTFE8kuFt",
  "key35": "Cfj1hM25Uj9djrVTmCgtGiMSAU7gBE7DkqgwYDrpmGjWfPzmfzFQ5AGyHq3AbAZxPd3RmbWckwAiZvtCZi5ohfk"
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
