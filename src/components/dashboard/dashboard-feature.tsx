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
    "2jeAwFkfVJnHuhG6W4t2uEz2ifo1i6wMD8RfZNr9xmjNEnPoAGSXsvBWUxFnxipFxY7TdhFU9BzXA9ZD4TLpBxax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYVqv3RzRRtfK5RzCNSJ5pEQLL5VkukDRNAnaNucxtLCPpy9suPJHFSC6zBZAyzU66MUo8KMByprKbUp3u9ZYsc",
  "key1": "pg5hAdnSUkxM9tajb6ftdBu1aL2qphhj4uxPdnVdNAxGVMTtAp5NFraP4bg66bzMKub7PVRRgY2XxMXcJimunRy",
  "key2": "2o5imXdas8FLJqj1h6z6se87AM9zwgVVNLcPpdkwcZc9pBJk8NwuuoAnRNgByj6QZPTxQoUjVaokuGxwPF8HtWg5",
  "key3": "5pidCoMs4DWQvN3AJASh83jkyAG6wypD8L173dXk9KSxVJSvqbcqn9GSu346rk4xaevVxQzftHk5civTmWVMSNeQ",
  "key4": "3Uxks4DQPQJg8GNe1E4B1XbBbba6BDFaicj2pDx2XNCvwBYLDXH3b8CneZkDNfwfF6evcgoXBphjXShSRRYu2PhR",
  "key5": "bMiAq8m6Vh3KDDj3eFRXZ5s4HXCMv6wTdaNatWEg8Tsnr5HF3wAtuCeUrdLnDQTkbSkrWyPnZnFseJ5bRd1wcJ1",
  "key6": "39FXYrj1U3eWozQPH1TUdees93JtpBJXeHZq4isJTcRcgk9WE7ytdwcd15cE4VaqTQbD6CbZroYPDaS6zcmFtrVT",
  "key7": "56EaqRLhXXahaP9UbiEghH9QY8ewKujYC6eC1mFVeihEmN16tsjD22dAbNrssAQxfiJTEG5AukEJ2wCDf586PsZo",
  "key8": "2DALcannsdbh71nuXhAZiSg8EM49wsM8WHY6RAQc4goUVqYXWPgyfzNqGB1rhssMoKF7ZfQQTaqnWCgqy6nyCfVq",
  "key9": "5Y9P8omh6FgioncvUKd7LQTbj267RmZJ7DWt8PcXnFbxcGEE3YSASz9pVkaVSgJ1mep25vBVqqSAgo9Xiu4kCfng",
  "key10": "4xRkGKtasFRfXDbVPL96up3FnUgEMXaQPBCfgQpSKkTjXECyRzhc7gocMJAqc8pCyXnJiAYpVN6imKqzNLiPFvGp",
  "key11": "2s6ydyhjyj25LKqMLRAVpqoz7LsAXuxE9vrV1uMAfRuGb1ybazPkQg87JauiWZvbWFksEYhq1m6Du3zAzwQrLFcQ",
  "key12": "rHsgn4tBXtVu1ynMpN8wDVGeSzgg3tiDgFNpHdgYVDMRU45WxKgFRAghvwvDFVA84x7XA7md9FnK4HVBeAPXkAb",
  "key13": "3CMFxEMzwDUQZqz9tYv1KDvbrUbrcU2ESttsgQPK4YFaPW4hLYfkPjqpD8xMhgvJkfqBbAH6gWcbNu8FRekDt9hS",
  "key14": "4o6vDvrvbtscigHDnnPXJQVbvFX4C38kWKeQcdMBgQ9JUKq8t8GUwxpz98ipSarK9poA7jRoTd8PTmSfSMHMLjqN",
  "key15": "2BVBeL4RBNL7Kqswp1c2A5Yk8whs5AFmjD4DMtqT7qDirDG7TULGpyE1St3vgGMasZbVMENC9XaoGPauWBFi5FDL",
  "key16": "3F687LV93DtrPEr1k4kz39SHLvrvxZdkhbWuJHJAuUVxE2YfNtbMAVdoWBR8FLmzi5tFzNQjv6UmGZc5SFGxheV6",
  "key17": "jk8JBsq6zpTQw6o4vpDAbtgnR7LCDqQ17HjYugwujdrqXCguxQfStEYDfwzNPL91mUGoURuqMsFbtvNTKhhaCKm",
  "key18": "3GYnSWmwXKsnM4f6kZDB9R4nAZ3Fwdrqvd9GtxiqSDE8GZM3wnsSLsyUPgJz7Voq97V2C9wLci1rHxNhtZDEuS57",
  "key19": "2YjA5Ama6NWskE6JvMJp8W8LKMsckyYUZVULuXNFy2vF7vYtjobLEHgyB74v1kuAaXiwqTwEje1woTtsv1AwP5gE",
  "key20": "34q8Y7nxmP99FjXxU7PrrsqVgjeGSZ9iqcmLqPPDwXaouQE2Yt2w8ToQonFUWLhYAzdWhYs1Xo5JEE6yL9krupn9",
  "key21": "3v8Hpx7PWW3kMSoJN6kan699qsD2g6XiuJDS6ja8yH31twNAjBM1gUHtvhPx8zy9H5Xp8xciptaTA5ag4mqHAiJ8",
  "key22": "7yc1XX8czvCpfNcNF1whdcQ6hMJ8eRh2GwHbrryL5LPsS36EqSYMD3GojHQ9jDn6rtbbNKtRRG753VkqVjNioS9",
  "key23": "5X5LXyDMVDQxFFsMusaXc9QQdRj3E7ykKmnxoJWrxQ1hmC9drTCvG1QXiT9dPytSvrN1Z2GNgJttvKiW3XSmqRbL",
  "key24": "gJM3PAGCh3D4eB5RsLy8Yr5GMMyuyng1d3uBQdLybX9G7oRhanPyEBhUa86Wj1E9cry4cU7GQk1d8r5e3ufbdPe",
  "key25": "5TDqfEh9UHLfQAMAAcSAUL6RxuwyBJPmkbLXDqQYG7Aq82YcKi5P6AWTjyS6ZifhFUfC5U4Xz2jf7DNuu2M4penZ",
  "key26": "2Dc7bCK856WQriPZgGHf3YZ7Vn7UWnss7rFfFA4vonmNdHZtuGiWNXuFJuRSQ2X5o5RicABJcT99KSoitSkkEkPp",
  "key27": "5GjGpZ6M51BcHBazwYT7uvQxJSCDKWK8Wq3SVKjTUiNMAxcP52c7fAUEKSR7RogaCi1GmtKUqmsBhnsSDJ88UCJ3",
  "key28": "i69HKfSzgNwfqpSbncWwRymbMfJYJi15h7K6TT4RwThrm3ALyY1v1rsfmuNS1Ac23mfJRUYHHrivjozqGDD2JJU",
  "key29": "3nw8CTUc1Gjf8NcxbnRnENBrxJ55yJ8Uv8tHV2op5Sjk8KjrkGKt3djhwnCRv2zUsCmqpSUnSEw1ctkawFFwYBSc",
  "key30": "4tHm8WZt3cz78mWxsxxw5d3JP6tTHJqajwetyT74M2EACYEPDEhVkvV1t8LpugLeiADrAWka1293H98PJtCWR1d9",
  "key31": "4asG8cJgn5ikkZuGvrBDh4dJPqbtd6Q6oADZ3eHZr5Pfs1S1KQVvFnRV1uwqF4dXnffVuGUZMLJsHwFUvcWKrU8T",
  "key32": "4uX7T3PtzNPCynF9XERN6dgcuLnFFaCo3mJViSGH3VYPS6F7ddxojMa2FkU7icDetbPnDvDo9QjgYRdGWu53iVJ7",
  "key33": "2p1AUXg1aKAAYMRfoVNDt7eyQQdS9BDwHU886kVgF8crW6Nv9Jdcci4phzDU4cXArqUH3SPurjKA3HUouTCY4cxA",
  "key34": "4w4yGUGDStaxTE8ATzvUcnEKc6vRtXNGwypqeN88nfXcSPS4NPsHAEbY5zeiwDVM4LVZnSRcbsTyTLatBJWsRGW",
  "key35": "2dhz89XEnssiHuK5nDv6qrBp9QNuM8AN7xVDARQw4jjDNuUbBf6xxMoxCfVw4ngAUNw6MBbqxQ1STXfXaagigSTA",
  "key36": "5JNakkVSrZoXz1NaRCJrHsN7GBugqYypWbPTm48JFE16JfLKBxqaudLgDgdk2FCu1qxrR9VYAjBqLpkJ3t4gwD3K",
  "key37": "3kx3Dj1zX8ygvcekxKvua2HpmGzj3TodzoGPMxgH8XtbWfymFnKLYFLiDPtisJpxijUzqEHdjwk5cif9QsxJVAtW",
  "key38": "2bszpbgzMJorui8FHkmhA4eBUsL8DfHHjyzugVKq5DKsDMvY4G2imhUAcBYbZD8n4rnJdG6SyaccxzWBB9SUD8y4",
  "key39": "2sS5A2XnAhaVVFosfNy2LRRGz4QX63jetRXGZEDi71AtZVbCEE9Wkik6V3jvyo3N28N967nkW4KPYFjw2CoYAjXt",
  "key40": "57oH1i6g3PT5DxXSyoFxYF2FFAmXakPpVm2m4qLswAY3VoTar8Ezs6c5TqadxpTVt7Phcwh4TDhwv1sLdg1yX7CT",
  "key41": "3x9bqsXCLzmUNn3SVfY4HsUGgvDino5ATQ23zGgpuEKdPwVpFbj3nbAsLsnXVNJHKsBKa8d1yWR7dnkaUvBWGEtC",
  "key42": "5vDK6NmqSXZKV12qXXXRcfmT6itabF3sXQdJrkVYcX1QQjjbiXRRi1FHXqtWuHSbSHgqdUziWTMqU32dJurETCeS",
  "key43": "4vtU2aCrrBARuuzbCWXVLBgT3azhjaay5R9XdFExwhPqAFr8dvxqdwhPvEY6H9w5JauRL2hUjpFSXH2f8vcqEGhE",
  "key44": "42msjUPtTa5FR6UwtLVh9S4DG7Svnzvk6q2xCPFx9WNkqDNB82XZmWvVDVFtA9BPkCqziyJFQ7P278sjfycYurSV"
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
