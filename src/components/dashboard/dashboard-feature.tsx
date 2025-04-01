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
    "3cCfHGVxEHbF22z85vK4cWnWRXjJ4CqYJytPvHrcMBKVQxWfYAjivuxX7EzmzemqY8dm8rHH8S5APmWyz7xA2PVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkVZnvt9st1HqVxkZhdVPFWpy2uGUxEL1WtcLEv1W5W83LgZ75mXbb7fcpnU1VSuzNT7TuwTSofsgwFstm4zPfQ",
  "key1": "4pqgUq4XZn2tYDHzbxTRJuBW9RDkuUNZnBESE9wdxnJ2GBGjeCvsZrL4u69ddXk5TdYFAtf9ejvY5WmbrcnxRVqw",
  "key2": "arFZ6XUPCJjA4YZYx1eW7BBMfcJtNcpb9YxzChDgsNdFSufiAYAFytmfa71XFsoL8RfLfz5M9tzeNoVVSi4m6bQ",
  "key3": "2jxL1o3GdxcHRASYTr2gYN5nJt1PYrfU3Lw3XTk1Tgc65sT9JZadfdaYUH7drbjcBzixZRLfvn9m1zUBjAMQFvQq",
  "key4": "3LHWk8Vowk6jX8QEifXB9DVFBMcuk7nWTxsQFBW2heNPqBxHbEGGNwwmgN9mzaG2wedNNLQ1AH64wrczRV9sUq1H",
  "key5": "TT1y23AoXivRLPZG4sNvMd1R9ysi3ZKiRpcJRXv5adqv4LMrjh8yr1Yp88ah4P4YxRzJhkjagVChHpsL2gRCuQv",
  "key6": "thLR2Pb8A85CXgRQcmLosvA2JHmEN9xPsh9PyxeyTUVvn6Eko1WnjGLJ7nuNjM7Y3XSjKXZrBnJhQ7pyr1FgxNC",
  "key7": "ZpA7TLPyPcu9yTqz1pmDpeyb7U6jgaRhFqkj74LewMsUYDg86Xon7oS83JEufNWpaV6R1bjUik5zAnwQa3djWED",
  "key8": "5FCnMeMZVuX33Qsp3KFcP4JLM2GYtqfo4332p4rYwytdyvJgkjHijivUbb9askFv6oz3kGJPe7WU5Dg5NRmWYHq6",
  "key9": "4KMoCUuzkP17SkBjkT6vHDnKEjn4R7DsutEnehvzssxRQQWNKxW81dBqE8ABXE5ZrHMXBUQJqLHwWJ1PEhA6YL3G",
  "key10": "qm3QxwxdYG2dsNdw9gGuA97cx6eczVQGYhiANwqLr3LULZjrQMziwGzx5LvAQEnuyKkH87EGgCg3kU7GYx51nWp",
  "key11": "5Dq2i6Ex512MetHLAW6carB4t4kacpvmKFbu3mn1ynNDsXvTvz8MUn8KovuGatwrdGairih82trHMynrUHZCV3M9",
  "key12": "3oPjVhxsTYbs9iYHKNMgAG4BY93B6KB71AcojpVR2FS7aruuCjNcbAhsWRHisDHfy7DscSMDNM1YwJP3yZspAJVk",
  "key13": "dobk27V16wqXAGWv1zvFn6SwmTw73fRhc1d8w6r9awNFLiJpW5GnuzijkzTWuxpexVEwiVhTo5BivKMQkcZBXK7",
  "key14": "5rEhTYUMwZLJKUgBnsqG57Vuk2csP9m9WecYeqGNsLod8NACVpcjdxhX8SiranVeCyHYtrqzzKNZBbVfMiXdjMEb",
  "key15": "N6imAcXu9AFiUmPPchjYdt3q6UDnRF2QV5fkJWuWXq5NegzKjZ4XXGgph5SbvXKsnNSStn883QVoM3HQaYz8RBW",
  "key16": "4mYfzdvtwG1pF9u3CsMVAyAz3ZU5pgMBoV6eB2bvQjdN4anFVK6uSHjZrMtv5LAdAyMBHPBPRnHHut17H1DEoSGj",
  "key17": "PHtDJem3GNfm9J7zk43pEAAXA9stjgVgxYBfx4WMNrkfcFFQiaa4V5dCYz396bBTXo2muFQZK9CK792wWK4jdLP",
  "key18": "3KV5sjufVRiyF8f3dVukmqpBNRL9UFrUiEQ2mzZ4yF8dkcsMNREQMuJDZyPsLjBuWnfcKUVMZPbj3H32UptcfEd4",
  "key19": "4YyPVxTCjPWNuXpQWQmX4b4CJV5SBqw4ukjVEBsk22o1USHqoCB2SHRP21PEPRHw4frNReo5bMv2CYCZJKTr1iAN",
  "key20": "5SYmFBvAeQFiuZ5qAicPhuFH92h4Zu952FBbJUUAs6TYdnvAPKAob1CTSsVGnGUzN915YrQLfGo8vuGoxNo3B2L",
  "key21": "4DiLY4YXgxhr9Y8ESKpWb7eCTNZ572RpQW32DJsAsQTwcjEjXcg9wPVnEco6FG7FpQ5TYjVHpTx1yTfEtAtY8J5C",
  "key22": "48V5UwNe4ztvJox2RyBRw899to3TphiQMQt1WNd2FpbiiBntWyLbYzsPSorNSN4u91Kmd4cHxBEcbvbgy9Q7E4QE",
  "key23": "5pk9KY5ossuHPyUFdL2NjGpQjqWsioXMYh2RLxnrw7URq5LmyHDc9DJW33HF7iNAHNb4uNgpqTejtMerRsZByPjs",
  "key24": "3iMA4JEVMphRZgeWW3DdMFAJhq3HrAVH1Q7WBR8XzUo2b9wGswedy5b596Dnn5PnHGjazCK4RMWbJb8JsvDQ2RQp",
  "key25": "4Jv8xkcdRiBiZWkgsdhsEN8tRaCms8BT8iat9fs4vhpdJBwaidSM1YSNH51JGrNiSEaMwx7Ensek8q9kLdnwNDF9",
  "key26": "3jsSnRxk81yAyiYXhN9ggdDMEyqDqQai7KpJ7osJ8cyh8gg4p75hmo4anvFCPXyFdHNJ7G121je8XYuvFmhNQ5SH",
  "key27": "d5ESpP7DQ77MeH56SvD2KCZJ6YE6dnvqfBerPa2XEX6Jrn5TZfMbGwjHetYiAUNLJt23LLnf7TKG2evV1tgAn93",
  "key28": "4ZSaat6RXY7A56xb7FGH9oyR55zh9eYjfFezwq4iiZe3ETvmgG9S6sXC9FsA6YrYsv7vA3yksobdwbCVjDgNoBGo",
  "key29": "44yLugoBM8gU7yZhQjQtdYcm4fnmuB6wkAomTxwTLBQQiYXMDg4gwcwiiibxra7Hn8A3ADTJZA73PHuEBMmi5ZK6",
  "key30": "eBowXFCLwf6BzxkW8Gx2ck2FawvR3F4ioHjoDuWqPivE7XXostKVrJkRzUgotNZ6U7Zw18Kr1srukTjR6iBoJeG",
  "key31": "4JxSjxbUgN3Sq28t3FTcBEdcFK512s8sBnpqft7aZB1to8WckXivHQxuw3Zj7NhXHR8WJAmiN56yAoGJHrq9UUQ7",
  "key32": "4dz4DUaZ25ZX1bDtYvdsv6NiNBuEd7SiocmTQnuxLX9AwnripBQVDWWDyTUBm13XjK6Jov5WAbqCxendmFTiagiS",
  "key33": "5s5CsLxdpXZHrjr6FodFBdZiqsZN8oWceU65YvpLmj4auzHEyx2oEnsr9dDXFcudRawqvvqkrsGSt6yUmZhHwCcF",
  "key34": "23aw7mxHbcfKrUgrXtmttYVBECFDCVSpaMLuDypkfZHCjf4Ycnk6muh3Cie6D7geUWYLocW6qDKD34EH2Lj5DbZL",
  "key35": "58FxQJZrpoNtXwzmZnYCxBT7Qx8mnmrDB52J9myu1ksWi6hcDMDNsFr1464d14xSg5Ga9PmxcmG6sXDm7yXsveA2",
  "key36": "37ZFFUBQ41S37f4eaobuXDWkNrobVMHRLFVzwv7ugnFR175pW61FiYKoYhXMW9bas6aQNxT92DY5fr1cZzAgWxqc",
  "key37": "5S3E5GLi4Qto1uw946EZBiYXiXxrGP4J8N3z9wovkyRfR1eYxRRy4e5Q1FC2mk3MyAZNhwcjin3WjdrAk5UgkqNh",
  "key38": "32TqWVSPDymJbPFL7Q2EZNvzMGbbFhduPtawbbunW9uaeHg5UvzyUvWEyRBZ1SCreXJEHhd7ga41MinbtDMipU9y",
  "key39": "4cLZfha681GbqFwN6Pfo6EekmbQMfVHFSwH4EdQiCkCjRgzZdo4TH9omkdC8vzyaSEt2aok21HVCHWjYoHBNDtNW",
  "key40": "5e6kHAG4BHWi1k1QwjVDVckMSqb2ziLbxFAKiwHFBWPzrmqjZsMnA5KHBfFB6W9Y3aYDacuZhiJWmzYqmmib72Xe"
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
