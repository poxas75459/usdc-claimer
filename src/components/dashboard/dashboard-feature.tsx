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
    "38JDoSMXai8kzyQkk88yFYEiFGKfESoHcy8QdbDgHWSQFwypWEnphwJy1TaBhYv5E2JxG4gU7nZxjWGsJNiidH7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81pnBsk2T27cWiJMTBE26kqqZjix11ugaVVizweYxCYzdNtiFXQVMgpZsMEq23HqVehd2xX9FiktTDPToQ77THt",
  "key1": "4UTaMou7hHemnEFFDiFB2Dt3VJQXfdjSfmB43VQ1bF5exeKHVgu4bwW32S3nHpZWqhU4xtRWMYjda2GH32uT9gPR",
  "key2": "5rwhqdzAfXqUx7YBz2QsfNRcWnBs6qTb65rDs5ntkJAZ9vKfweeuinMwJCYxUSzcYcTZRg46LncXroC3uhzXhoe5",
  "key3": "5pedc3J9d5M7kwcQEn73DMFmvxiWUUpKE8M67BgFYjsZCCT1yUU4BkYeyiY4Spr6Wvt2UA2pNB64LoRa5xbypJUC",
  "key4": "3d8XDRSmhEHq1yRXDpYgbfq7pPyui3DoDV4qcdNJzTUCM4EN6p7138PXGiS8PH6HiL6W2PPv7CJeAb8qnE1Muc9w",
  "key5": "nrpFtbk869KhpKRAzPVAyL7zYCHwaXDP1jFtqENLiATXyVhgXUEGiX9BLkVTw3f9j1X3wtV1QJmdmf9jdDj9SzA",
  "key6": "4k152r7HKLJykEGYf1F2H6BYqGsxCWjyKSFaLjxY6TTW3PRR64D6gemWuUDZAVXUdWMf928UrNZ1n25F9ismMKXk",
  "key7": "5bhEWYpebFBegJX24azaauv76bVgrWRCy3wgzb81o3XzdiexRnuzscZqPLS6u7rArBXKcMu5hA11wLHzhQMDRVTz",
  "key8": "3x9JGmCTUqnF4k5r7ZAhznAMWFHwJnW119dQF8pJa25bRcX34cugWhwUg4YzfL8V4AMX7idxb7dGTxnJzEbXLNG4",
  "key9": "FGhwmppLDfugHzXXrxvLud4t3cuDHfFECtzXeQB8wDnb1MGrNGyAS9gejd8b1i3irEbKu9m2Zng5nF3bmSkB42H",
  "key10": "26mk8vouoeJZwaBhcCu1gjx9G1hXTECbUpNuD2i5uGEfpGgfdyoorxk2d4MMHdL6eaAEVdgfPFpzvPuDSb7PuBsp",
  "key11": "4xvDZHRL2uukmbe6JXbFfYvm5HsCVDLdom4hs6AjPjFL64Krv3YnjbqkFUpsN7UpKfF1A13ybPi7NLHen1khNGca",
  "key12": "sWMo7rmYopZnKp2WvFzaCY7PNmzvrBWPQPwGA97ANSoqp5Y8EfUKKq8ZNeCfXvinAAHijaASDPdEBnth5G4Hta8",
  "key13": "4UJuoPLNmuK7PuvRKcxoom3io2fgsiSuTZ7Uny6pAiXm1GMjxWzpPiX2SWW5Es3caoCeWLsf63KGsM3LC9BsQr4K",
  "key14": "5WnmKr5e4SePx8oLkZ7KurJ2F5CBpRQGN4AQKKngUK4kKee56zthFYZ4LkeyVNw7dZ5rWgES5H4Hzsezu9JVRYkR",
  "key15": "3fstq21zTZs6QHxF7odudozjeWvzhSnrcWhrwQLJXgyQ1TPtht8Codo9wL9zT5RqKJzeLNoyqomWRBEuGiFNNbW4",
  "key16": "4tSezU6wv4CNRq8Re5SWtfEVM2qxXsu5nQxRYbRJieVbDUyLQ1eSSiZkGSBK1UYWAw7nN8ya87Dnb3b1EyxHWviy",
  "key17": "3noxPwULJUoXzzYZPafppzR1M6Z7v8bswKZgadpqWF2nrWPb6dbcTTeemovbL9Duz3tN1vFtGzqPnHPAvQXhS7ca",
  "key18": "4K8vJMs54X5PSdnMS3P7jpsMVA5XG8oFRm62qRQL8ch2ywnUG9h9vFiFzbnXyex9TJVYoVFA7Yy9mRQ7E6U68Z29",
  "key19": "3gHwcfZEiQr8F8UdwqVPAzKGpnaSpe9x2iK45bpNW8B5vWg73T57TrxoyibsMETGkfG7JXV7cUB4hJSEjuH5cQST",
  "key20": "4peNhfrk6ujtrLuuMys7BUPwDTk4dsTQ4veC7mZsqobvLKiY3jJ9TWtYNDni19s8GX6QFu9Y61iKBGM4pY9a6JVM",
  "key21": "46vRzihFCogxLeqrBraJUktE9YcFHpZpr3weNuor69Ch2WqKhYGby7kaJH8E9cJaS6cy5A1CH2dx2Tdi7o2hCenh",
  "key22": "39kgMMz5DguqcjurDw2CLN2Qmz3YAjF1oahZ9k2ubkk4JxbSSH2rmdJ6pEzHTL1cU7EbyfAzUmX6Loont2xAiCzv",
  "key23": "4Z2QTs8PyS1Dtkpxm96W6rpCqjnHrGLLvtxSYzJQ8RPQ7hZyTfatfkjsv6knAUM8kKSoDRPKegvTbqczJ5SmfCtM",
  "key24": "5f1qRGqtbA5Vr38cLGHeRYRUPwdNvNR3tp3129BMg3AYCdNTE5d7sgduQrsRsFdaCzFDeP5WnLQzNbm649ZH1vrt",
  "key25": "5D8RjbFMnZ3Lr3VxNLyGWXid58ZPdbWZo5ifhg4kCbwmvCc3uQatUeSFc4QFy4DFNcHcSQBemtHBSZVHDGVujn7i",
  "key26": "3MqYT9UkWMnrfte4zPMMDSgfw1ti5McR59uE1cg8a9J9NU52ZD2U2qJVAgSf9WDWhwXkwG3s5MWBiuCxCuqRqydr",
  "key27": "UJFDBHnqGfVPGzkZvaYBhe8aNZVy7aqVWaH8v2fH6gT3B3jmkgByHCMRboicwwTYrKk7q6YxM2XCewvBm35QYhj",
  "key28": "39ddSLo8WzfMMpWxzww2ckMir96bwow89TMPKRsgUe7wgnK8kGhhhCxZrTPaVX6YVhy4hGFhtBfxMucLBzHg7nYa",
  "key29": "24wcpDZyHPEE1b3K67RsrawwdeH93NDQmSPFAHtcfsuEV8JvoifPshyDPaL8xkX7UBpG4PSSZvXQv3yFUz1LZZgh",
  "key30": "kB1yWHVhPyjBRw14NA58k9zTSxNb2s62GAgojUiu7wfyfcw9sxBMJnwy4dqR3PKAGjwyETrQyGCQ1JRosGmBZXq",
  "key31": "2XoyktJkPDyctZMqU5zZCs3y4AhK51jXLpmfSgm1X4Lp6sbCR8NMJWNKshtd9AKdmXdL1s2BjVwmxP5Pa8YyWoL1",
  "key32": "qYzCMA8FfY2Fe9kADgbBmi4ceBU2qavYwGnMzJCCUzGZr59iozGVpCpJ5gVDtnMTK1a3kBVuhuNUfDQj6y4rrkW",
  "key33": "4tcm2Ut9MT5f8P5cH2n54HHKR3ziEM4YhFH5SzWJeeAGPueeFVwWjx4Yn8bE6zTH5YigJSJ8E6E8X9KXxQeTrADL",
  "key34": "61LDcbVAUv76jKdpi4mJQ1BWQt6p8PnBDLAXKdC4pdPGLZscVEN4peVZFu2uewoVS3YM9UojozhEMNXLJTnvNVH",
  "key35": "5fU59WsYmNkjA9eJMzKmKuEdxdWz2bADQEfJ4oAiymAGBaMcasddre1HmvJSxv5d37mpADN8PKKdrzqLSnAjfDQr",
  "key36": "4z3jqXjjRBo5JwJyFc7ek7P6f4yYQntoVme8GPmTniqY5zBmQjXp8z2pBvFdFc4NXKQBz9Ui8xx5KZe6hzLc9Fyb",
  "key37": "2Lp3jGT6zsqUw5MNsFDtQXVK42H4BYGRrvwm42Y7yEY1iQNAUZimyBFCywctPhYnsp9nVapW9WQv6vRbevVUK34z",
  "key38": "3MeoFSzw7pQEcRywK8pSHMmp1se3DSkBzWDbYXpZ7bfiecupNRYHeMNhVJpHhYXifxupzx31BKYh5Ss5M8xrJrx5",
  "key39": "64vRQkHDVccmuyp4ikbaE9QViveLSiJyA2hrVEg6kCxWe7GuukhBZSZh8TXDiGszkMdoFcHUzLpNFNdJQJvF7Py6",
  "key40": "4U1o7Jjr5kAiqKNEdiNTx11w27ZZ9zPRRMKKbbaa9mGRjuRHLg7BkgVGoVCjQT7T88GoHcn4REcytwLpB75ZsXPA",
  "key41": "3z833XbzWVgwLAZ4t4KzpXVjcMsBVna2T1ntwPxmiA3oKvR3q913TgP6WzbEfTCJYMNYqfQkZK75fheJ2f1SctKq",
  "key42": "5yCUvm253c2RdPiv7NFs6XZis1BSVB9V7PvufZg8iWafZkFCreab7kHfs8PjrzWxMSYpGArUqJ6KHp8gga1Z56X9",
  "key43": "5eQjmLJqinXGU5Q21pGq5yWERNf5rYRmJKzNvuUZZ48vmATdshcx4dh5UYCatVmgrQWCtsfPpbocg1i8bXU9APMT",
  "key44": "56rK5g61mM9xoAHbVYJhWte324SqutJASBERYqBHftrUDTPmBQXYNzbcb8zoVb8RZBz6UE99CCuNvxnj4AMd3qbT",
  "key45": "QRKEh4NgiSHzryWSSw2JmWRNBhue2QgCT6QJc61ow24Xr1iKcnfCXtB6PPKiN72FyFRGRj1n8neyhaJF2vaKNsf",
  "key46": "2uVggKCz5jHcEJZqWEV8yQJbcTcvZFC551BBbz3VBNsq33hc8zGDjqTgNxfXNDhim1X931ECANpJvUeYV9zofezp"
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
