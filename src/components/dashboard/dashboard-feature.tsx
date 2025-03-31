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
    "5g2QAcHuL3ZqVrm2n4VuynP73ZHbQnsrMMarKEuBRFcmZCVgAdnUi5L7kvd5FRZASHeVctBtBG1XT7pTnCF7uSsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKJiy9MgiQpFfcmi9ZzoN9MCNiddHxqSrvfJp8raZoAy8DvxRG5PNtJiuktXp5MX5DSCimaHWxijMriMZoWcfoR",
  "key1": "i94uxyeXGWyeiaF5cEvvGcAtGbKdFjCqJAZnfQhkwmuKL7z1JFqXxUrWwhHykjemu2XdkcaLDtZQsivuyKnF9T8",
  "key2": "62HRmMvgw97me16dDmFQshwqTWWMPUCTiZeRa9xKWjkCmdPkBMCoDj6Ze6urVpP15pcg3kRjQezRkXQggtEr6txv",
  "key3": "H54UeSux2hrz34PwpbDfrKnudYpfSc2DfuSU5Joij24aqm37ZLH8tFHL993craJw42MwNDoFrNUrD4adQKWCW3m",
  "key4": "39RPUwdemo7t8YLGZBTFdNbjAa9SUApw7dqMZLiHeX9ah5nCM3zACedzNoVTaVgEPC1MPyqHKboSQU5FgV8hs6Ez",
  "key5": "2jtxNDpMHoufTYiS39QMa87F96g8Czw9f7DTFcG1uojPjxvMxRTU5ftYdAPnfBJkSjTpGvCKp2MrKgoBQo1YBrWG",
  "key6": "5drniZSx4NqghTbyhZ9xqVgDZz47b7TN3wPx6bJKGJY5Y89cN7b8ravqwa93f5SgmZVn9wNhDBNSyVm5cwNwLnH8",
  "key7": "4ReDXRNya9TNW9HpDrTXJ13AfLuCwq1JZ5pEh4wL2D3dKnHoNqHMie5h2fobbeaGbxuziXobmctyYe13DqXSD3Js",
  "key8": "5utMd3hHKYEXdTDyhtFS7ACXydswELJidqF6crCHZ7tjkjjva3Xvbg2ea62uBDnPKLdnKAasaPRGTPdx2TfjQv1G",
  "key9": "zWNFXWY9DUuja4VcuUGqQ9goSkEi37jmP6YsmMfTj84Eb6g77JXxB6b4AJiUR4EKp8BfvNK6HNdE1L6fKxGumkg",
  "key10": "5BhwudT3Haap31uBaf6QfghZERauXhPc3S2isL9Psy1vHRPrFwbZbjSSoEPK1qU3GJneXW7fUYthLCLCzbXx2Dim",
  "key11": "5PYWpnqugcFMMEEBn6Q4ZzAsmzr9TScDq24BDAKZYTiFJUzUZLje23FB1jjJ3J1yh85QnoLyQSTzEy1UHofXhQQj",
  "key12": "57R7wtALMhgcJRzuGycsYa9sKmsrRp82YE6RjVTs36NwdzCsvBWKq13RitRFdUZ6M1e8NvXGqx4Fz9jaoQr4b6Ci",
  "key13": "3nenNTVGrSmoi15aoXA859T2bmT9Tr9AxBxZvX9ta8QhLqFwnuWwNuwaKn4VMzJLob2ajQfDFaAaTLbd26DA9zyM",
  "key14": "4eS6QqMCCzgYvsHm3kXoeX3eswhD6d8fsxp7BMKNQTbhxAzyUtzUmswbTfmsu9cR3i9RnM3Hy67HmKCUMDRhKGH6",
  "key15": "Ay5iauj2SuKi2mwWX2aywsUBLH6kV9pbTR77nXv3cg7wtAb3MPj8GBYnt8XqRG2KrZvQ5ih2ZqYdT8y1fnWfo36",
  "key16": "3wNag7koLauBsKZ8hSCkgnQFZkt6nVuberH9tLHVsG4CHz5cYfTJTNpgrtuHakKcCgmJ4gWvBRm9QKRyom4piJwR",
  "key17": "5MRJaoyAg8Bo3AQF1sFfDLjzbb2TZqY6LgCCxLyxSsxcaC78QPMfkVXuN8ycTYsSiKbxE8FfxhriA5nY2DiX1Voa",
  "key18": "3Roim9KHCHuEXEM5QByzKGsnDG6PNPywVLKGKjcz8jqZ3fpZRo5F2i2LMtXr9aW5781WCUBVEBPGKRCkoZn2Q2UW",
  "key19": "5tJf8uUkrxMMy28K33s8VTYmgnubGRrSmgcxiBsUzJSgxXyuzLgeK7f9PrpnwMJcb9L2oNDkrJFmioRD4iX6CmQK",
  "key20": "3gBB5stXoXqqrD1YcPsYHhJ18jPEJgkXByM9gd1KCmALYwYTNL44BR6w2bZMPSxkkokcxsyKdQfYgnDyJkJPyoeN",
  "key21": "5ehSuFys1AE4AhhSDkzkbJyfuW93g9fSXSE7eMrLyhbgZzCXLt6LNaCX46kdT4GQwkFRM52HRiqGsmEYy6kGSTFg",
  "key22": "AEbg7Re8ifYfNiVQM5Hyr8F9VJTya33WktoUBEoAAEVmcXAqBjdZLV2refG6coUSqPCZC3kbnSsg48R9hKxjeFS",
  "key23": "jM1kVJr5vsbpbi7xFVAVS4Bn91JDrTV9DYLLtSLSqrbBtGHhG3kk4f936KePjHEFCpqi7p81av9hyHZGxqxGcSY",
  "key24": "2UvH3Fo5M7iTWnpuwDcZSSLpeupodvEgV7cgfzRMR4KZz1Z6ZGNHzJstPX6WeMMkHW65nBR7yJd6dWHs4wAJFb9W",
  "key25": "25Cbaj41Pwh1M2ivoXkStwrYhHcPawQT8vaWwmtLfQn9TahCEk3hW8V6rKnAcjmCY9ukSE4qYQgdnZLqHuwfkfdY",
  "key26": "5ZArAMHxhhpCYkkfNw1YtQB2LZUYfeJkbo3LHvbFzoJELP4Zq5rY1Q6CHBWXNzCkwqsPb2w6JnQAz7SWHiHNwgB1",
  "key27": "5d8Zjj9Abt6DsNaRT2zBLP3wuLAXy8w5yXGV4HFU746XxfWvMHSGMbEy1kR6rfwFzGg6N8ZZxRQdhNZYbGLcRZJf",
  "key28": "3TzGkcXzjXwCTtCsPCYU2jM8F7ZnCznVNUcZU4tfNQE7PrTpRFip9SUJhbh6gBzzessQ2a9kvJBvkfWXgULhCL4K",
  "key29": "2MqTmvUsXWBL5cDUzXJtvBkxaeYzRPiuPKdrmJ4qCu6aeRc8vzcFfDpiq6fNcPKKy4fSp5L1JQsLT17GTfsvwZds",
  "key30": "2o2v1HaT9jxK6wrtwAZjYN6Bbv5diytVhiKLsk3GyPWg5orTFurV4euaXpYRDcHmySTxxP2QGxcBQMmxXcMJ2MVi",
  "key31": "2HEkk1TTvgfxHNvYxzFBbZbZBLSUa9BLmYxuRf4zyQFvBoHQa918KnsEyv5JT5vQJxqC9syhHxCwEqctWNucb9fb",
  "key32": "4gmwPoP8o8JnWap8Sp4w3xw2sCS4sHXp3R5V2KMT2bVvz56DexgeMzKRbkuCWTc68VmkePsLgvycJAjgoFySVqnT",
  "key33": "45WApVBqXSXTjBUMmePUxpkZE4BHCThGm1FKxTt4AsYGGkbjXMDuwjmhz5e7DnwBcR8u85gAziyvXpQ1aWzSSxp5",
  "key34": "4UoDJhZtNf8WkVH94KL2sKKcunCKMKejgaUThWSZhYuMXBZSz1frEPWCfs9buzpfqY472CX3wfmFLMMBA82mHjpV",
  "key35": "2YxXGKac4Yin1pFGq6cyQTn4LbCXLCynWra2oWQewDqb7mWSJ26igwUZtdPZpyCimdX29JUR2ZNfPai8DgchekWH",
  "key36": "2V2y8DaYzZ8yjZNiELNQgWXYnF1PGdyY881W6T5KVMRa5VHja2xgPZWCaq2gdvngMNZgErjTNmni6nGpQzwpseHc",
  "key37": "4PDE1r9ejBg14ETmzYFfkXuqYhEYYEndNJnfSh5zXDiByD7YJhkxQySo8376AVa5VjtJQDjvj6FrLLPM1NuEEKgG",
  "key38": "59JdZAhgaraggq1s3KWyDYtPdK6kx5s4UYs8QJFe3ezbnPvXCcFbnM6ZYQcuT5mnLvA72ezcSAFXk5LudH5dsaU5",
  "key39": "4PqWw5N6P5fCzS3ugiZbuVS7nuBrU4irRyrfzXZWjzWJKRqzjvWEN19zZihoZJeaWkPbxYJPWkj9LBC7jacgijAu",
  "key40": "4oQXWNoPxkpw6MmMucynXBQ4erW6GUZh4TTYLqvPxkQJZL7ShW4mFzYJB9pjn62FMw1EtP4uXcWEw7Wr9ZmSQXuN",
  "key41": "41ZMfkCeas1eSpPRBJHRCfhuTAq3PzkBJUAHvMr6VtYfKzR3egSeLCHyEEbLi1ZV1UqKtaubKYarhzPjWX17CxDo",
  "key42": "6qS9PV2VdayVaJH78rSTdw27LqwR3gGoVPAAfqzKjUVmkzhEyoWBy1mVrVwa3g1VmWiXTpoRmwqfn68YZrjWDsd",
  "key43": "4KU1wnH37ArwCXrDyKYYt97bjw2AX66n8zihafUYnYybDPoa9ahDkKLdm6tcFP6XxM1DWych2STyJMqi86K2dwYe",
  "key44": "3yCgi4Lzc7RgYupUi8KyC99BoeckXD1J1GKT5pHE1dtBocjFNBARLZb8dFn2aXfQrH2q3Akzg8RUv8c9WHMmrK1a",
  "key45": "5c6zAZ58kijLd3YB7u8x3d3zPCBKoQi7JZDc37SQzf3Fw2U3uofJoJQmrC243QFwDFm6tbh6br4eMLBDU6XYr6Uq",
  "key46": "28AjdMfHDvSU4fnRsk8jv8kkYpqDfWMxijX9fyX98vvHyZuKXScZNyGzYXmz6a65s1v6j1cJTQ39oYz8uPjKCz4q",
  "key47": "wEXk3gmKd4dS8f4tNQt6W1YMEUNStjg2oBRBnEiF1k7jiDiACTMrgeFgHb71je1AoR3v6MVCocX749TayiVc1tD",
  "key48": "4YYZAF65BwLAFU6cZD9FH6Uq831NtPYBeie7Wr3s5dXUqa3nBsPtMAq46r4H5zF34aVYvA573REeEpysbofXmCoJ"
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
