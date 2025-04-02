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
    "2mp6LsHPtUd6CMQUp7m4WVsYiQrsmuVaaZomux7W8KigcLqdkeZid3KqdCRc5NfgvJTfX1ag713avt3EkTh8cdVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37tRWgzxb379hfwd6r5qvw4s5vask2M9Pmjsf79L6BYiapqQxWjj59A8gAE2fVWHtmXs55VpcFUXDk4CYjvGqjUn",
  "key1": "592o5r2R7HQZ6Fm13MbpFbB6YYw5zdG33NgfkTY3WYEwCe3ycNebgKwqGb1v2nyAdUhHCML4dbMA1uaXmGGYoJHL",
  "key2": "mQASZsDyBhhn3eS1Uwx4rVMrgdqdr4AraMf4z9NXnEMMkWTWBt4nq11UPR4u1KVb321pAXBd1yWWasMWv9AJjgU",
  "key3": "51ibkmBwR9q9uFg7AS6pipyNVXGjao4Zm9uEHe9cd2JbM9Y8ezEjk7UG3bBL4XC71MvWxJBpN7VhsiaTz53XrPaf",
  "key4": "5pZGSNBzr532V9eAKxTg1srrr1HSoMWFhG6KaiZ9xL12Xz7KUk3nwuiFnU6qsgqpu8J1JapyRhQ2KmJHHQdMDcHH",
  "key5": "5UwdBQP6ADpWmtJcaZikrFxy9ib7vMgn5FL3i2sMhyYrTGSmvUcRRHf9c5RQ4hZrmMMQvmAKRJsewLkmXYSsM8WU",
  "key6": "4SJrSP4t4WW9353pKdKuZeWLorQbYKNGh1gDCr6nHLw1BKWm6Q5DJ1jFxtx7vqEtnnLoMg6XDTRL6z1TZxjeFkDj",
  "key7": "3Gvgw68YYEjPRYbdKUTzVfMUVRA3qKrtjbj87qUmUncviaebBrhsqCLUKd1S8zKZXurxZmC9mHVuTp4AxiTqJDoy",
  "key8": "3wt57PKZJnaBvdPNAnj7CZnTz9cY1HLuavkvnC5vomCyPThVe94YcwYDzGea2R7cvNiMjgqjcJqWiKpSTavgWYdc",
  "key9": "4AUBEZbe8yKE1YP9abNvumYrTTdNW39ezsAG28xD3o5XoQrxkoQ83bDKWj8wcFVv3PZ2zxmRMGYM1hjHWFra5Ukp",
  "key10": "32gz98hq6TKM8VTjRUB2BJS5Q3gzMKhgZVo16jFdbPhYfwTs1WQRmDXHmHvZGw4QD1n8dF6aDfFC1Xd5TM57VsYJ",
  "key11": "5egwNGFExUoS1FYmaKSWZwi3LGSfSzfgGypXdLTC5KzPRTR8DtxYtfYhYfZwNzg4taiuYqJLSxpoNtb53orxCJ9h",
  "key12": "471BW6JUpxQ6kFubgDTGMF14qa2EZ51c2qE9TYtFW9zqtYZqy2PCqMBQaQ6oNXrmNX6XoZjnywhSSotMCd3S1jyz",
  "key13": "zxNnPpVPEEifvY1EYAo9Laq9AJ4PS1H3MDJPmpfFt2wL95NCbY9q7qBcXvVgAUrxHWaJettHGeRpBHDYgCjuno5",
  "key14": "3bsduHK88GXLxzY1rPPfhrm9MutxfBBtsGxgXhpH2UU1B7tD6RyEvXep9kntaxh8UDE6E2sJh62YxAgzJFjVy5Rz",
  "key15": "2VYuKpSCCmYSLNsE1oLz5gRSQATvNWR12kZBoMrr7E3dC39VffJxvLCj7VEXCyipLjVj4CAMTFDiULFqBkZw3uXw",
  "key16": "5Y8aEExCZiqygFY95NL88otYsYZ7YfFfVFBRpq52c7fKj5TPR4CYB5dGStCjKbRgDReA1vzXEgmJmqPcg7rdotQB",
  "key17": "3qfEqETgBjfFJJZ9jHvYpCHf9sxH7ABEbU4cF8ciDc62RzxEsnPbX7qC4LRb84Kn3M65Y9NiWmNBuEW4MDufAam8",
  "key18": "4Q3JAeECuPvsv134dTQVtX8SQfLe2r5a3YQVC4H7kP9XvAtoKsCcWbKq5HcpC3vg73ioqmstT4SGdQqv72WPBvtA",
  "key19": "4g3BJSw24igFdi8umRhCq5AuLsZgTp6MXG1Sb8LmgYvmhA7HGvieGRs2JzLBRhK3QSGV5WRjff7T1ExF1sNzLKJ8",
  "key20": "2RYN378YwJsfJcU7E8TSECh1mvihmU21756XdfsnSNwQx9tZm21DXsczcQniw4gMA5mnwzrsQY88zeAhEwNzespa",
  "key21": "2JmyEXzUdWJJhFJDQjYxTxf3H73SAA8uhDMnV3LeiQNAdRJatnhVv1wYG6f74biVHqRjqJqavqo4bCX3MQsfFyd1",
  "key22": "4MSw12LnSSG4nbzwFHd4QPCbCiyXyUiCgP33couNtNUaprtnmShFUiN4b9Mo2R2aBjtTqu2579rmY9hpdpTkksdC",
  "key23": "5wEStLR6JNFsM4cugzEbEGHNM3iYaVCFZSDuWmxKmAeWZ4myGJD5rjvRCVcNAiu5HSL4n2JhChRDQDRZYMVjs7Tw",
  "key24": "5t4wwqwBnPxhaMdz16yiSfTSUAhAXr9mjPNDwysW7PLwGFLc1vQvwHF4nsd7RyP8tjrx1X5H7zUA3QexsRGnMikU",
  "key25": "233Gnrdurc2Abzun8RabP22eSbkmU2pN3tsjg6tntkYL7o5o28txU1mNaCyhUuEp7mxVo9UqNjAqjHsz6zmtBAKK",
  "key26": "Hf77i7gcKVN3CHH6Afc4TACme8uDRbQxbL8UY5J3ftWxpByxuNjXpfQUG9pckDmp7r88o5CkNfAxTf6sw2rMqZS",
  "key27": "VcCRz1DdhXaGuhtzvJHJYW5fA6BLK6nRrtxmEJvQnZ1URrsTswCcYUden5jQyz7gB1hwsVpQyHwnFm1k3W3kvZh",
  "key28": "5Z5gSWjhazqH3dWq9hhvYd3Faf5AdSAPBqwfymGaNMA6VNTqGLRaZiiA6V5XnSbPm9CqR3u89XpsUeb8HMVGzPaX",
  "key29": "3rGCjvmAUhq197GF3ub3wW2PjHJNPP4KSACnvqaD55zphTC4HjAksCrEvcfTAAyMyETx4NzPbvFu8LV1Dk91T8i3",
  "key30": "31sqCubCNk9hG21FK8npNs6gZjhCocAZp8BQpKRf1KGv3jc968zxM1b6JW2TdsPs7XaQEgcid6ARod78NjTRmwbc",
  "key31": "5ZLRztvp92pJMc6BWmeVEQG7hWq33qMbrKvCxKzc23UQNrkc9hSYREFVWQPtE2UAoh6gcHgTK8qSswnV1zXgyx5e",
  "key32": "2CNTFUzASujPNRMrvFWG55ko8hJuUboArSfDZ3XHbQ4JhvDdnoCSJsDhXWVqP7GZhm2GYJ1t4XzkJWEx3tXhnRT4"
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
