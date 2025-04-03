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
    "262CcFMmcCcX9gqJRwndji27fpgSzAyJpyHnTXy78ni4BQYwccUwqqKuaQK63HB44HNC1LgvVRE8riKp4FJiP6e2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aF7pNh81xzqHH2TbNP5agsdnRQTSxKvWqbHmWUdyW9r9iWaCXgN7KhucizjrSczANghv7AHUcL5kXHgAvEbDLm9",
  "key1": "CY9xz9TyzevsC1mS9fRTdtsvjxipW3ZuXc37Hq6KnCe5Vb4czFADuTCPtyM9ZvRgEEkjSzTpzF1BBgSLpkrc2Xg",
  "key2": "24vxWtpeVxW7QYFVvEdNQpF6qXpvzW9e1snonLwRwxN6Axvgw5K9LUBrKagJbQWpqqvXAY7LJFejrJd55ZTYP3w1",
  "key3": "2NRobLVXCjrsq6aPnQ6bPij6Z4c31FJcgT3PRXw3cfEj1KEZNYyLqKit8KSgpXcwYnU5CgfHhnpVsu8Bj4bqit9e",
  "key4": "3DU76mVMBNYhZ4FUCY86zzuqfYZVyqczPmJDZpkDiktHcXktWipeJVTdaaoW5mVZJT585xYkEqTQYbo6A6NPhmWc",
  "key5": "34o1ictouoqRuyB28XtiuEPxLAWR4CqvPaMojsrq17JXKPps3AHbhUbNfBV2QdN86pyS489hki8qGgFpZrJwLBbT",
  "key6": "2HBE4WY8D4ZPZsUTKCgvLDpUChER1Cv1YTiFmxC79ehKPhFcxwkzCw3wALzqAxCqJ2ftcegRNtfyje5JEPwYpUoW",
  "key7": "5uW5AkCxCiqdfn7nnaXZ42puShPPuzD8EaYgem24twTde9YvDK2whcLcXPmBkWT91KHwDKWrERShiHrHdfZ3gs1x",
  "key8": "62XtEsp3DSnbRdzshVUJmNZvobLULY7fQnbaRCFh3aCXCieU8jpJBEN9y1HrLviMnFyRFKmFuF6U7XGcpMyfPfbz",
  "key9": "2yNGE4BxZifBGcFesPNwR9FDy1QoKyAp3oFLkU1fqjBWREE9Y4pwj2naTDwQBcWrSnTntvLbmFq1gL5nSDbgb78o",
  "key10": "581VDBDCbhGaupwFVmfH2gAnN1zKBo7Z4oRQ9LSAFXxRMrc5durveBb1pRNRGLM5R8SyVVt5RumAhaDPeMLshCfp",
  "key11": "63ZAUi9fJpnzwsbUdAK7MgkxsiPs1tWtpph4JFydhwt9usxBcVoNArt2JQP8BN5ZCwXZVrfVzG4MhUrJYU9nq5kG",
  "key12": "2JgX5E3EsUcB6pJNNy6tT3r6vJW4PSWfzLRK45sZnHBfBBEWUUJTBFLGF64Pgy2Ru41WXJZDMyN7s55sarvmvCfb",
  "key13": "4qRytR6ADryZxeMEk7Z57JAeqZ5YRw9ocTsUwRSbxdvnhMsPByaC1x4mo9HVRMSSRUY2rGqX8GSgUzPhBbyLfRa3",
  "key14": "2y6AYVxuRMgHuEpB8MxEYr4D8GZbmPcbNSnFxnHpXUqNgZJXpNp1L9MS5PDmSjzbjZSvm4RE827cqzHfifYXdaZd",
  "key15": "ZgByVCgn5ZjUQLVWL9Pg4QTuHUrLB8V1A9ygYR3S2A2KdEEaHckYhtE3hiGzCuLsJdeHcPUJzk48QyX6vX5S9Mv",
  "key16": "RjQAkcMX6zuc53y5bJmxLHXEoe4eP1WUpRXXLovyYrUtBaMHEN1WZoZY7eniPAvBWAvRjjRTbjBP7BPCX2yZLfa",
  "key17": "5GwD4M8CKkTkHjsz3ugxmrwfUMBHo9MeP2sWQ22jHjfjAaoB9cgHLfsCTyYmnLBFVfuopzKttXiDp8aqfddMgJ7v",
  "key18": "2UGEHcwFojbKr1Sk6LGiPg5Lr2CS9XMsqS4EFqSnd44Yi6jfwLHxDNSzvk8XLNgozqBf7Uh5PtmkFCmEKjgcnSm9",
  "key19": "4Y2F4d3Zsc8HnPAbkuRpCsnCEjioQTWqPMMf6g4vocJZMMTQm98d2Q6mE9h3gzoQPrv8s4jBGoQPqQwRLJKGZAVN",
  "key20": "3Ks41FdxWExBBis8Ggczr2bd8HYn43URbzfNVe5Ho9WLCXUH1YKDmCJGvwtiRearrcDqgWAkzhsigF95p1sfc4ne",
  "key21": "48FxiEB5rznddZnvDJydjXsqCRg4D9pfyuCkH7g4Cps3HZeGk6tisFqgD5WgSMf11cmSnTgtVRncHhyvCQEVjjPr",
  "key22": "4HLT163k2rmdbKRMXeXNenbeGxNbjNJwZ8oJtrwxUZshziXYt18qP5czisKn8y3g7Lp17Lz62X39g9QagpHvbFoh",
  "key23": "KPizbJghWJHsh5oz44LWDMsRDccPhzuyp6qgdWBQKG3E8TwbKKmw98npUaoaSmcuNC6mh4321NDuUCHBymCLtqe",
  "key24": "4nQAZ51b2igUfTCyuhjeLKE6AKTQP1KSwAoVAvRKqwA2Z9myA2cbL7CZacUdTzp2jURFMSLBR3P6oyQyFiEmWgkg",
  "key25": "3UCQyX3VksvkCkmdVqCramgViwyQSi8Xv9NqzhVpFKUTQn96LaEQLuwrfyt5tbDoa5Lxvj2B3JBTPneAem8qvsgK",
  "key26": "2r6WAVBzEa7PSqaeu2ZXh37HwBNK8gmnGBLk56cMFymzST1bYGJxPnnh6u2vhBTKqTNsdZ4zWs8E9nUSo9PC7X4w",
  "key27": "3HkYhwTtx9HuqpCm3ha368kV5LNSb48kS4qMJQTiUS5bLYdVpjLv4F48Juu7rNttuPvyASjcq2YdpMcer9nSnw3f",
  "key28": "4dSBwR6fLwy2xsMQzrsRyg5QgdVVpihhT79XwzzkuRotCJfF4ZWDXzqYMp4k5mtF8FqrU65yfcmzbYVUncjqfURJ",
  "key29": "YxCjKitdDFeLJBZsdsvLhcXCZPcjXyktzr3ooXaHNJdcNxyqD4M3hVyeuufJeXqjLVLJ7E4w1CwmUjnVMmirje2",
  "key30": "569vMK74CHTLzRxXyPQa1AxqqLhxzuhdVPJgkpfoh2cLTt9fvwtyz4QKYhrVQLAevyyrntFK8XLnfhk4wtorb7pa",
  "key31": "2y6vYdv3pfW84nTWMxfPVSt6zyazQVT9BsETMZNY5M6wLvH4sp8pRracqkJYbaiFyNZJ7fVxFLDbHT4u5eJwMu7J",
  "key32": "23n72WQnvnpYJ9guiTt2Boq1qTMAae9jTrKoGsQ6dmwVucjhZfdJVvV5Ab8YfSX7P9n6ECfL62wR4vxThU1A7E7K",
  "key33": "2pN74t5uU2ZLuphYqvpuZxrGjqzTj2CmEanxxbk1JBqM4SdSFgrL1TaNPo2poVfnh1NNpuPNPGG3fsDpSnHfG5g8",
  "key34": "4kDDK2qnwszhgUqX1iWno8bQKNyUadxcNZCgmRM3JbgaWQCooRLksX1UkwzJbSH9bbzpwcCWpK33ZqLw3QCEnq8t",
  "key35": "3aZjeuvqimJ1u8iooSnobjFXjtNFkFD2cUtG3UgZYnEyMM8Ds7PA73VzBXSePTU6PZCCKqFjGJGfU5ygQz4pjTCN",
  "key36": "4XJSop6uSfn3PtAUKSArWkUzThpMBUwV1Z8TAThdDY9eTmj3P755AExwNCJaNU1cEeGh5j3mU1DAHE7aG32FU6LA",
  "key37": "kMmFxWwMJ6XaCR13BGSweNCmnZsjUQrxqMg6JaJKe5xegboiCbUsCtzTNXHha71xVRioYmnKPsoYmYcr8RFdzFh",
  "key38": "3YkJvFfg5z2VTfEJSoYkxnCEMwAVYJ7ehnXkDvFm6xNpBhPjiXLJenu96CQhdCzGus1PHrSdoFmZxNGpi1B1tiox",
  "key39": "2Vf9WwKSbfX3qivBJHwphGGHRmjDkkNnRwLL72DaY8KKVDfyWK8gMePkJGgUyw2gbdhxfeKGoy9rqwFGFW8Gw9m7",
  "key40": "u4eoPz5SrBCnSjQR1wsbhquKpPwXQgdSN1Ys4krN54SvCvcUoFSyMWyAVFscGofTDtvofLHxbpcg8zUg1CKX6mM",
  "key41": "46GGP6KBVYTpmZJdDXZyW6DYmsWncTHRwpssLppPHcfpYvYmd7zwasjJrhPVK3C4s1sg6SfkmpQrAPmwZuVrhct2",
  "key42": "5XpUogwPvYh88DL2dAmoySfMpL68gRinskdp6DfggMdgyak37q3X79spkrpNfrTEKMmjur3B8i3eXXzfT3MXXv9x",
  "key43": "EpvrsKm2ytCwZ2VnTEV8SCRyrSHKERX3JfCxejYtnUDrqJqVGxBge3588W3rWpNJwAqjs2uKPrHXvGWxtbZ5VVU",
  "key44": "4xA3VGtj34wS1STApPLdwZMuj9ogBBixRYjmNc269gyBhQZAcMD1TUFFG8HFpk6gKb4SVkFDpDAG7cyXzsCHYw94",
  "key45": "62NzAcrvGQ2cJdmBYYkNWayMhGD6GwUt4obKa8huxBLgh5gb2rZLgtTHA2eg9Sm8S17nQJU6jYzK4Ya3k44cvpaQ",
  "key46": "2KEsUBPoe4wbxi52kPdz1dYvo84UVK3o1FxEdRimsZQuHKw1WTTJsuN2BdR3sLvxjQxF4Zvsa3f4tsKv5gTRoDhU",
  "key47": "4A4WfPr1vFXwcxAuTmxBYuCBmQq8aQV1rD9GEkFKGdVSgJutqthroAbgqQnzvsz2bkA8VwswLRuVz99bjCQi7FHX"
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
