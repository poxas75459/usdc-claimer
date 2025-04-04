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
    "3HGGmtQHZri4daG8HmJM237SzzWZ2PvvaggsnbfjH7pd91g8t7LRSTHygKkbDwng839peE6kzCchVeYNE8jz3JEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AdvTur4DRCmU7dSJgmxDNfqFc9jxm917ymRtSKstQbX8u5zAwp6eVSyGoUHvraGSGYvo9WfkU6fd9aKt2QNcFs4",
  "key1": "4HgfYtFGkL9Tv8jvME19FocNQhY9jnoExQf8LZiYByLg3C9bGCoYvzX6A3S23sMXWrDhDSs5M9H3Djx3MBJD8yQm",
  "key2": "5kvgfQjefo2tB16Aody8Jfy1d9UNXtDJtHD3NzZXLLbAvCm1SNohjSXYihMQJ8u7SAQQETV6BAV1dTtReMU5pJZE",
  "key3": "CTPjouftEmCsMjqxG2rzePKu6aQconXYnfM5sZRnSwqhtE9i6wSRdktpKh9VTCed6RPUU9M6Y49T4AaaAoQB9a6",
  "key4": "3utx8qnKRJGmiQ89AbWRjT7TUJMnDfhHkD3paknQghzUZtvQGejyNNVgu6KtUAGbjgUVdziLgdh9mL9FRapk9atC",
  "key5": "4WBQCqw9DBNXp6hF6S5JA15MixwCo7YBwKpTuRUWePTJr3Y5PTubujoni9FX8oqnRAMcUSoY1hyFf6MrkZDwsz9y",
  "key6": "35TuNvQSV1T2Zb5fc9VdS7y9SR8Fh3wNuW7R5HewpSc4WoEWAKjTmqwgAM4kPZB3ikFRMvCPaQwv6f5Uwkf3ZxNK",
  "key7": "4mYF4G3nqPEsFLyrZe12D3LwnBNs97CenyiiHKcaSqEkpbeFtzLACYqE6LGmMa7YhygQdsjJ2yc5gSSjQ1kpwFD1",
  "key8": "2qSSyBAigWPce2cctuW5Wt9oM59FfbbL9YyegDjGD2ULvUJGbTES6XGs23uhj5abdErBoA46QF4gftAWdC5EVqU5",
  "key9": "1Pr6soHqGhBQEkGRcMQcyKbZ7ZZJQj5uTjJoRBaMGFSqdJ6k7XDKg3DVtj1K1BGPhGqpoHx8QyVmZMHVFbTv8Hm",
  "key10": "4uRDoVh26DKbvfrHwQ9XCgfu1Mog4AwuH6xbUbTNaH7uWHWT6nTXdcXo4jeysowgdpmqnAuwZ6gbbbPzzkXDyqHE",
  "key11": "4ic3TaffqRbACRfAY1LMoV3AXPEaqMKhSK9iYw7s5bYiPu9Yos7zzExAhwXyBCvpNXFppvoGntg9wowcbrGQFzkn",
  "key12": "64Lwej9qMM3yic9KdRUM4D2iZdq9bi3SEB4GGfTXwd67dg6SqDiyJJLuwMZLPzkT8JVpFeXzAMMYNqQ9LRRqjopv",
  "key13": "51v4bPUjo5KNF6cLCebBKkyRPw7Z2CxqU38Uqjju6cTYVuenoSecc66sb2ubeg9QKbgUAsQWU1PUoFhGKWq2bEJL",
  "key14": "5S5LLsw8bwoZa3HYNsiW1vWeT11jDVgifcfnu3jaY9WvAUhXTY5r9ma7f6boZ5mT5dEDDfaXXUntKAg3ebnwr7AC",
  "key15": "NKHjreCRUzzWNtWrJRbeiKoFkwHx9PqoPGmPfsB1SDtgoxNSgcF8h8ptWckrqy2Ro7z7sWbxq2RfmgVanxh4o33",
  "key16": "21qkVu5idZdsNfc1o4MKQDquiiS1WAre5DyG6QgYcVWtwsUUMFxVSc6BuSxA9C1o9eFx4n36imbEg2qi9Kd3kmPV",
  "key17": "3Tvew9N7qaYcYizgoJUL6cetWNbgBkJaZZTx8gFzHJvgXxQGp4ppUBFUqJf2WwSYa9CRVhRLtLuPUaJYw1gsMkVC",
  "key18": "3QYy7NawTBxaSxBnvrjCcSCYe8whTGkDPi18PbENt8eSqL8juMZVJVxwxp1r6NYGTzFpVtZmz7UZ5vDFXeLMStLt",
  "key19": "3kfrLH2nqht7Yga41dBc4dUSVRZPNBn418X7xeYhSnKZswLYTaqTz8NNz8geWJku4b7PXGY6gJyaCmkcTXBvsktR",
  "key20": "54eAHN4HCigam2q7FzUEUBEqGz8W57doptMAQe2KQKKnDbC7TsDUnbPzHp4fHSJ3MUPuzGmHCtv4WmFhVEv53YVT",
  "key21": "2Gx35r84GpVntmkhTU5838mZgngbQGBpyLNrxaukLvZ6SzdYiuUZg5AjvpEMdnVcv4fK1YwCNjFek5okcN2xKQqL",
  "key22": "3Pk6KSWoLyvYN7cKjZxupUiQruHUeYzC8BDwjHuhX1BYYBar4GWtEWVmUndFBtQVqoGhQUABXmwmadBoJWq24adm",
  "key23": "55Qkyb3ab1g5q4CbdqsEGhJavRpbnZ5oaTSgrF7NDiMaxA5mGyu8WFZnLHsu35g1Wj9CE5r45bFu9m5mHZbijsn6",
  "key24": "56oKgnCQP8qDZ8siV2V15DU6L2sL75UTsygjerbQVTXekU9ATthQNx2uTKcoi6Gk5pfiYF9T7tEACV6Gztz88xZp",
  "key25": "M4QoMt1P8D3Yc712PoyomN7EuVodKADsC5J2qyeMVmaY4rQzkRDC787fnh1do3qXUwu3yWonbbuwuBueDiGLfC3",
  "key26": "ZeYduEuvwGGVdBD6oJgTLHkGfAsJnuzVEfqLSJL4xkhbUPDWJS6gtuSadQ4gCpp2PCp8KZoz1R9ZmZkexRaVMcy",
  "key27": "5QLBJWXjq5Zi5ZbMngM7dNooPdLh8rQ7J9hBzZy8H7msdiMMen4nGGCAKnt2FdWNEG1JspHfrZy7ktBAwUMeSgyi",
  "key28": "chxUbg6EoYi1xe6HQVsGMnpHKvoypvQuVNhyd1hhe7vi2tu7W8tDXYXG86SZ8WLxuG8fp3GCYUDdAXvCbZsjaWS",
  "key29": "2ypoBifFNKs9iYr6DZy3rhKnHT39wX2FTBJfJQuLTEr9QBGAxPD39fGJ5Ac1YSj4SfcFHjMLS5o9mYrgGQuGs18z",
  "key30": "3YZ8FYc2YawLt7e2eqYB8w3GZDHjhNjTBYjpkNK4xorRAaPHha2U1Xt6Xt1Fn1DydWQWsvyBm1URaFwBqatYHZbd",
  "key31": "2hPoYcadyvT6fr5KTuAkZtwgd2fSQKFnDBPvj32GbYnyE4hX6oo9b4fpqWoqyxhmqngYgMpvE3PUCLJ9yDgCNiok",
  "key32": "5EAcunbfpSbggaYVyhYWBoXgz5JQ1bPYSu8tgXXBj4NUPEMTHHzVVU7U1rHjuP4gzxfCnDei5xLanPCtVFfy47Ng",
  "key33": "2ReWZCqDLWT5piFXh7dsn14nRKKZpHJkQtx1T1iRQjJ4jU27AxZejYj7o5uDCdPjZ2npC4NjjhfBj54zyjEqLzt9",
  "key34": "5PFx1t2N7NJjNP5F6LExbTAxAVcDvkeBVe6BjAjACWKPYwowyqomAtW2UHtyD6Tw16WzUcgroFWpHmyLR95dPtQx",
  "key35": "3ihKNETmdkxteZWzYyLQhW7XRJnUp69A3vSD79CLdzDgd6q8WQjHPYxzz5Wewa1E9Qcz4oxSsJ4xhduFipoJ5r76",
  "key36": "3VMpxu2ZcC2mAbwLzsbhpaT2oQURP5tGfAn9rA2hWQscvd2jhoxQg8EK1wMcaSv1ZodGbXKiuLsw5nTkZUfXqtsN",
  "key37": "4XdwGEYhVeHnGP8Twcm4pbq9RxYcbMHPFTgXWwRHMaf7dnhnfqrVRaJLMwxqdLZabp2MM7Ev4ykjheqvGtA3N8qS",
  "key38": "3LapzzNPND9Xt6CHPzpk1NPxHRcCsT2q32ZCeuo7sa2WvdPiHnHtMDWc9gUvvHSTatmULnEGMUfb6mvuAgXpTxtw",
  "key39": "25mjZRM8aE9149AwwqCJ43bZ2M7zPts7gcEojrDb4iqV2GnckL7pnxhMW5V33zNmtbypNNxSaPqPuE3r1Wtwn4Hc",
  "key40": "5FkEugRfy5oAHN6DkCSeMaYyK9QdS7FsTXsY5eFSX8mGx2qY9c29ihcnK1meHPoBUHgbPwM2zX4REShdTBx7HZTU",
  "key41": "3MQHZU1rqijdkw496RJJFSHkMkPeV46bJMQfh3BuEgwrT3yZizDDePs62j8TJN295WnXHmxD3kpArgVe3BFCzdy1",
  "key42": "3C1ojxrZwSY4djr8dorNjxiVTRBfNrqhDh84QeV8STwVoMn1GLZNQPrcAJzfH911fbukvDf2GUynHYLbkfjLv3oa",
  "key43": "4fbKripgQQq8fYcZgrWPaMR8hySdo32X79ge3aB3jdjfKNwvWKrX6jdWZxvwtp9MDL8HbsyyDrMD2V6qv9E8fA9n",
  "key44": "5deJvhED3iysfEaYa4J1AW3ihpPHQkCzT2YwXS3grnzWxUJRAZd2cEwvp7u6PUnBA7dBY9Ckhe49rLsbrwduzQVe",
  "key45": "h4bLfo6QVyTffVByfDbJdUf7mJ2jv91tEmxoUwYRz5iuNd4QGia35DCU9pjUkamr4s7ugy7VkGV1fSCGyod6UNw",
  "key46": "2CT5Y8hF9ww9mDG3LrWMCnzcbEqDwYNXyuFwq3gQAYLZxAvXbqVypWAq8QhThf23BX9zeoWqzfoWXLxTE9y86x5z",
  "key47": "3XH4Z6xxd3gW32tsT5qS15uXqiBVCHPwJ92Y1KJDzqkdZrbRgWaM1g1Prpqutsk9zvpLFWug1BjFs4U6zvqW7HTt",
  "key48": "4gWmXe5LbGfV4zCsNyY535JTmcaAyjqQC1J2eQbNS6hpWARFQn2VyoLMHSo5BHb92SC8j2CjUAg56WNXJxWz4TLU"
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
