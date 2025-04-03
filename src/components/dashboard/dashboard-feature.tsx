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
    "4wfjLb2S3NijKHxbpeodZWoqLTVJqKbwf4wFSEiYzT2113QKtVnJUWxDPLYydkufVTdcrizsxuNURcv92AwvX99p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MLAciToS9EmoEYM34syWSyJhcj5Zc2vvGseWYZ2uVK2puMrgwenXeHWweiyoS8qKy7ybHpGEEgngEEg93cS5B84",
  "key1": "Y78Biz49pEfkeGpFh4tkkf9CMS499SkZWmU25v857UfKipMDyd73JMmevi54uULsdFWE37LuM1J8j5PXFJARhdY",
  "key2": "e2z4tEW1iF9TJ8sHG4e5VWQZcW9YWf4BePRK8gfnZEeoFchaSKgBBpiW3bMow1e8hTozhTe9SSinTtAf4g94usp",
  "key3": "H3VTeyJoR9uNLgZo4UNogdtgthtUL4pGidro6R6eCfCSdt7wGo6rpzbCT7niACcBH8vr8QX1mYakJhvLdGRdDXj",
  "key4": "3BX9XZqZs7NqJwY3tAe37ghJbSQzQrThD2ekdfQbHM1ZmC2ePrP7TPwFytwqJK8mAJeMwhWYP1WXiHLVfhDJw2zu",
  "key5": "1uCdMv8sCiPCPUwFUDJsr1jDgk3d8YfVR9xsn8bMz77rfuFNBHAxjZwqHW1kpNUdFhr3ueD9mAgb6FaqKWpFHWk",
  "key6": "3m47ANsDWakzby8saGrMmcdoQWSfdLKmE9zdBUmnhvNnzchBcsubRkAUCRRa5pD12UgoBYRXHvj4fpTyfwyDo7BD",
  "key7": "4n1NNW5isv8ptsQWFvhJKsCucJe2M4fKaSSfKEPb3f9oYY8DyMkNsmmNRMzSrKeKd8nQJXsVs9A5Vk1eyawt72jW",
  "key8": "5tLt5HfJAmAd8gf9Anifb5djqHGZD9eyHoWknUtjhSe6wf48qZpGWk7QzpoxfWts9om7Li2fEhm85tMxZpjygEQR",
  "key9": "v8wpUwE81JU4AMPW8zayab4qGhKBCTkTNbVrF6Wgqm6zEuEALNMxbbZ2aML2KGRjDjpZ8BaUacmdrPCLtAfA2oP",
  "key10": "RByo788uzH2WnSqHnx8MhY2kDKtzaL8r5YXqFp6H6TuWiasEFGcpPJU9sbfCZnLRZtcQfvGWzARQRYuZKxVw7wE",
  "key11": "3bMhMTYWD5johV2iz6jEbnBRbKe3Y2jL3h1VMAxxnFr1cd7Lhqut96FJUFooEXc8JSV19oUm97Ap4bq5bF18KzG9",
  "key12": "5btt1t98AWbMMq94k6coJYQzQb9Lm5urdDwhhJmNnPJMsnnMP6J5ANQLAubsZ82EkUMJ4npbM3QhFsRtjZjNvSEp",
  "key13": "2noys2WBz8G3Xpx6jNS7iafyFfG2hkJ9gxPrTFhh9JB4dQuz45RNjFQ6ho5sEycFfCGXPtEWwfp1ubVsNKtaafws",
  "key14": "5ALb4LBddaHHuodRi7yfN8GBeukgTPsRKBMfDBSxj1Xat8JydtQRxdVSoTTc2QJyjRg64BKYbBZrrq14PrthA6Mv",
  "key15": "2SZHFwstrae2hdywF8byyhDLgC6NMQRJJRN7uMMC8suJjCj6cDkaH5dbWX35iVG7RmEZQgcRV76Q7DV9njEpxHc4",
  "key16": "2zofQe5Nbst6phUQrMdzYMQXou2XVrrgLhQ1PjwpsiKquEy4hMzLsyEfu9n58fPUx85NKEuQq6bHiesCX8oe6jfg",
  "key17": "3FqmZS3bu3gYsF4G8wQuCuPh5pmqMzVBv4iiJm3W2eZatgwC349U6uMbzrGTGXijJucd7anCHBwnKSHrirZtXFMY",
  "key18": "2FGgLSqQLxHB4KT1FwGLpxUfiqKuMPihHGupK6oGwQRKozGfgT7iCdna7CrmA6EYXThzXVYYLsFawzLhARhhNhG3",
  "key19": "E36WTSmcYLmRKzgNZGqmesLwuaNVnkuaGbqexg7ZkrSMXs1v5GSyyAp6Ddx1GXx6rEvYc6fqFbNQjmFngHuFrdt",
  "key20": "NLbYTE4T5h64uk1MERMr2GoZczAAQQbzdUYKjM1bnape645Fej9n2cVBdPFXbLfN6bvFZ52psKzPkdzY9d4NxGL",
  "key21": "3eChPn4kVD7mJwmGzBeAgy5Ch4M2TKDiBpU5MyzASUHqytgNf9zMUUbXCJPQVBDxxAQaWvrNrrjEGCv5ooz6MPji",
  "key22": "2C9xnNrRwKWgkMiFMEHF4JJ5dXBCTzVSz6smEkVJumAWEdZ4fhys8M7PCLdFFCa81PQXHpbxkC9gPgEwEvLiHsgd",
  "key23": "2Pjm6wv3PcwxbwmHVAYokTp3n1DBinBXswX5uUK7UpPASDG199GxEt3zkdYYYgSLscHAhATMMTJwpbqHeP7HMFKc",
  "key24": "MYJvTELuijpbfooXXbHLaTHUR52PtV979wesjHoZNMmYkPPTJcT7PiKfQki94YzGmAD8gLpYr4cmqCsz1ug3qsY",
  "key25": "2FAjLYpdecP58czWawMhEivdpXpfjdUryjEZPzAR8H9ZzyorTayhDEFP7ij8fTZ5N7r8AiHp7Wad3PVRCTxPYrAk",
  "key26": "3EE7u2TDWA1m752t1quE4so2i5jNVzwZCpRHDWY2imfu9dbWgmqsJv9zeN8QAwdfk3XrKdcGFLEkGq4kPoN4abQJ",
  "key27": "3fGmUBBSJaFZdbuGzoKigc2swdwD2rnHcAxWiF2tUEBrdABxgCycjL4bZnDNpubWTN7qf2awBs6aMK3FGhQEf4hD",
  "key28": "hCai1gjcXvxz4iv2uki6xJkycRGjKTceAxnwCZvaSNw4P6eHGtB6fK8CTiq3r2s2THppKjKHBZWgPDAvitujYdb",
  "key29": "3MDPVv6Z8mKhBgSw56MhBqTzjiQRJSY6a7KGXtDg9FZmRLxJoSewJYAB3suQZrsE3T3e6mWQom1wprMRwRXp6B1",
  "key30": "2Ks9PuWoPiucuwDTByRf6XZyF8Wcd7m6yDrdGF9kt6sgvk6n6pspZ5BjxtYPqpCbWcmEWRXN3qkL7rSuy6dA7MNe",
  "key31": "2LA26rbbxTSwU8j9S45gVZ3jSppjwrJmo2BU96QFgGonqoj1CbcRLE682GScAWH52Yz2KTRj9ouSz62HMQFebnVr",
  "key32": "4FbaCPnwoNDrq9FbFzFm5JcxQ1aBQrsPMN6Z2MdGTokPNir86Wz1U6mRtd93rs26neayhoh9vnrQ6H3Q1ymBfPjh",
  "key33": "7Cy7LFvrLsBWpzYPBTnpSkw54m9i44XehNSttXKRsqK4txLhc8dmBDdxe6E6jPsfLjpFZboxUCDXi33rjKGJw28",
  "key34": "2cepJKM7iCVU6puD5JXAPr36vp23Ls7AnKqFrQvLGuTNFhfqr4HMwTou7gef5BjxXVnatr4ny5jixierUnHn6Xmt",
  "key35": "2RwEeHnxD8vhw7XPJsbKpenwYkppSkPmk5gxjwmWeqoL3AQzAPNpT5Q5XcirYi4YD8e6sVvynSbJ7RoucmMtcgMG",
  "key36": "dLxUvhTnqs5LEdgzN1RGPa3EqSBPy33qZW6oDFurZS1zT4c4Xwka97NFhk77QVzUuuwEsVXBTNNTxifgaRXvV2R",
  "key37": "HA9iFZEqvkSB1LqaJyUEkWWidVtTu92ci6unM4EubeW6nhGVV1N1AJNs9tW1HaNQkY72WWPWjGUKHZwPkVui4bA",
  "key38": "ooQBhyYtMgHsea9jzJ2s45fH6gWAzS67XZmwTyVhVmAnuMMuJFqDVXn6xe5jWtMEQAXcDGy7GRydCyB8bM5Pr1i",
  "key39": "5pAwe26LkBq3wGntmiJnM3CAaJJmBGbTCYQgMd9ihSjEz46aFk3k1vxjcY7bUEac6h8CXzrzbVfKLdHbhcnuXr5e",
  "key40": "5mL7WJfJtnXvq4Ly3j4uHzkumhe4GLgCjsr27ZpkkKasZg8VCZzNXbUnKi89vr2nhePVx8GN18oCMh83jZUHywsR"
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
