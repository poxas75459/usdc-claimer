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
    "3dwVASZZZNQ3B2ytXoamBdLxeWiLLY8nb1T6DvJ4zE72aFxhdH6XqjSmkeAk9wGbyWEN4WpvgVMLtpcz4L5b6tvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AXZRLqLVsdQQnWDtX8fHLMU4aKKwRX7tE4bYGpkMKn3GfW6VL8PZFdn5jHDFjDkqZ4NSWJYa9SAG3scr9Y6Ahw",
  "key1": "35mEfpRzEMZSjJCj5tssAHfz93PtuYk6wFzhjE5u3RHfVb8zkcT9dk49CTqrh55chEZrDbWPK96XgQTxVsL5vx1z",
  "key2": "63ZPqmg6YopfsGLAWqkuKkHQ2h1LdVNd6BhA1vs39Ba4yYUUqbtD3exf8GonVEGxTQ6c6HLWJFE13B1QnrpbpKN6",
  "key3": "2UgYSun1LJnFbUidkvps1iukzsPv5FfC8gaE3Pow4aArnF4aFKQyFi3tdM6MdZGqW5f2zJNofPXtsWx2jJzbxjvb",
  "key4": "2r9duqP9jre2WXaQ2zqNjVfZGFFLdRD17KNjqRgSXtUajdcLbzAmGDyHRg9eJGuY9KBGp8hKasnZL4RsTGc9bUSP",
  "key5": "2a2jD2GnSKu2HCgsH5huHDTQKHqs6Tj11dvWHfMYakmsQXnDdEaFhVZnHqza1fqPrvKjNMAUXXoCBUHXa15D1zHW",
  "key6": "2hZWYMJp8qzg4M2VmhrA9b2H8vgK5pY7UdbrkMp7KwsbUUTRc2R6vGuDcvB1c9G9yVDhzbbCSLuHHQ7kraPwib4e",
  "key7": "2Jc9TPsxxeEJ18BoThtNBQj4qvtgJKmtB1crhiMViUYvbGfzbHSsLsEWMc4GPpdjJJ67GhPCtZiHQRAVttQX2p5e",
  "key8": "3sBEWQbbagAUeQVFz2k3tF531EwWWgZ4wHuca3sd3Ti8kcX4rNqv6x5XMLCnQiUecH3nLTy8ugERgVUYaPYPkUr5",
  "key9": "5ZSqvpttkhLHBCnKgvyiDGASMBDB6ZpYoWzB3UrwDNMvC8xHiAqNQetPPGcV85CAptvstDN9Hu3TAHj8btafesFW",
  "key10": "9A3yddsYrEJ6vAtiu3jjEN2H2wadZcbM8SGaza2kvD8AZwcwC3uPMpX3GdQpUYT8XLWZ9oveqWNbfXKKMcnF3PV",
  "key11": "4mHPaUjhFYb6aXzeVJekLqCRP1F4B7JfLN7D1ZMVLTGLTkdb6Ws9bzkmbzGqo82FTmgdxCpW2eRBYuFyY4d3Cau1",
  "key12": "3JEBk5q8vmssciDukZc7xjM4GixjU5J4joB3Aj3EEnms3jXNn528Y2ePnXqPrG1qteEFUV5VLudoQGoyG24Kvw7K",
  "key13": "4Ch3gutBMaWV5mz9mNwSNLuUFeqxBFc2Xo9HDZs9gQbnvxbozH15gWsZQ9ZhQr9UHtTNYnkv1tX7fexkcBXDm6DQ",
  "key14": "5gASTTifXYjpnfmk8QmJPHu3qHWeG7u2z6CYvtcCZMipD5VhCJEzojRY6QPuo3xnezvCKBHoKNn4RBr8s5NvfcUF",
  "key15": "31Trk4hHBNedSGwzVtJSKVtyu8Sp2N8XYVVqJ3EdPKw4YDF5JxWT4b7yHTHqjpumdfxffjNj2RCt5yaJ6crU5zTy",
  "key16": "4oPbdF8GPhU5afH7hrP1ZU7Bth2yEoz1oT9eXt3XWrDwWpj27ZVTMZGZQAsxNrdq1oqcN87w8VWkVfghp5CG87Ev",
  "key17": "3JhatjxccKrnzXVXdUN9xjsYpSeRHHyhpRgP1p6gaJrzxZ7m2At6ERJNNeHSeoKSUj8ptBMAZ9Fvvt5ykzn8AJwE",
  "key18": "5FC8NwPtuhjWaB8HhNzFwVuzqjQSBuhNSzTDzJmUWg9fYthAUnY1dw16DtLDKnHHhstF12eHF2sfzoMNzAugtoEL",
  "key19": "5CGxTv6oUAjqHNZwX2Uwu85gfUVZTHmKeSRMRREyxqyrRYjV3ikQjcZGeNWGxCt434yA6LXPxaJoJJqXMPRAAD8Y",
  "key20": "yBhdZn4bahgXZ9fbbgxJCFfLNirq9P95YhbHsYp2aP3PRtLDTSgS2ZK7R7gdgqYJxbzqAAzGqeCwNYePVFSws3d",
  "key21": "4MvGM8GoqWi16i2F4Wc1969V2DVwRJsLsZ7XuLLJCBRW3LKkM57i3UtivYkCtL7Vp81Cwnjfmu5izAwh84wTjmp8",
  "key22": "4NWHenvpHGzTRzx2QS6x3jS7vpaQpKTtKJvnrZPStMsq6Grb5BrwUteVR8mvq5vsKpciyPgy3W2DkKYmeAyv9stu",
  "key23": "BbdWxRvCPq6gdx7GTBoCSJgamiYFw11ATDi2e3DSFBXyJxZfVqoGXXiduVmJqrQgTcoxCHCmfPWsJcS9mWpn4Jq",
  "key24": "71q3mSX8ZuiXCQqJ54YSJyLadh2XvKjCC6mR9KxKQTB4oti7MprTFW6tvj928J2agSjCAcDjczuU6M7kLjT9UyL",
  "key25": "4t78WWZTnwHTbq9PBfxmz1G9RiJ3cHpSPmG4nMCVyREB5RazTgyugYfTe5UvMj86Nwp9oZr9qoitA2pVLQ6yh8LG",
  "key26": "58h8HZyoyPhbt56QtnNkj33exgE7EuPyF9LDgnnKu4Uav8SYCLHdCCLxSs8DHSRFB5YzFjFabxKMS67RWXVeBz8w",
  "key27": "5WwK5Pi3Ko11jwRuCTvUDNuo7QSSodAiDv22NpU9nRyoBMDjMWnvYrF7m1GnwB5DUwMiWgzPEjUkRhbHFGgfGggd",
  "key28": "3xCQnkj88cNUmgfKnUCEGEtb2WdyRuX7yF89ApPCVnRstJ7H52vPZAepcru4S8RNLnXvScmMEchzV5EHQ5G9L8Le",
  "key29": "4wh6qRDYMGSfzButiB1zBrxCP97tRF1rjmwjY3ztEu2NU8N2AfiBsV9qGVoBDFWbgBwrMCmkmw6awC8rgHgRWfbH",
  "key30": "3kHcjhkru3H7dmHMRrvySkMuJGfZp6b7tjhHhczkHbFiR9VRb6eZzDix4WqMJZfUuGHXDtm5cEUEvj6r3wEodAEL",
  "key31": "W6MoRAH87RQUTShPTTnpkJfqNv6fsg6R87BggPfMmwQ1emkn1XbkfX6eScwqdY2gV5PAJkxKgnRGee94JqEJCx3",
  "key32": "2cPXA7XQPi4vDs86iKDms3F2KqVAVp8NkhHLQmCSFHAN3EmYaozL4FaAWWhYk9TJ2o619QMXrBG4d2K2ctLis6a6",
  "key33": "3M5cKq5WJwH6HWCsGyb2PHx1bUAAuyFL8Kp7MCaN47NGA5woBqejY4WeRoVs847VL1Wuq7MFRXedafFoKRyB64GG",
  "key34": "4GQDHFb1tdzd7TNUyFkNu5BTLiDiM7pmMR7LdkvoLMRxRtzHYdoRrKiqaehAECqBzACRz8kPZqmtkx7QtuvfbZbA",
  "key35": "LPh7vsWe1C4NgJPfcJtswLUs7fbYecjX6UfPErL86dRoJwQqQXHVE8Etaao8mEWDiHVEvdum13B5CGSucm71re8",
  "key36": "4eTjEEVYnbrrCvaB1E1cNykPWuTG2hXV5sWfS28X7JcxK5PdKhC4YvUMwbDrdUriCFySFAyHRs6HNphVXyyAaHgE",
  "key37": "9ZbsycDbYR7xAcuUYV5Fq9Tdp1bUnDh7w8pPPAfAVA3VmGQZ6DFTje3HNbf1Zkjs4YAY3YdFiQ17QxyH1S8Yxvm",
  "key38": "34mE3keouKcXahRxLHctUfaEfAESZQQJu12g3fniMDTd2AHqBUfsa3p85C5sBBqc57YB512DAzX3s8TyUp54XyqU",
  "key39": "2hRftssv89iWhjJjH4etkXw37vHfXf7LwmxXg6M3x6MaZz5bMjcNwyYRP9EJpjiPzWBTiPW4QmcDc1SeudD3zSxd",
  "key40": "4C47poxdUqCUdV4X9TxY2X8KYE2d8Kt7uNYP7c3EAJdYqNoi3eRt7j54Q9gkCTUfpzTpx4hKRo7PbBqeu59xVq39",
  "key41": "2Tn5FqWdPjFEvjgej6PmxswogZhBZ8hzXvZ82YNHpUbArFtidZM26kfRxFAkGimURCSQQNdnM7LpKFoXRvX2o2Jb",
  "key42": "5RevobzuE98QxfwKZ7h4vW89RunPHATFx31QSW538ez4p5XjaE3EcVT9uuTj1mmiuudRvRS1bFtz6XtsVMt2e2Ne",
  "key43": "2YQ3NZY1b6ExxCpzwm2ncafUakPQ9R37QyfvpMpSwQN1zspqFNkfEXBMH7PW8VqdQVdMHqys5KcCfi45XVpPNsSz",
  "key44": "5VAa2u1R2LraT63EYhE8m3rGvT5RfpfR6bsDx4Er8NSU79jBYSxjxrk91XiFbAg9jiG9pyJSqhBJZynB7tSG4k2L",
  "key45": "3eR1bfvnCNhn9qkTsz8MKtsjjoXkYueSzPn8Dv7WyWJ29w75EdMkpuX66uToWdQrH8YcaHNzhBdNJH6a5Q1mmVi8"
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
