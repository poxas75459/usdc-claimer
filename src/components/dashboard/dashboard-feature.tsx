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
    "5e7tc8JQFLngg82w6sHwFBsSFMWfusE7PseLob2TmVs5bXAmLg5nwRjQjW7b1663JoVJo2NsRGjkCkSRGCmzzgc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HXA3Cu1FjVsTxmSDLErGaTCi4dXpbPnp658PySwxoBp6QPn1pNuM2QB7aK2uPuBr2jeJnAwJKtfrnoCGQnjeZq",
  "key1": "4SPgFUszb2iuRfaCwF9xJuUjyCvXLJsQ9hEpKhYvCLVKAq1UTur5RMip1z6CADZfoY2TcH32aJhZM2hjmTL64Tq4",
  "key2": "2kFMZbViLjdXyWFBe6Jt7sxondoEbcUzvzww9ULRNGtsk9HkCry1XNeSkEd73FxvpXrchG9Kh4R1TjxnxoSLVhDi",
  "key3": "2LFHpznQ3YMJRLPnd98ozFbUYWyL9VUZAtPRet4XqvXKWXqSfLH5HSzXPTeHFNVDGG2ywv9cDHeWstXL8rm474Ez",
  "key4": "3WuXhHgnaKY5FrbHHBw7w5CLgaUd2ZhM3qb8QVDZXL21mrvuX3dKJn16nL6ukF2cnNRfh4TPuVNSKfJRqALUnHma",
  "key5": "45PEdj8W7husxobx1eLKJGe53nSdzzCMwLZTazDsV5QQST9oY7tLmf2j71Rj8Vo5N5R4jsMgb4cMwdGi8mHbmAoN",
  "key6": "4MXAgdcfMdpohiZ2McZzCSCG8NxHFcV7b5XXKViLuVVBGVGKDbV6GyQTu7PxRn35zHjhs4XrzC9mWa61x9G6m4YA",
  "key7": "4MAUWy2u9UNSPuk4RDooKQjCjyjMbS9L7Sk9Zkv5QV7ZFegrBu2oZBVvQCQ5RkSUd3AWS6LQGCzLaD7ErEWpvEQ1",
  "key8": "3u6o9ndBxmihFVkvKKcA1KjBXF9SWCkhGK43WaJ6sfzawXQit3kxqjAXHWQqeWChp2barxSkGHm6gbo3aKaHY2YZ",
  "key9": "2emhrTNKVKkSHVoLn7Mo9ceytshg8RkopPwUTxC6pSXvVx2C4irAwLjwbPkW9qSr4HBbUVd2DL9eVyiMWHcRCMo7",
  "key10": "2eWfGEsuJVoit6mqfqFnQ8e4aY5PETgF7w3jrqT6sVzCergxVtTgrw1HuszzXm9WVm24JBgxZuLyEUm8FVq7eid8",
  "key11": "5rBmre5d4DM92EiL2WjMsCYhZmZvJJ7b47PZeFUboPEgvQ9Evot9qgTnwKtsFZFR6tW35hJwc8Hpuir9VSwcA9tB",
  "key12": "5YAiyzPPf4wGxHysEgdP6Y4YjgNnZJWGXHwdZsoZET4UBK2kStCdqij8oEJjDfsicwMfp1yHK6stitGgbK4YRXjj",
  "key13": "2zMyenVpAUyZ8qbrdHRBxiKauRLJCadvCmVMMvSqcvP1EcvrMrJGmbCDv9TMpaqqchFRh1VMekyDngK4AfrCBu12",
  "key14": "4Hca6v7RxmRCpKuE1rDa1jFuTCe5E7N91xvrmy1RjCafKH4K9ggcxBBvUQMFXwGg4QC9ZXBo9yYFY6Bp7k9eNQpn",
  "key15": "4BnkCvbnVogVHJGCrbtSgAP9ZEjMuS1efWSf6GkCzco26twRYsW2vcQM8aXwF3UU2tLMrDYFANnXtLX45cUczUsZ",
  "key16": "5hTHbcGerevsB3CeQqMXU4cnvyyBx28cZuQkfk86RepbmgeqaWhSSD671o159Z7etGLVtpQtpYedSmYLM86e2dGD",
  "key17": "4WPRLdmiinGdvbdfzftxUqPYkGJtK4YnMDb1xdyMzvjqn5zS1DrmwSgd5dykbZNuSjTvhwMAhaKZnkskQUt6umRm",
  "key18": "39yPcpQT2SYmPDYZbzm9NBs2UbQvkJWyEzPK936XAzt8ZuxT3fbircSXvHb8AoHeJNkgefZGs6YPPMAyEW97NXFB",
  "key19": "zaTKGMy2WcCSpS7359amS2hRnA2wwm2PTYPrEFxYZUkLfbnK6ayZ1JU4X8fQAaZtZEXNt84qagtcRRdvwHcbGmd",
  "key20": "5WvAc93uYm3UkqMajYk1UaZ9Y7UWEqdFhxiPuPCcxaHENVfPwZqhi9BCbzW3TBqzTWTQNGLbTMCuDPGjR38aUSQ3",
  "key21": "415LKQEA7kDS1mVnwc3MNm8LLRBU2sYAnrmNTaHLiA7bZkv4YzeYWmohXGMhik6kCQmieRm5pQ5xH8HCHjtc54fC",
  "key22": "3ikB1XYfdEmxBuq839pCLKCZhhLp2BA9wu21LhxKbsHZyuQDyj3MDv1M79GVasZnhnki4ZBu6eqYH1BpnJJvaSo1",
  "key23": "4TC9hArBqxRuiKbeyQPRvHXb3yrSDqPUCZMxfrefaU3HEfe495juY5ELTu81rQHMjr5YCuLdDeiwxgCZEtUEbLDN",
  "key24": "2NpSeBCHDmwLQKzvWhCea25wH8sNQnQeDHEcsVMp1L1bLA7pXsaojv9V1BCDexJ5gUeQTcXDbdm71sReVYoLNAYu",
  "key25": "3LQGXJx7y2FSpoTN8Bbrs6cnyG6x35WxSvfhEfVLv8e7GmFeKF7DBSu4zHNhvGJfRASmZ3jJWXP91xc12B4qkzTY",
  "key26": "35bYavN26v7UZKXzVjpvHG4LYbVF4RidW5xzGuFhBVbVh7Y6SLf4HUN92Mc69S1TQmhetbwfyR4Bpy48XNdp3hpD",
  "key27": "2La2ncrMDCBGdtrfYRKtQUKAuENqFdgEF5Rs6K9SYxv6m9YGgkyUvdqjScXuAr3r5SXGL8nx6ixmakUiHfbyrAv3",
  "key28": "4j7cMCeiMnEYuotAa5xFJSPjmLxXa6ffaYnKybMeBahkDaBhZiKBtMUF63K8HDusFhWVgV34cPyxFFgcvwYau8YY",
  "key29": "36MCdNZ1vLnsm9CQo2u9WNjKaNJVBJVqnh148TE1LyjVHHFG2jkHEgzpiqTKyXehsz3XW14AYYLALFnjuwxv2cB9",
  "key30": "2TDavR9MsyvqeYXHF4Kfo4z8nFQUzZ16aodxy6WcGvKivVpkj36rfM2urnJyHpYPKtmfwomYsKS62TQyoeA6XxMM",
  "key31": "2roXF6fvjHX8PTDZ11DyMhSJD8kuEf6ouvTuFZ5KFkYCueT3ENbpHZ1grHQBcoFuXwCnyaNud1TCV2gftK7QRXqk",
  "key32": "4uKGX61Db793y7GFuzAEZNRn35z1S4yYtcNuTDpNHfNwnDAeiaoTFxKRwMBcgfhKRuS7HV7zjHg3dRSZD7y1YmKb",
  "key33": "3gY6QyUCvW1YnxvMP65iu9sR8GkF8WA23gV8i73sSyiEWzn8LVqKoxAeemtg5zrXJZBY1aRHdwfWzZHNgB5WBQzx",
  "key34": "4DeozofWcn2hN8eJ2wBskyCaMx1utEBBfjzefeiAeZQxHCStS5SVuutCcxjMDKHiJTN3tyRbFZdDPYnXStqmoqQ5",
  "key35": "52VDuYp33MXExAQnrx8FNbNKSkhDtxhBcQPKHGVV7aPtWaELHmMfFwqVutTD5cctRX4eHARzmhTESB71xfz641oB",
  "key36": "Y6nAnXJ8tDwCBmmWLTKARcRdkP59J3unLYaegDy6PzLWfhNYXcBqbS32VzizgrpZeG89oeADYPPrWTsAWwVs9D5",
  "key37": "2arWThtFGu1oqcq4zUUytzgMvap9sRGR6EAhZozUoNvdg1osDSt9z75uWfB1mzwKRHJtPCpoVByb7txHV3GLQH5R"
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
