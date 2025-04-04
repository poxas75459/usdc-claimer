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
    "2dvuqgGVGr6nJTNVWvn5tgF9nykz5vFDKMMmCUcuWxcbjtxkK28boG5Muox7HwJ8KHo1G4szV7ez8QteTJB3ohpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osiDnstboDQS4xExD5Tbnoq3tWapFCW7ox6r535UxFezuFaEMPPnCsfUf61SqQZDKS4XgD2PDBsopqdvrsRek9S",
  "key1": "5PFTn7iYA1RdSkCcTfESAv4bcTWJUNSrLEs44KkFs9F23y8tvyCctUUyYd2y4c1HaTAcP8k6pfZgX7pQV3kb4wNA",
  "key2": "58AoUj4SFdkRQ38mnYAwUZAHDLCucUJnEfAz39HdxDrMxE1DoWvwBnEvfMBzGLpkzrGByHZhjKQqcG12xmUdsBob",
  "key3": "54h69FxQVYnbrfe5uD8LAiBa7LTKjAoyq2LeKevrW11CmV3C9nmKE6GUeohAfkZnFrFvqck3uTUR4vQJgZU3bhWM",
  "key4": "2zf1qbBi8CBWAuNZRqEsHwkbxPiCzg3uyb8ME4rYoau5LyaahDdVPiS2qnAU6nUE5Mo6t4me3vmUWyphaTchTtgu",
  "key5": "5dHWFfePiwu9YRsZJgRkMo7fgghrZT8tJDLY5mWJaRsGnGfZUBGptm9dNHUoNLaRvhE6qCP23ET1e5oYZD99rUeq",
  "key6": "48EJekPnAjaBQ5jrKHZeyXnW8fwZr82rUKRWj1JZ4Yt74Ew3LiFfC1EJaqrWCoHCViXovxjCCBwEo3CHcoKACKK",
  "key7": "48vsRqYsVpsSyqyFrALRCUAh5wNxGu83g6BU8XgDqNpUm5MDXcXEQ4YTXu8Wa3SFs8tY1AYTGBZ5kd6vQbnMJ1tC",
  "key8": "5zmf4BvMR9jnfbNPeXwtanAbVDeNSkGxbvSAYXvHjPQEKeNb4TyXqSBxpMxVAHuuYKKcuqSxRrNctLNHNVEoQ79a",
  "key9": "4WVuRFxWn1HzuVQQrWUDSsFgHSBkS6yrM52hkVxUxwjK67Tf7cPumAvHedmYChczZipKt7LmwMVjt4zBxmW6rrkX",
  "key10": "5ox2MJXwhYbc4fAakjBwQTvDP8ercpUma75VEnxfT3GEcA9oLigKih7E7BRFFUKxK2CTynJxfGbd41YHWAUsCqsv",
  "key11": "4vL3FRiBdpQhiem9drCssURLkpw8sg7d1wvCjNvQ1uEEiAP3PG8424zVduSby3UpxEeWnCZ9usyPSPbMrGsMFxDq",
  "key12": "2ihiW7SfHbfQMs4512kjMpmWuXirrQcGJPfvnwvyKdYUYyPMNfhhFoGvgRgEafAgkLBPoqcjRPZ6meFvBUU5bzDQ",
  "key13": "3r4swgzXBXdF8y5Bkjjx7ZBCC92TGLwTDMUWBDfPt7geP4FZRkGPgPcwzhCrEfDdyvYRqfUWZgc326gqk32EBpFV",
  "key14": "5iJgQwBscNgiE4kze5iz417192dK4Lr6vwv7jniaX4LxVZfEuCDSW5HBSUNqX7WB7akcMH6zgZXn44aEieaWWD8v",
  "key15": "4Ti1exwoRYmDNMzVMy1gDVRqchTWdiMFBxw12n64itb5GojyXHN7fDGeAA5bQkcjD1E9zeakbdmhe1EJjMKFirMw",
  "key16": "3wovWRP5eQDpoze2JKEwzoQDq1F9fkJemzpLJHHUdbKQ1dzJ6g6F8uMXaRsVMpLxJ5S2wrqLygec7sCkNNiuUwoY",
  "key17": "2Q7BWA7k6UZMCeuHvWxZE7A6Zqm5Vw7rv6rxbWcXRjTGELLGVHPAATZyAWuxJHBAt8Sqqf8krRtbgVvJt8bSbdds",
  "key18": "2s8wmKT5ThxCsr4whMduhB1YY7WwU1J1VaCNUeNFkXtygYPb7gbXiY5gdbJKMJ9ha97nBEZiC66rT7DbjNyKyDfH",
  "key19": "3DnriVkbmL1QjWd5xEAGbCuR3T8uTzSAovtYH7w1WcXjjrDW2sEwWzUYstHorSCVsGKPF2GPX666HU3P1a91NtEQ",
  "key20": "5YaTctPyYAEwSAcX9Sh8gT2GuAbaaQGVGaAnMKDi6nzM1H4LEWhqs8Cim3eQQ8mUs8eaTajZA55WmhwZhxZoKsni",
  "key21": "3yiuHHpahVx4kvPkhCDdbTVQdcxqF5NL6DqmbuA24PqzHADM4boNe4PJxtkr3h1y1gnwg8bDBekY5L1QuiESPR5t",
  "key22": "3EKsVNce8tT786D5aX5FNYKSpAcJy9BALSZUGfV6x7VbCRm32HGHea9gNRBT1eERyYZB2kD2JQAAs3oJfvypUEcN",
  "key23": "2cunVjG1NJTncrSp3nZTXhjaBxjTh4xvgKSDMp7rD3T2aGkTdPspbqndXWxfy5jVi2CnwELDK4T61ZLS2cXw6wrT",
  "key24": "2XtPjgmzKfGcpCcvpWzjvgxGKYJEvLodqJB2qtuG34g4EMNZT2JSzgcmKv9U1C4VzvP9ez95idDEvXwqKZjo1sAd",
  "key25": "mN4tFqo8GKkuNv8jwEUgzH3WHLaM9VCdL9EiBDhggUkzsthpVufCk5j4QXqKAXGYqLimuDa5xmXMbiaop8HQzTr",
  "key26": "2nVvirypx3uP2hkArwkv656B3hqXCzEu1vtyKxSVdyfeNt1vb1LWvrMZF9XHsJtzQyMjtBC61be29fuC7JoMq8So",
  "key27": "4bQEURYX3UHy4oUdfKoNzmyT1AHUurfa9qAR4vWCpoirpsVhnNVSjcjzu4czwCzjt3ud4UYGGvuc2774zAY9qKn7",
  "key28": "5o7H35NK2F9kWESKezwjRyK2TPNd6RMdibBa8UGj1aBCFfmPEZg3NUCYH4bokNmyApdR71VynFmAFbPw57cFw2F2",
  "key29": "646fFq69VodTCtCHHDBNQ5392Jf9KybNy63xaockyeRv7VzUF4yam6QxdJ766jSH1Vg3jAGxHzqhZeYQXesUTVBi",
  "key30": "5LwRdNSdQ584zqbs7msqhtcoNR3jMpaykbEbuawaG8U9jrYcnTipq1yj8BRmHZzdb9jBJNVybjiiXpwgu1AvnSJQ",
  "key31": "3ZeFmKDaZdadNv6eahDnkbzWKaxVgHj95nDDQdh2tsXLAN1s3si3Boup6qXk8WjdpjTH8yxhPNVi3q2mtEUqbjg8",
  "key32": "3iYTvBmC1vK79oN3VojCgEhmPH4EvBGyeMESecCw1BWJQ1ZvvaUJxq8x5HX6zHrDsgZRvnGwyr9576pdDVWzPkFD",
  "key33": "3xNvaEToGAa18Fiaf5ZR96h9ZSVvTHwzXrBLwkJNUwrawp7wuqarLaH2Jk5yuuUN7qzC1LkFd1nSR7MZjjy9Krz4",
  "key34": "3mjefyUZWzeh9tJYC8KrYAZJnotr92FWa6i6if6gEgEvHdNoG3xLRYKVfuyNWhooKKu227Dzb6SFW8RwQTeDHBvo",
  "key35": "djyaLPvsCwdoPXKU6SJP2tk5Ha29viH1NVsNzjkAk64qWms7Vhqx8GdJhkkAaRJSfcS1YqY4QPsRUn6vUbaf78V",
  "key36": "3MVNyyCM6yYduRZcroFWgHkBWZPSvFaEDxHVHNVZH9boJgexs9ffhtJzQrSQ9cEeBdzfwgHcaGiDxmUAd5Vhmjce",
  "key37": "K8MiMkhio7TYAuRU21EgPvGPLVFBpf6K4cvTiUmcK9sWqGRaMX5Rh1uRjRp3WXJx7rDZqcXmLioCKhKK4gsdEfk",
  "key38": "39v8oyryjrsP3Vw4iyXLchSYYFSvoprNYjkQchhZAaNwo941BcgVZf8YGGQEXgnb2J92WXSA4vuCqNdCyUn3sxgc",
  "key39": "426F64fZfYyvTzLbiFMePbiyYVGTugtggMAzkb8HNwsf1NSAFrg76hakhtzQaUpz1unYvq7fDHpqiWj7tBNBGLhg",
  "key40": "533JzxGGfwkW5bpJmQMxyMz9rGpQjP6rDL5PznBsJLPumiipSpjnj5sb2efSMfi8GvP82vx2aSDSyW9qcEaWorxJ",
  "key41": "5JFRWcKufDL3pvKsQVvkxPHy85PgQmLsXmgDcn1SWePqbK3WVegqTu5XU6zjqMtfMSZQsNAD2FPgadvdt2brJwT5",
  "key42": "2Bw9atH1HvCVZwJ5DZuDU7ikJHKmNKJSTBaHxyQgETDWiTeA3tBXvsYGvbHjszqufpiVrYgxbd4j2zTpPRfdNUo7",
  "key43": "5qDXSrwXyezZP96VgEANP82oD3SpeVF5Hs8x3yW89PhwdVmtCKYCwLKcTZNhssFBfDuCrU3HCpCXyHGsbQaFFBdX",
  "key44": "Gyi3pAyTrMnc3PyMV9LXtgVKkUMdJUAFA3RkEWbcS61sfsXWRuEYxAs5NeVt92Zvvm2RHbyqKsoKxoAmUBqNBGq",
  "key45": "5aNGcWDUgVrtCidQEeNppAaEMHR5EVndN2wCpFzNvpQTa9pzKHaeBMM7sWcg1sgQzR759xZTgMVjhsDzECGWqHDZ",
  "key46": "2Wo85ki4HeYUHRTCU4bTRT4RT8p7g8CQFFJgpSZA8jLELzvjDXzW12zvH7EwdwJosxasUmZioDBncg3am3hbVD6Z"
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
