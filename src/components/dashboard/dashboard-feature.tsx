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
    "2qiQ1JTRcGBjFstmzzoXXGnr2edurm8jTEs4PtmV2Cbfvauv8kjUw3huyLkND7BskYshgfZUY8d2VKLcYF4vnrGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hK7kndPZsXFMvgg4gNcXKweCmGKWR19c4Fugk76HTWL1f6U7U2QinVHeAkgn77WR55vTqJqLAjfe1urNRukiZWy",
  "key1": "5eS8DRGs4ejp2zTySdzke43yRiwtPCDJzcPizCG2uPjqYbU7PQzDb6sziWmowM4P5pHQMWatb8Re3kmFis6F4iZz",
  "key2": "2tcHzfPsYXPbJmrQ2tyAbELG4zsM7a42KvtVzoMn1M7WfAWi5XATfXQfF8M4LDZTZjm8u6mEzyZjWizDtmZvQMvK",
  "key3": "4FA1aQL9J3zSWgMEHmVjxdmPWiBSKxueHqJeZbiqsferN3oxETdaDB96dsJD4rzVa9AxvRD6PxHhsWaeHUUTL2jN",
  "key4": "2RhqRoV92Gas6KQ8YZqeawAm9uBaEL4VUjnrGc6eGqhvYftz7mVGbfLUUa6vi3H9EpBgp6YRX2dnDRQU5DLsLU53",
  "key5": "49ysFGNFCmiGxQgUC8yU6uSUvd6JfJK9rWfFRsuCfnuGL2mq3xqdX9N6aDhB39nc9gpoFBFeSeLwVu3dHs47iM5d",
  "key6": "5DW7MnmdLDeYnYeYG52VNcwfsWFioXoUPdH63HzAsDt2tzKzRujWekNZgsy6BmMa2GzK7RZcwTAX6JvZYnp15Ac1",
  "key7": "35mU6Yers9n2wkjPHdtCPnaKFx8HGprtD5etbPDdBJjJtMrentAsRWUy1oDUDpJBxsgmt4QWAwAKi4bcJjFjhEUw",
  "key8": "3wGDnn1jBF4kbCLwBZ6MjQnCVv9jLjw4XsC39kLJMx2nEmMKNzTGxkAAk9jTiAHmaLcjrT9RTHudZv4W1xFkrxP",
  "key9": "fUXBMT6Pc2wwRXGjZDb1Mvymx2NYbQeERFqYfADyRaRuVqudawpJtFze4efXdzahEcnzDQesWhwjC81qY8WT4ff",
  "key10": "4gjowqQiuHKK9xdX88bS8W49QysVTynZA7SKAu1jqJpmFkC1N1nPuesktBzg8v6kpejMxFo9CSfvjTaP2zJb1T84",
  "key11": "65wEDt3vzAC4UHQ2G8693W73rcuqA7ZTdQxBaCaBzbgwjofVqpBh99p6QxDgdiXQhD4fTQj9AGdHPy7UCLi95u2P",
  "key12": "J5taP8RAcc5Gx7ZVZ7h7VnQsxvi3fuUpEjbtQkcFReuhJUwRxNM6aVAJZxnNtFyyzbL53Hik7g1qpfto249shz8",
  "key13": "5PxT7hCveiZ3Fq8x8CbxHYH55QohgqReKCBAvoT4JARACiBgCFodz4tau4ouhu8tvcDUMYQcEgx1HJBe2R96ApDz",
  "key14": "4jUxo2kZsMVeot8x7xjxqB7VW9xEhsbuaBF95NGPtUX8mdU2zWTLrA7fJbQqYiU78VcmzNf3YjFXdMTDWwbSPMee",
  "key15": "36ZSrkkpDQ5eRv4u6JbZWZAoUrLAsQVu8ZdRaniZDimG9PXH1vDjYPPmD2b2zyHaRo69NVYfMR9uKBvHY5ZPYT7X",
  "key16": "2jVaVwmvnsEf71HooAuwmaSwPZCfJLZK9BW4NfWwuYsd4HinYnkBPpuZFfyijziLeuZY6EL6MrbF3JCjD8k64bPw",
  "key17": "4FRWxXUm248RSQBH1AsBsBvFnDXm68eks9btrq9ACNay3Qsd5ZxtR8XoPjtBtyxUzN7ZFE1hRBK49yX4pqWWzuLH",
  "key18": "krpskCc8hDandCEVWhfrQyhZxbriCnjSJ2XeKVbih2bb87wq1r1PxgG6piwRu2DM2NHR6mDhpxhSMDHeeWTiXcd",
  "key19": "3msCs4inevJxpD49poAxh8tHEoD2aQME39JfATka4JNAqdexy9rCL6FsqbKwhLpXa3CH9faX2CBHho6M8huyVtcJ",
  "key20": "tHJhjw2tisSay8eRnZt39JxmYqgfoSdNVvu7xFGUHS7vwefsYJP9uVChRTiNKKBcyUhTdZGcgDKZJFx2Sdh77TB",
  "key21": "2nNDuYGMJeakjHPu1ktLg8NZL9LdTjBPZAvDY2CeFmMFNvqAwkzH7qQjfbKybDH783Pbak9Suc93pUiFiBscdsem",
  "key22": "5zpfDEc7ZtQpvKKPCPmUK2bnYqTd9wA9CdUiWtnK1fQzDnc5eBhvvWZwma5obDMxtPnEHiUkJ7Ca4Es3dtVa8gas",
  "key23": "mL6kLvyeJKGrPW7mpJL42Derjeow2ef2cYL9obmYAaKGMDZB1EdRa3m1UCiRKerHcHtgsG93T6EtojGmL7w8j1c",
  "key24": "4wRWe1SbvNF6BcmViYLeAfnHNnvd1DYK5TvxuZvBcgYwSEEsEqxmGVy3RqXx1udrUzgvvDUJrC7c9HtoxNrLBpih",
  "key25": "2kFEu84btC13cdBix5tnCjBJjaZ1B6KT6SXX3e5nqAz69nVwrdt27jD7mA3HiMBX6DgcrmmTdBcbBCy86fomcVf5",
  "key26": "45bLpSBTedHounKt7fM4wVPnCqS5uqfJ2x9p3svSSmLzTvz5nNiE9L4iof9Ef4VHktaFa3gpNjwPB1UeDGyDoVMh",
  "key27": "4aJY9hbooHNJkbxdfAe3xE3zGE2xewqgRP7h8A5Pj7m5Dos7G81XZHVsV9QUsANRCbhNyL2TANSu92oB6cwWvtb1",
  "key28": "2rje9zAs7RaR5wtE3mMpgnEhuJdbpvsXdbdchssS3pswExy27snrB3KmWUjRXViTkiZ9c4naGr1nmebM4FwJ69G6",
  "key29": "5QbpkhTRAzmtZ1ptjnHUSZy21G2k8AVDgmNUpo8BnSiGaXXrZ3Smc4giFiJh68idTEWNsgVtD5hwJ1xFHprBLHF4",
  "key30": "2uhjMDLVe4GYEZ2M1ifZpsYQhyijxaPb1dHwfkcHovb6XKP8svrjRWQykr9yyJtn7myMkZfgr1cM6jG9vjSWjeBp",
  "key31": "5ZVGvejswENgLrwhAQMd6RfUzzNfdFuNdfgtRTf62KxG4ReCqnnqzbxJfczNDxcVjYv2iZXw8kAd3iy4iw2EhkmT",
  "key32": "4xTQi4nySjp7EQNFctzHhES861ofeYaWeS6qdKnLtXA7cuoavd48cYckFdZ7EoynxvMdQUmRwPjdbMGMZQYBFu42",
  "key33": "2kPEdzZWEVSCcJ54FtkM9Uw6vRocXTsMjkLuvnrirUhx7nBm35sdayaeCR3w8oFPUw6XSxq3ZsqQcdq1Kq8wyZ7i",
  "key34": "BftkXDoVMgdLQzvK8bKjVg31ZWXcVde5ZLfuJrzmj4xZGGhLvuywcY4BQcopvkpe6YrqGt2PM9FuSo1T8HHbdSw",
  "key35": "4sX3Zy8WDzejU5G7PAfV5cmGG8EqsvpnShNimEAQ5wMjyTk2LjFQs6Kvwh5ykbQb5iXEY4jPieGQJg24RpbFUwDH",
  "key36": "4uHJJiY4pWr7t6FFgB4auNDTYyvSpzWnNw7ULsXJCJGddkDXGRkrRCcy5nrMAn6gHNdPW3WtBHrdwJDVYYUWp9M4",
  "key37": "67FaKSVb6XVVLMsNCbzKBpg1RthTkhbhYwHSFnuzW1zCzBVT69D5WEjxFDycx6nQkm7qxNHPq23UrFVBR3EfFLar",
  "key38": "5Rt36RMQguASWpjFPsS6EZ9xAQLwWAg456GRhpL7f7Z1wM9SBXEYwxiwZkisEFbqnjbfnKTGhk8a1vkYk13aWf7e",
  "key39": "rRZ66KWCXbH21w3Yi2gnQN4ue83DYoNkgSs2cjTX4rbAxVk5pTm3LFpzgRmdTezNrJ7nbKAL8XVFvyDXjeKGZwY",
  "key40": "5NGLaeUmw7VQTNDno48yYr5FKpaoNSeQAqxHfqVCjVtZjqhZXAmZ4EJaWqv3YvJ6JbCaimAL7LnXM7cNJcEZDjbb",
  "key41": "4itoKei57GdQoG2B3SnixHu5X8JUWgjC1B5F5bDMDr6NVw45eEnT58y3tdBuBGqTbwPA3SMjHZnADpRtFSJHmTZY",
  "key42": "2C5iJYvZFU8x2KT22PZixhsjVSKB58kuwspXn4htQnc3tgpYFta1o4g5KAon4St7HWmRvqMY63xBs3sZEF5dLocC",
  "key43": "3Jr6zMRZDwB2tPVjqv8hAceoSKatuNMNXuRjogtwx1RmFSsARhEW4JJ4csBgDPVGejvEzyWE4kCtcjHE6ZnAKSV7",
  "key44": "5X2PT4bmJzxqdfXDVwsmYxwTCdHk2yfTdn8CnCNYhNEx7vUo4sMJXy5BJL1avcXMCULErQguGo6CVuByj8fqDrzL",
  "key45": "25Q4MBxQBUpw5Di7bhrJvRJiRxtLRyBAnoA3eUQCdGwZbBV8HztT9AqjKv1AkyNaMokKhYj8wjaxtV8XL693KDXd",
  "key46": "3c55nEHGtWwD8saooUKz5ZgBj4WaJNruty2b1k9vrxQEkPSC88Gfnf1N9Bcu8RBKAtXjLPQn2VRLuR1pJHg5Nx4S",
  "key47": "5LZoW3bNi8UUL1qZGy3qiqwXkxWF3kFA8Hxfp8jjRWMQeu85UYZVt9sA6UGgQV4YXRRCqLBXnYnD2W4s14H8xghD",
  "key48": "2vU5kJ7GrhdsSpapgDpaRTV3jHDG2rvuXLseT3cU2QqT5udTKf1HjyP3pPaydKXRTAyvfpXq5yDSLMBAexBUzdR2",
  "key49": "3nANNhL4U6wqeiFh2AiAyjoEsa7xVUCoZtio8gjTEF3qq1DMy69aS8LSTsm98nS8uEe2aqAfTyQN3JsEcxGhESCA"
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
