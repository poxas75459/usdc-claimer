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
    "5t5Wwq5tyes4CqVfsg35XTncnAZAxRHkkCiWCBRhF49MAuuQke92BaED2xUK9wHcT4KH4p9n7Ud6DJmxs7JfLysC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Szdy6CP9dagb5igzumeTdbThz9pYr1h66qdL1g5EvAzuWpGeGqoPiXhRVDDML8g9JZw6Ls69AavWmWZiTUA3ynk",
  "key1": "59orfnKmnhFRZg6czitff4DRdNXRkSNJM2FEx5Lf9FJ34GkhhReF1oxXvoGdwgUxcfN3LwPFnVzakK7SZLj866Jv",
  "key2": "63a8ny4RsL6X82nB1qjt7gFtA7eeTwogcShY3zzXdFuaiWphuhXUaXLyMgVkcVUJhSqX27XPHUWkRVH7vfwejJbq",
  "key3": "5it7saStJebr9955oC8ZogS4HkpUCK93Vu561egf6S4hYjQjuuz4LipRpukBGtnxKhQPxCrY8LK4Taj1aRTa8SH7",
  "key4": "5aVaeXn27HDSRQowEnWgTTq1Cp5bsk1RhgxMcTPTU9UyCCdffTcKDbv1SCT3e8GnaxgNt615GLsMz8Ve6i1eCbZW",
  "key5": "1Hm99feS4GVJGCnDAg1RZV46rgXzbwLF6qtRgm8S3hMZyjYobXtsGANN96Rjv5Np4vh4E7jES12Hm7JeG269yS2",
  "key6": "32eRsCbdctAxKijJuCsnSr7eCjdqmaAca8W1ZTfpHqqxk3StjE5MiStoAfTTukQo3kJsKehUfGegLB2EVm7VrfoV",
  "key7": "2nUtNmjqZMA4JtAwp7jnPUZq41b5q3RNpKMKZf24KrcGu1UEMZPHwNmL1zfa22CYLRg4seRFrDS5DTby29XU7ejs",
  "key8": "aM7GJBNfoSKLXPGRzsjpjPq4beAQYh9n6YWCAUAww3CXpAeNknKGhJ1PkqCeMM8cGqCv6N59ErjfTmeRJuU8yk9",
  "key9": "5R9QtwRHXgmCvr4xvMFLi9fmjc3Xi54fASwcPx8oqnLt3sJJCxcn8oLYw3o7ZfGz3Ma7ieYqmi3pmgQXNrqudqpA",
  "key10": "51Vr27ydiC8HwmTZ84Z5b5e9dVrCQqAnwXuNgVrWWcv7RmCLS3JJXsZZ7N5ES5Eq4n5C1r5kyNACcRVVCJ6EKMds",
  "key11": "4RsrnD6mshKboYHCbqAv64XBWcj8y7hxAvBPTiExQkYZhaG2S2nSgEschjtHQCrjA3eaDGyi3wn1RMMaFXj6g72G",
  "key12": "53dWvGiQARu6h745sUUdREY9feQ9HSbf3sNaa8Vu6YHSuXDfhdihNSazEQQUNxYxhZvy3zkHvi5rHohWTadP51nt",
  "key13": "5HAsf2FCraJUnbyspyn449SHH8kFtkTx77UDJYkcKGWNfErzoLtRPQjPZV1A2fY2MgcRuLGXNwp89vTfKwaPfSy3",
  "key14": "38sBSNyDEYKX9yQGSjKdPE7Fi15Tk8eXt3FQbfbLSNmpew4gAeGV7fbngueSuUhzhz7vbKVbciCQrPjiPvrKMSi",
  "key15": "4weJbsxAuM3ySGeWiAcBiUMYBQ3eF599xkEmqHhTWLTnbLMT5bCWFVAwXJgVc3u7tLtbp3oSk8QL3YiJ8fksKSpz",
  "key16": "4q85gg8zf6qRfApzMwwpERXHPLHUkqGAhodRG7upbW3ttqECrDo763YtBs8hQW1MJM14PQszTntXJk9Ta9zLXw7E",
  "key17": "2NHxn2WbvsR28MS2bu8TzxvYZZCcnhGKDXRzq61jENypDb9dnywJPiyDg7mTdqFaqKzUnsgBSKWf4SL2rvakkTMv",
  "key18": "3LMyWSxz3FwgY2bgyt7iU8Wib9yimU9ppCp9eQamXD5bBUeuvbv3D86neLCuxBrGQMyZw99shVACJ7B8TbKYJLqN",
  "key19": "5vaip5opBSD798JtERafo9GToFSwZYiAQ7dSid1MV6YZWRfm6udXDzEogXidimhu5arqLZpbNUXdR1966gHj2XLU",
  "key20": "3g4nqffJR6gZvidheent31KKWCXSo7C6JYj7BTgpBxKdtENpb78zfbpuoBLCD4yvwjEEAeJRcexumkRdyc4UYMdn",
  "key21": "2BUPX97SsLBDKtGdFyoUGBPfCmEyz139R2f3HKqqHwMHfWttHHmA5xCMqoSP7ANBydckLwpWfywA6ij4qTst94c9",
  "key22": "2dBkZp788wMBV8mXux7AJBnXetdv2KFk8XKRbsmD8aQ6nYU8qP5j25woyEhCsj1QyjJg9rYpSsNHffUqVNFjoPUG",
  "key23": "2KT6x8cXHDtGg4LrxaLfCKx9MJfF4RQZRtH31MPmPRcU59DwTmSCYUALTErnsLDtDKvMyWZ73ixDiqk3CJ8yt65p",
  "key24": "7RsXZkLHPdrKnm3qgaGHieTUqoEX7WfADVF42Dp6YX2bg6UsbA7AMJXihzUPLb4cAHKPDxdN2XxARzuHuzhd4dQ",
  "key25": "64Bvg7BeCBL8crKA5aJwjgQL25k75fTx5tX9HF3meBg39y5ZYrtjAMCx8YPCgezKrBMgJXhEuG7i47v9JRCh3bwk",
  "key26": "6nU8AGrM6f7oYaihAmoreL6J5UnDsV887aoY7BN7dzVVnK669fzNAv9Y6TnmTHDuwR5HVAwxGP8U2pg48En8iNj",
  "key27": "5hBunYEqGFYwmKT15iqBkFuLRCHHfKb5ajnbDWLsdC1JpfTLyfjyMAXqqWZBqwE3A9XcWV9GRugFTRyWTBhJMJXf",
  "key28": "5DMD94xujYkVH4mNu4BAsL5MrL1cjhTc7DVViUNiFvVhg5PamWdy27ZrL9oxNfzdNhkzUKxxJe1q7doBd8HnYgiU",
  "key29": "62dp2yQcdjMVnphCCaZwVN6McPCEt6h8MLidELkvb7LhV7H7HDEkW8WhGMqYGRC64EJtRh2mjmPpYdFwEXY2vwuE"
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
