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
    "5Dhp65zYonwcUP6xAvsdSffUmpEkputFAbcaTNsksKCPx259tBfQ9wLJS8ked3szFgFHyqHCrJvuHDWbU5HxhTtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aCdE7Pk36DToaudXUQ12bfZjrcTKxoMWaTPFqQe3gv8RKWH5puaDW6jivWgt9MiR6KQzwELpYoEFETsmYsHfHG",
  "key1": "4uWww2qiB2wHkUpgVaDJwmRanrw8NPQNWhwdfByZP7eesz85s6byCzSiUV3Ru4Ei9RbPFLbyhV28BT76Wh8fUPv8",
  "key2": "4rrEmdepbeFkumW4YRZr4QjY2Ti5B2LbyVvA5Xcphffr4a2QcxEqszEKBRqZ923zPcEQcVtjYrhLEbzZj29cHNEd",
  "key3": "589uMsA4nj3LFRvD9dcEzeRTQdC6Hfzii67o5FxPYZzP53TrPNfTLGqU3PT8bXdBxwqYbAh689Q8byVAUneYe21p",
  "key4": "2PokEVgPYqHSkCsDPchNqJmHd7ieS8NPF4yXt4ixYqhw1qVSkP1Ys5fbykeUCyuc49Rwq844BN57m3P2i9qwZM4y",
  "key5": "2f9HPqNh6azPsfdNc1aMpVHoeW6RT5tjax9P8zuNKUdwsFhMeA6ZHjuU9b7wzbKXgjj3eqA1kMG5JqxWxsetWPGN",
  "key6": "33DKbNe9UM7sWNbbp5gLhCorWt2VzqA6zbcLK5bKjqWavyksZoysW4Fhbmn78aG8GaN3h2CLKjfDM1oWAfHnmTmM",
  "key7": "2SnFyCLuucZ3Va6o5o4E4oZVzFK4XiJdjCf1JbZ1aPHP3JYQXdgWUwS4pF54xnwr8m2BKutrR7fMcnFCa7WiYmP7",
  "key8": "5QrfGrFNaDXPVcfbNy87dpCB2KaEhRUDZgacN3hC9Zk6icRDbHgaK1ZPMGckH3xrMEutCTjMbhU2BTto9LmYxnG4",
  "key9": "51uWdA9JoxSRALPYHzYaLUo1LgyzbyXtBqChZHZ7W2HdFuQQ36rv2JK9aWnKK2HmBtfdR6sTKZarmo1fMvvoLo41",
  "key10": "5Q71vqPi1gYtZnA9tsRxMZtLSCbPszeEfcdxKiPMzmekyVmwds39DQxiAnXhGZFhQiD6NPJkhaJBw4VP9kY9nmWy",
  "key11": "3SHX3BrZVAVAUMgKtUS1RUG3ErRNUUAVe1KESoGCT4ybFJK7Lx4ivFoX3X5XYSDJpro3d9aZL2qH8M8Mnqoj78ck",
  "key12": "3KBL88giop5bDiW7KkaG7TzDxH1RvuLtEZtmhLf2B14GVazVBEfbZZPJp7kNESSWiA1LaL2pnqkJvPDR2u5hqxmP",
  "key13": "55m62Z1bKv1eYQLKLzKHu9Wxe45fXb2nFu3GDVhZhEWwNoZkkWRYaWS8QxzreNhxnHvkLmPvhjQ4fRZ3t9gheUZJ",
  "key14": "Cwj3HgofBvzxnwAQdP3KqZWEzppiF37oDcuR6mT6dsRn2xFW1Mcj8QoMLFHYamnJ5iieYW2XD6X33b27WEh3ne9",
  "key15": "RkhgTAK1PbnV1osK2Nc12hajAHunUDnWvb1zRnTMKqxvCa98JbYsnCywFcGJA7K2gackpmZD3Fp4Kaj8JHhHB87",
  "key16": "3AA9ZAGDfE9RDG2WLu7K3VtcaCtSrWwP5Jr9HsCoc5B4ZcPxJH7duX8LsW3R2gZax3JVd5HLzfL8soMteM6Tyqon",
  "key17": "v65x8q4J4aR8NjPBjSKw8WxjzNqVgwTnyoy932Jk8ShkNBcGH5w2Vy8vbo4pTAEi7iU6KACjCifH8K9QUp5JeHv",
  "key18": "vpVNmqWXyrpu2ZaWFWZ6FquNAHyNnqWTWTAAHrXvA5nYb5XNSZmYaJE7hwday1PuGfTEp25uULwP94EoczwNcR2",
  "key19": "5eFgfU9wABPSe5YUv9JaVxVCCDEd2zsVo6cGuPqZh6DEjiuQQJbEdsxpvmsY1akS5E4jdxE7N8ZVB2Y1uvxsKYs1",
  "key20": "4Fwh7FDeg7aKRdAaAcf5b8g2T6HAXotHT1HDvBsrVHu4s1FZYxBKEb9whoq3xLwyk1dozYmrs4fVWJgLm4N4SXgL",
  "key21": "y4zYPUr2momtJDGWAEJ16YZRWy2iVLg3QMmgSYUzWoLfqBk6qJCwFgtXPJHQebjYtRz6qHnbY4Kx2a5tzVYCUkT",
  "key22": "39WFdSserjEDpcj2s6dCNkkwD4zJLmxsoJD7CV1mYbTtuQ5pu8E3s3mW6HgCRAGDJPeopmmSweWT3gT64HxaQtug",
  "key23": "56XXCphScmVkv3etY6kja5Mo56MmAJNCy8zc5jdBcCi4K63eMvpetfyPFAxD4eimvfs3j5fKQmfq194d3m77H97F",
  "key24": "3qDFkya2dQuGnbznx1ZnxCTggPHMtaAn2VZx83LPzhQS1epcTGfEmRZcsiNd7xWZhe7u8si2LidTJfnTKkjMQthm",
  "key25": "4smjJXSZWLJRisx7wFMwGaNz9PLUWnDp97C3bWEW9Ua4hRTfT5sF1HBcMKw7q5KFYQ75t44x3jUWrd5B5qMfF6x4",
  "key26": "4qpmNL2WUTHfDgZHMjyLvGe7BtYJwsbpyf3NJ88wCinB49ictFtvvXfqdK8yoq7oTto3gW59nbv5E1bgQAuzWbfX",
  "key27": "4JcMeyx9pBGnZSMp2aSffHQo665Kn3isDowspncBFa7vZWB2KamBBmDVMNExniyGfmcE1QpnfMBe3rV6vxwGPaQR",
  "key28": "5hhAM6EZ3hiawRSFVdskLfGWadY3cBMJnrKLuGyzbg4GjkE4Z6vw7VYYipsCKWGft6PkxKEHv2xumHP8K7E7q6ph",
  "key29": "5qy4HmqRDEnnpmY7BFPVN8p1su9YwUT4U7vHJCroxzbQ1ZEjHUdoVpbDpbeCaRycD3JaqrK3Jnn5UUBekDmWYWQw",
  "key30": "5iCp5d9kvcL14XGH9wgHPwFwXvzwFm6xNjiGAfL3HrmFAi4eu1AHuLRZapMyfqAiPEi2QSH6ZQUuHRArxvLCoZGz",
  "key31": "3r4YmNeLZqXA2cArNeyWWkXXwNWAMuoijFSWnxxNqzs4mPNEbscX8if1JdKLE19ZRfabpDjtJyYkXcVj5XWpSKcN",
  "key32": "4Axj2BZoaAjp8okrrNM5YKKVZnTBggxU3ao7LS9josz1KKnjome1qoZ5o9npcFb1k2ERtvbg7Y7pdrLHKz3j3owQ",
  "key33": "4MH1AQbtt3VLcB4A8NJYuK4p9udF5ha1Cv7TkqfDJ8uHHuF1NU1wD3eRYrjPcSRoa8WvDjB5wD3nNzpMCibWwLg6",
  "key34": "5hXwU2dm6irTNiNTRedKAo9yPysPnMJCbzEwDnoX3cmiquKdVpVQpzpV8k2p2ZcqH772pFyNyiy3Cpt9wVdkVKtL",
  "key35": "88upFCXWy2cM1NUTc53xYQVbUfTMbeDN44KhKWAsGSsjSrcywkuevQhtHM4XxU8fcEYHr6x6fpHra28vvGZN8et",
  "key36": "2f6c9o1s6WYUQ2aJmz3zrz5qGx6VDc3mCrTMCb8JoXe7kLxx8mEfKMnP9zGiZjaDBzCcsSbupdhmcHgjP6xgjx5w",
  "key37": "DZXkbiyfRoJV4kPPrvqeGDXjxVYbXxbqvLV5RRBTFGkuwf5sPk7T9zoJrEmfJDNCt2BGt7iGtmCFSxzSZrCC25x",
  "key38": "38qTZrHBpkoizrrHrEsdGLUjYKojrfvUUDnVQPuxdbXMwnoBege5NrGxyrFkN5LzamHNxqCU8Sr6FrHr8kmttWGU",
  "key39": "2yarEXcMngt8dKcpNVL91AaHsDq5dWoMoMTGDAc1YRuUY7TbPaDf95JefhzpvM7FbLX84oN8LPuvX9zbdao3P7aB"
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
