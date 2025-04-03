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
    "3Z6qkxxgZ6a2KucKsuvo81ChKYLDgkFkxpiTXbhufm8NPaEC4bZXutH12HqVnWUqeCYMcmyd16PT91ee3tq6LrQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqHQhxpQcHCFQCTGYtYpnLMyijKVg3KH19YUBWSHFQcwFWy3MoxbnwcKhVAQasUEaKDyzjS6YRnUxjQPtbYzF4z",
  "key1": "5tMmKDpXBXUYvxQF47KH6QbKvPSkS3EYwiQhDrGcEH8d3ndHFT1Tw55JEajACRc2xyV7v59zyyxv9jtv5zpN2pPV",
  "key2": "3wC1ZT7towUC9uFaizLJNy3SUmvFUJTZGpGxis8vXqWsXDvafpP6egtVxxH7dFwtpPEfMCt84bVWHBZ12KyKdVnQ",
  "key3": "3DDxyf7q62izFnSwe4AYTtu4G1ZhCYbMJZYEUsXpRgrBGooeURXXqZ457tYyhiDnt7ZVnViHaQfp4tkgWGxH8AKe",
  "key4": "2DBiqhzXpndgZozeWKWeddCK9qug8QFk9UJNhuG4p7q6yydFQZCR4b1XxCXweYQB2PKLhEQ9LYxHUE5xX8zuzwZd",
  "key5": "4GWTtMdiGDe38vsjnBQpJGfFmtAM7GG6LWfuk9ogk5karorRpR4sPXGyjMiRnPqZhkX7dL9beWGZwrGgPoCsxmNK",
  "key6": "5Ty3LeaYa8m7zwbXHRHPZu4nkXZ5X4s13AYWRVbWQSxvqWrKsZJpB5fK5w99xDEtNnkYnbzCCq1ADz71bCVcE7Fg",
  "key7": "3uaHaJEKiKR2ep8FQ7rGkoS4URS3GQtZyZ8Yer3dMGQ4G3jVkdMRJ4dBVfQJXCQDL1zBrm3BwqEA5nkoqExcx8wd",
  "key8": "j12NePmunDo7SkcJTSB7D1AgJ12FJJAf56ry6KX7Us8ojeE3iVNCL6k6UpoXX9EeHjF4Qm6Q6XJR8EVcRvRGzYQ",
  "key9": "5zjaofWSgeToL6e7pUx8tkZn5Sz3qV6NNJeuNZqvAPtzyqS4M7R5mCaBvX6VLCdbfZm46H5HQ1V96HqjmwFCyYg7",
  "key10": "4dqZL28LykwUBgvXWFftfofWviVPXuUTmZ9c1oR8sx8sRDtGuLumvfwE9iriPq6LW39indjZ7UsTK5762dsSzPZm",
  "key11": "5Pgd8Zayt1QUPL4y5XbhX6MyHgcYQW4KcVqtEZy6L7mr21g1ieSiPcugd3Cd6cSc17utxfn6GLpuWjZVy3EQ96M",
  "key12": "TnEmY1EGrB56fUEMgwTBkWqL5Tt778QTR5wa6a3TsuKFbHFvFM5soznBt9hTzZKHmo9WykkHFgnqAgBt43sYdH1",
  "key13": "2ox6GwYWMqY4vsSiFrq5dJmeXBHjRcQuw2Uf6desU455huTLNRq8QsGJLGstdY4g4ki8qzn6rq3PeGVpN6yNJFEW",
  "key14": "5gdiJG7NCHCHHDK9HRiamCffZRvKhVXnAaxg1PxBeuxa8sWfY3jS9SCBy6LrFL2h86W56SwkYp2n5CbcNsWqaZUd",
  "key15": "3fjcbYZFjSueG15z9DXwjWGCQsjrEMXgHm5qCSqWc2W3tdBuUmRdySEdByaSTxaz58dxnUi8cLHzhnqXza647NFn",
  "key16": "74RefJhZtPNR7coxwds8TEojjK7drVCMbkVZCskobahgzGseSajFLn43TVx1vk4a7GTep1CDavSjzC7HHw3aVmS",
  "key17": "2p3NrLbojsbNkS5u2f7yj5Kp8F2bp7zmRFnWemWC2a6pbyzQ12T1hUMDvGJt6dcV6HvARpxx61JExBMcvC6D8HBv",
  "key18": "2gzBKb3evBUuxndJMGkGmAP6jQpqU4ztsizuqPyvNdEDjkJXPjcx8qecSnMkhArwVxTei8KJ1oYv4gzhshfk8LCw",
  "key19": "27XTL9RK1QCPX9rC1jdbGnbsjj4sqhkSG6Fy9LevJ6Q5dk3L7arMQMaSH47zWpbQqkE3DTYyLbC5GGi1thuL78Wp",
  "key20": "5Ay1ZxpxnoNB3QqXrhvtiFUa75sHpWTDXSVcKvov9FSCxoVaBhJ1GBjHhD3rHN4cS1EkSveTFutazzzpHDa7KSk8",
  "key21": "5qKJBUqZFYDUthduDRv2s3UpQmiiKsxpTb9vvyXjHBYCNT2U99yCPDtgtm7TYLbSYJkgGkdeHtKWdujjTKPx8oxL",
  "key22": "3PyTRhbKScBMcGvVA2a79wR5grHqNLUnDXhrPt8Dz36CZ68qckxKDMmeDy3hku3qCWkEtev8Kvk2MQPXtk4CDtbb",
  "key23": "3wxUQebTFEvm8Ly7UJW68kM9NH49YgYuitvSo58KiVFf45WNjn1nQnVceJ1vHnWBMqKEzGzFHAGTbnLXgwseA5ic",
  "key24": "5K22z67ozqgLPu44j3QXYtcEksjyh4nSc4yHxj9YkNq8tM9EgPjGCVwkDsPcQm1PvWNGmCcExJUUhbHdJDVvFyKg",
  "key25": "2fzVXhYySw36cyWa9JwbhfKqyuFousi2SKtheWCFiJUNPaC3iwdV6QtYtpech3iNKsQrg38Ux4Cvko8gjCxZgS3Y",
  "key26": "5Yo8FrzyFaFtbX7hBF53KXSX3yoc7GohHCXzGNG6MQwANrqh6mnFhfUP6P2Wm8FkrCQS1dEiXjyMTqLSWECWw7TP",
  "key27": "64c7qL6vEgxQRAzRo9cDdRHLbfLf7UYVwLXWCcKr6WMbRxwNgrV9VNvZckdsTNZ5QmLvmB3QxDJVebojGBtrz14b",
  "key28": "5fECkRd3KrJ3otY7VUHDXfVyZ6DLVaUZ4rzsNNEPArsoRuFpFTPQwE1KzPAYFDxDLmK3ehJQJhaj1NSjrccxEnqB",
  "key29": "HmvhHY7ecjZmqTHCkdtLz6Ur6EKaJNShSJX1UsJ9EeSXHD5fegKiMCeLUVrwaHXwzZfYhwsENJCG2EpQ9GMJFpj",
  "key30": "38BhUascRddubxzf9obnNAzcdQUZh4KUek83hMZfD1NyUi1q7M2SwuUUa8qyYWk1YUSg9zgGxZ1bGrQvfyb2xCba",
  "key31": "4x6WUoNRLQXEpMZ7vRUoRSdhJPp55XBWr7Gah9DKPUeZxLfagMjHXE6vzULF4vkLptyKyspSnnY33vpHFVkkapwt",
  "key32": "GBs47qfdf8AQh3XjiRo9cjNXgMYGPE8mMo4589yJrDFaXekJAdbg9gE9DogtMwKNecwWGC5XUbKEYAYS7UG7MM6",
  "key33": "ZT5oZfCoT2LwFStHF8TQHYjqXQH6PyQ5dBfeSDcUMgwoAbC7dfGwPNY3qFtdoQbtzysDFu6j1yuoHfcXKKoFhDi",
  "key34": "5i9FyEV2KxecticNb6jQhFhmjoe92WG6GMfX1gLP6tdAkFKeFzj4GSebZEJVa41afkFunLbXp6jc9hEh6YSeXTNt",
  "key35": "28QymdXaEpLEoDZpbiaHwuBDNXVkiXYk4Do4qte9ueBTrvdNLq2JSaPzxdYVPPct7Vz5ifV29c7XXV7pP4557wFG",
  "key36": "4p4dLPZSqy5HeLJ9UPu6YiZCFSYocTWq4GGKUwq58ucEJPM1WkXvGkcwukj6LirNVTAqt7VgUjtRx9rc8o4jB3WY",
  "key37": "2N81oTZa25aadZretrAdis4rd9oA8X3ke7Dz3zTB2etKQRnZB6iFXrHuCosgTzdS5aWMy8Dhfrq9smB93tfZYVwz",
  "key38": "4UipQjjjWHwWQRkX76HY212gr1Li7znuvNYeLHDKbWeLNkhLYQMETBoVmgAcBfRyhzF84VfXLfgcm3fJSWphbzvg",
  "key39": "GXnXNNZhnyjHkqvjEkMvP8fH5bosGCwUaRMmDCFypfzj1fjoWaNSWqokc2mXdvJvLS3KfxosNxe1S5DDwudBrcH",
  "key40": "5jbvVsRE9cnDeStczvBbfmWHVWAYwrEAcFgCfwNUi4ZNjJoUpsVqi74mTaGfdCJC5344JY5KPi4TkpMzZjJhg6ap"
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
