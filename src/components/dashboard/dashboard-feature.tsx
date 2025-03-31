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
    "4baYYprScZoj5NJtJbG5yWLThJpnu5YYuzg236vyokfiDXYE4rGdd5nhdMTtESTSBXwLDq9rf4fccfAT9fsoRF4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HVzfASp4qenCfi2kGhVfLsXkTgzduhBf2zo58MQUntfG7aFpvWFePTTnsfzNNBqbAKXn5XP51mPcMgggs3cYjw",
  "key1": "3HWEEdgckvG22LoyYg99156Tt4btHfs6soLmsivKwUE2cp6xMbwg8YaQN49oNfEeAk8VCF1YtCX6BREvbVEJ45SR",
  "key2": "4XoAQKBhkrhP9UDx9iASurHbs8kTk4Q8XtMaUupjWcPqZ6N6SyacBfzBckygSd3HLiPFkFYFw3iw9u7nCaG2SGuC",
  "key3": "4nynW1yd3ZN8XkY17ZdrSSGNCzgjfJfKzawGymoZP2YfiW3sRzrcdeERK1LM5ffrXVTiuy5gu5TW2ZZKpG5mLoL8",
  "key4": "4HKWbk19X4TAJECaYesAdoz9h5q6aDWr7NUkRqwCMW1L3xoCBh4Pd28WfTRzVTX76VtGdFyQcTA44vP1yJScpWsj",
  "key5": "yFWsg4XJF4HyQMsEvVxN3wnM14fPvNLEmo739sePoZTEh1LrYdHT2XP8x4Xe6RZJkLZs5Cx8sBL6uZLg6UANDJa",
  "key6": "66aq5utbppszLZGBYxrd5818hnnnVsN8ZDaQ6fwXdFAroBrUEkwtFTAJrT5HGHA1K4MxxMoMkqTpmP2evjzeqwNJ",
  "key7": "59GTaW7D7jegTUm5r4YJLKnsAoK2o1SCKDJBMz2Kf9oWBKNzBMvQ2jE6uEzWaCg8ppuBeL5RnhMN7KjpBXYjMubV",
  "key8": "4PeGUxyQn5uMaPgVNPKaC2Jt71MAamnJdy9RUpU1UGZgFUpvTHFT4ZsqYtjkCebmuPsXMTZMLxQDM5stwKaxrRUu",
  "key9": "31YBUhae82ArffRcabdu2xh84YY7BYB82PL1vDbKvPn2WHBkDnD6bWpufU5k5oQjDpMehx1vLTPgwvFxECoCFTYJ",
  "key10": "4UptguKzBpBDS8BfXX9XVt2fek9Kp7Z5JB5PjwqEpepyMpUGBQza5XCX4eBw6JYz7nA6gjH3gPxq3nXjvjvPu361",
  "key11": "5kWmUrJHDnb4Yu87CsDfZZQmzq9CMXx4Te6W1szzhQqprNToD6zHCkpxotAUaubAT4vb2YYsLDU2x4EvVMJFF8oG",
  "key12": "5egymhZ6J2Xdqbp3owFECTPdCJQ3Vn3X1VdsKaBcxATkkK4MGfNXXT5Cojh3TvugUUJfnqSqnJPPE7Co4z2X1gv5",
  "key13": "5unzqbhnGsBn1MBGx8TG49ugzuR4Bh9j6g9dX6CHKevnaLnYQ2AqFucbgzxv3UtwnEcpx4BcbnHZgv7SXU8PU4dW",
  "key14": "3xovxhJDntfA4GEaHYiLwHkacFB9hGwtKacdTGJGuAZw74VnKfpoJ2JJCkoXfd18NSAEnvqAiujwrAjb6fra7xMH",
  "key15": "5oZYdtoorD1Zv5d3YVEcuHi86yoUernJAXyAi8w5kCcpkw3Qzd4fNZ1BhnHGm9hXjBupFMAF9s1kr6AaRvjp4Cdf",
  "key16": "4NZ25tjJ2vC94jsG5bJSBijKg9QZtbvtb7PenNJyorY5g8ag5C52tdEP1qhQ5FRrQXeey1qy2M6fToQ5M8fieZe9",
  "key17": "FvcjFzkAEgRMfnPcjWaP4CxJP1HHkCNNULjsgy69enNG4GDaegufgpc6wdQu17drdg88WsTTDp9QPLhpHvu6BSy",
  "key18": "5D7D6LEnZ1XfPv4Y8prjPPiZ6LtBcZh1ZfRc6e8Bg1hp6awpFEJc3WCRRL5N6tGVRHMSubnqfNMHfFQVXx7AAQ1g",
  "key19": "2dmDsctnKuhiyR2jAA6EJsiHe4L6XqQpRa2izsny6Tv2bXHdZWEgQafcwnAqBC6dspsmz5grL1VrdjGx8x6ba6M5",
  "key20": "4xqerwVKpnAHbUYBKcdBKvxVGzG9sUd1VL1qZdQqznr3QHEc37Ck2weYKWzEjNjUtirsMTrvAQwmk12EQLdpNzxL",
  "key21": "4KbZxUzeVFc2c5ySXDiYdPNTbk7oK4MvtYjxNGYfoFvzxD9MFxz5hKzMNyfy8diwW2u6LXar7qZqnmb2gH6yGXqu",
  "key22": "ubVkgojJj7ooMxuWUETBaSTzG9sSyZJJjP3bshaVefsbg7T2aRwKND8D2jDLKZmQ4p6sr4iErFS5WccoK8KFBMS",
  "key23": "5sNb9rBKxyZhcmA64G1ba6phPQb3Ps3uLwC2vTMH8h5PgMy2Sa7BpWE38Do2tVbF16erd388YwTH3mZ36Pk616vJ",
  "key24": "pgRhWjMcLcwaHiWEKa1iu3tt4yN1uwLTLG5qveCwTSGX3GanwnWN9cLqRJB7V9rqodWdsyd1kuzJKponH4GpJAW",
  "key25": "48B3tiTJq45NQjCar9bDSgoFTAQKPEh87keh9cnY4PaJ14ixoCoAbWQMijAPp2pwMg68mNWAkg9hmhAAJzw8TsNF",
  "key26": "4WUUtBpa8RDejJQu8jgBY7AMxes5cKEn8BFuHed6AHkmkB49LwrJAuN8K2rgSVnRJKExgoAG2XR3cVXrJbHDdvzf",
  "key27": "naTuvRTU4X2prQXKU1GWvChWbpXPKk6ZqYZ3HEhmnJtQAr2kqEtMX9orvbT5tqhEJiZonEjK14yyoKkw5yMHfQ4",
  "key28": "4mZLn8D68D7Smhz74op68marvbtEnyzVkubmGujiku8CJz44d5Mzh8GiCqxVtN9U93WHz79iYw4yjsx8U1zKAwvq",
  "key29": "2youX2H36rXJLBthwEFvfTZknsA7tLvdiSvTAmThHaCPt8EL7ntbrNrRoitSm6o7tJjRcXX3Udsd2KPdKtwDmCpW",
  "key30": "tKvP8C3uPkbxbtHN85d2s46bRZg1kEX8CA6k26Aigs1jxpVkp6B6Bsb14wHnk79FD4HxoKbypYfLWZhnuR2qeUm",
  "key31": "5vFQ8u4CSKTWWFBnNaQHL4MYGmsfsKyh5jTSucUC2w6vN4Pazor2nLgELdzfhwFJ4fmTTZR5xZ77S3f5ZsrVMfw8",
  "key32": "4FJ1G3EsFsnB8b1QU8MGik9jQNLwYXHeQByht3CiZYaeK1wqzZG6kMvEBq3XKcVyFSbGdza6UvCUxmGCGmonqLUj",
  "key33": "4h2WSxzYZo7caU1RyTrpjPn4Y7U7k1Ksm6okCMmPRmS55rebMjAy5YZXYNHZZ5zXAKnydCSVNB57rxMGx9Fhdkv7",
  "key34": "jLdbNhBYQ5SzSFniRV8LRpk5EhE3XJn7pVES1kjcuZwMvrB9V7hFEJxUshkjk6B9Ei1FMBsAGFDii9pcmNLMnT8",
  "key35": "5cjmbTHSXJYdoFbFRcVPwyK9VWo8ar5iFHKsiSxwFkdsjCtMKUmyFT9oqiZCAazqDZWJnepQuqHFCRxEHZqixHgP",
  "key36": "2vKeNAmMxLV7Xp43ggSgF2TWHGxJF57QR4bkujVQ7EUJzAZWKS6hkG2drv1AFapRBUqtdd4aTmT2f5vcktq2vZyV",
  "key37": "2C7uLybpji74KF5n66hcGYvt6xcji5Dbek1sAHqBmjQ7w7e7ZGi8trpceuMWKuvnA46m8HVTNtXfGRJvMPVBFEQu",
  "key38": "3WyBqSuvSVxJcsGYJsVQBBHkjmpTXUTQzbZiq8icpzLsySTGEYupHnnL3ZXWJdoHPCevihU4Wp1na4U8MDfusQdK",
  "key39": "3x4DKXBLWox7DLG3dGMsn2yVpLPVpUaB5UbyGVhnYhdCjrrxvds3i3of9NtSdBnjJBCZ7F8uGLP7b8smf66GwDVY",
  "key40": "zp7duebRojBQhjWVZECeh8JeKihpprbk1SEXyiaw39LQwLUr3oEic66mNLaVJzkS2rwZeqq6H1KXL6vY2PugumX",
  "key41": "4VgS5sdV7MM924DMsmE6KKHxxwJ7mkrr1pDvtFJEb4GHtujMwtCCg8cZpH9eXoE4F6mGuUnxWUjDvcgttJAH5uqx",
  "key42": "oF79bUc7HVLd9dV4oTfBrzHhytQMme3vepFCqiT2afAxS34sGFEz6FZ4RRssA2KJAkogpEjD2uJCabwWVHhrEU6",
  "key43": "5tNXpQMstCGoiy4gnSXC95wHaZwutG3SpVLFFWzge76cs7vqAG7WzuVTKaUrUYFgA1YQVBNmFjaNtoK5q12aKvi2"
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
