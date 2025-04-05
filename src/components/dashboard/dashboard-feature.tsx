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
    "5obkbWufbzqx1kxf13JVn7EBEPw1EKqDrfaX6M1jk9AyXsJFFCWoHUyiBpvkm31TWtmt5YpZw1joGLy2P7xSY6mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TZT7b3BTGjjX8hg334X1mx4BaRtupZkozZbi451tGjefWsG9nN9mcchWaPzvNc5saMDaonx6N9uJwp7jMWECuaC",
  "key1": "36cd3QtE4PPMStZzYJwDEm6uAm3bJ8JfLzenLHcaVBebLQYh1tZ5zmz7SVQ5rYZzWFmjyXNtkD9BL2CyLe5Y7k4d",
  "key2": "rxRjbCFsUMy7Nd1yZpwuSBALURRv1vtEQTWsycM1ogtsLT6EvrWKRiTuWjoKxAw7fAXAuE7DdEJDGXTuJVymFax",
  "key3": "3WcX7sbgsrD7wcPkjLoHhFwnvis1ssZ5RqJVnJGGgmyHfvxi9jjrXnBjfuo3DLRSvMiXngG9wwkTGU96ACxFCu7m",
  "key4": "28TBxrqiQ4DC2KVVeZ4ETCt49zTUgN6BZtJzrwa2oZr4C9uP2REU9Zqc4VDy7mLRLKYgwtPcyqURHRsxgokEaNGz",
  "key5": "2KPqUWnwSe3FgzARTsrgtZ3fTvwYeStSUoSU6SEtQ5WpE52SaCnKVsqU77Dj9V5i6TgUeFaaDi7E2dBxpgi4Tsx5",
  "key6": "2x5TgnjW24hGgzUBK92BMb8ep8fqBVdHuU8fkvAFeMrQPGfZWrFyYVfR53M53pSviEJ6QZjq8eRqVEn1SkwtrsEb",
  "key7": "fnHbCohjLg23MEQS594LECGxSqxchcnW8AyaUQcnEuDdw2Z2n4VxFCxEWnoDGEeqxef6EZ6RqKYERo7sbjqrRPH",
  "key8": "3QzVPfvJDJSQqYGtDGksVr7rVTTqNL2Tv8Wi1t7XucgMfVighpFVbAUJyrJweGi7VwFAYzbXu2KEUhniCEcMnyzd",
  "key9": "3xXH8QFWfBNtruyeCrw1KxwXMEhnWY6HNBu1RrkUdYbuRvjnZfKHQatrx3PKaz6HuFgFXSKd8md2j9qCKkTT4KqN",
  "key10": "2poaGTAsTdAJRM8rQKkkUjsf5YRMeNRgoTVeHj3wqBexvsdvJWKcnyLYQzFdp1MGtmAKgj7bmfKq9XNJiJex1xZh",
  "key11": "35HJ51BbaLaizhcV7WXQjnHxrNVQox9kbDtZABXeyqS4nTZNBE23Ff7BwHinHjSGxurUSTAjH11dQrptuD1qP83m",
  "key12": "4UMrEHptTDav5p7PWwvK5Cjvz87xsQzL1MpFFz5rWabkFupKRLJvQhb5xfRHja9njGV5SJmf2EAYSSZ4jhgocWoi",
  "key13": "5AqKWTKtgV51ihg54zxV5HRGEVKmKSvLxG2xNVn3hHqEC2XYwCCNAnqdjoo8HGPVWSXM8j3rc1uV9gqvDp5Wfq8B",
  "key14": "3A8z89LRvoyeNuR7P4cGAGbhn77R5SvbpKuiDSBZYGySmki9j9k3e6qiXgM5kjuiYoDGUCmGkvtB5KRq1gCyrDb1",
  "key15": "27MQtxxUCD6MjeniGe6wg4RYgDrZc8UMBR5fTta5Gk4kexbsucfgPC61x2PpdDSLHBQSMhmGe3Xrb9ud3HncwsdU",
  "key16": "3c4eaJAtBMAhTc1ChYdjkFqHrcG2nhwYjXY4fopXzT45RvD73ypqnHPLB13rUSVonFGTtVMCkoqoEtbxZLVjVEvU",
  "key17": "nRr2xpyf4zRiZVSGpaUU6XtPu8GnGKjheat1srsBRM6bHeHRVVtNBiwSYi3qEdWpPR643uJCYWuQDajwdEHRnfk",
  "key18": "4R2mdkSqGGiSgpW9x49XXsjLFe4nsLxBhrpWWg5MhDBaWw7YW8nuD5Y8dsyPRDKSeZRVQghdzeK8ioPC3k3ym3h6",
  "key19": "2gzu88BDgrSNjqSvtg4sgMNWwJxE8Jj4w26QoUu6qFhXRQV4bhjGkru4fiif5P23d6qFRuhcJJxFijaXVqKaE7vf",
  "key20": "5wMhdhgTB6cPhx3fAQsJcU8mDKUbvSHcVjKkUSruvEJvByTYNbrKZ4XJdzjSbPo2APU2YJmLCoou36EPE5HG4Twx",
  "key21": "4qsG1qrHVAq61nLUD1GNCBPfikPjJzP1dQK9BFw5JFBoiitLbrCieDkS2jXnmZoKihNQQpDXaqVwi1QY6eaKkiEm",
  "key22": "rV93YBZpkp9riMNSDYNtivuhU9PK1yCQGx5ujp2FLo2iySfafguPBG1A4PQEmfvwb6kWL3buBNVgEaeo4D2FwVG",
  "key23": "2gbiwQXtvnv8UVZuLX5bAxRpuXkmMHRjtHGbX4xsBdqfYtL8jAbQRdi54MUyXvFPz74GzdEg1EooSPgDBRwRFcu4",
  "key24": "3sUPMwHwWTdh5zoAXUqvfRTk2yj5hMKZvikvUAnkVREAjFn5DBN6cqfgPCCwHdAMR8DabUNwVBUeThneEbiYnGsF",
  "key25": "4S5DRYoYHeagw28aiNjxQdtFuY9d2D8NKvy5T81gRPHYCFpdNXv73E7tyeZCLPcrKDwYHs7QhCX9jyeBox6bXiPy",
  "key26": "61K7BCc6ft36PurenVStGzUdSURNDpmgAxANUtYTMUi9G6tXeE1SrrhYwmJQHzM4id1uDUXmCEkdDmbiGdrZpBjw",
  "key27": "4ax1kaakCqbHuWbPY6gtQBLzB3vKZk8qrMwqH8FxDNXn5V4d8ZFQhBtsf9odsWHpAEskD6w4SdXC1843vkARCP7K",
  "key28": "MV7gtgxcPvA4ZuMvXrAbykhxun51dWvBBy2uVjXMvjzMAShAgU3LnpwK74RbWvzyPwWd7qDxdmmx7ggA9g5LJa2",
  "key29": "3BxeDcVNbuFZUAcskrDHcuDs3ypCGmQxvwTsGBkwxtoMiLRT8MnwJ5zC2umogtTJf5Fyt7vCWouUY3EMiHErYxVp",
  "key30": "4T9bjDusMq5YAmPmQWaAu78bV5gDgUNJtqKUWAiJLgJJ3Jg6NHCdNTm2x4RgtuBAHGu5jzPneFKgn74P6MRGwFpp",
  "key31": "3QWrv57e5a1anR18XoQ8a6QwdKQMGqaafBkkKV6dK1mjFmwNRvTJt1rrJYwcjvwkcRpsM9uG5H34qSySontAFNfM",
  "key32": "34z2LKX2winr8QKK5RQRvzNq7KCtmM68xYXDisTWrf4NRzcZ1b9Y5MPgXeTDVck9GdnkcRuE8KUV9rZscFCWVkJz",
  "key33": "P6MzEcMKaKLS7symaR1QGNr8U7uVpJJiUrjghk6UmYDu7MrNFTC8rWGJEp5BvLt8BDnNCUMn8SJmS3XG556L1EC",
  "key34": "3iretPgydHLXA3pK9WHJaCvkgfuA9MZevKFn9Xqypia1J5XVtSaEUovwn9VXhj3TiN1diz1XTeQuqBm7NUs683K4",
  "key35": "2Ug2wg2qcezxGfxj9y2v4Yoao1WzNXJAave1JhSPkYPcvm6QAUycDxzGZahRC3AX18H3LFhHGzYR7R3mDonfNxRM",
  "key36": "4uwvnSPdwoLsTP32njwYjiCAygUpryBy7w9rNh8nWfFuuCtSRufTjoYM6w3ReYTCy6xsRZHvaXQojZZKYZMNpDTt",
  "key37": "kcT2P3khZ6Jp3oHC5XHRfsGEvNwNZss4FVcEcXUqvwhmEzdYtSCyQ6cZfHgU98U9DgAksR2jr6B3XgiVQpaAXoi",
  "key38": "3N3aP85Y3BUCz8v6XJecxpgxpb4Emr8vtKkcv8AgBDkwB3DCg11fWB4VLfAZmMf5gtbJndoqXQ4HcaB5zf9N6z9A",
  "key39": "2AsA5ubHBRGDoiwn37EWtczi8N2aSKksPSZ11AJFJjhFBtaWSk98U2yve6momRt75DFW49Bne7sW9qvEEMhWMwGC"
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
