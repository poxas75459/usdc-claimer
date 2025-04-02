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
    "QBMWsgistBeJ5LashTX2MVpTiw5wBFKLZ83PjVG1wAsiRUV6wW7LRnnJBjtmKJQQnhMestmEMJpSgL49p73mMzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JKpUhpL2DfK2CU1K4Y1uAX5iesywCyrSozZPZeHQGGuvre92o2ovYHTjWsgn1aPha7yGPBNBMMmAz8PJgbceMqn",
  "key1": "31xQQgoxhYotmkK2taEcQSvnP7AJe3EMvLmsj5HSsrRbFyd1UuHAB3wq66fLy3DvR6p8xLn7ssom2uEsDT21vRaV",
  "key2": "3GxEWxmbmTAiLBAaXXh43JZNcL9NKjRUPtNfRegwQgYbuHupG9RP2dPSnP5PK3HFbNpQKPS6pgYXTki4CP9W1BZn",
  "key3": "4r73y9GT3J5JCsuG7ApUsXxsnFXjP6bsu9FqGVUoVS3isGGJ5Auwxs7uGnrT5GnWPQrbuZDUf8HWap81yUXTV9Cc",
  "key4": "2PzSJ3Mq598SiRKegNPFBLjT4knbUjdqji9MgRqzMgVzDCxywBf7TP2FwgmKhxKkSjiGFVr2NnedsA9NRXZRyKaC",
  "key5": "Z5Y3XAYMLngtJybWSGX6ZbNaSLN26g9oyVmt7ZQaGDU6MHf92hToHpk9rG8wbNL2NNUHeKnURevtdBEsAe9Cj9f",
  "key6": "5mJ43VQLwA9W2Mq7a2k22bgRysGEoVA3R6VmaQZG9NfiCeXpsBKAyKqatwNm4bhnTiPn28o5hapKkNLgSwHkZ24s",
  "key7": "55v2JtUzzh3jFUfjmiYF9we5FpraoaWnAJwaWtCUFSyptqQKqvENMdrMrt3ZivqMkpRrQXNLksNzspDWeiGt9Kh8",
  "key8": "4r2EwnjjN9oUKEP1wSgHAFRjhDsqV2xqVsDiWotAgoCityBrapwnp1ve2VWebVK1bahTkx6pp8d1a5cLLUpTeDRH",
  "key9": "5anXwij8V6kcn24Hc8axJuuz5oHcWc8a4mjnGSAUk668RUBgwuXyv18P3bPto8DiuqiNFtBBnrBp6uJM9puwmKXG",
  "key10": "4W5kRzTv2Etyypk7HAmL24cNTtLLNG5c34gmsTZ6av44x7HMbcVYpbF8yTbCpCDgHmrdBsMUoJFEME6G7QmzxGc9",
  "key11": "24S1bVrZB1XeEgxNbMXopQjPazQcNDqMXoS3epixGw4TJmi7vPFSpSBQ7kHkZmi7U6xRmDeh5NEc16vinxhw1ECf",
  "key12": "2CNzdwifzsHMX5ui6c2HLsCkT35ijCYzrrCp96ijfen5dPpoiXJVn8jgKHmrVjKvvy6SYRc7Cio1cbfopVer8Wmb",
  "key13": "7dNfGGTjy7cgp21eghYdcPfTJPwZfqfjMq3g5kqJfaLiu7RRXnvAAtNVeTshVyTuV31Nc5c4eHA3H3oDMUAUJgL",
  "key14": "4AbbNWKv8NEobP3k79d2Ab2euV8rQomksMwXbQgrRtsaVnV82B9jDqjqMQh8YzLq2azQAVwDjXEdhrTdxr1fmLUj",
  "key15": "3nAFmtoVDbBPsoeqniDtHy2eAybpeDi55Ewp1JS7HYBjhjyBSY5pVJKFcnPEAUZv8PBqGqyWmTBdgBtwJTV4NMdZ",
  "key16": "5LgNL2hZvdX8XB8szBwLSQopyC8kVHAq2ebR4MjUA7znhYNN1nQkV2nAw1VML91qJoMKQqcmaT6XetSRkd1gepWE",
  "key17": "3CXXTqMQQfiDSTCBkxwMYJgXRKcMbktTbTy1WuzUTmrPcLPkPpi5hrsXgxda8E6QkWk3MUdYfrMMdScMS6dHu7df",
  "key18": "3CtQKs73b1XAtxk6BR6foJneHGPTbCwFtChxNYT8ygYz8aJdB8nhEE83c2pAqXUYgWpDwY8caG5oC4xSNLjFQ3ve",
  "key19": "3nH8W8e49Hr7xBY5PNwmGZfig6dYKvduER9Hkfvb9LKzEPpZ6VVzjRmfY1s59r6aECh7XB9wNqRguiBVRSLDoNwT",
  "key20": "47Eqg9V4JLsXsSHcZKjkD1F2gmw26Jf1VLVx83ovqufoEwMvLLaSB956KTFM34d6j8iZdoBPHaGdywTeE7Aqti3c",
  "key21": "3XiBh9ThD1UR8sgsEPjDD1HEaHCpnqEnQgVMiB4ruVDHMA54r6LAFcX98GbQcy6SBZ8Xgv1n8EComwTJmYmeQb5S",
  "key22": "3m7fio1gU6M1tHKJWisqB6mxh4mPxqL9ctRjVDY14AP6AMz1qpd2QSvyszcu8GcsVKVat8DFCpkhUQK7b6E6bTwH",
  "key23": "3krqTVMUx8LKdqPurUnukK3sFKTt8Nh1sLMaAeGvCdc8jCqBs6WDc8SQGEZf3w3LVdpyRJMGsRAAiyc6WGgr1kx",
  "key24": "4Twk5ny5bfxiF9G5icRGFiL5CZDtmYJBQAZ71Xq57Zdwy3zsxvNoPVt4qhbEuxDUmqGqdbvNsVVV4YExAogzLjQc"
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
