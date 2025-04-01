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
    "4QaBRLjtQ42qntirgRJjBj4gudJEHXifCCmhEZxJ1f7uKy7G1adnTF9sQntNaQeZznSQTX7WReaazoVMMmkS28KZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UdcE1zt9qkF4eftiihoHSZQofvuNCRyH2QkegetWgJHZoDWx1FGLrETmtakeV9g9tnF6Smxt56ZwVGsZirS2PEv",
  "key1": "5Hstr9Y6W3TSvgAYxaAroxdMa7CdhujYqPZSHjiaXXicbsSuP5ue9sdSFu41ZJAXjYAc8NurvcREWRgtsjTWz4WC",
  "key2": "3H2WgvHys8UxXidS3CQzanxdGxZD8wzShEv7ympdSVVkZ7d2Y9bLBDe1GsD8YxxNwmWp31fNKVRDJRunCrKRaweA",
  "key3": "4RyAjXhVnkvSjn4WEFCY2f1tdcSMMKPaAZn31bL9BNo24wTADUzLiSJLa5fJmkzKY5uv9f1j4x4LgYnKFz8LusM8",
  "key4": "5zyjxSqig3kwcV1mWnCLmtssY8tgYHfpeRocTARfpK8sDxEADK3pT9nKRBG3uYs5F999CBJuB5RvYhjtoSGsuJad",
  "key5": "3L9Dib14LKLBGevpHxsCxaNZYqZK9URzyRBSVjCqTq8j1Qm4GYoWwrKnuxFkfFZWQZVRjrxQ8hGFu8PwwngENray",
  "key6": "56PQs9BoAqkspQyHQoAHssGmuX2eW36RS8VjBkYwXmBFLFL5t3bVmkDWmmF43UfJ5QKR7s5R7xeqkDvgvYZDHxgV",
  "key7": "3q1DeLUoCv8JJM1ZXeWhWQqxYqB8RuRuzgaYmhPEGaFErqXMUDk9UWaGK9YGpPwyAEMAxj7ANew75KyzhTzyoC9n",
  "key8": "51Fv4PcF18Go6HJdAf6zFMq7d4SgyxgQCmrftzENZgRF6whiQ7xVjBRJ623yXJQKujyBPhW5FfHrkhJFs4tmcBTm",
  "key9": "HzUb8VnWmiMrenRfuRUZm2agzbNEg5z2MkHAF6LrzmmVbkvpsMSS9tT3KRYbn3cj3VfV7QBLjC8VTLjqbqhYLKG",
  "key10": "3uUNQr6XfiWrPycTEnCuxww585iqLhBr7aHbYkTEpD86xaJkWjCQjLrowRwnroZHnNTrBqEjbq3kY4HKm1mU8jki",
  "key11": "2PykitQ77Sri7JW3K4r3eVnQHEE7vGxT1aycqpmEUN4Hyv5zMPKY1MPZQi6JEhx3GzN7u76YoercdJz7UMsAFZDZ",
  "key12": "65LFpuTDkRHeoq4pdWB6QmHomWSNCR528BNdfWNsHyQkam5urP3b8fqSCkUw6fwvmqz64f4mDa2fbrY47ryN3Cg9",
  "key13": "4EF1MkeZLAYuGByWhY2wFbiPFKmE93KT99kAsc953A3XGFpa9riTn5LPdFstHY4QaFSmjX4Pwhxz6nBW3WAW4fJS",
  "key14": "62YveVeJJ2C1iFptRjw3Cit92Rn5mMKYXvuKL3Bjfyo3MCC8PWtoKy3U2WLGPih7QxnH9sGTGpRWMpQ9eACavfRK",
  "key15": "3audFKEtE17uS7f6Xxck7P4T1cb6RwWUUczEvCq7hcb2gfCmktfXrgJ9FPy7iFNx9aDfmrrCeDuczrvaj5JasHxJ",
  "key16": "634jesjtQntWSr3WSxGDtCcu3LybisnPPwCWb9S7aCfZY8Q8N136bcsyAREuNfvWDhh45NiueJ6izc89uLHhtzNR",
  "key17": "5q2PdRLgwc29wxUMvxWSpnZME3AVPE1Rx6h4Dog7wgu6Sv9sbS93mHap5h5271etL5mQvnaRYtgxB94DmtkQLEb6",
  "key18": "3mkgM2dcAz3uUgp2kGRKsX9pX3QTYLXwW8KycDKQJmMFNzSjvDJ6nyangNwaB16w9MkUQmVzuUfgV8gNWh5pHfg4",
  "key19": "2gBBN5c61PgQXicGoiny4YCQtCmm1jpVxZ8izwwL7H57QWq6h2axgX5GyjRF1GMwqJA7bokHZkiMzqjxWj14iExt",
  "key20": "2ujHG61kNe5Prj4UBJuEMwBnr3tvbV57AeiJu7UNHQTXRWnGZ2HoeS4CvR3Hxcd3xPMb8WWBBwVyaggAb9dqtY8W",
  "key21": "eAvzAcSTXa55fsr2DSQWPGVgmJXFqY61Y6bF3QcypUbqevbuVft6ggbkoMPmAy8cxqePkFEjpB2SWtXbgRHhuDt",
  "key22": "2YeKkYxnUxPZ7yM5Ma9CeapUvxhYMzGADFMmVQiJBvyrPRDVYEXCJ1epUKwDRozQZWnwnPcUi68NigZWFwT6eMng",
  "key23": "3jE14M7dnXgCaGRBg6AKFTt6Wdinp4fsx2vY4mKYWn8fpo93xVAJn8Rq5o4XUbSTE5SQMousM1z6PT1uTq1bBLSy",
  "key24": "55k6KQL5YJDVdsVo68wd89ShXkhkuhnGJbzkXhpbwqJz2c4h8oAhbjZPJFea2H7ZdYJHdztBjPy1azVnBC2WdaYM",
  "key25": "3m99bEdLvn9mVv55N4e9Lf2Aou8sTGEPnjtwvWLbHxeQfaKAjCR53BviFthEq3mB1mtmduMT5EedxY2HS6T3kmCQ",
  "key26": "2ML9HN728Z519zU93rGGV8cAAjbgMsarmCrk55j97V8hLmEGRWwWA3WLbh4tBDMiPfURoYfy48a9VbM3exQQrrBC",
  "key27": "5H8GXGYDQN2D7i3Q3VzhijoLHwAKfQPGWFw5WeQH8gB75763dpX1nGMsEdhuCrwzJ7W62V4BbvLds9Jk6S93Nkoi",
  "key28": "5uARmtQcsgSgNYcN8tDjGArQMdVWN9kU67uHnMEdUT3KHdPLVJyHSkYtWKyyfosiEQEnijpcrkqgxrpvwK63nc5v",
  "key29": "BhCBwDPbdxtkwxoTjTKDhsH9JzZPP1AqWqszDTZrvcAvfVqButcfnn9Z5wUEHkL6qbTwRwBTaLVQyyTEoZp2MGc",
  "key30": "5VqL3b93XZUMjqti1VNzu5XtQefvMzNmTYmdYkPnnK5zntCJVnkctqxNp7danc1xutCqFf5bz2oe3TE9LbEsJypN",
  "key31": "5oxjhtChudeKPBTRp8FKwEpTzmVtQ7rHEDxzVEhsXBdTM3GbNh7YtXozPyg9VmmRqRkhEXGjRCQnWK1isKcATYoU",
  "key32": "5E8ra5vSTqepjVoqgxgmTyREr3DZYQERrZi1ywVeJmn6tA4yESWcmtP5LpYww5eWLQqgYoMMuQE8bMD87KPNUHon",
  "key33": "3RMu3yToCsVpN4bDTLApny7Dv8zFVnVDG7d7UZHmhwHQJZa7cBViPzLsvs92dcPM8mNgTvEqdhCAuoFjCiypBvrQ",
  "key34": "2fkiGQCRxptcJ74SSF249LYaag24nigNBd8sjocwGzEJinCFDLa2scBPd9Nju9hzfh8Uw2mtdzkj86eWbsmUxKGf"
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
