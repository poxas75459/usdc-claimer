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
    "4Ub5oY5uW2tprp8z1uwy7a8Q2oU6Xw3tu5GZ2XTSQUKG6ZhCvQ78fge6gdHXuBHZ7y2syPk6yKFxLBNy5BQM6nU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QaH8RjSLCUW9jbwfn5K5cM9uwPyMSakHgLFU4MgqKXMdQJsvvzsC6zs8fW4DfFB29HNWu8XKsYTe5YdCwEDPgrM",
  "key1": "5Z3HBiGVFaBKF1CnXqMzic1jVjMhXew3LBHpBMaYVFi7mvXFNxa1YVsWVYRXpoExpgZ6NoqNpmZ2KGCvYdqxhPjr",
  "key2": "4atRtd7QtjM6ctrPVbQNn1U15avryGk7ZmE4DNfZodLW2W2dC7YNNiH11NVLw8XX9ozSc12FX1gG8fuKj7BD3kH7",
  "key3": "3ZC8g8y8V7xfvNE4XRDixcZBrxtuWMeqCkLxgntEfwo3V3134cg6aGmHNoC4GgCwXJvDQcrxsop2MMh7bkue3s3o",
  "key4": "3tXxu16SGxG66EFUvP1L7HoGDAtDzcbsLj6thgtU2KCECDkX8ivhBmhNuXvwXAUjL6UMLeQi5ik3CCDNwbwYUBRQ",
  "key5": "5DLgFkeM6rZPom3oL3g3g3GdxsHaeEz2kBtKuDnKkuk7PWNGnPxDKnFwJL4FnSVEvWWgNomRgYWNvcJ5Qzk2esnw",
  "key6": "5PhNKYzPRGztpAi35unjK5Xw5eefSFAr46PdKxSyLkc9edgzHX5nfDtuRCbvyT1X5hscnRqGXiMEVZqGhiYgQiGk",
  "key7": "5VDHb2QZRaN58JLaWU3Nm467yMSANPM6gj2rmqwtbLXChT3bYFjc2fsXGH3owZa7ZsNdnAgoauwMqLrrTFo9L5q7",
  "key8": "5qhzV9KAGkA3kczgZRpxdm9crVSoTPdYFt7n5k1QqcP33yL6G3ZHV5dgSTofGmaoYV7naBgWgFGuovyCSw3ddBhf",
  "key9": "2gzgWjXjiZSx7TQYmnHhLRKaBKm678nWEjdiaTNc1HZsfJYdCDmSVyJNDnvF5LdA43dNLjVkcZJEbfBY6Kb38V1o",
  "key10": "2ohQchXHvpNzKpwnvQTjBK8c9iPbn5jBeXtA5Cnr7osBbYEZK4mZpQyb9YR3JES89rMSX9QQYgpVfKnY9HZzPoWG",
  "key11": "3w5sVZaSyQEzwarqdH5rHu8QwNg2jBepeg3JEY35pCoyF4D7rp1ekMsVPBZbU3ggKYVS8SCG61u85DwcEbvNiPmp",
  "key12": "56fugJE7PAgYrdVgpcoBodw8aaDqiwrspQJurCQ3mnQfwC7VNCKtk1giJ8Gxsxe8HxMqRYqCLyFVo4jtSHZksx9g",
  "key13": "4zXgdyH9UJQ5ysizUJbTBuuVE4BHFf7dG6dC2ESen6oQ7d1bZfXd4sgQ4jeMQQG4NPDm3rCnmiBgvwXsa7YjujVt",
  "key14": "5pBCHC2AFKVBckP9K7ZCWv2YQTDtrU3J74AxhgZtnKzdu2C4cSmctxRndWkqSjRbNEkVpuCGTt1w4QbjyP6bk6FH",
  "key15": "3HejpfUJrshg5S9Q2ox6CY8yw9JxWg3mYmrjhR8drSiVNdZ6HTatebBVcW5vErxgYZN9FdmE2vkNevfJ8P7oRfeg",
  "key16": "5bjwLTiepK2mWv8Zn99SgiCNGm38ogy51qRjkAhEGv2ZzSD6VDxTyJZ7rDCMNMs8U83KXYhVEzxJeVkHzBsDPoz2",
  "key17": "3Fj9Siew7Kxoed2xhc7J4cM7jwtFjnHNAaFrxT7SSRn7y8XqtYkEFew3aAkp6Z7YkTCGWaL1y2YTXoGj646Xvvfr",
  "key18": "4CtTioSyph1MjdK7BDUAQFe4ShTcaWvChDicemLRgLnZBG7CMyE8zw1QYoqfokUuw4KPxD672Wdp4FcAtq6kLvZr",
  "key19": "5XTUwpEbXYvVf5WggzH7VYGgb5Fj6kdbuooa9wvT2Tn5THCs1cRNapZhNbxrMhAfX3eiEGUMQxu3MMZo8Bc4D82w",
  "key20": "41DBXTGgRdyj8g4uBaNTHX6TJVtqhhUaavMmrQuUxJ46tAnSZrDQgqijNpXwY66HGuWSXvAXKVWiWSVT49fQevD",
  "key21": "3xEtN3zdGiw36b8VoX8JSHr4zBcwXuCxHp6yQNQhLw4GTx8kwTNVebfqHvTckyXh6ST1xvvJWxzZHBP6UvVHb4WA",
  "key22": "2NDCZKYa3eAWpo86iFzQDJvfopWkSumtFiQfxinEFbLjkQhyoS7yeBQKVDMEVikb6ZLPtCnzi1aYi1Wqx1pEn172",
  "key23": "2YRgvKWthodyjQhLCE5WMS5fWndGvSHFhS6NXrenUXJPhrt5VXXCPTnJxNsrNikcx5HdDN7ZsHDfxBm1okWUb3xV",
  "key24": "39ZE57v42a58f13kmwWE5Cqkz3kQzTMzus6RCV6Eu2B5GLKpfBbz16c6Pej7AQZDsqLVS9bGkhpv1MQkP34KcLag",
  "key25": "4NbC7fQrbfb8Td258ugiRwM24fykTND38TFyJTn1dDRHScnJsKyerTXy1pMJ9aV2V5PBsowLLYsajFphEQ1BJkNE",
  "key26": "5govvSmGXDB4YF69WSukqsaiipgJjmzMHEPVeNvE3QFPrDdHzT8ExPWRYiobavdDesD3jnahr88rzhBSoVAfRfhH",
  "key27": "5pYSKmWvt7WmaFASyzZHvDtGfraWcUa1td16esm9gRzXQmAjqacGW3ju3diBSKFqt45axVWHrNFoM1LQg2JPCYcT",
  "key28": "54v2Visuzvs38URyQVWy3ems5QYGnUV4nWXpbgFDisRuCJVPCuZNGuT4Uo6dhTVWGq8q7C5uRkcRunk4g5zQjfNT",
  "key29": "4B8LqeVtGBeYkAaRJmNifQqDNBgEFQwz8TwbYoc9qzqx5U6vvHBs2oPrzDWA3kpJQ3RFb5BV3ZZnrLDLopTKg7b3",
  "key30": "6188Y3rzQ984ZZT5GkAzddd1n3CtcXBNWT1GWWaYoDbhVbkZRePZUUe5J7JANkpGG7nYHgcwFwALQLNpRdX5Mzbm",
  "key31": "3NR3jdoD5wNzyytgUycPNn1udE5fUS4HBqeb7hzK4kcdnkyx6yTqbSBX2hw9CwPsZucFbfXTNtXmW9ayXwnHVnoB",
  "key32": "5i1q6Z9D535UwjB737phHdcbZvNAjDqGtHUnNKf1Pdfg2TPdWL2WPazCaFgrkWrjGmx47wk678iSncojLoZuNgSM"
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
