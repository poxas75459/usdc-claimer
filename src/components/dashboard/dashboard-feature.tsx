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
    "jQc9mArnssqRW7fWYtjjFQyiLjYEgZSGWtdAqCscQo2bhuwbY8jqev3WeutDvfeDXmvURTM79CsRjqwTugW4aXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47iJsWpLdyhNMwxh8o47YvRQzwoAo9ckRrmqFVYduoaKX3s54H2gUbceSt6vsJZo5VZePhhu2j652AaiD2ws5WyF",
  "key1": "uk1MChGs5iXzREUCovirV3EEPCkz96EvxM4bT3SoNH8KcbB4UedQhd2HLae6pi8Nt7JkWxQ26P81khkk149A3me",
  "key2": "27x5Sa2LesakUZy4TpCcmRFDEfKQY6uR6bosJqD8LuZtStY7CrzS2RGVM6jUXN1C1G8u9Yv7tTGFkkbo67BW2dKG",
  "key3": "5KcVmqA48r7HZYcFQQBbawydTtFQe9LkiD3W2nJVoWTuo9wxjMJAXxTKAogauzi6u82Hyqg3E7JfhqCN44cGVfM6",
  "key4": "2DS5PXeci3ZQywVvNHoVv5CHJ8UcQU9SAGzPKensEZq6KpMWjDP8aEVHWnQ7UAj9cFDSAGZE6zXVNfv4GdYf5c8G",
  "key5": "2JFy4EqcHdAEeSHEzZTyQCSWBRagANeprg3aMFQFKztC7APGDJpnkorhDGjZinY2Q2ggqEfCcWv1prYwuN9etoXb",
  "key6": "6PPri9dF3QaPbfwjpnTN8TpfsbW4isktQW7Hw3mtLubYaGd7Nf8GzAiaBRoGnx6Fiaxg68hnAcumYsX25pKKt2u",
  "key7": "ChUoFQUcUv69Fr9aqxspMqNfssK7rhmPPdS7jsvsam8Sx5iwMiibXj6RP2vM7DRtHrsv44m117RommqcAe5DxNq",
  "key8": "2ni89syJGEwn9SZWSJ3rTk1mLczEZgo1BEq9CquyY4H4uRLrTTacfJ75h8iTZREFbmdoSwzLxgadm1EaH7GnLfyg",
  "key9": "2eh6usjhTa1ZSuM46pERYt24GbSV8DCRESsKLbsTtc7sGsUfPoVMdr5Pk4xexy6LtU5ksC6wN6VyrpmPQNYGDE1o",
  "key10": "5iTWJGEcwhBk4KeNZ2KQmmzFd9nBB75bJWhKsMZKtMzpmwcMPQgvAS1eLgW49pnk4ZvXPxkEDq7zYieMgRJFHaqf",
  "key11": "3skP2T3wWLFWw9MeSuBo32Zn4DyJZ7tTMF9t2enBQV57aPs9JpZkRn7BmLhd79CvZU5vMHc4e4aytNW4o9s5aSYE",
  "key12": "KkekEoQXaqxwx4ca6uSySkAhrh1M15CACJKdHfW2V9z4581PJDwYRYy2A4KaMzd69F1GyRwdhEFgKeVNbAGTkWK",
  "key13": "29dCDaei1LjaMDmkWikx6g4ySktHQrUvAhvTKoC1DX9E5nE84JJZ8vPaiHAsjDEbwpbwsSu8cTs3TM18kVdfpixs",
  "key14": "5ar7H8pACWTDD9WtAP2kQDz6KD96pQScKHzUbuTg2Kcj9sfwLgLtWjP1VqArNw9eoANCabv1nStsmBsWa1oC8Z1d",
  "key15": "4LqTJ2CZ3jvVzMcAWLnjmaYrQtzYAQvWRAzsiNH6Temiy5Dt5fpCoWFYtJSvDExii94PyhRDTwP3GsKGVifyL1U3",
  "key16": "4HT4968rj2yNcKL8beHhqBpyqcsYBjoCWFKokXWwTM15Q8ACBJzzRnRJwmCpVn4BUjYaxceZCG2aHMEMPKwAZVSh",
  "key17": "246igpHsmNY266CyTVuXx5dKHUESTAk9iKFVPrwsvZ8ALEvSSFc9AK6kbxxPRpo4N3J1f6zhstWa5TzXsQuHhero",
  "key18": "4R1yigZRbKEefJ1h5B8tHWDGfPCqSSj2NvRaUZ8Dimx9siuoqSu1SwvPC4My2w642vU1QY1dqn9RzhSWgQwndBRR",
  "key19": "3Ypafgt1evwkuM1mPS6aRndcgmGtTgFcwPci8LUMdzQYSgJ5u8W5XCUMTocPfg5esDnZjsJnBN8rBmb7DFWBaU9P",
  "key20": "3P8xpEx8baZCYTzVRUC7Vq1dFPQcfw9x4QwTz4Q699n7vu7rRy94Ca2bHVHKNjCEcofuU2vbN86RsNQVwSYacrRD",
  "key21": "4ASwc7QgvGrPahsh3eyY24ZqsCoUq3nMPWTgu2njnLU7PVoU9Hv4L6SMn1VurQmWRgj1hryqn44FKh3aob1ZE9wh",
  "key22": "2zLqc8Tascps8zonA5LNHtC31xRvpTcKMrJ1xffitA7RsAQNPCcw4AbEnd4PaTFw4XWeKRY3zx422UPq95RwGZxF",
  "key23": "VQh1GKky7zXGkv5n1NgURq7F2pbRK9Zcmp8nqB3yYnjdqYFkR2vtRq4ukVtGnXeRk8rmTwrFGdKzGSKX6TjuxN7",
  "key24": "57Xgnm11eiUcEJ6e3679tvFLUhMitsdhg9epeNXwM2Uf3XRzqbNXqojUYP27cmoaHkDtw7V27G8XT1LhkMWTG1iU",
  "key25": "2nmNMyzxEAh2Qa5DGaxo5rxvvM1aUUL5TFC6aJ97xQxFDRpcJ8Du7r3mvAwgPuT41EoxS5nUNEjYmTA3X7cSkhRH",
  "key26": "3ERjJ7cFukyV1bdaEmADrreF1kTX5DiACfoB5jSaqeCDmoRCMwrpb7KJCTKsh24UzbMiWVxbhcsyTx9PnWTm91fY",
  "key27": "2bTEGzuztdtqJUe8t3SGLLSTkoVii7bKKSUYE9Um3Lx6ptUhpf8fWWZJdVmJvv8ccqUjsYguqpxd1TxZnNxLS6Mm",
  "key28": "5Um8TbCYTqEF9XnvKWYqtCSXjLA7QZWCtW77HiwV1dkqQJd8jn1caRy59EEt224sxPp4Bbn4BA1eM68eCJm4wEu3",
  "key29": "3FiJWiJU2F2hzynMgXFZaPr2yLowoQrdwjk2zDGC41pcMhyxXJyC1xCJyB3TQXstJi9KQBzpVizBEZbpYaGyDxRo",
  "key30": "rwAWZbrDWovRwDnov9qsyeEaxzC94GvUdwN79ashiJr7yTzhHABqfgUgCXWDgw7s7bYHViWb8AMLPcDoQ9X8oQM",
  "key31": "ynTKqitsufJQnBJXFtczDE3UDcVmb4xSZQCdZCp25DDUkxt335bvqLnEpGH5cKpREavA9iyRnQMcufwFYcGq7vH",
  "key32": "2Ri497cfDgNx8sqmL4doC87FpT9m3zHwPyGjjzdya92QAiZetfztbWkaAwsGoVC8FKh5ssaz1gvDtTEJYrTSg35i",
  "key33": "2psrozUg1i3BYUNU9oQovG1Z6xPVLvoM4GkZuYbTpqgMiWa6HfzsJkUctWfDDthH1wMhJipsvPdAFx81MH2KFhkc",
  "key34": "HpVzTh71hqxVrU5KP3aKKqpk7zRd2GM9di1mBvQ8zwAfDYbUPhJ2HFy1DNyh1pkoozRFydrmV11FP14YTv8B7Pj",
  "key35": "S6eT5aTVCPmoCjiBR2FpvPEhsM2sUejqexGY153sMo3E3WYAjDo1CMh2WWMMb3KpAFdjALqB5KeGCK2t2craKnE",
  "key36": "2p54SsxLXKMsnJsCA6EiPGZQqPbp2yjyVVaJsgtm6eiErL9mF1XZ5sixjiJKWkFZGXjo4rvxFyuuauGvthcNqVq8",
  "key37": "55aS9ViFewCMoyV61maPjwoKFxtXFdDejG1MPbdNyzejp3pGDFvpezxU1uR8kpmsPwV74kFGzd6ToPue2tcgBzsW",
  "key38": "sksuDboX7tayW8x9xectUsgG2gNrhjKZZ7xj1vEPFXfuNL5bQka7avGARFDGTGC7gS6yZbhMumXLPfp53mc8Jky",
  "key39": "4k9dSTfZoBMAGRbr9eQXQ2Ze6j4A1YDajLan4uhVACy1oxC8ZLK3v9Zq1AoYPUdyjQLiWTyZhWuZSBMZLwS1BQsp",
  "key40": "5m9hQpZVVzx4UYvL4wAaMdZrrnZ4ydkPzM2AjiPoZ8VQPwWkPwkAPCMzC3kRi2dAKQC7AkC8PyB4RN45wN8mnQ9y",
  "key41": "3aSmzuUrcLn9t42LDND4UiEfov23Yyy3bNENKucFSpeuruXYKT6LvqmVzcy5SzcuRFKLTEjZhNM3tP2xmjJPUsoF",
  "key42": "5CEyWeV7SU4Z612ow3YhUeyyAtdxXEYaEpLsDkycTPn9sp6Kp1wwwuivzbyePBUtsiohMQA3x9t3Lz28VgRbLsVA",
  "key43": "3E55iJrWdEcJGnhp3ezr3f3ByR3oESLSGBR7ZM5phRh3ByBdsV1hwqJDNWnAUB9PtSQQBukhCjBGwc9tQeRQ9dK7",
  "key44": "4P56fAMJcNjQrSsaeaFASxq2XqsCXocZgXqX5m6orfBCvKUcmauYkF5VEzck4kHjDwRA8wviRALuUA2LN9HF5818",
  "key45": "5Jy6B47ZiStvzyKiVVPv9w94VJBSKLDvy3zoUSEG15auexpxUrC6SJuTC9WdYgJ8jrHX1FDh1tkbk3JkVA3rDmP1",
  "key46": "3tuB95NiFmhCtDDNwCR76yRKqsqVqD4sveMg7LRVE6xeNvrrDuaCq8Tc9Mza8op8mmQvdfztWGX7kuctAThMmfYM"
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
