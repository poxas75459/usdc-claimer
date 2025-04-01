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
    "2q8Tf3MM6KfzacCqAtLcBaZcwDxjPJ3FirfMAbwkXyMPPphjYSPST7nmCPpsv3qyGLBrvfqEG4RJs7aBF34oTBC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6eeEsHRKnWdVEFw5QD3Jd8fpfNe2GjaTJsikXfgTd3rXA8cMGrMCeCHdQ3pcfhc5ywhMdg2MPyENqg87LKBPd1",
  "key1": "5ccyCrzmeP9CxNVDcsu8apKBmHPeXin6p5WUXJf3eukTHPF8RsRcTr9wgDBJo9e9KNtNgCZQX44fzp78jhd363Re",
  "key2": "2qv7Tnpyv3BJMVSorESTWruihBUa623F1qHuenzamst5AwPm2j8p1kQDqJyTFAZBr7XjuXTYUzH2GZhCmCAeYrui",
  "key3": "45yLEAjA5ujpKEzgzDimELZS3niAEb2zWuwx9PUd5V1YzYYfJMPEq5ZmYeyWDkA3QUUgY9ZC4L22rdJGW21FimhR",
  "key4": "48wN3T5YrEnoT7uWi6B2ZkxcW1axqbxwUAyDnauVQKkNypoP6rQJ1gae8Z1ZwpofwUg2cEQNV9jK1jd1ciV5N3KW",
  "key5": "3wQGjJ8ygAebFGs1phPCS2FsYzs4JD3mZaKzErabcYYThMS1ntb7sWQcQSPnoiEyLvrJR8tc4gTuGFzrR8iEamZ7",
  "key6": "5vuzhmUMfjx8xjLL4SbtZ3PHKA2kZ7jrAbjPKGKY6QMtP7UB4qHNumnsqa7r2CF6At6CPBLGhc7wb9GGci2eXQV6",
  "key7": "4ARXHMtRSbmMGP23nD7YGJUdR4G9ss9VovXVRUfxmGTeazoDt6peo2CS1ZppLLRKWtb7t6wr18CCEqKbzgaZB6nw",
  "key8": "5A4gAXewzWws3pZXbwNYSbW71xy7Cb3TZvVrgD9pntxNUXnjuk6Y3VDpoKAHgRkSekrmtz4dZPfLKBPZguHKJWDB",
  "key9": "53CDh6TW8QWMkddjUWbZHt9eA69zLdoBinhoP6CwpwmWkeSTdSSgrKJj1KyxS9skCNGvJKDmuonQhbzfuKU8r5Ew",
  "key10": "3NXaakBTWcfzeCGZuyXU7UgJLkeMTAcrKkaeEA7dwVduqpRdBoHnxUQaG9UFdCfvrkrQLUrLBhp1JW4mNDawn6md",
  "key11": "5sTz1x9iBrKsj1sxMWX1rWyNQpMQ1471fkxcFd96UufW8SVT5TNvDp2EuSvLwGTcbYNFjmdaYARvkbrm5hgE1tuH",
  "key12": "o8DNgAofAvUhtsfU12d1dgXQkjugcFnYcs7AQxR5572xPDyjqbDupfiCWJ513bQn2UcrhJgLRVACMAmia6M3wH2",
  "key13": "3btKWGGtwbxJFZYvbmT9wbusoJepD5FJaAMu43evtoWB1H8MsJHN6r6qzZrNywvUnCCbcoCiMuvd8wLy8QXrMz7v",
  "key14": "5Zf3qxjyCysKc3LGRTamgqAkPT5Zkm6zUKymTUdm3Pxtmp9bDEdh3evYnWcjYJZncDimfdv3sMFM4hygdQ9YxDWY",
  "key15": "4zhP2xwRNdNwWNSzR3U4zqqaesy7F25SVvqUV2waD2RNcJvxKoGK3EdT5ekizag83ZtsFhLCLB5RMMNVTEu8rxay",
  "key16": "3hxJx3iZ3S4NR8c52gPucCnwdhgCqaZieZH663ynq6AkfF1owbpr8iy4e3YTKv9XE8WtZNMKHRiJU5ZqcBpK2C95",
  "key17": "Scg7J51816X2FgGpm6r6hBSDVuVehdj5zEA4PhUefmrnnt8waHkE1h23u9pyobWhSRQHi3QqTKvS4qkpVc3g4qv",
  "key18": "5or4kujEx4enZWjtnvstxagCZiW2xc6MXK9wJjENJktPqMxkCAckAq7xkTicmRpTzFMScWFJw82zAGpRz62rX3t9",
  "key19": "2irNo5S6XAknRWarBDU1FZZfpAKgarXm7Hd8oHCQJycDteZHvXJqh1NXGjgjqAFN3rrhLcRLczH3RMNrGnEtJKsM",
  "key20": "3ZpjxUWastTjxwuk5uSXVp2Zmc3AGQWtM6ih1Yv2G6Rhm5NwecnKSM96oBFhAK3EgWub8XsnWMwM3QZbDNUHYSPD",
  "key21": "4iRD7uJC1Ri9TpjeSBrZ2cCRK7h1bJwhKsbNvCDuEUTs1b8BqHqxibeEC3Bj3BietUxrCEUzQ3tbBhAEkyj9YTrX",
  "key22": "3RciHaWgU9ueu63nTCJvSWsPecWRbdf2XDeWZnFowgKdFSZL7CCYLGuLNHzkEeP4AxjnchWsPidHZw2t8nkjZ6Tj",
  "key23": "dV4ZQXrdDN7R35bVx4rSLDb3KKjwqGV1zzBV8RGZRS1MLmPduTx5SiVZwcrtpjogVLzb6eZXtb1WrrBjCX5wPmZ",
  "key24": "2s8gAfXNJ8iGv8JtMiwgY6H2uuGgQghJPY9HCPotDhX1d5hpA8Ru27JyjwrF3UsjPNqzZARWBpQGiq78rdg5Tqon",
  "key25": "LLWr98XTJBwDbrTa9aGHwjc2hEEuknkUxJf3QDiqkzNMnDho232wWJ1JgwTqmrnVRfei4cYXeFRF7p4NXK5Ha1m",
  "key26": "2TN6sg2bTzvPkbhdXmk7jJ6agdATThfc9RS3c65pxRyqRAMdNBz3GroJkwhqqr2okDJmub1ezDp6HYQEfJ8dWce2",
  "key27": "5TjRP54DFLCfhxufTmUmLUJjkiG3wxEaMDMukiACcLeWoSkJeGGAeUwRr9VGeJvytQe6fekqex7sBiyXjXDmBqFc",
  "key28": "C9SF7bEeY8bfxzYJSvs4SAcj1qr1qn3VSPnVpufhp2nEbEuMBLGdVCoEiGDd92Pwu122XaWkBrvjxSAx598uvWk",
  "key29": "dLoAJWCFgjZ41w4AZeExewgpP7uYpbds8hasSAAw988MAHkhawLnmx8vpR6xpNo4E16A3oVHc5CaCHi92jdSZox",
  "key30": "mePYYKCepYPdh781YVDuipqruYpWqbYF2kMbwudjsofekXfFDPizz6tGNFH5f9DTJFY78MjEqDS7vt8tY4648N1",
  "key31": "35smqdsykhtQVBPpvLY3C4Nq9seR7WMNVsReZyYKdFichp1UaWkAejQbric2QRrCoGGxS8M5rzuUdKHvJY35hT58",
  "key32": "2ShGx7jHpnEuuFeR4DYhWcVCQ2ELuis9mqdjETzeJj65Wz9QXVBN9iyKEXQPdVR4EP1nykpxJQUkyiPWEXmSUJjT",
  "key33": "2E5XBc4feuN7NeDjf4RXxvdNwajxXHGW7mCmbL1oHW556Sd3dm3UuKs5FNgSAQLkeZuquYkRDUVLnHFGGqKyRvUh",
  "key34": "N56VgYYZPQvDuKfQtRek7HBR248STKGGhRpJrHupkWdToYD4HR7X7hqMBRTL4YnypQzL4h4FKz9ptBH5xJ97mWg",
  "key35": "39eGuU6a7ebnkM42jR5R7sfbZ4aWeEC1E4HRZCYpa5s3G8DfCMBoFUiMf74sAdCwDgMB4uumtPqpkCwLDu46Qb3j",
  "key36": "62MmD5KV3yjMmU39aiuJb93hVmiG6Kn7eU2QQT3ozLsWHWtqGXP8ZjHMGJWoAv41CMniPTHsX5ErXJyLU72Gdo4",
  "key37": "3p1Kt1jXdM21F7219LLnaRxCUaypMZCpDKdRHMokYPfa5U5swiGE97k1X6bif1hoAR1tTaBLUuQ4BJfjAA7xwsAq",
  "key38": "2YWZjk6P7HUb8vAhS7XeRHz71BAPe6zEhHwK3vfZp1Ap73y38EhAnSfvrLYNH2nyS5gvtQt4QdUzGdfeNN8FEG1X",
  "key39": "3JCBTdrRpQYuRQTHbW2GFiNCV9gu43MFwk12bWwM7PBfHi9YRL4nWtiDXvd4K9pVBBBWYeuE42Uhq8KUuH21pRby",
  "key40": "5Ezteievg6D5BSZcfAuvn9wHtTqwTnvY2vtErZrURjEZAR8szgLSRnGcg6kwcaCb1GGPmBAaW1UgXYKmZ1PH9f2e",
  "key41": "2YDF4rbxMjZZ3veCF2P8QY9gyr4Mkan4kRSS8Jn2SJ8HkFMUbuN1AWL3gADnTjL6WqgUqKbBLAgrKWq6yroyP1AD",
  "key42": "2jdX2Ff9gLDzHtE8ZZXGcvB66QXU8eVMh4UfHpE26chiHYqcs7EERWRW5yMK8ubw3JaSABRJhjHjuH4fQCHh4U3A",
  "key43": "4pzYjiUT6azHQGmqhgr7hYp989QtJ1KKXZatALzKMsEJWmDixR3C8bobzTTJCFAktNCsevccfcoHst8xXizfQqyM",
  "key44": "5wg1t2vjPk9Qg4W6n7H4uB58cr538d4CfxQ9sh7q2M8MtTnVKDxKm5dNefegoCZbsm3PefWJWGD7D8dUS6Q8AgJS",
  "key45": "39PwCiJZZR4CVTFCAyaixbBVhVLd3fWVhxtwTiNZkDmzTAWG2KiSwUHxLcaZR8ZXJSC9af3gA5MPaf9ML3fWuTBJ",
  "key46": "5c7sFxf7NGHeUwFwgwWMtJdJbpjJYPRdMKvGV7updkdXQhNVxb229QXnQLHknkNufpuubDesHHNqSKiMpg2iNWX5",
  "key47": "5SDPyHKgJYVKdhaMeyuefVaUzqjowf2RsqxsTyAXd9NjXpWLDaGb1ygCQvko8oVfS4ZKgXMM3UniYVB3zZSxauVz",
  "key48": "5GX9c1JKXNfznNPtRDRYcoLER4jZcx1n83mkngevh42Hm4kU1hyiAyYxMhWft4cWYcbdrDwnicD6uEr8WBbttxC6",
  "key49": "5VmpsKca52VWtoL3zBdHLvQ2PTdTvoREFt1sz1X5wRAw3ZDVwrzqVbxjHkco167FjyvAHKL9yQAbPvrgR92WuaQZ"
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
