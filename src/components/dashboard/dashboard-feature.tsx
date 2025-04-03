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
    "4JNkbECxgCbSkT7ViL5xBJkn7EnbvEoqN9bcvTtDT45CwxYQuwY4jGqXqW4NBApFT4mgZUabj4p26f2wQp7Pn92m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aY8NuT7njBBzR7RxfWcnuWyunjWNnLLoFVbQVnAzE3u8smWmkoreBLFPG6fBaNqkxyMnKL6tbvW2BMrc1nS5QC2",
  "key1": "2EnxsLNXR4Q34d2MJ4kwbXztQUVQqnxBGNhXmy5qX7tMejCieVqZvNQFe4vtj85YF84RCuSPmLEUEktPA4EEhJGp",
  "key2": "52f3cuDnwjvMhT1qWWbZLTNKf4Z2oAnskKUzoFpGg6u6cbkE5V3mZVKS16rM5Lh8kG3SJkfwjRjqy7j4AUqd7HJi",
  "key3": "4zTMSKS9gNQTAcsvMqmGxxk4p7BPQyfSSShhBmMTHvne2ZugTriJCiYq3si5uV2vAsHx5g6DrmmKecuCK6jgJ3v2",
  "key4": "346td91ns75q1wm3ag1GP9ebZ3xdaVoomNQyUKjnn5ydrJeHA179mdPZto24NXatuhUrKoXk6orNUUJ5B8hUHt5S",
  "key5": "2CRU1pZmNCztqEsgvcUNdsPAH6cYoeA835uzZ29iASVKC9GNwUMNFo1cHZARudSyKanFFYxJ2YjgTYCizy8H97yT",
  "key6": "2bWEzx5o4ASnKLmazFcGK4Zg9baoeLEtLLDwFH9rpuYfd52xqjQm4vAD7FVC8ecCsiZjdJzmcoYJdEcqxyosGRpV",
  "key7": "sJ6ozVdQbWCjn7vHopbVDDtpJnSchZjRrmtFvVDNKQgYxiGDQEniPSYDSHVUUFg2Qp8WLnq3GQFhtkhbhk9wPeU",
  "key8": "2A1Wju9DJGNp7wZNoMBvnNVDv9LsrkiJNnkoWqJvNqJ8vHzg2AGjT2goHaSjiERpNQJm17tyjRDQESVoARUP6zG1",
  "key9": "2NG5zYjmy8LwVEprupTyXCBABXws6uDaUQEhUa8VCSC55bj8WFg4EDxSpK2nWcamedVvKVTikTTtYnkVZ1LLabwy",
  "key10": "3CdVpMaNYnqTrMy6uDojCesBSRMV9uLSWAaQK4kqVbSc3FKQy1ws6Vu5kLBDgAeMM3GDoPk4RuGubQD3yefQFL3J",
  "key11": "2rPBeoCtGfS7zqppTWteVBTiNpcK78K5FBMV8EnHRWpHrXuQFfEfN88nMxfu6h5CziQozEirvQgc4Pt2LuuRWVeZ",
  "key12": "3oYMAyQtzxN8K5jhzHgfZBz2GdUiHzSjfiNjRwYxPbUSfzbqEvRnR4xf8WZK5YixYpJUatSUeUqchWAXFHCphwCN",
  "key13": "3vK2pEk1LaYHkB7QBt5mwECXYZ4MBWvck5VbZjtjXJ7v4CGYFTyWqButS7329uMfdqVFYjCPQm5nY2a7db13QjkL",
  "key14": "3knDZRm7s1Z2Zix9bvAZ17bdsxcjCHb2BHfg5x99YDNK12E3waLrN2LJBFZuchNC1rSHLkXpR8dHmiyMAogKam6r",
  "key15": "PcjtrqmXHgWq8RfNcans8JeYWA7G4yRuDWPBVN2visvmLNV9zfBbGqBbXHe28wVQfJ6gTWGxsX6wMyL6gFAdi4Q",
  "key16": "2JLv6SLDG7Qq1CJv7b7XZZpVtarnqQzcx9NhfvPofzuAsR1qYuXdAxsLBW9Lv4ceKSMrr1zn9oaBHREgXGbHW1Nd",
  "key17": "5JJpJs1xqtX8Gq5rkfDoaBD8HEnmA7bintFuxuCb4pbMDdjaWLBePmyVzN3w34HPjY1kXYqfs52xyj1CNa6H8L21",
  "key18": "2MqaVxdw8TSMiPwemq3rKcmozR1F2R5JmGqnBchnL9au5D4cq6j6WPwEwDmAyCFRSswPg6T9LAXaNEF1pFzccBop",
  "key19": "4wWmrLcL5wXgqHCHAtr4PhMrnt1JBcUveRJx2wxf5V2g399VQ8n21y2FCwr2Lcqva7nACU7hwZFnqCT93bKMjd9A",
  "key20": "MeDX9uzBro8yvZzMru3KDVLZcxKPgH9xpQGNf4PwSqWvcSFy9ycqDQW6Z1gk8Gmkgyh9tGZ8Jb43Fcr3X89ALG6",
  "key21": "41CPyrA1gDXvmUMgXByR5ocHjRP342p6GEE4Hp5QVck2paZJ6Q7DViRThnFQjnry3H1sapi3hikBrGiYUKZo4FwZ",
  "key22": "5Ruc12aFp9kPWZ6Rap91Vr9beNUEW3wS3t4Zf3MShNFGHoPYLzwceqdmouQkA352VKWStnniHsuriAEBktKhT4fi",
  "key23": "38psgB1FfZehTmCvUSKC5sKDSTEtWdBBc2uxiUzHnvpWjCGx3ckZyAdZGjz8DzMj8MhbXb1Cam1Jvk8nyJR5B6hb",
  "key24": "tbvWD3fX6z3agUYwqv41PnQXKHCWXDEXtiuSi2tLjGigQVmXLRqVx3MpfMR5BhFoQQmQdsLKi6T7uZqRABQzaFK",
  "key25": "2XAMBa8psV7QUnYeRGFQbWmciXa1Z2uFqYLpHD3EKC32HFqX2Ze1rZLPa468qY5fUu7hHZBw4HGm7r6KL8sQMrQv",
  "key26": "3S7zQCPR3E4UdmHgxBjGCfPJhXyqf5eSJzbBKQg6RHLqTe8sSY3nVGprJewWqxKq2CbZUHMQkCR1jDJ5s4Hcdgtp",
  "key27": "3roN4W8RGgxQyWvekvVuqsgfLVMKDYEUqM9EH8HheX1m5jWVmyaTHQvfG6hRWT58t6r25jF5W4BkvAiFktrjhCoV",
  "key28": "5D84N9MDG3VrFx5vpixoy97SQL4zHTKGp8SSTXAWxudEKGRnmXCvp7gVmxRhi5KHAvcDnRG76Xw12PgUmB6Dmy24",
  "key29": "2Ez6QegH4Gsz28fLA6brwHG2cvGsK4wF2zpfrEU5fPYaus2Pj2fUwh9hWB8MTuyxq4nYsMLQtmEvYhJ64m9ZyzNp",
  "key30": "525yp1CdPdXMXiRoJjzKwDvxotQE83puSLrHvaALfmPAanieckkFvMVNr47rdZXvYjX8wnkR3EUmypyVkWGjFZBn",
  "key31": "DA53pQCXYLnzmBshpiJD8NAFdxnisNqNgZvU42npAJ2T5wZWpqWeXNf9hv2Dwzs8fBa3R18KT38GV9MgseeB7Ws",
  "key32": "2MSHimmmmuCqWg9LPZQFJLuJWchh2iuJTr654TJUoFeLX47GMHiQHvd2CiGCwTTPs9BDvoDiZfP3A2j5DQGC3eqd"
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
