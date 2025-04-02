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
    "3a29Y7Kek1gAFTqsqhNSxUdbsG5GUgyjQDjvWkpp8wcDYWnMPwzqHW4mc7Ri7vTZCQeQ1GcZmrgVbxDnECYfNsqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CCQn9fRWJ2A6hATVhX6p6jKJnQohLje2sJnp4jkngiKExXKea3P5mTe2qwd6B1di1GaV84YS7V2xmSLmjtZxqjU",
  "key1": "4uT9SAiW2NyvF97f4wfHD6agVSJLTLeKRU83iAVNm9HXMcZ7S2iRHFc7eaJEUWcFnqtaRA7PeS2YMBXtgCtmK7Tu",
  "key2": "n6S3bX1X4b7qD4xqDddKQCVHNza92J3nHJ4LmX7FwSkXcuDT11EFeUc8j7GpV6uyQ6es4AopyWSqbp9mRUQr6gf",
  "key3": "4e3fh52kPj4J1CcYV46n16XJ4AyY9D12hcveJ5aRQcTL5RCCUFVovKe3dNp5UUPLfcNDQBqwSmJfXPMeopVu8S8F",
  "key4": "JXipPCHzKejuTjAt6w1464gbx3etmnTzNmbTvfJtS2AUtA1JfvHwMXzQAh4XUqqRMdwtr9WZb79vTiriHpGVkCY",
  "key5": "64ZicPaH9WdNppk8RT485X9NYgAcTwwyNQ4CSWVnzsyeoYfnPs6m6BAjHceGcuc8Fdt66BvAatREjD8bAnUuiq6Y",
  "key6": "4KzmGwDS7XVVxaeGvbayS5AzrdKgDmsvzngxxrZk5Bj1LDEZtEehFA4XHf5WeafPN5otyDGkU1opQ3eVm2fqXwP3",
  "key7": "5B2MQ7noi8Xjf71in2Fk7SKaRp6dvxSjynuoxx7SB2YzRX4qBmjsujD9yVJhnSTbPncxvSSXVPUDJ3Qgj7Cuvjky",
  "key8": "2gSYDFivD36zxGg2H1o6vkoW61DvQzx8vUA8o48gLM7kxobKce2BsmPC4rAbK9YQai7aFWSAP5q2HKSc2BfD9ppq",
  "key9": "4Yj3qcGovychBYsuYBep4LLzTbkoqz5jYcqPWebpnmi1aCZQXmLNsLgxp8VW5y4yQ5KqkgLhCShrHvpe6mLGp3jH",
  "key10": "3SDkCx3Q4oB2VPFR4jDaiuZQnLdDnyheNdhgaP7uwiHmT8gUBED1fywSJMfQVW7vY21hHwh5bTDB5mbVE7xFybR9",
  "key11": "USTtqDTkfSE5c2LH3jUgWv1AaNjgCjVoD5UsRzHinenonN29iiQTNea3NqkyCze7W1EAUe5vPMMRJSeJBDEkaRe",
  "key12": "64hgrrznwQVtNfUf3eUSJ41wVBGSVWN1qJ3VdeeyV6L2PFNd6QhTWQhpQgAHPjYmDCbvPLAVp6GZhAt91WhmztAE",
  "key13": "2f36tFK2ZawqpvuuENSZ33rTKNNrmC9Q46Jt9oTqUkGkvhGj2Y1KF1H3re8FqJVuV7djGkMeMesHuapdGcYoYq6y",
  "key14": "5NByCi91CEQeLYK7qeCXGs8W7HLUVi6x9tBx5Jnj9CxvEQeepKaTcZuCRJfMpbxt7J5RASNnkSxeeo3QUvbGACaW",
  "key15": "2XVbmA4riHYdoPs1w7UsgR2ZigVZ8bw3AYGdCC9FsSgeKXjvfznN3X9ih8xDTbd9uR9kf5bJiFATCBTBWY58K96y",
  "key16": "39uoWWBHB9DfUBGK9BXEuZguXpungCzvPYT1H5Kxp36Ne7bhELXeHZwMohpu5agcErrixvwhaJssb9ZU8V7mwiVG",
  "key17": "3fBZw2YGZNHXsTaL9nLGz3NGSNMdf68uMZ7XPAX3c84xEvz6T4fEMSXr7vZpkbub4M4B8ysmvmc4NZ6T3P9sVQtE",
  "key18": "2WoMLUhwA6xb3Rz9wjdperEPWZ9uFy3vdXfjn7onMh3U64kRsN3dVSDn5BfWpfXpGniakPUVJYv7zCqqGFngRHA1",
  "key19": "2RF8zMWzMpcQAG6NSERwzjM8MaQcMw96fADLU6GXim2vehrg6DjFje9nUtVYwWsncBLTguksXofSfaDNjJCvjhCa",
  "key20": "3FrPxADy3oA2Pyn77ZamFTJosKQAdZm4oVJGFczqwvkRtVPmgJtZv3fCiRc5AvQwqVERfXpFRwmmH35jBUV3kZ5b",
  "key21": "PWTe4uA11kuF8jtFq7MzV88RrRJjuXx1SQKxqJwdpGgcDTVcPpvLTHygHnioALvb9e37RqijmbxKpvhRtJRwRVE",
  "key22": "5Qs2kTiX6vkwMQiZy3Gqya3Ujg9GK39UJqGsA5yTCo14kDUMxUocYgBYXWGpdQ399JNuZ5QbrqcThkCXGSSth14w",
  "key23": "VKunj4C9HvbDX43bmATKYMNncQe1U2ph9dJsSLagnHkWkp1utTLMDBE5PymYms13SUYTjVQf3VsWBm7xy37yHkq",
  "key24": "4Gtwj7s56y3Ski8a7q8D87zYp95C9RP5gzDKiYCTHHbxgcYhTc2xqN6rf7tBgrmZjQ9k5nwLzRVQqBwM5oAZDVNx",
  "key25": "x4SpuV5xJNa6fsxJFh1GZFU7YE2EQVG9Ah3z6uX1znqLtEdV5X1i3p5fMcwWLH5vJjx1iK8ZDztgzVCuymwLpCd",
  "key26": "72LtYj3d7FpaGHsfYAXQsz3ERVQrR7xsKGKfgZA6pU1Rdn83S4FBLzYwwvnS6aiq4YqBrPSV9qyefHtSTNjdzXF",
  "key27": "GjBh9NZUp8LZ2ZHfk1ToC1wp1DHyBfAj5RPrxrPk5aHCnRMksD6RGBkxNEdnWy2jFKA6y5vsdpycWaeEBqiVNuN",
  "key28": "YyBTyYyahLvvYoKZ1srMH5FtGfX5mdSh7uLmhtomheu5p2fKNvvdsWsgtv4MdBiDiL2yYuQX3W9R9XKiTogq5Ew",
  "key29": "5374q1sQwWha2c3BGqRCXiP9X4AECLFhW6FQQEQ411i921bCRXGVL8u5eT7CyRsTdEcBtWyUigY8qQjaTmnWLtKc",
  "key30": "3AhwFWsSUnqeYpvdLx6NZTXQRWzGioKSfJLd4qj41kHh6grpBQya54vbq4DxVTGJdCG9RKtTLyvi1bVm3RHoMq89",
  "key31": "3X8rVeZ5pYbrtNTtMJ5dn7r4pwAVVBcRt7zFx88BPWTzXBpYfrCTrEy5BW9T8AS2hjUDZZGvvS4YGKyiajPJrEes",
  "key32": "2yQq6qbUBjYCRhFBaUi3gcYeYS7W2wNXXZtEUSQCoU2BXGHeu3vifeQrFMCuciFBjzgnW4PTYEozKUMQiokt7vyQ",
  "key33": "4GjLmsj36jLxXPqjCLWyC2CQps6v2s13W2uVWeQCvQVKPXB75AKetAaGnp6ECDQ92vQrtK3Pm3Uq9hZcRyZ76Rhr",
  "key34": "5MNmm9hCs8FvAzPCF9nMkwTUvddm499NYcyBXKskErE81zPsuLDaP1QXdRiaz3wp4rGe1rAf6PZLLRLFMmkY1oa6",
  "key35": "2fGjRLdkySLjn9umJyZ95U4GWGL5Hb8wwCy8aK9bePUMGvprpHKjXavyEhZjtLYhwAz1cQ9KG6g3qbcD3kpuRw8",
  "key36": "5wDsqASmCpvaRYdkhgsWYD2LVx3nXTG1XwNdZqjsyykpgmutBVg1JR8cCjx5m2PDHZdtu1Vru2YnwxUBLd7D4itY",
  "key37": "2jcA8TAjM1gr72fcwB4QsQkss3kZhhPWQ6PNVv8bW2Kho9t6AzqhWbCqTWuuhQ9D5QH3akxERvYrSLmcSNRryFU2",
  "key38": "3jXxrFYrgGpruY2kYwLKZqsjuiQSHpjXavm6P3WvH81tjSA1W5pBtXGwEsJpK4xRSazjrLCGi7Xswxz24a3AP4PT",
  "key39": "2oNfGPMjq7wWLZM7HwzBiPW2hRznSHfVghGP3b9Ut6BmcH8M3DK6Vo1tocoSvnYphXZurVzRqHw1sb6Nb8sbeeb8",
  "key40": "MQyZH5RBg3M229mfbMMuhDTvEDRJ6b8YbUwgXgNTcqe2dJ6zGwesSy4nMxSVodAP6QTCaG9EHRPZQMtk3VZKwWT",
  "key41": "3Suu9j5CwDT9HjuY9CEmqhbQrZ9t5kv2ebw1Y3M33Shnnn4C4c12KgZR8KgcDVw1j5mpfckj2HfzzVxem6y2zAxP"
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
