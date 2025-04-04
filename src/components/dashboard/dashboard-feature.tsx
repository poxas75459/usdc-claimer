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
    "3chpE6yfsByPr5zzUuU1fm2dSddEZ8r1A6wfBgx9Dd9Xqj5QQaFFFJQSwtH4ouj8DxuJQzC8rqF9pgeJnQkUp9w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJY3LaxbwPCLmPUeBHEacer6tbd6H1MCKH1G9Fo2KpqKJjmRqK7AowYuMqyJ72dGFsgZxpA3aYz6ABoahcjmp3u",
  "key1": "mquJd4cfE1yLzF7ZTaEBMcS7bzwxTHrozfjEdP1PtWFcr67oPg1dYUth5kkVA5BjEQgHe948mc5Ho9yu6ZtMWNY",
  "key2": "D7YKozAiGzRkakePs5e5DzTAsypLGKf3KQMucPtQvcVQ7HkAC4uHAmfRSWewW27d1UdeRSXYGPjW8PzeCx4KNFN",
  "key3": "5A24d8R4EiKg5WzBSXKKPzdcw6iiANDu4Px6p7vviqcFZtHgabbfQhF3tLV56fzV2F9SKDsiRPgyLJRtY8oUxPnf",
  "key4": "2Vk9qNgMCYMQ7jaJBHdAgK6CKu9n16DZrtqFrsWk8bTniRLDqeCDwteyiA5MpSfE9KcRbv5hxMxEfKYkC4ATUUos",
  "key5": "48mWZomEJP8vvHgF5ZBa6AwRQaUwYbKnvZnubDXKe9hSmpYTgHk9twpj8bKiU7atq9kunibvZ4uPaz9JzPor92x5",
  "key6": "3H1TACU57ehwejeBSocTwzHSsxD5bPFQviox3gA95BE7f2Q2XkxBkEDcsqCKaCYeVZNywNfdJdTWsaBaAEKQWyEP",
  "key7": "3B3oGJAQ95Y5ozcd5sJnfdLTyszzNptsyD1vZpYScDyYz1PyD81W73RPW8cPJP3bv2tFr14fxFYp1VZh8uSu2hp3",
  "key8": "3gyTCRc12bzuV8nrC1CTbmCKtmnXcmsfnmHkToXdGA4qQr3N1rwJfpA3qV1NBxztVYJwQftaXCcqK8TaQwmx66Y8",
  "key9": "3TNgUk8kyWzvd3NXVv8QXAGbFU6CVUHmtm8QkdzBu2wYdsqrMewx7bTct4n5crAPkokHRX8n5Xrxb7VVWCUWmxdi",
  "key10": "4jHcLk9Z9NgnT2m6xghnFDnG9yLaey2EB56YJrPhiqWHqCpgCRLhptn9pLwwzVwjL6ombzqNgbFBEXMWhCDhRpR6",
  "key11": "3caCRanHLZHNmLKXJeYdq2ZgRUEiay73jcDhxhX4aMKYMsQQd6ZiUo8Bpitu2778jbzo4TPZk24U29kZ9SJmuwru",
  "key12": "MHry89mYAWANRWjjkiP9GtfR81D78gAmZdNFhJvpcPHwLM4yfg3BTK6H6AKnbjNQfFGnFtXfckn6NbdnsF3nmRV",
  "key13": "5AkKynqjDgZsJUEAKLfNUFRvXMyToPmtMcU6SvfJeB38MVyFWfHVxoBDqi8KLFogg6xZ1Nn7HSdUwnywwrGQovjF",
  "key14": "5zsX8z24jJnuoKCuP7yemdMozBzHK8mJnLKEQ6d6S5z6dtiUjCuQoPrv3ya1Q1pBcnMibxEQrN6m2vcs7SX6YE7V",
  "key15": "2aDAx6r6LuDe5gD4ytzbW4Rrkb7zE957SWgio1E6ByHCDGhZs5GJjVzaoePBBPiF77k19PaZXnwryUs4mPLeV4rF",
  "key16": "4RLsNp8E6WBavPNrf8fidr2qHkrizP2pbWmX8UEvVct61vMp4pmhE9fC8o4EnUDP9GApFMbCy4RsYcpHaM8UME5j",
  "key17": "5hKmmNQErMRktKz6UCC2XrkTsqrx734fcc7NWxvu2gio838jjpwoFQVqmjHqESYfGrLKbkvkYvs9vCnWvX4uF6FQ",
  "key18": "2Jj4egjZUyhhhNmSpTedJRo571HMxNHoqSoxgRQVVESGPs4TsXyYnyGyL5EfxxrVWxuA26T9KtvmHRM9JcZ8mpn6",
  "key19": "5WeEw8Z3YJWeF3ckg4kd9YBr3GLWwWpS9BQZt1wGMPfrttsiSgJU3kcqBUQUkbye1s6GbPxMmH2SR5vKHcWajZaw",
  "key20": "2V5Sv5PCsqtCtkG1PZyRWT4Q3SwN7tzjfvBCRNtyZtm7FAwcPLx1PWAzREhGdjMXX7TULaopw9HmXzntjtxYzCJa",
  "key21": "3Hx69a7yiw3gkdM9n9HdEgxqfUSb3YgirH8vAKREvaUkhRe5zCyMLRiZ47xHCEpJmBmKucPUv5h1B93cU3M2iRBu",
  "key22": "4iv3hnbTUCCcLg9gP8YTZkqgtYdUEvED8XPJ9X9QHrjUMNanYzeHtr8KzFsPaFcpDXMqhoh2DiM31xD4Yjad1nwQ",
  "key23": "3GLko1vA8BoccvKSsdVWDTE4pNkoNV9pbL3pF3avHXkwwzYn6DyDFTvTZfj6KMxHHX9G9E2ibxvgRL7poxtZVfae",
  "key24": "47e7T7RiAjHUNGw9FWmujNspP7aAHJM14V2hn5EoYmTAwBPZ6q9mKN9s6HDDy3Mt5i9PKDDR9YEZajD6AqyaqzT5",
  "key25": "5o9odcaitK44YzWzqtbSTM29K1R5u4UM8smYbrLmtHEd3AijRFpbe2PNQfMs8AdmGBwmBmeoTXL6Zsvma7yt2AWb",
  "key26": "58RmyjmBFEcCY7hbqRoTmHiyNPs7dgoEQqgBPeHCkvGSXuxPZVwcdEXvPEjr3BXJrw3XXxCBYn1symQL1Q5Hts9h",
  "key27": "qfpDzT5sAooAyVLjayWhqt6X3P6aBW1WeoycMm3ZYvmsNpcEy7tiyrAUYZVBKerYY1G788kYz4BsfkjAa9KYV2B",
  "key28": "AP7Eu37zet3vVrVsQDK2WVn8wkTYf8B4qKyZYhJJXDWN22e1D8D1zGGuVE1r12br7MPBzAJYzXee7H51RcmeGxi",
  "key29": "3RrFnX7FS8MpRz3UV5AvdnMmdT7m6wx5gLanNEJKATxUe3A4ikp2Z4NcRVBZV8R8kYdEMfdh1JMWLuuXyGLLemhm",
  "key30": "4kpxHBboPGXiXcPP9pziusqH7F31uZpfT9E8wY4QiHr2iXJ7w9v3vTCYA9L1XJUEJDJVU5Q71QVooUeoa38q6SV1",
  "key31": "61br9E9TRofKzt5YG35uop9p8v971yDeFYE2AFabCNftMicJqj3JKqccG76GVQDWnKBkdRsd5xUjrkzPRMLnArWJ",
  "key32": "3Wk9XRpLzfEYP8a6rznWsFFSGkC3xpbc6ZGmq1NjNcQe39YH6RVKTfoCrA5ScNhtSELyBufPRdA3AzjZT1Js576H",
  "key33": "5LYjiik8kLNCD7tMg4PACfrWs2QXa5AXJ18aJ7iLkJJ6omZHxP2SPkG5PfL2QErU9Wbcv5o3qxvQYroA7cuCnHA2",
  "key34": "sp6zgZ8F6cqzGYnJMJomyFtUxqyuzj7h1dY6JLHH8ok43jq6rerr794L1ztS3Jp557Sy5URGRqQJvKjEwv8jVrJ",
  "key35": "2mMvpUTJPFQvaxCrWfwZQyiBW6Ncx7pjULHkbKzcno5bK2XyGHUBdaVZtK6B6AZf53ZxkX1iAhDXkF2Fh7TMk4ni",
  "key36": "52YbVb2DYA6VvSLSeeM8zirABJzmfk86JctMg2nqvQhZSnbUfA1TR85GvRsUFqQwDKNBCDoMxT1UyXcRQjnjJFrB",
  "key37": "K9xULPmALXTnPbxW4QeXDTa4S9ApmbCw8qX1BhGMxJ5jdgvqNCDwg8vkbkzsuBrdW1MDG6Z74o9FF1oPhmLh1jZ"
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
