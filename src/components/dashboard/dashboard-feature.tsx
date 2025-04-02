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
    "2PKSqf5w6nkHvoinyyCGUbpjek3K35zKpdKHrC7cKn3Rby51or3mJsxNM5UtTUBZi5kdcJNEbzVGigsAD6i68qQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sXUPikqXoydzo9JjbjcCfiy3CUGNevnKJJ27xjFVT3fpJUuL3gYQUSzfeJcRKPmhSvrBeEyCbh2Dp94GGL1WeFH",
  "key1": "5ZmKczsLH3kfGeGJ9rQWBmFXPJfrW5tT1QSKPK4KCpotSJzNWaoZSDePyMic1RRJVg3Zn7XDAtZBP1DyXktwYSBc",
  "key2": "3ctPv7eT1xdy2ryThPFT8UGRJ2jsWWmQGiWsCy9YL5xCWVQL6frk97jAqQoDv1x2bJCpKM3YS1MrMW2pS9mP14gQ",
  "key3": "3bwAeN9jzNJ9XWWgdc8EEpCFbKobu8h2pBdJJhNRfsrx7c4f7ivHMciTaWqKteqUmhmktZVmV3MsmDCAQJWnH3oL",
  "key4": "2wf2oHd6tnVxUMkmLMsuePoL5yQAhAq1g43j72ZdaTyjXBy6YVJgexjWSkfzfsDvsQ2EEeFBGDjYmYVRyMwL7Vmq",
  "key5": "242mV4pEVH18cA74BueZCD7XwEnwaPy7w65H4c9t2RP1EpJ9Ha7AXp8SGcymq8DWWGzpnULhQ5RtG3bwp8kVHqhu",
  "key6": "2RUCenfJTc2zYE9pY3zecgkzMBWBWK47f61HQ82mbLrKRYjgaerMeWVV254zqNVeCRAbNfubQ3emTqXjymVzktTW",
  "key7": "4Mt7xSrtpJGKZYwzGjjFeqiXNPVCLvZe77HnRjXt6LdMCGNc37r8w2XQDPPDtfLQ1fAgSykd7JTHLeEA22iE1z1g",
  "key8": "3wx5v8scVT3Na3Hck6LNyL7vMygxyzfM9rkA62T8312CdT7pm2C5MR19iV1pzxXagnowLCZqAHoYt1b9s4mePew2",
  "key9": "4684vS5DNARVHhsegaz8V9i9FH3B8GNUmbeJ6CtBdapizDms4qGPmNtgBp3VEe6HapWiM5DeEdZMVVyc8gXj9BB1",
  "key10": "4z2ne6DetVxBVE49FZQ3ZFTyXqH4FmTQpDYzcTAX4ztBxrnmUks61hCgiqQ54MQwQP5LGCY2gvFdupzHdMYjPbHD",
  "key11": "3oaJkmH6WZmmqddcKScC8rHxuM4XxRMy2JT7KGWMhWzynoqggZNejHGLs18XPkdg9QC7d7rEcawcjPY1TWJe9XYs",
  "key12": "rnCrP9HNijxWYbKEALukf6WREvqkmJfAUbrvZHGSpUn3SJExhUX5R6NXxU2ZeKWf75SDuedYJYpnWhpy4tuDbNW",
  "key13": "2UA95cAiiZa5NEnVi2aAHBa7afJmmNuwofJQbfrciV8knKGBYb4yz4zrrbfqCr16RGPRPPE8kURQ3xy5BMKNngvh",
  "key14": "4WAgUxNdNB4sF5aFaZTnvgP8uC6cXrpybbB4nYJ1DKWXCMyxx6WCWbpU6jekAnWZ9CmFgwAHaQqaCXhKamyhLkoh",
  "key15": "3N7eDEB4ZbyCQi37ZWnJiP4waaDQ16zWmSx8FgY5DN2NnE7Jsmgd1KSh3HcNF1fFbXWMB39pNX7vuZ7BT9GPn2uj",
  "key16": "2nUFTxk1MZPPaVQ73HKojUWf46WxsZYGriksz7zgieKmeZea22AWoD9Y4eQ51ZxVAm1gV7xfUbhQ1chFfbUUgwuM",
  "key17": "khL6WAfJPqniJGqti88m7rq2gUR8Mk8FtVfWRsbpJxG9HkX45dAD7h42YDPxQd5HZTR4Z8oeQfnob76Ht38yqgA",
  "key18": "28xZcxq5M1VyhaXuVupZZGirhuLcwyTWY2RBRAjKZjC79jtiLoQVoWAFVEFutzEvih4sRJ1Ro3WFJiQZ7eGA4hHM",
  "key19": "5HdZsJ6MwSEAr96rq5RjWrfhzpkuA4poMXDTuXJZuuqK24M4kVL5ihPdsW389tvZY4dj4S9pD6RexoTJ6BMREuGi",
  "key20": "3bBLw78g8gvdH7hsSXzhR4nzb92b9adKvwSmk9UMJbXPDBNsPLh5hY1zzX4i3di16PVGDeJDaPmasnTcm8v3hnxd",
  "key21": "28babbLHn919mxa3tYHSugGVBLwmmSjv6cFdFuVSU7N5VQDAymFMSxnNMjS2EiuRZpPfb5oBWFGqXKJhRbxxMM2Q",
  "key22": "3JK4H6MkpT1JY5RfSsk9iLqEddbBNQFJxu6ve16yd6gFjTkiDqa14ak6T78PAm1dezgvGfyHzFtdFZjR3SBBis8b",
  "key23": "3urpDCgSZbEoQpEXZ3iBiaYiEWPkWop3q26DeFFj1cWB1F3kyCnzssU8HQB9FquAhJCTGB6eqit38JkomcWoYfir",
  "key24": "3tEshC8oAef6AyPthCP71EpK3zTmpnouG2rAbunWHvosuLdtfyt1SGtw5RMfhKdaPGrnv2ZanMvbCzqrwjZWgSNr",
  "key25": "4koxtNFm5HtCfneuiyvzkT6g1MrnWUFhunkYJy5rJyp6PS9vBHNNGBdRyhwezZeoBN9ThYQ5x9QMb4VtFhUGyhqh",
  "key26": "21mgc9WWCmgZmyD3Au3Y6vfXxKmyasZJzUfpqTijneNvroQiknLYvqmCj34NyZx4Cnd9fegYAsu5rf1K8sKVfwYJ",
  "key27": "4gUexcLcLebcNvZq13xFCDd1rkoFH2tMEZxZ6iqmF1Mb191XJfYaL9tT8EFS7h9ApJuYJ7eyBwfZVRWAoaVtmnPN",
  "key28": "5DxU8tR25GnNC1MkQrWEkyBkg9KvxiHMoTPJnRSohhv2TYZdPTGy6SB5dNFL5dHrfv9YvGA2eXVeowa5VpMbNg3X",
  "key29": "29vkPWRwQyXrfsFCFm8PG4BDpwXyy1Pic7yYn7775TCi5ohvJ9wPTzmMGyoDwiQUPCPDoPKpFiNckLZYgMWQNZpq",
  "key30": "53HXtBdjvkDqijLztyfhfbcaW9fnzYV5xam9BTJxjyStFgVxRwL5dYiU46hhwgbKr9NT9T2TaBYnbEe5CkCE5Z5j",
  "key31": "5RsqpLLNtJqwJtJi3sKxWoRwRiRDTmfSBKhnLFXHmaKzQSWZLvmCQrM84CC2D4xnz8CM7bj9ZyJhSqEhhdJ9QnRm",
  "key32": "4a2DDbx2tRvBbB18N74t74L6nCus8XKUW3wFxJPdfPuturV7Sn9SgigpYJrGJ2Gkvg91unnqEJnPV2aP1sYo2BsU",
  "key33": "5HRrboX5PXv2eVbFwn2pPfKiQ2pbpYkyXycswoo7cHZQqvS8S2zZJX2uGLvk31UeNnadPreqf3849UDLFg5ohkL2",
  "key34": "4KgXWPwNZ6YLY9PZcexPFDYbR4YFVUaEnPbUJqeQttPjfqh86nmyV9keiFgHqWo4gMEwwMTWUUmcATN4KzxMUHqK",
  "key35": "4QJCdLinKafykVdcLjJu6gp51tmmQhJyKYtYsqPnmgZRJW4kk5x8WEcGPzDWQsUAsN6XdxV3bRVm1cnS9vABuQfn"
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
