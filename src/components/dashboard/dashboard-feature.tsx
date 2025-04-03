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
    "3cF77WBEZV7tEF75huhhPBvD3uh5HDMKGRmqsNWoJFm97nXZm8jYCXM9VXXpkMXgqL1VtCJWNFdruvGmSpUgMSqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cMqa4MUmszqu7jLtoe2ei8Q3WT3tXQQpRiSTDkuRkmcQu2DMEmZPvLUmS6kQaLiLGkyuJjjU5CPhZSRHzdwBQ1c",
  "key1": "5gugzmHbLf4F8HTqN2JiTcFTNfagMzSAavd6n3jiQ8i66QBjjPVttqd2NXUvhLTWqwJqZ6G6mpeTNJgZykzVAw47",
  "key2": "a97nsJKu2KtP2NUwSPC4LSZ93yTt9UikERXDPVQDLb9FNf6Rs9dYcRyemMkWs4LDVLTq9YGmwXMAp39ZrDZPW6R",
  "key3": "3W2Lb86orj6urAkf6G2JgjcV1rc8FNR493Qmxzfnk6abvGuZmdfoS1qB3F4ND8BNe1bXSTdq3ZLmsnZZPuXkcByU",
  "key4": "k9KikW1exB4UuRX7mcXhNv8V17cTgNk9rq4GzzVQKbxgPWWSZLsdTy7oXz3MdyeVMBzoaQotHf71n38eLbRGegJ",
  "key5": "zuiq5kUhA39FzTryRusMTRxLL6mpcBMtXAuDSP1M8CGJkKihkhwg1h9uqyzx75UEk3rGNG9KWCk98wpyi3qjy8S",
  "key6": "2hYWF4sZR3Z5BZDut4WkCusyEjXJzEg3WDKtRPB4y8PEbfwAP8B4V6PVb4MdEWkt9F8trJRpZVVJm57E1gvLkyBy",
  "key7": "2gVRUUPDfmseN4kD4tyvcjUWjLeLxJQxzq6KmFA4V6yUJ9T8VPAbDYijq9B4cHkLGGWfkh6noX4cRw83Vu3uEZG3",
  "key8": "7YYbHfACYi4ZLJTPVoZ8fxcNwABnMzqqGYVQLdZotzrCPyiwBiKzGAm1K5Q97siVpLX1KLtZB5qTCzZ5GXRxSXH",
  "key9": "3VzwuVCxopyHoECWSDKWCwUBMaR5mgRFF6jDhmo4NqZq7zCK1LYSGbXKB9TEHkW4tJ8VKgLBibM4PgqVzHBgSoUs",
  "key10": "QyaZ1tPDCL4FFsTsH9ipNDQLDZgeNbqAk7RiEkvmdY9tGugVRpc5uYkQN3fzs5VR56wQTMYmHzUL1eAwn1xB6s4",
  "key11": "3b3ByfzivaS9NtPZaNJJnosrTEpzQNce3ZYQhLZcJi49bmFTMhXRL5k9UgJHhMbXk2gsUmaA2GtUjGWVRfbXvHVW",
  "key12": "5tt7PnF15WxvNBWdFNDFd9QERP25uRM4J7RR1pLh1vCZiL9FQZbkovnbrPr4UNg7FzPES3YeapMCYz26B6u9LK1C",
  "key13": "3koJHHouCHE3r6XFwWfk26Ye3eQJNx9Bn2aQD4HQV84pf3F7XzZuWrX8UkPHhqJ4Lin3dQzi26GLqoQz8qYB9qvQ",
  "key14": "5E2J2ejm11oprGHUK3wfWGPcsVUQf8HCiQDkaiutSVs4ZQFHS7iqHMbyZw33Vh3MfbRYBQ6PDvcMTaS68kfRxydQ",
  "key15": "nppHVrbzWgdZRabB79K6ojzfwuTrYaAVJMBgBhyrH5jNRG3NjFk73op2uhq25x3w9BFLpMLPAkM7xuv5U7aoF6y",
  "key16": "8ZokPsBULqYB4qnDByxsquQnLFiiuMsvnuw1ui4rKr5jjWqk5fStw3K2GRrEUVujDfQiWNc1PBi77y1GsFJoDD6",
  "key17": "3rikDmpcRs38uTKom3LWEa63BNLJf8otn4zrBUfVDWwUVf2C1LgyNNcdETLoU1XnbRUotYLp36oonZXa7QRhbjUW",
  "key18": "MarHrBsTw3zghWDDh8AyoG1bhRJXDuLoGjT1vnEBfC69htPur4hSjQbD5sZasiJU9nDE1YpXJTjkEH4d8z1zaz9",
  "key19": "2JzBpZmkHMMikVewPmgfCmMTKYWuN7mPsKh3ft2hjCyyYD4Zi9HeEwxaYbLyoM81z4woLDPszkeBLzgoeNkxZVKR",
  "key20": "4rANhRzfq7oDrwE9ZLCT3F39wrVyJQv5oiTghwyD7eaBRBnfLiwzhHk6VURbzwVBTdoYD6vZvZ5niKUurZFoWWUS",
  "key21": "5tSMC2yqbKeHGnuz9wgWQJGLe1AVWAZYtVN38Whcg9JftohD36gGPyHV6NC7jbK7HHATS4rNYX1ttsBDd8cHLrmq",
  "key22": "5H2FedQbgbweLw14wbqvda3riAYEwvPuiFJW32sAyYSoYQLP8nvb6gavBEYyJTmSf152sQVjp3fHgTMXFRPYW6H2",
  "key23": "63PZ48JsrH6MKueGntRW142QwnwmVC3a4WE1UAVWR9fYZdGnaCRQo6WZRtZMdrP3AUmJWgTeSpfZCbJWpQta19ZM",
  "key24": "28SS3cChBtsCwJChZ6yuiGqutgGXBD3F3tqtxXpHR6SLzoV6Fx3Ywwae6uLmgyKiv8gKTjzxsgexykeEnk5597tU",
  "key25": "5xUuFyegaqUmisxBddJ1vAH9GqE4qtaMcsPCQnARWqtHzhLvthe8kCiTMpfCX1bbtWGqadW3BQRrr1v43ZMjaNcq",
  "key26": "331mo9ePSfRAE3CmWuStZvuvVApnjpAAk7brCU2uAf3ceso5WmBER8WQDCiCEGj7wxJ2xaVqPvVXfLBcCwAZkzSb",
  "key27": "5Y2eCT5LjQyMau2u5vMJzvsSYfxn8inG31MkmQ91HffE44iddDDA4DVkDsUE78RmgMhQ7KVUVPpkVXLEH8uZe9ah",
  "key28": "67F8jsEVLob6jJk8PdunF2YhCo42J8XEJYBYHtN6kJzWwSwH5GAc4i5WNHkyYwpMVi2h2iGVrCnjGkV1TUihpgsd",
  "key29": "5LQtg8ZuZjgYKfdeNFva7Fo5voUdzacpDG1YiSdMCjwrtKm5xwYDn8ndX9ehWDb4YJUgVQZ9SabftgZtQLjJva11",
  "key30": "3tqB6gemkjvHmaxkPMkrBUtb1gVHtf7MC3HTCtJbGpjFYAKewXzcaALc4YEUzpRpSb8Z8Wp8yjhcA7uvB8kGNPSU",
  "key31": "AkmwBPyRZ5RN6V3ro3Mi845N7VnwmLfU8AHMXRNqTSc3VQrLEWommZ2Xn5iyJkXKshzAkPN58gRo6JpZ2LARG1E",
  "key32": "5VmwUGoT1sarm4DsF1Kj1aUiSRvc6SavnSeYswzUUzTjE3hTH4V4XjdSbnZtSMBwqWQqkPjkSWYH43HAKa2vvhvN",
  "key33": "3hV4vnpRV8YiCr2tvRJNiMRRMc3s1Lv6a8xf86rehnwHkpasLepnNWT5bM6uGWsiX6XMd4ft8EruGCf5FFfThEzM",
  "key34": "3NGjqcYVcwqzLHFvpZimZzmP8PGvfKcHTanDHmC3nJ6MTowxGp1B3xHxhL2tYuYLKsodd66MWbLtvq7sqe6qeeS9",
  "key35": "3hfwGajKK83xiLgms1Ma5sezpCS18or2XoQt9Uoqz2M8WzP95RC4RRnvaz2UnvyY6JZsYzdULJ98AXCZc6r7KKpX",
  "key36": "3tBsKNBLP6cEwFD6ybB6dT6817jhnLYTtayigXdn7dQJea2bmPVjDGaRE51QpYPUnSXXaabbHuhyo7ojz3pVGXrT",
  "key37": "41RSZj2SE9rQmTMCw5dzH5gKPrEe1FEzJHJxGctSUNCnqF6v9ArWgvEWYR1d3HK2Q4Ggxh49Wr1S9m4DP9AnKV66",
  "key38": "5yzHAZMb2frZ7iQHrukcD8W5fBGfoK3KJrPgaitpRB5yw7Hy3WrnUDi2NGQ5SkU4q6jjHLNzoa9gRt198yQY6gPk",
  "key39": "34sXE7ycBmRJDMWMJb1rVFR3i7tp2nRbMfjC1Fq44JaqeM49sxHC7LJX1TZaiApnNmyRSwtRdruk1c3LtZBgDUxj",
  "key40": "5zCMbTc8afeVh3VB7KwiQfT39nNo3PKsKucrE1HP344QdmStYCU7ey4Zye8DeCLvHsTVFtUSK8EL1asRRDoSUKhn",
  "key41": "66CaePGw6Lm4D8UNZV8EXGssC9uGKXKTw7eQzrXp5ukBzBTsFb8tFCt5CNBZ3LKFpuEE8urxubbTFkDtwNtdRZfb",
  "key42": "3DxnZHAd3ShCYbjC4Mo2ereehFehxJd4yWN5aVj9vFuYAMJmMcwoo4N6Uz2NeWy2UEmtF5ygL6w9aZadJmfE4CM3",
  "key43": "3msFTyshfeNnHmsPAwA55RTJ6ahXfAivbqU6dVzTiHffsmNzdRhSmUvBy9NA1JQPUrgC2VyUcsQwNXTi5CLtwfan",
  "key44": "2zgbhJtN6HLJ99c3x1HvnpSDPNzE3Ai82BqT4XNZr1pWLWiuqsRMpzGDPx8iqmHVovBekjFoTKdSk5UrYcRH9efw",
  "key45": "UwFhtSFZxa8DFqTmXHDoK9JVtCMdGyBmyW9E4UkpB9mW31cHd9JNNeFaZAqfaforS5BRJDagLYKBjXxv3fvYt9i"
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
