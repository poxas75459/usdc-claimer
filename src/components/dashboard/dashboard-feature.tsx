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
    "9jciQH8fZkZ6Ncx3H4YCo8rjUt5CDxB9zSY84E1xSXXnkmC4L284aCEbC52RrYge6TycUBerdzCYfbjk2bxUThC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218kfMi7FmCrwjvi9ZMfvB2xoMJLQoXnS5Qq14TWFV6xYPdwSWRgULckjqZvJxr3ewDZE379qQPSakeXHvHrReNe",
  "key1": "5HEaq6BxXLCxF9gYMMzahEJY3JAY1D5MS9n5kx97BE3gEjmoe7frP62N6MiuubrqYm5yP9Q3Ygv4Kh4YDU14WPUr",
  "key2": "2FqZUGkb9L2gGfPeY1rukSD1NKdoX2TQh2aGNYea2atjpJnSVUCgy825pHYKyHnGrVoTEQgqskH9bmKMVmLht6yB",
  "key3": "dNDsJ9Dz6pBYVhkGysmg2mN7Ei8fFoTdKRF6rQsZ4HSP3zFPB8sBoKJLnUNcoz53Bzx7xQ1skDPgpKxbU1tBZxp",
  "key4": "2a4kTgVqqmoWi9KtJmx8ho2v3XLyp4afmPaw9SuZDeLiRfHL3ScdehXUQQJ2mAVrABwKhQydRdD9KApHd4WTA1gg",
  "key5": "5vHoKu7CRtkwaXFT5HZjNWRK1EVhDqVuW64J3ajTivwkp525P5o321eL1fYNK97qrXfNiJzF6b71JXREFi3bt6MW",
  "key6": "2Q2Q3LuaCo2fDWEi7Fdr1AmZjPdYkEkaEV2XqPLEoVrnbuA944zW7zDCdJtYx6qoRidFq3e6Kp7M5JaRmyvRgtB1",
  "key7": "i49Jpv4nTqmRTXUeUTjTzKu2khdNktmUeGvtiMhF4KmimSrKQnCtn3iAaiuyj1X3CRHVPwPRmGFcuQQe7eGqDAT",
  "key8": "4ZBLxjodkXje43NborCPnRMbhVp4D2q14p5amAd2hGmQS8zBB93t26gSNsUHfXM3djiwQ44oiJ2ndEcWoSfEBDW4",
  "key9": "4j2eMazZpLoj3cADCVyTgvu31WtpAkbhjmmN7R7rzqxuDZ8ZgcSbVvCNr41kX51PY1mVyeTm8w6YFANkxs8MkMJj",
  "key10": "3TqDFmMWoTWJZXLdReSxc1KATKBzawXuVjc47s4FncQNwuWFSNpNKsv7nnDcUYKgC9VWcKM3FHhtrd2TNwRqZtAT",
  "key11": "2KRPpeG33H7GtiVnrzuKd7CPnrkRpJD1p3DKVuCQ2QQ7JYmwVLLkWC6W2YQZ5MYRdRBiEf6JdAgyJri7teQfj2E4",
  "key12": "3QoNxm7mqjWGZk9eqRtoirco3HUyT7aNgkMCTFpkQoSBiAW8GN7Ftc9WpJATxvuJK4UwgYjmorSZfUdDtQcv4tvb",
  "key13": "3vWMTG7gEJ1CxKrvWRowc5p6t7DMTo5eM2M7MxJENZVLhaGABwpPi28bEngySusNPQRz7msPTU1iEJdBaeMsaCj5",
  "key14": "3bi7qxjpxjXdgx4DjwxqLByJKgiCqwPeTMBa2RXEZ5Uj5SRcmQe9xiMbBvPzfLqU2Rjnay2dtXWx8dc5Xknun2bp",
  "key15": "4FthwEp4tG2XdPdqvSZWXyMrBj2fDVrzQFuoBwYvHweGhKFMNrTuEp7cZ2FFcukT46orAyreY5KhzWVMPLTY58MK",
  "key16": "4WbA8dJibUTqiu2dT2jUtYcJjZf91QoGUecwnhSJmvCuGu8dUrhS7WqZyPhKYKt4bMXJCdMZp4orSGehyBzMFA4j",
  "key17": "364PyPTopBJVNiicj2eTPfMxgSp7BCAc5o5Ty5FXGXpPCHtM68ESXEdCBfS8pAZHmazBh7gammWrUaS92oG9C3Cn",
  "key18": "4g1L5y9utQZaUZWQhJ8wgPdo8mVduQXfq7aHE2wBE9HiGuZuodfgd8gHm4E5Peq3z6AxD7k1CDmNfXhA1PVNtVaD",
  "key19": "57nvF8WjWqL8TxhzmYWnBphK2LBXbQUms2bsRj4B7hUxRQUwyxsCrbDJUbrbXrF9zUnjiVYK6srtZVNB5bQvyZUZ",
  "key20": "TdQfMEDYBt9WukHMwgiCvW5ctrWEHbotRb5sB5JFfqNevGqcNtiu4jdchNyxxEHuy7BW6rWsDMcvvHUxLhMwLpe",
  "key21": "3nQHYH3LssoTXZfDg4AmuEJMVtm3dNWkgQQKkHeYBe5pYoBvySephZnxG6W7xYt545JF2kGqou9bg3k9VWx89FaJ",
  "key22": "4VpZzZt2SSooqn4MhKGeyx8m4wn3MuiBd5EMki5Sram8XNhMKNsV7aYZfeeDwckGuQc4pqCvhJA4J3Pb8t6wgGQ2",
  "key23": "5xmco8GwNirkj4yu6UXKAJMVGZyZTpi6ZrfPWnfiaRDSQxjFKkkMdA95edNF6Ztnof5Fj596774wHvGHtAQddySC",
  "key24": "5STRnFUiAZQsZuio5pQMyhLnDW5sbY2HN5RBMWim22w9KbspZK4CiLsDBhGbcz1VSY536vWtZLVYmkqo64PUxCjW",
  "key25": "4Ti8KYmGYSGbudZzR4c7RCAJhwyQVbPFZ4J5tdArLVs89e35K2v5FSeLe4X4pKHq1fC7e6iWaCMM42arGSapWDHz",
  "key26": "4kUTFYHSjRvZu7iCNgwSN4qH8H4vsNjEByxMMZNSd2zPHmXg5WYPoC251ucrf1ewASXMt8PAALrmE7wQfk1EzT1f",
  "key27": "4RPVF3X5JF5J6H7QLL8BvY8eyKbXpqaizXHwL4j85sBtiXWSiJiGzNBgPrgruEhmQpKezMt5iGhf2pSSUPd1iJGB",
  "key28": "4H2iBvAbSPHdqfGmr7WXz58DpCngrhqiimr187j6Scadbo1r2oJjybAjfdG8u5TnTzxQXEAsT6FvS8SvRoKJdM3b",
  "key29": "4387SR6WGs9GZRVBQqdr5wc8bGKwpu4kNJ6i8xgj84RgVHLCJTVxrrpFLSgReBjoYEAzUpyqA5HGhezsQv83mC7y",
  "key30": "3Bsj6ENQSPmrNXUSJcibQHz6nBpbSTFxi5NZH4HNAtCro5thtgg4m3ab1mTMehSg9ePwgLSKKoPXQuzACT325hJW",
  "key31": "5taSE1NNh3E5mAEPotrddQwNPwHPz7QhU4RyuXeFzygAvL8qYEoxd9fAPJPsMZSf9e7pdf8iz4JxK59Df4TCfdbG",
  "key32": "2Yzdd5Gu4L3n72u25peeEYXgpTHY1ogtugtm2aCCGmny8NFuybFHFJQQVZ8FEwZzL2a121anBU1HmPxof7JRtXyu",
  "key33": "4m14zUzBu3fyEBLBKbkp1dQRTbhs33h1mmwiTgdM4FHGDjEfC1LVnUhBTw4Ce9WRzq5LsmKAfcF6KsnaRVBRqz3u",
  "key34": "4Hjx7tbiLXsoTHCYULwYYpsx5ZhhgeYUBUP4XCGtvoRmPM4T24jbxA9MceVWqHDKuzbYjoZ9SXgoP2mCeJsAAFVM",
  "key35": "4xoPBa1UQxeeteNwiyadvCTjVazug3F4yqFDafU3pjF74acdoM7URGmmhbYQRW7MdK6HH5jdFyXoUimsC2wonoVN",
  "key36": "5x1fpoGeJ95NNyL63hnVBf3N98QN1ZVrrF2RdGrSieXpAEFHuN52n6XtBr4rSQJnWoCB5qHX6fuUZ8gdRLGs39o2"
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
