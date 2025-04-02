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
    "3KqT7TGmLWby1GdkgKgd6o2Dg7vGTFFZVz7AP7nwRsBMveCoLWJAVbHhWpJgi49VewbD4DjBqoYX7WmyHU5uzviH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYsKVWxDTRRB2WJTPvbVzx31TK5tM3avKBB3D8MTgew5JPDwA9f3aPgQ4JTRHLZc79GRRJchUvWnkoFLn3riRqA",
  "key1": "2otHvUEKpfSaJSkyMPo7ro37u44XfhnkHHk8o7PpWjVmf9EV7kvFpMQCjJrMv9C95Z3J84BogmrzMbJHDMFQtQN8",
  "key2": "5hdHEMDmaF3B1CY4JbKyJJzUin8eWafY3QbRAdgr6aq5SZqfjaQSHqd2NUFsQ1GxUh6aZJf3vVqpJh3QPKUZeUiR",
  "key3": "442odEu8dcebc8QaXSqS83xut6UrXkHsRuWaurXRzYv73NdYcXsUfFpzCv8GApJgmVtmtuDDs8CMg2Ccu9GjNXQt",
  "key4": "49ySPKVp8M8aPh1h3RirgbqXZB7ZN4M1EjwtjtzVHT4kjfbjG1wpyJweF7YNuryY2FXXhZL9anNKTShr8zvQ3NFF",
  "key5": "5a3tSCNcEGXG8UZR3TeoKBeNQBTutxPaRZmVBqGTBh5vkiG2y1Mbkaz1Qa6peXqxtje97BTrf5PPz7zGY6fzA7vT",
  "key6": "8XHtkqkcNRFEdoX3MgDVEvBWyENXvCfXFB5sUfLF9aGbGW6qczgtk6PUxLZQnxshjrrjhdjS6QHepGuxSpQ11yy",
  "key7": "4Vkvsi461EY6dGWpmQiEPQwpfweRkRwTqr5hQMuiGDauRPXaW9TCCcWKjNKgQ6teR6YFzhecKAD6b5msi1TX8hES",
  "key8": "5TitJcaBKNGnF37TihXSrA62H7kC1XqasMDJ4h5S5MjFygvACtQwTWDK4f6oYBAH7HN17ycC5earfWG6E8kPJVHU",
  "key9": "4TsAhwxxgY9WWssrf9KoG6ovTE9EwwoNsDp8Qq2NKWL4LFcWucz8r5KQfuogcb5ojE4GbwaxYwugJD2EdCvRWu7Q",
  "key10": "4keJcUa1B5gee4ohHiP6wbLwPZfbNzniboM68ngHGwrrfRAxKSdQ6sg1K4ZSwJ5DM4DeQCwFPA337FnvhnWVZXQA",
  "key11": "57f7uonXFnwQhG8KczgmtLNthUfrycc2DQiwkMpJsSt7ozv2eftHct4tKDdEvFAVNUmuRSKmRqGf3rCjFQ8Evsvb",
  "key12": "3mxKrq8UzuQFY7jFFmLRLK9pL1op4rMi6WWCmkoi8hfgP3n5vLpWWFv4rg2ZJ9i5mrGVVZ5jRF1nQ2DPhJUWc5Z7",
  "key13": "61myXW9pLinBsvE3TZtBUSrD7B7gEogfQwc7j9toWBdVC9UR8k26bPswWEZ4X1kdfSEeJZXxWSis7aShWjcpu9f9",
  "key14": "3aNzCcAD5so6SbAAPmcQBnTFdGZS1svJ3WnGzoh2G2zU5WfAx7vTqmb5spXv7ksRWPyLhFLga2cet8hXpA8sH3bv",
  "key15": "5cYTvi4KXy8TBHbES71kQU8MjDoBy7NjHZFeakneiHAgfyP9wTJpAeRuEaojnsyNdnZUqbfuKVkffVCzJTSKFPc7",
  "key16": "3Hprmaz2PPgTnhnsRKJCxZ1Mko8r6sLddyqTbgQR8tWUUqkoFPFh5jp2HHLV63zpEv91WmMVEdLHLY1bkRXgR9pK",
  "key17": "4LerMpEYoaudcsDeLZrqmyditk7fpdCUi7N9pAXazsPjaiA1pPVNpbxRSPQRFDjmWieAsDgY6WnVbr1Hn48VVuCv",
  "key18": "3HK3jc9xnPY8M6bSBS6WUyDVVmaDwbw3HrtQU1ZTqDfU3rmhyu8WmXVv9zDmRHWCrSXW9HdAzeteUEWXZqdQS3La",
  "key19": "oW8MjBztmhCAgRKRSURLpVg6YDqTT9yDwozj6bQiXVfgaR317qcqUNiL7hAJTWg1rtMgCt6zEKWKYVzdZTUD36z",
  "key20": "5W1jyMjjZhkdKSxrJLShi1AcU4Vrv5E3nTWDVmdzbWYmmfxtkh5yyFRUbwpyVzKK59V3g9DxTvWw7v9pVatVRBeh",
  "key21": "3VhGZQSVCLyTVwnyA7MXxXP14pe9kGMAkQ7eAWEZTaujCKdsBnPLhXbuabwD6QoRMRW1Jx7BuL521nn3Ca4R3u3t",
  "key22": "36yxX2unjYfhW1kvwUFh5aXWQs6NHs3fB3j4UU7xkRk69HossH4ixEapwAoE3E8eXjXq7WNkUycjJWo8uFfYfVcq",
  "key23": "5CjMyeougrXiqhZgHFUEGYxCtm5f8B7Tc5DNLvDZS52t6BWJkwRPUEUanxZ4PzLWzKWeRsGp2UJJvWLpJtkGokKm",
  "key24": "3GMVnpXrWR9ybJZt556DuRfnqnoQKFr9G4wNUghawk4mhKX1dXxEJYf3XskR7VBZi5kPQKC5bXgpR72ZEpszq9Pp",
  "key25": "2SwTk2ePyU1fJ89UdP7XVmGowkcE5czdemYppBTxou7c1sd3GYCVzh2u82UgAJHGcqHhkLWEfiUNkJyqFeMixi8b",
  "key26": "qBDdffbmo4rsnCfnAB8pVoyTj9nSfux8zYvF4qjNmGk5GARkoTvGh8riRf66ruWXTvNX7Jhr6ZVNDVq85Kj4Wp7",
  "key27": "4uWc9sPsmBac7UP2kJ8q876nQqsYMCixTWMBTJK3Bu5R6fwNGPZYRakF3ZMzhHurqA5rC7yRZpPKsfTpkTF4TCET",
  "key28": "3NT259dBuHMoFVsVNmS2TQURTjCnigG8WL2WdRbpmY1qsfKdxFqzHH47WiPqK72QzcmDVMcUmHZB7uuGffF4bs48",
  "key29": "32y6SUVBbqAJtZ7LDjeaCzpp6uWT4j8YGuXiHRLzXTAbpHXNh2MQh71LLW8jCcdTtgkUFo8WeXt18qZrvcPxzrik",
  "key30": "2TBJyeDuUwyEAwYFNobdwbdeyjYK6hgeZgT2Y8LCziu9AbFdKXCSxsZm3Ht51orkXX2LeAfdMjXg29JWbyXkcNDg",
  "key31": "uCTypvEEsmb2YXARBKz1ybps3vScUaLnLdnMBMrmyxKyXijMEBnFmMW6Ccdv38iK5s8VuqMp2sUpcswwP4GdBZK",
  "key32": "5886dhHCNczS2Lx92Qh1RYsj4w5jHPFBzVtzVGre2UNVJJeYD5LK2BCvwgiYTAQo3xyXZNTC1sFoVVc2DWrmj8yA",
  "key33": "2vAx9fgCGEev59gCGXjQdukoBD1Ux9eiFwp6AZk79YTnLqehXwns4iCgtoLyx6qFdjDzrcoZDzQUW8BvrskAa6sg",
  "key34": "62R5a3xpL8bgBVbymv1Q2tBGAaDG78pdBtowUs59dyf9GN3CsysMNXtyvpWTEB3aNqSJxt4gHc5rDdaRypn6fWST",
  "key35": "RwM1nTfVxfKFr87QHUC9m5D7MBBr2ZYFX8LsSy5TyXqtM48rRK4pU2LZMVmTeCfGi7BxjFTyJCztVzg9hKSMvgM",
  "key36": "JsZxrTTLWtq5E3VuDpWrRzYc7YfuFeRR32zKymHNvKY1NygGXS8ydDWgYXczuBnY9Fhb6vvKrbZPeLgntyvDUNp",
  "key37": "5XzmZvGRK9HvvzPJBjf9ekvDfjSBvCcCrKoijybkweciLkexeixDw2gkVTbfEWRfi2pz2neDuWxzxaQFcwTdGEmf",
  "key38": "4gedA6J8QHPwJWajgPw7sqD6ZnXJ52NrATymWyDfsCueNTx3GKhMmRLxXVJyxjJiqkte7DMi4JhpGHKURRUGVj3Z",
  "key39": "5n8H8GqDTeN21EDW5nzfx7qviExNes9MDKRmVKFvJiA4ZaKR4dukHutCNsL3p59upVu3cUSEwuJ4wv4fH5knPpnz",
  "key40": "5U3kriq8Zg6rCspEne9y4M5e7426o3M2GN7yPc7mBjhtBu6zqpgcd5x5CXvRrKhqH2k7NiAH7RmLjxKMZ6ZLKjHb",
  "key41": "3fqutK9m39x2o1XhRGXdKan2AYhC3dW48PXfRojbKFAuu9Pue65xGQtbUVgYHRA1rosixbEssq2qyrYoBgFr1QNV",
  "key42": "3arne2mxP2YaYwZJqmdNhsz5jHu2NgLbz3MFJP6YgHawe6oQVENcsq2jEWEZZhTJi5eAAq6uy8QHuJdbVnMspbxh",
  "key43": "2q7pDZnnK8zMDZ5mJNXWJHJ8CWPTBhnPsAAD2Z7S9LdShQR9K4BC2SxhQQyC5o2t78E3oivEYAuzkgQrHVZEpY2J",
  "key44": "LjDB32yR9bg6YrzzkRzzSFGnSDJtjuu3Vipfc9gmdrcw8xx7LnuMJNo5axVuvqAsaYTDgZwcRiopo4Spbx5rS1E",
  "key45": "Jkv1s8B6Rg7Gkq4jSLBMbjZKeDV77NxsCvpycwgbspXheBPPcDYFmAMuYYWoPMCMsT4gSjGMCD1XLfSQikbCGFy"
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
