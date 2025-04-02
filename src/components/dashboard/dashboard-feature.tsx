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
    "VNZncuy4KLV7MkULEdc14tWvDoofRi2RnxzAVHC4RVJFgZbsP2UK7MamoGjamRarbsFwGNuRkCUSKeTDwLhN9mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHZQCetmQ39h89rjorbYmWw16DvuDb42Q4VAt6u17NcTXV4UuyemGhx47EbxJKoPqrYiSQh6j7GaBKpnLj7Yizj",
  "key1": "D1XuLLe64cy6srya4RGDRmj6EnjxLfyW89mc8GzRjT4qweYkNjDFsk25MTVzjznCmb8B4GSXaWXpT3MguoniW2J",
  "key2": "3kA3cD5CE8ojb8jss2NrtxdfDxCdefta7sMcsHCinWkpX6S1keiKGqwYtcZKZoCu9Boxp84bfjzxByhTCm13jLPc",
  "key3": "3HUNMBzAUmeJw6gzQ7gZecQbGnDP1rSXPRT2EkpBmRJRERrTewNEzHeeUn5pjftbwBi9S88QuQdtwi3kFQXsLLP8",
  "key4": "2aTQThXkkKGB86GgmY46LWdn4unHKekimLF6fBAtwFyD4LzNWmQYDXJnemRHPzdk8rGNLLDU6XbqMr6Zj8x6AHxZ",
  "key5": "4SzPZUrmbXNoBZCeDPaQxFRHQrv6MjTNULtAYbmHhrQWyCKPMzkQEgszjKBuBLjzqYbPyNS3BC75woD4oYfX82Ry",
  "key6": "mX4aqzTzWvDiELpuUAaCYf819TVVdThPZKsgaaGepruyWbhHjqGHZd85HrnP7b5RBHLRcVjXYw4iDLV5fXf6U61",
  "key7": "3hkJJW2q2dCBQSUWtwqVgj7MtpTES3rqsB3BCFCH6nZu4e2aA7cSYqfrvs8WaSXsTAfrpNpXLvmbDu87PD1Gsoeh",
  "key8": "2vrMcTqz2oXiNJBExyEteJbucbbAa8jgKNvDaZMNPSegkUnJ8UwFctbQshkpCzv2RyGjrNVo75ao9UjpGNpZHYsX",
  "key9": "JSkWgD7apuHx3hAveMFt6v3ND2mFcQbtpysnHFYJ8fCvEU7xUC1a48743Y6t59u11YQrKHVus3YUz7G5MUmm46E",
  "key10": "ZDy1tv5FR9wtGNi7Bz9LaarxbgF27NLEpoEvRgVpFnbCqxhPgK3TXBYeVxEJukMQYPWfqdr5BwBifTZd3hjephQ",
  "key11": "5Js7JQPG1h8C4ByAiuMPJ9hoW7t5y51XqJMxVcs9NWyV1Fo73ZgLrWeew5cyBP5LJkZRrzvvnvkQ4MABCWmpj7n7",
  "key12": "29SyjNcnyXTeTy8Etg3KqUPTue5w61xQSsNU5LuQaPUmcPXE9sCAzutgHozmYNMKiWBVN7yY1eun8GuhWhrbWB26",
  "key13": "5YhAjTKu35mK28wJgZkVXCn46TNuap5bqx9cTsF6twkjeoEiKSuzoXaPRwHmf5anwmmUmyCcaKNsabcefkic8TMF",
  "key14": "42gbqgauy6S7KX3VJE1YmXq4saBQoojMjZCWHuBRjySVcZbqJhVu5NYXvdqMJQGS5LrujxW3ZDzaWeUkjVBEjKyL",
  "key15": "4W4fzCsWEthpphLKdvw2aBc2p7xKbUxbwwAMA6chkP2tf8R8JkZxCA5ZDFAsnyGXLNDzZXSRFgLEGaNinLnqRx29",
  "key16": "4q4wJBeryb52smCaU1Bh138qMNepU6qPtCbFzP7wGSrXKW8F1y6Ks58HW9yHUWmWjKwWYPdsuHWCtCBfms9kU8MW",
  "key17": "5wkGTKK9oXNVijFaA5GauRmyigGs9cojx9buqMkvtPfBhEgiNkRc11eNRmLqPB7aSa62o8axzrngDjXQCX8nzU6k",
  "key18": "881W512PyoREn4X1qZ2pkJ2KXBJaYWcnNJcYTqywftYKzMAffxKPoqi1Nn6kbzdejZgJFM8PSVkPo7K4E2z5q84",
  "key19": "9RYkWxwYpXZYekz5CtMqNrdLw9XJjAJpYgdxwrSZg2s4PQ5sKbznWpjUHaq8GkWVzmP2ry95vCiU8FV3MACo3rs",
  "key20": "hyLUwfXUu9CxZN8PdMqYtnMNzX3HN3Tis3FxnHNgkB367B94RJ1Fa59qRs477RKthujz7znSQkDJaEDXKKJZEH3",
  "key21": "511fuJb42c7tbf57PnhrPi1bV5dhXp2UnNeoSdh6cchnRbVUKhhXs67HqR9Z1eEAWtLMrvmQVLwdKrdcR4bmF3ry",
  "key22": "4n5mnYu66DT8GDGns5Jurw2uzNwd8dar7RnN3yuyq1vEdiXarspsFJfqzhEBtFT1e5jfYJ1RycH66wcdpqAnKjjQ",
  "key23": "25aQW1szSmT9TuigcuEWzfVYEtrY4Axtb8ab1hVKVz6HgfxPdyyNRDij1UwcZZ9rMdanwgCRWMrFRHGqRRS9br4Y",
  "key24": "4fxuknigEahwjKGA18a7a4HDtDPU4sGqrruxvFhjSdBX7Tn7haBVVbs5bNoDSKHH51NVyM2RsoHCuHiU6YF9W4Q6",
  "key25": "5nDvRzpBvP1ctfUTdWuRccTsYDinXmW4WwbBDT41FatxjpP5HzsxVbsXqFY78uA3UisUAXoTusVf91rNDBwZ8j1R",
  "key26": "4pZSxzBxk4eurF4XimZDX2Yva2AQ3KguHQbvcngESFVjbnwu7J64df8LtiMbDySPWPP8oe4n86gLj9ywYZcoZ13E",
  "key27": "5N6K7d9kSnT9nYVCh8vPiYPdfzyRuW44MGk7fKrL7v9ws46mnGeY89paXUfPVdzrEJTvRPLGXEC8r98PyDsYaF8H",
  "key28": "2ZZC3o1mjwsNZDG9LuBzF3vXvU5cmmmZPNWX5tj7jrZHS8coHZ1xQNaPcbP8vSvUoVjhoN9T7swBujZvAv6Z74Mi",
  "key29": "3goU6waCr28gCKTFonfF3GEUFL1ezQuV1odZcNRHQnKM7c99JJRC4faWYyV25e36fVK4GDAuauLDM757C22YSSKH",
  "key30": "3SbqoyM7Mt2bE1djY9yLXqAo3QdabfKFiGSA3Jk7byRDkEhg2LyVVKqtsBKcmxMPtKtYGoPuQjs8eRG1krmmjK1i",
  "key31": "tP1Y9jFrXdczBCLvosoKukZHVNck5XPuQdAUEFcFXvTgZEz4GFipn1eLwJ9Kiv1wwFFeVy2JXqcoApnJNvdjsmH",
  "key32": "4SetxScshHJ8cs51tDXuyXKZz2yGWcifMXQ3wdPKm197BLdCjru436HCid4URPYmYzepMeDhpM6s2mfQ2wJFZ7ip",
  "key33": "Tr2TCgn4XURREfXpscKPCHvKjtPhQC7tUnkQJphASqT31VUVjFgov2cdxNWrxM24TBzXcnXsMVAFkchAiA1UpNp",
  "key34": "4KjmdREXPJdUgqmyXYkaLCsi7A2ZemWVNcEVV5ixVzyxJuNatpT7tWpWZuwf4nZZV8Ci5hz9GTeSpFCL35NRfvPu",
  "key35": "5Xy4miaJvW1JHdLkBu45HUVJGu2YkNiS8R8sd198orkjEFTNvyokB9zChTacUFNRF2UPvMpuKpRueRJ2zDftMGHS",
  "key36": "2EFCbNqU9ooJM8bzmhRMaz8jTD5dvTUMZLCddRp1cnPTP9LuY34FXTtZBmKHwmUNprn51ySBhCcXd8sNnKTJUT4A",
  "key37": "3jAwXxn62VYifUNr1Bi5Fi1ZnzRRfX9eymTaHiJr6RpP5AsUU3pqx6yiaTxkFNGMcR5gcUugTTfz9uywE1E58xxh",
  "key38": "4mfpBZ96taftVbzC1Pnq6FU8PkhCwscbp6o29t4op6jBqz51TTCdEzpZjcvAeRoixuDJTBm3kpqM5DB6hWQFJRWx",
  "key39": "4GAnef2oVtZ1urfodftQV7udZK3P9ZEQgCwXvy7YhKteS2exU1MeMCCZMTJxYVofJYx3mZorfChb2kGTdyYC7X2A",
  "key40": "4XR2mxsqWwQ7yXCo5uPJaEFmzrrb59NQQMbxdKAH2juHaaB8cQJEmmksqXPMArqsYi61FWn5m6iS3qbdEZbvCrHj",
  "key41": "3rYvQrfGxyG1SKY3Xt7e33oDo1chEJ5phKWuJPkKbPtVbvNznfiixYGzfWCSizS5fR7VHmw5xWiaLZvVh4J8iyry",
  "key42": "3XfK7nQhVxTrSkwWbg7U2LZJ9vieWmUXZf6FkVKtPFsTwF9HS5FHfGwGEaAKwNqqvVY5WUd4Aqj9ZvUtZHfBmg3p",
  "key43": "6AACHmCJoC5WEmsiKcVn2UHV4psvZp2bKm3B3TyQk6WAMTLDcHEpimou1tvpLmhpv1WfdbcTtWs5zVtwa3nx1RP",
  "key44": "8snkgKccK26sZpHRYSj6axeryq7FRU7iDeE2utPYUAKAZmUCfPmESmQmZJDQ92JYdxaWjNLY4R51RewfZT9xedR",
  "key45": "5w985k1iduz9iD3yZUB442F4UbGUYh1VaEDp6zcinxSaM6cpRu5eKUxJVNRgyscafoqdy39qAt4x2TDFJtCU4DX9",
  "key46": "3nomU8XGVK83D22gKsNSUZaH3E3vf5f9wNNfkduY5qNEKBS7pfSNGhU1QeHwXswYToitERMC9RKnatuKb6tR2SSQ",
  "key47": "5UcasWYVynsbFLRQPLFdb6ZL6HqWqJk1LVLHUopoAxT5VBt8QXJmQ8XCa76TjUfchNK47pVJ7Mjas4fxQV6TaaBT"
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
