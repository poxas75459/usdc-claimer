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
    "2UpDBQB6vNand1n8kUQqNzKrhqdXQea6Qyrc5VNo5CAj3K6wE8zLYMXK2FTzhmmiAnZTFKhjLbK8mD2iZPBVYG8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQTNwUn2T8CA4EA3GJvRDzYke93Qd2X31QsrdFSUMXAZaufMsrqr1Rf8b7C5FPgMqmiSvgK5YPATjtbv7aXEeRc",
  "key1": "5RhBsNNwkf8YzV69Xqm7Kd56fwF469A23jHrgwPCBbfKJ2ERQuHjrnWK4dZYXZZ3K4ZS8NRDbkcpV1TWmW7jHdYk",
  "key2": "4oXgv7HPaGYLcBusUrizibQu49WyXY4NtQ8v4CjjogGafFNuH1LPURLPexZmwzJuiSE7576aMaYH5jpvH5QHQkiX",
  "key3": "ZQgynVqn3qYCMvt2a1gbtRkQ2KH3HaVDbi6WKnNFRq48Bxtzd49gvkzz9a74bEQYD6Q8RR4V7wQw8aoaqcfWhZC",
  "key4": "2FLcqgoZPAT5gSYRafEiSyYGdx7FwhEYKqNV6iUkjJfYFvKY2TAdB1ptsaoCxqm4cJYreGqQwK7ef4WHimnD1VKA",
  "key5": "5edd3NheK6Bpjf6UJ4RkqAQzejZHP2oCQzscH126LpsR2XVfC9dPt5mrDB9uGjumf7AEpo1jP8PcosgHaMHtZGpM",
  "key6": "64EJoQ4ipg8wh4fSYLu8BQjrFCR1VXqpvStgZ7Hj5MkkN2utyaUHnBCk3ZCZTCYb1jAYQyi1giHwqBDKX69JkoZJ",
  "key7": "xpcu8cibYQHm1yh91UCZUz8ugVQCxPshcxL3euTRU8swzDTUMA8ycmXjWUbmrh89rrs47MDostbvawQyYZpBkLz",
  "key8": "vo7tyjXrYeLRiAHmudNzvc2fP2RZ2zVh1B19wmeukjWrxGgVYv1Vpkk3SdhQXCWxJEdonXinjbTQ6MVQmbmKpYv",
  "key9": "3qZ55s5aAdNMtqwc7muurfgLuB3wmc1fUzJAtg9nmZycm4gUDkGRHxxJ9DLQB6Lg7iHC8YFxHMNJ5N3ALywHCJdV",
  "key10": "4sR3G78VEPPPsJxQ4pM9TkJ6FX3HshpoUkSpduXjT3oPf4HcmaYxTYtrN72ewmiYxid3j1NmFATExyiw93Dj9XVX",
  "key11": "2NXAz3uutdE9DDdfUjpBWNhrtEG4M7THur7ZoLVh9AD38MEz2oewAZ8ernp1zKohJyXenMSJ1nxmrHPYAA2Bk5QU",
  "key12": "7iNef6o387yt9CLzWwqzYc55yRKEampydC3BgDrf9u9RKgN1J5BDpuU29RiUTrQD5mCRj6eMqypYYjXGW1gArLL",
  "key13": "5GQsWvrXXNMbXtQKSV2WSa8wdJ5W47ZzW5oLXh31D8rUvEL25Y1C69gckEZM8XmBX5GPkmxuu4uvkFwyuuEmmtyw",
  "key14": "3ytkjiTYuQFatHbqy2HXyMXiNVmjozCKkwJVN88ZkdHYmFLFXG5m9yxTP7SWVvGhUvMkRceCbJZXD5VN6LyjCyvu",
  "key15": "34zuEduhfdnmmbiSZpugNLtyrQWmzbqKTbhdz2heZURTWwpkmoM3aZHZsobgLMbfS9FV3YRH7Ut41bA11vPts22A",
  "key16": "aQDnLj5gMxM2BG3dYHKZWMfveqsLdbVqmQWPCTdwU458x7ij7kpwRmG96FeCYnoXpHEj19PaM2oSHL5WHajTAkt",
  "key17": "YZb7KHsM9GUCT3H2skQybqbcqCjhAx532zTbJbti2sKhSBZ3896Ac99wzjmGCgbykiZGxdKaXBbCShjBEow7MUB",
  "key18": "2wpqJXsRtZb7Lb9TcdbAdGGhSVzwi7G9NkkCF9ZkhyD7f2EUCn6cEB5dTJcFxetkcXa8f6VyiZRJWgdPS2CDQhQN",
  "key19": "29PrN7GkzFqXjEwTMfxUyCq8RmPfVcoN344YM6kJG41dZi3JavEY8FUBvNgRpMyY5jZaCbuGMcvArkMoAYCerFqS",
  "key20": "52qtUCDFEYhNoYfVT8BSVr1VdVuxiMirDqdovDpC8PJ6SUZCxS4oZCjCaFtCcavWZ5WBCR7RPVvJRjESddhvB5LA",
  "key21": "33vUKTMcHtvsVbhxno9NpjTd2JFozSQwtxMmFbq56k6gqKZhP6n8VywqWKLEYdBUXrQcB9ddtdW6hjty73dVwbi5",
  "key22": "24UWiZjE35CKx2LWtHCupNDEP6yJhpUDeUqzkB69AcvfpNr9dhpabfU1iEHQukDwE5k8R87janHd3YmkpSniT7nZ",
  "key23": "5M2vAg2UbXVwbpcoACzUy3twdK5BNx27totB1ctuttp3Vd6FDsdyVU5rRGVXXeaH5zJ3d1zkArsEjyJsJZx8Wyr9",
  "key24": "43Lkj3Tw4RPDwLZDSmgR8KArhRo2tBTaofbVKp5apLs3x5xxfhd9XAYYGBToz4YsF6CcH4KGpVFSAzxqncKcsNXf",
  "key25": "eQx42EghWrbDqgZ54xJpD9AX4dTJEMRNuoT6Adf5QMAMQ4ycqyoyuxcneKHfh2BoWLKvA4G7JkQvNR3L8BwoMp3",
  "key26": "EaK4MBZCP7ztexsHYnpeRyAeouZmWfnhBLFvHMxJC93dUhUq5aA6ghmH6MMTmLkHa4DshU4kdxDNqiXtUtNEZtT",
  "key27": "5StA8C6DXnJZLPYfQDkSfwtVXLie8p5Q51BY8EXUjmENSEmQQHnHjUc8zxZhNnd2koDy4jJ3inU6Z8hVLcpuhpJS",
  "key28": "2WfaEjZbG6wpFCDVoN1t5N3E8AqeZvX5rW8dJjE4cuUEc2rFbthyFWtXX7syrSm226m5tFSbtQzX6Faqf196F3Ps",
  "key29": "28mCi7C5fnRkg2WX5kfqw8AtkgkbKoQAN1pWnTXcnNPjVGGd9RB8qbWCCt8vPTnTZTH4LTZycqwonSWgnrTHT8J8",
  "key30": "22Yp6H7gCCAGzSBpN53i8ygB6o1P5QLp181u2uwhN8pPwVQ64VYGfnvxW1s8o2kcDKLXWu7daeYcUtFsa6ksKBDZ",
  "key31": "3gGhNPsn3yMPAMy82K9gUdeAs5eKa1tGfYbdtA9HevRpASVJAYP8zXP3yFAeedg8ngzty95Xb2jMD3gRHxD1txmS",
  "key32": "44Y2hoJqdqkfSawegAPcatETYK8vvUMHsuo4mYP4p3dz4URidxutB7RN4f1TVR2VUjXVfMnvDmK6HggH6m6Up11S",
  "key33": "3oP9QZCq5y6viUbam1Bhveo8KeTaH48c4U1UaciYvEyTaWK5gGg5FNb3HMT3CPDzdcLReicXncscNCq6JMTt7ifh",
  "key34": "5HVWEaNduV5EAiLsw5Nraud6CwX9vigyvddsDD6nRbQirrSo48bzAVGXDQNmyH5QjTVgvkrS47XqQvEej9iapA52",
  "key35": "5LiUnR6VTrwD4AhHLpW7cxxHzCt86FPEC54zERAigZs3sng4kaTKCU3kAptVSFcTCKFP5df3U5KSs55W78TvFAgm",
  "key36": "Y5Yjh3RaAMzc4VDD5hNcmxHFXsZsUxfsSvXnpu5rMN7F5wtg7qXnKezYWPSX15Ju4w3H5konkhNwyUj4SM9CfrZ",
  "key37": "3CMviU7FwVEWqj9HnHJ3w6E7Eov9P9mfGoeB59YCw7MssNyf4tu8vQCRe4UU9iX1XnbfzusBPV3fwoj4iaaEMSMv",
  "key38": "5SHECH9E2a2psRNWrLjCzPiFrtHAx7tY9VD4oY9HHvpXT4eWk97n1U3NKJ9B1EdYCE1Tq9zSATLNxj98FRVhbD2j",
  "key39": "2yxG2F7JwDTigqK7sfRdDRksGLVN2CNGKV5Z2xwAefgVB4ybZTYFii2szmPgFWyw3KzgzsQ2rmyE91qiqMPBnwN8",
  "key40": "3qSjXUe5Fq4QUZqNzAcTmjXMpNj1dDiSivtDDhTN9C9c86kA7EsXcxzjtM4PbHs6QvPjvnB7FPcC3Dtxhci85kZv",
  "key41": "5esTfMN9XrNB882MLkv8NWmgcYHLgHKTv6fuw759VQrSBqnMRvf4MpoPbusgJk7ZYeT85kZ8ZGR1HE7uHvRCK4fT",
  "key42": "2eCjFHe2ijthYNZ4kPdKyDTfYLQdKiaxFF53Yoi2ZtBQeDwEme8TYU2FTdc1c2FR1enh19JHfWErdCEvrYof9xpj",
  "key43": "67PZvD6dsJQbwQPuuBB7W8J1fGb9Hq5aUTLjbQMe71dSBkiSqsrrfnTmP2J4JxUJUqnMR5jFS6xk9etXtZAkARDy",
  "key44": "48KZvTgZ4fbd1cvtGBs3RXH15WXsjmbbKMCo5mRB2ktYshifq4aorBfiVxMNaNE2EhEbggRhN1MGjcLoQsqF2ybY",
  "key45": "3TR3pMmmhs5NVZUmUmypNmwqmnJXWTDag1b8ZyXevHbZAyxPgvSkcBhhZENiaB9aySLZhAunDVLok8TAdSxAP7s1",
  "key46": "2TTYqoagja742XMfw7zNwF3UqLvJ8ycjPsw5HBLXhMAcQftU9RRdJmb645vpE2wJCow1P85vwXSpCkcaMDxbNjgH"
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
