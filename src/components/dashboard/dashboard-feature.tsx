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
    "kvGV7c2xWnstXPSQaecXsu5c5B9KVsmqBksmFSwjSnZUohYoUtnaSaQ6Z3or6g4Yih9Tic1Gcg8155XQTPyJnPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dFkJChczwrgQnHDbmSWUMwrEmum934Z6AA9UveLYoBojk9NyNdKcK4e3PpFZukDci4bSEMA6VvbcKn5VHoxAbeJ",
  "key1": "4MaXmLaZ7gqmZPQ6QzRBQquLDciTRsh8bGSM5p1c7r6HH5GsX8dUi2jubbXm9uujGW1MLeMFUeaqSmUpfqjnXg4d",
  "key2": "4kVsbWWnUPXL2oMMnYA43TCqqquvWtDaNim31nk1eKwSYePYzqNKri5tdWGgYzwM18W1y8XtbD2z61mfYpRzR2zV",
  "key3": "2xeHzSjE42rBzvXGBF6k9hXWVBkNKY3LH6QhtgGAbDQ7YLXq3tbd5RSW3JgByNBVVs3qeekekoEZT3y9TYxod53P",
  "key4": "3B9V7Z1UdHjRrpcaFSTMWuLQ35sBsv39VtT1VjFBx1KGEpAahcxTz8buZzuz3NDmmKSjNLj4575z86zyMRw66mv2",
  "key5": "UahoFwdWj4CSC9AKkd9zjbFSU8tQz9PUXu5nobw5EF4smVNy6M9mFvbXtP1xpGyN7dymp159UHWUFh88rdQcfTm",
  "key6": "cQmUEN7U8DsHotJ8EGfKVr1ZTShCuHinMsnqGGfAZP97L1eJEhsqRc3Ssr2UZJxsRZFsHPn282bsRSg4XD3g5YQ",
  "key7": "4sLcTiJFqF2vb4sC67zfFs8xqwS6xwbNxuYBf1Hsz7FbvzzGyaxHpdXZhSqJbNhUiuC3J3ronjPzMCJbqjLvyYJG",
  "key8": "4Z1zN5cNyR1gmUhPHhfH8E3dn34WFDVWm7xeqboywwX4Xtiwg4RCe6sqRV4CUmxXVkGjfgn2BTCJHhZDKQof87S",
  "key9": "4EzoyBRjo4XXGaEhtk8neXaKjd2atuWpgSoJH6uPuBkezUdDgyakdpURYxyxEXJK8yr4GNiGKwVypYFeXGVEBaak",
  "key10": "t5CPNoG6bL1MQ3WPPGek6drG2V83EW7mujBPNLNtUfL71YmdNUMQR4ayHHDEgDhuHQsKQtQnj3Rg4L58RRJrLUm",
  "key11": "73eK54i6VH5eVbaYBtagbX3MkJy4QnreeRaydnt4umKyFpWfxDNkcgEubvm7S18GrqmY2vezp6fSj6z62C2eAXQ",
  "key12": "54h1MaVU522m5s4aRdNYPBMjCkQMFn3Dghg8Dddrr1dhxVx1zPNviForqYRiGoZt4MbLu27CUL8ys58qQxRyXQTW",
  "key13": "2jheSGHGvoJ55RLkREBRgxuGmwN6tHSnJhSzUxew6gAC1eZ2tNJ8n5J2w3KTiGoHQfMHNfjpgek7ovVFrJp8q7Tw",
  "key14": "4CbyyVXn7SPA9nQjbbGEYqv5hJAehBUetxBDVuM9g7hbSs32MsmNTutAJ83EaCLWHz8iC49ssCitP6g2AU4fMPyv",
  "key15": "5osZgrxMeJUPjVUTuavD3jqNX1eYcT2VMjYV39J2opeUt2GDQHbPauNBG1km12gYbHjpaGXfYZUjoXAmq1h7bTws",
  "key16": "wnJqFHduQ8HUvsfZnrtMrMAPcC1dsgQf7oopkxoCwNnF8tKzxi9iTNxkw7MFtf4qv6HFZHmirb29QJHYUmQZ6L9",
  "key17": "2qfNLAXJGwy4bGPNcanPU2AqJzbNq5NU3v5MResSr4FRtg7Gp8JwGoa8mB87TfpZKNnD92dKio6vCQtwKUk2YyRc",
  "key18": "2pNeLYiDZgrj1ENq3gthXHFfHPsfU3FeLPHRGLwZ4xaxbnbTnQWgmDoFBEtCBYDxJNX5SaEgqpeFeUjwL5Ke6rJt",
  "key19": "2BLeW2KMUeGtsstpAUgvSj6fW2ie7KF58dasUvtjGjndqAWxV6rCXs2KFKJfNjUtFgrNkJQin8CbFStXeaSfwhAe",
  "key20": "5Sxv5FPik6xXnwYX8sy6GmTNXHSKUTtR9BFdwjqJk5rJyDpZ5amjpJT1VYixPuBXagRymfmEMXU5kXM96pvR7aDx",
  "key21": "43YxEtfhJkW3XM7g5uefCpy99ViJMNnFLAYeuXz2Mnk2jL33RtSdTrSnPEiBxC5wyQJJkg4hmEpNoHdk6DC52Wt5",
  "key22": "4rFiW5yKUWC6qhMetCnUtS2v6px56A7dAnzvVDuycqeiaVeXAEy6vyKH3WmFWRTru75Du96NBjcTG4GNZ1gfAG91",
  "key23": "2ZkvdSgU65iCbuUF91KhKEU6QpScMKLxzMLxhReEfx2T8HapF36E8mz8eXZg4kpzhirimWsAXrTDQqiRobVLuw8t",
  "key24": "VqU7Wk1Jz57sWSD7ZaGvChQrqD1bTeadptj8EgwMPRLJyZtNwW6w6ES1pbz6jW6s3QvFYEmhRMRvRz8sZ3kG4wW",
  "key25": "3nGQAZRmbcK3ciDQxwKNUeMJhTeFTh2a2hBqhqoTcEne1uwYWjVAbEybd7cazmso1RLhK76NoSpRFi9vFQj8Bo9T",
  "key26": "Jv7SwqN9SvXvXtAFCkMyCCToeFqHytSQZK3SpeY1BBrs4BVSJFyn3v19DbbnzzSzruGSaQPnv3gfwfZy584U89o",
  "key27": "5nekaGkak1acBNDWNaJhRk3ghkR8MrHCvHmUJXFFYwZh31dxVK83EFzXabt9Ttk4bQwqZ3j74YuDqBQqRFAAGZYd",
  "key28": "18gEdDqLUWfS8sb1F9TfV5pA4MUN9J5ZugLgJdVH47D1P7n5sPLR6retofGjUzCxMmxHjfnGxysVheAJwwLvvHm",
  "key29": "5JcLRC1s4Hvbbd3KZP9wcHkpzSqWZuTP6qhiyW2rbQ3XtkGxyLky3LC4tGSBadugykwcgG1B8Lownfy9UY6fNcNv",
  "key30": "2TDvSAR4LbgnsLunTzCAQsS9NBx9JQZAwNgqicsu4vaP42ika1racYhN7ZfDpcWGH2GRzvYhkPCvMfmvkZrNG7Wq",
  "key31": "4NFJYbXw7n7pBFKxyWHq5D2y3wmRbPDF5CoPxMmCb4pPCxXZBgQ1gWa5GJHV7nihdiY5qaeZAshvSHECKdWFRGFW",
  "key32": "5u5hdp82CWCzLdVRvaaVVaRtjj5LpSZoRn6eHsCUyB8HSL4RdXLkqkm9NKByxqwNxkm97YYsm2XKuNjkWnj1MgBg",
  "key33": "3ZikAH71SJ7vKbZ8XzVfeMnmzknB2kK9UC2781Cwd1QwX2DEXEBh3ktVuS12JqEdJZV3CrHaS8Yo92C4pc9utmWM",
  "key34": "sEsCSctscipZX41btHKzMYpLQvdDUxYgDM3R4nyNkGyp3wgC6QAFwE7xg2HnrdW9KNHpUDtmt8kW3P3tru488is",
  "key35": "4fx1Mfud3bgKYeGb1qotuRnNggCZGyMpPhbUy7U6qpvNxiV5pA2w5tgp3MmTbrtbZHRoH2Pqb2ej89mToW1Kbkh2",
  "key36": "3GFRBXr5GMrLeBssf9DrcwaRoobYFKrjudGRuXYaM4nDSjwsxBJjcVXRmnn3Wy28ZaYuo5uFB3Y7Bjt4Quzan1zd",
  "key37": "2UC7v6xjzSrNhQHCFN1E1vQDoGAEMWjCH9cqsHs6e3dUjcz52qBs715VuzsLQLNfnLtDwK5uL52EtBosGrdW3FjH",
  "key38": "cUxsPcKUa9K5vpXSc2t6jcoioNQhTWbPB3Gf123fu9wdCdjrAC8QFYK1g1qZ61MpdeFmnXG2iChT1BqwKMvoQtU",
  "key39": "23e8p9E1eEsAivjRmd7uUHdqBy3PWjJ28TPKeF8ThMpBALWQ7eCrDup8Diq7uF7DVqxWu4aevEjMZGuW14NDdpq1",
  "key40": "5vWngdu2dwpZKdTYDDrhCasMirBUEz9QK9FFvxvPjUU8DK4P6fLgGnTNppXwKeZkyiUb8gvyYFixQFxmDYzuPJrK",
  "key41": "3R31Mis4nN1gUQhkT1dj8soyh6wmqXxAqrBLc1eAJUEoRT7CN2ZMK49idPSnKf4yu3Ms829tjF9ieEUmsbtcvp8a",
  "key42": "2x5iTc48fPYcJ5rvJ1ARGUzLFefKsre8MxPzGLXgh2tMvpTJBpYpN7H9ocZ79rEsSqh2ens9vmaNaLcUGLfpetfC",
  "key43": "39gezw7tikgVNoGmRZ87i8JKCRTHKzuBshBvtMuWYyVTJA1ZgBrDoL4Y7SKrLrhnLKLF8zR2h2t84oDEYZQNhMiN"
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
