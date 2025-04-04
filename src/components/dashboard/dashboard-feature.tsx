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
    "yxE4ztGCcxGwRe1HrrSws1NUfRgwPrbh2xZjqgo1tMTmKdwLq3awJGCdR6SPL2M3Fzqb1g7qTvmu1eFbkVBQbnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35i9d8qwyzstoC4fBwiX7SG4HM68RsxJFXYvcJbfxZ3aJiykjiZn1xwq8v3nTrfMmZe912oH78gtNP1jWsbd8EKG",
  "key1": "26hggT1c9CDLEHKER3HybAAsPtrNr8sA3K6qwChUadz2WdThBkDdsE8E6WDFFoVZmG7hB6HHa4DE9aQmdgJXccQp",
  "key2": "5QU8xXNUFb79jR23EWm5YeHX8QPMs6QugvjAxvV2AZMpR8HwFKAEV18c1q8XkUTpJ5ptskKhURYMFS48L9DiYM7d",
  "key3": "5CbULpikJqsNbbEEJzTNX87Pb4zdjpwJdnb8xJYai15LAiEbaqwr7Breht9of7uhjZ5Kugbgpvk2gm3FRJeueB88",
  "key4": "2vEgSA2zXiGYj847XACRUsThdHjzFBdCxfPm7Tt5DF7DVErZWMK5xvFgBpSiMLbqmD4gYr3cmvPpM1HMqhY6w4Mk",
  "key5": "2MukeqhXRXvp9hNAY8iLvfjrZDQ4JChRW1A9sLwy1iicde81TNrzqP2XZfyTVXhFjivjSAaDaYnTgf1vvbWKGgJ4",
  "key6": "3ByEojWcZpAnLdG77no9PG3g6g7dZ4wY5bjNiDD77e5jBRsVsQYnMbR8FLWVnp9416uhCxCiaYUpouSree5jf8QY",
  "key7": "4tVDmgZDExvRVmhfTMBos2EeiBS8jz8q141VtWefuRtXh4xufDJqcRszUS9r3Y3RruMpzbv1wtyNaArZCua5sZmc",
  "key8": "5NKjAu26BTC99pjhLZRBHZv37v3TGnPqM9gL6ec7Ri4biy4kTemQfmD3xt84eAjTutPPJKS8d9doyxEW9u5v1YYh",
  "key9": "5NcyqJTvJvD7eELtuw9dVTgYKRL2L2dz8cb8u2cfZePgrF6g7eAu4LUuFwfgiwCEC2moymPWZzK9A7mcChkC9d4d",
  "key10": "59xu2NRjuTGEtmfGzYvtJFp9qzLciJuBU45ByxUkyW2zHxBjBzonguhpbjZf21x1V1a6kYYEkdYfDJbcwDFtwgEx",
  "key11": "vz9FdgDDncjbiim3rrUX7PiPdsmLjyBu9qz9RvDUmKmtrh7iNJwuQWTxC1UaGZw5PJ3ah8a1CYnvPzFPeeeGpro",
  "key12": "5zNKEuE3v2Bn54CYNvVXRDaHjZN17XkoS8CEsxrTqRih5vxupqLSjfEyJf38zMJ3GsrNyrXUJWhUcAvXHhn4koqo",
  "key13": "3wN7o9d1eMqgpnLmxWiLP11kBaYwwhm5rjRzxwj8i6rN2tert4BKKyb5BahChTbzdtkbwSxvfSMJdtUVxMin29M1",
  "key14": "2auaamHdk7ssLza79BpAr85qUWTpmWkGpP3QBmqAJjgEsas9VNSiG3nz2dW9uJQ579fytXfad8n7imDrYs8n3nNE",
  "key15": "61yjjcCddwP7zweL2S8hgvv55y2RdHjdnMWaW7RCyc2d8nhtnEZbJm6BRepZPNsH7LtjVgasmFBJN51rhuf8hW8E",
  "key16": "2PSDRaGb3z4wiunjMcAzP9ZqAsbFBMkn8HrMf44dJLbhQfNx495fqX6dHw2mugjp25kfD1RniHEkt4uLw1Hh79vL",
  "key17": "5LcpRmQBgLEyHb3VwqVmYsJNycFdgBBiUJFWqH5WqM4xLMv2JN2r4fovnVcg5BYbtj4FR2So5kMUKXBWp1hJafMM",
  "key18": "HYc6G1a1wh9jp7QNbVPAKwMGJ4XCDFiap2esgieFi8Hvcy2FzqBcMQzqkDY519gWV2hVFgzunTTiuWsbryrYJCG",
  "key19": "3P6xVQi54c3RcyvxYBSh8gSinDfmZsYqPapwEDFugDNPbMkiNSinzHsBvw5MrDVqfYuUcnXZPvT8T75i1qBjRBmf",
  "key20": "5jYARLmQf8NnnCVLMiTt6vt2K1Mg4yqAJXBU3jeDKHMzJK53bd8N8mogx8XnGZb3Uz6ZXjrdUjQXwQ9upcm3cbAh",
  "key21": "4xqfiV1stvbnwViBdwfgSrBwopqMW5ybC776PT4KBzxhuWzgx4TTD37suL2PJfJBBgnN81LayVY34Dw2NSzmSSox",
  "key22": "3ZaGhN4AFNUfyGacbv7mNDCgd3ibiPQrTVWnuAzvnskVS6H1ZaCrNuCiohtUj9XqWNtS2wTWcRSN9cCFc6ngAb6m",
  "key23": "CL1HnGsJcAhjyrGN4LpamqkJCmTy4RrnwbzYYPfBr7zfmoY43rNAzvLLan8T15ohkbVHFXXBuubcH27pM1LBw6m",
  "key24": "4uSmtioBdfWrsVLu7XKkzA4wCQY9wQWUm5h7VdjVemrABmiZUFSUqivYG8xrnSUArtTYhm3JcY55ezKCyYXoDL54",
  "key25": "TTC7wFws9jZNPxYaTkjy2eEwBhdxq9p7vTn3BB73j5Gf5rcv5BtUeJL6WfysHDnmZwNVJb3cT8FM2KkwidXrzky",
  "key26": "3sYDSnrN2cf2Cveo721Qg6XvVYt82RH6A29KeyEYAek9Ajrg3oGQn8WYZTMHJ6vzex7P81RrWvGujAK7iqsM1kDf",
  "key27": "5KvRUYkMSibMmzxw9qP9Aa8F91zcanbYPxLwJkNbcv5EJDzTT9zGVY6FQJuNh6XpxhF7jRy2PQdacE4Juan54SnE",
  "key28": "2QbeyWfy3Li5hUpd7orwYvkcdEtF2CXBvivzXug5eM9oyo9owV6vhKuCQgbM4SEKfpZa5d3YSYuHyr9E5otELL56",
  "key29": "2WMdmWmh64ZVCY3S8Y8DY9nyAx4kYuenohHhuCc5h2S5Ay2e5W1EX5Pb1fErG7xaZ2GExQwFPvsm4xVFMVSQssau",
  "key30": "pJeKE8j2waSzZxTv8a2RF6dkuZTqdGLPhQ2KRsou9PTmi3bPXcGVvswvAVT2QDd8ZVfpM6UdyATiQkYLUFffiWc",
  "key31": "3NwEnxFBCK6FoMa23mUtvLw5orqVtN9LqwaHNuCm9nzXECNiWmibg49ZvnLiqLczVQqKPPD91f3EayQ6xuEiGWrg",
  "key32": "CB6sN5dWNNBSnjwSTiCrasS4BofCJEe946ufTzZxCQj7x5vZFMVRxpKYWaocxQe59deD1fCqDpBdydAG8HeKweJ",
  "key33": "2atk1wFmm8UJonMsJuk3v7oTaYo7pbmHawy9RsvXfKKikLUSEYR5BKqwkdKZbh4h5E8KynWardPNeSJHTfx2bDL1",
  "key34": "61mTNBj1XaFKDhgroNsELGWMuSyAYstkfuKhrjyqMBx4wwuUer5Pd35JE8m6E2bw77aqWWQ4bRzUQJniAHCcFofp",
  "key35": "Q5z4myiZiuqsdGFBpqUAQ428nZsU9sjaiA7b2oi2FJoZbbo6SnsRP66wEwmdqAn9nxjLuB3NvMTMQJzteCFy6v6",
  "key36": "3taAen3Kd1FED9qx6kQsef3wmiUerwDaTCW8JaDPbujvkcu5FmLG7gvzb4hN6jYrjLZk4mEp95QNrqyCHD34ZjhL",
  "key37": "65YofTZPjnJ7612zBcFsEosPP726YAeyc8piarPM8494qKDiWjLAvmBGRzUD3xZbPe33r6fckkBAa6arPKXBB34D",
  "key38": "5MMEspgDt8iAukVuPw8RzndexxPv96U62QeZwcnbebD2JebFDYWsVvTtWuHGbD59gHYUqhC3CqZjfYDgmie1ewUf",
  "key39": "4uU32CRLtzCpQEB1qDRoUB2oTq35hwdiNM3BFPjFynhHRxANoTcTPEr1147utDjfopcxzaBaDVGWUT6R9wDvRjdD",
  "key40": "4wTjFbR56rYeq9owatzHYDYWJ8Pn7WReKGHGMZckvAeKPWsokuHRsHogqiYCXicdKQigxeRPqqi9QDaJAx3UUuh1"
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
