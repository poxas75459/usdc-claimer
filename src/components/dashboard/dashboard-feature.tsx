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
    "3HcY7mceuN2F7S2NwP2YPmELtn17CJSaFNuVWTKkwna44gJ3WZirf5mQwkLmnVwQBXkM6Z22C1EWjti1mP85ZkTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFAxCXojN5RBnW9E2oTPBvDFXDFKhYKtgWM1TF4mpEmLk8RaiJej7yUaqQzVrRHaKK1io6qWMrD8uNUDzX49Hz8",
  "key1": "2eZviPaSedXZZdt8MmfE1YHwyZTeGaH8ZzA9tXySnV6yiPKNUNHTjmiu2tqCKiES5AH4M7fGZP1gjJLwQosKtVQz",
  "key2": "67KWNdgZ2D7XsQFBqnPRXnaQ2V71N9shcPjhg19HnyKrKwMvs4UFCUbz6JtK3jer8X8uVruRnUDpdyxJnDsm3dQM",
  "key3": "5k1oYApYb4G5RwNi6miegwiC3WGNm1QYRExxXuGUA7NYuFX6WyGVnJSMbjbUX2vQtzv7fduXWbnKopZhk77rJA8S",
  "key4": "3xrrG7H6ywGdvN753ik7bDGxoJsiwdV5ogKZPJyuhBfq3a4rVBeVvBPsECiJLyaq8DrEy9SCrAatzPWv1JgRTajm",
  "key5": "62D78GeyECaKRhtRuQ2b75DYPc9ajpLQ1FVRoko6HBm1ReF9ma2DHSokQPY22JDEExKxPCXF1SvJiuyHk7Gnv2e8",
  "key6": "4LE1FDzL3z5YfwMEUSBrfHjgUgzsU196Xo4BL5JdFqFvgp3Hi1PHN5FFHK7wewrPHvkuBV6Vd1XscpLBu7eTuiJ6",
  "key7": "WPmCPEppLADdnFcUBi4mB6r4rB4Ab6gnwV6bry1YwCco4YiXJ6zUyJUJRYAWUHbyciS21rqgLhjyjNnnoQLJFat",
  "key8": "5UdfUKnUe9p9LUeH3Do5xgXmckDiTRW9fkdgpL2UNvTTAizfpHEQetmox5FJRR3CdH5nXyrmj6TYrtcRiCPF4qFh",
  "key9": "24TGcA1NrefA1pXcSUxvUbAqg5ffTQMke8cx7cGHLEuhvHMrq9HAxb3GBmgEhsHuYzeX4zeWMJWMubmBvbTvjJZ4",
  "key10": "38TSr1qjpqTBaZVQhEaUPVWTDi2v49QizxqFZFYz2Yv6tsenGjRTMeRawjxWdTTxyBTsaC9QgGweUQgm9bnFU2oV",
  "key11": "5jkg23P9WFru3FP8821RoDs384uFLbAHG1pc4eiSVBrj6mfTLMHNue8PFG1cmxZBQrwsUuCgvqxHdtjZfcHBuXvv",
  "key12": "4Q6P5611PwLnt91pRhW5dfyHjc52trcC6gS9pakr6DFTraQ5Tk6BaVJYstmo7bDLsoN2dd6DvJC6zMvZmqHMDEfm",
  "key13": "3gY6Y6eVhKpJMQEoYN1g5TT2Zkgfm12KvrHkz45YZ8n7HH4H6iErC8HL1RY6U4Uv9kzQNFzQGVWToSEVdRk9tPRb",
  "key14": "2zTZxyvWXfWGysiqrdMYeReGAWWp8uHmVdc4FrdJcJGpAt4XVu5eJ12WUDifxsR98cXUPdHnBVGyA3YqMbPZAzJW",
  "key15": "2iL5FPUsCAE3o3b2P7xSXodRLaMzMrUtDZ9Yc61AgmNo6XVJx6ZqREwgwCbgo2Ah54SYPURMDdUGLrGUKLwmWX6N",
  "key16": "4ZBMZkZThUSpRNE5MT9Bx9Zamky3UU4ssksBi6mtSrt4hxjZkhgQpZ8msBT51LaL3CzxnjtTGX8qMqoUfHYewKPp",
  "key17": "23xLuN7Epst67ukpUqQkooyeW6e6kyBza9s1NyBXsia1Kdxe3ykH7SQHpYY3nufGpSUybJezcSwHnQxpzdV1Sk8s",
  "key18": "3jWTwpa7L66e5ChL1JcMSSQdDdsWxUzA8UGKqmmUvrzxjY5TRZcy7CMmy52hN31j7w2VHin9SqSy4UAJgTTZbogC",
  "key19": "2VFxYWcfq4XhJw8ePUjWvmqcgWtYA22FyEF7hiuqSLmy5mrKAxh1MHWmhYiMZ5jcQF8jsQ6ny3pwrvKfVZcmNiZN",
  "key20": "SyuhbNPRkCEHy4ByRh9XNviSP7NskUdg1uJEzdxuwcRXkgR6Z2UADXnhx7amnjd2oUsrpZBe4DPi7EHT93NBGUA",
  "key21": "K4YzkqUUwESVHQQYZFZEjyVHDaRFuU4RcdwL2pRXsDAX1j3tovZ4Soptdt1hHvF5ALhvYoX5Vndi9kv5bBL5ZBz",
  "key22": "2VeYga88wGsMj7rxLCVsjvQ6GJkCyynu1GxWZ9J9m1igsz1GRp2QP5tkXYz1VVXyknKK8DYVDWpvnWcvVHrNuR3G",
  "key23": "2JFj5V6uGkhnxoA9CKgffKyNDS8v8RTXMfPpJ3CEZerF58xC1vi8MfBWAGWsR1pdhU2caDdBbdn7NaDvUb7kWmDM",
  "key24": "4qHQom8J9T9FJQanSv4e9fJ1DnE7U3PVYsEGdQgBfzfZiMXKXjMFx2S6VGBXPMgiQ2SKoUkn8RZuPRN8KghzY54n",
  "key25": "4C3gRT3QFaXLL8mpXjUFWa9U6R5Sp74Xy9csDS3PivfkHD8SHo55yTj84osSEEiDFNFTBvZNYBcwUcGX33yUk2CT",
  "key26": "521j2QeG1k8XWSyVs6aRFt7HDam7nRyzbsKZ48YA548gjb9R6jX4gQKAmkPZqTvZNpkoghgkEuXDwyY5m12GdAtX",
  "key27": "5F24Nhp2wJG9KactVLU7Dt6RpqnjNrXGuht79gfZWH34UPe2sUNQ9bEGLZhB4nV1rvrczG4Ago7n67QvMACdtnTB",
  "key28": "5s8p6vBwX5x2iEDqXn2oCh5GFtVwG99qmHvmfYX5aWyHEQj4ESudHasKvMdqQ5LkATbSbLcnuoxpBJxtRXTxUVqE",
  "key29": "5zyRJW5vRevxuWniHhVWMdek8KwGwbFNgjgXB3iRidb3kH4HDrVSp6isw49Z7PCtm6yCtUjmHf14c7EiX6gKjKkn",
  "key30": "63G1bybAhSdZqC3g1fpqrwDpJmXXv1kHe656uKetvZqzf5HHefMoTJJKhzWtZPMeXyHNjXa2yHvkyRVxEVW5Es9N",
  "key31": "4WamxzB4M6eUjTBXczNjNeVPDiUZvggRhCEceGY43EA7RjCPZjGCJZvTckEbBtSfa8aJ3kevYi2eAQqVvQaJvhTo",
  "key32": "5dLx8H58vW5AnGsFNmoFzAUUiSkWh6V34Rgmq2aWB4SVZWGYjy9QRY7A4UCzAekQaRu7vxwkWUKofrPk3fYy5DFy",
  "key33": "HKt3Rd1vz6yybppPviuQ7TH4jEWdNGNokRKEMP1JoXr7f4AgyBiHh3vDztrQEQMd4v299pPwupSt28qxPnqZvej",
  "key34": "2KKWaaiV8F6Y7isG7t4cVmqHEBNzkXmcURJKPwTHMvn8GQHvAcuSaie8n2y21xmCnhV1PP9aTLo1uXKofmbdQqXC",
  "key35": "5fuTNfFCW61YyV9NaKgRM8Jt6etHa88n4CHDsQAY3naskq1FdyiT5B8Ch9fzyfeMhga3yeWkttsKTMsKMdZy9mpG",
  "key36": "zEejjZvtFdEypnQeX245G8ZiUHttqimCwgH2NvPZRro9MmZE74dBsGdShvqzt7ThrWisc3kSBuZr8NSMGxoacoe",
  "key37": "2kUSUzTEucXNY6jejtST4Px9HyA9uiz4brxuGgaJk4SPGokxuefMcXJFcpSRnvbfpkDZvn5at1QBakd6fkWQWLez",
  "key38": "34imqiU4nL5PL3hmkqARAguB8pFSC5q1RBZioT9xf1qFkhP53Yvd8dWC6dWnxkq8yLKcXN5der1tny1UzVLSQaAD",
  "key39": "PEGzq2xcmavVm24TeMjgXwKLaHYMfuixU8QgWQgzhnzZmCk73f2ZzsEKd39wQL6ThDwUGNJUjJSRvac4yjdcYqC",
  "key40": "5rLhqqKTdggtCerLkm1gdfAVbanPMTQAs2Pbw4nfabFAJ1zp1z3zdPJ9EJtMnEprgcMCosu5bhuBE7ZNTkxXDKXC",
  "key41": "2V6w3RcZKGSZ3TF19uyWiNdqGtv8eLVR4HSFJR8YAG6ivYgxyxhoDD4PGy1JGkGFybWw7ogwaePYB9Zhvtb3BKUz",
  "key42": "EgoTWBx8ixntgg69BXbDtMwgcbBrWW3i3xLGn47M4dTf2rYWx2sZBH7hRRwmkvLcM9swpHf6dLdkgpUFvnVzLmD"
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
