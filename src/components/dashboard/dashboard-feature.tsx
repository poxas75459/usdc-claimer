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
    "4Mtvpp7FFXZaxxSDD1Ga88QjwPKSyyLTKyv5AZ2YDhQ6jzkD2ZEYFbfZ4Kv9RrKLQY2KzUmHVMec2VKhwqxsj96w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCqfPYeM4AzUA8mKHoiLRk6ctJ2dvYeLnCkjDprkXrVhuU4qqhhn7toymCan4zgxiAVoQFuitiyz51E1ob7FxxL",
  "key1": "66k2U1oVawLjK2boxtzSJWMsHECqtFRATswBSm2ymwB3b7N8oH7vs7SohpoctpYQviumq3wcRm4LTJndGmqggpMU",
  "key2": "2h9Usmv3yVM2LMdMTqHB3U8XPZWf4avLE2G9CrkN9ZoJZcm68RCRy5mndJehtyspwvufBsDaQbnzvJTDE1CTWBLp",
  "key3": "5XsB8SrAZLsgkmZpbivPBxesowe3UHmx45QYQ2DgCf1jzWJH9zCxS2LEozKxkGsRa3T9BeQYE4Ww7dwRuMoPKwM7",
  "key4": "28BJo12xNjY7tJNQx7ECUoHjFVuGFYxZZH2CwpdYFrg2EqpRFYoYCKbsRpq9LMu9FLvJyr3C9TS84Tff5REk7xyi",
  "key5": "kyDPLCMtDCfB3ohXoerXd6E9z4zWr5Zap1EVMSciTzeN4mtMDepJ8T9qahzVLMmdoqXdECQkawsRU57Yruzd2we",
  "key6": "2KUuTXipVhPCxgPPJaqrYEC2hVnb6VB4uLwKUMssZ1Vu1p5eoN3estuGvvnTahAZPFWQFdgmbXzDCeLETEpT9rCW",
  "key7": "59DKZ9NiXdqZMkPXXAcYFuh1M1xuGsXtWHhburvKFrZrxLj43Kphjf5GSTqAsaqq8CjovDxdMPRDnhM45AGXc3Ra",
  "key8": "36f9TB5gYHs2a4UrQSJ3VvEPNS1VGj3AuQHALuwWRqafFtBEqVogWv4jUBX6ZsA39BSPQPpEHFzmMLjHq89oJbyr",
  "key9": "4oT7AALUabnKTu4kKHUujTaD4vwxiN1ovfGvjRs5enpDaQ4HotZXk75ztZhJveARiCmQnYbpihqny6UtqJ7tdNrb",
  "key10": "2fvgBHvtau3wYaML2ScXrppTcTsyx9nUAWReQJitfwjs3wooYWUNAFaeZ9bbPx5NGyRpLcn9xyFHxCdnQ3oPNun4",
  "key11": "29Y3xh1RN87a8wFpwzCTArbLQ138GvEz5Tn3QFLw6JuE8knumUXPZ64h39EKGCgn9msgMGMZrS7xvki7j7mE2i4m",
  "key12": "dNCqrdLB32H5mJzQb26vvaQJ28jDT2ik9Q1uFy4TH8pzF5SQNGAdRSjP9bdDibi8yyxEvkoYQ16TW5G5oW6gcUv",
  "key13": "Evd49ANNH4Fr8knuySWV7k8iuLV86GGarsdPqpdNL5xJkiJvuohfyqvsTdtpofUrnNyPoHuYzoWxsYCEGQjfjvW",
  "key14": "5SUWPp85PeLuofYeeUwp8vLKnzMuLogaXiqX7RHHBDRn1sLFtgCdHUv2iuEowfAE2XTJXrRRMwaw1sCJoRCJdLnb",
  "key15": "22P1431Dew3GkdEiNj9jWH4veJDakv3ueRWGoK2BxhCTfAEsr7MqcbsLYKSU7bsnM5JCahhbmjUCs1hgw964nCJz",
  "key16": "NEbGW5ygxZBvGZ2f2SHSBYJzDaC7B8tJ8t99e8zbw9uSQbvoa6rQ2bR7LpmbB9J2VuVPSiPL8TgVWsZoymNNbvV",
  "key17": "2AZt5hhvGF8AquZMCiwgQzTZvCppAtNktYZBiWWwJkdMHJ1zRNxXBnkAkuytp4CWeKEHPyugwrbvnknu4CncqNGd",
  "key18": "2WufcBJ3DLW7EP9ojXqT3nUh8oThXugbc9n7U1CQsKxQtVCFArTXTJApcWVkoAtR1o286oFeqKsvcrfhkSrYAUUh",
  "key19": "SJbKUDm3x3xmrDt36ySPsUrEzDfL2kzsz5WYVDzo7mqangmEBsnnGbNuzC8tBVomH5niBChEv8RQGnmrZJuKByp",
  "key20": "5Y5GrDekCC6HN3vr4GrzP3515C7XhjeiqLsgCd9JdJBEhr1BdC8Qhs22nQenj5Ka1P4zFkXfRpJrBsxaCERjz3Fr",
  "key21": "12A7cT46HJmMU4oqS655hYsMdW5eodVX1BLz1RvwwBrrhMPVyAXTFBUo6ziY5qrWpw6yKxjCTwcxBGgRGqhHUrSQ",
  "key22": "wJZD4325e4vX3K8i5rekXfHqDraX8wgt7iQyeudDRdcv3AHLY7hsTuPiXaJyVKETzP6BCbLcYNtoqsyZrHe49gt",
  "key23": "FWwTzkVjMeKtS5XvjyRSYiuosuQqbUmuixrNNp3Sojz7zWFxRGq9sp17ibx8TEYu899gEgnVPvYJKc496yGi1rY",
  "key24": "5XrFPj5fCpe9kXAjqdMichdPHhQDLYiMSbZxyrA3Tmi7qPCtSrBvYJkYc5EJDQqqHVc6gw3u7247W5aG6diC4YSS",
  "key25": "fhMtUzLjuGeuzQjrHkbgNcxm5qcLg78kzznMziRSQaqmJDxLyB3KmnC6HouNw3xQDRAUg79hkyBu4TvN2Cz97Wp",
  "key26": "59Z9qoTJsa4Pm1VtyFddwt4894jWJS4cKhm54oUHk3dxipZW1SvGqD14svXbq4Tm3sxpsLMXgBVuNKb7NhXAsjfQ",
  "key27": "2Nu9TU6HtTyvd3beKapQVLMmQXbJsG27i9j4dWHbjDxLe56En4Ad1tU1DHzLQYXfDswumoxovuGpx1wzFPPEks9Z",
  "key28": "PGhQA3TTqfAdLyBUKgkCcheaqmp9fgoErxLSUJu8p2QJVCTUi22jT4xPanMQW1U8YRccHs3VHbtsUvWQWBRgHuC",
  "key29": "2xzzi3JpGHbZaiyVLq2PDqnvqTsuttNvNmAYbRcnvJUv3UnzbEzAaPTxwWr5dDaZEX2A4GY65JL3KgLD5FDBQLep",
  "key30": "5WptuAWcyjng3iEzhjQskCjfVzxHZunU8KMYmjKhc6RLJRmussuRgqgPUmsa94pN8UMruLRPhmpgS2n9nmYNwnJd",
  "key31": "5Dbu9ya3qimuU3scJYEoxiEknLkfEwrQvUkDfUizFyAAMBY3ChjVY4esYwuaSS4YBnnLNWVK96AFCNgntJbUbjbd",
  "key32": "3hxgoFA2MyDkgA8zVv5fJPq98DM8LrpHnczVMCrvj5czcpX1bwfY3DRrNDULKBM4kbDiT1VbSVrsrCfQP8ywaq69",
  "key33": "rzc98mEbUAGwQ6bzCf21oPTHNpropbVBuSLp2CRpNnjyyECxU3qwQKXjc1gkavZK49U2sMxpXfXFc4sBYGKjYuF",
  "key34": "27yNUPVm3by2KTrHV3QBshERt6j7QrQyGoAg2RXkH3gUBtvJuxFYGx5U8ACUZboAXYP9PUo3JdjPQhaD3twVn1Vk"
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
