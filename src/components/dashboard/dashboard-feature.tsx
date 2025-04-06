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
    "AWxMtTpcziZYuwxyFvaGz8QpXKytkUgnN7iatpBquCJdCZo7GVbNTDU6txG1vfxByKiPP3L4fGbhFXRnGNfZLkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXeAb1LSajG7e446BSdJZ9VrHzsncZDLXK3thZxuAWpdR9dB9wFPZjwtHTHTYcKW6PVHtGDx7frsvevf4K79Wvi",
  "key1": "5Hnh2i8M9o9o213fX6rsJHfJrh6xd4Tzsa2PjreufNEbyRFLjfTov3yTX8n2zjnFCfMkgD45Bxi3voMzUpADoULP",
  "key2": "5eZuNBBxi85hkWJCFWxzf7jJjNsNKKsPqt8B9o5mMXDGaujMcge4iLGir9B7ThyF8JXxt3LiDjzpUzAwwbBqcTr8",
  "key3": "2WGKM5AyHs7zhMJMEFpsJb8PeBiFVRcfBzdD3txsCXbwuwiDya9U18Dm8BYsNhGaKegaX9GTr6EzoP5jUKYrN5sh",
  "key4": "31th4brVuSYAMRKRD6Ace967mDoWSnsiy4NNmcKXSFQ64zEhKThDZqMv8fvyqgEWrU3YMEJo3CGZzp2jSTWEb36o",
  "key5": "21fG4XMyVPobbu37JSHLX7WsznrTafJWMKZDAQd7YrjWmVmhLpfW3xU2F2cghNNqauKqa34KjLYZ1WnZySmUodF1",
  "key6": "4hmSScEjuTB52qQ79ujoJSKJsFjK6pPNXQzmhxYUzLu1oQG1mu5QEYfz9av5ZYPJB8NRjxQ8JtzU4jPdWAVsuonM",
  "key7": "5bav4SLJkBuqWE5pW7BFw4q7h6pzsmUxVMncZUbayam4q7SzPerHNpEijqeErRsB8dAxXDS78uXvFAYJfPtKBA46",
  "key8": "2qCrzxvAGnw3ednLmgVUE9bDHW6JrfD6m55aoPAbJXgtqbJgFiDRLesDSDocoNh81jAvWsLYAS6xVZ8wNmuD66Tc",
  "key9": "rXKfzQZiXTwFuGu5D1Rm3KuT8YMCNMn3Buwp6JN42SDhTUH3qi9Loo1Y7A5o1bPxY1hJQLGEzLDA63evC5Uq1MD",
  "key10": "4Gt1XW8hh6ZYbib7asmokSbHQUySLpQCicwPmo7Ha9wx5DjUNePGzDZUDpTaWsRTmZewa6Z43rE9JgeHqTgCUo5k",
  "key11": "1MvXaSURevENUdcY5C9qeMHVUSZR5gJk3See4r6eQ4G5vDe48BSMnzbT4xC4sHt2t97gi88tvq22E3cc7kfuEMP",
  "key12": "2r2JDoMsPMX918c1BnfnrMVd41vQoQvNWbDrPpfEkhvhUMQXApmwT5Z13w1vx9PWXcYwLZbD86sdBjjffRWXRyYf",
  "key13": "614JWnESVdEz8D62CovTqVvFBnP1RcEbKf7RbKSxatxbmQ44YFuV2f2ynJ1CTxYjXhTVYE2PjcMGcrjDjvWTTYSN",
  "key14": "359dzXm6WKXhehHxBYNZHV54pb9HPanZcKsFEAveFzchCZU8thX6wj5nQwF3oQDbGs8AbpqtGNwGa2im3RY5Dpvc",
  "key15": "szJq6FncmcbE4sVp3exgNFDNc4EZj5oESZNC4ZGS83WN4UNMuvPqKY8RkQBX9BGHVWFFykj1ZjdzJ2PY3tsVe4h",
  "key16": "4ukammUrbAe5tMEZnvATFGFUL4VNmWYK4Vo66PLhPX5j2ncV8JxN2ubTvn1Z8tBvmCPPfinPzqSRU4jHiuoqadvJ",
  "key17": "tqkfYXZfpgQ7HX7cQuXUXccf8UbXHjw49EKDruPGn6qjtj5QiFHSGBDzytoPCpwYGvcwLSTFj43zFaECPLgoNbC",
  "key18": "3w82oCUER6aCLvXikfYjqn4bNsYBTxpyFa2g3d4zKCQQ1Ueqi1CQ3who4i6Qg9sKx5jLDjn3h9CkvSJCesbVxqAH",
  "key19": "1Chy8qNvr6CWEZCSYDu3FrCzgpbtkfxrmsMLYa4mqYism5kpG28dDJvLdZLMJby331j5svuvJke8Fzg2wsdzbWN",
  "key20": "5DJ2DicxQUyxfJtfwhuofRdD69Ypv5sY2dFsWJHuGvH4bMfKKWvcdu5whWSFo9NSB7irnX2z52oZxr9epWqG3N4V",
  "key21": "pJjFnp6rKs55Z7fxmSiiA9qxoaZ5jTVN7ox1i7zs9dG38JSygYwpPuvX6mxkSLfd52XrWzWwd9tf8y7eS3u4StT",
  "key22": "5HV8LZZjpVGbG9T38aAdHGmMk6kXvFChwAzWqhMib31ihKRCAiQeNVHFcTUmtuPoMD7Z2kCzRAmg8a9Hrw34usFQ",
  "key23": "GZJcSD5S48iL6EaSVEwmNh9NohXspgk7NGmQL5ziuFBZqyF8saiCvjvSmbTN2yC5Rm7JQC79h43PbeAfaxLTb3g",
  "key24": "3byjHj9vfAGW8jKiGmrXdUhhNGymJQx8FzEFe3i1KpVuEFHduVkCnKCoRWU8ybe6rzNiekXGbeJC9gkNJ15XCKgR",
  "key25": "4CDvCsMrqpQcZWuEkvZY9mhmF916JnF3HfNmfYnJVGw9sAvLL7pqKcMPmNgZ71FFFBTmkMAtzC4WH25yHmGoPAD6",
  "key26": "5AH36p4kYDf8Xi43J4u7GQ233yWTsRja7TQML9bGcQRAQraa8eAty6WGrmokXFawBRyjhSjCFCEeu5HnPvS8vnMy",
  "key27": "2qt2r7TY6JV1yq7AFqx8Q4DDaMfLe4JsJaG6S7jQb7Z57HRi86g22uUfyxnimeHGXuq2YoiaNUU5QV2nGapGKzXj",
  "key28": "2SbB4LxVPuUp7s9o211iQZHPrTVR4SBKZ8jKiMqurnL5Uh6eYSbuxtmqTPKgxYsM8VJsiYsbv2LGXv9HpbNhatWd",
  "key29": "4usCAhFm9sSYTRYSJajnourW5B2cNtS18eYntx5JcyJ43aiwfvFgsuAZ4iTsLpQimVxVZMM9x8hPudoy1e11i57q",
  "key30": "8CpVLJM3Mexo2zM8X6RqktzwWQGgCUjuSHZArpfXbJmWstbsHXNqatKbmX74Fze82ztvsXbWyUyeYu41HProVCi",
  "key31": "57HS5b8qeHRsTJ6t1dohcpnFJitsErqYeM9oYHbMqR6cJ1WvXTt57EafgpY8F8XEDGqywaCdmuqoVZ6YAWgaJkw",
  "key32": "5ur6eQ7cwcpz27UNria5EFdNsmTAb1iatCnrM59uTZ1yoqjC9CS9xiMBtzjKoc8dMzhwy9ruPmMo15hc3ARNjbLb",
  "key33": "2gG8H9pfnUinyiCKU7ixyy4q8wYp9SA7KBe6zmTFoCBxtF2sQKojVvae2f8bfjV8f4EpHUbteMFt2p935PDQhxop",
  "key34": "GZmthKcVUFZTJbcAH3JpiS57adZznQf6ytv1sNnpLNP9SFGHSWWzZMMZLPKK67UA2u2XwYfALhJg93XURL7ktqh",
  "key35": "4A5oWFfuctdLiNgE3xc2CjWcrriDTPRUR4v9HUPcZS9JPzCiBLzDkUtDT5zCqecFaTywoAjtE3ugsPMVMz4GKESc",
  "key36": "3yNmTBSK5rUweK6Ej1Jmz1tA8c8LEKrk3ebgJMaHuzW7wMgdtDc5JvvUjSx2VeEDhhdw6QW5niEM6hrZaTA1xQSq",
  "key37": "5Y6PJJfSKVQHSaPwwVe8wdazXeXLs2EtuECAwgwhuS2R98E38PKMxogrHBnjwn8xS7KN8nRjkx64tRFk7dxepTWL",
  "key38": "gBq8YQXG6LeQnZodsMgE1wYfXXVECqztyV9xQ4gfbp1KQ1GYczubJ3m9uUQFQWAJNKporyFSVt84D6UJb76J7Ab",
  "key39": "2rJcQiFJ29dy95RABCSuorSwEvz1oQn48jr3fLLVaCNYdrATD8rMmA2j8A4CNFmgS1XYbfWP1k7YGXSkVkGy9rEB",
  "key40": "2knpvHjNgjLyavBp8oQM5BecCeUJCWM1vWqapick71uHn9tkk5ujoW7hKrUidbSBytbQsGPG4CAZkkPADagrpqUB",
  "key41": "5LbqQbWgjtYYyCLHoPgvaaZNZo7H4vX7JGvsqqdJZCfL3zX8pBAeWAWowQV1Y4gN3C8uNz2ybEnRSBafmzFgoRXq",
  "key42": "5AGXfesQ5XTsCJuiTDowsondkyoQYf6kC9jeBGrRmRW1wPFdFwt3ekVAbAge8zxWkr2bw2zD2yticbu8uA1rfcTZ",
  "key43": "3dAgkY9uVsrpmpDX7cpchmpFgGU6r7spTbCeNPUzSLuoRSw5QYF3Kc2cGPYe43yLuiWAuv7sCjcD2VmB6tdA15c4",
  "key44": "3Y2hU1a9QQwSYWJmJDjQTF8BUknXAuRUbudsCwMm9wqf3kAQcnh8P5YZuWtR2PEcvyshFC8C86PNsdME5Zjd5rWM",
  "key45": "5CADzXuY7jn7hVEQmdHv7ZArDDEFk71SKX2LH1YzZ5D9vcNDSQX3CCes7mhyyvknV5FHxTS3PZCkmPZKr3hFTkgh"
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
