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
    "BUX8j7okrZayu2W7SPMVdCDHo2ATsKpM5VPtinoNJjKEWsgiw1wGeMwbydrLwXFHHTmUTDhX3vdRBZwUM9zbiUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DLtTJLHmaCKwGM1Mxfv7gU9stNLgGwD5dW6KUoBQQ6w2H3w7aswuBRewquYHzz9W8qapUjC8JwewEXQXZzcjBmQ",
  "key1": "3AdA9s6ej1MgN24CAvB7iUERMLUGJ4GtMpTjRXMm24R1CuCwwwX7sgD8Mkzzipi1LzyZjfEDnAAg4KnfryMbCUWk",
  "key2": "4WPWxAxEs23Cs1hAXF2vDYnbshCafr8jpGi2poC1koGVqirm5FtX1d21ChKdP4ZVUsh4uWMKgxqXTPBd2VcGPTHV",
  "key3": "rpe4VqKJrDoZTi2zs3rujUDaMD3YjHkxypeyJY8RtQG1EP54yDvFaSbSNUaYC3qz7U3xfjp2wKF4AwmFQzdgbk8",
  "key4": "5zcUtdALe2Y9g2WzJ3LKmSiwR8wvMVKZaSfa3TJTrcde28hWPi65hQkqEJT8o1GCenxqjfip37zbDVsWP1TFo9GN",
  "key5": "5c5AxaZrvrzH5VcC1fubYsYpBvNQS1gYtprDn8inE2jCvPq66NK3uMGa3NXWy5sS93F2Z6L4bkcncySnd5M5wmbR",
  "key6": "3FpgiUxHJcby8z562X9DFRDeQ2RJYUp3ri1F9msuxkM5cJAjXbUFr39w2xVQTapWntRMk54jYJQVp3V4Ehox8nHU",
  "key7": "259H1JoPQ7MHRYV7L4arFGj8dUQpsttmvejAf8w8b8ZkXbmPBKeNB6uUxt2khmDASz5nvJYr6nXcoagh5x79qXKJ",
  "key8": "4JCvKxczYSysnJu2A1bFjh5zQY3VeWquwJK98yrrPLDAJZoWEJNKHGusAC2KVzQg4wKLpZtjaZb5DZSfxNAZyJ4e",
  "key9": "3mFaU6fumFDke4NUDpyVGPskVaft4MPep4sQvdYnGLCGZGfnJSjQRcZoSCbpiHsv3GasGff87TE8z9vayxAMgQ3L",
  "key10": "2csofe1bnoiavRgw5MJn8GvavAu54sZHUcsuie1cVAUfzCjZ7QZMjeRQuWM4VrrRx2YKK7o8M86V3bQ65NEB73cS",
  "key11": "JjWWxr5nwCpDPzM7cwzne669k69JYCaWwBQCUvbZCqA84ZGs4ieCpBhNEHAjxWgtRuLv5S3TbTy7SWtm9LuNn9j",
  "key12": "5UFo4aDHwuxKM9R4GnfPA94Xv5TXfsZRfn85EUiXwQn7xnZbe3rSCR24tV8QyYe9R4DEhyFZ8KQbfymfBvzXX7b7",
  "key13": "4VCdGGcwMftSLZkaLKPnh6BijZwiqUCyiA7Vpz8rDSFseQPjUxQfybBiAcGkdFQio8YRfj7g8rh1nJ4VrDozy4RV",
  "key14": "2aW4q3HahsiuNrAgiSjYzFWUCosALi8n4ePX4Dxcqw9Evm2pQ7wGxGXFiqZCpQLEd4nngAVAWvdXHwUogDPdACQ4",
  "key15": "VqBbx5QL2d5G8GHbRoyBRyK98VKs6qH3pTqGY1Qd7Fzeg1jj9Uu6fQHaSEJyzKfQBPpLN7k1fT1o75ygmTZV95k",
  "key16": "3MamRwT5UvUTEELVFYx75hRvVASRRz5onna7Qvnz2BFJrhMDTYy6YVP5pF81ZyDX25TFq5JxeEVc9bJoXtzYGUWX",
  "key17": "4y64NVUtLAYTPHgVTZKB1xBe3DnoQenQDL9Hurnbd5wtdE5ex8ftHNTC7JTscgH4GQ2fRBc9Rk2WfaAaGDSvLyFG",
  "key18": "8TdGbCe8HFjAvx7pSWnMLNncBPJCGm66TFoFCW4Z4UL2g1mEQuYnw36Y9PUpoDZRyejcCDRXcQoP1pdaXvdt3iD",
  "key19": "5YZ8gLfnz73zyZ5dWdqQYsvs4xkffaV5K3kSNjg4xL1wNoXuDytXSe6HRKs9tNHPwkD89MeFaNam1yEdWsoSiWSY",
  "key20": "23RKv96hA4254gxHQM9juAHFP2edxxSnnQuSszfmeRaoasgGmLKWdHRNyYoHuwQ5oeSbCtPvBgAwzD8K2BDY8KuS",
  "key21": "21fcQX9UqNVfjHg84zr5P1A9KzNmmrvdHXKdejK92AhocKaEgcrfJmDHaV6NigZJDYJqUBoRMSqAjYZJdAH8BMf1",
  "key22": "2eHTWSdF8vNuZfSq8BLbrKTR5DZ8MMj9vCrBURhucCtPCzJKgVbtevfj72TLDPaw2pP3B3cqCGRSNtD7PTqQimoS",
  "key23": "5RqNH3ExNwnrVA8Nwaa2LB7xdfab3YJppsx3fuFYiTPtdS68b2gBKcfCFBChp8dKNiJxRnAXE9B3Vi668iRj2SVd",
  "key24": "TJB2tosBydXDWTrrfPshDBwNJKkxvqngJoNn8UET77ot5RLMfG7Gjsdxt5Wwi8DxSKA3jAMX6WnuJSjzycJSCqc",
  "key25": "2dnV6CfzPXjmrYtZM78h25q49bUSVTcwu6YY4RZx6DTHLdGh785JBNnqDmdqshRcUZRmeXEJKHG9v2ikXv8Rysna",
  "key26": "jxaCqbwsvV4GK8p81HGGfuBzyuhP5M9ZMQbZKXd2EdmtdkZbGYEzr6mL6tpxECQatLgQ9aX5CHwFEjHBqyX7PHR",
  "key27": "3eeMW8AVsJd8Uec9tLiqsf9H3es8BZx5ZR1VnAYwzAizevQVXA29b57meDPX5NnAdCjVLe7Ybm5t6HC4oej2o3W4",
  "key28": "VqbrzQnJVDwCm33sg9E5QZE4npQ6V4YBX4RcQ9rdQxrCyXUXb9z1kVys5iAHz5YAmq9dZM2CwnZKJyuRY11xy1S",
  "key29": "36vkbfxRqyvczXRV244ugtU5zHTTpjqWi8LaCPrwcRtkYejyZTSNwH9zsZw1sx5ZTwkVpHHkrK1udoqU4tutMP4Y",
  "key30": "H5hqyF7HvDkZn2vdX7TaoQjK1vK3LeSHgcdEZxg2cLtgJBKCF795GJEgp1kspEtXBtWFjTePhypVMtitjCzYoYL",
  "key31": "34MncdLycxAitj2vNoYXCGk4ePRK9Ngbma91spr1smvFwQumynYaZnQ3JV6PujjR9zLQeQAphmGiUn5gaMC5ZEhc",
  "key32": "2s9ZDUvpuu8JdfhwsBVPpC5G5FMBrD2Kf5ecuFnrgzVePDCFC3KnbK5qGPv8e1qzD5JQ2HyjWJcJj8Ub9RZWsZad",
  "key33": "3A7EPyBCguCL35Bv2kZ7YiiPtGta3e6GNEySSRZuoj1p9taGbYyDq9YqMVK5oyh5pSXwbnK3rGUXadnTymRXCn4W",
  "key34": "4WyXJqJnYSFNpNNd7askVgdr3Hhy1QjrgHb9RQpv4msocdLK8RaENgVS3PG5VAUJK1jv2ruCd7zkeNjJTrySdVYq",
  "key35": "47tguYVPswBh1pLnmi7GxEYXh5KQdmANNoWkVbiHbhbcSpYA3Pg2YuJviU3xedLjSNsPhdXcGHquTCvYFkmss51q"
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
