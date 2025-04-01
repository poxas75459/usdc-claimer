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
    "3QppdAvWfwN58QbVWsY5xBLaFrzv3zqhJAhemPtJ3BTKi6bzApi6giCcobFqrjcYfJpHqSK3Hn68412C8pqtSXR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KYaRLCcdSnSvBzQJ2a9g7c79qQLzjMmaCCckKteV75C4Fc5C3kL6v6S9SR9Q2C8yxU8tZG5KhJ3rED6EH44uiKp",
  "key1": "QBJ3ZbS3jWdyQoB89YVhPBHyd3CCRi5dpPbw3vhWCzmDAJhMM29Zy6ZGoUG7duUTkrYSdQeyjSThRq2pxhozt3b",
  "key2": "3hDyakW6HB9xWwHw5EJn6dwfPDmyP6ipMeXdEdnny1EyX1qgzTwXG488ZB9Qp9xbNXArTKW9A3Ve6hp5TeFVKF5C",
  "key3": "4KjGQbKgoBcjTubD8BCpbcvd3b6Q863xByCKH6Fvp5MHjPwYfGbfBJ5etQ5phV65iNE3dHCwc79v1Q64HAZFej7k",
  "key4": "4nZFQUYs2LeitSqr3EWhtr12jfzb8ag2c5g4xvhEYKt5zYCmVwGugHJ7CtfBFhbEeMoh2ivAUDvXZXTvtoJGUrdz",
  "key5": "5acAvQUSAvJAy6y3Xycjz8mxTBCSSc94FfxoiswLkpTYqZHbeCfK79xDpuUiTjUEJBrtv8U5C84owjkiZhKSZ5xc",
  "key6": "35w1FhGm8RCuVpaLhz7Np9fUgYpCiErZV8oTWY7GFKixX5wbkFnqjtbK8F4qaSDiWobozUFQ6kNsa4bdepD6uVbf",
  "key7": "2Z17RA3z7mkCqWN2iTjaXzkeGuAWNouriepVkfpmcfUFrBhnuviaSYtQfeeEGhiTQdg73J7GovTuDBEJRxvGeuYX",
  "key8": "3Mis5deR4fj1gTzAwGVJ1qkZ1NNrMkujyhuqFXJi1PdqZaXPTBpupjm27fiJFAAB78BFf172BtRa8es8ktji8sX4",
  "key9": "3c7MHA3ifQ2jnLeGmcRdWrnvkAbswXc1pjdBy791Ntaw2KBE8kfxPkhk65hTVVeN1TxqcB5zEXHNSZRgp1YbWASZ",
  "key10": "2GJs5vvFQihFw4LJtedt1gtJjGBsrdBVP5FjLfZ1iMDXNEFFW6ZfBmUTYbDnaSKkPBNbPr4xtbMr2UjXp17Khb2p",
  "key11": "HKFkTo2K6SPXH5moZE3NM4A6uB89nwLYowM59XpMcZebHJf1uaFMcQrzitPJK6dFkZpCdc57BpHNYzBssfmabpo",
  "key12": "2tscV3QwubZhwJWXG3MdAND7NZE8P5uWVafhAduq16CHnww9otGG6W1QpV7AtLiV9mqdr9RLJXXfqfHpfigYwkxJ",
  "key13": "n2EHoVn6FJRejp8GqRRL8RCnNo188Yvgmx6V8jifSJjPhvJc8iNzsQQC7aHtamzTAeny58QJAuzBNi2uCmm87DU",
  "key14": "4i4bjovimRmESKo52bqkLXa8wf6Uv9NiFvwuQYV94nmcBq32cPY1ApgXLsieyPvi9fYGjQGDux8QBs2bUwfgeJNn",
  "key15": "4ycMBabimLNX4AEvM6zxubYZ28ZE2BVMGuH21rDM6FNy9AhGrw9UdKvBUQbqmvHqS4j84d8jVx9xPMk8qQRZDqHQ",
  "key16": "ueaRCeb6AwVdN3PY3B7rruEh1Q9PfJQmL8CQbDkv8N3ptQnzkwF4HbbU7DDerGqewDx1mSXkNpZnKotoQqDUUL1",
  "key17": "5Xddnpe1afQMCDpNaiDEbq1TWsc52SjiTqsQQvLhmxBy52F545Mo1r6CZxyzNB3JJ7ih72PviDB7T5Yt31t32gM9",
  "key18": "eHoSX2dDGfWzLspC5e61HJ2XGBeCMMWWdMScz3As1pJUbsepMUgkjiNUb3GwCJotCGER2gwT1vViXBoQEnxNBJh",
  "key19": "65Xee1EQt2rGhsGLF2CPc7Wp9uAt9UZPzgY9rnsKCBc2HXcGzRhveYV3QdZ8Pf4fvA57TLTJ6xqLoRnzDXzeqN5J",
  "key20": "5AWGDTPAz9kTpYkaoM4aC43ETjrqLzJya3uRMMVk1WqSd6kVrXEez37VVeXcgfT89F4estNDQeQ2KCLqrfXnVpWg",
  "key21": "5onbzFSW4kdAKUGb4CVnDFs7HVTqT9NH1VPYTy6gxhPmvgPWBjNfrX4JnLJc3mxx2QxZX5xSBUqaG8t7EqoePnxx",
  "key22": "3vEZTun5tcGWyfNatLdBhrfbfoXeezreEeLHWhG3AF2PeYZYZz2x9Padz5MR1U5wyaVhvZcmmsJUTExjD6m3gEUk",
  "key23": "2iAZKLTc3eeHdQrscDNyUJ8mHqc43Nutr8BVhJ38DdCHEign9RaUWn19QcNA94HzXTqE15t7cj2dCQeW8R9iaRaW",
  "key24": "32c1vY5wfYW6rtGUUKPv85AwT9wAyYLreruDwjS2mmP88TpAN8CWECYZgGocoXSJTjvRBP39qYYEHeuHjFiMoMqN",
  "key25": "45av1uzZne1PkMdqfs5bdGT4F3ftuPgWZ4X6ZbDdTbANwCLeAVvjVXEDUV7cCJ4K3RSiVMT7foVcZAgKKyDx1ABj",
  "key26": "4bBfWFu7EqpgJWHpJERouWirE1fHqE5NxFFWwtxfXbhqKprYmoU6hy9J8oeWNcPoEipq2t2wkyGVRRWMKY1yWxFY",
  "key27": "64EuBeietcoj3DL3vs71cvw5WkjBrVKEyY8mxAwvg4CDKWrEM6Cepwvx3NTFzbz8ms8rqP4Q8MfB8UYEmUJwv26e",
  "key28": "2yCneZMQcBja8yueDh2YrUECP2hwzg4LNucZVHAZEZyBuGByHFFnEnkaqVfSFUawm2TRkDuSMchVmqrkm2dKPtss",
  "key29": "3p61Xq3KCFmLiZzmMURGkp1q9U1XU2hR5YfYh7DxtfRAAiUWtMfEscT7wqssZwCKoWbXTbhJbkbLZjqaW9BX6dbF",
  "key30": "4FLs5ETQ4eSocFMwkAktyPbYgJY2t5LrURSiDuSbGGoPbjQxmYAHTxTcDkH4aqGi6JDRve3j93FN628jTvzawFwf",
  "key31": "3CfrNyNoLoCYYxDQ6U3k4111ZmBUr5NzgzfVSg4a11iHfX37vuQA3zWTGF2hWh5HzPy5sW8URpCA5dSJvs9NH3A3",
  "key32": "B8gT8Dybx4EPXZaYJbmkcg9J5eUdV4TSkpRNkFjcZ5n4rn2iZssJfkoN6cTrqyvYEo3qkdEnwGhrGsSx1WsJpz4",
  "key33": "6gQAg7tDK9Whw77tQenukM1aeiJXobmTQXHdJT6qYpZHTUf7eMCJd3qbxmDCEQMFGyWPxBh1h52FmWhdrwxyjb8",
  "key34": "2Qu3T5M4RyESsMx6uXe4KB6JQ5z2jXkDUZvANq9kjTtAuXNZjC7N8vSupW79JvSv9LDpbqkAH2zyNMxn179tfe4v",
  "key35": "2yFL5L2MLtWSXoStxrRfNTNG1rCHmDPRoK2CEa6LpRVePziKGiYqJTCW2r3Uhd5fAdX2MTrXpV9gBnZjeLJZYxEP",
  "key36": "218nyiz1jVUTQgssVP2nFVUPG3cKZsgzJx5URA1etCAdXDLzwm842YneF1fwQUE2YQLtm55huAiDTcTr4crWoEWJ",
  "key37": "4qx1PiQ3oGGpAjKBgSVVFJg5Mjy4fnHawBZQycNVoc84TMNNECt3oKhM1dHUp68c4yqvKV4odbtxKvgd7RVcxBVH",
  "key38": "3t9BkwvGSxc3GuPiyHXsd2EhihDoUjQpqP1NBrUhU6jxDFbEmRwuWVZJx51pvFwaW4gYkZ2MgAK7DDDBqmfZYQTu",
  "key39": "DjHJifxCn8h5UUnZJCmNyWE8DKD8Hx91e3UdBKawmJEZQpECn8XkQWKe9vQR9t2GvHYT3JF3jLHyDDuZAWvTMC9",
  "key40": "4HctgY6wa22SyKuPiDMnoPC65omYFWJbcTnC2ty6rLj2PRNmUYVqsSvkHDgxgUr2MzpSnb9RsFMpYw4iYpE1vBCF",
  "key41": "26T8jeNMCs9QJreqn96SMSET83MctvCfrkmwpQxXYiLBsAEDa66hLacjqjRA54KZigUGTfZE1g17WuTkoFUPz1iC",
  "key42": "49L8j3pYaGDXRhNfjGMep2LcZZmjASgKC6HG9t4crEPjV5rE27yBbwsDFYnpN9QVJwzJFgjGMqouEa1dEtxtN8AE",
  "key43": "5zJMoz1nB6ydXy39grPJaufeb2m5p3EWGcFgtAguCrKJKbbVGZxwKRzrayKHQRYooxSPHSevwUwracYcp2tZyGkh",
  "key44": "455AVyUspSrERdi5hrnguCVHStcAymkTYxhhCiysDrHo7MpSznme94HkYSm9jhxHhFfVEV9aZJMBHE6AHyeBQ1N6",
  "key45": "4fwfSBK2zwhEkMSNTRqFav119XuW62t9BiiNKrXDpcSKk3FUeLaso4WMfPKXpEyRy1Sa7ZapLr1wbkF9FJVy9Uno",
  "key46": "4bY6twvPZftLAvnVyS12baJnny2MX3uvwiHUtCZtptyQdaZV1r3dYvTUEGTXBhCzBFBiYBNjhHBxPuck934yy5JT",
  "key47": "4KzziJVMh9o9aYwSsReZGk8s57dyFDk5uTcrqh2zK2YCx7uxYwctnyLbSVUc876h9ZhUAPa88Nuqp2VEvM44t5LL"
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
