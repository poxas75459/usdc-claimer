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
    "koUchFowhRU5tH4Wqo8g9JmE8CAkQtetV5bA9kGzfyX1rFtHSPZZSXrZdCXN7M2zj3NDR65QYcyVhBLhAeG6iou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qgz52ciQ5FZrBVZnSaVTvHD21nPPP7spNP3USzxGriJTicDWiWRANmbumzhS86vkNt7Q2qZW6zi4yY7EGFFzFEJ",
  "key1": "26yXeQ17ZHtgSMiHQHPkSgFSxdNGLCN6tveqVnpyuXRo3hQtJhZNnK45Xc5b8oBuQnTP4f33WuLWdxzuJXMn2aTc",
  "key2": "2SSFG6t2ipX3raDKHuzHZohSDVnsvyubAQub6BJjkRt6NaZXBYEaZdhxuZiJqQuyGLgQhAGq2h9sBuVRKHYdA45Q",
  "key3": "27wXtJV1hSjd8FwY7QmXJVeSU7GEu7smSGp55R2eVNEAWPnY1LD2Sk6n5wufAY9PDs6BiMoi8hmo6ABxWiv89nKw",
  "key4": "3eXKpr4jXSzhFqnGkkR8V52bKr5xZcmUeHw9FGh2BABdbZT3XGyL6iLnRVh1952bArwmbgoYhaW5ortViRDnEcgJ",
  "key5": "3wrUBJVaQnXDNxTDvXLbj76CMuUrf5kfd82ZDqSWBNHycxmCSFy93JfRAL1bcSkCdqwD6MaeXxXTGVc3Ho9BkLri",
  "key6": "43c9FrL8BYvxGNSYDLtdD3BeiYFZtyGRHqj3bMrXgWYBnLDeamYbNaBWN7RzcADN93xYJhwRuHdbsZm32VZwMQBj",
  "key7": "3sRGpgs75vhZ2Sm6k7A9wmjTaLxYC3gspWDWughZmB6Tnf1wzZ5wHhzs8GEuuEe23Pjf6uWF7KTnkTjCXgMYo7tC",
  "key8": "31tkuLJJH22NzgrZxPbEfBimLuj4jqHXWr4B6ru89ez5q98NY8meQQYTDQDQ8J13eZsbLBCN5SrRKDsEtqiL73Tr",
  "key9": "5ob9SU66jYwcJS4m5U9MJqThD9qJaZDk1NE3fnn8qg266CwTQKY6Y2pNi5NNvinkG59XxMmceJdJcuC4uWvBxhmv",
  "key10": "55R5e2BbSDKxuom4LNzidyMQ4KE6ohnas98ahWPE6GwdZeqnZfvp4ifJUhN7d6FacCHMf72DRxNxdjJQ1KJtW2QZ",
  "key11": "3rBz3SijdkoeuatL6uuHb8PKQ6FsCBh8uMwukcB8YSrv6xzgwqTGJ5uVpZgZVfGxhfgJFYDDnyEE3oqeuStFxpqw",
  "key12": "UGiar2Va4yGPFN3H2FWbmrtEsieqt9sg4gq2M2JhdXKMFcDsWv5rgMN8gYQTpLW4X7X3nXFuQghJpKBC2PTKuH7",
  "key13": "3VKtgyRe4HiksMPQoiQc3BSwrb5Zy7pbZ8DYDPyDwyViZV1JosJTuUiEy8uyoo6dgzNB1uMHiAhuKYPnauoDHcCv",
  "key14": "5aXjK5SUFWQHT12NqSVcQDiMPvsUtwyCARzhB71tRRoUtP3prKYMDMz3k6Z9Kvtjciq8NpqM6eYEeN2nGJuUCQvP",
  "key15": "3syB8S7U79osK1NxRwx1N8a1DnZZoJJ8eYoJrmFbe6JzrNwCQgoFuNL5KL6xVAzoexWb6cWhfE5LzWMHFX3uB6Sr",
  "key16": "4JWpymmJVpUWy3vKH3GeptCrBw3zX2PCeePKrcMfVZ3VfyTS36PX2jyxj1c4TvPSYUX78RuzZjLaBeGA7tMee1Cg",
  "key17": "2AKYFhCbTJEUpD34K1CNPsMsw1LXuVQMiXLP9h4hh4xV7bby4rWEZftEX6TNPGTCRmTaaG5nutmPeasv9NoXURpd",
  "key18": "227frKWQ7rEmtYBCwRCCzkBaWHddy5G641THmcr1K9VgGXwTyquxN6GGESJAx1qREeMjuGGAbWafSbsxgCmv6BrM",
  "key19": "4pmVUiR6jrwoB2EWd8VCmVWcrWQZ5rqbnDZ2j3mEgjvVXpeB5tDFdFJrBbMPfzrkJTJXnmzQ1gCAk8C6pQeUkm31",
  "key20": "HvgbSjsY3DHrfKT1rpwqainLjxEn1eUGuLo6cchHgxpib12dz7TucG9MmUkJyd7eyrJ2vrReVWjkdu5FfTmuL3Y",
  "key21": "2QPFgaReisnotyw3ahP16V7u9tZfCQy4Tazemk1fTEGRdhmoErqY8JtUmLCUVogH1oHnxbUWxZWDcdt51uXyHv2e",
  "key22": "5LLjSqc1h2qKJL4j8B1d5dJHTdQks5adPymUAQRRuwbCGtwUFcy7KMQea8FuQcg14NvtDDBmzxNVwZpW8PBfg7pr",
  "key23": "4QYntxPW3R9e1fdLsAj1oV1nghSV8ticEMY4yAxbQvaadD9RjEG51c6oV9xKGHDJ9DqBxwrrUySpveA4H6ycieep",
  "key24": "Xv4CTMXTQv6fgfvSdzkDmjgt5qggP4ndP8cJCiFqnPmgBa1MxHsbzCuSeoTkKtR8PzrrK1SnX512Lf9YnnXMM1Y",
  "key25": "29NfBXUwyUJ6wo73kZRxDSXCXjM8xR8fVmjnzGKCHvbsySkGBZ9V7sonbvjEMrugkGh6f4dZebyHQPdQNG13RNcw",
  "key26": "3TsUZh77bu2cm8JKq6KRP7HvA1mzDjSmrL5NWa8dMNms1J99Hm8DRbf8rUyYUpgJTWMGrkzpZPnzxVYkFebXH3XQ",
  "key27": "2pBAw4wSyhY6VpSaQwt2fM5YcCErwvvUXeBJKt4mnj2gyhbnJfJmn5P9WbrnMFC3uJmFVcoHLeLHiEzWoYskiVQo",
  "key28": "23iMpGLEfgaAQ2uZ4BJ7B1zrNjmL2FP81xTqcEGVP5mRHJKA6jnyo8LhwCvYoKSewg5TVVKMJTMPa9vKfykN9BSP",
  "key29": "3RbwSwj8ypFRXo1i4m2csNFiEBRetnkjUzYYr6tgK3KxpHuBVgP5tDDPoGJbyR9N8uvL48v7pGsB2JsbkiSrukco",
  "key30": "2ynCj6mJnvfxziimnPXeqxePfbfGyj1Sqwk62VyY8w4WeTkkBMxtrxjjDg8vr97Si8Ck2vSKeGFyCHGCCaEXJ3LC",
  "key31": "4f2rrqhN4HcRxaMo5RJoWKmjhHzR88nQTftghZGcVWmZmpFyVAsHiFM4xke9VZd8bsFAvhH4kXDDic83zrGN6Zaa"
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
