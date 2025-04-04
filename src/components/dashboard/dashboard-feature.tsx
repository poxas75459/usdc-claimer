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
    "2bS8MrvHBUaQ6AzWbY2E12Bx9mYFoDsQR5obZ8R2emqSn7mua423EyQLpwS2qKoJkFJaPQ5kRhJX3pRR61foARK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M784GNnJrhMvpuDhjwsxsgPgKfr16sD2CkouvjdwqgJYgBXWMTeyrET4KKrwPHuT3Rc9uWQCPHPmZZ8FWCFTacS",
  "key1": "MbHBzAeBGabThmVBWZvQpDuAu4mNQPEQuWtfNPT7irAbj7dBsdj7ppVWzKnUvoLmwUKVW4ds6BrHtdu6qLJ2TgA",
  "key2": "3verJmeka3yA6aaSVUYEHhgLVrGfQ7sNYqbXzP1RMCiX5kbo57KuikSxMDFiLeJwqERt1Wp15Zc8ekj3m8Y1qnJj",
  "key3": "3sQwvjDuvtDBnrTH8oJHnEbDkZHAiEfgESpcHjcJPurqwJ9kUUBXEj4kFpQC75MASuePnmgyuoYVBNkaEJgmYJfF",
  "key4": "4GwaDAhKvBEuXUXZhL5t56q9r8e1PhxmZcPqKyEV2thyFBLhV9iB6hYXUEr2oTEyf4jk7X7PZz2UUHyceP4frmd5",
  "key5": "2m2E9W6jH18E446NDWVcnf6Bik8KcM1Jt7oSCuM3DNah53cfpEKsmm5ienkpQkaAY7aN9mErLUGfSqTm2KxJDnY5",
  "key6": "2XtyGGeBQ35bcmuyLoYUWXekWe5E8yxox6GeKDHuifrmGxRygaFojJJb6bvg9vSEJd2jj2u4ak5EkMwQCVnWX2HV",
  "key7": "4aEYQNEU7Cd8kHoovJzLYwqYSsJxkoHbFafdoH2nL8GDQtCVvvzC52L2meqvfNUqWSLfZ1Aq8FV9Da9B9RXePLU2",
  "key8": "4wMkVmPLNY2xLyHd11jytaXfxVZzhuWM25bQXZe39cLY3Kj4YR3STeU772UkWHRA7sSue5NHUnih2Db6etz9cUgy",
  "key9": "3rkmWxoYm1PWQ9mqH8uUazCfoWL9qew9pBLxqSfPtqnoqJyzL3d1ESsmg4L5mAWF1Gj6g9E6BSWRrUE7SX9Qa5NW",
  "key10": "3Ge7fHuU5deSgz1MBkeA83o1NamPHWimKU6g19MRyhFWKLMEz3EtYmc4tC1e2Xy3yR3mgURnnvting8sgVkkihgy",
  "key11": "2N41WR38VdYiuq6zMSYWnUNxF2Eco6ypfkFhNZEHmBXmZFzPEGzsNtiquLaS5GmmgSAWDnegopr3G6FRsPyzdhQS",
  "key12": "4RJyvYTre3x48cz6sE17F4sTMDNMB6vRRKdKvP2M3EPP3h9UVRG3dqLqZdk16Q49eBBqdWk6ALfCUzfjQg2H2abY",
  "key13": "49adwRC81jdbd61iD9D5BEfRTnKaUUNtucZEoYCGk7nWfn2zDXL11qF6JtfWhG6Doq6G6WXCUimZKYXr7SKzLdPk",
  "key14": "29PjyWpVcr7MFGHgRMMQZRJTGDxF7ScER2iRtwDF1PWGNpuDDJm6i5xLndw9WCtpM23RwvdcEpXieu1JUKKbsj7d",
  "key15": "3JbJXDmeSaFA4Kxk6sasD1wf65sTWqKPr8suVAUUkRHmcRYfuph1P396scaRD215GJxBpqNiSZvRoMWZhYxhiN8V",
  "key16": "kDWRFZ5Ve7qTL5L8aJnpCHCjZpxjiv2cBBqGsN2ReFWBUc8ZZ6xBsjhANqBeV3SArTjksu4hKLnsrxki8uA2E4k",
  "key17": "KBPd8KAxHy6mp8wxKbeenqJqRwoEqDjuAK2ESSibHmsnMbRApL7P8qPxxo8fuGXMqvj2w4F9cbo5FA7TZ1baD5W",
  "key18": "4EA8upsuuMphnYgrUteVu5echuYYT3dDCoxaCd89qJ5CuajF3msVxZMBXPGra8Z6tz4KKyrKU7LwRQDrt8j6LC2",
  "key19": "4Svb4KdEi3fJi9KyBbavyYGwGCaEMDET47Nw4Z7vh9grveCsz5SGVi3tkAtC9vvsvi86zYnZx3CuoFFEbqF88jui",
  "key20": "41e6GJw1weuhkG71btiUpduxK2aHZLEt7f5iV4MXuWq5aoAxrpHCtxy1CqdS5FtvJRohDsLxQd3rEbj9uQWstzvQ",
  "key21": "21gqpZxvnJTf9zDKN6EMf2NkWeedc4vaCbLndQ3GaDf89GLiWNEzzbYTWj5nd9iXScef5SR67Vei27g5vRqWcjqu",
  "key22": "5TDguF177jJtD9nLdV8vXBPATKNcv7ujnUuTzNS6PG61qzSVQSnr5jzkGbytiCVg41YVcnANAseR1uRzwcyoex4e",
  "key23": "55CTA98NardfubNXsaswFCMVJCbM6YDyQ3LzcgJVkgbWjCnb2JKvrdcvPy4ujiZHkEzpfEDzmeQdvDZRcweqeWun",
  "key24": "oK3aobfuchv6ZNRHxuB5mtbSSJczkvgwWoaRKXb792AN4ATxCZ7ZAHq9KqKyq12JprXDodSfRSV6eYViD7rc1QE",
  "key25": "4TykmoC7rYJZTzjgXJx8VsanEgwp79P4rBxk5Jg9a8gFTD23Kjwn7Q1KXUFJsXaf8eqssGD4Yh5zHcA3hX3XLDbb",
  "key26": "5N46VZhrWDqLAENJHAjAtvBhZcN51MQSZyciyDcU1rohLHchTqN8GRpyguWr1dmDjiA1fmTjeEGjjUqCZedgbVzb",
  "key27": "3Q6KQU8He267JnRbvtL642RbKcBzPFzsQBY9HwvfeoMdLTvD7hLomRH1ztWK6wTxT5W8jSivUXnYK43L4MugAMFK",
  "key28": "3jzHP3sUdiTh7EEwzCpiT5h65iHQAyqrNXcX7RvFLd3DRDNV9oBummG3VfT3a2r5J3w4hareyExPx55rzkGyKxwV",
  "key29": "5hcsbuGrMKFd7Srb77miKnZBYmEVhi5oEheabqqqQ45kHfuTow8Ap193AGo7aVpUq22z8WAwRXzbG4EanU4LRfid",
  "key30": "3hSSVd6n9mjgdnwwnQQfxZd3kFEdg5c9RQe2FLnmKLqjKL9DsYJbQpka5aoD5MbT5kqUaZuzsHVqFHUHLpWDBMG6",
  "key31": "3cSVPqtxoyHvWJ6B92BYa4rCuqcx1ByRpeSeYhVe2T1hWqirD75KfEUySUt6GbLb7wD2Wxrt1Dp15psJjLtr2rfA",
  "key32": "3SSipqgwMsKcX9u57gQbCFNB9MtfBh2seSrpYYnSuWvxbuPnb4RX7ASywt1HBptubKUM4j33U39kT5KhAgatih5f",
  "key33": "3XpPDRmMn6WEE9RSZkY22jHN6JsmKxtxRuvRhFmuvJKdUiEB9vSNkpUf3DSUPc9yv9hh2Un7ecCrJw8smhy8F51m",
  "key34": "5FBsHHSSe4wkLRqX6ShnshvvTfi1gRSkpg2qnn8uYJkQfvavQhjzeNoZ8uHxXLXEfZGeF4P61PKatNLnUW1YM9sR",
  "key35": "2JyYm9MdykUwmwpaUXmUmV3y8UAf4koKPAAY2FNoqMb3vSQtb7tkZTc1N9oS91BwX8maPfmJ525AJ66ckP3AyTpy",
  "key36": "236GHRVkKeH7mS2pFy36sUB1XyQNmeip4zm8B52UVLntfJrBSKpEvVx7a8uadJ7DGfQLCAPAJtzwSXBctA4C1uL1",
  "key37": "5phmTUL9aaeYG9DaaZf7xYiarpqt7srerinG1b7LycCrNvPeD7cwPy79jzKseHUvWF1Vgnu3heKvuqqDNZDTPoua"
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
