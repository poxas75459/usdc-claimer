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
    "2M3xwZzXRP1VhuLg6X5Vb418ba7dA7MixGkWQFDLz8MsC2fmzeNjyZ5xST6h5fad2669CJqkpTp8Y91erjz5MtsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmiDuNLF7M7Wk4D6RDzc34UMPQpMaUps3r8uZjnM9dLVrdssKtSZ9XSzBiY4tCzHwSeSxKYVcvZvy3wFAAYs2jr",
  "key1": "3KyhzECNYisUPovbNA6ZdiSR5DXbsVHzRxhd5HiPzRBCPBRE8GPNxEnUQoSMPd4DWbCi61hrTkUjUqLHsLRNrS1S",
  "key2": "633aghY3VMuZg6uWjejADBb4JmC3DkLYoewaKTaumFoYWk9kyjaYoPgXVgnb2y9wAQfwT4wogUu17G7HiJE2qfWq",
  "key3": "39cAgSTEGJxP6oCVuqWoExHNzYmWUGfx3b7fbXtPKQRTzG4CGjKTZ1UK1pr1aurVM4B7pZecUHTsu8HtpM84jR7y",
  "key4": "3JhV8ERdAU7DZWwrNKKMgWXAkU5Lj5Q6i6djojd1n42t9HkCP4Hv34dSJh3JSZWR8fhYTsxxDJVshKQU67HeJ3ZA",
  "key5": "2ByyaSm4rp5NEoQ7ZKiF2ZYBNhUMR5QSWgPAH6H2twXZ4W8bfCj9xLaMN7ykRv3njeg1DdkubSSSYMDAC8W2PMQC",
  "key6": "zbEhWaPaMHajqjnZyYqe9eCm9pknBqAQkFhbqAs5FJUjpMprKomZHpoJUzEPWgun6rrv4sdmTgHJAzVvkC2qLEB",
  "key7": "5rvEwSiZiph21Uhm2LztjnKQR4cRNijpaos7i3K8aUAmLqDgJkXjcnTQJidbY35CbViYTvnf9KvuNjWYkWEaagKo",
  "key8": "5WiHRBNQeiLhZXm99hUCxCEma5h5GGfq3RPugaw5WPWB9YuRo2UcREmv3kE5KdRge9XnQEQAhmQY2acBPvuvebNF",
  "key9": "4pMJ5X3aWsiXtWRtQ1XXPyUCeEy73iymSg5WtwF9Ecu27g32AALfu5xHiF9BBcjo4y5nS2UL4dBBG7vKBhbCdi6J",
  "key10": "2udwkZjRGMHwWmjw5q8T6SUvsY1zJEuazCqsqXCDbfaAfNK7LomE9tRq9AHUDhoFRRAyDhrSCi6F3yzLbC8UMEny",
  "key11": "39KeanY8fwP8Jz8UrdcGQ7kXAKewxGsFTiriiD3BU1gDadfznnpPL43EgRSdjvq2TKGiCF1htfcnsKeFJDR471Wg",
  "key12": "4vqr45xGmAVj1DXgnPNfEoNavhLUTZ2XmGLckB1BkAXUU8YUT2zSv4Xv16vDXeKX1Aqt42ztbQYkUHkii1nMmeik",
  "key13": "4dhgTvDBUkDssTkD9nBZCsdGAVFJYR3eh2tijJbD23LxGzcyBexUGBfh2d7Zku7hVp33rw8eeGMt7B7veB3x226K",
  "key14": "jmhi8muywRWvaTFeM7yuEhoCwBStDhhPCTNCyVRw96LTUTCsRvyNuQxm36xNuf3mfeAbfhdJt458vktAGRQEzYc",
  "key15": "5efBk8qHMGjZLcoMVfGrzP77u7fpyKsUieCik33Zd5V4i7zM14Yt6oVy5GUoTsS4gRyiCeQpAabqiRcpMWJ7aqen",
  "key16": "3nvoJ6tc1j3uiY8DwZjpPPjwohautsCVHxXAXJ9pHdmVUHWcD4nrTuSh9nTHPwYC9MFDfKKZv8K4jq6Q88hkwZx2",
  "key17": "3gH9KoE6daoddm2ZKR5mcpzjgAnsvEGwKE8b3gWM6jjKTnfLsQtnQtqEaXMQJS6tLBynX3i3AGSwdKFdohLXBJo2",
  "key18": "NswQwZFnCtYKBgfTcE19Z2DCXowh9aCvJgfsmJw5GsKQviBLuvi6J1hKdLa2FbnZTaoxJHVthwXuQxRbcDyR2NJ",
  "key19": "3LBfMssvE9pxJDYg14LZnMvp4WK2DeSJJLJHpGEFRdFWHoyycibLSNmvJKcpz4qPzUXyL2bEkP9mBUWJ8GMbBL3m",
  "key20": "2ne3VdGgpxeqxG6iY4mZ19BiC5ShbepKGdEDtbhyUPetbpV58aQBoZGRJ2YFF5nZfRekfDRmRtbYohqUZ7gNB2LN",
  "key21": "2fK1uCxrZ4DijuB7eiM3UPaQmNMixGDNZdCGzD3SLNukfTi4ACpnp3VBARNAn3khS5Gi77jFJzXJYZ6ixMSbQqyd",
  "key22": "3ruoHaiW5u4XiNSUPsw5qS5hQTGBrsG4w5W8aqqEd2T7JaXxo3z1UfwXnWXvGPTEqVmAtvC2HKVM2ygY9rn9ShyP",
  "key23": "24HfS7A2rpWUDTMm1AcefVKsFQgpD4dj53bVh6YYH4TdxZRSQBXLP1r4SP9pPXWozY8hnfA76UtGN2FNAYbkSDvj",
  "key24": "29qZbXS6kdxewW82WjWpiJQx1rw1V1Ra6fX5q5Vtrd1k2XAjC76PG3cQc2Gc83fEpbBKEnMf6cp9CGGY4steL66U",
  "key25": "ZqpXxwzkVf2ayYSqtHob1TryBpuiMvAL8Pc3YXPwuFpSmthzYtCV4YbmhkJ1vgQnUgjiCvPMktpx6rW37SkgcVp",
  "key26": "44JBWrFHN1RnMmYiGqBR8K5BcdkhGSF9q2Z5XMVUBqsXGF47L8yYUhnDHLvasZczgDszhHbzqJHhudtM6RbHg74N",
  "key27": "4B3BuYiadV75d9KqftTCq84nFip8ucNj8KqiBSi1yoh1hFL91DjVwepcDR1UYeMeHPYLFrVzwm4uiRWXbAEvfXAB",
  "key28": "32Z2xdWf6vhThz7pnHskDqPgJmWJUNrB3Exao5SqmMUD9Dtv9tLv3wzg3GJ2GLESc5ztpNKSRyo9wYpSSbMh5wtc",
  "key29": "4WJL6qFD3kuGUMqioGwc8h4LAAmr5SfRzr67PpFmqnxf58q98DV6VkxeCyDBPU63YYRSwfeNBYBhYTEcxNaUFX2P",
  "key30": "4kF3AErHPSqob1LjGvZVNjRBV7iMj9hFSGfx2tk9mjLf8sVFLk6vhYMiNkYEha5SfquXhSupQXavax8mJUW8JTra",
  "key31": "5EXKQvLTMxm4ErgCCctJt9PWuBG4paYEz3N4KzFvVvjcfzsutC2SJRczhhtrnUd7xXtwmAvkaXhvUhWCQH3ZT4Lb",
  "key32": "4KeULLYYFXutPmwjTwjx9GNSmb9FvvgryDRgEd9oLGx3tXm6CkimFWPmLkKLudvo4MJ58gmmrdktCVyqRShGUQbk",
  "key33": "3wHDBkgR32c34FfjsKNkVcMiuQVquQYBiAufaBFYA63cVa6fiZ6PpA2zoyNK7uvK2maM5yUJ6wvwxSDuEzSRUJmF",
  "key34": "3P1Fo2BEtvYFZZMyC47c5zG5FTQdzeqtEcmQcTtbhzvRrCRmcQiomvURaQf6BVJJgdTFeQ89Uk4gZ64cCtJUJp8T",
  "key35": "5QjAovSgRCns1sp1wTnCos8r2p6oH8FQyJQiw1fsRTA5WuVNrFsShY5NUijoAprym4sKWti2LmXZZnii3Vyud7Bd",
  "key36": "WqdiuFUPZzvGWHZdiBmx6zhFG9ekF9MrVtBhdo1GvZHKXUjGZkyVei3EGuByZPerwWX8AwM2YUY8ehJyxkvzdKq",
  "key37": "5Yx7Kw6PBMMY12u7nHmH2MrgyKZDxRD3apdT1YAurCQKSYgk4vf899t6odCrnw9XkDSfjcrPUKkdGj7uC5UeMrQW",
  "key38": "4NBw2QpwPyw7q4mbLJoEgVch6n7gsksf2L3w6qrBpJinfBSUatwqiD2S79JfV66kRxqpk8WUmNnZ1kopxQ9oNwrQ",
  "key39": "22rHL4J8gYvo2yhu8fbv7zcDqMQCkducXPXpa7my4iL2bmChNaMpeZkNkyGxcnPqvG6fBnDVnbmnYFmFGvDtb6W4",
  "key40": "3SGajXLp1MywgczMuqD88BjXmTGtkZ5QvA4hQ1aXeZajSeB3K1ztPWbhfo6mdMcgHnwo2Ze7bGzrBTBp2g2D6Ljn",
  "key41": "2sfEzBhBa2kUXrPCqVUhTjhVCNuAyRuA1aAvohMtSb7ygJLCqKX3KsQgwY5YusFfCpaWQQqc4yrX2c88X4KCemvw",
  "key42": "4m9cA76dDXkKXrXyu9jwyA9X2Cvvcffh9pT5MxigJKvnUamHprsNq5aVYDSmKjj2hVU1Vgyk87FeZfgWyN66tS8v",
  "key43": "4kJSPYo7VYuBMBAZ8VZTXrqud6FSh7pKgZ8HtXCUhZxDMBW7HnAupH1eQcs64FuEpRPV2nVDuzQkVYiGCJHd9ePG",
  "key44": "38VXHRo9HoB2hRKYUG9UF4Kxgn94CeXGZwXMDBmWDmZSDoabym3NsSD9mfqi83NVRaoVmnq4US9TSQsa5of6eQ9B",
  "key45": "2sw4Cvt9u6pdGL44FK1cPbCBm5Xy5tmVkD1MqVmMzFhGKuSRPnZ55dtFviVz95RLvbezs4ggWwMeodZFMATPBkym",
  "key46": "4kzDiyUybr9vqYif8ApJF7YMrwiMyejyDTeFA6RqZHr14jSGq9ggx1oCKiib512Wbwtu5rjny8zeCa8sPAMNiQmg"
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
