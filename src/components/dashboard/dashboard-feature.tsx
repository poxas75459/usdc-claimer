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
    "SEXTvQqZS2t1gHSSFbxQSCB3agJrJcQs3Egok69YAJdQPqwL9rwEwBEF7C5JTNUrQvtSsCeQqDBJq2kEV7CZGaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JRntfMHAZw6nCgh56b5KymDiAyPWzEaV8f9vWRDawWisEAS526N8McXv9JTge4wuD3UDcHuLrqomUNRkjFu57b",
  "key1": "46HrXEESWVT8xpMDC91AD3wL23AfBnXpkr88m8bDRsUKpRjMc1HhQPYYnY1X7QLw34EQjpjM5rhYQGXXfuyz3Aob",
  "key2": "3RZ25YdhwGziPmsc75vdrzpQtUtZZFukWJ94z5G3oVUUCT15EFKHEesE8wXyeCbVEn74vXvpuoBGkniD25ceXT8D",
  "key3": "3mWemcgDDU7aTyrcfZchh7E9Z9Pg8YxBZUUNDGAqCSnKxAhNc8bkXGiPs4iAd268Yfvu7oJEbc9D5Ds1rXombbYd",
  "key4": "5ze7oLSQYsx3gadZjYrgPhiFCdeFAs1nu8VhMtChc7J3iLVwJLJQPvXgGu6wSSijdoqP184fhwdGZZ3TZPXKuaED",
  "key5": "3P1bbHbs1N63a4peh1Vfh1TRfto7wqDENzSfE6q88HdkWeC9PRNdMLdSDYcbCyibzbbinvhNhfH9bfvKywknXQ8Z",
  "key6": "7puuks3N5HPFt8GKzqEZERNhr8oZHo3w4C8r8yP6VHuNLbq1FnCNGdd3XvKzC2wrsqHcVnSLv97MKiKYP85Y2Lw",
  "key7": "2G2nDp7sZNco7RfxCd22ezV5xu7JGSGW9MhmNGLPeWG32DkJr5DmUfwnWw76WxCWctvKcLVDUUJbFbEYqwDJtuMq",
  "key8": "3qLBahBNXqxRig35LS4XfKwjn6rhWXAe9YND4RefNvAey3BKFpQSeJhf5XcUWAW5ZdTUiYVGrvV9Spkh4VEPsgVL",
  "key9": "2MYiiqGsYPVYkwj7egkyc6izm3BdvN6P4b46QSHxzf4y7CmtrvqWyXYriinfMfiXCFMRk9dZfRH8MctSLnPkDtze",
  "key10": "mvqHdfcysTNkLsZoXrKG3DWhvrpz87vzaSfemVWYKkMPHfds6HzR3xTcWG6RGwdRGfud81udJ3PNRPjbXthLb4x",
  "key11": "5XXbVUAVCh2n67jQpQaiUvPwtU3ssJdVZSoYB3yuuzTdJAjVwzdDSU3e48P9HJiAYL594acBNTKnYfbdZTGHzSBc",
  "key12": "5oCeubDp1w5fVPjepFGdGX9TBaEprvFpT75LZfrtrZAGZT2ipc1oDC77KBToFCfHLtce9gCWtxF7wn3ScRHdpHwG",
  "key13": "67R5NUV7F5XVUZ6yK9iJmYACcuNRGhdDXmrMpQ2piicGxjfYzmzHA9UL917BBKZB4A6854sX1iNvat9mWHZbLFwb",
  "key14": "2jzbnnmGJPo65RNL2EGFtTdhhRrU5cwuEgfqceb7EEHLoMnot76dCtR1uxDJvVUAMr4RkTKRCUCKAWQgTkuAaA5h",
  "key15": "4o3iYPQGPP3JQ4vULaLpeYMj2soMgdX7AAyu9jj6Lvy8zdjiuxmgu129EppRJHepFHvoSKReFZ3L7ENb7mVrWh43",
  "key16": "28LinewbFJQv9RCtRjUNzaxwveC6w86apaKCaGKSV2RSsRwgurkYPWLTpexZmwb8NjEU1v6ih4m38oEz1obJL6y3",
  "key17": "9v8tVoA4TgZyyct9rEMnXisv2qpjKEJEyUjUCZCWUP4JjKZ4uux7age6DRTq5iMvKcDH31iuJG1pSd7HcbbXdpj",
  "key18": "4Rm7mo58PGFGbkhBWdat7VJii8YtkxBwp32MzQCCuVzonvjzBCsFfKZCewnSETXT5dC9TMsqy9HBzwbUtLkFSuSX",
  "key19": "4ZvbT11Dr2rRFdr81AViDGrqamzEpEzkXr1CNj9n1eQo6U2ZpiBvpCMt7sHczEV9eieWazwBB14rzQUN16Xd7WKQ",
  "key20": "2kn28sASnUkJvZupL6t8t4Tzz454bgWGSLZ61tdyYN6KhPnd8WABqRAUskUs7KLKsQyMzCqPveckWG9Ua4avzXQ1",
  "key21": "5eLVzsiSjoTqMoELqjKJmfMySdZgEZM2SPYhDveQRoPnGiZqtAZ4PavDtDd5gUCA5xeACpyEL1tZT31W1hWfS6s2",
  "key22": "3ZaqUPNcjHt1ZA3C5SQvTTVshC62LxzbVPz1N6erQ2CUdn3vAiNXRaY862yTYNi3Lg7wPwfNRYFy53S72xFcMXGy",
  "key23": "3uGcMJfDWG82X9BfEw6b9xrqz7BooMYZsEwaoJwWpYsU4tBFCAhYfREw2VEZbXZ2oPCvSLg1JvPfhM8Z5EaRK2de",
  "key24": "4M44PhpmspbXkavNkphCjmoYoxSRCjEnJ2kE6XyiDo3yihKqbU37NT6CuNvQYGa48YzZPnstBAcJgBZirxdDShTP",
  "key25": "2wfDudExXm3pcvn4PDpn8ocVym17P2yMaXfszip6H2U2uYUYLvMd7my5vte4phFmpZQQv3LCWvNoTqv5FmAtiMNu",
  "key26": "5z6AVpvYfhkSwo1gPD7Hsnf4C5XtEMLWTQsZ754UJMf6TzcrMvhixYK9oBhEpi17PSNvSpWjF6XdmZz2gsoi5WbC",
  "key27": "4gbFBR7JgtV3pjJfAGXPErHnzhQUp2jg29DHyLdyfwgq7fHnrUk1WgAPWsEgKH5MMHJHc6apXZcY1nG8RKuFbhyY",
  "key28": "4KTM7qaSEHqfyV5kntUBw1BL8oGWPDsg422W9X7DT8wWonxr6UNfS4UEJSXqnTq29vp8B5xuNdZqPvCjpNyfkGYA",
  "key29": "4jgu12VqafzoS6HRFjR3Cm3MQLho3cJXmFYfeBpoBXjsq9NsnqmeH2c8aqo5Fc7RLAKGsjUJmzNPoSc21ezw94nT",
  "key30": "4uCKDrG72XMtgcLdxQ2hnQpjVXco6hMY1ybtMcfCcy79LKtfj9JmEbT6YB7M2onuZeHxXN7CC12pv7KtXQQFBdwk",
  "key31": "4NSwd241QnAYKDP9YWRQnv5mnKLdfaM2a3EjS1fJiidizzTU14i6YhkWmK5wbWA696ReyGBXVnZUiQaLTVrDVwp7",
  "key32": "673z8gCTwB6NPpqDFC2r4CG6jUUsohmiMK7S46TaqetQbh5nobtXLihd6a4hVdUDgX6E53dv287aEEQD8LEjoSos",
  "key33": "5cvPT7rG4cMDtQ9SXccQbqDzb5oq83uRdthAi19XUiHtybM2SLhwnepPVBAuYHyrGWoX86wHN9DGRWssMug8GFEr",
  "key34": "5axnRE6CSjB3LEXagjZ7avVQyQrjemcvv6K5B8DVUbAt8q6EevB4sXweF3wSgCMzLgd6k6nSVkD1KEL1ngM7KsZE",
  "key35": "66DJvxabiuwidUJhoiwQzMCe7Lppb3xGGjPwoaGPAzAtWx3JhHW2UVetkpVv52B7pntd3gBy953xiBKfH6UR1PMf",
  "key36": "4BEs4mubvYotVppvzpU4X1iygavXrGmihkkSYR6wgLd8un1ecBBsyMVp1DeQcttahrnnRfCUbuY4roM6cDHDQmDM",
  "key37": "42PhP9p7Yer656nN6Sz8TEwUL9BrxMCya9zkYkSRiRb5xy1dU3FJGy5Dehh4FveSqkdkp9uUwe5f173dJGbibpQo",
  "key38": "42SdNbRwemNsYaU7P9Ndga9zhrVYsCMwPzpPXbGJEngFxxp1uvPxVdUFuL6xRAFFZcM64oHM2yq9YcBQptEiMZBP",
  "key39": "5cayxcaPuEPry1b9YiUFb5vpaghfkrL8QKp3bDQAgyDZWB1bKjYwTR3mQCz2UmrjBoGuLivQAqrLMfLWGZa5BAXT",
  "key40": "3y49CSgcyBebS6shsjPLkTqS9t5QdzFN8GKJ7FJ3MjuEUqRNCWEZBFCfqWPy8DeWwAJ3AmCQfbKtWHc68xZK2n1Z",
  "key41": "54vnqBgEcenvG9x6E2bHRiHgiZxHautyknBJZuTJ5ZBFSACA79nxzbVL7HHpvfxwPeUBAfx74WJcHZfqkzPefzKX",
  "key42": "51cJ8RXxnnEY8qJz2uv39os5iACZSaxaNWX8EVqg5nFtBFhA1K7Ag1sHGZ1q1tQBSQXqwViAapkzsoT9AbM4JKP1",
  "key43": "4StDbywWmsTe1LeUf1kSNsc82Zb8JNsccATCLnEWmy2bBH6bZyjioZGvb8nqiGaWzVYAs1RootUx2r6xGFRnjQ4L"
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
