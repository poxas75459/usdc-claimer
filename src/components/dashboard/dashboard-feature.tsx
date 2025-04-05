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
    "2DsZkkCWuiCx6e9Ua3AGB6kXmp3UoKQyrsPKmJQwwSANsFrD4LqZqFeAKCsvGe3iKxXxkyAcggywSpcb1J4Wh8T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TAshpdvhpzZ3BMqug97aDqrLdFUqwYWS4GEtDyFJ6NnU1TWWpyJUtj5JQ6CSdZ2CcwCeo7QwzSRnhbABxHnErSL",
  "key1": "4tbDdeHWsyQP4oW1UQDqYzAYYQbAfQnF4qRJs83x9NrzkP8xQiAiiz9F7he6LvMGM17hpEbbYfv93J5dRB1grf2z",
  "key2": "tUL6B3CmenwgBLDfcYSbohWnkMjYhDU8A5EWUEyGDN1CbrCiUcsWxmHdqmTxei755DkTE2GMosfHa3AWtNwDh8n",
  "key3": "4YMULPWbi3h1QgqGsBUdivSxmwBq6BaKChnaVRUd9VEj7VGHYCyvBsbSyWemNuyuXbsDQjaqfdqosab87WvgnroM",
  "key4": "2JJdaS554bHNEKKKkBVigvPyab58kNYuPt3QvRtb1YTgdV8xE3Jw5UqtzP8Z2X66Pi37xXDS5rWKqRhHRfRqjGqA",
  "key5": "x3MdtHKv5eJS4UrHLu4zQSGB79KFj9cTgC9gaz8cHm3AV1ARobo8A8Df1D2tHsRHsoHB3HwfPznjcST2TvuBZcN",
  "key6": "55T7B88SdjRBiHkFD5GjnqRSHiFpXXm3wF9CJDYf2zs3ZvFVbF3VExGiWkAdawC5byvpknUhCiDZaBDT1MNXEczk",
  "key7": "3QvZgcYbMmgXaAy9hwGJ5s9okqjTTioHU7HTPwyGNUFVvNBT59oAuYEbiMa8qshmhd6rSqhMWsgcYQXEYf5E6z8f",
  "key8": "2siwR9e8it7aa1PapppA9aE7M8bes1fYnY34uBMFK6McJJbr1u6bmcssZEwdFBj8ZbYywGknH8wqCWHWMifYZYgr",
  "key9": "1uh2PmU6WtDQahBTxBatrjVcRYrp79bVCLTawJQEZu3bjagVm1q7oE2722phM3yy5kj3hBr9WQDuWsDFppF3Utm",
  "key10": "5wWAx1AbkrMmqDjNu4mXKdrB5ZkniED56nJEZkmj2N3XhRvzE1gFTuK6S6HAMy6JFE92EbTotF6zHGravVkFQdPK",
  "key11": "63nq9Z3oPDzam5b3ESyMuszKjQ4hRdXG1cSnjhXRB7FREFrEeXSXVwM3sUsxZG6iTA8pYNRxshf3eEy5ZLukPNSM",
  "key12": "4My3fnkJ2v3Gd2hR5cwjaX6x7YZS7gQPAY1dVPhHMYdzZx4FFEMarouTAkoMeDr7Tv6H34GmH8AdFxu8uSeK9uac",
  "key13": "287fCwDhHEz5zTyk7VfW1kxZSc7QzNsP4hs3Z8s19cnGjDetLvySydLbw5ygzTVCpyVq9q5xKzsmZjHEoqjbJUTS",
  "key14": "47kTHzMyiKX3NmpCj62gvmCBQv4coZPH44KPQxajXv6gjKSK4eoz3fZkExt1E2RWwHPyJc8yQGmi19HFZWRBA31r",
  "key15": "3UCoNEnZQ8Tg7imwfzUCeQYomArceT89Ub28zWsPqEB4QAu6M5GzVSVgtiDwX79LuYXiNFX8147LmAHt6NCoPfai",
  "key16": "3gCTRWS5YZfi7Xtox9EcymG78Zi9oKmX88UXRu6EH5dMiFwDdfyyx6q6Jzu565UHeNxWbSgqMonH1tEyL6LrzZ9y",
  "key17": "5Rsyjsb7UfmMZ6MbZKXMprD2gG3pEihQg7MPf3TjD1WEdxTUsu4rZ76rq6Sp9gRHVgU8nGpwRBvadmAZP9Wcsybr",
  "key18": "mU9BqqhtDXP39sQn2eZVCqcSrCNCvrCosipQaE6vq6FdJegPfYC29mB2zTJcvmZ5E8CnYrqvTfpPijbnjzDfvhN",
  "key19": "3WmkHw632PnbextrTgfdDkB9Nzfyk7QskNf6aFLttV4EbdmfitaxiEcxwmEBbQQeZL9iF13Fb38cKS5eCRB2Zqre",
  "key20": "8ULMSQRjgJopbrMem6pPX6Y4Tkav33s3qzCSaGPskx6qdV2K62FFeaXywgdVkYULPUXCRE93UfUQ9bVZqJ7qkPG",
  "key21": "3WuUbHCmRP3EdL7EsJdKvcUETLn3bSUTJ3DEgrvF8qBmrQDUz3d1PkVSFhJzevNcD21Tuo39oTwr4aWvLFbfDH5A",
  "key22": "2t6rPDCQFRLT7vvmw5mZeyVqUZrfspBZFpd4LKR8mT9xwC5Ypo4ANBaJr42cqoakUbLTp98XdY8Ck65kBFHaVgy8",
  "key23": "4on3ypzg7XD87iqrJjEGvN4DYsziXCCvEtQuWxPutBUJX5v6DwCAnwzkogZayRnN4fg9Hq25DiYLGseVE6y77LKo",
  "key24": "4Tp5RhsM5k8MoSete6NLSELBuefhxtwRCLrxd2XGeScFcgtyUZ4h3Zt3T5m9wiw4h56wGDCuR9mFp8VfdTF5gvUe",
  "key25": "3sfgnjgwd26q1VP1QtKjajEUjrfXqejRz3wN9rNavKxh9NBfgW5vPM8YcChw1kyDPqDxdpaSQYTsoZ5AcWrPAGoA",
  "key26": "u1paxvYMvbTLkRZSXchLea6HeubDNJf9cVe4rivWxQnL6pGFgdosQJxkpQEtMR6ySwgrrnoxuA89tXEPXVCSUJ1",
  "key27": "3ui3MGq9jBJvuua8EXchca9BYMa4Pd98wzyVSdkrtPYMxjRLe6d57YAi4PY75xYjb8UwM9hUj9G3Q67U7DRvitYr",
  "key28": "6vyCCMQDV31gmqcGghX53vnaQAUSZj2vfkhmNGVB7knVt15xJzZZf29s2EFL59FV7Lyui8Un5ReSGnw4yuVhWdY",
  "key29": "2TAGhnrErWadTdF6ehMDkJj2V477WXkBNS3yJyXDryypABvUo4XoNkSQ9pcAiizHprCAkcuQs83skGNtCP11TgCn",
  "key30": "52gHhXD4EQfa2SMeEMMLE4PruxSrNjq4oB84W9w7QkQ7kqQdWByNzBZUvbbCfJUg3GHJdKWMsdE5nR3BsK5ihPG2",
  "key31": "3g7n5QQm2u8L1EpRAgohvf3kGqekMQgmj2dFXcRYe1CmqiZCAUEZDWwmXbxgpbHjv9tePLgF7RfW7mveHdnuVX8P",
  "key32": "52JvELSLqxn8zDUkmCSzjCz2jGBVkz1bXU9rzKipY5KqY6YtnC9GDJSkz6RHtCyuh8aizW6q1UY3FFRhafaUTQc7",
  "key33": "2YT5ivSjYzh9j8fLSVNSE7pScRqKLmCHVy1USn7YskxUY33yCweCWVEzpYqmQb9KS7ENFq1AB3DSEYHFAbjxbUtA",
  "key34": "2hEWxzyDCqnqoWLJnfdh83J6evV5P3U1F7cozSAUaaqDdYNc4nDC6LsStpvoEYxByLXYDrxqYxhkfEiyzk8ifYsB",
  "key35": "43SvaX9omi4HcLqQt6sWmr6M5e8o4dV4oUDWuzg9XSZSTWFq8SjoQR92tnUtEy3Y7m9wyhUr2hjtGY7SPuoZ9Vgd",
  "key36": "5Gc9LZ9gYpRpUuUQdHfuPukiK6XP8fcfuVzG31N633Bc39SJf34M9ahH3ZzHWAuvfhWnJetu1dFAvbqijdFQcheG",
  "key37": "2prQTxtVrJSgpLLWc5LZcT5udmVGDWdswj44ZuvDfZvfZhxFFevUX5iAvkywJTD5mKHHui6Cagw2BAWNTBa1RbMw",
  "key38": "5Qt7EHm9T2cTmrNCjZ4HvUoFEewqrLcpswKhW7BNzbyeVCu7crrn6NLr53L7ZuLYcuQub9XbvRZ9U6Fv3SmeLuCw"
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
