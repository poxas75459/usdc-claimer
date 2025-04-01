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
    "66aKri6mx5FVtCoCP6fH7LGtm3TzjoGSmfeUszSrfchFJLdiXR9dgyeWC49Ddkp9JhDc6Qcoa79BWED3MFFRbv43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNRsBtevYGbnvRWQTcPPyTj3EzPSaL8ur9XChxSawnnw4QkSx2HbZm3wXaNnskuMetMBSXPKZ2Lro1RWSsjV29Y",
  "key1": "21mwVtWtjQfz2YeV5hWYQpfmbd82n1LkEJHMQ74M6YnZYsfHXSQU9EgLKXv8mrSc7npTzVH6P5iMtp2dRTPdnnf4",
  "key2": "33GTpcfnbyof3BzjZWespcvSoFvi2MeAbzacTK2fDAm65zne7rJyNo3cfWYP6ZeGWTh4mnsKwL4bPcWavuc3jVqE",
  "key3": "3pzWzwxbeSWwNuG2M2K1MhV9JHPWe6Rz8z4LFfqqpuMRQCeq6bi9eswr4yqPGrPBAQYDk4P527B9psGHhyXX6Hps",
  "key4": "4BD9TPkoWYFb1kVmRNtFQqFtXsjuUzDfmHa6SJth5KVZzAR8Mtxmyh4kQqZ51eGJfyFBPnnoEmpW1Fy78iMM2RKs",
  "key5": "Qs7osVJyuVBuYMTaRm6jbTiQkqWxPNiJ5chpuJMygs7j6JZ362nfMrEV2Sqou7BZhHftxVG19b8RBCJ5312qXHJ",
  "key6": "4d9ZTHR5Sm7AXBvS9kLkBRCEKN5BYAHQf5S1aMzeFBfkns4yCM7HvKKyhBE6vRbPNRLngURo5fbea3ymyHermcFM",
  "key7": "4KyJrdW6xAwiuZAFzA4jgrsjbykmRtgnwkFK1qz8inmaDLMyWt69t7tp93Zvqz21wHz8gtx7t55B7MTPJi3tkDVr",
  "key8": "m8FSZSoFZaDHmZpbjEWrkPcMr5776Db6hWkyS5phnBibKXZaKxFPksAXVmNBJKHn8ULAycVbPYdWHhHVSz6iqpj",
  "key9": "65yGrRHJiBvWHjy2qZ9BsuSDWbHyzW7CnJxEpZjLcr1dPNemAX1KbCGjZZSgjaUdLP6JqkyNsruxxpfbBdWfgwL1",
  "key10": "3SdRYZGAHi3Aj8yPtX7VHmgfYr2pTyZk8PD31DerrLLxc3DajttRg9Pjcv2xDynW1oiBDZaxru4ZNHgxj3F1fnmV",
  "key11": "JkAEQAwjLaz66kZtvJj6p8cVM3Hv7sMoeAErf6SK6MSRF3L4YHTstLL7ZiR2ba7MCsEY2kgxe82MyUzNpWFfYxK",
  "key12": "jZP1qhR4tsRUmYHDwDSs6nyxhbaPMA1jQGn3EkBv3VtrDkZPCRKp1798jnFJbtLE7EvStQoXeANWMiHgEpcpR83",
  "key13": "3BDWGQqcbAYv5cxn5HqPHot2edNYjdwy8MZExCQdSgGCiagmb8LywTPjC6zEtYWHNsi74RKAX2heYWdDub1V1NTB",
  "key14": "3HqbvytfENMx1whtsKrwQaEN9TG1AtGqAW5PskHU8HaAs1hPwQub3rbyPBTc3hgwgErZQGMD5j9kGydpD5XuBb9A",
  "key15": "392kWi5Ap8GDVmQ1NkLWKKYPhVHApcFvsKo7vahfKQS6zHn45QZRYDonGKaMUkUZa29hdrCKU8igV81sTKuaDsoj",
  "key16": "31cTU5u4mFyjRgib7MxV5mtx3YeJ9ukwDgXgrLNCwHLUmUZsJUjtojd4mgyWBmUkHW7TcFMArDPC4cYFx54quwyi",
  "key17": "jiBMA2Z1q8pn1s7WE5xBpqozZsDGhpi3NBYVW3e3trMy4C1bh795TF6oT1fK8b4u2hAssZfLaUTqEELH67YUa9f",
  "key18": "5afyC9xVE8vNh3BZ3mjq4YTbWnSUCDR4x1qmKw7RQaneLCNoc31rFDX74LyUYmeCpcVXSxxwL2q7GXwymnjWFVKt",
  "key19": "wSAHh5LFeZPzmnoAuDZdkzovgKHQ87N5Jz8eTxBEoP2FUsjZ8DZT22aHPPAFVxK1LExXyioRcJ7SrjZA8SGdw9m",
  "key20": "3QAE57nFaqxwFNea4Kt6QeBBa7G8bJ8N45KAZ37iV15e8HLdNgT6UdUB8eCapAUjQBkFqVXsujtvu1TXzzN6Ng2H",
  "key21": "2YNAwHeBHt2SPs3Krz1i3NzuCXjryk5NPQJBC2RthbRmU5SyAvnL5Puobv2cvAthp6o5u5KxDLaZ5xGKqNQLMy9z",
  "key22": "4FejBVaUjVZy5THat7bHTaJv8facfKGLfji9En5FfXen3p1ct7nfYg8kVAMhcoLHgwAwWhnDCTMSSUC6jWRB3a19",
  "key23": "2sakQMQ3KcvjQEy51UtAghyJCPqFAGkDiwx1aASJYFSazEGMopnFLDzgDTHxuWvFKQWEVzrVtcQ4UqFSj8nnbTCr",
  "key24": "fzKt7q6YugVj1QyHoXAvxnQKSh4XRFv9ruCheFCYeGTxqEXBrCAYU5jjaCnmCK4TL4kmFkKaXZoPTfQwgawHm3M",
  "key25": "2V8GLPPDo7BmQ5qLcTtH2WKP4AExYHxiRosyntJvpbPAthAcEziYjYfDiqbm9WG4vq2HHcZ9xhKxSu5yt6LBXdfQ",
  "key26": "5Fzw2Du8BfaH3MJrArEpheduhURCTC2wAHxdLhBrSsEQwShzsceDZJHbnLCaqLZeF48FH96mkwsNZKFzugptj5JR",
  "key27": "4GvUZemofYkHyFYd5vb5iGaD4wj5QnQyuoB6YWMan5fxsvHrCzSYiSbNHPfC3bvASG4QE3dnszsJKLUHBXDhnRU8",
  "key28": "3NfzfPDToZr3V6NEzgooSCfGYAHQNhQCVnpRs6TsTj81dQjyszyzqvB33xvUah8aBgbBdSTaaH7sYwP5DbW69BQh",
  "key29": "4a5jGf9ue4VhzHNphQjCPVX9JbRfdDxDQJspb19kEmq64MCvegtJWQPjdQa1roZUu7Pq65vSFtZJ4ZtStGnt3g6V",
  "key30": "66xg1YiM4289sqKevXHa6pc1oAzbD33S8ZABDkgbBMSKg3KGQvVWeNBCbdJTPCjKZ1jUdQEWHZ2b32HLwhnNpGgc",
  "key31": "32F1xUERR7r2ypgzDtuZq4ogXk3dUXFwrUhnDJDr8ayfFWMRUm1mernhS2CpUvYmRj7PmGLmGV98W4NcNW5pwVh4",
  "key32": "jbj2AAccxzrmXk3sfFXSdCFWkEm8bMmcbjaBXiZN7Kovtgi6Y8knVycPHdkWc4pMhJuXVeGqHSpT9KksmbaYHbG",
  "key33": "3XTWQbnA1PxsnU1mpzPXT6Tp9udZnPukMn4t5h2jdV3q67ZaoRzcJgDQx8dhhYQ72eYtL7dHVigg6Um1FRSmZdj5",
  "key34": "3KnEmqiD9pQNmgQkuk9e6ozKvzZWAx4cHy97W1gzCzb9XXXTyPu37CbF3BpEPHn4jDKYYExpgk8Zzoypmck2iBpS",
  "key35": "3ug1nEEabQTvKmYLNL94bayquEEnG74qaf9LpTXK31GBUVDJCiJ6LWNAnGv6K1KpSWrHZMKrcBSTueZiURn3w9ib",
  "key36": "5pjHYQneK45kNjC3FJYcGSV89rToJvcw288Zrd7eeJb9w3UBK56EB9UU54R48jopDcq9bGCTTz7KNUk3cEWqiSP1",
  "key37": "5VyUaoJ17z1jaMcpKunpPnReF94Qwc3zSnjcJfrBez8XiHGWgc33D5nbB2ALWF4ss4CRTfBbK8v1dtJyzV7zp3Y8",
  "key38": "3SKMQM9tDz4Y8G942hpK9cWL78GgmLPii9YRTyoBGqUPsVU4jyW8eg2ZmGesYhi2E4w24DRspHvgTZYmiXrjxbz1",
  "key39": "3Xo6fUS8gfx11Yw2955TpGcRZFHjUP3Mqw1t82vLqMstcdz6ytWhCcDzpejM91uMoLxtW49pAkeQqtvfHAwJBgAf",
  "key40": "5j7DANa1K8RdRjYm8ue8AGr4Q2w6BMHbzVHT5PRcVYCChCLikZ3rujRkGzCMkeGZqubvuS6TGcGSHzQ4UrhKrBGL",
  "key41": "u13S218Uu5Bg9tex16m6Xfhq8Jfn4AY5hYXtiyajB7NY7M5Gx4MpJs2rcnBAYMqpTinxanVCDcPaafgmHGKxv2b",
  "key42": "5h9c4BWgob3ro2fwf1X1z4oRaDP1B5da85KxCgcES1KhG71oU9WMMDhCkZmqhyeH6F5y1akNt6r4MRj5sXWQPt3o",
  "key43": "5B6Npodrdc35GH7ucBJ52T9vxqFNMrP4ae4AKLXUtGkUb1dcaTZ64a8qetZUTiq9uwzVd8kcJ618reyrHT9zL5p2"
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
