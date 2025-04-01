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
    "2MWwthqVQ6tP1KBm3jQeKFTFT95F4Am571ntTGA8zdxoup3w1yYHJsG8avfrLboNbqojX6XGGf1NdUqDhY1qY2Et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AN6BqLosNax1q5mC4SQ4Jyx9if25KADqjAUtXH7sYWCLuD7QGA96XBQHD6rkwrKfUyofWBhcVFQt1MBQume5FYQ",
  "key1": "4xwxHGiZJgxzL5vTa7vX6YeK4LpoqJKzWrkcHQnWdwUKqsxjFFwH9fUfosajLwiYgwgiZCoQfH8Dh54nrjzdm2Li",
  "key2": "3M6ibTaAeqWYWrsMHoeKGe6YXpAvQsDdqrNKnw5c4Wp2VW6vWKsXhLkzXN4PndgmpNjgQwpcLYXvnMWkQ9u1y7px",
  "key3": "4xfjHoFqZaiKUJAHSJuyaeAcJq7FS3yZpToi1ey8bMxJYWA7oNZxpXbuiFLkFAcWwgX8DdZEHSAXGfDXNcrqVNMR",
  "key4": "5tvrsYck2jRKzYskG6tgW9mJERe5oFBGaZeE6cHD8rU86iQfbeuE5y291oZnZRSrc2zarVyg8yCiJrwfVGNfVpd8",
  "key5": "4J1XBKxVNsNrjDQjLwddYPnBe4jV3iSYun93JpM8E9gTcrCbZ4Ce3qDpJNLPgfQYCZZotu96Ttt2jw4GgD8z2EK2",
  "key6": "65GZYsGPwNgETGZYA4puhXccgubA1owm6kBBtPQAurzUcXMgRba4CQK5RG24o5WziAnqR43oqLLdSqLWmGmvRiMS",
  "key7": "3KhSuKzL9zKb3yi7JKRnpvHsxpXMHGM32aUE1z6uXXfVBksAcpTsEiDXQR8Evdoz5JtNYPRmj7Hm1CkeQFMXr63r",
  "key8": "4r5C5apYRnPDkkfReeh9FFAVprzDANukr2sT1qmqaomtTcE9g1pnYaoobsg8X6LbXQqzYkGRedHWXuff5WtvFZNw",
  "key9": "3tCwEVfXQSg4kEufRa7XAXEcvtZ7kTRntMx9ryT3bKsko33RzApLs2DpD5Fgw4iiCgk5RZpt3vXe5jRh4NxMtYvn",
  "key10": "4kbzwCPxZjzMvKiuo7F3uALvyZShm3mMKoYTejLj8mAbnihKiWLNffNWCeiugXDUSD31LsKKm8FiKmzBmLjx4Bua",
  "key11": "3ZxxDEKqcnE2uTere8Jzz9j33bdzDf41bMrTGpm9oYEWTZjCmaugD6YrXJDqdZH8rtTrHhfKWP5iRqe7TCDA98Bm",
  "key12": "2zB4fwvWCgu2oDqZC8RmtjSAxyW4ArDqbt4k3R7cxtU8yqWX9NBMnKQEDaVy1sqzMsSiJzkfx6LaPLcn7Qb7fJqU",
  "key13": "2u74v9ioHsw2KTRg23JhCixw9SwP9MU8q5rSbzqzptLbA93ZEBVyrT1SUtiQ8Qy2UizpZud15qLM1qWzBeyMoXXw",
  "key14": "5UYd6R812d5KA58uvf98VjTPtSfz26ngVFnYNqWgbvbufn77cnNz55qDmPyvh1FPu2v1Bj1p85K4wLcpjxD4q9EV",
  "key15": "4BgX7hVify2dEnPjaHYG5w1YAw38PTdqpVFJRxWjWU8LQcZcSjCtF4JW98NowcdGWoMX5zREWk3knXVc1J995ccc",
  "key16": "P9yqH8pUzt3jgbMN4QVvoLFjhMfSd3oXamzmpEtx7q79VctGenfLV1kDSAyXLa4aQiSQLzNdTNTTjTkv1o2qZV1",
  "key17": "3xZYdTEeRE9FjuLvo7MNy31pQWUWjSV9qPU3YQAZ786RzVjnB3CoFin1Rjy6p5jM7t3yJTUfvYZmxbXPuF2BBaTJ",
  "key18": "3yUNRSYaVf5YfzYsZH41UgC5cSBRwo6XQrsvkfY6Vot8WXxfmUKdVmeTZEtuYEXwabv1EAZFTseSNhKQm41W49Gs",
  "key19": "53TJFmjMUjRaDstqvv4NpLgAy3CfXXpGRtLUK1fF5sQxvnVeEDqE4eB3AXdDESdUEzMNq9GEuR7cFZv1eCg8THek",
  "key20": "3HSz4gDVG7Qc3et9SUuenXCfv8ECFBAt36rbWTY43ajZ2ALv5eHy2J5JFd4ifigHivSKdTfUKf4kbmFUemENGsX6",
  "key21": "4w4e6zDTqgJXf2Trz1iPRKgHnX44vDVPiLpNSEUEuxvEKzuCu8tLr1cidMUAghz3xt63t8mYHRtsY339rxKxj2Z3",
  "key22": "WSuFtJz3VvFTo4e7gfk9ZGiXnqL5uf42fGNm7LPNJK3cRo8doDPFajXwmYZu6gH583mbCsVyEeCQN4JL5axRk8H",
  "key23": "65skD44ABmnnqGppbA1uNGN3FFcARH7pJtLXTKXdGq9kqvd7Mh4ZG3NnU55pStCenr3fg2CEFKP3Em7qZAGcB9Hz",
  "key24": "336ZYEyuTCa7QGtCFfcVEFPAjuZSoSMPe4iZjYMgUtzaQgfemtgDLGBES1r7y1oKxXRTcqYJB9U84nQ7FwRxVvHY",
  "key25": "42TFLMqbwTcyNqqUr9wypt5Krh11ZYSq9pXy8XYAFzvimzctbP5gy9rm56NivNjPktwesooN8qwV5eJJKX12tb5M",
  "key26": "31UKffP8wUqpyUTAmsrrV2jh8YG8kqcLTMS4eDE2TGzWCxgqrU3nKp692pk387MoZ9rFwTUbjntxUaQXfxcT39eg",
  "key27": "46zwBDVjBzC6R9JLd57UynXFpp1of4dHRXaqRMnk8uJSU9FMr93bgQMFMoD3DP4qbfZtHvLh1DZYhHLxH5VCBWxs",
  "key28": "5ru8zm1tMRrjLU46XCL4QFrXYbELb3DJRtR37pn8jFYRr2gZYm6FwoVC5oCXVcjkc2CVrMiwERC8kminhtZgiS7N",
  "key29": "fGi5nJDBELQJKK1mt1Q1fYb9nUHPdDFCHB4RT4urxM5vyPF5jJXZSCWL2LrN47DqCEZvULj3K6gw9q5qgM1fYpS",
  "key30": "5mrtP8sv9FNL8Vjw3eG9Z7AuwU3UUVob56dnNPZsAabTn3eKNm3X8muQXzmwpx2BC1LNvdfmrchQ6y4JUCBFYdF2",
  "key31": "3NYQWvgX3cFVVNz5LkHy3EeHHxMjhMCWQDH1mF7RjxnwtotKbq3EkQa6L3PGeWAybxTDfNHTxHfwVrV4D9c7wPb8",
  "key32": "5B2dWaZPKrAcspA72UPwCJuTJcdB7Dz2GRcephcUjNnFe3Ys8YFGwSHVe5Do23k4vZa5pAr5LT38uo9AYdoxccst",
  "key33": "5zE6TUxNUkeq9ET9WF3RpWkJ4aG4RuNpff2nm2iwyLwrFNagUFm2ZJ5g5S2GqXHVntiNGvabHcxv4CPXGmAgqS8",
  "key34": "2S2aBCvuTu1Nht9cKZN9CCPg2QAKyrth3wjit3uoikorroCtTnPa7X5ubc6LbZE21gWAGZ17U1PjFJbuY7LaCcz4",
  "key35": "2BvCdUvtiHEUHTK1NDZCcdwztxwXkWHhTmTA9Ac6nW6fmjhZnwVCMqjvNPQZ8RvBD4cxW3sy3vVLECHY7JbZJp7w",
  "key36": "36urUcKSUJkiGSkij8BooScdDA8z1C9HfBGNpxPjWLhK2tY941nXMyuqn52oQTikRLp92i5up2QDSjhJU8TTt1Tq",
  "key37": "5ZBzHxtdLbjXvimw3e6nCC7JXAUn1ajNRLG2YeBa4KpsFuARogj8xRUYnwMustD8Jt9wYJTKLD3h8f1LEx2Qsj7K",
  "key38": "5WULCLy7qT3ubBAWGuWknUMtuEC3PAHKZHbBAJa9ngAeqL5668twPQBZXXyHpj5Ge9YcPbgj1XjoDqfnzsQ55RGp",
  "key39": "4Fzi2ryJqBUgixKMVJXQHKzqbmqWzMpg9JuXhqYQbHs84AJcJ41sFRGapcLH924k4epGsRTCwX35ear4abXrwQzU",
  "key40": "2y9oX4aXoGUy2UE46zL3KGYAaZ8Je74dBJZrGSAVbZRGZGGq4UpPv5ofrnf4deq5CT9582dGGZK4a3A2dz9be2UG",
  "key41": "3ydMHczaZyqUQhBfhyMVqQy6QDYPQSVkxqzUzTBJAM8dr8u6fz4nwZiWi2UvWgqDCNGgH9XDYvZXtX1QezZBJdQ",
  "key42": "253aMzQ6Yz9Yy9XPfAxoVibCBBjy2NALbUbucYgYkwFnJ5nVYrQxXbXhyZxJrzjbDny2NkCxiLCF3t5RPx1VGyK5",
  "key43": "4s6epHareYaFBn46i5neoYdZtLSUpfvGrAQbyRyi4S1fu3JD3TYcR3xVqCTRp8wZ8hpdB222iZ9mcUpu6iS8SNFu",
  "key44": "5StUc5UkpGJCi5sowMBk3BV7dYtTQKmEMFz72B1hX2g4jXxMigDEDtxeLxEGTuGgbbBrvh36xdSjrKKpexTFupSj",
  "key45": "4tPWJurZ4Dh2Bhkna4eWAhcjfcQyNxdySVZjEwJLcuvxQu7QDc8pWvbqq9ki3682xTGj88eyK394aP2BxWJtYXDR",
  "key46": "42oSNmNHqmZj972Kypd7UBMwZkxwFk8aiV6WJ1bCHHw1FJqLwVxp1ixQuQKC7GY2tHbtDNaLCrSWn3gc2oLoNBAE",
  "key47": "2WGMizimjTgCaubNMdzopin1rFZzTJdQEYXZkgDNkUQALdSRqi9AVTNWMk3iVPPnxCBZvgVnmGBB2wshhYuH5BRj",
  "key48": "31C5fYPC35EgbVwuzZwi3V5jYBEA9iRDqTa4dS3ANrvCjWRLG6JMzSs6uNwvgwCDyQQbqKSJWeL9FotZZcmrxmDF",
  "key49": "82KN3VkqZoDYdHijR8rMmzgGSWxVv314VaEfeCjaUN7cxFrAGm8t92VVRyEoEjhKAMWkfDj9zX1oWuZst6EmJ39"
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
