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
    "5gAi8oo3WwtqCGpkyQJRnJUiaDTpCfWkF7QUJzzs4c21TkLXguc12uBuzpNDaKeeuswnpwYLCED3KSAf8BeySkVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64LD4s6mkqnQFA2o1gZDqYwp8BXL7fB7iFFz7GTVKXWz551t3viqhmux5nbti4EGtAp7kg5g6stJ5sEyHwpZjDfW",
  "key1": "3M28W8j6i3Tw7MQtPGzjseD5zbeQdYcAmwashEwNcCrfArTZ3ZsxzwXcmDuDpVuD49MwKL4zG5ZoxJnofy2fh7CG",
  "key2": "mvnPaySwaLD1ArZ1DFBkZDUK5CLvF1emTr2h1rju33yZWfd5QtVrptQrTBviDmSX5pXNjtjKVwY4sAmCGHScevw",
  "key3": "66y3omE9FsAHQa3Gq3RYLvcFvcVLtyL9WRjvoswn8k7YqNDqrPba33Qo9VSwibBEvy5HgtNesp1NkYjJTtxeAdV",
  "key4": "43eVApc1KVkSgnFeYaK7Gn4GpqvjCFJzC8aRCAuPUNyxk8uhomJVrL1WsExrwiKzDtzLybsAtf21yRcgevy6DvZ",
  "key5": "4d4p4RoyvpAQDR2ErpPexBHdHTU3RJe3aYBE9g2QrJroVUBd3nkf4RZKnADQZXe1HFVtf3LMwdxjqVkjtW1e8W9U",
  "key6": "5zNaDbnZHPCm4aWgh7sQor8coDfs4RRhfnZuJmJEj8Xk5j254BhzGTpyHCAf1Ms96prvhyENt32Zbh89AHTpoYEE",
  "key7": "22NtnrcWKpXfkQ45C2DFTGrCLEovowLBeVJcyzdmbgPD9gy8GBi5gq8NekPfjvwa4UmCF8nEA3DNmCU87pFxPMVe",
  "key8": "2np6LWCYHEoEzJw2P53VYZVDfohtEssgphPAuni2tAGFZSr84EJxhAipuX77DjttEY45namXqRGZqsZcp9rmyVig",
  "key9": "TcGNky7NqduF8Db15Hs3qFvpwzAhBM5JDoZho5dCXV2caFvMmGi18B4yT2f7VEWcDKWUoTRpwsguj2jXnA3hUP7",
  "key10": "4qrNKv7XN4Bpem8ZiFY9XkKwzX2Wob9Csh3z43oqJBfnAuBjdkmkwwPTaw6BxE1Ze1V9hNgmJ3LWXekTmwQpHF7j",
  "key11": "1jbAxzKPM5zJqfkQNE5RPXTFJh5hnQ3gL7sLw1LXpUh8NVHqymzWdYUvErBezkGAxSdgMV9Rzm7ULgkM9s9jFpj",
  "key12": "8MeezfST3vGf44C8oLHTkB4K5hhrboeuzxcidvE4HsRPFiethGhxYwnMYYpnwREtUwsrxbtHWbCR3CjLQzmWyNU",
  "key13": "44D8xhXSBU9JnW47pcStKG4iH7DCZvcWkaszgwFf1MvNcGiM7MYDaozrX7DyJkZvuQH12wgNU9VcZXRELq4FLXHs",
  "key14": "3ffCxaBT4pfwEr9qn9tZBTNxcefRAcG7fdkKm62VA8Pxk9Zv4bcMDXH8udTWsNxyKUtA6uLUpWEv8F635bLgvb5n",
  "key15": "32BGrHe3gK5zcykyM7gLMoJPoS3kF9k48MKbu3x4JimE5bMZQfNr8uNKsbs7UFhvpUM5ZDLH66eLTwm4P6P1hntJ",
  "key16": "2ZpkkMXpiEUXhVCow3X9dhuLX3B8VTeKiGQRgCTavSNecy9sHQk3UAGGH1NwqZE9e9AVhCxMXX9s3Pbeqhw1uGyH",
  "key17": "2eg3aGjjxjubBCqttCUxy9V3ADeYkGVYgRjxkq9vuK4xpkGu9WqZ4UhqXsKJUj9PDeuzi27Ey3SEHyQfqnEvcXWh",
  "key18": "5ik1EFZ2pyQQABpyqVraitFDzjcTpC472rHcLKWie4wYbeMH2jWwtNVG1aKJehtcf65C35nAjDr5N597sMuHuaqE",
  "key19": "5PhWts7BxsEKe2AVg1pzyJ1RnZ83XMZeZTWmvLRgTRmLbmpy5Y3MGv7vXWGiGNHZyBv5ruMXnRDi9bvtmasZ6zVu",
  "key20": "eKv6XjABAiEQrnGPyLGqnc9pT4XAqnUaxRZJSdChqa4kfeUjJK3JXTaUi9aSAwWycW57THrWSFCB9bzRxFP7XXs",
  "key21": "554TNB2rrbydZTVihPBRiYVtsFeiMmC6GWDYjcoWcNcqq5d8RfJSLiCtbhTJf4fsAdHpqbvfZZcPzgFyvcQQv4c6",
  "key22": "3R4hRYmynXH3J6DtL7VFUzjair1NZzgJ5BfrrNZfL3DyXqRrRiDJ6Y3gVh2QWhh9vf4Lmb6sPB2sWFdHNnc9a5kX",
  "key23": "2MymL5mfvNXc8yhro9tM7z4K3XvMDoE4jfxeUCDygStodtge3gunnSACd4QeRFLXMXbN51uTMasKqR979V19L4FB",
  "key24": "55Y3v18EPYrpxtX32MYcRonkjVDRKkGqvdk6JGrcBo9zYPp6YtvKXfCxEcQWXhuXgzy4acg1PKKsWbRN2NyJQnHc",
  "key25": "M2hVgtUFwbUSLHb465jKHVeuvtboKYr4V1bw86NFcbZX2jMn6JUaZb95MeyaR87qPC4bQ5WK3Wo6cgFvhPw6qiZ",
  "key26": "5m8ruUawHb2GcEnxXWJ1tfSSU913PamK8mfCkU5hzsao9nhJgC2LvXzRyoYkfU9azJxnA5C8hF5PCQDSNhx3PP7c",
  "key27": "2HJSbopMQHxQcCMuqRtaSdHJtb9WR5dwzwQrqG3iG5Dnaicg3SG56QoWDRkEim821feBHdrdHxDo9wwX8CRMfVFk",
  "key28": "yzNgPfMqQHiwjnNV4xNVUWySGUzhNG13SvCcxiuZ9Msz1YZMPaPXqkmbxuZPawvPQdFbK5gpNdPjKMHxBjPBwpL",
  "key29": "TtcvpoxKXiVNBEcfrduihoHm9GteFNEt21BqGzkDWHQd1UjUuEwQdyPBH5UDr2KDc8jPcj7Fmq1aE982DpbZjTp"
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
